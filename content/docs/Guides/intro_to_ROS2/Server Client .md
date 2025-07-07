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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ7Y5SSV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCAyS8CigfDCK8%2FLiB3s8JCPJnigyTvdX7PcnXLc0Zz9wIhAMm5OyLHsFEh582y0wJY8V7kxVowVFMBFybRC%2FOfih3dKv8DCG8QABoMNjM3NDIzMTgzODA1Igy%2FxmktivneUYr9Kl8q3AN%2BS8HlN2VXYlzY89BivVcW2iKcn830%2Bj5%2Bd0t%2BYQAEcNN5gcy%2FaeKHTYls%2Ff58WXp0fZBTyFcDa5NUCHPew8ZXu01%2BmU5vThRVY8Gsw5Ntct9IQaddxOOfzEMtQSXRq1byUJe6WsHU7EBVD9SS1VokoRhaBNQ3qxFj6LcUTyP%2F1HzD4yBpB3aiaQZFMVyqqvYAPdsTenaEImUPLMgDnaSZcstojth%2BTXBcOuwlJO3ZTzMeCiT6Dow0beb3QDjR9nrzVb9fsiuEoNPGk5OYxPzBdVMnWHX5OoRqM3JkAxDJwsUEXDec76jTqc5nZbyc8DWXStK8I%2B10xus6udBP0qh8REfMPVa6RHCjlcmxVzcKvm8Qj8J1XsTDI%2BwjFFFQr2716eMfcIE5lSdElIp8fJzxnzpPqzKC9f1j4bE22G%2FO0W3ACNszxhv%2BWi571F4CTyKaa68BT5cfcmv%2BYLFB6cn2mqaIDeKWqaoX11KtOEdHCjWCMoVfy1YjndZlDYE%2FM%2FSLaBCEghOzdR0H6QQqhorTQBL1ftTVEqXm6A6cWYVje0%2F3aKozKBYwYuZ%2FQLubx%2Bq87AMYOjDNKZV3k9wrpGqQJQ98JumiNyDuwonsdfbpoCpQcXmo4AClNcA5dTCat63DBjqkATZXNZfy7kvVXSoXQND8DLt3mlMOdjlJfSSfByG7Ws5Yymv63jNoabsaywtzDVnqVFB1nrQ0xjrjvxoP%2F5oRL5TkjiFCcC1WdoskqfJJMc6tyz0mxg2elXXKbvuqU4Knxi%2BP3QcvNT%2BSudNlqmdLXuk9J5ZsqfWiRWuzjWwnb%2BqjA16LGos06lriGmDli1cEJ2wQrqnI7xnvw8dk%2FDr6DgkgNl1%2B&X-Amz-Signature=67cdbd6f382c88b091ad88afcb6b05ceb575e4971a2e29f98474ddbefef5d007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ7Y5SSV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCAyS8CigfDCK8%2FLiB3s8JCPJnigyTvdX7PcnXLc0Zz9wIhAMm5OyLHsFEh582y0wJY8V7kxVowVFMBFybRC%2FOfih3dKv8DCG8QABoMNjM3NDIzMTgzODA1Igy%2FxmktivneUYr9Kl8q3AN%2BS8HlN2VXYlzY89BivVcW2iKcn830%2Bj5%2Bd0t%2BYQAEcNN5gcy%2FaeKHTYls%2Ff58WXp0fZBTyFcDa5NUCHPew8ZXu01%2BmU5vThRVY8Gsw5Ntct9IQaddxOOfzEMtQSXRq1byUJe6WsHU7EBVD9SS1VokoRhaBNQ3qxFj6LcUTyP%2F1HzD4yBpB3aiaQZFMVyqqvYAPdsTenaEImUPLMgDnaSZcstojth%2BTXBcOuwlJO3ZTzMeCiT6Dow0beb3QDjR9nrzVb9fsiuEoNPGk5OYxPzBdVMnWHX5OoRqM3JkAxDJwsUEXDec76jTqc5nZbyc8DWXStK8I%2B10xus6udBP0qh8REfMPVa6RHCjlcmxVzcKvm8Qj8J1XsTDI%2BwjFFFQr2716eMfcIE5lSdElIp8fJzxnzpPqzKC9f1j4bE22G%2FO0W3ACNszxhv%2BWi571F4CTyKaa68BT5cfcmv%2BYLFB6cn2mqaIDeKWqaoX11KtOEdHCjWCMoVfy1YjndZlDYE%2FM%2FSLaBCEghOzdR0H6QQqhorTQBL1ftTVEqXm6A6cWYVje0%2F3aKozKBYwYuZ%2FQLubx%2Bq87AMYOjDNKZV3k9wrpGqQJQ98JumiNyDuwonsdfbpoCpQcXmo4AClNcA5dTCat63DBjqkATZXNZfy7kvVXSoXQND8DLt3mlMOdjlJfSSfByG7Ws5Yymv63jNoabsaywtzDVnqVFB1nrQ0xjrjvxoP%2F5oRL5TkjiFCcC1WdoskqfJJMc6tyz0mxg2elXXKbvuqU4Knxi%2BP3QcvNT%2BSudNlqmdLXuk9J5ZsqfWiRWuzjWwnb%2BqjA16LGos06lriGmDli1cEJ2wQrqnI7xnvw8dk%2FDr6DgkgNl1%2B&X-Amz-Signature=640d9ee6aa436296743992deb82806885b2d9eace5ff13d3f644658b419fc49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ7Y5SSV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCAyS8CigfDCK8%2FLiB3s8JCPJnigyTvdX7PcnXLc0Zz9wIhAMm5OyLHsFEh582y0wJY8V7kxVowVFMBFybRC%2FOfih3dKv8DCG8QABoMNjM3NDIzMTgzODA1Igy%2FxmktivneUYr9Kl8q3AN%2BS8HlN2VXYlzY89BivVcW2iKcn830%2Bj5%2Bd0t%2BYQAEcNN5gcy%2FaeKHTYls%2Ff58WXp0fZBTyFcDa5NUCHPew8ZXu01%2BmU5vThRVY8Gsw5Ntct9IQaddxOOfzEMtQSXRq1byUJe6WsHU7EBVD9SS1VokoRhaBNQ3qxFj6LcUTyP%2F1HzD4yBpB3aiaQZFMVyqqvYAPdsTenaEImUPLMgDnaSZcstojth%2BTXBcOuwlJO3ZTzMeCiT6Dow0beb3QDjR9nrzVb9fsiuEoNPGk5OYxPzBdVMnWHX5OoRqM3JkAxDJwsUEXDec76jTqc5nZbyc8DWXStK8I%2B10xus6udBP0qh8REfMPVa6RHCjlcmxVzcKvm8Qj8J1XsTDI%2BwjFFFQr2716eMfcIE5lSdElIp8fJzxnzpPqzKC9f1j4bE22G%2FO0W3ACNszxhv%2BWi571F4CTyKaa68BT5cfcmv%2BYLFB6cn2mqaIDeKWqaoX11KtOEdHCjWCMoVfy1YjndZlDYE%2FM%2FSLaBCEghOzdR0H6QQqhorTQBL1ftTVEqXm6A6cWYVje0%2F3aKozKBYwYuZ%2FQLubx%2Bq87AMYOjDNKZV3k9wrpGqQJQ98JumiNyDuwonsdfbpoCpQcXmo4AClNcA5dTCat63DBjqkATZXNZfy7kvVXSoXQND8DLt3mlMOdjlJfSSfByG7Ws5Yymv63jNoabsaywtzDVnqVFB1nrQ0xjrjvxoP%2F5oRL5TkjiFCcC1WdoskqfJJMc6tyz0mxg2elXXKbvuqU4Knxi%2BP3QcvNT%2BSudNlqmdLXuk9J5ZsqfWiRWuzjWwnb%2BqjA16LGos06lriGmDli1cEJ2wQrqnI7xnvw8dk%2FDr6DgkgNl1%2B&X-Amz-Signature=b0946d6a8d44b83e994446ae0b54084c9c747427af55e0df4a107a37e4584114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ7Y5SSV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCAyS8CigfDCK8%2FLiB3s8JCPJnigyTvdX7PcnXLc0Zz9wIhAMm5OyLHsFEh582y0wJY8V7kxVowVFMBFybRC%2FOfih3dKv8DCG8QABoMNjM3NDIzMTgzODA1Igy%2FxmktivneUYr9Kl8q3AN%2BS8HlN2VXYlzY89BivVcW2iKcn830%2Bj5%2Bd0t%2BYQAEcNN5gcy%2FaeKHTYls%2Ff58WXp0fZBTyFcDa5NUCHPew8ZXu01%2BmU5vThRVY8Gsw5Ntct9IQaddxOOfzEMtQSXRq1byUJe6WsHU7EBVD9SS1VokoRhaBNQ3qxFj6LcUTyP%2F1HzD4yBpB3aiaQZFMVyqqvYAPdsTenaEImUPLMgDnaSZcstojth%2BTXBcOuwlJO3ZTzMeCiT6Dow0beb3QDjR9nrzVb9fsiuEoNPGk5OYxPzBdVMnWHX5OoRqM3JkAxDJwsUEXDec76jTqc5nZbyc8DWXStK8I%2B10xus6udBP0qh8REfMPVa6RHCjlcmxVzcKvm8Qj8J1XsTDI%2BwjFFFQr2716eMfcIE5lSdElIp8fJzxnzpPqzKC9f1j4bE22G%2FO0W3ACNszxhv%2BWi571F4CTyKaa68BT5cfcmv%2BYLFB6cn2mqaIDeKWqaoX11KtOEdHCjWCMoVfy1YjndZlDYE%2FM%2FSLaBCEghOzdR0H6QQqhorTQBL1ftTVEqXm6A6cWYVje0%2F3aKozKBYwYuZ%2FQLubx%2Bq87AMYOjDNKZV3k9wrpGqQJQ98JumiNyDuwonsdfbpoCpQcXmo4AClNcA5dTCat63DBjqkATZXNZfy7kvVXSoXQND8DLt3mlMOdjlJfSSfByG7Ws5Yymv63jNoabsaywtzDVnqVFB1nrQ0xjrjvxoP%2F5oRL5TkjiFCcC1WdoskqfJJMc6tyz0mxg2elXXKbvuqU4Knxi%2BP3QcvNT%2BSudNlqmdLXuk9J5ZsqfWiRWuzjWwnb%2BqjA16LGos06lriGmDli1cEJ2wQrqnI7xnvw8dk%2FDr6DgkgNl1%2B&X-Amz-Signature=ec7d786d7bdb4e9352e750e90cdfa63bfc506b991e71f5de62c79bf5a1e33bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ7Y5SSV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCAyS8CigfDCK8%2FLiB3s8JCPJnigyTvdX7PcnXLc0Zz9wIhAMm5OyLHsFEh582y0wJY8V7kxVowVFMBFybRC%2FOfih3dKv8DCG8QABoMNjM3NDIzMTgzODA1Igy%2FxmktivneUYr9Kl8q3AN%2BS8HlN2VXYlzY89BivVcW2iKcn830%2Bj5%2Bd0t%2BYQAEcNN5gcy%2FaeKHTYls%2Ff58WXp0fZBTyFcDa5NUCHPew8ZXu01%2BmU5vThRVY8Gsw5Ntct9IQaddxOOfzEMtQSXRq1byUJe6WsHU7EBVD9SS1VokoRhaBNQ3qxFj6LcUTyP%2F1HzD4yBpB3aiaQZFMVyqqvYAPdsTenaEImUPLMgDnaSZcstojth%2BTXBcOuwlJO3ZTzMeCiT6Dow0beb3QDjR9nrzVb9fsiuEoNPGk5OYxPzBdVMnWHX5OoRqM3JkAxDJwsUEXDec76jTqc5nZbyc8DWXStK8I%2B10xus6udBP0qh8REfMPVa6RHCjlcmxVzcKvm8Qj8J1XsTDI%2BwjFFFQr2716eMfcIE5lSdElIp8fJzxnzpPqzKC9f1j4bE22G%2FO0W3ACNszxhv%2BWi571F4CTyKaa68BT5cfcmv%2BYLFB6cn2mqaIDeKWqaoX11KtOEdHCjWCMoVfy1YjndZlDYE%2FM%2FSLaBCEghOzdR0H6QQqhorTQBL1ftTVEqXm6A6cWYVje0%2F3aKozKBYwYuZ%2FQLubx%2Bq87AMYOjDNKZV3k9wrpGqQJQ98JumiNyDuwonsdfbpoCpQcXmo4AClNcA5dTCat63DBjqkATZXNZfy7kvVXSoXQND8DLt3mlMOdjlJfSSfByG7Ws5Yymv63jNoabsaywtzDVnqVFB1nrQ0xjrjvxoP%2F5oRL5TkjiFCcC1WdoskqfJJMc6tyz0mxg2elXXKbvuqU4Knxi%2BP3QcvNT%2BSudNlqmdLXuk9J5ZsqfWiRWuzjWwnb%2BqjA16LGos06lriGmDli1cEJ2wQrqnI7xnvw8dk%2FDr6DgkgNl1%2B&X-Amz-Signature=51e0139fcbe928c966e6e12b88a60c3fe75338c8c779669e45361fe0a46457b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
