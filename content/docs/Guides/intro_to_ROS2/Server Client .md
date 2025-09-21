---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPBAX2J%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD12f6brPmTkGM6UWhwiyWafKCYY5FXmAFRPlEQhlCalgIgUmqMGD0fjoQ5AnUPhGHBtt2PSg8LXMN4li2R%2BaHJUwUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0wu4WwytlBROKP7CrcAz5Ki7TbmxC8%2FJcZXFaScM4GsbTW8fA7QHE%2BBZyBjWx5LELuzZ%2BNcBsGZAPCkTOEU9N2CgC2ZUG4O0ZDSYdqXjIihiy3HQVT85yuiIkFugQqBWJCINc23JaKd1tF7eULxWIb3PffOaH269KgeUtPTfyKTRxIaz0df9v0Y8k7PLdP%2BRqtEXzsCVbUHgDGciP15VORlfaevxuZKyri89WS%2Fd0%2FIIszod7mGX4r%2BqLu8kaWA2zVlkuEhxn8sl6P3Mr7vPfXfFta3sBSY2EYplnaFuR8Ope0lQASwu9DaWnkSjpuJiYm3jZx5Z1xnMQhWWmy1PUDwPLok%2F5qiUHyo6C9lP3IIV5kL5uC5YPAzT53x4F49ZosDIcwlRm9eEuXm%2FGYlzMif1Znhm36r%2FnHHs2WXVgxvK7Dc62OuhtRB7fiKcgumzQt6s9bAH8Khbi5VhuFrXjzt%2F5Cnh%2BSW8Y1rC%2B2j%2BY6UeRCKWkPezb6equD97%2F88xtt7EbFnm1MKOUYOFyPO03yfvx3%2Fk9lZ%2FX6A26%2Fi0hK%2Bj9Jrq5sFjw4WKUdrOHQr1i2e%2Fc1coW1BY%2FaAZlrcVKxSD6LbuLpLYmaZjm7GdOfuj1MGBCAsTwXSpsf9GMvNUffemco9zwjRxliMJeevcYGOqUBsS9uPFRVaXeh4Fg6tlH0Ty0mvj1pau02RZpEii4pn0ckXeZbq%2BHJBFxnUsevZoKNp4tjRCehKdS8kebChdo3bO3H5yp36yXtoWntd3HibU861bEW7dUNPISBtPzN43zjOHgzAPQqarC29AVaSKzsx%2BD%2BF%2BxTg%2BMyuGVttVyLOZZZjkZMgRZpLqcl3U53fCIU8T4RdAdYwRi2SLZR7WrF4o1%2FXzpF&X-Amz-Signature=6ae96480209c25c5df7141add435ffe2e0643d7f1376d9537a002750070d0dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPBAX2J%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD12f6brPmTkGM6UWhwiyWafKCYY5FXmAFRPlEQhlCalgIgUmqMGD0fjoQ5AnUPhGHBtt2PSg8LXMN4li2R%2BaHJUwUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0wu4WwytlBROKP7CrcAz5Ki7TbmxC8%2FJcZXFaScM4GsbTW8fA7QHE%2BBZyBjWx5LELuzZ%2BNcBsGZAPCkTOEU9N2CgC2ZUG4O0ZDSYdqXjIihiy3HQVT85yuiIkFugQqBWJCINc23JaKd1tF7eULxWIb3PffOaH269KgeUtPTfyKTRxIaz0df9v0Y8k7PLdP%2BRqtEXzsCVbUHgDGciP15VORlfaevxuZKyri89WS%2Fd0%2FIIszod7mGX4r%2BqLu8kaWA2zVlkuEhxn8sl6P3Mr7vPfXfFta3sBSY2EYplnaFuR8Ope0lQASwu9DaWnkSjpuJiYm3jZx5Z1xnMQhWWmy1PUDwPLok%2F5qiUHyo6C9lP3IIV5kL5uC5YPAzT53x4F49ZosDIcwlRm9eEuXm%2FGYlzMif1Znhm36r%2FnHHs2WXVgxvK7Dc62OuhtRB7fiKcgumzQt6s9bAH8Khbi5VhuFrXjzt%2F5Cnh%2BSW8Y1rC%2B2j%2BY6UeRCKWkPezb6equD97%2F88xtt7EbFnm1MKOUYOFyPO03yfvx3%2Fk9lZ%2FX6A26%2Fi0hK%2Bj9Jrq5sFjw4WKUdrOHQr1i2e%2Fc1coW1BY%2FaAZlrcVKxSD6LbuLpLYmaZjm7GdOfuj1MGBCAsTwXSpsf9GMvNUffemco9zwjRxliMJeevcYGOqUBsS9uPFRVaXeh4Fg6tlH0Ty0mvj1pau02RZpEii4pn0ckXeZbq%2BHJBFxnUsevZoKNp4tjRCehKdS8kebChdo3bO3H5yp36yXtoWntd3HibU861bEW7dUNPISBtPzN43zjOHgzAPQqarC29AVaSKzsx%2BD%2BF%2BxTg%2BMyuGVttVyLOZZZjkZMgRZpLqcl3U53fCIU8T4RdAdYwRi2SLZR7WrF4o1%2FXzpF&X-Amz-Signature=26fafad574db55bfbb019610d0b8655f03ace8502213c85b12c0610454de23cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPBAX2J%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD12f6brPmTkGM6UWhwiyWafKCYY5FXmAFRPlEQhlCalgIgUmqMGD0fjoQ5AnUPhGHBtt2PSg8LXMN4li2R%2BaHJUwUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0wu4WwytlBROKP7CrcAz5Ki7TbmxC8%2FJcZXFaScM4GsbTW8fA7QHE%2BBZyBjWx5LELuzZ%2BNcBsGZAPCkTOEU9N2CgC2ZUG4O0ZDSYdqXjIihiy3HQVT85yuiIkFugQqBWJCINc23JaKd1tF7eULxWIb3PffOaH269KgeUtPTfyKTRxIaz0df9v0Y8k7PLdP%2BRqtEXzsCVbUHgDGciP15VORlfaevxuZKyri89WS%2Fd0%2FIIszod7mGX4r%2BqLu8kaWA2zVlkuEhxn8sl6P3Mr7vPfXfFta3sBSY2EYplnaFuR8Ope0lQASwu9DaWnkSjpuJiYm3jZx5Z1xnMQhWWmy1PUDwPLok%2F5qiUHyo6C9lP3IIV5kL5uC5YPAzT53x4F49ZosDIcwlRm9eEuXm%2FGYlzMif1Znhm36r%2FnHHs2WXVgxvK7Dc62OuhtRB7fiKcgumzQt6s9bAH8Khbi5VhuFrXjzt%2F5Cnh%2BSW8Y1rC%2B2j%2BY6UeRCKWkPezb6equD97%2F88xtt7EbFnm1MKOUYOFyPO03yfvx3%2Fk9lZ%2FX6A26%2Fi0hK%2Bj9Jrq5sFjw4WKUdrOHQr1i2e%2Fc1coW1BY%2FaAZlrcVKxSD6LbuLpLYmaZjm7GdOfuj1MGBCAsTwXSpsf9GMvNUffemco9zwjRxliMJeevcYGOqUBsS9uPFRVaXeh4Fg6tlH0Ty0mvj1pau02RZpEii4pn0ckXeZbq%2BHJBFxnUsevZoKNp4tjRCehKdS8kebChdo3bO3H5yp36yXtoWntd3HibU861bEW7dUNPISBtPzN43zjOHgzAPQqarC29AVaSKzsx%2BD%2BF%2BxTg%2BMyuGVttVyLOZZZjkZMgRZpLqcl3U53fCIU8T4RdAdYwRi2SLZR7WrF4o1%2FXzpF&X-Amz-Signature=d0d08abe9ec89345f98cf099d3282e15e67962901870f212d5630a22fb8ce056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPBAX2J%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD12f6brPmTkGM6UWhwiyWafKCYY5FXmAFRPlEQhlCalgIgUmqMGD0fjoQ5AnUPhGHBtt2PSg8LXMN4li2R%2BaHJUwUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0wu4WwytlBROKP7CrcAz5Ki7TbmxC8%2FJcZXFaScM4GsbTW8fA7QHE%2BBZyBjWx5LELuzZ%2BNcBsGZAPCkTOEU9N2CgC2ZUG4O0ZDSYdqXjIihiy3HQVT85yuiIkFugQqBWJCINc23JaKd1tF7eULxWIb3PffOaH269KgeUtPTfyKTRxIaz0df9v0Y8k7PLdP%2BRqtEXzsCVbUHgDGciP15VORlfaevxuZKyri89WS%2Fd0%2FIIszod7mGX4r%2BqLu8kaWA2zVlkuEhxn8sl6P3Mr7vPfXfFta3sBSY2EYplnaFuR8Ope0lQASwu9DaWnkSjpuJiYm3jZx5Z1xnMQhWWmy1PUDwPLok%2F5qiUHyo6C9lP3IIV5kL5uC5YPAzT53x4F49ZosDIcwlRm9eEuXm%2FGYlzMif1Znhm36r%2FnHHs2WXVgxvK7Dc62OuhtRB7fiKcgumzQt6s9bAH8Khbi5VhuFrXjzt%2F5Cnh%2BSW8Y1rC%2B2j%2BY6UeRCKWkPezb6equD97%2F88xtt7EbFnm1MKOUYOFyPO03yfvx3%2Fk9lZ%2FX6A26%2Fi0hK%2Bj9Jrq5sFjw4WKUdrOHQr1i2e%2Fc1coW1BY%2FaAZlrcVKxSD6LbuLpLYmaZjm7GdOfuj1MGBCAsTwXSpsf9GMvNUffemco9zwjRxliMJeevcYGOqUBsS9uPFRVaXeh4Fg6tlH0Ty0mvj1pau02RZpEii4pn0ckXeZbq%2BHJBFxnUsevZoKNp4tjRCehKdS8kebChdo3bO3H5yp36yXtoWntd3HibU861bEW7dUNPISBtPzN43zjOHgzAPQqarC29AVaSKzsx%2BD%2BF%2BxTg%2BMyuGVttVyLOZZZjkZMgRZpLqcl3U53fCIU8T4RdAdYwRi2SLZR7WrF4o1%2FXzpF&X-Amz-Signature=92f1161bcabc07b1ff447e2e27adcee91d99e7c988859b75c3e73bc49ee621b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPBAX2J%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD12f6brPmTkGM6UWhwiyWafKCYY5FXmAFRPlEQhlCalgIgUmqMGD0fjoQ5AnUPhGHBtt2PSg8LXMN4li2R%2BaHJUwUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0wu4WwytlBROKP7CrcAz5Ki7TbmxC8%2FJcZXFaScM4GsbTW8fA7QHE%2BBZyBjWx5LELuzZ%2BNcBsGZAPCkTOEU9N2CgC2ZUG4O0ZDSYdqXjIihiy3HQVT85yuiIkFugQqBWJCINc23JaKd1tF7eULxWIb3PffOaH269KgeUtPTfyKTRxIaz0df9v0Y8k7PLdP%2BRqtEXzsCVbUHgDGciP15VORlfaevxuZKyri89WS%2Fd0%2FIIszod7mGX4r%2BqLu8kaWA2zVlkuEhxn8sl6P3Mr7vPfXfFta3sBSY2EYplnaFuR8Ope0lQASwu9DaWnkSjpuJiYm3jZx5Z1xnMQhWWmy1PUDwPLok%2F5qiUHyo6C9lP3IIV5kL5uC5YPAzT53x4F49ZosDIcwlRm9eEuXm%2FGYlzMif1Znhm36r%2FnHHs2WXVgxvK7Dc62OuhtRB7fiKcgumzQt6s9bAH8Khbi5VhuFrXjzt%2F5Cnh%2BSW8Y1rC%2B2j%2BY6UeRCKWkPezb6equD97%2F88xtt7EbFnm1MKOUYOFyPO03yfvx3%2Fk9lZ%2FX6A26%2Fi0hK%2Bj9Jrq5sFjw4WKUdrOHQr1i2e%2Fc1coW1BY%2FaAZlrcVKxSD6LbuLpLYmaZjm7GdOfuj1MGBCAsTwXSpsf9GMvNUffemco9zwjRxliMJeevcYGOqUBsS9uPFRVaXeh4Fg6tlH0Ty0mvj1pau02RZpEii4pn0ckXeZbq%2BHJBFxnUsevZoKNp4tjRCehKdS8kebChdo3bO3H5yp36yXtoWntd3HibU861bEW7dUNPISBtPzN43zjOHgzAPQqarC29AVaSKzsx%2BD%2BF%2BxTg%2BMyuGVttVyLOZZZjkZMgRZpLqcl3U53fCIU8T4RdAdYwRi2SLZR7WrF4o1%2FXzpF&X-Amz-Signature=704a767c8a59d7a1ee186e04fb8b27f0c80c0d0bc7584ab604def79f3abc35bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
