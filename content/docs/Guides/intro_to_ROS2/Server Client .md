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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4UOOM4Y%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMH9DrT2LP8liDd2rxuNxN8ILK%2FNV0uDhZvgFe%2BjWhrgIgfPUhvry3JkHMcusyAa9rLPJ6mJuZPLyzWMM8rKPCzi4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDMh7NCTzNSQhL84ircAx4A5txrIZqtHHBQ13Y699%2FOn9gVPnz6OIQzg8cmWcyDZHkd5%2BM8o3DWD%2Fjp%2BkycQF%2BWtQlG%2BjqW31SSJVk5swzusrQc6uibUdbRA88aByhQVfYhycNepM93pMypRbgj%2FDADUJhi6ebrCnzqUO6qbTWTT%2Fy2FoSvzxsz56MNi05kdeLhmqFcLYrkwf1AhoUYfjCwHlvFQ%2BD4dy%2BWXt1uxRZrstgjklRzHjbNYbHfTyOwkZ80QNye20Q9D1AqEx7U7wd8qI6cEOETBXWLYeMZF6LNA5%2F7nj5xmmRZxXsP7bfij8MIisyXBr95b35Z%2Fx%2BcKZMf3Fs4xoeMHVqYt33W0ky1cQwJw9RogpC%2FKzHbF1Mn%2F7c7%2BjwRrPt0it4BGLeuXIvQC9kT%2FLJ9knLxmgM%2FEGHQaYUmAV3bi%2BwaP0LbchFsR5iTv1PpqBqIXoMvxa8GFJQ7lgjFR2qBtfDgsL%2FVR0Azswk89VT04jLUSbi4Kak2SUnudB0cmKaOdAJ%2BAlxZRJkgi4M%2FA3LLu2eez%2FAo66Oco%2BuqBGJVsE1k9j3ZhhyrhlmoLncOxhP2SonztDq3ecbR74mKYCos5jprpmA18OXJzQTh9nQv9M5BNO8KXqzO1d5fViUjWL539l23MLPLsMQGOqUB5BkA08%2BiZNqnZiphUdUrbQSvy6tGz7n7MJTB76lyYAJnWIs%2BAyP2y3hgr8%2BntN%2BNFZUX%2BBzJ4e5s1EtrboIEH%2FVdpP2X2jV49b9BXy4Kg3cM8VDyEzHji1S2u5Z8XAWeB9WFnjA%2FVyC6RmcGcs49fSFBcz1%2BVzPTWVMMkHefIahVLsPL8hiFLrASWENPcENt8rVoQh7ENrmo458FWa8lyfc7YUk6&X-Amz-Signature=86f6994a9bb46a00f8b3000ad5a87f9deed3191351c9428eb71106595b125477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4UOOM4Y%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMH9DrT2LP8liDd2rxuNxN8ILK%2FNV0uDhZvgFe%2BjWhrgIgfPUhvry3JkHMcusyAa9rLPJ6mJuZPLyzWMM8rKPCzi4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDMh7NCTzNSQhL84ircAx4A5txrIZqtHHBQ13Y699%2FOn9gVPnz6OIQzg8cmWcyDZHkd5%2BM8o3DWD%2Fjp%2BkycQF%2BWtQlG%2BjqW31SSJVk5swzusrQc6uibUdbRA88aByhQVfYhycNepM93pMypRbgj%2FDADUJhi6ebrCnzqUO6qbTWTT%2Fy2FoSvzxsz56MNi05kdeLhmqFcLYrkwf1AhoUYfjCwHlvFQ%2BD4dy%2BWXt1uxRZrstgjklRzHjbNYbHfTyOwkZ80QNye20Q9D1AqEx7U7wd8qI6cEOETBXWLYeMZF6LNA5%2F7nj5xmmRZxXsP7bfij8MIisyXBr95b35Z%2Fx%2BcKZMf3Fs4xoeMHVqYt33W0ky1cQwJw9RogpC%2FKzHbF1Mn%2F7c7%2BjwRrPt0it4BGLeuXIvQC9kT%2FLJ9knLxmgM%2FEGHQaYUmAV3bi%2BwaP0LbchFsR5iTv1PpqBqIXoMvxa8GFJQ7lgjFR2qBtfDgsL%2FVR0Azswk89VT04jLUSbi4Kak2SUnudB0cmKaOdAJ%2BAlxZRJkgi4M%2FA3LLu2eez%2FAo66Oco%2BuqBGJVsE1k9j3ZhhyrhlmoLncOxhP2SonztDq3ecbR74mKYCos5jprpmA18OXJzQTh9nQv9M5BNO8KXqzO1d5fViUjWL539l23MLPLsMQGOqUB5BkA08%2BiZNqnZiphUdUrbQSvy6tGz7n7MJTB76lyYAJnWIs%2BAyP2y3hgr8%2BntN%2BNFZUX%2BBzJ4e5s1EtrboIEH%2FVdpP2X2jV49b9BXy4Kg3cM8VDyEzHji1S2u5Z8XAWeB9WFnjA%2FVyC6RmcGcs49fSFBcz1%2BVzPTWVMMkHefIahVLsPL8hiFLrASWENPcENt8rVoQh7ENrmo458FWa8lyfc7YUk6&X-Amz-Signature=43f053f09c6e9881460e732b59a2dfdbf7c3b10e6e7460f97e948de98b19a1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4UOOM4Y%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMH9DrT2LP8liDd2rxuNxN8ILK%2FNV0uDhZvgFe%2BjWhrgIgfPUhvry3JkHMcusyAa9rLPJ6mJuZPLyzWMM8rKPCzi4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDMh7NCTzNSQhL84ircAx4A5txrIZqtHHBQ13Y699%2FOn9gVPnz6OIQzg8cmWcyDZHkd5%2BM8o3DWD%2Fjp%2BkycQF%2BWtQlG%2BjqW31SSJVk5swzusrQc6uibUdbRA88aByhQVfYhycNepM93pMypRbgj%2FDADUJhi6ebrCnzqUO6qbTWTT%2Fy2FoSvzxsz56MNi05kdeLhmqFcLYrkwf1AhoUYfjCwHlvFQ%2BD4dy%2BWXt1uxRZrstgjklRzHjbNYbHfTyOwkZ80QNye20Q9D1AqEx7U7wd8qI6cEOETBXWLYeMZF6LNA5%2F7nj5xmmRZxXsP7bfij8MIisyXBr95b35Z%2Fx%2BcKZMf3Fs4xoeMHVqYt33W0ky1cQwJw9RogpC%2FKzHbF1Mn%2F7c7%2BjwRrPt0it4BGLeuXIvQC9kT%2FLJ9knLxmgM%2FEGHQaYUmAV3bi%2BwaP0LbchFsR5iTv1PpqBqIXoMvxa8GFJQ7lgjFR2qBtfDgsL%2FVR0Azswk89VT04jLUSbi4Kak2SUnudB0cmKaOdAJ%2BAlxZRJkgi4M%2FA3LLu2eez%2FAo66Oco%2BuqBGJVsE1k9j3ZhhyrhlmoLncOxhP2SonztDq3ecbR74mKYCos5jprpmA18OXJzQTh9nQv9M5BNO8KXqzO1d5fViUjWL539l23MLPLsMQGOqUB5BkA08%2BiZNqnZiphUdUrbQSvy6tGz7n7MJTB76lyYAJnWIs%2BAyP2y3hgr8%2BntN%2BNFZUX%2BBzJ4e5s1EtrboIEH%2FVdpP2X2jV49b9BXy4Kg3cM8VDyEzHji1S2u5Z8XAWeB9WFnjA%2FVyC6RmcGcs49fSFBcz1%2BVzPTWVMMkHefIahVLsPL8hiFLrASWENPcENt8rVoQh7ENrmo458FWa8lyfc7YUk6&X-Amz-Signature=648fc3d1f707ff94c5457868793aa5f1992b3129e1dab39a75d67fb5f530df98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4UOOM4Y%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMH9DrT2LP8liDd2rxuNxN8ILK%2FNV0uDhZvgFe%2BjWhrgIgfPUhvry3JkHMcusyAa9rLPJ6mJuZPLyzWMM8rKPCzi4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDMh7NCTzNSQhL84ircAx4A5txrIZqtHHBQ13Y699%2FOn9gVPnz6OIQzg8cmWcyDZHkd5%2BM8o3DWD%2Fjp%2BkycQF%2BWtQlG%2BjqW31SSJVk5swzusrQc6uibUdbRA88aByhQVfYhycNepM93pMypRbgj%2FDADUJhi6ebrCnzqUO6qbTWTT%2Fy2FoSvzxsz56MNi05kdeLhmqFcLYrkwf1AhoUYfjCwHlvFQ%2BD4dy%2BWXt1uxRZrstgjklRzHjbNYbHfTyOwkZ80QNye20Q9D1AqEx7U7wd8qI6cEOETBXWLYeMZF6LNA5%2F7nj5xmmRZxXsP7bfij8MIisyXBr95b35Z%2Fx%2BcKZMf3Fs4xoeMHVqYt33W0ky1cQwJw9RogpC%2FKzHbF1Mn%2F7c7%2BjwRrPt0it4BGLeuXIvQC9kT%2FLJ9knLxmgM%2FEGHQaYUmAV3bi%2BwaP0LbchFsR5iTv1PpqBqIXoMvxa8GFJQ7lgjFR2qBtfDgsL%2FVR0Azswk89VT04jLUSbi4Kak2SUnudB0cmKaOdAJ%2BAlxZRJkgi4M%2FA3LLu2eez%2FAo66Oco%2BuqBGJVsE1k9j3ZhhyrhlmoLncOxhP2SonztDq3ecbR74mKYCos5jprpmA18OXJzQTh9nQv9M5BNO8KXqzO1d5fViUjWL539l23MLPLsMQGOqUB5BkA08%2BiZNqnZiphUdUrbQSvy6tGz7n7MJTB76lyYAJnWIs%2BAyP2y3hgr8%2BntN%2BNFZUX%2BBzJ4e5s1EtrboIEH%2FVdpP2X2jV49b9BXy4Kg3cM8VDyEzHji1S2u5Z8XAWeB9WFnjA%2FVyC6RmcGcs49fSFBcz1%2BVzPTWVMMkHefIahVLsPL8hiFLrASWENPcENt8rVoQh7ENrmo458FWa8lyfc7YUk6&X-Amz-Signature=91a72a4e2facb1070be38e9cb972dc8a1da07bafbdeee51b87041dd96205f0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4UOOM4Y%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMH9DrT2LP8liDd2rxuNxN8ILK%2FNV0uDhZvgFe%2BjWhrgIgfPUhvry3JkHMcusyAa9rLPJ6mJuZPLyzWMM8rKPCzi4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDMh7NCTzNSQhL84ircAx4A5txrIZqtHHBQ13Y699%2FOn9gVPnz6OIQzg8cmWcyDZHkd5%2BM8o3DWD%2Fjp%2BkycQF%2BWtQlG%2BjqW31SSJVk5swzusrQc6uibUdbRA88aByhQVfYhycNepM93pMypRbgj%2FDADUJhi6ebrCnzqUO6qbTWTT%2Fy2FoSvzxsz56MNi05kdeLhmqFcLYrkwf1AhoUYfjCwHlvFQ%2BD4dy%2BWXt1uxRZrstgjklRzHjbNYbHfTyOwkZ80QNye20Q9D1AqEx7U7wd8qI6cEOETBXWLYeMZF6LNA5%2F7nj5xmmRZxXsP7bfij8MIisyXBr95b35Z%2Fx%2BcKZMf3Fs4xoeMHVqYt33W0ky1cQwJw9RogpC%2FKzHbF1Mn%2F7c7%2BjwRrPt0it4BGLeuXIvQC9kT%2FLJ9knLxmgM%2FEGHQaYUmAV3bi%2BwaP0LbchFsR5iTv1PpqBqIXoMvxa8GFJQ7lgjFR2qBtfDgsL%2FVR0Azswk89VT04jLUSbi4Kak2SUnudB0cmKaOdAJ%2BAlxZRJkgi4M%2FA3LLu2eez%2FAo66Oco%2BuqBGJVsE1k9j3ZhhyrhlmoLncOxhP2SonztDq3ecbR74mKYCos5jprpmA18OXJzQTh9nQv9M5BNO8KXqzO1d5fViUjWL539l23MLPLsMQGOqUB5BkA08%2BiZNqnZiphUdUrbQSvy6tGz7n7MJTB76lyYAJnWIs%2BAyP2y3hgr8%2BntN%2BNFZUX%2BBzJ4e5s1EtrboIEH%2FVdpP2X2jV49b9BXy4Kg3cM8VDyEzHji1S2u5Z8XAWeB9WFnjA%2FVyC6RmcGcs49fSFBcz1%2BVzPTWVMMkHefIahVLsPL8hiFLrASWENPcENt8rVoQh7ENrmo458FWa8lyfc7YUk6&X-Amz-Signature=dfb9549f27b58c8cdb3e7487ffa7c22302e596983a8105f1b939faa1470593ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
