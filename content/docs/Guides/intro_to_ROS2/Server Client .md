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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPLNAAS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkCX%2BrsqWclw5OOYvw02ZUe7MACbxXYZF5eucWJtajJAiEAqsa7%2B%2BDgieMigQ8V5efBKnthzAcyPuf6futsukH9Deoq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHz2pqDqvbIc5K%2FyYCrcA0Iza%2F3NzjY%2FOBJ%2F680rPHYYpFSQghmq8jp%2FZAl0ndT3sBBBNNA1BGeIghYtIz0W60F0sfSCIZrq2Pm5E3Lta7Bkzkk6eRRDPsg7oHjz80VBuVLR%2B3MeYqDgrgGr4LL3lhpidFmjwkzAi%2FPx8zraOhIUu71zzIjA%2FNJXsFqthY5KlmkYIuGsL0gT0UNp5nGO6%2FIKMAMy32M8WGl0FygA%2FqAdbJd7yBh2xJwP8UVqiFf9a6wYD%2BCCZtb10Mt47bFr4Wf3SwDW9aPbLrO8pyyTIAoBr04CaSzSztQJfy7Br%2BL3o8N8yDxAkiBWFhitPaSXmm%2BLrDhOdiPaUM9sb9jiPsuU4tZS3YL0R%2BzJil2KWoIvJtrVGkAsKANuhORkDno1RZNLRBAI5nwdC0yiyBLljRhBKd39s9UR7I3pC2Qb8v9rYv13gescRBVqn0wI2ZtppHSRVLh71Jdhtv8V7UsLZKaunr70HoGnkrgEXdExMolU%2FD2Shqy5fE3WSw9w%2F2LfOk9sSGThmSpkh3Ycp98bPZOSBQIfG58QhSLwOcnKUFRRob9L55EIn2muJa70MmuIJyc9hACCmbEtDtc0%2FBnAMWhXfJWgAIqxpai682wKPaIZmyL9mzwPZBfqLNwbMM%2FNp74GOqUBN9GzD161rS6IjDHSxqpyP1WR%2F%2Fox69Nf%2BJqdP6VMulpDe4slLEVN0SGeZ29u%2F0W%2BxHxl%2FNZHZEA%2F1%2Fe8L0LKKQQsTtvO4uG6NZ%2Bf4iSq2v6iXSf3aplH3nY%2FPDh2Q7KMLr81nLXaCWMIpPGk5sTlc8pZeF2xFLOs35SM6Ltd5vCXqCxdlyXoPX6IT7hiyXbN%2Bl5gLs%2BttkUL4LpeFwdQfbLPLciO&X-Amz-Signature=121a678cd078430fce9e8157f15e3cc13295dd8796474113eeb4d0b0328302fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPLNAAS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkCX%2BrsqWclw5OOYvw02ZUe7MACbxXYZF5eucWJtajJAiEAqsa7%2B%2BDgieMigQ8V5efBKnthzAcyPuf6futsukH9Deoq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHz2pqDqvbIc5K%2FyYCrcA0Iza%2F3NzjY%2FOBJ%2F680rPHYYpFSQghmq8jp%2FZAl0ndT3sBBBNNA1BGeIghYtIz0W60F0sfSCIZrq2Pm5E3Lta7Bkzkk6eRRDPsg7oHjz80VBuVLR%2B3MeYqDgrgGr4LL3lhpidFmjwkzAi%2FPx8zraOhIUu71zzIjA%2FNJXsFqthY5KlmkYIuGsL0gT0UNp5nGO6%2FIKMAMy32M8WGl0FygA%2FqAdbJd7yBh2xJwP8UVqiFf9a6wYD%2BCCZtb10Mt47bFr4Wf3SwDW9aPbLrO8pyyTIAoBr04CaSzSztQJfy7Br%2BL3o8N8yDxAkiBWFhitPaSXmm%2BLrDhOdiPaUM9sb9jiPsuU4tZS3YL0R%2BzJil2KWoIvJtrVGkAsKANuhORkDno1RZNLRBAI5nwdC0yiyBLljRhBKd39s9UR7I3pC2Qb8v9rYv13gescRBVqn0wI2ZtppHSRVLh71Jdhtv8V7UsLZKaunr70HoGnkrgEXdExMolU%2FD2Shqy5fE3WSw9w%2F2LfOk9sSGThmSpkh3Ycp98bPZOSBQIfG58QhSLwOcnKUFRRob9L55EIn2muJa70MmuIJyc9hACCmbEtDtc0%2FBnAMWhXfJWgAIqxpai682wKPaIZmyL9mzwPZBfqLNwbMM%2FNp74GOqUBN9GzD161rS6IjDHSxqpyP1WR%2F%2Fox69Nf%2BJqdP6VMulpDe4slLEVN0SGeZ29u%2F0W%2BxHxl%2FNZHZEA%2F1%2Fe8L0LKKQQsTtvO4uG6NZ%2Bf4iSq2v6iXSf3aplH3nY%2FPDh2Q7KMLr81nLXaCWMIpPGk5sTlc8pZeF2xFLOs35SM6Ltd5vCXqCxdlyXoPX6IT7hiyXbN%2Bl5gLs%2BttkUL4LpeFwdQfbLPLciO&X-Amz-Signature=b0df3ebd10e69e60a4f743b77f81e2016f173414df9ffc03588edbce1007d78b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPLNAAS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkCX%2BrsqWclw5OOYvw02ZUe7MACbxXYZF5eucWJtajJAiEAqsa7%2B%2BDgieMigQ8V5efBKnthzAcyPuf6futsukH9Deoq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHz2pqDqvbIc5K%2FyYCrcA0Iza%2F3NzjY%2FOBJ%2F680rPHYYpFSQghmq8jp%2FZAl0ndT3sBBBNNA1BGeIghYtIz0W60F0sfSCIZrq2Pm5E3Lta7Bkzkk6eRRDPsg7oHjz80VBuVLR%2B3MeYqDgrgGr4LL3lhpidFmjwkzAi%2FPx8zraOhIUu71zzIjA%2FNJXsFqthY5KlmkYIuGsL0gT0UNp5nGO6%2FIKMAMy32M8WGl0FygA%2FqAdbJd7yBh2xJwP8UVqiFf9a6wYD%2BCCZtb10Mt47bFr4Wf3SwDW9aPbLrO8pyyTIAoBr04CaSzSztQJfy7Br%2BL3o8N8yDxAkiBWFhitPaSXmm%2BLrDhOdiPaUM9sb9jiPsuU4tZS3YL0R%2BzJil2KWoIvJtrVGkAsKANuhORkDno1RZNLRBAI5nwdC0yiyBLljRhBKd39s9UR7I3pC2Qb8v9rYv13gescRBVqn0wI2ZtppHSRVLh71Jdhtv8V7UsLZKaunr70HoGnkrgEXdExMolU%2FD2Shqy5fE3WSw9w%2F2LfOk9sSGThmSpkh3Ycp98bPZOSBQIfG58QhSLwOcnKUFRRob9L55EIn2muJa70MmuIJyc9hACCmbEtDtc0%2FBnAMWhXfJWgAIqxpai682wKPaIZmyL9mzwPZBfqLNwbMM%2FNp74GOqUBN9GzD161rS6IjDHSxqpyP1WR%2F%2Fox69Nf%2BJqdP6VMulpDe4slLEVN0SGeZ29u%2F0W%2BxHxl%2FNZHZEA%2F1%2Fe8L0LKKQQsTtvO4uG6NZ%2Bf4iSq2v6iXSf3aplH3nY%2FPDh2Q7KMLr81nLXaCWMIpPGk5sTlc8pZeF2xFLOs35SM6Ltd5vCXqCxdlyXoPX6IT7hiyXbN%2Bl5gLs%2BttkUL4LpeFwdQfbLPLciO&X-Amz-Signature=ceb002ce000526e1247207dc4b5d291438485deb6ae840b8d19a00a44f292088&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPLNAAS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkCX%2BrsqWclw5OOYvw02ZUe7MACbxXYZF5eucWJtajJAiEAqsa7%2B%2BDgieMigQ8V5efBKnthzAcyPuf6futsukH9Deoq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHz2pqDqvbIc5K%2FyYCrcA0Iza%2F3NzjY%2FOBJ%2F680rPHYYpFSQghmq8jp%2FZAl0ndT3sBBBNNA1BGeIghYtIz0W60F0sfSCIZrq2Pm5E3Lta7Bkzkk6eRRDPsg7oHjz80VBuVLR%2B3MeYqDgrgGr4LL3lhpidFmjwkzAi%2FPx8zraOhIUu71zzIjA%2FNJXsFqthY5KlmkYIuGsL0gT0UNp5nGO6%2FIKMAMy32M8WGl0FygA%2FqAdbJd7yBh2xJwP8UVqiFf9a6wYD%2BCCZtb10Mt47bFr4Wf3SwDW9aPbLrO8pyyTIAoBr04CaSzSztQJfy7Br%2BL3o8N8yDxAkiBWFhitPaSXmm%2BLrDhOdiPaUM9sb9jiPsuU4tZS3YL0R%2BzJil2KWoIvJtrVGkAsKANuhORkDno1RZNLRBAI5nwdC0yiyBLljRhBKd39s9UR7I3pC2Qb8v9rYv13gescRBVqn0wI2ZtppHSRVLh71Jdhtv8V7UsLZKaunr70HoGnkrgEXdExMolU%2FD2Shqy5fE3WSw9w%2F2LfOk9sSGThmSpkh3Ycp98bPZOSBQIfG58QhSLwOcnKUFRRob9L55EIn2muJa70MmuIJyc9hACCmbEtDtc0%2FBnAMWhXfJWgAIqxpai682wKPaIZmyL9mzwPZBfqLNwbMM%2FNp74GOqUBN9GzD161rS6IjDHSxqpyP1WR%2F%2Fox69Nf%2BJqdP6VMulpDe4slLEVN0SGeZ29u%2F0W%2BxHxl%2FNZHZEA%2F1%2Fe8L0LKKQQsTtvO4uG6NZ%2Bf4iSq2v6iXSf3aplH3nY%2FPDh2Q7KMLr81nLXaCWMIpPGk5sTlc8pZeF2xFLOs35SM6Ltd5vCXqCxdlyXoPX6IT7hiyXbN%2Bl5gLs%2BttkUL4LpeFwdQfbLPLciO&X-Amz-Signature=3bcd2820969aef31e734892cdda66badf0defce6cc4d49348450872c3964e80c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPLNAAS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkCX%2BrsqWclw5OOYvw02ZUe7MACbxXYZF5eucWJtajJAiEAqsa7%2B%2BDgieMigQ8V5efBKnthzAcyPuf6futsukH9Deoq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHz2pqDqvbIc5K%2FyYCrcA0Iza%2F3NzjY%2FOBJ%2F680rPHYYpFSQghmq8jp%2FZAl0ndT3sBBBNNA1BGeIghYtIz0W60F0sfSCIZrq2Pm5E3Lta7Bkzkk6eRRDPsg7oHjz80VBuVLR%2B3MeYqDgrgGr4LL3lhpidFmjwkzAi%2FPx8zraOhIUu71zzIjA%2FNJXsFqthY5KlmkYIuGsL0gT0UNp5nGO6%2FIKMAMy32M8WGl0FygA%2FqAdbJd7yBh2xJwP8UVqiFf9a6wYD%2BCCZtb10Mt47bFr4Wf3SwDW9aPbLrO8pyyTIAoBr04CaSzSztQJfy7Br%2BL3o8N8yDxAkiBWFhitPaSXmm%2BLrDhOdiPaUM9sb9jiPsuU4tZS3YL0R%2BzJil2KWoIvJtrVGkAsKANuhORkDno1RZNLRBAI5nwdC0yiyBLljRhBKd39s9UR7I3pC2Qb8v9rYv13gescRBVqn0wI2ZtppHSRVLh71Jdhtv8V7UsLZKaunr70HoGnkrgEXdExMolU%2FD2Shqy5fE3WSw9w%2F2LfOk9sSGThmSpkh3Ycp98bPZOSBQIfG58QhSLwOcnKUFRRob9L55EIn2muJa70MmuIJyc9hACCmbEtDtc0%2FBnAMWhXfJWgAIqxpai682wKPaIZmyL9mzwPZBfqLNwbMM%2FNp74GOqUBN9GzD161rS6IjDHSxqpyP1WR%2F%2Fox69Nf%2BJqdP6VMulpDe4slLEVN0SGeZ29u%2F0W%2BxHxl%2FNZHZEA%2F1%2Fe8L0LKKQQsTtvO4uG6NZ%2Bf4iSq2v6iXSf3aplH3nY%2FPDh2Q7KMLr81nLXaCWMIpPGk5sTlc8pZeF2xFLOs35SM6Ltd5vCXqCxdlyXoPX6IT7hiyXbN%2Bl5gLs%2BttkUL4LpeFwdQfbLPLciO&X-Amz-Signature=c26feb39b35ab75f71f0451cd1da3ac50f09f676f3b75c2e9a1b33c3b0baf3e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
