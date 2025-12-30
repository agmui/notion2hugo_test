---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDACLJT%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfzH04Rt%2BORYFp4%2F3%2FUS1ZfFR9HQQMmSUeaeEMHWbpTAiEA5LscM0lZOqXOVOyKu3GYW0Yow4H1BZM53YhToJ9J9wUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7ZLqPXVYNIcEQdkSrcA9c1BDRaI1koZwbj7CsuqJR73vQ2ucZTSeHvhda3FIi9PBZT35l9FhY3lfNiAHOSOCX3DrRgDp99onwmMdLtOq%2F6foI2vhKrmBKx5ce9bvyR0pvYlK%2B4bh0LbF8xkmAxOSa1Ta25fTwb9WDAj%2FvA25KpAsQVFq3PoGGJsHWLCP5ywbbHCAD01qxO%2BLKF8GyD10aUdVLvBosUL0NCLAXwy%2Bg%2FZfuU1%2FkEoINcV9Pp8gL%2BdOyMNGTKJE2r%2BvQahZAPFAspxxInCD7ig%2BB946uOgyP6qqN0JKwYEdOy%2FMcoiAYL1qy0Zqlz5o6cDxjDBGoNChPNP%2F2%2BI9H3aEsD5oEywwgrBbFDyVOY6DRN%2BDbVf2JfzbczkyJ3EBWCrjq2CLfXAmYdRk%2BB9y1DuCj%2F4hvck1n%2B1njRYcgE%2FxOxyRZNgqdsogrfpAyItBt2%2B6mYaoRj8d%2FvsrzbyR7WyvdxEGArBl7iqcsq0i4QajhIUsJHHv8U%2B%2BUgCF1QgQb1mbyMYSg%2BB5lzWO6fAevKVVV51bYpyLfrq2rTSMRhYuWotD%2FYoovxXSxRFI8Jau15RxVkEZ4xDYgQhrKfUXqQijdtJqpyqddQiVlC5wnO3j%2BrhviZwdwj%2FN4C1v%2BXTuxTN85UMP3azMoGOqUBtb3cpk0K37P%2FXmY5VvV4G2Ct46I7pUAJduvjbxr1j%2Bo9k3%2Bk%2FuekLfoszwR5hXR9jgrWi%2B4BDyA%2BB1vNjHKH0rPXCiZX6IS1iNbXgAm5mVfgugll7USi32l89pNxPcUh36kzRdeA%2F%2FY7YItTARa9boopE1sXtvBbUeMfnZcyLjGxaTlC1EkwO7i5czpXNLczUdxOJZaBWEqeMWbQMlwj5ZgbAMwt&X-Amz-Signature=5c3991582575e4110a8a1fe8186636c56fe91a77f487dc2beeaa4a7e91924989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDACLJT%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfzH04Rt%2BORYFp4%2F3%2FUS1ZfFR9HQQMmSUeaeEMHWbpTAiEA5LscM0lZOqXOVOyKu3GYW0Yow4H1BZM53YhToJ9J9wUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7ZLqPXVYNIcEQdkSrcA9c1BDRaI1koZwbj7CsuqJR73vQ2ucZTSeHvhda3FIi9PBZT35l9FhY3lfNiAHOSOCX3DrRgDp99onwmMdLtOq%2F6foI2vhKrmBKx5ce9bvyR0pvYlK%2B4bh0LbF8xkmAxOSa1Ta25fTwb9WDAj%2FvA25KpAsQVFq3PoGGJsHWLCP5ywbbHCAD01qxO%2BLKF8GyD10aUdVLvBosUL0NCLAXwy%2Bg%2FZfuU1%2FkEoINcV9Pp8gL%2BdOyMNGTKJE2r%2BvQahZAPFAspxxInCD7ig%2BB946uOgyP6qqN0JKwYEdOy%2FMcoiAYL1qy0Zqlz5o6cDxjDBGoNChPNP%2F2%2BI9H3aEsD5oEywwgrBbFDyVOY6DRN%2BDbVf2JfzbczkyJ3EBWCrjq2CLfXAmYdRk%2BB9y1DuCj%2F4hvck1n%2B1njRYcgE%2FxOxyRZNgqdsogrfpAyItBt2%2B6mYaoRj8d%2FvsrzbyR7WyvdxEGArBl7iqcsq0i4QajhIUsJHHv8U%2B%2BUgCF1QgQb1mbyMYSg%2BB5lzWO6fAevKVVV51bYpyLfrq2rTSMRhYuWotD%2FYoovxXSxRFI8Jau15RxVkEZ4xDYgQhrKfUXqQijdtJqpyqddQiVlC5wnO3j%2BrhviZwdwj%2FN4C1v%2BXTuxTN85UMP3azMoGOqUBtb3cpk0K37P%2FXmY5VvV4G2Ct46I7pUAJduvjbxr1j%2Bo9k3%2Bk%2FuekLfoszwR5hXR9jgrWi%2B4BDyA%2BB1vNjHKH0rPXCiZX6IS1iNbXgAm5mVfgugll7USi32l89pNxPcUh36kzRdeA%2F%2FY7YItTARa9boopE1sXtvBbUeMfnZcyLjGxaTlC1EkwO7i5czpXNLczUdxOJZaBWEqeMWbQMlwj5ZgbAMwt&X-Amz-Signature=f463ac6b9321a20101303521559be0956f5cb4b0dc4d07a83042bf562530649d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDACLJT%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfzH04Rt%2BORYFp4%2F3%2FUS1ZfFR9HQQMmSUeaeEMHWbpTAiEA5LscM0lZOqXOVOyKu3GYW0Yow4H1BZM53YhToJ9J9wUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7ZLqPXVYNIcEQdkSrcA9c1BDRaI1koZwbj7CsuqJR73vQ2ucZTSeHvhda3FIi9PBZT35l9FhY3lfNiAHOSOCX3DrRgDp99onwmMdLtOq%2F6foI2vhKrmBKx5ce9bvyR0pvYlK%2B4bh0LbF8xkmAxOSa1Ta25fTwb9WDAj%2FvA25KpAsQVFq3PoGGJsHWLCP5ywbbHCAD01qxO%2BLKF8GyD10aUdVLvBosUL0NCLAXwy%2Bg%2FZfuU1%2FkEoINcV9Pp8gL%2BdOyMNGTKJE2r%2BvQahZAPFAspxxInCD7ig%2BB946uOgyP6qqN0JKwYEdOy%2FMcoiAYL1qy0Zqlz5o6cDxjDBGoNChPNP%2F2%2BI9H3aEsD5oEywwgrBbFDyVOY6DRN%2BDbVf2JfzbczkyJ3EBWCrjq2CLfXAmYdRk%2BB9y1DuCj%2F4hvck1n%2B1njRYcgE%2FxOxyRZNgqdsogrfpAyItBt2%2B6mYaoRj8d%2FvsrzbyR7WyvdxEGArBl7iqcsq0i4QajhIUsJHHv8U%2B%2BUgCF1QgQb1mbyMYSg%2BB5lzWO6fAevKVVV51bYpyLfrq2rTSMRhYuWotD%2FYoovxXSxRFI8Jau15RxVkEZ4xDYgQhrKfUXqQijdtJqpyqddQiVlC5wnO3j%2BrhviZwdwj%2FN4C1v%2BXTuxTN85UMP3azMoGOqUBtb3cpk0K37P%2FXmY5VvV4G2Ct46I7pUAJduvjbxr1j%2Bo9k3%2Bk%2FuekLfoszwR5hXR9jgrWi%2B4BDyA%2BB1vNjHKH0rPXCiZX6IS1iNbXgAm5mVfgugll7USi32l89pNxPcUh36kzRdeA%2F%2FY7YItTARa9boopE1sXtvBbUeMfnZcyLjGxaTlC1EkwO7i5czpXNLczUdxOJZaBWEqeMWbQMlwj5ZgbAMwt&X-Amz-Signature=1eb42afcf78148820d625e84a49f2d7db619e84b6eeb79564e2afcbe35a11818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDACLJT%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfzH04Rt%2BORYFp4%2F3%2FUS1ZfFR9HQQMmSUeaeEMHWbpTAiEA5LscM0lZOqXOVOyKu3GYW0Yow4H1BZM53YhToJ9J9wUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7ZLqPXVYNIcEQdkSrcA9c1BDRaI1koZwbj7CsuqJR73vQ2ucZTSeHvhda3FIi9PBZT35l9FhY3lfNiAHOSOCX3DrRgDp99onwmMdLtOq%2F6foI2vhKrmBKx5ce9bvyR0pvYlK%2B4bh0LbF8xkmAxOSa1Ta25fTwb9WDAj%2FvA25KpAsQVFq3PoGGJsHWLCP5ywbbHCAD01qxO%2BLKF8GyD10aUdVLvBosUL0NCLAXwy%2Bg%2FZfuU1%2FkEoINcV9Pp8gL%2BdOyMNGTKJE2r%2BvQahZAPFAspxxInCD7ig%2BB946uOgyP6qqN0JKwYEdOy%2FMcoiAYL1qy0Zqlz5o6cDxjDBGoNChPNP%2F2%2BI9H3aEsD5oEywwgrBbFDyVOY6DRN%2BDbVf2JfzbczkyJ3EBWCrjq2CLfXAmYdRk%2BB9y1DuCj%2F4hvck1n%2B1njRYcgE%2FxOxyRZNgqdsogrfpAyItBt2%2B6mYaoRj8d%2FvsrzbyR7WyvdxEGArBl7iqcsq0i4QajhIUsJHHv8U%2B%2BUgCF1QgQb1mbyMYSg%2BB5lzWO6fAevKVVV51bYpyLfrq2rTSMRhYuWotD%2FYoovxXSxRFI8Jau15RxVkEZ4xDYgQhrKfUXqQijdtJqpyqddQiVlC5wnO3j%2BrhviZwdwj%2FN4C1v%2BXTuxTN85UMP3azMoGOqUBtb3cpk0K37P%2FXmY5VvV4G2Ct46I7pUAJduvjbxr1j%2Bo9k3%2Bk%2FuekLfoszwR5hXR9jgrWi%2B4BDyA%2BB1vNjHKH0rPXCiZX6IS1iNbXgAm5mVfgugll7USi32l89pNxPcUh36kzRdeA%2F%2FY7YItTARa9boopE1sXtvBbUeMfnZcyLjGxaTlC1EkwO7i5czpXNLczUdxOJZaBWEqeMWbQMlwj5ZgbAMwt&X-Amz-Signature=16376a4e6cfb292e6d678f7c11572c0d010de19ab545fe7949f005971a1a7585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDACLJT%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfzH04Rt%2BORYFp4%2F3%2FUS1ZfFR9HQQMmSUeaeEMHWbpTAiEA5LscM0lZOqXOVOyKu3GYW0Yow4H1BZM53YhToJ9J9wUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7ZLqPXVYNIcEQdkSrcA9c1BDRaI1koZwbj7CsuqJR73vQ2ucZTSeHvhda3FIi9PBZT35l9FhY3lfNiAHOSOCX3DrRgDp99onwmMdLtOq%2F6foI2vhKrmBKx5ce9bvyR0pvYlK%2B4bh0LbF8xkmAxOSa1Ta25fTwb9WDAj%2FvA25KpAsQVFq3PoGGJsHWLCP5ywbbHCAD01qxO%2BLKF8GyD10aUdVLvBosUL0NCLAXwy%2Bg%2FZfuU1%2FkEoINcV9Pp8gL%2BdOyMNGTKJE2r%2BvQahZAPFAspxxInCD7ig%2BB946uOgyP6qqN0JKwYEdOy%2FMcoiAYL1qy0Zqlz5o6cDxjDBGoNChPNP%2F2%2BI9H3aEsD5oEywwgrBbFDyVOY6DRN%2BDbVf2JfzbczkyJ3EBWCrjq2CLfXAmYdRk%2BB9y1DuCj%2F4hvck1n%2B1njRYcgE%2FxOxyRZNgqdsogrfpAyItBt2%2B6mYaoRj8d%2FvsrzbyR7WyvdxEGArBl7iqcsq0i4QajhIUsJHHv8U%2B%2BUgCF1QgQb1mbyMYSg%2BB5lzWO6fAevKVVV51bYpyLfrq2rTSMRhYuWotD%2FYoovxXSxRFI8Jau15RxVkEZ4xDYgQhrKfUXqQijdtJqpyqddQiVlC5wnO3j%2BrhviZwdwj%2FN4C1v%2BXTuxTN85UMP3azMoGOqUBtb3cpk0K37P%2FXmY5VvV4G2Ct46I7pUAJduvjbxr1j%2Bo9k3%2Bk%2FuekLfoszwR5hXR9jgrWi%2B4BDyA%2BB1vNjHKH0rPXCiZX6IS1iNbXgAm5mVfgugll7USi32l89pNxPcUh36kzRdeA%2F%2FY7YItTARa9boopE1sXtvBbUeMfnZcyLjGxaTlC1EkwO7i5czpXNLczUdxOJZaBWEqeMWbQMlwj5ZgbAMwt&X-Amz-Signature=1a96e8778f49d7e7737a79633eade8498498f0acb7efb3b0bd13d9e096807cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
