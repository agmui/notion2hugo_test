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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O7W3JOB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDzmWEROve8na%2F98NU6GN2TdtUNzqKHRrtQpMDM%2B3Vq%2BgIhAMIDO6Mj%2BRtKdznLlXAOwSoGHt6NbK3fPYypzu3F7RQ1Kv8DCEgQABoMNjM3NDIzMTgzODA1IgzKODnbPgMMj4hsGuAq3AMf%2BN%2FUL11NWgj5G1RJuvky%2FDaJIBXDfCmvejo7qywsz82sr%2BqZb7XYsRrgGC%2FZJ1zoJ7wyDbVPwdI7haVWctlU3PT1UKvNHnFKB%2B4E7jlr1p%2Ba7kUuSLD21qDtE63EiVQDxMHwLd0luWu2tHG6S9XR4AAvUaScRUn3awBxkL2HdcYCarvEg11itBqV8ppjVW5q5WbCeChm7ql2KeOkbd9vMIPQDyy7Km%2B2lx8YIQbYWr7ArNHGnAR34OTcdVetHOBlA77QgYj1FavdgMpCTmc2iUE%2FcOaOG0Fa1GWqwW4V8VvAG6M4lHmk3gx14uT%2F0IuSpKKZT%2B0MDhV%2FQ3Yc4bTpWtFXiH3Op%2F9RwgELdJJWT%2FVvWhO4A%2BULkbGF0NZr4ByESBt%2B80SmqlU7WsjatgkXKjvkds5EPNom35TnnYi3ibj0sp19stij1NW81Eq2vxAuQ3bksJE%2FLkk%2Bfk3U6pNm18Zi%2BdAdio0HA0vcUHvttv9AIXLKeSpijYAHr7IHrjtd3T%2BO9uFxtY1ba%2BON%2BbuD7XSRXekAnzzKxgA1u%2FlHvygWfs236zl%2BWltGMJbnhZq3eSQAGLTFZtR%2BFrOHskF44A0QLDP07bdVTqJlGEeK%2FrNc4kJnNMrX8%2BfHkTDZ54bCBjqkAaqRFHESIrV6mxnRwFs3HQ%2F0FbX8pDvyKs%2BPmZFumBgKMNudUHosLoxBcM2H%2FUBoccY0wB79pGSYvavkezK6F3eIXz4TxGt2qvoOz3hGleoab8KPI49cx4%2FAYtGOwaHjquxUccCY%2B6z7gR65wYPNXpv%2FDd0GZ0JbelldLsB4xxIwjlbrC1msmp9uU28BsRbWYADaQ4h5fKRfvbjwfaWF%2BepWvbvY&X-Amz-Signature=68b33d9e0050f8a48466c4f0dc59e5ca971bb56e9a338c63616f21c5a9c3c4ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O7W3JOB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDzmWEROve8na%2F98NU6GN2TdtUNzqKHRrtQpMDM%2B3Vq%2BgIhAMIDO6Mj%2BRtKdznLlXAOwSoGHt6NbK3fPYypzu3F7RQ1Kv8DCEgQABoMNjM3NDIzMTgzODA1IgzKODnbPgMMj4hsGuAq3AMf%2BN%2FUL11NWgj5G1RJuvky%2FDaJIBXDfCmvejo7qywsz82sr%2BqZb7XYsRrgGC%2FZJ1zoJ7wyDbVPwdI7haVWctlU3PT1UKvNHnFKB%2B4E7jlr1p%2Ba7kUuSLD21qDtE63EiVQDxMHwLd0luWu2tHG6S9XR4AAvUaScRUn3awBxkL2HdcYCarvEg11itBqV8ppjVW5q5WbCeChm7ql2KeOkbd9vMIPQDyy7Km%2B2lx8YIQbYWr7ArNHGnAR34OTcdVetHOBlA77QgYj1FavdgMpCTmc2iUE%2FcOaOG0Fa1GWqwW4V8VvAG6M4lHmk3gx14uT%2F0IuSpKKZT%2B0MDhV%2FQ3Yc4bTpWtFXiH3Op%2F9RwgELdJJWT%2FVvWhO4A%2BULkbGF0NZr4ByESBt%2B80SmqlU7WsjatgkXKjvkds5EPNom35TnnYi3ibj0sp19stij1NW81Eq2vxAuQ3bksJE%2FLkk%2Bfk3U6pNm18Zi%2BdAdio0HA0vcUHvttv9AIXLKeSpijYAHr7IHrjtd3T%2BO9uFxtY1ba%2BON%2BbuD7XSRXekAnzzKxgA1u%2FlHvygWfs236zl%2BWltGMJbnhZq3eSQAGLTFZtR%2BFrOHskF44A0QLDP07bdVTqJlGEeK%2FrNc4kJnNMrX8%2BfHkTDZ54bCBjqkAaqRFHESIrV6mxnRwFs3HQ%2F0FbX8pDvyKs%2BPmZFumBgKMNudUHosLoxBcM2H%2FUBoccY0wB79pGSYvavkezK6F3eIXz4TxGt2qvoOz3hGleoab8KPI49cx4%2FAYtGOwaHjquxUccCY%2B6z7gR65wYPNXpv%2FDd0GZ0JbelldLsB4xxIwjlbrC1msmp9uU28BsRbWYADaQ4h5fKRfvbjwfaWF%2BepWvbvY&X-Amz-Signature=eb1b92a51e021181ed93afa88c9b2a0ff23a91207c2444b1f622e5b17f387a19&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O7W3JOB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDzmWEROve8na%2F98NU6GN2TdtUNzqKHRrtQpMDM%2B3Vq%2BgIhAMIDO6Mj%2BRtKdznLlXAOwSoGHt6NbK3fPYypzu3F7RQ1Kv8DCEgQABoMNjM3NDIzMTgzODA1IgzKODnbPgMMj4hsGuAq3AMf%2BN%2FUL11NWgj5G1RJuvky%2FDaJIBXDfCmvejo7qywsz82sr%2BqZb7XYsRrgGC%2FZJ1zoJ7wyDbVPwdI7haVWctlU3PT1UKvNHnFKB%2B4E7jlr1p%2Ba7kUuSLD21qDtE63EiVQDxMHwLd0luWu2tHG6S9XR4AAvUaScRUn3awBxkL2HdcYCarvEg11itBqV8ppjVW5q5WbCeChm7ql2KeOkbd9vMIPQDyy7Km%2B2lx8YIQbYWr7ArNHGnAR34OTcdVetHOBlA77QgYj1FavdgMpCTmc2iUE%2FcOaOG0Fa1GWqwW4V8VvAG6M4lHmk3gx14uT%2F0IuSpKKZT%2B0MDhV%2FQ3Yc4bTpWtFXiH3Op%2F9RwgELdJJWT%2FVvWhO4A%2BULkbGF0NZr4ByESBt%2B80SmqlU7WsjatgkXKjvkds5EPNom35TnnYi3ibj0sp19stij1NW81Eq2vxAuQ3bksJE%2FLkk%2Bfk3U6pNm18Zi%2BdAdio0HA0vcUHvttv9AIXLKeSpijYAHr7IHrjtd3T%2BO9uFxtY1ba%2BON%2BbuD7XSRXekAnzzKxgA1u%2FlHvygWfs236zl%2BWltGMJbnhZq3eSQAGLTFZtR%2BFrOHskF44A0QLDP07bdVTqJlGEeK%2FrNc4kJnNMrX8%2BfHkTDZ54bCBjqkAaqRFHESIrV6mxnRwFs3HQ%2F0FbX8pDvyKs%2BPmZFumBgKMNudUHosLoxBcM2H%2FUBoccY0wB79pGSYvavkezK6F3eIXz4TxGt2qvoOz3hGleoab8KPI49cx4%2FAYtGOwaHjquxUccCY%2B6z7gR65wYPNXpv%2FDd0GZ0JbelldLsB4xxIwjlbrC1msmp9uU28BsRbWYADaQ4h5fKRfvbjwfaWF%2BepWvbvY&X-Amz-Signature=251e4a3848c947266baa7b6799eeb21e8465859378342df0d504f11f4ab298f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O7W3JOB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDzmWEROve8na%2F98NU6GN2TdtUNzqKHRrtQpMDM%2B3Vq%2BgIhAMIDO6Mj%2BRtKdznLlXAOwSoGHt6NbK3fPYypzu3F7RQ1Kv8DCEgQABoMNjM3NDIzMTgzODA1IgzKODnbPgMMj4hsGuAq3AMf%2BN%2FUL11NWgj5G1RJuvky%2FDaJIBXDfCmvejo7qywsz82sr%2BqZb7XYsRrgGC%2FZJ1zoJ7wyDbVPwdI7haVWctlU3PT1UKvNHnFKB%2B4E7jlr1p%2Ba7kUuSLD21qDtE63EiVQDxMHwLd0luWu2tHG6S9XR4AAvUaScRUn3awBxkL2HdcYCarvEg11itBqV8ppjVW5q5WbCeChm7ql2KeOkbd9vMIPQDyy7Km%2B2lx8YIQbYWr7ArNHGnAR34OTcdVetHOBlA77QgYj1FavdgMpCTmc2iUE%2FcOaOG0Fa1GWqwW4V8VvAG6M4lHmk3gx14uT%2F0IuSpKKZT%2B0MDhV%2FQ3Yc4bTpWtFXiH3Op%2F9RwgELdJJWT%2FVvWhO4A%2BULkbGF0NZr4ByESBt%2B80SmqlU7WsjatgkXKjvkds5EPNom35TnnYi3ibj0sp19stij1NW81Eq2vxAuQ3bksJE%2FLkk%2Bfk3U6pNm18Zi%2BdAdio0HA0vcUHvttv9AIXLKeSpijYAHr7IHrjtd3T%2BO9uFxtY1ba%2BON%2BbuD7XSRXekAnzzKxgA1u%2FlHvygWfs236zl%2BWltGMJbnhZq3eSQAGLTFZtR%2BFrOHskF44A0QLDP07bdVTqJlGEeK%2FrNc4kJnNMrX8%2BfHkTDZ54bCBjqkAaqRFHESIrV6mxnRwFs3HQ%2F0FbX8pDvyKs%2BPmZFumBgKMNudUHosLoxBcM2H%2FUBoccY0wB79pGSYvavkezK6F3eIXz4TxGt2qvoOz3hGleoab8KPI49cx4%2FAYtGOwaHjquxUccCY%2B6z7gR65wYPNXpv%2FDd0GZ0JbelldLsB4xxIwjlbrC1msmp9uU28BsRbWYADaQ4h5fKRfvbjwfaWF%2BepWvbvY&X-Amz-Signature=b6373dc67d186d1d07507e76be439a9e3aaec3ffe7e25073fab8f035c18a4052&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O7W3JOB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDzmWEROve8na%2F98NU6GN2TdtUNzqKHRrtQpMDM%2B3Vq%2BgIhAMIDO6Mj%2BRtKdznLlXAOwSoGHt6NbK3fPYypzu3F7RQ1Kv8DCEgQABoMNjM3NDIzMTgzODA1IgzKODnbPgMMj4hsGuAq3AMf%2BN%2FUL11NWgj5G1RJuvky%2FDaJIBXDfCmvejo7qywsz82sr%2BqZb7XYsRrgGC%2FZJ1zoJ7wyDbVPwdI7haVWctlU3PT1UKvNHnFKB%2B4E7jlr1p%2Ba7kUuSLD21qDtE63EiVQDxMHwLd0luWu2tHG6S9XR4AAvUaScRUn3awBxkL2HdcYCarvEg11itBqV8ppjVW5q5WbCeChm7ql2KeOkbd9vMIPQDyy7Km%2B2lx8YIQbYWr7ArNHGnAR34OTcdVetHOBlA77QgYj1FavdgMpCTmc2iUE%2FcOaOG0Fa1GWqwW4V8VvAG6M4lHmk3gx14uT%2F0IuSpKKZT%2B0MDhV%2FQ3Yc4bTpWtFXiH3Op%2F9RwgELdJJWT%2FVvWhO4A%2BULkbGF0NZr4ByESBt%2B80SmqlU7WsjatgkXKjvkds5EPNom35TnnYi3ibj0sp19stij1NW81Eq2vxAuQ3bksJE%2FLkk%2Bfk3U6pNm18Zi%2BdAdio0HA0vcUHvttv9AIXLKeSpijYAHr7IHrjtd3T%2BO9uFxtY1ba%2BON%2BbuD7XSRXekAnzzKxgA1u%2FlHvygWfs236zl%2BWltGMJbnhZq3eSQAGLTFZtR%2BFrOHskF44A0QLDP07bdVTqJlGEeK%2FrNc4kJnNMrX8%2BfHkTDZ54bCBjqkAaqRFHESIrV6mxnRwFs3HQ%2F0FbX8pDvyKs%2BPmZFumBgKMNudUHosLoxBcM2H%2FUBoccY0wB79pGSYvavkezK6F3eIXz4TxGt2qvoOz3hGleoab8KPI49cx4%2FAYtGOwaHjquxUccCY%2B6z7gR65wYPNXpv%2FDd0GZ0JbelldLsB4xxIwjlbrC1msmp9uU28BsRbWYADaQ4h5fKRfvbjwfaWF%2BepWvbvY&X-Amz-Signature=094ebc755be1752b141b14c8a75896ca78eb72880709c9cb64eac7df81451e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
