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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXD3L4WB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKZiyjk9lzPkOA3JMbE8F%2BHJ7UWW1qHlyk3SQwN4p3gwIhAP5jWWWZnzOMIeHk65xbyR5oYSe5k3Bfleb7zh7ZdVEfKv8DCDQQABoMNjM3NDIzMTgzODA1Igzi7ZGKVTGVyantaFsq3AM7BT5qB2nmBqpBfXr8R2CyIDz%2FF%2BPBFzUAcSzkHoqX8rbvxeQ7YX3xcY54dztlbSdOYjpIg0PNTmqzINKRpUvaYkoMJL23zOp6iJhf83Dr2P6s0rpN2P7Yd%2B0jdjksd1piYP5rhKnBoj%2FS%2BQt7LoED7uirdZPO1oOQdB6mmueYhNf3d19r6uHqx3TVIwpcJ1CbZ09nbDTsbAfk1TWtYR8SyeiuASB7fznZOK2qTBDzCQDtlSnjZ36BIJCS7ly93jeMP86wJq0sLVeQs8ZAOY9%2BxSJG2ih1Q0WfdEzdCScLVV8sHjf7%2BaodDhUZW8nXWUMKcUXDSo%2F%2FFzqeXKyEGuT4e5fVAjkxOkceYcHFPZfiIhuNaUqsMlgetV9ncH0bVhmVS63cryb6ZZIqSiYlNOxc8qvZwKMdg7irlhIoEovl3gKgIUBpBfm68Ke1w5GHPoHpwJlPZg2g8Dyxom5j71vTJTz%2FvLpA4j%2Fbe6hAGhym68i2qvPVkq1sCZQWiOeGp%2BmWHUstvZMDqVbLagS6qZPvWbBNqTU%2B1xCMHZ1a3kazHWRFl6iLb1TsliG3VtYwE%2FZop7l5%2FvmZplAOBlSCRZbSDu2HQ1nl2%2BCH2tuLFRKq9wL3CBcijfDcc0MosjDv1fq%2FBjqkARqnllaJDmSpQVF1giAJ0Wl27tc5WRz7XyM244FYnsZN6UIJ%2Fpk8IUUr12AszzC%2BQGnuLDH3aQOp6U4CMJNGxlgJPD0r56zA9QUcBJFABLKRKJa6MfEor0DYBdqTfeTrpGKFE1Gd7ZZH1%2B7xGQ4eNJ1ION%2FpuMRUV3Kk1PBgSa888ZPBd5sao19gYW3G2ZipfN0SX7Ef7n9JITobXDSdfIoqA4vL&X-Amz-Signature=d442fc48482f5ea69adcee6696b0ec3a881bc1918c33db72a587bc4ca4f6c260&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXD3L4WB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKZiyjk9lzPkOA3JMbE8F%2BHJ7UWW1qHlyk3SQwN4p3gwIhAP5jWWWZnzOMIeHk65xbyR5oYSe5k3Bfleb7zh7ZdVEfKv8DCDQQABoMNjM3NDIzMTgzODA1Igzi7ZGKVTGVyantaFsq3AM7BT5qB2nmBqpBfXr8R2CyIDz%2FF%2BPBFzUAcSzkHoqX8rbvxeQ7YX3xcY54dztlbSdOYjpIg0PNTmqzINKRpUvaYkoMJL23zOp6iJhf83Dr2P6s0rpN2P7Yd%2B0jdjksd1piYP5rhKnBoj%2FS%2BQt7LoED7uirdZPO1oOQdB6mmueYhNf3d19r6uHqx3TVIwpcJ1CbZ09nbDTsbAfk1TWtYR8SyeiuASB7fznZOK2qTBDzCQDtlSnjZ36BIJCS7ly93jeMP86wJq0sLVeQs8ZAOY9%2BxSJG2ih1Q0WfdEzdCScLVV8sHjf7%2BaodDhUZW8nXWUMKcUXDSo%2F%2FFzqeXKyEGuT4e5fVAjkxOkceYcHFPZfiIhuNaUqsMlgetV9ncH0bVhmVS63cryb6ZZIqSiYlNOxc8qvZwKMdg7irlhIoEovl3gKgIUBpBfm68Ke1w5GHPoHpwJlPZg2g8Dyxom5j71vTJTz%2FvLpA4j%2Fbe6hAGhym68i2qvPVkq1sCZQWiOeGp%2BmWHUstvZMDqVbLagS6qZPvWbBNqTU%2B1xCMHZ1a3kazHWRFl6iLb1TsliG3VtYwE%2FZop7l5%2FvmZplAOBlSCRZbSDu2HQ1nl2%2BCH2tuLFRKq9wL3CBcijfDcc0MosjDv1fq%2FBjqkARqnllaJDmSpQVF1giAJ0Wl27tc5WRz7XyM244FYnsZN6UIJ%2Fpk8IUUr12AszzC%2BQGnuLDH3aQOp6U4CMJNGxlgJPD0r56zA9QUcBJFABLKRKJa6MfEor0DYBdqTfeTrpGKFE1Gd7ZZH1%2B7xGQ4eNJ1ION%2FpuMRUV3Kk1PBgSa888ZPBd5sao19gYW3G2ZipfN0SX7Ef7n9JITobXDSdfIoqA4vL&X-Amz-Signature=6518d9137a31a16b5e50a04c05438f4f7726eff8e711bb932ce825aa3f630d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXD3L4WB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKZiyjk9lzPkOA3JMbE8F%2BHJ7UWW1qHlyk3SQwN4p3gwIhAP5jWWWZnzOMIeHk65xbyR5oYSe5k3Bfleb7zh7ZdVEfKv8DCDQQABoMNjM3NDIzMTgzODA1Igzi7ZGKVTGVyantaFsq3AM7BT5qB2nmBqpBfXr8R2CyIDz%2FF%2BPBFzUAcSzkHoqX8rbvxeQ7YX3xcY54dztlbSdOYjpIg0PNTmqzINKRpUvaYkoMJL23zOp6iJhf83Dr2P6s0rpN2P7Yd%2B0jdjksd1piYP5rhKnBoj%2FS%2BQt7LoED7uirdZPO1oOQdB6mmueYhNf3d19r6uHqx3TVIwpcJ1CbZ09nbDTsbAfk1TWtYR8SyeiuASB7fznZOK2qTBDzCQDtlSnjZ36BIJCS7ly93jeMP86wJq0sLVeQs8ZAOY9%2BxSJG2ih1Q0WfdEzdCScLVV8sHjf7%2BaodDhUZW8nXWUMKcUXDSo%2F%2FFzqeXKyEGuT4e5fVAjkxOkceYcHFPZfiIhuNaUqsMlgetV9ncH0bVhmVS63cryb6ZZIqSiYlNOxc8qvZwKMdg7irlhIoEovl3gKgIUBpBfm68Ke1w5GHPoHpwJlPZg2g8Dyxom5j71vTJTz%2FvLpA4j%2Fbe6hAGhym68i2qvPVkq1sCZQWiOeGp%2BmWHUstvZMDqVbLagS6qZPvWbBNqTU%2B1xCMHZ1a3kazHWRFl6iLb1TsliG3VtYwE%2FZop7l5%2FvmZplAOBlSCRZbSDu2HQ1nl2%2BCH2tuLFRKq9wL3CBcijfDcc0MosjDv1fq%2FBjqkARqnllaJDmSpQVF1giAJ0Wl27tc5WRz7XyM244FYnsZN6UIJ%2Fpk8IUUr12AszzC%2BQGnuLDH3aQOp6U4CMJNGxlgJPD0r56zA9QUcBJFABLKRKJa6MfEor0DYBdqTfeTrpGKFE1Gd7ZZH1%2B7xGQ4eNJ1ION%2FpuMRUV3Kk1PBgSa888ZPBd5sao19gYW3G2ZipfN0SX7Ef7n9JITobXDSdfIoqA4vL&X-Amz-Signature=e8cc642da855032c242e09d5deb808e8feab08805087411b15f3ba5e7ca34d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXD3L4WB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKZiyjk9lzPkOA3JMbE8F%2BHJ7UWW1qHlyk3SQwN4p3gwIhAP5jWWWZnzOMIeHk65xbyR5oYSe5k3Bfleb7zh7ZdVEfKv8DCDQQABoMNjM3NDIzMTgzODA1Igzi7ZGKVTGVyantaFsq3AM7BT5qB2nmBqpBfXr8R2CyIDz%2FF%2BPBFzUAcSzkHoqX8rbvxeQ7YX3xcY54dztlbSdOYjpIg0PNTmqzINKRpUvaYkoMJL23zOp6iJhf83Dr2P6s0rpN2P7Yd%2B0jdjksd1piYP5rhKnBoj%2FS%2BQt7LoED7uirdZPO1oOQdB6mmueYhNf3d19r6uHqx3TVIwpcJ1CbZ09nbDTsbAfk1TWtYR8SyeiuASB7fznZOK2qTBDzCQDtlSnjZ36BIJCS7ly93jeMP86wJq0sLVeQs8ZAOY9%2BxSJG2ih1Q0WfdEzdCScLVV8sHjf7%2BaodDhUZW8nXWUMKcUXDSo%2F%2FFzqeXKyEGuT4e5fVAjkxOkceYcHFPZfiIhuNaUqsMlgetV9ncH0bVhmVS63cryb6ZZIqSiYlNOxc8qvZwKMdg7irlhIoEovl3gKgIUBpBfm68Ke1w5GHPoHpwJlPZg2g8Dyxom5j71vTJTz%2FvLpA4j%2Fbe6hAGhym68i2qvPVkq1sCZQWiOeGp%2BmWHUstvZMDqVbLagS6qZPvWbBNqTU%2B1xCMHZ1a3kazHWRFl6iLb1TsliG3VtYwE%2FZop7l5%2FvmZplAOBlSCRZbSDu2HQ1nl2%2BCH2tuLFRKq9wL3CBcijfDcc0MosjDv1fq%2FBjqkARqnllaJDmSpQVF1giAJ0Wl27tc5WRz7XyM244FYnsZN6UIJ%2Fpk8IUUr12AszzC%2BQGnuLDH3aQOp6U4CMJNGxlgJPD0r56zA9QUcBJFABLKRKJa6MfEor0DYBdqTfeTrpGKFE1Gd7ZZH1%2B7xGQ4eNJ1ION%2FpuMRUV3Kk1PBgSa888ZPBd5sao19gYW3G2ZipfN0SX7Ef7n9JITobXDSdfIoqA4vL&X-Amz-Signature=d05676f8807ed54016b6d23bb5d7d91c7406b93bc584fc2662210fc0840cb982&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXD3L4WB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKZiyjk9lzPkOA3JMbE8F%2BHJ7UWW1qHlyk3SQwN4p3gwIhAP5jWWWZnzOMIeHk65xbyR5oYSe5k3Bfleb7zh7ZdVEfKv8DCDQQABoMNjM3NDIzMTgzODA1Igzi7ZGKVTGVyantaFsq3AM7BT5qB2nmBqpBfXr8R2CyIDz%2FF%2BPBFzUAcSzkHoqX8rbvxeQ7YX3xcY54dztlbSdOYjpIg0PNTmqzINKRpUvaYkoMJL23zOp6iJhf83Dr2P6s0rpN2P7Yd%2B0jdjksd1piYP5rhKnBoj%2FS%2BQt7LoED7uirdZPO1oOQdB6mmueYhNf3d19r6uHqx3TVIwpcJ1CbZ09nbDTsbAfk1TWtYR8SyeiuASB7fznZOK2qTBDzCQDtlSnjZ36BIJCS7ly93jeMP86wJq0sLVeQs8ZAOY9%2BxSJG2ih1Q0WfdEzdCScLVV8sHjf7%2BaodDhUZW8nXWUMKcUXDSo%2F%2FFzqeXKyEGuT4e5fVAjkxOkceYcHFPZfiIhuNaUqsMlgetV9ncH0bVhmVS63cryb6ZZIqSiYlNOxc8qvZwKMdg7irlhIoEovl3gKgIUBpBfm68Ke1w5GHPoHpwJlPZg2g8Dyxom5j71vTJTz%2FvLpA4j%2Fbe6hAGhym68i2qvPVkq1sCZQWiOeGp%2BmWHUstvZMDqVbLagS6qZPvWbBNqTU%2B1xCMHZ1a3kazHWRFl6iLb1TsliG3VtYwE%2FZop7l5%2FvmZplAOBlSCRZbSDu2HQ1nl2%2BCH2tuLFRKq9wL3CBcijfDcc0MosjDv1fq%2FBjqkARqnllaJDmSpQVF1giAJ0Wl27tc5WRz7XyM244FYnsZN6UIJ%2Fpk8IUUr12AszzC%2BQGnuLDH3aQOp6U4CMJNGxlgJPD0r56zA9QUcBJFABLKRKJa6MfEor0DYBdqTfeTrpGKFE1Gd7ZZH1%2B7xGQ4eNJ1ION%2FpuMRUV3Kk1PBgSa888ZPBd5sao19gYW3G2ZipfN0SX7Ef7n9JITobXDSdfIoqA4vL&X-Amz-Signature=be96ccc0fad93fa6312963fd9b72ca55ea8637454b839049b3f0b5112e8c7606&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
