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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZXC6ZXE%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWHc0wDcEOqDUw4qeRGtM%2FrTn26WqwbG0G9QfKhqyKMQIhAK6oGqb0Y%2But3nrjh7l1%2F76nwtKUsoUgIWaloFsbXq5iKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMasuCimk7EZRMvXEq3ANXavMDzgDfSx9Kk1gPNjpTf8lrHUG5etY8Ek3gcSOvY1Fijhvou4YiRRJX9Iyxi4Mfm8UNIw0qoBrVDpxmVzS6vXU4EpPgHXUlbEUZC4TZP7WKm2F%2BAoAlNniy%2BHKrFO685gOBmuXGh%2FG2gIqbwbpPW%2Bl9avG7Qqdgb9ZDCQWZkYF3WgBAH3JQc32G14PXPJUmXGVFlad1K4Zx4IzQHJUyHuTctcysHiFWwHooojy%2BfxnIG0vR9berMHEP%2BtG70jcVxJ0pvOfEAN%2FVn%2BGWjbi6VNOTu3frmJwJ9Lyxbn4rRt%2BMF97cO4XLuBGbA%2FzbbfzO1XsgDay6T11HvG64QaDcBsGLX4cCeqmfehI0h5hIiDDeOysr1uCSTUeV58VoM2OCLrPgjQxqZ289E2fVj8FaT4LgAC26YeIQ1SIIOud5qhZMyfvcOdQHly6r5FYdycTcMbjI5wxVxuTxR%2Fx%2FB01UTX9KnzIq0%2FfMtF9ZmejAmUk5N%2BnNhxnTxrekxss6yrgfvGOHiKSJLyfZvUUr1FTVg1ZwMjY8cyb8fPZJDohNqqh8O1s%2FKXteaaNEwa6XGtBPGS2ilH8YjBOyOZzolORGMTWWQAQq7gW6A%2FG3ZCuZKGx85jgQtMBDQD80hTCBrau9BjqkAesV9bPXuQZ9UIjfP14l8vNgi4ZRYYgr%2FHWx6YOpC7kP1MRa4n3L%2BOhwbAjibjCVNNlOGO%2BAHsyc5KmWv7kpKv%2Fk1JfgO7KUDn9d7%2Bzy2Y3FNSOjcQGD0m7dBZLsaMdcT0O3D8ObGItrPJA2r6m6vJYAA%2FS9cZayunmOFQEjUN09%2BTm3NQxxRNiTzIgsxZY8s17NchNoUlWT7kf4vamE0rDBXOzQ&X-Amz-Signature=983ffb34b5ca49b3fd910fb01fa255f00547ce35d83f8964c8ab8e7962fec4de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZXC6ZXE%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWHc0wDcEOqDUw4qeRGtM%2FrTn26WqwbG0G9QfKhqyKMQIhAK6oGqb0Y%2But3nrjh7l1%2F76nwtKUsoUgIWaloFsbXq5iKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMasuCimk7EZRMvXEq3ANXavMDzgDfSx9Kk1gPNjpTf8lrHUG5etY8Ek3gcSOvY1Fijhvou4YiRRJX9Iyxi4Mfm8UNIw0qoBrVDpxmVzS6vXU4EpPgHXUlbEUZC4TZP7WKm2F%2BAoAlNniy%2BHKrFO685gOBmuXGh%2FG2gIqbwbpPW%2Bl9avG7Qqdgb9ZDCQWZkYF3WgBAH3JQc32G14PXPJUmXGVFlad1K4Zx4IzQHJUyHuTctcysHiFWwHooojy%2BfxnIG0vR9berMHEP%2BtG70jcVxJ0pvOfEAN%2FVn%2BGWjbi6VNOTu3frmJwJ9Lyxbn4rRt%2BMF97cO4XLuBGbA%2FzbbfzO1XsgDay6T11HvG64QaDcBsGLX4cCeqmfehI0h5hIiDDeOysr1uCSTUeV58VoM2OCLrPgjQxqZ289E2fVj8FaT4LgAC26YeIQ1SIIOud5qhZMyfvcOdQHly6r5FYdycTcMbjI5wxVxuTxR%2Fx%2FB01UTX9KnzIq0%2FfMtF9ZmejAmUk5N%2BnNhxnTxrekxss6yrgfvGOHiKSJLyfZvUUr1FTVg1ZwMjY8cyb8fPZJDohNqqh8O1s%2FKXteaaNEwa6XGtBPGS2ilH8YjBOyOZzolORGMTWWQAQq7gW6A%2FG3ZCuZKGx85jgQtMBDQD80hTCBrau9BjqkAesV9bPXuQZ9UIjfP14l8vNgi4ZRYYgr%2FHWx6YOpC7kP1MRa4n3L%2BOhwbAjibjCVNNlOGO%2BAHsyc5KmWv7kpKv%2Fk1JfgO7KUDn9d7%2Bzy2Y3FNSOjcQGD0m7dBZLsaMdcT0O3D8ObGItrPJA2r6m6vJYAA%2FS9cZayunmOFQEjUN09%2BTm3NQxxRNiTzIgsxZY8s17NchNoUlWT7kf4vamE0rDBXOzQ&X-Amz-Signature=b3b909762417f16693e43f5b0c735c4e68dc217ef844ac4501a0de4ef530f471&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZXC6ZXE%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWHc0wDcEOqDUw4qeRGtM%2FrTn26WqwbG0G9QfKhqyKMQIhAK6oGqb0Y%2But3nrjh7l1%2F76nwtKUsoUgIWaloFsbXq5iKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMasuCimk7EZRMvXEq3ANXavMDzgDfSx9Kk1gPNjpTf8lrHUG5etY8Ek3gcSOvY1Fijhvou4YiRRJX9Iyxi4Mfm8UNIw0qoBrVDpxmVzS6vXU4EpPgHXUlbEUZC4TZP7WKm2F%2BAoAlNniy%2BHKrFO685gOBmuXGh%2FG2gIqbwbpPW%2Bl9avG7Qqdgb9ZDCQWZkYF3WgBAH3JQc32G14PXPJUmXGVFlad1K4Zx4IzQHJUyHuTctcysHiFWwHooojy%2BfxnIG0vR9berMHEP%2BtG70jcVxJ0pvOfEAN%2FVn%2BGWjbi6VNOTu3frmJwJ9Lyxbn4rRt%2BMF97cO4XLuBGbA%2FzbbfzO1XsgDay6T11HvG64QaDcBsGLX4cCeqmfehI0h5hIiDDeOysr1uCSTUeV58VoM2OCLrPgjQxqZ289E2fVj8FaT4LgAC26YeIQ1SIIOud5qhZMyfvcOdQHly6r5FYdycTcMbjI5wxVxuTxR%2Fx%2FB01UTX9KnzIq0%2FfMtF9ZmejAmUk5N%2BnNhxnTxrekxss6yrgfvGOHiKSJLyfZvUUr1FTVg1ZwMjY8cyb8fPZJDohNqqh8O1s%2FKXteaaNEwa6XGtBPGS2ilH8YjBOyOZzolORGMTWWQAQq7gW6A%2FG3ZCuZKGx85jgQtMBDQD80hTCBrau9BjqkAesV9bPXuQZ9UIjfP14l8vNgi4ZRYYgr%2FHWx6YOpC7kP1MRa4n3L%2BOhwbAjibjCVNNlOGO%2BAHsyc5KmWv7kpKv%2Fk1JfgO7KUDn9d7%2Bzy2Y3FNSOjcQGD0m7dBZLsaMdcT0O3D8ObGItrPJA2r6m6vJYAA%2FS9cZayunmOFQEjUN09%2BTm3NQxxRNiTzIgsxZY8s17NchNoUlWT7kf4vamE0rDBXOzQ&X-Amz-Signature=de30bd9c9fb29a0f87e1ddef2cae87a60769217ef1f8e86d261a0c0923a9e0c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZXC6ZXE%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWHc0wDcEOqDUw4qeRGtM%2FrTn26WqwbG0G9QfKhqyKMQIhAK6oGqb0Y%2But3nrjh7l1%2F76nwtKUsoUgIWaloFsbXq5iKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMasuCimk7EZRMvXEq3ANXavMDzgDfSx9Kk1gPNjpTf8lrHUG5etY8Ek3gcSOvY1Fijhvou4YiRRJX9Iyxi4Mfm8UNIw0qoBrVDpxmVzS6vXU4EpPgHXUlbEUZC4TZP7WKm2F%2BAoAlNniy%2BHKrFO685gOBmuXGh%2FG2gIqbwbpPW%2Bl9avG7Qqdgb9ZDCQWZkYF3WgBAH3JQc32G14PXPJUmXGVFlad1K4Zx4IzQHJUyHuTctcysHiFWwHooojy%2BfxnIG0vR9berMHEP%2BtG70jcVxJ0pvOfEAN%2FVn%2BGWjbi6VNOTu3frmJwJ9Lyxbn4rRt%2BMF97cO4XLuBGbA%2FzbbfzO1XsgDay6T11HvG64QaDcBsGLX4cCeqmfehI0h5hIiDDeOysr1uCSTUeV58VoM2OCLrPgjQxqZ289E2fVj8FaT4LgAC26YeIQ1SIIOud5qhZMyfvcOdQHly6r5FYdycTcMbjI5wxVxuTxR%2Fx%2FB01UTX9KnzIq0%2FfMtF9ZmejAmUk5N%2BnNhxnTxrekxss6yrgfvGOHiKSJLyfZvUUr1FTVg1ZwMjY8cyb8fPZJDohNqqh8O1s%2FKXteaaNEwa6XGtBPGS2ilH8YjBOyOZzolORGMTWWQAQq7gW6A%2FG3ZCuZKGx85jgQtMBDQD80hTCBrau9BjqkAesV9bPXuQZ9UIjfP14l8vNgi4ZRYYgr%2FHWx6YOpC7kP1MRa4n3L%2BOhwbAjibjCVNNlOGO%2BAHsyc5KmWv7kpKv%2Fk1JfgO7KUDn9d7%2Bzy2Y3FNSOjcQGD0m7dBZLsaMdcT0O3D8ObGItrPJA2r6m6vJYAA%2FS9cZayunmOFQEjUN09%2BTm3NQxxRNiTzIgsxZY8s17NchNoUlWT7kf4vamE0rDBXOzQ&X-Amz-Signature=5b725ec281e96d6a6eb41f349df36c00bb40dd95c78f62135dce63246339c821&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZXC6ZXE%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWHc0wDcEOqDUw4qeRGtM%2FrTn26WqwbG0G9QfKhqyKMQIhAK6oGqb0Y%2But3nrjh7l1%2F76nwtKUsoUgIWaloFsbXq5iKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMasuCimk7EZRMvXEq3ANXavMDzgDfSx9Kk1gPNjpTf8lrHUG5etY8Ek3gcSOvY1Fijhvou4YiRRJX9Iyxi4Mfm8UNIw0qoBrVDpxmVzS6vXU4EpPgHXUlbEUZC4TZP7WKm2F%2BAoAlNniy%2BHKrFO685gOBmuXGh%2FG2gIqbwbpPW%2Bl9avG7Qqdgb9ZDCQWZkYF3WgBAH3JQc32G14PXPJUmXGVFlad1K4Zx4IzQHJUyHuTctcysHiFWwHooojy%2BfxnIG0vR9berMHEP%2BtG70jcVxJ0pvOfEAN%2FVn%2BGWjbi6VNOTu3frmJwJ9Lyxbn4rRt%2BMF97cO4XLuBGbA%2FzbbfzO1XsgDay6T11HvG64QaDcBsGLX4cCeqmfehI0h5hIiDDeOysr1uCSTUeV58VoM2OCLrPgjQxqZ289E2fVj8FaT4LgAC26YeIQ1SIIOud5qhZMyfvcOdQHly6r5FYdycTcMbjI5wxVxuTxR%2Fx%2FB01UTX9KnzIq0%2FfMtF9ZmejAmUk5N%2BnNhxnTxrekxss6yrgfvGOHiKSJLyfZvUUr1FTVg1ZwMjY8cyb8fPZJDohNqqh8O1s%2FKXteaaNEwa6XGtBPGS2ilH8YjBOyOZzolORGMTWWQAQq7gW6A%2FG3ZCuZKGx85jgQtMBDQD80hTCBrau9BjqkAesV9bPXuQZ9UIjfP14l8vNgi4ZRYYgr%2FHWx6YOpC7kP1MRa4n3L%2BOhwbAjibjCVNNlOGO%2BAHsyc5KmWv7kpKv%2Fk1JfgO7KUDn9d7%2Bzy2Y3FNSOjcQGD0m7dBZLsaMdcT0O3D8ObGItrPJA2r6m6vJYAA%2FS9cZayunmOFQEjUN09%2BTm3NQxxRNiTzIgsxZY8s17NchNoUlWT7kf4vamE0rDBXOzQ&X-Amz-Signature=d0cecd25f152d6e6d03a2fd9de697902f12883ba695d7d5a6b12815bbd5986d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
