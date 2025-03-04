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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBVNZWR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwwtzKTiujPFyX4S4AEI006WgfJJGLwB1%2Bk6oIoElIMQIhAOCXHVZRtGMVIq5XMEkUg3vE7s%2B4iw1Vp4aUDwxkXGfUKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw37SyeiO9CTYItb0q3AOoUPRgifRtGaF9rl5VT3NfsmwDYBGOxP3wQN2ou3CsBlwKmQlzEh3kagceHOWm7fSlQw2kAqSc55qw8JKNYnnzrAsuRRx2YVowAlVaKtgCKu4xof7kvIK2WxhXFP0EvTEHQuTlV71fjDoB1xmHgNPLJ%2BVVzcj4tfBTwQuq%2BfxL6g7ECD5%2FLSExzGbyiw52iDYRxrn7OrO3qXKIcoH9jYlJ724vRSA5Dupzw%2FpeykxjWOwGzxkJbbQQp6ykBIcgGfu5s5Acv54sG390JIwb1T9sm0x05ZYiSWtBCY27e64O58YEYyNkjbdSwGWDyWKiTQjutWOKQp6DcFUEntdy3bWNr%2BDFwqFOJn3RIqXdxZXLSetsCV13oERTIawcVphIGzp0UpRsSzjlybFiAe4jwyeAnbum%2Fj4e2uc2Kyd%2BjZna5ECpGiMAaxZWFZoSfuzs%2BWvB38ereuRvHDt4AQ6b2CE5ZaIVybWlzsJJqysha9y4XbMxTGxIlwGywUKgrIpMIP%2BRwVpK4qFSt33y0FqBEIK6CRPjfsH1VG1GjpFF7xb6YpJC76sADORcJmLYGpGHUUyKhMcSYoknZ2VA1nz6luUO0pb%2B67ls321cmshXWLZ1JDGt1YGLAdLLZaO%2FoTDM6Zu%2BBjqkAY5Z3Vh84U%2FqtdCa7yqRR4l6rT404dqDVVDVi9GfE5Ka3v9ZFs1VH3d8yIyTmL%2B3hdXNVMQsJE8TIA7XHXeNKvajzSViZylSG1oKhINHcBRi%2B8Ltvr48YDnpb0gk2%2FRBPw9Odtri5F5JoRzWVu9rNUOjjNuCjK46ZTULjcE3xQw1Mg2%2BXtOEWBgTgmXctf%2FpnWLYf9H4Bb7lQNhHntJu01jTpM%2F7&X-Amz-Signature=0d8ae516e58ae837e3ec162b9457675bc6c6097413e6001f0d8096e0591077fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBVNZWR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwwtzKTiujPFyX4S4AEI006WgfJJGLwB1%2Bk6oIoElIMQIhAOCXHVZRtGMVIq5XMEkUg3vE7s%2B4iw1Vp4aUDwxkXGfUKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw37SyeiO9CTYItb0q3AOoUPRgifRtGaF9rl5VT3NfsmwDYBGOxP3wQN2ou3CsBlwKmQlzEh3kagceHOWm7fSlQw2kAqSc55qw8JKNYnnzrAsuRRx2YVowAlVaKtgCKu4xof7kvIK2WxhXFP0EvTEHQuTlV71fjDoB1xmHgNPLJ%2BVVzcj4tfBTwQuq%2BfxL6g7ECD5%2FLSExzGbyiw52iDYRxrn7OrO3qXKIcoH9jYlJ724vRSA5Dupzw%2FpeykxjWOwGzxkJbbQQp6ykBIcgGfu5s5Acv54sG390JIwb1T9sm0x05ZYiSWtBCY27e64O58YEYyNkjbdSwGWDyWKiTQjutWOKQp6DcFUEntdy3bWNr%2BDFwqFOJn3RIqXdxZXLSetsCV13oERTIawcVphIGzp0UpRsSzjlybFiAe4jwyeAnbum%2Fj4e2uc2Kyd%2BjZna5ECpGiMAaxZWFZoSfuzs%2BWvB38ereuRvHDt4AQ6b2CE5ZaIVybWlzsJJqysha9y4XbMxTGxIlwGywUKgrIpMIP%2BRwVpK4qFSt33y0FqBEIK6CRPjfsH1VG1GjpFF7xb6YpJC76sADORcJmLYGpGHUUyKhMcSYoknZ2VA1nz6luUO0pb%2B67ls321cmshXWLZ1JDGt1YGLAdLLZaO%2FoTDM6Zu%2BBjqkAY5Z3Vh84U%2FqtdCa7yqRR4l6rT404dqDVVDVi9GfE5Ka3v9ZFs1VH3d8yIyTmL%2B3hdXNVMQsJE8TIA7XHXeNKvajzSViZylSG1oKhINHcBRi%2B8Ltvr48YDnpb0gk2%2FRBPw9Odtri5F5JoRzWVu9rNUOjjNuCjK46ZTULjcE3xQw1Mg2%2BXtOEWBgTgmXctf%2FpnWLYf9H4Bb7lQNhHntJu01jTpM%2F7&X-Amz-Signature=f9bcfbc5d2212f0afd60982dbb3bc492806d28e5ac86db959957df18b931ade6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBVNZWR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwwtzKTiujPFyX4S4AEI006WgfJJGLwB1%2Bk6oIoElIMQIhAOCXHVZRtGMVIq5XMEkUg3vE7s%2B4iw1Vp4aUDwxkXGfUKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw37SyeiO9CTYItb0q3AOoUPRgifRtGaF9rl5VT3NfsmwDYBGOxP3wQN2ou3CsBlwKmQlzEh3kagceHOWm7fSlQw2kAqSc55qw8JKNYnnzrAsuRRx2YVowAlVaKtgCKu4xof7kvIK2WxhXFP0EvTEHQuTlV71fjDoB1xmHgNPLJ%2BVVzcj4tfBTwQuq%2BfxL6g7ECD5%2FLSExzGbyiw52iDYRxrn7OrO3qXKIcoH9jYlJ724vRSA5Dupzw%2FpeykxjWOwGzxkJbbQQp6ykBIcgGfu5s5Acv54sG390JIwb1T9sm0x05ZYiSWtBCY27e64O58YEYyNkjbdSwGWDyWKiTQjutWOKQp6DcFUEntdy3bWNr%2BDFwqFOJn3RIqXdxZXLSetsCV13oERTIawcVphIGzp0UpRsSzjlybFiAe4jwyeAnbum%2Fj4e2uc2Kyd%2BjZna5ECpGiMAaxZWFZoSfuzs%2BWvB38ereuRvHDt4AQ6b2CE5ZaIVybWlzsJJqysha9y4XbMxTGxIlwGywUKgrIpMIP%2BRwVpK4qFSt33y0FqBEIK6CRPjfsH1VG1GjpFF7xb6YpJC76sADORcJmLYGpGHUUyKhMcSYoknZ2VA1nz6luUO0pb%2B67ls321cmshXWLZ1JDGt1YGLAdLLZaO%2FoTDM6Zu%2BBjqkAY5Z3Vh84U%2FqtdCa7yqRR4l6rT404dqDVVDVi9GfE5Ka3v9ZFs1VH3d8yIyTmL%2B3hdXNVMQsJE8TIA7XHXeNKvajzSViZylSG1oKhINHcBRi%2B8Ltvr48YDnpb0gk2%2FRBPw9Odtri5F5JoRzWVu9rNUOjjNuCjK46ZTULjcE3xQw1Mg2%2BXtOEWBgTgmXctf%2FpnWLYf9H4Bb7lQNhHntJu01jTpM%2F7&X-Amz-Signature=11fd2d2a16ab0b8fd2b6b810361f7c89a9e3eada834dfc6da0ce2a2b0ebc51ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBVNZWR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwwtzKTiujPFyX4S4AEI006WgfJJGLwB1%2Bk6oIoElIMQIhAOCXHVZRtGMVIq5XMEkUg3vE7s%2B4iw1Vp4aUDwxkXGfUKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw37SyeiO9CTYItb0q3AOoUPRgifRtGaF9rl5VT3NfsmwDYBGOxP3wQN2ou3CsBlwKmQlzEh3kagceHOWm7fSlQw2kAqSc55qw8JKNYnnzrAsuRRx2YVowAlVaKtgCKu4xof7kvIK2WxhXFP0EvTEHQuTlV71fjDoB1xmHgNPLJ%2BVVzcj4tfBTwQuq%2BfxL6g7ECD5%2FLSExzGbyiw52iDYRxrn7OrO3qXKIcoH9jYlJ724vRSA5Dupzw%2FpeykxjWOwGzxkJbbQQp6ykBIcgGfu5s5Acv54sG390JIwb1T9sm0x05ZYiSWtBCY27e64O58YEYyNkjbdSwGWDyWKiTQjutWOKQp6DcFUEntdy3bWNr%2BDFwqFOJn3RIqXdxZXLSetsCV13oERTIawcVphIGzp0UpRsSzjlybFiAe4jwyeAnbum%2Fj4e2uc2Kyd%2BjZna5ECpGiMAaxZWFZoSfuzs%2BWvB38ereuRvHDt4AQ6b2CE5ZaIVybWlzsJJqysha9y4XbMxTGxIlwGywUKgrIpMIP%2BRwVpK4qFSt33y0FqBEIK6CRPjfsH1VG1GjpFF7xb6YpJC76sADORcJmLYGpGHUUyKhMcSYoknZ2VA1nz6luUO0pb%2B67ls321cmshXWLZ1JDGt1YGLAdLLZaO%2FoTDM6Zu%2BBjqkAY5Z3Vh84U%2FqtdCa7yqRR4l6rT404dqDVVDVi9GfE5Ka3v9ZFs1VH3d8yIyTmL%2B3hdXNVMQsJE8TIA7XHXeNKvajzSViZylSG1oKhINHcBRi%2B8Ltvr48YDnpb0gk2%2FRBPw9Odtri5F5JoRzWVu9rNUOjjNuCjK46ZTULjcE3xQw1Mg2%2BXtOEWBgTgmXctf%2FpnWLYf9H4Bb7lQNhHntJu01jTpM%2F7&X-Amz-Signature=c6f03aa0522cc63c9e2ce31e7b307dbf5123bf91e49ea3ee262a6a4bd86c5240&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBVNZWR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwwtzKTiujPFyX4S4AEI006WgfJJGLwB1%2Bk6oIoElIMQIhAOCXHVZRtGMVIq5XMEkUg3vE7s%2B4iw1Vp4aUDwxkXGfUKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw37SyeiO9CTYItb0q3AOoUPRgifRtGaF9rl5VT3NfsmwDYBGOxP3wQN2ou3CsBlwKmQlzEh3kagceHOWm7fSlQw2kAqSc55qw8JKNYnnzrAsuRRx2YVowAlVaKtgCKu4xof7kvIK2WxhXFP0EvTEHQuTlV71fjDoB1xmHgNPLJ%2BVVzcj4tfBTwQuq%2BfxL6g7ECD5%2FLSExzGbyiw52iDYRxrn7OrO3qXKIcoH9jYlJ724vRSA5Dupzw%2FpeykxjWOwGzxkJbbQQp6ykBIcgGfu5s5Acv54sG390JIwb1T9sm0x05ZYiSWtBCY27e64O58YEYyNkjbdSwGWDyWKiTQjutWOKQp6DcFUEntdy3bWNr%2BDFwqFOJn3RIqXdxZXLSetsCV13oERTIawcVphIGzp0UpRsSzjlybFiAe4jwyeAnbum%2Fj4e2uc2Kyd%2BjZna5ECpGiMAaxZWFZoSfuzs%2BWvB38ereuRvHDt4AQ6b2CE5ZaIVybWlzsJJqysha9y4XbMxTGxIlwGywUKgrIpMIP%2BRwVpK4qFSt33y0FqBEIK6CRPjfsH1VG1GjpFF7xb6YpJC76sADORcJmLYGpGHUUyKhMcSYoknZ2VA1nz6luUO0pb%2B67ls321cmshXWLZ1JDGt1YGLAdLLZaO%2FoTDM6Zu%2BBjqkAY5Z3Vh84U%2FqtdCa7yqRR4l6rT404dqDVVDVi9GfE5Ka3v9ZFs1VH3d8yIyTmL%2B3hdXNVMQsJE8TIA7XHXeNKvajzSViZylSG1oKhINHcBRi%2B8Ltvr48YDnpb0gk2%2FRBPw9Odtri5F5JoRzWVu9rNUOjjNuCjK46ZTULjcE3xQw1Mg2%2BXtOEWBgTgmXctf%2FpnWLYf9H4Bb7lQNhHntJu01jTpM%2F7&X-Amz-Signature=64d0debd1571a126ae845d0b90f3f792afc9ac4153f585f84fa8f3c88fbfc793&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
