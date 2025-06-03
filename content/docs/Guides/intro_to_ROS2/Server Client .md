---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-04-05T22:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-04-05T22:48:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 143
toc: false
icon: ""
---

Publishers and Subscribers are good but what if you want a two-way style of communication between nodes?

Server and Clients are similar to Publisher and Subscribers where they have a `Service` and Nodes can communicate through those services.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUCBLII%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEPCcLrdlzrmCe%2FXU1WPWZ5FJ1Hh70Klu9l%2FJc8z84ywAiBvmtH4oH9rXa3JnK0LNKToD%2ByFQ%2BUb8FVJb3qbl%2Bp82Cr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMl0qNriiMr9kPC47vKtwD6rAefFYwg3q5GrYKY31zsOmJ%2BuKaJUcBM1viEV2N7SuHdZd9pe5VJ2QnAAAFSzfffMy3s7AKmztx%2BIsnbMvXjI3USu88uO7WxxJVrGG%2BURn3t%2FO2eTBV5kfseOEiYqW1UZx4hziCHF7aYYdrpMyrQelWsmJrFiqU8TYga%2FF1vF%2BE0iwsAoAok7pRAH5t7XR6wjeKM6apRdUgttCPv%2B5y64ilOdVcx1sUQVfyb4HqsMesf8g04mb9%2FT37IKIniT%2BHwhqO0AAwuMJpiiugdnYxIaLLq9bX22qTyaQi9T%2FeFqKqnMbUFQcXCw3VloOr74G7HMWT6UY2t4WrifpnFppPznxwAqCHWEA%2FHQJHQCbUf6RVyYlJH4uMrDdtTPqHGTDHcMxuhjQ%2Bcgavuo4pKUkk5DSLbWiKqWxWdl3EulUk7YiShuqnC43iP8fwMUvt0DA%2Fha2HWDd0VGz5e9onWdxB%2FSIrVy8wLehyeVbm7uD5K3v96YlH1xrFnV5%2BYK8cXTHD%2FJmZE1%2BPPhPCbt%2FoGUJqBg1dgZ3ZGQRHLRQAR01VuCVJaawYDzkwnl0jynBtTX7vpYZY%2F7%2B4PUmd07pPidJon5Dl5ojE%2BxK8n0rEXRsnV9dWrzX5vWnd%2FrLkVc8w%2BIX9wQY6pgHz%2FYarfOu8dQnY7lTcReSI%2Bi9aJFDh%2Bp%2Fnv%2FDZnuDfe4aS%2FXonv5GcaQzeLqcq%2FalHO5h0O49BX0IFYGAd2S5OfAoANyqkBEls3CZV1ag5kFPOmXtma0we2vV8kNduqqW2QepJObW8Uw2lwv3kWi1bQyNY%2FalCLlDc%2FOJ%2Fmu1Y3jebbZvUlG6pgQpdXt8rZ8txSmf855yl2GbKOR1vRC8GjKo3m9Dh&X-Amz-Signature=1ca44f084447513ddfbe4431be53b33a0ee25a81e655a460e08c8ecf38bf1e50&X-Amz-SignedHeaders=host&x-id=GetObject)

![Service-MultipleServiceClient.gif](https://docs.ros.org/en/humble/_images/Service-MultipleServiceClient.gif)

Let's make a basic service where it just adds 2 numbers

# Server

create a file called `server.py` and import the `ROS` libraries:

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node
```

Then create a class `MinimalService` that implements `Node`

```python
class MinimalService(Node):
```

in the constructor run the parent constructor and create a service object:

```python
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)
```

The service object takes the type it expects, the name, and the function to handle the request.

Next, create the function to handle the request and have it return the result of the sum.

```python
    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response
```

Then outside of the class, we want to start the node:

```python
def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

## Solution

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node


class MinimalService(Node):
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response


def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

# Client

For the client lets have it where it takes in the two numbers as input arguments before we run it: `python3 client.py 2 3`

