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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3273MIT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuY4O%2FDzTmF1TPYt7OJlQzzUugVfOuw9nN8YQwin3uNAIhAMi4NjqkSUdOT2tNK2R%2BuRJPJWsrjvXftmFMCvtUNARbKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUbMSuh6IO5X4X5sq3AMYnkFmPCpkGOk9a2ByCbaw8cVSWc626IZgPVv7JYT4GXMbqg6ZSCqKr8o5fGZQvUefVkwX7XqylkL4Ws2pBlJgjRybCP80Cl%2B4wRw7%2BU%2BkRSEbE7p7U9QTI1LmrfeEHve0D8kUrjTlCELQK6iIlqXGf2oaaU%2FB%2FjeXAbadmakEj2BYEP2s5VYKgX7NeUgZOOcw8cmq8uagAu%2Fb8KYsHwmQef%2F3atqZpg2I287Z0wAApbTtiqAmgAcC78KxqtEb59NuW%2BxjBQoBB8blg6l%2B1kpEc9ivR8ll0VzV7OJYflAAH2OWVzADy%2F5MkWevLJ%2FWJrM5E6gImBOYVG9kKFQn8mWhnwoKMSZ9BCipS6fMKoHoTvI9JUdZHc21c24bm7HLMTRwyFnQwlt%2Bv4%2BOVbcpJKGtPfdcYyqBh26C95Q9ONlaReq%2B4lOfWvZ7K2e%2F0huXZBG1OyNKNfCt82akuSJQWJeZhhi8ED%2FWASCv5QjWkmU1b5Zr16%2F5J29dkSUZ4PQBlMS%2BPuArHzInFLND39holk1GpiWAeS1YTcMwMGtr7KklSD62w70zGUuLuDMBFIrl92OTEmveDX%2BvdJwpBpd9TkaS8iah8%2B0mhoSDF0sptGqE4nLzBNk3dy%2Buye2NtzDsgOnABjqkAYbNjq5mS3bhxs5AgmhoJ%2BdD54mS6cFjpO%2FFqSe917x%2Bc1DVkjmXjuVqzgcqer2vsnM6RuTEO6H2ct2UV%2FZJKEI7gMcwE%2F32SjBk5hq%2FTSmxHZsRLBt42EcFIUHiJcpDbrnAtIqsc%2BaKJUzUoQR87XmOkbdMRTIrUuRSeyINig27roAjbzLDyfXwfajxC0KnsygZyTC6R9KW8GADL4YvuLBibUGj&X-Amz-Signature=291c8c7353a3395a30e8b70afe2f13b46e87892cd4388fe074aed7c530016299&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3273MIT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuY4O%2FDzTmF1TPYt7OJlQzzUugVfOuw9nN8YQwin3uNAIhAMi4NjqkSUdOT2tNK2R%2BuRJPJWsrjvXftmFMCvtUNARbKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUbMSuh6IO5X4X5sq3AMYnkFmPCpkGOk9a2ByCbaw8cVSWc626IZgPVv7JYT4GXMbqg6ZSCqKr8o5fGZQvUefVkwX7XqylkL4Ws2pBlJgjRybCP80Cl%2B4wRw7%2BU%2BkRSEbE7p7U9QTI1LmrfeEHve0D8kUrjTlCELQK6iIlqXGf2oaaU%2FB%2FjeXAbadmakEj2BYEP2s5VYKgX7NeUgZOOcw8cmq8uagAu%2Fb8KYsHwmQef%2F3atqZpg2I287Z0wAApbTtiqAmgAcC78KxqtEb59NuW%2BxjBQoBB8blg6l%2B1kpEc9ivR8ll0VzV7OJYflAAH2OWVzADy%2F5MkWevLJ%2FWJrM5E6gImBOYVG9kKFQn8mWhnwoKMSZ9BCipS6fMKoHoTvI9JUdZHc21c24bm7HLMTRwyFnQwlt%2Bv4%2BOVbcpJKGtPfdcYyqBh26C95Q9ONlaReq%2B4lOfWvZ7K2e%2F0huXZBG1OyNKNfCt82akuSJQWJeZhhi8ED%2FWASCv5QjWkmU1b5Zr16%2F5J29dkSUZ4PQBlMS%2BPuArHzInFLND39holk1GpiWAeS1YTcMwMGtr7KklSD62w70zGUuLuDMBFIrl92OTEmveDX%2BvdJwpBpd9TkaS8iah8%2B0mhoSDF0sptGqE4nLzBNk3dy%2Buye2NtzDsgOnABjqkAYbNjq5mS3bhxs5AgmhoJ%2BdD54mS6cFjpO%2FFqSe917x%2Bc1DVkjmXjuVqzgcqer2vsnM6RuTEO6H2ct2UV%2FZJKEI7gMcwE%2F32SjBk5hq%2FTSmxHZsRLBt42EcFIUHiJcpDbrnAtIqsc%2BaKJUzUoQR87XmOkbdMRTIrUuRSeyINig27roAjbzLDyfXwfajxC0KnsygZyTC6R9KW8GADL4YvuLBibUGj&X-Amz-Signature=88f4fbc31cea9c16d67a5a8258cb26e9be0befc17d9dba23cee143f10bc96029&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3273MIT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuY4O%2FDzTmF1TPYt7OJlQzzUugVfOuw9nN8YQwin3uNAIhAMi4NjqkSUdOT2tNK2R%2BuRJPJWsrjvXftmFMCvtUNARbKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUbMSuh6IO5X4X5sq3AMYnkFmPCpkGOk9a2ByCbaw8cVSWc626IZgPVv7JYT4GXMbqg6ZSCqKr8o5fGZQvUefVkwX7XqylkL4Ws2pBlJgjRybCP80Cl%2B4wRw7%2BU%2BkRSEbE7p7U9QTI1LmrfeEHve0D8kUrjTlCELQK6iIlqXGf2oaaU%2FB%2FjeXAbadmakEj2BYEP2s5VYKgX7NeUgZOOcw8cmq8uagAu%2Fb8KYsHwmQef%2F3atqZpg2I287Z0wAApbTtiqAmgAcC78KxqtEb59NuW%2BxjBQoBB8blg6l%2B1kpEc9ivR8ll0VzV7OJYflAAH2OWVzADy%2F5MkWevLJ%2FWJrM5E6gImBOYVG9kKFQn8mWhnwoKMSZ9BCipS6fMKoHoTvI9JUdZHc21c24bm7HLMTRwyFnQwlt%2Bv4%2BOVbcpJKGtPfdcYyqBh26C95Q9ONlaReq%2B4lOfWvZ7K2e%2F0huXZBG1OyNKNfCt82akuSJQWJeZhhi8ED%2FWASCv5QjWkmU1b5Zr16%2F5J29dkSUZ4PQBlMS%2BPuArHzInFLND39holk1GpiWAeS1YTcMwMGtr7KklSD62w70zGUuLuDMBFIrl92OTEmveDX%2BvdJwpBpd9TkaS8iah8%2B0mhoSDF0sptGqE4nLzBNk3dy%2Buye2NtzDsgOnABjqkAYbNjq5mS3bhxs5AgmhoJ%2BdD54mS6cFjpO%2FFqSe917x%2Bc1DVkjmXjuVqzgcqer2vsnM6RuTEO6H2ct2UV%2FZJKEI7gMcwE%2F32SjBk5hq%2FTSmxHZsRLBt42EcFIUHiJcpDbrnAtIqsc%2BaKJUzUoQR87XmOkbdMRTIrUuRSeyINig27roAjbzLDyfXwfajxC0KnsygZyTC6R9KW8GADL4YvuLBibUGj&X-Amz-Signature=0c0ba939df44c98682a1830b77be3ad3a5669f7799ea1e4dd0f405567c59968a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3273MIT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuY4O%2FDzTmF1TPYt7OJlQzzUugVfOuw9nN8YQwin3uNAIhAMi4NjqkSUdOT2tNK2R%2BuRJPJWsrjvXftmFMCvtUNARbKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUbMSuh6IO5X4X5sq3AMYnkFmPCpkGOk9a2ByCbaw8cVSWc626IZgPVv7JYT4GXMbqg6ZSCqKr8o5fGZQvUefVkwX7XqylkL4Ws2pBlJgjRybCP80Cl%2B4wRw7%2BU%2BkRSEbE7p7U9QTI1LmrfeEHve0D8kUrjTlCELQK6iIlqXGf2oaaU%2FB%2FjeXAbadmakEj2BYEP2s5VYKgX7NeUgZOOcw8cmq8uagAu%2Fb8KYsHwmQef%2F3atqZpg2I287Z0wAApbTtiqAmgAcC78KxqtEb59NuW%2BxjBQoBB8blg6l%2B1kpEc9ivR8ll0VzV7OJYflAAH2OWVzADy%2F5MkWevLJ%2FWJrM5E6gImBOYVG9kKFQn8mWhnwoKMSZ9BCipS6fMKoHoTvI9JUdZHc21c24bm7HLMTRwyFnQwlt%2Bv4%2BOVbcpJKGtPfdcYyqBh26C95Q9ONlaReq%2B4lOfWvZ7K2e%2F0huXZBG1OyNKNfCt82akuSJQWJeZhhi8ED%2FWASCv5QjWkmU1b5Zr16%2F5J29dkSUZ4PQBlMS%2BPuArHzInFLND39holk1GpiWAeS1YTcMwMGtr7KklSD62w70zGUuLuDMBFIrl92OTEmveDX%2BvdJwpBpd9TkaS8iah8%2B0mhoSDF0sptGqE4nLzBNk3dy%2Buye2NtzDsgOnABjqkAYbNjq5mS3bhxs5AgmhoJ%2BdD54mS6cFjpO%2FFqSe917x%2Bc1DVkjmXjuVqzgcqer2vsnM6RuTEO6H2ct2UV%2FZJKEI7gMcwE%2F32SjBk5hq%2FTSmxHZsRLBt42EcFIUHiJcpDbrnAtIqsc%2BaKJUzUoQR87XmOkbdMRTIrUuRSeyINig27roAjbzLDyfXwfajxC0KnsygZyTC6R9KW8GADL4YvuLBibUGj&X-Amz-Signature=63827e2300f397f3a1cef7d005d710035ec3a088357ff34c3482766c67c2bdd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3273MIT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuY4O%2FDzTmF1TPYt7OJlQzzUugVfOuw9nN8YQwin3uNAIhAMi4NjqkSUdOT2tNK2R%2BuRJPJWsrjvXftmFMCvtUNARbKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUbMSuh6IO5X4X5sq3AMYnkFmPCpkGOk9a2ByCbaw8cVSWc626IZgPVv7JYT4GXMbqg6ZSCqKr8o5fGZQvUefVkwX7XqylkL4Ws2pBlJgjRybCP80Cl%2B4wRw7%2BU%2BkRSEbE7p7U9QTI1LmrfeEHve0D8kUrjTlCELQK6iIlqXGf2oaaU%2FB%2FjeXAbadmakEj2BYEP2s5VYKgX7NeUgZOOcw8cmq8uagAu%2Fb8KYsHwmQef%2F3atqZpg2I287Z0wAApbTtiqAmgAcC78KxqtEb59NuW%2BxjBQoBB8blg6l%2B1kpEc9ivR8ll0VzV7OJYflAAH2OWVzADy%2F5MkWevLJ%2FWJrM5E6gImBOYVG9kKFQn8mWhnwoKMSZ9BCipS6fMKoHoTvI9JUdZHc21c24bm7HLMTRwyFnQwlt%2Bv4%2BOVbcpJKGtPfdcYyqBh26C95Q9ONlaReq%2B4lOfWvZ7K2e%2F0huXZBG1OyNKNfCt82akuSJQWJeZhhi8ED%2FWASCv5QjWkmU1b5Zr16%2F5J29dkSUZ4PQBlMS%2BPuArHzInFLND39holk1GpiWAeS1YTcMwMGtr7KklSD62w70zGUuLuDMBFIrl92OTEmveDX%2BvdJwpBpd9TkaS8iah8%2B0mhoSDF0sptGqE4nLzBNk3dy%2Buye2NtzDsgOnABjqkAYbNjq5mS3bhxs5AgmhoJ%2BdD54mS6cFjpO%2FFqSe917x%2Bc1DVkjmXjuVqzgcqer2vsnM6RuTEO6H2ct2UV%2FZJKEI7gMcwE%2F32SjBk5hq%2FTSmxHZsRLBt42EcFIUHiJcpDbrnAtIqsc%2BaKJUzUoQR87XmOkbdMRTIrUuRSeyINig27roAjbzLDyfXwfajxC0KnsygZyTC6R9KW8GADL4YvuLBibUGj&X-Amz-Signature=d67bc00e844a60035e022c7d6ed6d958a09e6fda2447f344b117d416d6bcdf4e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
