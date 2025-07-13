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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2K7GLB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDpU7Fl3EoxwLX8O6iI6oCKGmMdcKCPEwxj1eipiRQEMAIhAPioXP9nEu4G7aYsCLMz91sbIa%2F3r3Bp%2BabeMO8afa2PKv8DCB8QABoMNjM3NDIzMTgzODA1IgzJz7bkboHRZhaPuQcq3ANpvKUgXQ%2BEZ0mIvzirajt%2FHw7%2FOprkgIFWp6ip5TrxC5P6GBEtPOFMksaFam98uqvoRX6FZDaYy6OJbE27ruM3LpbXCVnx7ZfEQiSqXrWS9ATKPzSJ1e%2BJlYFnCkJoRZkv5Gntsu3XitYoDxeuexs%2FY12SAIoZD7lOGv1EMcs40kWLXkEaiSX53s7I1ydMiln47K2Vy9uRSf20lds5NOpTe5MLVgxeBKWev3oPnuin0OcjexDG7pqVEsq2m1qOTxf4LWHAtJoTPudqh3hLQkvV6FM587SXL4CXm3VgMw9jXyvluttukBnGdJ6xR02spib2Jw6ANJQjQ0MUCEoupDlGat%2Bu2GygGozBGE9zS7DpwvEWw61mhBKsKuBnwyNm5b0XdoPnc4LgYoDCR72jiZPq83S64K2T%2FeNCEyas%2FjTS%2B96OI3BEHFyYj%2BS4XsniEHfUAvq%2FhNc7Cx0ew9Ka%2Fr0fiTaKknP9oQPtrapHGfoUSn%2Bi9B4IaEutXizFkb7PsZmVpvySVqpYFAMDjCeBzKkFqfE%2FLVpk0D6M413i0ISRIaXRmherMtmyYKuZP6dciziIQB%2Byeiqfu%2FX%2FAQxjwUwBAlwinmbfSy52ObaqhTjD1WPExQRQzSn5EwAFYTCcyNDDBjqkAXHBLWqk8Mez63MWrsKJ2mLAmnQ%2FhYwlf7O74GxKZ%2BgWBPGceRykMupxl%2Fb6QD6dU0DB4iXdHSd8kzmufqtTyVtBcf3I5KkwNQiXsGRYHHF2B%2BBbBY7oT2mOC5H1CgdcQPmFCKqfEjXTWbz6%2B3bLFiD%2FKz6z%2BxmJd5VnPUCBZ4hndRnzjhWPJM1Q4dm4QnDEIBMoi2IQXXUEpaBT3EgIKfRDTpzI&X-Amz-Signature=7f94f5bb483c2aea011147124ab35e8826084565e02dd71eecff537326124f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2K7GLB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDpU7Fl3EoxwLX8O6iI6oCKGmMdcKCPEwxj1eipiRQEMAIhAPioXP9nEu4G7aYsCLMz91sbIa%2F3r3Bp%2BabeMO8afa2PKv8DCB8QABoMNjM3NDIzMTgzODA1IgzJz7bkboHRZhaPuQcq3ANpvKUgXQ%2BEZ0mIvzirajt%2FHw7%2FOprkgIFWp6ip5TrxC5P6GBEtPOFMksaFam98uqvoRX6FZDaYy6OJbE27ruM3LpbXCVnx7ZfEQiSqXrWS9ATKPzSJ1e%2BJlYFnCkJoRZkv5Gntsu3XitYoDxeuexs%2FY12SAIoZD7lOGv1EMcs40kWLXkEaiSX53s7I1ydMiln47K2Vy9uRSf20lds5NOpTe5MLVgxeBKWev3oPnuin0OcjexDG7pqVEsq2m1qOTxf4LWHAtJoTPudqh3hLQkvV6FM587SXL4CXm3VgMw9jXyvluttukBnGdJ6xR02spib2Jw6ANJQjQ0MUCEoupDlGat%2Bu2GygGozBGE9zS7DpwvEWw61mhBKsKuBnwyNm5b0XdoPnc4LgYoDCR72jiZPq83S64K2T%2FeNCEyas%2FjTS%2B96OI3BEHFyYj%2BS4XsniEHfUAvq%2FhNc7Cx0ew9Ka%2Fr0fiTaKknP9oQPtrapHGfoUSn%2Bi9B4IaEutXizFkb7PsZmVpvySVqpYFAMDjCeBzKkFqfE%2FLVpk0D6M413i0ISRIaXRmherMtmyYKuZP6dciziIQB%2Byeiqfu%2FX%2FAQxjwUwBAlwinmbfSy52ObaqhTjD1WPExQRQzSn5EwAFYTCcyNDDBjqkAXHBLWqk8Mez63MWrsKJ2mLAmnQ%2FhYwlf7O74GxKZ%2BgWBPGceRykMupxl%2Fb6QD6dU0DB4iXdHSd8kzmufqtTyVtBcf3I5KkwNQiXsGRYHHF2B%2BBbBY7oT2mOC5H1CgdcQPmFCKqfEjXTWbz6%2B3bLFiD%2FKz6z%2BxmJd5VnPUCBZ4hndRnzjhWPJM1Q4dm4QnDEIBMoi2IQXXUEpaBT3EgIKfRDTpzI&X-Amz-Signature=3458cab218b17f4ad7128a7478567e1a4048eccd04f3a4d0dfe33a4e6cc4a915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2K7GLB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDpU7Fl3EoxwLX8O6iI6oCKGmMdcKCPEwxj1eipiRQEMAIhAPioXP9nEu4G7aYsCLMz91sbIa%2F3r3Bp%2BabeMO8afa2PKv8DCB8QABoMNjM3NDIzMTgzODA1IgzJz7bkboHRZhaPuQcq3ANpvKUgXQ%2BEZ0mIvzirajt%2FHw7%2FOprkgIFWp6ip5TrxC5P6GBEtPOFMksaFam98uqvoRX6FZDaYy6OJbE27ruM3LpbXCVnx7ZfEQiSqXrWS9ATKPzSJ1e%2BJlYFnCkJoRZkv5Gntsu3XitYoDxeuexs%2FY12SAIoZD7lOGv1EMcs40kWLXkEaiSX53s7I1ydMiln47K2Vy9uRSf20lds5NOpTe5MLVgxeBKWev3oPnuin0OcjexDG7pqVEsq2m1qOTxf4LWHAtJoTPudqh3hLQkvV6FM587SXL4CXm3VgMw9jXyvluttukBnGdJ6xR02spib2Jw6ANJQjQ0MUCEoupDlGat%2Bu2GygGozBGE9zS7DpwvEWw61mhBKsKuBnwyNm5b0XdoPnc4LgYoDCR72jiZPq83S64K2T%2FeNCEyas%2FjTS%2B96OI3BEHFyYj%2BS4XsniEHfUAvq%2FhNc7Cx0ew9Ka%2Fr0fiTaKknP9oQPtrapHGfoUSn%2Bi9B4IaEutXizFkb7PsZmVpvySVqpYFAMDjCeBzKkFqfE%2FLVpk0D6M413i0ISRIaXRmherMtmyYKuZP6dciziIQB%2Byeiqfu%2FX%2FAQxjwUwBAlwinmbfSy52ObaqhTjD1WPExQRQzSn5EwAFYTCcyNDDBjqkAXHBLWqk8Mez63MWrsKJ2mLAmnQ%2FhYwlf7O74GxKZ%2BgWBPGceRykMupxl%2Fb6QD6dU0DB4iXdHSd8kzmufqtTyVtBcf3I5KkwNQiXsGRYHHF2B%2BBbBY7oT2mOC5H1CgdcQPmFCKqfEjXTWbz6%2B3bLFiD%2FKz6z%2BxmJd5VnPUCBZ4hndRnzjhWPJM1Q4dm4QnDEIBMoi2IQXXUEpaBT3EgIKfRDTpzI&X-Amz-Signature=c8fd561ff5693f23416f0adb2e2f905e219961ab7c6197e0e9a87b501804d43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2K7GLB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDpU7Fl3EoxwLX8O6iI6oCKGmMdcKCPEwxj1eipiRQEMAIhAPioXP9nEu4G7aYsCLMz91sbIa%2F3r3Bp%2BabeMO8afa2PKv8DCB8QABoMNjM3NDIzMTgzODA1IgzJz7bkboHRZhaPuQcq3ANpvKUgXQ%2BEZ0mIvzirajt%2FHw7%2FOprkgIFWp6ip5TrxC5P6GBEtPOFMksaFam98uqvoRX6FZDaYy6OJbE27ruM3LpbXCVnx7ZfEQiSqXrWS9ATKPzSJ1e%2BJlYFnCkJoRZkv5Gntsu3XitYoDxeuexs%2FY12SAIoZD7lOGv1EMcs40kWLXkEaiSX53s7I1ydMiln47K2Vy9uRSf20lds5NOpTe5MLVgxeBKWev3oPnuin0OcjexDG7pqVEsq2m1qOTxf4LWHAtJoTPudqh3hLQkvV6FM587SXL4CXm3VgMw9jXyvluttukBnGdJ6xR02spib2Jw6ANJQjQ0MUCEoupDlGat%2Bu2GygGozBGE9zS7DpwvEWw61mhBKsKuBnwyNm5b0XdoPnc4LgYoDCR72jiZPq83S64K2T%2FeNCEyas%2FjTS%2B96OI3BEHFyYj%2BS4XsniEHfUAvq%2FhNc7Cx0ew9Ka%2Fr0fiTaKknP9oQPtrapHGfoUSn%2Bi9B4IaEutXizFkb7PsZmVpvySVqpYFAMDjCeBzKkFqfE%2FLVpk0D6M413i0ISRIaXRmherMtmyYKuZP6dciziIQB%2Byeiqfu%2FX%2FAQxjwUwBAlwinmbfSy52ObaqhTjD1WPExQRQzSn5EwAFYTCcyNDDBjqkAXHBLWqk8Mez63MWrsKJ2mLAmnQ%2FhYwlf7O74GxKZ%2BgWBPGceRykMupxl%2Fb6QD6dU0DB4iXdHSd8kzmufqtTyVtBcf3I5KkwNQiXsGRYHHF2B%2BBbBY7oT2mOC5H1CgdcQPmFCKqfEjXTWbz6%2B3bLFiD%2FKz6z%2BxmJd5VnPUCBZ4hndRnzjhWPJM1Q4dm4QnDEIBMoi2IQXXUEpaBT3EgIKfRDTpzI&X-Amz-Signature=020eb1969e08fc96f889a2d807f2646bbffd334bfd6bc53c7f21a9271a82a34c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2K7GLB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDpU7Fl3EoxwLX8O6iI6oCKGmMdcKCPEwxj1eipiRQEMAIhAPioXP9nEu4G7aYsCLMz91sbIa%2F3r3Bp%2BabeMO8afa2PKv8DCB8QABoMNjM3NDIzMTgzODA1IgzJz7bkboHRZhaPuQcq3ANpvKUgXQ%2BEZ0mIvzirajt%2FHw7%2FOprkgIFWp6ip5TrxC5P6GBEtPOFMksaFam98uqvoRX6FZDaYy6OJbE27ruM3LpbXCVnx7ZfEQiSqXrWS9ATKPzSJ1e%2BJlYFnCkJoRZkv5Gntsu3XitYoDxeuexs%2FY12SAIoZD7lOGv1EMcs40kWLXkEaiSX53s7I1ydMiln47K2Vy9uRSf20lds5NOpTe5MLVgxeBKWev3oPnuin0OcjexDG7pqVEsq2m1qOTxf4LWHAtJoTPudqh3hLQkvV6FM587SXL4CXm3VgMw9jXyvluttukBnGdJ6xR02spib2Jw6ANJQjQ0MUCEoupDlGat%2Bu2GygGozBGE9zS7DpwvEWw61mhBKsKuBnwyNm5b0XdoPnc4LgYoDCR72jiZPq83S64K2T%2FeNCEyas%2FjTS%2B96OI3BEHFyYj%2BS4XsniEHfUAvq%2FhNc7Cx0ew9Ka%2Fr0fiTaKknP9oQPtrapHGfoUSn%2Bi9B4IaEutXizFkb7PsZmVpvySVqpYFAMDjCeBzKkFqfE%2FLVpk0D6M413i0ISRIaXRmherMtmyYKuZP6dciziIQB%2Byeiqfu%2FX%2FAQxjwUwBAlwinmbfSy52ObaqhTjD1WPExQRQzSn5EwAFYTCcyNDDBjqkAXHBLWqk8Mez63MWrsKJ2mLAmnQ%2FhYwlf7O74GxKZ%2BgWBPGceRykMupxl%2Fb6QD6dU0DB4iXdHSd8kzmufqtTyVtBcf3I5KkwNQiXsGRYHHF2B%2BBbBY7oT2mOC5H1CgdcQPmFCKqfEjXTWbz6%2B3bLFiD%2FKz6z%2BxmJd5VnPUCBZ4hndRnzjhWPJM1Q4dm4QnDEIBMoi2IQXXUEpaBT3EgIKfRDTpzI&X-Amz-Signature=23efeae8fb8d25ce3d2a53c30753e8a3e5a63c31c8895e387f39ee43493e7330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
