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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN26Z7G2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHsR7CEeqKWd6eftgInW4bMO65gDgOIUUdK%2FFZ7LC2r5AiEA%2BuquQugqX6LHAclXMLPNhtHPmhx4kFLPieNK7UvbCKQqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTn4DJvntzLxITH6CrcA0WQku54pBSTlkoGYtkxMQNPAipHBsGHxhCOeHplpkmsQWOyXOMVt9v8hY1PpKu5CsfLfh0PY07CUdn7rQsVkXRWri7coLoXMM5FP%2BuVZHM1jNVfwnSkogyOnDeUJai%2BgKNv5jK8G6iJBQydiXNCzVPm5%2FufCezTZc9F77ir2SRSnv7iU6kUxkkf4YI75vw6GaW%2BOJXYHWkCLogfxcD70PsIXgufiXjrBeXMAHBRWnIjDCaeVm98d%2B5H5KVJr4lsrdliw0beF%2BacJSTnM3B0srXw1I6sE%2FC5LrdX8s6H9kkvYWI1RoEn9UKRX%2Fa6y9KIUhbaA%2BZPxJsql%2BjGxr717YMIwL%2Fr4aoHBRp%2BKRT%2Bu9zjlY2fCxIy4i3T2acqxMQRsyXqtrIWpYDQzWe17lnnvWfIhZ5YZmkCU6AEqF6sYfgWNQcjXQLf3yeMYZsYnA4qj3WHwxqNC8vhJme4PY0HCkD8qee4RPdpy7jtTZA1QFng6ceKZs9Ui8Zd5ATDSn%2Bd8TegGBFSg8my3Q2V2q%2FNC7fjy%2F57eVlV5MufhBZPXNVrF6FwYe3PX4%2FbSPUeXMC6ibKVF%2FdRwYY5BqElA%2BJwNbwZrKun6TX%2F8n%2F6TlFZ9BccaT7Pa7yk0e%2FrsklEMOCn88EGOqUBtAgA093U%2BAp93pHJawEnOOBuemQ4x9GtTjrmhDyPWWhSP8Xh%2Bl4Ia0f1A6N8i3qlVk9fnKIOt4g0rFBzzI%2Fm34r7IBcrEvBhA8pVSMYaPnVHugqUFVPVBpRp4yhal3FlQy9112kSaT99pSrd2MsUTIOFTzIpXmVelTqTb2%2BO89bkWl4dhpCbIwZB2H6nyN7toyLhyxZPMQcEaOgGJzXb4EbPVuly&X-Amz-Signature=3374924abe32cc57ae019c124891d7eac531aae06b362d3bb7658aeeef670d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN26Z7G2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHsR7CEeqKWd6eftgInW4bMO65gDgOIUUdK%2FFZ7LC2r5AiEA%2BuquQugqX6LHAclXMLPNhtHPmhx4kFLPieNK7UvbCKQqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTn4DJvntzLxITH6CrcA0WQku54pBSTlkoGYtkxMQNPAipHBsGHxhCOeHplpkmsQWOyXOMVt9v8hY1PpKu5CsfLfh0PY07CUdn7rQsVkXRWri7coLoXMM5FP%2BuVZHM1jNVfwnSkogyOnDeUJai%2BgKNv5jK8G6iJBQydiXNCzVPm5%2FufCezTZc9F77ir2SRSnv7iU6kUxkkf4YI75vw6GaW%2BOJXYHWkCLogfxcD70PsIXgufiXjrBeXMAHBRWnIjDCaeVm98d%2B5H5KVJr4lsrdliw0beF%2BacJSTnM3B0srXw1I6sE%2FC5LrdX8s6H9kkvYWI1RoEn9UKRX%2Fa6y9KIUhbaA%2BZPxJsql%2BjGxr717YMIwL%2Fr4aoHBRp%2BKRT%2Bu9zjlY2fCxIy4i3T2acqxMQRsyXqtrIWpYDQzWe17lnnvWfIhZ5YZmkCU6AEqF6sYfgWNQcjXQLf3yeMYZsYnA4qj3WHwxqNC8vhJme4PY0HCkD8qee4RPdpy7jtTZA1QFng6ceKZs9Ui8Zd5ATDSn%2Bd8TegGBFSg8my3Q2V2q%2FNC7fjy%2F57eVlV5MufhBZPXNVrF6FwYe3PX4%2FbSPUeXMC6ibKVF%2FdRwYY5BqElA%2BJwNbwZrKun6TX%2F8n%2F6TlFZ9BccaT7Pa7yk0e%2FrsklEMOCn88EGOqUBtAgA093U%2BAp93pHJawEnOOBuemQ4x9GtTjrmhDyPWWhSP8Xh%2Bl4Ia0f1A6N8i3qlVk9fnKIOt4g0rFBzzI%2Fm34r7IBcrEvBhA8pVSMYaPnVHugqUFVPVBpRp4yhal3FlQy9112kSaT99pSrd2MsUTIOFTzIpXmVelTqTb2%2BO89bkWl4dhpCbIwZB2H6nyN7toyLhyxZPMQcEaOgGJzXb4EbPVuly&X-Amz-Signature=d93567680f7be6533c6c036a67daf2b116efad8beb7e84926052866221ad408f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN26Z7G2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHsR7CEeqKWd6eftgInW4bMO65gDgOIUUdK%2FFZ7LC2r5AiEA%2BuquQugqX6LHAclXMLPNhtHPmhx4kFLPieNK7UvbCKQqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTn4DJvntzLxITH6CrcA0WQku54pBSTlkoGYtkxMQNPAipHBsGHxhCOeHplpkmsQWOyXOMVt9v8hY1PpKu5CsfLfh0PY07CUdn7rQsVkXRWri7coLoXMM5FP%2BuVZHM1jNVfwnSkogyOnDeUJai%2BgKNv5jK8G6iJBQydiXNCzVPm5%2FufCezTZc9F77ir2SRSnv7iU6kUxkkf4YI75vw6GaW%2BOJXYHWkCLogfxcD70PsIXgufiXjrBeXMAHBRWnIjDCaeVm98d%2B5H5KVJr4lsrdliw0beF%2BacJSTnM3B0srXw1I6sE%2FC5LrdX8s6H9kkvYWI1RoEn9UKRX%2Fa6y9KIUhbaA%2BZPxJsql%2BjGxr717YMIwL%2Fr4aoHBRp%2BKRT%2Bu9zjlY2fCxIy4i3T2acqxMQRsyXqtrIWpYDQzWe17lnnvWfIhZ5YZmkCU6AEqF6sYfgWNQcjXQLf3yeMYZsYnA4qj3WHwxqNC8vhJme4PY0HCkD8qee4RPdpy7jtTZA1QFng6ceKZs9Ui8Zd5ATDSn%2Bd8TegGBFSg8my3Q2V2q%2FNC7fjy%2F57eVlV5MufhBZPXNVrF6FwYe3PX4%2FbSPUeXMC6ibKVF%2FdRwYY5BqElA%2BJwNbwZrKun6TX%2F8n%2F6TlFZ9BccaT7Pa7yk0e%2FrsklEMOCn88EGOqUBtAgA093U%2BAp93pHJawEnOOBuemQ4x9GtTjrmhDyPWWhSP8Xh%2Bl4Ia0f1A6N8i3qlVk9fnKIOt4g0rFBzzI%2Fm34r7IBcrEvBhA8pVSMYaPnVHugqUFVPVBpRp4yhal3FlQy9112kSaT99pSrd2MsUTIOFTzIpXmVelTqTb2%2BO89bkWl4dhpCbIwZB2H6nyN7toyLhyxZPMQcEaOgGJzXb4EbPVuly&X-Amz-Signature=dd1272793a85b70eaa91ebe1183de8ac1d3e158846517e733118728c71e7c526&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN26Z7G2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHsR7CEeqKWd6eftgInW4bMO65gDgOIUUdK%2FFZ7LC2r5AiEA%2BuquQugqX6LHAclXMLPNhtHPmhx4kFLPieNK7UvbCKQqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTn4DJvntzLxITH6CrcA0WQku54pBSTlkoGYtkxMQNPAipHBsGHxhCOeHplpkmsQWOyXOMVt9v8hY1PpKu5CsfLfh0PY07CUdn7rQsVkXRWri7coLoXMM5FP%2BuVZHM1jNVfwnSkogyOnDeUJai%2BgKNv5jK8G6iJBQydiXNCzVPm5%2FufCezTZc9F77ir2SRSnv7iU6kUxkkf4YI75vw6GaW%2BOJXYHWkCLogfxcD70PsIXgufiXjrBeXMAHBRWnIjDCaeVm98d%2B5H5KVJr4lsrdliw0beF%2BacJSTnM3B0srXw1I6sE%2FC5LrdX8s6H9kkvYWI1RoEn9UKRX%2Fa6y9KIUhbaA%2BZPxJsql%2BjGxr717YMIwL%2Fr4aoHBRp%2BKRT%2Bu9zjlY2fCxIy4i3T2acqxMQRsyXqtrIWpYDQzWe17lnnvWfIhZ5YZmkCU6AEqF6sYfgWNQcjXQLf3yeMYZsYnA4qj3WHwxqNC8vhJme4PY0HCkD8qee4RPdpy7jtTZA1QFng6ceKZs9Ui8Zd5ATDSn%2Bd8TegGBFSg8my3Q2V2q%2FNC7fjy%2F57eVlV5MufhBZPXNVrF6FwYe3PX4%2FbSPUeXMC6ibKVF%2FdRwYY5BqElA%2BJwNbwZrKun6TX%2F8n%2F6TlFZ9BccaT7Pa7yk0e%2FrsklEMOCn88EGOqUBtAgA093U%2BAp93pHJawEnOOBuemQ4x9GtTjrmhDyPWWhSP8Xh%2Bl4Ia0f1A6N8i3qlVk9fnKIOt4g0rFBzzI%2Fm34r7IBcrEvBhA8pVSMYaPnVHugqUFVPVBpRp4yhal3FlQy9112kSaT99pSrd2MsUTIOFTzIpXmVelTqTb2%2BO89bkWl4dhpCbIwZB2H6nyN7toyLhyxZPMQcEaOgGJzXb4EbPVuly&X-Amz-Signature=a387613de02066749b3caa17b644b7fe28507f4e3ff2da9fb6160e72362f575d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN26Z7G2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHsR7CEeqKWd6eftgInW4bMO65gDgOIUUdK%2FFZ7LC2r5AiEA%2BuquQugqX6LHAclXMLPNhtHPmhx4kFLPieNK7UvbCKQqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTn4DJvntzLxITH6CrcA0WQku54pBSTlkoGYtkxMQNPAipHBsGHxhCOeHplpkmsQWOyXOMVt9v8hY1PpKu5CsfLfh0PY07CUdn7rQsVkXRWri7coLoXMM5FP%2BuVZHM1jNVfwnSkogyOnDeUJai%2BgKNv5jK8G6iJBQydiXNCzVPm5%2FufCezTZc9F77ir2SRSnv7iU6kUxkkf4YI75vw6GaW%2BOJXYHWkCLogfxcD70PsIXgufiXjrBeXMAHBRWnIjDCaeVm98d%2B5H5KVJr4lsrdliw0beF%2BacJSTnM3B0srXw1I6sE%2FC5LrdX8s6H9kkvYWI1RoEn9UKRX%2Fa6y9KIUhbaA%2BZPxJsql%2BjGxr717YMIwL%2Fr4aoHBRp%2BKRT%2Bu9zjlY2fCxIy4i3T2acqxMQRsyXqtrIWpYDQzWe17lnnvWfIhZ5YZmkCU6AEqF6sYfgWNQcjXQLf3yeMYZsYnA4qj3WHwxqNC8vhJme4PY0HCkD8qee4RPdpy7jtTZA1QFng6ceKZs9Ui8Zd5ATDSn%2Bd8TegGBFSg8my3Q2V2q%2FNC7fjy%2F57eVlV5MufhBZPXNVrF6FwYe3PX4%2FbSPUeXMC6ibKVF%2FdRwYY5BqElA%2BJwNbwZrKun6TX%2F8n%2F6TlFZ9BccaT7Pa7yk0e%2FrsklEMOCn88EGOqUBtAgA093U%2BAp93pHJawEnOOBuemQ4x9GtTjrmhDyPWWhSP8Xh%2Bl4Ia0f1A6N8i3qlVk9fnKIOt4g0rFBzzI%2Fm34r7IBcrEvBhA8pVSMYaPnVHugqUFVPVBpRp4yhal3FlQy9112kSaT99pSrd2MsUTIOFTzIpXmVelTqTb2%2BO89bkWl4dhpCbIwZB2H6nyN7toyLhyxZPMQcEaOgGJzXb4EbPVuly&X-Amz-Signature=97e8bf0dfcfcca87a8a985e02a6934f82b016ef8f2132a2b919d2fbc3ceb999e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
