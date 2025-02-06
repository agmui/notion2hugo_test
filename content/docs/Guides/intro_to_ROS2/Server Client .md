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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQHSXQA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAXl%2BHUUTD5snmj6zo8WB%2BkZ1R9ntj0ahn9Ji8z45xqhAiAnEb9CBv86iMVyDNqAeNpi2E9YJaeoYFQi%2Fyovo9bGtyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMP6lxZ%2FVpPd0IZmlpKtwDBP4n4J3RyBlnwxj0nJZmk59%2BLS%2FRYsCBtmqx5HD5oyJurX7n119W1ccx5efs63B3u2buy7JB2VxVWYhJa9jNd97syr8rDJn6TWaUYLJGucrvZxG%2FR3CqefQTvKYUd46zzy8ikHf0N4E4T%2BtFgg%2FUJkCfY7T3xDuE6SaUKBYsG6K35naZTqdaIL1AguB9ruHgHWWLvR5pIXCEDOEyvkmHbtrKFLfxfsHYaN54uATuUwuv3%2FsqPuPCnS%2FTM%2B4bK8fhg3321gC7mL7qO9Gwbrwp0mlLQILTW1JueAGZ%2FKkH1q28mXfs2uCb052WI04uNx5RF0R4rDrYi2tgHt7FuxNZ9OUMF4vL%2FXeBX0LZo0t2ZRjmNAlQTOgcwKJYB%2F1AU5ujnBfW4PlVBrNJVIQNZHoK%2F7mPFGg8xWJdC5pw35PJO%2FLNUPeVX7P0Z6V044g77rKMWBOpKk84HS6PH0hzcbEijLdqix6um6SE36%2BRZCtCBbtcnItzluM6pn7ZI71lzRR6b4Mt52d9T4OK4r2K5pdHnDiyFugwq30BFzFxFkVQvn43ggfSMQQRwnPEJnb6vSfBGXS5lBLZX6%2BLVaearU5%2BjhBop1aKCIL5KFSL1nQX81NpZLmhbjhpjSki26gwrLmUvQY6pgE1p5TB1C39W5WH4HEt2wJ6wgBzfM0T44uwoBqKrQhVhB1g69Squ0Cxcprvgwz4S%2BChZWJTgugjJG5Mx2%2F6J1s8YPqpP5BChZ1F%2B7EJqXHhla3gpv8qEQC9JAl%2FzX2sbzwfMieqRuehCpI8UKlekV7N1GM6%2F1qoivVRTNjexCSUVste5CQJgTK7aXHbQII%2BKV6FVg42vLlrfUxwYh1A8gJXDcR7qWqz&X-Amz-Signature=26343974ff9195235aea60d9d2c18be35e9fa36d3ec0b4d19fa16cf20062edec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQHSXQA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAXl%2BHUUTD5snmj6zo8WB%2BkZ1R9ntj0ahn9Ji8z45xqhAiAnEb9CBv86iMVyDNqAeNpi2E9YJaeoYFQi%2Fyovo9bGtyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMP6lxZ%2FVpPd0IZmlpKtwDBP4n4J3RyBlnwxj0nJZmk59%2BLS%2FRYsCBtmqx5HD5oyJurX7n119W1ccx5efs63B3u2buy7JB2VxVWYhJa9jNd97syr8rDJn6TWaUYLJGucrvZxG%2FR3CqefQTvKYUd46zzy8ikHf0N4E4T%2BtFgg%2FUJkCfY7T3xDuE6SaUKBYsG6K35naZTqdaIL1AguB9ruHgHWWLvR5pIXCEDOEyvkmHbtrKFLfxfsHYaN54uATuUwuv3%2FsqPuPCnS%2FTM%2B4bK8fhg3321gC7mL7qO9Gwbrwp0mlLQILTW1JueAGZ%2FKkH1q28mXfs2uCb052WI04uNx5RF0R4rDrYi2tgHt7FuxNZ9OUMF4vL%2FXeBX0LZo0t2ZRjmNAlQTOgcwKJYB%2F1AU5ujnBfW4PlVBrNJVIQNZHoK%2F7mPFGg8xWJdC5pw35PJO%2FLNUPeVX7P0Z6V044g77rKMWBOpKk84HS6PH0hzcbEijLdqix6um6SE36%2BRZCtCBbtcnItzluM6pn7ZI71lzRR6b4Mt52d9T4OK4r2K5pdHnDiyFugwq30BFzFxFkVQvn43ggfSMQQRwnPEJnb6vSfBGXS5lBLZX6%2BLVaearU5%2BjhBop1aKCIL5KFSL1nQX81NpZLmhbjhpjSki26gwrLmUvQY6pgE1p5TB1C39W5WH4HEt2wJ6wgBzfM0T44uwoBqKrQhVhB1g69Squ0Cxcprvgwz4S%2BChZWJTgugjJG5Mx2%2F6J1s8YPqpP5BChZ1F%2B7EJqXHhla3gpv8qEQC9JAl%2FzX2sbzwfMieqRuehCpI8UKlekV7N1GM6%2F1qoivVRTNjexCSUVste5CQJgTK7aXHbQII%2BKV6FVg42vLlrfUxwYh1A8gJXDcR7qWqz&X-Amz-Signature=b14effb66986a88455542445921036f0008e63208940caab56be29c8e7bfaa19&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQHSXQA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAXl%2BHUUTD5snmj6zo8WB%2BkZ1R9ntj0ahn9Ji8z45xqhAiAnEb9CBv86iMVyDNqAeNpi2E9YJaeoYFQi%2Fyovo9bGtyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMP6lxZ%2FVpPd0IZmlpKtwDBP4n4J3RyBlnwxj0nJZmk59%2BLS%2FRYsCBtmqx5HD5oyJurX7n119W1ccx5efs63B3u2buy7JB2VxVWYhJa9jNd97syr8rDJn6TWaUYLJGucrvZxG%2FR3CqefQTvKYUd46zzy8ikHf0N4E4T%2BtFgg%2FUJkCfY7T3xDuE6SaUKBYsG6K35naZTqdaIL1AguB9ruHgHWWLvR5pIXCEDOEyvkmHbtrKFLfxfsHYaN54uATuUwuv3%2FsqPuPCnS%2FTM%2B4bK8fhg3321gC7mL7qO9Gwbrwp0mlLQILTW1JueAGZ%2FKkH1q28mXfs2uCb052WI04uNx5RF0R4rDrYi2tgHt7FuxNZ9OUMF4vL%2FXeBX0LZo0t2ZRjmNAlQTOgcwKJYB%2F1AU5ujnBfW4PlVBrNJVIQNZHoK%2F7mPFGg8xWJdC5pw35PJO%2FLNUPeVX7P0Z6V044g77rKMWBOpKk84HS6PH0hzcbEijLdqix6um6SE36%2BRZCtCBbtcnItzluM6pn7ZI71lzRR6b4Mt52d9T4OK4r2K5pdHnDiyFugwq30BFzFxFkVQvn43ggfSMQQRwnPEJnb6vSfBGXS5lBLZX6%2BLVaearU5%2BjhBop1aKCIL5KFSL1nQX81NpZLmhbjhpjSki26gwrLmUvQY6pgE1p5TB1C39W5WH4HEt2wJ6wgBzfM0T44uwoBqKrQhVhB1g69Squ0Cxcprvgwz4S%2BChZWJTgugjJG5Mx2%2F6J1s8YPqpP5BChZ1F%2B7EJqXHhla3gpv8qEQC9JAl%2FzX2sbzwfMieqRuehCpI8UKlekV7N1GM6%2F1qoivVRTNjexCSUVste5CQJgTK7aXHbQII%2BKV6FVg42vLlrfUxwYh1A8gJXDcR7qWqz&X-Amz-Signature=1516afd609300b918c9bc47e2840992ea58c92b1cf9144e4bd6921f3effa880d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQHSXQA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAXl%2BHUUTD5snmj6zo8WB%2BkZ1R9ntj0ahn9Ji8z45xqhAiAnEb9CBv86iMVyDNqAeNpi2E9YJaeoYFQi%2Fyovo9bGtyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMP6lxZ%2FVpPd0IZmlpKtwDBP4n4J3RyBlnwxj0nJZmk59%2BLS%2FRYsCBtmqx5HD5oyJurX7n119W1ccx5efs63B3u2buy7JB2VxVWYhJa9jNd97syr8rDJn6TWaUYLJGucrvZxG%2FR3CqefQTvKYUd46zzy8ikHf0N4E4T%2BtFgg%2FUJkCfY7T3xDuE6SaUKBYsG6K35naZTqdaIL1AguB9ruHgHWWLvR5pIXCEDOEyvkmHbtrKFLfxfsHYaN54uATuUwuv3%2FsqPuPCnS%2FTM%2B4bK8fhg3321gC7mL7qO9Gwbrwp0mlLQILTW1JueAGZ%2FKkH1q28mXfs2uCb052WI04uNx5RF0R4rDrYi2tgHt7FuxNZ9OUMF4vL%2FXeBX0LZo0t2ZRjmNAlQTOgcwKJYB%2F1AU5ujnBfW4PlVBrNJVIQNZHoK%2F7mPFGg8xWJdC5pw35PJO%2FLNUPeVX7P0Z6V044g77rKMWBOpKk84HS6PH0hzcbEijLdqix6um6SE36%2BRZCtCBbtcnItzluM6pn7ZI71lzRR6b4Mt52d9T4OK4r2K5pdHnDiyFugwq30BFzFxFkVQvn43ggfSMQQRwnPEJnb6vSfBGXS5lBLZX6%2BLVaearU5%2BjhBop1aKCIL5KFSL1nQX81NpZLmhbjhpjSki26gwrLmUvQY6pgE1p5TB1C39W5WH4HEt2wJ6wgBzfM0T44uwoBqKrQhVhB1g69Squ0Cxcprvgwz4S%2BChZWJTgugjJG5Mx2%2F6J1s8YPqpP5BChZ1F%2B7EJqXHhla3gpv8qEQC9JAl%2FzX2sbzwfMieqRuehCpI8UKlekV7N1GM6%2F1qoivVRTNjexCSUVste5CQJgTK7aXHbQII%2BKV6FVg42vLlrfUxwYh1A8gJXDcR7qWqz&X-Amz-Signature=0d6ddba3f95252bf221cafe5c3edb89da3840db0485becb3fcacb3fb1c06ac41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQHSXQA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAXl%2BHUUTD5snmj6zo8WB%2BkZ1R9ntj0ahn9Ji8z45xqhAiAnEb9CBv86iMVyDNqAeNpi2E9YJaeoYFQi%2Fyovo9bGtyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMP6lxZ%2FVpPd0IZmlpKtwDBP4n4J3RyBlnwxj0nJZmk59%2BLS%2FRYsCBtmqx5HD5oyJurX7n119W1ccx5efs63B3u2buy7JB2VxVWYhJa9jNd97syr8rDJn6TWaUYLJGucrvZxG%2FR3CqefQTvKYUd46zzy8ikHf0N4E4T%2BtFgg%2FUJkCfY7T3xDuE6SaUKBYsG6K35naZTqdaIL1AguB9ruHgHWWLvR5pIXCEDOEyvkmHbtrKFLfxfsHYaN54uATuUwuv3%2FsqPuPCnS%2FTM%2B4bK8fhg3321gC7mL7qO9Gwbrwp0mlLQILTW1JueAGZ%2FKkH1q28mXfs2uCb052WI04uNx5RF0R4rDrYi2tgHt7FuxNZ9OUMF4vL%2FXeBX0LZo0t2ZRjmNAlQTOgcwKJYB%2F1AU5ujnBfW4PlVBrNJVIQNZHoK%2F7mPFGg8xWJdC5pw35PJO%2FLNUPeVX7P0Z6V044g77rKMWBOpKk84HS6PH0hzcbEijLdqix6um6SE36%2BRZCtCBbtcnItzluM6pn7ZI71lzRR6b4Mt52d9T4OK4r2K5pdHnDiyFugwq30BFzFxFkVQvn43ggfSMQQRwnPEJnb6vSfBGXS5lBLZX6%2BLVaearU5%2BjhBop1aKCIL5KFSL1nQX81NpZLmhbjhpjSki26gwrLmUvQY6pgE1p5TB1C39W5WH4HEt2wJ6wgBzfM0T44uwoBqKrQhVhB1g69Squ0Cxcprvgwz4S%2BChZWJTgugjJG5Mx2%2F6J1s8YPqpP5BChZ1F%2B7EJqXHhla3gpv8qEQC9JAl%2FzX2sbzwfMieqRuehCpI8UKlekV7N1GM6%2F1qoivVRTNjexCSUVste5CQJgTK7aXHbQII%2BKV6FVg42vLlrfUxwYh1A8gJXDcR7qWqz&X-Amz-Signature=7014b89e1bdb70e55c7d3e68542adab9d24111433c07f6e6aa0ad9f15c4bbd55&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
