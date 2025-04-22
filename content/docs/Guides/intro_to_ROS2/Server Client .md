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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUU4FKS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAGqegOEEKZKB8mwNyGI1M%2F01rp%2FPhAMvUo%2FissRy%2FZKAiBQmHqUEHSil7ZRkkVoeFaZaOP89D6%2FOCiP%2FeJiJ%2FIrDCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM77c6yqH6IRxrt%2FOuKtwDl2OSnfqbYbiqBwUKnA0I4%2FiPsXnnSl6GUmaYEKLQO8Aw3BxXBca0jgOe9evtuLseCB8fGSLXy1epQ1msUEGvCBO%2BmzK9WDsZF5pf0oSIBbfzUURlGwtofqNR6cWlrYAGN2f7ZNODO37O%2FrjvIvF6BQprz4jSVFxicDBVN76w4JRWfRwKl3KgZF3NeNTXJuy%2BwHfOhIBIL73qwa%2FNOmIj7UYdH8Owb%2F4qfJvB4amqIVf1UAS7VA1bligfMabm5o65SlUBbLQtmwjxSXOwwr3%2Fr1gIo130TLfISC0ckNZrDATSApUYrGj3qa9o%2F4sC0pr2B5JXBoHFIRc%2BylL9D08%2BaZvLybc%2BwPp5sxQI6EvSCVAJMss9CUQoftxh2DFEcnyO7XJRPQYbLrJvoMuQq7OhtT19JOHXC36GTeS7zESt05mOPtt97KL%2B5HMIrNJ2%2FUQDZcx8MnKmCFIVJ5Up%2FW5WZ7ZaYOvYfzdT2D4DoSa%2FkItKx06soWKg1GhWXtZ2qbwtFkm%2FnmPsU0lXbkg66%2BCDqeSGX5F4Cc2X8gHgGmVczeXb9jGAk%2FtDq1kPSGpV0O82THWi16AmoH40lKWwiU3oirI%2B4%2B1s0Y1FobBO3DegYHIt9HYEyz%2FnycRO%2Besw8YmcwAY6pgFE0PvvRURPz5ZbK7RThsvm0zRFMI8%2BWJCkX2ToegLjeSfwTvJuPRD3mV7ylVDQiLsslBZrxTKRR5DLcH21a%2Bv15Y%2BKBGFxhnQ0X6c81V0JgO8PMzYkuM7LdgDiBhLRu9%2B7c3Yqy0d0rYL5Of3V1qXn8WiwoMcE2ZT21DuLhlKp63eICXKqh%2FYyfUjwRywgZtfbwuqgxMlLK139TuCVbrLtzFTKzpPx&X-Amz-Signature=537d4ea36093973d122a23e7162120403b83a48f50066acc3321cd3acf6630d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUU4FKS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAGqegOEEKZKB8mwNyGI1M%2F01rp%2FPhAMvUo%2FissRy%2FZKAiBQmHqUEHSil7ZRkkVoeFaZaOP89D6%2FOCiP%2FeJiJ%2FIrDCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM77c6yqH6IRxrt%2FOuKtwDl2OSnfqbYbiqBwUKnA0I4%2FiPsXnnSl6GUmaYEKLQO8Aw3BxXBca0jgOe9evtuLseCB8fGSLXy1epQ1msUEGvCBO%2BmzK9WDsZF5pf0oSIBbfzUURlGwtofqNR6cWlrYAGN2f7ZNODO37O%2FrjvIvF6BQprz4jSVFxicDBVN76w4JRWfRwKl3KgZF3NeNTXJuy%2BwHfOhIBIL73qwa%2FNOmIj7UYdH8Owb%2F4qfJvB4amqIVf1UAS7VA1bligfMabm5o65SlUBbLQtmwjxSXOwwr3%2Fr1gIo130TLfISC0ckNZrDATSApUYrGj3qa9o%2F4sC0pr2B5JXBoHFIRc%2BylL9D08%2BaZvLybc%2BwPp5sxQI6EvSCVAJMss9CUQoftxh2DFEcnyO7XJRPQYbLrJvoMuQq7OhtT19JOHXC36GTeS7zESt05mOPtt97KL%2B5HMIrNJ2%2FUQDZcx8MnKmCFIVJ5Up%2FW5WZ7ZaYOvYfzdT2D4DoSa%2FkItKx06soWKg1GhWXtZ2qbwtFkm%2FnmPsU0lXbkg66%2BCDqeSGX5F4Cc2X8gHgGmVczeXb9jGAk%2FtDq1kPSGpV0O82THWi16AmoH40lKWwiU3oirI%2B4%2B1s0Y1FobBO3DegYHIt9HYEyz%2FnycRO%2Besw8YmcwAY6pgFE0PvvRURPz5ZbK7RThsvm0zRFMI8%2BWJCkX2ToegLjeSfwTvJuPRD3mV7ylVDQiLsslBZrxTKRR5DLcH21a%2Bv15Y%2BKBGFxhnQ0X6c81V0JgO8PMzYkuM7LdgDiBhLRu9%2B7c3Yqy0d0rYL5Of3V1qXn8WiwoMcE2ZT21DuLhlKp63eICXKqh%2FYyfUjwRywgZtfbwuqgxMlLK139TuCVbrLtzFTKzpPx&X-Amz-Signature=d88eac6525e3c2a58c59a173a965bf7f9a87c2598ff19e043559274c997d92e1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUU4FKS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAGqegOEEKZKB8mwNyGI1M%2F01rp%2FPhAMvUo%2FissRy%2FZKAiBQmHqUEHSil7ZRkkVoeFaZaOP89D6%2FOCiP%2FeJiJ%2FIrDCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM77c6yqH6IRxrt%2FOuKtwDl2OSnfqbYbiqBwUKnA0I4%2FiPsXnnSl6GUmaYEKLQO8Aw3BxXBca0jgOe9evtuLseCB8fGSLXy1epQ1msUEGvCBO%2BmzK9WDsZF5pf0oSIBbfzUURlGwtofqNR6cWlrYAGN2f7ZNODO37O%2FrjvIvF6BQprz4jSVFxicDBVN76w4JRWfRwKl3KgZF3NeNTXJuy%2BwHfOhIBIL73qwa%2FNOmIj7UYdH8Owb%2F4qfJvB4amqIVf1UAS7VA1bligfMabm5o65SlUBbLQtmwjxSXOwwr3%2Fr1gIo130TLfISC0ckNZrDATSApUYrGj3qa9o%2F4sC0pr2B5JXBoHFIRc%2BylL9D08%2BaZvLybc%2BwPp5sxQI6EvSCVAJMss9CUQoftxh2DFEcnyO7XJRPQYbLrJvoMuQq7OhtT19JOHXC36GTeS7zESt05mOPtt97KL%2B5HMIrNJ2%2FUQDZcx8MnKmCFIVJ5Up%2FW5WZ7ZaYOvYfzdT2D4DoSa%2FkItKx06soWKg1GhWXtZ2qbwtFkm%2FnmPsU0lXbkg66%2BCDqeSGX5F4Cc2X8gHgGmVczeXb9jGAk%2FtDq1kPSGpV0O82THWi16AmoH40lKWwiU3oirI%2B4%2B1s0Y1FobBO3DegYHIt9HYEyz%2FnycRO%2Besw8YmcwAY6pgFE0PvvRURPz5ZbK7RThsvm0zRFMI8%2BWJCkX2ToegLjeSfwTvJuPRD3mV7ylVDQiLsslBZrxTKRR5DLcH21a%2Bv15Y%2BKBGFxhnQ0X6c81V0JgO8PMzYkuM7LdgDiBhLRu9%2B7c3Yqy0d0rYL5Of3V1qXn8WiwoMcE2ZT21DuLhlKp63eICXKqh%2FYyfUjwRywgZtfbwuqgxMlLK139TuCVbrLtzFTKzpPx&X-Amz-Signature=4fa45f430b4187d4b04e67f23165ee8046b9780c46cbfc6dcd24a75ff9e66a37&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUU4FKS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAGqegOEEKZKB8mwNyGI1M%2F01rp%2FPhAMvUo%2FissRy%2FZKAiBQmHqUEHSil7ZRkkVoeFaZaOP89D6%2FOCiP%2FeJiJ%2FIrDCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM77c6yqH6IRxrt%2FOuKtwDl2OSnfqbYbiqBwUKnA0I4%2FiPsXnnSl6GUmaYEKLQO8Aw3BxXBca0jgOe9evtuLseCB8fGSLXy1epQ1msUEGvCBO%2BmzK9WDsZF5pf0oSIBbfzUURlGwtofqNR6cWlrYAGN2f7ZNODO37O%2FrjvIvF6BQprz4jSVFxicDBVN76w4JRWfRwKl3KgZF3NeNTXJuy%2BwHfOhIBIL73qwa%2FNOmIj7UYdH8Owb%2F4qfJvB4amqIVf1UAS7VA1bligfMabm5o65SlUBbLQtmwjxSXOwwr3%2Fr1gIo130TLfISC0ckNZrDATSApUYrGj3qa9o%2F4sC0pr2B5JXBoHFIRc%2BylL9D08%2BaZvLybc%2BwPp5sxQI6EvSCVAJMss9CUQoftxh2DFEcnyO7XJRPQYbLrJvoMuQq7OhtT19JOHXC36GTeS7zESt05mOPtt97KL%2B5HMIrNJ2%2FUQDZcx8MnKmCFIVJ5Up%2FW5WZ7ZaYOvYfzdT2D4DoSa%2FkItKx06soWKg1GhWXtZ2qbwtFkm%2FnmPsU0lXbkg66%2BCDqeSGX5F4Cc2X8gHgGmVczeXb9jGAk%2FtDq1kPSGpV0O82THWi16AmoH40lKWwiU3oirI%2B4%2B1s0Y1FobBO3DegYHIt9HYEyz%2FnycRO%2Besw8YmcwAY6pgFE0PvvRURPz5ZbK7RThsvm0zRFMI8%2BWJCkX2ToegLjeSfwTvJuPRD3mV7ylVDQiLsslBZrxTKRR5DLcH21a%2Bv15Y%2BKBGFxhnQ0X6c81V0JgO8PMzYkuM7LdgDiBhLRu9%2B7c3Yqy0d0rYL5Of3V1qXn8WiwoMcE2ZT21DuLhlKp63eICXKqh%2FYyfUjwRywgZtfbwuqgxMlLK139TuCVbrLtzFTKzpPx&X-Amz-Signature=618892ff14919998569823fdbe68747246b9ea204b21e18a20dec6cd9d19b3e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUU4FKS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAGqegOEEKZKB8mwNyGI1M%2F01rp%2FPhAMvUo%2FissRy%2FZKAiBQmHqUEHSil7ZRkkVoeFaZaOP89D6%2FOCiP%2FeJiJ%2FIrDCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM77c6yqH6IRxrt%2FOuKtwDl2OSnfqbYbiqBwUKnA0I4%2FiPsXnnSl6GUmaYEKLQO8Aw3BxXBca0jgOe9evtuLseCB8fGSLXy1epQ1msUEGvCBO%2BmzK9WDsZF5pf0oSIBbfzUURlGwtofqNR6cWlrYAGN2f7ZNODO37O%2FrjvIvF6BQprz4jSVFxicDBVN76w4JRWfRwKl3KgZF3NeNTXJuy%2BwHfOhIBIL73qwa%2FNOmIj7UYdH8Owb%2F4qfJvB4amqIVf1UAS7VA1bligfMabm5o65SlUBbLQtmwjxSXOwwr3%2Fr1gIo130TLfISC0ckNZrDATSApUYrGj3qa9o%2F4sC0pr2B5JXBoHFIRc%2BylL9D08%2BaZvLybc%2BwPp5sxQI6EvSCVAJMss9CUQoftxh2DFEcnyO7XJRPQYbLrJvoMuQq7OhtT19JOHXC36GTeS7zESt05mOPtt97KL%2B5HMIrNJ2%2FUQDZcx8MnKmCFIVJ5Up%2FW5WZ7ZaYOvYfzdT2D4DoSa%2FkItKx06soWKg1GhWXtZ2qbwtFkm%2FnmPsU0lXbkg66%2BCDqeSGX5F4Cc2X8gHgGmVczeXb9jGAk%2FtDq1kPSGpV0O82THWi16AmoH40lKWwiU3oirI%2B4%2B1s0Y1FobBO3DegYHIt9HYEyz%2FnycRO%2Besw8YmcwAY6pgFE0PvvRURPz5ZbK7RThsvm0zRFMI8%2BWJCkX2ToegLjeSfwTvJuPRD3mV7ylVDQiLsslBZrxTKRR5DLcH21a%2Bv15Y%2BKBGFxhnQ0X6c81V0JgO8PMzYkuM7LdgDiBhLRu9%2B7c3Yqy0d0rYL5Of3V1qXn8WiwoMcE2ZT21DuLhlKp63eICXKqh%2FYyfUjwRywgZtfbwuqgxMlLK139TuCVbrLtzFTKzpPx&X-Amz-Signature=2b038570d0f3694c5face05b94427fefb0e8f6969a167791d62c48e462bdf572&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
