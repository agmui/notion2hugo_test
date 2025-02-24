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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NWRB6I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiKbGFdu5rScZK2RwbSsO2OxMHICU%2FVQjBZ4KNNtPlCgIgKbanJO5QlIqVcyztoQvnevSDtfibBmgH03XUDt6iGpMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBBnvsSmOW3qzzAMFCrcA%2F1l8QLtPDeLrYvswWH81fcZPMXoem48myQvFXi%2FZwsQ%2F8tNLNwuXxIA0%2FsRYrZdAtUbI0eCvEib3QuWAKXZ1glTPVVcAY7JBq0%2BuPY7GBnBWsd7QLYsZi8O8CGPOhDNEnbRm9xeK9K3C5yH16AQk8MZCzFUfChnYMMIOFLDivoISLW90pkte6OexLKfOv%2FhGHMy2ptu%2BCDFOaXwYVDY%2FjMYBmzW1FJoT2N%2FbylOZpZ53uVPdM1RuoTaYuZl7cBNd6urm120YMZjzxrGpQvMJhNiOKOi7v83uhlMAdXcCR8WofFhcgZOeFnsi8D3ya%2FIdvpfgMD6ZyFicCKFXH3tG70QM2ifdwPq9f0PCV8G8j%2ByS5Lvc4YlD%2Fj8z34yje7wgwEQbfDQZnfi4Co6lgVmaob0gbxRA1eaRR7tGyfCdWjFgjdIyEpZShAncJBP3ltj25balYWYXeio%2F0YtvOGYAa2pRpdmzaMcCw7MNesXk2rsepad5AUDb4o8UGz9N5RArK7vuTLzURCApaiJ%2FMfUn5vLGCDf2Ps3HizeDE6%2FQQ6Awm0gAs%2BmbojGbjp6soqZ4GTz71dlglTUwfpBgqE0yZ0tVXnOAB1GihFnQA41PiUKIg%2BHaGEjqSoFL5csMKjr8L0GOqUB5HGJmLr3I4pAWhjcUGWqviGP0YE1rG4XHhavAt57za3i8ylrm43%2B8uhxRzMsz4BFfDiitO8KABpAORyhwkMB7D7hCLF17l%2BoIrY%2FwEdhwhFtOoBk2c6uz2ftcN4aBYgYjwg%2B8GmLJdFIM5ItQyyhPZYIaTVn608o6axOdlPlJhGMB2p6d8DT1M4QbhXsdlwAlOgGsLkfwXaJdSiV678yxIWe18v2&X-Amz-Signature=2050876ad93b8be0be7166d65937ffedf32b9d2c685b1037ecac3f5d63c47940&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NWRB6I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiKbGFdu5rScZK2RwbSsO2OxMHICU%2FVQjBZ4KNNtPlCgIgKbanJO5QlIqVcyztoQvnevSDtfibBmgH03XUDt6iGpMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBBnvsSmOW3qzzAMFCrcA%2F1l8QLtPDeLrYvswWH81fcZPMXoem48myQvFXi%2FZwsQ%2F8tNLNwuXxIA0%2FsRYrZdAtUbI0eCvEib3QuWAKXZ1glTPVVcAY7JBq0%2BuPY7GBnBWsd7QLYsZi8O8CGPOhDNEnbRm9xeK9K3C5yH16AQk8MZCzFUfChnYMMIOFLDivoISLW90pkte6OexLKfOv%2FhGHMy2ptu%2BCDFOaXwYVDY%2FjMYBmzW1FJoT2N%2FbylOZpZ53uVPdM1RuoTaYuZl7cBNd6urm120YMZjzxrGpQvMJhNiOKOi7v83uhlMAdXcCR8WofFhcgZOeFnsi8D3ya%2FIdvpfgMD6ZyFicCKFXH3tG70QM2ifdwPq9f0PCV8G8j%2ByS5Lvc4YlD%2Fj8z34yje7wgwEQbfDQZnfi4Co6lgVmaob0gbxRA1eaRR7tGyfCdWjFgjdIyEpZShAncJBP3ltj25balYWYXeio%2F0YtvOGYAa2pRpdmzaMcCw7MNesXk2rsepad5AUDb4o8UGz9N5RArK7vuTLzURCApaiJ%2FMfUn5vLGCDf2Ps3HizeDE6%2FQQ6Awm0gAs%2BmbojGbjp6soqZ4GTz71dlglTUwfpBgqE0yZ0tVXnOAB1GihFnQA41PiUKIg%2BHaGEjqSoFL5csMKjr8L0GOqUB5HGJmLr3I4pAWhjcUGWqviGP0YE1rG4XHhavAt57za3i8ylrm43%2B8uhxRzMsz4BFfDiitO8KABpAORyhwkMB7D7hCLF17l%2BoIrY%2FwEdhwhFtOoBk2c6uz2ftcN4aBYgYjwg%2B8GmLJdFIM5ItQyyhPZYIaTVn608o6axOdlPlJhGMB2p6d8DT1M4QbhXsdlwAlOgGsLkfwXaJdSiV678yxIWe18v2&X-Amz-Signature=c474c168bd50ef8f3984e1e9407f26b17be204763a75954cf7182c1a162d20bf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NWRB6I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiKbGFdu5rScZK2RwbSsO2OxMHICU%2FVQjBZ4KNNtPlCgIgKbanJO5QlIqVcyztoQvnevSDtfibBmgH03XUDt6iGpMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBBnvsSmOW3qzzAMFCrcA%2F1l8QLtPDeLrYvswWH81fcZPMXoem48myQvFXi%2FZwsQ%2F8tNLNwuXxIA0%2FsRYrZdAtUbI0eCvEib3QuWAKXZ1glTPVVcAY7JBq0%2BuPY7GBnBWsd7QLYsZi8O8CGPOhDNEnbRm9xeK9K3C5yH16AQk8MZCzFUfChnYMMIOFLDivoISLW90pkte6OexLKfOv%2FhGHMy2ptu%2BCDFOaXwYVDY%2FjMYBmzW1FJoT2N%2FbylOZpZ53uVPdM1RuoTaYuZl7cBNd6urm120YMZjzxrGpQvMJhNiOKOi7v83uhlMAdXcCR8WofFhcgZOeFnsi8D3ya%2FIdvpfgMD6ZyFicCKFXH3tG70QM2ifdwPq9f0PCV8G8j%2ByS5Lvc4YlD%2Fj8z34yje7wgwEQbfDQZnfi4Co6lgVmaob0gbxRA1eaRR7tGyfCdWjFgjdIyEpZShAncJBP3ltj25balYWYXeio%2F0YtvOGYAa2pRpdmzaMcCw7MNesXk2rsepad5AUDb4o8UGz9N5RArK7vuTLzURCApaiJ%2FMfUn5vLGCDf2Ps3HizeDE6%2FQQ6Awm0gAs%2BmbojGbjp6soqZ4GTz71dlglTUwfpBgqE0yZ0tVXnOAB1GihFnQA41PiUKIg%2BHaGEjqSoFL5csMKjr8L0GOqUB5HGJmLr3I4pAWhjcUGWqviGP0YE1rG4XHhavAt57za3i8ylrm43%2B8uhxRzMsz4BFfDiitO8KABpAORyhwkMB7D7hCLF17l%2BoIrY%2FwEdhwhFtOoBk2c6uz2ftcN4aBYgYjwg%2B8GmLJdFIM5ItQyyhPZYIaTVn608o6axOdlPlJhGMB2p6d8DT1M4QbhXsdlwAlOgGsLkfwXaJdSiV678yxIWe18v2&X-Amz-Signature=a05ba8a61951b4dcf98f97fdb25ed944b357cd118c139431a254e0e02fcd981c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NWRB6I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiKbGFdu5rScZK2RwbSsO2OxMHICU%2FVQjBZ4KNNtPlCgIgKbanJO5QlIqVcyztoQvnevSDtfibBmgH03XUDt6iGpMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBBnvsSmOW3qzzAMFCrcA%2F1l8QLtPDeLrYvswWH81fcZPMXoem48myQvFXi%2FZwsQ%2F8tNLNwuXxIA0%2FsRYrZdAtUbI0eCvEib3QuWAKXZ1glTPVVcAY7JBq0%2BuPY7GBnBWsd7QLYsZi8O8CGPOhDNEnbRm9xeK9K3C5yH16AQk8MZCzFUfChnYMMIOFLDivoISLW90pkte6OexLKfOv%2FhGHMy2ptu%2BCDFOaXwYVDY%2FjMYBmzW1FJoT2N%2FbylOZpZ53uVPdM1RuoTaYuZl7cBNd6urm120YMZjzxrGpQvMJhNiOKOi7v83uhlMAdXcCR8WofFhcgZOeFnsi8D3ya%2FIdvpfgMD6ZyFicCKFXH3tG70QM2ifdwPq9f0PCV8G8j%2ByS5Lvc4YlD%2Fj8z34yje7wgwEQbfDQZnfi4Co6lgVmaob0gbxRA1eaRR7tGyfCdWjFgjdIyEpZShAncJBP3ltj25balYWYXeio%2F0YtvOGYAa2pRpdmzaMcCw7MNesXk2rsepad5AUDb4o8UGz9N5RArK7vuTLzURCApaiJ%2FMfUn5vLGCDf2Ps3HizeDE6%2FQQ6Awm0gAs%2BmbojGbjp6soqZ4GTz71dlglTUwfpBgqE0yZ0tVXnOAB1GihFnQA41PiUKIg%2BHaGEjqSoFL5csMKjr8L0GOqUB5HGJmLr3I4pAWhjcUGWqviGP0YE1rG4XHhavAt57za3i8ylrm43%2B8uhxRzMsz4BFfDiitO8KABpAORyhwkMB7D7hCLF17l%2BoIrY%2FwEdhwhFtOoBk2c6uz2ftcN4aBYgYjwg%2B8GmLJdFIM5ItQyyhPZYIaTVn608o6axOdlPlJhGMB2p6d8DT1M4QbhXsdlwAlOgGsLkfwXaJdSiV678yxIWe18v2&X-Amz-Signature=db5c53fda8c6c8e93d19db3799a92bc523ef3e7d83ae64db9ba70dcc38d80ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NWRB6I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiKbGFdu5rScZK2RwbSsO2OxMHICU%2FVQjBZ4KNNtPlCgIgKbanJO5QlIqVcyztoQvnevSDtfibBmgH03XUDt6iGpMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBBnvsSmOW3qzzAMFCrcA%2F1l8QLtPDeLrYvswWH81fcZPMXoem48myQvFXi%2FZwsQ%2F8tNLNwuXxIA0%2FsRYrZdAtUbI0eCvEib3QuWAKXZ1glTPVVcAY7JBq0%2BuPY7GBnBWsd7QLYsZi8O8CGPOhDNEnbRm9xeK9K3C5yH16AQk8MZCzFUfChnYMMIOFLDivoISLW90pkte6OexLKfOv%2FhGHMy2ptu%2BCDFOaXwYVDY%2FjMYBmzW1FJoT2N%2FbylOZpZ53uVPdM1RuoTaYuZl7cBNd6urm120YMZjzxrGpQvMJhNiOKOi7v83uhlMAdXcCR8WofFhcgZOeFnsi8D3ya%2FIdvpfgMD6ZyFicCKFXH3tG70QM2ifdwPq9f0PCV8G8j%2ByS5Lvc4YlD%2Fj8z34yje7wgwEQbfDQZnfi4Co6lgVmaob0gbxRA1eaRR7tGyfCdWjFgjdIyEpZShAncJBP3ltj25balYWYXeio%2F0YtvOGYAa2pRpdmzaMcCw7MNesXk2rsepad5AUDb4o8UGz9N5RArK7vuTLzURCApaiJ%2FMfUn5vLGCDf2Ps3HizeDE6%2FQQ6Awm0gAs%2BmbojGbjp6soqZ4GTz71dlglTUwfpBgqE0yZ0tVXnOAB1GihFnQA41PiUKIg%2BHaGEjqSoFL5csMKjr8L0GOqUB5HGJmLr3I4pAWhjcUGWqviGP0YE1rG4XHhavAt57za3i8ylrm43%2B8uhxRzMsz4BFfDiitO8KABpAORyhwkMB7D7hCLF17l%2BoIrY%2FwEdhwhFtOoBk2c6uz2ftcN4aBYgYjwg%2B8GmLJdFIM5ItQyyhPZYIaTVn608o6axOdlPlJhGMB2p6d8DT1M4QbhXsdlwAlOgGsLkfwXaJdSiV678yxIWe18v2&X-Amz-Signature=0db9af3cae96cf1551fa7d6d7051d9f54236935ed60a660f2c33e29a481c78fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
