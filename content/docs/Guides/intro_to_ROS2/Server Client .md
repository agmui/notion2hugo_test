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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5PRCAMU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIB10s1CCjD0mmLizg04G6GeImFN03QuxETlKvgFyWFAbAiEAtdUUEzxuYtabdHbkR5fSdamuSIuKLNu4ILn5rPSqeXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmzxuODwFBr%2FzZdgircA3rR%2B1KgEIeDVX1mr9EVMC%2F%2BEgSCrpD4bv1pfLFnZbmT9OfZDWZBKqM%2Fk6LVggcipR4ODET7G%2FDBtwjdwQM8GeL3WLwcCJIDkwV7%2FCWlJw4YcHqKCAZ%2FtBC56FDRCHErgqRJYC0kzxKciZrQS0B68RxLMZlq0w%2F2F%2BGLGYd4XQ9RU3pd%2Fu5nQvTe1nNKlOxjhfcTMnYFLJEZC3WyHOubkTH72%2FxVmmYvRR8l9cFdJtrkznMS4O1GWE68G8zlqFbjCsFAYLJgSPh%2BC0amxLnOz3wb8CxDcFwUuEAhH6qQcJdyCnjNOvpSbDyyqUWqHDinbbl0Pvx8qW5Xik%2FOYXV4Q7EfAwe6DMJxhsK9xHjdJQHSuPQkii1DG3jFiVjgt5dx39CutcpqN%2F4MrlTszBRiWSaIn8lV4qJdf%2FGriX2sJ%2B38Z7vMj5TWEtBrFlV3njFTU2Ax0uu4lSnZ170l57ACQmvusFdw8cZfzMrGMHocI%2BqURS2P0sxRLKequ7Izb3em4ASCwsw4J2mzuxBnIOvukFPazSiXQE22j2e04Wdlbtu27huDcDGKc%2FGifYr34zVFE6XYOJ4CB73JErBgNpNBP6QDQIBpX0omB9EqFf9pIM5QijSC3D6hnhqIIbpJMJL43L8GOqUBgO0x%2BbB1JOdc03bOOUcfPJ28bUgoqjG%2FiUcZMcM6fFzvELze%2BI7UnSazQjoOXfDlCWPqhKMDsOpXWTJK8jojrlvQg3M7LJcFGFO4DGppC0FxEQ9cczvK%2BYwFcvhcIlfAyuXlqw%2BrDTXUOsNFIoA6V0%2BvSr%2F0ri0ogXtFFWv3Hhyj77kp1iUTxi%2FzKrhDCj2BjKU0SddXfEurrnTAZjm38BkfP2EB&X-Amz-Signature=d053ae7e6b849a0259aaeb411a39c948754f0073af4d9920ade47d15d62287d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5PRCAMU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIB10s1CCjD0mmLizg04G6GeImFN03QuxETlKvgFyWFAbAiEAtdUUEzxuYtabdHbkR5fSdamuSIuKLNu4ILn5rPSqeXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmzxuODwFBr%2FzZdgircA3rR%2B1KgEIeDVX1mr9EVMC%2F%2BEgSCrpD4bv1pfLFnZbmT9OfZDWZBKqM%2Fk6LVggcipR4ODET7G%2FDBtwjdwQM8GeL3WLwcCJIDkwV7%2FCWlJw4YcHqKCAZ%2FtBC56FDRCHErgqRJYC0kzxKciZrQS0B68RxLMZlq0w%2F2F%2BGLGYd4XQ9RU3pd%2Fu5nQvTe1nNKlOxjhfcTMnYFLJEZC3WyHOubkTH72%2FxVmmYvRR8l9cFdJtrkznMS4O1GWE68G8zlqFbjCsFAYLJgSPh%2BC0amxLnOz3wb8CxDcFwUuEAhH6qQcJdyCnjNOvpSbDyyqUWqHDinbbl0Pvx8qW5Xik%2FOYXV4Q7EfAwe6DMJxhsK9xHjdJQHSuPQkii1DG3jFiVjgt5dx39CutcpqN%2F4MrlTszBRiWSaIn8lV4qJdf%2FGriX2sJ%2B38Z7vMj5TWEtBrFlV3njFTU2Ax0uu4lSnZ170l57ACQmvusFdw8cZfzMrGMHocI%2BqURS2P0sxRLKequ7Izb3em4ASCwsw4J2mzuxBnIOvukFPazSiXQE22j2e04Wdlbtu27huDcDGKc%2FGifYr34zVFE6XYOJ4CB73JErBgNpNBP6QDQIBpX0omB9EqFf9pIM5QijSC3D6hnhqIIbpJMJL43L8GOqUBgO0x%2BbB1JOdc03bOOUcfPJ28bUgoqjG%2FiUcZMcM6fFzvELze%2BI7UnSazQjoOXfDlCWPqhKMDsOpXWTJK8jojrlvQg3M7LJcFGFO4DGppC0FxEQ9cczvK%2BYwFcvhcIlfAyuXlqw%2BrDTXUOsNFIoA6V0%2BvSr%2F0ri0ogXtFFWv3Hhyj77kp1iUTxi%2FzKrhDCj2BjKU0SddXfEurrnTAZjm38BkfP2EB&X-Amz-Signature=291da77844b9ac2dd9bba8feeb62951d4b1aa2c5b8451fae6807c1be823e245d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5PRCAMU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIB10s1CCjD0mmLizg04G6GeImFN03QuxETlKvgFyWFAbAiEAtdUUEzxuYtabdHbkR5fSdamuSIuKLNu4ILn5rPSqeXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmzxuODwFBr%2FzZdgircA3rR%2B1KgEIeDVX1mr9EVMC%2F%2BEgSCrpD4bv1pfLFnZbmT9OfZDWZBKqM%2Fk6LVggcipR4ODET7G%2FDBtwjdwQM8GeL3WLwcCJIDkwV7%2FCWlJw4YcHqKCAZ%2FtBC56FDRCHErgqRJYC0kzxKciZrQS0B68RxLMZlq0w%2F2F%2BGLGYd4XQ9RU3pd%2Fu5nQvTe1nNKlOxjhfcTMnYFLJEZC3WyHOubkTH72%2FxVmmYvRR8l9cFdJtrkznMS4O1GWE68G8zlqFbjCsFAYLJgSPh%2BC0amxLnOz3wb8CxDcFwUuEAhH6qQcJdyCnjNOvpSbDyyqUWqHDinbbl0Pvx8qW5Xik%2FOYXV4Q7EfAwe6DMJxhsK9xHjdJQHSuPQkii1DG3jFiVjgt5dx39CutcpqN%2F4MrlTszBRiWSaIn8lV4qJdf%2FGriX2sJ%2B38Z7vMj5TWEtBrFlV3njFTU2Ax0uu4lSnZ170l57ACQmvusFdw8cZfzMrGMHocI%2BqURS2P0sxRLKequ7Izb3em4ASCwsw4J2mzuxBnIOvukFPazSiXQE22j2e04Wdlbtu27huDcDGKc%2FGifYr34zVFE6XYOJ4CB73JErBgNpNBP6QDQIBpX0omB9EqFf9pIM5QijSC3D6hnhqIIbpJMJL43L8GOqUBgO0x%2BbB1JOdc03bOOUcfPJ28bUgoqjG%2FiUcZMcM6fFzvELze%2BI7UnSazQjoOXfDlCWPqhKMDsOpXWTJK8jojrlvQg3M7LJcFGFO4DGppC0FxEQ9cczvK%2BYwFcvhcIlfAyuXlqw%2BrDTXUOsNFIoA6V0%2BvSr%2F0ri0ogXtFFWv3Hhyj77kp1iUTxi%2FzKrhDCj2BjKU0SddXfEurrnTAZjm38BkfP2EB&X-Amz-Signature=eefdc7a68f3759ed3f4e8a11deaec3b22ef529ff5813f4dce608f385b50d33ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5PRCAMU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIB10s1CCjD0mmLizg04G6GeImFN03QuxETlKvgFyWFAbAiEAtdUUEzxuYtabdHbkR5fSdamuSIuKLNu4ILn5rPSqeXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmzxuODwFBr%2FzZdgircA3rR%2B1KgEIeDVX1mr9EVMC%2F%2BEgSCrpD4bv1pfLFnZbmT9OfZDWZBKqM%2Fk6LVggcipR4ODET7G%2FDBtwjdwQM8GeL3WLwcCJIDkwV7%2FCWlJw4YcHqKCAZ%2FtBC56FDRCHErgqRJYC0kzxKciZrQS0B68RxLMZlq0w%2F2F%2BGLGYd4XQ9RU3pd%2Fu5nQvTe1nNKlOxjhfcTMnYFLJEZC3WyHOubkTH72%2FxVmmYvRR8l9cFdJtrkznMS4O1GWE68G8zlqFbjCsFAYLJgSPh%2BC0amxLnOz3wb8CxDcFwUuEAhH6qQcJdyCnjNOvpSbDyyqUWqHDinbbl0Pvx8qW5Xik%2FOYXV4Q7EfAwe6DMJxhsK9xHjdJQHSuPQkii1DG3jFiVjgt5dx39CutcpqN%2F4MrlTszBRiWSaIn8lV4qJdf%2FGriX2sJ%2B38Z7vMj5TWEtBrFlV3njFTU2Ax0uu4lSnZ170l57ACQmvusFdw8cZfzMrGMHocI%2BqURS2P0sxRLKequ7Izb3em4ASCwsw4J2mzuxBnIOvukFPazSiXQE22j2e04Wdlbtu27huDcDGKc%2FGifYr34zVFE6XYOJ4CB73JErBgNpNBP6QDQIBpX0omB9EqFf9pIM5QijSC3D6hnhqIIbpJMJL43L8GOqUBgO0x%2BbB1JOdc03bOOUcfPJ28bUgoqjG%2FiUcZMcM6fFzvELze%2BI7UnSazQjoOXfDlCWPqhKMDsOpXWTJK8jojrlvQg3M7LJcFGFO4DGppC0FxEQ9cczvK%2BYwFcvhcIlfAyuXlqw%2BrDTXUOsNFIoA6V0%2BvSr%2F0ri0ogXtFFWv3Hhyj77kp1iUTxi%2FzKrhDCj2BjKU0SddXfEurrnTAZjm38BkfP2EB&X-Amz-Signature=66cf03f26e8830700f8b0f8fcc1f0d7dc4a5fb16cd21b545bdde181136f2f4ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5PRCAMU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIB10s1CCjD0mmLizg04G6GeImFN03QuxETlKvgFyWFAbAiEAtdUUEzxuYtabdHbkR5fSdamuSIuKLNu4ILn5rPSqeXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmzxuODwFBr%2FzZdgircA3rR%2B1KgEIeDVX1mr9EVMC%2F%2BEgSCrpD4bv1pfLFnZbmT9OfZDWZBKqM%2Fk6LVggcipR4ODET7G%2FDBtwjdwQM8GeL3WLwcCJIDkwV7%2FCWlJw4YcHqKCAZ%2FtBC56FDRCHErgqRJYC0kzxKciZrQS0B68RxLMZlq0w%2F2F%2BGLGYd4XQ9RU3pd%2Fu5nQvTe1nNKlOxjhfcTMnYFLJEZC3WyHOubkTH72%2FxVmmYvRR8l9cFdJtrkznMS4O1GWE68G8zlqFbjCsFAYLJgSPh%2BC0amxLnOz3wb8CxDcFwUuEAhH6qQcJdyCnjNOvpSbDyyqUWqHDinbbl0Pvx8qW5Xik%2FOYXV4Q7EfAwe6DMJxhsK9xHjdJQHSuPQkii1DG3jFiVjgt5dx39CutcpqN%2F4MrlTszBRiWSaIn8lV4qJdf%2FGriX2sJ%2B38Z7vMj5TWEtBrFlV3njFTU2Ax0uu4lSnZ170l57ACQmvusFdw8cZfzMrGMHocI%2BqURS2P0sxRLKequ7Izb3em4ASCwsw4J2mzuxBnIOvukFPazSiXQE22j2e04Wdlbtu27huDcDGKc%2FGifYr34zVFE6XYOJ4CB73JErBgNpNBP6QDQIBpX0omB9EqFf9pIM5QijSC3D6hnhqIIbpJMJL43L8GOqUBgO0x%2BbB1JOdc03bOOUcfPJ28bUgoqjG%2FiUcZMcM6fFzvELze%2BI7UnSazQjoOXfDlCWPqhKMDsOpXWTJK8jojrlvQg3M7LJcFGFO4DGppC0FxEQ9cczvK%2BYwFcvhcIlfAyuXlqw%2BrDTXUOsNFIoA6V0%2BvSr%2F0ri0ogXtFFWv3Hhyj77kp1iUTxi%2FzKrhDCj2BjKU0SddXfEurrnTAZjm38BkfP2EB&X-Amz-Signature=5a92055bd58f50e0d28f41c56a81424dc1e78ee506b544cc8e5566e4aee2845f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
