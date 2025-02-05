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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLL62D4H%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD25IWH6WB%2FQgooIoN%2BdmmR7WlaXSHxVS9I%2F2bOfTaLqwIhANC9Dq5onCnSw2Ym9glte29SxLjbKxdRuG86ygAdO%2BcdKv8DCEgQABoMNjM3NDIzMTgzODA1IgztxME3gHSB6gx%2FGw4q3APs4nIZr%2BBqLfDQ5uIYm%2ByJpn947mSjoNGnoPe%2B4XLZ6MnR9wWmgGb57mhjXG4yYvysU9ua6YfEePQD9ueQKRlNco84oMQmqeH6TCivqYoaCa3LntLtME0h%2Fy1BfC0vHclQQ12hDQ9cw18QqB5doETjncvpImD6BAaD5nIropN8VoJX6Uqz9gUdzbGX%2BpjALBk6imk8Z%2BD5eKH%2B4Et6mUmepb9ZVSnc8JTVln%2FSJJLFCLXQ7olOXqsUnTzyKytGEohBhTqlA0tALF6m1FCrCL1zoPpXXmxJitdPFn8j89t%2BVOLqURHGVovPVmEyqyBKvOXfHSspn2%2BdjZ4wmnh5EHOVAyGI9EUyPnj4yW46LPQCFjIz9ku%2FXpFcQBd0WtuI%2Flnj9b7HhxZE1Bc5x0%2FQfSwUk%2BLj%2BpTPVmsOR83Dz0fj5Zew%2Be7hqQex986jCBoe6WwErs60P6zEe1W7pYYojC1oGjMJgfOUsUssF3k3YVmRhXJ2c5U1gqbnFkQVVu5wkP09hwOIIUT%2BR4OjUAeyvipPJm5DqtC2foGBmRjvjDZd26TErwqOwJtA0MumpHZnkpqP%2B6%2B0ldc0joq2SmoNLEe6gf%2FQf9GYErkq8tP4xq%2Fc3BYqjYY5TT3tKjwPgTDHgo69BjqkAab3DQScK3DoWgVcn2jj9Hzl4JG2KlMDt3tXI%2F3hr%2BtwbcSGbs%2Fbe2IZjABa%2FQXYWC1sVe1lObAo7%2FyOweiaEvA%2FG4Z9HZSnKQvbe3OVwsBlsTPl2aZAHx5yCJCW3Kf5ZBXsb72wMNXqlQdNFohvqHe0Z%2B%2BaWwDap4WGi9UO0YrUdS2yr78%2FoLExKxaIsfMqbBKFpd7bS34bCRzYQxcn1UkJD9XQ&X-Amz-Signature=b9741d3dd111b229a98d375f04dccb67c624dd1e84acf10d3d7051441943cd4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLL62D4H%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD25IWH6WB%2FQgooIoN%2BdmmR7WlaXSHxVS9I%2F2bOfTaLqwIhANC9Dq5onCnSw2Ym9glte29SxLjbKxdRuG86ygAdO%2BcdKv8DCEgQABoMNjM3NDIzMTgzODA1IgztxME3gHSB6gx%2FGw4q3APs4nIZr%2BBqLfDQ5uIYm%2ByJpn947mSjoNGnoPe%2B4XLZ6MnR9wWmgGb57mhjXG4yYvysU9ua6YfEePQD9ueQKRlNco84oMQmqeH6TCivqYoaCa3LntLtME0h%2Fy1BfC0vHclQQ12hDQ9cw18QqB5doETjncvpImD6BAaD5nIropN8VoJX6Uqz9gUdzbGX%2BpjALBk6imk8Z%2BD5eKH%2B4Et6mUmepb9ZVSnc8JTVln%2FSJJLFCLXQ7olOXqsUnTzyKytGEohBhTqlA0tALF6m1FCrCL1zoPpXXmxJitdPFn8j89t%2BVOLqURHGVovPVmEyqyBKvOXfHSspn2%2BdjZ4wmnh5EHOVAyGI9EUyPnj4yW46LPQCFjIz9ku%2FXpFcQBd0WtuI%2Flnj9b7HhxZE1Bc5x0%2FQfSwUk%2BLj%2BpTPVmsOR83Dz0fj5Zew%2Be7hqQex986jCBoe6WwErs60P6zEe1W7pYYojC1oGjMJgfOUsUssF3k3YVmRhXJ2c5U1gqbnFkQVVu5wkP09hwOIIUT%2BR4OjUAeyvipPJm5DqtC2foGBmRjvjDZd26TErwqOwJtA0MumpHZnkpqP%2B6%2B0ldc0joq2SmoNLEe6gf%2FQf9GYErkq8tP4xq%2Fc3BYqjYY5TT3tKjwPgTDHgo69BjqkAab3DQScK3DoWgVcn2jj9Hzl4JG2KlMDt3tXI%2F3hr%2BtwbcSGbs%2Fbe2IZjABa%2FQXYWC1sVe1lObAo7%2FyOweiaEvA%2FG4Z9HZSnKQvbe3OVwsBlsTPl2aZAHx5yCJCW3Kf5ZBXsb72wMNXqlQdNFohvqHe0Z%2B%2BaWwDap4WGi9UO0YrUdS2yr78%2FoLExKxaIsfMqbBKFpd7bS34bCRzYQxcn1UkJD9XQ&X-Amz-Signature=5b1d315ca1e85d8c08af0509d35bb313ed672971f35bd3822e74ed35d4a870f5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLL62D4H%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD25IWH6WB%2FQgooIoN%2BdmmR7WlaXSHxVS9I%2F2bOfTaLqwIhANC9Dq5onCnSw2Ym9glte29SxLjbKxdRuG86ygAdO%2BcdKv8DCEgQABoMNjM3NDIzMTgzODA1IgztxME3gHSB6gx%2FGw4q3APs4nIZr%2BBqLfDQ5uIYm%2ByJpn947mSjoNGnoPe%2B4XLZ6MnR9wWmgGb57mhjXG4yYvysU9ua6YfEePQD9ueQKRlNco84oMQmqeH6TCivqYoaCa3LntLtME0h%2Fy1BfC0vHclQQ12hDQ9cw18QqB5doETjncvpImD6BAaD5nIropN8VoJX6Uqz9gUdzbGX%2BpjALBk6imk8Z%2BD5eKH%2B4Et6mUmepb9ZVSnc8JTVln%2FSJJLFCLXQ7olOXqsUnTzyKytGEohBhTqlA0tALF6m1FCrCL1zoPpXXmxJitdPFn8j89t%2BVOLqURHGVovPVmEyqyBKvOXfHSspn2%2BdjZ4wmnh5EHOVAyGI9EUyPnj4yW46LPQCFjIz9ku%2FXpFcQBd0WtuI%2Flnj9b7HhxZE1Bc5x0%2FQfSwUk%2BLj%2BpTPVmsOR83Dz0fj5Zew%2Be7hqQex986jCBoe6WwErs60P6zEe1W7pYYojC1oGjMJgfOUsUssF3k3YVmRhXJ2c5U1gqbnFkQVVu5wkP09hwOIIUT%2BR4OjUAeyvipPJm5DqtC2foGBmRjvjDZd26TErwqOwJtA0MumpHZnkpqP%2B6%2B0ldc0joq2SmoNLEe6gf%2FQf9GYErkq8tP4xq%2Fc3BYqjYY5TT3tKjwPgTDHgo69BjqkAab3DQScK3DoWgVcn2jj9Hzl4JG2KlMDt3tXI%2F3hr%2BtwbcSGbs%2Fbe2IZjABa%2FQXYWC1sVe1lObAo7%2FyOweiaEvA%2FG4Z9HZSnKQvbe3OVwsBlsTPl2aZAHx5yCJCW3Kf5ZBXsb72wMNXqlQdNFohvqHe0Z%2B%2BaWwDap4WGi9UO0YrUdS2yr78%2FoLExKxaIsfMqbBKFpd7bS34bCRzYQxcn1UkJD9XQ&X-Amz-Signature=5ed7167209303e3719f77a29b7c02248381f4d198269924cfe130c0672fb75fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLL62D4H%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD25IWH6WB%2FQgooIoN%2BdmmR7WlaXSHxVS9I%2F2bOfTaLqwIhANC9Dq5onCnSw2Ym9glte29SxLjbKxdRuG86ygAdO%2BcdKv8DCEgQABoMNjM3NDIzMTgzODA1IgztxME3gHSB6gx%2FGw4q3APs4nIZr%2BBqLfDQ5uIYm%2ByJpn947mSjoNGnoPe%2B4XLZ6MnR9wWmgGb57mhjXG4yYvysU9ua6YfEePQD9ueQKRlNco84oMQmqeH6TCivqYoaCa3LntLtME0h%2Fy1BfC0vHclQQ12hDQ9cw18QqB5doETjncvpImD6BAaD5nIropN8VoJX6Uqz9gUdzbGX%2BpjALBk6imk8Z%2BD5eKH%2B4Et6mUmepb9ZVSnc8JTVln%2FSJJLFCLXQ7olOXqsUnTzyKytGEohBhTqlA0tALF6m1FCrCL1zoPpXXmxJitdPFn8j89t%2BVOLqURHGVovPVmEyqyBKvOXfHSspn2%2BdjZ4wmnh5EHOVAyGI9EUyPnj4yW46LPQCFjIz9ku%2FXpFcQBd0WtuI%2Flnj9b7HhxZE1Bc5x0%2FQfSwUk%2BLj%2BpTPVmsOR83Dz0fj5Zew%2Be7hqQex986jCBoe6WwErs60P6zEe1W7pYYojC1oGjMJgfOUsUssF3k3YVmRhXJ2c5U1gqbnFkQVVu5wkP09hwOIIUT%2BR4OjUAeyvipPJm5DqtC2foGBmRjvjDZd26TErwqOwJtA0MumpHZnkpqP%2B6%2B0ldc0joq2SmoNLEe6gf%2FQf9GYErkq8tP4xq%2Fc3BYqjYY5TT3tKjwPgTDHgo69BjqkAab3DQScK3DoWgVcn2jj9Hzl4JG2KlMDt3tXI%2F3hr%2BtwbcSGbs%2Fbe2IZjABa%2FQXYWC1sVe1lObAo7%2FyOweiaEvA%2FG4Z9HZSnKQvbe3OVwsBlsTPl2aZAHx5yCJCW3Kf5ZBXsb72wMNXqlQdNFohvqHe0Z%2B%2BaWwDap4WGi9UO0YrUdS2yr78%2FoLExKxaIsfMqbBKFpd7bS34bCRzYQxcn1UkJD9XQ&X-Amz-Signature=1b7e1b6311b0918feb3618864a0bc2e600faf5b0b80b65e68ba51e02debbcfda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLL62D4H%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD25IWH6WB%2FQgooIoN%2BdmmR7WlaXSHxVS9I%2F2bOfTaLqwIhANC9Dq5onCnSw2Ym9glte29SxLjbKxdRuG86ygAdO%2BcdKv8DCEgQABoMNjM3NDIzMTgzODA1IgztxME3gHSB6gx%2FGw4q3APs4nIZr%2BBqLfDQ5uIYm%2ByJpn947mSjoNGnoPe%2B4XLZ6MnR9wWmgGb57mhjXG4yYvysU9ua6YfEePQD9ueQKRlNco84oMQmqeH6TCivqYoaCa3LntLtME0h%2Fy1BfC0vHclQQ12hDQ9cw18QqB5doETjncvpImD6BAaD5nIropN8VoJX6Uqz9gUdzbGX%2BpjALBk6imk8Z%2BD5eKH%2B4Et6mUmepb9ZVSnc8JTVln%2FSJJLFCLXQ7olOXqsUnTzyKytGEohBhTqlA0tALF6m1FCrCL1zoPpXXmxJitdPFn8j89t%2BVOLqURHGVovPVmEyqyBKvOXfHSspn2%2BdjZ4wmnh5EHOVAyGI9EUyPnj4yW46LPQCFjIz9ku%2FXpFcQBd0WtuI%2Flnj9b7HhxZE1Bc5x0%2FQfSwUk%2BLj%2BpTPVmsOR83Dz0fj5Zew%2Be7hqQex986jCBoe6WwErs60P6zEe1W7pYYojC1oGjMJgfOUsUssF3k3YVmRhXJ2c5U1gqbnFkQVVu5wkP09hwOIIUT%2BR4OjUAeyvipPJm5DqtC2foGBmRjvjDZd26TErwqOwJtA0MumpHZnkpqP%2B6%2B0ldc0joq2SmoNLEe6gf%2FQf9GYErkq8tP4xq%2Fc3BYqjYY5TT3tKjwPgTDHgo69BjqkAab3DQScK3DoWgVcn2jj9Hzl4JG2KlMDt3tXI%2F3hr%2BtwbcSGbs%2Fbe2IZjABa%2FQXYWC1sVe1lObAo7%2FyOweiaEvA%2FG4Z9HZSnKQvbe3OVwsBlsTPl2aZAHx5yCJCW3Kf5ZBXsb72wMNXqlQdNFohvqHe0Z%2B%2BaWwDap4WGi9UO0YrUdS2yr78%2FoLExKxaIsfMqbBKFpd7bS34bCRzYQxcn1UkJD9XQ&X-Amz-Signature=c6e750ec21b21a300fe1b562906970b584c4d226d7da3b67d55aef459a392d12&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
