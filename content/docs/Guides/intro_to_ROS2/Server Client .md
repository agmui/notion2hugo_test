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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UPUYVDY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAVT3CQ3h2RrYutMpw8uyEqqQzj5pofrui71zvmydL7TAiEA%2Fy7BghSCFydqze%2BIRqICrTS5bAYsTRz5HEP%2Bp3seQIcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLx4QccT5lAJmj8AeSrcA2hXCKnr5fYkzoWtwtGsaaCxYERSj7plpU8uwkZK51epA0Rmobra0ILSBbhSHCwilVTOABF6vofypJMOhN9tdu7yo4aS9911rcuU4eGxXcD9GVBMSHwazqig%2FW6Szzrcz%2BrIO%2Bn5kh5uYvVoZdco3g8ibN4ceRt6AXnMNZ%2BYUltB%2F7GNhaAOgnfg2j%2FtmSlO5t3SwHMDlVj%2FX9b8s62KEmzN30v9Ye7tMRbo%2FlhcbIJAtg%2FnEb%2B3%2B599J58YkkxqRTbhS2JgWVtC%2Bc7muJzqeFaL8GF1PlEgU5yhNeLDwtEpggs3mey22E1jvqTzY2LZHB%2BeQVvFMFoC4if4q6hjGFP0cbwMi7FbqV234Kb486Hwa7hygBHdtxevQRwaaJxT23NOyrK7Qp01USTPqqFDchh9VeoNNXrHOinCxnuoiaRzg5VoFfTXHH3LFZikeJ9auwRA9EHN16%2FBQ%2FE0P3aBe3D2K4rfwfg5WfpgebF7MHairjoOikhhGNepM8FojZNmiZm0M%2BuOS0g7DSnbHe6vO92tsmDtMGxyxj7bhcg1pHIMJ7Lo0QLDjRuOIT5dpoIkTFAN5jU20RScsmoShm2vHHc7kHjixKkG3rgfhKq9m3%2BOH3lZ6cib814%2BvlDAMLna070GOqUBLegeEiWLfGi38iYbenORXRga0CZU5sQRV79aWmqfM6pKwaGLZK%2BmsUS63XvBXM0CTFq%2BGps4Gx%2F0hyrkdVwpK4bTIwgoRHNnsLFhg44EKv54QPrS2TDnxXEmZIKeEhOSsdKddzbeCurDyI5YNDforTieSWCYVAoA1L603Tjdz%2BfL54iKR2Ddj8VqyjhvU7GILFl8EzvykaeHtlT69FLRr07E5kIb&X-Amz-Signature=3bf2b79261c5966547a5799c5cb60118b1a27079ae16d15fa59becf8b94b8080&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UPUYVDY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAVT3CQ3h2RrYutMpw8uyEqqQzj5pofrui71zvmydL7TAiEA%2Fy7BghSCFydqze%2BIRqICrTS5bAYsTRz5HEP%2Bp3seQIcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLx4QccT5lAJmj8AeSrcA2hXCKnr5fYkzoWtwtGsaaCxYERSj7plpU8uwkZK51epA0Rmobra0ILSBbhSHCwilVTOABF6vofypJMOhN9tdu7yo4aS9911rcuU4eGxXcD9GVBMSHwazqig%2FW6Szzrcz%2BrIO%2Bn5kh5uYvVoZdco3g8ibN4ceRt6AXnMNZ%2BYUltB%2F7GNhaAOgnfg2j%2FtmSlO5t3SwHMDlVj%2FX9b8s62KEmzN30v9Ye7tMRbo%2FlhcbIJAtg%2FnEb%2B3%2B599J58YkkxqRTbhS2JgWVtC%2Bc7muJzqeFaL8GF1PlEgU5yhNeLDwtEpggs3mey22E1jvqTzY2LZHB%2BeQVvFMFoC4if4q6hjGFP0cbwMi7FbqV234Kb486Hwa7hygBHdtxevQRwaaJxT23NOyrK7Qp01USTPqqFDchh9VeoNNXrHOinCxnuoiaRzg5VoFfTXHH3LFZikeJ9auwRA9EHN16%2FBQ%2FE0P3aBe3D2K4rfwfg5WfpgebF7MHairjoOikhhGNepM8FojZNmiZm0M%2BuOS0g7DSnbHe6vO92tsmDtMGxyxj7bhcg1pHIMJ7Lo0QLDjRuOIT5dpoIkTFAN5jU20RScsmoShm2vHHc7kHjixKkG3rgfhKq9m3%2BOH3lZ6cib814%2BvlDAMLna070GOqUBLegeEiWLfGi38iYbenORXRga0CZU5sQRV79aWmqfM6pKwaGLZK%2BmsUS63XvBXM0CTFq%2BGps4Gx%2F0hyrkdVwpK4bTIwgoRHNnsLFhg44EKv54QPrS2TDnxXEmZIKeEhOSsdKddzbeCurDyI5YNDforTieSWCYVAoA1L603Tjdz%2BfL54iKR2Ddj8VqyjhvU7GILFl8EzvykaeHtlT69FLRr07E5kIb&X-Amz-Signature=8d2712ccfb8da136327d8040f382091ea06a806264b73bb7d4c3d13fbbee6d1f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UPUYVDY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAVT3CQ3h2RrYutMpw8uyEqqQzj5pofrui71zvmydL7TAiEA%2Fy7BghSCFydqze%2BIRqICrTS5bAYsTRz5HEP%2Bp3seQIcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLx4QccT5lAJmj8AeSrcA2hXCKnr5fYkzoWtwtGsaaCxYERSj7plpU8uwkZK51epA0Rmobra0ILSBbhSHCwilVTOABF6vofypJMOhN9tdu7yo4aS9911rcuU4eGxXcD9GVBMSHwazqig%2FW6Szzrcz%2BrIO%2Bn5kh5uYvVoZdco3g8ibN4ceRt6AXnMNZ%2BYUltB%2F7GNhaAOgnfg2j%2FtmSlO5t3SwHMDlVj%2FX9b8s62KEmzN30v9Ye7tMRbo%2FlhcbIJAtg%2FnEb%2B3%2B599J58YkkxqRTbhS2JgWVtC%2Bc7muJzqeFaL8GF1PlEgU5yhNeLDwtEpggs3mey22E1jvqTzY2LZHB%2BeQVvFMFoC4if4q6hjGFP0cbwMi7FbqV234Kb486Hwa7hygBHdtxevQRwaaJxT23NOyrK7Qp01USTPqqFDchh9VeoNNXrHOinCxnuoiaRzg5VoFfTXHH3LFZikeJ9auwRA9EHN16%2FBQ%2FE0P3aBe3D2K4rfwfg5WfpgebF7MHairjoOikhhGNepM8FojZNmiZm0M%2BuOS0g7DSnbHe6vO92tsmDtMGxyxj7bhcg1pHIMJ7Lo0QLDjRuOIT5dpoIkTFAN5jU20RScsmoShm2vHHc7kHjixKkG3rgfhKq9m3%2BOH3lZ6cib814%2BvlDAMLna070GOqUBLegeEiWLfGi38iYbenORXRga0CZU5sQRV79aWmqfM6pKwaGLZK%2BmsUS63XvBXM0CTFq%2BGps4Gx%2F0hyrkdVwpK4bTIwgoRHNnsLFhg44EKv54QPrS2TDnxXEmZIKeEhOSsdKddzbeCurDyI5YNDforTieSWCYVAoA1L603Tjdz%2BfL54iKR2Ddj8VqyjhvU7GILFl8EzvykaeHtlT69FLRr07E5kIb&X-Amz-Signature=914871bb89229d29b72b2c7b4a90ec06d477096ee32be7baf35e00aa8a7eb7f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UPUYVDY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAVT3CQ3h2RrYutMpw8uyEqqQzj5pofrui71zvmydL7TAiEA%2Fy7BghSCFydqze%2BIRqICrTS5bAYsTRz5HEP%2Bp3seQIcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLx4QccT5lAJmj8AeSrcA2hXCKnr5fYkzoWtwtGsaaCxYERSj7plpU8uwkZK51epA0Rmobra0ILSBbhSHCwilVTOABF6vofypJMOhN9tdu7yo4aS9911rcuU4eGxXcD9GVBMSHwazqig%2FW6Szzrcz%2BrIO%2Bn5kh5uYvVoZdco3g8ibN4ceRt6AXnMNZ%2BYUltB%2F7GNhaAOgnfg2j%2FtmSlO5t3SwHMDlVj%2FX9b8s62KEmzN30v9Ye7tMRbo%2FlhcbIJAtg%2FnEb%2B3%2B599J58YkkxqRTbhS2JgWVtC%2Bc7muJzqeFaL8GF1PlEgU5yhNeLDwtEpggs3mey22E1jvqTzY2LZHB%2BeQVvFMFoC4if4q6hjGFP0cbwMi7FbqV234Kb486Hwa7hygBHdtxevQRwaaJxT23NOyrK7Qp01USTPqqFDchh9VeoNNXrHOinCxnuoiaRzg5VoFfTXHH3LFZikeJ9auwRA9EHN16%2FBQ%2FE0P3aBe3D2K4rfwfg5WfpgebF7MHairjoOikhhGNepM8FojZNmiZm0M%2BuOS0g7DSnbHe6vO92tsmDtMGxyxj7bhcg1pHIMJ7Lo0QLDjRuOIT5dpoIkTFAN5jU20RScsmoShm2vHHc7kHjixKkG3rgfhKq9m3%2BOH3lZ6cib814%2BvlDAMLna070GOqUBLegeEiWLfGi38iYbenORXRga0CZU5sQRV79aWmqfM6pKwaGLZK%2BmsUS63XvBXM0CTFq%2BGps4Gx%2F0hyrkdVwpK4bTIwgoRHNnsLFhg44EKv54QPrS2TDnxXEmZIKeEhOSsdKddzbeCurDyI5YNDforTieSWCYVAoA1L603Tjdz%2BfL54iKR2Ddj8VqyjhvU7GILFl8EzvykaeHtlT69FLRr07E5kIb&X-Amz-Signature=9d5bfb15f43b1cf5f541c684e8e40769aa8cf190afccc5120b15aec8a2b514ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UPUYVDY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAVT3CQ3h2RrYutMpw8uyEqqQzj5pofrui71zvmydL7TAiEA%2Fy7BghSCFydqze%2BIRqICrTS5bAYsTRz5HEP%2Bp3seQIcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLx4QccT5lAJmj8AeSrcA2hXCKnr5fYkzoWtwtGsaaCxYERSj7plpU8uwkZK51epA0Rmobra0ILSBbhSHCwilVTOABF6vofypJMOhN9tdu7yo4aS9911rcuU4eGxXcD9GVBMSHwazqig%2FW6Szzrcz%2BrIO%2Bn5kh5uYvVoZdco3g8ibN4ceRt6AXnMNZ%2BYUltB%2F7GNhaAOgnfg2j%2FtmSlO5t3SwHMDlVj%2FX9b8s62KEmzN30v9Ye7tMRbo%2FlhcbIJAtg%2FnEb%2B3%2B599J58YkkxqRTbhS2JgWVtC%2Bc7muJzqeFaL8GF1PlEgU5yhNeLDwtEpggs3mey22E1jvqTzY2LZHB%2BeQVvFMFoC4if4q6hjGFP0cbwMi7FbqV234Kb486Hwa7hygBHdtxevQRwaaJxT23NOyrK7Qp01USTPqqFDchh9VeoNNXrHOinCxnuoiaRzg5VoFfTXHH3LFZikeJ9auwRA9EHN16%2FBQ%2FE0P3aBe3D2K4rfwfg5WfpgebF7MHairjoOikhhGNepM8FojZNmiZm0M%2BuOS0g7DSnbHe6vO92tsmDtMGxyxj7bhcg1pHIMJ7Lo0QLDjRuOIT5dpoIkTFAN5jU20RScsmoShm2vHHc7kHjixKkG3rgfhKq9m3%2BOH3lZ6cib814%2BvlDAMLna070GOqUBLegeEiWLfGi38iYbenORXRga0CZU5sQRV79aWmqfM6pKwaGLZK%2BmsUS63XvBXM0CTFq%2BGps4Gx%2F0hyrkdVwpK4bTIwgoRHNnsLFhg44EKv54QPrS2TDnxXEmZIKeEhOSsdKddzbeCurDyI5YNDforTieSWCYVAoA1L603Tjdz%2BfL54iKR2Ddj8VqyjhvU7GILFl8EzvykaeHtlT69FLRr07E5kIb&X-Amz-Signature=d6885c46e91ffc859d2fcf4b9fabb756be2ed662d138968428a332adad25a58a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
