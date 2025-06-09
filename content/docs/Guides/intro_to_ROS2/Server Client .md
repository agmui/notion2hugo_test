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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LT5LY2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmEoLEiDMP%2B677EPI%2BAWgYrTavmUKSk7pHCq7hOTqyAIgTgOcfzzxvwVKoJwU2iCl0ChbZ3iCYgZG1dbNdv4TRjAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLzAaRoTCgmjanXzyrcA4CrbzcXEIUXN7Zpk4xQig4LREKSGjXhcaypfIBiLW2xygfqmuVtnFD8dzEezZRYJK22Wo5JNrz2XJUsg7e5b5b7zUBmDY0usQSht3h6xdEJT6SoCxZejacO8YsmakKilYlR2FSf8PDSqfDw%2BktFtQ0L%2FrSSF3WUnXF77M6qxQaNwu5O%2B2bdEHJNdR0u9AfUiZLnPA9CKqpmQWnXSq6wH%2BGRpQhzoYQ%2BUAvxBYsNVuNgD2278yO2X6%2FWLrk0BLT8qKtIGELXSbsVTzGb1wr9lMdjHZ86s%2FX%2FH5Zf3GxoOTU0%2FRzRTfSG54NRx6cqfKBugGpC29r%2F9UKzgHD9iJyjzFqeyl%2B9c%2BN8iUV7s7iaXWV8H%2FbFEll4jl8ya6K6wJArIxatdmnEZK4lwUYzgE2W0Yjf2GTznPk4hpUTL0KQtxVVpAiH4onDJpQYXJrDPkwQmXHZARvnB3tyeeOxu9PrhNoAo%2Blj7v1qEOJcH%2B%2FeAQ6zy%2FUxrYgaTvc59EHwlBl19Opvt2SVQUWmVT3SvPdWZriszAj2kOfv1AnUeaFkzvMEYaymQVk9VeRhaCxwC5v709SMa4mEQbqFVhbW5TpViAsk6xPiQTb1t03Qn4W2Ng72HBnrWk6m1a61dhVqMKDdmcIGOqUBg82y%2BotdGXCmtEp4hf8WwMVc5BSNxdx9mQH7r2ElONFRxgxCi99cjtVzVn0SfX627hI9S4IhFaANM5Ntgw7dBYD%2BShgbf8Vt8hN10AIG319VV1nMfJNiZzWbplemhBrPBn1MQrz15rK8k1pM6OPK89La2QM4y%2B0hAkTiqwebDqKKmt4%2Bh6OI7avRpb6%2FOIu5BCspqxLysbTKTETxO14eqcOEhKds&X-Amz-Signature=84191c5fca7f5c56e8f0d2e9e5db4e80fc11308bcb8d6b26707357a985a7cf3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LT5LY2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmEoLEiDMP%2B677EPI%2BAWgYrTavmUKSk7pHCq7hOTqyAIgTgOcfzzxvwVKoJwU2iCl0ChbZ3iCYgZG1dbNdv4TRjAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLzAaRoTCgmjanXzyrcA4CrbzcXEIUXN7Zpk4xQig4LREKSGjXhcaypfIBiLW2xygfqmuVtnFD8dzEezZRYJK22Wo5JNrz2XJUsg7e5b5b7zUBmDY0usQSht3h6xdEJT6SoCxZejacO8YsmakKilYlR2FSf8PDSqfDw%2BktFtQ0L%2FrSSF3WUnXF77M6qxQaNwu5O%2B2bdEHJNdR0u9AfUiZLnPA9CKqpmQWnXSq6wH%2BGRpQhzoYQ%2BUAvxBYsNVuNgD2278yO2X6%2FWLrk0BLT8qKtIGELXSbsVTzGb1wr9lMdjHZ86s%2FX%2FH5Zf3GxoOTU0%2FRzRTfSG54NRx6cqfKBugGpC29r%2F9UKzgHD9iJyjzFqeyl%2B9c%2BN8iUV7s7iaXWV8H%2FbFEll4jl8ya6K6wJArIxatdmnEZK4lwUYzgE2W0Yjf2GTznPk4hpUTL0KQtxVVpAiH4onDJpQYXJrDPkwQmXHZARvnB3tyeeOxu9PrhNoAo%2Blj7v1qEOJcH%2B%2FeAQ6zy%2FUxrYgaTvc59EHwlBl19Opvt2SVQUWmVT3SvPdWZriszAj2kOfv1AnUeaFkzvMEYaymQVk9VeRhaCxwC5v709SMa4mEQbqFVhbW5TpViAsk6xPiQTb1t03Qn4W2Ng72HBnrWk6m1a61dhVqMKDdmcIGOqUBg82y%2BotdGXCmtEp4hf8WwMVc5BSNxdx9mQH7r2ElONFRxgxCi99cjtVzVn0SfX627hI9S4IhFaANM5Ntgw7dBYD%2BShgbf8Vt8hN10AIG319VV1nMfJNiZzWbplemhBrPBn1MQrz15rK8k1pM6OPK89La2QM4y%2B0hAkTiqwebDqKKmt4%2Bh6OI7avRpb6%2FOIu5BCspqxLysbTKTETxO14eqcOEhKds&X-Amz-Signature=7fea75cb91739f9b3672417d49ef44464641bcdccc196074370a6642ac185122&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LT5LY2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmEoLEiDMP%2B677EPI%2BAWgYrTavmUKSk7pHCq7hOTqyAIgTgOcfzzxvwVKoJwU2iCl0ChbZ3iCYgZG1dbNdv4TRjAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLzAaRoTCgmjanXzyrcA4CrbzcXEIUXN7Zpk4xQig4LREKSGjXhcaypfIBiLW2xygfqmuVtnFD8dzEezZRYJK22Wo5JNrz2XJUsg7e5b5b7zUBmDY0usQSht3h6xdEJT6SoCxZejacO8YsmakKilYlR2FSf8PDSqfDw%2BktFtQ0L%2FrSSF3WUnXF77M6qxQaNwu5O%2B2bdEHJNdR0u9AfUiZLnPA9CKqpmQWnXSq6wH%2BGRpQhzoYQ%2BUAvxBYsNVuNgD2278yO2X6%2FWLrk0BLT8qKtIGELXSbsVTzGb1wr9lMdjHZ86s%2FX%2FH5Zf3GxoOTU0%2FRzRTfSG54NRx6cqfKBugGpC29r%2F9UKzgHD9iJyjzFqeyl%2B9c%2BN8iUV7s7iaXWV8H%2FbFEll4jl8ya6K6wJArIxatdmnEZK4lwUYzgE2W0Yjf2GTznPk4hpUTL0KQtxVVpAiH4onDJpQYXJrDPkwQmXHZARvnB3tyeeOxu9PrhNoAo%2Blj7v1qEOJcH%2B%2FeAQ6zy%2FUxrYgaTvc59EHwlBl19Opvt2SVQUWmVT3SvPdWZriszAj2kOfv1AnUeaFkzvMEYaymQVk9VeRhaCxwC5v709SMa4mEQbqFVhbW5TpViAsk6xPiQTb1t03Qn4W2Ng72HBnrWk6m1a61dhVqMKDdmcIGOqUBg82y%2BotdGXCmtEp4hf8WwMVc5BSNxdx9mQH7r2ElONFRxgxCi99cjtVzVn0SfX627hI9S4IhFaANM5Ntgw7dBYD%2BShgbf8Vt8hN10AIG319VV1nMfJNiZzWbplemhBrPBn1MQrz15rK8k1pM6OPK89La2QM4y%2B0hAkTiqwebDqKKmt4%2Bh6OI7avRpb6%2FOIu5BCspqxLysbTKTETxO14eqcOEhKds&X-Amz-Signature=7f25e7ffc019131b277dd3a72b70f0f12cc020e23f75903ec0d9753b1ed7d8c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LT5LY2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmEoLEiDMP%2B677EPI%2BAWgYrTavmUKSk7pHCq7hOTqyAIgTgOcfzzxvwVKoJwU2iCl0ChbZ3iCYgZG1dbNdv4TRjAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLzAaRoTCgmjanXzyrcA4CrbzcXEIUXN7Zpk4xQig4LREKSGjXhcaypfIBiLW2xygfqmuVtnFD8dzEezZRYJK22Wo5JNrz2XJUsg7e5b5b7zUBmDY0usQSht3h6xdEJT6SoCxZejacO8YsmakKilYlR2FSf8PDSqfDw%2BktFtQ0L%2FrSSF3WUnXF77M6qxQaNwu5O%2B2bdEHJNdR0u9AfUiZLnPA9CKqpmQWnXSq6wH%2BGRpQhzoYQ%2BUAvxBYsNVuNgD2278yO2X6%2FWLrk0BLT8qKtIGELXSbsVTzGb1wr9lMdjHZ86s%2FX%2FH5Zf3GxoOTU0%2FRzRTfSG54NRx6cqfKBugGpC29r%2F9UKzgHD9iJyjzFqeyl%2B9c%2BN8iUV7s7iaXWV8H%2FbFEll4jl8ya6K6wJArIxatdmnEZK4lwUYzgE2W0Yjf2GTznPk4hpUTL0KQtxVVpAiH4onDJpQYXJrDPkwQmXHZARvnB3tyeeOxu9PrhNoAo%2Blj7v1qEOJcH%2B%2FeAQ6zy%2FUxrYgaTvc59EHwlBl19Opvt2SVQUWmVT3SvPdWZriszAj2kOfv1AnUeaFkzvMEYaymQVk9VeRhaCxwC5v709SMa4mEQbqFVhbW5TpViAsk6xPiQTb1t03Qn4W2Ng72HBnrWk6m1a61dhVqMKDdmcIGOqUBg82y%2BotdGXCmtEp4hf8WwMVc5BSNxdx9mQH7r2ElONFRxgxCi99cjtVzVn0SfX627hI9S4IhFaANM5Ntgw7dBYD%2BShgbf8Vt8hN10AIG319VV1nMfJNiZzWbplemhBrPBn1MQrz15rK8k1pM6OPK89La2QM4y%2B0hAkTiqwebDqKKmt4%2Bh6OI7avRpb6%2FOIu5BCspqxLysbTKTETxO14eqcOEhKds&X-Amz-Signature=04e2352566e562c04999dfbe12a1dc274954ebfd3761c9abc76d27c116403068&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LT5LY2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmEoLEiDMP%2B677EPI%2BAWgYrTavmUKSk7pHCq7hOTqyAIgTgOcfzzxvwVKoJwU2iCl0ChbZ3iCYgZG1dbNdv4TRjAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLzAaRoTCgmjanXzyrcA4CrbzcXEIUXN7Zpk4xQig4LREKSGjXhcaypfIBiLW2xygfqmuVtnFD8dzEezZRYJK22Wo5JNrz2XJUsg7e5b5b7zUBmDY0usQSht3h6xdEJT6SoCxZejacO8YsmakKilYlR2FSf8PDSqfDw%2BktFtQ0L%2FrSSF3WUnXF77M6qxQaNwu5O%2B2bdEHJNdR0u9AfUiZLnPA9CKqpmQWnXSq6wH%2BGRpQhzoYQ%2BUAvxBYsNVuNgD2278yO2X6%2FWLrk0BLT8qKtIGELXSbsVTzGb1wr9lMdjHZ86s%2FX%2FH5Zf3GxoOTU0%2FRzRTfSG54NRx6cqfKBugGpC29r%2F9UKzgHD9iJyjzFqeyl%2B9c%2BN8iUV7s7iaXWV8H%2FbFEll4jl8ya6K6wJArIxatdmnEZK4lwUYzgE2W0Yjf2GTznPk4hpUTL0KQtxVVpAiH4onDJpQYXJrDPkwQmXHZARvnB3tyeeOxu9PrhNoAo%2Blj7v1qEOJcH%2B%2FeAQ6zy%2FUxrYgaTvc59EHwlBl19Opvt2SVQUWmVT3SvPdWZriszAj2kOfv1AnUeaFkzvMEYaymQVk9VeRhaCxwC5v709SMa4mEQbqFVhbW5TpViAsk6xPiQTb1t03Qn4W2Ng72HBnrWk6m1a61dhVqMKDdmcIGOqUBg82y%2BotdGXCmtEp4hf8WwMVc5BSNxdx9mQH7r2ElONFRxgxCi99cjtVzVn0SfX627hI9S4IhFaANM5Ntgw7dBYD%2BShgbf8Vt8hN10AIG319VV1nMfJNiZzWbplemhBrPBn1MQrz15rK8k1pM6OPK89La2QM4y%2B0hAkTiqwebDqKKmt4%2Bh6OI7avRpb6%2FOIu5BCspqxLysbTKTETxO14eqcOEhKds&X-Amz-Signature=26e436a2335b651ca620f27c682244da03dd9b9a4155fdb99dcf693701dbffbe&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
