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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XEH7VK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVhE98beC8SOjXlqNPDdE9CIh47ltgynRyO8%2Bwgitp4AIhAIAEgeT%2F6ikIQYbXUxZrTUPGGpeFSwNmUtdCyrVhaISdKv8DCH0QABoMNjM3NDIzMTgzODA1IgynO87o84WoxTCEuI4q3AOkfBa1TgV9sG2T2dO%2BQAoocJ3GcwCfyVsdRnz4cMjJQ9cm%2BY2i7HZs3473R8UEqPJLkGj3nC7yPEskvnRImbzc3zuGKjlbZAJDdYWbnJ8TRIyfdWPF51xLmq9IoL6D99agr%2FJh%2FF9wDmYj11KGlK%2BUGuMytz%2BAfIFu7i7S78DRmdJx%2FElq0TRKRzlKHIawmwLmOut7BzD9hxK7DhSuSB2d1nNahl6twSYBvh%2BIYTr8N1kghItwCMS%2FG%2BDyW8dJISyXsTGoAXPCgb3whrVYwEWepUJ4tlreWBmXQtjrCvv%2BqOK8QWtRdeGlHKZxVqYUfXrzRS4%2BuR7V1dQSJOGX2XWW%2B%2BUbJiEE1HeoSSgbxn7vs3cjwjF%2F1qbrrgul7sQ6lJajBdUtwjgdl49LWJLd3yc9LEvT3DW5beKUDY9JfTWcthIl8LLCgkJZhF9zLI6BCy0aSDB%2B77T3RjS%2BryOZD0sxZ2jLiGxfDZ0qbd%2FIswiD0SgiEMy6ZNOfwg6YRpXmDysLjH%2F5zjdxMjtpzWvm0fR55CMi7t%2BdL27%2FM23ZXZUmLhdxyoBAmgaFztbNR%2Fl1kBrOUABd%2B4MDBrFO9otdtWWOnyJzcMJeCSanAqVcCZ76cS3ZquNxnhouoeqgWDCx4be%2BBjqkAV%2FaqYsbPSP6Pe%2BSyePxnCJ%2FboqQ%2BJagoZ9I5KZNputJ2wlQ3v%2F%2BCOT9vLZcOQ2JT2pAvJo4WdArAxBbd6Q8QEwrALyjvLZO5AnEYHxzhpcIT0U6nNg2MngEdmEGKrRB4JhFoFs9eZwvV%2Ffzz9W3TVh9FM8RViD78YpBXA2KNbAkdWoQUlimdsa%2BeLotDPgjEiZ5SqSpZk1jLwuI5RuuHQI5nD1V&X-Amz-Signature=5f46564d72e7cdacd2b65442f0c456cf153fba67531472eea2a3911ebb91aeb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XEH7VK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVhE98beC8SOjXlqNPDdE9CIh47ltgynRyO8%2Bwgitp4AIhAIAEgeT%2F6ikIQYbXUxZrTUPGGpeFSwNmUtdCyrVhaISdKv8DCH0QABoMNjM3NDIzMTgzODA1IgynO87o84WoxTCEuI4q3AOkfBa1TgV9sG2T2dO%2BQAoocJ3GcwCfyVsdRnz4cMjJQ9cm%2BY2i7HZs3473R8UEqPJLkGj3nC7yPEskvnRImbzc3zuGKjlbZAJDdYWbnJ8TRIyfdWPF51xLmq9IoL6D99agr%2FJh%2FF9wDmYj11KGlK%2BUGuMytz%2BAfIFu7i7S78DRmdJx%2FElq0TRKRzlKHIawmwLmOut7BzD9hxK7DhSuSB2d1nNahl6twSYBvh%2BIYTr8N1kghItwCMS%2FG%2BDyW8dJISyXsTGoAXPCgb3whrVYwEWepUJ4tlreWBmXQtjrCvv%2BqOK8QWtRdeGlHKZxVqYUfXrzRS4%2BuR7V1dQSJOGX2XWW%2B%2BUbJiEE1HeoSSgbxn7vs3cjwjF%2F1qbrrgul7sQ6lJajBdUtwjgdl49LWJLd3yc9LEvT3DW5beKUDY9JfTWcthIl8LLCgkJZhF9zLI6BCy0aSDB%2B77T3RjS%2BryOZD0sxZ2jLiGxfDZ0qbd%2FIswiD0SgiEMy6ZNOfwg6YRpXmDysLjH%2F5zjdxMjtpzWvm0fR55CMi7t%2BdL27%2FM23ZXZUmLhdxyoBAmgaFztbNR%2Fl1kBrOUABd%2B4MDBrFO9otdtWWOnyJzcMJeCSanAqVcCZ76cS3ZquNxnhouoeqgWDCx4be%2BBjqkAV%2FaqYsbPSP6Pe%2BSyePxnCJ%2FboqQ%2BJagoZ9I5KZNputJ2wlQ3v%2F%2BCOT9vLZcOQ2JT2pAvJo4WdArAxBbd6Q8QEwrALyjvLZO5AnEYHxzhpcIT0U6nNg2MngEdmEGKrRB4JhFoFs9eZwvV%2Ffzz9W3TVh9FM8RViD78YpBXA2KNbAkdWoQUlimdsa%2BeLotDPgjEiZ5SqSpZk1jLwuI5RuuHQI5nD1V&X-Amz-Signature=a47810ed1e4718f7c747bae012c9a4ea1e34bc10b08e5dea264f66e8c3e0f4a2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XEH7VK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVhE98beC8SOjXlqNPDdE9CIh47ltgynRyO8%2Bwgitp4AIhAIAEgeT%2F6ikIQYbXUxZrTUPGGpeFSwNmUtdCyrVhaISdKv8DCH0QABoMNjM3NDIzMTgzODA1IgynO87o84WoxTCEuI4q3AOkfBa1TgV9sG2T2dO%2BQAoocJ3GcwCfyVsdRnz4cMjJQ9cm%2BY2i7HZs3473R8UEqPJLkGj3nC7yPEskvnRImbzc3zuGKjlbZAJDdYWbnJ8TRIyfdWPF51xLmq9IoL6D99agr%2FJh%2FF9wDmYj11KGlK%2BUGuMytz%2BAfIFu7i7S78DRmdJx%2FElq0TRKRzlKHIawmwLmOut7BzD9hxK7DhSuSB2d1nNahl6twSYBvh%2BIYTr8N1kghItwCMS%2FG%2BDyW8dJISyXsTGoAXPCgb3whrVYwEWepUJ4tlreWBmXQtjrCvv%2BqOK8QWtRdeGlHKZxVqYUfXrzRS4%2BuR7V1dQSJOGX2XWW%2B%2BUbJiEE1HeoSSgbxn7vs3cjwjF%2F1qbrrgul7sQ6lJajBdUtwjgdl49LWJLd3yc9LEvT3DW5beKUDY9JfTWcthIl8LLCgkJZhF9zLI6BCy0aSDB%2B77T3RjS%2BryOZD0sxZ2jLiGxfDZ0qbd%2FIswiD0SgiEMy6ZNOfwg6YRpXmDysLjH%2F5zjdxMjtpzWvm0fR55CMi7t%2BdL27%2FM23ZXZUmLhdxyoBAmgaFztbNR%2Fl1kBrOUABd%2B4MDBrFO9otdtWWOnyJzcMJeCSanAqVcCZ76cS3ZquNxnhouoeqgWDCx4be%2BBjqkAV%2FaqYsbPSP6Pe%2BSyePxnCJ%2FboqQ%2BJagoZ9I5KZNputJ2wlQ3v%2F%2BCOT9vLZcOQ2JT2pAvJo4WdArAxBbd6Q8QEwrALyjvLZO5AnEYHxzhpcIT0U6nNg2MngEdmEGKrRB4JhFoFs9eZwvV%2Ffzz9W3TVh9FM8RViD78YpBXA2KNbAkdWoQUlimdsa%2BeLotDPgjEiZ5SqSpZk1jLwuI5RuuHQI5nD1V&X-Amz-Signature=9c82a26c1a54f94cae25cc42c8cba07a8c99c8f0855caa155476ae66cf404d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XEH7VK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVhE98beC8SOjXlqNPDdE9CIh47ltgynRyO8%2Bwgitp4AIhAIAEgeT%2F6ikIQYbXUxZrTUPGGpeFSwNmUtdCyrVhaISdKv8DCH0QABoMNjM3NDIzMTgzODA1IgynO87o84WoxTCEuI4q3AOkfBa1TgV9sG2T2dO%2BQAoocJ3GcwCfyVsdRnz4cMjJQ9cm%2BY2i7HZs3473R8UEqPJLkGj3nC7yPEskvnRImbzc3zuGKjlbZAJDdYWbnJ8TRIyfdWPF51xLmq9IoL6D99agr%2FJh%2FF9wDmYj11KGlK%2BUGuMytz%2BAfIFu7i7S78DRmdJx%2FElq0TRKRzlKHIawmwLmOut7BzD9hxK7DhSuSB2d1nNahl6twSYBvh%2BIYTr8N1kghItwCMS%2FG%2BDyW8dJISyXsTGoAXPCgb3whrVYwEWepUJ4tlreWBmXQtjrCvv%2BqOK8QWtRdeGlHKZxVqYUfXrzRS4%2BuR7V1dQSJOGX2XWW%2B%2BUbJiEE1HeoSSgbxn7vs3cjwjF%2F1qbrrgul7sQ6lJajBdUtwjgdl49LWJLd3yc9LEvT3DW5beKUDY9JfTWcthIl8LLCgkJZhF9zLI6BCy0aSDB%2B77T3RjS%2BryOZD0sxZ2jLiGxfDZ0qbd%2FIswiD0SgiEMy6ZNOfwg6YRpXmDysLjH%2F5zjdxMjtpzWvm0fR55CMi7t%2BdL27%2FM23ZXZUmLhdxyoBAmgaFztbNR%2Fl1kBrOUABd%2B4MDBrFO9otdtWWOnyJzcMJeCSanAqVcCZ76cS3ZquNxnhouoeqgWDCx4be%2BBjqkAV%2FaqYsbPSP6Pe%2BSyePxnCJ%2FboqQ%2BJagoZ9I5KZNputJ2wlQ3v%2F%2BCOT9vLZcOQ2JT2pAvJo4WdArAxBbd6Q8QEwrALyjvLZO5AnEYHxzhpcIT0U6nNg2MngEdmEGKrRB4JhFoFs9eZwvV%2Ffzz9W3TVh9FM8RViD78YpBXA2KNbAkdWoQUlimdsa%2BeLotDPgjEiZ5SqSpZk1jLwuI5RuuHQI5nD1V&X-Amz-Signature=40875b34614255a91433d7d742d803c4eb523de3be1947c2cadf8677b28b0f61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XEH7VK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVhE98beC8SOjXlqNPDdE9CIh47ltgynRyO8%2Bwgitp4AIhAIAEgeT%2F6ikIQYbXUxZrTUPGGpeFSwNmUtdCyrVhaISdKv8DCH0QABoMNjM3NDIzMTgzODA1IgynO87o84WoxTCEuI4q3AOkfBa1TgV9sG2T2dO%2BQAoocJ3GcwCfyVsdRnz4cMjJQ9cm%2BY2i7HZs3473R8UEqPJLkGj3nC7yPEskvnRImbzc3zuGKjlbZAJDdYWbnJ8TRIyfdWPF51xLmq9IoL6D99agr%2FJh%2FF9wDmYj11KGlK%2BUGuMytz%2BAfIFu7i7S78DRmdJx%2FElq0TRKRzlKHIawmwLmOut7BzD9hxK7DhSuSB2d1nNahl6twSYBvh%2BIYTr8N1kghItwCMS%2FG%2BDyW8dJISyXsTGoAXPCgb3whrVYwEWepUJ4tlreWBmXQtjrCvv%2BqOK8QWtRdeGlHKZxVqYUfXrzRS4%2BuR7V1dQSJOGX2XWW%2B%2BUbJiEE1HeoSSgbxn7vs3cjwjF%2F1qbrrgul7sQ6lJajBdUtwjgdl49LWJLd3yc9LEvT3DW5beKUDY9JfTWcthIl8LLCgkJZhF9zLI6BCy0aSDB%2B77T3RjS%2BryOZD0sxZ2jLiGxfDZ0qbd%2FIswiD0SgiEMy6ZNOfwg6YRpXmDysLjH%2F5zjdxMjtpzWvm0fR55CMi7t%2BdL27%2FM23ZXZUmLhdxyoBAmgaFztbNR%2Fl1kBrOUABd%2B4MDBrFO9otdtWWOnyJzcMJeCSanAqVcCZ76cS3ZquNxnhouoeqgWDCx4be%2BBjqkAV%2FaqYsbPSP6Pe%2BSyePxnCJ%2FboqQ%2BJagoZ9I5KZNputJ2wlQ3v%2F%2BCOT9vLZcOQ2JT2pAvJo4WdArAxBbd6Q8QEwrALyjvLZO5AnEYHxzhpcIT0U6nNg2MngEdmEGKrRB4JhFoFs9eZwvV%2Ffzz9W3TVh9FM8RViD78YpBXA2KNbAkdWoQUlimdsa%2BeLotDPgjEiZ5SqSpZk1jLwuI5RuuHQI5nD1V&X-Amz-Signature=299db79f41b6d4024afce843765ceaf8c99b366f536e259610cdf74268e9983b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
