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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNOOQKV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhHEiibCBAFb6XTLVVZPEjpCdz0n8kkEenbVtwU4w6UgIhALMEyS1XU%2Bj9Tmu6%2Fr0QOnKn4MUFWZ0RWLaU%2BxRs7spnKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBaEFo%2BsuUd2RDX%2FEq3AO67u80hhP8zkSECbpXJ9pUnIbU%2FZJ3lthP%2Blf8s31wUgyC%2FUiFcjkGEf6oVC9lGjTkZCBbBjfINSuMZWDC4nl1Zm%2BTt3L83Qaw5axXNLONxl6HMZ9m8qF5utE%2Br3KeqpTG6eHH0BlBke1tPeD7gT7W7Byz%2Bnb3VKzpbjmWvhr%2FAangKkvRHpqBqA4fzN6dPyyoP%2B956FPlVj%2BbfRcZmusaawKuI110%2B%2FNysuO6RS6%2BM5WmIxhOsvvkriOxNgR%2FbWzi5wyVD%2FMvtNGlmL2SU9dYfgXzanrFb4%2Bq%2Fclp6WZdfDD1ZVuLybWDXPrzjHmSRV1aTsxbWHozkA7StlJ5SavBHd10BX9Pva8bMZKMVe%2FfZ%2BYp%2B16n5tpAueP91JPgVyKVQjEB%2FZHZyvzCbDFIOSH6rC%2FIojVA1DqungyOM%2B8x8FhyosMqNVVbu8bQ3fxy5WcOCn8rcF5rI0GC%2BQcp%2FdK7sByd5W06ENrMpGJd3Go1fto9OcqBiKHA191%2FgdJJ8mu53E4UIzW6lvTI6K0%2FVd7Hx8vagzqDtXoHyldGOK3J5dyB6vZ0St9hxxrl6oyXTe3JQiszfh5TdSPBejQIHg9Zij8t5Uq5IMdv%2B1b4udyn7%2F%2F4gwfx0wPtyuw8gzC73tDCBjqkARjMNj5FeySaK1ttnoYVxFjBEraTtdVAJfQu%2BDZ5E7EJF8%2BMBIDK447UeFnIfl9VrNyGDLsBWARqLztjcU3%2BYs3B1wSIfC1nfPdjNTH8%2ByXDzGVh7H9q0qp49fyIzExlAMJv55mgRefsoCMzbWJiMu4l%2BYT4uUxakV0GkQ28OWT3YvwZizyliEVIgha%2BAcxjTyDqrSxsMYAFaUy7MsCG%2F0glW9uF&X-Amz-Signature=a6076eee78b08aa2e76b82290c3120b7638d89493bf935bebae8bff8b7bc5508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNOOQKV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhHEiibCBAFb6XTLVVZPEjpCdz0n8kkEenbVtwU4w6UgIhALMEyS1XU%2Bj9Tmu6%2Fr0QOnKn4MUFWZ0RWLaU%2BxRs7spnKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBaEFo%2BsuUd2RDX%2FEq3AO67u80hhP8zkSECbpXJ9pUnIbU%2FZJ3lthP%2Blf8s31wUgyC%2FUiFcjkGEf6oVC9lGjTkZCBbBjfINSuMZWDC4nl1Zm%2BTt3L83Qaw5axXNLONxl6HMZ9m8qF5utE%2Br3KeqpTG6eHH0BlBke1tPeD7gT7W7Byz%2Bnb3VKzpbjmWvhr%2FAangKkvRHpqBqA4fzN6dPyyoP%2B956FPlVj%2BbfRcZmusaawKuI110%2B%2FNysuO6RS6%2BM5WmIxhOsvvkriOxNgR%2FbWzi5wyVD%2FMvtNGlmL2SU9dYfgXzanrFb4%2Bq%2Fclp6WZdfDD1ZVuLybWDXPrzjHmSRV1aTsxbWHozkA7StlJ5SavBHd10BX9Pva8bMZKMVe%2FfZ%2BYp%2B16n5tpAueP91JPgVyKVQjEB%2FZHZyvzCbDFIOSH6rC%2FIojVA1DqungyOM%2B8x8FhyosMqNVVbu8bQ3fxy5WcOCn8rcF5rI0GC%2BQcp%2FdK7sByd5W06ENrMpGJd3Go1fto9OcqBiKHA191%2FgdJJ8mu53E4UIzW6lvTI6K0%2FVd7Hx8vagzqDtXoHyldGOK3J5dyB6vZ0St9hxxrl6oyXTe3JQiszfh5TdSPBejQIHg9Zij8t5Uq5IMdv%2B1b4udyn7%2F%2F4gwfx0wPtyuw8gzC73tDCBjqkARjMNj5FeySaK1ttnoYVxFjBEraTtdVAJfQu%2BDZ5E7EJF8%2BMBIDK447UeFnIfl9VrNyGDLsBWARqLztjcU3%2BYs3B1wSIfC1nfPdjNTH8%2ByXDzGVh7H9q0qp49fyIzExlAMJv55mgRefsoCMzbWJiMu4l%2BYT4uUxakV0GkQ28OWT3YvwZizyliEVIgha%2BAcxjTyDqrSxsMYAFaUy7MsCG%2F0glW9uF&X-Amz-Signature=e28bce97cdadb34c0ece0d7d7eccc6d8fc771e2d712ce11caa9f1f34024f80be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNOOQKV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhHEiibCBAFb6XTLVVZPEjpCdz0n8kkEenbVtwU4w6UgIhALMEyS1XU%2Bj9Tmu6%2Fr0QOnKn4MUFWZ0RWLaU%2BxRs7spnKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBaEFo%2BsuUd2RDX%2FEq3AO67u80hhP8zkSECbpXJ9pUnIbU%2FZJ3lthP%2Blf8s31wUgyC%2FUiFcjkGEf6oVC9lGjTkZCBbBjfINSuMZWDC4nl1Zm%2BTt3L83Qaw5axXNLONxl6HMZ9m8qF5utE%2Br3KeqpTG6eHH0BlBke1tPeD7gT7W7Byz%2Bnb3VKzpbjmWvhr%2FAangKkvRHpqBqA4fzN6dPyyoP%2B956FPlVj%2BbfRcZmusaawKuI110%2B%2FNysuO6RS6%2BM5WmIxhOsvvkriOxNgR%2FbWzi5wyVD%2FMvtNGlmL2SU9dYfgXzanrFb4%2Bq%2Fclp6WZdfDD1ZVuLybWDXPrzjHmSRV1aTsxbWHozkA7StlJ5SavBHd10BX9Pva8bMZKMVe%2FfZ%2BYp%2B16n5tpAueP91JPgVyKVQjEB%2FZHZyvzCbDFIOSH6rC%2FIojVA1DqungyOM%2B8x8FhyosMqNVVbu8bQ3fxy5WcOCn8rcF5rI0GC%2BQcp%2FdK7sByd5W06ENrMpGJd3Go1fto9OcqBiKHA191%2FgdJJ8mu53E4UIzW6lvTI6K0%2FVd7Hx8vagzqDtXoHyldGOK3J5dyB6vZ0St9hxxrl6oyXTe3JQiszfh5TdSPBejQIHg9Zij8t5Uq5IMdv%2B1b4udyn7%2F%2F4gwfx0wPtyuw8gzC73tDCBjqkARjMNj5FeySaK1ttnoYVxFjBEraTtdVAJfQu%2BDZ5E7EJF8%2BMBIDK447UeFnIfl9VrNyGDLsBWARqLztjcU3%2BYs3B1wSIfC1nfPdjNTH8%2ByXDzGVh7H9q0qp49fyIzExlAMJv55mgRefsoCMzbWJiMu4l%2BYT4uUxakV0GkQ28OWT3YvwZizyliEVIgha%2BAcxjTyDqrSxsMYAFaUy7MsCG%2F0glW9uF&X-Amz-Signature=b09e94f8ae058a69dfb19d9fc8a689ce7d00334528c9c01f7536cfa569f58e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNOOQKV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhHEiibCBAFb6XTLVVZPEjpCdz0n8kkEenbVtwU4w6UgIhALMEyS1XU%2Bj9Tmu6%2Fr0QOnKn4MUFWZ0RWLaU%2BxRs7spnKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBaEFo%2BsuUd2RDX%2FEq3AO67u80hhP8zkSECbpXJ9pUnIbU%2FZJ3lthP%2Blf8s31wUgyC%2FUiFcjkGEf6oVC9lGjTkZCBbBjfINSuMZWDC4nl1Zm%2BTt3L83Qaw5axXNLONxl6HMZ9m8qF5utE%2Br3KeqpTG6eHH0BlBke1tPeD7gT7W7Byz%2Bnb3VKzpbjmWvhr%2FAangKkvRHpqBqA4fzN6dPyyoP%2B956FPlVj%2BbfRcZmusaawKuI110%2B%2FNysuO6RS6%2BM5WmIxhOsvvkriOxNgR%2FbWzi5wyVD%2FMvtNGlmL2SU9dYfgXzanrFb4%2Bq%2Fclp6WZdfDD1ZVuLybWDXPrzjHmSRV1aTsxbWHozkA7StlJ5SavBHd10BX9Pva8bMZKMVe%2FfZ%2BYp%2B16n5tpAueP91JPgVyKVQjEB%2FZHZyvzCbDFIOSH6rC%2FIojVA1DqungyOM%2B8x8FhyosMqNVVbu8bQ3fxy5WcOCn8rcF5rI0GC%2BQcp%2FdK7sByd5W06ENrMpGJd3Go1fto9OcqBiKHA191%2FgdJJ8mu53E4UIzW6lvTI6K0%2FVd7Hx8vagzqDtXoHyldGOK3J5dyB6vZ0St9hxxrl6oyXTe3JQiszfh5TdSPBejQIHg9Zij8t5Uq5IMdv%2B1b4udyn7%2F%2F4gwfx0wPtyuw8gzC73tDCBjqkARjMNj5FeySaK1ttnoYVxFjBEraTtdVAJfQu%2BDZ5E7EJF8%2BMBIDK447UeFnIfl9VrNyGDLsBWARqLztjcU3%2BYs3B1wSIfC1nfPdjNTH8%2ByXDzGVh7H9q0qp49fyIzExlAMJv55mgRefsoCMzbWJiMu4l%2BYT4uUxakV0GkQ28OWT3YvwZizyliEVIgha%2BAcxjTyDqrSxsMYAFaUy7MsCG%2F0glW9uF&X-Amz-Signature=cd92725822cc58fe1c214389c207a497fdf1b75dc78241513a86a8f898fd4911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNOOQKV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhHEiibCBAFb6XTLVVZPEjpCdz0n8kkEenbVtwU4w6UgIhALMEyS1XU%2Bj9Tmu6%2Fr0QOnKn4MUFWZ0RWLaU%2BxRs7spnKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBaEFo%2BsuUd2RDX%2FEq3AO67u80hhP8zkSECbpXJ9pUnIbU%2FZJ3lthP%2Blf8s31wUgyC%2FUiFcjkGEf6oVC9lGjTkZCBbBjfINSuMZWDC4nl1Zm%2BTt3L83Qaw5axXNLONxl6HMZ9m8qF5utE%2Br3KeqpTG6eHH0BlBke1tPeD7gT7W7Byz%2Bnb3VKzpbjmWvhr%2FAangKkvRHpqBqA4fzN6dPyyoP%2B956FPlVj%2BbfRcZmusaawKuI110%2B%2FNysuO6RS6%2BM5WmIxhOsvvkriOxNgR%2FbWzi5wyVD%2FMvtNGlmL2SU9dYfgXzanrFb4%2Bq%2Fclp6WZdfDD1ZVuLybWDXPrzjHmSRV1aTsxbWHozkA7StlJ5SavBHd10BX9Pva8bMZKMVe%2FfZ%2BYp%2B16n5tpAueP91JPgVyKVQjEB%2FZHZyvzCbDFIOSH6rC%2FIojVA1DqungyOM%2B8x8FhyosMqNVVbu8bQ3fxy5WcOCn8rcF5rI0GC%2BQcp%2FdK7sByd5W06ENrMpGJd3Go1fto9OcqBiKHA191%2FgdJJ8mu53E4UIzW6lvTI6K0%2FVd7Hx8vagzqDtXoHyldGOK3J5dyB6vZ0St9hxxrl6oyXTe3JQiszfh5TdSPBejQIHg9Zij8t5Uq5IMdv%2B1b4udyn7%2F%2F4gwfx0wPtyuw8gzC73tDCBjqkARjMNj5FeySaK1ttnoYVxFjBEraTtdVAJfQu%2BDZ5E7EJF8%2BMBIDK447UeFnIfl9VrNyGDLsBWARqLztjcU3%2BYs3B1wSIfC1nfPdjNTH8%2ByXDzGVh7H9q0qp49fyIzExlAMJv55mgRefsoCMzbWJiMu4l%2BYT4uUxakV0GkQ28OWT3YvwZizyliEVIgha%2BAcxjTyDqrSxsMYAFaUy7MsCG%2F0glW9uF&X-Amz-Signature=dd0cdef69b2b493bbba73fe2da43d205811cebaebeeac1981e74a4af3dba1a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
