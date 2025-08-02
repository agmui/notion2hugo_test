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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNZSN5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7KcHVlYTCS%2FnLTUb7HB8zlivPZE1bh840gzTngMBcJQIhANlv9GNE3DWgI5ch6G3TQizpuhnz66U81eQSJJys6hJrKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCeswg%2FCxhrV5lPHEq3AMotOmF3cPEFjhY8Ty7Swt8wK2uYTRbBw5UZw6T55HHJhs3gNcUvvPX2gsRtI63Cq2DLFMNudS5cmfWzxLh%2B1WMeL5coK3KHLyKsdCReikcZ4tOnEyiMQJpxtJaJ7H16ZoEX7uNfWNmLfIcmsGOtuy0x2i1fFOe%2Bh%2BdhaLPyS8cAcwaMmpF3IASbuBqE6mHNORirMVpyZC88WQL5xkkcHEmMyPXE1gpo%2FzTkq9w6yYFhpL34Bwo5BRhXkHDr9YOX3tkE5j146dghb3eKTq9fGU4n%2FskoKilY4EfGpu5Yp2SIC18nqSLbrMJnDMEiLTvfr8fjUNQkjzFFpH1xaZANKqKy5vRl6PPBQBD29Z3S%2FRfEyBkHi2AGrcCsNgF4rNe2kVvNzBA0T5bgHTWU%2B2Q9mPc8U5e1BMoP4%2ByzuoN6yJNs8MmQYptdukK9ioCW4ULHD%2FFjwjWfPPtDa7tLZb8BhkflxnllKpVBM%2BP%2Bhoqv5pn%2B1pJ1eCaTP96KVqLHZ1biR8BllChRS79Jvf8LlI1lx%2FvuL3jRqCdG%2BwMGgC4dvCs8eWsqVno3ahkNeBHxT29PWUNVaWQFzGX8LrzvL9ey4TWb8dBpyc9tqVsaOFX%2FAbETHOYzxKDdu9cqRI8%2FTCrnbbEBjqkATHVMDFWh%2FVDfFcgncnMiwTOWb9k7y9k7SPdv6o2LEjo6uTWDl4j7DlscHFXQllM3poST8Oq%2BEc%2FYIoxdAdTIcxaM%2F0V4qvhrN7DURJrO%2F6WX76dIVYvs7xGnpc%2F25paCsolmb4hwgWLQoMU1a7EGaBPiLv5wNK1tpF5vGE%2BAMlJy8jXjrqV5RK9XyCmKgljozGNoM8%2FF247%2BuaR8R4upihu5voi&X-Amz-Signature=d0b7c21d123ebf8d73e702ee6a344e40c949bac3d153fd1217a9748c94787e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNZSN5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7KcHVlYTCS%2FnLTUb7HB8zlivPZE1bh840gzTngMBcJQIhANlv9GNE3DWgI5ch6G3TQizpuhnz66U81eQSJJys6hJrKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCeswg%2FCxhrV5lPHEq3AMotOmF3cPEFjhY8Ty7Swt8wK2uYTRbBw5UZw6T55HHJhs3gNcUvvPX2gsRtI63Cq2DLFMNudS5cmfWzxLh%2B1WMeL5coK3KHLyKsdCReikcZ4tOnEyiMQJpxtJaJ7H16ZoEX7uNfWNmLfIcmsGOtuy0x2i1fFOe%2Bh%2BdhaLPyS8cAcwaMmpF3IASbuBqE6mHNORirMVpyZC88WQL5xkkcHEmMyPXE1gpo%2FzTkq9w6yYFhpL34Bwo5BRhXkHDr9YOX3tkE5j146dghb3eKTq9fGU4n%2FskoKilY4EfGpu5Yp2SIC18nqSLbrMJnDMEiLTvfr8fjUNQkjzFFpH1xaZANKqKy5vRl6PPBQBD29Z3S%2FRfEyBkHi2AGrcCsNgF4rNe2kVvNzBA0T5bgHTWU%2B2Q9mPc8U5e1BMoP4%2ByzuoN6yJNs8MmQYptdukK9ioCW4ULHD%2FFjwjWfPPtDa7tLZb8BhkflxnllKpVBM%2BP%2Bhoqv5pn%2B1pJ1eCaTP96KVqLHZ1biR8BllChRS79Jvf8LlI1lx%2FvuL3jRqCdG%2BwMGgC4dvCs8eWsqVno3ahkNeBHxT29PWUNVaWQFzGX8LrzvL9ey4TWb8dBpyc9tqVsaOFX%2FAbETHOYzxKDdu9cqRI8%2FTCrnbbEBjqkATHVMDFWh%2FVDfFcgncnMiwTOWb9k7y9k7SPdv6o2LEjo6uTWDl4j7DlscHFXQllM3poST8Oq%2BEc%2FYIoxdAdTIcxaM%2F0V4qvhrN7DURJrO%2F6WX76dIVYvs7xGnpc%2F25paCsolmb4hwgWLQoMU1a7EGaBPiLv5wNK1tpF5vGE%2BAMlJy8jXjrqV5RK9XyCmKgljozGNoM8%2FF247%2BuaR8R4upihu5voi&X-Amz-Signature=836b348798c1a93ef01970b0802421bfe7a3a4c015d49fc8a787e465e42e18b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNZSN5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7KcHVlYTCS%2FnLTUb7HB8zlivPZE1bh840gzTngMBcJQIhANlv9GNE3DWgI5ch6G3TQizpuhnz66U81eQSJJys6hJrKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCeswg%2FCxhrV5lPHEq3AMotOmF3cPEFjhY8Ty7Swt8wK2uYTRbBw5UZw6T55HHJhs3gNcUvvPX2gsRtI63Cq2DLFMNudS5cmfWzxLh%2B1WMeL5coK3KHLyKsdCReikcZ4tOnEyiMQJpxtJaJ7H16ZoEX7uNfWNmLfIcmsGOtuy0x2i1fFOe%2Bh%2BdhaLPyS8cAcwaMmpF3IASbuBqE6mHNORirMVpyZC88WQL5xkkcHEmMyPXE1gpo%2FzTkq9w6yYFhpL34Bwo5BRhXkHDr9YOX3tkE5j146dghb3eKTq9fGU4n%2FskoKilY4EfGpu5Yp2SIC18nqSLbrMJnDMEiLTvfr8fjUNQkjzFFpH1xaZANKqKy5vRl6PPBQBD29Z3S%2FRfEyBkHi2AGrcCsNgF4rNe2kVvNzBA0T5bgHTWU%2B2Q9mPc8U5e1BMoP4%2ByzuoN6yJNs8MmQYptdukK9ioCW4ULHD%2FFjwjWfPPtDa7tLZb8BhkflxnllKpVBM%2BP%2Bhoqv5pn%2B1pJ1eCaTP96KVqLHZ1biR8BllChRS79Jvf8LlI1lx%2FvuL3jRqCdG%2BwMGgC4dvCs8eWsqVno3ahkNeBHxT29PWUNVaWQFzGX8LrzvL9ey4TWb8dBpyc9tqVsaOFX%2FAbETHOYzxKDdu9cqRI8%2FTCrnbbEBjqkATHVMDFWh%2FVDfFcgncnMiwTOWb9k7y9k7SPdv6o2LEjo6uTWDl4j7DlscHFXQllM3poST8Oq%2BEc%2FYIoxdAdTIcxaM%2F0V4qvhrN7DURJrO%2F6WX76dIVYvs7xGnpc%2F25paCsolmb4hwgWLQoMU1a7EGaBPiLv5wNK1tpF5vGE%2BAMlJy8jXjrqV5RK9XyCmKgljozGNoM8%2FF247%2BuaR8R4upihu5voi&X-Amz-Signature=a7826cc9aff96260ec953917ec5cca64fe8c03695dfd5f65973e3f2fbf6f80f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNZSN5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7KcHVlYTCS%2FnLTUb7HB8zlivPZE1bh840gzTngMBcJQIhANlv9GNE3DWgI5ch6G3TQizpuhnz66U81eQSJJys6hJrKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCeswg%2FCxhrV5lPHEq3AMotOmF3cPEFjhY8Ty7Swt8wK2uYTRbBw5UZw6T55HHJhs3gNcUvvPX2gsRtI63Cq2DLFMNudS5cmfWzxLh%2B1WMeL5coK3KHLyKsdCReikcZ4tOnEyiMQJpxtJaJ7H16ZoEX7uNfWNmLfIcmsGOtuy0x2i1fFOe%2Bh%2BdhaLPyS8cAcwaMmpF3IASbuBqE6mHNORirMVpyZC88WQL5xkkcHEmMyPXE1gpo%2FzTkq9w6yYFhpL34Bwo5BRhXkHDr9YOX3tkE5j146dghb3eKTq9fGU4n%2FskoKilY4EfGpu5Yp2SIC18nqSLbrMJnDMEiLTvfr8fjUNQkjzFFpH1xaZANKqKy5vRl6PPBQBD29Z3S%2FRfEyBkHi2AGrcCsNgF4rNe2kVvNzBA0T5bgHTWU%2B2Q9mPc8U5e1BMoP4%2ByzuoN6yJNs8MmQYptdukK9ioCW4ULHD%2FFjwjWfPPtDa7tLZb8BhkflxnllKpVBM%2BP%2Bhoqv5pn%2B1pJ1eCaTP96KVqLHZ1biR8BllChRS79Jvf8LlI1lx%2FvuL3jRqCdG%2BwMGgC4dvCs8eWsqVno3ahkNeBHxT29PWUNVaWQFzGX8LrzvL9ey4TWb8dBpyc9tqVsaOFX%2FAbETHOYzxKDdu9cqRI8%2FTCrnbbEBjqkATHVMDFWh%2FVDfFcgncnMiwTOWb9k7y9k7SPdv6o2LEjo6uTWDl4j7DlscHFXQllM3poST8Oq%2BEc%2FYIoxdAdTIcxaM%2F0V4qvhrN7DURJrO%2F6WX76dIVYvs7xGnpc%2F25paCsolmb4hwgWLQoMU1a7EGaBPiLv5wNK1tpF5vGE%2BAMlJy8jXjrqV5RK9XyCmKgljozGNoM8%2FF247%2BuaR8R4upihu5voi&X-Amz-Signature=ef3556db4c594e89f77474b0e5a6945f23c37a931456c3c9866640b8ad9dd064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNZSN5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7KcHVlYTCS%2FnLTUb7HB8zlivPZE1bh840gzTngMBcJQIhANlv9GNE3DWgI5ch6G3TQizpuhnz66U81eQSJJys6hJrKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCeswg%2FCxhrV5lPHEq3AMotOmF3cPEFjhY8Ty7Swt8wK2uYTRbBw5UZw6T55HHJhs3gNcUvvPX2gsRtI63Cq2DLFMNudS5cmfWzxLh%2B1WMeL5coK3KHLyKsdCReikcZ4tOnEyiMQJpxtJaJ7H16ZoEX7uNfWNmLfIcmsGOtuy0x2i1fFOe%2Bh%2BdhaLPyS8cAcwaMmpF3IASbuBqE6mHNORirMVpyZC88WQL5xkkcHEmMyPXE1gpo%2FzTkq9w6yYFhpL34Bwo5BRhXkHDr9YOX3tkE5j146dghb3eKTq9fGU4n%2FskoKilY4EfGpu5Yp2SIC18nqSLbrMJnDMEiLTvfr8fjUNQkjzFFpH1xaZANKqKy5vRl6PPBQBD29Z3S%2FRfEyBkHi2AGrcCsNgF4rNe2kVvNzBA0T5bgHTWU%2B2Q9mPc8U5e1BMoP4%2ByzuoN6yJNs8MmQYptdukK9ioCW4ULHD%2FFjwjWfPPtDa7tLZb8BhkflxnllKpVBM%2BP%2Bhoqv5pn%2B1pJ1eCaTP96KVqLHZ1biR8BllChRS79Jvf8LlI1lx%2FvuL3jRqCdG%2BwMGgC4dvCs8eWsqVno3ahkNeBHxT29PWUNVaWQFzGX8LrzvL9ey4TWb8dBpyc9tqVsaOFX%2FAbETHOYzxKDdu9cqRI8%2FTCrnbbEBjqkATHVMDFWh%2FVDfFcgncnMiwTOWb9k7y9k7SPdv6o2LEjo6uTWDl4j7DlscHFXQllM3poST8Oq%2BEc%2FYIoxdAdTIcxaM%2F0V4qvhrN7DURJrO%2F6WX76dIVYvs7xGnpc%2F25paCsolmb4hwgWLQoMU1a7EGaBPiLv5wNK1tpF5vGE%2BAMlJy8jXjrqV5RK9XyCmKgljozGNoM8%2FF247%2BuaR8R4upihu5voi&X-Amz-Signature=3fc0937cf05c94de06b46b703f24e55d27f861eb22d69b7cbe1dc1c3771787f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
