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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBRLJF6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0o8ypo9cADPNKOEl2p3OTjfpbyldjSKY%2BH9TY8efn8QIhAKqdo4dJswrP2WP6Iyva9eRWeX%2FYwtIsWBwrYIhRyHhSKv8DCH4QABoMNjM3NDIzMTgzODA1IgxHgTetVN6n85Y9LHsq3AN%2BsDKkNn8cwUALQ1KyHYAVJwg4h9zpbHSeoxqcGelLuK1k6WDhrg4XeFLe82HUtdNXuXoZi8RWXnKM3xTQBMnTfxpZVFP4zUAw7fOgZF5KMGxT86YKSJsgUXrVI1%2FcPiA%2FN4r5n8zlkcDi%2B3eIt4RWcuiqD%2BZads%2Bs%2BVhIMJA0A0qrxqglGAaNi7zDRVImq%2F%2BJjZ0oiNk2LcpZAJm3kt7Cz3q9vF6bZvJqfPH2gF0H2eA7sO3gp0Xjd2ZfPXNZjU6V%2FgDVzRHL7%2FF3OqvdQ5gvaqo3rbhmSPG5NqglG8oYGaeUbjj0UzKhOpsvk8v5qhnD3LBQOYi4rYzwTa%2BYXx%2Fle7KX8%2BXcpwkjfaF7Dc7JfUxTEPWgawdLgN3dR9gjtDDAoWiqP9ZtJCeLiW6EfzSSNu6JoglO%2B0HASbXe%2F%2FC6SUfyoI9UmdoX1JOqfIcsBfIhcbSrSpgw7%2B0aIGBqidXCJraKyi0AO9%2BIaifA9td6ZNvRvc0C8bMdLT9t8GvAbHJR7c8ie4kQOcPN6feQqldSOh%2FwDpMP3ZKhY%2BfDdEa9PIYPQuf7MsvJqQMkvhXB46Bq9xRAMby3F%2BQV7NGGS5SUZI7jGMLZE2ValYp7rtRz7rMH6nePthsUgOST3DDP0b%2FABjqkAR7q0AbB3W%2Bx0a%2FXhsnFvq7lBcKslC%2BT8FDEc%2B4JDvQ1gvpgSbQlGE9N5Bprd0%2BHsNrgRApVooO3GaMOjAFUYRQokEx%2BdIc4ZQQLZjLe81r%2BAY3Mcc6LOvlExe6jyafK7WA70Sew8HKJ3j9HfBKyfl0zFatNy7VR9ke%2FUrhuWEvVTUB7BQC65DIUiJ7GOJQFjOt8MmwfSPeGlKroqwqu6%2Fc9OjBR&X-Amz-Signature=57a80ddd25f8c8a6b9c357e9246a06edd67a136b188ba753e8b2ff1450e3037f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBRLJF6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0o8ypo9cADPNKOEl2p3OTjfpbyldjSKY%2BH9TY8efn8QIhAKqdo4dJswrP2WP6Iyva9eRWeX%2FYwtIsWBwrYIhRyHhSKv8DCH4QABoMNjM3NDIzMTgzODA1IgxHgTetVN6n85Y9LHsq3AN%2BsDKkNn8cwUALQ1KyHYAVJwg4h9zpbHSeoxqcGelLuK1k6WDhrg4XeFLe82HUtdNXuXoZi8RWXnKM3xTQBMnTfxpZVFP4zUAw7fOgZF5KMGxT86YKSJsgUXrVI1%2FcPiA%2FN4r5n8zlkcDi%2B3eIt4RWcuiqD%2BZads%2Bs%2BVhIMJA0A0qrxqglGAaNi7zDRVImq%2F%2BJjZ0oiNk2LcpZAJm3kt7Cz3q9vF6bZvJqfPH2gF0H2eA7sO3gp0Xjd2ZfPXNZjU6V%2FgDVzRHL7%2FF3OqvdQ5gvaqo3rbhmSPG5NqglG8oYGaeUbjj0UzKhOpsvk8v5qhnD3LBQOYi4rYzwTa%2BYXx%2Fle7KX8%2BXcpwkjfaF7Dc7JfUxTEPWgawdLgN3dR9gjtDDAoWiqP9ZtJCeLiW6EfzSSNu6JoglO%2B0HASbXe%2F%2FC6SUfyoI9UmdoX1JOqfIcsBfIhcbSrSpgw7%2B0aIGBqidXCJraKyi0AO9%2BIaifA9td6ZNvRvc0C8bMdLT9t8GvAbHJR7c8ie4kQOcPN6feQqldSOh%2FwDpMP3ZKhY%2BfDdEa9PIYPQuf7MsvJqQMkvhXB46Bq9xRAMby3F%2BQV7NGGS5SUZI7jGMLZE2ValYp7rtRz7rMH6nePthsUgOST3DDP0b%2FABjqkAR7q0AbB3W%2Bx0a%2FXhsnFvq7lBcKslC%2BT8FDEc%2B4JDvQ1gvpgSbQlGE9N5Bprd0%2BHsNrgRApVooO3GaMOjAFUYRQokEx%2BdIc4ZQQLZjLe81r%2BAY3Mcc6LOvlExe6jyafK7WA70Sew8HKJ3j9HfBKyfl0zFatNy7VR9ke%2FUrhuWEvVTUB7BQC65DIUiJ7GOJQFjOt8MmwfSPeGlKroqwqu6%2Fc9OjBR&X-Amz-Signature=8ba78b76cc15c3bf6220225ad027d426036ac7b79aaa472cb0eba7c166779cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBRLJF6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0o8ypo9cADPNKOEl2p3OTjfpbyldjSKY%2BH9TY8efn8QIhAKqdo4dJswrP2WP6Iyva9eRWeX%2FYwtIsWBwrYIhRyHhSKv8DCH4QABoMNjM3NDIzMTgzODA1IgxHgTetVN6n85Y9LHsq3AN%2BsDKkNn8cwUALQ1KyHYAVJwg4h9zpbHSeoxqcGelLuK1k6WDhrg4XeFLe82HUtdNXuXoZi8RWXnKM3xTQBMnTfxpZVFP4zUAw7fOgZF5KMGxT86YKSJsgUXrVI1%2FcPiA%2FN4r5n8zlkcDi%2B3eIt4RWcuiqD%2BZads%2Bs%2BVhIMJA0A0qrxqglGAaNi7zDRVImq%2F%2BJjZ0oiNk2LcpZAJm3kt7Cz3q9vF6bZvJqfPH2gF0H2eA7sO3gp0Xjd2ZfPXNZjU6V%2FgDVzRHL7%2FF3OqvdQ5gvaqo3rbhmSPG5NqglG8oYGaeUbjj0UzKhOpsvk8v5qhnD3LBQOYi4rYzwTa%2BYXx%2Fle7KX8%2BXcpwkjfaF7Dc7JfUxTEPWgawdLgN3dR9gjtDDAoWiqP9ZtJCeLiW6EfzSSNu6JoglO%2B0HASbXe%2F%2FC6SUfyoI9UmdoX1JOqfIcsBfIhcbSrSpgw7%2B0aIGBqidXCJraKyi0AO9%2BIaifA9td6ZNvRvc0C8bMdLT9t8GvAbHJR7c8ie4kQOcPN6feQqldSOh%2FwDpMP3ZKhY%2BfDdEa9PIYPQuf7MsvJqQMkvhXB46Bq9xRAMby3F%2BQV7NGGS5SUZI7jGMLZE2ValYp7rtRz7rMH6nePthsUgOST3DDP0b%2FABjqkAR7q0AbB3W%2Bx0a%2FXhsnFvq7lBcKslC%2BT8FDEc%2B4JDvQ1gvpgSbQlGE9N5Bprd0%2BHsNrgRApVooO3GaMOjAFUYRQokEx%2BdIc4ZQQLZjLe81r%2BAY3Mcc6LOvlExe6jyafK7WA70Sew8HKJ3j9HfBKyfl0zFatNy7VR9ke%2FUrhuWEvVTUB7BQC65DIUiJ7GOJQFjOt8MmwfSPeGlKroqwqu6%2Fc9OjBR&X-Amz-Signature=8807690849b5ca44ebb24471649991a7fbff9ba96633fef3e17d873ffd84d9b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBRLJF6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0o8ypo9cADPNKOEl2p3OTjfpbyldjSKY%2BH9TY8efn8QIhAKqdo4dJswrP2WP6Iyva9eRWeX%2FYwtIsWBwrYIhRyHhSKv8DCH4QABoMNjM3NDIzMTgzODA1IgxHgTetVN6n85Y9LHsq3AN%2BsDKkNn8cwUALQ1KyHYAVJwg4h9zpbHSeoxqcGelLuK1k6WDhrg4XeFLe82HUtdNXuXoZi8RWXnKM3xTQBMnTfxpZVFP4zUAw7fOgZF5KMGxT86YKSJsgUXrVI1%2FcPiA%2FN4r5n8zlkcDi%2B3eIt4RWcuiqD%2BZads%2Bs%2BVhIMJA0A0qrxqglGAaNi7zDRVImq%2F%2BJjZ0oiNk2LcpZAJm3kt7Cz3q9vF6bZvJqfPH2gF0H2eA7sO3gp0Xjd2ZfPXNZjU6V%2FgDVzRHL7%2FF3OqvdQ5gvaqo3rbhmSPG5NqglG8oYGaeUbjj0UzKhOpsvk8v5qhnD3LBQOYi4rYzwTa%2BYXx%2Fle7KX8%2BXcpwkjfaF7Dc7JfUxTEPWgawdLgN3dR9gjtDDAoWiqP9ZtJCeLiW6EfzSSNu6JoglO%2B0HASbXe%2F%2FC6SUfyoI9UmdoX1JOqfIcsBfIhcbSrSpgw7%2B0aIGBqidXCJraKyi0AO9%2BIaifA9td6ZNvRvc0C8bMdLT9t8GvAbHJR7c8ie4kQOcPN6feQqldSOh%2FwDpMP3ZKhY%2BfDdEa9PIYPQuf7MsvJqQMkvhXB46Bq9xRAMby3F%2BQV7NGGS5SUZI7jGMLZE2ValYp7rtRz7rMH6nePthsUgOST3DDP0b%2FABjqkAR7q0AbB3W%2Bx0a%2FXhsnFvq7lBcKslC%2BT8FDEc%2B4JDvQ1gvpgSbQlGE9N5Bprd0%2BHsNrgRApVooO3GaMOjAFUYRQokEx%2BdIc4ZQQLZjLe81r%2BAY3Mcc6LOvlExe6jyafK7WA70Sew8HKJ3j9HfBKyfl0zFatNy7VR9ke%2FUrhuWEvVTUB7BQC65DIUiJ7GOJQFjOt8MmwfSPeGlKroqwqu6%2Fc9OjBR&X-Amz-Signature=f7261dc47ffc301cbdf28e0775e42edde9415b2e445fe7c27b62557f23098aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBRLJF6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0o8ypo9cADPNKOEl2p3OTjfpbyldjSKY%2BH9TY8efn8QIhAKqdo4dJswrP2WP6Iyva9eRWeX%2FYwtIsWBwrYIhRyHhSKv8DCH4QABoMNjM3NDIzMTgzODA1IgxHgTetVN6n85Y9LHsq3AN%2BsDKkNn8cwUALQ1KyHYAVJwg4h9zpbHSeoxqcGelLuK1k6WDhrg4XeFLe82HUtdNXuXoZi8RWXnKM3xTQBMnTfxpZVFP4zUAw7fOgZF5KMGxT86YKSJsgUXrVI1%2FcPiA%2FN4r5n8zlkcDi%2B3eIt4RWcuiqD%2BZads%2Bs%2BVhIMJA0A0qrxqglGAaNi7zDRVImq%2F%2BJjZ0oiNk2LcpZAJm3kt7Cz3q9vF6bZvJqfPH2gF0H2eA7sO3gp0Xjd2ZfPXNZjU6V%2FgDVzRHL7%2FF3OqvdQ5gvaqo3rbhmSPG5NqglG8oYGaeUbjj0UzKhOpsvk8v5qhnD3LBQOYi4rYzwTa%2BYXx%2Fle7KX8%2BXcpwkjfaF7Dc7JfUxTEPWgawdLgN3dR9gjtDDAoWiqP9ZtJCeLiW6EfzSSNu6JoglO%2B0HASbXe%2F%2FC6SUfyoI9UmdoX1JOqfIcsBfIhcbSrSpgw7%2B0aIGBqidXCJraKyi0AO9%2BIaifA9td6ZNvRvc0C8bMdLT9t8GvAbHJR7c8ie4kQOcPN6feQqldSOh%2FwDpMP3ZKhY%2BfDdEa9PIYPQuf7MsvJqQMkvhXB46Bq9xRAMby3F%2BQV7NGGS5SUZI7jGMLZE2ValYp7rtRz7rMH6nePthsUgOST3DDP0b%2FABjqkAR7q0AbB3W%2Bx0a%2FXhsnFvq7lBcKslC%2BT8FDEc%2B4JDvQ1gvpgSbQlGE9N5Bprd0%2BHsNrgRApVooO3GaMOjAFUYRQokEx%2BdIc4ZQQLZjLe81r%2BAY3Mcc6LOvlExe6jyafK7WA70Sew8HKJ3j9HfBKyfl0zFatNy7VR9ke%2FUrhuWEvVTUB7BQC65DIUiJ7GOJQFjOt8MmwfSPeGlKroqwqu6%2Fc9OjBR&X-Amz-Signature=5c2a359697db0b0d819ac6a3c96cb6835bff7fde94751d17ee6b31173906a201&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
