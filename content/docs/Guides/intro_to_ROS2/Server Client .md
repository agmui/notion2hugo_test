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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YYIVYV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGOoAPGk%2BarPAun%2Fhp7fEKnhMXcxi0%2B9OHZUIQL42XgsAiEAnCT6DAndS8UKTxLN4UWb77zL8b1cyVkAMepGnLw9wgYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7tVAdURmuQFByI8CrcA8emdxY%2B%2BbBgbNKNR2u9VJEBr8zd4k8UaqdEzBbOci%2B%2B7ivHmmt9Om5oDDcQc7M7%2FDOmm3gIGVe5gQkVI5M0DPX2VHHCRoSiQFxrkN9e1DjuN7epeoOVOBtD9qUc88QPH0IJmGe0%2Fvic%2FV4ltPTQGRubgOosIf5g67LJgAV5moPHzxVQh8QSzJTPo%2BIXUxntG5clkO%2FJBCKpuaooTR9d8X%2BOCJiasb%2BuLPBDjXO7XiB3KEdKUTEHJSXP%2B6I8Cryvrl34LACBbiYHtacga51IipOVtI8%2F7uI1uVFQmaB8j4o0itEqzVfqep9qJgsKrvoSzGBXbicNeMQFxwW%2F5awMOIDv5berC%2BCNmS8TG1ykgP3GOu8jWeDUFErt8UkFZsJ4RNhjwh1Lqa2t9VJQZFQyC%2F8Ge4tfBka9Ot4fCq4YsiiKxwTdBqlDZEizzd95JjzU9KSCzh8sjymed068PeWSbtzD0M2slEZdtRrisajLr6kZdPbKvl0DO5kfS70u4sW9ryoqLBmQ%2FTXXORlkik95zhz8OOiAdrQSen5IaE96M8WEUa1Yxw04cpoiALFcpGHB3CuPh22VKqrglnaJLkVd0DkiaQWxOeAoULb9nm0ws5ZO1IlhrX8l1df%2BPhsiMO%2BN7b8GOqUBO%2FICC3xXMO0m2IWXOMTfjhD%2BWs3XFrsR3XCnisd%2BVtk6Gnuwfp%2F1tUaTP0OdDj5A8sHixDiY4e6psAjaoaExcetIpHOvQGyFJXYCeSyym1MueZv%2FTvULQUU0JMBaxm0OnkxvR%2Fg1wgwWr7uQ8EEqhl4i%2FFu%2BNEolWssCmxcEIdYVO168PHI34XAgHnyo%2FYDUC4BEwr3yO7KirZoURCBmTEI8tZR8&X-Amz-Signature=66bc8980c98d0d0c4449c453296d70333d2ae23fa6052348bd1552a02150535f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YYIVYV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGOoAPGk%2BarPAun%2Fhp7fEKnhMXcxi0%2B9OHZUIQL42XgsAiEAnCT6DAndS8UKTxLN4UWb77zL8b1cyVkAMepGnLw9wgYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7tVAdURmuQFByI8CrcA8emdxY%2B%2BbBgbNKNR2u9VJEBr8zd4k8UaqdEzBbOci%2B%2B7ivHmmt9Om5oDDcQc7M7%2FDOmm3gIGVe5gQkVI5M0DPX2VHHCRoSiQFxrkN9e1DjuN7epeoOVOBtD9qUc88QPH0IJmGe0%2Fvic%2FV4ltPTQGRubgOosIf5g67LJgAV5moPHzxVQh8QSzJTPo%2BIXUxntG5clkO%2FJBCKpuaooTR9d8X%2BOCJiasb%2BuLPBDjXO7XiB3KEdKUTEHJSXP%2B6I8Cryvrl34LACBbiYHtacga51IipOVtI8%2F7uI1uVFQmaB8j4o0itEqzVfqep9qJgsKrvoSzGBXbicNeMQFxwW%2F5awMOIDv5berC%2BCNmS8TG1ykgP3GOu8jWeDUFErt8UkFZsJ4RNhjwh1Lqa2t9VJQZFQyC%2F8Ge4tfBka9Ot4fCq4YsiiKxwTdBqlDZEizzd95JjzU9KSCzh8sjymed068PeWSbtzD0M2slEZdtRrisajLr6kZdPbKvl0DO5kfS70u4sW9ryoqLBmQ%2FTXXORlkik95zhz8OOiAdrQSen5IaE96M8WEUa1Yxw04cpoiALFcpGHB3CuPh22VKqrglnaJLkVd0DkiaQWxOeAoULb9nm0ws5ZO1IlhrX8l1df%2BPhsiMO%2BN7b8GOqUBO%2FICC3xXMO0m2IWXOMTfjhD%2BWs3XFrsR3XCnisd%2BVtk6Gnuwfp%2F1tUaTP0OdDj5A8sHixDiY4e6psAjaoaExcetIpHOvQGyFJXYCeSyym1MueZv%2FTvULQUU0JMBaxm0OnkxvR%2Fg1wgwWr7uQ8EEqhl4i%2FFu%2BNEolWssCmxcEIdYVO168PHI34XAgHnyo%2FYDUC4BEwr3yO7KirZoURCBmTEI8tZR8&X-Amz-Signature=23012a9e4b01727e3cd045cc4c2cfa718c33f2bcd74350f496d0246199b3b348&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YYIVYV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGOoAPGk%2BarPAun%2Fhp7fEKnhMXcxi0%2B9OHZUIQL42XgsAiEAnCT6DAndS8UKTxLN4UWb77zL8b1cyVkAMepGnLw9wgYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7tVAdURmuQFByI8CrcA8emdxY%2B%2BbBgbNKNR2u9VJEBr8zd4k8UaqdEzBbOci%2B%2B7ivHmmt9Om5oDDcQc7M7%2FDOmm3gIGVe5gQkVI5M0DPX2VHHCRoSiQFxrkN9e1DjuN7epeoOVOBtD9qUc88QPH0IJmGe0%2Fvic%2FV4ltPTQGRubgOosIf5g67LJgAV5moPHzxVQh8QSzJTPo%2BIXUxntG5clkO%2FJBCKpuaooTR9d8X%2BOCJiasb%2BuLPBDjXO7XiB3KEdKUTEHJSXP%2B6I8Cryvrl34LACBbiYHtacga51IipOVtI8%2F7uI1uVFQmaB8j4o0itEqzVfqep9qJgsKrvoSzGBXbicNeMQFxwW%2F5awMOIDv5berC%2BCNmS8TG1ykgP3GOu8jWeDUFErt8UkFZsJ4RNhjwh1Lqa2t9VJQZFQyC%2F8Ge4tfBka9Ot4fCq4YsiiKxwTdBqlDZEizzd95JjzU9KSCzh8sjymed068PeWSbtzD0M2slEZdtRrisajLr6kZdPbKvl0DO5kfS70u4sW9ryoqLBmQ%2FTXXORlkik95zhz8OOiAdrQSen5IaE96M8WEUa1Yxw04cpoiALFcpGHB3CuPh22VKqrglnaJLkVd0DkiaQWxOeAoULb9nm0ws5ZO1IlhrX8l1df%2BPhsiMO%2BN7b8GOqUBO%2FICC3xXMO0m2IWXOMTfjhD%2BWs3XFrsR3XCnisd%2BVtk6Gnuwfp%2F1tUaTP0OdDj5A8sHixDiY4e6psAjaoaExcetIpHOvQGyFJXYCeSyym1MueZv%2FTvULQUU0JMBaxm0OnkxvR%2Fg1wgwWr7uQ8EEqhl4i%2FFu%2BNEolWssCmxcEIdYVO168PHI34XAgHnyo%2FYDUC4BEwr3yO7KirZoURCBmTEI8tZR8&X-Amz-Signature=55d07e4ae57a31790c461aa9a7d0b26d5fda90155e8138b5058894e89461aed1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YYIVYV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGOoAPGk%2BarPAun%2Fhp7fEKnhMXcxi0%2B9OHZUIQL42XgsAiEAnCT6DAndS8UKTxLN4UWb77zL8b1cyVkAMepGnLw9wgYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7tVAdURmuQFByI8CrcA8emdxY%2B%2BbBgbNKNR2u9VJEBr8zd4k8UaqdEzBbOci%2B%2B7ivHmmt9Om5oDDcQc7M7%2FDOmm3gIGVe5gQkVI5M0DPX2VHHCRoSiQFxrkN9e1DjuN7epeoOVOBtD9qUc88QPH0IJmGe0%2Fvic%2FV4ltPTQGRubgOosIf5g67LJgAV5moPHzxVQh8QSzJTPo%2BIXUxntG5clkO%2FJBCKpuaooTR9d8X%2BOCJiasb%2BuLPBDjXO7XiB3KEdKUTEHJSXP%2B6I8Cryvrl34LACBbiYHtacga51IipOVtI8%2F7uI1uVFQmaB8j4o0itEqzVfqep9qJgsKrvoSzGBXbicNeMQFxwW%2F5awMOIDv5berC%2BCNmS8TG1ykgP3GOu8jWeDUFErt8UkFZsJ4RNhjwh1Lqa2t9VJQZFQyC%2F8Ge4tfBka9Ot4fCq4YsiiKxwTdBqlDZEizzd95JjzU9KSCzh8sjymed068PeWSbtzD0M2slEZdtRrisajLr6kZdPbKvl0DO5kfS70u4sW9ryoqLBmQ%2FTXXORlkik95zhz8OOiAdrQSen5IaE96M8WEUa1Yxw04cpoiALFcpGHB3CuPh22VKqrglnaJLkVd0DkiaQWxOeAoULb9nm0ws5ZO1IlhrX8l1df%2BPhsiMO%2BN7b8GOqUBO%2FICC3xXMO0m2IWXOMTfjhD%2BWs3XFrsR3XCnisd%2BVtk6Gnuwfp%2F1tUaTP0OdDj5A8sHixDiY4e6psAjaoaExcetIpHOvQGyFJXYCeSyym1MueZv%2FTvULQUU0JMBaxm0OnkxvR%2Fg1wgwWr7uQ8EEqhl4i%2FFu%2BNEolWssCmxcEIdYVO168PHI34XAgHnyo%2FYDUC4BEwr3yO7KirZoURCBmTEI8tZR8&X-Amz-Signature=01382d146b332a742c7f29a313bd2847d5a411c90ff5ab71c16f6c8c8964f10b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YYIVYV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGOoAPGk%2BarPAun%2Fhp7fEKnhMXcxi0%2B9OHZUIQL42XgsAiEAnCT6DAndS8UKTxLN4UWb77zL8b1cyVkAMepGnLw9wgYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7tVAdURmuQFByI8CrcA8emdxY%2B%2BbBgbNKNR2u9VJEBr8zd4k8UaqdEzBbOci%2B%2B7ivHmmt9Om5oDDcQc7M7%2FDOmm3gIGVe5gQkVI5M0DPX2VHHCRoSiQFxrkN9e1DjuN7epeoOVOBtD9qUc88QPH0IJmGe0%2Fvic%2FV4ltPTQGRubgOosIf5g67LJgAV5moPHzxVQh8QSzJTPo%2BIXUxntG5clkO%2FJBCKpuaooTR9d8X%2BOCJiasb%2BuLPBDjXO7XiB3KEdKUTEHJSXP%2B6I8Cryvrl34LACBbiYHtacga51IipOVtI8%2F7uI1uVFQmaB8j4o0itEqzVfqep9qJgsKrvoSzGBXbicNeMQFxwW%2F5awMOIDv5berC%2BCNmS8TG1ykgP3GOu8jWeDUFErt8UkFZsJ4RNhjwh1Lqa2t9VJQZFQyC%2F8Ge4tfBka9Ot4fCq4YsiiKxwTdBqlDZEizzd95JjzU9KSCzh8sjymed068PeWSbtzD0M2slEZdtRrisajLr6kZdPbKvl0DO5kfS70u4sW9ryoqLBmQ%2FTXXORlkik95zhz8OOiAdrQSen5IaE96M8WEUa1Yxw04cpoiALFcpGHB3CuPh22VKqrglnaJLkVd0DkiaQWxOeAoULb9nm0ws5ZO1IlhrX8l1df%2BPhsiMO%2BN7b8GOqUBO%2FICC3xXMO0m2IWXOMTfjhD%2BWs3XFrsR3XCnisd%2BVtk6Gnuwfp%2F1tUaTP0OdDj5A8sHixDiY4e6psAjaoaExcetIpHOvQGyFJXYCeSyym1MueZv%2FTvULQUU0JMBaxm0OnkxvR%2Fg1wgwWr7uQ8EEqhl4i%2FFu%2BNEolWssCmxcEIdYVO168PHI34XAgHnyo%2FYDUC4BEwr3yO7KirZoURCBmTEI8tZR8&X-Amz-Signature=2bbde28e4e5d864520f9c325e1b2a9e1e31204862ce309784218d50ab8b0fb62&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
