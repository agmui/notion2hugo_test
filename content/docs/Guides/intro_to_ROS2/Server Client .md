---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Y6VNXB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIB2M9BMEUMfH46xNmmgVQHRuuPTn%2BkNoakr4huaFPN7nAiBchocnXEhbb1DURMpG3RsJNC7i939s8jdzJrWFLBb9lir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMTlpFiho7ogJC3ZKfKtwDLMX4vNYR55O17Pt6d1oZl9jl8qZquD2B%2F4WNMQgKe%2FqyKvdD61FyNem44LYxGSTj4dcWgiLsnJURa894p%2Bdqk39xv4nPjMCxqwlUV7i%2FPzcGiWQixa9APtT8dOtq5qBnw4FO6YaegpxuEny9wVFFR61QSCVO1ei4nGMJPvZLFJKh0uCcVAMWc%2FarTtcF7GO14vtUj9dFSiaXtiJyaJUAUSFkf%2Fz2Phlw7CQ84UTMqFyL5pR%2Fmo1tfD0k3VRSj6yrVPHSc34QihnkTrudaIlR0SBGtnBb9P6sWK3GipZJFFmav52IZY34LksK%2BiNQMG7VeOnanPFbrLv3eFVgqU4eoBJdQAzX8Q3qvWODcO8YzL84SPcBH%2BDOeC0jQ1BfdUb9im8Hvg66eJkQT7FC07va6DMLI9ceJ%2FNh%2FEPNIRqDf%2Btic%2FW4%2B5NvPS%2FSYA5vAZZ5w52YVVv56orqsDgEtM4GIcBQDD1hS%2FFUaYssAKAv4Wf8ziXmvlDEHK490BiWaWzfOWKVk3OHaU7x4HiN%2Fbx5jI8LicagYeIZv8dyNfQreLhTwlFuAfUXB9Llpz92RyxhIN2WtqMcAiH%2BWGKBN8CJkdekRBAqlBRSqUtVQAYdS%2FnpCp%2BY8SZDvKg9qvAwvoPIxAY6pgGQJspigVRcAV%2FbJArdFesDRVpKGO3U0zg%2BFP6pOaW8288UNmab2BaY6Dd2TticKNebiiXiCCJCUaa%2BkKitjjFZBaJY%2FI3dNuyVBUun8uJiyMrC1KBX3TGYFY38ObN%2FIoRKwB55183O4UboI3%2F%2BrsYjlAmW59Mehmhapj5r3HGUj3QFmYgR49smgbzgLrR3FqR15h1ckxmAY2DNGnjXSHW3cH0yEb5z&X-Amz-Signature=db41c94bf56a7aff7c3cc16c73be995562a14ce594bccdf141b59f299e865cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Y6VNXB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIB2M9BMEUMfH46xNmmgVQHRuuPTn%2BkNoakr4huaFPN7nAiBchocnXEhbb1DURMpG3RsJNC7i939s8jdzJrWFLBb9lir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMTlpFiho7ogJC3ZKfKtwDLMX4vNYR55O17Pt6d1oZl9jl8qZquD2B%2F4WNMQgKe%2FqyKvdD61FyNem44LYxGSTj4dcWgiLsnJURa894p%2Bdqk39xv4nPjMCxqwlUV7i%2FPzcGiWQixa9APtT8dOtq5qBnw4FO6YaegpxuEny9wVFFR61QSCVO1ei4nGMJPvZLFJKh0uCcVAMWc%2FarTtcF7GO14vtUj9dFSiaXtiJyaJUAUSFkf%2Fz2Phlw7CQ84UTMqFyL5pR%2Fmo1tfD0k3VRSj6yrVPHSc34QihnkTrudaIlR0SBGtnBb9P6sWK3GipZJFFmav52IZY34LksK%2BiNQMG7VeOnanPFbrLv3eFVgqU4eoBJdQAzX8Q3qvWODcO8YzL84SPcBH%2BDOeC0jQ1BfdUb9im8Hvg66eJkQT7FC07va6DMLI9ceJ%2FNh%2FEPNIRqDf%2Btic%2FW4%2B5NvPS%2FSYA5vAZZ5w52YVVv56orqsDgEtM4GIcBQDD1hS%2FFUaYssAKAv4Wf8ziXmvlDEHK490BiWaWzfOWKVk3OHaU7x4HiN%2Fbx5jI8LicagYeIZv8dyNfQreLhTwlFuAfUXB9Llpz92RyxhIN2WtqMcAiH%2BWGKBN8CJkdekRBAqlBRSqUtVQAYdS%2FnpCp%2BY8SZDvKg9qvAwvoPIxAY6pgGQJspigVRcAV%2FbJArdFesDRVpKGO3U0zg%2BFP6pOaW8288UNmab2BaY6Dd2TticKNebiiXiCCJCUaa%2BkKitjjFZBaJY%2FI3dNuyVBUun8uJiyMrC1KBX3TGYFY38ObN%2FIoRKwB55183O4UboI3%2F%2BrsYjlAmW59Mehmhapj5r3HGUj3QFmYgR49smgbzgLrR3FqR15h1ckxmAY2DNGnjXSHW3cH0yEb5z&X-Amz-Signature=f7dd9ae02eec20d5eeafa53b8c257c69a5918d6bd7ac7b8d18934a9bf85d4204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Y6VNXB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIB2M9BMEUMfH46xNmmgVQHRuuPTn%2BkNoakr4huaFPN7nAiBchocnXEhbb1DURMpG3RsJNC7i939s8jdzJrWFLBb9lir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMTlpFiho7ogJC3ZKfKtwDLMX4vNYR55O17Pt6d1oZl9jl8qZquD2B%2F4WNMQgKe%2FqyKvdD61FyNem44LYxGSTj4dcWgiLsnJURa894p%2Bdqk39xv4nPjMCxqwlUV7i%2FPzcGiWQixa9APtT8dOtq5qBnw4FO6YaegpxuEny9wVFFR61QSCVO1ei4nGMJPvZLFJKh0uCcVAMWc%2FarTtcF7GO14vtUj9dFSiaXtiJyaJUAUSFkf%2Fz2Phlw7CQ84UTMqFyL5pR%2Fmo1tfD0k3VRSj6yrVPHSc34QihnkTrudaIlR0SBGtnBb9P6sWK3GipZJFFmav52IZY34LksK%2BiNQMG7VeOnanPFbrLv3eFVgqU4eoBJdQAzX8Q3qvWODcO8YzL84SPcBH%2BDOeC0jQ1BfdUb9im8Hvg66eJkQT7FC07va6DMLI9ceJ%2FNh%2FEPNIRqDf%2Btic%2FW4%2B5NvPS%2FSYA5vAZZ5w52YVVv56orqsDgEtM4GIcBQDD1hS%2FFUaYssAKAv4Wf8ziXmvlDEHK490BiWaWzfOWKVk3OHaU7x4HiN%2Fbx5jI8LicagYeIZv8dyNfQreLhTwlFuAfUXB9Llpz92RyxhIN2WtqMcAiH%2BWGKBN8CJkdekRBAqlBRSqUtVQAYdS%2FnpCp%2BY8SZDvKg9qvAwvoPIxAY6pgGQJspigVRcAV%2FbJArdFesDRVpKGO3U0zg%2BFP6pOaW8288UNmab2BaY6Dd2TticKNebiiXiCCJCUaa%2BkKitjjFZBaJY%2FI3dNuyVBUun8uJiyMrC1KBX3TGYFY38ObN%2FIoRKwB55183O4UboI3%2F%2BrsYjlAmW59Mehmhapj5r3HGUj3QFmYgR49smgbzgLrR3FqR15h1ckxmAY2DNGnjXSHW3cH0yEb5z&X-Amz-Signature=3be161e37e2de2ce2938a32a5f5a5dfcc7bf61cae65a13468573834a9ae4664d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Y6VNXB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIB2M9BMEUMfH46xNmmgVQHRuuPTn%2BkNoakr4huaFPN7nAiBchocnXEhbb1DURMpG3RsJNC7i939s8jdzJrWFLBb9lir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMTlpFiho7ogJC3ZKfKtwDLMX4vNYR55O17Pt6d1oZl9jl8qZquD2B%2F4WNMQgKe%2FqyKvdD61FyNem44LYxGSTj4dcWgiLsnJURa894p%2Bdqk39xv4nPjMCxqwlUV7i%2FPzcGiWQixa9APtT8dOtq5qBnw4FO6YaegpxuEny9wVFFR61QSCVO1ei4nGMJPvZLFJKh0uCcVAMWc%2FarTtcF7GO14vtUj9dFSiaXtiJyaJUAUSFkf%2Fz2Phlw7CQ84UTMqFyL5pR%2Fmo1tfD0k3VRSj6yrVPHSc34QihnkTrudaIlR0SBGtnBb9P6sWK3GipZJFFmav52IZY34LksK%2BiNQMG7VeOnanPFbrLv3eFVgqU4eoBJdQAzX8Q3qvWODcO8YzL84SPcBH%2BDOeC0jQ1BfdUb9im8Hvg66eJkQT7FC07va6DMLI9ceJ%2FNh%2FEPNIRqDf%2Btic%2FW4%2B5NvPS%2FSYA5vAZZ5w52YVVv56orqsDgEtM4GIcBQDD1hS%2FFUaYssAKAv4Wf8ziXmvlDEHK490BiWaWzfOWKVk3OHaU7x4HiN%2Fbx5jI8LicagYeIZv8dyNfQreLhTwlFuAfUXB9Llpz92RyxhIN2WtqMcAiH%2BWGKBN8CJkdekRBAqlBRSqUtVQAYdS%2FnpCp%2BY8SZDvKg9qvAwvoPIxAY6pgGQJspigVRcAV%2FbJArdFesDRVpKGO3U0zg%2BFP6pOaW8288UNmab2BaY6Dd2TticKNebiiXiCCJCUaa%2BkKitjjFZBaJY%2FI3dNuyVBUun8uJiyMrC1KBX3TGYFY38ObN%2FIoRKwB55183O4UboI3%2F%2BrsYjlAmW59Mehmhapj5r3HGUj3QFmYgR49smgbzgLrR3FqR15h1ckxmAY2DNGnjXSHW3cH0yEb5z&X-Amz-Signature=5beb82b66df7cdedad990f18d6d1f16f24092f87bb184b279b6ee2ae6a5c6296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Y6VNXB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIB2M9BMEUMfH46xNmmgVQHRuuPTn%2BkNoakr4huaFPN7nAiBchocnXEhbb1DURMpG3RsJNC7i939s8jdzJrWFLBb9lir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMTlpFiho7ogJC3ZKfKtwDLMX4vNYR55O17Pt6d1oZl9jl8qZquD2B%2F4WNMQgKe%2FqyKvdD61FyNem44LYxGSTj4dcWgiLsnJURa894p%2Bdqk39xv4nPjMCxqwlUV7i%2FPzcGiWQixa9APtT8dOtq5qBnw4FO6YaegpxuEny9wVFFR61QSCVO1ei4nGMJPvZLFJKh0uCcVAMWc%2FarTtcF7GO14vtUj9dFSiaXtiJyaJUAUSFkf%2Fz2Phlw7CQ84UTMqFyL5pR%2Fmo1tfD0k3VRSj6yrVPHSc34QihnkTrudaIlR0SBGtnBb9P6sWK3GipZJFFmav52IZY34LksK%2BiNQMG7VeOnanPFbrLv3eFVgqU4eoBJdQAzX8Q3qvWODcO8YzL84SPcBH%2BDOeC0jQ1BfdUb9im8Hvg66eJkQT7FC07va6DMLI9ceJ%2FNh%2FEPNIRqDf%2Btic%2FW4%2B5NvPS%2FSYA5vAZZ5w52YVVv56orqsDgEtM4GIcBQDD1hS%2FFUaYssAKAv4Wf8ziXmvlDEHK490BiWaWzfOWKVk3OHaU7x4HiN%2Fbx5jI8LicagYeIZv8dyNfQreLhTwlFuAfUXB9Llpz92RyxhIN2WtqMcAiH%2BWGKBN8CJkdekRBAqlBRSqUtVQAYdS%2FnpCp%2BY8SZDvKg9qvAwvoPIxAY6pgGQJspigVRcAV%2FbJArdFesDRVpKGO3U0zg%2BFP6pOaW8288UNmab2BaY6Dd2TticKNebiiXiCCJCUaa%2BkKitjjFZBaJY%2FI3dNuyVBUun8uJiyMrC1KBX3TGYFY38ObN%2FIoRKwB55183O4UboI3%2F%2BrsYjlAmW59Mehmhapj5r3HGUj3QFmYgR49smgbzgLrR3FqR15h1ckxmAY2DNGnjXSHW3cH0yEb5z&X-Amz-Signature=90f91903866e7b14e55d4e0cf53d583bbcd191555120649c1f2dd2a1d0f1a262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
