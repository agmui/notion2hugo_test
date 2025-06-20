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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGS3Z6SJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbzmUz6tDsC0o5AvJtq3tEEFFOhbqx0ndzBRz7Pxqb8AiA5Do4ho8Pd2cA3cAF1zJyP4QalkQWXm13Vf6WDTTYa4CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8l2IDqRzK37CEUX1KtwD78OGqjcgp2i%2BUTyA3XLN1I0LaJfDt0pEQRJf0nCnXmTpdYI2M0DFabyDDoyvipL%2BumYbnraNhTsDD32aKc8rPOQgUHBQyC7iOrpIk6m3ta58yI0MZTpYOfSq852rP2aZ42udXoutDaoJb%2Fadg%2FzSAltolAv3LNYymBI0QGjcdW4dtrfSlL9fy5AAUWI4QJajc0T4veDQ4D%2BkhknKCYrs03%2Bql5gqxZPD8IbxuanCdr0QM2o1oEc7uBUFv5UuO6Yz33KGr4mi9mq984%2F6voI32b3KHf5QQfKjJolxdRiQ%2Bp1rs2%2FzLHK50N299u1v6t0FHO6fSXb95N3YGtwYovAwPAsgGcgarqlnJvLDBJ9r6jpPraqjMWSwHoXk3%2FLjdouGtdH9mfweJTDzpJ84MqfijxJVQxF5tQwbmSJGB5XfkjJO4YeBEq0c0blJh0OE7TTQOttbW0AlyQ9kogdJEKz2VXJtjN7o6I1txj%2B5bjAL7goFMkZSD3e74s2%2BXyKrMaRTadLEoFsZ95ghitZNLqwRdRSPptr5vr2n6Bc1Uu4UqFAM34lgDvmfbEpy0KmqWbvihkN2FemN0rAdNL1WOLKZNdPYpWmQHKnwn3xDUoPYyTLx1ucwN8euQ7imQQcwy%2FHUwgY6pgE1ZqRyMXmDy0C6K3hlDOsQfgma6ZGGm%2FBTCR%2F9K1LLO7pTWwOEUxU7Yv1RiQqaV08TXvNJqrVpFJtcDz7zHuuRnAH%2BDrCd6zEf8W32eoBBJVvbvFmUJs5gqsD6uMTFPUmp8csFjmjqM3EObh3FwV%2F1VlgHw2880KDI0bGK0p4TC6Xy0%2FKpyATuEKRbbgPL4oisrisj%2BN2J8Y2A2Ooc3lrQ9TbV82sJ&X-Amz-Signature=0ce79ce91c36fbf9219e6e7d46be2ced5df2acdd1b19f810bbe46946704a8cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGS3Z6SJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbzmUz6tDsC0o5AvJtq3tEEFFOhbqx0ndzBRz7Pxqb8AiA5Do4ho8Pd2cA3cAF1zJyP4QalkQWXm13Vf6WDTTYa4CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8l2IDqRzK37CEUX1KtwD78OGqjcgp2i%2BUTyA3XLN1I0LaJfDt0pEQRJf0nCnXmTpdYI2M0DFabyDDoyvipL%2BumYbnraNhTsDD32aKc8rPOQgUHBQyC7iOrpIk6m3ta58yI0MZTpYOfSq852rP2aZ42udXoutDaoJb%2Fadg%2FzSAltolAv3LNYymBI0QGjcdW4dtrfSlL9fy5AAUWI4QJajc0T4veDQ4D%2BkhknKCYrs03%2Bql5gqxZPD8IbxuanCdr0QM2o1oEc7uBUFv5UuO6Yz33KGr4mi9mq984%2F6voI32b3KHf5QQfKjJolxdRiQ%2Bp1rs2%2FzLHK50N299u1v6t0FHO6fSXb95N3YGtwYovAwPAsgGcgarqlnJvLDBJ9r6jpPraqjMWSwHoXk3%2FLjdouGtdH9mfweJTDzpJ84MqfijxJVQxF5tQwbmSJGB5XfkjJO4YeBEq0c0blJh0OE7TTQOttbW0AlyQ9kogdJEKz2VXJtjN7o6I1txj%2B5bjAL7goFMkZSD3e74s2%2BXyKrMaRTadLEoFsZ95ghitZNLqwRdRSPptr5vr2n6Bc1Uu4UqFAM34lgDvmfbEpy0KmqWbvihkN2FemN0rAdNL1WOLKZNdPYpWmQHKnwn3xDUoPYyTLx1ucwN8euQ7imQQcwy%2FHUwgY6pgE1ZqRyMXmDy0C6K3hlDOsQfgma6ZGGm%2FBTCR%2F9K1LLO7pTWwOEUxU7Yv1RiQqaV08TXvNJqrVpFJtcDz7zHuuRnAH%2BDrCd6zEf8W32eoBBJVvbvFmUJs5gqsD6uMTFPUmp8csFjmjqM3EObh3FwV%2F1VlgHw2880KDI0bGK0p4TC6Xy0%2FKpyATuEKRbbgPL4oisrisj%2BN2J8Y2A2Ooc3lrQ9TbV82sJ&X-Amz-Signature=575d54bf0e6b0655eaadd656d1e925afee362dd8fae5a6750b77523145b6d35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGS3Z6SJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbzmUz6tDsC0o5AvJtq3tEEFFOhbqx0ndzBRz7Pxqb8AiA5Do4ho8Pd2cA3cAF1zJyP4QalkQWXm13Vf6WDTTYa4CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8l2IDqRzK37CEUX1KtwD78OGqjcgp2i%2BUTyA3XLN1I0LaJfDt0pEQRJf0nCnXmTpdYI2M0DFabyDDoyvipL%2BumYbnraNhTsDD32aKc8rPOQgUHBQyC7iOrpIk6m3ta58yI0MZTpYOfSq852rP2aZ42udXoutDaoJb%2Fadg%2FzSAltolAv3LNYymBI0QGjcdW4dtrfSlL9fy5AAUWI4QJajc0T4veDQ4D%2BkhknKCYrs03%2Bql5gqxZPD8IbxuanCdr0QM2o1oEc7uBUFv5UuO6Yz33KGr4mi9mq984%2F6voI32b3KHf5QQfKjJolxdRiQ%2Bp1rs2%2FzLHK50N299u1v6t0FHO6fSXb95N3YGtwYovAwPAsgGcgarqlnJvLDBJ9r6jpPraqjMWSwHoXk3%2FLjdouGtdH9mfweJTDzpJ84MqfijxJVQxF5tQwbmSJGB5XfkjJO4YeBEq0c0blJh0OE7TTQOttbW0AlyQ9kogdJEKz2VXJtjN7o6I1txj%2B5bjAL7goFMkZSD3e74s2%2BXyKrMaRTadLEoFsZ95ghitZNLqwRdRSPptr5vr2n6Bc1Uu4UqFAM34lgDvmfbEpy0KmqWbvihkN2FemN0rAdNL1WOLKZNdPYpWmQHKnwn3xDUoPYyTLx1ucwN8euQ7imQQcwy%2FHUwgY6pgE1ZqRyMXmDy0C6K3hlDOsQfgma6ZGGm%2FBTCR%2F9K1LLO7pTWwOEUxU7Yv1RiQqaV08TXvNJqrVpFJtcDz7zHuuRnAH%2BDrCd6zEf8W32eoBBJVvbvFmUJs5gqsD6uMTFPUmp8csFjmjqM3EObh3FwV%2F1VlgHw2880KDI0bGK0p4TC6Xy0%2FKpyATuEKRbbgPL4oisrisj%2BN2J8Y2A2Ooc3lrQ9TbV82sJ&X-Amz-Signature=73c84f6b3b3140ab34d560aa3d7720d6fd95a0798729b4b16aa46e54a5cd9c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGS3Z6SJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbzmUz6tDsC0o5AvJtq3tEEFFOhbqx0ndzBRz7Pxqb8AiA5Do4ho8Pd2cA3cAF1zJyP4QalkQWXm13Vf6WDTTYa4CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8l2IDqRzK37CEUX1KtwD78OGqjcgp2i%2BUTyA3XLN1I0LaJfDt0pEQRJf0nCnXmTpdYI2M0DFabyDDoyvipL%2BumYbnraNhTsDD32aKc8rPOQgUHBQyC7iOrpIk6m3ta58yI0MZTpYOfSq852rP2aZ42udXoutDaoJb%2Fadg%2FzSAltolAv3LNYymBI0QGjcdW4dtrfSlL9fy5AAUWI4QJajc0T4veDQ4D%2BkhknKCYrs03%2Bql5gqxZPD8IbxuanCdr0QM2o1oEc7uBUFv5UuO6Yz33KGr4mi9mq984%2F6voI32b3KHf5QQfKjJolxdRiQ%2Bp1rs2%2FzLHK50N299u1v6t0FHO6fSXb95N3YGtwYovAwPAsgGcgarqlnJvLDBJ9r6jpPraqjMWSwHoXk3%2FLjdouGtdH9mfweJTDzpJ84MqfijxJVQxF5tQwbmSJGB5XfkjJO4YeBEq0c0blJh0OE7TTQOttbW0AlyQ9kogdJEKz2VXJtjN7o6I1txj%2B5bjAL7goFMkZSD3e74s2%2BXyKrMaRTadLEoFsZ95ghitZNLqwRdRSPptr5vr2n6Bc1Uu4UqFAM34lgDvmfbEpy0KmqWbvihkN2FemN0rAdNL1WOLKZNdPYpWmQHKnwn3xDUoPYyTLx1ucwN8euQ7imQQcwy%2FHUwgY6pgE1ZqRyMXmDy0C6K3hlDOsQfgma6ZGGm%2FBTCR%2F9K1LLO7pTWwOEUxU7Yv1RiQqaV08TXvNJqrVpFJtcDz7zHuuRnAH%2BDrCd6zEf8W32eoBBJVvbvFmUJs5gqsD6uMTFPUmp8csFjmjqM3EObh3FwV%2F1VlgHw2880KDI0bGK0p4TC6Xy0%2FKpyATuEKRbbgPL4oisrisj%2BN2J8Y2A2Ooc3lrQ9TbV82sJ&X-Amz-Signature=335b7675721c5c1e97e31522e693f15080999f5f97fe9e3e94cbb18b6f7fdf24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGS3Z6SJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbzmUz6tDsC0o5AvJtq3tEEFFOhbqx0ndzBRz7Pxqb8AiA5Do4ho8Pd2cA3cAF1zJyP4QalkQWXm13Vf6WDTTYa4CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8l2IDqRzK37CEUX1KtwD78OGqjcgp2i%2BUTyA3XLN1I0LaJfDt0pEQRJf0nCnXmTpdYI2M0DFabyDDoyvipL%2BumYbnraNhTsDD32aKc8rPOQgUHBQyC7iOrpIk6m3ta58yI0MZTpYOfSq852rP2aZ42udXoutDaoJb%2Fadg%2FzSAltolAv3LNYymBI0QGjcdW4dtrfSlL9fy5AAUWI4QJajc0T4veDQ4D%2BkhknKCYrs03%2Bql5gqxZPD8IbxuanCdr0QM2o1oEc7uBUFv5UuO6Yz33KGr4mi9mq984%2F6voI32b3KHf5QQfKjJolxdRiQ%2Bp1rs2%2FzLHK50N299u1v6t0FHO6fSXb95N3YGtwYovAwPAsgGcgarqlnJvLDBJ9r6jpPraqjMWSwHoXk3%2FLjdouGtdH9mfweJTDzpJ84MqfijxJVQxF5tQwbmSJGB5XfkjJO4YeBEq0c0blJh0OE7TTQOttbW0AlyQ9kogdJEKz2VXJtjN7o6I1txj%2B5bjAL7goFMkZSD3e74s2%2BXyKrMaRTadLEoFsZ95ghitZNLqwRdRSPptr5vr2n6Bc1Uu4UqFAM34lgDvmfbEpy0KmqWbvihkN2FemN0rAdNL1WOLKZNdPYpWmQHKnwn3xDUoPYyTLx1ucwN8euQ7imQQcwy%2FHUwgY6pgE1ZqRyMXmDy0C6K3hlDOsQfgma6ZGGm%2FBTCR%2F9K1LLO7pTWwOEUxU7Yv1RiQqaV08TXvNJqrVpFJtcDz7zHuuRnAH%2BDrCd6zEf8W32eoBBJVvbvFmUJs5gqsD6uMTFPUmp8csFjmjqM3EObh3FwV%2F1VlgHw2880KDI0bGK0p4TC6Xy0%2FKpyATuEKRbbgPL4oisrisj%2BN2J8Y2A2Ooc3lrQ9TbV82sJ&X-Amz-Signature=7db59036604b1ac975e1a92af2cb5d46ff727210a9143e50a279a85959bfd2ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
