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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO6AVAK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPm2Nv%2B1ioWbl%2F58WLnFLMUL3be5IY9o%2BwH2MKwMMi8AiEAnWXlBmtv2QCaLS2mRY4h1YXidCyljs5YpvFxbmEfSucqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhJV9z88r8fWKG7YCrcAyh7lQ1K2vJm4bIWtEtIbDtH%2BIiBuKJTcPbLVJ33bO4m2FDU9abSE%2F1jcWb9ZfRVDlq29ZkIl%2B5s03TGl8we8OsEFpLha8rzCdxGXFzBt%2Fe%2F20i2472r%2FhRnthckAs1hbcsxv9pmhSkIbzUtk7fK8Br6H7qH0DUByv8RNo5Li%2BO0qfJZgSPkvlAPSi8TcUw12RO5dJ%2FmVyZuZCGveM9GJPjqdfe6sxKpbiqg%2B3fIVGJin6H00KTEH9wQIGox%2BC0HLp4%2FgF4z0zofsBnRuW2f%2BAhNRD5vXULgommuD1h1CiQk2aBoOqn7cH7OvJK7GuLkj8TMvU081oGtfQp6CdqHrX8e8rb3SQjM6r5Iqt68U0B3K0KwU5dls75j1TZGi0ipdI6puOFyQ70FSyxwR36p0jPRDy%2FOlLnKcLa3ldjYYSQnVwhH9jJ8xBIkXI4yRoY68SLqNGwCKCi1qiR7mUgUUzbFq0mDApKBY6d5iDG0k00H2cTl3oAH68mht09blJdRWihofpePftfwFfjC5R7TmLbS1IYNp00rJ1%2FqIgCAfI5TRrtDsAp7asNU8piGV18N5fWU12X3kMPuVPxpVANcxHMFNj5WpZb1bwzjHR6Lnwh1V4giGpbdmUuWi%2FpwMPj178MGOqUBOufbtn03Zja7inmDS01FDM784PU4m3I%2F6MIVNutR5W3L9RJB8N%2B8vMhFJJKjd3vP3vVMeGhH0Ai2QcJ0nA1ohfRJabFp0AmKsMkhjG76RK2FIRzjVJwItR6I4Q5JuRC7xD6ArZZHdD1yARNqX4kRJzmIjDsiSBO6EOtunAAk9u73hJySBg2yBYn08nxm%2F8qypmhoZIjuQs2%2BgBD%2F4FZgVlozeZkz&X-Amz-Signature=bf7743ad5261b0ba09e600273fd6c70b8ed21bd11f3535e2a345408f3cf431bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO6AVAK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPm2Nv%2B1ioWbl%2F58WLnFLMUL3be5IY9o%2BwH2MKwMMi8AiEAnWXlBmtv2QCaLS2mRY4h1YXidCyljs5YpvFxbmEfSucqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhJV9z88r8fWKG7YCrcAyh7lQ1K2vJm4bIWtEtIbDtH%2BIiBuKJTcPbLVJ33bO4m2FDU9abSE%2F1jcWb9ZfRVDlq29ZkIl%2B5s03TGl8we8OsEFpLha8rzCdxGXFzBt%2Fe%2F20i2472r%2FhRnthckAs1hbcsxv9pmhSkIbzUtk7fK8Br6H7qH0DUByv8RNo5Li%2BO0qfJZgSPkvlAPSi8TcUw12RO5dJ%2FmVyZuZCGveM9GJPjqdfe6sxKpbiqg%2B3fIVGJin6H00KTEH9wQIGox%2BC0HLp4%2FgF4z0zofsBnRuW2f%2BAhNRD5vXULgommuD1h1CiQk2aBoOqn7cH7OvJK7GuLkj8TMvU081oGtfQp6CdqHrX8e8rb3SQjM6r5Iqt68U0B3K0KwU5dls75j1TZGi0ipdI6puOFyQ70FSyxwR36p0jPRDy%2FOlLnKcLa3ldjYYSQnVwhH9jJ8xBIkXI4yRoY68SLqNGwCKCi1qiR7mUgUUzbFq0mDApKBY6d5iDG0k00H2cTl3oAH68mht09blJdRWihofpePftfwFfjC5R7TmLbS1IYNp00rJ1%2FqIgCAfI5TRrtDsAp7asNU8piGV18N5fWU12X3kMPuVPxpVANcxHMFNj5WpZb1bwzjHR6Lnwh1V4giGpbdmUuWi%2FpwMPj178MGOqUBOufbtn03Zja7inmDS01FDM784PU4m3I%2F6MIVNutR5W3L9RJB8N%2B8vMhFJJKjd3vP3vVMeGhH0Ai2QcJ0nA1ohfRJabFp0AmKsMkhjG76RK2FIRzjVJwItR6I4Q5JuRC7xD6ArZZHdD1yARNqX4kRJzmIjDsiSBO6EOtunAAk9u73hJySBg2yBYn08nxm%2F8qypmhoZIjuQs2%2BgBD%2F4FZgVlozeZkz&X-Amz-Signature=366576ee40219923c822f4b6402a660270a8ac140e8763b546935ded0785419b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO6AVAK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPm2Nv%2B1ioWbl%2F58WLnFLMUL3be5IY9o%2BwH2MKwMMi8AiEAnWXlBmtv2QCaLS2mRY4h1YXidCyljs5YpvFxbmEfSucqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhJV9z88r8fWKG7YCrcAyh7lQ1K2vJm4bIWtEtIbDtH%2BIiBuKJTcPbLVJ33bO4m2FDU9abSE%2F1jcWb9ZfRVDlq29ZkIl%2B5s03TGl8we8OsEFpLha8rzCdxGXFzBt%2Fe%2F20i2472r%2FhRnthckAs1hbcsxv9pmhSkIbzUtk7fK8Br6H7qH0DUByv8RNo5Li%2BO0qfJZgSPkvlAPSi8TcUw12RO5dJ%2FmVyZuZCGveM9GJPjqdfe6sxKpbiqg%2B3fIVGJin6H00KTEH9wQIGox%2BC0HLp4%2FgF4z0zofsBnRuW2f%2BAhNRD5vXULgommuD1h1CiQk2aBoOqn7cH7OvJK7GuLkj8TMvU081oGtfQp6CdqHrX8e8rb3SQjM6r5Iqt68U0B3K0KwU5dls75j1TZGi0ipdI6puOFyQ70FSyxwR36p0jPRDy%2FOlLnKcLa3ldjYYSQnVwhH9jJ8xBIkXI4yRoY68SLqNGwCKCi1qiR7mUgUUzbFq0mDApKBY6d5iDG0k00H2cTl3oAH68mht09blJdRWihofpePftfwFfjC5R7TmLbS1IYNp00rJ1%2FqIgCAfI5TRrtDsAp7asNU8piGV18N5fWU12X3kMPuVPxpVANcxHMFNj5WpZb1bwzjHR6Lnwh1V4giGpbdmUuWi%2FpwMPj178MGOqUBOufbtn03Zja7inmDS01FDM784PU4m3I%2F6MIVNutR5W3L9RJB8N%2B8vMhFJJKjd3vP3vVMeGhH0Ai2QcJ0nA1ohfRJabFp0AmKsMkhjG76RK2FIRzjVJwItR6I4Q5JuRC7xD6ArZZHdD1yARNqX4kRJzmIjDsiSBO6EOtunAAk9u73hJySBg2yBYn08nxm%2F8qypmhoZIjuQs2%2BgBD%2F4FZgVlozeZkz&X-Amz-Signature=05e0c99db693194287df1f78ff6dbccdefb06de9461912e2c77155c8f17957db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO6AVAK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPm2Nv%2B1ioWbl%2F58WLnFLMUL3be5IY9o%2BwH2MKwMMi8AiEAnWXlBmtv2QCaLS2mRY4h1YXidCyljs5YpvFxbmEfSucqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhJV9z88r8fWKG7YCrcAyh7lQ1K2vJm4bIWtEtIbDtH%2BIiBuKJTcPbLVJ33bO4m2FDU9abSE%2F1jcWb9ZfRVDlq29ZkIl%2B5s03TGl8we8OsEFpLha8rzCdxGXFzBt%2Fe%2F20i2472r%2FhRnthckAs1hbcsxv9pmhSkIbzUtk7fK8Br6H7qH0DUByv8RNo5Li%2BO0qfJZgSPkvlAPSi8TcUw12RO5dJ%2FmVyZuZCGveM9GJPjqdfe6sxKpbiqg%2B3fIVGJin6H00KTEH9wQIGox%2BC0HLp4%2FgF4z0zofsBnRuW2f%2BAhNRD5vXULgommuD1h1CiQk2aBoOqn7cH7OvJK7GuLkj8TMvU081oGtfQp6CdqHrX8e8rb3SQjM6r5Iqt68U0B3K0KwU5dls75j1TZGi0ipdI6puOFyQ70FSyxwR36p0jPRDy%2FOlLnKcLa3ldjYYSQnVwhH9jJ8xBIkXI4yRoY68SLqNGwCKCi1qiR7mUgUUzbFq0mDApKBY6d5iDG0k00H2cTl3oAH68mht09blJdRWihofpePftfwFfjC5R7TmLbS1IYNp00rJ1%2FqIgCAfI5TRrtDsAp7asNU8piGV18N5fWU12X3kMPuVPxpVANcxHMFNj5WpZb1bwzjHR6Lnwh1V4giGpbdmUuWi%2FpwMPj178MGOqUBOufbtn03Zja7inmDS01FDM784PU4m3I%2F6MIVNutR5W3L9RJB8N%2B8vMhFJJKjd3vP3vVMeGhH0Ai2QcJ0nA1ohfRJabFp0AmKsMkhjG76RK2FIRzjVJwItR6I4Q5JuRC7xD6ArZZHdD1yARNqX4kRJzmIjDsiSBO6EOtunAAk9u73hJySBg2yBYn08nxm%2F8qypmhoZIjuQs2%2BgBD%2F4FZgVlozeZkz&X-Amz-Signature=841e3dbc63906224f5c9fc4bbe499227f51ba29f268572d777648e001f8f72b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO6AVAK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPm2Nv%2B1ioWbl%2F58WLnFLMUL3be5IY9o%2BwH2MKwMMi8AiEAnWXlBmtv2QCaLS2mRY4h1YXidCyljs5YpvFxbmEfSucqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhJV9z88r8fWKG7YCrcAyh7lQ1K2vJm4bIWtEtIbDtH%2BIiBuKJTcPbLVJ33bO4m2FDU9abSE%2F1jcWb9ZfRVDlq29ZkIl%2B5s03TGl8we8OsEFpLha8rzCdxGXFzBt%2Fe%2F20i2472r%2FhRnthckAs1hbcsxv9pmhSkIbzUtk7fK8Br6H7qH0DUByv8RNo5Li%2BO0qfJZgSPkvlAPSi8TcUw12RO5dJ%2FmVyZuZCGveM9GJPjqdfe6sxKpbiqg%2B3fIVGJin6H00KTEH9wQIGox%2BC0HLp4%2FgF4z0zofsBnRuW2f%2BAhNRD5vXULgommuD1h1CiQk2aBoOqn7cH7OvJK7GuLkj8TMvU081oGtfQp6CdqHrX8e8rb3SQjM6r5Iqt68U0B3K0KwU5dls75j1TZGi0ipdI6puOFyQ70FSyxwR36p0jPRDy%2FOlLnKcLa3ldjYYSQnVwhH9jJ8xBIkXI4yRoY68SLqNGwCKCi1qiR7mUgUUzbFq0mDApKBY6d5iDG0k00H2cTl3oAH68mht09blJdRWihofpePftfwFfjC5R7TmLbS1IYNp00rJ1%2FqIgCAfI5TRrtDsAp7asNU8piGV18N5fWU12X3kMPuVPxpVANcxHMFNj5WpZb1bwzjHR6Lnwh1V4giGpbdmUuWi%2FpwMPj178MGOqUBOufbtn03Zja7inmDS01FDM784PU4m3I%2F6MIVNutR5W3L9RJB8N%2B8vMhFJJKjd3vP3vVMeGhH0Ai2QcJ0nA1ohfRJabFp0AmKsMkhjG76RK2FIRzjVJwItR6I4Q5JuRC7xD6ArZZHdD1yARNqX4kRJzmIjDsiSBO6EOtunAAk9u73hJySBg2yBYn08nxm%2F8qypmhoZIjuQs2%2BgBD%2F4FZgVlozeZkz&X-Amz-Signature=af3bf7675c3b4846f6ce0a2638391216fe623e3197ad98b218caf62adaf18bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
