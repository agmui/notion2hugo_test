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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSCIYXQH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBRJj41jGFtNuNhWzuiJGXI%2FF%2BhENNatEkIMq0IqiCObAiACqlIQV0S8BdrMp3DcW3%2FXllN9HFC73Hyokf%2FqOqvILCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngzgvw1bmtTC%2FdYFKtwDqbtjjVoFYh2MuCWbNV9AK9k5pmFOyiUfn7GHsqUyaklKXxuOI%2BeoNixZtB3yEDmVDSVlERVYixhyzCWW1twQ1yR9VlqPjLd3oTslQSVH9n%2FgAoSUylmoPSQ9Jj%2BJpZdaoTtxWLsnNodcaFldnNPVHy07MXC%2BcCzgvJWeZYn3rDzeDk9b%2FUSpL8LfL2tXxwqgEg9JyM8zVTZsdW%2BjWepFafnEzPw5rM3ERrW%2Bh63bCrUacDg0aZdzzp2NfzRuuYTKeaOjm64DgBkIckDLVXvnjVY7DIa7h68af8T4L0tltewreX%2Bl5bhHLXO4HexwFOpjhuzsL8VF08wPk826ur6r7u%2FsPO1e6iMbcJtwBHUOLUTdvFY2od3n6WqwaroXbAZz7Pje8kuGEzmYGPf%2FgL8tSFfOFgASRZ0Zp2NTv8vDgg86AJCL%2FHa1cKfieqmWJ0dv23fBvXOBYUxpQ5ZIzGlsRTeF3Pj5lQKiwIw%2BcoZ6%2Fjc8JTwLXn83LZrwoPYrDhD3iCX2OEfu1mc%2F5sj4aXHSTM0Kse8J9fV7l4TECGnXqOyIx%2BvXvqTshaZEg4Xa4JWKAryhhY95vEjPT3NaYqzx0YSW0kMwSmXUUSnP45TzgsQXvgcApamhAyRQZ5QwxYK0vwY6pgHXX0SWbbl7ce50rZLgv62ikFUZu6h%2FW6fZRa2Tnb9J5xe119q5c%2Fx3AZUBRLKHySJud6U4110velntOn81jFKcLuQlzgJ647aI4xPz44f66M4Bu8eKQzMgGpFVgVmlVR1qm4I4phGG%2Bgiy7PHF2GkQCBT%2BWYsEJ%2BdYQPP75JJdvBjNje7U%2FkP23nlaRmijFy5bMprJt9uWjy2LUyrB4iCHXJLA9%2BUr&X-Amz-Signature=2c5e74d2e3432ad41fe8d7a453b1baf657e260e4c8f7a966b172588c57b63b81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSCIYXQH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBRJj41jGFtNuNhWzuiJGXI%2FF%2BhENNatEkIMq0IqiCObAiACqlIQV0S8BdrMp3DcW3%2FXllN9HFC73Hyokf%2FqOqvILCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngzgvw1bmtTC%2FdYFKtwDqbtjjVoFYh2MuCWbNV9AK9k5pmFOyiUfn7GHsqUyaklKXxuOI%2BeoNixZtB3yEDmVDSVlERVYixhyzCWW1twQ1yR9VlqPjLd3oTslQSVH9n%2FgAoSUylmoPSQ9Jj%2BJpZdaoTtxWLsnNodcaFldnNPVHy07MXC%2BcCzgvJWeZYn3rDzeDk9b%2FUSpL8LfL2tXxwqgEg9JyM8zVTZsdW%2BjWepFafnEzPw5rM3ERrW%2Bh63bCrUacDg0aZdzzp2NfzRuuYTKeaOjm64DgBkIckDLVXvnjVY7DIa7h68af8T4L0tltewreX%2Bl5bhHLXO4HexwFOpjhuzsL8VF08wPk826ur6r7u%2FsPO1e6iMbcJtwBHUOLUTdvFY2od3n6WqwaroXbAZz7Pje8kuGEzmYGPf%2FgL8tSFfOFgASRZ0Zp2NTv8vDgg86AJCL%2FHa1cKfieqmWJ0dv23fBvXOBYUxpQ5ZIzGlsRTeF3Pj5lQKiwIw%2BcoZ6%2Fjc8JTwLXn83LZrwoPYrDhD3iCX2OEfu1mc%2F5sj4aXHSTM0Kse8J9fV7l4TECGnXqOyIx%2BvXvqTshaZEg4Xa4JWKAryhhY95vEjPT3NaYqzx0YSW0kMwSmXUUSnP45TzgsQXvgcApamhAyRQZ5QwxYK0vwY6pgHXX0SWbbl7ce50rZLgv62ikFUZu6h%2FW6fZRa2Tnb9J5xe119q5c%2Fx3AZUBRLKHySJud6U4110velntOn81jFKcLuQlzgJ647aI4xPz44f66M4Bu8eKQzMgGpFVgVmlVR1qm4I4phGG%2Bgiy7PHF2GkQCBT%2BWYsEJ%2BdYQPP75JJdvBjNje7U%2FkP23nlaRmijFy5bMprJt9uWjy2LUyrB4iCHXJLA9%2BUr&X-Amz-Signature=c906762ff629a94bab1b5c0e44cffda63edce4e963055cd873c8f3c32c6830df&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSCIYXQH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBRJj41jGFtNuNhWzuiJGXI%2FF%2BhENNatEkIMq0IqiCObAiACqlIQV0S8BdrMp3DcW3%2FXllN9HFC73Hyokf%2FqOqvILCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngzgvw1bmtTC%2FdYFKtwDqbtjjVoFYh2MuCWbNV9AK9k5pmFOyiUfn7GHsqUyaklKXxuOI%2BeoNixZtB3yEDmVDSVlERVYixhyzCWW1twQ1yR9VlqPjLd3oTslQSVH9n%2FgAoSUylmoPSQ9Jj%2BJpZdaoTtxWLsnNodcaFldnNPVHy07MXC%2BcCzgvJWeZYn3rDzeDk9b%2FUSpL8LfL2tXxwqgEg9JyM8zVTZsdW%2BjWepFafnEzPw5rM3ERrW%2Bh63bCrUacDg0aZdzzp2NfzRuuYTKeaOjm64DgBkIckDLVXvnjVY7DIa7h68af8T4L0tltewreX%2Bl5bhHLXO4HexwFOpjhuzsL8VF08wPk826ur6r7u%2FsPO1e6iMbcJtwBHUOLUTdvFY2od3n6WqwaroXbAZz7Pje8kuGEzmYGPf%2FgL8tSFfOFgASRZ0Zp2NTv8vDgg86AJCL%2FHa1cKfieqmWJ0dv23fBvXOBYUxpQ5ZIzGlsRTeF3Pj5lQKiwIw%2BcoZ6%2Fjc8JTwLXn83LZrwoPYrDhD3iCX2OEfu1mc%2F5sj4aXHSTM0Kse8J9fV7l4TECGnXqOyIx%2BvXvqTshaZEg4Xa4JWKAryhhY95vEjPT3NaYqzx0YSW0kMwSmXUUSnP45TzgsQXvgcApamhAyRQZ5QwxYK0vwY6pgHXX0SWbbl7ce50rZLgv62ikFUZu6h%2FW6fZRa2Tnb9J5xe119q5c%2Fx3AZUBRLKHySJud6U4110velntOn81jFKcLuQlzgJ647aI4xPz44f66M4Bu8eKQzMgGpFVgVmlVR1qm4I4phGG%2Bgiy7PHF2GkQCBT%2BWYsEJ%2BdYQPP75JJdvBjNje7U%2FkP23nlaRmijFy5bMprJt9uWjy2LUyrB4iCHXJLA9%2BUr&X-Amz-Signature=4d5baea89e57a0bbc5a835d68c51ee87a36e0f7f9a011ccfd2117734c75e38d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSCIYXQH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBRJj41jGFtNuNhWzuiJGXI%2FF%2BhENNatEkIMq0IqiCObAiACqlIQV0S8BdrMp3DcW3%2FXllN9HFC73Hyokf%2FqOqvILCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngzgvw1bmtTC%2FdYFKtwDqbtjjVoFYh2MuCWbNV9AK9k5pmFOyiUfn7GHsqUyaklKXxuOI%2BeoNixZtB3yEDmVDSVlERVYixhyzCWW1twQ1yR9VlqPjLd3oTslQSVH9n%2FgAoSUylmoPSQ9Jj%2BJpZdaoTtxWLsnNodcaFldnNPVHy07MXC%2BcCzgvJWeZYn3rDzeDk9b%2FUSpL8LfL2tXxwqgEg9JyM8zVTZsdW%2BjWepFafnEzPw5rM3ERrW%2Bh63bCrUacDg0aZdzzp2NfzRuuYTKeaOjm64DgBkIckDLVXvnjVY7DIa7h68af8T4L0tltewreX%2Bl5bhHLXO4HexwFOpjhuzsL8VF08wPk826ur6r7u%2FsPO1e6iMbcJtwBHUOLUTdvFY2od3n6WqwaroXbAZz7Pje8kuGEzmYGPf%2FgL8tSFfOFgASRZ0Zp2NTv8vDgg86AJCL%2FHa1cKfieqmWJ0dv23fBvXOBYUxpQ5ZIzGlsRTeF3Pj5lQKiwIw%2BcoZ6%2Fjc8JTwLXn83LZrwoPYrDhD3iCX2OEfu1mc%2F5sj4aXHSTM0Kse8J9fV7l4TECGnXqOyIx%2BvXvqTshaZEg4Xa4JWKAryhhY95vEjPT3NaYqzx0YSW0kMwSmXUUSnP45TzgsQXvgcApamhAyRQZ5QwxYK0vwY6pgHXX0SWbbl7ce50rZLgv62ikFUZu6h%2FW6fZRa2Tnb9J5xe119q5c%2Fx3AZUBRLKHySJud6U4110velntOn81jFKcLuQlzgJ647aI4xPz44f66M4Bu8eKQzMgGpFVgVmlVR1qm4I4phGG%2Bgiy7PHF2GkQCBT%2BWYsEJ%2BdYQPP75JJdvBjNje7U%2FkP23nlaRmijFy5bMprJt9uWjy2LUyrB4iCHXJLA9%2BUr&X-Amz-Signature=062533cf59701e244dfe4d2454fe68aa3c98ebcbcb907658bb538d09bbf4ca0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSCIYXQH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBRJj41jGFtNuNhWzuiJGXI%2FF%2BhENNatEkIMq0IqiCObAiACqlIQV0S8BdrMp3DcW3%2FXllN9HFC73Hyokf%2FqOqvILCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngzgvw1bmtTC%2FdYFKtwDqbtjjVoFYh2MuCWbNV9AK9k5pmFOyiUfn7GHsqUyaklKXxuOI%2BeoNixZtB3yEDmVDSVlERVYixhyzCWW1twQ1yR9VlqPjLd3oTslQSVH9n%2FgAoSUylmoPSQ9Jj%2BJpZdaoTtxWLsnNodcaFldnNPVHy07MXC%2BcCzgvJWeZYn3rDzeDk9b%2FUSpL8LfL2tXxwqgEg9JyM8zVTZsdW%2BjWepFafnEzPw5rM3ERrW%2Bh63bCrUacDg0aZdzzp2NfzRuuYTKeaOjm64DgBkIckDLVXvnjVY7DIa7h68af8T4L0tltewreX%2Bl5bhHLXO4HexwFOpjhuzsL8VF08wPk826ur6r7u%2FsPO1e6iMbcJtwBHUOLUTdvFY2od3n6WqwaroXbAZz7Pje8kuGEzmYGPf%2FgL8tSFfOFgASRZ0Zp2NTv8vDgg86AJCL%2FHa1cKfieqmWJ0dv23fBvXOBYUxpQ5ZIzGlsRTeF3Pj5lQKiwIw%2BcoZ6%2Fjc8JTwLXn83LZrwoPYrDhD3iCX2OEfu1mc%2F5sj4aXHSTM0Kse8J9fV7l4TECGnXqOyIx%2BvXvqTshaZEg4Xa4JWKAryhhY95vEjPT3NaYqzx0YSW0kMwSmXUUSnP45TzgsQXvgcApamhAyRQZ5QwxYK0vwY6pgHXX0SWbbl7ce50rZLgv62ikFUZu6h%2FW6fZRa2Tnb9J5xe119q5c%2Fx3AZUBRLKHySJud6U4110velntOn81jFKcLuQlzgJ647aI4xPz44f66M4Bu8eKQzMgGpFVgVmlVR1qm4I4phGG%2Bgiy7PHF2GkQCBT%2BWYsEJ%2BdYQPP75JJdvBjNje7U%2FkP23nlaRmijFy5bMprJt9uWjy2LUyrB4iCHXJLA9%2BUr&X-Amz-Signature=4d6c685dd40cd83846288cbe7cd4c7f5cac3a8945141e6776bd259fe049e3a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
