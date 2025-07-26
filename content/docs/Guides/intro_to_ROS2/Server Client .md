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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF2FANTN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBNj0exanNW72UN6%2Fjw9MnacOOm6%2FTZeg1%2FNDyViynM1AiEAqIU3MOnchGJY9K6vGZTy4neeIMBBq%2F5Ur3oHoyojeGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBKuttwM%2FCq2%2BCpIRircA%2FN95PyLOqr4AJCHnyoSVGRLP%2FdltA4yXEElK0nnD6uHXzv9sT3h9A6yiySSxZjwjxm5Vs5eqwYlZCff%2B%2BAdlfxZ5NTyKpI7uft7u5mT0xmf237FV%2FCvXb0nK1tSPv8lNE2bm%2FPjOLty32L7vC8DwZ2SI2RqNK5ncxeWVG0bjRHrIUBBU0E%2FYwom5K%2BA%2FafspqklEcirwm4DG12Xf5xCzP%2BcWRDvRuP5R6MgD1VqEf8nolxy%2BYruCcxXJODyTsO3gknfJjzqSTNyG09a%2BdoXFVoxmyhDSWjpiG7xRPTpMKvgEJQ2pdwId35KRwoE%2BAoWyY1AEgwti8SlEGD2mNov9I3AW8ETPxCUCqXFHdwo0KwMrdm8XVjDuicQR%2Baq98qc9mnbY7RDDv%2FRkq%2F7Owv04S91MhWi12%2FdYYzgk5Ovt2Vgy3hlRAXt19ozb5KFlZJ%2F0fjGZ1KcvaUn7emcobO1pLQHCkdZWnMLgBGADXMO0I6y%2FTkEXzvFHODpHwOPob7Jq0D6IaOtKAgcBXlrjEi5iphGnPuZ1iwYdLuK09X0ULjYUYsngF4AhLGR1ztpf5qOV%2FtTFXbh8Xg5QYEpf9i3iUgiQwbvnr9s5FTVCXNF04dU464rVzxSgZhbs%2FJfMMSrksQGOqUBGWFUQq1WYfS9%2BS%2F1Fq3%2BE%2FnH%2BR6EBJrndbPZ9oxJLdqEQfUwrR903YhSMD9NcZsJnxxCL3eI1FCUWB7QYdC33X9ILliwQmrdVoxrGO5tDcc5AjnSYT6%2BhiVLw328I261uBrx1f1x9iDmMHhlw19%2Fy24TqKd1%2FgaBA38vVRw6PKB0nYmO8EFH0k3osvOmCdjdSTU9qVMC4bwLcTAjtAzgoto16m64&X-Amz-Signature=04158a15784c00af17eb4c7ac0b2ce5797a45cffe9ebbef41d0506a21aa3620d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF2FANTN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBNj0exanNW72UN6%2Fjw9MnacOOm6%2FTZeg1%2FNDyViynM1AiEAqIU3MOnchGJY9K6vGZTy4neeIMBBq%2F5Ur3oHoyojeGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBKuttwM%2FCq2%2BCpIRircA%2FN95PyLOqr4AJCHnyoSVGRLP%2FdltA4yXEElK0nnD6uHXzv9sT3h9A6yiySSxZjwjxm5Vs5eqwYlZCff%2B%2BAdlfxZ5NTyKpI7uft7u5mT0xmf237FV%2FCvXb0nK1tSPv8lNE2bm%2FPjOLty32L7vC8DwZ2SI2RqNK5ncxeWVG0bjRHrIUBBU0E%2FYwom5K%2BA%2FafspqklEcirwm4DG12Xf5xCzP%2BcWRDvRuP5R6MgD1VqEf8nolxy%2BYruCcxXJODyTsO3gknfJjzqSTNyG09a%2BdoXFVoxmyhDSWjpiG7xRPTpMKvgEJQ2pdwId35KRwoE%2BAoWyY1AEgwti8SlEGD2mNov9I3AW8ETPxCUCqXFHdwo0KwMrdm8XVjDuicQR%2Baq98qc9mnbY7RDDv%2FRkq%2F7Owv04S91MhWi12%2FdYYzgk5Ovt2Vgy3hlRAXt19ozb5KFlZJ%2F0fjGZ1KcvaUn7emcobO1pLQHCkdZWnMLgBGADXMO0I6y%2FTkEXzvFHODpHwOPob7Jq0D6IaOtKAgcBXlrjEi5iphGnPuZ1iwYdLuK09X0ULjYUYsngF4AhLGR1ztpf5qOV%2FtTFXbh8Xg5QYEpf9i3iUgiQwbvnr9s5FTVCXNF04dU464rVzxSgZhbs%2FJfMMSrksQGOqUBGWFUQq1WYfS9%2BS%2F1Fq3%2BE%2FnH%2BR6EBJrndbPZ9oxJLdqEQfUwrR903YhSMD9NcZsJnxxCL3eI1FCUWB7QYdC33X9ILliwQmrdVoxrGO5tDcc5AjnSYT6%2BhiVLw328I261uBrx1f1x9iDmMHhlw19%2Fy24TqKd1%2FgaBA38vVRw6PKB0nYmO8EFH0k3osvOmCdjdSTU9qVMC4bwLcTAjtAzgoto16m64&X-Amz-Signature=f0b8f61f0211098b202d3b44ce1e9351278a96cd184cda61f060cd388f95dbea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF2FANTN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBNj0exanNW72UN6%2Fjw9MnacOOm6%2FTZeg1%2FNDyViynM1AiEAqIU3MOnchGJY9K6vGZTy4neeIMBBq%2F5Ur3oHoyojeGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBKuttwM%2FCq2%2BCpIRircA%2FN95PyLOqr4AJCHnyoSVGRLP%2FdltA4yXEElK0nnD6uHXzv9sT3h9A6yiySSxZjwjxm5Vs5eqwYlZCff%2B%2BAdlfxZ5NTyKpI7uft7u5mT0xmf237FV%2FCvXb0nK1tSPv8lNE2bm%2FPjOLty32L7vC8DwZ2SI2RqNK5ncxeWVG0bjRHrIUBBU0E%2FYwom5K%2BA%2FafspqklEcirwm4DG12Xf5xCzP%2BcWRDvRuP5R6MgD1VqEf8nolxy%2BYruCcxXJODyTsO3gknfJjzqSTNyG09a%2BdoXFVoxmyhDSWjpiG7xRPTpMKvgEJQ2pdwId35KRwoE%2BAoWyY1AEgwti8SlEGD2mNov9I3AW8ETPxCUCqXFHdwo0KwMrdm8XVjDuicQR%2Baq98qc9mnbY7RDDv%2FRkq%2F7Owv04S91MhWi12%2FdYYzgk5Ovt2Vgy3hlRAXt19ozb5KFlZJ%2F0fjGZ1KcvaUn7emcobO1pLQHCkdZWnMLgBGADXMO0I6y%2FTkEXzvFHODpHwOPob7Jq0D6IaOtKAgcBXlrjEi5iphGnPuZ1iwYdLuK09X0ULjYUYsngF4AhLGR1ztpf5qOV%2FtTFXbh8Xg5QYEpf9i3iUgiQwbvnr9s5FTVCXNF04dU464rVzxSgZhbs%2FJfMMSrksQGOqUBGWFUQq1WYfS9%2BS%2F1Fq3%2BE%2FnH%2BR6EBJrndbPZ9oxJLdqEQfUwrR903YhSMD9NcZsJnxxCL3eI1FCUWB7QYdC33X9ILliwQmrdVoxrGO5tDcc5AjnSYT6%2BhiVLw328I261uBrx1f1x9iDmMHhlw19%2Fy24TqKd1%2FgaBA38vVRw6PKB0nYmO8EFH0k3osvOmCdjdSTU9qVMC4bwLcTAjtAzgoto16m64&X-Amz-Signature=df1188a0a4834ef677d1ea016981ee07a7de260942be5a29752774e2d493934f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF2FANTN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBNj0exanNW72UN6%2Fjw9MnacOOm6%2FTZeg1%2FNDyViynM1AiEAqIU3MOnchGJY9K6vGZTy4neeIMBBq%2F5Ur3oHoyojeGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBKuttwM%2FCq2%2BCpIRircA%2FN95PyLOqr4AJCHnyoSVGRLP%2FdltA4yXEElK0nnD6uHXzv9sT3h9A6yiySSxZjwjxm5Vs5eqwYlZCff%2B%2BAdlfxZ5NTyKpI7uft7u5mT0xmf237FV%2FCvXb0nK1tSPv8lNE2bm%2FPjOLty32L7vC8DwZ2SI2RqNK5ncxeWVG0bjRHrIUBBU0E%2FYwom5K%2BA%2FafspqklEcirwm4DG12Xf5xCzP%2BcWRDvRuP5R6MgD1VqEf8nolxy%2BYruCcxXJODyTsO3gknfJjzqSTNyG09a%2BdoXFVoxmyhDSWjpiG7xRPTpMKvgEJQ2pdwId35KRwoE%2BAoWyY1AEgwti8SlEGD2mNov9I3AW8ETPxCUCqXFHdwo0KwMrdm8XVjDuicQR%2Baq98qc9mnbY7RDDv%2FRkq%2F7Owv04S91MhWi12%2FdYYzgk5Ovt2Vgy3hlRAXt19ozb5KFlZJ%2F0fjGZ1KcvaUn7emcobO1pLQHCkdZWnMLgBGADXMO0I6y%2FTkEXzvFHODpHwOPob7Jq0D6IaOtKAgcBXlrjEi5iphGnPuZ1iwYdLuK09X0ULjYUYsngF4AhLGR1ztpf5qOV%2FtTFXbh8Xg5QYEpf9i3iUgiQwbvnr9s5FTVCXNF04dU464rVzxSgZhbs%2FJfMMSrksQGOqUBGWFUQq1WYfS9%2BS%2F1Fq3%2BE%2FnH%2BR6EBJrndbPZ9oxJLdqEQfUwrR903YhSMD9NcZsJnxxCL3eI1FCUWB7QYdC33X9ILliwQmrdVoxrGO5tDcc5AjnSYT6%2BhiVLw328I261uBrx1f1x9iDmMHhlw19%2Fy24TqKd1%2FgaBA38vVRw6PKB0nYmO8EFH0k3osvOmCdjdSTU9qVMC4bwLcTAjtAzgoto16m64&X-Amz-Signature=59deba1942b860ca357da557cb7346e852f404befcc5f5af99cb3fc4124a7f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF2FANTN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBNj0exanNW72UN6%2Fjw9MnacOOm6%2FTZeg1%2FNDyViynM1AiEAqIU3MOnchGJY9K6vGZTy4neeIMBBq%2F5Ur3oHoyojeGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBKuttwM%2FCq2%2BCpIRircA%2FN95PyLOqr4AJCHnyoSVGRLP%2FdltA4yXEElK0nnD6uHXzv9sT3h9A6yiySSxZjwjxm5Vs5eqwYlZCff%2B%2BAdlfxZ5NTyKpI7uft7u5mT0xmf237FV%2FCvXb0nK1tSPv8lNE2bm%2FPjOLty32L7vC8DwZ2SI2RqNK5ncxeWVG0bjRHrIUBBU0E%2FYwom5K%2BA%2FafspqklEcirwm4DG12Xf5xCzP%2BcWRDvRuP5R6MgD1VqEf8nolxy%2BYruCcxXJODyTsO3gknfJjzqSTNyG09a%2BdoXFVoxmyhDSWjpiG7xRPTpMKvgEJQ2pdwId35KRwoE%2BAoWyY1AEgwti8SlEGD2mNov9I3AW8ETPxCUCqXFHdwo0KwMrdm8XVjDuicQR%2Baq98qc9mnbY7RDDv%2FRkq%2F7Owv04S91MhWi12%2FdYYzgk5Ovt2Vgy3hlRAXt19ozb5KFlZJ%2F0fjGZ1KcvaUn7emcobO1pLQHCkdZWnMLgBGADXMO0I6y%2FTkEXzvFHODpHwOPob7Jq0D6IaOtKAgcBXlrjEi5iphGnPuZ1iwYdLuK09X0ULjYUYsngF4AhLGR1ztpf5qOV%2FtTFXbh8Xg5QYEpf9i3iUgiQwbvnr9s5FTVCXNF04dU464rVzxSgZhbs%2FJfMMSrksQGOqUBGWFUQq1WYfS9%2BS%2F1Fq3%2BE%2FnH%2BR6EBJrndbPZ9oxJLdqEQfUwrR903YhSMD9NcZsJnxxCL3eI1FCUWB7QYdC33X9ILliwQmrdVoxrGO5tDcc5AjnSYT6%2BhiVLw328I261uBrx1f1x9iDmMHhlw19%2Fy24TqKd1%2FgaBA38vVRw6PKB0nYmO8EFH0k3osvOmCdjdSTU9qVMC4bwLcTAjtAzgoto16m64&X-Amz-Signature=6e7182e6876559e15e8626a612533fb84fd6bada59e9da2037a807d7e82f52c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
