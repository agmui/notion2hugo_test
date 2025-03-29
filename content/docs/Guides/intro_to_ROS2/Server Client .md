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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H24ALWV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCSq2pJm946MToZxHG5kuzYc8YnKWfInHadOURbEj2IrwIhAOvJXWt5mS0aOqxE0sj5pKRiUnQZrptdhMstjeUStnrFKv8DCHUQABoMNjM3NDIzMTgzODA1Igw6LETpMcZvwgdLOygq3ANd1pao%2FD1HUnJV6BKHG%2FiUB4gJ5bTGFENGG8bE2UElqNFnGlbAG%2BqoN0nN5jw0iUPvaR5ppClN%2FAoWQl6whs3eb39x1GlcAac%2BvS2SOBq5bRpyE1I%2FBctumT0zCTZTkLo6EcMu%2BSAu37077SaOsnpygNMZZpLSt3UbyuEarQ15fm3EYAZV%2BEIXVknkS7IcmMTH6re7G4C4yrPOtjV2S1AWxos8n1gCfAiN3kfZxEVC%2FCHhqkuSTlRCcHFJIaexBYo%2F6c3Sn7sgXSCrLU9I2WuwFxKz2fP2lXgbWXYt%2Fu2MSLgGxO%2BSbyn8s8sbKeVrn6TPrpbOFdWnEuVU4XjJuLXhPYtwOji6OM5f0YscdHuZON1AUl9SQdZeUVB5pj9ja6%2Bd2u6KXahy6lkP9Y%2Fh5T1fLVWPAKcRMn58kgJOy55zgHU9Yt1tIQu%2FUW10U%2B3aoQ%2FdgqWGtYkscCh9TZSZiJZTuIRwC99ol3gC%2ByP6Dg5eUNokVqpzWvJxly6JLRkq1ZDesgwy%2FuuWA9u%2BmzILL%2Fgf51csOAh8w8Zydj4TiTXGsVH34R4wXl2pPluB4X5sln9CrfanVsFnsqJZIO2lAtL4UwC98vItYYKLuaT43BDH2Z%2FyLJdSUiGI6L%2FE4zCdtZ%2B%2FBjqkAb0V1y2TJcm51qXG7ZP5WQ2S17ENUsJL8rmeAiVcQkex6wSROiOrrHMdMCb2tNCIGyP120Q7bfDQg3XWtVshNF6AcLUJ53Ka0WeKEmK1ZpGPiLxA5OYmO8KHOL5xcK41KTVJLiVyW4hGooie3cbPxdQHssAHtjbxZmumBN%2FBCHMctWZiXQjEEPizfvcLzzVGc%2FHbnn1qRwi8YkeNvReYt4sJu%2FD7&X-Amz-Signature=1651b5dfd3fd310d29197ed3d1f30c1c9388d87c7f05aec6291fd7f91c91d30f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H24ALWV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCSq2pJm946MToZxHG5kuzYc8YnKWfInHadOURbEj2IrwIhAOvJXWt5mS0aOqxE0sj5pKRiUnQZrptdhMstjeUStnrFKv8DCHUQABoMNjM3NDIzMTgzODA1Igw6LETpMcZvwgdLOygq3ANd1pao%2FD1HUnJV6BKHG%2FiUB4gJ5bTGFENGG8bE2UElqNFnGlbAG%2BqoN0nN5jw0iUPvaR5ppClN%2FAoWQl6whs3eb39x1GlcAac%2BvS2SOBq5bRpyE1I%2FBctumT0zCTZTkLo6EcMu%2BSAu37077SaOsnpygNMZZpLSt3UbyuEarQ15fm3EYAZV%2BEIXVknkS7IcmMTH6re7G4C4yrPOtjV2S1AWxos8n1gCfAiN3kfZxEVC%2FCHhqkuSTlRCcHFJIaexBYo%2F6c3Sn7sgXSCrLU9I2WuwFxKz2fP2lXgbWXYt%2Fu2MSLgGxO%2BSbyn8s8sbKeVrn6TPrpbOFdWnEuVU4XjJuLXhPYtwOji6OM5f0YscdHuZON1AUl9SQdZeUVB5pj9ja6%2Bd2u6KXahy6lkP9Y%2Fh5T1fLVWPAKcRMn58kgJOy55zgHU9Yt1tIQu%2FUW10U%2B3aoQ%2FdgqWGtYkscCh9TZSZiJZTuIRwC99ol3gC%2ByP6Dg5eUNokVqpzWvJxly6JLRkq1ZDesgwy%2FuuWA9u%2BmzILL%2Fgf51csOAh8w8Zydj4TiTXGsVH34R4wXl2pPluB4X5sln9CrfanVsFnsqJZIO2lAtL4UwC98vItYYKLuaT43BDH2Z%2FyLJdSUiGI6L%2FE4zCdtZ%2B%2FBjqkAb0V1y2TJcm51qXG7ZP5WQ2S17ENUsJL8rmeAiVcQkex6wSROiOrrHMdMCb2tNCIGyP120Q7bfDQg3XWtVshNF6AcLUJ53Ka0WeKEmK1ZpGPiLxA5OYmO8KHOL5xcK41KTVJLiVyW4hGooie3cbPxdQHssAHtjbxZmumBN%2FBCHMctWZiXQjEEPizfvcLzzVGc%2FHbnn1qRwi8YkeNvReYt4sJu%2FD7&X-Amz-Signature=690ba8092a0108485d6f212904fae395df7e34c8dfe2aa7c20108ea9eb5b9826&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H24ALWV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCSq2pJm946MToZxHG5kuzYc8YnKWfInHadOURbEj2IrwIhAOvJXWt5mS0aOqxE0sj5pKRiUnQZrptdhMstjeUStnrFKv8DCHUQABoMNjM3NDIzMTgzODA1Igw6LETpMcZvwgdLOygq3ANd1pao%2FD1HUnJV6BKHG%2FiUB4gJ5bTGFENGG8bE2UElqNFnGlbAG%2BqoN0nN5jw0iUPvaR5ppClN%2FAoWQl6whs3eb39x1GlcAac%2BvS2SOBq5bRpyE1I%2FBctumT0zCTZTkLo6EcMu%2BSAu37077SaOsnpygNMZZpLSt3UbyuEarQ15fm3EYAZV%2BEIXVknkS7IcmMTH6re7G4C4yrPOtjV2S1AWxos8n1gCfAiN3kfZxEVC%2FCHhqkuSTlRCcHFJIaexBYo%2F6c3Sn7sgXSCrLU9I2WuwFxKz2fP2lXgbWXYt%2Fu2MSLgGxO%2BSbyn8s8sbKeVrn6TPrpbOFdWnEuVU4XjJuLXhPYtwOji6OM5f0YscdHuZON1AUl9SQdZeUVB5pj9ja6%2Bd2u6KXahy6lkP9Y%2Fh5T1fLVWPAKcRMn58kgJOy55zgHU9Yt1tIQu%2FUW10U%2B3aoQ%2FdgqWGtYkscCh9TZSZiJZTuIRwC99ol3gC%2ByP6Dg5eUNokVqpzWvJxly6JLRkq1ZDesgwy%2FuuWA9u%2BmzILL%2Fgf51csOAh8w8Zydj4TiTXGsVH34R4wXl2pPluB4X5sln9CrfanVsFnsqJZIO2lAtL4UwC98vItYYKLuaT43BDH2Z%2FyLJdSUiGI6L%2FE4zCdtZ%2B%2FBjqkAb0V1y2TJcm51qXG7ZP5WQ2S17ENUsJL8rmeAiVcQkex6wSROiOrrHMdMCb2tNCIGyP120Q7bfDQg3XWtVshNF6AcLUJ53Ka0WeKEmK1ZpGPiLxA5OYmO8KHOL5xcK41KTVJLiVyW4hGooie3cbPxdQHssAHtjbxZmumBN%2FBCHMctWZiXQjEEPizfvcLzzVGc%2FHbnn1qRwi8YkeNvReYt4sJu%2FD7&X-Amz-Signature=bf1a6e27de7e78565422a978406745235adb20f5cbb20150c1ecd57a6d784daf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H24ALWV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCSq2pJm946MToZxHG5kuzYc8YnKWfInHadOURbEj2IrwIhAOvJXWt5mS0aOqxE0sj5pKRiUnQZrptdhMstjeUStnrFKv8DCHUQABoMNjM3NDIzMTgzODA1Igw6LETpMcZvwgdLOygq3ANd1pao%2FD1HUnJV6BKHG%2FiUB4gJ5bTGFENGG8bE2UElqNFnGlbAG%2BqoN0nN5jw0iUPvaR5ppClN%2FAoWQl6whs3eb39x1GlcAac%2BvS2SOBq5bRpyE1I%2FBctumT0zCTZTkLo6EcMu%2BSAu37077SaOsnpygNMZZpLSt3UbyuEarQ15fm3EYAZV%2BEIXVknkS7IcmMTH6re7G4C4yrPOtjV2S1AWxos8n1gCfAiN3kfZxEVC%2FCHhqkuSTlRCcHFJIaexBYo%2F6c3Sn7sgXSCrLU9I2WuwFxKz2fP2lXgbWXYt%2Fu2MSLgGxO%2BSbyn8s8sbKeVrn6TPrpbOFdWnEuVU4XjJuLXhPYtwOji6OM5f0YscdHuZON1AUl9SQdZeUVB5pj9ja6%2Bd2u6KXahy6lkP9Y%2Fh5T1fLVWPAKcRMn58kgJOy55zgHU9Yt1tIQu%2FUW10U%2B3aoQ%2FdgqWGtYkscCh9TZSZiJZTuIRwC99ol3gC%2ByP6Dg5eUNokVqpzWvJxly6JLRkq1ZDesgwy%2FuuWA9u%2BmzILL%2Fgf51csOAh8w8Zydj4TiTXGsVH34R4wXl2pPluB4X5sln9CrfanVsFnsqJZIO2lAtL4UwC98vItYYKLuaT43BDH2Z%2FyLJdSUiGI6L%2FE4zCdtZ%2B%2FBjqkAb0V1y2TJcm51qXG7ZP5WQ2S17ENUsJL8rmeAiVcQkex6wSROiOrrHMdMCb2tNCIGyP120Q7bfDQg3XWtVshNF6AcLUJ53Ka0WeKEmK1ZpGPiLxA5OYmO8KHOL5xcK41KTVJLiVyW4hGooie3cbPxdQHssAHtjbxZmumBN%2FBCHMctWZiXQjEEPizfvcLzzVGc%2FHbnn1qRwi8YkeNvReYt4sJu%2FD7&X-Amz-Signature=de8437ce3348e35e85d0eeb34f3644b98cc5f53a017f16e918732caac5237211&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H24ALWV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCSq2pJm946MToZxHG5kuzYc8YnKWfInHadOURbEj2IrwIhAOvJXWt5mS0aOqxE0sj5pKRiUnQZrptdhMstjeUStnrFKv8DCHUQABoMNjM3NDIzMTgzODA1Igw6LETpMcZvwgdLOygq3ANd1pao%2FD1HUnJV6BKHG%2FiUB4gJ5bTGFENGG8bE2UElqNFnGlbAG%2BqoN0nN5jw0iUPvaR5ppClN%2FAoWQl6whs3eb39x1GlcAac%2BvS2SOBq5bRpyE1I%2FBctumT0zCTZTkLo6EcMu%2BSAu37077SaOsnpygNMZZpLSt3UbyuEarQ15fm3EYAZV%2BEIXVknkS7IcmMTH6re7G4C4yrPOtjV2S1AWxos8n1gCfAiN3kfZxEVC%2FCHhqkuSTlRCcHFJIaexBYo%2F6c3Sn7sgXSCrLU9I2WuwFxKz2fP2lXgbWXYt%2Fu2MSLgGxO%2BSbyn8s8sbKeVrn6TPrpbOFdWnEuVU4XjJuLXhPYtwOji6OM5f0YscdHuZON1AUl9SQdZeUVB5pj9ja6%2Bd2u6KXahy6lkP9Y%2Fh5T1fLVWPAKcRMn58kgJOy55zgHU9Yt1tIQu%2FUW10U%2B3aoQ%2FdgqWGtYkscCh9TZSZiJZTuIRwC99ol3gC%2ByP6Dg5eUNokVqpzWvJxly6JLRkq1ZDesgwy%2FuuWA9u%2BmzILL%2Fgf51csOAh8w8Zydj4TiTXGsVH34R4wXl2pPluB4X5sln9CrfanVsFnsqJZIO2lAtL4UwC98vItYYKLuaT43BDH2Z%2FyLJdSUiGI6L%2FE4zCdtZ%2B%2FBjqkAb0V1y2TJcm51qXG7ZP5WQ2S17ENUsJL8rmeAiVcQkex6wSROiOrrHMdMCb2tNCIGyP120Q7bfDQg3XWtVshNF6AcLUJ53Ka0WeKEmK1ZpGPiLxA5OYmO8KHOL5xcK41KTVJLiVyW4hGooie3cbPxdQHssAHtjbxZmumBN%2FBCHMctWZiXQjEEPizfvcLzzVGc%2FHbnn1qRwi8YkeNvReYt4sJu%2FD7&X-Amz-Signature=7d9c9101e961cba18fb205866463f89b03f285216a0dfe91ceffc5e19bb0fe6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
