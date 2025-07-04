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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYQBVD4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGYB%2BNL0xaHHdh9WA13EhK6d%2FXS3tliVbDvoD15cch5iAiAfxU9GWM3YNgCBRixylAes7z7l%2B9NbvO%2BFsOcgdUQqoSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMDQJ6KTigLJ18g9A3KtwDgURu8ugc9hIA7Hcx3e0VbwqaqbLTW2VZYMHtnH7QgpWuXxGOntth2Mc6dEBKMGHkrI%2FMw8%2BQFlJB2GSuZhbnrYT500TT%2F%2F1t2BpbsB8JKNZgZkaUYmsnJ%2BjSRPXy57TMooiKjWhuArqoH0Gq0ojwEFyQDFRGuFJ8gvkuWruDCYzclnZNHN8CVRB4SSft1ItuD4qyZQYyXXn836f1SkaJLXhEPm5nNQ0U11PJN%2BaVStrsntU4hR1BTcbEFF3cdiX9i1KrrqbBaQF%2FKSnMXkN60DRO8hSpNhVFbmjKPeAQXoTmjYP1kupdTi%2Bz5McAlKpbzCGUvLM%2Frb6ZKNLy5tcpO2cvoo9uayAEkwDH1u9OrGh3nDJNQmfbhWDVo27BqRiLkxeibqLDctcrIrDrzDWEwQDWERIcD3KvEJsQwv77F9OYlQo5QlZ2dioJ2v7U2vbqnEHAfQ2N5fhVJiVBlKgHuXqD1TAI7NLMeq7eUnxA1XS6kEdK8oy7JRFL%2FqsUxE2tU9r4XGGqGBvO3ig8YoNKeIn0Gr%2FJ0fUcT8WDMvrfJblSGrnW1OseVk6GEGcGMsrAe6HpZBm0kDkorZnGgTX7Jnf5Zmujs9h%2BhRGnQpzm1RJDiMw1ccmliuBzvk4wz%2ByfwwY6pgHiARUP8uJ7pxysMl0WX%2Fvboc4a31q%2F6Ca5BScjVeiqh07skWGMorZmEJ3fJDSGmp2E8ul0kYIG8%2FtdFIoNAmNAUWFFDShEq5CwLvNpAvxYZj3lkmvRQnD6rPUf3qn8UkxLRTQIhYEzFDDgtm9KvNoEl4iQ4TwZmgtUFEzTw%2Bo1KpGPCC7hJNC3rvi9cvRzQP0OP%2BIN5gsz3lmOsoSVmbwV%2FhhMXfOl&X-Amz-Signature=25475b875ef88dbc59e8002e1e21726e55a4dda5887297b99e7b8896a874fb8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYQBVD4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGYB%2BNL0xaHHdh9WA13EhK6d%2FXS3tliVbDvoD15cch5iAiAfxU9GWM3YNgCBRixylAes7z7l%2B9NbvO%2BFsOcgdUQqoSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMDQJ6KTigLJ18g9A3KtwDgURu8ugc9hIA7Hcx3e0VbwqaqbLTW2VZYMHtnH7QgpWuXxGOntth2Mc6dEBKMGHkrI%2FMw8%2BQFlJB2GSuZhbnrYT500TT%2F%2F1t2BpbsB8JKNZgZkaUYmsnJ%2BjSRPXy57TMooiKjWhuArqoH0Gq0ojwEFyQDFRGuFJ8gvkuWruDCYzclnZNHN8CVRB4SSft1ItuD4qyZQYyXXn836f1SkaJLXhEPm5nNQ0U11PJN%2BaVStrsntU4hR1BTcbEFF3cdiX9i1KrrqbBaQF%2FKSnMXkN60DRO8hSpNhVFbmjKPeAQXoTmjYP1kupdTi%2Bz5McAlKpbzCGUvLM%2Frb6ZKNLy5tcpO2cvoo9uayAEkwDH1u9OrGh3nDJNQmfbhWDVo27BqRiLkxeibqLDctcrIrDrzDWEwQDWERIcD3KvEJsQwv77F9OYlQo5QlZ2dioJ2v7U2vbqnEHAfQ2N5fhVJiVBlKgHuXqD1TAI7NLMeq7eUnxA1XS6kEdK8oy7JRFL%2FqsUxE2tU9r4XGGqGBvO3ig8YoNKeIn0Gr%2FJ0fUcT8WDMvrfJblSGrnW1OseVk6GEGcGMsrAe6HpZBm0kDkorZnGgTX7Jnf5Zmujs9h%2BhRGnQpzm1RJDiMw1ccmliuBzvk4wz%2ByfwwY6pgHiARUP8uJ7pxysMl0WX%2Fvboc4a31q%2F6Ca5BScjVeiqh07skWGMorZmEJ3fJDSGmp2E8ul0kYIG8%2FtdFIoNAmNAUWFFDShEq5CwLvNpAvxYZj3lkmvRQnD6rPUf3qn8UkxLRTQIhYEzFDDgtm9KvNoEl4iQ4TwZmgtUFEzTw%2Bo1KpGPCC7hJNC3rvi9cvRzQP0OP%2BIN5gsz3lmOsoSVmbwV%2FhhMXfOl&X-Amz-Signature=dabf1b3155d7800b0f43076adf76cdee960ba766fc2cb3fe61b7d0588f47b7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYQBVD4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGYB%2BNL0xaHHdh9WA13EhK6d%2FXS3tliVbDvoD15cch5iAiAfxU9GWM3YNgCBRixylAes7z7l%2B9NbvO%2BFsOcgdUQqoSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMDQJ6KTigLJ18g9A3KtwDgURu8ugc9hIA7Hcx3e0VbwqaqbLTW2VZYMHtnH7QgpWuXxGOntth2Mc6dEBKMGHkrI%2FMw8%2BQFlJB2GSuZhbnrYT500TT%2F%2F1t2BpbsB8JKNZgZkaUYmsnJ%2BjSRPXy57TMooiKjWhuArqoH0Gq0ojwEFyQDFRGuFJ8gvkuWruDCYzclnZNHN8CVRB4SSft1ItuD4qyZQYyXXn836f1SkaJLXhEPm5nNQ0U11PJN%2BaVStrsntU4hR1BTcbEFF3cdiX9i1KrrqbBaQF%2FKSnMXkN60DRO8hSpNhVFbmjKPeAQXoTmjYP1kupdTi%2Bz5McAlKpbzCGUvLM%2Frb6ZKNLy5tcpO2cvoo9uayAEkwDH1u9OrGh3nDJNQmfbhWDVo27BqRiLkxeibqLDctcrIrDrzDWEwQDWERIcD3KvEJsQwv77F9OYlQo5QlZ2dioJ2v7U2vbqnEHAfQ2N5fhVJiVBlKgHuXqD1TAI7NLMeq7eUnxA1XS6kEdK8oy7JRFL%2FqsUxE2tU9r4XGGqGBvO3ig8YoNKeIn0Gr%2FJ0fUcT8WDMvrfJblSGrnW1OseVk6GEGcGMsrAe6HpZBm0kDkorZnGgTX7Jnf5Zmujs9h%2BhRGnQpzm1RJDiMw1ccmliuBzvk4wz%2ByfwwY6pgHiARUP8uJ7pxysMl0WX%2Fvboc4a31q%2F6Ca5BScjVeiqh07skWGMorZmEJ3fJDSGmp2E8ul0kYIG8%2FtdFIoNAmNAUWFFDShEq5CwLvNpAvxYZj3lkmvRQnD6rPUf3qn8UkxLRTQIhYEzFDDgtm9KvNoEl4iQ4TwZmgtUFEzTw%2Bo1KpGPCC7hJNC3rvi9cvRzQP0OP%2BIN5gsz3lmOsoSVmbwV%2FhhMXfOl&X-Amz-Signature=33b0dcf0d2e6a2d8f47ae1a2b6a596b8258252ab0d4de6f8f3886397b8bacdea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYQBVD4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGYB%2BNL0xaHHdh9WA13EhK6d%2FXS3tliVbDvoD15cch5iAiAfxU9GWM3YNgCBRixylAes7z7l%2B9NbvO%2BFsOcgdUQqoSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMDQJ6KTigLJ18g9A3KtwDgURu8ugc9hIA7Hcx3e0VbwqaqbLTW2VZYMHtnH7QgpWuXxGOntth2Mc6dEBKMGHkrI%2FMw8%2BQFlJB2GSuZhbnrYT500TT%2F%2F1t2BpbsB8JKNZgZkaUYmsnJ%2BjSRPXy57TMooiKjWhuArqoH0Gq0ojwEFyQDFRGuFJ8gvkuWruDCYzclnZNHN8CVRB4SSft1ItuD4qyZQYyXXn836f1SkaJLXhEPm5nNQ0U11PJN%2BaVStrsntU4hR1BTcbEFF3cdiX9i1KrrqbBaQF%2FKSnMXkN60DRO8hSpNhVFbmjKPeAQXoTmjYP1kupdTi%2Bz5McAlKpbzCGUvLM%2Frb6ZKNLy5tcpO2cvoo9uayAEkwDH1u9OrGh3nDJNQmfbhWDVo27BqRiLkxeibqLDctcrIrDrzDWEwQDWERIcD3KvEJsQwv77F9OYlQo5QlZ2dioJ2v7U2vbqnEHAfQ2N5fhVJiVBlKgHuXqD1TAI7NLMeq7eUnxA1XS6kEdK8oy7JRFL%2FqsUxE2tU9r4XGGqGBvO3ig8YoNKeIn0Gr%2FJ0fUcT8WDMvrfJblSGrnW1OseVk6GEGcGMsrAe6HpZBm0kDkorZnGgTX7Jnf5Zmujs9h%2BhRGnQpzm1RJDiMw1ccmliuBzvk4wz%2ByfwwY6pgHiARUP8uJ7pxysMl0WX%2Fvboc4a31q%2F6Ca5BScjVeiqh07skWGMorZmEJ3fJDSGmp2E8ul0kYIG8%2FtdFIoNAmNAUWFFDShEq5CwLvNpAvxYZj3lkmvRQnD6rPUf3qn8UkxLRTQIhYEzFDDgtm9KvNoEl4iQ4TwZmgtUFEzTw%2Bo1KpGPCC7hJNC3rvi9cvRzQP0OP%2BIN5gsz3lmOsoSVmbwV%2FhhMXfOl&X-Amz-Signature=af9d1779563e5cc5d90ca162e2a1f89575877a51b49f90d191e0665c78b93920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYQBVD4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGYB%2BNL0xaHHdh9WA13EhK6d%2FXS3tliVbDvoD15cch5iAiAfxU9GWM3YNgCBRixylAes7z7l%2B9NbvO%2BFsOcgdUQqoSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMDQJ6KTigLJ18g9A3KtwDgURu8ugc9hIA7Hcx3e0VbwqaqbLTW2VZYMHtnH7QgpWuXxGOntth2Mc6dEBKMGHkrI%2FMw8%2BQFlJB2GSuZhbnrYT500TT%2F%2F1t2BpbsB8JKNZgZkaUYmsnJ%2BjSRPXy57TMooiKjWhuArqoH0Gq0ojwEFyQDFRGuFJ8gvkuWruDCYzclnZNHN8CVRB4SSft1ItuD4qyZQYyXXn836f1SkaJLXhEPm5nNQ0U11PJN%2BaVStrsntU4hR1BTcbEFF3cdiX9i1KrrqbBaQF%2FKSnMXkN60DRO8hSpNhVFbmjKPeAQXoTmjYP1kupdTi%2Bz5McAlKpbzCGUvLM%2Frb6ZKNLy5tcpO2cvoo9uayAEkwDH1u9OrGh3nDJNQmfbhWDVo27BqRiLkxeibqLDctcrIrDrzDWEwQDWERIcD3KvEJsQwv77F9OYlQo5QlZ2dioJ2v7U2vbqnEHAfQ2N5fhVJiVBlKgHuXqD1TAI7NLMeq7eUnxA1XS6kEdK8oy7JRFL%2FqsUxE2tU9r4XGGqGBvO3ig8YoNKeIn0Gr%2FJ0fUcT8WDMvrfJblSGrnW1OseVk6GEGcGMsrAe6HpZBm0kDkorZnGgTX7Jnf5Zmujs9h%2BhRGnQpzm1RJDiMw1ccmliuBzvk4wz%2ByfwwY6pgHiARUP8uJ7pxysMl0WX%2Fvboc4a31q%2F6Ca5BScjVeiqh07skWGMorZmEJ3fJDSGmp2E8ul0kYIG8%2FtdFIoNAmNAUWFFDShEq5CwLvNpAvxYZj3lkmvRQnD6rPUf3qn8UkxLRTQIhYEzFDDgtm9KvNoEl4iQ4TwZmgtUFEzTw%2Bo1KpGPCC7hJNC3rvi9cvRzQP0OP%2BIN5gsz3lmOsoSVmbwV%2FhhMXfOl&X-Amz-Signature=09635677ee41f1d141390dcf636c8d1490b39103d743c527a261fc8f75be68d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
