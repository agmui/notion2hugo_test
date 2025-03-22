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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJJSN4H%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCZJ9vmeo%2B6mybHCS6QNu%2F7Be6irQw1P4pBGE41TAhEeQIgdAA7MMHUxQ07JlgN2QW%2F9gkZfg2y0YDv1WtzLsahprQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjeoiKWDitWXlPRZCrcAwxW%2Bzs5Kx%2FvpO6vYahiPmBsd%2BNXsQ3812ma7INoSSmZGyQVIoZLlEZP%2FLv0xOR0Y2m%2FpqwsQ9UcurCFcRtPTIWzNHP5efrt4fvS4%2Fn%2BnoiuTB8ccwSD5BgD2zaZUcn8rsPCKLWD32jyUHdts5Q%2BjgjMt0446to5XkHyvxqFseJ7tngAdEuwUqpWq4tvxh6XeQPl3qZnFk69O66jTHM2hgGK3WF1VUxVQujRVCJTZIAhqOUFi9OqSYRHafMliN6S9yJ%2BkthsWh215cWrj0zBI3SNmQohUG%2BYbCM%2FbRE3%2BBiqOPnLe5mGjWnzy25%2FOaMKjMV%2FbBkg%2FpMPT9p%2BJ3IrOIgNhlCFHr5tdd%2BFfyQZx0NMikThydrwnDVZX2a1s4SBvcpo9cYFQ%2BUqe0EB6IZHGy13CIJ3aQyYAUwHsI3B7FkdZrKVWUHMXIYTONPb4zKG6JTy56LtAEC5c54FXKVP8MfEhHnNCdtEiPxgpFccBNddgtggi9bseroK2dp8g5g0Ns2lgyBoYYusEBExTzTNuMPNSSvxNc2i9PlBEZ6vlcYeXsPXlFp8GQYdSxWZT2XeN8nh0%2BueHkFG1aHaGg9EOj%2FbIOSYcUoAhj8dN40HthqTQWXpxsVbqj%2BLtkPrML6x%2B74GOqUBvH5Sy%2Fufe6klUlHrWat4H68%2BZ92bwiolqPThUn9%2BXZU%2B1DHF5pC0EUIrW1Txo0VcVVU3idHHXKTImMMjHMmTUFLjCnicJniKhGoAx097f9Pv2As%2BZxMBPoLHuOGP8ogwOvF8na0F%2BWDBuO54uO3LkPmj9fFlA%2BA2PX9WsECepoMs3uYwrsxitPK2fqnoxpYvVIONKuVMchRGz2%2FOjFi6uMzcTqHz&X-Amz-Signature=5a613b6c65448eeaeccce4ade4058389e40e4e9dffc7968a0f706ed6aaf378da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJJSN4H%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCZJ9vmeo%2B6mybHCS6QNu%2F7Be6irQw1P4pBGE41TAhEeQIgdAA7MMHUxQ07JlgN2QW%2F9gkZfg2y0YDv1WtzLsahprQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjeoiKWDitWXlPRZCrcAwxW%2Bzs5Kx%2FvpO6vYahiPmBsd%2BNXsQ3812ma7INoSSmZGyQVIoZLlEZP%2FLv0xOR0Y2m%2FpqwsQ9UcurCFcRtPTIWzNHP5efrt4fvS4%2Fn%2BnoiuTB8ccwSD5BgD2zaZUcn8rsPCKLWD32jyUHdts5Q%2BjgjMt0446to5XkHyvxqFseJ7tngAdEuwUqpWq4tvxh6XeQPl3qZnFk69O66jTHM2hgGK3WF1VUxVQujRVCJTZIAhqOUFi9OqSYRHafMliN6S9yJ%2BkthsWh215cWrj0zBI3SNmQohUG%2BYbCM%2FbRE3%2BBiqOPnLe5mGjWnzy25%2FOaMKjMV%2FbBkg%2FpMPT9p%2BJ3IrOIgNhlCFHr5tdd%2BFfyQZx0NMikThydrwnDVZX2a1s4SBvcpo9cYFQ%2BUqe0EB6IZHGy13CIJ3aQyYAUwHsI3B7FkdZrKVWUHMXIYTONPb4zKG6JTy56LtAEC5c54FXKVP8MfEhHnNCdtEiPxgpFccBNddgtggi9bseroK2dp8g5g0Ns2lgyBoYYusEBExTzTNuMPNSSvxNc2i9PlBEZ6vlcYeXsPXlFp8GQYdSxWZT2XeN8nh0%2BueHkFG1aHaGg9EOj%2FbIOSYcUoAhj8dN40HthqTQWXpxsVbqj%2BLtkPrML6x%2B74GOqUBvH5Sy%2Fufe6klUlHrWat4H68%2BZ92bwiolqPThUn9%2BXZU%2B1DHF5pC0EUIrW1Txo0VcVVU3idHHXKTImMMjHMmTUFLjCnicJniKhGoAx097f9Pv2As%2BZxMBPoLHuOGP8ogwOvF8na0F%2BWDBuO54uO3LkPmj9fFlA%2BA2PX9WsECepoMs3uYwrsxitPK2fqnoxpYvVIONKuVMchRGz2%2FOjFi6uMzcTqHz&X-Amz-Signature=ad5bc9fd6ce38e46148e37815d478b5abae23bb6cbfdbc79328981c874a4172a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJJSN4H%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCZJ9vmeo%2B6mybHCS6QNu%2F7Be6irQw1P4pBGE41TAhEeQIgdAA7MMHUxQ07JlgN2QW%2F9gkZfg2y0YDv1WtzLsahprQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjeoiKWDitWXlPRZCrcAwxW%2Bzs5Kx%2FvpO6vYahiPmBsd%2BNXsQ3812ma7INoSSmZGyQVIoZLlEZP%2FLv0xOR0Y2m%2FpqwsQ9UcurCFcRtPTIWzNHP5efrt4fvS4%2Fn%2BnoiuTB8ccwSD5BgD2zaZUcn8rsPCKLWD32jyUHdts5Q%2BjgjMt0446to5XkHyvxqFseJ7tngAdEuwUqpWq4tvxh6XeQPl3qZnFk69O66jTHM2hgGK3WF1VUxVQujRVCJTZIAhqOUFi9OqSYRHafMliN6S9yJ%2BkthsWh215cWrj0zBI3SNmQohUG%2BYbCM%2FbRE3%2BBiqOPnLe5mGjWnzy25%2FOaMKjMV%2FbBkg%2FpMPT9p%2BJ3IrOIgNhlCFHr5tdd%2BFfyQZx0NMikThydrwnDVZX2a1s4SBvcpo9cYFQ%2BUqe0EB6IZHGy13CIJ3aQyYAUwHsI3B7FkdZrKVWUHMXIYTONPb4zKG6JTy56LtAEC5c54FXKVP8MfEhHnNCdtEiPxgpFccBNddgtggi9bseroK2dp8g5g0Ns2lgyBoYYusEBExTzTNuMPNSSvxNc2i9PlBEZ6vlcYeXsPXlFp8GQYdSxWZT2XeN8nh0%2BueHkFG1aHaGg9EOj%2FbIOSYcUoAhj8dN40HthqTQWXpxsVbqj%2BLtkPrML6x%2B74GOqUBvH5Sy%2Fufe6klUlHrWat4H68%2BZ92bwiolqPThUn9%2BXZU%2B1DHF5pC0EUIrW1Txo0VcVVU3idHHXKTImMMjHMmTUFLjCnicJniKhGoAx097f9Pv2As%2BZxMBPoLHuOGP8ogwOvF8na0F%2BWDBuO54uO3LkPmj9fFlA%2BA2PX9WsECepoMs3uYwrsxitPK2fqnoxpYvVIONKuVMchRGz2%2FOjFi6uMzcTqHz&X-Amz-Signature=231ee2fef32f801da14589d383cb96220a0bf983e6cff565cfb68b2e04c67ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJJSN4H%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCZJ9vmeo%2B6mybHCS6QNu%2F7Be6irQw1P4pBGE41TAhEeQIgdAA7MMHUxQ07JlgN2QW%2F9gkZfg2y0YDv1WtzLsahprQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjeoiKWDitWXlPRZCrcAwxW%2Bzs5Kx%2FvpO6vYahiPmBsd%2BNXsQ3812ma7INoSSmZGyQVIoZLlEZP%2FLv0xOR0Y2m%2FpqwsQ9UcurCFcRtPTIWzNHP5efrt4fvS4%2Fn%2BnoiuTB8ccwSD5BgD2zaZUcn8rsPCKLWD32jyUHdts5Q%2BjgjMt0446to5XkHyvxqFseJ7tngAdEuwUqpWq4tvxh6XeQPl3qZnFk69O66jTHM2hgGK3WF1VUxVQujRVCJTZIAhqOUFi9OqSYRHafMliN6S9yJ%2BkthsWh215cWrj0zBI3SNmQohUG%2BYbCM%2FbRE3%2BBiqOPnLe5mGjWnzy25%2FOaMKjMV%2FbBkg%2FpMPT9p%2BJ3IrOIgNhlCFHr5tdd%2BFfyQZx0NMikThydrwnDVZX2a1s4SBvcpo9cYFQ%2BUqe0EB6IZHGy13CIJ3aQyYAUwHsI3B7FkdZrKVWUHMXIYTONPb4zKG6JTy56LtAEC5c54FXKVP8MfEhHnNCdtEiPxgpFccBNddgtggi9bseroK2dp8g5g0Ns2lgyBoYYusEBExTzTNuMPNSSvxNc2i9PlBEZ6vlcYeXsPXlFp8GQYdSxWZT2XeN8nh0%2BueHkFG1aHaGg9EOj%2FbIOSYcUoAhj8dN40HthqTQWXpxsVbqj%2BLtkPrML6x%2B74GOqUBvH5Sy%2Fufe6klUlHrWat4H68%2BZ92bwiolqPThUn9%2BXZU%2B1DHF5pC0EUIrW1Txo0VcVVU3idHHXKTImMMjHMmTUFLjCnicJniKhGoAx097f9Pv2As%2BZxMBPoLHuOGP8ogwOvF8na0F%2BWDBuO54uO3LkPmj9fFlA%2BA2PX9WsECepoMs3uYwrsxitPK2fqnoxpYvVIONKuVMchRGz2%2FOjFi6uMzcTqHz&X-Amz-Signature=db3d9f7c3a81fce3e87b44f9f478951cab0970cda2e884fa19121d643b5d2794&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJJSN4H%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCZJ9vmeo%2B6mybHCS6QNu%2F7Be6irQw1P4pBGE41TAhEeQIgdAA7MMHUxQ07JlgN2QW%2F9gkZfg2y0YDv1WtzLsahprQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjeoiKWDitWXlPRZCrcAwxW%2Bzs5Kx%2FvpO6vYahiPmBsd%2BNXsQ3812ma7INoSSmZGyQVIoZLlEZP%2FLv0xOR0Y2m%2FpqwsQ9UcurCFcRtPTIWzNHP5efrt4fvS4%2Fn%2BnoiuTB8ccwSD5BgD2zaZUcn8rsPCKLWD32jyUHdts5Q%2BjgjMt0446to5XkHyvxqFseJ7tngAdEuwUqpWq4tvxh6XeQPl3qZnFk69O66jTHM2hgGK3WF1VUxVQujRVCJTZIAhqOUFi9OqSYRHafMliN6S9yJ%2BkthsWh215cWrj0zBI3SNmQohUG%2BYbCM%2FbRE3%2BBiqOPnLe5mGjWnzy25%2FOaMKjMV%2FbBkg%2FpMPT9p%2BJ3IrOIgNhlCFHr5tdd%2BFfyQZx0NMikThydrwnDVZX2a1s4SBvcpo9cYFQ%2BUqe0EB6IZHGy13CIJ3aQyYAUwHsI3B7FkdZrKVWUHMXIYTONPb4zKG6JTy56LtAEC5c54FXKVP8MfEhHnNCdtEiPxgpFccBNddgtggi9bseroK2dp8g5g0Ns2lgyBoYYusEBExTzTNuMPNSSvxNc2i9PlBEZ6vlcYeXsPXlFp8GQYdSxWZT2XeN8nh0%2BueHkFG1aHaGg9EOj%2FbIOSYcUoAhj8dN40HthqTQWXpxsVbqj%2BLtkPrML6x%2B74GOqUBvH5Sy%2Fufe6klUlHrWat4H68%2BZ92bwiolqPThUn9%2BXZU%2B1DHF5pC0EUIrW1Txo0VcVVU3idHHXKTImMMjHMmTUFLjCnicJniKhGoAx097f9Pv2As%2BZxMBPoLHuOGP8ogwOvF8na0F%2BWDBuO54uO3LkPmj9fFlA%2BA2PX9WsECepoMs3uYwrsxitPK2fqnoxpYvVIONKuVMchRGz2%2FOjFi6uMzcTqHz&X-Amz-Signature=d243786cd307ab52dc4bccdef451e8883a51fa1583723e726e1a6bb63544dd84&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
