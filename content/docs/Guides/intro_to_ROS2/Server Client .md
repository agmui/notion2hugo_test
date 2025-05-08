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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKATFTHC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFPDZjx%2FPnyY0GfMmt2ZmFTsotKtXu7flwnkXYWjtRpAiBB3tiMbZxA0vbNdNInNeK1oByo06iBBzh0M8GZNgO0Xyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMcrdigbzyYv%2BEobVEKtwDMoEoGpM23d6SManjYyJpf34KhmltTM7P1ZP7voNpec5e16FGqc6Ss0Wdb8zwtvUTUozqoPSFaX%2Fvthnm4d4vZTu5mIo9Urn9Tx%2Fv82KMXe7fphzCmAg2FJGrUMP1EkIb%2BMo0s8iwBSB7my6rnaTDW6vjoAObxMtFepTkfQV4n9xYjPn5Xcg%2FmvY4x7brG2264De0LLLB7xHlIEDlwp2l48CMSmKoia1O6HvVaOhU2Z%2B1UOrPIEvj55JFFqC%2BVfouaHSGyMF%2F8uLqgpmYBykKHoPQOW1q%2BJBkJzluXauli5p5u0%2FS97sedrbByzs%2BORQ8e83I0k0khNcsodRULmWHaaJhr2iDacxN40Wdqwu99qDWceGHHbxO1eOfe%2B8X0ec2zX6tyuQeia6g6eBltMeuyxwEG%2FxCnq351pTURL4VmM5nH%2FtEgx7KOt5KZcZRAKg8ZHyxo%2BuhwgvoqkxSPCxbrYBoW%2FB5ih19hupDyJUqiXnIivruDBWLHhkZp1w5MoSd%2BNiopbwyes%2F7S%2BF5M04PzBuEELdyxhbeRJRDDIRvDeSDenPUVbHsNeLsg2%2B67cwvT%2FAQBagR8H2GR48xKgRbu9Ge2pDBeZ%2BAmqBZ5mGJrLbZgKz2ap9hmoaCZnow8t%2FxwAY6pgHeLBM%2B5OoXgyYkBOHDJADlAnOGO1XXxb7EB58EINYt0MjWsnqoJ39GBsY69JJOoxJxTt%2FHzkPYFxQNVAw%2BmoWv4%2F56y%2BewbVEtyjv4iXVpWAqWZ2mNARQtwjhT3NePt3uiaEDBjgYU14HR6sMNaMCWJGVkBsT2w%2Bqb5Z%2F5KqsnDggg54Zk56DsDwayXodJ7TMhHWj7IQVXe26hdNmaRCwz%2BDs7aBmW&X-Amz-Signature=fafed0d88f8af36ed1ed8ede786448180825d1b6e12a6d480058cf032c8cb815&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKATFTHC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFPDZjx%2FPnyY0GfMmt2ZmFTsotKtXu7flwnkXYWjtRpAiBB3tiMbZxA0vbNdNInNeK1oByo06iBBzh0M8GZNgO0Xyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMcrdigbzyYv%2BEobVEKtwDMoEoGpM23d6SManjYyJpf34KhmltTM7P1ZP7voNpec5e16FGqc6Ss0Wdb8zwtvUTUozqoPSFaX%2Fvthnm4d4vZTu5mIo9Urn9Tx%2Fv82KMXe7fphzCmAg2FJGrUMP1EkIb%2BMo0s8iwBSB7my6rnaTDW6vjoAObxMtFepTkfQV4n9xYjPn5Xcg%2FmvY4x7brG2264De0LLLB7xHlIEDlwp2l48CMSmKoia1O6HvVaOhU2Z%2B1UOrPIEvj55JFFqC%2BVfouaHSGyMF%2F8uLqgpmYBykKHoPQOW1q%2BJBkJzluXauli5p5u0%2FS97sedrbByzs%2BORQ8e83I0k0khNcsodRULmWHaaJhr2iDacxN40Wdqwu99qDWceGHHbxO1eOfe%2B8X0ec2zX6tyuQeia6g6eBltMeuyxwEG%2FxCnq351pTURL4VmM5nH%2FtEgx7KOt5KZcZRAKg8ZHyxo%2BuhwgvoqkxSPCxbrYBoW%2FB5ih19hupDyJUqiXnIivruDBWLHhkZp1w5MoSd%2BNiopbwyes%2F7S%2BF5M04PzBuEELdyxhbeRJRDDIRvDeSDenPUVbHsNeLsg2%2B67cwvT%2FAQBagR8H2GR48xKgRbu9Ge2pDBeZ%2BAmqBZ5mGJrLbZgKz2ap9hmoaCZnow8t%2FxwAY6pgHeLBM%2B5OoXgyYkBOHDJADlAnOGO1XXxb7EB58EINYt0MjWsnqoJ39GBsY69JJOoxJxTt%2FHzkPYFxQNVAw%2BmoWv4%2F56y%2BewbVEtyjv4iXVpWAqWZ2mNARQtwjhT3NePt3uiaEDBjgYU14HR6sMNaMCWJGVkBsT2w%2Bqb5Z%2F5KqsnDggg54Zk56DsDwayXodJ7TMhHWj7IQVXe26hdNmaRCwz%2BDs7aBmW&X-Amz-Signature=6346362469ad37d3ea2a56f9563446b3b102102d8fea63403091a772ac3faa10&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKATFTHC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFPDZjx%2FPnyY0GfMmt2ZmFTsotKtXu7flwnkXYWjtRpAiBB3tiMbZxA0vbNdNInNeK1oByo06iBBzh0M8GZNgO0Xyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMcrdigbzyYv%2BEobVEKtwDMoEoGpM23d6SManjYyJpf34KhmltTM7P1ZP7voNpec5e16FGqc6Ss0Wdb8zwtvUTUozqoPSFaX%2Fvthnm4d4vZTu5mIo9Urn9Tx%2Fv82KMXe7fphzCmAg2FJGrUMP1EkIb%2BMo0s8iwBSB7my6rnaTDW6vjoAObxMtFepTkfQV4n9xYjPn5Xcg%2FmvY4x7brG2264De0LLLB7xHlIEDlwp2l48CMSmKoia1O6HvVaOhU2Z%2B1UOrPIEvj55JFFqC%2BVfouaHSGyMF%2F8uLqgpmYBykKHoPQOW1q%2BJBkJzluXauli5p5u0%2FS97sedrbByzs%2BORQ8e83I0k0khNcsodRULmWHaaJhr2iDacxN40Wdqwu99qDWceGHHbxO1eOfe%2B8X0ec2zX6tyuQeia6g6eBltMeuyxwEG%2FxCnq351pTURL4VmM5nH%2FtEgx7KOt5KZcZRAKg8ZHyxo%2BuhwgvoqkxSPCxbrYBoW%2FB5ih19hupDyJUqiXnIivruDBWLHhkZp1w5MoSd%2BNiopbwyes%2F7S%2BF5M04PzBuEELdyxhbeRJRDDIRvDeSDenPUVbHsNeLsg2%2B67cwvT%2FAQBagR8H2GR48xKgRbu9Ge2pDBeZ%2BAmqBZ5mGJrLbZgKz2ap9hmoaCZnow8t%2FxwAY6pgHeLBM%2B5OoXgyYkBOHDJADlAnOGO1XXxb7EB58EINYt0MjWsnqoJ39GBsY69JJOoxJxTt%2FHzkPYFxQNVAw%2BmoWv4%2F56y%2BewbVEtyjv4iXVpWAqWZ2mNARQtwjhT3NePt3uiaEDBjgYU14HR6sMNaMCWJGVkBsT2w%2Bqb5Z%2F5KqsnDggg54Zk56DsDwayXodJ7TMhHWj7IQVXe26hdNmaRCwz%2BDs7aBmW&X-Amz-Signature=d8fb4665da4d7cf6316dbb9b85404e45e1e329217e4b40f66c98b0417f758ede&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKATFTHC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFPDZjx%2FPnyY0GfMmt2ZmFTsotKtXu7flwnkXYWjtRpAiBB3tiMbZxA0vbNdNInNeK1oByo06iBBzh0M8GZNgO0Xyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMcrdigbzyYv%2BEobVEKtwDMoEoGpM23d6SManjYyJpf34KhmltTM7P1ZP7voNpec5e16FGqc6Ss0Wdb8zwtvUTUozqoPSFaX%2Fvthnm4d4vZTu5mIo9Urn9Tx%2Fv82KMXe7fphzCmAg2FJGrUMP1EkIb%2BMo0s8iwBSB7my6rnaTDW6vjoAObxMtFepTkfQV4n9xYjPn5Xcg%2FmvY4x7brG2264De0LLLB7xHlIEDlwp2l48CMSmKoia1O6HvVaOhU2Z%2B1UOrPIEvj55JFFqC%2BVfouaHSGyMF%2F8uLqgpmYBykKHoPQOW1q%2BJBkJzluXauli5p5u0%2FS97sedrbByzs%2BORQ8e83I0k0khNcsodRULmWHaaJhr2iDacxN40Wdqwu99qDWceGHHbxO1eOfe%2B8X0ec2zX6tyuQeia6g6eBltMeuyxwEG%2FxCnq351pTURL4VmM5nH%2FtEgx7KOt5KZcZRAKg8ZHyxo%2BuhwgvoqkxSPCxbrYBoW%2FB5ih19hupDyJUqiXnIivruDBWLHhkZp1w5MoSd%2BNiopbwyes%2F7S%2BF5M04PzBuEELdyxhbeRJRDDIRvDeSDenPUVbHsNeLsg2%2B67cwvT%2FAQBagR8H2GR48xKgRbu9Ge2pDBeZ%2BAmqBZ5mGJrLbZgKz2ap9hmoaCZnow8t%2FxwAY6pgHeLBM%2B5OoXgyYkBOHDJADlAnOGO1XXxb7EB58EINYt0MjWsnqoJ39GBsY69JJOoxJxTt%2FHzkPYFxQNVAw%2BmoWv4%2F56y%2BewbVEtyjv4iXVpWAqWZ2mNARQtwjhT3NePt3uiaEDBjgYU14HR6sMNaMCWJGVkBsT2w%2Bqb5Z%2F5KqsnDggg54Zk56DsDwayXodJ7TMhHWj7IQVXe26hdNmaRCwz%2BDs7aBmW&X-Amz-Signature=f80747b67db0816b86f4bccd2ce49a7f704c0495f547a6b37ee13b2a4c61b102&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKATFTHC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFPDZjx%2FPnyY0GfMmt2ZmFTsotKtXu7flwnkXYWjtRpAiBB3tiMbZxA0vbNdNInNeK1oByo06iBBzh0M8GZNgO0Xyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMcrdigbzyYv%2BEobVEKtwDMoEoGpM23d6SManjYyJpf34KhmltTM7P1ZP7voNpec5e16FGqc6Ss0Wdb8zwtvUTUozqoPSFaX%2Fvthnm4d4vZTu5mIo9Urn9Tx%2Fv82KMXe7fphzCmAg2FJGrUMP1EkIb%2BMo0s8iwBSB7my6rnaTDW6vjoAObxMtFepTkfQV4n9xYjPn5Xcg%2FmvY4x7brG2264De0LLLB7xHlIEDlwp2l48CMSmKoia1O6HvVaOhU2Z%2B1UOrPIEvj55JFFqC%2BVfouaHSGyMF%2F8uLqgpmYBykKHoPQOW1q%2BJBkJzluXauli5p5u0%2FS97sedrbByzs%2BORQ8e83I0k0khNcsodRULmWHaaJhr2iDacxN40Wdqwu99qDWceGHHbxO1eOfe%2B8X0ec2zX6tyuQeia6g6eBltMeuyxwEG%2FxCnq351pTURL4VmM5nH%2FtEgx7KOt5KZcZRAKg8ZHyxo%2BuhwgvoqkxSPCxbrYBoW%2FB5ih19hupDyJUqiXnIivruDBWLHhkZp1w5MoSd%2BNiopbwyes%2F7S%2BF5M04PzBuEELdyxhbeRJRDDIRvDeSDenPUVbHsNeLsg2%2B67cwvT%2FAQBagR8H2GR48xKgRbu9Ge2pDBeZ%2BAmqBZ5mGJrLbZgKz2ap9hmoaCZnow8t%2FxwAY6pgHeLBM%2B5OoXgyYkBOHDJADlAnOGO1XXxb7EB58EINYt0MjWsnqoJ39GBsY69JJOoxJxTt%2FHzkPYFxQNVAw%2BmoWv4%2F56y%2BewbVEtyjv4iXVpWAqWZ2mNARQtwjhT3NePt3uiaEDBjgYU14HR6sMNaMCWJGVkBsT2w%2Bqb5Z%2F5KqsnDggg54Zk56DsDwayXodJ7TMhHWj7IQVXe26hdNmaRCwz%2BDs7aBmW&X-Amz-Signature=deeb43c158bcef4813f33700653208db98a812184d224cb6ffa9e6732bbe8e62&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
