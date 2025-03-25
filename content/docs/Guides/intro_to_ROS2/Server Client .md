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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5FVBZK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzOjcxbHEvdSP0rUZsdhUQLvkGSMeWCxz3hc8JCm8MtAiAz2TkGumLgEEYXxo%2B5BfQqcVr3INNS5YAU8oWYXJ6VGCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMrD%2FWQNPidEtqUxBuKtwDFUE%2FOHnJMsJl1BghJZqFqPoZWSStbtm5BxnurWgoCvbIuKkdczpA1Kjw1c1q6ZYlg0zKNXUb8Jnbnn%2FvPxiQNgol%2B8JY2Ec7LmIfeRrIp0KTdsp7hYdIRmX1eyoxIuqruYARa0LdPpYhlUpFLrhZ4d3NYYP6ZuivACnw%2FMKhZw9rD0XueenMn1KC8wVcTPHrqpox%2B6j%2B%2F850snG6q98FxyYuwFxXVe8I%2B%2F49ckzIR2W50ysSjrte1CmeJQCz9iCl0R9GYM4TFnOmhNv0WiGb7VFtLfAvbhujxSM9erj%2B5Zg8yMTUD8o7WQNVAzHYViOW9bVg5Ts0%2BlpJRTTwgDipEny6JPb8hTyNuSKNz8XKwla2YBvKTM3gS5bHNq7cdJNusrBNJPyd0p%2FlMEAHkvRni22t3jxieUAFaSK4tvtThzPtJypJ5MFRf1v0L1GoS53hKjIvetcj07WWgm46GhFtn%2Be7DrCBXwesZ%2FnaG38MnyX6BgejCNjQj7CtOJqT6Jh%2B7jZnyEFlnZercAlM8kl7H%2B4JR%2BOxiOUlTxmvNLxNnO0JlAYxBYOnTceTvJspZniNWdAF3Gp%2Bm809IlcfaZ4pQh01S0rA%2BbBTpTKjF7ZYJ9DahVFK9RbFrnQcfmow4aaKvwY6pgH%2FpwSK9CT9iUtrGFHE9S8COGQPNbJk0TUUuCJRZKgtiPjHI5Ue6L17sHNHh6kZOpKhzokCGpmHN1y2zOox49gieu%2B9yai4p3%2FRTSDr%2FkhuNDXrjDyiM2APRsGH5TnVq%2Bea192FYt9ZMSHRDYyGafKECDea%2FPfsoNjAeUAewb8BHnyzY3J74RXOxP%2BRp87PHuFkbjmO3mchAreZfWVXmix%2BKM6XSeXr&X-Amz-Signature=da05ac59e96f35f5e598b4d56a98545fe41b8ba41327710f1a13222f7280bf8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5FVBZK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzOjcxbHEvdSP0rUZsdhUQLvkGSMeWCxz3hc8JCm8MtAiAz2TkGumLgEEYXxo%2B5BfQqcVr3INNS5YAU8oWYXJ6VGCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMrD%2FWQNPidEtqUxBuKtwDFUE%2FOHnJMsJl1BghJZqFqPoZWSStbtm5BxnurWgoCvbIuKkdczpA1Kjw1c1q6ZYlg0zKNXUb8Jnbnn%2FvPxiQNgol%2B8JY2Ec7LmIfeRrIp0KTdsp7hYdIRmX1eyoxIuqruYARa0LdPpYhlUpFLrhZ4d3NYYP6ZuivACnw%2FMKhZw9rD0XueenMn1KC8wVcTPHrqpox%2B6j%2B%2F850snG6q98FxyYuwFxXVe8I%2B%2F49ckzIR2W50ysSjrte1CmeJQCz9iCl0R9GYM4TFnOmhNv0WiGb7VFtLfAvbhujxSM9erj%2B5Zg8yMTUD8o7WQNVAzHYViOW9bVg5Ts0%2BlpJRTTwgDipEny6JPb8hTyNuSKNz8XKwla2YBvKTM3gS5bHNq7cdJNusrBNJPyd0p%2FlMEAHkvRni22t3jxieUAFaSK4tvtThzPtJypJ5MFRf1v0L1GoS53hKjIvetcj07WWgm46GhFtn%2Be7DrCBXwesZ%2FnaG38MnyX6BgejCNjQj7CtOJqT6Jh%2B7jZnyEFlnZercAlM8kl7H%2B4JR%2BOxiOUlTxmvNLxNnO0JlAYxBYOnTceTvJspZniNWdAF3Gp%2Bm809IlcfaZ4pQh01S0rA%2BbBTpTKjF7ZYJ9DahVFK9RbFrnQcfmow4aaKvwY6pgH%2FpwSK9CT9iUtrGFHE9S8COGQPNbJk0TUUuCJRZKgtiPjHI5Ue6L17sHNHh6kZOpKhzokCGpmHN1y2zOox49gieu%2B9yai4p3%2FRTSDr%2FkhuNDXrjDyiM2APRsGH5TnVq%2Bea192FYt9ZMSHRDYyGafKECDea%2FPfsoNjAeUAewb8BHnyzY3J74RXOxP%2BRp87PHuFkbjmO3mchAreZfWVXmix%2BKM6XSeXr&X-Amz-Signature=d5702bda95ed8b8fcf4a135b82df3a1145028ad64d76aaaa621f21fcb65df0bc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5FVBZK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzOjcxbHEvdSP0rUZsdhUQLvkGSMeWCxz3hc8JCm8MtAiAz2TkGumLgEEYXxo%2B5BfQqcVr3INNS5YAU8oWYXJ6VGCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMrD%2FWQNPidEtqUxBuKtwDFUE%2FOHnJMsJl1BghJZqFqPoZWSStbtm5BxnurWgoCvbIuKkdczpA1Kjw1c1q6ZYlg0zKNXUb8Jnbnn%2FvPxiQNgol%2B8JY2Ec7LmIfeRrIp0KTdsp7hYdIRmX1eyoxIuqruYARa0LdPpYhlUpFLrhZ4d3NYYP6ZuivACnw%2FMKhZw9rD0XueenMn1KC8wVcTPHrqpox%2B6j%2B%2F850snG6q98FxyYuwFxXVe8I%2B%2F49ckzIR2W50ysSjrte1CmeJQCz9iCl0R9GYM4TFnOmhNv0WiGb7VFtLfAvbhujxSM9erj%2B5Zg8yMTUD8o7WQNVAzHYViOW9bVg5Ts0%2BlpJRTTwgDipEny6JPb8hTyNuSKNz8XKwla2YBvKTM3gS5bHNq7cdJNusrBNJPyd0p%2FlMEAHkvRni22t3jxieUAFaSK4tvtThzPtJypJ5MFRf1v0L1GoS53hKjIvetcj07WWgm46GhFtn%2Be7DrCBXwesZ%2FnaG38MnyX6BgejCNjQj7CtOJqT6Jh%2B7jZnyEFlnZercAlM8kl7H%2B4JR%2BOxiOUlTxmvNLxNnO0JlAYxBYOnTceTvJspZniNWdAF3Gp%2Bm809IlcfaZ4pQh01S0rA%2BbBTpTKjF7ZYJ9DahVFK9RbFrnQcfmow4aaKvwY6pgH%2FpwSK9CT9iUtrGFHE9S8COGQPNbJk0TUUuCJRZKgtiPjHI5Ue6L17sHNHh6kZOpKhzokCGpmHN1y2zOox49gieu%2B9yai4p3%2FRTSDr%2FkhuNDXrjDyiM2APRsGH5TnVq%2Bea192FYt9ZMSHRDYyGafKECDea%2FPfsoNjAeUAewb8BHnyzY3J74RXOxP%2BRp87PHuFkbjmO3mchAreZfWVXmix%2BKM6XSeXr&X-Amz-Signature=033fa9e0022ed00e4b12841474929300218d9b1026607d74a4c8a41287a713b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5FVBZK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzOjcxbHEvdSP0rUZsdhUQLvkGSMeWCxz3hc8JCm8MtAiAz2TkGumLgEEYXxo%2B5BfQqcVr3INNS5YAU8oWYXJ6VGCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMrD%2FWQNPidEtqUxBuKtwDFUE%2FOHnJMsJl1BghJZqFqPoZWSStbtm5BxnurWgoCvbIuKkdczpA1Kjw1c1q6ZYlg0zKNXUb8Jnbnn%2FvPxiQNgol%2B8JY2Ec7LmIfeRrIp0KTdsp7hYdIRmX1eyoxIuqruYARa0LdPpYhlUpFLrhZ4d3NYYP6ZuivACnw%2FMKhZw9rD0XueenMn1KC8wVcTPHrqpox%2B6j%2B%2F850snG6q98FxyYuwFxXVe8I%2B%2F49ckzIR2W50ysSjrte1CmeJQCz9iCl0R9GYM4TFnOmhNv0WiGb7VFtLfAvbhujxSM9erj%2B5Zg8yMTUD8o7WQNVAzHYViOW9bVg5Ts0%2BlpJRTTwgDipEny6JPb8hTyNuSKNz8XKwla2YBvKTM3gS5bHNq7cdJNusrBNJPyd0p%2FlMEAHkvRni22t3jxieUAFaSK4tvtThzPtJypJ5MFRf1v0L1GoS53hKjIvetcj07WWgm46GhFtn%2Be7DrCBXwesZ%2FnaG38MnyX6BgejCNjQj7CtOJqT6Jh%2B7jZnyEFlnZercAlM8kl7H%2B4JR%2BOxiOUlTxmvNLxNnO0JlAYxBYOnTceTvJspZniNWdAF3Gp%2Bm809IlcfaZ4pQh01S0rA%2BbBTpTKjF7ZYJ9DahVFK9RbFrnQcfmow4aaKvwY6pgH%2FpwSK9CT9iUtrGFHE9S8COGQPNbJk0TUUuCJRZKgtiPjHI5Ue6L17sHNHh6kZOpKhzokCGpmHN1y2zOox49gieu%2B9yai4p3%2FRTSDr%2FkhuNDXrjDyiM2APRsGH5TnVq%2Bea192FYt9ZMSHRDYyGafKECDea%2FPfsoNjAeUAewb8BHnyzY3J74RXOxP%2BRp87PHuFkbjmO3mchAreZfWVXmix%2BKM6XSeXr&X-Amz-Signature=bbaadbb7ec610a8261b757fd95f0ceb13c1c4a2b8f0875f24658fe39ab896bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5FVBZK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzOjcxbHEvdSP0rUZsdhUQLvkGSMeWCxz3hc8JCm8MtAiAz2TkGumLgEEYXxo%2B5BfQqcVr3INNS5YAU8oWYXJ6VGCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMrD%2FWQNPidEtqUxBuKtwDFUE%2FOHnJMsJl1BghJZqFqPoZWSStbtm5BxnurWgoCvbIuKkdczpA1Kjw1c1q6ZYlg0zKNXUb8Jnbnn%2FvPxiQNgol%2B8JY2Ec7LmIfeRrIp0KTdsp7hYdIRmX1eyoxIuqruYARa0LdPpYhlUpFLrhZ4d3NYYP6ZuivACnw%2FMKhZw9rD0XueenMn1KC8wVcTPHrqpox%2B6j%2B%2F850snG6q98FxyYuwFxXVe8I%2B%2F49ckzIR2W50ysSjrte1CmeJQCz9iCl0R9GYM4TFnOmhNv0WiGb7VFtLfAvbhujxSM9erj%2B5Zg8yMTUD8o7WQNVAzHYViOW9bVg5Ts0%2BlpJRTTwgDipEny6JPb8hTyNuSKNz8XKwla2YBvKTM3gS5bHNq7cdJNusrBNJPyd0p%2FlMEAHkvRni22t3jxieUAFaSK4tvtThzPtJypJ5MFRf1v0L1GoS53hKjIvetcj07WWgm46GhFtn%2Be7DrCBXwesZ%2FnaG38MnyX6BgejCNjQj7CtOJqT6Jh%2B7jZnyEFlnZercAlM8kl7H%2B4JR%2BOxiOUlTxmvNLxNnO0JlAYxBYOnTceTvJspZniNWdAF3Gp%2Bm809IlcfaZ4pQh01S0rA%2BbBTpTKjF7ZYJ9DahVFK9RbFrnQcfmow4aaKvwY6pgH%2FpwSK9CT9iUtrGFHE9S8COGQPNbJk0TUUuCJRZKgtiPjHI5Ue6L17sHNHh6kZOpKhzokCGpmHN1y2zOox49gieu%2B9yai4p3%2FRTSDr%2FkhuNDXrjDyiM2APRsGH5TnVq%2Bea192FYt9ZMSHRDYyGafKECDea%2FPfsoNjAeUAewb8BHnyzY3J74RXOxP%2BRp87PHuFkbjmO3mchAreZfWVXmix%2BKM6XSeXr&X-Amz-Signature=5b2cb14d0183ae1c56aeae88aab0b1bcec6d8e81435e150e94b54c700ef7d25d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
