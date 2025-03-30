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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6RRNIS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC59JDtgLnrd8lBzNKKM9EBr%2Bux3pz3qLn54BTMn2NlagIgUUCNkFiMy6KGBsh9c2KViT1PX72y68DUARHVpkK%2Fy1QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0QZbh4i1MzJgzucCrcA9QTHtQ8S5f%2BasgFnLFSuv99IfNqI10uX2bMg0b6bjxcRRtAcRbMEcrfMeHj5Zw0JZqmjducjfSZOb0LcGnB2kKjvQpoDMOxUJzE3T8Prm8Db4savV%2B3mracK6Kw%2FcrrOlhOXkSTpn7pnpqMTBfD87sxD%2FJQzS%2BAC5bhBpEjrJApRXNsdi%2BCAJd%2BnIxHwJ8IigVFsdTEDCrc2w8%2FdO1x9BPfbaBLMzVBAXJWcx39%2FMzBPWH8T6mKgyZisMEKmC0Kywi5%2BedH2R3Mw3FEPKuip%2FAKAzWgg68pPaJnT%2BJZD7TovNptguerOXTEpIyCE2I6QyOU1Cc64YEcw%2B9dr3SZpS0Nyb%2FRxdgaWM9Y6xYQnRhLfF57Mf3QFRgIdPJ0qIeQc%2BgBVLxD6oBd045AFGS8QrxcmikxnsXOX5uaH1%2FM5Iq3X2KBXTAPjUW994reKnLOJuXOmeG9%2BHZRdNnLG8oO68FEqlRVcUPZM7eJyGwPUCcmPGvdpNnpXyfjVap8bPCF7QWLYF574Z0PHiQmrVmtRHY2iaQ7hchtGhazkU9TiiVssYF0jgbdsmvffDNNvREEr4OPid91mXQCFquQQGId8NcN76JN2OcdGq3tfNfUggy5GDk1c5rp6GWm3E7eMJ%2FYpr8GOqUBMaXoXVl%2FUbJB80V%2FvrU26b9rCY1p%2FuFi6PIcNGpmcqs5ikaZgeqvu6CsMoThg7m12cO6pccKYjvhfbtiwdVIySLm0yR%2FtjF%2FMqsyH40FH9QTx%2F%2B5NGiKmdIvofLLixzpaQBtaFPVUo6iLOJ1MdopfsUWwXdcl3XRFs1NRejz0eDnnfXmnw3fdOgu0Xo9apGAmTggySQhq4pQ7JAHzOKIzJ8T9HK3&X-Amz-Signature=926e4aee9585b729a53af141a47ae4baabe3e33e2c8f77892504d617ccc11244&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6RRNIS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC59JDtgLnrd8lBzNKKM9EBr%2Bux3pz3qLn54BTMn2NlagIgUUCNkFiMy6KGBsh9c2KViT1PX72y68DUARHVpkK%2Fy1QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0QZbh4i1MzJgzucCrcA9QTHtQ8S5f%2BasgFnLFSuv99IfNqI10uX2bMg0b6bjxcRRtAcRbMEcrfMeHj5Zw0JZqmjducjfSZOb0LcGnB2kKjvQpoDMOxUJzE3T8Prm8Db4savV%2B3mracK6Kw%2FcrrOlhOXkSTpn7pnpqMTBfD87sxD%2FJQzS%2BAC5bhBpEjrJApRXNsdi%2BCAJd%2BnIxHwJ8IigVFsdTEDCrc2w8%2FdO1x9BPfbaBLMzVBAXJWcx39%2FMzBPWH8T6mKgyZisMEKmC0Kywi5%2BedH2R3Mw3FEPKuip%2FAKAzWgg68pPaJnT%2BJZD7TovNptguerOXTEpIyCE2I6QyOU1Cc64YEcw%2B9dr3SZpS0Nyb%2FRxdgaWM9Y6xYQnRhLfF57Mf3QFRgIdPJ0qIeQc%2BgBVLxD6oBd045AFGS8QrxcmikxnsXOX5uaH1%2FM5Iq3X2KBXTAPjUW994reKnLOJuXOmeG9%2BHZRdNnLG8oO68FEqlRVcUPZM7eJyGwPUCcmPGvdpNnpXyfjVap8bPCF7QWLYF574Z0PHiQmrVmtRHY2iaQ7hchtGhazkU9TiiVssYF0jgbdsmvffDNNvREEr4OPid91mXQCFquQQGId8NcN76JN2OcdGq3tfNfUggy5GDk1c5rp6GWm3E7eMJ%2FYpr8GOqUBMaXoXVl%2FUbJB80V%2FvrU26b9rCY1p%2FuFi6PIcNGpmcqs5ikaZgeqvu6CsMoThg7m12cO6pccKYjvhfbtiwdVIySLm0yR%2FtjF%2FMqsyH40FH9QTx%2F%2B5NGiKmdIvofLLixzpaQBtaFPVUo6iLOJ1MdopfsUWwXdcl3XRFs1NRejz0eDnnfXmnw3fdOgu0Xo9apGAmTggySQhq4pQ7JAHzOKIzJ8T9HK3&X-Amz-Signature=f663c9238507f06f4c66769b5ee3dcf3fe8499cae3fcb94d4bdf02f49e6f183f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6RRNIS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC59JDtgLnrd8lBzNKKM9EBr%2Bux3pz3qLn54BTMn2NlagIgUUCNkFiMy6KGBsh9c2KViT1PX72y68DUARHVpkK%2Fy1QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0QZbh4i1MzJgzucCrcA9QTHtQ8S5f%2BasgFnLFSuv99IfNqI10uX2bMg0b6bjxcRRtAcRbMEcrfMeHj5Zw0JZqmjducjfSZOb0LcGnB2kKjvQpoDMOxUJzE3T8Prm8Db4savV%2B3mracK6Kw%2FcrrOlhOXkSTpn7pnpqMTBfD87sxD%2FJQzS%2BAC5bhBpEjrJApRXNsdi%2BCAJd%2BnIxHwJ8IigVFsdTEDCrc2w8%2FdO1x9BPfbaBLMzVBAXJWcx39%2FMzBPWH8T6mKgyZisMEKmC0Kywi5%2BedH2R3Mw3FEPKuip%2FAKAzWgg68pPaJnT%2BJZD7TovNptguerOXTEpIyCE2I6QyOU1Cc64YEcw%2B9dr3SZpS0Nyb%2FRxdgaWM9Y6xYQnRhLfF57Mf3QFRgIdPJ0qIeQc%2BgBVLxD6oBd045AFGS8QrxcmikxnsXOX5uaH1%2FM5Iq3X2KBXTAPjUW994reKnLOJuXOmeG9%2BHZRdNnLG8oO68FEqlRVcUPZM7eJyGwPUCcmPGvdpNnpXyfjVap8bPCF7QWLYF574Z0PHiQmrVmtRHY2iaQ7hchtGhazkU9TiiVssYF0jgbdsmvffDNNvREEr4OPid91mXQCFquQQGId8NcN76JN2OcdGq3tfNfUggy5GDk1c5rp6GWm3E7eMJ%2FYpr8GOqUBMaXoXVl%2FUbJB80V%2FvrU26b9rCY1p%2FuFi6PIcNGpmcqs5ikaZgeqvu6CsMoThg7m12cO6pccKYjvhfbtiwdVIySLm0yR%2FtjF%2FMqsyH40FH9QTx%2F%2B5NGiKmdIvofLLixzpaQBtaFPVUo6iLOJ1MdopfsUWwXdcl3XRFs1NRejz0eDnnfXmnw3fdOgu0Xo9apGAmTggySQhq4pQ7JAHzOKIzJ8T9HK3&X-Amz-Signature=282c11231bb1944d2562b1fc54d6cec9021c913bcb9088238f10aaacde4893e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6RRNIS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC59JDtgLnrd8lBzNKKM9EBr%2Bux3pz3qLn54BTMn2NlagIgUUCNkFiMy6KGBsh9c2KViT1PX72y68DUARHVpkK%2Fy1QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0QZbh4i1MzJgzucCrcA9QTHtQ8S5f%2BasgFnLFSuv99IfNqI10uX2bMg0b6bjxcRRtAcRbMEcrfMeHj5Zw0JZqmjducjfSZOb0LcGnB2kKjvQpoDMOxUJzE3T8Prm8Db4savV%2B3mracK6Kw%2FcrrOlhOXkSTpn7pnpqMTBfD87sxD%2FJQzS%2BAC5bhBpEjrJApRXNsdi%2BCAJd%2BnIxHwJ8IigVFsdTEDCrc2w8%2FdO1x9BPfbaBLMzVBAXJWcx39%2FMzBPWH8T6mKgyZisMEKmC0Kywi5%2BedH2R3Mw3FEPKuip%2FAKAzWgg68pPaJnT%2BJZD7TovNptguerOXTEpIyCE2I6QyOU1Cc64YEcw%2B9dr3SZpS0Nyb%2FRxdgaWM9Y6xYQnRhLfF57Mf3QFRgIdPJ0qIeQc%2BgBVLxD6oBd045AFGS8QrxcmikxnsXOX5uaH1%2FM5Iq3X2KBXTAPjUW994reKnLOJuXOmeG9%2BHZRdNnLG8oO68FEqlRVcUPZM7eJyGwPUCcmPGvdpNnpXyfjVap8bPCF7QWLYF574Z0PHiQmrVmtRHY2iaQ7hchtGhazkU9TiiVssYF0jgbdsmvffDNNvREEr4OPid91mXQCFquQQGId8NcN76JN2OcdGq3tfNfUggy5GDk1c5rp6GWm3E7eMJ%2FYpr8GOqUBMaXoXVl%2FUbJB80V%2FvrU26b9rCY1p%2FuFi6PIcNGpmcqs5ikaZgeqvu6CsMoThg7m12cO6pccKYjvhfbtiwdVIySLm0yR%2FtjF%2FMqsyH40FH9QTx%2F%2B5NGiKmdIvofLLixzpaQBtaFPVUo6iLOJ1MdopfsUWwXdcl3XRFs1NRejz0eDnnfXmnw3fdOgu0Xo9apGAmTggySQhq4pQ7JAHzOKIzJ8T9HK3&X-Amz-Signature=b48181de9a06b1938c9d8d42792c0cf6aead9a378cbe19afdfbc35cac288cb19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6RRNIS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC59JDtgLnrd8lBzNKKM9EBr%2Bux3pz3qLn54BTMn2NlagIgUUCNkFiMy6KGBsh9c2KViT1PX72y68DUARHVpkK%2Fy1QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0QZbh4i1MzJgzucCrcA9QTHtQ8S5f%2BasgFnLFSuv99IfNqI10uX2bMg0b6bjxcRRtAcRbMEcrfMeHj5Zw0JZqmjducjfSZOb0LcGnB2kKjvQpoDMOxUJzE3T8Prm8Db4savV%2B3mracK6Kw%2FcrrOlhOXkSTpn7pnpqMTBfD87sxD%2FJQzS%2BAC5bhBpEjrJApRXNsdi%2BCAJd%2BnIxHwJ8IigVFsdTEDCrc2w8%2FdO1x9BPfbaBLMzVBAXJWcx39%2FMzBPWH8T6mKgyZisMEKmC0Kywi5%2BedH2R3Mw3FEPKuip%2FAKAzWgg68pPaJnT%2BJZD7TovNptguerOXTEpIyCE2I6QyOU1Cc64YEcw%2B9dr3SZpS0Nyb%2FRxdgaWM9Y6xYQnRhLfF57Mf3QFRgIdPJ0qIeQc%2BgBVLxD6oBd045AFGS8QrxcmikxnsXOX5uaH1%2FM5Iq3X2KBXTAPjUW994reKnLOJuXOmeG9%2BHZRdNnLG8oO68FEqlRVcUPZM7eJyGwPUCcmPGvdpNnpXyfjVap8bPCF7QWLYF574Z0PHiQmrVmtRHY2iaQ7hchtGhazkU9TiiVssYF0jgbdsmvffDNNvREEr4OPid91mXQCFquQQGId8NcN76JN2OcdGq3tfNfUggy5GDk1c5rp6GWm3E7eMJ%2FYpr8GOqUBMaXoXVl%2FUbJB80V%2FvrU26b9rCY1p%2FuFi6PIcNGpmcqs5ikaZgeqvu6CsMoThg7m12cO6pccKYjvhfbtiwdVIySLm0yR%2FtjF%2FMqsyH40FH9QTx%2F%2B5NGiKmdIvofLLixzpaQBtaFPVUo6iLOJ1MdopfsUWwXdcl3XRFs1NRejz0eDnnfXmnw3fdOgu0Xo9apGAmTggySQhq4pQ7JAHzOKIzJ8T9HK3&X-Amz-Signature=a8e5845ed55f40ea5ccd9f703b85ca50a06ae7f4026a475b55a69258371a8171&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
