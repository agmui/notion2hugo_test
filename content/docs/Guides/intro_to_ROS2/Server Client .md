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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMD7JFDS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkOEf3SK0ZhHMdfciEM4IWZuZG%2BQ0%2BgneyE4khn%2BzD%2BAiEAlizkjhIGrGuxJB%2BChBN%2BsxX5Wp5pQuMJqSG92adkXIAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAP9mPjRLuyGZ3jg9SrcA%2Bo7OGydds3l2Pjimu%2BSu7225Z6KzDWiBJcu4urHYUOjqCVgUZg2a0Jn6RHZBFqxqp8qp%2FrYjLwJH9VBhrjINBsFYQsq9z%2BiYdjupUoUC32491F5ozcq1UuM5feZFWlJcUr2%2F%2B7BqMaPvdX%2Fk9D6KICD7Jf9udyJ%2BPorjqIrNMoxloo9pmdW3OIixnr4MDOTIYgGs8MS85k7pTxWNNN0kopUua9DiGts49Hclr8LOQxlUt6NBzrHEFiNsxBM2wNU1XbeortZSHvyM%2BTc8vCPQRQ0IWl0defOKC5i22Jn5NHQGEJGQKAEsfF0c9PqeXRy6yDo9X6MeLxIG5IhEe1m6lRysPAs1IpL2EWkGaG9K1f2UrnVrO5ovXFmqKQZf3PUZupC7PyOJA7WOwdhPsS0XfPvG%2BayHY%2FWqnLgWb7oiSbPG3QLxD%2FQsRUhXQDL%2FkBcLV4Q0lMyFv90zSlL49omvkhIjckyLpG2BtmENSmQhRi%2BC%2FhOKZUqST07lwQ1m8e9OfEpHCwOxAwSJxXzC9KbGVf0mXMnrQ0SAMGXnQXSMUtM5kmuRpdhtVB9aqK796vhE%2FNSAxYqKysDb%2FJCuRW%2BLE6VLZIu7E4BEoanDDO7M8x4XzKfdfNgkoASHGPtMLS2osEGOqUBZafGeJn%2BdSXcM1ncoPj90RyzKgs%2B0XorYsA5VjhMLbw1%2BaH1%2BDVpiFPlm5ml6seGlVOSUO2vJs1JxMZtr498xcNLq7SiawSEa2VnQFAjsRmGT0ISgxO9RqskM03%2F1%2BV0VlV3Xr0tQVAqqdkTNfgKXx60ov1VPh%2Fni62txO8LCN6kj68YqNFP8OJk5spBaXumF%2BXgmbuUWe1ZnBGFYo%2Bb7EG10thK&X-Amz-Signature=98ac8ee4e8a817dcb449d2d2899c2ae918fa686a8921136476ce4dfc76f1f3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMD7JFDS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkOEf3SK0ZhHMdfciEM4IWZuZG%2BQ0%2BgneyE4khn%2BzD%2BAiEAlizkjhIGrGuxJB%2BChBN%2BsxX5Wp5pQuMJqSG92adkXIAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAP9mPjRLuyGZ3jg9SrcA%2Bo7OGydds3l2Pjimu%2BSu7225Z6KzDWiBJcu4urHYUOjqCVgUZg2a0Jn6RHZBFqxqp8qp%2FrYjLwJH9VBhrjINBsFYQsq9z%2BiYdjupUoUC32491F5ozcq1UuM5feZFWlJcUr2%2F%2B7BqMaPvdX%2Fk9D6KICD7Jf9udyJ%2BPorjqIrNMoxloo9pmdW3OIixnr4MDOTIYgGs8MS85k7pTxWNNN0kopUua9DiGts49Hclr8LOQxlUt6NBzrHEFiNsxBM2wNU1XbeortZSHvyM%2BTc8vCPQRQ0IWl0defOKC5i22Jn5NHQGEJGQKAEsfF0c9PqeXRy6yDo9X6MeLxIG5IhEe1m6lRysPAs1IpL2EWkGaG9K1f2UrnVrO5ovXFmqKQZf3PUZupC7PyOJA7WOwdhPsS0XfPvG%2BayHY%2FWqnLgWb7oiSbPG3QLxD%2FQsRUhXQDL%2FkBcLV4Q0lMyFv90zSlL49omvkhIjckyLpG2BtmENSmQhRi%2BC%2FhOKZUqST07lwQ1m8e9OfEpHCwOxAwSJxXzC9KbGVf0mXMnrQ0SAMGXnQXSMUtM5kmuRpdhtVB9aqK796vhE%2FNSAxYqKysDb%2FJCuRW%2BLE6VLZIu7E4BEoanDDO7M8x4XzKfdfNgkoASHGPtMLS2osEGOqUBZafGeJn%2BdSXcM1ncoPj90RyzKgs%2B0XorYsA5VjhMLbw1%2BaH1%2BDVpiFPlm5ml6seGlVOSUO2vJs1JxMZtr498xcNLq7SiawSEa2VnQFAjsRmGT0ISgxO9RqskM03%2F1%2BV0VlV3Xr0tQVAqqdkTNfgKXx60ov1VPh%2Fni62txO8LCN6kj68YqNFP8OJk5spBaXumF%2BXgmbuUWe1ZnBGFYo%2Bb7EG10thK&X-Amz-Signature=141068838d57d8584da518cff7cb0a9ee81163a09fe3b1e2d27cbfbd2a66a40e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMD7JFDS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkOEf3SK0ZhHMdfciEM4IWZuZG%2BQ0%2BgneyE4khn%2BzD%2BAiEAlizkjhIGrGuxJB%2BChBN%2BsxX5Wp5pQuMJqSG92adkXIAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAP9mPjRLuyGZ3jg9SrcA%2Bo7OGydds3l2Pjimu%2BSu7225Z6KzDWiBJcu4urHYUOjqCVgUZg2a0Jn6RHZBFqxqp8qp%2FrYjLwJH9VBhrjINBsFYQsq9z%2BiYdjupUoUC32491F5ozcq1UuM5feZFWlJcUr2%2F%2B7BqMaPvdX%2Fk9D6KICD7Jf9udyJ%2BPorjqIrNMoxloo9pmdW3OIixnr4MDOTIYgGs8MS85k7pTxWNNN0kopUua9DiGts49Hclr8LOQxlUt6NBzrHEFiNsxBM2wNU1XbeortZSHvyM%2BTc8vCPQRQ0IWl0defOKC5i22Jn5NHQGEJGQKAEsfF0c9PqeXRy6yDo9X6MeLxIG5IhEe1m6lRysPAs1IpL2EWkGaG9K1f2UrnVrO5ovXFmqKQZf3PUZupC7PyOJA7WOwdhPsS0XfPvG%2BayHY%2FWqnLgWb7oiSbPG3QLxD%2FQsRUhXQDL%2FkBcLV4Q0lMyFv90zSlL49omvkhIjckyLpG2BtmENSmQhRi%2BC%2FhOKZUqST07lwQ1m8e9OfEpHCwOxAwSJxXzC9KbGVf0mXMnrQ0SAMGXnQXSMUtM5kmuRpdhtVB9aqK796vhE%2FNSAxYqKysDb%2FJCuRW%2BLE6VLZIu7E4BEoanDDO7M8x4XzKfdfNgkoASHGPtMLS2osEGOqUBZafGeJn%2BdSXcM1ncoPj90RyzKgs%2B0XorYsA5VjhMLbw1%2BaH1%2BDVpiFPlm5ml6seGlVOSUO2vJs1JxMZtr498xcNLq7SiawSEa2VnQFAjsRmGT0ISgxO9RqskM03%2F1%2BV0VlV3Xr0tQVAqqdkTNfgKXx60ov1VPh%2Fni62txO8LCN6kj68YqNFP8OJk5spBaXumF%2BXgmbuUWe1ZnBGFYo%2Bb7EG10thK&X-Amz-Signature=29af50d8c6368762db150ad39a73f00e7a7ff104ea3707d626c056fc13ba54b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMD7JFDS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkOEf3SK0ZhHMdfciEM4IWZuZG%2BQ0%2BgneyE4khn%2BzD%2BAiEAlizkjhIGrGuxJB%2BChBN%2BsxX5Wp5pQuMJqSG92adkXIAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAP9mPjRLuyGZ3jg9SrcA%2Bo7OGydds3l2Pjimu%2BSu7225Z6KzDWiBJcu4urHYUOjqCVgUZg2a0Jn6RHZBFqxqp8qp%2FrYjLwJH9VBhrjINBsFYQsq9z%2BiYdjupUoUC32491F5ozcq1UuM5feZFWlJcUr2%2F%2B7BqMaPvdX%2Fk9D6KICD7Jf9udyJ%2BPorjqIrNMoxloo9pmdW3OIixnr4MDOTIYgGs8MS85k7pTxWNNN0kopUua9DiGts49Hclr8LOQxlUt6NBzrHEFiNsxBM2wNU1XbeortZSHvyM%2BTc8vCPQRQ0IWl0defOKC5i22Jn5NHQGEJGQKAEsfF0c9PqeXRy6yDo9X6MeLxIG5IhEe1m6lRysPAs1IpL2EWkGaG9K1f2UrnVrO5ovXFmqKQZf3PUZupC7PyOJA7WOwdhPsS0XfPvG%2BayHY%2FWqnLgWb7oiSbPG3QLxD%2FQsRUhXQDL%2FkBcLV4Q0lMyFv90zSlL49omvkhIjckyLpG2BtmENSmQhRi%2BC%2FhOKZUqST07lwQ1m8e9OfEpHCwOxAwSJxXzC9KbGVf0mXMnrQ0SAMGXnQXSMUtM5kmuRpdhtVB9aqK796vhE%2FNSAxYqKysDb%2FJCuRW%2BLE6VLZIu7E4BEoanDDO7M8x4XzKfdfNgkoASHGPtMLS2osEGOqUBZafGeJn%2BdSXcM1ncoPj90RyzKgs%2B0XorYsA5VjhMLbw1%2BaH1%2BDVpiFPlm5ml6seGlVOSUO2vJs1JxMZtr498xcNLq7SiawSEa2VnQFAjsRmGT0ISgxO9RqskM03%2F1%2BV0VlV3Xr0tQVAqqdkTNfgKXx60ov1VPh%2Fni62txO8LCN6kj68YqNFP8OJk5spBaXumF%2BXgmbuUWe1ZnBGFYo%2Bb7EG10thK&X-Amz-Signature=902a8787a9a3ebe415d26763c619925847c8ec1a4679a6d7ed10b82a281924cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMD7JFDS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkOEf3SK0ZhHMdfciEM4IWZuZG%2BQ0%2BgneyE4khn%2BzD%2BAiEAlizkjhIGrGuxJB%2BChBN%2BsxX5Wp5pQuMJqSG92adkXIAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAP9mPjRLuyGZ3jg9SrcA%2Bo7OGydds3l2Pjimu%2BSu7225Z6KzDWiBJcu4urHYUOjqCVgUZg2a0Jn6RHZBFqxqp8qp%2FrYjLwJH9VBhrjINBsFYQsq9z%2BiYdjupUoUC32491F5ozcq1UuM5feZFWlJcUr2%2F%2B7BqMaPvdX%2Fk9D6KICD7Jf9udyJ%2BPorjqIrNMoxloo9pmdW3OIixnr4MDOTIYgGs8MS85k7pTxWNNN0kopUua9DiGts49Hclr8LOQxlUt6NBzrHEFiNsxBM2wNU1XbeortZSHvyM%2BTc8vCPQRQ0IWl0defOKC5i22Jn5NHQGEJGQKAEsfF0c9PqeXRy6yDo9X6MeLxIG5IhEe1m6lRysPAs1IpL2EWkGaG9K1f2UrnVrO5ovXFmqKQZf3PUZupC7PyOJA7WOwdhPsS0XfPvG%2BayHY%2FWqnLgWb7oiSbPG3QLxD%2FQsRUhXQDL%2FkBcLV4Q0lMyFv90zSlL49omvkhIjckyLpG2BtmENSmQhRi%2BC%2FhOKZUqST07lwQ1m8e9OfEpHCwOxAwSJxXzC9KbGVf0mXMnrQ0SAMGXnQXSMUtM5kmuRpdhtVB9aqK796vhE%2FNSAxYqKysDb%2FJCuRW%2BLE6VLZIu7E4BEoanDDO7M8x4XzKfdfNgkoASHGPtMLS2osEGOqUBZafGeJn%2BdSXcM1ncoPj90RyzKgs%2B0XorYsA5VjhMLbw1%2BaH1%2BDVpiFPlm5ml6seGlVOSUO2vJs1JxMZtr498xcNLq7SiawSEa2VnQFAjsRmGT0ISgxO9RqskM03%2F1%2BV0VlV3Xr0tQVAqqdkTNfgKXx60ov1VPh%2Fni62txO8LCN6kj68YqNFP8OJk5spBaXumF%2BXgmbuUWe1ZnBGFYo%2Bb7EG10thK&X-Amz-Signature=a0e6e6eb85e78d134189615ad62d8b870e55777f54b6c95bf622ddb37f975437&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
