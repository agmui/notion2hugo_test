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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=08fdac76e64b076be0b409f1a01862cbe6fe37969ba1f68e386f740a619876d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=8320520b779bbe2228cffc58bc4ddfa513cad1c1db5ca303d7f937b409a6f825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=0141abbedc2a2729f4a9a71e8204137edbf59eeb3a231b4a0e66b365ccea89d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=3472090b27d5d3322423c0f9f9b7a2177836c9c8091dcb1abda4a9c4e55f7400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=0299ea10c67257b76307359bb1983d3af6f253e91507ac56f910b62da2869893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
