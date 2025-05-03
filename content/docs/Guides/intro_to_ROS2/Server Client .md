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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2A5XVN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEdIMj4GUr0B8o2Xa0CJMkN6QM4u7rTgdUv8UCs7g73NAiBe13TX3qvhzg%2FBPzLsIbgvVq1atRoF%2B0ncwEqqv1ZP6CqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkFSUuJk4aqK%2FTG30KtwDBgU5mBY1PrHo9PFRMzcrMcOUiTyxKcuApXNOK%2BhGxoGkDyLZqlKdrpS5mdJZYa497eUnBPeeEz8%2F3nKCbbS5891v2ose%2BJdkOkJWdTGJZmuQjYp%2B4Lv%2BcKTBMPmWXfS4otUxwIeMy5gVgUdvg2rlktLBEYTa20xlaSijmqfy%2FC8dCEE2TQv1JZHNAaLF9xJML2tapo8Qnl6L%2BnzAsN8BYDNLQGhK1yY8Iq3N3xfXY%2FBEtEEuB3KNsCGRTb8UelLP34i6udHzBcYoGCAZdlogC9xvSd6ASsLIFthA5bxu0x2QIrQu6NaT9a61528Av8OqrfahZIK7NaSrRdCszOGMcEToJJPg2hzOu%2F0IaPkGBXMayizj%2BnObx145CcE4t%2FIaDQuezexlyhYxKacu84HDTWQYMMXlywYQ2Exi9lRJogTO61qbKlThvIrvEDr3dVLurbv%2BvLX7ZMzAUL3cYzmWokqF6UBrtr%2Fx7KoCDx1cXdE7%2F7Yp2mMKP76IM1vEylYOgpDXLNQrZesf2xxHUdiltAu2fJew0wqaTFYdB%2FaAyH6QnFE0uKSWvv9NQiA6wD%2FtMjxusoXk5Hx87hna30H%2B549J%2BzDjw9x%2FN6vSxy38p%2B3lSVu9d%2B27iRaAWDUw%2Bs3YwAY6pgHj7FRtMXm0ONQ7MUDHCMnAPQziyO8%2FOPNmUqiN75Nh22T1ktQhz4K0WSPU3EEXt7HtzklznhIp4MGKF7AVBLRadocvF0ha%2BdL7wOnxprKSD4v6dyuHsGPQOnuIkZZg1195XH7wBSlVT%2B%2FO6%2FrkMZPlr9%2FYnGjehzTrxwb9Dahuah%2FI%2BQqldPzruem2FejTTDdfPZCZNsd94c%2FMx%2FA6RWKSebRt5t1Z&X-Amz-Signature=39a40fbe715697685b11f1de4870e7678d573654dc0ecef036b649bfd3a855ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2A5XVN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEdIMj4GUr0B8o2Xa0CJMkN6QM4u7rTgdUv8UCs7g73NAiBe13TX3qvhzg%2FBPzLsIbgvVq1atRoF%2B0ncwEqqv1ZP6CqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkFSUuJk4aqK%2FTG30KtwDBgU5mBY1PrHo9PFRMzcrMcOUiTyxKcuApXNOK%2BhGxoGkDyLZqlKdrpS5mdJZYa497eUnBPeeEz8%2F3nKCbbS5891v2ose%2BJdkOkJWdTGJZmuQjYp%2B4Lv%2BcKTBMPmWXfS4otUxwIeMy5gVgUdvg2rlktLBEYTa20xlaSijmqfy%2FC8dCEE2TQv1JZHNAaLF9xJML2tapo8Qnl6L%2BnzAsN8BYDNLQGhK1yY8Iq3N3xfXY%2FBEtEEuB3KNsCGRTb8UelLP34i6udHzBcYoGCAZdlogC9xvSd6ASsLIFthA5bxu0x2QIrQu6NaT9a61528Av8OqrfahZIK7NaSrRdCszOGMcEToJJPg2hzOu%2F0IaPkGBXMayizj%2BnObx145CcE4t%2FIaDQuezexlyhYxKacu84HDTWQYMMXlywYQ2Exi9lRJogTO61qbKlThvIrvEDr3dVLurbv%2BvLX7ZMzAUL3cYzmWokqF6UBrtr%2Fx7KoCDx1cXdE7%2F7Yp2mMKP76IM1vEylYOgpDXLNQrZesf2xxHUdiltAu2fJew0wqaTFYdB%2FaAyH6QnFE0uKSWvv9NQiA6wD%2FtMjxusoXk5Hx87hna30H%2B549J%2BzDjw9x%2FN6vSxy38p%2B3lSVu9d%2B27iRaAWDUw%2Bs3YwAY6pgHj7FRtMXm0ONQ7MUDHCMnAPQziyO8%2FOPNmUqiN75Nh22T1ktQhz4K0WSPU3EEXt7HtzklznhIp4MGKF7AVBLRadocvF0ha%2BdL7wOnxprKSD4v6dyuHsGPQOnuIkZZg1195XH7wBSlVT%2B%2FO6%2FrkMZPlr9%2FYnGjehzTrxwb9Dahuah%2FI%2BQqldPzruem2FejTTDdfPZCZNsd94c%2FMx%2FA6RWKSebRt5t1Z&X-Amz-Signature=8d13faf376cb33444b2ef54ede9318de730f1da5ff4fefa1f8100edfacdc7dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2A5XVN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEdIMj4GUr0B8o2Xa0CJMkN6QM4u7rTgdUv8UCs7g73NAiBe13TX3qvhzg%2FBPzLsIbgvVq1atRoF%2B0ncwEqqv1ZP6CqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkFSUuJk4aqK%2FTG30KtwDBgU5mBY1PrHo9PFRMzcrMcOUiTyxKcuApXNOK%2BhGxoGkDyLZqlKdrpS5mdJZYa497eUnBPeeEz8%2F3nKCbbS5891v2ose%2BJdkOkJWdTGJZmuQjYp%2B4Lv%2BcKTBMPmWXfS4otUxwIeMy5gVgUdvg2rlktLBEYTa20xlaSijmqfy%2FC8dCEE2TQv1JZHNAaLF9xJML2tapo8Qnl6L%2BnzAsN8BYDNLQGhK1yY8Iq3N3xfXY%2FBEtEEuB3KNsCGRTb8UelLP34i6udHzBcYoGCAZdlogC9xvSd6ASsLIFthA5bxu0x2QIrQu6NaT9a61528Av8OqrfahZIK7NaSrRdCszOGMcEToJJPg2hzOu%2F0IaPkGBXMayizj%2BnObx145CcE4t%2FIaDQuezexlyhYxKacu84HDTWQYMMXlywYQ2Exi9lRJogTO61qbKlThvIrvEDr3dVLurbv%2BvLX7ZMzAUL3cYzmWokqF6UBrtr%2Fx7KoCDx1cXdE7%2F7Yp2mMKP76IM1vEylYOgpDXLNQrZesf2xxHUdiltAu2fJew0wqaTFYdB%2FaAyH6QnFE0uKSWvv9NQiA6wD%2FtMjxusoXk5Hx87hna30H%2B549J%2BzDjw9x%2FN6vSxy38p%2B3lSVu9d%2B27iRaAWDUw%2Bs3YwAY6pgHj7FRtMXm0ONQ7MUDHCMnAPQziyO8%2FOPNmUqiN75Nh22T1ktQhz4K0WSPU3EEXt7HtzklznhIp4MGKF7AVBLRadocvF0ha%2BdL7wOnxprKSD4v6dyuHsGPQOnuIkZZg1195XH7wBSlVT%2B%2FO6%2FrkMZPlr9%2FYnGjehzTrxwb9Dahuah%2FI%2BQqldPzruem2FejTTDdfPZCZNsd94c%2FMx%2FA6RWKSebRt5t1Z&X-Amz-Signature=d40f67b5d30b3eac2b3e7e251be2dae70688d2ce186f7fe964f2267c9127429b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2A5XVN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEdIMj4GUr0B8o2Xa0CJMkN6QM4u7rTgdUv8UCs7g73NAiBe13TX3qvhzg%2FBPzLsIbgvVq1atRoF%2B0ncwEqqv1ZP6CqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkFSUuJk4aqK%2FTG30KtwDBgU5mBY1PrHo9PFRMzcrMcOUiTyxKcuApXNOK%2BhGxoGkDyLZqlKdrpS5mdJZYa497eUnBPeeEz8%2F3nKCbbS5891v2ose%2BJdkOkJWdTGJZmuQjYp%2B4Lv%2BcKTBMPmWXfS4otUxwIeMy5gVgUdvg2rlktLBEYTa20xlaSijmqfy%2FC8dCEE2TQv1JZHNAaLF9xJML2tapo8Qnl6L%2BnzAsN8BYDNLQGhK1yY8Iq3N3xfXY%2FBEtEEuB3KNsCGRTb8UelLP34i6udHzBcYoGCAZdlogC9xvSd6ASsLIFthA5bxu0x2QIrQu6NaT9a61528Av8OqrfahZIK7NaSrRdCszOGMcEToJJPg2hzOu%2F0IaPkGBXMayizj%2BnObx145CcE4t%2FIaDQuezexlyhYxKacu84HDTWQYMMXlywYQ2Exi9lRJogTO61qbKlThvIrvEDr3dVLurbv%2BvLX7ZMzAUL3cYzmWokqF6UBrtr%2Fx7KoCDx1cXdE7%2F7Yp2mMKP76IM1vEylYOgpDXLNQrZesf2xxHUdiltAu2fJew0wqaTFYdB%2FaAyH6QnFE0uKSWvv9NQiA6wD%2FtMjxusoXk5Hx87hna30H%2B549J%2BzDjw9x%2FN6vSxy38p%2B3lSVu9d%2B27iRaAWDUw%2Bs3YwAY6pgHj7FRtMXm0ONQ7MUDHCMnAPQziyO8%2FOPNmUqiN75Nh22T1ktQhz4K0WSPU3EEXt7HtzklznhIp4MGKF7AVBLRadocvF0ha%2BdL7wOnxprKSD4v6dyuHsGPQOnuIkZZg1195XH7wBSlVT%2B%2FO6%2FrkMZPlr9%2FYnGjehzTrxwb9Dahuah%2FI%2BQqldPzruem2FejTTDdfPZCZNsd94c%2FMx%2FA6RWKSebRt5t1Z&X-Amz-Signature=d4fe4f0da0be39be31ff8f720c129c73b7957b2201add74622bf076c34ad2a58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2A5XVN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEdIMj4GUr0B8o2Xa0CJMkN6QM4u7rTgdUv8UCs7g73NAiBe13TX3qvhzg%2FBPzLsIbgvVq1atRoF%2B0ncwEqqv1ZP6CqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkFSUuJk4aqK%2FTG30KtwDBgU5mBY1PrHo9PFRMzcrMcOUiTyxKcuApXNOK%2BhGxoGkDyLZqlKdrpS5mdJZYa497eUnBPeeEz8%2F3nKCbbS5891v2ose%2BJdkOkJWdTGJZmuQjYp%2B4Lv%2BcKTBMPmWXfS4otUxwIeMy5gVgUdvg2rlktLBEYTa20xlaSijmqfy%2FC8dCEE2TQv1JZHNAaLF9xJML2tapo8Qnl6L%2BnzAsN8BYDNLQGhK1yY8Iq3N3xfXY%2FBEtEEuB3KNsCGRTb8UelLP34i6udHzBcYoGCAZdlogC9xvSd6ASsLIFthA5bxu0x2QIrQu6NaT9a61528Av8OqrfahZIK7NaSrRdCszOGMcEToJJPg2hzOu%2F0IaPkGBXMayizj%2BnObx145CcE4t%2FIaDQuezexlyhYxKacu84HDTWQYMMXlywYQ2Exi9lRJogTO61qbKlThvIrvEDr3dVLurbv%2BvLX7ZMzAUL3cYzmWokqF6UBrtr%2Fx7KoCDx1cXdE7%2F7Yp2mMKP76IM1vEylYOgpDXLNQrZesf2xxHUdiltAu2fJew0wqaTFYdB%2FaAyH6QnFE0uKSWvv9NQiA6wD%2FtMjxusoXk5Hx87hna30H%2B549J%2BzDjw9x%2FN6vSxy38p%2B3lSVu9d%2B27iRaAWDUw%2Bs3YwAY6pgHj7FRtMXm0ONQ7MUDHCMnAPQziyO8%2FOPNmUqiN75Nh22T1ktQhz4K0WSPU3EEXt7HtzklznhIp4MGKF7AVBLRadocvF0ha%2BdL7wOnxprKSD4v6dyuHsGPQOnuIkZZg1195XH7wBSlVT%2B%2FO6%2FrkMZPlr9%2FYnGjehzTrxwb9Dahuah%2FI%2BQqldPzruem2FejTTDdfPZCZNsd94c%2FMx%2FA6RWKSebRt5t1Z&X-Amz-Signature=091644099222462772bd2badc247222a7b4de2c5c9cad5d1df02340dcfd75d57&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
