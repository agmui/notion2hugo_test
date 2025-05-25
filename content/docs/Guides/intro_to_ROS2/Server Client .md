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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSF2AHQJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBmn8P2A3m6i3oP8HdeBikBW9gqUwPCIpib4sCpKos9WAiBmbgldi2aHlNlH%2FM85SWaDd9z22zoy7waJP%2F6LAzDbwir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWz%2BExx9Ari6Glex2KtwD7pLp9D%2FJCiKr3bUG2ChgHNsxpYj6umsW5B22R77VoFszDufq5gRrvd0%2B3b0Z5AwbjEFflwKiSiJg5K8U6Ib%2FkmCJxG4JBzOEPRCWfXAOjKea%2B59pmdql3cwhgabzQ%2BRz3sI4F%2Flbk5UApVLJ3Jh6MY1p%2B%2B1Cmjj5Onwo4T2MNHW9dxx8U5zhbO%2F4CtLgLDTq63dVdA97Hs6OsGVhuuJZgrwM4bon39q6ZCMr%2F3V2hVWAs6q%2FnWPfV0FsxyfaC9gCH01VPiCJ0Few7gYySkE%2BSpunIVGVYZSdYGXBNaa1vXu%2BzS1CFq6PufCyXKASVWOv86mkrmijZkGGse2K1iJcMIZ6kyrAYg%2B96kGfsiJ%2BqBt6pjNc%2FlacqUMdUn4YGSxZIIyFXkk8HDwD3s1zy0Mp0yDt5hO7lCFS20Dt1L3uZdk%2FXY0KXCfPL%2F7bxbscQHZ%2BrQFwIri0QkZwatjqobSvShbsuEN82pW9LMP8XrYZZ9KzsiTrAHgzwga1yupUXu%2FradaCEPbH6RL9eQHq%2BLsFQnbTBlkEOcl9HYpwqgoNkCAveW5wZm1H23N%2FuZRBDvo6fPcKnKvyXDCtvGhBXKObsGfsfSUqAzpQ95%2FDVt%2FXxC2KaczTZM40fDViXUMwnJjKwQY6pgGBQmVnVC3WnQ3X39BXku0o6p1XixqTJ5OYnnRt7%2FBDEzfIpSuZANGQkuGreyz%2F%2FqJDiranwcqU1rGTmfJQm1%2FCxEVBXacl%2FZBVNsbgfG1DrJmCsjm0YQmH95%2F2oyrnNYmFYS8JsgXpZmo463L%2BSoWhZbFpmDBs3B%2FA5BoUDfN0TPpiqocWQlCbPeBO571LdTntrYkNzRIbh0QHUNmn2KsSgHtGG3N1&X-Amz-Signature=c28b15d905e604d3bf54f8567a6a23e50ec4cb52f8e19e80cd6ab35ba23ceafa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSF2AHQJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBmn8P2A3m6i3oP8HdeBikBW9gqUwPCIpib4sCpKos9WAiBmbgldi2aHlNlH%2FM85SWaDd9z22zoy7waJP%2F6LAzDbwir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWz%2BExx9Ari6Glex2KtwD7pLp9D%2FJCiKr3bUG2ChgHNsxpYj6umsW5B22R77VoFszDufq5gRrvd0%2B3b0Z5AwbjEFflwKiSiJg5K8U6Ib%2FkmCJxG4JBzOEPRCWfXAOjKea%2B59pmdql3cwhgabzQ%2BRz3sI4F%2Flbk5UApVLJ3Jh6MY1p%2B%2B1Cmjj5Onwo4T2MNHW9dxx8U5zhbO%2F4CtLgLDTq63dVdA97Hs6OsGVhuuJZgrwM4bon39q6ZCMr%2F3V2hVWAs6q%2FnWPfV0FsxyfaC9gCH01VPiCJ0Few7gYySkE%2BSpunIVGVYZSdYGXBNaa1vXu%2BzS1CFq6PufCyXKASVWOv86mkrmijZkGGse2K1iJcMIZ6kyrAYg%2B96kGfsiJ%2BqBt6pjNc%2FlacqUMdUn4YGSxZIIyFXkk8HDwD3s1zy0Mp0yDt5hO7lCFS20Dt1L3uZdk%2FXY0KXCfPL%2F7bxbscQHZ%2BrQFwIri0QkZwatjqobSvShbsuEN82pW9LMP8XrYZZ9KzsiTrAHgzwga1yupUXu%2FradaCEPbH6RL9eQHq%2BLsFQnbTBlkEOcl9HYpwqgoNkCAveW5wZm1H23N%2FuZRBDvo6fPcKnKvyXDCtvGhBXKObsGfsfSUqAzpQ95%2FDVt%2FXxC2KaczTZM40fDViXUMwnJjKwQY6pgGBQmVnVC3WnQ3X39BXku0o6p1XixqTJ5OYnnRt7%2FBDEzfIpSuZANGQkuGreyz%2F%2FqJDiranwcqU1rGTmfJQm1%2FCxEVBXacl%2FZBVNsbgfG1DrJmCsjm0YQmH95%2F2oyrnNYmFYS8JsgXpZmo463L%2BSoWhZbFpmDBs3B%2FA5BoUDfN0TPpiqocWQlCbPeBO571LdTntrYkNzRIbh0QHUNmn2KsSgHtGG3N1&X-Amz-Signature=95176f7639428187966adc05a6c83b75ca57fa3aa022cb0e090139acba845ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSF2AHQJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBmn8P2A3m6i3oP8HdeBikBW9gqUwPCIpib4sCpKos9WAiBmbgldi2aHlNlH%2FM85SWaDd9z22zoy7waJP%2F6LAzDbwir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWz%2BExx9Ari6Glex2KtwD7pLp9D%2FJCiKr3bUG2ChgHNsxpYj6umsW5B22R77VoFszDufq5gRrvd0%2B3b0Z5AwbjEFflwKiSiJg5K8U6Ib%2FkmCJxG4JBzOEPRCWfXAOjKea%2B59pmdql3cwhgabzQ%2BRz3sI4F%2Flbk5UApVLJ3Jh6MY1p%2B%2B1Cmjj5Onwo4T2MNHW9dxx8U5zhbO%2F4CtLgLDTq63dVdA97Hs6OsGVhuuJZgrwM4bon39q6ZCMr%2F3V2hVWAs6q%2FnWPfV0FsxyfaC9gCH01VPiCJ0Few7gYySkE%2BSpunIVGVYZSdYGXBNaa1vXu%2BzS1CFq6PufCyXKASVWOv86mkrmijZkGGse2K1iJcMIZ6kyrAYg%2B96kGfsiJ%2BqBt6pjNc%2FlacqUMdUn4YGSxZIIyFXkk8HDwD3s1zy0Mp0yDt5hO7lCFS20Dt1L3uZdk%2FXY0KXCfPL%2F7bxbscQHZ%2BrQFwIri0QkZwatjqobSvShbsuEN82pW9LMP8XrYZZ9KzsiTrAHgzwga1yupUXu%2FradaCEPbH6RL9eQHq%2BLsFQnbTBlkEOcl9HYpwqgoNkCAveW5wZm1H23N%2FuZRBDvo6fPcKnKvyXDCtvGhBXKObsGfsfSUqAzpQ95%2FDVt%2FXxC2KaczTZM40fDViXUMwnJjKwQY6pgGBQmVnVC3WnQ3X39BXku0o6p1XixqTJ5OYnnRt7%2FBDEzfIpSuZANGQkuGreyz%2F%2FqJDiranwcqU1rGTmfJQm1%2FCxEVBXacl%2FZBVNsbgfG1DrJmCsjm0YQmH95%2F2oyrnNYmFYS8JsgXpZmo463L%2BSoWhZbFpmDBs3B%2FA5BoUDfN0TPpiqocWQlCbPeBO571LdTntrYkNzRIbh0QHUNmn2KsSgHtGG3N1&X-Amz-Signature=1eef4af5595fbfd765d7511502a63480371e78c9c1892174a51dc561643e076a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSF2AHQJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBmn8P2A3m6i3oP8HdeBikBW9gqUwPCIpib4sCpKos9WAiBmbgldi2aHlNlH%2FM85SWaDd9z22zoy7waJP%2F6LAzDbwir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWz%2BExx9Ari6Glex2KtwD7pLp9D%2FJCiKr3bUG2ChgHNsxpYj6umsW5B22R77VoFszDufq5gRrvd0%2B3b0Z5AwbjEFflwKiSiJg5K8U6Ib%2FkmCJxG4JBzOEPRCWfXAOjKea%2B59pmdql3cwhgabzQ%2BRz3sI4F%2Flbk5UApVLJ3Jh6MY1p%2B%2B1Cmjj5Onwo4T2MNHW9dxx8U5zhbO%2F4CtLgLDTq63dVdA97Hs6OsGVhuuJZgrwM4bon39q6ZCMr%2F3V2hVWAs6q%2FnWPfV0FsxyfaC9gCH01VPiCJ0Few7gYySkE%2BSpunIVGVYZSdYGXBNaa1vXu%2BzS1CFq6PufCyXKASVWOv86mkrmijZkGGse2K1iJcMIZ6kyrAYg%2B96kGfsiJ%2BqBt6pjNc%2FlacqUMdUn4YGSxZIIyFXkk8HDwD3s1zy0Mp0yDt5hO7lCFS20Dt1L3uZdk%2FXY0KXCfPL%2F7bxbscQHZ%2BrQFwIri0QkZwatjqobSvShbsuEN82pW9LMP8XrYZZ9KzsiTrAHgzwga1yupUXu%2FradaCEPbH6RL9eQHq%2BLsFQnbTBlkEOcl9HYpwqgoNkCAveW5wZm1H23N%2FuZRBDvo6fPcKnKvyXDCtvGhBXKObsGfsfSUqAzpQ95%2FDVt%2FXxC2KaczTZM40fDViXUMwnJjKwQY6pgGBQmVnVC3WnQ3X39BXku0o6p1XixqTJ5OYnnRt7%2FBDEzfIpSuZANGQkuGreyz%2F%2FqJDiranwcqU1rGTmfJQm1%2FCxEVBXacl%2FZBVNsbgfG1DrJmCsjm0YQmH95%2F2oyrnNYmFYS8JsgXpZmo463L%2BSoWhZbFpmDBs3B%2FA5BoUDfN0TPpiqocWQlCbPeBO571LdTntrYkNzRIbh0QHUNmn2KsSgHtGG3N1&X-Amz-Signature=1836e5893d0efc00e6849e3889b04fc2bdb9e3729aae8b0fbe1f301448862cff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSF2AHQJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBmn8P2A3m6i3oP8HdeBikBW9gqUwPCIpib4sCpKos9WAiBmbgldi2aHlNlH%2FM85SWaDd9z22zoy7waJP%2F6LAzDbwir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWz%2BExx9Ari6Glex2KtwD7pLp9D%2FJCiKr3bUG2ChgHNsxpYj6umsW5B22R77VoFszDufq5gRrvd0%2B3b0Z5AwbjEFflwKiSiJg5K8U6Ib%2FkmCJxG4JBzOEPRCWfXAOjKea%2B59pmdql3cwhgabzQ%2BRz3sI4F%2Flbk5UApVLJ3Jh6MY1p%2B%2B1Cmjj5Onwo4T2MNHW9dxx8U5zhbO%2F4CtLgLDTq63dVdA97Hs6OsGVhuuJZgrwM4bon39q6ZCMr%2F3V2hVWAs6q%2FnWPfV0FsxyfaC9gCH01VPiCJ0Few7gYySkE%2BSpunIVGVYZSdYGXBNaa1vXu%2BzS1CFq6PufCyXKASVWOv86mkrmijZkGGse2K1iJcMIZ6kyrAYg%2B96kGfsiJ%2BqBt6pjNc%2FlacqUMdUn4YGSxZIIyFXkk8HDwD3s1zy0Mp0yDt5hO7lCFS20Dt1L3uZdk%2FXY0KXCfPL%2F7bxbscQHZ%2BrQFwIri0QkZwatjqobSvShbsuEN82pW9LMP8XrYZZ9KzsiTrAHgzwga1yupUXu%2FradaCEPbH6RL9eQHq%2BLsFQnbTBlkEOcl9HYpwqgoNkCAveW5wZm1H23N%2FuZRBDvo6fPcKnKvyXDCtvGhBXKObsGfsfSUqAzpQ95%2FDVt%2FXxC2KaczTZM40fDViXUMwnJjKwQY6pgGBQmVnVC3WnQ3X39BXku0o6p1XixqTJ5OYnnRt7%2FBDEzfIpSuZANGQkuGreyz%2F%2FqJDiranwcqU1rGTmfJQm1%2FCxEVBXacl%2FZBVNsbgfG1DrJmCsjm0YQmH95%2F2oyrnNYmFYS8JsgXpZmo463L%2BSoWhZbFpmDBs3B%2FA5BoUDfN0TPpiqocWQlCbPeBO571LdTntrYkNzRIbh0QHUNmn2KsSgHtGG3N1&X-Amz-Signature=7114ab57b18577467dd798a59388b0215d83483b782df718c4da87cb93354601&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
