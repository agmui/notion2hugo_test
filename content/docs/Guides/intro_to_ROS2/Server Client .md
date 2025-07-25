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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GHFHB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCe0IFFub2UzILIhsh1FASf%2FvZXSgh8%2BLkZYTJdWx6MXwIhAMWc3Jy3PSewEpjYWlkkCbuqAVLzR062NafLf5bqjbzyKv8DCEwQABoMNjM3NDIzMTgzODA1IgzgURlaKRGmko09MNMq3AOhLaJaiN9bT22SWOaPnMrjQH%2F6HMJT4Qm6qEnUaDBcEK64Jc8OY1vTyU6Il%2F9VrWJlZTU0s2k2rZmRf2OXVBnNA26bU5xTCmO4xabNSilhtqWy3X7Bqe%2Fwe5hbdRxQm5JiGePFAwnyDYBBUJwWx2Y6926jiBDF7lxC9z%2ByERHMjj%2BP1Fk8s0f5lA2qBPwJ7NJsfX57NuhQ8XcUjctASUIEy67xOTztjQVZ6X%2Bzr4y4pkAYo68EmUJOh8D2HVGy0Th0XgREllLhkjTybfehASib5DMNBCyZb7GqJc%2BQhCzbHkDNKMsVhyBFQm6oWe0ycwXjTLN1tV7bTfkIbhv1jUL%2BZQR%2BRFshW%2FzGyx0z5rlv3o%2Bvmb932sb1bpiFDC77H2qasntY%2FAxlEKLsXcsm4NfHg3dfOyKKeRAjmH6xSQ30SQsiI1z4oDtXmNMkIjQIxbfcEC3m0OppjWXSoZOKa36PEtGR0zAX9M9BC51zvAEHX4iDZF5AFRsMq%2FWDuamtelQl1gbwwZkon6JM%2BzMSGhetuWiw4Nd1yaNwWxoWbLbOAaUFjyDZ%2FnnbU9qVRHhJJlEqqLH%2F3wH%2BG5vtDfzRKWbQ1J16jee5SXZBc%2Bu9zod6v9tku02n48ahD0zkXzD1qo%2FEBjqkAYhwUfGUS4WOTv8e%2Bq%2Bk5zBcBQTylYAZivjTRk9mdLVXbVC6Uj0vJ0Bg3pcmUPJqDL1Qu8IPtZ%2FhrOdyTduZUktvbHjcP0Hk3wC%2FFircbgHZM5eXOCEHBE4Jl01Afocl8TQh43PmB3yzJBVE6jfukEBMCE1AGvk1vnf2pXxlsmJy64AtAmS7I8u3wJDh2UOouRYt7AtsASFn5zpa30rV3tznT6LE&X-Amz-Signature=ac21c66d06606144492c9614a35ac56379a6a5539e435106a9257b528d570372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GHFHB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCe0IFFub2UzILIhsh1FASf%2FvZXSgh8%2BLkZYTJdWx6MXwIhAMWc3Jy3PSewEpjYWlkkCbuqAVLzR062NafLf5bqjbzyKv8DCEwQABoMNjM3NDIzMTgzODA1IgzgURlaKRGmko09MNMq3AOhLaJaiN9bT22SWOaPnMrjQH%2F6HMJT4Qm6qEnUaDBcEK64Jc8OY1vTyU6Il%2F9VrWJlZTU0s2k2rZmRf2OXVBnNA26bU5xTCmO4xabNSilhtqWy3X7Bqe%2Fwe5hbdRxQm5JiGePFAwnyDYBBUJwWx2Y6926jiBDF7lxC9z%2ByERHMjj%2BP1Fk8s0f5lA2qBPwJ7NJsfX57NuhQ8XcUjctASUIEy67xOTztjQVZ6X%2Bzr4y4pkAYo68EmUJOh8D2HVGy0Th0XgREllLhkjTybfehASib5DMNBCyZb7GqJc%2BQhCzbHkDNKMsVhyBFQm6oWe0ycwXjTLN1tV7bTfkIbhv1jUL%2BZQR%2BRFshW%2FzGyx0z5rlv3o%2Bvmb932sb1bpiFDC77H2qasntY%2FAxlEKLsXcsm4NfHg3dfOyKKeRAjmH6xSQ30SQsiI1z4oDtXmNMkIjQIxbfcEC3m0OppjWXSoZOKa36PEtGR0zAX9M9BC51zvAEHX4iDZF5AFRsMq%2FWDuamtelQl1gbwwZkon6JM%2BzMSGhetuWiw4Nd1yaNwWxoWbLbOAaUFjyDZ%2FnnbU9qVRHhJJlEqqLH%2F3wH%2BG5vtDfzRKWbQ1J16jee5SXZBc%2Bu9zod6v9tku02n48ahD0zkXzD1qo%2FEBjqkAYhwUfGUS4WOTv8e%2Bq%2Bk5zBcBQTylYAZivjTRk9mdLVXbVC6Uj0vJ0Bg3pcmUPJqDL1Qu8IPtZ%2FhrOdyTduZUktvbHjcP0Hk3wC%2FFircbgHZM5eXOCEHBE4Jl01Afocl8TQh43PmB3yzJBVE6jfukEBMCE1AGvk1vnf2pXxlsmJy64AtAmS7I8u3wJDh2UOouRYt7AtsASFn5zpa30rV3tznT6LE&X-Amz-Signature=1cea7faa33aa08fb46558f78bdf9df648d9689d0b0a5c5b21ca830b286eab036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GHFHB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCe0IFFub2UzILIhsh1FASf%2FvZXSgh8%2BLkZYTJdWx6MXwIhAMWc3Jy3PSewEpjYWlkkCbuqAVLzR062NafLf5bqjbzyKv8DCEwQABoMNjM3NDIzMTgzODA1IgzgURlaKRGmko09MNMq3AOhLaJaiN9bT22SWOaPnMrjQH%2F6HMJT4Qm6qEnUaDBcEK64Jc8OY1vTyU6Il%2F9VrWJlZTU0s2k2rZmRf2OXVBnNA26bU5xTCmO4xabNSilhtqWy3X7Bqe%2Fwe5hbdRxQm5JiGePFAwnyDYBBUJwWx2Y6926jiBDF7lxC9z%2ByERHMjj%2BP1Fk8s0f5lA2qBPwJ7NJsfX57NuhQ8XcUjctASUIEy67xOTztjQVZ6X%2Bzr4y4pkAYo68EmUJOh8D2HVGy0Th0XgREllLhkjTybfehASib5DMNBCyZb7GqJc%2BQhCzbHkDNKMsVhyBFQm6oWe0ycwXjTLN1tV7bTfkIbhv1jUL%2BZQR%2BRFshW%2FzGyx0z5rlv3o%2Bvmb932sb1bpiFDC77H2qasntY%2FAxlEKLsXcsm4NfHg3dfOyKKeRAjmH6xSQ30SQsiI1z4oDtXmNMkIjQIxbfcEC3m0OppjWXSoZOKa36PEtGR0zAX9M9BC51zvAEHX4iDZF5AFRsMq%2FWDuamtelQl1gbwwZkon6JM%2BzMSGhetuWiw4Nd1yaNwWxoWbLbOAaUFjyDZ%2FnnbU9qVRHhJJlEqqLH%2F3wH%2BG5vtDfzRKWbQ1J16jee5SXZBc%2Bu9zod6v9tku02n48ahD0zkXzD1qo%2FEBjqkAYhwUfGUS4WOTv8e%2Bq%2Bk5zBcBQTylYAZivjTRk9mdLVXbVC6Uj0vJ0Bg3pcmUPJqDL1Qu8IPtZ%2FhrOdyTduZUktvbHjcP0Hk3wC%2FFircbgHZM5eXOCEHBE4Jl01Afocl8TQh43PmB3yzJBVE6jfukEBMCE1AGvk1vnf2pXxlsmJy64AtAmS7I8u3wJDh2UOouRYt7AtsASFn5zpa30rV3tznT6LE&X-Amz-Signature=e5abd539eba2e6d10cdb2f398e1582eb3b19c046012e58bac20414bfb700b7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GHFHB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCe0IFFub2UzILIhsh1FASf%2FvZXSgh8%2BLkZYTJdWx6MXwIhAMWc3Jy3PSewEpjYWlkkCbuqAVLzR062NafLf5bqjbzyKv8DCEwQABoMNjM3NDIzMTgzODA1IgzgURlaKRGmko09MNMq3AOhLaJaiN9bT22SWOaPnMrjQH%2F6HMJT4Qm6qEnUaDBcEK64Jc8OY1vTyU6Il%2F9VrWJlZTU0s2k2rZmRf2OXVBnNA26bU5xTCmO4xabNSilhtqWy3X7Bqe%2Fwe5hbdRxQm5JiGePFAwnyDYBBUJwWx2Y6926jiBDF7lxC9z%2ByERHMjj%2BP1Fk8s0f5lA2qBPwJ7NJsfX57NuhQ8XcUjctASUIEy67xOTztjQVZ6X%2Bzr4y4pkAYo68EmUJOh8D2HVGy0Th0XgREllLhkjTybfehASib5DMNBCyZb7GqJc%2BQhCzbHkDNKMsVhyBFQm6oWe0ycwXjTLN1tV7bTfkIbhv1jUL%2BZQR%2BRFshW%2FzGyx0z5rlv3o%2Bvmb932sb1bpiFDC77H2qasntY%2FAxlEKLsXcsm4NfHg3dfOyKKeRAjmH6xSQ30SQsiI1z4oDtXmNMkIjQIxbfcEC3m0OppjWXSoZOKa36PEtGR0zAX9M9BC51zvAEHX4iDZF5AFRsMq%2FWDuamtelQl1gbwwZkon6JM%2BzMSGhetuWiw4Nd1yaNwWxoWbLbOAaUFjyDZ%2FnnbU9qVRHhJJlEqqLH%2F3wH%2BG5vtDfzRKWbQ1J16jee5SXZBc%2Bu9zod6v9tku02n48ahD0zkXzD1qo%2FEBjqkAYhwUfGUS4WOTv8e%2Bq%2Bk5zBcBQTylYAZivjTRk9mdLVXbVC6Uj0vJ0Bg3pcmUPJqDL1Qu8IPtZ%2FhrOdyTduZUktvbHjcP0Hk3wC%2FFircbgHZM5eXOCEHBE4Jl01Afocl8TQh43PmB3yzJBVE6jfukEBMCE1AGvk1vnf2pXxlsmJy64AtAmS7I8u3wJDh2UOouRYt7AtsASFn5zpa30rV3tznT6LE&X-Amz-Signature=cd585ed87d5c34baf0fb9ae0ce8d73c5820e7035c1791f4cf44b901a1074a73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GHFHB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCe0IFFub2UzILIhsh1FASf%2FvZXSgh8%2BLkZYTJdWx6MXwIhAMWc3Jy3PSewEpjYWlkkCbuqAVLzR062NafLf5bqjbzyKv8DCEwQABoMNjM3NDIzMTgzODA1IgzgURlaKRGmko09MNMq3AOhLaJaiN9bT22SWOaPnMrjQH%2F6HMJT4Qm6qEnUaDBcEK64Jc8OY1vTyU6Il%2F9VrWJlZTU0s2k2rZmRf2OXVBnNA26bU5xTCmO4xabNSilhtqWy3X7Bqe%2Fwe5hbdRxQm5JiGePFAwnyDYBBUJwWx2Y6926jiBDF7lxC9z%2ByERHMjj%2BP1Fk8s0f5lA2qBPwJ7NJsfX57NuhQ8XcUjctASUIEy67xOTztjQVZ6X%2Bzr4y4pkAYo68EmUJOh8D2HVGy0Th0XgREllLhkjTybfehASib5DMNBCyZb7GqJc%2BQhCzbHkDNKMsVhyBFQm6oWe0ycwXjTLN1tV7bTfkIbhv1jUL%2BZQR%2BRFshW%2FzGyx0z5rlv3o%2Bvmb932sb1bpiFDC77H2qasntY%2FAxlEKLsXcsm4NfHg3dfOyKKeRAjmH6xSQ30SQsiI1z4oDtXmNMkIjQIxbfcEC3m0OppjWXSoZOKa36PEtGR0zAX9M9BC51zvAEHX4iDZF5AFRsMq%2FWDuamtelQl1gbwwZkon6JM%2BzMSGhetuWiw4Nd1yaNwWxoWbLbOAaUFjyDZ%2FnnbU9qVRHhJJlEqqLH%2F3wH%2BG5vtDfzRKWbQ1J16jee5SXZBc%2Bu9zod6v9tku02n48ahD0zkXzD1qo%2FEBjqkAYhwUfGUS4WOTv8e%2Bq%2Bk5zBcBQTylYAZivjTRk9mdLVXbVC6Uj0vJ0Bg3pcmUPJqDL1Qu8IPtZ%2FhrOdyTduZUktvbHjcP0Hk3wC%2FFircbgHZM5eXOCEHBE4Jl01Afocl8TQh43PmB3yzJBVE6jfukEBMCE1AGvk1vnf2pXxlsmJy64AtAmS7I8u3wJDh2UOouRYt7AtsASFn5zpa30rV3tznT6LE&X-Amz-Signature=32249f96c30972ad67e50d58d4a29749327b3779081aefe58a141b8389881873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
