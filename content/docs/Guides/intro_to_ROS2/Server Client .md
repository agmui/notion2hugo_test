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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CGB2UH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2UKRpdGuzXlveLPptmhmZAgqVHGmDjigTt157mYPCAiBcJ3XjqGc8JCyvyCxTjFQeJN7VsY%2FZN7bUkliB27vQeiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6z%2FfsleGCEzGbmq6KtwDszYcAIWIi72CFpkztVVRlSV7Z0BOXb4WbMEvaNrNFhCeTn9Yco3VdjDFPvWlYHWCDMo%2BUegw9O59ez0fEXF%2BhwAA7H%2FWh3QCj1V7HiodG7ZbE%2Bu%2BS6hh07tWhiwXuifrfflh57XI6mOV%2BJIGoINEO%2BVIFDHikj011o1QGfm%2BHTVMfl%2B77IdrMQ608sYnoO%2Bp05mngjWGjJHCvBH6SXXiId1qnBWStdaFJnvsxHT5V6MPs5%2BEJqhhq0sALfFb25UfePO%2Fs0O3PsQxrVaPcK5vsMvX8guK7Ym7D%2BA5xrM9ynPg%2BHY1CrnYCvFY9hO2NPiQNLixG0wfsZg8OWDNlgqcslNeuIfjzj4b9jAphhARhpubQB0F0HSRNmZSXgsXJOuc8dZ%2FdOgjhtpTpuJyKUC%2F0zDSEwVkBsOCWLnkdJ7GqahEtwMmO9QNn75pM7K%2BFc2NWdqunrvYz%2F5nh%2F7dDCgqoeVLUZJNLqF89Qfcpu37v8DBgxxeKnEzuwTS0CMpVIAIk6f5LO0Bj5kZ4PswZw7Q5Tqntb4Mt40L9Wr8PcA1VJhEXHCN8hfpwh6DuTcy%2BsZuZv65Lrby%2FhdiqjPLDeM307RwgOw7JhTepgFtB%2B6Om8VnQhxaiMh6YzKtz1Qw3LbBwAY6pgHCxJ8hPVpDEoMz%2B4tKR8Xft%2F8nvvDhcyama%2BVdFgNXkjndNOXZ4nru387OYuQuEwf%2FImnSKZ8AZSerkH6CoWb3TCroJ3BlDDwYjScMiKs8i0IGQw0DiACIOGHVQYd%2FQ1v5Tmbu%2Ff5IBD9mlAoFXl4cpeGMKhC8XV0KF52swLnQaia0ea8ZQhoSR9N7vX8L2SiKOTmSWdpQDp1kxJOPLRPL9InUcmVA&X-Amz-Signature=1a96af5e8aec1827d00748cffadb7198eaa46f163c9bb09c695e036a1ccf04f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CGB2UH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2UKRpdGuzXlveLPptmhmZAgqVHGmDjigTt157mYPCAiBcJ3XjqGc8JCyvyCxTjFQeJN7VsY%2FZN7bUkliB27vQeiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6z%2FfsleGCEzGbmq6KtwDszYcAIWIi72CFpkztVVRlSV7Z0BOXb4WbMEvaNrNFhCeTn9Yco3VdjDFPvWlYHWCDMo%2BUegw9O59ez0fEXF%2BhwAA7H%2FWh3QCj1V7HiodG7ZbE%2Bu%2BS6hh07tWhiwXuifrfflh57XI6mOV%2BJIGoINEO%2BVIFDHikj011o1QGfm%2BHTVMfl%2B77IdrMQ608sYnoO%2Bp05mngjWGjJHCvBH6SXXiId1qnBWStdaFJnvsxHT5V6MPs5%2BEJqhhq0sALfFb25UfePO%2Fs0O3PsQxrVaPcK5vsMvX8guK7Ym7D%2BA5xrM9ynPg%2BHY1CrnYCvFY9hO2NPiQNLixG0wfsZg8OWDNlgqcslNeuIfjzj4b9jAphhARhpubQB0F0HSRNmZSXgsXJOuc8dZ%2FdOgjhtpTpuJyKUC%2F0zDSEwVkBsOCWLnkdJ7GqahEtwMmO9QNn75pM7K%2BFc2NWdqunrvYz%2F5nh%2F7dDCgqoeVLUZJNLqF89Qfcpu37v8DBgxxeKnEzuwTS0CMpVIAIk6f5LO0Bj5kZ4PswZw7Q5Tqntb4Mt40L9Wr8PcA1VJhEXHCN8hfpwh6DuTcy%2BsZuZv65Lrby%2FhdiqjPLDeM307RwgOw7JhTepgFtB%2B6Om8VnQhxaiMh6YzKtz1Qw3LbBwAY6pgHCxJ8hPVpDEoMz%2B4tKR8Xft%2F8nvvDhcyama%2BVdFgNXkjndNOXZ4nru387OYuQuEwf%2FImnSKZ8AZSerkH6CoWb3TCroJ3BlDDwYjScMiKs8i0IGQw0DiACIOGHVQYd%2FQ1v5Tmbu%2Ff5IBD9mlAoFXl4cpeGMKhC8XV0KF52swLnQaia0ea8ZQhoSR9N7vX8L2SiKOTmSWdpQDp1kxJOPLRPL9InUcmVA&X-Amz-Signature=779fca8194568bf1f96bae29bd776fbab4eb4285c133ab4827af03ace8324a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CGB2UH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2UKRpdGuzXlveLPptmhmZAgqVHGmDjigTt157mYPCAiBcJ3XjqGc8JCyvyCxTjFQeJN7VsY%2FZN7bUkliB27vQeiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6z%2FfsleGCEzGbmq6KtwDszYcAIWIi72CFpkztVVRlSV7Z0BOXb4WbMEvaNrNFhCeTn9Yco3VdjDFPvWlYHWCDMo%2BUegw9O59ez0fEXF%2BhwAA7H%2FWh3QCj1V7HiodG7ZbE%2Bu%2BS6hh07tWhiwXuifrfflh57XI6mOV%2BJIGoINEO%2BVIFDHikj011o1QGfm%2BHTVMfl%2B77IdrMQ608sYnoO%2Bp05mngjWGjJHCvBH6SXXiId1qnBWStdaFJnvsxHT5V6MPs5%2BEJqhhq0sALfFb25UfePO%2Fs0O3PsQxrVaPcK5vsMvX8guK7Ym7D%2BA5xrM9ynPg%2BHY1CrnYCvFY9hO2NPiQNLixG0wfsZg8OWDNlgqcslNeuIfjzj4b9jAphhARhpubQB0F0HSRNmZSXgsXJOuc8dZ%2FdOgjhtpTpuJyKUC%2F0zDSEwVkBsOCWLnkdJ7GqahEtwMmO9QNn75pM7K%2BFc2NWdqunrvYz%2F5nh%2F7dDCgqoeVLUZJNLqF89Qfcpu37v8DBgxxeKnEzuwTS0CMpVIAIk6f5LO0Bj5kZ4PswZw7Q5Tqntb4Mt40L9Wr8PcA1VJhEXHCN8hfpwh6DuTcy%2BsZuZv65Lrby%2FhdiqjPLDeM307RwgOw7JhTepgFtB%2B6Om8VnQhxaiMh6YzKtz1Qw3LbBwAY6pgHCxJ8hPVpDEoMz%2B4tKR8Xft%2F8nvvDhcyama%2BVdFgNXkjndNOXZ4nru387OYuQuEwf%2FImnSKZ8AZSerkH6CoWb3TCroJ3BlDDwYjScMiKs8i0IGQw0DiACIOGHVQYd%2FQ1v5Tmbu%2Ff5IBD9mlAoFXl4cpeGMKhC8XV0KF52swLnQaia0ea8ZQhoSR9N7vX8L2SiKOTmSWdpQDp1kxJOPLRPL9InUcmVA&X-Amz-Signature=e894f4e2ad09d0d614fd53009cb09545383c84274e600765fd94445696ab6a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CGB2UH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2UKRpdGuzXlveLPptmhmZAgqVHGmDjigTt157mYPCAiBcJ3XjqGc8JCyvyCxTjFQeJN7VsY%2FZN7bUkliB27vQeiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6z%2FfsleGCEzGbmq6KtwDszYcAIWIi72CFpkztVVRlSV7Z0BOXb4WbMEvaNrNFhCeTn9Yco3VdjDFPvWlYHWCDMo%2BUegw9O59ez0fEXF%2BhwAA7H%2FWh3QCj1V7HiodG7ZbE%2Bu%2BS6hh07tWhiwXuifrfflh57XI6mOV%2BJIGoINEO%2BVIFDHikj011o1QGfm%2BHTVMfl%2B77IdrMQ608sYnoO%2Bp05mngjWGjJHCvBH6SXXiId1qnBWStdaFJnvsxHT5V6MPs5%2BEJqhhq0sALfFb25UfePO%2Fs0O3PsQxrVaPcK5vsMvX8guK7Ym7D%2BA5xrM9ynPg%2BHY1CrnYCvFY9hO2NPiQNLixG0wfsZg8OWDNlgqcslNeuIfjzj4b9jAphhARhpubQB0F0HSRNmZSXgsXJOuc8dZ%2FdOgjhtpTpuJyKUC%2F0zDSEwVkBsOCWLnkdJ7GqahEtwMmO9QNn75pM7K%2BFc2NWdqunrvYz%2F5nh%2F7dDCgqoeVLUZJNLqF89Qfcpu37v8DBgxxeKnEzuwTS0CMpVIAIk6f5LO0Bj5kZ4PswZw7Q5Tqntb4Mt40L9Wr8PcA1VJhEXHCN8hfpwh6DuTcy%2BsZuZv65Lrby%2FhdiqjPLDeM307RwgOw7JhTepgFtB%2B6Om8VnQhxaiMh6YzKtz1Qw3LbBwAY6pgHCxJ8hPVpDEoMz%2B4tKR8Xft%2F8nvvDhcyama%2BVdFgNXkjndNOXZ4nru387OYuQuEwf%2FImnSKZ8AZSerkH6CoWb3TCroJ3BlDDwYjScMiKs8i0IGQw0DiACIOGHVQYd%2FQ1v5Tmbu%2Ff5IBD9mlAoFXl4cpeGMKhC8XV0KF52swLnQaia0ea8ZQhoSR9N7vX8L2SiKOTmSWdpQDp1kxJOPLRPL9InUcmVA&X-Amz-Signature=5ea1ebb7a3151005e74503c7c3de0dd15abcb97876d5a3715c316c72a1c939ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CGB2UH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2UKRpdGuzXlveLPptmhmZAgqVHGmDjigTt157mYPCAiBcJ3XjqGc8JCyvyCxTjFQeJN7VsY%2FZN7bUkliB27vQeiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6z%2FfsleGCEzGbmq6KtwDszYcAIWIi72CFpkztVVRlSV7Z0BOXb4WbMEvaNrNFhCeTn9Yco3VdjDFPvWlYHWCDMo%2BUegw9O59ez0fEXF%2BhwAA7H%2FWh3QCj1V7HiodG7ZbE%2Bu%2BS6hh07tWhiwXuifrfflh57XI6mOV%2BJIGoINEO%2BVIFDHikj011o1QGfm%2BHTVMfl%2B77IdrMQ608sYnoO%2Bp05mngjWGjJHCvBH6SXXiId1qnBWStdaFJnvsxHT5V6MPs5%2BEJqhhq0sALfFb25UfePO%2Fs0O3PsQxrVaPcK5vsMvX8guK7Ym7D%2BA5xrM9ynPg%2BHY1CrnYCvFY9hO2NPiQNLixG0wfsZg8OWDNlgqcslNeuIfjzj4b9jAphhARhpubQB0F0HSRNmZSXgsXJOuc8dZ%2FdOgjhtpTpuJyKUC%2F0zDSEwVkBsOCWLnkdJ7GqahEtwMmO9QNn75pM7K%2BFc2NWdqunrvYz%2F5nh%2F7dDCgqoeVLUZJNLqF89Qfcpu37v8DBgxxeKnEzuwTS0CMpVIAIk6f5LO0Bj5kZ4PswZw7Q5Tqntb4Mt40L9Wr8PcA1VJhEXHCN8hfpwh6DuTcy%2BsZuZv65Lrby%2FhdiqjPLDeM307RwgOw7JhTepgFtB%2B6Om8VnQhxaiMh6YzKtz1Qw3LbBwAY6pgHCxJ8hPVpDEoMz%2B4tKR8Xft%2F8nvvDhcyama%2BVdFgNXkjndNOXZ4nru387OYuQuEwf%2FImnSKZ8AZSerkH6CoWb3TCroJ3BlDDwYjScMiKs8i0IGQw0DiACIOGHVQYd%2FQ1v5Tmbu%2Ff5IBD9mlAoFXl4cpeGMKhC8XV0KF52swLnQaia0ea8ZQhoSR9N7vX8L2SiKOTmSWdpQDp1kxJOPLRPL9InUcmVA&X-Amz-Signature=6b32cf038e1d0184a263068434afd662689ee9a74edb248b1819010e7ab70052&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
