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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZINYZD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHxPYqy5kak%2BVEEweBUTCNiWqglcZmhcgVobK1LOkhuyAiAMpnWX%2F0lR8g7AImyH28ZgZTVCtHpPtHTK9NI7teehniqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIC0nRQuRLKU%2FD7XKtwD48E8ibWHPpf9Uwpx1E8%2Bh8PTONQSL5S4sJtFnU7qATqt4TOa4nBL2GKyhifOJETTMaFknGd1KgeNlq9j9BZZwTcHrJnqu1m09R9wCi79fSdftcszNTRmCCEtRD2Tr4hWjAW85eUmuVTak7BKwUR76i1GolWZLGDTL4r2xJqbVUA4df%2BzMmLtvLCFgVW%2BalOYKglrkQY3QpLG6GBajVODECdtcqVVooSE0BPUgJ6Ar0Hh6FhoFu6xjCsl55XMG%2FdGVynV8BpeLn6CO3R7RuKJjCjOCrRgPkU0VIkCHeFPEskJjLzn1E91JDL5VdJaF%2BvwYmjdHq7S7G3KP3t%2F5xg%2BHT3vlgXHobpVRp8VjEA%2Byg9rajbKinmLdJdGNmlOLWEIpyUomkR4pn6eBQFF3761twIs3DhsxuZnJJhf9nZ%2FKd%2Forjej%2Fl84bjkjml5mfVsdlfbsfZa3W6k2aLlNkrqiRLOm%2BcPnULfr1n6Vgyrx8OvjTtFxz11WGxpAA6q3g95qkkNQDtbys2MCN1xTZ3EXLe4%2FKYHfVKL9H3F9kyvIvLxyleOb7XcZiRcZagyC9sYDVLe7z0D5%2Bn5YBE6AcjZXK5LKm9zitnEgfPXLcC75q6eqcS379SIiNmYqIvswlu3QxAY6pgGm%2Fj8yMImxis6%2BsJ9cBtGQF6kUBBypvElAwttml%2BZJw5Dgq54gjajcvnIXUqOehwiF%2FuHBhSuubxSdZm9t3FSkgw3xQ37eRq0linc5LVC7HNl%2BCMc8ayufFXt0zOANY%2FRXQQEsSEp8qFkvRkkeseuGeDKnkWOKqffal6gtjU8xpZBw%2BLc%2FQq4LFsSISAM7lYVKW5QF56EM7uvHpKdOwiai7U5%2B4SMg&X-Amz-Signature=74be7377956775882fac1ef51ff92cddc7fef385d842d3556c2fb228d3c3f7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZINYZD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHxPYqy5kak%2BVEEweBUTCNiWqglcZmhcgVobK1LOkhuyAiAMpnWX%2F0lR8g7AImyH28ZgZTVCtHpPtHTK9NI7teehniqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIC0nRQuRLKU%2FD7XKtwD48E8ibWHPpf9Uwpx1E8%2Bh8PTONQSL5S4sJtFnU7qATqt4TOa4nBL2GKyhifOJETTMaFknGd1KgeNlq9j9BZZwTcHrJnqu1m09R9wCi79fSdftcszNTRmCCEtRD2Tr4hWjAW85eUmuVTak7BKwUR76i1GolWZLGDTL4r2xJqbVUA4df%2BzMmLtvLCFgVW%2BalOYKglrkQY3QpLG6GBajVODECdtcqVVooSE0BPUgJ6Ar0Hh6FhoFu6xjCsl55XMG%2FdGVynV8BpeLn6CO3R7RuKJjCjOCrRgPkU0VIkCHeFPEskJjLzn1E91JDL5VdJaF%2BvwYmjdHq7S7G3KP3t%2F5xg%2BHT3vlgXHobpVRp8VjEA%2Byg9rajbKinmLdJdGNmlOLWEIpyUomkR4pn6eBQFF3761twIs3DhsxuZnJJhf9nZ%2FKd%2Forjej%2Fl84bjkjml5mfVsdlfbsfZa3W6k2aLlNkrqiRLOm%2BcPnULfr1n6Vgyrx8OvjTtFxz11WGxpAA6q3g95qkkNQDtbys2MCN1xTZ3EXLe4%2FKYHfVKL9H3F9kyvIvLxyleOb7XcZiRcZagyC9sYDVLe7z0D5%2Bn5YBE6AcjZXK5LKm9zitnEgfPXLcC75q6eqcS379SIiNmYqIvswlu3QxAY6pgGm%2Fj8yMImxis6%2BsJ9cBtGQF6kUBBypvElAwttml%2BZJw5Dgq54gjajcvnIXUqOehwiF%2FuHBhSuubxSdZm9t3FSkgw3xQ37eRq0linc5LVC7HNl%2BCMc8ayufFXt0zOANY%2FRXQQEsSEp8qFkvRkkeseuGeDKnkWOKqffal6gtjU8xpZBw%2BLc%2FQq4LFsSISAM7lYVKW5QF56EM7uvHpKdOwiai7U5%2B4SMg&X-Amz-Signature=2f298cd74cbadd24c8e2a4f509a9e116a9617db2cbf4bfa2b6e21b927867ab96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZINYZD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHxPYqy5kak%2BVEEweBUTCNiWqglcZmhcgVobK1LOkhuyAiAMpnWX%2F0lR8g7AImyH28ZgZTVCtHpPtHTK9NI7teehniqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIC0nRQuRLKU%2FD7XKtwD48E8ibWHPpf9Uwpx1E8%2Bh8PTONQSL5S4sJtFnU7qATqt4TOa4nBL2GKyhifOJETTMaFknGd1KgeNlq9j9BZZwTcHrJnqu1m09R9wCi79fSdftcszNTRmCCEtRD2Tr4hWjAW85eUmuVTak7BKwUR76i1GolWZLGDTL4r2xJqbVUA4df%2BzMmLtvLCFgVW%2BalOYKglrkQY3QpLG6GBajVODECdtcqVVooSE0BPUgJ6Ar0Hh6FhoFu6xjCsl55XMG%2FdGVynV8BpeLn6CO3R7RuKJjCjOCrRgPkU0VIkCHeFPEskJjLzn1E91JDL5VdJaF%2BvwYmjdHq7S7G3KP3t%2F5xg%2BHT3vlgXHobpVRp8VjEA%2Byg9rajbKinmLdJdGNmlOLWEIpyUomkR4pn6eBQFF3761twIs3DhsxuZnJJhf9nZ%2FKd%2Forjej%2Fl84bjkjml5mfVsdlfbsfZa3W6k2aLlNkrqiRLOm%2BcPnULfr1n6Vgyrx8OvjTtFxz11WGxpAA6q3g95qkkNQDtbys2MCN1xTZ3EXLe4%2FKYHfVKL9H3F9kyvIvLxyleOb7XcZiRcZagyC9sYDVLe7z0D5%2Bn5YBE6AcjZXK5LKm9zitnEgfPXLcC75q6eqcS379SIiNmYqIvswlu3QxAY6pgGm%2Fj8yMImxis6%2BsJ9cBtGQF6kUBBypvElAwttml%2BZJw5Dgq54gjajcvnIXUqOehwiF%2FuHBhSuubxSdZm9t3FSkgw3xQ37eRq0linc5LVC7HNl%2BCMc8ayufFXt0zOANY%2FRXQQEsSEp8qFkvRkkeseuGeDKnkWOKqffal6gtjU8xpZBw%2BLc%2FQq4LFsSISAM7lYVKW5QF56EM7uvHpKdOwiai7U5%2B4SMg&X-Amz-Signature=4e1055fa95e22fc7ecf5987adafd65d3b11ee449cdbc554eb7a1ddee3652f950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZINYZD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHxPYqy5kak%2BVEEweBUTCNiWqglcZmhcgVobK1LOkhuyAiAMpnWX%2F0lR8g7AImyH28ZgZTVCtHpPtHTK9NI7teehniqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIC0nRQuRLKU%2FD7XKtwD48E8ibWHPpf9Uwpx1E8%2Bh8PTONQSL5S4sJtFnU7qATqt4TOa4nBL2GKyhifOJETTMaFknGd1KgeNlq9j9BZZwTcHrJnqu1m09R9wCi79fSdftcszNTRmCCEtRD2Tr4hWjAW85eUmuVTak7BKwUR76i1GolWZLGDTL4r2xJqbVUA4df%2BzMmLtvLCFgVW%2BalOYKglrkQY3QpLG6GBajVODECdtcqVVooSE0BPUgJ6Ar0Hh6FhoFu6xjCsl55XMG%2FdGVynV8BpeLn6CO3R7RuKJjCjOCrRgPkU0VIkCHeFPEskJjLzn1E91JDL5VdJaF%2BvwYmjdHq7S7G3KP3t%2F5xg%2BHT3vlgXHobpVRp8VjEA%2Byg9rajbKinmLdJdGNmlOLWEIpyUomkR4pn6eBQFF3761twIs3DhsxuZnJJhf9nZ%2FKd%2Forjej%2Fl84bjkjml5mfVsdlfbsfZa3W6k2aLlNkrqiRLOm%2BcPnULfr1n6Vgyrx8OvjTtFxz11WGxpAA6q3g95qkkNQDtbys2MCN1xTZ3EXLe4%2FKYHfVKL9H3F9kyvIvLxyleOb7XcZiRcZagyC9sYDVLe7z0D5%2Bn5YBE6AcjZXK5LKm9zitnEgfPXLcC75q6eqcS379SIiNmYqIvswlu3QxAY6pgGm%2Fj8yMImxis6%2BsJ9cBtGQF6kUBBypvElAwttml%2BZJw5Dgq54gjajcvnIXUqOehwiF%2FuHBhSuubxSdZm9t3FSkgw3xQ37eRq0linc5LVC7HNl%2BCMc8ayufFXt0zOANY%2FRXQQEsSEp8qFkvRkkeseuGeDKnkWOKqffal6gtjU8xpZBw%2BLc%2FQq4LFsSISAM7lYVKW5QF56EM7uvHpKdOwiai7U5%2B4SMg&X-Amz-Signature=e645bff5c2d7590367a4f6c458d45d54a8603fb76ac160c1d9e55fd16d0e7768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZINYZD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHxPYqy5kak%2BVEEweBUTCNiWqglcZmhcgVobK1LOkhuyAiAMpnWX%2F0lR8g7AImyH28ZgZTVCtHpPtHTK9NI7teehniqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIC0nRQuRLKU%2FD7XKtwD48E8ibWHPpf9Uwpx1E8%2Bh8PTONQSL5S4sJtFnU7qATqt4TOa4nBL2GKyhifOJETTMaFknGd1KgeNlq9j9BZZwTcHrJnqu1m09R9wCi79fSdftcszNTRmCCEtRD2Tr4hWjAW85eUmuVTak7BKwUR76i1GolWZLGDTL4r2xJqbVUA4df%2BzMmLtvLCFgVW%2BalOYKglrkQY3QpLG6GBajVODECdtcqVVooSE0BPUgJ6Ar0Hh6FhoFu6xjCsl55XMG%2FdGVynV8BpeLn6CO3R7RuKJjCjOCrRgPkU0VIkCHeFPEskJjLzn1E91JDL5VdJaF%2BvwYmjdHq7S7G3KP3t%2F5xg%2BHT3vlgXHobpVRp8VjEA%2Byg9rajbKinmLdJdGNmlOLWEIpyUomkR4pn6eBQFF3761twIs3DhsxuZnJJhf9nZ%2FKd%2Forjej%2Fl84bjkjml5mfVsdlfbsfZa3W6k2aLlNkrqiRLOm%2BcPnULfr1n6Vgyrx8OvjTtFxz11WGxpAA6q3g95qkkNQDtbys2MCN1xTZ3EXLe4%2FKYHfVKL9H3F9kyvIvLxyleOb7XcZiRcZagyC9sYDVLe7z0D5%2Bn5YBE6AcjZXK5LKm9zitnEgfPXLcC75q6eqcS379SIiNmYqIvswlu3QxAY6pgGm%2Fj8yMImxis6%2BsJ9cBtGQF6kUBBypvElAwttml%2BZJw5Dgq54gjajcvnIXUqOehwiF%2FuHBhSuubxSdZm9t3FSkgw3xQ37eRq0linc5LVC7HNl%2BCMc8ayufFXt0zOANY%2FRXQQEsSEp8qFkvRkkeseuGeDKnkWOKqffal6gtjU8xpZBw%2BLc%2FQq4LFsSISAM7lYVKW5QF56EM7uvHpKdOwiai7U5%2B4SMg&X-Amz-Signature=ffe95aeac3af620de475e86968e25d4a6a9e1daf58ec221167429a540a8926d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
