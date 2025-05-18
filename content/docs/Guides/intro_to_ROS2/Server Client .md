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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJXIV3Q%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjW6PN81A5wkE2l7eLBRAsJ7ISvrxcuHg4uiDEvsz6GAiEA7AaKcVEtd%2FrlZVPWSPoF0EQXU9h3DN7X%2FM36gNzShSUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIvRA9qPz%2BiKC%2F9KjircAz6JrjMilafDwkwZj4%2FGtQYAoSOJzyngIoN3Mp80JrvKoZDz8PcW41QEINBq5bEtMpmBByjm21DYsJvXPxHgQYqozzBBCsP%2BDwuV94cA9tvudevm64CHVvoS2KeFQR1Pr2cZ2pOUpPD9uk3f2kP3Rt2i3CM6A7Yv9060b8VFL8NsV3gP514w9b9d6cNYvU7V%2BghkfCkt5n8Aweb0LTSvBcQvew4iEm9jYZgX6a31b8h9ZXz%2BcF1gRz%2FS%2BI0ZP8oMytOC2oibnJRxxYaLqgZ3TxzRLAc4mn%2BSMdbBzHGUHZKGVycxA5%2FPwCTWvOUzZlieCbsL%2BZtO7Of7TR1dB99COnSpyDPRCiuWznSVf2P3R1oIfAHu8y2ZrK48AUQmvNM39siCU%2Bv2n3oK%2FCYvH2X4tlqctYTzTDhyv1ENT8PDAyQ8acUjScPrWdzLtndBgkzbqShKT%2FtpQ1f1h8KZxL2s7BTxV1eknQElf16hOlgOt4e3mDd3%2BB7jEmQkAaC%2Fbh6vqF43rZWG5k%2B7m7Fugas163IwG8LUzA7O%2FBxEPQMplylkZGAmiyTrI3TXe4TeWY364slEb2C58VrCM2J8hQCsGu5WunmuMxyEIKprFrDxc%2B8HjDFj1bRzN2ZPY2fBMMP1pcEGOqUBdP9chBljzx6lI7svTHgKXDlVRFFlLBILglIV0ysz3PKYU4d0cTjZhq6iXiDrojqcIAU2bUi6G0H6VUogc90Clt2a1dHs2gMAMWls5s43vxS5xK0HWfJJc5Mj%2B5j4q55ZGnMU19i4JBtFfasiLyYhGP%2BYgOkgNTyHzeWrTKEOg1Vur4d3%2FGqyMmPMK9uJtrBRzVUZ23Z04LAI2PsR%2FBA6FBu2zIT2&X-Amz-Signature=419347072f0944ac7093c9b60f2427aaa435d41cbe19d25954865d41529ab817&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJXIV3Q%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjW6PN81A5wkE2l7eLBRAsJ7ISvrxcuHg4uiDEvsz6GAiEA7AaKcVEtd%2FrlZVPWSPoF0EQXU9h3DN7X%2FM36gNzShSUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIvRA9qPz%2BiKC%2F9KjircAz6JrjMilafDwkwZj4%2FGtQYAoSOJzyngIoN3Mp80JrvKoZDz8PcW41QEINBq5bEtMpmBByjm21DYsJvXPxHgQYqozzBBCsP%2BDwuV94cA9tvudevm64CHVvoS2KeFQR1Pr2cZ2pOUpPD9uk3f2kP3Rt2i3CM6A7Yv9060b8VFL8NsV3gP514w9b9d6cNYvU7V%2BghkfCkt5n8Aweb0LTSvBcQvew4iEm9jYZgX6a31b8h9ZXz%2BcF1gRz%2FS%2BI0ZP8oMytOC2oibnJRxxYaLqgZ3TxzRLAc4mn%2BSMdbBzHGUHZKGVycxA5%2FPwCTWvOUzZlieCbsL%2BZtO7Of7TR1dB99COnSpyDPRCiuWznSVf2P3R1oIfAHu8y2ZrK48AUQmvNM39siCU%2Bv2n3oK%2FCYvH2X4tlqctYTzTDhyv1ENT8PDAyQ8acUjScPrWdzLtndBgkzbqShKT%2FtpQ1f1h8KZxL2s7BTxV1eknQElf16hOlgOt4e3mDd3%2BB7jEmQkAaC%2Fbh6vqF43rZWG5k%2B7m7Fugas163IwG8LUzA7O%2FBxEPQMplylkZGAmiyTrI3TXe4TeWY364slEb2C58VrCM2J8hQCsGu5WunmuMxyEIKprFrDxc%2B8HjDFj1bRzN2ZPY2fBMMP1pcEGOqUBdP9chBljzx6lI7svTHgKXDlVRFFlLBILglIV0ysz3PKYU4d0cTjZhq6iXiDrojqcIAU2bUi6G0H6VUogc90Clt2a1dHs2gMAMWls5s43vxS5xK0HWfJJc5Mj%2B5j4q55ZGnMU19i4JBtFfasiLyYhGP%2BYgOkgNTyHzeWrTKEOg1Vur4d3%2FGqyMmPMK9uJtrBRzVUZ23Z04LAI2PsR%2FBA6FBu2zIT2&X-Amz-Signature=3f7650a7ade92e020a7c72f06a7d7508a1131c8d21218ab2ec58285a5c951882&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJXIV3Q%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjW6PN81A5wkE2l7eLBRAsJ7ISvrxcuHg4uiDEvsz6GAiEA7AaKcVEtd%2FrlZVPWSPoF0EQXU9h3DN7X%2FM36gNzShSUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIvRA9qPz%2BiKC%2F9KjircAz6JrjMilafDwkwZj4%2FGtQYAoSOJzyngIoN3Mp80JrvKoZDz8PcW41QEINBq5bEtMpmBByjm21DYsJvXPxHgQYqozzBBCsP%2BDwuV94cA9tvudevm64CHVvoS2KeFQR1Pr2cZ2pOUpPD9uk3f2kP3Rt2i3CM6A7Yv9060b8VFL8NsV3gP514w9b9d6cNYvU7V%2BghkfCkt5n8Aweb0LTSvBcQvew4iEm9jYZgX6a31b8h9ZXz%2BcF1gRz%2FS%2BI0ZP8oMytOC2oibnJRxxYaLqgZ3TxzRLAc4mn%2BSMdbBzHGUHZKGVycxA5%2FPwCTWvOUzZlieCbsL%2BZtO7Of7TR1dB99COnSpyDPRCiuWznSVf2P3R1oIfAHu8y2ZrK48AUQmvNM39siCU%2Bv2n3oK%2FCYvH2X4tlqctYTzTDhyv1ENT8PDAyQ8acUjScPrWdzLtndBgkzbqShKT%2FtpQ1f1h8KZxL2s7BTxV1eknQElf16hOlgOt4e3mDd3%2BB7jEmQkAaC%2Fbh6vqF43rZWG5k%2B7m7Fugas163IwG8LUzA7O%2FBxEPQMplylkZGAmiyTrI3TXe4TeWY364slEb2C58VrCM2J8hQCsGu5WunmuMxyEIKprFrDxc%2B8HjDFj1bRzN2ZPY2fBMMP1pcEGOqUBdP9chBljzx6lI7svTHgKXDlVRFFlLBILglIV0ysz3PKYU4d0cTjZhq6iXiDrojqcIAU2bUi6G0H6VUogc90Clt2a1dHs2gMAMWls5s43vxS5xK0HWfJJc5Mj%2B5j4q55ZGnMU19i4JBtFfasiLyYhGP%2BYgOkgNTyHzeWrTKEOg1Vur4d3%2FGqyMmPMK9uJtrBRzVUZ23Z04LAI2PsR%2FBA6FBu2zIT2&X-Amz-Signature=6c70fe548f189a8340d419aa6bc2163e034b22e042e3973732dd594d738cc84b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJXIV3Q%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjW6PN81A5wkE2l7eLBRAsJ7ISvrxcuHg4uiDEvsz6GAiEA7AaKcVEtd%2FrlZVPWSPoF0EQXU9h3DN7X%2FM36gNzShSUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIvRA9qPz%2BiKC%2F9KjircAz6JrjMilafDwkwZj4%2FGtQYAoSOJzyngIoN3Mp80JrvKoZDz8PcW41QEINBq5bEtMpmBByjm21DYsJvXPxHgQYqozzBBCsP%2BDwuV94cA9tvudevm64CHVvoS2KeFQR1Pr2cZ2pOUpPD9uk3f2kP3Rt2i3CM6A7Yv9060b8VFL8NsV3gP514w9b9d6cNYvU7V%2BghkfCkt5n8Aweb0LTSvBcQvew4iEm9jYZgX6a31b8h9ZXz%2BcF1gRz%2FS%2BI0ZP8oMytOC2oibnJRxxYaLqgZ3TxzRLAc4mn%2BSMdbBzHGUHZKGVycxA5%2FPwCTWvOUzZlieCbsL%2BZtO7Of7TR1dB99COnSpyDPRCiuWznSVf2P3R1oIfAHu8y2ZrK48AUQmvNM39siCU%2Bv2n3oK%2FCYvH2X4tlqctYTzTDhyv1ENT8PDAyQ8acUjScPrWdzLtndBgkzbqShKT%2FtpQ1f1h8KZxL2s7BTxV1eknQElf16hOlgOt4e3mDd3%2BB7jEmQkAaC%2Fbh6vqF43rZWG5k%2B7m7Fugas163IwG8LUzA7O%2FBxEPQMplylkZGAmiyTrI3TXe4TeWY364slEb2C58VrCM2J8hQCsGu5WunmuMxyEIKprFrDxc%2B8HjDFj1bRzN2ZPY2fBMMP1pcEGOqUBdP9chBljzx6lI7svTHgKXDlVRFFlLBILglIV0ysz3PKYU4d0cTjZhq6iXiDrojqcIAU2bUi6G0H6VUogc90Clt2a1dHs2gMAMWls5s43vxS5xK0HWfJJc5Mj%2B5j4q55ZGnMU19i4JBtFfasiLyYhGP%2BYgOkgNTyHzeWrTKEOg1Vur4d3%2FGqyMmPMK9uJtrBRzVUZ23Z04LAI2PsR%2FBA6FBu2zIT2&X-Amz-Signature=b7e4a8a518d9071f904498be1afb5c2cc16f20eacad2d4007a2f9deed9b889ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJXIV3Q%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjW6PN81A5wkE2l7eLBRAsJ7ISvrxcuHg4uiDEvsz6GAiEA7AaKcVEtd%2FrlZVPWSPoF0EQXU9h3DN7X%2FM36gNzShSUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIvRA9qPz%2BiKC%2F9KjircAz6JrjMilafDwkwZj4%2FGtQYAoSOJzyngIoN3Mp80JrvKoZDz8PcW41QEINBq5bEtMpmBByjm21DYsJvXPxHgQYqozzBBCsP%2BDwuV94cA9tvudevm64CHVvoS2KeFQR1Pr2cZ2pOUpPD9uk3f2kP3Rt2i3CM6A7Yv9060b8VFL8NsV3gP514w9b9d6cNYvU7V%2BghkfCkt5n8Aweb0LTSvBcQvew4iEm9jYZgX6a31b8h9ZXz%2BcF1gRz%2FS%2BI0ZP8oMytOC2oibnJRxxYaLqgZ3TxzRLAc4mn%2BSMdbBzHGUHZKGVycxA5%2FPwCTWvOUzZlieCbsL%2BZtO7Of7TR1dB99COnSpyDPRCiuWznSVf2P3R1oIfAHu8y2ZrK48AUQmvNM39siCU%2Bv2n3oK%2FCYvH2X4tlqctYTzTDhyv1ENT8PDAyQ8acUjScPrWdzLtndBgkzbqShKT%2FtpQ1f1h8KZxL2s7BTxV1eknQElf16hOlgOt4e3mDd3%2BB7jEmQkAaC%2Fbh6vqF43rZWG5k%2B7m7Fugas163IwG8LUzA7O%2FBxEPQMplylkZGAmiyTrI3TXe4TeWY364slEb2C58VrCM2J8hQCsGu5WunmuMxyEIKprFrDxc%2B8HjDFj1bRzN2ZPY2fBMMP1pcEGOqUBdP9chBljzx6lI7svTHgKXDlVRFFlLBILglIV0ysz3PKYU4d0cTjZhq6iXiDrojqcIAU2bUi6G0H6VUogc90Clt2a1dHs2gMAMWls5s43vxS5xK0HWfJJc5Mj%2B5j4q55ZGnMU19i4JBtFfasiLyYhGP%2BYgOkgNTyHzeWrTKEOg1Vur4d3%2FGqyMmPMK9uJtrBRzVUZ23Z04LAI2PsR%2FBA6FBu2zIT2&X-Amz-Signature=07a6b3b24a4ebe3a7f68dbaaa88ad2fde026009ad0e6d20501bd5607ccefd1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
