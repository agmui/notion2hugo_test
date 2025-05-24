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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROOUTEB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCBqUgb3P%2FqLg1tZTMcVyp93%2FOp39w1RJSLRfojgTNa4gIhAJtjaVTbDL6i2Q6LP1pu6bb2SzT5iay%2Fj4ikP0JvfYWwKv8DCBcQABoMNjM3NDIzMTgzODA1IgysTy3JmYUlp7JQbbkq3AMZjxfm5CdWgo2M%2BWN9RQ4TW%2Fk6Yrke6%2FoTT1JTfvfs9mn2LF7iHxg8CovOJVcmiCg0zvzUAgCnEFp4Lm%2FbHAROFK6LlL02aQX7RwwTPVWnrWMzR2BsdcuSPHlkzygrAWDZZHaGwWz4Tji%2FiMdwfWVMH6bfyNv2F0PlSTtDOXmH3ovPomuCzt79gnjVHeS8fY%2Bwy452TtawKU%2Bubqs0BN5aa3uLUccVrU2krZ6A%2BWNxrPcXFZ92MBfxTtcuVlSi%2F4Q197m8LbDRambQ0dO31NpNjB3G4BM%2F7BaU3jJxKtm6Q%2B6RxnTzpHcYv03WQVhaB1Djqrg7Z3ypyxtpYKVtFVJRevmbgzfYs1g06KN2bfr5lGpb%2BjY3Ehaa05IydIez0yh0Cse%2BWI9%2FBNDmh4f3egiMARHFx8Rfe18hEYO9AySVF39W%2BHgKM%2FwwAfvpeqExFxyDvUfIcU0dm06pTDIOB3677AyhuzbzSV6m99FbvNYPxDHkyFAuY5%2BZPaVfxlcRbwhren6fqo9Gh4gj02sUj3Y5z78JHt2tv3j38zbhxykm9KUDFRr0cFHsAkFHRe6S9bkPus%2BKHN6TBS0S6gns5mUGRijXRiRKa0EOHv03i%2Bv4T2E%2BKvoqmxF%2FfMfFkzC9ocfBBjqkAbGG%2FdOZCU8dEd03W7zpFzTeeY%2Fy1ZHp5WIh4fMPKCE42yRxOP%2BPMj%2FBLy1hCd8cF60b0tky2JOaJU4KJf4Z%2FUGChXuk2L7UCXdDoQ0zGeVctQxvyYftgxohi9wKt3VT2YP5FJi6s%2Bs8ME6%2BBM8jF7VbFpkozSxdaGxeS3gOkq1mFvGTEmp%2BuPMZiVlSKHtfPpdPWIuLsbqIxwz2lgvFeJ1iGRLJ&X-Amz-Signature=d5dd22b01a39e9a593572a89618e262e06f4515cfddea597feaa3694857999fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROOUTEB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCBqUgb3P%2FqLg1tZTMcVyp93%2FOp39w1RJSLRfojgTNa4gIhAJtjaVTbDL6i2Q6LP1pu6bb2SzT5iay%2Fj4ikP0JvfYWwKv8DCBcQABoMNjM3NDIzMTgzODA1IgysTy3JmYUlp7JQbbkq3AMZjxfm5CdWgo2M%2BWN9RQ4TW%2Fk6Yrke6%2FoTT1JTfvfs9mn2LF7iHxg8CovOJVcmiCg0zvzUAgCnEFp4Lm%2FbHAROFK6LlL02aQX7RwwTPVWnrWMzR2BsdcuSPHlkzygrAWDZZHaGwWz4Tji%2FiMdwfWVMH6bfyNv2F0PlSTtDOXmH3ovPomuCzt79gnjVHeS8fY%2Bwy452TtawKU%2Bubqs0BN5aa3uLUccVrU2krZ6A%2BWNxrPcXFZ92MBfxTtcuVlSi%2F4Q197m8LbDRambQ0dO31NpNjB3G4BM%2F7BaU3jJxKtm6Q%2B6RxnTzpHcYv03WQVhaB1Djqrg7Z3ypyxtpYKVtFVJRevmbgzfYs1g06KN2bfr5lGpb%2BjY3Ehaa05IydIez0yh0Cse%2BWI9%2FBNDmh4f3egiMARHFx8Rfe18hEYO9AySVF39W%2BHgKM%2FwwAfvpeqExFxyDvUfIcU0dm06pTDIOB3677AyhuzbzSV6m99FbvNYPxDHkyFAuY5%2BZPaVfxlcRbwhren6fqo9Gh4gj02sUj3Y5z78JHt2tv3j38zbhxykm9KUDFRr0cFHsAkFHRe6S9bkPus%2BKHN6TBS0S6gns5mUGRijXRiRKa0EOHv03i%2Bv4T2E%2BKvoqmxF%2FfMfFkzC9ocfBBjqkAbGG%2FdOZCU8dEd03W7zpFzTeeY%2Fy1ZHp5WIh4fMPKCE42yRxOP%2BPMj%2FBLy1hCd8cF60b0tky2JOaJU4KJf4Z%2FUGChXuk2L7UCXdDoQ0zGeVctQxvyYftgxohi9wKt3VT2YP5FJi6s%2Bs8ME6%2BBM8jF7VbFpkozSxdaGxeS3gOkq1mFvGTEmp%2BuPMZiVlSKHtfPpdPWIuLsbqIxwz2lgvFeJ1iGRLJ&X-Amz-Signature=59bab43e696fc3d154335a4e8c9c7fd9ce0bd7f3d06f6c9eecc028b8da77b372&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROOUTEB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCBqUgb3P%2FqLg1tZTMcVyp93%2FOp39w1RJSLRfojgTNa4gIhAJtjaVTbDL6i2Q6LP1pu6bb2SzT5iay%2Fj4ikP0JvfYWwKv8DCBcQABoMNjM3NDIzMTgzODA1IgysTy3JmYUlp7JQbbkq3AMZjxfm5CdWgo2M%2BWN9RQ4TW%2Fk6Yrke6%2FoTT1JTfvfs9mn2LF7iHxg8CovOJVcmiCg0zvzUAgCnEFp4Lm%2FbHAROFK6LlL02aQX7RwwTPVWnrWMzR2BsdcuSPHlkzygrAWDZZHaGwWz4Tji%2FiMdwfWVMH6bfyNv2F0PlSTtDOXmH3ovPomuCzt79gnjVHeS8fY%2Bwy452TtawKU%2Bubqs0BN5aa3uLUccVrU2krZ6A%2BWNxrPcXFZ92MBfxTtcuVlSi%2F4Q197m8LbDRambQ0dO31NpNjB3G4BM%2F7BaU3jJxKtm6Q%2B6RxnTzpHcYv03WQVhaB1Djqrg7Z3ypyxtpYKVtFVJRevmbgzfYs1g06KN2bfr5lGpb%2BjY3Ehaa05IydIez0yh0Cse%2BWI9%2FBNDmh4f3egiMARHFx8Rfe18hEYO9AySVF39W%2BHgKM%2FwwAfvpeqExFxyDvUfIcU0dm06pTDIOB3677AyhuzbzSV6m99FbvNYPxDHkyFAuY5%2BZPaVfxlcRbwhren6fqo9Gh4gj02sUj3Y5z78JHt2tv3j38zbhxykm9KUDFRr0cFHsAkFHRe6S9bkPus%2BKHN6TBS0S6gns5mUGRijXRiRKa0EOHv03i%2Bv4T2E%2BKvoqmxF%2FfMfFkzC9ocfBBjqkAbGG%2FdOZCU8dEd03W7zpFzTeeY%2Fy1ZHp5WIh4fMPKCE42yRxOP%2BPMj%2FBLy1hCd8cF60b0tky2JOaJU4KJf4Z%2FUGChXuk2L7UCXdDoQ0zGeVctQxvyYftgxohi9wKt3VT2YP5FJi6s%2Bs8ME6%2BBM8jF7VbFpkozSxdaGxeS3gOkq1mFvGTEmp%2BuPMZiVlSKHtfPpdPWIuLsbqIxwz2lgvFeJ1iGRLJ&X-Amz-Signature=d1208333d20ebe9f042688975d4db9c8d9f98fcd76306d344be2ab8bc9677a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROOUTEB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCBqUgb3P%2FqLg1tZTMcVyp93%2FOp39w1RJSLRfojgTNa4gIhAJtjaVTbDL6i2Q6LP1pu6bb2SzT5iay%2Fj4ikP0JvfYWwKv8DCBcQABoMNjM3NDIzMTgzODA1IgysTy3JmYUlp7JQbbkq3AMZjxfm5CdWgo2M%2BWN9RQ4TW%2Fk6Yrke6%2FoTT1JTfvfs9mn2LF7iHxg8CovOJVcmiCg0zvzUAgCnEFp4Lm%2FbHAROFK6LlL02aQX7RwwTPVWnrWMzR2BsdcuSPHlkzygrAWDZZHaGwWz4Tji%2FiMdwfWVMH6bfyNv2F0PlSTtDOXmH3ovPomuCzt79gnjVHeS8fY%2Bwy452TtawKU%2Bubqs0BN5aa3uLUccVrU2krZ6A%2BWNxrPcXFZ92MBfxTtcuVlSi%2F4Q197m8LbDRambQ0dO31NpNjB3G4BM%2F7BaU3jJxKtm6Q%2B6RxnTzpHcYv03WQVhaB1Djqrg7Z3ypyxtpYKVtFVJRevmbgzfYs1g06KN2bfr5lGpb%2BjY3Ehaa05IydIez0yh0Cse%2BWI9%2FBNDmh4f3egiMARHFx8Rfe18hEYO9AySVF39W%2BHgKM%2FwwAfvpeqExFxyDvUfIcU0dm06pTDIOB3677AyhuzbzSV6m99FbvNYPxDHkyFAuY5%2BZPaVfxlcRbwhren6fqo9Gh4gj02sUj3Y5z78JHt2tv3j38zbhxykm9KUDFRr0cFHsAkFHRe6S9bkPus%2BKHN6TBS0S6gns5mUGRijXRiRKa0EOHv03i%2Bv4T2E%2BKvoqmxF%2FfMfFkzC9ocfBBjqkAbGG%2FdOZCU8dEd03W7zpFzTeeY%2Fy1ZHp5WIh4fMPKCE42yRxOP%2BPMj%2FBLy1hCd8cF60b0tky2JOaJU4KJf4Z%2FUGChXuk2L7UCXdDoQ0zGeVctQxvyYftgxohi9wKt3VT2YP5FJi6s%2Bs8ME6%2BBM8jF7VbFpkozSxdaGxeS3gOkq1mFvGTEmp%2BuPMZiVlSKHtfPpdPWIuLsbqIxwz2lgvFeJ1iGRLJ&X-Amz-Signature=008d7d78f2ac734de07e6c3040e31ae0657d3afdb557caeb6580efd7ef182f83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROOUTEB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCBqUgb3P%2FqLg1tZTMcVyp93%2FOp39w1RJSLRfojgTNa4gIhAJtjaVTbDL6i2Q6LP1pu6bb2SzT5iay%2Fj4ikP0JvfYWwKv8DCBcQABoMNjM3NDIzMTgzODA1IgysTy3JmYUlp7JQbbkq3AMZjxfm5CdWgo2M%2BWN9RQ4TW%2Fk6Yrke6%2FoTT1JTfvfs9mn2LF7iHxg8CovOJVcmiCg0zvzUAgCnEFp4Lm%2FbHAROFK6LlL02aQX7RwwTPVWnrWMzR2BsdcuSPHlkzygrAWDZZHaGwWz4Tji%2FiMdwfWVMH6bfyNv2F0PlSTtDOXmH3ovPomuCzt79gnjVHeS8fY%2Bwy452TtawKU%2Bubqs0BN5aa3uLUccVrU2krZ6A%2BWNxrPcXFZ92MBfxTtcuVlSi%2F4Q197m8LbDRambQ0dO31NpNjB3G4BM%2F7BaU3jJxKtm6Q%2B6RxnTzpHcYv03WQVhaB1Djqrg7Z3ypyxtpYKVtFVJRevmbgzfYs1g06KN2bfr5lGpb%2BjY3Ehaa05IydIez0yh0Cse%2BWI9%2FBNDmh4f3egiMARHFx8Rfe18hEYO9AySVF39W%2BHgKM%2FwwAfvpeqExFxyDvUfIcU0dm06pTDIOB3677AyhuzbzSV6m99FbvNYPxDHkyFAuY5%2BZPaVfxlcRbwhren6fqo9Gh4gj02sUj3Y5z78JHt2tv3j38zbhxykm9KUDFRr0cFHsAkFHRe6S9bkPus%2BKHN6TBS0S6gns5mUGRijXRiRKa0EOHv03i%2Bv4T2E%2BKvoqmxF%2FfMfFkzC9ocfBBjqkAbGG%2FdOZCU8dEd03W7zpFzTeeY%2Fy1ZHp5WIh4fMPKCE42yRxOP%2BPMj%2FBLy1hCd8cF60b0tky2JOaJU4KJf4Z%2FUGChXuk2L7UCXdDoQ0zGeVctQxvyYftgxohi9wKt3VT2YP5FJi6s%2Bs8ME6%2BBM8jF7VbFpkozSxdaGxeS3gOkq1mFvGTEmp%2BuPMZiVlSKHtfPpdPWIuLsbqIxwz2lgvFeJ1iGRLJ&X-Amz-Signature=5dc205316f528811c63ea5969e5553300e25cafac465b508436b25d17257fafc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
