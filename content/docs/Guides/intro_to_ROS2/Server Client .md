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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHXZUFF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFlZk7nRLITFDR3YYhA59nq2nme9RWkn4zwh0YmcdLnPAiA%2BNYshXuPpnhNvqFuqyK8r2SzOAmRDi9yfLb21e%2BYjHSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNnILEbYQtrCsRv6XKtwDwTIB8IFmhX4jsaC6OPjUBqQrStOI6CJ1ZA%2FnWslYueJvkFFtY%2F2T%2BjaeYvNZv96Axx0qkEdLzN3l%2FebpDiGoIhJMyinj%2FaY1cP0zYMCvfTJ84XC%2FecthLpmoBPoWawuK7%2BHuX1eA4n5DU3j3wOxACVrWXQWMxrFytBp3hTSVbEB2YJ6NUya2Z6SizDyGcKXUT9iQt%2BlACKDo9wMh4DOBFLTGH6Ww9lkJRv4Et%2FtusZ4orhuSjqzNVs3v8vpfsCrh31YHNDpJ9HvZwleYcgIioKSufhvHKqNday8sIpIytjLCvbDAoZWEZJfKuGvOMZkyiNsx3QXTSwY6MpexMdDt6CBKBkr48nn9iUnPO2UtnctwozYdp0n2lZbn%2BgYRRAqTuForF8dcNLGo1YQWDDknZbxlmvRRP5AjLopQNk8srpNLrBgdgcEwsLfuahxeRxQ3pIDY9YAueXJouPCjTbXmBZbbwVQnJ32f74QgekNcBHznim6MHlBePvhyp1vgTIg%2FRTUfRj1K4JawiXzubhdTLk36AwkZXgQ9v508d80pHNItkpr949TAcMU4bTCrR7zr6MmGk1%2FuApMaWX1QXF33CScG0%2B1gHB%2BUZgX%2FUdfLXHvd9oCVwr5XmRhPAuowgOWuvwY6pgFzT3eD9EOMFfGZkKqo%2BFwAJWUJYQLkszM7w9bcxdyWkFqjpjZ6VgbGiOtVtiyTYN4Kf7d9Mk%2Biy07T03qCuXWN1XM4xwPMeu2pISM312xu63bMm1zExi6g4%2FjfvY3RVEWSqTzwKOrHDVlAXFb7cecNx2JaSOuSWd55ASqc7gIeAIQ62MW07My7hFg6AuxHBr42aMXUO374ez7z867VcQ0wkUBGZBc7&X-Amz-Signature=a90f35f96959ff5749b3176397df5e2f38fc1576fd26db89f90b6e44b54d4160&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHXZUFF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFlZk7nRLITFDR3YYhA59nq2nme9RWkn4zwh0YmcdLnPAiA%2BNYshXuPpnhNvqFuqyK8r2SzOAmRDi9yfLb21e%2BYjHSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNnILEbYQtrCsRv6XKtwDwTIB8IFmhX4jsaC6OPjUBqQrStOI6CJ1ZA%2FnWslYueJvkFFtY%2F2T%2BjaeYvNZv96Axx0qkEdLzN3l%2FebpDiGoIhJMyinj%2FaY1cP0zYMCvfTJ84XC%2FecthLpmoBPoWawuK7%2BHuX1eA4n5DU3j3wOxACVrWXQWMxrFytBp3hTSVbEB2YJ6NUya2Z6SizDyGcKXUT9iQt%2BlACKDo9wMh4DOBFLTGH6Ww9lkJRv4Et%2FtusZ4orhuSjqzNVs3v8vpfsCrh31YHNDpJ9HvZwleYcgIioKSufhvHKqNday8sIpIytjLCvbDAoZWEZJfKuGvOMZkyiNsx3QXTSwY6MpexMdDt6CBKBkr48nn9iUnPO2UtnctwozYdp0n2lZbn%2BgYRRAqTuForF8dcNLGo1YQWDDknZbxlmvRRP5AjLopQNk8srpNLrBgdgcEwsLfuahxeRxQ3pIDY9YAueXJouPCjTbXmBZbbwVQnJ32f74QgekNcBHznim6MHlBePvhyp1vgTIg%2FRTUfRj1K4JawiXzubhdTLk36AwkZXgQ9v508d80pHNItkpr949TAcMU4bTCrR7zr6MmGk1%2FuApMaWX1QXF33CScG0%2B1gHB%2BUZgX%2FUdfLXHvd9oCVwr5XmRhPAuowgOWuvwY6pgFzT3eD9EOMFfGZkKqo%2BFwAJWUJYQLkszM7w9bcxdyWkFqjpjZ6VgbGiOtVtiyTYN4Kf7d9Mk%2Biy07T03qCuXWN1XM4xwPMeu2pISM312xu63bMm1zExi6g4%2FjfvY3RVEWSqTzwKOrHDVlAXFb7cecNx2JaSOuSWd55ASqc7gIeAIQ62MW07My7hFg6AuxHBr42aMXUO374ez7z867VcQ0wkUBGZBc7&X-Amz-Signature=5d37f2a77f218f0192d978a927a25052ffa0d1c31bffb2a99f8e20662e8659d2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHXZUFF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFlZk7nRLITFDR3YYhA59nq2nme9RWkn4zwh0YmcdLnPAiA%2BNYshXuPpnhNvqFuqyK8r2SzOAmRDi9yfLb21e%2BYjHSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNnILEbYQtrCsRv6XKtwDwTIB8IFmhX4jsaC6OPjUBqQrStOI6CJ1ZA%2FnWslYueJvkFFtY%2F2T%2BjaeYvNZv96Axx0qkEdLzN3l%2FebpDiGoIhJMyinj%2FaY1cP0zYMCvfTJ84XC%2FecthLpmoBPoWawuK7%2BHuX1eA4n5DU3j3wOxACVrWXQWMxrFytBp3hTSVbEB2YJ6NUya2Z6SizDyGcKXUT9iQt%2BlACKDo9wMh4DOBFLTGH6Ww9lkJRv4Et%2FtusZ4orhuSjqzNVs3v8vpfsCrh31YHNDpJ9HvZwleYcgIioKSufhvHKqNday8sIpIytjLCvbDAoZWEZJfKuGvOMZkyiNsx3QXTSwY6MpexMdDt6CBKBkr48nn9iUnPO2UtnctwozYdp0n2lZbn%2BgYRRAqTuForF8dcNLGo1YQWDDknZbxlmvRRP5AjLopQNk8srpNLrBgdgcEwsLfuahxeRxQ3pIDY9YAueXJouPCjTbXmBZbbwVQnJ32f74QgekNcBHznim6MHlBePvhyp1vgTIg%2FRTUfRj1K4JawiXzubhdTLk36AwkZXgQ9v508d80pHNItkpr949TAcMU4bTCrR7zr6MmGk1%2FuApMaWX1QXF33CScG0%2B1gHB%2BUZgX%2FUdfLXHvd9oCVwr5XmRhPAuowgOWuvwY6pgFzT3eD9EOMFfGZkKqo%2BFwAJWUJYQLkszM7w9bcxdyWkFqjpjZ6VgbGiOtVtiyTYN4Kf7d9Mk%2Biy07T03qCuXWN1XM4xwPMeu2pISM312xu63bMm1zExi6g4%2FjfvY3RVEWSqTzwKOrHDVlAXFb7cecNx2JaSOuSWd55ASqc7gIeAIQ62MW07My7hFg6AuxHBr42aMXUO374ez7z867VcQ0wkUBGZBc7&X-Amz-Signature=24dfb89af7e01ed00a0c4daf183cd5cf16d87b04fe2ebd042df8e1b90141f1ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHXZUFF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFlZk7nRLITFDR3YYhA59nq2nme9RWkn4zwh0YmcdLnPAiA%2BNYshXuPpnhNvqFuqyK8r2SzOAmRDi9yfLb21e%2BYjHSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNnILEbYQtrCsRv6XKtwDwTIB8IFmhX4jsaC6OPjUBqQrStOI6CJ1ZA%2FnWslYueJvkFFtY%2F2T%2BjaeYvNZv96Axx0qkEdLzN3l%2FebpDiGoIhJMyinj%2FaY1cP0zYMCvfTJ84XC%2FecthLpmoBPoWawuK7%2BHuX1eA4n5DU3j3wOxACVrWXQWMxrFytBp3hTSVbEB2YJ6NUya2Z6SizDyGcKXUT9iQt%2BlACKDo9wMh4DOBFLTGH6Ww9lkJRv4Et%2FtusZ4orhuSjqzNVs3v8vpfsCrh31YHNDpJ9HvZwleYcgIioKSufhvHKqNday8sIpIytjLCvbDAoZWEZJfKuGvOMZkyiNsx3QXTSwY6MpexMdDt6CBKBkr48nn9iUnPO2UtnctwozYdp0n2lZbn%2BgYRRAqTuForF8dcNLGo1YQWDDknZbxlmvRRP5AjLopQNk8srpNLrBgdgcEwsLfuahxeRxQ3pIDY9YAueXJouPCjTbXmBZbbwVQnJ32f74QgekNcBHznim6MHlBePvhyp1vgTIg%2FRTUfRj1K4JawiXzubhdTLk36AwkZXgQ9v508d80pHNItkpr949TAcMU4bTCrR7zr6MmGk1%2FuApMaWX1QXF33CScG0%2B1gHB%2BUZgX%2FUdfLXHvd9oCVwr5XmRhPAuowgOWuvwY6pgFzT3eD9EOMFfGZkKqo%2BFwAJWUJYQLkszM7w9bcxdyWkFqjpjZ6VgbGiOtVtiyTYN4Kf7d9Mk%2Biy07T03qCuXWN1XM4xwPMeu2pISM312xu63bMm1zExi6g4%2FjfvY3RVEWSqTzwKOrHDVlAXFb7cecNx2JaSOuSWd55ASqc7gIeAIQ62MW07My7hFg6AuxHBr42aMXUO374ez7z867VcQ0wkUBGZBc7&X-Amz-Signature=3303d065f33a82336739eaf2c4e310e9ffef24f05843b045e27ede16a7eb6109&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHXZUFF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFlZk7nRLITFDR3YYhA59nq2nme9RWkn4zwh0YmcdLnPAiA%2BNYshXuPpnhNvqFuqyK8r2SzOAmRDi9yfLb21e%2BYjHSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNnILEbYQtrCsRv6XKtwDwTIB8IFmhX4jsaC6OPjUBqQrStOI6CJ1ZA%2FnWslYueJvkFFtY%2F2T%2BjaeYvNZv96Axx0qkEdLzN3l%2FebpDiGoIhJMyinj%2FaY1cP0zYMCvfTJ84XC%2FecthLpmoBPoWawuK7%2BHuX1eA4n5DU3j3wOxACVrWXQWMxrFytBp3hTSVbEB2YJ6NUya2Z6SizDyGcKXUT9iQt%2BlACKDo9wMh4DOBFLTGH6Ww9lkJRv4Et%2FtusZ4orhuSjqzNVs3v8vpfsCrh31YHNDpJ9HvZwleYcgIioKSufhvHKqNday8sIpIytjLCvbDAoZWEZJfKuGvOMZkyiNsx3QXTSwY6MpexMdDt6CBKBkr48nn9iUnPO2UtnctwozYdp0n2lZbn%2BgYRRAqTuForF8dcNLGo1YQWDDknZbxlmvRRP5AjLopQNk8srpNLrBgdgcEwsLfuahxeRxQ3pIDY9YAueXJouPCjTbXmBZbbwVQnJ32f74QgekNcBHznim6MHlBePvhyp1vgTIg%2FRTUfRj1K4JawiXzubhdTLk36AwkZXgQ9v508d80pHNItkpr949TAcMU4bTCrR7zr6MmGk1%2FuApMaWX1QXF33CScG0%2B1gHB%2BUZgX%2FUdfLXHvd9oCVwr5XmRhPAuowgOWuvwY6pgFzT3eD9EOMFfGZkKqo%2BFwAJWUJYQLkszM7w9bcxdyWkFqjpjZ6VgbGiOtVtiyTYN4Kf7d9Mk%2Biy07T03qCuXWN1XM4xwPMeu2pISM312xu63bMm1zExi6g4%2FjfvY3RVEWSqTzwKOrHDVlAXFb7cecNx2JaSOuSWd55ASqc7gIeAIQ62MW07My7hFg6AuxHBr42aMXUO374ez7z867VcQ0wkUBGZBc7&X-Amz-Signature=3985177a898f3b6653574371e705ef9f50806dcc60c9649073d23f7b8809c0ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
