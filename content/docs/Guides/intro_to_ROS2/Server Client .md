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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AV3XELA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH5N6ZFtRZDeblGKtDoGOc%2F5B0TcYYOSwbX%2FLyBHaCSzAiEA%2BKg6QnpBHCPKTzwpwb6e9rUjC5Uv%2Bzg5TATzMXi6lKQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGxz8XLtE%2B%2FaEIhlGircA8o09unU38kgkvZti%2FGa2pJdZMvSEF5sRT%2B167fo42OKBb%2FcACLa059tu5Wow1K7Hu%2B23fWDjFio6lPthTTPmjeL83qhDM1LIZ0oTwqm%2B99VYby1KUOIZMBlSsUON8bnI8DB%2BMF398em%2FWhwIGEXjJu5m6MMv8IPIu0j7uSka4mbQM6Es5dFRAyqgFwlzkeGTwMUd%2F9v6l2DEmWRp8n%2BTiRnaKW2k7fhWLF7DMyFi%2Be005Yi%2F4tymx%2FApCUdU3TmA5TNOi5j4kzs9NQXNYwMiso2YRt5YkpfN%2F%2BDwPEfGvIJx7Bne77gxg%2BpSWD8ceixo5eoBJ76F%2BAb9uCHajX7t31TTnwU9ULut4hXu20%2BR4fT8n3gEoVNNqF6NxP8iD1gw7htnKm%2FGVO6WkAKi4bJygCW1QazYxZPsbePZLGYEYg9wTsKucsuXbmvkZW%2BcE3zFUq0%2Bt9TsM0w0FB4CYYgvb6dK5cmY%2BZQogYKJdXxwJUGAI6OOyfc7zlvSQm49prxHQbV%2B5o5U5%2BJdRn5CobD6J%2B5ae9af3K2N1bQAjj9KQNqcuV6MKRAF8wigZm9kUerOJdJaAnmavVsB%2BKLA%2FObA0ewfQ8SQSogb9reMraTAWnrhwrTpQ2JQ3gFpbg3MKbvsL4GOqUBtsvwsAjQZqEmVZuHMRQyqY3To376FVyu3oF5jmi2BxY4kqgx0BmBz0kKcdGaa2RukVj%2BvXhFa7G%2FD7OtTR8nE6R1Fryd%2FjtIn87tv%2BYYM2EjpgoAGt0hSXyoOV8NVP%2BkltEA%2Fj4bSjn52d0JUZ0mYCgXgW7MX%2FOLlIO0S96wumv08n7oU8wx7JTO%2FOz3V6BHs73rq%2F1BrNbAUpRIv%2BJvfoaoRH5t&X-Amz-Signature=ba0c0ad27ebcbd81c9c7b7af24f20aa2bb26d6bebbbc07e3b49893b6d4e9a8e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AV3XELA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH5N6ZFtRZDeblGKtDoGOc%2F5B0TcYYOSwbX%2FLyBHaCSzAiEA%2BKg6QnpBHCPKTzwpwb6e9rUjC5Uv%2Bzg5TATzMXi6lKQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGxz8XLtE%2B%2FaEIhlGircA8o09unU38kgkvZti%2FGa2pJdZMvSEF5sRT%2B167fo42OKBb%2FcACLa059tu5Wow1K7Hu%2B23fWDjFio6lPthTTPmjeL83qhDM1LIZ0oTwqm%2B99VYby1KUOIZMBlSsUON8bnI8DB%2BMF398em%2FWhwIGEXjJu5m6MMv8IPIu0j7uSka4mbQM6Es5dFRAyqgFwlzkeGTwMUd%2F9v6l2DEmWRp8n%2BTiRnaKW2k7fhWLF7DMyFi%2Be005Yi%2F4tymx%2FApCUdU3TmA5TNOi5j4kzs9NQXNYwMiso2YRt5YkpfN%2F%2BDwPEfGvIJx7Bne77gxg%2BpSWD8ceixo5eoBJ76F%2BAb9uCHajX7t31TTnwU9ULut4hXu20%2BR4fT8n3gEoVNNqF6NxP8iD1gw7htnKm%2FGVO6WkAKi4bJygCW1QazYxZPsbePZLGYEYg9wTsKucsuXbmvkZW%2BcE3zFUq0%2Bt9TsM0w0FB4CYYgvb6dK5cmY%2BZQogYKJdXxwJUGAI6OOyfc7zlvSQm49prxHQbV%2B5o5U5%2BJdRn5CobD6J%2B5ae9af3K2N1bQAjj9KQNqcuV6MKRAF8wigZm9kUerOJdJaAnmavVsB%2BKLA%2FObA0ewfQ8SQSogb9reMraTAWnrhwrTpQ2JQ3gFpbg3MKbvsL4GOqUBtsvwsAjQZqEmVZuHMRQyqY3To376FVyu3oF5jmi2BxY4kqgx0BmBz0kKcdGaa2RukVj%2BvXhFa7G%2FD7OtTR8nE6R1Fryd%2FjtIn87tv%2BYYM2EjpgoAGt0hSXyoOV8NVP%2BkltEA%2Fj4bSjn52d0JUZ0mYCgXgW7MX%2FOLlIO0S96wumv08n7oU8wx7JTO%2FOz3V6BHs73rq%2F1BrNbAUpRIv%2BJvfoaoRH5t&X-Amz-Signature=689551d6455c4fc89361e7b5d7f6d30464201980e0abc39692f279cdf3211492&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AV3XELA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH5N6ZFtRZDeblGKtDoGOc%2F5B0TcYYOSwbX%2FLyBHaCSzAiEA%2BKg6QnpBHCPKTzwpwb6e9rUjC5Uv%2Bzg5TATzMXi6lKQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGxz8XLtE%2B%2FaEIhlGircA8o09unU38kgkvZti%2FGa2pJdZMvSEF5sRT%2B167fo42OKBb%2FcACLa059tu5Wow1K7Hu%2B23fWDjFio6lPthTTPmjeL83qhDM1LIZ0oTwqm%2B99VYby1KUOIZMBlSsUON8bnI8DB%2BMF398em%2FWhwIGEXjJu5m6MMv8IPIu0j7uSka4mbQM6Es5dFRAyqgFwlzkeGTwMUd%2F9v6l2DEmWRp8n%2BTiRnaKW2k7fhWLF7DMyFi%2Be005Yi%2F4tymx%2FApCUdU3TmA5TNOi5j4kzs9NQXNYwMiso2YRt5YkpfN%2F%2BDwPEfGvIJx7Bne77gxg%2BpSWD8ceixo5eoBJ76F%2BAb9uCHajX7t31TTnwU9ULut4hXu20%2BR4fT8n3gEoVNNqF6NxP8iD1gw7htnKm%2FGVO6WkAKi4bJygCW1QazYxZPsbePZLGYEYg9wTsKucsuXbmvkZW%2BcE3zFUq0%2Bt9TsM0w0FB4CYYgvb6dK5cmY%2BZQogYKJdXxwJUGAI6OOyfc7zlvSQm49prxHQbV%2B5o5U5%2BJdRn5CobD6J%2B5ae9af3K2N1bQAjj9KQNqcuV6MKRAF8wigZm9kUerOJdJaAnmavVsB%2BKLA%2FObA0ewfQ8SQSogb9reMraTAWnrhwrTpQ2JQ3gFpbg3MKbvsL4GOqUBtsvwsAjQZqEmVZuHMRQyqY3To376FVyu3oF5jmi2BxY4kqgx0BmBz0kKcdGaa2RukVj%2BvXhFa7G%2FD7OtTR8nE6R1Fryd%2FjtIn87tv%2BYYM2EjpgoAGt0hSXyoOV8NVP%2BkltEA%2Fj4bSjn52d0JUZ0mYCgXgW7MX%2FOLlIO0S96wumv08n7oU8wx7JTO%2FOz3V6BHs73rq%2F1BrNbAUpRIv%2BJvfoaoRH5t&X-Amz-Signature=70ba59d81be731c0b65247daaaf697bc8ef6fefd157303c75403b68f49d72cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AV3XELA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH5N6ZFtRZDeblGKtDoGOc%2F5B0TcYYOSwbX%2FLyBHaCSzAiEA%2BKg6QnpBHCPKTzwpwb6e9rUjC5Uv%2Bzg5TATzMXi6lKQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGxz8XLtE%2B%2FaEIhlGircA8o09unU38kgkvZti%2FGa2pJdZMvSEF5sRT%2B167fo42OKBb%2FcACLa059tu5Wow1K7Hu%2B23fWDjFio6lPthTTPmjeL83qhDM1LIZ0oTwqm%2B99VYby1KUOIZMBlSsUON8bnI8DB%2BMF398em%2FWhwIGEXjJu5m6MMv8IPIu0j7uSka4mbQM6Es5dFRAyqgFwlzkeGTwMUd%2F9v6l2DEmWRp8n%2BTiRnaKW2k7fhWLF7DMyFi%2Be005Yi%2F4tymx%2FApCUdU3TmA5TNOi5j4kzs9NQXNYwMiso2YRt5YkpfN%2F%2BDwPEfGvIJx7Bne77gxg%2BpSWD8ceixo5eoBJ76F%2BAb9uCHajX7t31TTnwU9ULut4hXu20%2BR4fT8n3gEoVNNqF6NxP8iD1gw7htnKm%2FGVO6WkAKi4bJygCW1QazYxZPsbePZLGYEYg9wTsKucsuXbmvkZW%2BcE3zFUq0%2Bt9TsM0w0FB4CYYgvb6dK5cmY%2BZQogYKJdXxwJUGAI6OOyfc7zlvSQm49prxHQbV%2B5o5U5%2BJdRn5CobD6J%2B5ae9af3K2N1bQAjj9KQNqcuV6MKRAF8wigZm9kUerOJdJaAnmavVsB%2BKLA%2FObA0ewfQ8SQSogb9reMraTAWnrhwrTpQ2JQ3gFpbg3MKbvsL4GOqUBtsvwsAjQZqEmVZuHMRQyqY3To376FVyu3oF5jmi2BxY4kqgx0BmBz0kKcdGaa2RukVj%2BvXhFa7G%2FD7OtTR8nE6R1Fryd%2FjtIn87tv%2BYYM2EjpgoAGt0hSXyoOV8NVP%2BkltEA%2Fj4bSjn52d0JUZ0mYCgXgW7MX%2FOLlIO0S96wumv08n7oU8wx7JTO%2FOz3V6BHs73rq%2F1BrNbAUpRIv%2BJvfoaoRH5t&X-Amz-Signature=347f835b0732ea22ef689694370f538131b4e4f6772ce798cede79b9c3ea6806&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AV3XELA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH5N6ZFtRZDeblGKtDoGOc%2F5B0TcYYOSwbX%2FLyBHaCSzAiEA%2BKg6QnpBHCPKTzwpwb6e9rUjC5Uv%2Bzg5TATzMXi6lKQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGxz8XLtE%2B%2FaEIhlGircA8o09unU38kgkvZti%2FGa2pJdZMvSEF5sRT%2B167fo42OKBb%2FcACLa059tu5Wow1K7Hu%2B23fWDjFio6lPthTTPmjeL83qhDM1LIZ0oTwqm%2B99VYby1KUOIZMBlSsUON8bnI8DB%2BMF398em%2FWhwIGEXjJu5m6MMv8IPIu0j7uSka4mbQM6Es5dFRAyqgFwlzkeGTwMUd%2F9v6l2DEmWRp8n%2BTiRnaKW2k7fhWLF7DMyFi%2Be005Yi%2F4tymx%2FApCUdU3TmA5TNOi5j4kzs9NQXNYwMiso2YRt5YkpfN%2F%2BDwPEfGvIJx7Bne77gxg%2BpSWD8ceixo5eoBJ76F%2BAb9uCHajX7t31TTnwU9ULut4hXu20%2BR4fT8n3gEoVNNqF6NxP8iD1gw7htnKm%2FGVO6WkAKi4bJygCW1QazYxZPsbePZLGYEYg9wTsKucsuXbmvkZW%2BcE3zFUq0%2Bt9TsM0w0FB4CYYgvb6dK5cmY%2BZQogYKJdXxwJUGAI6OOyfc7zlvSQm49prxHQbV%2B5o5U5%2BJdRn5CobD6J%2B5ae9af3K2N1bQAjj9KQNqcuV6MKRAF8wigZm9kUerOJdJaAnmavVsB%2BKLA%2FObA0ewfQ8SQSogb9reMraTAWnrhwrTpQ2JQ3gFpbg3MKbvsL4GOqUBtsvwsAjQZqEmVZuHMRQyqY3To376FVyu3oF5jmi2BxY4kqgx0BmBz0kKcdGaa2RukVj%2BvXhFa7G%2FD7OtTR8nE6R1Fryd%2FjtIn87tv%2BYYM2EjpgoAGt0hSXyoOV8NVP%2BkltEA%2Fj4bSjn52d0JUZ0mYCgXgW7MX%2FOLlIO0S96wumv08n7oU8wx7JTO%2FOz3V6BHs73rq%2F1BrNbAUpRIv%2BJvfoaoRH5t&X-Amz-Signature=645092b3dc5453e71cdf16cae422cc7becca4965b15ceabd4e0852dbe4772b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
