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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUPGKYR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICdoJu8x35NDV6mrw8GWgmoxXIC6f0bwKJd5VnEcC1ptAiAtK%2FA7T0V3jL0lTu8vqdgmsf7RIpikUqGg4vsp0kxnnCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkDu4g4ZfF2Hdtz0qKtwDIKpwoYobcj0NnL2w4fItW%2BpjOlL3rKt%2B5bDM4GmooNtbLKwfR1GDI7kf8Vp1rJkrUizfLpPPdwNYGWda6E%2FR4aaQL%2BxOL1IlrgtxwOkZZmAbQtaOfcX6b%2FrwX0knsaUJnt%2FCnwvL0c4ewrJTDdsoukXZZ3sECvht64zIPO9PF7chQS0Axza255rmQWgzMYGoTm8ecJ1uMzNh%2B9gWzoX6IHlkh3sn88TAbz%2FlJRlcdEj4vPXYIWoFmKmLE%2FqZ8etoqf%2B0glCzT8bEy9kRdK7YnYyAcTjTl%2BNa%2F%2B5T20IcXy56AN0rrk3RIvSkzQ4kgRzrSEZZVD%2Bcw0QanZ%2FyQb5DfP3kGnOYuUaojkbQUsOTd%2FCSfO3j0uF0d6zDR%2BODfgkLxwFnm6f9mnfapAPYN0MDqg808ytdVJM6nRHRjwd5iVISci%2B9GScvF4oGMTgxVbqrCF2WGC4occbmlruZGllXOqG0yAqqyAFPnEApFvNYKzYxPRLh%2BwfEPa8fEoTRnVsekLCFgq%2BnWvtMqVW%2Fg5TwAjzyUnlt9vwSicsFy4RX9Lpi3RhJi%2Bt0j7K9yKrLu12uE5fss60q4snyPioM6v5MHEfJ18ePNAmpS44oDKtNks%2FYJhbhAbZtyltUiu0wlI6NwQY6pgGBVtL7Nn67rvexhQneM%2BUkstxWy3gX9V9SFh%2FJDqQY3rXtMDE8Bo5a2U84W7T5fmrIE3E%2FxUmm%2B5vPbgonpTPlaUMlmJ0xDOMf6gevyR5mIYrbEPpIQIBazBD7O1INkiA0IF3oMYPacagsUoHpu1QdRtrXY70vI3qJYNXw43mwPZWxg%2FVD17st%2F1TfCMOB9OlysUR4iN8%2Feb6kPz7qBPso30q4vYca&X-Amz-Signature=d3169ddfcc2568a05b7e65ae448b2c27daa8dbaac8cc1637bf20687f0f8d1483&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUPGKYR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICdoJu8x35NDV6mrw8GWgmoxXIC6f0bwKJd5VnEcC1ptAiAtK%2FA7T0V3jL0lTu8vqdgmsf7RIpikUqGg4vsp0kxnnCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkDu4g4ZfF2Hdtz0qKtwDIKpwoYobcj0NnL2w4fItW%2BpjOlL3rKt%2B5bDM4GmooNtbLKwfR1GDI7kf8Vp1rJkrUizfLpPPdwNYGWda6E%2FR4aaQL%2BxOL1IlrgtxwOkZZmAbQtaOfcX6b%2FrwX0knsaUJnt%2FCnwvL0c4ewrJTDdsoukXZZ3sECvht64zIPO9PF7chQS0Axza255rmQWgzMYGoTm8ecJ1uMzNh%2B9gWzoX6IHlkh3sn88TAbz%2FlJRlcdEj4vPXYIWoFmKmLE%2FqZ8etoqf%2B0glCzT8bEy9kRdK7YnYyAcTjTl%2BNa%2F%2B5T20IcXy56AN0rrk3RIvSkzQ4kgRzrSEZZVD%2Bcw0QanZ%2FyQb5DfP3kGnOYuUaojkbQUsOTd%2FCSfO3j0uF0d6zDR%2BODfgkLxwFnm6f9mnfapAPYN0MDqg808ytdVJM6nRHRjwd5iVISci%2B9GScvF4oGMTgxVbqrCF2WGC4occbmlruZGllXOqG0yAqqyAFPnEApFvNYKzYxPRLh%2BwfEPa8fEoTRnVsekLCFgq%2BnWvtMqVW%2Fg5TwAjzyUnlt9vwSicsFy4RX9Lpi3RhJi%2Bt0j7K9yKrLu12uE5fss60q4snyPioM6v5MHEfJ18ePNAmpS44oDKtNks%2FYJhbhAbZtyltUiu0wlI6NwQY6pgGBVtL7Nn67rvexhQneM%2BUkstxWy3gX9V9SFh%2FJDqQY3rXtMDE8Bo5a2U84W7T5fmrIE3E%2FxUmm%2B5vPbgonpTPlaUMlmJ0xDOMf6gevyR5mIYrbEPpIQIBazBD7O1INkiA0IF3oMYPacagsUoHpu1QdRtrXY70vI3qJYNXw43mwPZWxg%2FVD17st%2F1TfCMOB9OlysUR4iN8%2Feb6kPz7qBPso30q4vYca&X-Amz-Signature=d1a129fd86741f7d6049651508337134c15f7376f2009ebfbcda3139329debf7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUPGKYR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICdoJu8x35NDV6mrw8GWgmoxXIC6f0bwKJd5VnEcC1ptAiAtK%2FA7T0V3jL0lTu8vqdgmsf7RIpikUqGg4vsp0kxnnCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkDu4g4ZfF2Hdtz0qKtwDIKpwoYobcj0NnL2w4fItW%2BpjOlL3rKt%2B5bDM4GmooNtbLKwfR1GDI7kf8Vp1rJkrUizfLpPPdwNYGWda6E%2FR4aaQL%2BxOL1IlrgtxwOkZZmAbQtaOfcX6b%2FrwX0knsaUJnt%2FCnwvL0c4ewrJTDdsoukXZZ3sECvht64zIPO9PF7chQS0Axza255rmQWgzMYGoTm8ecJ1uMzNh%2B9gWzoX6IHlkh3sn88TAbz%2FlJRlcdEj4vPXYIWoFmKmLE%2FqZ8etoqf%2B0glCzT8bEy9kRdK7YnYyAcTjTl%2BNa%2F%2B5T20IcXy56AN0rrk3RIvSkzQ4kgRzrSEZZVD%2Bcw0QanZ%2FyQb5DfP3kGnOYuUaojkbQUsOTd%2FCSfO3j0uF0d6zDR%2BODfgkLxwFnm6f9mnfapAPYN0MDqg808ytdVJM6nRHRjwd5iVISci%2B9GScvF4oGMTgxVbqrCF2WGC4occbmlruZGllXOqG0yAqqyAFPnEApFvNYKzYxPRLh%2BwfEPa8fEoTRnVsekLCFgq%2BnWvtMqVW%2Fg5TwAjzyUnlt9vwSicsFy4RX9Lpi3RhJi%2Bt0j7K9yKrLu12uE5fss60q4snyPioM6v5MHEfJ18ePNAmpS44oDKtNks%2FYJhbhAbZtyltUiu0wlI6NwQY6pgGBVtL7Nn67rvexhQneM%2BUkstxWy3gX9V9SFh%2FJDqQY3rXtMDE8Bo5a2U84W7T5fmrIE3E%2FxUmm%2B5vPbgonpTPlaUMlmJ0xDOMf6gevyR5mIYrbEPpIQIBazBD7O1INkiA0IF3oMYPacagsUoHpu1QdRtrXY70vI3qJYNXw43mwPZWxg%2FVD17st%2F1TfCMOB9OlysUR4iN8%2Feb6kPz7qBPso30q4vYca&X-Amz-Signature=337ab5f9496899feb28d3bbc9cf9c05894e0b557fdcab5ff23acbf56a22d0d50&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUPGKYR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICdoJu8x35NDV6mrw8GWgmoxXIC6f0bwKJd5VnEcC1ptAiAtK%2FA7T0V3jL0lTu8vqdgmsf7RIpikUqGg4vsp0kxnnCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkDu4g4ZfF2Hdtz0qKtwDIKpwoYobcj0NnL2w4fItW%2BpjOlL3rKt%2B5bDM4GmooNtbLKwfR1GDI7kf8Vp1rJkrUizfLpPPdwNYGWda6E%2FR4aaQL%2BxOL1IlrgtxwOkZZmAbQtaOfcX6b%2FrwX0knsaUJnt%2FCnwvL0c4ewrJTDdsoukXZZ3sECvht64zIPO9PF7chQS0Axza255rmQWgzMYGoTm8ecJ1uMzNh%2B9gWzoX6IHlkh3sn88TAbz%2FlJRlcdEj4vPXYIWoFmKmLE%2FqZ8etoqf%2B0glCzT8bEy9kRdK7YnYyAcTjTl%2BNa%2F%2B5T20IcXy56AN0rrk3RIvSkzQ4kgRzrSEZZVD%2Bcw0QanZ%2FyQb5DfP3kGnOYuUaojkbQUsOTd%2FCSfO3j0uF0d6zDR%2BODfgkLxwFnm6f9mnfapAPYN0MDqg808ytdVJM6nRHRjwd5iVISci%2B9GScvF4oGMTgxVbqrCF2WGC4occbmlruZGllXOqG0yAqqyAFPnEApFvNYKzYxPRLh%2BwfEPa8fEoTRnVsekLCFgq%2BnWvtMqVW%2Fg5TwAjzyUnlt9vwSicsFy4RX9Lpi3RhJi%2Bt0j7K9yKrLu12uE5fss60q4snyPioM6v5MHEfJ18ePNAmpS44oDKtNks%2FYJhbhAbZtyltUiu0wlI6NwQY6pgGBVtL7Nn67rvexhQneM%2BUkstxWy3gX9V9SFh%2FJDqQY3rXtMDE8Bo5a2U84W7T5fmrIE3E%2FxUmm%2B5vPbgonpTPlaUMlmJ0xDOMf6gevyR5mIYrbEPpIQIBazBD7O1INkiA0IF3oMYPacagsUoHpu1QdRtrXY70vI3qJYNXw43mwPZWxg%2FVD17st%2F1TfCMOB9OlysUR4iN8%2Feb6kPz7qBPso30q4vYca&X-Amz-Signature=b62d9b3c56f45f5d0e7015f537d62766a25410a13d735760c391b95b532eee11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUPGKYR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICdoJu8x35NDV6mrw8GWgmoxXIC6f0bwKJd5VnEcC1ptAiAtK%2FA7T0V3jL0lTu8vqdgmsf7RIpikUqGg4vsp0kxnnCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkDu4g4ZfF2Hdtz0qKtwDIKpwoYobcj0NnL2w4fItW%2BpjOlL3rKt%2B5bDM4GmooNtbLKwfR1GDI7kf8Vp1rJkrUizfLpPPdwNYGWda6E%2FR4aaQL%2BxOL1IlrgtxwOkZZmAbQtaOfcX6b%2FrwX0knsaUJnt%2FCnwvL0c4ewrJTDdsoukXZZ3sECvht64zIPO9PF7chQS0Axza255rmQWgzMYGoTm8ecJ1uMzNh%2B9gWzoX6IHlkh3sn88TAbz%2FlJRlcdEj4vPXYIWoFmKmLE%2FqZ8etoqf%2B0glCzT8bEy9kRdK7YnYyAcTjTl%2BNa%2F%2B5T20IcXy56AN0rrk3RIvSkzQ4kgRzrSEZZVD%2Bcw0QanZ%2FyQb5DfP3kGnOYuUaojkbQUsOTd%2FCSfO3j0uF0d6zDR%2BODfgkLxwFnm6f9mnfapAPYN0MDqg808ytdVJM6nRHRjwd5iVISci%2B9GScvF4oGMTgxVbqrCF2WGC4occbmlruZGllXOqG0yAqqyAFPnEApFvNYKzYxPRLh%2BwfEPa8fEoTRnVsekLCFgq%2BnWvtMqVW%2Fg5TwAjzyUnlt9vwSicsFy4RX9Lpi3RhJi%2Bt0j7K9yKrLu12uE5fss60q4snyPioM6v5MHEfJ18ePNAmpS44oDKtNks%2FYJhbhAbZtyltUiu0wlI6NwQY6pgGBVtL7Nn67rvexhQneM%2BUkstxWy3gX9V9SFh%2FJDqQY3rXtMDE8Bo5a2U84W7T5fmrIE3E%2FxUmm%2B5vPbgonpTPlaUMlmJ0xDOMf6gevyR5mIYrbEPpIQIBazBD7O1INkiA0IF3oMYPacagsUoHpu1QdRtrXY70vI3qJYNXw43mwPZWxg%2FVD17st%2F1TfCMOB9OlysUR4iN8%2Feb6kPz7qBPso30q4vYca&X-Amz-Signature=b8d194103028537d04a5a94e5bf0fb671311cdb4967320a86fc1381a09c606f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
