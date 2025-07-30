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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVUL35A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAzrDTFJyT%2FB765tp9TJr8j7yUvzYtTlSdO4ZQ%2BF2PHwIhAJM%2FwLaAlNh0C5YzwUnBD6rgKw5leAhH9wDbOQwdcxdpKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvC83ovIaB7JrijT4q3APsTFggTCLXNzECV%2BUBWK%2Fv3WYLZCREWV8rYoIwfy1vKZWG7l%2B5e4i0t31ldVSGc8RBhu4xCfTeNPlYASQ11YFnBFzv%2Flk3la%2BINKqUhyQfsErl%2FhFdyh4x4BdZRYMEZ2p%2BTob63v1UXBl3syjvk7%2BDuju3BwB%2Fb54caVMA21gDYJ7tFNxHRiNDvIeEbrDBpRUiMGV4m3xwNG2hD48BNiS3NIGsrHPf%2B1U2DYJluzUD2V6Sl7iVlMivinNF9YyoDUj43ox98zq%2FmOck8q6%2BNna8m%2FuQTlX6ri%2BP6eGvuy3%2Bx%2B3dcwsfR%2FTFsTsa945OqKHqvOpGaEQECpiCaHoLjCk78XVod378%2F5ZSlcs3%2Fp7IW7BvxO5ZPU%2FUOJKbbHEbT9SXVavNNvagUR4dxXf78TYGGNrKGr4aSsP429WomV1%2Bl%2FILD9aNn2t7qfWkwaIfvM70naxcjCX17fSQkkH9JJvbxTcaoNX0SmI72OWbei0vGKoEhJul2uxYygdg3ojBzQD9M8p00kWQ4p8FTlswFdFaNH3sQMil8detl6XL3gMvpKFLY5v2GjRiXM9zlAApwVUEzvqfEp7mNFspCSlhrporGXw4J2L%2Fc%2FxbBsz0AM%2FPDMUv3X2BsF%2BQivRb7TD2oajEBjqkAb0p9Pasy%2B%2FrdaiL9BB5D2LuFh0TRKDV%2BajTU1g%2BH1JN5jmFILbAHh8nOqjp66rh5J9DHfNBJGa2Z8Hq8NItpDTp3BJOv%2BWc8Wi5XndGFiN40ZBQmeoU3YMbdtHWvtXUab5edi0f%2FhbBD0TGFTsxDC9YczZgm%2FlifJm86y9wlQ2C5RSPLLaQXqbyuH7aHjQRSAJy1sKzt2qe5cGCpXadiIQCxgFN&X-Amz-Signature=c584f85056affa2c1e2d07afe8ddcbf1833e961faa30cc0635852e9a1b90521d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVUL35A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAzrDTFJyT%2FB765tp9TJr8j7yUvzYtTlSdO4ZQ%2BF2PHwIhAJM%2FwLaAlNh0C5YzwUnBD6rgKw5leAhH9wDbOQwdcxdpKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvC83ovIaB7JrijT4q3APsTFggTCLXNzECV%2BUBWK%2Fv3WYLZCREWV8rYoIwfy1vKZWG7l%2B5e4i0t31ldVSGc8RBhu4xCfTeNPlYASQ11YFnBFzv%2Flk3la%2BINKqUhyQfsErl%2FhFdyh4x4BdZRYMEZ2p%2BTob63v1UXBl3syjvk7%2BDuju3BwB%2Fb54caVMA21gDYJ7tFNxHRiNDvIeEbrDBpRUiMGV4m3xwNG2hD48BNiS3NIGsrHPf%2B1U2DYJluzUD2V6Sl7iVlMivinNF9YyoDUj43ox98zq%2FmOck8q6%2BNna8m%2FuQTlX6ri%2BP6eGvuy3%2Bx%2B3dcwsfR%2FTFsTsa945OqKHqvOpGaEQECpiCaHoLjCk78XVod378%2F5ZSlcs3%2Fp7IW7BvxO5ZPU%2FUOJKbbHEbT9SXVavNNvagUR4dxXf78TYGGNrKGr4aSsP429WomV1%2Bl%2FILD9aNn2t7qfWkwaIfvM70naxcjCX17fSQkkH9JJvbxTcaoNX0SmI72OWbei0vGKoEhJul2uxYygdg3ojBzQD9M8p00kWQ4p8FTlswFdFaNH3sQMil8detl6XL3gMvpKFLY5v2GjRiXM9zlAApwVUEzvqfEp7mNFspCSlhrporGXw4J2L%2Fc%2FxbBsz0AM%2FPDMUv3X2BsF%2BQivRb7TD2oajEBjqkAb0p9Pasy%2B%2FrdaiL9BB5D2LuFh0TRKDV%2BajTU1g%2BH1JN5jmFILbAHh8nOqjp66rh5J9DHfNBJGa2Z8Hq8NItpDTp3BJOv%2BWc8Wi5XndGFiN40ZBQmeoU3YMbdtHWvtXUab5edi0f%2FhbBD0TGFTsxDC9YczZgm%2FlifJm86y9wlQ2C5RSPLLaQXqbyuH7aHjQRSAJy1sKzt2qe5cGCpXadiIQCxgFN&X-Amz-Signature=f7936079529a856c3de6be8314392707fcd181336ab424b7455f1dde6fefc59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVUL35A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAzrDTFJyT%2FB765tp9TJr8j7yUvzYtTlSdO4ZQ%2BF2PHwIhAJM%2FwLaAlNh0C5YzwUnBD6rgKw5leAhH9wDbOQwdcxdpKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvC83ovIaB7JrijT4q3APsTFggTCLXNzECV%2BUBWK%2Fv3WYLZCREWV8rYoIwfy1vKZWG7l%2B5e4i0t31ldVSGc8RBhu4xCfTeNPlYASQ11YFnBFzv%2Flk3la%2BINKqUhyQfsErl%2FhFdyh4x4BdZRYMEZ2p%2BTob63v1UXBl3syjvk7%2BDuju3BwB%2Fb54caVMA21gDYJ7tFNxHRiNDvIeEbrDBpRUiMGV4m3xwNG2hD48BNiS3NIGsrHPf%2B1U2DYJluzUD2V6Sl7iVlMivinNF9YyoDUj43ox98zq%2FmOck8q6%2BNna8m%2FuQTlX6ri%2BP6eGvuy3%2Bx%2B3dcwsfR%2FTFsTsa945OqKHqvOpGaEQECpiCaHoLjCk78XVod378%2F5ZSlcs3%2Fp7IW7BvxO5ZPU%2FUOJKbbHEbT9SXVavNNvagUR4dxXf78TYGGNrKGr4aSsP429WomV1%2Bl%2FILD9aNn2t7qfWkwaIfvM70naxcjCX17fSQkkH9JJvbxTcaoNX0SmI72OWbei0vGKoEhJul2uxYygdg3ojBzQD9M8p00kWQ4p8FTlswFdFaNH3sQMil8detl6XL3gMvpKFLY5v2GjRiXM9zlAApwVUEzvqfEp7mNFspCSlhrporGXw4J2L%2Fc%2FxbBsz0AM%2FPDMUv3X2BsF%2BQivRb7TD2oajEBjqkAb0p9Pasy%2B%2FrdaiL9BB5D2LuFh0TRKDV%2BajTU1g%2BH1JN5jmFILbAHh8nOqjp66rh5J9DHfNBJGa2Z8Hq8NItpDTp3BJOv%2BWc8Wi5XndGFiN40ZBQmeoU3YMbdtHWvtXUab5edi0f%2FhbBD0TGFTsxDC9YczZgm%2FlifJm86y9wlQ2C5RSPLLaQXqbyuH7aHjQRSAJy1sKzt2qe5cGCpXadiIQCxgFN&X-Amz-Signature=dfd319d3d7f27c4ee56ad9c1d557fbc0a378e4c1d19ad9af2fbb16f2f0bb5d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVUL35A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAzrDTFJyT%2FB765tp9TJr8j7yUvzYtTlSdO4ZQ%2BF2PHwIhAJM%2FwLaAlNh0C5YzwUnBD6rgKw5leAhH9wDbOQwdcxdpKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvC83ovIaB7JrijT4q3APsTFggTCLXNzECV%2BUBWK%2Fv3WYLZCREWV8rYoIwfy1vKZWG7l%2B5e4i0t31ldVSGc8RBhu4xCfTeNPlYASQ11YFnBFzv%2Flk3la%2BINKqUhyQfsErl%2FhFdyh4x4BdZRYMEZ2p%2BTob63v1UXBl3syjvk7%2BDuju3BwB%2Fb54caVMA21gDYJ7tFNxHRiNDvIeEbrDBpRUiMGV4m3xwNG2hD48BNiS3NIGsrHPf%2B1U2DYJluzUD2V6Sl7iVlMivinNF9YyoDUj43ox98zq%2FmOck8q6%2BNna8m%2FuQTlX6ri%2BP6eGvuy3%2Bx%2B3dcwsfR%2FTFsTsa945OqKHqvOpGaEQECpiCaHoLjCk78XVod378%2F5ZSlcs3%2Fp7IW7BvxO5ZPU%2FUOJKbbHEbT9SXVavNNvagUR4dxXf78TYGGNrKGr4aSsP429WomV1%2Bl%2FILD9aNn2t7qfWkwaIfvM70naxcjCX17fSQkkH9JJvbxTcaoNX0SmI72OWbei0vGKoEhJul2uxYygdg3ojBzQD9M8p00kWQ4p8FTlswFdFaNH3sQMil8detl6XL3gMvpKFLY5v2GjRiXM9zlAApwVUEzvqfEp7mNFspCSlhrporGXw4J2L%2Fc%2FxbBsz0AM%2FPDMUv3X2BsF%2BQivRb7TD2oajEBjqkAb0p9Pasy%2B%2FrdaiL9BB5D2LuFh0TRKDV%2BajTU1g%2BH1JN5jmFILbAHh8nOqjp66rh5J9DHfNBJGa2Z8Hq8NItpDTp3BJOv%2BWc8Wi5XndGFiN40ZBQmeoU3YMbdtHWvtXUab5edi0f%2FhbBD0TGFTsxDC9YczZgm%2FlifJm86y9wlQ2C5RSPLLaQXqbyuH7aHjQRSAJy1sKzt2qe5cGCpXadiIQCxgFN&X-Amz-Signature=df55e540b6b1d432b00e81c81a6f2e12682875c78373675cd128e7985dfcae78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVUL35A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAzrDTFJyT%2FB765tp9TJr8j7yUvzYtTlSdO4ZQ%2BF2PHwIhAJM%2FwLaAlNh0C5YzwUnBD6rgKw5leAhH9wDbOQwdcxdpKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvC83ovIaB7JrijT4q3APsTFggTCLXNzECV%2BUBWK%2Fv3WYLZCREWV8rYoIwfy1vKZWG7l%2B5e4i0t31ldVSGc8RBhu4xCfTeNPlYASQ11YFnBFzv%2Flk3la%2BINKqUhyQfsErl%2FhFdyh4x4BdZRYMEZ2p%2BTob63v1UXBl3syjvk7%2BDuju3BwB%2Fb54caVMA21gDYJ7tFNxHRiNDvIeEbrDBpRUiMGV4m3xwNG2hD48BNiS3NIGsrHPf%2B1U2DYJluzUD2V6Sl7iVlMivinNF9YyoDUj43ox98zq%2FmOck8q6%2BNna8m%2FuQTlX6ri%2BP6eGvuy3%2Bx%2B3dcwsfR%2FTFsTsa945OqKHqvOpGaEQECpiCaHoLjCk78XVod378%2F5ZSlcs3%2Fp7IW7BvxO5ZPU%2FUOJKbbHEbT9SXVavNNvagUR4dxXf78TYGGNrKGr4aSsP429WomV1%2Bl%2FILD9aNn2t7qfWkwaIfvM70naxcjCX17fSQkkH9JJvbxTcaoNX0SmI72OWbei0vGKoEhJul2uxYygdg3ojBzQD9M8p00kWQ4p8FTlswFdFaNH3sQMil8detl6XL3gMvpKFLY5v2GjRiXM9zlAApwVUEzvqfEp7mNFspCSlhrporGXw4J2L%2Fc%2FxbBsz0AM%2FPDMUv3X2BsF%2BQivRb7TD2oajEBjqkAb0p9Pasy%2B%2FrdaiL9BB5D2LuFh0TRKDV%2BajTU1g%2BH1JN5jmFILbAHh8nOqjp66rh5J9DHfNBJGa2Z8Hq8NItpDTp3BJOv%2BWc8Wi5XndGFiN40ZBQmeoU3YMbdtHWvtXUab5edi0f%2FhbBD0TGFTsxDC9YczZgm%2FlifJm86y9wlQ2C5RSPLLaQXqbyuH7aHjQRSAJy1sKzt2qe5cGCpXadiIQCxgFN&X-Amz-Signature=7a0be05afc9172e5e0e7b46a84f754d534deee8716a95be395495d3e122c853e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
