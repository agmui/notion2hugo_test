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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B43KGW3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDFaXTEaM71tIPwqZz4m6DYAWg3Cn%2B5nzZVjbJ2WPn5SAiEA7GSPoZ2wqXuU1v3uh66bm%2FHWJP9uVI1b%2Big0h4tl%2F2Uq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDVH0jClGFIdNF4NeCrcA1NsB0GFu9Qvbs9ZcMY8MkoH0U77bpMw3XSnPl5YW7jmwAPLPJGVgR61e2u0t%2Fjx1VTXuYMYV2fOmwXpu%2Fjwp29iZhbGqrkjkAQxM%2FrNhuzoVTe9CuKdW9xB82%2BurFQyO4DEeJ%2FV9ccZbePrD0kt2VGTcJ5L5PFRXASc6koItCK59uePILAzNN0%2F5CehELbFPzd9RwEVRG%2BQu4Sy7EDNMvrVKSDmkWX9i8cAZzf4onWdZVCOI0ss83UiFZEwwQ7Ip3VWdGC2%2BeKlhNVHCUidfMuOJ%2FOueofLPEdFUMpFFENETl4PXuLqmhrW53aj%2BjDrsc3E7RRY%2Fexsjh5mGqEpnFwXeIRNUUqhR7kEHDRTlyOTSDPaZIxFVm3W%2B5BFf2ySnfl9S9YEtwDbTPG0%2FjiOHrSUapCxZhrWjsBXVgNZt0AO%2BISD67sA0sVJhiUmTT%2BzXF5FGTHbsmhB%2F6cxrwCYuJDqvvumvIdGJ6o%2F%2F%2Fokmdchu3jdRnOKcPQtyr4thrqipPlm9VWBHibCYLPDcly%2FIBAm73qjlQ9drSyc86yfUiXQjPbzIWDMBeSHyICNyz7iDE2hgjozw7UAq2n0jd3uoWoc%2FDYH1UF2brH130FLPvspQwtnw6ZHGvrvqQJKMKakmsQGOqUB2W4vF7PfJnrPxqRxhjTQ%2FRJfWAL7RP1XubXsGv0rDWLt%2F0oa%2FxYpdbFODzjSy1kmZySpicJy5D3DDYujZxkxBKRuoeC8nwOI5vKVofutMN%2BZpTk3nptkp59JIDxZDHtSyvIJJCyEKJivgk29xsHQgLJF8nhHEVTOKMOMBdZMrot5T9HEq5Bch72hnVl%2BKHcAC2oRs3Gn76P35JHjTkjYkfg5jLN5&X-Amz-Signature=37bb5bc8b7e1f87a46778bd6e6760398f1beb8f9bac80a51aa1d2bd9f6236cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B43KGW3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDFaXTEaM71tIPwqZz4m6DYAWg3Cn%2B5nzZVjbJ2WPn5SAiEA7GSPoZ2wqXuU1v3uh66bm%2FHWJP9uVI1b%2Big0h4tl%2F2Uq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDVH0jClGFIdNF4NeCrcA1NsB0GFu9Qvbs9ZcMY8MkoH0U77bpMw3XSnPl5YW7jmwAPLPJGVgR61e2u0t%2Fjx1VTXuYMYV2fOmwXpu%2Fjwp29iZhbGqrkjkAQxM%2FrNhuzoVTe9CuKdW9xB82%2BurFQyO4DEeJ%2FV9ccZbePrD0kt2VGTcJ5L5PFRXASc6koItCK59uePILAzNN0%2F5CehELbFPzd9RwEVRG%2BQu4Sy7EDNMvrVKSDmkWX9i8cAZzf4onWdZVCOI0ss83UiFZEwwQ7Ip3VWdGC2%2BeKlhNVHCUidfMuOJ%2FOueofLPEdFUMpFFENETl4PXuLqmhrW53aj%2BjDrsc3E7RRY%2Fexsjh5mGqEpnFwXeIRNUUqhR7kEHDRTlyOTSDPaZIxFVm3W%2B5BFf2ySnfl9S9YEtwDbTPG0%2FjiOHrSUapCxZhrWjsBXVgNZt0AO%2BISD67sA0sVJhiUmTT%2BzXF5FGTHbsmhB%2F6cxrwCYuJDqvvumvIdGJ6o%2F%2F%2Fokmdchu3jdRnOKcPQtyr4thrqipPlm9VWBHibCYLPDcly%2FIBAm73qjlQ9drSyc86yfUiXQjPbzIWDMBeSHyICNyz7iDE2hgjozw7UAq2n0jd3uoWoc%2FDYH1UF2brH130FLPvspQwtnw6ZHGvrvqQJKMKakmsQGOqUB2W4vF7PfJnrPxqRxhjTQ%2FRJfWAL7RP1XubXsGv0rDWLt%2F0oa%2FxYpdbFODzjSy1kmZySpicJy5D3DDYujZxkxBKRuoeC8nwOI5vKVofutMN%2BZpTk3nptkp59JIDxZDHtSyvIJJCyEKJivgk29xsHQgLJF8nhHEVTOKMOMBdZMrot5T9HEq5Bch72hnVl%2BKHcAC2oRs3Gn76P35JHjTkjYkfg5jLN5&X-Amz-Signature=6e2b17b4369a153f8b7e763e5b9978590571fdd4b95d0f4070da47423443b1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B43KGW3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDFaXTEaM71tIPwqZz4m6DYAWg3Cn%2B5nzZVjbJ2WPn5SAiEA7GSPoZ2wqXuU1v3uh66bm%2FHWJP9uVI1b%2Big0h4tl%2F2Uq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDVH0jClGFIdNF4NeCrcA1NsB0GFu9Qvbs9ZcMY8MkoH0U77bpMw3XSnPl5YW7jmwAPLPJGVgR61e2u0t%2Fjx1VTXuYMYV2fOmwXpu%2Fjwp29iZhbGqrkjkAQxM%2FrNhuzoVTe9CuKdW9xB82%2BurFQyO4DEeJ%2FV9ccZbePrD0kt2VGTcJ5L5PFRXASc6koItCK59uePILAzNN0%2F5CehELbFPzd9RwEVRG%2BQu4Sy7EDNMvrVKSDmkWX9i8cAZzf4onWdZVCOI0ss83UiFZEwwQ7Ip3VWdGC2%2BeKlhNVHCUidfMuOJ%2FOueofLPEdFUMpFFENETl4PXuLqmhrW53aj%2BjDrsc3E7RRY%2Fexsjh5mGqEpnFwXeIRNUUqhR7kEHDRTlyOTSDPaZIxFVm3W%2B5BFf2ySnfl9S9YEtwDbTPG0%2FjiOHrSUapCxZhrWjsBXVgNZt0AO%2BISD67sA0sVJhiUmTT%2BzXF5FGTHbsmhB%2F6cxrwCYuJDqvvumvIdGJ6o%2F%2F%2Fokmdchu3jdRnOKcPQtyr4thrqipPlm9VWBHibCYLPDcly%2FIBAm73qjlQ9drSyc86yfUiXQjPbzIWDMBeSHyICNyz7iDE2hgjozw7UAq2n0jd3uoWoc%2FDYH1UF2brH130FLPvspQwtnw6ZHGvrvqQJKMKakmsQGOqUB2W4vF7PfJnrPxqRxhjTQ%2FRJfWAL7RP1XubXsGv0rDWLt%2F0oa%2FxYpdbFODzjSy1kmZySpicJy5D3DDYujZxkxBKRuoeC8nwOI5vKVofutMN%2BZpTk3nptkp59JIDxZDHtSyvIJJCyEKJivgk29xsHQgLJF8nhHEVTOKMOMBdZMrot5T9HEq5Bch72hnVl%2BKHcAC2oRs3Gn76P35JHjTkjYkfg5jLN5&X-Amz-Signature=78e951e0f0c7c58ddb6ea6d2c2b77e3b71fc184eb77173b557577a3e52a813ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B43KGW3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDFaXTEaM71tIPwqZz4m6DYAWg3Cn%2B5nzZVjbJ2WPn5SAiEA7GSPoZ2wqXuU1v3uh66bm%2FHWJP9uVI1b%2Big0h4tl%2F2Uq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDVH0jClGFIdNF4NeCrcA1NsB0GFu9Qvbs9ZcMY8MkoH0U77bpMw3XSnPl5YW7jmwAPLPJGVgR61e2u0t%2Fjx1VTXuYMYV2fOmwXpu%2Fjwp29iZhbGqrkjkAQxM%2FrNhuzoVTe9CuKdW9xB82%2BurFQyO4DEeJ%2FV9ccZbePrD0kt2VGTcJ5L5PFRXASc6koItCK59uePILAzNN0%2F5CehELbFPzd9RwEVRG%2BQu4Sy7EDNMvrVKSDmkWX9i8cAZzf4onWdZVCOI0ss83UiFZEwwQ7Ip3VWdGC2%2BeKlhNVHCUidfMuOJ%2FOueofLPEdFUMpFFENETl4PXuLqmhrW53aj%2BjDrsc3E7RRY%2Fexsjh5mGqEpnFwXeIRNUUqhR7kEHDRTlyOTSDPaZIxFVm3W%2B5BFf2ySnfl9S9YEtwDbTPG0%2FjiOHrSUapCxZhrWjsBXVgNZt0AO%2BISD67sA0sVJhiUmTT%2BzXF5FGTHbsmhB%2F6cxrwCYuJDqvvumvIdGJ6o%2F%2F%2Fokmdchu3jdRnOKcPQtyr4thrqipPlm9VWBHibCYLPDcly%2FIBAm73qjlQ9drSyc86yfUiXQjPbzIWDMBeSHyICNyz7iDE2hgjozw7UAq2n0jd3uoWoc%2FDYH1UF2brH130FLPvspQwtnw6ZHGvrvqQJKMKakmsQGOqUB2W4vF7PfJnrPxqRxhjTQ%2FRJfWAL7RP1XubXsGv0rDWLt%2F0oa%2FxYpdbFODzjSy1kmZySpicJy5D3DDYujZxkxBKRuoeC8nwOI5vKVofutMN%2BZpTk3nptkp59JIDxZDHtSyvIJJCyEKJivgk29xsHQgLJF8nhHEVTOKMOMBdZMrot5T9HEq5Bch72hnVl%2BKHcAC2oRs3Gn76P35JHjTkjYkfg5jLN5&X-Amz-Signature=0ad22b80ed31e0d7b94cca0539c6116372d6084c98f50c6fa1746ff7a65d1e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B43KGW3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDFaXTEaM71tIPwqZz4m6DYAWg3Cn%2B5nzZVjbJ2WPn5SAiEA7GSPoZ2wqXuU1v3uh66bm%2FHWJP9uVI1b%2Big0h4tl%2F2Uq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDVH0jClGFIdNF4NeCrcA1NsB0GFu9Qvbs9ZcMY8MkoH0U77bpMw3XSnPl5YW7jmwAPLPJGVgR61e2u0t%2Fjx1VTXuYMYV2fOmwXpu%2Fjwp29iZhbGqrkjkAQxM%2FrNhuzoVTe9CuKdW9xB82%2BurFQyO4DEeJ%2FV9ccZbePrD0kt2VGTcJ5L5PFRXASc6koItCK59uePILAzNN0%2F5CehELbFPzd9RwEVRG%2BQu4Sy7EDNMvrVKSDmkWX9i8cAZzf4onWdZVCOI0ss83UiFZEwwQ7Ip3VWdGC2%2BeKlhNVHCUidfMuOJ%2FOueofLPEdFUMpFFENETl4PXuLqmhrW53aj%2BjDrsc3E7RRY%2Fexsjh5mGqEpnFwXeIRNUUqhR7kEHDRTlyOTSDPaZIxFVm3W%2B5BFf2ySnfl9S9YEtwDbTPG0%2FjiOHrSUapCxZhrWjsBXVgNZt0AO%2BISD67sA0sVJhiUmTT%2BzXF5FGTHbsmhB%2F6cxrwCYuJDqvvumvIdGJ6o%2F%2F%2Fokmdchu3jdRnOKcPQtyr4thrqipPlm9VWBHibCYLPDcly%2FIBAm73qjlQ9drSyc86yfUiXQjPbzIWDMBeSHyICNyz7iDE2hgjozw7UAq2n0jd3uoWoc%2FDYH1UF2brH130FLPvspQwtnw6ZHGvrvqQJKMKakmsQGOqUB2W4vF7PfJnrPxqRxhjTQ%2FRJfWAL7RP1XubXsGv0rDWLt%2F0oa%2FxYpdbFODzjSy1kmZySpicJy5D3DDYujZxkxBKRuoeC8nwOI5vKVofutMN%2BZpTk3nptkp59JIDxZDHtSyvIJJCyEKJivgk29xsHQgLJF8nhHEVTOKMOMBdZMrot5T9HEq5Bch72hnVl%2BKHcAC2oRs3Gn76P35JHjTkjYkfg5jLN5&X-Amz-Signature=78977069ac5b0328ca09322fee4a4dcfe8b62aa3cd6b57740877bb2c2953cb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
