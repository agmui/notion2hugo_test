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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NCZU434%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDOOp6lugjiEMECv%2FIu1CIYQLJZBrXZ9UGsvh73Ua9u2AiBYKtEhscYg7QO3G0kDrvLPVHvB4TEVyo%2FrW3StaTzBKiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqXqRhvp%2BBp1jXYA5KtwDJPAXesDV46nXjSVaZr388YIx6wMLgUZgXhC2ZzPhVyJ%2BoTzZtAsmn%2F31jaJCLSgE3bU5%2BQIyxJrtMdo79TlL%2B42H%2FeUKwXchyZiSXmDGKTBUVTud3ultasAscnYfFAZWaGC6dZDEi2PKgnOJ3ObSx%2BTiwO4az25Pne2INzebt%2FFUOGXY7m8eXGDr%2FavQypICMya94NMvpJUQO2BPNrkN9ttNBf2mDlK%2B5hH7Mfoop%2BwQJkkPU5cC87B6wIpbpEt4vaIyn09jyT7ZZrA1KCzvausmQyrI6opO%2B8R2CEKL6XeDjRNGNzH1dLRx0S3WPKHgnoqIqIIvSCcBKRQmIjjeK1CPkIxyooBDEOxvszjVgIdhBFmjOR%2B%2BA8TZ8TdTiRQbMus7qNFqu35ADL6CvJ2AP%2Bsh12zM9fF8JpfY52dnbjw8EboVcxJX4anKx3FWAnxIKHFQJvmvKcskP8rn8Ap1BPWEnNaty5%2FIU4HS19BuHB9Itf%2Bv92%2FVrqQ%2BwaumcXZOuCy%2BBmRxIVda%2F0igLSSpskcyyMudTFonT7DFtsWIcdaZJQh%2FKs2pbtORcKfoIYMkMHElBgj4dM6%2FqJ%2Fql%2BOktCyp0vUMQgDiL8eJykd8jE2g15Ky3WiuiKc65GwwkL7uvwY6pgEMPMqFgXSoXq8CF%2B0gqGCxLNTyJkzyqDp1TxmMo0sCybginAuw%2BW7Y7dszR3QXNL6APSBgMFbL81SR25wVh7BfIG5FwVGPx3W4g7%2FwC9SttG1eLphh81MWYP1a2wF2rjxYCJ1zQGKWrR09PJW4Ix9AxgJclsQ1WOc9qcT7krfO6RHqQR6jIXLsd7WB1eOA3vIsusekmlgE0vOE97ZcNQIq%2FRe9rPIO&X-Amz-Signature=fbc4bc1999cec75537820e2c9cebade1d569f80ca2f2fbfff3996e01078f2969&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NCZU434%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDOOp6lugjiEMECv%2FIu1CIYQLJZBrXZ9UGsvh73Ua9u2AiBYKtEhscYg7QO3G0kDrvLPVHvB4TEVyo%2FrW3StaTzBKiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqXqRhvp%2BBp1jXYA5KtwDJPAXesDV46nXjSVaZr388YIx6wMLgUZgXhC2ZzPhVyJ%2BoTzZtAsmn%2F31jaJCLSgE3bU5%2BQIyxJrtMdo79TlL%2B42H%2FeUKwXchyZiSXmDGKTBUVTud3ultasAscnYfFAZWaGC6dZDEi2PKgnOJ3ObSx%2BTiwO4az25Pne2INzebt%2FFUOGXY7m8eXGDr%2FavQypICMya94NMvpJUQO2BPNrkN9ttNBf2mDlK%2B5hH7Mfoop%2BwQJkkPU5cC87B6wIpbpEt4vaIyn09jyT7ZZrA1KCzvausmQyrI6opO%2B8R2CEKL6XeDjRNGNzH1dLRx0S3WPKHgnoqIqIIvSCcBKRQmIjjeK1CPkIxyooBDEOxvszjVgIdhBFmjOR%2B%2BA8TZ8TdTiRQbMus7qNFqu35ADL6CvJ2AP%2Bsh12zM9fF8JpfY52dnbjw8EboVcxJX4anKx3FWAnxIKHFQJvmvKcskP8rn8Ap1BPWEnNaty5%2FIU4HS19BuHB9Itf%2Bv92%2FVrqQ%2BwaumcXZOuCy%2BBmRxIVda%2F0igLSSpskcyyMudTFonT7DFtsWIcdaZJQh%2FKs2pbtORcKfoIYMkMHElBgj4dM6%2FqJ%2Fql%2BOktCyp0vUMQgDiL8eJykd8jE2g15Ky3WiuiKc65GwwkL7uvwY6pgEMPMqFgXSoXq8CF%2B0gqGCxLNTyJkzyqDp1TxmMo0sCybginAuw%2BW7Y7dszR3QXNL6APSBgMFbL81SR25wVh7BfIG5FwVGPx3W4g7%2FwC9SttG1eLphh81MWYP1a2wF2rjxYCJ1zQGKWrR09PJW4Ix9AxgJclsQ1WOc9qcT7krfO6RHqQR6jIXLsd7WB1eOA3vIsusekmlgE0vOE97ZcNQIq%2FRe9rPIO&X-Amz-Signature=4277696ab86adbc4fbbbd80a2e3f5a553073a6592e13fd9208780a43be75c989&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NCZU434%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDOOp6lugjiEMECv%2FIu1CIYQLJZBrXZ9UGsvh73Ua9u2AiBYKtEhscYg7QO3G0kDrvLPVHvB4TEVyo%2FrW3StaTzBKiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqXqRhvp%2BBp1jXYA5KtwDJPAXesDV46nXjSVaZr388YIx6wMLgUZgXhC2ZzPhVyJ%2BoTzZtAsmn%2F31jaJCLSgE3bU5%2BQIyxJrtMdo79TlL%2B42H%2FeUKwXchyZiSXmDGKTBUVTud3ultasAscnYfFAZWaGC6dZDEi2PKgnOJ3ObSx%2BTiwO4az25Pne2INzebt%2FFUOGXY7m8eXGDr%2FavQypICMya94NMvpJUQO2BPNrkN9ttNBf2mDlK%2B5hH7Mfoop%2BwQJkkPU5cC87B6wIpbpEt4vaIyn09jyT7ZZrA1KCzvausmQyrI6opO%2B8R2CEKL6XeDjRNGNzH1dLRx0S3WPKHgnoqIqIIvSCcBKRQmIjjeK1CPkIxyooBDEOxvszjVgIdhBFmjOR%2B%2BA8TZ8TdTiRQbMus7qNFqu35ADL6CvJ2AP%2Bsh12zM9fF8JpfY52dnbjw8EboVcxJX4anKx3FWAnxIKHFQJvmvKcskP8rn8Ap1BPWEnNaty5%2FIU4HS19BuHB9Itf%2Bv92%2FVrqQ%2BwaumcXZOuCy%2BBmRxIVda%2F0igLSSpskcyyMudTFonT7DFtsWIcdaZJQh%2FKs2pbtORcKfoIYMkMHElBgj4dM6%2FqJ%2Fql%2BOktCyp0vUMQgDiL8eJykd8jE2g15Ky3WiuiKc65GwwkL7uvwY6pgEMPMqFgXSoXq8CF%2B0gqGCxLNTyJkzyqDp1TxmMo0sCybginAuw%2BW7Y7dszR3QXNL6APSBgMFbL81SR25wVh7BfIG5FwVGPx3W4g7%2FwC9SttG1eLphh81MWYP1a2wF2rjxYCJ1zQGKWrR09PJW4Ix9AxgJclsQ1WOc9qcT7krfO6RHqQR6jIXLsd7WB1eOA3vIsusekmlgE0vOE97ZcNQIq%2FRe9rPIO&X-Amz-Signature=439fb4d962e64e6987ff0f1bf2c90b84f7585bda21ccaea1f72e8845c41dd59e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NCZU434%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDOOp6lugjiEMECv%2FIu1CIYQLJZBrXZ9UGsvh73Ua9u2AiBYKtEhscYg7QO3G0kDrvLPVHvB4TEVyo%2FrW3StaTzBKiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqXqRhvp%2BBp1jXYA5KtwDJPAXesDV46nXjSVaZr388YIx6wMLgUZgXhC2ZzPhVyJ%2BoTzZtAsmn%2F31jaJCLSgE3bU5%2BQIyxJrtMdo79TlL%2B42H%2FeUKwXchyZiSXmDGKTBUVTud3ultasAscnYfFAZWaGC6dZDEi2PKgnOJ3ObSx%2BTiwO4az25Pne2INzebt%2FFUOGXY7m8eXGDr%2FavQypICMya94NMvpJUQO2BPNrkN9ttNBf2mDlK%2B5hH7Mfoop%2BwQJkkPU5cC87B6wIpbpEt4vaIyn09jyT7ZZrA1KCzvausmQyrI6opO%2B8R2CEKL6XeDjRNGNzH1dLRx0S3WPKHgnoqIqIIvSCcBKRQmIjjeK1CPkIxyooBDEOxvszjVgIdhBFmjOR%2B%2BA8TZ8TdTiRQbMus7qNFqu35ADL6CvJ2AP%2Bsh12zM9fF8JpfY52dnbjw8EboVcxJX4anKx3FWAnxIKHFQJvmvKcskP8rn8Ap1BPWEnNaty5%2FIU4HS19BuHB9Itf%2Bv92%2FVrqQ%2BwaumcXZOuCy%2BBmRxIVda%2F0igLSSpskcyyMudTFonT7DFtsWIcdaZJQh%2FKs2pbtORcKfoIYMkMHElBgj4dM6%2FqJ%2Fql%2BOktCyp0vUMQgDiL8eJykd8jE2g15Ky3WiuiKc65GwwkL7uvwY6pgEMPMqFgXSoXq8CF%2B0gqGCxLNTyJkzyqDp1TxmMo0sCybginAuw%2BW7Y7dszR3QXNL6APSBgMFbL81SR25wVh7BfIG5FwVGPx3W4g7%2FwC9SttG1eLphh81MWYP1a2wF2rjxYCJ1zQGKWrR09PJW4Ix9AxgJclsQ1WOc9qcT7krfO6RHqQR6jIXLsd7WB1eOA3vIsusekmlgE0vOE97ZcNQIq%2FRe9rPIO&X-Amz-Signature=f67d3fcd240065c8c542031dbed6682082edb30b862a0fbfcf85f6697c868158&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NCZU434%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDOOp6lugjiEMECv%2FIu1CIYQLJZBrXZ9UGsvh73Ua9u2AiBYKtEhscYg7QO3G0kDrvLPVHvB4TEVyo%2FrW3StaTzBKiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqXqRhvp%2BBp1jXYA5KtwDJPAXesDV46nXjSVaZr388YIx6wMLgUZgXhC2ZzPhVyJ%2BoTzZtAsmn%2F31jaJCLSgE3bU5%2BQIyxJrtMdo79TlL%2B42H%2FeUKwXchyZiSXmDGKTBUVTud3ultasAscnYfFAZWaGC6dZDEi2PKgnOJ3ObSx%2BTiwO4az25Pne2INzebt%2FFUOGXY7m8eXGDr%2FavQypICMya94NMvpJUQO2BPNrkN9ttNBf2mDlK%2B5hH7Mfoop%2BwQJkkPU5cC87B6wIpbpEt4vaIyn09jyT7ZZrA1KCzvausmQyrI6opO%2B8R2CEKL6XeDjRNGNzH1dLRx0S3WPKHgnoqIqIIvSCcBKRQmIjjeK1CPkIxyooBDEOxvszjVgIdhBFmjOR%2B%2BA8TZ8TdTiRQbMus7qNFqu35ADL6CvJ2AP%2Bsh12zM9fF8JpfY52dnbjw8EboVcxJX4anKx3FWAnxIKHFQJvmvKcskP8rn8Ap1BPWEnNaty5%2FIU4HS19BuHB9Itf%2Bv92%2FVrqQ%2BwaumcXZOuCy%2BBmRxIVda%2F0igLSSpskcyyMudTFonT7DFtsWIcdaZJQh%2FKs2pbtORcKfoIYMkMHElBgj4dM6%2FqJ%2Fql%2BOktCyp0vUMQgDiL8eJykd8jE2g15Ky3WiuiKc65GwwkL7uvwY6pgEMPMqFgXSoXq8CF%2B0gqGCxLNTyJkzyqDp1TxmMo0sCybginAuw%2BW7Y7dszR3QXNL6APSBgMFbL81SR25wVh7BfIG5FwVGPx3W4g7%2FwC9SttG1eLphh81MWYP1a2wF2rjxYCJ1zQGKWrR09PJW4Ix9AxgJclsQ1WOc9qcT7krfO6RHqQR6jIXLsd7WB1eOA3vIsusekmlgE0vOE97ZcNQIq%2FRe9rPIO&X-Amz-Signature=4fead5f98fcca5922a85eea7f8c20c934e259ed2d51c04e67783c1479c68e3ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
