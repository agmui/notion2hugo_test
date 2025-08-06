---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQCZVIR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIF6ZJ6rh6f6dKkevXZl3NGitpDec7O4OwY7yhBmYTDZGAiA%2B6ChRaoz4TW6E6cDGi%2FCuCA3apRtAp1B2YUVZ20OD%2FSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMm80UVq77DLzOtqCoKtwDQUHYwnPl7s%2Fn43%2Fp9r9kHRm2f6a0vh1YFQNaiQB4YzTT%2FaiWN8ZmYhElDt1woWPt0R3fPhyDfufibOnTgU41IuqeIzKcmRjcJitSxf1nlK2MPmM07xO3J1AlFLXnxlZLwq5uc8QESpLEad4Pl9Cc71e06ZwDjAIvU26zWXUPMngKEcvAmt%2FFjxzNRi3raGD42ihGv9%2BX5WIOfzmmM%2FSaPGOSbW0jRl8zbW1%2FGC20%2BXa%2BnlcVMaCoSy12XoNUuBudGsGdSDkpzGf5S1iSX7CqfkvA6S1IOy3O2X%2FNVXXHfcQPi29d0b8E6F9Ajd8KEeube9jgDbsb8sBrTpZs7AeFfc6ZfsjYpI%2FKvtWTsZcIy1uvAX6gVGZ07dL0wvLUOiXcIYjj5sBEkibcNBwW8kQDpIbTT29RqI6sykuxheAJkdtUaCyNi2%2F15ZjyTm4EpoA5Mc30HXlOTUiwsHzd4L4qDo9PyJaLtp52ZtFhIlcmk9upMGZ6JLNPFVWjJ6UwdqMaX9nAkjCeiNMk6mVHMyBMsEPIuFLGWdoMNPnasDK%2FtZjAgFak4w6JfrCBPWVadjwAGOeODFK%2BosbrT%2FsWaSNJSRGOLp4mdCljkzsp8KTmJkQJ8KhoeVWlR1lJvOMw7YTNxAY6pgGA1Ri%2Fc2vcQXCJDYNnFkmyJYdTwrq9eNSCHbslu4Hq2SPsRrrkQwYyGItLGCjNP%2FY4oNmnssbzGpZxlDZ7kZmYUsP6dbnXeCKOwb3QxNC9Aa2TdVO6QfXLevKSbI87qOSSlsDG7%2FM9ytEofRkzj3W9P5nXuzLetL7ByImLmbza%2B6705G3RMlUBd1czW3v6j96pkDb9dU5b18Fd%2FLi0Fcak2aORWAGp&X-Amz-Signature=44d2f5586af94ac5da6ed9377a04720cf24d42f7cd6928ba34297febfb591518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQCZVIR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIF6ZJ6rh6f6dKkevXZl3NGitpDec7O4OwY7yhBmYTDZGAiA%2B6ChRaoz4TW6E6cDGi%2FCuCA3apRtAp1B2YUVZ20OD%2FSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMm80UVq77DLzOtqCoKtwDQUHYwnPl7s%2Fn43%2Fp9r9kHRm2f6a0vh1YFQNaiQB4YzTT%2FaiWN8ZmYhElDt1woWPt0R3fPhyDfufibOnTgU41IuqeIzKcmRjcJitSxf1nlK2MPmM07xO3J1AlFLXnxlZLwq5uc8QESpLEad4Pl9Cc71e06ZwDjAIvU26zWXUPMngKEcvAmt%2FFjxzNRi3raGD42ihGv9%2BX5WIOfzmmM%2FSaPGOSbW0jRl8zbW1%2FGC20%2BXa%2BnlcVMaCoSy12XoNUuBudGsGdSDkpzGf5S1iSX7CqfkvA6S1IOy3O2X%2FNVXXHfcQPi29d0b8E6F9Ajd8KEeube9jgDbsb8sBrTpZs7AeFfc6ZfsjYpI%2FKvtWTsZcIy1uvAX6gVGZ07dL0wvLUOiXcIYjj5sBEkibcNBwW8kQDpIbTT29RqI6sykuxheAJkdtUaCyNi2%2F15ZjyTm4EpoA5Mc30HXlOTUiwsHzd4L4qDo9PyJaLtp52ZtFhIlcmk9upMGZ6JLNPFVWjJ6UwdqMaX9nAkjCeiNMk6mVHMyBMsEPIuFLGWdoMNPnasDK%2FtZjAgFak4w6JfrCBPWVadjwAGOeODFK%2BosbrT%2FsWaSNJSRGOLp4mdCljkzsp8KTmJkQJ8KhoeVWlR1lJvOMw7YTNxAY6pgGA1Ri%2Fc2vcQXCJDYNnFkmyJYdTwrq9eNSCHbslu4Hq2SPsRrrkQwYyGItLGCjNP%2FY4oNmnssbzGpZxlDZ7kZmYUsP6dbnXeCKOwb3QxNC9Aa2TdVO6QfXLevKSbI87qOSSlsDG7%2FM9ytEofRkzj3W9P5nXuzLetL7ByImLmbza%2B6705G3RMlUBd1czW3v6j96pkDb9dU5b18Fd%2FLi0Fcak2aORWAGp&X-Amz-Signature=609a02bcd135c9a037acf00b84e50fe7b2b5196288fbca6e16dd911ca96fb299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQCZVIR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIF6ZJ6rh6f6dKkevXZl3NGitpDec7O4OwY7yhBmYTDZGAiA%2B6ChRaoz4TW6E6cDGi%2FCuCA3apRtAp1B2YUVZ20OD%2FSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMm80UVq77DLzOtqCoKtwDQUHYwnPl7s%2Fn43%2Fp9r9kHRm2f6a0vh1YFQNaiQB4YzTT%2FaiWN8ZmYhElDt1woWPt0R3fPhyDfufibOnTgU41IuqeIzKcmRjcJitSxf1nlK2MPmM07xO3J1AlFLXnxlZLwq5uc8QESpLEad4Pl9Cc71e06ZwDjAIvU26zWXUPMngKEcvAmt%2FFjxzNRi3raGD42ihGv9%2BX5WIOfzmmM%2FSaPGOSbW0jRl8zbW1%2FGC20%2BXa%2BnlcVMaCoSy12XoNUuBudGsGdSDkpzGf5S1iSX7CqfkvA6S1IOy3O2X%2FNVXXHfcQPi29d0b8E6F9Ajd8KEeube9jgDbsb8sBrTpZs7AeFfc6ZfsjYpI%2FKvtWTsZcIy1uvAX6gVGZ07dL0wvLUOiXcIYjj5sBEkibcNBwW8kQDpIbTT29RqI6sykuxheAJkdtUaCyNi2%2F15ZjyTm4EpoA5Mc30HXlOTUiwsHzd4L4qDo9PyJaLtp52ZtFhIlcmk9upMGZ6JLNPFVWjJ6UwdqMaX9nAkjCeiNMk6mVHMyBMsEPIuFLGWdoMNPnasDK%2FtZjAgFak4w6JfrCBPWVadjwAGOeODFK%2BosbrT%2FsWaSNJSRGOLp4mdCljkzsp8KTmJkQJ8KhoeVWlR1lJvOMw7YTNxAY6pgGA1Ri%2Fc2vcQXCJDYNnFkmyJYdTwrq9eNSCHbslu4Hq2SPsRrrkQwYyGItLGCjNP%2FY4oNmnssbzGpZxlDZ7kZmYUsP6dbnXeCKOwb3QxNC9Aa2TdVO6QfXLevKSbI87qOSSlsDG7%2FM9ytEofRkzj3W9P5nXuzLetL7ByImLmbza%2B6705G3RMlUBd1czW3v6j96pkDb9dU5b18Fd%2FLi0Fcak2aORWAGp&X-Amz-Signature=383759dc9969a4177f7b31195b7ee27e45313929ce61d28cbcf06fc57e3066d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQCZVIR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIF6ZJ6rh6f6dKkevXZl3NGitpDec7O4OwY7yhBmYTDZGAiA%2B6ChRaoz4TW6E6cDGi%2FCuCA3apRtAp1B2YUVZ20OD%2FSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMm80UVq77DLzOtqCoKtwDQUHYwnPl7s%2Fn43%2Fp9r9kHRm2f6a0vh1YFQNaiQB4YzTT%2FaiWN8ZmYhElDt1woWPt0R3fPhyDfufibOnTgU41IuqeIzKcmRjcJitSxf1nlK2MPmM07xO3J1AlFLXnxlZLwq5uc8QESpLEad4Pl9Cc71e06ZwDjAIvU26zWXUPMngKEcvAmt%2FFjxzNRi3raGD42ihGv9%2BX5WIOfzmmM%2FSaPGOSbW0jRl8zbW1%2FGC20%2BXa%2BnlcVMaCoSy12XoNUuBudGsGdSDkpzGf5S1iSX7CqfkvA6S1IOy3O2X%2FNVXXHfcQPi29d0b8E6F9Ajd8KEeube9jgDbsb8sBrTpZs7AeFfc6ZfsjYpI%2FKvtWTsZcIy1uvAX6gVGZ07dL0wvLUOiXcIYjj5sBEkibcNBwW8kQDpIbTT29RqI6sykuxheAJkdtUaCyNi2%2F15ZjyTm4EpoA5Mc30HXlOTUiwsHzd4L4qDo9PyJaLtp52ZtFhIlcmk9upMGZ6JLNPFVWjJ6UwdqMaX9nAkjCeiNMk6mVHMyBMsEPIuFLGWdoMNPnasDK%2FtZjAgFak4w6JfrCBPWVadjwAGOeODFK%2BosbrT%2FsWaSNJSRGOLp4mdCljkzsp8KTmJkQJ8KhoeVWlR1lJvOMw7YTNxAY6pgGA1Ri%2Fc2vcQXCJDYNnFkmyJYdTwrq9eNSCHbslu4Hq2SPsRrrkQwYyGItLGCjNP%2FY4oNmnssbzGpZxlDZ7kZmYUsP6dbnXeCKOwb3QxNC9Aa2TdVO6QfXLevKSbI87qOSSlsDG7%2FM9ytEofRkzj3W9P5nXuzLetL7ByImLmbza%2B6705G3RMlUBd1czW3v6j96pkDb9dU5b18Fd%2FLi0Fcak2aORWAGp&X-Amz-Signature=e12930b53c93826e8262cd7f56454362415ade15f4656fa97ef74cd1ea7b2df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQCZVIR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIF6ZJ6rh6f6dKkevXZl3NGitpDec7O4OwY7yhBmYTDZGAiA%2B6ChRaoz4TW6E6cDGi%2FCuCA3apRtAp1B2YUVZ20OD%2FSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMm80UVq77DLzOtqCoKtwDQUHYwnPl7s%2Fn43%2Fp9r9kHRm2f6a0vh1YFQNaiQB4YzTT%2FaiWN8ZmYhElDt1woWPt0R3fPhyDfufibOnTgU41IuqeIzKcmRjcJitSxf1nlK2MPmM07xO3J1AlFLXnxlZLwq5uc8QESpLEad4Pl9Cc71e06ZwDjAIvU26zWXUPMngKEcvAmt%2FFjxzNRi3raGD42ihGv9%2BX5WIOfzmmM%2FSaPGOSbW0jRl8zbW1%2FGC20%2BXa%2BnlcVMaCoSy12XoNUuBudGsGdSDkpzGf5S1iSX7CqfkvA6S1IOy3O2X%2FNVXXHfcQPi29d0b8E6F9Ajd8KEeube9jgDbsb8sBrTpZs7AeFfc6ZfsjYpI%2FKvtWTsZcIy1uvAX6gVGZ07dL0wvLUOiXcIYjj5sBEkibcNBwW8kQDpIbTT29RqI6sykuxheAJkdtUaCyNi2%2F15ZjyTm4EpoA5Mc30HXlOTUiwsHzd4L4qDo9PyJaLtp52ZtFhIlcmk9upMGZ6JLNPFVWjJ6UwdqMaX9nAkjCeiNMk6mVHMyBMsEPIuFLGWdoMNPnasDK%2FtZjAgFak4w6JfrCBPWVadjwAGOeODFK%2BosbrT%2FsWaSNJSRGOLp4mdCljkzsp8KTmJkQJ8KhoeVWlR1lJvOMw7YTNxAY6pgGA1Ri%2Fc2vcQXCJDYNnFkmyJYdTwrq9eNSCHbslu4Hq2SPsRrrkQwYyGItLGCjNP%2FY4oNmnssbzGpZxlDZ7kZmYUsP6dbnXeCKOwb3QxNC9Aa2TdVO6QfXLevKSbI87qOSSlsDG7%2FM9ytEofRkzj3W9P5nXuzLetL7ByImLmbza%2B6705G3RMlUBd1czW3v6j96pkDb9dU5b18Fd%2FLi0Fcak2aORWAGp&X-Amz-Signature=7fef160ee7034e5c94827684d5c85eed1e1c5d0f7eab6ebe3a8aabafd34337ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
