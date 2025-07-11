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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VWVHAT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSNhDRXlDFfy%2F%2BN3t1Lk8sAvQkb2fkh9bwZLno%2BMiH2AiAMtC7CG57eDC0WCN6jtTRo0kGkgCBHl6iqb6TpoqTgsSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCqfn2KRcaWleqXvXKtwDgpg0%2FB3KyJ9ezoNJuODxauhr4YmFKXi9G4a62jlmh3IcKAwiGj2UVmbdrnzvqku684cu6Js8BAJLQKcyb8xpymQD%2FTSHSmFFkTSpnxaU6hgghPbA3DTYfyD2AEFFzFsO0eufqslSAENxHvnckbGp13v5SM25oDrFFGNohdlWvT96NX%2FLCT%2B0fl%2BDN1Riuy9hJGFnDaamYeGE7MxYV2g3qq21cLPswHvk6CMA3VUcobBmdrQ7midoE2pw%2F4JXZqHnbEkT7tuIy9l3LyV0u8DZJd5zn2TlwG4KVzSouh7gsRTLAnVbB8tA3nxLI4I56pGSiDpA496gBj2t3B15ewBHlHjSwkaDpKKHXmNFMO8RZNatMaZ7s5aUFesBszMU9h%2FfsvCSisy5Mc4qz82mnSkC%2BD1otxBtV7KFo4UVYVEjw3%2FPA1ceYnOXuOHrWeJIn7X%2FooiBm3f24zgFS5fnZKlRtglHaCRZCo8ewrh9H4yv4WoMcajA8ynlcOt5R9%2BS021sAlqEzJ4WnVZU4lyuJcVksPtcXKdc3f6r%2FajCMiZNmbk8GhbEz5oiJt802ZccRKgf8%2F5UUiO00ZUaHZ%2BdFSaCHj%2FzPjJ85MbL6NH0%2Bul9iISvft7CIqcfdJvCZ6wwv4PGwwY6pgGauTQrSP71xXm2%2BMNkN4Pfzj%2FrY6h3sYLbBq6XHOJ2TcRTPysgiDKtGI23H88cQlgic7hgoFVdnQ59naIQ486oLRCQaj8mAJSH7wi5TLBmtsHCPH4wqGxZb1P8CDmEMMw5IoNLdT4h9Ae1GsDqr8bBoMb1k3kciGEuC6%2FcFj%2FDHa%2BOx3CBQ%2BOGvsx6KOsbULQtjQpTJT9reZ3jgynVGuiom0eBxjIj&X-Amz-Signature=27696bc99370d64aad30f0baf459da1fb93be87d8879ca4e7132b338cece2474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VWVHAT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSNhDRXlDFfy%2F%2BN3t1Lk8sAvQkb2fkh9bwZLno%2BMiH2AiAMtC7CG57eDC0WCN6jtTRo0kGkgCBHl6iqb6TpoqTgsSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCqfn2KRcaWleqXvXKtwDgpg0%2FB3KyJ9ezoNJuODxauhr4YmFKXi9G4a62jlmh3IcKAwiGj2UVmbdrnzvqku684cu6Js8BAJLQKcyb8xpymQD%2FTSHSmFFkTSpnxaU6hgghPbA3DTYfyD2AEFFzFsO0eufqslSAENxHvnckbGp13v5SM25oDrFFGNohdlWvT96NX%2FLCT%2B0fl%2BDN1Riuy9hJGFnDaamYeGE7MxYV2g3qq21cLPswHvk6CMA3VUcobBmdrQ7midoE2pw%2F4JXZqHnbEkT7tuIy9l3LyV0u8DZJd5zn2TlwG4KVzSouh7gsRTLAnVbB8tA3nxLI4I56pGSiDpA496gBj2t3B15ewBHlHjSwkaDpKKHXmNFMO8RZNatMaZ7s5aUFesBszMU9h%2FfsvCSisy5Mc4qz82mnSkC%2BD1otxBtV7KFo4UVYVEjw3%2FPA1ceYnOXuOHrWeJIn7X%2FooiBm3f24zgFS5fnZKlRtglHaCRZCo8ewrh9H4yv4WoMcajA8ynlcOt5R9%2BS021sAlqEzJ4WnVZU4lyuJcVksPtcXKdc3f6r%2FajCMiZNmbk8GhbEz5oiJt802ZccRKgf8%2F5UUiO00ZUaHZ%2BdFSaCHj%2FzPjJ85MbL6NH0%2Bul9iISvft7CIqcfdJvCZ6wwv4PGwwY6pgGauTQrSP71xXm2%2BMNkN4Pfzj%2FrY6h3sYLbBq6XHOJ2TcRTPysgiDKtGI23H88cQlgic7hgoFVdnQ59naIQ486oLRCQaj8mAJSH7wi5TLBmtsHCPH4wqGxZb1P8CDmEMMw5IoNLdT4h9Ae1GsDqr8bBoMb1k3kciGEuC6%2FcFj%2FDHa%2BOx3CBQ%2BOGvsx6KOsbULQtjQpTJT9reZ3jgynVGuiom0eBxjIj&X-Amz-Signature=21c97bbb6ca82dbfee69a1e36930b18023635e51f82f85e65ae6bce6166f7e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VWVHAT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSNhDRXlDFfy%2F%2BN3t1Lk8sAvQkb2fkh9bwZLno%2BMiH2AiAMtC7CG57eDC0WCN6jtTRo0kGkgCBHl6iqb6TpoqTgsSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCqfn2KRcaWleqXvXKtwDgpg0%2FB3KyJ9ezoNJuODxauhr4YmFKXi9G4a62jlmh3IcKAwiGj2UVmbdrnzvqku684cu6Js8BAJLQKcyb8xpymQD%2FTSHSmFFkTSpnxaU6hgghPbA3DTYfyD2AEFFzFsO0eufqslSAENxHvnckbGp13v5SM25oDrFFGNohdlWvT96NX%2FLCT%2B0fl%2BDN1Riuy9hJGFnDaamYeGE7MxYV2g3qq21cLPswHvk6CMA3VUcobBmdrQ7midoE2pw%2F4JXZqHnbEkT7tuIy9l3LyV0u8DZJd5zn2TlwG4KVzSouh7gsRTLAnVbB8tA3nxLI4I56pGSiDpA496gBj2t3B15ewBHlHjSwkaDpKKHXmNFMO8RZNatMaZ7s5aUFesBszMU9h%2FfsvCSisy5Mc4qz82mnSkC%2BD1otxBtV7KFo4UVYVEjw3%2FPA1ceYnOXuOHrWeJIn7X%2FooiBm3f24zgFS5fnZKlRtglHaCRZCo8ewrh9H4yv4WoMcajA8ynlcOt5R9%2BS021sAlqEzJ4WnVZU4lyuJcVksPtcXKdc3f6r%2FajCMiZNmbk8GhbEz5oiJt802ZccRKgf8%2F5UUiO00ZUaHZ%2BdFSaCHj%2FzPjJ85MbL6NH0%2Bul9iISvft7CIqcfdJvCZ6wwv4PGwwY6pgGauTQrSP71xXm2%2BMNkN4Pfzj%2FrY6h3sYLbBq6XHOJ2TcRTPysgiDKtGI23H88cQlgic7hgoFVdnQ59naIQ486oLRCQaj8mAJSH7wi5TLBmtsHCPH4wqGxZb1P8CDmEMMw5IoNLdT4h9Ae1GsDqr8bBoMb1k3kciGEuC6%2FcFj%2FDHa%2BOx3CBQ%2BOGvsx6KOsbULQtjQpTJT9reZ3jgynVGuiom0eBxjIj&X-Amz-Signature=30bc2088988b60bd605abf21178887565e53d7b56b03f14be04906abe4cd727b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VWVHAT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSNhDRXlDFfy%2F%2BN3t1Lk8sAvQkb2fkh9bwZLno%2BMiH2AiAMtC7CG57eDC0WCN6jtTRo0kGkgCBHl6iqb6TpoqTgsSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCqfn2KRcaWleqXvXKtwDgpg0%2FB3KyJ9ezoNJuODxauhr4YmFKXi9G4a62jlmh3IcKAwiGj2UVmbdrnzvqku684cu6Js8BAJLQKcyb8xpymQD%2FTSHSmFFkTSpnxaU6hgghPbA3DTYfyD2AEFFzFsO0eufqslSAENxHvnckbGp13v5SM25oDrFFGNohdlWvT96NX%2FLCT%2B0fl%2BDN1Riuy9hJGFnDaamYeGE7MxYV2g3qq21cLPswHvk6CMA3VUcobBmdrQ7midoE2pw%2F4JXZqHnbEkT7tuIy9l3LyV0u8DZJd5zn2TlwG4KVzSouh7gsRTLAnVbB8tA3nxLI4I56pGSiDpA496gBj2t3B15ewBHlHjSwkaDpKKHXmNFMO8RZNatMaZ7s5aUFesBszMU9h%2FfsvCSisy5Mc4qz82mnSkC%2BD1otxBtV7KFo4UVYVEjw3%2FPA1ceYnOXuOHrWeJIn7X%2FooiBm3f24zgFS5fnZKlRtglHaCRZCo8ewrh9H4yv4WoMcajA8ynlcOt5R9%2BS021sAlqEzJ4WnVZU4lyuJcVksPtcXKdc3f6r%2FajCMiZNmbk8GhbEz5oiJt802ZccRKgf8%2F5UUiO00ZUaHZ%2BdFSaCHj%2FzPjJ85MbL6NH0%2Bul9iISvft7CIqcfdJvCZ6wwv4PGwwY6pgGauTQrSP71xXm2%2BMNkN4Pfzj%2FrY6h3sYLbBq6XHOJ2TcRTPysgiDKtGI23H88cQlgic7hgoFVdnQ59naIQ486oLRCQaj8mAJSH7wi5TLBmtsHCPH4wqGxZb1P8CDmEMMw5IoNLdT4h9Ae1GsDqr8bBoMb1k3kciGEuC6%2FcFj%2FDHa%2BOx3CBQ%2BOGvsx6KOsbULQtjQpTJT9reZ3jgynVGuiom0eBxjIj&X-Amz-Signature=922df4fd7e442481b3a50cb9c6a6a7cd0120b8da88d3b8858a2789dba6498b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VWVHAT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSNhDRXlDFfy%2F%2BN3t1Lk8sAvQkb2fkh9bwZLno%2BMiH2AiAMtC7CG57eDC0WCN6jtTRo0kGkgCBHl6iqb6TpoqTgsSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCqfn2KRcaWleqXvXKtwDgpg0%2FB3KyJ9ezoNJuODxauhr4YmFKXi9G4a62jlmh3IcKAwiGj2UVmbdrnzvqku684cu6Js8BAJLQKcyb8xpymQD%2FTSHSmFFkTSpnxaU6hgghPbA3DTYfyD2AEFFzFsO0eufqslSAENxHvnckbGp13v5SM25oDrFFGNohdlWvT96NX%2FLCT%2B0fl%2BDN1Riuy9hJGFnDaamYeGE7MxYV2g3qq21cLPswHvk6CMA3VUcobBmdrQ7midoE2pw%2F4JXZqHnbEkT7tuIy9l3LyV0u8DZJd5zn2TlwG4KVzSouh7gsRTLAnVbB8tA3nxLI4I56pGSiDpA496gBj2t3B15ewBHlHjSwkaDpKKHXmNFMO8RZNatMaZ7s5aUFesBszMU9h%2FfsvCSisy5Mc4qz82mnSkC%2BD1otxBtV7KFo4UVYVEjw3%2FPA1ceYnOXuOHrWeJIn7X%2FooiBm3f24zgFS5fnZKlRtglHaCRZCo8ewrh9H4yv4WoMcajA8ynlcOt5R9%2BS021sAlqEzJ4WnVZU4lyuJcVksPtcXKdc3f6r%2FajCMiZNmbk8GhbEz5oiJt802ZccRKgf8%2F5UUiO00ZUaHZ%2BdFSaCHj%2FzPjJ85MbL6NH0%2Bul9iISvft7CIqcfdJvCZ6wwv4PGwwY6pgGauTQrSP71xXm2%2BMNkN4Pfzj%2FrY6h3sYLbBq6XHOJ2TcRTPysgiDKtGI23H88cQlgic7hgoFVdnQ59naIQ486oLRCQaj8mAJSH7wi5TLBmtsHCPH4wqGxZb1P8CDmEMMw5IoNLdT4h9Ae1GsDqr8bBoMb1k3kciGEuC6%2FcFj%2FDHa%2BOx3CBQ%2BOGvsx6KOsbULQtjQpTJT9reZ3jgynVGuiom0eBxjIj&X-Amz-Signature=0d0089bd1be9217e83d4f249ffe19b26ab659d710dbc250c85f1d31ac795c7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
