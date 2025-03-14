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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPW46AU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChB19KAeQtFK4BDbOdgpC5zuB0XMscXHzbeOW5WObttgIgKf3rRbBcqeIg6hTy4jXadFfGmhHJ1YpMDMm4Y9ZxiHEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdnI4whl8npxX1UaSrcA3vpqCR4NAc1YElVyKGGEfZXVpyF%2FqUPqcstaB90uXTcKLGlBQQqvKyVje7z5l9DQfsDQMO%2FoUwaibalD%2BNwuGIZtbycysXklkqEu7dQ2%2FNh4ImJ3sa%2Br2LPYN9NmsW6YMZv88d%2BdDKKa32uM7uduRdRNmXpeZU2fpmNvdk48hiTI8fPC%2FzyzgiXh7nS9%2Bk%2FsTKhFON0mQTNBlBmf1Di%2BcPecG12JPIAhyDQaz5F%2FG5%2F6QuS2KIzq%2Fjg9rgZUnMhWMFkn4J%2Fg%2FdZ3h%2FlMzWjnddAC1Je0Js5Dhomcnv2UwxrTgudqwlr50B5PdC2ehGjh4AcQYVypfFyV8uuc1sbTasQXbH3sCUZy3FZz%2B%2BWaxslaYIH853KZPntxVdsKqapc%2FOOVYT6%2FPhS69igrSnxMzRGy9xdXG%2FASaiym6W%2FRUwD9vPrbvVwvSxhGGW9RfTkqAQaqftygGys1xTx%2B3vX7ZfwkRd05odEjxghwL1JwZrf6G1TCh1nILtoPWSAnQ9fwy0u7LgNctMCO7o2uK%2Bam2myAp1pC2uG4Gj5k5zcuffleN%2Fn3ENIfRRa1H6FYqrOIF%2B%2FJi0KMzNkssOfpo5Lwdu9pfFm6pj4118bcCjFa%2B22%2FRy05ED3jxwc9LngMM650L4GOqUBVrCeiZBn0iySrUjpo83eUlbw7Vr9EUz4hP%2B9hqZaYgT4j96KFPC8TiUZ2taC7zI78gPZgBFY49OYcM4QaSihMBX9Lu%2B5V%2F9iNcuXJdhbUMXQH4VB%2BABO7AARLsCdyhWzXzph7VT5NQvJYSafD01Xfg%2BMo%2BWFro2LvM3PHYY%2FNAK%2B92359MDYRuRsW2%2BaF8%2F8jrIoE6eRAZ6V6Tq069FcArIsWGH5&X-Amz-Signature=26f29812c237729ea10088a35c6c952b6666da2acccba142988ca943d47c33b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPW46AU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChB19KAeQtFK4BDbOdgpC5zuB0XMscXHzbeOW5WObttgIgKf3rRbBcqeIg6hTy4jXadFfGmhHJ1YpMDMm4Y9ZxiHEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdnI4whl8npxX1UaSrcA3vpqCR4NAc1YElVyKGGEfZXVpyF%2FqUPqcstaB90uXTcKLGlBQQqvKyVje7z5l9DQfsDQMO%2FoUwaibalD%2BNwuGIZtbycysXklkqEu7dQ2%2FNh4ImJ3sa%2Br2LPYN9NmsW6YMZv88d%2BdDKKa32uM7uduRdRNmXpeZU2fpmNvdk48hiTI8fPC%2FzyzgiXh7nS9%2Bk%2FsTKhFON0mQTNBlBmf1Di%2BcPecG12JPIAhyDQaz5F%2FG5%2F6QuS2KIzq%2Fjg9rgZUnMhWMFkn4J%2Fg%2FdZ3h%2FlMzWjnddAC1Je0Js5Dhomcnv2UwxrTgudqwlr50B5PdC2ehGjh4AcQYVypfFyV8uuc1sbTasQXbH3sCUZy3FZz%2B%2BWaxslaYIH853KZPntxVdsKqapc%2FOOVYT6%2FPhS69igrSnxMzRGy9xdXG%2FASaiym6W%2FRUwD9vPrbvVwvSxhGGW9RfTkqAQaqftygGys1xTx%2B3vX7ZfwkRd05odEjxghwL1JwZrf6G1TCh1nILtoPWSAnQ9fwy0u7LgNctMCO7o2uK%2Bam2myAp1pC2uG4Gj5k5zcuffleN%2Fn3ENIfRRa1H6FYqrOIF%2B%2FJi0KMzNkssOfpo5Lwdu9pfFm6pj4118bcCjFa%2B22%2FRy05ED3jxwc9LngMM650L4GOqUBVrCeiZBn0iySrUjpo83eUlbw7Vr9EUz4hP%2B9hqZaYgT4j96KFPC8TiUZ2taC7zI78gPZgBFY49OYcM4QaSihMBX9Lu%2B5V%2F9iNcuXJdhbUMXQH4VB%2BABO7AARLsCdyhWzXzph7VT5NQvJYSafD01Xfg%2BMo%2BWFro2LvM3PHYY%2FNAK%2B92359MDYRuRsW2%2BaF8%2F8jrIoE6eRAZ6V6Tq069FcArIsWGH5&X-Amz-Signature=641a150a532a3c3829cff92f394a5d18fc26cebdb98630ac20efcd5bc0b97fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPW46AU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChB19KAeQtFK4BDbOdgpC5zuB0XMscXHzbeOW5WObttgIgKf3rRbBcqeIg6hTy4jXadFfGmhHJ1YpMDMm4Y9ZxiHEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdnI4whl8npxX1UaSrcA3vpqCR4NAc1YElVyKGGEfZXVpyF%2FqUPqcstaB90uXTcKLGlBQQqvKyVje7z5l9DQfsDQMO%2FoUwaibalD%2BNwuGIZtbycysXklkqEu7dQ2%2FNh4ImJ3sa%2Br2LPYN9NmsW6YMZv88d%2BdDKKa32uM7uduRdRNmXpeZU2fpmNvdk48hiTI8fPC%2FzyzgiXh7nS9%2Bk%2FsTKhFON0mQTNBlBmf1Di%2BcPecG12JPIAhyDQaz5F%2FG5%2F6QuS2KIzq%2Fjg9rgZUnMhWMFkn4J%2Fg%2FdZ3h%2FlMzWjnddAC1Je0Js5Dhomcnv2UwxrTgudqwlr50B5PdC2ehGjh4AcQYVypfFyV8uuc1sbTasQXbH3sCUZy3FZz%2B%2BWaxslaYIH853KZPntxVdsKqapc%2FOOVYT6%2FPhS69igrSnxMzRGy9xdXG%2FASaiym6W%2FRUwD9vPrbvVwvSxhGGW9RfTkqAQaqftygGys1xTx%2B3vX7ZfwkRd05odEjxghwL1JwZrf6G1TCh1nILtoPWSAnQ9fwy0u7LgNctMCO7o2uK%2Bam2myAp1pC2uG4Gj5k5zcuffleN%2Fn3ENIfRRa1H6FYqrOIF%2B%2FJi0KMzNkssOfpo5Lwdu9pfFm6pj4118bcCjFa%2B22%2FRy05ED3jxwc9LngMM650L4GOqUBVrCeiZBn0iySrUjpo83eUlbw7Vr9EUz4hP%2B9hqZaYgT4j96KFPC8TiUZ2taC7zI78gPZgBFY49OYcM4QaSihMBX9Lu%2B5V%2F9iNcuXJdhbUMXQH4VB%2BABO7AARLsCdyhWzXzph7VT5NQvJYSafD01Xfg%2BMo%2BWFro2LvM3PHYY%2FNAK%2B92359MDYRuRsW2%2BaF8%2F8jrIoE6eRAZ6V6Tq069FcArIsWGH5&X-Amz-Signature=bea606d2429bbca9518b89a44843d3fe0506d7706c4f5a36df26e7e3d4ba007d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPW46AU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChB19KAeQtFK4BDbOdgpC5zuB0XMscXHzbeOW5WObttgIgKf3rRbBcqeIg6hTy4jXadFfGmhHJ1YpMDMm4Y9ZxiHEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdnI4whl8npxX1UaSrcA3vpqCR4NAc1YElVyKGGEfZXVpyF%2FqUPqcstaB90uXTcKLGlBQQqvKyVje7z5l9DQfsDQMO%2FoUwaibalD%2BNwuGIZtbycysXklkqEu7dQ2%2FNh4ImJ3sa%2Br2LPYN9NmsW6YMZv88d%2BdDKKa32uM7uduRdRNmXpeZU2fpmNvdk48hiTI8fPC%2FzyzgiXh7nS9%2Bk%2FsTKhFON0mQTNBlBmf1Di%2BcPecG12JPIAhyDQaz5F%2FG5%2F6QuS2KIzq%2Fjg9rgZUnMhWMFkn4J%2Fg%2FdZ3h%2FlMzWjnddAC1Je0Js5Dhomcnv2UwxrTgudqwlr50B5PdC2ehGjh4AcQYVypfFyV8uuc1sbTasQXbH3sCUZy3FZz%2B%2BWaxslaYIH853KZPntxVdsKqapc%2FOOVYT6%2FPhS69igrSnxMzRGy9xdXG%2FASaiym6W%2FRUwD9vPrbvVwvSxhGGW9RfTkqAQaqftygGys1xTx%2B3vX7ZfwkRd05odEjxghwL1JwZrf6G1TCh1nILtoPWSAnQ9fwy0u7LgNctMCO7o2uK%2Bam2myAp1pC2uG4Gj5k5zcuffleN%2Fn3ENIfRRa1H6FYqrOIF%2B%2FJi0KMzNkssOfpo5Lwdu9pfFm6pj4118bcCjFa%2B22%2FRy05ED3jxwc9LngMM650L4GOqUBVrCeiZBn0iySrUjpo83eUlbw7Vr9EUz4hP%2B9hqZaYgT4j96KFPC8TiUZ2taC7zI78gPZgBFY49OYcM4QaSihMBX9Lu%2B5V%2F9iNcuXJdhbUMXQH4VB%2BABO7AARLsCdyhWzXzph7VT5NQvJYSafD01Xfg%2BMo%2BWFro2LvM3PHYY%2FNAK%2B92359MDYRuRsW2%2BaF8%2F8jrIoE6eRAZ6V6Tq069FcArIsWGH5&X-Amz-Signature=e89e5b112792a393ba369250bb53f79c6d56b8af19fe743c415d9c08f081fc8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPW46AU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChB19KAeQtFK4BDbOdgpC5zuB0XMscXHzbeOW5WObttgIgKf3rRbBcqeIg6hTy4jXadFfGmhHJ1YpMDMm4Y9ZxiHEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdnI4whl8npxX1UaSrcA3vpqCR4NAc1YElVyKGGEfZXVpyF%2FqUPqcstaB90uXTcKLGlBQQqvKyVje7z5l9DQfsDQMO%2FoUwaibalD%2BNwuGIZtbycysXklkqEu7dQ2%2FNh4ImJ3sa%2Br2LPYN9NmsW6YMZv88d%2BdDKKa32uM7uduRdRNmXpeZU2fpmNvdk48hiTI8fPC%2FzyzgiXh7nS9%2Bk%2FsTKhFON0mQTNBlBmf1Di%2BcPecG12JPIAhyDQaz5F%2FG5%2F6QuS2KIzq%2Fjg9rgZUnMhWMFkn4J%2Fg%2FdZ3h%2FlMzWjnddAC1Je0Js5Dhomcnv2UwxrTgudqwlr50B5PdC2ehGjh4AcQYVypfFyV8uuc1sbTasQXbH3sCUZy3FZz%2B%2BWaxslaYIH853KZPntxVdsKqapc%2FOOVYT6%2FPhS69igrSnxMzRGy9xdXG%2FASaiym6W%2FRUwD9vPrbvVwvSxhGGW9RfTkqAQaqftygGys1xTx%2B3vX7ZfwkRd05odEjxghwL1JwZrf6G1TCh1nILtoPWSAnQ9fwy0u7LgNctMCO7o2uK%2Bam2myAp1pC2uG4Gj5k5zcuffleN%2Fn3ENIfRRa1H6FYqrOIF%2B%2FJi0KMzNkssOfpo5Lwdu9pfFm6pj4118bcCjFa%2B22%2FRy05ED3jxwc9LngMM650L4GOqUBVrCeiZBn0iySrUjpo83eUlbw7Vr9EUz4hP%2B9hqZaYgT4j96KFPC8TiUZ2taC7zI78gPZgBFY49OYcM4QaSihMBX9Lu%2B5V%2F9iNcuXJdhbUMXQH4VB%2BABO7AARLsCdyhWzXzph7VT5NQvJYSafD01Xfg%2BMo%2BWFro2LvM3PHYY%2FNAK%2B92359MDYRuRsW2%2BaF8%2F8jrIoE6eRAZ6V6Tq069FcArIsWGH5&X-Amz-Signature=0687fc6a5d99bb3adaa1019f95d2d0f83bbc9c72c2538d305a92a9de2734d5e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
