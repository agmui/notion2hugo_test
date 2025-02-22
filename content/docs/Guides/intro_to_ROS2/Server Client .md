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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YDABTQK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGY30jf2Tbu%2BQgDJQtYRXm%2F4va8PrGjU7%2FC%2BmjSj%2BxcwIhAO%2FIUp6Tv1%2Bo09dyKLHi6aRw8lxlTlpICPmcBh5dXH93KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3qCblbRnsi6ZDwQ0q3APf4EmajaS1kD9cawqMbzePr0g2wH6LZ7HPKAIFQhC4%2Fr09v7ama7y76Lk1qxVY0VhcxTdwuAMKmOVxFHr15NHUwni%2Fu%2FuijHgAriO9ny2DQ2Jq25i5%2Bylz6vG4GrLViD5kLRuML3W%2BvmsUQQqgGWLkwKzzmYxOt12%2F1oJZOJFKEIsF6OJ7S8446%2FppFbOMOo2I0mP26koMMSYckHFhdxrr1R1Cue%2FRvDr6OxS9bTFoSZF3VXfhf%2B4CuZXLo6qipVbbmnLO%2FuT8qVs1CYqyuwm87QOlC77%2BjXLvnlx%2BKdvffUoJ79C33Wz6QmT0UjnxmIg7rLvKWOM%2Bd%2FErDAvrKvEHSTbAb1rVa%2BTv6PYUvzWDjKUdFMnvSeUCdfLU583o7sfa7puZvO%2FhU8Aw0Tve7jpgSH4gp0U5ZBIlmLvmzCVWyv1B5CVvCITfSWLM%2FyDpLfIg7SkSPkUvu27%2BXXKWYxKZ1cig2v2B5AVwGj3je9lRCAykWgfbyufoKeuSh%2Borp%2FLCvSlPWShNXKyQaiYAbl5N8UBNfaGXYkmLVa6aMZHX7HOnU78eqlUYnKprQbhds1%2FgbrlLHj2qYOa2b%2ByI%2FWHY0KZ%2BvNkyIDRjSXJxgRTtav8wUe1rd8UF1T%2FUgzDnzuS9BjqkAWMYm5%2BA7wXrkxdNvHOmnGVZMzNFWLPFsgEoYOK6cslcQOf1tQeJLtna00HRfaErktjlcMm1%2BFPbYQYA82hGgUU9Bf7t%2BhU09t5%2BWs6zA%2FtZo%2B6X7enfmsATzVjtaeAiyuoO8KJpM05t%2FKdiCyFEJ%2FwNhJtraEt9W9c6dZr2w3WnbCZRLU4RqJ9qGqu8Gmx9Y8S%2FtCIapU7zP6FO4J9GTmccv0dF&X-Amz-Signature=75cbcecc9c99a78d309a9bdcf3e50579c3f029baf06718e73561b8535be9c01e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YDABTQK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGY30jf2Tbu%2BQgDJQtYRXm%2F4va8PrGjU7%2FC%2BmjSj%2BxcwIhAO%2FIUp6Tv1%2Bo09dyKLHi6aRw8lxlTlpICPmcBh5dXH93KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3qCblbRnsi6ZDwQ0q3APf4EmajaS1kD9cawqMbzePr0g2wH6LZ7HPKAIFQhC4%2Fr09v7ama7y76Lk1qxVY0VhcxTdwuAMKmOVxFHr15NHUwni%2Fu%2FuijHgAriO9ny2DQ2Jq25i5%2Bylz6vG4GrLViD5kLRuML3W%2BvmsUQQqgGWLkwKzzmYxOt12%2F1oJZOJFKEIsF6OJ7S8446%2FppFbOMOo2I0mP26koMMSYckHFhdxrr1R1Cue%2FRvDr6OxS9bTFoSZF3VXfhf%2B4CuZXLo6qipVbbmnLO%2FuT8qVs1CYqyuwm87QOlC77%2BjXLvnlx%2BKdvffUoJ79C33Wz6QmT0UjnxmIg7rLvKWOM%2Bd%2FErDAvrKvEHSTbAb1rVa%2BTv6PYUvzWDjKUdFMnvSeUCdfLU583o7sfa7puZvO%2FhU8Aw0Tve7jpgSH4gp0U5ZBIlmLvmzCVWyv1B5CVvCITfSWLM%2FyDpLfIg7SkSPkUvu27%2BXXKWYxKZ1cig2v2B5AVwGj3je9lRCAykWgfbyufoKeuSh%2Borp%2FLCvSlPWShNXKyQaiYAbl5N8UBNfaGXYkmLVa6aMZHX7HOnU78eqlUYnKprQbhds1%2FgbrlLHj2qYOa2b%2ByI%2FWHY0KZ%2BvNkyIDRjSXJxgRTtav8wUe1rd8UF1T%2FUgzDnzuS9BjqkAWMYm5%2BA7wXrkxdNvHOmnGVZMzNFWLPFsgEoYOK6cslcQOf1tQeJLtna00HRfaErktjlcMm1%2BFPbYQYA82hGgUU9Bf7t%2BhU09t5%2BWs6zA%2FtZo%2B6X7enfmsATzVjtaeAiyuoO8KJpM05t%2FKdiCyFEJ%2FwNhJtraEt9W9c6dZr2w3WnbCZRLU4RqJ9qGqu8Gmx9Y8S%2FtCIapU7zP6FO4J9GTmccv0dF&X-Amz-Signature=3182765c6222d3f6e9c384df9c3c59acd5cb0a6e426ab36e9f2d4259c2648ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YDABTQK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGY30jf2Tbu%2BQgDJQtYRXm%2F4va8PrGjU7%2FC%2BmjSj%2BxcwIhAO%2FIUp6Tv1%2Bo09dyKLHi6aRw8lxlTlpICPmcBh5dXH93KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3qCblbRnsi6ZDwQ0q3APf4EmajaS1kD9cawqMbzePr0g2wH6LZ7HPKAIFQhC4%2Fr09v7ama7y76Lk1qxVY0VhcxTdwuAMKmOVxFHr15NHUwni%2Fu%2FuijHgAriO9ny2DQ2Jq25i5%2Bylz6vG4GrLViD5kLRuML3W%2BvmsUQQqgGWLkwKzzmYxOt12%2F1oJZOJFKEIsF6OJ7S8446%2FppFbOMOo2I0mP26koMMSYckHFhdxrr1R1Cue%2FRvDr6OxS9bTFoSZF3VXfhf%2B4CuZXLo6qipVbbmnLO%2FuT8qVs1CYqyuwm87QOlC77%2BjXLvnlx%2BKdvffUoJ79C33Wz6QmT0UjnxmIg7rLvKWOM%2Bd%2FErDAvrKvEHSTbAb1rVa%2BTv6PYUvzWDjKUdFMnvSeUCdfLU583o7sfa7puZvO%2FhU8Aw0Tve7jpgSH4gp0U5ZBIlmLvmzCVWyv1B5CVvCITfSWLM%2FyDpLfIg7SkSPkUvu27%2BXXKWYxKZ1cig2v2B5AVwGj3je9lRCAykWgfbyufoKeuSh%2Borp%2FLCvSlPWShNXKyQaiYAbl5N8UBNfaGXYkmLVa6aMZHX7HOnU78eqlUYnKprQbhds1%2FgbrlLHj2qYOa2b%2ByI%2FWHY0KZ%2BvNkyIDRjSXJxgRTtav8wUe1rd8UF1T%2FUgzDnzuS9BjqkAWMYm5%2BA7wXrkxdNvHOmnGVZMzNFWLPFsgEoYOK6cslcQOf1tQeJLtna00HRfaErktjlcMm1%2BFPbYQYA82hGgUU9Bf7t%2BhU09t5%2BWs6zA%2FtZo%2B6X7enfmsATzVjtaeAiyuoO8KJpM05t%2FKdiCyFEJ%2FwNhJtraEt9W9c6dZr2w3WnbCZRLU4RqJ9qGqu8Gmx9Y8S%2FtCIapU7zP6FO4J9GTmccv0dF&X-Amz-Signature=b625f6a56f6d5200e02eedc3c7ba6b3ea178fb0a8fbdf78ed5e6177187b2eccf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YDABTQK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGY30jf2Tbu%2BQgDJQtYRXm%2F4va8PrGjU7%2FC%2BmjSj%2BxcwIhAO%2FIUp6Tv1%2Bo09dyKLHi6aRw8lxlTlpICPmcBh5dXH93KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3qCblbRnsi6ZDwQ0q3APf4EmajaS1kD9cawqMbzePr0g2wH6LZ7HPKAIFQhC4%2Fr09v7ama7y76Lk1qxVY0VhcxTdwuAMKmOVxFHr15NHUwni%2Fu%2FuijHgAriO9ny2DQ2Jq25i5%2Bylz6vG4GrLViD5kLRuML3W%2BvmsUQQqgGWLkwKzzmYxOt12%2F1oJZOJFKEIsF6OJ7S8446%2FppFbOMOo2I0mP26koMMSYckHFhdxrr1R1Cue%2FRvDr6OxS9bTFoSZF3VXfhf%2B4CuZXLo6qipVbbmnLO%2FuT8qVs1CYqyuwm87QOlC77%2BjXLvnlx%2BKdvffUoJ79C33Wz6QmT0UjnxmIg7rLvKWOM%2Bd%2FErDAvrKvEHSTbAb1rVa%2BTv6PYUvzWDjKUdFMnvSeUCdfLU583o7sfa7puZvO%2FhU8Aw0Tve7jpgSH4gp0U5ZBIlmLvmzCVWyv1B5CVvCITfSWLM%2FyDpLfIg7SkSPkUvu27%2BXXKWYxKZ1cig2v2B5AVwGj3je9lRCAykWgfbyufoKeuSh%2Borp%2FLCvSlPWShNXKyQaiYAbl5N8UBNfaGXYkmLVa6aMZHX7HOnU78eqlUYnKprQbhds1%2FgbrlLHj2qYOa2b%2ByI%2FWHY0KZ%2BvNkyIDRjSXJxgRTtav8wUe1rd8UF1T%2FUgzDnzuS9BjqkAWMYm5%2BA7wXrkxdNvHOmnGVZMzNFWLPFsgEoYOK6cslcQOf1tQeJLtna00HRfaErktjlcMm1%2BFPbYQYA82hGgUU9Bf7t%2BhU09t5%2BWs6zA%2FtZo%2B6X7enfmsATzVjtaeAiyuoO8KJpM05t%2FKdiCyFEJ%2FwNhJtraEt9W9c6dZr2w3WnbCZRLU4RqJ9qGqu8Gmx9Y8S%2FtCIapU7zP6FO4J9GTmccv0dF&X-Amz-Signature=23556ed37486e90551b8c9589238e51c377e95409ea5a2cae8391a9cc50ecbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YDABTQK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGY30jf2Tbu%2BQgDJQtYRXm%2F4va8PrGjU7%2FC%2BmjSj%2BxcwIhAO%2FIUp6Tv1%2Bo09dyKLHi6aRw8lxlTlpICPmcBh5dXH93KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3qCblbRnsi6ZDwQ0q3APf4EmajaS1kD9cawqMbzePr0g2wH6LZ7HPKAIFQhC4%2Fr09v7ama7y76Lk1qxVY0VhcxTdwuAMKmOVxFHr15NHUwni%2Fu%2FuijHgAriO9ny2DQ2Jq25i5%2Bylz6vG4GrLViD5kLRuML3W%2BvmsUQQqgGWLkwKzzmYxOt12%2F1oJZOJFKEIsF6OJ7S8446%2FppFbOMOo2I0mP26koMMSYckHFhdxrr1R1Cue%2FRvDr6OxS9bTFoSZF3VXfhf%2B4CuZXLo6qipVbbmnLO%2FuT8qVs1CYqyuwm87QOlC77%2BjXLvnlx%2BKdvffUoJ79C33Wz6QmT0UjnxmIg7rLvKWOM%2Bd%2FErDAvrKvEHSTbAb1rVa%2BTv6PYUvzWDjKUdFMnvSeUCdfLU583o7sfa7puZvO%2FhU8Aw0Tve7jpgSH4gp0U5ZBIlmLvmzCVWyv1B5CVvCITfSWLM%2FyDpLfIg7SkSPkUvu27%2BXXKWYxKZ1cig2v2B5AVwGj3je9lRCAykWgfbyufoKeuSh%2Borp%2FLCvSlPWShNXKyQaiYAbl5N8UBNfaGXYkmLVa6aMZHX7HOnU78eqlUYnKprQbhds1%2FgbrlLHj2qYOa2b%2ByI%2FWHY0KZ%2BvNkyIDRjSXJxgRTtav8wUe1rd8UF1T%2FUgzDnzuS9BjqkAWMYm5%2BA7wXrkxdNvHOmnGVZMzNFWLPFsgEoYOK6cslcQOf1tQeJLtna00HRfaErktjlcMm1%2BFPbYQYA82hGgUU9Bf7t%2BhU09t5%2BWs6zA%2FtZo%2B6X7enfmsATzVjtaeAiyuoO8KJpM05t%2FKdiCyFEJ%2FwNhJtraEt9W9c6dZr2w3WnbCZRLU4RqJ9qGqu8Gmx9Y8S%2FtCIapU7zP6FO4J9GTmccv0dF&X-Amz-Signature=60781e30bea7622d4df6f96e76327d129628112c35bd28cfa5c850bcd80801b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
