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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQIV47X%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS4KKlLT4k6EF31lvpM8Yv2tfG3AncjEyt8wzhYUYFyAiEAozPA7uFDYFm7Dr7Ko25xmwg5ITkvGQHrQRzVnaS1j4wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXDDbTXJVZrQo0HmCrcA1YjYh%2FUD3yjhMEHlV51Yj8k%2B5CjkaBETgD%2Fkr1TqD6LO1Tcv7aue3NCUeWtZoK8ebZsvj9KktLdM589CIV2g68FxrMun3r%2BJFGFISl%2FxQl4brLcYPA6OGeN9Epy%2FZLmTgzXKFfqWyt7symXPeeW28sHxmL14CbWJgwTdnAExO148HoQAmuEHm5FG46%2FiV7E1p5Tj5%2BCfOme98gKCy%2BirvsG%2FN2E60gwKqhPiWYwXwkTJQhSufsDdmzoPahWUrq8qQCnh1%2F20QBoQTMlP6y8yMxLrIzTC21tRYBKzoETIQyF40LIlB17uXtYfsfLDh4WcwP%2FfFRPylJaDBYRrh52pWHnNam7re7z6f1TheE1nmTcuvc3MPqPeVIncvmJih3z5xWgD7ybocPFkCjmRwi7SYb3KOZWb2UuutYfAZcAjoMpgEOJlBOSUbXwGgpPtl4vOtp%2F%2BgWFS3GfZoBl8OzHkog%2Bq9J6Ewajdux0%2Bc%2Bqb9VjQrjViYqAgnMkB8E8cBOYMEsfSWFbTZrzpQTN7LP%2FS3YNn7AiOKg%2B9eWekir4%2BjuDRbUq891BYeVtt5WC%2FCIQDVTyXJ5Xr%2FKTkoSq9oY6JbTXgKJYhvcSbOtMGox3ENehLCu4zAhH6l7On5fDMNLLjcMGOqUBtbA0mb89DZDxfof7r4q%2BCumhqyn%2FU9Pstpn7sFe6aIsum7py6o3n2hGqbzTgGMtnHawflUbzvPrHycT%2F%2BP2yp1YhhzNFHzonWAR2UwJv73%2FbYihPBzaWY4ZjQHlcdU8pFKBLOh3BnEqPJAZLK7tImNBdFvN4hlnWCfKFIImrk4xe53Df8ImfPZVuptUxilP5IDmDhIo7cjooUxn2nr%2Fectxvw5Dq&X-Amz-Signature=d6ab7fbfc43727e45ad8a5475e063e198f5847744da9893517a498c5e630ff95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQIV47X%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS4KKlLT4k6EF31lvpM8Yv2tfG3AncjEyt8wzhYUYFyAiEAozPA7uFDYFm7Dr7Ko25xmwg5ITkvGQHrQRzVnaS1j4wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXDDbTXJVZrQo0HmCrcA1YjYh%2FUD3yjhMEHlV51Yj8k%2B5CjkaBETgD%2Fkr1TqD6LO1Tcv7aue3NCUeWtZoK8ebZsvj9KktLdM589CIV2g68FxrMun3r%2BJFGFISl%2FxQl4brLcYPA6OGeN9Epy%2FZLmTgzXKFfqWyt7symXPeeW28sHxmL14CbWJgwTdnAExO148HoQAmuEHm5FG46%2FiV7E1p5Tj5%2BCfOme98gKCy%2BirvsG%2FN2E60gwKqhPiWYwXwkTJQhSufsDdmzoPahWUrq8qQCnh1%2F20QBoQTMlP6y8yMxLrIzTC21tRYBKzoETIQyF40LIlB17uXtYfsfLDh4WcwP%2FfFRPylJaDBYRrh52pWHnNam7re7z6f1TheE1nmTcuvc3MPqPeVIncvmJih3z5xWgD7ybocPFkCjmRwi7SYb3KOZWb2UuutYfAZcAjoMpgEOJlBOSUbXwGgpPtl4vOtp%2F%2BgWFS3GfZoBl8OzHkog%2Bq9J6Ewajdux0%2Bc%2Bqb9VjQrjViYqAgnMkB8E8cBOYMEsfSWFbTZrzpQTN7LP%2FS3YNn7AiOKg%2B9eWekir4%2BjuDRbUq891BYeVtt5WC%2FCIQDVTyXJ5Xr%2FKTkoSq9oY6JbTXgKJYhvcSbOtMGox3ENehLCu4zAhH6l7On5fDMNLLjcMGOqUBtbA0mb89DZDxfof7r4q%2BCumhqyn%2FU9Pstpn7sFe6aIsum7py6o3n2hGqbzTgGMtnHawflUbzvPrHycT%2F%2BP2yp1YhhzNFHzonWAR2UwJv73%2FbYihPBzaWY4ZjQHlcdU8pFKBLOh3BnEqPJAZLK7tImNBdFvN4hlnWCfKFIImrk4xe53Df8ImfPZVuptUxilP5IDmDhIo7cjooUxn2nr%2Fectxvw5Dq&X-Amz-Signature=224f1467cfd3b8088f3c63111a993345079bc01f3df14f5b5a5fa9863ddc8616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQIV47X%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS4KKlLT4k6EF31lvpM8Yv2tfG3AncjEyt8wzhYUYFyAiEAozPA7uFDYFm7Dr7Ko25xmwg5ITkvGQHrQRzVnaS1j4wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXDDbTXJVZrQo0HmCrcA1YjYh%2FUD3yjhMEHlV51Yj8k%2B5CjkaBETgD%2Fkr1TqD6LO1Tcv7aue3NCUeWtZoK8ebZsvj9KktLdM589CIV2g68FxrMun3r%2BJFGFISl%2FxQl4brLcYPA6OGeN9Epy%2FZLmTgzXKFfqWyt7symXPeeW28sHxmL14CbWJgwTdnAExO148HoQAmuEHm5FG46%2FiV7E1p5Tj5%2BCfOme98gKCy%2BirvsG%2FN2E60gwKqhPiWYwXwkTJQhSufsDdmzoPahWUrq8qQCnh1%2F20QBoQTMlP6y8yMxLrIzTC21tRYBKzoETIQyF40LIlB17uXtYfsfLDh4WcwP%2FfFRPylJaDBYRrh52pWHnNam7re7z6f1TheE1nmTcuvc3MPqPeVIncvmJih3z5xWgD7ybocPFkCjmRwi7SYb3KOZWb2UuutYfAZcAjoMpgEOJlBOSUbXwGgpPtl4vOtp%2F%2BgWFS3GfZoBl8OzHkog%2Bq9J6Ewajdux0%2Bc%2Bqb9VjQrjViYqAgnMkB8E8cBOYMEsfSWFbTZrzpQTN7LP%2FS3YNn7AiOKg%2B9eWekir4%2BjuDRbUq891BYeVtt5WC%2FCIQDVTyXJ5Xr%2FKTkoSq9oY6JbTXgKJYhvcSbOtMGox3ENehLCu4zAhH6l7On5fDMNLLjcMGOqUBtbA0mb89DZDxfof7r4q%2BCumhqyn%2FU9Pstpn7sFe6aIsum7py6o3n2hGqbzTgGMtnHawflUbzvPrHycT%2F%2BP2yp1YhhzNFHzonWAR2UwJv73%2FbYihPBzaWY4ZjQHlcdU8pFKBLOh3BnEqPJAZLK7tImNBdFvN4hlnWCfKFIImrk4xe53Df8ImfPZVuptUxilP5IDmDhIo7cjooUxn2nr%2Fectxvw5Dq&X-Amz-Signature=f78c9bda6c2b2a222d6e082e998517e8cd85da906bbb78c438b333abd9d0b296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQIV47X%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS4KKlLT4k6EF31lvpM8Yv2tfG3AncjEyt8wzhYUYFyAiEAozPA7uFDYFm7Dr7Ko25xmwg5ITkvGQHrQRzVnaS1j4wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXDDbTXJVZrQo0HmCrcA1YjYh%2FUD3yjhMEHlV51Yj8k%2B5CjkaBETgD%2Fkr1TqD6LO1Tcv7aue3NCUeWtZoK8ebZsvj9KktLdM589CIV2g68FxrMun3r%2BJFGFISl%2FxQl4brLcYPA6OGeN9Epy%2FZLmTgzXKFfqWyt7symXPeeW28sHxmL14CbWJgwTdnAExO148HoQAmuEHm5FG46%2FiV7E1p5Tj5%2BCfOme98gKCy%2BirvsG%2FN2E60gwKqhPiWYwXwkTJQhSufsDdmzoPahWUrq8qQCnh1%2F20QBoQTMlP6y8yMxLrIzTC21tRYBKzoETIQyF40LIlB17uXtYfsfLDh4WcwP%2FfFRPylJaDBYRrh52pWHnNam7re7z6f1TheE1nmTcuvc3MPqPeVIncvmJih3z5xWgD7ybocPFkCjmRwi7SYb3KOZWb2UuutYfAZcAjoMpgEOJlBOSUbXwGgpPtl4vOtp%2F%2BgWFS3GfZoBl8OzHkog%2Bq9J6Ewajdux0%2Bc%2Bqb9VjQrjViYqAgnMkB8E8cBOYMEsfSWFbTZrzpQTN7LP%2FS3YNn7AiOKg%2B9eWekir4%2BjuDRbUq891BYeVtt5WC%2FCIQDVTyXJ5Xr%2FKTkoSq9oY6JbTXgKJYhvcSbOtMGox3ENehLCu4zAhH6l7On5fDMNLLjcMGOqUBtbA0mb89DZDxfof7r4q%2BCumhqyn%2FU9Pstpn7sFe6aIsum7py6o3n2hGqbzTgGMtnHawflUbzvPrHycT%2F%2BP2yp1YhhzNFHzonWAR2UwJv73%2FbYihPBzaWY4ZjQHlcdU8pFKBLOh3BnEqPJAZLK7tImNBdFvN4hlnWCfKFIImrk4xe53Df8ImfPZVuptUxilP5IDmDhIo7cjooUxn2nr%2Fectxvw5Dq&X-Amz-Signature=681648116dafd852b3efe4ec9c5d85d2474ab7b0624961b53bf66770a9225cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQIV47X%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS4KKlLT4k6EF31lvpM8Yv2tfG3AncjEyt8wzhYUYFyAiEAozPA7uFDYFm7Dr7Ko25xmwg5ITkvGQHrQRzVnaS1j4wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXDDbTXJVZrQo0HmCrcA1YjYh%2FUD3yjhMEHlV51Yj8k%2B5CjkaBETgD%2Fkr1TqD6LO1Tcv7aue3NCUeWtZoK8ebZsvj9KktLdM589CIV2g68FxrMun3r%2BJFGFISl%2FxQl4brLcYPA6OGeN9Epy%2FZLmTgzXKFfqWyt7symXPeeW28sHxmL14CbWJgwTdnAExO148HoQAmuEHm5FG46%2FiV7E1p5Tj5%2BCfOme98gKCy%2BirvsG%2FN2E60gwKqhPiWYwXwkTJQhSufsDdmzoPahWUrq8qQCnh1%2F20QBoQTMlP6y8yMxLrIzTC21tRYBKzoETIQyF40LIlB17uXtYfsfLDh4WcwP%2FfFRPylJaDBYRrh52pWHnNam7re7z6f1TheE1nmTcuvc3MPqPeVIncvmJih3z5xWgD7ybocPFkCjmRwi7SYb3KOZWb2UuutYfAZcAjoMpgEOJlBOSUbXwGgpPtl4vOtp%2F%2BgWFS3GfZoBl8OzHkog%2Bq9J6Ewajdux0%2Bc%2Bqb9VjQrjViYqAgnMkB8E8cBOYMEsfSWFbTZrzpQTN7LP%2FS3YNn7AiOKg%2B9eWekir4%2BjuDRbUq891BYeVtt5WC%2FCIQDVTyXJ5Xr%2FKTkoSq9oY6JbTXgKJYhvcSbOtMGox3ENehLCu4zAhH6l7On5fDMNLLjcMGOqUBtbA0mb89DZDxfof7r4q%2BCumhqyn%2FU9Pstpn7sFe6aIsum7py6o3n2hGqbzTgGMtnHawflUbzvPrHycT%2F%2BP2yp1YhhzNFHzonWAR2UwJv73%2FbYihPBzaWY4ZjQHlcdU8pFKBLOh3BnEqPJAZLK7tImNBdFvN4hlnWCfKFIImrk4xe53Df8ImfPZVuptUxilP5IDmDhIo7cjooUxn2nr%2Fectxvw5Dq&X-Amz-Signature=edad8f417260d3d520830c129a778addb8eb803f16ccf78cebd3cb0da6081324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
