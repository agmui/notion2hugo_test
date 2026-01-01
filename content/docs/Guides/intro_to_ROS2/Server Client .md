---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERM6V7R%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQClPF1kHKs3P2Q%2B9jmDNi02u21eUjv3PFMq8Nqkl%2FZAkgIgR1TW0KfDK14yGVOZodfE2vDCMPcazevm2g29%2F2IOEdsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwOWZoi3Q8ngGUnPircA20zAdX2NcBs5l2%2BmVVx831ENv8pdrLbr7qs1LlnGfL7RiBxnH82T6AMriMNqPCuDi4UhCPPrat7GwcFmp1vIVI9hPKiY20qVMeK5Y%2B%2B3sgjlYGda72J3r5dCiQkWtDw7jwGnQyLg70HVyNd0boCn4meeA%2F1D644b2FxSkzThz0uK9v%2FgS5oQPR5Rznpp%2BGCjsd5auufiiTnxqbTGc4uZb1NIFnYmavnGLbpXrQ1cGJRc%2FV2BXIGs4Y%2FHP1MLRZjaqBYC3of7Lg9vW%2FVIYOit%2BCpDPiqx8%2BPCFdT0tv2EBCrY4s5ZKwbvKgmAGd7hP2FCUuCvnOLgt%2FsFvgiuYmSBpJCtkmOzViaumgzM%2B0OhIwPFmWXhP8%2BVrFvA%2BQbwozaj0PmXu5hktyLW9P6n8xTL9K6v9sglr0OqGACFnfxlqFqXJknEwnQ1Aul5aD%2FxQbI8KOXeN2rUx7L%2BNasLZI6bjaMCzlM0noziyr%2B3hcIsuHt1xyIcacGpoX8TUan%2BzmnbavItPqMaQJ2BGjCaBeEidvckJoAgvtCHTKwbI7ClqvzeCuKa63lCZHLabKTHH06oev3RNr88tYhKJKw6KO37ZSODn%2FIC%2F72JDKffiaV1fp8b6t3clRVZQOVsO2CMNGe18oGOqUBvBqeUWLVLU0CpOU4q%2BIN0E8CceXgL9BCpJ1AGW8kbXymkzve3S6tYfn2dEYSbOLlVUM6buT2tVyAGdYvzzv%2B5y3yjZ2KfTyg0W2o%2FfI4zCl9RoRaABdKrGmjhqb9OGZJ2zdSphMv5nDMgbXVJGtphBEmsfSBakGiofGfcVZF1fkdXoBt45PBaNP1RWelAc6ANhBVPofJZEvW4enChfosDACe0J%2Bf&X-Amz-Signature=a4bfaa54638239e9fdc76dd780fd9380b96ed004ec3b72ba47f5825bab2fd860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERM6V7R%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQClPF1kHKs3P2Q%2B9jmDNi02u21eUjv3PFMq8Nqkl%2FZAkgIgR1TW0KfDK14yGVOZodfE2vDCMPcazevm2g29%2F2IOEdsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwOWZoi3Q8ngGUnPircA20zAdX2NcBs5l2%2BmVVx831ENv8pdrLbr7qs1LlnGfL7RiBxnH82T6AMriMNqPCuDi4UhCPPrat7GwcFmp1vIVI9hPKiY20qVMeK5Y%2B%2B3sgjlYGda72J3r5dCiQkWtDw7jwGnQyLg70HVyNd0boCn4meeA%2F1D644b2FxSkzThz0uK9v%2FgS5oQPR5Rznpp%2BGCjsd5auufiiTnxqbTGc4uZb1NIFnYmavnGLbpXrQ1cGJRc%2FV2BXIGs4Y%2FHP1MLRZjaqBYC3of7Lg9vW%2FVIYOit%2BCpDPiqx8%2BPCFdT0tv2EBCrY4s5ZKwbvKgmAGd7hP2FCUuCvnOLgt%2FsFvgiuYmSBpJCtkmOzViaumgzM%2B0OhIwPFmWXhP8%2BVrFvA%2BQbwozaj0PmXu5hktyLW9P6n8xTL9K6v9sglr0OqGACFnfxlqFqXJknEwnQ1Aul5aD%2FxQbI8KOXeN2rUx7L%2BNasLZI6bjaMCzlM0noziyr%2B3hcIsuHt1xyIcacGpoX8TUan%2BzmnbavItPqMaQJ2BGjCaBeEidvckJoAgvtCHTKwbI7ClqvzeCuKa63lCZHLabKTHH06oev3RNr88tYhKJKw6KO37ZSODn%2FIC%2F72JDKffiaV1fp8b6t3clRVZQOVsO2CMNGe18oGOqUBvBqeUWLVLU0CpOU4q%2BIN0E8CceXgL9BCpJ1AGW8kbXymkzve3S6tYfn2dEYSbOLlVUM6buT2tVyAGdYvzzv%2B5y3yjZ2KfTyg0W2o%2FfI4zCl9RoRaABdKrGmjhqb9OGZJ2zdSphMv5nDMgbXVJGtphBEmsfSBakGiofGfcVZF1fkdXoBt45PBaNP1RWelAc6ANhBVPofJZEvW4enChfosDACe0J%2Bf&X-Amz-Signature=dd87a2e0132b27059e6e992bbe18fa6d378d7884739bc4a80eb208760ef31223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERM6V7R%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQClPF1kHKs3P2Q%2B9jmDNi02u21eUjv3PFMq8Nqkl%2FZAkgIgR1TW0KfDK14yGVOZodfE2vDCMPcazevm2g29%2F2IOEdsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwOWZoi3Q8ngGUnPircA20zAdX2NcBs5l2%2BmVVx831ENv8pdrLbr7qs1LlnGfL7RiBxnH82T6AMriMNqPCuDi4UhCPPrat7GwcFmp1vIVI9hPKiY20qVMeK5Y%2B%2B3sgjlYGda72J3r5dCiQkWtDw7jwGnQyLg70HVyNd0boCn4meeA%2F1D644b2FxSkzThz0uK9v%2FgS5oQPR5Rznpp%2BGCjsd5auufiiTnxqbTGc4uZb1NIFnYmavnGLbpXrQ1cGJRc%2FV2BXIGs4Y%2FHP1MLRZjaqBYC3of7Lg9vW%2FVIYOit%2BCpDPiqx8%2BPCFdT0tv2EBCrY4s5ZKwbvKgmAGd7hP2FCUuCvnOLgt%2FsFvgiuYmSBpJCtkmOzViaumgzM%2B0OhIwPFmWXhP8%2BVrFvA%2BQbwozaj0PmXu5hktyLW9P6n8xTL9K6v9sglr0OqGACFnfxlqFqXJknEwnQ1Aul5aD%2FxQbI8KOXeN2rUx7L%2BNasLZI6bjaMCzlM0noziyr%2B3hcIsuHt1xyIcacGpoX8TUan%2BzmnbavItPqMaQJ2BGjCaBeEidvckJoAgvtCHTKwbI7ClqvzeCuKa63lCZHLabKTHH06oev3RNr88tYhKJKw6KO37ZSODn%2FIC%2F72JDKffiaV1fp8b6t3clRVZQOVsO2CMNGe18oGOqUBvBqeUWLVLU0CpOU4q%2BIN0E8CceXgL9BCpJ1AGW8kbXymkzve3S6tYfn2dEYSbOLlVUM6buT2tVyAGdYvzzv%2B5y3yjZ2KfTyg0W2o%2FfI4zCl9RoRaABdKrGmjhqb9OGZJ2zdSphMv5nDMgbXVJGtphBEmsfSBakGiofGfcVZF1fkdXoBt45PBaNP1RWelAc6ANhBVPofJZEvW4enChfosDACe0J%2Bf&X-Amz-Signature=55361925b3a075680f60cbb49d07a587a8f6cffdc8030cbe901d5f6bd18c163d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERM6V7R%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQClPF1kHKs3P2Q%2B9jmDNi02u21eUjv3PFMq8Nqkl%2FZAkgIgR1TW0KfDK14yGVOZodfE2vDCMPcazevm2g29%2F2IOEdsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwOWZoi3Q8ngGUnPircA20zAdX2NcBs5l2%2BmVVx831ENv8pdrLbr7qs1LlnGfL7RiBxnH82T6AMriMNqPCuDi4UhCPPrat7GwcFmp1vIVI9hPKiY20qVMeK5Y%2B%2B3sgjlYGda72J3r5dCiQkWtDw7jwGnQyLg70HVyNd0boCn4meeA%2F1D644b2FxSkzThz0uK9v%2FgS5oQPR5Rznpp%2BGCjsd5auufiiTnxqbTGc4uZb1NIFnYmavnGLbpXrQ1cGJRc%2FV2BXIGs4Y%2FHP1MLRZjaqBYC3of7Lg9vW%2FVIYOit%2BCpDPiqx8%2BPCFdT0tv2EBCrY4s5ZKwbvKgmAGd7hP2FCUuCvnOLgt%2FsFvgiuYmSBpJCtkmOzViaumgzM%2B0OhIwPFmWXhP8%2BVrFvA%2BQbwozaj0PmXu5hktyLW9P6n8xTL9K6v9sglr0OqGACFnfxlqFqXJknEwnQ1Aul5aD%2FxQbI8KOXeN2rUx7L%2BNasLZI6bjaMCzlM0noziyr%2B3hcIsuHt1xyIcacGpoX8TUan%2BzmnbavItPqMaQJ2BGjCaBeEidvckJoAgvtCHTKwbI7ClqvzeCuKa63lCZHLabKTHH06oev3RNr88tYhKJKw6KO37ZSODn%2FIC%2F72JDKffiaV1fp8b6t3clRVZQOVsO2CMNGe18oGOqUBvBqeUWLVLU0CpOU4q%2BIN0E8CceXgL9BCpJ1AGW8kbXymkzve3S6tYfn2dEYSbOLlVUM6buT2tVyAGdYvzzv%2B5y3yjZ2KfTyg0W2o%2FfI4zCl9RoRaABdKrGmjhqb9OGZJ2zdSphMv5nDMgbXVJGtphBEmsfSBakGiofGfcVZF1fkdXoBt45PBaNP1RWelAc6ANhBVPofJZEvW4enChfosDACe0J%2Bf&X-Amz-Signature=085921742f8db35e7b3429b821e83dc1443f6bbd33580c390638ccc40830dcc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERM6V7R%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQClPF1kHKs3P2Q%2B9jmDNi02u21eUjv3PFMq8Nqkl%2FZAkgIgR1TW0KfDK14yGVOZodfE2vDCMPcazevm2g29%2F2IOEdsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwOWZoi3Q8ngGUnPircA20zAdX2NcBs5l2%2BmVVx831ENv8pdrLbr7qs1LlnGfL7RiBxnH82T6AMriMNqPCuDi4UhCPPrat7GwcFmp1vIVI9hPKiY20qVMeK5Y%2B%2B3sgjlYGda72J3r5dCiQkWtDw7jwGnQyLg70HVyNd0boCn4meeA%2F1D644b2FxSkzThz0uK9v%2FgS5oQPR5Rznpp%2BGCjsd5auufiiTnxqbTGc4uZb1NIFnYmavnGLbpXrQ1cGJRc%2FV2BXIGs4Y%2FHP1MLRZjaqBYC3of7Lg9vW%2FVIYOit%2BCpDPiqx8%2BPCFdT0tv2EBCrY4s5ZKwbvKgmAGd7hP2FCUuCvnOLgt%2FsFvgiuYmSBpJCtkmOzViaumgzM%2B0OhIwPFmWXhP8%2BVrFvA%2BQbwozaj0PmXu5hktyLW9P6n8xTL9K6v9sglr0OqGACFnfxlqFqXJknEwnQ1Aul5aD%2FxQbI8KOXeN2rUx7L%2BNasLZI6bjaMCzlM0noziyr%2B3hcIsuHt1xyIcacGpoX8TUan%2BzmnbavItPqMaQJ2BGjCaBeEidvckJoAgvtCHTKwbI7ClqvzeCuKa63lCZHLabKTHH06oev3RNr88tYhKJKw6KO37ZSODn%2FIC%2F72JDKffiaV1fp8b6t3clRVZQOVsO2CMNGe18oGOqUBvBqeUWLVLU0CpOU4q%2BIN0E8CceXgL9BCpJ1AGW8kbXymkzve3S6tYfn2dEYSbOLlVUM6buT2tVyAGdYvzzv%2B5y3yjZ2KfTyg0W2o%2FfI4zCl9RoRaABdKrGmjhqb9OGZJ2zdSphMv5nDMgbXVJGtphBEmsfSBakGiofGfcVZF1fkdXoBt45PBaNP1RWelAc6ANhBVPofJZEvW4enChfosDACe0J%2Bf&X-Amz-Signature=15bee4809734d2a9122b22ed380854336aac101a3c6e254e65259a3bee3d80cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
