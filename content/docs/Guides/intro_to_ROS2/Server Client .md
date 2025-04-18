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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZYN326%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgUyDZPuLf%2B3I7v%2FM%2FvUvdiEs40ZXWF8U9sAM1YoVUyAiA2Bfw5RRD6LQnNOV51Pf%2Bi71q0l2NKiQH6lCu0BuHGNyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMHD44Bo7n1Qsb2AhFKtwDvJlfQ1nncHNQRVJBlkU4IM4Fxl87cqTaNJxt1fSZD535WQmuMSqJD78CswpTq8cO8%2FADLGl1hlZ0egMcUr3wu8c4LWS%2Brl0M152HPyJlTzaQ9EH0uI%2BCAjEpyQF%2Fe52p42EBf7ICSD7ui5RuHhaftuXYn6L2N6VHOg1UousMfFKT2nhLvFbyzuHSucfQ%2FgxHQY5P8RA3KU8M60C73f4mga9DEhBdTF3FjXSzFMglu%2BBAkYdOHuwsxb4ZzrGal%2FuO4J4azeqqJrRYU9iRIPFcEkSlgIiJbFxD81RLvxqEa2ligBsL441tpmR7kXcNUXMWIx5Sz8FKgmQvaybIHkg4HheQHxP9bJpn%2BXzQgapBf8Kiz8hFoH7tYTKxgLYfDA4a6viLF6YyYUoeQuM1xtTuB0DExDKRGqtbYq9fmVRxc5dEkPqbtXcgUgchVrO7qIz6gShZy2iS2fZPy%2B%2BeFn5wZMzhfl7ureoQFXrQ1DFTVzXmwYMHpD060XC680WxFwOMrLViNuMnPluRjB6S6brtSxilPHedDXwRoDK2sfzf%2BDlR46L9wIkphmdYx%2FV0mKQZNphHNDf8LD17oQLB%2F%2FedMoNTijNIJG11rPHuzbhfPqHFHhFeo62hT2cN%2FWww%2FcOJwAY6pgGgZEunSQxOAtvVT8cr2c%2FzZGS8WQX5mMHX2L0WDTjsscbIRXZbADshYyRDIFAo89RMJJZRGR%2FvS4A1gwmjtMtftjoCFdDqGedgKS4nTiiisZcoBZmBu%2B%2BJZ70pw3xt0ql4TXwhO8J7rU0IZ%2Fy1Yd%2F%2BpPQB81pyS00wiv8eNV4qPAfiseb49j3icE1WRmkJbF83iIVpw5yYDxbqDTigHENUefzFUWUi&X-Amz-Signature=489f359a9df087e4b8c3c8a3a86537809905d903d38de9bae4c6a774d56f2b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZYN326%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgUyDZPuLf%2B3I7v%2FM%2FvUvdiEs40ZXWF8U9sAM1YoVUyAiA2Bfw5RRD6LQnNOV51Pf%2Bi71q0l2NKiQH6lCu0BuHGNyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMHD44Bo7n1Qsb2AhFKtwDvJlfQ1nncHNQRVJBlkU4IM4Fxl87cqTaNJxt1fSZD535WQmuMSqJD78CswpTq8cO8%2FADLGl1hlZ0egMcUr3wu8c4LWS%2Brl0M152HPyJlTzaQ9EH0uI%2BCAjEpyQF%2Fe52p42EBf7ICSD7ui5RuHhaftuXYn6L2N6VHOg1UousMfFKT2nhLvFbyzuHSucfQ%2FgxHQY5P8RA3KU8M60C73f4mga9DEhBdTF3FjXSzFMglu%2BBAkYdOHuwsxb4ZzrGal%2FuO4J4azeqqJrRYU9iRIPFcEkSlgIiJbFxD81RLvxqEa2ligBsL441tpmR7kXcNUXMWIx5Sz8FKgmQvaybIHkg4HheQHxP9bJpn%2BXzQgapBf8Kiz8hFoH7tYTKxgLYfDA4a6viLF6YyYUoeQuM1xtTuB0DExDKRGqtbYq9fmVRxc5dEkPqbtXcgUgchVrO7qIz6gShZy2iS2fZPy%2B%2BeFn5wZMzhfl7ureoQFXrQ1DFTVzXmwYMHpD060XC680WxFwOMrLViNuMnPluRjB6S6brtSxilPHedDXwRoDK2sfzf%2BDlR46L9wIkphmdYx%2FV0mKQZNphHNDf8LD17oQLB%2F%2FedMoNTijNIJG11rPHuzbhfPqHFHhFeo62hT2cN%2FWww%2FcOJwAY6pgGgZEunSQxOAtvVT8cr2c%2FzZGS8WQX5mMHX2L0WDTjsscbIRXZbADshYyRDIFAo89RMJJZRGR%2FvS4A1gwmjtMtftjoCFdDqGedgKS4nTiiisZcoBZmBu%2B%2BJZ70pw3xt0ql4TXwhO8J7rU0IZ%2Fy1Yd%2F%2BpPQB81pyS00wiv8eNV4qPAfiseb49j3icE1WRmkJbF83iIVpw5yYDxbqDTigHENUefzFUWUi&X-Amz-Signature=b6ac61d2ab82fee2ed7a249f12c550eabf24dd5750b66918f2b5eea76db41194&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZYN326%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgUyDZPuLf%2B3I7v%2FM%2FvUvdiEs40ZXWF8U9sAM1YoVUyAiA2Bfw5RRD6LQnNOV51Pf%2Bi71q0l2NKiQH6lCu0BuHGNyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMHD44Bo7n1Qsb2AhFKtwDvJlfQ1nncHNQRVJBlkU4IM4Fxl87cqTaNJxt1fSZD535WQmuMSqJD78CswpTq8cO8%2FADLGl1hlZ0egMcUr3wu8c4LWS%2Brl0M152HPyJlTzaQ9EH0uI%2BCAjEpyQF%2Fe52p42EBf7ICSD7ui5RuHhaftuXYn6L2N6VHOg1UousMfFKT2nhLvFbyzuHSucfQ%2FgxHQY5P8RA3KU8M60C73f4mga9DEhBdTF3FjXSzFMglu%2BBAkYdOHuwsxb4ZzrGal%2FuO4J4azeqqJrRYU9iRIPFcEkSlgIiJbFxD81RLvxqEa2ligBsL441tpmR7kXcNUXMWIx5Sz8FKgmQvaybIHkg4HheQHxP9bJpn%2BXzQgapBf8Kiz8hFoH7tYTKxgLYfDA4a6viLF6YyYUoeQuM1xtTuB0DExDKRGqtbYq9fmVRxc5dEkPqbtXcgUgchVrO7qIz6gShZy2iS2fZPy%2B%2BeFn5wZMzhfl7ureoQFXrQ1DFTVzXmwYMHpD060XC680WxFwOMrLViNuMnPluRjB6S6brtSxilPHedDXwRoDK2sfzf%2BDlR46L9wIkphmdYx%2FV0mKQZNphHNDf8LD17oQLB%2F%2FedMoNTijNIJG11rPHuzbhfPqHFHhFeo62hT2cN%2FWww%2FcOJwAY6pgGgZEunSQxOAtvVT8cr2c%2FzZGS8WQX5mMHX2L0WDTjsscbIRXZbADshYyRDIFAo89RMJJZRGR%2FvS4A1gwmjtMtftjoCFdDqGedgKS4nTiiisZcoBZmBu%2B%2BJZ70pw3xt0ql4TXwhO8J7rU0IZ%2Fy1Yd%2F%2BpPQB81pyS00wiv8eNV4qPAfiseb49j3icE1WRmkJbF83iIVpw5yYDxbqDTigHENUefzFUWUi&X-Amz-Signature=33875966ddc26aaaca511ea8b0f25717267574563b175cabb46ac15b164454f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZYN326%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgUyDZPuLf%2B3I7v%2FM%2FvUvdiEs40ZXWF8U9sAM1YoVUyAiA2Bfw5RRD6LQnNOV51Pf%2Bi71q0l2NKiQH6lCu0BuHGNyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMHD44Bo7n1Qsb2AhFKtwDvJlfQ1nncHNQRVJBlkU4IM4Fxl87cqTaNJxt1fSZD535WQmuMSqJD78CswpTq8cO8%2FADLGl1hlZ0egMcUr3wu8c4LWS%2Brl0M152HPyJlTzaQ9EH0uI%2BCAjEpyQF%2Fe52p42EBf7ICSD7ui5RuHhaftuXYn6L2N6VHOg1UousMfFKT2nhLvFbyzuHSucfQ%2FgxHQY5P8RA3KU8M60C73f4mga9DEhBdTF3FjXSzFMglu%2BBAkYdOHuwsxb4ZzrGal%2FuO4J4azeqqJrRYU9iRIPFcEkSlgIiJbFxD81RLvxqEa2ligBsL441tpmR7kXcNUXMWIx5Sz8FKgmQvaybIHkg4HheQHxP9bJpn%2BXzQgapBf8Kiz8hFoH7tYTKxgLYfDA4a6viLF6YyYUoeQuM1xtTuB0DExDKRGqtbYq9fmVRxc5dEkPqbtXcgUgchVrO7qIz6gShZy2iS2fZPy%2B%2BeFn5wZMzhfl7ureoQFXrQ1DFTVzXmwYMHpD060XC680WxFwOMrLViNuMnPluRjB6S6brtSxilPHedDXwRoDK2sfzf%2BDlR46L9wIkphmdYx%2FV0mKQZNphHNDf8LD17oQLB%2F%2FedMoNTijNIJG11rPHuzbhfPqHFHhFeo62hT2cN%2FWww%2FcOJwAY6pgGgZEunSQxOAtvVT8cr2c%2FzZGS8WQX5mMHX2L0WDTjsscbIRXZbADshYyRDIFAo89RMJJZRGR%2FvS4A1gwmjtMtftjoCFdDqGedgKS4nTiiisZcoBZmBu%2B%2BJZ70pw3xt0ql4TXwhO8J7rU0IZ%2Fy1Yd%2F%2BpPQB81pyS00wiv8eNV4qPAfiseb49j3icE1WRmkJbF83iIVpw5yYDxbqDTigHENUefzFUWUi&X-Amz-Signature=d4cfc2eca0ce270446b851ffbfcdb55f9ed705441b5b7ed6a2b9bf9cbd140aac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZYN326%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgUyDZPuLf%2B3I7v%2FM%2FvUvdiEs40ZXWF8U9sAM1YoVUyAiA2Bfw5RRD6LQnNOV51Pf%2Bi71q0l2NKiQH6lCu0BuHGNyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMHD44Bo7n1Qsb2AhFKtwDvJlfQ1nncHNQRVJBlkU4IM4Fxl87cqTaNJxt1fSZD535WQmuMSqJD78CswpTq8cO8%2FADLGl1hlZ0egMcUr3wu8c4LWS%2Brl0M152HPyJlTzaQ9EH0uI%2BCAjEpyQF%2Fe52p42EBf7ICSD7ui5RuHhaftuXYn6L2N6VHOg1UousMfFKT2nhLvFbyzuHSucfQ%2FgxHQY5P8RA3KU8M60C73f4mga9DEhBdTF3FjXSzFMglu%2BBAkYdOHuwsxb4ZzrGal%2FuO4J4azeqqJrRYU9iRIPFcEkSlgIiJbFxD81RLvxqEa2ligBsL441tpmR7kXcNUXMWIx5Sz8FKgmQvaybIHkg4HheQHxP9bJpn%2BXzQgapBf8Kiz8hFoH7tYTKxgLYfDA4a6viLF6YyYUoeQuM1xtTuB0DExDKRGqtbYq9fmVRxc5dEkPqbtXcgUgchVrO7qIz6gShZy2iS2fZPy%2B%2BeFn5wZMzhfl7ureoQFXrQ1DFTVzXmwYMHpD060XC680WxFwOMrLViNuMnPluRjB6S6brtSxilPHedDXwRoDK2sfzf%2BDlR46L9wIkphmdYx%2FV0mKQZNphHNDf8LD17oQLB%2F%2FedMoNTijNIJG11rPHuzbhfPqHFHhFeo62hT2cN%2FWww%2FcOJwAY6pgGgZEunSQxOAtvVT8cr2c%2FzZGS8WQX5mMHX2L0WDTjsscbIRXZbADshYyRDIFAo89RMJJZRGR%2FvS4A1gwmjtMtftjoCFdDqGedgKS4nTiiisZcoBZmBu%2B%2BJZ70pw3xt0ql4TXwhO8J7rU0IZ%2Fy1Yd%2F%2BpPQB81pyS00wiv8eNV4qPAfiseb49j3icE1WRmkJbF83iIVpw5yYDxbqDTigHENUefzFUWUi&X-Amz-Signature=b35d4cb06882f400599d5809fcc8be57ea508f20830e007c35ab8ca3c6a423fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
