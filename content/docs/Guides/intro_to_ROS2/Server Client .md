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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKQIQL2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTUXeDylmBlaLcv%2B%2BTjoq6E9AqTyK2f%2B%2Bp1LFGALKbMAIhAKlE77iw6AdzZhJraQ6vyxCrdPqWC%2FSxlLqkYVqd74bHKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFghoMyNl%2F7v8bfX8q3APSzWF4mb%2B%2BaiUC4aETM50KxRr%2FCPGXtWCHE%2FQr%2BGVojArOMfh31iwP7bd7OpmBuX%2Fk74Z5TMZlL97TyAhvL6m%2BC%2Fvv%2BPZ2xDtJeQm5MECmomeOas3l1WIVUoCcudf2%2FxIBg%2BZJUwiCaU66IHC9unu%2FWwBuPaR%2FLtS4zfvQWzv2RrSdRXuxL165QMFJSwUI%2BT%2FkROHtvp5rVrpttmO8xsW54XZvaxL27YuoTM%2BAWy6odb7AWKN7cYm%2FYGJo2glH4JGR8nnV05saHp59o2SWCiBfo26irNiS5rXaZ%2F%2FLJb1ZcyfGwWExYpLzTEHGTk%2BCFr%2FESRAZ6MXlUPch259wawwTA3sHL%2FsEKKZjFM5EFrtu7VnklGNCl9lKuex9Vn1PgLxHiCv2E92%2FgVF%2BOeWQ1G26EX4RnZubn%2FEciYG6LIBBq9T3wfkLepKM%2B24QXZ07fjCyiZDu0XsR1PgfR91vdLgWo%2Fqz2wWQII5%2BAVoL1UaXA91S1VkMmqxS%2F9VQMsbnAAesGTq2eoTX9aWH96JKOl74eL077YX70yoRHaB9WmPE0aXozpFafYlMlPmAz0Ms11qREmx3%2FLtepMz0ASgZhU4Ybv03LAjZs0axlpuq7n2WwwmhfiMzCQC6eq05mjDLstbCBjqkAT%2FhIv8f6m2ROQHZtVSeiMBZkoKR5puXpoykKqoDT5ji0x%2Bd%2BmlQEkSHzQSVXjU1dqqs%2BDnBrDCsMtQBgCj%2FhwLBQ3ILTslKsA5ZyyTSBY3xkF7Zp4CEFXw2JvVebHFy8xcVcH%2FY10b3z2UdlzcskBT%2FTXzdrdhK0DjpereeBi%2FS%2F3EDoJHx9Ir5D3Tlm731DY1UpJsBQgIV04U5OnGkQq2xYxxK&X-Amz-Signature=f8d6b8a8af9c6889a16e770c20d4c3e059ca48533c2be87782cc0e7e478f46ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKQIQL2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTUXeDylmBlaLcv%2B%2BTjoq6E9AqTyK2f%2B%2Bp1LFGALKbMAIhAKlE77iw6AdzZhJraQ6vyxCrdPqWC%2FSxlLqkYVqd74bHKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFghoMyNl%2F7v8bfX8q3APSzWF4mb%2B%2BaiUC4aETM50KxRr%2FCPGXtWCHE%2FQr%2BGVojArOMfh31iwP7bd7OpmBuX%2Fk74Z5TMZlL97TyAhvL6m%2BC%2Fvv%2BPZ2xDtJeQm5MECmomeOas3l1WIVUoCcudf2%2FxIBg%2BZJUwiCaU66IHC9unu%2FWwBuPaR%2FLtS4zfvQWzv2RrSdRXuxL165QMFJSwUI%2BT%2FkROHtvp5rVrpttmO8xsW54XZvaxL27YuoTM%2BAWy6odb7AWKN7cYm%2FYGJo2glH4JGR8nnV05saHp59o2SWCiBfo26irNiS5rXaZ%2F%2FLJb1ZcyfGwWExYpLzTEHGTk%2BCFr%2FESRAZ6MXlUPch259wawwTA3sHL%2FsEKKZjFM5EFrtu7VnklGNCl9lKuex9Vn1PgLxHiCv2E92%2FgVF%2BOeWQ1G26EX4RnZubn%2FEciYG6LIBBq9T3wfkLepKM%2B24QXZ07fjCyiZDu0XsR1PgfR91vdLgWo%2Fqz2wWQII5%2BAVoL1UaXA91S1VkMmqxS%2F9VQMsbnAAesGTq2eoTX9aWH96JKOl74eL077YX70yoRHaB9WmPE0aXozpFafYlMlPmAz0Ms11qREmx3%2FLtepMz0ASgZhU4Ybv03LAjZs0axlpuq7n2WwwmhfiMzCQC6eq05mjDLstbCBjqkAT%2FhIv8f6m2ROQHZtVSeiMBZkoKR5puXpoykKqoDT5ji0x%2Bd%2BmlQEkSHzQSVXjU1dqqs%2BDnBrDCsMtQBgCj%2FhwLBQ3ILTslKsA5ZyyTSBY3xkF7Zp4CEFXw2JvVebHFy8xcVcH%2FY10b3z2UdlzcskBT%2FTXzdrdhK0DjpereeBi%2FS%2F3EDoJHx9Ir5D3Tlm731DY1UpJsBQgIV04U5OnGkQq2xYxxK&X-Amz-Signature=ee81faf30a3928d139b6ffcc637a872b9a81184628def5bdc5820ea43606bffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKQIQL2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTUXeDylmBlaLcv%2B%2BTjoq6E9AqTyK2f%2B%2Bp1LFGALKbMAIhAKlE77iw6AdzZhJraQ6vyxCrdPqWC%2FSxlLqkYVqd74bHKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFghoMyNl%2F7v8bfX8q3APSzWF4mb%2B%2BaiUC4aETM50KxRr%2FCPGXtWCHE%2FQr%2BGVojArOMfh31iwP7bd7OpmBuX%2Fk74Z5TMZlL97TyAhvL6m%2BC%2Fvv%2BPZ2xDtJeQm5MECmomeOas3l1WIVUoCcudf2%2FxIBg%2BZJUwiCaU66IHC9unu%2FWwBuPaR%2FLtS4zfvQWzv2RrSdRXuxL165QMFJSwUI%2BT%2FkROHtvp5rVrpttmO8xsW54XZvaxL27YuoTM%2BAWy6odb7AWKN7cYm%2FYGJo2glH4JGR8nnV05saHp59o2SWCiBfo26irNiS5rXaZ%2F%2FLJb1ZcyfGwWExYpLzTEHGTk%2BCFr%2FESRAZ6MXlUPch259wawwTA3sHL%2FsEKKZjFM5EFrtu7VnklGNCl9lKuex9Vn1PgLxHiCv2E92%2FgVF%2BOeWQ1G26EX4RnZubn%2FEciYG6LIBBq9T3wfkLepKM%2B24QXZ07fjCyiZDu0XsR1PgfR91vdLgWo%2Fqz2wWQII5%2BAVoL1UaXA91S1VkMmqxS%2F9VQMsbnAAesGTq2eoTX9aWH96JKOl74eL077YX70yoRHaB9WmPE0aXozpFafYlMlPmAz0Ms11qREmx3%2FLtepMz0ASgZhU4Ybv03LAjZs0axlpuq7n2WwwmhfiMzCQC6eq05mjDLstbCBjqkAT%2FhIv8f6m2ROQHZtVSeiMBZkoKR5puXpoykKqoDT5ji0x%2Bd%2BmlQEkSHzQSVXjU1dqqs%2BDnBrDCsMtQBgCj%2FhwLBQ3ILTslKsA5ZyyTSBY3xkF7Zp4CEFXw2JvVebHFy8xcVcH%2FY10b3z2UdlzcskBT%2FTXzdrdhK0DjpereeBi%2FS%2F3EDoJHx9Ir5D3Tlm731DY1UpJsBQgIV04U5OnGkQq2xYxxK&X-Amz-Signature=8614159091d7cb6e1577c5bf7309ac49d3192484b164970c1a1f4faaa8d5d0e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKQIQL2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTUXeDylmBlaLcv%2B%2BTjoq6E9AqTyK2f%2B%2Bp1LFGALKbMAIhAKlE77iw6AdzZhJraQ6vyxCrdPqWC%2FSxlLqkYVqd74bHKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFghoMyNl%2F7v8bfX8q3APSzWF4mb%2B%2BaiUC4aETM50KxRr%2FCPGXtWCHE%2FQr%2BGVojArOMfh31iwP7bd7OpmBuX%2Fk74Z5TMZlL97TyAhvL6m%2BC%2Fvv%2BPZ2xDtJeQm5MECmomeOas3l1WIVUoCcudf2%2FxIBg%2BZJUwiCaU66IHC9unu%2FWwBuPaR%2FLtS4zfvQWzv2RrSdRXuxL165QMFJSwUI%2BT%2FkROHtvp5rVrpttmO8xsW54XZvaxL27YuoTM%2BAWy6odb7AWKN7cYm%2FYGJo2glH4JGR8nnV05saHp59o2SWCiBfo26irNiS5rXaZ%2F%2FLJb1ZcyfGwWExYpLzTEHGTk%2BCFr%2FESRAZ6MXlUPch259wawwTA3sHL%2FsEKKZjFM5EFrtu7VnklGNCl9lKuex9Vn1PgLxHiCv2E92%2FgVF%2BOeWQ1G26EX4RnZubn%2FEciYG6LIBBq9T3wfkLepKM%2B24QXZ07fjCyiZDu0XsR1PgfR91vdLgWo%2Fqz2wWQII5%2BAVoL1UaXA91S1VkMmqxS%2F9VQMsbnAAesGTq2eoTX9aWH96JKOl74eL077YX70yoRHaB9WmPE0aXozpFafYlMlPmAz0Ms11qREmx3%2FLtepMz0ASgZhU4Ybv03LAjZs0axlpuq7n2WwwmhfiMzCQC6eq05mjDLstbCBjqkAT%2FhIv8f6m2ROQHZtVSeiMBZkoKR5puXpoykKqoDT5ji0x%2Bd%2BmlQEkSHzQSVXjU1dqqs%2BDnBrDCsMtQBgCj%2FhwLBQ3ILTslKsA5ZyyTSBY3xkF7Zp4CEFXw2JvVebHFy8xcVcH%2FY10b3z2UdlzcskBT%2FTXzdrdhK0DjpereeBi%2FS%2F3EDoJHx9Ir5D3Tlm731DY1UpJsBQgIV04U5OnGkQq2xYxxK&X-Amz-Signature=4a18fc7f52fa9b930f574ab98b191f9001af2ad7799f84d6f823e3c29585bced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKQIQL2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTUXeDylmBlaLcv%2B%2BTjoq6E9AqTyK2f%2B%2Bp1LFGALKbMAIhAKlE77iw6AdzZhJraQ6vyxCrdPqWC%2FSxlLqkYVqd74bHKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFghoMyNl%2F7v8bfX8q3APSzWF4mb%2B%2BaiUC4aETM50KxRr%2FCPGXtWCHE%2FQr%2BGVojArOMfh31iwP7bd7OpmBuX%2Fk74Z5TMZlL97TyAhvL6m%2BC%2Fvv%2BPZ2xDtJeQm5MECmomeOas3l1WIVUoCcudf2%2FxIBg%2BZJUwiCaU66IHC9unu%2FWwBuPaR%2FLtS4zfvQWzv2RrSdRXuxL165QMFJSwUI%2BT%2FkROHtvp5rVrpttmO8xsW54XZvaxL27YuoTM%2BAWy6odb7AWKN7cYm%2FYGJo2glH4JGR8nnV05saHp59o2SWCiBfo26irNiS5rXaZ%2F%2FLJb1ZcyfGwWExYpLzTEHGTk%2BCFr%2FESRAZ6MXlUPch259wawwTA3sHL%2FsEKKZjFM5EFrtu7VnklGNCl9lKuex9Vn1PgLxHiCv2E92%2FgVF%2BOeWQ1G26EX4RnZubn%2FEciYG6LIBBq9T3wfkLepKM%2B24QXZ07fjCyiZDu0XsR1PgfR91vdLgWo%2Fqz2wWQII5%2BAVoL1UaXA91S1VkMmqxS%2F9VQMsbnAAesGTq2eoTX9aWH96JKOl74eL077YX70yoRHaB9WmPE0aXozpFafYlMlPmAz0Ms11qREmx3%2FLtepMz0ASgZhU4Ybv03LAjZs0axlpuq7n2WwwmhfiMzCQC6eq05mjDLstbCBjqkAT%2FhIv8f6m2ROQHZtVSeiMBZkoKR5puXpoykKqoDT5ji0x%2Bd%2BmlQEkSHzQSVXjU1dqqs%2BDnBrDCsMtQBgCj%2FhwLBQ3ILTslKsA5ZyyTSBY3xkF7Zp4CEFXw2JvVebHFy8xcVcH%2FY10b3z2UdlzcskBT%2FTXzdrdhK0DjpereeBi%2FS%2F3EDoJHx9Ir5D3Tlm731DY1UpJsBQgIV04U5OnGkQq2xYxxK&X-Amz-Signature=319f2d2c87427258a2581aa505c239789a267f297d7ab4c7e19bc763e207c71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
