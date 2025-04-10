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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AL45GC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC7ic%2BSvCZ21bA5sj%2B5MeOl0Tf71m1Lm%2FS1nli%2FPKJovAIhAOe5yMnm83lQNES4m7yYsqPkGRCBUD%2BuO23t02CEqIZEKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm5QAQTqPoHJckat8q3AMKZBRlHPDHLth3AXQq2%2Fhz35Yo1MDNKIR5Q%2FUFHCZAzYuoNxAZlhTs7dlo%2BjqO9W1ncwf8kyi9Tne1zfcjnt6nooSpOtY3MMvhTy9FKx61hlDYvLQ9W2HQANPkrimPw%2FvldAmZMpGO9gTAXJLH7yFxlLf7NZmYOwK5qOVkItQXbXE2p0pJQxVXUaz6ejCKi29zX1Tvb9ivpbKFR26g9L7hBlQ7eRjFhWvbzF1wvQK5YB5YoZs%2F%2F2%2F1xl4M1xtjzY3h7IRD%2BoimCCYM21LW2iQZiRKxHIZFvsjf%2FQpcCZfhyf%2BmSxEQyKgYOWBYkSao8KzDsh0fCvVuPEcQojvrPatW12KC%2FD%2BMjriQ2I3zWz1w9ezdGOZh1h3HVL%2BZRkDSJfZcnNEDMzODvgqqZ3gD5yFhzwtS4CfmqaZAv2qQftt1rIf5nWw9bhcemY5ONU2WnR6NRjmMdWqaIMbqugpO6Fxi7NrQCJCqXvqcWG76ag6A0hSMZPlLs103m6u2w42QFblWRH6ZE8d4rWxVtx8LUzNVdZqbhZGZqxivpTJqzPvX11WpoFxmj%2BLb9JJ8R7UVNGO8ulCf5dvgQR%2Fatuc4Rm4G3CjPXHLOF%2BDUIf7XYleYpg7gZxq0s%2BfvWIbBGzDK892%2FBjqkAZJmjmS11ib01EZB6hK6I4YYdKPucKzIcOzVGI8t69mv3hyEwcmExKxyfZLlpWc8HYPnq2qlGXrfmy5%2B50FMTadMH3yIBWf4vcBqXyunqQbjo2FdJC6lHe9Ylv12sdiElJV12LjM8DMca%2B%2F%2FKXQkwN28CYGqFtJ5O2Ir3y4mOxeUD2ZTfNniYmqNoK2lvJ6Y%2BIoVtiOizc%2BIQ78e127G458OmQzn&X-Amz-Signature=f417b22dd1938d25a0f82f59816483e53a02f5afa2c646e2f0e981198989edc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AL45GC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC7ic%2BSvCZ21bA5sj%2B5MeOl0Tf71m1Lm%2FS1nli%2FPKJovAIhAOe5yMnm83lQNES4m7yYsqPkGRCBUD%2BuO23t02CEqIZEKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm5QAQTqPoHJckat8q3AMKZBRlHPDHLth3AXQq2%2Fhz35Yo1MDNKIR5Q%2FUFHCZAzYuoNxAZlhTs7dlo%2BjqO9W1ncwf8kyi9Tne1zfcjnt6nooSpOtY3MMvhTy9FKx61hlDYvLQ9W2HQANPkrimPw%2FvldAmZMpGO9gTAXJLH7yFxlLf7NZmYOwK5qOVkItQXbXE2p0pJQxVXUaz6ejCKi29zX1Tvb9ivpbKFR26g9L7hBlQ7eRjFhWvbzF1wvQK5YB5YoZs%2F%2F2%2F1xl4M1xtjzY3h7IRD%2BoimCCYM21LW2iQZiRKxHIZFvsjf%2FQpcCZfhyf%2BmSxEQyKgYOWBYkSao8KzDsh0fCvVuPEcQojvrPatW12KC%2FD%2BMjriQ2I3zWz1w9ezdGOZh1h3HVL%2BZRkDSJfZcnNEDMzODvgqqZ3gD5yFhzwtS4CfmqaZAv2qQftt1rIf5nWw9bhcemY5ONU2WnR6NRjmMdWqaIMbqugpO6Fxi7NrQCJCqXvqcWG76ag6A0hSMZPlLs103m6u2w42QFblWRH6ZE8d4rWxVtx8LUzNVdZqbhZGZqxivpTJqzPvX11WpoFxmj%2BLb9JJ8R7UVNGO8ulCf5dvgQR%2Fatuc4Rm4G3CjPXHLOF%2BDUIf7XYleYpg7gZxq0s%2BfvWIbBGzDK892%2FBjqkAZJmjmS11ib01EZB6hK6I4YYdKPucKzIcOzVGI8t69mv3hyEwcmExKxyfZLlpWc8HYPnq2qlGXrfmy5%2B50FMTadMH3yIBWf4vcBqXyunqQbjo2FdJC6lHe9Ylv12sdiElJV12LjM8DMca%2B%2F%2FKXQkwN28CYGqFtJ5O2Ir3y4mOxeUD2ZTfNniYmqNoK2lvJ6Y%2BIoVtiOizc%2BIQ78e127G458OmQzn&X-Amz-Signature=00cc82d1e038344d2725ccc791b1c28b2db6fc2653d194ddcea01d1bfc7fb193&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AL45GC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC7ic%2BSvCZ21bA5sj%2B5MeOl0Tf71m1Lm%2FS1nli%2FPKJovAIhAOe5yMnm83lQNES4m7yYsqPkGRCBUD%2BuO23t02CEqIZEKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm5QAQTqPoHJckat8q3AMKZBRlHPDHLth3AXQq2%2Fhz35Yo1MDNKIR5Q%2FUFHCZAzYuoNxAZlhTs7dlo%2BjqO9W1ncwf8kyi9Tne1zfcjnt6nooSpOtY3MMvhTy9FKx61hlDYvLQ9W2HQANPkrimPw%2FvldAmZMpGO9gTAXJLH7yFxlLf7NZmYOwK5qOVkItQXbXE2p0pJQxVXUaz6ejCKi29zX1Tvb9ivpbKFR26g9L7hBlQ7eRjFhWvbzF1wvQK5YB5YoZs%2F%2F2%2F1xl4M1xtjzY3h7IRD%2BoimCCYM21LW2iQZiRKxHIZFvsjf%2FQpcCZfhyf%2BmSxEQyKgYOWBYkSao8KzDsh0fCvVuPEcQojvrPatW12KC%2FD%2BMjriQ2I3zWz1w9ezdGOZh1h3HVL%2BZRkDSJfZcnNEDMzODvgqqZ3gD5yFhzwtS4CfmqaZAv2qQftt1rIf5nWw9bhcemY5ONU2WnR6NRjmMdWqaIMbqugpO6Fxi7NrQCJCqXvqcWG76ag6A0hSMZPlLs103m6u2w42QFblWRH6ZE8d4rWxVtx8LUzNVdZqbhZGZqxivpTJqzPvX11WpoFxmj%2BLb9JJ8R7UVNGO8ulCf5dvgQR%2Fatuc4Rm4G3CjPXHLOF%2BDUIf7XYleYpg7gZxq0s%2BfvWIbBGzDK892%2FBjqkAZJmjmS11ib01EZB6hK6I4YYdKPucKzIcOzVGI8t69mv3hyEwcmExKxyfZLlpWc8HYPnq2qlGXrfmy5%2B50FMTadMH3yIBWf4vcBqXyunqQbjo2FdJC6lHe9Ylv12sdiElJV12LjM8DMca%2B%2F%2FKXQkwN28CYGqFtJ5O2Ir3y4mOxeUD2ZTfNniYmqNoK2lvJ6Y%2BIoVtiOizc%2BIQ78e127G458OmQzn&X-Amz-Signature=46f8eb6e1ed5985075ce378de05b7ea9a3344ab488865c008e4cc1b8b4ddde08&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AL45GC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC7ic%2BSvCZ21bA5sj%2B5MeOl0Tf71m1Lm%2FS1nli%2FPKJovAIhAOe5yMnm83lQNES4m7yYsqPkGRCBUD%2BuO23t02CEqIZEKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm5QAQTqPoHJckat8q3AMKZBRlHPDHLth3AXQq2%2Fhz35Yo1MDNKIR5Q%2FUFHCZAzYuoNxAZlhTs7dlo%2BjqO9W1ncwf8kyi9Tne1zfcjnt6nooSpOtY3MMvhTy9FKx61hlDYvLQ9W2HQANPkrimPw%2FvldAmZMpGO9gTAXJLH7yFxlLf7NZmYOwK5qOVkItQXbXE2p0pJQxVXUaz6ejCKi29zX1Tvb9ivpbKFR26g9L7hBlQ7eRjFhWvbzF1wvQK5YB5YoZs%2F%2F2%2F1xl4M1xtjzY3h7IRD%2BoimCCYM21LW2iQZiRKxHIZFvsjf%2FQpcCZfhyf%2BmSxEQyKgYOWBYkSao8KzDsh0fCvVuPEcQojvrPatW12KC%2FD%2BMjriQ2I3zWz1w9ezdGOZh1h3HVL%2BZRkDSJfZcnNEDMzODvgqqZ3gD5yFhzwtS4CfmqaZAv2qQftt1rIf5nWw9bhcemY5ONU2WnR6NRjmMdWqaIMbqugpO6Fxi7NrQCJCqXvqcWG76ag6A0hSMZPlLs103m6u2w42QFblWRH6ZE8d4rWxVtx8LUzNVdZqbhZGZqxivpTJqzPvX11WpoFxmj%2BLb9JJ8R7UVNGO8ulCf5dvgQR%2Fatuc4Rm4G3CjPXHLOF%2BDUIf7XYleYpg7gZxq0s%2BfvWIbBGzDK892%2FBjqkAZJmjmS11ib01EZB6hK6I4YYdKPucKzIcOzVGI8t69mv3hyEwcmExKxyfZLlpWc8HYPnq2qlGXrfmy5%2B50FMTadMH3yIBWf4vcBqXyunqQbjo2FdJC6lHe9Ylv12sdiElJV12LjM8DMca%2B%2F%2FKXQkwN28CYGqFtJ5O2Ir3y4mOxeUD2ZTfNniYmqNoK2lvJ6Y%2BIoVtiOizc%2BIQ78e127G458OmQzn&X-Amz-Signature=328f8a68c42332d86742223b5687db593ee88529cf4ac4ebcea95cc5001e584f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AL45GC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC7ic%2BSvCZ21bA5sj%2B5MeOl0Tf71m1Lm%2FS1nli%2FPKJovAIhAOe5yMnm83lQNES4m7yYsqPkGRCBUD%2BuO23t02CEqIZEKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm5QAQTqPoHJckat8q3AMKZBRlHPDHLth3AXQq2%2Fhz35Yo1MDNKIR5Q%2FUFHCZAzYuoNxAZlhTs7dlo%2BjqO9W1ncwf8kyi9Tne1zfcjnt6nooSpOtY3MMvhTy9FKx61hlDYvLQ9W2HQANPkrimPw%2FvldAmZMpGO9gTAXJLH7yFxlLf7NZmYOwK5qOVkItQXbXE2p0pJQxVXUaz6ejCKi29zX1Tvb9ivpbKFR26g9L7hBlQ7eRjFhWvbzF1wvQK5YB5YoZs%2F%2F2%2F1xl4M1xtjzY3h7IRD%2BoimCCYM21LW2iQZiRKxHIZFvsjf%2FQpcCZfhyf%2BmSxEQyKgYOWBYkSao8KzDsh0fCvVuPEcQojvrPatW12KC%2FD%2BMjriQ2I3zWz1w9ezdGOZh1h3HVL%2BZRkDSJfZcnNEDMzODvgqqZ3gD5yFhzwtS4CfmqaZAv2qQftt1rIf5nWw9bhcemY5ONU2WnR6NRjmMdWqaIMbqugpO6Fxi7NrQCJCqXvqcWG76ag6A0hSMZPlLs103m6u2w42QFblWRH6ZE8d4rWxVtx8LUzNVdZqbhZGZqxivpTJqzPvX11WpoFxmj%2BLb9JJ8R7UVNGO8ulCf5dvgQR%2Fatuc4Rm4G3CjPXHLOF%2BDUIf7XYleYpg7gZxq0s%2BfvWIbBGzDK892%2FBjqkAZJmjmS11ib01EZB6hK6I4YYdKPucKzIcOzVGI8t69mv3hyEwcmExKxyfZLlpWc8HYPnq2qlGXrfmy5%2B50FMTadMH3yIBWf4vcBqXyunqQbjo2FdJC6lHe9Ylv12sdiElJV12LjM8DMca%2B%2F%2FKXQkwN28CYGqFtJ5O2Ir3y4mOxeUD2ZTfNniYmqNoK2lvJ6Y%2BIoVtiOizc%2BIQ78e127G458OmQzn&X-Amz-Signature=8bd2375361a11ba2dd460ed166238e03d77513dd620ff49b3309177301649e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
