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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FEVHBNL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdaL%2BpPMljH5FaUZ0TypaNmWJ3F6ebC8dqI2tngBTD9wIgOpUqPmcTZsnJV5yhaC6mTqcO5w%2F5A4zNBM%2BuvkwYUM8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDM40ErcesfpYSdsbFyrcAxp0ywsJHBByYsIhOgs50y%2F2zA38nt5zaNMLvloBR%2BcFxJ%2BVS7NTD9qzC%2FFlFTtlGXM73ByhRnhMcapMj8G30uxCrLDuY4Od9mdRJW%2FKxIqvvXG5dW3kbhHiQ1kFsQmOh%2B4ytkaT2D0xX3kKsZqiiUD%2B3Gjw9va4xzHAFjrqy%2BrVQ3h5KVz1neKw%2FPWjQzVgFNpxgd%2BgvsrUtbL3g9wUncXbiVa2GYSjZdvAcqQ0zd1Ekx1Z0GL9%2Bgc97hm2OM%2FQWjyfBewfD4X7Id55MBphtKdehy81%2BanbOuzwXzGOV98N2WYGazVn%2Fv7ddmI%2FstR0ucyAKapwrF%2BE70NxzjVxcchWFhp%2FFuH68m7dc%2FM52RHPyoj67cjaXQwWKpuYBeAV3%2BW%2BsCACnYgcqgaE72vOiLeVnuHpA2zCLUmsUSx4jHdpNx0CtRv2rRVh43aaFEOMQNiRK6besPPRS8pAAViCwex3Aaja0705foFnGQdM%2FFqHeEmp0W0pVwelB4d3Qsux4r4qeYPeiuLmIvZ5egioLjFUTXN%2Bm9cNTMcImnq94wr3Kn1chnnxvrzE8lVcC9grXtfJe1nwFfROZTNPwfEAce5i4JZU9RBvrmpkZS1fVE5vGfIMXlPq9%2BS0W3zzMK3R8MQGOqUBOihfAS2TnUKCqA8B13Hi6lwhqTmB9xl5mi6ARFysVNPH1HFSXZQyMM3sYRFVt%2Bi5R%2FD7U2z6W8XRpx2lKCFH8uvJr1GOiTjbtHoZaJmj%2FkT6CUK0uatFbIiRciPF3bkO0PABvNOYVHhjGq601ID1Vbzh1UTrkCR1zWq5mKvdOMfxF18tEjlhlRTw2EXsdfnOywT00S1NO1dKACX6K%2FNh11mGSVGg&X-Amz-Signature=2106bdb149cf516576b411435af55c7938297e35c732e43a6e510323ce924d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FEVHBNL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdaL%2BpPMljH5FaUZ0TypaNmWJ3F6ebC8dqI2tngBTD9wIgOpUqPmcTZsnJV5yhaC6mTqcO5w%2F5A4zNBM%2BuvkwYUM8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDM40ErcesfpYSdsbFyrcAxp0ywsJHBByYsIhOgs50y%2F2zA38nt5zaNMLvloBR%2BcFxJ%2BVS7NTD9qzC%2FFlFTtlGXM73ByhRnhMcapMj8G30uxCrLDuY4Od9mdRJW%2FKxIqvvXG5dW3kbhHiQ1kFsQmOh%2B4ytkaT2D0xX3kKsZqiiUD%2B3Gjw9va4xzHAFjrqy%2BrVQ3h5KVz1neKw%2FPWjQzVgFNpxgd%2BgvsrUtbL3g9wUncXbiVa2GYSjZdvAcqQ0zd1Ekx1Z0GL9%2Bgc97hm2OM%2FQWjyfBewfD4X7Id55MBphtKdehy81%2BanbOuzwXzGOV98N2WYGazVn%2Fv7ddmI%2FstR0ucyAKapwrF%2BE70NxzjVxcchWFhp%2FFuH68m7dc%2FM52RHPyoj67cjaXQwWKpuYBeAV3%2BW%2BsCACnYgcqgaE72vOiLeVnuHpA2zCLUmsUSx4jHdpNx0CtRv2rRVh43aaFEOMQNiRK6besPPRS8pAAViCwex3Aaja0705foFnGQdM%2FFqHeEmp0W0pVwelB4d3Qsux4r4qeYPeiuLmIvZ5egioLjFUTXN%2Bm9cNTMcImnq94wr3Kn1chnnxvrzE8lVcC9grXtfJe1nwFfROZTNPwfEAce5i4JZU9RBvrmpkZS1fVE5vGfIMXlPq9%2BS0W3zzMK3R8MQGOqUBOihfAS2TnUKCqA8B13Hi6lwhqTmB9xl5mi6ARFysVNPH1HFSXZQyMM3sYRFVt%2Bi5R%2FD7U2z6W8XRpx2lKCFH8uvJr1GOiTjbtHoZaJmj%2FkT6CUK0uatFbIiRciPF3bkO0PABvNOYVHhjGq601ID1Vbzh1UTrkCR1zWq5mKvdOMfxF18tEjlhlRTw2EXsdfnOywT00S1NO1dKACX6K%2FNh11mGSVGg&X-Amz-Signature=7bbadac087aae4c5a021ddf8ea97818119894c52ca7b77505b1565637030cfa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FEVHBNL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdaL%2BpPMljH5FaUZ0TypaNmWJ3F6ebC8dqI2tngBTD9wIgOpUqPmcTZsnJV5yhaC6mTqcO5w%2F5A4zNBM%2BuvkwYUM8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDM40ErcesfpYSdsbFyrcAxp0ywsJHBByYsIhOgs50y%2F2zA38nt5zaNMLvloBR%2BcFxJ%2BVS7NTD9qzC%2FFlFTtlGXM73ByhRnhMcapMj8G30uxCrLDuY4Od9mdRJW%2FKxIqvvXG5dW3kbhHiQ1kFsQmOh%2B4ytkaT2D0xX3kKsZqiiUD%2B3Gjw9va4xzHAFjrqy%2BrVQ3h5KVz1neKw%2FPWjQzVgFNpxgd%2BgvsrUtbL3g9wUncXbiVa2GYSjZdvAcqQ0zd1Ekx1Z0GL9%2Bgc97hm2OM%2FQWjyfBewfD4X7Id55MBphtKdehy81%2BanbOuzwXzGOV98N2WYGazVn%2Fv7ddmI%2FstR0ucyAKapwrF%2BE70NxzjVxcchWFhp%2FFuH68m7dc%2FM52RHPyoj67cjaXQwWKpuYBeAV3%2BW%2BsCACnYgcqgaE72vOiLeVnuHpA2zCLUmsUSx4jHdpNx0CtRv2rRVh43aaFEOMQNiRK6besPPRS8pAAViCwex3Aaja0705foFnGQdM%2FFqHeEmp0W0pVwelB4d3Qsux4r4qeYPeiuLmIvZ5egioLjFUTXN%2Bm9cNTMcImnq94wr3Kn1chnnxvrzE8lVcC9grXtfJe1nwFfROZTNPwfEAce5i4JZU9RBvrmpkZS1fVE5vGfIMXlPq9%2BS0W3zzMK3R8MQGOqUBOihfAS2TnUKCqA8B13Hi6lwhqTmB9xl5mi6ARFysVNPH1HFSXZQyMM3sYRFVt%2Bi5R%2FD7U2z6W8XRpx2lKCFH8uvJr1GOiTjbtHoZaJmj%2FkT6CUK0uatFbIiRciPF3bkO0PABvNOYVHhjGq601ID1Vbzh1UTrkCR1zWq5mKvdOMfxF18tEjlhlRTw2EXsdfnOywT00S1NO1dKACX6K%2FNh11mGSVGg&X-Amz-Signature=9eff8f551597f34067fc70a1e5fda0bb93e5049a2572b288a1277da333fa42cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FEVHBNL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdaL%2BpPMljH5FaUZ0TypaNmWJ3F6ebC8dqI2tngBTD9wIgOpUqPmcTZsnJV5yhaC6mTqcO5w%2F5A4zNBM%2BuvkwYUM8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDM40ErcesfpYSdsbFyrcAxp0ywsJHBByYsIhOgs50y%2F2zA38nt5zaNMLvloBR%2BcFxJ%2BVS7NTD9qzC%2FFlFTtlGXM73ByhRnhMcapMj8G30uxCrLDuY4Od9mdRJW%2FKxIqvvXG5dW3kbhHiQ1kFsQmOh%2B4ytkaT2D0xX3kKsZqiiUD%2B3Gjw9va4xzHAFjrqy%2BrVQ3h5KVz1neKw%2FPWjQzVgFNpxgd%2BgvsrUtbL3g9wUncXbiVa2GYSjZdvAcqQ0zd1Ekx1Z0GL9%2Bgc97hm2OM%2FQWjyfBewfD4X7Id55MBphtKdehy81%2BanbOuzwXzGOV98N2WYGazVn%2Fv7ddmI%2FstR0ucyAKapwrF%2BE70NxzjVxcchWFhp%2FFuH68m7dc%2FM52RHPyoj67cjaXQwWKpuYBeAV3%2BW%2BsCACnYgcqgaE72vOiLeVnuHpA2zCLUmsUSx4jHdpNx0CtRv2rRVh43aaFEOMQNiRK6besPPRS8pAAViCwex3Aaja0705foFnGQdM%2FFqHeEmp0W0pVwelB4d3Qsux4r4qeYPeiuLmIvZ5egioLjFUTXN%2Bm9cNTMcImnq94wr3Kn1chnnxvrzE8lVcC9grXtfJe1nwFfROZTNPwfEAce5i4JZU9RBvrmpkZS1fVE5vGfIMXlPq9%2BS0W3zzMK3R8MQGOqUBOihfAS2TnUKCqA8B13Hi6lwhqTmB9xl5mi6ARFysVNPH1HFSXZQyMM3sYRFVt%2Bi5R%2FD7U2z6W8XRpx2lKCFH8uvJr1GOiTjbtHoZaJmj%2FkT6CUK0uatFbIiRciPF3bkO0PABvNOYVHhjGq601ID1Vbzh1UTrkCR1zWq5mKvdOMfxF18tEjlhlRTw2EXsdfnOywT00S1NO1dKACX6K%2FNh11mGSVGg&X-Amz-Signature=a545eb84313711c15116063e1121c650965225167bc7cc52ed3914775c86afc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FEVHBNL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdaL%2BpPMljH5FaUZ0TypaNmWJ3F6ebC8dqI2tngBTD9wIgOpUqPmcTZsnJV5yhaC6mTqcO5w%2F5A4zNBM%2BuvkwYUM8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDM40ErcesfpYSdsbFyrcAxp0ywsJHBByYsIhOgs50y%2F2zA38nt5zaNMLvloBR%2BcFxJ%2BVS7NTD9qzC%2FFlFTtlGXM73ByhRnhMcapMj8G30uxCrLDuY4Od9mdRJW%2FKxIqvvXG5dW3kbhHiQ1kFsQmOh%2B4ytkaT2D0xX3kKsZqiiUD%2B3Gjw9va4xzHAFjrqy%2BrVQ3h5KVz1neKw%2FPWjQzVgFNpxgd%2BgvsrUtbL3g9wUncXbiVa2GYSjZdvAcqQ0zd1Ekx1Z0GL9%2Bgc97hm2OM%2FQWjyfBewfD4X7Id55MBphtKdehy81%2BanbOuzwXzGOV98N2WYGazVn%2Fv7ddmI%2FstR0ucyAKapwrF%2BE70NxzjVxcchWFhp%2FFuH68m7dc%2FM52RHPyoj67cjaXQwWKpuYBeAV3%2BW%2BsCACnYgcqgaE72vOiLeVnuHpA2zCLUmsUSx4jHdpNx0CtRv2rRVh43aaFEOMQNiRK6besPPRS8pAAViCwex3Aaja0705foFnGQdM%2FFqHeEmp0W0pVwelB4d3Qsux4r4qeYPeiuLmIvZ5egioLjFUTXN%2Bm9cNTMcImnq94wr3Kn1chnnxvrzE8lVcC9grXtfJe1nwFfROZTNPwfEAce5i4JZU9RBvrmpkZS1fVE5vGfIMXlPq9%2BS0W3zzMK3R8MQGOqUBOihfAS2TnUKCqA8B13Hi6lwhqTmB9xl5mi6ARFysVNPH1HFSXZQyMM3sYRFVt%2Bi5R%2FD7U2z6W8XRpx2lKCFH8uvJr1GOiTjbtHoZaJmj%2FkT6CUK0uatFbIiRciPF3bkO0PABvNOYVHhjGq601ID1Vbzh1UTrkCR1zWq5mKvdOMfxF18tEjlhlRTw2EXsdfnOywT00S1NO1dKACX6K%2FNh11mGSVGg&X-Amz-Signature=22ce515368ba7114d65203e09123f4845e4869f4f3df87a3b0ae7dbbde853e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
