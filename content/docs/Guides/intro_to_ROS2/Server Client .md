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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHY7JGD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAwbNBFfIWi9QrfmYhGmwIVIV8qWx%2F%2BA3YPO3FphGnCHAiEA6RFEGmfhjsDTEgtnLsnU7Bps%2Bx6D%2FNJHZSDgB8ssmZsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMag87PLuN%2F3%2FqzsircA7skcUlpYWaxWINvmEClQuLynSFSu3cSw52%2FF6GYAyRMYPZPP%2BWI6bvoKZ7LC5mygkbjENGJgqJ4vgg8wmq2N2e9RYudMMvOVVClHuyytILN7OPVIVxX3WyiPhq0WX4EGD2q1MfID7jVlWIw%2Fx5smaK9Hg%2F6v2cORpb5QCXN%2FH9yjYDiLEvQ%2BTF0ue1euwu6VWj5ue9eyiY8YNmpu0cqXjMQ4l2x%2FG1ZJp43RnWtPHzs%2Bcuxh%2BV33LsoJJkh5z0BYbBTtWCEJBK8YYUDOR9IJFiQQjOLsTR9ac8Ntoq3iTo38WNgNr1VfCCqCNn1ihHaOmOKP7ZIHMFz09Nr340yphN5lhY4d5m65c%2B6eQGMoiShAbnH2gVEm8MqC15Zt2EtTdiKQJnAk%2Fv4IKO68MBVmydCqJUwK9oc2JkhE7LusMKqAfMSkq3Xmc0mw06RCDIr6VYyYST%2BwqMmFIMXUwrXcElF0wE7Qm7xbmSoNCTCrgQHhcd%2Fe84yWIe0aaVqbNH%2BfDhicvB1J5D%2Fx8Ekiwhe3r12%2FMP%2BZWWfvkmQ9DI0wlQRrOQ0vCl%2FazGNgh%2BW4xZSe3xONz7OYIXAG2gLYZyQNz4QSu0IL2ELwJUuEl8CVv0xMxI0Ekmj9lwaMoGwMIGu%2Br4GOqUBBSPJMOjVw18PCIvw%2FMBjnlQph8bFedhqlTw0ADWkJey1HZBkypjUL28gLqOFGmfrCZdVCyJMuaUPd3zqOSnrNQlC9JoJK250C%2BerSBnLH5e9OspvgE0fdyPdoMkzKyjIn06qYD%2Bez8NhSeb5nJDFuQLOJN4%2FO0QG1caaQj9Hw44cRkdEhahjOaDgpTaT8MqRzScr0A6kxWEc1BQebWaFC%2FkmcLsf&X-Amz-Signature=fa8a188b34ec7e70e9e30d7fbb3b3040d6c9fd191c51c2dbc1b0f73122c3f965&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHY7JGD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAwbNBFfIWi9QrfmYhGmwIVIV8qWx%2F%2BA3YPO3FphGnCHAiEA6RFEGmfhjsDTEgtnLsnU7Bps%2Bx6D%2FNJHZSDgB8ssmZsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMag87PLuN%2F3%2FqzsircA7skcUlpYWaxWINvmEClQuLynSFSu3cSw52%2FF6GYAyRMYPZPP%2BWI6bvoKZ7LC5mygkbjENGJgqJ4vgg8wmq2N2e9RYudMMvOVVClHuyytILN7OPVIVxX3WyiPhq0WX4EGD2q1MfID7jVlWIw%2Fx5smaK9Hg%2F6v2cORpb5QCXN%2FH9yjYDiLEvQ%2BTF0ue1euwu6VWj5ue9eyiY8YNmpu0cqXjMQ4l2x%2FG1ZJp43RnWtPHzs%2Bcuxh%2BV33LsoJJkh5z0BYbBTtWCEJBK8YYUDOR9IJFiQQjOLsTR9ac8Ntoq3iTo38WNgNr1VfCCqCNn1ihHaOmOKP7ZIHMFz09Nr340yphN5lhY4d5m65c%2B6eQGMoiShAbnH2gVEm8MqC15Zt2EtTdiKQJnAk%2Fv4IKO68MBVmydCqJUwK9oc2JkhE7LusMKqAfMSkq3Xmc0mw06RCDIr6VYyYST%2BwqMmFIMXUwrXcElF0wE7Qm7xbmSoNCTCrgQHhcd%2Fe84yWIe0aaVqbNH%2BfDhicvB1J5D%2Fx8Ekiwhe3r12%2FMP%2BZWWfvkmQ9DI0wlQRrOQ0vCl%2FazGNgh%2BW4xZSe3xONz7OYIXAG2gLYZyQNz4QSu0IL2ELwJUuEl8CVv0xMxI0Ekmj9lwaMoGwMIGu%2Br4GOqUBBSPJMOjVw18PCIvw%2FMBjnlQph8bFedhqlTw0ADWkJey1HZBkypjUL28gLqOFGmfrCZdVCyJMuaUPd3zqOSnrNQlC9JoJK250C%2BerSBnLH5e9OspvgE0fdyPdoMkzKyjIn06qYD%2Bez8NhSeb5nJDFuQLOJN4%2FO0QG1caaQj9Hw44cRkdEhahjOaDgpTaT8MqRzScr0A6kxWEc1BQebWaFC%2FkmcLsf&X-Amz-Signature=bbac981c242fe011ce01476f94072d50b1f926ef4182db520434dac8dd568692&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHY7JGD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAwbNBFfIWi9QrfmYhGmwIVIV8qWx%2F%2BA3YPO3FphGnCHAiEA6RFEGmfhjsDTEgtnLsnU7Bps%2Bx6D%2FNJHZSDgB8ssmZsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMag87PLuN%2F3%2FqzsircA7skcUlpYWaxWINvmEClQuLynSFSu3cSw52%2FF6GYAyRMYPZPP%2BWI6bvoKZ7LC5mygkbjENGJgqJ4vgg8wmq2N2e9RYudMMvOVVClHuyytILN7OPVIVxX3WyiPhq0WX4EGD2q1MfID7jVlWIw%2Fx5smaK9Hg%2F6v2cORpb5QCXN%2FH9yjYDiLEvQ%2BTF0ue1euwu6VWj5ue9eyiY8YNmpu0cqXjMQ4l2x%2FG1ZJp43RnWtPHzs%2Bcuxh%2BV33LsoJJkh5z0BYbBTtWCEJBK8YYUDOR9IJFiQQjOLsTR9ac8Ntoq3iTo38WNgNr1VfCCqCNn1ihHaOmOKP7ZIHMFz09Nr340yphN5lhY4d5m65c%2B6eQGMoiShAbnH2gVEm8MqC15Zt2EtTdiKQJnAk%2Fv4IKO68MBVmydCqJUwK9oc2JkhE7LusMKqAfMSkq3Xmc0mw06RCDIr6VYyYST%2BwqMmFIMXUwrXcElF0wE7Qm7xbmSoNCTCrgQHhcd%2Fe84yWIe0aaVqbNH%2BfDhicvB1J5D%2Fx8Ekiwhe3r12%2FMP%2BZWWfvkmQ9DI0wlQRrOQ0vCl%2FazGNgh%2BW4xZSe3xONz7OYIXAG2gLYZyQNz4QSu0IL2ELwJUuEl8CVv0xMxI0Ekmj9lwaMoGwMIGu%2Br4GOqUBBSPJMOjVw18PCIvw%2FMBjnlQph8bFedhqlTw0ADWkJey1HZBkypjUL28gLqOFGmfrCZdVCyJMuaUPd3zqOSnrNQlC9JoJK250C%2BerSBnLH5e9OspvgE0fdyPdoMkzKyjIn06qYD%2Bez8NhSeb5nJDFuQLOJN4%2FO0QG1caaQj9Hw44cRkdEhahjOaDgpTaT8MqRzScr0A6kxWEc1BQebWaFC%2FkmcLsf&X-Amz-Signature=acd607bf201cd78f00e89122ba940d20656389a52da424c1094144b2a8b4ae38&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHY7JGD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAwbNBFfIWi9QrfmYhGmwIVIV8qWx%2F%2BA3YPO3FphGnCHAiEA6RFEGmfhjsDTEgtnLsnU7Bps%2Bx6D%2FNJHZSDgB8ssmZsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMag87PLuN%2F3%2FqzsircA7skcUlpYWaxWINvmEClQuLynSFSu3cSw52%2FF6GYAyRMYPZPP%2BWI6bvoKZ7LC5mygkbjENGJgqJ4vgg8wmq2N2e9RYudMMvOVVClHuyytILN7OPVIVxX3WyiPhq0WX4EGD2q1MfID7jVlWIw%2Fx5smaK9Hg%2F6v2cORpb5QCXN%2FH9yjYDiLEvQ%2BTF0ue1euwu6VWj5ue9eyiY8YNmpu0cqXjMQ4l2x%2FG1ZJp43RnWtPHzs%2Bcuxh%2BV33LsoJJkh5z0BYbBTtWCEJBK8YYUDOR9IJFiQQjOLsTR9ac8Ntoq3iTo38WNgNr1VfCCqCNn1ihHaOmOKP7ZIHMFz09Nr340yphN5lhY4d5m65c%2B6eQGMoiShAbnH2gVEm8MqC15Zt2EtTdiKQJnAk%2Fv4IKO68MBVmydCqJUwK9oc2JkhE7LusMKqAfMSkq3Xmc0mw06RCDIr6VYyYST%2BwqMmFIMXUwrXcElF0wE7Qm7xbmSoNCTCrgQHhcd%2Fe84yWIe0aaVqbNH%2BfDhicvB1J5D%2Fx8Ekiwhe3r12%2FMP%2BZWWfvkmQ9DI0wlQRrOQ0vCl%2FazGNgh%2BW4xZSe3xONz7OYIXAG2gLYZyQNz4QSu0IL2ELwJUuEl8CVv0xMxI0Ekmj9lwaMoGwMIGu%2Br4GOqUBBSPJMOjVw18PCIvw%2FMBjnlQph8bFedhqlTw0ADWkJey1HZBkypjUL28gLqOFGmfrCZdVCyJMuaUPd3zqOSnrNQlC9JoJK250C%2BerSBnLH5e9OspvgE0fdyPdoMkzKyjIn06qYD%2Bez8NhSeb5nJDFuQLOJN4%2FO0QG1caaQj9Hw44cRkdEhahjOaDgpTaT8MqRzScr0A6kxWEc1BQebWaFC%2FkmcLsf&X-Amz-Signature=b2993c3ec962e48705bf1ba86439d59794265c68b09cadc25e7d52eb790e854a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHY7JGD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAwbNBFfIWi9QrfmYhGmwIVIV8qWx%2F%2BA3YPO3FphGnCHAiEA6RFEGmfhjsDTEgtnLsnU7Bps%2Bx6D%2FNJHZSDgB8ssmZsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMag87PLuN%2F3%2FqzsircA7skcUlpYWaxWINvmEClQuLynSFSu3cSw52%2FF6GYAyRMYPZPP%2BWI6bvoKZ7LC5mygkbjENGJgqJ4vgg8wmq2N2e9RYudMMvOVVClHuyytILN7OPVIVxX3WyiPhq0WX4EGD2q1MfID7jVlWIw%2Fx5smaK9Hg%2F6v2cORpb5QCXN%2FH9yjYDiLEvQ%2BTF0ue1euwu6VWj5ue9eyiY8YNmpu0cqXjMQ4l2x%2FG1ZJp43RnWtPHzs%2Bcuxh%2BV33LsoJJkh5z0BYbBTtWCEJBK8YYUDOR9IJFiQQjOLsTR9ac8Ntoq3iTo38WNgNr1VfCCqCNn1ihHaOmOKP7ZIHMFz09Nr340yphN5lhY4d5m65c%2B6eQGMoiShAbnH2gVEm8MqC15Zt2EtTdiKQJnAk%2Fv4IKO68MBVmydCqJUwK9oc2JkhE7LusMKqAfMSkq3Xmc0mw06RCDIr6VYyYST%2BwqMmFIMXUwrXcElF0wE7Qm7xbmSoNCTCrgQHhcd%2Fe84yWIe0aaVqbNH%2BfDhicvB1J5D%2Fx8Ekiwhe3r12%2FMP%2BZWWfvkmQ9DI0wlQRrOQ0vCl%2FazGNgh%2BW4xZSe3xONz7OYIXAG2gLYZyQNz4QSu0IL2ELwJUuEl8CVv0xMxI0Ekmj9lwaMoGwMIGu%2Br4GOqUBBSPJMOjVw18PCIvw%2FMBjnlQph8bFedhqlTw0ADWkJey1HZBkypjUL28gLqOFGmfrCZdVCyJMuaUPd3zqOSnrNQlC9JoJK250C%2BerSBnLH5e9OspvgE0fdyPdoMkzKyjIn06qYD%2Bez8NhSeb5nJDFuQLOJN4%2FO0QG1caaQj9Hw44cRkdEhahjOaDgpTaT8MqRzScr0A6kxWEc1BQebWaFC%2FkmcLsf&X-Amz-Signature=69643fb715fea35106a62671fe369d70ce0489389df23a6ef95d3ddf213e6750&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
