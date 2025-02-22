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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KQX4SH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuUomaC6mzdqMit4NwgeaImWg8VN6yHZBtzuc5YQJ2%2FAiAUKVoWF2Zqk%2Bv5e1cCtXpumWsvnX%2BPOuCeYDOMvMo1UyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGzx%2FhLsU%2FQ7OUCYKtwDawNl%2B3XNiXNAaVXeE115D%2FWQ8rHGGF5wDMvBkQZVvaolVdoP5uILbOCrcdTUOjzaAmC8g%2BCdxvAyeLuJjY2QWYNPqrO66bZW4775YSarOXJIteXp2iw24KvdDUqOnv%2Fb2KgkQskZ6U2cXJyYC0LY2l0LBEaTtyiRLV3PBncmR93SCvUpW8kfv5vp%2FpUtA6coDElE34MNigY20XyzAMpwlWEgRd7EJWcKChaXGPk3ixxwT9vRB%2BtfStl9CKkyLSJQorxTZmO%2FuswbQZtv38Ld11cakuljwuZKuvXbRB3a8NIOVBqP83ZbBCGDkhET4%2FPbD1rmDiWnds%2BcAJA86MRCamJAXhAArg7aUc9cRMwCeip5inWAclGAsqZevNHJRv%2BB1XxpxOZtjQwOGay3ND8fzFTY5mLUZ2kF65eKCiOPMIDsCqWtaGFFKtbhhPFmkj0E3nN3O45eBdb1UWvpjiQ9fqpYotw1ymzgX6q6N3QqwpuMXsRYMZV%2F7UqECYAba30P%2BKTEaQvNNiIndJaCWd4XagRhwZuaG%2B2BtWXfLKfj3atjke5Ffsjgf%2FUu0Qvh0TtbNfPIgbnlDG8VCox6My3O08s0TFdL7NbKBQPV6mQdo6CUubQYDvvBzeCg5FMwyunmvQY6pgHg22o6FzsTZI82oz2yHmiq4iFGgQP6R2AbUtJuByhYNceS%2FqnbkjGDeL%2BEWt76x8ZSRDUXlg3FDgKhlOGtr7VeLwveHoPzlepe8QKiPKUfJh6CKerMplC1Nd4RRNr71sKukcOtqm%2FkyDPRjKHZ4BgbchWZGmx%2FYdWB9DWargHcx4HQr%2FKzn2uOoOvoNAuPqlYT5AiKLWYYMUpNCyeap9t2d31Eg6NP&X-Amz-Signature=27f058a503cb4e60013b4fca2585e3c97fb0c1f54645a90828fc7dce18b4799e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KQX4SH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuUomaC6mzdqMit4NwgeaImWg8VN6yHZBtzuc5YQJ2%2FAiAUKVoWF2Zqk%2Bv5e1cCtXpumWsvnX%2BPOuCeYDOMvMo1UyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGzx%2FhLsU%2FQ7OUCYKtwDawNl%2B3XNiXNAaVXeE115D%2FWQ8rHGGF5wDMvBkQZVvaolVdoP5uILbOCrcdTUOjzaAmC8g%2BCdxvAyeLuJjY2QWYNPqrO66bZW4775YSarOXJIteXp2iw24KvdDUqOnv%2Fb2KgkQskZ6U2cXJyYC0LY2l0LBEaTtyiRLV3PBncmR93SCvUpW8kfv5vp%2FpUtA6coDElE34MNigY20XyzAMpwlWEgRd7EJWcKChaXGPk3ixxwT9vRB%2BtfStl9CKkyLSJQorxTZmO%2FuswbQZtv38Ld11cakuljwuZKuvXbRB3a8NIOVBqP83ZbBCGDkhET4%2FPbD1rmDiWnds%2BcAJA86MRCamJAXhAArg7aUc9cRMwCeip5inWAclGAsqZevNHJRv%2BB1XxpxOZtjQwOGay3ND8fzFTY5mLUZ2kF65eKCiOPMIDsCqWtaGFFKtbhhPFmkj0E3nN3O45eBdb1UWvpjiQ9fqpYotw1ymzgX6q6N3QqwpuMXsRYMZV%2F7UqECYAba30P%2BKTEaQvNNiIndJaCWd4XagRhwZuaG%2B2BtWXfLKfj3atjke5Ffsjgf%2FUu0Qvh0TtbNfPIgbnlDG8VCox6My3O08s0TFdL7NbKBQPV6mQdo6CUubQYDvvBzeCg5FMwyunmvQY6pgHg22o6FzsTZI82oz2yHmiq4iFGgQP6R2AbUtJuByhYNceS%2FqnbkjGDeL%2BEWt76x8ZSRDUXlg3FDgKhlOGtr7VeLwveHoPzlepe8QKiPKUfJh6CKerMplC1Nd4RRNr71sKukcOtqm%2FkyDPRjKHZ4BgbchWZGmx%2FYdWB9DWargHcx4HQr%2FKzn2uOoOvoNAuPqlYT5AiKLWYYMUpNCyeap9t2d31Eg6NP&X-Amz-Signature=6a07af9f38594a79ab80abe3127130ab8604f2e6bd6f62cfea8652155652f030&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KQX4SH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuUomaC6mzdqMit4NwgeaImWg8VN6yHZBtzuc5YQJ2%2FAiAUKVoWF2Zqk%2Bv5e1cCtXpumWsvnX%2BPOuCeYDOMvMo1UyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGzx%2FhLsU%2FQ7OUCYKtwDawNl%2B3XNiXNAaVXeE115D%2FWQ8rHGGF5wDMvBkQZVvaolVdoP5uILbOCrcdTUOjzaAmC8g%2BCdxvAyeLuJjY2QWYNPqrO66bZW4775YSarOXJIteXp2iw24KvdDUqOnv%2Fb2KgkQskZ6U2cXJyYC0LY2l0LBEaTtyiRLV3PBncmR93SCvUpW8kfv5vp%2FpUtA6coDElE34MNigY20XyzAMpwlWEgRd7EJWcKChaXGPk3ixxwT9vRB%2BtfStl9CKkyLSJQorxTZmO%2FuswbQZtv38Ld11cakuljwuZKuvXbRB3a8NIOVBqP83ZbBCGDkhET4%2FPbD1rmDiWnds%2BcAJA86MRCamJAXhAArg7aUc9cRMwCeip5inWAclGAsqZevNHJRv%2BB1XxpxOZtjQwOGay3ND8fzFTY5mLUZ2kF65eKCiOPMIDsCqWtaGFFKtbhhPFmkj0E3nN3O45eBdb1UWvpjiQ9fqpYotw1ymzgX6q6N3QqwpuMXsRYMZV%2F7UqECYAba30P%2BKTEaQvNNiIndJaCWd4XagRhwZuaG%2B2BtWXfLKfj3atjke5Ffsjgf%2FUu0Qvh0TtbNfPIgbnlDG8VCox6My3O08s0TFdL7NbKBQPV6mQdo6CUubQYDvvBzeCg5FMwyunmvQY6pgHg22o6FzsTZI82oz2yHmiq4iFGgQP6R2AbUtJuByhYNceS%2FqnbkjGDeL%2BEWt76x8ZSRDUXlg3FDgKhlOGtr7VeLwveHoPzlepe8QKiPKUfJh6CKerMplC1Nd4RRNr71sKukcOtqm%2FkyDPRjKHZ4BgbchWZGmx%2FYdWB9DWargHcx4HQr%2FKzn2uOoOvoNAuPqlYT5AiKLWYYMUpNCyeap9t2d31Eg6NP&X-Amz-Signature=1c2003bd2ca7c29088990fc349f024e69162e1d595b91ac2dc1e943ca6815215&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KQX4SH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuUomaC6mzdqMit4NwgeaImWg8VN6yHZBtzuc5YQJ2%2FAiAUKVoWF2Zqk%2Bv5e1cCtXpumWsvnX%2BPOuCeYDOMvMo1UyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGzx%2FhLsU%2FQ7OUCYKtwDawNl%2B3XNiXNAaVXeE115D%2FWQ8rHGGF5wDMvBkQZVvaolVdoP5uILbOCrcdTUOjzaAmC8g%2BCdxvAyeLuJjY2QWYNPqrO66bZW4775YSarOXJIteXp2iw24KvdDUqOnv%2Fb2KgkQskZ6U2cXJyYC0LY2l0LBEaTtyiRLV3PBncmR93SCvUpW8kfv5vp%2FpUtA6coDElE34MNigY20XyzAMpwlWEgRd7EJWcKChaXGPk3ixxwT9vRB%2BtfStl9CKkyLSJQorxTZmO%2FuswbQZtv38Ld11cakuljwuZKuvXbRB3a8NIOVBqP83ZbBCGDkhET4%2FPbD1rmDiWnds%2BcAJA86MRCamJAXhAArg7aUc9cRMwCeip5inWAclGAsqZevNHJRv%2BB1XxpxOZtjQwOGay3ND8fzFTY5mLUZ2kF65eKCiOPMIDsCqWtaGFFKtbhhPFmkj0E3nN3O45eBdb1UWvpjiQ9fqpYotw1ymzgX6q6N3QqwpuMXsRYMZV%2F7UqECYAba30P%2BKTEaQvNNiIndJaCWd4XagRhwZuaG%2B2BtWXfLKfj3atjke5Ffsjgf%2FUu0Qvh0TtbNfPIgbnlDG8VCox6My3O08s0TFdL7NbKBQPV6mQdo6CUubQYDvvBzeCg5FMwyunmvQY6pgHg22o6FzsTZI82oz2yHmiq4iFGgQP6R2AbUtJuByhYNceS%2FqnbkjGDeL%2BEWt76x8ZSRDUXlg3FDgKhlOGtr7VeLwveHoPzlepe8QKiPKUfJh6CKerMplC1Nd4RRNr71sKukcOtqm%2FkyDPRjKHZ4BgbchWZGmx%2FYdWB9DWargHcx4HQr%2FKzn2uOoOvoNAuPqlYT5AiKLWYYMUpNCyeap9t2d31Eg6NP&X-Amz-Signature=8705aa2852e3e81c0c863ace1e70e1599f1548f212a7bbd86e485eac4a0c0794&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KQX4SH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuUomaC6mzdqMit4NwgeaImWg8VN6yHZBtzuc5YQJ2%2FAiAUKVoWF2Zqk%2Bv5e1cCtXpumWsvnX%2BPOuCeYDOMvMo1UyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGzx%2FhLsU%2FQ7OUCYKtwDawNl%2B3XNiXNAaVXeE115D%2FWQ8rHGGF5wDMvBkQZVvaolVdoP5uILbOCrcdTUOjzaAmC8g%2BCdxvAyeLuJjY2QWYNPqrO66bZW4775YSarOXJIteXp2iw24KvdDUqOnv%2Fb2KgkQskZ6U2cXJyYC0LY2l0LBEaTtyiRLV3PBncmR93SCvUpW8kfv5vp%2FpUtA6coDElE34MNigY20XyzAMpwlWEgRd7EJWcKChaXGPk3ixxwT9vRB%2BtfStl9CKkyLSJQorxTZmO%2FuswbQZtv38Ld11cakuljwuZKuvXbRB3a8NIOVBqP83ZbBCGDkhET4%2FPbD1rmDiWnds%2BcAJA86MRCamJAXhAArg7aUc9cRMwCeip5inWAclGAsqZevNHJRv%2BB1XxpxOZtjQwOGay3ND8fzFTY5mLUZ2kF65eKCiOPMIDsCqWtaGFFKtbhhPFmkj0E3nN3O45eBdb1UWvpjiQ9fqpYotw1ymzgX6q6N3QqwpuMXsRYMZV%2F7UqECYAba30P%2BKTEaQvNNiIndJaCWd4XagRhwZuaG%2B2BtWXfLKfj3atjke5Ffsjgf%2FUu0Qvh0TtbNfPIgbnlDG8VCox6My3O08s0TFdL7NbKBQPV6mQdo6CUubQYDvvBzeCg5FMwyunmvQY6pgHg22o6FzsTZI82oz2yHmiq4iFGgQP6R2AbUtJuByhYNceS%2FqnbkjGDeL%2BEWt76x8ZSRDUXlg3FDgKhlOGtr7VeLwveHoPzlepe8QKiPKUfJh6CKerMplC1Nd4RRNr71sKukcOtqm%2FkyDPRjKHZ4BgbchWZGmx%2FYdWB9DWargHcx4HQr%2FKzn2uOoOvoNAuPqlYT5AiKLWYYMUpNCyeap9t2d31Eg6NP&X-Amz-Signature=86e9590e9c91abb4c366bfd6e5ed55032ccf58cc27b9a5e579c565e4da77cb15&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
