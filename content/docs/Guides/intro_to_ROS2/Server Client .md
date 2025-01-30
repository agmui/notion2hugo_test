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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DO7BCK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRk0vwHV4imTYtoUDRF73t4Zs7R2vqLzr4AF5fO0cOjAiEAhEuLkHVYfGXQGcS9jOCxpPeBfaH%2FBbzXtIfA%2B34HcEoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvEkApvlmty3x7dCyrcA3vYqv6kURD%2BXLWq7QGcT7z2huo7LY7w2YKwbkOxoVo55fnZstvmuBmsz0DXAUbZSsC21VkV4UmMQZEE3LgvKTxsYpxrqEyYtG7Ki0AAOU4uCO2X6ejLH8Oto8sNi4KG0pr9QEJldg7jbr3X%2FkmePMbjzQt1ynYOpYiLBkWtqd0%2FG2JJ8A1%2Bb%2BhzAaqrjv25BbyxEuhk49T9EGzwRYgDvhJFAq1J6WvJpl0YMhTlH2PfoKE%2BJw0mCJTXpU7QstogKZh1l7AGmQrigk3b%2BdZ7Qjf8o1R3X9gRMteAocakFiMBWGmnEFlo1L%2BBwaLCtgDEepm8bi1mXsUit%2BsxD9Ye92fvYIuwWOtoxgLr0tRG92H9sqd%2BdWmxJ%2B8LMA5Q%2F5Bb4c94BlW%2BWDTysA%2Fpd4iJ7TAbiGyy5E6sYbVM0zfHSb4rhSyvlbiZePPjyOm68yQk3wv5Mg6gSRGY4lk6p8Vt27UUelKdR9GyAbkjV8%2BG98bZ7xM25kjU0bFKE6gAlfw8PHV9w4K1nkR476UMk8m4uWAH7o4gTI32tkxw07QmC4DuQoEJ%2FqH0XGEDRTD0iwpWj%2Fzv5z%2BYSudK%2BAXv%2F7TO8nFPKVRGBFTbO3DjTPGcc%2BS04Uaz1Hc5bHWPauYHMMOI7LwGOqUBtYhdRw23%2BknCwUpO0N%2BeOkzpHWxXYMksUlk03GJixGx%2BMiSZ5HWPh5fqOMQ5eJz2Q4BYyiLF4PUWdRir9%2BBH3caK%2FHtH0x33SSJJhnug3ASe4NKquOo6JM%2BaQlqRLAbR0pxzdXPmhTBTK3tENCcze1%2Fqf2TW44847BkcS0Df6NpxP0EUaV%2FH0uj6dR90b9LJqcfuvQWOm57PVop3kNbi1bNld2bW&X-Amz-Signature=cc8bd14605a67a9db6f285501496fc843cede09744fd232342c752ece3abd4aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DO7BCK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRk0vwHV4imTYtoUDRF73t4Zs7R2vqLzr4AF5fO0cOjAiEAhEuLkHVYfGXQGcS9jOCxpPeBfaH%2FBbzXtIfA%2B34HcEoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvEkApvlmty3x7dCyrcA3vYqv6kURD%2BXLWq7QGcT7z2huo7LY7w2YKwbkOxoVo55fnZstvmuBmsz0DXAUbZSsC21VkV4UmMQZEE3LgvKTxsYpxrqEyYtG7Ki0AAOU4uCO2X6ejLH8Oto8sNi4KG0pr9QEJldg7jbr3X%2FkmePMbjzQt1ynYOpYiLBkWtqd0%2FG2JJ8A1%2Bb%2BhzAaqrjv25BbyxEuhk49T9EGzwRYgDvhJFAq1J6WvJpl0YMhTlH2PfoKE%2BJw0mCJTXpU7QstogKZh1l7AGmQrigk3b%2BdZ7Qjf8o1R3X9gRMteAocakFiMBWGmnEFlo1L%2BBwaLCtgDEepm8bi1mXsUit%2BsxD9Ye92fvYIuwWOtoxgLr0tRG92H9sqd%2BdWmxJ%2B8LMA5Q%2F5Bb4c94BlW%2BWDTysA%2Fpd4iJ7TAbiGyy5E6sYbVM0zfHSb4rhSyvlbiZePPjyOm68yQk3wv5Mg6gSRGY4lk6p8Vt27UUelKdR9GyAbkjV8%2BG98bZ7xM25kjU0bFKE6gAlfw8PHV9w4K1nkR476UMk8m4uWAH7o4gTI32tkxw07QmC4DuQoEJ%2FqH0XGEDRTD0iwpWj%2Fzv5z%2BYSudK%2BAXv%2F7TO8nFPKVRGBFTbO3DjTPGcc%2BS04Uaz1Hc5bHWPauYHMMOI7LwGOqUBtYhdRw23%2BknCwUpO0N%2BeOkzpHWxXYMksUlk03GJixGx%2BMiSZ5HWPh5fqOMQ5eJz2Q4BYyiLF4PUWdRir9%2BBH3caK%2FHtH0x33SSJJhnug3ASe4NKquOo6JM%2BaQlqRLAbR0pxzdXPmhTBTK3tENCcze1%2Fqf2TW44847BkcS0Df6NpxP0EUaV%2FH0uj6dR90b9LJqcfuvQWOm57PVop3kNbi1bNld2bW&X-Amz-Signature=a8aef0d3d8d215aaaea0f634e022ce6f24a590c8d35fcb8672bc122da4a8d45a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DO7BCK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRk0vwHV4imTYtoUDRF73t4Zs7R2vqLzr4AF5fO0cOjAiEAhEuLkHVYfGXQGcS9jOCxpPeBfaH%2FBbzXtIfA%2B34HcEoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvEkApvlmty3x7dCyrcA3vYqv6kURD%2BXLWq7QGcT7z2huo7LY7w2YKwbkOxoVo55fnZstvmuBmsz0DXAUbZSsC21VkV4UmMQZEE3LgvKTxsYpxrqEyYtG7Ki0AAOU4uCO2X6ejLH8Oto8sNi4KG0pr9QEJldg7jbr3X%2FkmePMbjzQt1ynYOpYiLBkWtqd0%2FG2JJ8A1%2Bb%2BhzAaqrjv25BbyxEuhk49T9EGzwRYgDvhJFAq1J6WvJpl0YMhTlH2PfoKE%2BJw0mCJTXpU7QstogKZh1l7AGmQrigk3b%2BdZ7Qjf8o1R3X9gRMteAocakFiMBWGmnEFlo1L%2BBwaLCtgDEepm8bi1mXsUit%2BsxD9Ye92fvYIuwWOtoxgLr0tRG92H9sqd%2BdWmxJ%2B8LMA5Q%2F5Bb4c94BlW%2BWDTysA%2Fpd4iJ7TAbiGyy5E6sYbVM0zfHSb4rhSyvlbiZePPjyOm68yQk3wv5Mg6gSRGY4lk6p8Vt27UUelKdR9GyAbkjV8%2BG98bZ7xM25kjU0bFKE6gAlfw8PHV9w4K1nkR476UMk8m4uWAH7o4gTI32tkxw07QmC4DuQoEJ%2FqH0XGEDRTD0iwpWj%2Fzv5z%2BYSudK%2BAXv%2F7TO8nFPKVRGBFTbO3DjTPGcc%2BS04Uaz1Hc5bHWPauYHMMOI7LwGOqUBtYhdRw23%2BknCwUpO0N%2BeOkzpHWxXYMksUlk03GJixGx%2BMiSZ5HWPh5fqOMQ5eJz2Q4BYyiLF4PUWdRir9%2BBH3caK%2FHtH0x33SSJJhnug3ASe4NKquOo6JM%2BaQlqRLAbR0pxzdXPmhTBTK3tENCcze1%2Fqf2TW44847BkcS0Df6NpxP0EUaV%2FH0uj6dR90b9LJqcfuvQWOm57PVop3kNbi1bNld2bW&X-Amz-Signature=eda18a8ec776efb7fc70e7668e55afed53fb4e98ea6127f5abaf5ad73fc62557&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DO7BCK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRk0vwHV4imTYtoUDRF73t4Zs7R2vqLzr4AF5fO0cOjAiEAhEuLkHVYfGXQGcS9jOCxpPeBfaH%2FBbzXtIfA%2B34HcEoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvEkApvlmty3x7dCyrcA3vYqv6kURD%2BXLWq7QGcT7z2huo7LY7w2YKwbkOxoVo55fnZstvmuBmsz0DXAUbZSsC21VkV4UmMQZEE3LgvKTxsYpxrqEyYtG7Ki0AAOU4uCO2X6ejLH8Oto8sNi4KG0pr9QEJldg7jbr3X%2FkmePMbjzQt1ynYOpYiLBkWtqd0%2FG2JJ8A1%2Bb%2BhzAaqrjv25BbyxEuhk49T9EGzwRYgDvhJFAq1J6WvJpl0YMhTlH2PfoKE%2BJw0mCJTXpU7QstogKZh1l7AGmQrigk3b%2BdZ7Qjf8o1R3X9gRMteAocakFiMBWGmnEFlo1L%2BBwaLCtgDEepm8bi1mXsUit%2BsxD9Ye92fvYIuwWOtoxgLr0tRG92H9sqd%2BdWmxJ%2B8LMA5Q%2F5Bb4c94BlW%2BWDTysA%2Fpd4iJ7TAbiGyy5E6sYbVM0zfHSb4rhSyvlbiZePPjyOm68yQk3wv5Mg6gSRGY4lk6p8Vt27UUelKdR9GyAbkjV8%2BG98bZ7xM25kjU0bFKE6gAlfw8PHV9w4K1nkR476UMk8m4uWAH7o4gTI32tkxw07QmC4DuQoEJ%2FqH0XGEDRTD0iwpWj%2Fzv5z%2BYSudK%2BAXv%2F7TO8nFPKVRGBFTbO3DjTPGcc%2BS04Uaz1Hc5bHWPauYHMMOI7LwGOqUBtYhdRw23%2BknCwUpO0N%2BeOkzpHWxXYMksUlk03GJixGx%2BMiSZ5HWPh5fqOMQ5eJz2Q4BYyiLF4PUWdRir9%2BBH3caK%2FHtH0x33SSJJhnug3ASe4NKquOo6JM%2BaQlqRLAbR0pxzdXPmhTBTK3tENCcze1%2Fqf2TW44847BkcS0Df6NpxP0EUaV%2FH0uj6dR90b9LJqcfuvQWOm57PVop3kNbi1bNld2bW&X-Amz-Signature=c0e66d1bd2d970449500937ddb24b0bf2d35cfa379a55fcbd3e678cae691bedc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DO7BCK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRk0vwHV4imTYtoUDRF73t4Zs7R2vqLzr4AF5fO0cOjAiEAhEuLkHVYfGXQGcS9jOCxpPeBfaH%2FBbzXtIfA%2B34HcEoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvEkApvlmty3x7dCyrcA3vYqv6kURD%2BXLWq7QGcT7z2huo7LY7w2YKwbkOxoVo55fnZstvmuBmsz0DXAUbZSsC21VkV4UmMQZEE3LgvKTxsYpxrqEyYtG7Ki0AAOU4uCO2X6ejLH8Oto8sNi4KG0pr9QEJldg7jbr3X%2FkmePMbjzQt1ynYOpYiLBkWtqd0%2FG2JJ8A1%2Bb%2BhzAaqrjv25BbyxEuhk49T9EGzwRYgDvhJFAq1J6WvJpl0YMhTlH2PfoKE%2BJw0mCJTXpU7QstogKZh1l7AGmQrigk3b%2BdZ7Qjf8o1R3X9gRMteAocakFiMBWGmnEFlo1L%2BBwaLCtgDEepm8bi1mXsUit%2BsxD9Ye92fvYIuwWOtoxgLr0tRG92H9sqd%2BdWmxJ%2B8LMA5Q%2F5Bb4c94BlW%2BWDTysA%2Fpd4iJ7TAbiGyy5E6sYbVM0zfHSb4rhSyvlbiZePPjyOm68yQk3wv5Mg6gSRGY4lk6p8Vt27UUelKdR9GyAbkjV8%2BG98bZ7xM25kjU0bFKE6gAlfw8PHV9w4K1nkR476UMk8m4uWAH7o4gTI32tkxw07QmC4DuQoEJ%2FqH0XGEDRTD0iwpWj%2Fzv5z%2BYSudK%2BAXv%2F7TO8nFPKVRGBFTbO3DjTPGcc%2BS04Uaz1Hc5bHWPauYHMMOI7LwGOqUBtYhdRw23%2BknCwUpO0N%2BeOkzpHWxXYMksUlk03GJixGx%2BMiSZ5HWPh5fqOMQ5eJz2Q4BYyiLF4PUWdRir9%2BBH3caK%2FHtH0x33SSJJhnug3ASe4NKquOo6JM%2BaQlqRLAbR0pxzdXPmhTBTK3tENCcze1%2Fqf2TW44847BkcS0Df6NpxP0EUaV%2FH0uj6dR90b9LJqcfuvQWOm57PVop3kNbi1bNld2bW&X-Amz-Signature=c801ef3e40fa4f068fae59b0409d952e724f283f40a8a40540f83497e528853e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
