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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFVN56D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9gMCv1OZQZWypMCCxhve2m8jcl592wct8Ntz2D6V8uAiEA9iD9o9HaFCuB4oEpvc%2B2aNQf5XufYZ6EYQmez%2FJ%2FEVUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwQANwHUq7ipqVw7CrcA03%2BxqfWl26I%2FCs3DmFlJelyTgg8MhWeE8pka86grUW1F4kzkswErdOnV3BeSdWv14GrvQ%2FYCXQggxj1na0MhxW%2BfUu1v%2FcEZVwSjMGIgJMbTzx6KCXiJZIrmsuww5SLKCRWbgrYUkiYeA%2BPVDMkumPaZMVqxegk6js2QOkRuQh9L1lP455uuZzhotbqwhuV0uz0ouNQEaP5Q%2B7WEctqx2qAOl%2BNbj7oUI%2BU%2BMZHv6Kv%2BSzD3NsY6w5XwXs7oRoBdzfZNTT08vJS19slfscF8GKDNjo5WTroTRqxiFk518%2BbER25jbTX%2BjhkcJNVJY7eaIPBOoOcNPu7UT7o8PXiEfilu%2BB1R6AzIItGBMQ8T6EuGgJrlwHVWwidHrGo%2F1jESq%2B9ZTkMh%2Bt3qcaQP7nFS3lrPa3Hye5paV3Gi3VWBXSz3DCqGszAhU7B8HQbo3Qb9mYm%2Bmr38WERAjwTVgoenx%2BcNijNdp1SKlz2Axw0GsZlHPZ5wUBeK4ry0lWqzqUGNoi5BGASXdMCMff%2FnnFNqlH93iwGziG9RcVee4UgXlQli%2BVrywT7VZ1wGMv865QvryVLUt1P%2Ba49juNX5cdtyxOp903ThY0Hqr8ZdFY7fII7QiW9URkFmxVGWdA%2BMLDC8sMGOqUBODaCAjfLQcU1zceYq2KPiEYePqzJuqQB1iVzpXpTs7myAjOU3ubqA2c30nv16J6fDd3Wrkjdr%2BfryOX8VqIZz875IyovfU7LJKhRuW0EsrDL3cp9wRHgQY8NqJewoLmFlawL8hPfol46nmQusG3TEZizBRxttOjYFHpVr5mVMaCHTtJCGNDJaCWwNx8i2Eo5xVnG%2BpyU3cusBL2km1ODdeXje91u&X-Amz-Signature=7b9b3a17836047fddd57594be79cf62c16af8445de7b40fa7d65d6ce9edea3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFVN56D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9gMCv1OZQZWypMCCxhve2m8jcl592wct8Ntz2D6V8uAiEA9iD9o9HaFCuB4oEpvc%2B2aNQf5XufYZ6EYQmez%2FJ%2FEVUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwQANwHUq7ipqVw7CrcA03%2BxqfWl26I%2FCs3DmFlJelyTgg8MhWeE8pka86grUW1F4kzkswErdOnV3BeSdWv14GrvQ%2FYCXQggxj1na0MhxW%2BfUu1v%2FcEZVwSjMGIgJMbTzx6KCXiJZIrmsuww5SLKCRWbgrYUkiYeA%2BPVDMkumPaZMVqxegk6js2QOkRuQh9L1lP455uuZzhotbqwhuV0uz0ouNQEaP5Q%2B7WEctqx2qAOl%2BNbj7oUI%2BU%2BMZHv6Kv%2BSzD3NsY6w5XwXs7oRoBdzfZNTT08vJS19slfscF8GKDNjo5WTroTRqxiFk518%2BbER25jbTX%2BjhkcJNVJY7eaIPBOoOcNPu7UT7o8PXiEfilu%2BB1R6AzIItGBMQ8T6EuGgJrlwHVWwidHrGo%2F1jESq%2B9ZTkMh%2Bt3qcaQP7nFS3lrPa3Hye5paV3Gi3VWBXSz3DCqGszAhU7B8HQbo3Qb9mYm%2Bmr38WERAjwTVgoenx%2BcNijNdp1SKlz2Axw0GsZlHPZ5wUBeK4ry0lWqzqUGNoi5BGASXdMCMff%2FnnFNqlH93iwGziG9RcVee4UgXlQli%2BVrywT7VZ1wGMv865QvryVLUt1P%2Ba49juNX5cdtyxOp903ThY0Hqr8ZdFY7fII7QiW9URkFmxVGWdA%2BMLDC8sMGOqUBODaCAjfLQcU1zceYq2KPiEYePqzJuqQB1iVzpXpTs7myAjOU3ubqA2c30nv16J6fDd3Wrkjdr%2BfryOX8VqIZz875IyovfU7LJKhRuW0EsrDL3cp9wRHgQY8NqJewoLmFlawL8hPfol46nmQusG3TEZizBRxttOjYFHpVr5mVMaCHTtJCGNDJaCWwNx8i2Eo5xVnG%2BpyU3cusBL2km1ODdeXje91u&X-Amz-Signature=69e495d298e4dfdc88a333f35bbfdc23fa89a0b92417c40b352be71397629872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFVN56D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9gMCv1OZQZWypMCCxhve2m8jcl592wct8Ntz2D6V8uAiEA9iD9o9HaFCuB4oEpvc%2B2aNQf5XufYZ6EYQmez%2FJ%2FEVUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwQANwHUq7ipqVw7CrcA03%2BxqfWl26I%2FCs3DmFlJelyTgg8MhWeE8pka86grUW1F4kzkswErdOnV3BeSdWv14GrvQ%2FYCXQggxj1na0MhxW%2BfUu1v%2FcEZVwSjMGIgJMbTzx6KCXiJZIrmsuww5SLKCRWbgrYUkiYeA%2BPVDMkumPaZMVqxegk6js2QOkRuQh9L1lP455uuZzhotbqwhuV0uz0ouNQEaP5Q%2B7WEctqx2qAOl%2BNbj7oUI%2BU%2BMZHv6Kv%2BSzD3NsY6w5XwXs7oRoBdzfZNTT08vJS19slfscF8GKDNjo5WTroTRqxiFk518%2BbER25jbTX%2BjhkcJNVJY7eaIPBOoOcNPu7UT7o8PXiEfilu%2BB1R6AzIItGBMQ8T6EuGgJrlwHVWwidHrGo%2F1jESq%2B9ZTkMh%2Bt3qcaQP7nFS3lrPa3Hye5paV3Gi3VWBXSz3DCqGszAhU7B8HQbo3Qb9mYm%2Bmr38WERAjwTVgoenx%2BcNijNdp1SKlz2Axw0GsZlHPZ5wUBeK4ry0lWqzqUGNoi5BGASXdMCMff%2FnnFNqlH93iwGziG9RcVee4UgXlQli%2BVrywT7VZ1wGMv865QvryVLUt1P%2Ba49juNX5cdtyxOp903ThY0Hqr8ZdFY7fII7QiW9URkFmxVGWdA%2BMLDC8sMGOqUBODaCAjfLQcU1zceYq2KPiEYePqzJuqQB1iVzpXpTs7myAjOU3ubqA2c30nv16J6fDd3Wrkjdr%2BfryOX8VqIZz875IyovfU7LJKhRuW0EsrDL3cp9wRHgQY8NqJewoLmFlawL8hPfol46nmQusG3TEZizBRxttOjYFHpVr5mVMaCHTtJCGNDJaCWwNx8i2Eo5xVnG%2BpyU3cusBL2km1ODdeXje91u&X-Amz-Signature=3bef86d74a6f4d530af4e96bbbc03811ab5750cf598ce918b0bee5fbcd57640b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFVN56D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9gMCv1OZQZWypMCCxhve2m8jcl592wct8Ntz2D6V8uAiEA9iD9o9HaFCuB4oEpvc%2B2aNQf5XufYZ6EYQmez%2FJ%2FEVUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwQANwHUq7ipqVw7CrcA03%2BxqfWl26I%2FCs3DmFlJelyTgg8MhWeE8pka86grUW1F4kzkswErdOnV3BeSdWv14GrvQ%2FYCXQggxj1na0MhxW%2BfUu1v%2FcEZVwSjMGIgJMbTzx6KCXiJZIrmsuww5SLKCRWbgrYUkiYeA%2BPVDMkumPaZMVqxegk6js2QOkRuQh9L1lP455uuZzhotbqwhuV0uz0ouNQEaP5Q%2B7WEctqx2qAOl%2BNbj7oUI%2BU%2BMZHv6Kv%2BSzD3NsY6w5XwXs7oRoBdzfZNTT08vJS19slfscF8GKDNjo5WTroTRqxiFk518%2BbER25jbTX%2BjhkcJNVJY7eaIPBOoOcNPu7UT7o8PXiEfilu%2BB1R6AzIItGBMQ8T6EuGgJrlwHVWwidHrGo%2F1jESq%2B9ZTkMh%2Bt3qcaQP7nFS3lrPa3Hye5paV3Gi3VWBXSz3DCqGszAhU7B8HQbo3Qb9mYm%2Bmr38WERAjwTVgoenx%2BcNijNdp1SKlz2Axw0GsZlHPZ5wUBeK4ry0lWqzqUGNoi5BGASXdMCMff%2FnnFNqlH93iwGziG9RcVee4UgXlQli%2BVrywT7VZ1wGMv865QvryVLUt1P%2Ba49juNX5cdtyxOp903ThY0Hqr8ZdFY7fII7QiW9URkFmxVGWdA%2BMLDC8sMGOqUBODaCAjfLQcU1zceYq2KPiEYePqzJuqQB1iVzpXpTs7myAjOU3ubqA2c30nv16J6fDd3Wrkjdr%2BfryOX8VqIZz875IyovfU7LJKhRuW0EsrDL3cp9wRHgQY8NqJewoLmFlawL8hPfol46nmQusG3TEZizBRxttOjYFHpVr5mVMaCHTtJCGNDJaCWwNx8i2Eo5xVnG%2BpyU3cusBL2km1ODdeXje91u&X-Amz-Signature=1bc203bfc6d8d41122c454241599928ede38783590aafc7043043d8781f471f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFVN56D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9gMCv1OZQZWypMCCxhve2m8jcl592wct8Ntz2D6V8uAiEA9iD9o9HaFCuB4oEpvc%2B2aNQf5XufYZ6EYQmez%2FJ%2FEVUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwQANwHUq7ipqVw7CrcA03%2BxqfWl26I%2FCs3DmFlJelyTgg8MhWeE8pka86grUW1F4kzkswErdOnV3BeSdWv14GrvQ%2FYCXQggxj1na0MhxW%2BfUu1v%2FcEZVwSjMGIgJMbTzx6KCXiJZIrmsuww5SLKCRWbgrYUkiYeA%2BPVDMkumPaZMVqxegk6js2QOkRuQh9L1lP455uuZzhotbqwhuV0uz0ouNQEaP5Q%2B7WEctqx2qAOl%2BNbj7oUI%2BU%2BMZHv6Kv%2BSzD3NsY6w5XwXs7oRoBdzfZNTT08vJS19slfscF8GKDNjo5WTroTRqxiFk518%2BbER25jbTX%2BjhkcJNVJY7eaIPBOoOcNPu7UT7o8PXiEfilu%2BB1R6AzIItGBMQ8T6EuGgJrlwHVWwidHrGo%2F1jESq%2B9ZTkMh%2Bt3qcaQP7nFS3lrPa3Hye5paV3Gi3VWBXSz3DCqGszAhU7B8HQbo3Qb9mYm%2Bmr38WERAjwTVgoenx%2BcNijNdp1SKlz2Axw0GsZlHPZ5wUBeK4ry0lWqzqUGNoi5BGASXdMCMff%2FnnFNqlH93iwGziG9RcVee4UgXlQli%2BVrywT7VZ1wGMv865QvryVLUt1P%2Ba49juNX5cdtyxOp903ThY0Hqr8ZdFY7fII7QiW9URkFmxVGWdA%2BMLDC8sMGOqUBODaCAjfLQcU1zceYq2KPiEYePqzJuqQB1iVzpXpTs7myAjOU3ubqA2c30nv16J6fDd3Wrkjdr%2BfryOX8VqIZz875IyovfU7LJKhRuW0EsrDL3cp9wRHgQY8NqJewoLmFlawL8hPfol46nmQusG3TEZizBRxttOjYFHpVr5mVMaCHTtJCGNDJaCWwNx8i2Eo5xVnG%2BpyU3cusBL2km1ODdeXje91u&X-Amz-Signature=2c3365565907430bb1af60ff80318bc023bc3ca33d1fbe5463081a919f734ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
