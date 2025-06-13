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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJARW4A%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICzB95ZgLeGLa1mjmHZ4c9R38QWLr0nP%2FKaGkbSZ2AP8AiArNI%2Brvh7sGJEUjCwtkcmpfltTrKPwAXasuXCt0ySRJSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYYX%2B7LbmZU5ZlC8qKtwD6bZFIh45MGDRiNz6s6OnZFrIY3leQ%2FOdofw42NcfmEJnmE23URqHT7NVjpM8serKjyOG5XdQQYw%2Bbrq3hKU0fYfgFDefX45HYRYvsgFmd0gfA0KW2cQFwL%2FzCUToIyJDcL%2FXRuDL%2FS%2B1ddMg7eqIBU6WkpNTAPJa%2BPWXC6y%2BpNStBjd2NgIc5o32Ro0F5IpIenaD15WLWkEI4L1njfVaXKy3lWuJUC9NSW8C9tekX5Q%2Bt26b5X8a7wZsSGckQlwTIhrAQzXk6OnCcvrYKS9o9KTwL8Fw%2FmCJwOZJqdAZ2f8AHkldQrA7jE5JOjLQf8Hi%2BvmKb%2BHQOXJBBiZFllGUCTt9zXFOZBLxhJbzj8wjqsG6RjaLaBlUKxgMrocNOONp19qACLshcjsESySKByC8Ys0laxOtxl%2BHcxsMTNp6VdHPxAQUXf8gKFOel1FfP00IbdtX2HgYI6%2FbDyBbciUHu%2BPeIVcYilX6yuf%2BK0ZUNAo06cid88fvNmMS0NAlVt8bm6Ll21pWyHOioRjaOTJWHda%2Fb%2FMf%2BT59rUgSqm7QnXPcRL59ZTRzcOP9lB6zEGAnmhqMG%2FNRFzyx%2FtZMJrQkPJOyGLvBBGh0490TWTZBwLfFJIhVgowFJgwqN%2BUwgrmtwgY6pgHI22%2F9%2BK35P2eICoMIYPmluFH0G4Hj2x0IFHPBE%2BZbAqgGcdAT%2F7CKixiRnJrA%2BvIuQAjeJ9egszHMibSs46Z9jc2bC3%2Bo5J03rNjhterZuYeR9%2FGM2roe%2FIwDzpxOnZN0%2BpMcJpyV2%2BWc2L6e8G6QVLNvVk3LwuqvZgjjfUyZhWrX8t7dxfV8ZGa8rQ1dgn7A%2FjJ0QH0w11P1l1L2vDxEQ8WnZKYE&X-Amz-Signature=b3690a887f3103ddcc385f283bc234ac2106e3d149791911df882707a4951bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJARW4A%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICzB95ZgLeGLa1mjmHZ4c9R38QWLr0nP%2FKaGkbSZ2AP8AiArNI%2Brvh7sGJEUjCwtkcmpfltTrKPwAXasuXCt0ySRJSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYYX%2B7LbmZU5ZlC8qKtwD6bZFIh45MGDRiNz6s6OnZFrIY3leQ%2FOdofw42NcfmEJnmE23URqHT7NVjpM8serKjyOG5XdQQYw%2Bbrq3hKU0fYfgFDefX45HYRYvsgFmd0gfA0KW2cQFwL%2FzCUToIyJDcL%2FXRuDL%2FS%2B1ddMg7eqIBU6WkpNTAPJa%2BPWXC6y%2BpNStBjd2NgIc5o32Ro0F5IpIenaD15WLWkEI4L1njfVaXKy3lWuJUC9NSW8C9tekX5Q%2Bt26b5X8a7wZsSGckQlwTIhrAQzXk6OnCcvrYKS9o9KTwL8Fw%2FmCJwOZJqdAZ2f8AHkldQrA7jE5JOjLQf8Hi%2BvmKb%2BHQOXJBBiZFllGUCTt9zXFOZBLxhJbzj8wjqsG6RjaLaBlUKxgMrocNOONp19qACLshcjsESySKByC8Ys0laxOtxl%2BHcxsMTNp6VdHPxAQUXf8gKFOel1FfP00IbdtX2HgYI6%2FbDyBbciUHu%2BPeIVcYilX6yuf%2BK0ZUNAo06cid88fvNmMS0NAlVt8bm6Ll21pWyHOioRjaOTJWHda%2Fb%2FMf%2BT59rUgSqm7QnXPcRL59ZTRzcOP9lB6zEGAnmhqMG%2FNRFzyx%2FtZMJrQkPJOyGLvBBGh0490TWTZBwLfFJIhVgowFJgwqN%2BUwgrmtwgY6pgHI22%2F9%2BK35P2eICoMIYPmluFH0G4Hj2x0IFHPBE%2BZbAqgGcdAT%2F7CKixiRnJrA%2BvIuQAjeJ9egszHMibSs46Z9jc2bC3%2Bo5J03rNjhterZuYeR9%2FGM2roe%2FIwDzpxOnZN0%2BpMcJpyV2%2BWc2L6e8G6QVLNvVk3LwuqvZgjjfUyZhWrX8t7dxfV8ZGa8rQ1dgn7A%2FjJ0QH0w11P1l1L2vDxEQ8WnZKYE&X-Amz-Signature=8cb36a3917192080689fe1611b34d0001ddeeb9a1d1857505c0645a5b92ce1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJARW4A%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICzB95ZgLeGLa1mjmHZ4c9R38QWLr0nP%2FKaGkbSZ2AP8AiArNI%2Brvh7sGJEUjCwtkcmpfltTrKPwAXasuXCt0ySRJSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYYX%2B7LbmZU5ZlC8qKtwD6bZFIh45MGDRiNz6s6OnZFrIY3leQ%2FOdofw42NcfmEJnmE23URqHT7NVjpM8serKjyOG5XdQQYw%2Bbrq3hKU0fYfgFDefX45HYRYvsgFmd0gfA0KW2cQFwL%2FzCUToIyJDcL%2FXRuDL%2FS%2B1ddMg7eqIBU6WkpNTAPJa%2BPWXC6y%2BpNStBjd2NgIc5o32Ro0F5IpIenaD15WLWkEI4L1njfVaXKy3lWuJUC9NSW8C9tekX5Q%2Bt26b5X8a7wZsSGckQlwTIhrAQzXk6OnCcvrYKS9o9KTwL8Fw%2FmCJwOZJqdAZ2f8AHkldQrA7jE5JOjLQf8Hi%2BvmKb%2BHQOXJBBiZFllGUCTt9zXFOZBLxhJbzj8wjqsG6RjaLaBlUKxgMrocNOONp19qACLshcjsESySKByC8Ys0laxOtxl%2BHcxsMTNp6VdHPxAQUXf8gKFOel1FfP00IbdtX2HgYI6%2FbDyBbciUHu%2BPeIVcYilX6yuf%2BK0ZUNAo06cid88fvNmMS0NAlVt8bm6Ll21pWyHOioRjaOTJWHda%2Fb%2FMf%2BT59rUgSqm7QnXPcRL59ZTRzcOP9lB6zEGAnmhqMG%2FNRFzyx%2FtZMJrQkPJOyGLvBBGh0490TWTZBwLfFJIhVgowFJgwqN%2BUwgrmtwgY6pgHI22%2F9%2BK35P2eICoMIYPmluFH0G4Hj2x0IFHPBE%2BZbAqgGcdAT%2F7CKixiRnJrA%2BvIuQAjeJ9egszHMibSs46Z9jc2bC3%2Bo5J03rNjhterZuYeR9%2FGM2roe%2FIwDzpxOnZN0%2BpMcJpyV2%2BWc2L6e8G6QVLNvVk3LwuqvZgjjfUyZhWrX8t7dxfV8ZGa8rQ1dgn7A%2FjJ0QH0w11P1l1L2vDxEQ8WnZKYE&X-Amz-Signature=f803ef6ea35441a77b6b1f8a8e832dbcd782e1adeeee39d63fd003d1f0ab5df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJARW4A%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICzB95ZgLeGLa1mjmHZ4c9R38QWLr0nP%2FKaGkbSZ2AP8AiArNI%2Brvh7sGJEUjCwtkcmpfltTrKPwAXasuXCt0ySRJSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYYX%2B7LbmZU5ZlC8qKtwD6bZFIh45MGDRiNz6s6OnZFrIY3leQ%2FOdofw42NcfmEJnmE23URqHT7NVjpM8serKjyOG5XdQQYw%2Bbrq3hKU0fYfgFDefX45HYRYvsgFmd0gfA0KW2cQFwL%2FzCUToIyJDcL%2FXRuDL%2FS%2B1ddMg7eqIBU6WkpNTAPJa%2BPWXC6y%2BpNStBjd2NgIc5o32Ro0F5IpIenaD15WLWkEI4L1njfVaXKy3lWuJUC9NSW8C9tekX5Q%2Bt26b5X8a7wZsSGckQlwTIhrAQzXk6OnCcvrYKS9o9KTwL8Fw%2FmCJwOZJqdAZ2f8AHkldQrA7jE5JOjLQf8Hi%2BvmKb%2BHQOXJBBiZFllGUCTt9zXFOZBLxhJbzj8wjqsG6RjaLaBlUKxgMrocNOONp19qACLshcjsESySKByC8Ys0laxOtxl%2BHcxsMTNp6VdHPxAQUXf8gKFOel1FfP00IbdtX2HgYI6%2FbDyBbciUHu%2BPeIVcYilX6yuf%2BK0ZUNAo06cid88fvNmMS0NAlVt8bm6Ll21pWyHOioRjaOTJWHda%2Fb%2FMf%2BT59rUgSqm7QnXPcRL59ZTRzcOP9lB6zEGAnmhqMG%2FNRFzyx%2FtZMJrQkPJOyGLvBBGh0490TWTZBwLfFJIhVgowFJgwqN%2BUwgrmtwgY6pgHI22%2F9%2BK35P2eICoMIYPmluFH0G4Hj2x0IFHPBE%2BZbAqgGcdAT%2F7CKixiRnJrA%2BvIuQAjeJ9egszHMibSs46Z9jc2bC3%2Bo5J03rNjhterZuYeR9%2FGM2roe%2FIwDzpxOnZN0%2BpMcJpyV2%2BWc2L6e8G6QVLNvVk3LwuqvZgjjfUyZhWrX8t7dxfV8ZGa8rQ1dgn7A%2FjJ0QH0w11P1l1L2vDxEQ8WnZKYE&X-Amz-Signature=e511b1fa9e6c9d9abd3ae60164e39d071ff3aeade2b69b8d60218513845d6f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJARW4A%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICzB95ZgLeGLa1mjmHZ4c9R38QWLr0nP%2FKaGkbSZ2AP8AiArNI%2Brvh7sGJEUjCwtkcmpfltTrKPwAXasuXCt0ySRJSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYYX%2B7LbmZU5ZlC8qKtwD6bZFIh45MGDRiNz6s6OnZFrIY3leQ%2FOdofw42NcfmEJnmE23URqHT7NVjpM8serKjyOG5XdQQYw%2Bbrq3hKU0fYfgFDefX45HYRYvsgFmd0gfA0KW2cQFwL%2FzCUToIyJDcL%2FXRuDL%2FS%2B1ddMg7eqIBU6WkpNTAPJa%2BPWXC6y%2BpNStBjd2NgIc5o32Ro0F5IpIenaD15WLWkEI4L1njfVaXKy3lWuJUC9NSW8C9tekX5Q%2Bt26b5X8a7wZsSGckQlwTIhrAQzXk6OnCcvrYKS9o9KTwL8Fw%2FmCJwOZJqdAZ2f8AHkldQrA7jE5JOjLQf8Hi%2BvmKb%2BHQOXJBBiZFllGUCTt9zXFOZBLxhJbzj8wjqsG6RjaLaBlUKxgMrocNOONp19qACLshcjsESySKByC8Ys0laxOtxl%2BHcxsMTNp6VdHPxAQUXf8gKFOel1FfP00IbdtX2HgYI6%2FbDyBbciUHu%2BPeIVcYilX6yuf%2BK0ZUNAo06cid88fvNmMS0NAlVt8bm6Ll21pWyHOioRjaOTJWHda%2Fb%2FMf%2BT59rUgSqm7QnXPcRL59ZTRzcOP9lB6zEGAnmhqMG%2FNRFzyx%2FtZMJrQkPJOyGLvBBGh0490TWTZBwLfFJIhVgowFJgwqN%2BUwgrmtwgY6pgHI22%2F9%2BK35P2eICoMIYPmluFH0G4Hj2x0IFHPBE%2BZbAqgGcdAT%2F7CKixiRnJrA%2BvIuQAjeJ9egszHMibSs46Z9jc2bC3%2Bo5J03rNjhterZuYeR9%2FGM2roe%2FIwDzpxOnZN0%2BpMcJpyV2%2BWc2L6e8G6QVLNvVk3LwuqvZgjjfUyZhWrX8t7dxfV8ZGa8rQ1dgn7A%2FjJ0QH0w11P1l1L2vDxEQ8WnZKYE&X-Amz-Signature=7791ab828187cba4c58f48709b093e92792b71bc358e91103bbe190c15ad693d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
