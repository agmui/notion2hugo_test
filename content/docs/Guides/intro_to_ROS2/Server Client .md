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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=54f18fa9e8458dfdb21b2a2b45ae79a80edb57627cabace24115aa2c2d1cc347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=70aab6ac6277999e5b590f4414e664e095dbe920f59f941830509306f809d58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=8463b75502ad54eea1dae22f3771508a127539bda0ee9b5b0334cc0746c0f109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=d377e5b7e734088aef16cfc4f0dd96f50c73b300d5f0a1be9faec69846e53b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=f9bb7f64e5605d6a5d9697480b213bd59790df7729cf0fc461ea6b4aae9f3f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
