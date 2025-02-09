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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NW3UWIY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeCOz5Tv2vsTAAmsKWsaBBe2MMYWKc44LuvwKdw8bbjAiEA7rty1ob%2Boeq7GnP3ggCPjtLjUma6D3CVoAW2jvfTGOEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj%2FAcpnYkZkmGBW0SrcA%2Far1atlzWzLCtPC8eDrGOPcOTXP%2FndMdyb3GPTF%2BpzLhiWvgqZ%2FE8IVMHwsYk%2FgSscwGr6UDmj6MKl96BFtp6QTGBqlqaMwRQkN%2BXf1GtzR8m%2FMxGOcR87I3ve7yizgQQAYWbVIqiOOyAukd5DBNiPM3xalVJPnKWyUcLParsEgiu5VCjCrXA5gMU7v4QUWBEwWIv6juBdA0GEYop3SXvt09mlHJDbOOUSFFvPX%2FNmwL7wWTGMlXlsstZ%2BmvJ4Z2rvT1ya8oYF5PCrGVf%2BJxpMHRWAEMaSVKu7ykqQDs2c9CiZdX%2B7vxCBoYTMxYRPMLp6sL4KvSH%2Bl3QJdLtTDTO3OJo52KUuPwfn%2BBO8bFkWEPzxrL8aLCHRn%2F%2FxncHetXTe67whIjDzq6mNsGaf5VAlD%2FrwgOqcM4x4LRk%2FQRL2yiqIEmGW1onBwQsz%2B9T%2Fsl4RyfYqc5tFyGMD%2Flwjppb9uT%2FctKN99By0TsE%2BxjEp8RS0RoRfrB7hCweEopN0Z4sPrrdVTl7IW9a5WQGkbMzgL1REFQCAlwBZTmBkNAcudwM90SX2bU5GQp%2BCiC0smTGTB3n1rdNNngB9%2FGp9Q%2FXkczBZfMt%2BV9muCLZWsiHSt%2FA3kPsamuRDdvrxjMKO%2FoL0GOqUBVbzrc5nRuEU0yvALaNZdlaCZkgNFhjhocYnm5v2oGOYgL23aeiVpaOYlt977GBZmgPbCyXT%2FbPP7NpV1MKIVIxlYVSXmwt45iAKNF%2BGaLUZhmG0rgN8lZTM70yc7fyHP8tIEnUSr9mL40racYEmzCfE%2F5%2FZHQ0n8c5iXpu0Bf%2BW1M0rTPcbYuJL8xQimPPPuAvBNt3%2F8GkrKsXGtaACI1U11Qjpe&X-Amz-Signature=562163a549bee30f54685db2e31e5aa03c18f30edf1c892153a68a549b23deac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NW3UWIY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeCOz5Tv2vsTAAmsKWsaBBe2MMYWKc44LuvwKdw8bbjAiEA7rty1ob%2Boeq7GnP3ggCPjtLjUma6D3CVoAW2jvfTGOEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj%2FAcpnYkZkmGBW0SrcA%2Far1atlzWzLCtPC8eDrGOPcOTXP%2FndMdyb3GPTF%2BpzLhiWvgqZ%2FE8IVMHwsYk%2FgSscwGr6UDmj6MKl96BFtp6QTGBqlqaMwRQkN%2BXf1GtzR8m%2FMxGOcR87I3ve7yizgQQAYWbVIqiOOyAukd5DBNiPM3xalVJPnKWyUcLParsEgiu5VCjCrXA5gMU7v4QUWBEwWIv6juBdA0GEYop3SXvt09mlHJDbOOUSFFvPX%2FNmwL7wWTGMlXlsstZ%2BmvJ4Z2rvT1ya8oYF5PCrGVf%2BJxpMHRWAEMaSVKu7ykqQDs2c9CiZdX%2B7vxCBoYTMxYRPMLp6sL4KvSH%2Bl3QJdLtTDTO3OJo52KUuPwfn%2BBO8bFkWEPzxrL8aLCHRn%2F%2FxncHetXTe67whIjDzq6mNsGaf5VAlD%2FrwgOqcM4x4LRk%2FQRL2yiqIEmGW1onBwQsz%2B9T%2Fsl4RyfYqc5tFyGMD%2Flwjppb9uT%2FctKN99By0TsE%2BxjEp8RS0RoRfrB7hCweEopN0Z4sPrrdVTl7IW9a5WQGkbMzgL1REFQCAlwBZTmBkNAcudwM90SX2bU5GQp%2BCiC0smTGTB3n1rdNNngB9%2FGp9Q%2FXkczBZfMt%2BV9muCLZWsiHSt%2FA3kPsamuRDdvrxjMKO%2FoL0GOqUBVbzrc5nRuEU0yvALaNZdlaCZkgNFhjhocYnm5v2oGOYgL23aeiVpaOYlt977GBZmgPbCyXT%2FbPP7NpV1MKIVIxlYVSXmwt45iAKNF%2BGaLUZhmG0rgN8lZTM70yc7fyHP8tIEnUSr9mL40racYEmzCfE%2F5%2FZHQ0n8c5iXpu0Bf%2BW1M0rTPcbYuJL8xQimPPPuAvBNt3%2F8GkrKsXGtaACI1U11Qjpe&X-Amz-Signature=ea8d15be550ec416c5f287c747aef9a2a380586930493692ca02b1149ec71884&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NW3UWIY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeCOz5Tv2vsTAAmsKWsaBBe2MMYWKc44LuvwKdw8bbjAiEA7rty1ob%2Boeq7GnP3ggCPjtLjUma6D3CVoAW2jvfTGOEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj%2FAcpnYkZkmGBW0SrcA%2Far1atlzWzLCtPC8eDrGOPcOTXP%2FndMdyb3GPTF%2BpzLhiWvgqZ%2FE8IVMHwsYk%2FgSscwGr6UDmj6MKl96BFtp6QTGBqlqaMwRQkN%2BXf1GtzR8m%2FMxGOcR87I3ve7yizgQQAYWbVIqiOOyAukd5DBNiPM3xalVJPnKWyUcLParsEgiu5VCjCrXA5gMU7v4QUWBEwWIv6juBdA0GEYop3SXvt09mlHJDbOOUSFFvPX%2FNmwL7wWTGMlXlsstZ%2BmvJ4Z2rvT1ya8oYF5PCrGVf%2BJxpMHRWAEMaSVKu7ykqQDs2c9CiZdX%2B7vxCBoYTMxYRPMLp6sL4KvSH%2Bl3QJdLtTDTO3OJo52KUuPwfn%2BBO8bFkWEPzxrL8aLCHRn%2F%2FxncHetXTe67whIjDzq6mNsGaf5VAlD%2FrwgOqcM4x4LRk%2FQRL2yiqIEmGW1onBwQsz%2B9T%2Fsl4RyfYqc5tFyGMD%2Flwjppb9uT%2FctKN99By0TsE%2BxjEp8RS0RoRfrB7hCweEopN0Z4sPrrdVTl7IW9a5WQGkbMzgL1REFQCAlwBZTmBkNAcudwM90SX2bU5GQp%2BCiC0smTGTB3n1rdNNngB9%2FGp9Q%2FXkczBZfMt%2BV9muCLZWsiHSt%2FA3kPsamuRDdvrxjMKO%2FoL0GOqUBVbzrc5nRuEU0yvALaNZdlaCZkgNFhjhocYnm5v2oGOYgL23aeiVpaOYlt977GBZmgPbCyXT%2FbPP7NpV1MKIVIxlYVSXmwt45iAKNF%2BGaLUZhmG0rgN8lZTM70yc7fyHP8tIEnUSr9mL40racYEmzCfE%2F5%2FZHQ0n8c5iXpu0Bf%2BW1M0rTPcbYuJL8xQimPPPuAvBNt3%2F8GkrKsXGtaACI1U11Qjpe&X-Amz-Signature=ccffcf91f909c66aa00c8b7017f0745f669cd554a740d8043fd3615c42fd77c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NW3UWIY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeCOz5Tv2vsTAAmsKWsaBBe2MMYWKc44LuvwKdw8bbjAiEA7rty1ob%2Boeq7GnP3ggCPjtLjUma6D3CVoAW2jvfTGOEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj%2FAcpnYkZkmGBW0SrcA%2Far1atlzWzLCtPC8eDrGOPcOTXP%2FndMdyb3GPTF%2BpzLhiWvgqZ%2FE8IVMHwsYk%2FgSscwGr6UDmj6MKl96BFtp6QTGBqlqaMwRQkN%2BXf1GtzR8m%2FMxGOcR87I3ve7yizgQQAYWbVIqiOOyAukd5DBNiPM3xalVJPnKWyUcLParsEgiu5VCjCrXA5gMU7v4QUWBEwWIv6juBdA0GEYop3SXvt09mlHJDbOOUSFFvPX%2FNmwL7wWTGMlXlsstZ%2BmvJ4Z2rvT1ya8oYF5PCrGVf%2BJxpMHRWAEMaSVKu7ykqQDs2c9CiZdX%2B7vxCBoYTMxYRPMLp6sL4KvSH%2Bl3QJdLtTDTO3OJo52KUuPwfn%2BBO8bFkWEPzxrL8aLCHRn%2F%2FxncHetXTe67whIjDzq6mNsGaf5VAlD%2FrwgOqcM4x4LRk%2FQRL2yiqIEmGW1onBwQsz%2B9T%2Fsl4RyfYqc5tFyGMD%2Flwjppb9uT%2FctKN99By0TsE%2BxjEp8RS0RoRfrB7hCweEopN0Z4sPrrdVTl7IW9a5WQGkbMzgL1REFQCAlwBZTmBkNAcudwM90SX2bU5GQp%2BCiC0smTGTB3n1rdNNngB9%2FGp9Q%2FXkczBZfMt%2BV9muCLZWsiHSt%2FA3kPsamuRDdvrxjMKO%2FoL0GOqUBVbzrc5nRuEU0yvALaNZdlaCZkgNFhjhocYnm5v2oGOYgL23aeiVpaOYlt977GBZmgPbCyXT%2FbPP7NpV1MKIVIxlYVSXmwt45iAKNF%2BGaLUZhmG0rgN8lZTM70yc7fyHP8tIEnUSr9mL40racYEmzCfE%2F5%2FZHQ0n8c5iXpu0Bf%2BW1M0rTPcbYuJL8xQimPPPuAvBNt3%2F8GkrKsXGtaACI1U11Qjpe&X-Amz-Signature=3ec37b87a3838f8fbf8a7c97fe821e567f6fe7757668e16d0a4bbed46a7b3031&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NW3UWIY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeCOz5Tv2vsTAAmsKWsaBBe2MMYWKc44LuvwKdw8bbjAiEA7rty1ob%2Boeq7GnP3ggCPjtLjUma6D3CVoAW2jvfTGOEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj%2FAcpnYkZkmGBW0SrcA%2Far1atlzWzLCtPC8eDrGOPcOTXP%2FndMdyb3GPTF%2BpzLhiWvgqZ%2FE8IVMHwsYk%2FgSscwGr6UDmj6MKl96BFtp6QTGBqlqaMwRQkN%2BXf1GtzR8m%2FMxGOcR87I3ve7yizgQQAYWbVIqiOOyAukd5DBNiPM3xalVJPnKWyUcLParsEgiu5VCjCrXA5gMU7v4QUWBEwWIv6juBdA0GEYop3SXvt09mlHJDbOOUSFFvPX%2FNmwL7wWTGMlXlsstZ%2BmvJ4Z2rvT1ya8oYF5PCrGVf%2BJxpMHRWAEMaSVKu7ykqQDs2c9CiZdX%2B7vxCBoYTMxYRPMLp6sL4KvSH%2Bl3QJdLtTDTO3OJo52KUuPwfn%2BBO8bFkWEPzxrL8aLCHRn%2F%2FxncHetXTe67whIjDzq6mNsGaf5VAlD%2FrwgOqcM4x4LRk%2FQRL2yiqIEmGW1onBwQsz%2B9T%2Fsl4RyfYqc5tFyGMD%2Flwjppb9uT%2FctKN99By0TsE%2BxjEp8RS0RoRfrB7hCweEopN0Z4sPrrdVTl7IW9a5WQGkbMzgL1REFQCAlwBZTmBkNAcudwM90SX2bU5GQp%2BCiC0smTGTB3n1rdNNngB9%2FGp9Q%2FXkczBZfMt%2BV9muCLZWsiHSt%2FA3kPsamuRDdvrxjMKO%2FoL0GOqUBVbzrc5nRuEU0yvALaNZdlaCZkgNFhjhocYnm5v2oGOYgL23aeiVpaOYlt977GBZmgPbCyXT%2FbPP7NpV1MKIVIxlYVSXmwt45iAKNF%2BGaLUZhmG0rgN8lZTM70yc7fyHP8tIEnUSr9mL40racYEmzCfE%2F5%2FZHQ0n8c5iXpu0Bf%2BW1M0rTPcbYuJL8xQimPPPuAvBNt3%2F8GkrKsXGtaACI1U11Qjpe&X-Amz-Signature=9a9fbc7d49231379ac0b41dfe5c4e52c01e0f2e88564c2adcc28ad8c2530b90d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
