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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHAOMY3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BPaURRprOlDFXG4mK4PJL2P7rkq4xj52U%2FR%2BtkN0w3AiEA3ESe30grY5TsWfRGL%2B99g1QrJmHwJ3d1u%2Bd%2B2xyp5yIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINQnrOASwAuJW%2FMHSrcA%2BSwtJKoUy0D3758ZYVx%2Faz8C8AjBGJ47%2FTjUsQ2GSYU4dwUoJ5f7eQayOFWfhs8c%2FzeI8Vhk4sSMoZeoqYB6u%2F%2BB2Znnsuh0CzdPz3MHHcdOHfqE42JYjRXEG033mLUT5hdtIBKEF3K7g6VArFs4nTpsfz%2FhcegtOo34JUE3n8VGtpbRvQZ859YM%2FhG5Vqi0Np27U%2FsbOrr1vP8xz%2F4rD6LfN784q5p5%2BrFI2b%2F0Jt9VhkU%2FCh%2BcV3ti6avoMBASAVq7Goi4hXauft77%2B%2F4HXVnZwkOYorhBH7XYldtQ4Fb60QBkraiOFuLxr%2BN8bs3Rg2MR0qHvBtO8DXgt67GcS4oXiJcFVuu4uwV5OFXkcFN2AX7Yh1UWsECorkz%2Fhj5JBvR0Y4JA15m6CjAGgeYCDIl%2BGuAsREFa2SfrA6SKFG3CaTLnBzdsi3KS%2B2xDMRN%2B46L8AS0DAD4MhJi1KrS047h%2BIqnNbqaGMvWsj%2B1oGmqiRt6Fhg4G%2FaxfluyIpIkvFnP%2FeuGrQCMmRriqGDpZ05edDa9H7OxKJ563xVifpO31UyStdLQ%2Fg9GN5ZrJrHZlNzAKE%2Fw%2FW6nexwZ2duqdfPfa2jezThvBz8lEt%2BE6%2BdrCE4j9GzJFP5aAAkoMJ2ZrMQGOqUBssXQku94yQK6qRUNpaz0Bvi3%2Fy0pw67EztWh%2FvHM%2FcmuTXbruUKn9%2BvSsOmqW%2FKw9sQNh2kOEAPKixLbcIF380iIdM%2BoUT0F0R8IVOMa2N9k85fq8wGQCO0133g4M%2FO2qdGBNFDyRsRwMcOgik8H7%2B%2FxCvAJ3B7Xv43xk0wM36JG37vtX6je0j5AkXL7jf9LmLK1oW4MU%2BPlElUW%2BZYgZ8zmhkQ5&X-Amz-Signature=0265fbeec4484fb78c9d0f3efe80e81dc0c037839273ce97090f0339831e705b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHAOMY3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BPaURRprOlDFXG4mK4PJL2P7rkq4xj52U%2FR%2BtkN0w3AiEA3ESe30grY5TsWfRGL%2B99g1QrJmHwJ3d1u%2Bd%2B2xyp5yIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINQnrOASwAuJW%2FMHSrcA%2BSwtJKoUy0D3758ZYVx%2Faz8C8AjBGJ47%2FTjUsQ2GSYU4dwUoJ5f7eQayOFWfhs8c%2FzeI8Vhk4sSMoZeoqYB6u%2F%2BB2Znnsuh0CzdPz3MHHcdOHfqE42JYjRXEG033mLUT5hdtIBKEF3K7g6VArFs4nTpsfz%2FhcegtOo34JUE3n8VGtpbRvQZ859YM%2FhG5Vqi0Np27U%2FsbOrr1vP8xz%2F4rD6LfN784q5p5%2BrFI2b%2F0Jt9VhkU%2FCh%2BcV3ti6avoMBASAVq7Goi4hXauft77%2B%2F4HXVnZwkOYorhBH7XYldtQ4Fb60QBkraiOFuLxr%2BN8bs3Rg2MR0qHvBtO8DXgt67GcS4oXiJcFVuu4uwV5OFXkcFN2AX7Yh1UWsECorkz%2Fhj5JBvR0Y4JA15m6CjAGgeYCDIl%2BGuAsREFa2SfrA6SKFG3CaTLnBzdsi3KS%2B2xDMRN%2B46L8AS0DAD4MhJi1KrS047h%2BIqnNbqaGMvWsj%2B1oGmqiRt6Fhg4G%2FaxfluyIpIkvFnP%2FeuGrQCMmRriqGDpZ05edDa9H7OxKJ563xVifpO31UyStdLQ%2Fg9GN5ZrJrHZlNzAKE%2Fw%2FW6nexwZ2duqdfPfa2jezThvBz8lEt%2BE6%2BdrCE4j9GzJFP5aAAkoMJ2ZrMQGOqUBssXQku94yQK6qRUNpaz0Bvi3%2Fy0pw67EztWh%2FvHM%2FcmuTXbruUKn9%2BvSsOmqW%2FKw9sQNh2kOEAPKixLbcIF380iIdM%2BoUT0F0R8IVOMa2N9k85fq8wGQCO0133g4M%2FO2qdGBNFDyRsRwMcOgik8H7%2B%2FxCvAJ3B7Xv43xk0wM36JG37vtX6je0j5AkXL7jf9LmLK1oW4MU%2BPlElUW%2BZYgZ8zmhkQ5&X-Amz-Signature=640d76157732cd6e368f470f0820783c5b30e4f874cbae30b15bfcc3bec6c36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHAOMY3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BPaURRprOlDFXG4mK4PJL2P7rkq4xj52U%2FR%2BtkN0w3AiEA3ESe30grY5TsWfRGL%2B99g1QrJmHwJ3d1u%2Bd%2B2xyp5yIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINQnrOASwAuJW%2FMHSrcA%2BSwtJKoUy0D3758ZYVx%2Faz8C8AjBGJ47%2FTjUsQ2GSYU4dwUoJ5f7eQayOFWfhs8c%2FzeI8Vhk4sSMoZeoqYB6u%2F%2BB2Znnsuh0CzdPz3MHHcdOHfqE42JYjRXEG033mLUT5hdtIBKEF3K7g6VArFs4nTpsfz%2FhcegtOo34JUE3n8VGtpbRvQZ859YM%2FhG5Vqi0Np27U%2FsbOrr1vP8xz%2F4rD6LfN784q5p5%2BrFI2b%2F0Jt9VhkU%2FCh%2BcV3ti6avoMBASAVq7Goi4hXauft77%2B%2F4HXVnZwkOYorhBH7XYldtQ4Fb60QBkraiOFuLxr%2BN8bs3Rg2MR0qHvBtO8DXgt67GcS4oXiJcFVuu4uwV5OFXkcFN2AX7Yh1UWsECorkz%2Fhj5JBvR0Y4JA15m6CjAGgeYCDIl%2BGuAsREFa2SfrA6SKFG3CaTLnBzdsi3KS%2B2xDMRN%2B46L8AS0DAD4MhJi1KrS047h%2BIqnNbqaGMvWsj%2B1oGmqiRt6Fhg4G%2FaxfluyIpIkvFnP%2FeuGrQCMmRriqGDpZ05edDa9H7OxKJ563xVifpO31UyStdLQ%2Fg9GN5ZrJrHZlNzAKE%2Fw%2FW6nexwZ2duqdfPfa2jezThvBz8lEt%2BE6%2BdrCE4j9GzJFP5aAAkoMJ2ZrMQGOqUBssXQku94yQK6qRUNpaz0Bvi3%2Fy0pw67EztWh%2FvHM%2FcmuTXbruUKn9%2BvSsOmqW%2FKw9sQNh2kOEAPKixLbcIF380iIdM%2BoUT0F0R8IVOMa2N9k85fq8wGQCO0133g4M%2FO2qdGBNFDyRsRwMcOgik8H7%2B%2FxCvAJ3B7Xv43xk0wM36JG37vtX6je0j5AkXL7jf9LmLK1oW4MU%2BPlElUW%2BZYgZ8zmhkQ5&X-Amz-Signature=48a6d24537c1a57e2b4a04964b9612b27f97d88f15501b6bf265e88256d6624b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHAOMY3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BPaURRprOlDFXG4mK4PJL2P7rkq4xj52U%2FR%2BtkN0w3AiEA3ESe30grY5TsWfRGL%2B99g1QrJmHwJ3d1u%2Bd%2B2xyp5yIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINQnrOASwAuJW%2FMHSrcA%2BSwtJKoUy0D3758ZYVx%2Faz8C8AjBGJ47%2FTjUsQ2GSYU4dwUoJ5f7eQayOFWfhs8c%2FzeI8Vhk4sSMoZeoqYB6u%2F%2BB2Znnsuh0CzdPz3MHHcdOHfqE42JYjRXEG033mLUT5hdtIBKEF3K7g6VArFs4nTpsfz%2FhcegtOo34JUE3n8VGtpbRvQZ859YM%2FhG5Vqi0Np27U%2FsbOrr1vP8xz%2F4rD6LfN784q5p5%2BrFI2b%2F0Jt9VhkU%2FCh%2BcV3ti6avoMBASAVq7Goi4hXauft77%2B%2F4HXVnZwkOYorhBH7XYldtQ4Fb60QBkraiOFuLxr%2BN8bs3Rg2MR0qHvBtO8DXgt67GcS4oXiJcFVuu4uwV5OFXkcFN2AX7Yh1UWsECorkz%2Fhj5JBvR0Y4JA15m6CjAGgeYCDIl%2BGuAsREFa2SfrA6SKFG3CaTLnBzdsi3KS%2B2xDMRN%2B46L8AS0DAD4MhJi1KrS047h%2BIqnNbqaGMvWsj%2B1oGmqiRt6Fhg4G%2FaxfluyIpIkvFnP%2FeuGrQCMmRriqGDpZ05edDa9H7OxKJ563xVifpO31UyStdLQ%2Fg9GN5ZrJrHZlNzAKE%2Fw%2FW6nexwZ2duqdfPfa2jezThvBz8lEt%2BE6%2BdrCE4j9GzJFP5aAAkoMJ2ZrMQGOqUBssXQku94yQK6qRUNpaz0Bvi3%2Fy0pw67EztWh%2FvHM%2FcmuTXbruUKn9%2BvSsOmqW%2FKw9sQNh2kOEAPKixLbcIF380iIdM%2BoUT0F0R8IVOMa2N9k85fq8wGQCO0133g4M%2FO2qdGBNFDyRsRwMcOgik8H7%2B%2FxCvAJ3B7Xv43xk0wM36JG37vtX6je0j5AkXL7jf9LmLK1oW4MU%2BPlElUW%2BZYgZ8zmhkQ5&X-Amz-Signature=03ae0fcea6bae1f4fb6ce189b56352504ce2541392ac60bde45dd9ecc11a1471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHAOMY3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BPaURRprOlDFXG4mK4PJL2P7rkq4xj52U%2FR%2BtkN0w3AiEA3ESe30grY5TsWfRGL%2B99g1QrJmHwJ3d1u%2Bd%2B2xyp5yIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINQnrOASwAuJW%2FMHSrcA%2BSwtJKoUy0D3758ZYVx%2Faz8C8AjBGJ47%2FTjUsQ2GSYU4dwUoJ5f7eQayOFWfhs8c%2FzeI8Vhk4sSMoZeoqYB6u%2F%2BB2Znnsuh0CzdPz3MHHcdOHfqE42JYjRXEG033mLUT5hdtIBKEF3K7g6VArFs4nTpsfz%2FhcegtOo34JUE3n8VGtpbRvQZ859YM%2FhG5Vqi0Np27U%2FsbOrr1vP8xz%2F4rD6LfN784q5p5%2BrFI2b%2F0Jt9VhkU%2FCh%2BcV3ti6avoMBASAVq7Goi4hXauft77%2B%2F4HXVnZwkOYorhBH7XYldtQ4Fb60QBkraiOFuLxr%2BN8bs3Rg2MR0qHvBtO8DXgt67GcS4oXiJcFVuu4uwV5OFXkcFN2AX7Yh1UWsECorkz%2Fhj5JBvR0Y4JA15m6CjAGgeYCDIl%2BGuAsREFa2SfrA6SKFG3CaTLnBzdsi3KS%2B2xDMRN%2B46L8AS0DAD4MhJi1KrS047h%2BIqnNbqaGMvWsj%2B1oGmqiRt6Fhg4G%2FaxfluyIpIkvFnP%2FeuGrQCMmRriqGDpZ05edDa9H7OxKJ563xVifpO31UyStdLQ%2Fg9GN5ZrJrHZlNzAKE%2Fw%2FW6nexwZ2duqdfPfa2jezThvBz8lEt%2BE6%2BdrCE4j9GzJFP5aAAkoMJ2ZrMQGOqUBssXQku94yQK6qRUNpaz0Bvi3%2Fy0pw67EztWh%2FvHM%2FcmuTXbruUKn9%2BvSsOmqW%2FKw9sQNh2kOEAPKixLbcIF380iIdM%2BoUT0F0R8IVOMa2N9k85fq8wGQCO0133g4M%2FO2qdGBNFDyRsRwMcOgik8H7%2B%2FxCvAJ3B7Xv43xk0wM36JG37vtX6je0j5AkXL7jf9LmLK1oW4MU%2BPlElUW%2BZYgZ8zmhkQ5&X-Amz-Signature=26a1e65e7fdb3c04c79c68f9dec0b7f1aed3a31edbcbb05904c569a5be01a10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
