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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EHZ7E5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAkuxsLXxjdTcZSgIKZ%2B8yn57w8jcNiKtc9YOFWZTzm8AiEAwYF0mOUKb8B6t5rtUevm2RK2AxV0SbeNmv9mY%2FFyIGkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOXgLznSlH1%2Fj8zCQircA5vtJKzmrc3xO5tY3vHjoQVrq6mbViQkLqWZZ%2BVRuuQHsF9XYb3Ygi34abCUpRzP2zzShtuynEPzgQYnUgVIO9%2BZDFov5RLZ8hJ6%2BODGLKpQQHG3JNIsNVdQt9qtTpSOCFCvJksou%2FdUFTNXe7VE3H6qfUa7WRpYN7w9UUsNCOP3vbMsZr19HGw2%2BUidwqqD%2FUTBhfsy%2B98slc%2FtcXHRD%2FEv4h%2BP9k1sO1JDSxOy5MVSBtG%2FjqNxNJU0WX5IToK26HRLP9gozcn1YNxkFdlKGG6y7Rkubj%2FhQrn7NWCwZ4%2FrRSBasuEVKv10ous97RGgDRXdOCKHv%2BiJLBU3BWFRA9Q1cxXsyCcHzFU6qaqMtUvPoz60Q0TsgR9W45hBuCn1Zb07sdO4Wc908dNIGG1rdNtwMy8yCcS%2FjKMTwbZOU7kZ%2Fp7SBc4c03UKGJnlmLwFTroUD5YnhlJVp5ppeoYl8oWuXm2IUCTRoXIR1B0%2B7MxgH7wwmaNCE2rrF%2BQQKxerfZyTsR46ecGuxu%2BZMVXV1vXIsLL18CgPS0a96%2B4sJom18WcnbXDwWKcmpXs1J9HQzHWnBQx%2BYAeIqoesTYxTCpzJn%2BmjwyHc6n683xiKQpVYlxyoCCS4Ox5gA8rEMNz%2FlMQGOqUBEvGb1pDWqu84HabaSuVI6ig8MFOb82xK9A%2BFDrN4MixrcNLHUYavzwE4fM6EqMoGNYf2gngw622f4Bgm7tE71zMSHqX6CxrT1JFXzbU1lmJZzJwZGsnobG%2BVNbtCVGZ0%2F6JYHh6h3c4nsOGaKCMaFTtz4avU67I1DfnzrtWHrcIqyzpo5sH5tGSlIUk9ZEyTZ2ceInjChnxVUasx3%2FvOKZXcrijk&X-Amz-Signature=03b9096e3b232ad683c24f975a4c6eb5344425e0c602666b9bbfbfcfba2c733d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EHZ7E5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAkuxsLXxjdTcZSgIKZ%2B8yn57w8jcNiKtc9YOFWZTzm8AiEAwYF0mOUKb8B6t5rtUevm2RK2AxV0SbeNmv9mY%2FFyIGkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOXgLznSlH1%2Fj8zCQircA5vtJKzmrc3xO5tY3vHjoQVrq6mbViQkLqWZZ%2BVRuuQHsF9XYb3Ygi34abCUpRzP2zzShtuynEPzgQYnUgVIO9%2BZDFov5RLZ8hJ6%2BODGLKpQQHG3JNIsNVdQt9qtTpSOCFCvJksou%2FdUFTNXe7VE3H6qfUa7WRpYN7w9UUsNCOP3vbMsZr19HGw2%2BUidwqqD%2FUTBhfsy%2B98slc%2FtcXHRD%2FEv4h%2BP9k1sO1JDSxOy5MVSBtG%2FjqNxNJU0WX5IToK26HRLP9gozcn1YNxkFdlKGG6y7Rkubj%2FhQrn7NWCwZ4%2FrRSBasuEVKv10ous97RGgDRXdOCKHv%2BiJLBU3BWFRA9Q1cxXsyCcHzFU6qaqMtUvPoz60Q0TsgR9W45hBuCn1Zb07sdO4Wc908dNIGG1rdNtwMy8yCcS%2FjKMTwbZOU7kZ%2Fp7SBc4c03UKGJnlmLwFTroUD5YnhlJVp5ppeoYl8oWuXm2IUCTRoXIR1B0%2B7MxgH7wwmaNCE2rrF%2BQQKxerfZyTsR46ecGuxu%2BZMVXV1vXIsLL18CgPS0a96%2B4sJom18WcnbXDwWKcmpXs1J9HQzHWnBQx%2BYAeIqoesTYxTCpzJn%2BmjwyHc6n683xiKQpVYlxyoCCS4Ox5gA8rEMNz%2FlMQGOqUBEvGb1pDWqu84HabaSuVI6ig8MFOb82xK9A%2BFDrN4MixrcNLHUYavzwE4fM6EqMoGNYf2gngw622f4Bgm7tE71zMSHqX6CxrT1JFXzbU1lmJZzJwZGsnobG%2BVNbtCVGZ0%2F6JYHh6h3c4nsOGaKCMaFTtz4avU67I1DfnzrtWHrcIqyzpo5sH5tGSlIUk9ZEyTZ2ceInjChnxVUasx3%2FvOKZXcrijk&X-Amz-Signature=87b45dc87837785cfe1d885399971a0f16727e688e99477be0cb3fb9f3b22db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EHZ7E5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAkuxsLXxjdTcZSgIKZ%2B8yn57w8jcNiKtc9YOFWZTzm8AiEAwYF0mOUKb8B6t5rtUevm2RK2AxV0SbeNmv9mY%2FFyIGkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOXgLznSlH1%2Fj8zCQircA5vtJKzmrc3xO5tY3vHjoQVrq6mbViQkLqWZZ%2BVRuuQHsF9XYb3Ygi34abCUpRzP2zzShtuynEPzgQYnUgVIO9%2BZDFov5RLZ8hJ6%2BODGLKpQQHG3JNIsNVdQt9qtTpSOCFCvJksou%2FdUFTNXe7VE3H6qfUa7WRpYN7w9UUsNCOP3vbMsZr19HGw2%2BUidwqqD%2FUTBhfsy%2B98slc%2FtcXHRD%2FEv4h%2BP9k1sO1JDSxOy5MVSBtG%2FjqNxNJU0WX5IToK26HRLP9gozcn1YNxkFdlKGG6y7Rkubj%2FhQrn7NWCwZ4%2FrRSBasuEVKv10ous97RGgDRXdOCKHv%2BiJLBU3BWFRA9Q1cxXsyCcHzFU6qaqMtUvPoz60Q0TsgR9W45hBuCn1Zb07sdO4Wc908dNIGG1rdNtwMy8yCcS%2FjKMTwbZOU7kZ%2Fp7SBc4c03UKGJnlmLwFTroUD5YnhlJVp5ppeoYl8oWuXm2IUCTRoXIR1B0%2B7MxgH7wwmaNCE2rrF%2BQQKxerfZyTsR46ecGuxu%2BZMVXV1vXIsLL18CgPS0a96%2B4sJom18WcnbXDwWKcmpXs1J9HQzHWnBQx%2BYAeIqoesTYxTCpzJn%2BmjwyHc6n683xiKQpVYlxyoCCS4Ox5gA8rEMNz%2FlMQGOqUBEvGb1pDWqu84HabaSuVI6ig8MFOb82xK9A%2BFDrN4MixrcNLHUYavzwE4fM6EqMoGNYf2gngw622f4Bgm7tE71zMSHqX6CxrT1JFXzbU1lmJZzJwZGsnobG%2BVNbtCVGZ0%2F6JYHh6h3c4nsOGaKCMaFTtz4avU67I1DfnzrtWHrcIqyzpo5sH5tGSlIUk9ZEyTZ2ceInjChnxVUasx3%2FvOKZXcrijk&X-Amz-Signature=3edebed3ee5188a77c443a4c46b5764a0b67eb9548d65c91bad47b9a30ff8410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EHZ7E5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAkuxsLXxjdTcZSgIKZ%2B8yn57w8jcNiKtc9YOFWZTzm8AiEAwYF0mOUKb8B6t5rtUevm2RK2AxV0SbeNmv9mY%2FFyIGkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOXgLznSlH1%2Fj8zCQircA5vtJKzmrc3xO5tY3vHjoQVrq6mbViQkLqWZZ%2BVRuuQHsF9XYb3Ygi34abCUpRzP2zzShtuynEPzgQYnUgVIO9%2BZDFov5RLZ8hJ6%2BODGLKpQQHG3JNIsNVdQt9qtTpSOCFCvJksou%2FdUFTNXe7VE3H6qfUa7WRpYN7w9UUsNCOP3vbMsZr19HGw2%2BUidwqqD%2FUTBhfsy%2B98slc%2FtcXHRD%2FEv4h%2BP9k1sO1JDSxOy5MVSBtG%2FjqNxNJU0WX5IToK26HRLP9gozcn1YNxkFdlKGG6y7Rkubj%2FhQrn7NWCwZ4%2FrRSBasuEVKv10ous97RGgDRXdOCKHv%2BiJLBU3BWFRA9Q1cxXsyCcHzFU6qaqMtUvPoz60Q0TsgR9W45hBuCn1Zb07sdO4Wc908dNIGG1rdNtwMy8yCcS%2FjKMTwbZOU7kZ%2Fp7SBc4c03UKGJnlmLwFTroUD5YnhlJVp5ppeoYl8oWuXm2IUCTRoXIR1B0%2B7MxgH7wwmaNCE2rrF%2BQQKxerfZyTsR46ecGuxu%2BZMVXV1vXIsLL18CgPS0a96%2B4sJom18WcnbXDwWKcmpXs1J9HQzHWnBQx%2BYAeIqoesTYxTCpzJn%2BmjwyHc6n683xiKQpVYlxyoCCS4Ox5gA8rEMNz%2FlMQGOqUBEvGb1pDWqu84HabaSuVI6ig8MFOb82xK9A%2BFDrN4MixrcNLHUYavzwE4fM6EqMoGNYf2gngw622f4Bgm7tE71zMSHqX6CxrT1JFXzbU1lmJZzJwZGsnobG%2BVNbtCVGZ0%2F6JYHh6h3c4nsOGaKCMaFTtz4avU67I1DfnzrtWHrcIqyzpo5sH5tGSlIUk9ZEyTZ2ceInjChnxVUasx3%2FvOKZXcrijk&X-Amz-Signature=cc1b2e72e048b4d75902c3195f84defe57cf9938e191f458f565f6575c639b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EHZ7E5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAkuxsLXxjdTcZSgIKZ%2B8yn57w8jcNiKtc9YOFWZTzm8AiEAwYF0mOUKb8B6t5rtUevm2RK2AxV0SbeNmv9mY%2FFyIGkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOXgLznSlH1%2Fj8zCQircA5vtJKzmrc3xO5tY3vHjoQVrq6mbViQkLqWZZ%2BVRuuQHsF9XYb3Ygi34abCUpRzP2zzShtuynEPzgQYnUgVIO9%2BZDFov5RLZ8hJ6%2BODGLKpQQHG3JNIsNVdQt9qtTpSOCFCvJksou%2FdUFTNXe7VE3H6qfUa7WRpYN7w9UUsNCOP3vbMsZr19HGw2%2BUidwqqD%2FUTBhfsy%2B98slc%2FtcXHRD%2FEv4h%2BP9k1sO1JDSxOy5MVSBtG%2FjqNxNJU0WX5IToK26HRLP9gozcn1YNxkFdlKGG6y7Rkubj%2FhQrn7NWCwZ4%2FrRSBasuEVKv10ous97RGgDRXdOCKHv%2BiJLBU3BWFRA9Q1cxXsyCcHzFU6qaqMtUvPoz60Q0TsgR9W45hBuCn1Zb07sdO4Wc908dNIGG1rdNtwMy8yCcS%2FjKMTwbZOU7kZ%2Fp7SBc4c03UKGJnlmLwFTroUD5YnhlJVp5ppeoYl8oWuXm2IUCTRoXIR1B0%2B7MxgH7wwmaNCE2rrF%2BQQKxerfZyTsR46ecGuxu%2BZMVXV1vXIsLL18CgPS0a96%2B4sJom18WcnbXDwWKcmpXs1J9HQzHWnBQx%2BYAeIqoesTYxTCpzJn%2BmjwyHc6n683xiKQpVYlxyoCCS4Ox5gA8rEMNz%2FlMQGOqUBEvGb1pDWqu84HabaSuVI6ig8MFOb82xK9A%2BFDrN4MixrcNLHUYavzwE4fM6EqMoGNYf2gngw622f4Bgm7tE71zMSHqX6CxrT1JFXzbU1lmJZzJwZGsnobG%2BVNbtCVGZ0%2F6JYHh6h3c4nsOGaKCMaFTtz4avU67I1DfnzrtWHrcIqyzpo5sH5tGSlIUk9ZEyTZ2ceInjChnxVUasx3%2FvOKZXcrijk&X-Amz-Signature=346462e4a78b46468fcd389ba135d93fcade21f70004c1ecae2013444b729e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
