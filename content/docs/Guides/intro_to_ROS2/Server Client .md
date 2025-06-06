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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBQZP4P%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHiIdDtxuPoqrPPGm7jDYDSOLQ85vah%2FR%2BAckpHk%2BywYAiEAq%2B%2Bm%2FqipMYt4it8bw3fpepk24fZhiBQEje6AQMZsPmIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCDi%2BCxSr0S7c3vaTircAzA8obYMxNipqd14iMEwjUC0CK8pAeQg7Nf53zJev1u6jxVbXw%2B%2BJ7e7KKfR1fBxwCQr9m8tVfcxe0tDDlvztCklL6jDGTNVINVPE7273HphJ4DwmV%2BgG%2Fy0yHpljAMpbTm%2BF8ZhvUGuW4e%2F1an3GhW0s%2FJr%2BhD5tdXQjPm5WI3S0wNds4Pg79bTcoHEJMRPTdFIC0U3poMi2MxSHKxA6fkeg%2FZpGbaQ0DRnXB88YPvRK3IBJGkJ8FnUEIYZSgrAwyUqhjqxLn21wnOAsJfy4phskMYNbv7pHZyNnoO7%2B%2BwTGOToHqTfhDaUKcu%2BKit7FcbzHUD2v4Ka%2FhKo2zytHOI7svXEGZH7RDqC1iqEoqOYCidQaeQNth3JAm%2Bp4Vfx6VNVB7Cx6XOTFB7Rc4WaVEcS1tm%2FWGV8crBUupNe%2BUK182YquGgB3CvzSy8mkoSMFSOTZcWS%2F3l6yQLG7Qu6BFGqrq91bGhyd3z2Ohh3vGbbWK6i00kccndwDwKFvS2VYxrNHZCspy8zmun43%2FxI9s6pJ%2B%2F0%2BqcEISolN%2Fh%2Bg8wv6vc08yKjkJLS4N%2BksR723zHysdOdGJLsBXm5zow6veUSFJd4S3ccmqNFwMJojGxJKoyXOiHVIwdBWH6wMMn5iMIGOqUBXMoSIdn2MfqsvGiRV7WutmfcwG2mL45rlHSTnmKqRqikbNdErLPCv4DHSiavaqKAHmiXRglcMoqda8R4R9VWGZ4V%2BBG41NhwMAPEKKUOnHdXgyc6YPgX7RhehEqS4XTW9YhKHIcLNN220nVRWIgchvCJPLMaVhOm5NL1co0%2F%2F5foWbcYBPKGQM4PSnTJ14DwunV8e%2FGjwxlx9GSn82jYPhclLu%2Br&X-Amz-Signature=67b215efb078ca84edde0436816ec33a6f0c79ee34597b40c321c64c9a26e9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBQZP4P%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHiIdDtxuPoqrPPGm7jDYDSOLQ85vah%2FR%2BAckpHk%2BywYAiEAq%2B%2Bm%2FqipMYt4it8bw3fpepk24fZhiBQEje6AQMZsPmIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCDi%2BCxSr0S7c3vaTircAzA8obYMxNipqd14iMEwjUC0CK8pAeQg7Nf53zJev1u6jxVbXw%2B%2BJ7e7KKfR1fBxwCQr9m8tVfcxe0tDDlvztCklL6jDGTNVINVPE7273HphJ4DwmV%2BgG%2Fy0yHpljAMpbTm%2BF8ZhvUGuW4e%2F1an3GhW0s%2FJr%2BhD5tdXQjPm5WI3S0wNds4Pg79bTcoHEJMRPTdFIC0U3poMi2MxSHKxA6fkeg%2FZpGbaQ0DRnXB88YPvRK3IBJGkJ8FnUEIYZSgrAwyUqhjqxLn21wnOAsJfy4phskMYNbv7pHZyNnoO7%2B%2BwTGOToHqTfhDaUKcu%2BKit7FcbzHUD2v4Ka%2FhKo2zytHOI7svXEGZH7RDqC1iqEoqOYCidQaeQNth3JAm%2Bp4Vfx6VNVB7Cx6XOTFB7Rc4WaVEcS1tm%2FWGV8crBUupNe%2BUK182YquGgB3CvzSy8mkoSMFSOTZcWS%2F3l6yQLG7Qu6BFGqrq91bGhyd3z2Ohh3vGbbWK6i00kccndwDwKFvS2VYxrNHZCspy8zmun43%2FxI9s6pJ%2B%2F0%2BqcEISolN%2Fh%2Bg8wv6vc08yKjkJLS4N%2BksR723zHysdOdGJLsBXm5zow6veUSFJd4S3ccmqNFwMJojGxJKoyXOiHVIwdBWH6wMMn5iMIGOqUBXMoSIdn2MfqsvGiRV7WutmfcwG2mL45rlHSTnmKqRqikbNdErLPCv4DHSiavaqKAHmiXRglcMoqda8R4R9VWGZ4V%2BBG41NhwMAPEKKUOnHdXgyc6YPgX7RhehEqS4XTW9YhKHIcLNN220nVRWIgchvCJPLMaVhOm5NL1co0%2F%2F5foWbcYBPKGQM4PSnTJ14DwunV8e%2FGjwxlx9GSn82jYPhclLu%2Br&X-Amz-Signature=cc10d9bafdee9db059bfc051d559158e01eebb9ee3f08853914292a749553d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBQZP4P%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHiIdDtxuPoqrPPGm7jDYDSOLQ85vah%2FR%2BAckpHk%2BywYAiEAq%2B%2Bm%2FqipMYt4it8bw3fpepk24fZhiBQEje6AQMZsPmIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCDi%2BCxSr0S7c3vaTircAzA8obYMxNipqd14iMEwjUC0CK8pAeQg7Nf53zJev1u6jxVbXw%2B%2BJ7e7KKfR1fBxwCQr9m8tVfcxe0tDDlvztCklL6jDGTNVINVPE7273HphJ4DwmV%2BgG%2Fy0yHpljAMpbTm%2BF8ZhvUGuW4e%2F1an3GhW0s%2FJr%2BhD5tdXQjPm5WI3S0wNds4Pg79bTcoHEJMRPTdFIC0U3poMi2MxSHKxA6fkeg%2FZpGbaQ0DRnXB88YPvRK3IBJGkJ8FnUEIYZSgrAwyUqhjqxLn21wnOAsJfy4phskMYNbv7pHZyNnoO7%2B%2BwTGOToHqTfhDaUKcu%2BKit7FcbzHUD2v4Ka%2FhKo2zytHOI7svXEGZH7RDqC1iqEoqOYCidQaeQNth3JAm%2Bp4Vfx6VNVB7Cx6XOTFB7Rc4WaVEcS1tm%2FWGV8crBUupNe%2BUK182YquGgB3CvzSy8mkoSMFSOTZcWS%2F3l6yQLG7Qu6BFGqrq91bGhyd3z2Ohh3vGbbWK6i00kccndwDwKFvS2VYxrNHZCspy8zmun43%2FxI9s6pJ%2B%2F0%2BqcEISolN%2Fh%2Bg8wv6vc08yKjkJLS4N%2BksR723zHysdOdGJLsBXm5zow6veUSFJd4S3ccmqNFwMJojGxJKoyXOiHVIwdBWH6wMMn5iMIGOqUBXMoSIdn2MfqsvGiRV7WutmfcwG2mL45rlHSTnmKqRqikbNdErLPCv4DHSiavaqKAHmiXRglcMoqda8R4R9VWGZ4V%2BBG41NhwMAPEKKUOnHdXgyc6YPgX7RhehEqS4XTW9YhKHIcLNN220nVRWIgchvCJPLMaVhOm5NL1co0%2F%2F5foWbcYBPKGQM4PSnTJ14DwunV8e%2FGjwxlx9GSn82jYPhclLu%2Br&X-Amz-Signature=4778922ee5ba5fa32860ab3c800271c1e78df7e73843ffeeac54df0ce880b70b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBQZP4P%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHiIdDtxuPoqrPPGm7jDYDSOLQ85vah%2FR%2BAckpHk%2BywYAiEAq%2B%2Bm%2FqipMYt4it8bw3fpepk24fZhiBQEje6AQMZsPmIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCDi%2BCxSr0S7c3vaTircAzA8obYMxNipqd14iMEwjUC0CK8pAeQg7Nf53zJev1u6jxVbXw%2B%2BJ7e7KKfR1fBxwCQr9m8tVfcxe0tDDlvztCklL6jDGTNVINVPE7273HphJ4DwmV%2BgG%2Fy0yHpljAMpbTm%2BF8ZhvUGuW4e%2F1an3GhW0s%2FJr%2BhD5tdXQjPm5WI3S0wNds4Pg79bTcoHEJMRPTdFIC0U3poMi2MxSHKxA6fkeg%2FZpGbaQ0DRnXB88YPvRK3IBJGkJ8FnUEIYZSgrAwyUqhjqxLn21wnOAsJfy4phskMYNbv7pHZyNnoO7%2B%2BwTGOToHqTfhDaUKcu%2BKit7FcbzHUD2v4Ka%2FhKo2zytHOI7svXEGZH7RDqC1iqEoqOYCidQaeQNth3JAm%2Bp4Vfx6VNVB7Cx6XOTFB7Rc4WaVEcS1tm%2FWGV8crBUupNe%2BUK182YquGgB3CvzSy8mkoSMFSOTZcWS%2F3l6yQLG7Qu6BFGqrq91bGhyd3z2Ohh3vGbbWK6i00kccndwDwKFvS2VYxrNHZCspy8zmun43%2FxI9s6pJ%2B%2F0%2BqcEISolN%2Fh%2Bg8wv6vc08yKjkJLS4N%2BksR723zHysdOdGJLsBXm5zow6veUSFJd4S3ccmqNFwMJojGxJKoyXOiHVIwdBWH6wMMn5iMIGOqUBXMoSIdn2MfqsvGiRV7WutmfcwG2mL45rlHSTnmKqRqikbNdErLPCv4DHSiavaqKAHmiXRglcMoqda8R4R9VWGZ4V%2BBG41NhwMAPEKKUOnHdXgyc6YPgX7RhehEqS4XTW9YhKHIcLNN220nVRWIgchvCJPLMaVhOm5NL1co0%2F%2F5foWbcYBPKGQM4PSnTJ14DwunV8e%2FGjwxlx9GSn82jYPhclLu%2Br&X-Amz-Signature=ba35c708cd48827fcb7d15fe48ce20a8d83432f5628bc9600f18d8ca98b67c93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBQZP4P%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHiIdDtxuPoqrPPGm7jDYDSOLQ85vah%2FR%2BAckpHk%2BywYAiEAq%2B%2Bm%2FqipMYt4it8bw3fpepk24fZhiBQEje6AQMZsPmIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCDi%2BCxSr0S7c3vaTircAzA8obYMxNipqd14iMEwjUC0CK8pAeQg7Nf53zJev1u6jxVbXw%2B%2BJ7e7KKfR1fBxwCQr9m8tVfcxe0tDDlvztCklL6jDGTNVINVPE7273HphJ4DwmV%2BgG%2Fy0yHpljAMpbTm%2BF8ZhvUGuW4e%2F1an3GhW0s%2FJr%2BhD5tdXQjPm5WI3S0wNds4Pg79bTcoHEJMRPTdFIC0U3poMi2MxSHKxA6fkeg%2FZpGbaQ0DRnXB88YPvRK3IBJGkJ8FnUEIYZSgrAwyUqhjqxLn21wnOAsJfy4phskMYNbv7pHZyNnoO7%2B%2BwTGOToHqTfhDaUKcu%2BKit7FcbzHUD2v4Ka%2FhKo2zytHOI7svXEGZH7RDqC1iqEoqOYCidQaeQNth3JAm%2Bp4Vfx6VNVB7Cx6XOTFB7Rc4WaVEcS1tm%2FWGV8crBUupNe%2BUK182YquGgB3CvzSy8mkoSMFSOTZcWS%2F3l6yQLG7Qu6BFGqrq91bGhyd3z2Ohh3vGbbWK6i00kccndwDwKFvS2VYxrNHZCspy8zmun43%2FxI9s6pJ%2B%2F0%2BqcEISolN%2Fh%2Bg8wv6vc08yKjkJLS4N%2BksR723zHysdOdGJLsBXm5zow6veUSFJd4S3ccmqNFwMJojGxJKoyXOiHVIwdBWH6wMMn5iMIGOqUBXMoSIdn2MfqsvGiRV7WutmfcwG2mL45rlHSTnmKqRqikbNdErLPCv4DHSiavaqKAHmiXRglcMoqda8R4R9VWGZ4V%2BBG41NhwMAPEKKUOnHdXgyc6YPgX7RhehEqS4XTW9YhKHIcLNN220nVRWIgchvCJPLMaVhOm5NL1co0%2F%2F5foWbcYBPKGQM4PSnTJ14DwunV8e%2FGjwxlx9GSn82jYPhclLu%2Br&X-Amz-Signature=c24d6b9d2174f3a156a7a469e323bc85db67015bade5ae79b8c68e8712ed9cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
