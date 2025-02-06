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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4533DFF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIG44qN1miq7PaqnYxqUV8wwFEy89ZPLOeCES1KHU0OCKAiEA9WCLbNpnKd3DCfWq9J6Vb%2BDrfL%2F94Qy%2BzZpUrrE5aokq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDpGN3gvFzCFzixInyrcAwZhrcSBf9W3Rd1BrHj%2BO2ZgmzQ2eaoaSBkrdFKPAz5joD1NySfDjKqMm8JJX1QwfWjM9m4YAbofFxUUyaH8qrlz5QLkfsC0uE8VYSI1fk%2Fpxz9tuFT%2BeHpc%2FLObfK0DBQsPywjFKLcUm%2FmFoyQNSapcOvDB6HUaKbNCrdJgZs4LjU60esTki9MAcv9AnBvwXjaWZ%2BgmUsBrA7Qb0GL5FK3m2j%2BBrtBKLAuUBiKPcgPTP%2BumXLGGFUojYo2Pl219ownOURAW6h83aFPSv6LTWbBIvCr6Fuw%2BR1%2F55au2wK0cBRtgBjjGV0ZLrV7Ef8OjtphewpCoOQalFQzFBzGbrrwtiLMBDe7K3V5%2Bbqrves%2F1cDtkMnXrSJTjvMPBZ89tIJ8resFwFd4scyHL%2B5ImNC48YVFYJ21O9V8VLcTljr0N8pb6J85Mjj1U2FUnvaQ7AmCYkzfAyfRFz0e14wYhh4GcxF5Z%2F8TuTFDDWeTzX93dkw5bmcYZoQ3xUQ5TV94t0%2FqsohXdqQYJ51P%2BAj5Ic4nW%2FJx8nF7oq9SVgADtO%2F%2FqCLvvLxwoER9TjUtOQvoh38vE1bhL60%2BbJFwmbWpyLnv3mmmtSrGmhIFG6iq9Ms1lMYx0Cs4otxbEKkiUMJv7kr0GOqUBe8evZvT%2BgiYAJbNrVjBLrKSh3lryVl1wtcC24%2Bk33Lz9JTJngnTeBBkfi%2FGq3o8weNos5RaKytuvHcNViFVvjFgUd737jwdu22FoZMgipkLWYFRnBm0tEowlN5qNlRT8X%2BTbMP8bVFU%2BXD7kPqiWDdwz4MaFydqRAbj5%2FBUhXYzEGgke47dpH1Ev7w6fUkNe8MhIUPntNDmsQaOpomMPuQdmox%2Bu&X-Amz-Signature=2593b2675d5bc816c42f6d7a86266b110b99d454dc4f5d316e0548f2f337a6b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4533DFF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIG44qN1miq7PaqnYxqUV8wwFEy89ZPLOeCES1KHU0OCKAiEA9WCLbNpnKd3DCfWq9J6Vb%2BDrfL%2F94Qy%2BzZpUrrE5aokq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDpGN3gvFzCFzixInyrcAwZhrcSBf9W3Rd1BrHj%2BO2ZgmzQ2eaoaSBkrdFKPAz5joD1NySfDjKqMm8JJX1QwfWjM9m4YAbofFxUUyaH8qrlz5QLkfsC0uE8VYSI1fk%2Fpxz9tuFT%2BeHpc%2FLObfK0DBQsPywjFKLcUm%2FmFoyQNSapcOvDB6HUaKbNCrdJgZs4LjU60esTki9MAcv9AnBvwXjaWZ%2BgmUsBrA7Qb0GL5FK3m2j%2BBrtBKLAuUBiKPcgPTP%2BumXLGGFUojYo2Pl219ownOURAW6h83aFPSv6LTWbBIvCr6Fuw%2BR1%2F55au2wK0cBRtgBjjGV0ZLrV7Ef8OjtphewpCoOQalFQzFBzGbrrwtiLMBDe7K3V5%2Bbqrves%2F1cDtkMnXrSJTjvMPBZ89tIJ8resFwFd4scyHL%2B5ImNC48YVFYJ21O9V8VLcTljr0N8pb6J85Mjj1U2FUnvaQ7AmCYkzfAyfRFz0e14wYhh4GcxF5Z%2F8TuTFDDWeTzX93dkw5bmcYZoQ3xUQ5TV94t0%2FqsohXdqQYJ51P%2BAj5Ic4nW%2FJx8nF7oq9SVgADtO%2F%2FqCLvvLxwoER9TjUtOQvoh38vE1bhL60%2BbJFwmbWpyLnv3mmmtSrGmhIFG6iq9Ms1lMYx0Cs4otxbEKkiUMJv7kr0GOqUBe8evZvT%2BgiYAJbNrVjBLrKSh3lryVl1wtcC24%2Bk33Lz9JTJngnTeBBkfi%2FGq3o8weNos5RaKytuvHcNViFVvjFgUd737jwdu22FoZMgipkLWYFRnBm0tEowlN5qNlRT8X%2BTbMP8bVFU%2BXD7kPqiWDdwz4MaFydqRAbj5%2FBUhXYzEGgke47dpH1Ev7w6fUkNe8MhIUPntNDmsQaOpomMPuQdmox%2Bu&X-Amz-Signature=2254d41d8c50729a45985403ec92a6af4fc4973ab352a4aaa4d0def3e946f87a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4533DFF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIG44qN1miq7PaqnYxqUV8wwFEy89ZPLOeCES1KHU0OCKAiEA9WCLbNpnKd3DCfWq9J6Vb%2BDrfL%2F94Qy%2BzZpUrrE5aokq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDpGN3gvFzCFzixInyrcAwZhrcSBf9W3Rd1BrHj%2BO2ZgmzQ2eaoaSBkrdFKPAz5joD1NySfDjKqMm8JJX1QwfWjM9m4YAbofFxUUyaH8qrlz5QLkfsC0uE8VYSI1fk%2Fpxz9tuFT%2BeHpc%2FLObfK0DBQsPywjFKLcUm%2FmFoyQNSapcOvDB6HUaKbNCrdJgZs4LjU60esTki9MAcv9AnBvwXjaWZ%2BgmUsBrA7Qb0GL5FK3m2j%2BBrtBKLAuUBiKPcgPTP%2BumXLGGFUojYo2Pl219ownOURAW6h83aFPSv6LTWbBIvCr6Fuw%2BR1%2F55au2wK0cBRtgBjjGV0ZLrV7Ef8OjtphewpCoOQalFQzFBzGbrrwtiLMBDe7K3V5%2Bbqrves%2F1cDtkMnXrSJTjvMPBZ89tIJ8resFwFd4scyHL%2B5ImNC48YVFYJ21O9V8VLcTljr0N8pb6J85Mjj1U2FUnvaQ7AmCYkzfAyfRFz0e14wYhh4GcxF5Z%2F8TuTFDDWeTzX93dkw5bmcYZoQ3xUQ5TV94t0%2FqsohXdqQYJ51P%2BAj5Ic4nW%2FJx8nF7oq9SVgADtO%2F%2FqCLvvLxwoER9TjUtOQvoh38vE1bhL60%2BbJFwmbWpyLnv3mmmtSrGmhIFG6iq9Ms1lMYx0Cs4otxbEKkiUMJv7kr0GOqUBe8evZvT%2BgiYAJbNrVjBLrKSh3lryVl1wtcC24%2Bk33Lz9JTJngnTeBBkfi%2FGq3o8weNos5RaKytuvHcNViFVvjFgUd737jwdu22FoZMgipkLWYFRnBm0tEowlN5qNlRT8X%2BTbMP8bVFU%2BXD7kPqiWDdwz4MaFydqRAbj5%2FBUhXYzEGgke47dpH1Ev7w6fUkNe8MhIUPntNDmsQaOpomMPuQdmox%2Bu&X-Amz-Signature=a9c83f034c3a03c6f0eb0c9e07a8c422979e73ee3d093c7e03d677cbffcfd7f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4533DFF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIG44qN1miq7PaqnYxqUV8wwFEy89ZPLOeCES1KHU0OCKAiEA9WCLbNpnKd3DCfWq9J6Vb%2BDrfL%2F94Qy%2BzZpUrrE5aokq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDpGN3gvFzCFzixInyrcAwZhrcSBf9W3Rd1BrHj%2BO2ZgmzQ2eaoaSBkrdFKPAz5joD1NySfDjKqMm8JJX1QwfWjM9m4YAbofFxUUyaH8qrlz5QLkfsC0uE8VYSI1fk%2Fpxz9tuFT%2BeHpc%2FLObfK0DBQsPywjFKLcUm%2FmFoyQNSapcOvDB6HUaKbNCrdJgZs4LjU60esTki9MAcv9AnBvwXjaWZ%2BgmUsBrA7Qb0GL5FK3m2j%2BBrtBKLAuUBiKPcgPTP%2BumXLGGFUojYo2Pl219ownOURAW6h83aFPSv6LTWbBIvCr6Fuw%2BR1%2F55au2wK0cBRtgBjjGV0ZLrV7Ef8OjtphewpCoOQalFQzFBzGbrrwtiLMBDe7K3V5%2Bbqrves%2F1cDtkMnXrSJTjvMPBZ89tIJ8resFwFd4scyHL%2B5ImNC48YVFYJ21O9V8VLcTljr0N8pb6J85Mjj1U2FUnvaQ7AmCYkzfAyfRFz0e14wYhh4GcxF5Z%2F8TuTFDDWeTzX93dkw5bmcYZoQ3xUQ5TV94t0%2FqsohXdqQYJ51P%2BAj5Ic4nW%2FJx8nF7oq9SVgADtO%2F%2FqCLvvLxwoER9TjUtOQvoh38vE1bhL60%2BbJFwmbWpyLnv3mmmtSrGmhIFG6iq9Ms1lMYx0Cs4otxbEKkiUMJv7kr0GOqUBe8evZvT%2BgiYAJbNrVjBLrKSh3lryVl1wtcC24%2Bk33Lz9JTJngnTeBBkfi%2FGq3o8weNos5RaKytuvHcNViFVvjFgUd737jwdu22FoZMgipkLWYFRnBm0tEowlN5qNlRT8X%2BTbMP8bVFU%2BXD7kPqiWDdwz4MaFydqRAbj5%2FBUhXYzEGgke47dpH1Ev7w6fUkNe8MhIUPntNDmsQaOpomMPuQdmox%2Bu&X-Amz-Signature=b73c4ad2f5db36c97caf7e2d949036c583fb587bc7c981608db3257020deb932&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4533DFF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIG44qN1miq7PaqnYxqUV8wwFEy89ZPLOeCES1KHU0OCKAiEA9WCLbNpnKd3DCfWq9J6Vb%2BDrfL%2F94Qy%2BzZpUrrE5aokq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDpGN3gvFzCFzixInyrcAwZhrcSBf9W3Rd1BrHj%2BO2ZgmzQ2eaoaSBkrdFKPAz5joD1NySfDjKqMm8JJX1QwfWjM9m4YAbofFxUUyaH8qrlz5QLkfsC0uE8VYSI1fk%2Fpxz9tuFT%2BeHpc%2FLObfK0DBQsPywjFKLcUm%2FmFoyQNSapcOvDB6HUaKbNCrdJgZs4LjU60esTki9MAcv9AnBvwXjaWZ%2BgmUsBrA7Qb0GL5FK3m2j%2BBrtBKLAuUBiKPcgPTP%2BumXLGGFUojYo2Pl219ownOURAW6h83aFPSv6LTWbBIvCr6Fuw%2BR1%2F55au2wK0cBRtgBjjGV0ZLrV7Ef8OjtphewpCoOQalFQzFBzGbrrwtiLMBDe7K3V5%2Bbqrves%2F1cDtkMnXrSJTjvMPBZ89tIJ8resFwFd4scyHL%2B5ImNC48YVFYJ21O9V8VLcTljr0N8pb6J85Mjj1U2FUnvaQ7AmCYkzfAyfRFz0e14wYhh4GcxF5Z%2F8TuTFDDWeTzX93dkw5bmcYZoQ3xUQ5TV94t0%2FqsohXdqQYJ51P%2BAj5Ic4nW%2FJx8nF7oq9SVgADtO%2F%2FqCLvvLxwoER9TjUtOQvoh38vE1bhL60%2BbJFwmbWpyLnv3mmmtSrGmhIFG6iq9Ms1lMYx0Cs4otxbEKkiUMJv7kr0GOqUBe8evZvT%2BgiYAJbNrVjBLrKSh3lryVl1wtcC24%2Bk33Lz9JTJngnTeBBkfi%2FGq3o8weNos5RaKytuvHcNViFVvjFgUd737jwdu22FoZMgipkLWYFRnBm0tEowlN5qNlRT8X%2BTbMP8bVFU%2BXD7kPqiWDdwz4MaFydqRAbj5%2FBUhXYzEGgke47dpH1Ev7w6fUkNe8MhIUPntNDmsQaOpomMPuQdmox%2Bu&X-Amz-Signature=522083b9d76e3d561d417b0d81f222a803d6d5de93bf227a3aac6868334945e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
