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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YA5464A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE6UyNR7ogO%2BhCJx4%2FkhgXoO4T6n8H1Z6UAz8N2BqISGAiEAms%2BY6cMMVFKSKKal6qHoQZpTLLgnukuLxHgf0NVjWRQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1%2BUqu0jBMXic6L1SrcA%2F1OrCy1IID3GOf7gKZlcAPfuesv4zMeNujFt6NJ8BUeeQJmMHQbH45Jj9Ty318BmKbuWRTL%2FUULGk9NRAMgR5MqYyMPX7HVwWdUpa%2FkOzVxyYNnExLvyAzT67a5AXYwgRRw1xaCksr%2F12UZyUxFaVGR%2Fq4GA8d1JKPqRvBmMK8UYWN2dtbf4eRrrVQWeGd1VFyeQQe3ZppGTS%2F8WY6SyrY8Xvs3koI%2FEDQlQh9DE2FZZ7N9iBh0WlgANLh%2B0hu%2B81nyu2AbqKlymMXknxaW5ISEjuo9Yz6XVK1JUTT5G6uuVqR55Z3e8K3hk791rRh4Xtr%2FlXoawKU2cpA%2BGehYla5qQ99t5mVY2SS8qK7mekbyqVHmDYWWQkOCPIYOQ5fUVPpEBfAeP5dnQruLQqSaDuJ5UBy4CwH6d%2FGfgn5A%2FLelOsy2jvx0bpCXhimaYua%2F6MZ5ISQ9lnrKlQAUxF86a19ltz8948EfghMOZcdKeUze1yTiM0BDhIJiEpCASUVRaToIRShQ4NldHBif5e7fK5dezH3NJu3Pxpj1tGdfovHuAQfNEj43TILBRH5iUn8QP9PRSyTufjD8NZ8Prvf0Ikqc1fEXg2jwXiPd2zk7693rq68QOj%2BvZkUe8H69MKeF1MMGOqUBgZA6p%2B5%2Bx5ae8Q0Ewd7mU4D7zkjdrinHrLRy%2FYHni%2ByP6M71hU9Wg9sD1sMv3wJ9GIB7ITUhM8RRWjrgXE69Bkbtt1C95%2BzhdzYGAahxsQ1jHCF0byUAPhjAIltx2sb1cqk%2BfznWmRQsJxqmif%2B6Y5ouAwkayscZgPxNPd%2FUWD%2F4LuK0xbCaYLbztsL0lWIO7QeQg4w0gZDyU2GGFdqSay4r4fuJ&X-Amz-Signature=8f14bc6f1c46c9031c25d34126901a598778ccbd9e66c29aa84e2920bfe2efe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YA5464A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE6UyNR7ogO%2BhCJx4%2FkhgXoO4T6n8H1Z6UAz8N2BqISGAiEAms%2BY6cMMVFKSKKal6qHoQZpTLLgnukuLxHgf0NVjWRQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1%2BUqu0jBMXic6L1SrcA%2F1OrCy1IID3GOf7gKZlcAPfuesv4zMeNujFt6NJ8BUeeQJmMHQbH45Jj9Ty318BmKbuWRTL%2FUULGk9NRAMgR5MqYyMPX7HVwWdUpa%2FkOzVxyYNnExLvyAzT67a5AXYwgRRw1xaCksr%2F12UZyUxFaVGR%2Fq4GA8d1JKPqRvBmMK8UYWN2dtbf4eRrrVQWeGd1VFyeQQe3ZppGTS%2F8WY6SyrY8Xvs3koI%2FEDQlQh9DE2FZZ7N9iBh0WlgANLh%2B0hu%2B81nyu2AbqKlymMXknxaW5ISEjuo9Yz6XVK1JUTT5G6uuVqR55Z3e8K3hk791rRh4Xtr%2FlXoawKU2cpA%2BGehYla5qQ99t5mVY2SS8qK7mekbyqVHmDYWWQkOCPIYOQ5fUVPpEBfAeP5dnQruLQqSaDuJ5UBy4CwH6d%2FGfgn5A%2FLelOsy2jvx0bpCXhimaYua%2F6MZ5ISQ9lnrKlQAUxF86a19ltz8948EfghMOZcdKeUze1yTiM0BDhIJiEpCASUVRaToIRShQ4NldHBif5e7fK5dezH3NJu3Pxpj1tGdfovHuAQfNEj43TILBRH5iUn8QP9PRSyTufjD8NZ8Prvf0Ikqc1fEXg2jwXiPd2zk7693rq68QOj%2BvZkUe8H69MKeF1MMGOqUBgZA6p%2B5%2Bx5ae8Q0Ewd7mU4D7zkjdrinHrLRy%2FYHni%2ByP6M71hU9Wg9sD1sMv3wJ9GIB7ITUhM8RRWjrgXE69Bkbtt1C95%2BzhdzYGAahxsQ1jHCF0byUAPhjAIltx2sb1cqk%2BfznWmRQsJxqmif%2B6Y5ouAwkayscZgPxNPd%2FUWD%2F4LuK0xbCaYLbztsL0lWIO7QeQg4w0gZDyU2GGFdqSay4r4fuJ&X-Amz-Signature=e2e5ef2f7136ca76e24321b993c863c577764e288147ff97e8bf052e96ac3c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YA5464A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE6UyNR7ogO%2BhCJx4%2FkhgXoO4T6n8H1Z6UAz8N2BqISGAiEAms%2BY6cMMVFKSKKal6qHoQZpTLLgnukuLxHgf0NVjWRQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1%2BUqu0jBMXic6L1SrcA%2F1OrCy1IID3GOf7gKZlcAPfuesv4zMeNujFt6NJ8BUeeQJmMHQbH45Jj9Ty318BmKbuWRTL%2FUULGk9NRAMgR5MqYyMPX7HVwWdUpa%2FkOzVxyYNnExLvyAzT67a5AXYwgRRw1xaCksr%2F12UZyUxFaVGR%2Fq4GA8d1JKPqRvBmMK8UYWN2dtbf4eRrrVQWeGd1VFyeQQe3ZppGTS%2F8WY6SyrY8Xvs3koI%2FEDQlQh9DE2FZZ7N9iBh0WlgANLh%2B0hu%2B81nyu2AbqKlymMXknxaW5ISEjuo9Yz6XVK1JUTT5G6uuVqR55Z3e8K3hk791rRh4Xtr%2FlXoawKU2cpA%2BGehYla5qQ99t5mVY2SS8qK7mekbyqVHmDYWWQkOCPIYOQ5fUVPpEBfAeP5dnQruLQqSaDuJ5UBy4CwH6d%2FGfgn5A%2FLelOsy2jvx0bpCXhimaYua%2F6MZ5ISQ9lnrKlQAUxF86a19ltz8948EfghMOZcdKeUze1yTiM0BDhIJiEpCASUVRaToIRShQ4NldHBif5e7fK5dezH3NJu3Pxpj1tGdfovHuAQfNEj43TILBRH5iUn8QP9PRSyTufjD8NZ8Prvf0Ikqc1fEXg2jwXiPd2zk7693rq68QOj%2BvZkUe8H69MKeF1MMGOqUBgZA6p%2B5%2Bx5ae8Q0Ewd7mU4D7zkjdrinHrLRy%2FYHni%2ByP6M71hU9Wg9sD1sMv3wJ9GIB7ITUhM8RRWjrgXE69Bkbtt1C95%2BzhdzYGAahxsQ1jHCF0byUAPhjAIltx2sb1cqk%2BfznWmRQsJxqmif%2B6Y5ouAwkayscZgPxNPd%2FUWD%2F4LuK0xbCaYLbztsL0lWIO7QeQg4w0gZDyU2GGFdqSay4r4fuJ&X-Amz-Signature=d99e9fa5ee1a9a80df8e7bbc872a1e24e3081be904bd2b6d91ee2f210bd22e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YA5464A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE6UyNR7ogO%2BhCJx4%2FkhgXoO4T6n8H1Z6UAz8N2BqISGAiEAms%2BY6cMMVFKSKKal6qHoQZpTLLgnukuLxHgf0NVjWRQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1%2BUqu0jBMXic6L1SrcA%2F1OrCy1IID3GOf7gKZlcAPfuesv4zMeNujFt6NJ8BUeeQJmMHQbH45Jj9Ty318BmKbuWRTL%2FUULGk9NRAMgR5MqYyMPX7HVwWdUpa%2FkOzVxyYNnExLvyAzT67a5AXYwgRRw1xaCksr%2F12UZyUxFaVGR%2Fq4GA8d1JKPqRvBmMK8UYWN2dtbf4eRrrVQWeGd1VFyeQQe3ZppGTS%2F8WY6SyrY8Xvs3koI%2FEDQlQh9DE2FZZ7N9iBh0WlgANLh%2B0hu%2B81nyu2AbqKlymMXknxaW5ISEjuo9Yz6XVK1JUTT5G6uuVqR55Z3e8K3hk791rRh4Xtr%2FlXoawKU2cpA%2BGehYla5qQ99t5mVY2SS8qK7mekbyqVHmDYWWQkOCPIYOQ5fUVPpEBfAeP5dnQruLQqSaDuJ5UBy4CwH6d%2FGfgn5A%2FLelOsy2jvx0bpCXhimaYua%2F6MZ5ISQ9lnrKlQAUxF86a19ltz8948EfghMOZcdKeUze1yTiM0BDhIJiEpCASUVRaToIRShQ4NldHBif5e7fK5dezH3NJu3Pxpj1tGdfovHuAQfNEj43TILBRH5iUn8QP9PRSyTufjD8NZ8Prvf0Ikqc1fEXg2jwXiPd2zk7693rq68QOj%2BvZkUe8H69MKeF1MMGOqUBgZA6p%2B5%2Bx5ae8Q0Ewd7mU4D7zkjdrinHrLRy%2FYHni%2ByP6M71hU9Wg9sD1sMv3wJ9GIB7ITUhM8RRWjrgXE69Bkbtt1C95%2BzhdzYGAahxsQ1jHCF0byUAPhjAIltx2sb1cqk%2BfznWmRQsJxqmif%2B6Y5ouAwkayscZgPxNPd%2FUWD%2F4LuK0xbCaYLbztsL0lWIO7QeQg4w0gZDyU2GGFdqSay4r4fuJ&X-Amz-Signature=95789dfa8d4f83462169d04addf13269d1051ad6b5c675063604dc4a4790b1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YA5464A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE6UyNR7ogO%2BhCJx4%2FkhgXoO4T6n8H1Z6UAz8N2BqISGAiEAms%2BY6cMMVFKSKKal6qHoQZpTLLgnukuLxHgf0NVjWRQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1%2BUqu0jBMXic6L1SrcA%2F1OrCy1IID3GOf7gKZlcAPfuesv4zMeNujFt6NJ8BUeeQJmMHQbH45Jj9Ty318BmKbuWRTL%2FUULGk9NRAMgR5MqYyMPX7HVwWdUpa%2FkOzVxyYNnExLvyAzT67a5AXYwgRRw1xaCksr%2F12UZyUxFaVGR%2Fq4GA8d1JKPqRvBmMK8UYWN2dtbf4eRrrVQWeGd1VFyeQQe3ZppGTS%2F8WY6SyrY8Xvs3koI%2FEDQlQh9DE2FZZ7N9iBh0WlgANLh%2B0hu%2B81nyu2AbqKlymMXknxaW5ISEjuo9Yz6XVK1JUTT5G6uuVqR55Z3e8K3hk791rRh4Xtr%2FlXoawKU2cpA%2BGehYla5qQ99t5mVY2SS8qK7mekbyqVHmDYWWQkOCPIYOQ5fUVPpEBfAeP5dnQruLQqSaDuJ5UBy4CwH6d%2FGfgn5A%2FLelOsy2jvx0bpCXhimaYua%2F6MZ5ISQ9lnrKlQAUxF86a19ltz8948EfghMOZcdKeUze1yTiM0BDhIJiEpCASUVRaToIRShQ4NldHBif5e7fK5dezH3NJu3Pxpj1tGdfovHuAQfNEj43TILBRH5iUn8QP9PRSyTufjD8NZ8Prvf0Ikqc1fEXg2jwXiPd2zk7693rq68QOj%2BvZkUe8H69MKeF1MMGOqUBgZA6p%2B5%2Bx5ae8Q0Ewd7mU4D7zkjdrinHrLRy%2FYHni%2ByP6M71hU9Wg9sD1sMv3wJ9GIB7ITUhM8RRWjrgXE69Bkbtt1C95%2BzhdzYGAahxsQ1jHCF0byUAPhjAIltx2sb1cqk%2BfznWmRQsJxqmif%2B6Y5ouAwkayscZgPxNPd%2FUWD%2F4LuK0xbCaYLbztsL0lWIO7QeQg4w0gZDyU2GGFdqSay4r4fuJ&X-Amz-Signature=36fe21f4cd12aa39d91fba93efd19fd5009af3344edb0e1e7078da660b028723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
