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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYDCDLM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFvGej4IqEJik2Mh7kgBkSQltdn1qC4yztXfoWJxiANdAiAmrTKT36DABZpAtXjnjGh%2B5UxBjYEm4YomWfwdzT%2FAGSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMjG9Bs4On%2FAWzm3A%2BKtwDMU6GwGjFScF8BSPi4rnBftWRaT7TV3kqqc6b1oeZzwqsmWKw%2BNeOwaXs1xqj6WFLwQRnyUPoOKQkQc7q%2B2BPAQM6MSu5f%2FOqmEO5gashhM1pS2Hm4Vns26uIZQ2DkF%2F4TqerMxI6sAyOAkEqMluLX4eZvptt7GHrwZ7EtCr6YM1j5K%2BtBK%2F8m13wgb8JRAG9AW4BmI%2F%2FhjknAc5SchiylroraZa9L0UkNoeOT7c4bR8ebxADEcWAailwcwdkBUNF1K6HliziWg3QYuS5nOiOcRWKoTXNxDqH7XtqGPH89eW0zHYR%2FWP3n3kjOmgAI5HDqdA9dGSUwKvMCXBguWyNstb9KxDD3HLM3La7M3nsHiXr8C%2FfFDhJ4w%2Bu8LfBgab5YrXZORAgxnPh6nT9bvV9COg1EwhgtSdPwtVe%2F0l08SkRxWY6E9Ld8GXplzilkDwSrXUqHnPTJiHCjI5bhX53OU9jtljs0rF8Io%2FrBWTxttq%2B6i1wR6d8IdLh7sRodbjtwXIKp3nkwYK35PgPdOYV66yW4dwZSJwYN2cJAloFkBahWKgxjF7wOfAD2bmpfvj709T%2Fl4oWZt5ZLim0ocmGGvGG%2FySqfFT%2BrVt%2F%2FdOs%2B%2FQvA5V6GJMEZWsnMD8w5KL6xAY6pgGocFnTvLQeUG2ll5kSNTrSy3nraoRldXb4v9qz7RM9QapcHvP%2FhMSOD9SsaDKaqMRtcL%2FSg%2BLgzgrIiZ30yU0Ey%2BgDOIzPCjrpIfhjYHQOxH628RjROG9nVg1PQkR8hBcRcuAll82ZqO8KDxyGUjXo2QooZ2Qee7UC1tIpCv6j7S%2BZsulXsWgT9v5PQQNnW4ayMlofC7Cpi%2F6ODvEk6BSFQTLSad6E&X-Amz-Signature=82b9cc66f71fdc428256e684754de2634b0fd963b67f9d9b8a988ab3caed01c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYDCDLM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFvGej4IqEJik2Mh7kgBkSQltdn1qC4yztXfoWJxiANdAiAmrTKT36DABZpAtXjnjGh%2B5UxBjYEm4YomWfwdzT%2FAGSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMjG9Bs4On%2FAWzm3A%2BKtwDMU6GwGjFScF8BSPi4rnBftWRaT7TV3kqqc6b1oeZzwqsmWKw%2BNeOwaXs1xqj6WFLwQRnyUPoOKQkQc7q%2B2BPAQM6MSu5f%2FOqmEO5gashhM1pS2Hm4Vns26uIZQ2DkF%2F4TqerMxI6sAyOAkEqMluLX4eZvptt7GHrwZ7EtCr6YM1j5K%2BtBK%2F8m13wgb8JRAG9AW4BmI%2F%2FhjknAc5SchiylroraZa9L0UkNoeOT7c4bR8ebxADEcWAailwcwdkBUNF1K6HliziWg3QYuS5nOiOcRWKoTXNxDqH7XtqGPH89eW0zHYR%2FWP3n3kjOmgAI5HDqdA9dGSUwKvMCXBguWyNstb9KxDD3HLM3La7M3nsHiXr8C%2FfFDhJ4w%2Bu8LfBgab5YrXZORAgxnPh6nT9bvV9COg1EwhgtSdPwtVe%2F0l08SkRxWY6E9Ld8GXplzilkDwSrXUqHnPTJiHCjI5bhX53OU9jtljs0rF8Io%2FrBWTxttq%2B6i1wR6d8IdLh7sRodbjtwXIKp3nkwYK35PgPdOYV66yW4dwZSJwYN2cJAloFkBahWKgxjF7wOfAD2bmpfvj709T%2Fl4oWZt5ZLim0ocmGGvGG%2FySqfFT%2BrVt%2F%2FdOs%2B%2FQvA5V6GJMEZWsnMD8w5KL6xAY6pgGocFnTvLQeUG2ll5kSNTrSy3nraoRldXb4v9qz7RM9QapcHvP%2FhMSOD9SsaDKaqMRtcL%2FSg%2BLgzgrIiZ30yU0Ey%2BgDOIzPCjrpIfhjYHQOxH628RjROG9nVg1PQkR8hBcRcuAll82ZqO8KDxyGUjXo2QooZ2Qee7UC1tIpCv6j7S%2BZsulXsWgT9v5PQQNnW4ayMlofC7Cpi%2F6ODvEk6BSFQTLSad6E&X-Amz-Signature=46a109686824b4072a927c07eb704df6a797249a09285b94a6f770ad643377ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYDCDLM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFvGej4IqEJik2Mh7kgBkSQltdn1qC4yztXfoWJxiANdAiAmrTKT36DABZpAtXjnjGh%2B5UxBjYEm4YomWfwdzT%2FAGSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMjG9Bs4On%2FAWzm3A%2BKtwDMU6GwGjFScF8BSPi4rnBftWRaT7TV3kqqc6b1oeZzwqsmWKw%2BNeOwaXs1xqj6WFLwQRnyUPoOKQkQc7q%2B2BPAQM6MSu5f%2FOqmEO5gashhM1pS2Hm4Vns26uIZQ2DkF%2F4TqerMxI6sAyOAkEqMluLX4eZvptt7GHrwZ7EtCr6YM1j5K%2BtBK%2F8m13wgb8JRAG9AW4BmI%2F%2FhjknAc5SchiylroraZa9L0UkNoeOT7c4bR8ebxADEcWAailwcwdkBUNF1K6HliziWg3QYuS5nOiOcRWKoTXNxDqH7XtqGPH89eW0zHYR%2FWP3n3kjOmgAI5HDqdA9dGSUwKvMCXBguWyNstb9KxDD3HLM3La7M3nsHiXr8C%2FfFDhJ4w%2Bu8LfBgab5YrXZORAgxnPh6nT9bvV9COg1EwhgtSdPwtVe%2F0l08SkRxWY6E9Ld8GXplzilkDwSrXUqHnPTJiHCjI5bhX53OU9jtljs0rF8Io%2FrBWTxttq%2B6i1wR6d8IdLh7sRodbjtwXIKp3nkwYK35PgPdOYV66yW4dwZSJwYN2cJAloFkBahWKgxjF7wOfAD2bmpfvj709T%2Fl4oWZt5ZLim0ocmGGvGG%2FySqfFT%2BrVt%2F%2FdOs%2B%2FQvA5V6GJMEZWsnMD8w5KL6xAY6pgGocFnTvLQeUG2ll5kSNTrSy3nraoRldXb4v9qz7RM9QapcHvP%2FhMSOD9SsaDKaqMRtcL%2FSg%2BLgzgrIiZ30yU0Ey%2BgDOIzPCjrpIfhjYHQOxH628RjROG9nVg1PQkR8hBcRcuAll82ZqO8KDxyGUjXo2QooZ2Qee7UC1tIpCv6j7S%2BZsulXsWgT9v5PQQNnW4ayMlofC7Cpi%2F6ODvEk6BSFQTLSad6E&X-Amz-Signature=39aa888bb7cfd6cb4e0efab50e30de2ea44af324e9dac444ac9e04d5f8b7a612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYDCDLM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFvGej4IqEJik2Mh7kgBkSQltdn1qC4yztXfoWJxiANdAiAmrTKT36DABZpAtXjnjGh%2B5UxBjYEm4YomWfwdzT%2FAGSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMjG9Bs4On%2FAWzm3A%2BKtwDMU6GwGjFScF8BSPi4rnBftWRaT7TV3kqqc6b1oeZzwqsmWKw%2BNeOwaXs1xqj6WFLwQRnyUPoOKQkQc7q%2B2BPAQM6MSu5f%2FOqmEO5gashhM1pS2Hm4Vns26uIZQ2DkF%2F4TqerMxI6sAyOAkEqMluLX4eZvptt7GHrwZ7EtCr6YM1j5K%2BtBK%2F8m13wgb8JRAG9AW4BmI%2F%2FhjknAc5SchiylroraZa9L0UkNoeOT7c4bR8ebxADEcWAailwcwdkBUNF1K6HliziWg3QYuS5nOiOcRWKoTXNxDqH7XtqGPH89eW0zHYR%2FWP3n3kjOmgAI5HDqdA9dGSUwKvMCXBguWyNstb9KxDD3HLM3La7M3nsHiXr8C%2FfFDhJ4w%2Bu8LfBgab5YrXZORAgxnPh6nT9bvV9COg1EwhgtSdPwtVe%2F0l08SkRxWY6E9Ld8GXplzilkDwSrXUqHnPTJiHCjI5bhX53OU9jtljs0rF8Io%2FrBWTxttq%2B6i1wR6d8IdLh7sRodbjtwXIKp3nkwYK35PgPdOYV66yW4dwZSJwYN2cJAloFkBahWKgxjF7wOfAD2bmpfvj709T%2Fl4oWZt5ZLim0ocmGGvGG%2FySqfFT%2BrVt%2F%2FdOs%2B%2FQvA5V6GJMEZWsnMD8w5KL6xAY6pgGocFnTvLQeUG2ll5kSNTrSy3nraoRldXb4v9qz7RM9QapcHvP%2FhMSOD9SsaDKaqMRtcL%2FSg%2BLgzgrIiZ30yU0Ey%2BgDOIzPCjrpIfhjYHQOxH628RjROG9nVg1PQkR8hBcRcuAll82ZqO8KDxyGUjXo2QooZ2Qee7UC1tIpCv6j7S%2BZsulXsWgT9v5PQQNnW4ayMlofC7Cpi%2F6ODvEk6BSFQTLSad6E&X-Amz-Signature=cbb437dbe6ee28490ad094473f249aa0fb104d2ba7cad43cf5238d781f1c2c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYDCDLM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFvGej4IqEJik2Mh7kgBkSQltdn1qC4yztXfoWJxiANdAiAmrTKT36DABZpAtXjnjGh%2B5UxBjYEm4YomWfwdzT%2FAGSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMjG9Bs4On%2FAWzm3A%2BKtwDMU6GwGjFScF8BSPi4rnBftWRaT7TV3kqqc6b1oeZzwqsmWKw%2BNeOwaXs1xqj6WFLwQRnyUPoOKQkQc7q%2B2BPAQM6MSu5f%2FOqmEO5gashhM1pS2Hm4Vns26uIZQ2DkF%2F4TqerMxI6sAyOAkEqMluLX4eZvptt7GHrwZ7EtCr6YM1j5K%2BtBK%2F8m13wgb8JRAG9AW4BmI%2F%2FhjknAc5SchiylroraZa9L0UkNoeOT7c4bR8ebxADEcWAailwcwdkBUNF1K6HliziWg3QYuS5nOiOcRWKoTXNxDqH7XtqGPH89eW0zHYR%2FWP3n3kjOmgAI5HDqdA9dGSUwKvMCXBguWyNstb9KxDD3HLM3La7M3nsHiXr8C%2FfFDhJ4w%2Bu8LfBgab5YrXZORAgxnPh6nT9bvV9COg1EwhgtSdPwtVe%2F0l08SkRxWY6E9Ld8GXplzilkDwSrXUqHnPTJiHCjI5bhX53OU9jtljs0rF8Io%2FrBWTxttq%2B6i1wR6d8IdLh7sRodbjtwXIKp3nkwYK35PgPdOYV66yW4dwZSJwYN2cJAloFkBahWKgxjF7wOfAD2bmpfvj709T%2Fl4oWZt5ZLim0ocmGGvGG%2FySqfFT%2BrVt%2F%2FdOs%2B%2FQvA5V6GJMEZWsnMD8w5KL6xAY6pgGocFnTvLQeUG2ll5kSNTrSy3nraoRldXb4v9qz7RM9QapcHvP%2FhMSOD9SsaDKaqMRtcL%2FSg%2BLgzgrIiZ30yU0Ey%2BgDOIzPCjrpIfhjYHQOxH628RjROG9nVg1PQkR8hBcRcuAll82ZqO8KDxyGUjXo2QooZ2Qee7UC1tIpCv6j7S%2BZsulXsWgT9v5PQQNnW4ayMlofC7Cpi%2F6ODvEk6BSFQTLSad6E&X-Amz-Signature=19ddc9f656d13e9905c7858e9a1311f143e0bca8cac0a1de826b115296107cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
