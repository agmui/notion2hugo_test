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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCC5MTF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGrNsAic4d0bn5K3YcVifFh8VHHS6HXkAIDDv8kafzS8AiAw4BCXkJQR0scKpvmEnNpb6LQ0fk3hGwp9kgKT5qvhPiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuk1bjJ9tJe%2F0xyq6KtwDYCC14Xv9vtw25hWJdg%2FkjSs7m2mkXHuhq3SvgXzu6jNQHodzpUZ7vNe9%2Fmc5DIrYrxcWlKRa7zrRUQghdDxhlvbmLtfzAtH1WY4FEW39JP7WyLFNnxN9lU2GmX1GPAOeSH45KNCN%2FGfyBHyM%2BS8dGRmazKq1XSlg1DYmt6Dlu7UYS0mmH5%2BAJcldIgzpbZWhc5pD70nEwC46UnL%2Bh7p4OlS9nr04bFK8ZsZ50QBFfKFnJkzmhq4%2BAjfIvJQe0nMdzTa%2FC1zMZrXSaLbVnkOsiVvh1eFXC0Hjsptpo1s5yieoKa%2Bcq7XHpj%2FnINkpOXcmILOcQwrozL4Pw7dumENU7lvIlk81jPfgRs0mfSpPGT0dp%2BK9mU3sEEhv7P8l2%2FpwAwuPcDx222KjF2E%2FTnexMaOcTiPP1%2FiyAKX3UwM%2FzEOclfNSZXZaMR%2Fw%2BGGcozKNvOVPML0g77yA%2FAGehZpZxPLGXwvS7OCoLb%2FaKW0C%2BFgBrcmbmZeVv5FGx0Gz%2FX%2FbYDCMd7JH9rIBtOqosZFrKjpZvKeYOC21aHapO8MPBq2MjIEp3Ma4WUBq5EQ%2B7IrOHqoFlv5WPXyvAE93tKH7XDdIjIjH5cmlhZkMWFHWQlzu7EqDNQBlubhz%2BGgw57rXwAY6pgHq7%2FE5TdS1SayYwSaBx7h4vvDDb44NfiUxtLcAOpZrP1QQwG0uEqQsduvr6MHO2U0BQhkiUPh5HjgGQEyZ9SY6h2d8rHCzRxvLEBIRYUfMxdZS%2FLtzoGaN%2BEqWSHi72%2B1idMkCiHUeUtM9Y3q%2F9TdVJDH1n9Zb9rYUz4YiGdbxaSf1VPn6%2BwfdV036mp%2BHMX7%2FUmz0InMybznDJmOzwcIEnb2pVoQH&X-Amz-Signature=007be4cc18484ce8a95511b4984a4d5423db339e30477f4b58f345cd428fb126&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCC5MTF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGrNsAic4d0bn5K3YcVifFh8VHHS6HXkAIDDv8kafzS8AiAw4BCXkJQR0scKpvmEnNpb6LQ0fk3hGwp9kgKT5qvhPiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuk1bjJ9tJe%2F0xyq6KtwDYCC14Xv9vtw25hWJdg%2FkjSs7m2mkXHuhq3SvgXzu6jNQHodzpUZ7vNe9%2Fmc5DIrYrxcWlKRa7zrRUQghdDxhlvbmLtfzAtH1WY4FEW39JP7WyLFNnxN9lU2GmX1GPAOeSH45KNCN%2FGfyBHyM%2BS8dGRmazKq1XSlg1DYmt6Dlu7UYS0mmH5%2BAJcldIgzpbZWhc5pD70nEwC46UnL%2Bh7p4OlS9nr04bFK8ZsZ50QBFfKFnJkzmhq4%2BAjfIvJQe0nMdzTa%2FC1zMZrXSaLbVnkOsiVvh1eFXC0Hjsptpo1s5yieoKa%2Bcq7XHpj%2FnINkpOXcmILOcQwrozL4Pw7dumENU7lvIlk81jPfgRs0mfSpPGT0dp%2BK9mU3sEEhv7P8l2%2FpwAwuPcDx222KjF2E%2FTnexMaOcTiPP1%2FiyAKX3UwM%2FzEOclfNSZXZaMR%2Fw%2BGGcozKNvOVPML0g77yA%2FAGehZpZxPLGXwvS7OCoLb%2FaKW0C%2BFgBrcmbmZeVv5FGx0Gz%2FX%2FbYDCMd7JH9rIBtOqosZFrKjpZvKeYOC21aHapO8MPBq2MjIEp3Ma4WUBq5EQ%2B7IrOHqoFlv5WPXyvAE93tKH7XDdIjIjH5cmlhZkMWFHWQlzu7EqDNQBlubhz%2BGgw57rXwAY6pgHq7%2FE5TdS1SayYwSaBx7h4vvDDb44NfiUxtLcAOpZrP1QQwG0uEqQsduvr6MHO2U0BQhkiUPh5HjgGQEyZ9SY6h2d8rHCzRxvLEBIRYUfMxdZS%2FLtzoGaN%2BEqWSHi72%2B1idMkCiHUeUtM9Y3q%2F9TdVJDH1n9Zb9rYUz4YiGdbxaSf1VPn6%2BwfdV036mp%2BHMX7%2FUmz0InMybznDJmOzwcIEnb2pVoQH&X-Amz-Signature=a3e97ef311b6844e77ded6ac825b8b2095a5f654fdc43251e594ccdf7649d85e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCC5MTF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGrNsAic4d0bn5K3YcVifFh8VHHS6HXkAIDDv8kafzS8AiAw4BCXkJQR0scKpvmEnNpb6LQ0fk3hGwp9kgKT5qvhPiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuk1bjJ9tJe%2F0xyq6KtwDYCC14Xv9vtw25hWJdg%2FkjSs7m2mkXHuhq3SvgXzu6jNQHodzpUZ7vNe9%2Fmc5DIrYrxcWlKRa7zrRUQghdDxhlvbmLtfzAtH1WY4FEW39JP7WyLFNnxN9lU2GmX1GPAOeSH45KNCN%2FGfyBHyM%2BS8dGRmazKq1XSlg1DYmt6Dlu7UYS0mmH5%2BAJcldIgzpbZWhc5pD70nEwC46UnL%2Bh7p4OlS9nr04bFK8ZsZ50QBFfKFnJkzmhq4%2BAjfIvJQe0nMdzTa%2FC1zMZrXSaLbVnkOsiVvh1eFXC0Hjsptpo1s5yieoKa%2Bcq7XHpj%2FnINkpOXcmILOcQwrozL4Pw7dumENU7lvIlk81jPfgRs0mfSpPGT0dp%2BK9mU3sEEhv7P8l2%2FpwAwuPcDx222KjF2E%2FTnexMaOcTiPP1%2FiyAKX3UwM%2FzEOclfNSZXZaMR%2Fw%2BGGcozKNvOVPML0g77yA%2FAGehZpZxPLGXwvS7OCoLb%2FaKW0C%2BFgBrcmbmZeVv5FGx0Gz%2FX%2FbYDCMd7JH9rIBtOqosZFrKjpZvKeYOC21aHapO8MPBq2MjIEp3Ma4WUBq5EQ%2B7IrOHqoFlv5WPXyvAE93tKH7XDdIjIjH5cmlhZkMWFHWQlzu7EqDNQBlubhz%2BGgw57rXwAY6pgHq7%2FE5TdS1SayYwSaBx7h4vvDDb44NfiUxtLcAOpZrP1QQwG0uEqQsduvr6MHO2U0BQhkiUPh5HjgGQEyZ9SY6h2d8rHCzRxvLEBIRYUfMxdZS%2FLtzoGaN%2BEqWSHi72%2B1idMkCiHUeUtM9Y3q%2F9TdVJDH1n9Zb9rYUz4YiGdbxaSf1VPn6%2BwfdV036mp%2BHMX7%2FUmz0InMybznDJmOzwcIEnb2pVoQH&X-Amz-Signature=bba804d0441071de9b0b50893d49dd0ef99bc95a4c9844250f0bc5c903c5228d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCC5MTF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGrNsAic4d0bn5K3YcVifFh8VHHS6HXkAIDDv8kafzS8AiAw4BCXkJQR0scKpvmEnNpb6LQ0fk3hGwp9kgKT5qvhPiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuk1bjJ9tJe%2F0xyq6KtwDYCC14Xv9vtw25hWJdg%2FkjSs7m2mkXHuhq3SvgXzu6jNQHodzpUZ7vNe9%2Fmc5DIrYrxcWlKRa7zrRUQghdDxhlvbmLtfzAtH1WY4FEW39JP7WyLFNnxN9lU2GmX1GPAOeSH45KNCN%2FGfyBHyM%2BS8dGRmazKq1XSlg1DYmt6Dlu7UYS0mmH5%2BAJcldIgzpbZWhc5pD70nEwC46UnL%2Bh7p4OlS9nr04bFK8ZsZ50QBFfKFnJkzmhq4%2BAjfIvJQe0nMdzTa%2FC1zMZrXSaLbVnkOsiVvh1eFXC0Hjsptpo1s5yieoKa%2Bcq7XHpj%2FnINkpOXcmILOcQwrozL4Pw7dumENU7lvIlk81jPfgRs0mfSpPGT0dp%2BK9mU3sEEhv7P8l2%2FpwAwuPcDx222KjF2E%2FTnexMaOcTiPP1%2FiyAKX3UwM%2FzEOclfNSZXZaMR%2Fw%2BGGcozKNvOVPML0g77yA%2FAGehZpZxPLGXwvS7OCoLb%2FaKW0C%2BFgBrcmbmZeVv5FGx0Gz%2FX%2FbYDCMd7JH9rIBtOqosZFrKjpZvKeYOC21aHapO8MPBq2MjIEp3Ma4WUBq5EQ%2B7IrOHqoFlv5WPXyvAE93tKH7XDdIjIjH5cmlhZkMWFHWQlzu7EqDNQBlubhz%2BGgw57rXwAY6pgHq7%2FE5TdS1SayYwSaBx7h4vvDDb44NfiUxtLcAOpZrP1QQwG0uEqQsduvr6MHO2U0BQhkiUPh5HjgGQEyZ9SY6h2d8rHCzRxvLEBIRYUfMxdZS%2FLtzoGaN%2BEqWSHi72%2B1idMkCiHUeUtM9Y3q%2F9TdVJDH1n9Zb9rYUz4YiGdbxaSf1VPn6%2BwfdV036mp%2BHMX7%2FUmz0InMybznDJmOzwcIEnb2pVoQH&X-Amz-Signature=74f2856cc68b0a1196e9c6f95412751c1e9f0d7dd59f572ff9808641597fd6f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCC5MTF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGrNsAic4d0bn5K3YcVifFh8VHHS6HXkAIDDv8kafzS8AiAw4BCXkJQR0scKpvmEnNpb6LQ0fk3hGwp9kgKT5qvhPiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuk1bjJ9tJe%2F0xyq6KtwDYCC14Xv9vtw25hWJdg%2FkjSs7m2mkXHuhq3SvgXzu6jNQHodzpUZ7vNe9%2Fmc5DIrYrxcWlKRa7zrRUQghdDxhlvbmLtfzAtH1WY4FEW39JP7WyLFNnxN9lU2GmX1GPAOeSH45KNCN%2FGfyBHyM%2BS8dGRmazKq1XSlg1DYmt6Dlu7UYS0mmH5%2BAJcldIgzpbZWhc5pD70nEwC46UnL%2Bh7p4OlS9nr04bFK8ZsZ50QBFfKFnJkzmhq4%2BAjfIvJQe0nMdzTa%2FC1zMZrXSaLbVnkOsiVvh1eFXC0Hjsptpo1s5yieoKa%2Bcq7XHpj%2FnINkpOXcmILOcQwrozL4Pw7dumENU7lvIlk81jPfgRs0mfSpPGT0dp%2BK9mU3sEEhv7P8l2%2FpwAwuPcDx222KjF2E%2FTnexMaOcTiPP1%2FiyAKX3UwM%2FzEOclfNSZXZaMR%2Fw%2BGGcozKNvOVPML0g77yA%2FAGehZpZxPLGXwvS7OCoLb%2FaKW0C%2BFgBrcmbmZeVv5FGx0Gz%2FX%2FbYDCMd7JH9rIBtOqosZFrKjpZvKeYOC21aHapO8MPBq2MjIEp3Ma4WUBq5EQ%2B7IrOHqoFlv5WPXyvAE93tKH7XDdIjIjH5cmlhZkMWFHWQlzu7EqDNQBlubhz%2BGgw57rXwAY6pgHq7%2FE5TdS1SayYwSaBx7h4vvDDb44NfiUxtLcAOpZrP1QQwG0uEqQsduvr6MHO2U0BQhkiUPh5HjgGQEyZ9SY6h2d8rHCzRxvLEBIRYUfMxdZS%2FLtzoGaN%2BEqWSHi72%2B1idMkCiHUeUtM9Y3q%2F9TdVJDH1n9Zb9rYUz4YiGdbxaSf1VPn6%2BwfdV036mp%2BHMX7%2FUmz0InMybznDJmOzwcIEnb2pVoQH&X-Amz-Signature=574a782693b555e19c355b239de95171ecef0762da91a82ea84a56ec1d5322e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
