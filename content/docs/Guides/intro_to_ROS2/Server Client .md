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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KYO6WYA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvP6yrYaL0PwfRZmNxrHsijNQw5JjAmTwfZVFJdyymAwIgZK0PiGwj4qAK6xmb7f%2BEFdRzZygNtXo38gte0C97DecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcKdM7HZxLID7E9rircA8jS0oqU9hyUwogaVs4zZOABqii%2F25Vj8yt2bGM7qlaWAMdAawbvZ9VdThXhGOnInCVGbkmDHWLrdP2Q%2B3MUHbRc0BGvnsf699RaHWOXr7DikCvDMTp23Zrublj12rPK7sR4mH4MqltgbgoCJFsejWeS6%2FOpFi0nd8Z6rb499lPA%2FAz%2Fuv1XvBj7lobVu0SC9HvnuR3E9hedTTpCpcYIhv7%2FXsY9z2HypvJPRbP8ZY1nn6AdnVo%2Bx8nRGYjERxge0URKPC%2FToOkSGBvc6Enz1Ax3QvRYMGRNKr7FwsD6xOuBuHrdqQL8SeK73hK%2FT5hBbFjjwGqwKTHdebBG%2FocJYt9kytoURy3oaHfdMtjNE77P4hzvA8SzLBMUrZLSKg59ONLg2hWrBf1yomgbSHmSfzmiaHmqOdqBl7%2B1ioUtY%2F3YIeGlulbHYk13rwDMN5m85ccY%2FKnvJ7qtjVpR0RjP9o9Ojwb47rnv8HdOwLzA8njEhTB3cDhbi%2FqBeENgz6vkQUnnCZxG2m1uxhQYKKXMIQOMFIRa0%2BONdWDtQ5hk9U8tI6776mpKplvPcGDIiW7gUahZE12z9p1o2UsdRHhiIGPpUyKoOTAfWU5iMNv1JkkrDPM47EA2tgc%2FMuoLMNaF6bwGOqUBuVtj4Bw5BMlCPgyj2AJBHgVDdo5OLadJAZuuwGcv2lCV7LpJ0WYVC2ZEdfc7lejCzMLAEHyMkBxFL4gnNDJfqL6QLSuDi2ByXnZK63SUYYnxuxqpTFDVhNl8xnqKGkyLpWzrlr%2FuPMnhe2YHvCQ7qsM2NYFu0MFzdVIlq%2FUMhXYURxOcecyo8szsvwpHOPTe0OSPvhOUh7wyBMi2jHIcw0dN8wmt&X-Amz-Signature=f8b1905628adde8566155c91b6b681bc3f90f149cbca9962500a5dba1abf6c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KYO6WYA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvP6yrYaL0PwfRZmNxrHsijNQw5JjAmTwfZVFJdyymAwIgZK0PiGwj4qAK6xmb7f%2BEFdRzZygNtXo38gte0C97DecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcKdM7HZxLID7E9rircA8jS0oqU9hyUwogaVs4zZOABqii%2F25Vj8yt2bGM7qlaWAMdAawbvZ9VdThXhGOnInCVGbkmDHWLrdP2Q%2B3MUHbRc0BGvnsf699RaHWOXr7DikCvDMTp23Zrublj12rPK7sR4mH4MqltgbgoCJFsejWeS6%2FOpFi0nd8Z6rb499lPA%2FAz%2Fuv1XvBj7lobVu0SC9HvnuR3E9hedTTpCpcYIhv7%2FXsY9z2HypvJPRbP8ZY1nn6AdnVo%2Bx8nRGYjERxge0URKPC%2FToOkSGBvc6Enz1Ax3QvRYMGRNKr7FwsD6xOuBuHrdqQL8SeK73hK%2FT5hBbFjjwGqwKTHdebBG%2FocJYt9kytoURy3oaHfdMtjNE77P4hzvA8SzLBMUrZLSKg59ONLg2hWrBf1yomgbSHmSfzmiaHmqOdqBl7%2B1ioUtY%2F3YIeGlulbHYk13rwDMN5m85ccY%2FKnvJ7qtjVpR0RjP9o9Ojwb47rnv8HdOwLzA8njEhTB3cDhbi%2FqBeENgz6vkQUnnCZxG2m1uxhQYKKXMIQOMFIRa0%2BONdWDtQ5hk9U8tI6776mpKplvPcGDIiW7gUahZE12z9p1o2UsdRHhiIGPpUyKoOTAfWU5iMNv1JkkrDPM47EA2tgc%2FMuoLMNaF6bwGOqUBuVtj4Bw5BMlCPgyj2AJBHgVDdo5OLadJAZuuwGcv2lCV7LpJ0WYVC2ZEdfc7lejCzMLAEHyMkBxFL4gnNDJfqL6QLSuDi2ByXnZK63SUYYnxuxqpTFDVhNl8xnqKGkyLpWzrlr%2FuPMnhe2YHvCQ7qsM2NYFu0MFzdVIlq%2FUMhXYURxOcecyo8szsvwpHOPTe0OSPvhOUh7wyBMi2jHIcw0dN8wmt&X-Amz-Signature=9dce1b11fe8ce104665aeb17637999535563cbed6dfd67667375ee74dfbc6beb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KYO6WYA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvP6yrYaL0PwfRZmNxrHsijNQw5JjAmTwfZVFJdyymAwIgZK0PiGwj4qAK6xmb7f%2BEFdRzZygNtXo38gte0C97DecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcKdM7HZxLID7E9rircA8jS0oqU9hyUwogaVs4zZOABqii%2F25Vj8yt2bGM7qlaWAMdAawbvZ9VdThXhGOnInCVGbkmDHWLrdP2Q%2B3MUHbRc0BGvnsf699RaHWOXr7DikCvDMTp23Zrublj12rPK7sR4mH4MqltgbgoCJFsejWeS6%2FOpFi0nd8Z6rb499lPA%2FAz%2Fuv1XvBj7lobVu0SC9HvnuR3E9hedTTpCpcYIhv7%2FXsY9z2HypvJPRbP8ZY1nn6AdnVo%2Bx8nRGYjERxge0URKPC%2FToOkSGBvc6Enz1Ax3QvRYMGRNKr7FwsD6xOuBuHrdqQL8SeK73hK%2FT5hBbFjjwGqwKTHdebBG%2FocJYt9kytoURy3oaHfdMtjNE77P4hzvA8SzLBMUrZLSKg59ONLg2hWrBf1yomgbSHmSfzmiaHmqOdqBl7%2B1ioUtY%2F3YIeGlulbHYk13rwDMN5m85ccY%2FKnvJ7qtjVpR0RjP9o9Ojwb47rnv8HdOwLzA8njEhTB3cDhbi%2FqBeENgz6vkQUnnCZxG2m1uxhQYKKXMIQOMFIRa0%2BONdWDtQ5hk9U8tI6776mpKplvPcGDIiW7gUahZE12z9p1o2UsdRHhiIGPpUyKoOTAfWU5iMNv1JkkrDPM47EA2tgc%2FMuoLMNaF6bwGOqUBuVtj4Bw5BMlCPgyj2AJBHgVDdo5OLadJAZuuwGcv2lCV7LpJ0WYVC2ZEdfc7lejCzMLAEHyMkBxFL4gnNDJfqL6QLSuDi2ByXnZK63SUYYnxuxqpTFDVhNl8xnqKGkyLpWzrlr%2FuPMnhe2YHvCQ7qsM2NYFu0MFzdVIlq%2FUMhXYURxOcecyo8szsvwpHOPTe0OSPvhOUh7wyBMi2jHIcw0dN8wmt&X-Amz-Signature=a3fc15bf2b96280366a4e00e7043f4626a3d3461ce87b42ff898174c828a58e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KYO6WYA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvP6yrYaL0PwfRZmNxrHsijNQw5JjAmTwfZVFJdyymAwIgZK0PiGwj4qAK6xmb7f%2BEFdRzZygNtXo38gte0C97DecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcKdM7HZxLID7E9rircA8jS0oqU9hyUwogaVs4zZOABqii%2F25Vj8yt2bGM7qlaWAMdAawbvZ9VdThXhGOnInCVGbkmDHWLrdP2Q%2B3MUHbRc0BGvnsf699RaHWOXr7DikCvDMTp23Zrublj12rPK7sR4mH4MqltgbgoCJFsejWeS6%2FOpFi0nd8Z6rb499lPA%2FAz%2Fuv1XvBj7lobVu0SC9HvnuR3E9hedTTpCpcYIhv7%2FXsY9z2HypvJPRbP8ZY1nn6AdnVo%2Bx8nRGYjERxge0URKPC%2FToOkSGBvc6Enz1Ax3QvRYMGRNKr7FwsD6xOuBuHrdqQL8SeK73hK%2FT5hBbFjjwGqwKTHdebBG%2FocJYt9kytoURy3oaHfdMtjNE77P4hzvA8SzLBMUrZLSKg59ONLg2hWrBf1yomgbSHmSfzmiaHmqOdqBl7%2B1ioUtY%2F3YIeGlulbHYk13rwDMN5m85ccY%2FKnvJ7qtjVpR0RjP9o9Ojwb47rnv8HdOwLzA8njEhTB3cDhbi%2FqBeENgz6vkQUnnCZxG2m1uxhQYKKXMIQOMFIRa0%2BONdWDtQ5hk9U8tI6776mpKplvPcGDIiW7gUahZE12z9p1o2UsdRHhiIGPpUyKoOTAfWU5iMNv1JkkrDPM47EA2tgc%2FMuoLMNaF6bwGOqUBuVtj4Bw5BMlCPgyj2AJBHgVDdo5OLadJAZuuwGcv2lCV7LpJ0WYVC2ZEdfc7lejCzMLAEHyMkBxFL4gnNDJfqL6QLSuDi2ByXnZK63SUYYnxuxqpTFDVhNl8xnqKGkyLpWzrlr%2FuPMnhe2YHvCQ7qsM2NYFu0MFzdVIlq%2FUMhXYURxOcecyo8szsvwpHOPTe0OSPvhOUh7wyBMi2jHIcw0dN8wmt&X-Amz-Signature=05064dbe47dd6a3554c79c9c2ca7312ff1a1e04b1f91f74f6f8d0fcee211b3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KYO6WYA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvP6yrYaL0PwfRZmNxrHsijNQw5JjAmTwfZVFJdyymAwIgZK0PiGwj4qAK6xmb7f%2BEFdRzZygNtXo38gte0C97DecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcKdM7HZxLID7E9rircA8jS0oqU9hyUwogaVs4zZOABqii%2F25Vj8yt2bGM7qlaWAMdAawbvZ9VdThXhGOnInCVGbkmDHWLrdP2Q%2B3MUHbRc0BGvnsf699RaHWOXr7DikCvDMTp23Zrublj12rPK7sR4mH4MqltgbgoCJFsejWeS6%2FOpFi0nd8Z6rb499lPA%2FAz%2Fuv1XvBj7lobVu0SC9HvnuR3E9hedTTpCpcYIhv7%2FXsY9z2HypvJPRbP8ZY1nn6AdnVo%2Bx8nRGYjERxge0URKPC%2FToOkSGBvc6Enz1Ax3QvRYMGRNKr7FwsD6xOuBuHrdqQL8SeK73hK%2FT5hBbFjjwGqwKTHdebBG%2FocJYt9kytoURy3oaHfdMtjNE77P4hzvA8SzLBMUrZLSKg59ONLg2hWrBf1yomgbSHmSfzmiaHmqOdqBl7%2B1ioUtY%2F3YIeGlulbHYk13rwDMN5m85ccY%2FKnvJ7qtjVpR0RjP9o9Ojwb47rnv8HdOwLzA8njEhTB3cDhbi%2FqBeENgz6vkQUnnCZxG2m1uxhQYKKXMIQOMFIRa0%2BONdWDtQ5hk9U8tI6776mpKplvPcGDIiW7gUahZE12z9p1o2UsdRHhiIGPpUyKoOTAfWU5iMNv1JkkrDPM47EA2tgc%2FMuoLMNaF6bwGOqUBuVtj4Bw5BMlCPgyj2AJBHgVDdo5OLadJAZuuwGcv2lCV7LpJ0WYVC2ZEdfc7lejCzMLAEHyMkBxFL4gnNDJfqL6QLSuDi2ByXnZK63SUYYnxuxqpTFDVhNl8xnqKGkyLpWzrlr%2FuPMnhe2YHvCQ7qsM2NYFu0MFzdVIlq%2FUMhXYURxOcecyo8szsvwpHOPTe0OSPvhOUh7wyBMi2jHIcw0dN8wmt&X-Amz-Signature=5013a5205319de609c48ea8600f9f713d478065f27d7af051bdddeb6af53ba6e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
