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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IH6UKYF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN8JrS%2Fi8Em2p2udGOnnyxvQS2x857OspPknvl26SFFQIgWY7Plju%2BfPJ26%2FC%2BSHCTNcd25eOVqx11wgtv9U9ssx8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBv78wkQXw7iv5gV2ircA2TpO21KRfTlUCVvyZ7dKoQGt5tK4KucA9Ki78LlS6Iuori3xyJog0eqiOBx1fAFVmtjXkAIC5T1tR6aEqUQvTzSO9EyV%2F6df0N340mSAkPwtg7es2B%2BAwJxUa5cUMxe5MNKlvRffztZtRDWmzciapg6dg9EMs2nhfDl2NkezA7VfZxl1BnXU87T3Q8X8C5giGuNTvv0TSrb6w4VEHsgMtTxpLTjdE4ZlgbC13Mxr00xbOh6JO7UVugDHSFDJArJUai8pRVqv0lImyvqUH%2BSxOJxkhdfdK%2FgUThbZiAmiksSaogk6tdImDIpdM95of%2BntbFToM9McP70lfdIiFg4I0f50cSTX3Wgamxai6epVczi%2FI8ggrOvxyhc9dezCq4Q8LwM97Ymm7JXOeB0zAHmzmer5NlC5IsNM8fhEh9aNsoHUdfcjGsb1ng39L%2FRYGnVprQ7%2BYaaB9sfKU5UdPTv4qteRIZUK6fARjP1hganOWyXnhK08%2Fk56wiBTBSDm%2Bf%2FHqJNgKMfmVCyQQO9uGwckIW5l5OjvujlsaHUjQuwNkUDxTPEylrw5%2FJMw%2Bd%2F%2F9pcSGyzEuKnPyj4P%2FkGIX7SJskcRo3CjalyBXZc9kE2IItrri%2FGz3i4gXBx8u6CMPr648AGOqUBlsUQLsufn0vAg0k%2FkmWCO2o9yzai%2BKsylQYA3Km4y17oSJRNtYA%2FVFokwbDNe7y2eMqmW8%2FEm9kLb0JPgD1SXHSbXMv5AwUb0yCfxJj5olVgPx3HCPdPfl3Pv5lZ2NT3ouNT645ysN%2Fkc7JMgzPBHm3vPiZvs75dd87PdRLL1S3exweJBeclpQnbG2MQ%2FY9ED%2FOFZ2sqxU1YmCeNwkcS6KuaLv0L&X-Amz-Signature=04c883de946275715a0f55a525bbdca26551a12633121206065612b3de2bd322&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IH6UKYF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN8JrS%2Fi8Em2p2udGOnnyxvQS2x857OspPknvl26SFFQIgWY7Plju%2BfPJ26%2FC%2BSHCTNcd25eOVqx11wgtv9U9ssx8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBv78wkQXw7iv5gV2ircA2TpO21KRfTlUCVvyZ7dKoQGt5tK4KucA9Ki78LlS6Iuori3xyJog0eqiOBx1fAFVmtjXkAIC5T1tR6aEqUQvTzSO9EyV%2F6df0N340mSAkPwtg7es2B%2BAwJxUa5cUMxe5MNKlvRffztZtRDWmzciapg6dg9EMs2nhfDl2NkezA7VfZxl1BnXU87T3Q8X8C5giGuNTvv0TSrb6w4VEHsgMtTxpLTjdE4ZlgbC13Mxr00xbOh6JO7UVugDHSFDJArJUai8pRVqv0lImyvqUH%2BSxOJxkhdfdK%2FgUThbZiAmiksSaogk6tdImDIpdM95of%2BntbFToM9McP70lfdIiFg4I0f50cSTX3Wgamxai6epVczi%2FI8ggrOvxyhc9dezCq4Q8LwM97Ymm7JXOeB0zAHmzmer5NlC5IsNM8fhEh9aNsoHUdfcjGsb1ng39L%2FRYGnVprQ7%2BYaaB9sfKU5UdPTv4qteRIZUK6fARjP1hganOWyXnhK08%2Fk56wiBTBSDm%2Bf%2FHqJNgKMfmVCyQQO9uGwckIW5l5OjvujlsaHUjQuwNkUDxTPEylrw5%2FJMw%2Bd%2F%2F9pcSGyzEuKnPyj4P%2FkGIX7SJskcRo3CjalyBXZc9kE2IItrri%2FGz3i4gXBx8u6CMPr648AGOqUBlsUQLsufn0vAg0k%2FkmWCO2o9yzai%2BKsylQYA3Km4y17oSJRNtYA%2FVFokwbDNe7y2eMqmW8%2FEm9kLb0JPgD1SXHSbXMv5AwUb0yCfxJj5olVgPx3HCPdPfl3Pv5lZ2NT3ouNT645ysN%2Fkc7JMgzPBHm3vPiZvs75dd87PdRLL1S3exweJBeclpQnbG2MQ%2FY9ED%2FOFZ2sqxU1YmCeNwkcS6KuaLv0L&X-Amz-Signature=78d9344259eeadf2e745703ce266c8279d2976c687a9803b3f038262ab8adba7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IH6UKYF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN8JrS%2Fi8Em2p2udGOnnyxvQS2x857OspPknvl26SFFQIgWY7Plju%2BfPJ26%2FC%2BSHCTNcd25eOVqx11wgtv9U9ssx8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBv78wkQXw7iv5gV2ircA2TpO21KRfTlUCVvyZ7dKoQGt5tK4KucA9Ki78LlS6Iuori3xyJog0eqiOBx1fAFVmtjXkAIC5T1tR6aEqUQvTzSO9EyV%2F6df0N340mSAkPwtg7es2B%2BAwJxUa5cUMxe5MNKlvRffztZtRDWmzciapg6dg9EMs2nhfDl2NkezA7VfZxl1BnXU87T3Q8X8C5giGuNTvv0TSrb6w4VEHsgMtTxpLTjdE4ZlgbC13Mxr00xbOh6JO7UVugDHSFDJArJUai8pRVqv0lImyvqUH%2BSxOJxkhdfdK%2FgUThbZiAmiksSaogk6tdImDIpdM95of%2BntbFToM9McP70lfdIiFg4I0f50cSTX3Wgamxai6epVczi%2FI8ggrOvxyhc9dezCq4Q8LwM97Ymm7JXOeB0zAHmzmer5NlC5IsNM8fhEh9aNsoHUdfcjGsb1ng39L%2FRYGnVprQ7%2BYaaB9sfKU5UdPTv4qteRIZUK6fARjP1hganOWyXnhK08%2Fk56wiBTBSDm%2Bf%2FHqJNgKMfmVCyQQO9uGwckIW5l5OjvujlsaHUjQuwNkUDxTPEylrw5%2FJMw%2Bd%2F%2F9pcSGyzEuKnPyj4P%2FkGIX7SJskcRo3CjalyBXZc9kE2IItrri%2FGz3i4gXBx8u6CMPr648AGOqUBlsUQLsufn0vAg0k%2FkmWCO2o9yzai%2BKsylQYA3Km4y17oSJRNtYA%2FVFokwbDNe7y2eMqmW8%2FEm9kLb0JPgD1SXHSbXMv5AwUb0yCfxJj5olVgPx3HCPdPfl3Pv5lZ2NT3ouNT645ysN%2Fkc7JMgzPBHm3vPiZvs75dd87PdRLL1S3exweJBeclpQnbG2MQ%2FY9ED%2FOFZ2sqxU1YmCeNwkcS6KuaLv0L&X-Amz-Signature=6f51ed30adef438848b3527c16536ef0fd6bf00514c39a5ceac4659147245341&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IH6UKYF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN8JrS%2Fi8Em2p2udGOnnyxvQS2x857OspPknvl26SFFQIgWY7Plju%2BfPJ26%2FC%2BSHCTNcd25eOVqx11wgtv9U9ssx8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBv78wkQXw7iv5gV2ircA2TpO21KRfTlUCVvyZ7dKoQGt5tK4KucA9Ki78LlS6Iuori3xyJog0eqiOBx1fAFVmtjXkAIC5T1tR6aEqUQvTzSO9EyV%2F6df0N340mSAkPwtg7es2B%2BAwJxUa5cUMxe5MNKlvRffztZtRDWmzciapg6dg9EMs2nhfDl2NkezA7VfZxl1BnXU87T3Q8X8C5giGuNTvv0TSrb6w4VEHsgMtTxpLTjdE4ZlgbC13Mxr00xbOh6JO7UVugDHSFDJArJUai8pRVqv0lImyvqUH%2BSxOJxkhdfdK%2FgUThbZiAmiksSaogk6tdImDIpdM95of%2BntbFToM9McP70lfdIiFg4I0f50cSTX3Wgamxai6epVczi%2FI8ggrOvxyhc9dezCq4Q8LwM97Ymm7JXOeB0zAHmzmer5NlC5IsNM8fhEh9aNsoHUdfcjGsb1ng39L%2FRYGnVprQ7%2BYaaB9sfKU5UdPTv4qteRIZUK6fARjP1hganOWyXnhK08%2Fk56wiBTBSDm%2Bf%2FHqJNgKMfmVCyQQO9uGwckIW5l5OjvujlsaHUjQuwNkUDxTPEylrw5%2FJMw%2Bd%2F%2F9pcSGyzEuKnPyj4P%2FkGIX7SJskcRo3CjalyBXZc9kE2IItrri%2FGz3i4gXBx8u6CMPr648AGOqUBlsUQLsufn0vAg0k%2FkmWCO2o9yzai%2BKsylQYA3Km4y17oSJRNtYA%2FVFokwbDNe7y2eMqmW8%2FEm9kLb0JPgD1SXHSbXMv5AwUb0yCfxJj5olVgPx3HCPdPfl3Pv5lZ2NT3ouNT645ysN%2Fkc7JMgzPBHm3vPiZvs75dd87PdRLL1S3exweJBeclpQnbG2MQ%2FY9ED%2FOFZ2sqxU1YmCeNwkcS6KuaLv0L&X-Amz-Signature=9e5ec8b3dfe81df9709194d377dd825ef913eae9744e837273f2c4718368980e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IH6UKYF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN8JrS%2Fi8Em2p2udGOnnyxvQS2x857OspPknvl26SFFQIgWY7Plju%2BfPJ26%2FC%2BSHCTNcd25eOVqx11wgtv9U9ssx8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBv78wkQXw7iv5gV2ircA2TpO21KRfTlUCVvyZ7dKoQGt5tK4KucA9Ki78LlS6Iuori3xyJog0eqiOBx1fAFVmtjXkAIC5T1tR6aEqUQvTzSO9EyV%2F6df0N340mSAkPwtg7es2B%2BAwJxUa5cUMxe5MNKlvRffztZtRDWmzciapg6dg9EMs2nhfDl2NkezA7VfZxl1BnXU87T3Q8X8C5giGuNTvv0TSrb6w4VEHsgMtTxpLTjdE4ZlgbC13Mxr00xbOh6JO7UVugDHSFDJArJUai8pRVqv0lImyvqUH%2BSxOJxkhdfdK%2FgUThbZiAmiksSaogk6tdImDIpdM95of%2BntbFToM9McP70lfdIiFg4I0f50cSTX3Wgamxai6epVczi%2FI8ggrOvxyhc9dezCq4Q8LwM97Ymm7JXOeB0zAHmzmer5NlC5IsNM8fhEh9aNsoHUdfcjGsb1ng39L%2FRYGnVprQ7%2BYaaB9sfKU5UdPTv4qteRIZUK6fARjP1hganOWyXnhK08%2Fk56wiBTBSDm%2Bf%2FHqJNgKMfmVCyQQO9uGwckIW5l5OjvujlsaHUjQuwNkUDxTPEylrw5%2FJMw%2Bd%2F%2F9pcSGyzEuKnPyj4P%2FkGIX7SJskcRo3CjalyBXZc9kE2IItrri%2FGz3i4gXBx8u6CMPr648AGOqUBlsUQLsufn0vAg0k%2FkmWCO2o9yzai%2BKsylQYA3Km4y17oSJRNtYA%2FVFokwbDNe7y2eMqmW8%2FEm9kLb0JPgD1SXHSbXMv5AwUb0yCfxJj5olVgPx3HCPdPfl3Pv5lZ2NT3ouNT645ysN%2Fkc7JMgzPBHm3vPiZvs75dd87PdRLL1S3exweJBeclpQnbG2MQ%2FY9ED%2FOFZ2sqxU1YmCeNwkcS6KuaLv0L&X-Amz-Signature=11c7e8b3a6fba9f07413d5e89e61e745b137477b28d921cd396419e2aed18733&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
