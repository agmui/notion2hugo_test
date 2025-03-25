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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBP2GY56%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDGxm0lCoc9lIXP2j6upif1GuQx3LpCVOJAjQF8lrIqAiEA2OmlF3ZEvEYplVza%2FAn1RN13tT9OxCoFaWIBE41VvMkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8hx9VBvaTwvy5zxSrcA%2BwOzQ1XPzM%2BIqm5Exf2ot7yEOtU47rs2V5splLM18d0xhhTIrkjDAhSkpl8z6TbVOfCqK9rSd0U4%2BGkebeEF4yDdMKFhtYzxyK9E0FSCD%2B8quFJcDuDFneYLbD2WeE%2By5hHy7KzoLnVGjHrVOExOKRqG9BbBvQ%2FLPAVh9qjSgqCI2D5C7YA%2BmI9DTvW6aC%2FBRs0RWCCchpgI3rBbdd3h3Ro5v%2BQvmWnISfGe2rmU6f69L6R584DVAPqq8uUCT9jPnvaXlaNg%2Bby5tAjg8mDEtZBwzsu77yH8Ev0JB0SiNd9q0xYJqWBK8C7Ea6PERVOusTAbcouGclay8bkn%2FGSD6p8k60F6mcqncIZApJuan%2BzZKmB9lUSxXM2oCb2F%2BhBYchSTTgPI%2B6yn%2BfGnvZMHJ5kndDQgaCAptHdl%2BgxEeEVj2gT8CPuzjsjKc2jjWMbhazA29yYc%2BgRqCtDBb4k7Gx50rFC0lpmXfERPuINKxRvg9KC0X0%2BjbuVX%2FBwHpDdHBGptRRqAXv%2FPmLQhyUqIcalHlXoeu9j%2B6wUPy8SmE%2FdL7cgQX6V%2F3Aq2UDPYOm2HYssQwKpP3KKt1or765TgoNGOT67S82%2BBP4ka0h%2FCnAL3OD%2FAzrIWFA5UTwfMJmOib8GOqUB8dwGRoFLG%2BM%2FK5XtgFg7%2Fl%2BrpFSUb5exN5oNc3S1M3GFWNBQRyZ1InPU9nt1UNaSIXjOKYBFTpfDaCcCyy9uZGShNnwZmCQMCatq45tF5P%2BYE3XJ3tafAtblIjOiYAhrrGoUkfR6npno%2FQSsxp9eGQ8EhAS%2B6oMADHnfEES3CwIRH9R%2FD23wqOAfAWEa3u1q960AAkv1SjMtkgM12cH2QdpsIXoi&X-Amz-Signature=0c8eb458b2657f75e53e88b49d882ba5540e444c325908c2f0566e8237a2a7a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBP2GY56%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDGxm0lCoc9lIXP2j6upif1GuQx3LpCVOJAjQF8lrIqAiEA2OmlF3ZEvEYplVza%2FAn1RN13tT9OxCoFaWIBE41VvMkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8hx9VBvaTwvy5zxSrcA%2BwOzQ1XPzM%2BIqm5Exf2ot7yEOtU47rs2V5splLM18d0xhhTIrkjDAhSkpl8z6TbVOfCqK9rSd0U4%2BGkebeEF4yDdMKFhtYzxyK9E0FSCD%2B8quFJcDuDFneYLbD2WeE%2By5hHy7KzoLnVGjHrVOExOKRqG9BbBvQ%2FLPAVh9qjSgqCI2D5C7YA%2BmI9DTvW6aC%2FBRs0RWCCchpgI3rBbdd3h3Ro5v%2BQvmWnISfGe2rmU6f69L6R584DVAPqq8uUCT9jPnvaXlaNg%2Bby5tAjg8mDEtZBwzsu77yH8Ev0JB0SiNd9q0xYJqWBK8C7Ea6PERVOusTAbcouGclay8bkn%2FGSD6p8k60F6mcqncIZApJuan%2BzZKmB9lUSxXM2oCb2F%2BhBYchSTTgPI%2B6yn%2BfGnvZMHJ5kndDQgaCAptHdl%2BgxEeEVj2gT8CPuzjsjKc2jjWMbhazA29yYc%2BgRqCtDBb4k7Gx50rFC0lpmXfERPuINKxRvg9KC0X0%2BjbuVX%2FBwHpDdHBGptRRqAXv%2FPmLQhyUqIcalHlXoeu9j%2B6wUPy8SmE%2FdL7cgQX6V%2F3Aq2UDPYOm2HYssQwKpP3KKt1or765TgoNGOT67S82%2BBP4ka0h%2FCnAL3OD%2FAzrIWFA5UTwfMJmOib8GOqUB8dwGRoFLG%2BM%2FK5XtgFg7%2Fl%2BrpFSUb5exN5oNc3S1M3GFWNBQRyZ1InPU9nt1UNaSIXjOKYBFTpfDaCcCyy9uZGShNnwZmCQMCatq45tF5P%2BYE3XJ3tafAtblIjOiYAhrrGoUkfR6npno%2FQSsxp9eGQ8EhAS%2B6oMADHnfEES3CwIRH9R%2FD23wqOAfAWEa3u1q960AAkv1SjMtkgM12cH2QdpsIXoi&X-Amz-Signature=e5fb2e713481219691e72e157dcca1b0f194c36fd7d5b1754ee1007844d4b463&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBP2GY56%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDGxm0lCoc9lIXP2j6upif1GuQx3LpCVOJAjQF8lrIqAiEA2OmlF3ZEvEYplVza%2FAn1RN13tT9OxCoFaWIBE41VvMkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8hx9VBvaTwvy5zxSrcA%2BwOzQ1XPzM%2BIqm5Exf2ot7yEOtU47rs2V5splLM18d0xhhTIrkjDAhSkpl8z6TbVOfCqK9rSd0U4%2BGkebeEF4yDdMKFhtYzxyK9E0FSCD%2B8quFJcDuDFneYLbD2WeE%2By5hHy7KzoLnVGjHrVOExOKRqG9BbBvQ%2FLPAVh9qjSgqCI2D5C7YA%2BmI9DTvW6aC%2FBRs0RWCCchpgI3rBbdd3h3Ro5v%2BQvmWnISfGe2rmU6f69L6R584DVAPqq8uUCT9jPnvaXlaNg%2Bby5tAjg8mDEtZBwzsu77yH8Ev0JB0SiNd9q0xYJqWBK8C7Ea6PERVOusTAbcouGclay8bkn%2FGSD6p8k60F6mcqncIZApJuan%2BzZKmB9lUSxXM2oCb2F%2BhBYchSTTgPI%2B6yn%2BfGnvZMHJ5kndDQgaCAptHdl%2BgxEeEVj2gT8CPuzjsjKc2jjWMbhazA29yYc%2BgRqCtDBb4k7Gx50rFC0lpmXfERPuINKxRvg9KC0X0%2BjbuVX%2FBwHpDdHBGptRRqAXv%2FPmLQhyUqIcalHlXoeu9j%2B6wUPy8SmE%2FdL7cgQX6V%2F3Aq2UDPYOm2HYssQwKpP3KKt1or765TgoNGOT67S82%2BBP4ka0h%2FCnAL3OD%2FAzrIWFA5UTwfMJmOib8GOqUB8dwGRoFLG%2BM%2FK5XtgFg7%2Fl%2BrpFSUb5exN5oNc3S1M3GFWNBQRyZ1InPU9nt1UNaSIXjOKYBFTpfDaCcCyy9uZGShNnwZmCQMCatq45tF5P%2BYE3XJ3tafAtblIjOiYAhrrGoUkfR6npno%2FQSsxp9eGQ8EhAS%2B6oMADHnfEES3CwIRH9R%2FD23wqOAfAWEa3u1q960AAkv1SjMtkgM12cH2QdpsIXoi&X-Amz-Signature=5083213e12df2094082d92299722d29756e23d68b000d8c79cb66f1952ef6da3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBP2GY56%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDGxm0lCoc9lIXP2j6upif1GuQx3LpCVOJAjQF8lrIqAiEA2OmlF3ZEvEYplVza%2FAn1RN13tT9OxCoFaWIBE41VvMkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8hx9VBvaTwvy5zxSrcA%2BwOzQ1XPzM%2BIqm5Exf2ot7yEOtU47rs2V5splLM18d0xhhTIrkjDAhSkpl8z6TbVOfCqK9rSd0U4%2BGkebeEF4yDdMKFhtYzxyK9E0FSCD%2B8quFJcDuDFneYLbD2WeE%2By5hHy7KzoLnVGjHrVOExOKRqG9BbBvQ%2FLPAVh9qjSgqCI2D5C7YA%2BmI9DTvW6aC%2FBRs0RWCCchpgI3rBbdd3h3Ro5v%2BQvmWnISfGe2rmU6f69L6R584DVAPqq8uUCT9jPnvaXlaNg%2Bby5tAjg8mDEtZBwzsu77yH8Ev0JB0SiNd9q0xYJqWBK8C7Ea6PERVOusTAbcouGclay8bkn%2FGSD6p8k60F6mcqncIZApJuan%2BzZKmB9lUSxXM2oCb2F%2BhBYchSTTgPI%2B6yn%2BfGnvZMHJ5kndDQgaCAptHdl%2BgxEeEVj2gT8CPuzjsjKc2jjWMbhazA29yYc%2BgRqCtDBb4k7Gx50rFC0lpmXfERPuINKxRvg9KC0X0%2BjbuVX%2FBwHpDdHBGptRRqAXv%2FPmLQhyUqIcalHlXoeu9j%2B6wUPy8SmE%2FdL7cgQX6V%2F3Aq2UDPYOm2HYssQwKpP3KKt1or765TgoNGOT67S82%2BBP4ka0h%2FCnAL3OD%2FAzrIWFA5UTwfMJmOib8GOqUB8dwGRoFLG%2BM%2FK5XtgFg7%2Fl%2BrpFSUb5exN5oNc3S1M3GFWNBQRyZ1InPU9nt1UNaSIXjOKYBFTpfDaCcCyy9uZGShNnwZmCQMCatq45tF5P%2BYE3XJ3tafAtblIjOiYAhrrGoUkfR6npno%2FQSsxp9eGQ8EhAS%2B6oMADHnfEES3CwIRH9R%2FD23wqOAfAWEa3u1q960AAkv1SjMtkgM12cH2QdpsIXoi&X-Amz-Signature=3a5cefe59b9a46892bcef630b7f3af59b3203f1d06019425a5046492b5c79956&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBP2GY56%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDGxm0lCoc9lIXP2j6upif1GuQx3LpCVOJAjQF8lrIqAiEA2OmlF3ZEvEYplVza%2FAn1RN13tT9OxCoFaWIBE41VvMkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8hx9VBvaTwvy5zxSrcA%2BwOzQ1XPzM%2BIqm5Exf2ot7yEOtU47rs2V5splLM18d0xhhTIrkjDAhSkpl8z6TbVOfCqK9rSd0U4%2BGkebeEF4yDdMKFhtYzxyK9E0FSCD%2B8quFJcDuDFneYLbD2WeE%2By5hHy7KzoLnVGjHrVOExOKRqG9BbBvQ%2FLPAVh9qjSgqCI2D5C7YA%2BmI9DTvW6aC%2FBRs0RWCCchpgI3rBbdd3h3Ro5v%2BQvmWnISfGe2rmU6f69L6R584DVAPqq8uUCT9jPnvaXlaNg%2Bby5tAjg8mDEtZBwzsu77yH8Ev0JB0SiNd9q0xYJqWBK8C7Ea6PERVOusTAbcouGclay8bkn%2FGSD6p8k60F6mcqncIZApJuan%2BzZKmB9lUSxXM2oCb2F%2BhBYchSTTgPI%2B6yn%2BfGnvZMHJ5kndDQgaCAptHdl%2BgxEeEVj2gT8CPuzjsjKc2jjWMbhazA29yYc%2BgRqCtDBb4k7Gx50rFC0lpmXfERPuINKxRvg9KC0X0%2BjbuVX%2FBwHpDdHBGptRRqAXv%2FPmLQhyUqIcalHlXoeu9j%2B6wUPy8SmE%2FdL7cgQX6V%2F3Aq2UDPYOm2HYssQwKpP3KKt1or765TgoNGOT67S82%2BBP4ka0h%2FCnAL3OD%2FAzrIWFA5UTwfMJmOib8GOqUB8dwGRoFLG%2BM%2FK5XtgFg7%2Fl%2BrpFSUb5exN5oNc3S1M3GFWNBQRyZ1InPU9nt1UNaSIXjOKYBFTpfDaCcCyy9uZGShNnwZmCQMCatq45tF5P%2BYE3XJ3tafAtblIjOiYAhrrGoUkfR6npno%2FQSsxp9eGQ8EhAS%2B6oMADHnfEES3CwIRH9R%2FD23wqOAfAWEa3u1q960AAkv1SjMtkgM12cH2QdpsIXoi&X-Amz-Signature=fef2983b661d47db541443e9a1c8f8416d47b58548fc56685ecc623cb4acd136&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
