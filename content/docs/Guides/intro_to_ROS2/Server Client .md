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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QTKWEQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7IBmgeHeAUHTJetMg%2FvuoHsOAxhEtbkoWTCtD84El8gIhAK3lDPIiZVeXUbGQyPzBE%2BAGJwXf%2F7ikhes1U048j2ncKv8DCC4QABoMNjM3NDIzMTgzODA1IgwATioTj%2Bs4Ll8obY0q3AOi36zjVCFvxleQ7WxKDt0VjZ7LOsVVfrJPCU17%2F7RZ51BboNM9wNfbxg9H4q9PCJRzEdka%2Fp0uchaHPwQWk4YqekZEFP64jTA%2BKZNwbAhxVyftyxmpHc4jFgNSx%2BFfGfrp0dLtvqTZSnYgy0QOahwPUhFCulZdcizzH7w6wIMKhenR5MjqTDtFLP%2B5zqRZr5XmHrc4bsw4ZlsGqKXyHH7xhCfLAPrUU6r7FhXUftTeVKhxreC5N89Kex36%2B1%2FUh213CHjI3hT35Xzykp5YmUNL0pf7hP%2FKD7RuejKLqslytoXCb%2BXJmJGmNdHyQemGWDKZAxnsZSEUiiFV%2B1B2BCUrB4yPx67YVJ7%2BL7j9gOf1Y6ruRxdw2d4IIaNremhJQutCIV29vwjQ4KbYEESIMo%2F0bS4VI%2Bhx%2BBYbv%2BuoTQ%2Fil3NA1ma12E4IQVrCXM%2BcR5wox2SsXgBsYO9e1QzV9AxcfuY7dwdLalHB6x3324oU7vgM8bnaQRVBpK1iXdDInNGOOT%2FLixk5Z%2B3CQ2PqHfudoU%2FDK%2FV9yU2a49wf3kcWpnJNRuuHF8IAF32wVLo3YhiKTqsmtDVm5%2Bps0Uyp6RQVPCCC822fUKFbRDz4bfj5mUnpIkxn6i4O254yzDCJ1%2FG9BjqkAcl1EZXqpfNIe1rjJdztNbW0YxH%2BINeG4Clx9gmCgRDV9wbXd9bQZCwr35LzGaL7HoksAZrwb%2B8LLTWN7wg2EMX2zE4wGzjnnnvv38cfYSyOJPQ0P1BlYUESiCXIaF6seXBIoLP540tGul6M8eunvglYOHTr8OQWSOqm5Tu0ix83AdPzlk6J0Vm85glXWlp5NkRD3rc0fKIt73xIK5z04R9Hm9KI&X-Amz-Signature=c426f66022e1ed9cec36bf418d83aac8912b71474d8f4903d3261e4378c0ee67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QTKWEQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7IBmgeHeAUHTJetMg%2FvuoHsOAxhEtbkoWTCtD84El8gIhAK3lDPIiZVeXUbGQyPzBE%2BAGJwXf%2F7ikhes1U048j2ncKv8DCC4QABoMNjM3NDIzMTgzODA1IgwATioTj%2Bs4Ll8obY0q3AOi36zjVCFvxleQ7WxKDt0VjZ7LOsVVfrJPCU17%2F7RZ51BboNM9wNfbxg9H4q9PCJRzEdka%2Fp0uchaHPwQWk4YqekZEFP64jTA%2BKZNwbAhxVyftyxmpHc4jFgNSx%2BFfGfrp0dLtvqTZSnYgy0QOahwPUhFCulZdcizzH7w6wIMKhenR5MjqTDtFLP%2B5zqRZr5XmHrc4bsw4ZlsGqKXyHH7xhCfLAPrUU6r7FhXUftTeVKhxreC5N89Kex36%2B1%2FUh213CHjI3hT35Xzykp5YmUNL0pf7hP%2FKD7RuejKLqslytoXCb%2BXJmJGmNdHyQemGWDKZAxnsZSEUiiFV%2B1B2BCUrB4yPx67YVJ7%2BL7j9gOf1Y6ruRxdw2d4IIaNremhJQutCIV29vwjQ4KbYEESIMo%2F0bS4VI%2Bhx%2BBYbv%2BuoTQ%2Fil3NA1ma12E4IQVrCXM%2BcR5wox2SsXgBsYO9e1QzV9AxcfuY7dwdLalHB6x3324oU7vgM8bnaQRVBpK1iXdDInNGOOT%2FLixk5Z%2B3CQ2PqHfudoU%2FDK%2FV9yU2a49wf3kcWpnJNRuuHF8IAF32wVLo3YhiKTqsmtDVm5%2Bps0Uyp6RQVPCCC822fUKFbRDz4bfj5mUnpIkxn6i4O254yzDCJ1%2FG9BjqkAcl1EZXqpfNIe1rjJdztNbW0YxH%2BINeG4Clx9gmCgRDV9wbXd9bQZCwr35LzGaL7HoksAZrwb%2B8LLTWN7wg2EMX2zE4wGzjnnnvv38cfYSyOJPQ0P1BlYUESiCXIaF6seXBIoLP540tGul6M8eunvglYOHTr8OQWSOqm5Tu0ix83AdPzlk6J0Vm85glXWlp5NkRD3rc0fKIt73xIK5z04R9Hm9KI&X-Amz-Signature=243506703fa9ed18a729e603823999b89ad9c3d2253ad811c93ed7be470aa173&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QTKWEQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7IBmgeHeAUHTJetMg%2FvuoHsOAxhEtbkoWTCtD84El8gIhAK3lDPIiZVeXUbGQyPzBE%2BAGJwXf%2F7ikhes1U048j2ncKv8DCC4QABoMNjM3NDIzMTgzODA1IgwATioTj%2Bs4Ll8obY0q3AOi36zjVCFvxleQ7WxKDt0VjZ7LOsVVfrJPCU17%2F7RZ51BboNM9wNfbxg9H4q9PCJRzEdka%2Fp0uchaHPwQWk4YqekZEFP64jTA%2BKZNwbAhxVyftyxmpHc4jFgNSx%2BFfGfrp0dLtvqTZSnYgy0QOahwPUhFCulZdcizzH7w6wIMKhenR5MjqTDtFLP%2B5zqRZr5XmHrc4bsw4ZlsGqKXyHH7xhCfLAPrUU6r7FhXUftTeVKhxreC5N89Kex36%2B1%2FUh213CHjI3hT35Xzykp5YmUNL0pf7hP%2FKD7RuejKLqslytoXCb%2BXJmJGmNdHyQemGWDKZAxnsZSEUiiFV%2B1B2BCUrB4yPx67YVJ7%2BL7j9gOf1Y6ruRxdw2d4IIaNremhJQutCIV29vwjQ4KbYEESIMo%2F0bS4VI%2Bhx%2BBYbv%2BuoTQ%2Fil3NA1ma12E4IQVrCXM%2BcR5wox2SsXgBsYO9e1QzV9AxcfuY7dwdLalHB6x3324oU7vgM8bnaQRVBpK1iXdDInNGOOT%2FLixk5Z%2B3CQ2PqHfudoU%2FDK%2FV9yU2a49wf3kcWpnJNRuuHF8IAF32wVLo3YhiKTqsmtDVm5%2Bps0Uyp6RQVPCCC822fUKFbRDz4bfj5mUnpIkxn6i4O254yzDCJ1%2FG9BjqkAcl1EZXqpfNIe1rjJdztNbW0YxH%2BINeG4Clx9gmCgRDV9wbXd9bQZCwr35LzGaL7HoksAZrwb%2B8LLTWN7wg2EMX2zE4wGzjnnnvv38cfYSyOJPQ0P1BlYUESiCXIaF6seXBIoLP540tGul6M8eunvglYOHTr8OQWSOqm5Tu0ix83AdPzlk6J0Vm85glXWlp5NkRD3rc0fKIt73xIK5z04R9Hm9KI&X-Amz-Signature=62877eb8c47320e43e80ea82f044007411427037c9da5c1c05c4cd412adb2659&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QTKWEQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7IBmgeHeAUHTJetMg%2FvuoHsOAxhEtbkoWTCtD84El8gIhAK3lDPIiZVeXUbGQyPzBE%2BAGJwXf%2F7ikhes1U048j2ncKv8DCC4QABoMNjM3NDIzMTgzODA1IgwATioTj%2Bs4Ll8obY0q3AOi36zjVCFvxleQ7WxKDt0VjZ7LOsVVfrJPCU17%2F7RZ51BboNM9wNfbxg9H4q9PCJRzEdka%2Fp0uchaHPwQWk4YqekZEFP64jTA%2BKZNwbAhxVyftyxmpHc4jFgNSx%2BFfGfrp0dLtvqTZSnYgy0QOahwPUhFCulZdcizzH7w6wIMKhenR5MjqTDtFLP%2B5zqRZr5XmHrc4bsw4ZlsGqKXyHH7xhCfLAPrUU6r7FhXUftTeVKhxreC5N89Kex36%2B1%2FUh213CHjI3hT35Xzykp5YmUNL0pf7hP%2FKD7RuejKLqslytoXCb%2BXJmJGmNdHyQemGWDKZAxnsZSEUiiFV%2B1B2BCUrB4yPx67YVJ7%2BL7j9gOf1Y6ruRxdw2d4IIaNremhJQutCIV29vwjQ4KbYEESIMo%2F0bS4VI%2Bhx%2BBYbv%2BuoTQ%2Fil3NA1ma12E4IQVrCXM%2BcR5wox2SsXgBsYO9e1QzV9AxcfuY7dwdLalHB6x3324oU7vgM8bnaQRVBpK1iXdDInNGOOT%2FLixk5Z%2B3CQ2PqHfudoU%2FDK%2FV9yU2a49wf3kcWpnJNRuuHF8IAF32wVLo3YhiKTqsmtDVm5%2Bps0Uyp6RQVPCCC822fUKFbRDz4bfj5mUnpIkxn6i4O254yzDCJ1%2FG9BjqkAcl1EZXqpfNIe1rjJdztNbW0YxH%2BINeG4Clx9gmCgRDV9wbXd9bQZCwr35LzGaL7HoksAZrwb%2B8LLTWN7wg2EMX2zE4wGzjnnnvv38cfYSyOJPQ0P1BlYUESiCXIaF6seXBIoLP540tGul6M8eunvglYOHTr8OQWSOqm5Tu0ix83AdPzlk6J0Vm85glXWlp5NkRD3rc0fKIt73xIK5z04R9Hm9KI&X-Amz-Signature=e92f3cc037a997aebb69bc6ad6e8b147cbcf938d157dbdb531c12be22a4bccb7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QTKWEQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7IBmgeHeAUHTJetMg%2FvuoHsOAxhEtbkoWTCtD84El8gIhAK3lDPIiZVeXUbGQyPzBE%2BAGJwXf%2F7ikhes1U048j2ncKv8DCC4QABoMNjM3NDIzMTgzODA1IgwATioTj%2Bs4Ll8obY0q3AOi36zjVCFvxleQ7WxKDt0VjZ7LOsVVfrJPCU17%2F7RZ51BboNM9wNfbxg9H4q9PCJRzEdka%2Fp0uchaHPwQWk4YqekZEFP64jTA%2BKZNwbAhxVyftyxmpHc4jFgNSx%2BFfGfrp0dLtvqTZSnYgy0QOahwPUhFCulZdcizzH7w6wIMKhenR5MjqTDtFLP%2B5zqRZr5XmHrc4bsw4ZlsGqKXyHH7xhCfLAPrUU6r7FhXUftTeVKhxreC5N89Kex36%2B1%2FUh213CHjI3hT35Xzykp5YmUNL0pf7hP%2FKD7RuejKLqslytoXCb%2BXJmJGmNdHyQemGWDKZAxnsZSEUiiFV%2B1B2BCUrB4yPx67YVJ7%2BL7j9gOf1Y6ruRxdw2d4IIaNremhJQutCIV29vwjQ4KbYEESIMo%2F0bS4VI%2Bhx%2BBYbv%2BuoTQ%2Fil3NA1ma12E4IQVrCXM%2BcR5wox2SsXgBsYO9e1QzV9AxcfuY7dwdLalHB6x3324oU7vgM8bnaQRVBpK1iXdDInNGOOT%2FLixk5Z%2B3CQ2PqHfudoU%2FDK%2FV9yU2a49wf3kcWpnJNRuuHF8IAF32wVLo3YhiKTqsmtDVm5%2Bps0Uyp6RQVPCCC822fUKFbRDz4bfj5mUnpIkxn6i4O254yzDCJ1%2FG9BjqkAcl1EZXqpfNIe1rjJdztNbW0YxH%2BINeG4Clx9gmCgRDV9wbXd9bQZCwr35LzGaL7HoksAZrwb%2B8LLTWN7wg2EMX2zE4wGzjnnnvv38cfYSyOJPQ0P1BlYUESiCXIaF6seXBIoLP540tGul6M8eunvglYOHTr8OQWSOqm5Tu0ix83AdPzlk6J0Vm85glXWlp5NkRD3rc0fKIt73xIK5z04R9Hm9KI&X-Amz-Signature=36f94c4af3b4422dccad0db3b5d5aae85c4387b4c0d345ab131a6605cc5d23cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
