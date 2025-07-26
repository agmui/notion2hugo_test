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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPI4NDW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD%2FwsR5hGh5v0o%2BwEzCaMna5VkGzWB%2FrBiqcjMDo%2Bf5pgIgCKzU7X8k9HzXhzKuzj7ePbEhlGiqeXA5RQFlWzfVzqUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBQmDiyuR1n4Bcl8bircA4JCI2oXqBIgViFSlt4Ey09KqVl58O42Yru3CHASVAbWNdxi0ob4JRlP25ZPLlFKgvW%2BuGwWIH2vrztI%2FhDn0D15pKzrzFgdCrM9oGV8xPyAnZPss2O5sKtpnnCi3tztUqzpLrIG5m5zN69w4OnZTapbkYFaLITT1FuJu9ltyJhMzCkU9lXaZmTFBlq%2FNvJiuFGqGlIAL%2FdFOQCwiCQyvXF5kjoksH5fCwy2zAZYPbVw2IoWVDSLHmA99ezOZaalF6J2oLPpfIZxwpSzAP8LMMEC0qd9okmQfq2Noq%2B5fL7%2FjMJaZZc%2FThlim8dSFlBnJmrmPWsX5pczS4RUp%2B20Xr1Uyz0YLh9mpWEq2lZbq%2By8Y8OMcbCQ4B%2FN7ZP%2BsMseFf7Jk1WOqme7%2F2uk3znuCraWfL5X7CUYAsMMsIyYJKn4GgvNqCgchHpA7pd50sHcu1KKY6b4FUnU4BnApQylrWh2XltBvjdytGKITT5BHE0yAlI5O1mzA%2FzhHfS5gsxusSZds26UUEz1tOyDRIew3MXJ3XFEBWvQceH0NR0MLCe4BVMNAsicZoOB%2BwiyD3qOtd%2BU4Lsa3PwiPp%2FxIGysQJ0hjKS3dJN2ueXtjta8Zxnh7wnA0CuK8D0YDCmLMJiHksQGOqUBFc3ljKq7i%2BjDz3Pbgp8dfTknGrcRGbjpoGq%2BAQeIEhpAmXjvZfwb2n5MCue9znfkDua5tvIeV1jDPqKmgYbolbViES6dVD0OGLu5y%2BCvGKiz5B6Sp7SZ%2BZwFZm46OwEFzL111Ttby5JTKCGAeS5WHyI5w%2FE3%2B4RTkd3Gh4%2FF2%2FMvgr2vc1JjjeHct4d%2BWhTIVpem7ZoLWKD0rSl9nx1MkmqLoCKU&X-Amz-Signature=3b5c6a51f54c51e61322f022c54ddef03dec114254316d924d01e9d838561830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPI4NDW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD%2FwsR5hGh5v0o%2BwEzCaMna5VkGzWB%2FrBiqcjMDo%2Bf5pgIgCKzU7X8k9HzXhzKuzj7ePbEhlGiqeXA5RQFlWzfVzqUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBQmDiyuR1n4Bcl8bircA4JCI2oXqBIgViFSlt4Ey09KqVl58O42Yru3CHASVAbWNdxi0ob4JRlP25ZPLlFKgvW%2BuGwWIH2vrztI%2FhDn0D15pKzrzFgdCrM9oGV8xPyAnZPss2O5sKtpnnCi3tztUqzpLrIG5m5zN69w4OnZTapbkYFaLITT1FuJu9ltyJhMzCkU9lXaZmTFBlq%2FNvJiuFGqGlIAL%2FdFOQCwiCQyvXF5kjoksH5fCwy2zAZYPbVw2IoWVDSLHmA99ezOZaalF6J2oLPpfIZxwpSzAP8LMMEC0qd9okmQfq2Noq%2B5fL7%2FjMJaZZc%2FThlim8dSFlBnJmrmPWsX5pczS4RUp%2B20Xr1Uyz0YLh9mpWEq2lZbq%2By8Y8OMcbCQ4B%2FN7ZP%2BsMseFf7Jk1WOqme7%2F2uk3znuCraWfL5X7CUYAsMMsIyYJKn4GgvNqCgchHpA7pd50sHcu1KKY6b4FUnU4BnApQylrWh2XltBvjdytGKITT5BHE0yAlI5O1mzA%2FzhHfS5gsxusSZds26UUEz1tOyDRIew3MXJ3XFEBWvQceH0NR0MLCe4BVMNAsicZoOB%2BwiyD3qOtd%2BU4Lsa3PwiPp%2FxIGysQJ0hjKS3dJN2ueXtjta8Zxnh7wnA0CuK8D0YDCmLMJiHksQGOqUBFc3ljKq7i%2BjDz3Pbgp8dfTknGrcRGbjpoGq%2BAQeIEhpAmXjvZfwb2n5MCue9znfkDua5tvIeV1jDPqKmgYbolbViES6dVD0OGLu5y%2BCvGKiz5B6Sp7SZ%2BZwFZm46OwEFzL111Ttby5JTKCGAeS5WHyI5w%2FE3%2B4RTkd3Gh4%2FF2%2FMvgr2vc1JjjeHct4d%2BWhTIVpem7ZoLWKD0rSl9nx1MkmqLoCKU&X-Amz-Signature=fee78846f7ed455de65d4b30366b3bfe8ace359b7f9ca4035074325b50de8f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPI4NDW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD%2FwsR5hGh5v0o%2BwEzCaMna5VkGzWB%2FrBiqcjMDo%2Bf5pgIgCKzU7X8k9HzXhzKuzj7ePbEhlGiqeXA5RQFlWzfVzqUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBQmDiyuR1n4Bcl8bircA4JCI2oXqBIgViFSlt4Ey09KqVl58O42Yru3CHASVAbWNdxi0ob4JRlP25ZPLlFKgvW%2BuGwWIH2vrztI%2FhDn0D15pKzrzFgdCrM9oGV8xPyAnZPss2O5sKtpnnCi3tztUqzpLrIG5m5zN69w4OnZTapbkYFaLITT1FuJu9ltyJhMzCkU9lXaZmTFBlq%2FNvJiuFGqGlIAL%2FdFOQCwiCQyvXF5kjoksH5fCwy2zAZYPbVw2IoWVDSLHmA99ezOZaalF6J2oLPpfIZxwpSzAP8LMMEC0qd9okmQfq2Noq%2B5fL7%2FjMJaZZc%2FThlim8dSFlBnJmrmPWsX5pczS4RUp%2B20Xr1Uyz0YLh9mpWEq2lZbq%2By8Y8OMcbCQ4B%2FN7ZP%2BsMseFf7Jk1WOqme7%2F2uk3znuCraWfL5X7CUYAsMMsIyYJKn4GgvNqCgchHpA7pd50sHcu1KKY6b4FUnU4BnApQylrWh2XltBvjdytGKITT5BHE0yAlI5O1mzA%2FzhHfS5gsxusSZds26UUEz1tOyDRIew3MXJ3XFEBWvQceH0NR0MLCe4BVMNAsicZoOB%2BwiyD3qOtd%2BU4Lsa3PwiPp%2FxIGysQJ0hjKS3dJN2ueXtjta8Zxnh7wnA0CuK8D0YDCmLMJiHksQGOqUBFc3ljKq7i%2BjDz3Pbgp8dfTknGrcRGbjpoGq%2BAQeIEhpAmXjvZfwb2n5MCue9znfkDua5tvIeV1jDPqKmgYbolbViES6dVD0OGLu5y%2BCvGKiz5B6Sp7SZ%2BZwFZm46OwEFzL111Ttby5JTKCGAeS5WHyI5w%2FE3%2B4RTkd3Gh4%2FF2%2FMvgr2vc1JjjeHct4d%2BWhTIVpem7ZoLWKD0rSl9nx1MkmqLoCKU&X-Amz-Signature=912f09039231806fb5db147f3d6ea081818afc5d443705bf3d89c2339f1e6796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPI4NDW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD%2FwsR5hGh5v0o%2BwEzCaMna5VkGzWB%2FrBiqcjMDo%2Bf5pgIgCKzU7X8k9HzXhzKuzj7ePbEhlGiqeXA5RQFlWzfVzqUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBQmDiyuR1n4Bcl8bircA4JCI2oXqBIgViFSlt4Ey09KqVl58O42Yru3CHASVAbWNdxi0ob4JRlP25ZPLlFKgvW%2BuGwWIH2vrztI%2FhDn0D15pKzrzFgdCrM9oGV8xPyAnZPss2O5sKtpnnCi3tztUqzpLrIG5m5zN69w4OnZTapbkYFaLITT1FuJu9ltyJhMzCkU9lXaZmTFBlq%2FNvJiuFGqGlIAL%2FdFOQCwiCQyvXF5kjoksH5fCwy2zAZYPbVw2IoWVDSLHmA99ezOZaalF6J2oLPpfIZxwpSzAP8LMMEC0qd9okmQfq2Noq%2B5fL7%2FjMJaZZc%2FThlim8dSFlBnJmrmPWsX5pczS4RUp%2B20Xr1Uyz0YLh9mpWEq2lZbq%2By8Y8OMcbCQ4B%2FN7ZP%2BsMseFf7Jk1WOqme7%2F2uk3znuCraWfL5X7CUYAsMMsIyYJKn4GgvNqCgchHpA7pd50sHcu1KKY6b4FUnU4BnApQylrWh2XltBvjdytGKITT5BHE0yAlI5O1mzA%2FzhHfS5gsxusSZds26UUEz1tOyDRIew3MXJ3XFEBWvQceH0NR0MLCe4BVMNAsicZoOB%2BwiyD3qOtd%2BU4Lsa3PwiPp%2FxIGysQJ0hjKS3dJN2ueXtjta8Zxnh7wnA0CuK8D0YDCmLMJiHksQGOqUBFc3ljKq7i%2BjDz3Pbgp8dfTknGrcRGbjpoGq%2BAQeIEhpAmXjvZfwb2n5MCue9znfkDua5tvIeV1jDPqKmgYbolbViES6dVD0OGLu5y%2BCvGKiz5B6Sp7SZ%2BZwFZm46OwEFzL111Ttby5JTKCGAeS5WHyI5w%2FE3%2B4RTkd3Gh4%2FF2%2FMvgr2vc1JjjeHct4d%2BWhTIVpem7ZoLWKD0rSl9nx1MkmqLoCKU&X-Amz-Signature=002799e546df3b2ab54ec1dd040e2b285219501c8c563cbcd6167151d2ca192c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPI4NDW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD%2FwsR5hGh5v0o%2BwEzCaMna5VkGzWB%2FrBiqcjMDo%2Bf5pgIgCKzU7X8k9HzXhzKuzj7ePbEhlGiqeXA5RQFlWzfVzqUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBQmDiyuR1n4Bcl8bircA4JCI2oXqBIgViFSlt4Ey09KqVl58O42Yru3CHASVAbWNdxi0ob4JRlP25ZPLlFKgvW%2BuGwWIH2vrztI%2FhDn0D15pKzrzFgdCrM9oGV8xPyAnZPss2O5sKtpnnCi3tztUqzpLrIG5m5zN69w4OnZTapbkYFaLITT1FuJu9ltyJhMzCkU9lXaZmTFBlq%2FNvJiuFGqGlIAL%2FdFOQCwiCQyvXF5kjoksH5fCwy2zAZYPbVw2IoWVDSLHmA99ezOZaalF6J2oLPpfIZxwpSzAP8LMMEC0qd9okmQfq2Noq%2B5fL7%2FjMJaZZc%2FThlim8dSFlBnJmrmPWsX5pczS4RUp%2B20Xr1Uyz0YLh9mpWEq2lZbq%2By8Y8OMcbCQ4B%2FN7ZP%2BsMseFf7Jk1WOqme7%2F2uk3znuCraWfL5X7CUYAsMMsIyYJKn4GgvNqCgchHpA7pd50sHcu1KKY6b4FUnU4BnApQylrWh2XltBvjdytGKITT5BHE0yAlI5O1mzA%2FzhHfS5gsxusSZds26UUEz1tOyDRIew3MXJ3XFEBWvQceH0NR0MLCe4BVMNAsicZoOB%2BwiyD3qOtd%2BU4Lsa3PwiPp%2FxIGysQJ0hjKS3dJN2ueXtjta8Zxnh7wnA0CuK8D0YDCmLMJiHksQGOqUBFc3ljKq7i%2BjDz3Pbgp8dfTknGrcRGbjpoGq%2BAQeIEhpAmXjvZfwb2n5MCue9znfkDua5tvIeV1jDPqKmgYbolbViES6dVD0OGLu5y%2BCvGKiz5B6Sp7SZ%2BZwFZm46OwEFzL111Ttby5JTKCGAeS5WHyI5w%2FE3%2B4RTkd3Gh4%2FF2%2FMvgr2vc1JjjeHct4d%2BWhTIVpem7ZoLWKD0rSl9nx1MkmqLoCKU&X-Amz-Signature=0dc8c7795759f0632558de6e7d1c59c59d2e642e9a8a967171ea770fa9f4ac52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
