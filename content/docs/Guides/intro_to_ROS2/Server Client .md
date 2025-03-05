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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMRBTTM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwplMR%2BVDMBdV8QpvV%2FB%2ByIBVrtQ3%2FbXypsMCivPT9lwIhAPWtp2d5oI%2Bs2KIEVUs%2B5v1bspiJ%2B%2Bc%2BKv8SvktNCiKrKv8DCBYQABoMNjM3NDIzMTgzODA1IgzUezpHFKvGi09Ur3Yq3APUNHw2wif3jqmxr653ycVh7SvP4s9wa7FxC%2FH0Jm17cBR0uvr62vqE3Ju7vDx%2F5uzSBpd4NxHgMGAFpID3uc2ww1JNfAGGEiRl9Q%2B3pMv6ZIlYeMXTZjduLLafM58FvG4Tf7hS7YlbdBdMb7Nq8YzqpPqRkraxLMi8xSdcJgjXj6DOmBuRhQevFUmXqeuMrZ3c1l38zoIB8pM6Z%2FDAhSEsgR2qSDJ7jcSTfdoomhQsJKh38ith53UJRIDBzzCivbznhEvzWEAr1aHRh31JOGgbcaS6nWEwKoIzEFI1%2FZaNdQHLHEnthAZVWBxg6dyYSC6HYJ2VtjKTHSc4Qcldj%2FqASM%2B2o3k8sgeK122WNB7wZS2gn3QFZWmVj2f8Rcu3FmDLuW1oUgVdWt2iKAu%2FVGCF7jMq66knCBKpMBuAIS5VyjlKC3aSJw7Wwl2qNcMwPK3YtU6HHJA4JZphUU7OxxJgYK%2BaqS%2BplI0z4EKMvdONrjLR%2FtsTjhxpcVZlL%2FD%2BKilsmCapdCii2R6ObUHOqbU3IMviJ3phFGvY8%2BdiCNKVXYFuiqiFyibwHgNXWSWsuTmjDdveb7rfOe8Isu80GnOm8cp6dBjCRLJubW1H1QJ%2B%2BfJ2GRAqbO25BYtwSzCzlqG%2BBjqkAfjB7XY7MxIxDAoIIb2hLx1hO%2FBZ6Fu%2Fm5swF%2FtEZWkTMZ0NBSXfGI496bL5YOz5PcE5DLgnpC3bZWKSI4cgMDXB6h0yg8kX1S4q7LLFWt7vSoA7wxTHneEyi8JsaDh0wNrPppS08YC8xuMNfHhNOQ869fpou%2B4KRFycK9gNWW80IE%2B1gFIienkE2gfjpSadCpcLmAcrAVWkZtbaW7SNeTtWyl%2F9&X-Amz-Signature=559704bc1267cd44f734b6cdec7109e26c365e1290091256819cb75b9a494ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMRBTTM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwplMR%2BVDMBdV8QpvV%2FB%2ByIBVrtQ3%2FbXypsMCivPT9lwIhAPWtp2d5oI%2Bs2KIEVUs%2B5v1bspiJ%2B%2Bc%2BKv8SvktNCiKrKv8DCBYQABoMNjM3NDIzMTgzODA1IgzUezpHFKvGi09Ur3Yq3APUNHw2wif3jqmxr653ycVh7SvP4s9wa7FxC%2FH0Jm17cBR0uvr62vqE3Ju7vDx%2F5uzSBpd4NxHgMGAFpID3uc2ww1JNfAGGEiRl9Q%2B3pMv6ZIlYeMXTZjduLLafM58FvG4Tf7hS7YlbdBdMb7Nq8YzqpPqRkraxLMi8xSdcJgjXj6DOmBuRhQevFUmXqeuMrZ3c1l38zoIB8pM6Z%2FDAhSEsgR2qSDJ7jcSTfdoomhQsJKh38ith53UJRIDBzzCivbznhEvzWEAr1aHRh31JOGgbcaS6nWEwKoIzEFI1%2FZaNdQHLHEnthAZVWBxg6dyYSC6HYJ2VtjKTHSc4Qcldj%2FqASM%2B2o3k8sgeK122WNB7wZS2gn3QFZWmVj2f8Rcu3FmDLuW1oUgVdWt2iKAu%2FVGCF7jMq66knCBKpMBuAIS5VyjlKC3aSJw7Wwl2qNcMwPK3YtU6HHJA4JZphUU7OxxJgYK%2BaqS%2BplI0z4EKMvdONrjLR%2FtsTjhxpcVZlL%2FD%2BKilsmCapdCii2R6ObUHOqbU3IMviJ3phFGvY8%2BdiCNKVXYFuiqiFyibwHgNXWSWsuTmjDdveb7rfOe8Isu80GnOm8cp6dBjCRLJubW1H1QJ%2B%2BfJ2GRAqbO25BYtwSzCzlqG%2BBjqkAfjB7XY7MxIxDAoIIb2hLx1hO%2FBZ6Fu%2Fm5swF%2FtEZWkTMZ0NBSXfGI496bL5YOz5PcE5DLgnpC3bZWKSI4cgMDXB6h0yg8kX1S4q7LLFWt7vSoA7wxTHneEyi8JsaDh0wNrPppS08YC8xuMNfHhNOQ869fpou%2B4KRFycK9gNWW80IE%2B1gFIienkE2gfjpSadCpcLmAcrAVWkZtbaW7SNeTtWyl%2F9&X-Amz-Signature=6438a6eeee163d9b842ccd960c9132d22ccc1288be6ad2c80cb792c641641112&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMRBTTM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwplMR%2BVDMBdV8QpvV%2FB%2ByIBVrtQ3%2FbXypsMCivPT9lwIhAPWtp2d5oI%2Bs2KIEVUs%2B5v1bspiJ%2B%2Bc%2BKv8SvktNCiKrKv8DCBYQABoMNjM3NDIzMTgzODA1IgzUezpHFKvGi09Ur3Yq3APUNHw2wif3jqmxr653ycVh7SvP4s9wa7FxC%2FH0Jm17cBR0uvr62vqE3Ju7vDx%2F5uzSBpd4NxHgMGAFpID3uc2ww1JNfAGGEiRl9Q%2B3pMv6ZIlYeMXTZjduLLafM58FvG4Tf7hS7YlbdBdMb7Nq8YzqpPqRkraxLMi8xSdcJgjXj6DOmBuRhQevFUmXqeuMrZ3c1l38zoIB8pM6Z%2FDAhSEsgR2qSDJ7jcSTfdoomhQsJKh38ith53UJRIDBzzCivbznhEvzWEAr1aHRh31JOGgbcaS6nWEwKoIzEFI1%2FZaNdQHLHEnthAZVWBxg6dyYSC6HYJ2VtjKTHSc4Qcldj%2FqASM%2B2o3k8sgeK122WNB7wZS2gn3QFZWmVj2f8Rcu3FmDLuW1oUgVdWt2iKAu%2FVGCF7jMq66knCBKpMBuAIS5VyjlKC3aSJw7Wwl2qNcMwPK3YtU6HHJA4JZphUU7OxxJgYK%2BaqS%2BplI0z4EKMvdONrjLR%2FtsTjhxpcVZlL%2FD%2BKilsmCapdCii2R6ObUHOqbU3IMviJ3phFGvY8%2BdiCNKVXYFuiqiFyibwHgNXWSWsuTmjDdveb7rfOe8Isu80GnOm8cp6dBjCRLJubW1H1QJ%2B%2BfJ2GRAqbO25BYtwSzCzlqG%2BBjqkAfjB7XY7MxIxDAoIIb2hLx1hO%2FBZ6Fu%2Fm5swF%2FtEZWkTMZ0NBSXfGI496bL5YOz5PcE5DLgnpC3bZWKSI4cgMDXB6h0yg8kX1S4q7LLFWt7vSoA7wxTHneEyi8JsaDh0wNrPppS08YC8xuMNfHhNOQ869fpou%2B4KRFycK9gNWW80IE%2B1gFIienkE2gfjpSadCpcLmAcrAVWkZtbaW7SNeTtWyl%2F9&X-Amz-Signature=5403e35b1c4f2e7acf6d53df0b10a3e6f0d7a2060f5f67937a894e01c5126e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMRBTTM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwplMR%2BVDMBdV8QpvV%2FB%2ByIBVrtQ3%2FbXypsMCivPT9lwIhAPWtp2d5oI%2Bs2KIEVUs%2B5v1bspiJ%2B%2Bc%2BKv8SvktNCiKrKv8DCBYQABoMNjM3NDIzMTgzODA1IgzUezpHFKvGi09Ur3Yq3APUNHw2wif3jqmxr653ycVh7SvP4s9wa7FxC%2FH0Jm17cBR0uvr62vqE3Ju7vDx%2F5uzSBpd4NxHgMGAFpID3uc2ww1JNfAGGEiRl9Q%2B3pMv6ZIlYeMXTZjduLLafM58FvG4Tf7hS7YlbdBdMb7Nq8YzqpPqRkraxLMi8xSdcJgjXj6DOmBuRhQevFUmXqeuMrZ3c1l38zoIB8pM6Z%2FDAhSEsgR2qSDJ7jcSTfdoomhQsJKh38ith53UJRIDBzzCivbznhEvzWEAr1aHRh31JOGgbcaS6nWEwKoIzEFI1%2FZaNdQHLHEnthAZVWBxg6dyYSC6HYJ2VtjKTHSc4Qcldj%2FqASM%2B2o3k8sgeK122WNB7wZS2gn3QFZWmVj2f8Rcu3FmDLuW1oUgVdWt2iKAu%2FVGCF7jMq66knCBKpMBuAIS5VyjlKC3aSJw7Wwl2qNcMwPK3YtU6HHJA4JZphUU7OxxJgYK%2BaqS%2BplI0z4EKMvdONrjLR%2FtsTjhxpcVZlL%2FD%2BKilsmCapdCii2R6ObUHOqbU3IMviJ3phFGvY8%2BdiCNKVXYFuiqiFyibwHgNXWSWsuTmjDdveb7rfOe8Isu80GnOm8cp6dBjCRLJubW1H1QJ%2B%2BfJ2GRAqbO25BYtwSzCzlqG%2BBjqkAfjB7XY7MxIxDAoIIb2hLx1hO%2FBZ6Fu%2Fm5swF%2FtEZWkTMZ0NBSXfGI496bL5YOz5PcE5DLgnpC3bZWKSI4cgMDXB6h0yg8kX1S4q7LLFWt7vSoA7wxTHneEyi8JsaDh0wNrPppS08YC8xuMNfHhNOQ869fpou%2B4KRFycK9gNWW80IE%2B1gFIienkE2gfjpSadCpcLmAcrAVWkZtbaW7SNeTtWyl%2F9&X-Amz-Signature=30b47acf0ff97c272f5c2797cd96072159a26b3f06e156ab496e6844f7f96377&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMRBTTM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwplMR%2BVDMBdV8QpvV%2FB%2ByIBVrtQ3%2FbXypsMCivPT9lwIhAPWtp2d5oI%2Bs2KIEVUs%2B5v1bspiJ%2B%2Bc%2BKv8SvktNCiKrKv8DCBYQABoMNjM3NDIzMTgzODA1IgzUezpHFKvGi09Ur3Yq3APUNHw2wif3jqmxr653ycVh7SvP4s9wa7FxC%2FH0Jm17cBR0uvr62vqE3Ju7vDx%2F5uzSBpd4NxHgMGAFpID3uc2ww1JNfAGGEiRl9Q%2B3pMv6ZIlYeMXTZjduLLafM58FvG4Tf7hS7YlbdBdMb7Nq8YzqpPqRkraxLMi8xSdcJgjXj6DOmBuRhQevFUmXqeuMrZ3c1l38zoIB8pM6Z%2FDAhSEsgR2qSDJ7jcSTfdoomhQsJKh38ith53UJRIDBzzCivbznhEvzWEAr1aHRh31JOGgbcaS6nWEwKoIzEFI1%2FZaNdQHLHEnthAZVWBxg6dyYSC6HYJ2VtjKTHSc4Qcldj%2FqASM%2B2o3k8sgeK122WNB7wZS2gn3QFZWmVj2f8Rcu3FmDLuW1oUgVdWt2iKAu%2FVGCF7jMq66knCBKpMBuAIS5VyjlKC3aSJw7Wwl2qNcMwPK3YtU6HHJA4JZphUU7OxxJgYK%2BaqS%2BplI0z4EKMvdONrjLR%2FtsTjhxpcVZlL%2FD%2BKilsmCapdCii2R6ObUHOqbU3IMviJ3phFGvY8%2BdiCNKVXYFuiqiFyibwHgNXWSWsuTmjDdveb7rfOe8Isu80GnOm8cp6dBjCRLJubW1H1QJ%2B%2BfJ2GRAqbO25BYtwSzCzlqG%2BBjqkAfjB7XY7MxIxDAoIIb2hLx1hO%2FBZ6Fu%2Fm5swF%2FtEZWkTMZ0NBSXfGI496bL5YOz5PcE5DLgnpC3bZWKSI4cgMDXB6h0yg8kX1S4q7LLFWt7vSoA7wxTHneEyi8JsaDh0wNrPppS08YC8xuMNfHhNOQ869fpou%2B4KRFycK9gNWW80IE%2B1gFIienkE2gfjpSadCpcLmAcrAVWkZtbaW7SNeTtWyl%2F9&X-Amz-Signature=2d4b9a4058fe40990d8e8ea068966fff7c43791c126d755cfed17f24ac7bf443&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
