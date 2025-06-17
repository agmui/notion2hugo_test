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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XE4WIM%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElrn1SukT0z6li%2Fg4rimBROlbnNjqnQ5BFi%2BmTzv3lsAiBaoPMwdLj12UobEuCTzWawbDl3XheCKJeEmhqc5%2BdGASr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMm3qKobJ7nWFKqZNTKtwDM6n7niGYcix%2B%2B964JwuTC0j4jKa6D5yTcFT7kTFnciy3EiDAJuvviffccmSRucp5IjFBLxMFXVfZ0iKCIMzpFoMacJ9J5umgPgiHq6Yp0BvbdTPEOKqZj4g6LrW0%2BgCzpTmr4PwQ8i45aiY8nP%2FX3MrYsQvXuL%2FS%2Bu0kfgVHKlgbwsDR3Am9GZZsDDWOjlxmf3j1NU4vGcoLx3Nd%2F1J8hiLypVIT%2BSY%2FL%2FIxp2UnNZBs1hGxnS6%2BBHDS4%2FgK5Z9XpAsKaGn9ECoQPnfQixTJu9gSh%2BNQAlfTDwUTqnVcQD2n8YFKMVO32tCgwX0vROOmDvwFGZNGCRuZ%2FuhkWk3dCm6N%2FdlBRP48TDwDDAoNSxLJNsNjV3wkZkAOf6otCeB7AEONCrP6V4Rvb6AG7Ix%2Fn7mxNrLvaFkH3eTeb5Sj5ISh0SRY94mcyeUsnitzWagxEZZol3lh%2Bhu9CVpy6O9QjB7q193hulImD71iJwMzTRWEBe7knXA%2FDTbYDuPNBjDeuEypyGvb%2BjI87FoJR4jFgI3kLXTEGFMgGaPYtEVzYY7kUa%2FFHguLPCv1RtJNxgvzsrDP1Jzr9OAmCB2wGLwWIKCf%2FC0FFiICty9kK9VSxNTy23OomyMmHDTLDPIwiInHwgY6pgEeRNO1WfJKosCczITqV4X%2FeFaP3hbgtYl5J15PvklX3wjz%2FHGgYwgmQoxPOl5N4mZTJu2m3LRzqFdPw7ylM4%2BVrYkwPep%2BCp3tJlROg4Tc0JolbXO8PUXX%2BMLHbCldoh0Lej7nt%2B%2F2K3SANFTx1js%2FGRE%2BzydMdr3PhdK7I%2BtyWX58CG9khid5aK%2BFffPorLhH7mjcXn%2Fzu027NiBZC%2BKrJiCBN9mb&X-Amz-Signature=ad1efb826a0f3803cae53c8ac78dad8baf1e6717c351182e33cd709e26b55402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XE4WIM%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElrn1SukT0z6li%2Fg4rimBROlbnNjqnQ5BFi%2BmTzv3lsAiBaoPMwdLj12UobEuCTzWawbDl3XheCKJeEmhqc5%2BdGASr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMm3qKobJ7nWFKqZNTKtwDM6n7niGYcix%2B%2B964JwuTC0j4jKa6D5yTcFT7kTFnciy3EiDAJuvviffccmSRucp5IjFBLxMFXVfZ0iKCIMzpFoMacJ9J5umgPgiHq6Yp0BvbdTPEOKqZj4g6LrW0%2BgCzpTmr4PwQ8i45aiY8nP%2FX3MrYsQvXuL%2FS%2Bu0kfgVHKlgbwsDR3Am9GZZsDDWOjlxmf3j1NU4vGcoLx3Nd%2F1J8hiLypVIT%2BSY%2FL%2FIxp2UnNZBs1hGxnS6%2BBHDS4%2FgK5Z9XpAsKaGn9ECoQPnfQixTJu9gSh%2BNQAlfTDwUTqnVcQD2n8YFKMVO32tCgwX0vROOmDvwFGZNGCRuZ%2FuhkWk3dCm6N%2FdlBRP48TDwDDAoNSxLJNsNjV3wkZkAOf6otCeB7AEONCrP6V4Rvb6AG7Ix%2Fn7mxNrLvaFkH3eTeb5Sj5ISh0SRY94mcyeUsnitzWagxEZZol3lh%2Bhu9CVpy6O9QjB7q193hulImD71iJwMzTRWEBe7knXA%2FDTbYDuPNBjDeuEypyGvb%2BjI87FoJR4jFgI3kLXTEGFMgGaPYtEVzYY7kUa%2FFHguLPCv1RtJNxgvzsrDP1Jzr9OAmCB2wGLwWIKCf%2FC0FFiICty9kK9VSxNTy23OomyMmHDTLDPIwiInHwgY6pgEeRNO1WfJKosCczITqV4X%2FeFaP3hbgtYl5J15PvklX3wjz%2FHGgYwgmQoxPOl5N4mZTJu2m3LRzqFdPw7ylM4%2BVrYkwPep%2BCp3tJlROg4Tc0JolbXO8PUXX%2BMLHbCldoh0Lej7nt%2B%2F2K3SANFTx1js%2FGRE%2BzydMdr3PhdK7I%2BtyWX58CG9khid5aK%2BFffPorLhH7mjcXn%2Fzu027NiBZC%2BKrJiCBN9mb&X-Amz-Signature=c93fa07bd6d54f4819147d0e48c21fdd1e1aaa9f9e13cd5aa1a0a001e2dc12c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XE4WIM%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElrn1SukT0z6li%2Fg4rimBROlbnNjqnQ5BFi%2BmTzv3lsAiBaoPMwdLj12UobEuCTzWawbDl3XheCKJeEmhqc5%2BdGASr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMm3qKobJ7nWFKqZNTKtwDM6n7niGYcix%2B%2B964JwuTC0j4jKa6D5yTcFT7kTFnciy3EiDAJuvviffccmSRucp5IjFBLxMFXVfZ0iKCIMzpFoMacJ9J5umgPgiHq6Yp0BvbdTPEOKqZj4g6LrW0%2BgCzpTmr4PwQ8i45aiY8nP%2FX3MrYsQvXuL%2FS%2Bu0kfgVHKlgbwsDR3Am9GZZsDDWOjlxmf3j1NU4vGcoLx3Nd%2F1J8hiLypVIT%2BSY%2FL%2FIxp2UnNZBs1hGxnS6%2BBHDS4%2FgK5Z9XpAsKaGn9ECoQPnfQixTJu9gSh%2BNQAlfTDwUTqnVcQD2n8YFKMVO32tCgwX0vROOmDvwFGZNGCRuZ%2FuhkWk3dCm6N%2FdlBRP48TDwDDAoNSxLJNsNjV3wkZkAOf6otCeB7AEONCrP6V4Rvb6AG7Ix%2Fn7mxNrLvaFkH3eTeb5Sj5ISh0SRY94mcyeUsnitzWagxEZZol3lh%2Bhu9CVpy6O9QjB7q193hulImD71iJwMzTRWEBe7knXA%2FDTbYDuPNBjDeuEypyGvb%2BjI87FoJR4jFgI3kLXTEGFMgGaPYtEVzYY7kUa%2FFHguLPCv1RtJNxgvzsrDP1Jzr9OAmCB2wGLwWIKCf%2FC0FFiICty9kK9VSxNTy23OomyMmHDTLDPIwiInHwgY6pgEeRNO1WfJKosCczITqV4X%2FeFaP3hbgtYl5J15PvklX3wjz%2FHGgYwgmQoxPOl5N4mZTJu2m3LRzqFdPw7ylM4%2BVrYkwPep%2BCp3tJlROg4Tc0JolbXO8PUXX%2BMLHbCldoh0Lej7nt%2B%2F2K3SANFTx1js%2FGRE%2BzydMdr3PhdK7I%2BtyWX58CG9khid5aK%2BFffPorLhH7mjcXn%2Fzu027NiBZC%2BKrJiCBN9mb&X-Amz-Signature=1ee13cb5a74ab15ebc5ed6df09cd1b8172c6fbb8677f03b0f3f0cc75c2318a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XE4WIM%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElrn1SukT0z6li%2Fg4rimBROlbnNjqnQ5BFi%2BmTzv3lsAiBaoPMwdLj12UobEuCTzWawbDl3XheCKJeEmhqc5%2BdGASr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMm3qKobJ7nWFKqZNTKtwDM6n7niGYcix%2B%2B964JwuTC0j4jKa6D5yTcFT7kTFnciy3EiDAJuvviffccmSRucp5IjFBLxMFXVfZ0iKCIMzpFoMacJ9J5umgPgiHq6Yp0BvbdTPEOKqZj4g6LrW0%2BgCzpTmr4PwQ8i45aiY8nP%2FX3MrYsQvXuL%2FS%2Bu0kfgVHKlgbwsDR3Am9GZZsDDWOjlxmf3j1NU4vGcoLx3Nd%2F1J8hiLypVIT%2BSY%2FL%2FIxp2UnNZBs1hGxnS6%2BBHDS4%2FgK5Z9XpAsKaGn9ECoQPnfQixTJu9gSh%2BNQAlfTDwUTqnVcQD2n8YFKMVO32tCgwX0vROOmDvwFGZNGCRuZ%2FuhkWk3dCm6N%2FdlBRP48TDwDDAoNSxLJNsNjV3wkZkAOf6otCeB7AEONCrP6V4Rvb6AG7Ix%2Fn7mxNrLvaFkH3eTeb5Sj5ISh0SRY94mcyeUsnitzWagxEZZol3lh%2Bhu9CVpy6O9QjB7q193hulImD71iJwMzTRWEBe7knXA%2FDTbYDuPNBjDeuEypyGvb%2BjI87FoJR4jFgI3kLXTEGFMgGaPYtEVzYY7kUa%2FFHguLPCv1RtJNxgvzsrDP1Jzr9OAmCB2wGLwWIKCf%2FC0FFiICty9kK9VSxNTy23OomyMmHDTLDPIwiInHwgY6pgEeRNO1WfJKosCczITqV4X%2FeFaP3hbgtYl5J15PvklX3wjz%2FHGgYwgmQoxPOl5N4mZTJu2m3LRzqFdPw7ylM4%2BVrYkwPep%2BCp3tJlROg4Tc0JolbXO8PUXX%2BMLHbCldoh0Lej7nt%2B%2F2K3SANFTx1js%2FGRE%2BzydMdr3PhdK7I%2BtyWX58CG9khid5aK%2BFffPorLhH7mjcXn%2Fzu027NiBZC%2BKrJiCBN9mb&X-Amz-Signature=6f939d211a90264a091fd5528fc8cd9647f2dfb18be19d35afaa546cdc7db55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XE4WIM%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElrn1SukT0z6li%2Fg4rimBROlbnNjqnQ5BFi%2BmTzv3lsAiBaoPMwdLj12UobEuCTzWawbDl3XheCKJeEmhqc5%2BdGASr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMm3qKobJ7nWFKqZNTKtwDM6n7niGYcix%2B%2B964JwuTC0j4jKa6D5yTcFT7kTFnciy3EiDAJuvviffccmSRucp5IjFBLxMFXVfZ0iKCIMzpFoMacJ9J5umgPgiHq6Yp0BvbdTPEOKqZj4g6LrW0%2BgCzpTmr4PwQ8i45aiY8nP%2FX3MrYsQvXuL%2FS%2Bu0kfgVHKlgbwsDR3Am9GZZsDDWOjlxmf3j1NU4vGcoLx3Nd%2F1J8hiLypVIT%2BSY%2FL%2FIxp2UnNZBs1hGxnS6%2BBHDS4%2FgK5Z9XpAsKaGn9ECoQPnfQixTJu9gSh%2BNQAlfTDwUTqnVcQD2n8YFKMVO32tCgwX0vROOmDvwFGZNGCRuZ%2FuhkWk3dCm6N%2FdlBRP48TDwDDAoNSxLJNsNjV3wkZkAOf6otCeB7AEONCrP6V4Rvb6AG7Ix%2Fn7mxNrLvaFkH3eTeb5Sj5ISh0SRY94mcyeUsnitzWagxEZZol3lh%2Bhu9CVpy6O9QjB7q193hulImD71iJwMzTRWEBe7knXA%2FDTbYDuPNBjDeuEypyGvb%2BjI87FoJR4jFgI3kLXTEGFMgGaPYtEVzYY7kUa%2FFHguLPCv1RtJNxgvzsrDP1Jzr9OAmCB2wGLwWIKCf%2FC0FFiICty9kK9VSxNTy23OomyMmHDTLDPIwiInHwgY6pgEeRNO1WfJKosCczITqV4X%2FeFaP3hbgtYl5J15PvklX3wjz%2FHGgYwgmQoxPOl5N4mZTJu2m3LRzqFdPw7ylM4%2BVrYkwPep%2BCp3tJlROg4Tc0JolbXO8PUXX%2BMLHbCldoh0Lej7nt%2B%2F2K3SANFTx1js%2FGRE%2BzydMdr3PhdK7I%2BtyWX58CG9khid5aK%2BFffPorLhH7mjcXn%2Fzu027NiBZC%2BKrJiCBN9mb&X-Amz-Signature=43889c48ce8eb386c1e685dc80e2dfe3c37e77ce237e3bf14a21dd0dc6de3e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
