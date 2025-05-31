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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YXSTB7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOJcG0KV2uDu6VsZ9bifGHXlkOzZKMGRybeW52fIk7kAiAJuXKT%2BAdDTWV4vDTPSWs0x75CHKjLVRj%2Bg3uZW%2BKYiyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngDHcOduNHx9URs3KtwDw1E1tQDyTVzAIHWYS5gucUay7boBJRlN3FN2DG1EXc7BN6C%2FayGFSE9LMcil9%2BWS5teN6uRfS%2FqZLwmocuXJdO8tAe%2FMvb390nL8cqIhEGxHC9k1IaTKbwT5wrckQj5nOCYozE9kl6sFW%2FzQHjPJxauSkXaxKowdJZ1PtS9rViQ%2F0KxdYSVQIKPc3AAutKPyPMBHAPVXJIp1mC0AVe%2BOE1zlC3bEjYTnCJg9SofedUvXw5nY6Sz8FjScpCCZgsfIxKxSs%2B8v3T0g75FtyAD3f6EXSxm1SFsMDnTwHO5z5KTzN7fxJQC8UdTas60NrSObPqskgyez7ozK7RLoiBV%2B69DMDQUcHR5WpDSojxBIA%2F6hEJCm2hWPZBcmkInSk8o5exv04JJ9qO5S8DsbJVmnNHRqqMOLV9e19KdoTMc8FwOS%2FaDw%2FX%2F0nil4QZ7XIcdHHumpaFUh4KSrFYj07%2F3SK3hCt41H0fXtlR7hfsxtoFWSvNAAmdgMehOK5VqW39xj6MXRNb7wB55GgQPUJC%2Fz1%2FulMX6A3Os8vJ6LlW%2BSNPnAsLVj8SPTneWepTGjKkfMATcElGCAGD4UTYiVq2qM5L8Z%2F5EpMsM7so4uHIW7KHXE0XV4Gi%2BAc%2Bdk3ycw%2BL%2FtwQY6pgFP35gmxxSAr66jBNDWOJz8FrcEFU%2FLjmd2LqfxNQMP41m4lDzbb0ZniK59YTTEvFhH5S%2Bu8voD5cw%2Blm39WaPsoPWU442Ltu%2BkEKz0BAjUyrSQ4ELYZY%2FmFXbzVhFNc%2Bc0j7cYFu%2F30ihFbAZGsn4AXgD%2BckJzJ2495Cu3saGBqeMHS6jlc5g7%2B1KH9Y%2Fwx1MqUs5AHz1TY9ZJpKn8TIr%2Fk2dJo36D&X-Amz-Signature=6ab5c3a60fe60f90a11793d02018d2b8424af9ab0b1f05ab694aae11ebccfff4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YXSTB7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOJcG0KV2uDu6VsZ9bifGHXlkOzZKMGRybeW52fIk7kAiAJuXKT%2BAdDTWV4vDTPSWs0x75CHKjLVRj%2Bg3uZW%2BKYiyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngDHcOduNHx9URs3KtwDw1E1tQDyTVzAIHWYS5gucUay7boBJRlN3FN2DG1EXc7BN6C%2FayGFSE9LMcil9%2BWS5teN6uRfS%2FqZLwmocuXJdO8tAe%2FMvb390nL8cqIhEGxHC9k1IaTKbwT5wrckQj5nOCYozE9kl6sFW%2FzQHjPJxauSkXaxKowdJZ1PtS9rViQ%2F0KxdYSVQIKPc3AAutKPyPMBHAPVXJIp1mC0AVe%2BOE1zlC3bEjYTnCJg9SofedUvXw5nY6Sz8FjScpCCZgsfIxKxSs%2B8v3T0g75FtyAD3f6EXSxm1SFsMDnTwHO5z5KTzN7fxJQC8UdTas60NrSObPqskgyez7ozK7RLoiBV%2B69DMDQUcHR5WpDSojxBIA%2F6hEJCm2hWPZBcmkInSk8o5exv04JJ9qO5S8DsbJVmnNHRqqMOLV9e19KdoTMc8FwOS%2FaDw%2FX%2F0nil4QZ7XIcdHHumpaFUh4KSrFYj07%2F3SK3hCt41H0fXtlR7hfsxtoFWSvNAAmdgMehOK5VqW39xj6MXRNb7wB55GgQPUJC%2Fz1%2FulMX6A3Os8vJ6LlW%2BSNPnAsLVj8SPTneWepTGjKkfMATcElGCAGD4UTYiVq2qM5L8Z%2F5EpMsM7so4uHIW7KHXE0XV4Gi%2BAc%2Bdk3ycw%2BL%2FtwQY6pgFP35gmxxSAr66jBNDWOJz8FrcEFU%2FLjmd2LqfxNQMP41m4lDzbb0ZniK59YTTEvFhH5S%2Bu8voD5cw%2Blm39WaPsoPWU442Ltu%2BkEKz0BAjUyrSQ4ELYZY%2FmFXbzVhFNc%2Bc0j7cYFu%2F30ihFbAZGsn4AXgD%2BckJzJ2495Cu3saGBqeMHS6jlc5g7%2B1KH9Y%2Fwx1MqUs5AHz1TY9ZJpKn8TIr%2Fk2dJo36D&X-Amz-Signature=cbc84a8af09cf2c33d892780012a5c7167f4e132c0b3a2f9df1021138d446a35&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YXSTB7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOJcG0KV2uDu6VsZ9bifGHXlkOzZKMGRybeW52fIk7kAiAJuXKT%2BAdDTWV4vDTPSWs0x75CHKjLVRj%2Bg3uZW%2BKYiyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngDHcOduNHx9URs3KtwDw1E1tQDyTVzAIHWYS5gucUay7boBJRlN3FN2DG1EXc7BN6C%2FayGFSE9LMcil9%2BWS5teN6uRfS%2FqZLwmocuXJdO8tAe%2FMvb390nL8cqIhEGxHC9k1IaTKbwT5wrckQj5nOCYozE9kl6sFW%2FzQHjPJxauSkXaxKowdJZ1PtS9rViQ%2F0KxdYSVQIKPc3AAutKPyPMBHAPVXJIp1mC0AVe%2BOE1zlC3bEjYTnCJg9SofedUvXw5nY6Sz8FjScpCCZgsfIxKxSs%2B8v3T0g75FtyAD3f6EXSxm1SFsMDnTwHO5z5KTzN7fxJQC8UdTas60NrSObPqskgyez7ozK7RLoiBV%2B69DMDQUcHR5WpDSojxBIA%2F6hEJCm2hWPZBcmkInSk8o5exv04JJ9qO5S8DsbJVmnNHRqqMOLV9e19KdoTMc8FwOS%2FaDw%2FX%2F0nil4QZ7XIcdHHumpaFUh4KSrFYj07%2F3SK3hCt41H0fXtlR7hfsxtoFWSvNAAmdgMehOK5VqW39xj6MXRNb7wB55GgQPUJC%2Fz1%2FulMX6A3Os8vJ6LlW%2BSNPnAsLVj8SPTneWepTGjKkfMATcElGCAGD4UTYiVq2qM5L8Z%2F5EpMsM7so4uHIW7KHXE0XV4Gi%2BAc%2Bdk3ycw%2BL%2FtwQY6pgFP35gmxxSAr66jBNDWOJz8FrcEFU%2FLjmd2LqfxNQMP41m4lDzbb0ZniK59YTTEvFhH5S%2Bu8voD5cw%2Blm39WaPsoPWU442Ltu%2BkEKz0BAjUyrSQ4ELYZY%2FmFXbzVhFNc%2Bc0j7cYFu%2F30ihFbAZGsn4AXgD%2BckJzJ2495Cu3saGBqeMHS6jlc5g7%2B1KH9Y%2Fwx1MqUs5AHz1TY9ZJpKn8TIr%2Fk2dJo36D&X-Amz-Signature=7e1c04e286645331d847b6da3e34e85ff23e5b3b4fbff8f3d2cd0acedd3b29d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YXSTB7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOJcG0KV2uDu6VsZ9bifGHXlkOzZKMGRybeW52fIk7kAiAJuXKT%2BAdDTWV4vDTPSWs0x75CHKjLVRj%2Bg3uZW%2BKYiyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngDHcOduNHx9URs3KtwDw1E1tQDyTVzAIHWYS5gucUay7boBJRlN3FN2DG1EXc7BN6C%2FayGFSE9LMcil9%2BWS5teN6uRfS%2FqZLwmocuXJdO8tAe%2FMvb390nL8cqIhEGxHC9k1IaTKbwT5wrckQj5nOCYozE9kl6sFW%2FzQHjPJxauSkXaxKowdJZ1PtS9rViQ%2F0KxdYSVQIKPc3AAutKPyPMBHAPVXJIp1mC0AVe%2BOE1zlC3bEjYTnCJg9SofedUvXw5nY6Sz8FjScpCCZgsfIxKxSs%2B8v3T0g75FtyAD3f6EXSxm1SFsMDnTwHO5z5KTzN7fxJQC8UdTas60NrSObPqskgyez7ozK7RLoiBV%2B69DMDQUcHR5WpDSojxBIA%2F6hEJCm2hWPZBcmkInSk8o5exv04JJ9qO5S8DsbJVmnNHRqqMOLV9e19KdoTMc8FwOS%2FaDw%2FX%2F0nil4QZ7XIcdHHumpaFUh4KSrFYj07%2F3SK3hCt41H0fXtlR7hfsxtoFWSvNAAmdgMehOK5VqW39xj6MXRNb7wB55GgQPUJC%2Fz1%2FulMX6A3Os8vJ6LlW%2BSNPnAsLVj8SPTneWepTGjKkfMATcElGCAGD4UTYiVq2qM5L8Z%2F5EpMsM7so4uHIW7KHXE0XV4Gi%2BAc%2Bdk3ycw%2BL%2FtwQY6pgFP35gmxxSAr66jBNDWOJz8FrcEFU%2FLjmd2LqfxNQMP41m4lDzbb0ZniK59YTTEvFhH5S%2Bu8voD5cw%2Blm39WaPsoPWU442Ltu%2BkEKz0BAjUyrSQ4ELYZY%2FmFXbzVhFNc%2Bc0j7cYFu%2F30ihFbAZGsn4AXgD%2BckJzJ2495Cu3saGBqeMHS6jlc5g7%2B1KH9Y%2Fwx1MqUs5AHz1TY9ZJpKn8TIr%2Fk2dJo36D&X-Amz-Signature=5006c5665c2ccd79ad17ca0ac37e47dd8c653ee29dbe7104f255d89815f27e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YXSTB7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOJcG0KV2uDu6VsZ9bifGHXlkOzZKMGRybeW52fIk7kAiAJuXKT%2BAdDTWV4vDTPSWs0x75CHKjLVRj%2Bg3uZW%2BKYiyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngDHcOduNHx9URs3KtwDw1E1tQDyTVzAIHWYS5gucUay7boBJRlN3FN2DG1EXc7BN6C%2FayGFSE9LMcil9%2BWS5teN6uRfS%2FqZLwmocuXJdO8tAe%2FMvb390nL8cqIhEGxHC9k1IaTKbwT5wrckQj5nOCYozE9kl6sFW%2FzQHjPJxauSkXaxKowdJZ1PtS9rViQ%2F0KxdYSVQIKPc3AAutKPyPMBHAPVXJIp1mC0AVe%2BOE1zlC3bEjYTnCJg9SofedUvXw5nY6Sz8FjScpCCZgsfIxKxSs%2B8v3T0g75FtyAD3f6EXSxm1SFsMDnTwHO5z5KTzN7fxJQC8UdTas60NrSObPqskgyez7ozK7RLoiBV%2B69DMDQUcHR5WpDSojxBIA%2F6hEJCm2hWPZBcmkInSk8o5exv04JJ9qO5S8DsbJVmnNHRqqMOLV9e19KdoTMc8FwOS%2FaDw%2FX%2F0nil4QZ7XIcdHHumpaFUh4KSrFYj07%2F3SK3hCt41H0fXtlR7hfsxtoFWSvNAAmdgMehOK5VqW39xj6MXRNb7wB55GgQPUJC%2Fz1%2FulMX6A3Os8vJ6LlW%2BSNPnAsLVj8SPTneWepTGjKkfMATcElGCAGD4UTYiVq2qM5L8Z%2F5EpMsM7so4uHIW7KHXE0XV4Gi%2BAc%2Bdk3ycw%2BL%2FtwQY6pgFP35gmxxSAr66jBNDWOJz8FrcEFU%2FLjmd2LqfxNQMP41m4lDzbb0ZniK59YTTEvFhH5S%2Bu8voD5cw%2Blm39WaPsoPWU442Ltu%2BkEKz0BAjUyrSQ4ELYZY%2FmFXbzVhFNc%2Bc0j7cYFu%2F30ihFbAZGsn4AXgD%2BckJzJ2495Cu3saGBqeMHS6jlc5g7%2B1KH9Y%2Fwx1MqUs5AHz1TY9ZJpKn8TIr%2Fk2dJo36D&X-Amz-Signature=f63983102563cc2908e29d218fe784e2e7631f1e452497b80c0e0d28cfa0b4c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
