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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3INSMWT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICC6FE097yqyfPEXmewTXx4G752OUDput3m2aSrA5cekAiAUN%2Btphglu9JwH3N9f1btEGrs2NGnOkBNkNKKDwmVfHSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpOpGkOcZ%2FabDqji5KtwDm19kSOxkDVvRs3evwWcWlwPioj17R2HkrJ%2FEpVNrymD2CfNmM2b5Xd%2F3C%2BBzEL25G4rU8N%2BMMjS6pY0UtuKdaWppYW%2BRJIO9VW3EyQEy1kSde%2BT0P46BfIvSimPZkN0s%2BjEOaI0diOljRaYcZCf3uZX5Xls2iPiPlkavwANm8suTas0Y57COV6NPZVkRrEB8OtvpCH4FBbWt9o76HmBFtw%2FV46P%2F9ggf3eCs%2BX8DY8%2BFkB53BNYpIrhPU1Os4Nw7xM%2FrCds1B8abyLp7kxft1WFTCS3hVgoC%2FPH5VtXQhu6KDD%2ByBP2aQRNpd%2BFfYoOKXKCLpwVZjlsExsG2wYoFfnsheRIsogRTJ4Pu2VKHxwXltPtalSN4sYVX3HbhhKcKBvwk%2FqrSGX87SX%2FacnaZlydg8NCCYr2yRcJLQQMkWjBz1a7F3l%2BjG6U9l3okQSpAHp90J3KZkU1Ye7safYyYd%2Fx5KWP5Ga1OfToxCM3agK%2Bi9MPbzsIxaZAMBwN1hPjSiHH7xpEZsg92Gp5NQO%2B75snLsV5IWZKZCA4xymeNgl7hCFAgIjoAWyyE8FRIZsFkirO3yiR6UGeAH1%2FYPrMa0rpMrYQykAQi%2FtDoJzp8anq2d%2F%2BhAXZ%2FufMfH%2F0w2Nb7wAY6pgE%2FwearwbQWTYSKM0S%2F54ub1n5MRD2F9JaREMQFY14ds8ysKvaUuLj%2Bjw6Vh4d5mlAE3nvvs8yx1CUFwf1QlnJmIciXSulw7wBKf32iluc3e5Q0jAUVDl9%2Fryyr5GjvXA3TwPL8BDa0WgW1LdI1hS48Uo9SOXPx%2B4xC%2BEGe4Gdp8l9ph3U9aeKNW21%2FPakQRdh1SO1gkHxwDwHXyZKgzKr1Op%2Bh1Ral&X-Amz-Signature=06343a5438a432dd5205cba9bcd2d524875f24e818c4040e1ee6b49583b89b57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3INSMWT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICC6FE097yqyfPEXmewTXx4G752OUDput3m2aSrA5cekAiAUN%2Btphglu9JwH3N9f1btEGrs2NGnOkBNkNKKDwmVfHSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpOpGkOcZ%2FabDqji5KtwDm19kSOxkDVvRs3evwWcWlwPioj17R2HkrJ%2FEpVNrymD2CfNmM2b5Xd%2F3C%2BBzEL25G4rU8N%2BMMjS6pY0UtuKdaWppYW%2BRJIO9VW3EyQEy1kSde%2BT0P46BfIvSimPZkN0s%2BjEOaI0diOljRaYcZCf3uZX5Xls2iPiPlkavwANm8suTas0Y57COV6NPZVkRrEB8OtvpCH4FBbWt9o76HmBFtw%2FV46P%2F9ggf3eCs%2BX8DY8%2BFkB53BNYpIrhPU1Os4Nw7xM%2FrCds1B8abyLp7kxft1WFTCS3hVgoC%2FPH5VtXQhu6KDD%2ByBP2aQRNpd%2BFfYoOKXKCLpwVZjlsExsG2wYoFfnsheRIsogRTJ4Pu2VKHxwXltPtalSN4sYVX3HbhhKcKBvwk%2FqrSGX87SX%2FacnaZlydg8NCCYr2yRcJLQQMkWjBz1a7F3l%2BjG6U9l3okQSpAHp90J3KZkU1Ye7safYyYd%2Fx5KWP5Ga1OfToxCM3agK%2Bi9MPbzsIxaZAMBwN1hPjSiHH7xpEZsg92Gp5NQO%2B75snLsV5IWZKZCA4xymeNgl7hCFAgIjoAWyyE8FRIZsFkirO3yiR6UGeAH1%2FYPrMa0rpMrYQykAQi%2FtDoJzp8anq2d%2F%2BhAXZ%2FufMfH%2F0w2Nb7wAY6pgE%2FwearwbQWTYSKM0S%2F54ub1n5MRD2F9JaREMQFY14ds8ysKvaUuLj%2Bjw6Vh4d5mlAE3nvvs8yx1CUFwf1QlnJmIciXSulw7wBKf32iluc3e5Q0jAUVDl9%2Fryyr5GjvXA3TwPL8BDa0WgW1LdI1hS48Uo9SOXPx%2B4xC%2BEGe4Gdp8l9ph3U9aeKNW21%2FPakQRdh1SO1gkHxwDwHXyZKgzKr1Op%2Bh1Ral&X-Amz-Signature=751ba83bd9cffd40fa1e86dc39e1986873d7f18344b68f5742f28f88967ab064&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3INSMWT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICC6FE097yqyfPEXmewTXx4G752OUDput3m2aSrA5cekAiAUN%2Btphglu9JwH3N9f1btEGrs2NGnOkBNkNKKDwmVfHSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpOpGkOcZ%2FabDqji5KtwDm19kSOxkDVvRs3evwWcWlwPioj17R2HkrJ%2FEpVNrymD2CfNmM2b5Xd%2F3C%2BBzEL25G4rU8N%2BMMjS6pY0UtuKdaWppYW%2BRJIO9VW3EyQEy1kSde%2BT0P46BfIvSimPZkN0s%2BjEOaI0diOljRaYcZCf3uZX5Xls2iPiPlkavwANm8suTas0Y57COV6NPZVkRrEB8OtvpCH4FBbWt9o76HmBFtw%2FV46P%2F9ggf3eCs%2BX8DY8%2BFkB53BNYpIrhPU1Os4Nw7xM%2FrCds1B8abyLp7kxft1WFTCS3hVgoC%2FPH5VtXQhu6KDD%2ByBP2aQRNpd%2BFfYoOKXKCLpwVZjlsExsG2wYoFfnsheRIsogRTJ4Pu2VKHxwXltPtalSN4sYVX3HbhhKcKBvwk%2FqrSGX87SX%2FacnaZlydg8NCCYr2yRcJLQQMkWjBz1a7F3l%2BjG6U9l3okQSpAHp90J3KZkU1Ye7safYyYd%2Fx5KWP5Ga1OfToxCM3agK%2Bi9MPbzsIxaZAMBwN1hPjSiHH7xpEZsg92Gp5NQO%2B75snLsV5IWZKZCA4xymeNgl7hCFAgIjoAWyyE8FRIZsFkirO3yiR6UGeAH1%2FYPrMa0rpMrYQykAQi%2FtDoJzp8anq2d%2F%2BhAXZ%2FufMfH%2F0w2Nb7wAY6pgE%2FwearwbQWTYSKM0S%2F54ub1n5MRD2F9JaREMQFY14ds8ysKvaUuLj%2Bjw6Vh4d5mlAE3nvvs8yx1CUFwf1QlnJmIciXSulw7wBKf32iluc3e5Q0jAUVDl9%2Fryyr5GjvXA3TwPL8BDa0WgW1LdI1hS48Uo9SOXPx%2B4xC%2BEGe4Gdp8l9ph3U9aeKNW21%2FPakQRdh1SO1gkHxwDwHXyZKgzKr1Op%2Bh1Ral&X-Amz-Signature=2c539aee05271a71305161644eb8938bd69bd7448fb5b8517ea3d72bb4ebc8de&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3INSMWT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICC6FE097yqyfPEXmewTXx4G752OUDput3m2aSrA5cekAiAUN%2Btphglu9JwH3N9f1btEGrs2NGnOkBNkNKKDwmVfHSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpOpGkOcZ%2FabDqji5KtwDm19kSOxkDVvRs3evwWcWlwPioj17R2HkrJ%2FEpVNrymD2CfNmM2b5Xd%2F3C%2BBzEL25G4rU8N%2BMMjS6pY0UtuKdaWppYW%2BRJIO9VW3EyQEy1kSde%2BT0P46BfIvSimPZkN0s%2BjEOaI0diOljRaYcZCf3uZX5Xls2iPiPlkavwANm8suTas0Y57COV6NPZVkRrEB8OtvpCH4FBbWt9o76HmBFtw%2FV46P%2F9ggf3eCs%2BX8DY8%2BFkB53BNYpIrhPU1Os4Nw7xM%2FrCds1B8abyLp7kxft1WFTCS3hVgoC%2FPH5VtXQhu6KDD%2ByBP2aQRNpd%2BFfYoOKXKCLpwVZjlsExsG2wYoFfnsheRIsogRTJ4Pu2VKHxwXltPtalSN4sYVX3HbhhKcKBvwk%2FqrSGX87SX%2FacnaZlydg8NCCYr2yRcJLQQMkWjBz1a7F3l%2BjG6U9l3okQSpAHp90J3KZkU1Ye7safYyYd%2Fx5KWP5Ga1OfToxCM3agK%2Bi9MPbzsIxaZAMBwN1hPjSiHH7xpEZsg92Gp5NQO%2B75snLsV5IWZKZCA4xymeNgl7hCFAgIjoAWyyE8FRIZsFkirO3yiR6UGeAH1%2FYPrMa0rpMrYQykAQi%2FtDoJzp8anq2d%2F%2BhAXZ%2FufMfH%2F0w2Nb7wAY6pgE%2FwearwbQWTYSKM0S%2F54ub1n5MRD2F9JaREMQFY14ds8ysKvaUuLj%2Bjw6Vh4d5mlAE3nvvs8yx1CUFwf1QlnJmIciXSulw7wBKf32iluc3e5Q0jAUVDl9%2Fryyr5GjvXA3TwPL8BDa0WgW1LdI1hS48Uo9SOXPx%2B4xC%2BEGe4Gdp8l9ph3U9aeKNW21%2FPakQRdh1SO1gkHxwDwHXyZKgzKr1Op%2Bh1Ral&X-Amz-Signature=2be161acdd30a1d20586d0ffa2c6a64b1d8037cc4f285a13d5f03f29ee557951&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3INSMWT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICC6FE097yqyfPEXmewTXx4G752OUDput3m2aSrA5cekAiAUN%2Btphglu9JwH3N9f1btEGrs2NGnOkBNkNKKDwmVfHSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpOpGkOcZ%2FabDqji5KtwDm19kSOxkDVvRs3evwWcWlwPioj17R2HkrJ%2FEpVNrymD2CfNmM2b5Xd%2F3C%2BBzEL25G4rU8N%2BMMjS6pY0UtuKdaWppYW%2BRJIO9VW3EyQEy1kSde%2BT0P46BfIvSimPZkN0s%2BjEOaI0diOljRaYcZCf3uZX5Xls2iPiPlkavwANm8suTas0Y57COV6NPZVkRrEB8OtvpCH4FBbWt9o76HmBFtw%2FV46P%2F9ggf3eCs%2BX8DY8%2BFkB53BNYpIrhPU1Os4Nw7xM%2FrCds1B8abyLp7kxft1WFTCS3hVgoC%2FPH5VtXQhu6KDD%2ByBP2aQRNpd%2BFfYoOKXKCLpwVZjlsExsG2wYoFfnsheRIsogRTJ4Pu2VKHxwXltPtalSN4sYVX3HbhhKcKBvwk%2FqrSGX87SX%2FacnaZlydg8NCCYr2yRcJLQQMkWjBz1a7F3l%2BjG6U9l3okQSpAHp90J3KZkU1Ye7safYyYd%2Fx5KWP5Ga1OfToxCM3agK%2Bi9MPbzsIxaZAMBwN1hPjSiHH7xpEZsg92Gp5NQO%2B75snLsV5IWZKZCA4xymeNgl7hCFAgIjoAWyyE8FRIZsFkirO3yiR6UGeAH1%2FYPrMa0rpMrYQykAQi%2FtDoJzp8anq2d%2F%2BhAXZ%2FufMfH%2F0w2Nb7wAY6pgE%2FwearwbQWTYSKM0S%2F54ub1n5MRD2F9JaREMQFY14ds8ysKvaUuLj%2Bjw6Vh4d5mlAE3nvvs8yx1CUFwf1QlnJmIciXSulw7wBKf32iluc3e5Q0jAUVDl9%2Fryyr5GjvXA3TwPL8BDa0WgW1LdI1hS48Uo9SOXPx%2B4xC%2BEGe4Gdp8l9ph3U9aeKNW21%2FPakQRdh1SO1gkHxwDwHXyZKgzKr1Op%2Bh1Ral&X-Amz-Signature=380ee8541c0dc96de77897fa3889b15e6ad362901123e0bb25afa7e61d2ca278&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
