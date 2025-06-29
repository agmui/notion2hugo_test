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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEP3YXB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCILjsv%2FnOukQ%2BGWvOtXFhO1rLYlOlBNNvIevFhh6qG8QIgRZ1Pj3c7jFukEbhIWW1%2BSuY3giiJM2omBykV4XeMG9kqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpfg9U%2FIz%2F%2Bv%2BlCECrcAwgzg0ltUckg4rm77tGrPyzqSFPQieOLA5SBVxcu4cuj1htMjXrVCaFRqcpCuysFanj%2Bv7zFf6JQbNCIxyZFdSL8iRIsisBPYUJxbcZNfMeDV6VeZ8FVLTbep1dp7Bi37cPuG2zviK0ecpkcApcQHSofMtW54Lb3kv6Woo6x93f8hrRtp8IQI8ZX77Jj6EydRqNDjp5E6IEqXq2dHTBjhtudJ5r2R9DQnDBjzor9UPcJxs18AZYqKcxYmvWhshpNUmUEtt%2BUVhCTcejDbJ1SzXUfNem2zMrOXMsrykqSSQmNATRcxB%2BGzBFrKjP23ql%2BoHZm8QefDMPzt%2FGJbfJAtxwPHpgErSw6M6K4dcEYxbUa4P7keD%2BBoFicCjrnF9yE75glT2Lt44jp1cCmS53KjccLTeD1mx20Oe49%2BgMcAzoMbuyzMgHKCwkl2AGDruMPlfEoN576UWXiy4Q%2Bw2L8Q5pVj2JhkMXgoMGgbZsnARpM0juazx2uZB3gL2BG62d07kgvM0y7QHNzuto6UrGZBN1vCPrxu4QnCSdvjWtc5oYdCykqGYy8h0%2FDWMdp5QFdJlPsSsGPEZiLbX5lhC0s6Ow7NGEBvNXVYBxtCA0ORU6IDbDzY%2FHdK%2BwkXyQKMMDohMMGOqUBIkwLpj6aCb4Db%2FvhVzE1Wtqk8N67O7KG8TmExlEOZoE5VwyXcmyUgj3CL0iWFDi3I3O%2FYkZXWWYKN2gqyIr1JBtaOMUlOWiZkRg0KgQMrqwCMTa2CyGbE%2FKzFUeOoCtwrLZRi5N8SUaDxK6ji98fw%2BQtdPA8%2F4ih0y1q3IhaTufV6qgoocYx3ABd1NAPuWooC%2Foy0ajQV%2Fy9znv%2FcY1i0lRjXRcH&X-Amz-Signature=87b3f375457655298c4075f906d364634eee71b27042c05bb78f57849b16af1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEP3YXB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCILjsv%2FnOukQ%2BGWvOtXFhO1rLYlOlBNNvIevFhh6qG8QIgRZ1Pj3c7jFukEbhIWW1%2BSuY3giiJM2omBykV4XeMG9kqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpfg9U%2FIz%2F%2Bv%2BlCECrcAwgzg0ltUckg4rm77tGrPyzqSFPQieOLA5SBVxcu4cuj1htMjXrVCaFRqcpCuysFanj%2Bv7zFf6JQbNCIxyZFdSL8iRIsisBPYUJxbcZNfMeDV6VeZ8FVLTbep1dp7Bi37cPuG2zviK0ecpkcApcQHSofMtW54Lb3kv6Woo6x93f8hrRtp8IQI8ZX77Jj6EydRqNDjp5E6IEqXq2dHTBjhtudJ5r2R9DQnDBjzor9UPcJxs18AZYqKcxYmvWhshpNUmUEtt%2BUVhCTcejDbJ1SzXUfNem2zMrOXMsrykqSSQmNATRcxB%2BGzBFrKjP23ql%2BoHZm8QefDMPzt%2FGJbfJAtxwPHpgErSw6M6K4dcEYxbUa4P7keD%2BBoFicCjrnF9yE75glT2Lt44jp1cCmS53KjccLTeD1mx20Oe49%2BgMcAzoMbuyzMgHKCwkl2AGDruMPlfEoN576UWXiy4Q%2Bw2L8Q5pVj2JhkMXgoMGgbZsnARpM0juazx2uZB3gL2BG62d07kgvM0y7QHNzuto6UrGZBN1vCPrxu4QnCSdvjWtc5oYdCykqGYy8h0%2FDWMdp5QFdJlPsSsGPEZiLbX5lhC0s6Ow7NGEBvNXVYBxtCA0ORU6IDbDzY%2FHdK%2BwkXyQKMMDohMMGOqUBIkwLpj6aCb4Db%2FvhVzE1Wtqk8N67O7KG8TmExlEOZoE5VwyXcmyUgj3CL0iWFDi3I3O%2FYkZXWWYKN2gqyIr1JBtaOMUlOWiZkRg0KgQMrqwCMTa2CyGbE%2FKzFUeOoCtwrLZRi5N8SUaDxK6ji98fw%2BQtdPA8%2F4ih0y1q3IhaTufV6qgoocYx3ABd1NAPuWooC%2Foy0ajQV%2Fy9znv%2FcY1i0lRjXRcH&X-Amz-Signature=22657d147a72d9614eef403542aafca434000c28421d823c51b28c7fa207868b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEP3YXB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCILjsv%2FnOukQ%2BGWvOtXFhO1rLYlOlBNNvIevFhh6qG8QIgRZ1Pj3c7jFukEbhIWW1%2BSuY3giiJM2omBykV4XeMG9kqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpfg9U%2FIz%2F%2Bv%2BlCECrcAwgzg0ltUckg4rm77tGrPyzqSFPQieOLA5SBVxcu4cuj1htMjXrVCaFRqcpCuysFanj%2Bv7zFf6JQbNCIxyZFdSL8iRIsisBPYUJxbcZNfMeDV6VeZ8FVLTbep1dp7Bi37cPuG2zviK0ecpkcApcQHSofMtW54Lb3kv6Woo6x93f8hrRtp8IQI8ZX77Jj6EydRqNDjp5E6IEqXq2dHTBjhtudJ5r2R9DQnDBjzor9UPcJxs18AZYqKcxYmvWhshpNUmUEtt%2BUVhCTcejDbJ1SzXUfNem2zMrOXMsrykqSSQmNATRcxB%2BGzBFrKjP23ql%2BoHZm8QefDMPzt%2FGJbfJAtxwPHpgErSw6M6K4dcEYxbUa4P7keD%2BBoFicCjrnF9yE75glT2Lt44jp1cCmS53KjccLTeD1mx20Oe49%2BgMcAzoMbuyzMgHKCwkl2AGDruMPlfEoN576UWXiy4Q%2Bw2L8Q5pVj2JhkMXgoMGgbZsnARpM0juazx2uZB3gL2BG62d07kgvM0y7QHNzuto6UrGZBN1vCPrxu4QnCSdvjWtc5oYdCykqGYy8h0%2FDWMdp5QFdJlPsSsGPEZiLbX5lhC0s6Ow7NGEBvNXVYBxtCA0ORU6IDbDzY%2FHdK%2BwkXyQKMMDohMMGOqUBIkwLpj6aCb4Db%2FvhVzE1Wtqk8N67O7KG8TmExlEOZoE5VwyXcmyUgj3CL0iWFDi3I3O%2FYkZXWWYKN2gqyIr1JBtaOMUlOWiZkRg0KgQMrqwCMTa2CyGbE%2FKzFUeOoCtwrLZRi5N8SUaDxK6ji98fw%2BQtdPA8%2F4ih0y1q3IhaTufV6qgoocYx3ABd1NAPuWooC%2Foy0ajQV%2Fy9znv%2FcY1i0lRjXRcH&X-Amz-Signature=a7c664a25fe74a45de7373989dfda9477eb3c7696572271f7c14f71660325004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEP3YXB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCILjsv%2FnOukQ%2BGWvOtXFhO1rLYlOlBNNvIevFhh6qG8QIgRZ1Pj3c7jFukEbhIWW1%2BSuY3giiJM2omBykV4XeMG9kqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpfg9U%2FIz%2F%2Bv%2BlCECrcAwgzg0ltUckg4rm77tGrPyzqSFPQieOLA5SBVxcu4cuj1htMjXrVCaFRqcpCuysFanj%2Bv7zFf6JQbNCIxyZFdSL8iRIsisBPYUJxbcZNfMeDV6VeZ8FVLTbep1dp7Bi37cPuG2zviK0ecpkcApcQHSofMtW54Lb3kv6Woo6x93f8hrRtp8IQI8ZX77Jj6EydRqNDjp5E6IEqXq2dHTBjhtudJ5r2R9DQnDBjzor9UPcJxs18AZYqKcxYmvWhshpNUmUEtt%2BUVhCTcejDbJ1SzXUfNem2zMrOXMsrykqSSQmNATRcxB%2BGzBFrKjP23ql%2BoHZm8QefDMPzt%2FGJbfJAtxwPHpgErSw6M6K4dcEYxbUa4P7keD%2BBoFicCjrnF9yE75glT2Lt44jp1cCmS53KjccLTeD1mx20Oe49%2BgMcAzoMbuyzMgHKCwkl2AGDruMPlfEoN576UWXiy4Q%2Bw2L8Q5pVj2JhkMXgoMGgbZsnARpM0juazx2uZB3gL2BG62d07kgvM0y7QHNzuto6UrGZBN1vCPrxu4QnCSdvjWtc5oYdCykqGYy8h0%2FDWMdp5QFdJlPsSsGPEZiLbX5lhC0s6Ow7NGEBvNXVYBxtCA0ORU6IDbDzY%2FHdK%2BwkXyQKMMDohMMGOqUBIkwLpj6aCb4Db%2FvhVzE1Wtqk8N67O7KG8TmExlEOZoE5VwyXcmyUgj3CL0iWFDi3I3O%2FYkZXWWYKN2gqyIr1JBtaOMUlOWiZkRg0KgQMrqwCMTa2CyGbE%2FKzFUeOoCtwrLZRi5N8SUaDxK6ji98fw%2BQtdPA8%2F4ih0y1q3IhaTufV6qgoocYx3ABd1NAPuWooC%2Foy0ajQV%2Fy9znv%2FcY1i0lRjXRcH&X-Amz-Signature=0c353a1d5731e6e387f712e8f48008f36fac0865b6616ca1d9fa36c33cf41473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEP3YXB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCILjsv%2FnOukQ%2BGWvOtXFhO1rLYlOlBNNvIevFhh6qG8QIgRZ1Pj3c7jFukEbhIWW1%2BSuY3giiJM2omBykV4XeMG9kqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpfg9U%2FIz%2F%2Bv%2BlCECrcAwgzg0ltUckg4rm77tGrPyzqSFPQieOLA5SBVxcu4cuj1htMjXrVCaFRqcpCuysFanj%2Bv7zFf6JQbNCIxyZFdSL8iRIsisBPYUJxbcZNfMeDV6VeZ8FVLTbep1dp7Bi37cPuG2zviK0ecpkcApcQHSofMtW54Lb3kv6Woo6x93f8hrRtp8IQI8ZX77Jj6EydRqNDjp5E6IEqXq2dHTBjhtudJ5r2R9DQnDBjzor9UPcJxs18AZYqKcxYmvWhshpNUmUEtt%2BUVhCTcejDbJ1SzXUfNem2zMrOXMsrykqSSQmNATRcxB%2BGzBFrKjP23ql%2BoHZm8QefDMPzt%2FGJbfJAtxwPHpgErSw6M6K4dcEYxbUa4P7keD%2BBoFicCjrnF9yE75glT2Lt44jp1cCmS53KjccLTeD1mx20Oe49%2BgMcAzoMbuyzMgHKCwkl2AGDruMPlfEoN576UWXiy4Q%2Bw2L8Q5pVj2JhkMXgoMGgbZsnARpM0juazx2uZB3gL2BG62d07kgvM0y7QHNzuto6UrGZBN1vCPrxu4QnCSdvjWtc5oYdCykqGYy8h0%2FDWMdp5QFdJlPsSsGPEZiLbX5lhC0s6Ow7NGEBvNXVYBxtCA0ORU6IDbDzY%2FHdK%2BwkXyQKMMDohMMGOqUBIkwLpj6aCb4Db%2FvhVzE1Wtqk8N67O7KG8TmExlEOZoE5VwyXcmyUgj3CL0iWFDi3I3O%2FYkZXWWYKN2gqyIr1JBtaOMUlOWiZkRg0KgQMrqwCMTa2CyGbE%2FKzFUeOoCtwrLZRi5N8SUaDxK6ji98fw%2BQtdPA8%2F4ih0y1q3IhaTufV6qgoocYx3ABd1NAPuWooC%2Foy0ajQV%2Fy9znv%2FcY1i0lRjXRcH&X-Amz-Signature=e089eee32fbdcdf2fa4a22c675fa99d422dd73a0932e4c6fe9e89799aeb0eb4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
