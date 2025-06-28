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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SKXK2U4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkK3PGuH87%2FgBH%2FP3Yi6nEDuueNLfrPyh0n6HYtqUTXgIgfrvWtLhk1IN%2F0w79gB%2FbHVP%2BhD%2BL1qg7qa1IFOfiCz0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7rZx5GH39NOfDDpCrcA6gh8SIPiDH7Xq9UVroS5bIPc7t6PELiPwdU1NJ2OeS7icg5pfHXOkFA7979L44XKKq5fCm53uS7FdL%2BiCdTWsaxk%2FuOCUXFNHyMmuu96MfcEeTcLpF79ZBhBzCPvQhAcRyXYRzTfH6dV%2BQ3Jock81w8tqu8k9U2W%2BCjrOBrKHXguOF2bfaFjIOon03f0uLP7V77zAXIuU5NNzCsfWzJSHhemIQgkuX%2FtAuWQ1YisWZbhcu3rPt4vXQZjOrmwX2QhTRkahKyUo7Pokc29dMYNxQ6Bbvs4v1wr0Ohng6GkvPco0tmEJW1aC1CC1arNRd%2B13SBZwP0Gk9%2BpZrZmEbCM5hpDmvFC%2FIkNKvbRasWQ5Ef9b2UfUE0Uv9JS2A1Av%2F7md11BT4X66cShd8Y3WV8ftknwPJLFrs88%2FBMCfodi5e6m1F7TId3HG%2BuFC4EhGiXKrqMpVFM8ED4YE%2B8mF2sKuPCeXEwm5Mc6IfqMQnWMiFskhWdjVNJfQTOgmdiKc48uuQGGgFCIJVrBVfcE7ThU%2FIrAfnqvbqUwVq2kNUf%2Fyb0ejgeaYlKfS7rNdmeeluriZf%2FY0rcoMQmeGZ80io370GT9qsTJM2iC38fUq5Og6wK6bGXq6tHYrIXWFsuMOqQ%2F8IGOqUB35EmkIbvJmn3VSWiOq%2F8WSsDSALwUA%2BHSmr%2FBjReaGh%2BLiS436IUrRd8IEnMNImTe8grd272D60F11jtVMCeC9TUE%2FFX4hRqSsjWKx6QUveJkwwNSuwKgh%2BwgEwJn1C48kMofExe38kB893DeLgvaC8h%2BtR2nUreKi6nN5FC2qj3yvsQ13c4H2iN1KILW%2BP1qyhVqmc1ha3rJI6o1gK56j1klzLM&X-Amz-Signature=7767db698eb751d747b9dcfc40db193bef1b715e601edf19a3e6667d14cf2b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SKXK2U4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkK3PGuH87%2FgBH%2FP3Yi6nEDuueNLfrPyh0n6HYtqUTXgIgfrvWtLhk1IN%2F0w79gB%2FbHVP%2BhD%2BL1qg7qa1IFOfiCz0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7rZx5GH39NOfDDpCrcA6gh8SIPiDH7Xq9UVroS5bIPc7t6PELiPwdU1NJ2OeS7icg5pfHXOkFA7979L44XKKq5fCm53uS7FdL%2BiCdTWsaxk%2FuOCUXFNHyMmuu96MfcEeTcLpF79ZBhBzCPvQhAcRyXYRzTfH6dV%2BQ3Jock81w8tqu8k9U2W%2BCjrOBrKHXguOF2bfaFjIOon03f0uLP7V77zAXIuU5NNzCsfWzJSHhemIQgkuX%2FtAuWQ1YisWZbhcu3rPt4vXQZjOrmwX2QhTRkahKyUo7Pokc29dMYNxQ6Bbvs4v1wr0Ohng6GkvPco0tmEJW1aC1CC1arNRd%2B13SBZwP0Gk9%2BpZrZmEbCM5hpDmvFC%2FIkNKvbRasWQ5Ef9b2UfUE0Uv9JS2A1Av%2F7md11BT4X66cShd8Y3WV8ftknwPJLFrs88%2FBMCfodi5e6m1F7TId3HG%2BuFC4EhGiXKrqMpVFM8ED4YE%2B8mF2sKuPCeXEwm5Mc6IfqMQnWMiFskhWdjVNJfQTOgmdiKc48uuQGGgFCIJVrBVfcE7ThU%2FIrAfnqvbqUwVq2kNUf%2Fyb0ejgeaYlKfS7rNdmeeluriZf%2FY0rcoMQmeGZ80io370GT9qsTJM2iC38fUq5Og6wK6bGXq6tHYrIXWFsuMOqQ%2F8IGOqUB35EmkIbvJmn3VSWiOq%2F8WSsDSALwUA%2BHSmr%2FBjReaGh%2BLiS436IUrRd8IEnMNImTe8grd272D60F11jtVMCeC9TUE%2FFX4hRqSsjWKx6QUveJkwwNSuwKgh%2BwgEwJn1C48kMofExe38kB893DeLgvaC8h%2BtR2nUreKi6nN5FC2qj3yvsQ13c4H2iN1KILW%2BP1qyhVqmc1ha3rJI6o1gK56j1klzLM&X-Amz-Signature=55b6f5c5b0b1229ee3792d6a29ebf206061a76371749472487dab6c38cd632ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SKXK2U4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkK3PGuH87%2FgBH%2FP3Yi6nEDuueNLfrPyh0n6HYtqUTXgIgfrvWtLhk1IN%2F0w79gB%2FbHVP%2BhD%2BL1qg7qa1IFOfiCz0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7rZx5GH39NOfDDpCrcA6gh8SIPiDH7Xq9UVroS5bIPc7t6PELiPwdU1NJ2OeS7icg5pfHXOkFA7979L44XKKq5fCm53uS7FdL%2BiCdTWsaxk%2FuOCUXFNHyMmuu96MfcEeTcLpF79ZBhBzCPvQhAcRyXYRzTfH6dV%2BQ3Jock81w8tqu8k9U2W%2BCjrOBrKHXguOF2bfaFjIOon03f0uLP7V77zAXIuU5NNzCsfWzJSHhemIQgkuX%2FtAuWQ1YisWZbhcu3rPt4vXQZjOrmwX2QhTRkahKyUo7Pokc29dMYNxQ6Bbvs4v1wr0Ohng6GkvPco0tmEJW1aC1CC1arNRd%2B13SBZwP0Gk9%2BpZrZmEbCM5hpDmvFC%2FIkNKvbRasWQ5Ef9b2UfUE0Uv9JS2A1Av%2F7md11BT4X66cShd8Y3WV8ftknwPJLFrs88%2FBMCfodi5e6m1F7TId3HG%2BuFC4EhGiXKrqMpVFM8ED4YE%2B8mF2sKuPCeXEwm5Mc6IfqMQnWMiFskhWdjVNJfQTOgmdiKc48uuQGGgFCIJVrBVfcE7ThU%2FIrAfnqvbqUwVq2kNUf%2Fyb0ejgeaYlKfS7rNdmeeluriZf%2FY0rcoMQmeGZ80io370GT9qsTJM2iC38fUq5Og6wK6bGXq6tHYrIXWFsuMOqQ%2F8IGOqUB35EmkIbvJmn3VSWiOq%2F8WSsDSALwUA%2BHSmr%2FBjReaGh%2BLiS436IUrRd8IEnMNImTe8grd272D60F11jtVMCeC9TUE%2FFX4hRqSsjWKx6QUveJkwwNSuwKgh%2BwgEwJn1C48kMofExe38kB893DeLgvaC8h%2BtR2nUreKi6nN5FC2qj3yvsQ13c4H2iN1KILW%2BP1qyhVqmc1ha3rJI6o1gK56j1klzLM&X-Amz-Signature=21421b0f6690e73f9c2a65294c7cb4523ecdae260b64f7d856bec9264f0efb6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SKXK2U4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkK3PGuH87%2FgBH%2FP3Yi6nEDuueNLfrPyh0n6HYtqUTXgIgfrvWtLhk1IN%2F0w79gB%2FbHVP%2BhD%2BL1qg7qa1IFOfiCz0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7rZx5GH39NOfDDpCrcA6gh8SIPiDH7Xq9UVroS5bIPc7t6PELiPwdU1NJ2OeS7icg5pfHXOkFA7979L44XKKq5fCm53uS7FdL%2BiCdTWsaxk%2FuOCUXFNHyMmuu96MfcEeTcLpF79ZBhBzCPvQhAcRyXYRzTfH6dV%2BQ3Jock81w8tqu8k9U2W%2BCjrOBrKHXguOF2bfaFjIOon03f0uLP7V77zAXIuU5NNzCsfWzJSHhemIQgkuX%2FtAuWQ1YisWZbhcu3rPt4vXQZjOrmwX2QhTRkahKyUo7Pokc29dMYNxQ6Bbvs4v1wr0Ohng6GkvPco0tmEJW1aC1CC1arNRd%2B13SBZwP0Gk9%2BpZrZmEbCM5hpDmvFC%2FIkNKvbRasWQ5Ef9b2UfUE0Uv9JS2A1Av%2F7md11BT4X66cShd8Y3WV8ftknwPJLFrs88%2FBMCfodi5e6m1F7TId3HG%2BuFC4EhGiXKrqMpVFM8ED4YE%2B8mF2sKuPCeXEwm5Mc6IfqMQnWMiFskhWdjVNJfQTOgmdiKc48uuQGGgFCIJVrBVfcE7ThU%2FIrAfnqvbqUwVq2kNUf%2Fyb0ejgeaYlKfS7rNdmeeluriZf%2FY0rcoMQmeGZ80io370GT9qsTJM2iC38fUq5Og6wK6bGXq6tHYrIXWFsuMOqQ%2F8IGOqUB35EmkIbvJmn3VSWiOq%2F8WSsDSALwUA%2BHSmr%2FBjReaGh%2BLiS436IUrRd8IEnMNImTe8grd272D60F11jtVMCeC9TUE%2FFX4hRqSsjWKx6QUveJkwwNSuwKgh%2BwgEwJn1C48kMofExe38kB893DeLgvaC8h%2BtR2nUreKi6nN5FC2qj3yvsQ13c4H2iN1KILW%2BP1qyhVqmc1ha3rJI6o1gK56j1klzLM&X-Amz-Signature=140fcfed8bdb66aeb7adc7fa3f5d9809dba3b618a7cf29c893f243c78d54e5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SKXK2U4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkK3PGuH87%2FgBH%2FP3Yi6nEDuueNLfrPyh0n6HYtqUTXgIgfrvWtLhk1IN%2F0w79gB%2FbHVP%2BhD%2BL1qg7qa1IFOfiCz0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7rZx5GH39NOfDDpCrcA6gh8SIPiDH7Xq9UVroS5bIPc7t6PELiPwdU1NJ2OeS7icg5pfHXOkFA7979L44XKKq5fCm53uS7FdL%2BiCdTWsaxk%2FuOCUXFNHyMmuu96MfcEeTcLpF79ZBhBzCPvQhAcRyXYRzTfH6dV%2BQ3Jock81w8tqu8k9U2W%2BCjrOBrKHXguOF2bfaFjIOon03f0uLP7V77zAXIuU5NNzCsfWzJSHhemIQgkuX%2FtAuWQ1YisWZbhcu3rPt4vXQZjOrmwX2QhTRkahKyUo7Pokc29dMYNxQ6Bbvs4v1wr0Ohng6GkvPco0tmEJW1aC1CC1arNRd%2B13SBZwP0Gk9%2BpZrZmEbCM5hpDmvFC%2FIkNKvbRasWQ5Ef9b2UfUE0Uv9JS2A1Av%2F7md11BT4X66cShd8Y3WV8ftknwPJLFrs88%2FBMCfodi5e6m1F7TId3HG%2BuFC4EhGiXKrqMpVFM8ED4YE%2B8mF2sKuPCeXEwm5Mc6IfqMQnWMiFskhWdjVNJfQTOgmdiKc48uuQGGgFCIJVrBVfcE7ThU%2FIrAfnqvbqUwVq2kNUf%2Fyb0ejgeaYlKfS7rNdmeeluriZf%2FY0rcoMQmeGZ80io370GT9qsTJM2iC38fUq5Og6wK6bGXq6tHYrIXWFsuMOqQ%2F8IGOqUB35EmkIbvJmn3VSWiOq%2F8WSsDSALwUA%2BHSmr%2FBjReaGh%2BLiS436IUrRd8IEnMNImTe8grd272D60F11jtVMCeC9TUE%2FFX4hRqSsjWKx6QUveJkwwNSuwKgh%2BwgEwJn1C48kMofExe38kB893DeLgvaC8h%2BtR2nUreKi6nN5FC2qj3yvsQ13c4H2iN1KILW%2BP1qyhVqmc1ha3rJI6o1gK56j1klzLM&X-Amz-Signature=a7065dfe9fe9065ee6e900b7e12c2fb21ff0584b8246393980182c7d6bc422c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
