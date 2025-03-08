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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHREX3KM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDvnJg1LMkSKUK6FLM8CfSIeCPNORzC%2F83Km5m9enSXjAIhAMKWBB0KFgKgYPgRAg%2BzeTc%2BLEmxLKCwnU3Ixgna7t8bKv8DCGcQABoMNjM3NDIzMTgzODA1IgyoONA187arlXYcfgcq3APbUTSDhPe1H815GIHAhvk5i0m0ZhvhsArLZc90GQp%2BgV%2B3UI0TWZikNuXE6iDcDiLtrMXmp3ERMDha89IWJZVytSq2ImMXN9qQONY2zsr%2FucPMUsl3PbpY1Nkq7WO%2BcLLQ6TIlb%2FHhHodJs7VJi2tqSaUlZ8DvQI57XrGt5y%2FrQyx6WR8lyMfjdiS11DkP%2B%2B2SBB0%2F9lraamwLL8JQFOcFfMX1Zyejg%2BeIgm5yRDSi0vWf4ylpqm0HZ329dFaWjlacK7BO6cP%2FVHh8ttz%2B64K5o203TvmcJI%2FylFIPFwP%2BZ1BzaPJ6rxGAsduaToVWtSm9LhzO8kg4KoNzzrLjiWEAVtdQ3U%2Fx1VC1OhoK8F0HXxt7dEji0fFyK5yRHEV7VqykkPiLBvxkuPg38EETTpjqIfM6NVXFdU0utoR95QfT0INyiuYE8p5R0%2BHIb3li6hEaaHYqqTTTuzgj2g2fOyBF5G1Embm0dNV1%2F4uIGI1tkb15bWm6PQPa5uqphkk1Ma3fkkNptSkfLwtpuz68Nq3wmO%2FyhYTG2fCoIEKwsRcRvugG75iEqULfyGbxYf01kXKnJOIyvlAEm1KmngjwsTS6rwNx1EupeSqA5Rl4yqfbZAwAKyHGOozdggvvYjCG87K%2BBjqkAecyWneQACN2egSX2D2KuEUIPR9AS1v9rq4pp%2BkmBYDeHKk8qj278srR2qqecQE78fBJeY0Vj3yG5j%2BPis%2Bh5DiO5nmwPfOQHTya1p5YrCLmaD9ZU5rwHwdAVKgEO4mdQWk5XtvzFKGMvFfEdhr2GPsHtRtEnvKs0ATa6fB2ChvG82R1iEm1WR7dcf09XpFbvCpvbBuvI25zDaYIQaO2RQRXbd6%2F&X-Amz-Signature=fb254ce9651a525a93192cda1e477d9b7a1c57692c1f359e432b2f38709edac0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHREX3KM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDvnJg1LMkSKUK6FLM8CfSIeCPNORzC%2F83Km5m9enSXjAIhAMKWBB0KFgKgYPgRAg%2BzeTc%2BLEmxLKCwnU3Ixgna7t8bKv8DCGcQABoMNjM3NDIzMTgzODA1IgyoONA187arlXYcfgcq3APbUTSDhPe1H815GIHAhvk5i0m0ZhvhsArLZc90GQp%2BgV%2B3UI0TWZikNuXE6iDcDiLtrMXmp3ERMDha89IWJZVytSq2ImMXN9qQONY2zsr%2FucPMUsl3PbpY1Nkq7WO%2BcLLQ6TIlb%2FHhHodJs7VJi2tqSaUlZ8DvQI57XrGt5y%2FrQyx6WR8lyMfjdiS11DkP%2B%2B2SBB0%2F9lraamwLL8JQFOcFfMX1Zyejg%2BeIgm5yRDSi0vWf4ylpqm0HZ329dFaWjlacK7BO6cP%2FVHh8ttz%2B64K5o203TvmcJI%2FylFIPFwP%2BZ1BzaPJ6rxGAsduaToVWtSm9LhzO8kg4KoNzzrLjiWEAVtdQ3U%2Fx1VC1OhoK8F0HXxt7dEji0fFyK5yRHEV7VqykkPiLBvxkuPg38EETTpjqIfM6NVXFdU0utoR95QfT0INyiuYE8p5R0%2BHIb3li6hEaaHYqqTTTuzgj2g2fOyBF5G1Embm0dNV1%2F4uIGI1tkb15bWm6PQPa5uqphkk1Ma3fkkNptSkfLwtpuz68Nq3wmO%2FyhYTG2fCoIEKwsRcRvugG75iEqULfyGbxYf01kXKnJOIyvlAEm1KmngjwsTS6rwNx1EupeSqA5Rl4yqfbZAwAKyHGOozdggvvYjCG87K%2BBjqkAecyWneQACN2egSX2D2KuEUIPR9AS1v9rq4pp%2BkmBYDeHKk8qj278srR2qqecQE78fBJeY0Vj3yG5j%2BPis%2Bh5DiO5nmwPfOQHTya1p5YrCLmaD9ZU5rwHwdAVKgEO4mdQWk5XtvzFKGMvFfEdhr2GPsHtRtEnvKs0ATa6fB2ChvG82R1iEm1WR7dcf09XpFbvCpvbBuvI25zDaYIQaO2RQRXbd6%2F&X-Amz-Signature=3897cf2954f0dce10e6bfa2bc4dd524647c82f83e32bee6cb21555a435b9f99a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHREX3KM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDvnJg1LMkSKUK6FLM8CfSIeCPNORzC%2F83Km5m9enSXjAIhAMKWBB0KFgKgYPgRAg%2BzeTc%2BLEmxLKCwnU3Ixgna7t8bKv8DCGcQABoMNjM3NDIzMTgzODA1IgyoONA187arlXYcfgcq3APbUTSDhPe1H815GIHAhvk5i0m0ZhvhsArLZc90GQp%2BgV%2B3UI0TWZikNuXE6iDcDiLtrMXmp3ERMDha89IWJZVytSq2ImMXN9qQONY2zsr%2FucPMUsl3PbpY1Nkq7WO%2BcLLQ6TIlb%2FHhHodJs7VJi2tqSaUlZ8DvQI57XrGt5y%2FrQyx6WR8lyMfjdiS11DkP%2B%2B2SBB0%2F9lraamwLL8JQFOcFfMX1Zyejg%2BeIgm5yRDSi0vWf4ylpqm0HZ329dFaWjlacK7BO6cP%2FVHh8ttz%2B64K5o203TvmcJI%2FylFIPFwP%2BZ1BzaPJ6rxGAsduaToVWtSm9LhzO8kg4KoNzzrLjiWEAVtdQ3U%2Fx1VC1OhoK8F0HXxt7dEji0fFyK5yRHEV7VqykkPiLBvxkuPg38EETTpjqIfM6NVXFdU0utoR95QfT0INyiuYE8p5R0%2BHIb3li6hEaaHYqqTTTuzgj2g2fOyBF5G1Embm0dNV1%2F4uIGI1tkb15bWm6PQPa5uqphkk1Ma3fkkNptSkfLwtpuz68Nq3wmO%2FyhYTG2fCoIEKwsRcRvugG75iEqULfyGbxYf01kXKnJOIyvlAEm1KmngjwsTS6rwNx1EupeSqA5Rl4yqfbZAwAKyHGOozdggvvYjCG87K%2BBjqkAecyWneQACN2egSX2D2KuEUIPR9AS1v9rq4pp%2BkmBYDeHKk8qj278srR2qqecQE78fBJeY0Vj3yG5j%2BPis%2Bh5DiO5nmwPfOQHTya1p5YrCLmaD9ZU5rwHwdAVKgEO4mdQWk5XtvzFKGMvFfEdhr2GPsHtRtEnvKs0ATa6fB2ChvG82R1iEm1WR7dcf09XpFbvCpvbBuvI25zDaYIQaO2RQRXbd6%2F&X-Amz-Signature=8e8d8c5fdbc0643e839129ba5dc70e47a0e0892907a11a77eb0f1ea5dfa6d8f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHREX3KM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDvnJg1LMkSKUK6FLM8CfSIeCPNORzC%2F83Km5m9enSXjAIhAMKWBB0KFgKgYPgRAg%2BzeTc%2BLEmxLKCwnU3Ixgna7t8bKv8DCGcQABoMNjM3NDIzMTgzODA1IgyoONA187arlXYcfgcq3APbUTSDhPe1H815GIHAhvk5i0m0ZhvhsArLZc90GQp%2BgV%2B3UI0TWZikNuXE6iDcDiLtrMXmp3ERMDha89IWJZVytSq2ImMXN9qQONY2zsr%2FucPMUsl3PbpY1Nkq7WO%2BcLLQ6TIlb%2FHhHodJs7VJi2tqSaUlZ8DvQI57XrGt5y%2FrQyx6WR8lyMfjdiS11DkP%2B%2B2SBB0%2F9lraamwLL8JQFOcFfMX1Zyejg%2BeIgm5yRDSi0vWf4ylpqm0HZ329dFaWjlacK7BO6cP%2FVHh8ttz%2B64K5o203TvmcJI%2FylFIPFwP%2BZ1BzaPJ6rxGAsduaToVWtSm9LhzO8kg4KoNzzrLjiWEAVtdQ3U%2Fx1VC1OhoK8F0HXxt7dEji0fFyK5yRHEV7VqykkPiLBvxkuPg38EETTpjqIfM6NVXFdU0utoR95QfT0INyiuYE8p5R0%2BHIb3li6hEaaHYqqTTTuzgj2g2fOyBF5G1Embm0dNV1%2F4uIGI1tkb15bWm6PQPa5uqphkk1Ma3fkkNptSkfLwtpuz68Nq3wmO%2FyhYTG2fCoIEKwsRcRvugG75iEqULfyGbxYf01kXKnJOIyvlAEm1KmngjwsTS6rwNx1EupeSqA5Rl4yqfbZAwAKyHGOozdggvvYjCG87K%2BBjqkAecyWneQACN2egSX2D2KuEUIPR9AS1v9rq4pp%2BkmBYDeHKk8qj278srR2qqecQE78fBJeY0Vj3yG5j%2BPis%2Bh5DiO5nmwPfOQHTya1p5YrCLmaD9ZU5rwHwdAVKgEO4mdQWk5XtvzFKGMvFfEdhr2GPsHtRtEnvKs0ATa6fB2ChvG82R1iEm1WR7dcf09XpFbvCpvbBuvI25zDaYIQaO2RQRXbd6%2F&X-Amz-Signature=91d579c2292b99f8d915f16a8f21bace6244335bcfc09c8b41dad14711211a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHREX3KM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDvnJg1LMkSKUK6FLM8CfSIeCPNORzC%2F83Km5m9enSXjAIhAMKWBB0KFgKgYPgRAg%2BzeTc%2BLEmxLKCwnU3Ixgna7t8bKv8DCGcQABoMNjM3NDIzMTgzODA1IgyoONA187arlXYcfgcq3APbUTSDhPe1H815GIHAhvk5i0m0ZhvhsArLZc90GQp%2BgV%2B3UI0TWZikNuXE6iDcDiLtrMXmp3ERMDha89IWJZVytSq2ImMXN9qQONY2zsr%2FucPMUsl3PbpY1Nkq7WO%2BcLLQ6TIlb%2FHhHodJs7VJi2tqSaUlZ8DvQI57XrGt5y%2FrQyx6WR8lyMfjdiS11DkP%2B%2B2SBB0%2F9lraamwLL8JQFOcFfMX1Zyejg%2BeIgm5yRDSi0vWf4ylpqm0HZ329dFaWjlacK7BO6cP%2FVHh8ttz%2B64K5o203TvmcJI%2FylFIPFwP%2BZ1BzaPJ6rxGAsduaToVWtSm9LhzO8kg4KoNzzrLjiWEAVtdQ3U%2Fx1VC1OhoK8F0HXxt7dEji0fFyK5yRHEV7VqykkPiLBvxkuPg38EETTpjqIfM6NVXFdU0utoR95QfT0INyiuYE8p5R0%2BHIb3li6hEaaHYqqTTTuzgj2g2fOyBF5G1Embm0dNV1%2F4uIGI1tkb15bWm6PQPa5uqphkk1Ma3fkkNptSkfLwtpuz68Nq3wmO%2FyhYTG2fCoIEKwsRcRvugG75iEqULfyGbxYf01kXKnJOIyvlAEm1KmngjwsTS6rwNx1EupeSqA5Rl4yqfbZAwAKyHGOozdggvvYjCG87K%2BBjqkAecyWneQACN2egSX2D2KuEUIPR9AS1v9rq4pp%2BkmBYDeHKk8qj278srR2qqecQE78fBJeY0Vj3yG5j%2BPis%2Bh5DiO5nmwPfOQHTya1p5YrCLmaD9ZU5rwHwdAVKgEO4mdQWk5XtvzFKGMvFfEdhr2GPsHtRtEnvKs0ATa6fB2ChvG82R1iEm1WR7dcf09XpFbvCpvbBuvI25zDaYIQaO2RQRXbd6%2F&X-Amz-Signature=d3c7222839cf56392f68d9bd491deed02098df144df8c3f2d6e0f3fbb0215d68&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
