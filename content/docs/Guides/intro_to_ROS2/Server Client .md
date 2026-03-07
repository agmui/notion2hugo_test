---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBNYQ54%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEyn0s%2F3bPb065K1tyh3ZnFm8LNDH636%2BL%2FskyC9hIDdAiBIii%2Fvi0sQHYGUmR7nGRVh6ZEhB51ZJGjCxpjCcoP3RSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71fjshzX1wBpaU22KtwDyO4%2FEMy%2Be9OxvD%2FqOuZsjmADdqLGZGqjn%2FR%2BfRedCDvD2MV0sLmV0v69kKsEHooB2%2Ffd6BgOkHxDdyQdHIpP9oaQ0IDkavfHBSPnWugvFZW8Ik2Fd73IdfL9cKI1QBJzD1Ryp3r3vmGdWtXAK3uWWPf3y1bJs2Nq%2BR2gI%2FaYQR%2BnV2g1DJ7iWB5LqFu6e1vmixiXZZpaQPnlT8%2Bt0gNJi3nDMgVo5CjzKNGJdJS8usDwU%2BFZx4sdJsPgCB7xrlBuRbmuNf90l51xMO1mhz6ar4W9cjWuBonk%2BzQ1vPj96GVifbwGCtWsESDjdxiOkp6lGRtMCoyTRA7m%2BsrqHbAECO7fOT4yOQpVR4eyidu1Od7jv%2FkpsQfyuy998dPhqtHUk46nIyKdAwboeYuYgoD4Q302aV55Un7gxaEbcPakPUZYZ3zOku%2BJoC%2F0dAuNC8YHecxoGUrOecDDkuF2jqZOJG3S4iUH8AKZI9HJqBxlLLmxtcKYUDhsurzaGvlPc8TT2hpJKo9ks8doTFZSvhBr%2BCjNqJKqJolTboMT6xzXdT1FU5AUyoM4T%2B7FS21NTYXopxbvWSplhfMD8r3H6FN8PB6d3tynef4hzv8ipab6%2F5KMd53%2BlADABDueBgIwiOitzQY6pgGYqXnvGWiYXYklpJ7jW%2F%2F8zaJVPadW1%2B3Ph304xVhqWDnawD1u8n4ZBf2k5HFf10cSXVl7dTVOOs%2FeMYqqvfyZIPUol028YSyPhaylNfh4J7BiJDh9urgqXaiIc9pmY5dPNFSk0jzgavM8OQyZFpCyTZ6kRpfcq%2BCDMUsPiG05quA%2FPVQtsdaWT2hk%2FRUjiT8PoElEHOZ0UPnlRNIbpSc2jvdvLs1W&X-Amz-Signature=e0932fef51b6ca6ac504612c3a931b38a27836ec343ced68f3ecd691080d136b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBNYQ54%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEyn0s%2F3bPb065K1tyh3ZnFm8LNDH636%2BL%2FskyC9hIDdAiBIii%2Fvi0sQHYGUmR7nGRVh6ZEhB51ZJGjCxpjCcoP3RSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71fjshzX1wBpaU22KtwDyO4%2FEMy%2Be9OxvD%2FqOuZsjmADdqLGZGqjn%2FR%2BfRedCDvD2MV0sLmV0v69kKsEHooB2%2Ffd6BgOkHxDdyQdHIpP9oaQ0IDkavfHBSPnWugvFZW8Ik2Fd73IdfL9cKI1QBJzD1Ryp3r3vmGdWtXAK3uWWPf3y1bJs2Nq%2BR2gI%2FaYQR%2BnV2g1DJ7iWB5LqFu6e1vmixiXZZpaQPnlT8%2Bt0gNJi3nDMgVo5CjzKNGJdJS8usDwU%2BFZx4sdJsPgCB7xrlBuRbmuNf90l51xMO1mhz6ar4W9cjWuBonk%2BzQ1vPj96GVifbwGCtWsESDjdxiOkp6lGRtMCoyTRA7m%2BsrqHbAECO7fOT4yOQpVR4eyidu1Od7jv%2FkpsQfyuy998dPhqtHUk46nIyKdAwboeYuYgoD4Q302aV55Un7gxaEbcPakPUZYZ3zOku%2BJoC%2F0dAuNC8YHecxoGUrOecDDkuF2jqZOJG3S4iUH8AKZI9HJqBxlLLmxtcKYUDhsurzaGvlPc8TT2hpJKo9ks8doTFZSvhBr%2BCjNqJKqJolTboMT6xzXdT1FU5AUyoM4T%2B7FS21NTYXopxbvWSplhfMD8r3H6FN8PB6d3tynef4hzv8ipab6%2F5KMd53%2BlADABDueBgIwiOitzQY6pgGYqXnvGWiYXYklpJ7jW%2F%2F8zaJVPadW1%2B3Ph304xVhqWDnawD1u8n4ZBf2k5HFf10cSXVl7dTVOOs%2FeMYqqvfyZIPUol028YSyPhaylNfh4J7BiJDh9urgqXaiIc9pmY5dPNFSk0jzgavM8OQyZFpCyTZ6kRpfcq%2BCDMUsPiG05quA%2FPVQtsdaWT2hk%2FRUjiT8PoElEHOZ0UPnlRNIbpSc2jvdvLs1W&X-Amz-Signature=c1550b94a2db2ccce0fec72513e2100a14e5ea0031e6ac0b091adc60faafc7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBNYQ54%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEyn0s%2F3bPb065K1tyh3ZnFm8LNDH636%2BL%2FskyC9hIDdAiBIii%2Fvi0sQHYGUmR7nGRVh6ZEhB51ZJGjCxpjCcoP3RSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71fjshzX1wBpaU22KtwDyO4%2FEMy%2Be9OxvD%2FqOuZsjmADdqLGZGqjn%2FR%2BfRedCDvD2MV0sLmV0v69kKsEHooB2%2Ffd6BgOkHxDdyQdHIpP9oaQ0IDkavfHBSPnWugvFZW8Ik2Fd73IdfL9cKI1QBJzD1Ryp3r3vmGdWtXAK3uWWPf3y1bJs2Nq%2BR2gI%2FaYQR%2BnV2g1DJ7iWB5LqFu6e1vmixiXZZpaQPnlT8%2Bt0gNJi3nDMgVo5CjzKNGJdJS8usDwU%2BFZx4sdJsPgCB7xrlBuRbmuNf90l51xMO1mhz6ar4W9cjWuBonk%2BzQ1vPj96GVifbwGCtWsESDjdxiOkp6lGRtMCoyTRA7m%2BsrqHbAECO7fOT4yOQpVR4eyidu1Od7jv%2FkpsQfyuy998dPhqtHUk46nIyKdAwboeYuYgoD4Q302aV55Un7gxaEbcPakPUZYZ3zOku%2BJoC%2F0dAuNC8YHecxoGUrOecDDkuF2jqZOJG3S4iUH8AKZI9HJqBxlLLmxtcKYUDhsurzaGvlPc8TT2hpJKo9ks8doTFZSvhBr%2BCjNqJKqJolTboMT6xzXdT1FU5AUyoM4T%2B7FS21NTYXopxbvWSplhfMD8r3H6FN8PB6d3tynef4hzv8ipab6%2F5KMd53%2BlADABDueBgIwiOitzQY6pgGYqXnvGWiYXYklpJ7jW%2F%2F8zaJVPadW1%2B3Ph304xVhqWDnawD1u8n4ZBf2k5HFf10cSXVl7dTVOOs%2FeMYqqvfyZIPUol028YSyPhaylNfh4J7BiJDh9urgqXaiIc9pmY5dPNFSk0jzgavM8OQyZFpCyTZ6kRpfcq%2BCDMUsPiG05quA%2FPVQtsdaWT2hk%2FRUjiT8PoElEHOZ0UPnlRNIbpSc2jvdvLs1W&X-Amz-Signature=b2abcd49397635b45dae765c20f4941e1160c5760af1fd5654eb9902ae0ecac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBNYQ54%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEyn0s%2F3bPb065K1tyh3ZnFm8LNDH636%2BL%2FskyC9hIDdAiBIii%2Fvi0sQHYGUmR7nGRVh6ZEhB51ZJGjCxpjCcoP3RSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71fjshzX1wBpaU22KtwDyO4%2FEMy%2Be9OxvD%2FqOuZsjmADdqLGZGqjn%2FR%2BfRedCDvD2MV0sLmV0v69kKsEHooB2%2Ffd6BgOkHxDdyQdHIpP9oaQ0IDkavfHBSPnWugvFZW8Ik2Fd73IdfL9cKI1QBJzD1Ryp3r3vmGdWtXAK3uWWPf3y1bJs2Nq%2BR2gI%2FaYQR%2BnV2g1DJ7iWB5LqFu6e1vmixiXZZpaQPnlT8%2Bt0gNJi3nDMgVo5CjzKNGJdJS8usDwU%2BFZx4sdJsPgCB7xrlBuRbmuNf90l51xMO1mhz6ar4W9cjWuBonk%2BzQ1vPj96GVifbwGCtWsESDjdxiOkp6lGRtMCoyTRA7m%2BsrqHbAECO7fOT4yOQpVR4eyidu1Od7jv%2FkpsQfyuy998dPhqtHUk46nIyKdAwboeYuYgoD4Q302aV55Un7gxaEbcPakPUZYZ3zOku%2BJoC%2F0dAuNC8YHecxoGUrOecDDkuF2jqZOJG3S4iUH8AKZI9HJqBxlLLmxtcKYUDhsurzaGvlPc8TT2hpJKo9ks8doTFZSvhBr%2BCjNqJKqJolTboMT6xzXdT1FU5AUyoM4T%2B7FS21NTYXopxbvWSplhfMD8r3H6FN8PB6d3tynef4hzv8ipab6%2F5KMd53%2BlADABDueBgIwiOitzQY6pgGYqXnvGWiYXYklpJ7jW%2F%2F8zaJVPadW1%2B3Ph304xVhqWDnawD1u8n4ZBf2k5HFf10cSXVl7dTVOOs%2FeMYqqvfyZIPUol028YSyPhaylNfh4J7BiJDh9urgqXaiIc9pmY5dPNFSk0jzgavM8OQyZFpCyTZ6kRpfcq%2BCDMUsPiG05quA%2FPVQtsdaWT2hk%2FRUjiT8PoElEHOZ0UPnlRNIbpSc2jvdvLs1W&X-Amz-Signature=c402e2701f807cc327d3dbedfaf50c9ce0a401692a21fb5002ce98555ca72cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBNYQ54%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEyn0s%2F3bPb065K1tyh3ZnFm8LNDH636%2BL%2FskyC9hIDdAiBIii%2Fvi0sQHYGUmR7nGRVh6ZEhB51ZJGjCxpjCcoP3RSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71fjshzX1wBpaU22KtwDyO4%2FEMy%2Be9OxvD%2FqOuZsjmADdqLGZGqjn%2FR%2BfRedCDvD2MV0sLmV0v69kKsEHooB2%2Ffd6BgOkHxDdyQdHIpP9oaQ0IDkavfHBSPnWugvFZW8Ik2Fd73IdfL9cKI1QBJzD1Ryp3r3vmGdWtXAK3uWWPf3y1bJs2Nq%2BR2gI%2FaYQR%2BnV2g1DJ7iWB5LqFu6e1vmixiXZZpaQPnlT8%2Bt0gNJi3nDMgVo5CjzKNGJdJS8usDwU%2BFZx4sdJsPgCB7xrlBuRbmuNf90l51xMO1mhz6ar4W9cjWuBonk%2BzQ1vPj96GVifbwGCtWsESDjdxiOkp6lGRtMCoyTRA7m%2BsrqHbAECO7fOT4yOQpVR4eyidu1Od7jv%2FkpsQfyuy998dPhqtHUk46nIyKdAwboeYuYgoD4Q302aV55Un7gxaEbcPakPUZYZ3zOku%2BJoC%2F0dAuNC8YHecxoGUrOecDDkuF2jqZOJG3S4iUH8AKZI9HJqBxlLLmxtcKYUDhsurzaGvlPc8TT2hpJKo9ks8doTFZSvhBr%2BCjNqJKqJolTboMT6xzXdT1FU5AUyoM4T%2B7FS21NTYXopxbvWSplhfMD8r3H6FN8PB6d3tynef4hzv8ipab6%2F5KMd53%2BlADABDueBgIwiOitzQY6pgGYqXnvGWiYXYklpJ7jW%2F%2F8zaJVPadW1%2B3Ph304xVhqWDnawD1u8n4ZBf2k5HFf10cSXVl7dTVOOs%2FeMYqqvfyZIPUol028YSyPhaylNfh4J7BiJDh9urgqXaiIc9pmY5dPNFSk0jzgavM8OQyZFpCyTZ6kRpfcq%2BCDMUsPiG05quA%2FPVQtsdaWT2hk%2FRUjiT8PoElEHOZ0UPnlRNIbpSc2jvdvLs1W&X-Amz-Signature=8a66efd6974ea3bb646e43050419353f5e63310747862d27c18c47e5391158a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
