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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCPJU3J%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFd3U%2FmGf8xWBE8WkAZVIGTlmhTJQQ6fDnjXWtVa%2B1yPAiEAyvP34VPS1YTkcsQlJXkyxAfoDA52nXx760JKGIIDdlIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDC2y%2Fqg5S3BCI9mrsSrcA0suFeCInd0buNBORH69noWAK%2B%2F1ntX9gOa7WXN%2BR6OdNGzuiRn%2BYWV2YuVuOt5%2FYlZUFshz0hvdU1PUZudcK4QivkGm%2BM1vB3B276xFGCugKm2A6PqVUtIhiQAONAITdDZgwckRw6IP29u21xkY5kYhzKnoPCPmNwXqB2j9P73Bhi4U2A02jNUXIxcfKqSZauYueOSx4oAhdITYUxbXMKYoELfCFEKSBz6gY5nvKC%2FVDDBXFBeLgQYpEmDE7a%2FbvRPDbs2uRA1J1kWRIiyT9diQ4x8dZkhRgEO%2BnQnGKdhgcsjuObAWLe%2FAwCjtj3%2FpeYyZdnPhDLxmBdRU8lPgvtarOorWffgaV4XnXrzTi3tcIfrosqwtFhDR2itRvQBBE86yuYGlZuNA4NWUj6Uskh2EvzJIz1I%2F9gA6uZoVWH%2BPdv6V6pQ2s%2BRCNUaVXmOWyZLUofkKV7rJWIfEh9jW0LFp3%2F2hzWOLY0R%2F2jE9rLY0%2FFRdWDFEZokbaSnKINAxtHqesEln0LYBYKn6FpqxXwqrE5E9zVD7y%2F09EYNhMiZY3fQy1lMmdxLTftJIhfttH8hYYZx6B0S9icKoOKGFW7Rv3Fzm24BndTeiGEEBPX6W%2FZtzerbe6VkulJTwMJTzpb4GOqUBYLc%2BIl7TEhl8uIeidcmhAki08YMMtCBDalcxPBVShlsgy1fGc8ofcGwhFbewnomOl%2Bf4XoVE6mQAvimGBG8VY19gdPEqs0efUn8KRT4yzhW%2FpzocUnMbqEFWV9Ww4xH%2BS7obAEqsQCfKZsnW1BDKoKi57IrX%2BguoMdkfqdObMmtZXxI1hsRT5nEy46hsgsgyQ%2FZejjlFw%2B3saAaiYdJ94ouXcaRI&X-Amz-Signature=4de4a33f5e6e44da2f85e43be9d2f902eb069505acf7d3d364f6ea8d764a5448&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCPJU3J%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFd3U%2FmGf8xWBE8WkAZVIGTlmhTJQQ6fDnjXWtVa%2B1yPAiEAyvP34VPS1YTkcsQlJXkyxAfoDA52nXx760JKGIIDdlIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDC2y%2Fqg5S3BCI9mrsSrcA0suFeCInd0buNBORH69noWAK%2B%2F1ntX9gOa7WXN%2BR6OdNGzuiRn%2BYWV2YuVuOt5%2FYlZUFshz0hvdU1PUZudcK4QivkGm%2BM1vB3B276xFGCugKm2A6PqVUtIhiQAONAITdDZgwckRw6IP29u21xkY5kYhzKnoPCPmNwXqB2j9P73Bhi4U2A02jNUXIxcfKqSZauYueOSx4oAhdITYUxbXMKYoELfCFEKSBz6gY5nvKC%2FVDDBXFBeLgQYpEmDE7a%2FbvRPDbs2uRA1J1kWRIiyT9diQ4x8dZkhRgEO%2BnQnGKdhgcsjuObAWLe%2FAwCjtj3%2FpeYyZdnPhDLxmBdRU8lPgvtarOorWffgaV4XnXrzTi3tcIfrosqwtFhDR2itRvQBBE86yuYGlZuNA4NWUj6Uskh2EvzJIz1I%2F9gA6uZoVWH%2BPdv6V6pQ2s%2BRCNUaVXmOWyZLUofkKV7rJWIfEh9jW0LFp3%2F2hzWOLY0R%2F2jE9rLY0%2FFRdWDFEZokbaSnKINAxtHqesEln0LYBYKn6FpqxXwqrE5E9zVD7y%2F09EYNhMiZY3fQy1lMmdxLTftJIhfttH8hYYZx6B0S9icKoOKGFW7Rv3Fzm24BndTeiGEEBPX6W%2FZtzerbe6VkulJTwMJTzpb4GOqUBYLc%2BIl7TEhl8uIeidcmhAki08YMMtCBDalcxPBVShlsgy1fGc8ofcGwhFbewnomOl%2Bf4XoVE6mQAvimGBG8VY19gdPEqs0efUn8KRT4yzhW%2FpzocUnMbqEFWV9Ww4xH%2BS7obAEqsQCfKZsnW1BDKoKi57IrX%2BguoMdkfqdObMmtZXxI1hsRT5nEy46hsgsgyQ%2FZejjlFw%2B3saAaiYdJ94ouXcaRI&X-Amz-Signature=ebe8a9ae5863531b7b0a7606d54e7c48b99cd711feec121e40002962673a8660&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCPJU3J%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFd3U%2FmGf8xWBE8WkAZVIGTlmhTJQQ6fDnjXWtVa%2B1yPAiEAyvP34VPS1YTkcsQlJXkyxAfoDA52nXx760JKGIIDdlIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDC2y%2Fqg5S3BCI9mrsSrcA0suFeCInd0buNBORH69noWAK%2B%2F1ntX9gOa7WXN%2BR6OdNGzuiRn%2BYWV2YuVuOt5%2FYlZUFshz0hvdU1PUZudcK4QivkGm%2BM1vB3B276xFGCugKm2A6PqVUtIhiQAONAITdDZgwckRw6IP29u21xkY5kYhzKnoPCPmNwXqB2j9P73Bhi4U2A02jNUXIxcfKqSZauYueOSx4oAhdITYUxbXMKYoELfCFEKSBz6gY5nvKC%2FVDDBXFBeLgQYpEmDE7a%2FbvRPDbs2uRA1J1kWRIiyT9diQ4x8dZkhRgEO%2BnQnGKdhgcsjuObAWLe%2FAwCjtj3%2FpeYyZdnPhDLxmBdRU8lPgvtarOorWffgaV4XnXrzTi3tcIfrosqwtFhDR2itRvQBBE86yuYGlZuNA4NWUj6Uskh2EvzJIz1I%2F9gA6uZoVWH%2BPdv6V6pQ2s%2BRCNUaVXmOWyZLUofkKV7rJWIfEh9jW0LFp3%2F2hzWOLY0R%2F2jE9rLY0%2FFRdWDFEZokbaSnKINAxtHqesEln0LYBYKn6FpqxXwqrE5E9zVD7y%2F09EYNhMiZY3fQy1lMmdxLTftJIhfttH8hYYZx6B0S9icKoOKGFW7Rv3Fzm24BndTeiGEEBPX6W%2FZtzerbe6VkulJTwMJTzpb4GOqUBYLc%2BIl7TEhl8uIeidcmhAki08YMMtCBDalcxPBVShlsgy1fGc8ofcGwhFbewnomOl%2Bf4XoVE6mQAvimGBG8VY19gdPEqs0efUn8KRT4yzhW%2FpzocUnMbqEFWV9Ww4xH%2BS7obAEqsQCfKZsnW1BDKoKi57IrX%2BguoMdkfqdObMmtZXxI1hsRT5nEy46hsgsgyQ%2FZejjlFw%2B3saAaiYdJ94ouXcaRI&X-Amz-Signature=308a5dcde08456704417a542f37f93513e4ae6474563d3cae64809ea0125422f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCPJU3J%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFd3U%2FmGf8xWBE8WkAZVIGTlmhTJQQ6fDnjXWtVa%2B1yPAiEAyvP34VPS1YTkcsQlJXkyxAfoDA52nXx760JKGIIDdlIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDC2y%2Fqg5S3BCI9mrsSrcA0suFeCInd0buNBORH69noWAK%2B%2F1ntX9gOa7WXN%2BR6OdNGzuiRn%2BYWV2YuVuOt5%2FYlZUFshz0hvdU1PUZudcK4QivkGm%2BM1vB3B276xFGCugKm2A6PqVUtIhiQAONAITdDZgwckRw6IP29u21xkY5kYhzKnoPCPmNwXqB2j9P73Bhi4U2A02jNUXIxcfKqSZauYueOSx4oAhdITYUxbXMKYoELfCFEKSBz6gY5nvKC%2FVDDBXFBeLgQYpEmDE7a%2FbvRPDbs2uRA1J1kWRIiyT9diQ4x8dZkhRgEO%2BnQnGKdhgcsjuObAWLe%2FAwCjtj3%2FpeYyZdnPhDLxmBdRU8lPgvtarOorWffgaV4XnXrzTi3tcIfrosqwtFhDR2itRvQBBE86yuYGlZuNA4NWUj6Uskh2EvzJIz1I%2F9gA6uZoVWH%2BPdv6V6pQ2s%2BRCNUaVXmOWyZLUofkKV7rJWIfEh9jW0LFp3%2F2hzWOLY0R%2F2jE9rLY0%2FFRdWDFEZokbaSnKINAxtHqesEln0LYBYKn6FpqxXwqrE5E9zVD7y%2F09EYNhMiZY3fQy1lMmdxLTftJIhfttH8hYYZx6B0S9icKoOKGFW7Rv3Fzm24BndTeiGEEBPX6W%2FZtzerbe6VkulJTwMJTzpb4GOqUBYLc%2BIl7TEhl8uIeidcmhAki08YMMtCBDalcxPBVShlsgy1fGc8ofcGwhFbewnomOl%2Bf4XoVE6mQAvimGBG8VY19gdPEqs0efUn8KRT4yzhW%2FpzocUnMbqEFWV9Ww4xH%2BS7obAEqsQCfKZsnW1BDKoKi57IrX%2BguoMdkfqdObMmtZXxI1hsRT5nEy46hsgsgyQ%2FZejjlFw%2B3saAaiYdJ94ouXcaRI&X-Amz-Signature=fb8c68bdefa58675d6d167aff42f51b5430fc57776071cbf7505a845a7abd3b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCPJU3J%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFd3U%2FmGf8xWBE8WkAZVIGTlmhTJQQ6fDnjXWtVa%2B1yPAiEAyvP34VPS1YTkcsQlJXkyxAfoDA52nXx760JKGIIDdlIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDC2y%2Fqg5S3BCI9mrsSrcA0suFeCInd0buNBORH69noWAK%2B%2F1ntX9gOa7WXN%2BR6OdNGzuiRn%2BYWV2YuVuOt5%2FYlZUFshz0hvdU1PUZudcK4QivkGm%2BM1vB3B276xFGCugKm2A6PqVUtIhiQAONAITdDZgwckRw6IP29u21xkY5kYhzKnoPCPmNwXqB2j9P73Bhi4U2A02jNUXIxcfKqSZauYueOSx4oAhdITYUxbXMKYoELfCFEKSBz6gY5nvKC%2FVDDBXFBeLgQYpEmDE7a%2FbvRPDbs2uRA1J1kWRIiyT9diQ4x8dZkhRgEO%2BnQnGKdhgcsjuObAWLe%2FAwCjtj3%2FpeYyZdnPhDLxmBdRU8lPgvtarOorWffgaV4XnXrzTi3tcIfrosqwtFhDR2itRvQBBE86yuYGlZuNA4NWUj6Uskh2EvzJIz1I%2F9gA6uZoVWH%2BPdv6V6pQ2s%2BRCNUaVXmOWyZLUofkKV7rJWIfEh9jW0LFp3%2F2hzWOLY0R%2F2jE9rLY0%2FFRdWDFEZokbaSnKINAxtHqesEln0LYBYKn6FpqxXwqrE5E9zVD7y%2F09EYNhMiZY3fQy1lMmdxLTftJIhfttH8hYYZx6B0S9icKoOKGFW7Rv3Fzm24BndTeiGEEBPX6W%2FZtzerbe6VkulJTwMJTzpb4GOqUBYLc%2BIl7TEhl8uIeidcmhAki08YMMtCBDalcxPBVShlsgy1fGc8ofcGwhFbewnomOl%2Bf4XoVE6mQAvimGBG8VY19gdPEqs0efUn8KRT4yzhW%2FpzocUnMbqEFWV9Ww4xH%2BS7obAEqsQCfKZsnW1BDKoKi57IrX%2BguoMdkfqdObMmtZXxI1hsRT5nEy46hsgsgyQ%2FZejjlFw%2B3saAaiYdJ94ouXcaRI&X-Amz-Signature=b5bb139e487a5b885a8eff50638c2cfea4e0b9d7f7e61bb3bd9025757cc23fac&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
