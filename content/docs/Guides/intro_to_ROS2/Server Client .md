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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XNNYLI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl72CX9ARrB4gokoWSFHXuOAWPGlk%2BvOCvj5Zzq8SL7AIhANMXx3JiOEgazNa1xR4iz3N9l891YnC%2FuqDGYWfcxn9RKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqc2MFbkeKaoKLD1Yq3AOfapsGJvpgjIlZP36ql1MbCblIPhliOu2kriVSMPjKGTSe7NsM7H8NUzmyWJa8Fptj3ExWpEg1oaGmZ8nK6lCskL%2FaCtYIrSHbX9tzti1kd3uZP%2BLzPyi9P6Lxg7iF9oy%2FgUTYTk1ROhZD9Of6V3HlrB3L%2Fu%2BICcG5X1W9%2BYOxrXbua9G3nzJrCoBur7%2FZfPUG4DwWx0NuFp9igjT1lNLo0fvoHpBWItnKA97PMm7fj2l7KbxC1rXAeaao8mfxvnCjf78QL90dd1VqWySA4vllerEZX0ZdzU1WbK6InA3Up8GnI04G6gnab7IHTApdQ30n0TVxNpttTi7yGCzBuit1B5YwTC7ZPMEvnGaGb6thTdcUs1mEPOhppvWCLWmvtkXG6zoqy5R5zEoMSSDbMTPuelvF%2B%2FMkl8FISCJ7KbPLMppUHd4f9Pw6fWD6QFsPn4YBoFdGKlBTeeooMrp%2BEctPKjL6LRFS9ZFM2%2FH459M%2BIwxQgZ3oeFxGSqtIpPdUUmsrB9IGBR7CdMtXZVtaX%2B58PgCDIKRphwvb2pH3DCUNfLKgE87xGJYQEj2QuGP93j2zxH5cRfuAuMYJRBix%2BQkB0NGMqrqk9xafr1GSOh69ZvpPO%2By8EHTSa6PiPDDNoM3CBjqkAZ%2FChpFWCgFjqyBblXZx60m86Jmg2zIJw5orpMmIZeUetHMgR00Wi7AZxE7KCrqLJ6hCcMIM50KqrnRxnbhtkp2%2Fpxu46I0q5pgyZX5Ai7ydOR6jD3foE6ZurkKVnd0VWg%2FEWs2QxGbjaRZmnjHBT24MIzbO4pY%2FrUEf%2FkoIVt7IBAhyD26aYvtUTpNqGF5scjDhx4RdkBqRnMz5Brf61I%2FJIiX1&X-Amz-Signature=1dbe702ad5b51b452d6ebd97ecff84990e4ee0ffd7f358879eda7eae561a1ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XNNYLI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl72CX9ARrB4gokoWSFHXuOAWPGlk%2BvOCvj5Zzq8SL7AIhANMXx3JiOEgazNa1xR4iz3N9l891YnC%2FuqDGYWfcxn9RKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqc2MFbkeKaoKLD1Yq3AOfapsGJvpgjIlZP36ql1MbCblIPhliOu2kriVSMPjKGTSe7NsM7H8NUzmyWJa8Fptj3ExWpEg1oaGmZ8nK6lCskL%2FaCtYIrSHbX9tzti1kd3uZP%2BLzPyi9P6Lxg7iF9oy%2FgUTYTk1ROhZD9Of6V3HlrB3L%2Fu%2BICcG5X1W9%2BYOxrXbua9G3nzJrCoBur7%2FZfPUG4DwWx0NuFp9igjT1lNLo0fvoHpBWItnKA97PMm7fj2l7KbxC1rXAeaao8mfxvnCjf78QL90dd1VqWySA4vllerEZX0ZdzU1WbK6InA3Up8GnI04G6gnab7IHTApdQ30n0TVxNpttTi7yGCzBuit1B5YwTC7ZPMEvnGaGb6thTdcUs1mEPOhppvWCLWmvtkXG6zoqy5R5zEoMSSDbMTPuelvF%2B%2FMkl8FISCJ7KbPLMppUHd4f9Pw6fWD6QFsPn4YBoFdGKlBTeeooMrp%2BEctPKjL6LRFS9ZFM2%2FH459M%2BIwxQgZ3oeFxGSqtIpPdUUmsrB9IGBR7CdMtXZVtaX%2B58PgCDIKRphwvb2pH3DCUNfLKgE87xGJYQEj2QuGP93j2zxH5cRfuAuMYJRBix%2BQkB0NGMqrqk9xafr1GSOh69ZvpPO%2By8EHTSa6PiPDDNoM3CBjqkAZ%2FChpFWCgFjqyBblXZx60m86Jmg2zIJw5orpMmIZeUetHMgR00Wi7AZxE7KCrqLJ6hCcMIM50KqrnRxnbhtkp2%2Fpxu46I0q5pgyZX5Ai7ydOR6jD3foE6ZurkKVnd0VWg%2FEWs2QxGbjaRZmnjHBT24MIzbO4pY%2FrUEf%2FkoIVt7IBAhyD26aYvtUTpNqGF5scjDhx4RdkBqRnMz5Brf61I%2FJIiX1&X-Amz-Signature=4019ce2452146a4046b52e00c68a99616a3537c2ac73349fc979337fc6a0b719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XNNYLI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl72CX9ARrB4gokoWSFHXuOAWPGlk%2BvOCvj5Zzq8SL7AIhANMXx3JiOEgazNa1xR4iz3N9l891YnC%2FuqDGYWfcxn9RKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqc2MFbkeKaoKLD1Yq3AOfapsGJvpgjIlZP36ql1MbCblIPhliOu2kriVSMPjKGTSe7NsM7H8NUzmyWJa8Fptj3ExWpEg1oaGmZ8nK6lCskL%2FaCtYIrSHbX9tzti1kd3uZP%2BLzPyi9P6Lxg7iF9oy%2FgUTYTk1ROhZD9Of6V3HlrB3L%2Fu%2BICcG5X1W9%2BYOxrXbua9G3nzJrCoBur7%2FZfPUG4DwWx0NuFp9igjT1lNLo0fvoHpBWItnKA97PMm7fj2l7KbxC1rXAeaao8mfxvnCjf78QL90dd1VqWySA4vllerEZX0ZdzU1WbK6InA3Up8GnI04G6gnab7IHTApdQ30n0TVxNpttTi7yGCzBuit1B5YwTC7ZPMEvnGaGb6thTdcUs1mEPOhppvWCLWmvtkXG6zoqy5R5zEoMSSDbMTPuelvF%2B%2FMkl8FISCJ7KbPLMppUHd4f9Pw6fWD6QFsPn4YBoFdGKlBTeeooMrp%2BEctPKjL6LRFS9ZFM2%2FH459M%2BIwxQgZ3oeFxGSqtIpPdUUmsrB9IGBR7CdMtXZVtaX%2B58PgCDIKRphwvb2pH3DCUNfLKgE87xGJYQEj2QuGP93j2zxH5cRfuAuMYJRBix%2BQkB0NGMqrqk9xafr1GSOh69ZvpPO%2By8EHTSa6PiPDDNoM3CBjqkAZ%2FChpFWCgFjqyBblXZx60m86Jmg2zIJw5orpMmIZeUetHMgR00Wi7AZxE7KCrqLJ6hCcMIM50KqrnRxnbhtkp2%2Fpxu46I0q5pgyZX5Ai7ydOR6jD3foE6ZurkKVnd0VWg%2FEWs2QxGbjaRZmnjHBT24MIzbO4pY%2FrUEf%2FkoIVt7IBAhyD26aYvtUTpNqGF5scjDhx4RdkBqRnMz5Brf61I%2FJIiX1&X-Amz-Signature=f156a890f1a58363090cadd552211da0c5a8ff2d452b200d410b3fdb5fad4c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XNNYLI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl72CX9ARrB4gokoWSFHXuOAWPGlk%2BvOCvj5Zzq8SL7AIhANMXx3JiOEgazNa1xR4iz3N9l891YnC%2FuqDGYWfcxn9RKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqc2MFbkeKaoKLD1Yq3AOfapsGJvpgjIlZP36ql1MbCblIPhliOu2kriVSMPjKGTSe7NsM7H8NUzmyWJa8Fptj3ExWpEg1oaGmZ8nK6lCskL%2FaCtYIrSHbX9tzti1kd3uZP%2BLzPyi9P6Lxg7iF9oy%2FgUTYTk1ROhZD9Of6V3HlrB3L%2Fu%2BICcG5X1W9%2BYOxrXbua9G3nzJrCoBur7%2FZfPUG4DwWx0NuFp9igjT1lNLo0fvoHpBWItnKA97PMm7fj2l7KbxC1rXAeaao8mfxvnCjf78QL90dd1VqWySA4vllerEZX0ZdzU1WbK6InA3Up8GnI04G6gnab7IHTApdQ30n0TVxNpttTi7yGCzBuit1B5YwTC7ZPMEvnGaGb6thTdcUs1mEPOhppvWCLWmvtkXG6zoqy5R5zEoMSSDbMTPuelvF%2B%2FMkl8FISCJ7KbPLMppUHd4f9Pw6fWD6QFsPn4YBoFdGKlBTeeooMrp%2BEctPKjL6LRFS9ZFM2%2FH459M%2BIwxQgZ3oeFxGSqtIpPdUUmsrB9IGBR7CdMtXZVtaX%2B58PgCDIKRphwvb2pH3DCUNfLKgE87xGJYQEj2QuGP93j2zxH5cRfuAuMYJRBix%2BQkB0NGMqrqk9xafr1GSOh69ZvpPO%2By8EHTSa6PiPDDNoM3CBjqkAZ%2FChpFWCgFjqyBblXZx60m86Jmg2zIJw5orpMmIZeUetHMgR00Wi7AZxE7KCrqLJ6hCcMIM50KqrnRxnbhtkp2%2Fpxu46I0q5pgyZX5Ai7ydOR6jD3foE6ZurkKVnd0VWg%2FEWs2QxGbjaRZmnjHBT24MIzbO4pY%2FrUEf%2FkoIVt7IBAhyD26aYvtUTpNqGF5scjDhx4RdkBqRnMz5Brf61I%2FJIiX1&X-Amz-Signature=9590e371dbec4dc45eebc912f06fccfd1a363f7478a00a3dffda816e42c54a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XNNYLI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl72CX9ARrB4gokoWSFHXuOAWPGlk%2BvOCvj5Zzq8SL7AIhANMXx3JiOEgazNa1xR4iz3N9l891YnC%2FuqDGYWfcxn9RKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqc2MFbkeKaoKLD1Yq3AOfapsGJvpgjIlZP36ql1MbCblIPhliOu2kriVSMPjKGTSe7NsM7H8NUzmyWJa8Fptj3ExWpEg1oaGmZ8nK6lCskL%2FaCtYIrSHbX9tzti1kd3uZP%2BLzPyi9P6Lxg7iF9oy%2FgUTYTk1ROhZD9Of6V3HlrB3L%2Fu%2BICcG5X1W9%2BYOxrXbua9G3nzJrCoBur7%2FZfPUG4DwWx0NuFp9igjT1lNLo0fvoHpBWItnKA97PMm7fj2l7KbxC1rXAeaao8mfxvnCjf78QL90dd1VqWySA4vllerEZX0ZdzU1WbK6InA3Up8GnI04G6gnab7IHTApdQ30n0TVxNpttTi7yGCzBuit1B5YwTC7ZPMEvnGaGb6thTdcUs1mEPOhppvWCLWmvtkXG6zoqy5R5zEoMSSDbMTPuelvF%2B%2FMkl8FISCJ7KbPLMppUHd4f9Pw6fWD6QFsPn4YBoFdGKlBTeeooMrp%2BEctPKjL6LRFS9ZFM2%2FH459M%2BIwxQgZ3oeFxGSqtIpPdUUmsrB9IGBR7CdMtXZVtaX%2B58PgCDIKRphwvb2pH3DCUNfLKgE87xGJYQEj2QuGP93j2zxH5cRfuAuMYJRBix%2BQkB0NGMqrqk9xafr1GSOh69ZvpPO%2By8EHTSa6PiPDDNoM3CBjqkAZ%2FChpFWCgFjqyBblXZx60m86Jmg2zIJw5orpMmIZeUetHMgR00Wi7AZxE7KCrqLJ6hCcMIM50KqrnRxnbhtkp2%2Fpxu46I0q5pgyZX5Ai7ydOR6jD3foE6ZurkKVnd0VWg%2FEWs2QxGbjaRZmnjHBT24MIzbO4pY%2FrUEf%2FkoIVt7IBAhyD26aYvtUTpNqGF5scjDhx4RdkBqRnMz5Brf61I%2FJIiX1&X-Amz-Signature=630d8df2b8cdfd6fe5bbfdea01e02430c139cd402ea5cb626ec0fecfab9f73fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
