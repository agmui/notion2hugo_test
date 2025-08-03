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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XK4GKD2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAzI%2Fp8wZSSqfKfj3cnh5v06COfTpHAoQ5VwifBp%2B71QIgdEitjJqIscvIEOcVxmO%2FBDEsmT%2BFJt9HmICTBB69HZcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBDElmI2ZkKKDnxJaSrcA4iND42bYIRBp%2FNFfNhkT2soBGEwklmCnXv9GnSWHzjw9fwS4MRfmaVeAq%2F%2FuihkWpIoyZCWc44xw2pX%2BAR%2BFKXtiv17SdYt4l29YFJmzqw1Cf%2FJqb8HMfw%2Fo1Efvsv3BvE5Yq27qjfVO6UMDwfijhHWu0R2njw%2BpyuwmGmUtjhb9wvavX%2B%2FkxLH8x8LyuVeibMI12pwboUVDQTSZgj3PHNaWvSVVnod7LWUrwevmkzzR0yclkb7shpZSa6%2BYoxiyQ1NpPw9TT%2BptItunGJ8J7fG%2B5i1xCrFbtWDG8wLFPjmXWqr6W1L0UmehfayjOhWyqyiOInBAUTFYysfKnt5%2Bsrj%2FLye7TsvODtwGy%2Bx9yEozvUP7XVoHJ2P4CETCNDNjzfYk%2BYCb8eeGK3%2B0Dj79tDXcGtnp8v2laFRXfjj2j1BD0gHab8%2BIjh7tBRbZO4ByfR6Op7wP2N8%2FZkxh%2FbtzaR3EW8akWM0X7WWBiNVFi9esxyhTlzCWCW6aCHW3%2B1OCXFnlfiEnloW7WP8DcnmugyGFNNCJly0hpE9uuPv1qGPCbPDbw%2BHWb7WhvWoD5%2BTmD2qVtJQAF0TlXTo%2BBKYGneI9paKx6cmoeXOuAKfX11HEwy8OavTpOqP5sCyMJDSvcQGOqUBPKIIu4DobsKEnzWcZc9LmE3snn43i3F2xlbTdJvmaxm1VgaBe2KdiL9rPCY9EQGB59nBa4gah%2FwnzE1EglhI4YX%2FrKG1v9p%2Br2D5F85qsmCVzT85k2iwbwfAG%2FNhDu7GQM0ibG%2FnkmXQfXAD9PwRp8jHBHkruM2UDvPILQI%2F6hemRGLqlMTMRR6hB86grqFRncvkEKYzVuN4CJxBDPKVqZlqVpQy&X-Amz-Signature=631fdc5524f3ff1067ae4bf29745f38d9ffe967485de9e1504c2b22ccf99c1aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XK4GKD2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAzI%2Fp8wZSSqfKfj3cnh5v06COfTpHAoQ5VwifBp%2B71QIgdEitjJqIscvIEOcVxmO%2FBDEsmT%2BFJt9HmICTBB69HZcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBDElmI2ZkKKDnxJaSrcA4iND42bYIRBp%2FNFfNhkT2soBGEwklmCnXv9GnSWHzjw9fwS4MRfmaVeAq%2F%2FuihkWpIoyZCWc44xw2pX%2BAR%2BFKXtiv17SdYt4l29YFJmzqw1Cf%2FJqb8HMfw%2Fo1Efvsv3BvE5Yq27qjfVO6UMDwfijhHWu0R2njw%2BpyuwmGmUtjhb9wvavX%2B%2FkxLH8x8LyuVeibMI12pwboUVDQTSZgj3PHNaWvSVVnod7LWUrwevmkzzR0yclkb7shpZSa6%2BYoxiyQ1NpPw9TT%2BptItunGJ8J7fG%2B5i1xCrFbtWDG8wLFPjmXWqr6W1L0UmehfayjOhWyqyiOInBAUTFYysfKnt5%2Bsrj%2FLye7TsvODtwGy%2Bx9yEozvUP7XVoHJ2P4CETCNDNjzfYk%2BYCb8eeGK3%2B0Dj79tDXcGtnp8v2laFRXfjj2j1BD0gHab8%2BIjh7tBRbZO4ByfR6Op7wP2N8%2FZkxh%2FbtzaR3EW8akWM0X7WWBiNVFi9esxyhTlzCWCW6aCHW3%2B1OCXFnlfiEnloW7WP8DcnmugyGFNNCJly0hpE9uuPv1qGPCbPDbw%2BHWb7WhvWoD5%2BTmD2qVtJQAF0TlXTo%2BBKYGneI9paKx6cmoeXOuAKfX11HEwy8OavTpOqP5sCyMJDSvcQGOqUBPKIIu4DobsKEnzWcZc9LmE3snn43i3F2xlbTdJvmaxm1VgaBe2KdiL9rPCY9EQGB59nBa4gah%2FwnzE1EglhI4YX%2FrKG1v9p%2Br2D5F85qsmCVzT85k2iwbwfAG%2FNhDu7GQM0ibG%2FnkmXQfXAD9PwRp8jHBHkruM2UDvPILQI%2F6hemRGLqlMTMRR6hB86grqFRncvkEKYzVuN4CJxBDPKVqZlqVpQy&X-Amz-Signature=200717c2d0f81fdb3e9af182032e64c7f8f0690658684166cc87ca573b5d8546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XK4GKD2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAzI%2Fp8wZSSqfKfj3cnh5v06COfTpHAoQ5VwifBp%2B71QIgdEitjJqIscvIEOcVxmO%2FBDEsmT%2BFJt9HmICTBB69HZcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBDElmI2ZkKKDnxJaSrcA4iND42bYIRBp%2FNFfNhkT2soBGEwklmCnXv9GnSWHzjw9fwS4MRfmaVeAq%2F%2FuihkWpIoyZCWc44xw2pX%2BAR%2BFKXtiv17SdYt4l29YFJmzqw1Cf%2FJqb8HMfw%2Fo1Efvsv3BvE5Yq27qjfVO6UMDwfijhHWu0R2njw%2BpyuwmGmUtjhb9wvavX%2B%2FkxLH8x8LyuVeibMI12pwboUVDQTSZgj3PHNaWvSVVnod7LWUrwevmkzzR0yclkb7shpZSa6%2BYoxiyQ1NpPw9TT%2BptItunGJ8J7fG%2B5i1xCrFbtWDG8wLFPjmXWqr6W1L0UmehfayjOhWyqyiOInBAUTFYysfKnt5%2Bsrj%2FLye7TsvODtwGy%2Bx9yEozvUP7XVoHJ2P4CETCNDNjzfYk%2BYCb8eeGK3%2B0Dj79tDXcGtnp8v2laFRXfjj2j1BD0gHab8%2BIjh7tBRbZO4ByfR6Op7wP2N8%2FZkxh%2FbtzaR3EW8akWM0X7WWBiNVFi9esxyhTlzCWCW6aCHW3%2B1OCXFnlfiEnloW7WP8DcnmugyGFNNCJly0hpE9uuPv1qGPCbPDbw%2BHWb7WhvWoD5%2BTmD2qVtJQAF0TlXTo%2BBKYGneI9paKx6cmoeXOuAKfX11HEwy8OavTpOqP5sCyMJDSvcQGOqUBPKIIu4DobsKEnzWcZc9LmE3snn43i3F2xlbTdJvmaxm1VgaBe2KdiL9rPCY9EQGB59nBa4gah%2FwnzE1EglhI4YX%2FrKG1v9p%2Br2D5F85qsmCVzT85k2iwbwfAG%2FNhDu7GQM0ibG%2FnkmXQfXAD9PwRp8jHBHkruM2UDvPILQI%2F6hemRGLqlMTMRR6hB86grqFRncvkEKYzVuN4CJxBDPKVqZlqVpQy&X-Amz-Signature=c9bd6096679d10f93317de31d3f8a0f2a2a0864f89e408d857ac42de4f3e03df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XK4GKD2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAzI%2Fp8wZSSqfKfj3cnh5v06COfTpHAoQ5VwifBp%2B71QIgdEitjJqIscvIEOcVxmO%2FBDEsmT%2BFJt9HmICTBB69HZcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBDElmI2ZkKKDnxJaSrcA4iND42bYIRBp%2FNFfNhkT2soBGEwklmCnXv9GnSWHzjw9fwS4MRfmaVeAq%2F%2FuihkWpIoyZCWc44xw2pX%2BAR%2BFKXtiv17SdYt4l29YFJmzqw1Cf%2FJqb8HMfw%2Fo1Efvsv3BvE5Yq27qjfVO6UMDwfijhHWu0R2njw%2BpyuwmGmUtjhb9wvavX%2B%2FkxLH8x8LyuVeibMI12pwboUVDQTSZgj3PHNaWvSVVnod7LWUrwevmkzzR0yclkb7shpZSa6%2BYoxiyQ1NpPw9TT%2BptItunGJ8J7fG%2B5i1xCrFbtWDG8wLFPjmXWqr6W1L0UmehfayjOhWyqyiOInBAUTFYysfKnt5%2Bsrj%2FLye7TsvODtwGy%2Bx9yEozvUP7XVoHJ2P4CETCNDNjzfYk%2BYCb8eeGK3%2B0Dj79tDXcGtnp8v2laFRXfjj2j1BD0gHab8%2BIjh7tBRbZO4ByfR6Op7wP2N8%2FZkxh%2FbtzaR3EW8akWM0X7WWBiNVFi9esxyhTlzCWCW6aCHW3%2B1OCXFnlfiEnloW7WP8DcnmugyGFNNCJly0hpE9uuPv1qGPCbPDbw%2BHWb7WhvWoD5%2BTmD2qVtJQAF0TlXTo%2BBKYGneI9paKx6cmoeXOuAKfX11HEwy8OavTpOqP5sCyMJDSvcQGOqUBPKIIu4DobsKEnzWcZc9LmE3snn43i3F2xlbTdJvmaxm1VgaBe2KdiL9rPCY9EQGB59nBa4gah%2FwnzE1EglhI4YX%2FrKG1v9p%2Br2D5F85qsmCVzT85k2iwbwfAG%2FNhDu7GQM0ibG%2FnkmXQfXAD9PwRp8jHBHkruM2UDvPILQI%2F6hemRGLqlMTMRR6hB86grqFRncvkEKYzVuN4CJxBDPKVqZlqVpQy&X-Amz-Signature=6918f46d32fdb10a778e79637ee76bfd5d09313800b5b5466431d994c66e085f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XK4GKD2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAzI%2Fp8wZSSqfKfj3cnh5v06COfTpHAoQ5VwifBp%2B71QIgdEitjJqIscvIEOcVxmO%2FBDEsmT%2BFJt9HmICTBB69HZcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBDElmI2ZkKKDnxJaSrcA4iND42bYIRBp%2FNFfNhkT2soBGEwklmCnXv9GnSWHzjw9fwS4MRfmaVeAq%2F%2FuihkWpIoyZCWc44xw2pX%2BAR%2BFKXtiv17SdYt4l29YFJmzqw1Cf%2FJqb8HMfw%2Fo1Efvsv3BvE5Yq27qjfVO6UMDwfijhHWu0R2njw%2BpyuwmGmUtjhb9wvavX%2B%2FkxLH8x8LyuVeibMI12pwboUVDQTSZgj3PHNaWvSVVnod7LWUrwevmkzzR0yclkb7shpZSa6%2BYoxiyQ1NpPw9TT%2BptItunGJ8J7fG%2B5i1xCrFbtWDG8wLFPjmXWqr6W1L0UmehfayjOhWyqyiOInBAUTFYysfKnt5%2Bsrj%2FLye7TsvODtwGy%2Bx9yEozvUP7XVoHJ2P4CETCNDNjzfYk%2BYCb8eeGK3%2B0Dj79tDXcGtnp8v2laFRXfjj2j1BD0gHab8%2BIjh7tBRbZO4ByfR6Op7wP2N8%2FZkxh%2FbtzaR3EW8akWM0X7WWBiNVFi9esxyhTlzCWCW6aCHW3%2B1OCXFnlfiEnloW7WP8DcnmugyGFNNCJly0hpE9uuPv1qGPCbPDbw%2BHWb7WhvWoD5%2BTmD2qVtJQAF0TlXTo%2BBKYGneI9paKx6cmoeXOuAKfX11HEwy8OavTpOqP5sCyMJDSvcQGOqUBPKIIu4DobsKEnzWcZc9LmE3snn43i3F2xlbTdJvmaxm1VgaBe2KdiL9rPCY9EQGB59nBa4gah%2FwnzE1EglhI4YX%2FrKG1v9p%2Br2D5F85qsmCVzT85k2iwbwfAG%2FNhDu7GQM0ibG%2FnkmXQfXAD9PwRp8jHBHkruM2UDvPILQI%2F6hemRGLqlMTMRR6hB86grqFRncvkEKYzVuN4CJxBDPKVqZlqVpQy&X-Amz-Signature=10172a19560f60c2935ec35650af020e52e5e953784bb126d64dfab2cec9a004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
