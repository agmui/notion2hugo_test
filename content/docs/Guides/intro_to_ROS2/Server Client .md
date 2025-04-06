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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURDLDUC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjHkCpGo4l7Aah%2F0C3id6Wyx9ZMOt4jgsHkSssASRr1AiEAwa1eDwvr2L0DqAe2%2F6xuOZZFViwbqFVRggBaJQL9dI0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDITe1gxWy8%2FO48MeDyrcAwp5IMUGx3aSkFUqmjgF8Iygvy79mPqVW8dipBY2IxcqSzY7T2id8YLCR4K140UMrg2aWVQ5gZ1dR8DZoqcNV6zyYEAIgMh9xuahfHDoXQbyc29E%2FR8EgaHBR2ewn9Z1PIx9NtzjzshD43FynW0%2BlAZ%2BZnq1L9P3aeW6WxnlOc6KIN0IIOT0Dkv0jH8b4Dg2WYX6f2S9r1SFDGCjTWGWDyXyWx%2Bo2eXMJMa906LDN%2FDSDOvsIMgVM0%2FhtjOkLI3RxCu5MoG3zy6lYdZnZJVek%2BDmD4%2BSp%2FEnZsTBYaoWVqui%2FnxKpsDJYmLqq6NiUCiTX46Oj88SosPLV1%2FfDTxaCsVIHPxb48%2BCDMsrW8jJmpZv8cBWPhdIccH5Q9EnVx0dBiA6UJ7H5wl3LHLMKivqKirxdeLEW2S9TdR20jM898ZmWABzaWf33oOSgGn5q4Y0WwtEM%2BEru1dVtgadqhbx%2FipY5bB9BcS5661Kk%2BzsnJjFqwZPvEmd9zjIKJhm1%2FV1sa0vbDGA0h427qZI4NxPk5zyYSElMmqQb9v7uUTZcBX6Tlren3k47uVfsSatAzuhuZXnnSw4rXnvH9WusAThCbKj2qAwxcOqP05hKenHOS1uRhhDMTbsQsQ3o5z7MPL0y78GOqUBsiXfNJM%2F788K8eiyDZyxCScqdIb8rILgVz1GPBhf3GJcTujuYhPOvEetUXmIX6oqBdAmXChOVFxc%2FsLTRwJmgdTO%2FmJBljethCPGb7i6jEcQjVKjkbvLwqoUd%2BYfab3BBDkphNkdPeMyr4xikSwyDJJgvlf9G%2FGOiEVEM34e1A2AcqFzXvupUURb7QP%2FwDtyZg9b4OrssORjUxKUE5OtegCzl8J3&X-Amz-Signature=11468d5f463bc9c0a48f1d206efa34f2f246f36e100554e695777741701435b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURDLDUC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjHkCpGo4l7Aah%2F0C3id6Wyx9ZMOt4jgsHkSssASRr1AiEAwa1eDwvr2L0DqAe2%2F6xuOZZFViwbqFVRggBaJQL9dI0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDITe1gxWy8%2FO48MeDyrcAwp5IMUGx3aSkFUqmjgF8Iygvy79mPqVW8dipBY2IxcqSzY7T2id8YLCR4K140UMrg2aWVQ5gZ1dR8DZoqcNV6zyYEAIgMh9xuahfHDoXQbyc29E%2FR8EgaHBR2ewn9Z1PIx9NtzjzshD43FynW0%2BlAZ%2BZnq1L9P3aeW6WxnlOc6KIN0IIOT0Dkv0jH8b4Dg2WYX6f2S9r1SFDGCjTWGWDyXyWx%2Bo2eXMJMa906LDN%2FDSDOvsIMgVM0%2FhtjOkLI3RxCu5MoG3zy6lYdZnZJVek%2BDmD4%2BSp%2FEnZsTBYaoWVqui%2FnxKpsDJYmLqq6NiUCiTX46Oj88SosPLV1%2FfDTxaCsVIHPxb48%2BCDMsrW8jJmpZv8cBWPhdIccH5Q9EnVx0dBiA6UJ7H5wl3LHLMKivqKirxdeLEW2S9TdR20jM898ZmWABzaWf33oOSgGn5q4Y0WwtEM%2BEru1dVtgadqhbx%2FipY5bB9BcS5661Kk%2BzsnJjFqwZPvEmd9zjIKJhm1%2FV1sa0vbDGA0h427qZI4NxPk5zyYSElMmqQb9v7uUTZcBX6Tlren3k47uVfsSatAzuhuZXnnSw4rXnvH9WusAThCbKj2qAwxcOqP05hKenHOS1uRhhDMTbsQsQ3o5z7MPL0y78GOqUBsiXfNJM%2F788K8eiyDZyxCScqdIb8rILgVz1GPBhf3GJcTujuYhPOvEetUXmIX6oqBdAmXChOVFxc%2FsLTRwJmgdTO%2FmJBljethCPGb7i6jEcQjVKjkbvLwqoUd%2BYfab3BBDkphNkdPeMyr4xikSwyDJJgvlf9G%2FGOiEVEM34e1A2AcqFzXvupUURb7QP%2FwDtyZg9b4OrssORjUxKUE5OtegCzl8J3&X-Amz-Signature=fc27f87084e7ee5ce8496d1cf1efdb5699e2d3cb5878f08649cfcc66b00e8bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURDLDUC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjHkCpGo4l7Aah%2F0C3id6Wyx9ZMOt4jgsHkSssASRr1AiEAwa1eDwvr2L0DqAe2%2F6xuOZZFViwbqFVRggBaJQL9dI0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDITe1gxWy8%2FO48MeDyrcAwp5IMUGx3aSkFUqmjgF8Iygvy79mPqVW8dipBY2IxcqSzY7T2id8YLCR4K140UMrg2aWVQ5gZ1dR8DZoqcNV6zyYEAIgMh9xuahfHDoXQbyc29E%2FR8EgaHBR2ewn9Z1PIx9NtzjzshD43FynW0%2BlAZ%2BZnq1L9P3aeW6WxnlOc6KIN0IIOT0Dkv0jH8b4Dg2WYX6f2S9r1SFDGCjTWGWDyXyWx%2Bo2eXMJMa906LDN%2FDSDOvsIMgVM0%2FhtjOkLI3RxCu5MoG3zy6lYdZnZJVek%2BDmD4%2BSp%2FEnZsTBYaoWVqui%2FnxKpsDJYmLqq6NiUCiTX46Oj88SosPLV1%2FfDTxaCsVIHPxb48%2BCDMsrW8jJmpZv8cBWPhdIccH5Q9EnVx0dBiA6UJ7H5wl3LHLMKivqKirxdeLEW2S9TdR20jM898ZmWABzaWf33oOSgGn5q4Y0WwtEM%2BEru1dVtgadqhbx%2FipY5bB9BcS5661Kk%2BzsnJjFqwZPvEmd9zjIKJhm1%2FV1sa0vbDGA0h427qZI4NxPk5zyYSElMmqQb9v7uUTZcBX6Tlren3k47uVfsSatAzuhuZXnnSw4rXnvH9WusAThCbKj2qAwxcOqP05hKenHOS1uRhhDMTbsQsQ3o5z7MPL0y78GOqUBsiXfNJM%2F788K8eiyDZyxCScqdIb8rILgVz1GPBhf3GJcTujuYhPOvEetUXmIX6oqBdAmXChOVFxc%2FsLTRwJmgdTO%2FmJBljethCPGb7i6jEcQjVKjkbvLwqoUd%2BYfab3BBDkphNkdPeMyr4xikSwyDJJgvlf9G%2FGOiEVEM34e1A2AcqFzXvupUURb7QP%2FwDtyZg9b4OrssORjUxKUE5OtegCzl8J3&X-Amz-Signature=96230f791d4af5b1c51768efe83b66d6bedfccc5eec1e7ca15c524657d70811e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURDLDUC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjHkCpGo4l7Aah%2F0C3id6Wyx9ZMOt4jgsHkSssASRr1AiEAwa1eDwvr2L0DqAe2%2F6xuOZZFViwbqFVRggBaJQL9dI0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDITe1gxWy8%2FO48MeDyrcAwp5IMUGx3aSkFUqmjgF8Iygvy79mPqVW8dipBY2IxcqSzY7T2id8YLCR4K140UMrg2aWVQ5gZ1dR8DZoqcNV6zyYEAIgMh9xuahfHDoXQbyc29E%2FR8EgaHBR2ewn9Z1PIx9NtzjzshD43FynW0%2BlAZ%2BZnq1L9P3aeW6WxnlOc6KIN0IIOT0Dkv0jH8b4Dg2WYX6f2S9r1SFDGCjTWGWDyXyWx%2Bo2eXMJMa906LDN%2FDSDOvsIMgVM0%2FhtjOkLI3RxCu5MoG3zy6lYdZnZJVek%2BDmD4%2BSp%2FEnZsTBYaoWVqui%2FnxKpsDJYmLqq6NiUCiTX46Oj88SosPLV1%2FfDTxaCsVIHPxb48%2BCDMsrW8jJmpZv8cBWPhdIccH5Q9EnVx0dBiA6UJ7H5wl3LHLMKivqKirxdeLEW2S9TdR20jM898ZmWABzaWf33oOSgGn5q4Y0WwtEM%2BEru1dVtgadqhbx%2FipY5bB9BcS5661Kk%2BzsnJjFqwZPvEmd9zjIKJhm1%2FV1sa0vbDGA0h427qZI4NxPk5zyYSElMmqQb9v7uUTZcBX6Tlren3k47uVfsSatAzuhuZXnnSw4rXnvH9WusAThCbKj2qAwxcOqP05hKenHOS1uRhhDMTbsQsQ3o5z7MPL0y78GOqUBsiXfNJM%2F788K8eiyDZyxCScqdIb8rILgVz1GPBhf3GJcTujuYhPOvEetUXmIX6oqBdAmXChOVFxc%2FsLTRwJmgdTO%2FmJBljethCPGb7i6jEcQjVKjkbvLwqoUd%2BYfab3BBDkphNkdPeMyr4xikSwyDJJgvlf9G%2FGOiEVEM34e1A2AcqFzXvupUURb7QP%2FwDtyZg9b4OrssORjUxKUE5OtegCzl8J3&X-Amz-Signature=1225630e368cc43810257cd562a589eb034724380cd16500e691875c9fef33a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURDLDUC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjHkCpGo4l7Aah%2F0C3id6Wyx9ZMOt4jgsHkSssASRr1AiEAwa1eDwvr2L0DqAe2%2F6xuOZZFViwbqFVRggBaJQL9dI0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDITe1gxWy8%2FO48MeDyrcAwp5IMUGx3aSkFUqmjgF8Iygvy79mPqVW8dipBY2IxcqSzY7T2id8YLCR4K140UMrg2aWVQ5gZ1dR8DZoqcNV6zyYEAIgMh9xuahfHDoXQbyc29E%2FR8EgaHBR2ewn9Z1PIx9NtzjzshD43FynW0%2BlAZ%2BZnq1L9P3aeW6WxnlOc6KIN0IIOT0Dkv0jH8b4Dg2WYX6f2S9r1SFDGCjTWGWDyXyWx%2Bo2eXMJMa906LDN%2FDSDOvsIMgVM0%2FhtjOkLI3RxCu5MoG3zy6lYdZnZJVek%2BDmD4%2BSp%2FEnZsTBYaoWVqui%2FnxKpsDJYmLqq6NiUCiTX46Oj88SosPLV1%2FfDTxaCsVIHPxb48%2BCDMsrW8jJmpZv8cBWPhdIccH5Q9EnVx0dBiA6UJ7H5wl3LHLMKivqKirxdeLEW2S9TdR20jM898ZmWABzaWf33oOSgGn5q4Y0WwtEM%2BEru1dVtgadqhbx%2FipY5bB9BcS5661Kk%2BzsnJjFqwZPvEmd9zjIKJhm1%2FV1sa0vbDGA0h427qZI4NxPk5zyYSElMmqQb9v7uUTZcBX6Tlren3k47uVfsSatAzuhuZXnnSw4rXnvH9WusAThCbKj2qAwxcOqP05hKenHOS1uRhhDMTbsQsQ3o5z7MPL0y78GOqUBsiXfNJM%2F788K8eiyDZyxCScqdIb8rILgVz1GPBhf3GJcTujuYhPOvEetUXmIX6oqBdAmXChOVFxc%2FsLTRwJmgdTO%2FmJBljethCPGb7i6jEcQjVKjkbvLwqoUd%2BYfab3BBDkphNkdPeMyr4xikSwyDJJgvlf9G%2FGOiEVEM34e1A2AcqFzXvupUURb7QP%2FwDtyZg9b4OrssORjUxKUE5OtegCzl8J3&X-Amz-Signature=9d79a3a6835cd1cf286ad0a022caae7448d33cceb9157c5d8eb8fa89112a712b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
