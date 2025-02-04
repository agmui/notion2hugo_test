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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BMKFM6Y%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDAVIJVy6JNo3lltj6k0elTNyHhxXKkLzSXHFKg9NPodAIhAN6uet1GCjmq4jAVnw2dU7H6L7Izpu3SuVG2JygTHRHHKv8DCCoQABoMNjM3NDIzMTgzODA1IgyiUSF8i8rZg5sjTLIq3APq2e8TIyzmKfrlXRn2Il%2FrctCQPTNgRn6TS26JHojB2E5vkd2wFglf4PB%2B6QdSgEnvRqQHzV3TT%2BBdgWJjr5EZH6fttSZA8IJrDQH%2Bs%2FF%2BbZs1yVVJQAT5inaPYnfuYNL6hHy1ceKRPGlcYP%2By9MIzKjQYdfQlKIoAx64pa4DWZVjB6XOpEAQxxRLBErRDTn6%2FBIshPABBJdwzmNa5un1O0%2B3izIdPC9hX4Q1ghRjqE20FEnFIGfUCDo2dTPVuMnsiBvvLxELQ%2BQ1kPxR0VJsC9xS89M8hASRKNa1caaN4lYcvK5iGFootqbFtHx0eDG72YDKjiDD3TWZK6m%2FDgQqW7usm3f8znL%2F0RUzH2ndZz8S5KHOF13%2FYlTS%2BfjALRkp4zPwHhFm%2F8ppqq%2B4Q%2Fdebo%2F27CyYL4Qk2DqX5jpHWssnpzPQcSD8Cz9RXTusGB0PTHquutizqo5cow1ixz0SAbRt9NS3piGcexZJVnuSCQ4Bh6NMUD%2BpeR3qQAxKhctt1II%2Frv4B3KowNlDQywa7pXyj79whtEuyj87CmiPy7eJ35zWX3uyjsL6rytAu%2BwxahQQCpwviyDnZyI%2F6JPgMI70nbEI5a3L4OIvoPwgmkT8BKa96LV%2FOMnIhEijC3r4e9BjqkAWM6I6OS4Awi%2BzCBm6s1vS19kAmcTYyBXlOMQOf0AFn4rDR5x43f%2FQbZwU1EBe0TcXg91BG5QL1wvmMSl6JxoOg1DoMYaxHaRYT4hlGm2wnESbch%2BiUqvzhj8m%2Fm3faJ8Nf2mSv9hiYL75p7k7A9cMxMc%2FVyKo0E1sXKAp83Us6uZR8J0y5UOhBC%2Faaa%2FziCZI5EX4kWnUMfH7O%2Fxh1TK%2By0ZSP7&X-Amz-Signature=7cc00c4d149efbdd09f3e7fbfd35da797a54edd77ed66ef16eaadd73ceba173b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BMKFM6Y%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDAVIJVy6JNo3lltj6k0elTNyHhxXKkLzSXHFKg9NPodAIhAN6uet1GCjmq4jAVnw2dU7H6L7Izpu3SuVG2JygTHRHHKv8DCCoQABoMNjM3NDIzMTgzODA1IgyiUSF8i8rZg5sjTLIq3APq2e8TIyzmKfrlXRn2Il%2FrctCQPTNgRn6TS26JHojB2E5vkd2wFglf4PB%2B6QdSgEnvRqQHzV3TT%2BBdgWJjr5EZH6fttSZA8IJrDQH%2Bs%2FF%2BbZs1yVVJQAT5inaPYnfuYNL6hHy1ceKRPGlcYP%2By9MIzKjQYdfQlKIoAx64pa4DWZVjB6XOpEAQxxRLBErRDTn6%2FBIshPABBJdwzmNa5un1O0%2B3izIdPC9hX4Q1ghRjqE20FEnFIGfUCDo2dTPVuMnsiBvvLxELQ%2BQ1kPxR0VJsC9xS89M8hASRKNa1caaN4lYcvK5iGFootqbFtHx0eDG72YDKjiDD3TWZK6m%2FDgQqW7usm3f8znL%2F0RUzH2ndZz8S5KHOF13%2FYlTS%2BfjALRkp4zPwHhFm%2F8ppqq%2B4Q%2Fdebo%2F27CyYL4Qk2DqX5jpHWssnpzPQcSD8Cz9RXTusGB0PTHquutizqo5cow1ixz0SAbRt9NS3piGcexZJVnuSCQ4Bh6NMUD%2BpeR3qQAxKhctt1II%2Frv4B3KowNlDQywa7pXyj79whtEuyj87CmiPy7eJ35zWX3uyjsL6rytAu%2BwxahQQCpwviyDnZyI%2F6JPgMI70nbEI5a3L4OIvoPwgmkT8BKa96LV%2FOMnIhEijC3r4e9BjqkAWM6I6OS4Awi%2BzCBm6s1vS19kAmcTYyBXlOMQOf0AFn4rDR5x43f%2FQbZwU1EBe0TcXg91BG5QL1wvmMSl6JxoOg1DoMYaxHaRYT4hlGm2wnESbch%2BiUqvzhj8m%2Fm3faJ8Nf2mSv9hiYL75p7k7A9cMxMc%2FVyKo0E1sXKAp83Us6uZR8J0y5UOhBC%2Faaa%2FziCZI5EX4kWnUMfH7O%2Fxh1TK%2By0ZSP7&X-Amz-Signature=165ce0810bbfec62df38ae12ea792b32aaead2a4bf15fa614b8f3760946b4349&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BMKFM6Y%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDAVIJVy6JNo3lltj6k0elTNyHhxXKkLzSXHFKg9NPodAIhAN6uet1GCjmq4jAVnw2dU7H6L7Izpu3SuVG2JygTHRHHKv8DCCoQABoMNjM3NDIzMTgzODA1IgyiUSF8i8rZg5sjTLIq3APq2e8TIyzmKfrlXRn2Il%2FrctCQPTNgRn6TS26JHojB2E5vkd2wFglf4PB%2B6QdSgEnvRqQHzV3TT%2BBdgWJjr5EZH6fttSZA8IJrDQH%2Bs%2FF%2BbZs1yVVJQAT5inaPYnfuYNL6hHy1ceKRPGlcYP%2By9MIzKjQYdfQlKIoAx64pa4DWZVjB6XOpEAQxxRLBErRDTn6%2FBIshPABBJdwzmNa5un1O0%2B3izIdPC9hX4Q1ghRjqE20FEnFIGfUCDo2dTPVuMnsiBvvLxELQ%2BQ1kPxR0VJsC9xS89M8hASRKNa1caaN4lYcvK5iGFootqbFtHx0eDG72YDKjiDD3TWZK6m%2FDgQqW7usm3f8znL%2F0RUzH2ndZz8S5KHOF13%2FYlTS%2BfjALRkp4zPwHhFm%2F8ppqq%2B4Q%2Fdebo%2F27CyYL4Qk2DqX5jpHWssnpzPQcSD8Cz9RXTusGB0PTHquutizqo5cow1ixz0SAbRt9NS3piGcexZJVnuSCQ4Bh6NMUD%2BpeR3qQAxKhctt1II%2Frv4B3KowNlDQywa7pXyj79whtEuyj87CmiPy7eJ35zWX3uyjsL6rytAu%2BwxahQQCpwviyDnZyI%2F6JPgMI70nbEI5a3L4OIvoPwgmkT8BKa96LV%2FOMnIhEijC3r4e9BjqkAWM6I6OS4Awi%2BzCBm6s1vS19kAmcTYyBXlOMQOf0AFn4rDR5x43f%2FQbZwU1EBe0TcXg91BG5QL1wvmMSl6JxoOg1DoMYaxHaRYT4hlGm2wnESbch%2BiUqvzhj8m%2Fm3faJ8Nf2mSv9hiYL75p7k7A9cMxMc%2FVyKo0E1sXKAp83Us6uZR8J0y5UOhBC%2Faaa%2FziCZI5EX4kWnUMfH7O%2Fxh1TK%2By0ZSP7&X-Amz-Signature=b75bcdf12b014ecaa055cf68301e641ce198606f386b1b35d7dbf7516b6e8fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BMKFM6Y%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDAVIJVy6JNo3lltj6k0elTNyHhxXKkLzSXHFKg9NPodAIhAN6uet1GCjmq4jAVnw2dU7H6L7Izpu3SuVG2JygTHRHHKv8DCCoQABoMNjM3NDIzMTgzODA1IgyiUSF8i8rZg5sjTLIq3APq2e8TIyzmKfrlXRn2Il%2FrctCQPTNgRn6TS26JHojB2E5vkd2wFglf4PB%2B6QdSgEnvRqQHzV3TT%2BBdgWJjr5EZH6fttSZA8IJrDQH%2Bs%2FF%2BbZs1yVVJQAT5inaPYnfuYNL6hHy1ceKRPGlcYP%2By9MIzKjQYdfQlKIoAx64pa4DWZVjB6XOpEAQxxRLBErRDTn6%2FBIshPABBJdwzmNa5un1O0%2B3izIdPC9hX4Q1ghRjqE20FEnFIGfUCDo2dTPVuMnsiBvvLxELQ%2BQ1kPxR0VJsC9xS89M8hASRKNa1caaN4lYcvK5iGFootqbFtHx0eDG72YDKjiDD3TWZK6m%2FDgQqW7usm3f8znL%2F0RUzH2ndZz8S5KHOF13%2FYlTS%2BfjALRkp4zPwHhFm%2F8ppqq%2B4Q%2Fdebo%2F27CyYL4Qk2DqX5jpHWssnpzPQcSD8Cz9RXTusGB0PTHquutizqo5cow1ixz0SAbRt9NS3piGcexZJVnuSCQ4Bh6NMUD%2BpeR3qQAxKhctt1II%2Frv4B3KowNlDQywa7pXyj79whtEuyj87CmiPy7eJ35zWX3uyjsL6rytAu%2BwxahQQCpwviyDnZyI%2F6JPgMI70nbEI5a3L4OIvoPwgmkT8BKa96LV%2FOMnIhEijC3r4e9BjqkAWM6I6OS4Awi%2BzCBm6s1vS19kAmcTYyBXlOMQOf0AFn4rDR5x43f%2FQbZwU1EBe0TcXg91BG5QL1wvmMSl6JxoOg1DoMYaxHaRYT4hlGm2wnESbch%2BiUqvzhj8m%2Fm3faJ8Nf2mSv9hiYL75p7k7A9cMxMc%2FVyKo0E1sXKAp83Us6uZR8J0y5UOhBC%2Faaa%2FziCZI5EX4kWnUMfH7O%2Fxh1TK%2By0ZSP7&X-Amz-Signature=b5ff1163fab5f34a37028b667c70c73b54f0486aacf59fe8e9d25cda81fcc97b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BMKFM6Y%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDAVIJVy6JNo3lltj6k0elTNyHhxXKkLzSXHFKg9NPodAIhAN6uet1GCjmq4jAVnw2dU7H6L7Izpu3SuVG2JygTHRHHKv8DCCoQABoMNjM3NDIzMTgzODA1IgyiUSF8i8rZg5sjTLIq3APq2e8TIyzmKfrlXRn2Il%2FrctCQPTNgRn6TS26JHojB2E5vkd2wFglf4PB%2B6QdSgEnvRqQHzV3TT%2BBdgWJjr5EZH6fttSZA8IJrDQH%2Bs%2FF%2BbZs1yVVJQAT5inaPYnfuYNL6hHy1ceKRPGlcYP%2By9MIzKjQYdfQlKIoAx64pa4DWZVjB6XOpEAQxxRLBErRDTn6%2FBIshPABBJdwzmNa5un1O0%2B3izIdPC9hX4Q1ghRjqE20FEnFIGfUCDo2dTPVuMnsiBvvLxELQ%2BQ1kPxR0VJsC9xS89M8hASRKNa1caaN4lYcvK5iGFootqbFtHx0eDG72YDKjiDD3TWZK6m%2FDgQqW7usm3f8znL%2F0RUzH2ndZz8S5KHOF13%2FYlTS%2BfjALRkp4zPwHhFm%2F8ppqq%2B4Q%2Fdebo%2F27CyYL4Qk2DqX5jpHWssnpzPQcSD8Cz9RXTusGB0PTHquutizqo5cow1ixz0SAbRt9NS3piGcexZJVnuSCQ4Bh6NMUD%2BpeR3qQAxKhctt1II%2Frv4B3KowNlDQywa7pXyj79whtEuyj87CmiPy7eJ35zWX3uyjsL6rytAu%2BwxahQQCpwviyDnZyI%2F6JPgMI70nbEI5a3L4OIvoPwgmkT8BKa96LV%2FOMnIhEijC3r4e9BjqkAWM6I6OS4Awi%2BzCBm6s1vS19kAmcTYyBXlOMQOf0AFn4rDR5x43f%2FQbZwU1EBe0TcXg91BG5QL1wvmMSl6JxoOg1DoMYaxHaRYT4hlGm2wnESbch%2BiUqvzhj8m%2Fm3faJ8Nf2mSv9hiYL75p7k7A9cMxMc%2FVyKo0E1sXKAp83Us6uZR8J0y5UOhBC%2Faaa%2FziCZI5EX4kWnUMfH7O%2Fxh1TK%2By0ZSP7&X-Amz-Signature=8dbd264d117704d8e83038028943fb81beb6cdc4f7c1b4f6421162436e3f11de&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
