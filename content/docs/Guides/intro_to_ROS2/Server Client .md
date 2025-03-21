---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI47UOO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGewnTVDsYQg6uMUFJz9%2FQZPep0hzwCL9dHhqUN3%2BuR8AiB4hSDHABoyAzBx%2BaGnnW381jMKW%2BTU4AaWKX5krpy2UCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNMQ%2B4rOaIFsCAHcOKtwD20qbNtMoDSHCrasvA4IoSWg79cncyvyMV55l8GPIuY51QcI%2BPOnxcRlVtaTLemlJlObIX8hn5FZ88noxy0TIIdS%2BDsh4OSVw4l0DJqk0x%2Fvr4AmNU9Vw1eT1fjbH%2ByPVscn5vMLF1PQI0vZPoEmTUju6tga8gV8ucks0GI4TqL%2BHq6t3EsOld0AEv6dh3P%2FtkWxgGm5BCFqjyDLaZyDvgsVFxuriblY%2FL3UXbY9j2tqZb%2B0OvrGlAaPpLNJWYodBmzG%2BZhUUDVrtwWS1IWTpiZlCZlOyK9z3VoVk6ZKLS7eIKIJNz0vZoswz3YbVP4xfc9akqPDMMXWqYekmF%2FjVaHh4Qd8P4MLEq6auAgcNoNoFGW5LqJvw87MytTaU%2B6wQCYAkJZCTku8yU2VkAlzEXaaCHyJTWRrz%2F2n7XWuAH9o3kUg%2BKLOQ9JL3cBOFlwA9elfLd7jcT%2FSQ%2BZ28zq4q0vlgl%2Fj7kWPDkprAxQt5uWucK%2F6V4526yseG%2BO1mRq3ZVEDfBCEySpKYKWiH87fyRPS2mnZunlz9qAwZtei1oCV408NNu7sWMa1Ynn1qVdscUbrLnySIjAfFWNlidtUDa3mDhq5wsx1mGoRDzh2iMnKtFOrtjr8dZ2UefngwoqfyvgY6pgHwdLACntFS7p2hjCrrfciYiPKt2LTLUu%2FVtHaEn4cxSR5IWH1gSSqcTt7zQxyHb59%2FB8zGGz4KZ0ZGFCpcrIPga4iLla61Fed6lBa3RSn05CILY7VVVEE36yWXw4HJ1tEHI1gNGxQ%2BhcEyMO4T11azkXMdZRSEMODVKkg%2Bl5BxEDKq2T%2B7Lr1n5mzEawld8tEQSzvt9dfzEuX3LqNX5pNE3H0iilGg&X-Amz-Signature=ba0237eeb21b585bb635a7b395e92b27e1da1e88248384e734433c9348edd2ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI47UOO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGewnTVDsYQg6uMUFJz9%2FQZPep0hzwCL9dHhqUN3%2BuR8AiB4hSDHABoyAzBx%2BaGnnW381jMKW%2BTU4AaWKX5krpy2UCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNMQ%2B4rOaIFsCAHcOKtwD20qbNtMoDSHCrasvA4IoSWg79cncyvyMV55l8GPIuY51QcI%2BPOnxcRlVtaTLemlJlObIX8hn5FZ88noxy0TIIdS%2BDsh4OSVw4l0DJqk0x%2Fvr4AmNU9Vw1eT1fjbH%2ByPVscn5vMLF1PQI0vZPoEmTUju6tga8gV8ucks0GI4TqL%2BHq6t3EsOld0AEv6dh3P%2FtkWxgGm5BCFqjyDLaZyDvgsVFxuriblY%2FL3UXbY9j2tqZb%2B0OvrGlAaPpLNJWYodBmzG%2BZhUUDVrtwWS1IWTpiZlCZlOyK9z3VoVk6ZKLS7eIKIJNz0vZoswz3YbVP4xfc9akqPDMMXWqYekmF%2FjVaHh4Qd8P4MLEq6auAgcNoNoFGW5LqJvw87MytTaU%2B6wQCYAkJZCTku8yU2VkAlzEXaaCHyJTWRrz%2F2n7XWuAH9o3kUg%2BKLOQ9JL3cBOFlwA9elfLd7jcT%2FSQ%2BZ28zq4q0vlgl%2Fj7kWPDkprAxQt5uWucK%2F6V4526yseG%2BO1mRq3ZVEDfBCEySpKYKWiH87fyRPS2mnZunlz9qAwZtei1oCV408NNu7sWMa1Ynn1qVdscUbrLnySIjAfFWNlidtUDa3mDhq5wsx1mGoRDzh2iMnKtFOrtjr8dZ2UefngwoqfyvgY6pgHwdLACntFS7p2hjCrrfciYiPKt2LTLUu%2FVtHaEn4cxSR5IWH1gSSqcTt7zQxyHb59%2FB8zGGz4KZ0ZGFCpcrIPga4iLla61Fed6lBa3RSn05CILY7VVVEE36yWXw4HJ1tEHI1gNGxQ%2BhcEyMO4T11azkXMdZRSEMODVKkg%2Bl5BxEDKq2T%2B7Lr1n5mzEawld8tEQSzvt9dfzEuX3LqNX5pNE3H0iilGg&X-Amz-Signature=149a4806a5e4025b13f28b76f88b663a29353cb4202cb8ccce42b44f412aeb3f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI47UOO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGewnTVDsYQg6uMUFJz9%2FQZPep0hzwCL9dHhqUN3%2BuR8AiB4hSDHABoyAzBx%2BaGnnW381jMKW%2BTU4AaWKX5krpy2UCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNMQ%2B4rOaIFsCAHcOKtwD20qbNtMoDSHCrasvA4IoSWg79cncyvyMV55l8GPIuY51QcI%2BPOnxcRlVtaTLemlJlObIX8hn5FZ88noxy0TIIdS%2BDsh4OSVw4l0DJqk0x%2Fvr4AmNU9Vw1eT1fjbH%2ByPVscn5vMLF1PQI0vZPoEmTUju6tga8gV8ucks0GI4TqL%2BHq6t3EsOld0AEv6dh3P%2FtkWxgGm5BCFqjyDLaZyDvgsVFxuriblY%2FL3UXbY9j2tqZb%2B0OvrGlAaPpLNJWYodBmzG%2BZhUUDVrtwWS1IWTpiZlCZlOyK9z3VoVk6ZKLS7eIKIJNz0vZoswz3YbVP4xfc9akqPDMMXWqYekmF%2FjVaHh4Qd8P4MLEq6auAgcNoNoFGW5LqJvw87MytTaU%2B6wQCYAkJZCTku8yU2VkAlzEXaaCHyJTWRrz%2F2n7XWuAH9o3kUg%2BKLOQ9JL3cBOFlwA9elfLd7jcT%2FSQ%2BZ28zq4q0vlgl%2Fj7kWPDkprAxQt5uWucK%2F6V4526yseG%2BO1mRq3ZVEDfBCEySpKYKWiH87fyRPS2mnZunlz9qAwZtei1oCV408NNu7sWMa1Ynn1qVdscUbrLnySIjAfFWNlidtUDa3mDhq5wsx1mGoRDzh2iMnKtFOrtjr8dZ2UefngwoqfyvgY6pgHwdLACntFS7p2hjCrrfciYiPKt2LTLUu%2FVtHaEn4cxSR5IWH1gSSqcTt7zQxyHb59%2FB8zGGz4KZ0ZGFCpcrIPga4iLla61Fed6lBa3RSn05CILY7VVVEE36yWXw4HJ1tEHI1gNGxQ%2BhcEyMO4T11azkXMdZRSEMODVKkg%2Bl5BxEDKq2T%2B7Lr1n5mzEawld8tEQSzvt9dfzEuX3LqNX5pNE3H0iilGg&X-Amz-Signature=3ad538e954d5aa380e8592ca0cddfeb19f2b4029dcefda84b3c3b6aae43e7af1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI47UOO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGewnTVDsYQg6uMUFJz9%2FQZPep0hzwCL9dHhqUN3%2BuR8AiB4hSDHABoyAzBx%2BaGnnW381jMKW%2BTU4AaWKX5krpy2UCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNMQ%2B4rOaIFsCAHcOKtwD20qbNtMoDSHCrasvA4IoSWg79cncyvyMV55l8GPIuY51QcI%2BPOnxcRlVtaTLemlJlObIX8hn5FZ88noxy0TIIdS%2BDsh4OSVw4l0DJqk0x%2Fvr4AmNU9Vw1eT1fjbH%2ByPVscn5vMLF1PQI0vZPoEmTUju6tga8gV8ucks0GI4TqL%2BHq6t3EsOld0AEv6dh3P%2FtkWxgGm5BCFqjyDLaZyDvgsVFxuriblY%2FL3UXbY9j2tqZb%2B0OvrGlAaPpLNJWYodBmzG%2BZhUUDVrtwWS1IWTpiZlCZlOyK9z3VoVk6ZKLS7eIKIJNz0vZoswz3YbVP4xfc9akqPDMMXWqYekmF%2FjVaHh4Qd8P4MLEq6auAgcNoNoFGW5LqJvw87MytTaU%2B6wQCYAkJZCTku8yU2VkAlzEXaaCHyJTWRrz%2F2n7XWuAH9o3kUg%2BKLOQ9JL3cBOFlwA9elfLd7jcT%2FSQ%2BZ28zq4q0vlgl%2Fj7kWPDkprAxQt5uWucK%2F6V4526yseG%2BO1mRq3ZVEDfBCEySpKYKWiH87fyRPS2mnZunlz9qAwZtei1oCV408NNu7sWMa1Ynn1qVdscUbrLnySIjAfFWNlidtUDa3mDhq5wsx1mGoRDzh2iMnKtFOrtjr8dZ2UefngwoqfyvgY6pgHwdLACntFS7p2hjCrrfciYiPKt2LTLUu%2FVtHaEn4cxSR5IWH1gSSqcTt7zQxyHb59%2FB8zGGz4KZ0ZGFCpcrIPga4iLla61Fed6lBa3RSn05CILY7VVVEE36yWXw4HJ1tEHI1gNGxQ%2BhcEyMO4T11azkXMdZRSEMODVKkg%2Bl5BxEDKq2T%2B7Lr1n5mzEawld8tEQSzvt9dfzEuX3LqNX5pNE3H0iilGg&X-Amz-Signature=7cc07785c872e4c1a7f4d05ba5acfb607eb83b21c24afd021393f5224158469f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI47UOO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGewnTVDsYQg6uMUFJz9%2FQZPep0hzwCL9dHhqUN3%2BuR8AiB4hSDHABoyAzBx%2BaGnnW381jMKW%2BTU4AaWKX5krpy2UCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNMQ%2B4rOaIFsCAHcOKtwD20qbNtMoDSHCrasvA4IoSWg79cncyvyMV55l8GPIuY51QcI%2BPOnxcRlVtaTLemlJlObIX8hn5FZ88noxy0TIIdS%2BDsh4OSVw4l0DJqk0x%2Fvr4AmNU9Vw1eT1fjbH%2ByPVscn5vMLF1PQI0vZPoEmTUju6tga8gV8ucks0GI4TqL%2BHq6t3EsOld0AEv6dh3P%2FtkWxgGm5BCFqjyDLaZyDvgsVFxuriblY%2FL3UXbY9j2tqZb%2B0OvrGlAaPpLNJWYodBmzG%2BZhUUDVrtwWS1IWTpiZlCZlOyK9z3VoVk6ZKLS7eIKIJNz0vZoswz3YbVP4xfc9akqPDMMXWqYekmF%2FjVaHh4Qd8P4MLEq6auAgcNoNoFGW5LqJvw87MytTaU%2B6wQCYAkJZCTku8yU2VkAlzEXaaCHyJTWRrz%2F2n7XWuAH9o3kUg%2BKLOQ9JL3cBOFlwA9elfLd7jcT%2FSQ%2BZ28zq4q0vlgl%2Fj7kWPDkprAxQt5uWucK%2F6V4526yseG%2BO1mRq3ZVEDfBCEySpKYKWiH87fyRPS2mnZunlz9qAwZtei1oCV408NNu7sWMa1Ynn1qVdscUbrLnySIjAfFWNlidtUDa3mDhq5wsx1mGoRDzh2iMnKtFOrtjr8dZ2UefngwoqfyvgY6pgHwdLACntFS7p2hjCrrfciYiPKt2LTLUu%2FVtHaEn4cxSR5IWH1gSSqcTt7zQxyHb59%2FB8zGGz4KZ0ZGFCpcrIPga4iLla61Fed6lBa3RSn05CILY7VVVEE36yWXw4HJ1tEHI1gNGxQ%2BhcEyMO4T11azkXMdZRSEMODVKkg%2Bl5BxEDKq2T%2B7Lr1n5mzEawld8tEQSzvt9dfzEuX3LqNX5pNE3H0iilGg&X-Amz-Signature=5885c5bd020bec0ab1e6bd219ef284da262813c6904aafb6a06fec116ec24a99&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
