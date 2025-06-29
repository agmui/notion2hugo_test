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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGFPKB3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZJwE%2B4faqLHkLi2QLeoaAKEmQY%2FYFWxzRT6%2BnIxLM%2BQIhAMgP%2BOlRI%2BDNkWPxHf3t6ajGY1JDsZ9ACfela%2BKwp2AIKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fi%2FXnaCuEK4uhdxYq3ANAE3TEnS8Ba1shr8e0gPe3yeb2WbJ62zMLBAx0HJYCbHDVLEAmMf3NVE%2Fk6LGxh18pkPThdYwKDnDOE%2BD4s5pTzp%2BVKIS23UFCfF9jYZNAAhFvZiR6qIC0iVGLDYkLZR1DqSSzYe1VMJlNPtoKxGV9yzYJhgPkq3V9Z38wwUMCz%2F2EgPeTPqUYGisPVdWiTJZ8UVdH%2F2jIcctrIZxk%2Btj0lnKX%2FnffObiCC03hA1VWQz%2B8WsW2R1lvp9rBhS5yB9aetpz%2FM7O5Oq1TopB1fYD7zUeRpRy1iXKSsj7EecATUH8%2By%2F9g6lk9YAX5bxW9d6t%2BS3EoJIxiqiU78zPAcTbyKHgPPhheRUzg9pJYR7Iock1IWuBWw7xNImt1l3MUvoFJiOSXEBVzsSe2GeylcXA5pUOw34K%2FhUHPYpNpjipI0z%2BB23raV9HXmzSIjptOp%2BzVOSwcjkZLuRRr8tD%2Bifdcrk%2BPEH0DEPo5hWddcoiyRorxISitoPoY0XrfqCIlg099hIr0OmFFgqwOFn1Hnijdn%2FYpDx%2Fr%2F8beBZbq3B2ww7lTiW%2FHX11C%2BT7X950eQ5D%2B3KTmulS2sF8FQ2iOTaTqi59Hv2ez%2BAoOyWqYj4n1Ox8KiLabr%2BfRwjCPyDDvu4TDBjqkAZ%2Fgkjy6nBQEoUx6kYUGkiQThbBnnsEBwh3lCIbNy3uK4mQrBYFf7K6Yo53Gm7zZ6PdEhqUPlO25s90eIjsFuCdARgqt4KIcVWltHLiFR%2BHX0JaFQv6wYIVrCUh2Z5weTnaA3cGejGAYKgS6bHW3XSJFxjKTAD4YSzzMU0JF0wIY72WzFcuKbrYCCR9i3cvN0S4lgmYrbL82%2Bjnevj0qSGjtwZGq&X-Amz-Signature=ac9cd982847ebf86c1cbb41b1025da2ff7c8e6d73eb450e2f0969db896c95233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGFPKB3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZJwE%2B4faqLHkLi2QLeoaAKEmQY%2FYFWxzRT6%2BnIxLM%2BQIhAMgP%2BOlRI%2BDNkWPxHf3t6ajGY1JDsZ9ACfela%2BKwp2AIKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fi%2FXnaCuEK4uhdxYq3ANAE3TEnS8Ba1shr8e0gPe3yeb2WbJ62zMLBAx0HJYCbHDVLEAmMf3NVE%2Fk6LGxh18pkPThdYwKDnDOE%2BD4s5pTzp%2BVKIS23UFCfF9jYZNAAhFvZiR6qIC0iVGLDYkLZR1DqSSzYe1VMJlNPtoKxGV9yzYJhgPkq3V9Z38wwUMCz%2F2EgPeTPqUYGisPVdWiTJZ8UVdH%2F2jIcctrIZxk%2Btj0lnKX%2FnffObiCC03hA1VWQz%2B8WsW2R1lvp9rBhS5yB9aetpz%2FM7O5Oq1TopB1fYD7zUeRpRy1iXKSsj7EecATUH8%2By%2F9g6lk9YAX5bxW9d6t%2BS3EoJIxiqiU78zPAcTbyKHgPPhheRUzg9pJYR7Iock1IWuBWw7xNImt1l3MUvoFJiOSXEBVzsSe2GeylcXA5pUOw34K%2FhUHPYpNpjipI0z%2BB23raV9HXmzSIjptOp%2BzVOSwcjkZLuRRr8tD%2Bifdcrk%2BPEH0DEPo5hWddcoiyRorxISitoPoY0XrfqCIlg099hIr0OmFFgqwOFn1Hnijdn%2FYpDx%2Fr%2F8beBZbq3B2ww7lTiW%2FHX11C%2BT7X950eQ5D%2B3KTmulS2sF8FQ2iOTaTqi59Hv2ez%2BAoOyWqYj4n1Ox8KiLabr%2BfRwjCPyDDvu4TDBjqkAZ%2Fgkjy6nBQEoUx6kYUGkiQThbBnnsEBwh3lCIbNy3uK4mQrBYFf7K6Yo53Gm7zZ6PdEhqUPlO25s90eIjsFuCdARgqt4KIcVWltHLiFR%2BHX0JaFQv6wYIVrCUh2Z5weTnaA3cGejGAYKgS6bHW3XSJFxjKTAD4YSzzMU0JF0wIY72WzFcuKbrYCCR9i3cvN0S4lgmYrbL82%2Bjnevj0qSGjtwZGq&X-Amz-Signature=fe2281a512b0f2ad4e93ad13ecd7c88c681768c4d15ee2e9bbab367df84f85e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGFPKB3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZJwE%2B4faqLHkLi2QLeoaAKEmQY%2FYFWxzRT6%2BnIxLM%2BQIhAMgP%2BOlRI%2BDNkWPxHf3t6ajGY1JDsZ9ACfela%2BKwp2AIKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fi%2FXnaCuEK4uhdxYq3ANAE3TEnS8Ba1shr8e0gPe3yeb2WbJ62zMLBAx0HJYCbHDVLEAmMf3NVE%2Fk6LGxh18pkPThdYwKDnDOE%2BD4s5pTzp%2BVKIS23UFCfF9jYZNAAhFvZiR6qIC0iVGLDYkLZR1DqSSzYe1VMJlNPtoKxGV9yzYJhgPkq3V9Z38wwUMCz%2F2EgPeTPqUYGisPVdWiTJZ8UVdH%2F2jIcctrIZxk%2Btj0lnKX%2FnffObiCC03hA1VWQz%2B8WsW2R1lvp9rBhS5yB9aetpz%2FM7O5Oq1TopB1fYD7zUeRpRy1iXKSsj7EecATUH8%2By%2F9g6lk9YAX5bxW9d6t%2BS3EoJIxiqiU78zPAcTbyKHgPPhheRUzg9pJYR7Iock1IWuBWw7xNImt1l3MUvoFJiOSXEBVzsSe2GeylcXA5pUOw34K%2FhUHPYpNpjipI0z%2BB23raV9HXmzSIjptOp%2BzVOSwcjkZLuRRr8tD%2Bifdcrk%2BPEH0DEPo5hWddcoiyRorxISitoPoY0XrfqCIlg099hIr0OmFFgqwOFn1Hnijdn%2FYpDx%2Fr%2F8beBZbq3B2ww7lTiW%2FHX11C%2BT7X950eQ5D%2B3KTmulS2sF8FQ2iOTaTqi59Hv2ez%2BAoOyWqYj4n1Ox8KiLabr%2BfRwjCPyDDvu4TDBjqkAZ%2Fgkjy6nBQEoUx6kYUGkiQThbBnnsEBwh3lCIbNy3uK4mQrBYFf7K6Yo53Gm7zZ6PdEhqUPlO25s90eIjsFuCdARgqt4KIcVWltHLiFR%2BHX0JaFQv6wYIVrCUh2Z5weTnaA3cGejGAYKgS6bHW3XSJFxjKTAD4YSzzMU0JF0wIY72WzFcuKbrYCCR9i3cvN0S4lgmYrbL82%2Bjnevj0qSGjtwZGq&X-Amz-Signature=37fca81879a2c766b030821acf769f383543824b42e861dbcb98d0c901d30732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGFPKB3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZJwE%2B4faqLHkLi2QLeoaAKEmQY%2FYFWxzRT6%2BnIxLM%2BQIhAMgP%2BOlRI%2BDNkWPxHf3t6ajGY1JDsZ9ACfela%2BKwp2AIKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fi%2FXnaCuEK4uhdxYq3ANAE3TEnS8Ba1shr8e0gPe3yeb2WbJ62zMLBAx0HJYCbHDVLEAmMf3NVE%2Fk6LGxh18pkPThdYwKDnDOE%2BD4s5pTzp%2BVKIS23UFCfF9jYZNAAhFvZiR6qIC0iVGLDYkLZR1DqSSzYe1VMJlNPtoKxGV9yzYJhgPkq3V9Z38wwUMCz%2F2EgPeTPqUYGisPVdWiTJZ8UVdH%2F2jIcctrIZxk%2Btj0lnKX%2FnffObiCC03hA1VWQz%2B8WsW2R1lvp9rBhS5yB9aetpz%2FM7O5Oq1TopB1fYD7zUeRpRy1iXKSsj7EecATUH8%2By%2F9g6lk9YAX5bxW9d6t%2BS3EoJIxiqiU78zPAcTbyKHgPPhheRUzg9pJYR7Iock1IWuBWw7xNImt1l3MUvoFJiOSXEBVzsSe2GeylcXA5pUOw34K%2FhUHPYpNpjipI0z%2BB23raV9HXmzSIjptOp%2BzVOSwcjkZLuRRr8tD%2Bifdcrk%2BPEH0DEPo5hWddcoiyRorxISitoPoY0XrfqCIlg099hIr0OmFFgqwOFn1Hnijdn%2FYpDx%2Fr%2F8beBZbq3B2ww7lTiW%2FHX11C%2BT7X950eQ5D%2B3KTmulS2sF8FQ2iOTaTqi59Hv2ez%2BAoOyWqYj4n1Ox8KiLabr%2BfRwjCPyDDvu4TDBjqkAZ%2Fgkjy6nBQEoUx6kYUGkiQThbBnnsEBwh3lCIbNy3uK4mQrBYFf7K6Yo53Gm7zZ6PdEhqUPlO25s90eIjsFuCdARgqt4KIcVWltHLiFR%2BHX0JaFQv6wYIVrCUh2Z5weTnaA3cGejGAYKgS6bHW3XSJFxjKTAD4YSzzMU0JF0wIY72WzFcuKbrYCCR9i3cvN0S4lgmYrbL82%2Bjnevj0qSGjtwZGq&X-Amz-Signature=659a7d5c742f41f39b89826c3a3cfd13ab18a2a4ebd305ed4d947acdaddb90c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGFPKB3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZJwE%2B4faqLHkLi2QLeoaAKEmQY%2FYFWxzRT6%2BnIxLM%2BQIhAMgP%2BOlRI%2BDNkWPxHf3t6ajGY1JDsZ9ACfela%2BKwp2AIKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fi%2FXnaCuEK4uhdxYq3ANAE3TEnS8Ba1shr8e0gPe3yeb2WbJ62zMLBAx0HJYCbHDVLEAmMf3NVE%2Fk6LGxh18pkPThdYwKDnDOE%2BD4s5pTzp%2BVKIS23UFCfF9jYZNAAhFvZiR6qIC0iVGLDYkLZR1DqSSzYe1VMJlNPtoKxGV9yzYJhgPkq3V9Z38wwUMCz%2F2EgPeTPqUYGisPVdWiTJZ8UVdH%2F2jIcctrIZxk%2Btj0lnKX%2FnffObiCC03hA1VWQz%2B8WsW2R1lvp9rBhS5yB9aetpz%2FM7O5Oq1TopB1fYD7zUeRpRy1iXKSsj7EecATUH8%2By%2F9g6lk9YAX5bxW9d6t%2BS3EoJIxiqiU78zPAcTbyKHgPPhheRUzg9pJYR7Iock1IWuBWw7xNImt1l3MUvoFJiOSXEBVzsSe2GeylcXA5pUOw34K%2FhUHPYpNpjipI0z%2BB23raV9HXmzSIjptOp%2BzVOSwcjkZLuRRr8tD%2Bifdcrk%2BPEH0DEPo5hWddcoiyRorxISitoPoY0XrfqCIlg099hIr0OmFFgqwOFn1Hnijdn%2FYpDx%2Fr%2F8beBZbq3B2ww7lTiW%2FHX11C%2BT7X950eQ5D%2B3KTmulS2sF8FQ2iOTaTqi59Hv2ez%2BAoOyWqYj4n1Ox8KiLabr%2BfRwjCPyDDvu4TDBjqkAZ%2Fgkjy6nBQEoUx6kYUGkiQThbBnnsEBwh3lCIbNy3uK4mQrBYFf7K6Yo53Gm7zZ6PdEhqUPlO25s90eIjsFuCdARgqt4KIcVWltHLiFR%2BHX0JaFQv6wYIVrCUh2Z5weTnaA3cGejGAYKgS6bHW3XSJFxjKTAD4YSzzMU0JF0wIY72WzFcuKbrYCCR9i3cvN0S4lgmYrbL82%2Bjnevj0qSGjtwZGq&X-Amz-Signature=3041c26be94c082961da37be8c7369e774f2b86d8e102a5f958bdd4791c55e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
