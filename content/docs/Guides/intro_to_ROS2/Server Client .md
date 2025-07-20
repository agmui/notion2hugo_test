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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6DYDOZL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSR7KP8c%2F%2FSww%2Bc6Llb2bkGYCjaB05k4eNJdVk5xNGAAIhANN4jdMkDmwkZ5Ie0W4ysOLfIAs308wHYRymnlrbDEJzKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1EC81qVvEPkHbBXcq3APiHSz217iUlOn81V1j4HWDQfTm2EVeXNXWBuE9%2F9zb0zsmxMDJwh2VtzKGinJB6ZX94xL5Rrkpgxo0xZDu0qbDiQ4HUJbU0vP0tg90sp0KilNOr2dcmh5mbCW1Y7fbijDCMRqG3fEAOQWcRGDkU%2FLWYqftL%2BT%2FjJ8EIgRMj2E7T8OWmbwUpmwKqSiw8oaumjbtoIy3ldZLDKRSRod7CpeklY%2FLN65phxDImsD12m9gGV8lLYVwRDY4HJm1WvfR7mNXD4XQ2JmypxjELZTLJDvpuMBik%2FT3vqnrFv3fkFaaaZRnyg0EpqqdNV54vfOPSwGBnr2vbK8PHdpYvR507oqqNVWABLIA0r5cRfvJQhSyBedKdDP23JdZQpPknhFblrdl4TU3RTo%2FmegZBNwxZwst%2BsniLqOTeIcUHTygdTr1jNqQ0ZSzW%2BJ%2FriLcQ9szyNq%2FofszghvdmLFpbcjmmbQ8v4zlHWalKo%2F1BC6x45TBMDNRYYb10ZS1lMkZqGQLYYgyd%2FTF7oGPNJuVIq2C2nKMo1jkjoorjBhnwFwwG9%2BNvvtgr2cVQ12AIBFcqvyAHS4pISC9obGkCmlJmhk1WSgNCkk%2FLnbVZTBtyex6HkMlNNfjkQah%2FKpx6dy7aTCdrPLDBjqkAdqQAJiyavlW9HU%2FAyAEZMOWQ%2Fup5apshUmxZpM8gBplP0E32JDWIOi2XVA15U4k1JeKjR%2BauiJ3ulJMC5M6sXX%2Bg1t1oO0L3ahGOzofek70LF9rjrBRsU%2FE1hnXCcQdZAk8hLPXAhNcT0TwXy7%2FTOy8fHm14hNC81JkbTDn9RjUVuLzkrW116S1T5HqLnsP4hTHW%2BrIlFiOkp6ekVMnP%2BzfHH2q&X-Amz-Signature=cdb05252e47011a0f232656d4654397397096e9d889a9bb46d1dd1a712fa4fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6DYDOZL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSR7KP8c%2F%2FSww%2Bc6Llb2bkGYCjaB05k4eNJdVk5xNGAAIhANN4jdMkDmwkZ5Ie0W4ysOLfIAs308wHYRymnlrbDEJzKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1EC81qVvEPkHbBXcq3APiHSz217iUlOn81V1j4HWDQfTm2EVeXNXWBuE9%2F9zb0zsmxMDJwh2VtzKGinJB6ZX94xL5Rrkpgxo0xZDu0qbDiQ4HUJbU0vP0tg90sp0KilNOr2dcmh5mbCW1Y7fbijDCMRqG3fEAOQWcRGDkU%2FLWYqftL%2BT%2FjJ8EIgRMj2E7T8OWmbwUpmwKqSiw8oaumjbtoIy3ldZLDKRSRod7CpeklY%2FLN65phxDImsD12m9gGV8lLYVwRDY4HJm1WvfR7mNXD4XQ2JmypxjELZTLJDvpuMBik%2FT3vqnrFv3fkFaaaZRnyg0EpqqdNV54vfOPSwGBnr2vbK8PHdpYvR507oqqNVWABLIA0r5cRfvJQhSyBedKdDP23JdZQpPknhFblrdl4TU3RTo%2FmegZBNwxZwst%2BsniLqOTeIcUHTygdTr1jNqQ0ZSzW%2BJ%2FriLcQ9szyNq%2FofszghvdmLFpbcjmmbQ8v4zlHWalKo%2F1BC6x45TBMDNRYYb10ZS1lMkZqGQLYYgyd%2FTF7oGPNJuVIq2C2nKMo1jkjoorjBhnwFwwG9%2BNvvtgr2cVQ12AIBFcqvyAHS4pISC9obGkCmlJmhk1WSgNCkk%2FLnbVZTBtyex6HkMlNNfjkQah%2FKpx6dy7aTCdrPLDBjqkAdqQAJiyavlW9HU%2FAyAEZMOWQ%2Fup5apshUmxZpM8gBplP0E32JDWIOi2XVA15U4k1JeKjR%2BauiJ3ulJMC5M6sXX%2Bg1t1oO0L3ahGOzofek70LF9rjrBRsU%2FE1hnXCcQdZAk8hLPXAhNcT0TwXy7%2FTOy8fHm14hNC81JkbTDn9RjUVuLzkrW116S1T5HqLnsP4hTHW%2BrIlFiOkp6ekVMnP%2BzfHH2q&X-Amz-Signature=4bceaf0633cda79d7cda02b50d9bb46d9b9be4447d38edd7cf4d0c2bbb1eadae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6DYDOZL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSR7KP8c%2F%2FSww%2Bc6Llb2bkGYCjaB05k4eNJdVk5xNGAAIhANN4jdMkDmwkZ5Ie0W4ysOLfIAs308wHYRymnlrbDEJzKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1EC81qVvEPkHbBXcq3APiHSz217iUlOn81V1j4HWDQfTm2EVeXNXWBuE9%2F9zb0zsmxMDJwh2VtzKGinJB6ZX94xL5Rrkpgxo0xZDu0qbDiQ4HUJbU0vP0tg90sp0KilNOr2dcmh5mbCW1Y7fbijDCMRqG3fEAOQWcRGDkU%2FLWYqftL%2BT%2FjJ8EIgRMj2E7T8OWmbwUpmwKqSiw8oaumjbtoIy3ldZLDKRSRod7CpeklY%2FLN65phxDImsD12m9gGV8lLYVwRDY4HJm1WvfR7mNXD4XQ2JmypxjELZTLJDvpuMBik%2FT3vqnrFv3fkFaaaZRnyg0EpqqdNV54vfOPSwGBnr2vbK8PHdpYvR507oqqNVWABLIA0r5cRfvJQhSyBedKdDP23JdZQpPknhFblrdl4TU3RTo%2FmegZBNwxZwst%2BsniLqOTeIcUHTygdTr1jNqQ0ZSzW%2BJ%2FriLcQ9szyNq%2FofszghvdmLFpbcjmmbQ8v4zlHWalKo%2F1BC6x45TBMDNRYYb10ZS1lMkZqGQLYYgyd%2FTF7oGPNJuVIq2C2nKMo1jkjoorjBhnwFwwG9%2BNvvtgr2cVQ12AIBFcqvyAHS4pISC9obGkCmlJmhk1WSgNCkk%2FLnbVZTBtyex6HkMlNNfjkQah%2FKpx6dy7aTCdrPLDBjqkAdqQAJiyavlW9HU%2FAyAEZMOWQ%2Fup5apshUmxZpM8gBplP0E32JDWIOi2XVA15U4k1JeKjR%2BauiJ3ulJMC5M6sXX%2Bg1t1oO0L3ahGOzofek70LF9rjrBRsU%2FE1hnXCcQdZAk8hLPXAhNcT0TwXy7%2FTOy8fHm14hNC81JkbTDn9RjUVuLzkrW116S1T5HqLnsP4hTHW%2BrIlFiOkp6ekVMnP%2BzfHH2q&X-Amz-Signature=380f172138c69b478853543b3b3d0e2b78a6dea39ccedde2184809b15213286a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6DYDOZL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSR7KP8c%2F%2FSww%2Bc6Llb2bkGYCjaB05k4eNJdVk5xNGAAIhANN4jdMkDmwkZ5Ie0W4ysOLfIAs308wHYRymnlrbDEJzKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1EC81qVvEPkHbBXcq3APiHSz217iUlOn81V1j4HWDQfTm2EVeXNXWBuE9%2F9zb0zsmxMDJwh2VtzKGinJB6ZX94xL5Rrkpgxo0xZDu0qbDiQ4HUJbU0vP0tg90sp0KilNOr2dcmh5mbCW1Y7fbijDCMRqG3fEAOQWcRGDkU%2FLWYqftL%2BT%2FjJ8EIgRMj2E7T8OWmbwUpmwKqSiw8oaumjbtoIy3ldZLDKRSRod7CpeklY%2FLN65phxDImsD12m9gGV8lLYVwRDY4HJm1WvfR7mNXD4XQ2JmypxjELZTLJDvpuMBik%2FT3vqnrFv3fkFaaaZRnyg0EpqqdNV54vfOPSwGBnr2vbK8PHdpYvR507oqqNVWABLIA0r5cRfvJQhSyBedKdDP23JdZQpPknhFblrdl4TU3RTo%2FmegZBNwxZwst%2BsniLqOTeIcUHTygdTr1jNqQ0ZSzW%2BJ%2FriLcQ9szyNq%2FofszghvdmLFpbcjmmbQ8v4zlHWalKo%2F1BC6x45TBMDNRYYb10ZS1lMkZqGQLYYgyd%2FTF7oGPNJuVIq2C2nKMo1jkjoorjBhnwFwwG9%2BNvvtgr2cVQ12AIBFcqvyAHS4pISC9obGkCmlJmhk1WSgNCkk%2FLnbVZTBtyex6HkMlNNfjkQah%2FKpx6dy7aTCdrPLDBjqkAdqQAJiyavlW9HU%2FAyAEZMOWQ%2Fup5apshUmxZpM8gBplP0E32JDWIOi2XVA15U4k1JeKjR%2BauiJ3ulJMC5M6sXX%2Bg1t1oO0L3ahGOzofek70LF9rjrBRsU%2FE1hnXCcQdZAk8hLPXAhNcT0TwXy7%2FTOy8fHm14hNC81JkbTDn9RjUVuLzkrW116S1T5HqLnsP4hTHW%2BrIlFiOkp6ekVMnP%2BzfHH2q&X-Amz-Signature=c7749c0c54e4a1b8e0fb4fbffa729f693bec0d4c2297f2efaf8fee2e97edf94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6DYDOZL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSR7KP8c%2F%2FSww%2Bc6Llb2bkGYCjaB05k4eNJdVk5xNGAAIhANN4jdMkDmwkZ5Ie0W4ysOLfIAs308wHYRymnlrbDEJzKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1EC81qVvEPkHbBXcq3APiHSz217iUlOn81V1j4HWDQfTm2EVeXNXWBuE9%2F9zb0zsmxMDJwh2VtzKGinJB6ZX94xL5Rrkpgxo0xZDu0qbDiQ4HUJbU0vP0tg90sp0KilNOr2dcmh5mbCW1Y7fbijDCMRqG3fEAOQWcRGDkU%2FLWYqftL%2BT%2FjJ8EIgRMj2E7T8OWmbwUpmwKqSiw8oaumjbtoIy3ldZLDKRSRod7CpeklY%2FLN65phxDImsD12m9gGV8lLYVwRDY4HJm1WvfR7mNXD4XQ2JmypxjELZTLJDvpuMBik%2FT3vqnrFv3fkFaaaZRnyg0EpqqdNV54vfOPSwGBnr2vbK8PHdpYvR507oqqNVWABLIA0r5cRfvJQhSyBedKdDP23JdZQpPknhFblrdl4TU3RTo%2FmegZBNwxZwst%2BsniLqOTeIcUHTygdTr1jNqQ0ZSzW%2BJ%2FriLcQ9szyNq%2FofszghvdmLFpbcjmmbQ8v4zlHWalKo%2F1BC6x45TBMDNRYYb10ZS1lMkZqGQLYYgyd%2FTF7oGPNJuVIq2C2nKMo1jkjoorjBhnwFwwG9%2BNvvtgr2cVQ12AIBFcqvyAHS4pISC9obGkCmlJmhk1WSgNCkk%2FLnbVZTBtyex6HkMlNNfjkQah%2FKpx6dy7aTCdrPLDBjqkAdqQAJiyavlW9HU%2FAyAEZMOWQ%2Fup5apshUmxZpM8gBplP0E32JDWIOi2XVA15U4k1JeKjR%2BauiJ3ulJMC5M6sXX%2Bg1t1oO0L3ahGOzofek70LF9rjrBRsU%2FE1hnXCcQdZAk8hLPXAhNcT0TwXy7%2FTOy8fHm14hNC81JkbTDn9RjUVuLzkrW116S1T5HqLnsP4hTHW%2BrIlFiOkp6ekVMnP%2BzfHH2q&X-Amz-Signature=b41f41fc577de2f069e75f54dac5d8d4813fd134c948022c3548e26148e5a2ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
