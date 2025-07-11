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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KPMKNJX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmrN3H2ak03hPJ%2BvpLilc%2FBY9UjBiSVL49mmOf5IfTjQIhAKVglHGqwXtQdz5MlEAmaspeK3QPZHZNdN9gj7VMnskJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5iXS5Pic5OJCc5j0q3APoJXd7zWS6XZUNyELnrvpApWBtprNWyEfFrIPx4BeAeiKvAA2dTWSYjvBgC7JjzOR%2BVJDB54iV7%2FxADKN1W%2FfFWb4anpq8qYzJJXM1dpKlBfdg1K%2FPQ7ht3p75UpCJuClCpITYeAy5jV2yl0GDZcKfvyP2IyoqiudJS7QVVobx8qznMoG8tRqOsE689bSJi6%2FXRliFY6PhH8aVuzUc9allXzoF5amzQ2kAUhQaZepzjfK67AQFjCz72UAAqlxAOP8k3VCIjSKHNwYoMKCMAPhJUo0i%2BFYZa7SSe4EafWKb%2F5j%2FEoTqPAJlgVGJgedYb7Gbt3vOAs3mCZOWeSoaQEychwL7MS4wzJ22FF26%2Bu5GQltTUfHMKjS3SgsWgp7t2rn77jDrrmfKEOR582ufEvzn65WH%2FrLhxEX%2FosQDrAiQTRDF5k0hrYxxqpuZ0EHXeDzU%2F2P%2FrKi0Aqb%2BYMgNVO7wrKKUF84rZOt8uhaGbYfYoMxGiP%2BvRTo3q75VRHS32Yim8JrZEEzwVyilSC72Tr4gzdwWZHLwIaRfCs26E4PKscFha%2B8i1ZKrX0F%2FirJnt8%2Fgyf%2BCiG2j%2F0r9QH6pV5BClwQecwF0j206mMnZYxOzIQB9Dix2PIYbDzdZ%2FDDcqcXDBjqkAe82H2tCLXWfmGL%2BAsqGNv1vsZqzDUn3KY4XmmiIb%2F3xVB3PdVkT%2F%2F8i82RxtN5Sf07nZvRa%2BFTKZuIw9mXr1Slo7Us5aNjL9dcsvBKxUS6O9QiUemu47IgnWqY9Y26zSqpIzJUiNIeUsNP0645vuZvHpbkx4a9lbWAIP0SmW1pPMYlhS5sgKyGm7Nf9l1wpREjt%2FEtsV9fZ9wULP2OnB3mdgtvV&X-Amz-Signature=e3563f2be10a39b981f844703287d29735807ca0876d16ee1681d42dc0dd70bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KPMKNJX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmrN3H2ak03hPJ%2BvpLilc%2FBY9UjBiSVL49mmOf5IfTjQIhAKVglHGqwXtQdz5MlEAmaspeK3QPZHZNdN9gj7VMnskJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5iXS5Pic5OJCc5j0q3APoJXd7zWS6XZUNyELnrvpApWBtprNWyEfFrIPx4BeAeiKvAA2dTWSYjvBgC7JjzOR%2BVJDB54iV7%2FxADKN1W%2FfFWb4anpq8qYzJJXM1dpKlBfdg1K%2FPQ7ht3p75UpCJuClCpITYeAy5jV2yl0GDZcKfvyP2IyoqiudJS7QVVobx8qznMoG8tRqOsE689bSJi6%2FXRliFY6PhH8aVuzUc9allXzoF5amzQ2kAUhQaZepzjfK67AQFjCz72UAAqlxAOP8k3VCIjSKHNwYoMKCMAPhJUo0i%2BFYZa7SSe4EafWKb%2F5j%2FEoTqPAJlgVGJgedYb7Gbt3vOAs3mCZOWeSoaQEychwL7MS4wzJ22FF26%2Bu5GQltTUfHMKjS3SgsWgp7t2rn77jDrrmfKEOR582ufEvzn65WH%2FrLhxEX%2FosQDrAiQTRDF5k0hrYxxqpuZ0EHXeDzU%2F2P%2FrKi0Aqb%2BYMgNVO7wrKKUF84rZOt8uhaGbYfYoMxGiP%2BvRTo3q75VRHS32Yim8JrZEEzwVyilSC72Tr4gzdwWZHLwIaRfCs26E4PKscFha%2B8i1ZKrX0F%2FirJnt8%2Fgyf%2BCiG2j%2F0r9QH6pV5BClwQecwF0j206mMnZYxOzIQB9Dix2PIYbDzdZ%2FDDcqcXDBjqkAe82H2tCLXWfmGL%2BAsqGNv1vsZqzDUn3KY4XmmiIb%2F3xVB3PdVkT%2F%2F8i82RxtN5Sf07nZvRa%2BFTKZuIw9mXr1Slo7Us5aNjL9dcsvBKxUS6O9QiUemu47IgnWqY9Y26zSqpIzJUiNIeUsNP0645vuZvHpbkx4a9lbWAIP0SmW1pPMYlhS5sgKyGm7Nf9l1wpREjt%2FEtsV9fZ9wULP2OnB3mdgtvV&X-Amz-Signature=d5497636c55acdcd0a12ae3e9e74815b67857ddc1891606824dbcca3146e1e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KPMKNJX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmrN3H2ak03hPJ%2BvpLilc%2FBY9UjBiSVL49mmOf5IfTjQIhAKVglHGqwXtQdz5MlEAmaspeK3QPZHZNdN9gj7VMnskJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5iXS5Pic5OJCc5j0q3APoJXd7zWS6XZUNyELnrvpApWBtprNWyEfFrIPx4BeAeiKvAA2dTWSYjvBgC7JjzOR%2BVJDB54iV7%2FxADKN1W%2FfFWb4anpq8qYzJJXM1dpKlBfdg1K%2FPQ7ht3p75UpCJuClCpITYeAy5jV2yl0GDZcKfvyP2IyoqiudJS7QVVobx8qznMoG8tRqOsE689bSJi6%2FXRliFY6PhH8aVuzUc9allXzoF5amzQ2kAUhQaZepzjfK67AQFjCz72UAAqlxAOP8k3VCIjSKHNwYoMKCMAPhJUo0i%2BFYZa7SSe4EafWKb%2F5j%2FEoTqPAJlgVGJgedYb7Gbt3vOAs3mCZOWeSoaQEychwL7MS4wzJ22FF26%2Bu5GQltTUfHMKjS3SgsWgp7t2rn77jDrrmfKEOR582ufEvzn65WH%2FrLhxEX%2FosQDrAiQTRDF5k0hrYxxqpuZ0EHXeDzU%2F2P%2FrKi0Aqb%2BYMgNVO7wrKKUF84rZOt8uhaGbYfYoMxGiP%2BvRTo3q75VRHS32Yim8JrZEEzwVyilSC72Tr4gzdwWZHLwIaRfCs26E4PKscFha%2B8i1ZKrX0F%2FirJnt8%2Fgyf%2BCiG2j%2F0r9QH6pV5BClwQecwF0j206mMnZYxOzIQB9Dix2PIYbDzdZ%2FDDcqcXDBjqkAe82H2tCLXWfmGL%2BAsqGNv1vsZqzDUn3KY4XmmiIb%2F3xVB3PdVkT%2F%2F8i82RxtN5Sf07nZvRa%2BFTKZuIw9mXr1Slo7Us5aNjL9dcsvBKxUS6O9QiUemu47IgnWqY9Y26zSqpIzJUiNIeUsNP0645vuZvHpbkx4a9lbWAIP0SmW1pPMYlhS5sgKyGm7Nf9l1wpREjt%2FEtsV9fZ9wULP2OnB3mdgtvV&X-Amz-Signature=48978485f87ba4d45f57f289c5079401dc8723734727a5dac721ca0bb398cf69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KPMKNJX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmrN3H2ak03hPJ%2BvpLilc%2FBY9UjBiSVL49mmOf5IfTjQIhAKVglHGqwXtQdz5MlEAmaspeK3QPZHZNdN9gj7VMnskJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5iXS5Pic5OJCc5j0q3APoJXd7zWS6XZUNyELnrvpApWBtprNWyEfFrIPx4BeAeiKvAA2dTWSYjvBgC7JjzOR%2BVJDB54iV7%2FxADKN1W%2FfFWb4anpq8qYzJJXM1dpKlBfdg1K%2FPQ7ht3p75UpCJuClCpITYeAy5jV2yl0GDZcKfvyP2IyoqiudJS7QVVobx8qznMoG8tRqOsE689bSJi6%2FXRliFY6PhH8aVuzUc9allXzoF5amzQ2kAUhQaZepzjfK67AQFjCz72UAAqlxAOP8k3VCIjSKHNwYoMKCMAPhJUo0i%2BFYZa7SSe4EafWKb%2F5j%2FEoTqPAJlgVGJgedYb7Gbt3vOAs3mCZOWeSoaQEychwL7MS4wzJ22FF26%2Bu5GQltTUfHMKjS3SgsWgp7t2rn77jDrrmfKEOR582ufEvzn65WH%2FrLhxEX%2FosQDrAiQTRDF5k0hrYxxqpuZ0EHXeDzU%2F2P%2FrKi0Aqb%2BYMgNVO7wrKKUF84rZOt8uhaGbYfYoMxGiP%2BvRTo3q75VRHS32Yim8JrZEEzwVyilSC72Tr4gzdwWZHLwIaRfCs26E4PKscFha%2B8i1ZKrX0F%2FirJnt8%2Fgyf%2BCiG2j%2F0r9QH6pV5BClwQecwF0j206mMnZYxOzIQB9Dix2PIYbDzdZ%2FDDcqcXDBjqkAe82H2tCLXWfmGL%2BAsqGNv1vsZqzDUn3KY4XmmiIb%2F3xVB3PdVkT%2F%2F8i82RxtN5Sf07nZvRa%2BFTKZuIw9mXr1Slo7Us5aNjL9dcsvBKxUS6O9QiUemu47IgnWqY9Y26zSqpIzJUiNIeUsNP0645vuZvHpbkx4a9lbWAIP0SmW1pPMYlhS5sgKyGm7Nf9l1wpREjt%2FEtsV9fZ9wULP2OnB3mdgtvV&X-Amz-Signature=69e1c9eae37f721d758a88ee2701a8c515276c9e08e387b49b072f0c3dd160e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KPMKNJX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmrN3H2ak03hPJ%2BvpLilc%2FBY9UjBiSVL49mmOf5IfTjQIhAKVglHGqwXtQdz5MlEAmaspeK3QPZHZNdN9gj7VMnskJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5iXS5Pic5OJCc5j0q3APoJXd7zWS6XZUNyELnrvpApWBtprNWyEfFrIPx4BeAeiKvAA2dTWSYjvBgC7JjzOR%2BVJDB54iV7%2FxADKN1W%2FfFWb4anpq8qYzJJXM1dpKlBfdg1K%2FPQ7ht3p75UpCJuClCpITYeAy5jV2yl0GDZcKfvyP2IyoqiudJS7QVVobx8qznMoG8tRqOsE689bSJi6%2FXRliFY6PhH8aVuzUc9allXzoF5amzQ2kAUhQaZepzjfK67AQFjCz72UAAqlxAOP8k3VCIjSKHNwYoMKCMAPhJUo0i%2BFYZa7SSe4EafWKb%2F5j%2FEoTqPAJlgVGJgedYb7Gbt3vOAs3mCZOWeSoaQEychwL7MS4wzJ22FF26%2Bu5GQltTUfHMKjS3SgsWgp7t2rn77jDrrmfKEOR582ufEvzn65WH%2FrLhxEX%2FosQDrAiQTRDF5k0hrYxxqpuZ0EHXeDzU%2F2P%2FrKi0Aqb%2BYMgNVO7wrKKUF84rZOt8uhaGbYfYoMxGiP%2BvRTo3q75VRHS32Yim8JrZEEzwVyilSC72Tr4gzdwWZHLwIaRfCs26E4PKscFha%2B8i1ZKrX0F%2FirJnt8%2Fgyf%2BCiG2j%2F0r9QH6pV5BClwQecwF0j206mMnZYxOzIQB9Dix2PIYbDzdZ%2FDDcqcXDBjqkAe82H2tCLXWfmGL%2BAsqGNv1vsZqzDUn3KY4XmmiIb%2F3xVB3PdVkT%2F%2F8i82RxtN5Sf07nZvRa%2BFTKZuIw9mXr1Slo7Us5aNjL9dcsvBKxUS6O9QiUemu47IgnWqY9Y26zSqpIzJUiNIeUsNP0645vuZvHpbkx4a9lbWAIP0SmW1pPMYlhS5sgKyGm7Nf9l1wpREjt%2FEtsV9fZ9wULP2OnB3mdgtvV&X-Amz-Signature=fc7f6ce317eb65bd5a9939ebd2ef72b69127c607126a9d2213e58d21e5bae6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
