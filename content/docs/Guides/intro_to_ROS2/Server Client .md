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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNSOB6D%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICPgpaLCuIGIldDPLX3kUVDg7d9dkoDi8GYwHmUAiMC8AiAQqxJCHdCqjhB0kJORp%2BxAH2mAqqfZabMrc6cYXnSORSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZbwqoeH31d4HNwgxKtwDtmW%2BMerVh0eB7ZNjHLhOfE%2FQWTy3w38FpKJjyASeaBccLrGE2c0Uy9NzR7S3cqB41U2CLU9%2FG05WOhTH6sY27n5oRrroLM58akCeDRmcMHHtypcfeX%2BHXuEQZ3ReCKzDaegPAnrfLfIbMcb6zwVXoKg44cju9LG8djxRy6jMb2psTIAfAqG5rXkTwgvddbcz%2FPAblFi8BBJK70gmUEYQg4XahnvXq%2BMVvxtXjrEwko5cByuxD9grUBArihYIXxEZvvgYgRhLeCUFMZEe7oN958U6OXjGx5fpQHixgBjdvc3it3eRGuTMaT1YmIBrm3tySpO0QpBaT7QPHKXcOy3lngtJXnwPqWOxwbspasvp23mh%2FppywvEc%2B6WlaTQ6oHxvvLALj%2BGd%2B6Xl7JELQlprZnNAbsTNZyQI%2F%2BO0SbcpdwqHog9cj8iKakFQ9s9JjXK6YepuqoGlmOkAJXCq34%2F0agYp2PFFUwK51pNzN1KkmcncMoS98iFndaiZmKumdymU%2Bso62WYm8%2BScHWgJG%2Fwcw94RmR%2B9opZHII8UldwWa3wSmzgudEtoDaIb%2F5fX68%2FwI6TZpWLfO5Y2FKvF%2FiXLJTsllZY1bmU63JRbQV5XSqxlFlm%2FP9dMKkNX4TgwnfvWvQY6pgHEitdH%2BztyDM3usMwuNvr0kemxO%2B2I4Gw3L9%2FTm%2F0d0aLX8qm%2BzXSMpie9rzInZNd%2FVXRC9gLTRAHZlhQl6WjiKBHAX1Dr77lFT%2BL%2B0dVR%2FeXN%2BuXt96IZejlFUhlIX1W3KO2cwb0CKJWFSUexmlJTcOWHPvtnBMlqxiwimOhA2%2BhTdbXkCZNruF%2BYavqaEeG%2BG3X3l5TR5CuRfiKdL6S6zZK8COVu&X-Amz-Signature=9985dac60a61dbffaa4bb04fb23c48f97738f249edc35db434f5b4f649be21a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNSOB6D%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICPgpaLCuIGIldDPLX3kUVDg7d9dkoDi8GYwHmUAiMC8AiAQqxJCHdCqjhB0kJORp%2BxAH2mAqqfZabMrc6cYXnSORSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZbwqoeH31d4HNwgxKtwDtmW%2BMerVh0eB7ZNjHLhOfE%2FQWTy3w38FpKJjyASeaBccLrGE2c0Uy9NzR7S3cqB41U2CLU9%2FG05WOhTH6sY27n5oRrroLM58akCeDRmcMHHtypcfeX%2BHXuEQZ3ReCKzDaegPAnrfLfIbMcb6zwVXoKg44cju9LG8djxRy6jMb2psTIAfAqG5rXkTwgvddbcz%2FPAblFi8BBJK70gmUEYQg4XahnvXq%2BMVvxtXjrEwko5cByuxD9grUBArihYIXxEZvvgYgRhLeCUFMZEe7oN958U6OXjGx5fpQHixgBjdvc3it3eRGuTMaT1YmIBrm3tySpO0QpBaT7QPHKXcOy3lngtJXnwPqWOxwbspasvp23mh%2FppywvEc%2B6WlaTQ6oHxvvLALj%2BGd%2B6Xl7JELQlprZnNAbsTNZyQI%2F%2BO0SbcpdwqHog9cj8iKakFQ9s9JjXK6YepuqoGlmOkAJXCq34%2F0agYp2PFFUwK51pNzN1KkmcncMoS98iFndaiZmKumdymU%2Bso62WYm8%2BScHWgJG%2Fwcw94RmR%2B9opZHII8UldwWa3wSmzgudEtoDaIb%2F5fX68%2FwI6TZpWLfO5Y2FKvF%2FiXLJTsllZY1bmU63JRbQV5XSqxlFlm%2FP9dMKkNX4TgwnfvWvQY6pgHEitdH%2BztyDM3usMwuNvr0kemxO%2B2I4Gw3L9%2FTm%2F0d0aLX8qm%2BzXSMpie9rzInZNd%2FVXRC9gLTRAHZlhQl6WjiKBHAX1Dr77lFT%2BL%2B0dVR%2FeXN%2BuXt96IZejlFUhlIX1W3KO2cwb0CKJWFSUexmlJTcOWHPvtnBMlqxiwimOhA2%2BhTdbXkCZNruF%2BYavqaEeG%2BG3X3l5TR5CuRfiKdL6S6zZK8COVu&X-Amz-Signature=47b542ff6ea8649727a5f5508453ca2b3ce89178c48a094476eba6da17f9bdfb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNSOB6D%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICPgpaLCuIGIldDPLX3kUVDg7d9dkoDi8GYwHmUAiMC8AiAQqxJCHdCqjhB0kJORp%2BxAH2mAqqfZabMrc6cYXnSORSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZbwqoeH31d4HNwgxKtwDtmW%2BMerVh0eB7ZNjHLhOfE%2FQWTy3w38FpKJjyASeaBccLrGE2c0Uy9NzR7S3cqB41U2CLU9%2FG05WOhTH6sY27n5oRrroLM58akCeDRmcMHHtypcfeX%2BHXuEQZ3ReCKzDaegPAnrfLfIbMcb6zwVXoKg44cju9LG8djxRy6jMb2psTIAfAqG5rXkTwgvddbcz%2FPAblFi8BBJK70gmUEYQg4XahnvXq%2BMVvxtXjrEwko5cByuxD9grUBArihYIXxEZvvgYgRhLeCUFMZEe7oN958U6OXjGx5fpQHixgBjdvc3it3eRGuTMaT1YmIBrm3tySpO0QpBaT7QPHKXcOy3lngtJXnwPqWOxwbspasvp23mh%2FppywvEc%2B6WlaTQ6oHxvvLALj%2BGd%2B6Xl7JELQlprZnNAbsTNZyQI%2F%2BO0SbcpdwqHog9cj8iKakFQ9s9JjXK6YepuqoGlmOkAJXCq34%2F0agYp2PFFUwK51pNzN1KkmcncMoS98iFndaiZmKumdymU%2Bso62WYm8%2BScHWgJG%2Fwcw94RmR%2B9opZHII8UldwWa3wSmzgudEtoDaIb%2F5fX68%2FwI6TZpWLfO5Y2FKvF%2FiXLJTsllZY1bmU63JRbQV5XSqxlFlm%2FP9dMKkNX4TgwnfvWvQY6pgHEitdH%2BztyDM3usMwuNvr0kemxO%2B2I4Gw3L9%2FTm%2F0d0aLX8qm%2BzXSMpie9rzInZNd%2FVXRC9gLTRAHZlhQl6WjiKBHAX1Dr77lFT%2BL%2B0dVR%2FeXN%2BuXt96IZejlFUhlIX1W3KO2cwb0CKJWFSUexmlJTcOWHPvtnBMlqxiwimOhA2%2BhTdbXkCZNruF%2BYavqaEeG%2BG3X3l5TR5CuRfiKdL6S6zZK8COVu&X-Amz-Signature=5f80c93839c185035a3a8e5028becf750855e592a780e668c27daca8f4171a79&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNSOB6D%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICPgpaLCuIGIldDPLX3kUVDg7d9dkoDi8GYwHmUAiMC8AiAQqxJCHdCqjhB0kJORp%2BxAH2mAqqfZabMrc6cYXnSORSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZbwqoeH31d4HNwgxKtwDtmW%2BMerVh0eB7ZNjHLhOfE%2FQWTy3w38FpKJjyASeaBccLrGE2c0Uy9NzR7S3cqB41U2CLU9%2FG05WOhTH6sY27n5oRrroLM58akCeDRmcMHHtypcfeX%2BHXuEQZ3ReCKzDaegPAnrfLfIbMcb6zwVXoKg44cju9LG8djxRy6jMb2psTIAfAqG5rXkTwgvddbcz%2FPAblFi8BBJK70gmUEYQg4XahnvXq%2BMVvxtXjrEwko5cByuxD9grUBArihYIXxEZvvgYgRhLeCUFMZEe7oN958U6OXjGx5fpQHixgBjdvc3it3eRGuTMaT1YmIBrm3tySpO0QpBaT7QPHKXcOy3lngtJXnwPqWOxwbspasvp23mh%2FppywvEc%2B6WlaTQ6oHxvvLALj%2BGd%2B6Xl7JELQlprZnNAbsTNZyQI%2F%2BO0SbcpdwqHog9cj8iKakFQ9s9JjXK6YepuqoGlmOkAJXCq34%2F0agYp2PFFUwK51pNzN1KkmcncMoS98iFndaiZmKumdymU%2Bso62WYm8%2BScHWgJG%2Fwcw94RmR%2B9opZHII8UldwWa3wSmzgudEtoDaIb%2F5fX68%2FwI6TZpWLfO5Y2FKvF%2FiXLJTsllZY1bmU63JRbQV5XSqxlFlm%2FP9dMKkNX4TgwnfvWvQY6pgHEitdH%2BztyDM3usMwuNvr0kemxO%2B2I4Gw3L9%2FTm%2F0d0aLX8qm%2BzXSMpie9rzInZNd%2FVXRC9gLTRAHZlhQl6WjiKBHAX1Dr77lFT%2BL%2B0dVR%2FeXN%2BuXt96IZejlFUhlIX1W3KO2cwb0CKJWFSUexmlJTcOWHPvtnBMlqxiwimOhA2%2BhTdbXkCZNruF%2BYavqaEeG%2BG3X3l5TR5CuRfiKdL6S6zZK8COVu&X-Amz-Signature=125e55e0631d046b3e642fe34149bc5215be57f610644ddc94dee8e0803a98ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNSOB6D%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICPgpaLCuIGIldDPLX3kUVDg7d9dkoDi8GYwHmUAiMC8AiAQqxJCHdCqjhB0kJORp%2BxAH2mAqqfZabMrc6cYXnSORSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZbwqoeH31d4HNwgxKtwDtmW%2BMerVh0eB7ZNjHLhOfE%2FQWTy3w38FpKJjyASeaBccLrGE2c0Uy9NzR7S3cqB41U2CLU9%2FG05WOhTH6sY27n5oRrroLM58akCeDRmcMHHtypcfeX%2BHXuEQZ3ReCKzDaegPAnrfLfIbMcb6zwVXoKg44cju9LG8djxRy6jMb2psTIAfAqG5rXkTwgvddbcz%2FPAblFi8BBJK70gmUEYQg4XahnvXq%2BMVvxtXjrEwko5cByuxD9grUBArihYIXxEZvvgYgRhLeCUFMZEe7oN958U6OXjGx5fpQHixgBjdvc3it3eRGuTMaT1YmIBrm3tySpO0QpBaT7QPHKXcOy3lngtJXnwPqWOxwbspasvp23mh%2FppywvEc%2B6WlaTQ6oHxvvLALj%2BGd%2B6Xl7JELQlprZnNAbsTNZyQI%2F%2BO0SbcpdwqHog9cj8iKakFQ9s9JjXK6YepuqoGlmOkAJXCq34%2F0agYp2PFFUwK51pNzN1KkmcncMoS98iFndaiZmKumdymU%2Bso62WYm8%2BScHWgJG%2Fwcw94RmR%2B9opZHII8UldwWa3wSmzgudEtoDaIb%2F5fX68%2FwI6TZpWLfO5Y2FKvF%2FiXLJTsllZY1bmU63JRbQV5XSqxlFlm%2FP9dMKkNX4TgwnfvWvQY6pgHEitdH%2BztyDM3usMwuNvr0kemxO%2B2I4Gw3L9%2FTm%2F0d0aLX8qm%2BzXSMpie9rzInZNd%2FVXRC9gLTRAHZlhQl6WjiKBHAX1Dr77lFT%2BL%2B0dVR%2FeXN%2BuXt96IZejlFUhlIX1W3KO2cwb0CKJWFSUexmlJTcOWHPvtnBMlqxiwimOhA2%2BhTdbXkCZNruF%2BYavqaEeG%2BG3X3l5TR5CuRfiKdL6S6zZK8COVu&X-Amz-Signature=c2e98f94313420729c30d3034fe03f765f3e41e06cf9f79ff15d5291245cde0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
