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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YJ4GQJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUd0ujMX2v9dgl7x4OPk%2BKIhhu5p3DE0wXHl4QtAelQAiBfATz4wiLYoUzC7ZcvMvjZRyM%2FxXNCkJlhRHQdvHlsPCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeqLeaDYZ1%2FYRLPAKtwD57y7%2Bw6qIXtLqK6Nc3mYoFu8JLhSRMR5A2OQSBJAw88Q%2FCdpOtwZB1%2BhmV8PHAPC4im0AxiAOrRHQkKCk%2FOeZ74cwusqRR8%2B9IBxN%2BD8BCgE0W4mkm0ZLkCZor0lTXvh09ya2aoXQGLYFpqMou1hHMTUo%2FEnMGm%2BHG17YlQHAlDX%2Fx0hbOI%2Bc1EQ%2F7iPuU6jqG3DmhnOUe1kQLaalTFvrNf8qI8mPZGzIFcz7sZkHLQ53NtTXuJ53%2BnCfxajg%2Bx6v5k1kRAesKv2%2FzjtlRYWNI%2BoDEpANbWhj0vj%2BigVOJ4174QmEg8IjqQUFpSbG7Mm83icbhaPf82%2F%2BPinlmKD0mMInqU3UphkIFlb%2FZ4PIr21c%2FCAeTIb%2FSsECaNqVNn%2BySIDgYBAM1Y7fjY01tHhtOoltk6Tat1KPn92gHyrrq%2F9h1zxfp9iGDizvQ1DrS6xvufOovQoW5TL%2FGlouoSapE76GeLxYmvWOj0bQLZ3t736czoFSiBoj3D29vNnZ6fcIU8F1iOydWmvFwxIftyo7Gtef7D3ngt1n1McJZkZb%2FxkqchR%2F7wvXN6y8CYQJNg4g2GWUBndWn0jmeNKtIw4xUwlQ0on9tsEyU%2BxKAZlnD56CUxlRWQb2Torlaww78rcvQY6pgHAV4zIda1yzupIrAgQMae7klBz5fMpml4O888IBzr3ZEJdguzKzA8icHaV1yfTxtmGMHF%2FxzTdnZDvQ3cAkPeg7zwmM3sADH%2BFmQR7fXAlIXimVqhzRUCeMf0dgmyIKw81UBvzyF6Et8ZMl113e%2FIXFGCtaZdHdDpM%2Bt6HgydKjv6VLUeArpmKEuk5L%2FwLKbv4ZHY2Zl%2F01W6lz9t%2BiSOIf2BdE%2BA5&X-Amz-Signature=d2d8c27e039a77a9b3b82a2545c1c305816004737cc4418cea11c7b544b2c720&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YJ4GQJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUd0ujMX2v9dgl7x4OPk%2BKIhhu5p3DE0wXHl4QtAelQAiBfATz4wiLYoUzC7ZcvMvjZRyM%2FxXNCkJlhRHQdvHlsPCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeqLeaDYZ1%2FYRLPAKtwD57y7%2Bw6qIXtLqK6Nc3mYoFu8JLhSRMR5A2OQSBJAw88Q%2FCdpOtwZB1%2BhmV8PHAPC4im0AxiAOrRHQkKCk%2FOeZ74cwusqRR8%2B9IBxN%2BD8BCgE0W4mkm0ZLkCZor0lTXvh09ya2aoXQGLYFpqMou1hHMTUo%2FEnMGm%2BHG17YlQHAlDX%2Fx0hbOI%2Bc1EQ%2F7iPuU6jqG3DmhnOUe1kQLaalTFvrNf8qI8mPZGzIFcz7sZkHLQ53NtTXuJ53%2BnCfxajg%2Bx6v5k1kRAesKv2%2FzjtlRYWNI%2BoDEpANbWhj0vj%2BigVOJ4174QmEg8IjqQUFpSbG7Mm83icbhaPf82%2F%2BPinlmKD0mMInqU3UphkIFlb%2FZ4PIr21c%2FCAeTIb%2FSsECaNqVNn%2BySIDgYBAM1Y7fjY01tHhtOoltk6Tat1KPn92gHyrrq%2F9h1zxfp9iGDizvQ1DrS6xvufOovQoW5TL%2FGlouoSapE76GeLxYmvWOj0bQLZ3t736czoFSiBoj3D29vNnZ6fcIU8F1iOydWmvFwxIftyo7Gtef7D3ngt1n1McJZkZb%2FxkqchR%2F7wvXN6y8CYQJNg4g2GWUBndWn0jmeNKtIw4xUwlQ0on9tsEyU%2BxKAZlnD56CUxlRWQb2Torlaww78rcvQY6pgHAV4zIda1yzupIrAgQMae7klBz5fMpml4O888IBzr3ZEJdguzKzA8icHaV1yfTxtmGMHF%2FxzTdnZDvQ3cAkPeg7zwmM3sADH%2BFmQR7fXAlIXimVqhzRUCeMf0dgmyIKw81UBvzyF6Et8ZMl113e%2FIXFGCtaZdHdDpM%2Bt6HgydKjv6VLUeArpmKEuk5L%2FwLKbv4ZHY2Zl%2F01W6lz9t%2BiSOIf2BdE%2BA5&X-Amz-Signature=b56db89a467441ad09089364b995d9b1f80d9d75d9bfd8cc701be57afd55d3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YJ4GQJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUd0ujMX2v9dgl7x4OPk%2BKIhhu5p3DE0wXHl4QtAelQAiBfATz4wiLYoUzC7ZcvMvjZRyM%2FxXNCkJlhRHQdvHlsPCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeqLeaDYZ1%2FYRLPAKtwD57y7%2Bw6qIXtLqK6Nc3mYoFu8JLhSRMR5A2OQSBJAw88Q%2FCdpOtwZB1%2BhmV8PHAPC4im0AxiAOrRHQkKCk%2FOeZ74cwusqRR8%2B9IBxN%2BD8BCgE0W4mkm0ZLkCZor0lTXvh09ya2aoXQGLYFpqMou1hHMTUo%2FEnMGm%2BHG17YlQHAlDX%2Fx0hbOI%2Bc1EQ%2F7iPuU6jqG3DmhnOUe1kQLaalTFvrNf8qI8mPZGzIFcz7sZkHLQ53NtTXuJ53%2BnCfxajg%2Bx6v5k1kRAesKv2%2FzjtlRYWNI%2BoDEpANbWhj0vj%2BigVOJ4174QmEg8IjqQUFpSbG7Mm83icbhaPf82%2F%2BPinlmKD0mMInqU3UphkIFlb%2FZ4PIr21c%2FCAeTIb%2FSsECaNqVNn%2BySIDgYBAM1Y7fjY01tHhtOoltk6Tat1KPn92gHyrrq%2F9h1zxfp9iGDizvQ1DrS6xvufOovQoW5TL%2FGlouoSapE76GeLxYmvWOj0bQLZ3t736czoFSiBoj3D29vNnZ6fcIU8F1iOydWmvFwxIftyo7Gtef7D3ngt1n1McJZkZb%2FxkqchR%2F7wvXN6y8CYQJNg4g2GWUBndWn0jmeNKtIw4xUwlQ0on9tsEyU%2BxKAZlnD56CUxlRWQb2Torlaww78rcvQY6pgHAV4zIda1yzupIrAgQMae7klBz5fMpml4O888IBzr3ZEJdguzKzA8icHaV1yfTxtmGMHF%2FxzTdnZDvQ3cAkPeg7zwmM3sADH%2BFmQR7fXAlIXimVqhzRUCeMf0dgmyIKw81UBvzyF6Et8ZMl113e%2FIXFGCtaZdHdDpM%2Bt6HgydKjv6VLUeArpmKEuk5L%2FwLKbv4ZHY2Zl%2F01W6lz9t%2BiSOIf2BdE%2BA5&X-Amz-Signature=0dc05198e91223c8ca89941ff42d1f427fdff5a803250dd3296d4e920508e1ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YJ4GQJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUd0ujMX2v9dgl7x4OPk%2BKIhhu5p3DE0wXHl4QtAelQAiBfATz4wiLYoUzC7ZcvMvjZRyM%2FxXNCkJlhRHQdvHlsPCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeqLeaDYZ1%2FYRLPAKtwD57y7%2Bw6qIXtLqK6Nc3mYoFu8JLhSRMR5A2OQSBJAw88Q%2FCdpOtwZB1%2BhmV8PHAPC4im0AxiAOrRHQkKCk%2FOeZ74cwusqRR8%2B9IBxN%2BD8BCgE0W4mkm0ZLkCZor0lTXvh09ya2aoXQGLYFpqMou1hHMTUo%2FEnMGm%2BHG17YlQHAlDX%2Fx0hbOI%2Bc1EQ%2F7iPuU6jqG3DmhnOUe1kQLaalTFvrNf8qI8mPZGzIFcz7sZkHLQ53NtTXuJ53%2BnCfxajg%2Bx6v5k1kRAesKv2%2FzjtlRYWNI%2BoDEpANbWhj0vj%2BigVOJ4174QmEg8IjqQUFpSbG7Mm83icbhaPf82%2F%2BPinlmKD0mMInqU3UphkIFlb%2FZ4PIr21c%2FCAeTIb%2FSsECaNqVNn%2BySIDgYBAM1Y7fjY01tHhtOoltk6Tat1KPn92gHyrrq%2F9h1zxfp9iGDizvQ1DrS6xvufOovQoW5TL%2FGlouoSapE76GeLxYmvWOj0bQLZ3t736czoFSiBoj3D29vNnZ6fcIU8F1iOydWmvFwxIftyo7Gtef7D3ngt1n1McJZkZb%2FxkqchR%2F7wvXN6y8CYQJNg4g2GWUBndWn0jmeNKtIw4xUwlQ0on9tsEyU%2BxKAZlnD56CUxlRWQb2Torlaww78rcvQY6pgHAV4zIda1yzupIrAgQMae7klBz5fMpml4O888IBzr3ZEJdguzKzA8icHaV1yfTxtmGMHF%2FxzTdnZDvQ3cAkPeg7zwmM3sADH%2BFmQR7fXAlIXimVqhzRUCeMf0dgmyIKw81UBvzyF6Et8ZMl113e%2FIXFGCtaZdHdDpM%2Bt6HgydKjv6VLUeArpmKEuk5L%2FwLKbv4ZHY2Zl%2F01W6lz9t%2BiSOIf2BdE%2BA5&X-Amz-Signature=cf57486316b0341617e6d94c60ad1e15d68b45172510ad6d55084e88bb422233&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YJ4GQJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUd0ujMX2v9dgl7x4OPk%2BKIhhu5p3DE0wXHl4QtAelQAiBfATz4wiLYoUzC7ZcvMvjZRyM%2FxXNCkJlhRHQdvHlsPCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeqLeaDYZ1%2FYRLPAKtwD57y7%2Bw6qIXtLqK6Nc3mYoFu8JLhSRMR5A2OQSBJAw88Q%2FCdpOtwZB1%2BhmV8PHAPC4im0AxiAOrRHQkKCk%2FOeZ74cwusqRR8%2B9IBxN%2BD8BCgE0W4mkm0ZLkCZor0lTXvh09ya2aoXQGLYFpqMou1hHMTUo%2FEnMGm%2BHG17YlQHAlDX%2Fx0hbOI%2Bc1EQ%2F7iPuU6jqG3DmhnOUe1kQLaalTFvrNf8qI8mPZGzIFcz7sZkHLQ53NtTXuJ53%2BnCfxajg%2Bx6v5k1kRAesKv2%2FzjtlRYWNI%2BoDEpANbWhj0vj%2BigVOJ4174QmEg8IjqQUFpSbG7Mm83icbhaPf82%2F%2BPinlmKD0mMInqU3UphkIFlb%2FZ4PIr21c%2FCAeTIb%2FSsECaNqVNn%2BySIDgYBAM1Y7fjY01tHhtOoltk6Tat1KPn92gHyrrq%2F9h1zxfp9iGDizvQ1DrS6xvufOovQoW5TL%2FGlouoSapE76GeLxYmvWOj0bQLZ3t736czoFSiBoj3D29vNnZ6fcIU8F1iOydWmvFwxIftyo7Gtef7D3ngt1n1McJZkZb%2FxkqchR%2F7wvXN6y8CYQJNg4g2GWUBndWn0jmeNKtIw4xUwlQ0on9tsEyU%2BxKAZlnD56CUxlRWQb2Torlaww78rcvQY6pgHAV4zIda1yzupIrAgQMae7klBz5fMpml4O888IBzr3ZEJdguzKzA8icHaV1yfTxtmGMHF%2FxzTdnZDvQ3cAkPeg7zwmM3sADH%2BFmQR7fXAlIXimVqhzRUCeMf0dgmyIKw81UBvzyF6Et8ZMl113e%2FIXFGCtaZdHdDpM%2Bt6HgydKjv6VLUeArpmKEuk5L%2FwLKbv4ZHY2Zl%2F01W6lz9t%2BiSOIf2BdE%2BA5&X-Amz-Signature=53429577611e597c636a6e6a03a703abd53b699f4c7449925ebda526bf4a7d90&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
