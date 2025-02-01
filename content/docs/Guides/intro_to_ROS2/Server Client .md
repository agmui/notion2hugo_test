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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646F3L4B2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDJQWow9eRp%2FxXDnYdH14WMb10hsWhkE0HJTIINeYrdAiEA7fFzrTOOcQo0CSJKkNiUIYSPzhDSICeV0ixeLjbxs0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWoYNw4s58xJJxvuCrcA1ZpDkMf%2FFOK9YPCA4ZQM9%2BmhSoCDwYqxn4X3ocWoO6voVf3GNjhSSDgu068VpfhX7VHLwkO4wxveAvlhiZUg%2Be7K%2BxVWsQS509z8hUelC02yYan1Pjx3B1TZDhd7koC1HMGjDO%2BQAiqwLgDRHtB1S75HNOpPF9rM24nLaRuu9rTNAnPRGFEOnYS0CijQzFICpkWd25hFXnpu6uqLKSpu4QaJ4Vzo%2FGraH9Zm4Ql8ODYksrQJY2UqPpoEw1qZdaf%2BVN3hcFqv1gz%2FULToMaH9hcU%2BuGVrzr5NjCv%2FrdbcTPSao6GEztiUYyasAndE%2FGw7Uggxnk1uuKy%2Fhe6fTvhfSTIrUag2cgqMolHhYGeXkD%2BovECHJCyuqvC82liBFn34LMNvQ32xZwB5%2FgWenbsLfzA%2FDTnWvUrPy%2FLAjqKuTRFIDEZlENvrHmBfPCGpnI3Goag%2FmXruoSLymEo%2FRkBSZHFgGgRJPi%2FhuwmXmf9dYKaQQM6hAgVLksppH4Osp7awDNSI4%2BV7OlOBQnkCw5g0GSjhI2i1bbbDxUFeRo96Von2%2FRyn6BJn5ftpGjIulxNp8Pmu0s%2Bc0Gbzsu5Ci%2BY4NX2w52SuStFQTCOmxkfXfPBxPtwoYmdvOWExNyMMJrD%2BLwGOqUBLHYoxHaWzn0clHpA6o39wf%2FdapDqlcf637h8%2F24sQWop5IrW%2FZ2RP%2BUdvtvSjZI98J6ajGh87dT5PdlLcfUqgss%2B0CQHRuv4TJ%2B021uzDAv99rQuN6KAUF1wdJOTXlaGoUyuZkqOuRks5NbqC4xgaREGkxQtuHioK0UAIyvacysEjirPMi8eV%2BVHej0cgclO9cob%2Bwphig76Hx%2BPrF%2BDEnH1usYy&X-Amz-Signature=0ad2a85e45f332ab5c95889de21d4c224f8e213808fb79278b436f1d4dee7707&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646F3L4B2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDJQWow9eRp%2FxXDnYdH14WMb10hsWhkE0HJTIINeYrdAiEA7fFzrTOOcQo0CSJKkNiUIYSPzhDSICeV0ixeLjbxs0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWoYNw4s58xJJxvuCrcA1ZpDkMf%2FFOK9YPCA4ZQM9%2BmhSoCDwYqxn4X3ocWoO6voVf3GNjhSSDgu068VpfhX7VHLwkO4wxveAvlhiZUg%2Be7K%2BxVWsQS509z8hUelC02yYan1Pjx3B1TZDhd7koC1HMGjDO%2BQAiqwLgDRHtB1S75HNOpPF9rM24nLaRuu9rTNAnPRGFEOnYS0CijQzFICpkWd25hFXnpu6uqLKSpu4QaJ4Vzo%2FGraH9Zm4Ql8ODYksrQJY2UqPpoEw1qZdaf%2BVN3hcFqv1gz%2FULToMaH9hcU%2BuGVrzr5NjCv%2FrdbcTPSao6GEztiUYyasAndE%2FGw7Uggxnk1uuKy%2Fhe6fTvhfSTIrUag2cgqMolHhYGeXkD%2BovECHJCyuqvC82liBFn34LMNvQ32xZwB5%2FgWenbsLfzA%2FDTnWvUrPy%2FLAjqKuTRFIDEZlENvrHmBfPCGpnI3Goag%2FmXruoSLymEo%2FRkBSZHFgGgRJPi%2FhuwmXmf9dYKaQQM6hAgVLksppH4Osp7awDNSI4%2BV7OlOBQnkCw5g0GSjhI2i1bbbDxUFeRo96Von2%2FRyn6BJn5ftpGjIulxNp8Pmu0s%2Bc0Gbzsu5Ci%2BY4NX2w52SuStFQTCOmxkfXfPBxPtwoYmdvOWExNyMMJrD%2BLwGOqUBLHYoxHaWzn0clHpA6o39wf%2FdapDqlcf637h8%2F24sQWop5IrW%2FZ2RP%2BUdvtvSjZI98J6ajGh87dT5PdlLcfUqgss%2B0CQHRuv4TJ%2B021uzDAv99rQuN6KAUF1wdJOTXlaGoUyuZkqOuRks5NbqC4xgaREGkxQtuHioK0UAIyvacysEjirPMi8eV%2BVHej0cgclO9cob%2Bwphig76Hx%2BPrF%2BDEnH1usYy&X-Amz-Signature=4b5ce5e8dafd94db9ebe14e7b62ae1c261353d70133e7f89fb4ce77befaefcec&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646F3L4B2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDJQWow9eRp%2FxXDnYdH14WMb10hsWhkE0HJTIINeYrdAiEA7fFzrTOOcQo0CSJKkNiUIYSPzhDSICeV0ixeLjbxs0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWoYNw4s58xJJxvuCrcA1ZpDkMf%2FFOK9YPCA4ZQM9%2BmhSoCDwYqxn4X3ocWoO6voVf3GNjhSSDgu068VpfhX7VHLwkO4wxveAvlhiZUg%2Be7K%2BxVWsQS509z8hUelC02yYan1Pjx3B1TZDhd7koC1HMGjDO%2BQAiqwLgDRHtB1S75HNOpPF9rM24nLaRuu9rTNAnPRGFEOnYS0CijQzFICpkWd25hFXnpu6uqLKSpu4QaJ4Vzo%2FGraH9Zm4Ql8ODYksrQJY2UqPpoEw1qZdaf%2BVN3hcFqv1gz%2FULToMaH9hcU%2BuGVrzr5NjCv%2FrdbcTPSao6GEztiUYyasAndE%2FGw7Uggxnk1uuKy%2Fhe6fTvhfSTIrUag2cgqMolHhYGeXkD%2BovECHJCyuqvC82liBFn34LMNvQ32xZwB5%2FgWenbsLfzA%2FDTnWvUrPy%2FLAjqKuTRFIDEZlENvrHmBfPCGpnI3Goag%2FmXruoSLymEo%2FRkBSZHFgGgRJPi%2FhuwmXmf9dYKaQQM6hAgVLksppH4Osp7awDNSI4%2BV7OlOBQnkCw5g0GSjhI2i1bbbDxUFeRo96Von2%2FRyn6BJn5ftpGjIulxNp8Pmu0s%2Bc0Gbzsu5Ci%2BY4NX2w52SuStFQTCOmxkfXfPBxPtwoYmdvOWExNyMMJrD%2BLwGOqUBLHYoxHaWzn0clHpA6o39wf%2FdapDqlcf637h8%2F24sQWop5IrW%2FZ2RP%2BUdvtvSjZI98J6ajGh87dT5PdlLcfUqgss%2B0CQHRuv4TJ%2B021uzDAv99rQuN6KAUF1wdJOTXlaGoUyuZkqOuRks5NbqC4xgaREGkxQtuHioK0UAIyvacysEjirPMi8eV%2BVHej0cgclO9cob%2Bwphig76Hx%2BPrF%2BDEnH1usYy&X-Amz-Signature=738b571af6bcfc918bdb3405da7ea676410e98186d411a06cb282efdda4ac349&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646F3L4B2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDJQWow9eRp%2FxXDnYdH14WMb10hsWhkE0HJTIINeYrdAiEA7fFzrTOOcQo0CSJKkNiUIYSPzhDSICeV0ixeLjbxs0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWoYNw4s58xJJxvuCrcA1ZpDkMf%2FFOK9YPCA4ZQM9%2BmhSoCDwYqxn4X3ocWoO6voVf3GNjhSSDgu068VpfhX7VHLwkO4wxveAvlhiZUg%2Be7K%2BxVWsQS509z8hUelC02yYan1Pjx3B1TZDhd7koC1HMGjDO%2BQAiqwLgDRHtB1S75HNOpPF9rM24nLaRuu9rTNAnPRGFEOnYS0CijQzFICpkWd25hFXnpu6uqLKSpu4QaJ4Vzo%2FGraH9Zm4Ql8ODYksrQJY2UqPpoEw1qZdaf%2BVN3hcFqv1gz%2FULToMaH9hcU%2BuGVrzr5NjCv%2FrdbcTPSao6GEztiUYyasAndE%2FGw7Uggxnk1uuKy%2Fhe6fTvhfSTIrUag2cgqMolHhYGeXkD%2BovECHJCyuqvC82liBFn34LMNvQ32xZwB5%2FgWenbsLfzA%2FDTnWvUrPy%2FLAjqKuTRFIDEZlENvrHmBfPCGpnI3Goag%2FmXruoSLymEo%2FRkBSZHFgGgRJPi%2FhuwmXmf9dYKaQQM6hAgVLksppH4Osp7awDNSI4%2BV7OlOBQnkCw5g0GSjhI2i1bbbDxUFeRo96Von2%2FRyn6BJn5ftpGjIulxNp8Pmu0s%2Bc0Gbzsu5Ci%2BY4NX2w52SuStFQTCOmxkfXfPBxPtwoYmdvOWExNyMMJrD%2BLwGOqUBLHYoxHaWzn0clHpA6o39wf%2FdapDqlcf637h8%2F24sQWop5IrW%2FZ2RP%2BUdvtvSjZI98J6ajGh87dT5PdlLcfUqgss%2B0CQHRuv4TJ%2B021uzDAv99rQuN6KAUF1wdJOTXlaGoUyuZkqOuRks5NbqC4xgaREGkxQtuHioK0UAIyvacysEjirPMi8eV%2BVHej0cgclO9cob%2Bwphig76Hx%2BPrF%2BDEnH1usYy&X-Amz-Signature=511ff0be6d94bd498b48100f786371db83e78f911c03740296f3ea237183de39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646F3L4B2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDJQWow9eRp%2FxXDnYdH14WMb10hsWhkE0HJTIINeYrdAiEA7fFzrTOOcQo0CSJKkNiUIYSPzhDSICeV0ixeLjbxs0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWoYNw4s58xJJxvuCrcA1ZpDkMf%2FFOK9YPCA4ZQM9%2BmhSoCDwYqxn4X3ocWoO6voVf3GNjhSSDgu068VpfhX7VHLwkO4wxveAvlhiZUg%2Be7K%2BxVWsQS509z8hUelC02yYan1Pjx3B1TZDhd7koC1HMGjDO%2BQAiqwLgDRHtB1S75HNOpPF9rM24nLaRuu9rTNAnPRGFEOnYS0CijQzFICpkWd25hFXnpu6uqLKSpu4QaJ4Vzo%2FGraH9Zm4Ql8ODYksrQJY2UqPpoEw1qZdaf%2BVN3hcFqv1gz%2FULToMaH9hcU%2BuGVrzr5NjCv%2FrdbcTPSao6GEztiUYyasAndE%2FGw7Uggxnk1uuKy%2Fhe6fTvhfSTIrUag2cgqMolHhYGeXkD%2BovECHJCyuqvC82liBFn34LMNvQ32xZwB5%2FgWenbsLfzA%2FDTnWvUrPy%2FLAjqKuTRFIDEZlENvrHmBfPCGpnI3Goag%2FmXruoSLymEo%2FRkBSZHFgGgRJPi%2FhuwmXmf9dYKaQQM6hAgVLksppH4Osp7awDNSI4%2BV7OlOBQnkCw5g0GSjhI2i1bbbDxUFeRo96Von2%2FRyn6BJn5ftpGjIulxNp8Pmu0s%2Bc0Gbzsu5Ci%2BY4NX2w52SuStFQTCOmxkfXfPBxPtwoYmdvOWExNyMMJrD%2BLwGOqUBLHYoxHaWzn0clHpA6o39wf%2FdapDqlcf637h8%2F24sQWop5IrW%2FZ2RP%2BUdvtvSjZI98J6ajGh87dT5PdlLcfUqgss%2B0CQHRuv4TJ%2B021uzDAv99rQuN6KAUF1wdJOTXlaGoUyuZkqOuRks5NbqC4xgaREGkxQtuHioK0UAIyvacysEjirPMi8eV%2BVHej0cgclO9cob%2Bwphig76Hx%2BPrF%2BDEnH1usYy&X-Amz-Signature=bdcc716a52f37eb5a08f84ed3919ee23474126d2f8d2ba18c0e2de8da8fec5a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
