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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJSUYB3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDkXqGNlwOaPuC2hbf%2F3KpJi5vnphOh9v86kUC6V2JDdgIhAOXiXdZBlzFDv3y7wazghaB53yW%2BzDwjKSflbaDvVmcMKv8DCHsQABoMNjM3NDIzMTgzODA1Igz47foxFxe0OTPxvE8q3AMDEaD88beaUxtTq9DS2Zdk5tBKdIiW4kd3NNRkRjMwoDW9wXIf0jk11iH72d8YR5XCidFyN7DadgMpSdff1nPhY93rVnOreJV1x0MC3W7Jdv6txFke%2BZqS8dkFXZCVe%2B7W2FU24%2BY09g6sPIi8COBJOB6uTOtrEkZ4%2BN%2BcQtaTLzlGUgt1biyu1ZiO0Vd9aS0Qdj9yuMVcq8EAoU1zEOC3tGcqzJuVq5khOHqj4oPE74lYpN1IntGtdB5FqaYGvq9O5hnNDAAo9GbQYCJyINFZcHbixlPYRMc5uVaKS5GlHphVZES64tjo%2BbMB9d32WibRxTGRpqpMHgnEo1czV44uo1tCQISug7l41lPf6atvDAKs7vHY1679MwTDi9hAEZd0LNLaCc9ajKC0OttcpftDauWLiTw5I02cqIZ9d5wD0U9B4wP%2F0%2BWXHbH6zhAz9H1UQMDT4SIAX3F1IxnJAFuLZctH1eUsLvOTUvkCvTTAyVYrys5BNkxS7x7WnY8vHl6RcYGGARGle1CYNp899zGFnvrtHWQ%2FmQQC5jg1oRJkiKnKiqGS56YSzCMJUp8gv3nTxWT5AMBz7K7j6tB9L3U5A4nYQcwcXrP5NKStfW2pQy8k3yOU%2BSyHTGY64DDL0oK%2BBjqkAdVwdzorvZOpEBV8o%2BWVCYIC6E4x7g5RpbJyDxY%2BgDjBwN7ExoU%2BztcgbCWsnlWknxepSXrTrYBg9GSlrRRlPRkMq07SLBleN4zPToviYcBKJfUO4I1omF6LO9foO2X%2FTnj4g6bPmesq84t%2B%2BtwhAkjUdjTVcWIDLCFov7hQ639Uiul3o4k1%2FcZKrpzWemdFPRMH%2FYJGS2QMXRYpWAUo6qKYkyF3&X-Amz-Signature=ceb284538b7faf73fc3c3f207996460eed35730b9aebc201fc3569df3838a802&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJSUYB3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDkXqGNlwOaPuC2hbf%2F3KpJi5vnphOh9v86kUC6V2JDdgIhAOXiXdZBlzFDv3y7wazghaB53yW%2BzDwjKSflbaDvVmcMKv8DCHsQABoMNjM3NDIzMTgzODA1Igz47foxFxe0OTPxvE8q3AMDEaD88beaUxtTq9DS2Zdk5tBKdIiW4kd3NNRkRjMwoDW9wXIf0jk11iH72d8YR5XCidFyN7DadgMpSdff1nPhY93rVnOreJV1x0MC3W7Jdv6txFke%2BZqS8dkFXZCVe%2B7W2FU24%2BY09g6sPIi8COBJOB6uTOtrEkZ4%2BN%2BcQtaTLzlGUgt1biyu1ZiO0Vd9aS0Qdj9yuMVcq8EAoU1zEOC3tGcqzJuVq5khOHqj4oPE74lYpN1IntGtdB5FqaYGvq9O5hnNDAAo9GbQYCJyINFZcHbixlPYRMc5uVaKS5GlHphVZES64tjo%2BbMB9d32WibRxTGRpqpMHgnEo1czV44uo1tCQISug7l41lPf6atvDAKs7vHY1679MwTDi9hAEZd0LNLaCc9ajKC0OttcpftDauWLiTw5I02cqIZ9d5wD0U9B4wP%2F0%2BWXHbH6zhAz9H1UQMDT4SIAX3F1IxnJAFuLZctH1eUsLvOTUvkCvTTAyVYrys5BNkxS7x7WnY8vHl6RcYGGARGle1CYNp899zGFnvrtHWQ%2FmQQC5jg1oRJkiKnKiqGS56YSzCMJUp8gv3nTxWT5AMBz7K7j6tB9L3U5A4nYQcwcXrP5NKStfW2pQy8k3yOU%2BSyHTGY64DDL0oK%2BBjqkAdVwdzorvZOpEBV8o%2BWVCYIC6E4x7g5RpbJyDxY%2BgDjBwN7ExoU%2BztcgbCWsnlWknxepSXrTrYBg9GSlrRRlPRkMq07SLBleN4zPToviYcBKJfUO4I1omF6LO9foO2X%2FTnj4g6bPmesq84t%2B%2BtwhAkjUdjTVcWIDLCFov7hQ639Uiul3o4k1%2FcZKrpzWemdFPRMH%2FYJGS2QMXRYpWAUo6qKYkyF3&X-Amz-Signature=e272f04d91b9fd50e7bc415268897823e31e1d349df0ff42edfd8ffc29f2aeea&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJSUYB3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDkXqGNlwOaPuC2hbf%2F3KpJi5vnphOh9v86kUC6V2JDdgIhAOXiXdZBlzFDv3y7wazghaB53yW%2BzDwjKSflbaDvVmcMKv8DCHsQABoMNjM3NDIzMTgzODA1Igz47foxFxe0OTPxvE8q3AMDEaD88beaUxtTq9DS2Zdk5tBKdIiW4kd3NNRkRjMwoDW9wXIf0jk11iH72d8YR5XCidFyN7DadgMpSdff1nPhY93rVnOreJV1x0MC3W7Jdv6txFke%2BZqS8dkFXZCVe%2B7W2FU24%2BY09g6sPIi8COBJOB6uTOtrEkZ4%2BN%2BcQtaTLzlGUgt1biyu1ZiO0Vd9aS0Qdj9yuMVcq8EAoU1zEOC3tGcqzJuVq5khOHqj4oPE74lYpN1IntGtdB5FqaYGvq9O5hnNDAAo9GbQYCJyINFZcHbixlPYRMc5uVaKS5GlHphVZES64tjo%2BbMB9d32WibRxTGRpqpMHgnEo1czV44uo1tCQISug7l41lPf6atvDAKs7vHY1679MwTDi9hAEZd0LNLaCc9ajKC0OttcpftDauWLiTw5I02cqIZ9d5wD0U9B4wP%2F0%2BWXHbH6zhAz9H1UQMDT4SIAX3F1IxnJAFuLZctH1eUsLvOTUvkCvTTAyVYrys5BNkxS7x7WnY8vHl6RcYGGARGle1CYNp899zGFnvrtHWQ%2FmQQC5jg1oRJkiKnKiqGS56YSzCMJUp8gv3nTxWT5AMBz7K7j6tB9L3U5A4nYQcwcXrP5NKStfW2pQy8k3yOU%2BSyHTGY64DDL0oK%2BBjqkAdVwdzorvZOpEBV8o%2BWVCYIC6E4x7g5RpbJyDxY%2BgDjBwN7ExoU%2BztcgbCWsnlWknxepSXrTrYBg9GSlrRRlPRkMq07SLBleN4zPToviYcBKJfUO4I1omF6LO9foO2X%2FTnj4g6bPmesq84t%2B%2BtwhAkjUdjTVcWIDLCFov7hQ639Uiul3o4k1%2FcZKrpzWemdFPRMH%2FYJGS2QMXRYpWAUo6qKYkyF3&X-Amz-Signature=feaee8f6a0f84f1c04b3dee49f49b75d3bc2cbc4c61bb08a43bd40192f19011e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJSUYB3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDkXqGNlwOaPuC2hbf%2F3KpJi5vnphOh9v86kUC6V2JDdgIhAOXiXdZBlzFDv3y7wazghaB53yW%2BzDwjKSflbaDvVmcMKv8DCHsQABoMNjM3NDIzMTgzODA1Igz47foxFxe0OTPxvE8q3AMDEaD88beaUxtTq9DS2Zdk5tBKdIiW4kd3NNRkRjMwoDW9wXIf0jk11iH72d8YR5XCidFyN7DadgMpSdff1nPhY93rVnOreJV1x0MC3W7Jdv6txFke%2BZqS8dkFXZCVe%2B7W2FU24%2BY09g6sPIi8COBJOB6uTOtrEkZ4%2BN%2BcQtaTLzlGUgt1biyu1ZiO0Vd9aS0Qdj9yuMVcq8EAoU1zEOC3tGcqzJuVq5khOHqj4oPE74lYpN1IntGtdB5FqaYGvq9O5hnNDAAo9GbQYCJyINFZcHbixlPYRMc5uVaKS5GlHphVZES64tjo%2BbMB9d32WibRxTGRpqpMHgnEo1czV44uo1tCQISug7l41lPf6atvDAKs7vHY1679MwTDi9hAEZd0LNLaCc9ajKC0OttcpftDauWLiTw5I02cqIZ9d5wD0U9B4wP%2F0%2BWXHbH6zhAz9H1UQMDT4SIAX3F1IxnJAFuLZctH1eUsLvOTUvkCvTTAyVYrys5BNkxS7x7WnY8vHl6RcYGGARGle1CYNp899zGFnvrtHWQ%2FmQQC5jg1oRJkiKnKiqGS56YSzCMJUp8gv3nTxWT5AMBz7K7j6tB9L3U5A4nYQcwcXrP5NKStfW2pQy8k3yOU%2BSyHTGY64DDL0oK%2BBjqkAdVwdzorvZOpEBV8o%2BWVCYIC6E4x7g5RpbJyDxY%2BgDjBwN7ExoU%2BztcgbCWsnlWknxepSXrTrYBg9GSlrRRlPRkMq07SLBleN4zPToviYcBKJfUO4I1omF6LO9foO2X%2FTnj4g6bPmesq84t%2B%2BtwhAkjUdjTVcWIDLCFov7hQ639Uiul3o4k1%2FcZKrpzWemdFPRMH%2FYJGS2QMXRYpWAUo6qKYkyF3&X-Amz-Signature=1e0589977ee1986177389df2a395f16dc09cabb0d5f57c2fa95db1532bc1967b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJSUYB3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDkXqGNlwOaPuC2hbf%2F3KpJi5vnphOh9v86kUC6V2JDdgIhAOXiXdZBlzFDv3y7wazghaB53yW%2BzDwjKSflbaDvVmcMKv8DCHsQABoMNjM3NDIzMTgzODA1Igz47foxFxe0OTPxvE8q3AMDEaD88beaUxtTq9DS2Zdk5tBKdIiW4kd3NNRkRjMwoDW9wXIf0jk11iH72d8YR5XCidFyN7DadgMpSdff1nPhY93rVnOreJV1x0MC3W7Jdv6txFke%2BZqS8dkFXZCVe%2B7W2FU24%2BY09g6sPIi8COBJOB6uTOtrEkZ4%2BN%2BcQtaTLzlGUgt1biyu1ZiO0Vd9aS0Qdj9yuMVcq8EAoU1zEOC3tGcqzJuVq5khOHqj4oPE74lYpN1IntGtdB5FqaYGvq9O5hnNDAAo9GbQYCJyINFZcHbixlPYRMc5uVaKS5GlHphVZES64tjo%2BbMB9d32WibRxTGRpqpMHgnEo1czV44uo1tCQISug7l41lPf6atvDAKs7vHY1679MwTDi9hAEZd0LNLaCc9ajKC0OttcpftDauWLiTw5I02cqIZ9d5wD0U9B4wP%2F0%2BWXHbH6zhAz9H1UQMDT4SIAX3F1IxnJAFuLZctH1eUsLvOTUvkCvTTAyVYrys5BNkxS7x7WnY8vHl6RcYGGARGle1CYNp899zGFnvrtHWQ%2FmQQC5jg1oRJkiKnKiqGS56YSzCMJUp8gv3nTxWT5AMBz7K7j6tB9L3U5A4nYQcwcXrP5NKStfW2pQy8k3yOU%2BSyHTGY64DDL0oK%2BBjqkAdVwdzorvZOpEBV8o%2BWVCYIC6E4x7g5RpbJyDxY%2BgDjBwN7ExoU%2BztcgbCWsnlWknxepSXrTrYBg9GSlrRRlPRkMq07SLBleN4zPToviYcBKJfUO4I1omF6LO9foO2X%2FTnj4g6bPmesq84t%2B%2BtwhAkjUdjTVcWIDLCFov7hQ639Uiul3o4k1%2FcZKrpzWemdFPRMH%2FYJGS2QMXRYpWAUo6qKYkyF3&X-Amz-Signature=3e405a1d4457422fc6c4fbab2d03d864dd0809e0acac86f391f01dedb5d12479&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
