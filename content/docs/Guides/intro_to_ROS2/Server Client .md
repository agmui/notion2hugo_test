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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55WKIG4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDinDsLavE3f7uQ5yytjcHOWRd3O7GofpHmsm52iXGMOAIgA0aaeqaJ2ZQEH3WjUTxgBCiwH%2FGaLXyanK9rgFkhM8sq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIglVFc3AZYt1BsTTircAxupB6Wgdv386pX90KuQ8IGZWvoNOUiRFbIbLESxQuTJNe1d%2F80JM2JsKPKkd7CfDWNEe%2FxzXf5R2TDIMfzncdhRwEeKU33BvhWxbzK96b7yQSrJ9KzfhUPjjUL4MV5LPqAITLAGyQ1nTSi58wAJTXouLaHqB8pBqDp6V8xTGg4glDFWoMOzLWz85gBwisYY705ctjNnPPpMVoOr6UD0jEC294aEqsuDvgPm%2F%2B0Uugxac%2B1z3uirLxU8X%2FylgXrP%2FZuQiIkrkLZcjRlC7aeRoj6EDX7iqZRALlD%2FLnGAvEWgJwJ5PupWLAw3UhS1SotF7p9L9uoZVMdDPrVBuEyeqjJDvUakrcAX2Sl9GzYlruluV3oeH0DLW6loBaelAkXDsW7EXQ0XbzQOnCDIKphwkESiepTAblZ9%2BZgsaAU1HQmMSL5VXFAo9Ew1lZdSKDpJNSiRe%2BJJ5JSY6RksbiuvH7xXTpfEQrR7utN4%2Br6RVbMXJLQzYAcH%2FnKo61dh7a0Csol4IReaw3PRz6r2Ab89%2FejTDtgCx%2Fm1DlQrFRSqoPK95QYTEl3Mh0gGKQzm93R1keCYF%2FZd2nQx3fidkQ%2FjeNZC5Dg6%2BNHCJPEI77JEhqf1940sSbEE2cj4RyGHMIyWz8MGOqUBlquGYneDvIUGuir%2BVrIy5ZP7HZwkQDVHZehnHOOssDV%2FZDnTLdzD65IDkS2B8hpARs6SkKZ58%2FcpbQgbfmI3kBiYsKdJ8RHd6wkzZSXXigyH2161vLi9E2x6bzKhUnEmG9janooKEY2QIaBcMLTWkGNok9jX6a%2BYcTFGkgjsizRSXSQs%2BxGzA0OPV4xeSLfvIBSSCC3QWNbaoC7Zq0IFSJThihn%2F&X-Amz-Signature=27e4fa817250cb03d915ea8e3a2ee23eed7e361b72cfce5490a218ba6586a33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55WKIG4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDinDsLavE3f7uQ5yytjcHOWRd3O7GofpHmsm52iXGMOAIgA0aaeqaJ2ZQEH3WjUTxgBCiwH%2FGaLXyanK9rgFkhM8sq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIglVFc3AZYt1BsTTircAxupB6Wgdv386pX90KuQ8IGZWvoNOUiRFbIbLESxQuTJNe1d%2F80JM2JsKPKkd7CfDWNEe%2FxzXf5R2TDIMfzncdhRwEeKU33BvhWxbzK96b7yQSrJ9KzfhUPjjUL4MV5LPqAITLAGyQ1nTSi58wAJTXouLaHqB8pBqDp6V8xTGg4glDFWoMOzLWz85gBwisYY705ctjNnPPpMVoOr6UD0jEC294aEqsuDvgPm%2F%2B0Uugxac%2B1z3uirLxU8X%2FylgXrP%2FZuQiIkrkLZcjRlC7aeRoj6EDX7iqZRALlD%2FLnGAvEWgJwJ5PupWLAw3UhS1SotF7p9L9uoZVMdDPrVBuEyeqjJDvUakrcAX2Sl9GzYlruluV3oeH0DLW6loBaelAkXDsW7EXQ0XbzQOnCDIKphwkESiepTAblZ9%2BZgsaAU1HQmMSL5VXFAo9Ew1lZdSKDpJNSiRe%2BJJ5JSY6RksbiuvH7xXTpfEQrR7utN4%2Br6RVbMXJLQzYAcH%2FnKo61dh7a0Csol4IReaw3PRz6r2Ab89%2FejTDtgCx%2Fm1DlQrFRSqoPK95QYTEl3Mh0gGKQzm93R1keCYF%2FZd2nQx3fidkQ%2FjeNZC5Dg6%2BNHCJPEI77JEhqf1940sSbEE2cj4RyGHMIyWz8MGOqUBlquGYneDvIUGuir%2BVrIy5ZP7HZwkQDVHZehnHOOssDV%2FZDnTLdzD65IDkS2B8hpARs6SkKZ58%2FcpbQgbfmI3kBiYsKdJ8RHd6wkzZSXXigyH2161vLi9E2x6bzKhUnEmG9janooKEY2QIaBcMLTWkGNok9jX6a%2BYcTFGkgjsizRSXSQs%2BxGzA0OPV4xeSLfvIBSSCC3QWNbaoC7Zq0IFSJThihn%2F&X-Amz-Signature=a7443accec7cfcf67267af7fee94ef3b445b01d0884e8a326dac2f9df8515cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55WKIG4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDinDsLavE3f7uQ5yytjcHOWRd3O7GofpHmsm52iXGMOAIgA0aaeqaJ2ZQEH3WjUTxgBCiwH%2FGaLXyanK9rgFkhM8sq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIglVFc3AZYt1BsTTircAxupB6Wgdv386pX90KuQ8IGZWvoNOUiRFbIbLESxQuTJNe1d%2F80JM2JsKPKkd7CfDWNEe%2FxzXf5R2TDIMfzncdhRwEeKU33BvhWxbzK96b7yQSrJ9KzfhUPjjUL4MV5LPqAITLAGyQ1nTSi58wAJTXouLaHqB8pBqDp6V8xTGg4glDFWoMOzLWz85gBwisYY705ctjNnPPpMVoOr6UD0jEC294aEqsuDvgPm%2F%2B0Uugxac%2B1z3uirLxU8X%2FylgXrP%2FZuQiIkrkLZcjRlC7aeRoj6EDX7iqZRALlD%2FLnGAvEWgJwJ5PupWLAw3UhS1SotF7p9L9uoZVMdDPrVBuEyeqjJDvUakrcAX2Sl9GzYlruluV3oeH0DLW6loBaelAkXDsW7EXQ0XbzQOnCDIKphwkESiepTAblZ9%2BZgsaAU1HQmMSL5VXFAo9Ew1lZdSKDpJNSiRe%2BJJ5JSY6RksbiuvH7xXTpfEQrR7utN4%2Br6RVbMXJLQzYAcH%2FnKo61dh7a0Csol4IReaw3PRz6r2Ab89%2FejTDtgCx%2Fm1DlQrFRSqoPK95QYTEl3Mh0gGKQzm93R1keCYF%2FZd2nQx3fidkQ%2FjeNZC5Dg6%2BNHCJPEI77JEhqf1940sSbEE2cj4RyGHMIyWz8MGOqUBlquGYneDvIUGuir%2BVrIy5ZP7HZwkQDVHZehnHOOssDV%2FZDnTLdzD65IDkS2B8hpARs6SkKZ58%2FcpbQgbfmI3kBiYsKdJ8RHd6wkzZSXXigyH2161vLi9E2x6bzKhUnEmG9janooKEY2QIaBcMLTWkGNok9jX6a%2BYcTFGkgjsizRSXSQs%2BxGzA0OPV4xeSLfvIBSSCC3QWNbaoC7Zq0IFSJThihn%2F&X-Amz-Signature=5dc6bab68e6e667d95ae8a75f5e90a47857f5ccf86d1e74e9667ebea6aab10cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55WKIG4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDinDsLavE3f7uQ5yytjcHOWRd3O7GofpHmsm52iXGMOAIgA0aaeqaJ2ZQEH3WjUTxgBCiwH%2FGaLXyanK9rgFkhM8sq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIglVFc3AZYt1BsTTircAxupB6Wgdv386pX90KuQ8IGZWvoNOUiRFbIbLESxQuTJNe1d%2F80JM2JsKPKkd7CfDWNEe%2FxzXf5R2TDIMfzncdhRwEeKU33BvhWxbzK96b7yQSrJ9KzfhUPjjUL4MV5LPqAITLAGyQ1nTSi58wAJTXouLaHqB8pBqDp6V8xTGg4glDFWoMOzLWz85gBwisYY705ctjNnPPpMVoOr6UD0jEC294aEqsuDvgPm%2F%2B0Uugxac%2B1z3uirLxU8X%2FylgXrP%2FZuQiIkrkLZcjRlC7aeRoj6EDX7iqZRALlD%2FLnGAvEWgJwJ5PupWLAw3UhS1SotF7p9L9uoZVMdDPrVBuEyeqjJDvUakrcAX2Sl9GzYlruluV3oeH0DLW6loBaelAkXDsW7EXQ0XbzQOnCDIKphwkESiepTAblZ9%2BZgsaAU1HQmMSL5VXFAo9Ew1lZdSKDpJNSiRe%2BJJ5JSY6RksbiuvH7xXTpfEQrR7utN4%2Br6RVbMXJLQzYAcH%2FnKo61dh7a0Csol4IReaw3PRz6r2Ab89%2FejTDtgCx%2Fm1DlQrFRSqoPK95QYTEl3Mh0gGKQzm93R1keCYF%2FZd2nQx3fidkQ%2FjeNZC5Dg6%2BNHCJPEI77JEhqf1940sSbEE2cj4RyGHMIyWz8MGOqUBlquGYneDvIUGuir%2BVrIy5ZP7HZwkQDVHZehnHOOssDV%2FZDnTLdzD65IDkS2B8hpARs6SkKZ58%2FcpbQgbfmI3kBiYsKdJ8RHd6wkzZSXXigyH2161vLi9E2x6bzKhUnEmG9janooKEY2QIaBcMLTWkGNok9jX6a%2BYcTFGkgjsizRSXSQs%2BxGzA0OPV4xeSLfvIBSSCC3QWNbaoC7Zq0IFSJThihn%2F&X-Amz-Signature=ef005ceced17bc688bb14af729a1b3e3fdffeac3486326b082965360fc1f80de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55WKIG4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDinDsLavE3f7uQ5yytjcHOWRd3O7GofpHmsm52iXGMOAIgA0aaeqaJ2ZQEH3WjUTxgBCiwH%2FGaLXyanK9rgFkhM8sq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIglVFc3AZYt1BsTTircAxupB6Wgdv386pX90KuQ8IGZWvoNOUiRFbIbLESxQuTJNe1d%2F80JM2JsKPKkd7CfDWNEe%2FxzXf5R2TDIMfzncdhRwEeKU33BvhWxbzK96b7yQSrJ9KzfhUPjjUL4MV5LPqAITLAGyQ1nTSi58wAJTXouLaHqB8pBqDp6V8xTGg4glDFWoMOzLWz85gBwisYY705ctjNnPPpMVoOr6UD0jEC294aEqsuDvgPm%2F%2B0Uugxac%2B1z3uirLxU8X%2FylgXrP%2FZuQiIkrkLZcjRlC7aeRoj6EDX7iqZRALlD%2FLnGAvEWgJwJ5PupWLAw3UhS1SotF7p9L9uoZVMdDPrVBuEyeqjJDvUakrcAX2Sl9GzYlruluV3oeH0DLW6loBaelAkXDsW7EXQ0XbzQOnCDIKphwkESiepTAblZ9%2BZgsaAU1HQmMSL5VXFAo9Ew1lZdSKDpJNSiRe%2BJJ5JSY6RksbiuvH7xXTpfEQrR7utN4%2Br6RVbMXJLQzYAcH%2FnKo61dh7a0Csol4IReaw3PRz6r2Ab89%2FejTDtgCx%2Fm1DlQrFRSqoPK95QYTEl3Mh0gGKQzm93R1keCYF%2FZd2nQx3fidkQ%2FjeNZC5Dg6%2BNHCJPEI77JEhqf1940sSbEE2cj4RyGHMIyWz8MGOqUBlquGYneDvIUGuir%2BVrIy5ZP7HZwkQDVHZehnHOOssDV%2FZDnTLdzD65IDkS2B8hpARs6SkKZ58%2FcpbQgbfmI3kBiYsKdJ8RHd6wkzZSXXigyH2161vLi9E2x6bzKhUnEmG9janooKEY2QIaBcMLTWkGNok9jX6a%2BYcTFGkgjsizRSXSQs%2BxGzA0OPV4xeSLfvIBSSCC3QWNbaoC7Zq0IFSJThihn%2F&X-Amz-Signature=6295c627f8267b4de8000e7a92341f3f841efbc0ad5ec39aa92b655bd82691b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
