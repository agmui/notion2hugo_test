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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B4UFCPV%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsJLiCmRk06x8Dz79R%2F9vdMe5%2B2NOEHFXk%2BW%2FtblviCgIhAK9kaAghWcrZ8ZFjXLfJp11PiXz8V2f1f5t7oWowaWpNKv8DCBoQABoMNjM3NDIzMTgzODA1IgwiEk04Nf49ViJ175Mq3ANPhJsRw3wSwQc%2BBOpBDqa96hwnmKsOIsxlrEXf%2BmvbOmUluLZVY8jNhfOB4odoymLEpzl7R5ZYnJv88Dh0z4jpmONsD%2BQuyY8t0nmRwGAbe0VwYddPIo8Metlnh1L%2BA5JSP3tnVvLt6W89U%2BLoAaRoZ6llAZUdIYlkMQzjRdgc6a4Ly%2BpcH2mTFjPXpBMJu2aCV%2BKZWbqN6srH5Brbh%2F7ADpVBx6l4%2BcBfYE91lbTnO7gkp7I2vU8nTKJQeC0vP5HSQySWHhm%2Bj%2F2SDsOudjycYrlgreUsNyHWqrgf5SUexIk%2BPudUoBrEmSt15MMMqhtOTe0ozcEkqCjbIkHh51nkL84yqM3Ss4plqKSLnAkQc8JdH0yCaezHqSTcPzxkZtS7mrnFwz%2BS%2Fjzbj%2FaLH9IL8sIT0x33g7ZbVncAQbZ1gePiVNN7tjk0ma202Moi9arnIW6hF6M5nxi78k9qgu25qnRkZg8WPzJEksUPO9qUkGbg2kzi7yKwbgZIpJSxuZqUfFbZoZplUoeiNJ7nxXhUYNCrYQQdYHNLsElJM6edqFQbO%2By2bQPComt8idO%2BfYQj2JMK922Z0UGPW7aK64F%2BEs1b7l%2BRohKMf%2FGv23UTPFgqT00qFYtmw4r%2FJjD4g6K%2BBjqkAQnktTznrTW52NfaTnlXkuv8d1Tbj%2BF0n%2FOBiexWQUp9nT%2BgXhmqidCukM%2B7wQ76Nr0cUGGaABdlU8ftUDmUrggzkbCxpuWC26eJw0AnfjXhKDoU6r%2FqEQI7c6p%2FPEiW%2FFKJX1v60xsk88K7L43ePA503q3o60xV9DAawXaoSwRmbv3QATwEePXyTwQuvS7UWIhl6PmxzZFWxugM44QksbIKHzgq&X-Amz-Signature=f6f8804f90ac599f2c69f0e711251c1726a6aece17513883a069379a0936b628&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B4UFCPV%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsJLiCmRk06x8Dz79R%2F9vdMe5%2B2NOEHFXk%2BW%2FtblviCgIhAK9kaAghWcrZ8ZFjXLfJp11PiXz8V2f1f5t7oWowaWpNKv8DCBoQABoMNjM3NDIzMTgzODA1IgwiEk04Nf49ViJ175Mq3ANPhJsRw3wSwQc%2BBOpBDqa96hwnmKsOIsxlrEXf%2BmvbOmUluLZVY8jNhfOB4odoymLEpzl7R5ZYnJv88Dh0z4jpmONsD%2BQuyY8t0nmRwGAbe0VwYddPIo8Metlnh1L%2BA5JSP3tnVvLt6W89U%2BLoAaRoZ6llAZUdIYlkMQzjRdgc6a4Ly%2BpcH2mTFjPXpBMJu2aCV%2BKZWbqN6srH5Brbh%2F7ADpVBx6l4%2BcBfYE91lbTnO7gkp7I2vU8nTKJQeC0vP5HSQySWHhm%2Bj%2F2SDsOudjycYrlgreUsNyHWqrgf5SUexIk%2BPudUoBrEmSt15MMMqhtOTe0ozcEkqCjbIkHh51nkL84yqM3Ss4plqKSLnAkQc8JdH0yCaezHqSTcPzxkZtS7mrnFwz%2BS%2Fjzbj%2FaLH9IL8sIT0x33g7ZbVncAQbZ1gePiVNN7tjk0ma202Moi9arnIW6hF6M5nxi78k9qgu25qnRkZg8WPzJEksUPO9qUkGbg2kzi7yKwbgZIpJSxuZqUfFbZoZplUoeiNJ7nxXhUYNCrYQQdYHNLsElJM6edqFQbO%2By2bQPComt8idO%2BfYQj2JMK922Z0UGPW7aK64F%2BEs1b7l%2BRohKMf%2FGv23UTPFgqT00qFYtmw4r%2FJjD4g6K%2BBjqkAQnktTznrTW52NfaTnlXkuv8d1Tbj%2BF0n%2FOBiexWQUp9nT%2BgXhmqidCukM%2B7wQ76Nr0cUGGaABdlU8ftUDmUrggzkbCxpuWC26eJw0AnfjXhKDoU6r%2FqEQI7c6p%2FPEiW%2FFKJX1v60xsk88K7L43ePA503q3o60xV9DAawXaoSwRmbv3QATwEePXyTwQuvS7UWIhl6PmxzZFWxugM44QksbIKHzgq&X-Amz-Signature=7861900d46a4745f54b31ebc64fe6ab200e687e87b2b4c6c8f5fd8589aee90a3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B4UFCPV%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsJLiCmRk06x8Dz79R%2F9vdMe5%2B2NOEHFXk%2BW%2FtblviCgIhAK9kaAghWcrZ8ZFjXLfJp11PiXz8V2f1f5t7oWowaWpNKv8DCBoQABoMNjM3NDIzMTgzODA1IgwiEk04Nf49ViJ175Mq3ANPhJsRw3wSwQc%2BBOpBDqa96hwnmKsOIsxlrEXf%2BmvbOmUluLZVY8jNhfOB4odoymLEpzl7R5ZYnJv88Dh0z4jpmONsD%2BQuyY8t0nmRwGAbe0VwYddPIo8Metlnh1L%2BA5JSP3tnVvLt6W89U%2BLoAaRoZ6llAZUdIYlkMQzjRdgc6a4Ly%2BpcH2mTFjPXpBMJu2aCV%2BKZWbqN6srH5Brbh%2F7ADpVBx6l4%2BcBfYE91lbTnO7gkp7I2vU8nTKJQeC0vP5HSQySWHhm%2Bj%2F2SDsOudjycYrlgreUsNyHWqrgf5SUexIk%2BPudUoBrEmSt15MMMqhtOTe0ozcEkqCjbIkHh51nkL84yqM3Ss4plqKSLnAkQc8JdH0yCaezHqSTcPzxkZtS7mrnFwz%2BS%2Fjzbj%2FaLH9IL8sIT0x33g7ZbVncAQbZ1gePiVNN7tjk0ma202Moi9arnIW6hF6M5nxi78k9qgu25qnRkZg8WPzJEksUPO9qUkGbg2kzi7yKwbgZIpJSxuZqUfFbZoZplUoeiNJ7nxXhUYNCrYQQdYHNLsElJM6edqFQbO%2By2bQPComt8idO%2BfYQj2JMK922Z0UGPW7aK64F%2BEs1b7l%2BRohKMf%2FGv23UTPFgqT00qFYtmw4r%2FJjD4g6K%2BBjqkAQnktTznrTW52NfaTnlXkuv8d1Tbj%2BF0n%2FOBiexWQUp9nT%2BgXhmqidCukM%2B7wQ76Nr0cUGGaABdlU8ftUDmUrggzkbCxpuWC26eJw0AnfjXhKDoU6r%2FqEQI7c6p%2FPEiW%2FFKJX1v60xsk88K7L43ePA503q3o60xV9DAawXaoSwRmbv3QATwEePXyTwQuvS7UWIhl6PmxzZFWxugM44QksbIKHzgq&X-Amz-Signature=825404c69bce2c06f781e438628c64b7ebc5793d58ba2eb1afa2d80c3540feea&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B4UFCPV%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsJLiCmRk06x8Dz79R%2F9vdMe5%2B2NOEHFXk%2BW%2FtblviCgIhAK9kaAghWcrZ8ZFjXLfJp11PiXz8V2f1f5t7oWowaWpNKv8DCBoQABoMNjM3NDIzMTgzODA1IgwiEk04Nf49ViJ175Mq3ANPhJsRw3wSwQc%2BBOpBDqa96hwnmKsOIsxlrEXf%2BmvbOmUluLZVY8jNhfOB4odoymLEpzl7R5ZYnJv88Dh0z4jpmONsD%2BQuyY8t0nmRwGAbe0VwYddPIo8Metlnh1L%2BA5JSP3tnVvLt6W89U%2BLoAaRoZ6llAZUdIYlkMQzjRdgc6a4Ly%2BpcH2mTFjPXpBMJu2aCV%2BKZWbqN6srH5Brbh%2F7ADpVBx6l4%2BcBfYE91lbTnO7gkp7I2vU8nTKJQeC0vP5HSQySWHhm%2Bj%2F2SDsOudjycYrlgreUsNyHWqrgf5SUexIk%2BPudUoBrEmSt15MMMqhtOTe0ozcEkqCjbIkHh51nkL84yqM3Ss4plqKSLnAkQc8JdH0yCaezHqSTcPzxkZtS7mrnFwz%2BS%2Fjzbj%2FaLH9IL8sIT0x33g7ZbVncAQbZ1gePiVNN7tjk0ma202Moi9arnIW6hF6M5nxi78k9qgu25qnRkZg8WPzJEksUPO9qUkGbg2kzi7yKwbgZIpJSxuZqUfFbZoZplUoeiNJ7nxXhUYNCrYQQdYHNLsElJM6edqFQbO%2By2bQPComt8idO%2BfYQj2JMK922Z0UGPW7aK64F%2BEs1b7l%2BRohKMf%2FGv23UTPFgqT00qFYtmw4r%2FJjD4g6K%2BBjqkAQnktTznrTW52NfaTnlXkuv8d1Tbj%2BF0n%2FOBiexWQUp9nT%2BgXhmqidCukM%2B7wQ76Nr0cUGGaABdlU8ftUDmUrggzkbCxpuWC26eJw0AnfjXhKDoU6r%2FqEQI7c6p%2FPEiW%2FFKJX1v60xsk88K7L43ePA503q3o60xV9DAawXaoSwRmbv3QATwEePXyTwQuvS7UWIhl6PmxzZFWxugM44QksbIKHzgq&X-Amz-Signature=7bdefa85bfa62b6aa22e2a8ce841bb051c2e78cd61492779c4c79c92effc1e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B4UFCPV%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsJLiCmRk06x8Dz79R%2F9vdMe5%2B2NOEHFXk%2BW%2FtblviCgIhAK9kaAghWcrZ8ZFjXLfJp11PiXz8V2f1f5t7oWowaWpNKv8DCBoQABoMNjM3NDIzMTgzODA1IgwiEk04Nf49ViJ175Mq3ANPhJsRw3wSwQc%2BBOpBDqa96hwnmKsOIsxlrEXf%2BmvbOmUluLZVY8jNhfOB4odoymLEpzl7R5ZYnJv88Dh0z4jpmONsD%2BQuyY8t0nmRwGAbe0VwYddPIo8Metlnh1L%2BA5JSP3tnVvLt6W89U%2BLoAaRoZ6llAZUdIYlkMQzjRdgc6a4Ly%2BpcH2mTFjPXpBMJu2aCV%2BKZWbqN6srH5Brbh%2F7ADpVBx6l4%2BcBfYE91lbTnO7gkp7I2vU8nTKJQeC0vP5HSQySWHhm%2Bj%2F2SDsOudjycYrlgreUsNyHWqrgf5SUexIk%2BPudUoBrEmSt15MMMqhtOTe0ozcEkqCjbIkHh51nkL84yqM3Ss4plqKSLnAkQc8JdH0yCaezHqSTcPzxkZtS7mrnFwz%2BS%2Fjzbj%2FaLH9IL8sIT0x33g7ZbVncAQbZ1gePiVNN7tjk0ma202Moi9arnIW6hF6M5nxi78k9qgu25qnRkZg8WPzJEksUPO9qUkGbg2kzi7yKwbgZIpJSxuZqUfFbZoZplUoeiNJ7nxXhUYNCrYQQdYHNLsElJM6edqFQbO%2By2bQPComt8idO%2BfYQj2JMK922Z0UGPW7aK64F%2BEs1b7l%2BRohKMf%2FGv23UTPFgqT00qFYtmw4r%2FJjD4g6K%2BBjqkAQnktTznrTW52NfaTnlXkuv8d1Tbj%2BF0n%2FOBiexWQUp9nT%2BgXhmqidCukM%2B7wQ76Nr0cUGGaABdlU8ftUDmUrggzkbCxpuWC26eJw0AnfjXhKDoU6r%2FqEQI7c6p%2FPEiW%2FFKJX1v60xsk88K7L43ePA503q3o60xV9DAawXaoSwRmbv3QATwEePXyTwQuvS7UWIhl6PmxzZFWxugM44QksbIKHzgq&X-Amz-Signature=ee8c5e34c20151c964b4c3bfd0af6f4aa45f183d8c0310b33372ec090a76acba&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
