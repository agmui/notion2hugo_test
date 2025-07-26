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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZJ7VSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICQyb9LsPvXhxQXc%2BDcnI8Y0ZJQURp%2FiT7fO0JdrOxZWAiA0rnJD1OwxKrMGAAwFYQX1kialuJPiwSYrlFa9YBG5eir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMMH%2BRU60dVSDPxBdhKtwDd%2F9LVZgjULQZL06%2BUmXfXS3%2FKQSQiwY98y74iO4go9FHmLPgSLO5XUAsa17uEMSyvWtpNy3ICP%2BNmocue%2BNf3vxj3M62IHqo%2BlGzgDZ0KpTZ498pFlGK5F0%2FnTRs499ig5SAaDMf6BBfLtoRZPmAq%2Bt6vE534o%2BZTFl3f302RtUQf4y2Gwrx%2BOHDaa7zvwYW2r1kzeUZyfj0pu5JaimYG4m1vElUxOOodNOqM8WSLaFHiYbAUsStHZIsvhh3RLxuSzN%2BO1qJxO2EbrZDgyIHz1D8OwkV4zLXrZLGaCLszSyE2n2Bvzs737j6502j%2Fp5uYkHUuW0ipBM5ExfuKXcbFyihvKFZlmF3Zcc3mIUwI7W%2BSH7EkzblvrXOZUGFGZ4WnEhAswopwjOTjM4M%2B%2Fvy9JCwtAqZdoMp9xAUhclCDu0zFakYVTRCY9Z5PNneppY4ymUxg0KyC4eRL15b4WYGpfuM5%2BVFS6ot8LRoiRXjfWmdz7IT2Aj3hSwxcGmJmULictJloTUybsi4fyyN8Ib%2FqqTviC3QdP3sKgQpRpdaxtbLpE0gShzq6nggaDRVhYdrRcFaOC1vwgadKm8x8SZoI%2BUp2kuaMInZnGmjlN55GIkukrwZtuTQyRd7Ml4w4O%2BQxAY6pgEVocZyZWbm4A6xsxucpujuxbpopRZtOQaWWo2WUbhBsaco5H4YqU2K4TaShrhkyyHBU%2FxTw1%2FHqcroT6wDYFnrCDs4L95tZo3KZaQVLJkYPmWyJriRzOgwsgF4C753RMpxKHBCyVWEApHhEvrH4Gu6yFRKTcV6E%2F30P%2BBfj4uoNHBmvyn5QvauFQYYTg9fWrxmADw5ZOioeWdAeQSReBB4qoGYev5E&X-Amz-Signature=cc2ccb5c8bb6c3731bc011b5e2326244024dbf9cbe46947d6f14d6d0899a417d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZJ7VSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICQyb9LsPvXhxQXc%2BDcnI8Y0ZJQURp%2FiT7fO0JdrOxZWAiA0rnJD1OwxKrMGAAwFYQX1kialuJPiwSYrlFa9YBG5eir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMMH%2BRU60dVSDPxBdhKtwDd%2F9LVZgjULQZL06%2BUmXfXS3%2FKQSQiwY98y74iO4go9FHmLPgSLO5XUAsa17uEMSyvWtpNy3ICP%2BNmocue%2BNf3vxj3M62IHqo%2BlGzgDZ0KpTZ498pFlGK5F0%2FnTRs499ig5SAaDMf6BBfLtoRZPmAq%2Bt6vE534o%2BZTFl3f302RtUQf4y2Gwrx%2BOHDaa7zvwYW2r1kzeUZyfj0pu5JaimYG4m1vElUxOOodNOqM8WSLaFHiYbAUsStHZIsvhh3RLxuSzN%2BO1qJxO2EbrZDgyIHz1D8OwkV4zLXrZLGaCLszSyE2n2Bvzs737j6502j%2Fp5uYkHUuW0ipBM5ExfuKXcbFyihvKFZlmF3Zcc3mIUwI7W%2BSH7EkzblvrXOZUGFGZ4WnEhAswopwjOTjM4M%2B%2Fvy9JCwtAqZdoMp9xAUhclCDu0zFakYVTRCY9Z5PNneppY4ymUxg0KyC4eRL15b4WYGpfuM5%2BVFS6ot8LRoiRXjfWmdz7IT2Aj3hSwxcGmJmULictJloTUybsi4fyyN8Ib%2FqqTviC3QdP3sKgQpRpdaxtbLpE0gShzq6nggaDRVhYdrRcFaOC1vwgadKm8x8SZoI%2BUp2kuaMInZnGmjlN55GIkukrwZtuTQyRd7Ml4w4O%2BQxAY6pgEVocZyZWbm4A6xsxucpujuxbpopRZtOQaWWo2WUbhBsaco5H4YqU2K4TaShrhkyyHBU%2FxTw1%2FHqcroT6wDYFnrCDs4L95tZo3KZaQVLJkYPmWyJriRzOgwsgF4C753RMpxKHBCyVWEApHhEvrH4Gu6yFRKTcV6E%2F30P%2BBfj4uoNHBmvyn5QvauFQYYTg9fWrxmADw5ZOioeWdAeQSReBB4qoGYev5E&X-Amz-Signature=f5c1a44477318bfe2b1ed0f7837eef16311e3c4e6e8657a8a02b2781d7dc8749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZJ7VSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICQyb9LsPvXhxQXc%2BDcnI8Y0ZJQURp%2FiT7fO0JdrOxZWAiA0rnJD1OwxKrMGAAwFYQX1kialuJPiwSYrlFa9YBG5eir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMMH%2BRU60dVSDPxBdhKtwDd%2F9LVZgjULQZL06%2BUmXfXS3%2FKQSQiwY98y74iO4go9FHmLPgSLO5XUAsa17uEMSyvWtpNy3ICP%2BNmocue%2BNf3vxj3M62IHqo%2BlGzgDZ0KpTZ498pFlGK5F0%2FnTRs499ig5SAaDMf6BBfLtoRZPmAq%2Bt6vE534o%2BZTFl3f302RtUQf4y2Gwrx%2BOHDaa7zvwYW2r1kzeUZyfj0pu5JaimYG4m1vElUxOOodNOqM8WSLaFHiYbAUsStHZIsvhh3RLxuSzN%2BO1qJxO2EbrZDgyIHz1D8OwkV4zLXrZLGaCLszSyE2n2Bvzs737j6502j%2Fp5uYkHUuW0ipBM5ExfuKXcbFyihvKFZlmF3Zcc3mIUwI7W%2BSH7EkzblvrXOZUGFGZ4WnEhAswopwjOTjM4M%2B%2Fvy9JCwtAqZdoMp9xAUhclCDu0zFakYVTRCY9Z5PNneppY4ymUxg0KyC4eRL15b4WYGpfuM5%2BVFS6ot8LRoiRXjfWmdz7IT2Aj3hSwxcGmJmULictJloTUybsi4fyyN8Ib%2FqqTviC3QdP3sKgQpRpdaxtbLpE0gShzq6nggaDRVhYdrRcFaOC1vwgadKm8x8SZoI%2BUp2kuaMInZnGmjlN55GIkukrwZtuTQyRd7Ml4w4O%2BQxAY6pgEVocZyZWbm4A6xsxucpujuxbpopRZtOQaWWo2WUbhBsaco5H4YqU2K4TaShrhkyyHBU%2FxTw1%2FHqcroT6wDYFnrCDs4L95tZo3KZaQVLJkYPmWyJriRzOgwsgF4C753RMpxKHBCyVWEApHhEvrH4Gu6yFRKTcV6E%2F30P%2BBfj4uoNHBmvyn5QvauFQYYTg9fWrxmADw5ZOioeWdAeQSReBB4qoGYev5E&X-Amz-Signature=f0ac70269c83bf3e8b96fa273139172b933b3816cda73575422e3b2d5c0e86cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZJ7VSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICQyb9LsPvXhxQXc%2BDcnI8Y0ZJQURp%2FiT7fO0JdrOxZWAiA0rnJD1OwxKrMGAAwFYQX1kialuJPiwSYrlFa9YBG5eir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMMH%2BRU60dVSDPxBdhKtwDd%2F9LVZgjULQZL06%2BUmXfXS3%2FKQSQiwY98y74iO4go9FHmLPgSLO5XUAsa17uEMSyvWtpNy3ICP%2BNmocue%2BNf3vxj3M62IHqo%2BlGzgDZ0KpTZ498pFlGK5F0%2FnTRs499ig5SAaDMf6BBfLtoRZPmAq%2Bt6vE534o%2BZTFl3f302RtUQf4y2Gwrx%2BOHDaa7zvwYW2r1kzeUZyfj0pu5JaimYG4m1vElUxOOodNOqM8WSLaFHiYbAUsStHZIsvhh3RLxuSzN%2BO1qJxO2EbrZDgyIHz1D8OwkV4zLXrZLGaCLszSyE2n2Bvzs737j6502j%2Fp5uYkHUuW0ipBM5ExfuKXcbFyihvKFZlmF3Zcc3mIUwI7W%2BSH7EkzblvrXOZUGFGZ4WnEhAswopwjOTjM4M%2B%2Fvy9JCwtAqZdoMp9xAUhclCDu0zFakYVTRCY9Z5PNneppY4ymUxg0KyC4eRL15b4WYGpfuM5%2BVFS6ot8LRoiRXjfWmdz7IT2Aj3hSwxcGmJmULictJloTUybsi4fyyN8Ib%2FqqTviC3QdP3sKgQpRpdaxtbLpE0gShzq6nggaDRVhYdrRcFaOC1vwgadKm8x8SZoI%2BUp2kuaMInZnGmjlN55GIkukrwZtuTQyRd7Ml4w4O%2BQxAY6pgEVocZyZWbm4A6xsxucpujuxbpopRZtOQaWWo2WUbhBsaco5H4YqU2K4TaShrhkyyHBU%2FxTw1%2FHqcroT6wDYFnrCDs4L95tZo3KZaQVLJkYPmWyJriRzOgwsgF4C753RMpxKHBCyVWEApHhEvrH4Gu6yFRKTcV6E%2F30P%2BBfj4uoNHBmvyn5QvauFQYYTg9fWrxmADw5ZOioeWdAeQSReBB4qoGYev5E&X-Amz-Signature=33cbfc12d4dfd1b38044ff8606f42efdcdc55e03bf5e8e9ab57a5b22d0bb62c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZJ7VSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICQyb9LsPvXhxQXc%2BDcnI8Y0ZJQURp%2FiT7fO0JdrOxZWAiA0rnJD1OwxKrMGAAwFYQX1kialuJPiwSYrlFa9YBG5eir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMMH%2BRU60dVSDPxBdhKtwDd%2F9LVZgjULQZL06%2BUmXfXS3%2FKQSQiwY98y74iO4go9FHmLPgSLO5XUAsa17uEMSyvWtpNy3ICP%2BNmocue%2BNf3vxj3M62IHqo%2BlGzgDZ0KpTZ498pFlGK5F0%2FnTRs499ig5SAaDMf6BBfLtoRZPmAq%2Bt6vE534o%2BZTFl3f302RtUQf4y2Gwrx%2BOHDaa7zvwYW2r1kzeUZyfj0pu5JaimYG4m1vElUxOOodNOqM8WSLaFHiYbAUsStHZIsvhh3RLxuSzN%2BO1qJxO2EbrZDgyIHz1D8OwkV4zLXrZLGaCLszSyE2n2Bvzs737j6502j%2Fp5uYkHUuW0ipBM5ExfuKXcbFyihvKFZlmF3Zcc3mIUwI7W%2BSH7EkzblvrXOZUGFGZ4WnEhAswopwjOTjM4M%2B%2Fvy9JCwtAqZdoMp9xAUhclCDu0zFakYVTRCY9Z5PNneppY4ymUxg0KyC4eRL15b4WYGpfuM5%2BVFS6ot8LRoiRXjfWmdz7IT2Aj3hSwxcGmJmULictJloTUybsi4fyyN8Ib%2FqqTviC3QdP3sKgQpRpdaxtbLpE0gShzq6nggaDRVhYdrRcFaOC1vwgadKm8x8SZoI%2BUp2kuaMInZnGmjlN55GIkukrwZtuTQyRd7Ml4w4O%2BQxAY6pgEVocZyZWbm4A6xsxucpujuxbpopRZtOQaWWo2WUbhBsaco5H4YqU2K4TaShrhkyyHBU%2FxTw1%2FHqcroT6wDYFnrCDs4L95tZo3KZaQVLJkYPmWyJriRzOgwsgF4C753RMpxKHBCyVWEApHhEvrH4Gu6yFRKTcV6E%2F30P%2BBfj4uoNHBmvyn5QvauFQYYTg9fWrxmADw5ZOioeWdAeQSReBB4qoGYev5E&X-Amz-Signature=7a9acd350210d94c9480120d856963edb6ae8f68efd4947c2a43dd7b99f7375e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
