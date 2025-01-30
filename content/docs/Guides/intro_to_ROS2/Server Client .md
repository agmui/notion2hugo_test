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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HV46RE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvIKn2%2FS2zEaauSE5CdeMoHL1mj8mhfC3WHfr5GnXnwAiEAvcH4zLnYF3EhzoZZyGuutSRWLScB2HqhNSRJ%2F%2BSKyjsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVxmdqrox7pm%2FDSlCrcA2EUQygqEl%2BFRW4DXYLeprWVf3ZG%2FdnXlPz%2BX%2FtC5us8pR7Nc7W%2BvlQTz%2F5hNSth124%2FEkbrR%2FZTSjMBwnL63nq9gFS3NLYNOmlelA0ksDE9CsT5oaFkpLOpmPHgR5CDNVNTK3OA%2BsqVq%2F1hJlXtJIXTxIUKkRxDC6XEtIOPGY4qdqQRxgqqVs6YsTJ3kHxuUxFAKvGtbAUXnUx6HglIbwAFCuxXiSXWz4jNF6SEq%2Fkyz%2FTrlAC28pxfLgg%2B1baE0XSJ2sSXQ%2F0aPJxCNk%2FAi%2BTIQ8M0wBOvyci7Yknbrqn7Qln3mylA%2FpgSmz%2B%2FAKFqtBU8I%2BuE4htSlr%2BqYnLetbNk6bfE6a2DRe1e3gTvK585nykYtZg0Bl8fewi8zmLMqphmubNNExmTB%2BLbtPnZzmmi0DiyShbGtn07tj7lmt6QNzlpnbQchqbx0EbW7ep3Q3Pcto%2F7Xs7r4Ni2ZSPoCQ8HNwMxrqKo6hjknVcUQV%2Fy3iwTjik1%2FG0FlbMW9HcMtdamF4%2BHGoa37QyjSJaYaC9jroio6iWtiXoIrW4Xf871JJ3tFeOktedj5zNCsKY2mOgt6TszSn9kMMHK49IUASbKcv4gLYNcLkGsmMExn7Npm1hOuVaanRMvte2CMJaa7rwGOqUBLl16hMVHzMUPBPcXmkB2tawp3aRUnm1OFmlx7K9SBeHXzylTMb37X%2BFsltrv29idMFIQFfb%2FQ9W09skq3PU04GyweQY6KVbIeAieIbp872GXyqSzaAySTqU8RrqeJXqvcC9V5%2B54UAhM7CaPSeqnddL7e9lEh4EOFIGOrHinqM%2FjHdu6QzLR6Nh2aun9IYvpfseZnHBClvstUTYIHgJfgQqOVV7d&X-Amz-Signature=3605f8f159aa566fcd077f59c8f694de163c8802ff5d22f039f2ea62f27db0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HV46RE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvIKn2%2FS2zEaauSE5CdeMoHL1mj8mhfC3WHfr5GnXnwAiEAvcH4zLnYF3EhzoZZyGuutSRWLScB2HqhNSRJ%2F%2BSKyjsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVxmdqrox7pm%2FDSlCrcA2EUQygqEl%2BFRW4DXYLeprWVf3ZG%2FdnXlPz%2BX%2FtC5us8pR7Nc7W%2BvlQTz%2F5hNSth124%2FEkbrR%2FZTSjMBwnL63nq9gFS3NLYNOmlelA0ksDE9CsT5oaFkpLOpmPHgR5CDNVNTK3OA%2BsqVq%2F1hJlXtJIXTxIUKkRxDC6XEtIOPGY4qdqQRxgqqVs6YsTJ3kHxuUxFAKvGtbAUXnUx6HglIbwAFCuxXiSXWz4jNF6SEq%2Fkyz%2FTrlAC28pxfLgg%2B1baE0XSJ2sSXQ%2F0aPJxCNk%2FAi%2BTIQ8M0wBOvyci7Yknbrqn7Qln3mylA%2FpgSmz%2B%2FAKFqtBU8I%2BuE4htSlr%2BqYnLetbNk6bfE6a2DRe1e3gTvK585nykYtZg0Bl8fewi8zmLMqphmubNNExmTB%2BLbtPnZzmmi0DiyShbGtn07tj7lmt6QNzlpnbQchqbx0EbW7ep3Q3Pcto%2F7Xs7r4Ni2ZSPoCQ8HNwMxrqKo6hjknVcUQV%2Fy3iwTjik1%2FG0FlbMW9HcMtdamF4%2BHGoa37QyjSJaYaC9jroio6iWtiXoIrW4Xf871JJ3tFeOktedj5zNCsKY2mOgt6TszSn9kMMHK49IUASbKcv4gLYNcLkGsmMExn7Npm1hOuVaanRMvte2CMJaa7rwGOqUBLl16hMVHzMUPBPcXmkB2tawp3aRUnm1OFmlx7K9SBeHXzylTMb37X%2BFsltrv29idMFIQFfb%2FQ9W09skq3PU04GyweQY6KVbIeAieIbp872GXyqSzaAySTqU8RrqeJXqvcC9V5%2B54UAhM7CaPSeqnddL7e9lEh4EOFIGOrHinqM%2FjHdu6QzLR6Nh2aun9IYvpfseZnHBClvstUTYIHgJfgQqOVV7d&X-Amz-Signature=2453e5f94faf781566c07562d0eafe8f2ce09917726fd1698d435855d2e2dfda&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HV46RE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvIKn2%2FS2zEaauSE5CdeMoHL1mj8mhfC3WHfr5GnXnwAiEAvcH4zLnYF3EhzoZZyGuutSRWLScB2HqhNSRJ%2F%2BSKyjsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVxmdqrox7pm%2FDSlCrcA2EUQygqEl%2BFRW4DXYLeprWVf3ZG%2FdnXlPz%2BX%2FtC5us8pR7Nc7W%2BvlQTz%2F5hNSth124%2FEkbrR%2FZTSjMBwnL63nq9gFS3NLYNOmlelA0ksDE9CsT5oaFkpLOpmPHgR5CDNVNTK3OA%2BsqVq%2F1hJlXtJIXTxIUKkRxDC6XEtIOPGY4qdqQRxgqqVs6YsTJ3kHxuUxFAKvGtbAUXnUx6HglIbwAFCuxXiSXWz4jNF6SEq%2Fkyz%2FTrlAC28pxfLgg%2B1baE0XSJ2sSXQ%2F0aPJxCNk%2FAi%2BTIQ8M0wBOvyci7Yknbrqn7Qln3mylA%2FpgSmz%2B%2FAKFqtBU8I%2BuE4htSlr%2BqYnLetbNk6bfE6a2DRe1e3gTvK585nykYtZg0Bl8fewi8zmLMqphmubNNExmTB%2BLbtPnZzmmi0DiyShbGtn07tj7lmt6QNzlpnbQchqbx0EbW7ep3Q3Pcto%2F7Xs7r4Ni2ZSPoCQ8HNwMxrqKo6hjknVcUQV%2Fy3iwTjik1%2FG0FlbMW9HcMtdamF4%2BHGoa37QyjSJaYaC9jroio6iWtiXoIrW4Xf871JJ3tFeOktedj5zNCsKY2mOgt6TszSn9kMMHK49IUASbKcv4gLYNcLkGsmMExn7Npm1hOuVaanRMvte2CMJaa7rwGOqUBLl16hMVHzMUPBPcXmkB2tawp3aRUnm1OFmlx7K9SBeHXzylTMb37X%2BFsltrv29idMFIQFfb%2FQ9W09skq3PU04GyweQY6KVbIeAieIbp872GXyqSzaAySTqU8RrqeJXqvcC9V5%2B54UAhM7CaPSeqnddL7e9lEh4EOFIGOrHinqM%2FjHdu6QzLR6Nh2aun9IYvpfseZnHBClvstUTYIHgJfgQqOVV7d&X-Amz-Signature=9495f05e16dcf2fe3cd9148ecc556c5017264bc3f7cd9a0e0a790f91866ae764&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HV46RE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvIKn2%2FS2zEaauSE5CdeMoHL1mj8mhfC3WHfr5GnXnwAiEAvcH4zLnYF3EhzoZZyGuutSRWLScB2HqhNSRJ%2F%2BSKyjsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVxmdqrox7pm%2FDSlCrcA2EUQygqEl%2BFRW4DXYLeprWVf3ZG%2FdnXlPz%2BX%2FtC5us8pR7Nc7W%2BvlQTz%2F5hNSth124%2FEkbrR%2FZTSjMBwnL63nq9gFS3NLYNOmlelA0ksDE9CsT5oaFkpLOpmPHgR5CDNVNTK3OA%2BsqVq%2F1hJlXtJIXTxIUKkRxDC6XEtIOPGY4qdqQRxgqqVs6YsTJ3kHxuUxFAKvGtbAUXnUx6HglIbwAFCuxXiSXWz4jNF6SEq%2Fkyz%2FTrlAC28pxfLgg%2B1baE0XSJ2sSXQ%2F0aPJxCNk%2FAi%2BTIQ8M0wBOvyci7Yknbrqn7Qln3mylA%2FpgSmz%2B%2FAKFqtBU8I%2BuE4htSlr%2BqYnLetbNk6bfE6a2DRe1e3gTvK585nykYtZg0Bl8fewi8zmLMqphmubNNExmTB%2BLbtPnZzmmi0DiyShbGtn07tj7lmt6QNzlpnbQchqbx0EbW7ep3Q3Pcto%2F7Xs7r4Ni2ZSPoCQ8HNwMxrqKo6hjknVcUQV%2Fy3iwTjik1%2FG0FlbMW9HcMtdamF4%2BHGoa37QyjSJaYaC9jroio6iWtiXoIrW4Xf871JJ3tFeOktedj5zNCsKY2mOgt6TszSn9kMMHK49IUASbKcv4gLYNcLkGsmMExn7Npm1hOuVaanRMvte2CMJaa7rwGOqUBLl16hMVHzMUPBPcXmkB2tawp3aRUnm1OFmlx7K9SBeHXzylTMb37X%2BFsltrv29idMFIQFfb%2FQ9W09skq3PU04GyweQY6KVbIeAieIbp872GXyqSzaAySTqU8RrqeJXqvcC9V5%2B54UAhM7CaPSeqnddL7e9lEh4EOFIGOrHinqM%2FjHdu6QzLR6Nh2aun9IYvpfseZnHBClvstUTYIHgJfgQqOVV7d&X-Amz-Signature=b172680091e3c68da5abf35614635bcdcc28bcaf1bf51867e8733d70ffcd220a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HV46RE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvIKn2%2FS2zEaauSE5CdeMoHL1mj8mhfC3WHfr5GnXnwAiEAvcH4zLnYF3EhzoZZyGuutSRWLScB2HqhNSRJ%2F%2BSKyjsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVxmdqrox7pm%2FDSlCrcA2EUQygqEl%2BFRW4DXYLeprWVf3ZG%2FdnXlPz%2BX%2FtC5us8pR7Nc7W%2BvlQTz%2F5hNSth124%2FEkbrR%2FZTSjMBwnL63nq9gFS3NLYNOmlelA0ksDE9CsT5oaFkpLOpmPHgR5CDNVNTK3OA%2BsqVq%2F1hJlXtJIXTxIUKkRxDC6XEtIOPGY4qdqQRxgqqVs6YsTJ3kHxuUxFAKvGtbAUXnUx6HglIbwAFCuxXiSXWz4jNF6SEq%2Fkyz%2FTrlAC28pxfLgg%2B1baE0XSJ2sSXQ%2F0aPJxCNk%2FAi%2BTIQ8M0wBOvyci7Yknbrqn7Qln3mylA%2FpgSmz%2B%2FAKFqtBU8I%2BuE4htSlr%2BqYnLetbNk6bfE6a2DRe1e3gTvK585nykYtZg0Bl8fewi8zmLMqphmubNNExmTB%2BLbtPnZzmmi0DiyShbGtn07tj7lmt6QNzlpnbQchqbx0EbW7ep3Q3Pcto%2F7Xs7r4Ni2ZSPoCQ8HNwMxrqKo6hjknVcUQV%2Fy3iwTjik1%2FG0FlbMW9HcMtdamF4%2BHGoa37QyjSJaYaC9jroio6iWtiXoIrW4Xf871JJ3tFeOktedj5zNCsKY2mOgt6TszSn9kMMHK49IUASbKcv4gLYNcLkGsmMExn7Npm1hOuVaanRMvte2CMJaa7rwGOqUBLl16hMVHzMUPBPcXmkB2tawp3aRUnm1OFmlx7K9SBeHXzylTMb37X%2BFsltrv29idMFIQFfb%2FQ9W09skq3PU04GyweQY6KVbIeAieIbp872GXyqSzaAySTqU8RrqeJXqvcC9V5%2B54UAhM7CaPSeqnddL7e9lEh4EOFIGOrHinqM%2FjHdu6QzLR6Nh2aun9IYvpfseZnHBClvstUTYIHgJfgQqOVV7d&X-Amz-Signature=72e32c153a6938d26c55980037fb2fbac8946aa5c3f4830ccccf810f92cc32f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
