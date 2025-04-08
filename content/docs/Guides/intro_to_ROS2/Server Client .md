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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2JCNSY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDS9FUOCb6nNz67%2F5lBjlTdZ80n2ELKe2GG6Qc%2FD7In5AiBY0%2FV9tRtpgTze5ur8qCeybse6Ch5o8Zrk1LszVbQuDyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMW6spxNvnVf5K5up9KtwDQHfoBoTuE3kqsLpH0nSF%2FISCmBC9V%2B3gBVGWY8Y1%2BubToJvBVp4h%2FJdkcNpDJMM0w%2FaECj3koD%2BFcJpXf%2FVPvnZZ%2FpwR1hRIneQEJY1rdFuMTAHgJYrth8iJgXpFRuvn6xXpSgj1T%2Bbh%2FNo8%2FZC6srn4nmK3KfMKQSTnblDbDrL8%2BvuWj0EsOaG%2FzBqYwJ%2FokdTHTZe8XfcqUWHatpmOXD8W715PyRA8shWfMkVh8LMs6PQdIejgaSI7JzWzpMmrdq1Np5CYBlhUGCyEgbezNKI2YV7mn5CnqMKMd0AF8ha%2FFLacsi%2FuIiHWJAZXHQgQmf3dszTe1ByC9pK0RZpF4wqZnRWqJwnlUUqPlbJQ1l9oWyWXf%2FXUNcnXMeG%2BgdWpBNzZuyzIyncQSLJuIiMFn45aZ7B%2F%2Bbbq9wvBIWmICUR%2FW3twoght%2BJt5q3QcNb2i9g1%2BUZ%2B%2BHhtK5YotEmNA5XTwNzWYgfSKfQk5D6KPMNCOJb8e9qFDRkdYVP2sR0pG03kB%2FmKIgQ3UD6SNxqkcwck47212rVFH8cXgHNaY4tomMM49tFnS6z2vg1w32xJEDabYuDWOSiQjvXdiegmSw9LthwIZowIKY3D415v5wk2wrboIZhRZFjNSHKUww9XTvwY6pgE%2F0ZU6HpzXrraERixwn%2Bdk6HDT8dnbFlT%2Bj4kIA9ZJcpxi7bOXLtrXl91C4aoBEMIZ7Fc78T%2FFWksIYBnj8SR%2Fk25clUS%2BAzv6Dlp9mxnRPcjgAhDqVUJMBOIthXMiukcW8rIpp58LUhQvaf7LHHQ40lZIB8nXNly2rkfwUpO6x3FE9TrCXxcFgv9bQR6oG4tVRktZRDxCHZv8rkB%2F%2FU6BPYT6MMkT&X-Amz-Signature=0414ed655809ffaf0ae19cdd010b81474e61a852730f7294cf5d60f50a97d95c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2JCNSY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDS9FUOCb6nNz67%2F5lBjlTdZ80n2ELKe2GG6Qc%2FD7In5AiBY0%2FV9tRtpgTze5ur8qCeybse6Ch5o8Zrk1LszVbQuDyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMW6spxNvnVf5K5up9KtwDQHfoBoTuE3kqsLpH0nSF%2FISCmBC9V%2B3gBVGWY8Y1%2BubToJvBVp4h%2FJdkcNpDJMM0w%2FaECj3koD%2BFcJpXf%2FVPvnZZ%2FpwR1hRIneQEJY1rdFuMTAHgJYrth8iJgXpFRuvn6xXpSgj1T%2Bbh%2FNo8%2FZC6srn4nmK3KfMKQSTnblDbDrL8%2BvuWj0EsOaG%2FzBqYwJ%2FokdTHTZe8XfcqUWHatpmOXD8W715PyRA8shWfMkVh8LMs6PQdIejgaSI7JzWzpMmrdq1Np5CYBlhUGCyEgbezNKI2YV7mn5CnqMKMd0AF8ha%2FFLacsi%2FuIiHWJAZXHQgQmf3dszTe1ByC9pK0RZpF4wqZnRWqJwnlUUqPlbJQ1l9oWyWXf%2FXUNcnXMeG%2BgdWpBNzZuyzIyncQSLJuIiMFn45aZ7B%2F%2Bbbq9wvBIWmICUR%2FW3twoght%2BJt5q3QcNb2i9g1%2BUZ%2B%2BHhtK5YotEmNA5XTwNzWYgfSKfQk5D6KPMNCOJb8e9qFDRkdYVP2sR0pG03kB%2FmKIgQ3UD6SNxqkcwck47212rVFH8cXgHNaY4tomMM49tFnS6z2vg1w32xJEDabYuDWOSiQjvXdiegmSw9LthwIZowIKY3D415v5wk2wrboIZhRZFjNSHKUww9XTvwY6pgE%2F0ZU6HpzXrraERixwn%2Bdk6HDT8dnbFlT%2Bj4kIA9ZJcpxi7bOXLtrXl91C4aoBEMIZ7Fc78T%2FFWksIYBnj8SR%2Fk25clUS%2BAzv6Dlp9mxnRPcjgAhDqVUJMBOIthXMiukcW8rIpp58LUhQvaf7LHHQ40lZIB8nXNly2rkfwUpO6x3FE9TrCXxcFgv9bQR6oG4tVRktZRDxCHZv8rkB%2F%2FU6BPYT6MMkT&X-Amz-Signature=3d8a5c5a75eba074509535f2b2148854b80fb0d55c87f44879704eecc44564c8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2JCNSY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDS9FUOCb6nNz67%2F5lBjlTdZ80n2ELKe2GG6Qc%2FD7In5AiBY0%2FV9tRtpgTze5ur8qCeybse6Ch5o8Zrk1LszVbQuDyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMW6spxNvnVf5K5up9KtwDQHfoBoTuE3kqsLpH0nSF%2FISCmBC9V%2B3gBVGWY8Y1%2BubToJvBVp4h%2FJdkcNpDJMM0w%2FaECj3koD%2BFcJpXf%2FVPvnZZ%2FpwR1hRIneQEJY1rdFuMTAHgJYrth8iJgXpFRuvn6xXpSgj1T%2Bbh%2FNo8%2FZC6srn4nmK3KfMKQSTnblDbDrL8%2BvuWj0EsOaG%2FzBqYwJ%2FokdTHTZe8XfcqUWHatpmOXD8W715PyRA8shWfMkVh8LMs6PQdIejgaSI7JzWzpMmrdq1Np5CYBlhUGCyEgbezNKI2YV7mn5CnqMKMd0AF8ha%2FFLacsi%2FuIiHWJAZXHQgQmf3dszTe1ByC9pK0RZpF4wqZnRWqJwnlUUqPlbJQ1l9oWyWXf%2FXUNcnXMeG%2BgdWpBNzZuyzIyncQSLJuIiMFn45aZ7B%2F%2Bbbq9wvBIWmICUR%2FW3twoght%2BJt5q3QcNb2i9g1%2BUZ%2B%2BHhtK5YotEmNA5XTwNzWYgfSKfQk5D6KPMNCOJb8e9qFDRkdYVP2sR0pG03kB%2FmKIgQ3UD6SNxqkcwck47212rVFH8cXgHNaY4tomMM49tFnS6z2vg1w32xJEDabYuDWOSiQjvXdiegmSw9LthwIZowIKY3D415v5wk2wrboIZhRZFjNSHKUww9XTvwY6pgE%2F0ZU6HpzXrraERixwn%2Bdk6HDT8dnbFlT%2Bj4kIA9ZJcpxi7bOXLtrXl91C4aoBEMIZ7Fc78T%2FFWksIYBnj8SR%2Fk25clUS%2BAzv6Dlp9mxnRPcjgAhDqVUJMBOIthXMiukcW8rIpp58LUhQvaf7LHHQ40lZIB8nXNly2rkfwUpO6x3FE9TrCXxcFgv9bQR6oG4tVRktZRDxCHZv8rkB%2F%2FU6BPYT6MMkT&X-Amz-Signature=7fb0ec4e69734ea87de6482a7e65d34c76b4bfec16c590a412dade2531847a10&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2JCNSY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDS9FUOCb6nNz67%2F5lBjlTdZ80n2ELKe2GG6Qc%2FD7In5AiBY0%2FV9tRtpgTze5ur8qCeybse6Ch5o8Zrk1LszVbQuDyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMW6spxNvnVf5K5up9KtwDQHfoBoTuE3kqsLpH0nSF%2FISCmBC9V%2B3gBVGWY8Y1%2BubToJvBVp4h%2FJdkcNpDJMM0w%2FaECj3koD%2BFcJpXf%2FVPvnZZ%2FpwR1hRIneQEJY1rdFuMTAHgJYrth8iJgXpFRuvn6xXpSgj1T%2Bbh%2FNo8%2FZC6srn4nmK3KfMKQSTnblDbDrL8%2BvuWj0EsOaG%2FzBqYwJ%2FokdTHTZe8XfcqUWHatpmOXD8W715PyRA8shWfMkVh8LMs6PQdIejgaSI7JzWzpMmrdq1Np5CYBlhUGCyEgbezNKI2YV7mn5CnqMKMd0AF8ha%2FFLacsi%2FuIiHWJAZXHQgQmf3dszTe1ByC9pK0RZpF4wqZnRWqJwnlUUqPlbJQ1l9oWyWXf%2FXUNcnXMeG%2BgdWpBNzZuyzIyncQSLJuIiMFn45aZ7B%2F%2Bbbq9wvBIWmICUR%2FW3twoght%2BJt5q3QcNb2i9g1%2BUZ%2B%2BHhtK5YotEmNA5XTwNzWYgfSKfQk5D6KPMNCOJb8e9qFDRkdYVP2sR0pG03kB%2FmKIgQ3UD6SNxqkcwck47212rVFH8cXgHNaY4tomMM49tFnS6z2vg1w32xJEDabYuDWOSiQjvXdiegmSw9LthwIZowIKY3D415v5wk2wrboIZhRZFjNSHKUww9XTvwY6pgE%2F0ZU6HpzXrraERixwn%2Bdk6HDT8dnbFlT%2Bj4kIA9ZJcpxi7bOXLtrXl91C4aoBEMIZ7Fc78T%2FFWksIYBnj8SR%2Fk25clUS%2BAzv6Dlp9mxnRPcjgAhDqVUJMBOIthXMiukcW8rIpp58LUhQvaf7LHHQ40lZIB8nXNly2rkfwUpO6x3FE9TrCXxcFgv9bQR6oG4tVRktZRDxCHZv8rkB%2F%2FU6BPYT6MMkT&X-Amz-Signature=221f13891d65f9272bf70332d8e9590fd8950a0a8a84636735376519ff2f8d92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2JCNSY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDS9FUOCb6nNz67%2F5lBjlTdZ80n2ELKe2GG6Qc%2FD7In5AiBY0%2FV9tRtpgTze5ur8qCeybse6Ch5o8Zrk1LszVbQuDyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMW6spxNvnVf5K5up9KtwDQHfoBoTuE3kqsLpH0nSF%2FISCmBC9V%2B3gBVGWY8Y1%2BubToJvBVp4h%2FJdkcNpDJMM0w%2FaECj3koD%2BFcJpXf%2FVPvnZZ%2FpwR1hRIneQEJY1rdFuMTAHgJYrth8iJgXpFRuvn6xXpSgj1T%2Bbh%2FNo8%2FZC6srn4nmK3KfMKQSTnblDbDrL8%2BvuWj0EsOaG%2FzBqYwJ%2FokdTHTZe8XfcqUWHatpmOXD8W715PyRA8shWfMkVh8LMs6PQdIejgaSI7JzWzpMmrdq1Np5CYBlhUGCyEgbezNKI2YV7mn5CnqMKMd0AF8ha%2FFLacsi%2FuIiHWJAZXHQgQmf3dszTe1ByC9pK0RZpF4wqZnRWqJwnlUUqPlbJQ1l9oWyWXf%2FXUNcnXMeG%2BgdWpBNzZuyzIyncQSLJuIiMFn45aZ7B%2F%2Bbbq9wvBIWmICUR%2FW3twoght%2BJt5q3QcNb2i9g1%2BUZ%2B%2BHhtK5YotEmNA5XTwNzWYgfSKfQk5D6KPMNCOJb8e9qFDRkdYVP2sR0pG03kB%2FmKIgQ3UD6SNxqkcwck47212rVFH8cXgHNaY4tomMM49tFnS6z2vg1w32xJEDabYuDWOSiQjvXdiegmSw9LthwIZowIKY3D415v5wk2wrboIZhRZFjNSHKUww9XTvwY6pgE%2F0ZU6HpzXrraERixwn%2Bdk6HDT8dnbFlT%2Bj4kIA9ZJcpxi7bOXLtrXl91C4aoBEMIZ7Fc78T%2FFWksIYBnj8SR%2Fk25clUS%2BAzv6Dlp9mxnRPcjgAhDqVUJMBOIthXMiukcW8rIpp58LUhQvaf7LHHQ40lZIB8nXNly2rkfwUpO6x3FE9TrCXxcFgv9bQR6oG4tVRktZRDxCHZv8rkB%2F%2FU6BPYT6MMkT&X-Amz-Signature=5647dfb666427dd5f08bf392993d69c1113dd934c1b4a8d27dda7548e41ca2b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
