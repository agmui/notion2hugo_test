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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL4ERXE%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdxYwHr3GUpbcH6gSG4CWVuCOg19%2F2xW4zFV%2FgUyN3oQIgY3WrpL1jIX4lJF%2Br%2FNUmzrjeLX0K2tblksJnd%2FaeXyYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK627t9seIPYp0OvqCrcA7oQa10wF%2Fq%2BoUzoV4z3523FrVHw2j861T1vOXWjDzyzOR1b47Wd4RgS5jr6jgqn8HKVh8Wq3JvbqnyJoR%2B%2BOpyjs92IwnJZd%2Bx3fv7W1z%2FsaDebay469jL3j%2Bc75NLdWmN0BbOe%2F649pV6A0hWTNPzOB03HDzm1Nv01RIkmfWnNTZbY4CadNrsZVZTvCU2FkWLbxubmNGCEfEjc3Exc7v%2FAjSNxgz7TYHJHUEN0%2B%2FWIGve25IB5ZMUeMhtmfbNsfWrP3o8LuzqVgBTciQDTKCdzt%2Fow0QePT385rkC2X30D7duKKIpJPlDNifOVUXO9pWOMh5%2FNdLC66eTDH3tlWHEKheGPbT2z%2FOBIne%2B7hJ8YtvsXGnk%2BZPqnDvcmHGoLq2nJzZAkQ8IeGBAuOkcFfBMJgvccqGIAbe7ogHQiOcgMkjlxbyTIlJ6T1llHUnqGWWy0%2B8tvPRtS3cmiY%2FOiclf0wFpjG%2FsQg6NGdiphkQ%2FdZFncASbKFeyS8mMgeYqAp7cpfwP9D0gJc6bGsAv%2FHyARJ1RmkpFto5SpOYopQ5888qSMCwCKsS29O4sDdizM8kIEHlceOgqP1SSqh7xH1PZh3wyarnuqdX5ddVQtCy60Tnkb3zq0dnp7e0r%2BMN7plcMGOqUBIFqdTa2cRrKTOjBbQZfl31Pr1jESKSDvCgb9HD7HECcETa8bFvkN47rxbdG9fu1bLv2Gcw4LbKB02aQlevyXQnQbrC%2F%2FHQLMc8us1MSa1WC53FLexBcoDPLatDljVSX8KS73y7zYk4ogMeaykBmR8fB3CryNAdb4Ok638JUyS6JLsL55p%2BGCZHMu23lKjtVzc%2F%2BGVb4Y72e05Qz4pETcucV5xW9Y&X-Amz-Signature=af3efc01131bfbc3c5ada4acd80f2b0c52027e56e4b074d8b2776e899e8fffe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL4ERXE%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdxYwHr3GUpbcH6gSG4CWVuCOg19%2F2xW4zFV%2FgUyN3oQIgY3WrpL1jIX4lJF%2Br%2FNUmzrjeLX0K2tblksJnd%2FaeXyYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK627t9seIPYp0OvqCrcA7oQa10wF%2Fq%2BoUzoV4z3523FrVHw2j861T1vOXWjDzyzOR1b47Wd4RgS5jr6jgqn8HKVh8Wq3JvbqnyJoR%2B%2BOpyjs92IwnJZd%2Bx3fv7W1z%2FsaDebay469jL3j%2Bc75NLdWmN0BbOe%2F649pV6A0hWTNPzOB03HDzm1Nv01RIkmfWnNTZbY4CadNrsZVZTvCU2FkWLbxubmNGCEfEjc3Exc7v%2FAjSNxgz7TYHJHUEN0%2B%2FWIGve25IB5ZMUeMhtmfbNsfWrP3o8LuzqVgBTciQDTKCdzt%2Fow0QePT385rkC2X30D7duKKIpJPlDNifOVUXO9pWOMh5%2FNdLC66eTDH3tlWHEKheGPbT2z%2FOBIne%2B7hJ8YtvsXGnk%2BZPqnDvcmHGoLq2nJzZAkQ8IeGBAuOkcFfBMJgvccqGIAbe7ogHQiOcgMkjlxbyTIlJ6T1llHUnqGWWy0%2B8tvPRtS3cmiY%2FOiclf0wFpjG%2FsQg6NGdiphkQ%2FdZFncASbKFeyS8mMgeYqAp7cpfwP9D0gJc6bGsAv%2FHyARJ1RmkpFto5SpOYopQ5888qSMCwCKsS29O4sDdizM8kIEHlceOgqP1SSqh7xH1PZh3wyarnuqdX5ddVQtCy60Tnkb3zq0dnp7e0r%2BMN7plcMGOqUBIFqdTa2cRrKTOjBbQZfl31Pr1jESKSDvCgb9HD7HECcETa8bFvkN47rxbdG9fu1bLv2Gcw4LbKB02aQlevyXQnQbrC%2F%2FHQLMc8us1MSa1WC53FLexBcoDPLatDljVSX8KS73y7zYk4ogMeaykBmR8fB3CryNAdb4Ok638JUyS6JLsL55p%2BGCZHMu23lKjtVzc%2F%2BGVb4Y72e05Qz4pETcucV5xW9Y&X-Amz-Signature=7bf7ce339780b961e1e15e14ceffacfc3423bee756dbdd8211717ac39805a374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL4ERXE%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdxYwHr3GUpbcH6gSG4CWVuCOg19%2F2xW4zFV%2FgUyN3oQIgY3WrpL1jIX4lJF%2Br%2FNUmzrjeLX0K2tblksJnd%2FaeXyYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK627t9seIPYp0OvqCrcA7oQa10wF%2Fq%2BoUzoV4z3523FrVHw2j861T1vOXWjDzyzOR1b47Wd4RgS5jr6jgqn8HKVh8Wq3JvbqnyJoR%2B%2BOpyjs92IwnJZd%2Bx3fv7W1z%2FsaDebay469jL3j%2Bc75NLdWmN0BbOe%2F649pV6A0hWTNPzOB03HDzm1Nv01RIkmfWnNTZbY4CadNrsZVZTvCU2FkWLbxubmNGCEfEjc3Exc7v%2FAjSNxgz7TYHJHUEN0%2B%2FWIGve25IB5ZMUeMhtmfbNsfWrP3o8LuzqVgBTciQDTKCdzt%2Fow0QePT385rkC2X30D7duKKIpJPlDNifOVUXO9pWOMh5%2FNdLC66eTDH3tlWHEKheGPbT2z%2FOBIne%2B7hJ8YtvsXGnk%2BZPqnDvcmHGoLq2nJzZAkQ8IeGBAuOkcFfBMJgvccqGIAbe7ogHQiOcgMkjlxbyTIlJ6T1llHUnqGWWy0%2B8tvPRtS3cmiY%2FOiclf0wFpjG%2FsQg6NGdiphkQ%2FdZFncASbKFeyS8mMgeYqAp7cpfwP9D0gJc6bGsAv%2FHyARJ1RmkpFto5SpOYopQ5888qSMCwCKsS29O4sDdizM8kIEHlceOgqP1SSqh7xH1PZh3wyarnuqdX5ddVQtCy60Tnkb3zq0dnp7e0r%2BMN7plcMGOqUBIFqdTa2cRrKTOjBbQZfl31Pr1jESKSDvCgb9HD7HECcETa8bFvkN47rxbdG9fu1bLv2Gcw4LbKB02aQlevyXQnQbrC%2F%2FHQLMc8us1MSa1WC53FLexBcoDPLatDljVSX8KS73y7zYk4ogMeaykBmR8fB3CryNAdb4Ok638JUyS6JLsL55p%2BGCZHMu23lKjtVzc%2F%2BGVb4Y72e05Qz4pETcucV5xW9Y&X-Amz-Signature=83174b73c84b1447993f4258ac3d7de4614e90c6b919d2192f2a7778e668e06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL4ERXE%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdxYwHr3GUpbcH6gSG4CWVuCOg19%2F2xW4zFV%2FgUyN3oQIgY3WrpL1jIX4lJF%2Br%2FNUmzrjeLX0K2tblksJnd%2FaeXyYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK627t9seIPYp0OvqCrcA7oQa10wF%2Fq%2BoUzoV4z3523FrVHw2j861T1vOXWjDzyzOR1b47Wd4RgS5jr6jgqn8HKVh8Wq3JvbqnyJoR%2B%2BOpyjs92IwnJZd%2Bx3fv7W1z%2FsaDebay469jL3j%2Bc75NLdWmN0BbOe%2F649pV6A0hWTNPzOB03HDzm1Nv01RIkmfWnNTZbY4CadNrsZVZTvCU2FkWLbxubmNGCEfEjc3Exc7v%2FAjSNxgz7TYHJHUEN0%2B%2FWIGve25IB5ZMUeMhtmfbNsfWrP3o8LuzqVgBTciQDTKCdzt%2Fow0QePT385rkC2X30D7duKKIpJPlDNifOVUXO9pWOMh5%2FNdLC66eTDH3tlWHEKheGPbT2z%2FOBIne%2B7hJ8YtvsXGnk%2BZPqnDvcmHGoLq2nJzZAkQ8IeGBAuOkcFfBMJgvccqGIAbe7ogHQiOcgMkjlxbyTIlJ6T1llHUnqGWWy0%2B8tvPRtS3cmiY%2FOiclf0wFpjG%2FsQg6NGdiphkQ%2FdZFncASbKFeyS8mMgeYqAp7cpfwP9D0gJc6bGsAv%2FHyARJ1RmkpFto5SpOYopQ5888qSMCwCKsS29O4sDdizM8kIEHlceOgqP1SSqh7xH1PZh3wyarnuqdX5ddVQtCy60Tnkb3zq0dnp7e0r%2BMN7plcMGOqUBIFqdTa2cRrKTOjBbQZfl31Pr1jESKSDvCgb9HD7HECcETa8bFvkN47rxbdG9fu1bLv2Gcw4LbKB02aQlevyXQnQbrC%2F%2FHQLMc8us1MSa1WC53FLexBcoDPLatDljVSX8KS73y7zYk4ogMeaykBmR8fB3CryNAdb4Ok638JUyS6JLsL55p%2BGCZHMu23lKjtVzc%2F%2BGVb4Y72e05Qz4pETcucV5xW9Y&X-Amz-Signature=6504def5a6f67448aa8d530d61201f79e809cad0c2406cc290d5862f8a3d816e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL4ERXE%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdxYwHr3GUpbcH6gSG4CWVuCOg19%2F2xW4zFV%2FgUyN3oQIgY3WrpL1jIX4lJF%2Br%2FNUmzrjeLX0K2tblksJnd%2FaeXyYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK627t9seIPYp0OvqCrcA7oQa10wF%2Fq%2BoUzoV4z3523FrVHw2j861T1vOXWjDzyzOR1b47Wd4RgS5jr6jgqn8HKVh8Wq3JvbqnyJoR%2B%2BOpyjs92IwnJZd%2Bx3fv7W1z%2FsaDebay469jL3j%2Bc75NLdWmN0BbOe%2F649pV6A0hWTNPzOB03HDzm1Nv01RIkmfWnNTZbY4CadNrsZVZTvCU2FkWLbxubmNGCEfEjc3Exc7v%2FAjSNxgz7TYHJHUEN0%2B%2FWIGve25IB5ZMUeMhtmfbNsfWrP3o8LuzqVgBTciQDTKCdzt%2Fow0QePT385rkC2X30D7duKKIpJPlDNifOVUXO9pWOMh5%2FNdLC66eTDH3tlWHEKheGPbT2z%2FOBIne%2B7hJ8YtvsXGnk%2BZPqnDvcmHGoLq2nJzZAkQ8IeGBAuOkcFfBMJgvccqGIAbe7ogHQiOcgMkjlxbyTIlJ6T1llHUnqGWWy0%2B8tvPRtS3cmiY%2FOiclf0wFpjG%2FsQg6NGdiphkQ%2FdZFncASbKFeyS8mMgeYqAp7cpfwP9D0gJc6bGsAv%2FHyARJ1RmkpFto5SpOYopQ5888qSMCwCKsS29O4sDdizM8kIEHlceOgqP1SSqh7xH1PZh3wyarnuqdX5ddVQtCy60Tnkb3zq0dnp7e0r%2BMN7plcMGOqUBIFqdTa2cRrKTOjBbQZfl31Pr1jESKSDvCgb9HD7HECcETa8bFvkN47rxbdG9fu1bLv2Gcw4LbKB02aQlevyXQnQbrC%2F%2FHQLMc8us1MSa1WC53FLexBcoDPLatDljVSX8KS73y7zYk4ogMeaykBmR8fB3CryNAdb4Ok638JUyS6JLsL55p%2BGCZHMu23lKjtVzc%2F%2BGVb4Y72e05Qz4pETcucV5xW9Y&X-Amz-Signature=f0d77c07bf0e57805ccfc97ef0fcff84927d2ea07663b77f8daceb83e24c30ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
