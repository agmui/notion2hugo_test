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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CPHZIEV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAfQ%2FIl4TNnnlTPUhuDXj9MOFdoPVxc41OHtYQ3Yp5ZCAiAFTg5C3L6I7UyY4hJjFY3eAh8T9r01bBk26aDThTTOyir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMhCkNxpaYoQO3PVGPKtwDaR%2FLE%2BqEx3mw%2BKyRTUwtTrY0PghfJ1igm36asRcY7aJSNYX7dKcraH98rIb51bCqFDC3dHnZ8MnlwiLNlL6sJeHtRAhAL0jzEY8qlCFfMQ4tncsd4umWA08V%2BW7NO0HJRv7FkhWog5UNGGnSyIjTLcybs%2FSjHxrXOGiS3jBlSet7VHH3CtS3G6CPfi7%2FdkWTQgHl%2BI46zJbOaOEBfz9BJqEZzr%2FSUoS14p0esCtVPWtnFEWiLKiebdpEm8TCxzthJnMFKQPlLNzBIJgw%2B6v4ixi4pqcde8XoiHUlDR%2F82F58WuKKSXApBc3KcOdrtQfZcT%2BU56ZGUdP997vYdBjrUm8hTjeDwAcMYTMYhUFb1vM2Clh5i4ivb5AowOYW1G2RoPSEFPiUIZHOQ04VtGjP5FIxzMXbqulnlktJJuyDUHeab4rmREQPgUAUEsNOIT8y1YfftQ7bQSdKjUN7vfB9sA3LXGqFqujvSLVD2dyziG6X0TTWllgNVf0xOhurYAgHogbGtqBVB86FMCZ2h6v%2FvPpOKxGIjhFyqeJf08UTJM%2BH0MG2Cg6GiiFgeolLWUPxai3l6m%2Bxta0BFkxU4HCixtVtoPz3TUO5QGD0m1%2FSZ2KVkGAbV2squq6ZiogwoJyfwwY6pgGpLbIspSX55hI%2Bsd6eqXT0bu5uNswOeXLfW2Z0DE5EbxHEFyhkyRE3DaN7R4LpPMkmY4Rj58X5l7VmDJ8eSGxAr1eybGd9ihH4lnkUw5oSybThMkyA9jU6NnE0v6D9p5vDghCcS4N2ae9Ka5vjLhS816lE0YpBCJhEdWRh1GoW2JfhlgH6wn75gVs%2FtVpz6LfvRk7jb0Jdo0u6O3sfdNPSed8g%2FUpm&X-Amz-Signature=ebe706041f9bff40641fe4d50bd60c0b004502d1dc803eed47961df3316b4790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CPHZIEV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAfQ%2FIl4TNnnlTPUhuDXj9MOFdoPVxc41OHtYQ3Yp5ZCAiAFTg5C3L6I7UyY4hJjFY3eAh8T9r01bBk26aDThTTOyir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMhCkNxpaYoQO3PVGPKtwDaR%2FLE%2BqEx3mw%2BKyRTUwtTrY0PghfJ1igm36asRcY7aJSNYX7dKcraH98rIb51bCqFDC3dHnZ8MnlwiLNlL6sJeHtRAhAL0jzEY8qlCFfMQ4tncsd4umWA08V%2BW7NO0HJRv7FkhWog5UNGGnSyIjTLcybs%2FSjHxrXOGiS3jBlSet7VHH3CtS3G6CPfi7%2FdkWTQgHl%2BI46zJbOaOEBfz9BJqEZzr%2FSUoS14p0esCtVPWtnFEWiLKiebdpEm8TCxzthJnMFKQPlLNzBIJgw%2B6v4ixi4pqcde8XoiHUlDR%2F82F58WuKKSXApBc3KcOdrtQfZcT%2BU56ZGUdP997vYdBjrUm8hTjeDwAcMYTMYhUFb1vM2Clh5i4ivb5AowOYW1G2RoPSEFPiUIZHOQ04VtGjP5FIxzMXbqulnlktJJuyDUHeab4rmREQPgUAUEsNOIT8y1YfftQ7bQSdKjUN7vfB9sA3LXGqFqujvSLVD2dyziG6X0TTWllgNVf0xOhurYAgHogbGtqBVB86FMCZ2h6v%2FvPpOKxGIjhFyqeJf08UTJM%2BH0MG2Cg6GiiFgeolLWUPxai3l6m%2Bxta0BFkxU4HCixtVtoPz3TUO5QGD0m1%2FSZ2KVkGAbV2squq6ZiogwoJyfwwY6pgGpLbIspSX55hI%2Bsd6eqXT0bu5uNswOeXLfW2Z0DE5EbxHEFyhkyRE3DaN7R4LpPMkmY4Rj58X5l7VmDJ8eSGxAr1eybGd9ihH4lnkUw5oSybThMkyA9jU6NnE0v6D9p5vDghCcS4N2ae9Ka5vjLhS816lE0YpBCJhEdWRh1GoW2JfhlgH6wn75gVs%2FtVpz6LfvRk7jb0Jdo0u6O3sfdNPSed8g%2FUpm&X-Amz-Signature=354de44dd57916e855f880a4ce50d2cfdbbba66da0579f62660f8e16127fbbf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CPHZIEV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAfQ%2FIl4TNnnlTPUhuDXj9MOFdoPVxc41OHtYQ3Yp5ZCAiAFTg5C3L6I7UyY4hJjFY3eAh8T9r01bBk26aDThTTOyir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMhCkNxpaYoQO3PVGPKtwDaR%2FLE%2BqEx3mw%2BKyRTUwtTrY0PghfJ1igm36asRcY7aJSNYX7dKcraH98rIb51bCqFDC3dHnZ8MnlwiLNlL6sJeHtRAhAL0jzEY8qlCFfMQ4tncsd4umWA08V%2BW7NO0HJRv7FkhWog5UNGGnSyIjTLcybs%2FSjHxrXOGiS3jBlSet7VHH3CtS3G6CPfi7%2FdkWTQgHl%2BI46zJbOaOEBfz9BJqEZzr%2FSUoS14p0esCtVPWtnFEWiLKiebdpEm8TCxzthJnMFKQPlLNzBIJgw%2B6v4ixi4pqcde8XoiHUlDR%2F82F58WuKKSXApBc3KcOdrtQfZcT%2BU56ZGUdP997vYdBjrUm8hTjeDwAcMYTMYhUFb1vM2Clh5i4ivb5AowOYW1G2RoPSEFPiUIZHOQ04VtGjP5FIxzMXbqulnlktJJuyDUHeab4rmREQPgUAUEsNOIT8y1YfftQ7bQSdKjUN7vfB9sA3LXGqFqujvSLVD2dyziG6X0TTWllgNVf0xOhurYAgHogbGtqBVB86FMCZ2h6v%2FvPpOKxGIjhFyqeJf08UTJM%2BH0MG2Cg6GiiFgeolLWUPxai3l6m%2Bxta0BFkxU4HCixtVtoPz3TUO5QGD0m1%2FSZ2KVkGAbV2squq6ZiogwoJyfwwY6pgGpLbIspSX55hI%2Bsd6eqXT0bu5uNswOeXLfW2Z0DE5EbxHEFyhkyRE3DaN7R4LpPMkmY4Rj58X5l7VmDJ8eSGxAr1eybGd9ihH4lnkUw5oSybThMkyA9jU6NnE0v6D9p5vDghCcS4N2ae9Ka5vjLhS816lE0YpBCJhEdWRh1GoW2JfhlgH6wn75gVs%2FtVpz6LfvRk7jb0Jdo0u6O3sfdNPSed8g%2FUpm&X-Amz-Signature=9e00ec1a04bb835e99bcb399fb2589b5d91be51cb092b6de3113fb2890296ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CPHZIEV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAfQ%2FIl4TNnnlTPUhuDXj9MOFdoPVxc41OHtYQ3Yp5ZCAiAFTg5C3L6I7UyY4hJjFY3eAh8T9r01bBk26aDThTTOyir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMhCkNxpaYoQO3PVGPKtwDaR%2FLE%2BqEx3mw%2BKyRTUwtTrY0PghfJ1igm36asRcY7aJSNYX7dKcraH98rIb51bCqFDC3dHnZ8MnlwiLNlL6sJeHtRAhAL0jzEY8qlCFfMQ4tncsd4umWA08V%2BW7NO0HJRv7FkhWog5UNGGnSyIjTLcybs%2FSjHxrXOGiS3jBlSet7VHH3CtS3G6CPfi7%2FdkWTQgHl%2BI46zJbOaOEBfz9BJqEZzr%2FSUoS14p0esCtVPWtnFEWiLKiebdpEm8TCxzthJnMFKQPlLNzBIJgw%2B6v4ixi4pqcde8XoiHUlDR%2F82F58WuKKSXApBc3KcOdrtQfZcT%2BU56ZGUdP997vYdBjrUm8hTjeDwAcMYTMYhUFb1vM2Clh5i4ivb5AowOYW1G2RoPSEFPiUIZHOQ04VtGjP5FIxzMXbqulnlktJJuyDUHeab4rmREQPgUAUEsNOIT8y1YfftQ7bQSdKjUN7vfB9sA3LXGqFqujvSLVD2dyziG6X0TTWllgNVf0xOhurYAgHogbGtqBVB86FMCZ2h6v%2FvPpOKxGIjhFyqeJf08UTJM%2BH0MG2Cg6GiiFgeolLWUPxai3l6m%2Bxta0BFkxU4HCixtVtoPz3TUO5QGD0m1%2FSZ2KVkGAbV2squq6ZiogwoJyfwwY6pgGpLbIspSX55hI%2Bsd6eqXT0bu5uNswOeXLfW2Z0DE5EbxHEFyhkyRE3DaN7R4LpPMkmY4Rj58X5l7VmDJ8eSGxAr1eybGd9ihH4lnkUw5oSybThMkyA9jU6NnE0v6D9p5vDghCcS4N2ae9Ka5vjLhS816lE0YpBCJhEdWRh1GoW2JfhlgH6wn75gVs%2FtVpz6LfvRk7jb0Jdo0u6O3sfdNPSed8g%2FUpm&X-Amz-Signature=1e9f0f898c7a821fb9d0d221a332b7abbfb222b4a9159d6cb1035e395539a5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CPHZIEV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAfQ%2FIl4TNnnlTPUhuDXj9MOFdoPVxc41OHtYQ3Yp5ZCAiAFTg5C3L6I7UyY4hJjFY3eAh8T9r01bBk26aDThTTOyir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMhCkNxpaYoQO3PVGPKtwDaR%2FLE%2BqEx3mw%2BKyRTUwtTrY0PghfJ1igm36asRcY7aJSNYX7dKcraH98rIb51bCqFDC3dHnZ8MnlwiLNlL6sJeHtRAhAL0jzEY8qlCFfMQ4tncsd4umWA08V%2BW7NO0HJRv7FkhWog5UNGGnSyIjTLcybs%2FSjHxrXOGiS3jBlSet7VHH3CtS3G6CPfi7%2FdkWTQgHl%2BI46zJbOaOEBfz9BJqEZzr%2FSUoS14p0esCtVPWtnFEWiLKiebdpEm8TCxzthJnMFKQPlLNzBIJgw%2B6v4ixi4pqcde8XoiHUlDR%2F82F58WuKKSXApBc3KcOdrtQfZcT%2BU56ZGUdP997vYdBjrUm8hTjeDwAcMYTMYhUFb1vM2Clh5i4ivb5AowOYW1G2RoPSEFPiUIZHOQ04VtGjP5FIxzMXbqulnlktJJuyDUHeab4rmREQPgUAUEsNOIT8y1YfftQ7bQSdKjUN7vfB9sA3LXGqFqujvSLVD2dyziG6X0TTWllgNVf0xOhurYAgHogbGtqBVB86FMCZ2h6v%2FvPpOKxGIjhFyqeJf08UTJM%2BH0MG2Cg6GiiFgeolLWUPxai3l6m%2Bxta0BFkxU4HCixtVtoPz3TUO5QGD0m1%2FSZ2KVkGAbV2squq6ZiogwoJyfwwY6pgGpLbIspSX55hI%2Bsd6eqXT0bu5uNswOeXLfW2Z0DE5EbxHEFyhkyRE3DaN7R4LpPMkmY4Rj58X5l7VmDJ8eSGxAr1eybGd9ihH4lnkUw5oSybThMkyA9jU6NnE0v6D9p5vDghCcS4N2ae9Ka5vjLhS816lE0YpBCJhEdWRh1GoW2JfhlgH6wn75gVs%2FtVpz6LfvRk7jb0Jdo0u6O3sfdNPSed8g%2FUpm&X-Amz-Signature=695b97b8427652170bfbb87ba869159824b2addc51f503c02914043a94641bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
