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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ENTS37%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQClMsxGFo6wLOReQ849I5l5GG%2Br94MA1X%2FsRQIjNdv4OgIgZdLJbv49yq2gOHQk5hIqay6i%2FAtD6UUQ%2ByyB19rW9KgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnKpNxyJ4opKw1FSCrcAzTRkScQlpnA%2FGWQRSDFQODGM0SKzRnqQRT%2FEXaqaoVF%2Bgt7fayagOiXRakExYO%2BW%2BNqe%2Bj%2BQzPiS%2FCFC2V17OwURpJQU%2BR04Bc%2Fpt5LdexF8AWV%2FUd7huB%2FO7KdEstn5%2FmilG%2FzIISu8Kk%2Blv4pVxDXb4HR9KlkXQvM6JRLBBNtg2HG1X4%2B3PPOyYe9tPkv96CF%2B%2BosLQAoumn7e5KuY%2BnelwW7RHuo8JsSKu7JtBWd2ytluFdf5wWgWeE00%2Fa01DPmWKGQ36DenuCGorfeWOnvvYMPdD2M8Znp8H7PsrX86s7CYNJ4ZJl743%2F0hRNOQGk04jTkPb%2FkygLp5QiH9ivRDH6X6F5csjyqya2dPpxGIf2Y76i1Y%2FNYZAjMUsW4havGw7yr3PBvhcEJoEr9nVgj2KlTW%2F88UGEgGPnS6YxseyWzyEt9DB%2BBVoVzCCRnkifglf4ORyFjSib2WqKlY0xX%2BRZ9NJj%2F7uwH9SOHsBfsDJRka4MdnWFPoYFqyS5yUrHPFLV7MrG8eMHsSPLzNew%2BtHaSSRie0%2Bey291eZTQTT1CGeHZCCbY7SmNG8t5T8k%2BzfrpT31OA65YZoHWW7AwNcQFqnYJ3OpUuSx%2BiZkJSE4MLEnL3vGB1NTcVMN6Lvb4GOqUBnzPAehCQptX8UHJVBIwnxshQ9lYlfGe1HdLIG79nyazSA%2FMgjpwdg5D9RkruKZEPFdMSA9Gk%2BMPZknBqaV7bncch38sw6N%2F4%2F66PaqqSd3LDYd5bb56sE9XTiGsbba8y5SbB4Odq7KvQLp%2BinjsBodN63dBUnCTHKeiz7LENEfzSYHH2ps7LPza5cFiNh%2BCK7BqbkLwdaqw5bJLn74xCUN1oAa2j&X-Amz-Signature=d6f35c6d00b3bbe157aa6507c65a5929bf84380dd40a931f8ac22098a209a3cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ENTS37%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQClMsxGFo6wLOReQ849I5l5GG%2Br94MA1X%2FsRQIjNdv4OgIgZdLJbv49yq2gOHQk5hIqay6i%2FAtD6UUQ%2ByyB19rW9KgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnKpNxyJ4opKw1FSCrcAzTRkScQlpnA%2FGWQRSDFQODGM0SKzRnqQRT%2FEXaqaoVF%2Bgt7fayagOiXRakExYO%2BW%2BNqe%2Bj%2BQzPiS%2FCFC2V17OwURpJQU%2BR04Bc%2Fpt5LdexF8AWV%2FUd7huB%2FO7KdEstn5%2FmilG%2FzIISu8Kk%2Blv4pVxDXb4HR9KlkXQvM6JRLBBNtg2HG1X4%2B3PPOyYe9tPkv96CF%2B%2BosLQAoumn7e5KuY%2BnelwW7RHuo8JsSKu7JtBWd2ytluFdf5wWgWeE00%2Fa01DPmWKGQ36DenuCGorfeWOnvvYMPdD2M8Znp8H7PsrX86s7CYNJ4ZJl743%2F0hRNOQGk04jTkPb%2FkygLp5QiH9ivRDH6X6F5csjyqya2dPpxGIf2Y76i1Y%2FNYZAjMUsW4havGw7yr3PBvhcEJoEr9nVgj2KlTW%2F88UGEgGPnS6YxseyWzyEt9DB%2BBVoVzCCRnkifglf4ORyFjSib2WqKlY0xX%2BRZ9NJj%2F7uwH9SOHsBfsDJRka4MdnWFPoYFqyS5yUrHPFLV7MrG8eMHsSPLzNew%2BtHaSSRie0%2Bey291eZTQTT1CGeHZCCbY7SmNG8t5T8k%2BzfrpT31OA65YZoHWW7AwNcQFqnYJ3OpUuSx%2BiZkJSE4MLEnL3vGB1NTcVMN6Lvb4GOqUBnzPAehCQptX8UHJVBIwnxshQ9lYlfGe1HdLIG79nyazSA%2FMgjpwdg5D9RkruKZEPFdMSA9Gk%2BMPZknBqaV7bncch38sw6N%2F4%2F66PaqqSd3LDYd5bb56sE9XTiGsbba8y5SbB4Odq7KvQLp%2BinjsBodN63dBUnCTHKeiz7LENEfzSYHH2ps7LPza5cFiNh%2BCK7BqbkLwdaqw5bJLn74xCUN1oAa2j&X-Amz-Signature=f15fb96efba6e1a8a9e183e36def56c41ed209114fe59c1af3cf37d4d262b9ab&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ENTS37%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQClMsxGFo6wLOReQ849I5l5GG%2Br94MA1X%2FsRQIjNdv4OgIgZdLJbv49yq2gOHQk5hIqay6i%2FAtD6UUQ%2ByyB19rW9KgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnKpNxyJ4opKw1FSCrcAzTRkScQlpnA%2FGWQRSDFQODGM0SKzRnqQRT%2FEXaqaoVF%2Bgt7fayagOiXRakExYO%2BW%2BNqe%2Bj%2BQzPiS%2FCFC2V17OwURpJQU%2BR04Bc%2Fpt5LdexF8AWV%2FUd7huB%2FO7KdEstn5%2FmilG%2FzIISu8Kk%2Blv4pVxDXb4HR9KlkXQvM6JRLBBNtg2HG1X4%2B3PPOyYe9tPkv96CF%2B%2BosLQAoumn7e5KuY%2BnelwW7RHuo8JsSKu7JtBWd2ytluFdf5wWgWeE00%2Fa01DPmWKGQ36DenuCGorfeWOnvvYMPdD2M8Znp8H7PsrX86s7CYNJ4ZJl743%2F0hRNOQGk04jTkPb%2FkygLp5QiH9ivRDH6X6F5csjyqya2dPpxGIf2Y76i1Y%2FNYZAjMUsW4havGw7yr3PBvhcEJoEr9nVgj2KlTW%2F88UGEgGPnS6YxseyWzyEt9DB%2BBVoVzCCRnkifglf4ORyFjSib2WqKlY0xX%2BRZ9NJj%2F7uwH9SOHsBfsDJRka4MdnWFPoYFqyS5yUrHPFLV7MrG8eMHsSPLzNew%2BtHaSSRie0%2Bey291eZTQTT1CGeHZCCbY7SmNG8t5T8k%2BzfrpT31OA65YZoHWW7AwNcQFqnYJ3OpUuSx%2BiZkJSE4MLEnL3vGB1NTcVMN6Lvb4GOqUBnzPAehCQptX8UHJVBIwnxshQ9lYlfGe1HdLIG79nyazSA%2FMgjpwdg5D9RkruKZEPFdMSA9Gk%2BMPZknBqaV7bncch38sw6N%2F4%2F66PaqqSd3LDYd5bb56sE9XTiGsbba8y5SbB4Odq7KvQLp%2BinjsBodN63dBUnCTHKeiz7LENEfzSYHH2ps7LPza5cFiNh%2BCK7BqbkLwdaqw5bJLn74xCUN1oAa2j&X-Amz-Signature=ebbb9590149c6e87c5b27929a08ba4006a9d5e6b6a6d9e288f46fe4bb948aca1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ENTS37%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQClMsxGFo6wLOReQ849I5l5GG%2Br94MA1X%2FsRQIjNdv4OgIgZdLJbv49yq2gOHQk5hIqay6i%2FAtD6UUQ%2ByyB19rW9KgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnKpNxyJ4opKw1FSCrcAzTRkScQlpnA%2FGWQRSDFQODGM0SKzRnqQRT%2FEXaqaoVF%2Bgt7fayagOiXRakExYO%2BW%2BNqe%2Bj%2BQzPiS%2FCFC2V17OwURpJQU%2BR04Bc%2Fpt5LdexF8AWV%2FUd7huB%2FO7KdEstn5%2FmilG%2FzIISu8Kk%2Blv4pVxDXb4HR9KlkXQvM6JRLBBNtg2HG1X4%2B3PPOyYe9tPkv96CF%2B%2BosLQAoumn7e5KuY%2BnelwW7RHuo8JsSKu7JtBWd2ytluFdf5wWgWeE00%2Fa01DPmWKGQ36DenuCGorfeWOnvvYMPdD2M8Znp8H7PsrX86s7CYNJ4ZJl743%2F0hRNOQGk04jTkPb%2FkygLp5QiH9ivRDH6X6F5csjyqya2dPpxGIf2Y76i1Y%2FNYZAjMUsW4havGw7yr3PBvhcEJoEr9nVgj2KlTW%2F88UGEgGPnS6YxseyWzyEt9DB%2BBVoVzCCRnkifglf4ORyFjSib2WqKlY0xX%2BRZ9NJj%2F7uwH9SOHsBfsDJRka4MdnWFPoYFqyS5yUrHPFLV7MrG8eMHsSPLzNew%2BtHaSSRie0%2Bey291eZTQTT1CGeHZCCbY7SmNG8t5T8k%2BzfrpT31OA65YZoHWW7AwNcQFqnYJ3OpUuSx%2BiZkJSE4MLEnL3vGB1NTcVMN6Lvb4GOqUBnzPAehCQptX8UHJVBIwnxshQ9lYlfGe1HdLIG79nyazSA%2FMgjpwdg5D9RkruKZEPFdMSA9Gk%2BMPZknBqaV7bncch38sw6N%2F4%2F66PaqqSd3LDYd5bb56sE9XTiGsbba8y5SbB4Odq7KvQLp%2BinjsBodN63dBUnCTHKeiz7LENEfzSYHH2ps7LPza5cFiNh%2BCK7BqbkLwdaqw5bJLn74xCUN1oAa2j&X-Amz-Signature=c9fc962576ebab58e442d7344d67b49f0d3bd17ba10fef9fc95693c87de679fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ENTS37%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQClMsxGFo6wLOReQ849I5l5GG%2Br94MA1X%2FsRQIjNdv4OgIgZdLJbv49yq2gOHQk5hIqay6i%2FAtD6UUQ%2ByyB19rW9KgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnKpNxyJ4opKw1FSCrcAzTRkScQlpnA%2FGWQRSDFQODGM0SKzRnqQRT%2FEXaqaoVF%2Bgt7fayagOiXRakExYO%2BW%2BNqe%2Bj%2BQzPiS%2FCFC2V17OwURpJQU%2BR04Bc%2Fpt5LdexF8AWV%2FUd7huB%2FO7KdEstn5%2FmilG%2FzIISu8Kk%2Blv4pVxDXb4HR9KlkXQvM6JRLBBNtg2HG1X4%2B3PPOyYe9tPkv96CF%2B%2BosLQAoumn7e5KuY%2BnelwW7RHuo8JsSKu7JtBWd2ytluFdf5wWgWeE00%2Fa01DPmWKGQ36DenuCGorfeWOnvvYMPdD2M8Znp8H7PsrX86s7CYNJ4ZJl743%2F0hRNOQGk04jTkPb%2FkygLp5QiH9ivRDH6X6F5csjyqya2dPpxGIf2Y76i1Y%2FNYZAjMUsW4havGw7yr3PBvhcEJoEr9nVgj2KlTW%2F88UGEgGPnS6YxseyWzyEt9DB%2BBVoVzCCRnkifglf4ORyFjSib2WqKlY0xX%2BRZ9NJj%2F7uwH9SOHsBfsDJRka4MdnWFPoYFqyS5yUrHPFLV7MrG8eMHsSPLzNew%2BtHaSSRie0%2Bey291eZTQTT1CGeHZCCbY7SmNG8t5T8k%2BzfrpT31OA65YZoHWW7AwNcQFqnYJ3OpUuSx%2BiZkJSE4MLEnL3vGB1NTcVMN6Lvb4GOqUBnzPAehCQptX8UHJVBIwnxshQ9lYlfGe1HdLIG79nyazSA%2FMgjpwdg5D9RkruKZEPFdMSA9Gk%2BMPZknBqaV7bncch38sw6N%2F4%2F66PaqqSd3LDYd5bb56sE9XTiGsbba8y5SbB4Odq7KvQLp%2BinjsBodN63dBUnCTHKeiz7LENEfzSYHH2ps7LPza5cFiNh%2BCK7BqbkLwdaqw5bJLn74xCUN1oAa2j&X-Amz-Signature=3bf4ced515154d96958a2ed95367f5203c252b2fe7f220001a001e1806bfa032&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
