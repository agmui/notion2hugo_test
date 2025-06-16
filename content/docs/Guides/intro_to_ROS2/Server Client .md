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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSONESXX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC9xroYoKsqcRfCrD0BvWyuiwdqaKKGtwLdP%2FOZJNo4ewIgCf4xGGjt8DNV2lSWv4YZsbuGzjOQhG3ig2JorUV7LxAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFbIVv5qYF0KRlmAyyrcA%2BCjWRXRFPA1oJxEMjWtiFBjp3tYs0E1dJ%2BpCmX6JZhz71wPa5WRtjmEU7JZvOaBszrMGNFI3K13cQEuUOIRyhHwzDiCrc1qNJYKSoudsbiAq6f3ySkkyfAzmVOkzcxap5iRQy4PvR8IH91A6HJCGn1F%2Ba4vaMjUb6Oo1FBFiEBruOLxAATwoDaTaX1AmSYz1YaHwgUmt1T3gwxuuao4UHr2zNX9jSOpbIFareVIH%2BGPIDtv2%2F2TNIX5vuE3yieDatPKZsyRutyKjMwyV41XVN%2Bx8zIb3wXR%2B6egFDlz2wijyE%2F18rkVXw9uktHPOJEvTNgCd4dCzuDBXE1%2B5kyxeuvHEcMu%2BW9WS4VMAmhXXAJLkmgGhIkZnISpdFEB4ZJLIx9ikrfVpO1ANvmMpUb9pAuJTXmhkAWaKH%2FzCe3hvTp9A6SKDN9bUTqcvVqIgSq7fPgR8c7kjRt1%2Fn66bTKLrjsvI%2F4cYkojgY3TGQsa8%2FEugNYNTfbiL7Ynyp%2FWLCs2owf60%2FANmc3OmWNcHElifm%2BJ%2FLI%2BPX1L9HHPpMci4x28urxSWphqdxzSlsXgTyA6ymVRKun%2BAZ6NiHe4H6oainfkeKsGJo7PHGY5y6EY1dtmqZ6wlifpn%2BrDxAgPMIWbwMIGOqUBdwHE8KLFRGXMm5ZL5%2Bn1Uj93nMboaoWu7rOMSbFevuIKyk%2B1Y04MLVy%2BWOatTDWUHk%2BQUwo78xphy%2BI7MWHNHqEedMNs96ZJhSQMyE0JL65vH9K5WNTS91%2B%2BjfPG3cfBDzw7b2w4EVomlYEDbSeH6pUBAWeJi35af8JYfSMPIf6gbaHMemlvs6iMHPYotriHj2vI8G3fpplSLpzgdFPwbu%2F8QX8F&X-Amz-Signature=777b966e9c35af192a9bb323a165bc7f764b1c091faeec655f074a5f887985a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSONESXX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC9xroYoKsqcRfCrD0BvWyuiwdqaKKGtwLdP%2FOZJNo4ewIgCf4xGGjt8DNV2lSWv4YZsbuGzjOQhG3ig2JorUV7LxAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFbIVv5qYF0KRlmAyyrcA%2BCjWRXRFPA1oJxEMjWtiFBjp3tYs0E1dJ%2BpCmX6JZhz71wPa5WRtjmEU7JZvOaBszrMGNFI3K13cQEuUOIRyhHwzDiCrc1qNJYKSoudsbiAq6f3ySkkyfAzmVOkzcxap5iRQy4PvR8IH91A6HJCGn1F%2Ba4vaMjUb6Oo1FBFiEBruOLxAATwoDaTaX1AmSYz1YaHwgUmt1T3gwxuuao4UHr2zNX9jSOpbIFareVIH%2BGPIDtv2%2F2TNIX5vuE3yieDatPKZsyRutyKjMwyV41XVN%2Bx8zIb3wXR%2B6egFDlz2wijyE%2F18rkVXw9uktHPOJEvTNgCd4dCzuDBXE1%2B5kyxeuvHEcMu%2BW9WS4VMAmhXXAJLkmgGhIkZnISpdFEB4ZJLIx9ikrfVpO1ANvmMpUb9pAuJTXmhkAWaKH%2FzCe3hvTp9A6SKDN9bUTqcvVqIgSq7fPgR8c7kjRt1%2Fn66bTKLrjsvI%2F4cYkojgY3TGQsa8%2FEugNYNTfbiL7Ynyp%2FWLCs2owf60%2FANmc3OmWNcHElifm%2BJ%2FLI%2BPX1L9HHPpMci4x28urxSWphqdxzSlsXgTyA6ymVRKun%2BAZ6NiHe4H6oainfkeKsGJo7PHGY5y6EY1dtmqZ6wlifpn%2BrDxAgPMIWbwMIGOqUBdwHE8KLFRGXMm5ZL5%2Bn1Uj93nMboaoWu7rOMSbFevuIKyk%2B1Y04MLVy%2BWOatTDWUHk%2BQUwo78xphy%2BI7MWHNHqEedMNs96ZJhSQMyE0JL65vH9K5WNTS91%2B%2BjfPG3cfBDzw7b2w4EVomlYEDbSeH6pUBAWeJi35af8JYfSMPIf6gbaHMemlvs6iMHPYotriHj2vI8G3fpplSLpzgdFPwbu%2F8QX8F&X-Amz-Signature=648b35cca006cb6c7d54f376713c86b21a1e90c3aa574403e61e0445cb87430c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSONESXX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC9xroYoKsqcRfCrD0BvWyuiwdqaKKGtwLdP%2FOZJNo4ewIgCf4xGGjt8DNV2lSWv4YZsbuGzjOQhG3ig2JorUV7LxAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFbIVv5qYF0KRlmAyyrcA%2BCjWRXRFPA1oJxEMjWtiFBjp3tYs0E1dJ%2BpCmX6JZhz71wPa5WRtjmEU7JZvOaBszrMGNFI3K13cQEuUOIRyhHwzDiCrc1qNJYKSoudsbiAq6f3ySkkyfAzmVOkzcxap5iRQy4PvR8IH91A6HJCGn1F%2Ba4vaMjUb6Oo1FBFiEBruOLxAATwoDaTaX1AmSYz1YaHwgUmt1T3gwxuuao4UHr2zNX9jSOpbIFareVIH%2BGPIDtv2%2F2TNIX5vuE3yieDatPKZsyRutyKjMwyV41XVN%2Bx8zIb3wXR%2B6egFDlz2wijyE%2F18rkVXw9uktHPOJEvTNgCd4dCzuDBXE1%2B5kyxeuvHEcMu%2BW9WS4VMAmhXXAJLkmgGhIkZnISpdFEB4ZJLIx9ikrfVpO1ANvmMpUb9pAuJTXmhkAWaKH%2FzCe3hvTp9A6SKDN9bUTqcvVqIgSq7fPgR8c7kjRt1%2Fn66bTKLrjsvI%2F4cYkojgY3TGQsa8%2FEugNYNTfbiL7Ynyp%2FWLCs2owf60%2FANmc3OmWNcHElifm%2BJ%2FLI%2BPX1L9HHPpMci4x28urxSWphqdxzSlsXgTyA6ymVRKun%2BAZ6NiHe4H6oainfkeKsGJo7PHGY5y6EY1dtmqZ6wlifpn%2BrDxAgPMIWbwMIGOqUBdwHE8KLFRGXMm5ZL5%2Bn1Uj93nMboaoWu7rOMSbFevuIKyk%2B1Y04MLVy%2BWOatTDWUHk%2BQUwo78xphy%2BI7MWHNHqEedMNs96ZJhSQMyE0JL65vH9K5WNTS91%2B%2BjfPG3cfBDzw7b2w4EVomlYEDbSeH6pUBAWeJi35af8JYfSMPIf6gbaHMemlvs6iMHPYotriHj2vI8G3fpplSLpzgdFPwbu%2F8QX8F&X-Amz-Signature=ff3067c8674253a9101fcacd9b1c20913be09ffaf220f7e9f53455d3a06cbd26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSONESXX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC9xroYoKsqcRfCrD0BvWyuiwdqaKKGtwLdP%2FOZJNo4ewIgCf4xGGjt8DNV2lSWv4YZsbuGzjOQhG3ig2JorUV7LxAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFbIVv5qYF0KRlmAyyrcA%2BCjWRXRFPA1oJxEMjWtiFBjp3tYs0E1dJ%2BpCmX6JZhz71wPa5WRtjmEU7JZvOaBszrMGNFI3K13cQEuUOIRyhHwzDiCrc1qNJYKSoudsbiAq6f3ySkkyfAzmVOkzcxap5iRQy4PvR8IH91A6HJCGn1F%2Ba4vaMjUb6Oo1FBFiEBruOLxAATwoDaTaX1AmSYz1YaHwgUmt1T3gwxuuao4UHr2zNX9jSOpbIFareVIH%2BGPIDtv2%2F2TNIX5vuE3yieDatPKZsyRutyKjMwyV41XVN%2Bx8zIb3wXR%2B6egFDlz2wijyE%2F18rkVXw9uktHPOJEvTNgCd4dCzuDBXE1%2B5kyxeuvHEcMu%2BW9WS4VMAmhXXAJLkmgGhIkZnISpdFEB4ZJLIx9ikrfVpO1ANvmMpUb9pAuJTXmhkAWaKH%2FzCe3hvTp9A6SKDN9bUTqcvVqIgSq7fPgR8c7kjRt1%2Fn66bTKLrjsvI%2F4cYkojgY3TGQsa8%2FEugNYNTfbiL7Ynyp%2FWLCs2owf60%2FANmc3OmWNcHElifm%2BJ%2FLI%2BPX1L9HHPpMci4x28urxSWphqdxzSlsXgTyA6ymVRKun%2BAZ6NiHe4H6oainfkeKsGJo7PHGY5y6EY1dtmqZ6wlifpn%2BrDxAgPMIWbwMIGOqUBdwHE8KLFRGXMm5ZL5%2Bn1Uj93nMboaoWu7rOMSbFevuIKyk%2B1Y04MLVy%2BWOatTDWUHk%2BQUwo78xphy%2BI7MWHNHqEedMNs96ZJhSQMyE0JL65vH9K5WNTS91%2B%2BjfPG3cfBDzw7b2w4EVomlYEDbSeH6pUBAWeJi35af8JYfSMPIf6gbaHMemlvs6iMHPYotriHj2vI8G3fpplSLpzgdFPwbu%2F8QX8F&X-Amz-Signature=e22dda2485420ba18ad5daf034e16d6a0bfa3b1c69ac87a5d9b070531136d871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSONESXX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC9xroYoKsqcRfCrD0BvWyuiwdqaKKGtwLdP%2FOZJNo4ewIgCf4xGGjt8DNV2lSWv4YZsbuGzjOQhG3ig2JorUV7LxAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFbIVv5qYF0KRlmAyyrcA%2BCjWRXRFPA1oJxEMjWtiFBjp3tYs0E1dJ%2BpCmX6JZhz71wPa5WRtjmEU7JZvOaBszrMGNFI3K13cQEuUOIRyhHwzDiCrc1qNJYKSoudsbiAq6f3ySkkyfAzmVOkzcxap5iRQy4PvR8IH91A6HJCGn1F%2Ba4vaMjUb6Oo1FBFiEBruOLxAATwoDaTaX1AmSYz1YaHwgUmt1T3gwxuuao4UHr2zNX9jSOpbIFareVIH%2BGPIDtv2%2F2TNIX5vuE3yieDatPKZsyRutyKjMwyV41XVN%2Bx8zIb3wXR%2B6egFDlz2wijyE%2F18rkVXw9uktHPOJEvTNgCd4dCzuDBXE1%2B5kyxeuvHEcMu%2BW9WS4VMAmhXXAJLkmgGhIkZnISpdFEB4ZJLIx9ikrfVpO1ANvmMpUb9pAuJTXmhkAWaKH%2FzCe3hvTp9A6SKDN9bUTqcvVqIgSq7fPgR8c7kjRt1%2Fn66bTKLrjsvI%2F4cYkojgY3TGQsa8%2FEugNYNTfbiL7Ynyp%2FWLCs2owf60%2FANmc3OmWNcHElifm%2BJ%2FLI%2BPX1L9HHPpMci4x28urxSWphqdxzSlsXgTyA6ymVRKun%2BAZ6NiHe4H6oainfkeKsGJo7PHGY5y6EY1dtmqZ6wlifpn%2BrDxAgPMIWbwMIGOqUBdwHE8KLFRGXMm5ZL5%2Bn1Uj93nMboaoWu7rOMSbFevuIKyk%2B1Y04MLVy%2BWOatTDWUHk%2BQUwo78xphy%2BI7MWHNHqEedMNs96ZJhSQMyE0JL65vH9K5WNTS91%2B%2BjfPG3cfBDzw7b2w4EVomlYEDbSeH6pUBAWeJi35af8JYfSMPIf6gbaHMemlvs6iMHPYotriHj2vI8G3fpplSLpzgdFPwbu%2F8QX8F&X-Amz-Signature=f9b7c154c578a081bda6e48c45b54a254f45084ad872f71258094772434b53ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
