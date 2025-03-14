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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZYBR2T%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxnC5BYYybs1cRKvFrg8vtUKJcR5dSMH6hSouFVSMvFAiA08ck1Ac1COPt8IA1oXepvyGIJMcLwy7LwedfTLaKw0SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMRAFnYNaimG%2F2Bz9KtwDCiFqiL0WIiIGHptIgEz1eQqJKEqqgL5wt5Pve7qmxHpJoDJhKb9fAUC2Sv4TB9HuQWqcanxglZVaP7hc8M1aQySssQtwrKsqxZdZdvqpGPBq1VXsZTSxHQU3VYHkGjnxadOSq96y8GfBTYfp2el3oeuJa9Sp7TkA0NO2U7lLwNGzr9J1PDv%2BQ8EeSqMX%2ByYgqP%2Bs4pTiNM4wuhCaUjJj4rtt0icsMfNjPg4U22aQNqut1%2B39LurvJzPOXVyxMyQzXcvW%2BM%2Fopu9FIjHLGM8Y5OR8XVeUpZK%2BzXlepBRRU9kBMmY2Qp9XcYKhRll937U%2BiHdxFto4tspjshQKl3KM0uy%2BeKr%2Fm6We3%2FH9%2BUTXKUrm54g7lrqoHtaOAg2wSYf6Vh9hJoXzuZoYprkZgcjO67MA1noEjuOT8iX7BrT7%2Fi3IzmbLWokA44iTElSuXCVgHs3fvrJBP8LHrbmRk63r7CcKBp4wb8M3btQAUaMbkiZtsHWw1mkA%2B%2BiqV6KjRG0s%2Bz%2Fjq01Mm7GsgNqZTSzIgWGeocnJIzDIur31MQtCxjE6ulKGGXH2aBxGUpz2junPWeynYeKzrldEKGVxJ7sdYRbjatrm0Rf%2FJT09PNdtkT6%2F6uPlu%2BNeZE1qckow%2Fe7RvgY6pgGl06xc8X8CTl05D2FW%2FmPm9qtaH0AmmWPn35W0fl5fBoE8RB0Jzw2qr0kG01%2FLhKEzPJF4pL%2Bv%2FQ7nGgaAtkZM3yGt9hDymm1wAwtZTB6%2F3UWMkyv0383uDLtN63BD5i6D1L9bYqMk7s3oHXd05%2BibUvsVllvIhsyHz%2B2C6lAjQ4TLFjwcybu%2Bc%2FkxdIK8pXk2%2BcfspGuFG4vjt1Hd46wBslQrY35r&X-Amz-Signature=6c8493e14a7c36afb78fa9850fa6401a808641a450deae003c390db571ca49de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZYBR2T%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxnC5BYYybs1cRKvFrg8vtUKJcR5dSMH6hSouFVSMvFAiA08ck1Ac1COPt8IA1oXepvyGIJMcLwy7LwedfTLaKw0SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMRAFnYNaimG%2F2Bz9KtwDCiFqiL0WIiIGHptIgEz1eQqJKEqqgL5wt5Pve7qmxHpJoDJhKb9fAUC2Sv4TB9HuQWqcanxglZVaP7hc8M1aQySssQtwrKsqxZdZdvqpGPBq1VXsZTSxHQU3VYHkGjnxadOSq96y8GfBTYfp2el3oeuJa9Sp7TkA0NO2U7lLwNGzr9J1PDv%2BQ8EeSqMX%2ByYgqP%2Bs4pTiNM4wuhCaUjJj4rtt0icsMfNjPg4U22aQNqut1%2B39LurvJzPOXVyxMyQzXcvW%2BM%2Fopu9FIjHLGM8Y5OR8XVeUpZK%2BzXlepBRRU9kBMmY2Qp9XcYKhRll937U%2BiHdxFto4tspjshQKl3KM0uy%2BeKr%2Fm6We3%2FH9%2BUTXKUrm54g7lrqoHtaOAg2wSYf6Vh9hJoXzuZoYprkZgcjO67MA1noEjuOT8iX7BrT7%2Fi3IzmbLWokA44iTElSuXCVgHs3fvrJBP8LHrbmRk63r7CcKBp4wb8M3btQAUaMbkiZtsHWw1mkA%2B%2BiqV6KjRG0s%2Bz%2Fjq01Mm7GsgNqZTSzIgWGeocnJIzDIur31MQtCxjE6ulKGGXH2aBxGUpz2junPWeynYeKzrldEKGVxJ7sdYRbjatrm0Rf%2FJT09PNdtkT6%2F6uPlu%2BNeZE1qckow%2Fe7RvgY6pgGl06xc8X8CTl05D2FW%2FmPm9qtaH0AmmWPn35W0fl5fBoE8RB0Jzw2qr0kG01%2FLhKEzPJF4pL%2Bv%2FQ7nGgaAtkZM3yGt9hDymm1wAwtZTB6%2F3UWMkyv0383uDLtN63BD5i6D1L9bYqMk7s3oHXd05%2BibUvsVllvIhsyHz%2B2C6lAjQ4TLFjwcybu%2Bc%2FkxdIK8pXk2%2BcfspGuFG4vjt1Hd46wBslQrY35r&X-Amz-Signature=655f50c15f11101a733b01635caa64fef95f7b78cff71fed392b823551607954&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZYBR2T%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxnC5BYYybs1cRKvFrg8vtUKJcR5dSMH6hSouFVSMvFAiA08ck1Ac1COPt8IA1oXepvyGIJMcLwy7LwedfTLaKw0SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMRAFnYNaimG%2F2Bz9KtwDCiFqiL0WIiIGHptIgEz1eQqJKEqqgL5wt5Pve7qmxHpJoDJhKb9fAUC2Sv4TB9HuQWqcanxglZVaP7hc8M1aQySssQtwrKsqxZdZdvqpGPBq1VXsZTSxHQU3VYHkGjnxadOSq96y8GfBTYfp2el3oeuJa9Sp7TkA0NO2U7lLwNGzr9J1PDv%2BQ8EeSqMX%2ByYgqP%2Bs4pTiNM4wuhCaUjJj4rtt0icsMfNjPg4U22aQNqut1%2B39LurvJzPOXVyxMyQzXcvW%2BM%2Fopu9FIjHLGM8Y5OR8XVeUpZK%2BzXlepBRRU9kBMmY2Qp9XcYKhRll937U%2BiHdxFto4tspjshQKl3KM0uy%2BeKr%2Fm6We3%2FH9%2BUTXKUrm54g7lrqoHtaOAg2wSYf6Vh9hJoXzuZoYprkZgcjO67MA1noEjuOT8iX7BrT7%2Fi3IzmbLWokA44iTElSuXCVgHs3fvrJBP8LHrbmRk63r7CcKBp4wb8M3btQAUaMbkiZtsHWw1mkA%2B%2BiqV6KjRG0s%2Bz%2Fjq01Mm7GsgNqZTSzIgWGeocnJIzDIur31MQtCxjE6ulKGGXH2aBxGUpz2junPWeynYeKzrldEKGVxJ7sdYRbjatrm0Rf%2FJT09PNdtkT6%2F6uPlu%2BNeZE1qckow%2Fe7RvgY6pgGl06xc8X8CTl05D2FW%2FmPm9qtaH0AmmWPn35W0fl5fBoE8RB0Jzw2qr0kG01%2FLhKEzPJF4pL%2Bv%2FQ7nGgaAtkZM3yGt9hDymm1wAwtZTB6%2F3UWMkyv0383uDLtN63BD5i6D1L9bYqMk7s3oHXd05%2BibUvsVllvIhsyHz%2B2C6lAjQ4TLFjwcybu%2Bc%2FkxdIK8pXk2%2BcfspGuFG4vjt1Hd46wBslQrY35r&X-Amz-Signature=d64637de209e836730ffd2868282ccfe2b85bf34dd3d46dee064dc616a58ec77&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZYBR2T%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxnC5BYYybs1cRKvFrg8vtUKJcR5dSMH6hSouFVSMvFAiA08ck1Ac1COPt8IA1oXepvyGIJMcLwy7LwedfTLaKw0SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMRAFnYNaimG%2F2Bz9KtwDCiFqiL0WIiIGHptIgEz1eQqJKEqqgL5wt5Pve7qmxHpJoDJhKb9fAUC2Sv4TB9HuQWqcanxglZVaP7hc8M1aQySssQtwrKsqxZdZdvqpGPBq1VXsZTSxHQU3VYHkGjnxadOSq96y8GfBTYfp2el3oeuJa9Sp7TkA0NO2U7lLwNGzr9J1PDv%2BQ8EeSqMX%2ByYgqP%2Bs4pTiNM4wuhCaUjJj4rtt0icsMfNjPg4U22aQNqut1%2B39LurvJzPOXVyxMyQzXcvW%2BM%2Fopu9FIjHLGM8Y5OR8XVeUpZK%2BzXlepBRRU9kBMmY2Qp9XcYKhRll937U%2BiHdxFto4tspjshQKl3KM0uy%2BeKr%2Fm6We3%2FH9%2BUTXKUrm54g7lrqoHtaOAg2wSYf6Vh9hJoXzuZoYprkZgcjO67MA1noEjuOT8iX7BrT7%2Fi3IzmbLWokA44iTElSuXCVgHs3fvrJBP8LHrbmRk63r7CcKBp4wb8M3btQAUaMbkiZtsHWw1mkA%2B%2BiqV6KjRG0s%2Bz%2Fjq01Mm7GsgNqZTSzIgWGeocnJIzDIur31MQtCxjE6ulKGGXH2aBxGUpz2junPWeynYeKzrldEKGVxJ7sdYRbjatrm0Rf%2FJT09PNdtkT6%2F6uPlu%2BNeZE1qckow%2Fe7RvgY6pgGl06xc8X8CTl05D2FW%2FmPm9qtaH0AmmWPn35W0fl5fBoE8RB0Jzw2qr0kG01%2FLhKEzPJF4pL%2Bv%2FQ7nGgaAtkZM3yGt9hDymm1wAwtZTB6%2F3UWMkyv0383uDLtN63BD5i6D1L9bYqMk7s3oHXd05%2BibUvsVllvIhsyHz%2B2C6lAjQ4TLFjwcybu%2Bc%2FkxdIK8pXk2%2BcfspGuFG4vjt1Hd46wBslQrY35r&X-Amz-Signature=da07dc8503d4fdc6ed4c7d51f55a41238042372148f5f4d5d96e99da66d1eec1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZYBR2T%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxnC5BYYybs1cRKvFrg8vtUKJcR5dSMH6hSouFVSMvFAiA08ck1Ac1COPt8IA1oXepvyGIJMcLwy7LwedfTLaKw0SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMRAFnYNaimG%2F2Bz9KtwDCiFqiL0WIiIGHptIgEz1eQqJKEqqgL5wt5Pve7qmxHpJoDJhKb9fAUC2Sv4TB9HuQWqcanxglZVaP7hc8M1aQySssQtwrKsqxZdZdvqpGPBq1VXsZTSxHQU3VYHkGjnxadOSq96y8GfBTYfp2el3oeuJa9Sp7TkA0NO2U7lLwNGzr9J1PDv%2BQ8EeSqMX%2ByYgqP%2Bs4pTiNM4wuhCaUjJj4rtt0icsMfNjPg4U22aQNqut1%2B39LurvJzPOXVyxMyQzXcvW%2BM%2Fopu9FIjHLGM8Y5OR8XVeUpZK%2BzXlepBRRU9kBMmY2Qp9XcYKhRll937U%2BiHdxFto4tspjshQKl3KM0uy%2BeKr%2Fm6We3%2FH9%2BUTXKUrm54g7lrqoHtaOAg2wSYf6Vh9hJoXzuZoYprkZgcjO67MA1noEjuOT8iX7BrT7%2Fi3IzmbLWokA44iTElSuXCVgHs3fvrJBP8LHrbmRk63r7CcKBp4wb8M3btQAUaMbkiZtsHWw1mkA%2B%2BiqV6KjRG0s%2Bz%2Fjq01Mm7GsgNqZTSzIgWGeocnJIzDIur31MQtCxjE6ulKGGXH2aBxGUpz2junPWeynYeKzrldEKGVxJ7sdYRbjatrm0Rf%2FJT09PNdtkT6%2F6uPlu%2BNeZE1qckow%2Fe7RvgY6pgGl06xc8X8CTl05D2FW%2FmPm9qtaH0AmmWPn35W0fl5fBoE8RB0Jzw2qr0kG01%2FLhKEzPJF4pL%2Bv%2FQ7nGgaAtkZM3yGt9hDymm1wAwtZTB6%2F3UWMkyv0383uDLtN63BD5i6D1L9bYqMk7s3oHXd05%2BibUvsVllvIhsyHz%2B2C6lAjQ4TLFjwcybu%2Bc%2FkxdIK8pXk2%2BcfspGuFG4vjt1Hd46wBslQrY35r&X-Amz-Signature=d340e53f3b56660d26448c298b9353a2ad2018f2309e9cd5ba6145ec2ae99191&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
