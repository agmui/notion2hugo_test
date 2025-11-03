---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYK6NF7T%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmmHDtREQzBCo%2FUONMWYU2gnJqpjq5Y5fYzAtqBJP91AiEA6AsAhxQ3ZPQqoGWSzbxNpMCYhzpekeLL26Z84PQvAU8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOzHm6%2FErRg6BerlfSrcA4bM1VvX9bMCquOOrRbeYtg8Gyv4CechUC17pMJQOHe7HQrGZ97Z%2BjcAJgIYV7uZ8Wsqj3nvTu5vAdRgAvOMMPt6qbVHlVazHpyFQpdnuciHroGxqU7UrbtLYs1B949rmTpIoJitkj48YZNC16%2F2ofLOmJAyVx7SxuopzlkhgHz0%2FAHMSR1sf8yHqsIyT%2FkkaCzLTZYGP0OyqonZvOtYJMmSPzrhuu7PgDcl25iUWUrk%2Fmsno%2FIxKo%2Fi78IIkpXnlB7%2BaMOB6nV7mRZt%2BZKFoMbf54%2BJeijC3vra27yrg7oeZ%2Bhr7xvKhYxP6fsyRUIkmeklg3ioSYh8QxVSBAR38PO28s4YSEYdC28TqYXS1zBKGTXx68q%2F02Aw1aaYlzv81dyZsafUEHCKDU8NwrpnRmCFIOarL2JM6AhLlTy58V%2F0I%2FeUbXFmr7wcvrb%2BT1pwac%2FUizrfY9%2FkaLXcX60GmWGRph4FP8SfxTwALpRArGndlk0hC5azAw%2FGYoaQglmZ6NYExs88tdyQS8DnhKM%2FG161YZwvBXwjURZRagCcp4b26kpgsJMPABRIwfSJGqnmCFB6d0Xb7DO6JG3rmhiob9PehAV2hRttSbfNmo5ksD4ZCuoF8d2uL3SwGueZMO%2BIoMgGOqUBi8%2FqO1tNhnsb1HsWgbTKKohUNZ16BYiMBqlNx8wYP%2FofpicAp%2FArRRzoL2l3oZNyvxAjynE46ePQWfyAo%2Bx5zHm1wEB3Av2soVt7hslK0vwe%2FxHJTQCEj0SpbWaBuYm0eXVBDVYIGpy9qESKdctLq%2BK23JsFIoQy8t3oQyYg5aXw2fhT6zv5WMks%2BTqCQ2zNJDdACMnPWUYu3JLK92sD%2F7x%2FUnF2&X-Amz-Signature=4ab319b0d3bbe0478154996ccfcb7a350451cf2bc9ef1519eb9e4b7f84610953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYK6NF7T%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmmHDtREQzBCo%2FUONMWYU2gnJqpjq5Y5fYzAtqBJP91AiEA6AsAhxQ3ZPQqoGWSzbxNpMCYhzpekeLL26Z84PQvAU8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOzHm6%2FErRg6BerlfSrcA4bM1VvX9bMCquOOrRbeYtg8Gyv4CechUC17pMJQOHe7HQrGZ97Z%2BjcAJgIYV7uZ8Wsqj3nvTu5vAdRgAvOMMPt6qbVHlVazHpyFQpdnuciHroGxqU7UrbtLYs1B949rmTpIoJitkj48YZNC16%2F2ofLOmJAyVx7SxuopzlkhgHz0%2FAHMSR1sf8yHqsIyT%2FkkaCzLTZYGP0OyqonZvOtYJMmSPzrhuu7PgDcl25iUWUrk%2Fmsno%2FIxKo%2Fi78IIkpXnlB7%2BaMOB6nV7mRZt%2BZKFoMbf54%2BJeijC3vra27yrg7oeZ%2Bhr7xvKhYxP6fsyRUIkmeklg3ioSYh8QxVSBAR38PO28s4YSEYdC28TqYXS1zBKGTXx68q%2F02Aw1aaYlzv81dyZsafUEHCKDU8NwrpnRmCFIOarL2JM6AhLlTy58V%2F0I%2FeUbXFmr7wcvrb%2BT1pwac%2FUizrfY9%2FkaLXcX60GmWGRph4FP8SfxTwALpRArGndlk0hC5azAw%2FGYoaQglmZ6NYExs88tdyQS8DnhKM%2FG161YZwvBXwjURZRagCcp4b26kpgsJMPABRIwfSJGqnmCFB6d0Xb7DO6JG3rmhiob9PehAV2hRttSbfNmo5ksD4ZCuoF8d2uL3SwGueZMO%2BIoMgGOqUBi8%2FqO1tNhnsb1HsWgbTKKohUNZ16BYiMBqlNx8wYP%2FofpicAp%2FArRRzoL2l3oZNyvxAjynE46ePQWfyAo%2Bx5zHm1wEB3Av2soVt7hslK0vwe%2FxHJTQCEj0SpbWaBuYm0eXVBDVYIGpy9qESKdctLq%2BK23JsFIoQy8t3oQyYg5aXw2fhT6zv5WMks%2BTqCQ2zNJDdACMnPWUYu3JLK92sD%2F7x%2FUnF2&X-Amz-Signature=6f27d144f19154f29951fee01e424e3091642a63f2da1d6d5606b782851914bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYK6NF7T%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmmHDtREQzBCo%2FUONMWYU2gnJqpjq5Y5fYzAtqBJP91AiEA6AsAhxQ3ZPQqoGWSzbxNpMCYhzpekeLL26Z84PQvAU8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOzHm6%2FErRg6BerlfSrcA4bM1VvX9bMCquOOrRbeYtg8Gyv4CechUC17pMJQOHe7HQrGZ97Z%2BjcAJgIYV7uZ8Wsqj3nvTu5vAdRgAvOMMPt6qbVHlVazHpyFQpdnuciHroGxqU7UrbtLYs1B949rmTpIoJitkj48YZNC16%2F2ofLOmJAyVx7SxuopzlkhgHz0%2FAHMSR1sf8yHqsIyT%2FkkaCzLTZYGP0OyqonZvOtYJMmSPzrhuu7PgDcl25iUWUrk%2Fmsno%2FIxKo%2Fi78IIkpXnlB7%2BaMOB6nV7mRZt%2BZKFoMbf54%2BJeijC3vra27yrg7oeZ%2Bhr7xvKhYxP6fsyRUIkmeklg3ioSYh8QxVSBAR38PO28s4YSEYdC28TqYXS1zBKGTXx68q%2F02Aw1aaYlzv81dyZsafUEHCKDU8NwrpnRmCFIOarL2JM6AhLlTy58V%2F0I%2FeUbXFmr7wcvrb%2BT1pwac%2FUizrfY9%2FkaLXcX60GmWGRph4FP8SfxTwALpRArGndlk0hC5azAw%2FGYoaQglmZ6NYExs88tdyQS8DnhKM%2FG161YZwvBXwjURZRagCcp4b26kpgsJMPABRIwfSJGqnmCFB6d0Xb7DO6JG3rmhiob9PehAV2hRttSbfNmo5ksD4ZCuoF8d2uL3SwGueZMO%2BIoMgGOqUBi8%2FqO1tNhnsb1HsWgbTKKohUNZ16BYiMBqlNx8wYP%2FofpicAp%2FArRRzoL2l3oZNyvxAjynE46ePQWfyAo%2Bx5zHm1wEB3Av2soVt7hslK0vwe%2FxHJTQCEj0SpbWaBuYm0eXVBDVYIGpy9qESKdctLq%2BK23JsFIoQy8t3oQyYg5aXw2fhT6zv5WMks%2BTqCQ2zNJDdACMnPWUYu3JLK92sD%2F7x%2FUnF2&X-Amz-Signature=4a776101c3c2fd575d5b3d018fcd5461fef53a1f37f7529eebcf3a9b70f3e831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYK6NF7T%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmmHDtREQzBCo%2FUONMWYU2gnJqpjq5Y5fYzAtqBJP91AiEA6AsAhxQ3ZPQqoGWSzbxNpMCYhzpekeLL26Z84PQvAU8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOzHm6%2FErRg6BerlfSrcA4bM1VvX9bMCquOOrRbeYtg8Gyv4CechUC17pMJQOHe7HQrGZ97Z%2BjcAJgIYV7uZ8Wsqj3nvTu5vAdRgAvOMMPt6qbVHlVazHpyFQpdnuciHroGxqU7UrbtLYs1B949rmTpIoJitkj48YZNC16%2F2ofLOmJAyVx7SxuopzlkhgHz0%2FAHMSR1sf8yHqsIyT%2FkkaCzLTZYGP0OyqonZvOtYJMmSPzrhuu7PgDcl25iUWUrk%2Fmsno%2FIxKo%2Fi78IIkpXnlB7%2BaMOB6nV7mRZt%2BZKFoMbf54%2BJeijC3vra27yrg7oeZ%2Bhr7xvKhYxP6fsyRUIkmeklg3ioSYh8QxVSBAR38PO28s4YSEYdC28TqYXS1zBKGTXx68q%2F02Aw1aaYlzv81dyZsafUEHCKDU8NwrpnRmCFIOarL2JM6AhLlTy58V%2F0I%2FeUbXFmr7wcvrb%2BT1pwac%2FUizrfY9%2FkaLXcX60GmWGRph4FP8SfxTwALpRArGndlk0hC5azAw%2FGYoaQglmZ6NYExs88tdyQS8DnhKM%2FG161YZwvBXwjURZRagCcp4b26kpgsJMPABRIwfSJGqnmCFB6d0Xb7DO6JG3rmhiob9PehAV2hRttSbfNmo5ksD4ZCuoF8d2uL3SwGueZMO%2BIoMgGOqUBi8%2FqO1tNhnsb1HsWgbTKKohUNZ16BYiMBqlNx8wYP%2FofpicAp%2FArRRzoL2l3oZNyvxAjynE46ePQWfyAo%2Bx5zHm1wEB3Av2soVt7hslK0vwe%2FxHJTQCEj0SpbWaBuYm0eXVBDVYIGpy9qESKdctLq%2BK23JsFIoQy8t3oQyYg5aXw2fhT6zv5WMks%2BTqCQ2zNJDdACMnPWUYu3JLK92sD%2F7x%2FUnF2&X-Amz-Signature=0cb3352d7fa54ce0dad6153b41d83fd8ea1131b15d8b0084a3c5e86ae34feacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYK6NF7T%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmmHDtREQzBCo%2FUONMWYU2gnJqpjq5Y5fYzAtqBJP91AiEA6AsAhxQ3ZPQqoGWSzbxNpMCYhzpekeLL26Z84PQvAU8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOzHm6%2FErRg6BerlfSrcA4bM1VvX9bMCquOOrRbeYtg8Gyv4CechUC17pMJQOHe7HQrGZ97Z%2BjcAJgIYV7uZ8Wsqj3nvTu5vAdRgAvOMMPt6qbVHlVazHpyFQpdnuciHroGxqU7UrbtLYs1B949rmTpIoJitkj48YZNC16%2F2ofLOmJAyVx7SxuopzlkhgHz0%2FAHMSR1sf8yHqsIyT%2FkkaCzLTZYGP0OyqonZvOtYJMmSPzrhuu7PgDcl25iUWUrk%2Fmsno%2FIxKo%2Fi78IIkpXnlB7%2BaMOB6nV7mRZt%2BZKFoMbf54%2BJeijC3vra27yrg7oeZ%2Bhr7xvKhYxP6fsyRUIkmeklg3ioSYh8QxVSBAR38PO28s4YSEYdC28TqYXS1zBKGTXx68q%2F02Aw1aaYlzv81dyZsafUEHCKDU8NwrpnRmCFIOarL2JM6AhLlTy58V%2F0I%2FeUbXFmr7wcvrb%2BT1pwac%2FUizrfY9%2FkaLXcX60GmWGRph4FP8SfxTwALpRArGndlk0hC5azAw%2FGYoaQglmZ6NYExs88tdyQS8DnhKM%2FG161YZwvBXwjURZRagCcp4b26kpgsJMPABRIwfSJGqnmCFB6d0Xb7DO6JG3rmhiob9PehAV2hRttSbfNmo5ksD4ZCuoF8d2uL3SwGueZMO%2BIoMgGOqUBi8%2FqO1tNhnsb1HsWgbTKKohUNZ16BYiMBqlNx8wYP%2FofpicAp%2FArRRzoL2l3oZNyvxAjynE46ePQWfyAo%2Bx5zHm1wEB3Av2soVt7hslK0vwe%2FxHJTQCEj0SpbWaBuYm0eXVBDVYIGpy9qESKdctLq%2BK23JsFIoQy8t3oQyYg5aXw2fhT6zv5WMks%2BTqCQ2zNJDdACMnPWUYu3JLK92sD%2F7x%2FUnF2&X-Amz-Signature=c85ee0601374c4887d9e682d4d3ab1ec9747cdf53aa9a1a96f775c111e991a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
