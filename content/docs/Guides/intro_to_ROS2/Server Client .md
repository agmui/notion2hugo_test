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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQYYT53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOMY0V6%2B6%2BTUrtH14hZWtbCbQtWRgUpIPlg%2FpTbw69igIgbJtyz1yZ0QPyqU7%2BzycI7RxmXTChGnfWj7JDybSWbj4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCO57VBRlZ%2BHltr8SSrcA692TOxq8Op3NQ2X21%2BSvzhhNhGEFqv%2BE0AZMj3%2FVEgIbtS9YlBuo6Dlzrrr49R8Pl7Ip8EEdV5QREv6Xttc1a2xdIMWEgKG69ESaygkAoRhN4%2FXZsTC5Rxrk4uVVIkx1A7QP7lyo69OSCeoQvk7tR7apU6yb5TUr9LtGU1NYi7U4XWgnr8m19647iy08T1zgTqEETPYYnfYmtxMFvJkqiBLYvcEmghySYPwcfLQxyVWoNzlcqgDayuc46WtLrYpy8dltOjk6%2BrSZ%2FKG4QxwZS1Oxz76bR9wgIpEVhKe09%2BqMW3%2FDKqgCmaM%2FhR6zFYaA9QRU07CXWs9I6zVrs6NtNsvhdNq8GBGD8bhsIouT5A%2BW43oPjEZ49AGokxXn3uH8iqvS0Krc6Jji46bt%2Bm%2FEcDyqdhae%2BPzU57Rqv8QJzOK25JW2fYv2OCgMS%2BAsR78tYKDhRFLCPgvIAuzcNg9qG5ZjafdqQlVl0jU3u3jRujtpVMJQtfHTzSlzXTHy7A9cACJ%2F6cL09fi%2BtH%2Bts5aG%2BtXuQmRodacFlJfbeonmc999oaM1D920HBMf%2BIWTsoSsf471RH5D7nNFEDKo8d9pU6cvkd%2B55ONz9IorVzZKvzkYS61UprIBj2wCe6KML%2FF88QGOqUBg1f449CPzgVQEuHgqfbF0LcKUwzuLReUEdFRNRJz6obKs7eCcNiQOlzIBN%2Fpz4w4K96pmVlkbqgdmvR0%2F6rQFVV%2FuzCcOdkAbDCGibznBH7rMdNbsQB5wNalVeF34zAYynX0WgsMqz1SkoqU%2BRO2dU%2Bwf5EPA1t6UljxLORzO6N7I9hAWMLszTZ4YGCfKbM09kItUCCyFJsNEL10i1jJjoNuNqpA&X-Amz-Signature=96c2d372d9ffeb288a21b2ca5b8f697b7316cc67d1ce0a8581df04a47bd20b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQYYT53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOMY0V6%2B6%2BTUrtH14hZWtbCbQtWRgUpIPlg%2FpTbw69igIgbJtyz1yZ0QPyqU7%2BzycI7RxmXTChGnfWj7JDybSWbj4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCO57VBRlZ%2BHltr8SSrcA692TOxq8Op3NQ2X21%2BSvzhhNhGEFqv%2BE0AZMj3%2FVEgIbtS9YlBuo6Dlzrrr49R8Pl7Ip8EEdV5QREv6Xttc1a2xdIMWEgKG69ESaygkAoRhN4%2FXZsTC5Rxrk4uVVIkx1A7QP7lyo69OSCeoQvk7tR7apU6yb5TUr9LtGU1NYi7U4XWgnr8m19647iy08T1zgTqEETPYYnfYmtxMFvJkqiBLYvcEmghySYPwcfLQxyVWoNzlcqgDayuc46WtLrYpy8dltOjk6%2BrSZ%2FKG4QxwZS1Oxz76bR9wgIpEVhKe09%2BqMW3%2FDKqgCmaM%2FhR6zFYaA9QRU07CXWs9I6zVrs6NtNsvhdNq8GBGD8bhsIouT5A%2BW43oPjEZ49AGokxXn3uH8iqvS0Krc6Jji46bt%2Bm%2FEcDyqdhae%2BPzU57Rqv8QJzOK25JW2fYv2OCgMS%2BAsR78tYKDhRFLCPgvIAuzcNg9qG5ZjafdqQlVl0jU3u3jRujtpVMJQtfHTzSlzXTHy7A9cACJ%2F6cL09fi%2BtH%2Bts5aG%2BtXuQmRodacFlJfbeonmc999oaM1D920HBMf%2BIWTsoSsf471RH5D7nNFEDKo8d9pU6cvkd%2B55ONz9IorVzZKvzkYS61UprIBj2wCe6KML%2FF88QGOqUBg1f449CPzgVQEuHgqfbF0LcKUwzuLReUEdFRNRJz6obKs7eCcNiQOlzIBN%2Fpz4w4K96pmVlkbqgdmvR0%2F6rQFVV%2FuzCcOdkAbDCGibznBH7rMdNbsQB5wNalVeF34zAYynX0WgsMqz1SkoqU%2BRO2dU%2Bwf5EPA1t6UljxLORzO6N7I9hAWMLszTZ4YGCfKbM09kItUCCyFJsNEL10i1jJjoNuNqpA&X-Amz-Signature=c65898fb57d29ae8cefe54f381222036ef87ae92e70789c327b9f525ef11ed63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQYYT53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOMY0V6%2B6%2BTUrtH14hZWtbCbQtWRgUpIPlg%2FpTbw69igIgbJtyz1yZ0QPyqU7%2BzycI7RxmXTChGnfWj7JDybSWbj4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCO57VBRlZ%2BHltr8SSrcA692TOxq8Op3NQ2X21%2BSvzhhNhGEFqv%2BE0AZMj3%2FVEgIbtS9YlBuo6Dlzrrr49R8Pl7Ip8EEdV5QREv6Xttc1a2xdIMWEgKG69ESaygkAoRhN4%2FXZsTC5Rxrk4uVVIkx1A7QP7lyo69OSCeoQvk7tR7apU6yb5TUr9LtGU1NYi7U4XWgnr8m19647iy08T1zgTqEETPYYnfYmtxMFvJkqiBLYvcEmghySYPwcfLQxyVWoNzlcqgDayuc46WtLrYpy8dltOjk6%2BrSZ%2FKG4QxwZS1Oxz76bR9wgIpEVhKe09%2BqMW3%2FDKqgCmaM%2FhR6zFYaA9QRU07CXWs9I6zVrs6NtNsvhdNq8GBGD8bhsIouT5A%2BW43oPjEZ49AGokxXn3uH8iqvS0Krc6Jji46bt%2Bm%2FEcDyqdhae%2BPzU57Rqv8QJzOK25JW2fYv2OCgMS%2BAsR78tYKDhRFLCPgvIAuzcNg9qG5ZjafdqQlVl0jU3u3jRujtpVMJQtfHTzSlzXTHy7A9cACJ%2F6cL09fi%2BtH%2Bts5aG%2BtXuQmRodacFlJfbeonmc999oaM1D920HBMf%2BIWTsoSsf471RH5D7nNFEDKo8d9pU6cvkd%2B55ONz9IorVzZKvzkYS61UprIBj2wCe6KML%2FF88QGOqUBg1f449CPzgVQEuHgqfbF0LcKUwzuLReUEdFRNRJz6obKs7eCcNiQOlzIBN%2Fpz4w4K96pmVlkbqgdmvR0%2F6rQFVV%2FuzCcOdkAbDCGibznBH7rMdNbsQB5wNalVeF34zAYynX0WgsMqz1SkoqU%2BRO2dU%2Bwf5EPA1t6UljxLORzO6N7I9hAWMLszTZ4YGCfKbM09kItUCCyFJsNEL10i1jJjoNuNqpA&X-Amz-Signature=102db4be5d496fccfe3eb7dd691019122e343681fe8d2a9a9a71595fed442ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQYYT53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOMY0V6%2B6%2BTUrtH14hZWtbCbQtWRgUpIPlg%2FpTbw69igIgbJtyz1yZ0QPyqU7%2BzycI7RxmXTChGnfWj7JDybSWbj4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCO57VBRlZ%2BHltr8SSrcA692TOxq8Op3NQ2X21%2BSvzhhNhGEFqv%2BE0AZMj3%2FVEgIbtS9YlBuo6Dlzrrr49R8Pl7Ip8EEdV5QREv6Xttc1a2xdIMWEgKG69ESaygkAoRhN4%2FXZsTC5Rxrk4uVVIkx1A7QP7lyo69OSCeoQvk7tR7apU6yb5TUr9LtGU1NYi7U4XWgnr8m19647iy08T1zgTqEETPYYnfYmtxMFvJkqiBLYvcEmghySYPwcfLQxyVWoNzlcqgDayuc46WtLrYpy8dltOjk6%2BrSZ%2FKG4QxwZS1Oxz76bR9wgIpEVhKe09%2BqMW3%2FDKqgCmaM%2FhR6zFYaA9QRU07CXWs9I6zVrs6NtNsvhdNq8GBGD8bhsIouT5A%2BW43oPjEZ49AGokxXn3uH8iqvS0Krc6Jji46bt%2Bm%2FEcDyqdhae%2BPzU57Rqv8QJzOK25JW2fYv2OCgMS%2BAsR78tYKDhRFLCPgvIAuzcNg9qG5ZjafdqQlVl0jU3u3jRujtpVMJQtfHTzSlzXTHy7A9cACJ%2F6cL09fi%2BtH%2Bts5aG%2BtXuQmRodacFlJfbeonmc999oaM1D920HBMf%2BIWTsoSsf471RH5D7nNFEDKo8d9pU6cvkd%2B55ONz9IorVzZKvzkYS61UprIBj2wCe6KML%2FF88QGOqUBg1f449CPzgVQEuHgqfbF0LcKUwzuLReUEdFRNRJz6obKs7eCcNiQOlzIBN%2Fpz4w4K96pmVlkbqgdmvR0%2F6rQFVV%2FuzCcOdkAbDCGibznBH7rMdNbsQB5wNalVeF34zAYynX0WgsMqz1SkoqU%2BRO2dU%2Bwf5EPA1t6UljxLORzO6N7I9hAWMLszTZ4YGCfKbM09kItUCCyFJsNEL10i1jJjoNuNqpA&X-Amz-Signature=45a519f5ab3055d13cca1254dd77893b2bce29d13a41f69c48c2aea2ec11fed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQYYT53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOMY0V6%2B6%2BTUrtH14hZWtbCbQtWRgUpIPlg%2FpTbw69igIgbJtyz1yZ0QPyqU7%2BzycI7RxmXTChGnfWj7JDybSWbj4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCO57VBRlZ%2BHltr8SSrcA692TOxq8Op3NQ2X21%2BSvzhhNhGEFqv%2BE0AZMj3%2FVEgIbtS9YlBuo6Dlzrrr49R8Pl7Ip8EEdV5QREv6Xttc1a2xdIMWEgKG69ESaygkAoRhN4%2FXZsTC5Rxrk4uVVIkx1A7QP7lyo69OSCeoQvk7tR7apU6yb5TUr9LtGU1NYi7U4XWgnr8m19647iy08T1zgTqEETPYYnfYmtxMFvJkqiBLYvcEmghySYPwcfLQxyVWoNzlcqgDayuc46WtLrYpy8dltOjk6%2BrSZ%2FKG4QxwZS1Oxz76bR9wgIpEVhKe09%2BqMW3%2FDKqgCmaM%2FhR6zFYaA9QRU07CXWs9I6zVrs6NtNsvhdNq8GBGD8bhsIouT5A%2BW43oPjEZ49AGokxXn3uH8iqvS0Krc6Jji46bt%2Bm%2FEcDyqdhae%2BPzU57Rqv8QJzOK25JW2fYv2OCgMS%2BAsR78tYKDhRFLCPgvIAuzcNg9qG5ZjafdqQlVl0jU3u3jRujtpVMJQtfHTzSlzXTHy7A9cACJ%2F6cL09fi%2BtH%2Bts5aG%2BtXuQmRodacFlJfbeonmc999oaM1D920HBMf%2BIWTsoSsf471RH5D7nNFEDKo8d9pU6cvkd%2B55ONz9IorVzZKvzkYS61UprIBj2wCe6KML%2FF88QGOqUBg1f449CPzgVQEuHgqfbF0LcKUwzuLReUEdFRNRJz6obKs7eCcNiQOlzIBN%2Fpz4w4K96pmVlkbqgdmvR0%2F6rQFVV%2FuzCcOdkAbDCGibznBH7rMdNbsQB5wNalVeF34zAYynX0WgsMqz1SkoqU%2BRO2dU%2Bwf5EPA1t6UljxLORzO6N7I9hAWMLszTZ4YGCfKbM09kItUCCyFJsNEL10i1jJjoNuNqpA&X-Amz-Signature=a19a8297c0844f691419dc00f3e1c6eacedc55fa1eae105f68c27fa1f6cdba8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
