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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTRQIMMG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICkOBmuWryC317cg8l7PCEj%2BjupqRq%2Fuoh3fyP9WmuipAiBJCNhr0ITrz88D2zTGKr6HAkEKFnNZjldFLjGH3hNGnir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPPETVc%2FtcEVcLu8mKtwDWOek1tC%2FGqr98HzV82%2FxqfrnFPA18aJiWh6gudjFc1lo6idJ2zIgdJeZne1fslIaEphUY3cgh2findC4qLJOfEbclxdx99g8ujZLTxVxLRUW9R2BuLxzzinzEGT4Hqv%2BSJp2GVFw0MYsVEce0yCarcQ9ylZpoLvL5Me4iFcJzoJK4oZ0AnGGfckWRPOvk5NAc6cOs6CgUv5UxL3N6dtj%2FQuhQgzkuCuVt92cTWRz7LvSOG3dTBwzrM3y3sAdI%2FMMcdr9h1VOPPQ%2FDncdA32NsNh65zVRrpb%2BkEXvXVzNWOYJNSDGz35PqMNLqnuW5eA%2BwK6%2BAKDFd6YSzfkJ8nUldvCtK6SOYI5ILDvdHacnLMeMaBrbQPbtbOez%2BpVwB%2BsseCbMg68wKVnYdd1CMuQ8vHMqtwKkehgDK0d9iuTnUFTMkY8Gpeg%2BkfF67KREnMBRNnglNe4zDR%2B6Ffd%2B0pn23UtlyvHK04DgNXgtaEJGwA7pT1ar8l7vqokb5v1k4vlE0%2BVlX24%2FuE1NUQNcNihRadQ%2BH5pz5GkbGWVXQg%2B55v83G0xuY8h6lZLdYatwHpaXq6kzGX0y2q%2BWzCEsnAcbNtSqRpYQAZ15%2FQ6mn3RjSN7Nd5Z67UGXG91ZmXwwhOrzwgY6pgEa%2FEnleV%2FJmB8AIwVAaR9HG%2FGVCOKN5AC8kfdKnXWVrBXbjzhMKbxGpAkz2HElnRaXP97tpFWshi4j7ug7FIsXS%2BuZH0el5W%2B%2BxwKzXhVPYvYcN4V5I3ReOrw09i3wlAhocaDDfT%2F%2Bb%2FakXg5Sb%2BqMue7u%2BV0%2Bd1ge5Edf4qPYRSaWpL%2B0g5Qj3qWal26Z1XDRq8XW9VZEEIckpQVYro9I8onvEjCf&X-Amz-Signature=84bd57eabe498ef78fe5c30f4f66fd02f2e2b5046740d030d62bf7ebba3cb4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTRQIMMG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICkOBmuWryC317cg8l7PCEj%2BjupqRq%2Fuoh3fyP9WmuipAiBJCNhr0ITrz88D2zTGKr6HAkEKFnNZjldFLjGH3hNGnir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPPETVc%2FtcEVcLu8mKtwDWOek1tC%2FGqr98HzV82%2FxqfrnFPA18aJiWh6gudjFc1lo6idJ2zIgdJeZne1fslIaEphUY3cgh2findC4qLJOfEbclxdx99g8ujZLTxVxLRUW9R2BuLxzzinzEGT4Hqv%2BSJp2GVFw0MYsVEce0yCarcQ9ylZpoLvL5Me4iFcJzoJK4oZ0AnGGfckWRPOvk5NAc6cOs6CgUv5UxL3N6dtj%2FQuhQgzkuCuVt92cTWRz7LvSOG3dTBwzrM3y3sAdI%2FMMcdr9h1VOPPQ%2FDncdA32NsNh65zVRrpb%2BkEXvXVzNWOYJNSDGz35PqMNLqnuW5eA%2BwK6%2BAKDFd6YSzfkJ8nUldvCtK6SOYI5ILDvdHacnLMeMaBrbQPbtbOez%2BpVwB%2BsseCbMg68wKVnYdd1CMuQ8vHMqtwKkehgDK0d9iuTnUFTMkY8Gpeg%2BkfF67KREnMBRNnglNe4zDR%2B6Ffd%2B0pn23UtlyvHK04DgNXgtaEJGwA7pT1ar8l7vqokb5v1k4vlE0%2BVlX24%2FuE1NUQNcNihRadQ%2BH5pz5GkbGWVXQg%2B55v83G0xuY8h6lZLdYatwHpaXq6kzGX0y2q%2BWzCEsnAcbNtSqRpYQAZ15%2FQ6mn3RjSN7Nd5Z67UGXG91ZmXwwhOrzwgY6pgEa%2FEnleV%2FJmB8AIwVAaR9HG%2FGVCOKN5AC8kfdKnXWVrBXbjzhMKbxGpAkz2HElnRaXP97tpFWshi4j7ug7FIsXS%2BuZH0el5W%2B%2BxwKzXhVPYvYcN4V5I3ReOrw09i3wlAhocaDDfT%2F%2Bb%2FakXg5Sb%2BqMue7u%2BV0%2Bd1ge5Edf4qPYRSaWpL%2B0g5Qj3qWal26Z1XDRq8XW9VZEEIckpQVYro9I8onvEjCf&X-Amz-Signature=5165affa26b77a8269793e52568c166f55b20d96d408bf1780194c280a2bcc7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTRQIMMG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICkOBmuWryC317cg8l7PCEj%2BjupqRq%2Fuoh3fyP9WmuipAiBJCNhr0ITrz88D2zTGKr6HAkEKFnNZjldFLjGH3hNGnir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPPETVc%2FtcEVcLu8mKtwDWOek1tC%2FGqr98HzV82%2FxqfrnFPA18aJiWh6gudjFc1lo6idJ2zIgdJeZne1fslIaEphUY3cgh2findC4qLJOfEbclxdx99g8ujZLTxVxLRUW9R2BuLxzzinzEGT4Hqv%2BSJp2GVFw0MYsVEce0yCarcQ9ylZpoLvL5Me4iFcJzoJK4oZ0AnGGfckWRPOvk5NAc6cOs6CgUv5UxL3N6dtj%2FQuhQgzkuCuVt92cTWRz7LvSOG3dTBwzrM3y3sAdI%2FMMcdr9h1VOPPQ%2FDncdA32NsNh65zVRrpb%2BkEXvXVzNWOYJNSDGz35PqMNLqnuW5eA%2BwK6%2BAKDFd6YSzfkJ8nUldvCtK6SOYI5ILDvdHacnLMeMaBrbQPbtbOez%2BpVwB%2BsseCbMg68wKVnYdd1CMuQ8vHMqtwKkehgDK0d9iuTnUFTMkY8Gpeg%2BkfF67KREnMBRNnglNe4zDR%2B6Ffd%2B0pn23UtlyvHK04DgNXgtaEJGwA7pT1ar8l7vqokb5v1k4vlE0%2BVlX24%2FuE1NUQNcNihRadQ%2BH5pz5GkbGWVXQg%2B55v83G0xuY8h6lZLdYatwHpaXq6kzGX0y2q%2BWzCEsnAcbNtSqRpYQAZ15%2FQ6mn3RjSN7Nd5Z67UGXG91ZmXwwhOrzwgY6pgEa%2FEnleV%2FJmB8AIwVAaR9HG%2FGVCOKN5AC8kfdKnXWVrBXbjzhMKbxGpAkz2HElnRaXP97tpFWshi4j7ug7FIsXS%2BuZH0el5W%2B%2BxwKzXhVPYvYcN4V5I3ReOrw09i3wlAhocaDDfT%2F%2Bb%2FakXg5Sb%2BqMue7u%2BV0%2Bd1ge5Edf4qPYRSaWpL%2B0g5Qj3qWal26Z1XDRq8XW9VZEEIckpQVYro9I8onvEjCf&X-Amz-Signature=c894820d13ed6421589cae5e5212aa8507e76401ef7d75794c0ff4379895dd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTRQIMMG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICkOBmuWryC317cg8l7PCEj%2BjupqRq%2Fuoh3fyP9WmuipAiBJCNhr0ITrz88D2zTGKr6HAkEKFnNZjldFLjGH3hNGnir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPPETVc%2FtcEVcLu8mKtwDWOek1tC%2FGqr98HzV82%2FxqfrnFPA18aJiWh6gudjFc1lo6idJ2zIgdJeZne1fslIaEphUY3cgh2findC4qLJOfEbclxdx99g8ujZLTxVxLRUW9R2BuLxzzinzEGT4Hqv%2BSJp2GVFw0MYsVEce0yCarcQ9ylZpoLvL5Me4iFcJzoJK4oZ0AnGGfckWRPOvk5NAc6cOs6CgUv5UxL3N6dtj%2FQuhQgzkuCuVt92cTWRz7LvSOG3dTBwzrM3y3sAdI%2FMMcdr9h1VOPPQ%2FDncdA32NsNh65zVRrpb%2BkEXvXVzNWOYJNSDGz35PqMNLqnuW5eA%2BwK6%2BAKDFd6YSzfkJ8nUldvCtK6SOYI5ILDvdHacnLMeMaBrbQPbtbOez%2BpVwB%2BsseCbMg68wKVnYdd1CMuQ8vHMqtwKkehgDK0d9iuTnUFTMkY8Gpeg%2BkfF67KREnMBRNnglNe4zDR%2B6Ffd%2B0pn23UtlyvHK04DgNXgtaEJGwA7pT1ar8l7vqokb5v1k4vlE0%2BVlX24%2FuE1NUQNcNihRadQ%2BH5pz5GkbGWVXQg%2B55v83G0xuY8h6lZLdYatwHpaXq6kzGX0y2q%2BWzCEsnAcbNtSqRpYQAZ15%2FQ6mn3RjSN7Nd5Z67UGXG91ZmXwwhOrzwgY6pgEa%2FEnleV%2FJmB8AIwVAaR9HG%2FGVCOKN5AC8kfdKnXWVrBXbjzhMKbxGpAkz2HElnRaXP97tpFWshi4j7ug7FIsXS%2BuZH0el5W%2B%2BxwKzXhVPYvYcN4V5I3ReOrw09i3wlAhocaDDfT%2F%2Bb%2FakXg5Sb%2BqMue7u%2BV0%2Bd1ge5Edf4qPYRSaWpL%2B0g5Qj3qWal26Z1XDRq8XW9VZEEIckpQVYro9I8onvEjCf&X-Amz-Signature=255871ea205d928533fc27894be9dc10e33b834617a005eab63cb516a42da41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTRQIMMG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICkOBmuWryC317cg8l7PCEj%2BjupqRq%2Fuoh3fyP9WmuipAiBJCNhr0ITrz88D2zTGKr6HAkEKFnNZjldFLjGH3hNGnir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPPETVc%2FtcEVcLu8mKtwDWOek1tC%2FGqr98HzV82%2FxqfrnFPA18aJiWh6gudjFc1lo6idJ2zIgdJeZne1fslIaEphUY3cgh2findC4qLJOfEbclxdx99g8ujZLTxVxLRUW9R2BuLxzzinzEGT4Hqv%2BSJp2GVFw0MYsVEce0yCarcQ9ylZpoLvL5Me4iFcJzoJK4oZ0AnGGfckWRPOvk5NAc6cOs6CgUv5UxL3N6dtj%2FQuhQgzkuCuVt92cTWRz7LvSOG3dTBwzrM3y3sAdI%2FMMcdr9h1VOPPQ%2FDncdA32NsNh65zVRrpb%2BkEXvXVzNWOYJNSDGz35PqMNLqnuW5eA%2BwK6%2BAKDFd6YSzfkJ8nUldvCtK6SOYI5ILDvdHacnLMeMaBrbQPbtbOez%2BpVwB%2BsseCbMg68wKVnYdd1CMuQ8vHMqtwKkehgDK0d9iuTnUFTMkY8Gpeg%2BkfF67KREnMBRNnglNe4zDR%2B6Ffd%2B0pn23UtlyvHK04DgNXgtaEJGwA7pT1ar8l7vqokb5v1k4vlE0%2BVlX24%2FuE1NUQNcNihRadQ%2BH5pz5GkbGWVXQg%2B55v83G0xuY8h6lZLdYatwHpaXq6kzGX0y2q%2BWzCEsnAcbNtSqRpYQAZ15%2FQ6mn3RjSN7Nd5Z67UGXG91ZmXwwhOrzwgY6pgEa%2FEnleV%2FJmB8AIwVAaR9HG%2FGVCOKN5AC8kfdKnXWVrBXbjzhMKbxGpAkz2HElnRaXP97tpFWshi4j7ug7FIsXS%2BuZH0el5W%2B%2BxwKzXhVPYvYcN4V5I3ReOrw09i3wlAhocaDDfT%2F%2Bb%2FakXg5Sb%2BqMue7u%2BV0%2Bd1ge5Edf4qPYRSaWpL%2B0g5Qj3qWal26Z1XDRq8XW9VZEEIckpQVYro9I8onvEjCf&X-Amz-Signature=47e927a2e6e867129efffca209a21587033f6cda89cdfd08a03680c54cf247eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
