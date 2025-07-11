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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI4VUBH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaM7oo9cXtg8VF4289plTCK3SmjCncRTlOCtfspc0YUwIgL0V%2BNihgDg0yhYUTqmpr4FNouxF0zYzmDz1hTOU6V0gqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQBRHPRAH0emkaKEyrcA4ZBDsNqZJir0C6EJj2Ip%2FPUXwdaHrmcBkU06IbC859YVTCR6bh8Jcw4h1N0%2F%2BpE44i9y0OUQdbpoOxyhu2z8z09GAGmIWKMHP25J6rdRItZHRfSDOHpzmkPCyHyK%2Bzle9phVLo93JmJjg0OKyhl1wBzybvI4HIfAgIpvzEBV%2B0MgNjoTbKdNzfrlQPRz7sRteJlCrinZv3Mxg5u4lhp23vlMTjvB6kPYIdLW2Hgj0MWKEaUZnbV9L0NF3nd0pMO5teX%2BBDEwGLKVrNecriS%2FjB3sCHGFF6zf38I3lgT8GSj6LngyFDzmF2%2BXPu%2B0JkriAyHtUxjYMWxjAsb7q6natkSs18r01Y6i930EuZtNrtnN%2B8KskD%2F2btChfWPIuD81xRCaQKd6UWDso0reES2T1UnUNdS7uTo98Sz5aymgqghNMvis9JMZS8AAj2OYQjeiTg2cmJQ6s5CHVwUh9bQc7Dt9bZ%2FMSPvZtudcrvWNn7awSIV0HIr0uybBh27uMRym9wyRrm4eNu4XU8LqFIDGfivvf%2BS6mL01sxm8uD%2Fd5dfQCu7eQlkX3Kz%2F%2Fw0P451fO59adIqK7ay2V9iPqyIfYB5INYiH%2BU4zqZ2oWV8d4g4xYyjHRufLffhxCMGMLP%2FxMMGOqUBZZ4UTBH6Y%2BT4MQXdpsGgPzby8TykEC3EJ8fD%2FrWXRTJ6CNj9G688qA1rpmIIK7PAber5ywfnG6Xz2hEdudO3V7rand66y0NhQIGeu%2F8EgsPsGvdQQ20VnpsciLnG13sbyPL7rgXAfLqs9iKwX8RwZakWwFrOTQobzYVCBJZQA%2BXp2rOlu%2Fm9AVFA5lfsXVwX%2FWS1BNYfZOPTxfcxl3Z5dyy2sCSF&X-Amz-Signature=8a2c960ca490ada142e7d19d90d46713c925f6127cce61492929c9241d37a8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI4VUBH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaM7oo9cXtg8VF4289plTCK3SmjCncRTlOCtfspc0YUwIgL0V%2BNihgDg0yhYUTqmpr4FNouxF0zYzmDz1hTOU6V0gqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQBRHPRAH0emkaKEyrcA4ZBDsNqZJir0C6EJj2Ip%2FPUXwdaHrmcBkU06IbC859YVTCR6bh8Jcw4h1N0%2F%2BpE44i9y0OUQdbpoOxyhu2z8z09GAGmIWKMHP25J6rdRItZHRfSDOHpzmkPCyHyK%2Bzle9phVLo93JmJjg0OKyhl1wBzybvI4HIfAgIpvzEBV%2B0MgNjoTbKdNzfrlQPRz7sRteJlCrinZv3Mxg5u4lhp23vlMTjvB6kPYIdLW2Hgj0MWKEaUZnbV9L0NF3nd0pMO5teX%2BBDEwGLKVrNecriS%2FjB3sCHGFF6zf38I3lgT8GSj6LngyFDzmF2%2BXPu%2B0JkriAyHtUxjYMWxjAsb7q6natkSs18r01Y6i930EuZtNrtnN%2B8KskD%2F2btChfWPIuD81xRCaQKd6UWDso0reES2T1UnUNdS7uTo98Sz5aymgqghNMvis9JMZS8AAj2OYQjeiTg2cmJQ6s5CHVwUh9bQc7Dt9bZ%2FMSPvZtudcrvWNn7awSIV0HIr0uybBh27uMRym9wyRrm4eNu4XU8LqFIDGfivvf%2BS6mL01sxm8uD%2Fd5dfQCu7eQlkX3Kz%2F%2Fw0P451fO59adIqK7ay2V9iPqyIfYB5INYiH%2BU4zqZ2oWV8d4g4xYyjHRufLffhxCMGMLP%2FxMMGOqUBZZ4UTBH6Y%2BT4MQXdpsGgPzby8TykEC3EJ8fD%2FrWXRTJ6CNj9G688qA1rpmIIK7PAber5ywfnG6Xz2hEdudO3V7rand66y0NhQIGeu%2F8EgsPsGvdQQ20VnpsciLnG13sbyPL7rgXAfLqs9iKwX8RwZakWwFrOTQobzYVCBJZQA%2BXp2rOlu%2Fm9AVFA5lfsXVwX%2FWS1BNYfZOPTxfcxl3Z5dyy2sCSF&X-Amz-Signature=239fc3eda67db381286425ba125161aeffdd4f754bef5def4590a82560a0b594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI4VUBH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaM7oo9cXtg8VF4289plTCK3SmjCncRTlOCtfspc0YUwIgL0V%2BNihgDg0yhYUTqmpr4FNouxF0zYzmDz1hTOU6V0gqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQBRHPRAH0emkaKEyrcA4ZBDsNqZJir0C6EJj2Ip%2FPUXwdaHrmcBkU06IbC859YVTCR6bh8Jcw4h1N0%2F%2BpE44i9y0OUQdbpoOxyhu2z8z09GAGmIWKMHP25J6rdRItZHRfSDOHpzmkPCyHyK%2Bzle9phVLo93JmJjg0OKyhl1wBzybvI4HIfAgIpvzEBV%2B0MgNjoTbKdNzfrlQPRz7sRteJlCrinZv3Mxg5u4lhp23vlMTjvB6kPYIdLW2Hgj0MWKEaUZnbV9L0NF3nd0pMO5teX%2BBDEwGLKVrNecriS%2FjB3sCHGFF6zf38I3lgT8GSj6LngyFDzmF2%2BXPu%2B0JkriAyHtUxjYMWxjAsb7q6natkSs18r01Y6i930EuZtNrtnN%2B8KskD%2F2btChfWPIuD81xRCaQKd6UWDso0reES2T1UnUNdS7uTo98Sz5aymgqghNMvis9JMZS8AAj2OYQjeiTg2cmJQ6s5CHVwUh9bQc7Dt9bZ%2FMSPvZtudcrvWNn7awSIV0HIr0uybBh27uMRym9wyRrm4eNu4XU8LqFIDGfivvf%2BS6mL01sxm8uD%2Fd5dfQCu7eQlkX3Kz%2F%2Fw0P451fO59adIqK7ay2V9iPqyIfYB5INYiH%2BU4zqZ2oWV8d4g4xYyjHRufLffhxCMGMLP%2FxMMGOqUBZZ4UTBH6Y%2BT4MQXdpsGgPzby8TykEC3EJ8fD%2FrWXRTJ6CNj9G688qA1rpmIIK7PAber5ywfnG6Xz2hEdudO3V7rand66y0NhQIGeu%2F8EgsPsGvdQQ20VnpsciLnG13sbyPL7rgXAfLqs9iKwX8RwZakWwFrOTQobzYVCBJZQA%2BXp2rOlu%2Fm9AVFA5lfsXVwX%2FWS1BNYfZOPTxfcxl3Z5dyy2sCSF&X-Amz-Signature=e1b55db6b9068e2fa4bd5204ae22beed80795b5083e93caf8c07d2839807449e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI4VUBH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaM7oo9cXtg8VF4289plTCK3SmjCncRTlOCtfspc0YUwIgL0V%2BNihgDg0yhYUTqmpr4FNouxF0zYzmDz1hTOU6V0gqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQBRHPRAH0emkaKEyrcA4ZBDsNqZJir0C6EJj2Ip%2FPUXwdaHrmcBkU06IbC859YVTCR6bh8Jcw4h1N0%2F%2BpE44i9y0OUQdbpoOxyhu2z8z09GAGmIWKMHP25J6rdRItZHRfSDOHpzmkPCyHyK%2Bzle9phVLo93JmJjg0OKyhl1wBzybvI4HIfAgIpvzEBV%2B0MgNjoTbKdNzfrlQPRz7sRteJlCrinZv3Mxg5u4lhp23vlMTjvB6kPYIdLW2Hgj0MWKEaUZnbV9L0NF3nd0pMO5teX%2BBDEwGLKVrNecriS%2FjB3sCHGFF6zf38I3lgT8GSj6LngyFDzmF2%2BXPu%2B0JkriAyHtUxjYMWxjAsb7q6natkSs18r01Y6i930EuZtNrtnN%2B8KskD%2F2btChfWPIuD81xRCaQKd6UWDso0reES2T1UnUNdS7uTo98Sz5aymgqghNMvis9JMZS8AAj2OYQjeiTg2cmJQ6s5CHVwUh9bQc7Dt9bZ%2FMSPvZtudcrvWNn7awSIV0HIr0uybBh27uMRym9wyRrm4eNu4XU8LqFIDGfivvf%2BS6mL01sxm8uD%2Fd5dfQCu7eQlkX3Kz%2F%2Fw0P451fO59adIqK7ay2V9iPqyIfYB5INYiH%2BU4zqZ2oWV8d4g4xYyjHRufLffhxCMGMLP%2FxMMGOqUBZZ4UTBH6Y%2BT4MQXdpsGgPzby8TykEC3EJ8fD%2FrWXRTJ6CNj9G688qA1rpmIIK7PAber5ywfnG6Xz2hEdudO3V7rand66y0NhQIGeu%2F8EgsPsGvdQQ20VnpsciLnG13sbyPL7rgXAfLqs9iKwX8RwZakWwFrOTQobzYVCBJZQA%2BXp2rOlu%2Fm9AVFA5lfsXVwX%2FWS1BNYfZOPTxfcxl3Z5dyy2sCSF&X-Amz-Signature=2b51e0c24df0a4fe7eb3269739a92fb88811d6180e0601519d5b62aaf6a30371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI4VUBH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaM7oo9cXtg8VF4289plTCK3SmjCncRTlOCtfspc0YUwIgL0V%2BNihgDg0yhYUTqmpr4FNouxF0zYzmDz1hTOU6V0gqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQBRHPRAH0emkaKEyrcA4ZBDsNqZJir0C6EJj2Ip%2FPUXwdaHrmcBkU06IbC859YVTCR6bh8Jcw4h1N0%2F%2BpE44i9y0OUQdbpoOxyhu2z8z09GAGmIWKMHP25J6rdRItZHRfSDOHpzmkPCyHyK%2Bzle9phVLo93JmJjg0OKyhl1wBzybvI4HIfAgIpvzEBV%2B0MgNjoTbKdNzfrlQPRz7sRteJlCrinZv3Mxg5u4lhp23vlMTjvB6kPYIdLW2Hgj0MWKEaUZnbV9L0NF3nd0pMO5teX%2BBDEwGLKVrNecriS%2FjB3sCHGFF6zf38I3lgT8GSj6LngyFDzmF2%2BXPu%2B0JkriAyHtUxjYMWxjAsb7q6natkSs18r01Y6i930EuZtNrtnN%2B8KskD%2F2btChfWPIuD81xRCaQKd6UWDso0reES2T1UnUNdS7uTo98Sz5aymgqghNMvis9JMZS8AAj2OYQjeiTg2cmJQ6s5CHVwUh9bQc7Dt9bZ%2FMSPvZtudcrvWNn7awSIV0HIr0uybBh27uMRym9wyRrm4eNu4XU8LqFIDGfivvf%2BS6mL01sxm8uD%2Fd5dfQCu7eQlkX3Kz%2F%2Fw0P451fO59adIqK7ay2V9iPqyIfYB5INYiH%2BU4zqZ2oWV8d4g4xYyjHRufLffhxCMGMLP%2FxMMGOqUBZZ4UTBH6Y%2BT4MQXdpsGgPzby8TykEC3EJ8fD%2FrWXRTJ6CNj9G688qA1rpmIIK7PAber5ywfnG6Xz2hEdudO3V7rand66y0NhQIGeu%2F8EgsPsGvdQQ20VnpsciLnG13sbyPL7rgXAfLqs9iKwX8RwZakWwFrOTQobzYVCBJZQA%2BXp2rOlu%2Fm9AVFA5lfsXVwX%2FWS1BNYfZOPTxfcxl3Z5dyy2sCSF&X-Amz-Signature=4af4ae514044c57e4a343ec66405e2747eab22f00d06faee4a598cb1b31d3d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
