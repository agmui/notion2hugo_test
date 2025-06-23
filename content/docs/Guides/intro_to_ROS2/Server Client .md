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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IRCVPV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIC%2Baa5H6tziByLEUuQdZ%2FI38Y5MZEcen8MYrur%2B7WGP%2FAiEAjdLECJ6ABl2D8HIzws8TfYi1ydKQ68YRkwV9sw8OqEMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIEXjRhvwQxjn95hWCrcAy9mg%2FFAHOmvFq20IAHiEup%2FRoSTXh1ciWU7er2VlXSAqE0AyVVHrVNhv8UC61EFX%2FrJiUKO9grsQ7Jp36wXLPOuzksuqD9ggsObwlgtD%2B%2B1iWSbYc4OWQBtS9Vn8b9fQnD85eiX244oEfGT4o3K272%2FWerz7ShzAePFQxxPJSWjjd4McUAMpQvovVlqBolBgVHv9AJZR1lOyWxaCwkh%2F8hKWMTfJe2MtRjWUrWo1ZDchnWXmA45KQKviId1pGKqRRfAMJ4eYR8TwL335a7yMATfSwIHuxCiVTYzlLIFTQLCOh5saYfuiKIbGIP1E9OrWm18MsKqKOh2LX6IoIzn0H%2B8O15x9RfExuwZWU4OWJNmnwfX7sPjcY1KYuVVqR4Ox0FLr6rLuSez9ME5dn0jkBBBNuITXNoJC6L6b445DzZGJrdYl4VGv5%2FiVXzuKziph1NqZQclv3CMyKIwBmu91AV04KHca1B0z3%2FxvgspccCARgvphYpOExYttvmmoeZNGseig0ykH7KuzGdTVhz%2BBAv3rKwjH2xcq6vA9xurvnIJB4tsfPfIaEMf42XT554BIGERad3g03tHU%2FdMreKlUFGwSfnsCLoI3zJZ8TRSHtsXqdxmUIpQR3PkRY3rMJOI5sIGOqUBgBnNWp6ZdskjqZ9Fv%2Bs1Jcq6PPBMCRMTDZ3FCEcwX%2BSCINldqKKbMeKqNS2cdA7ZuawYTPNehnNMDWwLayR1KREf9vKcHiAexl2olujgN4X8O8ImeRLPudawtTkYIeYzrXN32X5A1fhRrDLc8AsgfSYvzGUMtHqwxa4RysuHsF326UcF62FWaGup4ua7Npgtpu%2BHnm0UcZgwWzmmGYvV3yyXd7gL&X-Amz-Signature=ea1acb881f639bb1b1ad80da2c5e2007b2e118b001cdc4cd79aa2843131cff04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IRCVPV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIC%2Baa5H6tziByLEUuQdZ%2FI38Y5MZEcen8MYrur%2B7WGP%2FAiEAjdLECJ6ABl2D8HIzws8TfYi1ydKQ68YRkwV9sw8OqEMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIEXjRhvwQxjn95hWCrcAy9mg%2FFAHOmvFq20IAHiEup%2FRoSTXh1ciWU7er2VlXSAqE0AyVVHrVNhv8UC61EFX%2FrJiUKO9grsQ7Jp36wXLPOuzksuqD9ggsObwlgtD%2B%2B1iWSbYc4OWQBtS9Vn8b9fQnD85eiX244oEfGT4o3K272%2FWerz7ShzAePFQxxPJSWjjd4McUAMpQvovVlqBolBgVHv9AJZR1lOyWxaCwkh%2F8hKWMTfJe2MtRjWUrWo1ZDchnWXmA45KQKviId1pGKqRRfAMJ4eYR8TwL335a7yMATfSwIHuxCiVTYzlLIFTQLCOh5saYfuiKIbGIP1E9OrWm18MsKqKOh2LX6IoIzn0H%2B8O15x9RfExuwZWU4OWJNmnwfX7sPjcY1KYuVVqR4Ox0FLr6rLuSez9ME5dn0jkBBBNuITXNoJC6L6b445DzZGJrdYl4VGv5%2FiVXzuKziph1NqZQclv3CMyKIwBmu91AV04KHca1B0z3%2FxvgspccCARgvphYpOExYttvmmoeZNGseig0ykH7KuzGdTVhz%2BBAv3rKwjH2xcq6vA9xurvnIJB4tsfPfIaEMf42XT554BIGERad3g03tHU%2FdMreKlUFGwSfnsCLoI3zJZ8TRSHtsXqdxmUIpQR3PkRY3rMJOI5sIGOqUBgBnNWp6ZdskjqZ9Fv%2Bs1Jcq6PPBMCRMTDZ3FCEcwX%2BSCINldqKKbMeKqNS2cdA7ZuawYTPNehnNMDWwLayR1KREf9vKcHiAexl2olujgN4X8O8ImeRLPudawtTkYIeYzrXN32X5A1fhRrDLc8AsgfSYvzGUMtHqwxa4RysuHsF326UcF62FWaGup4ua7Npgtpu%2BHnm0UcZgwWzmmGYvV3yyXd7gL&X-Amz-Signature=134a57a33733b64bcda7704a040b7c998d6ab14da7583eaae344dd84933ab462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IRCVPV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIC%2Baa5H6tziByLEUuQdZ%2FI38Y5MZEcen8MYrur%2B7WGP%2FAiEAjdLECJ6ABl2D8HIzws8TfYi1ydKQ68YRkwV9sw8OqEMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIEXjRhvwQxjn95hWCrcAy9mg%2FFAHOmvFq20IAHiEup%2FRoSTXh1ciWU7er2VlXSAqE0AyVVHrVNhv8UC61EFX%2FrJiUKO9grsQ7Jp36wXLPOuzksuqD9ggsObwlgtD%2B%2B1iWSbYc4OWQBtS9Vn8b9fQnD85eiX244oEfGT4o3K272%2FWerz7ShzAePFQxxPJSWjjd4McUAMpQvovVlqBolBgVHv9AJZR1lOyWxaCwkh%2F8hKWMTfJe2MtRjWUrWo1ZDchnWXmA45KQKviId1pGKqRRfAMJ4eYR8TwL335a7yMATfSwIHuxCiVTYzlLIFTQLCOh5saYfuiKIbGIP1E9OrWm18MsKqKOh2LX6IoIzn0H%2B8O15x9RfExuwZWU4OWJNmnwfX7sPjcY1KYuVVqR4Ox0FLr6rLuSez9ME5dn0jkBBBNuITXNoJC6L6b445DzZGJrdYl4VGv5%2FiVXzuKziph1NqZQclv3CMyKIwBmu91AV04KHca1B0z3%2FxvgspccCARgvphYpOExYttvmmoeZNGseig0ykH7KuzGdTVhz%2BBAv3rKwjH2xcq6vA9xurvnIJB4tsfPfIaEMf42XT554BIGERad3g03tHU%2FdMreKlUFGwSfnsCLoI3zJZ8TRSHtsXqdxmUIpQR3PkRY3rMJOI5sIGOqUBgBnNWp6ZdskjqZ9Fv%2Bs1Jcq6PPBMCRMTDZ3FCEcwX%2BSCINldqKKbMeKqNS2cdA7ZuawYTPNehnNMDWwLayR1KREf9vKcHiAexl2olujgN4X8O8ImeRLPudawtTkYIeYzrXN32X5A1fhRrDLc8AsgfSYvzGUMtHqwxa4RysuHsF326UcF62FWaGup4ua7Npgtpu%2BHnm0UcZgwWzmmGYvV3yyXd7gL&X-Amz-Signature=b487bd5ae30fc06a231570cdac9ce5c422890a0210f1d815701d0a4808c858a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IRCVPV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIC%2Baa5H6tziByLEUuQdZ%2FI38Y5MZEcen8MYrur%2B7WGP%2FAiEAjdLECJ6ABl2D8HIzws8TfYi1ydKQ68YRkwV9sw8OqEMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIEXjRhvwQxjn95hWCrcAy9mg%2FFAHOmvFq20IAHiEup%2FRoSTXh1ciWU7er2VlXSAqE0AyVVHrVNhv8UC61EFX%2FrJiUKO9grsQ7Jp36wXLPOuzksuqD9ggsObwlgtD%2B%2B1iWSbYc4OWQBtS9Vn8b9fQnD85eiX244oEfGT4o3K272%2FWerz7ShzAePFQxxPJSWjjd4McUAMpQvovVlqBolBgVHv9AJZR1lOyWxaCwkh%2F8hKWMTfJe2MtRjWUrWo1ZDchnWXmA45KQKviId1pGKqRRfAMJ4eYR8TwL335a7yMATfSwIHuxCiVTYzlLIFTQLCOh5saYfuiKIbGIP1E9OrWm18MsKqKOh2LX6IoIzn0H%2B8O15x9RfExuwZWU4OWJNmnwfX7sPjcY1KYuVVqR4Ox0FLr6rLuSez9ME5dn0jkBBBNuITXNoJC6L6b445DzZGJrdYl4VGv5%2FiVXzuKziph1NqZQclv3CMyKIwBmu91AV04KHca1B0z3%2FxvgspccCARgvphYpOExYttvmmoeZNGseig0ykH7KuzGdTVhz%2BBAv3rKwjH2xcq6vA9xurvnIJB4tsfPfIaEMf42XT554BIGERad3g03tHU%2FdMreKlUFGwSfnsCLoI3zJZ8TRSHtsXqdxmUIpQR3PkRY3rMJOI5sIGOqUBgBnNWp6ZdskjqZ9Fv%2Bs1Jcq6PPBMCRMTDZ3FCEcwX%2BSCINldqKKbMeKqNS2cdA7ZuawYTPNehnNMDWwLayR1KREf9vKcHiAexl2olujgN4X8O8ImeRLPudawtTkYIeYzrXN32X5A1fhRrDLc8AsgfSYvzGUMtHqwxa4RysuHsF326UcF62FWaGup4ua7Npgtpu%2BHnm0UcZgwWzmmGYvV3yyXd7gL&X-Amz-Signature=ba40525a70974bd17cd29e915c5e772f866e6a5b1e178d7d776ac26ac975d21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IRCVPV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIC%2Baa5H6tziByLEUuQdZ%2FI38Y5MZEcen8MYrur%2B7WGP%2FAiEAjdLECJ6ABl2D8HIzws8TfYi1ydKQ68YRkwV9sw8OqEMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIEXjRhvwQxjn95hWCrcAy9mg%2FFAHOmvFq20IAHiEup%2FRoSTXh1ciWU7er2VlXSAqE0AyVVHrVNhv8UC61EFX%2FrJiUKO9grsQ7Jp36wXLPOuzksuqD9ggsObwlgtD%2B%2B1iWSbYc4OWQBtS9Vn8b9fQnD85eiX244oEfGT4o3K272%2FWerz7ShzAePFQxxPJSWjjd4McUAMpQvovVlqBolBgVHv9AJZR1lOyWxaCwkh%2F8hKWMTfJe2MtRjWUrWo1ZDchnWXmA45KQKviId1pGKqRRfAMJ4eYR8TwL335a7yMATfSwIHuxCiVTYzlLIFTQLCOh5saYfuiKIbGIP1E9OrWm18MsKqKOh2LX6IoIzn0H%2B8O15x9RfExuwZWU4OWJNmnwfX7sPjcY1KYuVVqR4Ox0FLr6rLuSez9ME5dn0jkBBBNuITXNoJC6L6b445DzZGJrdYl4VGv5%2FiVXzuKziph1NqZQclv3CMyKIwBmu91AV04KHca1B0z3%2FxvgspccCARgvphYpOExYttvmmoeZNGseig0ykH7KuzGdTVhz%2BBAv3rKwjH2xcq6vA9xurvnIJB4tsfPfIaEMf42XT554BIGERad3g03tHU%2FdMreKlUFGwSfnsCLoI3zJZ8TRSHtsXqdxmUIpQR3PkRY3rMJOI5sIGOqUBgBnNWp6ZdskjqZ9Fv%2Bs1Jcq6PPBMCRMTDZ3FCEcwX%2BSCINldqKKbMeKqNS2cdA7ZuawYTPNehnNMDWwLayR1KREf9vKcHiAexl2olujgN4X8O8ImeRLPudawtTkYIeYzrXN32X5A1fhRrDLc8AsgfSYvzGUMtHqwxa4RysuHsF326UcF62FWaGup4ua7Npgtpu%2BHnm0UcZgwWzmmGYvV3yyXd7gL&X-Amz-Signature=34ff15f39cce54c3df55114139b6d7b93b799e8c41acf45795e5d30813b69251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
