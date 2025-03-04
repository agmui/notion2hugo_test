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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFBWR4V2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk%2Fnzz1lgXy%2BXXpickXRxtcD7DDiSaaVeQHdaV07o3sAiB56h4AErM73P3qyNdO2e0uY9w80AZgBdvypNiCLusYRyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSvrOmDVLSgF37iwJKtwDGCO7ETpvyDX62mXFWxv9D3D9HVvboGQt7Hp2lENh3OK1hGrhrWopWLDMnLC7LMZm4VGbD7EMbxE0fees76VtKEZjHq9Y4HxGvl0WpjMzUJhN0e0XnVIPq9ZQC4INLTPxYWMKEq8dy1%2BXaitNhg%2FFF479k2ey7bMIh4kDK9R71w9N9oOLt%2FfSbpJ4fx5evmBJ9gOtPpQOYOCyz0GWUda2j%2Fa0cmq%2B4mcMcOzR7w%2FT8gC5Jdnyin8b5xvUui8SSXIzoO6Ndxku154EHAULaWVOI74xlC3Ioigd9pnlFghKpZAv0Xstxqr2ySaJhL6%2BV%2FXqlGNE9QIDUcKwpGjk8ekf96cHIOrJ7v0pFuVeem9B%2BSrk0zE1Zc7FekGpXRqlsZVHF%2FDhcJSc0stn5ir3RLJMRvdbzdHkLLN3xCSku157jXTBdkiNQwFBNzoQ%2F%2BGH7iybEnLFyHe13kmiJkoHCDXoWJ9H6J48fvi%2B99c3JJDJtAahQWUaB14BIclA76AHqwUlneXy2szox8GDc711XzUoLCmgsvO6709wKnoP2r1bAwhSCCqEvzt09H0lIQycZzIeUBFJOkdZcAAZBW3JdRzsR2fVj%2F32JMmiv9VrfMw0%2F3ytxmpg49PBSqEM8lowuPiYvgY6pgF%2FKX%2BGJE4efwAvwhjMs%2BeFshFOttIWObVECI4u0G0cl2duuYlq3p11gxCQtuBxtZL1Uan45lDkiX58adMOXxnFWwsplisTv8AtU7WsFLAnP%2FQzDRSBFJ0jlsRbqWpHbSReAPt3%2BREPu4GDmCIAYLZsqv450lK1pXYI6p3O1GSEJ4NnAhCfPxl8%2Bhl%2BFQCdL7gexpUFC3g6Pr09Vu7ge0wJJq4dbAyQ&X-Amz-Signature=227c7e71fa941be2a595f68f67310996c7cdcabeace42a71a25b397e6c4c6c65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFBWR4V2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk%2Fnzz1lgXy%2BXXpickXRxtcD7DDiSaaVeQHdaV07o3sAiB56h4AErM73P3qyNdO2e0uY9w80AZgBdvypNiCLusYRyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSvrOmDVLSgF37iwJKtwDGCO7ETpvyDX62mXFWxv9D3D9HVvboGQt7Hp2lENh3OK1hGrhrWopWLDMnLC7LMZm4VGbD7EMbxE0fees76VtKEZjHq9Y4HxGvl0WpjMzUJhN0e0XnVIPq9ZQC4INLTPxYWMKEq8dy1%2BXaitNhg%2FFF479k2ey7bMIh4kDK9R71w9N9oOLt%2FfSbpJ4fx5evmBJ9gOtPpQOYOCyz0GWUda2j%2Fa0cmq%2B4mcMcOzR7w%2FT8gC5Jdnyin8b5xvUui8SSXIzoO6Ndxku154EHAULaWVOI74xlC3Ioigd9pnlFghKpZAv0Xstxqr2ySaJhL6%2BV%2FXqlGNE9QIDUcKwpGjk8ekf96cHIOrJ7v0pFuVeem9B%2BSrk0zE1Zc7FekGpXRqlsZVHF%2FDhcJSc0stn5ir3RLJMRvdbzdHkLLN3xCSku157jXTBdkiNQwFBNzoQ%2F%2BGH7iybEnLFyHe13kmiJkoHCDXoWJ9H6J48fvi%2B99c3JJDJtAahQWUaB14BIclA76AHqwUlneXy2szox8GDc711XzUoLCmgsvO6709wKnoP2r1bAwhSCCqEvzt09H0lIQycZzIeUBFJOkdZcAAZBW3JdRzsR2fVj%2F32JMmiv9VrfMw0%2F3ytxmpg49PBSqEM8lowuPiYvgY6pgF%2FKX%2BGJE4efwAvwhjMs%2BeFshFOttIWObVECI4u0G0cl2duuYlq3p11gxCQtuBxtZL1Uan45lDkiX58adMOXxnFWwsplisTv8AtU7WsFLAnP%2FQzDRSBFJ0jlsRbqWpHbSReAPt3%2BREPu4GDmCIAYLZsqv450lK1pXYI6p3O1GSEJ4NnAhCfPxl8%2Bhl%2BFQCdL7gexpUFC3g6Pr09Vu7ge0wJJq4dbAyQ&X-Amz-Signature=db13c2f8206f0c75f52577743fce283c939d759c855f8ed7216b8d6da26fa8c0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFBWR4V2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk%2Fnzz1lgXy%2BXXpickXRxtcD7DDiSaaVeQHdaV07o3sAiB56h4AErM73P3qyNdO2e0uY9w80AZgBdvypNiCLusYRyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSvrOmDVLSgF37iwJKtwDGCO7ETpvyDX62mXFWxv9D3D9HVvboGQt7Hp2lENh3OK1hGrhrWopWLDMnLC7LMZm4VGbD7EMbxE0fees76VtKEZjHq9Y4HxGvl0WpjMzUJhN0e0XnVIPq9ZQC4INLTPxYWMKEq8dy1%2BXaitNhg%2FFF479k2ey7bMIh4kDK9R71w9N9oOLt%2FfSbpJ4fx5evmBJ9gOtPpQOYOCyz0GWUda2j%2Fa0cmq%2B4mcMcOzR7w%2FT8gC5Jdnyin8b5xvUui8SSXIzoO6Ndxku154EHAULaWVOI74xlC3Ioigd9pnlFghKpZAv0Xstxqr2ySaJhL6%2BV%2FXqlGNE9QIDUcKwpGjk8ekf96cHIOrJ7v0pFuVeem9B%2BSrk0zE1Zc7FekGpXRqlsZVHF%2FDhcJSc0stn5ir3RLJMRvdbzdHkLLN3xCSku157jXTBdkiNQwFBNzoQ%2F%2BGH7iybEnLFyHe13kmiJkoHCDXoWJ9H6J48fvi%2B99c3JJDJtAahQWUaB14BIclA76AHqwUlneXy2szox8GDc711XzUoLCmgsvO6709wKnoP2r1bAwhSCCqEvzt09H0lIQycZzIeUBFJOkdZcAAZBW3JdRzsR2fVj%2F32JMmiv9VrfMw0%2F3ytxmpg49PBSqEM8lowuPiYvgY6pgF%2FKX%2BGJE4efwAvwhjMs%2BeFshFOttIWObVECI4u0G0cl2duuYlq3p11gxCQtuBxtZL1Uan45lDkiX58adMOXxnFWwsplisTv8AtU7WsFLAnP%2FQzDRSBFJ0jlsRbqWpHbSReAPt3%2BREPu4GDmCIAYLZsqv450lK1pXYI6p3O1GSEJ4NnAhCfPxl8%2Bhl%2BFQCdL7gexpUFC3g6Pr09Vu7ge0wJJq4dbAyQ&X-Amz-Signature=bcced526ce00925037af1a98a166695d5885fcee2055f707bb09c8ad08ef3420&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFBWR4V2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk%2Fnzz1lgXy%2BXXpickXRxtcD7DDiSaaVeQHdaV07o3sAiB56h4AErM73P3qyNdO2e0uY9w80AZgBdvypNiCLusYRyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSvrOmDVLSgF37iwJKtwDGCO7ETpvyDX62mXFWxv9D3D9HVvboGQt7Hp2lENh3OK1hGrhrWopWLDMnLC7LMZm4VGbD7EMbxE0fees76VtKEZjHq9Y4HxGvl0WpjMzUJhN0e0XnVIPq9ZQC4INLTPxYWMKEq8dy1%2BXaitNhg%2FFF479k2ey7bMIh4kDK9R71w9N9oOLt%2FfSbpJ4fx5evmBJ9gOtPpQOYOCyz0GWUda2j%2Fa0cmq%2B4mcMcOzR7w%2FT8gC5Jdnyin8b5xvUui8SSXIzoO6Ndxku154EHAULaWVOI74xlC3Ioigd9pnlFghKpZAv0Xstxqr2ySaJhL6%2BV%2FXqlGNE9QIDUcKwpGjk8ekf96cHIOrJ7v0pFuVeem9B%2BSrk0zE1Zc7FekGpXRqlsZVHF%2FDhcJSc0stn5ir3RLJMRvdbzdHkLLN3xCSku157jXTBdkiNQwFBNzoQ%2F%2BGH7iybEnLFyHe13kmiJkoHCDXoWJ9H6J48fvi%2B99c3JJDJtAahQWUaB14BIclA76AHqwUlneXy2szox8GDc711XzUoLCmgsvO6709wKnoP2r1bAwhSCCqEvzt09H0lIQycZzIeUBFJOkdZcAAZBW3JdRzsR2fVj%2F32JMmiv9VrfMw0%2F3ytxmpg49PBSqEM8lowuPiYvgY6pgF%2FKX%2BGJE4efwAvwhjMs%2BeFshFOttIWObVECI4u0G0cl2duuYlq3p11gxCQtuBxtZL1Uan45lDkiX58adMOXxnFWwsplisTv8AtU7WsFLAnP%2FQzDRSBFJ0jlsRbqWpHbSReAPt3%2BREPu4GDmCIAYLZsqv450lK1pXYI6p3O1GSEJ4NnAhCfPxl8%2Bhl%2BFQCdL7gexpUFC3g6Pr09Vu7ge0wJJq4dbAyQ&X-Amz-Signature=45bfc963aa862ddbab8244d3fee5ad7d0110ae0241e5c428a59d0e71a121b5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFBWR4V2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk%2Fnzz1lgXy%2BXXpickXRxtcD7DDiSaaVeQHdaV07o3sAiB56h4AErM73P3qyNdO2e0uY9w80AZgBdvypNiCLusYRyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSvrOmDVLSgF37iwJKtwDGCO7ETpvyDX62mXFWxv9D3D9HVvboGQt7Hp2lENh3OK1hGrhrWopWLDMnLC7LMZm4VGbD7EMbxE0fees76VtKEZjHq9Y4HxGvl0WpjMzUJhN0e0XnVIPq9ZQC4INLTPxYWMKEq8dy1%2BXaitNhg%2FFF479k2ey7bMIh4kDK9R71w9N9oOLt%2FfSbpJ4fx5evmBJ9gOtPpQOYOCyz0GWUda2j%2Fa0cmq%2B4mcMcOzR7w%2FT8gC5Jdnyin8b5xvUui8SSXIzoO6Ndxku154EHAULaWVOI74xlC3Ioigd9pnlFghKpZAv0Xstxqr2ySaJhL6%2BV%2FXqlGNE9QIDUcKwpGjk8ekf96cHIOrJ7v0pFuVeem9B%2BSrk0zE1Zc7FekGpXRqlsZVHF%2FDhcJSc0stn5ir3RLJMRvdbzdHkLLN3xCSku157jXTBdkiNQwFBNzoQ%2F%2BGH7iybEnLFyHe13kmiJkoHCDXoWJ9H6J48fvi%2B99c3JJDJtAahQWUaB14BIclA76AHqwUlneXy2szox8GDc711XzUoLCmgsvO6709wKnoP2r1bAwhSCCqEvzt09H0lIQycZzIeUBFJOkdZcAAZBW3JdRzsR2fVj%2F32JMmiv9VrfMw0%2F3ytxmpg49PBSqEM8lowuPiYvgY6pgF%2FKX%2BGJE4efwAvwhjMs%2BeFshFOttIWObVECI4u0G0cl2duuYlq3p11gxCQtuBxtZL1Uan45lDkiX58adMOXxnFWwsplisTv8AtU7WsFLAnP%2FQzDRSBFJ0jlsRbqWpHbSReAPt3%2BREPu4GDmCIAYLZsqv450lK1pXYI6p3O1GSEJ4NnAhCfPxl8%2Bhl%2BFQCdL7gexpUFC3g6Pr09Vu7ge0wJJq4dbAyQ&X-Amz-Signature=8122d21626a4b45de92959e6b667826f56b37d85da3113b766483144934374a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
