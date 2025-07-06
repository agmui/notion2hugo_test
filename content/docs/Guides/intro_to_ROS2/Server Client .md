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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ76XJMB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFa%2BW6uMRsyr10%2FdHECg8A4qeI2sY8g9DtvVQEhxtjHiAiEAn7sBJOd%2BVaOtQzxV3Ms3FWIdg05KE3d%2BRwKDDc5k4%2Fkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKEkdsG5fGRDqdFkgCrcAxLCYXRF%2Fy4stl8C4JZ2PaES2BD%2FE2Xq%2BlZC4VbZ8Q5K3Y6%2FDa7W06RNAMpHLMwgr1ktVHKDu7y%2FRureGtnV3fV%2BvaPo%2FiKig0Tov%2FZzbjbzbsbyp%2F1Ga90FreNTnjA9sYXGF8MM7ihi55nXpYc6YlJPjn%2B9aZ8euXzMrPKPgx2dbY6Cb2rQK6nvRejN5RI6Jq%2FUR2P3AFYMBcLoj3iQWWuYxcHC8mNp616AuZ1bKdTygIgp9OIFeTDNkbOnTU7Y8ZLINTkggy0M7qZKH8I4XKBm%2Fff1mVSGDJTWuqCmAsrEO%2BdMNab575ssC%2F%2B5VrJQHejpsUZAuTRH0BTGgwL4CE4lMW%2BNz77gIUTRDrVPz%2FpNluEJzqA7rg%2FqWgOcKFrZ0OWmZcjjejlpPC40J0eOF%2FE%2Fcywof0mz4%2F%2Fjvvv3bPLb5T2hhDfUaEe5s%2FVmNuKEKLWT8jxOHrAY4MYD4TE%2FoBaMHBrGaI0bGrYvL%2FM1OSURHlsh3ZNsr0QmD9vzlghDJjZFzjTY0k0Yt8YUpfza60JiN8Hem3KBwAhFeGT0Vw8PtklGYuIpBb%2BG5r%2FTDQbpuLXylkjE1G4I6NGDvr0WUmdtXyT16SR%2BECny58jdp%2FJ1ExB%2F3xQNgoC9lU1kMNOIp8MGOqUBCcfHqY%2FlZaS6GA3IbewQdSWOlcWHfGg78I7ooBOl91g1gwaGHoskqJlR4muFucVkdoZSGMCFhfMRhxetK07m%2Ff1g8VPcFwpfe24l8Fnewr4epQQ5Wb7yTCBxeVfq%2FpE08%2Fj3n%2Bd07xtcMGH2TApqO1UzqJtPn0WQvt%2BipnamWq617HK7rkJ4%2BaMrBQnQP42K5QzR4tSiq0Mb8nvwlezoD14RTFO1&X-Amz-Signature=1f285def92730f7209521c3de3b78c37665245e681fbb78e63c680dcd03b23fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ76XJMB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFa%2BW6uMRsyr10%2FdHECg8A4qeI2sY8g9DtvVQEhxtjHiAiEAn7sBJOd%2BVaOtQzxV3Ms3FWIdg05KE3d%2BRwKDDc5k4%2Fkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKEkdsG5fGRDqdFkgCrcAxLCYXRF%2Fy4stl8C4JZ2PaES2BD%2FE2Xq%2BlZC4VbZ8Q5K3Y6%2FDa7W06RNAMpHLMwgr1ktVHKDu7y%2FRureGtnV3fV%2BvaPo%2FiKig0Tov%2FZzbjbzbsbyp%2F1Ga90FreNTnjA9sYXGF8MM7ihi55nXpYc6YlJPjn%2B9aZ8euXzMrPKPgx2dbY6Cb2rQK6nvRejN5RI6Jq%2FUR2P3AFYMBcLoj3iQWWuYxcHC8mNp616AuZ1bKdTygIgp9OIFeTDNkbOnTU7Y8ZLINTkggy0M7qZKH8I4XKBm%2Fff1mVSGDJTWuqCmAsrEO%2BdMNab575ssC%2F%2B5VrJQHejpsUZAuTRH0BTGgwL4CE4lMW%2BNz77gIUTRDrVPz%2FpNluEJzqA7rg%2FqWgOcKFrZ0OWmZcjjejlpPC40J0eOF%2FE%2Fcywof0mz4%2F%2Fjvvv3bPLb5T2hhDfUaEe5s%2FVmNuKEKLWT8jxOHrAY4MYD4TE%2FoBaMHBrGaI0bGrYvL%2FM1OSURHlsh3ZNsr0QmD9vzlghDJjZFzjTY0k0Yt8YUpfza60JiN8Hem3KBwAhFeGT0Vw8PtklGYuIpBb%2BG5r%2FTDQbpuLXylkjE1G4I6NGDvr0WUmdtXyT16SR%2BECny58jdp%2FJ1ExB%2F3xQNgoC9lU1kMNOIp8MGOqUBCcfHqY%2FlZaS6GA3IbewQdSWOlcWHfGg78I7ooBOl91g1gwaGHoskqJlR4muFucVkdoZSGMCFhfMRhxetK07m%2Ff1g8VPcFwpfe24l8Fnewr4epQQ5Wb7yTCBxeVfq%2FpE08%2Fj3n%2Bd07xtcMGH2TApqO1UzqJtPn0WQvt%2BipnamWq617HK7rkJ4%2BaMrBQnQP42K5QzR4tSiq0Mb8nvwlezoD14RTFO1&X-Amz-Signature=611da32b16a459de17ef04b09cf8d3a20863eaf25907cf5c4bd4e3bd2c03f04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ76XJMB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFa%2BW6uMRsyr10%2FdHECg8A4qeI2sY8g9DtvVQEhxtjHiAiEAn7sBJOd%2BVaOtQzxV3Ms3FWIdg05KE3d%2BRwKDDc5k4%2Fkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKEkdsG5fGRDqdFkgCrcAxLCYXRF%2Fy4stl8C4JZ2PaES2BD%2FE2Xq%2BlZC4VbZ8Q5K3Y6%2FDa7W06RNAMpHLMwgr1ktVHKDu7y%2FRureGtnV3fV%2BvaPo%2FiKig0Tov%2FZzbjbzbsbyp%2F1Ga90FreNTnjA9sYXGF8MM7ihi55nXpYc6YlJPjn%2B9aZ8euXzMrPKPgx2dbY6Cb2rQK6nvRejN5RI6Jq%2FUR2P3AFYMBcLoj3iQWWuYxcHC8mNp616AuZ1bKdTygIgp9OIFeTDNkbOnTU7Y8ZLINTkggy0M7qZKH8I4XKBm%2Fff1mVSGDJTWuqCmAsrEO%2BdMNab575ssC%2F%2B5VrJQHejpsUZAuTRH0BTGgwL4CE4lMW%2BNz77gIUTRDrVPz%2FpNluEJzqA7rg%2FqWgOcKFrZ0OWmZcjjejlpPC40J0eOF%2FE%2Fcywof0mz4%2F%2Fjvvv3bPLb5T2hhDfUaEe5s%2FVmNuKEKLWT8jxOHrAY4MYD4TE%2FoBaMHBrGaI0bGrYvL%2FM1OSURHlsh3ZNsr0QmD9vzlghDJjZFzjTY0k0Yt8YUpfza60JiN8Hem3KBwAhFeGT0Vw8PtklGYuIpBb%2BG5r%2FTDQbpuLXylkjE1G4I6NGDvr0WUmdtXyT16SR%2BECny58jdp%2FJ1ExB%2F3xQNgoC9lU1kMNOIp8MGOqUBCcfHqY%2FlZaS6GA3IbewQdSWOlcWHfGg78I7ooBOl91g1gwaGHoskqJlR4muFucVkdoZSGMCFhfMRhxetK07m%2Ff1g8VPcFwpfe24l8Fnewr4epQQ5Wb7yTCBxeVfq%2FpE08%2Fj3n%2Bd07xtcMGH2TApqO1UzqJtPn0WQvt%2BipnamWq617HK7rkJ4%2BaMrBQnQP42K5QzR4tSiq0Mb8nvwlezoD14RTFO1&X-Amz-Signature=1466a1eac9ea30f8734db4e73be6424f2ca143344937b755ef7d016bb35e64cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ76XJMB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFa%2BW6uMRsyr10%2FdHECg8A4qeI2sY8g9DtvVQEhxtjHiAiEAn7sBJOd%2BVaOtQzxV3Ms3FWIdg05KE3d%2BRwKDDc5k4%2Fkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKEkdsG5fGRDqdFkgCrcAxLCYXRF%2Fy4stl8C4JZ2PaES2BD%2FE2Xq%2BlZC4VbZ8Q5K3Y6%2FDa7W06RNAMpHLMwgr1ktVHKDu7y%2FRureGtnV3fV%2BvaPo%2FiKig0Tov%2FZzbjbzbsbyp%2F1Ga90FreNTnjA9sYXGF8MM7ihi55nXpYc6YlJPjn%2B9aZ8euXzMrPKPgx2dbY6Cb2rQK6nvRejN5RI6Jq%2FUR2P3AFYMBcLoj3iQWWuYxcHC8mNp616AuZ1bKdTygIgp9OIFeTDNkbOnTU7Y8ZLINTkggy0M7qZKH8I4XKBm%2Fff1mVSGDJTWuqCmAsrEO%2BdMNab575ssC%2F%2B5VrJQHejpsUZAuTRH0BTGgwL4CE4lMW%2BNz77gIUTRDrVPz%2FpNluEJzqA7rg%2FqWgOcKFrZ0OWmZcjjejlpPC40J0eOF%2FE%2Fcywof0mz4%2F%2Fjvvv3bPLb5T2hhDfUaEe5s%2FVmNuKEKLWT8jxOHrAY4MYD4TE%2FoBaMHBrGaI0bGrYvL%2FM1OSURHlsh3ZNsr0QmD9vzlghDJjZFzjTY0k0Yt8YUpfza60JiN8Hem3KBwAhFeGT0Vw8PtklGYuIpBb%2BG5r%2FTDQbpuLXylkjE1G4I6NGDvr0WUmdtXyT16SR%2BECny58jdp%2FJ1ExB%2F3xQNgoC9lU1kMNOIp8MGOqUBCcfHqY%2FlZaS6GA3IbewQdSWOlcWHfGg78I7ooBOl91g1gwaGHoskqJlR4muFucVkdoZSGMCFhfMRhxetK07m%2Ff1g8VPcFwpfe24l8Fnewr4epQQ5Wb7yTCBxeVfq%2FpE08%2Fj3n%2Bd07xtcMGH2TApqO1UzqJtPn0WQvt%2BipnamWq617HK7rkJ4%2BaMrBQnQP42K5QzR4tSiq0Mb8nvwlezoD14RTFO1&X-Amz-Signature=736e54306b2d4425a1e3b4df03ee275a170f7a27594ec79605fb8caf9689f412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ76XJMB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFa%2BW6uMRsyr10%2FdHECg8A4qeI2sY8g9DtvVQEhxtjHiAiEAn7sBJOd%2BVaOtQzxV3Ms3FWIdg05KE3d%2BRwKDDc5k4%2Fkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKEkdsG5fGRDqdFkgCrcAxLCYXRF%2Fy4stl8C4JZ2PaES2BD%2FE2Xq%2BlZC4VbZ8Q5K3Y6%2FDa7W06RNAMpHLMwgr1ktVHKDu7y%2FRureGtnV3fV%2BvaPo%2FiKig0Tov%2FZzbjbzbsbyp%2F1Ga90FreNTnjA9sYXGF8MM7ihi55nXpYc6YlJPjn%2B9aZ8euXzMrPKPgx2dbY6Cb2rQK6nvRejN5RI6Jq%2FUR2P3AFYMBcLoj3iQWWuYxcHC8mNp616AuZ1bKdTygIgp9OIFeTDNkbOnTU7Y8ZLINTkggy0M7qZKH8I4XKBm%2Fff1mVSGDJTWuqCmAsrEO%2BdMNab575ssC%2F%2B5VrJQHejpsUZAuTRH0BTGgwL4CE4lMW%2BNz77gIUTRDrVPz%2FpNluEJzqA7rg%2FqWgOcKFrZ0OWmZcjjejlpPC40J0eOF%2FE%2Fcywof0mz4%2F%2Fjvvv3bPLb5T2hhDfUaEe5s%2FVmNuKEKLWT8jxOHrAY4MYD4TE%2FoBaMHBrGaI0bGrYvL%2FM1OSURHlsh3ZNsr0QmD9vzlghDJjZFzjTY0k0Yt8YUpfza60JiN8Hem3KBwAhFeGT0Vw8PtklGYuIpBb%2BG5r%2FTDQbpuLXylkjE1G4I6NGDvr0WUmdtXyT16SR%2BECny58jdp%2FJ1ExB%2F3xQNgoC9lU1kMNOIp8MGOqUBCcfHqY%2FlZaS6GA3IbewQdSWOlcWHfGg78I7ooBOl91g1gwaGHoskqJlR4muFucVkdoZSGMCFhfMRhxetK07m%2Ff1g8VPcFwpfe24l8Fnewr4epQQ5Wb7yTCBxeVfq%2FpE08%2Fj3n%2Bd07xtcMGH2TApqO1UzqJtPn0WQvt%2BipnamWq617HK7rkJ4%2BaMrBQnQP42K5QzR4tSiq0Mb8nvwlezoD14RTFO1&X-Amz-Signature=01409a88a63525eda90d4aeee824012f1fcda76ffce332e5f05f47e28beb4726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
