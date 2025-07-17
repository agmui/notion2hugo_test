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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIP4QPLB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQD8MFtKe%2FeUot2TQDoiK47iYoLHaRA2996BNn%2F11LH3iwIgbrOzF73M34fSwaXOu7yzL2CE1tEfwOpqiLMIEcGOoBcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFvCEsYKBV%2FrnJ8X7ircA9pGxCBLVOIU6aqzgodbowHuIx6FO%2BrB6aLQp8JO3xKiJpnBBTwGYTjEnfsEgf8NubpGXfRYMuY3ioXrJS%2Boad%2FuPIP%2BNzEuvI1FwgcFGDkOi3FLWN%2F2X8C9nzoK%2F%2FD1WXHkFbgoqHMFf7HdNdcGc6GnP4NdVZNQhyYDGUg4SJdeSWrZo%2BYLPKk6oSfDfo%2FsJoLe8AcCbNbYrF8erVGLcpq%2BkEnpxW0Spg2A2EDPNgE%2FW8kDv%2F5zwZbfc9Hr4rTioyOcmrgrSU%2BTKAXkjlc7osSHYonV9uwsXuQDFeYYTMNZ8BWdhAsXWuRjdU8lmrktXIhHB5Hz5hnfBarkR18prYJmdOipK4Ws9YQJENJQAIj2VKj3gJQiz%2FSEROmR%2BuTW18h7TGR5583OxBIfXWmWKy6QUwT8wAa4%2BuINNo6s6IgTqpY84cLPMsXOCW5nG6mGQWVhdig6mnWM3sNtBqqUJRZVsJuEKcLRqjZpm9Kkual73qWuhJ%2BnxFASxSqlTM4Er6zFj04qT%2Fh1AGA%2Bwo0myND75%2BS2AfPpkM7ghYiMtamJbETB5RyqVGyLO9mE6rbuIYwXF3im6jQboL4lZ92rRNbEmyD3BhAGdLwkunypt6eyUJtzs2IJmHoKF%2BiXMOzH4cMGOqUBLFthMlf1hK2n8Y1JmNJGvUU4A4mEf%2FID4OchYvETFMEru5vmy8V2UOvEcls3ql81qPcejfN%2FIxKLEP2MZhgBTQoOYi%2BCH9enzVXBEDjnwBpSstwayibX%2FD0awKJeWw7jLPO16GgDRsiZ6DuyxcPsG3HnllECA0ijJ9GZVWJfTeipc6nryirbUj1femGX6WZ7rHpgzkvP3k4qdfiG0qWdo9lR9fny&X-Amz-Signature=e68f7e94a3e26eb69aac95455e302745420645bdd8a60fc236118dafb8d54697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIP4QPLB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQD8MFtKe%2FeUot2TQDoiK47iYoLHaRA2996BNn%2F11LH3iwIgbrOzF73M34fSwaXOu7yzL2CE1tEfwOpqiLMIEcGOoBcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFvCEsYKBV%2FrnJ8X7ircA9pGxCBLVOIU6aqzgodbowHuIx6FO%2BrB6aLQp8JO3xKiJpnBBTwGYTjEnfsEgf8NubpGXfRYMuY3ioXrJS%2Boad%2FuPIP%2BNzEuvI1FwgcFGDkOi3FLWN%2F2X8C9nzoK%2F%2FD1WXHkFbgoqHMFf7HdNdcGc6GnP4NdVZNQhyYDGUg4SJdeSWrZo%2BYLPKk6oSfDfo%2FsJoLe8AcCbNbYrF8erVGLcpq%2BkEnpxW0Spg2A2EDPNgE%2FW8kDv%2F5zwZbfc9Hr4rTioyOcmrgrSU%2BTKAXkjlc7osSHYonV9uwsXuQDFeYYTMNZ8BWdhAsXWuRjdU8lmrktXIhHB5Hz5hnfBarkR18prYJmdOipK4Ws9YQJENJQAIj2VKj3gJQiz%2FSEROmR%2BuTW18h7TGR5583OxBIfXWmWKy6QUwT8wAa4%2BuINNo6s6IgTqpY84cLPMsXOCW5nG6mGQWVhdig6mnWM3sNtBqqUJRZVsJuEKcLRqjZpm9Kkual73qWuhJ%2BnxFASxSqlTM4Er6zFj04qT%2Fh1AGA%2Bwo0myND75%2BS2AfPpkM7ghYiMtamJbETB5RyqVGyLO9mE6rbuIYwXF3im6jQboL4lZ92rRNbEmyD3BhAGdLwkunypt6eyUJtzs2IJmHoKF%2BiXMOzH4cMGOqUBLFthMlf1hK2n8Y1JmNJGvUU4A4mEf%2FID4OchYvETFMEru5vmy8V2UOvEcls3ql81qPcejfN%2FIxKLEP2MZhgBTQoOYi%2BCH9enzVXBEDjnwBpSstwayibX%2FD0awKJeWw7jLPO16GgDRsiZ6DuyxcPsG3HnllECA0ijJ9GZVWJfTeipc6nryirbUj1femGX6WZ7rHpgzkvP3k4qdfiG0qWdo9lR9fny&X-Amz-Signature=af34475982d79bbbc0740c9b9c83df4141279dfc334dd23967e935d158b62034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIP4QPLB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQD8MFtKe%2FeUot2TQDoiK47iYoLHaRA2996BNn%2F11LH3iwIgbrOzF73M34fSwaXOu7yzL2CE1tEfwOpqiLMIEcGOoBcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFvCEsYKBV%2FrnJ8X7ircA9pGxCBLVOIU6aqzgodbowHuIx6FO%2BrB6aLQp8JO3xKiJpnBBTwGYTjEnfsEgf8NubpGXfRYMuY3ioXrJS%2Boad%2FuPIP%2BNzEuvI1FwgcFGDkOi3FLWN%2F2X8C9nzoK%2F%2FD1WXHkFbgoqHMFf7HdNdcGc6GnP4NdVZNQhyYDGUg4SJdeSWrZo%2BYLPKk6oSfDfo%2FsJoLe8AcCbNbYrF8erVGLcpq%2BkEnpxW0Spg2A2EDPNgE%2FW8kDv%2F5zwZbfc9Hr4rTioyOcmrgrSU%2BTKAXkjlc7osSHYonV9uwsXuQDFeYYTMNZ8BWdhAsXWuRjdU8lmrktXIhHB5Hz5hnfBarkR18prYJmdOipK4Ws9YQJENJQAIj2VKj3gJQiz%2FSEROmR%2BuTW18h7TGR5583OxBIfXWmWKy6QUwT8wAa4%2BuINNo6s6IgTqpY84cLPMsXOCW5nG6mGQWVhdig6mnWM3sNtBqqUJRZVsJuEKcLRqjZpm9Kkual73qWuhJ%2BnxFASxSqlTM4Er6zFj04qT%2Fh1AGA%2Bwo0myND75%2BS2AfPpkM7ghYiMtamJbETB5RyqVGyLO9mE6rbuIYwXF3im6jQboL4lZ92rRNbEmyD3BhAGdLwkunypt6eyUJtzs2IJmHoKF%2BiXMOzH4cMGOqUBLFthMlf1hK2n8Y1JmNJGvUU4A4mEf%2FID4OchYvETFMEru5vmy8V2UOvEcls3ql81qPcejfN%2FIxKLEP2MZhgBTQoOYi%2BCH9enzVXBEDjnwBpSstwayibX%2FD0awKJeWw7jLPO16GgDRsiZ6DuyxcPsG3HnllECA0ijJ9GZVWJfTeipc6nryirbUj1femGX6WZ7rHpgzkvP3k4qdfiG0qWdo9lR9fny&X-Amz-Signature=649f842e3844993c6c75ed3f458e1c5d92a63086bae2a7627534cf6dc14e06d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIP4QPLB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQD8MFtKe%2FeUot2TQDoiK47iYoLHaRA2996BNn%2F11LH3iwIgbrOzF73M34fSwaXOu7yzL2CE1tEfwOpqiLMIEcGOoBcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFvCEsYKBV%2FrnJ8X7ircA9pGxCBLVOIU6aqzgodbowHuIx6FO%2BrB6aLQp8JO3xKiJpnBBTwGYTjEnfsEgf8NubpGXfRYMuY3ioXrJS%2Boad%2FuPIP%2BNzEuvI1FwgcFGDkOi3FLWN%2F2X8C9nzoK%2F%2FD1WXHkFbgoqHMFf7HdNdcGc6GnP4NdVZNQhyYDGUg4SJdeSWrZo%2BYLPKk6oSfDfo%2FsJoLe8AcCbNbYrF8erVGLcpq%2BkEnpxW0Spg2A2EDPNgE%2FW8kDv%2F5zwZbfc9Hr4rTioyOcmrgrSU%2BTKAXkjlc7osSHYonV9uwsXuQDFeYYTMNZ8BWdhAsXWuRjdU8lmrktXIhHB5Hz5hnfBarkR18prYJmdOipK4Ws9YQJENJQAIj2VKj3gJQiz%2FSEROmR%2BuTW18h7TGR5583OxBIfXWmWKy6QUwT8wAa4%2BuINNo6s6IgTqpY84cLPMsXOCW5nG6mGQWVhdig6mnWM3sNtBqqUJRZVsJuEKcLRqjZpm9Kkual73qWuhJ%2BnxFASxSqlTM4Er6zFj04qT%2Fh1AGA%2Bwo0myND75%2BS2AfPpkM7ghYiMtamJbETB5RyqVGyLO9mE6rbuIYwXF3im6jQboL4lZ92rRNbEmyD3BhAGdLwkunypt6eyUJtzs2IJmHoKF%2BiXMOzH4cMGOqUBLFthMlf1hK2n8Y1JmNJGvUU4A4mEf%2FID4OchYvETFMEru5vmy8V2UOvEcls3ql81qPcejfN%2FIxKLEP2MZhgBTQoOYi%2BCH9enzVXBEDjnwBpSstwayibX%2FD0awKJeWw7jLPO16GgDRsiZ6DuyxcPsG3HnllECA0ijJ9GZVWJfTeipc6nryirbUj1femGX6WZ7rHpgzkvP3k4qdfiG0qWdo9lR9fny&X-Amz-Signature=a9f68bdfa4f95488c5b1e80d336af669d1baf176fcaa2b7edb78975d2033d744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIP4QPLB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQD8MFtKe%2FeUot2TQDoiK47iYoLHaRA2996BNn%2F11LH3iwIgbrOzF73M34fSwaXOu7yzL2CE1tEfwOpqiLMIEcGOoBcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFvCEsYKBV%2FrnJ8X7ircA9pGxCBLVOIU6aqzgodbowHuIx6FO%2BrB6aLQp8JO3xKiJpnBBTwGYTjEnfsEgf8NubpGXfRYMuY3ioXrJS%2Boad%2FuPIP%2BNzEuvI1FwgcFGDkOi3FLWN%2F2X8C9nzoK%2F%2FD1WXHkFbgoqHMFf7HdNdcGc6GnP4NdVZNQhyYDGUg4SJdeSWrZo%2BYLPKk6oSfDfo%2FsJoLe8AcCbNbYrF8erVGLcpq%2BkEnpxW0Spg2A2EDPNgE%2FW8kDv%2F5zwZbfc9Hr4rTioyOcmrgrSU%2BTKAXkjlc7osSHYonV9uwsXuQDFeYYTMNZ8BWdhAsXWuRjdU8lmrktXIhHB5Hz5hnfBarkR18prYJmdOipK4Ws9YQJENJQAIj2VKj3gJQiz%2FSEROmR%2BuTW18h7TGR5583OxBIfXWmWKy6QUwT8wAa4%2BuINNo6s6IgTqpY84cLPMsXOCW5nG6mGQWVhdig6mnWM3sNtBqqUJRZVsJuEKcLRqjZpm9Kkual73qWuhJ%2BnxFASxSqlTM4Er6zFj04qT%2Fh1AGA%2Bwo0myND75%2BS2AfPpkM7ghYiMtamJbETB5RyqVGyLO9mE6rbuIYwXF3im6jQboL4lZ92rRNbEmyD3BhAGdLwkunypt6eyUJtzs2IJmHoKF%2BiXMOzH4cMGOqUBLFthMlf1hK2n8Y1JmNJGvUU4A4mEf%2FID4OchYvETFMEru5vmy8V2UOvEcls3ql81qPcejfN%2FIxKLEP2MZhgBTQoOYi%2BCH9enzVXBEDjnwBpSstwayibX%2FD0awKJeWw7jLPO16GgDRsiZ6DuyxcPsG3HnllECA0ijJ9GZVWJfTeipc6nryirbUj1femGX6WZ7rHpgzkvP3k4qdfiG0qWdo9lR9fny&X-Amz-Signature=b0b95e28721103952b94aa4f691effd961df1325d2749df49c47eeaf40dc6757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
