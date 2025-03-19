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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662COGIQSF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDK4KFUz3vCmQUwzMlSqD19He6sLAG2IE68E%2BkhzpEpMgIgZndC9J0Szg4Slu7GttDEr3P2OAHXa40vhbiFOixcO3Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHOYss8IHPFSg2%2FJxyrcA2ge9uYXABt8jjUSh6LJn%2BCOQ6655%2Furz7iYpWVAmOiraNguaK3FGIiwIBrKQuDzZwSdC%2FH1GjWouYln5kFEWKwOwHlP3CDN%2BU4jRYPt43Rdm%2BKI16Rhvw%2FvqP4HZjV8%2BtjjrbdaI6S1RV4a0txRaoAPfp2dqGFkQ3hK9fwyhDLOi%2FStmaVlf3Us3Sda1RSeO2ZGKn4JilHfOHxCUZWKP4ghM6M1UNcRaEk2Yebcs78bDLcX8aLHcedMFI6xhSaxmYChzZLuT11TWGzS73Y2GCx6kshRup6H0vJ1TBrXotQnilZie6G1Kl%2B%2Faku3s3P44%2FQZA10ibVgihnBSHexdIy85QIexLnHSilCXS2%2Fe2H77jKgEib5u4ivqL5VqAn%2B0yUIV55kZH1C%2FhXl1Rrfc54srxiaSAMvL6S2lYrNoBd%2Bpc%2B2c2MMWLinlrE87%2Bt0FuO7lgPGljTTWaZmbXaNrB0%2BWVQijgqxrY9VBVJW8zdAYwmT4jQCWUIlasb8PZ0q%2BNQbPB8k3rOs%2B0QbALKTBPWG4NlgW3K7%2BRuYbBDN4GmOwQbYsDPRgVCRHeEvVOEXbxRkt68d91Elu6Hr7yrg5nQBFWzw7ssH2XGyqDG5OM0bOoHiFLM18DFOsI1K2MOT%2B6L4GOqUBYdubU%2Bg%2Bqs4my%2FB5YE8qvlwgrjPepfhmnnAiRbzivCm8ftE7TbUiW0Fuy6lSyudlU7c3G4eXPcO9E2FvCGwJKPxJ0Ho5ji5OTkXVW699WqNov2Vp3Naik0yHQyO%2B6j02YSLEtsd7cEsZ496tWbAcN%2Flo1Ov50J%2FPAc3iJKeZ3aORCwdXSFh48N%2FrToxXPeiLToHXkijklMv9qlHQseRJm%2BlS%2BtRy&X-Amz-Signature=3b5e532dafe84f352d53c18862d0529a6aed7bd51b46ce8587b63585ed34f5d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662COGIQSF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDK4KFUz3vCmQUwzMlSqD19He6sLAG2IE68E%2BkhzpEpMgIgZndC9J0Szg4Slu7GttDEr3P2OAHXa40vhbiFOixcO3Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHOYss8IHPFSg2%2FJxyrcA2ge9uYXABt8jjUSh6LJn%2BCOQ6655%2Furz7iYpWVAmOiraNguaK3FGIiwIBrKQuDzZwSdC%2FH1GjWouYln5kFEWKwOwHlP3CDN%2BU4jRYPt43Rdm%2BKI16Rhvw%2FvqP4HZjV8%2BtjjrbdaI6S1RV4a0txRaoAPfp2dqGFkQ3hK9fwyhDLOi%2FStmaVlf3Us3Sda1RSeO2ZGKn4JilHfOHxCUZWKP4ghM6M1UNcRaEk2Yebcs78bDLcX8aLHcedMFI6xhSaxmYChzZLuT11TWGzS73Y2GCx6kshRup6H0vJ1TBrXotQnilZie6G1Kl%2B%2Faku3s3P44%2FQZA10ibVgihnBSHexdIy85QIexLnHSilCXS2%2Fe2H77jKgEib5u4ivqL5VqAn%2B0yUIV55kZH1C%2FhXl1Rrfc54srxiaSAMvL6S2lYrNoBd%2Bpc%2B2c2MMWLinlrE87%2Bt0FuO7lgPGljTTWaZmbXaNrB0%2BWVQijgqxrY9VBVJW8zdAYwmT4jQCWUIlasb8PZ0q%2BNQbPB8k3rOs%2B0QbALKTBPWG4NlgW3K7%2BRuYbBDN4GmOwQbYsDPRgVCRHeEvVOEXbxRkt68d91Elu6Hr7yrg5nQBFWzw7ssH2XGyqDG5OM0bOoHiFLM18DFOsI1K2MOT%2B6L4GOqUBYdubU%2Bg%2Bqs4my%2FB5YE8qvlwgrjPepfhmnnAiRbzivCm8ftE7TbUiW0Fuy6lSyudlU7c3G4eXPcO9E2FvCGwJKPxJ0Ho5ji5OTkXVW699WqNov2Vp3Naik0yHQyO%2B6j02YSLEtsd7cEsZ496tWbAcN%2Flo1Ov50J%2FPAc3iJKeZ3aORCwdXSFh48N%2FrToxXPeiLToHXkijklMv9qlHQseRJm%2BlS%2BtRy&X-Amz-Signature=58794168eb618048e830f11a1f6c0fbe442c3bc7cf3f0034250dcb9bac4ddd0f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662COGIQSF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDK4KFUz3vCmQUwzMlSqD19He6sLAG2IE68E%2BkhzpEpMgIgZndC9J0Szg4Slu7GttDEr3P2OAHXa40vhbiFOixcO3Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHOYss8IHPFSg2%2FJxyrcA2ge9uYXABt8jjUSh6LJn%2BCOQ6655%2Furz7iYpWVAmOiraNguaK3FGIiwIBrKQuDzZwSdC%2FH1GjWouYln5kFEWKwOwHlP3CDN%2BU4jRYPt43Rdm%2BKI16Rhvw%2FvqP4HZjV8%2BtjjrbdaI6S1RV4a0txRaoAPfp2dqGFkQ3hK9fwyhDLOi%2FStmaVlf3Us3Sda1RSeO2ZGKn4JilHfOHxCUZWKP4ghM6M1UNcRaEk2Yebcs78bDLcX8aLHcedMFI6xhSaxmYChzZLuT11TWGzS73Y2GCx6kshRup6H0vJ1TBrXotQnilZie6G1Kl%2B%2Faku3s3P44%2FQZA10ibVgihnBSHexdIy85QIexLnHSilCXS2%2Fe2H77jKgEib5u4ivqL5VqAn%2B0yUIV55kZH1C%2FhXl1Rrfc54srxiaSAMvL6S2lYrNoBd%2Bpc%2B2c2MMWLinlrE87%2Bt0FuO7lgPGljTTWaZmbXaNrB0%2BWVQijgqxrY9VBVJW8zdAYwmT4jQCWUIlasb8PZ0q%2BNQbPB8k3rOs%2B0QbALKTBPWG4NlgW3K7%2BRuYbBDN4GmOwQbYsDPRgVCRHeEvVOEXbxRkt68d91Elu6Hr7yrg5nQBFWzw7ssH2XGyqDG5OM0bOoHiFLM18DFOsI1K2MOT%2B6L4GOqUBYdubU%2Bg%2Bqs4my%2FB5YE8qvlwgrjPepfhmnnAiRbzivCm8ftE7TbUiW0Fuy6lSyudlU7c3G4eXPcO9E2FvCGwJKPxJ0Ho5ji5OTkXVW699WqNov2Vp3Naik0yHQyO%2B6j02YSLEtsd7cEsZ496tWbAcN%2Flo1Ov50J%2FPAc3iJKeZ3aORCwdXSFh48N%2FrToxXPeiLToHXkijklMv9qlHQseRJm%2BlS%2BtRy&X-Amz-Signature=7911ee66d8fdc6e82d86968830f6a07089d86a75dbb0946c4356bd5d994dc5a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662COGIQSF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDK4KFUz3vCmQUwzMlSqD19He6sLAG2IE68E%2BkhzpEpMgIgZndC9J0Szg4Slu7GttDEr3P2OAHXa40vhbiFOixcO3Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHOYss8IHPFSg2%2FJxyrcA2ge9uYXABt8jjUSh6LJn%2BCOQ6655%2Furz7iYpWVAmOiraNguaK3FGIiwIBrKQuDzZwSdC%2FH1GjWouYln5kFEWKwOwHlP3CDN%2BU4jRYPt43Rdm%2BKI16Rhvw%2FvqP4HZjV8%2BtjjrbdaI6S1RV4a0txRaoAPfp2dqGFkQ3hK9fwyhDLOi%2FStmaVlf3Us3Sda1RSeO2ZGKn4JilHfOHxCUZWKP4ghM6M1UNcRaEk2Yebcs78bDLcX8aLHcedMFI6xhSaxmYChzZLuT11TWGzS73Y2GCx6kshRup6H0vJ1TBrXotQnilZie6G1Kl%2B%2Faku3s3P44%2FQZA10ibVgihnBSHexdIy85QIexLnHSilCXS2%2Fe2H77jKgEib5u4ivqL5VqAn%2B0yUIV55kZH1C%2FhXl1Rrfc54srxiaSAMvL6S2lYrNoBd%2Bpc%2B2c2MMWLinlrE87%2Bt0FuO7lgPGljTTWaZmbXaNrB0%2BWVQijgqxrY9VBVJW8zdAYwmT4jQCWUIlasb8PZ0q%2BNQbPB8k3rOs%2B0QbALKTBPWG4NlgW3K7%2BRuYbBDN4GmOwQbYsDPRgVCRHeEvVOEXbxRkt68d91Elu6Hr7yrg5nQBFWzw7ssH2XGyqDG5OM0bOoHiFLM18DFOsI1K2MOT%2B6L4GOqUBYdubU%2Bg%2Bqs4my%2FB5YE8qvlwgrjPepfhmnnAiRbzivCm8ftE7TbUiW0Fuy6lSyudlU7c3G4eXPcO9E2FvCGwJKPxJ0Ho5ji5OTkXVW699WqNov2Vp3Naik0yHQyO%2B6j02YSLEtsd7cEsZ496tWbAcN%2Flo1Ov50J%2FPAc3iJKeZ3aORCwdXSFh48N%2FrToxXPeiLToHXkijklMv9qlHQseRJm%2BlS%2BtRy&X-Amz-Signature=6d851a3cc6943e8105e7df6d891665f13b5d37017efac2fcb3dd32a1e70198f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662COGIQSF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDK4KFUz3vCmQUwzMlSqD19He6sLAG2IE68E%2BkhzpEpMgIgZndC9J0Szg4Slu7GttDEr3P2OAHXa40vhbiFOixcO3Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHOYss8IHPFSg2%2FJxyrcA2ge9uYXABt8jjUSh6LJn%2BCOQ6655%2Furz7iYpWVAmOiraNguaK3FGIiwIBrKQuDzZwSdC%2FH1GjWouYln5kFEWKwOwHlP3CDN%2BU4jRYPt43Rdm%2BKI16Rhvw%2FvqP4HZjV8%2BtjjrbdaI6S1RV4a0txRaoAPfp2dqGFkQ3hK9fwyhDLOi%2FStmaVlf3Us3Sda1RSeO2ZGKn4JilHfOHxCUZWKP4ghM6M1UNcRaEk2Yebcs78bDLcX8aLHcedMFI6xhSaxmYChzZLuT11TWGzS73Y2GCx6kshRup6H0vJ1TBrXotQnilZie6G1Kl%2B%2Faku3s3P44%2FQZA10ibVgihnBSHexdIy85QIexLnHSilCXS2%2Fe2H77jKgEib5u4ivqL5VqAn%2B0yUIV55kZH1C%2FhXl1Rrfc54srxiaSAMvL6S2lYrNoBd%2Bpc%2B2c2MMWLinlrE87%2Bt0FuO7lgPGljTTWaZmbXaNrB0%2BWVQijgqxrY9VBVJW8zdAYwmT4jQCWUIlasb8PZ0q%2BNQbPB8k3rOs%2B0QbALKTBPWG4NlgW3K7%2BRuYbBDN4GmOwQbYsDPRgVCRHeEvVOEXbxRkt68d91Elu6Hr7yrg5nQBFWzw7ssH2XGyqDG5OM0bOoHiFLM18DFOsI1K2MOT%2B6L4GOqUBYdubU%2Bg%2Bqs4my%2FB5YE8qvlwgrjPepfhmnnAiRbzivCm8ftE7TbUiW0Fuy6lSyudlU7c3G4eXPcO9E2FvCGwJKPxJ0Ho5ji5OTkXVW699WqNov2Vp3Naik0yHQyO%2B6j02YSLEtsd7cEsZ496tWbAcN%2Flo1Ov50J%2FPAc3iJKeZ3aORCwdXSFh48N%2FrToxXPeiLToHXkijklMv9qlHQseRJm%2BlS%2BtRy&X-Amz-Signature=ef7ec6292bd539bbbf6b3538ee5d9cb044981ba91dfec24a3841ce8dd13646f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
