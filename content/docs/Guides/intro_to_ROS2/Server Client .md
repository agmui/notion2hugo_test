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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A2PCQ73%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClgiTkayRrUXzbi4sfm6BeFEOPdHTI6XP3luSrSFHm%2BgIgfTkfzyU%2BD1Ksbn9jV%2BiiplSCS0m6K6TTdNMwT1Dzr3UqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFyZTBtLK7AZ14FOyrcA%2BfLvs4GdtmOkQDEk8eaPYkrCEOt%2BwDYYqNQMAwTT7QMAH%2BK6UDZr4zI9CtbCb%2FFzEFlCwDVZXgyC64w%2BZxB9Ie226eD6Z%2FFgxVlWmbeZKhTUf8LgVRsiQ%2FPQfVE5LAMt4xy04fI6SjlBADS9lBZLG8SWTP9Yy3AxCEV%2BJix497ZRmvN1AuxHjLqV51GA71gIEo4fvFT3m9XM5natqIGrPKs2pbJVuFHiI%2BhWhzVo2YVv%2FAjdMYdkNjqr8okASTvnp2dSivqDsj0YuG4X3kHkqwHA2dl88pUB0%2FKNqMTFZNCHT%2FeTFYvZRZsueF7V1JkDYU4WsnFIc8kuawznh6wGu15XoqA%2B7FbWw9W3MDr7z3TbCsk3UVRgr1ydqoBaMLldQ3bBV2gAaPiNwNG5CqcbwFrnEnKPnno98TzLmXAFos2Md3Qb15h%2F3eQfcfqjzn0V0FhXqmEHVxRYymb3NRw7spbY7Vw8%2FANeeS2Ivcx%2B0UfVCyE3jye6jsIpmQj%2B%2BK515I8fevALtnln0ucXX%2FRaBVawBv89BPnbcet9hKKUuWyyl9%2BL8d7%2B0aA8LUzqXjhdw%2B2OTW%2FOlHS6RF3TO7iOkjLUSZC8C%2B3rPk0azu55uUP3%2BkJ0hPFA%2F8B8alsMO3zs70GOqUBH17vzkyldIZy4rJZK0BcHKEygBKeUp9lIKS3BYTU83Rqsd5tqMZHMhvWlfPOxABEQbpZa9wr9jLz3SAwq9dascKigfySENAZJ%2FPKuTc7QAmCI2xpvSTi3ByAjXnSlTzpXuoSUk9mCL7T%2BUjRhT%2Fcypa84P9zpnA%2F1poswhjC0Pk2KIgF7A63WWQCQVn18BG9nsEqdpQPX6XVvjgSovLC8NXUVJmv&X-Amz-Signature=deb5a05c31c6a9d650178d3957f4f33bbdbea69c7d60935737df6d26367d90d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A2PCQ73%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClgiTkayRrUXzbi4sfm6BeFEOPdHTI6XP3luSrSFHm%2BgIgfTkfzyU%2BD1Ksbn9jV%2BiiplSCS0m6K6TTdNMwT1Dzr3UqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFyZTBtLK7AZ14FOyrcA%2BfLvs4GdtmOkQDEk8eaPYkrCEOt%2BwDYYqNQMAwTT7QMAH%2BK6UDZr4zI9CtbCb%2FFzEFlCwDVZXgyC64w%2BZxB9Ie226eD6Z%2FFgxVlWmbeZKhTUf8LgVRsiQ%2FPQfVE5LAMt4xy04fI6SjlBADS9lBZLG8SWTP9Yy3AxCEV%2BJix497ZRmvN1AuxHjLqV51GA71gIEo4fvFT3m9XM5natqIGrPKs2pbJVuFHiI%2BhWhzVo2YVv%2FAjdMYdkNjqr8okASTvnp2dSivqDsj0YuG4X3kHkqwHA2dl88pUB0%2FKNqMTFZNCHT%2FeTFYvZRZsueF7V1JkDYU4WsnFIc8kuawznh6wGu15XoqA%2B7FbWw9W3MDr7z3TbCsk3UVRgr1ydqoBaMLldQ3bBV2gAaPiNwNG5CqcbwFrnEnKPnno98TzLmXAFos2Md3Qb15h%2F3eQfcfqjzn0V0FhXqmEHVxRYymb3NRw7spbY7Vw8%2FANeeS2Ivcx%2B0UfVCyE3jye6jsIpmQj%2B%2BK515I8fevALtnln0ucXX%2FRaBVawBv89BPnbcet9hKKUuWyyl9%2BL8d7%2B0aA8LUzqXjhdw%2B2OTW%2FOlHS6RF3TO7iOkjLUSZC8C%2B3rPk0azu55uUP3%2BkJ0hPFA%2F8B8alsMO3zs70GOqUBH17vzkyldIZy4rJZK0BcHKEygBKeUp9lIKS3BYTU83Rqsd5tqMZHMhvWlfPOxABEQbpZa9wr9jLz3SAwq9dascKigfySENAZJ%2FPKuTc7QAmCI2xpvSTi3ByAjXnSlTzpXuoSUk9mCL7T%2BUjRhT%2Fcypa84P9zpnA%2F1poswhjC0Pk2KIgF7A63WWQCQVn18BG9nsEqdpQPX6XVvjgSovLC8NXUVJmv&X-Amz-Signature=d005762cd2345e8d4971d5d90b2bd4c3b941f0ea6c5722b5329a5317b8ab760e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A2PCQ73%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClgiTkayRrUXzbi4sfm6BeFEOPdHTI6XP3luSrSFHm%2BgIgfTkfzyU%2BD1Ksbn9jV%2BiiplSCS0m6K6TTdNMwT1Dzr3UqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFyZTBtLK7AZ14FOyrcA%2BfLvs4GdtmOkQDEk8eaPYkrCEOt%2BwDYYqNQMAwTT7QMAH%2BK6UDZr4zI9CtbCb%2FFzEFlCwDVZXgyC64w%2BZxB9Ie226eD6Z%2FFgxVlWmbeZKhTUf8LgVRsiQ%2FPQfVE5LAMt4xy04fI6SjlBADS9lBZLG8SWTP9Yy3AxCEV%2BJix497ZRmvN1AuxHjLqV51GA71gIEo4fvFT3m9XM5natqIGrPKs2pbJVuFHiI%2BhWhzVo2YVv%2FAjdMYdkNjqr8okASTvnp2dSivqDsj0YuG4X3kHkqwHA2dl88pUB0%2FKNqMTFZNCHT%2FeTFYvZRZsueF7V1JkDYU4WsnFIc8kuawznh6wGu15XoqA%2B7FbWw9W3MDr7z3TbCsk3UVRgr1ydqoBaMLldQ3bBV2gAaPiNwNG5CqcbwFrnEnKPnno98TzLmXAFos2Md3Qb15h%2F3eQfcfqjzn0V0FhXqmEHVxRYymb3NRw7spbY7Vw8%2FANeeS2Ivcx%2B0UfVCyE3jye6jsIpmQj%2B%2BK515I8fevALtnln0ucXX%2FRaBVawBv89BPnbcet9hKKUuWyyl9%2BL8d7%2B0aA8LUzqXjhdw%2B2OTW%2FOlHS6RF3TO7iOkjLUSZC8C%2B3rPk0azu55uUP3%2BkJ0hPFA%2F8B8alsMO3zs70GOqUBH17vzkyldIZy4rJZK0BcHKEygBKeUp9lIKS3BYTU83Rqsd5tqMZHMhvWlfPOxABEQbpZa9wr9jLz3SAwq9dascKigfySENAZJ%2FPKuTc7QAmCI2xpvSTi3ByAjXnSlTzpXuoSUk9mCL7T%2BUjRhT%2Fcypa84P9zpnA%2F1poswhjC0Pk2KIgF7A63WWQCQVn18BG9nsEqdpQPX6XVvjgSovLC8NXUVJmv&X-Amz-Signature=ee7e90121f280f0c2d68e483fbbec237350dab80251e0ca15d99896f8adbe8cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A2PCQ73%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClgiTkayRrUXzbi4sfm6BeFEOPdHTI6XP3luSrSFHm%2BgIgfTkfzyU%2BD1Ksbn9jV%2BiiplSCS0m6K6TTdNMwT1Dzr3UqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFyZTBtLK7AZ14FOyrcA%2BfLvs4GdtmOkQDEk8eaPYkrCEOt%2BwDYYqNQMAwTT7QMAH%2BK6UDZr4zI9CtbCb%2FFzEFlCwDVZXgyC64w%2BZxB9Ie226eD6Z%2FFgxVlWmbeZKhTUf8LgVRsiQ%2FPQfVE5LAMt4xy04fI6SjlBADS9lBZLG8SWTP9Yy3AxCEV%2BJix497ZRmvN1AuxHjLqV51GA71gIEo4fvFT3m9XM5natqIGrPKs2pbJVuFHiI%2BhWhzVo2YVv%2FAjdMYdkNjqr8okASTvnp2dSivqDsj0YuG4X3kHkqwHA2dl88pUB0%2FKNqMTFZNCHT%2FeTFYvZRZsueF7V1JkDYU4WsnFIc8kuawznh6wGu15XoqA%2B7FbWw9W3MDr7z3TbCsk3UVRgr1ydqoBaMLldQ3bBV2gAaPiNwNG5CqcbwFrnEnKPnno98TzLmXAFos2Md3Qb15h%2F3eQfcfqjzn0V0FhXqmEHVxRYymb3NRw7spbY7Vw8%2FANeeS2Ivcx%2B0UfVCyE3jye6jsIpmQj%2B%2BK515I8fevALtnln0ucXX%2FRaBVawBv89BPnbcet9hKKUuWyyl9%2BL8d7%2B0aA8LUzqXjhdw%2B2OTW%2FOlHS6RF3TO7iOkjLUSZC8C%2B3rPk0azu55uUP3%2BkJ0hPFA%2F8B8alsMO3zs70GOqUBH17vzkyldIZy4rJZK0BcHKEygBKeUp9lIKS3BYTU83Rqsd5tqMZHMhvWlfPOxABEQbpZa9wr9jLz3SAwq9dascKigfySENAZJ%2FPKuTc7QAmCI2xpvSTi3ByAjXnSlTzpXuoSUk9mCL7T%2BUjRhT%2Fcypa84P9zpnA%2F1poswhjC0Pk2KIgF7A63WWQCQVn18BG9nsEqdpQPX6XVvjgSovLC8NXUVJmv&X-Amz-Signature=716410b2fd2922a48fa199ab6fdfdb3c9fbae7b2ad7cde38386d774067b4638c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A2PCQ73%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClgiTkayRrUXzbi4sfm6BeFEOPdHTI6XP3luSrSFHm%2BgIgfTkfzyU%2BD1Ksbn9jV%2BiiplSCS0m6K6TTdNMwT1Dzr3UqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFyZTBtLK7AZ14FOyrcA%2BfLvs4GdtmOkQDEk8eaPYkrCEOt%2BwDYYqNQMAwTT7QMAH%2BK6UDZr4zI9CtbCb%2FFzEFlCwDVZXgyC64w%2BZxB9Ie226eD6Z%2FFgxVlWmbeZKhTUf8LgVRsiQ%2FPQfVE5LAMt4xy04fI6SjlBADS9lBZLG8SWTP9Yy3AxCEV%2BJix497ZRmvN1AuxHjLqV51GA71gIEo4fvFT3m9XM5natqIGrPKs2pbJVuFHiI%2BhWhzVo2YVv%2FAjdMYdkNjqr8okASTvnp2dSivqDsj0YuG4X3kHkqwHA2dl88pUB0%2FKNqMTFZNCHT%2FeTFYvZRZsueF7V1JkDYU4WsnFIc8kuawznh6wGu15XoqA%2B7FbWw9W3MDr7z3TbCsk3UVRgr1ydqoBaMLldQ3bBV2gAaPiNwNG5CqcbwFrnEnKPnno98TzLmXAFos2Md3Qb15h%2F3eQfcfqjzn0V0FhXqmEHVxRYymb3NRw7spbY7Vw8%2FANeeS2Ivcx%2B0UfVCyE3jye6jsIpmQj%2B%2BK515I8fevALtnln0ucXX%2FRaBVawBv89BPnbcet9hKKUuWyyl9%2BL8d7%2B0aA8LUzqXjhdw%2B2OTW%2FOlHS6RF3TO7iOkjLUSZC8C%2B3rPk0azu55uUP3%2BkJ0hPFA%2F8B8alsMO3zs70GOqUBH17vzkyldIZy4rJZK0BcHKEygBKeUp9lIKS3BYTU83Rqsd5tqMZHMhvWlfPOxABEQbpZa9wr9jLz3SAwq9dascKigfySENAZJ%2FPKuTc7QAmCI2xpvSTi3ByAjXnSlTzpXuoSUk9mCL7T%2BUjRhT%2Fcypa84P9zpnA%2F1poswhjC0Pk2KIgF7A63WWQCQVn18BG9nsEqdpQPX6XVvjgSovLC8NXUVJmv&X-Amz-Signature=eabd76397d0d37c9dabf2d8c018ee3fb566f185e53872ba037c85221d4d32f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
