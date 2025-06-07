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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTO2SJK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrYATpCQOVL%2BZJP5FiSRe2zFMpSIQ3XhE7%2BgE3Q%2FJrBQIhAKrbYPYn3MYvEqya3tGmXXYkHm2FRMmw%2FLxjGY2iQJJ4Kv8DCGsQABoMNjM3NDIzMTgzODA1IgyLLEsvCia8TEB%2BV90q3APeZMIgW2Hjpw%2FIfMktp3VCleRtuvegTC6v68xT0hCdd3lg2Sfg5y8NBl8W1S6ux%2FBp0bqCDlkHI7UrEyCFjax3eJNL9zVCnBR%2BLBFkl5Qm12ZcHR1ayVs5BT8psfYoDFWp6cd8vCS0BCaQgn%2BkPeR6jWumYI9oQixSmKsGlek3zq0ql2bE7nDT%2Bh7KBnYNcgIdbtCgF%2BrlKTDL10Ub0oV77WA%2FZOfanThljqrOvhLMQNMT2N5LBYpzT%2Fyh4Nh%2FPxFWvLMNbmGyGO4sm2lnIbHOoi%2BUwUVLLj5%2Fc2Z0UTv7z%2FTvA3RkC4uDriDm%2B0Vp9PoaKRmtePxdUfn1ZjM9M8nlx0NqVlkFjIZTSC2Py23r0pceL7DETM4egpey2zBnfgA3Pjaw%2Fl%2FdnXyRGahGBCnJ%2FdGbbzUmU6d9cNUlxGMzUJljYIwWcKPXsqIr%2F3XtDZhu1mZhw3LRylV74mErR%2FpDvQA9dPrKLJOg%2FlfPWVzYn88gFc0GOPBRrV2qJ1E05NjiZ7DcSC3qVxMlU9O2D4TzFbB0yj2c%2FoS4o6Ml5VwFo1JWfxClQLVDoqf9Wr90ewj97Z%2BdFIB35XoaZxVYxzfDWqgXS1pZDkwURHOYmlmd4UAWV%2FqLf5Ws8XCFRDD3wI7CBjqkAZMEFC3unPAvD7zIm6w3meoIv7t2r%2Ba8dqFs8GVxGlzaXzSZnii77jI1iJyjF7P6noeol0RlC8LMYEkSogk%2Fsz9JbOi4SJhanBWqPIPmYQdqHGpyhUIIgdc%2FYb%2FM7WqTSZAmMgIdJB8gBf5AT%2BOsl%2BFo%2FZBu0DlEXcsIoT2%2BmzfZPPa%2B9%2FoWczS%2FlPdY4nYYTcIhkkEA5tKgDA9NTCHdA5hRolyM&X-Amz-Signature=ba2cdc3cf707676d06fbb5e8c805fc3cf2608ee48cabd442d4f5eec896276bed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTO2SJK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrYATpCQOVL%2BZJP5FiSRe2zFMpSIQ3XhE7%2BgE3Q%2FJrBQIhAKrbYPYn3MYvEqya3tGmXXYkHm2FRMmw%2FLxjGY2iQJJ4Kv8DCGsQABoMNjM3NDIzMTgzODA1IgyLLEsvCia8TEB%2BV90q3APeZMIgW2Hjpw%2FIfMktp3VCleRtuvegTC6v68xT0hCdd3lg2Sfg5y8NBl8W1S6ux%2FBp0bqCDlkHI7UrEyCFjax3eJNL9zVCnBR%2BLBFkl5Qm12ZcHR1ayVs5BT8psfYoDFWp6cd8vCS0BCaQgn%2BkPeR6jWumYI9oQixSmKsGlek3zq0ql2bE7nDT%2Bh7KBnYNcgIdbtCgF%2BrlKTDL10Ub0oV77WA%2FZOfanThljqrOvhLMQNMT2N5LBYpzT%2Fyh4Nh%2FPxFWvLMNbmGyGO4sm2lnIbHOoi%2BUwUVLLj5%2Fc2Z0UTv7z%2FTvA3RkC4uDriDm%2B0Vp9PoaKRmtePxdUfn1ZjM9M8nlx0NqVlkFjIZTSC2Py23r0pceL7DETM4egpey2zBnfgA3Pjaw%2Fl%2FdnXyRGahGBCnJ%2FdGbbzUmU6d9cNUlxGMzUJljYIwWcKPXsqIr%2F3XtDZhu1mZhw3LRylV74mErR%2FpDvQA9dPrKLJOg%2FlfPWVzYn88gFc0GOPBRrV2qJ1E05NjiZ7DcSC3qVxMlU9O2D4TzFbB0yj2c%2FoS4o6Ml5VwFo1JWfxClQLVDoqf9Wr90ewj97Z%2BdFIB35XoaZxVYxzfDWqgXS1pZDkwURHOYmlmd4UAWV%2FqLf5Ws8XCFRDD3wI7CBjqkAZMEFC3unPAvD7zIm6w3meoIv7t2r%2Ba8dqFs8GVxGlzaXzSZnii77jI1iJyjF7P6noeol0RlC8LMYEkSogk%2Fsz9JbOi4SJhanBWqPIPmYQdqHGpyhUIIgdc%2FYb%2FM7WqTSZAmMgIdJB8gBf5AT%2BOsl%2BFo%2FZBu0DlEXcsIoT2%2BmzfZPPa%2B9%2FoWczS%2FlPdY4nYYTcIhkkEA5tKgDA9NTCHdA5hRolyM&X-Amz-Signature=3670aae3e21610d48e6ac8cbacf76fc80c4c3d483a86a645581ae51a3c5513e1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTO2SJK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrYATpCQOVL%2BZJP5FiSRe2zFMpSIQ3XhE7%2BgE3Q%2FJrBQIhAKrbYPYn3MYvEqya3tGmXXYkHm2FRMmw%2FLxjGY2iQJJ4Kv8DCGsQABoMNjM3NDIzMTgzODA1IgyLLEsvCia8TEB%2BV90q3APeZMIgW2Hjpw%2FIfMktp3VCleRtuvegTC6v68xT0hCdd3lg2Sfg5y8NBl8W1S6ux%2FBp0bqCDlkHI7UrEyCFjax3eJNL9zVCnBR%2BLBFkl5Qm12ZcHR1ayVs5BT8psfYoDFWp6cd8vCS0BCaQgn%2BkPeR6jWumYI9oQixSmKsGlek3zq0ql2bE7nDT%2Bh7KBnYNcgIdbtCgF%2BrlKTDL10Ub0oV77WA%2FZOfanThljqrOvhLMQNMT2N5LBYpzT%2Fyh4Nh%2FPxFWvLMNbmGyGO4sm2lnIbHOoi%2BUwUVLLj5%2Fc2Z0UTv7z%2FTvA3RkC4uDriDm%2B0Vp9PoaKRmtePxdUfn1ZjM9M8nlx0NqVlkFjIZTSC2Py23r0pceL7DETM4egpey2zBnfgA3Pjaw%2Fl%2FdnXyRGahGBCnJ%2FdGbbzUmU6d9cNUlxGMzUJljYIwWcKPXsqIr%2F3XtDZhu1mZhw3LRylV74mErR%2FpDvQA9dPrKLJOg%2FlfPWVzYn88gFc0GOPBRrV2qJ1E05NjiZ7DcSC3qVxMlU9O2D4TzFbB0yj2c%2FoS4o6Ml5VwFo1JWfxClQLVDoqf9Wr90ewj97Z%2BdFIB35XoaZxVYxzfDWqgXS1pZDkwURHOYmlmd4UAWV%2FqLf5Ws8XCFRDD3wI7CBjqkAZMEFC3unPAvD7zIm6w3meoIv7t2r%2Ba8dqFs8GVxGlzaXzSZnii77jI1iJyjF7P6noeol0RlC8LMYEkSogk%2Fsz9JbOi4SJhanBWqPIPmYQdqHGpyhUIIgdc%2FYb%2FM7WqTSZAmMgIdJB8gBf5AT%2BOsl%2BFo%2FZBu0DlEXcsIoT2%2BmzfZPPa%2B9%2FoWczS%2FlPdY4nYYTcIhkkEA5tKgDA9NTCHdA5hRolyM&X-Amz-Signature=9d36c86d24c307abd0f802d240161e5b5e7e54676fc34e7f1b02d4361dd75088&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTO2SJK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrYATpCQOVL%2BZJP5FiSRe2zFMpSIQ3XhE7%2BgE3Q%2FJrBQIhAKrbYPYn3MYvEqya3tGmXXYkHm2FRMmw%2FLxjGY2iQJJ4Kv8DCGsQABoMNjM3NDIzMTgzODA1IgyLLEsvCia8TEB%2BV90q3APeZMIgW2Hjpw%2FIfMktp3VCleRtuvegTC6v68xT0hCdd3lg2Sfg5y8NBl8W1S6ux%2FBp0bqCDlkHI7UrEyCFjax3eJNL9zVCnBR%2BLBFkl5Qm12ZcHR1ayVs5BT8psfYoDFWp6cd8vCS0BCaQgn%2BkPeR6jWumYI9oQixSmKsGlek3zq0ql2bE7nDT%2Bh7KBnYNcgIdbtCgF%2BrlKTDL10Ub0oV77WA%2FZOfanThljqrOvhLMQNMT2N5LBYpzT%2Fyh4Nh%2FPxFWvLMNbmGyGO4sm2lnIbHOoi%2BUwUVLLj5%2Fc2Z0UTv7z%2FTvA3RkC4uDriDm%2B0Vp9PoaKRmtePxdUfn1ZjM9M8nlx0NqVlkFjIZTSC2Py23r0pceL7DETM4egpey2zBnfgA3Pjaw%2Fl%2FdnXyRGahGBCnJ%2FdGbbzUmU6d9cNUlxGMzUJljYIwWcKPXsqIr%2F3XtDZhu1mZhw3LRylV74mErR%2FpDvQA9dPrKLJOg%2FlfPWVzYn88gFc0GOPBRrV2qJ1E05NjiZ7DcSC3qVxMlU9O2D4TzFbB0yj2c%2FoS4o6Ml5VwFo1JWfxClQLVDoqf9Wr90ewj97Z%2BdFIB35XoaZxVYxzfDWqgXS1pZDkwURHOYmlmd4UAWV%2FqLf5Ws8XCFRDD3wI7CBjqkAZMEFC3unPAvD7zIm6w3meoIv7t2r%2Ba8dqFs8GVxGlzaXzSZnii77jI1iJyjF7P6noeol0RlC8LMYEkSogk%2Fsz9JbOi4SJhanBWqPIPmYQdqHGpyhUIIgdc%2FYb%2FM7WqTSZAmMgIdJB8gBf5AT%2BOsl%2BFo%2FZBu0DlEXcsIoT2%2BmzfZPPa%2B9%2FoWczS%2FlPdY4nYYTcIhkkEA5tKgDA9NTCHdA5hRolyM&X-Amz-Signature=20854e1c6f252bf742efa4bf9365e760ffe1acadb936281d2ca4ce1de4983ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTO2SJK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrYATpCQOVL%2BZJP5FiSRe2zFMpSIQ3XhE7%2BgE3Q%2FJrBQIhAKrbYPYn3MYvEqya3tGmXXYkHm2FRMmw%2FLxjGY2iQJJ4Kv8DCGsQABoMNjM3NDIzMTgzODA1IgyLLEsvCia8TEB%2BV90q3APeZMIgW2Hjpw%2FIfMktp3VCleRtuvegTC6v68xT0hCdd3lg2Sfg5y8NBl8W1S6ux%2FBp0bqCDlkHI7UrEyCFjax3eJNL9zVCnBR%2BLBFkl5Qm12ZcHR1ayVs5BT8psfYoDFWp6cd8vCS0BCaQgn%2BkPeR6jWumYI9oQixSmKsGlek3zq0ql2bE7nDT%2Bh7KBnYNcgIdbtCgF%2BrlKTDL10Ub0oV77WA%2FZOfanThljqrOvhLMQNMT2N5LBYpzT%2Fyh4Nh%2FPxFWvLMNbmGyGO4sm2lnIbHOoi%2BUwUVLLj5%2Fc2Z0UTv7z%2FTvA3RkC4uDriDm%2B0Vp9PoaKRmtePxdUfn1ZjM9M8nlx0NqVlkFjIZTSC2Py23r0pceL7DETM4egpey2zBnfgA3Pjaw%2Fl%2FdnXyRGahGBCnJ%2FdGbbzUmU6d9cNUlxGMzUJljYIwWcKPXsqIr%2F3XtDZhu1mZhw3LRylV74mErR%2FpDvQA9dPrKLJOg%2FlfPWVzYn88gFc0GOPBRrV2qJ1E05NjiZ7DcSC3qVxMlU9O2D4TzFbB0yj2c%2FoS4o6Ml5VwFo1JWfxClQLVDoqf9Wr90ewj97Z%2BdFIB35XoaZxVYxzfDWqgXS1pZDkwURHOYmlmd4UAWV%2FqLf5Ws8XCFRDD3wI7CBjqkAZMEFC3unPAvD7zIm6w3meoIv7t2r%2Ba8dqFs8GVxGlzaXzSZnii77jI1iJyjF7P6noeol0RlC8LMYEkSogk%2Fsz9JbOi4SJhanBWqPIPmYQdqHGpyhUIIgdc%2FYb%2FM7WqTSZAmMgIdJB8gBf5AT%2BOsl%2BFo%2FZBu0DlEXcsIoT2%2BmzfZPPa%2B9%2FoWczS%2FlPdY4nYYTcIhkkEA5tKgDA9NTCHdA5hRolyM&X-Amz-Signature=6a1eba8b15c1372435f4e5252e44ef5c18b4d1f30ff50a45d398a074eff5615d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
