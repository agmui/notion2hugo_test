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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6737YUH%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFCUhrOnyqlKI%2FTlOlBIWMV67%2BBqWmzBciA9lTBF7o%2FfAiEA26PMrRiZicN6wC3fke%2FlPbcOIbD2L6LR7n43crg7LlYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDG6kFQYTuc0FSKjKjCrcA%2Bs1ehxTud9TzzM%2Bi8CYEnrErGCCO6FYKMp5zGT%2F%2B4ovgE94%2Fpp4MRhKCowsRxK2IEfjRLg4TxJtfcl8ASgvHQi%2F7u72IaefpkNdKmLjOKyzEMuwIBlKVE0mOrBwascqzNWmT%2BW%2FkbnnpLF3HSLPy684JJRGXwmUmQ%2Fn4vxPreeQgav7UKwXVzRY5wyoSOGw6zflrE%2F0Ul9R77qsOqfS8pqAoe3KvhIDP0xnIg%2BEZv6ZKIxpIg5bl0HNZQuAvaekTfY161pquHmWHcUMjqWcyQFFx829oc%2FtYty7KZUvytK448XD3VFoTDtiYij9zX49Ze1brJx8qDXPnzSi8ryZ9%2FnfV%2FaWM5b0toRNVDCSbRMjhmae8Ythn8%2BlTJFHchAe2L7ygEPs7kz%2Fet3S%2FbOw0uhDqRoz%2Bg0Elfw8UjxcdlCx6FColaBlipoot7aZUaBosVBJxuwN2Jnc9t%2FaAczvuhPNgaN6D5m0tH6NDDz6ongE79JFUTJUjPYo9x11xrb0a8ZiraonFZjBSX%2Bi0ALjPm6BkiK1HgDml7rt2124JsBnC%2B5lYi6CfNyUI9QeejjaDylPoS5UClnKx8PE4oq6JLgX1VQJm88iN8fHPnxoUSe26y1o9VwxOrjYP655MM6Uv70GOqUByllnsgT2s7azsmo%2Bn0cKFMyQdfJvx7B6vxovDBS1MOxRpBBevUfxv8hemF7mmY131N%2BpQysw3gJKbrTyKBRqnCMEgHGmmcG2Ns%2BOt19jV96EG1Zax3jd8IqWOq%2Bq5wRklji0OEQx5QSCkqwi4CSRHu91fdIKypi9pDF2ltsx%2FNVv1y2g6ktDWcXV%2BG6GrEVP5k5sRgPqbjDKCCCc0BR37bfxkyno&X-Amz-Signature=eb7fc91940f6de5e6760394b326f757d786ceda6ec427e6ed5c68f5f7711742d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6737YUH%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFCUhrOnyqlKI%2FTlOlBIWMV67%2BBqWmzBciA9lTBF7o%2FfAiEA26PMrRiZicN6wC3fke%2FlPbcOIbD2L6LR7n43crg7LlYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDG6kFQYTuc0FSKjKjCrcA%2Bs1ehxTud9TzzM%2Bi8CYEnrErGCCO6FYKMp5zGT%2F%2B4ovgE94%2Fpp4MRhKCowsRxK2IEfjRLg4TxJtfcl8ASgvHQi%2F7u72IaefpkNdKmLjOKyzEMuwIBlKVE0mOrBwascqzNWmT%2BW%2FkbnnpLF3HSLPy684JJRGXwmUmQ%2Fn4vxPreeQgav7UKwXVzRY5wyoSOGw6zflrE%2F0Ul9R77qsOqfS8pqAoe3KvhIDP0xnIg%2BEZv6ZKIxpIg5bl0HNZQuAvaekTfY161pquHmWHcUMjqWcyQFFx829oc%2FtYty7KZUvytK448XD3VFoTDtiYij9zX49Ze1brJx8qDXPnzSi8ryZ9%2FnfV%2FaWM5b0toRNVDCSbRMjhmae8Ythn8%2BlTJFHchAe2L7ygEPs7kz%2Fet3S%2FbOw0uhDqRoz%2Bg0Elfw8UjxcdlCx6FColaBlipoot7aZUaBosVBJxuwN2Jnc9t%2FaAczvuhPNgaN6D5m0tH6NDDz6ongE79JFUTJUjPYo9x11xrb0a8ZiraonFZjBSX%2Bi0ALjPm6BkiK1HgDml7rt2124JsBnC%2B5lYi6CfNyUI9QeejjaDylPoS5UClnKx8PE4oq6JLgX1VQJm88iN8fHPnxoUSe26y1o9VwxOrjYP655MM6Uv70GOqUByllnsgT2s7azsmo%2Bn0cKFMyQdfJvx7B6vxovDBS1MOxRpBBevUfxv8hemF7mmY131N%2BpQysw3gJKbrTyKBRqnCMEgHGmmcG2Ns%2BOt19jV96EG1Zax3jd8IqWOq%2Bq5wRklji0OEQx5QSCkqwi4CSRHu91fdIKypi9pDF2ltsx%2FNVv1y2g6ktDWcXV%2BG6GrEVP5k5sRgPqbjDKCCCc0BR37bfxkyno&X-Amz-Signature=86b29c3e32de9a291d86ca2a0fc144142d9ab35d56e2b145004a8882f26fe54b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6737YUH%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFCUhrOnyqlKI%2FTlOlBIWMV67%2BBqWmzBciA9lTBF7o%2FfAiEA26PMrRiZicN6wC3fke%2FlPbcOIbD2L6LR7n43crg7LlYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDG6kFQYTuc0FSKjKjCrcA%2Bs1ehxTud9TzzM%2Bi8CYEnrErGCCO6FYKMp5zGT%2F%2B4ovgE94%2Fpp4MRhKCowsRxK2IEfjRLg4TxJtfcl8ASgvHQi%2F7u72IaefpkNdKmLjOKyzEMuwIBlKVE0mOrBwascqzNWmT%2BW%2FkbnnpLF3HSLPy684JJRGXwmUmQ%2Fn4vxPreeQgav7UKwXVzRY5wyoSOGw6zflrE%2F0Ul9R77qsOqfS8pqAoe3KvhIDP0xnIg%2BEZv6ZKIxpIg5bl0HNZQuAvaekTfY161pquHmWHcUMjqWcyQFFx829oc%2FtYty7KZUvytK448XD3VFoTDtiYij9zX49Ze1brJx8qDXPnzSi8ryZ9%2FnfV%2FaWM5b0toRNVDCSbRMjhmae8Ythn8%2BlTJFHchAe2L7ygEPs7kz%2Fet3S%2FbOw0uhDqRoz%2Bg0Elfw8UjxcdlCx6FColaBlipoot7aZUaBosVBJxuwN2Jnc9t%2FaAczvuhPNgaN6D5m0tH6NDDz6ongE79JFUTJUjPYo9x11xrb0a8ZiraonFZjBSX%2Bi0ALjPm6BkiK1HgDml7rt2124JsBnC%2B5lYi6CfNyUI9QeejjaDylPoS5UClnKx8PE4oq6JLgX1VQJm88iN8fHPnxoUSe26y1o9VwxOrjYP655MM6Uv70GOqUByllnsgT2s7azsmo%2Bn0cKFMyQdfJvx7B6vxovDBS1MOxRpBBevUfxv8hemF7mmY131N%2BpQysw3gJKbrTyKBRqnCMEgHGmmcG2Ns%2BOt19jV96EG1Zax3jd8IqWOq%2Bq5wRklji0OEQx5QSCkqwi4CSRHu91fdIKypi9pDF2ltsx%2FNVv1y2g6ktDWcXV%2BG6GrEVP5k5sRgPqbjDKCCCc0BR37bfxkyno&X-Amz-Signature=5adf38a44a210603839ffab0a52639ae9fa62b288c8a49231edf69a574e71440&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6737YUH%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFCUhrOnyqlKI%2FTlOlBIWMV67%2BBqWmzBciA9lTBF7o%2FfAiEA26PMrRiZicN6wC3fke%2FlPbcOIbD2L6LR7n43crg7LlYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDG6kFQYTuc0FSKjKjCrcA%2Bs1ehxTud9TzzM%2Bi8CYEnrErGCCO6FYKMp5zGT%2F%2B4ovgE94%2Fpp4MRhKCowsRxK2IEfjRLg4TxJtfcl8ASgvHQi%2F7u72IaefpkNdKmLjOKyzEMuwIBlKVE0mOrBwascqzNWmT%2BW%2FkbnnpLF3HSLPy684JJRGXwmUmQ%2Fn4vxPreeQgav7UKwXVzRY5wyoSOGw6zflrE%2F0Ul9R77qsOqfS8pqAoe3KvhIDP0xnIg%2BEZv6ZKIxpIg5bl0HNZQuAvaekTfY161pquHmWHcUMjqWcyQFFx829oc%2FtYty7KZUvytK448XD3VFoTDtiYij9zX49Ze1brJx8qDXPnzSi8ryZ9%2FnfV%2FaWM5b0toRNVDCSbRMjhmae8Ythn8%2BlTJFHchAe2L7ygEPs7kz%2Fet3S%2FbOw0uhDqRoz%2Bg0Elfw8UjxcdlCx6FColaBlipoot7aZUaBosVBJxuwN2Jnc9t%2FaAczvuhPNgaN6D5m0tH6NDDz6ongE79JFUTJUjPYo9x11xrb0a8ZiraonFZjBSX%2Bi0ALjPm6BkiK1HgDml7rt2124JsBnC%2B5lYi6CfNyUI9QeejjaDylPoS5UClnKx8PE4oq6JLgX1VQJm88iN8fHPnxoUSe26y1o9VwxOrjYP655MM6Uv70GOqUByllnsgT2s7azsmo%2Bn0cKFMyQdfJvx7B6vxovDBS1MOxRpBBevUfxv8hemF7mmY131N%2BpQysw3gJKbrTyKBRqnCMEgHGmmcG2Ns%2BOt19jV96EG1Zax3jd8IqWOq%2Bq5wRklji0OEQx5QSCkqwi4CSRHu91fdIKypi9pDF2ltsx%2FNVv1y2g6ktDWcXV%2BG6GrEVP5k5sRgPqbjDKCCCc0BR37bfxkyno&X-Amz-Signature=f4dc5862e0ed206d2ce98852660bcb668b980517a6f8f668bab6544d06792a69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6737YUH%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFCUhrOnyqlKI%2FTlOlBIWMV67%2BBqWmzBciA9lTBF7o%2FfAiEA26PMrRiZicN6wC3fke%2FlPbcOIbD2L6LR7n43crg7LlYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDG6kFQYTuc0FSKjKjCrcA%2Bs1ehxTud9TzzM%2Bi8CYEnrErGCCO6FYKMp5zGT%2F%2B4ovgE94%2Fpp4MRhKCowsRxK2IEfjRLg4TxJtfcl8ASgvHQi%2F7u72IaefpkNdKmLjOKyzEMuwIBlKVE0mOrBwascqzNWmT%2BW%2FkbnnpLF3HSLPy684JJRGXwmUmQ%2Fn4vxPreeQgav7UKwXVzRY5wyoSOGw6zflrE%2F0Ul9R77qsOqfS8pqAoe3KvhIDP0xnIg%2BEZv6ZKIxpIg5bl0HNZQuAvaekTfY161pquHmWHcUMjqWcyQFFx829oc%2FtYty7KZUvytK448XD3VFoTDtiYij9zX49Ze1brJx8qDXPnzSi8ryZ9%2FnfV%2FaWM5b0toRNVDCSbRMjhmae8Ythn8%2BlTJFHchAe2L7ygEPs7kz%2Fet3S%2FbOw0uhDqRoz%2Bg0Elfw8UjxcdlCx6FColaBlipoot7aZUaBosVBJxuwN2Jnc9t%2FaAczvuhPNgaN6D5m0tH6NDDz6ongE79JFUTJUjPYo9x11xrb0a8ZiraonFZjBSX%2Bi0ALjPm6BkiK1HgDml7rt2124JsBnC%2B5lYi6CfNyUI9QeejjaDylPoS5UClnKx8PE4oq6JLgX1VQJm88iN8fHPnxoUSe26y1o9VwxOrjYP655MM6Uv70GOqUByllnsgT2s7azsmo%2Bn0cKFMyQdfJvx7B6vxovDBS1MOxRpBBevUfxv8hemF7mmY131N%2BpQysw3gJKbrTyKBRqnCMEgHGmmcG2Ns%2BOt19jV96EG1Zax3jd8IqWOq%2Bq5wRklji0OEQx5QSCkqwi4CSRHu91fdIKypi9pDF2ltsx%2FNVv1y2g6ktDWcXV%2BG6GrEVP5k5sRgPqbjDKCCCc0BR37bfxkyno&X-Amz-Signature=01149b98fbe18caee6b6dc54bd48ecc6214beaf6dbe0b25a9e14f46655062b29&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
