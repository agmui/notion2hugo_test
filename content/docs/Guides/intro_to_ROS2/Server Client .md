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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5H5XW2E%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxULIsxbZSAyBdcWBM%2FoEqNyboPnmDNt%2Fh9PtLXXXiUAiA4R5p41PK40zK1Weszqe5nVshcH9GbkPtNBTFU5LjrTSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrW4zUY2w%2BDQe4iFfKtwD91AFPXQNmXNoi0Ap8T7mTkTFI4g0yCxwVk7k%2FqZRWLG73QVY9J6PDOmoPduAEfwF0exiHya%2BhqXX547U9SPrT%2Fn1M1QdzkVUF120utumJ5piHeaHczicoERHa6NukLHSIDwujuTTbSM7P2Xrs74%2BlEyDDRedznPIL4%2FMAYoR%2BE3IrNK5M%2BoHOlDJX04Y5TXcDut25FYF1JsXZ%2BZ5AgAZ0cX2JmTpKBtdc8D4dTeLXoF%2BPZXtPSEJ5K%2B1%2FVtuUk8hgTVGCy2jPXU3UTayV700ZrjvN8QQEiWA0bu%2B4wgzLYsUFapQLpx4E5rdWeUMP%2B4BMh%2BUM0BlGooL%2BlPlTHFgSgLcQbJ57wwM0xjc5CZ61CzZAjLCIxgooENKa2pGWVYMt88X%2Fkjla8SvRx00edwlMPrDd5DMovr2EuAbBVbj9CQOqlRH%2BY2hY9oLEJ88I4Y%2B%2F0r8KudnJw%2BDLTt3yQBMGLnKUq9gLnlg4QaUKuAZuM6miTe2UGkMwRYZClCpABJo9bMFOiAHS04EA5qIBL3wy8VbT0IYeAzKXOiYcFV%2FgM49hZGd96X7RZp0R1tCOPx9ZGyDzcWUOY4gTkmpbgS%2FX5qui7Msv96SIJR%2FU5nFlb7N643WzneYoMCpzAMw%2FsTtvAY6pgF4weqU1mocQsDA2OCBfC3ovfl9Oa3pNYiCSposTD26Xhy6w8lU6cu797wqqbOkvOTJHEsafbxY%2B%2FGsQQm1K9mt4pXYh%2BD%2BHdCF9pcDeNHxTLFZxclTGnPNvw9X9ayOdfjQi9zWUFv2TmmsIM%2Fg7oTtsUxK2OVYuYXWlEA9Pdxu6tB4uwu2%2FmzyffpYpqagbAG5g8jKrwh3pKQl6bt55Y%2FXVdVvWX3Y&X-Amz-Signature=983f4f35849f6d642a7abe90b629067d290c559496ca7ec5dc593e14977b1b72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5H5XW2E%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxULIsxbZSAyBdcWBM%2FoEqNyboPnmDNt%2Fh9PtLXXXiUAiA4R5p41PK40zK1Weszqe5nVshcH9GbkPtNBTFU5LjrTSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrW4zUY2w%2BDQe4iFfKtwD91AFPXQNmXNoi0Ap8T7mTkTFI4g0yCxwVk7k%2FqZRWLG73QVY9J6PDOmoPduAEfwF0exiHya%2BhqXX547U9SPrT%2Fn1M1QdzkVUF120utumJ5piHeaHczicoERHa6NukLHSIDwujuTTbSM7P2Xrs74%2BlEyDDRedznPIL4%2FMAYoR%2BE3IrNK5M%2BoHOlDJX04Y5TXcDut25FYF1JsXZ%2BZ5AgAZ0cX2JmTpKBtdc8D4dTeLXoF%2BPZXtPSEJ5K%2B1%2FVtuUk8hgTVGCy2jPXU3UTayV700ZrjvN8QQEiWA0bu%2B4wgzLYsUFapQLpx4E5rdWeUMP%2B4BMh%2BUM0BlGooL%2BlPlTHFgSgLcQbJ57wwM0xjc5CZ61CzZAjLCIxgooENKa2pGWVYMt88X%2Fkjla8SvRx00edwlMPrDd5DMovr2EuAbBVbj9CQOqlRH%2BY2hY9oLEJ88I4Y%2B%2F0r8KudnJw%2BDLTt3yQBMGLnKUq9gLnlg4QaUKuAZuM6miTe2UGkMwRYZClCpABJo9bMFOiAHS04EA5qIBL3wy8VbT0IYeAzKXOiYcFV%2FgM49hZGd96X7RZp0R1tCOPx9ZGyDzcWUOY4gTkmpbgS%2FX5qui7Msv96SIJR%2FU5nFlb7N643WzneYoMCpzAMw%2FsTtvAY6pgF4weqU1mocQsDA2OCBfC3ovfl9Oa3pNYiCSposTD26Xhy6w8lU6cu797wqqbOkvOTJHEsafbxY%2B%2FGsQQm1K9mt4pXYh%2BD%2BHdCF9pcDeNHxTLFZxclTGnPNvw9X9ayOdfjQi9zWUFv2TmmsIM%2Fg7oTtsUxK2OVYuYXWlEA9Pdxu6tB4uwu2%2FmzyffpYpqagbAG5g8jKrwh3pKQl6bt55Y%2FXVdVvWX3Y&X-Amz-Signature=3c773599f2d08d76c1fc52eae3d8b3dbae4d16f616c2f377da8d027eaef18b75&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5H5XW2E%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxULIsxbZSAyBdcWBM%2FoEqNyboPnmDNt%2Fh9PtLXXXiUAiA4R5p41PK40zK1Weszqe5nVshcH9GbkPtNBTFU5LjrTSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrW4zUY2w%2BDQe4iFfKtwD91AFPXQNmXNoi0Ap8T7mTkTFI4g0yCxwVk7k%2FqZRWLG73QVY9J6PDOmoPduAEfwF0exiHya%2BhqXX547U9SPrT%2Fn1M1QdzkVUF120utumJ5piHeaHczicoERHa6NukLHSIDwujuTTbSM7P2Xrs74%2BlEyDDRedznPIL4%2FMAYoR%2BE3IrNK5M%2BoHOlDJX04Y5TXcDut25FYF1JsXZ%2BZ5AgAZ0cX2JmTpKBtdc8D4dTeLXoF%2BPZXtPSEJ5K%2B1%2FVtuUk8hgTVGCy2jPXU3UTayV700ZrjvN8QQEiWA0bu%2B4wgzLYsUFapQLpx4E5rdWeUMP%2B4BMh%2BUM0BlGooL%2BlPlTHFgSgLcQbJ57wwM0xjc5CZ61CzZAjLCIxgooENKa2pGWVYMt88X%2Fkjla8SvRx00edwlMPrDd5DMovr2EuAbBVbj9CQOqlRH%2BY2hY9oLEJ88I4Y%2B%2F0r8KudnJw%2BDLTt3yQBMGLnKUq9gLnlg4QaUKuAZuM6miTe2UGkMwRYZClCpABJo9bMFOiAHS04EA5qIBL3wy8VbT0IYeAzKXOiYcFV%2FgM49hZGd96X7RZp0R1tCOPx9ZGyDzcWUOY4gTkmpbgS%2FX5qui7Msv96SIJR%2FU5nFlb7N643WzneYoMCpzAMw%2FsTtvAY6pgF4weqU1mocQsDA2OCBfC3ovfl9Oa3pNYiCSposTD26Xhy6w8lU6cu797wqqbOkvOTJHEsafbxY%2B%2FGsQQm1K9mt4pXYh%2BD%2BHdCF9pcDeNHxTLFZxclTGnPNvw9X9ayOdfjQi9zWUFv2TmmsIM%2Fg7oTtsUxK2OVYuYXWlEA9Pdxu6tB4uwu2%2FmzyffpYpqagbAG5g8jKrwh3pKQl6bt55Y%2FXVdVvWX3Y&X-Amz-Signature=df8f156a60467897480ecb793ed3fb4eddeb73757ee989d06365f0e167bf7d99&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5H5XW2E%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxULIsxbZSAyBdcWBM%2FoEqNyboPnmDNt%2Fh9PtLXXXiUAiA4R5p41PK40zK1Weszqe5nVshcH9GbkPtNBTFU5LjrTSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrW4zUY2w%2BDQe4iFfKtwD91AFPXQNmXNoi0Ap8T7mTkTFI4g0yCxwVk7k%2FqZRWLG73QVY9J6PDOmoPduAEfwF0exiHya%2BhqXX547U9SPrT%2Fn1M1QdzkVUF120utumJ5piHeaHczicoERHa6NukLHSIDwujuTTbSM7P2Xrs74%2BlEyDDRedznPIL4%2FMAYoR%2BE3IrNK5M%2BoHOlDJX04Y5TXcDut25FYF1JsXZ%2BZ5AgAZ0cX2JmTpKBtdc8D4dTeLXoF%2BPZXtPSEJ5K%2B1%2FVtuUk8hgTVGCy2jPXU3UTayV700ZrjvN8QQEiWA0bu%2B4wgzLYsUFapQLpx4E5rdWeUMP%2B4BMh%2BUM0BlGooL%2BlPlTHFgSgLcQbJ57wwM0xjc5CZ61CzZAjLCIxgooENKa2pGWVYMt88X%2Fkjla8SvRx00edwlMPrDd5DMovr2EuAbBVbj9CQOqlRH%2BY2hY9oLEJ88I4Y%2B%2F0r8KudnJw%2BDLTt3yQBMGLnKUq9gLnlg4QaUKuAZuM6miTe2UGkMwRYZClCpABJo9bMFOiAHS04EA5qIBL3wy8VbT0IYeAzKXOiYcFV%2FgM49hZGd96X7RZp0R1tCOPx9ZGyDzcWUOY4gTkmpbgS%2FX5qui7Msv96SIJR%2FU5nFlb7N643WzneYoMCpzAMw%2FsTtvAY6pgF4weqU1mocQsDA2OCBfC3ovfl9Oa3pNYiCSposTD26Xhy6w8lU6cu797wqqbOkvOTJHEsafbxY%2B%2FGsQQm1K9mt4pXYh%2BD%2BHdCF9pcDeNHxTLFZxclTGnPNvw9X9ayOdfjQi9zWUFv2TmmsIM%2Fg7oTtsUxK2OVYuYXWlEA9Pdxu6tB4uwu2%2FmzyffpYpqagbAG5g8jKrwh3pKQl6bt55Y%2FXVdVvWX3Y&X-Amz-Signature=e96b836916df301ffa62ec1f14f624cd5a0eb5208fbdaa4fc103e44d75134774&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5H5XW2E%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxULIsxbZSAyBdcWBM%2FoEqNyboPnmDNt%2Fh9PtLXXXiUAiA4R5p41PK40zK1Weszqe5nVshcH9GbkPtNBTFU5LjrTSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrW4zUY2w%2BDQe4iFfKtwD91AFPXQNmXNoi0Ap8T7mTkTFI4g0yCxwVk7k%2FqZRWLG73QVY9J6PDOmoPduAEfwF0exiHya%2BhqXX547U9SPrT%2Fn1M1QdzkVUF120utumJ5piHeaHczicoERHa6NukLHSIDwujuTTbSM7P2Xrs74%2BlEyDDRedznPIL4%2FMAYoR%2BE3IrNK5M%2BoHOlDJX04Y5TXcDut25FYF1JsXZ%2BZ5AgAZ0cX2JmTpKBtdc8D4dTeLXoF%2BPZXtPSEJ5K%2B1%2FVtuUk8hgTVGCy2jPXU3UTayV700ZrjvN8QQEiWA0bu%2B4wgzLYsUFapQLpx4E5rdWeUMP%2B4BMh%2BUM0BlGooL%2BlPlTHFgSgLcQbJ57wwM0xjc5CZ61CzZAjLCIxgooENKa2pGWVYMt88X%2Fkjla8SvRx00edwlMPrDd5DMovr2EuAbBVbj9CQOqlRH%2BY2hY9oLEJ88I4Y%2B%2F0r8KudnJw%2BDLTt3yQBMGLnKUq9gLnlg4QaUKuAZuM6miTe2UGkMwRYZClCpABJo9bMFOiAHS04EA5qIBL3wy8VbT0IYeAzKXOiYcFV%2FgM49hZGd96X7RZp0R1tCOPx9ZGyDzcWUOY4gTkmpbgS%2FX5qui7Msv96SIJR%2FU5nFlb7N643WzneYoMCpzAMw%2FsTtvAY6pgF4weqU1mocQsDA2OCBfC3ovfl9Oa3pNYiCSposTD26Xhy6w8lU6cu797wqqbOkvOTJHEsafbxY%2B%2FGsQQm1K9mt4pXYh%2BD%2BHdCF9pcDeNHxTLFZxclTGnPNvw9X9ayOdfjQi9zWUFv2TmmsIM%2Fg7oTtsUxK2OVYuYXWlEA9Pdxu6tB4uwu2%2FmzyffpYpqagbAG5g8jKrwh3pKQl6bt55Y%2FXVdVvWX3Y&X-Amz-Signature=1490f853a4f74e92b983c182ad82658b0f84814bf4dcd29fad5c0e6231d8ebc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
