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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HARFXC4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIELAd%2F16WLEJth2scUQpSD%2FgWV0tOzJ0nVV77lOioSkAAiAQbtoC18SPBteiX4w1cqUTQ50cAYvBSAVxfEgnqlZ0rCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZnPyNG6Zqr1i5K%2BKtwDHvrlawmJP1mev%2FrEw4PMplzNWD65OGzsa0squkCa7cA2izR3wrhyl4Vff45HU5TarOkWBPkr%2FG85tlPsf2qcFIZmbXT8WKL%2BbchtsvIxd%2F9bjITpNSL74UAoXOWW4oo1wNRQIOe9IMNwUFJI%2BFmweAG%2BKdt6Zh%2BNgVuCdsuKecu7JXed7qrfAKZMdi5JQcsqSZ7WGShiC9K364ZWkVN%2FDG5YwOpH%2FvXsPmK9gg%2F93qOfaoNkuqMZ8lTWDKGiipsQ52tLwbUFdv06m7MaorjWvSZt7uAB8k7ZTpYsCh24SFYk86wievqmVWOCDWIk%2Buw2gsgd0b2KsNgCaia3MJBRDM2kRs8LLmnThEPGDPwKilhfPoos2EuBcqHEzHI5s2nlSLEfEbpownWPDuOBxUbeXkp0K6EW%2F9yh1JFD9KWAajQYaYDD4KjLc9jrDkJG9B1ZsyC0GuX1lk9xK1qCRS%2B82NgVBePZTAAOJJYbNcMApu0fLGsTQLGFLBeJaCN3tFaawCj6lfKZDeUMaN5D1yBWUQvvaK6VUejaPRIrkHpVKdsOytHB9vmwZIo7gnNEvAUTUYaRt%2Bgt4ttOEozSufgVQ6x8ykghBCHVIeKBg5FOZxiVTLqMoJDyNNNLfpAw3IWawAY6pgGogEijuQph2O%2F717g37LufGH4g7sr%2BarGyJILxG7ah39relt4wZUTbEPDsFuAjgBddtlAmvCYIxunTO2OHODyLNbYS3shKKNFke2LGRDvnBSBBMMWtcUbb9xV0k7V%2BCnHOyZQ%2FcP8ZK31EkH4%2BqyCwGMOp5uqiH33cL8YOphW2b5t234kIsRvkYhUyc1qfs58YusXI3hTgEW%2BJaoGBdQES3DFTzzYu&X-Amz-Signature=b35b01219338c4652099614dc1ecdffbbfe0d39f3740c22f7443a48b054bea16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HARFXC4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIELAd%2F16WLEJth2scUQpSD%2FgWV0tOzJ0nVV77lOioSkAAiAQbtoC18SPBteiX4w1cqUTQ50cAYvBSAVxfEgnqlZ0rCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZnPyNG6Zqr1i5K%2BKtwDHvrlawmJP1mev%2FrEw4PMplzNWD65OGzsa0squkCa7cA2izR3wrhyl4Vff45HU5TarOkWBPkr%2FG85tlPsf2qcFIZmbXT8WKL%2BbchtsvIxd%2F9bjITpNSL74UAoXOWW4oo1wNRQIOe9IMNwUFJI%2BFmweAG%2BKdt6Zh%2BNgVuCdsuKecu7JXed7qrfAKZMdi5JQcsqSZ7WGShiC9K364ZWkVN%2FDG5YwOpH%2FvXsPmK9gg%2F93qOfaoNkuqMZ8lTWDKGiipsQ52tLwbUFdv06m7MaorjWvSZt7uAB8k7ZTpYsCh24SFYk86wievqmVWOCDWIk%2Buw2gsgd0b2KsNgCaia3MJBRDM2kRs8LLmnThEPGDPwKilhfPoos2EuBcqHEzHI5s2nlSLEfEbpownWPDuOBxUbeXkp0K6EW%2F9yh1JFD9KWAajQYaYDD4KjLc9jrDkJG9B1ZsyC0GuX1lk9xK1qCRS%2B82NgVBePZTAAOJJYbNcMApu0fLGsTQLGFLBeJaCN3tFaawCj6lfKZDeUMaN5D1yBWUQvvaK6VUejaPRIrkHpVKdsOytHB9vmwZIo7gnNEvAUTUYaRt%2Bgt4ttOEozSufgVQ6x8ykghBCHVIeKBg5FOZxiVTLqMoJDyNNNLfpAw3IWawAY6pgGogEijuQph2O%2F717g37LufGH4g7sr%2BarGyJILxG7ah39relt4wZUTbEPDsFuAjgBddtlAmvCYIxunTO2OHODyLNbYS3shKKNFke2LGRDvnBSBBMMWtcUbb9xV0k7V%2BCnHOyZQ%2FcP8ZK31EkH4%2BqyCwGMOp5uqiH33cL8YOphW2b5t234kIsRvkYhUyc1qfs58YusXI3hTgEW%2BJaoGBdQES3DFTzzYu&X-Amz-Signature=a1dd6ae9354dae0c0b70b56787b30cf78d18c433b54293d624be76096b55e93e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HARFXC4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIELAd%2F16WLEJth2scUQpSD%2FgWV0tOzJ0nVV77lOioSkAAiAQbtoC18SPBteiX4w1cqUTQ50cAYvBSAVxfEgnqlZ0rCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZnPyNG6Zqr1i5K%2BKtwDHvrlawmJP1mev%2FrEw4PMplzNWD65OGzsa0squkCa7cA2izR3wrhyl4Vff45HU5TarOkWBPkr%2FG85tlPsf2qcFIZmbXT8WKL%2BbchtsvIxd%2F9bjITpNSL74UAoXOWW4oo1wNRQIOe9IMNwUFJI%2BFmweAG%2BKdt6Zh%2BNgVuCdsuKecu7JXed7qrfAKZMdi5JQcsqSZ7WGShiC9K364ZWkVN%2FDG5YwOpH%2FvXsPmK9gg%2F93qOfaoNkuqMZ8lTWDKGiipsQ52tLwbUFdv06m7MaorjWvSZt7uAB8k7ZTpYsCh24SFYk86wievqmVWOCDWIk%2Buw2gsgd0b2KsNgCaia3MJBRDM2kRs8LLmnThEPGDPwKilhfPoos2EuBcqHEzHI5s2nlSLEfEbpownWPDuOBxUbeXkp0K6EW%2F9yh1JFD9KWAajQYaYDD4KjLc9jrDkJG9B1ZsyC0GuX1lk9xK1qCRS%2B82NgVBePZTAAOJJYbNcMApu0fLGsTQLGFLBeJaCN3tFaawCj6lfKZDeUMaN5D1yBWUQvvaK6VUejaPRIrkHpVKdsOytHB9vmwZIo7gnNEvAUTUYaRt%2Bgt4ttOEozSufgVQ6x8ykghBCHVIeKBg5FOZxiVTLqMoJDyNNNLfpAw3IWawAY6pgGogEijuQph2O%2F717g37LufGH4g7sr%2BarGyJILxG7ah39relt4wZUTbEPDsFuAjgBddtlAmvCYIxunTO2OHODyLNbYS3shKKNFke2LGRDvnBSBBMMWtcUbb9xV0k7V%2BCnHOyZQ%2FcP8ZK31EkH4%2BqyCwGMOp5uqiH33cL8YOphW2b5t234kIsRvkYhUyc1qfs58YusXI3hTgEW%2BJaoGBdQES3DFTzzYu&X-Amz-Signature=99d37fcb7dcd119a6e40e72b496169a6668a9da5122b448c8f257eadfabc41f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HARFXC4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIELAd%2F16WLEJth2scUQpSD%2FgWV0tOzJ0nVV77lOioSkAAiAQbtoC18SPBteiX4w1cqUTQ50cAYvBSAVxfEgnqlZ0rCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZnPyNG6Zqr1i5K%2BKtwDHvrlawmJP1mev%2FrEw4PMplzNWD65OGzsa0squkCa7cA2izR3wrhyl4Vff45HU5TarOkWBPkr%2FG85tlPsf2qcFIZmbXT8WKL%2BbchtsvIxd%2F9bjITpNSL74UAoXOWW4oo1wNRQIOe9IMNwUFJI%2BFmweAG%2BKdt6Zh%2BNgVuCdsuKecu7JXed7qrfAKZMdi5JQcsqSZ7WGShiC9K364ZWkVN%2FDG5YwOpH%2FvXsPmK9gg%2F93qOfaoNkuqMZ8lTWDKGiipsQ52tLwbUFdv06m7MaorjWvSZt7uAB8k7ZTpYsCh24SFYk86wievqmVWOCDWIk%2Buw2gsgd0b2KsNgCaia3MJBRDM2kRs8LLmnThEPGDPwKilhfPoos2EuBcqHEzHI5s2nlSLEfEbpownWPDuOBxUbeXkp0K6EW%2F9yh1JFD9KWAajQYaYDD4KjLc9jrDkJG9B1ZsyC0GuX1lk9xK1qCRS%2B82NgVBePZTAAOJJYbNcMApu0fLGsTQLGFLBeJaCN3tFaawCj6lfKZDeUMaN5D1yBWUQvvaK6VUejaPRIrkHpVKdsOytHB9vmwZIo7gnNEvAUTUYaRt%2Bgt4ttOEozSufgVQ6x8ykghBCHVIeKBg5FOZxiVTLqMoJDyNNNLfpAw3IWawAY6pgGogEijuQph2O%2F717g37LufGH4g7sr%2BarGyJILxG7ah39relt4wZUTbEPDsFuAjgBddtlAmvCYIxunTO2OHODyLNbYS3shKKNFke2LGRDvnBSBBMMWtcUbb9xV0k7V%2BCnHOyZQ%2FcP8ZK31EkH4%2BqyCwGMOp5uqiH33cL8YOphW2b5t234kIsRvkYhUyc1qfs58YusXI3hTgEW%2BJaoGBdQES3DFTzzYu&X-Amz-Signature=4feb645759a26d468e77f6a173b30bf95c6cc2da87ebbf84d27b5bda41cde288&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HARFXC4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIELAd%2F16WLEJth2scUQpSD%2FgWV0tOzJ0nVV77lOioSkAAiAQbtoC18SPBteiX4w1cqUTQ50cAYvBSAVxfEgnqlZ0rCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZnPyNG6Zqr1i5K%2BKtwDHvrlawmJP1mev%2FrEw4PMplzNWD65OGzsa0squkCa7cA2izR3wrhyl4Vff45HU5TarOkWBPkr%2FG85tlPsf2qcFIZmbXT8WKL%2BbchtsvIxd%2F9bjITpNSL74UAoXOWW4oo1wNRQIOe9IMNwUFJI%2BFmweAG%2BKdt6Zh%2BNgVuCdsuKecu7JXed7qrfAKZMdi5JQcsqSZ7WGShiC9K364ZWkVN%2FDG5YwOpH%2FvXsPmK9gg%2F93qOfaoNkuqMZ8lTWDKGiipsQ52tLwbUFdv06m7MaorjWvSZt7uAB8k7ZTpYsCh24SFYk86wievqmVWOCDWIk%2Buw2gsgd0b2KsNgCaia3MJBRDM2kRs8LLmnThEPGDPwKilhfPoos2EuBcqHEzHI5s2nlSLEfEbpownWPDuOBxUbeXkp0K6EW%2F9yh1JFD9KWAajQYaYDD4KjLc9jrDkJG9B1ZsyC0GuX1lk9xK1qCRS%2B82NgVBePZTAAOJJYbNcMApu0fLGsTQLGFLBeJaCN3tFaawCj6lfKZDeUMaN5D1yBWUQvvaK6VUejaPRIrkHpVKdsOytHB9vmwZIo7gnNEvAUTUYaRt%2Bgt4ttOEozSufgVQ6x8ykghBCHVIeKBg5FOZxiVTLqMoJDyNNNLfpAw3IWawAY6pgGogEijuQph2O%2F717g37LufGH4g7sr%2BarGyJILxG7ah39relt4wZUTbEPDsFuAjgBddtlAmvCYIxunTO2OHODyLNbYS3shKKNFke2LGRDvnBSBBMMWtcUbb9xV0k7V%2BCnHOyZQ%2FcP8ZK31EkH4%2BqyCwGMOp5uqiH33cL8YOphW2b5t234kIsRvkYhUyc1qfs58YusXI3hTgEW%2BJaoGBdQES3DFTzzYu&X-Amz-Signature=ffb1d5c0b508b43d4ecbe3a22b3277c2b804db8aadc7211fc063c25cf6c260bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
