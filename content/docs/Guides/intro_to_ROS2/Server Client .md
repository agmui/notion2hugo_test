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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4DEVJO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQC3cfK31VJENrn1SGXOhqgHATe6pjkV%2FyKHjgXx9TBxnAIgJbiYhoJjhCjTRRFTYPGiyBLjZB9J3beSS1E4Ett%2Bk%2Fgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDN%2Fr19Ww2MgAVUk%2FpSrcA5m%2FDQdrj3MAqQbjI%2F3OY%2BI5FuHHvHZcQQzIOARn%2BbkDoPH9gS9KvdekYX03sKzSbXBj68QAgO9ahpLmGcJ95svAc3uH8gdn0EL0EvCwQj0oq2dB7ZRuKKMaXAmMYwkT5cSzhoUq26dE1o7cpm%2BsU7Qgs4rOdSLk5lEYkdg2TetLQyUiiF0h1qbozEOYkhflbxugekoaZV37bbnvmOKdZ%2BD5lto337bYDGzuVpuHEcM91wIvm4Rdf%2FbCJG2ygh%2B4Jn61zJyQkT9YCsoJqCTyLmL%2FjoVe53059FSfRi33%2BaETX57BEoziV%2Bjp6qGJbUuuhQUgc3z5ueaHiRm3BqoTCkPxoyzCVr9mJrOAEhJbfGCZaNCcrhJ%2FQrV7rFNKckfP8%2BYDhyt4t3lb33sYGetS2V%2F5xJn131ne1yO6lt975y8rRour9IEe%2FRM160l4hAAK1oKN4U5fG1M9EDg%2FNpoIopS37pDaWcnIQvY46YKgKzfq1KPNrCe3w8CaijSaBnop0Qe8uflzddxF%2FuX8HpzLze8QSoBwy8y7GVxn4imlyiCv1YS1hKNcBzAft4m2cVFmG3vWibsfCMduyaBjYSTyktTdaS924y%2FzWQ9KpaGJk4yax%2F5xMtjRZZhEN62eMOXBk8QGOqUB1%2FpJ%2Fr1gAfAt3wY7idoFcldCKv42IGcpNWhIdfO1hkRhKlc1YpbWjnlBGwZiS2oWZ5NkxrbTkP4TEqmy5Tw1zAbSadZdpvZbsX5SNkDPCu9Jh3x0MuKw2ZpTTPffBzuj3AdF9YZTTIGS0DjwJW3Y5kxAAR6jgdz9%2BtBvyOEDeR1hkJxQX7j%2BRUV5iiMHqCDD37pnk0BWt9izaO4KGnJePkRc8Mk7&X-Amz-Signature=1d60548498417b53d80cacbecab3d800ac4183491757cfea6ba098812fe474a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4DEVJO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQC3cfK31VJENrn1SGXOhqgHATe6pjkV%2FyKHjgXx9TBxnAIgJbiYhoJjhCjTRRFTYPGiyBLjZB9J3beSS1E4Ett%2Bk%2Fgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDN%2Fr19Ww2MgAVUk%2FpSrcA5m%2FDQdrj3MAqQbjI%2F3OY%2BI5FuHHvHZcQQzIOARn%2BbkDoPH9gS9KvdekYX03sKzSbXBj68QAgO9ahpLmGcJ95svAc3uH8gdn0EL0EvCwQj0oq2dB7ZRuKKMaXAmMYwkT5cSzhoUq26dE1o7cpm%2BsU7Qgs4rOdSLk5lEYkdg2TetLQyUiiF0h1qbozEOYkhflbxugekoaZV37bbnvmOKdZ%2BD5lto337bYDGzuVpuHEcM91wIvm4Rdf%2FbCJG2ygh%2B4Jn61zJyQkT9YCsoJqCTyLmL%2FjoVe53059FSfRi33%2BaETX57BEoziV%2Bjp6qGJbUuuhQUgc3z5ueaHiRm3BqoTCkPxoyzCVr9mJrOAEhJbfGCZaNCcrhJ%2FQrV7rFNKckfP8%2BYDhyt4t3lb33sYGetS2V%2F5xJn131ne1yO6lt975y8rRour9IEe%2FRM160l4hAAK1oKN4U5fG1M9EDg%2FNpoIopS37pDaWcnIQvY46YKgKzfq1KPNrCe3w8CaijSaBnop0Qe8uflzddxF%2FuX8HpzLze8QSoBwy8y7GVxn4imlyiCv1YS1hKNcBzAft4m2cVFmG3vWibsfCMduyaBjYSTyktTdaS924y%2FzWQ9KpaGJk4yax%2F5xMtjRZZhEN62eMOXBk8QGOqUB1%2FpJ%2Fr1gAfAt3wY7idoFcldCKv42IGcpNWhIdfO1hkRhKlc1YpbWjnlBGwZiS2oWZ5NkxrbTkP4TEqmy5Tw1zAbSadZdpvZbsX5SNkDPCu9Jh3x0MuKw2ZpTTPffBzuj3AdF9YZTTIGS0DjwJW3Y5kxAAR6jgdz9%2BtBvyOEDeR1hkJxQX7j%2BRUV5iiMHqCDD37pnk0BWt9izaO4KGnJePkRc8Mk7&X-Amz-Signature=6d5169d59ca661435a0bfe71a1cdf363bbfcb68a14cc10d5c0e5340b55582f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4DEVJO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQC3cfK31VJENrn1SGXOhqgHATe6pjkV%2FyKHjgXx9TBxnAIgJbiYhoJjhCjTRRFTYPGiyBLjZB9J3beSS1E4Ett%2Bk%2Fgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDN%2Fr19Ww2MgAVUk%2FpSrcA5m%2FDQdrj3MAqQbjI%2F3OY%2BI5FuHHvHZcQQzIOARn%2BbkDoPH9gS9KvdekYX03sKzSbXBj68QAgO9ahpLmGcJ95svAc3uH8gdn0EL0EvCwQj0oq2dB7ZRuKKMaXAmMYwkT5cSzhoUq26dE1o7cpm%2BsU7Qgs4rOdSLk5lEYkdg2TetLQyUiiF0h1qbozEOYkhflbxugekoaZV37bbnvmOKdZ%2BD5lto337bYDGzuVpuHEcM91wIvm4Rdf%2FbCJG2ygh%2B4Jn61zJyQkT9YCsoJqCTyLmL%2FjoVe53059FSfRi33%2BaETX57BEoziV%2Bjp6qGJbUuuhQUgc3z5ueaHiRm3BqoTCkPxoyzCVr9mJrOAEhJbfGCZaNCcrhJ%2FQrV7rFNKckfP8%2BYDhyt4t3lb33sYGetS2V%2F5xJn131ne1yO6lt975y8rRour9IEe%2FRM160l4hAAK1oKN4U5fG1M9EDg%2FNpoIopS37pDaWcnIQvY46YKgKzfq1KPNrCe3w8CaijSaBnop0Qe8uflzddxF%2FuX8HpzLze8QSoBwy8y7GVxn4imlyiCv1YS1hKNcBzAft4m2cVFmG3vWibsfCMduyaBjYSTyktTdaS924y%2FzWQ9KpaGJk4yax%2F5xMtjRZZhEN62eMOXBk8QGOqUB1%2FpJ%2Fr1gAfAt3wY7idoFcldCKv42IGcpNWhIdfO1hkRhKlc1YpbWjnlBGwZiS2oWZ5NkxrbTkP4TEqmy5Tw1zAbSadZdpvZbsX5SNkDPCu9Jh3x0MuKw2ZpTTPffBzuj3AdF9YZTTIGS0DjwJW3Y5kxAAR6jgdz9%2BtBvyOEDeR1hkJxQX7j%2BRUV5iiMHqCDD37pnk0BWt9izaO4KGnJePkRc8Mk7&X-Amz-Signature=93239bdf47546cda549a3a7910155a2113ac7bb377b63b41ff55d6b7ea4f3552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4DEVJO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQC3cfK31VJENrn1SGXOhqgHATe6pjkV%2FyKHjgXx9TBxnAIgJbiYhoJjhCjTRRFTYPGiyBLjZB9J3beSS1E4Ett%2Bk%2Fgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDN%2Fr19Ww2MgAVUk%2FpSrcA5m%2FDQdrj3MAqQbjI%2F3OY%2BI5FuHHvHZcQQzIOARn%2BbkDoPH9gS9KvdekYX03sKzSbXBj68QAgO9ahpLmGcJ95svAc3uH8gdn0EL0EvCwQj0oq2dB7ZRuKKMaXAmMYwkT5cSzhoUq26dE1o7cpm%2BsU7Qgs4rOdSLk5lEYkdg2TetLQyUiiF0h1qbozEOYkhflbxugekoaZV37bbnvmOKdZ%2BD5lto337bYDGzuVpuHEcM91wIvm4Rdf%2FbCJG2ygh%2B4Jn61zJyQkT9YCsoJqCTyLmL%2FjoVe53059FSfRi33%2BaETX57BEoziV%2Bjp6qGJbUuuhQUgc3z5ueaHiRm3BqoTCkPxoyzCVr9mJrOAEhJbfGCZaNCcrhJ%2FQrV7rFNKckfP8%2BYDhyt4t3lb33sYGetS2V%2F5xJn131ne1yO6lt975y8rRour9IEe%2FRM160l4hAAK1oKN4U5fG1M9EDg%2FNpoIopS37pDaWcnIQvY46YKgKzfq1KPNrCe3w8CaijSaBnop0Qe8uflzddxF%2FuX8HpzLze8QSoBwy8y7GVxn4imlyiCv1YS1hKNcBzAft4m2cVFmG3vWibsfCMduyaBjYSTyktTdaS924y%2FzWQ9KpaGJk4yax%2F5xMtjRZZhEN62eMOXBk8QGOqUB1%2FpJ%2Fr1gAfAt3wY7idoFcldCKv42IGcpNWhIdfO1hkRhKlc1YpbWjnlBGwZiS2oWZ5NkxrbTkP4TEqmy5Tw1zAbSadZdpvZbsX5SNkDPCu9Jh3x0MuKw2ZpTTPffBzuj3AdF9YZTTIGS0DjwJW3Y5kxAAR6jgdz9%2BtBvyOEDeR1hkJxQX7j%2BRUV5iiMHqCDD37pnk0BWt9izaO4KGnJePkRc8Mk7&X-Amz-Signature=0410a16cc51909a08f221622dca8a8ddd5b8215a92bae28fa88eb7a58be6d54f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4DEVJO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQC3cfK31VJENrn1SGXOhqgHATe6pjkV%2FyKHjgXx9TBxnAIgJbiYhoJjhCjTRRFTYPGiyBLjZB9J3beSS1E4Ett%2Bk%2Fgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDN%2Fr19Ww2MgAVUk%2FpSrcA5m%2FDQdrj3MAqQbjI%2F3OY%2BI5FuHHvHZcQQzIOARn%2BbkDoPH9gS9KvdekYX03sKzSbXBj68QAgO9ahpLmGcJ95svAc3uH8gdn0EL0EvCwQj0oq2dB7ZRuKKMaXAmMYwkT5cSzhoUq26dE1o7cpm%2BsU7Qgs4rOdSLk5lEYkdg2TetLQyUiiF0h1qbozEOYkhflbxugekoaZV37bbnvmOKdZ%2BD5lto337bYDGzuVpuHEcM91wIvm4Rdf%2FbCJG2ygh%2B4Jn61zJyQkT9YCsoJqCTyLmL%2FjoVe53059FSfRi33%2BaETX57BEoziV%2Bjp6qGJbUuuhQUgc3z5ueaHiRm3BqoTCkPxoyzCVr9mJrOAEhJbfGCZaNCcrhJ%2FQrV7rFNKckfP8%2BYDhyt4t3lb33sYGetS2V%2F5xJn131ne1yO6lt975y8rRour9IEe%2FRM160l4hAAK1oKN4U5fG1M9EDg%2FNpoIopS37pDaWcnIQvY46YKgKzfq1KPNrCe3w8CaijSaBnop0Qe8uflzddxF%2FuX8HpzLze8QSoBwy8y7GVxn4imlyiCv1YS1hKNcBzAft4m2cVFmG3vWibsfCMduyaBjYSTyktTdaS924y%2FzWQ9KpaGJk4yax%2F5xMtjRZZhEN62eMOXBk8QGOqUB1%2FpJ%2Fr1gAfAt3wY7idoFcldCKv42IGcpNWhIdfO1hkRhKlc1YpbWjnlBGwZiS2oWZ5NkxrbTkP4TEqmy5Tw1zAbSadZdpvZbsX5SNkDPCu9Jh3x0MuKw2ZpTTPffBzuj3AdF9YZTTIGS0DjwJW3Y5kxAAR6jgdz9%2BtBvyOEDeR1hkJxQX7j%2BRUV5iiMHqCDD37pnk0BWt9izaO4KGnJePkRc8Mk7&X-Amz-Signature=67cf45c529bfb14a2ed3e44e8e6baa5ca8a58afebf6a37e660433ee4eb37656a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
