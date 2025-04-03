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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFUBJZM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZAyFQsepjfoUph6QRFIkQCxtcOEUQCeHg%2FOzP7iYnbAiBN4D9H8GgFKVYzntbsCCjXxqQMvezbBKXygbnT6mepHiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEccpxPOwTiJFw%2BNKKtwDgadBmhSFm8mDE1gebIiMS2cQJ79quoQfed9F164El8tZpmT%2FrDKwK3ln0kWKKmS71b4P5gAeKQrOGnURh5HEfJlgSDq2pwsiodWkin3rIDGu6BAGo6%2BrMHgd3m5VMTqfOmES7ain%2BwOgxrBRiBeukro8KCn6LkaPc5d7m8GE%2FdPRrHyAYUr2Wm0IL9ggdelxB%2BYof1m61tCmGvV%2F9zntgYQiCm4WiMXRpiLfwX%2FhfgwrXAAd3Km%2FRVnjTpw2j0skP240Fgg7YC94y%2Fwr3wHJ40H%2Fyr1LHhVJIKZiGhNqaDfEVcNOcXKr2wsT8UMt%2B9Ryhz9kWVAASIG9qkvjQ31KFDvPqm5Ur64Hm7v6JDkHFUY7cSs%2FKOODhsxQ7sD3l29h76iGkW3UdwCu9Gx0NAZ9fa%2FIk1jtbfhWKeq9to3A80ZJQ1XoxaT45fRp9r2zWr4MqQ%2BpyRXZZQdf%2Bu8zT5U23GqCjBO5WzeyTgVX8iEpmFs3ktFQwQagIzOyBYITwUghkTN1I0y%2FBbwHfeYcmWWuxlVwOQQPTQ5Kq8Hx4ZoSgIBhu99b10Ea3SSOvYrlSDbqrHYxN3zRRL804cLD1751Lw2S4p269e0bE2okqMWeM6P%2FzlTZf5u4HcR%2F6%2Bsw9%2Bq7vwY6pgEOK3INkgMqqCyjozhRjGyXjBPiohZ6aZQB847c%2F8W3ZVNFX5Mkp0Il8XWKBmrGKEB5vIo665HqsLYtR%2BSygI1rcxSy9yL3fYc%2FpBB1v%2BLiWiwbqOGVufWAwxBpfrJBBZh5R2BseHWJt8UixFyFQI6UHomvZLipCdN0HS5VPP1xOknXFWrWo89bQwsnp%2BjW2CFxa3oDK73%2FmSkLLgxEfB1SfKQRoVqz&X-Amz-Signature=9b76a467d5fa3c11d593dfbe7155bbfeb2cf3678b6f3aa006bdcaa7e628b7bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFUBJZM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZAyFQsepjfoUph6QRFIkQCxtcOEUQCeHg%2FOzP7iYnbAiBN4D9H8GgFKVYzntbsCCjXxqQMvezbBKXygbnT6mepHiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEccpxPOwTiJFw%2BNKKtwDgadBmhSFm8mDE1gebIiMS2cQJ79quoQfed9F164El8tZpmT%2FrDKwK3ln0kWKKmS71b4P5gAeKQrOGnURh5HEfJlgSDq2pwsiodWkin3rIDGu6BAGo6%2BrMHgd3m5VMTqfOmES7ain%2BwOgxrBRiBeukro8KCn6LkaPc5d7m8GE%2FdPRrHyAYUr2Wm0IL9ggdelxB%2BYof1m61tCmGvV%2F9zntgYQiCm4WiMXRpiLfwX%2FhfgwrXAAd3Km%2FRVnjTpw2j0skP240Fgg7YC94y%2Fwr3wHJ40H%2Fyr1LHhVJIKZiGhNqaDfEVcNOcXKr2wsT8UMt%2B9Ryhz9kWVAASIG9qkvjQ31KFDvPqm5Ur64Hm7v6JDkHFUY7cSs%2FKOODhsxQ7sD3l29h76iGkW3UdwCu9Gx0NAZ9fa%2FIk1jtbfhWKeq9to3A80ZJQ1XoxaT45fRp9r2zWr4MqQ%2BpyRXZZQdf%2Bu8zT5U23GqCjBO5WzeyTgVX8iEpmFs3ktFQwQagIzOyBYITwUghkTN1I0y%2FBbwHfeYcmWWuxlVwOQQPTQ5Kq8Hx4ZoSgIBhu99b10Ea3SSOvYrlSDbqrHYxN3zRRL804cLD1751Lw2S4p269e0bE2okqMWeM6P%2FzlTZf5u4HcR%2F6%2Bsw9%2Bq7vwY6pgEOK3INkgMqqCyjozhRjGyXjBPiohZ6aZQB847c%2F8W3ZVNFX5Mkp0Il8XWKBmrGKEB5vIo665HqsLYtR%2BSygI1rcxSy9yL3fYc%2FpBB1v%2BLiWiwbqOGVufWAwxBpfrJBBZh5R2BseHWJt8UixFyFQI6UHomvZLipCdN0HS5VPP1xOknXFWrWo89bQwsnp%2BjW2CFxa3oDK73%2FmSkLLgxEfB1SfKQRoVqz&X-Amz-Signature=c8bf43b9555551a9a2d10e217af277f5c264c1d212ca3630bb8c03c72dc453f3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFUBJZM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZAyFQsepjfoUph6QRFIkQCxtcOEUQCeHg%2FOzP7iYnbAiBN4D9H8GgFKVYzntbsCCjXxqQMvezbBKXygbnT6mepHiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEccpxPOwTiJFw%2BNKKtwDgadBmhSFm8mDE1gebIiMS2cQJ79quoQfed9F164El8tZpmT%2FrDKwK3ln0kWKKmS71b4P5gAeKQrOGnURh5HEfJlgSDq2pwsiodWkin3rIDGu6BAGo6%2BrMHgd3m5VMTqfOmES7ain%2BwOgxrBRiBeukro8KCn6LkaPc5d7m8GE%2FdPRrHyAYUr2Wm0IL9ggdelxB%2BYof1m61tCmGvV%2F9zntgYQiCm4WiMXRpiLfwX%2FhfgwrXAAd3Km%2FRVnjTpw2j0skP240Fgg7YC94y%2Fwr3wHJ40H%2Fyr1LHhVJIKZiGhNqaDfEVcNOcXKr2wsT8UMt%2B9Ryhz9kWVAASIG9qkvjQ31KFDvPqm5Ur64Hm7v6JDkHFUY7cSs%2FKOODhsxQ7sD3l29h76iGkW3UdwCu9Gx0NAZ9fa%2FIk1jtbfhWKeq9to3A80ZJQ1XoxaT45fRp9r2zWr4MqQ%2BpyRXZZQdf%2Bu8zT5U23GqCjBO5WzeyTgVX8iEpmFs3ktFQwQagIzOyBYITwUghkTN1I0y%2FBbwHfeYcmWWuxlVwOQQPTQ5Kq8Hx4ZoSgIBhu99b10Ea3SSOvYrlSDbqrHYxN3zRRL804cLD1751Lw2S4p269e0bE2okqMWeM6P%2FzlTZf5u4HcR%2F6%2Bsw9%2Bq7vwY6pgEOK3INkgMqqCyjozhRjGyXjBPiohZ6aZQB847c%2F8W3ZVNFX5Mkp0Il8XWKBmrGKEB5vIo665HqsLYtR%2BSygI1rcxSy9yL3fYc%2FpBB1v%2BLiWiwbqOGVufWAwxBpfrJBBZh5R2BseHWJt8UixFyFQI6UHomvZLipCdN0HS5VPP1xOknXFWrWo89bQwsnp%2BjW2CFxa3oDK73%2FmSkLLgxEfB1SfKQRoVqz&X-Amz-Signature=4db3f241ff1e3268a0f430d059afd4edf9bf551a98ca054a992492b3a71142bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFUBJZM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZAyFQsepjfoUph6QRFIkQCxtcOEUQCeHg%2FOzP7iYnbAiBN4D9H8GgFKVYzntbsCCjXxqQMvezbBKXygbnT6mepHiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEccpxPOwTiJFw%2BNKKtwDgadBmhSFm8mDE1gebIiMS2cQJ79quoQfed9F164El8tZpmT%2FrDKwK3ln0kWKKmS71b4P5gAeKQrOGnURh5HEfJlgSDq2pwsiodWkin3rIDGu6BAGo6%2BrMHgd3m5VMTqfOmES7ain%2BwOgxrBRiBeukro8KCn6LkaPc5d7m8GE%2FdPRrHyAYUr2Wm0IL9ggdelxB%2BYof1m61tCmGvV%2F9zntgYQiCm4WiMXRpiLfwX%2FhfgwrXAAd3Km%2FRVnjTpw2j0skP240Fgg7YC94y%2Fwr3wHJ40H%2Fyr1LHhVJIKZiGhNqaDfEVcNOcXKr2wsT8UMt%2B9Ryhz9kWVAASIG9qkvjQ31KFDvPqm5Ur64Hm7v6JDkHFUY7cSs%2FKOODhsxQ7sD3l29h76iGkW3UdwCu9Gx0NAZ9fa%2FIk1jtbfhWKeq9to3A80ZJQ1XoxaT45fRp9r2zWr4MqQ%2BpyRXZZQdf%2Bu8zT5U23GqCjBO5WzeyTgVX8iEpmFs3ktFQwQagIzOyBYITwUghkTN1I0y%2FBbwHfeYcmWWuxlVwOQQPTQ5Kq8Hx4ZoSgIBhu99b10Ea3SSOvYrlSDbqrHYxN3zRRL804cLD1751Lw2S4p269e0bE2okqMWeM6P%2FzlTZf5u4HcR%2F6%2Bsw9%2Bq7vwY6pgEOK3INkgMqqCyjozhRjGyXjBPiohZ6aZQB847c%2F8W3ZVNFX5Mkp0Il8XWKBmrGKEB5vIo665HqsLYtR%2BSygI1rcxSy9yL3fYc%2FpBB1v%2BLiWiwbqOGVufWAwxBpfrJBBZh5R2BseHWJt8UixFyFQI6UHomvZLipCdN0HS5VPP1xOknXFWrWo89bQwsnp%2BjW2CFxa3oDK73%2FmSkLLgxEfB1SfKQRoVqz&X-Amz-Signature=d8fb9b15b68508bc1d74a920e219efa1def1cc8b5f6d0679d0a1e0e13a58aeea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFUBJZM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZAyFQsepjfoUph6QRFIkQCxtcOEUQCeHg%2FOzP7iYnbAiBN4D9H8GgFKVYzntbsCCjXxqQMvezbBKXygbnT6mepHiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEccpxPOwTiJFw%2BNKKtwDgadBmhSFm8mDE1gebIiMS2cQJ79quoQfed9F164El8tZpmT%2FrDKwK3ln0kWKKmS71b4P5gAeKQrOGnURh5HEfJlgSDq2pwsiodWkin3rIDGu6BAGo6%2BrMHgd3m5VMTqfOmES7ain%2BwOgxrBRiBeukro8KCn6LkaPc5d7m8GE%2FdPRrHyAYUr2Wm0IL9ggdelxB%2BYof1m61tCmGvV%2F9zntgYQiCm4WiMXRpiLfwX%2FhfgwrXAAd3Km%2FRVnjTpw2j0skP240Fgg7YC94y%2Fwr3wHJ40H%2Fyr1LHhVJIKZiGhNqaDfEVcNOcXKr2wsT8UMt%2B9Ryhz9kWVAASIG9qkvjQ31KFDvPqm5Ur64Hm7v6JDkHFUY7cSs%2FKOODhsxQ7sD3l29h76iGkW3UdwCu9Gx0NAZ9fa%2FIk1jtbfhWKeq9to3A80ZJQ1XoxaT45fRp9r2zWr4MqQ%2BpyRXZZQdf%2Bu8zT5U23GqCjBO5WzeyTgVX8iEpmFs3ktFQwQagIzOyBYITwUghkTN1I0y%2FBbwHfeYcmWWuxlVwOQQPTQ5Kq8Hx4ZoSgIBhu99b10Ea3SSOvYrlSDbqrHYxN3zRRL804cLD1751Lw2S4p269e0bE2okqMWeM6P%2FzlTZf5u4HcR%2F6%2Bsw9%2Bq7vwY6pgEOK3INkgMqqCyjozhRjGyXjBPiohZ6aZQB847c%2F8W3ZVNFX5Mkp0Il8XWKBmrGKEB5vIo665HqsLYtR%2BSygI1rcxSy9yL3fYc%2FpBB1v%2BLiWiwbqOGVufWAwxBpfrJBBZh5R2BseHWJt8UixFyFQI6UHomvZLipCdN0HS5VPP1xOknXFWrWo89bQwsnp%2BjW2CFxa3oDK73%2FmSkLLgxEfB1SfKQRoVqz&X-Amz-Signature=1c5a02ddbef3ded70f4bc797e0a0f4b93588e047d11b69ddb5a5d1e406987edb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
