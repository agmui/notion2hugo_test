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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIZXHN5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCwr%2FesvqR5gl%2FClYQqeVy2h37qMvjp1c4LIdUlDDV3qgIgNUzPS3fv66w76lVFQCZuBLh4ucljOPQsLsvWXD7yo38q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJKn3nc7abP7F5UznyrcA0tMaHk6CSbG80SpoFzBOHNbx8UJuxaJU%2BNl3kvbDb6cQnMikTJE%2F9fUMxYClCZ%2Fciu4V1qf6wKvMTrwe4PjfSOAZUW%2F0Zc972k8LkmzvsWMW6Z9wJE7hZ3%2B2B%2FCTUBCbx3BInT1WmH5au9adkefh32jJmtu4I2%2FSdHmHbetCf9cWNS83B4ASPGMCHqMRiAwD5cwbCP6LNUjen2OD3FLA3WmuNaoiYZNrdILLfVPhirXHGv4IDfBwPYAV2XOoKLB%2B%2Fp2vRkGv6jDUoYO%2B0NXy0eXBhPDM%2BGS%2Fp5gg1F6Y6wxfOWtg8mR6p7Gt3%2BtunUdTmVSdTkfccyVboLiT%2BQGOy%2BkYeosbdGh%2BuTzB5R7bLM8mifQi4QL0VE6QvWUeovSKGocVAhbJIiz4zdFC8tTluv3y3EIrLzxw2kcOCoWEzMeHrCaHylUX9qkaLQ2wpJ1JFV6uwVPiyAIpFOww1mpZc71jf662UollhmofqGwJapFMx3OcxBPlsJtP4LrD%2Fdt5BxfKiectcMCixFtv9tKYaO9VwkzwLDfUMrPdBwQ70Zox7WqCn1E6zmVgW98f9M7W%2FYWOxtn7chI2bMOPGUe1bqBeZAQ5NZHNNJDIE5CZHIXxFVYEBvFMYXik8oPML%2Bdx70GOqUBD20C%2Fe0V8ePZk7n8hMfaYnHbwEftqCXUjFjHL0CaMkAATEsjjtAJuOQZ1LTlAzASj5DKnCDRQ3oU7ZUUeovyRs%2F5IJmxSX4peD%2Brv%2BCTi0CRoo7heqnYAnbV2YCb60xcPBNvvIcGCHdjihjda5vkfbkhIer8eV9RcDwZaqlIcFE1z3ks5Do503%2B7wQNtWHi2pUfFafEFUjqGerpxvws594jrhtaH&X-Amz-Signature=1ac799e2d2f8ba87470430a410da9d3f477781f6692a0c4ba855b729e193d8f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIZXHN5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCwr%2FesvqR5gl%2FClYQqeVy2h37qMvjp1c4LIdUlDDV3qgIgNUzPS3fv66w76lVFQCZuBLh4ucljOPQsLsvWXD7yo38q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJKn3nc7abP7F5UznyrcA0tMaHk6CSbG80SpoFzBOHNbx8UJuxaJU%2BNl3kvbDb6cQnMikTJE%2F9fUMxYClCZ%2Fciu4V1qf6wKvMTrwe4PjfSOAZUW%2F0Zc972k8LkmzvsWMW6Z9wJE7hZ3%2B2B%2FCTUBCbx3BInT1WmH5au9adkefh32jJmtu4I2%2FSdHmHbetCf9cWNS83B4ASPGMCHqMRiAwD5cwbCP6LNUjen2OD3FLA3WmuNaoiYZNrdILLfVPhirXHGv4IDfBwPYAV2XOoKLB%2B%2Fp2vRkGv6jDUoYO%2B0NXy0eXBhPDM%2BGS%2Fp5gg1F6Y6wxfOWtg8mR6p7Gt3%2BtunUdTmVSdTkfccyVboLiT%2BQGOy%2BkYeosbdGh%2BuTzB5R7bLM8mifQi4QL0VE6QvWUeovSKGocVAhbJIiz4zdFC8tTluv3y3EIrLzxw2kcOCoWEzMeHrCaHylUX9qkaLQ2wpJ1JFV6uwVPiyAIpFOww1mpZc71jf662UollhmofqGwJapFMx3OcxBPlsJtP4LrD%2Fdt5BxfKiectcMCixFtv9tKYaO9VwkzwLDfUMrPdBwQ70Zox7WqCn1E6zmVgW98f9M7W%2FYWOxtn7chI2bMOPGUe1bqBeZAQ5NZHNNJDIE5CZHIXxFVYEBvFMYXik8oPML%2Bdx70GOqUBD20C%2Fe0V8ePZk7n8hMfaYnHbwEftqCXUjFjHL0CaMkAATEsjjtAJuOQZ1LTlAzASj5DKnCDRQ3oU7ZUUeovyRs%2F5IJmxSX4peD%2Brv%2BCTi0CRoo7heqnYAnbV2YCb60xcPBNvvIcGCHdjihjda5vkfbkhIer8eV9RcDwZaqlIcFE1z3ks5Do503%2B7wQNtWHi2pUfFafEFUjqGerpxvws594jrhtaH&X-Amz-Signature=4b8238e758bcb232a76b60fa7e0b9f89b9c1e9d91a4e112b7c1dce7b3849a71d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIZXHN5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCwr%2FesvqR5gl%2FClYQqeVy2h37qMvjp1c4LIdUlDDV3qgIgNUzPS3fv66w76lVFQCZuBLh4ucljOPQsLsvWXD7yo38q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJKn3nc7abP7F5UznyrcA0tMaHk6CSbG80SpoFzBOHNbx8UJuxaJU%2BNl3kvbDb6cQnMikTJE%2F9fUMxYClCZ%2Fciu4V1qf6wKvMTrwe4PjfSOAZUW%2F0Zc972k8LkmzvsWMW6Z9wJE7hZ3%2B2B%2FCTUBCbx3BInT1WmH5au9adkefh32jJmtu4I2%2FSdHmHbetCf9cWNS83B4ASPGMCHqMRiAwD5cwbCP6LNUjen2OD3FLA3WmuNaoiYZNrdILLfVPhirXHGv4IDfBwPYAV2XOoKLB%2B%2Fp2vRkGv6jDUoYO%2B0NXy0eXBhPDM%2BGS%2Fp5gg1F6Y6wxfOWtg8mR6p7Gt3%2BtunUdTmVSdTkfccyVboLiT%2BQGOy%2BkYeosbdGh%2BuTzB5R7bLM8mifQi4QL0VE6QvWUeovSKGocVAhbJIiz4zdFC8tTluv3y3EIrLzxw2kcOCoWEzMeHrCaHylUX9qkaLQ2wpJ1JFV6uwVPiyAIpFOww1mpZc71jf662UollhmofqGwJapFMx3OcxBPlsJtP4LrD%2Fdt5BxfKiectcMCixFtv9tKYaO9VwkzwLDfUMrPdBwQ70Zox7WqCn1E6zmVgW98f9M7W%2FYWOxtn7chI2bMOPGUe1bqBeZAQ5NZHNNJDIE5CZHIXxFVYEBvFMYXik8oPML%2Bdx70GOqUBD20C%2Fe0V8ePZk7n8hMfaYnHbwEftqCXUjFjHL0CaMkAATEsjjtAJuOQZ1LTlAzASj5DKnCDRQ3oU7ZUUeovyRs%2F5IJmxSX4peD%2Brv%2BCTi0CRoo7heqnYAnbV2YCb60xcPBNvvIcGCHdjihjda5vkfbkhIer8eV9RcDwZaqlIcFE1z3ks5Do503%2B7wQNtWHi2pUfFafEFUjqGerpxvws594jrhtaH&X-Amz-Signature=2d25df973007342ef3da4228e7d2e5dfa99307eebb9baece2508b4cd3ddffc58&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIZXHN5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCwr%2FesvqR5gl%2FClYQqeVy2h37qMvjp1c4LIdUlDDV3qgIgNUzPS3fv66w76lVFQCZuBLh4ucljOPQsLsvWXD7yo38q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJKn3nc7abP7F5UznyrcA0tMaHk6CSbG80SpoFzBOHNbx8UJuxaJU%2BNl3kvbDb6cQnMikTJE%2F9fUMxYClCZ%2Fciu4V1qf6wKvMTrwe4PjfSOAZUW%2F0Zc972k8LkmzvsWMW6Z9wJE7hZ3%2B2B%2FCTUBCbx3BInT1WmH5au9adkefh32jJmtu4I2%2FSdHmHbetCf9cWNS83B4ASPGMCHqMRiAwD5cwbCP6LNUjen2OD3FLA3WmuNaoiYZNrdILLfVPhirXHGv4IDfBwPYAV2XOoKLB%2B%2Fp2vRkGv6jDUoYO%2B0NXy0eXBhPDM%2BGS%2Fp5gg1F6Y6wxfOWtg8mR6p7Gt3%2BtunUdTmVSdTkfccyVboLiT%2BQGOy%2BkYeosbdGh%2BuTzB5R7bLM8mifQi4QL0VE6QvWUeovSKGocVAhbJIiz4zdFC8tTluv3y3EIrLzxw2kcOCoWEzMeHrCaHylUX9qkaLQ2wpJ1JFV6uwVPiyAIpFOww1mpZc71jf662UollhmofqGwJapFMx3OcxBPlsJtP4LrD%2Fdt5BxfKiectcMCixFtv9tKYaO9VwkzwLDfUMrPdBwQ70Zox7WqCn1E6zmVgW98f9M7W%2FYWOxtn7chI2bMOPGUe1bqBeZAQ5NZHNNJDIE5CZHIXxFVYEBvFMYXik8oPML%2Bdx70GOqUBD20C%2Fe0V8ePZk7n8hMfaYnHbwEftqCXUjFjHL0CaMkAATEsjjtAJuOQZ1LTlAzASj5DKnCDRQ3oU7ZUUeovyRs%2F5IJmxSX4peD%2Brv%2BCTi0CRoo7heqnYAnbV2YCb60xcPBNvvIcGCHdjihjda5vkfbkhIer8eV9RcDwZaqlIcFE1z3ks5Do503%2B7wQNtWHi2pUfFafEFUjqGerpxvws594jrhtaH&X-Amz-Signature=5c3fadb7ea0397df935ac1653930bb1fe7e1bd91c02e620be577732e1bc7ea12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIZXHN5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCwr%2FesvqR5gl%2FClYQqeVy2h37qMvjp1c4LIdUlDDV3qgIgNUzPS3fv66w76lVFQCZuBLh4ucljOPQsLsvWXD7yo38q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJKn3nc7abP7F5UznyrcA0tMaHk6CSbG80SpoFzBOHNbx8UJuxaJU%2BNl3kvbDb6cQnMikTJE%2F9fUMxYClCZ%2Fciu4V1qf6wKvMTrwe4PjfSOAZUW%2F0Zc972k8LkmzvsWMW6Z9wJE7hZ3%2B2B%2FCTUBCbx3BInT1WmH5au9adkefh32jJmtu4I2%2FSdHmHbetCf9cWNS83B4ASPGMCHqMRiAwD5cwbCP6LNUjen2OD3FLA3WmuNaoiYZNrdILLfVPhirXHGv4IDfBwPYAV2XOoKLB%2B%2Fp2vRkGv6jDUoYO%2B0NXy0eXBhPDM%2BGS%2Fp5gg1F6Y6wxfOWtg8mR6p7Gt3%2BtunUdTmVSdTkfccyVboLiT%2BQGOy%2BkYeosbdGh%2BuTzB5R7bLM8mifQi4QL0VE6QvWUeovSKGocVAhbJIiz4zdFC8tTluv3y3EIrLzxw2kcOCoWEzMeHrCaHylUX9qkaLQ2wpJ1JFV6uwVPiyAIpFOww1mpZc71jf662UollhmofqGwJapFMx3OcxBPlsJtP4LrD%2Fdt5BxfKiectcMCixFtv9tKYaO9VwkzwLDfUMrPdBwQ70Zox7WqCn1E6zmVgW98f9M7W%2FYWOxtn7chI2bMOPGUe1bqBeZAQ5NZHNNJDIE5CZHIXxFVYEBvFMYXik8oPML%2Bdx70GOqUBD20C%2Fe0V8ePZk7n8hMfaYnHbwEftqCXUjFjHL0CaMkAATEsjjtAJuOQZ1LTlAzASj5DKnCDRQ3oU7ZUUeovyRs%2F5IJmxSX4peD%2Brv%2BCTi0CRoo7heqnYAnbV2YCb60xcPBNvvIcGCHdjihjda5vkfbkhIer8eV9RcDwZaqlIcFE1z3ks5Do503%2B7wQNtWHi2pUfFafEFUjqGerpxvws594jrhtaH&X-Amz-Signature=4d4c259a67112c56457dbdbc396f43b7e90364aea3b55cd9b21bba13701b7ded&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
