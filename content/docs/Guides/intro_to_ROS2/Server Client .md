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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6NYZOX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCfV3vufTkC3OXY86xpeDeBpvWi%2BVNxuFNp3VaXiP0IpAIhANdyGoMpo57AjsPKkh3pl5d7okFTn5TBlFeez%2Ft54Pt1Kv8DCF0QABoMNjM3NDIzMTgzODA1IgyFN8WJkFne6Hgys3Uq3AOhHVcZ2bROBB6b8jXBQalPRtVMJt8%2FKP%2BACFLdPbrOivzdOw8M0xzJZd8QGKNS%2B7ov3yrXyNWC6vvjZQbWPVuIaZquM4oob1eZPohBa8d0vlDPCxVKctYlyQ0NJzwirbv9dAzv5BX4uP5liVeIzm6rrYr2FmnUYT5bI3odKvHS%2BwKvveKhyOBNmabMiEMviTJugbKaZ%2F62QlN1dab1NwuZDJtrzC90k6qQ7NtxQPaBXX6UQFWV2Bm2WpShAWof67XxeBxkkjyt47Y4mQJzWBEufEGyJa%2BjK6iL6sjm1H0Lc7mx387W3r%2BT%2FCXmmE8Ovxt%2F00IXIqtzrmwZU1D93gOpi9SJw9709zUc5pCC5YmjiqXy4vHTIHov0uU%2FQzUY%2BdQ2BsWyM8qZge86rUgoEsWTDt2fzvSh2v7pOKA6%2BdYBPhvylkknLNM7A3gATqqH177bpb%2FmpGdonduXJrUNZsDwcQqIxOQu%2BNtbwlckekOgsBPr4XKKRcbHoK9lfvenW6tHDyorW%2FMKqiVAQX9uqwZLb48MIoFUvsnHXIRXw9ZqP1HdFdXihXh38RrrQJ0hc8WJVmdoXrycohBDCeTeUhqgf2CIsdARbGyWq%2BfMABWYH6SZxOZ4sci3F9XoADD1tOW%2BBjqkAa21IIiRsGh%2F99xRBtzUT%2FOTPcMEwEjPjXbTCbyfNO3janiI64MfjrmSuuwvFJn7Nm0f38CSoz146wszeb%2BARi4o3EyIT9QJBm7bBRIaq7MS7ewSW9tE3gWPY2GvuOlynfKbcwUHUDIyDzJOXy3HtubpUk3bU4fme%2FfZ0yYqvm5hADcnIl295EcqgBbrA3AiSoj7Ik29ft8VKFyEa6slwhCWfusH&X-Amz-Signature=e42fbbdb87fecc393ef77759902d95c59825cf9d4d25f1d892c404e8d21bf5cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6NYZOX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCfV3vufTkC3OXY86xpeDeBpvWi%2BVNxuFNp3VaXiP0IpAIhANdyGoMpo57AjsPKkh3pl5d7okFTn5TBlFeez%2Ft54Pt1Kv8DCF0QABoMNjM3NDIzMTgzODA1IgyFN8WJkFne6Hgys3Uq3AOhHVcZ2bROBB6b8jXBQalPRtVMJt8%2FKP%2BACFLdPbrOivzdOw8M0xzJZd8QGKNS%2B7ov3yrXyNWC6vvjZQbWPVuIaZquM4oob1eZPohBa8d0vlDPCxVKctYlyQ0NJzwirbv9dAzv5BX4uP5liVeIzm6rrYr2FmnUYT5bI3odKvHS%2BwKvveKhyOBNmabMiEMviTJugbKaZ%2F62QlN1dab1NwuZDJtrzC90k6qQ7NtxQPaBXX6UQFWV2Bm2WpShAWof67XxeBxkkjyt47Y4mQJzWBEufEGyJa%2BjK6iL6sjm1H0Lc7mx387W3r%2BT%2FCXmmE8Ovxt%2F00IXIqtzrmwZU1D93gOpi9SJw9709zUc5pCC5YmjiqXy4vHTIHov0uU%2FQzUY%2BdQ2BsWyM8qZge86rUgoEsWTDt2fzvSh2v7pOKA6%2BdYBPhvylkknLNM7A3gATqqH177bpb%2FmpGdonduXJrUNZsDwcQqIxOQu%2BNtbwlckekOgsBPr4XKKRcbHoK9lfvenW6tHDyorW%2FMKqiVAQX9uqwZLb48MIoFUvsnHXIRXw9ZqP1HdFdXihXh38RrrQJ0hc8WJVmdoXrycohBDCeTeUhqgf2CIsdARbGyWq%2BfMABWYH6SZxOZ4sci3F9XoADD1tOW%2BBjqkAa21IIiRsGh%2F99xRBtzUT%2FOTPcMEwEjPjXbTCbyfNO3janiI64MfjrmSuuwvFJn7Nm0f38CSoz146wszeb%2BARi4o3EyIT9QJBm7bBRIaq7MS7ewSW9tE3gWPY2GvuOlynfKbcwUHUDIyDzJOXy3HtubpUk3bU4fme%2FfZ0yYqvm5hADcnIl295EcqgBbrA3AiSoj7Ik29ft8VKFyEa6slwhCWfusH&X-Amz-Signature=064ea9850e1fd411643013146b49139e5268c811b9620608dbe1383fffa96402&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6NYZOX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCfV3vufTkC3OXY86xpeDeBpvWi%2BVNxuFNp3VaXiP0IpAIhANdyGoMpo57AjsPKkh3pl5d7okFTn5TBlFeez%2Ft54Pt1Kv8DCF0QABoMNjM3NDIzMTgzODA1IgyFN8WJkFne6Hgys3Uq3AOhHVcZ2bROBB6b8jXBQalPRtVMJt8%2FKP%2BACFLdPbrOivzdOw8M0xzJZd8QGKNS%2B7ov3yrXyNWC6vvjZQbWPVuIaZquM4oob1eZPohBa8d0vlDPCxVKctYlyQ0NJzwirbv9dAzv5BX4uP5liVeIzm6rrYr2FmnUYT5bI3odKvHS%2BwKvveKhyOBNmabMiEMviTJugbKaZ%2F62QlN1dab1NwuZDJtrzC90k6qQ7NtxQPaBXX6UQFWV2Bm2WpShAWof67XxeBxkkjyt47Y4mQJzWBEufEGyJa%2BjK6iL6sjm1H0Lc7mx387W3r%2BT%2FCXmmE8Ovxt%2F00IXIqtzrmwZU1D93gOpi9SJw9709zUc5pCC5YmjiqXy4vHTIHov0uU%2FQzUY%2BdQ2BsWyM8qZge86rUgoEsWTDt2fzvSh2v7pOKA6%2BdYBPhvylkknLNM7A3gATqqH177bpb%2FmpGdonduXJrUNZsDwcQqIxOQu%2BNtbwlckekOgsBPr4XKKRcbHoK9lfvenW6tHDyorW%2FMKqiVAQX9uqwZLb48MIoFUvsnHXIRXw9ZqP1HdFdXihXh38RrrQJ0hc8WJVmdoXrycohBDCeTeUhqgf2CIsdARbGyWq%2BfMABWYH6SZxOZ4sci3F9XoADD1tOW%2BBjqkAa21IIiRsGh%2F99xRBtzUT%2FOTPcMEwEjPjXbTCbyfNO3janiI64MfjrmSuuwvFJn7Nm0f38CSoz146wszeb%2BARi4o3EyIT9QJBm7bBRIaq7MS7ewSW9tE3gWPY2GvuOlynfKbcwUHUDIyDzJOXy3HtubpUk3bU4fme%2FfZ0yYqvm5hADcnIl295EcqgBbrA3AiSoj7Ik29ft8VKFyEa6slwhCWfusH&X-Amz-Signature=b39c16ac65fc86002270e9e37b01067441c95f1eff36b5e4bd8aa4baf33e7201&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6NYZOX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCfV3vufTkC3OXY86xpeDeBpvWi%2BVNxuFNp3VaXiP0IpAIhANdyGoMpo57AjsPKkh3pl5d7okFTn5TBlFeez%2Ft54Pt1Kv8DCF0QABoMNjM3NDIzMTgzODA1IgyFN8WJkFne6Hgys3Uq3AOhHVcZ2bROBB6b8jXBQalPRtVMJt8%2FKP%2BACFLdPbrOivzdOw8M0xzJZd8QGKNS%2B7ov3yrXyNWC6vvjZQbWPVuIaZquM4oob1eZPohBa8d0vlDPCxVKctYlyQ0NJzwirbv9dAzv5BX4uP5liVeIzm6rrYr2FmnUYT5bI3odKvHS%2BwKvveKhyOBNmabMiEMviTJugbKaZ%2F62QlN1dab1NwuZDJtrzC90k6qQ7NtxQPaBXX6UQFWV2Bm2WpShAWof67XxeBxkkjyt47Y4mQJzWBEufEGyJa%2BjK6iL6sjm1H0Lc7mx387W3r%2BT%2FCXmmE8Ovxt%2F00IXIqtzrmwZU1D93gOpi9SJw9709zUc5pCC5YmjiqXy4vHTIHov0uU%2FQzUY%2BdQ2BsWyM8qZge86rUgoEsWTDt2fzvSh2v7pOKA6%2BdYBPhvylkknLNM7A3gATqqH177bpb%2FmpGdonduXJrUNZsDwcQqIxOQu%2BNtbwlckekOgsBPr4XKKRcbHoK9lfvenW6tHDyorW%2FMKqiVAQX9uqwZLb48MIoFUvsnHXIRXw9ZqP1HdFdXihXh38RrrQJ0hc8WJVmdoXrycohBDCeTeUhqgf2CIsdARbGyWq%2BfMABWYH6SZxOZ4sci3F9XoADD1tOW%2BBjqkAa21IIiRsGh%2F99xRBtzUT%2FOTPcMEwEjPjXbTCbyfNO3janiI64MfjrmSuuwvFJn7Nm0f38CSoz146wszeb%2BARi4o3EyIT9QJBm7bBRIaq7MS7ewSW9tE3gWPY2GvuOlynfKbcwUHUDIyDzJOXy3HtubpUk3bU4fme%2FfZ0yYqvm5hADcnIl295EcqgBbrA3AiSoj7Ik29ft8VKFyEa6slwhCWfusH&X-Amz-Signature=e14b3c52f31b3566438ddc46bcc4cf5776c454654e95d875bce9bd0249766b81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6NYZOX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCfV3vufTkC3OXY86xpeDeBpvWi%2BVNxuFNp3VaXiP0IpAIhANdyGoMpo57AjsPKkh3pl5d7okFTn5TBlFeez%2Ft54Pt1Kv8DCF0QABoMNjM3NDIzMTgzODA1IgyFN8WJkFne6Hgys3Uq3AOhHVcZ2bROBB6b8jXBQalPRtVMJt8%2FKP%2BACFLdPbrOivzdOw8M0xzJZd8QGKNS%2B7ov3yrXyNWC6vvjZQbWPVuIaZquM4oob1eZPohBa8d0vlDPCxVKctYlyQ0NJzwirbv9dAzv5BX4uP5liVeIzm6rrYr2FmnUYT5bI3odKvHS%2BwKvveKhyOBNmabMiEMviTJugbKaZ%2F62QlN1dab1NwuZDJtrzC90k6qQ7NtxQPaBXX6UQFWV2Bm2WpShAWof67XxeBxkkjyt47Y4mQJzWBEufEGyJa%2BjK6iL6sjm1H0Lc7mx387W3r%2BT%2FCXmmE8Ovxt%2F00IXIqtzrmwZU1D93gOpi9SJw9709zUc5pCC5YmjiqXy4vHTIHov0uU%2FQzUY%2BdQ2BsWyM8qZge86rUgoEsWTDt2fzvSh2v7pOKA6%2BdYBPhvylkknLNM7A3gATqqH177bpb%2FmpGdonduXJrUNZsDwcQqIxOQu%2BNtbwlckekOgsBPr4XKKRcbHoK9lfvenW6tHDyorW%2FMKqiVAQX9uqwZLb48MIoFUvsnHXIRXw9ZqP1HdFdXihXh38RrrQJ0hc8WJVmdoXrycohBDCeTeUhqgf2CIsdARbGyWq%2BfMABWYH6SZxOZ4sci3F9XoADD1tOW%2BBjqkAa21IIiRsGh%2F99xRBtzUT%2FOTPcMEwEjPjXbTCbyfNO3janiI64MfjrmSuuwvFJn7Nm0f38CSoz146wszeb%2BARi4o3EyIT9QJBm7bBRIaq7MS7ewSW9tE3gWPY2GvuOlynfKbcwUHUDIyDzJOXy3HtubpUk3bU4fme%2FfZ0yYqvm5hADcnIl295EcqgBbrA3AiSoj7Ik29ft8VKFyEa6slwhCWfusH&X-Amz-Signature=1884cca9850c8484bb7692842fb9643e946046997c29ec0fe31be89bc9040363&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
