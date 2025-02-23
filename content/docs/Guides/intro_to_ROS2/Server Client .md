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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7F7P7BI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTwu5iKbcC7MtLMOEOeBq4jHfD%2FTVOsqenfjvazN5ergIgbBqm%2FF%2FsrnHIwYGXOxbFYgovMLKVHedCej6lcXOO%2BP8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOlL%2BsbohC2HOfvnByrcAy2X1N7JWGRM3O7bw1Zp8QTriNHDmlQ2eso6Y2UvoFi%2F2tRH%2FYGX03GL3AtIlxzKyUfkXEo%2Bto7Axvyxyo1IKIFGYj66ndVVv849DrnVAZc3H4N9t72aN738oTFiPNwSvMUlJ8J5tTiN%2BKG%2Bl1dwtT4MuJsYijLOfzuF%2FA3am8Rhn%2FFck%2FLNLz87DHp0uyKZYJstOuoRb0xU28yixX8YYi1fww2QqMgBQmHEsmDGBY5JvJi8oR8wTCtd%2BZ1axCtY1U2NtXfbxPVrJx9cbiFOV1MnrkNop4u5gzWSls8N2V3IrjYBIwyIo%2FzoRPoO7JoK519%2BMs0xjNe1AfxZ4u1bdVymneADgSrUtNNqzG3dyWzxj3SeG1SsLbVareXhPcP28CdXmalM7FA%2BpZ0qmKJ7mZjBjckN%2FlMvLWLdEgt5IdCuZ3ivuv8D2kWiyuQ%2FMw%2Ff%2BYk5eocGZb2AWKvHflQOOzMudiiX1WdGS00cbJHd5JtAp9Qqxd0zDcLH27iLD1HiORPQoE4FuSA7KgNtatiKYHdWY4Nc4qXF7oGR7biWRwGK86WA20UnbmUTs%2B748LldQc4rOiXbjnaPwMJbterYhtVP6xeFe6T835Nj67jay7veYl0cCXZJ1vhI4YR1MJrS7b0GOqUBswHc675xVcmRDJusbdL2WvwzejtmT%2B6Ca0JECReJV66vtBTZdLGFSvVF2Q4Pm4qoDZuKJLVLHopINZ2bgRTEcXK5zAv3%2F471PafA8gdK0vzk%2B3CtB44Ie59XLzp3hAndx1y8MJLSbyUfR%2B0VGvfhVJbSMgHm8J9HFqx%2FcsOJrV1gsWicSgef6OZxQOtb3KNqI0dWweKRSJTo%2BL2ZidhiNSTrpiNW&X-Amz-Signature=8038c03a9b42fc62d172c6fcecb466eaf18b1db52a80ce43bfc2703c06e4b01b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7F7P7BI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTwu5iKbcC7MtLMOEOeBq4jHfD%2FTVOsqenfjvazN5ergIgbBqm%2FF%2FsrnHIwYGXOxbFYgovMLKVHedCej6lcXOO%2BP8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOlL%2BsbohC2HOfvnByrcAy2X1N7JWGRM3O7bw1Zp8QTriNHDmlQ2eso6Y2UvoFi%2F2tRH%2FYGX03GL3AtIlxzKyUfkXEo%2Bto7Axvyxyo1IKIFGYj66ndVVv849DrnVAZc3H4N9t72aN738oTFiPNwSvMUlJ8J5tTiN%2BKG%2Bl1dwtT4MuJsYijLOfzuF%2FA3am8Rhn%2FFck%2FLNLz87DHp0uyKZYJstOuoRb0xU28yixX8YYi1fww2QqMgBQmHEsmDGBY5JvJi8oR8wTCtd%2BZ1axCtY1U2NtXfbxPVrJx9cbiFOV1MnrkNop4u5gzWSls8N2V3IrjYBIwyIo%2FzoRPoO7JoK519%2BMs0xjNe1AfxZ4u1bdVymneADgSrUtNNqzG3dyWzxj3SeG1SsLbVareXhPcP28CdXmalM7FA%2BpZ0qmKJ7mZjBjckN%2FlMvLWLdEgt5IdCuZ3ivuv8D2kWiyuQ%2FMw%2Ff%2BYk5eocGZb2AWKvHflQOOzMudiiX1WdGS00cbJHd5JtAp9Qqxd0zDcLH27iLD1HiORPQoE4FuSA7KgNtatiKYHdWY4Nc4qXF7oGR7biWRwGK86WA20UnbmUTs%2B748LldQc4rOiXbjnaPwMJbterYhtVP6xeFe6T835Nj67jay7veYl0cCXZJ1vhI4YR1MJrS7b0GOqUBswHc675xVcmRDJusbdL2WvwzejtmT%2B6Ca0JECReJV66vtBTZdLGFSvVF2Q4Pm4qoDZuKJLVLHopINZ2bgRTEcXK5zAv3%2F471PafA8gdK0vzk%2B3CtB44Ie59XLzp3hAndx1y8MJLSbyUfR%2B0VGvfhVJbSMgHm8J9HFqx%2FcsOJrV1gsWicSgef6OZxQOtb3KNqI0dWweKRSJTo%2BL2ZidhiNSTrpiNW&X-Amz-Signature=1f2ffb599dfcd680fa41191ba1b482afb57b0778a3af7d5ef3adf38a3a12a590&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7F7P7BI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTwu5iKbcC7MtLMOEOeBq4jHfD%2FTVOsqenfjvazN5ergIgbBqm%2FF%2FsrnHIwYGXOxbFYgovMLKVHedCej6lcXOO%2BP8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOlL%2BsbohC2HOfvnByrcAy2X1N7JWGRM3O7bw1Zp8QTriNHDmlQ2eso6Y2UvoFi%2F2tRH%2FYGX03GL3AtIlxzKyUfkXEo%2Bto7Axvyxyo1IKIFGYj66ndVVv849DrnVAZc3H4N9t72aN738oTFiPNwSvMUlJ8J5tTiN%2BKG%2Bl1dwtT4MuJsYijLOfzuF%2FA3am8Rhn%2FFck%2FLNLz87DHp0uyKZYJstOuoRb0xU28yixX8YYi1fww2QqMgBQmHEsmDGBY5JvJi8oR8wTCtd%2BZ1axCtY1U2NtXfbxPVrJx9cbiFOV1MnrkNop4u5gzWSls8N2V3IrjYBIwyIo%2FzoRPoO7JoK519%2BMs0xjNe1AfxZ4u1bdVymneADgSrUtNNqzG3dyWzxj3SeG1SsLbVareXhPcP28CdXmalM7FA%2BpZ0qmKJ7mZjBjckN%2FlMvLWLdEgt5IdCuZ3ivuv8D2kWiyuQ%2FMw%2Ff%2BYk5eocGZb2AWKvHflQOOzMudiiX1WdGS00cbJHd5JtAp9Qqxd0zDcLH27iLD1HiORPQoE4FuSA7KgNtatiKYHdWY4Nc4qXF7oGR7biWRwGK86WA20UnbmUTs%2B748LldQc4rOiXbjnaPwMJbterYhtVP6xeFe6T835Nj67jay7veYl0cCXZJ1vhI4YR1MJrS7b0GOqUBswHc675xVcmRDJusbdL2WvwzejtmT%2B6Ca0JECReJV66vtBTZdLGFSvVF2Q4Pm4qoDZuKJLVLHopINZ2bgRTEcXK5zAv3%2F471PafA8gdK0vzk%2B3CtB44Ie59XLzp3hAndx1y8MJLSbyUfR%2B0VGvfhVJbSMgHm8J9HFqx%2FcsOJrV1gsWicSgef6OZxQOtb3KNqI0dWweKRSJTo%2BL2ZidhiNSTrpiNW&X-Amz-Signature=299e634bc44ae92d2ab87effed723589f073d650fa7c7204e41dd9f37d1ffb38&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7F7P7BI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTwu5iKbcC7MtLMOEOeBq4jHfD%2FTVOsqenfjvazN5ergIgbBqm%2FF%2FsrnHIwYGXOxbFYgovMLKVHedCej6lcXOO%2BP8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOlL%2BsbohC2HOfvnByrcAy2X1N7JWGRM3O7bw1Zp8QTriNHDmlQ2eso6Y2UvoFi%2F2tRH%2FYGX03GL3AtIlxzKyUfkXEo%2Bto7Axvyxyo1IKIFGYj66ndVVv849DrnVAZc3H4N9t72aN738oTFiPNwSvMUlJ8J5tTiN%2BKG%2Bl1dwtT4MuJsYijLOfzuF%2FA3am8Rhn%2FFck%2FLNLz87DHp0uyKZYJstOuoRb0xU28yixX8YYi1fww2QqMgBQmHEsmDGBY5JvJi8oR8wTCtd%2BZ1axCtY1U2NtXfbxPVrJx9cbiFOV1MnrkNop4u5gzWSls8N2V3IrjYBIwyIo%2FzoRPoO7JoK519%2BMs0xjNe1AfxZ4u1bdVymneADgSrUtNNqzG3dyWzxj3SeG1SsLbVareXhPcP28CdXmalM7FA%2BpZ0qmKJ7mZjBjckN%2FlMvLWLdEgt5IdCuZ3ivuv8D2kWiyuQ%2FMw%2Ff%2BYk5eocGZb2AWKvHflQOOzMudiiX1WdGS00cbJHd5JtAp9Qqxd0zDcLH27iLD1HiORPQoE4FuSA7KgNtatiKYHdWY4Nc4qXF7oGR7biWRwGK86WA20UnbmUTs%2B748LldQc4rOiXbjnaPwMJbterYhtVP6xeFe6T835Nj67jay7veYl0cCXZJ1vhI4YR1MJrS7b0GOqUBswHc675xVcmRDJusbdL2WvwzejtmT%2B6Ca0JECReJV66vtBTZdLGFSvVF2Q4Pm4qoDZuKJLVLHopINZ2bgRTEcXK5zAv3%2F471PafA8gdK0vzk%2B3CtB44Ie59XLzp3hAndx1y8MJLSbyUfR%2B0VGvfhVJbSMgHm8J9HFqx%2FcsOJrV1gsWicSgef6OZxQOtb3KNqI0dWweKRSJTo%2BL2ZidhiNSTrpiNW&X-Amz-Signature=8ff385239d9f5d6b9f015c8d6b7fb113f939c34ba156aa9abb3dc9211b8dd2a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7F7P7BI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTwu5iKbcC7MtLMOEOeBq4jHfD%2FTVOsqenfjvazN5ergIgbBqm%2FF%2FsrnHIwYGXOxbFYgovMLKVHedCej6lcXOO%2BP8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOlL%2BsbohC2HOfvnByrcAy2X1N7JWGRM3O7bw1Zp8QTriNHDmlQ2eso6Y2UvoFi%2F2tRH%2FYGX03GL3AtIlxzKyUfkXEo%2Bto7Axvyxyo1IKIFGYj66ndVVv849DrnVAZc3H4N9t72aN738oTFiPNwSvMUlJ8J5tTiN%2BKG%2Bl1dwtT4MuJsYijLOfzuF%2FA3am8Rhn%2FFck%2FLNLz87DHp0uyKZYJstOuoRb0xU28yixX8YYi1fww2QqMgBQmHEsmDGBY5JvJi8oR8wTCtd%2BZ1axCtY1U2NtXfbxPVrJx9cbiFOV1MnrkNop4u5gzWSls8N2V3IrjYBIwyIo%2FzoRPoO7JoK519%2BMs0xjNe1AfxZ4u1bdVymneADgSrUtNNqzG3dyWzxj3SeG1SsLbVareXhPcP28CdXmalM7FA%2BpZ0qmKJ7mZjBjckN%2FlMvLWLdEgt5IdCuZ3ivuv8D2kWiyuQ%2FMw%2Ff%2BYk5eocGZb2AWKvHflQOOzMudiiX1WdGS00cbJHd5JtAp9Qqxd0zDcLH27iLD1HiORPQoE4FuSA7KgNtatiKYHdWY4Nc4qXF7oGR7biWRwGK86WA20UnbmUTs%2B748LldQc4rOiXbjnaPwMJbterYhtVP6xeFe6T835Nj67jay7veYl0cCXZJ1vhI4YR1MJrS7b0GOqUBswHc675xVcmRDJusbdL2WvwzejtmT%2B6Ca0JECReJV66vtBTZdLGFSvVF2Q4Pm4qoDZuKJLVLHopINZ2bgRTEcXK5zAv3%2F471PafA8gdK0vzk%2B3CtB44Ie59XLzp3hAndx1y8MJLSbyUfR%2B0VGvfhVJbSMgHm8J9HFqx%2FcsOJrV1gsWicSgef6OZxQOtb3KNqI0dWweKRSJTo%2BL2ZidhiNSTrpiNW&X-Amz-Signature=d851cf171966d3812af260188495f139a62a7f81643850562aff6b6f74c42214&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
