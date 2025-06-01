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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MEEFWQC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIErk5xNNyBuznok0GyOkqLW7OFTWDGjfkBDZGUu5ImTSAiEA7OqmjHxD3A3eGIXQlu%2BrsIX5Ypq1Np0kQu3EU8Sc63kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoweBkXBB86acx6WCrcA%2Fro4tCZ%2BFQLvMHsRqhxXl2uQs%2B%2BvUeWSC8WJg2l4%2BOanQwlMIR3Jy3D0041uAshAdZIGYviLdLAnNsGtjfgYNI7EO%2BYQK1%2FCJRqYuL5AnSeslTy8cCvG8iS8kCdcqsR8pxr6nd0pBa4fWAgQgD%2Fio028pJ%2BVoDSX0AfUPO3gfZljmoOcGChWotxeDSL9yo4dn2J1VXkkqrX2QucXKwZW2XvuE1JNLWeGPSd9%2Fk5roB7bGL%2BL0t9VGPK8ezlsi1KzCV1GmjAyLua3FgF7ka1sl2S40pvfgzHlWopwV7ilqMLYlnwFHLe1rzjUET4Wra8FQ4FeFmAg3Hk03ASi2fnVbfLQcIenYcUX7C2NMCHk%2Ft5q0bmaIgxtU5VDs7snnP34Y9ajJAt8E%2BR8hyjoM7MWAXU0sohIXrpngGShapmcotQW0%2BIRJa3LV7kPGuOn4efsTPhNTnaL4eg1J3UnefMiQBbhHpwe7aSLFjwYd805gHpE60CjWUaHdowZWiUaDu9xHpBMhhNwJsDspyVIGCsRIvMTPGWfD3we%2FrAYAvPfqns00EQdRMv0V96ayw2kJkWN0lqJqx6sqy4yFodHXU4niDdXanBRC7ielOFKEFKnFB87POAvr4PI4elhjurMNWC8MEGOqUBHM5b8DG2h7p4zA1CetSC%2BcoQWJEn3i2de0aOWaKwdaR6xnKPt3YOJYTxQwaiI8mK9d3q3n1LQXEIpl5twb2I5kSzejt5ehMX5VsFnfkXklD4ce%2BK71Fq0E%2FjpzdwZHgMw50KzEPG8maiZUa4S7sRU1AyArsu52%2FWHtTpvhCppofc%2F0MKUF7RxjMZ%2FDdhA8cB2nUAbAiwO6sF9jCZOHlQj%2BDFbQdT&X-Amz-Signature=8a18844af1a6b5d37c93d2f8eabb67181d09b4d442fed824bca59834c570c3db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MEEFWQC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIErk5xNNyBuznok0GyOkqLW7OFTWDGjfkBDZGUu5ImTSAiEA7OqmjHxD3A3eGIXQlu%2BrsIX5Ypq1Np0kQu3EU8Sc63kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoweBkXBB86acx6WCrcA%2Fro4tCZ%2BFQLvMHsRqhxXl2uQs%2B%2BvUeWSC8WJg2l4%2BOanQwlMIR3Jy3D0041uAshAdZIGYviLdLAnNsGtjfgYNI7EO%2BYQK1%2FCJRqYuL5AnSeslTy8cCvG8iS8kCdcqsR8pxr6nd0pBa4fWAgQgD%2Fio028pJ%2BVoDSX0AfUPO3gfZljmoOcGChWotxeDSL9yo4dn2J1VXkkqrX2QucXKwZW2XvuE1JNLWeGPSd9%2Fk5roB7bGL%2BL0t9VGPK8ezlsi1KzCV1GmjAyLua3FgF7ka1sl2S40pvfgzHlWopwV7ilqMLYlnwFHLe1rzjUET4Wra8FQ4FeFmAg3Hk03ASi2fnVbfLQcIenYcUX7C2NMCHk%2Ft5q0bmaIgxtU5VDs7snnP34Y9ajJAt8E%2BR8hyjoM7MWAXU0sohIXrpngGShapmcotQW0%2BIRJa3LV7kPGuOn4efsTPhNTnaL4eg1J3UnefMiQBbhHpwe7aSLFjwYd805gHpE60CjWUaHdowZWiUaDu9xHpBMhhNwJsDspyVIGCsRIvMTPGWfD3we%2FrAYAvPfqns00EQdRMv0V96ayw2kJkWN0lqJqx6sqy4yFodHXU4niDdXanBRC7ielOFKEFKnFB87POAvr4PI4elhjurMNWC8MEGOqUBHM5b8DG2h7p4zA1CetSC%2BcoQWJEn3i2de0aOWaKwdaR6xnKPt3YOJYTxQwaiI8mK9d3q3n1LQXEIpl5twb2I5kSzejt5ehMX5VsFnfkXklD4ce%2BK71Fq0E%2FjpzdwZHgMw50KzEPG8maiZUa4S7sRU1AyArsu52%2FWHtTpvhCppofc%2F0MKUF7RxjMZ%2FDdhA8cB2nUAbAiwO6sF9jCZOHlQj%2BDFbQdT&X-Amz-Signature=ee89291ef782419c9dde10545785ff701d25f4854c46a0c800d39c620f78e04d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MEEFWQC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIErk5xNNyBuznok0GyOkqLW7OFTWDGjfkBDZGUu5ImTSAiEA7OqmjHxD3A3eGIXQlu%2BrsIX5Ypq1Np0kQu3EU8Sc63kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoweBkXBB86acx6WCrcA%2Fro4tCZ%2BFQLvMHsRqhxXl2uQs%2B%2BvUeWSC8WJg2l4%2BOanQwlMIR3Jy3D0041uAshAdZIGYviLdLAnNsGtjfgYNI7EO%2BYQK1%2FCJRqYuL5AnSeslTy8cCvG8iS8kCdcqsR8pxr6nd0pBa4fWAgQgD%2Fio028pJ%2BVoDSX0AfUPO3gfZljmoOcGChWotxeDSL9yo4dn2J1VXkkqrX2QucXKwZW2XvuE1JNLWeGPSd9%2Fk5roB7bGL%2BL0t9VGPK8ezlsi1KzCV1GmjAyLua3FgF7ka1sl2S40pvfgzHlWopwV7ilqMLYlnwFHLe1rzjUET4Wra8FQ4FeFmAg3Hk03ASi2fnVbfLQcIenYcUX7C2NMCHk%2Ft5q0bmaIgxtU5VDs7snnP34Y9ajJAt8E%2BR8hyjoM7MWAXU0sohIXrpngGShapmcotQW0%2BIRJa3LV7kPGuOn4efsTPhNTnaL4eg1J3UnefMiQBbhHpwe7aSLFjwYd805gHpE60CjWUaHdowZWiUaDu9xHpBMhhNwJsDspyVIGCsRIvMTPGWfD3we%2FrAYAvPfqns00EQdRMv0V96ayw2kJkWN0lqJqx6sqy4yFodHXU4niDdXanBRC7ielOFKEFKnFB87POAvr4PI4elhjurMNWC8MEGOqUBHM5b8DG2h7p4zA1CetSC%2BcoQWJEn3i2de0aOWaKwdaR6xnKPt3YOJYTxQwaiI8mK9d3q3n1LQXEIpl5twb2I5kSzejt5ehMX5VsFnfkXklD4ce%2BK71Fq0E%2FjpzdwZHgMw50KzEPG8maiZUa4S7sRU1AyArsu52%2FWHtTpvhCppofc%2F0MKUF7RxjMZ%2FDdhA8cB2nUAbAiwO6sF9jCZOHlQj%2BDFbQdT&X-Amz-Signature=503d9a754b86e8d97b80059634549c5329c124f5b5219487ef07ecdc3236742a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MEEFWQC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIErk5xNNyBuznok0GyOkqLW7OFTWDGjfkBDZGUu5ImTSAiEA7OqmjHxD3A3eGIXQlu%2BrsIX5Ypq1Np0kQu3EU8Sc63kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoweBkXBB86acx6WCrcA%2Fro4tCZ%2BFQLvMHsRqhxXl2uQs%2B%2BvUeWSC8WJg2l4%2BOanQwlMIR3Jy3D0041uAshAdZIGYviLdLAnNsGtjfgYNI7EO%2BYQK1%2FCJRqYuL5AnSeslTy8cCvG8iS8kCdcqsR8pxr6nd0pBa4fWAgQgD%2Fio028pJ%2BVoDSX0AfUPO3gfZljmoOcGChWotxeDSL9yo4dn2J1VXkkqrX2QucXKwZW2XvuE1JNLWeGPSd9%2Fk5roB7bGL%2BL0t9VGPK8ezlsi1KzCV1GmjAyLua3FgF7ka1sl2S40pvfgzHlWopwV7ilqMLYlnwFHLe1rzjUET4Wra8FQ4FeFmAg3Hk03ASi2fnVbfLQcIenYcUX7C2NMCHk%2Ft5q0bmaIgxtU5VDs7snnP34Y9ajJAt8E%2BR8hyjoM7MWAXU0sohIXrpngGShapmcotQW0%2BIRJa3LV7kPGuOn4efsTPhNTnaL4eg1J3UnefMiQBbhHpwe7aSLFjwYd805gHpE60CjWUaHdowZWiUaDu9xHpBMhhNwJsDspyVIGCsRIvMTPGWfD3we%2FrAYAvPfqns00EQdRMv0V96ayw2kJkWN0lqJqx6sqy4yFodHXU4niDdXanBRC7ielOFKEFKnFB87POAvr4PI4elhjurMNWC8MEGOqUBHM5b8DG2h7p4zA1CetSC%2BcoQWJEn3i2de0aOWaKwdaR6xnKPt3YOJYTxQwaiI8mK9d3q3n1LQXEIpl5twb2I5kSzejt5ehMX5VsFnfkXklD4ce%2BK71Fq0E%2FjpzdwZHgMw50KzEPG8maiZUa4S7sRU1AyArsu52%2FWHtTpvhCppofc%2F0MKUF7RxjMZ%2FDdhA8cB2nUAbAiwO6sF9jCZOHlQj%2BDFbQdT&X-Amz-Signature=1a3d73dcc221e095c6d9e6aa4837e71a4ea1f6e32f150b37862b234c8032ac69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MEEFWQC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIErk5xNNyBuznok0GyOkqLW7OFTWDGjfkBDZGUu5ImTSAiEA7OqmjHxD3A3eGIXQlu%2BrsIX5Ypq1Np0kQu3EU8Sc63kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoweBkXBB86acx6WCrcA%2Fro4tCZ%2BFQLvMHsRqhxXl2uQs%2B%2BvUeWSC8WJg2l4%2BOanQwlMIR3Jy3D0041uAshAdZIGYviLdLAnNsGtjfgYNI7EO%2BYQK1%2FCJRqYuL5AnSeslTy8cCvG8iS8kCdcqsR8pxr6nd0pBa4fWAgQgD%2Fio028pJ%2BVoDSX0AfUPO3gfZljmoOcGChWotxeDSL9yo4dn2J1VXkkqrX2QucXKwZW2XvuE1JNLWeGPSd9%2Fk5roB7bGL%2BL0t9VGPK8ezlsi1KzCV1GmjAyLua3FgF7ka1sl2S40pvfgzHlWopwV7ilqMLYlnwFHLe1rzjUET4Wra8FQ4FeFmAg3Hk03ASi2fnVbfLQcIenYcUX7C2NMCHk%2Ft5q0bmaIgxtU5VDs7snnP34Y9ajJAt8E%2BR8hyjoM7MWAXU0sohIXrpngGShapmcotQW0%2BIRJa3LV7kPGuOn4efsTPhNTnaL4eg1J3UnefMiQBbhHpwe7aSLFjwYd805gHpE60CjWUaHdowZWiUaDu9xHpBMhhNwJsDspyVIGCsRIvMTPGWfD3we%2FrAYAvPfqns00EQdRMv0V96ayw2kJkWN0lqJqx6sqy4yFodHXU4niDdXanBRC7ielOFKEFKnFB87POAvr4PI4elhjurMNWC8MEGOqUBHM5b8DG2h7p4zA1CetSC%2BcoQWJEn3i2de0aOWaKwdaR6xnKPt3YOJYTxQwaiI8mK9d3q3n1LQXEIpl5twb2I5kSzejt5ehMX5VsFnfkXklD4ce%2BK71Fq0E%2FjpzdwZHgMw50KzEPG8maiZUa4S7sRU1AyArsu52%2FWHtTpvhCppofc%2F0MKUF7RxjMZ%2FDdhA8cB2nUAbAiwO6sF9jCZOHlQj%2BDFbQdT&X-Amz-Signature=af6d1f341f66b22cdd52379fea6aa5f74a1a43e5e8c62bba57d0500c5d2780fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
