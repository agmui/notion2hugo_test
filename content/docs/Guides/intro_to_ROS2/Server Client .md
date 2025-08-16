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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7PUDXR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHtoW7UXDVyzs2DS%2B6ayCD1eBcIuokR7S%2BUHHv0ZnNB9AiBoZoCR9WT54%2BEp0mNNutLATbBd%2BTAxDrBAadojGon5zCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMgSgBBgGS01TWVt8yKtwDpsOfxaqMm95XILtpv4Um3e35Ub%2Bmg93a85p6UASPqw%2BHHEnPBBMHm8dktd1743O8x%2FdVrFMZdPiLhcA9aBD5Ro1FDOP%2B1peCd2DrAe5cTXzxfFvqLFgP1mfz9y80rrRDUbP9DxX9kClQZIg7F8ji4KXvS4bxD08A%2BqugAlHTixoia2gLfSKRNBbnUvhI1uI9qAhs0SkI44%2FzwquMdfokLsGVcoE%2FZ8Ic%2FGrv%2B%2Fpdoj5li9gJxKkoJHE2QqS0Npx9AM7ydIGo5E8m7B7N828DTPnPuhYytZ4ReEkyavoaA76RS2q4cF7qhP21CY3rgK2DujAL1%2FwSW%2BO1xr0Yb1x%2FZ8av8%2FT8tbScg9sbRROYdYOQk3C36C%2FXMzG6d8hfJjbsooe2zZDzCgjTBr42uyM5LWLxm%2BsfRKnEKVOhan5EgU1GNyxx7AfqeYME6lAU5oihJ%2BH9BJKG2ob5zhvByvC3cLu%2BjGRcyWJ3aqIDzP%2FvfEOZVqkJ8nbzzUQszKPO%2BPhji8KiEvmBvQoFZ6%2B8QG%2FP%2F4wvjQ%2BmbP1ZS0rVWRDFspl4XAlIAALPAfun31BWF933DsAavwC6dQU6J6M6rrcx%2B9sk7SEiJm0pMlG08kE3PQnFLrJJtxMQsafg5jswl5qCxQY6pgHd1kcLSDYmVCt5l%2FovPIjOHJM8Q%2BZoe3lRtEWsXPMssyoIsi6nwdpwK3d2vaOqDRwEcaROYrmXZiZyG7AH9F9GAZnPP5eB8fDRaZE2CjL90oJ7E30%2BTa2PG2uIiCnEw6DHJPJ3NnMsRBqtZmUvosDAqfKHPJXTCvStlyXt6xpm8pb3QMWvqOlR9Wbd7qvyFrla9A3op0JjkokU%2FHfCs1FS2dxNY8a9&X-Amz-Signature=d7097f3cce7ec6e0a512477eaae5eb690aa0588eb38d1d566ef9a8a2ca04bb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7PUDXR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHtoW7UXDVyzs2DS%2B6ayCD1eBcIuokR7S%2BUHHv0ZnNB9AiBoZoCR9WT54%2BEp0mNNutLATbBd%2BTAxDrBAadojGon5zCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMgSgBBgGS01TWVt8yKtwDpsOfxaqMm95XILtpv4Um3e35Ub%2Bmg93a85p6UASPqw%2BHHEnPBBMHm8dktd1743O8x%2FdVrFMZdPiLhcA9aBD5Ro1FDOP%2B1peCd2DrAe5cTXzxfFvqLFgP1mfz9y80rrRDUbP9DxX9kClQZIg7F8ji4KXvS4bxD08A%2BqugAlHTixoia2gLfSKRNBbnUvhI1uI9qAhs0SkI44%2FzwquMdfokLsGVcoE%2FZ8Ic%2FGrv%2B%2Fpdoj5li9gJxKkoJHE2QqS0Npx9AM7ydIGo5E8m7B7N828DTPnPuhYytZ4ReEkyavoaA76RS2q4cF7qhP21CY3rgK2DujAL1%2FwSW%2BO1xr0Yb1x%2FZ8av8%2FT8tbScg9sbRROYdYOQk3C36C%2FXMzG6d8hfJjbsooe2zZDzCgjTBr42uyM5LWLxm%2BsfRKnEKVOhan5EgU1GNyxx7AfqeYME6lAU5oihJ%2BH9BJKG2ob5zhvByvC3cLu%2BjGRcyWJ3aqIDzP%2FvfEOZVqkJ8nbzzUQszKPO%2BPhji8KiEvmBvQoFZ6%2B8QG%2FP%2F4wvjQ%2BmbP1ZS0rVWRDFspl4XAlIAALPAfun31BWF933DsAavwC6dQU6J6M6rrcx%2B9sk7SEiJm0pMlG08kE3PQnFLrJJtxMQsafg5jswl5qCxQY6pgHd1kcLSDYmVCt5l%2FovPIjOHJM8Q%2BZoe3lRtEWsXPMssyoIsi6nwdpwK3d2vaOqDRwEcaROYrmXZiZyG7AH9F9GAZnPP5eB8fDRaZE2CjL90oJ7E30%2BTa2PG2uIiCnEw6DHJPJ3NnMsRBqtZmUvosDAqfKHPJXTCvStlyXt6xpm8pb3QMWvqOlR9Wbd7qvyFrla9A3op0JjkokU%2FHfCs1FS2dxNY8a9&X-Amz-Signature=96bc444d413fec6d6b2d007e250c4cdfd9220ebfd0e5bcf7d3784b546670392c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7PUDXR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHtoW7UXDVyzs2DS%2B6ayCD1eBcIuokR7S%2BUHHv0ZnNB9AiBoZoCR9WT54%2BEp0mNNutLATbBd%2BTAxDrBAadojGon5zCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMgSgBBgGS01TWVt8yKtwDpsOfxaqMm95XILtpv4Um3e35Ub%2Bmg93a85p6UASPqw%2BHHEnPBBMHm8dktd1743O8x%2FdVrFMZdPiLhcA9aBD5Ro1FDOP%2B1peCd2DrAe5cTXzxfFvqLFgP1mfz9y80rrRDUbP9DxX9kClQZIg7F8ji4KXvS4bxD08A%2BqugAlHTixoia2gLfSKRNBbnUvhI1uI9qAhs0SkI44%2FzwquMdfokLsGVcoE%2FZ8Ic%2FGrv%2B%2Fpdoj5li9gJxKkoJHE2QqS0Npx9AM7ydIGo5E8m7B7N828DTPnPuhYytZ4ReEkyavoaA76RS2q4cF7qhP21CY3rgK2DujAL1%2FwSW%2BO1xr0Yb1x%2FZ8av8%2FT8tbScg9sbRROYdYOQk3C36C%2FXMzG6d8hfJjbsooe2zZDzCgjTBr42uyM5LWLxm%2BsfRKnEKVOhan5EgU1GNyxx7AfqeYME6lAU5oihJ%2BH9BJKG2ob5zhvByvC3cLu%2BjGRcyWJ3aqIDzP%2FvfEOZVqkJ8nbzzUQszKPO%2BPhji8KiEvmBvQoFZ6%2B8QG%2FP%2F4wvjQ%2BmbP1ZS0rVWRDFspl4XAlIAALPAfun31BWF933DsAavwC6dQU6J6M6rrcx%2B9sk7SEiJm0pMlG08kE3PQnFLrJJtxMQsafg5jswl5qCxQY6pgHd1kcLSDYmVCt5l%2FovPIjOHJM8Q%2BZoe3lRtEWsXPMssyoIsi6nwdpwK3d2vaOqDRwEcaROYrmXZiZyG7AH9F9GAZnPP5eB8fDRaZE2CjL90oJ7E30%2BTa2PG2uIiCnEw6DHJPJ3NnMsRBqtZmUvosDAqfKHPJXTCvStlyXt6xpm8pb3QMWvqOlR9Wbd7qvyFrla9A3op0JjkokU%2FHfCs1FS2dxNY8a9&X-Amz-Signature=5c5a0e1697f438a1b16cc43c17cc6bd25198e8b6c9e0e7d3b15b74c462b26bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7PUDXR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHtoW7UXDVyzs2DS%2B6ayCD1eBcIuokR7S%2BUHHv0ZnNB9AiBoZoCR9WT54%2BEp0mNNutLATbBd%2BTAxDrBAadojGon5zCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMgSgBBgGS01TWVt8yKtwDpsOfxaqMm95XILtpv4Um3e35Ub%2Bmg93a85p6UASPqw%2BHHEnPBBMHm8dktd1743O8x%2FdVrFMZdPiLhcA9aBD5Ro1FDOP%2B1peCd2DrAe5cTXzxfFvqLFgP1mfz9y80rrRDUbP9DxX9kClQZIg7F8ji4KXvS4bxD08A%2BqugAlHTixoia2gLfSKRNBbnUvhI1uI9qAhs0SkI44%2FzwquMdfokLsGVcoE%2FZ8Ic%2FGrv%2B%2Fpdoj5li9gJxKkoJHE2QqS0Npx9AM7ydIGo5E8m7B7N828DTPnPuhYytZ4ReEkyavoaA76RS2q4cF7qhP21CY3rgK2DujAL1%2FwSW%2BO1xr0Yb1x%2FZ8av8%2FT8tbScg9sbRROYdYOQk3C36C%2FXMzG6d8hfJjbsooe2zZDzCgjTBr42uyM5LWLxm%2BsfRKnEKVOhan5EgU1GNyxx7AfqeYME6lAU5oihJ%2BH9BJKG2ob5zhvByvC3cLu%2BjGRcyWJ3aqIDzP%2FvfEOZVqkJ8nbzzUQszKPO%2BPhji8KiEvmBvQoFZ6%2B8QG%2FP%2F4wvjQ%2BmbP1ZS0rVWRDFspl4XAlIAALPAfun31BWF933DsAavwC6dQU6J6M6rrcx%2B9sk7SEiJm0pMlG08kE3PQnFLrJJtxMQsafg5jswl5qCxQY6pgHd1kcLSDYmVCt5l%2FovPIjOHJM8Q%2BZoe3lRtEWsXPMssyoIsi6nwdpwK3d2vaOqDRwEcaROYrmXZiZyG7AH9F9GAZnPP5eB8fDRaZE2CjL90oJ7E30%2BTa2PG2uIiCnEw6DHJPJ3NnMsRBqtZmUvosDAqfKHPJXTCvStlyXt6xpm8pb3QMWvqOlR9Wbd7qvyFrla9A3op0JjkokU%2FHfCs1FS2dxNY8a9&X-Amz-Signature=865e2ca0972eed7a3c17d7838d3cbdb6f990e3f04c81b55ced7e75ebdd21aff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7PUDXR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHtoW7UXDVyzs2DS%2B6ayCD1eBcIuokR7S%2BUHHv0ZnNB9AiBoZoCR9WT54%2BEp0mNNutLATbBd%2BTAxDrBAadojGon5zCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMgSgBBgGS01TWVt8yKtwDpsOfxaqMm95XILtpv4Um3e35Ub%2Bmg93a85p6UASPqw%2BHHEnPBBMHm8dktd1743O8x%2FdVrFMZdPiLhcA9aBD5Ro1FDOP%2B1peCd2DrAe5cTXzxfFvqLFgP1mfz9y80rrRDUbP9DxX9kClQZIg7F8ji4KXvS4bxD08A%2BqugAlHTixoia2gLfSKRNBbnUvhI1uI9qAhs0SkI44%2FzwquMdfokLsGVcoE%2FZ8Ic%2FGrv%2B%2Fpdoj5li9gJxKkoJHE2QqS0Npx9AM7ydIGo5E8m7B7N828DTPnPuhYytZ4ReEkyavoaA76RS2q4cF7qhP21CY3rgK2DujAL1%2FwSW%2BO1xr0Yb1x%2FZ8av8%2FT8tbScg9sbRROYdYOQk3C36C%2FXMzG6d8hfJjbsooe2zZDzCgjTBr42uyM5LWLxm%2BsfRKnEKVOhan5EgU1GNyxx7AfqeYME6lAU5oihJ%2BH9BJKG2ob5zhvByvC3cLu%2BjGRcyWJ3aqIDzP%2FvfEOZVqkJ8nbzzUQszKPO%2BPhji8KiEvmBvQoFZ6%2B8QG%2FP%2F4wvjQ%2BmbP1ZS0rVWRDFspl4XAlIAALPAfun31BWF933DsAavwC6dQU6J6M6rrcx%2B9sk7SEiJm0pMlG08kE3PQnFLrJJtxMQsafg5jswl5qCxQY6pgHd1kcLSDYmVCt5l%2FovPIjOHJM8Q%2BZoe3lRtEWsXPMssyoIsi6nwdpwK3d2vaOqDRwEcaROYrmXZiZyG7AH9F9GAZnPP5eB8fDRaZE2CjL90oJ7E30%2BTa2PG2uIiCnEw6DHJPJ3NnMsRBqtZmUvosDAqfKHPJXTCvStlyXt6xpm8pb3QMWvqOlR9Wbd7qvyFrla9A3op0JjkokU%2FHfCs1FS2dxNY8a9&X-Amz-Signature=29e2088c7b40e5fd25123eceb5d9a471e5e9557bf65fe87d1b42948462ed4195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
