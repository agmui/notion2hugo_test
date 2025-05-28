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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IZ4XX5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeVNpzMViHBz9l7HZtC59aAPl6hR%2BpmcmABj5tXXEkewIgHmsZHO7cWFCft%2BhZwXsOPHvM9GKVHkyBmnBlk4QQxVcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDDhKifiZ1ZNRGJd7yrcA%2FMa3FrlECQl1MorwU4Du8zjRt%2BZIrQnZIdKz4QpGW9tLwZmQoaQd8ScWUqYjPWvKSSUsxADcpFhLlCrwNpzTF0jTAmiKQQESgTcrAUvqX%2Fbe9A2%2B6loEAr%2BlIiQD15WoVSd45NGFWj9NFYqNI%2F2a4NrB%2FuE6GRkxje9vVPm5AfwU%2FFIo1%2B3c75o0qVAnN8kh6jZb6NRl5wZX7BAJp5%2FxaDy2mGXvDZxddHl7GDxn6iex9nXB0HyV7tnp%2Fs3zqk7Nvt3UXj0U4QmS%2BY2I4Zln%2FUrjNWDzxEZd66psSgHfLQFXqnjzSLb6tJuWX%2FGAfapmeLdhyfljLUGhyna1iouBYNK%2BT6r86AjKoYYHFRDrErQoG0XYh3sVWTfoPYL0wrhi8KDM%2FoIJ4UAwHX32MG%2BuKoEZ4nHxqTwFPn%2BQuPbq2OrXhIBM2ORMLlmPXAHXD8HwjmkJ32CU3aqlpkmAqBaBHAV9Z6SORtuisJBddEWyG4GEcTF%2F7d5ll3xNgU1TIWf9ZgitHbC2A8QuNGUegbMn8iZoleBUyvWZIHgvagDMQD58Knr8y4v4c5wFtUmxtCwoex0PAtWvNmlMLuQNVqbkzzXAgPfZZSZvTSf%2FZIURteSm4Uol3Lw9%2BIh%2FzcTMJik2cEGOqUBGJRUTERhJD2sKzT%2Fb4fV6bOs27Fq4gROwhMAIuJMZIs8JnEEUHK%2B8x3VacFkfdKkpp4RpiCBkqgfU%2B5YYP5X%2Fz%2BV3YA4cV4oXwm49Vvw2LzDQhwBn0xvhzY42V1rpsX%2BF32ypNYtnI91tyDbkwxBbhBSgfK5vCJQzoZ3JKQ0GD7b6neHXAfuEHNUZAva0yMWNNuOEyeJRgB%2BHJbQKkcefhTp8aFT&X-Amz-Signature=68450c09e6d1614540bb5d9c72e476b5616ca8c7e5a051de746b9a8efd2d2e45&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IZ4XX5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeVNpzMViHBz9l7HZtC59aAPl6hR%2BpmcmABj5tXXEkewIgHmsZHO7cWFCft%2BhZwXsOPHvM9GKVHkyBmnBlk4QQxVcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDDhKifiZ1ZNRGJd7yrcA%2FMa3FrlECQl1MorwU4Du8zjRt%2BZIrQnZIdKz4QpGW9tLwZmQoaQd8ScWUqYjPWvKSSUsxADcpFhLlCrwNpzTF0jTAmiKQQESgTcrAUvqX%2Fbe9A2%2B6loEAr%2BlIiQD15WoVSd45NGFWj9NFYqNI%2F2a4NrB%2FuE6GRkxje9vVPm5AfwU%2FFIo1%2B3c75o0qVAnN8kh6jZb6NRl5wZX7BAJp5%2FxaDy2mGXvDZxddHl7GDxn6iex9nXB0HyV7tnp%2Fs3zqk7Nvt3UXj0U4QmS%2BY2I4Zln%2FUrjNWDzxEZd66psSgHfLQFXqnjzSLb6tJuWX%2FGAfapmeLdhyfljLUGhyna1iouBYNK%2BT6r86AjKoYYHFRDrErQoG0XYh3sVWTfoPYL0wrhi8KDM%2FoIJ4UAwHX32MG%2BuKoEZ4nHxqTwFPn%2BQuPbq2OrXhIBM2ORMLlmPXAHXD8HwjmkJ32CU3aqlpkmAqBaBHAV9Z6SORtuisJBddEWyG4GEcTF%2F7d5ll3xNgU1TIWf9ZgitHbC2A8QuNGUegbMn8iZoleBUyvWZIHgvagDMQD58Knr8y4v4c5wFtUmxtCwoex0PAtWvNmlMLuQNVqbkzzXAgPfZZSZvTSf%2FZIURteSm4Uol3Lw9%2BIh%2FzcTMJik2cEGOqUBGJRUTERhJD2sKzT%2Fb4fV6bOs27Fq4gROwhMAIuJMZIs8JnEEUHK%2B8x3VacFkfdKkpp4RpiCBkqgfU%2B5YYP5X%2Fz%2BV3YA4cV4oXwm49Vvw2LzDQhwBn0xvhzY42V1rpsX%2BF32ypNYtnI91tyDbkwxBbhBSgfK5vCJQzoZ3JKQ0GD7b6neHXAfuEHNUZAva0yMWNNuOEyeJRgB%2BHJbQKkcefhTp8aFT&X-Amz-Signature=915e06d264e0bbc1938165db7cdaee089f213a7e89b3dd56840c972819859978&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IZ4XX5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeVNpzMViHBz9l7HZtC59aAPl6hR%2BpmcmABj5tXXEkewIgHmsZHO7cWFCft%2BhZwXsOPHvM9GKVHkyBmnBlk4QQxVcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDDhKifiZ1ZNRGJd7yrcA%2FMa3FrlECQl1MorwU4Du8zjRt%2BZIrQnZIdKz4QpGW9tLwZmQoaQd8ScWUqYjPWvKSSUsxADcpFhLlCrwNpzTF0jTAmiKQQESgTcrAUvqX%2Fbe9A2%2B6loEAr%2BlIiQD15WoVSd45NGFWj9NFYqNI%2F2a4NrB%2FuE6GRkxje9vVPm5AfwU%2FFIo1%2B3c75o0qVAnN8kh6jZb6NRl5wZX7BAJp5%2FxaDy2mGXvDZxddHl7GDxn6iex9nXB0HyV7tnp%2Fs3zqk7Nvt3UXj0U4QmS%2BY2I4Zln%2FUrjNWDzxEZd66psSgHfLQFXqnjzSLb6tJuWX%2FGAfapmeLdhyfljLUGhyna1iouBYNK%2BT6r86AjKoYYHFRDrErQoG0XYh3sVWTfoPYL0wrhi8KDM%2FoIJ4UAwHX32MG%2BuKoEZ4nHxqTwFPn%2BQuPbq2OrXhIBM2ORMLlmPXAHXD8HwjmkJ32CU3aqlpkmAqBaBHAV9Z6SORtuisJBddEWyG4GEcTF%2F7d5ll3xNgU1TIWf9ZgitHbC2A8QuNGUegbMn8iZoleBUyvWZIHgvagDMQD58Knr8y4v4c5wFtUmxtCwoex0PAtWvNmlMLuQNVqbkzzXAgPfZZSZvTSf%2FZIURteSm4Uol3Lw9%2BIh%2FzcTMJik2cEGOqUBGJRUTERhJD2sKzT%2Fb4fV6bOs27Fq4gROwhMAIuJMZIs8JnEEUHK%2B8x3VacFkfdKkpp4RpiCBkqgfU%2B5YYP5X%2Fz%2BV3YA4cV4oXwm49Vvw2LzDQhwBn0xvhzY42V1rpsX%2BF32ypNYtnI91tyDbkwxBbhBSgfK5vCJQzoZ3JKQ0GD7b6neHXAfuEHNUZAva0yMWNNuOEyeJRgB%2BHJbQKkcefhTp8aFT&X-Amz-Signature=c3d3bec08df710b8f4ab5ad6e44030c05de8edfb4adfaf9b6490e31177c9a1b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IZ4XX5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeVNpzMViHBz9l7HZtC59aAPl6hR%2BpmcmABj5tXXEkewIgHmsZHO7cWFCft%2BhZwXsOPHvM9GKVHkyBmnBlk4QQxVcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDDhKifiZ1ZNRGJd7yrcA%2FMa3FrlECQl1MorwU4Du8zjRt%2BZIrQnZIdKz4QpGW9tLwZmQoaQd8ScWUqYjPWvKSSUsxADcpFhLlCrwNpzTF0jTAmiKQQESgTcrAUvqX%2Fbe9A2%2B6loEAr%2BlIiQD15WoVSd45NGFWj9NFYqNI%2F2a4NrB%2FuE6GRkxje9vVPm5AfwU%2FFIo1%2B3c75o0qVAnN8kh6jZb6NRl5wZX7BAJp5%2FxaDy2mGXvDZxddHl7GDxn6iex9nXB0HyV7tnp%2Fs3zqk7Nvt3UXj0U4QmS%2BY2I4Zln%2FUrjNWDzxEZd66psSgHfLQFXqnjzSLb6tJuWX%2FGAfapmeLdhyfljLUGhyna1iouBYNK%2BT6r86AjKoYYHFRDrErQoG0XYh3sVWTfoPYL0wrhi8KDM%2FoIJ4UAwHX32MG%2BuKoEZ4nHxqTwFPn%2BQuPbq2OrXhIBM2ORMLlmPXAHXD8HwjmkJ32CU3aqlpkmAqBaBHAV9Z6SORtuisJBddEWyG4GEcTF%2F7d5ll3xNgU1TIWf9ZgitHbC2A8QuNGUegbMn8iZoleBUyvWZIHgvagDMQD58Knr8y4v4c5wFtUmxtCwoex0PAtWvNmlMLuQNVqbkzzXAgPfZZSZvTSf%2FZIURteSm4Uol3Lw9%2BIh%2FzcTMJik2cEGOqUBGJRUTERhJD2sKzT%2Fb4fV6bOs27Fq4gROwhMAIuJMZIs8JnEEUHK%2B8x3VacFkfdKkpp4RpiCBkqgfU%2B5YYP5X%2Fz%2BV3YA4cV4oXwm49Vvw2LzDQhwBn0xvhzY42V1rpsX%2BF32ypNYtnI91tyDbkwxBbhBSgfK5vCJQzoZ3JKQ0GD7b6neHXAfuEHNUZAva0yMWNNuOEyeJRgB%2BHJbQKkcefhTp8aFT&X-Amz-Signature=ed2ce0b97592f22d01a780cc9e028cd66c70e70f3d3eb978e517ef662dfddcf5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IZ4XX5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeVNpzMViHBz9l7HZtC59aAPl6hR%2BpmcmABj5tXXEkewIgHmsZHO7cWFCft%2BhZwXsOPHvM9GKVHkyBmnBlk4QQxVcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDDhKifiZ1ZNRGJd7yrcA%2FMa3FrlECQl1MorwU4Du8zjRt%2BZIrQnZIdKz4QpGW9tLwZmQoaQd8ScWUqYjPWvKSSUsxADcpFhLlCrwNpzTF0jTAmiKQQESgTcrAUvqX%2Fbe9A2%2B6loEAr%2BlIiQD15WoVSd45NGFWj9NFYqNI%2F2a4NrB%2FuE6GRkxje9vVPm5AfwU%2FFIo1%2B3c75o0qVAnN8kh6jZb6NRl5wZX7BAJp5%2FxaDy2mGXvDZxddHl7GDxn6iex9nXB0HyV7tnp%2Fs3zqk7Nvt3UXj0U4QmS%2BY2I4Zln%2FUrjNWDzxEZd66psSgHfLQFXqnjzSLb6tJuWX%2FGAfapmeLdhyfljLUGhyna1iouBYNK%2BT6r86AjKoYYHFRDrErQoG0XYh3sVWTfoPYL0wrhi8KDM%2FoIJ4UAwHX32MG%2BuKoEZ4nHxqTwFPn%2BQuPbq2OrXhIBM2ORMLlmPXAHXD8HwjmkJ32CU3aqlpkmAqBaBHAV9Z6SORtuisJBddEWyG4GEcTF%2F7d5ll3xNgU1TIWf9ZgitHbC2A8QuNGUegbMn8iZoleBUyvWZIHgvagDMQD58Knr8y4v4c5wFtUmxtCwoex0PAtWvNmlMLuQNVqbkzzXAgPfZZSZvTSf%2FZIURteSm4Uol3Lw9%2BIh%2FzcTMJik2cEGOqUBGJRUTERhJD2sKzT%2Fb4fV6bOs27Fq4gROwhMAIuJMZIs8JnEEUHK%2B8x3VacFkfdKkpp4RpiCBkqgfU%2B5YYP5X%2Fz%2BV3YA4cV4oXwm49Vvw2LzDQhwBn0xvhzY42V1rpsX%2BF32ypNYtnI91tyDbkwxBbhBSgfK5vCJQzoZ3JKQ0GD7b6neHXAfuEHNUZAva0yMWNNuOEyeJRgB%2BHJbQKkcefhTp8aFT&X-Amz-Signature=cec242e73087850ff657a645d92d24d2feab54d3269da2d2221f85783bed1d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
