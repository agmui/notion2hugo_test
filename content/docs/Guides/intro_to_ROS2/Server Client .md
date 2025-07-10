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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XTJDOM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ4fiXIcwbDMfpEFf9ADgT5OYwgHmiOYXtPTpzfuU0xAiEAzy9Hx5yp5bWk3n97Bg5DjnrwMFgJJwarZYFOW5C2nS0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtngRrbx48Euay%2FxCrcAyPay99vr4%2B7JS70bhtLHxrvkd9dqLjJ2RE8llAWSP2i53QfAcMHm%2Fhf0TESGReXJJGNZZnbbVnZ5hzUE8JqU7l7UhgVP67NQeS8GNMKHP1QjlhnTxTckwksNm4CgtEIOxIt5rBdXeaP477hBKm96jB%2Fv5Enq%2BLzS3Y%2BVIliZsRvfFQnZ%2BeugcO1VULb3h71buOy7%2F%2BG%2FeKnGsbk2NCfRnNZdPl5Zv7qpPgtliQrZIFvVHg2%2F4ELfi6FruxPB6BoE6u1nkN5776usw%2BrzwZjg3e%2FlvrnbZO3CK3SgXQkW7xzz0MCZty7tYE80hog7jcXBCEgb7HUrUagsb9vTe%2FyCFBG8Pf42zcFFYpCEXqwxnN9dwfh%2FDE0qTLzjSZjlj6Hc10xVDzOtIR1QPOEuDFG8Fd3lfeXDq%2BNfDstyTKNHgvMck%2Bb%2BkNoAsGuwxioNqFYEvfexGizyLfn23XJGmrY7itYY9RAQ7AMvizeZtw30OZ6KCA9Jzmd27%2BYawiIVnHBeXptFHmgdFqCXOs%2BoFDJ%2BWJipRD3BcM38X2KSHQIuLET84318ot8hyjbQ7h9vrGeKMV%2BTo5nXkJFwo8BYe%2FvwBkUGTEppc3sHihpFDyyVeo7PDqWkPz59VRvlt6gMPyBvsMGOqUBORZuMToD6DM6W9CT0qgaK9c%2FuEzTaiyTKtjjB9Xpfx5djkRruqNiErVDj%2FycijLlrwfHEcBP56j3ECIBlHf12SsK8PnQQuwTMjFu75ENdb5wUJ56kA9FZMC9kQ6fS3P3%2FDw4AOMuRvdMaNCYpOzu8lIjXV%2F%2FWCGDeTC0rtaBVlgfC5gYPWYTIr251QQxiuVptPto0XobJMS3AvDdhsUCYtcezzvb&X-Amz-Signature=fd0ccfad98c5fd0cc616b31aeeb273c8906afc2570817b3dca194de1c6dce64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XTJDOM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ4fiXIcwbDMfpEFf9ADgT5OYwgHmiOYXtPTpzfuU0xAiEAzy9Hx5yp5bWk3n97Bg5DjnrwMFgJJwarZYFOW5C2nS0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtngRrbx48Euay%2FxCrcAyPay99vr4%2B7JS70bhtLHxrvkd9dqLjJ2RE8llAWSP2i53QfAcMHm%2Fhf0TESGReXJJGNZZnbbVnZ5hzUE8JqU7l7UhgVP67NQeS8GNMKHP1QjlhnTxTckwksNm4CgtEIOxIt5rBdXeaP477hBKm96jB%2Fv5Enq%2BLzS3Y%2BVIliZsRvfFQnZ%2BeugcO1VULb3h71buOy7%2F%2BG%2FeKnGsbk2NCfRnNZdPl5Zv7qpPgtliQrZIFvVHg2%2F4ELfi6FruxPB6BoE6u1nkN5776usw%2BrzwZjg3e%2FlvrnbZO3CK3SgXQkW7xzz0MCZty7tYE80hog7jcXBCEgb7HUrUagsb9vTe%2FyCFBG8Pf42zcFFYpCEXqwxnN9dwfh%2FDE0qTLzjSZjlj6Hc10xVDzOtIR1QPOEuDFG8Fd3lfeXDq%2BNfDstyTKNHgvMck%2Bb%2BkNoAsGuwxioNqFYEvfexGizyLfn23XJGmrY7itYY9RAQ7AMvizeZtw30OZ6KCA9Jzmd27%2BYawiIVnHBeXptFHmgdFqCXOs%2BoFDJ%2BWJipRD3BcM38X2KSHQIuLET84318ot8hyjbQ7h9vrGeKMV%2BTo5nXkJFwo8BYe%2FvwBkUGTEppc3sHihpFDyyVeo7PDqWkPz59VRvlt6gMPyBvsMGOqUBORZuMToD6DM6W9CT0qgaK9c%2FuEzTaiyTKtjjB9Xpfx5djkRruqNiErVDj%2FycijLlrwfHEcBP56j3ECIBlHf12SsK8PnQQuwTMjFu75ENdb5wUJ56kA9FZMC9kQ6fS3P3%2FDw4AOMuRvdMaNCYpOzu8lIjXV%2F%2FWCGDeTC0rtaBVlgfC5gYPWYTIr251QQxiuVptPto0XobJMS3AvDdhsUCYtcezzvb&X-Amz-Signature=9921df0572dcb42d41f2f5c01ebb3ceb0c86e2c26a32027b0ad52481bb250b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XTJDOM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ4fiXIcwbDMfpEFf9ADgT5OYwgHmiOYXtPTpzfuU0xAiEAzy9Hx5yp5bWk3n97Bg5DjnrwMFgJJwarZYFOW5C2nS0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtngRrbx48Euay%2FxCrcAyPay99vr4%2B7JS70bhtLHxrvkd9dqLjJ2RE8llAWSP2i53QfAcMHm%2Fhf0TESGReXJJGNZZnbbVnZ5hzUE8JqU7l7UhgVP67NQeS8GNMKHP1QjlhnTxTckwksNm4CgtEIOxIt5rBdXeaP477hBKm96jB%2Fv5Enq%2BLzS3Y%2BVIliZsRvfFQnZ%2BeugcO1VULb3h71buOy7%2F%2BG%2FeKnGsbk2NCfRnNZdPl5Zv7qpPgtliQrZIFvVHg2%2F4ELfi6FruxPB6BoE6u1nkN5776usw%2BrzwZjg3e%2FlvrnbZO3CK3SgXQkW7xzz0MCZty7tYE80hog7jcXBCEgb7HUrUagsb9vTe%2FyCFBG8Pf42zcFFYpCEXqwxnN9dwfh%2FDE0qTLzjSZjlj6Hc10xVDzOtIR1QPOEuDFG8Fd3lfeXDq%2BNfDstyTKNHgvMck%2Bb%2BkNoAsGuwxioNqFYEvfexGizyLfn23XJGmrY7itYY9RAQ7AMvizeZtw30OZ6KCA9Jzmd27%2BYawiIVnHBeXptFHmgdFqCXOs%2BoFDJ%2BWJipRD3BcM38X2KSHQIuLET84318ot8hyjbQ7h9vrGeKMV%2BTo5nXkJFwo8BYe%2FvwBkUGTEppc3sHihpFDyyVeo7PDqWkPz59VRvlt6gMPyBvsMGOqUBORZuMToD6DM6W9CT0qgaK9c%2FuEzTaiyTKtjjB9Xpfx5djkRruqNiErVDj%2FycijLlrwfHEcBP56j3ECIBlHf12SsK8PnQQuwTMjFu75ENdb5wUJ56kA9FZMC9kQ6fS3P3%2FDw4AOMuRvdMaNCYpOzu8lIjXV%2F%2FWCGDeTC0rtaBVlgfC5gYPWYTIr251QQxiuVptPto0XobJMS3AvDdhsUCYtcezzvb&X-Amz-Signature=7210e2132758499d27a64ebad2656808d78f4c5b3966ca2ea9c55c2f0c91bf80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XTJDOM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ4fiXIcwbDMfpEFf9ADgT5OYwgHmiOYXtPTpzfuU0xAiEAzy9Hx5yp5bWk3n97Bg5DjnrwMFgJJwarZYFOW5C2nS0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtngRrbx48Euay%2FxCrcAyPay99vr4%2B7JS70bhtLHxrvkd9dqLjJ2RE8llAWSP2i53QfAcMHm%2Fhf0TESGReXJJGNZZnbbVnZ5hzUE8JqU7l7UhgVP67NQeS8GNMKHP1QjlhnTxTckwksNm4CgtEIOxIt5rBdXeaP477hBKm96jB%2Fv5Enq%2BLzS3Y%2BVIliZsRvfFQnZ%2BeugcO1VULb3h71buOy7%2F%2BG%2FeKnGsbk2NCfRnNZdPl5Zv7qpPgtliQrZIFvVHg2%2F4ELfi6FruxPB6BoE6u1nkN5776usw%2BrzwZjg3e%2FlvrnbZO3CK3SgXQkW7xzz0MCZty7tYE80hog7jcXBCEgb7HUrUagsb9vTe%2FyCFBG8Pf42zcFFYpCEXqwxnN9dwfh%2FDE0qTLzjSZjlj6Hc10xVDzOtIR1QPOEuDFG8Fd3lfeXDq%2BNfDstyTKNHgvMck%2Bb%2BkNoAsGuwxioNqFYEvfexGizyLfn23XJGmrY7itYY9RAQ7AMvizeZtw30OZ6KCA9Jzmd27%2BYawiIVnHBeXptFHmgdFqCXOs%2BoFDJ%2BWJipRD3BcM38X2KSHQIuLET84318ot8hyjbQ7h9vrGeKMV%2BTo5nXkJFwo8BYe%2FvwBkUGTEppc3sHihpFDyyVeo7PDqWkPz59VRvlt6gMPyBvsMGOqUBORZuMToD6DM6W9CT0qgaK9c%2FuEzTaiyTKtjjB9Xpfx5djkRruqNiErVDj%2FycijLlrwfHEcBP56j3ECIBlHf12SsK8PnQQuwTMjFu75ENdb5wUJ56kA9FZMC9kQ6fS3P3%2FDw4AOMuRvdMaNCYpOzu8lIjXV%2F%2FWCGDeTC0rtaBVlgfC5gYPWYTIr251QQxiuVptPto0XobJMS3AvDdhsUCYtcezzvb&X-Amz-Signature=2be6b305026096feff7bf76941445562c42daa0332f84e8c9d3435ab4e1b2744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XTJDOM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ4fiXIcwbDMfpEFf9ADgT5OYwgHmiOYXtPTpzfuU0xAiEAzy9Hx5yp5bWk3n97Bg5DjnrwMFgJJwarZYFOW5C2nS0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtngRrbx48Euay%2FxCrcAyPay99vr4%2B7JS70bhtLHxrvkd9dqLjJ2RE8llAWSP2i53QfAcMHm%2Fhf0TESGReXJJGNZZnbbVnZ5hzUE8JqU7l7UhgVP67NQeS8GNMKHP1QjlhnTxTckwksNm4CgtEIOxIt5rBdXeaP477hBKm96jB%2Fv5Enq%2BLzS3Y%2BVIliZsRvfFQnZ%2BeugcO1VULb3h71buOy7%2F%2BG%2FeKnGsbk2NCfRnNZdPl5Zv7qpPgtliQrZIFvVHg2%2F4ELfi6FruxPB6BoE6u1nkN5776usw%2BrzwZjg3e%2FlvrnbZO3CK3SgXQkW7xzz0MCZty7tYE80hog7jcXBCEgb7HUrUagsb9vTe%2FyCFBG8Pf42zcFFYpCEXqwxnN9dwfh%2FDE0qTLzjSZjlj6Hc10xVDzOtIR1QPOEuDFG8Fd3lfeXDq%2BNfDstyTKNHgvMck%2Bb%2BkNoAsGuwxioNqFYEvfexGizyLfn23XJGmrY7itYY9RAQ7AMvizeZtw30OZ6KCA9Jzmd27%2BYawiIVnHBeXptFHmgdFqCXOs%2BoFDJ%2BWJipRD3BcM38X2KSHQIuLET84318ot8hyjbQ7h9vrGeKMV%2BTo5nXkJFwo8BYe%2FvwBkUGTEppc3sHihpFDyyVeo7PDqWkPz59VRvlt6gMPyBvsMGOqUBORZuMToD6DM6W9CT0qgaK9c%2FuEzTaiyTKtjjB9Xpfx5djkRruqNiErVDj%2FycijLlrwfHEcBP56j3ECIBlHf12SsK8PnQQuwTMjFu75ENdb5wUJ56kA9FZMC9kQ6fS3P3%2FDw4AOMuRvdMaNCYpOzu8lIjXV%2F%2FWCGDeTC0rtaBVlgfC5gYPWYTIr251QQxiuVptPto0XobJMS3AvDdhsUCYtcezzvb&X-Amz-Signature=edf3770482a62f1280a161ba1170bb2aa0151a8ee8c99eea7c44e02bb37c07fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
