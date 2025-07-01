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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCG463V%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErAA%2BzbRSQi%2FBopizMS3xBgyhogsZeyiT5cJQy0DMxMAiB%2BJrXj1zO7EhGhu0fjBgAkX1AgAE1jFwbMT3nGV11fDCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLOM2Lz2IQRz7pLAdKtwDqRFdQgqy0s0gHQyH%2BMRC5uKTIB4pGL9TQZWOA6AiB%2Fs13TtdYizH1UO8Vu%2BW1lFmqy3qFMbr4zxTaV3YIWNr6wjXzBeXAh7yOSorLV6EOuxxQpZ77RrzukNgGGBtCOPcwhWCo3XxTZs0bd%2B3Z7ZXF391MU7sTc8ExPS%2F06lHJmRToHzwgnsHO7qR8dPCkygKpqHINeR4BKBg11UF05MzaxwMTbWMwayb1Mu7chkZWwPvcDfp2KzZSt3KwT3IaCFDZ6iJ2kFZdFw9NUDtvKZsEGdG2kx2fj6I8gp0Oy%2FDZuQi4wfhqmBcIkOo1m2ORgsHffY7CYhZKJIqm8LVa9YE0KSeaHmLLMFW%2BEzPMtCWl5WXPdi3xCngR4Xey6UYtEhDqggcewS2syCzz0EjOww9CIJqCGThkk4dwrqi6TW9zlkCAeAJHE5e%2F4J5KQ9dXLprtZh4Jak1Z3C3opBKwjl9yW%2B3yJ%2F0VeryNHtAEuRGtgHIENu7Dt3%2BhCleYMn1zWnwu98nGlrUlkIvdOwnPWw1cVSqX6amIMLxMK1g4PwrcWDqLnsZpjdueTiFAyfodt%2FR42Nh2Vl7HF3C4r2CnDZvCC3q7wkewNWp89O%2FsG6yGq6WAHF0SW3m7R8r52YwoaONwwY6pgF8drOeKP%2Fl4FSSqJ6Oxjw8SDiPh%2FHpg0FZX%2BX5SWY1f5d2poXcYITStPXCuCsUwfoV7o2KLQtyEHYuhNg%2BkDK2YRuy0MBE1ZhXefa1APzq087yd68xnqI5zUZZjn2NzsBRr2Dk4CkT1kEQcZJPj28frofW%2BqDzKOy4PWYFvRHW%2F%2FxgtifDvsVZwnp%2BEPy3Y5VxIHYlQMFFMxlwYC3jKf4hkTAaCpdR&X-Amz-Signature=682e7af12d15533f639035b16ae20d739d724c615d1fc9732dfa9422d0ae067f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCG463V%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErAA%2BzbRSQi%2FBopizMS3xBgyhogsZeyiT5cJQy0DMxMAiB%2BJrXj1zO7EhGhu0fjBgAkX1AgAE1jFwbMT3nGV11fDCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLOM2Lz2IQRz7pLAdKtwDqRFdQgqy0s0gHQyH%2BMRC5uKTIB4pGL9TQZWOA6AiB%2Fs13TtdYizH1UO8Vu%2BW1lFmqy3qFMbr4zxTaV3YIWNr6wjXzBeXAh7yOSorLV6EOuxxQpZ77RrzukNgGGBtCOPcwhWCo3XxTZs0bd%2B3Z7ZXF391MU7sTc8ExPS%2F06lHJmRToHzwgnsHO7qR8dPCkygKpqHINeR4BKBg11UF05MzaxwMTbWMwayb1Mu7chkZWwPvcDfp2KzZSt3KwT3IaCFDZ6iJ2kFZdFw9NUDtvKZsEGdG2kx2fj6I8gp0Oy%2FDZuQi4wfhqmBcIkOo1m2ORgsHffY7CYhZKJIqm8LVa9YE0KSeaHmLLMFW%2BEzPMtCWl5WXPdi3xCngR4Xey6UYtEhDqggcewS2syCzz0EjOww9CIJqCGThkk4dwrqi6TW9zlkCAeAJHE5e%2F4J5KQ9dXLprtZh4Jak1Z3C3opBKwjl9yW%2B3yJ%2F0VeryNHtAEuRGtgHIENu7Dt3%2BhCleYMn1zWnwu98nGlrUlkIvdOwnPWw1cVSqX6amIMLxMK1g4PwrcWDqLnsZpjdueTiFAyfodt%2FR42Nh2Vl7HF3C4r2CnDZvCC3q7wkewNWp89O%2FsG6yGq6WAHF0SW3m7R8r52YwoaONwwY6pgF8drOeKP%2Fl4FSSqJ6Oxjw8SDiPh%2FHpg0FZX%2BX5SWY1f5d2poXcYITStPXCuCsUwfoV7o2KLQtyEHYuhNg%2BkDK2YRuy0MBE1ZhXefa1APzq087yd68xnqI5zUZZjn2NzsBRr2Dk4CkT1kEQcZJPj28frofW%2BqDzKOy4PWYFvRHW%2F%2FxgtifDvsVZwnp%2BEPy3Y5VxIHYlQMFFMxlwYC3jKf4hkTAaCpdR&X-Amz-Signature=2f011be818b9958114b3d69c9b0f793272ea0d301e980e346b299ecc41690f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCG463V%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErAA%2BzbRSQi%2FBopizMS3xBgyhogsZeyiT5cJQy0DMxMAiB%2BJrXj1zO7EhGhu0fjBgAkX1AgAE1jFwbMT3nGV11fDCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLOM2Lz2IQRz7pLAdKtwDqRFdQgqy0s0gHQyH%2BMRC5uKTIB4pGL9TQZWOA6AiB%2Fs13TtdYizH1UO8Vu%2BW1lFmqy3qFMbr4zxTaV3YIWNr6wjXzBeXAh7yOSorLV6EOuxxQpZ77RrzukNgGGBtCOPcwhWCo3XxTZs0bd%2B3Z7ZXF391MU7sTc8ExPS%2F06lHJmRToHzwgnsHO7qR8dPCkygKpqHINeR4BKBg11UF05MzaxwMTbWMwayb1Mu7chkZWwPvcDfp2KzZSt3KwT3IaCFDZ6iJ2kFZdFw9NUDtvKZsEGdG2kx2fj6I8gp0Oy%2FDZuQi4wfhqmBcIkOo1m2ORgsHffY7CYhZKJIqm8LVa9YE0KSeaHmLLMFW%2BEzPMtCWl5WXPdi3xCngR4Xey6UYtEhDqggcewS2syCzz0EjOww9CIJqCGThkk4dwrqi6TW9zlkCAeAJHE5e%2F4J5KQ9dXLprtZh4Jak1Z3C3opBKwjl9yW%2B3yJ%2F0VeryNHtAEuRGtgHIENu7Dt3%2BhCleYMn1zWnwu98nGlrUlkIvdOwnPWw1cVSqX6amIMLxMK1g4PwrcWDqLnsZpjdueTiFAyfodt%2FR42Nh2Vl7HF3C4r2CnDZvCC3q7wkewNWp89O%2FsG6yGq6WAHF0SW3m7R8r52YwoaONwwY6pgF8drOeKP%2Fl4FSSqJ6Oxjw8SDiPh%2FHpg0FZX%2BX5SWY1f5d2poXcYITStPXCuCsUwfoV7o2KLQtyEHYuhNg%2BkDK2YRuy0MBE1ZhXefa1APzq087yd68xnqI5zUZZjn2NzsBRr2Dk4CkT1kEQcZJPj28frofW%2BqDzKOy4PWYFvRHW%2F%2FxgtifDvsVZwnp%2BEPy3Y5VxIHYlQMFFMxlwYC3jKf4hkTAaCpdR&X-Amz-Signature=c62396e36c474ff9fcfa62bac4c7d32b5ebc0f47676af95bfddd9ff65e89c5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCG463V%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErAA%2BzbRSQi%2FBopizMS3xBgyhogsZeyiT5cJQy0DMxMAiB%2BJrXj1zO7EhGhu0fjBgAkX1AgAE1jFwbMT3nGV11fDCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLOM2Lz2IQRz7pLAdKtwDqRFdQgqy0s0gHQyH%2BMRC5uKTIB4pGL9TQZWOA6AiB%2Fs13TtdYizH1UO8Vu%2BW1lFmqy3qFMbr4zxTaV3YIWNr6wjXzBeXAh7yOSorLV6EOuxxQpZ77RrzukNgGGBtCOPcwhWCo3XxTZs0bd%2B3Z7ZXF391MU7sTc8ExPS%2F06lHJmRToHzwgnsHO7qR8dPCkygKpqHINeR4BKBg11UF05MzaxwMTbWMwayb1Mu7chkZWwPvcDfp2KzZSt3KwT3IaCFDZ6iJ2kFZdFw9NUDtvKZsEGdG2kx2fj6I8gp0Oy%2FDZuQi4wfhqmBcIkOo1m2ORgsHffY7CYhZKJIqm8LVa9YE0KSeaHmLLMFW%2BEzPMtCWl5WXPdi3xCngR4Xey6UYtEhDqggcewS2syCzz0EjOww9CIJqCGThkk4dwrqi6TW9zlkCAeAJHE5e%2F4J5KQ9dXLprtZh4Jak1Z3C3opBKwjl9yW%2B3yJ%2F0VeryNHtAEuRGtgHIENu7Dt3%2BhCleYMn1zWnwu98nGlrUlkIvdOwnPWw1cVSqX6amIMLxMK1g4PwrcWDqLnsZpjdueTiFAyfodt%2FR42Nh2Vl7HF3C4r2CnDZvCC3q7wkewNWp89O%2FsG6yGq6WAHF0SW3m7R8r52YwoaONwwY6pgF8drOeKP%2Fl4FSSqJ6Oxjw8SDiPh%2FHpg0FZX%2BX5SWY1f5d2poXcYITStPXCuCsUwfoV7o2KLQtyEHYuhNg%2BkDK2YRuy0MBE1ZhXefa1APzq087yd68xnqI5zUZZjn2NzsBRr2Dk4CkT1kEQcZJPj28frofW%2BqDzKOy4PWYFvRHW%2F%2FxgtifDvsVZwnp%2BEPy3Y5VxIHYlQMFFMxlwYC3jKf4hkTAaCpdR&X-Amz-Signature=aeec719075064218c9e90b42ad6638ca87570d72e34d669825953fb18ff91747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCG463V%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErAA%2BzbRSQi%2FBopizMS3xBgyhogsZeyiT5cJQy0DMxMAiB%2BJrXj1zO7EhGhu0fjBgAkX1AgAE1jFwbMT3nGV11fDCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLOM2Lz2IQRz7pLAdKtwDqRFdQgqy0s0gHQyH%2BMRC5uKTIB4pGL9TQZWOA6AiB%2Fs13TtdYizH1UO8Vu%2BW1lFmqy3qFMbr4zxTaV3YIWNr6wjXzBeXAh7yOSorLV6EOuxxQpZ77RrzukNgGGBtCOPcwhWCo3XxTZs0bd%2B3Z7ZXF391MU7sTc8ExPS%2F06lHJmRToHzwgnsHO7qR8dPCkygKpqHINeR4BKBg11UF05MzaxwMTbWMwayb1Mu7chkZWwPvcDfp2KzZSt3KwT3IaCFDZ6iJ2kFZdFw9NUDtvKZsEGdG2kx2fj6I8gp0Oy%2FDZuQi4wfhqmBcIkOo1m2ORgsHffY7CYhZKJIqm8LVa9YE0KSeaHmLLMFW%2BEzPMtCWl5WXPdi3xCngR4Xey6UYtEhDqggcewS2syCzz0EjOww9CIJqCGThkk4dwrqi6TW9zlkCAeAJHE5e%2F4J5KQ9dXLprtZh4Jak1Z3C3opBKwjl9yW%2B3yJ%2F0VeryNHtAEuRGtgHIENu7Dt3%2BhCleYMn1zWnwu98nGlrUlkIvdOwnPWw1cVSqX6amIMLxMK1g4PwrcWDqLnsZpjdueTiFAyfodt%2FR42Nh2Vl7HF3C4r2CnDZvCC3q7wkewNWp89O%2FsG6yGq6WAHF0SW3m7R8r52YwoaONwwY6pgF8drOeKP%2Fl4FSSqJ6Oxjw8SDiPh%2FHpg0FZX%2BX5SWY1f5d2poXcYITStPXCuCsUwfoV7o2KLQtyEHYuhNg%2BkDK2YRuy0MBE1ZhXefa1APzq087yd68xnqI5zUZZjn2NzsBRr2Dk4CkT1kEQcZJPj28frofW%2BqDzKOy4PWYFvRHW%2F%2FxgtifDvsVZwnp%2BEPy3Y5VxIHYlQMFFMxlwYC3jKf4hkTAaCpdR&X-Amz-Signature=c913bdd0ef7ea70d43be0fb9379dea64ce00c5aa48b73402d68a578ea523aabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
