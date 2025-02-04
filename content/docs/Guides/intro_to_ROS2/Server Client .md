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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CR6N4YQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHuSQncUuj8Xhea2SZCYjTQUO4%2FJRUeKea%2Foh8tF8ZeSAiEAzR%2FUKMHQavN8AQcxj8ZmZ12v0Js3Z5Iu9Nh68zhvt%2BEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBq9LfG%2Bd4YdrENEiircA%2F8RTP%2BShMs1SiJlSkr9PnCkGhr1cUUhfc4rBLZ7B%2F%2BsGoNMEeiHR7oDyJm%2BBC%2BLW%2FnxS9F9GBTwT7oRfdcHk9hRgCz4rWW6Ifk0h1MyfxrCTBJt3X7PUlFW7FPER3jAzJG%2BTmdKWZi%2BjNiHuIwaYgQa%2FJhk04Agq3oEri7X3%2BwT46bWBfrvtO1Enqf6QsCXYdpw55Ofp3rH3aVH%2BoOysv4kgPJgo1EIwICwXksnor%2Bds3LDQRVWLreBw96bwFeuPvSfzYvANo%2FyE6ZjiIJLjs1mwDUw3nTWqNnQbBcAqw2Ym7J%2FBQHG5YTp%2F4XquK%2BMJwCtYcG9MRWf0szUtQxN%2BN8y0ApKsYEOtxz8gSP2qrPky9iyxXJVhp71W8mfnKwn353Wuakcpzuo2qToy7sclnCaSRPckOM0LR8RqRrFJXcMCczSes0s5YWeKZFux%2FmAMzhW08TJI7BECce9vwyR4deWjEwKCOQs48e47JTXJiwnQOtr5EGHgvMbnmBhVlwZArnpcevs0PnCRmGuLksLDiqtI7b8FaFViE7hkpynVygL5A2LOq%2Fqtap0bAyPuFBHXIkWuCueqB50vfWcmNjTfOQBo6441EVuJIVowdnpY9MIkzIMbi9IiVyB56CYMKGVhb0GOqUB6U9oghiQvU4pWSe%2BHoOCcZJlH4MIt4dxWHDbC5UBAs%2FE3HII70jWPodmLoHUhCbHkqoNkZyv8FDgq29iwaPpqor%2FO3w0XWWOiy7H5n8r0%2BnVMhBduIrbT4yUhnule3w5ysRnOVOSynHelYjV6FgVhIIXkWdtWYhY%2BMOlF7wVg%2BX83oB2%2FxiUKyJhfSRG91N0rFXgnHSiHziwR7p%2BMM1r8woyeW1I&X-Amz-Signature=0c8c36052834d392a23f6d2dd963950cecea243faed37ef848780807a5e0d3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CR6N4YQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHuSQncUuj8Xhea2SZCYjTQUO4%2FJRUeKea%2Foh8tF8ZeSAiEAzR%2FUKMHQavN8AQcxj8ZmZ12v0Js3Z5Iu9Nh68zhvt%2BEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBq9LfG%2Bd4YdrENEiircA%2F8RTP%2BShMs1SiJlSkr9PnCkGhr1cUUhfc4rBLZ7B%2F%2BsGoNMEeiHR7oDyJm%2BBC%2BLW%2FnxS9F9GBTwT7oRfdcHk9hRgCz4rWW6Ifk0h1MyfxrCTBJt3X7PUlFW7FPER3jAzJG%2BTmdKWZi%2BjNiHuIwaYgQa%2FJhk04Agq3oEri7X3%2BwT46bWBfrvtO1Enqf6QsCXYdpw55Ofp3rH3aVH%2BoOysv4kgPJgo1EIwICwXksnor%2Bds3LDQRVWLreBw96bwFeuPvSfzYvANo%2FyE6ZjiIJLjs1mwDUw3nTWqNnQbBcAqw2Ym7J%2FBQHG5YTp%2F4XquK%2BMJwCtYcG9MRWf0szUtQxN%2BN8y0ApKsYEOtxz8gSP2qrPky9iyxXJVhp71W8mfnKwn353Wuakcpzuo2qToy7sclnCaSRPckOM0LR8RqRrFJXcMCczSes0s5YWeKZFux%2FmAMzhW08TJI7BECce9vwyR4deWjEwKCOQs48e47JTXJiwnQOtr5EGHgvMbnmBhVlwZArnpcevs0PnCRmGuLksLDiqtI7b8FaFViE7hkpynVygL5A2LOq%2Fqtap0bAyPuFBHXIkWuCueqB50vfWcmNjTfOQBo6441EVuJIVowdnpY9MIkzIMbi9IiVyB56CYMKGVhb0GOqUB6U9oghiQvU4pWSe%2BHoOCcZJlH4MIt4dxWHDbC5UBAs%2FE3HII70jWPodmLoHUhCbHkqoNkZyv8FDgq29iwaPpqor%2FO3w0XWWOiy7H5n8r0%2BnVMhBduIrbT4yUhnule3w5ysRnOVOSynHelYjV6FgVhIIXkWdtWYhY%2BMOlF7wVg%2BX83oB2%2FxiUKyJhfSRG91N0rFXgnHSiHziwR7p%2BMM1r8woyeW1I&X-Amz-Signature=6dd1f06fd6955a4f77164bab8bf2ddf82acd5f21855b8b4e90d8a4d6b959c6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CR6N4YQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHuSQncUuj8Xhea2SZCYjTQUO4%2FJRUeKea%2Foh8tF8ZeSAiEAzR%2FUKMHQavN8AQcxj8ZmZ12v0Js3Z5Iu9Nh68zhvt%2BEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBq9LfG%2Bd4YdrENEiircA%2F8RTP%2BShMs1SiJlSkr9PnCkGhr1cUUhfc4rBLZ7B%2F%2BsGoNMEeiHR7oDyJm%2BBC%2BLW%2FnxS9F9GBTwT7oRfdcHk9hRgCz4rWW6Ifk0h1MyfxrCTBJt3X7PUlFW7FPER3jAzJG%2BTmdKWZi%2BjNiHuIwaYgQa%2FJhk04Agq3oEri7X3%2BwT46bWBfrvtO1Enqf6QsCXYdpw55Ofp3rH3aVH%2BoOysv4kgPJgo1EIwICwXksnor%2Bds3LDQRVWLreBw96bwFeuPvSfzYvANo%2FyE6ZjiIJLjs1mwDUw3nTWqNnQbBcAqw2Ym7J%2FBQHG5YTp%2F4XquK%2BMJwCtYcG9MRWf0szUtQxN%2BN8y0ApKsYEOtxz8gSP2qrPky9iyxXJVhp71W8mfnKwn353Wuakcpzuo2qToy7sclnCaSRPckOM0LR8RqRrFJXcMCczSes0s5YWeKZFux%2FmAMzhW08TJI7BECce9vwyR4deWjEwKCOQs48e47JTXJiwnQOtr5EGHgvMbnmBhVlwZArnpcevs0PnCRmGuLksLDiqtI7b8FaFViE7hkpynVygL5A2LOq%2Fqtap0bAyPuFBHXIkWuCueqB50vfWcmNjTfOQBo6441EVuJIVowdnpY9MIkzIMbi9IiVyB56CYMKGVhb0GOqUB6U9oghiQvU4pWSe%2BHoOCcZJlH4MIt4dxWHDbC5UBAs%2FE3HII70jWPodmLoHUhCbHkqoNkZyv8FDgq29iwaPpqor%2FO3w0XWWOiy7H5n8r0%2BnVMhBduIrbT4yUhnule3w5ysRnOVOSynHelYjV6FgVhIIXkWdtWYhY%2BMOlF7wVg%2BX83oB2%2FxiUKyJhfSRG91N0rFXgnHSiHziwR7p%2BMM1r8woyeW1I&X-Amz-Signature=9cda93b7b50a2d3116d10de6819aa6c1126f3517076c613b92e84e6dda90316e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CR6N4YQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHuSQncUuj8Xhea2SZCYjTQUO4%2FJRUeKea%2Foh8tF8ZeSAiEAzR%2FUKMHQavN8AQcxj8ZmZ12v0Js3Z5Iu9Nh68zhvt%2BEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBq9LfG%2Bd4YdrENEiircA%2F8RTP%2BShMs1SiJlSkr9PnCkGhr1cUUhfc4rBLZ7B%2F%2BsGoNMEeiHR7oDyJm%2BBC%2BLW%2FnxS9F9GBTwT7oRfdcHk9hRgCz4rWW6Ifk0h1MyfxrCTBJt3X7PUlFW7FPER3jAzJG%2BTmdKWZi%2BjNiHuIwaYgQa%2FJhk04Agq3oEri7X3%2BwT46bWBfrvtO1Enqf6QsCXYdpw55Ofp3rH3aVH%2BoOysv4kgPJgo1EIwICwXksnor%2Bds3LDQRVWLreBw96bwFeuPvSfzYvANo%2FyE6ZjiIJLjs1mwDUw3nTWqNnQbBcAqw2Ym7J%2FBQHG5YTp%2F4XquK%2BMJwCtYcG9MRWf0szUtQxN%2BN8y0ApKsYEOtxz8gSP2qrPky9iyxXJVhp71W8mfnKwn353Wuakcpzuo2qToy7sclnCaSRPckOM0LR8RqRrFJXcMCczSes0s5YWeKZFux%2FmAMzhW08TJI7BECce9vwyR4deWjEwKCOQs48e47JTXJiwnQOtr5EGHgvMbnmBhVlwZArnpcevs0PnCRmGuLksLDiqtI7b8FaFViE7hkpynVygL5A2LOq%2Fqtap0bAyPuFBHXIkWuCueqB50vfWcmNjTfOQBo6441EVuJIVowdnpY9MIkzIMbi9IiVyB56CYMKGVhb0GOqUB6U9oghiQvU4pWSe%2BHoOCcZJlH4MIt4dxWHDbC5UBAs%2FE3HII70jWPodmLoHUhCbHkqoNkZyv8FDgq29iwaPpqor%2FO3w0XWWOiy7H5n8r0%2BnVMhBduIrbT4yUhnule3w5ysRnOVOSynHelYjV6FgVhIIXkWdtWYhY%2BMOlF7wVg%2BX83oB2%2FxiUKyJhfSRG91N0rFXgnHSiHziwR7p%2BMM1r8woyeW1I&X-Amz-Signature=ddd0052853c755404035ea8ced4d9bfbd2360804191fae5f839ba680341b61c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CR6N4YQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHuSQncUuj8Xhea2SZCYjTQUO4%2FJRUeKea%2Foh8tF8ZeSAiEAzR%2FUKMHQavN8AQcxj8ZmZ12v0Js3Z5Iu9Nh68zhvt%2BEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBq9LfG%2Bd4YdrENEiircA%2F8RTP%2BShMs1SiJlSkr9PnCkGhr1cUUhfc4rBLZ7B%2F%2BsGoNMEeiHR7oDyJm%2BBC%2BLW%2FnxS9F9GBTwT7oRfdcHk9hRgCz4rWW6Ifk0h1MyfxrCTBJt3X7PUlFW7FPER3jAzJG%2BTmdKWZi%2BjNiHuIwaYgQa%2FJhk04Agq3oEri7X3%2BwT46bWBfrvtO1Enqf6QsCXYdpw55Ofp3rH3aVH%2BoOysv4kgPJgo1EIwICwXksnor%2Bds3LDQRVWLreBw96bwFeuPvSfzYvANo%2FyE6ZjiIJLjs1mwDUw3nTWqNnQbBcAqw2Ym7J%2FBQHG5YTp%2F4XquK%2BMJwCtYcG9MRWf0szUtQxN%2BN8y0ApKsYEOtxz8gSP2qrPky9iyxXJVhp71W8mfnKwn353Wuakcpzuo2qToy7sclnCaSRPckOM0LR8RqRrFJXcMCczSes0s5YWeKZFux%2FmAMzhW08TJI7BECce9vwyR4deWjEwKCOQs48e47JTXJiwnQOtr5EGHgvMbnmBhVlwZArnpcevs0PnCRmGuLksLDiqtI7b8FaFViE7hkpynVygL5A2LOq%2Fqtap0bAyPuFBHXIkWuCueqB50vfWcmNjTfOQBo6441EVuJIVowdnpY9MIkzIMbi9IiVyB56CYMKGVhb0GOqUB6U9oghiQvU4pWSe%2BHoOCcZJlH4MIt4dxWHDbC5UBAs%2FE3HII70jWPodmLoHUhCbHkqoNkZyv8FDgq29iwaPpqor%2FO3w0XWWOiy7H5n8r0%2BnVMhBduIrbT4yUhnule3w5ysRnOVOSynHelYjV6FgVhIIXkWdtWYhY%2BMOlF7wVg%2BX83oB2%2FxiUKyJhfSRG91N0rFXgnHSiHziwR7p%2BMM1r8woyeW1I&X-Amz-Signature=91b1c6f06d5c2608983be6256be277315edd6cb82bac270cbb7f04806217f5f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
