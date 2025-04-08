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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXDNAMS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4d8BbhPjm1V20u%2BaalyOEgW2tGzvIhYvP%2FTAuOPv4kwIgCdkSWvMLdACPkwFR8dHx6mPRM9xRk8LlnUf5KHZFGOoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCrbwZCopm%2BagOP%2BmyrcA9brzXaXSbSi45LUAKNrnON%2FPw7aNscprvpQcSdaXGX4YJp8V09e%2Bw9D3Wgt6fzkSmoXL5G%2Bl0y0Rpbl3%2BHDG09%2BvfmvgpRIaEKKchSf99n002MOslcDJeMneeBxQ0o7VsVqGSsBIrzIsfZLPoSP5ewnSNKYuM2NS0ct05SNJrFTck%2FchYd7GlOCLGYBlxW2jJTqRZ7gGi2fU6bPk4Cd%2FoAmUn7AV7qK4l1cFarqZaJ4RXS%2FHHKyRf5vYZ%2FinlvoUmYBCNq8RRt8cSmPl%2FMXqhgxr9SHUMCnnyt%2FORxm4wwI3jR19N8bW41KI3PESiddejZS%2FYzNDbj6BwMD9OwaJRsfDwDDM4J03YZwp1Uwx73GlpQydMVxDRtmD2tPdzQhY%2Bb7Ch%2F%2FndRZrj2m%2F0MjktX76o%2Ba4rNp3txv7rveZb1OWJ9U6CJVhQcHXKzWscx6daUSKzMkgwPNpwyde2UMaw8JkZ8Eirb%2BD5PoTQxRYsZzQLPht7d9T2916SDeScdptfE%2FfiwmkwU%2FS9jL9mLI4vw%2FGxp7sNOMhj0k%2Bm8UuOHkqyJtQ6fTN%2BdBEzG9oYz1f0yldxYg5C31QL4jAtH9mmFs6BkUOGVKJs%2Fkt5InVh7YpwuRyZShKpUOpFEEMJfx078GOqUB2Pbm1gdPObSm4ydyNIolWc2RBA4cEv3FMwEMEfN47%2BPCjRhwkrhjCm%2BHO%2BLZ4%2B44hUiNX9tMHWjDSABf%2F1CTYBF0VHUrup1aWLjgf0JfxpxSOOeb95tfgMH2ANPCPrQ1BLcPSooGcat7U1zQHDjrYpUn0%2BpPzieFGmd2VZmdy1xfy%2FMKIEBqpd5wNV04gWxYb6uWUagsGgZZG2GsSx0TI9L4aSJy&X-Amz-Signature=f61c9cc96cecc911fe8c427a1f37bdea32719f19628c0bd291f3f1b9a2613241&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXDNAMS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4d8BbhPjm1V20u%2BaalyOEgW2tGzvIhYvP%2FTAuOPv4kwIgCdkSWvMLdACPkwFR8dHx6mPRM9xRk8LlnUf5KHZFGOoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCrbwZCopm%2BagOP%2BmyrcA9brzXaXSbSi45LUAKNrnON%2FPw7aNscprvpQcSdaXGX4YJp8V09e%2Bw9D3Wgt6fzkSmoXL5G%2Bl0y0Rpbl3%2BHDG09%2BvfmvgpRIaEKKchSf99n002MOslcDJeMneeBxQ0o7VsVqGSsBIrzIsfZLPoSP5ewnSNKYuM2NS0ct05SNJrFTck%2FchYd7GlOCLGYBlxW2jJTqRZ7gGi2fU6bPk4Cd%2FoAmUn7AV7qK4l1cFarqZaJ4RXS%2FHHKyRf5vYZ%2FinlvoUmYBCNq8RRt8cSmPl%2FMXqhgxr9SHUMCnnyt%2FORxm4wwI3jR19N8bW41KI3PESiddejZS%2FYzNDbj6BwMD9OwaJRsfDwDDM4J03YZwp1Uwx73GlpQydMVxDRtmD2tPdzQhY%2Bb7Ch%2F%2FndRZrj2m%2F0MjktX76o%2Ba4rNp3txv7rveZb1OWJ9U6CJVhQcHXKzWscx6daUSKzMkgwPNpwyde2UMaw8JkZ8Eirb%2BD5PoTQxRYsZzQLPht7d9T2916SDeScdptfE%2FfiwmkwU%2FS9jL9mLI4vw%2FGxp7sNOMhj0k%2Bm8UuOHkqyJtQ6fTN%2BdBEzG9oYz1f0yldxYg5C31QL4jAtH9mmFs6BkUOGVKJs%2Fkt5InVh7YpwuRyZShKpUOpFEEMJfx078GOqUB2Pbm1gdPObSm4ydyNIolWc2RBA4cEv3FMwEMEfN47%2BPCjRhwkrhjCm%2BHO%2BLZ4%2B44hUiNX9tMHWjDSABf%2F1CTYBF0VHUrup1aWLjgf0JfxpxSOOeb95tfgMH2ANPCPrQ1BLcPSooGcat7U1zQHDjrYpUn0%2BpPzieFGmd2VZmdy1xfy%2FMKIEBqpd5wNV04gWxYb6uWUagsGgZZG2GsSx0TI9L4aSJy&X-Amz-Signature=7d3bd9e9d3abfa586dc67a1376746f355637d8a3028c21aee3754775bca51369&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXDNAMS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4d8BbhPjm1V20u%2BaalyOEgW2tGzvIhYvP%2FTAuOPv4kwIgCdkSWvMLdACPkwFR8dHx6mPRM9xRk8LlnUf5KHZFGOoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCrbwZCopm%2BagOP%2BmyrcA9brzXaXSbSi45LUAKNrnON%2FPw7aNscprvpQcSdaXGX4YJp8V09e%2Bw9D3Wgt6fzkSmoXL5G%2Bl0y0Rpbl3%2BHDG09%2BvfmvgpRIaEKKchSf99n002MOslcDJeMneeBxQ0o7VsVqGSsBIrzIsfZLPoSP5ewnSNKYuM2NS0ct05SNJrFTck%2FchYd7GlOCLGYBlxW2jJTqRZ7gGi2fU6bPk4Cd%2FoAmUn7AV7qK4l1cFarqZaJ4RXS%2FHHKyRf5vYZ%2FinlvoUmYBCNq8RRt8cSmPl%2FMXqhgxr9SHUMCnnyt%2FORxm4wwI3jR19N8bW41KI3PESiddejZS%2FYzNDbj6BwMD9OwaJRsfDwDDM4J03YZwp1Uwx73GlpQydMVxDRtmD2tPdzQhY%2Bb7Ch%2F%2FndRZrj2m%2F0MjktX76o%2Ba4rNp3txv7rveZb1OWJ9U6CJVhQcHXKzWscx6daUSKzMkgwPNpwyde2UMaw8JkZ8Eirb%2BD5PoTQxRYsZzQLPht7d9T2916SDeScdptfE%2FfiwmkwU%2FS9jL9mLI4vw%2FGxp7sNOMhj0k%2Bm8UuOHkqyJtQ6fTN%2BdBEzG9oYz1f0yldxYg5C31QL4jAtH9mmFs6BkUOGVKJs%2Fkt5InVh7YpwuRyZShKpUOpFEEMJfx078GOqUB2Pbm1gdPObSm4ydyNIolWc2RBA4cEv3FMwEMEfN47%2BPCjRhwkrhjCm%2BHO%2BLZ4%2B44hUiNX9tMHWjDSABf%2F1CTYBF0VHUrup1aWLjgf0JfxpxSOOeb95tfgMH2ANPCPrQ1BLcPSooGcat7U1zQHDjrYpUn0%2BpPzieFGmd2VZmdy1xfy%2FMKIEBqpd5wNV04gWxYb6uWUagsGgZZG2GsSx0TI9L4aSJy&X-Amz-Signature=bb874f2d204f27f942e04bfce1d93c9852ae79976f12437759efccf90b7e73b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXDNAMS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4d8BbhPjm1V20u%2BaalyOEgW2tGzvIhYvP%2FTAuOPv4kwIgCdkSWvMLdACPkwFR8dHx6mPRM9xRk8LlnUf5KHZFGOoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCrbwZCopm%2BagOP%2BmyrcA9brzXaXSbSi45LUAKNrnON%2FPw7aNscprvpQcSdaXGX4YJp8V09e%2Bw9D3Wgt6fzkSmoXL5G%2Bl0y0Rpbl3%2BHDG09%2BvfmvgpRIaEKKchSf99n002MOslcDJeMneeBxQ0o7VsVqGSsBIrzIsfZLPoSP5ewnSNKYuM2NS0ct05SNJrFTck%2FchYd7GlOCLGYBlxW2jJTqRZ7gGi2fU6bPk4Cd%2FoAmUn7AV7qK4l1cFarqZaJ4RXS%2FHHKyRf5vYZ%2FinlvoUmYBCNq8RRt8cSmPl%2FMXqhgxr9SHUMCnnyt%2FORxm4wwI3jR19N8bW41KI3PESiddejZS%2FYzNDbj6BwMD9OwaJRsfDwDDM4J03YZwp1Uwx73GlpQydMVxDRtmD2tPdzQhY%2Bb7Ch%2F%2FndRZrj2m%2F0MjktX76o%2Ba4rNp3txv7rveZb1OWJ9U6CJVhQcHXKzWscx6daUSKzMkgwPNpwyde2UMaw8JkZ8Eirb%2BD5PoTQxRYsZzQLPht7d9T2916SDeScdptfE%2FfiwmkwU%2FS9jL9mLI4vw%2FGxp7sNOMhj0k%2Bm8UuOHkqyJtQ6fTN%2BdBEzG9oYz1f0yldxYg5C31QL4jAtH9mmFs6BkUOGVKJs%2Fkt5InVh7YpwuRyZShKpUOpFEEMJfx078GOqUB2Pbm1gdPObSm4ydyNIolWc2RBA4cEv3FMwEMEfN47%2BPCjRhwkrhjCm%2BHO%2BLZ4%2B44hUiNX9tMHWjDSABf%2F1CTYBF0VHUrup1aWLjgf0JfxpxSOOeb95tfgMH2ANPCPrQ1BLcPSooGcat7U1zQHDjrYpUn0%2BpPzieFGmd2VZmdy1xfy%2FMKIEBqpd5wNV04gWxYb6uWUagsGgZZG2GsSx0TI9L4aSJy&X-Amz-Signature=476044469602ef8e34f5d92e295aa35f087478e6c522242377cb10838a4e582f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXDNAMS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4d8BbhPjm1V20u%2BaalyOEgW2tGzvIhYvP%2FTAuOPv4kwIgCdkSWvMLdACPkwFR8dHx6mPRM9xRk8LlnUf5KHZFGOoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCrbwZCopm%2BagOP%2BmyrcA9brzXaXSbSi45LUAKNrnON%2FPw7aNscprvpQcSdaXGX4YJp8V09e%2Bw9D3Wgt6fzkSmoXL5G%2Bl0y0Rpbl3%2BHDG09%2BvfmvgpRIaEKKchSf99n002MOslcDJeMneeBxQ0o7VsVqGSsBIrzIsfZLPoSP5ewnSNKYuM2NS0ct05SNJrFTck%2FchYd7GlOCLGYBlxW2jJTqRZ7gGi2fU6bPk4Cd%2FoAmUn7AV7qK4l1cFarqZaJ4RXS%2FHHKyRf5vYZ%2FinlvoUmYBCNq8RRt8cSmPl%2FMXqhgxr9SHUMCnnyt%2FORxm4wwI3jR19N8bW41KI3PESiddejZS%2FYzNDbj6BwMD9OwaJRsfDwDDM4J03YZwp1Uwx73GlpQydMVxDRtmD2tPdzQhY%2Bb7Ch%2F%2FndRZrj2m%2F0MjktX76o%2Ba4rNp3txv7rveZb1OWJ9U6CJVhQcHXKzWscx6daUSKzMkgwPNpwyde2UMaw8JkZ8Eirb%2BD5PoTQxRYsZzQLPht7d9T2916SDeScdptfE%2FfiwmkwU%2FS9jL9mLI4vw%2FGxp7sNOMhj0k%2Bm8UuOHkqyJtQ6fTN%2BdBEzG9oYz1f0yldxYg5C31QL4jAtH9mmFs6BkUOGVKJs%2Fkt5InVh7YpwuRyZShKpUOpFEEMJfx078GOqUB2Pbm1gdPObSm4ydyNIolWc2RBA4cEv3FMwEMEfN47%2BPCjRhwkrhjCm%2BHO%2BLZ4%2B44hUiNX9tMHWjDSABf%2F1CTYBF0VHUrup1aWLjgf0JfxpxSOOeb95tfgMH2ANPCPrQ1BLcPSooGcat7U1zQHDjrYpUn0%2BpPzieFGmd2VZmdy1xfy%2FMKIEBqpd5wNV04gWxYb6uWUagsGgZZG2GsSx0TI9L4aSJy&X-Amz-Signature=8d2cb9caa1352dd2b64874dcd7980e0c65a20cc757fa320bee4bdb39d92fe3e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