create a file called client`.py` and import the `ROS` libraries:

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node
```

create a class called `MinimalClientAsync` and extend the `Node` class

```python
class MinimalClientAsync(Node):
```

in the constructor run the parent class’s constructor and create a client object and a request object.

Then we try to connect the client with the service by using `while`. This will search for 1 second for the service `"add_two_ints"` before it gives up. 

```python
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

```

Next lets create a function, `send_request()` to take in two numbers and call the service:

```python
	def send_request(self, a, b):
		self.req.a = a
		self.req.b = b
		return self.cli.call_async(self.req) # uses client object to call the service
```

Then outside of the class we want to run our new Node so first init the `ROS` library with:

```python
rclpy.init()
```

Then create a `MinimalClientAsync()` object.

We are then going to take the two input arguments with `sys.argv[1]` and `sys.argv[2]` 

plug them into `send_request` and wait for the result

To wait for a response from the service we use `rclpy.spin_until_future_complete()`

It takes in 2 arguments, the Client Node and the variable that holds the result.

finally, we get our results with `future.result()` and print it out.

```python

minimal_client = MinimalClientAsync()
future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
rclpy.spin_until_future_complete(minimal_client, future)
response = future.result()
minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))
```

Then we shut everything down:

```python
minimal_client.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node


class MinimalClientAsync(Node):
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        return self.cli.call_async(self.req)


def main():
    rclpy.init()

    minimal_client = MinimalClientAsync()
    future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
    rclpy.spin_until_future_complete(minimal_client, future)
    response = future.result()
    minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))

    minimal_client.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Now that we have created a Server and Client we can run them both to see them in action

