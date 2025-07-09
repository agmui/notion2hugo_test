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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ESFN3EL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDYnP6v5JWReIhgZ6QdNIt49UzdXObwuw93IFQOt7n3AIgXKnImn5jRqWIQ9kZbeJzsy4%2BUHzX3QmqbRdn4DAPuOkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS8zX%2Bk9ygaElLn9yrcAxmlDrCLCY8gamamqmZuM%2BBZ%2ByoyMVWiOZponhCZaV240gJHARfzcUFeKfe4HlBh43dH4mIgQ8kXpJ0KHqgWQmNRuWERJ1Bypec3apM%2By%2B50dVhfxfEavKQ8MoyJHRbAVVW9XjGO5cE9rnLMCKPiV96xBTgXuJRoMG6gKLTGsB0stYmBSCeoTzdLtSrWaOgJaJzY2MsJ3Op4c%2F6kBI%2FEwulWaAdxPoin0saYf0QnbttAktkD4vFIrgF4eyXrN20BaMWPKuwsQ5363XbQj46JRd8lPw2k5XfWUouoVM25k1qB3asxGQetNE43TZVCiOhSUfQfIdWPeXPaQ2EE6ruY4LEe%2Fdo4IIyMlTvosEb86cuWr8DQcoW5HQ4Oso%2F1IARpAlnatM7Ql%2BIkNr8rsTfw3x7ozOqdWD0cTKmnbcoil5mGDsmOmRCvZ69e5GNGvrlruHrS8fKJ3IkgW%2FNklXQJQfoMUqKlCFw2O9%2BX7wsW7Ld4s1lYdqPSScWXEw8%2F4bBOwp8ZrtVtD2G8%2BP9lk3m0e4CDSMH2TUHkLgpU33wx9sa5xyDAqr3V1uGpio9PAltEDeYrfje22lY5a8sFqFaZfYCeQnJQJJSIpDjRxUdM3Tkau7TGhZzm8N4lrXVTMMPvusMGOqUBStZt65OAaT5jRwnmdbGlkzbS6z6F6MMi2BPz3zj5cZ3r92oTGt%2BfxaQpmgQdt03LqpGQHbCsxj7eRFP7Ijr5b%2FHGUXhDucw0isw0jZt8jLDVk3Mpop5H66m4q3HviZxQutNv85uye0is%2FPr4QuPZvLnqFOS5oQXlBWi2ZjszTE87HIsDXE7NESTKYP9%2BVy1c1SEPwJqR8q%2FuGN%2BJT4ARkZxBEHR8&X-Amz-Signature=71ecfc3dcc7b6e8c48fec5a6068cd5b85fa2fc485927a212210ea5986b0c73ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ESFN3EL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDYnP6v5JWReIhgZ6QdNIt49UzdXObwuw93IFQOt7n3AIgXKnImn5jRqWIQ9kZbeJzsy4%2BUHzX3QmqbRdn4DAPuOkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS8zX%2Bk9ygaElLn9yrcAxmlDrCLCY8gamamqmZuM%2BBZ%2ByoyMVWiOZponhCZaV240gJHARfzcUFeKfe4HlBh43dH4mIgQ8kXpJ0KHqgWQmNRuWERJ1Bypec3apM%2By%2B50dVhfxfEavKQ8MoyJHRbAVVW9XjGO5cE9rnLMCKPiV96xBTgXuJRoMG6gKLTGsB0stYmBSCeoTzdLtSrWaOgJaJzY2MsJ3Op4c%2F6kBI%2FEwulWaAdxPoin0saYf0QnbttAktkD4vFIrgF4eyXrN20BaMWPKuwsQ5363XbQj46JRd8lPw2k5XfWUouoVM25k1qB3asxGQetNE43TZVCiOhSUfQfIdWPeXPaQ2EE6ruY4LEe%2Fdo4IIyMlTvosEb86cuWr8DQcoW5HQ4Oso%2F1IARpAlnatM7Ql%2BIkNr8rsTfw3x7ozOqdWD0cTKmnbcoil5mGDsmOmRCvZ69e5GNGvrlruHrS8fKJ3IkgW%2FNklXQJQfoMUqKlCFw2O9%2BX7wsW7Ld4s1lYdqPSScWXEw8%2F4bBOwp8ZrtVtD2G8%2BP9lk3m0e4CDSMH2TUHkLgpU33wx9sa5xyDAqr3V1uGpio9PAltEDeYrfje22lY5a8sFqFaZfYCeQnJQJJSIpDjRxUdM3Tkau7TGhZzm8N4lrXVTMMPvusMGOqUBStZt65OAaT5jRwnmdbGlkzbS6z6F6MMi2BPz3zj5cZ3r92oTGt%2BfxaQpmgQdt03LqpGQHbCsxj7eRFP7Ijr5b%2FHGUXhDucw0isw0jZt8jLDVk3Mpop5H66m4q3HviZxQutNv85uye0is%2FPr4QuPZvLnqFOS5oQXlBWi2ZjszTE87HIsDXE7NESTKYP9%2BVy1c1SEPwJqR8q%2FuGN%2BJT4ARkZxBEHR8&X-Amz-Signature=037116bfeb5cf39563b9e815e27b09c6c559e2cb5c91bc9b6f2e6df4eb4e171e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ESFN3EL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDYnP6v5JWReIhgZ6QdNIt49UzdXObwuw93IFQOt7n3AIgXKnImn5jRqWIQ9kZbeJzsy4%2BUHzX3QmqbRdn4DAPuOkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS8zX%2Bk9ygaElLn9yrcAxmlDrCLCY8gamamqmZuM%2BBZ%2ByoyMVWiOZponhCZaV240gJHARfzcUFeKfe4HlBh43dH4mIgQ8kXpJ0KHqgWQmNRuWERJ1Bypec3apM%2By%2B50dVhfxfEavKQ8MoyJHRbAVVW9XjGO5cE9rnLMCKPiV96xBTgXuJRoMG6gKLTGsB0stYmBSCeoTzdLtSrWaOgJaJzY2MsJ3Op4c%2F6kBI%2FEwulWaAdxPoin0saYf0QnbttAktkD4vFIrgF4eyXrN20BaMWPKuwsQ5363XbQj46JRd8lPw2k5XfWUouoVM25k1qB3asxGQetNE43TZVCiOhSUfQfIdWPeXPaQ2EE6ruY4LEe%2Fdo4IIyMlTvosEb86cuWr8DQcoW5HQ4Oso%2F1IARpAlnatM7Ql%2BIkNr8rsTfw3x7ozOqdWD0cTKmnbcoil5mGDsmOmRCvZ69e5GNGvrlruHrS8fKJ3IkgW%2FNklXQJQfoMUqKlCFw2O9%2BX7wsW7Ld4s1lYdqPSScWXEw8%2F4bBOwp8ZrtVtD2G8%2BP9lk3m0e4CDSMH2TUHkLgpU33wx9sa5xyDAqr3V1uGpio9PAltEDeYrfje22lY5a8sFqFaZfYCeQnJQJJSIpDjRxUdM3Tkau7TGhZzm8N4lrXVTMMPvusMGOqUBStZt65OAaT5jRwnmdbGlkzbS6z6F6MMi2BPz3zj5cZ3r92oTGt%2BfxaQpmgQdt03LqpGQHbCsxj7eRFP7Ijr5b%2FHGUXhDucw0isw0jZt8jLDVk3Mpop5H66m4q3HviZxQutNv85uye0is%2FPr4QuPZvLnqFOS5oQXlBWi2ZjszTE87HIsDXE7NESTKYP9%2BVy1c1SEPwJqR8q%2FuGN%2BJT4ARkZxBEHR8&X-Amz-Signature=08fcd8c3ca06f81f58a60ae6c7a53eea8ce8843ce3b034fa4365b6e4f7af2669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ESFN3EL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDYnP6v5JWReIhgZ6QdNIt49UzdXObwuw93IFQOt7n3AIgXKnImn5jRqWIQ9kZbeJzsy4%2BUHzX3QmqbRdn4DAPuOkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS8zX%2Bk9ygaElLn9yrcAxmlDrCLCY8gamamqmZuM%2BBZ%2ByoyMVWiOZponhCZaV240gJHARfzcUFeKfe4HlBh43dH4mIgQ8kXpJ0KHqgWQmNRuWERJ1Bypec3apM%2By%2B50dVhfxfEavKQ8MoyJHRbAVVW9XjGO5cE9rnLMCKPiV96xBTgXuJRoMG6gKLTGsB0stYmBSCeoTzdLtSrWaOgJaJzY2MsJ3Op4c%2F6kBI%2FEwulWaAdxPoin0saYf0QnbttAktkD4vFIrgF4eyXrN20BaMWPKuwsQ5363XbQj46JRd8lPw2k5XfWUouoVM25k1qB3asxGQetNE43TZVCiOhSUfQfIdWPeXPaQ2EE6ruY4LEe%2Fdo4IIyMlTvosEb86cuWr8DQcoW5HQ4Oso%2F1IARpAlnatM7Ql%2BIkNr8rsTfw3x7ozOqdWD0cTKmnbcoil5mGDsmOmRCvZ69e5GNGvrlruHrS8fKJ3IkgW%2FNklXQJQfoMUqKlCFw2O9%2BX7wsW7Ld4s1lYdqPSScWXEw8%2F4bBOwp8ZrtVtD2G8%2BP9lk3m0e4CDSMH2TUHkLgpU33wx9sa5xyDAqr3V1uGpio9PAltEDeYrfje22lY5a8sFqFaZfYCeQnJQJJSIpDjRxUdM3Tkau7TGhZzm8N4lrXVTMMPvusMGOqUBStZt65OAaT5jRwnmdbGlkzbS6z6F6MMi2BPz3zj5cZ3r92oTGt%2BfxaQpmgQdt03LqpGQHbCsxj7eRFP7Ijr5b%2FHGUXhDucw0isw0jZt8jLDVk3Mpop5H66m4q3HviZxQutNv85uye0is%2FPr4QuPZvLnqFOS5oQXlBWi2ZjszTE87HIsDXE7NESTKYP9%2BVy1c1SEPwJqR8q%2FuGN%2BJT4ARkZxBEHR8&X-Amz-Signature=2b044d3d81ad488aa791fcabcb15e25516c841628172ab20f86bb439d8232503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ESFN3EL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDYnP6v5JWReIhgZ6QdNIt49UzdXObwuw93IFQOt7n3AIgXKnImn5jRqWIQ9kZbeJzsy4%2BUHzX3QmqbRdn4DAPuOkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS8zX%2Bk9ygaElLn9yrcAxmlDrCLCY8gamamqmZuM%2BBZ%2ByoyMVWiOZponhCZaV240gJHARfzcUFeKfe4HlBh43dH4mIgQ8kXpJ0KHqgWQmNRuWERJ1Bypec3apM%2By%2B50dVhfxfEavKQ8MoyJHRbAVVW9XjGO5cE9rnLMCKPiV96xBTgXuJRoMG6gKLTGsB0stYmBSCeoTzdLtSrWaOgJaJzY2MsJ3Op4c%2F6kBI%2FEwulWaAdxPoin0saYf0QnbttAktkD4vFIrgF4eyXrN20BaMWPKuwsQ5363XbQj46JRd8lPw2k5XfWUouoVM25k1qB3asxGQetNE43TZVCiOhSUfQfIdWPeXPaQ2EE6ruY4LEe%2Fdo4IIyMlTvosEb86cuWr8DQcoW5HQ4Oso%2F1IARpAlnatM7Ql%2BIkNr8rsTfw3x7ozOqdWD0cTKmnbcoil5mGDsmOmRCvZ69e5GNGvrlruHrS8fKJ3IkgW%2FNklXQJQfoMUqKlCFw2O9%2BX7wsW7Ld4s1lYdqPSScWXEw8%2F4bBOwp8ZrtVtD2G8%2BP9lk3m0e4CDSMH2TUHkLgpU33wx9sa5xyDAqr3V1uGpio9PAltEDeYrfje22lY5a8sFqFaZfYCeQnJQJJSIpDjRxUdM3Tkau7TGhZzm8N4lrXVTMMPvusMGOqUBStZt65OAaT5jRwnmdbGlkzbS6z6F6MMi2BPz3zj5cZ3r92oTGt%2BfxaQpmgQdt03LqpGQHbCsxj7eRFP7Ijr5b%2FHGUXhDucw0isw0jZt8jLDVk3Mpop5H66m4q3HviZxQutNv85uye0is%2FPr4QuPZvLnqFOS5oQXlBWi2ZjszTE87HIsDXE7NESTKYP9%2BVy1c1SEPwJqR8q%2FuGN%2BJT4ARkZxBEHR8&X-Amz-Signature=d38a1d138b3eb6ac8bdc77e710c2874bdb0e963ce4797fd0baa6a6f4cee70b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
