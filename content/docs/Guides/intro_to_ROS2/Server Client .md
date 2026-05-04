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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSMQRFXC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx6yZkzbWGuFLbvwPtj7oe3atpFOrxsaMApN%2FMsoU4MAiAQb6BOivpk8ZRy2uHbnp19MLEyFcUesXudQO3J2csZ4Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMKt4oB0iHRdPCigxNKtwDtNJmbANtAyEVpVgxQ8zeX2dfMLDId0vphKKzYv%2Baq35KUqeEvB9Lk7ClnCsm7UXInLQMfC%2B8zT%2FGWsqfQqM5CIFebXPg5GgdGh8pzY1uGYYi2g4hNh0bA5%2BioOdij8F01sH31jItO7RmUtG2olpYoCA6QKyLPGQazdKGY%2FRuPOViXmkSsQBfpZP%2F2eKEFec2pVc2cbHLC%2Bp0FnQgm9Cv0Vl3j9ZCIaeQozjBKE2JhAsYNjOGKyoA3UsHI0RbXjEZCoIj33FYERYCjz1xdMNr4k5Tc%2F10d0VwXp5LJzXaZ7KWfU0lUX4HGxWrNT8WA7rWkSrg7cSlxpIf%2BbVi%2BkkFqWQSX7OQEZZo8wga2X7FJgcfZ97D4IXjDxEKWXUu9Ws9jq16Bvylw%2FI2NwYk4NvSsut%2Frf%2BZmRV3MqUI3mkzLWOD8Sd4uurU2icld4A91gLh4SUvDT%2B9Lt2deYIgpTSVmZjP9qXMZg4LXLOYYxNghOP%2FUAJI1kuZZeqS6fBgE1kJQiZAfe5i%2BxEW1OAdy34m%2BSAoZWIfXSPVP71G63er9hT9fSuJLfXaD%2F8FZ0gDeS1YkZxGA7uJaxSMmgX1wdy8gsB%2B3up9hCrBl5iVDOaaXSgyn3wl2f8wYUZOiXcw8%2FbfzwY6pgGk%2FRNluhpPpwXgZ1kTr4vjksUPbWjR70VcnoP%2FgRJQCsdVQrJc4RCu%2BstZHQwnWZK9oqYsjVsqqs6wOCgqwZo%2F%2B96fwAw083tCwJcPH0djvgsltLWnOJnbhc2fYqjKoqD%2FzMx%2BoIcnvXntqiqwLg69BbOdoXzunmPEZlCiTPi5lFsH15MdwBHLVs9bA0ZeOLWLcpWtqO2y5TqJx1LfG9ahTCo8rymA&X-Amz-Signature=b42fb6a0aa4eb7ccb0dce14f511072005d27dc5a39d35babae6198296adf2fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSMQRFXC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx6yZkzbWGuFLbvwPtj7oe3atpFOrxsaMApN%2FMsoU4MAiAQb6BOivpk8ZRy2uHbnp19MLEyFcUesXudQO3J2csZ4Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMKt4oB0iHRdPCigxNKtwDtNJmbANtAyEVpVgxQ8zeX2dfMLDId0vphKKzYv%2Baq35KUqeEvB9Lk7ClnCsm7UXInLQMfC%2B8zT%2FGWsqfQqM5CIFebXPg5GgdGh8pzY1uGYYi2g4hNh0bA5%2BioOdij8F01sH31jItO7RmUtG2olpYoCA6QKyLPGQazdKGY%2FRuPOViXmkSsQBfpZP%2F2eKEFec2pVc2cbHLC%2Bp0FnQgm9Cv0Vl3j9ZCIaeQozjBKE2JhAsYNjOGKyoA3UsHI0RbXjEZCoIj33FYERYCjz1xdMNr4k5Tc%2F10d0VwXp5LJzXaZ7KWfU0lUX4HGxWrNT8WA7rWkSrg7cSlxpIf%2BbVi%2BkkFqWQSX7OQEZZo8wga2X7FJgcfZ97D4IXjDxEKWXUu9Ws9jq16Bvylw%2FI2NwYk4NvSsut%2Frf%2BZmRV3MqUI3mkzLWOD8Sd4uurU2icld4A91gLh4SUvDT%2B9Lt2deYIgpTSVmZjP9qXMZg4LXLOYYxNghOP%2FUAJI1kuZZeqS6fBgE1kJQiZAfe5i%2BxEW1OAdy34m%2BSAoZWIfXSPVP71G63er9hT9fSuJLfXaD%2F8FZ0gDeS1YkZxGA7uJaxSMmgX1wdy8gsB%2B3up9hCrBl5iVDOaaXSgyn3wl2f8wYUZOiXcw8%2FbfzwY6pgGk%2FRNluhpPpwXgZ1kTr4vjksUPbWjR70VcnoP%2FgRJQCsdVQrJc4RCu%2BstZHQwnWZK9oqYsjVsqqs6wOCgqwZo%2F%2B96fwAw083tCwJcPH0djvgsltLWnOJnbhc2fYqjKoqD%2FzMx%2BoIcnvXntqiqwLg69BbOdoXzunmPEZlCiTPi5lFsH15MdwBHLVs9bA0ZeOLWLcpWtqO2y5TqJx1LfG9ahTCo8rymA&X-Amz-Signature=494bdb5afcf2aed898b6aa21aab6b555c166c25dca5b9a885fe882aad8477014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSMQRFXC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx6yZkzbWGuFLbvwPtj7oe3atpFOrxsaMApN%2FMsoU4MAiAQb6BOivpk8ZRy2uHbnp19MLEyFcUesXudQO3J2csZ4Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMKt4oB0iHRdPCigxNKtwDtNJmbANtAyEVpVgxQ8zeX2dfMLDId0vphKKzYv%2Baq35KUqeEvB9Lk7ClnCsm7UXInLQMfC%2B8zT%2FGWsqfQqM5CIFebXPg5GgdGh8pzY1uGYYi2g4hNh0bA5%2BioOdij8F01sH31jItO7RmUtG2olpYoCA6QKyLPGQazdKGY%2FRuPOViXmkSsQBfpZP%2F2eKEFec2pVc2cbHLC%2Bp0FnQgm9Cv0Vl3j9ZCIaeQozjBKE2JhAsYNjOGKyoA3UsHI0RbXjEZCoIj33FYERYCjz1xdMNr4k5Tc%2F10d0VwXp5LJzXaZ7KWfU0lUX4HGxWrNT8WA7rWkSrg7cSlxpIf%2BbVi%2BkkFqWQSX7OQEZZo8wga2X7FJgcfZ97D4IXjDxEKWXUu9Ws9jq16Bvylw%2FI2NwYk4NvSsut%2Frf%2BZmRV3MqUI3mkzLWOD8Sd4uurU2icld4A91gLh4SUvDT%2B9Lt2deYIgpTSVmZjP9qXMZg4LXLOYYxNghOP%2FUAJI1kuZZeqS6fBgE1kJQiZAfe5i%2BxEW1OAdy34m%2BSAoZWIfXSPVP71G63er9hT9fSuJLfXaD%2F8FZ0gDeS1YkZxGA7uJaxSMmgX1wdy8gsB%2B3up9hCrBl5iVDOaaXSgyn3wl2f8wYUZOiXcw8%2FbfzwY6pgGk%2FRNluhpPpwXgZ1kTr4vjksUPbWjR70VcnoP%2FgRJQCsdVQrJc4RCu%2BstZHQwnWZK9oqYsjVsqqs6wOCgqwZo%2F%2B96fwAw083tCwJcPH0djvgsltLWnOJnbhc2fYqjKoqD%2FzMx%2BoIcnvXntqiqwLg69BbOdoXzunmPEZlCiTPi5lFsH15MdwBHLVs9bA0ZeOLWLcpWtqO2y5TqJx1LfG9ahTCo8rymA&X-Amz-Signature=1fb44bddfb5e744e6dde6e680416d705f1d7f3481e73dabd881191c2922f1953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSMQRFXC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx6yZkzbWGuFLbvwPtj7oe3atpFOrxsaMApN%2FMsoU4MAiAQb6BOivpk8ZRy2uHbnp19MLEyFcUesXudQO3J2csZ4Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMKt4oB0iHRdPCigxNKtwDtNJmbANtAyEVpVgxQ8zeX2dfMLDId0vphKKzYv%2Baq35KUqeEvB9Lk7ClnCsm7UXInLQMfC%2B8zT%2FGWsqfQqM5CIFebXPg5GgdGh8pzY1uGYYi2g4hNh0bA5%2BioOdij8F01sH31jItO7RmUtG2olpYoCA6QKyLPGQazdKGY%2FRuPOViXmkSsQBfpZP%2F2eKEFec2pVc2cbHLC%2Bp0FnQgm9Cv0Vl3j9ZCIaeQozjBKE2JhAsYNjOGKyoA3UsHI0RbXjEZCoIj33FYERYCjz1xdMNr4k5Tc%2F10d0VwXp5LJzXaZ7KWfU0lUX4HGxWrNT8WA7rWkSrg7cSlxpIf%2BbVi%2BkkFqWQSX7OQEZZo8wga2X7FJgcfZ97D4IXjDxEKWXUu9Ws9jq16Bvylw%2FI2NwYk4NvSsut%2Frf%2BZmRV3MqUI3mkzLWOD8Sd4uurU2icld4A91gLh4SUvDT%2B9Lt2deYIgpTSVmZjP9qXMZg4LXLOYYxNghOP%2FUAJI1kuZZeqS6fBgE1kJQiZAfe5i%2BxEW1OAdy34m%2BSAoZWIfXSPVP71G63er9hT9fSuJLfXaD%2F8FZ0gDeS1YkZxGA7uJaxSMmgX1wdy8gsB%2B3up9hCrBl5iVDOaaXSgyn3wl2f8wYUZOiXcw8%2FbfzwY6pgGk%2FRNluhpPpwXgZ1kTr4vjksUPbWjR70VcnoP%2FgRJQCsdVQrJc4RCu%2BstZHQwnWZK9oqYsjVsqqs6wOCgqwZo%2F%2B96fwAw083tCwJcPH0djvgsltLWnOJnbhc2fYqjKoqD%2FzMx%2BoIcnvXntqiqwLg69BbOdoXzunmPEZlCiTPi5lFsH15MdwBHLVs9bA0ZeOLWLcpWtqO2y5TqJx1LfG9ahTCo8rymA&X-Amz-Signature=70aafa6314ed8388975861912d01f8cc30717b29787a50ec9735be7a7861c4bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSMQRFXC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx6yZkzbWGuFLbvwPtj7oe3atpFOrxsaMApN%2FMsoU4MAiAQb6BOivpk8ZRy2uHbnp19MLEyFcUesXudQO3J2csZ4Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMKt4oB0iHRdPCigxNKtwDtNJmbANtAyEVpVgxQ8zeX2dfMLDId0vphKKzYv%2Baq35KUqeEvB9Lk7ClnCsm7UXInLQMfC%2B8zT%2FGWsqfQqM5CIFebXPg5GgdGh8pzY1uGYYi2g4hNh0bA5%2BioOdij8F01sH31jItO7RmUtG2olpYoCA6QKyLPGQazdKGY%2FRuPOViXmkSsQBfpZP%2F2eKEFec2pVc2cbHLC%2Bp0FnQgm9Cv0Vl3j9ZCIaeQozjBKE2JhAsYNjOGKyoA3UsHI0RbXjEZCoIj33FYERYCjz1xdMNr4k5Tc%2F10d0VwXp5LJzXaZ7KWfU0lUX4HGxWrNT8WA7rWkSrg7cSlxpIf%2BbVi%2BkkFqWQSX7OQEZZo8wga2X7FJgcfZ97D4IXjDxEKWXUu9Ws9jq16Bvylw%2FI2NwYk4NvSsut%2Frf%2BZmRV3MqUI3mkzLWOD8Sd4uurU2icld4A91gLh4SUvDT%2B9Lt2deYIgpTSVmZjP9qXMZg4LXLOYYxNghOP%2FUAJI1kuZZeqS6fBgE1kJQiZAfe5i%2BxEW1OAdy34m%2BSAoZWIfXSPVP71G63er9hT9fSuJLfXaD%2F8FZ0gDeS1YkZxGA7uJaxSMmgX1wdy8gsB%2B3up9hCrBl5iVDOaaXSgyn3wl2f8wYUZOiXcw8%2FbfzwY6pgGk%2FRNluhpPpwXgZ1kTr4vjksUPbWjR70VcnoP%2FgRJQCsdVQrJc4RCu%2BstZHQwnWZK9oqYsjVsqqs6wOCgqwZo%2F%2B96fwAw083tCwJcPH0djvgsltLWnOJnbhc2fYqjKoqD%2FzMx%2BoIcnvXntqiqwLg69BbOdoXzunmPEZlCiTPi5lFsH15MdwBHLVs9bA0ZeOLWLcpWtqO2y5TqJx1LfG9ahTCo8rymA&X-Amz-Signature=a2b6abced40ce128b59619d33d3293e806228bea7ea48bc2e14b3f381e7c67f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
