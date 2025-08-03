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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BN565JY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt4Okio3JzKmWOel58Q3ZdaqpXrNm5sRqZEialPzlNtQIgKVsajc7jsTjGWgcNIEEal28QdbozwLib9ok6xurjie4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD9dhXvgJCQFpfW3jyrcAz7c6EHZ7VwwxKNTwv5eEcQbHzP2rEaFIkMPe8AuCRXoXerXeyaA2uIcOLxVa5fwY0UYspqDI3k2OWP%2FUJsXGEP%2BMoCOfWSN9oXrXoPi7cUY0SiNvPWSgElgIlGQrcvSrGNevG7naqjB57CFpt1PQAtj6k6XpcQzF%2BX2Bru2MzNJc6xerxw5JoyZtHbjrvUnsZ6j1gONA1a8vf88gm0X3IneNiI3lvLOtxfzDU%2BOuEVZKus0iXuPdL8PA6nuJ2%2F1%2FKIQFlW%2FeSJfzsDKD8VhBmVjUKelOd4V0tWtAFOGAh%2BAPnfMhcwRISEdmB9kyP8lTnG%2BpGOYE4QKY6eQL2qcFnSR1wQBB1B0URcR60D%2FclG5fkhT5BzBtbTF%2FY%2Fzd3aN%2BdUfyMwnkT5bPFIxLpeaVlCAVVQ8Xf6Ib0urFn5VrYOouHDvdlF2F1XXiLMoVC08NxKgjQq7I7TRCLB2KDhyPhyQSyiF2CtvbHG8JRzASyKf5isMSFmlJ4SSTwWH3MZWCWWuoUUFXXnGxhFCcdmW2qK6iycq071lXzrUcTJzJXE8mbYYr01%2BllG%2FeNRPDcUy6Pe2g3HDISYEgyw4UjkSqTHtq%2Fxil5sSdrIBHTh5y7%2B7Ebr57xSpDuPaxF8KMNrZvsQGOqUBGDEKzVK3%2FjyyI636ln%2FkJOA2BpaWz46sj8ZD5AtZvhaNDVE%2Bmc0WMGYCZNoUyEw2DOB16P04vEKaJtJXHT7YiZ2zKvzKHEwYp6qB0PYcom%2BS7ullOAKt2X2SPVFN%2F2DEve5JCotIzpr7UGke5lc2i3YGsOUGFPkw4cxw9J%2Bp2Muj6EwCm9zg1AIJ86iLz6NebpGyaRnkiuvyLH8of2eSb1qMduKq&X-Amz-Signature=b2d910d3a9215bb8d173dc916102636f01807ed04246077fd47489c585e01386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BN565JY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt4Okio3JzKmWOel58Q3ZdaqpXrNm5sRqZEialPzlNtQIgKVsajc7jsTjGWgcNIEEal28QdbozwLib9ok6xurjie4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD9dhXvgJCQFpfW3jyrcAz7c6EHZ7VwwxKNTwv5eEcQbHzP2rEaFIkMPe8AuCRXoXerXeyaA2uIcOLxVa5fwY0UYspqDI3k2OWP%2FUJsXGEP%2BMoCOfWSN9oXrXoPi7cUY0SiNvPWSgElgIlGQrcvSrGNevG7naqjB57CFpt1PQAtj6k6XpcQzF%2BX2Bru2MzNJc6xerxw5JoyZtHbjrvUnsZ6j1gONA1a8vf88gm0X3IneNiI3lvLOtxfzDU%2BOuEVZKus0iXuPdL8PA6nuJ2%2F1%2FKIQFlW%2FeSJfzsDKD8VhBmVjUKelOd4V0tWtAFOGAh%2BAPnfMhcwRISEdmB9kyP8lTnG%2BpGOYE4QKY6eQL2qcFnSR1wQBB1B0URcR60D%2FclG5fkhT5BzBtbTF%2FY%2Fzd3aN%2BdUfyMwnkT5bPFIxLpeaVlCAVVQ8Xf6Ib0urFn5VrYOouHDvdlF2F1XXiLMoVC08NxKgjQq7I7TRCLB2KDhyPhyQSyiF2CtvbHG8JRzASyKf5isMSFmlJ4SSTwWH3MZWCWWuoUUFXXnGxhFCcdmW2qK6iycq071lXzrUcTJzJXE8mbYYr01%2BllG%2FeNRPDcUy6Pe2g3HDISYEgyw4UjkSqTHtq%2Fxil5sSdrIBHTh5y7%2B7Ebr57xSpDuPaxF8KMNrZvsQGOqUBGDEKzVK3%2FjyyI636ln%2FkJOA2BpaWz46sj8ZD5AtZvhaNDVE%2Bmc0WMGYCZNoUyEw2DOB16P04vEKaJtJXHT7YiZ2zKvzKHEwYp6qB0PYcom%2BS7ullOAKt2X2SPVFN%2F2DEve5JCotIzpr7UGke5lc2i3YGsOUGFPkw4cxw9J%2Bp2Muj6EwCm9zg1AIJ86iLz6NebpGyaRnkiuvyLH8of2eSb1qMduKq&X-Amz-Signature=2e29d8170d7bbe5ff6b33ef9ff03bf63d05b5976b44876d4ed6425ddd0eacf43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BN565JY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt4Okio3JzKmWOel58Q3ZdaqpXrNm5sRqZEialPzlNtQIgKVsajc7jsTjGWgcNIEEal28QdbozwLib9ok6xurjie4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD9dhXvgJCQFpfW3jyrcAz7c6EHZ7VwwxKNTwv5eEcQbHzP2rEaFIkMPe8AuCRXoXerXeyaA2uIcOLxVa5fwY0UYspqDI3k2OWP%2FUJsXGEP%2BMoCOfWSN9oXrXoPi7cUY0SiNvPWSgElgIlGQrcvSrGNevG7naqjB57CFpt1PQAtj6k6XpcQzF%2BX2Bru2MzNJc6xerxw5JoyZtHbjrvUnsZ6j1gONA1a8vf88gm0X3IneNiI3lvLOtxfzDU%2BOuEVZKus0iXuPdL8PA6nuJ2%2F1%2FKIQFlW%2FeSJfzsDKD8VhBmVjUKelOd4V0tWtAFOGAh%2BAPnfMhcwRISEdmB9kyP8lTnG%2BpGOYE4QKY6eQL2qcFnSR1wQBB1B0URcR60D%2FclG5fkhT5BzBtbTF%2FY%2Fzd3aN%2BdUfyMwnkT5bPFIxLpeaVlCAVVQ8Xf6Ib0urFn5VrYOouHDvdlF2F1XXiLMoVC08NxKgjQq7I7TRCLB2KDhyPhyQSyiF2CtvbHG8JRzASyKf5isMSFmlJ4SSTwWH3MZWCWWuoUUFXXnGxhFCcdmW2qK6iycq071lXzrUcTJzJXE8mbYYr01%2BllG%2FeNRPDcUy6Pe2g3HDISYEgyw4UjkSqTHtq%2Fxil5sSdrIBHTh5y7%2B7Ebr57xSpDuPaxF8KMNrZvsQGOqUBGDEKzVK3%2FjyyI636ln%2FkJOA2BpaWz46sj8ZD5AtZvhaNDVE%2Bmc0WMGYCZNoUyEw2DOB16P04vEKaJtJXHT7YiZ2zKvzKHEwYp6qB0PYcom%2BS7ullOAKt2X2SPVFN%2F2DEve5JCotIzpr7UGke5lc2i3YGsOUGFPkw4cxw9J%2Bp2Muj6EwCm9zg1AIJ86iLz6NebpGyaRnkiuvyLH8of2eSb1qMduKq&X-Amz-Signature=b8184fc93b14428b364fcfde92b7c778f1692b9e0577f2e5181862365d9cace6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BN565JY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt4Okio3JzKmWOel58Q3ZdaqpXrNm5sRqZEialPzlNtQIgKVsajc7jsTjGWgcNIEEal28QdbozwLib9ok6xurjie4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD9dhXvgJCQFpfW3jyrcAz7c6EHZ7VwwxKNTwv5eEcQbHzP2rEaFIkMPe8AuCRXoXerXeyaA2uIcOLxVa5fwY0UYspqDI3k2OWP%2FUJsXGEP%2BMoCOfWSN9oXrXoPi7cUY0SiNvPWSgElgIlGQrcvSrGNevG7naqjB57CFpt1PQAtj6k6XpcQzF%2BX2Bru2MzNJc6xerxw5JoyZtHbjrvUnsZ6j1gONA1a8vf88gm0X3IneNiI3lvLOtxfzDU%2BOuEVZKus0iXuPdL8PA6nuJ2%2F1%2FKIQFlW%2FeSJfzsDKD8VhBmVjUKelOd4V0tWtAFOGAh%2BAPnfMhcwRISEdmB9kyP8lTnG%2BpGOYE4QKY6eQL2qcFnSR1wQBB1B0URcR60D%2FclG5fkhT5BzBtbTF%2FY%2Fzd3aN%2BdUfyMwnkT5bPFIxLpeaVlCAVVQ8Xf6Ib0urFn5VrYOouHDvdlF2F1XXiLMoVC08NxKgjQq7I7TRCLB2KDhyPhyQSyiF2CtvbHG8JRzASyKf5isMSFmlJ4SSTwWH3MZWCWWuoUUFXXnGxhFCcdmW2qK6iycq071lXzrUcTJzJXE8mbYYr01%2BllG%2FeNRPDcUy6Pe2g3HDISYEgyw4UjkSqTHtq%2Fxil5sSdrIBHTh5y7%2B7Ebr57xSpDuPaxF8KMNrZvsQGOqUBGDEKzVK3%2FjyyI636ln%2FkJOA2BpaWz46sj8ZD5AtZvhaNDVE%2Bmc0WMGYCZNoUyEw2DOB16P04vEKaJtJXHT7YiZ2zKvzKHEwYp6qB0PYcom%2BS7ullOAKt2X2SPVFN%2F2DEve5JCotIzpr7UGke5lc2i3YGsOUGFPkw4cxw9J%2Bp2Muj6EwCm9zg1AIJ86iLz6NebpGyaRnkiuvyLH8of2eSb1qMduKq&X-Amz-Signature=7c8e5496bb7b8e484c12f85b61b62e53db1e836dcc50f642d1d7f465afeadf15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BN565JY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt4Okio3JzKmWOel58Q3ZdaqpXrNm5sRqZEialPzlNtQIgKVsajc7jsTjGWgcNIEEal28QdbozwLib9ok6xurjie4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD9dhXvgJCQFpfW3jyrcAz7c6EHZ7VwwxKNTwv5eEcQbHzP2rEaFIkMPe8AuCRXoXerXeyaA2uIcOLxVa5fwY0UYspqDI3k2OWP%2FUJsXGEP%2BMoCOfWSN9oXrXoPi7cUY0SiNvPWSgElgIlGQrcvSrGNevG7naqjB57CFpt1PQAtj6k6XpcQzF%2BX2Bru2MzNJc6xerxw5JoyZtHbjrvUnsZ6j1gONA1a8vf88gm0X3IneNiI3lvLOtxfzDU%2BOuEVZKus0iXuPdL8PA6nuJ2%2F1%2FKIQFlW%2FeSJfzsDKD8VhBmVjUKelOd4V0tWtAFOGAh%2BAPnfMhcwRISEdmB9kyP8lTnG%2BpGOYE4QKY6eQL2qcFnSR1wQBB1B0URcR60D%2FclG5fkhT5BzBtbTF%2FY%2Fzd3aN%2BdUfyMwnkT5bPFIxLpeaVlCAVVQ8Xf6Ib0urFn5VrYOouHDvdlF2F1XXiLMoVC08NxKgjQq7I7TRCLB2KDhyPhyQSyiF2CtvbHG8JRzASyKf5isMSFmlJ4SSTwWH3MZWCWWuoUUFXXnGxhFCcdmW2qK6iycq071lXzrUcTJzJXE8mbYYr01%2BllG%2FeNRPDcUy6Pe2g3HDISYEgyw4UjkSqTHtq%2Fxil5sSdrIBHTh5y7%2B7Ebr57xSpDuPaxF8KMNrZvsQGOqUBGDEKzVK3%2FjyyI636ln%2FkJOA2BpaWz46sj8ZD5AtZvhaNDVE%2Bmc0WMGYCZNoUyEw2DOB16P04vEKaJtJXHT7YiZ2zKvzKHEwYp6qB0PYcom%2BS7ullOAKt2X2SPVFN%2F2DEve5JCotIzpr7UGke5lc2i3YGsOUGFPkw4cxw9J%2Bp2Muj6EwCm9zg1AIJ86iLz6NebpGyaRnkiuvyLH8of2eSb1qMduKq&X-Amz-Signature=25cb91cc2aa7bc14f3fe65281e84dba86b173e3a6dcfe199cd94ad07822a70ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
