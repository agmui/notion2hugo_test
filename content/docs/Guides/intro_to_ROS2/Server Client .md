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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY3RBPX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHaldnZe3kYHwRJOKKu%2F1pC35WvN7CExRwA%2F6av5IEExAiEAxttYRHvsb5y%2Bc1ghiwVw6ki2bb6B9cFPoW3Jw0eBjw4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKqEzPjryU7BRsdbUyrcA7%2B08lS5%2BIJPGp8gqxFXRqfcnRddvppd0NkyXErTQZZ66CXxFHuE9uhH0zILh3Lwaq2yn8M90HGl7qZfxReLKAmchAv8eIdu3MBkkIBamMPc5jwoz8cfJreq1k%2BJ8kM0osU%2BIXPFhw%2FXtyKFj8IrPxvoub%2Bcj9gWVoZtqJdZ0r87OrROFMqczRbYmknNZSrDawEsz6Dp5uj%2B0CtWFLE6Vdx7ker6GzUSfb8h2t2%2B4kCo4U56a%2FIQOTsY6q1BHF2equo9piEek%2F4slwDjF%2FDnLZ1dSTVrwFbIaD3C62Gynv6LObGfzOMQqbrR0qRK1ozjRXKTpQNitX1RmyqymoXP9xKbYH%2BjZ4hac8r7NoegFLJ2f2ym6oB297s%2FF85LDt63P8SYOfsdUc28mJZUP9ugPm6RXblxQ0FZmyrZt5Be29To8J2IkBY71Rue4SeAlLhz4%2FPpVJ3ucpoqBymuW3osRTKUXxKnsB4%2BIC0DnOQGWWuVf3anwuwUSe%2FkCd1R1%2Btu835Kqz%2B%2FbbM3kgsckMBbhebjrj9Bm2jRw0rv7GyIQeS1O%2FZzm%2BqA5JYtIihlBuThdWUY692eiXA5aizytH5WOn6MMBtDVDqAaXI%2BV7OxAisebRT5QZYthzzVrv1VMOLBtcIGOqUBY%2F17rh%2FAM5jQ6Mm3ySUF82OFQF7eo9bk3YiGLdyCmSQgJhakT2tqtwskfDSoKJeceTsNsuNifYjnV7FLwvFFSk%2Fm3gX5bwkBdcW0pfaVOCSkM%2BlFKULmycQqq27XJGGEcAcS7PXFevTAX%2BCHxQjorhBnGmn01HwAOfyoW5y4iXS5NVMhRqF6Ac4chOaqxIQ2by89RImgjUqThm9T5HZdJWQWOtk3&X-Amz-Signature=de14d680f38ce19d73746ac94e71d292afb908380b2e425fd5cbb2d8edf3e59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY3RBPX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHaldnZe3kYHwRJOKKu%2F1pC35WvN7CExRwA%2F6av5IEExAiEAxttYRHvsb5y%2Bc1ghiwVw6ki2bb6B9cFPoW3Jw0eBjw4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKqEzPjryU7BRsdbUyrcA7%2B08lS5%2BIJPGp8gqxFXRqfcnRddvppd0NkyXErTQZZ66CXxFHuE9uhH0zILh3Lwaq2yn8M90HGl7qZfxReLKAmchAv8eIdu3MBkkIBamMPc5jwoz8cfJreq1k%2BJ8kM0osU%2BIXPFhw%2FXtyKFj8IrPxvoub%2Bcj9gWVoZtqJdZ0r87OrROFMqczRbYmknNZSrDawEsz6Dp5uj%2B0CtWFLE6Vdx7ker6GzUSfb8h2t2%2B4kCo4U56a%2FIQOTsY6q1BHF2equo9piEek%2F4slwDjF%2FDnLZ1dSTVrwFbIaD3C62Gynv6LObGfzOMQqbrR0qRK1ozjRXKTpQNitX1RmyqymoXP9xKbYH%2BjZ4hac8r7NoegFLJ2f2ym6oB297s%2FF85LDt63P8SYOfsdUc28mJZUP9ugPm6RXblxQ0FZmyrZt5Be29To8J2IkBY71Rue4SeAlLhz4%2FPpVJ3ucpoqBymuW3osRTKUXxKnsB4%2BIC0DnOQGWWuVf3anwuwUSe%2FkCd1R1%2Btu835Kqz%2B%2FbbM3kgsckMBbhebjrj9Bm2jRw0rv7GyIQeS1O%2FZzm%2BqA5JYtIihlBuThdWUY692eiXA5aizytH5WOn6MMBtDVDqAaXI%2BV7OxAisebRT5QZYthzzVrv1VMOLBtcIGOqUBY%2F17rh%2FAM5jQ6Mm3ySUF82OFQF7eo9bk3YiGLdyCmSQgJhakT2tqtwskfDSoKJeceTsNsuNifYjnV7FLwvFFSk%2Fm3gX5bwkBdcW0pfaVOCSkM%2BlFKULmycQqq27XJGGEcAcS7PXFevTAX%2BCHxQjorhBnGmn01HwAOfyoW5y4iXS5NVMhRqF6Ac4chOaqxIQ2by89RImgjUqThm9T5HZdJWQWOtk3&X-Amz-Signature=35bcf929dd68f1e1fc7f868536a2ed7ade2645c89dfa5f7bcd0208b85b6f1cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY3RBPX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHaldnZe3kYHwRJOKKu%2F1pC35WvN7CExRwA%2F6av5IEExAiEAxttYRHvsb5y%2Bc1ghiwVw6ki2bb6B9cFPoW3Jw0eBjw4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKqEzPjryU7BRsdbUyrcA7%2B08lS5%2BIJPGp8gqxFXRqfcnRddvppd0NkyXErTQZZ66CXxFHuE9uhH0zILh3Lwaq2yn8M90HGl7qZfxReLKAmchAv8eIdu3MBkkIBamMPc5jwoz8cfJreq1k%2BJ8kM0osU%2BIXPFhw%2FXtyKFj8IrPxvoub%2Bcj9gWVoZtqJdZ0r87OrROFMqczRbYmknNZSrDawEsz6Dp5uj%2B0CtWFLE6Vdx7ker6GzUSfb8h2t2%2B4kCo4U56a%2FIQOTsY6q1BHF2equo9piEek%2F4slwDjF%2FDnLZ1dSTVrwFbIaD3C62Gynv6LObGfzOMQqbrR0qRK1ozjRXKTpQNitX1RmyqymoXP9xKbYH%2BjZ4hac8r7NoegFLJ2f2ym6oB297s%2FF85LDt63P8SYOfsdUc28mJZUP9ugPm6RXblxQ0FZmyrZt5Be29To8J2IkBY71Rue4SeAlLhz4%2FPpVJ3ucpoqBymuW3osRTKUXxKnsB4%2BIC0DnOQGWWuVf3anwuwUSe%2FkCd1R1%2Btu835Kqz%2B%2FbbM3kgsckMBbhebjrj9Bm2jRw0rv7GyIQeS1O%2FZzm%2BqA5JYtIihlBuThdWUY692eiXA5aizytH5WOn6MMBtDVDqAaXI%2BV7OxAisebRT5QZYthzzVrv1VMOLBtcIGOqUBY%2F17rh%2FAM5jQ6Mm3ySUF82OFQF7eo9bk3YiGLdyCmSQgJhakT2tqtwskfDSoKJeceTsNsuNifYjnV7FLwvFFSk%2Fm3gX5bwkBdcW0pfaVOCSkM%2BlFKULmycQqq27XJGGEcAcS7PXFevTAX%2BCHxQjorhBnGmn01HwAOfyoW5y4iXS5NVMhRqF6Ac4chOaqxIQ2by89RImgjUqThm9T5HZdJWQWOtk3&X-Amz-Signature=a73f83f9f02f3b5e689b1696f413b71f2684dda207b1b044a55c8c747a8db4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY3RBPX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHaldnZe3kYHwRJOKKu%2F1pC35WvN7CExRwA%2F6av5IEExAiEAxttYRHvsb5y%2Bc1ghiwVw6ki2bb6B9cFPoW3Jw0eBjw4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKqEzPjryU7BRsdbUyrcA7%2B08lS5%2BIJPGp8gqxFXRqfcnRddvppd0NkyXErTQZZ66CXxFHuE9uhH0zILh3Lwaq2yn8M90HGl7qZfxReLKAmchAv8eIdu3MBkkIBamMPc5jwoz8cfJreq1k%2BJ8kM0osU%2BIXPFhw%2FXtyKFj8IrPxvoub%2Bcj9gWVoZtqJdZ0r87OrROFMqczRbYmknNZSrDawEsz6Dp5uj%2B0CtWFLE6Vdx7ker6GzUSfb8h2t2%2B4kCo4U56a%2FIQOTsY6q1BHF2equo9piEek%2F4slwDjF%2FDnLZ1dSTVrwFbIaD3C62Gynv6LObGfzOMQqbrR0qRK1ozjRXKTpQNitX1RmyqymoXP9xKbYH%2BjZ4hac8r7NoegFLJ2f2ym6oB297s%2FF85LDt63P8SYOfsdUc28mJZUP9ugPm6RXblxQ0FZmyrZt5Be29To8J2IkBY71Rue4SeAlLhz4%2FPpVJ3ucpoqBymuW3osRTKUXxKnsB4%2BIC0DnOQGWWuVf3anwuwUSe%2FkCd1R1%2Btu835Kqz%2B%2FbbM3kgsckMBbhebjrj9Bm2jRw0rv7GyIQeS1O%2FZzm%2BqA5JYtIihlBuThdWUY692eiXA5aizytH5WOn6MMBtDVDqAaXI%2BV7OxAisebRT5QZYthzzVrv1VMOLBtcIGOqUBY%2F17rh%2FAM5jQ6Mm3ySUF82OFQF7eo9bk3YiGLdyCmSQgJhakT2tqtwskfDSoKJeceTsNsuNifYjnV7FLwvFFSk%2Fm3gX5bwkBdcW0pfaVOCSkM%2BlFKULmycQqq27XJGGEcAcS7PXFevTAX%2BCHxQjorhBnGmn01HwAOfyoW5y4iXS5NVMhRqF6Ac4chOaqxIQ2by89RImgjUqThm9T5HZdJWQWOtk3&X-Amz-Signature=1d490934c3556260c044c4f0c1adb4fe8812d4d8a38b6fde474998a62ba7d63c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY3RBPX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHaldnZe3kYHwRJOKKu%2F1pC35WvN7CExRwA%2F6av5IEExAiEAxttYRHvsb5y%2Bc1ghiwVw6ki2bb6B9cFPoW3Jw0eBjw4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKqEzPjryU7BRsdbUyrcA7%2B08lS5%2BIJPGp8gqxFXRqfcnRddvppd0NkyXErTQZZ66CXxFHuE9uhH0zILh3Lwaq2yn8M90HGl7qZfxReLKAmchAv8eIdu3MBkkIBamMPc5jwoz8cfJreq1k%2BJ8kM0osU%2BIXPFhw%2FXtyKFj8IrPxvoub%2Bcj9gWVoZtqJdZ0r87OrROFMqczRbYmknNZSrDawEsz6Dp5uj%2B0CtWFLE6Vdx7ker6GzUSfb8h2t2%2B4kCo4U56a%2FIQOTsY6q1BHF2equo9piEek%2F4slwDjF%2FDnLZ1dSTVrwFbIaD3C62Gynv6LObGfzOMQqbrR0qRK1ozjRXKTpQNitX1RmyqymoXP9xKbYH%2BjZ4hac8r7NoegFLJ2f2ym6oB297s%2FF85LDt63P8SYOfsdUc28mJZUP9ugPm6RXblxQ0FZmyrZt5Be29To8J2IkBY71Rue4SeAlLhz4%2FPpVJ3ucpoqBymuW3osRTKUXxKnsB4%2BIC0DnOQGWWuVf3anwuwUSe%2FkCd1R1%2Btu835Kqz%2B%2FbbM3kgsckMBbhebjrj9Bm2jRw0rv7GyIQeS1O%2FZzm%2BqA5JYtIihlBuThdWUY692eiXA5aizytH5WOn6MMBtDVDqAaXI%2BV7OxAisebRT5QZYthzzVrv1VMOLBtcIGOqUBY%2F17rh%2FAM5jQ6Mm3ySUF82OFQF7eo9bk3YiGLdyCmSQgJhakT2tqtwskfDSoKJeceTsNsuNifYjnV7FLwvFFSk%2Fm3gX5bwkBdcW0pfaVOCSkM%2BlFKULmycQqq27XJGGEcAcS7PXFevTAX%2BCHxQjorhBnGmn01HwAOfyoW5y4iXS5NVMhRqF6Ac4chOaqxIQ2by89RImgjUqThm9T5HZdJWQWOtk3&X-Amz-Signature=3b5788d559d29235e03109c4fa97708a81deef9ed46fe1a472ab47fb2ec05f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
