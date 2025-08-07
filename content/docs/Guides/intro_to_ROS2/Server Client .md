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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBH5APO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBrl2MwOYhu77zMh%2FlI0D52TxfZKMZlZB6IMhyrcwo%2FeAiEAxSRwNtGLZDhXA4tf4T7%2FDyrgU4cIGwHXYyH80Ie0AEUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJa0NLueQbpElMf2SrcA6JxsVx1ou4%2BHRPF%2BqZ0yvyiUoSYk5q0MRVcfx94rhThiRjljkKx3fzmQ4KgTWZMhWvIqLGstYPWnyj%2BuzkpSBtEi%2FxPblobuXvuOzrLA7KMS%2B3n1Z3zIVA46D5ejXdSRpuKyl%2Bnv0sdsIHlMk0jSQ5KiHn1XuxP%2BnsN3vg%2B8xoyq0U50qCDk1Tf5DrABK424zJphBPEhuyg8ePFGyxI8BuAjkC4wZWuCd9LOSwqSQxzxit%2Fmh%2FWskvisDkWpK%2B0LOubCf8zJ6mysoVnxHL2uNTF0x0OjzGOxaqrB9jdUg6YfTSqa%2FtaQOG2hLI7Cbc3r2z2JXr82D5lIyRGXeRySWu8ZKT8VHCUSR2NW211pjAF4iy0SX%2FSse40ZHdHhGfW9f35%2FQca0qmqwk%2FnWfGFanYJReTgA2WJuwZXS21IIvoc5F4JyyEObju3gG6v5%2FVhidgfJ8cinKF7bcEJ%2Fi0LQ293GnZ4i6DHVHoh3FXK46lw6Jts8Zxs936zVOwAf%2FTVMZCsmlowdr3C06JAIhxWaYUIoDsQy7I2EDEsDkwjXDhWAtWcB%2BYyJqu592pa2aRul7BhJ0g%2FR3T2K3f0nKzzceioaFduD5mWHE1FfAOicqh0%2Bu20m74nCq0rTJtEMK7u08QGOqUBFDYRhpzxIqXxLNyEjar0tJYFOkxU0Yt6z4J6cdT73GmL6hl8%2BWUBwglB3ruC0bWZInNzF5rUup%2BV9SHLfRV1pYs3t7NpaYiDr9RN7EBIwt5c7DnL1st184dNmhjVd7V%2B9IEKIZ4jtBxNys93VSL2EpP3ETtgz0kP9Izipqu%2F7jr%2F%2FoGmsbKELDgeOjb%2Bo72YyXFZNNXbId9lMRl4ZNBnysSropLv&X-Amz-Signature=8a586a91f99cccd4391878266da5a5dbee2a592e651803b7eae933f932270a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBH5APO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBrl2MwOYhu77zMh%2FlI0D52TxfZKMZlZB6IMhyrcwo%2FeAiEAxSRwNtGLZDhXA4tf4T7%2FDyrgU4cIGwHXYyH80Ie0AEUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJa0NLueQbpElMf2SrcA6JxsVx1ou4%2BHRPF%2BqZ0yvyiUoSYk5q0MRVcfx94rhThiRjljkKx3fzmQ4KgTWZMhWvIqLGstYPWnyj%2BuzkpSBtEi%2FxPblobuXvuOzrLA7KMS%2B3n1Z3zIVA46D5ejXdSRpuKyl%2Bnv0sdsIHlMk0jSQ5KiHn1XuxP%2BnsN3vg%2B8xoyq0U50qCDk1Tf5DrABK424zJphBPEhuyg8ePFGyxI8BuAjkC4wZWuCd9LOSwqSQxzxit%2Fmh%2FWskvisDkWpK%2B0LOubCf8zJ6mysoVnxHL2uNTF0x0OjzGOxaqrB9jdUg6YfTSqa%2FtaQOG2hLI7Cbc3r2z2JXr82D5lIyRGXeRySWu8ZKT8VHCUSR2NW211pjAF4iy0SX%2FSse40ZHdHhGfW9f35%2FQca0qmqwk%2FnWfGFanYJReTgA2WJuwZXS21IIvoc5F4JyyEObju3gG6v5%2FVhidgfJ8cinKF7bcEJ%2Fi0LQ293GnZ4i6DHVHoh3FXK46lw6Jts8Zxs936zVOwAf%2FTVMZCsmlowdr3C06JAIhxWaYUIoDsQy7I2EDEsDkwjXDhWAtWcB%2BYyJqu592pa2aRul7BhJ0g%2FR3T2K3f0nKzzceioaFduD5mWHE1FfAOicqh0%2Bu20m74nCq0rTJtEMK7u08QGOqUBFDYRhpzxIqXxLNyEjar0tJYFOkxU0Yt6z4J6cdT73GmL6hl8%2BWUBwglB3ruC0bWZInNzF5rUup%2BV9SHLfRV1pYs3t7NpaYiDr9RN7EBIwt5c7DnL1st184dNmhjVd7V%2B9IEKIZ4jtBxNys93VSL2EpP3ETtgz0kP9Izipqu%2F7jr%2F%2FoGmsbKELDgeOjb%2Bo72YyXFZNNXbId9lMRl4ZNBnysSropLv&X-Amz-Signature=2c55f59ec3150041abf7464dc982df831d533009f3dfcf5d3404d09447d8e71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBH5APO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBrl2MwOYhu77zMh%2FlI0D52TxfZKMZlZB6IMhyrcwo%2FeAiEAxSRwNtGLZDhXA4tf4T7%2FDyrgU4cIGwHXYyH80Ie0AEUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJa0NLueQbpElMf2SrcA6JxsVx1ou4%2BHRPF%2BqZ0yvyiUoSYk5q0MRVcfx94rhThiRjljkKx3fzmQ4KgTWZMhWvIqLGstYPWnyj%2BuzkpSBtEi%2FxPblobuXvuOzrLA7KMS%2B3n1Z3zIVA46D5ejXdSRpuKyl%2Bnv0sdsIHlMk0jSQ5KiHn1XuxP%2BnsN3vg%2B8xoyq0U50qCDk1Tf5DrABK424zJphBPEhuyg8ePFGyxI8BuAjkC4wZWuCd9LOSwqSQxzxit%2Fmh%2FWskvisDkWpK%2B0LOubCf8zJ6mysoVnxHL2uNTF0x0OjzGOxaqrB9jdUg6YfTSqa%2FtaQOG2hLI7Cbc3r2z2JXr82D5lIyRGXeRySWu8ZKT8VHCUSR2NW211pjAF4iy0SX%2FSse40ZHdHhGfW9f35%2FQca0qmqwk%2FnWfGFanYJReTgA2WJuwZXS21IIvoc5F4JyyEObju3gG6v5%2FVhidgfJ8cinKF7bcEJ%2Fi0LQ293GnZ4i6DHVHoh3FXK46lw6Jts8Zxs936zVOwAf%2FTVMZCsmlowdr3C06JAIhxWaYUIoDsQy7I2EDEsDkwjXDhWAtWcB%2BYyJqu592pa2aRul7BhJ0g%2FR3T2K3f0nKzzceioaFduD5mWHE1FfAOicqh0%2Bu20m74nCq0rTJtEMK7u08QGOqUBFDYRhpzxIqXxLNyEjar0tJYFOkxU0Yt6z4J6cdT73GmL6hl8%2BWUBwglB3ruC0bWZInNzF5rUup%2BV9SHLfRV1pYs3t7NpaYiDr9RN7EBIwt5c7DnL1st184dNmhjVd7V%2B9IEKIZ4jtBxNys93VSL2EpP3ETtgz0kP9Izipqu%2F7jr%2F%2FoGmsbKELDgeOjb%2Bo72YyXFZNNXbId9lMRl4ZNBnysSropLv&X-Amz-Signature=6f670141ce51ec9f568cd475e69641e448a96e8879c2c36394ed23d5a1289222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBH5APO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBrl2MwOYhu77zMh%2FlI0D52TxfZKMZlZB6IMhyrcwo%2FeAiEAxSRwNtGLZDhXA4tf4T7%2FDyrgU4cIGwHXYyH80Ie0AEUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJa0NLueQbpElMf2SrcA6JxsVx1ou4%2BHRPF%2BqZ0yvyiUoSYk5q0MRVcfx94rhThiRjljkKx3fzmQ4KgTWZMhWvIqLGstYPWnyj%2BuzkpSBtEi%2FxPblobuXvuOzrLA7KMS%2B3n1Z3zIVA46D5ejXdSRpuKyl%2Bnv0sdsIHlMk0jSQ5KiHn1XuxP%2BnsN3vg%2B8xoyq0U50qCDk1Tf5DrABK424zJphBPEhuyg8ePFGyxI8BuAjkC4wZWuCd9LOSwqSQxzxit%2Fmh%2FWskvisDkWpK%2B0LOubCf8zJ6mysoVnxHL2uNTF0x0OjzGOxaqrB9jdUg6YfTSqa%2FtaQOG2hLI7Cbc3r2z2JXr82D5lIyRGXeRySWu8ZKT8VHCUSR2NW211pjAF4iy0SX%2FSse40ZHdHhGfW9f35%2FQca0qmqwk%2FnWfGFanYJReTgA2WJuwZXS21IIvoc5F4JyyEObju3gG6v5%2FVhidgfJ8cinKF7bcEJ%2Fi0LQ293GnZ4i6DHVHoh3FXK46lw6Jts8Zxs936zVOwAf%2FTVMZCsmlowdr3C06JAIhxWaYUIoDsQy7I2EDEsDkwjXDhWAtWcB%2BYyJqu592pa2aRul7BhJ0g%2FR3T2K3f0nKzzceioaFduD5mWHE1FfAOicqh0%2Bu20m74nCq0rTJtEMK7u08QGOqUBFDYRhpzxIqXxLNyEjar0tJYFOkxU0Yt6z4J6cdT73GmL6hl8%2BWUBwglB3ruC0bWZInNzF5rUup%2BV9SHLfRV1pYs3t7NpaYiDr9RN7EBIwt5c7DnL1st184dNmhjVd7V%2B9IEKIZ4jtBxNys93VSL2EpP3ETtgz0kP9Izipqu%2F7jr%2F%2FoGmsbKELDgeOjb%2Bo72YyXFZNNXbId9lMRl4ZNBnysSropLv&X-Amz-Signature=606db7ad5af4e26b2866004a39a4a7d3607860a32b43f5c3da0279a5cfbbff2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBH5APO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBrl2MwOYhu77zMh%2FlI0D52TxfZKMZlZB6IMhyrcwo%2FeAiEAxSRwNtGLZDhXA4tf4T7%2FDyrgU4cIGwHXYyH80Ie0AEUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJa0NLueQbpElMf2SrcA6JxsVx1ou4%2BHRPF%2BqZ0yvyiUoSYk5q0MRVcfx94rhThiRjljkKx3fzmQ4KgTWZMhWvIqLGstYPWnyj%2BuzkpSBtEi%2FxPblobuXvuOzrLA7KMS%2B3n1Z3zIVA46D5ejXdSRpuKyl%2Bnv0sdsIHlMk0jSQ5KiHn1XuxP%2BnsN3vg%2B8xoyq0U50qCDk1Tf5DrABK424zJphBPEhuyg8ePFGyxI8BuAjkC4wZWuCd9LOSwqSQxzxit%2Fmh%2FWskvisDkWpK%2B0LOubCf8zJ6mysoVnxHL2uNTF0x0OjzGOxaqrB9jdUg6YfTSqa%2FtaQOG2hLI7Cbc3r2z2JXr82D5lIyRGXeRySWu8ZKT8VHCUSR2NW211pjAF4iy0SX%2FSse40ZHdHhGfW9f35%2FQca0qmqwk%2FnWfGFanYJReTgA2WJuwZXS21IIvoc5F4JyyEObju3gG6v5%2FVhidgfJ8cinKF7bcEJ%2Fi0LQ293GnZ4i6DHVHoh3FXK46lw6Jts8Zxs936zVOwAf%2FTVMZCsmlowdr3C06JAIhxWaYUIoDsQy7I2EDEsDkwjXDhWAtWcB%2BYyJqu592pa2aRul7BhJ0g%2FR3T2K3f0nKzzceioaFduD5mWHE1FfAOicqh0%2Bu20m74nCq0rTJtEMK7u08QGOqUBFDYRhpzxIqXxLNyEjar0tJYFOkxU0Yt6z4J6cdT73GmL6hl8%2BWUBwglB3ruC0bWZInNzF5rUup%2BV9SHLfRV1pYs3t7NpaYiDr9RN7EBIwt5c7DnL1st184dNmhjVd7V%2B9IEKIZ4jtBxNys93VSL2EpP3ETtgz0kP9Izipqu%2F7jr%2F%2FoGmsbKELDgeOjb%2Bo72YyXFZNNXbId9lMRl4ZNBnysSropLv&X-Amz-Signature=f945ef41ff9514528b40003569cb02e95e56b65104deab61bb2b0da54e977179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
