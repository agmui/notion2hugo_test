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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDA3GOOL%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXJnZDMUX9uVPAfPQdnHZnrAEXwtBh%2BVLrvt1CKMhSgwIgQVxr%2BVv6PUfxmcYdCJWwCzJ%2BjBHQlfx2zkTZCXO2cCQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNEHN4XD5sfP7If1DSrcAwK5trDxBnC%2F75WDofbcPIf2BD%2FqZnbQImVthBz2%2B6DEfo%2FWiQykt7F%2BXthvc09YdKI7k8HQweT6NrZL14oZoX43triNt6fXxb9gnlbIMvxvxiUJpQxrMwCmefdf8Pcr%2FSrx5f9XR1fiCJw%2BHJXdLhbgANo9u96F3H4SigsdHWYueeh3YdAQIdTFs5kvMuqp443IjrkQuNL8WulGVaVwoeCKcFWiqULcxnhei66u8eDgYwJVJOXID6e3UT1WBDx1Sz0A%2F%2Bhj6TnajPCu5%2FXNgAS6J8dPj4VKzNw8OMXw61Cb2hESh8fGyWBlETHV8L%2FlaBL0uYscOkEvk%2Fkb29yvbAOZOKFx2ScYV1NDirWu2PSRZ6xOqVPBrgg5xYuzOsrHkL25AfnduBZwSl1zGeN1n4y38Bzve2QCdWYoXcXOmzOFANLvPrca%2FAs6tmd93GrCuvb%2Bs233%2BKMdMbvyvPgg77ghV%2BOYPZhqZZFCjo7CMV5UTqUvsr8mNHobfd%2Fwceb3Q8mZCyQ5in3hIIq8TVVZ6W%2FDJQbm6gpQW%2BT%2FDJJhLbrG2dZAG8C3KSyWOpRQCn9zDGalNLem4hrFSOLFw4vox12zXxpQ96aHAEFfyo1PAovYQKEhPcXjSxhH%2B%2BYFMMaSisIGOqUB1Ag0bH6acxP%2Bi0TydUFBLxvz12HSOwX12Rcj6EyTJ%2F0zXtk3G2r1qgG%2BCX0E%2Bd%2BtEJ4SiX%2FJbm2FUrv3Dq8coWU7dt729A0wdYcGn4sWAnrCyLO4FjDJ%2Bf61H%2F4bpAhS294UpXOXCHW28HdsnoW7zmE6o1qE%2Fb%2FG4gzI8yjRaG4zzHip76E2DNAs4PxY5lMbGnHLizWSJVdpkfcTkf%2By2J7UqP6s&X-Amz-Signature=8ca915fbdac2f61bd56554b7dba3f7c6a753ec18617c9c2ac5f960b5b2fc509b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDA3GOOL%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXJnZDMUX9uVPAfPQdnHZnrAEXwtBh%2BVLrvt1CKMhSgwIgQVxr%2BVv6PUfxmcYdCJWwCzJ%2BjBHQlfx2zkTZCXO2cCQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNEHN4XD5sfP7If1DSrcAwK5trDxBnC%2F75WDofbcPIf2BD%2FqZnbQImVthBz2%2B6DEfo%2FWiQykt7F%2BXthvc09YdKI7k8HQweT6NrZL14oZoX43triNt6fXxb9gnlbIMvxvxiUJpQxrMwCmefdf8Pcr%2FSrx5f9XR1fiCJw%2BHJXdLhbgANo9u96F3H4SigsdHWYueeh3YdAQIdTFs5kvMuqp443IjrkQuNL8WulGVaVwoeCKcFWiqULcxnhei66u8eDgYwJVJOXID6e3UT1WBDx1Sz0A%2F%2Bhj6TnajPCu5%2FXNgAS6J8dPj4VKzNw8OMXw61Cb2hESh8fGyWBlETHV8L%2FlaBL0uYscOkEvk%2Fkb29yvbAOZOKFx2ScYV1NDirWu2PSRZ6xOqVPBrgg5xYuzOsrHkL25AfnduBZwSl1zGeN1n4y38Bzve2QCdWYoXcXOmzOFANLvPrca%2FAs6tmd93GrCuvb%2Bs233%2BKMdMbvyvPgg77ghV%2BOYPZhqZZFCjo7CMV5UTqUvsr8mNHobfd%2Fwceb3Q8mZCyQ5in3hIIq8TVVZ6W%2FDJQbm6gpQW%2BT%2FDJJhLbrG2dZAG8C3KSyWOpRQCn9zDGalNLem4hrFSOLFw4vox12zXxpQ96aHAEFfyo1PAovYQKEhPcXjSxhH%2B%2BYFMMaSisIGOqUB1Ag0bH6acxP%2Bi0TydUFBLxvz12HSOwX12Rcj6EyTJ%2F0zXtk3G2r1qgG%2BCX0E%2Bd%2BtEJ4SiX%2FJbm2FUrv3Dq8coWU7dt729A0wdYcGn4sWAnrCyLO4FjDJ%2Bf61H%2F4bpAhS294UpXOXCHW28HdsnoW7zmE6o1qE%2Fb%2FG4gzI8yjRaG4zzHip76E2DNAs4PxY5lMbGnHLizWSJVdpkfcTkf%2By2J7UqP6s&X-Amz-Signature=a5c6ccfd23a8432dc40355294c958734e2dd4e7cb1945e2fe4e5c278b5052cad&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDA3GOOL%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXJnZDMUX9uVPAfPQdnHZnrAEXwtBh%2BVLrvt1CKMhSgwIgQVxr%2BVv6PUfxmcYdCJWwCzJ%2BjBHQlfx2zkTZCXO2cCQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNEHN4XD5sfP7If1DSrcAwK5trDxBnC%2F75WDofbcPIf2BD%2FqZnbQImVthBz2%2B6DEfo%2FWiQykt7F%2BXthvc09YdKI7k8HQweT6NrZL14oZoX43triNt6fXxb9gnlbIMvxvxiUJpQxrMwCmefdf8Pcr%2FSrx5f9XR1fiCJw%2BHJXdLhbgANo9u96F3H4SigsdHWYueeh3YdAQIdTFs5kvMuqp443IjrkQuNL8WulGVaVwoeCKcFWiqULcxnhei66u8eDgYwJVJOXID6e3UT1WBDx1Sz0A%2F%2Bhj6TnajPCu5%2FXNgAS6J8dPj4VKzNw8OMXw61Cb2hESh8fGyWBlETHV8L%2FlaBL0uYscOkEvk%2Fkb29yvbAOZOKFx2ScYV1NDirWu2PSRZ6xOqVPBrgg5xYuzOsrHkL25AfnduBZwSl1zGeN1n4y38Bzve2QCdWYoXcXOmzOFANLvPrca%2FAs6tmd93GrCuvb%2Bs233%2BKMdMbvyvPgg77ghV%2BOYPZhqZZFCjo7CMV5UTqUvsr8mNHobfd%2Fwceb3Q8mZCyQ5in3hIIq8TVVZ6W%2FDJQbm6gpQW%2BT%2FDJJhLbrG2dZAG8C3KSyWOpRQCn9zDGalNLem4hrFSOLFw4vox12zXxpQ96aHAEFfyo1PAovYQKEhPcXjSxhH%2B%2BYFMMaSisIGOqUB1Ag0bH6acxP%2Bi0TydUFBLxvz12HSOwX12Rcj6EyTJ%2F0zXtk3G2r1qgG%2BCX0E%2Bd%2BtEJ4SiX%2FJbm2FUrv3Dq8coWU7dt729A0wdYcGn4sWAnrCyLO4FjDJ%2Bf61H%2F4bpAhS294UpXOXCHW28HdsnoW7zmE6o1qE%2Fb%2FG4gzI8yjRaG4zzHip76E2DNAs4PxY5lMbGnHLizWSJVdpkfcTkf%2By2J7UqP6s&X-Amz-Signature=56836c5e0f9ce7cc7e3e49c4718ceae21c10110ddc339bb0ea99f6e2204e635c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDA3GOOL%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXJnZDMUX9uVPAfPQdnHZnrAEXwtBh%2BVLrvt1CKMhSgwIgQVxr%2BVv6PUfxmcYdCJWwCzJ%2BjBHQlfx2zkTZCXO2cCQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNEHN4XD5sfP7If1DSrcAwK5trDxBnC%2F75WDofbcPIf2BD%2FqZnbQImVthBz2%2B6DEfo%2FWiQykt7F%2BXthvc09YdKI7k8HQweT6NrZL14oZoX43triNt6fXxb9gnlbIMvxvxiUJpQxrMwCmefdf8Pcr%2FSrx5f9XR1fiCJw%2BHJXdLhbgANo9u96F3H4SigsdHWYueeh3YdAQIdTFs5kvMuqp443IjrkQuNL8WulGVaVwoeCKcFWiqULcxnhei66u8eDgYwJVJOXID6e3UT1WBDx1Sz0A%2F%2Bhj6TnajPCu5%2FXNgAS6J8dPj4VKzNw8OMXw61Cb2hESh8fGyWBlETHV8L%2FlaBL0uYscOkEvk%2Fkb29yvbAOZOKFx2ScYV1NDirWu2PSRZ6xOqVPBrgg5xYuzOsrHkL25AfnduBZwSl1zGeN1n4y38Bzve2QCdWYoXcXOmzOFANLvPrca%2FAs6tmd93GrCuvb%2Bs233%2BKMdMbvyvPgg77ghV%2BOYPZhqZZFCjo7CMV5UTqUvsr8mNHobfd%2Fwceb3Q8mZCyQ5in3hIIq8TVVZ6W%2FDJQbm6gpQW%2BT%2FDJJhLbrG2dZAG8C3KSyWOpRQCn9zDGalNLem4hrFSOLFw4vox12zXxpQ96aHAEFfyo1PAovYQKEhPcXjSxhH%2B%2BYFMMaSisIGOqUB1Ag0bH6acxP%2Bi0TydUFBLxvz12HSOwX12Rcj6EyTJ%2F0zXtk3G2r1qgG%2BCX0E%2Bd%2BtEJ4SiX%2FJbm2FUrv3Dq8coWU7dt729A0wdYcGn4sWAnrCyLO4FjDJ%2Bf61H%2F4bpAhS294UpXOXCHW28HdsnoW7zmE6o1qE%2Fb%2FG4gzI8yjRaG4zzHip76E2DNAs4PxY5lMbGnHLizWSJVdpkfcTkf%2By2J7UqP6s&X-Amz-Signature=72b2c9a194ade42c9244a484e806a4f37be57786640fe5f35302c7b140c51d77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDA3GOOL%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXJnZDMUX9uVPAfPQdnHZnrAEXwtBh%2BVLrvt1CKMhSgwIgQVxr%2BVv6PUfxmcYdCJWwCzJ%2BjBHQlfx2zkTZCXO2cCQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNEHN4XD5sfP7If1DSrcAwK5trDxBnC%2F75WDofbcPIf2BD%2FqZnbQImVthBz2%2B6DEfo%2FWiQykt7F%2BXthvc09YdKI7k8HQweT6NrZL14oZoX43triNt6fXxb9gnlbIMvxvxiUJpQxrMwCmefdf8Pcr%2FSrx5f9XR1fiCJw%2BHJXdLhbgANo9u96F3H4SigsdHWYueeh3YdAQIdTFs5kvMuqp443IjrkQuNL8WulGVaVwoeCKcFWiqULcxnhei66u8eDgYwJVJOXID6e3UT1WBDx1Sz0A%2F%2Bhj6TnajPCu5%2FXNgAS6J8dPj4VKzNw8OMXw61Cb2hESh8fGyWBlETHV8L%2FlaBL0uYscOkEvk%2Fkb29yvbAOZOKFx2ScYV1NDirWu2PSRZ6xOqVPBrgg5xYuzOsrHkL25AfnduBZwSl1zGeN1n4y38Bzve2QCdWYoXcXOmzOFANLvPrca%2FAs6tmd93GrCuvb%2Bs233%2BKMdMbvyvPgg77ghV%2BOYPZhqZZFCjo7CMV5UTqUvsr8mNHobfd%2Fwceb3Q8mZCyQ5in3hIIq8TVVZ6W%2FDJQbm6gpQW%2BT%2FDJJhLbrG2dZAG8C3KSyWOpRQCn9zDGalNLem4hrFSOLFw4vox12zXxpQ96aHAEFfyo1PAovYQKEhPcXjSxhH%2B%2BYFMMaSisIGOqUB1Ag0bH6acxP%2Bi0TydUFBLxvz12HSOwX12Rcj6EyTJ%2F0zXtk3G2r1qgG%2BCX0E%2Bd%2BtEJ4SiX%2FJbm2FUrv3Dq8coWU7dt729A0wdYcGn4sWAnrCyLO4FjDJ%2Bf61H%2F4bpAhS294UpXOXCHW28HdsnoW7zmE6o1qE%2Fb%2FG4gzI8yjRaG4zzHip76E2DNAs4PxY5lMbGnHLizWSJVdpkfcTkf%2By2J7UqP6s&X-Amz-Signature=761fd02ee7fa9a3d866c273b239fe98946243483626f45220bf3ae02c6a589d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
