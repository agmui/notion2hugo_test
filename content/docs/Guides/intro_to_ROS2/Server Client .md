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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL424MWX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDyvK5FNX%2FR7IVWVkLzTlAxfHqgJ8j0L8A8m8bZd0H1dwIhAIF22voCy%2B5sEosw7F6C5WxvFhGUhxhmnv3hRFNqA54IKv8DCBoQABoMNjM3NDIzMTgzODA1IgxiMoDSEpnQv07eqlEq3AOpBXNt0SwKcHys70DVLReOLb%2FtqW8ceDzjuaM8IQW3wtqgJ8WvXbwBNKqUl4T973vad8AL9L5mQN%2B0MfTj1FQCdZv7MDHKGE%2Buizw%2FQlI9qi8vx4RZKIsh64L9kr3Kfbwuabj2GnNLSNH%2BB41IfZPgGY8bEogEuNRqWENJOZpxFyFus0hUc8XJUuunIuPp8ntCM%2FmGYF%2FnzQLQjkpcZqPJaAhOT3cGs5GBq7O6h6rCm0YtUKjj%2Bdun5ACsWzf7DftaOdSF6vk0UbiiQiG84yblMA5%2FIaLlaNg0CmSArN5GZ3rF0Pl2Nt99le%2FlMbG%2Bbubsgkb4bXhrJa11ZmKlOAKSlEQLMAwlsQWP4Lhg7FvQeb3ME4%2Fo%2Ffg2r9xTGqKkPY7z8NLzyGKIeqlcGuQbDiPO8jF0Pkg1qdUJoZlpvmMJKGJmYB6vZ5nfvWhTvZkaGQXhD%2FrLLn66BZnQSH2kDAop%2BKjkCU9HEa88CIfzJYXXj6TlMrhCN4iczjOCsCWg4GWhBZBXEIR1PibCxTgocWtqWR45QmiJ3eg826JanYna3zUdd4yY6LD83wuK28HcOkp9IcaGRGkQOJfT3npLYF74XZnIFvOv32q8O3B%2BzgbmJR4LQVTJakP2jQt08DCyu97ABjqkASRZQrh6%2FfrY0yjggPcR6tdwl6JTtlSVQfPXWUbd%2Bvs%2BvvRLXVim9o66WhpLfbWSfOE9jJIAVMzG4EC87vU7nQMPTEPhz7OFFQWvZltro4%2FrzxkluPNH%2Fu5EmRXSk2RjGFqfL6ap2WGI73xShg5TJw313GwpzNkKduErQybBUCiX8RO%2BzbF4eIxBzCLq4%2FaZjhLdDKnr9Fi0ATWqlnzVFuX%2BQT27&X-Amz-Signature=c6a69146b5c619545cab55bb2ecebb74d11d0c1eb4e70e400aef3c04f6b72bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL424MWX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDyvK5FNX%2FR7IVWVkLzTlAxfHqgJ8j0L8A8m8bZd0H1dwIhAIF22voCy%2B5sEosw7F6C5WxvFhGUhxhmnv3hRFNqA54IKv8DCBoQABoMNjM3NDIzMTgzODA1IgxiMoDSEpnQv07eqlEq3AOpBXNt0SwKcHys70DVLReOLb%2FtqW8ceDzjuaM8IQW3wtqgJ8WvXbwBNKqUl4T973vad8AL9L5mQN%2B0MfTj1FQCdZv7MDHKGE%2Buizw%2FQlI9qi8vx4RZKIsh64L9kr3Kfbwuabj2GnNLSNH%2BB41IfZPgGY8bEogEuNRqWENJOZpxFyFus0hUc8XJUuunIuPp8ntCM%2FmGYF%2FnzQLQjkpcZqPJaAhOT3cGs5GBq7O6h6rCm0YtUKjj%2Bdun5ACsWzf7DftaOdSF6vk0UbiiQiG84yblMA5%2FIaLlaNg0CmSArN5GZ3rF0Pl2Nt99le%2FlMbG%2Bbubsgkb4bXhrJa11ZmKlOAKSlEQLMAwlsQWP4Lhg7FvQeb3ME4%2Fo%2Ffg2r9xTGqKkPY7z8NLzyGKIeqlcGuQbDiPO8jF0Pkg1qdUJoZlpvmMJKGJmYB6vZ5nfvWhTvZkaGQXhD%2FrLLn66BZnQSH2kDAop%2BKjkCU9HEa88CIfzJYXXj6TlMrhCN4iczjOCsCWg4GWhBZBXEIR1PibCxTgocWtqWR45QmiJ3eg826JanYna3zUdd4yY6LD83wuK28HcOkp9IcaGRGkQOJfT3npLYF74XZnIFvOv32q8O3B%2BzgbmJR4LQVTJakP2jQt08DCyu97ABjqkASRZQrh6%2FfrY0yjggPcR6tdwl6JTtlSVQfPXWUbd%2Bvs%2BvvRLXVim9o66WhpLfbWSfOE9jJIAVMzG4EC87vU7nQMPTEPhz7OFFQWvZltro4%2FrzxkluPNH%2Fu5EmRXSk2RjGFqfL6ap2WGI73xShg5TJw313GwpzNkKduErQybBUCiX8RO%2BzbF4eIxBzCLq4%2FaZjhLdDKnr9Fi0ATWqlnzVFuX%2BQT27&X-Amz-Signature=77978de896a23cd1a93edbfecbffaeb720ba4fcd12aa278ba0c13bc94c14ac3c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL424MWX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDyvK5FNX%2FR7IVWVkLzTlAxfHqgJ8j0L8A8m8bZd0H1dwIhAIF22voCy%2B5sEosw7F6C5WxvFhGUhxhmnv3hRFNqA54IKv8DCBoQABoMNjM3NDIzMTgzODA1IgxiMoDSEpnQv07eqlEq3AOpBXNt0SwKcHys70DVLReOLb%2FtqW8ceDzjuaM8IQW3wtqgJ8WvXbwBNKqUl4T973vad8AL9L5mQN%2B0MfTj1FQCdZv7MDHKGE%2Buizw%2FQlI9qi8vx4RZKIsh64L9kr3Kfbwuabj2GnNLSNH%2BB41IfZPgGY8bEogEuNRqWENJOZpxFyFus0hUc8XJUuunIuPp8ntCM%2FmGYF%2FnzQLQjkpcZqPJaAhOT3cGs5GBq7O6h6rCm0YtUKjj%2Bdun5ACsWzf7DftaOdSF6vk0UbiiQiG84yblMA5%2FIaLlaNg0CmSArN5GZ3rF0Pl2Nt99le%2FlMbG%2Bbubsgkb4bXhrJa11ZmKlOAKSlEQLMAwlsQWP4Lhg7FvQeb3ME4%2Fo%2Ffg2r9xTGqKkPY7z8NLzyGKIeqlcGuQbDiPO8jF0Pkg1qdUJoZlpvmMJKGJmYB6vZ5nfvWhTvZkaGQXhD%2FrLLn66BZnQSH2kDAop%2BKjkCU9HEa88CIfzJYXXj6TlMrhCN4iczjOCsCWg4GWhBZBXEIR1PibCxTgocWtqWR45QmiJ3eg826JanYna3zUdd4yY6LD83wuK28HcOkp9IcaGRGkQOJfT3npLYF74XZnIFvOv32q8O3B%2BzgbmJR4LQVTJakP2jQt08DCyu97ABjqkASRZQrh6%2FfrY0yjggPcR6tdwl6JTtlSVQfPXWUbd%2Bvs%2BvvRLXVim9o66WhpLfbWSfOE9jJIAVMzG4EC87vU7nQMPTEPhz7OFFQWvZltro4%2FrzxkluPNH%2Fu5EmRXSk2RjGFqfL6ap2WGI73xShg5TJw313GwpzNkKduErQybBUCiX8RO%2BzbF4eIxBzCLq4%2FaZjhLdDKnr9Fi0ATWqlnzVFuX%2BQT27&X-Amz-Signature=1faf5f0a08914c70b6de87ee6ccdaf8e82d8d403e0c950f70db094006516349f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL424MWX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDyvK5FNX%2FR7IVWVkLzTlAxfHqgJ8j0L8A8m8bZd0H1dwIhAIF22voCy%2B5sEosw7F6C5WxvFhGUhxhmnv3hRFNqA54IKv8DCBoQABoMNjM3NDIzMTgzODA1IgxiMoDSEpnQv07eqlEq3AOpBXNt0SwKcHys70DVLReOLb%2FtqW8ceDzjuaM8IQW3wtqgJ8WvXbwBNKqUl4T973vad8AL9L5mQN%2B0MfTj1FQCdZv7MDHKGE%2Buizw%2FQlI9qi8vx4RZKIsh64L9kr3Kfbwuabj2GnNLSNH%2BB41IfZPgGY8bEogEuNRqWENJOZpxFyFus0hUc8XJUuunIuPp8ntCM%2FmGYF%2FnzQLQjkpcZqPJaAhOT3cGs5GBq7O6h6rCm0YtUKjj%2Bdun5ACsWzf7DftaOdSF6vk0UbiiQiG84yblMA5%2FIaLlaNg0CmSArN5GZ3rF0Pl2Nt99le%2FlMbG%2Bbubsgkb4bXhrJa11ZmKlOAKSlEQLMAwlsQWP4Lhg7FvQeb3ME4%2Fo%2Ffg2r9xTGqKkPY7z8NLzyGKIeqlcGuQbDiPO8jF0Pkg1qdUJoZlpvmMJKGJmYB6vZ5nfvWhTvZkaGQXhD%2FrLLn66BZnQSH2kDAop%2BKjkCU9HEa88CIfzJYXXj6TlMrhCN4iczjOCsCWg4GWhBZBXEIR1PibCxTgocWtqWR45QmiJ3eg826JanYna3zUdd4yY6LD83wuK28HcOkp9IcaGRGkQOJfT3npLYF74XZnIFvOv32q8O3B%2BzgbmJR4LQVTJakP2jQt08DCyu97ABjqkASRZQrh6%2FfrY0yjggPcR6tdwl6JTtlSVQfPXWUbd%2Bvs%2BvvRLXVim9o66WhpLfbWSfOE9jJIAVMzG4EC87vU7nQMPTEPhz7OFFQWvZltro4%2FrzxkluPNH%2Fu5EmRXSk2RjGFqfL6ap2WGI73xShg5TJw313GwpzNkKduErQybBUCiX8RO%2BzbF4eIxBzCLq4%2FaZjhLdDKnr9Fi0ATWqlnzVFuX%2BQT27&X-Amz-Signature=3023ff66d530f00a2bc81f0a99bce9775bffd87d3e5432804707583047329442&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL424MWX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDyvK5FNX%2FR7IVWVkLzTlAxfHqgJ8j0L8A8m8bZd0H1dwIhAIF22voCy%2B5sEosw7F6C5WxvFhGUhxhmnv3hRFNqA54IKv8DCBoQABoMNjM3NDIzMTgzODA1IgxiMoDSEpnQv07eqlEq3AOpBXNt0SwKcHys70DVLReOLb%2FtqW8ceDzjuaM8IQW3wtqgJ8WvXbwBNKqUl4T973vad8AL9L5mQN%2B0MfTj1FQCdZv7MDHKGE%2Buizw%2FQlI9qi8vx4RZKIsh64L9kr3Kfbwuabj2GnNLSNH%2BB41IfZPgGY8bEogEuNRqWENJOZpxFyFus0hUc8XJUuunIuPp8ntCM%2FmGYF%2FnzQLQjkpcZqPJaAhOT3cGs5GBq7O6h6rCm0YtUKjj%2Bdun5ACsWzf7DftaOdSF6vk0UbiiQiG84yblMA5%2FIaLlaNg0CmSArN5GZ3rF0Pl2Nt99le%2FlMbG%2Bbubsgkb4bXhrJa11ZmKlOAKSlEQLMAwlsQWP4Lhg7FvQeb3ME4%2Fo%2Ffg2r9xTGqKkPY7z8NLzyGKIeqlcGuQbDiPO8jF0Pkg1qdUJoZlpvmMJKGJmYB6vZ5nfvWhTvZkaGQXhD%2FrLLn66BZnQSH2kDAop%2BKjkCU9HEa88CIfzJYXXj6TlMrhCN4iczjOCsCWg4GWhBZBXEIR1PibCxTgocWtqWR45QmiJ3eg826JanYna3zUdd4yY6LD83wuK28HcOkp9IcaGRGkQOJfT3npLYF74XZnIFvOv32q8O3B%2BzgbmJR4LQVTJakP2jQt08DCyu97ABjqkASRZQrh6%2FfrY0yjggPcR6tdwl6JTtlSVQfPXWUbd%2Bvs%2BvvRLXVim9o66WhpLfbWSfOE9jJIAVMzG4EC87vU7nQMPTEPhz7OFFQWvZltro4%2FrzxkluPNH%2Fu5EmRXSk2RjGFqfL6ap2WGI73xShg5TJw313GwpzNkKduErQybBUCiX8RO%2BzbF4eIxBzCLq4%2FaZjhLdDKnr9Fi0ATWqlnzVFuX%2BQT27&X-Amz-Signature=ee89e49eb5d04f3ea2aba4f400d7a261fbc8c062d85ef67df95ccb6ef0222dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
