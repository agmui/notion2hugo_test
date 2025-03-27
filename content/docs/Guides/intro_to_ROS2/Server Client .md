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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIKUXLU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkQOnQel%2FWvXYwIF80g%2BMb7S%2FFMyP6h%2FbHjRbntGzFVAiBkwDlI7AiioOgYih3bjmeJZZ%2BlSB1b8AsJRhWabQIJ2Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2FYGQY9m0Bzj1ZrrvKtwD5KKuWy65w4o%2BiL7nWdLOiHcY1F2f3Q%2B97UF1Ym0Mg3dAb5nxsVwmWb9WD6onffbcEcETf39xk7iFrupJt9yorDkxPm8rBMnO2gw%2FGAW0Wz3II4vnuwy2e3cwIoQUJms4KmPq4SGKltWigVyqlihMicu4htkvBDpm%2FGHfn1zHDbnrVuR9k8T6lv6sbnWF9GLM2LN%2F8ANxVuT8FJ2rCzHJSbS7VlQ%2FLmsDzvl2fZVyrK0gLKWlOCjkeqRnjFU1yPUAQ2gzc6QJHcRlLFLpwHphmYvyisDbkwM9VMJOPK27WvSdD6aN2wFEpPgQ%2F3zxdZiWKAKb%2BK0BEXddIyCZNd4BClKYzOJOAywQSef2q3Uf6WC7IJkBNg%2FEMVWKt1uR2Hl1kzykdTU2vIr%2BdVTbBKT2EEhUO7kGTYaWyf0Torcev2kXMDrNgevAZkZji8FPv9dL%2Fx2r%2BOvm%2F9KqhbG8qUi8hPf2F7bRv9%2FhptwAvcHwYF%2BGOmEePbjQn3%2FjdKn0Q%2F2DAiXvhBM7bv%2B3jNVYeJfbDrQ18OgapKrT%2FHzjgXBNuheH4p7%2FQfRRl%2BFV9pA%2B4JhOx38yJyZzM4AtNil7dorZ8HfG4V8Bm0Hxt3tM0OmS%2FL3gVPF2%2FD49ux%2ButlEww7KVvwY6pgFssvcKrDCVWO8G9pANYH0%2B8lzA7AMgdhUHiGYYSnCvbwjeqMn9Mwua9dB05Qlua6G69BSQeDFYtHxlUXdOxPY%2BxI1aVlnRh3ryhNBpseKFQPtV7jK82RC6wqWDl4kgfv4yu%2Fwiu5A%2By070Mp%2BLByGCkwcvfpZEvlUP1MeL8rWQm2TjxIGcrUiSIFArXBCzPG0Cz5%2BAheboU%2FOs3qine1oigiT8bPxO&X-Amz-Signature=c10c02c4ebefbaec76829361ed46bf5f7089d81fd9db064fe39effbc8d416959&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIKUXLU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkQOnQel%2FWvXYwIF80g%2BMb7S%2FFMyP6h%2FbHjRbntGzFVAiBkwDlI7AiioOgYih3bjmeJZZ%2BlSB1b8AsJRhWabQIJ2Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2FYGQY9m0Bzj1ZrrvKtwD5KKuWy65w4o%2BiL7nWdLOiHcY1F2f3Q%2B97UF1Ym0Mg3dAb5nxsVwmWb9WD6onffbcEcETf39xk7iFrupJt9yorDkxPm8rBMnO2gw%2FGAW0Wz3II4vnuwy2e3cwIoQUJms4KmPq4SGKltWigVyqlihMicu4htkvBDpm%2FGHfn1zHDbnrVuR9k8T6lv6sbnWF9GLM2LN%2F8ANxVuT8FJ2rCzHJSbS7VlQ%2FLmsDzvl2fZVyrK0gLKWlOCjkeqRnjFU1yPUAQ2gzc6QJHcRlLFLpwHphmYvyisDbkwM9VMJOPK27WvSdD6aN2wFEpPgQ%2F3zxdZiWKAKb%2BK0BEXddIyCZNd4BClKYzOJOAywQSef2q3Uf6WC7IJkBNg%2FEMVWKt1uR2Hl1kzykdTU2vIr%2BdVTbBKT2EEhUO7kGTYaWyf0Torcev2kXMDrNgevAZkZji8FPv9dL%2Fx2r%2BOvm%2F9KqhbG8qUi8hPf2F7bRv9%2FhptwAvcHwYF%2BGOmEePbjQn3%2FjdKn0Q%2F2DAiXvhBM7bv%2B3jNVYeJfbDrQ18OgapKrT%2FHzjgXBNuheH4p7%2FQfRRl%2BFV9pA%2B4JhOx38yJyZzM4AtNil7dorZ8HfG4V8Bm0Hxt3tM0OmS%2FL3gVPF2%2FD49ux%2ButlEww7KVvwY6pgFssvcKrDCVWO8G9pANYH0%2B8lzA7AMgdhUHiGYYSnCvbwjeqMn9Mwua9dB05Qlua6G69BSQeDFYtHxlUXdOxPY%2BxI1aVlnRh3ryhNBpseKFQPtV7jK82RC6wqWDl4kgfv4yu%2Fwiu5A%2By070Mp%2BLByGCkwcvfpZEvlUP1MeL8rWQm2TjxIGcrUiSIFArXBCzPG0Cz5%2BAheboU%2FOs3qine1oigiT8bPxO&X-Amz-Signature=5c6538d01d5e120218baa6a8fa23048e64616776c4b7def22e5cd503e5b06a27&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIKUXLU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkQOnQel%2FWvXYwIF80g%2BMb7S%2FFMyP6h%2FbHjRbntGzFVAiBkwDlI7AiioOgYih3bjmeJZZ%2BlSB1b8AsJRhWabQIJ2Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2FYGQY9m0Bzj1ZrrvKtwD5KKuWy65w4o%2BiL7nWdLOiHcY1F2f3Q%2B97UF1Ym0Mg3dAb5nxsVwmWb9WD6onffbcEcETf39xk7iFrupJt9yorDkxPm8rBMnO2gw%2FGAW0Wz3II4vnuwy2e3cwIoQUJms4KmPq4SGKltWigVyqlihMicu4htkvBDpm%2FGHfn1zHDbnrVuR9k8T6lv6sbnWF9GLM2LN%2F8ANxVuT8FJ2rCzHJSbS7VlQ%2FLmsDzvl2fZVyrK0gLKWlOCjkeqRnjFU1yPUAQ2gzc6QJHcRlLFLpwHphmYvyisDbkwM9VMJOPK27WvSdD6aN2wFEpPgQ%2F3zxdZiWKAKb%2BK0BEXddIyCZNd4BClKYzOJOAywQSef2q3Uf6WC7IJkBNg%2FEMVWKt1uR2Hl1kzykdTU2vIr%2BdVTbBKT2EEhUO7kGTYaWyf0Torcev2kXMDrNgevAZkZji8FPv9dL%2Fx2r%2BOvm%2F9KqhbG8qUi8hPf2F7bRv9%2FhptwAvcHwYF%2BGOmEePbjQn3%2FjdKn0Q%2F2DAiXvhBM7bv%2B3jNVYeJfbDrQ18OgapKrT%2FHzjgXBNuheH4p7%2FQfRRl%2BFV9pA%2B4JhOx38yJyZzM4AtNil7dorZ8HfG4V8Bm0Hxt3tM0OmS%2FL3gVPF2%2FD49ux%2ButlEww7KVvwY6pgFssvcKrDCVWO8G9pANYH0%2B8lzA7AMgdhUHiGYYSnCvbwjeqMn9Mwua9dB05Qlua6G69BSQeDFYtHxlUXdOxPY%2BxI1aVlnRh3ryhNBpseKFQPtV7jK82RC6wqWDl4kgfv4yu%2Fwiu5A%2By070Mp%2BLByGCkwcvfpZEvlUP1MeL8rWQm2TjxIGcrUiSIFArXBCzPG0Cz5%2BAheboU%2FOs3qine1oigiT8bPxO&X-Amz-Signature=1224e352f74b04b39e0d55dedd976e6c39a8ce4ea97bcfbe5866c8d68a60c8b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIKUXLU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkQOnQel%2FWvXYwIF80g%2BMb7S%2FFMyP6h%2FbHjRbntGzFVAiBkwDlI7AiioOgYih3bjmeJZZ%2BlSB1b8AsJRhWabQIJ2Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2FYGQY9m0Bzj1ZrrvKtwD5KKuWy65w4o%2BiL7nWdLOiHcY1F2f3Q%2B97UF1Ym0Mg3dAb5nxsVwmWb9WD6onffbcEcETf39xk7iFrupJt9yorDkxPm8rBMnO2gw%2FGAW0Wz3II4vnuwy2e3cwIoQUJms4KmPq4SGKltWigVyqlihMicu4htkvBDpm%2FGHfn1zHDbnrVuR9k8T6lv6sbnWF9GLM2LN%2F8ANxVuT8FJ2rCzHJSbS7VlQ%2FLmsDzvl2fZVyrK0gLKWlOCjkeqRnjFU1yPUAQ2gzc6QJHcRlLFLpwHphmYvyisDbkwM9VMJOPK27WvSdD6aN2wFEpPgQ%2F3zxdZiWKAKb%2BK0BEXddIyCZNd4BClKYzOJOAywQSef2q3Uf6WC7IJkBNg%2FEMVWKt1uR2Hl1kzykdTU2vIr%2BdVTbBKT2EEhUO7kGTYaWyf0Torcev2kXMDrNgevAZkZji8FPv9dL%2Fx2r%2BOvm%2F9KqhbG8qUi8hPf2F7bRv9%2FhptwAvcHwYF%2BGOmEePbjQn3%2FjdKn0Q%2F2DAiXvhBM7bv%2B3jNVYeJfbDrQ18OgapKrT%2FHzjgXBNuheH4p7%2FQfRRl%2BFV9pA%2B4JhOx38yJyZzM4AtNil7dorZ8HfG4V8Bm0Hxt3tM0OmS%2FL3gVPF2%2FD49ux%2ButlEww7KVvwY6pgFssvcKrDCVWO8G9pANYH0%2B8lzA7AMgdhUHiGYYSnCvbwjeqMn9Mwua9dB05Qlua6G69BSQeDFYtHxlUXdOxPY%2BxI1aVlnRh3ryhNBpseKFQPtV7jK82RC6wqWDl4kgfv4yu%2Fwiu5A%2By070Mp%2BLByGCkwcvfpZEvlUP1MeL8rWQm2TjxIGcrUiSIFArXBCzPG0Cz5%2BAheboU%2FOs3qine1oigiT8bPxO&X-Amz-Signature=75d325da9e077abf7a5105726daa0410c6ad93b3763e33a5db5e287f1dbc87a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIKUXLU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkQOnQel%2FWvXYwIF80g%2BMb7S%2FFMyP6h%2FbHjRbntGzFVAiBkwDlI7AiioOgYih3bjmeJZZ%2BlSB1b8AsJRhWabQIJ2Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2FYGQY9m0Bzj1ZrrvKtwD5KKuWy65w4o%2BiL7nWdLOiHcY1F2f3Q%2B97UF1Ym0Mg3dAb5nxsVwmWb9WD6onffbcEcETf39xk7iFrupJt9yorDkxPm8rBMnO2gw%2FGAW0Wz3II4vnuwy2e3cwIoQUJms4KmPq4SGKltWigVyqlihMicu4htkvBDpm%2FGHfn1zHDbnrVuR9k8T6lv6sbnWF9GLM2LN%2F8ANxVuT8FJ2rCzHJSbS7VlQ%2FLmsDzvl2fZVyrK0gLKWlOCjkeqRnjFU1yPUAQ2gzc6QJHcRlLFLpwHphmYvyisDbkwM9VMJOPK27WvSdD6aN2wFEpPgQ%2F3zxdZiWKAKb%2BK0BEXddIyCZNd4BClKYzOJOAywQSef2q3Uf6WC7IJkBNg%2FEMVWKt1uR2Hl1kzykdTU2vIr%2BdVTbBKT2EEhUO7kGTYaWyf0Torcev2kXMDrNgevAZkZji8FPv9dL%2Fx2r%2BOvm%2F9KqhbG8qUi8hPf2F7bRv9%2FhptwAvcHwYF%2BGOmEePbjQn3%2FjdKn0Q%2F2DAiXvhBM7bv%2B3jNVYeJfbDrQ18OgapKrT%2FHzjgXBNuheH4p7%2FQfRRl%2BFV9pA%2B4JhOx38yJyZzM4AtNil7dorZ8HfG4V8Bm0Hxt3tM0OmS%2FL3gVPF2%2FD49ux%2ButlEww7KVvwY6pgFssvcKrDCVWO8G9pANYH0%2B8lzA7AMgdhUHiGYYSnCvbwjeqMn9Mwua9dB05Qlua6G69BSQeDFYtHxlUXdOxPY%2BxI1aVlnRh3ryhNBpseKFQPtV7jK82RC6wqWDl4kgfv4yu%2Fwiu5A%2By070Mp%2BLByGCkwcvfpZEvlUP1MeL8rWQm2TjxIGcrUiSIFArXBCzPG0Cz5%2BAheboU%2FOs3qine1oigiT8bPxO&X-Amz-Signature=6c8f88bded4e479e6d1d0b66347179916f8f779c3716017d6d566a423234e80c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
