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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFRFD6CA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsol6ZGLFlF1cDQzyYnGpFoGdDC3YMycfqNxXFbOWBOgIhANkZMVCBVWtDO50OS2cm%2BbsVu4I5jNnhNbpmMFIDFyB0KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykCVQNRP%2BExlZKhh8q3AOlUSPmBstG5NdzhLuaQMFJ95%2BWlOASeApMqpP7t5yKpNCrnecp%2BGjKcTZJcjJsgYTYRB8DAStqcDtX6KQjQCE7zvCK8Mjjq0V457Z9pk04bbTaU6b9ixYd9geHhnosUWmdVD43eDgPWCguXOam5Ymzng8i88CJA%2BNIj7HL%2BN7G80wyNHkFuLTIbGEHWkpnrF5g2uveNNFZG6mVqE11R%2FOLbHnbuxzPy4mACeOPSLMNgBxZMOzymLLljaiwTWmc1m%2BADkTIT9KWYKDhpAEF7J9WJjfateCbCtm1K9QB1rrST9fq4CVO3WEUMDTBfEIM0AktpgdTcQGxpcRV%2FNt8MHKVFU6AVs48JWu9UZMOQCp3%2FrcRahAcKbGQegiADjb%2B4MK9dfznwprQH%2FYyZARSz48VWv%2Ffj9J3aCIlelUYaPzWItPn2E50qUf%2Fpo7G%2BqrTzFZbYyxM1hPQo6O8j25oGulB%2BTIL2kgHDblVcL%2Bp0ZRXrJS7qPjERjgorahkGNYZKydiGYPJwrqNI6vI%2BBa6YmC%2FP0xW8U%2FKk1jGBRXCwKPP88H%2BBhqE%2FrOOp7%2FY8dMXXaajWAwXwuZ1%2FgguwSDtLe%2FZYPSZ6CMOQ7Fo%2BP82akzCN1W2tur9SuktNvKNkzC1gLXDBjqkAZxPHKf3KziTieCBAYKfJfiPDmtRnUI%2FuqEAiF0f0w0%2Foy%2BO7zm2%2B%2Fe4QxgjSA1YM%2BrLBLU9K6GVcX%2FqBKKonDPYyO5Lcmz%2FAoiOzP8dX3%2BlEJEeTZGZTEDAjFmGJw8biajVugae2N8ZqDYrHgH7NFuR4KLTfMC3Eo7Jt1IQ28DF590bl%2FQzDn8Dmbrvyx%2FcaOrKYSixlZNtnxLfvo4ykJpBjONi&X-Amz-Signature=0919592d8ffce7edaf3ff44de8de5c949432a4f4f2bc68e96a3495758afac20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFRFD6CA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsol6ZGLFlF1cDQzyYnGpFoGdDC3YMycfqNxXFbOWBOgIhANkZMVCBVWtDO50OS2cm%2BbsVu4I5jNnhNbpmMFIDFyB0KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykCVQNRP%2BExlZKhh8q3AOlUSPmBstG5NdzhLuaQMFJ95%2BWlOASeApMqpP7t5yKpNCrnecp%2BGjKcTZJcjJsgYTYRB8DAStqcDtX6KQjQCE7zvCK8Mjjq0V457Z9pk04bbTaU6b9ixYd9geHhnosUWmdVD43eDgPWCguXOam5Ymzng8i88CJA%2BNIj7HL%2BN7G80wyNHkFuLTIbGEHWkpnrF5g2uveNNFZG6mVqE11R%2FOLbHnbuxzPy4mACeOPSLMNgBxZMOzymLLljaiwTWmc1m%2BADkTIT9KWYKDhpAEF7J9WJjfateCbCtm1K9QB1rrST9fq4CVO3WEUMDTBfEIM0AktpgdTcQGxpcRV%2FNt8MHKVFU6AVs48JWu9UZMOQCp3%2FrcRahAcKbGQegiADjb%2B4MK9dfznwprQH%2FYyZARSz48VWv%2Ffj9J3aCIlelUYaPzWItPn2E50qUf%2Fpo7G%2BqrTzFZbYyxM1hPQo6O8j25oGulB%2BTIL2kgHDblVcL%2Bp0ZRXrJS7qPjERjgorahkGNYZKydiGYPJwrqNI6vI%2BBa6YmC%2FP0xW8U%2FKk1jGBRXCwKPP88H%2BBhqE%2FrOOp7%2FY8dMXXaajWAwXwuZ1%2FgguwSDtLe%2FZYPSZ6CMOQ7Fo%2BP82akzCN1W2tur9SuktNvKNkzC1gLXDBjqkAZxPHKf3KziTieCBAYKfJfiPDmtRnUI%2FuqEAiF0f0w0%2Foy%2BO7zm2%2B%2Fe4QxgjSA1YM%2BrLBLU9K6GVcX%2FqBKKonDPYyO5Lcmz%2FAoiOzP8dX3%2BlEJEeTZGZTEDAjFmGJw8biajVugae2N8ZqDYrHgH7NFuR4KLTfMC3Eo7Jt1IQ28DF590bl%2FQzDn8Dmbrvyx%2FcaOrKYSixlZNtnxLfvo4ykJpBjONi&X-Amz-Signature=73b330f8dc0316d70458a636e19f6062e9c11556196890330eb2867311a62f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFRFD6CA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsol6ZGLFlF1cDQzyYnGpFoGdDC3YMycfqNxXFbOWBOgIhANkZMVCBVWtDO50OS2cm%2BbsVu4I5jNnhNbpmMFIDFyB0KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykCVQNRP%2BExlZKhh8q3AOlUSPmBstG5NdzhLuaQMFJ95%2BWlOASeApMqpP7t5yKpNCrnecp%2BGjKcTZJcjJsgYTYRB8DAStqcDtX6KQjQCE7zvCK8Mjjq0V457Z9pk04bbTaU6b9ixYd9geHhnosUWmdVD43eDgPWCguXOam5Ymzng8i88CJA%2BNIj7HL%2BN7G80wyNHkFuLTIbGEHWkpnrF5g2uveNNFZG6mVqE11R%2FOLbHnbuxzPy4mACeOPSLMNgBxZMOzymLLljaiwTWmc1m%2BADkTIT9KWYKDhpAEF7J9WJjfateCbCtm1K9QB1rrST9fq4CVO3WEUMDTBfEIM0AktpgdTcQGxpcRV%2FNt8MHKVFU6AVs48JWu9UZMOQCp3%2FrcRahAcKbGQegiADjb%2B4MK9dfznwprQH%2FYyZARSz48VWv%2Ffj9J3aCIlelUYaPzWItPn2E50qUf%2Fpo7G%2BqrTzFZbYyxM1hPQo6O8j25oGulB%2BTIL2kgHDblVcL%2Bp0ZRXrJS7qPjERjgorahkGNYZKydiGYPJwrqNI6vI%2BBa6YmC%2FP0xW8U%2FKk1jGBRXCwKPP88H%2BBhqE%2FrOOp7%2FY8dMXXaajWAwXwuZ1%2FgguwSDtLe%2FZYPSZ6CMOQ7Fo%2BP82akzCN1W2tur9SuktNvKNkzC1gLXDBjqkAZxPHKf3KziTieCBAYKfJfiPDmtRnUI%2FuqEAiF0f0w0%2Foy%2BO7zm2%2B%2Fe4QxgjSA1YM%2BrLBLU9K6GVcX%2FqBKKonDPYyO5Lcmz%2FAoiOzP8dX3%2BlEJEeTZGZTEDAjFmGJw8biajVugae2N8ZqDYrHgH7NFuR4KLTfMC3Eo7Jt1IQ28DF590bl%2FQzDn8Dmbrvyx%2FcaOrKYSixlZNtnxLfvo4ykJpBjONi&X-Amz-Signature=26b13ff6cff39cf981ceffaf427b202a0227308c7c1acc515987a2204339f09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFRFD6CA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsol6ZGLFlF1cDQzyYnGpFoGdDC3YMycfqNxXFbOWBOgIhANkZMVCBVWtDO50OS2cm%2BbsVu4I5jNnhNbpmMFIDFyB0KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykCVQNRP%2BExlZKhh8q3AOlUSPmBstG5NdzhLuaQMFJ95%2BWlOASeApMqpP7t5yKpNCrnecp%2BGjKcTZJcjJsgYTYRB8DAStqcDtX6KQjQCE7zvCK8Mjjq0V457Z9pk04bbTaU6b9ixYd9geHhnosUWmdVD43eDgPWCguXOam5Ymzng8i88CJA%2BNIj7HL%2BN7G80wyNHkFuLTIbGEHWkpnrF5g2uveNNFZG6mVqE11R%2FOLbHnbuxzPy4mACeOPSLMNgBxZMOzymLLljaiwTWmc1m%2BADkTIT9KWYKDhpAEF7J9WJjfateCbCtm1K9QB1rrST9fq4CVO3WEUMDTBfEIM0AktpgdTcQGxpcRV%2FNt8MHKVFU6AVs48JWu9UZMOQCp3%2FrcRahAcKbGQegiADjb%2B4MK9dfznwprQH%2FYyZARSz48VWv%2Ffj9J3aCIlelUYaPzWItPn2E50qUf%2Fpo7G%2BqrTzFZbYyxM1hPQo6O8j25oGulB%2BTIL2kgHDblVcL%2Bp0ZRXrJS7qPjERjgorahkGNYZKydiGYPJwrqNI6vI%2BBa6YmC%2FP0xW8U%2FKk1jGBRXCwKPP88H%2BBhqE%2FrOOp7%2FY8dMXXaajWAwXwuZ1%2FgguwSDtLe%2FZYPSZ6CMOQ7Fo%2BP82akzCN1W2tur9SuktNvKNkzC1gLXDBjqkAZxPHKf3KziTieCBAYKfJfiPDmtRnUI%2FuqEAiF0f0w0%2Foy%2BO7zm2%2B%2Fe4QxgjSA1YM%2BrLBLU9K6GVcX%2FqBKKonDPYyO5Lcmz%2FAoiOzP8dX3%2BlEJEeTZGZTEDAjFmGJw8biajVugae2N8ZqDYrHgH7NFuR4KLTfMC3Eo7Jt1IQ28DF590bl%2FQzDn8Dmbrvyx%2FcaOrKYSixlZNtnxLfvo4ykJpBjONi&X-Amz-Signature=68f9f075e9cd205c8221d5fbf0717fb7e8675ac7760034e56746e337bcf8fcef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFRFD6CA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsol6ZGLFlF1cDQzyYnGpFoGdDC3YMycfqNxXFbOWBOgIhANkZMVCBVWtDO50OS2cm%2BbsVu4I5jNnhNbpmMFIDFyB0KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykCVQNRP%2BExlZKhh8q3AOlUSPmBstG5NdzhLuaQMFJ95%2BWlOASeApMqpP7t5yKpNCrnecp%2BGjKcTZJcjJsgYTYRB8DAStqcDtX6KQjQCE7zvCK8Mjjq0V457Z9pk04bbTaU6b9ixYd9geHhnosUWmdVD43eDgPWCguXOam5Ymzng8i88CJA%2BNIj7HL%2BN7G80wyNHkFuLTIbGEHWkpnrF5g2uveNNFZG6mVqE11R%2FOLbHnbuxzPy4mACeOPSLMNgBxZMOzymLLljaiwTWmc1m%2BADkTIT9KWYKDhpAEF7J9WJjfateCbCtm1K9QB1rrST9fq4CVO3WEUMDTBfEIM0AktpgdTcQGxpcRV%2FNt8MHKVFU6AVs48JWu9UZMOQCp3%2FrcRahAcKbGQegiADjb%2B4MK9dfznwprQH%2FYyZARSz48VWv%2Ffj9J3aCIlelUYaPzWItPn2E50qUf%2Fpo7G%2BqrTzFZbYyxM1hPQo6O8j25oGulB%2BTIL2kgHDblVcL%2Bp0ZRXrJS7qPjERjgorahkGNYZKydiGYPJwrqNI6vI%2BBa6YmC%2FP0xW8U%2FKk1jGBRXCwKPP88H%2BBhqE%2FrOOp7%2FY8dMXXaajWAwXwuZ1%2FgguwSDtLe%2FZYPSZ6CMOQ7Fo%2BP82akzCN1W2tur9SuktNvKNkzC1gLXDBjqkAZxPHKf3KziTieCBAYKfJfiPDmtRnUI%2FuqEAiF0f0w0%2Foy%2BO7zm2%2B%2Fe4QxgjSA1YM%2BrLBLU9K6GVcX%2FqBKKonDPYyO5Lcmz%2FAoiOzP8dX3%2BlEJEeTZGZTEDAjFmGJw8biajVugae2N8ZqDYrHgH7NFuR4KLTfMC3Eo7Jt1IQ28DF590bl%2FQzDn8Dmbrvyx%2FcaOrKYSixlZNtnxLfvo4ykJpBjONi&X-Amz-Signature=2156e232a4cf755903522d81d4621ca0340af15080fd295135c012263fab96c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
