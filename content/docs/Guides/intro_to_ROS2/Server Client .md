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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HHBCPHU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMcz%2FXbXQTwV08alvitTOC7cIiVkC2KmjJ5qDwQKAoIAiBxQ3M6dkCsv8k8tZ7bYl2etRl9O3%2Bp2jOGgUcRUJHrNSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfdxOykE618K8230KtwDN69tMh5pvNtUeOq1AmxX0RD3aqbSNn3kQIlKhEFyhg9F5x9hJuz5ALiWnEDFTmxpVg19Hi6Z9tHcSel4pnff0vmMC0T1zgHJzxtHTbyl3nGYM50TkI6EyGXaxGu1gHnsvbVfOuRO9andAc4Y3SwO46K5FocQZIfrJAhx303C%2B2%2BhAwEzQCpgCTxwlzyNlSM2C47IfTRCbp9vtF1ny3elkcZRvXAJ9dpDH%2FImGLYRTYN7SyLJxQS7%2FIyajpqUSYx9qFxCSjakeX6erzf8HVZJlZlmeihs%2FWHTzzAgqL1MGVmxY6r9D%2Bvc2kCDeszb5z8ZwQUc1c7n8UMOyUYH3XwIRr0pO4ii1FQnY9pOFXOIEoRkiChv3zVf%2Bm2jvt2mp4p8fHKwpOj1E2G%2BvA4VyU%2Fswv9Xba8U1wIemLngTEHBTgpKQ4wofuUKLL2um%2FRmgrTfH7pe5D6fAlRwGcvR9f2opnjqUSEq3m6jp%2Bu%2FmCjzzKqJDsA%2F5hZdZq8wvAb%2B5GIZ1m9uo%2BFbWEzirFdMhi46eslgNDwT7u52Hr5cGNDU2ViqniCyOykYd8uYVmFihjuyZCj6IJBfVrnwTnaRUASAIc9795PAYLysvvxdSmAMQgNvDb64GCkmwZ2QWugwg4XUwgY6pgGc%2Fh1p8r20fiSxFuWZ9XBPQBH%2BV0MU5Po%2Fi5xbjIKEPxqIqvrHE0dCppHQSx48guVU7RQ90KWo%2FNwuuIxDclbxWljOaDMK8SgyiJeMsSQgVE95iu1Go3yX3sIudDA87nx36YtpVKZOCUlsqXjdGNbciA8OAYNQg%2B0q5yk82dqfM4TN2TLkx0iZvX1NZyTddqxiyJZv5dyXPldf%2FQxZ0brJ2SKP8BFP&X-Amz-Signature=b7103dac172c08352da421f4bef4c94c4bd7d767d3f06a5ead6a385fd4fbf7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HHBCPHU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMcz%2FXbXQTwV08alvitTOC7cIiVkC2KmjJ5qDwQKAoIAiBxQ3M6dkCsv8k8tZ7bYl2etRl9O3%2Bp2jOGgUcRUJHrNSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfdxOykE618K8230KtwDN69tMh5pvNtUeOq1AmxX0RD3aqbSNn3kQIlKhEFyhg9F5x9hJuz5ALiWnEDFTmxpVg19Hi6Z9tHcSel4pnff0vmMC0T1zgHJzxtHTbyl3nGYM50TkI6EyGXaxGu1gHnsvbVfOuRO9andAc4Y3SwO46K5FocQZIfrJAhx303C%2B2%2BhAwEzQCpgCTxwlzyNlSM2C47IfTRCbp9vtF1ny3elkcZRvXAJ9dpDH%2FImGLYRTYN7SyLJxQS7%2FIyajpqUSYx9qFxCSjakeX6erzf8HVZJlZlmeihs%2FWHTzzAgqL1MGVmxY6r9D%2Bvc2kCDeszb5z8ZwQUc1c7n8UMOyUYH3XwIRr0pO4ii1FQnY9pOFXOIEoRkiChv3zVf%2Bm2jvt2mp4p8fHKwpOj1E2G%2BvA4VyU%2Fswv9Xba8U1wIemLngTEHBTgpKQ4wofuUKLL2um%2FRmgrTfH7pe5D6fAlRwGcvR9f2opnjqUSEq3m6jp%2Bu%2FmCjzzKqJDsA%2F5hZdZq8wvAb%2B5GIZ1m9uo%2BFbWEzirFdMhi46eslgNDwT7u52Hr5cGNDU2ViqniCyOykYd8uYVmFihjuyZCj6IJBfVrnwTnaRUASAIc9795PAYLysvvxdSmAMQgNvDb64GCkmwZ2QWugwg4XUwgY6pgGc%2Fh1p8r20fiSxFuWZ9XBPQBH%2BV0MU5Po%2Fi5xbjIKEPxqIqvrHE0dCppHQSx48guVU7RQ90KWo%2FNwuuIxDclbxWljOaDMK8SgyiJeMsSQgVE95iu1Go3yX3sIudDA87nx36YtpVKZOCUlsqXjdGNbciA8OAYNQg%2B0q5yk82dqfM4TN2TLkx0iZvX1NZyTddqxiyJZv5dyXPldf%2FQxZ0brJ2SKP8BFP&X-Amz-Signature=a80b24d9b7c63d951b21f97583bbc7d21c3715bc6dbaf0389646b1247bdfe11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HHBCPHU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMcz%2FXbXQTwV08alvitTOC7cIiVkC2KmjJ5qDwQKAoIAiBxQ3M6dkCsv8k8tZ7bYl2etRl9O3%2Bp2jOGgUcRUJHrNSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfdxOykE618K8230KtwDN69tMh5pvNtUeOq1AmxX0RD3aqbSNn3kQIlKhEFyhg9F5x9hJuz5ALiWnEDFTmxpVg19Hi6Z9tHcSel4pnff0vmMC0T1zgHJzxtHTbyl3nGYM50TkI6EyGXaxGu1gHnsvbVfOuRO9andAc4Y3SwO46K5FocQZIfrJAhx303C%2B2%2BhAwEzQCpgCTxwlzyNlSM2C47IfTRCbp9vtF1ny3elkcZRvXAJ9dpDH%2FImGLYRTYN7SyLJxQS7%2FIyajpqUSYx9qFxCSjakeX6erzf8HVZJlZlmeihs%2FWHTzzAgqL1MGVmxY6r9D%2Bvc2kCDeszb5z8ZwQUc1c7n8UMOyUYH3XwIRr0pO4ii1FQnY9pOFXOIEoRkiChv3zVf%2Bm2jvt2mp4p8fHKwpOj1E2G%2BvA4VyU%2Fswv9Xba8U1wIemLngTEHBTgpKQ4wofuUKLL2um%2FRmgrTfH7pe5D6fAlRwGcvR9f2opnjqUSEq3m6jp%2Bu%2FmCjzzKqJDsA%2F5hZdZq8wvAb%2B5GIZ1m9uo%2BFbWEzirFdMhi46eslgNDwT7u52Hr5cGNDU2ViqniCyOykYd8uYVmFihjuyZCj6IJBfVrnwTnaRUASAIc9795PAYLysvvxdSmAMQgNvDb64GCkmwZ2QWugwg4XUwgY6pgGc%2Fh1p8r20fiSxFuWZ9XBPQBH%2BV0MU5Po%2Fi5xbjIKEPxqIqvrHE0dCppHQSx48guVU7RQ90KWo%2FNwuuIxDclbxWljOaDMK8SgyiJeMsSQgVE95iu1Go3yX3sIudDA87nx36YtpVKZOCUlsqXjdGNbciA8OAYNQg%2B0q5yk82dqfM4TN2TLkx0iZvX1NZyTddqxiyJZv5dyXPldf%2FQxZ0brJ2SKP8BFP&X-Amz-Signature=96380726975921d451ee7ec14e16fe70453b7ebd62a9a8ca6d6042a085af3f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HHBCPHU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMcz%2FXbXQTwV08alvitTOC7cIiVkC2KmjJ5qDwQKAoIAiBxQ3M6dkCsv8k8tZ7bYl2etRl9O3%2Bp2jOGgUcRUJHrNSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfdxOykE618K8230KtwDN69tMh5pvNtUeOq1AmxX0RD3aqbSNn3kQIlKhEFyhg9F5x9hJuz5ALiWnEDFTmxpVg19Hi6Z9tHcSel4pnff0vmMC0T1zgHJzxtHTbyl3nGYM50TkI6EyGXaxGu1gHnsvbVfOuRO9andAc4Y3SwO46K5FocQZIfrJAhx303C%2B2%2BhAwEzQCpgCTxwlzyNlSM2C47IfTRCbp9vtF1ny3elkcZRvXAJ9dpDH%2FImGLYRTYN7SyLJxQS7%2FIyajpqUSYx9qFxCSjakeX6erzf8HVZJlZlmeihs%2FWHTzzAgqL1MGVmxY6r9D%2Bvc2kCDeszb5z8ZwQUc1c7n8UMOyUYH3XwIRr0pO4ii1FQnY9pOFXOIEoRkiChv3zVf%2Bm2jvt2mp4p8fHKwpOj1E2G%2BvA4VyU%2Fswv9Xba8U1wIemLngTEHBTgpKQ4wofuUKLL2um%2FRmgrTfH7pe5D6fAlRwGcvR9f2opnjqUSEq3m6jp%2Bu%2FmCjzzKqJDsA%2F5hZdZq8wvAb%2B5GIZ1m9uo%2BFbWEzirFdMhi46eslgNDwT7u52Hr5cGNDU2ViqniCyOykYd8uYVmFihjuyZCj6IJBfVrnwTnaRUASAIc9795PAYLysvvxdSmAMQgNvDb64GCkmwZ2QWugwg4XUwgY6pgGc%2Fh1p8r20fiSxFuWZ9XBPQBH%2BV0MU5Po%2Fi5xbjIKEPxqIqvrHE0dCppHQSx48guVU7RQ90KWo%2FNwuuIxDclbxWljOaDMK8SgyiJeMsSQgVE95iu1Go3yX3sIudDA87nx36YtpVKZOCUlsqXjdGNbciA8OAYNQg%2B0q5yk82dqfM4TN2TLkx0iZvX1NZyTddqxiyJZv5dyXPldf%2FQxZ0brJ2SKP8BFP&X-Amz-Signature=1dedf7f452d10b0a90b914ff0f2f2d8350311a070cc88167572c82a719000757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HHBCPHU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMcz%2FXbXQTwV08alvitTOC7cIiVkC2KmjJ5qDwQKAoIAiBxQ3M6dkCsv8k8tZ7bYl2etRl9O3%2Bp2jOGgUcRUJHrNSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfdxOykE618K8230KtwDN69tMh5pvNtUeOq1AmxX0RD3aqbSNn3kQIlKhEFyhg9F5x9hJuz5ALiWnEDFTmxpVg19Hi6Z9tHcSel4pnff0vmMC0T1zgHJzxtHTbyl3nGYM50TkI6EyGXaxGu1gHnsvbVfOuRO9andAc4Y3SwO46K5FocQZIfrJAhx303C%2B2%2BhAwEzQCpgCTxwlzyNlSM2C47IfTRCbp9vtF1ny3elkcZRvXAJ9dpDH%2FImGLYRTYN7SyLJxQS7%2FIyajpqUSYx9qFxCSjakeX6erzf8HVZJlZlmeihs%2FWHTzzAgqL1MGVmxY6r9D%2Bvc2kCDeszb5z8ZwQUc1c7n8UMOyUYH3XwIRr0pO4ii1FQnY9pOFXOIEoRkiChv3zVf%2Bm2jvt2mp4p8fHKwpOj1E2G%2BvA4VyU%2Fswv9Xba8U1wIemLngTEHBTgpKQ4wofuUKLL2um%2FRmgrTfH7pe5D6fAlRwGcvR9f2opnjqUSEq3m6jp%2Bu%2FmCjzzKqJDsA%2F5hZdZq8wvAb%2B5GIZ1m9uo%2BFbWEzirFdMhi46eslgNDwT7u52Hr5cGNDU2ViqniCyOykYd8uYVmFihjuyZCj6IJBfVrnwTnaRUASAIc9795PAYLysvvxdSmAMQgNvDb64GCkmwZ2QWugwg4XUwgY6pgGc%2Fh1p8r20fiSxFuWZ9XBPQBH%2BV0MU5Po%2Fi5xbjIKEPxqIqvrHE0dCppHQSx48guVU7RQ90KWo%2FNwuuIxDclbxWljOaDMK8SgyiJeMsSQgVE95iu1Go3yX3sIudDA87nx36YtpVKZOCUlsqXjdGNbciA8OAYNQg%2B0q5yk82dqfM4TN2TLkx0iZvX1NZyTddqxiyJZv5dyXPldf%2FQxZ0brJ2SKP8BFP&X-Amz-Signature=edaf5b8453d706ca0d41b3f283c902c68a7745b02c081688aad659ceaa32efe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
