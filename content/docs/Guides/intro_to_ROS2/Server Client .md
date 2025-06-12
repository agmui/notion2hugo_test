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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CR53CNV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDJSMrI%2FDtBwVVv2lPa807fNewOXbcQl5SAUu%2BmrC96HQIgcYgEejhw5Lq9zp4Eaabk2T8Bfcrc%2BCixuyG0274tQ7kqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUkkJ%2Fp0jOEagFyCrcA4MIhXyMu6c14%2FimuFBGSMXIzytrPqnLghyNjPnBDTE25hcrHCUHxSixNbKaw1bqU%2FyvZ9NNfAPFi4aDEngZxOljSfy20Yngz0LCjFUIxjliZWHW9a2CF3mqKv9HcofehTXF7ZBuk5BNBB8ifeaULjsI%2BhpWmILQZm682xof7d2Tx2LqgVxgvxuobxdcCIg9yxiIpfiYgG8IVVMHpE8ewJo1nY6QzFn8t%2FheI78Jwqf4ohW62IcM97rdkj9TNDcVGVjgDn0Xk%2F31DXSV5e1z3QUcjE8gtdV9v5iUX7EHOoHmp%2BCJnF5SWtois%2FP%2FsEpYH7DPHys0ioi8vzzRn3X5wNyCOYriONRkxks0yTKnJIAT5jCIhvDNbPVD1iV4Ve6JmX9qLKgxUqH77Y4DCqHo9WalIhw8lk4a45jgFCVKM%2B1leFfeO9VH%2FfP5XFlb8FA3Nrh6GU%2BLYjGwYnwE3Q%2FwOi6ZGq4bVn%2BDU2XneshVZ9hdRPTHa2%2Fgw7gdQiPWKVb%2FmXRtDPQY0M38oyhCDmhbY6KxZU357BReqk%2BWhluAJf7%2F1d6o%2BhG5ZjI3M732VOWvN%2FVYzrTAqIB3mKd%2F4bW8zx81lcRuzMFjSw4gDj%2BXKpzs1iaaf8EWoErz5OwvMJiQrMIGOqUBokML6s6K5qHZ9Rk6Q45e7cLUOrynh7kPjxsNyPzwHGADRAATVs1%2BmTmZNMCsdev%2BF8npfSziwxHBITqaTYEEsIHYun1QJl56skf20VC9%2F%2B2bgL1v%2BHHGwOFambSwbNwuDIp2ZGeamL2X5fSjA3xK4ELpQ5vGKVRmU5Di2gFnHSJnKSNBdrebdyGdYvV2pWUXoS0oMyNu4%2Bj4cBf0uKN1xYqFcpy%2B&X-Amz-Signature=25ce75f6e2dae10dbcdd51cc6df26d82509b79e5ffff55b4716bee5856c75cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CR53CNV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDJSMrI%2FDtBwVVv2lPa807fNewOXbcQl5SAUu%2BmrC96HQIgcYgEejhw5Lq9zp4Eaabk2T8Bfcrc%2BCixuyG0274tQ7kqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUkkJ%2Fp0jOEagFyCrcA4MIhXyMu6c14%2FimuFBGSMXIzytrPqnLghyNjPnBDTE25hcrHCUHxSixNbKaw1bqU%2FyvZ9NNfAPFi4aDEngZxOljSfy20Yngz0LCjFUIxjliZWHW9a2CF3mqKv9HcofehTXF7ZBuk5BNBB8ifeaULjsI%2BhpWmILQZm682xof7d2Tx2LqgVxgvxuobxdcCIg9yxiIpfiYgG8IVVMHpE8ewJo1nY6QzFn8t%2FheI78Jwqf4ohW62IcM97rdkj9TNDcVGVjgDn0Xk%2F31DXSV5e1z3QUcjE8gtdV9v5iUX7EHOoHmp%2BCJnF5SWtois%2FP%2FsEpYH7DPHys0ioi8vzzRn3X5wNyCOYriONRkxks0yTKnJIAT5jCIhvDNbPVD1iV4Ve6JmX9qLKgxUqH77Y4DCqHo9WalIhw8lk4a45jgFCVKM%2B1leFfeO9VH%2FfP5XFlb8FA3Nrh6GU%2BLYjGwYnwE3Q%2FwOi6ZGq4bVn%2BDU2XneshVZ9hdRPTHa2%2Fgw7gdQiPWKVb%2FmXRtDPQY0M38oyhCDmhbY6KxZU357BReqk%2BWhluAJf7%2F1d6o%2BhG5ZjI3M732VOWvN%2FVYzrTAqIB3mKd%2F4bW8zx81lcRuzMFjSw4gDj%2BXKpzs1iaaf8EWoErz5OwvMJiQrMIGOqUBokML6s6K5qHZ9Rk6Q45e7cLUOrynh7kPjxsNyPzwHGADRAATVs1%2BmTmZNMCsdev%2BF8npfSziwxHBITqaTYEEsIHYun1QJl56skf20VC9%2F%2B2bgL1v%2BHHGwOFambSwbNwuDIp2ZGeamL2X5fSjA3xK4ELpQ5vGKVRmU5Di2gFnHSJnKSNBdrebdyGdYvV2pWUXoS0oMyNu4%2Bj4cBf0uKN1xYqFcpy%2B&X-Amz-Signature=e8160958045cac490c54fb7409bbd727b2d33d21c266f800408281ecdb87d2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CR53CNV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDJSMrI%2FDtBwVVv2lPa807fNewOXbcQl5SAUu%2BmrC96HQIgcYgEejhw5Lq9zp4Eaabk2T8Bfcrc%2BCixuyG0274tQ7kqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUkkJ%2Fp0jOEagFyCrcA4MIhXyMu6c14%2FimuFBGSMXIzytrPqnLghyNjPnBDTE25hcrHCUHxSixNbKaw1bqU%2FyvZ9NNfAPFi4aDEngZxOljSfy20Yngz0LCjFUIxjliZWHW9a2CF3mqKv9HcofehTXF7ZBuk5BNBB8ifeaULjsI%2BhpWmILQZm682xof7d2Tx2LqgVxgvxuobxdcCIg9yxiIpfiYgG8IVVMHpE8ewJo1nY6QzFn8t%2FheI78Jwqf4ohW62IcM97rdkj9TNDcVGVjgDn0Xk%2F31DXSV5e1z3QUcjE8gtdV9v5iUX7EHOoHmp%2BCJnF5SWtois%2FP%2FsEpYH7DPHys0ioi8vzzRn3X5wNyCOYriONRkxks0yTKnJIAT5jCIhvDNbPVD1iV4Ve6JmX9qLKgxUqH77Y4DCqHo9WalIhw8lk4a45jgFCVKM%2B1leFfeO9VH%2FfP5XFlb8FA3Nrh6GU%2BLYjGwYnwE3Q%2FwOi6ZGq4bVn%2BDU2XneshVZ9hdRPTHa2%2Fgw7gdQiPWKVb%2FmXRtDPQY0M38oyhCDmhbY6KxZU357BReqk%2BWhluAJf7%2F1d6o%2BhG5ZjI3M732VOWvN%2FVYzrTAqIB3mKd%2F4bW8zx81lcRuzMFjSw4gDj%2BXKpzs1iaaf8EWoErz5OwvMJiQrMIGOqUBokML6s6K5qHZ9Rk6Q45e7cLUOrynh7kPjxsNyPzwHGADRAATVs1%2BmTmZNMCsdev%2BF8npfSziwxHBITqaTYEEsIHYun1QJl56skf20VC9%2F%2B2bgL1v%2BHHGwOFambSwbNwuDIp2ZGeamL2X5fSjA3xK4ELpQ5vGKVRmU5Di2gFnHSJnKSNBdrebdyGdYvV2pWUXoS0oMyNu4%2Bj4cBf0uKN1xYqFcpy%2B&X-Amz-Signature=79153276323527e70b54d9180d0b46d0d394355b036746f33da5bcd0ce03a84a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CR53CNV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDJSMrI%2FDtBwVVv2lPa807fNewOXbcQl5SAUu%2BmrC96HQIgcYgEejhw5Lq9zp4Eaabk2T8Bfcrc%2BCixuyG0274tQ7kqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUkkJ%2Fp0jOEagFyCrcA4MIhXyMu6c14%2FimuFBGSMXIzytrPqnLghyNjPnBDTE25hcrHCUHxSixNbKaw1bqU%2FyvZ9NNfAPFi4aDEngZxOljSfy20Yngz0LCjFUIxjliZWHW9a2CF3mqKv9HcofehTXF7ZBuk5BNBB8ifeaULjsI%2BhpWmILQZm682xof7d2Tx2LqgVxgvxuobxdcCIg9yxiIpfiYgG8IVVMHpE8ewJo1nY6QzFn8t%2FheI78Jwqf4ohW62IcM97rdkj9TNDcVGVjgDn0Xk%2F31DXSV5e1z3QUcjE8gtdV9v5iUX7EHOoHmp%2BCJnF5SWtois%2FP%2FsEpYH7DPHys0ioi8vzzRn3X5wNyCOYriONRkxks0yTKnJIAT5jCIhvDNbPVD1iV4Ve6JmX9qLKgxUqH77Y4DCqHo9WalIhw8lk4a45jgFCVKM%2B1leFfeO9VH%2FfP5XFlb8FA3Nrh6GU%2BLYjGwYnwE3Q%2FwOi6ZGq4bVn%2BDU2XneshVZ9hdRPTHa2%2Fgw7gdQiPWKVb%2FmXRtDPQY0M38oyhCDmhbY6KxZU357BReqk%2BWhluAJf7%2F1d6o%2BhG5ZjI3M732VOWvN%2FVYzrTAqIB3mKd%2F4bW8zx81lcRuzMFjSw4gDj%2BXKpzs1iaaf8EWoErz5OwvMJiQrMIGOqUBokML6s6K5qHZ9Rk6Q45e7cLUOrynh7kPjxsNyPzwHGADRAATVs1%2BmTmZNMCsdev%2BF8npfSziwxHBITqaTYEEsIHYun1QJl56skf20VC9%2F%2B2bgL1v%2BHHGwOFambSwbNwuDIp2ZGeamL2X5fSjA3xK4ELpQ5vGKVRmU5Di2gFnHSJnKSNBdrebdyGdYvV2pWUXoS0oMyNu4%2Bj4cBf0uKN1xYqFcpy%2B&X-Amz-Signature=4f77cd4693a3f6777ad10ab329d110b468de8f13af85ca9a4470d16abceca494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CR53CNV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDJSMrI%2FDtBwVVv2lPa807fNewOXbcQl5SAUu%2BmrC96HQIgcYgEejhw5Lq9zp4Eaabk2T8Bfcrc%2BCixuyG0274tQ7kqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUkkJ%2Fp0jOEagFyCrcA4MIhXyMu6c14%2FimuFBGSMXIzytrPqnLghyNjPnBDTE25hcrHCUHxSixNbKaw1bqU%2FyvZ9NNfAPFi4aDEngZxOljSfy20Yngz0LCjFUIxjliZWHW9a2CF3mqKv9HcofehTXF7ZBuk5BNBB8ifeaULjsI%2BhpWmILQZm682xof7d2Tx2LqgVxgvxuobxdcCIg9yxiIpfiYgG8IVVMHpE8ewJo1nY6QzFn8t%2FheI78Jwqf4ohW62IcM97rdkj9TNDcVGVjgDn0Xk%2F31DXSV5e1z3QUcjE8gtdV9v5iUX7EHOoHmp%2BCJnF5SWtois%2FP%2FsEpYH7DPHys0ioi8vzzRn3X5wNyCOYriONRkxks0yTKnJIAT5jCIhvDNbPVD1iV4Ve6JmX9qLKgxUqH77Y4DCqHo9WalIhw8lk4a45jgFCVKM%2B1leFfeO9VH%2FfP5XFlb8FA3Nrh6GU%2BLYjGwYnwE3Q%2FwOi6ZGq4bVn%2BDU2XneshVZ9hdRPTHa2%2Fgw7gdQiPWKVb%2FmXRtDPQY0M38oyhCDmhbY6KxZU357BReqk%2BWhluAJf7%2F1d6o%2BhG5ZjI3M732VOWvN%2FVYzrTAqIB3mKd%2F4bW8zx81lcRuzMFjSw4gDj%2BXKpzs1iaaf8EWoErz5OwvMJiQrMIGOqUBokML6s6K5qHZ9Rk6Q45e7cLUOrynh7kPjxsNyPzwHGADRAATVs1%2BmTmZNMCsdev%2BF8npfSziwxHBITqaTYEEsIHYun1QJl56skf20VC9%2F%2B2bgL1v%2BHHGwOFambSwbNwuDIp2ZGeamL2X5fSjA3xK4ELpQ5vGKVRmU5Di2gFnHSJnKSNBdrebdyGdYvV2pWUXoS0oMyNu4%2Bj4cBf0uKN1xYqFcpy%2B&X-Amz-Signature=5358beb382cdbf11841ef95d7188b96db9c1e9e7dc5eb1be2b917bf8cc38b95f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
