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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTHDTZZV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICUXau1%2B4D5C7ygCKa8bRcq9eV6t5OV6wkNrwaYVh9qNAiBNOzP55vPswVvwpToCdsl4JMuv1EnaAwPAY5%2BgIUVfVyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML8T%2BIJLem2GrU0zzKtwDqrR07Czik15WUHg3w%2FEXj9sN8NadirB28zfAhrN9ieeCfd3ohXoUN5stoa7fAF3uIROBz1vC7av7%2Fo4X%2Fm6WGPFjLKe%2B0cb0g6eNSm6%2FL11xTelSuvSWqOaYtbyIEtfZr1gQ9aklrRCrw5wgq39%2FNlBhQ8bH5PWzFyk1lK2IZ9%2FxY7oITRYeF9byXR381z6fdbD%2Foc%2FBssqIBPUrDG2NSk7MX9%2FF2DfJP0sVeFAVhdQaAH7PyAntX0ZvnXvwEHTLVzqjAllOcqSQwA24ufKA6o6oxqMc3i3tg0rMiKjS%2B7GlURNGv%2BMBDAi%2FaBPVCLhcJ2pK%2F5X%2Fnv22zlOU3pKSlmUak3u3Ri2fjmm0INz4KmOmULTsYO9YgvSZvom5oKldIwyksFkyUYyuHnDSkNQmLVbuaFMnKIpYgvWIZCHHC9Yvcfo94TDKiRlH5pVb%2Fq8XnPNRifThpMTVQS%2BnPhmxCz8Gt7Id5dxaG3iu2SYE4JhM%2F6bfE6%2FULEdX4xXuFHe6aW%2Fj5j9gqdoHU2wN8fd%2FQqUHrEB2FY9zQUHWfMUehs%2FEg8x0Jv6BHwT4nLKukI%2BLIUCyBMerGMnwzL8h0D9g%2BEqMRYSXgPEBrq1hHggoS3mnqHBIpHyJBXC1fi8wq6KexAY6pgHSUIhGDwfDKSCy7fjyjD5YrhupvCygSfRX0HGSGBC96VzZhRWnq8buXQ0x6j5QyoH6apv4NKBSVK1ikyKcbMNQ1KjA%2BUDIcfwdenzlLH3XQizkdM4cA6z1LpzfsDaD3z%2FHBodzJyCqGXeI3UT0%2B%2B3Ny98y%2B6GKwlglqtgaYPHDqQXrK7Kdi6UbRlyQ6lJVLC6dLEMk61sLRcysZCkyKJMZYDFSQ9nC&X-Amz-Signature=a8ebaba6789d42efdfcf132ffeda8714fef2b128ca58e69311b097b86794d1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTHDTZZV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICUXau1%2B4D5C7ygCKa8bRcq9eV6t5OV6wkNrwaYVh9qNAiBNOzP55vPswVvwpToCdsl4JMuv1EnaAwPAY5%2BgIUVfVyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML8T%2BIJLem2GrU0zzKtwDqrR07Czik15WUHg3w%2FEXj9sN8NadirB28zfAhrN9ieeCfd3ohXoUN5stoa7fAF3uIROBz1vC7av7%2Fo4X%2Fm6WGPFjLKe%2B0cb0g6eNSm6%2FL11xTelSuvSWqOaYtbyIEtfZr1gQ9aklrRCrw5wgq39%2FNlBhQ8bH5PWzFyk1lK2IZ9%2FxY7oITRYeF9byXR381z6fdbD%2Foc%2FBssqIBPUrDG2NSk7MX9%2FF2DfJP0sVeFAVhdQaAH7PyAntX0ZvnXvwEHTLVzqjAllOcqSQwA24ufKA6o6oxqMc3i3tg0rMiKjS%2B7GlURNGv%2BMBDAi%2FaBPVCLhcJ2pK%2F5X%2Fnv22zlOU3pKSlmUak3u3Ri2fjmm0INz4KmOmULTsYO9YgvSZvom5oKldIwyksFkyUYyuHnDSkNQmLVbuaFMnKIpYgvWIZCHHC9Yvcfo94TDKiRlH5pVb%2Fq8XnPNRifThpMTVQS%2BnPhmxCz8Gt7Id5dxaG3iu2SYE4JhM%2F6bfE6%2FULEdX4xXuFHe6aW%2Fj5j9gqdoHU2wN8fd%2FQqUHrEB2FY9zQUHWfMUehs%2FEg8x0Jv6BHwT4nLKukI%2BLIUCyBMerGMnwzL8h0D9g%2BEqMRYSXgPEBrq1hHggoS3mnqHBIpHyJBXC1fi8wq6KexAY6pgHSUIhGDwfDKSCy7fjyjD5YrhupvCygSfRX0HGSGBC96VzZhRWnq8buXQ0x6j5QyoH6apv4NKBSVK1ikyKcbMNQ1KjA%2BUDIcfwdenzlLH3XQizkdM4cA6z1LpzfsDaD3z%2FHBodzJyCqGXeI3UT0%2B%2B3Ny98y%2B6GKwlglqtgaYPHDqQXrK7Kdi6UbRlyQ6lJVLC6dLEMk61sLRcysZCkyKJMZYDFSQ9nC&X-Amz-Signature=367502ab552d1f8fba61cc6e1a36d6759c659a10ed938e5fe5bb064c1dfc6973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTHDTZZV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICUXau1%2B4D5C7ygCKa8bRcq9eV6t5OV6wkNrwaYVh9qNAiBNOzP55vPswVvwpToCdsl4JMuv1EnaAwPAY5%2BgIUVfVyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML8T%2BIJLem2GrU0zzKtwDqrR07Czik15WUHg3w%2FEXj9sN8NadirB28zfAhrN9ieeCfd3ohXoUN5stoa7fAF3uIROBz1vC7av7%2Fo4X%2Fm6WGPFjLKe%2B0cb0g6eNSm6%2FL11xTelSuvSWqOaYtbyIEtfZr1gQ9aklrRCrw5wgq39%2FNlBhQ8bH5PWzFyk1lK2IZ9%2FxY7oITRYeF9byXR381z6fdbD%2Foc%2FBssqIBPUrDG2NSk7MX9%2FF2DfJP0sVeFAVhdQaAH7PyAntX0ZvnXvwEHTLVzqjAllOcqSQwA24ufKA6o6oxqMc3i3tg0rMiKjS%2B7GlURNGv%2BMBDAi%2FaBPVCLhcJ2pK%2F5X%2Fnv22zlOU3pKSlmUak3u3Ri2fjmm0INz4KmOmULTsYO9YgvSZvom5oKldIwyksFkyUYyuHnDSkNQmLVbuaFMnKIpYgvWIZCHHC9Yvcfo94TDKiRlH5pVb%2Fq8XnPNRifThpMTVQS%2BnPhmxCz8Gt7Id5dxaG3iu2SYE4JhM%2F6bfE6%2FULEdX4xXuFHe6aW%2Fj5j9gqdoHU2wN8fd%2FQqUHrEB2FY9zQUHWfMUehs%2FEg8x0Jv6BHwT4nLKukI%2BLIUCyBMerGMnwzL8h0D9g%2BEqMRYSXgPEBrq1hHggoS3mnqHBIpHyJBXC1fi8wq6KexAY6pgHSUIhGDwfDKSCy7fjyjD5YrhupvCygSfRX0HGSGBC96VzZhRWnq8buXQ0x6j5QyoH6apv4NKBSVK1ikyKcbMNQ1KjA%2BUDIcfwdenzlLH3XQizkdM4cA6z1LpzfsDaD3z%2FHBodzJyCqGXeI3UT0%2B%2B3Ny98y%2B6GKwlglqtgaYPHDqQXrK7Kdi6UbRlyQ6lJVLC6dLEMk61sLRcysZCkyKJMZYDFSQ9nC&X-Amz-Signature=17e1912840ab8b9ce449bd9bc256a1256363bf44325d0622e8aca63d5bb80c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTHDTZZV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICUXau1%2B4D5C7ygCKa8bRcq9eV6t5OV6wkNrwaYVh9qNAiBNOzP55vPswVvwpToCdsl4JMuv1EnaAwPAY5%2BgIUVfVyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML8T%2BIJLem2GrU0zzKtwDqrR07Czik15WUHg3w%2FEXj9sN8NadirB28zfAhrN9ieeCfd3ohXoUN5stoa7fAF3uIROBz1vC7av7%2Fo4X%2Fm6WGPFjLKe%2B0cb0g6eNSm6%2FL11xTelSuvSWqOaYtbyIEtfZr1gQ9aklrRCrw5wgq39%2FNlBhQ8bH5PWzFyk1lK2IZ9%2FxY7oITRYeF9byXR381z6fdbD%2Foc%2FBssqIBPUrDG2NSk7MX9%2FF2DfJP0sVeFAVhdQaAH7PyAntX0ZvnXvwEHTLVzqjAllOcqSQwA24ufKA6o6oxqMc3i3tg0rMiKjS%2B7GlURNGv%2BMBDAi%2FaBPVCLhcJ2pK%2F5X%2Fnv22zlOU3pKSlmUak3u3Ri2fjmm0INz4KmOmULTsYO9YgvSZvom5oKldIwyksFkyUYyuHnDSkNQmLVbuaFMnKIpYgvWIZCHHC9Yvcfo94TDKiRlH5pVb%2Fq8XnPNRifThpMTVQS%2BnPhmxCz8Gt7Id5dxaG3iu2SYE4JhM%2F6bfE6%2FULEdX4xXuFHe6aW%2Fj5j9gqdoHU2wN8fd%2FQqUHrEB2FY9zQUHWfMUehs%2FEg8x0Jv6BHwT4nLKukI%2BLIUCyBMerGMnwzL8h0D9g%2BEqMRYSXgPEBrq1hHggoS3mnqHBIpHyJBXC1fi8wq6KexAY6pgHSUIhGDwfDKSCy7fjyjD5YrhupvCygSfRX0HGSGBC96VzZhRWnq8buXQ0x6j5QyoH6apv4NKBSVK1ikyKcbMNQ1KjA%2BUDIcfwdenzlLH3XQizkdM4cA6z1LpzfsDaD3z%2FHBodzJyCqGXeI3UT0%2B%2B3Ny98y%2B6GKwlglqtgaYPHDqQXrK7Kdi6UbRlyQ6lJVLC6dLEMk61sLRcysZCkyKJMZYDFSQ9nC&X-Amz-Signature=ad459764017183f33159104526b1e4210b1dac9df1ce83237a9ed9d398c68da7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTHDTZZV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICUXau1%2B4D5C7ygCKa8bRcq9eV6t5OV6wkNrwaYVh9qNAiBNOzP55vPswVvwpToCdsl4JMuv1EnaAwPAY5%2BgIUVfVyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML8T%2BIJLem2GrU0zzKtwDqrR07Czik15WUHg3w%2FEXj9sN8NadirB28zfAhrN9ieeCfd3ohXoUN5stoa7fAF3uIROBz1vC7av7%2Fo4X%2Fm6WGPFjLKe%2B0cb0g6eNSm6%2FL11xTelSuvSWqOaYtbyIEtfZr1gQ9aklrRCrw5wgq39%2FNlBhQ8bH5PWzFyk1lK2IZ9%2FxY7oITRYeF9byXR381z6fdbD%2Foc%2FBssqIBPUrDG2NSk7MX9%2FF2DfJP0sVeFAVhdQaAH7PyAntX0ZvnXvwEHTLVzqjAllOcqSQwA24ufKA6o6oxqMc3i3tg0rMiKjS%2B7GlURNGv%2BMBDAi%2FaBPVCLhcJ2pK%2F5X%2Fnv22zlOU3pKSlmUak3u3Ri2fjmm0INz4KmOmULTsYO9YgvSZvom5oKldIwyksFkyUYyuHnDSkNQmLVbuaFMnKIpYgvWIZCHHC9Yvcfo94TDKiRlH5pVb%2Fq8XnPNRifThpMTVQS%2BnPhmxCz8Gt7Id5dxaG3iu2SYE4JhM%2F6bfE6%2FULEdX4xXuFHe6aW%2Fj5j9gqdoHU2wN8fd%2FQqUHrEB2FY9zQUHWfMUehs%2FEg8x0Jv6BHwT4nLKukI%2BLIUCyBMerGMnwzL8h0D9g%2BEqMRYSXgPEBrq1hHggoS3mnqHBIpHyJBXC1fi8wq6KexAY6pgHSUIhGDwfDKSCy7fjyjD5YrhupvCygSfRX0HGSGBC96VzZhRWnq8buXQ0x6j5QyoH6apv4NKBSVK1ikyKcbMNQ1KjA%2BUDIcfwdenzlLH3XQizkdM4cA6z1LpzfsDaD3z%2FHBodzJyCqGXeI3UT0%2B%2B3Ny98y%2B6GKwlglqtgaYPHDqQXrK7Kdi6UbRlyQ6lJVLC6dLEMk61sLRcysZCkyKJMZYDFSQ9nC&X-Amz-Signature=13b6231687e1965b274df89664902ac080b0db9fc15f81bd60b127b6de105b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
