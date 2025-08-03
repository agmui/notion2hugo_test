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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTCA5P4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4KZ%2Brwd%2B6Q7S1WkBy8hc5XG6w%2FtdfB%2FVJ8rQAARhZeQIhAIbMWI3JN6am%2BJgCBMidWoCJ45G59ZJrqiYcsidIznVPKv8DCCQQABoMNjM3NDIzMTgzODA1Igze4hljfxeYy%2FjW54Iq3ANN2s%2Botz90DfKL9LimzpTjJrkKpz4%2BySRWWT3pXboLueP7psju%2FVRVMjKkTXh28uOJW4ZJv9mzNIcZJ6eTpbKF60Y%2FywNfN0Hou9FXdlSCnDVqu%2BjHKXcBygJopLuTMZ3K8RozXRShrjNp1lhRRNet2edhfD42NYXfL3DUBvwzZy0dZo7n9Mx6IO9w6JSMZG60%2Fvm16F%2FiHygukZyTBHT8nI7vujkP7As6mMpMnjhd%2FAJIpt7FXpDt1JPT2p2Q5E1PDkt4n7%2BwAcKnXw%2FnUcs%2FneuabZ5kr8HgWrR8gSNYQjFrD%2BOExYk37yUjTUEccmEoXygMSCnpTHPDPNL3IUAWypi636sG6YddDlUFCocp0Q%2B9U2S9r86JTNu6p8PYAjhWS1QMz1WeSgTNZBJoNVj6O9bcEpuVWeR2VgJD3CErUoixjNSLBF98cBNwuTMXLxwVINW7w1B5zLqwjh7cSGaL0NBAyUQDKM7Yje7NjxsBHcDOHBB3H6lpfQwmAtNtC%2BLRJIzqBv4hv9KVSTW1HX3R8Wv7iH2H0S2G4NqyUZV2f4VMLV8VP7cINh0AP%2F1S5rm2wzF1pJZbA4Qn60AiYyqHTAFSRpFKaieMrA1MKfXHtMcryjumCK6I52URLTCOorvEBjqkAbLhm5jDpmfg3hxxOzOVgL5WY63%2F41vhIQkkXxqYGC2rGTsWx92EPEilC%2B0ft5F%2BPhCoK07%2BvbZRjWKxIZF%2Fce0fCrGIMDqLbjShDuGJBFwxIOIa1ujkuD0e5FUMKd0JSDVfZH30wBd2DlkQnOQOHKep4xuhGSPEun%2F3cfwrDlu%2Fsz2j6IKraBj2oivNOasO99tlazrjmMs6mYGCSOVpwA7lLCwS&X-Amz-Signature=f3ad9291b699ec7eb05f9037559199d2bf03a321941699ef8f029e60844a8e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTCA5P4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4KZ%2Brwd%2B6Q7S1WkBy8hc5XG6w%2FtdfB%2FVJ8rQAARhZeQIhAIbMWI3JN6am%2BJgCBMidWoCJ45G59ZJrqiYcsidIznVPKv8DCCQQABoMNjM3NDIzMTgzODA1Igze4hljfxeYy%2FjW54Iq3ANN2s%2Botz90DfKL9LimzpTjJrkKpz4%2BySRWWT3pXboLueP7psju%2FVRVMjKkTXh28uOJW4ZJv9mzNIcZJ6eTpbKF60Y%2FywNfN0Hou9FXdlSCnDVqu%2BjHKXcBygJopLuTMZ3K8RozXRShrjNp1lhRRNet2edhfD42NYXfL3DUBvwzZy0dZo7n9Mx6IO9w6JSMZG60%2Fvm16F%2FiHygukZyTBHT8nI7vujkP7As6mMpMnjhd%2FAJIpt7FXpDt1JPT2p2Q5E1PDkt4n7%2BwAcKnXw%2FnUcs%2FneuabZ5kr8HgWrR8gSNYQjFrD%2BOExYk37yUjTUEccmEoXygMSCnpTHPDPNL3IUAWypi636sG6YddDlUFCocp0Q%2B9U2S9r86JTNu6p8PYAjhWS1QMz1WeSgTNZBJoNVj6O9bcEpuVWeR2VgJD3CErUoixjNSLBF98cBNwuTMXLxwVINW7w1B5zLqwjh7cSGaL0NBAyUQDKM7Yje7NjxsBHcDOHBB3H6lpfQwmAtNtC%2BLRJIzqBv4hv9KVSTW1HX3R8Wv7iH2H0S2G4NqyUZV2f4VMLV8VP7cINh0AP%2F1S5rm2wzF1pJZbA4Qn60AiYyqHTAFSRpFKaieMrA1MKfXHtMcryjumCK6I52URLTCOorvEBjqkAbLhm5jDpmfg3hxxOzOVgL5WY63%2F41vhIQkkXxqYGC2rGTsWx92EPEilC%2B0ft5F%2BPhCoK07%2BvbZRjWKxIZF%2Fce0fCrGIMDqLbjShDuGJBFwxIOIa1ujkuD0e5FUMKd0JSDVfZH30wBd2DlkQnOQOHKep4xuhGSPEun%2F3cfwrDlu%2Fsz2j6IKraBj2oivNOasO99tlazrjmMs6mYGCSOVpwA7lLCwS&X-Amz-Signature=a0a695312ba44ac6f19e3b0ffffa8e4e1c9430b1af49baa9873ff834be70328c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTCA5P4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4KZ%2Brwd%2B6Q7S1WkBy8hc5XG6w%2FtdfB%2FVJ8rQAARhZeQIhAIbMWI3JN6am%2BJgCBMidWoCJ45G59ZJrqiYcsidIznVPKv8DCCQQABoMNjM3NDIzMTgzODA1Igze4hljfxeYy%2FjW54Iq3ANN2s%2Botz90DfKL9LimzpTjJrkKpz4%2BySRWWT3pXboLueP7psju%2FVRVMjKkTXh28uOJW4ZJv9mzNIcZJ6eTpbKF60Y%2FywNfN0Hou9FXdlSCnDVqu%2BjHKXcBygJopLuTMZ3K8RozXRShrjNp1lhRRNet2edhfD42NYXfL3DUBvwzZy0dZo7n9Mx6IO9w6JSMZG60%2Fvm16F%2FiHygukZyTBHT8nI7vujkP7As6mMpMnjhd%2FAJIpt7FXpDt1JPT2p2Q5E1PDkt4n7%2BwAcKnXw%2FnUcs%2FneuabZ5kr8HgWrR8gSNYQjFrD%2BOExYk37yUjTUEccmEoXygMSCnpTHPDPNL3IUAWypi636sG6YddDlUFCocp0Q%2B9U2S9r86JTNu6p8PYAjhWS1QMz1WeSgTNZBJoNVj6O9bcEpuVWeR2VgJD3CErUoixjNSLBF98cBNwuTMXLxwVINW7w1B5zLqwjh7cSGaL0NBAyUQDKM7Yje7NjxsBHcDOHBB3H6lpfQwmAtNtC%2BLRJIzqBv4hv9KVSTW1HX3R8Wv7iH2H0S2G4NqyUZV2f4VMLV8VP7cINh0AP%2F1S5rm2wzF1pJZbA4Qn60AiYyqHTAFSRpFKaieMrA1MKfXHtMcryjumCK6I52URLTCOorvEBjqkAbLhm5jDpmfg3hxxOzOVgL5WY63%2F41vhIQkkXxqYGC2rGTsWx92EPEilC%2B0ft5F%2BPhCoK07%2BvbZRjWKxIZF%2Fce0fCrGIMDqLbjShDuGJBFwxIOIa1ujkuD0e5FUMKd0JSDVfZH30wBd2DlkQnOQOHKep4xuhGSPEun%2F3cfwrDlu%2Fsz2j6IKraBj2oivNOasO99tlazrjmMs6mYGCSOVpwA7lLCwS&X-Amz-Signature=7f6b54027cee671273cc161ff6336c79f97fa85c325d10727487cd01094675af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTCA5P4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4KZ%2Brwd%2B6Q7S1WkBy8hc5XG6w%2FtdfB%2FVJ8rQAARhZeQIhAIbMWI3JN6am%2BJgCBMidWoCJ45G59ZJrqiYcsidIznVPKv8DCCQQABoMNjM3NDIzMTgzODA1Igze4hljfxeYy%2FjW54Iq3ANN2s%2Botz90DfKL9LimzpTjJrkKpz4%2BySRWWT3pXboLueP7psju%2FVRVMjKkTXh28uOJW4ZJv9mzNIcZJ6eTpbKF60Y%2FywNfN0Hou9FXdlSCnDVqu%2BjHKXcBygJopLuTMZ3K8RozXRShrjNp1lhRRNet2edhfD42NYXfL3DUBvwzZy0dZo7n9Mx6IO9w6JSMZG60%2Fvm16F%2FiHygukZyTBHT8nI7vujkP7As6mMpMnjhd%2FAJIpt7FXpDt1JPT2p2Q5E1PDkt4n7%2BwAcKnXw%2FnUcs%2FneuabZ5kr8HgWrR8gSNYQjFrD%2BOExYk37yUjTUEccmEoXygMSCnpTHPDPNL3IUAWypi636sG6YddDlUFCocp0Q%2B9U2S9r86JTNu6p8PYAjhWS1QMz1WeSgTNZBJoNVj6O9bcEpuVWeR2VgJD3CErUoixjNSLBF98cBNwuTMXLxwVINW7w1B5zLqwjh7cSGaL0NBAyUQDKM7Yje7NjxsBHcDOHBB3H6lpfQwmAtNtC%2BLRJIzqBv4hv9KVSTW1HX3R8Wv7iH2H0S2G4NqyUZV2f4VMLV8VP7cINh0AP%2F1S5rm2wzF1pJZbA4Qn60AiYyqHTAFSRpFKaieMrA1MKfXHtMcryjumCK6I52URLTCOorvEBjqkAbLhm5jDpmfg3hxxOzOVgL5WY63%2F41vhIQkkXxqYGC2rGTsWx92EPEilC%2B0ft5F%2BPhCoK07%2BvbZRjWKxIZF%2Fce0fCrGIMDqLbjShDuGJBFwxIOIa1ujkuD0e5FUMKd0JSDVfZH30wBd2DlkQnOQOHKep4xuhGSPEun%2F3cfwrDlu%2Fsz2j6IKraBj2oivNOasO99tlazrjmMs6mYGCSOVpwA7lLCwS&X-Amz-Signature=37d57c982c774174726db9a6a1eb1dd082eee0f94e9bd434ab765f38bcb2dde0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTCA5P4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4KZ%2Brwd%2B6Q7S1WkBy8hc5XG6w%2FtdfB%2FVJ8rQAARhZeQIhAIbMWI3JN6am%2BJgCBMidWoCJ45G59ZJrqiYcsidIznVPKv8DCCQQABoMNjM3NDIzMTgzODA1Igze4hljfxeYy%2FjW54Iq3ANN2s%2Botz90DfKL9LimzpTjJrkKpz4%2BySRWWT3pXboLueP7psju%2FVRVMjKkTXh28uOJW4ZJv9mzNIcZJ6eTpbKF60Y%2FywNfN0Hou9FXdlSCnDVqu%2BjHKXcBygJopLuTMZ3K8RozXRShrjNp1lhRRNet2edhfD42NYXfL3DUBvwzZy0dZo7n9Mx6IO9w6JSMZG60%2Fvm16F%2FiHygukZyTBHT8nI7vujkP7As6mMpMnjhd%2FAJIpt7FXpDt1JPT2p2Q5E1PDkt4n7%2BwAcKnXw%2FnUcs%2FneuabZ5kr8HgWrR8gSNYQjFrD%2BOExYk37yUjTUEccmEoXygMSCnpTHPDPNL3IUAWypi636sG6YddDlUFCocp0Q%2B9U2S9r86JTNu6p8PYAjhWS1QMz1WeSgTNZBJoNVj6O9bcEpuVWeR2VgJD3CErUoixjNSLBF98cBNwuTMXLxwVINW7w1B5zLqwjh7cSGaL0NBAyUQDKM7Yje7NjxsBHcDOHBB3H6lpfQwmAtNtC%2BLRJIzqBv4hv9KVSTW1HX3R8Wv7iH2H0S2G4NqyUZV2f4VMLV8VP7cINh0AP%2F1S5rm2wzF1pJZbA4Qn60AiYyqHTAFSRpFKaieMrA1MKfXHtMcryjumCK6I52URLTCOorvEBjqkAbLhm5jDpmfg3hxxOzOVgL5WY63%2F41vhIQkkXxqYGC2rGTsWx92EPEilC%2B0ft5F%2BPhCoK07%2BvbZRjWKxIZF%2Fce0fCrGIMDqLbjShDuGJBFwxIOIa1ujkuD0e5FUMKd0JSDVfZH30wBd2DlkQnOQOHKep4xuhGSPEun%2F3cfwrDlu%2Fsz2j6IKraBj2oivNOasO99tlazrjmMs6mYGCSOVpwA7lLCwS&X-Amz-Signature=f5e8b816d8c4082a642cc9c6320f405b209eafc2c7b8d30528700261ba38ea92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
