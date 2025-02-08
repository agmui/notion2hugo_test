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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IX67TPF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICzbmwOK%2F3%2BDZyyVPdU7fLH4K4SvuxUoeKALrN0nSCn4AiAo1FvweDxRP7JJLUKiwZl8rvH5bngvFLlBzucK0tVPryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvd0zv09cecMsdMLKtwDGuklUVmztGXX1vnGtu1dqGr6Nxv89t5PCwf9uyEG3%2B0iqHDqASKcB9R86Z1pEMEnzfshlWUgksBzrpVKjWKansKSX95pQy5bPCrIyaIiZPK1m7qvP4OGMFb5xPV2eD17iy%2FsLUjO8pEs2wjPGPAZ2AJOzHqJTcDEMhd8xDCUkGHZ13EJnqYjtGb08k9gEh9tBpXaw2ZvpNimCXuPEL61OK%2B4Sdy%2F3CJhyvuQazKaMi%2BXXTwJlO8ZOB7iJi2UDcx7tUL9WOOujwL9L247UXedCnbBF29L2AEsf1Rm3EeoKM8khrH2G9o9j3%2Bb9eZAa5kXcQhVs5s7JS5304CvuXqP6s5kv5s9iQngpN7xN0vJ8rOSodtiH7622%2BgF%2BTNRorumMFgafLQDRVLRmxnTrig59A4M3ezCH6fEso00H4mzeowgFuS19HzaUWiCvRFymgaP30GuFSYf5G8HoOuBoYYn%2BEoR%2FvTQfvAH%2BMa4Qcv6%2B40MpaK2di9wzQh0qXi%2FKZZ9QVRob%2FlCfaCqDmuh7qzF%2F8LWBO%2FQAPb2xyWQDskHT85bRdlwNcHh16aO%2F74u9QCZcZ3nT0LLX37ZOEiWYyHi1d94WIZpuKKFR%2BXMmCqZySrQJAxs4EXfloK%2F6p0w0NWbvQY6pgG24vJYwZZPU%2FOdmN76yVYli8618026rjp%2FV%2FKp%2B4wD3yxD18ypaGS8Y%2F3QrT3lXSPUcE1XnEU9NCIaWkNElLIj04DxGaSfEatQL19%2F%2B7myPNJXC5cynxSZKfWeD0M6YVeqyXE%2FuCvpS65ssmsUOn%2BOBoi%2FrezOu6dsuWI%2B6%2FV52NWk17rvqV2o1kxwDrNqZQj%2FLioetcAgfRxUnxk5x%2BOZ25S6HoJE&X-Amz-Signature=6a9441e3c7dcffb803a26589f21705b0eef92c7d7ae7c0d81e3ae738fb5b91dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IX67TPF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICzbmwOK%2F3%2BDZyyVPdU7fLH4K4SvuxUoeKALrN0nSCn4AiAo1FvweDxRP7JJLUKiwZl8rvH5bngvFLlBzucK0tVPryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvd0zv09cecMsdMLKtwDGuklUVmztGXX1vnGtu1dqGr6Nxv89t5PCwf9uyEG3%2B0iqHDqASKcB9R86Z1pEMEnzfshlWUgksBzrpVKjWKansKSX95pQy5bPCrIyaIiZPK1m7qvP4OGMFb5xPV2eD17iy%2FsLUjO8pEs2wjPGPAZ2AJOzHqJTcDEMhd8xDCUkGHZ13EJnqYjtGb08k9gEh9tBpXaw2ZvpNimCXuPEL61OK%2B4Sdy%2F3CJhyvuQazKaMi%2BXXTwJlO8ZOB7iJi2UDcx7tUL9WOOujwL9L247UXedCnbBF29L2AEsf1Rm3EeoKM8khrH2G9o9j3%2Bb9eZAa5kXcQhVs5s7JS5304CvuXqP6s5kv5s9iQngpN7xN0vJ8rOSodtiH7622%2BgF%2BTNRorumMFgafLQDRVLRmxnTrig59A4M3ezCH6fEso00H4mzeowgFuS19HzaUWiCvRFymgaP30GuFSYf5G8HoOuBoYYn%2BEoR%2FvTQfvAH%2BMa4Qcv6%2B40MpaK2di9wzQh0qXi%2FKZZ9QVRob%2FlCfaCqDmuh7qzF%2F8LWBO%2FQAPb2xyWQDskHT85bRdlwNcHh16aO%2F74u9QCZcZ3nT0LLX37ZOEiWYyHi1d94WIZpuKKFR%2BXMmCqZySrQJAxs4EXfloK%2F6p0w0NWbvQY6pgG24vJYwZZPU%2FOdmN76yVYli8618026rjp%2FV%2FKp%2B4wD3yxD18ypaGS8Y%2F3QrT3lXSPUcE1XnEU9NCIaWkNElLIj04DxGaSfEatQL19%2F%2B7myPNJXC5cynxSZKfWeD0M6YVeqyXE%2FuCvpS65ssmsUOn%2BOBoi%2FrezOu6dsuWI%2B6%2FV52NWk17rvqV2o1kxwDrNqZQj%2FLioetcAgfRxUnxk5x%2BOZ25S6HoJE&X-Amz-Signature=56f8cec8d802246d43aabfb41a0e8f29c4b6c63fc90574f393138df86a273e24&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IX67TPF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICzbmwOK%2F3%2BDZyyVPdU7fLH4K4SvuxUoeKALrN0nSCn4AiAo1FvweDxRP7JJLUKiwZl8rvH5bngvFLlBzucK0tVPryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvd0zv09cecMsdMLKtwDGuklUVmztGXX1vnGtu1dqGr6Nxv89t5PCwf9uyEG3%2B0iqHDqASKcB9R86Z1pEMEnzfshlWUgksBzrpVKjWKansKSX95pQy5bPCrIyaIiZPK1m7qvP4OGMFb5xPV2eD17iy%2FsLUjO8pEs2wjPGPAZ2AJOzHqJTcDEMhd8xDCUkGHZ13EJnqYjtGb08k9gEh9tBpXaw2ZvpNimCXuPEL61OK%2B4Sdy%2F3CJhyvuQazKaMi%2BXXTwJlO8ZOB7iJi2UDcx7tUL9WOOujwL9L247UXedCnbBF29L2AEsf1Rm3EeoKM8khrH2G9o9j3%2Bb9eZAa5kXcQhVs5s7JS5304CvuXqP6s5kv5s9iQngpN7xN0vJ8rOSodtiH7622%2BgF%2BTNRorumMFgafLQDRVLRmxnTrig59A4M3ezCH6fEso00H4mzeowgFuS19HzaUWiCvRFymgaP30GuFSYf5G8HoOuBoYYn%2BEoR%2FvTQfvAH%2BMa4Qcv6%2B40MpaK2di9wzQh0qXi%2FKZZ9QVRob%2FlCfaCqDmuh7qzF%2F8LWBO%2FQAPb2xyWQDskHT85bRdlwNcHh16aO%2F74u9QCZcZ3nT0LLX37ZOEiWYyHi1d94WIZpuKKFR%2BXMmCqZySrQJAxs4EXfloK%2F6p0w0NWbvQY6pgG24vJYwZZPU%2FOdmN76yVYli8618026rjp%2FV%2FKp%2B4wD3yxD18ypaGS8Y%2F3QrT3lXSPUcE1XnEU9NCIaWkNElLIj04DxGaSfEatQL19%2F%2B7myPNJXC5cynxSZKfWeD0M6YVeqyXE%2FuCvpS65ssmsUOn%2BOBoi%2FrezOu6dsuWI%2B6%2FV52NWk17rvqV2o1kxwDrNqZQj%2FLioetcAgfRxUnxk5x%2BOZ25S6HoJE&X-Amz-Signature=bb02969cb8d332c8bd42b0017b44c9391392dcf56304a949363b69b9035a9021&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IX67TPF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICzbmwOK%2F3%2BDZyyVPdU7fLH4K4SvuxUoeKALrN0nSCn4AiAo1FvweDxRP7JJLUKiwZl8rvH5bngvFLlBzucK0tVPryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvd0zv09cecMsdMLKtwDGuklUVmztGXX1vnGtu1dqGr6Nxv89t5PCwf9uyEG3%2B0iqHDqASKcB9R86Z1pEMEnzfshlWUgksBzrpVKjWKansKSX95pQy5bPCrIyaIiZPK1m7qvP4OGMFb5xPV2eD17iy%2FsLUjO8pEs2wjPGPAZ2AJOzHqJTcDEMhd8xDCUkGHZ13EJnqYjtGb08k9gEh9tBpXaw2ZvpNimCXuPEL61OK%2B4Sdy%2F3CJhyvuQazKaMi%2BXXTwJlO8ZOB7iJi2UDcx7tUL9WOOujwL9L247UXedCnbBF29L2AEsf1Rm3EeoKM8khrH2G9o9j3%2Bb9eZAa5kXcQhVs5s7JS5304CvuXqP6s5kv5s9iQngpN7xN0vJ8rOSodtiH7622%2BgF%2BTNRorumMFgafLQDRVLRmxnTrig59A4M3ezCH6fEso00H4mzeowgFuS19HzaUWiCvRFymgaP30GuFSYf5G8HoOuBoYYn%2BEoR%2FvTQfvAH%2BMa4Qcv6%2B40MpaK2di9wzQh0qXi%2FKZZ9QVRob%2FlCfaCqDmuh7qzF%2F8LWBO%2FQAPb2xyWQDskHT85bRdlwNcHh16aO%2F74u9QCZcZ3nT0LLX37ZOEiWYyHi1d94WIZpuKKFR%2BXMmCqZySrQJAxs4EXfloK%2F6p0w0NWbvQY6pgG24vJYwZZPU%2FOdmN76yVYli8618026rjp%2FV%2FKp%2B4wD3yxD18ypaGS8Y%2F3QrT3lXSPUcE1XnEU9NCIaWkNElLIj04DxGaSfEatQL19%2F%2B7myPNJXC5cynxSZKfWeD0M6YVeqyXE%2FuCvpS65ssmsUOn%2BOBoi%2FrezOu6dsuWI%2B6%2FV52NWk17rvqV2o1kxwDrNqZQj%2FLioetcAgfRxUnxk5x%2BOZ25S6HoJE&X-Amz-Signature=c793fa076350cfa712a4b9123a2445ded31b4421d521cc7788ee6836814f8c93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IX67TPF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICzbmwOK%2F3%2BDZyyVPdU7fLH4K4SvuxUoeKALrN0nSCn4AiAo1FvweDxRP7JJLUKiwZl8rvH5bngvFLlBzucK0tVPryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvd0zv09cecMsdMLKtwDGuklUVmztGXX1vnGtu1dqGr6Nxv89t5PCwf9uyEG3%2B0iqHDqASKcB9R86Z1pEMEnzfshlWUgksBzrpVKjWKansKSX95pQy5bPCrIyaIiZPK1m7qvP4OGMFb5xPV2eD17iy%2FsLUjO8pEs2wjPGPAZ2AJOzHqJTcDEMhd8xDCUkGHZ13EJnqYjtGb08k9gEh9tBpXaw2ZvpNimCXuPEL61OK%2B4Sdy%2F3CJhyvuQazKaMi%2BXXTwJlO8ZOB7iJi2UDcx7tUL9WOOujwL9L247UXedCnbBF29L2AEsf1Rm3EeoKM8khrH2G9o9j3%2Bb9eZAa5kXcQhVs5s7JS5304CvuXqP6s5kv5s9iQngpN7xN0vJ8rOSodtiH7622%2BgF%2BTNRorumMFgafLQDRVLRmxnTrig59A4M3ezCH6fEso00H4mzeowgFuS19HzaUWiCvRFymgaP30GuFSYf5G8HoOuBoYYn%2BEoR%2FvTQfvAH%2BMa4Qcv6%2B40MpaK2di9wzQh0qXi%2FKZZ9QVRob%2FlCfaCqDmuh7qzF%2F8LWBO%2FQAPb2xyWQDskHT85bRdlwNcHh16aO%2F74u9QCZcZ3nT0LLX37ZOEiWYyHi1d94WIZpuKKFR%2BXMmCqZySrQJAxs4EXfloK%2F6p0w0NWbvQY6pgG24vJYwZZPU%2FOdmN76yVYli8618026rjp%2FV%2FKp%2B4wD3yxD18ypaGS8Y%2F3QrT3lXSPUcE1XnEU9NCIaWkNElLIj04DxGaSfEatQL19%2F%2B7myPNJXC5cynxSZKfWeD0M6YVeqyXE%2FuCvpS65ssmsUOn%2BOBoi%2FrezOu6dsuWI%2B6%2FV52NWk17rvqV2o1kxwDrNqZQj%2FLioetcAgfRxUnxk5x%2BOZ25S6HoJE&X-Amz-Signature=3392b23c84ece1ca32e81bb2c4750b31755f69ccc2322d5b91668b45bfd2d794&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
