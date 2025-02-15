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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYKUTHD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCs%2Beab5bChA08YWyW7sEbUdCYdruRSzS406i8gMyzI%2FQIhALsxUiegrlnal9ytSiETQgP6EwpLZUJ4mPoieAeTLn2FKv8DCEMQABoMNjM3NDIzMTgzODA1IgxkdNJCZg4XKPO72V4q3ANqk8m7VhLuIamjZbHTcgjzh%2FX6JCU745e82IhIPOVgeJGy6ELwWECaw9hqjj1j61JnbVs%2BMU3MEmF%2BRALq60TLy4ogahTtO2SacpFaShhFFruanAp0OQ1jrPUB1FsPy9kROcksmBt8tmqlORasjaGfrj8RE5S920y5v0dxo8sLoLIAJrpuWnUsMvUlcvKwah%2BBYV5RAI4nBvVW%2F5LsnrGezvRo76nDEK66Sj0R%2FgWz3sveSqH7y9XGl9UCAT4vCSwiYGzzYUVIjovLnlfSfcuxDPECM8T6LXmELGy%2FCRNoCLqoKJFiHNEakTvvc7fuafPZCfU1JVk5oKddRuTCV3Dlq9jlXQC6L3IUXfTN%2BWB%2B0%2B34XP1yB1%2Bet1RIO%2Fnh%2B8gs%2F4InLkTNtGqeNEe5uiK2t9Me%2FUE3ImKZhb7ySwyVWvKN7ypVtbTaGK7YBI7Vho23XUqfo9XpInRCBEjEmmzF61%2F6rZCEqfk0dQrvMAh%2B2%2B%2F2lF3%2FPHvzVJdBgI1omZLgsCxpOai4HgxRj0vPj7Vo4ol7So%2F11t2sSA60zVZ7OafI6EdpIHiEgCDmsRA83kmbiGzI1cKYUg6r1QlmgcrGY086PjJuxDR5ed6%2BHa3UOzujGviHpA0OaluWvTDPvsG9BjqkAT927LHuiGr1jg3diqQ3zDjdXRQEeu1C%2BdYE%2Bco6N7FAe9Diw0WQBF7n89U6w9EHFddkzFEhbRN69poOPq00RXuWfGdc6UwXocNS0%2ByfPKUdvs1iWO9lujNsHOe9%2Fy1ADb5DoO8xHSYiwxiGFZUk%2FGZk7708TNNmMuBOz2X0KKgtof%2BcuFoeENIEOeYIQHsUVp4zV0JlYXKhA9aJLMkI30GsWZDo&X-Amz-Signature=a52bad2238fdc78bf26ae92c8cdaf0de328f46d51bf660bf27ada4025782b70e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYKUTHD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCs%2Beab5bChA08YWyW7sEbUdCYdruRSzS406i8gMyzI%2FQIhALsxUiegrlnal9ytSiETQgP6EwpLZUJ4mPoieAeTLn2FKv8DCEMQABoMNjM3NDIzMTgzODA1IgxkdNJCZg4XKPO72V4q3ANqk8m7VhLuIamjZbHTcgjzh%2FX6JCU745e82IhIPOVgeJGy6ELwWECaw9hqjj1j61JnbVs%2BMU3MEmF%2BRALq60TLy4ogahTtO2SacpFaShhFFruanAp0OQ1jrPUB1FsPy9kROcksmBt8tmqlORasjaGfrj8RE5S920y5v0dxo8sLoLIAJrpuWnUsMvUlcvKwah%2BBYV5RAI4nBvVW%2F5LsnrGezvRo76nDEK66Sj0R%2FgWz3sveSqH7y9XGl9UCAT4vCSwiYGzzYUVIjovLnlfSfcuxDPECM8T6LXmELGy%2FCRNoCLqoKJFiHNEakTvvc7fuafPZCfU1JVk5oKddRuTCV3Dlq9jlXQC6L3IUXfTN%2BWB%2B0%2B34XP1yB1%2Bet1RIO%2Fnh%2B8gs%2F4InLkTNtGqeNEe5uiK2t9Me%2FUE3ImKZhb7ySwyVWvKN7ypVtbTaGK7YBI7Vho23XUqfo9XpInRCBEjEmmzF61%2F6rZCEqfk0dQrvMAh%2B2%2B%2F2lF3%2FPHvzVJdBgI1omZLgsCxpOai4HgxRj0vPj7Vo4ol7So%2F11t2sSA60zVZ7OafI6EdpIHiEgCDmsRA83kmbiGzI1cKYUg6r1QlmgcrGY086PjJuxDR5ed6%2BHa3UOzujGviHpA0OaluWvTDPvsG9BjqkAT927LHuiGr1jg3diqQ3zDjdXRQEeu1C%2BdYE%2Bco6N7FAe9Diw0WQBF7n89U6w9EHFddkzFEhbRN69poOPq00RXuWfGdc6UwXocNS0%2ByfPKUdvs1iWO9lujNsHOe9%2Fy1ADb5DoO8xHSYiwxiGFZUk%2FGZk7708TNNmMuBOz2X0KKgtof%2BcuFoeENIEOeYIQHsUVp4zV0JlYXKhA9aJLMkI30GsWZDo&X-Amz-Signature=5b4a974a92498e6914d9c6f26dac2873d2207ab1894b9a74fbc7d96fa59bcdba&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYKUTHD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCs%2Beab5bChA08YWyW7sEbUdCYdruRSzS406i8gMyzI%2FQIhALsxUiegrlnal9ytSiETQgP6EwpLZUJ4mPoieAeTLn2FKv8DCEMQABoMNjM3NDIzMTgzODA1IgxkdNJCZg4XKPO72V4q3ANqk8m7VhLuIamjZbHTcgjzh%2FX6JCU745e82IhIPOVgeJGy6ELwWECaw9hqjj1j61JnbVs%2BMU3MEmF%2BRALq60TLy4ogahTtO2SacpFaShhFFruanAp0OQ1jrPUB1FsPy9kROcksmBt8tmqlORasjaGfrj8RE5S920y5v0dxo8sLoLIAJrpuWnUsMvUlcvKwah%2BBYV5RAI4nBvVW%2F5LsnrGezvRo76nDEK66Sj0R%2FgWz3sveSqH7y9XGl9UCAT4vCSwiYGzzYUVIjovLnlfSfcuxDPECM8T6LXmELGy%2FCRNoCLqoKJFiHNEakTvvc7fuafPZCfU1JVk5oKddRuTCV3Dlq9jlXQC6L3IUXfTN%2BWB%2B0%2B34XP1yB1%2Bet1RIO%2Fnh%2B8gs%2F4InLkTNtGqeNEe5uiK2t9Me%2FUE3ImKZhb7ySwyVWvKN7ypVtbTaGK7YBI7Vho23XUqfo9XpInRCBEjEmmzF61%2F6rZCEqfk0dQrvMAh%2B2%2B%2F2lF3%2FPHvzVJdBgI1omZLgsCxpOai4HgxRj0vPj7Vo4ol7So%2F11t2sSA60zVZ7OafI6EdpIHiEgCDmsRA83kmbiGzI1cKYUg6r1QlmgcrGY086PjJuxDR5ed6%2BHa3UOzujGviHpA0OaluWvTDPvsG9BjqkAT927LHuiGr1jg3diqQ3zDjdXRQEeu1C%2BdYE%2Bco6N7FAe9Diw0WQBF7n89U6w9EHFddkzFEhbRN69poOPq00RXuWfGdc6UwXocNS0%2ByfPKUdvs1iWO9lujNsHOe9%2Fy1ADb5DoO8xHSYiwxiGFZUk%2FGZk7708TNNmMuBOz2X0KKgtof%2BcuFoeENIEOeYIQHsUVp4zV0JlYXKhA9aJLMkI30GsWZDo&X-Amz-Signature=a5c6d518e2c7cfe20ac93d301ab3bef1f69750f8295ca7e95136d68ab3373abc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYKUTHD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCs%2Beab5bChA08YWyW7sEbUdCYdruRSzS406i8gMyzI%2FQIhALsxUiegrlnal9ytSiETQgP6EwpLZUJ4mPoieAeTLn2FKv8DCEMQABoMNjM3NDIzMTgzODA1IgxkdNJCZg4XKPO72V4q3ANqk8m7VhLuIamjZbHTcgjzh%2FX6JCU745e82IhIPOVgeJGy6ELwWECaw9hqjj1j61JnbVs%2BMU3MEmF%2BRALq60TLy4ogahTtO2SacpFaShhFFruanAp0OQ1jrPUB1FsPy9kROcksmBt8tmqlORasjaGfrj8RE5S920y5v0dxo8sLoLIAJrpuWnUsMvUlcvKwah%2BBYV5RAI4nBvVW%2F5LsnrGezvRo76nDEK66Sj0R%2FgWz3sveSqH7y9XGl9UCAT4vCSwiYGzzYUVIjovLnlfSfcuxDPECM8T6LXmELGy%2FCRNoCLqoKJFiHNEakTvvc7fuafPZCfU1JVk5oKddRuTCV3Dlq9jlXQC6L3IUXfTN%2BWB%2B0%2B34XP1yB1%2Bet1RIO%2Fnh%2B8gs%2F4InLkTNtGqeNEe5uiK2t9Me%2FUE3ImKZhb7ySwyVWvKN7ypVtbTaGK7YBI7Vho23XUqfo9XpInRCBEjEmmzF61%2F6rZCEqfk0dQrvMAh%2B2%2B%2F2lF3%2FPHvzVJdBgI1omZLgsCxpOai4HgxRj0vPj7Vo4ol7So%2F11t2sSA60zVZ7OafI6EdpIHiEgCDmsRA83kmbiGzI1cKYUg6r1QlmgcrGY086PjJuxDR5ed6%2BHa3UOzujGviHpA0OaluWvTDPvsG9BjqkAT927LHuiGr1jg3diqQ3zDjdXRQEeu1C%2BdYE%2Bco6N7FAe9Diw0WQBF7n89U6w9EHFddkzFEhbRN69poOPq00RXuWfGdc6UwXocNS0%2ByfPKUdvs1iWO9lujNsHOe9%2Fy1ADb5DoO8xHSYiwxiGFZUk%2FGZk7708TNNmMuBOz2X0KKgtof%2BcuFoeENIEOeYIQHsUVp4zV0JlYXKhA9aJLMkI30GsWZDo&X-Amz-Signature=f23b14a23efdf0f600ecbc98e8f5ec80f382848574a094907d5ccddf2804f642&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYKUTHD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCs%2Beab5bChA08YWyW7sEbUdCYdruRSzS406i8gMyzI%2FQIhALsxUiegrlnal9ytSiETQgP6EwpLZUJ4mPoieAeTLn2FKv8DCEMQABoMNjM3NDIzMTgzODA1IgxkdNJCZg4XKPO72V4q3ANqk8m7VhLuIamjZbHTcgjzh%2FX6JCU745e82IhIPOVgeJGy6ELwWECaw9hqjj1j61JnbVs%2BMU3MEmF%2BRALq60TLy4ogahTtO2SacpFaShhFFruanAp0OQ1jrPUB1FsPy9kROcksmBt8tmqlORasjaGfrj8RE5S920y5v0dxo8sLoLIAJrpuWnUsMvUlcvKwah%2BBYV5RAI4nBvVW%2F5LsnrGezvRo76nDEK66Sj0R%2FgWz3sveSqH7y9XGl9UCAT4vCSwiYGzzYUVIjovLnlfSfcuxDPECM8T6LXmELGy%2FCRNoCLqoKJFiHNEakTvvc7fuafPZCfU1JVk5oKddRuTCV3Dlq9jlXQC6L3IUXfTN%2BWB%2B0%2B34XP1yB1%2Bet1RIO%2Fnh%2B8gs%2F4InLkTNtGqeNEe5uiK2t9Me%2FUE3ImKZhb7ySwyVWvKN7ypVtbTaGK7YBI7Vho23XUqfo9XpInRCBEjEmmzF61%2F6rZCEqfk0dQrvMAh%2B2%2B%2F2lF3%2FPHvzVJdBgI1omZLgsCxpOai4HgxRj0vPj7Vo4ol7So%2F11t2sSA60zVZ7OafI6EdpIHiEgCDmsRA83kmbiGzI1cKYUg6r1QlmgcrGY086PjJuxDR5ed6%2BHa3UOzujGviHpA0OaluWvTDPvsG9BjqkAT927LHuiGr1jg3diqQ3zDjdXRQEeu1C%2BdYE%2Bco6N7FAe9Diw0WQBF7n89U6w9EHFddkzFEhbRN69poOPq00RXuWfGdc6UwXocNS0%2ByfPKUdvs1iWO9lujNsHOe9%2Fy1ADb5DoO8xHSYiwxiGFZUk%2FGZk7708TNNmMuBOz2X0KKgtof%2BcuFoeENIEOeYIQHsUVp4zV0JlYXKhA9aJLMkI30GsWZDo&X-Amz-Signature=c5128c6376d61c12dcd211649c8e9c3e9a5a2b403cb96107f24f211681e60017&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
