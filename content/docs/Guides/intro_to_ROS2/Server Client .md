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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYO4ZRGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FiJq1Bm%2B6Y2jN5b%2B%2BmEgZe6RYdcJu%2FLYsfxoHLe4p%2FAiA03L18kVPr%2Bhse1OFZMwdfJkEQ3qLrrB1%2Fl3C1GINuYSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6r1emTlNg666jDxlKtwDC9fwlmdYG%2FOHAjapYj%2FiuYqWJtRZ3YK90Mlp5%2Bkp2eu5hDEvU6jo9ZZ0PwwwwSriHqIF5N25IATutzLbRQgmvJpe9gf45jwjH7YzXUa89e%2B5VdCXsHOVyh8y75VMN5bDoCqDi6%2BshT5Zaa47sfBVP9MircfxR%2Fbwv9NRm5aQ5bprzHx%2FYho84Fb%2Bqgi6mZzOcWo9%2FWemNF4gp7NyYhKzEROEZ%2B2Htlaw%2FBTtcNbvmTrWJlKArDL62KB%2BxKoNarMKu1MBRgtdxUIKHsfZS7KzkP6ZnxPqs%2Bf57kKT8jmcQkctffA8JmlqjxlUGNLPTcWxxp0lsw4FVCKOk3kZCSv8YEuWYRmtF0zQjh3aecFRpIYtLdujFjNDcCnPHcSRnMcNvhkADCBgHTb%2BDVxuojTbt3SnmfES1XWV%2BdR6nbOI4O2Mg2L1ixidyVzqg9UNi4UXXFXlRdEBfO%2B%2F0HRShSdUQWCMN%2BJmtjzzb%2BiQ2UfSQkMGyphsoB6IsyW%2BsBBWPkVqzFNt5xaa6e7D31GjnUF7sefFaB0dv%2FfWbrQFfiGoSwUa3OT6OYwiP0dXifMzYdm7mhAPJpmjZdsgk3Go%2FP%2BQdeRG3Ugn1fywsuV%2B4Wn2O7vCx7nfIEXMq2yADnEw%2FqrmxAY6pgFGijDbVExsf7OY9TXya1%2BztW2YUjTGIAaKLA1udmIoYmEwVLnPbFTUHYBsy4rnY08UXY8OcrVlCYZFGZ1QxAlPaU7d2nLLlHI5vCDM78QqKcGhUecUwzlzB86vInadL1n1w7YKkMTjpKbm2hRjFHxddModA14P4C%2FWJUg01ZTNu%2B9x1wzWyhvO6XczSx3DKXj13hEb0wztpIRDtoFSJd5ypkktkoae&X-Amz-Signature=e6191bf4819002f6cb0a01fc10b191c42a1bbbac0160c450adcad188cf00fba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYO4ZRGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FiJq1Bm%2B6Y2jN5b%2B%2BmEgZe6RYdcJu%2FLYsfxoHLe4p%2FAiA03L18kVPr%2Bhse1OFZMwdfJkEQ3qLrrB1%2Fl3C1GINuYSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6r1emTlNg666jDxlKtwDC9fwlmdYG%2FOHAjapYj%2FiuYqWJtRZ3YK90Mlp5%2Bkp2eu5hDEvU6jo9ZZ0PwwwwSriHqIF5N25IATutzLbRQgmvJpe9gf45jwjH7YzXUa89e%2B5VdCXsHOVyh8y75VMN5bDoCqDi6%2BshT5Zaa47sfBVP9MircfxR%2Fbwv9NRm5aQ5bprzHx%2FYho84Fb%2Bqgi6mZzOcWo9%2FWemNF4gp7NyYhKzEROEZ%2B2Htlaw%2FBTtcNbvmTrWJlKArDL62KB%2BxKoNarMKu1MBRgtdxUIKHsfZS7KzkP6ZnxPqs%2Bf57kKT8jmcQkctffA8JmlqjxlUGNLPTcWxxp0lsw4FVCKOk3kZCSv8YEuWYRmtF0zQjh3aecFRpIYtLdujFjNDcCnPHcSRnMcNvhkADCBgHTb%2BDVxuojTbt3SnmfES1XWV%2BdR6nbOI4O2Mg2L1ixidyVzqg9UNi4UXXFXlRdEBfO%2B%2F0HRShSdUQWCMN%2BJmtjzzb%2BiQ2UfSQkMGyphsoB6IsyW%2BsBBWPkVqzFNt5xaa6e7D31GjnUF7sefFaB0dv%2FfWbrQFfiGoSwUa3OT6OYwiP0dXifMzYdm7mhAPJpmjZdsgk3Go%2FP%2BQdeRG3Ugn1fywsuV%2B4Wn2O7vCx7nfIEXMq2yADnEw%2FqrmxAY6pgFGijDbVExsf7OY9TXya1%2BztW2YUjTGIAaKLA1udmIoYmEwVLnPbFTUHYBsy4rnY08UXY8OcrVlCYZFGZ1QxAlPaU7d2nLLlHI5vCDM78QqKcGhUecUwzlzB86vInadL1n1w7YKkMTjpKbm2hRjFHxddModA14P4C%2FWJUg01ZTNu%2B9x1wzWyhvO6XczSx3DKXj13hEb0wztpIRDtoFSJd5ypkktkoae&X-Amz-Signature=0d60849dc8acb661dd517b6033ecaaad6b2ded9844f82ba6a360ce86248f1481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYO4ZRGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FiJq1Bm%2B6Y2jN5b%2B%2BmEgZe6RYdcJu%2FLYsfxoHLe4p%2FAiA03L18kVPr%2Bhse1OFZMwdfJkEQ3qLrrB1%2Fl3C1GINuYSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6r1emTlNg666jDxlKtwDC9fwlmdYG%2FOHAjapYj%2FiuYqWJtRZ3YK90Mlp5%2Bkp2eu5hDEvU6jo9ZZ0PwwwwSriHqIF5N25IATutzLbRQgmvJpe9gf45jwjH7YzXUa89e%2B5VdCXsHOVyh8y75VMN5bDoCqDi6%2BshT5Zaa47sfBVP9MircfxR%2Fbwv9NRm5aQ5bprzHx%2FYho84Fb%2Bqgi6mZzOcWo9%2FWemNF4gp7NyYhKzEROEZ%2B2Htlaw%2FBTtcNbvmTrWJlKArDL62KB%2BxKoNarMKu1MBRgtdxUIKHsfZS7KzkP6ZnxPqs%2Bf57kKT8jmcQkctffA8JmlqjxlUGNLPTcWxxp0lsw4FVCKOk3kZCSv8YEuWYRmtF0zQjh3aecFRpIYtLdujFjNDcCnPHcSRnMcNvhkADCBgHTb%2BDVxuojTbt3SnmfES1XWV%2BdR6nbOI4O2Mg2L1ixidyVzqg9UNi4UXXFXlRdEBfO%2B%2F0HRShSdUQWCMN%2BJmtjzzb%2BiQ2UfSQkMGyphsoB6IsyW%2BsBBWPkVqzFNt5xaa6e7D31GjnUF7sefFaB0dv%2FfWbrQFfiGoSwUa3OT6OYwiP0dXifMzYdm7mhAPJpmjZdsgk3Go%2FP%2BQdeRG3Ugn1fywsuV%2B4Wn2O7vCx7nfIEXMq2yADnEw%2FqrmxAY6pgFGijDbVExsf7OY9TXya1%2BztW2YUjTGIAaKLA1udmIoYmEwVLnPbFTUHYBsy4rnY08UXY8OcrVlCYZFGZ1QxAlPaU7d2nLLlHI5vCDM78QqKcGhUecUwzlzB86vInadL1n1w7YKkMTjpKbm2hRjFHxddModA14P4C%2FWJUg01ZTNu%2B9x1wzWyhvO6XczSx3DKXj13hEb0wztpIRDtoFSJd5ypkktkoae&X-Amz-Signature=6db12f153d395642f20e669337bdb1113d5ee41b0932a713ac56f4af257df7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYO4ZRGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FiJq1Bm%2B6Y2jN5b%2B%2BmEgZe6RYdcJu%2FLYsfxoHLe4p%2FAiA03L18kVPr%2Bhse1OFZMwdfJkEQ3qLrrB1%2Fl3C1GINuYSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6r1emTlNg666jDxlKtwDC9fwlmdYG%2FOHAjapYj%2FiuYqWJtRZ3YK90Mlp5%2Bkp2eu5hDEvU6jo9ZZ0PwwwwSriHqIF5N25IATutzLbRQgmvJpe9gf45jwjH7YzXUa89e%2B5VdCXsHOVyh8y75VMN5bDoCqDi6%2BshT5Zaa47sfBVP9MircfxR%2Fbwv9NRm5aQ5bprzHx%2FYho84Fb%2Bqgi6mZzOcWo9%2FWemNF4gp7NyYhKzEROEZ%2B2Htlaw%2FBTtcNbvmTrWJlKArDL62KB%2BxKoNarMKu1MBRgtdxUIKHsfZS7KzkP6ZnxPqs%2Bf57kKT8jmcQkctffA8JmlqjxlUGNLPTcWxxp0lsw4FVCKOk3kZCSv8YEuWYRmtF0zQjh3aecFRpIYtLdujFjNDcCnPHcSRnMcNvhkADCBgHTb%2BDVxuojTbt3SnmfES1XWV%2BdR6nbOI4O2Mg2L1ixidyVzqg9UNi4UXXFXlRdEBfO%2B%2F0HRShSdUQWCMN%2BJmtjzzb%2BiQ2UfSQkMGyphsoB6IsyW%2BsBBWPkVqzFNt5xaa6e7D31GjnUF7sefFaB0dv%2FfWbrQFfiGoSwUa3OT6OYwiP0dXifMzYdm7mhAPJpmjZdsgk3Go%2FP%2BQdeRG3Ugn1fywsuV%2B4Wn2O7vCx7nfIEXMq2yADnEw%2FqrmxAY6pgFGijDbVExsf7OY9TXya1%2BztW2YUjTGIAaKLA1udmIoYmEwVLnPbFTUHYBsy4rnY08UXY8OcrVlCYZFGZ1QxAlPaU7d2nLLlHI5vCDM78QqKcGhUecUwzlzB86vInadL1n1w7YKkMTjpKbm2hRjFHxddModA14P4C%2FWJUg01ZTNu%2B9x1wzWyhvO6XczSx3DKXj13hEb0wztpIRDtoFSJd5ypkktkoae&X-Amz-Signature=7c18b54000ed0c364222c779d6180648dbedf7f3811deb641c0c6693b194b3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYO4ZRGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FiJq1Bm%2B6Y2jN5b%2B%2BmEgZe6RYdcJu%2FLYsfxoHLe4p%2FAiA03L18kVPr%2Bhse1OFZMwdfJkEQ3qLrrB1%2Fl3C1GINuYSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6r1emTlNg666jDxlKtwDC9fwlmdYG%2FOHAjapYj%2FiuYqWJtRZ3YK90Mlp5%2Bkp2eu5hDEvU6jo9ZZ0PwwwwSriHqIF5N25IATutzLbRQgmvJpe9gf45jwjH7YzXUa89e%2B5VdCXsHOVyh8y75VMN5bDoCqDi6%2BshT5Zaa47sfBVP9MircfxR%2Fbwv9NRm5aQ5bprzHx%2FYho84Fb%2Bqgi6mZzOcWo9%2FWemNF4gp7NyYhKzEROEZ%2B2Htlaw%2FBTtcNbvmTrWJlKArDL62KB%2BxKoNarMKu1MBRgtdxUIKHsfZS7KzkP6ZnxPqs%2Bf57kKT8jmcQkctffA8JmlqjxlUGNLPTcWxxp0lsw4FVCKOk3kZCSv8YEuWYRmtF0zQjh3aecFRpIYtLdujFjNDcCnPHcSRnMcNvhkADCBgHTb%2BDVxuojTbt3SnmfES1XWV%2BdR6nbOI4O2Mg2L1ixidyVzqg9UNi4UXXFXlRdEBfO%2B%2F0HRShSdUQWCMN%2BJmtjzzb%2BiQ2UfSQkMGyphsoB6IsyW%2BsBBWPkVqzFNt5xaa6e7D31GjnUF7sefFaB0dv%2FfWbrQFfiGoSwUa3OT6OYwiP0dXifMzYdm7mhAPJpmjZdsgk3Go%2FP%2BQdeRG3Ugn1fywsuV%2B4Wn2O7vCx7nfIEXMq2yADnEw%2FqrmxAY6pgFGijDbVExsf7OY9TXya1%2BztW2YUjTGIAaKLA1udmIoYmEwVLnPbFTUHYBsy4rnY08UXY8OcrVlCYZFGZ1QxAlPaU7d2nLLlHI5vCDM78QqKcGhUecUwzlzB86vInadL1n1w7YKkMTjpKbm2hRjFHxddModA14P4C%2FWJUg01ZTNu%2B9x1wzWyhvO6XczSx3DKXj13hEb0wztpIRDtoFSJd5ypkktkoae&X-Amz-Signature=f2bd70f709ee8f83f0a02ff55de8b22fd6344dfb2f1b76a31e8ebe25743d9bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
