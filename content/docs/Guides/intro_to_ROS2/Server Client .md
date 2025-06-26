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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNR5DTUN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAmYVmtqbXh74l7nKxaA%2FT5FQPQYzjBFrRNfJk82SP%2BuAiAwzMifOj8WALm%2BzGHHrlexQKr4yceDVjV2A4yl6%2B2RyCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMxV11zIeZ9a17NGbuKtwD2to0pbfJ5dmaDBWDNslPWXv%2F2KcPS3wIzAIGoANwbbqaMb1BqzXOP%2FTpKK7ClAPnYKHuT9bs%2BC3SHNVdNSNTaB2ynoPtReMjIo%2B13YgHC6qLifu%2BSV%2F%2FqPBbnqpOifh6WQWzjPYyUPe0BXxixq57%2BIkEVum2zV5UPmtSyWnDw9ve0%2Fod0svAx9mM43VH9mL7xGogHr72S7hlErWg2DARyMgFP1XP2u6VNzLv4qu605k0KK467pvOriy1%2BrXZMqFAzleZpRZu8f1%2FSJW91TlFv%2Fwh0mHOQPo3n2iNZQTZNjZAvvjzLVwb7y9EjoRFSFo9BgMojAwi0lS3uZyPrDH2ITC1E2Kv46heoMJZSS3L0Ff1l63NdFbp30%2Bd4%2FGU3GNzhY7RlZ7DqDH%2FWx3%2FIwYefCQ6j6ZyCJy9rIeYm9w99ia%2Fujq8BvqkDUePUSXSJ%2FhbUua5ickeJY44ggc6QjD%2BklbGkuxGsw7hXU1wHNhtjK803f02Z7NfPNkUzokdbMqo5I2RF70q9rXdclmmPWQGluOwnuFUF5knY2GlzKmoGjDbbyjg%2B3dZS6F3bN3htg7tKEBGNMQnSetmq7DiytoQ1bJbeBrqYnkMeAg6wbrOmqWKjwmRo0ATOcTdpN8wr6nywgY6pgGd0bFXMfmoUZ4LU9boWjYgseGzRzZ5rLT5NqG4%2FnVOY59ZG8wgBTWJx0POtZcw7DQy6UzRbpohfOPhaYtrOia5hqL6n2lKSs4pGHfMkbKAv1XpAQ59TedxOvL2c51YXpSxgZm6NI6FJZcTsCkHZhNMLeyzvHhZ1AVqpztPy7swO4jQXlROB2G7F6Zbtn3gotl40a89W2mckHVflG%2FiTTMB2S0qggqk&X-Amz-Signature=e4e982aaa811ec34f90251779ca3630b3ed73c02ddd40d348ec313e22e57b66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNR5DTUN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAmYVmtqbXh74l7nKxaA%2FT5FQPQYzjBFrRNfJk82SP%2BuAiAwzMifOj8WALm%2BzGHHrlexQKr4yceDVjV2A4yl6%2B2RyCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMxV11zIeZ9a17NGbuKtwD2to0pbfJ5dmaDBWDNslPWXv%2F2KcPS3wIzAIGoANwbbqaMb1BqzXOP%2FTpKK7ClAPnYKHuT9bs%2BC3SHNVdNSNTaB2ynoPtReMjIo%2B13YgHC6qLifu%2BSV%2F%2FqPBbnqpOifh6WQWzjPYyUPe0BXxixq57%2BIkEVum2zV5UPmtSyWnDw9ve0%2Fod0svAx9mM43VH9mL7xGogHr72S7hlErWg2DARyMgFP1XP2u6VNzLv4qu605k0KK467pvOriy1%2BrXZMqFAzleZpRZu8f1%2FSJW91TlFv%2Fwh0mHOQPo3n2iNZQTZNjZAvvjzLVwb7y9EjoRFSFo9BgMojAwi0lS3uZyPrDH2ITC1E2Kv46heoMJZSS3L0Ff1l63NdFbp30%2Bd4%2FGU3GNzhY7RlZ7DqDH%2FWx3%2FIwYefCQ6j6ZyCJy9rIeYm9w99ia%2Fujq8BvqkDUePUSXSJ%2FhbUua5ickeJY44ggc6QjD%2BklbGkuxGsw7hXU1wHNhtjK803f02Z7NfPNkUzokdbMqo5I2RF70q9rXdclmmPWQGluOwnuFUF5knY2GlzKmoGjDbbyjg%2B3dZS6F3bN3htg7tKEBGNMQnSetmq7DiytoQ1bJbeBrqYnkMeAg6wbrOmqWKjwmRo0ATOcTdpN8wr6nywgY6pgGd0bFXMfmoUZ4LU9boWjYgseGzRzZ5rLT5NqG4%2FnVOY59ZG8wgBTWJx0POtZcw7DQy6UzRbpohfOPhaYtrOia5hqL6n2lKSs4pGHfMkbKAv1XpAQ59TedxOvL2c51YXpSxgZm6NI6FJZcTsCkHZhNMLeyzvHhZ1AVqpztPy7swO4jQXlROB2G7F6Zbtn3gotl40a89W2mckHVflG%2FiTTMB2S0qggqk&X-Amz-Signature=3ccdd0d70a9cbe1dc007825ccf21405cc2496af9346d7a08189af9666ae8fece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNR5DTUN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAmYVmtqbXh74l7nKxaA%2FT5FQPQYzjBFrRNfJk82SP%2BuAiAwzMifOj8WALm%2BzGHHrlexQKr4yceDVjV2A4yl6%2B2RyCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMxV11zIeZ9a17NGbuKtwD2to0pbfJ5dmaDBWDNslPWXv%2F2KcPS3wIzAIGoANwbbqaMb1BqzXOP%2FTpKK7ClAPnYKHuT9bs%2BC3SHNVdNSNTaB2ynoPtReMjIo%2B13YgHC6qLifu%2BSV%2F%2FqPBbnqpOifh6WQWzjPYyUPe0BXxixq57%2BIkEVum2zV5UPmtSyWnDw9ve0%2Fod0svAx9mM43VH9mL7xGogHr72S7hlErWg2DARyMgFP1XP2u6VNzLv4qu605k0KK467pvOriy1%2BrXZMqFAzleZpRZu8f1%2FSJW91TlFv%2Fwh0mHOQPo3n2iNZQTZNjZAvvjzLVwb7y9EjoRFSFo9BgMojAwi0lS3uZyPrDH2ITC1E2Kv46heoMJZSS3L0Ff1l63NdFbp30%2Bd4%2FGU3GNzhY7RlZ7DqDH%2FWx3%2FIwYefCQ6j6ZyCJy9rIeYm9w99ia%2Fujq8BvqkDUePUSXSJ%2FhbUua5ickeJY44ggc6QjD%2BklbGkuxGsw7hXU1wHNhtjK803f02Z7NfPNkUzokdbMqo5I2RF70q9rXdclmmPWQGluOwnuFUF5knY2GlzKmoGjDbbyjg%2B3dZS6F3bN3htg7tKEBGNMQnSetmq7DiytoQ1bJbeBrqYnkMeAg6wbrOmqWKjwmRo0ATOcTdpN8wr6nywgY6pgGd0bFXMfmoUZ4LU9boWjYgseGzRzZ5rLT5NqG4%2FnVOY59ZG8wgBTWJx0POtZcw7DQy6UzRbpohfOPhaYtrOia5hqL6n2lKSs4pGHfMkbKAv1XpAQ59TedxOvL2c51YXpSxgZm6NI6FJZcTsCkHZhNMLeyzvHhZ1AVqpztPy7swO4jQXlROB2G7F6Zbtn3gotl40a89W2mckHVflG%2FiTTMB2S0qggqk&X-Amz-Signature=20df13114a44ffc33ba7455fe307910861864168bd86810223c3fa1c6e09b628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNR5DTUN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAmYVmtqbXh74l7nKxaA%2FT5FQPQYzjBFrRNfJk82SP%2BuAiAwzMifOj8WALm%2BzGHHrlexQKr4yceDVjV2A4yl6%2B2RyCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMxV11zIeZ9a17NGbuKtwD2to0pbfJ5dmaDBWDNslPWXv%2F2KcPS3wIzAIGoANwbbqaMb1BqzXOP%2FTpKK7ClAPnYKHuT9bs%2BC3SHNVdNSNTaB2ynoPtReMjIo%2B13YgHC6qLifu%2BSV%2F%2FqPBbnqpOifh6WQWzjPYyUPe0BXxixq57%2BIkEVum2zV5UPmtSyWnDw9ve0%2Fod0svAx9mM43VH9mL7xGogHr72S7hlErWg2DARyMgFP1XP2u6VNzLv4qu605k0KK467pvOriy1%2BrXZMqFAzleZpRZu8f1%2FSJW91TlFv%2Fwh0mHOQPo3n2iNZQTZNjZAvvjzLVwb7y9EjoRFSFo9BgMojAwi0lS3uZyPrDH2ITC1E2Kv46heoMJZSS3L0Ff1l63NdFbp30%2Bd4%2FGU3GNzhY7RlZ7DqDH%2FWx3%2FIwYefCQ6j6ZyCJy9rIeYm9w99ia%2Fujq8BvqkDUePUSXSJ%2FhbUua5ickeJY44ggc6QjD%2BklbGkuxGsw7hXU1wHNhtjK803f02Z7NfPNkUzokdbMqo5I2RF70q9rXdclmmPWQGluOwnuFUF5knY2GlzKmoGjDbbyjg%2B3dZS6F3bN3htg7tKEBGNMQnSetmq7DiytoQ1bJbeBrqYnkMeAg6wbrOmqWKjwmRo0ATOcTdpN8wr6nywgY6pgGd0bFXMfmoUZ4LU9boWjYgseGzRzZ5rLT5NqG4%2FnVOY59ZG8wgBTWJx0POtZcw7DQy6UzRbpohfOPhaYtrOia5hqL6n2lKSs4pGHfMkbKAv1XpAQ59TedxOvL2c51YXpSxgZm6NI6FJZcTsCkHZhNMLeyzvHhZ1AVqpztPy7swO4jQXlROB2G7F6Zbtn3gotl40a89W2mckHVflG%2FiTTMB2S0qggqk&X-Amz-Signature=ec96c05ae4710ba3409e53905085e147172e6bb0c27e2e0c1b3151dbcd078db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNR5DTUN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAmYVmtqbXh74l7nKxaA%2FT5FQPQYzjBFrRNfJk82SP%2BuAiAwzMifOj8WALm%2BzGHHrlexQKr4yceDVjV2A4yl6%2B2RyCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMxV11zIeZ9a17NGbuKtwD2to0pbfJ5dmaDBWDNslPWXv%2F2KcPS3wIzAIGoANwbbqaMb1BqzXOP%2FTpKK7ClAPnYKHuT9bs%2BC3SHNVdNSNTaB2ynoPtReMjIo%2B13YgHC6qLifu%2BSV%2F%2FqPBbnqpOifh6WQWzjPYyUPe0BXxixq57%2BIkEVum2zV5UPmtSyWnDw9ve0%2Fod0svAx9mM43VH9mL7xGogHr72S7hlErWg2DARyMgFP1XP2u6VNzLv4qu605k0KK467pvOriy1%2BrXZMqFAzleZpRZu8f1%2FSJW91TlFv%2Fwh0mHOQPo3n2iNZQTZNjZAvvjzLVwb7y9EjoRFSFo9BgMojAwi0lS3uZyPrDH2ITC1E2Kv46heoMJZSS3L0Ff1l63NdFbp30%2Bd4%2FGU3GNzhY7RlZ7DqDH%2FWx3%2FIwYefCQ6j6ZyCJy9rIeYm9w99ia%2Fujq8BvqkDUePUSXSJ%2FhbUua5ickeJY44ggc6QjD%2BklbGkuxGsw7hXU1wHNhtjK803f02Z7NfPNkUzokdbMqo5I2RF70q9rXdclmmPWQGluOwnuFUF5knY2GlzKmoGjDbbyjg%2B3dZS6F3bN3htg7tKEBGNMQnSetmq7DiytoQ1bJbeBrqYnkMeAg6wbrOmqWKjwmRo0ATOcTdpN8wr6nywgY6pgGd0bFXMfmoUZ4LU9boWjYgseGzRzZ5rLT5NqG4%2FnVOY59ZG8wgBTWJx0POtZcw7DQy6UzRbpohfOPhaYtrOia5hqL6n2lKSs4pGHfMkbKAv1XpAQ59TedxOvL2c51YXpSxgZm6NI6FJZcTsCkHZhNMLeyzvHhZ1AVqpztPy7swO4jQXlROB2G7F6Zbtn3gotl40a89W2mckHVflG%2FiTTMB2S0qggqk&X-Amz-Signature=2f1eeb2b9488aefb3e26d99ef91b268bb8cdbe15c9be9f21edd5c0f8e33a7149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
