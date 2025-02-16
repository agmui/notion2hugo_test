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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653P2EHP7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCiob6rVseKNGDp7VrKik99PnE9nZx6FfFeb1XVVrx6qwIhAPNJ2rcw2FvkP0Azi9k7ca2FnYhUKllUHqk1wawvkG1CKv8DCGcQABoMNjM3NDIzMTgzODA1IgyZVtGHVp7UoL9LO2Uq3ANxBZvlPMtNx%2FXvCKP9jCASmvegBYPLczBHOiJF46lINAB%2BJEftPU1WtpZaFIGVe%2FHrc4oaAmIMsWvZdevxls41nPP6HlkSKzd6PP1FYlozkngqFVvqd0zaBIbHJwpwFB%2BzYTYrKOzKk57EHJNz481czXK3gCnV2Eg17JW8E4HlaX79PGm%2Fh1If3fLYXk5sQFu%2Fxl7bBorGLPLaHyRxwrERJKg4e%2F2Rh4eCrwzb5WfvybzKBz32B0%2BW8WwP9c%2BKwJYs5yg%2BC1LObDDx67H%2BTyyAJA6iACa5n5aBtMSHeawAwPiNJmpc%2F7KtVnNdDxS2t08oT37ZZEn7Cct8PJzmWshJnc5Cxv8RnV9Gmqcfpw0CKoAzI0FXyO1Y0OGNh0UGQz3A9xRullbTQyKOTdisMPdl2Bp8CstwmHcEUkD308f2lP5oVV7Uj09S0i3Yw4xHRhldR2PVvcC31i9Mufvx0vjS%2BrOm1gIdtoyQVFDwq3g9iGhgOwdTkkd5uuhz13O5xvvONNyHeH5uwveE8Mbq1WVNB3Pyy7ddgDDUBBPo9xksOOJ7lEsj5Rpug0%2F2zvTkQCR9zAbwK4HfPHeOnTkx0EPaRM%2FHzFFEbuhNedWoaAj%2F%2BU%2FiPLcbU0w2UIkFAzDPyMm9BjqkAdcj%2B8hREZLc2deDAVFWizrwhO7cuCbywEscAoxyuGTRKngHdstYSeKL3nGMhZ0VZ2luArrH951Q4E4eX68Ebnv%2FOk0x28985XDRfLPFT9kScoDwFko8hKVuCPmNqlpuzpqEdQLX%2BOKOU8S7AVS0OGssADXn%2FABzBJT3o1G1q72afC1xXyfcDk7MOSlAhJcWIbjMuMqPf46peJ5%2BFZun75%2F3CX2t&X-Amz-Signature=ee2cf204fcb5a396761d58a57eee081083e16f1197c13906a721b0fa7b92c9f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653P2EHP7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCiob6rVseKNGDp7VrKik99PnE9nZx6FfFeb1XVVrx6qwIhAPNJ2rcw2FvkP0Azi9k7ca2FnYhUKllUHqk1wawvkG1CKv8DCGcQABoMNjM3NDIzMTgzODA1IgyZVtGHVp7UoL9LO2Uq3ANxBZvlPMtNx%2FXvCKP9jCASmvegBYPLczBHOiJF46lINAB%2BJEftPU1WtpZaFIGVe%2FHrc4oaAmIMsWvZdevxls41nPP6HlkSKzd6PP1FYlozkngqFVvqd0zaBIbHJwpwFB%2BzYTYrKOzKk57EHJNz481czXK3gCnV2Eg17JW8E4HlaX79PGm%2Fh1If3fLYXk5sQFu%2Fxl7bBorGLPLaHyRxwrERJKg4e%2F2Rh4eCrwzb5WfvybzKBz32B0%2BW8WwP9c%2BKwJYs5yg%2BC1LObDDx67H%2BTyyAJA6iACa5n5aBtMSHeawAwPiNJmpc%2F7KtVnNdDxS2t08oT37ZZEn7Cct8PJzmWshJnc5Cxv8RnV9Gmqcfpw0CKoAzI0FXyO1Y0OGNh0UGQz3A9xRullbTQyKOTdisMPdl2Bp8CstwmHcEUkD308f2lP5oVV7Uj09S0i3Yw4xHRhldR2PVvcC31i9Mufvx0vjS%2BrOm1gIdtoyQVFDwq3g9iGhgOwdTkkd5uuhz13O5xvvONNyHeH5uwveE8Mbq1WVNB3Pyy7ddgDDUBBPo9xksOOJ7lEsj5Rpug0%2F2zvTkQCR9zAbwK4HfPHeOnTkx0EPaRM%2FHzFFEbuhNedWoaAj%2F%2BU%2FiPLcbU0w2UIkFAzDPyMm9BjqkAdcj%2B8hREZLc2deDAVFWizrwhO7cuCbywEscAoxyuGTRKngHdstYSeKL3nGMhZ0VZ2luArrH951Q4E4eX68Ebnv%2FOk0x28985XDRfLPFT9kScoDwFko8hKVuCPmNqlpuzpqEdQLX%2BOKOU8S7AVS0OGssADXn%2FABzBJT3o1G1q72afC1xXyfcDk7MOSlAhJcWIbjMuMqPf46peJ5%2BFZun75%2F3CX2t&X-Amz-Signature=c63892cda526eab53db766c35938cf7bee9552cd4dc58ed1938ffbd525d387ea&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653P2EHP7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCiob6rVseKNGDp7VrKik99PnE9nZx6FfFeb1XVVrx6qwIhAPNJ2rcw2FvkP0Azi9k7ca2FnYhUKllUHqk1wawvkG1CKv8DCGcQABoMNjM3NDIzMTgzODA1IgyZVtGHVp7UoL9LO2Uq3ANxBZvlPMtNx%2FXvCKP9jCASmvegBYPLczBHOiJF46lINAB%2BJEftPU1WtpZaFIGVe%2FHrc4oaAmIMsWvZdevxls41nPP6HlkSKzd6PP1FYlozkngqFVvqd0zaBIbHJwpwFB%2BzYTYrKOzKk57EHJNz481czXK3gCnV2Eg17JW8E4HlaX79PGm%2Fh1If3fLYXk5sQFu%2Fxl7bBorGLPLaHyRxwrERJKg4e%2F2Rh4eCrwzb5WfvybzKBz32B0%2BW8WwP9c%2BKwJYs5yg%2BC1LObDDx67H%2BTyyAJA6iACa5n5aBtMSHeawAwPiNJmpc%2F7KtVnNdDxS2t08oT37ZZEn7Cct8PJzmWshJnc5Cxv8RnV9Gmqcfpw0CKoAzI0FXyO1Y0OGNh0UGQz3A9xRullbTQyKOTdisMPdl2Bp8CstwmHcEUkD308f2lP5oVV7Uj09S0i3Yw4xHRhldR2PVvcC31i9Mufvx0vjS%2BrOm1gIdtoyQVFDwq3g9iGhgOwdTkkd5uuhz13O5xvvONNyHeH5uwveE8Mbq1WVNB3Pyy7ddgDDUBBPo9xksOOJ7lEsj5Rpug0%2F2zvTkQCR9zAbwK4HfPHeOnTkx0EPaRM%2FHzFFEbuhNedWoaAj%2F%2BU%2FiPLcbU0w2UIkFAzDPyMm9BjqkAdcj%2B8hREZLc2deDAVFWizrwhO7cuCbywEscAoxyuGTRKngHdstYSeKL3nGMhZ0VZ2luArrH951Q4E4eX68Ebnv%2FOk0x28985XDRfLPFT9kScoDwFko8hKVuCPmNqlpuzpqEdQLX%2BOKOU8S7AVS0OGssADXn%2FABzBJT3o1G1q72afC1xXyfcDk7MOSlAhJcWIbjMuMqPf46peJ5%2BFZun75%2F3CX2t&X-Amz-Signature=5ab0c13c6bb659fe6763843dbb54a25335006a705b12e5375090758100f5e0a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653P2EHP7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCiob6rVseKNGDp7VrKik99PnE9nZx6FfFeb1XVVrx6qwIhAPNJ2rcw2FvkP0Azi9k7ca2FnYhUKllUHqk1wawvkG1CKv8DCGcQABoMNjM3NDIzMTgzODA1IgyZVtGHVp7UoL9LO2Uq3ANxBZvlPMtNx%2FXvCKP9jCASmvegBYPLczBHOiJF46lINAB%2BJEftPU1WtpZaFIGVe%2FHrc4oaAmIMsWvZdevxls41nPP6HlkSKzd6PP1FYlozkngqFVvqd0zaBIbHJwpwFB%2BzYTYrKOzKk57EHJNz481czXK3gCnV2Eg17JW8E4HlaX79PGm%2Fh1If3fLYXk5sQFu%2Fxl7bBorGLPLaHyRxwrERJKg4e%2F2Rh4eCrwzb5WfvybzKBz32B0%2BW8WwP9c%2BKwJYs5yg%2BC1LObDDx67H%2BTyyAJA6iACa5n5aBtMSHeawAwPiNJmpc%2F7KtVnNdDxS2t08oT37ZZEn7Cct8PJzmWshJnc5Cxv8RnV9Gmqcfpw0CKoAzI0FXyO1Y0OGNh0UGQz3A9xRullbTQyKOTdisMPdl2Bp8CstwmHcEUkD308f2lP5oVV7Uj09S0i3Yw4xHRhldR2PVvcC31i9Mufvx0vjS%2BrOm1gIdtoyQVFDwq3g9iGhgOwdTkkd5uuhz13O5xvvONNyHeH5uwveE8Mbq1WVNB3Pyy7ddgDDUBBPo9xksOOJ7lEsj5Rpug0%2F2zvTkQCR9zAbwK4HfPHeOnTkx0EPaRM%2FHzFFEbuhNedWoaAj%2F%2BU%2FiPLcbU0w2UIkFAzDPyMm9BjqkAdcj%2B8hREZLc2deDAVFWizrwhO7cuCbywEscAoxyuGTRKngHdstYSeKL3nGMhZ0VZ2luArrH951Q4E4eX68Ebnv%2FOk0x28985XDRfLPFT9kScoDwFko8hKVuCPmNqlpuzpqEdQLX%2BOKOU8S7AVS0OGssADXn%2FABzBJT3o1G1q72afC1xXyfcDk7MOSlAhJcWIbjMuMqPf46peJ5%2BFZun75%2F3CX2t&X-Amz-Signature=6c151106a772ec7ac86ae88aadb0dc662a8eeb7d9119e76377b89a7eb8dcbdf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653P2EHP7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCiob6rVseKNGDp7VrKik99PnE9nZx6FfFeb1XVVrx6qwIhAPNJ2rcw2FvkP0Azi9k7ca2FnYhUKllUHqk1wawvkG1CKv8DCGcQABoMNjM3NDIzMTgzODA1IgyZVtGHVp7UoL9LO2Uq3ANxBZvlPMtNx%2FXvCKP9jCASmvegBYPLczBHOiJF46lINAB%2BJEftPU1WtpZaFIGVe%2FHrc4oaAmIMsWvZdevxls41nPP6HlkSKzd6PP1FYlozkngqFVvqd0zaBIbHJwpwFB%2BzYTYrKOzKk57EHJNz481czXK3gCnV2Eg17JW8E4HlaX79PGm%2Fh1If3fLYXk5sQFu%2Fxl7bBorGLPLaHyRxwrERJKg4e%2F2Rh4eCrwzb5WfvybzKBz32B0%2BW8WwP9c%2BKwJYs5yg%2BC1LObDDx67H%2BTyyAJA6iACa5n5aBtMSHeawAwPiNJmpc%2F7KtVnNdDxS2t08oT37ZZEn7Cct8PJzmWshJnc5Cxv8RnV9Gmqcfpw0CKoAzI0FXyO1Y0OGNh0UGQz3A9xRullbTQyKOTdisMPdl2Bp8CstwmHcEUkD308f2lP5oVV7Uj09S0i3Yw4xHRhldR2PVvcC31i9Mufvx0vjS%2BrOm1gIdtoyQVFDwq3g9iGhgOwdTkkd5uuhz13O5xvvONNyHeH5uwveE8Mbq1WVNB3Pyy7ddgDDUBBPo9xksOOJ7lEsj5Rpug0%2F2zvTkQCR9zAbwK4HfPHeOnTkx0EPaRM%2FHzFFEbuhNedWoaAj%2F%2BU%2FiPLcbU0w2UIkFAzDPyMm9BjqkAdcj%2B8hREZLc2deDAVFWizrwhO7cuCbywEscAoxyuGTRKngHdstYSeKL3nGMhZ0VZ2luArrH951Q4E4eX68Ebnv%2FOk0x28985XDRfLPFT9kScoDwFko8hKVuCPmNqlpuzpqEdQLX%2BOKOU8S7AVS0OGssADXn%2FABzBJT3o1G1q72afC1xXyfcDk7MOSlAhJcWIbjMuMqPf46peJ5%2BFZun75%2F3CX2t&X-Amz-Signature=53de073326c41da9fc01aa9ffd1c1545146561ffb4b4f8b65af5c52b49bb6964&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
