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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JX25FIS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDeQ7Voe0kq39TUvnMk8U9iqCyQqcCnGGe2UP4p3apfBAiB%2BNEp%2BYl5xwYgogoYkrQ4CbGcM8pTgd1rN%2F%2FtUCgEciyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Ws%2FpIwq2ZH7Hv33KtwD00H0lMTuF94jnOChRMeBehBSWV%2BpRRamtio225wyX2hrFn0OFqnFZnvUe1I0fV5aAOodmCIeHPWMlUV5KXIiDpGd3zGBVQ3NK3UcWyd9lHcrKDwlV4%2FPQ3%2FwYhjVa2KigmHTKXPRkqNRtZ6zG1ctAT8RfS2i%2F9tCMJkBLtHEw3YxEfCjtDmervQMAkeBylNHUfESvSo4hE1Wj4vzesfx34hlqu8OcmMxfUR4ZW7%2FJCzUQo4MXUKH5fofoxPCp%2BtpAPGm4Y%2BOGGcRQ5Ljt9bduICRTfpN8SYaOfuyc1siTh4SsrUykB0mPvzNds1wNMZFWA%2B4tT%2BbZms0w6jrBTQVGSqpDcrbKHjbxRl4J2lXjMuewvrHdwagx%2FUFkNDAajGluucuBmFpAzXn6XV2OW4DvevsDrgZbiOqG9tKu9j4ZC89IwsvFzPYn4Le1XDIgFSVFtjtnZINLflY1dv09ATEcDcqXzmTGO%2F%2B36iAbnWw29%2BIRIv78dXpxcKbkUuNOCc5oRiRUwfj57N9E05fCyL4mc0ThGghGGLO2OUup1A2sdvUht3Ak0zBm5mzyUDthapBm5%2F4zbfs6BMkswNdF1aJmfRxEpYx4t4PSJ4ArAwT82uR%2FS2lrRLUNllvoPQw%2BIeQwQY6pgFz%2B5HLiASoPPxGRdaNDwsBfr%2BUfhGzolbvW4nuMu%2BW5rMaseD4%2FMUOsIWg0OAT%2FBYddiTuWBrc1h5IHycBNBRaQoZBNfu3UCVt5jX%2BoZuci00Z1%2FsOVrOFAJv89HD%2F8nnCzNvm0Obtqja0usYeXcGjYAgE%2BeIaEiqswP3f7am8EkPm%2FKbEeh744Q%2F9bBfO2IZXIp9SWpHUUFjwMUFfbXgLScTDjTji&X-Amz-Signature=3a38e8e6cebef989e338752283a62be25711dc3cf8155f3f243d3da2c8c498ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JX25FIS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDeQ7Voe0kq39TUvnMk8U9iqCyQqcCnGGe2UP4p3apfBAiB%2BNEp%2BYl5xwYgogoYkrQ4CbGcM8pTgd1rN%2F%2FtUCgEciyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Ws%2FpIwq2ZH7Hv33KtwD00H0lMTuF94jnOChRMeBehBSWV%2BpRRamtio225wyX2hrFn0OFqnFZnvUe1I0fV5aAOodmCIeHPWMlUV5KXIiDpGd3zGBVQ3NK3UcWyd9lHcrKDwlV4%2FPQ3%2FwYhjVa2KigmHTKXPRkqNRtZ6zG1ctAT8RfS2i%2F9tCMJkBLtHEw3YxEfCjtDmervQMAkeBylNHUfESvSo4hE1Wj4vzesfx34hlqu8OcmMxfUR4ZW7%2FJCzUQo4MXUKH5fofoxPCp%2BtpAPGm4Y%2BOGGcRQ5Ljt9bduICRTfpN8SYaOfuyc1siTh4SsrUykB0mPvzNds1wNMZFWA%2B4tT%2BbZms0w6jrBTQVGSqpDcrbKHjbxRl4J2lXjMuewvrHdwagx%2FUFkNDAajGluucuBmFpAzXn6XV2OW4DvevsDrgZbiOqG9tKu9j4ZC89IwsvFzPYn4Le1XDIgFSVFtjtnZINLflY1dv09ATEcDcqXzmTGO%2F%2B36iAbnWw29%2BIRIv78dXpxcKbkUuNOCc5oRiRUwfj57N9E05fCyL4mc0ThGghGGLO2OUup1A2sdvUht3Ak0zBm5mzyUDthapBm5%2F4zbfs6BMkswNdF1aJmfRxEpYx4t4PSJ4ArAwT82uR%2FS2lrRLUNllvoPQw%2BIeQwQY6pgFz%2B5HLiASoPPxGRdaNDwsBfr%2BUfhGzolbvW4nuMu%2BW5rMaseD4%2FMUOsIWg0OAT%2FBYddiTuWBrc1h5IHycBNBRaQoZBNfu3UCVt5jX%2BoZuci00Z1%2FsOVrOFAJv89HD%2F8nnCzNvm0Obtqja0usYeXcGjYAgE%2BeIaEiqswP3f7am8EkPm%2FKbEeh744Q%2F9bBfO2IZXIp9SWpHUUFjwMUFfbXgLScTDjTji&X-Amz-Signature=7c72622719631d4907077db40124a2ec971d1f314b64c114b503458140d99ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JX25FIS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDeQ7Voe0kq39TUvnMk8U9iqCyQqcCnGGe2UP4p3apfBAiB%2BNEp%2BYl5xwYgogoYkrQ4CbGcM8pTgd1rN%2F%2FtUCgEciyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Ws%2FpIwq2ZH7Hv33KtwD00H0lMTuF94jnOChRMeBehBSWV%2BpRRamtio225wyX2hrFn0OFqnFZnvUe1I0fV5aAOodmCIeHPWMlUV5KXIiDpGd3zGBVQ3NK3UcWyd9lHcrKDwlV4%2FPQ3%2FwYhjVa2KigmHTKXPRkqNRtZ6zG1ctAT8RfS2i%2F9tCMJkBLtHEw3YxEfCjtDmervQMAkeBylNHUfESvSo4hE1Wj4vzesfx34hlqu8OcmMxfUR4ZW7%2FJCzUQo4MXUKH5fofoxPCp%2BtpAPGm4Y%2BOGGcRQ5Ljt9bduICRTfpN8SYaOfuyc1siTh4SsrUykB0mPvzNds1wNMZFWA%2B4tT%2BbZms0w6jrBTQVGSqpDcrbKHjbxRl4J2lXjMuewvrHdwagx%2FUFkNDAajGluucuBmFpAzXn6XV2OW4DvevsDrgZbiOqG9tKu9j4ZC89IwsvFzPYn4Le1XDIgFSVFtjtnZINLflY1dv09ATEcDcqXzmTGO%2F%2B36iAbnWw29%2BIRIv78dXpxcKbkUuNOCc5oRiRUwfj57N9E05fCyL4mc0ThGghGGLO2OUup1A2sdvUht3Ak0zBm5mzyUDthapBm5%2F4zbfs6BMkswNdF1aJmfRxEpYx4t4PSJ4ArAwT82uR%2FS2lrRLUNllvoPQw%2BIeQwQY6pgFz%2B5HLiASoPPxGRdaNDwsBfr%2BUfhGzolbvW4nuMu%2BW5rMaseD4%2FMUOsIWg0OAT%2FBYddiTuWBrc1h5IHycBNBRaQoZBNfu3UCVt5jX%2BoZuci00Z1%2FsOVrOFAJv89HD%2F8nnCzNvm0Obtqja0usYeXcGjYAgE%2BeIaEiqswP3f7am8EkPm%2FKbEeh744Q%2F9bBfO2IZXIp9SWpHUUFjwMUFfbXgLScTDjTji&X-Amz-Signature=db9aad90963193020a76ae4311afcfc1170e6b58b16ce1dcd25fb9be8b693ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JX25FIS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDeQ7Voe0kq39TUvnMk8U9iqCyQqcCnGGe2UP4p3apfBAiB%2BNEp%2BYl5xwYgogoYkrQ4CbGcM8pTgd1rN%2F%2FtUCgEciyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Ws%2FpIwq2ZH7Hv33KtwD00H0lMTuF94jnOChRMeBehBSWV%2BpRRamtio225wyX2hrFn0OFqnFZnvUe1I0fV5aAOodmCIeHPWMlUV5KXIiDpGd3zGBVQ3NK3UcWyd9lHcrKDwlV4%2FPQ3%2FwYhjVa2KigmHTKXPRkqNRtZ6zG1ctAT8RfS2i%2F9tCMJkBLtHEw3YxEfCjtDmervQMAkeBylNHUfESvSo4hE1Wj4vzesfx34hlqu8OcmMxfUR4ZW7%2FJCzUQo4MXUKH5fofoxPCp%2BtpAPGm4Y%2BOGGcRQ5Ljt9bduICRTfpN8SYaOfuyc1siTh4SsrUykB0mPvzNds1wNMZFWA%2B4tT%2BbZms0w6jrBTQVGSqpDcrbKHjbxRl4J2lXjMuewvrHdwagx%2FUFkNDAajGluucuBmFpAzXn6XV2OW4DvevsDrgZbiOqG9tKu9j4ZC89IwsvFzPYn4Le1XDIgFSVFtjtnZINLflY1dv09ATEcDcqXzmTGO%2F%2B36iAbnWw29%2BIRIv78dXpxcKbkUuNOCc5oRiRUwfj57N9E05fCyL4mc0ThGghGGLO2OUup1A2sdvUht3Ak0zBm5mzyUDthapBm5%2F4zbfs6BMkswNdF1aJmfRxEpYx4t4PSJ4ArAwT82uR%2FS2lrRLUNllvoPQw%2BIeQwQY6pgFz%2B5HLiASoPPxGRdaNDwsBfr%2BUfhGzolbvW4nuMu%2BW5rMaseD4%2FMUOsIWg0OAT%2FBYddiTuWBrc1h5IHycBNBRaQoZBNfu3UCVt5jX%2BoZuci00Z1%2FsOVrOFAJv89HD%2F8nnCzNvm0Obtqja0usYeXcGjYAgE%2BeIaEiqswP3f7am8EkPm%2FKbEeh744Q%2F9bBfO2IZXIp9SWpHUUFjwMUFfbXgLScTDjTji&X-Amz-Signature=5077dea52297368443b521b2917edc8869a71081d642b35323b6955216c19cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JX25FIS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDeQ7Voe0kq39TUvnMk8U9iqCyQqcCnGGe2UP4p3apfBAiB%2BNEp%2BYl5xwYgogoYkrQ4CbGcM8pTgd1rN%2F%2FtUCgEciyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Ws%2FpIwq2ZH7Hv33KtwD00H0lMTuF94jnOChRMeBehBSWV%2BpRRamtio225wyX2hrFn0OFqnFZnvUe1I0fV5aAOodmCIeHPWMlUV5KXIiDpGd3zGBVQ3NK3UcWyd9lHcrKDwlV4%2FPQ3%2FwYhjVa2KigmHTKXPRkqNRtZ6zG1ctAT8RfS2i%2F9tCMJkBLtHEw3YxEfCjtDmervQMAkeBylNHUfESvSo4hE1Wj4vzesfx34hlqu8OcmMxfUR4ZW7%2FJCzUQo4MXUKH5fofoxPCp%2BtpAPGm4Y%2BOGGcRQ5Ljt9bduICRTfpN8SYaOfuyc1siTh4SsrUykB0mPvzNds1wNMZFWA%2B4tT%2BbZms0w6jrBTQVGSqpDcrbKHjbxRl4J2lXjMuewvrHdwagx%2FUFkNDAajGluucuBmFpAzXn6XV2OW4DvevsDrgZbiOqG9tKu9j4ZC89IwsvFzPYn4Le1XDIgFSVFtjtnZINLflY1dv09ATEcDcqXzmTGO%2F%2B36iAbnWw29%2BIRIv78dXpxcKbkUuNOCc5oRiRUwfj57N9E05fCyL4mc0ThGghGGLO2OUup1A2sdvUht3Ak0zBm5mzyUDthapBm5%2F4zbfs6BMkswNdF1aJmfRxEpYx4t4PSJ4ArAwT82uR%2FS2lrRLUNllvoPQw%2BIeQwQY6pgFz%2B5HLiASoPPxGRdaNDwsBfr%2BUfhGzolbvW4nuMu%2BW5rMaseD4%2FMUOsIWg0OAT%2FBYddiTuWBrc1h5IHycBNBRaQoZBNfu3UCVt5jX%2BoZuci00Z1%2FsOVrOFAJv89HD%2F8nnCzNvm0Obtqja0usYeXcGjYAgE%2BeIaEiqswP3f7am8EkPm%2FKbEeh744Q%2F9bBfO2IZXIp9SWpHUUFjwMUFfbXgLScTDjTji&X-Amz-Signature=59ddf054db50bec6c56db8b3e0cbe0aeec15bbc34efbbe1a5b985a4bc039800a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
