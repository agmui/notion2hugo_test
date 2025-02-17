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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXSA3YV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICP0Mb70ko1TzYO5rXqgVJVbyZQxHdAmp6awnqxVo6KNAiEA9cGE0YU4I%2BKEvTg7Xf%2FhMtY06Fw18Wz6TMrqQbQ2w28q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNrCg7XQKHlUYBqOuSrcA4psMlFX5%2FWUHLXZN51POLKI0xskqcE2aYZfcmk3qO48YbyE049t3OMHPorWLWMK0nWq0Pcpo%2FZO%2FIK3oa5jbVsnYEyI5mwOdX3QARxoSg3AMQcP1hr%2B%2BoLp%2B%2Fv23iF5oexj%2F2Y3Am47X0EVqdJbIsCdXE4OxOBlA%2Bkb7cnPHOlXgg0Wah0sdTM%2FNkpfpFNIkx3Khtf2TeMXD%2BDX2uPn%2BcKTm2WzjBvgqTyTPsx0rQAkNyN5pUP3IDyCaSdnyB20FETmD%2B8iQQTubhCYAhLh0xpgNBdTDKce1CZv5TMnNMs%2Fa25YNLe9dGch40%2BQI8AJKgjE3rnu%2BieJ9UaXvL0cJw3wXarrxWOWuvUri9URHcvWR9pfBVGhx6Kw7wsswr35pGoYR%2B3C82O8MLvamNdXETQ381ZWiQdI4E2zwyjsCsL1tmkev4la2A%2FiiNy3rYBIIFbFBN5JNuMAS617TjkZex2uVZKFY7HGdPh%2BVeJFgJA%2BnK5BTv4mn7fBZwTNY1QIJgfO7krKEhkDCBznRESBLdWejqCq8G8oF%2BcPYg3Je%2BOm8Y5evdVE3bSXUAs2U%2FJ6DQDEd9ZkuaJVCxq%2BlHsdnFG3Qj1fuB1fj1b79aKxqNWFRSFKtmcx2RNSMdCEMJ%2BWzb0GOqUBOO%2FMd0gQfAOYcTx4pGeZr7N3LGqnGMmftdJLjmM54GbXzgdnGTOH%2BSJlgszBP%2B%2F2vqV53iDKuSYUhqA%2FuiqpbWn%2FE7nop6G4IO1Z23LElnQ3tkKewBOoKq7qNwgA%2F4nrznUXi67pDwbaHWKkZtS%2FVpN7BHoJsKKg%2B4I5839BmOzHlDvbhce2ZAc3GKLd4bUiPMngt6aBCRXlGd8yhNbo2%2FdtNbrd&X-Amz-Signature=7c5ab6ce808d637009d7944825a837d22cd15015220f52ea24f3d89d22bbd35b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXSA3YV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICP0Mb70ko1TzYO5rXqgVJVbyZQxHdAmp6awnqxVo6KNAiEA9cGE0YU4I%2BKEvTg7Xf%2FhMtY06Fw18Wz6TMrqQbQ2w28q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNrCg7XQKHlUYBqOuSrcA4psMlFX5%2FWUHLXZN51POLKI0xskqcE2aYZfcmk3qO48YbyE049t3OMHPorWLWMK0nWq0Pcpo%2FZO%2FIK3oa5jbVsnYEyI5mwOdX3QARxoSg3AMQcP1hr%2B%2BoLp%2B%2Fv23iF5oexj%2F2Y3Am47X0EVqdJbIsCdXE4OxOBlA%2Bkb7cnPHOlXgg0Wah0sdTM%2FNkpfpFNIkx3Khtf2TeMXD%2BDX2uPn%2BcKTm2WzjBvgqTyTPsx0rQAkNyN5pUP3IDyCaSdnyB20FETmD%2B8iQQTubhCYAhLh0xpgNBdTDKce1CZv5TMnNMs%2Fa25YNLe9dGch40%2BQI8AJKgjE3rnu%2BieJ9UaXvL0cJw3wXarrxWOWuvUri9URHcvWR9pfBVGhx6Kw7wsswr35pGoYR%2B3C82O8MLvamNdXETQ381ZWiQdI4E2zwyjsCsL1tmkev4la2A%2FiiNy3rYBIIFbFBN5JNuMAS617TjkZex2uVZKFY7HGdPh%2BVeJFgJA%2BnK5BTv4mn7fBZwTNY1QIJgfO7krKEhkDCBznRESBLdWejqCq8G8oF%2BcPYg3Je%2BOm8Y5evdVE3bSXUAs2U%2FJ6DQDEd9ZkuaJVCxq%2BlHsdnFG3Qj1fuB1fj1b79aKxqNWFRSFKtmcx2RNSMdCEMJ%2BWzb0GOqUBOO%2FMd0gQfAOYcTx4pGeZr7N3LGqnGMmftdJLjmM54GbXzgdnGTOH%2BSJlgszBP%2B%2F2vqV53iDKuSYUhqA%2FuiqpbWn%2FE7nop6G4IO1Z23LElnQ3tkKewBOoKq7qNwgA%2F4nrznUXi67pDwbaHWKkZtS%2FVpN7BHoJsKKg%2B4I5839BmOzHlDvbhce2ZAc3GKLd4bUiPMngt6aBCRXlGd8yhNbo2%2FdtNbrd&X-Amz-Signature=611d62550ad33e4b1b5f126d9826c2ff172101147dd2ede3fbef4d91776b6234&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXSA3YV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICP0Mb70ko1TzYO5rXqgVJVbyZQxHdAmp6awnqxVo6KNAiEA9cGE0YU4I%2BKEvTg7Xf%2FhMtY06Fw18Wz6TMrqQbQ2w28q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNrCg7XQKHlUYBqOuSrcA4psMlFX5%2FWUHLXZN51POLKI0xskqcE2aYZfcmk3qO48YbyE049t3OMHPorWLWMK0nWq0Pcpo%2FZO%2FIK3oa5jbVsnYEyI5mwOdX3QARxoSg3AMQcP1hr%2B%2BoLp%2B%2Fv23iF5oexj%2F2Y3Am47X0EVqdJbIsCdXE4OxOBlA%2Bkb7cnPHOlXgg0Wah0sdTM%2FNkpfpFNIkx3Khtf2TeMXD%2BDX2uPn%2BcKTm2WzjBvgqTyTPsx0rQAkNyN5pUP3IDyCaSdnyB20FETmD%2B8iQQTubhCYAhLh0xpgNBdTDKce1CZv5TMnNMs%2Fa25YNLe9dGch40%2BQI8AJKgjE3rnu%2BieJ9UaXvL0cJw3wXarrxWOWuvUri9URHcvWR9pfBVGhx6Kw7wsswr35pGoYR%2B3C82O8MLvamNdXETQ381ZWiQdI4E2zwyjsCsL1tmkev4la2A%2FiiNy3rYBIIFbFBN5JNuMAS617TjkZex2uVZKFY7HGdPh%2BVeJFgJA%2BnK5BTv4mn7fBZwTNY1QIJgfO7krKEhkDCBznRESBLdWejqCq8G8oF%2BcPYg3Je%2BOm8Y5evdVE3bSXUAs2U%2FJ6DQDEd9ZkuaJVCxq%2BlHsdnFG3Qj1fuB1fj1b79aKxqNWFRSFKtmcx2RNSMdCEMJ%2BWzb0GOqUBOO%2FMd0gQfAOYcTx4pGeZr7N3LGqnGMmftdJLjmM54GbXzgdnGTOH%2BSJlgszBP%2B%2F2vqV53iDKuSYUhqA%2FuiqpbWn%2FE7nop6G4IO1Z23LElnQ3tkKewBOoKq7qNwgA%2F4nrznUXi67pDwbaHWKkZtS%2FVpN7BHoJsKKg%2B4I5839BmOzHlDvbhce2ZAc3GKLd4bUiPMngt6aBCRXlGd8yhNbo2%2FdtNbrd&X-Amz-Signature=ccd0eb2d43309ac955b3c4fdcefdb30080c09690e303e7d23d39851c402bff9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXSA3YV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICP0Mb70ko1TzYO5rXqgVJVbyZQxHdAmp6awnqxVo6KNAiEA9cGE0YU4I%2BKEvTg7Xf%2FhMtY06Fw18Wz6TMrqQbQ2w28q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNrCg7XQKHlUYBqOuSrcA4psMlFX5%2FWUHLXZN51POLKI0xskqcE2aYZfcmk3qO48YbyE049t3OMHPorWLWMK0nWq0Pcpo%2FZO%2FIK3oa5jbVsnYEyI5mwOdX3QARxoSg3AMQcP1hr%2B%2BoLp%2B%2Fv23iF5oexj%2F2Y3Am47X0EVqdJbIsCdXE4OxOBlA%2Bkb7cnPHOlXgg0Wah0sdTM%2FNkpfpFNIkx3Khtf2TeMXD%2BDX2uPn%2BcKTm2WzjBvgqTyTPsx0rQAkNyN5pUP3IDyCaSdnyB20FETmD%2B8iQQTubhCYAhLh0xpgNBdTDKce1CZv5TMnNMs%2Fa25YNLe9dGch40%2BQI8AJKgjE3rnu%2BieJ9UaXvL0cJw3wXarrxWOWuvUri9URHcvWR9pfBVGhx6Kw7wsswr35pGoYR%2B3C82O8MLvamNdXETQ381ZWiQdI4E2zwyjsCsL1tmkev4la2A%2FiiNy3rYBIIFbFBN5JNuMAS617TjkZex2uVZKFY7HGdPh%2BVeJFgJA%2BnK5BTv4mn7fBZwTNY1QIJgfO7krKEhkDCBznRESBLdWejqCq8G8oF%2BcPYg3Je%2BOm8Y5evdVE3bSXUAs2U%2FJ6DQDEd9ZkuaJVCxq%2BlHsdnFG3Qj1fuB1fj1b79aKxqNWFRSFKtmcx2RNSMdCEMJ%2BWzb0GOqUBOO%2FMd0gQfAOYcTx4pGeZr7N3LGqnGMmftdJLjmM54GbXzgdnGTOH%2BSJlgszBP%2B%2F2vqV53iDKuSYUhqA%2FuiqpbWn%2FE7nop6G4IO1Z23LElnQ3tkKewBOoKq7qNwgA%2F4nrznUXi67pDwbaHWKkZtS%2FVpN7BHoJsKKg%2B4I5839BmOzHlDvbhce2ZAc3GKLd4bUiPMngt6aBCRXlGd8yhNbo2%2FdtNbrd&X-Amz-Signature=1bbec8100902d5ce45c9df2c81bcfc7d46b7b735313daa85f9fee86def52f80f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXSA3YV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICP0Mb70ko1TzYO5rXqgVJVbyZQxHdAmp6awnqxVo6KNAiEA9cGE0YU4I%2BKEvTg7Xf%2FhMtY06Fw18Wz6TMrqQbQ2w28q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNrCg7XQKHlUYBqOuSrcA4psMlFX5%2FWUHLXZN51POLKI0xskqcE2aYZfcmk3qO48YbyE049t3OMHPorWLWMK0nWq0Pcpo%2FZO%2FIK3oa5jbVsnYEyI5mwOdX3QARxoSg3AMQcP1hr%2B%2BoLp%2B%2Fv23iF5oexj%2F2Y3Am47X0EVqdJbIsCdXE4OxOBlA%2Bkb7cnPHOlXgg0Wah0sdTM%2FNkpfpFNIkx3Khtf2TeMXD%2BDX2uPn%2BcKTm2WzjBvgqTyTPsx0rQAkNyN5pUP3IDyCaSdnyB20FETmD%2B8iQQTubhCYAhLh0xpgNBdTDKce1CZv5TMnNMs%2Fa25YNLe9dGch40%2BQI8AJKgjE3rnu%2BieJ9UaXvL0cJw3wXarrxWOWuvUri9URHcvWR9pfBVGhx6Kw7wsswr35pGoYR%2B3C82O8MLvamNdXETQ381ZWiQdI4E2zwyjsCsL1tmkev4la2A%2FiiNy3rYBIIFbFBN5JNuMAS617TjkZex2uVZKFY7HGdPh%2BVeJFgJA%2BnK5BTv4mn7fBZwTNY1QIJgfO7krKEhkDCBznRESBLdWejqCq8G8oF%2BcPYg3Je%2BOm8Y5evdVE3bSXUAs2U%2FJ6DQDEd9ZkuaJVCxq%2BlHsdnFG3Qj1fuB1fj1b79aKxqNWFRSFKtmcx2RNSMdCEMJ%2BWzb0GOqUBOO%2FMd0gQfAOYcTx4pGeZr7N3LGqnGMmftdJLjmM54GbXzgdnGTOH%2BSJlgszBP%2B%2F2vqV53iDKuSYUhqA%2FuiqpbWn%2FE7nop6G4IO1Z23LElnQ3tkKewBOoKq7qNwgA%2F4nrznUXi67pDwbaHWKkZtS%2FVpN7BHoJsKKg%2B4I5839BmOzHlDvbhce2ZAc3GKLd4bUiPMngt6aBCRXlGd8yhNbo2%2FdtNbrd&X-Amz-Signature=1d119fdb342136500f5e00d3bec60d6574a94e021a59819a0489c9e90091c3b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
