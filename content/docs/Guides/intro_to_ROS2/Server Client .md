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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKI6OWYH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG9jD2LpxTzadP7uHDfW7MTK9HoCybnQoPP6mM9Le0NwIhAJmbYYmoJc4bwvMivj4jER8ubuKTcAk9YJMza%2FDT46EVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrJBfHCSkpy%2BmoXjIq3AP36SFQd%2BedQ0ub78nUn6ikoDDyZMBqA292sKJdqHQ%2F00Trs7M55v632Ksj6ePCQ4cOuNoGOWpM4rp%2BMP4E%2BlzzF39WFyH0lfTlDCEDVQntRPV0nCp7Cle47sN40X0bsgJvNwvoBUrr2IprYq8gNa%2Fu2tfXo3a3%2FsOgVtlADnr4hw491xJuRYGejcbFFGH3P0SABetMmXjGlQ54ZkNvEDqWMk9FAwMAHmwzby7bdQuYckgnQzTbJS1QEOMrQQV34xpTkE0nEmOifzNTXQhtBOfoNjAtexMkPCENicLnNPGsf9DO63ZKWoArJPX4gfwCBP9SvDN3UcNzQJGzigYsThtOzKZ6WLBOEMFo3DT%2F5bAyNaxd2A%2Fa9NdBGRPTz4OUPDlMN8mqhkcmZQUrsNVJ6fi3IMuw4ah7Qvr9ODaneRkLyMpSDLr109ex1hYLabs0lnbmwTnjGWQhLooKIutWslKyEKTHkNznH0jnQvXsrKwCLn5Qe4j36nur1bgpUU3XbyQ5vi7%2BGnuTMe1V6%2FKHBN75RUBw71xKnyQg9AE4FXmSiMbLKz%2B%2B02yZOCfhmHaZ5qgsGbEgmVt55bYs28R7LTdi8OMEYfnG0Gc%2BbSWPJbFtdI4RCasavjUvoS7GnjDlh6nEBjqkAW1ENPuh%2FR6oJ1uRsbwIWWNWuZxQsr58H3yWlTJX%2BiAX28YbUvyybBnIVR2KvCm6tuKKwVArJJjf7%2BuGOnqRlJZZ2a7P2sJgkWxuOQ%2BTqO6Wta%2BaVPeCGDQWKg0UE8dGZdaUT4Kf8h1sn%2BVWtv11XpnAT4j9F6WAHEJZvRqIUJEdifdpF6hgor20t0uauNhKwE8I04VUmZWafq0BqWGU%2BELilL1z&X-Amz-Signature=6b24a72234eee51b2896aafb3f45342763fa12a35a1d0c76d68dd60e43cf2c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKI6OWYH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG9jD2LpxTzadP7uHDfW7MTK9HoCybnQoPP6mM9Le0NwIhAJmbYYmoJc4bwvMivj4jER8ubuKTcAk9YJMza%2FDT46EVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrJBfHCSkpy%2BmoXjIq3AP36SFQd%2BedQ0ub78nUn6ikoDDyZMBqA292sKJdqHQ%2F00Trs7M55v632Ksj6ePCQ4cOuNoGOWpM4rp%2BMP4E%2BlzzF39WFyH0lfTlDCEDVQntRPV0nCp7Cle47sN40X0bsgJvNwvoBUrr2IprYq8gNa%2Fu2tfXo3a3%2FsOgVtlADnr4hw491xJuRYGejcbFFGH3P0SABetMmXjGlQ54ZkNvEDqWMk9FAwMAHmwzby7bdQuYckgnQzTbJS1QEOMrQQV34xpTkE0nEmOifzNTXQhtBOfoNjAtexMkPCENicLnNPGsf9DO63ZKWoArJPX4gfwCBP9SvDN3UcNzQJGzigYsThtOzKZ6WLBOEMFo3DT%2F5bAyNaxd2A%2Fa9NdBGRPTz4OUPDlMN8mqhkcmZQUrsNVJ6fi3IMuw4ah7Qvr9ODaneRkLyMpSDLr109ex1hYLabs0lnbmwTnjGWQhLooKIutWslKyEKTHkNznH0jnQvXsrKwCLn5Qe4j36nur1bgpUU3XbyQ5vi7%2BGnuTMe1V6%2FKHBN75RUBw71xKnyQg9AE4FXmSiMbLKz%2B%2B02yZOCfhmHaZ5qgsGbEgmVt55bYs28R7LTdi8OMEYfnG0Gc%2BbSWPJbFtdI4RCasavjUvoS7GnjDlh6nEBjqkAW1ENPuh%2FR6oJ1uRsbwIWWNWuZxQsr58H3yWlTJX%2BiAX28YbUvyybBnIVR2KvCm6tuKKwVArJJjf7%2BuGOnqRlJZZ2a7P2sJgkWxuOQ%2BTqO6Wta%2BaVPeCGDQWKg0UE8dGZdaUT4Kf8h1sn%2BVWtv11XpnAT4j9F6WAHEJZvRqIUJEdifdpF6hgor20t0uauNhKwE8I04VUmZWafq0BqWGU%2BELilL1z&X-Amz-Signature=c82c9fe3876fc91f3c9fc97cb8e39d627ef07f7938251d2eacc43669fb4ec6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKI6OWYH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG9jD2LpxTzadP7uHDfW7MTK9HoCybnQoPP6mM9Le0NwIhAJmbYYmoJc4bwvMivj4jER8ubuKTcAk9YJMza%2FDT46EVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrJBfHCSkpy%2BmoXjIq3AP36SFQd%2BedQ0ub78nUn6ikoDDyZMBqA292sKJdqHQ%2F00Trs7M55v632Ksj6ePCQ4cOuNoGOWpM4rp%2BMP4E%2BlzzF39WFyH0lfTlDCEDVQntRPV0nCp7Cle47sN40X0bsgJvNwvoBUrr2IprYq8gNa%2Fu2tfXo3a3%2FsOgVtlADnr4hw491xJuRYGejcbFFGH3P0SABetMmXjGlQ54ZkNvEDqWMk9FAwMAHmwzby7bdQuYckgnQzTbJS1QEOMrQQV34xpTkE0nEmOifzNTXQhtBOfoNjAtexMkPCENicLnNPGsf9DO63ZKWoArJPX4gfwCBP9SvDN3UcNzQJGzigYsThtOzKZ6WLBOEMFo3DT%2F5bAyNaxd2A%2Fa9NdBGRPTz4OUPDlMN8mqhkcmZQUrsNVJ6fi3IMuw4ah7Qvr9ODaneRkLyMpSDLr109ex1hYLabs0lnbmwTnjGWQhLooKIutWslKyEKTHkNznH0jnQvXsrKwCLn5Qe4j36nur1bgpUU3XbyQ5vi7%2BGnuTMe1V6%2FKHBN75RUBw71xKnyQg9AE4FXmSiMbLKz%2B%2B02yZOCfhmHaZ5qgsGbEgmVt55bYs28R7LTdi8OMEYfnG0Gc%2BbSWPJbFtdI4RCasavjUvoS7GnjDlh6nEBjqkAW1ENPuh%2FR6oJ1uRsbwIWWNWuZxQsr58H3yWlTJX%2BiAX28YbUvyybBnIVR2KvCm6tuKKwVArJJjf7%2BuGOnqRlJZZ2a7P2sJgkWxuOQ%2BTqO6Wta%2BaVPeCGDQWKg0UE8dGZdaUT4Kf8h1sn%2BVWtv11XpnAT4j9F6WAHEJZvRqIUJEdifdpF6hgor20t0uauNhKwE8I04VUmZWafq0BqWGU%2BELilL1z&X-Amz-Signature=7234ab50a5be23d5ddb9658665c8c10851e5fe93e34287144ef6ae34a489d39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKI6OWYH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG9jD2LpxTzadP7uHDfW7MTK9HoCybnQoPP6mM9Le0NwIhAJmbYYmoJc4bwvMivj4jER8ubuKTcAk9YJMza%2FDT46EVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrJBfHCSkpy%2BmoXjIq3AP36SFQd%2BedQ0ub78nUn6ikoDDyZMBqA292sKJdqHQ%2F00Trs7M55v632Ksj6ePCQ4cOuNoGOWpM4rp%2BMP4E%2BlzzF39WFyH0lfTlDCEDVQntRPV0nCp7Cle47sN40X0bsgJvNwvoBUrr2IprYq8gNa%2Fu2tfXo3a3%2FsOgVtlADnr4hw491xJuRYGejcbFFGH3P0SABetMmXjGlQ54ZkNvEDqWMk9FAwMAHmwzby7bdQuYckgnQzTbJS1QEOMrQQV34xpTkE0nEmOifzNTXQhtBOfoNjAtexMkPCENicLnNPGsf9DO63ZKWoArJPX4gfwCBP9SvDN3UcNzQJGzigYsThtOzKZ6WLBOEMFo3DT%2F5bAyNaxd2A%2Fa9NdBGRPTz4OUPDlMN8mqhkcmZQUrsNVJ6fi3IMuw4ah7Qvr9ODaneRkLyMpSDLr109ex1hYLabs0lnbmwTnjGWQhLooKIutWslKyEKTHkNznH0jnQvXsrKwCLn5Qe4j36nur1bgpUU3XbyQ5vi7%2BGnuTMe1V6%2FKHBN75RUBw71xKnyQg9AE4FXmSiMbLKz%2B%2B02yZOCfhmHaZ5qgsGbEgmVt55bYs28R7LTdi8OMEYfnG0Gc%2BbSWPJbFtdI4RCasavjUvoS7GnjDlh6nEBjqkAW1ENPuh%2FR6oJ1uRsbwIWWNWuZxQsr58H3yWlTJX%2BiAX28YbUvyybBnIVR2KvCm6tuKKwVArJJjf7%2BuGOnqRlJZZ2a7P2sJgkWxuOQ%2BTqO6Wta%2BaVPeCGDQWKg0UE8dGZdaUT4Kf8h1sn%2BVWtv11XpnAT4j9F6WAHEJZvRqIUJEdifdpF6hgor20t0uauNhKwE8I04VUmZWafq0BqWGU%2BELilL1z&X-Amz-Signature=56e289eb1b651fcdc82940f1724279f2a6f12e170edb4441177baf61d78bd342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKI6OWYH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG9jD2LpxTzadP7uHDfW7MTK9HoCybnQoPP6mM9Le0NwIhAJmbYYmoJc4bwvMivj4jER8ubuKTcAk9YJMza%2FDT46EVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrJBfHCSkpy%2BmoXjIq3AP36SFQd%2BedQ0ub78nUn6ikoDDyZMBqA292sKJdqHQ%2F00Trs7M55v632Ksj6ePCQ4cOuNoGOWpM4rp%2BMP4E%2BlzzF39WFyH0lfTlDCEDVQntRPV0nCp7Cle47sN40X0bsgJvNwvoBUrr2IprYq8gNa%2Fu2tfXo3a3%2FsOgVtlADnr4hw491xJuRYGejcbFFGH3P0SABetMmXjGlQ54ZkNvEDqWMk9FAwMAHmwzby7bdQuYckgnQzTbJS1QEOMrQQV34xpTkE0nEmOifzNTXQhtBOfoNjAtexMkPCENicLnNPGsf9DO63ZKWoArJPX4gfwCBP9SvDN3UcNzQJGzigYsThtOzKZ6WLBOEMFo3DT%2F5bAyNaxd2A%2Fa9NdBGRPTz4OUPDlMN8mqhkcmZQUrsNVJ6fi3IMuw4ah7Qvr9ODaneRkLyMpSDLr109ex1hYLabs0lnbmwTnjGWQhLooKIutWslKyEKTHkNznH0jnQvXsrKwCLn5Qe4j36nur1bgpUU3XbyQ5vi7%2BGnuTMe1V6%2FKHBN75RUBw71xKnyQg9AE4FXmSiMbLKz%2B%2B02yZOCfhmHaZ5qgsGbEgmVt55bYs28R7LTdi8OMEYfnG0Gc%2BbSWPJbFtdI4RCasavjUvoS7GnjDlh6nEBjqkAW1ENPuh%2FR6oJ1uRsbwIWWNWuZxQsr58H3yWlTJX%2BiAX28YbUvyybBnIVR2KvCm6tuKKwVArJJjf7%2BuGOnqRlJZZ2a7P2sJgkWxuOQ%2BTqO6Wta%2BaVPeCGDQWKg0UE8dGZdaUT4Kf8h1sn%2BVWtv11XpnAT4j9F6WAHEJZvRqIUJEdifdpF6hgor20t0uauNhKwE8I04VUmZWafq0BqWGU%2BELilL1z&X-Amz-Signature=57331106d404a0c6e36b39cef4e451ee88772c2c201cd17856209825a4d76d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
