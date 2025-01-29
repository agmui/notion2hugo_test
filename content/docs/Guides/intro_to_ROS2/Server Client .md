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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643B4OK2T%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFdhaSxauGYt%2B%2BL4D9FVySBLtpIHQvvWcB97DtxWaV0QIgBa58NYW4o%2BeOmyVfh9n%2BAAa68oJZ4g1Jeu8pWrY%2FVzcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPEgoeWL4D%2BRQt3VCrcAxNv%2F1S2sUUpi26G5gx0ncb7RSLpnW9bmrpFMsParEGlvwnPSGP0E7w8S0OYV%2B0SjjxDAnvM20%2BT9Qfdeu%2B9LW5zYFDDmE9M1Zjby98aHUO%2BkIbSUUT62Zn54pT4Rr2iUAbH%2BDjcq5xBSSGxi0Sb9AnI4qIgw2oshR16pPeuLt1DWrbaTb8HhOt0gU1hpgrrkXY96Bt5aIkabeICTZtkyCZfwzsqNKNASOUyABwNH4xbkjC71ct4qaB1bCkTFEK9qb%2FchlMYpjY4ZcQ79FAuM4rekM0rK1qlD58qOqFMGjenSAp7qUKBbpdJQp8qQiKF4YXRTge%2F1vTXspybQAJkitKP7J8PIHdvKPx6ED%2BpWTaMPLRiISFUFLNhEbr5aV%2BotU15D%2F0pmTf60ZSj3BM4PF%2BMZbfvK9U6ry%2Bp0ZTtqFyVMcq6HGbkA7Mtv6M7KAOm8riBgs%2FufXa1ZwPYQdh0%2BxY2zAPvRRGlH0KlNpPqdTMobN62KPzCAmfd14AXg2Ofqc6mmkMac0gM6qVA8VZFt6NatLoLyUrQUUhTwlP%2BQ%2BcYXw2PDF6E0Gnn505CK3y087K1RJFRUjadJV8qLMhsuDZEAjLybMMN1nIWQhTLKTXG%2F%2F%2FF6MXkAg4rG8t8MIjo6LwGOqUBUMsoWTsoPfkvcYsoFv727HWDVXYS1ba3bkX6i1y1Vn55N%2Feo0ehI8c%2BwAOktcwSf%2FY7XoEFCSJ8%2FR7z%2BSs9yvxefRz3%2Fh6p2VozI5K9oacs%2BBKHT1Pvztu5NamvdVfoDUOKB12n5V5mutb6k7gaTJaf5SZXE%2FYnqScxm75lqxDzVZrh9xh3YzSWb%2Bjs32qH44vuUVnVOCIk0zLN4GXF8mvFJ37UO&X-Amz-Signature=7cf351801dd1c9203b505b98d45cca4b621e94debc98f90990f14c31d8206668&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643B4OK2T%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFdhaSxauGYt%2B%2BL4D9FVySBLtpIHQvvWcB97DtxWaV0QIgBa58NYW4o%2BeOmyVfh9n%2BAAa68oJZ4g1Jeu8pWrY%2FVzcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPEgoeWL4D%2BRQt3VCrcAxNv%2F1S2sUUpi26G5gx0ncb7RSLpnW9bmrpFMsParEGlvwnPSGP0E7w8S0OYV%2B0SjjxDAnvM20%2BT9Qfdeu%2B9LW5zYFDDmE9M1Zjby98aHUO%2BkIbSUUT62Zn54pT4Rr2iUAbH%2BDjcq5xBSSGxi0Sb9AnI4qIgw2oshR16pPeuLt1DWrbaTb8HhOt0gU1hpgrrkXY96Bt5aIkabeICTZtkyCZfwzsqNKNASOUyABwNH4xbkjC71ct4qaB1bCkTFEK9qb%2FchlMYpjY4ZcQ79FAuM4rekM0rK1qlD58qOqFMGjenSAp7qUKBbpdJQp8qQiKF4YXRTge%2F1vTXspybQAJkitKP7J8PIHdvKPx6ED%2BpWTaMPLRiISFUFLNhEbr5aV%2BotU15D%2F0pmTf60ZSj3BM4PF%2BMZbfvK9U6ry%2Bp0ZTtqFyVMcq6HGbkA7Mtv6M7KAOm8riBgs%2FufXa1ZwPYQdh0%2BxY2zAPvRRGlH0KlNpPqdTMobN62KPzCAmfd14AXg2Ofqc6mmkMac0gM6qVA8VZFt6NatLoLyUrQUUhTwlP%2BQ%2BcYXw2PDF6E0Gnn505CK3y087K1RJFRUjadJV8qLMhsuDZEAjLybMMN1nIWQhTLKTXG%2F%2F%2FF6MXkAg4rG8t8MIjo6LwGOqUBUMsoWTsoPfkvcYsoFv727HWDVXYS1ba3bkX6i1y1Vn55N%2Feo0ehI8c%2BwAOktcwSf%2FY7XoEFCSJ8%2FR7z%2BSs9yvxefRz3%2Fh6p2VozI5K9oacs%2BBKHT1Pvztu5NamvdVfoDUOKB12n5V5mutb6k7gaTJaf5SZXE%2FYnqScxm75lqxDzVZrh9xh3YzSWb%2Bjs32qH44vuUVnVOCIk0zLN4GXF8mvFJ37UO&X-Amz-Signature=716955a4d95eb720b7e92a70bf46e36b0457d4ab2d081169397e762dc25a3aad&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643B4OK2T%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFdhaSxauGYt%2B%2BL4D9FVySBLtpIHQvvWcB97DtxWaV0QIgBa58NYW4o%2BeOmyVfh9n%2BAAa68oJZ4g1Jeu8pWrY%2FVzcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPEgoeWL4D%2BRQt3VCrcAxNv%2F1S2sUUpi26G5gx0ncb7RSLpnW9bmrpFMsParEGlvwnPSGP0E7w8S0OYV%2B0SjjxDAnvM20%2BT9Qfdeu%2B9LW5zYFDDmE9M1Zjby98aHUO%2BkIbSUUT62Zn54pT4Rr2iUAbH%2BDjcq5xBSSGxi0Sb9AnI4qIgw2oshR16pPeuLt1DWrbaTb8HhOt0gU1hpgrrkXY96Bt5aIkabeICTZtkyCZfwzsqNKNASOUyABwNH4xbkjC71ct4qaB1bCkTFEK9qb%2FchlMYpjY4ZcQ79FAuM4rekM0rK1qlD58qOqFMGjenSAp7qUKBbpdJQp8qQiKF4YXRTge%2F1vTXspybQAJkitKP7J8PIHdvKPx6ED%2BpWTaMPLRiISFUFLNhEbr5aV%2BotU15D%2F0pmTf60ZSj3BM4PF%2BMZbfvK9U6ry%2Bp0ZTtqFyVMcq6HGbkA7Mtv6M7KAOm8riBgs%2FufXa1ZwPYQdh0%2BxY2zAPvRRGlH0KlNpPqdTMobN62KPzCAmfd14AXg2Ofqc6mmkMac0gM6qVA8VZFt6NatLoLyUrQUUhTwlP%2BQ%2BcYXw2PDF6E0Gnn505CK3y087K1RJFRUjadJV8qLMhsuDZEAjLybMMN1nIWQhTLKTXG%2F%2F%2FF6MXkAg4rG8t8MIjo6LwGOqUBUMsoWTsoPfkvcYsoFv727HWDVXYS1ba3bkX6i1y1Vn55N%2Feo0ehI8c%2BwAOktcwSf%2FY7XoEFCSJ8%2FR7z%2BSs9yvxefRz3%2Fh6p2VozI5K9oacs%2BBKHT1Pvztu5NamvdVfoDUOKB12n5V5mutb6k7gaTJaf5SZXE%2FYnqScxm75lqxDzVZrh9xh3YzSWb%2Bjs32qH44vuUVnVOCIk0zLN4GXF8mvFJ37UO&X-Amz-Signature=1fff6002ae337b53d81e201f19b861decc1fdbfae07d594139f99fabe7959063&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643B4OK2T%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFdhaSxauGYt%2B%2BL4D9FVySBLtpIHQvvWcB97DtxWaV0QIgBa58NYW4o%2BeOmyVfh9n%2BAAa68oJZ4g1Jeu8pWrY%2FVzcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPEgoeWL4D%2BRQt3VCrcAxNv%2F1S2sUUpi26G5gx0ncb7RSLpnW9bmrpFMsParEGlvwnPSGP0E7w8S0OYV%2B0SjjxDAnvM20%2BT9Qfdeu%2B9LW5zYFDDmE9M1Zjby98aHUO%2BkIbSUUT62Zn54pT4Rr2iUAbH%2BDjcq5xBSSGxi0Sb9AnI4qIgw2oshR16pPeuLt1DWrbaTb8HhOt0gU1hpgrrkXY96Bt5aIkabeICTZtkyCZfwzsqNKNASOUyABwNH4xbkjC71ct4qaB1bCkTFEK9qb%2FchlMYpjY4ZcQ79FAuM4rekM0rK1qlD58qOqFMGjenSAp7qUKBbpdJQp8qQiKF4YXRTge%2F1vTXspybQAJkitKP7J8PIHdvKPx6ED%2BpWTaMPLRiISFUFLNhEbr5aV%2BotU15D%2F0pmTf60ZSj3BM4PF%2BMZbfvK9U6ry%2Bp0ZTtqFyVMcq6HGbkA7Mtv6M7KAOm8riBgs%2FufXa1ZwPYQdh0%2BxY2zAPvRRGlH0KlNpPqdTMobN62KPzCAmfd14AXg2Ofqc6mmkMac0gM6qVA8VZFt6NatLoLyUrQUUhTwlP%2BQ%2BcYXw2PDF6E0Gnn505CK3y087K1RJFRUjadJV8qLMhsuDZEAjLybMMN1nIWQhTLKTXG%2F%2F%2FF6MXkAg4rG8t8MIjo6LwGOqUBUMsoWTsoPfkvcYsoFv727HWDVXYS1ba3bkX6i1y1Vn55N%2Feo0ehI8c%2BwAOktcwSf%2FY7XoEFCSJ8%2FR7z%2BSs9yvxefRz3%2Fh6p2VozI5K9oacs%2BBKHT1Pvztu5NamvdVfoDUOKB12n5V5mutb6k7gaTJaf5SZXE%2FYnqScxm75lqxDzVZrh9xh3YzSWb%2Bjs32qH44vuUVnVOCIk0zLN4GXF8mvFJ37UO&X-Amz-Signature=3530a27a837ebbb444d4ccaa49360c606e16ca7a89c410af821c234d0cd0d712&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643B4OK2T%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFdhaSxauGYt%2B%2BL4D9FVySBLtpIHQvvWcB97DtxWaV0QIgBa58NYW4o%2BeOmyVfh9n%2BAAa68oJZ4g1Jeu8pWrY%2FVzcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPEgoeWL4D%2BRQt3VCrcAxNv%2F1S2sUUpi26G5gx0ncb7RSLpnW9bmrpFMsParEGlvwnPSGP0E7w8S0OYV%2B0SjjxDAnvM20%2BT9Qfdeu%2B9LW5zYFDDmE9M1Zjby98aHUO%2BkIbSUUT62Zn54pT4Rr2iUAbH%2BDjcq5xBSSGxi0Sb9AnI4qIgw2oshR16pPeuLt1DWrbaTb8HhOt0gU1hpgrrkXY96Bt5aIkabeICTZtkyCZfwzsqNKNASOUyABwNH4xbkjC71ct4qaB1bCkTFEK9qb%2FchlMYpjY4ZcQ79FAuM4rekM0rK1qlD58qOqFMGjenSAp7qUKBbpdJQp8qQiKF4YXRTge%2F1vTXspybQAJkitKP7J8PIHdvKPx6ED%2BpWTaMPLRiISFUFLNhEbr5aV%2BotU15D%2F0pmTf60ZSj3BM4PF%2BMZbfvK9U6ry%2Bp0ZTtqFyVMcq6HGbkA7Mtv6M7KAOm8riBgs%2FufXa1ZwPYQdh0%2BxY2zAPvRRGlH0KlNpPqdTMobN62KPzCAmfd14AXg2Ofqc6mmkMac0gM6qVA8VZFt6NatLoLyUrQUUhTwlP%2BQ%2BcYXw2PDF6E0Gnn505CK3y087K1RJFRUjadJV8qLMhsuDZEAjLybMMN1nIWQhTLKTXG%2F%2F%2FF6MXkAg4rG8t8MIjo6LwGOqUBUMsoWTsoPfkvcYsoFv727HWDVXYS1ba3bkX6i1y1Vn55N%2Feo0ehI8c%2BwAOktcwSf%2FY7XoEFCSJ8%2FR7z%2BSs9yvxefRz3%2Fh6p2VozI5K9oacs%2BBKHT1Pvztu5NamvdVfoDUOKB12n5V5mutb6k7gaTJaf5SZXE%2FYnqScxm75lqxDzVZrh9xh3YzSWb%2Bjs32qH44vuUVnVOCIk0zLN4GXF8mvFJ37UO&X-Amz-Signature=64dfbf85cee82159f533cc8f82073ee2cf3babf4c207163a2fe86410ef6f07b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
