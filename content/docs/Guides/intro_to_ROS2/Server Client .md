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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFDBMDYS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaaS4g%2BVupwq2mlN9h2jyRMocd77VWZNuCLzTwIdI8vQIhAK8xjXAOVbe0eb58kbnJN2MfN4X4a54dq%2FND0%2BM%2Fucg6KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BLwhwc3C%2FAiIKT4oq3APPybjilGgnQ04YN1Fi%2BuBp5F8PQwYiwTtCkrzC1wMZDCHciVkl6nvGPmgYHGGgxCYsqH%2FjKEn22p8QMQPegdJoq%2FAgjOBDeTarGYUzoTtDbDqp%2FW1fnV6cs%2B2RJA%2FAabCgxgqNOjN1mbXb7zZhDSv1HaYIfExKbhm6zzA0GTe13PlTLhTUhqPi4%2B9w5mi%2BTK2Wz5g%2BAfFoxsocI9nSvgVUHESem7nsDkNuRR69NK%2FfnnnAYpYosha3N%2BUIOv76%2FY3SYvohb6T4pJSTR7YW5COHkI5vG%2Bty%2FRCxGu2BRc4x%2BzFNr0qes7k%2Fi323vbibv7QAf2hSKOPH8WIAmshPp0FByPg1wfFcZRXNDTxczqChOOnemRiBLJaVpajdbBBjdOeDZ%2Ft6TMjFsl5ZvNypBCuNH%2BUIf706PVV%2FblrBO04W55x5ud%2BEJyXyHC9G2yyFT8QT19zCFtuNt4YUH8VM3F3jBREf2emIw3rGEBR2I21c8wM7%2Bpkim7XRoxWbUgtSObNSEu5jYqTtvFTmaisu0QwV73LTIVFfW9NAigWxPMIGJQupNsDT6rG6pXNZU4WuqLKOavOFTtdyLPn%2BWc74e7pbuTwxsx%2FzsX4hOey1G3zIGzLT19Pgs5j9O5G6tzC9%2FMHDBjqkARPrWqPleVSYsEcxEi3y1xt8UXbH9Vmt7hE%2BFWP%2BAXSUqX1OLhXOeGKMvJru51OzkXfzW2pCavlenCSzP5D5u28R%2BXwC3RBPcS9u5LcIjTJ93x7ayj4leIN471hJP50RGuuRBFwfCODDIDqY%2FwcDMxrGHK1isLIjdA2H7gDSfWbutLrDefPJcs68gSelrp5BWiewnLoGbWDEXwJ%2FI9dzzNy0cWoj&X-Amz-Signature=89dc5c3e94b82ba3d4a96672f6164cafa75a7a0a784e02ec1f0cf4a306b86b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFDBMDYS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaaS4g%2BVupwq2mlN9h2jyRMocd77VWZNuCLzTwIdI8vQIhAK8xjXAOVbe0eb58kbnJN2MfN4X4a54dq%2FND0%2BM%2Fucg6KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BLwhwc3C%2FAiIKT4oq3APPybjilGgnQ04YN1Fi%2BuBp5F8PQwYiwTtCkrzC1wMZDCHciVkl6nvGPmgYHGGgxCYsqH%2FjKEn22p8QMQPegdJoq%2FAgjOBDeTarGYUzoTtDbDqp%2FW1fnV6cs%2B2RJA%2FAabCgxgqNOjN1mbXb7zZhDSv1HaYIfExKbhm6zzA0GTe13PlTLhTUhqPi4%2B9w5mi%2BTK2Wz5g%2BAfFoxsocI9nSvgVUHESem7nsDkNuRR69NK%2FfnnnAYpYosha3N%2BUIOv76%2FY3SYvohb6T4pJSTR7YW5COHkI5vG%2Bty%2FRCxGu2BRc4x%2BzFNr0qes7k%2Fi323vbibv7QAf2hSKOPH8WIAmshPp0FByPg1wfFcZRXNDTxczqChOOnemRiBLJaVpajdbBBjdOeDZ%2Ft6TMjFsl5ZvNypBCuNH%2BUIf706PVV%2FblrBO04W55x5ud%2BEJyXyHC9G2yyFT8QT19zCFtuNt4YUH8VM3F3jBREf2emIw3rGEBR2I21c8wM7%2Bpkim7XRoxWbUgtSObNSEu5jYqTtvFTmaisu0QwV73LTIVFfW9NAigWxPMIGJQupNsDT6rG6pXNZU4WuqLKOavOFTtdyLPn%2BWc74e7pbuTwxsx%2FzsX4hOey1G3zIGzLT19Pgs5j9O5G6tzC9%2FMHDBjqkARPrWqPleVSYsEcxEi3y1xt8UXbH9Vmt7hE%2BFWP%2BAXSUqX1OLhXOeGKMvJru51OzkXfzW2pCavlenCSzP5D5u28R%2BXwC3RBPcS9u5LcIjTJ93x7ayj4leIN471hJP50RGuuRBFwfCODDIDqY%2FwcDMxrGHK1isLIjdA2H7gDSfWbutLrDefPJcs68gSelrp5BWiewnLoGbWDEXwJ%2FI9dzzNy0cWoj&X-Amz-Signature=d522d567d9cdee35b7f105f1ad2363e53b1d0370c33b123b3c52712c6ccfab7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFDBMDYS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaaS4g%2BVupwq2mlN9h2jyRMocd77VWZNuCLzTwIdI8vQIhAK8xjXAOVbe0eb58kbnJN2MfN4X4a54dq%2FND0%2BM%2Fucg6KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BLwhwc3C%2FAiIKT4oq3APPybjilGgnQ04YN1Fi%2BuBp5F8PQwYiwTtCkrzC1wMZDCHciVkl6nvGPmgYHGGgxCYsqH%2FjKEn22p8QMQPegdJoq%2FAgjOBDeTarGYUzoTtDbDqp%2FW1fnV6cs%2B2RJA%2FAabCgxgqNOjN1mbXb7zZhDSv1HaYIfExKbhm6zzA0GTe13PlTLhTUhqPi4%2B9w5mi%2BTK2Wz5g%2BAfFoxsocI9nSvgVUHESem7nsDkNuRR69NK%2FfnnnAYpYosha3N%2BUIOv76%2FY3SYvohb6T4pJSTR7YW5COHkI5vG%2Bty%2FRCxGu2BRc4x%2BzFNr0qes7k%2Fi323vbibv7QAf2hSKOPH8WIAmshPp0FByPg1wfFcZRXNDTxczqChOOnemRiBLJaVpajdbBBjdOeDZ%2Ft6TMjFsl5ZvNypBCuNH%2BUIf706PVV%2FblrBO04W55x5ud%2BEJyXyHC9G2yyFT8QT19zCFtuNt4YUH8VM3F3jBREf2emIw3rGEBR2I21c8wM7%2Bpkim7XRoxWbUgtSObNSEu5jYqTtvFTmaisu0QwV73LTIVFfW9NAigWxPMIGJQupNsDT6rG6pXNZU4WuqLKOavOFTtdyLPn%2BWc74e7pbuTwxsx%2FzsX4hOey1G3zIGzLT19Pgs5j9O5G6tzC9%2FMHDBjqkARPrWqPleVSYsEcxEi3y1xt8UXbH9Vmt7hE%2BFWP%2BAXSUqX1OLhXOeGKMvJru51OzkXfzW2pCavlenCSzP5D5u28R%2BXwC3RBPcS9u5LcIjTJ93x7ayj4leIN471hJP50RGuuRBFwfCODDIDqY%2FwcDMxrGHK1isLIjdA2H7gDSfWbutLrDefPJcs68gSelrp5BWiewnLoGbWDEXwJ%2FI9dzzNy0cWoj&X-Amz-Signature=940c08f8b1a9d44c58fa27bc74e036126c4b6aa284514f278d9a2e9546976a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFDBMDYS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaaS4g%2BVupwq2mlN9h2jyRMocd77VWZNuCLzTwIdI8vQIhAK8xjXAOVbe0eb58kbnJN2MfN4X4a54dq%2FND0%2BM%2Fucg6KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BLwhwc3C%2FAiIKT4oq3APPybjilGgnQ04YN1Fi%2BuBp5F8PQwYiwTtCkrzC1wMZDCHciVkl6nvGPmgYHGGgxCYsqH%2FjKEn22p8QMQPegdJoq%2FAgjOBDeTarGYUzoTtDbDqp%2FW1fnV6cs%2B2RJA%2FAabCgxgqNOjN1mbXb7zZhDSv1HaYIfExKbhm6zzA0GTe13PlTLhTUhqPi4%2B9w5mi%2BTK2Wz5g%2BAfFoxsocI9nSvgVUHESem7nsDkNuRR69NK%2FfnnnAYpYosha3N%2BUIOv76%2FY3SYvohb6T4pJSTR7YW5COHkI5vG%2Bty%2FRCxGu2BRc4x%2BzFNr0qes7k%2Fi323vbibv7QAf2hSKOPH8WIAmshPp0FByPg1wfFcZRXNDTxczqChOOnemRiBLJaVpajdbBBjdOeDZ%2Ft6TMjFsl5ZvNypBCuNH%2BUIf706PVV%2FblrBO04W55x5ud%2BEJyXyHC9G2yyFT8QT19zCFtuNt4YUH8VM3F3jBREf2emIw3rGEBR2I21c8wM7%2Bpkim7XRoxWbUgtSObNSEu5jYqTtvFTmaisu0QwV73LTIVFfW9NAigWxPMIGJQupNsDT6rG6pXNZU4WuqLKOavOFTtdyLPn%2BWc74e7pbuTwxsx%2FzsX4hOey1G3zIGzLT19Pgs5j9O5G6tzC9%2FMHDBjqkARPrWqPleVSYsEcxEi3y1xt8UXbH9Vmt7hE%2BFWP%2BAXSUqX1OLhXOeGKMvJru51OzkXfzW2pCavlenCSzP5D5u28R%2BXwC3RBPcS9u5LcIjTJ93x7ayj4leIN471hJP50RGuuRBFwfCODDIDqY%2FwcDMxrGHK1isLIjdA2H7gDSfWbutLrDefPJcs68gSelrp5BWiewnLoGbWDEXwJ%2FI9dzzNy0cWoj&X-Amz-Signature=473bf36bd0818e8f14d1d62d366d010beefab1130e5dfc845fbdc87470c6f34d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFDBMDYS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaaS4g%2BVupwq2mlN9h2jyRMocd77VWZNuCLzTwIdI8vQIhAK8xjXAOVbe0eb58kbnJN2MfN4X4a54dq%2FND0%2BM%2Fucg6KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BLwhwc3C%2FAiIKT4oq3APPybjilGgnQ04YN1Fi%2BuBp5F8PQwYiwTtCkrzC1wMZDCHciVkl6nvGPmgYHGGgxCYsqH%2FjKEn22p8QMQPegdJoq%2FAgjOBDeTarGYUzoTtDbDqp%2FW1fnV6cs%2B2RJA%2FAabCgxgqNOjN1mbXb7zZhDSv1HaYIfExKbhm6zzA0GTe13PlTLhTUhqPi4%2B9w5mi%2BTK2Wz5g%2BAfFoxsocI9nSvgVUHESem7nsDkNuRR69NK%2FfnnnAYpYosha3N%2BUIOv76%2FY3SYvohb6T4pJSTR7YW5COHkI5vG%2Bty%2FRCxGu2BRc4x%2BzFNr0qes7k%2Fi323vbibv7QAf2hSKOPH8WIAmshPp0FByPg1wfFcZRXNDTxczqChOOnemRiBLJaVpajdbBBjdOeDZ%2Ft6TMjFsl5ZvNypBCuNH%2BUIf706PVV%2FblrBO04W55x5ud%2BEJyXyHC9G2yyFT8QT19zCFtuNt4YUH8VM3F3jBREf2emIw3rGEBR2I21c8wM7%2Bpkim7XRoxWbUgtSObNSEu5jYqTtvFTmaisu0QwV73LTIVFfW9NAigWxPMIGJQupNsDT6rG6pXNZU4WuqLKOavOFTtdyLPn%2BWc74e7pbuTwxsx%2FzsX4hOey1G3zIGzLT19Pgs5j9O5G6tzC9%2FMHDBjqkARPrWqPleVSYsEcxEi3y1xt8UXbH9Vmt7hE%2BFWP%2BAXSUqX1OLhXOeGKMvJru51OzkXfzW2pCavlenCSzP5D5u28R%2BXwC3RBPcS9u5LcIjTJ93x7ayj4leIN471hJP50RGuuRBFwfCODDIDqY%2FwcDMxrGHK1isLIjdA2H7gDSfWbutLrDefPJcs68gSelrp5BWiewnLoGbWDEXwJ%2FI9dzzNy0cWoj&X-Amz-Signature=e77ed20553ea4c42a6874ce00c72509eddb658fd662d0a2369509d0aef2e481f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
