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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FZPIKV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2B2VBkwGBVftLZxnc%2FFWLWAEtavrJdASGVbO%2BsRtFCAIgfJ4dBkGjbtI%2B%2FRvc0xpzLMFvN0c4MwYmMldfytyjkyYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJo26PK80ogyUJMiISrcAwsPKtIGeLl8bTd3WeYb04I3JoEdDcSbzr7B4Rv%2Bekf3blYTPWwitbN5CeI7GUQr3%2Fe7riNpLeTTM%2Blx0mlEFbGJwlyFLaGuF8ZiXAQ4z575qCNWjlj3dR%2BIl9BWUzFCBkjMHf8d36J1dpiLKWPn853Lc%2F12yOAZ%2BC0tEhzO%2FyQrjv4RPVzxff6UfKF7l%2FCSARX31xYPU9DUgbESW%2Bq9rh4yNzrf6h54svF0w6u1gDqAaPKl%2BPYckD%2FHTUYjniOjjJzKD4gQLI7%2FBxCRhPHag5iTL4zNW9XiksaTBZbhVR4ZcOumdy1cpKH1LWc3BQXj3czWCV44CzfHguBSHrWq3w%2Fyy3uDOfjoyBdSBuAQANYiwwpDMiVvIBQndFJzX6hxQ%2B%2BBLFYRhz4H%2FPcusL6PQVOfD%2BIulphr9S8E8MY9CTj%2BqFyIu4pn5lg15CtqPVLCLwr%2FncS2jdNNU8wtLj%2F%2Bv0iVuOr6seBTyfylq0nue5L6AhqngZMtNY3CxQsMPtZKx96Ua86F2dRNIgGt%2Bk%2FUKQBKgbTZkYLV0jZcAUAPq1QAWnc%2Bz4sLZMaAOLH9OaJ%2FVH5DwgVf%2BO6mznifW2NiZ45bpTz2tA%2FspdeQ1kmRuttdXrdJFcu6EzuyKkvaMLLwtsQGOqUBY7u8V3mPDAptjlKHw99hQVChuN9Eu3tyKFgAu1p2s3IUVnEaDAHvGHyjnlynACUwilExCcAHNQbKg14uldZ5CVWFeeiluRFRxUZeSIyQiT5VA9dre4MDlu7QDXFM6F9Ba3H91EAS%2BHyAOzsLUpScOcgpQ59mYS9NCBxcUk70tVVZXgME3%2FGJ2%2FXXxIU4I4li6T%2BlXYcouUL9MiB3xjthTM4uVgXP&X-Amz-Signature=0252faaae6fcb23044340b98b00fc9539dc66af9d45ff48eb9e7929364d4371a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FZPIKV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2B2VBkwGBVftLZxnc%2FFWLWAEtavrJdASGVbO%2BsRtFCAIgfJ4dBkGjbtI%2B%2FRvc0xpzLMFvN0c4MwYmMldfytyjkyYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJo26PK80ogyUJMiISrcAwsPKtIGeLl8bTd3WeYb04I3JoEdDcSbzr7B4Rv%2Bekf3blYTPWwitbN5CeI7GUQr3%2Fe7riNpLeTTM%2Blx0mlEFbGJwlyFLaGuF8ZiXAQ4z575qCNWjlj3dR%2BIl9BWUzFCBkjMHf8d36J1dpiLKWPn853Lc%2F12yOAZ%2BC0tEhzO%2FyQrjv4RPVzxff6UfKF7l%2FCSARX31xYPU9DUgbESW%2Bq9rh4yNzrf6h54svF0w6u1gDqAaPKl%2BPYckD%2FHTUYjniOjjJzKD4gQLI7%2FBxCRhPHag5iTL4zNW9XiksaTBZbhVR4ZcOumdy1cpKH1LWc3BQXj3czWCV44CzfHguBSHrWq3w%2Fyy3uDOfjoyBdSBuAQANYiwwpDMiVvIBQndFJzX6hxQ%2B%2BBLFYRhz4H%2FPcusL6PQVOfD%2BIulphr9S8E8MY9CTj%2BqFyIu4pn5lg15CtqPVLCLwr%2FncS2jdNNU8wtLj%2F%2Bv0iVuOr6seBTyfylq0nue5L6AhqngZMtNY3CxQsMPtZKx96Ua86F2dRNIgGt%2Bk%2FUKQBKgbTZkYLV0jZcAUAPq1QAWnc%2Bz4sLZMaAOLH9OaJ%2FVH5DwgVf%2BO6mznifW2NiZ45bpTz2tA%2FspdeQ1kmRuttdXrdJFcu6EzuyKkvaMLLwtsQGOqUBY7u8V3mPDAptjlKHw99hQVChuN9Eu3tyKFgAu1p2s3IUVnEaDAHvGHyjnlynACUwilExCcAHNQbKg14uldZ5CVWFeeiluRFRxUZeSIyQiT5VA9dre4MDlu7QDXFM6F9Ba3H91EAS%2BHyAOzsLUpScOcgpQ59mYS9NCBxcUk70tVVZXgME3%2FGJ2%2FXXxIU4I4li6T%2BlXYcouUL9MiB3xjthTM4uVgXP&X-Amz-Signature=63a566eed6565c94d52fa3b3097a0f27a9a05a02a880f6d813fe9f182a549bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FZPIKV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2B2VBkwGBVftLZxnc%2FFWLWAEtavrJdASGVbO%2BsRtFCAIgfJ4dBkGjbtI%2B%2FRvc0xpzLMFvN0c4MwYmMldfytyjkyYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJo26PK80ogyUJMiISrcAwsPKtIGeLl8bTd3WeYb04I3JoEdDcSbzr7B4Rv%2Bekf3blYTPWwitbN5CeI7GUQr3%2Fe7riNpLeTTM%2Blx0mlEFbGJwlyFLaGuF8ZiXAQ4z575qCNWjlj3dR%2BIl9BWUzFCBkjMHf8d36J1dpiLKWPn853Lc%2F12yOAZ%2BC0tEhzO%2FyQrjv4RPVzxff6UfKF7l%2FCSARX31xYPU9DUgbESW%2Bq9rh4yNzrf6h54svF0w6u1gDqAaPKl%2BPYckD%2FHTUYjniOjjJzKD4gQLI7%2FBxCRhPHag5iTL4zNW9XiksaTBZbhVR4ZcOumdy1cpKH1LWc3BQXj3czWCV44CzfHguBSHrWq3w%2Fyy3uDOfjoyBdSBuAQANYiwwpDMiVvIBQndFJzX6hxQ%2B%2BBLFYRhz4H%2FPcusL6PQVOfD%2BIulphr9S8E8MY9CTj%2BqFyIu4pn5lg15CtqPVLCLwr%2FncS2jdNNU8wtLj%2F%2Bv0iVuOr6seBTyfylq0nue5L6AhqngZMtNY3CxQsMPtZKx96Ua86F2dRNIgGt%2Bk%2FUKQBKgbTZkYLV0jZcAUAPq1QAWnc%2Bz4sLZMaAOLH9OaJ%2FVH5DwgVf%2BO6mznifW2NiZ45bpTz2tA%2FspdeQ1kmRuttdXrdJFcu6EzuyKkvaMLLwtsQGOqUBY7u8V3mPDAptjlKHw99hQVChuN9Eu3tyKFgAu1p2s3IUVnEaDAHvGHyjnlynACUwilExCcAHNQbKg14uldZ5CVWFeeiluRFRxUZeSIyQiT5VA9dre4MDlu7QDXFM6F9Ba3H91EAS%2BHyAOzsLUpScOcgpQ59mYS9NCBxcUk70tVVZXgME3%2FGJ2%2FXXxIU4I4li6T%2BlXYcouUL9MiB3xjthTM4uVgXP&X-Amz-Signature=438197b5026c8893087522f14b8777234c9d2ba2568601a4e69eab5c6344d486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FZPIKV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2B2VBkwGBVftLZxnc%2FFWLWAEtavrJdASGVbO%2BsRtFCAIgfJ4dBkGjbtI%2B%2FRvc0xpzLMFvN0c4MwYmMldfytyjkyYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJo26PK80ogyUJMiISrcAwsPKtIGeLl8bTd3WeYb04I3JoEdDcSbzr7B4Rv%2Bekf3blYTPWwitbN5CeI7GUQr3%2Fe7riNpLeTTM%2Blx0mlEFbGJwlyFLaGuF8ZiXAQ4z575qCNWjlj3dR%2BIl9BWUzFCBkjMHf8d36J1dpiLKWPn853Lc%2F12yOAZ%2BC0tEhzO%2FyQrjv4RPVzxff6UfKF7l%2FCSARX31xYPU9DUgbESW%2Bq9rh4yNzrf6h54svF0w6u1gDqAaPKl%2BPYckD%2FHTUYjniOjjJzKD4gQLI7%2FBxCRhPHag5iTL4zNW9XiksaTBZbhVR4ZcOumdy1cpKH1LWc3BQXj3czWCV44CzfHguBSHrWq3w%2Fyy3uDOfjoyBdSBuAQANYiwwpDMiVvIBQndFJzX6hxQ%2B%2BBLFYRhz4H%2FPcusL6PQVOfD%2BIulphr9S8E8MY9CTj%2BqFyIu4pn5lg15CtqPVLCLwr%2FncS2jdNNU8wtLj%2F%2Bv0iVuOr6seBTyfylq0nue5L6AhqngZMtNY3CxQsMPtZKx96Ua86F2dRNIgGt%2Bk%2FUKQBKgbTZkYLV0jZcAUAPq1QAWnc%2Bz4sLZMaAOLH9OaJ%2FVH5DwgVf%2BO6mznifW2NiZ45bpTz2tA%2FspdeQ1kmRuttdXrdJFcu6EzuyKkvaMLLwtsQGOqUBY7u8V3mPDAptjlKHw99hQVChuN9Eu3tyKFgAu1p2s3IUVnEaDAHvGHyjnlynACUwilExCcAHNQbKg14uldZ5CVWFeeiluRFRxUZeSIyQiT5VA9dre4MDlu7QDXFM6F9Ba3H91EAS%2BHyAOzsLUpScOcgpQ59mYS9NCBxcUk70tVVZXgME3%2FGJ2%2FXXxIU4I4li6T%2BlXYcouUL9MiB3xjthTM4uVgXP&X-Amz-Signature=26c8a5cf301944cb6c8f1f5a2f4fae9a1444ab1750d5a57449423b82c303ab76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FZPIKV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2B2VBkwGBVftLZxnc%2FFWLWAEtavrJdASGVbO%2BsRtFCAIgfJ4dBkGjbtI%2B%2FRvc0xpzLMFvN0c4MwYmMldfytyjkyYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJo26PK80ogyUJMiISrcAwsPKtIGeLl8bTd3WeYb04I3JoEdDcSbzr7B4Rv%2Bekf3blYTPWwitbN5CeI7GUQr3%2Fe7riNpLeTTM%2Blx0mlEFbGJwlyFLaGuF8ZiXAQ4z575qCNWjlj3dR%2BIl9BWUzFCBkjMHf8d36J1dpiLKWPn853Lc%2F12yOAZ%2BC0tEhzO%2FyQrjv4RPVzxff6UfKF7l%2FCSARX31xYPU9DUgbESW%2Bq9rh4yNzrf6h54svF0w6u1gDqAaPKl%2BPYckD%2FHTUYjniOjjJzKD4gQLI7%2FBxCRhPHag5iTL4zNW9XiksaTBZbhVR4ZcOumdy1cpKH1LWc3BQXj3czWCV44CzfHguBSHrWq3w%2Fyy3uDOfjoyBdSBuAQANYiwwpDMiVvIBQndFJzX6hxQ%2B%2BBLFYRhz4H%2FPcusL6PQVOfD%2BIulphr9S8E8MY9CTj%2BqFyIu4pn5lg15CtqPVLCLwr%2FncS2jdNNU8wtLj%2F%2Bv0iVuOr6seBTyfylq0nue5L6AhqngZMtNY3CxQsMPtZKx96Ua86F2dRNIgGt%2Bk%2FUKQBKgbTZkYLV0jZcAUAPq1QAWnc%2Bz4sLZMaAOLH9OaJ%2FVH5DwgVf%2BO6mznifW2NiZ45bpTz2tA%2FspdeQ1kmRuttdXrdJFcu6EzuyKkvaMLLwtsQGOqUBY7u8V3mPDAptjlKHw99hQVChuN9Eu3tyKFgAu1p2s3IUVnEaDAHvGHyjnlynACUwilExCcAHNQbKg14uldZ5CVWFeeiluRFRxUZeSIyQiT5VA9dre4MDlu7QDXFM6F9Ba3H91EAS%2BHyAOzsLUpScOcgpQ59mYS9NCBxcUk70tVVZXgME3%2FGJ2%2FXXxIU4I4li6T%2BlXYcouUL9MiB3xjthTM4uVgXP&X-Amz-Signature=2d58cb5891c453036d7ee743dd0cad18d638070e66e0c1d17b1b4323987ae549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
