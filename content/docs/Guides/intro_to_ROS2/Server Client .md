---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6ZAXIR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDWkl%2FKikgeI69BXro545baFfMMCA5b9V2QOmRjz750RgIhAP7gx1SHaff%2BQXPhqCmmqWyUSYzNR%2FvshPqm8bgZaH7JKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysV2KjNFWm4XGkrJoq3AO8zGpq0%2B3o47VlozQK6JA%2Fw7Ynex%2F2OHFdW%2FtNt83s9gJQvaFTx4CIHaxcWs2M4a1bORelf6tIJYZ8XWdiDpclUICjtUlcIPdNmNCc0NSVh0bycDVcDy40aCfOIjopc0q1WdftjtSUMtnjD7n%2Bhobcml%2BFtzRkXHY1dcpqjC1WFJTxrBzBMPaxaP%2FzRRWGSuu%2BckiTUYYPpcEA0V029o1kjgZVO1MfFbgfnK1y6r5EAIRlkMY6svsbVu5UDIrq4CmHTXS0mN2OS%2B0SJDv%2FTWUQr68AkcqYwVLyWsLnerG2d4A8NuVLhCNg8dYfUGb6F%2Br3ERsG%2BdDMTZN%2FVVqlNi7EkUTEcFbRl%2BKNwDG1I4CqHlrOE4WMko2ymNJ37ZqYqGXqfFk6aiL5ohDr%2FVhBFkMgpJmyL3xfUuQ9MQCsAibQEdIK%2FgvCF5YsLisUTuWGLZpvCEC%2BCtE68O52kU4ASiBJbmRJXtUzhRTrt3GwZNBu6GyhnuNA0yMJjjMDyD6vjoW93x5T7O32jPSV%2F2OTFU%2BQMRM7Ngp6FLU%2BiEDqGCwSHZJ6YdhrpnYUxHrQqZt2WRm%2FZTIYr9OsFEndwZQC02YOzdpH5lOmoVrcEUnj6lUqghOQ0PJ26ELVXCJ4NzDu1O3JBjqkAdesl4Srqw1gMvtPIal6QcfKeW1Dioe1rZ4FXKj84Vb3dsiTEu3HdTaN9dzpb4000Kul%2BnHFcc%2BpZRIV8WZg3%2FaRRC2UlDbyRw1je%2BminClhgKx9l%2F22X52We1Cp%2B2HCaKfTwrVmX5eiVSY5P5vSJUPQdiYxx5NlFCWD44eR0gm0STTUdJ75KxUzMo9xf1H2qBbs%2F8T3VUy7%2FDenzReaduwb8l0x&X-Amz-Signature=a0071824fe48a584f971d66db1846980078ce8a51587df617bc146593c2dce68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6ZAXIR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDWkl%2FKikgeI69BXro545baFfMMCA5b9V2QOmRjz750RgIhAP7gx1SHaff%2BQXPhqCmmqWyUSYzNR%2FvshPqm8bgZaH7JKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysV2KjNFWm4XGkrJoq3AO8zGpq0%2B3o47VlozQK6JA%2Fw7Ynex%2F2OHFdW%2FtNt83s9gJQvaFTx4CIHaxcWs2M4a1bORelf6tIJYZ8XWdiDpclUICjtUlcIPdNmNCc0NSVh0bycDVcDy40aCfOIjopc0q1WdftjtSUMtnjD7n%2Bhobcml%2BFtzRkXHY1dcpqjC1WFJTxrBzBMPaxaP%2FzRRWGSuu%2BckiTUYYPpcEA0V029o1kjgZVO1MfFbgfnK1y6r5EAIRlkMY6svsbVu5UDIrq4CmHTXS0mN2OS%2B0SJDv%2FTWUQr68AkcqYwVLyWsLnerG2d4A8NuVLhCNg8dYfUGb6F%2Br3ERsG%2BdDMTZN%2FVVqlNi7EkUTEcFbRl%2BKNwDG1I4CqHlrOE4WMko2ymNJ37ZqYqGXqfFk6aiL5ohDr%2FVhBFkMgpJmyL3xfUuQ9MQCsAibQEdIK%2FgvCF5YsLisUTuWGLZpvCEC%2BCtE68O52kU4ASiBJbmRJXtUzhRTrt3GwZNBu6GyhnuNA0yMJjjMDyD6vjoW93x5T7O32jPSV%2F2OTFU%2BQMRM7Ngp6FLU%2BiEDqGCwSHZJ6YdhrpnYUxHrQqZt2WRm%2FZTIYr9OsFEndwZQC02YOzdpH5lOmoVrcEUnj6lUqghOQ0PJ26ELVXCJ4NzDu1O3JBjqkAdesl4Srqw1gMvtPIal6QcfKeW1Dioe1rZ4FXKj84Vb3dsiTEu3HdTaN9dzpb4000Kul%2BnHFcc%2BpZRIV8WZg3%2FaRRC2UlDbyRw1je%2BminClhgKx9l%2F22X52We1Cp%2B2HCaKfTwrVmX5eiVSY5P5vSJUPQdiYxx5NlFCWD44eR0gm0STTUdJ75KxUzMo9xf1H2qBbs%2F8T3VUy7%2FDenzReaduwb8l0x&X-Amz-Signature=819662d0e758e2e02cc71f1fd3e1021dd9a327eb83b86a1e2f26dba58d627c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6ZAXIR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDWkl%2FKikgeI69BXro545baFfMMCA5b9V2QOmRjz750RgIhAP7gx1SHaff%2BQXPhqCmmqWyUSYzNR%2FvshPqm8bgZaH7JKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysV2KjNFWm4XGkrJoq3AO8zGpq0%2B3o47VlozQK6JA%2Fw7Ynex%2F2OHFdW%2FtNt83s9gJQvaFTx4CIHaxcWs2M4a1bORelf6tIJYZ8XWdiDpclUICjtUlcIPdNmNCc0NSVh0bycDVcDy40aCfOIjopc0q1WdftjtSUMtnjD7n%2Bhobcml%2BFtzRkXHY1dcpqjC1WFJTxrBzBMPaxaP%2FzRRWGSuu%2BckiTUYYPpcEA0V029o1kjgZVO1MfFbgfnK1y6r5EAIRlkMY6svsbVu5UDIrq4CmHTXS0mN2OS%2B0SJDv%2FTWUQr68AkcqYwVLyWsLnerG2d4A8NuVLhCNg8dYfUGb6F%2Br3ERsG%2BdDMTZN%2FVVqlNi7EkUTEcFbRl%2BKNwDG1I4CqHlrOE4WMko2ymNJ37ZqYqGXqfFk6aiL5ohDr%2FVhBFkMgpJmyL3xfUuQ9MQCsAibQEdIK%2FgvCF5YsLisUTuWGLZpvCEC%2BCtE68O52kU4ASiBJbmRJXtUzhRTrt3GwZNBu6GyhnuNA0yMJjjMDyD6vjoW93x5T7O32jPSV%2F2OTFU%2BQMRM7Ngp6FLU%2BiEDqGCwSHZJ6YdhrpnYUxHrQqZt2WRm%2FZTIYr9OsFEndwZQC02YOzdpH5lOmoVrcEUnj6lUqghOQ0PJ26ELVXCJ4NzDu1O3JBjqkAdesl4Srqw1gMvtPIal6QcfKeW1Dioe1rZ4FXKj84Vb3dsiTEu3HdTaN9dzpb4000Kul%2BnHFcc%2BpZRIV8WZg3%2FaRRC2UlDbyRw1je%2BminClhgKx9l%2F22X52We1Cp%2B2HCaKfTwrVmX5eiVSY5P5vSJUPQdiYxx5NlFCWD44eR0gm0STTUdJ75KxUzMo9xf1H2qBbs%2F8T3VUy7%2FDenzReaduwb8l0x&X-Amz-Signature=2ef5f000bac34d87339c87539f2972d01510e3fcc978727e93872ac0cc9d8e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6ZAXIR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDWkl%2FKikgeI69BXro545baFfMMCA5b9V2QOmRjz750RgIhAP7gx1SHaff%2BQXPhqCmmqWyUSYzNR%2FvshPqm8bgZaH7JKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysV2KjNFWm4XGkrJoq3AO8zGpq0%2B3o47VlozQK6JA%2Fw7Ynex%2F2OHFdW%2FtNt83s9gJQvaFTx4CIHaxcWs2M4a1bORelf6tIJYZ8XWdiDpclUICjtUlcIPdNmNCc0NSVh0bycDVcDy40aCfOIjopc0q1WdftjtSUMtnjD7n%2Bhobcml%2BFtzRkXHY1dcpqjC1WFJTxrBzBMPaxaP%2FzRRWGSuu%2BckiTUYYPpcEA0V029o1kjgZVO1MfFbgfnK1y6r5EAIRlkMY6svsbVu5UDIrq4CmHTXS0mN2OS%2B0SJDv%2FTWUQr68AkcqYwVLyWsLnerG2d4A8NuVLhCNg8dYfUGb6F%2Br3ERsG%2BdDMTZN%2FVVqlNi7EkUTEcFbRl%2BKNwDG1I4CqHlrOE4WMko2ymNJ37ZqYqGXqfFk6aiL5ohDr%2FVhBFkMgpJmyL3xfUuQ9MQCsAibQEdIK%2FgvCF5YsLisUTuWGLZpvCEC%2BCtE68O52kU4ASiBJbmRJXtUzhRTrt3GwZNBu6GyhnuNA0yMJjjMDyD6vjoW93x5T7O32jPSV%2F2OTFU%2BQMRM7Ngp6FLU%2BiEDqGCwSHZJ6YdhrpnYUxHrQqZt2WRm%2FZTIYr9OsFEndwZQC02YOzdpH5lOmoVrcEUnj6lUqghOQ0PJ26ELVXCJ4NzDu1O3JBjqkAdesl4Srqw1gMvtPIal6QcfKeW1Dioe1rZ4FXKj84Vb3dsiTEu3HdTaN9dzpb4000Kul%2BnHFcc%2BpZRIV8WZg3%2FaRRC2UlDbyRw1je%2BminClhgKx9l%2F22X52We1Cp%2B2HCaKfTwrVmX5eiVSY5P5vSJUPQdiYxx5NlFCWD44eR0gm0STTUdJ75KxUzMo9xf1H2qBbs%2F8T3VUy7%2FDenzReaduwb8l0x&X-Amz-Signature=e9aa609020fbe519d4ecbf1a30b975d8c0717be152aa16a8737b18e8c9fae0ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6ZAXIR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDWkl%2FKikgeI69BXro545baFfMMCA5b9V2QOmRjz750RgIhAP7gx1SHaff%2BQXPhqCmmqWyUSYzNR%2FvshPqm8bgZaH7JKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysV2KjNFWm4XGkrJoq3AO8zGpq0%2B3o47VlozQK6JA%2Fw7Ynex%2F2OHFdW%2FtNt83s9gJQvaFTx4CIHaxcWs2M4a1bORelf6tIJYZ8XWdiDpclUICjtUlcIPdNmNCc0NSVh0bycDVcDy40aCfOIjopc0q1WdftjtSUMtnjD7n%2Bhobcml%2BFtzRkXHY1dcpqjC1WFJTxrBzBMPaxaP%2FzRRWGSuu%2BckiTUYYPpcEA0V029o1kjgZVO1MfFbgfnK1y6r5EAIRlkMY6svsbVu5UDIrq4CmHTXS0mN2OS%2B0SJDv%2FTWUQr68AkcqYwVLyWsLnerG2d4A8NuVLhCNg8dYfUGb6F%2Br3ERsG%2BdDMTZN%2FVVqlNi7EkUTEcFbRl%2BKNwDG1I4CqHlrOE4WMko2ymNJ37ZqYqGXqfFk6aiL5ohDr%2FVhBFkMgpJmyL3xfUuQ9MQCsAibQEdIK%2FgvCF5YsLisUTuWGLZpvCEC%2BCtE68O52kU4ASiBJbmRJXtUzhRTrt3GwZNBu6GyhnuNA0yMJjjMDyD6vjoW93x5T7O32jPSV%2F2OTFU%2BQMRM7Ngp6FLU%2BiEDqGCwSHZJ6YdhrpnYUxHrQqZt2WRm%2FZTIYr9OsFEndwZQC02YOzdpH5lOmoVrcEUnj6lUqghOQ0PJ26ELVXCJ4NzDu1O3JBjqkAdesl4Srqw1gMvtPIal6QcfKeW1Dioe1rZ4FXKj84Vb3dsiTEu3HdTaN9dzpb4000Kul%2BnHFcc%2BpZRIV8WZg3%2FaRRC2UlDbyRw1je%2BminClhgKx9l%2F22X52We1Cp%2B2HCaKfTwrVmX5eiVSY5P5vSJUPQdiYxx5NlFCWD44eR0gm0STTUdJ75KxUzMo9xf1H2qBbs%2F8T3VUy7%2FDenzReaduwb8l0x&X-Amz-Signature=21e6bc1a3a0733163598981fc88d2975f54c59b984b181accbbdcefd58e10df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
