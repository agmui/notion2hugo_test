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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GISGUKO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtOltXyUk2Gj4zuuSyCsIRBfxPkBTtRfzwcHnONEpL9gIhAMHomukBCGN3g4gSce5iCd8kpBMptGh%2Be6Io%2Bb9nPYF9KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3DzkAhReclnWUq2gq3APJ8vr%2BV8g0K7PGfPMjln4dTBM9R7%2FsvnZcUKf%2FRYDoGw%2FTpL14hcFvDFTAqiy9Zys0JHypAqFUFE0WJj%2FtQQrzB72hsugDPGxVlLMe%2FtIydu5v2kpHwCOi2DZ5EnbBy%2FUlxyfxLwuIAFhKMc7vhZdUZpPdBgkidXaZ%2FVqkFrv0xAMF6x5fe8Fm%2B2IyOrXNse1Q3HMnMsN4m8JUwJeGTFSfZhgBUKaAJCK5ty%2F7RFRdbO0LUNnSO8WFzOvTXo60t6ZNQu%2BLxsk5ZXZ%2FbOQaneo%2F3k0XprOj98C75LpzBgd9CKwXgAqjQ30bO8a2gDWdSJwimwQVEbMEsSqWmavYvbXs8x7%2Bol%2FOuPY%2BUaFE8JPO9ePO9cER%2F3tZtmD7CX1uurcQrujE6jVu7c0hd81YQWNo4eT0xudSyhMkSx1eMeISqvrCtM9waZFV3b%2B8l%2BnX0pMlrb3vkTRsfnpE7WsUScHc6qoeVkM4GI7tUBjuIfQxL%2BA5s2JQ5QD4srbhoi0jmc6CTsoa82M45RCHYY0GOBkrBK7dmrjsQ2fsEytRoL%2FvQ%2B8jHqM1OMW6qeAGbdcWVkvPt%2BwlJXese8N6E7PPhEcveEhYTuvWGkWs1Eb3KjdoSkRW8ihCj47W00y6kzCbs%2BHBBjqkAXsONZRZnU31u%2BSZ%2Bcldgy3%2BjimTompTBiuo84aM2PsvL1W%2FHG5mh1i2wnShLOybEmn%2BlujB75AL0om1fzL17VhNfCTtT7eEiPPZlY9a4wQz6ZmiS1jl1kLHxEsbxaiD0sT7tfiBMj3qnlhRevTyHGg8JbvTe7azvPTpXXQ%2Fih%2BiA9LQRE2x3iFl3fNVo0HSgio4aTVV6OhAHJjoFwWCyfpdNSGf&X-Amz-Signature=22a2c99fd419a67b609b008a613ece3075629ded70ef6adb4727e2627a49f5d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GISGUKO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtOltXyUk2Gj4zuuSyCsIRBfxPkBTtRfzwcHnONEpL9gIhAMHomukBCGN3g4gSce5iCd8kpBMptGh%2Be6Io%2Bb9nPYF9KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3DzkAhReclnWUq2gq3APJ8vr%2BV8g0K7PGfPMjln4dTBM9R7%2FsvnZcUKf%2FRYDoGw%2FTpL14hcFvDFTAqiy9Zys0JHypAqFUFE0WJj%2FtQQrzB72hsugDPGxVlLMe%2FtIydu5v2kpHwCOi2DZ5EnbBy%2FUlxyfxLwuIAFhKMc7vhZdUZpPdBgkidXaZ%2FVqkFrv0xAMF6x5fe8Fm%2B2IyOrXNse1Q3HMnMsN4m8JUwJeGTFSfZhgBUKaAJCK5ty%2F7RFRdbO0LUNnSO8WFzOvTXo60t6ZNQu%2BLxsk5ZXZ%2FbOQaneo%2F3k0XprOj98C75LpzBgd9CKwXgAqjQ30bO8a2gDWdSJwimwQVEbMEsSqWmavYvbXs8x7%2Bol%2FOuPY%2BUaFE8JPO9ePO9cER%2F3tZtmD7CX1uurcQrujE6jVu7c0hd81YQWNo4eT0xudSyhMkSx1eMeISqvrCtM9waZFV3b%2B8l%2BnX0pMlrb3vkTRsfnpE7WsUScHc6qoeVkM4GI7tUBjuIfQxL%2BA5s2JQ5QD4srbhoi0jmc6CTsoa82M45RCHYY0GOBkrBK7dmrjsQ2fsEytRoL%2FvQ%2B8jHqM1OMW6qeAGbdcWVkvPt%2BwlJXese8N6E7PPhEcveEhYTuvWGkWs1Eb3KjdoSkRW8ihCj47W00y6kzCbs%2BHBBjqkAXsONZRZnU31u%2BSZ%2Bcldgy3%2BjimTompTBiuo84aM2PsvL1W%2FHG5mh1i2wnShLOybEmn%2BlujB75AL0om1fzL17VhNfCTtT7eEiPPZlY9a4wQz6ZmiS1jl1kLHxEsbxaiD0sT7tfiBMj3qnlhRevTyHGg8JbvTe7azvPTpXXQ%2Fih%2BiA9LQRE2x3iFl3fNVo0HSgio4aTVV6OhAHJjoFwWCyfpdNSGf&X-Amz-Signature=f247ca53a377cf39aae7df3df201ed2217cc9f2c9060e297fa89f1f74c3a2db6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GISGUKO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtOltXyUk2Gj4zuuSyCsIRBfxPkBTtRfzwcHnONEpL9gIhAMHomukBCGN3g4gSce5iCd8kpBMptGh%2Be6Io%2Bb9nPYF9KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3DzkAhReclnWUq2gq3APJ8vr%2BV8g0K7PGfPMjln4dTBM9R7%2FsvnZcUKf%2FRYDoGw%2FTpL14hcFvDFTAqiy9Zys0JHypAqFUFE0WJj%2FtQQrzB72hsugDPGxVlLMe%2FtIydu5v2kpHwCOi2DZ5EnbBy%2FUlxyfxLwuIAFhKMc7vhZdUZpPdBgkidXaZ%2FVqkFrv0xAMF6x5fe8Fm%2B2IyOrXNse1Q3HMnMsN4m8JUwJeGTFSfZhgBUKaAJCK5ty%2F7RFRdbO0LUNnSO8WFzOvTXo60t6ZNQu%2BLxsk5ZXZ%2FbOQaneo%2F3k0XprOj98C75LpzBgd9CKwXgAqjQ30bO8a2gDWdSJwimwQVEbMEsSqWmavYvbXs8x7%2Bol%2FOuPY%2BUaFE8JPO9ePO9cER%2F3tZtmD7CX1uurcQrujE6jVu7c0hd81YQWNo4eT0xudSyhMkSx1eMeISqvrCtM9waZFV3b%2B8l%2BnX0pMlrb3vkTRsfnpE7WsUScHc6qoeVkM4GI7tUBjuIfQxL%2BA5s2JQ5QD4srbhoi0jmc6CTsoa82M45RCHYY0GOBkrBK7dmrjsQ2fsEytRoL%2FvQ%2B8jHqM1OMW6qeAGbdcWVkvPt%2BwlJXese8N6E7PPhEcveEhYTuvWGkWs1Eb3KjdoSkRW8ihCj47W00y6kzCbs%2BHBBjqkAXsONZRZnU31u%2BSZ%2Bcldgy3%2BjimTompTBiuo84aM2PsvL1W%2FHG5mh1i2wnShLOybEmn%2BlujB75AL0om1fzL17VhNfCTtT7eEiPPZlY9a4wQz6ZmiS1jl1kLHxEsbxaiD0sT7tfiBMj3qnlhRevTyHGg8JbvTe7azvPTpXXQ%2Fih%2BiA9LQRE2x3iFl3fNVo0HSgio4aTVV6OhAHJjoFwWCyfpdNSGf&X-Amz-Signature=ae2b764adfa1092e4db5f81622b5fd861457f4b359292d48e29d9448fb736af3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GISGUKO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtOltXyUk2Gj4zuuSyCsIRBfxPkBTtRfzwcHnONEpL9gIhAMHomukBCGN3g4gSce5iCd8kpBMptGh%2Be6Io%2Bb9nPYF9KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3DzkAhReclnWUq2gq3APJ8vr%2BV8g0K7PGfPMjln4dTBM9R7%2FsvnZcUKf%2FRYDoGw%2FTpL14hcFvDFTAqiy9Zys0JHypAqFUFE0WJj%2FtQQrzB72hsugDPGxVlLMe%2FtIydu5v2kpHwCOi2DZ5EnbBy%2FUlxyfxLwuIAFhKMc7vhZdUZpPdBgkidXaZ%2FVqkFrv0xAMF6x5fe8Fm%2B2IyOrXNse1Q3HMnMsN4m8JUwJeGTFSfZhgBUKaAJCK5ty%2F7RFRdbO0LUNnSO8WFzOvTXo60t6ZNQu%2BLxsk5ZXZ%2FbOQaneo%2F3k0XprOj98C75LpzBgd9CKwXgAqjQ30bO8a2gDWdSJwimwQVEbMEsSqWmavYvbXs8x7%2Bol%2FOuPY%2BUaFE8JPO9ePO9cER%2F3tZtmD7CX1uurcQrujE6jVu7c0hd81YQWNo4eT0xudSyhMkSx1eMeISqvrCtM9waZFV3b%2B8l%2BnX0pMlrb3vkTRsfnpE7WsUScHc6qoeVkM4GI7tUBjuIfQxL%2BA5s2JQ5QD4srbhoi0jmc6CTsoa82M45RCHYY0GOBkrBK7dmrjsQ2fsEytRoL%2FvQ%2B8jHqM1OMW6qeAGbdcWVkvPt%2BwlJXese8N6E7PPhEcveEhYTuvWGkWs1Eb3KjdoSkRW8ihCj47W00y6kzCbs%2BHBBjqkAXsONZRZnU31u%2BSZ%2Bcldgy3%2BjimTompTBiuo84aM2PsvL1W%2FHG5mh1i2wnShLOybEmn%2BlujB75AL0om1fzL17VhNfCTtT7eEiPPZlY9a4wQz6ZmiS1jl1kLHxEsbxaiD0sT7tfiBMj3qnlhRevTyHGg8JbvTe7azvPTpXXQ%2Fih%2BiA9LQRE2x3iFl3fNVo0HSgio4aTVV6OhAHJjoFwWCyfpdNSGf&X-Amz-Signature=34c32493eb65f7846dbaf6588a265d5de646781167c3b0bfb71db482de0dd07e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GISGUKO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtOltXyUk2Gj4zuuSyCsIRBfxPkBTtRfzwcHnONEpL9gIhAMHomukBCGN3g4gSce5iCd8kpBMptGh%2Be6Io%2Bb9nPYF9KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3DzkAhReclnWUq2gq3APJ8vr%2BV8g0K7PGfPMjln4dTBM9R7%2FsvnZcUKf%2FRYDoGw%2FTpL14hcFvDFTAqiy9Zys0JHypAqFUFE0WJj%2FtQQrzB72hsugDPGxVlLMe%2FtIydu5v2kpHwCOi2DZ5EnbBy%2FUlxyfxLwuIAFhKMc7vhZdUZpPdBgkidXaZ%2FVqkFrv0xAMF6x5fe8Fm%2B2IyOrXNse1Q3HMnMsN4m8JUwJeGTFSfZhgBUKaAJCK5ty%2F7RFRdbO0LUNnSO8WFzOvTXo60t6ZNQu%2BLxsk5ZXZ%2FbOQaneo%2F3k0XprOj98C75LpzBgd9CKwXgAqjQ30bO8a2gDWdSJwimwQVEbMEsSqWmavYvbXs8x7%2Bol%2FOuPY%2BUaFE8JPO9ePO9cER%2F3tZtmD7CX1uurcQrujE6jVu7c0hd81YQWNo4eT0xudSyhMkSx1eMeISqvrCtM9waZFV3b%2B8l%2BnX0pMlrb3vkTRsfnpE7WsUScHc6qoeVkM4GI7tUBjuIfQxL%2BA5s2JQ5QD4srbhoi0jmc6CTsoa82M45RCHYY0GOBkrBK7dmrjsQ2fsEytRoL%2FvQ%2B8jHqM1OMW6qeAGbdcWVkvPt%2BwlJXese8N6E7PPhEcveEhYTuvWGkWs1Eb3KjdoSkRW8ihCj47W00y6kzCbs%2BHBBjqkAXsONZRZnU31u%2BSZ%2Bcldgy3%2BjimTompTBiuo84aM2PsvL1W%2FHG5mh1i2wnShLOybEmn%2BlujB75AL0om1fzL17VhNfCTtT7eEiPPZlY9a4wQz6ZmiS1jl1kLHxEsbxaiD0sT7tfiBMj3qnlhRevTyHGg8JbvTe7azvPTpXXQ%2Fih%2BiA9LQRE2x3iFl3fNVo0HSgio4aTVV6OhAHJjoFwWCyfpdNSGf&X-Amz-Signature=c3c7fa43b3a9dd47d383644b06f7cbcffc0eea45656410873a7ba758d2ff4a93&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
