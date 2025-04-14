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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6SRHEF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJB1nIda%2BiPu9n04mQCBvOwvgBOd3yZ62K1nxl7sOzZAIgSv5f%2FvOp1JtHc7lKB27ygwWh1RZtIOWOPE0ygYqZjREq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJOtFS6HzvuM0KfcPSrcA5dA9K8z7SeLvNnMcgjcgahA0xsxmIbb7cNK5HqJg8GUkieed7rFx2pK2V5gC0VDicg60xAlKToxdG2aZV9O%2FCzCfY1MxIN3SJWSSa3FygqDRUpMFFFVnYuzNQQ28dq%2Bds0NFdoQRKmzTCvT4aOGUh21zAlYCGPovb94x5omRQ92OIyopbPjFpGCkQS6lNVcRCWFPSSC93yMEy8wEpBSo59Wd5od7rjWnIso2Ahl8cuT9qoVzcI3YYSswMwbZ%2BgVoTHrBoDLJ12XsuMDcfLS8gJxG01gAEd2TpITHriLg6%2Fsnredq8QtFZVXKB9hmnJu%2Bp6OguOLam3RS4VW4OAJ9BG5EMj%2FyA%2BiMruVGZO8FG7%2BK5B0K63o1kpP2%2BBnFzjB1leZqqsjRZTfMnktcUmUSQqrRAishB76sJvu%2Be%2F1ojrDOprXSnQmCQj0qw%2FXgNz8CEwN8o2NP46NqeLp6gKtqv9oJsdyhmzdirHLqNtiAoBcWBvEjBgHxvMTSpR9e6qmrO5FAhTV2BqTgei8kmk3gJ3q5YVdOn6Gd9b6Z5cwS46bvQbcKpCOGhTmLCc5b17tybaseEpvfMRnWWqTBnMwLDPyWHAjeCAM5C7kuaXWE535Q9gmbfEtwXu0KOhvMN6n878GOqUBzt%2Fu%2By7hZ70JmPHsEAzPrbzepLFwej3Sr4z6%2FFMQLZIdM491b7oVuOgvTFNlS56rGtNrH3DCuYlOpty2in8gyzJn9zYdoOKsaacAwgU5Dgj0URctm9BMAvjkZuHGrbmrftbrgwOXquLhwEEpk%2F4dehPdlyoykMBCIxcQKEgCLOwju9%2B1e8DT3%2F6lFRGsbRawz5ckE%2BX67aTe2cTbrNeuGzU0gpOn&X-Amz-Signature=7e0f7cf448e7c49acc9183a8abd360e60d4de9a5b6eff221ba9912cce09d7956&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6SRHEF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJB1nIda%2BiPu9n04mQCBvOwvgBOd3yZ62K1nxl7sOzZAIgSv5f%2FvOp1JtHc7lKB27ygwWh1RZtIOWOPE0ygYqZjREq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJOtFS6HzvuM0KfcPSrcA5dA9K8z7SeLvNnMcgjcgahA0xsxmIbb7cNK5HqJg8GUkieed7rFx2pK2V5gC0VDicg60xAlKToxdG2aZV9O%2FCzCfY1MxIN3SJWSSa3FygqDRUpMFFFVnYuzNQQ28dq%2Bds0NFdoQRKmzTCvT4aOGUh21zAlYCGPovb94x5omRQ92OIyopbPjFpGCkQS6lNVcRCWFPSSC93yMEy8wEpBSo59Wd5od7rjWnIso2Ahl8cuT9qoVzcI3YYSswMwbZ%2BgVoTHrBoDLJ12XsuMDcfLS8gJxG01gAEd2TpITHriLg6%2Fsnredq8QtFZVXKB9hmnJu%2Bp6OguOLam3RS4VW4OAJ9BG5EMj%2FyA%2BiMruVGZO8FG7%2BK5B0K63o1kpP2%2BBnFzjB1leZqqsjRZTfMnktcUmUSQqrRAishB76sJvu%2Be%2F1ojrDOprXSnQmCQj0qw%2FXgNz8CEwN8o2NP46NqeLp6gKtqv9oJsdyhmzdirHLqNtiAoBcWBvEjBgHxvMTSpR9e6qmrO5FAhTV2BqTgei8kmk3gJ3q5YVdOn6Gd9b6Z5cwS46bvQbcKpCOGhTmLCc5b17tybaseEpvfMRnWWqTBnMwLDPyWHAjeCAM5C7kuaXWE535Q9gmbfEtwXu0KOhvMN6n878GOqUBzt%2Fu%2By7hZ70JmPHsEAzPrbzepLFwej3Sr4z6%2FFMQLZIdM491b7oVuOgvTFNlS56rGtNrH3DCuYlOpty2in8gyzJn9zYdoOKsaacAwgU5Dgj0URctm9BMAvjkZuHGrbmrftbrgwOXquLhwEEpk%2F4dehPdlyoykMBCIxcQKEgCLOwju9%2B1e8DT3%2F6lFRGsbRawz5ckE%2BX67aTe2cTbrNeuGzU0gpOn&X-Amz-Signature=8c841898f913ec172a3dd49b7de1a4050a659a21bde01b9b3ee20bc992968a15&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6SRHEF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJB1nIda%2BiPu9n04mQCBvOwvgBOd3yZ62K1nxl7sOzZAIgSv5f%2FvOp1JtHc7lKB27ygwWh1RZtIOWOPE0ygYqZjREq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJOtFS6HzvuM0KfcPSrcA5dA9K8z7SeLvNnMcgjcgahA0xsxmIbb7cNK5HqJg8GUkieed7rFx2pK2V5gC0VDicg60xAlKToxdG2aZV9O%2FCzCfY1MxIN3SJWSSa3FygqDRUpMFFFVnYuzNQQ28dq%2Bds0NFdoQRKmzTCvT4aOGUh21zAlYCGPovb94x5omRQ92OIyopbPjFpGCkQS6lNVcRCWFPSSC93yMEy8wEpBSo59Wd5od7rjWnIso2Ahl8cuT9qoVzcI3YYSswMwbZ%2BgVoTHrBoDLJ12XsuMDcfLS8gJxG01gAEd2TpITHriLg6%2Fsnredq8QtFZVXKB9hmnJu%2Bp6OguOLam3RS4VW4OAJ9BG5EMj%2FyA%2BiMruVGZO8FG7%2BK5B0K63o1kpP2%2BBnFzjB1leZqqsjRZTfMnktcUmUSQqrRAishB76sJvu%2Be%2F1ojrDOprXSnQmCQj0qw%2FXgNz8CEwN8o2NP46NqeLp6gKtqv9oJsdyhmzdirHLqNtiAoBcWBvEjBgHxvMTSpR9e6qmrO5FAhTV2BqTgei8kmk3gJ3q5YVdOn6Gd9b6Z5cwS46bvQbcKpCOGhTmLCc5b17tybaseEpvfMRnWWqTBnMwLDPyWHAjeCAM5C7kuaXWE535Q9gmbfEtwXu0KOhvMN6n878GOqUBzt%2Fu%2By7hZ70JmPHsEAzPrbzepLFwej3Sr4z6%2FFMQLZIdM491b7oVuOgvTFNlS56rGtNrH3DCuYlOpty2in8gyzJn9zYdoOKsaacAwgU5Dgj0URctm9BMAvjkZuHGrbmrftbrgwOXquLhwEEpk%2F4dehPdlyoykMBCIxcQKEgCLOwju9%2B1e8DT3%2F6lFRGsbRawz5ckE%2BX67aTe2cTbrNeuGzU0gpOn&X-Amz-Signature=406f8677ceef1837c1fc76b0e598307c2fb9ce75c903c75f52dd20460adf4342&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6SRHEF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJB1nIda%2BiPu9n04mQCBvOwvgBOd3yZ62K1nxl7sOzZAIgSv5f%2FvOp1JtHc7lKB27ygwWh1RZtIOWOPE0ygYqZjREq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJOtFS6HzvuM0KfcPSrcA5dA9K8z7SeLvNnMcgjcgahA0xsxmIbb7cNK5HqJg8GUkieed7rFx2pK2V5gC0VDicg60xAlKToxdG2aZV9O%2FCzCfY1MxIN3SJWSSa3FygqDRUpMFFFVnYuzNQQ28dq%2Bds0NFdoQRKmzTCvT4aOGUh21zAlYCGPovb94x5omRQ92OIyopbPjFpGCkQS6lNVcRCWFPSSC93yMEy8wEpBSo59Wd5od7rjWnIso2Ahl8cuT9qoVzcI3YYSswMwbZ%2BgVoTHrBoDLJ12XsuMDcfLS8gJxG01gAEd2TpITHriLg6%2Fsnredq8QtFZVXKB9hmnJu%2Bp6OguOLam3RS4VW4OAJ9BG5EMj%2FyA%2BiMruVGZO8FG7%2BK5B0K63o1kpP2%2BBnFzjB1leZqqsjRZTfMnktcUmUSQqrRAishB76sJvu%2Be%2F1ojrDOprXSnQmCQj0qw%2FXgNz8CEwN8o2NP46NqeLp6gKtqv9oJsdyhmzdirHLqNtiAoBcWBvEjBgHxvMTSpR9e6qmrO5FAhTV2BqTgei8kmk3gJ3q5YVdOn6Gd9b6Z5cwS46bvQbcKpCOGhTmLCc5b17tybaseEpvfMRnWWqTBnMwLDPyWHAjeCAM5C7kuaXWE535Q9gmbfEtwXu0KOhvMN6n878GOqUBzt%2Fu%2By7hZ70JmPHsEAzPrbzepLFwej3Sr4z6%2FFMQLZIdM491b7oVuOgvTFNlS56rGtNrH3DCuYlOpty2in8gyzJn9zYdoOKsaacAwgU5Dgj0URctm9BMAvjkZuHGrbmrftbrgwOXquLhwEEpk%2F4dehPdlyoykMBCIxcQKEgCLOwju9%2B1e8DT3%2F6lFRGsbRawz5ckE%2BX67aTe2cTbrNeuGzU0gpOn&X-Amz-Signature=2fbf1b3f8d7c791d225e81e1068c0fc2faed1171e16bc028ef6909a9e2d0262f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6SRHEF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJB1nIda%2BiPu9n04mQCBvOwvgBOd3yZ62K1nxl7sOzZAIgSv5f%2FvOp1JtHc7lKB27ygwWh1RZtIOWOPE0ygYqZjREq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJOtFS6HzvuM0KfcPSrcA5dA9K8z7SeLvNnMcgjcgahA0xsxmIbb7cNK5HqJg8GUkieed7rFx2pK2V5gC0VDicg60xAlKToxdG2aZV9O%2FCzCfY1MxIN3SJWSSa3FygqDRUpMFFFVnYuzNQQ28dq%2Bds0NFdoQRKmzTCvT4aOGUh21zAlYCGPovb94x5omRQ92OIyopbPjFpGCkQS6lNVcRCWFPSSC93yMEy8wEpBSo59Wd5od7rjWnIso2Ahl8cuT9qoVzcI3YYSswMwbZ%2BgVoTHrBoDLJ12XsuMDcfLS8gJxG01gAEd2TpITHriLg6%2Fsnredq8QtFZVXKB9hmnJu%2Bp6OguOLam3RS4VW4OAJ9BG5EMj%2FyA%2BiMruVGZO8FG7%2BK5B0K63o1kpP2%2BBnFzjB1leZqqsjRZTfMnktcUmUSQqrRAishB76sJvu%2Be%2F1ojrDOprXSnQmCQj0qw%2FXgNz8CEwN8o2NP46NqeLp6gKtqv9oJsdyhmzdirHLqNtiAoBcWBvEjBgHxvMTSpR9e6qmrO5FAhTV2BqTgei8kmk3gJ3q5YVdOn6Gd9b6Z5cwS46bvQbcKpCOGhTmLCc5b17tybaseEpvfMRnWWqTBnMwLDPyWHAjeCAM5C7kuaXWE535Q9gmbfEtwXu0KOhvMN6n878GOqUBzt%2Fu%2By7hZ70JmPHsEAzPrbzepLFwej3Sr4z6%2FFMQLZIdM491b7oVuOgvTFNlS56rGtNrH3DCuYlOpty2in8gyzJn9zYdoOKsaacAwgU5Dgj0URctm9BMAvjkZuHGrbmrftbrgwOXquLhwEEpk%2F4dehPdlyoykMBCIxcQKEgCLOwju9%2B1e8DT3%2F6lFRGsbRawz5ckE%2BX67aTe2cTbrNeuGzU0gpOn&X-Amz-Signature=2ab8e6aafce2f5d634e46be98344ca37d37fa3486e484f475996b628a3b831d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
