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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O3AVLO5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDHXCM3jlZerCC9m2zjv2m8FM000sMLQCw63k0TEJR8hwIhAI3Vl0M9LkHgoqFvbVjVgwWB5jDwYvO85RQ%2BRhSZ03%2FlKv8DCCcQABoMNjM3NDIzMTgzODA1IgzW7BiPLENdZzxKezUq3AN2C67wcrJt%2FeaHiYvy7yjqq3oz%2BhR6ruTqqL5mvYc8trRDPp3s3fHRfmPBgQHG0JvzBT2ktDcDOr1W2KqibzSSl4lb%2BPVDXrZrnVpJYkjxOp3eL5P3sUpZ7kxB%2B%2FEsOruYlXYgTGwz%2Bq%2BnbG2tjlw0dh3bRf1GgP7UiubL9Vjlo%2BfSt%2Bcdh98BJYETqJw3EUjyIy%2BvuqVjB3VMmWatrbNee%2BJ6PmjauOlUtcNwdSs8thuN%2BKE63ENe00xbyj128qnJJTGvnMGI42Oq9YHp0W6T1kC5YJFulnQS3%2BFGLlofJAjjate97RG0%2B%2BaCA85R51FsBP%2FUokdQDA%2FbKCrmzblxFkqb43IAXOHikQ%2B7kZZSixWCX7mOJqfl7NyRyqMvsMzEci1dsrg1rhJaMtHq50sp6YoT4P70E%2ByBCH0RE%2FgAvBMOWl9bQ0kuiUJ74LXRaGsN5SkTyEfP4Zg9g3apRb3mnkvC35ZeYKvBmsPtJCgZ3nU0p0lGqCSpAkQmG47JSm2ziCmlOUkl46JZOeQHkKL5DFwK%2FgfUkUrm9WUUwcbj1nmIeDUwXUt8NOqYzqVA34gfHxe5R2EHeD6WQgRdwIF%2Fbze83BrzjIYDHxeicb9mtE8gdNE1f9bmLGfHtDDL1MrBBjqkATYJKFpR%2Br0Ysa%2FczQbcx%2F6Dd86HMXNvQonnL5IX7R%2FSC5yxKFuQOBCGY%2Biln9CYB%2BH28JyGlK8lYSv%2FuSqwoRiOuZdw2Ut%2FikoKFaM%2BPzE9qkPG8DuMQ8lV%2FtLI0AJ3u9HiJd%2BW8aR8WdsEYRvoiFLluTk6Ne8ZtEQP7nWSZWRYbC8AsbQuVvGrGjgETiIgNodzMOqSeFB0iEsvEWhANABLwApR&X-Amz-Signature=5fd8390e1bfc329beca945b8d12988fda9e3e34632dad2490d875e4eb2bed027&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O3AVLO5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDHXCM3jlZerCC9m2zjv2m8FM000sMLQCw63k0TEJR8hwIhAI3Vl0M9LkHgoqFvbVjVgwWB5jDwYvO85RQ%2BRhSZ03%2FlKv8DCCcQABoMNjM3NDIzMTgzODA1IgzW7BiPLENdZzxKezUq3AN2C67wcrJt%2FeaHiYvy7yjqq3oz%2BhR6ruTqqL5mvYc8trRDPp3s3fHRfmPBgQHG0JvzBT2ktDcDOr1W2KqibzSSl4lb%2BPVDXrZrnVpJYkjxOp3eL5P3sUpZ7kxB%2B%2FEsOruYlXYgTGwz%2Bq%2BnbG2tjlw0dh3bRf1GgP7UiubL9Vjlo%2BfSt%2Bcdh98BJYETqJw3EUjyIy%2BvuqVjB3VMmWatrbNee%2BJ6PmjauOlUtcNwdSs8thuN%2BKE63ENe00xbyj128qnJJTGvnMGI42Oq9YHp0W6T1kC5YJFulnQS3%2BFGLlofJAjjate97RG0%2B%2BaCA85R51FsBP%2FUokdQDA%2FbKCrmzblxFkqb43IAXOHikQ%2B7kZZSixWCX7mOJqfl7NyRyqMvsMzEci1dsrg1rhJaMtHq50sp6YoT4P70E%2ByBCH0RE%2FgAvBMOWl9bQ0kuiUJ74LXRaGsN5SkTyEfP4Zg9g3apRb3mnkvC35ZeYKvBmsPtJCgZ3nU0p0lGqCSpAkQmG47JSm2ziCmlOUkl46JZOeQHkKL5DFwK%2FgfUkUrm9WUUwcbj1nmIeDUwXUt8NOqYzqVA34gfHxe5R2EHeD6WQgRdwIF%2Fbze83BrzjIYDHxeicb9mtE8gdNE1f9bmLGfHtDDL1MrBBjqkATYJKFpR%2Br0Ysa%2FczQbcx%2F6Dd86HMXNvQonnL5IX7R%2FSC5yxKFuQOBCGY%2Biln9CYB%2BH28JyGlK8lYSv%2FuSqwoRiOuZdw2Ut%2FikoKFaM%2BPzE9qkPG8DuMQ8lV%2FtLI0AJ3u9HiJd%2BW8aR8WdsEYRvoiFLluTk6Ne8ZtEQP7nWSZWRYbC8AsbQuVvGrGjgETiIgNodzMOqSeFB0iEsvEWhANABLwApR&X-Amz-Signature=d2af06069a33e7a0235be8b7b2bb9dac565d8d2e9f231831b0669d529c5c783c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O3AVLO5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDHXCM3jlZerCC9m2zjv2m8FM000sMLQCw63k0TEJR8hwIhAI3Vl0M9LkHgoqFvbVjVgwWB5jDwYvO85RQ%2BRhSZ03%2FlKv8DCCcQABoMNjM3NDIzMTgzODA1IgzW7BiPLENdZzxKezUq3AN2C67wcrJt%2FeaHiYvy7yjqq3oz%2BhR6ruTqqL5mvYc8trRDPp3s3fHRfmPBgQHG0JvzBT2ktDcDOr1W2KqibzSSl4lb%2BPVDXrZrnVpJYkjxOp3eL5P3sUpZ7kxB%2B%2FEsOruYlXYgTGwz%2Bq%2BnbG2tjlw0dh3bRf1GgP7UiubL9Vjlo%2BfSt%2Bcdh98BJYETqJw3EUjyIy%2BvuqVjB3VMmWatrbNee%2BJ6PmjauOlUtcNwdSs8thuN%2BKE63ENe00xbyj128qnJJTGvnMGI42Oq9YHp0W6T1kC5YJFulnQS3%2BFGLlofJAjjate97RG0%2B%2BaCA85R51FsBP%2FUokdQDA%2FbKCrmzblxFkqb43IAXOHikQ%2B7kZZSixWCX7mOJqfl7NyRyqMvsMzEci1dsrg1rhJaMtHq50sp6YoT4P70E%2ByBCH0RE%2FgAvBMOWl9bQ0kuiUJ74LXRaGsN5SkTyEfP4Zg9g3apRb3mnkvC35ZeYKvBmsPtJCgZ3nU0p0lGqCSpAkQmG47JSm2ziCmlOUkl46JZOeQHkKL5DFwK%2FgfUkUrm9WUUwcbj1nmIeDUwXUt8NOqYzqVA34gfHxe5R2EHeD6WQgRdwIF%2Fbze83BrzjIYDHxeicb9mtE8gdNE1f9bmLGfHtDDL1MrBBjqkATYJKFpR%2Br0Ysa%2FczQbcx%2F6Dd86HMXNvQonnL5IX7R%2FSC5yxKFuQOBCGY%2Biln9CYB%2BH28JyGlK8lYSv%2FuSqwoRiOuZdw2Ut%2FikoKFaM%2BPzE9qkPG8DuMQ8lV%2FtLI0AJ3u9HiJd%2BW8aR8WdsEYRvoiFLluTk6Ne8ZtEQP7nWSZWRYbC8AsbQuVvGrGjgETiIgNodzMOqSeFB0iEsvEWhANABLwApR&X-Amz-Signature=2b9dcff6c4861c396c3026ab398ea016ec8d29da7bfe210c979b62cda14683df&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O3AVLO5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDHXCM3jlZerCC9m2zjv2m8FM000sMLQCw63k0TEJR8hwIhAI3Vl0M9LkHgoqFvbVjVgwWB5jDwYvO85RQ%2BRhSZ03%2FlKv8DCCcQABoMNjM3NDIzMTgzODA1IgzW7BiPLENdZzxKezUq3AN2C67wcrJt%2FeaHiYvy7yjqq3oz%2BhR6ruTqqL5mvYc8trRDPp3s3fHRfmPBgQHG0JvzBT2ktDcDOr1W2KqibzSSl4lb%2BPVDXrZrnVpJYkjxOp3eL5P3sUpZ7kxB%2B%2FEsOruYlXYgTGwz%2Bq%2BnbG2tjlw0dh3bRf1GgP7UiubL9Vjlo%2BfSt%2Bcdh98BJYETqJw3EUjyIy%2BvuqVjB3VMmWatrbNee%2BJ6PmjauOlUtcNwdSs8thuN%2BKE63ENe00xbyj128qnJJTGvnMGI42Oq9YHp0W6T1kC5YJFulnQS3%2BFGLlofJAjjate97RG0%2B%2BaCA85R51FsBP%2FUokdQDA%2FbKCrmzblxFkqb43IAXOHikQ%2B7kZZSixWCX7mOJqfl7NyRyqMvsMzEci1dsrg1rhJaMtHq50sp6YoT4P70E%2ByBCH0RE%2FgAvBMOWl9bQ0kuiUJ74LXRaGsN5SkTyEfP4Zg9g3apRb3mnkvC35ZeYKvBmsPtJCgZ3nU0p0lGqCSpAkQmG47JSm2ziCmlOUkl46JZOeQHkKL5DFwK%2FgfUkUrm9WUUwcbj1nmIeDUwXUt8NOqYzqVA34gfHxe5R2EHeD6WQgRdwIF%2Fbze83BrzjIYDHxeicb9mtE8gdNE1f9bmLGfHtDDL1MrBBjqkATYJKFpR%2Br0Ysa%2FczQbcx%2F6Dd86HMXNvQonnL5IX7R%2FSC5yxKFuQOBCGY%2Biln9CYB%2BH28JyGlK8lYSv%2FuSqwoRiOuZdw2Ut%2FikoKFaM%2BPzE9qkPG8DuMQ8lV%2FtLI0AJ3u9HiJd%2BW8aR8WdsEYRvoiFLluTk6Ne8ZtEQP7nWSZWRYbC8AsbQuVvGrGjgETiIgNodzMOqSeFB0iEsvEWhANABLwApR&X-Amz-Signature=4227b30fe484166d3d3d3674772b9daef0b9e3b582d972f6b94d9518227c6e29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O3AVLO5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDHXCM3jlZerCC9m2zjv2m8FM000sMLQCw63k0TEJR8hwIhAI3Vl0M9LkHgoqFvbVjVgwWB5jDwYvO85RQ%2BRhSZ03%2FlKv8DCCcQABoMNjM3NDIzMTgzODA1IgzW7BiPLENdZzxKezUq3AN2C67wcrJt%2FeaHiYvy7yjqq3oz%2BhR6ruTqqL5mvYc8trRDPp3s3fHRfmPBgQHG0JvzBT2ktDcDOr1W2KqibzSSl4lb%2BPVDXrZrnVpJYkjxOp3eL5P3sUpZ7kxB%2B%2FEsOruYlXYgTGwz%2Bq%2BnbG2tjlw0dh3bRf1GgP7UiubL9Vjlo%2BfSt%2Bcdh98BJYETqJw3EUjyIy%2BvuqVjB3VMmWatrbNee%2BJ6PmjauOlUtcNwdSs8thuN%2BKE63ENe00xbyj128qnJJTGvnMGI42Oq9YHp0W6T1kC5YJFulnQS3%2BFGLlofJAjjate97RG0%2B%2BaCA85R51FsBP%2FUokdQDA%2FbKCrmzblxFkqb43IAXOHikQ%2B7kZZSixWCX7mOJqfl7NyRyqMvsMzEci1dsrg1rhJaMtHq50sp6YoT4P70E%2ByBCH0RE%2FgAvBMOWl9bQ0kuiUJ74LXRaGsN5SkTyEfP4Zg9g3apRb3mnkvC35ZeYKvBmsPtJCgZ3nU0p0lGqCSpAkQmG47JSm2ziCmlOUkl46JZOeQHkKL5DFwK%2FgfUkUrm9WUUwcbj1nmIeDUwXUt8NOqYzqVA34gfHxe5R2EHeD6WQgRdwIF%2Fbze83BrzjIYDHxeicb9mtE8gdNE1f9bmLGfHtDDL1MrBBjqkATYJKFpR%2Br0Ysa%2FczQbcx%2F6Dd86HMXNvQonnL5IX7R%2FSC5yxKFuQOBCGY%2Biln9CYB%2BH28JyGlK8lYSv%2FuSqwoRiOuZdw2Ut%2FikoKFaM%2BPzE9qkPG8DuMQ8lV%2FtLI0AJ3u9HiJd%2BW8aR8WdsEYRvoiFLluTk6Ne8ZtEQP7nWSZWRYbC8AsbQuVvGrGjgETiIgNodzMOqSeFB0iEsvEWhANABLwApR&X-Amz-Signature=92eac6c386a138ab399c738e761dc29e36547b35ba14f46b29185b4c5439d366&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
