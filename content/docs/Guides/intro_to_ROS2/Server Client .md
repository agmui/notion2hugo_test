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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRXSOZZO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCvYCwCogfRzpQwfpi2VcDAcocP0kGDNm4nIrDDdk7s%2BQIhAP%2Fs7TViSj2rTaDnkD1SoH3ax1eoww%2FLlqdAiKhXKAE%2FKv8DCEoQABoMNjM3NDIzMTgzODA1IgzMiIl9nLSKLzgCXUAq3ANWGH5%2FsOOWNYOkNfzwMQXk1gQKO%2BFgfdpes8Jr42Xxr969%2FUHd8UxnpGhDqnKBM5rTRgz2hKGQoZcvFUW32v6iVqGdkt5RMggxgRhLC5tDMJPH5t3abvJiUHjcBK19VKVBgFhrzN3rgapIDLswdLI0lLQns31j6lu6rxbh6jJwGzYnMmWPoEkz%2BX%2BLLT3j5IYzuIsOaUdbiUOfj4Z8qvD9ZnhRpCFuz1YYuayn5B%2BaKzvLPTqYZ36jelAJZpBD0GP3axJzYuw2N3eNHzc%2BbvvwevbgWfQyfMZmXdjJDNXAhMRy6VCETn4BXKNs1cWrInDdfqk8isV0UbfUzuQifBJuM%2BLmwxx5sLiABQmwY0H7Cj6ORoVDRQbgMWbDzK1U7YFa0%2Bhxsp9xYWoP2mbN7z5VhU%2BhdCBzDL3RmsxGav8F0Hgw0WIqo5Z9ZCBWGUtQ%2Futj%2FSWMo8fFAc6BUI%2BBHM%2FuHFfNADei%2FYtEl7itsxqgdjefVue92E3yOnB%2BvBp3HzFdgsK2pz7ZnyAOvuPFW5nsgSGx5tN5kTYYnsx28F%2Fo%2BIlHsRhJz5i%2BMbkvIuvvCwW%2B%2BhPHbuxVZDsBZRXcSCI8q9Wg3CFoHpTRtl2ekPgEiC6WRCfZ9N9E3yaU%2BTCYh9rDBjqkAW10yMdVNaW78Oo9CWJ8OZl8yP%2FMaoIkAOvA75tfObUxKYzzPlD0B3ppwn8dZ9M0Z6oruelN99zJaCdwTp%2Bq%2BTy7FAiXzFmurFrKhlPdm4maVsc3yeWrZ3cLTNbKAxTzRn%2FhKj0BS6aXOnBE5d%2FrM%2BYYiRwXYByAGQQlboXbXdUl8%2Bxda1kUAjJM6F58Ao%2FF7eB7dm6CpbvqEF8wtvlKx2TcjWgQ&X-Amz-Signature=83711d1fa7644b067feb16451ba037e6ca8c8ed9a1092979c0a064627fd25e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRXSOZZO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCvYCwCogfRzpQwfpi2VcDAcocP0kGDNm4nIrDDdk7s%2BQIhAP%2Fs7TViSj2rTaDnkD1SoH3ax1eoww%2FLlqdAiKhXKAE%2FKv8DCEoQABoMNjM3NDIzMTgzODA1IgzMiIl9nLSKLzgCXUAq3ANWGH5%2FsOOWNYOkNfzwMQXk1gQKO%2BFgfdpes8Jr42Xxr969%2FUHd8UxnpGhDqnKBM5rTRgz2hKGQoZcvFUW32v6iVqGdkt5RMggxgRhLC5tDMJPH5t3abvJiUHjcBK19VKVBgFhrzN3rgapIDLswdLI0lLQns31j6lu6rxbh6jJwGzYnMmWPoEkz%2BX%2BLLT3j5IYzuIsOaUdbiUOfj4Z8qvD9ZnhRpCFuz1YYuayn5B%2BaKzvLPTqYZ36jelAJZpBD0GP3axJzYuw2N3eNHzc%2BbvvwevbgWfQyfMZmXdjJDNXAhMRy6VCETn4BXKNs1cWrInDdfqk8isV0UbfUzuQifBJuM%2BLmwxx5sLiABQmwY0H7Cj6ORoVDRQbgMWbDzK1U7YFa0%2Bhxsp9xYWoP2mbN7z5VhU%2BhdCBzDL3RmsxGav8F0Hgw0WIqo5Z9ZCBWGUtQ%2Futj%2FSWMo8fFAc6BUI%2BBHM%2FuHFfNADei%2FYtEl7itsxqgdjefVue92E3yOnB%2BvBp3HzFdgsK2pz7ZnyAOvuPFW5nsgSGx5tN5kTYYnsx28F%2Fo%2BIlHsRhJz5i%2BMbkvIuvvCwW%2B%2BhPHbuxVZDsBZRXcSCI8q9Wg3CFoHpTRtl2ekPgEiC6WRCfZ9N9E3yaU%2BTCYh9rDBjqkAW10yMdVNaW78Oo9CWJ8OZl8yP%2FMaoIkAOvA75tfObUxKYzzPlD0B3ppwn8dZ9M0Z6oruelN99zJaCdwTp%2Bq%2BTy7FAiXzFmurFrKhlPdm4maVsc3yeWrZ3cLTNbKAxTzRn%2FhKj0BS6aXOnBE5d%2FrM%2BYYiRwXYByAGQQlboXbXdUl8%2Bxda1kUAjJM6F58Ao%2FF7eB7dm6CpbvqEF8wtvlKx2TcjWgQ&X-Amz-Signature=576c6e4f5d8d139e7874246b540da8b2f8b3bc12692947e1878e921ee2b7757a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRXSOZZO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCvYCwCogfRzpQwfpi2VcDAcocP0kGDNm4nIrDDdk7s%2BQIhAP%2Fs7TViSj2rTaDnkD1SoH3ax1eoww%2FLlqdAiKhXKAE%2FKv8DCEoQABoMNjM3NDIzMTgzODA1IgzMiIl9nLSKLzgCXUAq3ANWGH5%2FsOOWNYOkNfzwMQXk1gQKO%2BFgfdpes8Jr42Xxr969%2FUHd8UxnpGhDqnKBM5rTRgz2hKGQoZcvFUW32v6iVqGdkt5RMggxgRhLC5tDMJPH5t3abvJiUHjcBK19VKVBgFhrzN3rgapIDLswdLI0lLQns31j6lu6rxbh6jJwGzYnMmWPoEkz%2BX%2BLLT3j5IYzuIsOaUdbiUOfj4Z8qvD9ZnhRpCFuz1YYuayn5B%2BaKzvLPTqYZ36jelAJZpBD0GP3axJzYuw2N3eNHzc%2BbvvwevbgWfQyfMZmXdjJDNXAhMRy6VCETn4BXKNs1cWrInDdfqk8isV0UbfUzuQifBJuM%2BLmwxx5sLiABQmwY0H7Cj6ORoVDRQbgMWbDzK1U7YFa0%2Bhxsp9xYWoP2mbN7z5VhU%2BhdCBzDL3RmsxGav8F0Hgw0WIqo5Z9ZCBWGUtQ%2Futj%2FSWMo8fFAc6BUI%2BBHM%2FuHFfNADei%2FYtEl7itsxqgdjefVue92E3yOnB%2BvBp3HzFdgsK2pz7ZnyAOvuPFW5nsgSGx5tN5kTYYnsx28F%2Fo%2BIlHsRhJz5i%2BMbkvIuvvCwW%2B%2BhPHbuxVZDsBZRXcSCI8q9Wg3CFoHpTRtl2ekPgEiC6WRCfZ9N9E3yaU%2BTCYh9rDBjqkAW10yMdVNaW78Oo9CWJ8OZl8yP%2FMaoIkAOvA75tfObUxKYzzPlD0B3ppwn8dZ9M0Z6oruelN99zJaCdwTp%2Bq%2BTy7FAiXzFmurFrKhlPdm4maVsc3yeWrZ3cLTNbKAxTzRn%2FhKj0BS6aXOnBE5d%2FrM%2BYYiRwXYByAGQQlboXbXdUl8%2Bxda1kUAjJM6F58Ao%2FF7eB7dm6CpbvqEF8wtvlKx2TcjWgQ&X-Amz-Signature=ecac574e57213092b35b045a571525a3920460a19b705eec43459c27e6920daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRXSOZZO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCvYCwCogfRzpQwfpi2VcDAcocP0kGDNm4nIrDDdk7s%2BQIhAP%2Fs7TViSj2rTaDnkD1SoH3ax1eoww%2FLlqdAiKhXKAE%2FKv8DCEoQABoMNjM3NDIzMTgzODA1IgzMiIl9nLSKLzgCXUAq3ANWGH5%2FsOOWNYOkNfzwMQXk1gQKO%2BFgfdpes8Jr42Xxr969%2FUHd8UxnpGhDqnKBM5rTRgz2hKGQoZcvFUW32v6iVqGdkt5RMggxgRhLC5tDMJPH5t3abvJiUHjcBK19VKVBgFhrzN3rgapIDLswdLI0lLQns31j6lu6rxbh6jJwGzYnMmWPoEkz%2BX%2BLLT3j5IYzuIsOaUdbiUOfj4Z8qvD9ZnhRpCFuz1YYuayn5B%2BaKzvLPTqYZ36jelAJZpBD0GP3axJzYuw2N3eNHzc%2BbvvwevbgWfQyfMZmXdjJDNXAhMRy6VCETn4BXKNs1cWrInDdfqk8isV0UbfUzuQifBJuM%2BLmwxx5sLiABQmwY0H7Cj6ORoVDRQbgMWbDzK1U7YFa0%2Bhxsp9xYWoP2mbN7z5VhU%2BhdCBzDL3RmsxGav8F0Hgw0WIqo5Z9ZCBWGUtQ%2Futj%2FSWMo8fFAc6BUI%2BBHM%2FuHFfNADei%2FYtEl7itsxqgdjefVue92E3yOnB%2BvBp3HzFdgsK2pz7ZnyAOvuPFW5nsgSGx5tN5kTYYnsx28F%2Fo%2BIlHsRhJz5i%2BMbkvIuvvCwW%2B%2BhPHbuxVZDsBZRXcSCI8q9Wg3CFoHpTRtl2ekPgEiC6WRCfZ9N9E3yaU%2BTCYh9rDBjqkAW10yMdVNaW78Oo9CWJ8OZl8yP%2FMaoIkAOvA75tfObUxKYzzPlD0B3ppwn8dZ9M0Z6oruelN99zJaCdwTp%2Bq%2BTy7FAiXzFmurFrKhlPdm4maVsc3yeWrZ3cLTNbKAxTzRn%2FhKj0BS6aXOnBE5d%2FrM%2BYYiRwXYByAGQQlboXbXdUl8%2Bxda1kUAjJM6F58Ao%2FF7eB7dm6CpbvqEF8wtvlKx2TcjWgQ&X-Amz-Signature=9d97669ed3aaafb5b528613f2526504b78f5b31a82cfad2be20728a36ba0adcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRXSOZZO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCvYCwCogfRzpQwfpi2VcDAcocP0kGDNm4nIrDDdk7s%2BQIhAP%2Fs7TViSj2rTaDnkD1SoH3ax1eoww%2FLlqdAiKhXKAE%2FKv8DCEoQABoMNjM3NDIzMTgzODA1IgzMiIl9nLSKLzgCXUAq3ANWGH5%2FsOOWNYOkNfzwMQXk1gQKO%2BFgfdpes8Jr42Xxr969%2FUHd8UxnpGhDqnKBM5rTRgz2hKGQoZcvFUW32v6iVqGdkt5RMggxgRhLC5tDMJPH5t3abvJiUHjcBK19VKVBgFhrzN3rgapIDLswdLI0lLQns31j6lu6rxbh6jJwGzYnMmWPoEkz%2BX%2BLLT3j5IYzuIsOaUdbiUOfj4Z8qvD9ZnhRpCFuz1YYuayn5B%2BaKzvLPTqYZ36jelAJZpBD0GP3axJzYuw2N3eNHzc%2BbvvwevbgWfQyfMZmXdjJDNXAhMRy6VCETn4BXKNs1cWrInDdfqk8isV0UbfUzuQifBJuM%2BLmwxx5sLiABQmwY0H7Cj6ORoVDRQbgMWbDzK1U7YFa0%2Bhxsp9xYWoP2mbN7z5VhU%2BhdCBzDL3RmsxGav8F0Hgw0WIqo5Z9ZCBWGUtQ%2Futj%2FSWMo8fFAc6BUI%2BBHM%2FuHFfNADei%2FYtEl7itsxqgdjefVue92E3yOnB%2BvBp3HzFdgsK2pz7ZnyAOvuPFW5nsgSGx5tN5kTYYnsx28F%2Fo%2BIlHsRhJz5i%2BMbkvIuvvCwW%2B%2BhPHbuxVZDsBZRXcSCI8q9Wg3CFoHpTRtl2ekPgEiC6WRCfZ9N9E3yaU%2BTCYh9rDBjqkAW10yMdVNaW78Oo9CWJ8OZl8yP%2FMaoIkAOvA75tfObUxKYzzPlD0B3ppwn8dZ9M0Z6oruelN99zJaCdwTp%2Bq%2BTy7FAiXzFmurFrKhlPdm4maVsc3yeWrZ3cLTNbKAxTzRn%2FhKj0BS6aXOnBE5d%2FrM%2BYYiRwXYByAGQQlboXbXdUl8%2Bxda1kUAjJM6F58Ao%2FF7eB7dm6CpbvqEF8wtvlKx2TcjWgQ&X-Amz-Signature=d615e818f22b6f5446ad33f7863c1bf6f12ed4ab4301a3483276d6dca4598565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
