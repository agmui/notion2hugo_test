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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAA6JBQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6xmuFaJMu1rEAe3SLjzGlMcwusgobA3Jl6fdzq%2FqDnAIgBgU%2BcVhDkyu%2BQLAqE4PdvYxvIVp35JCFrzSks4Pjrx4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIASGntvUqDpuO0s3CrcAytypfEn5orL2Yawh1nLYdPvcCtTMcpDmDBwF4D0aKlyvqn2xlfApD5rEDl7ebgnwXBnMJThCnbrJ82eoJi0DE89rDbGJqDNMX4u4muXd9p8P20ELYmPI%2FkyPMklFL4dsim7%2B847w5qcZy4fMLhrdRrQkWoCKkKkYLLyIO%2BTgwprdHDku4uq8X1gQmcaTn5nc6EwFL9rE%2Ft1T%2FDj1bY54Z9%2FRUJ14LvKSklf2veSOgsXHekfqGVshzOjS4L2QBVKH%2FFUNsFAoZyxMadcj9nMFWwHqBLfDYy8JuzVOC1u6wgKPVI3Udms9%2BynZ0xd5Rv0cBdaEAuVBG5ASIVCJRCCr9WPmQrWrQiTne0Uis4lAeTBT74ObkcURJPaNsPM%2BKjLLXpWmbpgZSL8QxmcvJ0py%2B5Q1pYFKURcERr%2Be%2Fk9gch3lGF4ZvCITXrlUBf0CGi8xUEvLQXbAkY88iXTne5%2B3iOaPUviJYXz9oZuZZ%2FyJdu7OpIQg5zIKksrOsKxjAZhLG1KutpMuPr8fhOZJrWBRF5gT2QheRWyql%2BNdVWhESLI6B2GtxhZk8Mkvaz77GJmwL5PG6F3haFx5MOjP3QylAhAuAiaICMxAPA5WddALMDF5%2BLiZaAZieNTfftvMNnygr0GOqUBm1HurdkBbY27iaw6jyUoa9CIbTJCLGWdT2ilJSyO9%2FQx1gHJjvNoZFjaxDhQgtwlWqdU8NqRTI1P%2BjI9WoDnBaUXu58cjwlNWRIgIGRutD266oGwsoDJrp4wqL65ihGOhcqaua4VjQiAp5opx9N9IzB%2BC7GPi7PGPmYXMSWZyMx3%2FlbfaBxDuo5sKKvruD7MrLhPd%2F6y68ZpiI6iNVkYUMjKeTy4&X-Amz-Signature=683050065dcc7660e033ed9f36cee2fd9e5d7c7117fda80dc420033ec6d0a004&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAA6JBQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6xmuFaJMu1rEAe3SLjzGlMcwusgobA3Jl6fdzq%2FqDnAIgBgU%2BcVhDkyu%2BQLAqE4PdvYxvIVp35JCFrzSks4Pjrx4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIASGntvUqDpuO0s3CrcAytypfEn5orL2Yawh1nLYdPvcCtTMcpDmDBwF4D0aKlyvqn2xlfApD5rEDl7ebgnwXBnMJThCnbrJ82eoJi0DE89rDbGJqDNMX4u4muXd9p8P20ELYmPI%2FkyPMklFL4dsim7%2B847w5qcZy4fMLhrdRrQkWoCKkKkYLLyIO%2BTgwprdHDku4uq8X1gQmcaTn5nc6EwFL9rE%2Ft1T%2FDj1bY54Z9%2FRUJ14LvKSklf2veSOgsXHekfqGVshzOjS4L2QBVKH%2FFUNsFAoZyxMadcj9nMFWwHqBLfDYy8JuzVOC1u6wgKPVI3Udms9%2BynZ0xd5Rv0cBdaEAuVBG5ASIVCJRCCr9WPmQrWrQiTne0Uis4lAeTBT74ObkcURJPaNsPM%2BKjLLXpWmbpgZSL8QxmcvJ0py%2B5Q1pYFKURcERr%2Be%2Fk9gch3lGF4ZvCITXrlUBf0CGi8xUEvLQXbAkY88iXTne5%2B3iOaPUviJYXz9oZuZZ%2FyJdu7OpIQg5zIKksrOsKxjAZhLG1KutpMuPr8fhOZJrWBRF5gT2QheRWyql%2BNdVWhESLI6B2GtxhZk8Mkvaz77GJmwL5PG6F3haFx5MOjP3QylAhAuAiaICMxAPA5WddALMDF5%2BLiZaAZieNTfftvMNnygr0GOqUBm1HurdkBbY27iaw6jyUoa9CIbTJCLGWdT2ilJSyO9%2FQx1gHJjvNoZFjaxDhQgtwlWqdU8NqRTI1P%2BjI9WoDnBaUXu58cjwlNWRIgIGRutD266oGwsoDJrp4wqL65ihGOhcqaua4VjQiAp5opx9N9IzB%2BC7GPi7PGPmYXMSWZyMx3%2FlbfaBxDuo5sKKvruD7MrLhPd%2F6y68ZpiI6iNVkYUMjKeTy4&X-Amz-Signature=93db77ea6ece2037727e16a30ab828b52967171c57b9d7a9b3cae4c6341e6a45&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAA6JBQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6xmuFaJMu1rEAe3SLjzGlMcwusgobA3Jl6fdzq%2FqDnAIgBgU%2BcVhDkyu%2BQLAqE4PdvYxvIVp35JCFrzSks4Pjrx4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIASGntvUqDpuO0s3CrcAytypfEn5orL2Yawh1nLYdPvcCtTMcpDmDBwF4D0aKlyvqn2xlfApD5rEDl7ebgnwXBnMJThCnbrJ82eoJi0DE89rDbGJqDNMX4u4muXd9p8P20ELYmPI%2FkyPMklFL4dsim7%2B847w5qcZy4fMLhrdRrQkWoCKkKkYLLyIO%2BTgwprdHDku4uq8X1gQmcaTn5nc6EwFL9rE%2Ft1T%2FDj1bY54Z9%2FRUJ14LvKSklf2veSOgsXHekfqGVshzOjS4L2QBVKH%2FFUNsFAoZyxMadcj9nMFWwHqBLfDYy8JuzVOC1u6wgKPVI3Udms9%2BynZ0xd5Rv0cBdaEAuVBG5ASIVCJRCCr9WPmQrWrQiTne0Uis4lAeTBT74ObkcURJPaNsPM%2BKjLLXpWmbpgZSL8QxmcvJ0py%2B5Q1pYFKURcERr%2Be%2Fk9gch3lGF4ZvCITXrlUBf0CGi8xUEvLQXbAkY88iXTne5%2B3iOaPUviJYXz9oZuZZ%2FyJdu7OpIQg5zIKksrOsKxjAZhLG1KutpMuPr8fhOZJrWBRF5gT2QheRWyql%2BNdVWhESLI6B2GtxhZk8Mkvaz77GJmwL5PG6F3haFx5MOjP3QylAhAuAiaICMxAPA5WddALMDF5%2BLiZaAZieNTfftvMNnygr0GOqUBm1HurdkBbY27iaw6jyUoa9CIbTJCLGWdT2ilJSyO9%2FQx1gHJjvNoZFjaxDhQgtwlWqdU8NqRTI1P%2BjI9WoDnBaUXu58cjwlNWRIgIGRutD266oGwsoDJrp4wqL65ihGOhcqaua4VjQiAp5opx9N9IzB%2BC7GPi7PGPmYXMSWZyMx3%2FlbfaBxDuo5sKKvruD7MrLhPd%2F6y68ZpiI6iNVkYUMjKeTy4&X-Amz-Signature=bf0cf3c89708670d55b949493b9d23ec2302cc6dc164b49f0bd3535196471962&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAA6JBQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6xmuFaJMu1rEAe3SLjzGlMcwusgobA3Jl6fdzq%2FqDnAIgBgU%2BcVhDkyu%2BQLAqE4PdvYxvIVp35JCFrzSks4Pjrx4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIASGntvUqDpuO0s3CrcAytypfEn5orL2Yawh1nLYdPvcCtTMcpDmDBwF4D0aKlyvqn2xlfApD5rEDl7ebgnwXBnMJThCnbrJ82eoJi0DE89rDbGJqDNMX4u4muXd9p8P20ELYmPI%2FkyPMklFL4dsim7%2B847w5qcZy4fMLhrdRrQkWoCKkKkYLLyIO%2BTgwprdHDku4uq8X1gQmcaTn5nc6EwFL9rE%2Ft1T%2FDj1bY54Z9%2FRUJ14LvKSklf2veSOgsXHekfqGVshzOjS4L2QBVKH%2FFUNsFAoZyxMadcj9nMFWwHqBLfDYy8JuzVOC1u6wgKPVI3Udms9%2BynZ0xd5Rv0cBdaEAuVBG5ASIVCJRCCr9WPmQrWrQiTne0Uis4lAeTBT74ObkcURJPaNsPM%2BKjLLXpWmbpgZSL8QxmcvJ0py%2B5Q1pYFKURcERr%2Be%2Fk9gch3lGF4ZvCITXrlUBf0CGi8xUEvLQXbAkY88iXTne5%2B3iOaPUviJYXz9oZuZZ%2FyJdu7OpIQg5zIKksrOsKxjAZhLG1KutpMuPr8fhOZJrWBRF5gT2QheRWyql%2BNdVWhESLI6B2GtxhZk8Mkvaz77GJmwL5PG6F3haFx5MOjP3QylAhAuAiaICMxAPA5WddALMDF5%2BLiZaAZieNTfftvMNnygr0GOqUBm1HurdkBbY27iaw6jyUoa9CIbTJCLGWdT2ilJSyO9%2FQx1gHJjvNoZFjaxDhQgtwlWqdU8NqRTI1P%2BjI9WoDnBaUXu58cjwlNWRIgIGRutD266oGwsoDJrp4wqL65ihGOhcqaua4VjQiAp5opx9N9IzB%2BC7GPi7PGPmYXMSWZyMx3%2FlbfaBxDuo5sKKvruD7MrLhPd%2F6y68ZpiI6iNVkYUMjKeTy4&X-Amz-Signature=027d9b8333489e1af84f4fcd187dab1b97583bf2b7cd1838262bd6319e4e830e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAA6JBQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6xmuFaJMu1rEAe3SLjzGlMcwusgobA3Jl6fdzq%2FqDnAIgBgU%2BcVhDkyu%2BQLAqE4PdvYxvIVp35JCFrzSks4Pjrx4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIASGntvUqDpuO0s3CrcAytypfEn5orL2Yawh1nLYdPvcCtTMcpDmDBwF4D0aKlyvqn2xlfApD5rEDl7ebgnwXBnMJThCnbrJ82eoJi0DE89rDbGJqDNMX4u4muXd9p8P20ELYmPI%2FkyPMklFL4dsim7%2B847w5qcZy4fMLhrdRrQkWoCKkKkYLLyIO%2BTgwprdHDku4uq8X1gQmcaTn5nc6EwFL9rE%2Ft1T%2FDj1bY54Z9%2FRUJ14LvKSklf2veSOgsXHekfqGVshzOjS4L2QBVKH%2FFUNsFAoZyxMadcj9nMFWwHqBLfDYy8JuzVOC1u6wgKPVI3Udms9%2BynZ0xd5Rv0cBdaEAuVBG5ASIVCJRCCr9WPmQrWrQiTne0Uis4lAeTBT74ObkcURJPaNsPM%2BKjLLXpWmbpgZSL8QxmcvJ0py%2B5Q1pYFKURcERr%2Be%2Fk9gch3lGF4ZvCITXrlUBf0CGi8xUEvLQXbAkY88iXTne5%2B3iOaPUviJYXz9oZuZZ%2FyJdu7OpIQg5zIKksrOsKxjAZhLG1KutpMuPr8fhOZJrWBRF5gT2QheRWyql%2BNdVWhESLI6B2GtxhZk8Mkvaz77GJmwL5PG6F3haFx5MOjP3QylAhAuAiaICMxAPA5WddALMDF5%2BLiZaAZieNTfftvMNnygr0GOqUBm1HurdkBbY27iaw6jyUoa9CIbTJCLGWdT2ilJSyO9%2FQx1gHJjvNoZFjaxDhQgtwlWqdU8NqRTI1P%2BjI9WoDnBaUXu58cjwlNWRIgIGRutD266oGwsoDJrp4wqL65ihGOhcqaua4VjQiAp5opx9N9IzB%2BC7GPi7PGPmYXMSWZyMx3%2FlbfaBxDuo5sKKvruD7MrLhPd%2F6y68ZpiI6iNVkYUMjKeTy4&X-Amz-Signature=3b8f35f1ef31d33bb6b64c05d639603eabc9f7715dc81548f35e5b580e6ea0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
