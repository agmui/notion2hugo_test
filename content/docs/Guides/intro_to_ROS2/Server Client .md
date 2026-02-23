---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGUF4WS%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDZREWVUl8Ru1Z%2BSt4360w7bc9SM8AvpTbdYHaLpl2RTwIhAKusE06OppGnNW3H4I2wcn%2Fcr6LPFK1Fh0rfd32WPaprKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGLroCKW%2BxmqgMeFEq3AMcd95YCvj8ZDV7UdCJm2jjbczN5MR5%2BrhF0BG8uUNzziDKK02QDdzK2VynBK5D7ItXiA5N51ivJoX%2BYKrBDAhjwk%2BRPECd6U%2F5St1OqD9AUwAIQjqiNXkJkHSfqO2XKuSYPhEGR0DsgAfUtM9G7EkyiFjKPIov42Kl49m8wirAsLsA7KxfIli%2B6i86pvKPsOXogJOXLjXMQJG0yROnb7WrrnU3l6x8gQBTgAR2noiJNu5xvAnlQM%2Bla5emikflokZHANY4IIe2%2B8LhZ1Fh8I432nqnNpp4ndoZZbXvw6VZZkwGRkzg3hBtQkQzaQkj0j1Yf4nwA2pWnADEYvpi%2BiJpQpQyTqzvyidUWWKOAGiCDLeekgo6%2FQWocA%2FExc3IOe4Nr6YXdxa93JN6wlfxDT7q9LuDkUSPm1aMpDOIQ7UXg98cdKRMvt3pNF2q3ujN6U2p19k0TcBAvLoY%2FwBGcPMHb6TYqN56o%2BPn5fRUaoe2N8As8w1mMxXvOx7tuUbrsCuI9h3DB%2Bt%2BBTNy%2Bwn%2FfaFhzuP%2BHsEYtoBqi81fwbswXYPPONiOimwxbCJUlswbukgBLCVi2O28HcSC6tN9ndBbxp6vOYTvDzb9H0RttWFaXyNVUgPLdk9yfk2tcjDd6%2B7MBjqkAWmYiqPI4QnbIrWlEg1%2BTE%2FCUZ%2B0oKnLe0Dp62efAP6DR5EB57ahMhIEWMa0GftpgFK7FE0VXkIDd1BM7Fp5vTKGpsjIqJaOVJwoA4OQZsfPfX8xgXsRog%2FjnuTEauYT%2Bv1u%2BzBCfURtbDPXFn1y4yIyMeS1ETsDcA5WSfy6go04ZaPsu8Q3cChl%2FTahyjX8jW%2FHPKrun2T0T0A5eLUswMKOh08H&X-Amz-Signature=8a7da39cd2f27beb2ff21bf7ced0a0677878e5b665801f6bf775d6c266481069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGUF4WS%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDZREWVUl8Ru1Z%2BSt4360w7bc9SM8AvpTbdYHaLpl2RTwIhAKusE06OppGnNW3H4I2wcn%2Fcr6LPFK1Fh0rfd32WPaprKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGLroCKW%2BxmqgMeFEq3AMcd95YCvj8ZDV7UdCJm2jjbczN5MR5%2BrhF0BG8uUNzziDKK02QDdzK2VynBK5D7ItXiA5N51ivJoX%2BYKrBDAhjwk%2BRPECd6U%2F5St1OqD9AUwAIQjqiNXkJkHSfqO2XKuSYPhEGR0DsgAfUtM9G7EkyiFjKPIov42Kl49m8wirAsLsA7KxfIli%2B6i86pvKPsOXogJOXLjXMQJG0yROnb7WrrnU3l6x8gQBTgAR2noiJNu5xvAnlQM%2Bla5emikflokZHANY4IIe2%2B8LhZ1Fh8I432nqnNpp4ndoZZbXvw6VZZkwGRkzg3hBtQkQzaQkj0j1Yf4nwA2pWnADEYvpi%2BiJpQpQyTqzvyidUWWKOAGiCDLeekgo6%2FQWocA%2FExc3IOe4Nr6YXdxa93JN6wlfxDT7q9LuDkUSPm1aMpDOIQ7UXg98cdKRMvt3pNF2q3ujN6U2p19k0TcBAvLoY%2FwBGcPMHb6TYqN56o%2BPn5fRUaoe2N8As8w1mMxXvOx7tuUbrsCuI9h3DB%2Bt%2BBTNy%2Bwn%2FfaFhzuP%2BHsEYtoBqi81fwbswXYPPONiOimwxbCJUlswbukgBLCVi2O28HcSC6tN9ndBbxp6vOYTvDzb9H0RttWFaXyNVUgPLdk9yfk2tcjDd6%2B7MBjqkAWmYiqPI4QnbIrWlEg1%2BTE%2FCUZ%2B0oKnLe0Dp62efAP6DR5EB57ahMhIEWMa0GftpgFK7FE0VXkIDd1BM7Fp5vTKGpsjIqJaOVJwoA4OQZsfPfX8xgXsRog%2FjnuTEauYT%2Bv1u%2BzBCfURtbDPXFn1y4yIyMeS1ETsDcA5WSfy6go04ZaPsu8Q3cChl%2FTahyjX8jW%2FHPKrun2T0T0A5eLUswMKOh08H&X-Amz-Signature=e96cbf18efa45acbc9f8b2b22dae3cc7de29d68a810c9f2296044dce909d9068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGUF4WS%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDZREWVUl8Ru1Z%2BSt4360w7bc9SM8AvpTbdYHaLpl2RTwIhAKusE06OppGnNW3H4I2wcn%2Fcr6LPFK1Fh0rfd32WPaprKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGLroCKW%2BxmqgMeFEq3AMcd95YCvj8ZDV7UdCJm2jjbczN5MR5%2BrhF0BG8uUNzziDKK02QDdzK2VynBK5D7ItXiA5N51ivJoX%2BYKrBDAhjwk%2BRPECd6U%2F5St1OqD9AUwAIQjqiNXkJkHSfqO2XKuSYPhEGR0DsgAfUtM9G7EkyiFjKPIov42Kl49m8wirAsLsA7KxfIli%2B6i86pvKPsOXogJOXLjXMQJG0yROnb7WrrnU3l6x8gQBTgAR2noiJNu5xvAnlQM%2Bla5emikflokZHANY4IIe2%2B8LhZ1Fh8I432nqnNpp4ndoZZbXvw6VZZkwGRkzg3hBtQkQzaQkj0j1Yf4nwA2pWnADEYvpi%2BiJpQpQyTqzvyidUWWKOAGiCDLeekgo6%2FQWocA%2FExc3IOe4Nr6YXdxa93JN6wlfxDT7q9LuDkUSPm1aMpDOIQ7UXg98cdKRMvt3pNF2q3ujN6U2p19k0TcBAvLoY%2FwBGcPMHb6TYqN56o%2BPn5fRUaoe2N8As8w1mMxXvOx7tuUbrsCuI9h3DB%2Bt%2BBTNy%2Bwn%2FfaFhzuP%2BHsEYtoBqi81fwbswXYPPONiOimwxbCJUlswbukgBLCVi2O28HcSC6tN9ndBbxp6vOYTvDzb9H0RttWFaXyNVUgPLdk9yfk2tcjDd6%2B7MBjqkAWmYiqPI4QnbIrWlEg1%2BTE%2FCUZ%2B0oKnLe0Dp62efAP6DR5EB57ahMhIEWMa0GftpgFK7FE0VXkIDd1BM7Fp5vTKGpsjIqJaOVJwoA4OQZsfPfX8xgXsRog%2FjnuTEauYT%2Bv1u%2BzBCfURtbDPXFn1y4yIyMeS1ETsDcA5WSfy6go04ZaPsu8Q3cChl%2FTahyjX8jW%2FHPKrun2T0T0A5eLUswMKOh08H&X-Amz-Signature=10dda1b5c8e425437a9da36f067c5937e4708d50fb8cafc5e8a8b914c2130082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGUF4WS%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDZREWVUl8Ru1Z%2BSt4360w7bc9SM8AvpTbdYHaLpl2RTwIhAKusE06OppGnNW3H4I2wcn%2Fcr6LPFK1Fh0rfd32WPaprKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGLroCKW%2BxmqgMeFEq3AMcd95YCvj8ZDV7UdCJm2jjbczN5MR5%2BrhF0BG8uUNzziDKK02QDdzK2VynBK5D7ItXiA5N51ivJoX%2BYKrBDAhjwk%2BRPECd6U%2F5St1OqD9AUwAIQjqiNXkJkHSfqO2XKuSYPhEGR0DsgAfUtM9G7EkyiFjKPIov42Kl49m8wirAsLsA7KxfIli%2B6i86pvKPsOXogJOXLjXMQJG0yROnb7WrrnU3l6x8gQBTgAR2noiJNu5xvAnlQM%2Bla5emikflokZHANY4IIe2%2B8LhZ1Fh8I432nqnNpp4ndoZZbXvw6VZZkwGRkzg3hBtQkQzaQkj0j1Yf4nwA2pWnADEYvpi%2BiJpQpQyTqzvyidUWWKOAGiCDLeekgo6%2FQWocA%2FExc3IOe4Nr6YXdxa93JN6wlfxDT7q9LuDkUSPm1aMpDOIQ7UXg98cdKRMvt3pNF2q3ujN6U2p19k0TcBAvLoY%2FwBGcPMHb6TYqN56o%2BPn5fRUaoe2N8As8w1mMxXvOx7tuUbrsCuI9h3DB%2Bt%2BBTNy%2Bwn%2FfaFhzuP%2BHsEYtoBqi81fwbswXYPPONiOimwxbCJUlswbukgBLCVi2O28HcSC6tN9ndBbxp6vOYTvDzb9H0RttWFaXyNVUgPLdk9yfk2tcjDd6%2B7MBjqkAWmYiqPI4QnbIrWlEg1%2BTE%2FCUZ%2B0oKnLe0Dp62efAP6DR5EB57ahMhIEWMa0GftpgFK7FE0VXkIDd1BM7Fp5vTKGpsjIqJaOVJwoA4OQZsfPfX8xgXsRog%2FjnuTEauYT%2Bv1u%2BzBCfURtbDPXFn1y4yIyMeS1ETsDcA5WSfy6go04ZaPsu8Q3cChl%2FTahyjX8jW%2FHPKrun2T0T0A5eLUswMKOh08H&X-Amz-Signature=5519c5e1510004688a1fe03c007e3c84b3c0a3b5b67337ea8e2c6658107ec880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGUF4WS%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDZREWVUl8Ru1Z%2BSt4360w7bc9SM8AvpTbdYHaLpl2RTwIhAKusE06OppGnNW3H4I2wcn%2Fcr6LPFK1Fh0rfd32WPaprKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGLroCKW%2BxmqgMeFEq3AMcd95YCvj8ZDV7UdCJm2jjbczN5MR5%2BrhF0BG8uUNzziDKK02QDdzK2VynBK5D7ItXiA5N51ivJoX%2BYKrBDAhjwk%2BRPECd6U%2F5St1OqD9AUwAIQjqiNXkJkHSfqO2XKuSYPhEGR0DsgAfUtM9G7EkyiFjKPIov42Kl49m8wirAsLsA7KxfIli%2B6i86pvKPsOXogJOXLjXMQJG0yROnb7WrrnU3l6x8gQBTgAR2noiJNu5xvAnlQM%2Bla5emikflokZHANY4IIe2%2B8LhZ1Fh8I432nqnNpp4ndoZZbXvw6VZZkwGRkzg3hBtQkQzaQkj0j1Yf4nwA2pWnADEYvpi%2BiJpQpQyTqzvyidUWWKOAGiCDLeekgo6%2FQWocA%2FExc3IOe4Nr6YXdxa93JN6wlfxDT7q9LuDkUSPm1aMpDOIQ7UXg98cdKRMvt3pNF2q3ujN6U2p19k0TcBAvLoY%2FwBGcPMHb6TYqN56o%2BPn5fRUaoe2N8As8w1mMxXvOx7tuUbrsCuI9h3DB%2Bt%2BBTNy%2Bwn%2FfaFhzuP%2BHsEYtoBqi81fwbswXYPPONiOimwxbCJUlswbukgBLCVi2O28HcSC6tN9ndBbxp6vOYTvDzb9H0RttWFaXyNVUgPLdk9yfk2tcjDd6%2B7MBjqkAWmYiqPI4QnbIrWlEg1%2BTE%2FCUZ%2B0oKnLe0Dp62efAP6DR5EB57ahMhIEWMa0GftpgFK7FE0VXkIDd1BM7Fp5vTKGpsjIqJaOVJwoA4OQZsfPfX8xgXsRog%2FjnuTEauYT%2Bv1u%2BzBCfURtbDPXFn1y4yIyMeS1ETsDcA5WSfy6go04ZaPsu8Q3cChl%2FTahyjX8jW%2FHPKrun2T0T0A5eLUswMKOh08H&X-Amz-Signature=064e274c302667dcb5dc61159b2c8445f8e105a6a45bbdec98f941de6e62da2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
