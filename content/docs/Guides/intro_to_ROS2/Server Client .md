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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZP3VHQP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAoaLIo6o%2BpllBT3b%2BN5hohCnvd6UHPSjvcby3JhARiAiBlkM12SrQdx5%2FpT13p5F0Sq8PAIWdhH5uqEGsLkW3IViqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXg0Og7im2x%2BdRKS0KtwDrtxRTcnsPG7Ne4A%2FJIRdMhIX8q6%2FSt58%2Fuv0gnP3n0ghuwTLuYb9LXJBjOt54xoe5S3c1pNCHQgXBSXXtG7lYCjXuGZz0kJXfaerrPMSwngicgGGE63CTitu%2BH4Syud67ruRlRbhIM57f4ZUdbyW5jmpGSXLYzV5WPLkJx7e1Iub60pU3DibkKMtX0QjaTOtquCMHLWLYksOzU7%2BPz%2BgqmI2TkuxZIe09N%2F6s1PnyxHFdSH8KFNKI3rQNwqHegjkaN4c%2FNWqxI%2FpUT%2BhaZMyRYVJ7nM8GF5k69QY0xS2wvjHX4MnJz0J9DT%2BWyiLm%2Bs%2B1Cg08IFdMnpXg%2FowA2oxc2feR3wnQUhF27pHbJbtJHDOWwcuq36KqMyki9JlJ2A%2FUYkN3sryIPo69aoVf9PrwBZa%2BcWp1mcCtt8Aef%2FFaqKCVhA9v6RoD91DzxMvKeE0oWxfqZBBlllCtDgJTQYmb5uhY2oPXHTyXHnKDRo8Ma5GTpgLFoGZ9Bil99Ydo8Yv3iLSmQxPKPBTBOPLRzzTqNjNRMAO5B2mcS%2BRnOo4sSLkWAZ0cGYpKwpwM15%2BnBq8fGKZQzmRWGOLkVoMGe1eB75QCAkraRYuHqFDzXnD5i16iObG%2B%2FLI7le%2BAyIwrfPKwgY6pgHJp1OKX%2FrYZcdtNpCJF6ZVYytVvBeDyDWeZgQs0xQ40fOStj6WWzs1JUPk9HHhrDlMCTIwjlsHjYoH%2F4rarHwtAw1jBmkekaqho%2Bxuk3zIiBGejr9zXqFhNZNqFJE8xK10pznp3UeoUZW%2FeeDvhQJKWRTpSvHXuxoiNZBfu0XuObB0a2N1l1yHpHIbR0VPBTPVs0gKGA3cmdQTsHUd4fKpVupokvns&X-Amz-Signature=a8c8cc37f7b2c18989e4f138ef496a71d080047d83b4c5a545337ba89c6b791d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZP3VHQP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAoaLIo6o%2BpllBT3b%2BN5hohCnvd6UHPSjvcby3JhARiAiBlkM12SrQdx5%2FpT13p5F0Sq8PAIWdhH5uqEGsLkW3IViqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXg0Og7im2x%2BdRKS0KtwDrtxRTcnsPG7Ne4A%2FJIRdMhIX8q6%2FSt58%2Fuv0gnP3n0ghuwTLuYb9LXJBjOt54xoe5S3c1pNCHQgXBSXXtG7lYCjXuGZz0kJXfaerrPMSwngicgGGE63CTitu%2BH4Syud67ruRlRbhIM57f4ZUdbyW5jmpGSXLYzV5WPLkJx7e1Iub60pU3DibkKMtX0QjaTOtquCMHLWLYksOzU7%2BPz%2BgqmI2TkuxZIe09N%2F6s1PnyxHFdSH8KFNKI3rQNwqHegjkaN4c%2FNWqxI%2FpUT%2BhaZMyRYVJ7nM8GF5k69QY0xS2wvjHX4MnJz0J9DT%2BWyiLm%2Bs%2B1Cg08IFdMnpXg%2FowA2oxc2feR3wnQUhF27pHbJbtJHDOWwcuq36KqMyki9JlJ2A%2FUYkN3sryIPo69aoVf9PrwBZa%2BcWp1mcCtt8Aef%2FFaqKCVhA9v6RoD91DzxMvKeE0oWxfqZBBlllCtDgJTQYmb5uhY2oPXHTyXHnKDRo8Ma5GTpgLFoGZ9Bil99Ydo8Yv3iLSmQxPKPBTBOPLRzzTqNjNRMAO5B2mcS%2BRnOo4sSLkWAZ0cGYpKwpwM15%2BnBq8fGKZQzmRWGOLkVoMGe1eB75QCAkraRYuHqFDzXnD5i16iObG%2B%2FLI7le%2BAyIwrfPKwgY6pgHJp1OKX%2FrYZcdtNpCJF6ZVYytVvBeDyDWeZgQs0xQ40fOStj6WWzs1JUPk9HHhrDlMCTIwjlsHjYoH%2F4rarHwtAw1jBmkekaqho%2Bxuk3zIiBGejr9zXqFhNZNqFJE8xK10pznp3UeoUZW%2FeeDvhQJKWRTpSvHXuxoiNZBfu0XuObB0a2N1l1yHpHIbR0VPBTPVs0gKGA3cmdQTsHUd4fKpVupokvns&X-Amz-Signature=6fc56d880a97c1029887123cd19687fce338ff78eaa39c6ed6ccc485aea05b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZP3VHQP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAoaLIo6o%2BpllBT3b%2BN5hohCnvd6UHPSjvcby3JhARiAiBlkM12SrQdx5%2FpT13p5F0Sq8PAIWdhH5uqEGsLkW3IViqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXg0Og7im2x%2BdRKS0KtwDrtxRTcnsPG7Ne4A%2FJIRdMhIX8q6%2FSt58%2Fuv0gnP3n0ghuwTLuYb9LXJBjOt54xoe5S3c1pNCHQgXBSXXtG7lYCjXuGZz0kJXfaerrPMSwngicgGGE63CTitu%2BH4Syud67ruRlRbhIM57f4ZUdbyW5jmpGSXLYzV5WPLkJx7e1Iub60pU3DibkKMtX0QjaTOtquCMHLWLYksOzU7%2BPz%2BgqmI2TkuxZIe09N%2F6s1PnyxHFdSH8KFNKI3rQNwqHegjkaN4c%2FNWqxI%2FpUT%2BhaZMyRYVJ7nM8GF5k69QY0xS2wvjHX4MnJz0J9DT%2BWyiLm%2Bs%2B1Cg08IFdMnpXg%2FowA2oxc2feR3wnQUhF27pHbJbtJHDOWwcuq36KqMyki9JlJ2A%2FUYkN3sryIPo69aoVf9PrwBZa%2BcWp1mcCtt8Aef%2FFaqKCVhA9v6RoD91DzxMvKeE0oWxfqZBBlllCtDgJTQYmb5uhY2oPXHTyXHnKDRo8Ma5GTpgLFoGZ9Bil99Ydo8Yv3iLSmQxPKPBTBOPLRzzTqNjNRMAO5B2mcS%2BRnOo4sSLkWAZ0cGYpKwpwM15%2BnBq8fGKZQzmRWGOLkVoMGe1eB75QCAkraRYuHqFDzXnD5i16iObG%2B%2FLI7le%2BAyIwrfPKwgY6pgHJp1OKX%2FrYZcdtNpCJF6ZVYytVvBeDyDWeZgQs0xQ40fOStj6WWzs1JUPk9HHhrDlMCTIwjlsHjYoH%2F4rarHwtAw1jBmkekaqho%2Bxuk3zIiBGejr9zXqFhNZNqFJE8xK10pznp3UeoUZW%2FeeDvhQJKWRTpSvHXuxoiNZBfu0XuObB0a2N1l1yHpHIbR0VPBTPVs0gKGA3cmdQTsHUd4fKpVupokvns&X-Amz-Signature=4649918a4bd73de3ae1f04701a3df74070a899e3c2cb58c01bd9becaa09d4258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZP3VHQP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAoaLIo6o%2BpllBT3b%2BN5hohCnvd6UHPSjvcby3JhARiAiBlkM12SrQdx5%2FpT13p5F0Sq8PAIWdhH5uqEGsLkW3IViqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXg0Og7im2x%2BdRKS0KtwDrtxRTcnsPG7Ne4A%2FJIRdMhIX8q6%2FSt58%2Fuv0gnP3n0ghuwTLuYb9LXJBjOt54xoe5S3c1pNCHQgXBSXXtG7lYCjXuGZz0kJXfaerrPMSwngicgGGE63CTitu%2BH4Syud67ruRlRbhIM57f4ZUdbyW5jmpGSXLYzV5WPLkJx7e1Iub60pU3DibkKMtX0QjaTOtquCMHLWLYksOzU7%2BPz%2BgqmI2TkuxZIe09N%2F6s1PnyxHFdSH8KFNKI3rQNwqHegjkaN4c%2FNWqxI%2FpUT%2BhaZMyRYVJ7nM8GF5k69QY0xS2wvjHX4MnJz0J9DT%2BWyiLm%2Bs%2B1Cg08IFdMnpXg%2FowA2oxc2feR3wnQUhF27pHbJbtJHDOWwcuq36KqMyki9JlJ2A%2FUYkN3sryIPo69aoVf9PrwBZa%2BcWp1mcCtt8Aef%2FFaqKCVhA9v6RoD91DzxMvKeE0oWxfqZBBlllCtDgJTQYmb5uhY2oPXHTyXHnKDRo8Ma5GTpgLFoGZ9Bil99Ydo8Yv3iLSmQxPKPBTBOPLRzzTqNjNRMAO5B2mcS%2BRnOo4sSLkWAZ0cGYpKwpwM15%2BnBq8fGKZQzmRWGOLkVoMGe1eB75QCAkraRYuHqFDzXnD5i16iObG%2B%2FLI7le%2BAyIwrfPKwgY6pgHJp1OKX%2FrYZcdtNpCJF6ZVYytVvBeDyDWeZgQs0xQ40fOStj6WWzs1JUPk9HHhrDlMCTIwjlsHjYoH%2F4rarHwtAw1jBmkekaqho%2Bxuk3zIiBGejr9zXqFhNZNqFJE8xK10pznp3UeoUZW%2FeeDvhQJKWRTpSvHXuxoiNZBfu0XuObB0a2N1l1yHpHIbR0VPBTPVs0gKGA3cmdQTsHUd4fKpVupokvns&X-Amz-Signature=48c574d8e200ab3d7d915247ee97e5231186df021284a9c5086d6d24dea7275b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZP3VHQP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAoaLIo6o%2BpllBT3b%2BN5hohCnvd6UHPSjvcby3JhARiAiBlkM12SrQdx5%2FpT13p5F0Sq8PAIWdhH5uqEGsLkW3IViqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXg0Og7im2x%2BdRKS0KtwDrtxRTcnsPG7Ne4A%2FJIRdMhIX8q6%2FSt58%2Fuv0gnP3n0ghuwTLuYb9LXJBjOt54xoe5S3c1pNCHQgXBSXXtG7lYCjXuGZz0kJXfaerrPMSwngicgGGE63CTitu%2BH4Syud67ruRlRbhIM57f4ZUdbyW5jmpGSXLYzV5WPLkJx7e1Iub60pU3DibkKMtX0QjaTOtquCMHLWLYksOzU7%2BPz%2BgqmI2TkuxZIe09N%2F6s1PnyxHFdSH8KFNKI3rQNwqHegjkaN4c%2FNWqxI%2FpUT%2BhaZMyRYVJ7nM8GF5k69QY0xS2wvjHX4MnJz0J9DT%2BWyiLm%2Bs%2B1Cg08IFdMnpXg%2FowA2oxc2feR3wnQUhF27pHbJbtJHDOWwcuq36KqMyki9JlJ2A%2FUYkN3sryIPo69aoVf9PrwBZa%2BcWp1mcCtt8Aef%2FFaqKCVhA9v6RoD91DzxMvKeE0oWxfqZBBlllCtDgJTQYmb5uhY2oPXHTyXHnKDRo8Ma5GTpgLFoGZ9Bil99Ydo8Yv3iLSmQxPKPBTBOPLRzzTqNjNRMAO5B2mcS%2BRnOo4sSLkWAZ0cGYpKwpwM15%2BnBq8fGKZQzmRWGOLkVoMGe1eB75QCAkraRYuHqFDzXnD5i16iObG%2B%2FLI7le%2BAyIwrfPKwgY6pgHJp1OKX%2FrYZcdtNpCJF6ZVYytVvBeDyDWeZgQs0xQ40fOStj6WWzs1JUPk9HHhrDlMCTIwjlsHjYoH%2F4rarHwtAw1jBmkekaqho%2Bxuk3zIiBGejr9zXqFhNZNqFJE8xK10pznp3UeoUZW%2FeeDvhQJKWRTpSvHXuxoiNZBfu0XuObB0a2N1l1yHpHIbR0VPBTPVs0gKGA3cmdQTsHUd4fKpVupokvns&X-Amz-Signature=6e1b3378bf31dd7a78d9ed4764f00a3ec1c6fa0373bd8374bcc3ef7ad1b99d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
