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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRD6KH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDGLuTqiDQb3vWPa3vvhpDSEo%2F21GNB1CEBcA%2Bsp9T2bwIgHzejXbD17IjDwwm8NeSnd4319Hrq16Ci%2BW35MrmFOWcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFhiy%2B7z3PWCJpa28SrcA19WehPv2m6vixx0%2BueB6ogLOvBQplItBaxXnUojih%2FPJIoXDW7a%2FvZBzsDjUIM3rgfvSKjIGNet4XAVbRNRyeMDpDCvpHQyzTWXSgFLKyQtS1%2FU5TU5u54YkAVlYyXSSSXrb6l5xvGR%2Fm37eVAUu0r5TcGLZ%2FMNrzO1wvXLVCgJ1NsrrxUaER6c4v%2BDv3%2Fh%2BmMJDSjAuX6GUztFCwlz0BwAur6cqQPRKOAU3uPV33paQKzVk%2FF9zVMENj1q7UkAi22W5WHHK85QxWYyxKx0Mkjbsn7ydKji2K%2FqaJs15FUQnia2oUgHHad0mlavpRUqPwwh3tkNM3pIxaZ4gjwg1MwpoEmrzpPOqkiW7qCMQp5PGt4CW4cxomgAv4cH0VCAg6a0GPU%2FibtC7SbztTq3f40vCFdJUEYJZi0Etq9QokrTmUTeDRMMGo2s1o48KxthT%2FS%2B%2BOrcBGLiM4MOsXAJGQ%2FedxhfUb0KYEooEyiGlGDkGAdhEVSkqzSPF0VmEiquZp1HAOKxqN7BPWHZIQFKKPNZmZeY8LfXFGBgBSVm7LPlGsb3fVb1nZUsBT1GpRL37V5ieH1YY7inZa7ZbaP8gFbAS8j21pjgxgepMHlcUggs6FFPNAn2pJgcKL6uMPOL1r8GOqUBnG02wxEsgpirFkGP2HskqYXouYs4sZtCGnZoFcvzSrc%2FY%2BN1BSjnRdHeW%2BbKFn80DtuAm69MQi9cppVRQpCPuULOGDMqkpeujpeBaqqoeCQ2GPPIwL2aMAJN8STeTZ1jYvvpWn8vytijqlK1iW%2BHsU2MOPYQ0YVUkUMzmQBKorVUxFyxj8KTl0JXhiQqp1Qa2W3DB2GZZbfAzCkn84JyHUnZMBg2&X-Amz-Signature=21e1504b82994bb81a8e8f09d72382c6bceb7db6481292a5eceddda042b9acfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRD6KH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDGLuTqiDQb3vWPa3vvhpDSEo%2F21GNB1CEBcA%2Bsp9T2bwIgHzejXbD17IjDwwm8NeSnd4319Hrq16Ci%2BW35MrmFOWcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFhiy%2B7z3PWCJpa28SrcA19WehPv2m6vixx0%2BueB6ogLOvBQplItBaxXnUojih%2FPJIoXDW7a%2FvZBzsDjUIM3rgfvSKjIGNet4XAVbRNRyeMDpDCvpHQyzTWXSgFLKyQtS1%2FU5TU5u54YkAVlYyXSSSXrb6l5xvGR%2Fm37eVAUu0r5TcGLZ%2FMNrzO1wvXLVCgJ1NsrrxUaER6c4v%2BDv3%2Fh%2BmMJDSjAuX6GUztFCwlz0BwAur6cqQPRKOAU3uPV33paQKzVk%2FF9zVMENj1q7UkAi22W5WHHK85QxWYyxKx0Mkjbsn7ydKji2K%2FqaJs15FUQnia2oUgHHad0mlavpRUqPwwh3tkNM3pIxaZ4gjwg1MwpoEmrzpPOqkiW7qCMQp5PGt4CW4cxomgAv4cH0VCAg6a0GPU%2FibtC7SbztTq3f40vCFdJUEYJZi0Etq9QokrTmUTeDRMMGo2s1o48KxthT%2FS%2B%2BOrcBGLiM4MOsXAJGQ%2FedxhfUb0KYEooEyiGlGDkGAdhEVSkqzSPF0VmEiquZp1HAOKxqN7BPWHZIQFKKPNZmZeY8LfXFGBgBSVm7LPlGsb3fVb1nZUsBT1GpRL37V5ieH1YY7inZa7ZbaP8gFbAS8j21pjgxgepMHlcUggs6FFPNAn2pJgcKL6uMPOL1r8GOqUBnG02wxEsgpirFkGP2HskqYXouYs4sZtCGnZoFcvzSrc%2FY%2BN1BSjnRdHeW%2BbKFn80DtuAm69MQi9cppVRQpCPuULOGDMqkpeujpeBaqqoeCQ2GPPIwL2aMAJN8STeTZ1jYvvpWn8vytijqlK1iW%2BHsU2MOPYQ0YVUkUMzmQBKorVUxFyxj8KTl0JXhiQqp1Qa2W3DB2GZZbfAzCkn84JyHUnZMBg2&X-Amz-Signature=553b9ded1c807879a1499559803c48bac7c060699c75dd55edbea55f70f186c4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRD6KH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDGLuTqiDQb3vWPa3vvhpDSEo%2F21GNB1CEBcA%2Bsp9T2bwIgHzejXbD17IjDwwm8NeSnd4319Hrq16Ci%2BW35MrmFOWcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFhiy%2B7z3PWCJpa28SrcA19WehPv2m6vixx0%2BueB6ogLOvBQplItBaxXnUojih%2FPJIoXDW7a%2FvZBzsDjUIM3rgfvSKjIGNet4XAVbRNRyeMDpDCvpHQyzTWXSgFLKyQtS1%2FU5TU5u54YkAVlYyXSSSXrb6l5xvGR%2Fm37eVAUu0r5TcGLZ%2FMNrzO1wvXLVCgJ1NsrrxUaER6c4v%2BDv3%2Fh%2BmMJDSjAuX6GUztFCwlz0BwAur6cqQPRKOAU3uPV33paQKzVk%2FF9zVMENj1q7UkAi22W5WHHK85QxWYyxKx0Mkjbsn7ydKji2K%2FqaJs15FUQnia2oUgHHad0mlavpRUqPwwh3tkNM3pIxaZ4gjwg1MwpoEmrzpPOqkiW7qCMQp5PGt4CW4cxomgAv4cH0VCAg6a0GPU%2FibtC7SbztTq3f40vCFdJUEYJZi0Etq9QokrTmUTeDRMMGo2s1o48KxthT%2FS%2B%2BOrcBGLiM4MOsXAJGQ%2FedxhfUb0KYEooEyiGlGDkGAdhEVSkqzSPF0VmEiquZp1HAOKxqN7BPWHZIQFKKPNZmZeY8LfXFGBgBSVm7LPlGsb3fVb1nZUsBT1GpRL37V5ieH1YY7inZa7ZbaP8gFbAS8j21pjgxgepMHlcUggs6FFPNAn2pJgcKL6uMPOL1r8GOqUBnG02wxEsgpirFkGP2HskqYXouYs4sZtCGnZoFcvzSrc%2FY%2BN1BSjnRdHeW%2BbKFn80DtuAm69MQi9cppVRQpCPuULOGDMqkpeujpeBaqqoeCQ2GPPIwL2aMAJN8STeTZ1jYvvpWn8vytijqlK1iW%2BHsU2MOPYQ0YVUkUMzmQBKorVUxFyxj8KTl0JXhiQqp1Qa2W3DB2GZZbfAzCkn84JyHUnZMBg2&X-Amz-Signature=0cdd9a3175fb9af28b712926bc3726f2abf66a72cd9230f35187df3d5681d821&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRD6KH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDGLuTqiDQb3vWPa3vvhpDSEo%2F21GNB1CEBcA%2Bsp9T2bwIgHzejXbD17IjDwwm8NeSnd4319Hrq16Ci%2BW35MrmFOWcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFhiy%2B7z3PWCJpa28SrcA19WehPv2m6vixx0%2BueB6ogLOvBQplItBaxXnUojih%2FPJIoXDW7a%2FvZBzsDjUIM3rgfvSKjIGNet4XAVbRNRyeMDpDCvpHQyzTWXSgFLKyQtS1%2FU5TU5u54YkAVlYyXSSSXrb6l5xvGR%2Fm37eVAUu0r5TcGLZ%2FMNrzO1wvXLVCgJ1NsrrxUaER6c4v%2BDv3%2Fh%2BmMJDSjAuX6GUztFCwlz0BwAur6cqQPRKOAU3uPV33paQKzVk%2FF9zVMENj1q7UkAi22W5WHHK85QxWYyxKx0Mkjbsn7ydKji2K%2FqaJs15FUQnia2oUgHHad0mlavpRUqPwwh3tkNM3pIxaZ4gjwg1MwpoEmrzpPOqkiW7qCMQp5PGt4CW4cxomgAv4cH0VCAg6a0GPU%2FibtC7SbztTq3f40vCFdJUEYJZi0Etq9QokrTmUTeDRMMGo2s1o48KxthT%2FS%2B%2BOrcBGLiM4MOsXAJGQ%2FedxhfUb0KYEooEyiGlGDkGAdhEVSkqzSPF0VmEiquZp1HAOKxqN7BPWHZIQFKKPNZmZeY8LfXFGBgBSVm7LPlGsb3fVb1nZUsBT1GpRL37V5ieH1YY7inZa7ZbaP8gFbAS8j21pjgxgepMHlcUggs6FFPNAn2pJgcKL6uMPOL1r8GOqUBnG02wxEsgpirFkGP2HskqYXouYs4sZtCGnZoFcvzSrc%2FY%2BN1BSjnRdHeW%2BbKFn80DtuAm69MQi9cppVRQpCPuULOGDMqkpeujpeBaqqoeCQ2GPPIwL2aMAJN8STeTZ1jYvvpWn8vytijqlK1iW%2BHsU2MOPYQ0YVUkUMzmQBKorVUxFyxj8KTl0JXhiQqp1Qa2W3DB2GZZbfAzCkn84JyHUnZMBg2&X-Amz-Signature=f2f50eeca80a447b98831bf21fbc206aa77c75b12d942a1b1fb58e1dac7eb389&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRD6KH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDGLuTqiDQb3vWPa3vvhpDSEo%2F21GNB1CEBcA%2Bsp9T2bwIgHzejXbD17IjDwwm8NeSnd4319Hrq16Ci%2BW35MrmFOWcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFhiy%2B7z3PWCJpa28SrcA19WehPv2m6vixx0%2BueB6ogLOvBQplItBaxXnUojih%2FPJIoXDW7a%2FvZBzsDjUIM3rgfvSKjIGNet4XAVbRNRyeMDpDCvpHQyzTWXSgFLKyQtS1%2FU5TU5u54YkAVlYyXSSSXrb6l5xvGR%2Fm37eVAUu0r5TcGLZ%2FMNrzO1wvXLVCgJ1NsrrxUaER6c4v%2BDv3%2Fh%2BmMJDSjAuX6GUztFCwlz0BwAur6cqQPRKOAU3uPV33paQKzVk%2FF9zVMENj1q7UkAi22W5WHHK85QxWYyxKx0Mkjbsn7ydKji2K%2FqaJs15FUQnia2oUgHHad0mlavpRUqPwwh3tkNM3pIxaZ4gjwg1MwpoEmrzpPOqkiW7qCMQp5PGt4CW4cxomgAv4cH0VCAg6a0GPU%2FibtC7SbztTq3f40vCFdJUEYJZi0Etq9QokrTmUTeDRMMGo2s1o48KxthT%2FS%2B%2BOrcBGLiM4MOsXAJGQ%2FedxhfUb0KYEooEyiGlGDkGAdhEVSkqzSPF0VmEiquZp1HAOKxqN7BPWHZIQFKKPNZmZeY8LfXFGBgBSVm7LPlGsb3fVb1nZUsBT1GpRL37V5ieH1YY7inZa7ZbaP8gFbAS8j21pjgxgepMHlcUggs6FFPNAn2pJgcKL6uMPOL1r8GOqUBnG02wxEsgpirFkGP2HskqYXouYs4sZtCGnZoFcvzSrc%2FY%2BN1BSjnRdHeW%2BbKFn80DtuAm69MQi9cppVRQpCPuULOGDMqkpeujpeBaqqoeCQ2GPPIwL2aMAJN8STeTZ1jYvvpWn8vytijqlK1iW%2BHsU2MOPYQ0YVUkUMzmQBKorVUxFyxj8KTl0JXhiQqp1Qa2W3DB2GZZbfAzCkn84JyHUnZMBg2&X-Amz-Signature=dff2b1606aa4152547ccaa148b8b3308acfcbc73c1ac54f94661c50ac9d38bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
