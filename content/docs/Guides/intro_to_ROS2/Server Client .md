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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A2DE6PJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGAmcfRYoCzzjG0Y%2Fp%2BhAw9QFkHMT7jbFkII7jGAOI%2BiAiEAxO12fuEHPTrpxVNILD7%2FqAufk76rLKzx9udKl8BRy6EqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCBR16Fea1VybsSUyrcA377j7fYkK70fwurtYKwoUmeoLyy6knI1XrzUjkHSWd3LqEcqRr8r54zhx4cORDUBQ9ke047Rt9YW1P8tPefuFdzVV%2FtsxuqyMqgGYAf54%2By0B27nvSoTdbkCdZChLCHJ%2BOgNg8v4oSCBZ24eFiqbzWTzkCZMLE6SthjXg7MUqThWzrcfOI4WDdj03Jot3SS55Ey3XGNRTiO8kWzxlJ2skpE625zEKA7ePQmJJ7%2BTpzC4gJ1jo1TJYLVGM%2FXtAjNvW7O%2F0vquDjE1xoE3APONKUhZLBIKth9b7hVP1fHdf53wbT8nu%2BW%2BI%2BcrEDy6ZtFfEB5scxe3JznR1tWE5LzwngRBulV6W7%2BWhbevETu865x2Ik2sS7%2BgdeaRTcXMFedeWDg3rC6zTbmPFNsjHxEuxDZHZcjYngzRmP60yHa66yah%2Bmx7RPYcfinHR5LeRWjH0EotucOEhHDrpXQsiEgpd6uQdDJKmWq2uKUkLu6x%2BpkgOlyKu90w92AfjIg%2BHmviRcdjwAy7LiSiTNupzu7%2F6yY6kBspVoHtenIVTG3JSs9yEHmLvCWxXmn0Xbp1SeVlnDuW3rtrWJQTS%2FOguCmzYP3n8%2BlhPhFp53fzBbgplw1nL5HnMipoGMxAQEGMICfkMAGOqUBhSR16KQ64oRx6ZcKpSxNYr5alpM8mPKTZ9N1HbN9PD8FVfMtHkTMvIPNmXnUdpEk8xPajFKMRCN4VobX7E88Bp46Y1h9wrT5hUY%2F6SI5qi8caAPpDXjoLZWLPu9t0TfldFxAYVHC1Dy2R8g34fxVW4EXBdJ5J4BtY3wQTN%2FqxgJxNgyxu%2FRFp725lK22QLk9TbNOcZPG9qCOmMho1kX%2BfnPvqOXd&X-Amz-Signature=69b8f77458a439a1dc2445effd6729da1bf8cd461dd41be0411f5563b0b86c82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A2DE6PJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGAmcfRYoCzzjG0Y%2Fp%2BhAw9QFkHMT7jbFkII7jGAOI%2BiAiEAxO12fuEHPTrpxVNILD7%2FqAufk76rLKzx9udKl8BRy6EqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCBR16Fea1VybsSUyrcA377j7fYkK70fwurtYKwoUmeoLyy6knI1XrzUjkHSWd3LqEcqRr8r54zhx4cORDUBQ9ke047Rt9YW1P8tPefuFdzVV%2FtsxuqyMqgGYAf54%2By0B27nvSoTdbkCdZChLCHJ%2BOgNg8v4oSCBZ24eFiqbzWTzkCZMLE6SthjXg7MUqThWzrcfOI4WDdj03Jot3SS55Ey3XGNRTiO8kWzxlJ2skpE625zEKA7ePQmJJ7%2BTpzC4gJ1jo1TJYLVGM%2FXtAjNvW7O%2F0vquDjE1xoE3APONKUhZLBIKth9b7hVP1fHdf53wbT8nu%2BW%2BI%2BcrEDy6ZtFfEB5scxe3JznR1tWE5LzwngRBulV6W7%2BWhbevETu865x2Ik2sS7%2BgdeaRTcXMFedeWDg3rC6zTbmPFNsjHxEuxDZHZcjYngzRmP60yHa66yah%2Bmx7RPYcfinHR5LeRWjH0EotucOEhHDrpXQsiEgpd6uQdDJKmWq2uKUkLu6x%2BpkgOlyKu90w92AfjIg%2BHmviRcdjwAy7LiSiTNupzu7%2F6yY6kBspVoHtenIVTG3JSs9yEHmLvCWxXmn0Xbp1SeVlnDuW3rtrWJQTS%2FOguCmzYP3n8%2BlhPhFp53fzBbgplw1nL5HnMipoGMxAQEGMICfkMAGOqUBhSR16KQ64oRx6ZcKpSxNYr5alpM8mPKTZ9N1HbN9PD8FVfMtHkTMvIPNmXnUdpEk8xPajFKMRCN4VobX7E88Bp46Y1h9wrT5hUY%2F6SI5qi8caAPpDXjoLZWLPu9t0TfldFxAYVHC1Dy2R8g34fxVW4EXBdJ5J4BtY3wQTN%2FqxgJxNgyxu%2FRFp725lK22QLk9TbNOcZPG9qCOmMho1kX%2BfnPvqOXd&X-Amz-Signature=32e415b90070589451347bf721999c0b94a649f258efc37721eab01d7d8ba928&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A2DE6PJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGAmcfRYoCzzjG0Y%2Fp%2BhAw9QFkHMT7jbFkII7jGAOI%2BiAiEAxO12fuEHPTrpxVNILD7%2FqAufk76rLKzx9udKl8BRy6EqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCBR16Fea1VybsSUyrcA377j7fYkK70fwurtYKwoUmeoLyy6knI1XrzUjkHSWd3LqEcqRr8r54zhx4cORDUBQ9ke047Rt9YW1P8tPefuFdzVV%2FtsxuqyMqgGYAf54%2By0B27nvSoTdbkCdZChLCHJ%2BOgNg8v4oSCBZ24eFiqbzWTzkCZMLE6SthjXg7MUqThWzrcfOI4WDdj03Jot3SS55Ey3XGNRTiO8kWzxlJ2skpE625zEKA7ePQmJJ7%2BTpzC4gJ1jo1TJYLVGM%2FXtAjNvW7O%2F0vquDjE1xoE3APONKUhZLBIKth9b7hVP1fHdf53wbT8nu%2BW%2BI%2BcrEDy6ZtFfEB5scxe3JznR1tWE5LzwngRBulV6W7%2BWhbevETu865x2Ik2sS7%2BgdeaRTcXMFedeWDg3rC6zTbmPFNsjHxEuxDZHZcjYngzRmP60yHa66yah%2Bmx7RPYcfinHR5LeRWjH0EotucOEhHDrpXQsiEgpd6uQdDJKmWq2uKUkLu6x%2BpkgOlyKu90w92AfjIg%2BHmviRcdjwAy7LiSiTNupzu7%2F6yY6kBspVoHtenIVTG3JSs9yEHmLvCWxXmn0Xbp1SeVlnDuW3rtrWJQTS%2FOguCmzYP3n8%2BlhPhFp53fzBbgplw1nL5HnMipoGMxAQEGMICfkMAGOqUBhSR16KQ64oRx6ZcKpSxNYr5alpM8mPKTZ9N1HbN9PD8FVfMtHkTMvIPNmXnUdpEk8xPajFKMRCN4VobX7E88Bp46Y1h9wrT5hUY%2F6SI5qi8caAPpDXjoLZWLPu9t0TfldFxAYVHC1Dy2R8g34fxVW4EXBdJ5J4BtY3wQTN%2FqxgJxNgyxu%2FRFp725lK22QLk9TbNOcZPG9qCOmMho1kX%2BfnPvqOXd&X-Amz-Signature=c982f2cac89cd8dd7703d1450dfaa84309c2c13459c5684c5975ad26354e497e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A2DE6PJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGAmcfRYoCzzjG0Y%2Fp%2BhAw9QFkHMT7jbFkII7jGAOI%2BiAiEAxO12fuEHPTrpxVNILD7%2FqAufk76rLKzx9udKl8BRy6EqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCBR16Fea1VybsSUyrcA377j7fYkK70fwurtYKwoUmeoLyy6knI1XrzUjkHSWd3LqEcqRr8r54zhx4cORDUBQ9ke047Rt9YW1P8tPefuFdzVV%2FtsxuqyMqgGYAf54%2By0B27nvSoTdbkCdZChLCHJ%2BOgNg8v4oSCBZ24eFiqbzWTzkCZMLE6SthjXg7MUqThWzrcfOI4WDdj03Jot3SS55Ey3XGNRTiO8kWzxlJ2skpE625zEKA7ePQmJJ7%2BTpzC4gJ1jo1TJYLVGM%2FXtAjNvW7O%2F0vquDjE1xoE3APONKUhZLBIKth9b7hVP1fHdf53wbT8nu%2BW%2BI%2BcrEDy6ZtFfEB5scxe3JznR1tWE5LzwngRBulV6W7%2BWhbevETu865x2Ik2sS7%2BgdeaRTcXMFedeWDg3rC6zTbmPFNsjHxEuxDZHZcjYngzRmP60yHa66yah%2Bmx7RPYcfinHR5LeRWjH0EotucOEhHDrpXQsiEgpd6uQdDJKmWq2uKUkLu6x%2BpkgOlyKu90w92AfjIg%2BHmviRcdjwAy7LiSiTNupzu7%2F6yY6kBspVoHtenIVTG3JSs9yEHmLvCWxXmn0Xbp1SeVlnDuW3rtrWJQTS%2FOguCmzYP3n8%2BlhPhFp53fzBbgplw1nL5HnMipoGMxAQEGMICfkMAGOqUBhSR16KQ64oRx6ZcKpSxNYr5alpM8mPKTZ9N1HbN9PD8FVfMtHkTMvIPNmXnUdpEk8xPajFKMRCN4VobX7E88Bp46Y1h9wrT5hUY%2F6SI5qi8caAPpDXjoLZWLPu9t0TfldFxAYVHC1Dy2R8g34fxVW4EXBdJ5J4BtY3wQTN%2FqxgJxNgyxu%2FRFp725lK22QLk9TbNOcZPG9qCOmMho1kX%2BfnPvqOXd&X-Amz-Signature=1d00bdb9cfb5d5736ec28b0c568ca0e0ba0683bfb203218cc7ceda092c9b9043&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A2DE6PJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGAmcfRYoCzzjG0Y%2Fp%2BhAw9QFkHMT7jbFkII7jGAOI%2BiAiEAxO12fuEHPTrpxVNILD7%2FqAufk76rLKzx9udKl8BRy6EqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCBR16Fea1VybsSUyrcA377j7fYkK70fwurtYKwoUmeoLyy6knI1XrzUjkHSWd3LqEcqRr8r54zhx4cORDUBQ9ke047Rt9YW1P8tPefuFdzVV%2FtsxuqyMqgGYAf54%2By0B27nvSoTdbkCdZChLCHJ%2BOgNg8v4oSCBZ24eFiqbzWTzkCZMLE6SthjXg7MUqThWzrcfOI4WDdj03Jot3SS55Ey3XGNRTiO8kWzxlJ2skpE625zEKA7ePQmJJ7%2BTpzC4gJ1jo1TJYLVGM%2FXtAjNvW7O%2F0vquDjE1xoE3APONKUhZLBIKth9b7hVP1fHdf53wbT8nu%2BW%2BI%2BcrEDy6ZtFfEB5scxe3JznR1tWE5LzwngRBulV6W7%2BWhbevETu865x2Ik2sS7%2BgdeaRTcXMFedeWDg3rC6zTbmPFNsjHxEuxDZHZcjYngzRmP60yHa66yah%2Bmx7RPYcfinHR5LeRWjH0EotucOEhHDrpXQsiEgpd6uQdDJKmWq2uKUkLu6x%2BpkgOlyKu90w92AfjIg%2BHmviRcdjwAy7LiSiTNupzu7%2F6yY6kBspVoHtenIVTG3JSs9yEHmLvCWxXmn0Xbp1SeVlnDuW3rtrWJQTS%2FOguCmzYP3n8%2BlhPhFp53fzBbgplw1nL5HnMipoGMxAQEGMICfkMAGOqUBhSR16KQ64oRx6ZcKpSxNYr5alpM8mPKTZ9N1HbN9PD8FVfMtHkTMvIPNmXnUdpEk8xPajFKMRCN4VobX7E88Bp46Y1h9wrT5hUY%2F6SI5qi8caAPpDXjoLZWLPu9t0TfldFxAYVHC1Dy2R8g34fxVW4EXBdJ5J4BtY3wQTN%2FqxgJxNgyxu%2FRFp725lK22QLk9TbNOcZPG9qCOmMho1kX%2BfnPvqOXd&X-Amz-Signature=6ba05163a454a6d914e894fab796fca5ef55510fbee56a3378f8f4eb5cba6f89&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
