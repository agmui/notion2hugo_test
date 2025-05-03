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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAVQAWQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIB0uIqjrY6XxCLTOJgI4Kk5dD6hsOGNZhesDV%2FJu1vZjAiEAt5fj7WlEn1Q0VWAFJd34WjYhSfvk7p9IDCM4Chrt3zIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa%2FmkPEc3A99IMDdyrcA8bXPNHk0TBpU3JmW0GHzMsF0JyAjphYLLZeYbTulSdFleUd9caaIhhOWGgi67NaY%2FxH6njCyhst7dYG7ywnIME4raH%2FwfiB958mAPq0WoZU632vfb%2F8ljvKGnrEZURMlLNVgSTvHX41o8wRp2P%2BzOjzurf%2Fiqt9zyGBSdfrfv74ElMuF3xzf8fva%2B2TdaW4duXKK7OVkr2vA5eMWwNYECeu2ZS1DNMpZFunx1IxC42Siw%2FSpZfF66EGMoxX11C96vbpDpl9LaTUjbvzQfmS%2FFNUHwz9S3lvKEu5e2b4YjkFes3hGwXmvT%2FllIeT6qX1na2YaFFKuVfXGXceNprBcMeScAxgcs3RUzHsO9QLeQIa89PW9LQCvv2txsEX2WzZPQ5DFOiCSdE5mzhBZyTbXGN290youwAo3HXJfisbJ%2B4NhvmO9oTvKbRJgkzHMJZof%2B5LwT7PUelcslTsJh7lnQo7Sy3iG5nuKoBfLHPKNsyj6JK0XFvGI3zwR8cS%2FvHG3%2BXhfOScuD%2FKq2qmEN1I2cn2J7v%2FZbooLSP%2FGkKje00ocOdR2qk9ub4D%2BGhz02e3McVCc3xioH6SQpp9K6VXYX%2FnQxjVIk5YLPqIzDb9fPGUVNEeA9sA8qlkNppkMIu%2F1cAGOqUBSUXnlnGNLgCkVt%2BNo6EG0TUgbLDFQyoOVcbgKF7X%2BlP19tRui99tVo0YICfiHSbvq%2FiJzVmo4FnZrLBQKM2i4lDnghKRhKr755wuSXhEAhS3OCBPUDxPZ1qzxwGl6XMtIkHr65X9lgAx9CVhDM2x7VMuIYSV%2FmaMo5h67uHPsrVTWfElmbXlN4bG012cZfhi%2FHMuKQxpSS9SwHhnvFHsjx8u0bcs&X-Amz-Signature=5b6eed7add9e8711f41d3e4956be91f9ac8e15458f95c95240fe8ba37ec82562&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAVQAWQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIB0uIqjrY6XxCLTOJgI4Kk5dD6hsOGNZhesDV%2FJu1vZjAiEAt5fj7WlEn1Q0VWAFJd34WjYhSfvk7p9IDCM4Chrt3zIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa%2FmkPEc3A99IMDdyrcA8bXPNHk0TBpU3JmW0GHzMsF0JyAjphYLLZeYbTulSdFleUd9caaIhhOWGgi67NaY%2FxH6njCyhst7dYG7ywnIME4raH%2FwfiB958mAPq0WoZU632vfb%2F8ljvKGnrEZURMlLNVgSTvHX41o8wRp2P%2BzOjzurf%2Fiqt9zyGBSdfrfv74ElMuF3xzf8fva%2B2TdaW4duXKK7OVkr2vA5eMWwNYECeu2ZS1DNMpZFunx1IxC42Siw%2FSpZfF66EGMoxX11C96vbpDpl9LaTUjbvzQfmS%2FFNUHwz9S3lvKEu5e2b4YjkFes3hGwXmvT%2FllIeT6qX1na2YaFFKuVfXGXceNprBcMeScAxgcs3RUzHsO9QLeQIa89PW9LQCvv2txsEX2WzZPQ5DFOiCSdE5mzhBZyTbXGN290youwAo3HXJfisbJ%2B4NhvmO9oTvKbRJgkzHMJZof%2B5LwT7PUelcslTsJh7lnQo7Sy3iG5nuKoBfLHPKNsyj6JK0XFvGI3zwR8cS%2FvHG3%2BXhfOScuD%2FKq2qmEN1I2cn2J7v%2FZbooLSP%2FGkKje00ocOdR2qk9ub4D%2BGhz02e3McVCc3xioH6SQpp9K6VXYX%2FnQxjVIk5YLPqIzDb9fPGUVNEeA9sA8qlkNppkMIu%2F1cAGOqUBSUXnlnGNLgCkVt%2BNo6EG0TUgbLDFQyoOVcbgKF7X%2BlP19tRui99tVo0YICfiHSbvq%2FiJzVmo4FnZrLBQKM2i4lDnghKRhKr755wuSXhEAhS3OCBPUDxPZ1qzxwGl6XMtIkHr65X9lgAx9CVhDM2x7VMuIYSV%2FmaMo5h67uHPsrVTWfElmbXlN4bG012cZfhi%2FHMuKQxpSS9SwHhnvFHsjx8u0bcs&X-Amz-Signature=f5e4ddd78fbe88dfef10443bcc27e7465dfa2ef7393b9258d659acbfe5a1513e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAVQAWQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIB0uIqjrY6XxCLTOJgI4Kk5dD6hsOGNZhesDV%2FJu1vZjAiEAt5fj7WlEn1Q0VWAFJd34WjYhSfvk7p9IDCM4Chrt3zIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa%2FmkPEc3A99IMDdyrcA8bXPNHk0TBpU3JmW0GHzMsF0JyAjphYLLZeYbTulSdFleUd9caaIhhOWGgi67NaY%2FxH6njCyhst7dYG7ywnIME4raH%2FwfiB958mAPq0WoZU632vfb%2F8ljvKGnrEZURMlLNVgSTvHX41o8wRp2P%2BzOjzurf%2Fiqt9zyGBSdfrfv74ElMuF3xzf8fva%2B2TdaW4duXKK7OVkr2vA5eMWwNYECeu2ZS1DNMpZFunx1IxC42Siw%2FSpZfF66EGMoxX11C96vbpDpl9LaTUjbvzQfmS%2FFNUHwz9S3lvKEu5e2b4YjkFes3hGwXmvT%2FllIeT6qX1na2YaFFKuVfXGXceNprBcMeScAxgcs3RUzHsO9QLeQIa89PW9LQCvv2txsEX2WzZPQ5DFOiCSdE5mzhBZyTbXGN290youwAo3HXJfisbJ%2B4NhvmO9oTvKbRJgkzHMJZof%2B5LwT7PUelcslTsJh7lnQo7Sy3iG5nuKoBfLHPKNsyj6JK0XFvGI3zwR8cS%2FvHG3%2BXhfOScuD%2FKq2qmEN1I2cn2J7v%2FZbooLSP%2FGkKje00ocOdR2qk9ub4D%2BGhz02e3McVCc3xioH6SQpp9K6VXYX%2FnQxjVIk5YLPqIzDb9fPGUVNEeA9sA8qlkNppkMIu%2F1cAGOqUBSUXnlnGNLgCkVt%2BNo6EG0TUgbLDFQyoOVcbgKF7X%2BlP19tRui99tVo0YICfiHSbvq%2FiJzVmo4FnZrLBQKM2i4lDnghKRhKr755wuSXhEAhS3OCBPUDxPZ1qzxwGl6XMtIkHr65X9lgAx9CVhDM2x7VMuIYSV%2FmaMo5h67uHPsrVTWfElmbXlN4bG012cZfhi%2FHMuKQxpSS9SwHhnvFHsjx8u0bcs&X-Amz-Signature=7ade1f63c970a80fe5b99c53363817b159d5e1ee52e62fbe0fafbf6a8c88e67b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAVQAWQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIB0uIqjrY6XxCLTOJgI4Kk5dD6hsOGNZhesDV%2FJu1vZjAiEAt5fj7WlEn1Q0VWAFJd34WjYhSfvk7p9IDCM4Chrt3zIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa%2FmkPEc3A99IMDdyrcA8bXPNHk0TBpU3JmW0GHzMsF0JyAjphYLLZeYbTulSdFleUd9caaIhhOWGgi67NaY%2FxH6njCyhst7dYG7ywnIME4raH%2FwfiB958mAPq0WoZU632vfb%2F8ljvKGnrEZURMlLNVgSTvHX41o8wRp2P%2BzOjzurf%2Fiqt9zyGBSdfrfv74ElMuF3xzf8fva%2B2TdaW4duXKK7OVkr2vA5eMWwNYECeu2ZS1DNMpZFunx1IxC42Siw%2FSpZfF66EGMoxX11C96vbpDpl9LaTUjbvzQfmS%2FFNUHwz9S3lvKEu5e2b4YjkFes3hGwXmvT%2FllIeT6qX1na2YaFFKuVfXGXceNprBcMeScAxgcs3RUzHsO9QLeQIa89PW9LQCvv2txsEX2WzZPQ5DFOiCSdE5mzhBZyTbXGN290youwAo3HXJfisbJ%2B4NhvmO9oTvKbRJgkzHMJZof%2B5LwT7PUelcslTsJh7lnQo7Sy3iG5nuKoBfLHPKNsyj6JK0XFvGI3zwR8cS%2FvHG3%2BXhfOScuD%2FKq2qmEN1I2cn2J7v%2FZbooLSP%2FGkKje00ocOdR2qk9ub4D%2BGhz02e3McVCc3xioH6SQpp9K6VXYX%2FnQxjVIk5YLPqIzDb9fPGUVNEeA9sA8qlkNppkMIu%2F1cAGOqUBSUXnlnGNLgCkVt%2BNo6EG0TUgbLDFQyoOVcbgKF7X%2BlP19tRui99tVo0YICfiHSbvq%2FiJzVmo4FnZrLBQKM2i4lDnghKRhKr755wuSXhEAhS3OCBPUDxPZ1qzxwGl6XMtIkHr65X9lgAx9CVhDM2x7VMuIYSV%2FmaMo5h67uHPsrVTWfElmbXlN4bG012cZfhi%2FHMuKQxpSS9SwHhnvFHsjx8u0bcs&X-Amz-Signature=66416fef76de2cf27e8ba8c396e9f7041915944f2af70604b2518464a0a90416&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAVQAWQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIB0uIqjrY6XxCLTOJgI4Kk5dD6hsOGNZhesDV%2FJu1vZjAiEAt5fj7WlEn1Q0VWAFJd34WjYhSfvk7p9IDCM4Chrt3zIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa%2FmkPEc3A99IMDdyrcA8bXPNHk0TBpU3JmW0GHzMsF0JyAjphYLLZeYbTulSdFleUd9caaIhhOWGgi67NaY%2FxH6njCyhst7dYG7ywnIME4raH%2FwfiB958mAPq0WoZU632vfb%2F8ljvKGnrEZURMlLNVgSTvHX41o8wRp2P%2BzOjzurf%2Fiqt9zyGBSdfrfv74ElMuF3xzf8fva%2B2TdaW4duXKK7OVkr2vA5eMWwNYECeu2ZS1DNMpZFunx1IxC42Siw%2FSpZfF66EGMoxX11C96vbpDpl9LaTUjbvzQfmS%2FFNUHwz9S3lvKEu5e2b4YjkFes3hGwXmvT%2FllIeT6qX1na2YaFFKuVfXGXceNprBcMeScAxgcs3RUzHsO9QLeQIa89PW9LQCvv2txsEX2WzZPQ5DFOiCSdE5mzhBZyTbXGN290youwAo3HXJfisbJ%2B4NhvmO9oTvKbRJgkzHMJZof%2B5LwT7PUelcslTsJh7lnQo7Sy3iG5nuKoBfLHPKNsyj6JK0XFvGI3zwR8cS%2FvHG3%2BXhfOScuD%2FKq2qmEN1I2cn2J7v%2FZbooLSP%2FGkKje00ocOdR2qk9ub4D%2BGhz02e3McVCc3xioH6SQpp9K6VXYX%2FnQxjVIk5YLPqIzDb9fPGUVNEeA9sA8qlkNppkMIu%2F1cAGOqUBSUXnlnGNLgCkVt%2BNo6EG0TUgbLDFQyoOVcbgKF7X%2BlP19tRui99tVo0YICfiHSbvq%2FiJzVmo4FnZrLBQKM2i4lDnghKRhKr755wuSXhEAhS3OCBPUDxPZ1qzxwGl6XMtIkHr65X9lgAx9CVhDM2x7VMuIYSV%2FmaMo5h67uHPsrVTWfElmbXlN4bG012cZfhi%2FHMuKQxpSS9SwHhnvFHsjx8u0bcs&X-Amz-Signature=b340212e0ac4f8456dd0c1a207e1f4067724dd5e062b7b1ecb0172a54ac55b59&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
