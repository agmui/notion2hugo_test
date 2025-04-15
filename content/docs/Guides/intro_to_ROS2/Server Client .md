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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACKZTA5%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDqDIBiqc0F03miWLp3kdRqUxiwbbiem5TO3rCGqsJrAiBZaj3zVGjdW038UWxFo%2F3npK1wAYXLj5oIWou3K6MFMyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMOh4MzR1%2F57Lrf6juKtwDCftOQBAXXUoPUayn3dAGOhCvZZjwMn3pgYZnDYryX%2FR6upCkS49Llnz1NLxQCh%2F9QT2OVodRxPXCKYWr2j%2BHmkYbnhxB74U6otqb61Lq%2Bet2NqfWu5k4klQLjn0mmInWeXs7YMPQ6cNt87ZtpoKT1GObItjYTj3xIWtz8PHn06uZIhXM0LuOaWy%2F2o5rhil3JrEUf8RvV48y7xXPT%2BsaIClOp2oeoP8Yx76NEssi0eRPYu92aDKfv0rQ%2BbSCphraWTYJu%2Fc%2BwjLW1Ao9FVc7VyvVSLsNAJO78eGUwDwWTVhBE9opvycVvVUMEPQ%2BjSZ0%2BHYVJw5Lcu0Q3Z3Rbw4jr4ntk6KKbnvK9CG7JDL5ivxbSf4UPvvCVX9hNrXWq8oIjq%2B7PRd77qF6doHJzoNcph6iz%2FckLV8sxEIyX2qdjIfemOkHb8ZeuPz1CeX5iu%2BBD09wIPy7iehK6Uk2kSil8qwRjIynsORRDAk132ARyr2%2B9da7IzHzAJHwz5oBRZOC5JuZkfBXUVtTqPAK5rJD%2FEDN4wUCWAMAwQHp5xgbKVsLXUpS6zwVONqt50cr26U24VPTXXKsOkeFO%2By3vBeHSeyJ1IYA%2Fn%2FcNR4eOueSTAtMuAsgs6dReFCOLJUw%2Bdz5vwY6pgGjrTakppQkBm7t%2FVPvVFwpKB5UimcVPPzH4eIyf4q4dGq%2BYMYc4qBAqY5SgPneci2FeM%2FRmnXgYoyBZ3zQtaa%2BO5yJoW1jqXUGWg7JsKxOvGjKvBpTILcVxN3ibarSSiUOiBsmv68W5X4T1SPtLq57sloMrmDNJ10jdY4tK0Yk7WfMaX7TAv6v6WUAQKNQsOfBtC9N1Qi260GQayff1QjGnxSuyZ%2B9&X-Amz-Signature=0ec29bb5cf42f60dab98f2866b9bc022224b25ef58b8d6b133adcd69179fba20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACKZTA5%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDqDIBiqc0F03miWLp3kdRqUxiwbbiem5TO3rCGqsJrAiBZaj3zVGjdW038UWxFo%2F3npK1wAYXLj5oIWou3K6MFMyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMOh4MzR1%2F57Lrf6juKtwDCftOQBAXXUoPUayn3dAGOhCvZZjwMn3pgYZnDYryX%2FR6upCkS49Llnz1NLxQCh%2F9QT2OVodRxPXCKYWr2j%2BHmkYbnhxB74U6otqb61Lq%2Bet2NqfWu5k4klQLjn0mmInWeXs7YMPQ6cNt87ZtpoKT1GObItjYTj3xIWtz8PHn06uZIhXM0LuOaWy%2F2o5rhil3JrEUf8RvV48y7xXPT%2BsaIClOp2oeoP8Yx76NEssi0eRPYu92aDKfv0rQ%2BbSCphraWTYJu%2Fc%2BwjLW1Ao9FVc7VyvVSLsNAJO78eGUwDwWTVhBE9opvycVvVUMEPQ%2BjSZ0%2BHYVJw5Lcu0Q3Z3Rbw4jr4ntk6KKbnvK9CG7JDL5ivxbSf4UPvvCVX9hNrXWq8oIjq%2B7PRd77qF6doHJzoNcph6iz%2FckLV8sxEIyX2qdjIfemOkHb8ZeuPz1CeX5iu%2BBD09wIPy7iehK6Uk2kSil8qwRjIynsORRDAk132ARyr2%2B9da7IzHzAJHwz5oBRZOC5JuZkfBXUVtTqPAK5rJD%2FEDN4wUCWAMAwQHp5xgbKVsLXUpS6zwVONqt50cr26U24VPTXXKsOkeFO%2By3vBeHSeyJ1IYA%2Fn%2FcNR4eOueSTAtMuAsgs6dReFCOLJUw%2Bdz5vwY6pgGjrTakppQkBm7t%2FVPvVFwpKB5UimcVPPzH4eIyf4q4dGq%2BYMYc4qBAqY5SgPneci2FeM%2FRmnXgYoyBZ3zQtaa%2BO5yJoW1jqXUGWg7JsKxOvGjKvBpTILcVxN3ibarSSiUOiBsmv68W5X4T1SPtLq57sloMrmDNJ10jdY4tK0Yk7WfMaX7TAv6v6WUAQKNQsOfBtC9N1Qi260GQayff1QjGnxSuyZ%2B9&X-Amz-Signature=45d7a1b46b2efe53eb059f01e2d21ffe9df853402b1c4a8a87f1a9478c397a24&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACKZTA5%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDqDIBiqc0F03miWLp3kdRqUxiwbbiem5TO3rCGqsJrAiBZaj3zVGjdW038UWxFo%2F3npK1wAYXLj5oIWou3K6MFMyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMOh4MzR1%2F57Lrf6juKtwDCftOQBAXXUoPUayn3dAGOhCvZZjwMn3pgYZnDYryX%2FR6upCkS49Llnz1NLxQCh%2F9QT2OVodRxPXCKYWr2j%2BHmkYbnhxB74U6otqb61Lq%2Bet2NqfWu5k4klQLjn0mmInWeXs7YMPQ6cNt87ZtpoKT1GObItjYTj3xIWtz8PHn06uZIhXM0LuOaWy%2F2o5rhil3JrEUf8RvV48y7xXPT%2BsaIClOp2oeoP8Yx76NEssi0eRPYu92aDKfv0rQ%2BbSCphraWTYJu%2Fc%2BwjLW1Ao9FVc7VyvVSLsNAJO78eGUwDwWTVhBE9opvycVvVUMEPQ%2BjSZ0%2BHYVJw5Lcu0Q3Z3Rbw4jr4ntk6KKbnvK9CG7JDL5ivxbSf4UPvvCVX9hNrXWq8oIjq%2B7PRd77qF6doHJzoNcph6iz%2FckLV8sxEIyX2qdjIfemOkHb8ZeuPz1CeX5iu%2BBD09wIPy7iehK6Uk2kSil8qwRjIynsORRDAk132ARyr2%2B9da7IzHzAJHwz5oBRZOC5JuZkfBXUVtTqPAK5rJD%2FEDN4wUCWAMAwQHp5xgbKVsLXUpS6zwVONqt50cr26U24VPTXXKsOkeFO%2By3vBeHSeyJ1IYA%2Fn%2FcNR4eOueSTAtMuAsgs6dReFCOLJUw%2Bdz5vwY6pgGjrTakppQkBm7t%2FVPvVFwpKB5UimcVPPzH4eIyf4q4dGq%2BYMYc4qBAqY5SgPneci2FeM%2FRmnXgYoyBZ3zQtaa%2BO5yJoW1jqXUGWg7JsKxOvGjKvBpTILcVxN3ibarSSiUOiBsmv68W5X4T1SPtLq57sloMrmDNJ10jdY4tK0Yk7WfMaX7TAv6v6WUAQKNQsOfBtC9N1Qi260GQayff1QjGnxSuyZ%2B9&X-Amz-Signature=5cdf22d71545bbb3703ac42bfab53122e875801ac4bcc6d82f557f3566fe2351&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACKZTA5%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDqDIBiqc0F03miWLp3kdRqUxiwbbiem5TO3rCGqsJrAiBZaj3zVGjdW038UWxFo%2F3npK1wAYXLj5oIWou3K6MFMyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMOh4MzR1%2F57Lrf6juKtwDCftOQBAXXUoPUayn3dAGOhCvZZjwMn3pgYZnDYryX%2FR6upCkS49Llnz1NLxQCh%2F9QT2OVodRxPXCKYWr2j%2BHmkYbnhxB74U6otqb61Lq%2Bet2NqfWu5k4klQLjn0mmInWeXs7YMPQ6cNt87ZtpoKT1GObItjYTj3xIWtz8PHn06uZIhXM0LuOaWy%2F2o5rhil3JrEUf8RvV48y7xXPT%2BsaIClOp2oeoP8Yx76NEssi0eRPYu92aDKfv0rQ%2BbSCphraWTYJu%2Fc%2BwjLW1Ao9FVc7VyvVSLsNAJO78eGUwDwWTVhBE9opvycVvVUMEPQ%2BjSZ0%2BHYVJw5Lcu0Q3Z3Rbw4jr4ntk6KKbnvK9CG7JDL5ivxbSf4UPvvCVX9hNrXWq8oIjq%2B7PRd77qF6doHJzoNcph6iz%2FckLV8sxEIyX2qdjIfemOkHb8ZeuPz1CeX5iu%2BBD09wIPy7iehK6Uk2kSil8qwRjIynsORRDAk132ARyr2%2B9da7IzHzAJHwz5oBRZOC5JuZkfBXUVtTqPAK5rJD%2FEDN4wUCWAMAwQHp5xgbKVsLXUpS6zwVONqt50cr26U24VPTXXKsOkeFO%2By3vBeHSeyJ1IYA%2Fn%2FcNR4eOueSTAtMuAsgs6dReFCOLJUw%2Bdz5vwY6pgGjrTakppQkBm7t%2FVPvVFwpKB5UimcVPPzH4eIyf4q4dGq%2BYMYc4qBAqY5SgPneci2FeM%2FRmnXgYoyBZ3zQtaa%2BO5yJoW1jqXUGWg7JsKxOvGjKvBpTILcVxN3ibarSSiUOiBsmv68W5X4T1SPtLq57sloMrmDNJ10jdY4tK0Yk7WfMaX7TAv6v6WUAQKNQsOfBtC9N1Qi260GQayff1QjGnxSuyZ%2B9&X-Amz-Signature=5a33ccea502846d25a46db6923054e02c95e023fcd890586db9a932ef9758f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACKZTA5%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDqDIBiqc0F03miWLp3kdRqUxiwbbiem5TO3rCGqsJrAiBZaj3zVGjdW038UWxFo%2F3npK1wAYXLj5oIWou3K6MFMyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMOh4MzR1%2F57Lrf6juKtwDCftOQBAXXUoPUayn3dAGOhCvZZjwMn3pgYZnDYryX%2FR6upCkS49Llnz1NLxQCh%2F9QT2OVodRxPXCKYWr2j%2BHmkYbnhxB74U6otqb61Lq%2Bet2NqfWu5k4klQLjn0mmInWeXs7YMPQ6cNt87ZtpoKT1GObItjYTj3xIWtz8PHn06uZIhXM0LuOaWy%2F2o5rhil3JrEUf8RvV48y7xXPT%2BsaIClOp2oeoP8Yx76NEssi0eRPYu92aDKfv0rQ%2BbSCphraWTYJu%2Fc%2BwjLW1Ao9FVc7VyvVSLsNAJO78eGUwDwWTVhBE9opvycVvVUMEPQ%2BjSZ0%2BHYVJw5Lcu0Q3Z3Rbw4jr4ntk6KKbnvK9CG7JDL5ivxbSf4UPvvCVX9hNrXWq8oIjq%2B7PRd77qF6doHJzoNcph6iz%2FckLV8sxEIyX2qdjIfemOkHb8ZeuPz1CeX5iu%2BBD09wIPy7iehK6Uk2kSil8qwRjIynsORRDAk132ARyr2%2B9da7IzHzAJHwz5oBRZOC5JuZkfBXUVtTqPAK5rJD%2FEDN4wUCWAMAwQHp5xgbKVsLXUpS6zwVONqt50cr26U24VPTXXKsOkeFO%2By3vBeHSeyJ1IYA%2Fn%2FcNR4eOueSTAtMuAsgs6dReFCOLJUw%2Bdz5vwY6pgGjrTakppQkBm7t%2FVPvVFwpKB5UimcVPPzH4eIyf4q4dGq%2BYMYc4qBAqY5SgPneci2FeM%2FRmnXgYoyBZ3zQtaa%2BO5yJoW1jqXUGWg7JsKxOvGjKvBpTILcVxN3ibarSSiUOiBsmv68W5X4T1SPtLq57sloMrmDNJ10jdY4tK0Yk7WfMaX7TAv6v6WUAQKNQsOfBtC9N1Qi260GQayff1QjGnxSuyZ%2B9&X-Amz-Signature=dc98a6c40823cedc75c36b26d3db7aa634d13f1b3b4de0ef5f701d375ed83570&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
