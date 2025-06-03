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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPJWFXY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDbxJDb5X0IvV8ObCOA6ipj9yYp%2F0HoSysoH1hrR%2Fy7rAiEApIIAUwHKIK9c6Y58lq3PfZRAb%2Bf8TM7iM3IpKBRsrhQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9gBzARSaQTv3toYircA2FpibIoO0FQ125paNXmQ9jGD4gUVpFxMVoJ9WO2iJpPonw60P2%2BFf0gS8BZBvWn3YdRQIBjX3NblNRKjV9MmcCqiwEnoNOtbb6XHBIPdEdNaUCtJwmK6lkX1IrPZP7dBpETc6btZ2WONycji9ZL0rGmj0O4qvBQ96iBdtc5baBKrKptTFQyNJDlczqAZPP7Lsa1oiCDaX1uJcGbg4Z31Yx2wcYwscPg0HHC4gjYZYkNX7HxUFoktPnFJLv5RwUC%2FL%2BY6Q3JbmZHs9gbf74W2P%2FvUXNXAlmKh3fL70fWCtEUFzNgMZFqwOGA1QTvAYXbkIzmBqELE5mdjtD3F2RqtGAg99aij340eO263e3Cmv4Vafl9qUrFd%2BoRdrA4sVl6WKUcZuNzCAQ7EOTeSqP2EDLj85MnnLumB%2FWrPVVBAHblECXgSn8ppNo4TctEipalV%2Fr5F46le4Y1cMApriIvrS8qZwp5aefD82%2FWVaFZDVP%2BonoisjOGRRkUnG9uTCREI%2BV89FIDnFpNNfBWyvxUNvXxu2X6OcsZ%2FU7gx%2FJAXYG7Rod4koU01N1HgvXX%2B%2F2tpHJC00RdrbRFEjgkixYsSlnOf4PiUN89i9vzeliyE%2B0zFWWjXMgkMsm30y%2BmMKmC%2BsEGOqUBmbsQ5GTVb5IMW7u07FzkqxiCGX44TQVRDr3h47XrbOjhzjtl6JrRZ5KQpev4xxxOvPhaS28UMjgOm41F1bXpioRb6seGLapO%2B0jwIXaIcpjm6Y9x4ryfykse4iL0v7ymZ2V2KAJcYC2Qe5NjBmkz38hIsaatIMTtjw%2FVnXglPyUBmVAWUL3GHIfirHSPylmYmT8KNZRnA3pScvsbuq5p3j6zW7Wj&X-Amz-Signature=d632e2324874216bb42e52a2ae4105376c5effee573d8a5092ce143e8da80946&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPJWFXY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDbxJDb5X0IvV8ObCOA6ipj9yYp%2F0HoSysoH1hrR%2Fy7rAiEApIIAUwHKIK9c6Y58lq3PfZRAb%2Bf8TM7iM3IpKBRsrhQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9gBzARSaQTv3toYircA2FpibIoO0FQ125paNXmQ9jGD4gUVpFxMVoJ9WO2iJpPonw60P2%2BFf0gS8BZBvWn3YdRQIBjX3NblNRKjV9MmcCqiwEnoNOtbb6XHBIPdEdNaUCtJwmK6lkX1IrPZP7dBpETc6btZ2WONycji9ZL0rGmj0O4qvBQ96iBdtc5baBKrKptTFQyNJDlczqAZPP7Lsa1oiCDaX1uJcGbg4Z31Yx2wcYwscPg0HHC4gjYZYkNX7HxUFoktPnFJLv5RwUC%2FL%2BY6Q3JbmZHs9gbf74W2P%2FvUXNXAlmKh3fL70fWCtEUFzNgMZFqwOGA1QTvAYXbkIzmBqELE5mdjtD3F2RqtGAg99aij340eO263e3Cmv4Vafl9qUrFd%2BoRdrA4sVl6WKUcZuNzCAQ7EOTeSqP2EDLj85MnnLumB%2FWrPVVBAHblECXgSn8ppNo4TctEipalV%2Fr5F46le4Y1cMApriIvrS8qZwp5aefD82%2FWVaFZDVP%2BonoisjOGRRkUnG9uTCREI%2BV89FIDnFpNNfBWyvxUNvXxu2X6OcsZ%2FU7gx%2FJAXYG7Rod4koU01N1HgvXX%2B%2F2tpHJC00RdrbRFEjgkixYsSlnOf4PiUN89i9vzeliyE%2B0zFWWjXMgkMsm30y%2BmMKmC%2BsEGOqUBmbsQ5GTVb5IMW7u07FzkqxiCGX44TQVRDr3h47XrbOjhzjtl6JrRZ5KQpev4xxxOvPhaS28UMjgOm41F1bXpioRb6seGLapO%2B0jwIXaIcpjm6Y9x4ryfykse4iL0v7ymZ2V2KAJcYC2Qe5NjBmkz38hIsaatIMTtjw%2FVnXglPyUBmVAWUL3GHIfirHSPylmYmT8KNZRnA3pScvsbuq5p3j6zW7Wj&X-Amz-Signature=1b6ad968af5d57d47de7c3be7d639b33ab23d721d66879898bb961732c6065b7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPJWFXY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDbxJDb5X0IvV8ObCOA6ipj9yYp%2F0HoSysoH1hrR%2Fy7rAiEApIIAUwHKIK9c6Y58lq3PfZRAb%2Bf8TM7iM3IpKBRsrhQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9gBzARSaQTv3toYircA2FpibIoO0FQ125paNXmQ9jGD4gUVpFxMVoJ9WO2iJpPonw60P2%2BFf0gS8BZBvWn3YdRQIBjX3NblNRKjV9MmcCqiwEnoNOtbb6XHBIPdEdNaUCtJwmK6lkX1IrPZP7dBpETc6btZ2WONycji9ZL0rGmj0O4qvBQ96iBdtc5baBKrKptTFQyNJDlczqAZPP7Lsa1oiCDaX1uJcGbg4Z31Yx2wcYwscPg0HHC4gjYZYkNX7HxUFoktPnFJLv5RwUC%2FL%2BY6Q3JbmZHs9gbf74W2P%2FvUXNXAlmKh3fL70fWCtEUFzNgMZFqwOGA1QTvAYXbkIzmBqELE5mdjtD3F2RqtGAg99aij340eO263e3Cmv4Vafl9qUrFd%2BoRdrA4sVl6WKUcZuNzCAQ7EOTeSqP2EDLj85MnnLumB%2FWrPVVBAHblECXgSn8ppNo4TctEipalV%2Fr5F46le4Y1cMApriIvrS8qZwp5aefD82%2FWVaFZDVP%2BonoisjOGRRkUnG9uTCREI%2BV89FIDnFpNNfBWyvxUNvXxu2X6OcsZ%2FU7gx%2FJAXYG7Rod4koU01N1HgvXX%2B%2F2tpHJC00RdrbRFEjgkixYsSlnOf4PiUN89i9vzeliyE%2B0zFWWjXMgkMsm30y%2BmMKmC%2BsEGOqUBmbsQ5GTVb5IMW7u07FzkqxiCGX44TQVRDr3h47XrbOjhzjtl6JrRZ5KQpev4xxxOvPhaS28UMjgOm41F1bXpioRb6seGLapO%2B0jwIXaIcpjm6Y9x4ryfykse4iL0v7ymZ2V2KAJcYC2Qe5NjBmkz38hIsaatIMTtjw%2FVnXglPyUBmVAWUL3GHIfirHSPylmYmT8KNZRnA3pScvsbuq5p3j6zW7Wj&X-Amz-Signature=5be234d7108d4162f3eb47ec76d19fc5746d49088ac19ee615816ac21f912974&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPJWFXY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDbxJDb5X0IvV8ObCOA6ipj9yYp%2F0HoSysoH1hrR%2Fy7rAiEApIIAUwHKIK9c6Y58lq3PfZRAb%2Bf8TM7iM3IpKBRsrhQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9gBzARSaQTv3toYircA2FpibIoO0FQ125paNXmQ9jGD4gUVpFxMVoJ9WO2iJpPonw60P2%2BFf0gS8BZBvWn3YdRQIBjX3NblNRKjV9MmcCqiwEnoNOtbb6XHBIPdEdNaUCtJwmK6lkX1IrPZP7dBpETc6btZ2WONycji9ZL0rGmj0O4qvBQ96iBdtc5baBKrKptTFQyNJDlczqAZPP7Lsa1oiCDaX1uJcGbg4Z31Yx2wcYwscPg0HHC4gjYZYkNX7HxUFoktPnFJLv5RwUC%2FL%2BY6Q3JbmZHs9gbf74W2P%2FvUXNXAlmKh3fL70fWCtEUFzNgMZFqwOGA1QTvAYXbkIzmBqELE5mdjtD3F2RqtGAg99aij340eO263e3Cmv4Vafl9qUrFd%2BoRdrA4sVl6WKUcZuNzCAQ7EOTeSqP2EDLj85MnnLumB%2FWrPVVBAHblECXgSn8ppNo4TctEipalV%2Fr5F46le4Y1cMApriIvrS8qZwp5aefD82%2FWVaFZDVP%2BonoisjOGRRkUnG9uTCREI%2BV89FIDnFpNNfBWyvxUNvXxu2X6OcsZ%2FU7gx%2FJAXYG7Rod4koU01N1HgvXX%2B%2F2tpHJC00RdrbRFEjgkixYsSlnOf4PiUN89i9vzeliyE%2B0zFWWjXMgkMsm30y%2BmMKmC%2BsEGOqUBmbsQ5GTVb5IMW7u07FzkqxiCGX44TQVRDr3h47XrbOjhzjtl6JrRZ5KQpev4xxxOvPhaS28UMjgOm41F1bXpioRb6seGLapO%2B0jwIXaIcpjm6Y9x4ryfykse4iL0v7ymZ2V2KAJcYC2Qe5NjBmkz38hIsaatIMTtjw%2FVnXglPyUBmVAWUL3GHIfirHSPylmYmT8KNZRnA3pScvsbuq5p3j6zW7Wj&X-Amz-Signature=2af57d163d9d2839a6073d9a99be6e8d83dc1e134cf54f7786a6a09818dcece5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPJWFXY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDbxJDb5X0IvV8ObCOA6ipj9yYp%2F0HoSysoH1hrR%2Fy7rAiEApIIAUwHKIK9c6Y58lq3PfZRAb%2Bf8TM7iM3IpKBRsrhQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9gBzARSaQTv3toYircA2FpibIoO0FQ125paNXmQ9jGD4gUVpFxMVoJ9WO2iJpPonw60P2%2BFf0gS8BZBvWn3YdRQIBjX3NblNRKjV9MmcCqiwEnoNOtbb6XHBIPdEdNaUCtJwmK6lkX1IrPZP7dBpETc6btZ2WONycji9ZL0rGmj0O4qvBQ96iBdtc5baBKrKptTFQyNJDlczqAZPP7Lsa1oiCDaX1uJcGbg4Z31Yx2wcYwscPg0HHC4gjYZYkNX7HxUFoktPnFJLv5RwUC%2FL%2BY6Q3JbmZHs9gbf74W2P%2FvUXNXAlmKh3fL70fWCtEUFzNgMZFqwOGA1QTvAYXbkIzmBqELE5mdjtD3F2RqtGAg99aij340eO263e3Cmv4Vafl9qUrFd%2BoRdrA4sVl6WKUcZuNzCAQ7EOTeSqP2EDLj85MnnLumB%2FWrPVVBAHblECXgSn8ppNo4TctEipalV%2Fr5F46le4Y1cMApriIvrS8qZwp5aefD82%2FWVaFZDVP%2BonoisjOGRRkUnG9uTCREI%2BV89FIDnFpNNfBWyvxUNvXxu2X6OcsZ%2FU7gx%2FJAXYG7Rod4koU01N1HgvXX%2B%2F2tpHJC00RdrbRFEjgkixYsSlnOf4PiUN89i9vzeliyE%2B0zFWWjXMgkMsm30y%2BmMKmC%2BsEGOqUBmbsQ5GTVb5IMW7u07FzkqxiCGX44TQVRDr3h47XrbOjhzjtl6JrRZ5KQpev4xxxOvPhaS28UMjgOm41F1bXpioRb6seGLapO%2B0jwIXaIcpjm6Y9x4ryfykse4iL0v7ymZ2V2KAJcYC2Qe5NjBmkz38hIsaatIMTtjw%2FVnXglPyUBmVAWUL3GHIfirHSPylmYmT8KNZRnA3pScvsbuq5p3j6zW7Wj&X-Amz-Signature=c653e9a3666160702124a609d14142d79b715d7fb51d1e1a59d42a5f4561877e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
