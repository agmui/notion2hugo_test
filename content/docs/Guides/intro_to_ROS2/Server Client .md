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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGRP2FZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD1Lx3hS6ZIexTDjQmQiXDmY28erH5bSdmGGdGnNqmCCgIhAN9%2F3155EAVtELKQsM%2F6dpQW47M1BTT1Ea0HEjGMkB2jKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw9bwNRS5WOslr5hIq3AOSBaKpUd5%2BYkZDSOGprgTy4bwpoZwByhJL1zaus7sSyB5Mj3HS2nVMS0x0VyGXBTBe7OY6LJHEasg4KIEJdRUs%2BKlWjqzDbz7aVwPsezD35ogEIpG5qPUj1%2BC%2Bpgc%2FptxxMirjDRBjo%2F0yNXvaxIXM2cJ69HJg8xKIAjKqgtaD3aRxe8D7XvZgq8uYomjJcPi0tW3MWrzQm%2B0QoGkFgGyMxjE2l%2BlKHM8ZdBu6jQve4P7Qugcl%2FW2XuAgYJbE22yQRlqARW%2BM4e8P6ojbDZNqGRaI2T%2BrcPCqH469YAN6Bx69HThO%2FbLz8DhPgkGhxSBOMHKa%2BmrrmgOscbNNn4%2BH9q3Rv9i%2B7Y8SMHyHZ1EIpmm8Z1yhorS3QBzHBy%2BdGxOW%2BNveQ%2BSHW%2Fst5iHb2Ls%2Bs0DhhZYgquwRxdPYgP0T38%2F9eAxqOZPKYTCaPL2cLOPktZE96yD23UN%2FXwtBRXQpoVqPKrdl8FWpavfijQ%2B0hIW03fyYh8Gd9VSAFT2EuChrQa9baAdsEhbif6FYKMos0n1yI7mFxqlL8LTQqrveGCCHFZPLnCnQmEFwWhunnZyc3jg7WiUK8qmGgK5f5l1fhB2cAeoKy7%2B7b61qFtedfufa1lbCh50tZlzelgzCF39fABjqkAbzTYQpG9SDcoUHKNklJ4r%2BX2NOBA88G8l91A1hZsc2%2BPtnaXIxe5wJaUwN5iLRAPADlktbbWkOfS6bv5axy9p%2Bqs%2BanHFU08LcwR57KzOFRJKZKaCuJvpFi5YdM1thBJ0fbZLkfZD%2F5LJ0mCdAi4fmIp4mH1wdrBgtWOqf2CYAI39%2FuYta%2B6jVMHU1QyJyl4qPPsDCukBaiIx%2BiB8M3EZQufjEG&X-Amz-Signature=74c34d08f2d66a310bb48792a9527fdf5ab8302b68a68f45fcc2fe8b8a6bc85e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGRP2FZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD1Lx3hS6ZIexTDjQmQiXDmY28erH5bSdmGGdGnNqmCCgIhAN9%2F3155EAVtELKQsM%2F6dpQW47M1BTT1Ea0HEjGMkB2jKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw9bwNRS5WOslr5hIq3AOSBaKpUd5%2BYkZDSOGprgTy4bwpoZwByhJL1zaus7sSyB5Mj3HS2nVMS0x0VyGXBTBe7OY6LJHEasg4KIEJdRUs%2BKlWjqzDbz7aVwPsezD35ogEIpG5qPUj1%2BC%2Bpgc%2FptxxMirjDRBjo%2F0yNXvaxIXM2cJ69HJg8xKIAjKqgtaD3aRxe8D7XvZgq8uYomjJcPi0tW3MWrzQm%2B0QoGkFgGyMxjE2l%2BlKHM8ZdBu6jQve4P7Qugcl%2FW2XuAgYJbE22yQRlqARW%2BM4e8P6ojbDZNqGRaI2T%2BrcPCqH469YAN6Bx69HThO%2FbLz8DhPgkGhxSBOMHKa%2BmrrmgOscbNNn4%2BH9q3Rv9i%2B7Y8SMHyHZ1EIpmm8Z1yhorS3QBzHBy%2BdGxOW%2BNveQ%2BSHW%2Fst5iHb2Ls%2Bs0DhhZYgquwRxdPYgP0T38%2F9eAxqOZPKYTCaPL2cLOPktZE96yD23UN%2FXwtBRXQpoVqPKrdl8FWpavfijQ%2B0hIW03fyYh8Gd9VSAFT2EuChrQa9baAdsEhbif6FYKMos0n1yI7mFxqlL8LTQqrveGCCHFZPLnCnQmEFwWhunnZyc3jg7WiUK8qmGgK5f5l1fhB2cAeoKy7%2B7b61qFtedfufa1lbCh50tZlzelgzCF39fABjqkAbzTYQpG9SDcoUHKNklJ4r%2BX2NOBA88G8l91A1hZsc2%2BPtnaXIxe5wJaUwN5iLRAPADlktbbWkOfS6bv5axy9p%2Bqs%2BanHFU08LcwR57KzOFRJKZKaCuJvpFi5YdM1thBJ0fbZLkfZD%2F5LJ0mCdAi4fmIp4mH1wdrBgtWOqf2CYAI39%2FuYta%2B6jVMHU1QyJyl4qPPsDCukBaiIx%2BiB8M3EZQufjEG&X-Amz-Signature=7602e843a226bfaef98081e71f51e3c89adc16a6d926e35466a60f5f08acf2db&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGRP2FZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD1Lx3hS6ZIexTDjQmQiXDmY28erH5bSdmGGdGnNqmCCgIhAN9%2F3155EAVtELKQsM%2F6dpQW47M1BTT1Ea0HEjGMkB2jKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw9bwNRS5WOslr5hIq3AOSBaKpUd5%2BYkZDSOGprgTy4bwpoZwByhJL1zaus7sSyB5Mj3HS2nVMS0x0VyGXBTBe7OY6LJHEasg4KIEJdRUs%2BKlWjqzDbz7aVwPsezD35ogEIpG5qPUj1%2BC%2Bpgc%2FptxxMirjDRBjo%2F0yNXvaxIXM2cJ69HJg8xKIAjKqgtaD3aRxe8D7XvZgq8uYomjJcPi0tW3MWrzQm%2B0QoGkFgGyMxjE2l%2BlKHM8ZdBu6jQve4P7Qugcl%2FW2XuAgYJbE22yQRlqARW%2BM4e8P6ojbDZNqGRaI2T%2BrcPCqH469YAN6Bx69HThO%2FbLz8DhPgkGhxSBOMHKa%2BmrrmgOscbNNn4%2BH9q3Rv9i%2B7Y8SMHyHZ1EIpmm8Z1yhorS3QBzHBy%2BdGxOW%2BNveQ%2BSHW%2Fst5iHb2Ls%2Bs0DhhZYgquwRxdPYgP0T38%2F9eAxqOZPKYTCaPL2cLOPktZE96yD23UN%2FXwtBRXQpoVqPKrdl8FWpavfijQ%2B0hIW03fyYh8Gd9VSAFT2EuChrQa9baAdsEhbif6FYKMos0n1yI7mFxqlL8LTQqrveGCCHFZPLnCnQmEFwWhunnZyc3jg7WiUK8qmGgK5f5l1fhB2cAeoKy7%2B7b61qFtedfufa1lbCh50tZlzelgzCF39fABjqkAbzTYQpG9SDcoUHKNklJ4r%2BX2NOBA88G8l91A1hZsc2%2BPtnaXIxe5wJaUwN5iLRAPADlktbbWkOfS6bv5axy9p%2Bqs%2BanHFU08LcwR57KzOFRJKZKaCuJvpFi5YdM1thBJ0fbZLkfZD%2F5LJ0mCdAi4fmIp4mH1wdrBgtWOqf2CYAI39%2FuYta%2B6jVMHU1QyJyl4qPPsDCukBaiIx%2BiB8M3EZQufjEG&X-Amz-Signature=fcd8af8fa9fe49e28f67f8c4f6868a553ee0bd165c902a8d7f63767ff8ee58d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGRP2FZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD1Lx3hS6ZIexTDjQmQiXDmY28erH5bSdmGGdGnNqmCCgIhAN9%2F3155EAVtELKQsM%2F6dpQW47M1BTT1Ea0HEjGMkB2jKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw9bwNRS5WOslr5hIq3AOSBaKpUd5%2BYkZDSOGprgTy4bwpoZwByhJL1zaus7sSyB5Mj3HS2nVMS0x0VyGXBTBe7OY6LJHEasg4KIEJdRUs%2BKlWjqzDbz7aVwPsezD35ogEIpG5qPUj1%2BC%2Bpgc%2FptxxMirjDRBjo%2F0yNXvaxIXM2cJ69HJg8xKIAjKqgtaD3aRxe8D7XvZgq8uYomjJcPi0tW3MWrzQm%2B0QoGkFgGyMxjE2l%2BlKHM8ZdBu6jQve4P7Qugcl%2FW2XuAgYJbE22yQRlqARW%2BM4e8P6ojbDZNqGRaI2T%2BrcPCqH469YAN6Bx69HThO%2FbLz8DhPgkGhxSBOMHKa%2BmrrmgOscbNNn4%2BH9q3Rv9i%2B7Y8SMHyHZ1EIpmm8Z1yhorS3QBzHBy%2BdGxOW%2BNveQ%2BSHW%2Fst5iHb2Ls%2Bs0DhhZYgquwRxdPYgP0T38%2F9eAxqOZPKYTCaPL2cLOPktZE96yD23UN%2FXwtBRXQpoVqPKrdl8FWpavfijQ%2B0hIW03fyYh8Gd9VSAFT2EuChrQa9baAdsEhbif6FYKMos0n1yI7mFxqlL8LTQqrveGCCHFZPLnCnQmEFwWhunnZyc3jg7WiUK8qmGgK5f5l1fhB2cAeoKy7%2B7b61qFtedfufa1lbCh50tZlzelgzCF39fABjqkAbzTYQpG9SDcoUHKNklJ4r%2BX2NOBA88G8l91A1hZsc2%2BPtnaXIxe5wJaUwN5iLRAPADlktbbWkOfS6bv5axy9p%2Bqs%2BanHFU08LcwR57KzOFRJKZKaCuJvpFi5YdM1thBJ0fbZLkfZD%2F5LJ0mCdAi4fmIp4mH1wdrBgtWOqf2CYAI39%2FuYta%2B6jVMHU1QyJyl4qPPsDCukBaiIx%2BiB8M3EZQufjEG&X-Amz-Signature=e9bbd1fe53705b8e1e4c87a2fcf0c6529e1d17768c8d8409263051477e335fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGRP2FZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD1Lx3hS6ZIexTDjQmQiXDmY28erH5bSdmGGdGnNqmCCgIhAN9%2F3155EAVtELKQsM%2F6dpQW47M1BTT1Ea0HEjGMkB2jKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw9bwNRS5WOslr5hIq3AOSBaKpUd5%2BYkZDSOGprgTy4bwpoZwByhJL1zaus7sSyB5Mj3HS2nVMS0x0VyGXBTBe7OY6LJHEasg4KIEJdRUs%2BKlWjqzDbz7aVwPsezD35ogEIpG5qPUj1%2BC%2Bpgc%2FptxxMirjDRBjo%2F0yNXvaxIXM2cJ69HJg8xKIAjKqgtaD3aRxe8D7XvZgq8uYomjJcPi0tW3MWrzQm%2B0QoGkFgGyMxjE2l%2BlKHM8ZdBu6jQve4P7Qugcl%2FW2XuAgYJbE22yQRlqARW%2BM4e8P6ojbDZNqGRaI2T%2BrcPCqH469YAN6Bx69HThO%2FbLz8DhPgkGhxSBOMHKa%2BmrrmgOscbNNn4%2BH9q3Rv9i%2B7Y8SMHyHZ1EIpmm8Z1yhorS3QBzHBy%2BdGxOW%2BNveQ%2BSHW%2Fst5iHb2Ls%2Bs0DhhZYgquwRxdPYgP0T38%2F9eAxqOZPKYTCaPL2cLOPktZE96yD23UN%2FXwtBRXQpoVqPKrdl8FWpavfijQ%2B0hIW03fyYh8Gd9VSAFT2EuChrQa9baAdsEhbif6FYKMos0n1yI7mFxqlL8LTQqrveGCCHFZPLnCnQmEFwWhunnZyc3jg7WiUK8qmGgK5f5l1fhB2cAeoKy7%2B7b61qFtedfufa1lbCh50tZlzelgzCF39fABjqkAbzTYQpG9SDcoUHKNklJ4r%2BX2NOBA88G8l91A1hZsc2%2BPtnaXIxe5wJaUwN5iLRAPADlktbbWkOfS6bv5axy9p%2Bqs%2BanHFU08LcwR57KzOFRJKZKaCuJvpFi5YdM1thBJ0fbZLkfZD%2F5LJ0mCdAi4fmIp4mH1wdrBgtWOqf2CYAI39%2FuYta%2B6jVMHU1QyJyl4qPPsDCukBaiIx%2BiB8M3EZQufjEG&X-Amz-Signature=35627f4059ad7c7327ba81d219b36cd7a7dcab00885803500d4136d9955f362b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
