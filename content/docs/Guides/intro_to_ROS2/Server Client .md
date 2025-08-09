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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBK33ZN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCw%2B3dH%2BtfUu9cwko2RynqHOkB3o23Exh5YjrgzXFAodgIhAJ9kvO8Vzm4WbA9AtvLJ8WEqRecvXhxc951Ts0nA9XEyKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPzn3GW%2FLYpuqa1DEq3AO9myoNTXjzKFOhUy5HkqsUzRZd9O9RENmB1ou1H6zk62F%2BIcR9VzmUw%2FNJcyqTBb7MC0Gl33WMcERWro2cQKOG0oXX%2BfA03yE41tlwymzMeWoBbu9mWy77moX%2F8tYjbxVBv%2BcbO7ZDXpIJEEUnIA6hyclyYfEgEdVVx55kBVo7ifc6k0%2FAKj8MxLPONGwPncXZYXIwSLjFJEh7Fbec2WDcapMLX%2B1ZSiSnmw6OlXu2LZCXHhfcjg3O3cA0gytesIi6PtUhPaZHFBQTwaDOGoZiQLYzBwY6%2BJSeZ9bjFpbo0y7TKsVx5vZJULUKrALh1%2Bo3X5I60ZyNY8sb4AVEhA%2BO7SFdIjsSdt0fHnThJphX3LGuYmCxQkmUYZCi1tPBs6UzGaX5j0nd%2BVQyz3QcxfOLzm8ZwBx5gI0nB6yAp%2BV6Ao15uAOsmxZcyEMQa1ptPBQqHOOQaPvqzMTds2Gi2%2BPQ2uvkV68w%2BUxMVWzyQjjnM3hAPwj85VjFwxUnww4KCztxsDQx4fX7FU2gKHqaOpW3IaVAiEP5tTObbkK7v4siMeuI2v8L939dB7w9VUSkWfYxtyEcFw4eTI8qOyy8wJ0Ei%2B0NAV5lMajennEioblnMjOyO%2FgyZMsszycfcTCrxNvEBjqkAfJSVpTqHo6NlQX9l9MfvIJssaz0N7CpVv6nqteXYvLFKvlHBM5U2uzXZJkEhCkqLvhpzaE2%2BSQKK1VaXZvm%2FiCfou9Uz47wlDax9HCj3vecrb7%2FRWzMm8tqa9%2F4r0K%2FPKlfKhrViZiEjqprWtTUJ6JCRszrjmeTWVN38M89eF3bgq7MGx2RyKNfmgcdE5o8p8Urx7HJUALbkpQeOoPB%2Fk6Vi6M5&X-Amz-Signature=a8b7daf96fbf8b440713e3dadf7c46fad3a82f7de67a2868c9d28d34f9a78863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBK33ZN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCw%2B3dH%2BtfUu9cwko2RynqHOkB3o23Exh5YjrgzXFAodgIhAJ9kvO8Vzm4WbA9AtvLJ8WEqRecvXhxc951Ts0nA9XEyKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPzn3GW%2FLYpuqa1DEq3AO9myoNTXjzKFOhUy5HkqsUzRZd9O9RENmB1ou1H6zk62F%2BIcR9VzmUw%2FNJcyqTBb7MC0Gl33WMcERWro2cQKOG0oXX%2BfA03yE41tlwymzMeWoBbu9mWy77moX%2F8tYjbxVBv%2BcbO7ZDXpIJEEUnIA6hyclyYfEgEdVVx55kBVo7ifc6k0%2FAKj8MxLPONGwPncXZYXIwSLjFJEh7Fbec2WDcapMLX%2B1ZSiSnmw6OlXu2LZCXHhfcjg3O3cA0gytesIi6PtUhPaZHFBQTwaDOGoZiQLYzBwY6%2BJSeZ9bjFpbo0y7TKsVx5vZJULUKrALh1%2Bo3X5I60ZyNY8sb4AVEhA%2BO7SFdIjsSdt0fHnThJphX3LGuYmCxQkmUYZCi1tPBs6UzGaX5j0nd%2BVQyz3QcxfOLzm8ZwBx5gI0nB6yAp%2BV6Ao15uAOsmxZcyEMQa1ptPBQqHOOQaPvqzMTds2Gi2%2BPQ2uvkV68w%2BUxMVWzyQjjnM3hAPwj85VjFwxUnww4KCztxsDQx4fX7FU2gKHqaOpW3IaVAiEP5tTObbkK7v4siMeuI2v8L939dB7w9VUSkWfYxtyEcFw4eTI8qOyy8wJ0Ei%2B0NAV5lMajennEioblnMjOyO%2FgyZMsszycfcTCrxNvEBjqkAfJSVpTqHo6NlQX9l9MfvIJssaz0N7CpVv6nqteXYvLFKvlHBM5U2uzXZJkEhCkqLvhpzaE2%2BSQKK1VaXZvm%2FiCfou9Uz47wlDax9HCj3vecrb7%2FRWzMm8tqa9%2F4r0K%2FPKlfKhrViZiEjqprWtTUJ6JCRszrjmeTWVN38M89eF3bgq7MGx2RyKNfmgcdE5o8p8Urx7HJUALbkpQeOoPB%2Fk6Vi6M5&X-Amz-Signature=3d11f9d3c59005af746d2542ac4ab453879dedda68733d1621300a10f8253f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBK33ZN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCw%2B3dH%2BtfUu9cwko2RynqHOkB3o23Exh5YjrgzXFAodgIhAJ9kvO8Vzm4WbA9AtvLJ8WEqRecvXhxc951Ts0nA9XEyKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPzn3GW%2FLYpuqa1DEq3AO9myoNTXjzKFOhUy5HkqsUzRZd9O9RENmB1ou1H6zk62F%2BIcR9VzmUw%2FNJcyqTBb7MC0Gl33WMcERWro2cQKOG0oXX%2BfA03yE41tlwymzMeWoBbu9mWy77moX%2F8tYjbxVBv%2BcbO7ZDXpIJEEUnIA6hyclyYfEgEdVVx55kBVo7ifc6k0%2FAKj8MxLPONGwPncXZYXIwSLjFJEh7Fbec2WDcapMLX%2B1ZSiSnmw6OlXu2LZCXHhfcjg3O3cA0gytesIi6PtUhPaZHFBQTwaDOGoZiQLYzBwY6%2BJSeZ9bjFpbo0y7TKsVx5vZJULUKrALh1%2Bo3X5I60ZyNY8sb4AVEhA%2BO7SFdIjsSdt0fHnThJphX3LGuYmCxQkmUYZCi1tPBs6UzGaX5j0nd%2BVQyz3QcxfOLzm8ZwBx5gI0nB6yAp%2BV6Ao15uAOsmxZcyEMQa1ptPBQqHOOQaPvqzMTds2Gi2%2BPQ2uvkV68w%2BUxMVWzyQjjnM3hAPwj85VjFwxUnww4KCztxsDQx4fX7FU2gKHqaOpW3IaVAiEP5tTObbkK7v4siMeuI2v8L939dB7w9VUSkWfYxtyEcFw4eTI8qOyy8wJ0Ei%2B0NAV5lMajennEioblnMjOyO%2FgyZMsszycfcTCrxNvEBjqkAfJSVpTqHo6NlQX9l9MfvIJssaz0N7CpVv6nqteXYvLFKvlHBM5U2uzXZJkEhCkqLvhpzaE2%2BSQKK1VaXZvm%2FiCfou9Uz47wlDax9HCj3vecrb7%2FRWzMm8tqa9%2F4r0K%2FPKlfKhrViZiEjqprWtTUJ6JCRszrjmeTWVN38M89eF3bgq7MGx2RyKNfmgcdE5o8p8Urx7HJUALbkpQeOoPB%2Fk6Vi6M5&X-Amz-Signature=0950d17fb46da026d9fcad491b44c8620adc7e35f3ed9e551bdfe5b00ad2d63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBK33ZN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCw%2B3dH%2BtfUu9cwko2RynqHOkB3o23Exh5YjrgzXFAodgIhAJ9kvO8Vzm4WbA9AtvLJ8WEqRecvXhxc951Ts0nA9XEyKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPzn3GW%2FLYpuqa1DEq3AO9myoNTXjzKFOhUy5HkqsUzRZd9O9RENmB1ou1H6zk62F%2BIcR9VzmUw%2FNJcyqTBb7MC0Gl33WMcERWro2cQKOG0oXX%2BfA03yE41tlwymzMeWoBbu9mWy77moX%2F8tYjbxVBv%2BcbO7ZDXpIJEEUnIA6hyclyYfEgEdVVx55kBVo7ifc6k0%2FAKj8MxLPONGwPncXZYXIwSLjFJEh7Fbec2WDcapMLX%2B1ZSiSnmw6OlXu2LZCXHhfcjg3O3cA0gytesIi6PtUhPaZHFBQTwaDOGoZiQLYzBwY6%2BJSeZ9bjFpbo0y7TKsVx5vZJULUKrALh1%2Bo3X5I60ZyNY8sb4AVEhA%2BO7SFdIjsSdt0fHnThJphX3LGuYmCxQkmUYZCi1tPBs6UzGaX5j0nd%2BVQyz3QcxfOLzm8ZwBx5gI0nB6yAp%2BV6Ao15uAOsmxZcyEMQa1ptPBQqHOOQaPvqzMTds2Gi2%2BPQ2uvkV68w%2BUxMVWzyQjjnM3hAPwj85VjFwxUnww4KCztxsDQx4fX7FU2gKHqaOpW3IaVAiEP5tTObbkK7v4siMeuI2v8L939dB7w9VUSkWfYxtyEcFw4eTI8qOyy8wJ0Ei%2B0NAV5lMajennEioblnMjOyO%2FgyZMsszycfcTCrxNvEBjqkAfJSVpTqHo6NlQX9l9MfvIJssaz0N7CpVv6nqteXYvLFKvlHBM5U2uzXZJkEhCkqLvhpzaE2%2BSQKK1VaXZvm%2FiCfou9Uz47wlDax9HCj3vecrb7%2FRWzMm8tqa9%2F4r0K%2FPKlfKhrViZiEjqprWtTUJ6JCRszrjmeTWVN38M89eF3bgq7MGx2RyKNfmgcdE5o8p8Urx7HJUALbkpQeOoPB%2Fk6Vi6M5&X-Amz-Signature=fcc400f36c3a23edcc3638b2490855aac667f16509785a8d5b84dff58219a416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBK33ZN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCw%2B3dH%2BtfUu9cwko2RynqHOkB3o23Exh5YjrgzXFAodgIhAJ9kvO8Vzm4WbA9AtvLJ8WEqRecvXhxc951Ts0nA9XEyKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPzn3GW%2FLYpuqa1DEq3AO9myoNTXjzKFOhUy5HkqsUzRZd9O9RENmB1ou1H6zk62F%2BIcR9VzmUw%2FNJcyqTBb7MC0Gl33WMcERWro2cQKOG0oXX%2BfA03yE41tlwymzMeWoBbu9mWy77moX%2F8tYjbxVBv%2BcbO7ZDXpIJEEUnIA6hyclyYfEgEdVVx55kBVo7ifc6k0%2FAKj8MxLPONGwPncXZYXIwSLjFJEh7Fbec2WDcapMLX%2B1ZSiSnmw6OlXu2LZCXHhfcjg3O3cA0gytesIi6PtUhPaZHFBQTwaDOGoZiQLYzBwY6%2BJSeZ9bjFpbo0y7TKsVx5vZJULUKrALh1%2Bo3X5I60ZyNY8sb4AVEhA%2BO7SFdIjsSdt0fHnThJphX3LGuYmCxQkmUYZCi1tPBs6UzGaX5j0nd%2BVQyz3QcxfOLzm8ZwBx5gI0nB6yAp%2BV6Ao15uAOsmxZcyEMQa1ptPBQqHOOQaPvqzMTds2Gi2%2BPQ2uvkV68w%2BUxMVWzyQjjnM3hAPwj85VjFwxUnww4KCztxsDQx4fX7FU2gKHqaOpW3IaVAiEP5tTObbkK7v4siMeuI2v8L939dB7w9VUSkWfYxtyEcFw4eTI8qOyy8wJ0Ei%2B0NAV5lMajennEioblnMjOyO%2FgyZMsszycfcTCrxNvEBjqkAfJSVpTqHo6NlQX9l9MfvIJssaz0N7CpVv6nqteXYvLFKvlHBM5U2uzXZJkEhCkqLvhpzaE2%2BSQKK1VaXZvm%2FiCfou9Uz47wlDax9HCj3vecrb7%2FRWzMm8tqa9%2F4r0K%2FPKlfKhrViZiEjqprWtTUJ6JCRszrjmeTWVN38M89eF3bgq7MGx2RyKNfmgcdE5o8p8Urx7HJUALbkpQeOoPB%2Fk6Vi6M5&X-Amz-Signature=32742d06a03ac7ef014a8d4379c45b69f5beaf28c989c61740de6daf12728def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
