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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KYGX65R%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyUuR7gWDEsEJX7spMXCoJ9pas8uIGCVtLXsbKY3VrtwIhANQnTgVMSXQKAIKIYPrD54Vw%2BZ8ctm%2FK9gslcCZE%2Fq0VKv8DCCAQABoMNjM3NDIzMTgzODA1IgyMGmIVkM%2FQthSdmFYq3AP1aNa43pEQfOgTp7DY7mY9O9tEsi%2BWjUz%2F5%2B8LWBTB3NxtmyB3Hi50AFQNYOEUQmFtfYY7x57%2BxDcoFgx%2F8ltZXc9QhXSTrtbr9OkCKfpKxbfKHGW6tIvRYaS5Zi4Pln6z7RfTyTnjfK4QcigQ4B%2BHRb9VfXuWMX%2F0347CQT2duHg2ir70BKi18Th6oX%2BHJI%2BJyMJMmw6f8mHW8CYCj8DE%2Fdb%2B6eXW9QmyGQ2vzXRq%2BPiierLgFVr8DcpOAJrOYSyjbXMfqQLSta589q3PxdzGsEDJUYBWOcC%2BPTGdyrO6%2BTp7rfMWD3xevFpr54eIt%2BjQAMElWnVoCRPYr8f69pqoxgnwj%2Foq%2FgRAy6hFr2SyL8LL4TdSAv4%2BlCmi7WWM2Ap3yRCUNOIuNEgdcNPjYneIE7WYjS9uvuDbKapIvPpAaMYExhbrmBbsEi3YjVYv9RTnLzSLn%2F96dsIuoEt4c7otA%2FK%2FdlX%2BgLgcRyJXZ3NgF%2BMpPM3VCJ3CT3JjI1eO9%2Bv%2FfD457%2FtMb7QoB2P2nIJejFgTPTvNt1%2F57tGOkOb9Aq2DJhZ8koFqB2WgcX65wir8qu5RsDzygeHl9bvnXgf4gcbJn%2Bc8rkI5lApiQh7Ij6hf24F2S2EnOIrwOjCoo6O%2BBjqkAVY9BywVhBB03Hso81y%2BdpUhdf794FT8jdS72AxKGYOrxW6J%2FvadhxSXKk1scnIHQTXkyknyFUst2KtkVQjWsbfpijcKAa0F%2Fy13FKXaZYiYJauK%2BpV7st6y0elnwCaX1iI1GF07nwYOy1ZVRJJKqNZkuBMZN1wQB1t3hUBQHo43o5nlLbAd23doqf8bNs0s6AoKK%2B7BTEmJJTN9vpa3FRnz3jYK&X-Amz-Signature=9494c37dd24eb1044518b6839a6e9d9560a010892adbe3abaaafa01570b4d2c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KYGX65R%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyUuR7gWDEsEJX7spMXCoJ9pas8uIGCVtLXsbKY3VrtwIhANQnTgVMSXQKAIKIYPrD54Vw%2BZ8ctm%2FK9gslcCZE%2Fq0VKv8DCCAQABoMNjM3NDIzMTgzODA1IgyMGmIVkM%2FQthSdmFYq3AP1aNa43pEQfOgTp7DY7mY9O9tEsi%2BWjUz%2F5%2B8LWBTB3NxtmyB3Hi50AFQNYOEUQmFtfYY7x57%2BxDcoFgx%2F8ltZXc9QhXSTrtbr9OkCKfpKxbfKHGW6tIvRYaS5Zi4Pln6z7RfTyTnjfK4QcigQ4B%2BHRb9VfXuWMX%2F0347CQT2duHg2ir70BKi18Th6oX%2BHJI%2BJyMJMmw6f8mHW8CYCj8DE%2Fdb%2B6eXW9QmyGQ2vzXRq%2BPiierLgFVr8DcpOAJrOYSyjbXMfqQLSta589q3PxdzGsEDJUYBWOcC%2BPTGdyrO6%2BTp7rfMWD3xevFpr54eIt%2BjQAMElWnVoCRPYr8f69pqoxgnwj%2Foq%2FgRAy6hFr2SyL8LL4TdSAv4%2BlCmi7WWM2Ap3yRCUNOIuNEgdcNPjYneIE7WYjS9uvuDbKapIvPpAaMYExhbrmBbsEi3YjVYv9RTnLzSLn%2F96dsIuoEt4c7otA%2FK%2FdlX%2BgLgcRyJXZ3NgF%2BMpPM3VCJ3CT3JjI1eO9%2Bv%2FfD457%2FtMb7QoB2P2nIJejFgTPTvNt1%2F57tGOkOb9Aq2DJhZ8koFqB2WgcX65wir8qu5RsDzygeHl9bvnXgf4gcbJn%2Bc8rkI5lApiQh7Ij6hf24F2S2EnOIrwOjCoo6O%2BBjqkAVY9BywVhBB03Hso81y%2BdpUhdf794FT8jdS72AxKGYOrxW6J%2FvadhxSXKk1scnIHQTXkyknyFUst2KtkVQjWsbfpijcKAa0F%2Fy13FKXaZYiYJauK%2BpV7st6y0elnwCaX1iI1GF07nwYOy1ZVRJJKqNZkuBMZN1wQB1t3hUBQHo43o5nlLbAd23doqf8bNs0s6AoKK%2B7BTEmJJTN9vpa3FRnz3jYK&X-Amz-Signature=7f9fb1eed95b10ea4f9cb6005a8388f21c535d3be16308f46055c427281e0844&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KYGX65R%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyUuR7gWDEsEJX7spMXCoJ9pas8uIGCVtLXsbKY3VrtwIhANQnTgVMSXQKAIKIYPrD54Vw%2BZ8ctm%2FK9gslcCZE%2Fq0VKv8DCCAQABoMNjM3NDIzMTgzODA1IgyMGmIVkM%2FQthSdmFYq3AP1aNa43pEQfOgTp7DY7mY9O9tEsi%2BWjUz%2F5%2B8LWBTB3NxtmyB3Hi50AFQNYOEUQmFtfYY7x57%2BxDcoFgx%2F8ltZXc9QhXSTrtbr9OkCKfpKxbfKHGW6tIvRYaS5Zi4Pln6z7RfTyTnjfK4QcigQ4B%2BHRb9VfXuWMX%2F0347CQT2duHg2ir70BKi18Th6oX%2BHJI%2BJyMJMmw6f8mHW8CYCj8DE%2Fdb%2B6eXW9QmyGQ2vzXRq%2BPiierLgFVr8DcpOAJrOYSyjbXMfqQLSta589q3PxdzGsEDJUYBWOcC%2BPTGdyrO6%2BTp7rfMWD3xevFpr54eIt%2BjQAMElWnVoCRPYr8f69pqoxgnwj%2Foq%2FgRAy6hFr2SyL8LL4TdSAv4%2BlCmi7WWM2Ap3yRCUNOIuNEgdcNPjYneIE7WYjS9uvuDbKapIvPpAaMYExhbrmBbsEi3YjVYv9RTnLzSLn%2F96dsIuoEt4c7otA%2FK%2FdlX%2BgLgcRyJXZ3NgF%2BMpPM3VCJ3CT3JjI1eO9%2Bv%2FfD457%2FtMb7QoB2P2nIJejFgTPTvNt1%2F57tGOkOb9Aq2DJhZ8koFqB2WgcX65wir8qu5RsDzygeHl9bvnXgf4gcbJn%2Bc8rkI5lApiQh7Ij6hf24F2S2EnOIrwOjCoo6O%2BBjqkAVY9BywVhBB03Hso81y%2BdpUhdf794FT8jdS72AxKGYOrxW6J%2FvadhxSXKk1scnIHQTXkyknyFUst2KtkVQjWsbfpijcKAa0F%2Fy13FKXaZYiYJauK%2BpV7st6y0elnwCaX1iI1GF07nwYOy1ZVRJJKqNZkuBMZN1wQB1t3hUBQHo43o5nlLbAd23doqf8bNs0s6AoKK%2B7BTEmJJTN9vpa3FRnz3jYK&X-Amz-Signature=18e775c44a7032b3d7b1169fe11a48d1a94f010cc2c453c39f295ad86b11f0e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KYGX65R%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyUuR7gWDEsEJX7spMXCoJ9pas8uIGCVtLXsbKY3VrtwIhANQnTgVMSXQKAIKIYPrD54Vw%2BZ8ctm%2FK9gslcCZE%2Fq0VKv8DCCAQABoMNjM3NDIzMTgzODA1IgyMGmIVkM%2FQthSdmFYq3AP1aNa43pEQfOgTp7DY7mY9O9tEsi%2BWjUz%2F5%2B8LWBTB3NxtmyB3Hi50AFQNYOEUQmFtfYY7x57%2BxDcoFgx%2F8ltZXc9QhXSTrtbr9OkCKfpKxbfKHGW6tIvRYaS5Zi4Pln6z7RfTyTnjfK4QcigQ4B%2BHRb9VfXuWMX%2F0347CQT2duHg2ir70BKi18Th6oX%2BHJI%2BJyMJMmw6f8mHW8CYCj8DE%2Fdb%2B6eXW9QmyGQ2vzXRq%2BPiierLgFVr8DcpOAJrOYSyjbXMfqQLSta589q3PxdzGsEDJUYBWOcC%2BPTGdyrO6%2BTp7rfMWD3xevFpr54eIt%2BjQAMElWnVoCRPYr8f69pqoxgnwj%2Foq%2FgRAy6hFr2SyL8LL4TdSAv4%2BlCmi7WWM2Ap3yRCUNOIuNEgdcNPjYneIE7WYjS9uvuDbKapIvPpAaMYExhbrmBbsEi3YjVYv9RTnLzSLn%2F96dsIuoEt4c7otA%2FK%2FdlX%2BgLgcRyJXZ3NgF%2BMpPM3VCJ3CT3JjI1eO9%2Bv%2FfD457%2FtMb7QoB2P2nIJejFgTPTvNt1%2F57tGOkOb9Aq2DJhZ8koFqB2WgcX65wir8qu5RsDzygeHl9bvnXgf4gcbJn%2Bc8rkI5lApiQh7Ij6hf24F2S2EnOIrwOjCoo6O%2BBjqkAVY9BywVhBB03Hso81y%2BdpUhdf794FT8jdS72AxKGYOrxW6J%2FvadhxSXKk1scnIHQTXkyknyFUst2KtkVQjWsbfpijcKAa0F%2Fy13FKXaZYiYJauK%2BpV7st6y0elnwCaX1iI1GF07nwYOy1ZVRJJKqNZkuBMZN1wQB1t3hUBQHo43o5nlLbAd23doqf8bNs0s6AoKK%2B7BTEmJJTN9vpa3FRnz3jYK&X-Amz-Signature=b093efa2a62df59003a540bf90566c858488fdc071dcc3cbf3a0b56bad7865a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KYGX65R%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyUuR7gWDEsEJX7spMXCoJ9pas8uIGCVtLXsbKY3VrtwIhANQnTgVMSXQKAIKIYPrD54Vw%2BZ8ctm%2FK9gslcCZE%2Fq0VKv8DCCAQABoMNjM3NDIzMTgzODA1IgyMGmIVkM%2FQthSdmFYq3AP1aNa43pEQfOgTp7DY7mY9O9tEsi%2BWjUz%2F5%2B8LWBTB3NxtmyB3Hi50AFQNYOEUQmFtfYY7x57%2BxDcoFgx%2F8ltZXc9QhXSTrtbr9OkCKfpKxbfKHGW6tIvRYaS5Zi4Pln6z7RfTyTnjfK4QcigQ4B%2BHRb9VfXuWMX%2F0347CQT2duHg2ir70BKi18Th6oX%2BHJI%2BJyMJMmw6f8mHW8CYCj8DE%2Fdb%2B6eXW9QmyGQ2vzXRq%2BPiierLgFVr8DcpOAJrOYSyjbXMfqQLSta589q3PxdzGsEDJUYBWOcC%2BPTGdyrO6%2BTp7rfMWD3xevFpr54eIt%2BjQAMElWnVoCRPYr8f69pqoxgnwj%2Foq%2FgRAy6hFr2SyL8LL4TdSAv4%2BlCmi7WWM2Ap3yRCUNOIuNEgdcNPjYneIE7WYjS9uvuDbKapIvPpAaMYExhbrmBbsEi3YjVYv9RTnLzSLn%2F96dsIuoEt4c7otA%2FK%2FdlX%2BgLgcRyJXZ3NgF%2BMpPM3VCJ3CT3JjI1eO9%2Bv%2FfD457%2FtMb7QoB2P2nIJejFgTPTvNt1%2F57tGOkOb9Aq2DJhZ8koFqB2WgcX65wir8qu5RsDzygeHl9bvnXgf4gcbJn%2Bc8rkI5lApiQh7Ij6hf24F2S2EnOIrwOjCoo6O%2BBjqkAVY9BywVhBB03Hso81y%2BdpUhdf794FT8jdS72AxKGYOrxW6J%2FvadhxSXKk1scnIHQTXkyknyFUst2KtkVQjWsbfpijcKAa0F%2Fy13FKXaZYiYJauK%2BpV7st6y0elnwCaX1iI1GF07nwYOy1ZVRJJKqNZkuBMZN1wQB1t3hUBQHo43o5nlLbAd23doqf8bNs0s6AoKK%2B7BTEmJJTN9vpa3FRnz3jYK&X-Amz-Signature=f4cb060a35d5419938d0c1ab8ac65c08e545b085dc74233a5da13ad28a0eb863&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
