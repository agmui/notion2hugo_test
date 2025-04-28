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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466366VP577%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BvOFFgXmGtO4u4LqwhyHpku1gAYZXCjfOwI6GbM2WrAiEAldGQsRE1vpGDPqZZlAY90DBV2GW%2FARWTJgs7nS73rNoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHcYwJZkWu4Txmue4CrcA41zWQTGA38%2B29c8LNf1th9EEZWoen6WH9bpFZ5nmk8deQh9hspCW2LFGhtrIHHyp7DLERm6uOgEVwqwkQv2MM3aQ8dQOOWiG2aV%2B64SsTrVr9jRQRxuK10Y9mkd5upt%2F9CmU1zaD5G88nyS263pVE3wer%2BetA%2FMbFv50fbtZ6KjaojQrtVPbEG1e690WDCfZjd6yJgFJ5jNgXNCPSh%2BHFn6WOCY17ftzWRT5fLmio0RLeOYyjBLFwb%2BEDxI%2BIsCGE0dikZw0YrkOROyK8AqHdI0Gx8OHgA6hNqm7NY%2ByclGeILwPUGnEf1W7k5ZvmuGfBDUJ8upezbVgtdGt5teqG2ekQ5nALKozvPMKeEoJb3cP%2BmdqjM1NdmNGa%2FpIU6ciSQuMXnI23J5QGraGSW%2B8V4BjJ9ZbeJuwYCG1pWu3F%2Fm3bqlpvv2m8djryIr5LO0aiGIwG4LbY4sF5rmN8ckKEBl3Z%2BUUbgXT76SGVBqQHHaK7Ak62E9d%2B77hmWUYZW6YqASkxcv3UGuwmFcNJTA0TrX5zdMrUW%2BscXtR1Ww2Jj52DYfnECIGAtIULbjzc63YwEDxGG%2F0dirGUbgh6Iq%2FQ9RlbPnSO7kCIngmMPSVcwVpSdytOQ9hLCfGIX1MLXIvcAGOqUBt3UyKgwkRgN6Q86FkGtk%2FKVEPWhKnCYhEImusj%2BUBYboAFzJi%2FsAx%2FNLR41hm8A2Uy14p8ViJmBWaGyNv5wwKRhsLFWOTPxMNnuNtYsrlb6QA8p%2FEGUeogid%2FTjxHGa3nHhHb828wkklMCIc6qRsGc6ZWRUt9Kgk%2BRm07jiEL99YX87uBMmsZyMXZSqBs0CvQhqYxNsa2%2BQCnT6Cu64nj%2Fl9CwTW&X-Amz-Signature=8f003060102e40807e206024eb14047bbd6896e507ead4141d667666bedc3c15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466366VP577%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BvOFFgXmGtO4u4LqwhyHpku1gAYZXCjfOwI6GbM2WrAiEAldGQsRE1vpGDPqZZlAY90DBV2GW%2FARWTJgs7nS73rNoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHcYwJZkWu4Txmue4CrcA41zWQTGA38%2B29c8LNf1th9EEZWoen6WH9bpFZ5nmk8deQh9hspCW2LFGhtrIHHyp7DLERm6uOgEVwqwkQv2MM3aQ8dQOOWiG2aV%2B64SsTrVr9jRQRxuK10Y9mkd5upt%2F9CmU1zaD5G88nyS263pVE3wer%2BetA%2FMbFv50fbtZ6KjaojQrtVPbEG1e690WDCfZjd6yJgFJ5jNgXNCPSh%2BHFn6WOCY17ftzWRT5fLmio0RLeOYyjBLFwb%2BEDxI%2BIsCGE0dikZw0YrkOROyK8AqHdI0Gx8OHgA6hNqm7NY%2ByclGeILwPUGnEf1W7k5ZvmuGfBDUJ8upezbVgtdGt5teqG2ekQ5nALKozvPMKeEoJb3cP%2BmdqjM1NdmNGa%2FpIU6ciSQuMXnI23J5QGraGSW%2B8V4BjJ9ZbeJuwYCG1pWu3F%2Fm3bqlpvv2m8djryIr5LO0aiGIwG4LbY4sF5rmN8ckKEBl3Z%2BUUbgXT76SGVBqQHHaK7Ak62E9d%2B77hmWUYZW6YqASkxcv3UGuwmFcNJTA0TrX5zdMrUW%2BscXtR1Ww2Jj52DYfnECIGAtIULbjzc63YwEDxGG%2F0dirGUbgh6Iq%2FQ9RlbPnSO7kCIngmMPSVcwVpSdytOQ9hLCfGIX1MLXIvcAGOqUBt3UyKgwkRgN6Q86FkGtk%2FKVEPWhKnCYhEImusj%2BUBYboAFzJi%2FsAx%2FNLR41hm8A2Uy14p8ViJmBWaGyNv5wwKRhsLFWOTPxMNnuNtYsrlb6QA8p%2FEGUeogid%2FTjxHGa3nHhHb828wkklMCIc6qRsGc6ZWRUt9Kgk%2BRm07jiEL99YX87uBMmsZyMXZSqBs0CvQhqYxNsa2%2BQCnT6Cu64nj%2Fl9CwTW&X-Amz-Signature=198727ebd6e226aba04f8b4fd76aacabf9e8e079b4ec30a1882db08bb072ba26&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466366VP577%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BvOFFgXmGtO4u4LqwhyHpku1gAYZXCjfOwI6GbM2WrAiEAldGQsRE1vpGDPqZZlAY90DBV2GW%2FARWTJgs7nS73rNoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHcYwJZkWu4Txmue4CrcA41zWQTGA38%2B29c8LNf1th9EEZWoen6WH9bpFZ5nmk8deQh9hspCW2LFGhtrIHHyp7DLERm6uOgEVwqwkQv2MM3aQ8dQOOWiG2aV%2B64SsTrVr9jRQRxuK10Y9mkd5upt%2F9CmU1zaD5G88nyS263pVE3wer%2BetA%2FMbFv50fbtZ6KjaojQrtVPbEG1e690WDCfZjd6yJgFJ5jNgXNCPSh%2BHFn6WOCY17ftzWRT5fLmio0RLeOYyjBLFwb%2BEDxI%2BIsCGE0dikZw0YrkOROyK8AqHdI0Gx8OHgA6hNqm7NY%2ByclGeILwPUGnEf1W7k5ZvmuGfBDUJ8upezbVgtdGt5teqG2ekQ5nALKozvPMKeEoJb3cP%2BmdqjM1NdmNGa%2FpIU6ciSQuMXnI23J5QGraGSW%2B8V4BjJ9ZbeJuwYCG1pWu3F%2Fm3bqlpvv2m8djryIr5LO0aiGIwG4LbY4sF5rmN8ckKEBl3Z%2BUUbgXT76SGVBqQHHaK7Ak62E9d%2B77hmWUYZW6YqASkxcv3UGuwmFcNJTA0TrX5zdMrUW%2BscXtR1Ww2Jj52DYfnECIGAtIULbjzc63YwEDxGG%2F0dirGUbgh6Iq%2FQ9RlbPnSO7kCIngmMPSVcwVpSdytOQ9hLCfGIX1MLXIvcAGOqUBt3UyKgwkRgN6Q86FkGtk%2FKVEPWhKnCYhEImusj%2BUBYboAFzJi%2FsAx%2FNLR41hm8A2Uy14p8ViJmBWaGyNv5wwKRhsLFWOTPxMNnuNtYsrlb6QA8p%2FEGUeogid%2FTjxHGa3nHhHb828wkklMCIc6qRsGc6ZWRUt9Kgk%2BRm07jiEL99YX87uBMmsZyMXZSqBs0CvQhqYxNsa2%2BQCnT6Cu64nj%2Fl9CwTW&X-Amz-Signature=d4bdcc9774b8b8b1c082dcc33189487adb29891e3d63c41c9f93e17b4fadaeaa&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466366VP577%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BvOFFgXmGtO4u4LqwhyHpku1gAYZXCjfOwI6GbM2WrAiEAldGQsRE1vpGDPqZZlAY90DBV2GW%2FARWTJgs7nS73rNoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHcYwJZkWu4Txmue4CrcA41zWQTGA38%2B29c8LNf1th9EEZWoen6WH9bpFZ5nmk8deQh9hspCW2LFGhtrIHHyp7DLERm6uOgEVwqwkQv2MM3aQ8dQOOWiG2aV%2B64SsTrVr9jRQRxuK10Y9mkd5upt%2F9CmU1zaD5G88nyS263pVE3wer%2BetA%2FMbFv50fbtZ6KjaojQrtVPbEG1e690WDCfZjd6yJgFJ5jNgXNCPSh%2BHFn6WOCY17ftzWRT5fLmio0RLeOYyjBLFwb%2BEDxI%2BIsCGE0dikZw0YrkOROyK8AqHdI0Gx8OHgA6hNqm7NY%2ByclGeILwPUGnEf1W7k5ZvmuGfBDUJ8upezbVgtdGt5teqG2ekQ5nALKozvPMKeEoJb3cP%2BmdqjM1NdmNGa%2FpIU6ciSQuMXnI23J5QGraGSW%2B8V4BjJ9ZbeJuwYCG1pWu3F%2Fm3bqlpvv2m8djryIr5LO0aiGIwG4LbY4sF5rmN8ckKEBl3Z%2BUUbgXT76SGVBqQHHaK7Ak62E9d%2B77hmWUYZW6YqASkxcv3UGuwmFcNJTA0TrX5zdMrUW%2BscXtR1Ww2Jj52DYfnECIGAtIULbjzc63YwEDxGG%2F0dirGUbgh6Iq%2FQ9RlbPnSO7kCIngmMPSVcwVpSdytOQ9hLCfGIX1MLXIvcAGOqUBt3UyKgwkRgN6Q86FkGtk%2FKVEPWhKnCYhEImusj%2BUBYboAFzJi%2FsAx%2FNLR41hm8A2Uy14p8ViJmBWaGyNv5wwKRhsLFWOTPxMNnuNtYsrlb6QA8p%2FEGUeogid%2FTjxHGa3nHhHb828wkklMCIc6qRsGc6ZWRUt9Kgk%2BRm07jiEL99YX87uBMmsZyMXZSqBs0CvQhqYxNsa2%2BQCnT6Cu64nj%2Fl9CwTW&X-Amz-Signature=41eac05f9dd960bcf44408783136710e2255f933723e42325a7362b6820ad820&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466366VP577%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BvOFFgXmGtO4u4LqwhyHpku1gAYZXCjfOwI6GbM2WrAiEAldGQsRE1vpGDPqZZlAY90DBV2GW%2FARWTJgs7nS73rNoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHcYwJZkWu4Txmue4CrcA41zWQTGA38%2B29c8LNf1th9EEZWoen6WH9bpFZ5nmk8deQh9hspCW2LFGhtrIHHyp7DLERm6uOgEVwqwkQv2MM3aQ8dQOOWiG2aV%2B64SsTrVr9jRQRxuK10Y9mkd5upt%2F9CmU1zaD5G88nyS263pVE3wer%2BetA%2FMbFv50fbtZ6KjaojQrtVPbEG1e690WDCfZjd6yJgFJ5jNgXNCPSh%2BHFn6WOCY17ftzWRT5fLmio0RLeOYyjBLFwb%2BEDxI%2BIsCGE0dikZw0YrkOROyK8AqHdI0Gx8OHgA6hNqm7NY%2ByclGeILwPUGnEf1W7k5ZvmuGfBDUJ8upezbVgtdGt5teqG2ekQ5nALKozvPMKeEoJb3cP%2BmdqjM1NdmNGa%2FpIU6ciSQuMXnI23J5QGraGSW%2B8V4BjJ9ZbeJuwYCG1pWu3F%2Fm3bqlpvv2m8djryIr5LO0aiGIwG4LbY4sF5rmN8ckKEBl3Z%2BUUbgXT76SGVBqQHHaK7Ak62E9d%2B77hmWUYZW6YqASkxcv3UGuwmFcNJTA0TrX5zdMrUW%2BscXtR1Ww2Jj52DYfnECIGAtIULbjzc63YwEDxGG%2F0dirGUbgh6Iq%2FQ9RlbPnSO7kCIngmMPSVcwVpSdytOQ9hLCfGIX1MLXIvcAGOqUBt3UyKgwkRgN6Q86FkGtk%2FKVEPWhKnCYhEImusj%2BUBYboAFzJi%2FsAx%2FNLR41hm8A2Uy14p8ViJmBWaGyNv5wwKRhsLFWOTPxMNnuNtYsrlb6QA8p%2FEGUeogid%2FTjxHGa3nHhHb828wkklMCIc6qRsGc6ZWRUt9Kgk%2BRm07jiEL99YX87uBMmsZyMXZSqBs0CvQhqYxNsa2%2BQCnT6Cu64nj%2Fl9CwTW&X-Amz-Signature=c1239033bd59ef760b0248e5f5a1f603afdd71acf695c2a0896b86dc7b985db2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
