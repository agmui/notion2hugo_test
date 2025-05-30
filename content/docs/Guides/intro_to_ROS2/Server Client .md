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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNX3CQ6%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHLTFjSHxht8nYB7HZB2Er%2FpJiqanMIt5wiQMPsxHIYAiBQ2dE5ObQYG8y6rryH72ENMNwLDBQEWwFG4%2FlvKJ0IICqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTC1sg0xHRaXJY9D7KtwDEhG0M9NFS%2BSNxWCae%2BVVn2XTUtVqOgwSh5mEqOXNCqV9nPLv2xLGTBCpNDFD4VBqdY0bmtYeLl6%2Fv7rpZ5buW7aLh8DkPmyhc1pNmv1rUMO8DdhZjrp5ffZM3CjCHHOPYrLTXxbSbQr8dwE4lKUuTnoxBIj%2Bdpf2Hwofc3gZo0rjKJ9W5RYIJrQKe6IwnwcsFNyEzP2HjsF6VvSvHPDNvC%2FM1RS3f3qjvBcKKEUzt9GwkxNrDQ8y2W9JSpCX3noLYhMtdVM0LNzu0PNnaByIyFAEV5%2F53eNQseMZDepkhdzRXdwuSgjdYeKQ0aosI%2BDB07tQMs2OBjh5CUB3f6L52L98vK0hktOMKngAVb5ciGcHWZS%2FdkuuR9udiaiB4HliTFuC88JRMdPvGCrG6MCnZT%2BrBMjymAO8c8QRNdhoAgBEFX3PDSdmuNNJpKJnlABAGvLt3cafj5I6fWwT6KumP3HQjKSMWF7fO9PgAyJE1uZc5Vrx0ZBd9l7HM9i4mFJb54qfZZGd2A5Gma0u6gJhbARUL3KxSB5QxsDKllz4HT%2Fq6mq2NB67e7ipNGUXSYiOzOHPFNqsHn41NTtNKvuzo3LhiszAv9MDjHeTMI0wY0D1L0nqXr3%2BdoZyXZ4wlfLowQY6pgEQ4RASXK73k0OuWNF9Dm42fQBJFHrg8jjeTRUVWHduGaf0cm9JFuwf3ojJHlos8v7r%2B6LCOMNC7t8fOx9ABHSjl7kGmxyW61h6lxLzLm3%2FGlc8yZBos0A7YT3T7eZGLXkTOzRYCNmmYNQY85tGqMKTSr9deDRlb8nJJPl2PRtJ3w%2Fy%2F0U4CGmoAoaCNg%2BEbb0qnV%2B6lhD5pvzvK66XpLlBOlggnlg1&X-Amz-Signature=04a46e1445c804723ba07e25cc10a92865ea12953ca2d6196bd9d5a353cb4d70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNX3CQ6%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHLTFjSHxht8nYB7HZB2Er%2FpJiqanMIt5wiQMPsxHIYAiBQ2dE5ObQYG8y6rryH72ENMNwLDBQEWwFG4%2FlvKJ0IICqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTC1sg0xHRaXJY9D7KtwDEhG0M9NFS%2BSNxWCae%2BVVn2XTUtVqOgwSh5mEqOXNCqV9nPLv2xLGTBCpNDFD4VBqdY0bmtYeLl6%2Fv7rpZ5buW7aLh8DkPmyhc1pNmv1rUMO8DdhZjrp5ffZM3CjCHHOPYrLTXxbSbQr8dwE4lKUuTnoxBIj%2Bdpf2Hwofc3gZo0rjKJ9W5RYIJrQKe6IwnwcsFNyEzP2HjsF6VvSvHPDNvC%2FM1RS3f3qjvBcKKEUzt9GwkxNrDQ8y2W9JSpCX3noLYhMtdVM0LNzu0PNnaByIyFAEV5%2F53eNQseMZDepkhdzRXdwuSgjdYeKQ0aosI%2BDB07tQMs2OBjh5CUB3f6L52L98vK0hktOMKngAVb5ciGcHWZS%2FdkuuR9udiaiB4HliTFuC88JRMdPvGCrG6MCnZT%2BrBMjymAO8c8QRNdhoAgBEFX3PDSdmuNNJpKJnlABAGvLt3cafj5I6fWwT6KumP3HQjKSMWF7fO9PgAyJE1uZc5Vrx0ZBd9l7HM9i4mFJb54qfZZGd2A5Gma0u6gJhbARUL3KxSB5QxsDKllz4HT%2Fq6mq2NB67e7ipNGUXSYiOzOHPFNqsHn41NTtNKvuzo3LhiszAv9MDjHeTMI0wY0D1L0nqXr3%2BdoZyXZ4wlfLowQY6pgEQ4RASXK73k0OuWNF9Dm42fQBJFHrg8jjeTRUVWHduGaf0cm9JFuwf3ojJHlos8v7r%2B6LCOMNC7t8fOx9ABHSjl7kGmxyW61h6lxLzLm3%2FGlc8yZBos0A7YT3T7eZGLXkTOzRYCNmmYNQY85tGqMKTSr9deDRlb8nJJPl2PRtJ3w%2Fy%2F0U4CGmoAoaCNg%2BEbb0qnV%2B6lhD5pvzvK66XpLlBOlggnlg1&X-Amz-Signature=fe46636509474158ba6764fe6ecaeed596f4534f4b24baab767574b853718e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNX3CQ6%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHLTFjSHxht8nYB7HZB2Er%2FpJiqanMIt5wiQMPsxHIYAiBQ2dE5ObQYG8y6rryH72ENMNwLDBQEWwFG4%2FlvKJ0IICqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTC1sg0xHRaXJY9D7KtwDEhG0M9NFS%2BSNxWCae%2BVVn2XTUtVqOgwSh5mEqOXNCqV9nPLv2xLGTBCpNDFD4VBqdY0bmtYeLl6%2Fv7rpZ5buW7aLh8DkPmyhc1pNmv1rUMO8DdhZjrp5ffZM3CjCHHOPYrLTXxbSbQr8dwE4lKUuTnoxBIj%2Bdpf2Hwofc3gZo0rjKJ9W5RYIJrQKe6IwnwcsFNyEzP2HjsF6VvSvHPDNvC%2FM1RS3f3qjvBcKKEUzt9GwkxNrDQ8y2W9JSpCX3noLYhMtdVM0LNzu0PNnaByIyFAEV5%2F53eNQseMZDepkhdzRXdwuSgjdYeKQ0aosI%2BDB07tQMs2OBjh5CUB3f6L52L98vK0hktOMKngAVb5ciGcHWZS%2FdkuuR9udiaiB4HliTFuC88JRMdPvGCrG6MCnZT%2BrBMjymAO8c8QRNdhoAgBEFX3PDSdmuNNJpKJnlABAGvLt3cafj5I6fWwT6KumP3HQjKSMWF7fO9PgAyJE1uZc5Vrx0ZBd9l7HM9i4mFJb54qfZZGd2A5Gma0u6gJhbARUL3KxSB5QxsDKllz4HT%2Fq6mq2NB67e7ipNGUXSYiOzOHPFNqsHn41NTtNKvuzo3LhiszAv9MDjHeTMI0wY0D1L0nqXr3%2BdoZyXZ4wlfLowQY6pgEQ4RASXK73k0OuWNF9Dm42fQBJFHrg8jjeTRUVWHduGaf0cm9JFuwf3ojJHlos8v7r%2B6LCOMNC7t8fOx9ABHSjl7kGmxyW61h6lxLzLm3%2FGlc8yZBos0A7YT3T7eZGLXkTOzRYCNmmYNQY85tGqMKTSr9deDRlb8nJJPl2PRtJ3w%2Fy%2F0U4CGmoAoaCNg%2BEbb0qnV%2B6lhD5pvzvK66XpLlBOlggnlg1&X-Amz-Signature=bf4c6d154de1f7b608a8e6e833cfa08a3baa9bba59231fdce9aecdad782c2af0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNX3CQ6%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHLTFjSHxht8nYB7HZB2Er%2FpJiqanMIt5wiQMPsxHIYAiBQ2dE5ObQYG8y6rryH72ENMNwLDBQEWwFG4%2FlvKJ0IICqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTC1sg0xHRaXJY9D7KtwDEhG0M9NFS%2BSNxWCae%2BVVn2XTUtVqOgwSh5mEqOXNCqV9nPLv2xLGTBCpNDFD4VBqdY0bmtYeLl6%2Fv7rpZ5buW7aLh8DkPmyhc1pNmv1rUMO8DdhZjrp5ffZM3CjCHHOPYrLTXxbSbQr8dwE4lKUuTnoxBIj%2Bdpf2Hwofc3gZo0rjKJ9W5RYIJrQKe6IwnwcsFNyEzP2HjsF6VvSvHPDNvC%2FM1RS3f3qjvBcKKEUzt9GwkxNrDQ8y2W9JSpCX3noLYhMtdVM0LNzu0PNnaByIyFAEV5%2F53eNQseMZDepkhdzRXdwuSgjdYeKQ0aosI%2BDB07tQMs2OBjh5CUB3f6L52L98vK0hktOMKngAVb5ciGcHWZS%2FdkuuR9udiaiB4HliTFuC88JRMdPvGCrG6MCnZT%2BrBMjymAO8c8QRNdhoAgBEFX3PDSdmuNNJpKJnlABAGvLt3cafj5I6fWwT6KumP3HQjKSMWF7fO9PgAyJE1uZc5Vrx0ZBd9l7HM9i4mFJb54qfZZGd2A5Gma0u6gJhbARUL3KxSB5QxsDKllz4HT%2Fq6mq2NB67e7ipNGUXSYiOzOHPFNqsHn41NTtNKvuzo3LhiszAv9MDjHeTMI0wY0D1L0nqXr3%2BdoZyXZ4wlfLowQY6pgEQ4RASXK73k0OuWNF9Dm42fQBJFHrg8jjeTRUVWHduGaf0cm9JFuwf3ojJHlos8v7r%2B6LCOMNC7t8fOx9ABHSjl7kGmxyW61h6lxLzLm3%2FGlc8yZBos0A7YT3T7eZGLXkTOzRYCNmmYNQY85tGqMKTSr9deDRlb8nJJPl2PRtJ3w%2Fy%2F0U4CGmoAoaCNg%2BEbb0qnV%2B6lhD5pvzvK66XpLlBOlggnlg1&X-Amz-Signature=19f49fe6b572b7f9cef3ff6e1c0a860e80fe093d10ea65387d0149f413766131&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNX3CQ6%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHLTFjSHxht8nYB7HZB2Er%2FpJiqanMIt5wiQMPsxHIYAiBQ2dE5ObQYG8y6rryH72ENMNwLDBQEWwFG4%2FlvKJ0IICqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTC1sg0xHRaXJY9D7KtwDEhG0M9NFS%2BSNxWCae%2BVVn2XTUtVqOgwSh5mEqOXNCqV9nPLv2xLGTBCpNDFD4VBqdY0bmtYeLl6%2Fv7rpZ5buW7aLh8DkPmyhc1pNmv1rUMO8DdhZjrp5ffZM3CjCHHOPYrLTXxbSbQr8dwE4lKUuTnoxBIj%2Bdpf2Hwofc3gZo0rjKJ9W5RYIJrQKe6IwnwcsFNyEzP2HjsF6VvSvHPDNvC%2FM1RS3f3qjvBcKKEUzt9GwkxNrDQ8y2W9JSpCX3noLYhMtdVM0LNzu0PNnaByIyFAEV5%2F53eNQseMZDepkhdzRXdwuSgjdYeKQ0aosI%2BDB07tQMs2OBjh5CUB3f6L52L98vK0hktOMKngAVb5ciGcHWZS%2FdkuuR9udiaiB4HliTFuC88JRMdPvGCrG6MCnZT%2BrBMjymAO8c8QRNdhoAgBEFX3PDSdmuNNJpKJnlABAGvLt3cafj5I6fWwT6KumP3HQjKSMWF7fO9PgAyJE1uZc5Vrx0ZBd9l7HM9i4mFJb54qfZZGd2A5Gma0u6gJhbARUL3KxSB5QxsDKllz4HT%2Fq6mq2NB67e7ipNGUXSYiOzOHPFNqsHn41NTtNKvuzo3LhiszAv9MDjHeTMI0wY0D1L0nqXr3%2BdoZyXZ4wlfLowQY6pgEQ4RASXK73k0OuWNF9Dm42fQBJFHrg8jjeTRUVWHduGaf0cm9JFuwf3ojJHlos8v7r%2B6LCOMNC7t8fOx9ABHSjl7kGmxyW61h6lxLzLm3%2FGlc8yZBos0A7YT3T7eZGLXkTOzRYCNmmYNQY85tGqMKTSr9deDRlb8nJJPl2PRtJ3w%2Fy%2F0U4CGmoAoaCNg%2BEbb0qnV%2B6lhD5pvzvK66XpLlBOlggnlg1&X-Amz-Signature=d0d8cf7e3faffe04b1bbb5b54782933665e50b2dfe8ee1ce008a8934d991ebfb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
