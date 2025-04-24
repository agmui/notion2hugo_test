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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXZI4JA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDvEXK9%2BjoWqZ%2Bn3PUxQYGUMz57qFJQOqn8ifuPhQkC2QIhAOWbvrZ6RJzqnSrA%2FBqlkTObk5EHyYz0fcL3%2FoIxjxzHKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk9gS%2FTyB%2BZAwd4WYq3AOoj6L%2BAclT9IwiFVGq0CZnjrjC%2Fvq5M%2BvkbVd8%2FolOVMsG4U856iMJleFMwI1U9Z9MYHYsSW3j2hRwswzNY6ZIBx5UBRvVfHXEBoHIZ0efDoQf932Qy0e7QP40K12GgZKl0bJCvi2k57Rem5OLmR%2BSRASNuYV1Q6cF0RRmeZzy8e4ZaCwK9seJXZXYhHhdOckw0Tkecl%2FRIVgtTibJPxWbx4Yv2HzJmiPYgFpvCq13Jy2QX6rQ3zZI%2BlQ%2BmnYE5Kde9l5slgo2JQtxIe0eadsU%2FvJXH6%2FZKy0Wit5Dy6uGzF4AwSN%2BZmbG6JfmMbRYTd2nhozVU8NN4%2F4FLdOSent%2BjB2AfagDno2ZOIDeu6PjJCrDcc9n%2Bt0ks0d6mLi4ePS9LJrgXL9trSpwQiSsY%2FPRrWR9KOwzIsNhLDsr3Ysxd0xiwb23%2FQVf%2Bl4a85KOxIzGEj9atbok%2FNUQ7UKY9vuhfyxnGjASNq%2Fq9A%2Ff0hXNMFGns4HXEBK8fwnVcv1FF30oyx6AOxWsdNvFKvSP9Ntl9%2FRjbwLTtakGajnJIIUYyQcAiSrxdytvvFaFM9Pm6Zsd%2FcuPXCx%2FiCnCE0z8aUk1A19xXgqfwbKz0rjPJysv26ailSceA0S7xJBWmDDI5abABjqkARgxCFidJ7pWQHrxd5w5iIlhTuV5Snz1gEpGw%2FEaB1qaiWp0sUkH1gquxXt%2Fwxnjvmv5CzfTjwZ6yvSUG4tteG8Y6%2FkUFsTheR%2BM0%2FMKinBdy4Eh%2BB9LBQUqKHPtS7ulBQofAOoSCrwKw7O8rnwBPTxhuJUGcNpZf0%2FfhKpiuSvuiBaUXXBQ19aC63G45SlfWU%2BYTgIEvKgolMQdCdAk9LO9K6ov&X-Amz-Signature=81ae75aabb4f4327cfec5f400c9fae27112e67457934aa67c9c8e60908d54449&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXZI4JA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDvEXK9%2BjoWqZ%2Bn3PUxQYGUMz57qFJQOqn8ifuPhQkC2QIhAOWbvrZ6RJzqnSrA%2FBqlkTObk5EHyYz0fcL3%2FoIxjxzHKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk9gS%2FTyB%2BZAwd4WYq3AOoj6L%2BAclT9IwiFVGq0CZnjrjC%2Fvq5M%2BvkbVd8%2FolOVMsG4U856iMJleFMwI1U9Z9MYHYsSW3j2hRwswzNY6ZIBx5UBRvVfHXEBoHIZ0efDoQf932Qy0e7QP40K12GgZKl0bJCvi2k57Rem5OLmR%2BSRASNuYV1Q6cF0RRmeZzy8e4ZaCwK9seJXZXYhHhdOckw0Tkecl%2FRIVgtTibJPxWbx4Yv2HzJmiPYgFpvCq13Jy2QX6rQ3zZI%2BlQ%2BmnYE5Kde9l5slgo2JQtxIe0eadsU%2FvJXH6%2FZKy0Wit5Dy6uGzF4AwSN%2BZmbG6JfmMbRYTd2nhozVU8NN4%2F4FLdOSent%2BjB2AfagDno2ZOIDeu6PjJCrDcc9n%2Bt0ks0d6mLi4ePS9LJrgXL9trSpwQiSsY%2FPRrWR9KOwzIsNhLDsr3Ysxd0xiwb23%2FQVf%2Bl4a85KOxIzGEj9atbok%2FNUQ7UKY9vuhfyxnGjASNq%2Fq9A%2Ff0hXNMFGns4HXEBK8fwnVcv1FF30oyx6AOxWsdNvFKvSP9Ntl9%2FRjbwLTtakGajnJIIUYyQcAiSrxdytvvFaFM9Pm6Zsd%2FcuPXCx%2FiCnCE0z8aUk1A19xXgqfwbKz0rjPJysv26ailSceA0S7xJBWmDDI5abABjqkARgxCFidJ7pWQHrxd5w5iIlhTuV5Snz1gEpGw%2FEaB1qaiWp0sUkH1gquxXt%2Fwxnjvmv5CzfTjwZ6yvSUG4tteG8Y6%2FkUFsTheR%2BM0%2FMKinBdy4Eh%2BB9LBQUqKHPtS7ulBQofAOoSCrwKw7O8rnwBPTxhuJUGcNpZf0%2FfhKpiuSvuiBaUXXBQ19aC63G45SlfWU%2BYTgIEvKgolMQdCdAk9LO9K6ov&X-Amz-Signature=4aae2afc14593f237fb4ed9540490ac88315e58a6ff9df7c0056f016702634e6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXZI4JA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDvEXK9%2BjoWqZ%2Bn3PUxQYGUMz57qFJQOqn8ifuPhQkC2QIhAOWbvrZ6RJzqnSrA%2FBqlkTObk5EHyYz0fcL3%2FoIxjxzHKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk9gS%2FTyB%2BZAwd4WYq3AOoj6L%2BAclT9IwiFVGq0CZnjrjC%2Fvq5M%2BvkbVd8%2FolOVMsG4U856iMJleFMwI1U9Z9MYHYsSW3j2hRwswzNY6ZIBx5UBRvVfHXEBoHIZ0efDoQf932Qy0e7QP40K12GgZKl0bJCvi2k57Rem5OLmR%2BSRASNuYV1Q6cF0RRmeZzy8e4ZaCwK9seJXZXYhHhdOckw0Tkecl%2FRIVgtTibJPxWbx4Yv2HzJmiPYgFpvCq13Jy2QX6rQ3zZI%2BlQ%2BmnYE5Kde9l5slgo2JQtxIe0eadsU%2FvJXH6%2FZKy0Wit5Dy6uGzF4AwSN%2BZmbG6JfmMbRYTd2nhozVU8NN4%2F4FLdOSent%2BjB2AfagDno2ZOIDeu6PjJCrDcc9n%2Bt0ks0d6mLi4ePS9LJrgXL9trSpwQiSsY%2FPRrWR9KOwzIsNhLDsr3Ysxd0xiwb23%2FQVf%2Bl4a85KOxIzGEj9atbok%2FNUQ7UKY9vuhfyxnGjASNq%2Fq9A%2Ff0hXNMFGns4HXEBK8fwnVcv1FF30oyx6AOxWsdNvFKvSP9Ntl9%2FRjbwLTtakGajnJIIUYyQcAiSrxdytvvFaFM9Pm6Zsd%2FcuPXCx%2FiCnCE0z8aUk1A19xXgqfwbKz0rjPJysv26ailSceA0S7xJBWmDDI5abABjqkARgxCFidJ7pWQHrxd5w5iIlhTuV5Snz1gEpGw%2FEaB1qaiWp0sUkH1gquxXt%2Fwxnjvmv5CzfTjwZ6yvSUG4tteG8Y6%2FkUFsTheR%2BM0%2FMKinBdy4Eh%2BB9LBQUqKHPtS7ulBQofAOoSCrwKw7O8rnwBPTxhuJUGcNpZf0%2FfhKpiuSvuiBaUXXBQ19aC63G45SlfWU%2BYTgIEvKgolMQdCdAk9LO9K6ov&X-Amz-Signature=1779ef6bf8058d92c981eafa8d626f903adafb580c577db477556e5782e127f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXZI4JA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDvEXK9%2BjoWqZ%2Bn3PUxQYGUMz57qFJQOqn8ifuPhQkC2QIhAOWbvrZ6RJzqnSrA%2FBqlkTObk5EHyYz0fcL3%2FoIxjxzHKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk9gS%2FTyB%2BZAwd4WYq3AOoj6L%2BAclT9IwiFVGq0CZnjrjC%2Fvq5M%2BvkbVd8%2FolOVMsG4U856iMJleFMwI1U9Z9MYHYsSW3j2hRwswzNY6ZIBx5UBRvVfHXEBoHIZ0efDoQf932Qy0e7QP40K12GgZKl0bJCvi2k57Rem5OLmR%2BSRASNuYV1Q6cF0RRmeZzy8e4ZaCwK9seJXZXYhHhdOckw0Tkecl%2FRIVgtTibJPxWbx4Yv2HzJmiPYgFpvCq13Jy2QX6rQ3zZI%2BlQ%2BmnYE5Kde9l5slgo2JQtxIe0eadsU%2FvJXH6%2FZKy0Wit5Dy6uGzF4AwSN%2BZmbG6JfmMbRYTd2nhozVU8NN4%2F4FLdOSent%2BjB2AfagDno2ZOIDeu6PjJCrDcc9n%2Bt0ks0d6mLi4ePS9LJrgXL9trSpwQiSsY%2FPRrWR9KOwzIsNhLDsr3Ysxd0xiwb23%2FQVf%2Bl4a85KOxIzGEj9atbok%2FNUQ7UKY9vuhfyxnGjASNq%2Fq9A%2Ff0hXNMFGns4HXEBK8fwnVcv1FF30oyx6AOxWsdNvFKvSP9Ntl9%2FRjbwLTtakGajnJIIUYyQcAiSrxdytvvFaFM9Pm6Zsd%2FcuPXCx%2FiCnCE0z8aUk1A19xXgqfwbKz0rjPJysv26ailSceA0S7xJBWmDDI5abABjqkARgxCFidJ7pWQHrxd5w5iIlhTuV5Snz1gEpGw%2FEaB1qaiWp0sUkH1gquxXt%2Fwxnjvmv5CzfTjwZ6yvSUG4tteG8Y6%2FkUFsTheR%2BM0%2FMKinBdy4Eh%2BB9LBQUqKHPtS7ulBQofAOoSCrwKw7O8rnwBPTxhuJUGcNpZf0%2FfhKpiuSvuiBaUXXBQ19aC63G45SlfWU%2BYTgIEvKgolMQdCdAk9LO9K6ov&X-Amz-Signature=ce6c828c00722f2ad676cd8f92d568ff90a17b130ddf98a90b17fe868a5a6a93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXZI4JA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDvEXK9%2BjoWqZ%2Bn3PUxQYGUMz57qFJQOqn8ifuPhQkC2QIhAOWbvrZ6RJzqnSrA%2FBqlkTObk5EHyYz0fcL3%2FoIxjxzHKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk9gS%2FTyB%2BZAwd4WYq3AOoj6L%2BAclT9IwiFVGq0CZnjrjC%2Fvq5M%2BvkbVd8%2FolOVMsG4U856iMJleFMwI1U9Z9MYHYsSW3j2hRwswzNY6ZIBx5UBRvVfHXEBoHIZ0efDoQf932Qy0e7QP40K12GgZKl0bJCvi2k57Rem5OLmR%2BSRASNuYV1Q6cF0RRmeZzy8e4ZaCwK9seJXZXYhHhdOckw0Tkecl%2FRIVgtTibJPxWbx4Yv2HzJmiPYgFpvCq13Jy2QX6rQ3zZI%2BlQ%2BmnYE5Kde9l5slgo2JQtxIe0eadsU%2FvJXH6%2FZKy0Wit5Dy6uGzF4AwSN%2BZmbG6JfmMbRYTd2nhozVU8NN4%2F4FLdOSent%2BjB2AfagDno2ZOIDeu6PjJCrDcc9n%2Bt0ks0d6mLi4ePS9LJrgXL9trSpwQiSsY%2FPRrWR9KOwzIsNhLDsr3Ysxd0xiwb23%2FQVf%2Bl4a85KOxIzGEj9atbok%2FNUQ7UKY9vuhfyxnGjASNq%2Fq9A%2Ff0hXNMFGns4HXEBK8fwnVcv1FF30oyx6AOxWsdNvFKvSP9Ntl9%2FRjbwLTtakGajnJIIUYyQcAiSrxdytvvFaFM9Pm6Zsd%2FcuPXCx%2FiCnCE0z8aUk1A19xXgqfwbKz0rjPJysv26ailSceA0S7xJBWmDDI5abABjqkARgxCFidJ7pWQHrxd5w5iIlhTuV5Snz1gEpGw%2FEaB1qaiWp0sUkH1gquxXt%2Fwxnjvmv5CzfTjwZ6yvSUG4tteG8Y6%2FkUFsTheR%2BM0%2FMKinBdy4Eh%2BB9LBQUqKHPtS7ulBQofAOoSCrwKw7O8rnwBPTxhuJUGcNpZf0%2FfhKpiuSvuiBaUXXBQ19aC63G45SlfWU%2BYTgIEvKgolMQdCdAk9LO9K6ov&X-Amz-Signature=78c23e133216667d532b4d7330edcabe7d17c334cd6f9816204d7efdd8a5ad11&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
