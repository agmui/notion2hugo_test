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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662S2E6FG%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGEMvgtCLkSDzBHSRWxtHpz496SSmLDfjPrmA84KF9nwIhAMoStPkf7ZvO5axf9JblZyE6WlQLulrigW4UouAuxjKCKv8DCC4QABoMNjM3NDIzMTgzODA1Igws%2FYlLtQeigSjNRHsq3AOVxlRnBQy7VKM0UK3u7FAB8ghDahyaNYNYbQk0NlNxJgzutMRmX9MCOh1Obc6o%2ByDCRT%2BCUMde5fG9BAqBWRgjZt%2FIE0dIi%2Fx%2BRj5LBCNcnneozMwdZHMNSk77kBfr%2BDoJx9BI5%2Bt98DrAgTIXSXB4Lf3BuyGljLT1QGFrVUiKILNWzJf4bHHlX2DS4%2FoD2ehsQUfgaatTEwzW1DPoyzylAy%2BxLdYA%2FZ9erieqSlNXY8kQslaCFCkS9kHDz2wBdvE%2Br5JBjkgzuzXjJ6aZgAsGq9YwtQmPmPMWWsg%2FO0Ih1Z6IhFakG5gBzwwcb2SNnnnpjQ6QKlkLcjEZaVB3wqr85AFhIkQGHQ8HPMUxWBc42TF2a5lawJU2B0lF1r8EwpMfY8A8K7bhh8OPJqMigV%2FaiVGK6wnseNl4ypISto%2Bt6uC8GxuUvZrB3pzep%2B7aJlEwUvU2GR85n6WmNule4qAdMN1lhRz%2BUotgUcDvnlRrteGQqjQ6YKYSnAVWbDQEs9DYM17M6%2BVqGE2qSQkjd7Fom7qGTMcXJ2qhCz2iP0B3QoZu8PZefNfbGhV5sNQsMi19ieRWraFQf7KOJCHXYePvUFwxcxk9Tm7wKJLPVaDG8MPrOTiVsq%2BGFO8WZjDYmK7ABjqkAYrbTLUBL67%2F46W72fo4Jc0HVaU9MLGS%2FBohzKsCQJylgB5Wb0xu758rGyV%2B4v6qyRbH1Xb%2FLRPfUf2gXD2h6mNdnqpmTKIXjb15Kc2Wib1ov4pyt4Y%2F%2BULAKhoJGIKF3Ee5rKvYXqSX4FsE00CkyWBFPMOn%2BUpXIyUhYFloVEbG25EgigDGU0kQHyrwRxe23ZH7PeMr8vAoazy14Mb5QPFhucxa&X-Amz-Signature=361a6462187a55bde88ef0494c2f930b31e643a5da145d473dde374238d59f50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662S2E6FG%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGEMvgtCLkSDzBHSRWxtHpz496SSmLDfjPrmA84KF9nwIhAMoStPkf7ZvO5axf9JblZyE6WlQLulrigW4UouAuxjKCKv8DCC4QABoMNjM3NDIzMTgzODA1Igws%2FYlLtQeigSjNRHsq3AOVxlRnBQy7VKM0UK3u7FAB8ghDahyaNYNYbQk0NlNxJgzutMRmX9MCOh1Obc6o%2ByDCRT%2BCUMde5fG9BAqBWRgjZt%2FIE0dIi%2Fx%2BRj5LBCNcnneozMwdZHMNSk77kBfr%2BDoJx9BI5%2Bt98DrAgTIXSXB4Lf3BuyGljLT1QGFrVUiKILNWzJf4bHHlX2DS4%2FoD2ehsQUfgaatTEwzW1DPoyzylAy%2BxLdYA%2FZ9erieqSlNXY8kQslaCFCkS9kHDz2wBdvE%2Br5JBjkgzuzXjJ6aZgAsGq9YwtQmPmPMWWsg%2FO0Ih1Z6IhFakG5gBzwwcb2SNnnnpjQ6QKlkLcjEZaVB3wqr85AFhIkQGHQ8HPMUxWBc42TF2a5lawJU2B0lF1r8EwpMfY8A8K7bhh8OPJqMigV%2FaiVGK6wnseNl4ypISto%2Bt6uC8GxuUvZrB3pzep%2B7aJlEwUvU2GR85n6WmNule4qAdMN1lhRz%2BUotgUcDvnlRrteGQqjQ6YKYSnAVWbDQEs9DYM17M6%2BVqGE2qSQkjd7Fom7qGTMcXJ2qhCz2iP0B3QoZu8PZefNfbGhV5sNQsMi19ieRWraFQf7KOJCHXYePvUFwxcxk9Tm7wKJLPVaDG8MPrOTiVsq%2BGFO8WZjDYmK7ABjqkAYrbTLUBL67%2F46W72fo4Jc0HVaU9MLGS%2FBohzKsCQJylgB5Wb0xu758rGyV%2B4v6qyRbH1Xb%2FLRPfUf2gXD2h6mNdnqpmTKIXjb15Kc2Wib1ov4pyt4Y%2F%2BULAKhoJGIKF3Ee5rKvYXqSX4FsE00CkyWBFPMOn%2BUpXIyUhYFloVEbG25EgigDGU0kQHyrwRxe23ZH7PeMr8vAoazy14Mb5QPFhucxa&X-Amz-Signature=18396aa15fe808113b9140debed53814d2261b8f03451f235725132cce18f255&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662S2E6FG%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGEMvgtCLkSDzBHSRWxtHpz496SSmLDfjPrmA84KF9nwIhAMoStPkf7ZvO5axf9JblZyE6WlQLulrigW4UouAuxjKCKv8DCC4QABoMNjM3NDIzMTgzODA1Igws%2FYlLtQeigSjNRHsq3AOVxlRnBQy7VKM0UK3u7FAB8ghDahyaNYNYbQk0NlNxJgzutMRmX9MCOh1Obc6o%2ByDCRT%2BCUMde5fG9BAqBWRgjZt%2FIE0dIi%2Fx%2BRj5LBCNcnneozMwdZHMNSk77kBfr%2BDoJx9BI5%2Bt98DrAgTIXSXB4Lf3BuyGljLT1QGFrVUiKILNWzJf4bHHlX2DS4%2FoD2ehsQUfgaatTEwzW1DPoyzylAy%2BxLdYA%2FZ9erieqSlNXY8kQslaCFCkS9kHDz2wBdvE%2Br5JBjkgzuzXjJ6aZgAsGq9YwtQmPmPMWWsg%2FO0Ih1Z6IhFakG5gBzwwcb2SNnnnpjQ6QKlkLcjEZaVB3wqr85AFhIkQGHQ8HPMUxWBc42TF2a5lawJU2B0lF1r8EwpMfY8A8K7bhh8OPJqMigV%2FaiVGK6wnseNl4ypISto%2Bt6uC8GxuUvZrB3pzep%2B7aJlEwUvU2GR85n6WmNule4qAdMN1lhRz%2BUotgUcDvnlRrteGQqjQ6YKYSnAVWbDQEs9DYM17M6%2BVqGE2qSQkjd7Fom7qGTMcXJ2qhCz2iP0B3QoZu8PZefNfbGhV5sNQsMi19ieRWraFQf7KOJCHXYePvUFwxcxk9Tm7wKJLPVaDG8MPrOTiVsq%2BGFO8WZjDYmK7ABjqkAYrbTLUBL67%2F46W72fo4Jc0HVaU9MLGS%2FBohzKsCQJylgB5Wb0xu758rGyV%2B4v6qyRbH1Xb%2FLRPfUf2gXD2h6mNdnqpmTKIXjb15Kc2Wib1ov4pyt4Y%2F%2BULAKhoJGIKF3Ee5rKvYXqSX4FsE00CkyWBFPMOn%2BUpXIyUhYFloVEbG25EgigDGU0kQHyrwRxe23ZH7PeMr8vAoazy14Mb5QPFhucxa&X-Amz-Signature=8d689e58c9e385166afad3ec5a5db32215bd1e391eb7750d34e633ad789241e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662S2E6FG%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGEMvgtCLkSDzBHSRWxtHpz496SSmLDfjPrmA84KF9nwIhAMoStPkf7ZvO5axf9JblZyE6WlQLulrigW4UouAuxjKCKv8DCC4QABoMNjM3NDIzMTgzODA1Igws%2FYlLtQeigSjNRHsq3AOVxlRnBQy7VKM0UK3u7FAB8ghDahyaNYNYbQk0NlNxJgzutMRmX9MCOh1Obc6o%2ByDCRT%2BCUMde5fG9BAqBWRgjZt%2FIE0dIi%2Fx%2BRj5LBCNcnneozMwdZHMNSk77kBfr%2BDoJx9BI5%2Bt98DrAgTIXSXB4Lf3BuyGljLT1QGFrVUiKILNWzJf4bHHlX2DS4%2FoD2ehsQUfgaatTEwzW1DPoyzylAy%2BxLdYA%2FZ9erieqSlNXY8kQslaCFCkS9kHDz2wBdvE%2Br5JBjkgzuzXjJ6aZgAsGq9YwtQmPmPMWWsg%2FO0Ih1Z6IhFakG5gBzwwcb2SNnnnpjQ6QKlkLcjEZaVB3wqr85AFhIkQGHQ8HPMUxWBc42TF2a5lawJU2B0lF1r8EwpMfY8A8K7bhh8OPJqMigV%2FaiVGK6wnseNl4ypISto%2Bt6uC8GxuUvZrB3pzep%2B7aJlEwUvU2GR85n6WmNule4qAdMN1lhRz%2BUotgUcDvnlRrteGQqjQ6YKYSnAVWbDQEs9DYM17M6%2BVqGE2qSQkjd7Fom7qGTMcXJ2qhCz2iP0B3QoZu8PZefNfbGhV5sNQsMi19ieRWraFQf7KOJCHXYePvUFwxcxk9Tm7wKJLPVaDG8MPrOTiVsq%2BGFO8WZjDYmK7ABjqkAYrbTLUBL67%2F46W72fo4Jc0HVaU9MLGS%2FBohzKsCQJylgB5Wb0xu758rGyV%2B4v6qyRbH1Xb%2FLRPfUf2gXD2h6mNdnqpmTKIXjb15Kc2Wib1ov4pyt4Y%2F%2BULAKhoJGIKF3Ee5rKvYXqSX4FsE00CkyWBFPMOn%2BUpXIyUhYFloVEbG25EgigDGU0kQHyrwRxe23ZH7PeMr8vAoazy14Mb5QPFhucxa&X-Amz-Signature=7a914ca056ae9a80ad4e000b6671f01b78d994c4a1d0c78f379ab4b00d9238f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662S2E6FG%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGEMvgtCLkSDzBHSRWxtHpz496SSmLDfjPrmA84KF9nwIhAMoStPkf7ZvO5axf9JblZyE6WlQLulrigW4UouAuxjKCKv8DCC4QABoMNjM3NDIzMTgzODA1Igws%2FYlLtQeigSjNRHsq3AOVxlRnBQy7VKM0UK3u7FAB8ghDahyaNYNYbQk0NlNxJgzutMRmX9MCOh1Obc6o%2ByDCRT%2BCUMde5fG9BAqBWRgjZt%2FIE0dIi%2Fx%2BRj5LBCNcnneozMwdZHMNSk77kBfr%2BDoJx9BI5%2Bt98DrAgTIXSXB4Lf3BuyGljLT1QGFrVUiKILNWzJf4bHHlX2DS4%2FoD2ehsQUfgaatTEwzW1DPoyzylAy%2BxLdYA%2FZ9erieqSlNXY8kQslaCFCkS9kHDz2wBdvE%2Br5JBjkgzuzXjJ6aZgAsGq9YwtQmPmPMWWsg%2FO0Ih1Z6IhFakG5gBzwwcb2SNnnnpjQ6QKlkLcjEZaVB3wqr85AFhIkQGHQ8HPMUxWBc42TF2a5lawJU2B0lF1r8EwpMfY8A8K7bhh8OPJqMigV%2FaiVGK6wnseNl4ypISto%2Bt6uC8GxuUvZrB3pzep%2B7aJlEwUvU2GR85n6WmNule4qAdMN1lhRz%2BUotgUcDvnlRrteGQqjQ6YKYSnAVWbDQEs9DYM17M6%2BVqGE2qSQkjd7Fom7qGTMcXJ2qhCz2iP0B3QoZu8PZefNfbGhV5sNQsMi19ieRWraFQf7KOJCHXYePvUFwxcxk9Tm7wKJLPVaDG8MPrOTiVsq%2BGFO8WZjDYmK7ABjqkAYrbTLUBL67%2F46W72fo4Jc0HVaU9MLGS%2FBohzKsCQJylgB5Wb0xu758rGyV%2B4v6qyRbH1Xb%2FLRPfUf2gXD2h6mNdnqpmTKIXjb15Kc2Wib1ov4pyt4Y%2F%2BULAKhoJGIKF3Ee5rKvYXqSX4FsE00CkyWBFPMOn%2BUpXIyUhYFloVEbG25EgigDGU0kQHyrwRxe23ZH7PeMr8vAoazy14Mb5QPFhucxa&X-Amz-Signature=fdaa271f9e48c402720752d2e14e1f55d2d5ba615bfcf43fdfc38a833a6fcc34&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
