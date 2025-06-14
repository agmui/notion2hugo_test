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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWNTTBJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGGsWOklGeKd968gbeQTFP%2BJMKfn9QecDthtSGs%2B35s4AiA1K6BRF8PN8Rp012YAcxcxfZrLxe%2FPAXuO7UKMqUJQWCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMiFebDLI4oZVbVkEtKtwDbrX6iYxytbQyQRRUPddbqeVAEroXDfAHPzV%2BcUgSmTq8wvYgHA9JJEWY%2Fo3zUlj6cAdEONOfAZp8g1ukddIA1y7twNjxLfmmpvHXdkYtR%2FL0hLRSpeV7G8AnJ8jrupUuQmunIFjCE1Kpobr1L%2FHYduBgu8kPqrrz8xr2dxTcr832o%2F%2BUgB7s7raXV5muOrihi02V4Imv2bWeYVaoFjRhva0stm3OdDpKxDEISstdDsKL5PDvL2bAZned9pXTtF8xrklB1cBd%2F8L47UmlbE119QrKSysMelcObcNlSGkYzQbGyn1GCmqVEKizPp5a77I%2BWMRjnMvH5keqBIqLSE5PRC%2BnDuv23FKrm5d4C8Rg%2FHN0%2FjNBCWXTf7dnZb0xo%2FIIjQzvn1%2F2%2Bg4%2FyMy0TftjaA06r4hTE3MRT9KdeHX6wCB5tZV09WzNF5jRVuhJWV6NR1QaEk2Z2Bvtb8JedCE2u3lUlBWJHsrFBKGOVmpNZkpxNDPDw6gAkd7M6nDdulPvthYWrwddWllo0QzsjcUcsDO%2BaA7gofK7I9eZkn%2B0axAh%2BkzuNUmKhmVjH5kVcbxlTTlAy2WEimzvqOJX3AZ9qd0xgckt%2Fp67oJj6HkNnhAH2MfgV3AOwzROAEXEwybq2wgY6pgGTvV%2BTE%2FviNHChr9WrlvU1EDJA9OmWIi86R5OB%2FBDpNOpEwzz%2FLkGkkuMnMU4L%2F9yynKDODjPGTWmYr15LYsFsVfmAvrIpqIpDGq5nd5C%2BiZq1XmvCgIM%2BrTz%2B8QKadWRHt2Zn%2F3mG54xRb025CZ0%2FTADyRlgDnfUyuyYMzZPV6AsVjRtgSvXrRGLTw5enHhsk1y3UnXBfFEl7HGECzNMDFHWsiUvI&X-Amz-Signature=dd0bffb8da5b083fb180c1e2fadc2b87ad763ddd00679f1dab6fa4472a5ae6b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWNTTBJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGGsWOklGeKd968gbeQTFP%2BJMKfn9QecDthtSGs%2B35s4AiA1K6BRF8PN8Rp012YAcxcxfZrLxe%2FPAXuO7UKMqUJQWCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMiFebDLI4oZVbVkEtKtwDbrX6iYxytbQyQRRUPddbqeVAEroXDfAHPzV%2BcUgSmTq8wvYgHA9JJEWY%2Fo3zUlj6cAdEONOfAZp8g1ukddIA1y7twNjxLfmmpvHXdkYtR%2FL0hLRSpeV7G8AnJ8jrupUuQmunIFjCE1Kpobr1L%2FHYduBgu8kPqrrz8xr2dxTcr832o%2F%2BUgB7s7raXV5muOrihi02V4Imv2bWeYVaoFjRhva0stm3OdDpKxDEISstdDsKL5PDvL2bAZned9pXTtF8xrklB1cBd%2F8L47UmlbE119QrKSysMelcObcNlSGkYzQbGyn1GCmqVEKizPp5a77I%2BWMRjnMvH5keqBIqLSE5PRC%2BnDuv23FKrm5d4C8Rg%2FHN0%2FjNBCWXTf7dnZb0xo%2FIIjQzvn1%2F2%2Bg4%2FyMy0TftjaA06r4hTE3MRT9KdeHX6wCB5tZV09WzNF5jRVuhJWV6NR1QaEk2Z2Bvtb8JedCE2u3lUlBWJHsrFBKGOVmpNZkpxNDPDw6gAkd7M6nDdulPvthYWrwddWllo0QzsjcUcsDO%2BaA7gofK7I9eZkn%2B0axAh%2BkzuNUmKhmVjH5kVcbxlTTlAy2WEimzvqOJX3AZ9qd0xgckt%2Fp67oJj6HkNnhAH2MfgV3AOwzROAEXEwybq2wgY6pgGTvV%2BTE%2FviNHChr9WrlvU1EDJA9OmWIi86R5OB%2FBDpNOpEwzz%2FLkGkkuMnMU4L%2F9yynKDODjPGTWmYr15LYsFsVfmAvrIpqIpDGq5nd5C%2BiZq1XmvCgIM%2BrTz%2B8QKadWRHt2Zn%2F3mG54xRb025CZ0%2FTADyRlgDnfUyuyYMzZPV6AsVjRtgSvXrRGLTw5enHhsk1y3UnXBfFEl7HGECzNMDFHWsiUvI&X-Amz-Signature=85746c7edb6f8fd891e589d4d1da1133ee537e9bdb3fc7f63e7894d0fef86142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWNTTBJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGGsWOklGeKd968gbeQTFP%2BJMKfn9QecDthtSGs%2B35s4AiA1K6BRF8PN8Rp012YAcxcxfZrLxe%2FPAXuO7UKMqUJQWCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMiFebDLI4oZVbVkEtKtwDbrX6iYxytbQyQRRUPddbqeVAEroXDfAHPzV%2BcUgSmTq8wvYgHA9JJEWY%2Fo3zUlj6cAdEONOfAZp8g1ukddIA1y7twNjxLfmmpvHXdkYtR%2FL0hLRSpeV7G8AnJ8jrupUuQmunIFjCE1Kpobr1L%2FHYduBgu8kPqrrz8xr2dxTcr832o%2F%2BUgB7s7raXV5muOrihi02V4Imv2bWeYVaoFjRhva0stm3OdDpKxDEISstdDsKL5PDvL2bAZned9pXTtF8xrklB1cBd%2F8L47UmlbE119QrKSysMelcObcNlSGkYzQbGyn1GCmqVEKizPp5a77I%2BWMRjnMvH5keqBIqLSE5PRC%2BnDuv23FKrm5d4C8Rg%2FHN0%2FjNBCWXTf7dnZb0xo%2FIIjQzvn1%2F2%2Bg4%2FyMy0TftjaA06r4hTE3MRT9KdeHX6wCB5tZV09WzNF5jRVuhJWV6NR1QaEk2Z2Bvtb8JedCE2u3lUlBWJHsrFBKGOVmpNZkpxNDPDw6gAkd7M6nDdulPvthYWrwddWllo0QzsjcUcsDO%2BaA7gofK7I9eZkn%2B0axAh%2BkzuNUmKhmVjH5kVcbxlTTlAy2WEimzvqOJX3AZ9qd0xgckt%2Fp67oJj6HkNnhAH2MfgV3AOwzROAEXEwybq2wgY6pgGTvV%2BTE%2FviNHChr9WrlvU1EDJA9OmWIi86R5OB%2FBDpNOpEwzz%2FLkGkkuMnMU4L%2F9yynKDODjPGTWmYr15LYsFsVfmAvrIpqIpDGq5nd5C%2BiZq1XmvCgIM%2BrTz%2B8QKadWRHt2Zn%2F3mG54xRb025CZ0%2FTADyRlgDnfUyuyYMzZPV6AsVjRtgSvXrRGLTw5enHhsk1y3UnXBfFEl7HGECzNMDFHWsiUvI&X-Amz-Signature=5fd84c01ba32859d6551572702fb9df3e0c54d55b44ebc7b8ba5343fb144f863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWNTTBJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGGsWOklGeKd968gbeQTFP%2BJMKfn9QecDthtSGs%2B35s4AiA1K6BRF8PN8Rp012YAcxcxfZrLxe%2FPAXuO7UKMqUJQWCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMiFebDLI4oZVbVkEtKtwDbrX6iYxytbQyQRRUPddbqeVAEroXDfAHPzV%2BcUgSmTq8wvYgHA9JJEWY%2Fo3zUlj6cAdEONOfAZp8g1ukddIA1y7twNjxLfmmpvHXdkYtR%2FL0hLRSpeV7G8AnJ8jrupUuQmunIFjCE1Kpobr1L%2FHYduBgu8kPqrrz8xr2dxTcr832o%2F%2BUgB7s7raXV5muOrihi02V4Imv2bWeYVaoFjRhva0stm3OdDpKxDEISstdDsKL5PDvL2bAZned9pXTtF8xrklB1cBd%2F8L47UmlbE119QrKSysMelcObcNlSGkYzQbGyn1GCmqVEKizPp5a77I%2BWMRjnMvH5keqBIqLSE5PRC%2BnDuv23FKrm5d4C8Rg%2FHN0%2FjNBCWXTf7dnZb0xo%2FIIjQzvn1%2F2%2Bg4%2FyMy0TftjaA06r4hTE3MRT9KdeHX6wCB5tZV09WzNF5jRVuhJWV6NR1QaEk2Z2Bvtb8JedCE2u3lUlBWJHsrFBKGOVmpNZkpxNDPDw6gAkd7M6nDdulPvthYWrwddWllo0QzsjcUcsDO%2BaA7gofK7I9eZkn%2B0axAh%2BkzuNUmKhmVjH5kVcbxlTTlAy2WEimzvqOJX3AZ9qd0xgckt%2Fp67oJj6HkNnhAH2MfgV3AOwzROAEXEwybq2wgY6pgGTvV%2BTE%2FviNHChr9WrlvU1EDJA9OmWIi86R5OB%2FBDpNOpEwzz%2FLkGkkuMnMU4L%2F9yynKDODjPGTWmYr15LYsFsVfmAvrIpqIpDGq5nd5C%2BiZq1XmvCgIM%2BrTz%2B8QKadWRHt2Zn%2F3mG54xRb025CZ0%2FTADyRlgDnfUyuyYMzZPV6AsVjRtgSvXrRGLTw5enHhsk1y3UnXBfFEl7HGECzNMDFHWsiUvI&X-Amz-Signature=f7b30bec72c3c03e1d6350898bda6025a30c4892edb42147612a6dcc3b440f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWNTTBJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGGsWOklGeKd968gbeQTFP%2BJMKfn9QecDthtSGs%2B35s4AiA1K6BRF8PN8Rp012YAcxcxfZrLxe%2FPAXuO7UKMqUJQWCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMiFebDLI4oZVbVkEtKtwDbrX6iYxytbQyQRRUPddbqeVAEroXDfAHPzV%2BcUgSmTq8wvYgHA9JJEWY%2Fo3zUlj6cAdEONOfAZp8g1ukddIA1y7twNjxLfmmpvHXdkYtR%2FL0hLRSpeV7G8AnJ8jrupUuQmunIFjCE1Kpobr1L%2FHYduBgu8kPqrrz8xr2dxTcr832o%2F%2BUgB7s7raXV5muOrihi02V4Imv2bWeYVaoFjRhva0stm3OdDpKxDEISstdDsKL5PDvL2bAZned9pXTtF8xrklB1cBd%2F8L47UmlbE119QrKSysMelcObcNlSGkYzQbGyn1GCmqVEKizPp5a77I%2BWMRjnMvH5keqBIqLSE5PRC%2BnDuv23FKrm5d4C8Rg%2FHN0%2FjNBCWXTf7dnZb0xo%2FIIjQzvn1%2F2%2Bg4%2FyMy0TftjaA06r4hTE3MRT9KdeHX6wCB5tZV09WzNF5jRVuhJWV6NR1QaEk2Z2Bvtb8JedCE2u3lUlBWJHsrFBKGOVmpNZkpxNDPDw6gAkd7M6nDdulPvthYWrwddWllo0QzsjcUcsDO%2BaA7gofK7I9eZkn%2B0axAh%2BkzuNUmKhmVjH5kVcbxlTTlAy2WEimzvqOJX3AZ9qd0xgckt%2Fp67oJj6HkNnhAH2MfgV3AOwzROAEXEwybq2wgY6pgGTvV%2BTE%2FviNHChr9WrlvU1EDJA9OmWIi86R5OB%2FBDpNOpEwzz%2FLkGkkuMnMU4L%2F9yynKDODjPGTWmYr15LYsFsVfmAvrIpqIpDGq5nd5C%2BiZq1XmvCgIM%2BrTz%2B8QKadWRHt2Zn%2F3mG54xRb025CZ0%2FTADyRlgDnfUyuyYMzZPV6AsVjRtgSvXrRGLTw5enHhsk1y3UnXBfFEl7HGECzNMDFHWsiUvI&X-Amz-Signature=e843eb47104dfaadf5a70f89617bc932502869af1049a4eaad2747dc30d80d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
