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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FWJANGQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCpPgOY%2BbMA1qxgV2H5XTot5qJdPNxmCuw3k14t6VorbAIgecgc9MOa925xJfJPvQY%2B7fL99aFrXgPp1tgjADpeJJcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN7X4XmE75kE76g5mSrcA8qoXSUqld8TCkvXsKPYSBvrwGoajUaOrKLP0p6cA03Nf8ODetb%2Fu5HnCwyo1FtbUVBd4OlXv%2Fsa7tKf2Hl5tC%2BRwReC9Bam%2BwonmtqBFPha5EdX5%2FE9mFuz4IRLCx26OlQc3UZ%2F0lyzSlzrlfvppqOF2Ln0dRrRz8hmHOm6pV66Mf0MRjM6IwnNTVDbOEaY55gZH2TXTNk%2BjGDmNnYTxsjfhDY5ABCRFD2IYeHhbVMmQZZQ%2F8upcZULxkV93SyRpvvuZ688xh2P1egE0E0JQb23oa1Qz%2FQMS9HAY2mwOTWRgQltcWitnJSwrhM2VXFY7zd5Wq%2FXGYWWDg36qAeuvKG10ElCfrHMWzrlUDXjUA%2BcBw64M8AnTh7NcbknhAMFyo8Eo%2FvsdHl0N6EsdO%2BybyGGVW%2F4kGpYLst4NSgEccLJU3o3G2lSYgL3igqfaHUmHVznJW7kF1cH%2FUU%2BLeAeYXgVAGTpEnTvgIxBsDZYusTC6r0qozgPVk4DLhsop2IqDnAOwQ%2Fkvwa22jN51yQMYyzg8Uwk6%2BztbIqW9OVayyjde65cMj2Rf%2BT4MMfcYfFqFYuRluKkCVdqNg9tIwG5OiUOTB5cJ3toVZN2IGx1Pfm0Mt1%2B4B2Yr%2FyIqn9IMNPa%2FcQGOqUBls1%2BN52AORQFZBFoHiA0YFdvRiQhnfHI2qh%2BJE%2BEgccAxCf7xGRBjxLi67t5ucYURgEBxVxq4IDR3HvDYbE8a%2FGx%2FGSVeXea62Bn%2BM7sizqS%2FWvHnPz1Y%2B%2Fe8mC0fnCWArJKrerHdPFiDFJ6nBdbtPM45i31JkzAAynfFExPPIwwVu2M0c4tDkou%2BjF2a6BUPbUMsSz61ukHDf5QwqO6W07ZW4zd&X-Amz-Signature=6f33b9f665beb0a6a2adfde2283c3dbd02bc0d2a691c983f83c17fccb994fb1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FWJANGQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCpPgOY%2BbMA1qxgV2H5XTot5qJdPNxmCuw3k14t6VorbAIgecgc9MOa925xJfJPvQY%2B7fL99aFrXgPp1tgjADpeJJcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN7X4XmE75kE76g5mSrcA8qoXSUqld8TCkvXsKPYSBvrwGoajUaOrKLP0p6cA03Nf8ODetb%2Fu5HnCwyo1FtbUVBd4OlXv%2Fsa7tKf2Hl5tC%2BRwReC9Bam%2BwonmtqBFPha5EdX5%2FE9mFuz4IRLCx26OlQc3UZ%2F0lyzSlzrlfvppqOF2Ln0dRrRz8hmHOm6pV66Mf0MRjM6IwnNTVDbOEaY55gZH2TXTNk%2BjGDmNnYTxsjfhDY5ABCRFD2IYeHhbVMmQZZQ%2F8upcZULxkV93SyRpvvuZ688xh2P1egE0E0JQb23oa1Qz%2FQMS9HAY2mwOTWRgQltcWitnJSwrhM2VXFY7zd5Wq%2FXGYWWDg36qAeuvKG10ElCfrHMWzrlUDXjUA%2BcBw64M8AnTh7NcbknhAMFyo8Eo%2FvsdHl0N6EsdO%2BybyGGVW%2F4kGpYLst4NSgEccLJU3o3G2lSYgL3igqfaHUmHVznJW7kF1cH%2FUU%2BLeAeYXgVAGTpEnTvgIxBsDZYusTC6r0qozgPVk4DLhsop2IqDnAOwQ%2Fkvwa22jN51yQMYyzg8Uwk6%2BztbIqW9OVayyjde65cMj2Rf%2BT4MMfcYfFqFYuRluKkCVdqNg9tIwG5OiUOTB5cJ3toVZN2IGx1Pfm0Mt1%2B4B2Yr%2FyIqn9IMNPa%2FcQGOqUBls1%2BN52AORQFZBFoHiA0YFdvRiQhnfHI2qh%2BJE%2BEgccAxCf7xGRBjxLi67t5ucYURgEBxVxq4IDR3HvDYbE8a%2FGx%2FGSVeXea62Bn%2BM7sizqS%2FWvHnPz1Y%2B%2Fe8mC0fnCWArJKrerHdPFiDFJ6nBdbtPM45i31JkzAAynfFExPPIwwVu2M0c4tDkou%2BjF2a6BUPbUMsSz61ukHDf5QwqO6W07ZW4zd&X-Amz-Signature=d0959937fae5ee4b74b5e277c3b6c15b5d412530318a5bc63acafbb9da856151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FWJANGQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCpPgOY%2BbMA1qxgV2H5XTot5qJdPNxmCuw3k14t6VorbAIgecgc9MOa925xJfJPvQY%2B7fL99aFrXgPp1tgjADpeJJcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN7X4XmE75kE76g5mSrcA8qoXSUqld8TCkvXsKPYSBvrwGoajUaOrKLP0p6cA03Nf8ODetb%2Fu5HnCwyo1FtbUVBd4OlXv%2Fsa7tKf2Hl5tC%2BRwReC9Bam%2BwonmtqBFPha5EdX5%2FE9mFuz4IRLCx26OlQc3UZ%2F0lyzSlzrlfvppqOF2Ln0dRrRz8hmHOm6pV66Mf0MRjM6IwnNTVDbOEaY55gZH2TXTNk%2BjGDmNnYTxsjfhDY5ABCRFD2IYeHhbVMmQZZQ%2F8upcZULxkV93SyRpvvuZ688xh2P1egE0E0JQb23oa1Qz%2FQMS9HAY2mwOTWRgQltcWitnJSwrhM2VXFY7zd5Wq%2FXGYWWDg36qAeuvKG10ElCfrHMWzrlUDXjUA%2BcBw64M8AnTh7NcbknhAMFyo8Eo%2FvsdHl0N6EsdO%2BybyGGVW%2F4kGpYLst4NSgEccLJU3o3G2lSYgL3igqfaHUmHVznJW7kF1cH%2FUU%2BLeAeYXgVAGTpEnTvgIxBsDZYusTC6r0qozgPVk4DLhsop2IqDnAOwQ%2Fkvwa22jN51yQMYyzg8Uwk6%2BztbIqW9OVayyjde65cMj2Rf%2BT4MMfcYfFqFYuRluKkCVdqNg9tIwG5OiUOTB5cJ3toVZN2IGx1Pfm0Mt1%2B4B2Yr%2FyIqn9IMNPa%2FcQGOqUBls1%2BN52AORQFZBFoHiA0YFdvRiQhnfHI2qh%2BJE%2BEgccAxCf7xGRBjxLi67t5ucYURgEBxVxq4IDR3HvDYbE8a%2FGx%2FGSVeXea62Bn%2BM7sizqS%2FWvHnPz1Y%2B%2Fe8mC0fnCWArJKrerHdPFiDFJ6nBdbtPM45i31JkzAAynfFExPPIwwVu2M0c4tDkou%2BjF2a6BUPbUMsSz61ukHDf5QwqO6W07ZW4zd&X-Amz-Signature=1f8e6de2cb0a12595191061ee76232dd20f0daae3d6134c14005c6991600a690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FWJANGQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCpPgOY%2BbMA1qxgV2H5XTot5qJdPNxmCuw3k14t6VorbAIgecgc9MOa925xJfJPvQY%2B7fL99aFrXgPp1tgjADpeJJcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN7X4XmE75kE76g5mSrcA8qoXSUqld8TCkvXsKPYSBvrwGoajUaOrKLP0p6cA03Nf8ODetb%2Fu5HnCwyo1FtbUVBd4OlXv%2Fsa7tKf2Hl5tC%2BRwReC9Bam%2BwonmtqBFPha5EdX5%2FE9mFuz4IRLCx26OlQc3UZ%2F0lyzSlzrlfvppqOF2Ln0dRrRz8hmHOm6pV66Mf0MRjM6IwnNTVDbOEaY55gZH2TXTNk%2BjGDmNnYTxsjfhDY5ABCRFD2IYeHhbVMmQZZQ%2F8upcZULxkV93SyRpvvuZ688xh2P1egE0E0JQb23oa1Qz%2FQMS9HAY2mwOTWRgQltcWitnJSwrhM2VXFY7zd5Wq%2FXGYWWDg36qAeuvKG10ElCfrHMWzrlUDXjUA%2BcBw64M8AnTh7NcbknhAMFyo8Eo%2FvsdHl0N6EsdO%2BybyGGVW%2F4kGpYLst4NSgEccLJU3o3G2lSYgL3igqfaHUmHVznJW7kF1cH%2FUU%2BLeAeYXgVAGTpEnTvgIxBsDZYusTC6r0qozgPVk4DLhsop2IqDnAOwQ%2Fkvwa22jN51yQMYyzg8Uwk6%2BztbIqW9OVayyjde65cMj2Rf%2BT4MMfcYfFqFYuRluKkCVdqNg9tIwG5OiUOTB5cJ3toVZN2IGx1Pfm0Mt1%2B4B2Yr%2FyIqn9IMNPa%2FcQGOqUBls1%2BN52AORQFZBFoHiA0YFdvRiQhnfHI2qh%2BJE%2BEgccAxCf7xGRBjxLi67t5ucYURgEBxVxq4IDR3HvDYbE8a%2FGx%2FGSVeXea62Bn%2BM7sizqS%2FWvHnPz1Y%2B%2Fe8mC0fnCWArJKrerHdPFiDFJ6nBdbtPM45i31JkzAAynfFExPPIwwVu2M0c4tDkou%2BjF2a6BUPbUMsSz61ukHDf5QwqO6W07ZW4zd&X-Amz-Signature=8f77aad55fc069d0f53965fa5ebf62d96c414619140707acb98a9b379f9e3e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FWJANGQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCpPgOY%2BbMA1qxgV2H5XTot5qJdPNxmCuw3k14t6VorbAIgecgc9MOa925xJfJPvQY%2B7fL99aFrXgPp1tgjADpeJJcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN7X4XmE75kE76g5mSrcA8qoXSUqld8TCkvXsKPYSBvrwGoajUaOrKLP0p6cA03Nf8ODetb%2Fu5HnCwyo1FtbUVBd4OlXv%2Fsa7tKf2Hl5tC%2BRwReC9Bam%2BwonmtqBFPha5EdX5%2FE9mFuz4IRLCx26OlQc3UZ%2F0lyzSlzrlfvppqOF2Ln0dRrRz8hmHOm6pV66Mf0MRjM6IwnNTVDbOEaY55gZH2TXTNk%2BjGDmNnYTxsjfhDY5ABCRFD2IYeHhbVMmQZZQ%2F8upcZULxkV93SyRpvvuZ688xh2P1egE0E0JQb23oa1Qz%2FQMS9HAY2mwOTWRgQltcWitnJSwrhM2VXFY7zd5Wq%2FXGYWWDg36qAeuvKG10ElCfrHMWzrlUDXjUA%2BcBw64M8AnTh7NcbknhAMFyo8Eo%2FvsdHl0N6EsdO%2BybyGGVW%2F4kGpYLst4NSgEccLJU3o3G2lSYgL3igqfaHUmHVznJW7kF1cH%2FUU%2BLeAeYXgVAGTpEnTvgIxBsDZYusTC6r0qozgPVk4DLhsop2IqDnAOwQ%2Fkvwa22jN51yQMYyzg8Uwk6%2BztbIqW9OVayyjde65cMj2Rf%2BT4MMfcYfFqFYuRluKkCVdqNg9tIwG5OiUOTB5cJ3toVZN2IGx1Pfm0Mt1%2B4B2Yr%2FyIqn9IMNPa%2FcQGOqUBls1%2BN52AORQFZBFoHiA0YFdvRiQhnfHI2qh%2BJE%2BEgccAxCf7xGRBjxLi67t5ucYURgEBxVxq4IDR3HvDYbE8a%2FGx%2FGSVeXea62Bn%2BM7sizqS%2FWvHnPz1Y%2B%2Fe8mC0fnCWArJKrerHdPFiDFJ6nBdbtPM45i31JkzAAynfFExPPIwwVu2M0c4tDkou%2BjF2a6BUPbUMsSz61ukHDf5QwqO6W07ZW4zd&X-Amz-Signature=e428a3e5c6231636f5f2fccc6b69dabff96f4c7377cf0afe5a9932d089128ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
