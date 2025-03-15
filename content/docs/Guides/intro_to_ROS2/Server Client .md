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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTSFCNE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxeQSuUezGmtaHeH6ag4cVtbr%2FHaNcAsxfkKbZuYL1tAiEAuiDwK0IQf8quuCSYMne%2FY7QDMx6EYtOsE7%2FY7UvSAGIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYeuX46Pux1uoNX4yrcA%2F%2BZeTylo7op%2BmyZ5941dsEhdp%2FuNlv3MkwaqyDs4Y%2FYiG3ymzfC3IHw0iTJkWWLFjea9BgSsRgcr5eqfWqOvZ6oBB5%2FfzH2JFVzK69MOsVhuxnn0nFRZFh%2BtW%2FvbywrmdRBJR43tL3jkWZzAjFom3Rljc5J9xpdFZotYun6EZ6gYcBbnfWy4lFA%2FAAGnIOuS9yTPe3fnFCLoNn4drkppPl85%2BvU%2BHpnu9FMmmQgZiaCN7ZRF%2FMNmjDCmhIYtg4k9kIxqJG5z7xhC%2F2Fq%2Fy4tSjW0eJ9lYVejrMGXZe6GPbUVdg7ooG%2BLRsQMmkXR7o5755uUILIPZLG9b9q4fsPT8JwtpQLW7%2F8aK5iDSZzDp94yy2G0rsQxVic0zY3VLefI3i4JPBVv9OR8cXe4j4C0%2Fo8ZoKUVvMS%2BxIbXzo457Yxm1HDpoczb71KL37e7SR%2BPcgcrkWLyqpXORcM30HRmWJ%2Fho2qSziNzF5KumqqdYM0RvVVGYMFObH2iNclaEBmRAei%2BsVStviyK6b1bdtjaAJ0FKoDA917fBuzlLj%2F6iPPmV9vE%2FrhGoCNJxWR2UUK%2FTvtCNu1U6hs6BORv843CkO9OgrDq3GEpeB1tcT3dHA5ikdfEjHofZEwcQRoMKSN074GOqUBhlFRpYyDQ2vxvLpmJ5azYxGzW94keReDO%2BUziUthIcdk9%2BiyWEW1VLzbhCHcbbVPI4zBFFkQPWtyGdr0LYABTH9lRogWtCliqYEcisuMq%2F8P9OvAlhpbZ87A%2BsL4gwMzxPQwWfQXxbMcICUS3X0T93YkKk%2BijAxp5YFekB5f%2Fp8JfJb389fLKuu01EbBnhQ%2B2qd7PvmTKa0Dhe8Ujkm%2F94qzeIRa&X-Amz-Signature=e6f278262d7df779871c67260c3f13fde147e53f0af02dfba4e405c730d2a39b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTSFCNE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxeQSuUezGmtaHeH6ag4cVtbr%2FHaNcAsxfkKbZuYL1tAiEAuiDwK0IQf8quuCSYMne%2FY7QDMx6EYtOsE7%2FY7UvSAGIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYeuX46Pux1uoNX4yrcA%2F%2BZeTylo7op%2BmyZ5941dsEhdp%2FuNlv3MkwaqyDs4Y%2FYiG3ymzfC3IHw0iTJkWWLFjea9BgSsRgcr5eqfWqOvZ6oBB5%2FfzH2JFVzK69MOsVhuxnn0nFRZFh%2BtW%2FvbywrmdRBJR43tL3jkWZzAjFom3Rljc5J9xpdFZotYun6EZ6gYcBbnfWy4lFA%2FAAGnIOuS9yTPe3fnFCLoNn4drkppPl85%2BvU%2BHpnu9FMmmQgZiaCN7ZRF%2FMNmjDCmhIYtg4k9kIxqJG5z7xhC%2F2Fq%2Fy4tSjW0eJ9lYVejrMGXZe6GPbUVdg7ooG%2BLRsQMmkXR7o5755uUILIPZLG9b9q4fsPT8JwtpQLW7%2F8aK5iDSZzDp94yy2G0rsQxVic0zY3VLefI3i4JPBVv9OR8cXe4j4C0%2Fo8ZoKUVvMS%2BxIbXzo457Yxm1HDpoczb71KL37e7SR%2BPcgcrkWLyqpXORcM30HRmWJ%2Fho2qSziNzF5KumqqdYM0RvVVGYMFObH2iNclaEBmRAei%2BsVStviyK6b1bdtjaAJ0FKoDA917fBuzlLj%2F6iPPmV9vE%2FrhGoCNJxWR2UUK%2FTvtCNu1U6hs6BORv843CkO9OgrDq3GEpeB1tcT3dHA5ikdfEjHofZEwcQRoMKSN074GOqUBhlFRpYyDQ2vxvLpmJ5azYxGzW94keReDO%2BUziUthIcdk9%2BiyWEW1VLzbhCHcbbVPI4zBFFkQPWtyGdr0LYABTH9lRogWtCliqYEcisuMq%2F8P9OvAlhpbZ87A%2BsL4gwMzxPQwWfQXxbMcICUS3X0T93YkKk%2BijAxp5YFekB5f%2Fp8JfJb389fLKuu01EbBnhQ%2B2qd7PvmTKa0Dhe8Ujkm%2F94qzeIRa&X-Amz-Signature=7d48804a2fa23168d837c69a07dd6a2ce32cb0f27371f4c55ee121394ea7ca20&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTSFCNE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxeQSuUezGmtaHeH6ag4cVtbr%2FHaNcAsxfkKbZuYL1tAiEAuiDwK0IQf8quuCSYMne%2FY7QDMx6EYtOsE7%2FY7UvSAGIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYeuX46Pux1uoNX4yrcA%2F%2BZeTylo7op%2BmyZ5941dsEhdp%2FuNlv3MkwaqyDs4Y%2FYiG3ymzfC3IHw0iTJkWWLFjea9BgSsRgcr5eqfWqOvZ6oBB5%2FfzH2JFVzK69MOsVhuxnn0nFRZFh%2BtW%2FvbywrmdRBJR43tL3jkWZzAjFom3Rljc5J9xpdFZotYun6EZ6gYcBbnfWy4lFA%2FAAGnIOuS9yTPe3fnFCLoNn4drkppPl85%2BvU%2BHpnu9FMmmQgZiaCN7ZRF%2FMNmjDCmhIYtg4k9kIxqJG5z7xhC%2F2Fq%2Fy4tSjW0eJ9lYVejrMGXZe6GPbUVdg7ooG%2BLRsQMmkXR7o5755uUILIPZLG9b9q4fsPT8JwtpQLW7%2F8aK5iDSZzDp94yy2G0rsQxVic0zY3VLefI3i4JPBVv9OR8cXe4j4C0%2Fo8ZoKUVvMS%2BxIbXzo457Yxm1HDpoczb71KL37e7SR%2BPcgcrkWLyqpXORcM30HRmWJ%2Fho2qSziNzF5KumqqdYM0RvVVGYMFObH2iNclaEBmRAei%2BsVStviyK6b1bdtjaAJ0FKoDA917fBuzlLj%2F6iPPmV9vE%2FrhGoCNJxWR2UUK%2FTvtCNu1U6hs6BORv843CkO9OgrDq3GEpeB1tcT3dHA5ikdfEjHofZEwcQRoMKSN074GOqUBhlFRpYyDQ2vxvLpmJ5azYxGzW94keReDO%2BUziUthIcdk9%2BiyWEW1VLzbhCHcbbVPI4zBFFkQPWtyGdr0LYABTH9lRogWtCliqYEcisuMq%2F8P9OvAlhpbZ87A%2BsL4gwMzxPQwWfQXxbMcICUS3X0T93YkKk%2BijAxp5YFekB5f%2Fp8JfJb389fLKuu01EbBnhQ%2B2qd7PvmTKa0Dhe8Ujkm%2F94qzeIRa&X-Amz-Signature=45c931780cc9ecb69d37f6f2fa4b23ee9bb4ed491283993576cadec28525f6be&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTSFCNE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxeQSuUezGmtaHeH6ag4cVtbr%2FHaNcAsxfkKbZuYL1tAiEAuiDwK0IQf8quuCSYMne%2FY7QDMx6EYtOsE7%2FY7UvSAGIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYeuX46Pux1uoNX4yrcA%2F%2BZeTylo7op%2BmyZ5941dsEhdp%2FuNlv3MkwaqyDs4Y%2FYiG3ymzfC3IHw0iTJkWWLFjea9BgSsRgcr5eqfWqOvZ6oBB5%2FfzH2JFVzK69MOsVhuxnn0nFRZFh%2BtW%2FvbywrmdRBJR43tL3jkWZzAjFom3Rljc5J9xpdFZotYun6EZ6gYcBbnfWy4lFA%2FAAGnIOuS9yTPe3fnFCLoNn4drkppPl85%2BvU%2BHpnu9FMmmQgZiaCN7ZRF%2FMNmjDCmhIYtg4k9kIxqJG5z7xhC%2F2Fq%2Fy4tSjW0eJ9lYVejrMGXZe6GPbUVdg7ooG%2BLRsQMmkXR7o5755uUILIPZLG9b9q4fsPT8JwtpQLW7%2F8aK5iDSZzDp94yy2G0rsQxVic0zY3VLefI3i4JPBVv9OR8cXe4j4C0%2Fo8ZoKUVvMS%2BxIbXzo457Yxm1HDpoczb71KL37e7SR%2BPcgcrkWLyqpXORcM30HRmWJ%2Fho2qSziNzF5KumqqdYM0RvVVGYMFObH2iNclaEBmRAei%2BsVStviyK6b1bdtjaAJ0FKoDA917fBuzlLj%2F6iPPmV9vE%2FrhGoCNJxWR2UUK%2FTvtCNu1U6hs6BORv843CkO9OgrDq3GEpeB1tcT3dHA5ikdfEjHofZEwcQRoMKSN074GOqUBhlFRpYyDQ2vxvLpmJ5azYxGzW94keReDO%2BUziUthIcdk9%2BiyWEW1VLzbhCHcbbVPI4zBFFkQPWtyGdr0LYABTH9lRogWtCliqYEcisuMq%2F8P9OvAlhpbZ87A%2BsL4gwMzxPQwWfQXxbMcICUS3X0T93YkKk%2BijAxp5YFekB5f%2Fp8JfJb389fLKuu01EbBnhQ%2B2qd7PvmTKa0Dhe8Ujkm%2F94qzeIRa&X-Amz-Signature=4f40afe089194dfb11a45121d30f575a980b41725dcc8462f807a70fec37459c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTSFCNE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxeQSuUezGmtaHeH6ag4cVtbr%2FHaNcAsxfkKbZuYL1tAiEAuiDwK0IQf8quuCSYMne%2FY7QDMx6EYtOsE7%2FY7UvSAGIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYeuX46Pux1uoNX4yrcA%2F%2BZeTylo7op%2BmyZ5941dsEhdp%2FuNlv3MkwaqyDs4Y%2FYiG3ymzfC3IHw0iTJkWWLFjea9BgSsRgcr5eqfWqOvZ6oBB5%2FfzH2JFVzK69MOsVhuxnn0nFRZFh%2BtW%2FvbywrmdRBJR43tL3jkWZzAjFom3Rljc5J9xpdFZotYun6EZ6gYcBbnfWy4lFA%2FAAGnIOuS9yTPe3fnFCLoNn4drkppPl85%2BvU%2BHpnu9FMmmQgZiaCN7ZRF%2FMNmjDCmhIYtg4k9kIxqJG5z7xhC%2F2Fq%2Fy4tSjW0eJ9lYVejrMGXZe6GPbUVdg7ooG%2BLRsQMmkXR7o5755uUILIPZLG9b9q4fsPT8JwtpQLW7%2F8aK5iDSZzDp94yy2G0rsQxVic0zY3VLefI3i4JPBVv9OR8cXe4j4C0%2Fo8ZoKUVvMS%2BxIbXzo457Yxm1HDpoczb71KL37e7SR%2BPcgcrkWLyqpXORcM30HRmWJ%2Fho2qSziNzF5KumqqdYM0RvVVGYMFObH2iNclaEBmRAei%2BsVStviyK6b1bdtjaAJ0FKoDA917fBuzlLj%2F6iPPmV9vE%2FrhGoCNJxWR2UUK%2FTvtCNu1U6hs6BORv843CkO9OgrDq3GEpeB1tcT3dHA5ikdfEjHofZEwcQRoMKSN074GOqUBhlFRpYyDQ2vxvLpmJ5azYxGzW94keReDO%2BUziUthIcdk9%2BiyWEW1VLzbhCHcbbVPI4zBFFkQPWtyGdr0LYABTH9lRogWtCliqYEcisuMq%2F8P9OvAlhpbZ87A%2BsL4gwMzxPQwWfQXxbMcICUS3X0T93YkKk%2BijAxp5YFekB5f%2Fp8JfJb389fLKuu01EbBnhQ%2B2qd7PvmTKa0Dhe8Ujkm%2F94qzeIRa&X-Amz-Signature=e08ff6cf4e131edd5568f38e6970f869872bf7c3f0ef097bef1d7a55d2f916ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
