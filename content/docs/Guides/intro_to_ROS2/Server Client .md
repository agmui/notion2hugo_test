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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQ5AK4X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRa%2BpyNXFKt6B4nI8skA0frdYsHHQyuLp%2BNiPId7T1gIgBA58Q7qVSbMKUWtg0vgkAJRzvOumBEgeGaZD0gtnMCIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDOHZKWmUqlaauPH9HSrcAzn6vilPBQJTtkh608Oh50vfrWQ7PUT15oqaIgzzV8rJctjbbj7mqssmE4OCbJ9GuOrw66UOtg5Q%2FTKNBsCxEVrkMs6KLNbJmsDTo94WY8fvzl7zVDrzrcRC1MvPrA4sPV3vgfARhlk%2F5If1JliF2gSxbPpSJIsjWmMbFejOhGjrY85NXZZ04zVxzdFOS2mVmqFxqZHLqITo0ZRdgfT%2Fp9nS5C4Sv5Six%2BugKAv%2BMM8aWR3tly6AfrY6UEL5kspUmVdygLULm2XzOBHSCmLmdEUFArHsjFYDdP1gXIGdOXAZKDAs0Rlv1Jx6%2FuZmGLoq3af8gdMGl70DrdhNKxoT%2BgKvl%2BKOIbqsJKE9jIn0gPDyXwTqXj0Ax%2Bb1k02MmKc2ZYZAeTaGmxtvup5091yUADkp%2ByyV%2FHh9ANin1sLNgP4zuGTym1xuPjw2TKzFNRmyWCso9htIYXWFR5%2BV24Eq2VV65jiBPVac6hjq5Ag0NKBSUFlzoi5zO4m6GS316wXIUEXiyLIdKIuHeAwQILOs7Kk1HQaGDKrN7I43XV%2Bt8y55EthwyE4b68ZoQfZY90Gg37yznlmjOhhoN2gD2DQnrqLZ%2FFaLf496eIaja5c3q092ANpRSgVyxjUt5OjvMOKb7sAGOqUBcuPsHTTIJo0HCwZ3JzQhLt9uRRnRdSF4yRrR%2FapZ51pXEr22Gn6m5BoolqldQ4LyCfpLpIsvXC7CBAdJQ7gmAkkwAWcJlQsh3N3SKvm2QYxh1%2FFx7UPhZ%2Bo7YsY3ZdaB9urpVfOFWVbH3%2BsR7TTv%2BMQ%2BBNil%2BaoVq7%2BchphFAF8da5Z1SHrSrz%2FjApGcMnkgKNu5MFOpcZs8D6yh2dUt%2BsSedanh&X-Amz-Signature=6ff3ac1437206f4e6ecdaf51798de6c555f436296818116e6b6bfab8899c3821&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQ5AK4X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRa%2BpyNXFKt6B4nI8skA0frdYsHHQyuLp%2BNiPId7T1gIgBA58Q7qVSbMKUWtg0vgkAJRzvOumBEgeGaZD0gtnMCIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDOHZKWmUqlaauPH9HSrcAzn6vilPBQJTtkh608Oh50vfrWQ7PUT15oqaIgzzV8rJctjbbj7mqssmE4OCbJ9GuOrw66UOtg5Q%2FTKNBsCxEVrkMs6KLNbJmsDTo94WY8fvzl7zVDrzrcRC1MvPrA4sPV3vgfARhlk%2F5If1JliF2gSxbPpSJIsjWmMbFejOhGjrY85NXZZ04zVxzdFOS2mVmqFxqZHLqITo0ZRdgfT%2Fp9nS5C4Sv5Six%2BugKAv%2BMM8aWR3tly6AfrY6UEL5kspUmVdygLULm2XzOBHSCmLmdEUFArHsjFYDdP1gXIGdOXAZKDAs0Rlv1Jx6%2FuZmGLoq3af8gdMGl70DrdhNKxoT%2BgKvl%2BKOIbqsJKE9jIn0gPDyXwTqXj0Ax%2Bb1k02MmKc2ZYZAeTaGmxtvup5091yUADkp%2ByyV%2FHh9ANin1sLNgP4zuGTym1xuPjw2TKzFNRmyWCso9htIYXWFR5%2BV24Eq2VV65jiBPVac6hjq5Ag0NKBSUFlzoi5zO4m6GS316wXIUEXiyLIdKIuHeAwQILOs7Kk1HQaGDKrN7I43XV%2Bt8y55EthwyE4b68ZoQfZY90Gg37yznlmjOhhoN2gD2DQnrqLZ%2FFaLf496eIaja5c3q092ANpRSgVyxjUt5OjvMOKb7sAGOqUBcuPsHTTIJo0HCwZ3JzQhLt9uRRnRdSF4yRrR%2FapZ51pXEr22Gn6m5BoolqldQ4LyCfpLpIsvXC7CBAdJQ7gmAkkwAWcJlQsh3N3SKvm2QYxh1%2FFx7UPhZ%2Bo7YsY3ZdaB9urpVfOFWVbH3%2BsR7TTv%2BMQ%2BBNil%2BaoVq7%2BchphFAF8da5Z1SHrSrz%2FjApGcMnkgKNu5MFOpcZs8D6yh2dUt%2BsSedanh&X-Amz-Signature=48def77cc14eedc16750815ab7bfc0eae22148b1778ba2f6eb7858132c955ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQ5AK4X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRa%2BpyNXFKt6B4nI8skA0frdYsHHQyuLp%2BNiPId7T1gIgBA58Q7qVSbMKUWtg0vgkAJRzvOumBEgeGaZD0gtnMCIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDOHZKWmUqlaauPH9HSrcAzn6vilPBQJTtkh608Oh50vfrWQ7PUT15oqaIgzzV8rJctjbbj7mqssmE4OCbJ9GuOrw66UOtg5Q%2FTKNBsCxEVrkMs6KLNbJmsDTo94WY8fvzl7zVDrzrcRC1MvPrA4sPV3vgfARhlk%2F5If1JliF2gSxbPpSJIsjWmMbFejOhGjrY85NXZZ04zVxzdFOS2mVmqFxqZHLqITo0ZRdgfT%2Fp9nS5C4Sv5Six%2BugKAv%2BMM8aWR3tly6AfrY6UEL5kspUmVdygLULm2XzOBHSCmLmdEUFArHsjFYDdP1gXIGdOXAZKDAs0Rlv1Jx6%2FuZmGLoq3af8gdMGl70DrdhNKxoT%2BgKvl%2BKOIbqsJKE9jIn0gPDyXwTqXj0Ax%2Bb1k02MmKc2ZYZAeTaGmxtvup5091yUADkp%2ByyV%2FHh9ANin1sLNgP4zuGTym1xuPjw2TKzFNRmyWCso9htIYXWFR5%2BV24Eq2VV65jiBPVac6hjq5Ag0NKBSUFlzoi5zO4m6GS316wXIUEXiyLIdKIuHeAwQILOs7Kk1HQaGDKrN7I43XV%2Bt8y55EthwyE4b68ZoQfZY90Gg37yznlmjOhhoN2gD2DQnrqLZ%2FFaLf496eIaja5c3q092ANpRSgVyxjUt5OjvMOKb7sAGOqUBcuPsHTTIJo0HCwZ3JzQhLt9uRRnRdSF4yRrR%2FapZ51pXEr22Gn6m5BoolqldQ4LyCfpLpIsvXC7CBAdJQ7gmAkkwAWcJlQsh3N3SKvm2QYxh1%2FFx7UPhZ%2Bo7YsY3ZdaB9urpVfOFWVbH3%2BsR7TTv%2BMQ%2BBNil%2BaoVq7%2BchphFAF8da5Z1SHrSrz%2FjApGcMnkgKNu5MFOpcZs8D6yh2dUt%2BsSedanh&X-Amz-Signature=4959d6a7a6c3fceef3529038923e969a0ec6319a550d29f5e9d7b33faa56c5d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQ5AK4X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRa%2BpyNXFKt6B4nI8skA0frdYsHHQyuLp%2BNiPId7T1gIgBA58Q7qVSbMKUWtg0vgkAJRzvOumBEgeGaZD0gtnMCIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDOHZKWmUqlaauPH9HSrcAzn6vilPBQJTtkh608Oh50vfrWQ7PUT15oqaIgzzV8rJctjbbj7mqssmE4OCbJ9GuOrw66UOtg5Q%2FTKNBsCxEVrkMs6KLNbJmsDTo94WY8fvzl7zVDrzrcRC1MvPrA4sPV3vgfARhlk%2F5If1JliF2gSxbPpSJIsjWmMbFejOhGjrY85NXZZ04zVxzdFOS2mVmqFxqZHLqITo0ZRdgfT%2Fp9nS5C4Sv5Six%2BugKAv%2BMM8aWR3tly6AfrY6UEL5kspUmVdygLULm2XzOBHSCmLmdEUFArHsjFYDdP1gXIGdOXAZKDAs0Rlv1Jx6%2FuZmGLoq3af8gdMGl70DrdhNKxoT%2BgKvl%2BKOIbqsJKE9jIn0gPDyXwTqXj0Ax%2Bb1k02MmKc2ZYZAeTaGmxtvup5091yUADkp%2ByyV%2FHh9ANin1sLNgP4zuGTym1xuPjw2TKzFNRmyWCso9htIYXWFR5%2BV24Eq2VV65jiBPVac6hjq5Ag0NKBSUFlzoi5zO4m6GS316wXIUEXiyLIdKIuHeAwQILOs7Kk1HQaGDKrN7I43XV%2Bt8y55EthwyE4b68ZoQfZY90Gg37yznlmjOhhoN2gD2DQnrqLZ%2FFaLf496eIaja5c3q092ANpRSgVyxjUt5OjvMOKb7sAGOqUBcuPsHTTIJo0HCwZ3JzQhLt9uRRnRdSF4yRrR%2FapZ51pXEr22Gn6m5BoolqldQ4LyCfpLpIsvXC7CBAdJQ7gmAkkwAWcJlQsh3N3SKvm2QYxh1%2FFx7UPhZ%2Bo7YsY3ZdaB9urpVfOFWVbH3%2BsR7TTv%2BMQ%2BBNil%2BaoVq7%2BchphFAF8da5Z1SHrSrz%2FjApGcMnkgKNu5MFOpcZs8D6yh2dUt%2BsSedanh&X-Amz-Signature=a308a8b7882f5fb6c9601b3bb52c953904be49e387b0908e6e5855fd2ebc2d38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQ5AK4X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRa%2BpyNXFKt6B4nI8skA0frdYsHHQyuLp%2BNiPId7T1gIgBA58Q7qVSbMKUWtg0vgkAJRzvOumBEgeGaZD0gtnMCIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDOHZKWmUqlaauPH9HSrcAzn6vilPBQJTtkh608Oh50vfrWQ7PUT15oqaIgzzV8rJctjbbj7mqssmE4OCbJ9GuOrw66UOtg5Q%2FTKNBsCxEVrkMs6KLNbJmsDTo94WY8fvzl7zVDrzrcRC1MvPrA4sPV3vgfARhlk%2F5If1JliF2gSxbPpSJIsjWmMbFejOhGjrY85NXZZ04zVxzdFOS2mVmqFxqZHLqITo0ZRdgfT%2Fp9nS5C4Sv5Six%2BugKAv%2BMM8aWR3tly6AfrY6UEL5kspUmVdygLULm2XzOBHSCmLmdEUFArHsjFYDdP1gXIGdOXAZKDAs0Rlv1Jx6%2FuZmGLoq3af8gdMGl70DrdhNKxoT%2BgKvl%2BKOIbqsJKE9jIn0gPDyXwTqXj0Ax%2Bb1k02MmKc2ZYZAeTaGmxtvup5091yUADkp%2ByyV%2FHh9ANin1sLNgP4zuGTym1xuPjw2TKzFNRmyWCso9htIYXWFR5%2BV24Eq2VV65jiBPVac6hjq5Ag0NKBSUFlzoi5zO4m6GS316wXIUEXiyLIdKIuHeAwQILOs7Kk1HQaGDKrN7I43XV%2Bt8y55EthwyE4b68ZoQfZY90Gg37yznlmjOhhoN2gD2DQnrqLZ%2FFaLf496eIaja5c3q092ANpRSgVyxjUt5OjvMOKb7sAGOqUBcuPsHTTIJo0HCwZ3JzQhLt9uRRnRdSF4yRrR%2FapZ51pXEr22Gn6m5BoolqldQ4LyCfpLpIsvXC7CBAdJQ7gmAkkwAWcJlQsh3N3SKvm2QYxh1%2FFx7UPhZ%2Bo7YsY3ZdaB9urpVfOFWVbH3%2BsR7TTv%2BMQ%2BBNil%2BaoVq7%2BchphFAF8da5Z1SHrSrz%2FjApGcMnkgKNu5MFOpcZs8D6yh2dUt%2BsSedanh&X-Amz-Signature=d36f92f86182a216b845eaaa6797e37aec2a18f11c7329d039e63ab664196739&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
