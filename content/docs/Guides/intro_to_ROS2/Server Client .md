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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5VCCXN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHe9QCXWKhq3GLOazvwZtS77ca3P4c0oqKMcRRRlbpviAiEAmN26io4wzxZp%2FsmJZVbgcbLmIguxhEQCTBKDyxXrigkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDWFOJ9lm87nqGQugircA0FB6Yn2PavsOk3rdvr9%2FtGES4l3pkFYIC3WmNWT%2BgQhny6wx67mXQZ52BtYE3O0Byed3sIqXZ6ntQzfYyKqeHFJQQnjRlFNjdWS%2B2gytZIeF%2FvcoM3ouLFFO8BHGst2r5yS3Ahl0fQKaQgb93Anfjr5h%2ByTbWL%2FjqNkncuB%2FR4Lx9vunluZUgJkDyy6wLg1936zKUnGJrJisJALkO%2FrsiVUWo2wmfLrmeZ5mTeajMynmqPOYa3CcyyuLJ%2Bh7cfNby%2BG%2BRt8Kpj4i%2FndTFxv9WrAaCQDO9tAGLk4caLgWFdwbTIHExq8M0erekVZ8me0tUGqqShanFu6Usm6twlhVrwj5i1WVeShztzXxieQcmQuqAduOOCNu6AKusR0Ifwe%2F0y0vQGpTRqZ%2FNrzo18PX9BwU2xZnE2%2FjFPvgdmgNT8dZTuLRSZnPzT4DR9hqYA5%2B7mfUO2q6LYIBeikTnDJfTusRlyRoT%2BpzU0fRFupeUxezHeTWEXjRUW82f7LAbpD%2BfKHOHKzrSj7BHs69K4UZdS%2BcwBAWDTj3ENtD0WNSNgAVh21zEVZS%2Bn0r7KiIJTrv%2B2iXAh2Ne0LE9ous2W1cU8dqeFS%2BZsTXsohldMWFKXxSD62G0N1SVk%2B2syMMM2I%2F8EGOqUBRKosMPetyKBZKIcKncvEbO%2BSa%2F%2FWMWLizN1H0fqvvEy5E68CfTOKv17viFZvxISXYSdFPSgFbfaYi325O0TrJ2IqWxkgkw5xSdzIxS4tqyg3IRbnFJyUS8YNBGjyTwbDiH2hK9MbBZS09MlpfztxH4985C2%2FI7F1pLhkZq2g8paUYDxXgFjS7Qje5%2B72thv1RFa0yybQQpqwVDMlgBVRrtMho2EE&X-Amz-Signature=97a079376bb9ab5c416fe007a195075740910cf3ec19a6c802ade707b3513031&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5VCCXN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHe9QCXWKhq3GLOazvwZtS77ca3P4c0oqKMcRRRlbpviAiEAmN26io4wzxZp%2FsmJZVbgcbLmIguxhEQCTBKDyxXrigkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDWFOJ9lm87nqGQugircA0FB6Yn2PavsOk3rdvr9%2FtGES4l3pkFYIC3WmNWT%2BgQhny6wx67mXQZ52BtYE3O0Byed3sIqXZ6ntQzfYyKqeHFJQQnjRlFNjdWS%2B2gytZIeF%2FvcoM3ouLFFO8BHGst2r5yS3Ahl0fQKaQgb93Anfjr5h%2ByTbWL%2FjqNkncuB%2FR4Lx9vunluZUgJkDyy6wLg1936zKUnGJrJisJALkO%2FrsiVUWo2wmfLrmeZ5mTeajMynmqPOYa3CcyyuLJ%2Bh7cfNby%2BG%2BRt8Kpj4i%2FndTFxv9WrAaCQDO9tAGLk4caLgWFdwbTIHExq8M0erekVZ8me0tUGqqShanFu6Usm6twlhVrwj5i1WVeShztzXxieQcmQuqAduOOCNu6AKusR0Ifwe%2F0y0vQGpTRqZ%2FNrzo18PX9BwU2xZnE2%2FjFPvgdmgNT8dZTuLRSZnPzT4DR9hqYA5%2B7mfUO2q6LYIBeikTnDJfTusRlyRoT%2BpzU0fRFupeUxezHeTWEXjRUW82f7LAbpD%2BfKHOHKzrSj7BHs69K4UZdS%2BcwBAWDTj3ENtD0WNSNgAVh21zEVZS%2Bn0r7KiIJTrv%2B2iXAh2Ne0LE9ous2W1cU8dqeFS%2BZsTXsohldMWFKXxSD62G0N1SVk%2B2syMMM2I%2F8EGOqUBRKosMPetyKBZKIcKncvEbO%2BSa%2F%2FWMWLizN1H0fqvvEy5E68CfTOKv17viFZvxISXYSdFPSgFbfaYi325O0TrJ2IqWxkgkw5xSdzIxS4tqyg3IRbnFJyUS8YNBGjyTwbDiH2hK9MbBZS09MlpfztxH4985C2%2FI7F1pLhkZq2g8paUYDxXgFjS7Qje5%2B72thv1RFa0yybQQpqwVDMlgBVRrtMho2EE&X-Amz-Signature=53c742bbc0367134f28fa5f6e5ea5127f297f485d991bf996a569a2202876800&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5VCCXN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHe9QCXWKhq3GLOazvwZtS77ca3P4c0oqKMcRRRlbpviAiEAmN26io4wzxZp%2FsmJZVbgcbLmIguxhEQCTBKDyxXrigkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDWFOJ9lm87nqGQugircA0FB6Yn2PavsOk3rdvr9%2FtGES4l3pkFYIC3WmNWT%2BgQhny6wx67mXQZ52BtYE3O0Byed3sIqXZ6ntQzfYyKqeHFJQQnjRlFNjdWS%2B2gytZIeF%2FvcoM3ouLFFO8BHGst2r5yS3Ahl0fQKaQgb93Anfjr5h%2ByTbWL%2FjqNkncuB%2FR4Lx9vunluZUgJkDyy6wLg1936zKUnGJrJisJALkO%2FrsiVUWo2wmfLrmeZ5mTeajMynmqPOYa3CcyyuLJ%2Bh7cfNby%2BG%2BRt8Kpj4i%2FndTFxv9WrAaCQDO9tAGLk4caLgWFdwbTIHExq8M0erekVZ8me0tUGqqShanFu6Usm6twlhVrwj5i1WVeShztzXxieQcmQuqAduOOCNu6AKusR0Ifwe%2F0y0vQGpTRqZ%2FNrzo18PX9BwU2xZnE2%2FjFPvgdmgNT8dZTuLRSZnPzT4DR9hqYA5%2B7mfUO2q6LYIBeikTnDJfTusRlyRoT%2BpzU0fRFupeUxezHeTWEXjRUW82f7LAbpD%2BfKHOHKzrSj7BHs69K4UZdS%2BcwBAWDTj3ENtD0WNSNgAVh21zEVZS%2Bn0r7KiIJTrv%2B2iXAh2Ne0LE9ous2W1cU8dqeFS%2BZsTXsohldMWFKXxSD62G0N1SVk%2B2syMMM2I%2F8EGOqUBRKosMPetyKBZKIcKncvEbO%2BSa%2F%2FWMWLizN1H0fqvvEy5E68CfTOKv17viFZvxISXYSdFPSgFbfaYi325O0TrJ2IqWxkgkw5xSdzIxS4tqyg3IRbnFJyUS8YNBGjyTwbDiH2hK9MbBZS09MlpfztxH4985C2%2FI7F1pLhkZq2g8paUYDxXgFjS7Qje5%2B72thv1RFa0yybQQpqwVDMlgBVRrtMho2EE&X-Amz-Signature=0dd44e59582fda49fefc44df6989ccccf7cb12bd31a8693fecbeb8e10c5025a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5VCCXN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHe9QCXWKhq3GLOazvwZtS77ca3P4c0oqKMcRRRlbpviAiEAmN26io4wzxZp%2FsmJZVbgcbLmIguxhEQCTBKDyxXrigkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDWFOJ9lm87nqGQugircA0FB6Yn2PavsOk3rdvr9%2FtGES4l3pkFYIC3WmNWT%2BgQhny6wx67mXQZ52BtYE3O0Byed3sIqXZ6ntQzfYyKqeHFJQQnjRlFNjdWS%2B2gytZIeF%2FvcoM3ouLFFO8BHGst2r5yS3Ahl0fQKaQgb93Anfjr5h%2ByTbWL%2FjqNkncuB%2FR4Lx9vunluZUgJkDyy6wLg1936zKUnGJrJisJALkO%2FrsiVUWo2wmfLrmeZ5mTeajMynmqPOYa3CcyyuLJ%2Bh7cfNby%2BG%2BRt8Kpj4i%2FndTFxv9WrAaCQDO9tAGLk4caLgWFdwbTIHExq8M0erekVZ8me0tUGqqShanFu6Usm6twlhVrwj5i1WVeShztzXxieQcmQuqAduOOCNu6AKusR0Ifwe%2F0y0vQGpTRqZ%2FNrzo18PX9BwU2xZnE2%2FjFPvgdmgNT8dZTuLRSZnPzT4DR9hqYA5%2B7mfUO2q6LYIBeikTnDJfTusRlyRoT%2BpzU0fRFupeUxezHeTWEXjRUW82f7LAbpD%2BfKHOHKzrSj7BHs69K4UZdS%2BcwBAWDTj3ENtD0WNSNgAVh21zEVZS%2Bn0r7KiIJTrv%2B2iXAh2Ne0LE9ous2W1cU8dqeFS%2BZsTXsohldMWFKXxSD62G0N1SVk%2B2syMMM2I%2F8EGOqUBRKosMPetyKBZKIcKncvEbO%2BSa%2F%2FWMWLizN1H0fqvvEy5E68CfTOKv17viFZvxISXYSdFPSgFbfaYi325O0TrJ2IqWxkgkw5xSdzIxS4tqyg3IRbnFJyUS8YNBGjyTwbDiH2hK9MbBZS09MlpfztxH4985C2%2FI7F1pLhkZq2g8paUYDxXgFjS7Qje5%2B72thv1RFa0yybQQpqwVDMlgBVRrtMho2EE&X-Amz-Signature=e9479aa70bd170b4bc0c781bfab52539117ff7c4bdb99e10a806e3d63d624476&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5VCCXN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHe9QCXWKhq3GLOazvwZtS77ca3P4c0oqKMcRRRlbpviAiEAmN26io4wzxZp%2FsmJZVbgcbLmIguxhEQCTBKDyxXrigkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDWFOJ9lm87nqGQugircA0FB6Yn2PavsOk3rdvr9%2FtGES4l3pkFYIC3WmNWT%2BgQhny6wx67mXQZ52BtYE3O0Byed3sIqXZ6ntQzfYyKqeHFJQQnjRlFNjdWS%2B2gytZIeF%2FvcoM3ouLFFO8BHGst2r5yS3Ahl0fQKaQgb93Anfjr5h%2ByTbWL%2FjqNkncuB%2FR4Lx9vunluZUgJkDyy6wLg1936zKUnGJrJisJALkO%2FrsiVUWo2wmfLrmeZ5mTeajMynmqPOYa3CcyyuLJ%2Bh7cfNby%2BG%2BRt8Kpj4i%2FndTFxv9WrAaCQDO9tAGLk4caLgWFdwbTIHExq8M0erekVZ8me0tUGqqShanFu6Usm6twlhVrwj5i1WVeShztzXxieQcmQuqAduOOCNu6AKusR0Ifwe%2F0y0vQGpTRqZ%2FNrzo18PX9BwU2xZnE2%2FjFPvgdmgNT8dZTuLRSZnPzT4DR9hqYA5%2B7mfUO2q6LYIBeikTnDJfTusRlyRoT%2BpzU0fRFupeUxezHeTWEXjRUW82f7LAbpD%2BfKHOHKzrSj7BHs69K4UZdS%2BcwBAWDTj3ENtD0WNSNgAVh21zEVZS%2Bn0r7KiIJTrv%2B2iXAh2Ne0LE9ous2W1cU8dqeFS%2BZsTXsohldMWFKXxSD62G0N1SVk%2B2syMMM2I%2F8EGOqUBRKosMPetyKBZKIcKncvEbO%2BSa%2F%2FWMWLizN1H0fqvvEy5E68CfTOKv17viFZvxISXYSdFPSgFbfaYi325O0TrJ2IqWxkgkw5xSdzIxS4tqyg3IRbnFJyUS8YNBGjyTwbDiH2hK9MbBZS09MlpfztxH4985C2%2FI7F1pLhkZq2g8paUYDxXgFjS7Qje5%2B72thv1RFa0yybQQpqwVDMlgBVRrtMho2EE&X-Amz-Signature=70576418472166bade2260a05502546d9281ebfc42e42d177cf3c084b4ca4d37&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
