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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIAJ5UJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHSQab4mCoDbN2EkjUmpwOFw7p3C%2BVk5Exe3%2Fqo6ygTHAiAXgGHnm9%2FAQOAmtuATpHLIpI6AS96LLoDy9dlEUFaoByr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMRqRsK2z0N8DQY%2BADKtwDYCRm%2FokbXecGmfISex9hQ1xdXceglRajFkik%2FalNIdl92DuCTdI6FjWJuoc7duZReNVzRdI6ObCzo48Bby9ACIUCT8wfaOq5wWCUXETfkM408bzGcQN0QtM%2BnuzoZZW2iIRN%2Bemqqjgqts420BdcKQLGPmOfCnZMFFwXXICHQwMPLOA6%2BKkXvKPh3ppdNjvvMxYQdTeQR2qqZV73LXjejoNwf%2FfkJTyDXZHgAbAb7e5yijq1yU3906xTD7n%2Fv3t6fFFT3EIG99uyNaA99H2MenFaSrRX2zu5mmesPVZjx0Voh0fIw8TTFQvVFIBSpAWOtelyzDBe4swnB5YBrs6iBs8GzXigkCtQTjczLq71hbjXR3qkwLl%2FDn2WYZCvYotOeir8QJPzM7sSW0sGLaXXwl1T%2FQ%2BFrno9LTGaq3%2BvrEiAWNxY%2Fk6gskZY%2FlEef2vvExUj5xHuJ3CmO1BjHLq%2FA81IfdpIPSe8Xr5aO5PEbwRFprGwmCmqVxVUrxfdCi74hNqC%2F1wr59FCIotd250x0si3opcXfjg2uAnsE2lLxeC38geEDjS71z9zr2pwLYti3PaaJ94KW6LeEyxuX7pSyHiZwxdumsu2Ubj%2FjP7uc3fR5e7VjM%2FbdsCLA9Iw08aYvQY6pgGGmhyU32J44etq%2BZwmlpxt7zM7vn71c70O%2BSPFVuHuKX5QTu2T7fwVJwXWSy%2FdtBpNavCmztl8yLY40RMj7Vv795RyssWr6y8teHLCBlwZbRDnxrAqjOnaeCs1kCVQ4uSA7aXHX8oSc%2Fx%2FKlTRWlU5ivKq%2F4A%2BtfHLTz%2BCpENcAPZpnUA2HQ3%2BO9Z%2FJbiRC49mk3wsF1quBIAiPfxvdlvDLiWUS7v8&X-Amz-Signature=61482647032d9ffcddc4c29652f0b887111fadeb05be2d13a9e8d35d8fe923e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIAJ5UJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHSQab4mCoDbN2EkjUmpwOFw7p3C%2BVk5Exe3%2Fqo6ygTHAiAXgGHnm9%2FAQOAmtuATpHLIpI6AS96LLoDy9dlEUFaoByr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMRqRsK2z0N8DQY%2BADKtwDYCRm%2FokbXecGmfISex9hQ1xdXceglRajFkik%2FalNIdl92DuCTdI6FjWJuoc7duZReNVzRdI6ObCzo48Bby9ACIUCT8wfaOq5wWCUXETfkM408bzGcQN0QtM%2BnuzoZZW2iIRN%2Bemqqjgqts420BdcKQLGPmOfCnZMFFwXXICHQwMPLOA6%2BKkXvKPh3ppdNjvvMxYQdTeQR2qqZV73LXjejoNwf%2FfkJTyDXZHgAbAb7e5yijq1yU3906xTD7n%2Fv3t6fFFT3EIG99uyNaA99H2MenFaSrRX2zu5mmesPVZjx0Voh0fIw8TTFQvVFIBSpAWOtelyzDBe4swnB5YBrs6iBs8GzXigkCtQTjczLq71hbjXR3qkwLl%2FDn2WYZCvYotOeir8QJPzM7sSW0sGLaXXwl1T%2FQ%2BFrno9LTGaq3%2BvrEiAWNxY%2Fk6gskZY%2FlEef2vvExUj5xHuJ3CmO1BjHLq%2FA81IfdpIPSe8Xr5aO5PEbwRFprGwmCmqVxVUrxfdCi74hNqC%2F1wr59FCIotd250x0si3opcXfjg2uAnsE2lLxeC38geEDjS71z9zr2pwLYti3PaaJ94KW6LeEyxuX7pSyHiZwxdumsu2Ubj%2FjP7uc3fR5e7VjM%2FbdsCLA9Iw08aYvQY6pgGGmhyU32J44etq%2BZwmlpxt7zM7vn71c70O%2BSPFVuHuKX5QTu2T7fwVJwXWSy%2FdtBpNavCmztl8yLY40RMj7Vv795RyssWr6y8teHLCBlwZbRDnxrAqjOnaeCs1kCVQ4uSA7aXHX8oSc%2Fx%2FKlTRWlU5ivKq%2F4A%2BtfHLTz%2BCpENcAPZpnUA2HQ3%2BO9Z%2FJbiRC49mk3wsF1quBIAiPfxvdlvDLiWUS7v8&X-Amz-Signature=8ac36c00ce6bfa50da3dfdb56103e6b378cb6b7d409a12cb891e60657da0bd4b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIAJ5UJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHSQab4mCoDbN2EkjUmpwOFw7p3C%2BVk5Exe3%2Fqo6ygTHAiAXgGHnm9%2FAQOAmtuATpHLIpI6AS96LLoDy9dlEUFaoByr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMRqRsK2z0N8DQY%2BADKtwDYCRm%2FokbXecGmfISex9hQ1xdXceglRajFkik%2FalNIdl92DuCTdI6FjWJuoc7duZReNVzRdI6ObCzo48Bby9ACIUCT8wfaOq5wWCUXETfkM408bzGcQN0QtM%2BnuzoZZW2iIRN%2Bemqqjgqts420BdcKQLGPmOfCnZMFFwXXICHQwMPLOA6%2BKkXvKPh3ppdNjvvMxYQdTeQR2qqZV73LXjejoNwf%2FfkJTyDXZHgAbAb7e5yijq1yU3906xTD7n%2Fv3t6fFFT3EIG99uyNaA99H2MenFaSrRX2zu5mmesPVZjx0Voh0fIw8TTFQvVFIBSpAWOtelyzDBe4swnB5YBrs6iBs8GzXigkCtQTjczLq71hbjXR3qkwLl%2FDn2WYZCvYotOeir8QJPzM7sSW0sGLaXXwl1T%2FQ%2BFrno9LTGaq3%2BvrEiAWNxY%2Fk6gskZY%2FlEef2vvExUj5xHuJ3CmO1BjHLq%2FA81IfdpIPSe8Xr5aO5PEbwRFprGwmCmqVxVUrxfdCi74hNqC%2F1wr59FCIotd250x0si3opcXfjg2uAnsE2lLxeC38geEDjS71z9zr2pwLYti3PaaJ94KW6LeEyxuX7pSyHiZwxdumsu2Ubj%2FjP7uc3fR5e7VjM%2FbdsCLA9Iw08aYvQY6pgGGmhyU32J44etq%2BZwmlpxt7zM7vn71c70O%2BSPFVuHuKX5QTu2T7fwVJwXWSy%2FdtBpNavCmztl8yLY40RMj7Vv795RyssWr6y8teHLCBlwZbRDnxrAqjOnaeCs1kCVQ4uSA7aXHX8oSc%2Fx%2FKlTRWlU5ivKq%2F4A%2BtfHLTz%2BCpENcAPZpnUA2HQ3%2BO9Z%2FJbiRC49mk3wsF1quBIAiPfxvdlvDLiWUS7v8&X-Amz-Signature=dcc2cde30c8c9efced91f23e2c2b2bc7f23ca711074ccae9421aa345894ac7a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIAJ5UJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHSQab4mCoDbN2EkjUmpwOFw7p3C%2BVk5Exe3%2Fqo6ygTHAiAXgGHnm9%2FAQOAmtuATpHLIpI6AS96LLoDy9dlEUFaoByr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMRqRsK2z0N8DQY%2BADKtwDYCRm%2FokbXecGmfISex9hQ1xdXceglRajFkik%2FalNIdl92DuCTdI6FjWJuoc7duZReNVzRdI6ObCzo48Bby9ACIUCT8wfaOq5wWCUXETfkM408bzGcQN0QtM%2BnuzoZZW2iIRN%2Bemqqjgqts420BdcKQLGPmOfCnZMFFwXXICHQwMPLOA6%2BKkXvKPh3ppdNjvvMxYQdTeQR2qqZV73LXjejoNwf%2FfkJTyDXZHgAbAb7e5yijq1yU3906xTD7n%2Fv3t6fFFT3EIG99uyNaA99H2MenFaSrRX2zu5mmesPVZjx0Voh0fIw8TTFQvVFIBSpAWOtelyzDBe4swnB5YBrs6iBs8GzXigkCtQTjczLq71hbjXR3qkwLl%2FDn2WYZCvYotOeir8QJPzM7sSW0sGLaXXwl1T%2FQ%2BFrno9LTGaq3%2BvrEiAWNxY%2Fk6gskZY%2FlEef2vvExUj5xHuJ3CmO1BjHLq%2FA81IfdpIPSe8Xr5aO5PEbwRFprGwmCmqVxVUrxfdCi74hNqC%2F1wr59FCIotd250x0si3opcXfjg2uAnsE2lLxeC38geEDjS71z9zr2pwLYti3PaaJ94KW6LeEyxuX7pSyHiZwxdumsu2Ubj%2FjP7uc3fR5e7VjM%2FbdsCLA9Iw08aYvQY6pgGGmhyU32J44etq%2BZwmlpxt7zM7vn71c70O%2BSPFVuHuKX5QTu2T7fwVJwXWSy%2FdtBpNavCmztl8yLY40RMj7Vv795RyssWr6y8teHLCBlwZbRDnxrAqjOnaeCs1kCVQ4uSA7aXHX8oSc%2Fx%2FKlTRWlU5ivKq%2F4A%2BtfHLTz%2BCpENcAPZpnUA2HQ3%2BO9Z%2FJbiRC49mk3wsF1quBIAiPfxvdlvDLiWUS7v8&X-Amz-Signature=3bb32ed14a2ffbcdf41ee1ad2cff26db3981cfb90592b06aa373c3eaeb31e5c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIAJ5UJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHSQab4mCoDbN2EkjUmpwOFw7p3C%2BVk5Exe3%2Fqo6ygTHAiAXgGHnm9%2FAQOAmtuATpHLIpI6AS96LLoDy9dlEUFaoByr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMRqRsK2z0N8DQY%2BADKtwDYCRm%2FokbXecGmfISex9hQ1xdXceglRajFkik%2FalNIdl92DuCTdI6FjWJuoc7duZReNVzRdI6ObCzo48Bby9ACIUCT8wfaOq5wWCUXETfkM408bzGcQN0QtM%2BnuzoZZW2iIRN%2Bemqqjgqts420BdcKQLGPmOfCnZMFFwXXICHQwMPLOA6%2BKkXvKPh3ppdNjvvMxYQdTeQR2qqZV73LXjejoNwf%2FfkJTyDXZHgAbAb7e5yijq1yU3906xTD7n%2Fv3t6fFFT3EIG99uyNaA99H2MenFaSrRX2zu5mmesPVZjx0Voh0fIw8TTFQvVFIBSpAWOtelyzDBe4swnB5YBrs6iBs8GzXigkCtQTjczLq71hbjXR3qkwLl%2FDn2WYZCvYotOeir8QJPzM7sSW0sGLaXXwl1T%2FQ%2BFrno9LTGaq3%2BvrEiAWNxY%2Fk6gskZY%2FlEef2vvExUj5xHuJ3CmO1BjHLq%2FA81IfdpIPSe8Xr5aO5PEbwRFprGwmCmqVxVUrxfdCi74hNqC%2F1wr59FCIotd250x0si3opcXfjg2uAnsE2lLxeC38geEDjS71z9zr2pwLYti3PaaJ94KW6LeEyxuX7pSyHiZwxdumsu2Ubj%2FjP7uc3fR5e7VjM%2FbdsCLA9Iw08aYvQY6pgGGmhyU32J44etq%2BZwmlpxt7zM7vn71c70O%2BSPFVuHuKX5QTu2T7fwVJwXWSy%2FdtBpNavCmztl8yLY40RMj7Vv795RyssWr6y8teHLCBlwZbRDnxrAqjOnaeCs1kCVQ4uSA7aXHX8oSc%2Fx%2FKlTRWlU5ivKq%2F4A%2BtfHLTz%2BCpENcAPZpnUA2HQ3%2BO9Z%2FJbiRC49mk3wsF1quBIAiPfxvdlvDLiWUS7v8&X-Amz-Signature=b0740007bd9e783532ca9b3b18c940c83b539e5e42d5e7d5a109c105edd3c261&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
