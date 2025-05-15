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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DE6GDDR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDDigXyR2D6eowPS9ZNys32%2FQQh1W5DcF3S39K5rN4KIAIgEOSJ71sJXwQh17%2BFxW4D9HkCB8BaHhSsK8D3klpGXq0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOk9%2BqGXczGS39oIWircA2TMFGPRNT9fBngw4%2F5hjKBI0APo3Ydp45pL%2BG15yZT%2FygrfOpiiyEkEjXdtLDhLuxBBkhIH89J5ubqBRHq5zvZ3p7HVW1J1CSiuGvSgX2y09LRyuKSvxY8Ip%2BXtHyWWPiK72TVPEaopLzv5HVO9xvwltWADkOdWgjeK6o%2BNtqUvjwT8XHHEENs5ppnTaD0toedwZaYXuC4jMEFzgtDLRfpf7yluPVHFWwSvBhDgtbzNaOzg%2Br33jiH43jNaOR7dtt8YE0FQa6x0EOFSnQ43ODy%2FV0Xu5M48Z8OHvDR5AIIYSdoW9aSsfb0EpBfE4oH8V5%2FOGWMJYEH0jm9Fg1HSmAdEGqxjs%2FnqVXv3%2FFS2HQEkmZBC6zNlgrm%2FVO8EjdkDA27P25gxjZWCbxuzgzvt0A%2BNdemwRmHhYdd6Q7B0OOkvGH1%2ByosqwO1%2BhFVU9apnrvV9aOo%2FXqtwdg95dJG4wCAjT1%2BdsKs7HfmtLTXdxCIBLa7e7zaDilOojSdBYY3XBgv%2BXdyLJjM1eeibxcdGoR4te3wik3fEADJ2BpHDbzN7u6i2M0fMjVID0Hphs0jaqKhKfaFUq4GFPaBTE5xIt9RJcJdYG9C8%2BSpOAhPSFNrTcicBXaGp6lip%2F2WGMLLimcEGOqUBta4x9COg4mfdxxmQu%2B%2Bznbh6l4lf75N%2FRVZx4rRv7rljzVysa6QHCBHnac5dv4GZu%2BcQsm6c6hqIQ%2BpO9r6ptZTGMQwyKe4ZHslyS9XcU5bWz3qB4sXbm%2FVpIz6wNYfti%2BuapJE7Dw6W5w8zGu6vStaCTRO4puKIuEkVuoZtDYn06MW%2BQjoXtzVW16FkQIRBwjYyH%2FFPi1ngwS9MxZ9gcrpMsHuS&X-Amz-Signature=c5a4e38b82b383fc5920e309316e281daffdf26f23e534277a09f6293ea38091&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DE6GDDR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDDigXyR2D6eowPS9ZNys32%2FQQh1W5DcF3S39K5rN4KIAIgEOSJ71sJXwQh17%2BFxW4D9HkCB8BaHhSsK8D3klpGXq0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOk9%2BqGXczGS39oIWircA2TMFGPRNT9fBngw4%2F5hjKBI0APo3Ydp45pL%2BG15yZT%2FygrfOpiiyEkEjXdtLDhLuxBBkhIH89J5ubqBRHq5zvZ3p7HVW1J1CSiuGvSgX2y09LRyuKSvxY8Ip%2BXtHyWWPiK72TVPEaopLzv5HVO9xvwltWADkOdWgjeK6o%2BNtqUvjwT8XHHEENs5ppnTaD0toedwZaYXuC4jMEFzgtDLRfpf7yluPVHFWwSvBhDgtbzNaOzg%2Br33jiH43jNaOR7dtt8YE0FQa6x0EOFSnQ43ODy%2FV0Xu5M48Z8OHvDR5AIIYSdoW9aSsfb0EpBfE4oH8V5%2FOGWMJYEH0jm9Fg1HSmAdEGqxjs%2FnqVXv3%2FFS2HQEkmZBC6zNlgrm%2FVO8EjdkDA27P25gxjZWCbxuzgzvt0A%2BNdemwRmHhYdd6Q7B0OOkvGH1%2ByosqwO1%2BhFVU9apnrvV9aOo%2FXqtwdg95dJG4wCAjT1%2BdsKs7HfmtLTXdxCIBLa7e7zaDilOojSdBYY3XBgv%2BXdyLJjM1eeibxcdGoR4te3wik3fEADJ2BpHDbzN7u6i2M0fMjVID0Hphs0jaqKhKfaFUq4GFPaBTE5xIt9RJcJdYG9C8%2BSpOAhPSFNrTcicBXaGp6lip%2F2WGMLLimcEGOqUBta4x9COg4mfdxxmQu%2B%2Bznbh6l4lf75N%2FRVZx4rRv7rljzVysa6QHCBHnac5dv4GZu%2BcQsm6c6hqIQ%2BpO9r6ptZTGMQwyKe4ZHslyS9XcU5bWz3qB4sXbm%2FVpIz6wNYfti%2BuapJE7Dw6W5w8zGu6vStaCTRO4puKIuEkVuoZtDYn06MW%2BQjoXtzVW16FkQIRBwjYyH%2FFPi1ngwS9MxZ9gcrpMsHuS&X-Amz-Signature=4eb2415a831129589961f46274fcdb544b5c068838a9e2b966f100cc315759ec&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DE6GDDR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDDigXyR2D6eowPS9ZNys32%2FQQh1W5DcF3S39K5rN4KIAIgEOSJ71sJXwQh17%2BFxW4D9HkCB8BaHhSsK8D3klpGXq0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOk9%2BqGXczGS39oIWircA2TMFGPRNT9fBngw4%2F5hjKBI0APo3Ydp45pL%2BG15yZT%2FygrfOpiiyEkEjXdtLDhLuxBBkhIH89J5ubqBRHq5zvZ3p7HVW1J1CSiuGvSgX2y09LRyuKSvxY8Ip%2BXtHyWWPiK72TVPEaopLzv5HVO9xvwltWADkOdWgjeK6o%2BNtqUvjwT8XHHEENs5ppnTaD0toedwZaYXuC4jMEFzgtDLRfpf7yluPVHFWwSvBhDgtbzNaOzg%2Br33jiH43jNaOR7dtt8YE0FQa6x0EOFSnQ43ODy%2FV0Xu5M48Z8OHvDR5AIIYSdoW9aSsfb0EpBfE4oH8V5%2FOGWMJYEH0jm9Fg1HSmAdEGqxjs%2FnqVXv3%2FFS2HQEkmZBC6zNlgrm%2FVO8EjdkDA27P25gxjZWCbxuzgzvt0A%2BNdemwRmHhYdd6Q7B0OOkvGH1%2ByosqwO1%2BhFVU9apnrvV9aOo%2FXqtwdg95dJG4wCAjT1%2BdsKs7HfmtLTXdxCIBLa7e7zaDilOojSdBYY3XBgv%2BXdyLJjM1eeibxcdGoR4te3wik3fEADJ2BpHDbzN7u6i2M0fMjVID0Hphs0jaqKhKfaFUq4GFPaBTE5xIt9RJcJdYG9C8%2BSpOAhPSFNrTcicBXaGp6lip%2F2WGMLLimcEGOqUBta4x9COg4mfdxxmQu%2B%2Bznbh6l4lf75N%2FRVZx4rRv7rljzVysa6QHCBHnac5dv4GZu%2BcQsm6c6hqIQ%2BpO9r6ptZTGMQwyKe4ZHslyS9XcU5bWz3qB4sXbm%2FVpIz6wNYfti%2BuapJE7Dw6W5w8zGu6vStaCTRO4puKIuEkVuoZtDYn06MW%2BQjoXtzVW16FkQIRBwjYyH%2FFPi1ngwS9MxZ9gcrpMsHuS&X-Amz-Signature=3c02b236df076c3c5be12223db9e388bbf52b37ee783183bb90cc82af0b6f964&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DE6GDDR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDDigXyR2D6eowPS9ZNys32%2FQQh1W5DcF3S39K5rN4KIAIgEOSJ71sJXwQh17%2BFxW4D9HkCB8BaHhSsK8D3klpGXq0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOk9%2BqGXczGS39oIWircA2TMFGPRNT9fBngw4%2F5hjKBI0APo3Ydp45pL%2BG15yZT%2FygrfOpiiyEkEjXdtLDhLuxBBkhIH89J5ubqBRHq5zvZ3p7HVW1J1CSiuGvSgX2y09LRyuKSvxY8Ip%2BXtHyWWPiK72TVPEaopLzv5HVO9xvwltWADkOdWgjeK6o%2BNtqUvjwT8XHHEENs5ppnTaD0toedwZaYXuC4jMEFzgtDLRfpf7yluPVHFWwSvBhDgtbzNaOzg%2Br33jiH43jNaOR7dtt8YE0FQa6x0EOFSnQ43ODy%2FV0Xu5M48Z8OHvDR5AIIYSdoW9aSsfb0EpBfE4oH8V5%2FOGWMJYEH0jm9Fg1HSmAdEGqxjs%2FnqVXv3%2FFS2HQEkmZBC6zNlgrm%2FVO8EjdkDA27P25gxjZWCbxuzgzvt0A%2BNdemwRmHhYdd6Q7B0OOkvGH1%2ByosqwO1%2BhFVU9apnrvV9aOo%2FXqtwdg95dJG4wCAjT1%2BdsKs7HfmtLTXdxCIBLa7e7zaDilOojSdBYY3XBgv%2BXdyLJjM1eeibxcdGoR4te3wik3fEADJ2BpHDbzN7u6i2M0fMjVID0Hphs0jaqKhKfaFUq4GFPaBTE5xIt9RJcJdYG9C8%2BSpOAhPSFNrTcicBXaGp6lip%2F2WGMLLimcEGOqUBta4x9COg4mfdxxmQu%2B%2Bznbh6l4lf75N%2FRVZx4rRv7rljzVysa6QHCBHnac5dv4GZu%2BcQsm6c6hqIQ%2BpO9r6ptZTGMQwyKe4ZHslyS9XcU5bWz3qB4sXbm%2FVpIz6wNYfti%2BuapJE7Dw6W5w8zGu6vStaCTRO4puKIuEkVuoZtDYn06MW%2BQjoXtzVW16FkQIRBwjYyH%2FFPi1ngwS9MxZ9gcrpMsHuS&X-Amz-Signature=5ae3ef1f0c0bcbf78b895654e19c040db73c79e55c256c555b93994295822e9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DE6GDDR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDDigXyR2D6eowPS9ZNys32%2FQQh1W5DcF3S39K5rN4KIAIgEOSJ71sJXwQh17%2BFxW4D9HkCB8BaHhSsK8D3klpGXq0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOk9%2BqGXczGS39oIWircA2TMFGPRNT9fBngw4%2F5hjKBI0APo3Ydp45pL%2BG15yZT%2FygrfOpiiyEkEjXdtLDhLuxBBkhIH89J5ubqBRHq5zvZ3p7HVW1J1CSiuGvSgX2y09LRyuKSvxY8Ip%2BXtHyWWPiK72TVPEaopLzv5HVO9xvwltWADkOdWgjeK6o%2BNtqUvjwT8XHHEENs5ppnTaD0toedwZaYXuC4jMEFzgtDLRfpf7yluPVHFWwSvBhDgtbzNaOzg%2Br33jiH43jNaOR7dtt8YE0FQa6x0EOFSnQ43ODy%2FV0Xu5M48Z8OHvDR5AIIYSdoW9aSsfb0EpBfE4oH8V5%2FOGWMJYEH0jm9Fg1HSmAdEGqxjs%2FnqVXv3%2FFS2HQEkmZBC6zNlgrm%2FVO8EjdkDA27P25gxjZWCbxuzgzvt0A%2BNdemwRmHhYdd6Q7B0OOkvGH1%2ByosqwO1%2BhFVU9apnrvV9aOo%2FXqtwdg95dJG4wCAjT1%2BdsKs7HfmtLTXdxCIBLa7e7zaDilOojSdBYY3XBgv%2BXdyLJjM1eeibxcdGoR4te3wik3fEADJ2BpHDbzN7u6i2M0fMjVID0Hphs0jaqKhKfaFUq4GFPaBTE5xIt9RJcJdYG9C8%2BSpOAhPSFNrTcicBXaGp6lip%2F2WGMLLimcEGOqUBta4x9COg4mfdxxmQu%2B%2Bznbh6l4lf75N%2FRVZx4rRv7rljzVysa6QHCBHnac5dv4GZu%2BcQsm6c6hqIQ%2BpO9r6ptZTGMQwyKe4ZHslyS9XcU5bWz3qB4sXbm%2FVpIz6wNYfti%2BuapJE7Dw6W5w8zGu6vStaCTRO4puKIuEkVuoZtDYn06MW%2BQjoXtzVW16FkQIRBwjYyH%2FFPi1ngwS9MxZ9gcrpMsHuS&X-Amz-Signature=bca77b203a27cdbcef1fc137c6733e1c38c4df8c158f75820e7b860869959993&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
