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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOXHJJPT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2FayrVvS0cPQ2DNlScnemwNYzmFgdtwoC4Gj9mUqG0AiBndFtJqGKqD%2B2k7YeQCWwZ4xpQenMELo6TK0N27xR5wiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx7SOhBYr5SWBV8mEKtwDZVuMuspCYnP2xWD8kPRcyyI9W53nG6mXYJrH4P31Gk5ALRthWLJxG3wNlRURY8KNwNhjz3f50C6e0pS06VURpyPJ6kXWQ1GzJm3sVlYo4BMIMjS6B3yShZiOqnM%2F4lPzG%2FEus%2B1s7AADNTIfY0e4CDexmrEgWwlPJQqCrAfO2armEf5kEkECf%2B65YOf49j70DYuLVpDq4G34IN65oQH8vwTRhmv06zoWeqAbVyezxVxORY1hNcjlNtOMHme7LJDSPSeFjFYVpUbIW%2Fa7pZTDaiScfp%2BidAtTkjzjZm2q55Lawe60f53rxxYZUuYASYrblqR2o4YX2NK0%2FM7h7zT8EQJJsRtW0gmAXfUTRosPEdSSUSDiboi5P4WFg9Rvwr0fbIJz0jzqPQnE4yAvmU%2F06DZnbYzes4gM3BuOg%2FrQKhMKzIlK0pGsgXnhjFIh%2BHQqofPuYq6RKxLLujBKnGuqI2KqNGV6497PX4VRAmWJ7YA1WuknghjqvPyYZYk5m9wE6zDQlONpOREUvTsUe3qCi3UysB8soP6qapdZ5B1vX76qHOygh%2Fwh2xY5t7fl%2Bp%2FZfGSCrK2iAMDNF52yQL%2FQgum8jtK7ks4nfqHsLNgRzkzFrRkOoo4uzwLQ%2FHQwn4%2FbwgY6pgFhjzbXb4z4%2B77tm7N%2BDhLXpWH%2BwBaDL5LSyWA3A3p4A%2FcpZD%2F5F2r%2BuU34Heg0OYg6iVOtgk0S6aFeYqSj0lWmfZP2KL61eZEg3gHP%2BWSqZky8rbEyzXR5bTI9YQyE5fdDtgyjFkYQf%2Fzj0qVjsaHli8ne7xOWwOFFqOAdmnkB2z36R%2Bw02Ty%2FnFWqlJr8AoI5LWIqjsQrDjbxQTZQ97gwTj6AiQpV&X-Amz-Signature=7ca0dd23ddd5e7cb7e41fb75a68d795b9ade86cc0c5c951174564ab7c2c33f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOXHJJPT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2FayrVvS0cPQ2DNlScnemwNYzmFgdtwoC4Gj9mUqG0AiBndFtJqGKqD%2B2k7YeQCWwZ4xpQenMELo6TK0N27xR5wiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx7SOhBYr5SWBV8mEKtwDZVuMuspCYnP2xWD8kPRcyyI9W53nG6mXYJrH4P31Gk5ALRthWLJxG3wNlRURY8KNwNhjz3f50C6e0pS06VURpyPJ6kXWQ1GzJm3sVlYo4BMIMjS6B3yShZiOqnM%2F4lPzG%2FEus%2B1s7AADNTIfY0e4CDexmrEgWwlPJQqCrAfO2armEf5kEkECf%2B65YOf49j70DYuLVpDq4G34IN65oQH8vwTRhmv06zoWeqAbVyezxVxORY1hNcjlNtOMHme7LJDSPSeFjFYVpUbIW%2Fa7pZTDaiScfp%2BidAtTkjzjZm2q55Lawe60f53rxxYZUuYASYrblqR2o4YX2NK0%2FM7h7zT8EQJJsRtW0gmAXfUTRosPEdSSUSDiboi5P4WFg9Rvwr0fbIJz0jzqPQnE4yAvmU%2F06DZnbYzes4gM3BuOg%2FrQKhMKzIlK0pGsgXnhjFIh%2BHQqofPuYq6RKxLLujBKnGuqI2KqNGV6497PX4VRAmWJ7YA1WuknghjqvPyYZYk5m9wE6zDQlONpOREUvTsUe3qCi3UysB8soP6qapdZ5B1vX76qHOygh%2Fwh2xY5t7fl%2Bp%2FZfGSCrK2iAMDNF52yQL%2FQgum8jtK7ks4nfqHsLNgRzkzFrRkOoo4uzwLQ%2FHQwn4%2FbwgY6pgFhjzbXb4z4%2B77tm7N%2BDhLXpWH%2BwBaDL5LSyWA3A3p4A%2FcpZD%2F5F2r%2BuU34Heg0OYg6iVOtgk0S6aFeYqSj0lWmfZP2KL61eZEg3gHP%2BWSqZky8rbEyzXR5bTI9YQyE5fdDtgyjFkYQf%2Fzj0qVjsaHli8ne7xOWwOFFqOAdmnkB2z36R%2Bw02Ty%2FnFWqlJr8AoI5LWIqjsQrDjbxQTZQ97gwTj6AiQpV&X-Amz-Signature=fde6c8067347f63654ad6f1da14b3e203fca46c3d134290ac56def7b65c80748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOXHJJPT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2FayrVvS0cPQ2DNlScnemwNYzmFgdtwoC4Gj9mUqG0AiBndFtJqGKqD%2B2k7YeQCWwZ4xpQenMELo6TK0N27xR5wiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx7SOhBYr5SWBV8mEKtwDZVuMuspCYnP2xWD8kPRcyyI9W53nG6mXYJrH4P31Gk5ALRthWLJxG3wNlRURY8KNwNhjz3f50C6e0pS06VURpyPJ6kXWQ1GzJm3sVlYo4BMIMjS6B3yShZiOqnM%2F4lPzG%2FEus%2B1s7AADNTIfY0e4CDexmrEgWwlPJQqCrAfO2armEf5kEkECf%2B65YOf49j70DYuLVpDq4G34IN65oQH8vwTRhmv06zoWeqAbVyezxVxORY1hNcjlNtOMHme7LJDSPSeFjFYVpUbIW%2Fa7pZTDaiScfp%2BidAtTkjzjZm2q55Lawe60f53rxxYZUuYASYrblqR2o4YX2NK0%2FM7h7zT8EQJJsRtW0gmAXfUTRosPEdSSUSDiboi5P4WFg9Rvwr0fbIJz0jzqPQnE4yAvmU%2F06DZnbYzes4gM3BuOg%2FrQKhMKzIlK0pGsgXnhjFIh%2BHQqofPuYq6RKxLLujBKnGuqI2KqNGV6497PX4VRAmWJ7YA1WuknghjqvPyYZYk5m9wE6zDQlONpOREUvTsUe3qCi3UysB8soP6qapdZ5B1vX76qHOygh%2Fwh2xY5t7fl%2Bp%2FZfGSCrK2iAMDNF52yQL%2FQgum8jtK7ks4nfqHsLNgRzkzFrRkOoo4uzwLQ%2FHQwn4%2FbwgY6pgFhjzbXb4z4%2B77tm7N%2BDhLXpWH%2BwBaDL5LSyWA3A3p4A%2FcpZD%2F5F2r%2BuU34Heg0OYg6iVOtgk0S6aFeYqSj0lWmfZP2KL61eZEg3gHP%2BWSqZky8rbEyzXR5bTI9YQyE5fdDtgyjFkYQf%2Fzj0qVjsaHli8ne7xOWwOFFqOAdmnkB2z36R%2Bw02Ty%2FnFWqlJr8AoI5LWIqjsQrDjbxQTZQ97gwTj6AiQpV&X-Amz-Signature=f93e87c9c760f9c2ed8d8521bdfbe4d0b373eb4cd7273663de2a279e7b854a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOXHJJPT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2FayrVvS0cPQ2DNlScnemwNYzmFgdtwoC4Gj9mUqG0AiBndFtJqGKqD%2B2k7YeQCWwZ4xpQenMELo6TK0N27xR5wiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx7SOhBYr5SWBV8mEKtwDZVuMuspCYnP2xWD8kPRcyyI9W53nG6mXYJrH4P31Gk5ALRthWLJxG3wNlRURY8KNwNhjz3f50C6e0pS06VURpyPJ6kXWQ1GzJm3sVlYo4BMIMjS6B3yShZiOqnM%2F4lPzG%2FEus%2B1s7AADNTIfY0e4CDexmrEgWwlPJQqCrAfO2armEf5kEkECf%2B65YOf49j70DYuLVpDq4G34IN65oQH8vwTRhmv06zoWeqAbVyezxVxORY1hNcjlNtOMHme7LJDSPSeFjFYVpUbIW%2Fa7pZTDaiScfp%2BidAtTkjzjZm2q55Lawe60f53rxxYZUuYASYrblqR2o4YX2NK0%2FM7h7zT8EQJJsRtW0gmAXfUTRosPEdSSUSDiboi5P4WFg9Rvwr0fbIJz0jzqPQnE4yAvmU%2F06DZnbYzes4gM3BuOg%2FrQKhMKzIlK0pGsgXnhjFIh%2BHQqofPuYq6RKxLLujBKnGuqI2KqNGV6497PX4VRAmWJ7YA1WuknghjqvPyYZYk5m9wE6zDQlONpOREUvTsUe3qCi3UysB8soP6qapdZ5B1vX76qHOygh%2Fwh2xY5t7fl%2Bp%2FZfGSCrK2iAMDNF52yQL%2FQgum8jtK7ks4nfqHsLNgRzkzFrRkOoo4uzwLQ%2FHQwn4%2FbwgY6pgFhjzbXb4z4%2B77tm7N%2BDhLXpWH%2BwBaDL5LSyWA3A3p4A%2FcpZD%2F5F2r%2BuU34Heg0OYg6iVOtgk0S6aFeYqSj0lWmfZP2KL61eZEg3gHP%2BWSqZky8rbEyzXR5bTI9YQyE5fdDtgyjFkYQf%2Fzj0qVjsaHli8ne7xOWwOFFqOAdmnkB2z36R%2Bw02Ty%2FnFWqlJr8AoI5LWIqjsQrDjbxQTZQ97gwTj6AiQpV&X-Amz-Signature=4d04d476c92f540abc876717e7c148236ff2b48c9ddf369f40c32161391014eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOXHJJPT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2FayrVvS0cPQ2DNlScnemwNYzmFgdtwoC4Gj9mUqG0AiBndFtJqGKqD%2B2k7YeQCWwZ4xpQenMELo6TK0N27xR5wiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx7SOhBYr5SWBV8mEKtwDZVuMuspCYnP2xWD8kPRcyyI9W53nG6mXYJrH4P31Gk5ALRthWLJxG3wNlRURY8KNwNhjz3f50C6e0pS06VURpyPJ6kXWQ1GzJm3sVlYo4BMIMjS6B3yShZiOqnM%2F4lPzG%2FEus%2B1s7AADNTIfY0e4CDexmrEgWwlPJQqCrAfO2armEf5kEkECf%2B65YOf49j70DYuLVpDq4G34IN65oQH8vwTRhmv06zoWeqAbVyezxVxORY1hNcjlNtOMHme7LJDSPSeFjFYVpUbIW%2Fa7pZTDaiScfp%2BidAtTkjzjZm2q55Lawe60f53rxxYZUuYASYrblqR2o4YX2NK0%2FM7h7zT8EQJJsRtW0gmAXfUTRosPEdSSUSDiboi5P4WFg9Rvwr0fbIJz0jzqPQnE4yAvmU%2F06DZnbYzes4gM3BuOg%2FrQKhMKzIlK0pGsgXnhjFIh%2BHQqofPuYq6RKxLLujBKnGuqI2KqNGV6497PX4VRAmWJ7YA1WuknghjqvPyYZYk5m9wE6zDQlONpOREUvTsUe3qCi3UysB8soP6qapdZ5B1vX76qHOygh%2Fwh2xY5t7fl%2Bp%2FZfGSCrK2iAMDNF52yQL%2FQgum8jtK7ks4nfqHsLNgRzkzFrRkOoo4uzwLQ%2FHQwn4%2FbwgY6pgFhjzbXb4z4%2B77tm7N%2BDhLXpWH%2BwBaDL5LSyWA3A3p4A%2FcpZD%2F5F2r%2BuU34Heg0OYg6iVOtgk0S6aFeYqSj0lWmfZP2KL61eZEg3gHP%2BWSqZky8rbEyzXR5bTI9YQyE5fdDtgyjFkYQf%2Fzj0qVjsaHli8ne7xOWwOFFqOAdmnkB2z36R%2Bw02Ty%2FnFWqlJr8AoI5LWIqjsQrDjbxQTZQ97gwTj6AiQpV&X-Amz-Signature=1fc5c40febfa31736811dd600f9b7479c3101663ad1ad9f4d9f90d46266bbe38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
