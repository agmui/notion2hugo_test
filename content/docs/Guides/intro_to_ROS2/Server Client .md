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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJTJGEWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCEK3oABmGTw%2BZK3t5upTuty30qMYHfVzEBNIywzzZrXQIhALHW4SQLc11q8LX7PFhMyICW%2BQdVNK6iViUl27AO%2Bg8CKv8DCHwQABoMNjM3NDIzMTgzODA1IgxEyH6ESN%2BZF%2FcqKRcq3AMcmbe7pT8yYGaJfqd14EztNCXb8dHskbM7mhdXlJNLIr%2FxmFevwMEwyLOgqZRWqUH2BQlMKbPZmwv0I1iHRf4MTt8AfRPIMsq%2FNjg7JXyXt3d40TxxSBTdwpeDptJoQbEIVULnSLMz%2Bk8Q9VfxeCWr4nqZsq66T6iz6hAJdnpLpL7orClRfCi6k%2B1s7qhLvjCPCCflKBai%2Ba5wdqJGvm%2FbW0bVODEXRg3V%2BQtK%2BsuCY5WJUqx%2BJ2fv%2Fe8pmRTatnNi2QzTPUWY9oiKEQBCirSW%2BcGtOhNXbo%2FQ%2B%2BwW1tuMpjGoRLql1RplwsvbmhdpiWnf5W%2FyQzK6%2Bkza795yvIqTiTz6dxIQn9IldJ9aSf8JmC%2Fx4HSy1JtpePvRMk7qZFBEqMQAjUB38B1QWVmxpD8WRbY4YWhQb45ewUudXj13tzQW3FXVPrhUlcabWfQG3iHs6zan%2BaVI4NoGRI%2BlR9pbJ7UYxbevkOfm5DR%2BosaS7XsRIzv%2Bt7Ya9NpAcPdbYoa%2FxVCrSGK6ebcEoYMKu8yOd2GeGWUI%2BOEQUYHd3xWJ8IcCbMAe%2BpgymzV18SNHKEY3eW6MVA5ePf0To32FSE26WbWHLxs7cVl6GL5stWg7toTzIteGy1%2Fq3OpcajDX8IK%2BBjqkATepaiENuxiraiXesUS8ewCmc70By6vMU%2BJM3kGuVCKcRNba0%2FekkXi%2F2197C0CORuM4mFGfJSEXzYo01yQzrVOQkCDBBrLdMfmCDKHiZ6M0e0CtDb6lDU%2BrBCpgxLI8J6xlRPsCli8VW3GV%2BIoi62yogmx61vEKy1bW3ezVFFw7sZOAJI4WKviawR9Eaq4Js0N4Cf6nKH4HsE%2BYXnHJsMInTCqj&X-Amz-Signature=27ce796d3996b3bd3a8332cc9a06b8d7b5fe2b79d4814be9af748b9223520619&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJTJGEWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCEK3oABmGTw%2BZK3t5upTuty30qMYHfVzEBNIywzzZrXQIhALHW4SQLc11q8LX7PFhMyICW%2BQdVNK6iViUl27AO%2Bg8CKv8DCHwQABoMNjM3NDIzMTgzODA1IgxEyH6ESN%2BZF%2FcqKRcq3AMcmbe7pT8yYGaJfqd14EztNCXb8dHskbM7mhdXlJNLIr%2FxmFevwMEwyLOgqZRWqUH2BQlMKbPZmwv0I1iHRf4MTt8AfRPIMsq%2FNjg7JXyXt3d40TxxSBTdwpeDptJoQbEIVULnSLMz%2Bk8Q9VfxeCWr4nqZsq66T6iz6hAJdnpLpL7orClRfCi6k%2B1s7qhLvjCPCCflKBai%2Ba5wdqJGvm%2FbW0bVODEXRg3V%2BQtK%2BsuCY5WJUqx%2BJ2fv%2Fe8pmRTatnNi2QzTPUWY9oiKEQBCirSW%2BcGtOhNXbo%2FQ%2B%2BwW1tuMpjGoRLql1RplwsvbmhdpiWnf5W%2FyQzK6%2Bkza795yvIqTiTz6dxIQn9IldJ9aSf8JmC%2Fx4HSy1JtpePvRMk7qZFBEqMQAjUB38B1QWVmxpD8WRbY4YWhQb45ewUudXj13tzQW3FXVPrhUlcabWfQG3iHs6zan%2BaVI4NoGRI%2BlR9pbJ7UYxbevkOfm5DR%2BosaS7XsRIzv%2Bt7Ya9NpAcPdbYoa%2FxVCrSGK6ebcEoYMKu8yOd2GeGWUI%2BOEQUYHd3xWJ8IcCbMAe%2BpgymzV18SNHKEY3eW6MVA5ePf0To32FSE26WbWHLxs7cVl6GL5stWg7toTzIteGy1%2Fq3OpcajDX8IK%2BBjqkATepaiENuxiraiXesUS8ewCmc70By6vMU%2BJM3kGuVCKcRNba0%2FekkXi%2F2197C0CORuM4mFGfJSEXzYo01yQzrVOQkCDBBrLdMfmCDKHiZ6M0e0CtDb6lDU%2BrBCpgxLI8J6xlRPsCli8VW3GV%2BIoi62yogmx61vEKy1bW3ezVFFw7sZOAJI4WKviawR9Eaq4Js0N4Cf6nKH4HsE%2BYXnHJsMInTCqj&X-Amz-Signature=0d1fb458a87e82fb66a968b02f84692a52d38da8fc801f417f9a71703d2d1d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJTJGEWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCEK3oABmGTw%2BZK3t5upTuty30qMYHfVzEBNIywzzZrXQIhALHW4SQLc11q8LX7PFhMyICW%2BQdVNK6iViUl27AO%2Bg8CKv8DCHwQABoMNjM3NDIzMTgzODA1IgxEyH6ESN%2BZF%2FcqKRcq3AMcmbe7pT8yYGaJfqd14EztNCXb8dHskbM7mhdXlJNLIr%2FxmFevwMEwyLOgqZRWqUH2BQlMKbPZmwv0I1iHRf4MTt8AfRPIMsq%2FNjg7JXyXt3d40TxxSBTdwpeDptJoQbEIVULnSLMz%2Bk8Q9VfxeCWr4nqZsq66T6iz6hAJdnpLpL7orClRfCi6k%2B1s7qhLvjCPCCflKBai%2Ba5wdqJGvm%2FbW0bVODEXRg3V%2BQtK%2BsuCY5WJUqx%2BJ2fv%2Fe8pmRTatnNi2QzTPUWY9oiKEQBCirSW%2BcGtOhNXbo%2FQ%2B%2BwW1tuMpjGoRLql1RplwsvbmhdpiWnf5W%2FyQzK6%2Bkza795yvIqTiTz6dxIQn9IldJ9aSf8JmC%2Fx4HSy1JtpePvRMk7qZFBEqMQAjUB38B1QWVmxpD8WRbY4YWhQb45ewUudXj13tzQW3FXVPrhUlcabWfQG3iHs6zan%2BaVI4NoGRI%2BlR9pbJ7UYxbevkOfm5DR%2BosaS7XsRIzv%2Bt7Ya9NpAcPdbYoa%2FxVCrSGK6ebcEoYMKu8yOd2GeGWUI%2BOEQUYHd3xWJ8IcCbMAe%2BpgymzV18SNHKEY3eW6MVA5ePf0To32FSE26WbWHLxs7cVl6GL5stWg7toTzIteGy1%2Fq3OpcajDX8IK%2BBjqkATepaiENuxiraiXesUS8ewCmc70By6vMU%2BJM3kGuVCKcRNba0%2FekkXi%2F2197C0CORuM4mFGfJSEXzYo01yQzrVOQkCDBBrLdMfmCDKHiZ6M0e0CtDb6lDU%2BrBCpgxLI8J6xlRPsCli8VW3GV%2BIoi62yogmx61vEKy1bW3ezVFFw7sZOAJI4WKviawR9Eaq4Js0N4Cf6nKH4HsE%2BYXnHJsMInTCqj&X-Amz-Signature=6131553d3f3e4f83d079e0edbb9a714aa7ac4d1b825ec5d34dee9401076bd653&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJTJGEWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCEK3oABmGTw%2BZK3t5upTuty30qMYHfVzEBNIywzzZrXQIhALHW4SQLc11q8LX7PFhMyICW%2BQdVNK6iViUl27AO%2Bg8CKv8DCHwQABoMNjM3NDIzMTgzODA1IgxEyH6ESN%2BZF%2FcqKRcq3AMcmbe7pT8yYGaJfqd14EztNCXb8dHskbM7mhdXlJNLIr%2FxmFevwMEwyLOgqZRWqUH2BQlMKbPZmwv0I1iHRf4MTt8AfRPIMsq%2FNjg7JXyXt3d40TxxSBTdwpeDptJoQbEIVULnSLMz%2Bk8Q9VfxeCWr4nqZsq66T6iz6hAJdnpLpL7orClRfCi6k%2B1s7qhLvjCPCCflKBai%2Ba5wdqJGvm%2FbW0bVODEXRg3V%2BQtK%2BsuCY5WJUqx%2BJ2fv%2Fe8pmRTatnNi2QzTPUWY9oiKEQBCirSW%2BcGtOhNXbo%2FQ%2B%2BwW1tuMpjGoRLql1RplwsvbmhdpiWnf5W%2FyQzK6%2Bkza795yvIqTiTz6dxIQn9IldJ9aSf8JmC%2Fx4HSy1JtpePvRMk7qZFBEqMQAjUB38B1QWVmxpD8WRbY4YWhQb45ewUudXj13tzQW3FXVPrhUlcabWfQG3iHs6zan%2BaVI4NoGRI%2BlR9pbJ7UYxbevkOfm5DR%2BosaS7XsRIzv%2Bt7Ya9NpAcPdbYoa%2FxVCrSGK6ebcEoYMKu8yOd2GeGWUI%2BOEQUYHd3xWJ8IcCbMAe%2BpgymzV18SNHKEY3eW6MVA5ePf0To32FSE26WbWHLxs7cVl6GL5stWg7toTzIteGy1%2Fq3OpcajDX8IK%2BBjqkATepaiENuxiraiXesUS8ewCmc70By6vMU%2BJM3kGuVCKcRNba0%2FekkXi%2F2197C0CORuM4mFGfJSEXzYo01yQzrVOQkCDBBrLdMfmCDKHiZ6M0e0CtDb6lDU%2BrBCpgxLI8J6xlRPsCli8VW3GV%2BIoi62yogmx61vEKy1bW3ezVFFw7sZOAJI4WKviawR9Eaq4Js0N4Cf6nKH4HsE%2BYXnHJsMInTCqj&X-Amz-Signature=37339eb3191e0b0f4d78ccee3bc8f0f4ed2ca3f877f5647a80f4bbbb330f29cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJTJGEWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCEK3oABmGTw%2BZK3t5upTuty30qMYHfVzEBNIywzzZrXQIhALHW4SQLc11q8LX7PFhMyICW%2BQdVNK6iViUl27AO%2Bg8CKv8DCHwQABoMNjM3NDIzMTgzODA1IgxEyH6ESN%2BZF%2FcqKRcq3AMcmbe7pT8yYGaJfqd14EztNCXb8dHskbM7mhdXlJNLIr%2FxmFevwMEwyLOgqZRWqUH2BQlMKbPZmwv0I1iHRf4MTt8AfRPIMsq%2FNjg7JXyXt3d40TxxSBTdwpeDptJoQbEIVULnSLMz%2Bk8Q9VfxeCWr4nqZsq66T6iz6hAJdnpLpL7orClRfCi6k%2B1s7qhLvjCPCCflKBai%2Ba5wdqJGvm%2FbW0bVODEXRg3V%2BQtK%2BsuCY5WJUqx%2BJ2fv%2Fe8pmRTatnNi2QzTPUWY9oiKEQBCirSW%2BcGtOhNXbo%2FQ%2B%2BwW1tuMpjGoRLql1RplwsvbmhdpiWnf5W%2FyQzK6%2Bkza795yvIqTiTz6dxIQn9IldJ9aSf8JmC%2Fx4HSy1JtpePvRMk7qZFBEqMQAjUB38B1QWVmxpD8WRbY4YWhQb45ewUudXj13tzQW3FXVPrhUlcabWfQG3iHs6zan%2BaVI4NoGRI%2BlR9pbJ7UYxbevkOfm5DR%2BosaS7XsRIzv%2Bt7Ya9NpAcPdbYoa%2FxVCrSGK6ebcEoYMKu8yOd2GeGWUI%2BOEQUYHd3xWJ8IcCbMAe%2BpgymzV18SNHKEY3eW6MVA5ePf0To32FSE26WbWHLxs7cVl6GL5stWg7toTzIteGy1%2Fq3OpcajDX8IK%2BBjqkATepaiENuxiraiXesUS8ewCmc70By6vMU%2BJM3kGuVCKcRNba0%2FekkXi%2F2197C0CORuM4mFGfJSEXzYo01yQzrVOQkCDBBrLdMfmCDKHiZ6M0e0CtDb6lDU%2BrBCpgxLI8J6xlRPsCli8VW3GV%2BIoi62yogmx61vEKy1bW3ezVFFw7sZOAJI4WKviawR9Eaq4Js0N4Cf6nKH4HsE%2BYXnHJsMInTCqj&X-Amz-Signature=6259e64402b5c3bfcdb1cec753dc3aad5b39869cf89527f0dd5380ae4be49274&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
