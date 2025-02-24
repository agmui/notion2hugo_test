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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HPAZBUM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAV2MzSlwPGmcTPiVAQ65fY1HNQJNAp9k62NVIksVzAiEAgkUANVOzq3afFp3ah1lr18PolxgOu1pFRWgGnfKlcDYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDB%2BOckm6qqIoqU0nwCrcA%2BVrfrJgeeFjrI19BNaXb7%2FUiEy5tRACnFAmHswPuL%2FPDO%2FNV1LVqHxmhaGhb3g9OmqIDnEsSPa%2BSsrZgbhVJeR7WGhk3Pt7tL79MDzzHf4jwRLFmSgvnwUD0m9JO9RFVC4uTspb7eQs0razuQJS7e90jSM4vplt1tumjn%2B42I%2FOnFI679CvH%2B%2Bll0lf2GGp7Dd4if1HU%2BVsKz%2BXgFw2TYY7z3Y7uzM1xZ%2FPBlBb4PH71p7eHqCz726VoNDWiJ7R%2FeyZn07gn6eT%2FSYnbRsuL51Ax3sIOfx75cGmg0SSH4pnqUbkoFwgclzS2Ln5WmQ87Lmleq9D72pB4cgS7G0BDiKRIOV4XMC5dW%2FAFzgO1tZ5GwWXj6X9KqU9MoZQq0JroQ4885cmiLbHRysf4%2FwjALZtoLlH5m0L9nTG10fiAWM9x%2Bv8zQf4ObFxjIlFqxceTJMXfBawPm7B84jtJJLm6QJs%2FBBD%2F1U9X6D589ShPxMUHUkT%2FeL%2BpeO%2BJgazc2o4a2ppsH4uaniolX67dx56rYoAybeB2GT8AVgkg%2F%2FXGRsO0kWLe3IE2xLw27CTxId32qCyOFUcSPoMZUHZEJPDJR9EIKIgcb8jMf41MBXCHyem2oVbHwaqcqTQwLkcMLKV8r0GOqUBl8LaU6b83uEb%2FcfJHbwcy3qnQbYaWCNamsrA0bWfIh%2FUVHCQXYyAKFJXKfakBB22ttyEKBEUjVV0FFUUXwb4IIl4WWZARYoxKewofuE0f9nu070XHIC8j1vUBySzIgEc%2FPgu80l%2FWFX35WY%2FDo4ug8uEYnqrFwzZd%2F4rGA2ehY2cLKUTcsTneJdyCh59DVqIZ641uHvZ6wVK2aMuBUZilVSE8gg0&X-Amz-Signature=a6838ec0d5442cda1c403f21cab8bf03ab42c03bf59bce79dbb28959fa734177&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HPAZBUM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAV2MzSlwPGmcTPiVAQ65fY1HNQJNAp9k62NVIksVzAiEAgkUANVOzq3afFp3ah1lr18PolxgOu1pFRWgGnfKlcDYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDB%2BOckm6qqIoqU0nwCrcA%2BVrfrJgeeFjrI19BNaXb7%2FUiEy5tRACnFAmHswPuL%2FPDO%2FNV1LVqHxmhaGhb3g9OmqIDnEsSPa%2BSsrZgbhVJeR7WGhk3Pt7tL79MDzzHf4jwRLFmSgvnwUD0m9JO9RFVC4uTspb7eQs0razuQJS7e90jSM4vplt1tumjn%2B42I%2FOnFI679CvH%2B%2Bll0lf2GGp7Dd4if1HU%2BVsKz%2BXgFw2TYY7z3Y7uzM1xZ%2FPBlBb4PH71p7eHqCz726VoNDWiJ7R%2FeyZn07gn6eT%2FSYnbRsuL51Ax3sIOfx75cGmg0SSH4pnqUbkoFwgclzS2Ln5WmQ87Lmleq9D72pB4cgS7G0BDiKRIOV4XMC5dW%2FAFzgO1tZ5GwWXj6X9KqU9MoZQq0JroQ4885cmiLbHRysf4%2FwjALZtoLlH5m0L9nTG10fiAWM9x%2Bv8zQf4ObFxjIlFqxceTJMXfBawPm7B84jtJJLm6QJs%2FBBD%2F1U9X6D589ShPxMUHUkT%2FeL%2BpeO%2BJgazc2o4a2ppsH4uaniolX67dx56rYoAybeB2GT8AVgkg%2F%2FXGRsO0kWLe3IE2xLw27CTxId32qCyOFUcSPoMZUHZEJPDJR9EIKIgcb8jMf41MBXCHyem2oVbHwaqcqTQwLkcMLKV8r0GOqUBl8LaU6b83uEb%2FcfJHbwcy3qnQbYaWCNamsrA0bWfIh%2FUVHCQXYyAKFJXKfakBB22ttyEKBEUjVV0FFUUXwb4IIl4WWZARYoxKewofuE0f9nu070XHIC8j1vUBySzIgEc%2FPgu80l%2FWFX35WY%2FDo4ug8uEYnqrFwzZd%2F4rGA2ehY2cLKUTcsTneJdyCh59DVqIZ641uHvZ6wVK2aMuBUZilVSE8gg0&X-Amz-Signature=63e1269e7bb30e56757ad75c5b220d9e610ad62c3e552ae9de985c8b55cbd62b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HPAZBUM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAV2MzSlwPGmcTPiVAQ65fY1HNQJNAp9k62NVIksVzAiEAgkUANVOzq3afFp3ah1lr18PolxgOu1pFRWgGnfKlcDYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDB%2BOckm6qqIoqU0nwCrcA%2BVrfrJgeeFjrI19BNaXb7%2FUiEy5tRACnFAmHswPuL%2FPDO%2FNV1LVqHxmhaGhb3g9OmqIDnEsSPa%2BSsrZgbhVJeR7WGhk3Pt7tL79MDzzHf4jwRLFmSgvnwUD0m9JO9RFVC4uTspb7eQs0razuQJS7e90jSM4vplt1tumjn%2B42I%2FOnFI679CvH%2B%2Bll0lf2GGp7Dd4if1HU%2BVsKz%2BXgFw2TYY7z3Y7uzM1xZ%2FPBlBb4PH71p7eHqCz726VoNDWiJ7R%2FeyZn07gn6eT%2FSYnbRsuL51Ax3sIOfx75cGmg0SSH4pnqUbkoFwgclzS2Ln5WmQ87Lmleq9D72pB4cgS7G0BDiKRIOV4XMC5dW%2FAFzgO1tZ5GwWXj6X9KqU9MoZQq0JroQ4885cmiLbHRysf4%2FwjALZtoLlH5m0L9nTG10fiAWM9x%2Bv8zQf4ObFxjIlFqxceTJMXfBawPm7B84jtJJLm6QJs%2FBBD%2F1U9X6D589ShPxMUHUkT%2FeL%2BpeO%2BJgazc2o4a2ppsH4uaniolX67dx56rYoAybeB2GT8AVgkg%2F%2FXGRsO0kWLe3IE2xLw27CTxId32qCyOFUcSPoMZUHZEJPDJR9EIKIgcb8jMf41MBXCHyem2oVbHwaqcqTQwLkcMLKV8r0GOqUBl8LaU6b83uEb%2FcfJHbwcy3qnQbYaWCNamsrA0bWfIh%2FUVHCQXYyAKFJXKfakBB22ttyEKBEUjVV0FFUUXwb4IIl4WWZARYoxKewofuE0f9nu070XHIC8j1vUBySzIgEc%2FPgu80l%2FWFX35WY%2FDo4ug8uEYnqrFwzZd%2F4rGA2ehY2cLKUTcsTneJdyCh59DVqIZ641uHvZ6wVK2aMuBUZilVSE8gg0&X-Amz-Signature=b953b7aa80acd33fd335cb2e1b70a1aecbc7abce54947ab22a35b8ef041483f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HPAZBUM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAV2MzSlwPGmcTPiVAQ65fY1HNQJNAp9k62NVIksVzAiEAgkUANVOzq3afFp3ah1lr18PolxgOu1pFRWgGnfKlcDYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDB%2BOckm6qqIoqU0nwCrcA%2BVrfrJgeeFjrI19BNaXb7%2FUiEy5tRACnFAmHswPuL%2FPDO%2FNV1LVqHxmhaGhb3g9OmqIDnEsSPa%2BSsrZgbhVJeR7WGhk3Pt7tL79MDzzHf4jwRLFmSgvnwUD0m9JO9RFVC4uTspb7eQs0razuQJS7e90jSM4vplt1tumjn%2B42I%2FOnFI679CvH%2B%2Bll0lf2GGp7Dd4if1HU%2BVsKz%2BXgFw2TYY7z3Y7uzM1xZ%2FPBlBb4PH71p7eHqCz726VoNDWiJ7R%2FeyZn07gn6eT%2FSYnbRsuL51Ax3sIOfx75cGmg0SSH4pnqUbkoFwgclzS2Ln5WmQ87Lmleq9D72pB4cgS7G0BDiKRIOV4XMC5dW%2FAFzgO1tZ5GwWXj6X9KqU9MoZQq0JroQ4885cmiLbHRysf4%2FwjALZtoLlH5m0L9nTG10fiAWM9x%2Bv8zQf4ObFxjIlFqxceTJMXfBawPm7B84jtJJLm6QJs%2FBBD%2F1U9X6D589ShPxMUHUkT%2FeL%2BpeO%2BJgazc2o4a2ppsH4uaniolX67dx56rYoAybeB2GT8AVgkg%2F%2FXGRsO0kWLe3IE2xLw27CTxId32qCyOFUcSPoMZUHZEJPDJR9EIKIgcb8jMf41MBXCHyem2oVbHwaqcqTQwLkcMLKV8r0GOqUBl8LaU6b83uEb%2FcfJHbwcy3qnQbYaWCNamsrA0bWfIh%2FUVHCQXYyAKFJXKfakBB22ttyEKBEUjVV0FFUUXwb4IIl4WWZARYoxKewofuE0f9nu070XHIC8j1vUBySzIgEc%2FPgu80l%2FWFX35WY%2FDo4ug8uEYnqrFwzZd%2F4rGA2ehY2cLKUTcsTneJdyCh59DVqIZ641uHvZ6wVK2aMuBUZilVSE8gg0&X-Amz-Signature=a5098df6621c4d043d0c72e07f5408d059fb2d4cd35646ca5613161da667e024&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HPAZBUM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAV2MzSlwPGmcTPiVAQ65fY1HNQJNAp9k62NVIksVzAiEAgkUANVOzq3afFp3ah1lr18PolxgOu1pFRWgGnfKlcDYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDB%2BOckm6qqIoqU0nwCrcA%2BVrfrJgeeFjrI19BNaXb7%2FUiEy5tRACnFAmHswPuL%2FPDO%2FNV1LVqHxmhaGhb3g9OmqIDnEsSPa%2BSsrZgbhVJeR7WGhk3Pt7tL79MDzzHf4jwRLFmSgvnwUD0m9JO9RFVC4uTspb7eQs0razuQJS7e90jSM4vplt1tumjn%2B42I%2FOnFI679CvH%2B%2Bll0lf2GGp7Dd4if1HU%2BVsKz%2BXgFw2TYY7z3Y7uzM1xZ%2FPBlBb4PH71p7eHqCz726VoNDWiJ7R%2FeyZn07gn6eT%2FSYnbRsuL51Ax3sIOfx75cGmg0SSH4pnqUbkoFwgclzS2Ln5WmQ87Lmleq9D72pB4cgS7G0BDiKRIOV4XMC5dW%2FAFzgO1tZ5GwWXj6X9KqU9MoZQq0JroQ4885cmiLbHRysf4%2FwjALZtoLlH5m0L9nTG10fiAWM9x%2Bv8zQf4ObFxjIlFqxceTJMXfBawPm7B84jtJJLm6QJs%2FBBD%2F1U9X6D589ShPxMUHUkT%2FeL%2BpeO%2BJgazc2o4a2ppsH4uaniolX67dx56rYoAybeB2GT8AVgkg%2F%2FXGRsO0kWLe3IE2xLw27CTxId32qCyOFUcSPoMZUHZEJPDJR9EIKIgcb8jMf41MBXCHyem2oVbHwaqcqTQwLkcMLKV8r0GOqUBl8LaU6b83uEb%2FcfJHbwcy3qnQbYaWCNamsrA0bWfIh%2FUVHCQXYyAKFJXKfakBB22ttyEKBEUjVV0FFUUXwb4IIl4WWZARYoxKewofuE0f9nu070XHIC8j1vUBySzIgEc%2FPgu80l%2FWFX35WY%2FDo4ug8uEYnqrFwzZd%2F4rGA2ehY2cLKUTcsTneJdyCh59DVqIZ641uHvZ6wVK2aMuBUZilVSE8gg0&X-Amz-Signature=60dec6954af3966a4efbc4cd3813952bb6173f39446a720d2eccc0c11929a5e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
