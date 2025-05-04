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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6LVLTS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDX6zx%2FKtuMEBk0AAbXQznscTIP8t73S%2FIT9w%2FgP4kGBAiEArdwR1a1TNgnpCcp2A62whqL9z2FPbtRCjFBNPn2reEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFtdCLBn8pfNCHS6GircA%2FbstxB0XGD2%2Bb2s4AGC5FRRckmdWHqm9vvpeRwuobEIWrRMlXN7jEU6R02DQY1vnGfryd9RkAmCgzXSq3LEn3NlzLdMIZak2fshwttOjhEM1WTHzA4A5FG3K%2FDGFTatinopPf5GE2LyEXlgpzjI0OeUPX5qeK5DDY4VEx%2F57tXTGGcixUMb4tx9B8uwliHIEIJuwP3NV0lU%2B18IMu2BnQNjRhyvljxUpSh8bnOzIdJz9u9m41LKWXn1WTRodpYS3FOGiklP58GxdayD%2FxgLmUzL3Xz91LvXhBvZsGLxvOS7TqX2Wtc47IMxeSGILnnlMX%2FFjkKaP7AjC8V2yA6sG8uEj49mzbgWjozQBhDrOl78%2B0Wm57rcLEjF%2BDUmo0M2eSM3YpgeGyXTwzefSwS6%2BeMdzac0MbsT5rf1FQVhuqatijim7Q5%2BUoUoAwIJ5n%2B%2BJm68hnO%2FkB7gpCSYShGXoMApwyc8GwEcNWYdTjY%2BYcxRwoTeodNWqxjjH%2FUgGx96yncCiGoUBUqDJECNLe4%2Fh1fb%2F%2BlmZf8p5wfl5zGQgT1adzwokEO9RtjuAhZCPiGBkTA07AovxGRAMh6qO97p%2BVIKvWftz%2FyT9WXVtXf2XCCM4FU7LyNv8ltiSyYlMLqs38AGOqUBzZv0PEw62u9oPhBWztiZX3qEeXoq9efhxSqAzaMvp8bu9sJUZp3GL4wjEUEiKP%2FVMG6l0hKI1dEWCbe7bCwcbMB%2BDcSIV3D4pMNLreTSPl6oo%2B677BoQsgYEliIOnIrGs2S8xHJJ9XAOHXjTFWMEHk74AklPrI9DJEHgC8Ab5ZvqejmFgDa%2BBq7SwQZlk%2FReZcEETVKbUfe5yTHKRGC1AhDK2lAT&X-Amz-Signature=73ecb31fae14501bb9c146f6c5db85e7780673b74361bc4ef09074f8cf202e75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6LVLTS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDX6zx%2FKtuMEBk0AAbXQznscTIP8t73S%2FIT9w%2FgP4kGBAiEArdwR1a1TNgnpCcp2A62whqL9z2FPbtRCjFBNPn2reEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFtdCLBn8pfNCHS6GircA%2FbstxB0XGD2%2Bb2s4AGC5FRRckmdWHqm9vvpeRwuobEIWrRMlXN7jEU6R02DQY1vnGfryd9RkAmCgzXSq3LEn3NlzLdMIZak2fshwttOjhEM1WTHzA4A5FG3K%2FDGFTatinopPf5GE2LyEXlgpzjI0OeUPX5qeK5DDY4VEx%2F57tXTGGcixUMb4tx9B8uwliHIEIJuwP3NV0lU%2B18IMu2BnQNjRhyvljxUpSh8bnOzIdJz9u9m41LKWXn1WTRodpYS3FOGiklP58GxdayD%2FxgLmUzL3Xz91LvXhBvZsGLxvOS7TqX2Wtc47IMxeSGILnnlMX%2FFjkKaP7AjC8V2yA6sG8uEj49mzbgWjozQBhDrOl78%2B0Wm57rcLEjF%2BDUmo0M2eSM3YpgeGyXTwzefSwS6%2BeMdzac0MbsT5rf1FQVhuqatijim7Q5%2BUoUoAwIJ5n%2B%2BJm68hnO%2FkB7gpCSYShGXoMApwyc8GwEcNWYdTjY%2BYcxRwoTeodNWqxjjH%2FUgGx96yncCiGoUBUqDJECNLe4%2Fh1fb%2F%2BlmZf8p5wfl5zGQgT1adzwokEO9RtjuAhZCPiGBkTA07AovxGRAMh6qO97p%2BVIKvWftz%2FyT9WXVtXf2XCCM4FU7LyNv8ltiSyYlMLqs38AGOqUBzZv0PEw62u9oPhBWztiZX3qEeXoq9efhxSqAzaMvp8bu9sJUZp3GL4wjEUEiKP%2FVMG6l0hKI1dEWCbe7bCwcbMB%2BDcSIV3D4pMNLreTSPl6oo%2B677BoQsgYEliIOnIrGs2S8xHJJ9XAOHXjTFWMEHk74AklPrI9DJEHgC8Ab5ZvqejmFgDa%2BBq7SwQZlk%2FReZcEETVKbUfe5yTHKRGC1AhDK2lAT&X-Amz-Signature=c0a309412678eca1b2d798ca8c2d6885110e764812fe270fe6e13be835fcc8af&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6LVLTS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDX6zx%2FKtuMEBk0AAbXQznscTIP8t73S%2FIT9w%2FgP4kGBAiEArdwR1a1TNgnpCcp2A62whqL9z2FPbtRCjFBNPn2reEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFtdCLBn8pfNCHS6GircA%2FbstxB0XGD2%2Bb2s4AGC5FRRckmdWHqm9vvpeRwuobEIWrRMlXN7jEU6R02DQY1vnGfryd9RkAmCgzXSq3LEn3NlzLdMIZak2fshwttOjhEM1WTHzA4A5FG3K%2FDGFTatinopPf5GE2LyEXlgpzjI0OeUPX5qeK5DDY4VEx%2F57tXTGGcixUMb4tx9B8uwliHIEIJuwP3NV0lU%2B18IMu2BnQNjRhyvljxUpSh8bnOzIdJz9u9m41LKWXn1WTRodpYS3FOGiklP58GxdayD%2FxgLmUzL3Xz91LvXhBvZsGLxvOS7TqX2Wtc47IMxeSGILnnlMX%2FFjkKaP7AjC8V2yA6sG8uEj49mzbgWjozQBhDrOl78%2B0Wm57rcLEjF%2BDUmo0M2eSM3YpgeGyXTwzefSwS6%2BeMdzac0MbsT5rf1FQVhuqatijim7Q5%2BUoUoAwIJ5n%2B%2BJm68hnO%2FkB7gpCSYShGXoMApwyc8GwEcNWYdTjY%2BYcxRwoTeodNWqxjjH%2FUgGx96yncCiGoUBUqDJECNLe4%2Fh1fb%2F%2BlmZf8p5wfl5zGQgT1adzwokEO9RtjuAhZCPiGBkTA07AovxGRAMh6qO97p%2BVIKvWftz%2FyT9WXVtXf2XCCM4FU7LyNv8ltiSyYlMLqs38AGOqUBzZv0PEw62u9oPhBWztiZX3qEeXoq9efhxSqAzaMvp8bu9sJUZp3GL4wjEUEiKP%2FVMG6l0hKI1dEWCbe7bCwcbMB%2BDcSIV3D4pMNLreTSPl6oo%2B677BoQsgYEliIOnIrGs2S8xHJJ9XAOHXjTFWMEHk74AklPrI9DJEHgC8Ab5ZvqejmFgDa%2BBq7SwQZlk%2FReZcEETVKbUfe5yTHKRGC1AhDK2lAT&X-Amz-Signature=06abbd8ab9323b1ff409c7bccbd0add3305b6de65b57936d5f79a20bfebb4255&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6LVLTS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDX6zx%2FKtuMEBk0AAbXQznscTIP8t73S%2FIT9w%2FgP4kGBAiEArdwR1a1TNgnpCcp2A62whqL9z2FPbtRCjFBNPn2reEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFtdCLBn8pfNCHS6GircA%2FbstxB0XGD2%2Bb2s4AGC5FRRckmdWHqm9vvpeRwuobEIWrRMlXN7jEU6R02DQY1vnGfryd9RkAmCgzXSq3LEn3NlzLdMIZak2fshwttOjhEM1WTHzA4A5FG3K%2FDGFTatinopPf5GE2LyEXlgpzjI0OeUPX5qeK5DDY4VEx%2F57tXTGGcixUMb4tx9B8uwliHIEIJuwP3NV0lU%2B18IMu2BnQNjRhyvljxUpSh8bnOzIdJz9u9m41LKWXn1WTRodpYS3FOGiklP58GxdayD%2FxgLmUzL3Xz91LvXhBvZsGLxvOS7TqX2Wtc47IMxeSGILnnlMX%2FFjkKaP7AjC8V2yA6sG8uEj49mzbgWjozQBhDrOl78%2B0Wm57rcLEjF%2BDUmo0M2eSM3YpgeGyXTwzefSwS6%2BeMdzac0MbsT5rf1FQVhuqatijim7Q5%2BUoUoAwIJ5n%2B%2BJm68hnO%2FkB7gpCSYShGXoMApwyc8GwEcNWYdTjY%2BYcxRwoTeodNWqxjjH%2FUgGx96yncCiGoUBUqDJECNLe4%2Fh1fb%2F%2BlmZf8p5wfl5zGQgT1adzwokEO9RtjuAhZCPiGBkTA07AovxGRAMh6qO97p%2BVIKvWftz%2FyT9WXVtXf2XCCM4FU7LyNv8ltiSyYlMLqs38AGOqUBzZv0PEw62u9oPhBWztiZX3qEeXoq9efhxSqAzaMvp8bu9sJUZp3GL4wjEUEiKP%2FVMG6l0hKI1dEWCbe7bCwcbMB%2BDcSIV3D4pMNLreTSPl6oo%2B677BoQsgYEliIOnIrGs2S8xHJJ9XAOHXjTFWMEHk74AklPrI9DJEHgC8Ab5ZvqejmFgDa%2BBq7SwQZlk%2FReZcEETVKbUfe5yTHKRGC1AhDK2lAT&X-Amz-Signature=bfddd7ea7df723f3fec6c26322f5910ba6f1fd00ae30b93b51ed29088f8b68a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6LVLTS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDX6zx%2FKtuMEBk0AAbXQznscTIP8t73S%2FIT9w%2FgP4kGBAiEArdwR1a1TNgnpCcp2A62whqL9z2FPbtRCjFBNPn2reEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFtdCLBn8pfNCHS6GircA%2FbstxB0XGD2%2Bb2s4AGC5FRRckmdWHqm9vvpeRwuobEIWrRMlXN7jEU6R02DQY1vnGfryd9RkAmCgzXSq3LEn3NlzLdMIZak2fshwttOjhEM1WTHzA4A5FG3K%2FDGFTatinopPf5GE2LyEXlgpzjI0OeUPX5qeK5DDY4VEx%2F57tXTGGcixUMb4tx9B8uwliHIEIJuwP3NV0lU%2B18IMu2BnQNjRhyvljxUpSh8bnOzIdJz9u9m41LKWXn1WTRodpYS3FOGiklP58GxdayD%2FxgLmUzL3Xz91LvXhBvZsGLxvOS7TqX2Wtc47IMxeSGILnnlMX%2FFjkKaP7AjC8V2yA6sG8uEj49mzbgWjozQBhDrOl78%2B0Wm57rcLEjF%2BDUmo0M2eSM3YpgeGyXTwzefSwS6%2BeMdzac0MbsT5rf1FQVhuqatijim7Q5%2BUoUoAwIJ5n%2B%2BJm68hnO%2FkB7gpCSYShGXoMApwyc8GwEcNWYdTjY%2BYcxRwoTeodNWqxjjH%2FUgGx96yncCiGoUBUqDJECNLe4%2Fh1fb%2F%2BlmZf8p5wfl5zGQgT1adzwokEO9RtjuAhZCPiGBkTA07AovxGRAMh6qO97p%2BVIKvWftz%2FyT9WXVtXf2XCCM4FU7LyNv8ltiSyYlMLqs38AGOqUBzZv0PEw62u9oPhBWztiZX3qEeXoq9efhxSqAzaMvp8bu9sJUZp3GL4wjEUEiKP%2FVMG6l0hKI1dEWCbe7bCwcbMB%2BDcSIV3D4pMNLreTSPl6oo%2B677BoQsgYEliIOnIrGs2S8xHJJ9XAOHXjTFWMEHk74AklPrI9DJEHgC8Ab5ZvqejmFgDa%2BBq7SwQZlk%2FReZcEETVKbUfe5yTHKRGC1AhDK2lAT&X-Amz-Signature=eea7e2facfd908414bb7549110f85c134bd8b0c70f246008c92b781d30d074d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
