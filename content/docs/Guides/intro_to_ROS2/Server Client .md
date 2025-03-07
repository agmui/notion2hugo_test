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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHKKBUY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIfjr0Uz%2B3XZ0gnJ1CjOoViKXOYP1J8zg9tEtooI0CvAiABfm8x5QL1%2Blq%2BnN5P1sFI3Ub6k%2Bgk94rJq2XJy8CHECr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMFmmQgFEzFD04ED0wKtwDYYIiwUgtSEPtuUluemrUnujtHCwghnFu2UHlFADCqSN6X4ieRmj%2BJqN62wAlFqjjxhMjk9jLmlIEvib1lxi%2BsHsOncZPacQx7l%2BmP3Dffw0BBtI70cGjLEmzgiRL183M8VfIsPWorOePj78hksE2Lx6Yv8VEIndg8XP6%2F5V5YyP1qsvVvTeXnaR%2Bt2%2B%2FDyBmxNjnI9EPagcDzxCIAfseNkD8ZZvNneyR4D3FGrziVQUb2K0x8lGKtfjQsa5eHaqH7muswl0%2Fcb0LIjDjuJJLktMdDNYyVZu%2BP89OUkr6pOMfijdVKQG6XPm7CxwRVRBYIJC4yYweDCJxJQTK033Z0tm%2BG7Qa%2BlnNiL0ND5Lu8%2Fv8pxziJM98HApSCNdtEjZCh9NqvBqeNrYF%2F8g1igvNFG3t3NspBOsBZGtXndMHVX3Km4%2FMYfaBESf9F%2BOYyNIEcpcxnYc9IyntM4mnmDN3KhJD11YkruVqdykIwRSl7g355L9jG9Ntaaetz83ByoiGqC%2Bsxx1hOCCwrelvmzcwX6swM5JfpIM1qErizGY1DC1hxvn4y5aSxoXw8JVt3ptdVXIhrnZ78phwZ7II9SRf8z%2Fny%2BuGnJlLXXhcAEqUFz1k2gODd%2FxJh%2BRN%2FNswrOepvgY6pgFr7Bxk35SzNR%2Bmya8rSM%2Bup7fXVfV2%2FOETnneaMGQ8c8dsOIHjYjLvj9e8Lp2cZyLLHDyvgG%2FTYDK5VTxRpTQws4YU5AvZLSBwFi8GepGMTmfca8Tis1Ez0wXJKQ6bXIon3dxjGCxrQD%2BpsJcfg%2FDPoO7lj0%2FRK1MQVAoLFmp1uCMfYOIV%2BtaE2osHONVzW%2B06jhOcas9rg3D4HImArB%2FtIZOZEygC&X-Amz-Signature=921bf257862974074884038a303cab8db5b6593c66edb2709a0a78245cfe4852&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHKKBUY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIfjr0Uz%2B3XZ0gnJ1CjOoViKXOYP1J8zg9tEtooI0CvAiABfm8x5QL1%2Blq%2BnN5P1sFI3Ub6k%2Bgk94rJq2XJy8CHECr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMFmmQgFEzFD04ED0wKtwDYYIiwUgtSEPtuUluemrUnujtHCwghnFu2UHlFADCqSN6X4ieRmj%2BJqN62wAlFqjjxhMjk9jLmlIEvib1lxi%2BsHsOncZPacQx7l%2BmP3Dffw0BBtI70cGjLEmzgiRL183M8VfIsPWorOePj78hksE2Lx6Yv8VEIndg8XP6%2F5V5YyP1qsvVvTeXnaR%2Bt2%2B%2FDyBmxNjnI9EPagcDzxCIAfseNkD8ZZvNneyR4D3FGrziVQUb2K0x8lGKtfjQsa5eHaqH7muswl0%2Fcb0LIjDjuJJLktMdDNYyVZu%2BP89OUkr6pOMfijdVKQG6XPm7CxwRVRBYIJC4yYweDCJxJQTK033Z0tm%2BG7Qa%2BlnNiL0ND5Lu8%2Fv8pxziJM98HApSCNdtEjZCh9NqvBqeNrYF%2F8g1igvNFG3t3NspBOsBZGtXndMHVX3Km4%2FMYfaBESf9F%2BOYyNIEcpcxnYc9IyntM4mnmDN3KhJD11YkruVqdykIwRSl7g355L9jG9Ntaaetz83ByoiGqC%2Bsxx1hOCCwrelvmzcwX6swM5JfpIM1qErizGY1DC1hxvn4y5aSxoXw8JVt3ptdVXIhrnZ78phwZ7II9SRf8z%2Fny%2BuGnJlLXXhcAEqUFz1k2gODd%2FxJh%2BRN%2FNswrOepvgY6pgFr7Bxk35SzNR%2Bmya8rSM%2Bup7fXVfV2%2FOETnneaMGQ8c8dsOIHjYjLvj9e8Lp2cZyLLHDyvgG%2FTYDK5VTxRpTQws4YU5AvZLSBwFi8GepGMTmfca8Tis1Ez0wXJKQ6bXIon3dxjGCxrQD%2BpsJcfg%2FDPoO7lj0%2FRK1MQVAoLFmp1uCMfYOIV%2BtaE2osHONVzW%2B06jhOcas9rg3D4HImArB%2FtIZOZEygC&X-Amz-Signature=89aa35e5cf570c1cf5157c2bcbe8c9d8ea14827cc391bc3d9a13f0a1ae871cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHKKBUY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIfjr0Uz%2B3XZ0gnJ1CjOoViKXOYP1J8zg9tEtooI0CvAiABfm8x5QL1%2Blq%2BnN5P1sFI3Ub6k%2Bgk94rJq2XJy8CHECr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMFmmQgFEzFD04ED0wKtwDYYIiwUgtSEPtuUluemrUnujtHCwghnFu2UHlFADCqSN6X4ieRmj%2BJqN62wAlFqjjxhMjk9jLmlIEvib1lxi%2BsHsOncZPacQx7l%2BmP3Dffw0BBtI70cGjLEmzgiRL183M8VfIsPWorOePj78hksE2Lx6Yv8VEIndg8XP6%2F5V5YyP1qsvVvTeXnaR%2Bt2%2B%2FDyBmxNjnI9EPagcDzxCIAfseNkD8ZZvNneyR4D3FGrziVQUb2K0x8lGKtfjQsa5eHaqH7muswl0%2Fcb0LIjDjuJJLktMdDNYyVZu%2BP89OUkr6pOMfijdVKQG6XPm7CxwRVRBYIJC4yYweDCJxJQTK033Z0tm%2BG7Qa%2BlnNiL0ND5Lu8%2Fv8pxziJM98HApSCNdtEjZCh9NqvBqeNrYF%2F8g1igvNFG3t3NspBOsBZGtXndMHVX3Km4%2FMYfaBESf9F%2BOYyNIEcpcxnYc9IyntM4mnmDN3KhJD11YkruVqdykIwRSl7g355L9jG9Ntaaetz83ByoiGqC%2Bsxx1hOCCwrelvmzcwX6swM5JfpIM1qErizGY1DC1hxvn4y5aSxoXw8JVt3ptdVXIhrnZ78phwZ7II9SRf8z%2Fny%2BuGnJlLXXhcAEqUFz1k2gODd%2FxJh%2BRN%2FNswrOepvgY6pgFr7Bxk35SzNR%2Bmya8rSM%2Bup7fXVfV2%2FOETnneaMGQ8c8dsOIHjYjLvj9e8Lp2cZyLLHDyvgG%2FTYDK5VTxRpTQws4YU5AvZLSBwFi8GepGMTmfca8Tis1Ez0wXJKQ6bXIon3dxjGCxrQD%2BpsJcfg%2FDPoO7lj0%2FRK1MQVAoLFmp1uCMfYOIV%2BtaE2osHONVzW%2B06jhOcas9rg3D4HImArB%2FtIZOZEygC&X-Amz-Signature=eee97b196aaf56d206ccf0ac21d881ab3a7d590e2fbc3b5d6b0a8b156e3bddf4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHKKBUY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIfjr0Uz%2B3XZ0gnJ1CjOoViKXOYP1J8zg9tEtooI0CvAiABfm8x5QL1%2Blq%2BnN5P1sFI3Ub6k%2Bgk94rJq2XJy8CHECr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMFmmQgFEzFD04ED0wKtwDYYIiwUgtSEPtuUluemrUnujtHCwghnFu2UHlFADCqSN6X4ieRmj%2BJqN62wAlFqjjxhMjk9jLmlIEvib1lxi%2BsHsOncZPacQx7l%2BmP3Dffw0BBtI70cGjLEmzgiRL183M8VfIsPWorOePj78hksE2Lx6Yv8VEIndg8XP6%2F5V5YyP1qsvVvTeXnaR%2Bt2%2B%2FDyBmxNjnI9EPagcDzxCIAfseNkD8ZZvNneyR4D3FGrziVQUb2K0x8lGKtfjQsa5eHaqH7muswl0%2Fcb0LIjDjuJJLktMdDNYyVZu%2BP89OUkr6pOMfijdVKQG6XPm7CxwRVRBYIJC4yYweDCJxJQTK033Z0tm%2BG7Qa%2BlnNiL0ND5Lu8%2Fv8pxziJM98HApSCNdtEjZCh9NqvBqeNrYF%2F8g1igvNFG3t3NspBOsBZGtXndMHVX3Km4%2FMYfaBESf9F%2BOYyNIEcpcxnYc9IyntM4mnmDN3KhJD11YkruVqdykIwRSl7g355L9jG9Ntaaetz83ByoiGqC%2Bsxx1hOCCwrelvmzcwX6swM5JfpIM1qErizGY1DC1hxvn4y5aSxoXw8JVt3ptdVXIhrnZ78phwZ7II9SRf8z%2Fny%2BuGnJlLXXhcAEqUFz1k2gODd%2FxJh%2BRN%2FNswrOepvgY6pgFr7Bxk35SzNR%2Bmya8rSM%2Bup7fXVfV2%2FOETnneaMGQ8c8dsOIHjYjLvj9e8Lp2cZyLLHDyvgG%2FTYDK5VTxRpTQws4YU5AvZLSBwFi8GepGMTmfca8Tis1Ez0wXJKQ6bXIon3dxjGCxrQD%2BpsJcfg%2FDPoO7lj0%2FRK1MQVAoLFmp1uCMfYOIV%2BtaE2osHONVzW%2B06jhOcas9rg3D4HImArB%2FtIZOZEygC&X-Amz-Signature=a3681cbb5619f2c0381b927d39bbdf745be91c94e0fa570a8e4f1af2572944e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHKKBUY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIfjr0Uz%2B3XZ0gnJ1CjOoViKXOYP1J8zg9tEtooI0CvAiABfm8x5QL1%2Blq%2BnN5P1sFI3Ub6k%2Bgk94rJq2XJy8CHECr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMFmmQgFEzFD04ED0wKtwDYYIiwUgtSEPtuUluemrUnujtHCwghnFu2UHlFADCqSN6X4ieRmj%2BJqN62wAlFqjjxhMjk9jLmlIEvib1lxi%2BsHsOncZPacQx7l%2BmP3Dffw0BBtI70cGjLEmzgiRL183M8VfIsPWorOePj78hksE2Lx6Yv8VEIndg8XP6%2F5V5YyP1qsvVvTeXnaR%2Bt2%2B%2FDyBmxNjnI9EPagcDzxCIAfseNkD8ZZvNneyR4D3FGrziVQUb2K0x8lGKtfjQsa5eHaqH7muswl0%2Fcb0LIjDjuJJLktMdDNYyVZu%2BP89OUkr6pOMfijdVKQG6XPm7CxwRVRBYIJC4yYweDCJxJQTK033Z0tm%2BG7Qa%2BlnNiL0ND5Lu8%2Fv8pxziJM98HApSCNdtEjZCh9NqvBqeNrYF%2F8g1igvNFG3t3NspBOsBZGtXndMHVX3Km4%2FMYfaBESf9F%2BOYyNIEcpcxnYc9IyntM4mnmDN3KhJD11YkruVqdykIwRSl7g355L9jG9Ntaaetz83ByoiGqC%2Bsxx1hOCCwrelvmzcwX6swM5JfpIM1qErizGY1DC1hxvn4y5aSxoXw8JVt3ptdVXIhrnZ78phwZ7II9SRf8z%2Fny%2BuGnJlLXXhcAEqUFz1k2gODd%2FxJh%2BRN%2FNswrOepvgY6pgFr7Bxk35SzNR%2Bmya8rSM%2Bup7fXVfV2%2FOETnneaMGQ8c8dsOIHjYjLvj9e8Lp2cZyLLHDyvgG%2FTYDK5VTxRpTQws4YU5AvZLSBwFi8GepGMTmfca8Tis1Ez0wXJKQ6bXIon3dxjGCxrQD%2BpsJcfg%2FDPoO7lj0%2FRK1MQVAoLFmp1uCMfYOIV%2BtaE2osHONVzW%2B06jhOcas9rg3D4HImArB%2FtIZOZEygC&X-Amz-Signature=fb8ac4d171a0266006cf69021ddde8aa03c123637ef0090b7a56a1467ac0c225&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
