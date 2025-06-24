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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXD4RWA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBX5P%2FVvc7AgAMJt9VFWuQWsqcjd7G2jx%2BgIpHRteBtYAiBHH9XXQq6KEfjH%2FFkbBHfeNWNDUOUqYoGpAv9D3lKdwir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMByPBI78Q%2FrqM1aJkKtwDxMERQUjQZ1vXEv3XOjxuVFmppP5msGzQq%2FN47TAXKC5hOEkFAKL2RiExTAE%2FBPgw14dFY2afUkwqv4Bp72gKXbyWqvW0hqH5I4CJnOb5ZoKG3P7VVtWZIXejWobXKNqooLkjf0d2rrAIYZ9Qe3TRCqhliBTnkxke32dz6a89qr%2BroQ6MFGEmlWWqiHowIqJa6VqztcW183wlPYulFNv9k5VvyeWPTTdxhiLTqRHB85%2FIcvjaKosSBrQD5O2UP49pUMS4kdvwv%2FPI0BRxxlesOxdMLqbY%2BiaJnTkmkGlfWSmyx9K%2B0dc46gUK%2FWC1U%2BkvWttAarENzsfoov3XYCi2WqTl5VS6e%2BobhmHIZMR%2BIL4uCDvrcEEhTZ6C%2Bkky5d7yjL5smcXYLbisu5RnL26OoetxAecD5KBfT9%2B7RTcfmcQZ38l5x6V5PPlX0%2Fvm9IpTx6KKCzTCECIThzhUAlZjNEJtrK%2FZDbacEUAJYcmDh49YHqLHMXzC1VTAa6r1aD5l3t0heuWSDQAQ3Mt8UC8uT00Y3PA%2FaUS3v0o0SOZoOA7rE0%2FjshqeQWxTmZ18Ou3K1hxpLV8exRp5Gd0im%2BG5TaaVu%2Fc580jiGPA9Ge0zAWHBPpTGSl%2BSexDvy0wwyYzswgY6pgFCG8cfMBu8DcPK7nSxKQArNzK4EbxuRIaPC7afYk5sT%2B0k3lgmj97cDQL849RbrkUIFr69QNASIh%2FXZLIDGujEgcqKRxpHMF5wLBwz8Mut96B%2FiBeluXvjGJJIzfohLc9541CVYREXfnaw1QoYR8uvWQwCEmeMs5iXgXcXH6EiO5ey6D8sNHJZPb0Pw%2BpQR0yZ%2B6ovLxB3UnEYEdUXO0AIS92n4r9M&X-Amz-Signature=22fc9576f7e60691e7f94e07215f9be9b1f36839d7f0a6cc6540a4bbe9f5bbcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXD4RWA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBX5P%2FVvc7AgAMJt9VFWuQWsqcjd7G2jx%2BgIpHRteBtYAiBHH9XXQq6KEfjH%2FFkbBHfeNWNDUOUqYoGpAv9D3lKdwir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMByPBI78Q%2FrqM1aJkKtwDxMERQUjQZ1vXEv3XOjxuVFmppP5msGzQq%2FN47TAXKC5hOEkFAKL2RiExTAE%2FBPgw14dFY2afUkwqv4Bp72gKXbyWqvW0hqH5I4CJnOb5ZoKG3P7VVtWZIXejWobXKNqooLkjf0d2rrAIYZ9Qe3TRCqhliBTnkxke32dz6a89qr%2BroQ6MFGEmlWWqiHowIqJa6VqztcW183wlPYulFNv9k5VvyeWPTTdxhiLTqRHB85%2FIcvjaKosSBrQD5O2UP49pUMS4kdvwv%2FPI0BRxxlesOxdMLqbY%2BiaJnTkmkGlfWSmyx9K%2B0dc46gUK%2FWC1U%2BkvWttAarENzsfoov3XYCi2WqTl5VS6e%2BobhmHIZMR%2BIL4uCDvrcEEhTZ6C%2Bkky5d7yjL5smcXYLbisu5RnL26OoetxAecD5KBfT9%2B7RTcfmcQZ38l5x6V5PPlX0%2Fvm9IpTx6KKCzTCECIThzhUAlZjNEJtrK%2FZDbacEUAJYcmDh49YHqLHMXzC1VTAa6r1aD5l3t0heuWSDQAQ3Mt8UC8uT00Y3PA%2FaUS3v0o0SOZoOA7rE0%2FjshqeQWxTmZ18Ou3K1hxpLV8exRp5Gd0im%2BG5TaaVu%2Fc580jiGPA9Ge0zAWHBPpTGSl%2BSexDvy0wwyYzswgY6pgFCG8cfMBu8DcPK7nSxKQArNzK4EbxuRIaPC7afYk5sT%2B0k3lgmj97cDQL849RbrkUIFr69QNASIh%2FXZLIDGujEgcqKRxpHMF5wLBwz8Mut96B%2FiBeluXvjGJJIzfohLc9541CVYREXfnaw1QoYR8uvWQwCEmeMs5iXgXcXH6EiO5ey6D8sNHJZPb0Pw%2BpQR0yZ%2B6ovLxB3UnEYEdUXO0AIS92n4r9M&X-Amz-Signature=63b58c56764ceb1ec8405470a40c2cdca9718fb1fbf8ceb5a59ab726e4caabd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXD4RWA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBX5P%2FVvc7AgAMJt9VFWuQWsqcjd7G2jx%2BgIpHRteBtYAiBHH9XXQq6KEfjH%2FFkbBHfeNWNDUOUqYoGpAv9D3lKdwir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMByPBI78Q%2FrqM1aJkKtwDxMERQUjQZ1vXEv3XOjxuVFmppP5msGzQq%2FN47TAXKC5hOEkFAKL2RiExTAE%2FBPgw14dFY2afUkwqv4Bp72gKXbyWqvW0hqH5I4CJnOb5ZoKG3P7VVtWZIXejWobXKNqooLkjf0d2rrAIYZ9Qe3TRCqhliBTnkxke32dz6a89qr%2BroQ6MFGEmlWWqiHowIqJa6VqztcW183wlPYulFNv9k5VvyeWPTTdxhiLTqRHB85%2FIcvjaKosSBrQD5O2UP49pUMS4kdvwv%2FPI0BRxxlesOxdMLqbY%2BiaJnTkmkGlfWSmyx9K%2B0dc46gUK%2FWC1U%2BkvWttAarENzsfoov3XYCi2WqTl5VS6e%2BobhmHIZMR%2BIL4uCDvrcEEhTZ6C%2Bkky5d7yjL5smcXYLbisu5RnL26OoetxAecD5KBfT9%2B7RTcfmcQZ38l5x6V5PPlX0%2Fvm9IpTx6KKCzTCECIThzhUAlZjNEJtrK%2FZDbacEUAJYcmDh49YHqLHMXzC1VTAa6r1aD5l3t0heuWSDQAQ3Mt8UC8uT00Y3PA%2FaUS3v0o0SOZoOA7rE0%2FjshqeQWxTmZ18Ou3K1hxpLV8exRp5Gd0im%2BG5TaaVu%2Fc580jiGPA9Ge0zAWHBPpTGSl%2BSexDvy0wwyYzswgY6pgFCG8cfMBu8DcPK7nSxKQArNzK4EbxuRIaPC7afYk5sT%2B0k3lgmj97cDQL849RbrkUIFr69QNASIh%2FXZLIDGujEgcqKRxpHMF5wLBwz8Mut96B%2FiBeluXvjGJJIzfohLc9541CVYREXfnaw1QoYR8uvWQwCEmeMs5iXgXcXH6EiO5ey6D8sNHJZPb0Pw%2BpQR0yZ%2B6ovLxB3UnEYEdUXO0AIS92n4r9M&X-Amz-Signature=60ecc3ddd97a2992c9a75d69eccd8918eaf5b511789aa326295451a53c47f98a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXD4RWA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBX5P%2FVvc7AgAMJt9VFWuQWsqcjd7G2jx%2BgIpHRteBtYAiBHH9XXQq6KEfjH%2FFkbBHfeNWNDUOUqYoGpAv9D3lKdwir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMByPBI78Q%2FrqM1aJkKtwDxMERQUjQZ1vXEv3XOjxuVFmppP5msGzQq%2FN47TAXKC5hOEkFAKL2RiExTAE%2FBPgw14dFY2afUkwqv4Bp72gKXbyWqvW0hqH5I4CJnOb5ZoKG3P7VVtWZIXejWobXKNqooLkjf0d2rrAIYZ9Qe3TRCqhliBTnkxke32dz6a89qr%2BroQ6MFGEmlWWqiHowIqJa6VqztcW183wlPYulFNv9k5VvyeWPTTdxhiLTqRHB85%2FIcvjaKosSBrQD5O2UP49pUMS4kdvwv%2FPI0BRxxlesOxdMLqbY%2BiaJnTkmkGlfWSmyx9K%2B0dc46gUK%2FWC1U%2BkvWttAarENzsfoov3XYCi2WqTl5VS6e%2BobhmHIZMR%2BIL4uCDvrcEEhTZ6C%2Bkky5d7yjL5smcXYLbisu5RnL26OoetxAecD5KBfT9%2B7RTcfmcQZ38l5x6V5PPlX0%2Fvm9IpTx6KKCzTCECIThzhUAlZjNEJtrK%2FZDbacEUAJYcmDh49YHqLHMXzC1VTAa6r1aD5l3t0heuWSDQAQ3Mt8UC8uT00Y3PA%2FaUS3v0o0SOZoOA7rE0%2FjshqeQWxTmZ18Ou3K1hxpLV8exRp5Gd0im%2BG5TaaVu%2Fc580jiGPA9Ge0zAWHBPpTGSl%2BSexDvy0wwyYzswgY6pgFCG8cfMBu8DcPK7nSxKQArNzK4EbxuRIaPC7afYk5sT%2B0k3lgmj97cDQL849RbrkUIFr69QNASIh%2FXZLIDGujEgcqKRxpHMF5wLBwz8Mut96B%2FiBeluXvjGJJIzfohLc9541CVYREXfnaw1QoYR8uvWQwCEmeMs5iXgXcXH6EiO5ey6D8sNHJZPb0Pw%2BpQR0yZ%2B6ovLxB3UnEYEdUXO0AIS92n4r9M&X-Amz-Signature=e7fda598654a0da16dec402337236fb3fb464f1bddbfc20bde3f31d73df2128d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXD4RWA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBX5P%2FVvc7AgAMJt9VFWuQWsqcjd7G2jx%2BgIpHRteBtYAiBHH9XXQq6KEfjH%2FFkbBHfeNWNDUOUqYoGpAv9D3lKdwir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMByPBI78Q%2FrqM1aJkKtwDxMERQUjQZ1vXEv3XOjxuVFmppP5msGzQq%2FN47TAXKC5hOEkFAKL2RiExTAE%2FBPgw14dFY2afUkwqv4Bp72gKXbyWqvW0hqH5I4CJnOb5ZoKG3P7VVtWZIXejWobXKNqooLkjf0d2rrAIYZ9Qe3TRCqhliBTnkxke32dz6a89qr%2BroQ6MFGEmlWWqiHowIqJa6VqztcW183wlPYulFNv9k5VvyeWPTTdxhiLTqRHB85%2FIcvjaKosSBrQD5O2UP49pUMS4kdvwv%2FPI0BRxxlesOxdMLqbY%2BiaJnTkmkGlfWSmyx9K%2B0dc46gUK%2FWC1U%2BkvWttAarENzsfoov3XYCi2WqTl5VS6e%2BobhmHIZMR%2BIL4uCDvrcEEhTZ6C%2Bkky5d7yjL5smcXYLbisu5RnL26OoetxAecD5KBfT9%2B7RTcfmcQZ38l5x6V5PPlX0%2Fvm9IpTx6KKCzTCECIThzhUAlZjNEJtrK%2FZDbacEUAJYcmDh49YHqLHMXzC1VTAa6r1aD5l3t0heuWSDQAQ3Mt8UC8uT00Y3PA%2FaUS3v0o0SOZoOA7rE0%2FjshqeQWxTmZ18Ou3K1hxpLV8exRp5Gd0im%2BG5TaaVu%2Fc580jiGPA9Ge0zAWHBPpTGSl%2BSexDvy0wwyYzswgY6pgFCG8cfMBu8DcPK7nSxKQArNzK4EbxuRIaPC7afYk5sT%2B0k3lgmj97cDQL849RbrkUIFr69QNASIh%2FXZLIDGujEgcqKRxpHMF5wLBwz8Mut96B%2FiBeluXvjGJJIzfohLc9541CVYREXfnaw1QoYR8uvWQwCEmeMs5iXgXcXH6EiO5ey6D8sNHJZPb0Pw%2BpQR0yZ%2B6ovLxB3UnEYEdUXO0AIS92n4r9M&X-Amz-Signature=86956af1098820de1e299702853f86f0e28e2b835c1ec014522c597712a0d0ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
