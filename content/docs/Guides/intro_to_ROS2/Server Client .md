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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPPQNQLT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVfpe%2BkN8DXHi39wnWNIuWshxYbTvxspx%2Fbr7TRM%2BvpAiEAlRYM0qThl6jAPIsVA7O2QDRvt2UJ2az5U%2F5mkM0bB24qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWXu7Ytjh8nOz1CnSrcA%2FgZc322echgLkAKgMs%2BLOPvl%2FubMAxifrPXD35YCERFsc1xO0I2mv3tGdJ19htYPU03cW7mheoCQhfzTFLdFsJv69Q%2BinJMf8W3Z3SoNXtuxxY%2BA5cz%2B%2BvKh89kTi%2FhZwgqzIOp81o8%2BHQ1EaAKM834UgKyoWEm4n5jsDNnjyCTrCpsW6iLVnl5k48d9i7bPr4qed37NzZuYvJ%2BgDU20KUBrdZjk2vUVMXmxrGR15x6Y8%2FDjSzHuXeHNwI1KSdoDXBxBUdmKy%2BYCaH%2BMghesA7Z9CtL4h4GtHb7%2FIr0e%2F5T%2Fi6JZW6vG9Z6P154qW9dzUGhg18UpSwq9Q5V%2FABXhc0gLuumkUKJGG9Hnqbc93s06igLE9v8wlZYDRtz6wsJdLO25AxsTQKrnW041c6j2nLCsBvef%2FPWHQsN1LF0Zi%2FiqNLriUaFF05IEFTt76OBofKP2DfqgfqWn6lpkJ2Aik0RWA4K47d7VyQqfCCGAVYwFvf%2F8yCrmRqG%2F5kFQd5ehmcdM1nGgc09342gCgtexVDwtzGN9B786oNHxXT0A8WZAy4hh0ur3jatwjnmtM4gancoQqfvDr9vv1PwnGvOvFrNQGfouWr1w86%2BZOcuL5kvpdgQfOTKZgMlCDwJMJ3%2Bhb8GOqUBQI0UNoxISAe15QP3IWLU%2Bs0%2F4mw58iKmR6Sy26XjWQLFPxjeT7jOhdUMd%2Fw6bT3kfAo8JbY7Bdh3T6tFmz1Qc%2FinxEP3iLShWLe2r0y6i4fxOJDxmOGmDU5T5AHo%2FhWFlHby8FnjlrUIhLOBHVRPe2x7yoShHkLc2s0ariJzMewdQozUZLpv78ww%2FAE3CysZlRJY0a3Bph68cj1cEC1san58c2bK&X-Amz-Signature=b985dfba191161e66124d255f42cc517898d05a4e3cea9febca317c6a0d816e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPPQNQLT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVfpe%2BkN8DXHi39wnWNIuWshxYbTvxspx%2Fbr7TRM%2BvpAiEAlRYM0qThl6jAPIsVA7O2QDRvt2UJ2az5U%2F5mkM0bB24qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWXu7Ytjh8nOz1CnSrcA%2FgZc322echgLkAKgMs%2BLOPvl%2FubMAxifrPXD35YCERFsc1xO0I2mv3tGdJ19htYPU03cW7mheoCQhfzTFLdFsJv69Q%2BinJMf8W3Z3SoNXtuxxY%2BA5cz%2B%2BvKh89kTi%2FhZwgqzIOp81o8%2BHQ1EaAKM834UgKyoWEm4n5jsDNnjyCTrCpsW6iLVnl5k48d9i7bPr4qed37NzZuYvJ%2BgDU20KUBrdZjk2vUVMXmxrGR15x6Y8%2FDjSzHuXeHNwI1KSdoDXBxBUdmKy%2BYCaH%2BMghesA7Z9CtL4h4GtHb7%2FIr0e%2F5T%2Fi6JZW6vG9Z6P154qW9dzUGhg18UpSwq9Q5V%2FABXhc0gLuumkUKJGG9Hnqbc93s06igLE9v8wlZYDRtz6wsJdLO25AxsTQKrnW041c6j2nLCsBvef%2FPWHQsN1LF0Zi%2FiqNLriUaFF05IEFTt76OBofKP2DfqgfqWn6lpkJ2Aik0RWA4K47d7VyQqfCCGAVYwFvf%2F8yCrmRqG%2F5kFQd5ehmcdM1nGgc09342gCgtexVDwtzGN9B786oNHxXT0A8WZAy4hh0ur3jatwjnmtM4gancoQqfvDr9vv1PwnGvOvFrNQGfouWr1w86%2BZOcuL5kvpdgQfOTKZgMlCDwJMJ3%2Bhb8GOqUBQI0UNoxISAe15QP3IWLU%2Bs0%2F4mw58iKmR6Sy26XjWQLFPxjeT7jOhdUMd%2Fw6bT3kfAo8JbY7Bdh3T6tFmz1Qc%2FinxEP3iLShWLe2r0y6i4fxOJDxmOGmDU5T5AHo%2FhWFlHby8FnjlrUIhLOBHVRPe2x7yoShHkLc2s0ariJzMewdQozUZLpv78ww%2FAE3CysZlRJY0a3Bph68cj1cEC1san58c2bK&X-Amz-Signature=9233f5d311a7bfa97a0d6889f0ec11e6723db42302eb6a751a9fd0385119c3e3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPPQNQLT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVfpe%2BkN8DXHi39wnWNIuWshxYbTvxspx%2Fbr7TRM%2BvpAiEAlRYM0qThl6jAPIsVA7O2QDRvt2UJ2az5U%2F5mkM0bB24qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWXu7Ytjh8nOz1CnSrcA%2FgZc322echgLkAKgMs%2BLOPvl%2FubMAxifrPXD35YCERFsc1xO0I2mv3tGdJ19htYPU03cW7mheoCQhfzTFLdFsJv69Q%2BinJMf8W3Z3SoNXtuxxY%2BA5cz%2B%2BvKh89kTi%2FhZwgqzIOp81o8%2BHQ1EaAKM834UgKyoWEm4n5jsDNnjyCTrCpsW6iLVnl5k48d9i7bPr4qed37NzZuYvJ%2BgDU20KUBrdZjk2vUVMXmxrGR15x6Y8%2FDjSzHuXeHNwI1KSdoDXBxBUdmKy%2BYCaH%2BMghesA7Z9CtL4h4GtHb7%2FIr0e%2F5T%2Fi6JZW6vG9Z6P154qW9dzUGhg18UpSwq9Q5V%2FABXhc0gLuumkUKJGG9Hnqbc93s06igLE9v8wlZYDRtz6wsJdLO25AxsTQKrnW041c6j2nLCsBvef%2FPWHQsN1LF0Zi%2FiqNLriUaFF05IEFTt76OBofKP2DfqgfqWn6lpkJ2Aik0RWA4K47d7VyQqfCCGAVYwFvf%2F8yCrmRqG%2F5kFQd5ehmcdM1nGgc09342gCgtexVDwtzGN9B786oNHxXT0A8WZAy4hh0ur3jatwjnmtM4gancoQqfvDr9vv1PwnGvOvFrNQGfouWr1w86%2BZOcuL5kvpdgQfOTKZgMlCDwJMJ3%2Bhb8GOqUBQI0UNoxISAe15QP3IWLU%2Bs0%2F4mw58iKmR6Sy26XjWQLFPxjeT7jOhdUMd%2Fw6bT3kfAo8JbY7Bdh3T6tFmz1Qc%2FinxEP3iLShWLe2r0y6i4fxOJDxmOGmDU5T5AHo%2FhWFlHby8FnjlrUIhLOBHVRPe2x7yoShHkLc2s0ariJzMewdQozUZLpv78ww%2FAE3CysZlRJY0a3Bph68cj1cEC1san58c2bK&X-Amz-Signature=a691cacf248f656c9081db3762d5732bc700c90efa3b0b9c9fc1b8594cc87437&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPPQNQLT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVfpe%2BkN8DXHi39wnWNIuWshxYbTvxspx%2Fbr7TRM%2BvpAiEAlRYM0qThl6jAPIsVA7O2QDRvt2UJ2az5U%2F5mkM0bB24qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWXu7Ytjh8nOz1CnSrcA%2FgZc322echgLkAKgMs%2BLOPvl%2FubMAxifrPXD35YCERFsc1xO0I2mv3tGdJ19htYPU03cW7mheoCQhfzTFLdFsJv69Q%2BinJMf8W3Z3SoNXtuxxY%2BA5cz%2B%2BvKh89kTi%2FhZwgqzIOp81o8%2BHQ1EaAKM834UgKyoWEm4n5jsDNnjyCTrCpsW6iLVnl5k48d9i7bPr4qed37NzZuYvJ%2BgDU20KUBrdZjk2vUVMXmxrGR15x6Y8%2FDjSzHuXeHNwI1KSdoDXBxBUdmKy%2BYCaH%2BMghesA7Z9CtL4h4GtHb7%2FIr0e%2F5T%2Fi6JZW6vG9Z6P154qW9dzUGhg18UpSwq9Q5V%2FABXhc0gLuumkUKJGG9Hnqbc93s06igLE9v8wlZYDRtz6wsJdLO25AxsTQKrnW041c6j2nLCsBvef%2FPWHQsN1LF0Zi%2FiqNLriUaFF05IEFTt76OBofKP2DfqgfqWn6lpkJ2Aik0RWA4K47d7VyQqfCCGAVYwFvf%2F8yCrmRqG%2F5kFQd5ehmcdM1nGgc09342gCgtexVDwtzGN9B786oNHxXT0A8WZAy4hh0ur3jatwjnmtM4gancoQqfvDr9vv1PwnGvOvFrNQGfouWr1w86%2BZOcuL5kvpdgQfOTKZgMlCDwJMJ3%2Bhb8GOqUBQI0UNoxISAe15QP3IWLU%2Bs0%2F4mw58iKmR6Sy26XjWQLFPxjeT7jOhdUMd%2Fw6bT3kfAo8JbY7Bdh3T6tFmz1Qc%2FinxEP3iLShWLe2r0y6i4fxOJDxmOGmDU5T5AHo%2FhWFlHby8FnjlrUIhLOBHVRPe2x7yoShHkLc2s0ariJzMewdQozUZLpv78ww%2FAE3CysZlRJY0a3Bph68cj1cEC1san58c2bK&X-Amz-Signature=3e11dec3fb2e44303d835374db38526a8ce19057953ab296a572751729399005&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPPQNQLT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVfpe%2BkN8DXHi39wnWNIuWshxYbTvxspx%2Fbr7TRM%2BvpAiEAlRYM0qThl6jAPIsVA7O2QDRvt2UJ2az5U%2F5mkM0bB24qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWXu7Ytjh8nOz1CnSrcA%2FgZc322echgLkAKgMs%2BLOPvl%2FubMAxifrPXD35YCERFsc1xO0I2mv3tGdJ19htYPU03cW7mheoCQhfzTFLdFsJv69Q%2BinJMf8W3Z3SoNXtuxxY%2BA5cz%2B%2BvKh89kTi%2FhZwgqzIOp81o8%2BHQ1EaAKM834UgKyoWEm4n5jsDNnjyCTrCpsW6iLVnl5k48d9i7bPr4qed37NzZuYvJ%2BgDU20KUBrdZjk2vUVMXmxrGR15x6Y8%2FDjSzHuXeHNwI1KSdoDXBxBUdmKy%2BYCaH%2BMghesA7Z9CtL4h4GtHb7%2FIr0e%2F5T%2Fi6JZW6vG9Z6P154qW9dzUGhg18UpSwq9Q5V%2FABXhc0gLuumkUKJGG9Hnqbc93s06igLE9v8wlZYDRtz6wsJdLO25AxsTQKrnW041c6j2nLCsBvef%2FPWHQsN1LF0Zi%2FiqNLriUaFF05IEFTt76OBofKP2DfqgfqWn6lpkJ2Aik0RWA4K47d7VyQqfCCGAVYwFvf%2F8yCrmRqG%2F5kFQd5ehmcdM1nGgc09342gCgtexVDwtzGN9B786oNHxXT0A8WZAy4hh0ur3jatwjnmtM4gancoQqfvDr9vv1PwnGvOvFrNQGfouWr1w86%2BZOcuL5kvpdgQfOTKZgMlCDwJMJ3%2Bhb8GOqUBQI0UNoxISAe15QP3IWLU%2Bs0%2F4mw58iKmR6Sy26XjWQLFPxjeT7jOhdUMd%2Fw6bT3kfAo8JbY7Bdh3T6tFmz1Qc%2FinxEP3iLShWLe2r0y6i4fxOJDxmOGmDU5T5AHo%2FhWFlHby8FnjlrUIhLOBHVRPe2x7yoShHkLc2s0ariJzMewdQozUZLpv78ww%2FAE3CysZlRJY0a3Bph68cj1cEC1san58c2bK&X-Amz-Signature=5ba165e50f080415bf836afbd378bbd01873ed05faa14ca03a6f59b6e31c761f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
