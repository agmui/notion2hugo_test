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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL6Y46EM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC7KvglzU4SzprsC3dqZIxSpXISNtBxA1mmlR4A68vc2AIgSJkPxbEo8F53l3%2FcAvTwesPEmh2sicnd6vTvRbymuXkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMxuFc4VMfLUmEjoxircA9IKQsE7OZtURjq%2FMs5esYo4auYS0%2B%2FkpHjBLA6UEwcHoTMg3rKdO%2F%2B9f6R4z91kxW157GhQ64A3MaHBTW9OxK5zRq35LJI9v1HsxITu52atSnQ5zjxxQRRebaXrghpSA7RtbrnAitUCpIJ1oWNKCvRqXZyKiocHxQZK%2FW902pSt7sLWeC4AHYYI%2BQY0jp4eo%2BwCPMoSq8zmNdZasr9nkwXa3XcT7QSPQssPAqneoNwMqIsgvgLDoMeJH2fC0WJlosgisrWooerlBRHregHClUBFswxSce0r35%2BTBVeQZhPmKOzoRUHKAIH24P%2FPSZJJWwTm3wtFnPjUlXj570K1RH1z1RE1O09kMeo39mUhnLp626wDJjVHDQm5Rs%2Bfiw0kkGFx7AlRDg1nXkj6Q9IqrQX5DVJ%2FhYb9dIg%2Bp9W%2FSO%2BAV0GSRgrNIMP%2FAFsRcYbM1Wwkf1tlr7JLW0DF%2Ft5F7CZa4FhzLLDkfFPMrQAxXkVTDUOKUWX7W8En3WNuRDp3SUZH%2Fv0RZhYYoodwli43X7nC3OOSI%2BxGxHzMAMyQnfyhcQ84nHyCf5JmIrTlMMbb0sc7pd81NTTFbo1Tnq%2Bz4keHNpKeQRFgF6ddLF4HShYZzsuSqNiQU%2B7gnGdPMKaj6sIGOqUBu0lBa9NGgYXZHKntZKGyek%2FZPeI7qJh6KdhsfBGaDCptxCv8kevHx9rcgMIckvzYUDhjjGkwBwOD3sRSuYUpEYS%2B7h8E0DnITcISNldeMooTk6C0OY%2FgyniTsuNmzncFYZmNk3Z5xG3hDjlgMwq4H2bI8ono0wOl53k1T6cvjoauqBXDD3GvE1uEBQJAdW0UEjzl%2F8ibAt%2FBQjF3%2BZnnTRkD%2BtbS&X-Amz-Signature=d4c88eb5bc05e48c73d714f74065713d9e779ff27990d88952c8e61a3c8dacb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL6Y46EM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC7KvglzU4SzprsC3dqZIxSpXISNtBxA1mmlR4A68vc2AIgSJkPxbEo8F53l3%2FcAvTwesPEmh2sicnd6vTvRbymuXkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMxuFc4VMfLUmEjoxircA9IKQsE7OZtURjq%2FMs5esYo4auYS0%2B%2FkpHjBLA6UEwcHoTMg3rKdO%2F%2B9f6R4z91kxW157GhQ64A3MaHBTW9OxK5zRq35LJI9v1HsxITu52atSnQ5zjxxQRRebaXrghpSA7RtbrnAitUCpIJ1oWNKCvRqXZyKiocHxQZK%2FW902pSt7sLWeC4AHYYI%2BQY0jp4eo%2BwCPMoSq8zmNdZasr9nkwXa3XcT7QSPQssPAqneoNwMqIsgvgLDoMeJH2fC0WJlosgisrWooerlBRHregHClUBFswxSce0r35%2BTBVeQZhPmKOzoRUHKAIH24P%2FPSZJJWwTm3wtFnPjUlXj570K1RH1z1RE1O09kMeo39mUhnLp626wDJjVHDQm5Rs%2Bfiw0kkGFx7AlRDg1nXkj6Q9IqrQX5DVJ%2FhYb9dIg%2Bp9W%2FSO%2BAV0GSRgrNIMP%2FAFsRcYbM1Wwkf1tlr7JLW0DF%2Ft5F7CZa4FhzLLDkfFPMrQAxXkVTDUOKUWX7W8En3WNuRDp3SUZH%2Fv0RZhYYoodwli43X7nC3OOSI%2BxGxHzMAMyQnfyhcQ84nHyCf5JmIrTlMMbb0sc7pd81NTTFbo1Tnq%2Bz4keHNpKeQRFgF6ddLF4HShYZzsuSqNiQU%2B7gnGdPMKaj6sIGOqUBu0lBa9NGgYXZHKntZKGyek%2FZPeI7qJh6KdhsfBGaDCptxCv8kevHx9rcgMIckvzYUDhjjGkwBwOD3sRSuYUpEYS%2B7h8E0DnITcISNldeMooTk6C0OY%2FgyniTsuNmzncFYZmNk3Z5xG3hDjlgMwq4H2bI8ono0wOl53k1T6cvjoauqBXDD3GvE1uEBQJAdW0UEjzl%2F8ibAt%2FBQjF3%2BZnnTRkD%2BtbS&X-Amz-Signature=811867013f3b8316d1d1be6a560c2c9ee800b2346634f9659f6a3ea7d638fef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL6Y46EM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC7KvglzU4SzprsC3dqZIxSpXISNtBxA1mmlR4A68vc2AIgSJkPxbEo8F53l3%2FcAvTwesPEmh2sicnd6vTvRbymuXkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMxuFc4VMfLUmEjoxircA9IKQsE7OZtURjq%2FMs5esYo4auYS0%2B%2FkpHjBLA6UEwcHoTMg3rKdO%2F%2B9f6R4z91kxW157GhQ64A3MaHBTW9OxK5zRq35LJI9v1HsxITu52atSnQ5zjxxQRRebaXrghpSA7RtbrnAitUCpIJ1oWNKCvRqXZyKiocHxQZK%2FW902pSt7sLWeC4AHYYI%2BQY0jp4eo%2BwCPMoSq8zmNdZasr9nkwXa3XcT7QSPQssPAqneoNwMqIsgvgLDoMeJH2fC0WJlosgisrWooerlBRHregHClUBFswxSce0r35%2BTBVeQZhPmKOzoRUHKAIH24P%2FPSZJJWwTm3wtFnPjUlXj570K1RH1z1RE1O09kMeo39mUhnLp626wDJjVHDQm5Rs%2Bfiw0kkGFx7AlRDg1nXkj6Q9IqrQX5DVJ%2FhYb9dIg%2Bp9W%2FSO%2BAV0GSRgrNIMP%2FAFsRcYbM1Wwkf1tlr7JLW0DF%2Ft5F7CZa4FhzLLDkfFPMrQAxXkVTDUOKUWX7W8En3WNuRDp3SUZH%2Fv0RZhYYoodwli43X7nC3OOSI%2BxGxHzMAMyQnfyhcQ84nHyCf5JmIrTlMMbb0sc7pd81NTTFbo1Tnq%2Bz4keHNpKeQRFgF6ddLF4HShYZzsuSqNiQU%2B7gnGdPMKaj6sIGOqUBu0lBa9NGgYXZHKntZKGyek%2FZPeI7qJh6KdhsfBGaDCptxCv8kevHx9rcgMIckvzYUDhjjGkwBwOD3sRSuYUpEYS%2B7h8E0DnITcISNldeMooTk6C0OY%2FgyniTsuNmzncFYZmNk3Z5xG3hDjlgMwq4H2bI8ono0wOl53k1T6cvjoauqBXDD3GvE1uEBQJAdW0UEjzl%2F8ibAt%2FBQjF3%2BZnnTRkD%2BtbS&X-Amz-Signature=6847df6ba9738a2cb082dd01d39fd11d074f9f5fcbc584239eb0b247dbd3f9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL6Y46EM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC7KvglzU4SzprsC3dqZIxSpXISNtBxA1mmlR4A68vc2AIgSJkPxbEo8F53l3%2FcAvTwesPEmh2sicnd6vTvRbymuXkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMxuFc4VMfLUmEjoxircA9IKQsE7OZtURjq%2FMs5esYo4auYS0%2B%2FkpHjBLA6UEwcHoTMg3rKdO%2F%2B9f6R4z91kxW157GhQ64A3MaHBTW9OxK5zRq35LJI9v1HsxITu52atSnQ5zjxxQRRebaXrghpSA7RtbrnAitUCpIJ1oWNKCvRqXZyKiocHxQZK%2FW902pSt7sLWeC4AHYYI%2BQY0jp4eo%2BwCPMoSq8zmNdZasr9nkwXa3XcT7QSPQssPAqneoNwMqIsgvgLDoMeJH2fC0WJlosgisrWooerlBRHregHClUBFswxSce0r35%2BTBVeQZhPmKOzoRUHKAIH24P%2FPSZJJWwTm3wtFnPjUlXj570K1RH1z1RE1O09kMeo39mUhnLp626wDJjVHDQm5Rs%2Bfiw0kkGFx7AlRDg1nXkj6Q9IqrQX5DVJ%2FhYb9dIg%2Bp9W%2FSO%2BAV0GSRgrNIMP%2FAFsRcYbM1Wwkf1tlr7JLW0DF%2Ft5F7CZa4FhzLLDkfFPMrQAxXkVTDUOKUWX7W8En3WNuRDp3SUZH%2Fv0RZhYYoodwli43X7nC3OOSI%2BxGxHzMAMyQnfyhcQ84nHyCf5JmIrTlMMbb0sc7pd81NTTFbo1Tnq%2Bz4keHNpKeQRFgF6ddLF4HShYZzsuSqNiQU%2B7gnGdPMKaj6sIGOqUBu0lBa9NGgYXZHKntZKGyek%2FZPeI7qJh6KdhsfBGaDCptxCv8kevHx9rcgMIckvzYUDhjjGkwBwOD3sRSuYUpEYS%2B7h8E0DnITcISNldeMooTk6C0OY%2FgyniTsuNmzncFYZmNk3Z5xG3hDjlgMwq4H2bI8ono0wOl53k1T6cvjoauqBXDD3GvE1uEBQJAdW0UEjzl%2F8ibAt%2FBQjF3%2BZnnTRkD%2BtbS&X-Amz-Signature=a981aea720f5f41a1e3f234b59cee5ad1123111651e1542cb4735ce84f4e421f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL6Y46EM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC7KvglzU4SzprsC3dqZIxSpXISNtBxA1mmlR4A68vc2AIgSJkPxbEo8F53l3%2FcAvTwesPEmh2sicnd6vTvRbymuXkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMxuFc4VMfLUmEjoxircA9IKQsE7OZtURjq%2FMs5esYo4auYS0%2B%2FkpHjBLA6UEwcHoTMg3rKdO%2F%2B9f6R4z91kxW157GhQ64A3MaHBTW9OxK5zRq35LJI9v1HsxITu52atSnQ5zjxxQRRebaXrghpSA7RtbrnAitUCpIJ1oWNKCvRqXZyKiocHxQZK%2FW902pSt7sLWeC4AHYYI%2BQY0jp4eo%2BwCPMoSq8zmNdZasr9nkwXa3XcT7QSPQssPAqneoNwMqIsgvgLDoMeJH2fC0WJlosgisrWooerlBRHregHClUBFswxSce0r35%2BTBVeQZhPmKOzoRUHKAIH24P%2FPSZJJWwTm3wtFnPjUlXj570K1RH1z1RE1O09kMeo39mUhnLp626wDJjVHDQm5Rs%2Bfiw0kkGFx7AlRDg1nXkj6Q9IqrQX5DVJ%2FhYb9dIg%2Bp9W%2FSO%2BAV0GSRgrNIMP%2FAFsRcYbM1Wwkf1tlr7JLW0DF%2Ft5F7CZa4FhzLLDkfFPMrQAxXkVTDUOKUWX7W8En3WNuRDp3SUZH%2Fv0RZhYYoodwli43X7nC3OOSI%2BxGxHzMAMyQnfyhcQ84nHyCf5JmIrTlMMbb0sc7pd81NTTFbo1Tnq%2Bz4keHNpKeQRFgF6ddLF4HShYZzsuSqNiQU%2B7gnGdPMKaj6sIGOqUBu0lBa9NGgYXZHKntZKGyek%2FZPeI7qJh6KdhsfBGaDCptxCv8kevHx9rcgMIckvzYUDhjjGkwBwOD3sRSuYUpEYS%2B7h8E0DnITcISNldeMooTk6C0OY%2FgyniTsuNmzncFYZmNk3Z5xG3hDjlgMwq4H2bI8ono0wOl53k1T6cvjoauqBXDD3GvE1uEBQJAdW0UEjzl%2F8ibAt%2FBQjF3%2BZnnTRkD%2BtbS&X-Amz-Signature=4ff77598a25a8361ba480cf1aa3ca2e287db33a246b3180ed5ee0ee29baadc2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
