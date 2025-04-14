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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFE3ZQE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEAzuGJH9O%2BYbe2KC5v%2FQnp%2BpzC2BV6NWap%2BqCW97hTAIhAIYh6uAQ6u34q%2B5z4EjtPx0SIGct%2FWmm2ytODqNbTNdpKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxMQBH1WZsikhjEUq3AOG1DVhxVwyEWPeaiDEO5wM9Of8Xra9WAqmazikojqrTxC6iu2MEjI4o4%2F%2F7pjlZVzmsWyIy7Ubj2bCwA23bURcpKilmWABXzsgu%2FF67zJjBjaOepLdMx0kW3JHA5Kuy%2FbSubE6StKSRLF0tCDxNNcuzI3teb3XStt%2FUiG8qmuKxGDNeVqMadfpNM6J79lXQ8NZ89aCQ4Wm%2FvXL1O%2BJu%2FNXZHe293z%2FJ7Aq6T3AO8c7oI6Xkrn0l%2B%2F4wQ%2Fpdw9DsL7mldxSfTc2JAJBcoqWUvXxtEnq1IH%2FWAPUoQqmJOFo53%2FmHSlxrL0FElev3zKE4FraAzserwcOHw3H9DLjuWLhJtdCcGbVMC%2FfdtimewSdnQA2cQFturS86mTdDWBFZrNr%2FK4U3K5EdQOsqbIu7DUidPvHjfHjcjFiBdOunLZOI0avbX%2B0WJspWQHAslrLMd1hERoTfdtwDtQ%2FUFqFkP5EDNOILRkhpIke97L7fDll9FXh6aVG2dZP34SvQQFfpXaF1T%2FB8jydLkZujjXR04LH77K1QxooM5Di9uDeWXneJmmbJpMkmblx5FRmdN1FfK%2FB7DGilrkN%2BWvuVIQqXv%2BRYPOxWurs%2FKqGt9DCRcTn6uBb1OCYnJvk4OdrMDCOr%2FK%2FBjqkAZsVLD6ImHSEhtqYR9uIpKLg9UPWM52veinArjYUY5S1eiYsJDsZiBLqIzI6IcaHd48ScT%2FI6z1ZXpQV2l%2B%2FwSeMDCLBfm2Y8TyLqZj%2F7rkwsJSX07XhpgFbiwRPizlDZIOFk7Ac%2B98PEM7vI0xIhA7lD30WwxmFGR3ZQxxYHxfzmjkuxW7cykI5lcqYo54aWNt71N6o5MDc4jDpsE1ZD1nulUI7&X-Amz-Signature=f7f43cdb1ee614adc6d63bc72cf7c387ef9687abfac676890f801d39489b0ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFE3ZQE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEAzuGJH9O%2BYbe2KC5v%2FQnp%2BpzC2BV6NWap%2BqCW97hTAIhAIYh6uAQ6u34q%2B5z4EjtPx0SIGct%2FWmm2ytODqNbTNdpKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxMQBH1WZsikhjEUq3AOG1DVhxVwyEWPeaiDEO5wM9Of8Xra9WAqmazikojqrTxC6iu2MEjI4o4%2F%2F7pjlZVzmsWyIy7Ubj2bCwA23bURcpKilmWABXzsgu%2FF67zJjBjaOepLdMx0kW3JHA5Kuy%2FbSubE6StKSRLF0tCDxNNcuzI3teb3XStt%2FUiG8qmuKxGDNeVqMadfpNM6J79lXQ8NZ89aCQ4Wm%2FvXL1O%2BJu%2FNXZHe293z%2FJ7Aq6T3AO8c7oI6Xkrn0l%2B%2F4wQ%2Fpdw9DsL7mldxSfTc2JAJBcoqWUvXxtEnq1IH%2FWAPUoQqmJOFo53%2FmHSlxrL0FElev3zKE4FraAzserwcOHw3H9DLjuWLhJtdCcGbVMC%2FfdtimewSdnQA2cQFturS86mTdDWBFZrNr%2FK4U3K5EdQOsqbIu7DUidPvHjfHjcjFiBdOunLZOI0avbX%2B0WJspWQHAslrLMd1hERoTfdtwDtQ%2FUFqFkP5EDNOILRkhpIke97L7fDll9FXh6aVG2dZP34SvQQFfpXaF1T%2FB8jydLkZujjXR04LH77K1QxooM5Di9uDeWXneJmmbJpMkmblx5FRmdN1FfK%2FB7DGilrkN%2BWvuVIQqXv%2BRYPOxWurs%2FKqGt9DCRcTn6uBb1OCYnJvk4OdrMDCOr%2FK%2FBjqkAZsVLD6ImHSEhtqYR9uIpKLg9UPWM52veinArjYUY5S1eiYsJDsZiBLqIzI6IcaHd48ScT%2FI6z1ZXpQV2l%2B%2FwSeMDCLBfm2Y8TyLqZj%2F7rkwsJSX07XhpgFbiwRPizlDZIOFk7Ac%2B98PEM7vI0xIhA7lD30WwxmFGR3ZQxxYHxfzmjkuxW7cykI5lcqYo54aWNt71N6o5MDc4jDpsE1ZD1nulUI7&X-Amz-Signature=14bf03191fc3e08640e0fa8c2291bae488f2989a5e13d082ba77a1590b542185&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFE3ZQE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEAzuGJH9O%2BYbe2KC5v%2FQnp%2BpzC2BV6NWap%2BqCW97hTAIhAIYh6uAQ6u34q%2B5z4EjtPx0SIGct%2FWmm2ytODqNbTNdpKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxMQBH1WZsikhjEUq3AOG1DVhxVwyEWPeaiDEO5wM9Of8Xra9WAqmazikojqrTxC6iu2MEjI4o4%2F%2F7pjlZVzmsWyIy7Ubj2bCwA23bURcpKilmWABXzsgu%2FF67zJjBjaOepLdMx0kW3JHA5Kuy%2FbSubE6StKSRLF0tCDxNNcuzI3teb3XStt%2FUiG8qmuKxGDNeVqMadfpNM6J79lXQ8NZ89aCQ4Wm%2FvXL1O%2BJu%2FNXZHe293z%2FJ7Aq6T3AO8c7oI6Xkrn0l%2B%2F4wQ%2Fpdw9DsL7mldxSfTc2JAJBcoqWUvXxtEnq1IH%2FWAPUoQqmJOFo53%2FmHSlxrL0FElev3zKE4FraAzserwcOHw3H9DLjuWLhJtdCcGbVMC%2FfdtimewSdnQA2cQFturS86mTdDWBFZrNr%2FK4U3K5EdQOsqbIu7DUidPvHjfHjcjFiBdOunLZOI0avbX%2B0WJspWQHAslrLMd1hERoTfdtwDtQ%2FUFqFkP5EDNOILRkhpIke97L7fDll9FXh6aVG2dZP34SvQQFfpXaF1T%2FB8jydLkZujjXR04LH77K1QxooM5Di9uDeWXneJmmbJpMkmblx5FRmdN1FfK%2FB7DGilrkN%2BWvuVIQqXv%2BRYPOxWurs%2FKqGt9DCRcTn6uBb1OCYnJvk4OdrMDCOr%2FK%2FBjqkAZsVLD6ImHSEhtqYR9uIpKLg9UPWM52veinArjYUY5S1eiYsJDsZiBLqIzI6IcaHd48ScT%2FI6z1ZXpQV2l%2B%2FwSeMDCLBfm2Y8TyLqZj%2F7rkwsJSX07XhpgFbiwRPizlDZIOFk7Ac%2B98PEM7vI0xIhA7lD30WwxmFGR3ZQxxYHxfzmjkuxW7cykI5lcqYo54aWNt71N6o5MDc4jDpsE1ZD1nulUI7&X-Amz-Signature=b1eb8d931de5248d7351b2e670520f8f729682ed9edb05846efede317a909967&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFE3ZQE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEAzuGJH9O%2BYbe2KC5v%2FQnp%2BpzC2BV6NWap%2BqCW97hTAIhAIYh6uAQ6u34q%2B5z4EjtPx0SIGct%2FWmm2ytODqNbTNdpKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxMQBH1WZsikhjEUq3AOG1DVhxVwyEWPeaiDEO5wM9Of8Xra9WAqmazikojqrTxC6iu2MEjI4o4%2F%2F7pjlZVzmsWyIy7Ubj2bCwA23bURcpKilmWABXzsgu%2FF67zJjBjaOepLdMx0kW3JHA5Kuy%2FbSubE6StKSRLF0tCDxNNcuzI3teb3XStt%2FUiG8qmuKxGDNeVqMadfpNM6J79lXQ8NZ89aCQ4Wm%2FvXL1O%2BJu%2FNXZHe293z%2FJ7Aq6T3AO8c7oI6Xkrn0l%2B%2F4wQ%2Fpdw9DsL7mldxSfTc2JAJBcoqWUvXxtEnq1IH%2FWAPUoQqmJOFo53%2FmHSlxrL0FElev3zKE4FraAzserwcOHw3H9DLjuWLhJtdCcGbVMC%2FfdtimewSdnQA2cQFturS86mTdDWBFZrNr%2FK4U3K5EdQOsqbIu7DUidPvHjfHjcjFiBdOunLZOI0avbX%2B0WJspWQHAslrLMd1hERoTfdtwDtQ%2FUFqFkP5EDNOILRkhpIke97L7fDll9FXh6aVG2dZP34SvQQFfpXaF1T%2FB8jydLkZujjXR04LH77K1QxooM5Di9uDeWXneJmmbJpMkmblx5FRmdN1FfK%2FB7DGilrkN%2BWvuVIQqXv%2BRYPOxWurs%2FKqGt9DCRcTn6uBb1OCYnJvk4OdrMDCOr%2FK%2FBjqkAZsVLD6ImHSEhtqYR9uIpKLg9UPWM52veinArjYUY5S1eiYsJDsZiBLqIzI6IcaHd48ScT%2FI6z1ZXpQV2l%2B%2FwSeMDCLBfm2Y8TyLqZj%2F7rkwsJSX07XhpgFbiwRPizlDZIOFk7Ac%2B98PEM7vI0xIhA7lD30WwxmFGR3ZQxxYHxfzmjkuxW7cykI5lcqYo54aWNt71N6o5MDc4jDpsE1ZD1nulUI7&X-Amz-Signature=ee67df93f0fbba4856c32cfe04aa902f7214877afd792998eb6a8f4774c48f0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFE3ZQE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEAzuGJH9O%2BYbe2KC5v%2FQnp%2BpzC2BV6NWap%2BqCW97hTAIhAIYh6uAQ6u34q%2B5z4EjtPx0SIGct%2FWmm2ytODqNbTNdpKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxMQBH1WZsikhjEUq3AOG1DVhxVwyEWPeaiDEO5wM9Of8Xra9WAqmazikojqrTxC6iu2MEjI4o4%2F%2F7pjlZVzmsWyIy7Ubj2bCwA23bURcpKilmWABXzsgu%2FF67zJjBjaOepLdMx0kW3JHA5Kuy%2FbSubE6StKSRLF0tCDxNNcuzI3teb3XStt%2FUiG8qmuKxGDNeVqMadfpNM6J79lXQ8NZ89aCQ4Wm%2FvXL1O%2BJu%2FNXZHe293z%2FJ7Aq6T3AO8c7oI6Xkrn0l%2B%2F4wQ%2Fpdw9DsL7mldxSfTc2JAJBcoqWUvXxtEnq1IH%2FWAPUoQqmJOFo53%2FmHSlxrL0FElev3zKE4FraAzserwcOHw3H9DLjuWLhJtdCcGbVMC%2FfdtimewSdnQA2cQFturS86mTdDWBFZrNr%2FK4U3K5EdQOsqbIu7DUidPvHjfHjcjFiBdOunLZOI0avbX%2B0WJspWQHAslrLMd1hERoTfdtwDtQ%2FUFqFkP5EDNOILRkhpIke97L7fDll9FXh6aVG2dZP34SvQQFfpXaF1T%2FB8jydLkZujjXR04LH77K1QxooM5Di9uDeWXneJmmbJpMkmblx5FRmdN1FfK%2FB7DGilrkN%2BWvuVIQqXv%2BRYPOxWurs%2FKqGt9DCRcTn6uBb1OCYnJvk4OdrMDCOr%2FK%2FBjqkAZsVLD6ImHSEhtqYR9uIpKLg9UPWM52veinArjYUY5S1eiYsJDsZiBLqIzI6IcaHd48ScT%2FI6z1ZXpQV2l%2B%2FwSeMDCLBfm2Y8TyLqZj%2F7rkwsJSX07XhpgFbiwRPizlDZIOFk7Ac%2B98PEM7vI0xIhA7lD30WwxmFGR3ZQxxYHxfzmjkuxW7cykI5lcqYo54aWNt71N6o5MDc4jDpsE1ZD1nulUI7&X-Amz-Signature=fbe194dc46a966dbfb2197682ee545d3cadd1e03824272eb1751e030ef6ee415&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