In two different terminals run the Server first then the client

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUCBLII%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEPCcLrdlzrmCe%2FXU1WPWZ5FJ1Hh70Klu9l%2FJc8z84ywAiBvmtH4oH9rXa3JnK0LNKToD%2ByFQ%2BUb8FVJb3qbl%2Bp82Cr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMl0qNriiMr9kPC47vKtwD6rAefFYwg3q5GrYKY31zsOmJ%2BuKaJUcBM1viEV2N7SuHdZd9pe5VJ2QnAAAFSzfffMy3s7AKmztx%2BIsnbMvXjI3USu88uO7WxxJVrGG%2BURn3t%2FO2eTBV5kfseOEiYqW1UZx4hziCHF7aYYdrpMyrQelWsmJrFiqU8TYga%2FF1vF%2BE0iwsAoAok7pRAH5t7XR6wjeKM6apRdUgttCPv%2B5y64ilOdVcx1sUQVfyb4HqsMesf8g04mb9%2FT37IKIniT%2BHwhqO0AAwuMJpiiugdnYxIaLLq9bX22qTyaQi9T%2FeFqKqnMbUFQcXCw3VloOr74G7HMWT6UY2t4WrifpnFppPznxwAqCHWEA%2FHQJHQCbUf6RVyYlJH4uMrDdtTPqHGTDHcMxuhjQ%2Bcgavuo4pKUkk5DSLbWiKqWxWdl3EulUk7YiShuqnC43iP8fwMUvt0DA%2Fha2HWDd0VGz5e9onWdxB%2FSIrVy8wLehyeVbm7uD5K3v96YlH1xrFnV5%2BYK8cXTHD%2FJmZE1%2BPPhPCbt%2FoGUJqBg1dgZ3ZGQRHLRQAR01VuCVJaawYDzkwnl0jynBtTX7vpYZY%2F7%2B4PUmd07pPidJon5Dl5ojE%2BxK8n0rEXRsnV9dWrzX5vWnd%2FrLkVc8w%2BIX9wQY6pgHz%2FYarfOu8dQnY7lTcReSI%2Bi9aJFDh%2Bp%2Fnv%2FDZnuDfe4aS%2FXonv5GcaQzeLqcq%2FalHO5h0O49BX0IFYGAd2S5OfAoANyqkBEls3CZV1ag5kFPOmXtma0we2vV8kNduqqW2QepJObW8Uw2lwv3kWi1bQyNY%2FalCLlDc%2FOJ%2Fmu1Y3jebbZvUlG6pgQpdXt8rZ8txSmf855yl2GbKOR1vRC8GjKo3m9Dh&X-Amz-Signature=66ef6db70897aa5bd95b008ea7c64ba42bbf2d6a51299cfbb792e7f415722b36&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUCBLII%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEPCcLrdlzrmCe%2FXU1WPWZ5FJ1Hh70Klu9l%2FJc8z84ywAiBvmtH4oH9rXa3JnK0LNKToD%2ByFQ%2BUb8FVJb3qbl%2Bp82Cr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMl0qNriiMr9kPC47vKtwD6rAefFYwg3q5GrYKY31zsOmJ%2BuKaJUcBM1viEV2N7SuHdZd9pe5VJ2QnAAAFSzfffMy3s7AKmztx%2BIsnbMvXjI3USu88uO7WxxJVrGG%2BURn3t%2FO2eTBV5kfseOEiYqW1UZx4hziCHF7aYYdrpMyrQelWsmJrFiqU8TYga%2FF1vF%2BE0iwsAoAok7pRAH5t7XR6wjeKM6apRdUgttCPv%2B5y64ilOdVcx1sUQVfyb4HqsMesf8g04mb9%2FT37IKIniT%2BHwhqO0AAwuMJpiiugdnYxIaLLq9bX22qTyaQi9T%2FeFqKqnMbUFQcXCw3VloOr74G7HMWT6UY2t4WrifpnFppPznxwAqCHWEA%2FHQJHQCbUf6RVyYlJH4uMrDdtTPqHGTDHcMxuhjQ%2Bcgavuo4pKUkk5DSLbWiKqWxWdl3EulUk7YiShuqnC43iP8fwMUvt0DA%2Fha2HWDd0VGz5e9onWdxB%2FSIrVy8wLehyeVbm7uD5K3v96YlH1xrFnV5%2BYK8cXTHD%2FJmZE1%2BPPhPCbt%2FoGUJqBg1dgZ3ZGQRHLRQAR01VuCVJaawYDzkwnl0jynBtTX7vpYZY%2F7%2B4PUmd07pPidJon5Dl5ojE%2BxK8n0rEXRsnV9dWrzX5vWnd%2FrLkVc8w%2BIX9wQY6pgHz%2FYarfOu8dQnY7lTcReSI%2Bi9aJFDh%2Bp%2Fnv%2FDZnuDfe4aS%2FXonv5GcaQzeLqcq%2FalHO5h0O49BX0IFYGAd2S5OfAoANyqkBEls3CZV1ag5kFPOmXtma0we2vV8kNduqqW2QepJObW8Uw2lwv3kWi1bQyNY%2FalCLlDc%2FOJ%2Fmu1Y3jebbZvUlG6pgQpdXt8rZ8txSmf855yl2GbKOR1vRC8GjKo3m9Dh&X-Amz-Signature=f2383f36e8e4fe513bf1b0eff2f898f97dd577b28ccb5afcbf0053a48b07a42b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUCBLII%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEPCcLrdlzrmCe%2FXU1WPWZ5FJ1Hh70Klu9l%2FJc8z84ywAiBvmtH4oH9rXa3JnK0LNKToD%2ByFQ%2BUb8FVJb3qbl%2Bp82Cr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMl0qNriiMr9kPC47vKtwD6rAefFYwg3q5GrYKY31zsOmJ%2BuKaJUcBM1viEV2N7SuHdZd9pe5VJ2QnAAAFSzfffMy3s7AKmztx%2BIsnbMvXjI3USu88uO7WxxJVrGG%2BURn3t%2FO2eTBV5kfseOEiYqW1UZx4hziCHF7aYYdrpMyrQelWsmJrFiqU8TYga%2FF1vF%2BE0iwsAoAok7pRAH5t7XR6wjeKM6apRdUgttCPv%2B5y64ilOdVcx1sUQVfyb4HqsMesf8g04mb9%2FT37IKIniT%2BHwhqO0AAwuMJpiiugdnYxIaLLq9bX22qTyaQi9T%2FeFqKqnMbUFQcXCw3VloOr74G7HMWT6UY2t4WrifpnFppPznxwAqCHWEA%2FHQJHQCbUf6RVyYlJH4uMrDdtTPqHGTDHcMxuhjQ%2Bcgavuo4pKUkk5DSLbWiKqWxWdl3EulUk7YiShuqnC43iP8fwMUvt0DA%2Fha2HWDd0VGz5e9onWdxB%2FSIrVy8wLehyeVbm7uD5K3v96YlH1xrFnV5%2BYK8cXTHD%2FJmZE1%2BPPhPCbt%2FoGUJqBg1dgZ3ZGQRHLRQAR01VuCVJaawYDzkwnl0jynBtTX7vpYZY%2F7%2B4PUmd07pPidJon5Dl5ojE%2BxK8n0rEXRsnV9dWrzX5vWnd%2FrLkVc8w%2BIX9wQY6pgHz%2FYarfOu8dQnY7lTcReSI%2Bi9aJFDh%2Bp%2Fnv%2FDZnuDfe4aS%2FXonv5GcaQzeLqcq%2FalHO5h0O49BX0IFYGAd2S5OfAoANyqkBEls3CZV1ag5kFPOmXtma0we2vV8kNduqqW2QepJObW8Uw2lwv3kWi1bQyNY%2FalCLlDc%2FOJ%2Fmu1Y3jebbZvUlG6pgQpdXt8rZ8txSmf855yl2GbKOR1vRC8GjKo3m9Dh&X-Amz-Signature=95967777a39d66b49dcce69114cd0bf1e6f1573913ad54e6898e3e4811ef16a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUCBLII%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEPCcLrdlzrmCe%2FXU1WPWZ5FJ1Hh70Klu9l%2FJc8z84ywAiBvmtH4oH9rXa3JnK0LNKToD%2ByFQ%2BUb8FVJb3qbl%2Bp82Cr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMl0qNriiMr9kPC47vKtwD6rAefFYwg3q5GrYKY31zsOmJ%2BuKaJUcBM1viEV2N7SuHdZd9pe5VJ2QnAAAFSzfffMy3s7AKmztx%2BIsnbMvXjI3USu88uO7WxxJVrGG%2BURn3t%2FO2eTBV5kfseOEiYqW1UZx4hziCHF7aYYdrpMyrQelWsmJrFiqU8TYga%2FF1vF%2BE0iwsAoAok7pRAH5t7XR6wjeKM6apRdUgttCPv%2B5y64ilOdVcx1sUQVfyb4HqsMesf8g04mb9%2FT37IKIniT%2BHwhqO0AAwuMJpiiugdnYxIaLLq9bX22qTyaQi9T%2FeFqKqnMbUFQcXCw3VloOr74G7HMWT6UY2t4WrifpnFppPznxwAqCHWEA%2FHQJHQCbUf6RVyYlJH4uMrDdtTPqHGTDHcMxuhjQ%2Bcgavuo4pKUkk5DSLbWiKqWxWdl3EulUk7YiShuqnC43iP8fwMUvt0DA%2Fha2HWDd0VGz5e9onWdxB%2FSIrVy8wLehyeVbm7uD5K3v96YlH1xrFnV5%2BYK8cXTHD%2FJmZE1%2BPPhPCbt%2FoGUJqBg1dgZ3ZGQRHLRQAR01VuCVJaawYDzkwnl0jynBtTX7vpYZY%2F7%2B4PUmd07pPidJon5Dl5ojE%2BxK8n0rEXRsnV9dWrzX5vWnd%2FrLkVc8w%2BIX9wQY6pgHz%2FYarfOu8dQnY7lTcReSI%2Bi9aJFDh%2Bp%2Fnv%2FDZnuDfe4aS%2FXonv5GcaQzeLqcq%2FalHO5h0O49BX0IFYGAd2S5OfAoANyqkBEls3CZV1ag5kFPOmXtma0we2vV8kNduqqW2QepJObW8Uw2lwv3kWi1bQyNY%2FalCLlDc%2FOJ%2Fmu1Y3jebbZvUlG6pgQpdXt8rZ8txSmf855yl2GbKOR1vRC8GjKo3m9Dh&X-Amz-Signature=9f5ad3224b0627a78b323e136379ab853f5abd6aa37505890a38daa425062683&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
