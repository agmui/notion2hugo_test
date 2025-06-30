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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWL5ZDCQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHhfi5IjLyX2ehGTcbvOEjfr97xjWm3TqYJWaTJE8H7AiEA8ziHheNv7DyU4jgFyBj%2FsalVpZViapg%2BOLTNdxucBvoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMyv15ge3dATF0IwCrcA6bs5l507FqXvRL8RIX7A%2FyZyHE7Jn361muZpfRFOSKGtiDMnnrE%2BIC4Ts4ifrXKhcHtKcLmyPYILxMRW4bstm2oHXivj6%2FkOgToXGt9LmhbD1s1ZpSaer6xp%2B1WwU4xGrxgFceTC4WkVGB2%2BqRRNAS8cvPWuuODROfbs4e2AJqwhc%2FFl41IW17hBNBha2UCuYWO1tZu6j7qN6ZyG5Rd4XRwUBYhYuZTgMm%2FEfriIDpsGBP9gpu2G2AuPC8AArRrw%2F05iyk3EDsjNaPx0S0XmUL3%2BKgez%2Bp4NStPhzMQWsaEXEh%2FzdLJB1MOaxWPJ639gT5J9ZX54IBMcM9Ww%2BSImuWF%2F89aDfCPht%2FtY7ddFC2ANTtPdpGBIzOX%2FJyVIQYjm%2FYNU7FXyvuLOgDrwJSRy3fjKqWnfSFrEM3d%2BZIJde%2Fou1%2BzSltUdqpPX%2BFibZmWtDdzwY2EWx97%2BRCmA2FmApIF1sxabZ3%2FaEn4cFRnpoE57XQDCMC%2Fks98HgaIjuM9V%2FSfUfCdg%2BYajJJlK1FU4SWJF8weoXSAVtebYc5Pu6ZmWix%2FOxVQhAAQV6H28fYMHzlk6zxromDS6Q9eQ9Y1jabOBzuUIvZhFaB5kvN7S9NyBykQyZ9Hpi9I7%2B7uMJGjicMGOqUBjPkjFcbZvkX26%2FxrhG%2BM0T7yf1f%2ByPF6aI5b5NeHm43QDYfq6y7eGh0cEzKVY%2BtLXnPWh3ZrqLsFkIOE3YqK9sWVkYWgFkduLPQbI9Pli4961nUum6OjyKuGFyNItB6HE63zQy3%2FqQNngbdmjErLz3BRlUT%2F34gzJ26hpnuzEKGPfyQhj%2FjiEMuZqoK9Yb4jdPIQfMhe3NDKgMNpVQRyR46dK%2FWq&X-Amz-Signature=d3206bcf5b63e01d3ac70d2260100bbc2c260a93d634f1b1669affc584ee27e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWL5ZDCQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHhfi5IjLyX2ehGTcbvOEjfr97xjWm3TqYJWaTJE8H7AiEA8ziHheNv7DyU4jgFyBj%2FsalVpZViapg%2BOLTNdxucBvoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMyv15ge3dATF0IwCrcA6bs5l507FqXvRL8RIX7A%2FyZyHE7Jn361muZpfRFOSKGtiDMnnrE%2BIC4Ts4ifrXKhcHtKcLmyPYILxMRW4bstm2oHXivj6%2FkOgToXGt9LmhbD1s1ZpSaer6xp%2B1WwU4xGrxgFceTC4WkVGB2%2BqRRNAS8cvPWuuODROfbs4e2AJqwhc%2FFl41IW17hBNBha2UCuYWO1tZu6j7qN6ZyG5Rd4XRwUBYhYuZTgMm%2FEfriIDpsGBP9gpu2G2AuPC8AArRrw%2F05iyk3EDsjNaPx0S0XmUL3%2BKgez%2Bp4NStPhzMQWsaEXEh%2FzdLJB1MOaxWPJ639gT5J9ZX54IBMcM9Ww%2BSImuWF%2F89aDfCPht%2FtY7ddFC2ANTtPdpGBIzOX%2FJyVIQYjm%2FYNU7FXyvuLOgDrwJSRy3fjKqWnfSFrEM3d%2BZIJde%2Fou1%2BzSltUdqpPX%2BFibZmWtDdzwY2EWx97%2BRCmA2FmApIF1sxabZ3%2FaEn4cFRnpoE57XQDCMC%2Fks98HgaIjuM9V%2FSfUfCdg%2BYajJJlK1FU4SWJF8weoXSAVtebYc5Pu6ZmWix%2FOxVQhAAQV6H28fYMHzlk6zxromDS6Q9eQ9Y1jabOBzuUIvZhFaB5kvN7S9NyBykQyZ9Hpi9I7%2B7uMJGjicMGOqUBjPkjFcbZvkX26%2FxrhG%2BM0T7yf1f%2ByPF6aI5b5NeHm43QDYfq6y7eGh0cEzKVY%2BtLXnPWh3ZrqLsFkIOE3YqK9sWVkYWgFkduLPQbI9Pli4961nUum6OjyKuGFyNItB6HE63zQy3%2FqQNngbdmjErLz3BRlUT%2F34gzJ26hpnuzEKGPfyQhj%2FjiEMuZqoK9Yb4jdPIQfMhe3NDKgMNpVQRyR46dK%2FWq&X-Amz-Signature=046af65451f15d953c26deccc6c255f50b1a0948fce58db175294d92a786dd2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWL5ZDCQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHhfi5IjLyX2ehGTcbvOEjfr97xjWm3TqYJWaTJE8H7AiEA8ziHheNv7DyU4jgFyBj%2FsalVpZViapg%2BOLTNdxucBvoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMyv15ge3dATF0IwCrcA6bs5l507FqXvRL8RIX7A%2FyZyHE7Jn361muZpfRFOSKGtiDMnnrE%2BIC4Ts4ifrXKhcHtKcLmyPYILxMRW4bstm2oHXivj6%2FkOgToXGt9LmhbD1s1ZpSaer6xp%2B1WwU4xGrxgFceTC4WkVGB2%2BqRRNAS8cvPWuuODROfbs4e2AJqwhc%2FFl41IW17hBNBha2UCuYWO1tZu6j7qN6ZyG5Rd4XRwUBYhYuZTgMm%2FEfriIDpsGBP9gpu2G2AuPC8AArRrw%2F05iyk3EDsjNaPx0S0XmUL3%2BKgez%2Bp4NStPhzMQWsaEXEh%2FzdLJB1MOaxWPJ639gT5J9ZX54IBMcM9Ww%2BSImuWF%2F89aDfCPht%2FtY7ddFC2ANTtPdpGBIzOX%2FJyVIQYjm%2FYNU7FXyvuLOgDrwJSRy3fjKqWnfSFrEM3d%2BZIJde%2Fou1%2BzSltUdqpPX%2BFibZmWtDdzwY2EWx97%2BRCmA2FmApIF1sxabZ3%2FaEn4cFRnpoE57XQDCMC%2Fks98HgaIjuM9V%2FSfUfCdg%2BYajJJlK1FU4SWJF8weoXSAVtebYc5Pu6ZmWix%2FOxVQhAAQV6H28fYMHzlk6zxromDS6Q9eQ9Y1jabOBzuUIvZhFaB5kvN7S9NyBykQyZ9Hpi9I7%2B7uMJGjicMGOqUBjPkjFcbZvkX26%2FxrhG%2BM0T7yf1f%2ByPF6aI5b5NeHm43QDYfq6y7eGh0cEzKVY%2BtLXnPWh3ZrqLsFkIOE3YqK9sWVkYWgFkduLPQbI9Pli4961nUum6OjyKuGFyNItB6HE63zQy3%2FqQNngbdmjErLz3BRlUT%2F34gzJ26hpnuzEKGPfyQhj%2FjiEMuZqoK9Yb4jdPIQfMhe3NDKgMNpVQRyR46dK%2FWq&X-Amz-Signature=30644b81a922fcb0ec31648a41b7f958456aec7dfc73a197a66c2e1e2e5c86fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWL5ZDCQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHhfi5IjLyX2ehGTcbvOEjfr97xjWm3TqYJWaTJE8H7AiEA8ziHheNv7DyU4jgFyBj%2FsalVpZViapg%2BOLTNdxucBvoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMyv15ge3dATF0IwCrcA6bs5l507FqXvRL8RIX7A%2FyZyHE7Jn361muZpfRFOSKGtiDMnnrE%2BIC4Ts4ifrXKhcHtKcLmyPYILxMRW4bstm2oHXivj6%2FkOgToXGt9LmhbD1s1ZpSaer6xp%2B1WwU4xGrxgFceTC4WkVGB2%2BqRRNAS8cvPWuuODROfbs4e2AJqwhc%2FFl41IW17hBNBha2UCuYWO1tZu6j7qN6ZyG5Rd4XRwUBYhYuZTgMm%2FEfriIDpsGBP9gpu2G2AuPC8AArRrw%2F05iyk3EDsjNaPx0S0XmUL3%2BKgez%2Bp4NStPhzMQWsaEXEh%2FzdLJB1MOaxWPJ639gT5J9ZX54IBMcM9Ww%2BSImuWF%2F89aDfCPht%2FtY7ddFC2ANTtPdpGBIzOX%2FJyVIQYjm%2FYNU7FXyvuLOgDrwJSRy3fjKqWnfSFrEM3d%2BZIJde%2Fou1%2BzSltUdqpPX%2BFibZmWtDdzwY2EWx97%2BRCmA2FmApIF1sxabZ3%2FaEn4cFRnpoE57XQDCMC%2Fks98HgaIjuM9V%2FSfUfCdg%2BYajJJlK1FU4SWJF8weoXSAVtebYc5Pu6ZmWix%2FOxVQhAAQV6H28fYMHzlk6zxromDS6Q9eQ9Y1jabOBzuUIvZhFaB5kvN7S9NyBykQyZ9Hpi9I7%2B7uMJGjicMGOqUBjPkjFcbZvkX26%2FxrhG%2BM0T7yf1f%2ByPF6aI5b5NeHm43QDYfq6y7eGh0cEzKVY%2BtLXnPWh3ZrqLsFkIOE3YqK9sWVkYWgFkduLPQbI9Pli4961nUum6OjyKuGFyNItB6HE63zQy3%2FqQNngbdmjErLz3BRlUT%2F34gzJ26hpnuzEKGPfyQhj%2FjiEMuZqoK9Yb4jdPIQfMhe3NDKgMNpVQRyR46dK%2FWq&X-Amz-Signature=d6ffe7ee98baf058639e0c82b69c71eb777b3b517f4133413be14da07a203114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWL5ZDCQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHhfi5IjLyX2ehGTcbvOEjfr97xjWm3TqYJWaTJE8H7AiEA8ziHheNv7DyU4jgFyBj%2FsalVpZViapg%2BOLTNdxucBvoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMyv15ge3dATF0IwCrcA6bs5l507FqXvRL8RIX7A%2FyZyHE7Jn361muZpfRFOSKGtiDMnnrE%2BIC4Ts4ifrXKhcHtKcLmyPYILxMRW4bstm2oHXivj6%2FkOgToXGt9LmhbD1s1ZpSaer6xp%2B1WwU4xGrxgFceTC4WkVGB2%2BqRRNAS8cvPWuuODROfbs4e2AJqwhc%2FFl41IW17hBNBha2UCuYWO1tZu6j7qN6ZyG5Rd4XRwUBYhYuZTgMm%2FEfriIDpsGBP9gpu2G2AuPC8AArRrw%2F05iyk3EDsjNaPx0S0XmUL3%2BKgez%2Bp4NStPhzMQWsaEXEh%2FzdLJB1MOaxWPJ639gT5J9ZX54IBMcM9Ww%2BSImuWF%2F89aDfCPht%2FtY7ddFC2ANTtPdpGBIzOX%2FJyVIQYjm%2FYNU7FXyvuLOgDrwJSRy3fjKqWnfSFrEM3d%2BZIJde%2Fou1%2BzSltUdqpPX%2BFibZmWtDdzwY2EWx97%2BRCmA2FmApIF1sxabZ3%2FaEn4cFRnpoE57XQDCMC%2Fks98HgaIjuM9V%2FSfUfCdg%2BYajJJlK1FU4SWJF8weoXSAVtebYc5Pu6ZmWix%2FOxVQhAAQV6H28fYMHzlk6zxromDS6Q9eQ9Y1jabOBzuUIvZhFaB5kvN7S9NyBykQyZ9Hpi9I7%2B7uMJGjicMGOqUBjPkjFcbZvkX26%2FxrhG%2BM0T7yf1f%2ByPF6aI5b5NeHm43QDYfq6y7eGh0cEzKVY%2BtLXnPWh3ZrqLsFkIOE3YqK9sWVkYWgFkduLPQbI9Pli4961nUum6OjyKuGFyNItB6HE63zQy3%2FqQNngbdmjErLz3BRlUT%2F34gzJ26hpnuzEKGPfyQhj%2FjiEMuZqoK9Yb4jdPIQfMhe3NDKgMNpVQRyR46dK%2FWq&X-Amz-Signature=6255fd70f2d0a72c382ba565a127e0ca6d94c071f47701dffe05bd9e92ba165a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
