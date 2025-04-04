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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXRGRIG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmQ7RadJFw1s2IX8KM6PFIcgY9YS2hXhX6pj4wDB06bAiBXT0cTmyVR3shwA%2B01Z4kGwG7VqRvMn0tlmestGxqerCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPZ%2FvIHugIIS7yExvKtwDn5NlRMr5urZLgt%2BAk3YS9apEMBSE1n14cL8q%2BWnYn8URHvg6D5gorTNiGshian2HNjNn9X%2F00BUDas%2FHysZE5E5lN5eTNEPEzBigNZs2HB9rB0ju%2FtrWEZmqxdIrZriyh%2BES%2Fk9EPa7IcCd3g48FAImzUBqS9pklMycN6OjA1mUcO4380UvHK7rpX1hFn%2Fa%2BI%2FTIzSl4LKI%2FKA5On58tDJMqu%2FOyaHWVLx1M5jHqTlCoZXXrdUiFeLzRVuLrsQn%2FToPjQZ6FoRgJz4q0Q8%2BDpSeL%2F8B2sFY%2FfRLKw%2F4ACRX3koYIwQcOVbNoenYPNsyN1fWvYRbapktgn87TQhU%2Fvj7u8%2FPOd9pDV6mQnePOVHKGuhhwryDtX8ho7lkSRTsbsXiKIgF2Zo0gQgU0H2gcky%2FZjpT6WTS67PVad%2BHRvT64%2F5%2BmLLZRVQI05bInn%2FSKXSwUS2TWrQhHgd9mQZwYabX2OHrXY5LAmCApti4crF498H168JhkinjsLnj7eFpeZo0qTTMFNUt3qDLfU3sx8reJY7qAkplvPetzBCbSjg2u1gKWWsHW08S5zpSfTGQaQgVUwwUiGkn8ABtn5%2F3hO3NWrS8VSjhsKLwTplc%2Fg%2B9xDR5zHnaOYR336XYwybm8vwY6pgEYJ36amtw01VvDZ3Fnqy1SsrUusQqTvb0zx0SG%2BPn0Qs%2FciY85W7yzB9FGHlHAgoFe3JHcxQxYLMRPkOjGsEeS3KwrMw1GWQR4%2BLEbYUmmTcoeZWay6xMZwtGZczgwvos17wnyANDJKauJoDVEPaSLxXCNDTJsjZvQL2QSR8cQ4Dlo8z0Ao0G%2FRBwepBq2GCjEg%2FfjE8gUnqJ8MTs%2FgJjy6YLEYWP%2B&X-Amz-Signature=9cad8716b8ead40f0c1ac0e2ce8830ad70ad232e1ddd96c531e91d7129850b05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXRGRIG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmQ7RadJFw1s2IX8KM6PFIcgY9YS2hXhX6pj4wDB06bAiBXT0cTmyVR3shwA%2B01Z4kGwG7VqRvMn0tlmestGxqerCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPZ%2FvIHugIIS7yExvKtwDn5NlRMr5urZLgt%2BAk3YS9apEMBSE1n14cL8q%2BWnYn8URHvg6D5gorTNiGshian2HNjNn9X%2F00BUDas%2FHysZE5E5lN5eTNEPEzBigNZs2HB9rB0ju%2FtrWEZmqxdIrZriyh%2BES%2Fk9EPa7IcCd3g48FAImzUBqS9pklMycN6OjA1mUcO4380UvHK7rpX1hFn%2Fa%2BI%2FTIzSl4LKI%2FKA5On58tDJMqu%2FOyaHWVLx1M5jHqTlCoZXXrdUiFeLzRVuLrsQn%2FToPjQZ6FoRgJz4q0Q8%2BDpSeL%2F8B2sFY%2FfRLKw%2F4ACRX3koYIwQcOVbNoenYPNsyN1fWvYRbapktgn87TQhU%2Fvj7u8%2FPOd9pDV6mQnePOVHKGuhhwryDtX8ho7lkSRTsbsXiKIgF2Zo0gQgU0H2gcky%2FZjpT6WTS67PVad%2BHRvT64%2F5%2BmLLZRVQI05bInn%2FSKXSwUS2TWrQhHgd9mQZwYabX2OHrXY5LAmCApti4crF498H168JhkinjsLnj7eFpeZo0qTTMFNUt3qDLfU3sx8reJY7qAkplvPetzBCbSjg2u1gKWWsHW08S5zpSfTGQaQgVUwwUiGkn8ABtn5%2F3hO3NWrS8VSjhsKLwTplc%2Fg%2B9xDR5zHnaOYR336XYwybm8vwY6pgEYJ36amtw01VvDZ3Fnqy1SsrUusQqTvb0zx0SG%2BPn0Qs%2FciY85W7yzB9FGHlHAgoFe3JHcxQxYLMRPkOjGsEeS3KwrMw1GWQR4%2BLEbYUmmTcoeZWay6xMZwtGZczgwvos17wnyANDJKauJoDVEPaSLxXCNDTJsjZvQL2QSR8cQ4Dlo8z0Ao0G%2FRBwepBq2GCjEg%2FfjE8gUnqJ8MTs%2FgJjy6YLEYWP%2B&X-Amz-Signature=09e1d9fe5f5957efa1d23aecee39a19de0f67938b641f6bc2955c3c7f6e12f64&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXRGRIG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmQ7RadJFw1s2IX8KM6PFIcgY9YS2hXhX6pj4wDB06bAiBXT0cTmyVR3shwA%2B01Z4kGwG7VqRvMn0tlmestGxqerCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPZ%2FvIHugIIS7yExvKtwDn5NlRMr5urZLgt%2BAk3YS9apEMBSE1n14cL8q%2BWnYn8URHvg6D5gorTNiGshian2HNjNn9X%2F00BUDas%2FHysZE5E5lN5eTNEPEzBigNZs2HB9rB0ju%2FtrWEZmqxdIrZriyh%2BES%2Fk9EPa7IcCd3g48FAImzUBqS9pklMycN6OjA1mUcO4380UvHK7rpX1hFn%2Fa%2BI%2FTIzSl4LKI%2FKA5On58tDJMqu%2FOyaHWVLx1M5jHqTlCoZXXrdUiFeLzRVuLrsQn%2FToPjQZ6FoRgJz4q0Q8%2BDpSeL%2F8B2sFY%2FfRLKw%2F4ACRX3koYIwQcOVbNoenYPNsyN1fWvYRbapktgn87TQhU%2Fvj7u8%2FPOd9pDV6mQnePOVHKGuhhwryDtX8ho7lkSRTsbsXiKIgF2Zo0gQgU0H2gcky%2FZjpT6WTS67PVad%2BHRvT64%2F5%2BmLLZRVQI05bInn%2FSKXSwUS2TWrQhHgd9mQZwYabX2OHrXY5LAmCApti4crF498H168JhkinjsLnj7eFpeZo0qTTMFNUt3qDLfU3sx8reJY7qAkplvPetzBCbSjg2u1gKWWsHW08S5zpSfTGQaQgVUwwUiGkn8ABtn5%2F3hO3NWrS8VSjhsKLwTplc%2Fg%2B9xDR5zHnaOYR336XYwybm8vwY6pgEYJ36amtw01VvDZ3Fnqy1SsrUusQqTvb0zx0SG%2BPn0Qs%2FciY85W7yzB9FGHlHAgoFe3JHcxQxYLMRPkOjGsEeS3KwrMw1GWQR4%2BLEbYUmmTcoeZWay6xMZwtGZczgwvos17wnyANDJKauJoDVEPaSLxXCNDTJsjZvQL2QSR8cQ4Dlo8z0Ao0G%2FRBwepBq2GCjEg%2FfjE8gUnqJ8MTs%2FgJjy6YLEYWP%2B&X-Amz-Signature=a0242f72e06b7ac9d61b7df13b08c0755ff0342b1a3d04745b2d21427c0a531e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXRGRIG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmQ7RadJFw1s2IX8KM6PFIcgY9YS2hXhX6pj4wDB06bAiBXT0cTmyVR3shwA%2B01Z4kGwG7VqRvMn0tlmestGxqerCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPZ%2FvIHugIIS7yExvKtwDn5NlRMr5urZLgt%2BAk3YS9apEMBSE1n14cL8q%2BWnYn8URHvg6D5gorTNiGshian2HNjNn9X%2F00BUDas%2FHysZE5E5lN5eTNEPEzBigNZs2HB9rB0ju%2FtrWEZmqxdIrZriyh%2BES%2Fk9EPa7IcCd3g48FAImzUBqS9pklMycN6OjA1mUcO4380UvHK7rpX1hFn%2Fa%2BI%2FTIzSl4LKI%2FKA5On58tDJMqu%2FOyaHWVLx1M5jHqTlCoZXXrdUiFeLzRVuLrsQn%2FToPjQZ6FoRgJz4q0Q8%2BDpSeL%2F8B2sFY%2FfRLKw%2F4ACRX3koYIwQcOVbNoenYPNsyN1fWvYRbapktgn87TQhU%2Fvj7u8%2FPOd9pDV6mQnePOVHKGuhhwryDtX8ho7lkSRTsbsXiKIgF2Zo0gQgU0H2gcky%2FZjpT6WTS67PVad%2BHRvT64%2F5%2BmLLZRVQI05bInn%2FSKXSwUS2TWrQhHgd9mQZwYabX2OHrXY5LAmCApti4crF498H168JhkinjsLnj7eFpeZo0qTTMFNUt3qDLfU3sx8reJY7qAkplvPetzBCbSjg2u1gKWWsHW08S5zpSfTGQaQgVUwwUiGkn8ABtn5%2F3hO3NWrS8VSjhsKLwTplc%2Fg%2B9xDR5zHnaOYR336XYwybm8vwY6pgEYJ36amtw01VvDZ3Fnqy1SsrUusQqTvb0zx0SG%2BPn0Qs%2FciY85W7yzB9FGHlHAgoFe3JHcxQxYLMRPkOjGsEeS3KwrMw1GWQR4%2BLEbYUmmTcoeZWay6xMZwtGZczgwvos17wnyANDJKauJoDVEPaSLxXCNDTJsjZvQL2QSR8cQ4Dlo8z0Ao0G%2FRBwepBq2GCjEg%2FfjE8gUnqJ8MTs%2FgJjy6YLEYWP%2B&X-Amz-Signature=808a8a485a5ebb6b45a5a3d972f6b61064af911d7558d0ce6eec88381bfa54ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXRGRIG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmQ7RadJFw1s2IX8KM6PFIcgY9YS2hXhX6pj4wDB06bAiBXT0cTmyVR3shwA%2B01Z4kGwG7VqRvMn0tlmestGxqerCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPZ%2FvIHugIIS7yExvKtwDn5NlRMr5urZLgt%2BAk3YS9apEMBSE1n14cL8q%2BWnYn8URHvg6D5gorTNiGshian2HNjNn9X%2F00BUDas%2FHysZE5E5lN5eTNEPEzBigNZs2HB9rB0ju%2FtrWEZmqxdIrZriyh%2BES%2Fk9EPa7IcCd3g48FAImzUBqS9pklMycN6OjA1mUcO4380UvHK7rpX1hFn%2Fa%2BI%2FTIzSl4LKI%2FKA5On58tDJMqu%2FOyaHWVLx1M5jHqTlCoZXXrdUiFeLzRVuLrsQn%2FToPjQZ6FoRgJz4q0Q8%2BDpSeL%2F8B2sFY%2FfRLKw%2F4ACRX3koYIwQcOVbNoenYPNsyN1fWvYRbapktgn87TQhU%2Fvj7u8%2FPOd9pDV6mQnePOVHKGuhhwryDtX8ho7lkSRTsbsXiKIgF2Zo0gQgU0H2gcky%2FZjpT6WTS67PVad%2BHRvT64%2F5%2BmLLZRVQI05bInn%2FSKXSwUS2TWrQhHgd9mQZwYabX2OHrXY5LAmCApti4crF498H168JhkinjsLnj7eFpeZo0qTTMFNUt3qDLfU3sx8reJY7qAkplvPetzBCbSjg2u1gKWWsHW08S5zpSfTGQaQgVUwwUiGkn8ABtn5%2F3hO3NWrS8VSjhsKLwTplc%2Fg%2B9xDR5zHnaOYR336XYwybm8vwY6pgEYJ36amtw01VvDZ3Fnqy1SsrUusQqTvb0zx0SG%2BPn0Qs%2FciY85W7yzB9FGHlHAgoFe3JHcxQxYLMRPkOjGsEeS3KwrMw1GWQR4%2BLEbYUmmTcoeZWay6xMZwtGZczgwvos17wnyANDJKauJoDVEPaSLxXCNDTJsjZvQL2QSR8cQ4Dlo8z0Ao0G%2FRBwepBq2GCjEg%2FfjE8gUnqJ8MTs%2FgJjy6YLEYWP%2B&X-Amz-Signature=15e5848208e58f7616dc9e877ce817f350062680899b6aec270643f16d1ed17b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
