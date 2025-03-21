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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPUE5DA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC%2FL77MZDD%2BxgidCpmNhgbcT%2BV%2FHhu3LJfoiqqt9YrozwIgLbwVoj3Gui7Rvfan7CG2kVBqa95H7iZ82sc9NErjCdgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObLnNQgbqLHnZEfjircA1jZgAuXbDS1BHn4Sfsv8CdUnGq0vggNAsxVX6k8s3HmZsfYu4ga1z3vEJbLhLCQEU7Qe%2BTGatgugR01IAZ0tC4aCeAyl0NbcxCPZWbH7E69iLjEyeYP1uS%2BsfCfmmVmaMtJAItB%2F9hsj%2BbySUaulOOgYbnb4FtzFzPVbNdz5dS73aKcid7weE6bZOWeW%2Bf3iP%2BBHhsYJVWdrpYiEr2jQRrm01QIGUSn5vYbNmjLQBhZ%2B03cpPKbgxINiIWZSiJiyykUxdeL5r1RH3bBQiGUJ41jm5mVmMaaaWqQJqsiK1jBJ3keQHEb1dDPtj1BjvZzaCEtaXl%2F94sN%2B3vebd9oT63VtQ74AEz5R%2B1RPbxWtJJvaUqceWPYG3lZtB92XxsR44AMPVlL3PxEP4t8QtdEOdSMtIxawe8lv0zUxdpQJ%2FcVVECk6%2BpyojH8P88%2BPsVsFBOiFvPBG8eChcfNLNDaxFi3WV9eFkMhz4uJXamNgdP3RfLiKgPyv2Kk868eTU%2BbpIPoTOFW4ohmqEc4om655v5oT%2BGddCIsKshKHyjZQ7qF3qYlQcqPh7XNk2FkcVRgX2%2FKGUR2VfkXgEI8AisbyPDksuSap9q%2By68mjq4ccGaIvBfhOpRSNLJxn69NMMrX9L4GOqUBxsAJIr%2Fnh%2BVzbQaE21Pl%2FISDyYrO16pj%2BO5mbl6%2Fo%2BXH9UIaH06DuiSxG4IVFZZAZzWzJymMArbhjHNvjB%2Bxes%2FE0JRHz4B7YWHdI6R5SJGDWgc96ZIbhVm2JRF2%2Bpo%2BEAPGxGG3uFW2Uzq9cWsVUhRajMoJn2AxePeeBK3jXNHw2Jg3Igtcm9nDoSWRIbpoxOxcbXQ8wgGkrggSCw3H%2FhS3u6v3&X-Amz-Signature=acb773fbb0c5b939639ae1679abeaf84d5288443c353776f4748b389a204a647&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPUE5DA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC%2FL77MZDD%2BxgidCpmNhgbcT%2BV%2FHhu3LJfoiqqt9YrozwIgLbwVoj3Gui7Rvfan7CG2kVBqa95H7iZ82sc9NErjCdgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObLnNQgbqLHnZEfjircA1jZgAuXbDS1BHn4Sfsv8CdUnGq0vggNAsxVX6k8s3HmZsfYu4ga1z3vEJbLhLCQEU7Qe%2BTGatgugR01IAZ0tC4aCeAyl0NbcxCPZWbH7E69iLjEyeYP1uS%2BsfCfmmVmaMtJAItB%2F9hsj%2BbySUaulOOgYbnb4FtzFzPVbNdz5dS73aKcid7weE6bZOWeW%2Bf3iP%2BBHhsYJVWdrpYiEr2jQRrm01QIGUSn5vYbNmjLQBhZ%2B03cpPKbgxINiIWZSiJiyykUxdeL5r1RH3bBQiGUJ41jm5mVmMaaaWqQJqsiK1jBJ3keQHEb1dDPtj1BjvZzaCEtaXl%2F94sN%2B3vebd9oT63VtQ74AEz5R%2B1RPbxWtJJvaUqceWPYG3lZtB92XxsR44AMPVlL3PxEP4t8QtdEOdSMtIxawe8lv0zUxdpQJ%2FcVVECk6%2BpyojH8P88%2BPsVsFBOiFvPBG8eChcfNLNDaxFi3WV9eFkMhz4uJXamNgdP3RfLiKgPyv2Kk868eTU%2BbpIPoTOFW4ohmqEc4om655v5oT%2BGddCIsKshKHyjZQ7qF3qYlQcqPh7XNk2FkcVRgX2%2FKGUR2VfkXgEI8AisbyPDksuSap9q%2By68mjq4ccGaIvBfhOpRSNLJxn69NMMrX9L4GOqUBxsAJIr%2Fnh%2BVzbQaE21Pl%2FISDyYrO16pj%2BO5mbl6%2Fo%2BXH9UIaH06DuiSxG4IVFZZAZzWzJymMArbhjHNvjB%2Bxes%2FE0JRHz4B7YWHdI6R5SJGDWgc96ZIbhVm2JRF2%2Bpo%2BEAPGxGG3uFW2Uzq9cWsVUhRajMoJn2AxePeeBK3jXNHw2Jg3Igtcm9nDoSWRIbpoxOxcbXQ8wgGkrggSCw3H%2FhS3u6v3&X-Amz-Signature=d513004e12a5c91ef365b9e6c972f039ced37ebb0e502ce393d819393dd5310a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPUE5DA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC%2FL77MZDD%2BxgidCpmNhgbcT%2BV%2FHhu3LJfoiqqt9YrozwIgLbwVoj3Gui7Rvfan7CG2kVBqa95H7iZ82sc9NErjCdgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObLnNQgbqLHnZEfjircA1jZgAuXbDS1BHn4Sfsv8CdUnGq0vggNAsxVX6k8s3HmZsfYu4ga1z3vEJbLhLCQEU7Qe%2BTGatgugR01IAZ0tC4aCeAyl0NbcxCPZWbH7E69iLjEyeYP1uS%2BsfCfmmVmaMtJAItB%2F9hsj%2BbySUaulOOgYbnb4FtzFzPVbNdz5dS73aKcid7weE6bZOWeW%2Bf3iP%2BBHhsYJVWdrpYiEr2jQRrm01QIGUSn5vYbNmjLQBhZ%2B03cpPKbgxINiIWZSiJiyykUxdeL5r1RH3bBQiGUJ41jm5mVmMaaaWqQJqsiK1jBJ3keQHEb1dDPtj1BjvZzaCEtaXl%2F94sN%2B3vebd9oT63VtQ74AEz5R%2B1RPbxWtJJvaUqceWPYG3lZtB92XxsR44AMPVlL3PxEP4t8QtdEOdSMtIxawe8lv0zUxdpQJ%2FcVVECk6%2BpyojH8P88%2BPsVsFBOiFvPBG8eChcfNLNDaxFi3WV9eFkMhz4uJXamNgdP3RfLiKgPyv2Kk868eTU%2BbpIPoTOFW4ohmqEc4om655v5oT%2BGddCIsKshKHyjZQ7qF3qYlQcqPh7XNk2FkcVRgX2%2FKGUR2VfkXgEI8AisbyPDksuSap9q%2By68mjq4ccGaIvBfhOpRSNLJxn69NMMrX9L4GOqUBxsAJIr%2Fnh%2BVzbQaE21Pl%2FISDyYrO16pj%2BO5mbl6%2Fo%2BXH9UIaH06DuiSxG4IVFZZAZzWzJymMArbhjHNvjB%2Bxes%2FE0JRHz4B7YWHdI6R5SJGDWgc96ZIbhVm2JRF2%2Bpo%2BEAPGxGG3uFW2Uzq9cWsVUhRajMoJn2AxePeeBK3jXNHw2Jg3Igtcm9nDoSWRIbpoxOxcbXQ8wgGkrggSCw3H%2FhS3u6v3&X-Amz-Signature=dbc21ea0b2e24d3f46cbad5fe3f83fe598780b4eb3c9ef6f0684d99dd0980708&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPUE5DA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC%2FL77MZDD%2BxgidCpmNhgbcT%2BV%2FHhu3LJfoiqqt9YrozwIgLbwVoj3Gui7Rvfan7CG2kVBqa95H7iZ82sc9NErjCdgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObLnNQgbqLHnZEfjircA1jZgAuXbDS1BHn4Sfsv8CdUnGq0vggNAsxVX6k8s3HmZsfYu4ga1z3vEJbLhLCQEU7Qe%2BTGatgugR01IAZ0tC4aCeAyl0NbcxCPZWbH7E69iLjEyeYP1uS%2BsfCfmmVmaMtJAItB%2F9hsj%2BbySUaulOOgYbnb4FtzFzPVbNdz5dS73aKcid7weE6bZOWeW%2Bf3iP%2BBHhsYJVWdrpYiEr2jQRrm01QIGUSn5vYbNmjLQBhZ%2B03cpPKbgxINiIWZSiJiyykUxdeL5r1RH3bBQiGUJ41jm5mVmMaaaWqQJqsiK1jBJ3keQHEb1dDPtj1BjvZzaCEtaXl%2F94sN%2B3vebd9oT63VtQ74AEz5R%2B1RPbxWtJJvaUqceWPYG3lZtB92XxsR44AMPVlL3PxEP4t8QtdEOdSMtIxawe8lv0zUxdpQJ%2FcVVECk6%2BpyojH8P88%2BPsVsFBOiFvPBG8eChcfNLNDaxFi3WV9eFkMhz4uJXamNgdP3RfLiKgPyv2Kk868eTU%2BbpIPoTOFW4ohmqEc4om655v5oT%2BGddCIsKshKHyjZQ7qF3qYlQcqPh7XNk2FkcVRgX2%2FKGUR2VfkXgEI8AisbyPDksuSap9q%2By68mjq4ccGaIvBfhOpRSNLJxn69NMMrX9L4GOqUBxsAJIr%2Fnh%2BVzbQaE21Pl%2FISDyYrO16pj%2BO5mbl6%2Fo%2BXH9UIaH06DuiSxG4IVFZZAZzWzJymMArbhjHNvjB%2Bxes%2FE0JRHz4B7YWHdI6R5SJGDWgc96ZIbhVm2JRF2%2Bpo%2BEAPGxGG3uFW2Uzq9cWsVUhRajMoJn2AxePeeBK3jXNHw2Jg3Igtcm9nDoSWRIbpoxOxcbXQ8wgGkrggSCw3H%2FhS3u6v3&X-Amz-Signature=6911d020b04c9847a1c2c45179d76d4321ba41c7eb5c0bcc29e4e7fd0b6e2728&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPUE5DA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC%2FL77MZDD%2BxgidCpmNhgbcT%2BV%2FHhu3LJfoiqqt9YrozwIgLbwVoj3Gui7Rvfan7CG2kVBqa95H7iZ82sc9NErjCdgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObLnNQgbqLHnZEfjircA1jZgAuXbDS1BHn4Sfsv8CdUnGq0vggNAsxVX6k8s3HmZsfYu4ga1z3vEJbLhLCQEU7Qe%2BTGatgugR01IAZ0tC4aCeAyl0NbcxCPZWbH7E69iLjEyeYP1uS%2BsfCfmmVmaMtJAItB%2F9hsj%2BbySUaulOOgYbnb4FtzFzPVbNdz5dS73aKcid7weE6bZOWeW%2Bf3iP%2BBHhsYJVWdrpYiEr2jQRrm01QIGUSn5vYbNmjLQBhZ%2B03cpPKbgxINiIWZSiJiyykUxdeL5r1RH3bBQiGUJ41jm5mVmMaaaWqQJqsiK1jBJ3keQHEb1dDPtj1BjvZzaCEtaXl%2F94sN%2B3vebd9oT63VtQ74AEz5R%2B1RPbxWtJJvaUqceWPYG3lZtB92XxsR44AMPVlL3PxEP4t8QtdEOdSMtIxawe8lv0zUxdpQJ%2FcVVECk6%2BpyojH8P88%2BPsVsFBOiFvPBG8eChcfNLNDaxFi3WV9eFkMhz4uJXamNgdP3RfLiKgPyv2Kk868eTU%2BbpIPoTOFW4ohmqEc4om655v5oT%2BGddCIsKshKHyjZQ7qF3qYlQcqPh7XNk2FkcVRgX2%2FKGUR2VfkXgEI8AisbyPDksuSap9q%2By68mjq4ccGaIvBfhOpRSNLJxn69NMMrX9L4GOqUBxsAJIr%2Fnh%2BVzbQaE21Pl%2FISDyYrO16pj%2BO5mbl6%2Fo%2BXH9UIaH06DuiSxG4IVFZZAZzWzJymMArbhjHNvjB%2Bxes%2FE0JRHz4B7YWHdI6R5SJGDWgc96ZIbhVm2JRF2%2Bpo%2BEAPGxGG3uFW2Uzq9cWsVUhRajMoJn2AxePeeBK3jXNHw2Jg3Igtcm9nDoSWRIbpoxOxcbXQ8wgGkrggSCw3H%2FhS3u6v3&X-Amz-Signature=1e81fb56437f5e74f25b28f5b578e00d8a275bdc6434df0d27a67c7d82cf5d13&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
