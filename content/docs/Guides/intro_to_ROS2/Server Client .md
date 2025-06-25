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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQ4QP6X%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCos4DUe2kRCebsVMAO%2BVkztNORponKFknH69ZlW1F5hQIgdj4ggM%2Bh%2BrSBnF9RINSEO3NlZ2K4qZbUWj7d2zUQMy8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHNg6zNFNNHZTv9BJSrcAxUWeXVJo7eLY%2BFJm8I11KKqnS0cS5vWp0V2NN34K%2Bl6a35%2F%2FU9E8hj%2Bbq2ir6xGoU4HmrMzAu2ZyZb7t%2FKPB0mcwcyoh41C3z%2FVLsQY8Bv3U8c%2FL8o%2F%2FtLqkuZY7m82fQ8v%2BZAAPQ5HgeqkMDvr8hG9KkcOK5YXf0AwOcusMOz%2F13cJx3nTVfpHTbbf9e7%2F52ly3wbD7Qd6gnsWUpkzA8h4o1kcOc4GIK7RI5TZwtMyBD%2FjqHmSWGxd9wUjQbXuEk7LLXNzB0PDskdyY4C3SGjNn5f3ImjlwJ3ZhpTsb7SUTZ6ob6Att2U9NkbD7ZVvPl22SNIyapD0dLx820SP%2FBldQ7qFqrKDQmLI1rP5ldQlLIfyM2DbsDklhuSZTGU%2BWQYrUnbuGi%2FhCCTiwreRobAi%2Fh3erRUn%2B0cDT59vcpZNpud7I%2FgPi4Qrd%2FoCnexZZ%2F0avt2i7vImVJbrvfs1Mw%2FDJO1W3Vm4E7UFohICi%2F3A1ZLE64yvD6ajZWUHyJ1s5zZJ9h5x5dzI5Bv3qaAQsQN04XLqoTIYW2uZyi6k9rVqpu5lmc0VENpT7Tq9HCFhpzxwFGmIYW45y8ZG9CupgnRRr4eM2UKXL9ijAt3KFNQVImb7Fo5D0emH%2Fvq0MK7u78IGOqUBEJXQxjhuyAQVE5e9HlEaNBbwFKSVQPASJ51%2FJpO4HIoZkvyvAYt5npoVbXoy4OpUJLqv8LEenLpwX5JZIeM%2BnYF%2FoYHO1KhjnR08itHHS1bhADMmKuQPNqPrBwrAgaqYMDu1fin%2BIzB%2FwKnwitputwg8DNkt4n1ewNK5zX%2F550lS8jkW1eUK0ArzI5SPpF1z%2FUPa6W77gg6PT9K8aXWBki3AQJXT&X-Amz-Signature=df32983b0ef0f28d84c67133af429efe0b6605dbd27402015661c75c8e573d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQ4QP6X%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCos4DUe2kRCebsVMAO%2BVkztNORponKFknH69ZlW1F5hQIgdj4ggM%2Bh%2BrSBnF9RINSEO3NlZ2K4qZbUWj7d2zUQMy8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHNg6zNFNNHZTv9BJSrcAxUWeXVJo7eLY%2BFJm8I11KKqnS0cS5vWp0V2NN34K%2Bl6a35%2F%2FU9E8hj%2Bbq2ir6xGoU4HmrMzAu2ZyZb7t%2FKPB0mcwcyoh41C3z%2FVLsQY8Bv3U8c%2FL8o%2F%2FtLqkuZY7m82fQ8v%2BZAAPQ5HgeqkMDvr8hG9KkcOK5YXf0AwOcusMOz%2F13cJx3nTVfpHTbbf9e7%2F52ly3wbD7Qd6gnsWUpkzA8h4o1kcOc4GIK7RI5TZwtMyBD%2FjqHmSWGxd9wUjQbXuEk7LLXNzB0PDskdyY4C3SGjNn5f3ImjlwJ3ZhpTsb7SUTZ6ob6Att2U9NkbD7ZVvPl22SNIyapD0dLx820SP%2FBldQ7qFqrKDQmLI1rP5ldQlLIfyM2DbsDklhuSZTGU%2BWQYrUnbuGi%2FhCCTiwreRobAi%2Fh3erRUn%2B0cDT59vcpZNpud7I%2FgPi4Qrd%2FoCnexZZ%2F0avt2i7vImVJbrvfs1Mw%2FDJO1W3Vm4E7UFohICi%2F3A1ZLE64yvD6ajZWUHyJ1s5zZJ9h5x5dzI5Bv3qaAQsQN04XLqoTIYW2uZyi6k9rVqpu5lmc0VENpT7Tq9HCFhpzxwFGmIYW45y8ZG9CupgnRRr4eM2UKXL9ijAt3KFNQVImb7Fo5D0emH%2Fvq0MK7u78IGOqUBEJXQxjhuyAQVE5e9HlEaNBbwFKSVQPASJ51%2FJpO4HIoZkvyvAYt5npoVbXoy4OpUJLqv8LEenLpwX5JZIeM%2BnYF%2FoYHO1KhjnR08itHHS1bhADMmKuQPNqPrBwrAgaqYMDu1fin%2BIzB%2FwKnwitputwg8DNkt4n1ewNK5zX%2F550lS8jkW1eUK0ArzI5SPpF1z%2FUPa6W77gg6PT9K8aXWBki3AQJXT&X-Amz-Signature=9cca12ed7c74831f7350676a70c6a2a950250ba2541c2e240abd3a1d1aff6421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQ4QP6X%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCos4DUe2kRCebsVMAO%2BVkztNORponKFknH69ZlW1F5hQIgdj4ggM%2Bh%2BrSBnF9RINSEO3NlZ2K4qZbUWj7d2zUQMy8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHNg6zNFNNHZTv9BJSrcAxUWeXVJo7eLY%2BFJm8I11KKqnS0cS5vWp0V2NN34K%2Bl6a35%2F%2FU9E8hj%2Bbq2ir6xGoU4HmrMzAu2ZyZb7t%2FKPB0mcwcyoh41C3z%2FVLsQY8Bv3U8c%2FL8o%2F%2FtLqkuZY7m82fQ8v%2BZAAPQ5HgeqkMDvr8hG9KkcOK5YXf0AwOcusMOz%2F13cJx3nTVfpHTbbf9e7%2F52ly3wbD7Qd6gnsWUpkzA8h4o1kcOc4GIK7RI5TZwtMyBD%2FjqHmSWGxd9wUjQbXuEk7LLXNzB0PDskdyY4C3SGjNn5f3ImjlwJ3ZhpTsb7SUTZ6ob6Att2U9NkbD7ZVvPl22SNIyapD0dLx820SP%2FBldQ7qFqrKDQmLI1rP5ldQlLIfyM2DbsDklhuSZTGU%2BWQYrUnbuGi%2FhCCTiwreRobAi%2Fh3erRUn%2B0cDT59vcpZNpud7I%2FgPi4Qrd%2FoCnexZZ%2F0avt2i7vImVJbrvfs1Mw%2FDJO1W3Vm4E7UFohICi%2F3A1ZLE64yvD6ajZWUHyJ1s5zZJ9h5x5dzI5Bv3qaAQsQN04XLqoTIYW2uZyi6k9rVqpu5lmc0VENpT7Tq9HCFhpzxwFGmIYW45y8ZG9CupgnRRr4eM2UKXL9ijAt3KFNQVImb7Fo5D0emH%2Fvq0MK7u78IGOqUBEJXQxjhuyAQVE5e9HlEaNBbwFKSVQPASJ51%2FJpO4HIoZkvyvAYt5npoVbXoy4OpUJLqv8LEenLpwX5JZIeM%2BnYF%2FoYHO1KhjnR08itHHS1bhADMmKuQPNqPrBwrAgaqYMDu1fin%2BIzB%2FwKnwitputwg8DNkt4n1ewNK5zX%2F550lS8jkW1eUK0ArzI5SPpF1z%2FUPa6W77gg6PT9K8aXWBki3AQJXT&X-Amz-Signature=e20bda320372ba4d22f608d9fedc13e1ae23b4f793b6d717b9bfaf3f85c6ab8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQ4QP6X%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCos4DUe2kRCebsVMAO%2BVkztNORponKFknH69ZlW1F5hQIgdj4ggM%2Bh%2BrSBnF9RINSEO3NlZ2K4qZbUWj7d2zUQMy8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHNg6zNFNNHZTv9BJSrcAxUWeXVJo7eLY%2BFJm8I11KKqnS0cS5vWp0V2NN34K%2Bl6a35%2F%2FU9E8hj%2Bbq2ir6xGoU4HmrMzAu2ZyZb7t%2FKPB0mcwcyoh41C3z%2FVLsQY8Bv3U8c%2FL8o%2F%2FtLqkuZY7m82fQ8v%2BZAAPQ5HgeqkMDvr8hG9KkcOK5YXf0AwOcusMOz%2F13cJx3nTVfpHTbbf9e7%2F52ly3wbD7Qd6gnsWUpkzA8h4o1kcOc4GIK7RI5TZwtMyBD%2FjqHmSWGxd9wUjQbXuEk7LLXNzB0PDskdyY4C3SGjNn5f3ImjlwJ3ZhpTsb7SUTZ6ob6Att2U9NkbD7ZVvPl22SNIyapD0dLx820SP%2FBldQ7qFqrKDQmLI1rP5ldQlLIfyM2DbsDklhuSZTGU%2BWQYrUnbuGi%2FhCCTiwreRobAi%2Fh3erRUn%2B0cDT59vcpZNpud7I%2FgPi4Qrd%2FoCnexZZ%2F0avt2i7vImVJbrvfs1Mw%2FDJO1W3Vm4E7UFohICi%2F3A1ZLE64yvD6ajZWUHyJ1s5zZJ9h5x5dzI5Bv3qaAQsQN04XLqoTIYW2uZyi6k9rVqpu5lmc0VENpT7Tq9HCFhpzxwFGmIYW45y8ZG9CupgnRRr4eM2UKXL9ijAt3KFNQVImb7Fo5D0emH%2Fvq0MK7u78IGOqUBEJXQxjhuyAQVE5e9HlEaNBbwFKSVQPASJ51%2FJpO4HIoZkvyvAYt5npoVbXoy4OpUJLqv8LEenLpwX5JZIeM%2BnYF%2FoYHO1KhjnR08itHHS1bhADMmKuQPNqPrBwrAgaqYMDu1fin%2BIzB%2FwKnwitputwg8DNkt4n1ewNK5zX%2F550lS8jkW1eUK0ArzI5SPpF1z%2FUPa6W77gg6PT9K8aXWBki3AQJXT&X-Amz-Signature=87d8bde28eaef567c454b8c4f8c469eb6127ba938335a54ee07be0f7730475c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQ4QP6X%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCos4DUe2kRCebsVMAO%2BVkztNORponKFknH69ZlW1F5hQIgdj4ggM%2Bh%2BrSBnF9RINSEO3NlZ2K4qZbUWj7d2zUQMy8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHNg6zNFNNHZTv9BJSrcAxUWeXVJo7eLY%2BFJm8I11KKqnS0cS5vWp0V2NN34K%2Bl6a35%2F%2FU9E8hj%2Bbq2ir6xGoU4HmrMzAu2ZyZb7t%2FKPB0mcwcyoh41C3z%2FVLsQY8Bv3U8c%2FL8o%2F%2FtLqkuZY7m82fQ8v%2BZAAPQ5HgeqkMDvr8hG9KkcOK5YXf0AwOcusMOz%2F13cJx3nTVfpHTbbf9e7%2F52ly3wbD7Qd6gnsWUpkzA8h4o1kcOc4GIK7RI5TZwtMyBD%2FjqHmSWGxd9wUjQbXuEk7LLXNzB0PDskdyY4C3SGjNn5f3ImjlwJ3ZhpTsb7SUTZ6ob6Att2U9NkbD7ZVvPl22SNIyapD0dLx820SP%2FBldQ7qFqrKDQmLI1rP5ldQlLIfyM2DbsDklhuSZTGU%2BWQYrUnbuGi%2FhCCTiwreRobAi%2Fh3erRUn%2B0cDT59vcpZNpud7I%2FgPi4Qrd%2FoCnexZZ%2F0avt2i7vImVJbrvfs1Mw%2FDJO1W3Vm4E7UFohICi%2F3A1ZLE64yvD6ajZWUHyJ1s5zZJ9h5x5dzI5Bv3qaAQsQN04XLqoTIYW2uZyi6k9rVqpu5lmc0VENpT7Tq9HCFhpzxwFGmIYW45y8ZG9CupgnRRr4eM2UKXL9ijAt3KFNQVImb7Fo5D0emH%2Fvq0MK7u78IGOqUBEJXQxjhuyAQVE5e9HlEaNBbwFKSVQPASJ51%2FJpO4HIoZkvyvAYt5npoVbXoy4OpUJLqv8LEenLpwX5JZIeM%2BnYF%2FoYHO1KhjnR08itHHS1bhADMmKuQPNqPrBwrAgaqYMDu1fin%2BIzB%2FwKnwitputwg8DNkt4n1ewNK5zX%2F550lS8jkW1eUK0ArzI5SPpF1z%2FUPa6W77gg6PT9K8aXWBki3AQJXT&X-Amz-Signature=ec40a215fb2180ea061d9a6968ba2cd3898c9326767a5971118eab131e1d7bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
