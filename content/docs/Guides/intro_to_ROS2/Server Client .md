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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2GK4XC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDuk1ubt%2BHTKr4sYMYX8hGP3HCnDy4bKzsywP2%2FhzgVWAIgHBCwLpG%2FIsOiKavBIY%2B08G%2BgKL6V6cC4z%2FbiZnaAog8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFguW2iEsLD%2FpXZCnircA1KJOH%2BCkT9jARFKXFCbXx4VUQ5nWxK5p0RdW9874EhLuJYrUFDh47879vFindFV5TDG3zYB5sT87vKiyiTBSGrwhke8QsxmtQ7rfHInhlzH9lbkEo%2BfgkOymOHtWwU2RALoWyL8praiaGBDRiUTPxXB1e9pjYu9nEoh6KYdCpWH3sd5zloNgY06pIQT1bEjsB77pqxkGV0Sl3%2BR2A7lMqlMzwAQBbv0xOGApjZ71aViK2GhnFZsT1SlnoT5zVYTKaNWeyZlkpXyWYKxkVhJSi3SoLmanGjZXoWnAtTyOYLz2n%2Bt0Jn85wjk6VdZCgGqlP4s%2Fa8%2FemdZuj4hbb%2BQfbMmzqlYzBQ2fk8dHGIWyaB6jaAhiE5fBxg0INE5TUF98qXdDJBj96pzyK6%2BC9DyLG9VFuNoox77kQsC3iehkt%2B0qc6ORdxilYuhNMebeu8j1TG%2BkTNkwkqzPGNRoDp0D7G%2BLYqAOPFmoMPogiZBawuJJtayEni%2B2Aybla5zr3sXZA4JYB0EN%2FfN96nz1OhIMMygNKR2H2d%2FWkEdxPGI%2BKdIfgz1gcdtuP4Ze7Geqnhdrx3DczFK4B6167yFcXD83Q0exySsByZnzCawOkg35k6npWqlptJusyvWTlyIMNvfmMEGOqUBGShuyT36crVfz4kezbbqfZ0AJgNQJ696G6vRV0L1XJC19GKbXEKa1KTm26TmhE7tsw3Heek18X9brQuF5xPisK99fetsRqgDfhsGOrjCS3HUTBvVXYUw%2Fi7C4g%2B0jlLUAWecZWpWRf%2FDxGb7jv3FB4EDt%2FbhUCN%2FkYKQUno3a2hja8Tb9YcTK4DCnoNeoyaWovAv135FJYPoyXlJJnkoA6VZpu28&X-Amz-Signature=7a6b091edbf614e670bc1cab2704f6035eb33506e8ee4d7353abc02b5a1ab854&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2GK4XC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDuk1ubt%2BHTKr4sYMYX8hGP3HCnDy4bKzsywP2%2FhzgVWAIgHBCwLpG%2FIsOiKavBIY%2B08G%2BgKL6V6cC4z%2FbiZnaAog8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFguW2iEsLD%2FpXZCnircA1KJOH%2BCkT9jARFKXFCbXx4VUQ5nWxK5p0RdW9874EhLuJYrUFDh47879vFindFV5TDG3zYB5sT87vKiyiTBSGrwhke8QsxmtQ7rfHInhlzH9lbkEo%2BfgkOymOHtWwU2RALoWyL8praiaGBDRiUTPxXB1e9pjYu9nEoh6KYdCpWH3sd5zloNgY06pIQT1bEjsB77pqxkGV0Sl3%2BR2A7lMqlMzwAQBbv0xOGApjZ71aViK2GhnFZsT1SlnoT5zVYTKaNWeyZlkpXyWYKxkVhJSi3SoLmanGjZXoWnAtTyOYLz2n%2Bt0Jn85wjk6VdZCgGqlP4s%2Fa8%2FemdZuj4hbb%2BQfbMmzqlYzBQ2fk8dHGIWyaB6jaAhiE5fBxg0INE5TUF98qXdDJBj96pzyK6%2BC9DyLG9VFuNoox77kQsC3iehkt%2B0qc6ORdxilYuhNMebeu8j1TG%2BkTNkwkqzPGNRoDp0D7G%2BLYqAOPFmoMPogiZBawuJJtayEni%2B2Aybla5zr3sXZA4JYB0EN%2FfN96nz1OhIMMygNKR2H2d%2FWkEdxPGI%2BKdIfgz1gcdtuP4Ze7Geqnhdrx3DczFK4B6167yFcXD83Q0exySsByZnzCawOkg35k6npWqlptJusyvWTlyIMNvfmMEGOqUBGShuyT36crVfz4kezbbqfZ0AJgNQJ696G6vRV0L1XJC19GKbXEKa1KTm26TmhE7tsw3Heek18X9brQuF5xPisK99fetsRqgDfhsGOrjCS3HUTBvVXYUw%2Fi7C4g%2B0jlLUAWecZWpWRf%2FDxGb7jv3FB4EDt%2FbhUCN%2FkYKQUno3a2hja8Tb9YcTK4DCnoNeoyaWovAv135FJYPoyXlJJnkoA6VZpu28&X-Amz-Signature=2a35756a243017ea5b99bb15254da5eae9956878907541cccd452ee5f603d3dd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2GK4XC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDuk1ubt%2BHTKr4sYMYX8hGP3HCnDy4bKzsywP2%2FhzgVWAIgHBCwLpG%2FIsOiKavBIY%2B08G%2BgKL6V6cC4z%2FbiZnaAog8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFguW2iEsLD%2FpXZCnircA1KJOH%2BCkT9jARFKXFCbXx4VUQ5nWxK5p0RdW9874EhLuJYrUFDh47879vFindFV5TDG3zYB5sT87vKiyiTBSGrwhke8QsxmtQ7rfHInhlzH9lbkEo%2BfgkOymOHtWwU2RALoWyL8praiaGBDRiUTPxXB1e9pjYu9nEoh6KYdCpWH3sd5zloNgY06pIQT1bEjsB77pqxkGV0Sl3%2BR2A7lMqlMzwAQBbv0xOGApjZ71aViK2GhnFZsT1SlnoT5zVYTKaNWeyZlkpXyWYKxkVhJSi3SoLmanGjZXoWnAtTyOYLz2n%2Bt0Jn85wjk6VdZCgGqlP4s%2Fa8%2FemdZuj4hbb%2BQfbMmzqlYzBQ2fk8dHGIWyaB6jaAhiE5fBxg0INE5TUF98qXdDJBj96pzyK6%2BC9DyLG9VFuNoox77kQsC3iehkt%2B0qc6ORdxilYuhNMebeu8j1TG%2BkTNkwkqzPGNRoDp0D7G%2BLYqAOPFmoMPogiZBawuJJtayEni%2B2Aybla5zr3sXZA4JYB0EN%2FfN96nz1OhIMMygNKR2H2d%2FWkEdxPGI%2BKdIfgz1gcdtuP4Ze7Geqnhdrx3DczFK4B6167yFcXD83Q0exySsByZnzCawOkg35k6npWqlptJusyvWTlyIMNvfmMEGOqUBGShuyT36crVfz4kezbbqfZ0AJgNQJ696G6vRV0L1XJC19GKbXEKa1KTm26TmhE7tsw3Heek18X9brQuF5xPisK99fetsRqgDfhsGOrjCS3HUTBvVXYUw%2Fi7C4g%2B0jlLUAWecZWpWRf%2FDxGb7jv3FB4EDt%2FbhUCN%2FkYKQUno3a2hja8Tb9YcTK4DCnoNeoyaWovAv135FJYPoyXlJJnkoA6VZpu28&X-Amz-Signature=b43d2e41774346fea6dc9a671ff119f6b53e3f264e7a01a49803913bdd72a0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2GK4XC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDuk1ubt%2BHTKr4sYMYX8hGP3HCnDy4bKzsywP2%2FhzgVWAIgHBCwLpG%2FIsOiKavBIY%2B08G%2BgKL6V6cC4z%2FbiZnaAog8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFguW2iEsLD%2FpXZCnircA1KJOH%2BCkT9jARFKXFCbXx4VUQ5nWxK5p0RdW9874EhLuJYrUFDh47879vFindFV5TDG3zYB5sT87vKiyiTBSGrwhke8QsxmtQ7rfHInhlzH9lbkEo%2BfgkOymOHtWwU2RALoWyL8praiaGBDRiUTPxXB1e9pjYu9nEoh6KYdCpWH3sd5zloNgY06pIQT1bEjsB77pqxkGV0Sl3%2BR2A7lMqlMzwAQBbv0xOGApjZ71aViK2GhnFZsT1SlnoT5zVYTKaNWeyZlkpXyWYKxkVhJSi3SoLmanGjZXoWnAtTyOYLz2n%2Bt0Jn85wjk6VdZCgGqlP4s%2Fa8%2FemdZuj4hbb%2BQfbMmzqlYzBQ2fk8dHGIWyaB6jaAhiE5fBxg0INE5TUF98qXdDJBj96pzyK6%2BC9DyLG9VFuNoox77kQsC3iehkt%2B0qc6ORdxilYuhNMebeu8j1TG%2BkTNkwkqzPGNRoDp0D7G%2BLYqAOPFmoMPogiZBawuJJtayEni%2B2Aybla5zr3sXZA4JYB0EN%2FfN96nz1OhIMMygNKR2H2d%2FWkEdxPGI%2BKdIfgz1gcdtuP4Ze7Geqnhdrx3DczFK4B6167yFcXD83Q0exySsByZnzCawOkg35k6npWqlptJusyvWTlyIMNvfmMEGOqUBGShuyT36crVfz4kezbbqfZ0AJgNQJ696G6vRV0L1XJC19GKbXEKa1KTm26TmhE7tsw3Heek18X9brQuF5xPisK99fetsRqgDfhsGOrjCS3HUTBvVXYUw%2Fi7C4g%2B0jlLUAWecZWpWRf%2FDxGb7jv3FB4EDt%2FbhUCN%2FkYKQUno3a2hja8Tb9YcTK4DCnoNeoyaWovAv135FJYPoyXlJJnkoA6VZpu28&X-Amz-Signature=ff79623b1635530186e7a6629af74ddb4574930bec4978210dde4c808dd4d7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2GK4XC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDuk1ubt%2BHTKr4sYMYX8hGP3HCnDy4bKzsywP2%2FhzgVWAIgHBCwLpG%2FIsOiKavBIY%2B08G%2BgKL6V6cC4z%2FbiZnaAog8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFguW2iEsLD%2FpXZCnircA1KJOH%2BCkT9jARFKXFCbXx4VUQ5nWxK5p0RdW9874EhLuJYrUFDh47879vFindFV5TDG3zYB5sT87vKiyiTBSGrwhke8QsxmtQ7rfHInhlzH9lbkEo%2BfgkOymOHtWwU2RALoWyL8praiaGBDRiUTPxXB1e9pjYu9nEoh6KYdCpWH3sd5zloNgY06pIQT1bEjsB77pqxkGV0Sl3%2BR2A7lMqlMzwAQBbv0xOGApjZ71aViK2GhnFZsT1SlnoT5zVYTKaNWeyZlkpXyWYKxkVhJSi3SoLmanGjZXoWnAtTyOYLz2n%2Bt0Jn85wjk6VdZCgGqlP4s%2Fa8%2FemdZuj4hbb%2BQfbMmzqlYzBQ2fk8dHGIWyaB6jaAhiE5fBxg0INE5TUF98qXdDJBj96pzyK6%2BC9DyLG9VFuNoox77kQsC3iehkt%2B0qc6ORdxilYuhNMebeu8j1TG%2BkTNkwkqzPGNRoDp0D7G%2BLYqAOPFmoMPogiZBawuJJtayEni%2B2Aybla5zr3sXZA4JYB0EN%2FfN96nz1OhIMMygNKR2H2d%2FWkEdxPGI%2BKdIfgz1gcdtuP4Ze7Geqnhdrx3DczFK4B6167yFcXD83Q0exySsByZnzCawOkg35k6npWqlptJusyvWTlyIMNvfmMEGOqUBGShuyT36crVfz4kezbbqfZ0AJgNQJ696G6vRV0L1XJC19GKbXEKa1KTm26TmhE7tsw3Heek18X9brQuF5xPisK99fetsRqgDfhsGOrjCS3HUTBvVXYUw%2Fi7C4g%2B0jlLUAWecZWpWRf%2FDxGb7jv3FB4EDt%2FbhUCN%2FkYKQUno3a2hja8Tb9YcTK4DCnoNeoyaWovAv135FJYPoyXlJJnkoA6VZpu28&X-Amz-Signature=7ea6d6ecd3acf0146fe0064fe2ef2e7113ee9c75d136991e584794126232a79a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
