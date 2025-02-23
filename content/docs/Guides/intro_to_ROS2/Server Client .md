---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDHBNAU%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqHEUDGxwL3uDzxELetYRwB%2FWDhO8JOndgvc2qVwXFeQIhAJE49XgHV6avKm3M43z%2F0AH9myAqpuUzL8rb1k6zeFMVKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmSVHgb9YgwIPu2AUq3AM4w%2FcliiccDELA8vkLRL0eP7zqW7D0MZbIpeDx1stiOsj8dltX%2FvEJ%2F%2FK3iojjIe%2F1yu2U8hJF3n2PZ0VFi0oUM1ZMJYDbFHw%2BzzZvvphLjKhwANXYPnteeKar2EPnY6Xzfyv6RKGCIHCmYc%2FHbJtqt4PrM6ybzf4OJWkAF8Jx45C75GHi4qrknrKYT91Vy9%2FPipOSePU1%2FxT3Ikd7A%2FG0Dpvzalq1uqH59zZ9dG3tWkoDXeHKQrLuNaO403k7DkC13VSIOVhHEPnrBcWLQ115zC9ib9dqSc%2FfjCXXE1n4q6CeMg9Bh%2FM15PMpHX3qVATcFYYl8C9%2FCXWi2Hm%2BzyESrMtFM%2BUxk00WAgTI9%2F4IFgztUQq6MlRO4vZ6lyyQobtO0EFgyldGttxr39V%2BxDQIIMgjplxq9XTvB2XaS7y5jVI6uh4TuL2%2FgexB0Af7ltr9POPVCbys0Mb73JoA1CWY2oi5seRqBL69m0CyzHX1RUymYCukaQgn%2FM%2BGXNCfY7Fx2jbYMOwRPc7PmBZ7RXtVMIN8royCLH%2FF6RPPPwSZVTjvXMhfsu1VAnEmwHuz%2FPnxivNmO0DjSjAaCACbRvjebQyuls9nAxI18oztVrwwEOagchhrlL%2BEOivRQjD2yeq9BjqkAX4BBK5JuYdPpbKm3FkNKgs8ftx5gGhKh3uxIkI1jm%2BhR%2FFOnPpX2zSXKPrpdQmdPGhKplcks51CuuJcOu7Iw4DiHP%2Bl8HgyPhGhhWSQDrUchr8Yyt%2FQZTAUnOeGZEcwErHGQunxOtp1cSwt0M1V4DZaK9WW9rQU6ols3v6I0mA7DBwai5Euhd%2FECHugy5gVC4725dTzhOKp3%2Bri%2B1e2RRdMuOcX&X-Amz-Signature=feab866b1692b977d827a3317c1386e1c675883df26ca406d162f0f1e0fdfc01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDHBNAU%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqHEUDGxwL3uDzxELetYRwB%2FWDhO8JOndgvc2qVwXFeQIhAJE49XgHV6avKm3M43z%2F0AH9myAqpuUzL8rb1k6zeFMVKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmSVHgb9YgwIPu2AUq3AM4w%2FcliiccDELA8vkLRL0eP7zqW7D0MZbIpeDx1stiOsj8dltX%2FvEJ%2F%2FK3iojjIe%2F1yu2U8hJF3n2PZ0VFi0oUM1ZMJYDbFHw%2BzzZvvphLjKhwANXYPnteeKar2EPnY6Xzfyv6RKGCIHCmYc%2FHbJtqt4PrM6ybzf4OJWkAF8Jx45C75GHi4qrknrKYT91Vy9%2FPipOSePU1%2FxT3Ikd7A%2FG0Dpvzalq1uqH59zZ9dG3tWkoDXeHKQrLuNaO403k7DkC13VSIOVhHEPnrBcWLQ115zC9ib9dqSc%2FfjCXXE1n4q6CeMg9Bh%2FM15PMpHX3qVATcFYYl8C9%2FCXWi2Hm%2BzyESrMtFM%2BUxk00WAgTI9%2F4IFgztUQq6MlRO4vZ6lyyQobtO0EFgyldGttxr39V%2BxDQIIMgjplxq9XTvB2XaS7y5jVI6uh4TuL2%2FgexB0Af7ltr9POPVCbys0Mb73JoA1CWY2oi5seRqBL69m0CyzHX1RUymYCukaQgn%2FM%2BGXNCfY7Fx2jbYMOwRPc7PmBZ7RXtVMIN8royCLH%2FF6RPPPwSZVTjvXMhfsu1VAnEmwHuz%2FPnxivNmO0DjSjAaCACbRvjebQyuls9nAxI18oztVrwwEOagchhrlL%2BEOivRQjD2yeq9BjqkAX4BBK5JuYdPpbKm3FkNKgs8ftx5gGhKh3uxIkI1jm%2BhR%2FFOnPpX2zSXKPrpdQmdPGhKplcks51CuuJcOu7Iw4DiHP%2Bl8HgyPhGhhWSQDrUchr8Yyt%2FQZTAUnOeGZEcwErHGQunxOtp1cSwt0M1V4DZaK9WW9rQU6ols3v6I0mA7DBwai5Euhd%2FECHugy5gVC4725dTzhOKp3%2Bri%2B1e2RRdMuOcX&X-Amz-Signature=d729d4042b5663eaf197d5cea9a321abce7aa940f129e8fc36896d2a829885a2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDHBNAU%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqHEUDGxwL3uDzxELetYRwB%2FWDhO8JOndgvc2qVwXFeQIhAJE49XgHV6avKm3M43z%2F0AH9myAqpuUzL8rb1k6zeFMVKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmSVHgb9YgwIPu2AUq3AM4w%2FcliiccDELA8vkLRL0eP7zqW7D0MZbIpeDx1stiOsj8dltX%2FvEJ%2F%2FK3iojjIe%2F1yu2U8hJF3n2PZ0VFi0oUM1ZMJYDbFHw%2BzzZvvphLjKhwANXYPnteeKar2EPnY6Xzfyv6RKGCIHCmYc%2FHbJtqt4PrM6ybzf4OJWkAF8Jx45C75GHi4qrknrKYT91Vy9%2FPipOSePU1%2FxT3Ikd7A%2FG0Dpvzalq1uqH59zZ9dG3tWkoDXeHKQrLuNaO403k7DkC13VSIOVhHEPnrBcWLQ115zC9ib9dqSc%2FfjCXXE1n4q6CeMg9Bh%2FM15PMpHX3qVATcFYYl8C9%2FCXWi2Hm%2BzyESrMtFM%2BUxk00WAgTI9%2F4IFgztUQq6MlRO4vZ6lyyQobtO0EFgyldGttxr39V%2BxDQIIMgjplxq9XTvB2XaS7y5jVI6uh4TuL2%2FgexB0Af7ltr9POPVCbys0Mb73JoA1CWY2oi5seRqBL69m0CyzHX1RUymYCukaQgn%2FM%2BGXNCfY7Fx2jbYMOwRPc7PmBZ7RXtVMIN8royCLH%2FF6RPPPwSZVTjvXMhfsu1VAnEmwHuz%2FPnxivNmO0DjSjAaCACbRvjebQyuls9nAxI18oztVrwwEOagchhrlL%2BEOivRQjD2yeq9BjqkAX4BBK5JuYdPpbKm3FkNKgs8ftx5gGhKh3uxIkI1jm%2BhR%2FFOnPpX2zSXKPrpdQmdPGhKplcks51CuuJcOu7Iw4DiHP%2Bl8HgyPhGhhWSQDrUchr8Yyt%2FQZTAUnOeGZEcwErHGQunxOtp1cSwt0M1V4DZaK9WW9rQU6ols3v6I0mA7DBwai5Euhd%2FECHugy5gVC4725dTzhOKp3%2Bri%2B1e2RRdMuOcX&X-Amz-Signature=90c0b2d7e48ff8cdac16df46470305d64e0074bddd9b4774aa6162205ab88306&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDHBNAU%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqHEUDGxwL3uDzxELetYRwB%2FWDhO8JOndgvc2qVwXFeQIhAJE49XgHV6avKm3M43z%2F0AH9myAqpuUzL8rb1k6zeFMVKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmSVHgb9YgwIPu2AUq3AM4w%2FcliiccDELA8vkLRL0eP7zqW7D0MZbIpeDx1stiOsj8dltX%2FvEJ%2F%2FK3iojjIe%2F1yu2U8hJF3n2PZ0VFi0oUM1ZMJYDbFHw%2BzzZvvphLjKhwANXYPnteeKar2EPnY6Xzfyv6RKGCIHCmYc%2FHbJtqt4PrM6ybzf4OJWkAF8Jx45C75GHi4qrknrKYT91Vy9%2FPipOSePU1%2FxT3Ikd7A%2FG0Dpvzalq1uqH59zZ9dG3tWkoDXeHKQrLuNaO403k7DkC13VSIOVhHEPnrBcWLQ115zC9ib9dqSc%2FfjCXXE1n4q6CeMg9Bh%2FM15PMpHX3qVATcFYYl8C9%2FCXWi2Hm%2BzyESrMtFM%2BUxk00WAgTI9%2F4IFgztUQq6MlRO4vZ6lyyQobtO0EFgyldGttxr39V%2BxDQIIMgjplxq9XTvB2XaS7y5jVI6uh4TuL2%2FgexB0Af7ltr9POPVCbys0Mb73JoA1CWY2oi5seRqBL69m0CyzHX1RUymYCukaQgn%2FM%2BGXNCfY7Fx2jbYMOwRPc7PmBZ7RXtVMIN8royCLH%2FF6RPPPwSZVTjvXMhfsu1VAnEmwHuz%2FPnxivNmO0DjSjAaCACbRvjebQyuls9nAxI18oztVrwwEOagchhrlL%2BEOivRQjD2yeq9BjqkAX4BBK5JuYdPpbKm3FkNKgs8ftx5gGhKh3uxIkI1jm%2BhR%2FFOnPpX2zSXKPrpdQmdPGhKplcks51CuuJcOu7Iw4DiHP%2Bl8HgyPhGhhWSQDrUchr8Yyt%2FQZTAUnOeGZEcwErHGQunxOtp1cSwt0M1V4DZaK9WW9rQU6ols3v6I0mA7DBwai5Euhd%2FECHugy5gVC4725dTzhOKp3%2Bri%2B1e2RRdMuOcX&X-Amz-Signature=3350c32f6d92b4fe9c4d90e8948241b5dc6d2504f7524ce9e78d21067cd46b80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDHBNAU%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqHEUDGxwL3uDzxELetYRwB%2FWDhO8JOndgvc2qVwXFeQIhAJE49XgHV6avKm3M43z%2F0AH9myAqpuUzL8rb1k6zeFMVKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmSVHgb9YgwIPu2AUq3AM4w%2FcliiccDELA8vkLRL0eP7zqW7D0MZbIpeDx1stiOsj8dltX%2FvEJ%2F%2FK3iojjIe%2F1yu2U8hJF3n2PZ0VFi0oUM1ZMJYDbFHw%2BzzZvvphLjKhwANXYPnteeKar2EPnY6Xzfyv6RKGCIHCmYc%2FHbJtqt4PrM6ybzf4OJWkAF8Jx45C75GHi4qrknrKYT91Vy9%2FPipOSePU1%2FxT3Ikd7A%2FG0Dpvzalq1uqH59zZ9dG3tWkoDXeHKQrLuNaO403k7DkC13VSIOVhHEPnrBcWLQ115zC9ib9dqSc%2FfjCXXE1n4q6CeMg9Bh%2FM15PMpHX3qVATcFYYl8C9%2FCXWi2Hm%2BzyESrMtFM%2BUxk00WAgTI9%2F4IFgztUQq6MlRO4vZ6lyyQobtO0EFgyldGttxr39V%2BxDQIIMgjplxq9XTvB2XaS7y5jVI6uh4TuL2%2FgexB0Af7ltr9POPVCbys0Mb73JoA1CWY2oi5seRqBL69m0CyzHX1RUymYCukaQgn%2FM%2BGXNCfY7Fx2jbYMOwRPc7PmBZ7RXtVMIN8royCLH%2FF6RPPPwSZVTjvXMhfsu1VAnEmwHuz%2FPnxivNmO0DjSjAaCACbRvjebQyuls9nAxI18oztVrwwEOagchhrlL%2BEOivRQjD2yeq9BjqkAX4BBK5JuYdPpbKm3FkNKgs8ftx5gGhKh3uxIkI1jm%2BhR%2FFOnPpX2zSXKPrpdQmdPGhKplcks51CuuJcOu7Iw4DiHP%2Bl8HgyPhGhhWSQDrUchr8Yyt%2FQZTAUnOeGZEcwErHGQunxOtp1cSwt0M1V4DZaK9WW9rQU6ols3v6I0mA7DBwai5Euhd%2FECHugy5gVC4725dTzhOKp3%2Bri%2B1e2RRdMuOcX&X-Amz-Signature=18846248738f609de9f0542e6921bdd03fb87f3bfde7d3268481c3e0b4a4f5da&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
