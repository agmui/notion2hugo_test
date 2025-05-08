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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDT3Q62O%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJpCjgArZmFJE6wywMelKsbNBKCOkg8WGeT%2FbyoLgiVgIgKsJ8VHrCyx8aLtMJlEuOBSSBCAqf0hD8H73MLEyVo%2Bcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDODbY%2FtDCvDi7hKc7SrcAzSNLFKQL%2BehWxbuITuJlaO%2FQyQyf9c1pjsSMaxMNMMStvUIdZsjugEh5u8MOyY%2FhV2CNTmZaEn91h5gaxqKAmOuNSUXathEdP9fLvoqOgAoINbxFhZmvbpRdiE7BibsKpzaj5iKGvm5sr7SU9LJbTQc%2FzOJNzew7AphMYahIJ3u8XRrf7d29dqsezh%2BrIkt46zKiPzje%2BkF7XLGqls0UeOW4xPBK3r05%2Bf7VGZKdhs6MRp%2F1bC0bWVxNrNxf7JF9zu6Dd6t6bWCCLE%2FyBy9%2B%2FyjCmrx%2ByYx9bTFRlDS11Zs8Gce%2FZ7M%2BJm4KC4JkmNE4ayI1qKWZ%2FAuaIwa7ZpSYYTqhZLJXnSMDBePjqFSig8wD5yhAUwiyeF2g5PhwCtbrrDrVpqY7i4Y8sVVH3bTRLZonrr4O1rIWWFMF1ZjPeXEzCq2HINkCA1NOfFVk%2FTjzDly2B4VG40xgdbWWPtZZ6L7Z99ska8%2FR%2Bfb8Fmy0bsItbQfjoVZDIsp0CT854fTRywtczBU9R3CCINRHvtdxWlr2lYfZlMP2ppPOgF7nuWpbMgE1a4Mwc1n%2BZHwsY%2BW6CzzRRRkLp0%2BUmyiHerU2YONUn2QgVLotrF0sG7iHjskrEzX0Iisx97lFvJQMPqZ88AGOqUBYMsshuhndC5A4Wl%2B6pyXOFR3FESPmcRXbFo%2BXPVv5g8iHtrIJZTGZjZRwkljCoXneVDQY%2BJn9jMZrOJlCwcCKxznrl6X00bDclBnE5MAfi2ABlXwxyqlBZJaf98aUQuWl1%2BAbgFAbj6CSMTXiZpNa5XuJSMQe45GFrZK7%2BpA0olOb20mGVMBegs4ekLdeYlOJgfWDk0DDbt2re7%2BPF1Pyt7Oa7bV&X-Amz-Signature=b67c8ec2c7780af5c135ca46b70da829ba92ac00303f061da17aece9b99c1191&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDT3Q62O%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJpCjgArZmFJE6wywMelKsbNBKCOkg8WGeT%2FbyoLgiVgIgKsJ8VHrCyx8aLtMJlEuOBSSBCAqf0hD8H73MLEyVo%2Bcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDODbY%2FtDCvDi7hKc7SrcAzSNLFKQL%2BehWxbuITuJlaO%2FQyQyf9c1pjsSMaxMNMMStvUIdZsjugEh5u8MOyY%2FhV2CNTmZaEn91h5gaxqKAmOuNSUXathEdP9fLvoqOgAoINbxFhZmvbpRdiE7BibsKpzaj5iKGvm5sr7SU9LJbTQc%2FzOJNzew7AphMYahIJ3u8XRrf7d29dqsezh%2BrIkt46zKiPzje%2BkF7XLGqls0UeOW4xPBK3r05%2Bf7VGZKdhs6MRp%2F1bC0bWVxNrNxf7JF9zu6Dd6t6bWCCLE%2FyBy9%2B%2FyjCmrx%2ByYx9bTFRlDS11Zs8Gce%2FZ7M%2BJm4KC4JkmNE4ayI1qKWZ%2FAuaIwa7ZpSYYTqhZLJXnSMDBePjqFSig8wD5yhAUwiyeF2g5PhwCtbrrDrVpqY7i4Y8sVVH3bTRLZonrr4O1rIWWFMF1ZjPeXEzCq2HINkCA1NOfFVk%2FTjzDly2B4VG40xgdbWWPtZZ6L7Z99ska8%2FR%2Bfb8Fmy0bsItbQfjoVZDIsp0CT854fTRywtczBU9R3CCINRHvtdxWlr2lYfZlMP2ppPOgF7nuWpbMgE1a4Mwc1n%2BZHwsY%2BW6CzzRRRkLp0%2BUmyiHerU2YONUn2QgVLotrF0sG7iHjskrEzX0Iisx97lFvJQMPqZ88AGOqUBYMsshuhndC5A4Wl%2B6pyXOFR3FESPmcRXbFo%2BXPVv5g8iHtrIJZTGZjZRwkljCoXneVDQY%2BJn9jMZrOJlCwcCKxznrl6X00bDclBnE5MAfi2ABlXwxyqlBZJaf98aUQuWl1%2BAbgFAbj6CSMTXiZpNa5XuJSMQe45GFrZK7%2BpA0olOb20mGVMBegs4ekLdeYlOJgfWDk0DDbt2re7%2BPF1Pyt7Oa7bV&X-Amz-Signature=821ff766bbfcfcd3792bec67265244403e4e6e2086d4c73aff4653cdd8145038&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDT3Q62O%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJpCjgArZmFJE6wywMelKsbNBKCOkg8WGeT%2FbyoLgiVgIgKsJ8VHrCyx8aLtMJlEuOBSSBCAqf0hD8H73MLEyVo%2Bcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDODbY%2FtDCvDi7hKc7SrcAzSNLFKQL%2BehWxbuITuJlaO%2FQyQyf9c1pjsSMaxMNMMStvUIdZsjugEh5u8MOyY%2FhV2CNTmZaEn91h5gaxqKAmOuNSUXathEdP9fLvoqOgAoINbxFhZmvbpRdiE7BibsKpzaj5iKGvm5sr7SU9LJbTQc%2FzOJNzew7AphMYahIJ3u8XRrf7d29dqsezh%2BrIkt46zKiPzje%2BkF7XLGqls0UeOW4xPBK3r05%2Bf7VGZKdhs6MRp%2F1bC0bWVxNrNxf7JF9zu6Dd6t6bWCCLE%2FyBy9%2B%2FyjCmrx%2ByYx9bTFRlDS11Zs8Gce%2FZ7M%2BJm4KC4JkmNE4ayI1qKWZ%2FAuaIwa7ZpSYYTqhZLJXnSMDBePjqFSig8wD5yhAUwiyeF2g5PhwCtbrrDrVpqY7i4Y8sVVH3bTRLZonrr4O1rIWWFMF1ZjPeXEzCq2HINkCA1NOfFVk%2FTjzDly2B4VG40xgdbWWPtZZ6L7Z99ska8%2FR%2Bfb8Fmy0bsItbQfjoVZDIsp0CT854fTRywtczBU9R3CCINRHvtdxWlr2lYfZlMP2ppPOgF7nuWpbMgE1a4Mwc1n%2BZHwsY%2BW6CzzRRRkLp0%2BUmyiHerU2YONUn2QgVLotrF0sG7iHjskrEzX0Iisx97lFvJQMPqZ88AGOqUBYMsshuhndC5A4Wl%2B6pyXOFR3FESPmcRXbFo%2BXPVv5g8iHtrIJZTGZjZRwkljCoXneVDQY%2BJn9jMZrOJlCwcCKxznrl6X00bDclBnE5MAfi2ABlXwxyqlBZJaf98aUQuWl1%2BAbgFAbj6CSMTXiZpNa5XuJSMQe45GFrZK7%2BpA0olOb20mGVMBegs4ekLdeYlOJgfWDk0DDbt2re7%2BPF1Pyt7Oa7bV&X-Amz-Signature=b57105f6a40543641e2bf0b634109d572ebc2faa3a4853c0f9223f17d6021b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDT3Q62O%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJpCjgArZmFJE6wywMelKsbNBKCOkg8WGeT%2FbyoLgiVgIgKsJ8VHrCyx8aLtMJlEuOBSSBCAqf0hD8H73MLEyVo%2Bcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDODbY%2FtDCvDi7hKc7SrcAzSNLFKQL%2BehWxbuITuJlaO%2FQyQyf9c1pjsSMaxMNMMStvUIdZsjugEh5u8MOyY%2FhV2CNTmZaEn91h5gaxqKAmOuNSUXathEdP9fLvoqOgAoINbxFhZmvbpRdiE7BibsKpzaj5iKGvm5sr7SU9LJbTQc%2FzOJNzew7AphMYahIJ3u8XRrf7d29dqsezh%2BrIkt46zKiPzje%2BkF7XLGqls0UeOW4xPBK3r05%2Bf7VGZKdhs6MRp%2F1bC0bWVxNrNxf7JF9zu6Dd6t6bWCCLE%2FyBy9%2B%2FyjCmrx%2ByYx9bTFRlDS11Zs8Gce%2FZ7M%2BJm4KC4JkmNE4ayI1qKWZ%2FAuaIwa7ZpSYYTqhZLJXnSMDBePjqFSig8wD5yhAUwiyeF2g5PhwCtbrrDrVpqY7i4Y8sVVH3bTRLZonrr4O1rIWWFMF1ZjPeXEzCq2HINkCA1NOfFVk%2FTjzDly2B4VG40xgdbWWPtZZ6L7Z99ska8%2FR%2Bfb8Fmy0bsItbQfjoVZDIsp0CT854fTRywtczBU9R3CCINRHvtdxWlr2lYfZlMP2ppPOgF7nuWpbMgE1a4Mwc1n%2BZHwsY%2BW6CzzRRRkLp0%2BUmyiHerU2YONUn2QgVLotrF0sG7iHjskrEzX0Iisx97lFvJQMPqZ88AGOqUBYMsshuhndC5A4Wl%2B6pyXOFR3FESPmcRXbFo%2BXPVv5g8iHtrIJZTGZjZRwkljCoXneVDQY%2BJn9jMZrOJlCwcCKxznrl6X00bDclBnE5MAfi2ABlXwxyqlBZJaf98aUQuWl1%2BAbgFAbj6CSMTXiZpNa5XuJSMQe45GFrZK7%2BpA0olOb20mGVMBegs4ekLdeYlOJgfWDk0DDbt2re7%2BPF1Pyt7Oa7bV&X-Amz-Signature=1cbdc17954533d464ea963d259588883bf37b66b927842beebd3a3b138e6caa4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDT3Q62O%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJpCjgArZmFJE6wywMelKsbNBKCOkg8WGeT%2FbyoLgiVgIgKsJ8VHrCyx8aLtMJlEuOBSSBCAqf0hD8H73MLEyVo%2Bcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDODbY%2FtDCvDi7hKc7SrcAzSNLFKQL%2BehWxbuITuJlaO%2FQyQyf9c1pjsSMaxMNMMStvUIdZsjugEh5u8MOyY%2FhV2CNTmZaEn91h5gaxqKAmOuNSUXathEdP9fLvoqOgAoINbxFhZmvbpRdiE7BibsKpzaj5iKGvm5sr7SU9LJbTQc%2FzOJNzew7AphMYahIJ3u8XRrf7d29dqsezh%2BrIkt46zKiPzje%2BkF7XLGqls0UeOW4xPBK3r05%2Bf7VGZKdhs6MRp%2F1bC0bWVxNrNxf7JF9zu6Dd6t6bWCCLE%2FyBy9%2B%2FyjCmrx%2ByYx9bTFRlDS11Zs8Gce%2FZ7M%2BJm4KC4JkmNE4ayI1qKWZ%2FAuaIwa7ZpSYYTqhZLJXnSMDBePjqFSig8wD5yhAUwiyeF2g5PhwCtbrrDrVpqY7i4Y8sVVH3bTRLZonrr4O1rIWWFMF1ZjPeXEzCq2HINkCA1NOfFVk%2FTjzDly2B4VG40xgdbWWPtZZ6L7Z99ska8%2FR%2Bfb8Fmy0bsItbQfjoVZDIsp0CT854fTRywtczBU9R3CCINRHvtdxWlr2lYfZlMP2ppPOgF7nuWpbMgE1a4Mwc1n%2BZHwsY%2BW6CzzRRRkLp0%2BUmyiHerU2YONUn2QgVLotrF0sG7iHjskrEzX0Iisx97lFvJQMPqZ88AGOqUBYMsshuhndC5A4Wl%2B6pyXOFR3FESPmcRXbFo%2BXPVv5g8iHtrIJZTGZjZRwkljCoXneVDQY%2BJn9jMZrOJlCwcCKxznrl6X00bDclBnE5MAfi2ABlXwxyqlBZJaf98aUQuWl1%2BAbgFAbj6CSMTXiZpNa5XuJSMQe45GFrZK7%2BpA0olOb20mGVMBegs4ekLdeYlOJgfWDk0DDbt2re7%2BPF1Pyt7Oa7bV&X-Amz-Signature=439e23b95ccd680e67f2beb990f43f34636b29f5d8c75b1881239e0050d7b2ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
