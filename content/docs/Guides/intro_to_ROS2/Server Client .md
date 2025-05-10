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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4YGYA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmOweGgcsvEkQ52%2BVwuu1NFoIcZLS0zjBWMxm7qW16IAiADRGDrhhUoV85nWl8jrbHOT6jF63a9tOWUT0NbZ4lZLiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkxgAJ%2BoU02wrlnlKtwDvq%2BcPSw1JlMnzMIgCVa4hkcCw5de0PKWkTOciEvYB9%2ByN52xpXOVpOXA%2FWXyqvM3qIe9ww%2FLSEEpJy2ReQW0TEoiWa9jUeZ4o9JlKeh1mDkxz7%2BO%2FdZ%2FUEUA%2FHNDCCWERpL7dtdzUpl3EKeOpvB3b8I7iIfvchebi2K9wjzmYyfMF7nYjBsIq5GZ1%2B94uEwuBPiyk1Lte0l1C%2Ba%2F0UgjpTzU%2Fg8F7FcjvM8zZraWrAdlbYEL4M43x5u2TiI0uMOnZ%2FzhIeLFpjI7ftQQpZlmVA0aDlMBbxQ9EhNco%2FU7eqJtfQZciNzfQQjto4QVbydzHDc60GrhcdFnm4LzZgFjlzhXMEP1IpDADlOLEU0rokhw%2BVxAmiVIAgDZblu0MCr8zRk1Bhmit86g9utKwveDRyk4CgFTTQ%2BeqsyD4Np95%2BGDI6pV03gW3%2Fx6gz5dEDFA9ctsW3ceuomL93bazMIZcvIAZ3Oq126S0wmPoDUnaf5DPW6ZVLtVrO04bZiJLZoN%2FpVV3g9zrH4D4b%2BhUQlhS%2F6DbncVIftmklJDB1QCSHynz3Vo2xtrXnBXwuy6wWo6eXQ3nYIFMeR4%2BtL57pGHx4REg%2FkNAtuv%2BOifWYSwRP%2BL%2F0nrAiEo0KjFdGMw9I%2F8wAY6pgHNsf0kMLxmkvXbBGhZWZdQNN4nkvqpvXmKMoja9O6phxxOLO0jk1vbf6iY3YVNctTc%2BA9cB5V%2Fg89wdEnhCuFDREf4Vi2H61S2xDfHhb28ggw2kkxpyKm97jDjxHhunn7eyuwb2yI0exIx9qk1PXLlLlY4393RUUGJcSbs60Orq7ox1hHXiAYY3Pft9P6Qx9YF7mCMflcEyNghx5jOxXovnO6VjrOG&X-Amz-Signature=e3abf572cb25ab0f3b3822d68a8fcb1c3a3f9fafc9d2f18e768ae975e9e70cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4YGYA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmOweGgcsvEkQ52%2BVwuu1NFoIcZLS0zjBWMxm7qW16IAiADRGDrhhUoV85nWl8jrbHOT6jF63a9tOWUT0NbZ4lZLiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkxgAJ%2BoU02wrlnlKtwDvq%2BcPSw1JlMnzMIgCVa4hkcCw5de0PKWkTOciEvYB9%2ByN52xpXOVpOXA%2FWXyqvM3qIe9ww%2FLSEEpJy2ReQW0TEoiWa9jUeZ4o9JlKeh1mDkxz7%2BO%2FdZ%2FUEUA%2FHNDCCWERpL7dtdzUpl3EKeOpvB3b8I7iIfvchebi2K9wjzmYyfMF7nYjBsIq5GZ1%2B94uEwuBPiyk1Lte0l1C%2Ba%2F0UgjpTzU%2Fg8F7FcjvM8zZraWrAdlbYEL4M43x5u2TiI0uMOnZ%2FzhIeLFpjI7ftQQpZlmVA0aDlMBbxQ9EhNco%2FU7eqJtfQZciNzfQQjto4QVbydzHDc60GrhcdFnm4LzZgFjlzhXMEP1IpDADlOLEU0rokhw%2BVxAmiVIAgDZblu0MCr8zRk1Bhmit86g9utKwveDRyk4CgFTTQ%2BeqsyD4Np95%2BGDI6pV03gW3%2Fx6gz5dEDFA9ctsW3ceuomL93bazMIZcvIAZ3Oq126S0wmPoDUnaf5DPW6ZVLtVrO04bZiJLZoN%2FpVV3g9zrH4D4b%2BhUQlhS%2F6DbncVIftmklJDB1QCSHynz3Vo2xtrXnBXwuy6wWo6eXQ3nYIFMeR4%2BtL57pGHx4REg%2FkNAtuv%2BOifWYSwRP%2BL%2F0nrAiEo0KjFdGMw9I%2F8wAY6pgHNsf0kMLxmkvXbBGhZWZdQNN4nkvqpvXmKMoja9O6phxxOLO0jk1vbf6iY3YVNctTc%2BA9cB5V%2Fg89wdEnhCuFDREf4Vi2H61S2xDfHhb28ggw2kkxpyKm97jDjxHhunn7eyuwb2yI0exIx9qk1PXLlLlY4393RUUGJcSbs60Orq7ox1hHXiAYY3Pft9P6Qx9YF7mCMflcEyNghx5jOxXovnO6VjrOG&X-Amz-Signature=4680784da94501cc1ba64aab0985eb163f6aeb6b5ddabd23cc998d9241469244&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4YGYA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmOweGgcsvEkQ52%2BVwuu1NFoIcZLS0zjBWMxm7qW16IAiADRGDrhhUoV85nWl8jrbHOT6jF63a9tOWUT0NbZ4lZLiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkxgAJ%2BoU02wrlnlKtwDvq%2BcPSw1JlMnzMIgCVa4hkcCw5de0PKWkTOciEvYB9%2ByN52xpXOVpOXA%2FWXyqvM3qIe9ww%2FLSEEpJy2ReQW0TEoiWa9jUeZ4o9JlKeh1mDkxz7%2BO%2FdZ%2FUEUA%2FHNDCCWERpL7dtdzUpl3EKeOpvB3b8I7iIfvchebi2K9wjzmYyfMF7nYjBsIq5GZ1%2B94uEwuBPiyk1Lte0l1C%2Ba%2F0UgjpTzU%2Fg8F7FcjvM8zZraWrAdlbYEL4M43x5u2TiI0uMOnZ%2FzhIeLFpjI7ftQQpZlmVA0aDlMBbxQ9EhNco%2FU7eqJtfQZciNzfQQjto4QVbydzHDc60GrhcdFnm4LzZgFjlzhXMEP1IpDADlOLEU0rokhw%2BVxAmiVIAgDZblu0MCr8zRk1Bhmit86g9utKwveDRyk4CgFTTQ%2BeqsyD4Np95%2BGDI6pV03gW3%2Fx6gz5dEDFA9ctsW3ceuomL93bazMIZcvIAZ3Oq126S0wmPoDUnaf5DPW6ZVLtVrO04bZiJLZoN%2FpVV3g9zrH4D4b%2BhUQlhS%2F6DbncVIftmklJDB1QCSHynz3Vo2xtrXnBXwuy6wWo6eXQ3nYIFMeR4%2BtL57pGHx4REg%2FkNAtuv%2BOifWYSwRP%2BL%2F0nrAiEo0KjFdGMw9I%2F8wAY6pgHNsf0kMLxmkvXbBGhZWZdQNN4nkvqpvXmKMoja9O6phxxOLO0jk1vbf6iY3YVNctTc%2BA9cB5V%2Fg89wdEnhCuFDREf4Vi2H61S2xDfHhb28ggw2kkxpyKm97jDjxHhunn7eyuwb2yI0exIx9qk1PXLlLlY4393RUUGJcSbs60Orq7ox1hHXiAYY3Pft9P6Qx9YF7mCMflcEyNghx5jOxXovnO6VjrOG&X-Amz-Signature=bbd1acdb1d99084b453570a2fc2e0b15eaf5a46536ff64e19b1107ba3df7b2c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4YGYA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmOweGgcsvEkQ52%2BVwuu1NFoIcZLS0zjBWMxm7qW16IAiADRGDrhhUoV85nWl8jrbHOT6jF63a9tOWUT0NbZ4lZLiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkxgAJ%2BoU02wrlnlKtwDvq%2BcPSw1JlMnzMIgCVa4hkcCw5de0PKWkTOciEvYB9%2ByN52xpXOVpOXA%2FWXyqvM3qIe9ww%2FLSEEpJy2ReQW0TEoiWa9jUeZ4o9JlKeh1mDkxz7%2BO%2FdZ%2FUEUA%2FHNDCCWERpL7dtdzUpl3EKeOpvB3b8I7iIfvchebi2K9wjzmYyfMF7nYjBsIq5GZ1%2B94uEwuBPiyk1Lte0l1C%2Ba%2F0UgjpTzU%2Fg8F7FcjvM8zZraWrAdlbYEL4M43x5u2TiI0uMOnZ%2FzhIeLFpjI7ftQQpZlmVA0aDlMBbxQ9EhNco%2FU7eqJtfQZciNzfQQjto4QVbydzHDc60GrhcdFnm4LzZgFjlzhXMEP1IpDADlOLEU0rokhw%2BVxAmiVIAgDZblu0MCr8zRk1Bhmit86g9utKwveDRyk4CgFTTQ%2BeqsyD4Np95%2BGDI6pV03gW3%2Fx6gz5dEDFA9ctsW3ceuomL93bazMIZcvIAZ3Oq126S0wmPoDUnaf5DPW6ZVLtVrO04bZiJLZoN%2FpVV3g9zrH4D4b%2BhUQlhS%2F6DbncVIftmklJDB1QCSHynz3Vo2xtrXnBXwuy6wWo6eXQ3nYIFMeR4%2BtL57pGHx4REg%2FkNAtuv%2BOifWYSwRP%2BL%2F0nrAiEo0KjFdGMw9I%2F8wAY6pgHNsf0kMLxmkvXbBGhZWZdQNN4nkvqpvXmKMoja9O6phxxOLO0jk1vbf6iY3YVNctTc%2BA9cB5V%2Fg89wdEnhCuFDREf4Vi2H61S2xDfHhb28ggw2kkxpyKm97jDjxHhunn7eyuwb2yI0exIx9qk1PXLlLlY4393RUUGJcSbs60Orq7ox1hHXiAYY3Pft9P6Qx9YF7mCMflcEyNghx5jOxXovnO6VjrOG&X-Amz-Signature=22fab640d6d490173a06c97ae69609319e62fd2703817dc7c9c8d07e9ee3153e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4YGYA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmOweGgcsvEkQ52%2BVwuu1NFoIcZLS0zjBWMxm7qW16IAiADRGDrhhUoV85nWl8jrbHOT6jF63a9tOWUT0NbZ4lZLiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkxgAJ%2BoU02wrlnlKtwDvq%2BcPSw1JlMnzMIgCVa4hkcCw5de0PKWkTOciEvYB9%2ByN52xpXOVpOXA%2FWXyqvM3qIe9ww%2FLSEEpJy2ReQW0TEoiWa9jUeZ4o9JlKeh1mDkxz7%2BO%2FdZ%2FUEUA%2FHNDCCWERpL7dtdzUpl3EKeOpvB3b8I7iIfvchebi2K9wjzmYyfMF7nYjBsIq5GZ1%2B94uEwuBPiyk1Lte0l1C%2Ba%2F0UgjpTzU%2Fg8F7FcjvM8zZraWrAdlbYEL4M43x5u2TiI0uMOnZ%2FzhIeLFpjI7ftQQpZlmVA0aDlMBbxQ9EhNco%2FU7eqJtfQZciNzfQQjto4QVbydzHDc60GrhcdFnm4LzZgFjlzhXMEP1IpDADlOLEU0rokhw%2BVxAmiVIAgDZblu0MCr8zRk1Bhmit86g9utKwveDRyk4CgFTTQ%2BeqsyD4Np95%2BGDI6pV03gW3%2Fx6gz5dEDFA9ctsW3ceuomL93bazMIZcvIAZ3Oq126S0wmPoDUnaf5DPW6ZVLtVrO04bZiJLZoN%2FpVV3g9zrH4D4b%2BhUQlhS%2F6DbncVIftmklJDB1QCSHynz3Vo2xtrXnBXwuy6wWo6eXQ3nYIFMeR4%2BtL57pGHx4REg%2FkNAtuv%2BOifWYSwRP%2BL%2F0nrAiEo0KjFdGMw9I%2F8wAY6pgHNsf0kMLxmkvXbBGhZWZdQNN4nkvqpvXmKMoja9O6phxxOLO0jk1vbf6iY3YVNctTc%2BA9cB5V%2Fg89wdEnhCuFDREf4Vi2H61S2xDfHhb28ggw2kkxpyKm97jDjxHhunn7eyuwb2yI0exIx9qk1PXLlLlY4393RUUGJcSbs60Orq7ox1hHXiAYY3Pft9P6Qx9YF7mCMflcEyNghx5jOxXovnO6VjrOG&X-Amz-Signature=2ad0cb94d3b7482d5fa57b1729fa2302b8dfc55b6138bbca62585f7c4c2eb1c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
