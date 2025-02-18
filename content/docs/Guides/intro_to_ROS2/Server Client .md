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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFRDPKG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGrFKDfQZl8Fjh6%2BKIhu9FlTfGMxMC2Xzbm1Q9bZlTyvAiAsNnWFIrE84NuFe5q8nTn1Osk6gkhDsN5pKuz37MZQpCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq68FQ9xCm%2Bh9NOvKtwDja%2B5SWFoCFW5K5xP0QjHzzF8kMygCKm%2BfeS%2Bz71CqhMmTJtgGI2u3R%2Bp3z9Dy8O4nkn3N%2Bi1OKtIPeBSELWuOdBL1zov8EHKiRNbqHOhTZlaOnmKEHWeLRgjoj5qeg8lvdJ0GFfSMf3IoF7eoLMys%2BIHOsTDtgpRZ6T6Pthlp74aOnz8oll1nbFqFowOTg%2FGMXtfe8cbBYhaK%2BjEN8RKNe%2FbXQtE3LiPHygU29pLSBC4H1e2meVEkvRO37EE6kyjGdkR4tnnwTpblhXqIWduxkGDrHg%2F5OjZKtIWpTW8lGIkDsNhoc0WRs%2FzjYFaQq26WNwoV4V2YSoItjWI%2BA8fcGJFl%2BYY7fjD3HAGfteigDAKI0cr71%2BeQ7dVDMTK5wHmvOgI5t9m%2BGE9ZzhzqVG7xw4UCvSe%2FUmpufzNBHH3qUlWww686v%2Fw4I3GZZSuihdvps5w6tamdun4%2FNp6P0IrMyPlLrL7leW%2F%2BvqS%2BN%2FZfDF16OChDzugzMlveJQQS7VXCi1JogAruQiWNytVqN9%2B7gq7mnxC55yzTveG%2Bttt4GSKHF%2Bu9dBcrutRtn8bcZOgZZ8fYsJVDT99XyrnEHOqXzs1vPYlCnPLOND4Z9xjAUF%2FgXHz2neAMX2VBfAw0%2F7QvQY6pgFyDE6oMwBnM2rUaNMB%2BBxTzQMVHYJp2lUyvgXf5DfaiEFhTGBngRzO0fThfvgvEEYemceHkHDXO6aUk%2BNpPRl0sCyXCpyv6Ap3e6k6RUlgKVSFaeBpGdPpdLnRZVDHEqJ%2B7nJ59Vn0A8p9C0uCKG%2BYc1JyeYVtQQNviZ6Q%2F3OCyq%2BplhOR5Am9MZoEAx3a1N%2F%2BNldpfhNm%2FaSSTMjI4M4uJ4cr4y%2Bm&X-Amz-Signature=a276c59f05ea0215fb1ea35bc04d255805043cde40efb06bfab7523199a90bf6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFRDPKG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGrFKDfQZl8Fjh6%2BKIhu9FlTfGMxMC2Xzbm1Q9bZlTyvAiAsNnWFIrE84NuFe5q8nTn1Osk6gkhDsN5pKuz37MZQpCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq68FQ9xCm%2Bh9NOvKtwDja%2B5SWFoCFW5K5xP0QjHzzF8kMygCKm%2BfeS%2Bz71CqhMmTJtgGI2u3R%2Bp3z9Dy8O4nkn3N%2Bi1OKtIPeBSELWuOdBL1zov8EHKiRNbqHOhTZlaOnmKEHWeLRgjoj5qeg8lvdJ0GFfSMf3IoF7eoLMys%2BIHOsTDtgpRZ6T6Pthlp74aOnz8oll1nbFqFowOTg%2FGMXtfe8cbBYhaK%2BjEN8RKNe%2FbXQtE3LiPHygU29pLSBC4H1e2meVEkvRO37EE6kyjGdkR4tnnwTpblhXqIWduxkGDrHg%2F5OjZKtIWpTW8lGIkDsNhoc0WRs%2FzjYFaQq26WNwoV4V2YSoItjWI%2BA8fcGJFl%2BYY7fjD3HAGfteigDAKI0cr71%2BeQ7dVDMTK5wHmvOgI5t9m%2BGE9ZzhzqVG7xw4UCvSe%2FUmpufzNBHH3qUlWww686v%2Fw4I3GZZSuihdvps5w6tamdun4%2FNp6P0IrMyPlLrL7leW%2F%2BvqS%2BN%2FZfDF16OChDzugzMlveJQQS7VXCi1JogAruQiWNytVqN9%2B7gq7mnxC55yzTveG%2Bttt4GSKHF%2Bu9dBcrutRtn8bcZOgZZ8fYsJVDT99XyrnEHOqXzs1vPYlCnPLOND4Z9xjAUF%2FgXHz2neAMX2VBfAw0%2F7QvQY6pgFyDE6oMwBnM2rUaNMB%2BBxTzQMVHYJp2lUyvgXf5DfaiEFhTGBngRzO0fThfvgvEEYemceHkHDXO6aUk%2BNpPRl0sCyXCpyv6Ap3e6k6RUlgKVSFaeBpGdPpdLnRZVDHEqJ%2B7nJ59Vn0A8p9C0uCKG%2BYc1JyeYVtQQNviZ6Q%2F3OCyq%2BplhOR5Am9MZoEAx3a1N%2F%2BNldpfhNm%2FaSSTMjI4M4uJ4cr4y%2Bm&X-Amz-Signature=1e9a08c8504c8ddbf00a2267c7b66b4cf690a22bb5401d885bc21da68f355d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFRDPKG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGrFKDfQZl8Fjh6%2BKIhu9FlTfGMxMC2Xzbm1Q9bZlTyvAiAsNnWFIrE84NuFe5q8nTn1Osk6gkhDsN5pKuz37MZQpCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq68FQ9xCm%2Bh9NOvKtwDja%2B5SWFoCFW5K5xP0QjHzzF8kMygCKm%2BfeS%2Bz71CqhMmTJtgGI2u3R%2Bp3z9Dy8O4nkn3N%2Bi1OKtIPeBSELWuOdBL1zov8EHKiRNbqHOhTZlaOnmKEHWeLRgjoj5qeg8lvdJ0GFfSMf3IoF7eoLMys%2BIHOsTDtgpRZ6T6Pthlp74aOnz8oll1nbFqFowOTg%2FGMXtfe8cbBYhaK%2BjEN8RKNe%2FbXQtE3LiPHygU29pLSBC4H1e2meVEkvRO37EE6kyjGdkR4tnnwTpblhXqIWduxkGDrHg%2F5OjZKtIWpTW8lGIkDsNhoc0WRs%2FzjYFaQq26WNwoV4V2YSoItjWI%2BA8fcGJFl%2BYY7fjD3HAGfteigDAKI0cr71%2BeQ7dVDMTK5wHmvOgI5t9m%2BGE9ZzhzqVG7xw4UCvSe%2FUmpufzNBHH3qUlWww686v%2Fw4I3GZZSuihdvps5w6tamdun4%2FNp6P0IrMyPlLrL7leW%2F%2BvqS%2BN%2FZfDF16OChDzugzMlveJQQS7VXCi1JogAruQiWNytVqN9%2B7gq7mnxC55yzTveG%2Bttt4GSKHF%2Bu9dBcrutRtn8bcZOgZZ8fYsJVDT99XyrnEHOqXzs1vPYlCnPLOND4Z9xjAUF%2FgXHz2neAMX2VBfAw0%2F7QvQY6pgFyDE6oMwBnM2rUaNMB%2BBxTzQMVHYJp2lUyvgXf5DfaiEFhTGBngRzO0fThfvgvEEYemceHkHDXO6aUk%2BNpPRl0sCyXCpyv6Ap3e6k6RUlgKVSFaeBpGdPpdLnRZVDHEqJ%2B7nJ59Vn0A8p9C0uCKG%2BYc1JyeYVtQQNviZ6Q%2F3OCyq%2BplhOR5Am9MZoEAx3a1N%2F%2BNldpfhNm%2FaSSTMjI4M4uJ4cr4y%2Bm&X-Amz-Signature=5bab4c79938307f180e81d52983168e9b59bc4745544c3e642e0b18e7eebdf1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFRDPKG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGrFKDfQZl8Fjh6%2BKIhu9FlTfGMxMC2Xzbm1Q9bZlTyvAiAsNnWFIrE84NuFe5q8nTn1Osk6gkhDsN5pKuz37MZQpCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq68FQ9xCm%2Bh9NOvKtwDja%2B5SWFoCFW5K5xP0QjHzzF8kMygCKm%2BfeS%2Bz71CqhMmTJtgGI2u3R%2Bp3z9Dy8O4nkn3N%2Bi1OKtIPeBSELWuOdBL1zov8EHKiRNbqHOhTZlaOnmKEHWeLRgjoj5qeg8lvdJ0GFfSMf3IoF7eoLMys%2BIHOsTDtgpRZ6T6Pthlp74aOnz8oll1nbFqFowOTg%2FGMXtfe8cbBYhaK%2BjEN8RKNe%2FbXQtE3LiPHygU29pLSBC4H1e2meVEkvRO37EE6kyjGdkR4tnnwTpblhXqIWduxkGDrHg%2F5OjZKtIWpTW8lGIkDsNhoc0WRs%2FzjYFaQq26WNwoV4V2YSoItjWI%2BA8fcGJFl%2BYY7fjD3HAGfteigDAKI0cr71%2BeQ7dVDMTK5wHmvOgI5t9m%2BGE9ZzhzqVG7xw4UCvSe%2FUmpufzNBHH3qUlWww686v%2Fw4I3GZZSuihdvps5w6tamdun4%2FNp6P0IrMyPlLrL7leW%2F%2BvqS%2BN%2FZfDF16OChDzugzMlveJQQS7VXCi1JogAruQiWNytVqN9%2B7gq7mnxC55yzTveG%2Bttt4GSKHF%2Bu9dBcrutRtn8bcZOgZZ8fYsJVDT99XyrnEHOqXzs1vPYlCnPLOND4Z9xjAUF%2FgXHz2neAMX2VBfAw0%2F7QvQY6pgFyDE6oMwBnM2rUaNMB%2BBxTzQMVHYJp2lUyvgXf5DfaiEFhTGBngRzO0fThfvgvEEYemceHkHDXO6aUk%2BNpPRl0sCyXCpyv6Ap3e6k6RUlgKVSFaeBpGdPpdLnRZVDHEqJ%2B7nJ59Vn0A8p9C0uCKG%2BYc1JyeYVtQQNviZ6Q%2F3OCyq%2BplhOR5Am9MZoEAx3a1N%2F%2BNldpfhNm%2FaSSTMjI4M4uJ4cr4y%2Bm&X-Amz-Signature=890871ab8a22c917816f58ca06f6900b70e195ec56c4d28af15b30f6b4b034ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFRDPKG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGrFKDfQZl8Fjh6%2BKIhu9FlTfGMxMC2Xzbm1Q9bZlTyvAiAsNnWFIrE84NuFe5q8nTn1Osk6gkhDsN5pKuz37MZQpCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq68FQ9xCm%2Bh9NOvKtwDja%2B5SWFoCFW5K5xP0QjHzzF8kMygCKm%2BfeS%2Bz71CqhMmTJtgGI2u3R%2Bp3z9Dy8O4nkn3N%2Bi1OKtIPeBSELWuOdBL1zov8EHKiRNbqHOhTZlaOnmKEHWeLRgjoj5qeg8lvdJ0GFfSMf3IoF7eoLMys%2BIHOsTDtgpRZ6T6Pthlp74aOnz8oll1nbFqFowOTg%2FGMXtfe8cbBYhaK%2BjEN8RKNe%2FbXQtE3LiPHygU29pLSBC4H1e2meVEkvRO37EE6kyjGdkR4tnnwTpblhXqIWduxkGDrHg%2F5OjZKtIWpTW8lGIkDsNhoc0WRs%2FzjYFaQq26WNwoV4V2YSoItjWI%2BA8fcGJFl%2BYY7fjD3HAGfteigDAKI0cr71%2BeQ7dVDMTK5wHmvOgI5t9m%2BGE9ZzhzqVG7xw4UCvSe%2FUmpufzNBHH3qUlWww686v%2Fw4I3GZZSuihdvps5w6tamdun4%2FNp6P0IrMyPlLrL7leW%2F%2BvqS%2BN%2FZfDF16OChDzugzMlveJQQS7VXCi1JogAruQiWNytVqN9%2B7gq7mnxC55yzTveG%2Bttt4GSKHF%2Bu9dBcrutRtn8bcZOgZZ8fYsJVDT99XyrnEHOqXzs1vPYlCnPLOND4Z9xjAUF%2FgXHz2neAMX2VBfAw0%2F7QvQY6pgFyDE6oMwBnM2rUaNMB%2BBxTzQMVHYJp2lUyvgXf5DfaiEFhTGBngRzO0fThfvgvEEYemceHkHDXO6aUk%2BNpPRl0sCyXCpyv6Ap3e6k6RUlgKVSFaeBpGdPpdLnRZVDHEqJ%2B7nJ59Vn0A8p9C0uCKG%2BYc1JyeYVtQQNviZ6Q%2F3OCyq%2BplhOR5Am9MZoEAx3a1N%2F%2BNldpfhNm%2FaSSTMjI4M4uJ4cr4y%2Bm&X-Amz-Signature=4ed39192d91258c87b9a67261b54a9aa08856ccfa8ee0bec9bf4457e5e788b56&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
