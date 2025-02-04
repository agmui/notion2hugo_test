---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Server Client .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVAKREH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICLTr1gQNtp%2B%2BIsIujTLVeVrZ%2BV%2BP9VeIDI00zmBgBkqAiB%2BdtBfFZfgvRuRsJCp60KjKbkKadeCorObsztF8Gr%2FkSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMZ4%2FLurgLnN1FIfB0KtwDCyRl%2BGrVoubrhsjtC19FGljuf4buAJBXNQ1bvxfYvzAPY2e3gYb%2FNzXTCpOeR5d2AzNB%2Ft4cU21roToCpzDzT2hdZkHQ2w21Zyq6Hp0Fs7JDKCX%2FgkoLmkp5x4Is%2BuGSrETb%2BHjbTxyzoF4Uxse1vWHzdeFiazufOwShq9VJrbMg4HBU5ZL6VdN3be8LNslSFbO8H330stOOyZvQQh5A2nCcyWLM%2Fa4pfX%2BGcrT88A8VBJtrAxMVQfdnBaPoAXE2SvDZxQ0CZj1yAG2JhtrDm2ouzL4iGK3UAoyYLBybM2OAyRMXKssMGU4RAPT0vefaClHaadsFud0%2FpmbHsgEQ7WzbKP%2BaCk3%2BIjaNl4AYOhMfe05%2BS%2FM%2BgY%2Fnp467AVFRrE2WVeHEm3IJP%2FhZZx2FbsFIQbpRZAyGC5HEct8znVfuJHTm6N9zEmGWwoMJKitvYvKlHdpiTBVareabHlZVm%2FtCVLQ7vKZxuNer1zv2XJsMVimhj1T0gOWPLfFC0YzP9I6nB%2FNnkoeYlv0FcZeDq4cbQqRxOaI4OvVQFJ8HE95Jbp%2BnCzFbALfyYB7M0FR74od7pQ%2BIfEJKcirt7k7lXddhO8joHduuMa6ZzRoFCPGwUSHa9tNB9%2FC3AZwwgJWKvQY6pgH3Bg3P8gKX8PdpdGUTJQrDX%2FcLxK3U1Uf2wj2ELRPD9%2F0B0CdgjZdXzemxEDZwOd7lVvLrFAx51WfY%2FxRL8%2B4DJzUJvdNpTxprwcV2Pq33tMzQIdo259hSyP%2BTnFTNkG3UkFsuLd21g5T5o6hBI6a%2FvyGtIsEsrKX6NZ%2FBYiM6q%2BdLJUvUa%2FRJvYtri2hFq%2BqIW30Rb6hy8%2BYEMwuv6l1ZleVT1PvH&X-Amz-Signature=b97d6d4e231de6b15c515373a20c412849feae483e18a9a483a1a1ae7391279b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVAKREH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICLTr1gQNtp%2B%2BIsIujTLVeVrZ%2BV%2BP9VeIDI00zmBgBkqAiB%2BdtBfFZfgvRuRsJCp60KjKbkKadeCorObsztF8Gr%2FkSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMZ4%2FLurgLnN1FIfB0KtwDCyRl%2BGrVoubrhsjtC19FGljuf4buAJBXNQ1bvxfYvzAPY2e3gYb%2FNzXTCpOeR5d2AzNB%2Ft4cU21roToCpzDzT2hdZkHQ2w21Zyq6Hp0Fs7JDKCX%2FgkoLmkp5x4Is%2BuGSrETb%2BHjbTxyzoF4Uxse1vWHzdeFiazufOwShq9VJrbMg4HBU5ZL6VdN3be8LNslSFbO8H330stOOyZvQQh5A2nCcyWLM%2Fa4pfX%2BGcrT88A8VBJtrAxMVQfdnBaPoAXE2SvDZxQ0CZj1yAG2JhtrDm2ouzL4iGK3UAoyYLBybM2OAyRMXKssMGU4RAPT0vefaClHaadsFud0%2FpmbHsgEQ7WzbKP%2BaCk3%2BIjaNl4AYOhMfe05%2BS%2FM%2BgY%2Fnp467AVFRrE2WVeHEm3IJP%2FhZZx2FbsFIQbpRZAyGC5HEct8znVfuJHTm6N9zEmGWwoMJKitvYvKlHdpiTBVareabHlZVm%2FtCVLQ7vKZxuNer1zv2XJsMVimhj1T0gOWPLfFC0YzP9I6nB%2FNnkoeYlv0FcZeDq4cbQqRxOaI4OvVQFJ8HE95Jbp%2BnCzFbALfyYB7M0FR74od7pQ%2BIfEJKcirt7k7lXddhO8joHduuMa6ZzRoFCPGwUSHa9tNB9%2FC3AZwwgJWKvQY6pgH3Bg3P8gKX8PdpdGUTJQrDX%2FcLxK3U1Uf2wj2ELRPD9%2F0B0CdgjZdXzemxEDZwOd7lVvLrFAx51WfY%2FxRL8%2B4DJzUJvdNpTxprwcV2Pq33tMzQIdo259hSyP%2BTnFTNkG3UkFsuLd21g5T5o6hBI6a%2FvyGtIsEsrKX6NZ%2FBYiM6q%2BdLJUvUa%2FRJvYtri2hFq%2BqIW30Rb6hy8%2BYEMwuv6l1ZleVT1PvH&X-Amz-Signature=56c3d3b9a94064ba8a2d4f25d818b39a5e42f3b82d13db08e4ce53df1ac95510&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVAKREH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICLTr1gQNtp%2B%2BIsIujTLVeVrZ%2BV%2BP9VeIDI00zmBgBkqAiB%2BdtBfFZfgvRuRsJCp60KjKbkKadeCorObsztF8Gr%2FkSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMZ4%2FLurgLnN1FIfB0KtwDCyRl%2BGrVoubrhsjtC19FGljuf4buAJBXNQ1bvxfYvzAPY2e3gYb%2FNzXTCpOeR5d2AzNB%2Ft4cU21roToCpzDzT2hdZkHQ2w21Zyq6Hp0Fs7JDKCX%2FgkoLmkp5x4Is%2BuGSrETb%2BHjbTxyzoF4Uxse1vWHzdeFiazufOwShq9VJrbMg4HBU5ZL6VdN3be8LNslSFbO8H330stOOyZvQQh5A2nCcyWLM%2Fa4pfX%2BGcrT88A8VBJtrAxMVQfdnBaPoAXE2SvDZxQ0CZj1yAG2JhtrDm2ouzL4iGK3UAoyYLBybM2OAyRMXKssMGU4RAPT0vefaClHaadsFud0%2FpmbHsgEQ7WzbKP%2BaCk3%2BIjaNl4AYOhMfe05%2BS%2FM%2BgY%2Fnp467AVFRrE2WVeHEm3IJP%2FhZZx2FbsFIQbpRZAyGC5HEct8znVfuJHTm6N9zEmGWwoMJKitvYvKlHdpiTBVareabHlZVm%2FtCVLQ7vKZxuNer1zv2XJsMVimhj1T0gOWPLfFC0YzP9I6nB%2FNnkoeYlv0FcZeDq4cbQqRxOaI4OvVQFJ8HE95Jbp%2BnCzFbALfyYB7M0FR74od7pQ%2BIfEJKcirt7k7lXddhO8joHduuMa6ZzRoFCPGwUSHa9tNB9%2FC3AZwwgJWKvQY6pgH3Bg3P8gKX8PdpdGUTJQrDX%2FcLxK3U1Uf2wj2ELRPD9%2F0B0CdgjZdXzemxEDZwOd7lVvLrFAx51WfY%2FxRL8%2B4DJzUJvdNpTxprwcV2Pq33tMzQIdo259hSyP%2BTnFTNkG3UkFsuLd21g5T5o6hBI6a%2FvyGtIsEsrKX6NZ%2FBYiM6q%2BdLJUvUa%2FRJvYtri2hFq%2BqIW30Rb6hy8%2BYEMwuv6l1ZleVT1PvH&X-Amz-Signature=335dfc21bb4ae0410a7b3bc7208af69350863e448e8cc6904e32fe861c114b96&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVAKREH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICLTr1gQNtp%2B%2BIsIujTLVeVrZ%2BV%2BP9VeIDI00zmBgBkqAiB%2BdtBfFZfgvRuRsJCp60KjKbkKadeCorObsztF8Gr%2FkSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMZ4%2FLurgLnN1FIfB0KtwDCyRl%2BGrVoubrhsjtC19FGljuf4buAJBXNQ1bvxfYvzAPY2e3gYb%2FNzXTCpOeR5d2AzNB%2Ft4cU21roToCpzDzT2hdZkHQ2w21Zyq6Hp0Fs7JDKCX%2FgkoLmkp5x4Is%2BuGSrETb%2BHjbTxyzoF4Uxse1vWHzdeFiazufOwShq9VJrbMg4HBU5ZL6VdN3be8LNslSFbO8H330stOOyZvQQh5A2nCcyWLM%2Fa4pfX%2BGcrT88A8VBJtrAxMVQfdnBaPoAXE2SvDZxQ0CZj1yAG2JhtrDm2ouzL4iGK3UAoyYLBybM2OAyRMXKssMGU4RAPT0vefaClHaadsFud0%2FpmbHsgEQ7WzbKP%2BaCk3%2BIjaNl4AYOhMfe05%2BS%2FM%2BgY%2Fnp467AVFRrE2WVeHEm3IJP%2FhZZx2FbsFIQbpRZAyGC5HEct8znVfuJHTm6N9zEmGWwoMJKitvYvKlHdpiTBVareabHlZVm%2FtCVLQ7vKZxuNer1zv2XJsMVimhj1T0gOWPLfFC0YzP9I6nB%2FNnkoeYlv0FcZeDq4cbQqRxOaI4OvVQFJ8HE95Jbp%2BnCzFbALfyYB7M0FR74od7pQ%2BIfEJKcirt7k7lXddhO8joHduuMa6ZzRoFCPGwUSHa9tNB9%2FC3AZwwgJWKvQY6pgH3Bg3P8gKX8PdpdGUTJQrDX%2FcLxK3U1Uf2wj2ELRPD9%2F0B0CdgjZdXzemxEDZwOd7lVvLrFAx51WfY%2FxRL8%2B4DJzUJvdNpTxprwcV2Pq33tMzQIdo259hSyP%2BTnFTNkG3UkFsuLd21g5T5o6hBI6a%2FvyGtIsEsrKX6NZ%2FBYiM6q%2BdLJUvUa%2FRJvYtri2hFq%2BqIW30Rb6hy8%2BYEMwuv6l1ZleVT1PvH&X-Amz-Signature=1e34b5c6e7688360091affbaf18ae62f97c16117429eab4f3beca7de6768ee9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVAKREH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICLTr1gQNtp%2B%2BIsIujTLVeVrZ%2BV%2BP9VeIDI00zmBgBkqAiB%2BdtBfFZfgvRuRsJCp60KjKbkKadeCorObsztF8Gr%2FkSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMZ4%2FLurgLnN1FIfB0KtwDCyRl%2BGrVoubrhsjtC19FGljuf4buAJBXNQ1bvxfYvzAPY2e3gYb%2FNzXTCpOeR5d2AzNB%2Ft4cU21roToCpzDzT2hdZkHQ2w21Zyq6Hp0Fs7JDKCX%2FgkoLmkp5x4Is%2BuGSrETb%2BHjbTxyzoF4Uxse1vWHzdeFiazufOwShq9VJrbMg4HBU5ZL6VdN3be8LNslSFbO8H330stOOyZvQQh5A2nCcyWLM%2Fa4pfX%2BGcrT88A8VBJtrAxMVQfdnBaPoAXE2SvDZxQ0CZj1yAG2JhtrDm2ouzL4iGK3UAoyYLBybM2OAyRMXKssMGU4RAPT0vefaClHaadsFud0%2FpmbHsgEQ7WzbKP%2BaCk3%2BIjaNl4AYOhMfe05%2BS%2FM%2BgY%2Fnp467AVFRrE2WVeHEm3IJP%2FhZZx2FbsFIQbpRZAyGC5HEct8znVfuJHTm6N9zEmGWwoMJKitvYvKlHdpiTBVareabHlZVm%2FtCVLQ7vKZxuNer1zv2XJsMVimhj1T0gOWPLfFC0YzP9I6nB%2FNnkoeYlv0FcZeDq4cbQqRxOaI4OvVQFJ8HE95Jbp%2BnCzFbALfyYB7M0FR74od7pQ%2BIfEJKcirt7k7lXddhO8joHduuMa6ZzRoFCPGwUSHa9tNB9%2FC3AZwwgJWKvQY6pgH3Bg3P8gKX8PdpdGUTJQrDX%2FcLxK3U1Uf2wj2ELRPD9%2F0B0CdgjZdXzemxEDZwOd7lVvLrFAx51WfY%2FxRL8%2B4DJzUJvdNpTxprwcV2Pq33tMzQIdo259hSyP%2BTnFTNkG3UkFsuLd21g5T5o6hBI6a%2FvyGtIsEsrKX6NZ%2FBYiM6q%2BdLJUvUa%2FRJvYtri2hFq%2BqIW30Rb6hy8%2BYEMwuv6l1ZleVT1PvH&X-Amz-Signature=6b240a4adfeb9efee0ab76bf348a01e0081cd447e9ec51e6730505a5dbf3360a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
