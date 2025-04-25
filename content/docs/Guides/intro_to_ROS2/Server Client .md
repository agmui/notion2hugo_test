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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RJDH2J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUV92Xmb%2Bwvpk36DQD%2BZ8EmHXBfRE9%2FUqqqE5ww%2Bf4PAiEApCXpXcaw27fqWlcoutJ7cr%2F7590782gojDvOFrYeBa4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEmFybltlcbuajii5CrcA%2FHXkUxK2GgbgTTOMZyHif90M5aRbIfcZaHr6xIRAhQTIEyug44ZY%2BSYwvmoDA9TphfcBlJyfz%2BWpf4hfDLQGaEvWba%2F%2BvtwQo2sGTvfxX1exzmBeZFf3DjdejMB5MVgI9BmgKyURskk1sTd04R10xShFox%2Fjosy4Lu01bkF%2BeCcP35wITCmA%2FodHKU6lxmJjk52THL2Pjhvkbb0pOFzg4fJBmuOQOqGBBp3XLNjdjCdx1ME%2FiBmXoZpe8EH8xE4I47FR0JotjfUt60EIkqID4bGNSammuZTWb4n0R3Z3Luqsf6aWSsY22GhM0G1QzY2fRnFoBxtTR%2FpBfBuMyCu0w5ZUQLeuK%2BUxrizSIZcTM%2FGENWnlX4RDcgJmdMmlWYxp5T0QXpSxrKrXtXgEhmLdLHGgCz%2FjUL9vaaMTN%2B4Rv97NH6Z4VYhZX40YH4MELkphdlKNkvRGXbQaej9LkUIsCms4B2CxHGNa6mCgEpLW4nChIWsIFwYiOr%2F8JKhqO4bcRd8niHUCAf8rf9U%2FjnkMBLCAvq8FbgCW7D1tffMUo3KQGO67g7bCqLH5RVHU5Wscg1OCeBl%2F%2BxaDqhEVY75QAqlGVtiQcIIX4SUjKh5jZrbuIzNEwVO4T5J47VaMJjsr8AGOqUBnKEDgQPJyRmUxBdnpdU%2BgXRCEVpdbAteS9nIHOq0cZ0EE4K%2Fqk6zsZj515AtURkZddeZF5qrfXLoa9hkKEWO1tA1qkEaZvRqw4Cz2HlcC7XQbuCWjpXWLw5j1KtQzSPleurpt0%2BrAf%2Fi0ZrCQWYIHCkXGLvMRIdovhRQRWGFvw4F3RAOype6N3VqVrK0F2%2F2mIHF3n2nclzKpzVu%2F9zh8UZaroDI&X-Amz-Signature=acf6127c6cb9052a7eb89714e5d0ee20067b72bd548489c2d79148436bd07f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RJDH2J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUV92Xmb%2Bwvpk36DQD%2BZ8EmHXBfRE9%2FUqqqE5ww%2Bf4PAiEApCXpXcaw27fqWlcoutJ7cr%2F7590782gojDvOFrYeBa4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEmFybltlcbuajii5CrcA%2FHXkUxK2GgbgTTOMZyHif90M5aRbIfcZaHr6xIRAhQTIEyug44ZY%2BSYwvmoDA9TphfcBlJyfz%2BWpf4hfDLQGaEvWba%2F%2BvtwQo2sGTvfxX1exzmBeZFf3DjdejMB5MVgI9BmgKyURskk1sTd04R10xShFox%2Fjosy4Lu01bkF%2BeCcP35wITCmA%2FodHKU6lxmJjk52THL2Pjhvkbb0pOFzg4fJBmuOQOqGBBp3XLNjdjCdx1ME%2FiBmXoZpe8EH8xE4I47FR0JotjfUt60EIkqID4bGNSammuZTWb4n0R3Z3Luqsf6aWSsY22GhM0G1QzY2fRnFoBxtTR%2FpBfBuMyCu0w5ZUQLeuK%2BUxrizSIZcTM%2FGENWnlX4RDcgJmdMmlWYxp5T0QXpSxrKrXtXgEhmLdLHGgCz%2FjUL9vaaMTN%2B4Rv97NH6Z4VYhZX40YH4MELkphdlKNkvRGXbQaej9LkUIsCms4B2CxHGNa6mCgEpLW4nChIWsIFwYiOr%2F8JKhqO4bcRd8niHUCAf8rf9U%2FjnkMBLCAvq8FbgCW7D1tffMUo3KQGO67g7bCqLH5RVHU5Wscg1OCeBl%2F%2BxaDqhEVY75QAqlGVtiQcIIX4SUjKh5jZrbuIzNEwVO4T5J47VaMJjsr8AGOqUBnKEDgQPJyRmUxBdnpdU%2BgXRCEVpdbAteS9nIHOq0cZ0EE4K%2Fqk6zsZj515AtURkZddeZF5qrfXLoa9hkKEWO1tA1qkEaZvRqw4Cz2HlcC7XQbuCWjpXWLw5j1KtQzSPleurpt0%2BrAf%2Fi0ZrCQWYIHCkXGLvMRIdovhRQRWGFvw4F3RAOype6N3VqVrK0F2%2F2mIHF3n2nclzKpzVu%2F9zh8UZaroDI&X-Amz-Signature=ee3cadf1e04a59f7fda0fa23a02b3514665a25ae8c05a39d0410065da57c45a2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RJDH2J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUV92Xmb%2Bwvpk36DQD%2BZ8EmHXBfRE9%2FUqqqE5ww%2Bf4PAiEApCXpXcaw27fqWlcoutJ7cr%2F7590782gojDvOFrYeBa4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEmFybltlcbuajii5CrcA%2FHXkUxK2GgbgTTOMZyHif90M5aRbIfcZaHr6xIRAhQTIEyug44ZY%2BSYwvmoDA9TphfcBlJyfz%2BWpf4hfDLQGaEvWba%2F%2BvtwQo2sGTvfxX1exzmBeZFf3DjdejMB5MVgI9BmgKyURskk1sTd04R10xShFox%2Fjosy4Lu01bkF%2BeCcP35wITCmA%2FodHKU6lxmJjk52THL2Pjhvkbb0pOFzg4fJBmuOQOqGBBp3XLNjdjCdx1ME%2FiBmXoZpe8EH8xE4I47FR0JotjfUt60EIkqID4bGNSammuZTWb4n0R3Z3Luqsf6aWSsY22GhM0G1QzY2fRnFoBxtTR%2FpBfBuMyCu0w5ZUQLeuK%2BUxrizSIZcTM%2FGENWnlX4RDcgJmdMmlWYxp5T0QXpSxrKrXtXgEhmLdLHGgCz%2FjUL9vaaMTN%2B4Rv97NH6Z4VYhZX40YH4MELkphdlKNkvRGXbQaej9LkUIsCms4B2CxHGNa6mCgEpLW4nChIWsIFwYiOr%2F8JKhqO4bcRd8niHUCAf8rf9U%2FjnkMBLCAvq8FbgCW7D1tffMUo3KQGO67g7bCqLH5RVHU5Wscg1OCeBl%2F%2BxaDqhEVY75QAqlGVtiQcIIX4SUjKh5jZrbuIzNEwVO4T5J47VaMJjsr8AGOqUBnKEDgQPJyRmUxBdnpdU%2BgXRCEVpdbAteS9nIHOq0cZ0EE4K%2Fqk6zsZj515AtURkZddeZF5qrfXLoa9hkKEWO1tA1qkEaZvRqw4Cz2HlcC7XQbuCWjpXWLw5j1KtQzSPleurpt0%2BrAf%2Fi0ZrCQWYIHCkXGLvMRIdovhRQRWGFvw4F3RAOype6N3VqVrK0F2%2F2mIHF3n2nclzKpzVu%2F9zh8UZaroDI&X-Amz-Signature=ec4138e475ed0d9f33ebe930ec55160cd9452a53464ff5264776615217fa7f69&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RJDH2J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUV92Xmb%2Bwvpk36DQD%2BZ8EmHXBfRE9%2FUqqqE5ww%2Bf4PAiEApCXpXcaw27fqWlcoutJ7cr%2F7590782gojDvOFrYeBa4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEmFybltlcbuajii5CrcA%2FHXkUxK2GgbgTTOMZyHif90M5aRbIfcZaHr6xIRAhQTIEyug44ZY%2BSYwvmoDA9TphfcBlJyfz%2BWpf4hfDLQGaEvWba%2F%2BvtwQo2sGTvfxX1exzmBeZFf3DjdejMB5MVgI9BmgKyURskk1sTd04R10xShFox%2Fjosy4Lu01bkF%2BeCcP35wITCmA%2FodHKU6lxmJjk52THL2Pjhvkbb0pOFzg4fJBmuOQOqGBBp3XLNjdjCdx1ME%2FiBmXoZpe8EH8xE4I47FR0JotjfUt60EIkqID4bGNSammuZTWb4n0R3Z3Luqsf6aWSsY22GhM0G1QzY2fRnFoBxtTR%2FpBfBuMyCu0w5ZUQLeuK%2BUxrizSIZcTM%2FGENWnlX4RDcgJmdMmlWYxp5T0QXpSxrKrXtXgEhmLdLHGgCz%2FjUL9vaaMTN%2B4Rv97NH6Z4VYhZX40YH4MELkphdlKNkvRGXbQaej9LkUIsCms4B2CxHGNa6mCgEpLW4nChIWsIFwYiOr%2F8JKhqO4bcRd8niHUCAf8rf9U%2FjnkMBLCAvq8FbgCW7D1tffMUo3KQGO67g7bCqLH5RVHU5Wscg1OCeBl%2F%2BxaDqhEVY75QAqlGVtiQcIIX4SUjKh5jZrbuIzNEwVO4T5J47VaMJjsr8AGOqUBnKEDgQPJyRmUxBdnpdU%2BgXRCEVpdbAteS9nIHOq0cZ0EE4K%2Fqk6zsZj515AtURkZddeZF5qrfXLoa9hkKEWO1tA1qkEaZvRqw4Cz2HlcC7XQbuCWjpXWLw5j1KtQzSPleurpt0%2BrAf%2Fi0ZrCQWYIHCkXGLvMRIdovhRQRWGFvw4F3RAOype6N3VqVrK0F2%2F2mIHF3n2nclzKpzVu%2F9zh8UZaroDI&X-Amz-Signature=c80857278564df9422f1ed94009f9465678e9c44fae6515b2e289c7f26d6adbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RJDH2J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUV92Xmb%2Bwvpk36DQD%2BZ8EmHXBfRE9%2FUqqqE5ww%2Bf4PAiEApCXpXcaw27fqWlcoutJ7cr%2F7590782gojDvOFrYeBa4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEmFybltlcbuajii5CrcA%2FHXkUxK2GgbgTTOMZyHif90M5aRbIfcZaHr6xIRAhQTIEyug44ZY%2BSYwvmoDA9TphfcBlJyfz%2BWpf4hfDLQGaEvWba%2F%2BvtwQo2sGTvfxX1exzmBeZFf3DjdejMB5MVgI9BmgKyURskk1sTd04R10xShFox%2Fjosy4Lu01bkF%2BeCcP35wITCmA%2FodHKU6lxmJjk52THL2Pjhvkbb0pOFzg4fJBmuOQOqGBBp3XLNjdjCdx1ME%2FiBmXoZpe8EH8xE4I47FR0JotjfUt60EIkqID4bGNSammuZTWb4n0R3Z3Luqsf6aWSsY22GhM0G1QzY2fRnFoBxtTR%2FpBfBuMyCu0w5ZUQLeuK%2BUxrizSIZcTM%2FGENWnlX4RDcgJmdMmlWYxp5T0QXpSxrKrXtXgEhmLdLHGgCz%2FjUL9vaaMTN%2B4Rv97NH6Z4VYhZX40YH4MELkphdlKNkvRGXbQaej9LkUIsCms4B2CxHGNa6mCgEpLW4nChIWsIFwYiOr%2F8JKhqO4bcRd8niHUCAf8rf9U%2FjnkMBLCAvq8FbgCW7D1tffMUo3KQGO67g7bCqLH5RVHU5Wscg1OCeBl%2F%2BxaDqhEVY75QAqlGVtiQcIIX4SUjKh5jZrbuIzNEwVO4T5J47VaMJjsr8AGOqUBnKEDgQPJyRmUxBdnpdU%2BgXRCEVpdbAteS9nIHOq0cZ0EE4K%2Fqk6zsZj515AtURkZddeZF5qrfXLoa9hkKEWO1tA1qkEaZvRqw4Cz2HlcC7XQbuCWjpXWLw5j1KtQzSPleurpt0%2BrAf%2Fi0ZrCQWYIHCkXGLvMRIdovhRQRWGFvw4F3RAOype6N3VqVrK0F2%2F2mIHF3n2nclzKpzVu%2F9zh8UZaroDI&X-Amz-Signature=17cf76ddc24699636f2d8ae993a9189140e83947b79ad4c916007cafce88701d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
