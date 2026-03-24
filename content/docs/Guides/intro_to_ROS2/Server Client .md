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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3J6TGVS%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClKA%2BMyW53VAXSxuI3srimY5NFdp3mM0sU8OviNuYAggIhAOkhCHIUpcVsSy%2FGlhYAWWmQ7JnI96KAAogEBlD9QidIKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxGG58M5UJ%2BxUJpBMq3AOQgvxWHlm%2FqMnh3T3NpUNZelIbd1SAE3UqzRpMweLgTosELnywiLn%2BZcgOcaIw81b%2Fq%2BQfAbFF1CBTWFJJa13alF1N6KsaiRpaO0hToC0h51F%2BwiBjC7el6tqrC%2FlcOViNK0943eWuao%2FN0ZJRZg%2Fi1MozLIMk4EgzvDHQIZSOA54LvbNBlejq4254lqaPvWPT5RPcuMaOZahEd4qi2CD%2Fs3QfUXH8LG9R0wPwF0rWKb%2Blnvcr6ftSBtyUsp3xd5EE5ie4AucIB38o8x9foya6fWoohlZw3KjlIk8ShDcudFSmLmRaCbStpqM3jfccKLzpqlF4fO4IzJsMDY0V5Z12u9BKWfTk%2BAmIYPk9WEpLpn6UI%2BMnKttHvD5GmHcc%2BpzXufONvT%2F0LlCKeEwZ%2FqYziHPqWkmkDKjtttiqBy1P9JmmbKK3m%2BF7QbPg0OfyS4T%2FEDaAPwp9zvDvw4I9HUjFzGFqyynow9mVnhHmhTd%2BRTN1y%2FVw74azJyQ2H5k%2F6pGU%2BdVeOo1aYUvyiywV7c5br2MDU7p7QnsBBSpC%2B1Kw5k%2BuNwOV4%2FP5H%2F1kZjaEf6B4qcdL0jizaWYP5B6586LTztIIJcmNVDuadvBj8Qxvn%2F7OrRiNMK%2FZ4x44lTDyyYfOBjqkAaQei3AgISoUz995aqD%2B%2BVdfDXPYw8eCvqOVq%2FK5v%2B5Z%2BCzuLCjOwfnwvpVs%2BXgbztXdKlGeu%2FSzzvdoFKJhAOz4N4IESfMoOdWndmQwkOfByARyfv%2FGFu6B7O6AhAMdI6zP7tNkcvJQsJwlhNvn1RdmA5YhcSQh43NElchLwJmSyejNK3T3f4ARaF3vwyNO4qDBjZ2eUgVsB7uxKHC1Cz6lNYQv&X-Amz-Signature=5b4b0e89747b1a381c5957b8521398692a3db351a11c5cbcb8b1ac7dad501835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3J6TGVS%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClKA%2BMyW53VAXSxuI3srimY5NFdp3mM0sU8OviNuYAggIhAOkhCHIUpcVsSy%2FGlhYAWWmQ7JnI96KAAogEBlD9QidIKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxGG58M5UJ%2BxUJpBMq3AOQgvxWHlm%2FqMnh3T3NpUNZelIbd1SAE3UqzRpMweLgTosELnywiLn%2BZcgOcaIw81b%2Fq%2BQfAbFF1CBTWFJJa13alF1N6KsaiRpaO0hToC0h51F%2BwiBjC7el6tqrC%2FlcOViNK0943eWuao%2FN0ZJRZg%2Fi1MozLIMk4EgzvDHQIZSOA54LvbNBlejq4254lqaPvWPT5RPcuMaOZahEd4qi2CD%2Fs3QfUXH8LG9R0wPwF0rWKb%2Blnvcr6ftSBtyUsp3xd5EE5ie4AucIB38o8x9foya6fWoohlZw3KjlIk8ShDcudFSmLmRaCbStpqM3jfccKLzpqlF4fO4IzJsMDY0V5Z12u9BKWfTk%2BAmIYPk9WEpLpn6UI%2BMnKttHvD5GmHcc%2BpzXufONvT%2F0LlCKeEwZ%2FqYziHPqWkmkDKjtttiqBy1P9JmmbKK3m%2BF7QbPg0OfyS4T%2FEDaAPwp9zvDvw4I9HUjFzGFqyynow9mVnhHmhTd%2BRTN1y%2FVw74azJyQ2H5k%2F6pGU%2BdVeOo1aYUvyiywV7c5br2MDU7p7QnsBBSpC%2B1Kw5k%2BuNwOV4%2FP5H%2F1kZjaEf6B4qcdL0jizaWYP5B6586LTztIIJcmNVDuadvBj8Qxvn%2F7OrRiNMK%2FZ4x44lTDyyYfOBjqkAaQei3AgISoUz995aqD%2B%2BVdfDXPYw8eCvqOVq%2FK5v%2B5Z%2BCzuLCjOwfnwvpVs%2BXgbztXdKlGeu%2FSzzvdoFKJhAOz4N4IESfMoOdWndmQwkOfByARyfv%2FGFu6B7O6AhAMdI6zP7tNkcvJQsJwlhNvn1RdmA5YhcSQh43NElchLwJmSyejNK3T3f4ARaF3vwyNO4qDBjZ2eUgVsB7uxKHC1Cz6lNYQv&X-Amz-Signature=5091be6b5621640ca4eaba6208752bcda2422cefacc796cc540bd6a7103a4316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3J6TGVS%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClKA%2BMyW53VAXSxuI3srimY5NFdp3mM0sU8OviNuYAggIhAOkhCHIUpcVsSy%2FGlhYAWWmQ7JnI96KAAogEBlD9QidIKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxGG58M5UJ%2BxUJpBMq3AOQgvxWHlm%2FqMnh3T3NpUNZelIbd1SAE3UqzRpMweLgTosELnywiLn%2BZcgOcaIw81b%2Fq%2BQfAbFF1CBTWFJJa13alF1N6KsaiRpaO0hToC0h51F%2BwiBjC7el6tqrC%2FlcOViNK0943eWuao%2FN0ZJRZg%2Fi1MozLIMk4EgzvDHQIZSOA54LvbNBlejq4254lqaPvWPT5RPcuMaOZahEd4qi2CD%2Fs3QfUXH8LG9R0wPwF0rWKb%2Blnvcr6ftSBtyUsp3xd5EE5ie4AucIB38o8x9foya6fWoohlZw3KjlIk8ShDcudFSmLmRaCbStpqM3jfccKLzpqlF4fO4IzJsMDY0V5Z12u9BKWfTk%2BAmIYPk9WEpLpn6UI%2BMnKttHvD5GmHcc%2BpzXufONvT%2F0LlCKeEwZ%2FqYziHPqWkmkDKjtttiqBy1P9JmmbKK3m%2BF7QbPg0OfyS4T%2FEDaAPwp9zvDvw4I9HUjFzGFqyynow9mVnhHmhTd%2BRTN1y%2FVw74azJyQ2H5k%2F6pGU%2BdVeOo1aYUvyiywV7c5br2MDU7p7QnsBBSpC%2B1Kw5k%2BuNwOV4%2FP5H%2F1kZjaEf6B4qcdL0jizaWYP5B6586LTztIIJcmNVDuadvBj8Qxvn%2F7OrRiNMK%2FZ4x44lTDyyYfOBjqkAaQei3AgISoUz995aqD%2B%2BVdfDXPYw8eCvqOVq%2FK5v%2B5Z%2BCzuLCjOwfnwvpVs%2BXgbztXdKlGeu%2FSzzvdoFKJhAOz4N4IESfMoOdWndmQwkOfByARyfv%2FGFu6B7O6AhAMdI6zP7tNkcvJQsJwlhNvn1RdmA5YhcSQh43NElchLwJmSyejNK3T3f4ARaF3vwyNO4qDBjZ2eUgVsB7uxKHC1Cz6lNYQv&X-Amz-Signature=15e85b77fdbd259efe5902e681d93bf8f3a7fd7d2c76ba1ea649b8035385163e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3J6TGVS%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClKA%2BMyW53VAXSxuI3srimY5NFdp3mM0sU8OviNuYAggIhAOkhCHIUpcVsSy%2FGlhYAWWmQ7JnI96KAAogEBlD9QidIKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxGG58M5UJ%2BxUJpBMq3AOQgvxWHlm%2FqMnh3T3NpUNZelIbd1SAE3UqzRpMweLgTosELnywiLn%2BZcgOcaIw81b%2Fq%2BQfAbFF1CBTWFJJa13alF1N6KsaiRpaO0hToC0h51F%2BwiBjC7el6tqrC%2FlcOViNK0943eWuao%2FN0ZJRZg%2Fi1MozLIMk4EgzvDHQIZSOA54LvbNBlejq4254lqaPvWPT5RPcuMaOZahEd4qi2CD%2Fs3QfUXH8LG9R0wPwF0rWKb%2Blnvcr6ftSBtyUsp3xd5EE5ie4AucIB38o8x9foya6fWoohlZw3KjlIk8ShDcudFSmLmRaCbStpqM3jfccKLzpqlF4fO4IzJsMDY0V5Z12u9BKWfTk%2BAmIYPk9WEpLpn6UI%2BMnKttHvD5GmHcc%2BpzXufONvT%2F0LlCKeEwZ%2FqYziHPqWkmkDKjtttiqBy1P9JmmbKK3m%2BF7QbPg0OfyS4T%2FEDaAPwp9zvDvw4I9HUjFzGFqyynow9mVnhHmhTd%2BRTN1y%2FVw74azJyQ2H5k%2F6pGU%2BdVeOo1aYUvyiywV7c5br2MDU7p7QnsBBSpC%2B1Kw5k%2BuNwOV4%2FP5H%2F1kZjaEf6B4qcdL0jizaWYP5B6586LTztIIJcmNVDuadvBj8Qxvn%2F7OrRiNMK%2FZ4x44lTDyyYfOBjqkAaQei3AgISoUz995aqD%2B%2BVdfDXPYw8eCvqOVq%2FK5v%2B5Z%2BCzuLCjOwfnwvpVs%2BXgbztXdKlGeu%2FSzzvdoFKJhAOz4N4IESfMoOdWndmQwkOfByARyfv%2FGFu6B7O6AhAMdI6zP7tNkcvJQsJwlhNvn1RdmA5YhcSQh43NElchLwJmSyejNK3T3f4ARaF3vwyNO4qDBjZ2eUgVsB7uxKHC1Cz6lNYQv&X-Amz-Signature=ec46ba8d5b243f25b7f08a51302c4d8427c81a3ef84b5094d022b96f6f178373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3J6TGVS%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClKA%2BMyW53VAXSxuI3srimY5NFdp3mM0sU8OviNuYAggIhAOkhCHIUpcVsSy%2FGlhYAWWmQ7JnI96KAAogEBlD9QidIKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxGG58M5UJ%2BxUJpBMq3AOQgvxWHlm%2FqMnh3T3NpUNZelIbd1SAE3UqzRpMweLgTosELnywiLn%2BZcgOcaIw81b%2Fq%2BQfAbFF1CBTWFJJa13alF1N6KsaiRpaO0hToC0h51F%2BwiBjC7el6tqrC%2FlcOViNK0943eWuao%2FN0ZJRZg%2Fi1MozLIMk4EgzvDHQIZSOA54LvbNBlejq4254lqaPvWPT5RPcuMaOZahEd4qi2CD%2Fs3QfUXH8LG9R0wPwF0rWKb%2Blnvcr6ftSBtyUsp3xd5EE5ie4AucIB38o8x9foya6fWoohlZw3KjlIk8ShDcudFSmLmRaCbStpqM3jfccKLzpqlF4fO4IzJsMDY0V5Z12u9BKWfTk%2BAmIYPk9WEpLpn6UI%2BMnKttHvD5GmHcc%2BpzXufONvT%2F0LlCKeEwZ%2FqYziHPqWkmkDKjtttiqBy1P9JmmbKK3m%2BF7QbPg0OfyS4T%2FEDaAPwp9zvDvw4I9HUjFzGFqyynow9mVnhHmhTd%2BRTN1y%2FVw74azJyQ2H5k%2F6pGU%2BdVeOo1aYUvyiywV7c5br2MDU7p7QnsBBSpC%2B1Kw5k%2BuNwOV4%2FP5H%2F1kZjaEf6B4qcdL0jizaWYP5B6586LTztIIJcmNVDuadvBj8Qxvn%2F7OrRiNMK%2FZ4x44lTDyyYfOBjqkAaQei3AgISoUz995aqD%2B%2BVdfDXPYw8eCvqOVq%2FK5v%2B5Z%2BCzuLCjOwfnwvpVs%2BXgbztXdKlGeu%2FSzzvdoFKJhAOz4N4IESfMoOdWndmQwkOfByARyfv%2FGFu6B7O6AhAMdI6zP7tNkcvJQsJwlhNvn1RdmA5YhcSQh43NElchLwJmSyejNK3T3f4ARaF3vwyNO4qDBjZ2eUgVsB7uxKHC1Cz6lNYQv&X-Amz-Signature=76247f7adcaab907d88dcb71415fa173153833d8b4a8da8a49788fc15fcc988d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
