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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIC3XG2E%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDsnvMkjTJF8SZs4OKQBPCEyMBeNlqzZFOTtaNNU0PLKgIhALp6T%2BoRQB2rHug64PpOiaMor0xF6zPPjltHPD%2Bfy1%2BEKv8DCHEQABoMNjM3NDIzMTgzODA1IgxRCXc3YgoD85Xw2%2B4q3AN%2FEPjf3CxUliztVWNwKZ2S2n2JHNhyDJMCmfN7oc3xt%2FJBUoT7OmD%2F%2BGTjj9sQJwc8uIH0yNwFdnM3s0CQtvgRZOitLL%2BF1Z%2FyEQQKrEg%2BXUMoYFmFuFzdND1YiK%2FhrOubu15SG8Ijy00y0x%2FAciwWrgUp72EgatMFE5%2BE9J1oVqAjA4F37qZExvnpej%2FlHbcPV257hS1qRw9jmKIA2v%2F6Wa71Tf2vXdJ4XU37UBKRlCtsifyIgXli%2FnYEpGWgnH1TCkbuby5G1m4EKrXP%2Fec%2F7A8%2FspIMJjhIJ0DLU81mEzTqlX4bW6QAmzXu%2FdlKBgX4UprPijHcYFybDPpnTrk%2FAVxyOZ2LpVNJxfl8jzeQCFwOWL2qhRu%2F6acS6R4157PPK8gAqqu3HuOdHoUMyt3%2BqAtJkY6bDDAfRL3%2FzjIq5bbMFxMAPI5zauou7SVupQXxNvMZbqettFB9AlMO%2FR9X0BWKtF8ahvdL6gSuABSB6IrBM3uhNdKxjmGmTR%2B9dVpZD8jbsaORIOaA1Zg01r3RHXkEEL1kwOiEP7WHUDJ517cnIR9YkqPH09U1FXMJ7ODoKZ8L4EjU2I2BVF5j9ZEu%2BVPs2J3jVnC26ny8j7s7WqtSX%2Bw7gNT8623w9TCixZ6%2FBjqkAdmShdyDEmANugWCW%2Fq3bBTHq%2FL%2Fpfdt0HyK7aSG%2BpKXaTk0iM3lmYeC1ziVbw2b9TEZ1ZZFnmx8XimGTdE1K%2Bhv5TK%2Fnb9Hwv9dd1%2FpVzWkqHwHEWcGUgTwNKM%2Fr7ShnG83L5Cv%2FXwC5G%2Bhjxl1QzkAlW5tKmGkGPEsHrAVL4LnKRKwWGHipGuZ4m2qT%2Fv%2Bn%2BIK0gffYeDe6G4a2K2BpMg86Uvm&X-Amz-Signature=987ecc328a0dad1e8c5064450031b081dfedc91954f52cb44e0ac2256cee5870&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIC3XG2E%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDsnvMkjTJF8SZs4OKQBPCEyMBeNlqzZFOTtaNNU0PLKgIhALp6T%2BoRQB2rHug64PpOiaMor0xF6zPPjltHPD%2Bfy1%2BEKv8DCHEQABoMNjM3NDIzMTgzODA1IgxRCXc3YgoD85Xw2%2B4q3AN%2FEPjf3CxUliztVWNwKZ2S2n2JHNhyDJMCmfN7oc3xt%2FJBUoT7OmD%2F%2BGTjj9sQJwc8uIH0yNwFdnM3s0CQtvgRZOitLL%2BF1Z%2FyEQQKrEg%2BXUMoYFmFuFzdND1YiK%2FhrOubu15SG8Ijy00y0x%2FAciwWrgUp72EgatMFE5%2BE9J1oVqAjA4F37qZExvnpej%2FlHbcPV257hS1qRw9jmKIA2v%2F6Wa71Tf2vXdJ4XU37UBKRlCtsifyIgXli%2FnYEpGWgnH1TCkbuby5G1m4EKrXP%2Fec%2F7A8%2FspIMJjhIJ0DLU81mEzTqlX4bW6QAmzXu%2FdlKBgX4UprPijHcYFybDPpnTrk%2FAVxyOZ2LpVNJxfl8jzeQCFwOWL2qhRu%2F6acS6R4157PPK8gAqqu3HuOdHoUMyt3%2BqAtJkY6bDDAfRL3%2FzjIq5bbMFxMAPI5zauou7SVupQXxNvMZbqettFB9AlMO%2FR9X0BWKtF8ahvdL6gSuABSB6IrBM3uhNdKxjmGmTR%2B9dVpZD8jbsaORIOaA1Zg01r3RHXkEEL1kwOiEP7WHUDJ517cnIR9YkqPH09U1FXMJ7ODoKZ8L4EjU2I2BVF5j9ZEu%2BVPs2J3jVnC26ny8j7s7WqtSX%2Bw7gNT8623w9TCixZ6%2FBjqkAdmShdyDEmANugWCW%2Fq3bBTHq%2FL%2Fpfdt0HyK7aSG%2BpKXaTk0iM3lmYeC1ziVbw2b9TEZ1ZZFnmx8XimGTdE1K%2Bhv5TK%2Fnb9Hwv9dd1%2FpVzWkqHwHEWcGUgTwNKM%2Fr7ShnG83L5Cv%2FXwC5G%2Bhjxl1QzkAlW5tKmGkGPEsHrAVL4LnKRKwWGHipGuZ4m2qT%2Fv%2Bn%2BIK0gffYeDe6G4a2K2BpMg86Uvm&X-Amz-Signature=738bad98a7c8075927c69ccba5cf76507529d6151e8df65832b0b2e113d18b07&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIC3XG2E%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDsnvMkjTJF8SZs4OKQBPCEyMBeNlqzZFOTtaNNU0PLKgIhALp6T%2BoRQB2rHug64PpOiaMor0xF6zPPjltHPD%2Bfy1%2BEKv8DCHEQABoMNjM3NDIzMTgzODA1IgxRCXc3YgoD85Xw2%2B4q3AN%2FEPjf3CxUliztVWNwKZ2S2n2JHNhyDJMCmfN7oc3xt%2FJBUoT7OmD%2F%2BGTjj9sQJwc8uIH0yNwFdnM3s0CQtvgRZOitLL%2BF1Z%2FyEQQKrEg%2BXUMoYFmFuFzdND1YiK%2FhrOubu15SG8Ijy00y0x%2FAciwWrgUp72EgatMFE5%2BE9J1oVqAjA4F37qZExvnpej%2FlHbcPV257hS1qRw9jmKIA2v%2F6Wa71Tf2vXdJ4XU37UBKRlCtsifyIgXli%2FnYEpGWgnH1TCkbuby5G1m4EKrXP%2Fec%2F7A8%2FspIMJjhIJ0DLU81mEzTqlX4bW6QAmzXu%2FdlKBgX4UprPijHcYFybDPpnTrk%2FAVxyOZ2LpVNJxfl8jzeQCFwOWL2qhRu%2F6acS6R4157PPK8gAqqu3HuOdHoUMyt3%2BqAtJkY6bDDAfRL3%2FzjIq5bbMFxMAPI5zauou7SVupQXxNvMZbqettFB9AlMO%2FR9X0BWKtF8ahvdL6gSuABSB6IrBM3uhNdKxjmGmTR%2B9dVpZD8jbsaORIOaA1Zg01r3RHXkEEL1kwOiEP7WHUDJ517cnIR9YkqPH09U1FXMJ7ODoKZ8L4EjU2I2BVF5j9ZEu%2BVPs2J3jVnC26ny8j7s7WqtSX%2Bw7gNT8623w9TCixZ6%2FBjqkAdmShdyDEmANugWCW%2Fq3bBTHq%2FL%2Fpfdt0HyK7aSG%2BpKXaTk0iM3lmYeC1ziVbw2b9TEZ1ZZFnmx8XimGTdE1K%2Bhv5TK%2Fnb9Hwv9dd1%2FpVzWkqHwHEWcGUgTwNKM%2Fr7ShnG83L5Cv%2FXwC5G%2Bhjxl1QzkAlW5tKmGkGPEsHrAVL4LnKRKwWGHipGuZ4m2qT%2Fv%2Bn%2BIK0gffYeDe6G4a2K2BpMg86Uvm&X-Amz-Signature=a9f6609d5d646331c2a2a92f11ef345f2dc2b7ea6436a3c77e4d13b343a9704a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIC3XG2E%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDsnvMkjTJF8SZs4OKQBPCEyMBeNlqzZFOTtaNNU0PLKgIhALp6T%2BoRQB2rHug64PpOiaMor0xF6zPPjltHPD%2Bfy1%2BEKv8DCHEQABoMNjM3NDIzMTgzODA1IgxRCXc3YgoD85Xw2%2B4q3AN%2FEPjf3CxUliztVWNwKZ2S2n2JHNhyDJMCmfN7oc3xt%2FJBUoT7OmD%2F%2BGTjj9sQJwc8uIH0yNwFdnM3s0CQtvgRZOitLL%2BF1Z%2FyEQQKrEg%2BXUMoYFmFuFzdND1YiK%2FhrOubu15SG8Ijy00y0x%2FAciwWrgUp72EgatMFE5%2BE9J1oVqAjA4F37qZExvnpej%2FlHbcPV257hS1qRw9jmKIA2v%2F6Wa71Tf2vXdJ4XU37UBKRlCtsifyIgXli%2FnYEpGWgnH1TCkbuby5G1m4EKrXP%2Fec%2F7A8%2FspIMJjhIJ0DLU81mEzTqlX4bW6QAmzXu%2FdlKBgX4UprPijHcYFybDPpnTrk%2FAVxyOZ2LpVNJxfl8jzeQCFwOWL2qhRu%2F6acS6R4157PPK8gAqqu3HuOdHoUMyt3%2BqAtJkY6bDDAfRL3%2FzjIq5bbMFxMAPI5zauou7SVupQXxNvMZbqettFB9AlMO%2FR9X0BWKtF8ahvdL6gSuABSB6IrBM3uhNdKxjmGmTR%2B9dVpZD8jbsaORIOaA1Zg01r3RHXkEEL1kwOiEP7WHUDJ517cnIR9YkqPH09U1FXMJ7ODoKZ8L4EjU2I2BVF5j9ZEu%2BVPs2J3jVnC26ny8j7s7WqtSX%2Bw7gNT8623w9TCixZ6%2FBjqkAdmShdyDEmANugWCW%2Fq3bBTHq%2FL%2Fpfdt0HyK7aSG%2BpKXaTk0iM3lmYeC1ziVbw2b9TEZ1ZZFnmx8XimGTdE1K%2Bhv5TK%2Fnb9Hwv9dd1%2FpVzWkqHwHEWcGUgTwNKM%2Fr7ShnG83L5Cv%2FXwC5G%2Bhjxl1QzkAlW5tKmGkGPEsHrAVL4LnKRKwWGHipGuZ4m2qT%2Fv%2Bn%2BIK0gffYeDe6G4a2K2BpMg86Uvm&X-Amz-Signature=d2f48fa760de08e83f2730e1de887c768eb53213e23dee33e426e3e3eff47d86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIC3XG2E%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDsnvMkjTJF8SZs4OKQBPCEyMBeNlqzZFOTtaNNU0PLKgIhALp6T%2BoRQB2rHug64PpOiaMor0xF6zPPjltHPD%2Bfy1%2BEKv8DCHEQABoMNjM3NDIzMTgzODA1IgxRCXc3YgoD85Xw2%2B4q3AN%2FEPjf3CxUliztVWNwKZ2S2n2JHNhyDJMCmfN7oc3xt%2FJBUoT7OmD%2F%2BGTjj9sQJwc8uIH0yNwFdnM3s0CQtvgRZOitLL%2BF1Z%2FyEQQKrEg%2BXUMoYFmFuFzdND1YiK%2FhrOubu15SG8Ijy00y0x%2FAciwWrgUp72EgatMFE5%2BE9J1oVqAjA4F37qZExvnpej%2FlHbcPV257hS1qRw9jmKIA2v%2F6Wa71Tf2vXdJ4XU37UBKRlCtsifyIgXli%2FnYEpGWgnH1TCkbuby5G1m4EKrXP%2Fec%2F7A8%2FspIMJjhIJ0DLU81mEzTqlX4bW6QAmzXu%2FdlKBgX4UprPijHcYFybDPpnTrk%2FAVxyOZ2LpVNJxfl8jzeQCFwOWL2qhRu%2F6acS6R4157PPK8gAqqu3HuOdHoUMyt3%2BqAtJkY6bDDAfRL3%2FzjIq5bbMFxMAPI5zauou7SVupQXxNvMZbqettFB9AlMO%2FR9X0BWKtF8ahvdL6gSuABSB6IrBM3uhNdKxjmGmTR%2B9dVpZD8jbsaORIOaA1Zg01r3RHXkEEL1kwOiEP7WHUDJ517cnIR9YkqPH09U1FXMJ7ODoKZ8L4EjU2I2BVF5j9ZEu%2BVPs2J3jVnC26ny8j7s7WqtSX%2Bw7gNT8623w9TCixZ6%2FBjqkAdmShdyDEmANugWCW%2Fq3bBTHq%2FL%2Fpfdt0HyK7aSG%2BpKXaTk0iM3lmYeC1ziVbw2b9TEZ1ZZFnmx8XimGTdE1K%2Bhv5TK%2Fnb9Hwv9dd1%2FpVzWkqHwHEWcGUgTwNKM%2Fr7ShnG83L5Cv%2FXwC5G%2Bhjxl1QzkAlW5tKmGkGPEsHrAVL4LnKRKwWGHipGuZ4m2qT%2Fv%2Bn%2BIK0gffYeDe6G4a2K2BpMg86Uvm&X-Amz-Signature=045bb42effa84d264ca197ad464351c209a0e66330ddb6a756be435282f8db15&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
