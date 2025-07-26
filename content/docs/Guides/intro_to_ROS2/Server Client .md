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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2E2BO6E%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDPVq7czoJwDTIy2D7tefrNLcOhgAIkRJ9WP5DmnnQF1AIhAL%2BeuEGpqJFlVk7nejbR4yFZPJS3T%2FaBeaTFjMbruyg1Kv8DCF0QABoMNjM3NDIzMTgzODA1Igwb1tmaopVnlbE8oAgq3ANArlRfeDtGteE8ycmQ3N5VeD1pKhgvuZwpUiHuDpfNoLb7VhEjg1Ro4N4YKNGuNO7IpSPnXQZxNeb%2BPLLTLUjnLpq2dDaTbwgrZjKfnaDBFKTXaq6kEJqo5WtWB1IH2aulJ0OlZrRdn05ftxS2xemvrA8XgSo1jFPXDlxbEaI8vDSBLlXJnLJRU%2BgKMDoeDTRy7k9SOFg%2FKFis2yVc4m9Bs80u7v5StnwxXhoXpIoKANtecjZCCHQvrHHuW%2FCwu5r5IRW34zRUOf2N%2BVTHinDhOCqfuiknrJ4ytboLlP7pfqYPFiiIrlDN7FsiPH5tP2Tz47SytaIebN3NI7ThleLlf12C4W8J2fEkJQ3VIEAJESRu4a2c0tjefC1ghljHAAznGsNgeTZ5a3d%2Bwc1K2t5INULuJfxmLqTD7spmE%2FvAWJZaFAvvGhS5xKxFekN9Dp03pl2KfExFG3IoGk1Qc%2BXkc2kBOTaLOvdBSKPt1Xg6wlvNaVd8C8dvJFjgjFz2Gs9huHEhMwT8Wmdn4BupmDhnJJPNOj%2BQZBwuGc4J9glaSfKgIJew2XuPNgTcvasrcnlHn0DblpzDIVdAfXz8d50v9QNpCq%2BdvinGEOS%2B%2B7ZYza59LCBBaBDZwCHQQzCu%2BpLEBjqkAcFlLC6vD92kUa3Dptm0Pd3nvKsTb1g8bA3azyQDz0TLXKJHddoZLlb%2BDh1x199CvYIsTipC4Gmjrjvas%2FW0CnFh1knXJprHZ%2B8LFhfEFO5YrOJ2OKvkrHNjy7jN7hUzrPg07B2SPA2QHAZN8G2MOomsPVc8wxoAqY%2BzTZmuCLewpxBu7Vh%2Bx0vanClLRJbaS5e%2ForbcN1RHpt4dnUODAjNsi8wZ&X-Amz-Signature=c0ce375526493369f56ddae43780353b3e1ea8471dd046dc51c708559af8c415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2E2BO6E%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDPVq7czoJwDTIy2D7tefrNLcOhgAIkRJ9WP5DmnnQF1AIhAL%2BeuEGpqJFlVk7nejbR4yFZPJS3T%2FaBeaTFjMbruyg1Kv8DCF0QABoMNjM3NDIzMTgzODA1Igwb1tmaopVnlbE8oAgq3ANArlRfeDtGteE8ycmQ3N5VeD1pKhgvuZwpUiHuDpfNoLb7VhEjg1Ro4N4YKNGuNO7IpSPnXQZxNeb%2BPLLTLUjnLpq2dDaTbwgrZjKfnaDBFKTXaq6kEJqo5WtWB1IH2aulJ0OlZrRdn05ftxS2xemvrA8XgSo1jFPXDlxbEaI8vDSBLlXJnLJRU%2BgKMDoeDTRy7k9SOFg%2FKFis2yVc4m9Bs80u7v5StnwxXhoXpIoKANtecjZCCHQvrHHuW%2FCwu5r5IRW34zRUOf2N%2BVTHinDhOCqfuiknrJ4ytboLlP7pfqYPFiiIrlDN7FsiPH5tP2Tz47SytaIebN3NI7ThleLlf12C4W8J2fEkJQ3VIEAJESRu4a2c0tjefC1ghljHAAznGsNgeTZ5a3d%2Bwc1K2t5INULuJfxmLqTD7spmE%2FvAWJZaFAvvGhS5xKxFekN9Dp03pl2KfExFG3IoGk1Qc%2BXkc2kBOTaLOvdBSKPt1Xg6wlvNaVd8C8dvJFjgjFz2Gs9huHEhMwT8Wmdn4BupmDhnJJPNOj%2BQZBwuGc4J9glaSfKgIJew2XuPNgTcvasrcnlHn0DblpzDIVdAfXz8d50v9QNpCq%2BdvinGEOS%2B%2B7ZYza59LCBBaBDZwCHQQzCu%2BpLEBjqkAcFlLC6vD92kUa3Dptm0Pd3nvKsTb1g8bA3azyQDz0TLXKJHddoZLlb%2BDh1x199CvYIsTipC4Gmjrjvas%2FW0CnFh1knXJprHZ%2B8LFhfEFO5YrOJ2OKvkrHNjy7jN7hUzrPg07B2SPA2QHAZN8G2MOomsPVc8wxoAqY%2BzTZmuCLewpxBu7Vh%2Bx0vanClLRJbaS5e%2ForbcN1RHpt4dnUODAjNsi8wZ&X-Amz-Signature=63ae503cf56d04b3839948360e5c479a031fd7209786cbf60fb74e7dcc2b0166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2E2BO6E%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDPVq7czoJwDTIy2D7tefrNLcOhgAIkRJ9WP5DmnnQF1AIhAL%2BeuEGpqJFlVk7nejbR4yFZPJS3T%2FaBeaTFjMbruyg1Kv8DCF0QABoMNjM3NDIzMTgzODA1Igwb1tmaopVnlbE8oAgq3ANArlRfeDtGteE8ycmQ3N5VeD1pKhgvuZwpUiHuDpfNoLb7VhEjg1Ro4N4YKNGuNO7IpSPnXQZxNeb%2BPLLTLUjnLpq2dDaTbwgrZjKfnaDBFKTXaq6kEJqo5WtWB1IH2aulJ0OlZrRdn05ftxS2xemvrA8XgSo1jFPXDlxbEaI8vDSBLlXJnLJRU%2BgKMDoeDTRy7k9SOFg%2FKFis2yVc4m9Bs80u7v5StnwxXhoXpIoKANtecjZCCHQvrHHuW%2FCwu5r5IRW34zRUOf2N%2BVTHinDhOCqfuiknrJ4ytboLlP7pfqYPFiiIrlDN7FsiPH5tP2Tz47SytaIebN3NI7ThleLlf12C4W8J2fEkJQ3VIEAJESRu4a2c0tjefC1ghljHAAznGsNgeTZ5a3d%2Bwc1K2t5INULuJfxmLqTD7spmE%2FvAWJZaFAvvGhS5xKxFekN9Dp03pl2KfExFG3IoGk1Qc%2BXkc2kBOTaLOvdBSKPt1Xg6wlvNaVd8C8dvJFjgjFz2Gs9huHEhMwT8Wmdn4BupmDhnJJPNOj%2BQZBwuGc4J9glaSfKgIJew2XuPNgTcvasrcnlHn0DblpzDIVdAfXz8d50v9QNpCq%2BdvinGEOS%2B%2B7ZYza59LCBBaBDZwCHQQzCu%2BpLEBjqkAcFlLC6vD92kUa3Dptm0Pd3nvKsTb1g8bA3azyQDz0TLXKJHddoZLlb%2BDh1x199CvYIsTipC4Gmjrjvas%2FW0CnFh1knXJprHZ%2B8LFhfEFO5YrOJ2OKvkrHNjy7jN7hUzrPg07B2SPA2QHAZN8G2MOomsPVc8wxoAqY%2BzTZmuCLewpxBu7Vh%2Bx0vanClLRJbaS5e%2ForbcN1RHpt4dnUODAjNsi8wZ&X-Amz-Signature=ecf4c827c59e22737e913a67e0d322e5efe3d12150541aa098ad5d7886ed6141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2E2BO6E%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDPVq7czoJwDTIy2D7tefrNLcOhgAIkRJ9WP5DmnnQF1AIhAL%2BeuEGpqJFlVk7nejbR4yFZPJS3T%2FaBeaTFjMbruyg1Kv8DCF0QABoMNjM3NDIzMTgzODA1Igwb1tmaopVnlbE8oAgq3ANArlRfeDtGteE8ycmQ3N5VeD1pKhgvuZwpUiHuDpfNoLb7VhEjg1Ro4N4YKNGuNO7IpSPnXQZxNeb%2BPLLTLUjnLpq2dDaTbwgrZjKfnaDBFKTXaq6kEJqo5WtWB1IH2aulJ0OlZrRdn05ftxS2xemvrA8XgSo1jFPXDlxbEaI8vDSBLlXJnLJRU%2BgKMDoeDTRy7k9SOFg%2FKFis2yVc4m9Bs80u7v5StnwxXhoXpIoKANtecjZCCHQvrHHuW%2FCwu5r5IRW34zRUOf2N%2BVTHinDhOCqfuiknrJ4ytboLlP7pfqYPFiiIrlDN7FsiPH5tP2Tz47SytaIebN3NI7ThleLlf12C4W8J2fEkJQ3VIEAJESRu4a2c0tjefC1ghljHAAznGsNgeTZ5a3d%2Bwc1K2t5INULuJfxmLqTD7spmE%2FvAWJZaFAvvGhS5xKxFekN9Dp03pl2KfExFG3IoGk1Qc%2BXkc2kBOTaLOvdBSKPt1Xg6wlvNaVd8C8dvJFjgjFz2Gs9huHEhMwT8Wmdn4BupmDhnJJPNOj%2BQZBwuGc4J9glaSfKgIJew2XuPNgTcvasrcnlHn0DblpzDIVdAfXz8d50v9QNpCq%2BdvinGEOS%2B%2B7ZYza59LCBBaBDZwCHQQzCu%2BpLEBjqkAcFlLC6vD92kUa3Dptm0Pd3nvKsTb1g8bA3azyQDz0TLXKJHddoZLlb%2BDh1x199CvYIsTipC4Gmjrjvas%2FW0CnFh1knXJprHZ%2B8LFhfEFO5YrOJ2OKvkrHNjy7jN7hUzrPg07B2SPA2QHAZN8G2MOomsPVc8wxoAqY%2BzTZmuCLewpxBu7Vh%2Bx0vanClLRJbaS5e%2ForbcN1RHpt4dnUODAjNsi8wZ&X-Amz-Signature=e3161a3d3b6f82db45e395db29212cc28244abd783a1cddb70e00d19270b950e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2E2BO6E%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDPVq7czoJwDTIy2D7tefrNLcOhgAIkRJ9WP5DmnnQF1AIhAL%2BeuEGpqJFlVk7nejbR4yFZPJS3T%2FaBeaTFjMbruyg1Kv8DCF0QABoMNjM3NDIzMTgzODA1Igwb1tmaopVnlbE8oAgq3ANArlRfeDtGteE8ycmQ3N5VeD1pKhgvuZwpUiHuDpfNoLb7VhEjg1Ro4N4YKNGuNO7IpSPnXQZxNeb%2BPLLTLUjnLpq2dDaTbwgrZjKfnaDBFKTXaq6kEJqo5WtWB1IH2aulJ0OlZrRdn05ftxS2xemvrA8XgSo1jFPXDlxbEaI8vDSBLlXJnLJRU%2BgKMDoeDTRy7k9SOFg%2FKFis2yVc4m9Bs80u7v5StnwxXhoXpIoKANtecjZCCHQvrHHuW%2FCwu5r5IRW34zRUOf2N%2BVTHinDhOCqfuiknrJ4ytboLlP7pfqYPFiiIrlDN7FsiPH5tP2Tz47SytaIebN3NI7ThleLlf12C4W8J2fEkJQ3VIEAJESRu4a2c0tjefC1ghljHAAznGsNgeTZ5a3d%2Bwc1K2t5INULuJfxmLqTD7spmE%2FvAWJZaFAvvGhS5xKxFekN9Dp03pl2KfExFG3IoGk1Qc%2BXkc2kBOTaLOvdBSKPt1Xg6wlvNaVd8C8dvJFjgjFz2Gs9huHEhMwT8Wmdn4BupmDhnJJPNOj%2BQZBwuGc4J9glaSfKgIJew2XuPNgTcvasrcnlHn0DblpzDIVdAfXz8d50v9QNpCq%2BdvinGEOS%2B%2B7ZYza59LCBBaBDZwCHQQzCu%2BpLEBjqkAcFlLC6vD92kUa3Dptm0Pd3nvKsTb1g8bA3azyQDz0TLXKJHddoZLlb%2BDh1x199CvYIsTipC4Gmjrjvas%2FW0CnFh1knXJprHZ%2B8LFhfEFO5YrOJ2OKvkrHNjy7jN7hUzrPg07B2SPA2QHAZN8G2MOomsPVc8wxoAqY%2BzTZmuCLewpxBu7Vh%2Bx0vanClLRJbaS5e%2ForbcN1RHpt4dnUODAjNsi8wZ&X-Amz-Signature=ae814d9963c82d67a7c81c10e530e7b67aff8c63a7fcef91a12b421163529b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
