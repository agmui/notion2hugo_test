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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64HHWLW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBttDgQaJ63tRjQB8yZdVqQXTjSQH1pfZ25gSwjMkOmgIgYPaD6Bh80ctEVKHkDpNhhdgAsbNG7mODZYWOr0GPqCQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDP%2F%2BcS49EKcJ9PQWyircA8elDoTxb8QI2XBrosEwN6p4%2B1v3Br6XJXElwZaC8T4Oc8980hCPVwpV1EXJzm%2FXJBhRbNq9USfKmfy9JC4D%2BwBRmx9xFEW%2FG6ogUj8yafH5wM7dYy51uGSF90Udr3MyA56XjD594jd%2BlhOY3dQbYKXu3p8%2BKkdE%2BX8T8EzWOPy1CArAlzJUEKQRQcxVD0%2FXw%2B0T9eNLKjr3hE0SxwKg1Av9yVcoZ5xY4fH9SClUWlsStUJNc4smCyjCReGkDuazAxlIKTSq5Dt3QxLqmMg4tTWQiE3yBuz3ARAzKILMrl1Ffbm52LQY03qZIQPaic39VrgxNmIqoE8e9wZfvgaROtv19t8AHL5gnquabBbc7XVbzlZ6WPD0ROtDsqNZkrXLrAN3KgoaIGHsIObcipnfQK7nyt9y5UuCURO0kESKjR%2BWYRnOUT9Os1pWWazaBOtR803%2BLabRIstRX1IK43IEqkpGMPIvPx2hhOprdQJEG8jOSeYanAqenUiA9cKRmCiDqj3%2Bh%2FmZaKc9OFN0dqvVpS6%2BiymykX3jMzNErqMnphJlPdglDLSGZqXLiOBsQNCnAxQj9f%2FWP%2F4%2BLScffy9vxp9sWmpPUN8SershkyVCAkchtsaFS4eI1pugvlRPMKTo6cAGOqUBiceIDyZUU3B2JkekC3XhO%2BiPUTmBelwqtaW8ZuKwzaOGyKrGKV5jxZsFkFA30qMr82qGnDTyoonWSLzInQm8g3yTJ9phx34%2B7sSjCH9XBVZRQUO5OChOOQWHWq0g7vjPm%2BuOzT0eKMVKOFRdYtsrKLloylRfl4tqA%2FXGmSk2imAb6rhdKZlx%2FG8j8FqUGY74tbc3wWCWAf2eIv%2BA9%2BNhFuGplo01&X-Amz-Signature=e8430748aa964325eeb7dcf82dc0f293a72644dc3fd62dac21c1834a109fe20c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64HHWLW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBttDgQaJ63tRjQB8yZdVqQXTjSQH1pfZ25gSwjMkOmgIgYPaD6Bh80ctEVKHkDpNhhdgAsbNG7mODZYWOr0GPqCQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDP%2F%2BcS49EKcJ9PQWyircA8elDoTxb8QI2XBrosEwN6p4%2B1v3Br6XJXElwZaC8T4Oc8980hCPVwpV1EXJzm%2FXJBhRbNq9USfKmfy9JC4D%2BwBRmx9xFEW%2FG6ogUj8yafH5wM7dYy51uGSF90Udr3MyA56XjD594jd%2BlhOY3dQbYKXu3p8%2BKkdE%2BX8T8EzWOPy1CArAlzJUEKQRQcxVD0%2FXw%2B0T9eNLKjr3hE0SxwKg1Av9yVcoZ5xY4fH9SClUWlsStUJNc4smCyjCReGkDuazAxlIKTSq5Dt3QxLqmMg4tTWQiE3yBuz3ARAzKILMrl1Ffbm52LQY03qZIQPaic39VrgxNmIqoE8e9wZfvgaROtv19t8AHL5gnquabBbc7XVbzlZ6WPD0ROtDsqNZkrXLrAN3KgoaIGHsIObcipnfQK7nyt9y5UuCURO0kESKjR%2BWYRnOUT9Os1pWWazaBOtR803%2BLabRIstRX1IK43IEqkpGMPIvPx2hhOprdQJEG8jOSeYanAqenUiA9cKRmCiDqj3%2Bh%2FmZaKc9OFN0dqvVpS6%2BiymykX3jMzNErqMnphJlPdglDLSGZqXLiOBsQNCnAxQj9f%2FWP%2F4%2BLScffy9vxp9sWmpPUN8SershkyVCAkchtsaFS4eI1pugvlRPMKTo6cAGOqUBiceIDyZUU3B2JkekC3XhO%2BiPUTmBelwqtaW8ZuKwzaOGyKrGKV5jxZsFkFA30qMr82qGnDTyoonWSLzInQm8g3yTJ9phx34%2B7sSjCH9XBVZRQUO5OChOOQWHWq0g7vjPm%2BuOzT0eKMVKOFRdYtsrKLloylRfl4tqA%2FXGmSk2imAb6rhdKZlx%2FG8j8FqUGY74tbc3wWCWAf2eIv%2BA9%2BNhFuGplo01&X-Amz-Signature=bdb3fc44c3be6b0b75f9421d876f38ef88cd5c5976cde889c8348394e634390d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64HHWLW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBttDgQaJ63tRjQB8yZdVqQXTjSQH1pfZ25gSwjMkOmgIgYPaD6Bh80ctEVKHkDpNhhdgAsbNG7mODZYWOr0GPqCQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDP%2F%2BcS49EKcJ9PQWyircA8elDoTxb8QI2XBrosEwN6p4%2B1v3Br6XJXElwZaC8T4Oc8980hCPVwpV1EXJzm%2FXJBhRbNq9USfKmfy9JC4D%2BwBRmx9xFEW%2FG6ogUj8yafH5wM7dYy51uGSF90Udr3MyA56XjD594jd%2BlhOY3dQbYKXu3p8%2BKkdE%2BX8T8EzWOPy1CArAlzJUEKQRQcxVD0%2FXw%2B0T9eNLKjr3hE0SxwKg1Av9yVcoZ5xY4fH9SClUWlsStUJNc4smCyjCReGkDuazAxlIKTSq5Dt3QxLqmMg4tTWQiE3yBuz3ARAzKILMrl1Ffbm52LQY03qZIQPaic39VrgxNmIqoE8e9wZfvgaROtv19t8AHL5gnquabBbc7XVbzlZ6WPD0ROtDsqNZkrXLrAN3KgoaIGHsIObcipnfQK7nyt9y5UuCURO0kESKjR%2BWYRnOUT9Os1pWWazaBOtR803%2BLabRIstRX1IK43IEqkpGMPIvPx2hhOprdQJEG8jOSeYanAqenUiA9cKRmCiDqj3%2Bh%2FmZaKc9OFN0dqvVpS6%2BiymykX3jMzNErqMnphJlPdglDLSGZqXLiOBsQNCnAxQj9f%2FWP%2F4%2BLScffy9vxp9sWmpPUN8SershkyVCAkchtsaFS4eI1pugvlRPMKTo6cAGOqUBiceIDyZUU3B2JkekC3XhO%2BiPUTmBelwqtaW8ZuKwzaOGyKrGKV5jxZsFkFA30qMr82qGnDTyoonWSLzInQm8g3yTJ9phx34%2B7sSjCH9XBVZRQUO5OChOOQWHWq0g7vjPm%2BuOzT0eKMVKOFRdYtsrKLloylRfl4tqA%2FXGmSk2imAb6rhdKZlx%2FG8j8FqUGY74tbc3wWCWAf2eIv%2BA9%2BNhFuGplo01&X-Amz-Signature=4a8a4ea874d5255d8ab2009451de35237076f2800fae8eedebb34a6791594632&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64HHWLW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBttDgQaJ63tRjQB8yZdVqQXTjSQH1pfZ25gSwjMkOmgIgYPaD6Bh80ctEVKHkDpNhhdgAsbNG7mODZYWOr0GPqCQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDP%2F%2BcS49EKcJ9PQWyircA8elDoTxb8QI2XBrosEwN6p4%2B1v3Br6XJXElwZaC8T4Oc8980hCPVwpV1EXJzm%2FXJBhRbNq9USfKmfy9JC4D%2BwBRmx9xFEW%2FG6ogUj8yafH5wM7dYy51uGSF90Udr3MyA56XjD594jd%2BlhOY3dQbYKXu3p8%2BKkdE%2BX8T8EzWOPy1CArAlzJUEKQRQcxVD0%2FXw%2B0T9eNLKjr3hE0SxwKg1Av9yVcoZ5xY4fH9SClUWlsStUJNc4smCyjCReGkDuazAxlIKTSq5Dt3QxLqmMg4tTWQiE3yBuz3ARAzKILMrl1Ffbm52LQY03qZIQPaic39VrgxNmIqoE8e9wZfvgaROtv19t8AHL5gnquabBbc7XVbzlZ6WPD0ROtDsqNZkrXLrAN3KgoaIGHsIObcipnfQK7nyt9y5UuCURO0kESKjR%2BWYRnOUT9Os1pWWazaBOtR803%2BLabRIstRX1IK43IEqkpGMPIvPx2hhOprdQJEG8jOSeYanAqenUiA9cKRmCiDqj3%2Bh%2FmZaKc9OFN0dqvVpS6%2BiymykX3jMzNErqMnphJlPdglDLSGZqXLiOBsQNCnAxQj9f%2FWP%2F4%2BLScffy9vxp9sWmpPUN8SershkyVCAkchtsaFS4eI1pugvlRPMKTo6cAGOqUBiceIDyZUU3B2JkekC3XhO%2BiPUTmBelwqtaW8ZuKwzaOGyKrGKV5jxZsFkFA30qMr82qGnDTyoonWSLzInQm8g3yTJ9phx34%2B7sSjCH9XBVZRQUO5OChOOQWHWq0g7vjPm%2BuOzT0eKMVKOFRdYtsrKLloylRfl4tqA%2FXGmSk2imAb6rhdKZlx%2FG8j8FqUGY74tbc3wWCWAf2eIv%2BA9%2BNhFuGplo01&X-Amz-Signature=576125e024e70b043c07652f0dc9696427ba6e4ec3622c469e4ffd0395465448&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64HHWLW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBttDgQaJ63tRjQB8yZdVqQXTjSQH1pfZ25gSwjMkOmgIgYPaD6Bh80ctEVKHkDpNhhdgAsbNG7mODZYWOr0GPqCQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDP%2F%2BcS49EKcJ9PQWyircA8elDoTxb8QI2XBrosEwN6p4%2B1v3Br6XJXElwZaC8T4Oc8980hCPVwpV1EXJzm%2FXJBhRbNq9USfKmfy9JC4D%2BwBRmx9xFEW%2FG6ogUj8yafH5wM7dYy51uGSF90Udr3MyA56XjD594jd%2BlhOY3dQbYKXu3p8%2BKkdE%2BX8T8EzWOPy1CArAlzJUEKQRQcxVD0%2FXw%2B0T9eNLKjr3hE0SxwKg1Av9yVcoZ5xY4fH9SClUWlsStUJNc4smCyjCReGkDuazAxlIKTSq5Dt3QxLqmMg4tTWQiE3yBuz3ARAzKILMrl1Ffbm52LQY03qZIQPaic39VrgxNmIqoE8e9wZfvgaROtv19t8AHL5gnquabBbc7XVbzlZ6WPD0ROtDsqNZkrXLrAN3KgoaIGHsIObcipnfQK7nyt9y5UuCURO0kESKjR%2BWYRnOUT9Os1pWWazaBOtR803%2BLabRIstRX1IK43IEqkpGMPIvPx2hhOprdQJEG8jOSeYanAqenUiA9cKRmCiDqj3%2Bh%2FmZaKc9OFN0dqvVpS6%2BiymykX3jMzNErqMnphJlPdglDLSGZqXLiOBsQNCnAxQj9f%2FWP%2F4%2BLScffy9vxp9sWmpPUN8SershkyVCAkchtsaFS4eI1pugvlRPMKTo6cAGOqUBiceIDyZUU3B2JkekC3XhO%2BiPUTmBelwqtaW8ZuKwzaOGyKrGKV5jxZsFkFA30qMr82qGnDTyoonWSLzInQm8g3yTJ9phx34%2B7sSjCH9XBVZRQUO5OChOOQWHWq0g7vjPm%2BuOzT0eKMVKOFRdYtsrKLloylRfl4tqA%2FXGmSk2imAb6rhdKZlx%2FG8j8FqUGY74tbc3wWCWAf2eIv%2BA9%2BNhFuGplo01&X-Amz-Signature=d3500774545d473eb5cddd4d17eda04f3f86fcd6c45ab0bf18529c0a811bc85e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
