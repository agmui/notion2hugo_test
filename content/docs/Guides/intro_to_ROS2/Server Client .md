---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7JXCG3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCFL2zu%2FnkAwrgNz5upRBDF0L4ipWHhXbRXHFJc3tXSAiEApvlRVptFwAuVIfrtnbM%2BEEZDpY7xiD7Bk1bOAPH0t8EqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE6nV4tBSYfqJZj3CrcA7dKraPdy5J3CVzW9Nom8VkKsOVxQDlqJJ9pffmOGr2fe8dDtFuLZ%2B%2FaKsDpWggARosws0udHxPlsLlSMU5celOlQIz8Z1uKtkMpOwJWmQ3I0Vt7ssvvcXNduiLDW4FSwbx%2FgqrkXTTbJdqCRYqQUJNwcYlC1TZlbHoGKHSpp3UEj3U%2FEaHW8lhTqhwtnDAqNhuq2MljVHHpCqd5zfTfN%2Br4uzGXwLcMyDbD2eQuj1HxYY8F3ys24WSfRfwtIER%2BjyzgkJ13w5b0Kzc6a9poyHKY47PGJ%2BidOrY6dmO6tOhc3tPNNIbvHkO5OLiUzh3y9EBISWeGNpUqC8CTC3fqLFLcY%2FWr8O7ncFlXHH37OYpMuXcyxQpC5DYv50c1DY7WZWiF%2F%2BEtP3DwIsQgC8EgetPebQpqci1liAyo3ghwznM2Kv2O3j05dq22gehU3QRys9aCYrMbVjPruHBQulHkjjfrvTUXlAulyt%2BOrPaJbpb%2BvJtPr7S9bxOqaniSvib1LUXERPyR%2Fhr5aF6H3%2Bzg1zHnMAZLSHnrZnR5zjvaORaGC96rZgFN28tN07mQVKKsgWlIDjJ7loGfJgzVJiEb4WUuylLJw0VqHjpCqtwBxvJQ4zNQt3juIPkaYLxBMNDi3MQGOqUBockFStyJtqk0InR9mmxv7AC5%2Fzh9Mu9i7Iic8jueHlRooZBWEqXL1LZEPRq%2FvGSblFWxM%2B%2FiOmQAvEAl7YH38a9claMwuRKxH0zA3sU3r9MNP0PFscx7KR9h0kEA2ksiRP3JN2poNf3R8V1cbOc1zKF2khnPRl8QbhkVBVIa6h7F0VM0HJLNYtlY3rAUuVB4DozOhdTvpt2gmU7sRQq0PSHvIc4M&X-Amz-Signature=6539dd89e4493fe1c06c839851a71ac8a71d1b9335608cec7907de188c802b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7JXCG3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCFL2zu%2FnkAwrgNz5upRBDF0L4ipWHhXbRXHFJc3tXSAiEApvlRVptFwAuVIfrtnbM%2BEEZDpY7xiD7Bk1bOAPH0t8EqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE6nV4tBSYfqJZj3CrcA7dKraPdy5J3CVzW9Nom8VkKsOVxQDlqJJ9pffmOGr2fe8dDtFuLZ%2B%2FaKsDpWggARosws0udHxPlsLlSMU5celOlQIz8Z1uKtkMpOwJWmQ3I0Vt7ssvvcXNduiLDW4FSwbx%2FgqrkXTTbJdqCRYqQUJNwcYlC1TZlbHoGKHSpp3UEj3U%2FEaHW8lhTqhwtnDAqNhuq2MljVHHpCqd5zfTfN%2Br4uzGXwLcMyDbD2eQuj1HxYY8F3ys24WSfRfwtIER%2BjyzgkJ13w5b0Kzc6a9poyHKY47PGJ%2BidOrY6dmO6tOhc3tPNNIbvHkO5OLiUzh3y9EBISWeGNpUqC8CTC3fqLFLcY%2FWr8O7ncFlXHH37OYpMuXcyxQpC5DYv50c1DY7WZWiF%2F%2BEtP3DwIsQgC8EgetPebQpqci1liAyo3ghwznM2Kv2O3j05dq22gehU3QRys9aCYrMbVjPruHBQulHkjjfrvTUXlAulyt%2BOrPaJbpb%2BvJtPr7S9bxOqaniSvib1LUXERPyR%2Fhr5aF6H3%2Bzg1zHnMAZLSHnrZnR5zjvaORaGC96rZgFN28tN07mQVKKsgWlIDjJ7loGfJgzVJiEb4WUuylLJw0VqHjpCqtwBxvJQ4zNQt3juIPkaYLxBMNDi3MQGOqUBockFStyJtqk0InR9mmxv7AC5%2Fzh9Mu9i7Iic8jueHlRooZBWEqXL1LZEPRq%2FvGSblFWxM%2B%2FiOmQAvEAl7YH38a9claMwuRKxH0zA3sU3r9MNP0PFscx7KR9h0kEA2ksiRP3JN2poNf3R8V1cbOc1zKF2khnPRl8QbhkVBVIa6h7F0VM0HJLNYtlY3rAUuVB4DozOhdTvpt2gmU7sRQq0PSHvIc4M&X-Amz-Signature=e02fe1bc59bae47c77328771a47c5aa54e9e415c196a2de8b114988876b35df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7JXCG3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCFL2zu%2FnkAwrgNz5upRBDF0L4ipWHhXbRXHFJc3tXSAiEApvlRVptFwAuVIfrtnbM%2BEEZDpY7xiD7Bk1bOAPH0t8EqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE6nV4tBSYfqJZj3CrcA7dKraPdy5J3CVzW9Nom8VkKsOVxQDlqJJ9pffmOGr2fe8dDtFuLZ%2B%2FaKsDpWggARosws0udHxPlsLlSMU5celOlQIz8Z1uKtkMpOwJWmQ3I0Vt7ssvvcXNduiLDW4FSwbx%2FgqrkXTTbJdqCRYqQUJNwcYlC1TZlbHoGKHSpp3UEj3U%2FEaHW8lhTqhwtnDAqNhuq2MljVHHpCqd5zfTfN%2Br4uzGXwLcMyDbD2eQuj1HxYY8F3ys24WSfRfwtIER%2BjyzgkJ13w5b0Kzc6a9poyHKY47PGJ%2BidOrY6dmO6tOhc3tPNNIbvHkO5OLiUzh3y9EBISWeGNpUqC8CTC3fqLFLcY%2FWr8O7ncFlXHH37OYpMuXcyxQpC5DYv50c1DY7WZWiF%2F%2BEtP3DwIsQgC8EgetPebQpqci1liAyo3ghwznM2Kv2O3j05dq22gehU3QRys9aCYrMbVjPruHBQulHkjjfrvTUXlAulyt%2BOrPaJbpb%2BvJtPr7S9bxOqaniSvib1LUXERPyR%2Fhr5aF6H3%2Bzg1zHnMAZLSHnrZnR5zjvaORaGC96rZgFN28tN07mQVKKsgWlIDjJ7loGfJgzVJiEb4WUuylLJw0VqHjpCqtwBxvJQ4zNQt3juIPkaYLxBMNDi3MQGOqUBockFStyJtqk0InR9mmxv7AC5%2Fzh9Mu9i7Iic8jueHlRooZBWEqXL1LZEPRq%2FvGSblFWxM%2B%2FiOmQAvEAl7YH38a9claMwuRKxH0zA3sU3r9MNP0PFscx7KR9h0kEA2ksiRP3JN2poNf3R8V1cbOc1zKF2khnPRl8QbhkVBVIa6h7F0VM0HJLNYtlY3rAUuVB4DozOhdTvpt2gmU7sRQq0PSHvIc4M&X-Amz-Signature=99f6cb58175cc587adcb0a3f05ba3623a7c57b73907ddbf5c38bcd2a8e366820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7JXCG3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCFL2zu%2FnkAwrgNz5upRBDF0L4ipWHhXbRXHFJc3tXSAiEApvlRVptFwAuVIfrtnbM%2BEEZDpY7xiD7Bk1bOAPH0t8EqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE6nV4tBSYfqJZj3CrcA7dKraPdy5J3CVzW9Nom8VkKsOVxQDlqJJ9pffmOGr2fe8dDtFuLZ%2B%2FaKsDpWggARosws0udHxPlsLlSMU5celOlQIz8Z1uKtkMpOwJWmQ3I0Vt7ssvvcXNduiLDW4FSwbx%2FgqrkXTTbJdqCRYqQUJNwcYlC1TZlbHoGKHSpp3UEj3U%2FEaHW8lhTqhwtnDAqNhuq2MljVHHpCqd5zfTfN%2Br4uzGXwLcMyDbD2eQuj1HxYY8F3ys24WSfRfwtIER%2BjyzgkJ13w5b0Kzc6a9poyHKY47PGJ%2BidOrY6dmO6tOhc3tPNNIbvHkO5OLiUzh3y9EBISWeGNpUqC8CTC3fqLFLcY%2FWr8O7ncFlXHH37OYpMuXcyxQpC5DYv50c1DY7WZWiF%2F%2BEtP3DwIsQgC8EgetPebQpqci1liAyo3ghwznM2Kv2O3j05dq22gehU3QRys9aCYrMbVjPruHBQulHkjjfrvTUXlAulyt%2BOrPaJbpb%2BvJtPr7S9bxOqaniSvib1LUXERPyR%2Fhr5aF6H3%2Bzg1zHnMAZLSHnrZnR5zjvaORaGC96rZgFN28tN07mQVKKsgWlIDjJ7loGfJgzVJiEb4WUuylLJw0VqHjpCqtwBxvJQ4zNQt3juIPkaYLxBMNDi3MQGOqUBockFStyJtqk0InR9mmxv7AC5%2Fzh9Mu9i7Iic8jueHlRooZBWEqXL1LZEPRq%2FvGSblFWxM%2B%2FiOmQAvEAl7YH38a9claMwuRKxH0zA3sU3r9MNP0PFscx7KR9h0kEA2ksiRP3JN2poNf3R8V1cbOc1zKF2khnPRl8QbhkVBVIa6h7F0VM0HJLNYtlY3rAUuVB4DozOhdTvpt2gmU7sRQq0PSHvIc4M&X-Amz-Signature=63b407c9f499c7ab2e365eb03cdfc65f55041da92fbb13aa27190b8331fb6392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7JXCG3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCFL2zu%2FnkAwrgNz5upRBDF0L4ipWHhXbRXHFJc3tXSAiEApvlRVptFwAuVIfrtnbM%2BEEZDpY7xiD7Bk1bOAPH0t8EqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE6nV4tBSYfqJZj3CrcA7dKraPdy5J3CVzW9Nom8VkKsOVxQDlqJJ9pffmOGr2fe8dDtFuLZ%2B%2FaKsDpWggARosws0udHxPlsLlSMU5celOlQIz8Z1uKtkMpOwJWmQ3I0Vt7ssvvcXNduiLDW4FSwbx%2FgqrkXTTbJdqCRYqQUJNwcYlC1TZlbHoGKHSpp3UEj3U%2FEaHW8lhTqhwtnDAqNhuq2MljVHHpCqd5zfTfN%2Br4uzGXwLcMyDbD2eQuj1HxYY8F3ys24WSfRfwtIER%2BjyzgkJ13w5b0Kzc6a9poyHKY47PGJ%2BidOrY6dmO6tOhc3tPNNIbvHkO5OLiUzh3y9EBISWeGNpUqC8CTC3fqLFLcY%2FWr8O7ncFlXHH37OYpMuXcyxQpC5DYv50c1DY7WZWiF%2F%2BEtP3DwIsQgC8EgetPebQpqci1liAyo3ghwznM2Kv2O3j05dq22gehU3QRys9aCYrMbVjPruHBQulHkjjfrvTUXlAulyt%2BOrPaJbpb%2BvJtPr7S9bxOqaniSvib1LUXERPyR%2Fhr5aF6H3%2Bzg1zHnMAZLSHnrZnR5zjvaORaGC96rZgFN28tN07mQVKKsgWlIDjJ7loGfJgzVJiEb4WUuylLJw0VqHjpCqtwBxvJQ4zNQt3juIPkaYLxBMNDi3MQGOqUBockFStyJtqk0InR9mmxv7AC5%2Fzh9Mu9i7Iic8jueHlRooZBWEqXL1LZEPRq%2FvGSblFWxM%2B%2FiOmQAvEAl7YH38a9claMwuRKxH0zA3sU3r9MNP0PFscx7KR9h0kEA2ksiRP3JN2poNf3R8V1cbOc1zKF2khnPRl8QbhkVBVIa6h7F0VM0HJLNYtlY3rAUuVB4DozOhdTvpt2gmU7sRQq0PSHvIc4M&X-Amz-Signature=ed0caa6411432110c450b605fd67f1275f5efb9e67fec87896fa2d8061745e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
