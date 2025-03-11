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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LY3YSQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIE3jQ%2B8o9Fv8j7Dr7IT3cj6QbDB0ORItVGBsAbxzNz3lAiEA9XYTkabiu5vq1n%2FQUllw%2FYhYgUtPPo3kf79v8LBxziMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDZj2re6LGR5nrvRCrcA3dHZjRznSDofNuFAsCSQ26QqPTL%2BcY%2Fet4Qr5lrr6%2BS0TBKfg5DeZh8f1Lm4%2FJWfRuxy5TIlQWG32cvRqwlUQ5dAfJnKjiXriKkNVVjMlMJlAx%2BvhvDhA2HdxFgeWN9KOipszHEI%2BnwA%2FLhubwX%2Bx1c3Czhg3nuJ5GpTG3uW4c8rTrhyQEXTLj6tnMLkxoCknvHdzmLIiVPuXrGWSClWNLQBMWU%2BIbV4dX4SgnMDhN2%2B6Oyuveyd%2BEHFWlkkvtvUs3kZF7OY20EbFNQ2lWZ4rh%2BXfRffQ11icHLm%2FYINOLTKgFlaGOWg82I1IExT9LFLk1VhzBaK2yiQThiHliSneiL9xHDRqQ7Pg4SPLl6iRTMOBQ0soJe2F1wl0D9evlIVPp5zdQeHi8emZEnHh%2FpOFsSHjBEVWWbfP6rUv5IcYWDxr4oBJeQIGiZUrZGD1vxw%2FuwLzMfT%2FtjtPUFztMhyRJFVEK0eR83qDEEgG1UtX6Rbl9db6JDhRvIMEEeCNiRrmrg9vEm14MyJ4f%2Ftnngft8Ya06R7TH5x4rXw24KaXsRNM2oEGbIdCdO8XTM8liO2FvqvzBC%2BQuDXZ15ACMnJm2cRxrXZBc0hLfMms4OfA%2F0oZmAohm%2F422fjYs6MNXQv74GOqUBuU9ghCcrvlOZZCV6OrHRlNxWLtLo%2FMgpdEhlWXz%2F8BFxO0YrQTbOBvgMV%2Bg%2FV6K1ol02sQcELZJ8vbI%2FO5qLDS4mK5kRZg7IzCM2tTsmt22A%2FkV3FUl48nIUl0oDZFXtorqmtiEcPSlwDAiYYB3IxZkkRhkiYjXWXfv6luEQ1FXVbhozkQqEjMdNygHIxs0JXzW%2Byi4qvU%2FYwKlsCaioLCzs47kf&X-Amz-Signature=b4bcb0c323e6e516f586201cb72747d1b6c1ff26b9dc94b16f8a7035b4ae8b67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LY3YSQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIE3jQ%2B8o9Fv8j7Dr7IT3cj6QbDB0ORItVGBsAbxzNz3lAiEA9XYTkabiu5vq1n%2FQUllw%2FYhYgUtPPo3kf79v8LBxziMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDZj2re6LGR5nrvRCrcA3dHZjRznSDofNuFAsCSQ26QqPTL%2BcY%2Fet4Qr5lrr6%2BS0TBKfg5DeZh8f1Lm4%2FJWfRuxy5TIlQWG32cvRqwlUQ5dAfJnKjiXriKkNVVjMlMJlAx%2BvhvDhA2HdxFgeWN9KOipszHEI%2BnwA%2FLhubwX%2Bx1c3Czhg3nuJ5GpTG3uW4c8rTrhyQEXTLj6tnMLkxoCknvHdzmLIiVPuXrGWSClWNLQBMWU%2BIbV4dX4SgnMDhN2%2B6Oyuveyd%2BEHFWlkkvtvUs3kZF7OY20EbFNQ2lWZ4rh%2BXfRffQ11icHLm%2FYINOLTKgFlaGOWg82I1IExT9LFLk1VhzBaK2yiQThiHliSneiL9xHDRqQ7Pg4SPLl6iRTMOBQ0soJe2F1wl0D9evlIVPp5zdQeHi8emZEnHh%2FpOFsSHjBEVWWbfP6rUv5IcYWDxr4oBJeQIGiZUrZGD1vxw%2FuwLzMfT%2FtjtPUFztMhyRJFVEK0eR83qDEEgG1UtX6Rbl9db6JDhRvIMEEeCNiRrmrg9vEm14MyJ4f%2Ftnngft8Ya06R7TH5x4rXw24KaXsRNM2oEGbIdCdO8XTM8liO2FvqvzBC%2BQuDXZ15ACMnJm2cRxrXZBc0hLfMms4OfA%2F0oZmAohm%2F422fjYs6MNXQv74GOqUBuU9ghCcrvlOZZCV6OrHRlNxWLtLo%2FMgpdEhlWXz%2F8BFxO0YrQTbOBvgMV%2Bg%2FV6K1ol02sQcELZJ8vbI%2FO5qLDS4mK5kRZg7IzCM2tTsmt22A%2FkV3FUl48nIUl0oDZFXtorqmtiEcPSlwDAiYYB3IxZkkRhkiYjXWXfv6luEQ1FXVbhozkQqEjMdNygHIxs0JXzW%2Byi4qvU%2FYwKlsCaioLCzs47kf&X-Amz-Signature=b4790b0c8408329c9b8380a2d7d53a9e2a8efedf05fb8efa099277e8c0b831a1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LY3YSQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIE3jQ%2B8o9Fv8j7Dr7IT3cj6QbDB0ORItVGBsAbxzNz3lAiEA9XYTkabiu5vq1n%2FQUllw%2FYhYgUtPPo3kf79v8LBxziMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDZj2re6LGR5nrvRCrcA3dHZjRznSDofNuFAsCSQ26QqPTL%2BcY%2Fet4Qr5lrr6%2BS0TBKfg5DeZh8f1Lm4%2FJWfRuxy5TIlQWG32cvRqwlUQ5dAfJnKjiXriKkNVVjMlMJlAx%2BvhvDhA2HdxFgeWN9KOipszHEI%2BnwA%2FLhubwX%2Bx1c3Czhg3nuJ5GpTG3uW4c8rTrhyQEXTLj6tnMLkxoCknvHdzmLIiVPuXrGWSClWNLQBMWU%2BIbV4dX4SgnMDhN2%2B6Oyuveyd%2BEHFWlkkvtvUs3kZF7OY20EbFNQ2lWZ4rh%2BXfRffQ11icHLm%2FYINOLTKgFlaGOWg82I1IExT9LFLk1VhzBaK2yiQThiHliSneiL9xHDRqQ7Pg4SPLl6iRTMOBQ0soJe2F1wl0D9evlIVPp5zdQeHi8emZEnHh%2FpOFsSHjBEVWWbfP6rUv5IcYWDxr4oBJeQIGiZUrZGD1vxw%2FuwLzMfT%2FtjtPUFztMhyRJFVEK0eR83qDEEgG1UtX6Rbl9db6JDhRvIMEEeCNiRrmrg9vEm14MyJ4f%2Ftnngft8Ya06R7TH5x4rXw24KaXsRNM2oEGbIdCdO8XTM8liO2FvqvzBC%2BQuDXZ15ACMnJm2cRxrXZBc0hLfMms4OfA%2F0oZmAohm%2F422fjYs6MNXQv74GOqUBuU9ghCcrvlOZZCV6OrHRlNxWLtLo%2FMgpdEhlWXz%2F8BFxO0YrQTbOBvgMV%2Bg%2FV6K1ol02sQcELZJ8vbI%2FO5qLDS4mK5kRZg7IzCM2tTsmt22A%2FkV3FUl48nIUl0oDZFXtorqmtiEcPSlwDAiYYB3IxZkkRhkiYjXWXfv6luEQ1FXVbhozkQqEjMdNygHIxs0JXzW%2Byi4qvU%2FYwKlsCaioLCzs47kf&X-Amz-Signature=e436cb2965ded260bbc12de87943b92a1f0818ec04526a0ed55326676f1b245b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LY3YSQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIE3jQ%2B8o9Fv8j7Dr7IT3cj6QbDB0ORItVGBsAbxzNz3lAiEA9XYTkabiu5vq1n%2FQUllw%2FYhYgUtPPo3kf79v8LBxziMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDZj2re6LGR5nrvRCrcA3dHZjRznSDofNuFAsCSQ26QqPTL%2BcY%2Fet4Qr5lrr6%2BS0TBKfg5DeZh8f1Lm4%2FJWfRuxy5TIlQWG32cvRqwlUQ5dAfJnKjiXriKkNVVjMlMJlAx%2BvhvDhA2HdxFgeWN9KOipszHEI%2BnwA%2FLhubwX%2Bx1c3Czhg3nuJ5GpTG3uW4c8rTrhyQEXTLj6tnMLkxoCknvHdzmLIiVPuXrGWSClWNLQBMWU%2BIbV4dX4SgnMDhN2%2B6Oyuveyd%2BEHFWlkkvtvUs3kZF7OY20EbFNQ2lWZ4rh%2BXfRffQ11icHLm%2FYINOLTKgFlaGOWg82I1IExT9LFLk1VhzBaK2yiQThiHliSneiL9xHDRqQ7Pg4SPLl6iRTMOBQ0soJe2F1wl0D9evlIVPp5zdQeHi8emZEnHh%2FpOFsSHjBEVWWbfP6rUv5IcYWDxr4oBJeQIGiZUrZGD1vxw%2FuwLzMfT%2FtjtPUFztMhyRJFVEK0eR83qDEEgG1UtX6Rbl9db6JDhRvIMEEeCNiRrmrg9vEm14MyJ4f%2Ftnngft8Ya06R7TH5x4rXw24KaXsRNM2oEGbIdCdO8XTM8liO2FvqvzBC%2BQuDXZ15ACMnJm2cRxrXZBc0hLfMms4OfA%2F0oZmAohm%2F422fjYs6MNXQv74GOqUBuU9ghCcrvlOZZCV6OrHRlNxWLtLo%2FMgpdEhlWXz%2F8BFxO0YrQTbOBvgMV%2Bg%2FV6K1ol02sQcELZJ8vbI%2FO5qLDS4mK5kRZg7IzCM2tTsmt22A%2FkV3FUl48nIUl0oDZFXtorqmtiEcPSlwDAiYYB3IxZkkRhkiYjXWXfv6luEQ1FXVbhozkQqEjMdNygHIxs0JXzW%2Byi4qvU%2FYwKlsCaioLCzs47kf&X-Amz-Signature=61c0078f317ca93757d0674e4c338558ce6e322dd41ec695e7bbb4884cbecd37&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LY3YSQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIE3jQ%2B8o9Fv8j7Dr7IT3cj6QbDB0ORItVGBsAbxzNz3lAiEA9XYTkabiu5vq1n%2FQUllw%2FYhYgUtPPo3kf79v8LBxziMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDZj2re6LGR5nrvRCrcA3dHZjRznSDofNuFAsCSQ26QqPTL%2BcY%2Fet4Qr5lrr6%2BS0TBKfg5DeZh8f1Lm4%2FJWfRuxy5TIlQWG32cvRqwlUQ5dAfJnKjiXriKkNVVjMlMJlAx%2BvhvDhA2HdxFgeWN9KOipszHEI%2BnwA%2FLhubwX%2Bx1c3Czhg3nuJ5GpTG3uW4c8rTrhyQEXTLj6tnMLkxoCknvHdzmLIiVPuXrGWSClWNLQBMWU%2BIbV4dX4SgnMDhN2%2B6Oyuveyd%2BEHFWlkkvtvUs3kZF7OY20EbFNQ2lWZ4rh%2BXfRffQ11icHLm%2FYINOLTKgFlaGOWg82I1IExT9LFLk1VhzBaK2yiQThiHliSneiL9xHDRqQ7Pg4SPLl6iRTMOBQ0soJe2F1wl0D9evlIVPp5zdQeHi8emZEnHh%2FpOFsSHjBEVWWbfP6rUv5IcYWDxr4oBJeQIGiZUrZGD1vxw%2FuwLzMfT%2FtjtPUFztMhyRJFVEK0eR83qDEEgG1UtX6Rbl9db6JDhRvIMEEeCNiRrmrg9vEm14MyJ4f%2Ftnngft8Ya06R7TH5x4rXw24KaXsRNM2oEGbIdCdO8XTM8liO2FvqvzBC%2BQuDXZ15ACMnJm2cRxrXZBc0hLfMms4OfA%2F0oZmAohm%2F422fjYs6MNXQv74GOqUBuU9ghCcrvlOZZCV6OrHRlNxWLtLo%2FMgpdEhlWXz%2F8BFxO0YrQTbOBvgMV%2Bg%2FV6K1ol02sQcELZJ8vbI%2FO5qLDS4mK5kRZg7IzCM2tTsmt22A%2FkV3FUl48nIUl0oDZFXtorqmtiEcPSlwDAiYYB3IxZkkRhkiYjXWXfv6luEQ1FXVbhozkQqEjMdNygHIxs0JXzW%2Byi4qvU%2FYwKlsCaioLCzs47kf&X-Amz-Signature=d3c9a954109da4b1f7c55eaf7b5792d96392a33d3167a22bb7e12c146d06f9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
