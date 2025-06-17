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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5BGB6U%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0NUMV%2FiWSHTyv8lW3SERs%2BwZ6stjYSZ6f0vu5KmcBTAiEAxKvPLsxrmUUZ%2BdkZ4XvNU%2FBveWQDoBa3YeFry4poUpQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDE17wkIp4psoSp2vkyrcA9LPUP1%2BvMME1qN%2F6mCxaMF4UsvgdXHr0CQKZBizUSjKEr7xvQU8CZpQfzgPyUfmAWDxRaISlM4zESrlGfUdml29Cho%2B4JD0qGxdHHRvtUWRGr4XlRWiOucO%2FtgjBmHW%2FGhb86WUPndBMGoW8MhCkbs2rB0B8NNBbSE1xLCuyWjsaNEQXSadta4N3b8YdVyVVCR1JpCBi0VxrPwiAcEqp1yBbhoT75uZ0bxPiyWir1mxxRKor2LGPQySd%2FT5IrBI9oKp9nmeYGlbJgWtmTED9tx3CVRievG7Uh%2B1YJsGjyvyNhppIDcCjyiKFw2O6Hdq1PH6JIrSS6EyP4KMqntFkBZDC0ajrfjwILTRft8iAqeVPKPSSsnSIAOs2%2B3rxo44w71FM1emO7s6b54HSt%2BtQBqMLG2E1bMdS1V1WF56OepOinH6epgX1oMp4BzmVy7LZhE2tAPV3jrgI3aczhoBov9vuseST8QAdqbfKaKoGFMbICvKqfdsA3QYYml4hHSvwchbzuGrHs4FcoCUX90kRZ3FAq0aAmV8UbQt%2F8NKIMsAJfPnmrArGnglCVhNnw%2BIuPqwpID5Ee2FANz34CN797JE0PITyhRDEqp1HELjJPCv%2F0flI2Ahl6igp9mYMJ2Mw8IGOqUBu%2BptyUdaXhVigVXLnBkMOV36%2FQSSnh51m9m6CHT%2FWtCSI9F9ZHy9M5Ti9%2FXRivwCdhqjjsExDO%2BBPRpRlVHv9QuQr423%2FoGYbQvqXOPBaE%2BWwx%2F1sz7NW1WnZX9%2FSTh4mEUxhGshIsVyjOP29n6jxG9zsSTVJ0z%2BOAlTreO9WARE%2BNcOevWZaVMj%2Fgh%2BtlptMsEdlAtZT%2BgBYTGURQAwP2qIQ61W&X-Amz-Signature=6d9b415b071dbc0d62655f6d535688e57d19ad2a4c278e8e6e4c472f0ad6e1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5BGB6U%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0NUMV%2FiWSHTyv8lW3SERs%2BwZ6stjYSZ6f0vu5KmcBTAiEAxKvPLsxrmUUZ%2BdkZ4XvNU%2FBveWQDoBa3YeFry4poUpQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDE17wkIp4psoSp2vkyrcA9LPUP1%2BvMME1qN%2F6mCxaMF4UsvgdXHr0CQKZBizUSjKEr7xvQU8CZpQfzgPyUfmAWDxRaISlM4zESrlGfUdml29Cho%2B4JD0qGxdHHRvtUWRGr4XlRWiOucO%2FtgjBmHW%2FGhb86WUPndBMGoW8MhCkbs2rB0B8NNBbSE1xLCuyWjsaNEQXSadta4N3b8YdVyVVCR1JpCBi0VxrPwiAcEqp1yBbhoT75uZ0bxPiyWir1mxxRKor2LGPQySd%2FT5IrBI9oKp9nmeYGlbJgWtmTED9tx3CVRievG7Uh%2B1YJsGjyvyNhppIDcCjyiKFw2O6Hdq1PH6JIrSS6EyP4KMqntFkBZDC0ajrfjwILTRft8iAqeVPKPSSsnSIAOs2%2B3rxo44w71FM1emO7s6b54HSt%2BtQBqMLG2E1bMdS1V1WF56OepOinH6epgX1oMp4BzmVy7LZhE2tAPV3jrgI3aczhoBov9vuseST8QAdqbfKaKoGFMbICvKqfdsA3QYYml4hHSvwchbzuGrHs4FcoCUX90kRZ3FAq0aAmV8UbQt%2F8NKIMsAJfPnmrArGnglCVhNnw%2BIuPqwpID5Ee2FANz34CN797JE0PITyhRDEqp1HELjJPCv%2F0flI2Ahl6igp9mYMJ2Mw8IGOqUBu%2BptyUdaXhVigVXLnBkMOV36%2FQSSnh51m9m6CHT%2FWtCSI9F9ZHy9M5Ti9%2FXRivwCdhqjjsExDO%2BBPRpRlVHv9QuQr423%2FoGYbQvqXOPBaE%2BWwx%2F1sz7NW1WnZX9%2FSTh4mEUxhGshIsVyjOP29n6jxG9zsSTVJ0z%2BOAlTreO9WARE%2BNcOevWZaVMj%2Fgh%2BtlptMsEdlAtZT%2BgBYTGURQAwP2qIQ61W&X-Amz-Signature=6d6223ac5b1cce0b8e056f888766ac5b1e5b48a55b3a14531f44febe5c2b9b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5BGB6U%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0NUMV%2FiWSHTyv8lW3SERs%2BwZ6stjYSZ6f0vu5KmcBTAiEAxKvPLsxrmUUZ%2BdkZ4XvNU%2FBveWQDoBa3YeFry4poUpQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDE17wkIp4psoSp2vkyrcA9LPUP1%2BvMME1qN%2F6mCxaMF4UsvgdXHr0CQKZBizUSjKEr7xvQU8CZpQfzgPyUfmAWDxRaISlM4zESrlGfUdml29Cho%2B4JD0qGxdHHRvtUWRGr4XlRWiOucO%2FtgjBmHW%2FGhb86WUPndBMGoW8MhCkbs2rB0B8NNBbSE1xLCuyWjsaNEQXSadta4N3b8YdVyVVCR1JpCBi0VxrPwiAcEqp1yBbhoT75uZ0bxPiyWir1mxxRKor2LGPQySd%2FT5IrBI9oKp9nmeYGlbJgWtmTED9tx3CVRievG7Uh%2B1YJsGjyvyNhppIDcCjyiKFw2O6Hdq1PH6JIrSS6EyP4KMqntFkBZDC0ajrfjwILTRft8iAqeVPKPSSsnSIAOs2%2B3rxo44w71FM1emO7s6b54HSt%2BtQBqMLG2E1bMdS1V1WF56OepOinH6epgX1oMp4BzmVy7LZhE2tAPV3jrgI3aczhoBov9vuseST8QAdqbfKaKoGFMbICvKqfdsA3QYYml4hHSvwchbzuGrHs4FcoCUX90kRZ3FAq0aAmV8UbQt%2F8NKIMsAJfPnmrArGnglCVhNnw%2BIuPqwpID5Ee2FANz34CN797JE0PITyhRDEqp1HELjJPCv%2F0flI2Ahl6igp9mYMJ2Mw8IGOqUBu%2BptyUdaXhVigVXLnBkMOV36%2FQSSnh51m9m6CHT%2FWtCSI9F9ZHy9M5Ti9%2FXRivwCdhqjjsExDO%2BBPRpRlVHv9QuQr423%2FoGYbQvqXOPBaE%2BWwx%2F1sz7NW1WnZX9%2FSTh4mEUxhGshIsVyjOP29n6jxG9zsSTVJ0z%2BOAlTreO9WARE%2BNcOevWZaVMj%2Fgh%2BtlptMsEdlAtZT%2BgBYTGURQAwP2qIQ61W&X-Amz-Signature=2aeb247feb365bb6a815b2495aa3989c28a1b9bd9ae5b5d929965ca5bd2fb41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5BGB6U%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0NUMV%2FiWSHTyv8lW3SERs%2BwZ6stjYSZ6f0vu5KmcBTAiEAxKvPLsxrmUUZ%2BdkZ4XvNU%2FBveWQDoBa3YeFry4poUpQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDE17wkIp4psoSp2vkyrcA9LPUP1%2BvMME1qN%2F6mCxaMF4UsvgdXHr0CQKZBizUSjKEr7xvQU8CZpQfzgPyUfmAWDxRaISlM4zESrlGfUdml29Cho%2B4JD0qGxdHHRvtUWRGr4XlRWiOucO%2FtgjBmHW%2FGhb86WUPndBMGoW8MhCkbs2rB0B8NNBbSE1xLCuyWjsaNEQXSadta4N3b8YdVyVVCR1JpCBi0VxrPwiAcEqp1yBbhoT75uZ0bxPiyWir1mxxRKor2LGPQySd%2FT5IrBI9oKp9nmeYGlbJgWtmTED9tx3CVRievG7Uh%2B1YJsGjyvyNhppIDcCjyiKFw2O6Hdq1PH6JIrSS6EyP4KMqntFkBZDC0ajrfjwILTRft8iAqeVPKPSSsnSIAOs2%2B3rxo44w71FM1emO7s6b54HSt%2BtQBqMLG2E1bMdS1V1WF56OepOinH6epgX1oMp4BzmVy7LZhE2tAPV3jrgI3aczhoBov9vuseST8QAdqbfKaKoGFMbICvKqfdsA3QYYml4hHSvwchbzuGrHs4FcoCUX90kRZ3FAq0aAmV8UbQt%2F8NKIMsAJfPnmrArGnglCVhNnw%2BIuPqwpID5Ee2FANz34CN797JE0PITyhRDEqp1HELjJPCv%2F0flI2Ahl6igp9mYMJ2Mw8IGOqUBu%2BptyUdaXhVigVXLnBkMOV36%2FQSSnh51m9m6CHT%2FWtCSI9F9ZHy9M5Ti9%2FXRivwCdhqjjsExDO%2BBPRpRlVHv9QuQr423%2FoGYbQvqXOPBaE%2BWwx%2F1sz7NW1WnZX9%2FSTh4mEUxhGshIsVyjOP29n6jxG9zsSTVJ0z%2BOAlTreO9WARE%2BNcOevWZaVMj%2Fgh%2BtlptMsEdlAtZT%2BgBYTGURQAwP2qIQ61W&X-Amz-Signature=c77da29604965a34d67526dffbad2cf09aae45a0116a349975d68ba92f89cfa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5BGB6U%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0NUMV%2FiWSHTyv8lW3SERs%2BwZ6stjYSZ6f0vu5KmcBTAiEAxKvPLsxrmUUZ%2BdkZ4XvNU%2FBveWQDoBa3YeFry4poUpQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDE17wkIp4psoSp2vkyrcA9LPUP1%2BvMME1qN%2F6mCxaMF4UsvgdXHr0CQKZBizUSjKEr7xvQU8CZpQfzgPyUfmAWDxRaISlM4zESrlGfUdml29Cho%2B4JD0qGxdHHRvtUWRGr4XlRWiOucO%2FtgjBmHW%2FGhb86WUPndBMGoW8MhCkbs2rB0B8NNBbSE1xLCuyWjsaNEQXSadta4N3b8YdVyVVCR1JpCBi0VxrPwiAcEqp1yBbhoT75uZ0bxPiyWir1mxxRKor2LGPQySd%2FT5IrBI9oKp9nmeYGlbJgWtmTED9tx3CVRievG7Uh%2B1YJsGjyvyNhppIDcCjyiKFw2O6Hdq1PH6JIrSS6EyP4KMqntFkBZDC0ajrfjwILTRft8iAqeVPKPSSsnSIAOs2%2B3rxo44w71FM1emO7s6b54HSt%2BtQBqMLG2E1bMdS1V1WF56OepOinH6epgX1oMp4BzmVy7LZhE2tAPV3jrgI3aczhoBov9vuseST8QAdqbfKaKoGFMbICvKqfdsA3QYYml4hHSvwchbzuGrHs4FcoCUX90kRZ3FAq0aAmV8UbQt%2F8NKIMsAJfPnmrArGnglCVhNnw%2BIuPqwpID5Ee2FANz34CN797JE0PITyhRDEqp1HELjJPCv%2F0flI2Ahl6igp9mYMJ2Mw8IGOqUBu%2BptyUdaXhVigVXLnBkMOV36%2FQSSnh51m9m6CHT%2FWtCSI9F9ZHy9M5Ti9%2FXRivwCdhqjjsExDO%2BBPRpRlVHv9QuQr423%2FoGYbQvqXOPBaE%2BWwx%2F1sz7NW1WnZX9%2FSTh4mEUxhGshIsVyjOP29n6jxG9zsSTVJ0z%2BOAlTreO9WARE%2BNcOevWZaVMj%2Fgh%2BtlptMsEdlAtZT%2BgBYTGURQAwP2qIQ61W&X-Amz-Signature=af6ef5a8fe39ee59bef5ed7e6be87a24a4e3aedf551c1c7cde1218e3d8c81dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
