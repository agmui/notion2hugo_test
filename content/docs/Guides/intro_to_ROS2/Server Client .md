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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWMN4DR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPPGAP%2BUhCur7gCeDyWALypRjbK8O%2FHshXd0Zj%2BcDOJAiByt8UD4XMIUN9oqNxLb7XHvwTetJqjzZ3Dbv0IQfH9vyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM96B5mvdaF5S8PY%2F3KtwDQajXxd2ILQiZi7FGateC7BD3am8ucqt4DNo3ioDRzJN7SYkOn3AvTEfrOLQzjZoZ05nTfARYSTyChv9wBfeQCYwHXllyfw9WMB%2BsE0JRo4Bxc06CrRpVEFxBwUBET8qEdKUZw3SjIqOKYAppyrNOVc5ISCNk426h%2FzIQGL%2FxvsPZImv0dOeys3Oho7rw3dM296DhnUsUVcSxMF5lHRF12%2Fo17n5w4N%2B6sUYXBXy5KkAFbbsBlnUvzBdLkM4ycpV4%2B2nv5VYXifUM%2BM3vk1UXGU%2BP9gKZUxdH0U1Vi1ZRMOhP%2Bly6lId99%2FXHUD%2Bnqegb9JCnl%2FEhiUSbGq1vxqcZaRQp52rHciUxCPMUsFwAQOkrdXzv2B%2Ba13Tp9L6427%2BbSydcpSiUEOqZTdZMp%2BF9VXtPqc8eK%2FDRCKmEHzs%2FrL%2F0Rd9pMFxYWK%2Ft429IhlinZwEuILPy4E5E%2BPfDlek4Jl7fvnOqEThmFoj6w3adddek95RZRTef5SuTD4C0WZE%2BVIPufiGsdxHw0%2BIrJshPq7J6lPw9WaMC873Dj5dZ71QWbLHvBai%2Fsu%2BisF%2BIZb7ZwoM0DZelQMYTQw1ThnKvBzrx1v9UN3gRLjNvgFin30S3mbOl%2BTTN3jK7rZkwudXFwwY6pgGycHH18y3cHrL56uOa5aY7OjXZdOOS96knuZydD6WkoApvEE3fg9OxkNkpG9UThSgws5sIfX9oSmJicb76%2BlPVK4%2FEwBcQze%2F21DrCaByYmLkGEMYcZorkP3QAVym6jf%2F3bfdZSRJpUnJ2tYpxWqQQXV4T%2BUr%2FZaeqXLA5Ovgodky7p%2FcSZzf5wgHzxH%2B5AvL%2Fv%2ByM22Yfb06qfLqHDYcfffH8nz09&X-Amz-Signature=dbe2a36c681e05c6471f87d35e0dfb5fdbdea8ce1e04fc28f47f4e28af9f58c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWMN4DR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPPGAP%2BUhCur7gCeDyWALypRjbK8O%2FHshXd0Zj%2BcDOJAiByt8UD4XMIUN9oqNxLb7XHvwTetJqjzZ3Dbv0IQfH9vyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM96B5mvdaF5S8PY%2F3KtwDQajXxd2ILQiZi7FGateC7BD3am8ucqt4DNo3ioDRzJN7SYkOn3AvTEfrOLQzjZoZ05nTfARYSTyChv9wBfeQCYwHXllyfw9WMB%2BsE0JRo4Bxc06CrRpVEFxBwUBET8qEdKUZw3SjIqOKYAppyrNOVc5ISCNk426h%2FzIQGL%2FxvsPZImv0dOeys3Oho7rw3dM296DhnUsUVcSxMF5lHRF12%2Fo17n5w4N%2B6sUYXBXy5KkAFbbsBlnUvzBdLkM4ycpV4%2B2nv5VYXifUM%2BM3vk1UXGU%2BP9gKZUxdH0U1Vi1ZRMOhP%2Bly6lId99%2FXHUD%2Bnqegb9JCnl%2FEhiUSbGq1vxqcZaRQp52rHciUxCPMUsFwAQOkrdXzv2B%2Ba13Tp9L6427%2BbSydcpSiUEOqZTdZMp%2BF9VXtPqc8eK%2FDRCKmEHzs%2FrL%2F0Rd9pMFxYWK%2Ft429IhlinZwEuILPy4E5E%2BPfDlek4Jl7fvnOqEThmFoj6w3adddek95RZRTef5SuTD4C0WZE%2BVIPufiGsdxHw0%2BIrJshPq7J6lPw9WaMC873Dj5dZ71QWbLHvBai%2Fsu%2BisF%2BIZb7ZwoM0DZelQMYTQw1ThnKvBzrx1v9UN3gRLjNvgFin30S3mbOl%2BTTN3jK7rZkwudXFwwY6pgGycHH18y3cHrL56uOa5aY7OjXZdOOS96knuZydD6WkoApvEE3fg9OxkNkpG9UThSgws5sIfX9oSmJicb76%2BlPVK4%2FEwBcQze%2F21DrCaByYmLkGEMYcZorkP3QAVym6jf%2F3bfdZSRJpUnJ2tYpxWqQQXV4T%2BUr%2FZaeqXLA5Ovgodky7p%2FcSZzf5wgHzxH%2B5AvL%2Fv%2ByM22Yfb06qfLqHDYcfffH8nz09&X-Amz-Signature=7806bc675a4756bf68bf635f0690881e2dab154d6f341348c7b84dd0586dd79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWMN4DR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPPGAP%2BUhCur7gCeDyWALypRjbK8O%2FHshXd0Zj%2BcDOJAiByt8UD4XMIUN9oqNxLb7XHvwTetJqjzZ3Dbv0IQfH9vyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM96B5mvdaF5S8PY%2F3KtwDQajXxd2ILQiZi7FGateC7BD3am8ucqt4DNo3ioDRzJN7SYkOn3AvTEfrOLQzjZoZ05nTfARYSTyChv9wBfeQCYwHXllyfw9WMB%2BsE0JRo4Bxc06CrRpVEFxBwUBET8qEdKUZw3SjIqOKYAppyrNOVc5ISCNk426h%2FzIQGL%2FxvsPZImv0dOeys3Oho7rw3dM296DhnUsUVcSxMF5lHRF12%2Fo17n5w4N%2B6sUYXBXy5KkAFbbsBlnUvzBdLkM4ycpV4%2B2nv5VYXifUM%2BM3vk1UXGU%2BP9gKZUxdH0U1Vi1ZRMOhP%2Bly6lId99%2FXHUD%2Bnqegb9JCnl%2FEhiUSbGq1vxqcZaRQp52rHciUxCPMUsFwAQOkrdXzv2B%2Ba13Tp9L6427%2BbSydcpSiUEOqZTdZMp%2BF9VXtPqc8eK%2FDRCKmEHzs%2FrL%2F0Rd9pMFxYWK%2Ft429IhlinZwEuILPy4E5E%2BPfDlek4Jl7fvnOqEThmFoj6w3adddek95RZRTef5SuTD4C0WZE%2BVIPufiGsdxHw0%2BIrJshPq7J6lPw9WaMC873Dj5dZ71QWbLHvBai%2Fsu%2BisF%2BIZb7ZwoM0DZelQMYTQw1ThnKvBzrx1v9UN3gRLjNvgFin30S3mbOl%2BTTN3jK7rZkwudXFwwY6pgGycHH18y3cHrL56uOa5aY7OjXZdOOS96knuZydD6WkoApvEE3fg9OxkNkpG9UThSgws5sIfX9oSmJicb76%2BlPVK4%2FEwBcQze%2F21DrCaByYmLkGEMYcZorkP3QAVym6jf%2F3bfdZSRJpUnJ2tYpxWqQQXV4T%2BUr%2FZaeqXLA5Ovgodky7p%2FcSZzf5wgHzxH%2B5AvL%2Fv%2ByM22Yfb06qfLqHDYcfffH8nz09&X-Amz-Signature=a7a1c88ca565122202d8fdd625aff0e906bce98ffabced18b3beedc5e71dde52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWMN4DR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPPGAP%2BUhCur7gCeDyWALypRjbK8O%2FHshXd0Zj%2BcDOJAiByt8UD4XMIUN9oqNxLb7XHvwTetJqjzZ3Dbv0IQfH9vyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM96B5mvdaF5S8PY%2F3KtwDQajXxd2ILQiZi7FGateC7BD3am8ucqt4DNo3ioDRzJN7SYkOn3AvTEfrOLQzjZoZ05nTfARYSTyChv9wBfeQCYwHXllyfw9WMB%2BsE0JRo4Bxc06CrRpVEFxBwUBET8qEdKUZw3SjIqOKYAppyrNOVc5ISCNk426h%2FzIQGL%2FxvsPZImv0dOeys3Oho7rw3dM296DhnUsUVcSxMF5lHRF12%2Fo17n5w4N%2B6sUYXBXy5KkAFbbsBlnUvzBdLkM4ycpV4%2B2nv5VYXifUM%2BM3vk1UXGU%2BP9gKZUxdH0U1Vi1ZRMOhP%2Bly6lId99%2FXHUD%2Bnqegb9JCnl%2FEhiUSbGq1vxqcZaRQp52rHciUxCPMUsFwAQOkrdXzv2B%2Ba13Tp9L6427%2BbSydcpSiUEOqZTdZMp%2BF9VXtPqc8eK%2FDRCKmEHzs%2FrL%2F0Rd9pMFxYWK%2Ft429IhlinZwEuILPy4E5E%2BPfDlek4Jl7fvnOqEThmFoj6w3adddek95RZRTef5SuTD4C0WZE%2BVIPufiGsdxHw0%2BIrJshPq7J6lPw9WaMC873Dj5dZ71QWbLHvBai%2Fsu%2BisF%2BIZb7ZwoM0DZelQMYTQw1ThnKvBzrx1v9UN3gRLjNvgFin30S3mbOl%2BTTN3jK7rZkwudXFwwY6pgGycHH18y3cHrL56uOa5aY7OjXZdOOS96knuZydD6WkoApvEE3fg9OxkNkpG9UThSgws5sIfX9oSmJicb76%2BlPVK4%2FEwBcQze%2F21DrCaByYmLkGEMYcZorkP3QAVym6jf%2F3bfdZSRJpUnJ2tYpxWqQQXV4T%2BUr%2FZaeqXLA5Ovgodky7p%2FcSZzf5wgHzxH%2B5AvL%2Fv%2ByM22Yfb06qfLqHDYcfffH8nz09&X-Amz-Signature=c17d498a5c3c15a4d6a6cbf0f32b0d2f9b3672eeb807086d5e6b29582e64c667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWMN4DR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPPGAP%2BUhCur7gCeDyWALypRjbK8O%2FHshXd0Zj%2BcDOJAiByt8UD4XMIUN9oqNxLb7XHvwTetJqjzZ3Dbv0IQfH9vyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM96B5mvdaF5S8PY%2F3KtwDQajXxd2ILQiZi7FGateC7BD3am8ucqt4DNo3ioDRzJN7SYkOn3AvTEfrOLQzjZoZ05nTfARYSTyChv9wBfeQCYwHXllyfw9WMB%2BsE0JRo4Bxc06CrRpVEFxBwUBET8qEdKUZw3SjIqOKYAppyrNOVc5ISCNk426h%2FzIQGL%2FxvsPZImv0dOeys3Oho7rw3dM296DhnUsUVcSxMF5lHRF12%2Fo17n5w4N%2B6sUYXBXy5KkAFbbsBlnUvzBdLkM4ycpV4%2B2nv5VYXifUM%2BM3vk1UXGU%2BP9gKZUxdH0U1Vi1ZRMOhP%2Bly6lId99%2FXHUD%2Bnqegb9JCnl%2FEhiUSbGq1vxqcZaRQp52rHciUxCPMUsFwAQOkrdXzv2B%2Ba13Tp9L6427%2BbSydcpSiUEOqZTdZMp%2BF9VXtPqc8eK%2FDRCKmEHzs%2FrL%2F0Rd9pMFxYWK%2Ft429IhlinZwEuILPy4E5E%2BPfDlek4Jl7fvnOqEThmFoj6w3adddek95RZRTef5SuTD4C0WZE%2BVIPufiGsdxHw0%2BIrJshPq7J6lPw9WaMC873Dj5dZ71QWbLHvBai%2Fsu%2BisF%2BIZb7ZwoM0DZelQMYTQw1ThnKvBzrx1v9UN3gRLjNvgFin30S3mbOl%2BTTN3jK7rZkwudXFwwY6pgGycHH18y3cHrL56uOa5aY7OjXZdOOS96knuZydD6WkoApvEE3fg9OxkNkpG9UThSgws5sIfX9oSmJicb76%2BlPVK4%2FEwBcQze%2F21DrCaByYmLkGEMYcZorkP3QAVym6jf%2F3bfdZSRJpUnJ2tYpxWqQQXV4T%2BUr%2FZaeqXLA5Ovgodky7p%2FcSZzf5wgHzxH%2B5AvL%2Fv%2ByM22Yfb06qfLqHDYcfffH8nz09&X-Amz-Signature=d5a553d59450a64505ea0fbce47868ca4d5703eeb3df8c6f9b90de7670baab05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
