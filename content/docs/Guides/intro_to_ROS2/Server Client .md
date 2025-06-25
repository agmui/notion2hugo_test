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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7O4SEOO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGrQ3Ni2HqQy%2FRJDASW59c2%2BhLOghUVt9%2BBsGfkihVMsAiANLOectinSHt9Y4PvENs2kRtGQYEb6kOx6npmFWqfxvSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMfQyziJsKZ4j6AkFyKtwDg3vwJNaeBSWj8x9knt6m%2BTlf7HuDKkUYkPBKdP2doEH1OnShm627t0%2F0kXDD4bfYm8gcQ2amxrhBwF%2BIKnk7V7yAmhdXjsFWq%2F37A7axztnJUz6rQjtqfUryRdEPsFFWBmspQn4%2BIGI9MtbTiPC2IvoA4zT%2BpKjSar8SoL6zEOay11KpOC50Qw%2BQkPf61EmopEAi3XP9OUCgdS7x52esbfLOLJZIe89GACu5NBkSUBt%2FIz8bP5Ae22as3lm1he4czAdk6%2Fcxpidiahkr9q%2F%2FuKVYPNouKZZiTArOBypHR18FdQB57sbP8r5zqsPYssvP6SncCHvsVGd8wh%2BNp53ZW4D5Zoc0B%2BzwSJEi9%2BX3l8AaZPwXaRiLHXlDiIUexuFmmYBYWxnb20NYA1%2FGvRIA4vRf%2F5tzDmlsxRYtAmPGhUhxlc6l9T5m%2F%2BuSV%2FADE%2Fz21Q%2BkxyLgUlwKj4Cutz8DrIS1KQ%2BmYLzNJI5oak2MliH6VFudb%2BOdR5SAhJBG2yvgA2Ptv%2Fp%2FVHXdgYgKFRWdnpb7GxiSt1nnv0XrYmJrDC2sFLEqn9YrXE7uPQjm8t0nDA8KChMfHO8sO42MTJ3sjsHlLP4Oxn11Q7eyW8KRGjWA9obaSecWsiNIKGAwzMLtwgY6pgHHQ3IEq%2F5rP0GxuWUqqvFpgAQXxTEK3EYm980kJ%2B9fHYgDqH1hSAMJfzfTbuT64vT3jvIvLL15CtxLZ9qRIq2u8MFG%2BHy0Uzz92yM91Hs3q7oqZAvYbkGT2vCvrRC6tb2MfM%2B%2FyVOV5bSHxYctI6f8qXe7EIN%2F70KLQw3HcPAjU4MeDAJB%2FESWywjf6OwxFT%2FfDxQPDOhBwuHJ1%2BUlQnPVnDgNZ2Cq&X-Amz-Signature=3be9845a4bb1d18697ba49b17144092dba4f90a36c1f92f17b9ace210f162503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7O4SEOO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGrQ3Ni2HqQy%2FRJDASW59c2%2BhLOghUVt9%2BBsGfkihVMsAiANLOectinSHt9Y4PvENs2kRtGQYEb6kOx6npmFWqfxvSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMfQyziJsKZ4j6AkFyKtwDg3vwJNaeBSWj8x9knt6m%2BTlf7HuDKkUYkPBKdP2doEH1OnShm627t0%2F0kXDD4bfYm8gcQ2amxrhBwF%2BIKnk7V7yAmhdXjsFWq%2F37A7axztnJUz6rQjtqfUryRdEPsFFWBmspQn4%2BIGI9MtbTiPC2IvoA4zT%2BpKjSar8SoL6zEOay11KpOC50Qw%2BQkPf61EmopEAi3XP9OUCgdS7x52esbfLOLJZIe89GACu5NBkSUBt%2FIz8bP5Ae22as3lm1he4czAdk6%2Fcxpidiahkr9q%2F%2FuKVYPNouKZZiTArOBypHR18FdQB57sbP8r5zqsPYssvP6SncCHvsVGd8wh%2BNp53ZW4D5Zoc0B%2BzwSJEi9%2BX3l8AaZPwXaRiLHXlDiIUexuFmmYBYWxnb20NYA1%2FGvRIA4vRf%2F5tzDmlsxRYtAmPGhUhxlc6l9T5m%2F%2BuSV%2FADE%2Fz21Q%2BkxyLgUlwKj4Cutz8DrIS1KQ%2BmYLzNJI5oak2MliH6VFudb%2BOdR5SAhJBG2yvgA2Ptv%2Fp%2FVHXdgYgKFRWdnpb7GxiSt1nnv0XrYmJrDC2sFLEqn9YrXE7uPQjm8t0nDA8KChMfHO8sO42MTJ3sjsHlLP4Oxn11Q7eyW8KRGjWA9obaSecWsiNIKGAwzMLtwgY6pgHHQ3IEq%2F5rP0GxuWUqqvFpgAQXxTEK3EYm980kJ%2B9fHYgDqH1hSAMJfzfTbuT64vT3jvIvLL15CtxLZ9qRIq2u8MFG%2BHy0Uzz92yM91Hs3q7oqZAvYbkGT2vCvrRC6tb2MfM%2B%2FyVOV5bSHxYctI6f8qXe7EIN%2F70KLQw3HcPAjU4MeDAJB%2FESWywjf6OwxFT%2FfDxQPDOhBwuHJ1%2BUlQnPVnDgNZ2Cq&X-Amz-Signature=2b9168a887c8782ed21208480ae7135d6c337d3317dbfcb300a0aef285ee5906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7O4SEOO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGrQ3Ni2HqQy%2FRJDASW59c2%2BhLOghUVt9%2BBsGfkihVMsAiANLOectinSHt9Y4PvENs2kRtGQYEb6kOx6npmFWqfxvSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMfQyziJsKZ4j6AkFyKtwDg3vwJNaeBSWj8x9knt6m%2BTlf7HuDKkUYkPBKdP2doEH1OnShm627t0%2F0kXDD4bfYm8gcQ2amxrhBwF%2BIKnk7V7yAmhdXjsFWq%2F37A7axztnJUz6rQjtqfUryRdEPsFFWBmspQn4%2BIGI9MtbTiPC2IvoA4zT%2BpKjSar8SoL6zEOay11KpOC50Qw%2BQkPf61EmopEAi3XP9OUCgdS7x52esbfLOLJZIe89GACu5NBkSUBt%2FIz8bP5Ae22as3lm1he4czAdk6%2Fcxpidiahkr9q%2F%2FuKVYPNouKZZiTArOBypHR18FdQB57sbP8r5zqsPYssvP6SncCHvsVGd8wh%2BNp53ZW4D5Zoc0B%2BzwSJEi9%2BX3l8AaZPwXaRiLHXlDiIUexuFmmYBYWxnb20NYA1%2FGvRIA4vRf%2F5tzDmlsxRYtAmPGhUhxlc6l9T5m%2F%2BuSV%2FADE%2Fz21Q%2BkxyLgUlwKj4Cutz8DrIS1KQ%2BmYLzNJI5oak2MliH6VFudb%2BOdR5SAhJBG2yvgA2Ptv%2Fp%2FVHXdgYgKFRWdnpb7GxiSt1nnv0XrYmJrDC2sFLEqn9YrXE7uPQjm8t0nDA8KChMfHO8sO42MTJ3sjsHlLP4Oxn11Q7eyW8KRGjWA9obaSecWsiNIKGAwzMLtwgY6pgHHQ3IEq%2F5rP0GxuWUqqvFpgAQXxTEK3EYm980kJ%2B9fHYgDqH1hSAMJfzfTbuT64vT3jvIvLL15CtxLZ9qRIq2u8MFG%2BHy0Uzz92yM91Hs3q7oqZAvYbkGT2vCvrRC6tb2MfM%2B%2FyVOV5bSHxYctI6f8qXe7EIN%2F70KLQw3HcPAjU4MeDAJB%2FESWywjf6OwxFT%2FfDxQPDOhBwuHJ1%2BUlQnPVnDgNZ2Cq&X-Amz-Signature=e25ac2a602353e5431afec7f900de593c2b84f82cb3abf5c12f68dced3f1c73b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7O4SEOO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGrQ3Ni2HqQy%2FRJDASW59c2%2BhLOghUVt9%2BBsGfkihVMsAiANLOectinSHt9Y4PvENs2kRtGQYEb6kOx6npmFWqfxvSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMfQyziJsKZ4j6AkFyKtwDg3vwJNaeBSWj8x9knt6m%2BTlf7HuDKkUYkPBKdP2doEH1OnShm627t0%2F0kXDD4bfYm8gcQ2amxrhBwF%2BIKnk7V7yAmhdXjsFWq%2F37A7axztnJUz6rQjtqfUryRdEPsFFWBmspQn4%2BIGI9MtbTiPC2IvoA4zT%2BpKjSar8SoL6zEOay11KpOC50Qw%2BQkPf61EmopEAi3XP9OUCgdS7x52esbfLOLJZIe89GACu5NBkSUBt%2FIz8bP5Ae22as3lm1he4czAdk6%2Fcxpidiahkr9q%2F%2FuKVYPNouKZZiTArOBypHR18FdQB57sbP8r5zqsPYssvP6SncCHvsVGd8wh%2BNp53ZW4D5Zoc0B%2BzwSJEi9%2BX3l8AaZPwXaRiLHXlDiIUexuFmmYBYWxnb20NYA1%2FGvRIA4vRf%2F5tzDmlsxRYtAmPGhUhxlc6l9T5m%2F%2BuSV%2FADE%2Fz21Q%2BkxyLgUlwKj4Cutz8DrIS1KQ%2BmYLzNJI5oak2MliH6VFudb%2BOdR5SAhJBG2yvgA2Ptv%2Fp%2FVHXdgYgKFRWdnpb7GxiSt1nnv0XrYmJrDC2sFLEqn9YrXE7uPQjm8t0nDA8KChMfHO8sO42MTJ3sjsHlLP4Oxn11Q7eyW8KRGjWA9obaSecWsiNIKGAwzMLtwgY6pgHHQ3IEq%2F5rP0GxuWUqqvFpgAQXxTEK3EYm980kJ%2B9fHYgDqH1hSAMJfzfTbuT64vT3jvIvLL15CtxLZ9qRIq2u8MFG%2BHy0Uzz92yM91Hs3q7oqZAvYbkGT2vCvrRC6tb2MfM%2B%2FyVOV5bSHxYctI6f8qXe7EIN%2F70KLQw3HcPAjU4MeDAJB%2FESWywjf6OwxFT%2FfDxQPDOhBwuHJ1%2BUlQnPVnDgNZ2Cq&X-Amz-Signature=d3e8b4a64bb8e784f61f865ba77096efc0a3d501a8cd19ef66338c9dda151336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7O4SEOO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGrQ3Ni2HqQy%2FRJDASW59c2%2BhLOghUVt9%2BBsGfkihVMsAiANLOectinSHt9Y4PvENs2kRtGQYEb6kOx6npmFWqfxvSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMfQyziJsKZ4j6AkFyKtwDg3vwJNaeBSWj8x9knt6m%2BTlf7HuDKkUYkPBKdP2doEH1OnShm627t0%2F0kXDD4bfYm8gcQ2amxrhBwF%2BIKnk7V7yAmhdXjsFWq%2F37A7axztnJUz6rQjtqfUryRdEPsFFWBmspQn4%2BIGI9MtbTiPC2IvoA4zT%2BpKjSar8SoL6zEOay11KpOC50Qw%2BQkPf61EmopEAi3XP9OUCgdS7x52esbfLOLJZIe89GACu5NBkSUBt%2FIz8bP5Ae22as3lm1he4czAdk6%2Fcxpidiahkr9q%2F%2FuKVYPNouKZZiTArOBypHR18FdQB57sbP8r5zqsPYssvP6SncCHvsVGd8wh%2BNp53ZW4D5Zoc0B%2BzwSJEi9%2BX3l8AaZPwXaRiLHXlDiIUexuFmmYBYWxnb20NYA1%2FGvRIA4vRf%2F5tzDmlsxRYtAmPGhUhxlc6l9T5m%2F%2BuSV%2FADE%2Fz21Q%2BkxyLgUlwKj4Cutz8DrIS1KQ%2BmYLzNJI5oak2MliH6VFudb%2BOdR5SAhJBG2yvgA2Ptv%2Fp%2FVHXdgYgKFRWdnpb7GxiSt1nnv0XrYmJrDC2sFLEqn9YrXE7uPQjm8t0nDA8KChMfHO8sO42MTJ3sjsHlLP4Oxn11Q7eyW8KRGjWA9obaSecWsiNIKGAwzMLtwgY6pgHHQ3IEq%2F5rP0GxuWUqqvFpgAQXxTEK3EYm980kJ%2B9fHYgDqH1hSAMJfzfTbuT64vT3jvIvLL15CtxLZ9qRIq2u8MFG%2BHy0Uzz92yM91Hs3q7oqZAvYbkGT2vCvrRC6tb2MfM%2B%2FyVOV5bSHxYctI6f8qXe7EIN%2F70KLQw3HcPAjU4MeDAJB%2FESWywjf6OwxFT%2FfDxQPDOhBwuHJ1%2BUlQnPVnDgNZ2Cq&X-Amz-Signature=fe149e04c6e38f8dcc1e5fd89b9ac55cf8ed26a7603466fbc25e329157cdb7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
