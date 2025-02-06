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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625AHHLQB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIB01YAFo7zgXji4%2BDpDlqtp4pRbpGwun7otW7cGe2Go%2FAiB99%2BVf0HHcUkZMBRAQlOrGuo6zaP5yUbBbdXOpmwJVQSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3%2FrFozRQLn%2FYqQs9KtwDyQXlXHCDMwa8qwgiOsjVknq5hZPgA7%2Fkpm8b3okwY11VXU0JfQhyrJzvPBbx0Fs5Aop%2FjM3mfpscV2wuL7nmbXtYnSXx0L65OEIacLG7ar604yuvq8oexg8R9lQw9F3pHHRrviP74fNOz3O%2F27c3gb3BK8NIrW%2Fv38tfzQvCxBkvtceqKRkQo1bCssWU78dh261w3pG42jTgJfbuJCZPJHCiNLAuZSkzhsV0CsCklkbdho7HwQZ5EYdh7ooKJMwpjVkfomb%2FUIR0IWwpbLT2dw6XQ6o1ntNU764j2n4pCfMOXl3bXPVU4Qn5UQUA6x7OEe7koTbEt%2BV9JVfku73zd7oZ7NRRGEMN6%2BATMXTigKZJNszdpVTgqIAOfq2%2B%2FSb7Aq4vIxL9UjtutacslVhq%2BC%2BBvjJaqqk3ujwQCCnqdvbWY87cHx1LLPJCg35EIipp7%2BcyyPBjjMm3WUl%2BbAKUeDHZvjdNoyBJ8d7Dd3MrhJ62miAHOTZOBFM3ybWSyhygVGWws7wZREDSEWHZOpEKny5nLNZtib2Qlv3Rrx7JhJda8nw8CjRnKD13NjuC2aM%2FTFKV577n7XL3sarERBEYYHhEsD75FNpRwlGTjJnuELNL0ENUrfx21jdBS94wkp2TvQY6pgE0DjvxOplONpHyLkNj%2FxtaH9yu2WP7detn0sgHX3Rum7tJk%2FuM0lp4fX%2Bn2VbdWoLjyiyKSnkpfQ4pMR1YoqejYwB2nbSQ6h%2BUJQtXFovggLCfrXy6HDFEE87oswVTjsLvUUXRfC40ODl3DfsJwJ%2Fib34syU0OUR0N%2FwyAKK2dXulh1iik8LOsdF4h55%2FoUpcLCQzDbraY1FU6rO7obt2keYtkv%2FKl&X-Amz-Signature=1dda28653fcc8589a2775c395d0ae9cadf408d7929f0686658d9fef1b20bf099&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625AHHLQB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIB01YAFo7zgXji4%2BDpDlqtp4pRbpGwun7otW7cGe2Go%2FAiB99%2BVf0HHcUkZMBRAQlOrGuo6zaP5yUbBbdXOpmwJVQSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3%2FrFozRQLn%2FYqQs9KtwDyQXlXHCDMwa8qwgiOsjVknq5hZPgA7%2Fkpm8b3okwY11VXU0JfQhyrJzvPBbx0Fs5Aop%2FjM3mfpscV2wuL7nmbXtYnSXx0L65OEIacLG7ar604yuvq8oexg8R9lQw9F3pHHRrviP74fNOz3O%2F27c3gb3BK8NIrW%2Fv38tfzQvCxBkvtceqKRkQo1bCssWU78dh261w3pG42jTgJfbuJCZPJHCiNLAuZSkzhsV0CsCklkbdho7HwQZ5EYdh7ooKJMwpjVkfomb%2FUIR0IWwpbLT2dw6XQ6o1ntNU764j2n4pCfMOXl3bXPVU4Qn5UQUA6x7OEe7koTbEt%2BV9JVfku73zd7oZ7NRRGEMN6%2BATMXTigKZJNszdpVTgqIAOfq2%2B%2FSb7Aq4vIxL9UjtutacslVhq%2BC%2BBvjJaqqk3ujwQCCnqdvbWY87cHx1LLPJCg35EIipp7%2BcyyPBjjMm3WUl%2BbAKUeDHZvjdNoyBJ8d7Dd3MrhJ62miAHOTZOBFM3ybWSyhygVGWws7wZREDSEWHZOpEKny5nLNZtib2Qlv3Rrx7JhJda8nw8CjRnKD13NjuC2aM%2FTFKV577n7XL3sarERBEYYHhEsD75FNpRwlGTjJnuELNL0ENUrfx21jdBS94wkp2TvQY6pgE0DjvxOplONpHyLkNj%2FxtaH9yu2WP7detn0sgHX3Rum7tJk%2FuM0lp4fX%2Bn2VbdWoLjyiyKSnkpfQ4pMR1YoqejYwB2nbSQ6h%2BUJQtXFovggLCfrXy6HDFEE87oswVTjsLvUUXRfC40ODl3DfsJwJ%2Fib34syU0OUR0N%2FwyAKK2dXulh1iik8LOsdF4h55%2FoUpcLCQzDbraY1FU6rO7obt2keYtkv%2FKl&X-Amz-Signature=560bdb5edb78c4f6b973f5767ebf5ef3c8f96860eb063b441de66744630fa3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625AHHLQB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIB01YAFo7zgXji4%2BDpDlqtp4pRbpGwun7otW7cGe2Go%2FAiB99%2BVf0HHcUkZMBRAQlOrGuo6zaP5yUbBbdXOpmwJVQSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3%2FrFozRQLn%2FYqQs9KtwDyQXlXHCDMwa8qwgiOsjVknq5hZPgA7%2Fkpm8b3okwY11VXU0JfQhyrJzvPBbx0Fs5Aop%2FjM3mfpscV2wuL7nmbXtYnSXx0L65OEIacLG7ar604yuvq8oexg8R9lQw9F3pHHRrviP74fNOz3O%2F27c3gb3BK8NIrW%2Fv38tfzQvCxBkvtceqKRkQo1bCssWU78dh261w3pG42jTgJfbuJCZPJHCiNLAuZSkzhsV0CsCklkbdho7HwQZ5EYdh7ooKJMwpjVkfomb%2FUIR0IWwpbLT2dw6XQ6o1ntNU764j2n4pCfMOXl3bXPVU4Qn5UQUA6x7OEe7koTbEt%2BV9JVfku73zd7oZ7NRRGEMN6%2BATMXTigKZJNszdpVTgqIAOfq2%2B%2FSb7Aq4vIxL9UjtutacslVhq%2BC%2BBvjJaqqk3ujwQCCnqdvbWY87cHx1LLPJCg35EIipp7%2BcyyPBjjMm3WUl%2BbAKUeDHZvjdNoyBJ8d7Dd3MrhJ62miAHOTZOBFM3ybWSyhygVGWws7wZREDSEWHZOpEKny5nLNZtib2Qlv3Rrx7JhJda8nw8CjRnKD13NjuC2aM%2FTFKV577n7XL3sarERBEYYHhEsD75FNpRwlGTjJnuELNL0ENUrfx21jdBS94wkp2TvQY6pgE0DjvxOplONpHyLkNj%2FxtaH9yu2WP7detn0sgHX3Rum7tJk%2FuM0lp4fX%2Bn2VbdWoLjyiyKSnkpfQ4pMR1YoqejYwB2nbSQ6h%2BUJQtXFovggLCfrXy6HDFEE87oswVTjsLvUUXRfC40ODl3DfsJwJ%2Fib34syU0OUR0N%2FwyAKK2dXulh1iik8LOsdF4h55%2FoUpcLCQzDbraY1FU6rO7obt2keYtkv%2FKl&X-Amz-Signature=87c2dcfbed56bb635d31871925a5b3ca5369ec17f0d0414d152edaa1442f8420&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625AHHLQB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIB01YAFo7zgXji4%2BDpDlqtp4pRbpGwun7otW7cGe2Go%2FAiB99%2BVf0HHcUkZMBRAQlOrGuo6zaP5yUbBbdXOpmwJVQSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3%2FrFozRQLn%2FYqQs9KtwDyQXlXHCDMwa8qwgiOsjVknq5hZPgA7%2Fkpm8b3okwY11VXU0JfQhyrJzvPBbx0Fs5Aop%2FjM3mfpscV2wuL7nmbXtYnSXx0L65OEIacLG7ar604yuvq8oexg8R9lQw9F3pHHRrviP74fNOz3O%2F27c3gb3BK8NIrW%2Fv38tfzQvCxBkvtceqKRkQo1bCssWU78dh261w3pG42jTgJfbuJCZPJHCiNLAuZSkzhsV0CsCklkbdho7HwQZ5EYdh7ooKJMwpjVkfomb%2FUIR0IWwpbLT2dw6XQ6o1ntNU764j2n4pCfMOXl3bXPVU4Qn5UQUA6x7OEe7koTbEt%2BV9JVfku73zd7oZ7NRRGEMN6%2BATMXTigKZJNszdpVTgqIAOfq2%2B%2FSb7Aq4vIxL9UjtutacslVhq%2BC%2BBvjJaqqk3ujwQCCnqdvbWY87cHx1LLPJCg35EIipp7%2BcyyPBjjMm3WUl%2BbAKUeDHZvjdNoyBJ8d7Dd3MrhJ62miAHOTZOBFM3ybWSyhygVGWws7wZREDSEWHZOpEKny5nLNZtib2Qlv3Rrx7JhJda8nw8CjRnKD13NjuC2aM%2FTFKV577n7XL3sarERBEYYHhEsD75FNpRwlGTjJnuELNL0ENUrfx21jdBS94wkp2TvQY6pgE0DjvxOplONpHyLkNj%2FxtaH9yu2WP7detn0sgHX3Rum7tJk%2FuM0lp4fX%2Bn2VbdWoLjyiyKSnkpfQ4pMR1YoqejYwB2nbSQ6h%2BUJQtXFovggLCfrXy6HDFEE87oswVTjsLvUUXRfC40ODl3DfsJwJ%2Fib34syU0OUR0N%2FwyAKK2dXulh1iik8LOsdF4h55%2FoUpcLCQzDbraY1FU6rO7obt2keYtkv%2FKl&X-Amz-Signature=9ed7cc842eae12ec0764b7645dbccf1f812a0d82b9dfd4bd042cdfbb5e9667f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625AHHLQB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIB01YAFo7zgXji4%2BDpDlqtp4pRbpGwun7otW7cGe2Go%2FAiB99%2BVf0HHcUkZMBRAQlOrGuo6zaP5yUbBbdXOpmwJVQSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3%2FrFozRQLn%2FYqQs9KtwDyQXlXHCDMwa8qwgiOsjVknq5hZPgA7%2Fkpm8b3okwY11VXU0JfQhyrJzvPBbx0Fs5Aop%2FjM3mfpscV2wuL7nmbXtYnSXx0L65OEIacLG7ar604yuvq8oexg8R9lQw9F3pHHRrviP74fNOz3O%2F27c3gb3BK8NIrW%2Fv38tfzQvCxBkvtceqKRkQo1bCssWU78dh261w3pG42jTgJfbuJCZPJHCiNLAuZSkzhsV0CsCklkbdho7HwQZ5EYdh7ooKJMwpjVkfomb%2FUIR0IWwpbLT2dw6XQ6o1ntNU764j2n4pCfMOXl3bXPVU4Qn5UQUA6x7OEe7koTbEt%2BV9JVfku73zd7oZ7NRRGEMN6%2BATMXTigKZJNszdpVTgqIAOfq2%2B%2FSb7Aq4vIxL9UjtutacslVhq%2BC%2BBvjJaqqk3ujwQCCnqdvbWY87cHx1LLPJCg35EIipp7%2BcyyPBjjMm3WUl%2BbAKUeDHZvjdNoyBJ8d7Dd3MrhJ62miAHOTZOBFM3ybWSyhygVGWws7wZREDSEWHZOpEKny5nLNZtib2Qlv3Rrx7JhJda8nw8CjRnKD13NjuC2aM%2FTFKV577n7XL3sarERBEYYHhEsD75FNpRwlGTjJnuELNL0ENUrfx21jdBS94wkp2TvQY6pgE0DjvxOplONpHyLkNj%2FxtaH9yu2WP7detn0sgHX3Rum7tJk%2FuM0lp4fX%2Bn2VbdWoLjyiyKSnkpfQ4pMR1YoqejYwB2nbSQ6h%2BUJQtXFovggLCfrXy6HDFEE87oswVTjsLvUUXRfC40ODl3DfsJwJ%2Fib34syU0OUR0N%2FwyAKK2dXulh1iik8LOsdF4h55%2FoUpcLCQzDbraY1FU6rO7obt2keYtkv%2FKl&X-Amz-Signature=70edfed47cd2afd8d5fddc651074bf8db4760e19458da1b26975c8c0d524cfd4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
