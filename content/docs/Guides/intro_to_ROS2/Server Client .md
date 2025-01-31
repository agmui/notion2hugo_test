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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX6DXDMZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkXXSOydyKjGBCMxJoX8oMpuC7t0dU0jVSz%2FUau%2ByLpAiBuSAekoNR8a8sxDcI5UO3B03qHEEIbw4SQU8x1TPUMICqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4t7Q9pMzRW6pMy9CKtwDtw%2BoOEcS5CjqLezSUzD4PEi551Bfh0HGlllHmeeqQy9TaBgxk%2F6DUBw1s0i9B8V1C6afCpIH3blTQq5zfbzyC23aIsaVQqvqK%2Fybaco0dHww%2BnOMi7AqI9CHCGJF%2FHqsNxp%2FZyM1%2FCfFAxS%2BBwaFVxOcRTdIR7NZxJDBFO6tQWdY9fnfUP9gtT1mby5LfPdTmCsJPJZlwyoWVCVJ3e98cDU1EGeMVML7rcvv1B0Kaom2c5UTuc5Sfq91UX%2FkjmkG5sKMui2kfsCoYfuqyHO9RjkefXA2RUyGjvVZBOSJorTq1uI%2Bj1fGHXQcNYmKAay0i9sQxkW7LrLjGZH5Dau4Q07jHuCtQX9w1Nqm43IDlOa5YOKbIPHCL10yEU3QvJ%2Bq7S4MywNULabKldhQiRZE%2BJdywcl%2FFrbcAXbmUb2YXh1v2fuMxc6izfxJv0TCTQWFQg9dOeSAjYLdJiKlmm5mkpFg1G7jXuYBv7ZWGG47xRASK9LuOrCWp1%2F3A31sV4WFcDjDq5F266oJF71ic9Aj5sBTeisluojWSTNaHFpEVzJwUr5MumaCIrEPNPt5hgKPWUeOqIOe%2BOsKudgekAPTO3ymIyTkfm7LEPwY5GzfDdk%2BhPhOJgl9uvCQ7oEwq9HwvAY6pgEqMfDZxks7ONsrBrIB1gi9%2Bg0DHaYGzdygzp6GuYCjg%2FWkl%2FaEltvrkuNggRzZf52qY8LRP%2Fta%2BtyY5vcxbYUEmjOTdmOiiuuCxNFom125wz2n%2BOa%2FAkfsgkz3JQl3hYL6YFLgXQ3pKr11%2Fr3yfbTIk%2BgFJDtB8Fd8a%2FT3Lr%2FyVnBG0aytlhcmUjUDHNwTeg9qZzrk9J%2B45K%2BS0Ul60JvWivZULBeM&X-Amz-Signature=4fe0a93209642088447af259889f2566ddfc2d30f98b5b976f0092e3c9d36951&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX6DXDMZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkXXSOydyKjGBCMxJoX8oMpuC7t0dU0jVSz%2FUau%2ByLpAiBuSAekoNR8a8sxDcI5UO3B03qHEEIbw4SQU8x1TPUMICqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4t7Q9pMzRW6pMy9CKtwDtw%2BoOEcS5CjqLezSUzD4PEi551Bfh0HGlllHmeeqQy9TaBgxk%2F6DUBw1s0i9B8V1C6afCpIH3blTQq5zfbzyC23aIsaVQqvqK%2Fybaco0dHww%2BnOMi7AqI9CHCGJF%2FHqsNxp%2FZyM1%2FCfFAxS%2BBwaFVxOcRTdIR7NZxJDBFO6tQWdY9fnfUP9gtT1mby5LfPdTmCsJPJZlwyoWVCVJ3e98cDU1EGeMVML7rcvv1B0Kaom2c5UTuc5Sfq91UX%2FkjmkG5sKMui2kfsCoYfuqyHO9RjkefXA2RUyGjvVZBOSJorTq1uI%2Bj1fGHXQcNYmKAay0i9sQxkW7LrLjGZH5Dau4Q07jHuCtQX9w1Nqm43IDlOa5YOKbIPHCL10yEU3QvJ%2Bq7S4MywNULabKldhQiRZE%2BJdywcl%2FFrbcAXbmUb2YXh1v2fuMxc6izfxJv0TCTQWFQg9dOeSAjYLdJiKlmm5mkpFg1G7jXuYBv7ZWGG47xRASK9LuOrCWp1%2F3A31sV4WFcDjDq5F266oJF71ic9Aj5sBTeisluojWSTNaHFpEVzJwUr5MumaCIrEPNPt5hgKPWUeOqIOe%2BOsKudgekAPTO3ymIyTkfm7LEPwY5GzfDdk%2BhPhOJgl9uvCQ7oEwq9HwvAY6pgEqMfDZxks7ONsrBrIB1gi9%2Bg0DHaYGzdygzp6GuYCjg%2FWkl%2FaEltvrkuNggRzZf52qY8LRP%2Fta%2BtyY5vcxbYUEmjOTdmOiiuuCxNFom125wz2n%2BOa%2FAkfsgkz3JQl3hYL6YFLgXQ3pKr11%2Fr3yfbTIk%2BgFJDtB8Fd8a%2FT3Lr%2FyVnBG0aytlhcmUjUDHNwTeg9qZzrk9J%2B45K%2BS0Ul60JvWivZULBeM&X-Amz-Signature=2010c9f45317b22dcaf10a8dd277e76ea172847e5b0996415bcabc4fa3bfdd97&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX6DXDMZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkXXSOydyKjGBCMxJoX8oMpuC7t0dU0jVSz%2FUau%2ByLpAiBuSAekoNR8a8sxDcI5UO3B03qHEEIbw4SQU8x1TPUMICqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4t7Q9pMzRW6pMy9CKtwDtw%2BoOEcS5CjqLezSUzD4PEi551Bfh0HGlllHmeeqQy9TaBgxk%2F6DUBw1s0i9B8V1C6afCpIH3blTQq5zfbzyC23aIsaVQqvqK%2Fybaco0dHww%2BnOMi7AqI9CHCGJF%2FHqsNxp%2FZyM1%2FCfFAxS%2BBwaFVxOcRTdIR7NZxJDBFO6tQWdY9fnfUP9gtT1mby5LfPdTmCsJPJZlwyoWVCVJ3e98cDU1EGeMVML7rcvv1B0Kaom2c5UTuc5Sfq91UX%2FkjmkG5sKMui2kfsCoYfuqyHO9RjkefXA2RUyGjvVZBOSJorTq1uI%2Bj1fGHXQcNYmKAay0i9sQxkW7LrLjGZH5Dau4Q07jHuCtQX9w1Nqm43IDlOa5YOKbIPHCL10yEU3QvJ%2Bq7S4MywNULabKldhQiRZE%2BJdywcl%2FFrbcAXbmUb2YXh1v2fuMxc6izfxJv0TCTQWFQg9dOeSAjYLdJiKlmm5mkpFg1G7jXuYBv7ZWGG47xRASK9LuOrCWp1%2F3A31sV4WFcDjDq5F266oJF71ic9Aj5sBTeisluojWSTNaHFpEVzJwUr5MumaCIrEPNPt5hgKPWUeOqIOe%2BOsKudgekAPTO3ymIyTkfm7LEPwY5GzfDdk%2BhPhOJgl9uvCQ7oEwq9HwvAY6pgEqMfDZxks7ONsrBrIB1gi9%2Bg0DHaYGzdygzp6GuYCjg%2FWkl%2FaEltvrkuNggRzZf52qY8LRP%2Fta%2BtyY5vcxbYUEmjOTdmOiiuuCxNFom125wz2n%2BOa%2FAkfsgkz3JQl3hYL6YFLgXQ3pKr11%2Fr3yfbTIk%2BgFJDtB8Fd8a%2FT3Lr%2FyVnBG0aytlhcmUjUDHNwTeg9qZzrk9J%2B45K%2BS0Ul60JvWivZULBeM&X-Amz-Signature=ca3f8cb3fc8c91388c81f21883bce786f3012717456aba6beeb0139a8fc4060f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX6DXDMZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkXXSOydyKjGBCMxJoX8oMpuC7t0dU0jVSz%2FUau%2ByLpAiBuSAekoNR8a8sxDcI5UO3B03qHEEIbw4SQU8x1TPUMICqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4t7Q9pMzRW6pMy9CKtwDtw%2BoOEcS5CjqLezSUzD4PEi551Bfh0HGlllHmeeqQy9TaBgxk%2F6DUBw1s0i9B8V1C6afCpIH3blTQq5zfbzyC23aIsaVQqvqK%2Fybaco0dHww%2BnOMi7AqI9CHCGJF%2FHqsNxp%2FZyM1%2FCfFAxS%2BBwaFVxOcRTdIR7NZxJDBFO6tQWdY9fnfUP9gtT1mby5LfPdTmCsJPJZlwyoWVCVJ3e98cDU1EGeMVML7rcvv1B0Kaom2c5UTuc5Sfq91UX%2FkjmkG5sKMui2kfsCoYfuqyHO9RjkefXA2RUyGjvVZBOSJorTq1uI%2Bj1fGHXQcNYmKAay0i9sQxkW7LrLjGZH5Dau4Q07jHuCtQX9w1Nqm43IDlOa5YOKbIPHCL10yEU3QvJ%2Bq7S4MywNULabKldhQiRZE%2BJdywcl%2FFrbcAXbmUb2YXh1v2fuMxc6izfxJv0TCTQWFQg9dOeSAjYLdJiKlmm5mkpFg1G7jXuYBv7ZWGG47xRASK9LuOrCWp1%2F3A31sV4WFcDjDq5F266oJF71ic9Aj5sBTeisluojWSTNaHFpEVzJwUr5MumaCIrEPNPt5hgKPWUeOqIOe%2BOsKudgekAPTO3ymIyTkfm7LEPwY5GzfDdk%2BhPhOJgl9uvCQ7oEwq9HwvAY6pgEqMfDZxks7ONsrBrIB1gi9%2Bg0DHaYGzdygzp6GuYCjg%2FWkl%2FaEltvrkuNggRzZf52qY8LRP%2Fta%2BtyY5vcxbYUEmjOTdmOiiuuCxNFom125wz2n%2BOa%2FAkfsgkz3JQl3hYL6YFLgXQ3pKr11%2Fr3yfbTIk%2BgFJDtB8Fd8a%2FT3Lr%2FyVnBG0aytlhcmUjUDHNwTeg9qZzrk9J%2B45K%2BS0Ul60JvWivZULBeM&X-Amz-Signature=7f1632285278956a86ea78f03cc66e0d8289696a230f41385e193fe7a778f54f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX6DXDMZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkXXSOydyKjGBCMxJoX8oMpuC7t0dU0jVSz%2FUau%2ByLpAiBuSAekoNR8a8sxDcI5UO3B03qHEEIbw4SQU8x1TPUMICqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4t7Q9pMzRW6pMy9CKtwDtw%2BoOEcS5CjqLezSUzD4PEi551Bfh0HGlllHmeeqQy9TaBgxk%2F6DUBw1s0i9B8V1C6afCpIH3blTQq5zfbzyC23aIsaVQqvqK%2Fybaco0dHww%2BnOMi7AqI9CHCGJF%2FHqsNxp%2FZyM1%2FCfFAxS%2BBwaFVxOcRTdIR7NZxJDBFO6tQWdY9fnfUP9gtT1mby5LfPdTmCsJPJZlwyoWVCVJ3e98cDU1EGeMVML7rcvv1B0Kaom2c5UTuc5Sfq91UX%2FkjmkG5sKMui2kfsCoYfuqyHO9RjkefXA2RUyGjvVZBOSJorTq1uI%2Bj1fGHXQcNYmKAay0i9sQxkW7LrLjGZH5Dau4Q07jHuCtQX9w1Nqm43IDlOa5YOKbIPHCL10yEU3QvJ%2Bq7S4MywNULabKldhQiRZE%2BJdywcl%2FFrbcAXbmUb2YXh1v2fuMxc6izfxJv0TCTQWFQg9dOeSAjYLdJiKlmm5mkpFg1G7jXuYBv7ZWGG47xRASK9LuOrCWp1%2F3A31sV4WFcDjDq5F266oJF71ic9Aj5sBTeisluojWSTNaHFpEVzJwUr5MumaCIrEPNPt5hgKPWUeOqIOe%2BOsKudgekAPTO3ymIyTkfm7LEPwY5GzfDdk%2BhPhOJgl9uvCQ7oEwq9HwvAY6pgEqMfDZxks7ONsrBrIB1gi9%2Bg0DHaYGzdygzp6GuYCjg%2FWkl%2FaEltvrkuNggRzZf52qY8LRP%2Fta%2BtyY5vcxbYUEmjOTdmOiiuuCxNFom125wz2n%2BOa%2FAkfsgkz3JQl3hYL6YFLgXQ3pKr11%2Fr3yfbTIk%2BgFJDtB8Fd8a%2FT3Lr%2FyVnBG0aytlhcmUjUDHNwTeg9qZzrk9J%2B45K%2BS0Ul60JvWivZULBeM&X-Amz-Signature=ad49053e1912b9ee3a53dc24515248403b5e4d0756d085f9d03293502a4bc312&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
