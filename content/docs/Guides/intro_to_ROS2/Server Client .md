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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRF3AGZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBjYN%2F3Ghq9qf8yIOKIwTrHZHEc%2BZMjxFqG024%2B6BN7HAiBg01FSkRrqNdQKUZ4VtnBrtCAdQB0f%2FIx%2F89wz4PYooCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMSfWc%2BiI2C%2FpcxbcsKtwDKF%2BU0%2FOuG3o8CFtaLfnKsa41Gqnl8gnjsx%2FksI7ckzffM14Hkldl1qtSTc1Q%2BDJ%2FpPdl%2BM49ub6fiAJDQ%2BU7%2FheSogZ2l9RD1Nf8uAlAUMTiI%2BV4hIpTfKZHd6zcCRUV8WDtfJHQPaCTVJA3hjeFa6ePrGTCsErynaHD5VmTVsG6MRPlZzclGMSoukOWmCzf6VAR4ZSdMFxjvWDn5W9vdZPkQqHe4INShe5CGSyuuzGEcuNqPfZGm%2BFkW%2FXz0PNkKT%2B%2BNGh07RWod8%2FSvjliRwdEGCxcTmBj6VQyKVfggAP%2BVrGWLMSUF19GhxsnWvh0yYBGc2FboFe0oIzCXGf8ED3%2BoLeFevM8j2i%2FK%2F6d%2BskoL9cWILKyNog1hpKzIRzXUftlWwq%2BfJ4xzgvXv1WX%2FJSHc9WEv9lR5r41s5ydzfOgDjxjUQgm5ucRaOddo%2F4s2PdENMI219EB6vSGFSVFZRCBBDdQNZwB%2F7Dfi%2F0335dx%2BN10wzL1Izo12VhWQ3MaQ6mquZgZFwFdlXVyeUAZmwXm4u8y9n%2F4HBdNZS6iP0UADMeSGQ9v%2BckxOpZHpamVeaEB48alNLedL97wTz1V%2BJMaeTBB2vr706TmKVatddiUMbtauHwv1L%2BUivMwyrz5vQY6pgFlyRNUpJ9GRJ1jUAGAJhQa%2FxTOocnOedtGakH37oXwgC8AZVnyUgBSTKW9Doxw48Mi1OPfm2%2BWDuTRRqAbZbSaSv4JHwZwKnVwPExa1kfBSdACdMPodGlCunuers0Q5wh0ARJVRM8ww9jgf8bPQX3mJMTZ9kS0RhWeTkXZPzZVxJV1MIML5dUqmzV%2FwmYvqwzl5ctEWVAb6dN%2BgrPTHN2Yo731mKPK&X-Amz-Signature=4e7532aa47ef3494596b7ac98ad1105d637acb8d286d75095556cd49c37f0022&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRF3AGZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBjYN%2F3Ghq9qf8yIOKIwTrHZHEc%2BZMjxFqG024%2B6BN7HAiBg01FSkRrqNdQKUZ4VtnBrtCAdQB0f%2FIx%2F89wz4PYooCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMSfWc%2BiI2C%2FpcxbcsKtwDKF%2BU0%2FOuG3o8CFtaLfnKsa41Gqnl8gnjsx%2FksI7ckzffM14Hkldl1qtSTc1Q%2BDJ%2FpPdl%2BM49ub6fiAJDQ%2BU7%2FheSogZ2l9RD1Nf8uAlAUMTiI%2BV4hIpTfKZHd6zcCRUV8WDtfJHQPaCTVJA3hjeFa6ePrGTCsErynaHD5VmTVsG6MRPlZzclGMSoukOWmCzf6VAR4ZSdMFxjvWDn5W9vdZPkQqHe4INShe5CGSyuuzGEcuNqPfZGm%2BFkW%2FXz0PNkKT%2B%2BNGh07RWod8%2FSvjliRwdEGCxcTmBj6VQyKVfggAP%2BVrGWLMSUF19GhxsnWvh0yYBGc2FboFe0oIzCXGf8ED3%2BoLeFevM8j2i%2FK%2F6d%2BskoL9cWILKyNog1hpKzIRzXUftlWwq%2BfJ4xzgvXv1WX%2FJSHc9WEv9lR5r41s5ydzfOgDjxjUQgm5ucRaOddo%2F4s2PdENMI219EB6vSGFSVFZRCBBDdQNZwB%2F7Dfi%2F0335dx%2BN10wzL1Izo12VhWQ3MaQ6mquZgZFwFdlXVyeUAZmwXm4u8y9n%2F4HBdNZS6iP0UADMeSGQ9v%2BckxOpZHpamVeaEB48alNLedL97wTz1V%2BJMaeTBB2vr706TmKVatddiUMbtauHwv1L%2BUivMwyrz5vQY6pgFlyRNUpJ9GRJ1jUAGAJhQa%2FxTOocnOedtGakH37oXwgC8AZVnyUgBSTKW9Doxw48Mi1OPfm2%2BWDuTRRqAbZbSaSv4JHwZwKnVwPExa1kfBSdACdMPodGlCunuers0Q5wh0ARJVRM8ww9jgf8bPQX3mJMTZ9kS0RhWeTkXZPzZVxJV1MIML5dUqmzV%2FwmYvqwzl5ctEWVAb6dN%2BgrPTHN2Yo731mKPK&X-Amz-Signature=02f52af1c936594b7162c528dcf9a31e751eb9f24748892dfdeb2ed896e438ec&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRF3AGZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBjYN%2F3Ghq9qf8yIOKIwTrHZHEc%2BZMjxFqG024%2B6BN7HAiBg01FSkRrqNdQKUZ4VtnBrtCAdQB0f%2FIx%2F89wz4PYooCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMSfWc%2BiI2C%2FpcxbcsKtwDKF%2BU0%2FOuG3o8CFtaLfnKsa41Gqnl8gnjsx%2FksI7ckzffM14Hkldl1qtSTc1Q%2BDJ%2FpPdl%2BM49ub6fiAJDQ%2BU7%2FheSogZ2l9RD1Nf8uAlAUMTiI%2BV4hIpTfKZHd6zcCRUV8WDtfJHQPaCTVJA3hjeFa6ePrGTCsErynaHD5VmTVsG6MRPlZzclGMSoukOWmCzf6VAR4ZSdMFxjvWDn5W9vdZPkQqHe4INShe5CGSyuuzGEcuNqPfZGm%2BFkW%2FXz0PNkKT%2B%2BNGh07RWod8%2FSvjliRwdEGCxcTmBj6VQyKVfggAP%2BVrGWLMSUF19GhxsnWvh0yYBGc2FboFe0oIzCXGf8ED3%2BoLeFevM8j2i%2FK%2F6d%2BskoL9cWILKyNog1hpKzIRzXUftlWwq%2BfJ4xzgvXv1WX%2FJSHc9WEv9lR5r41s5ydzfOgDjxjUQgm5ucRaOddo%2F4s2PdENMI219EB6vSGFSVFZRCBBDdQNZwB%2F7Dfi%2F0335dx%2BN10wzL1Izo12VhWQ3MaQ6mquZgZFwFdlXVyeUAZmwXm4u8y9n%2F4HBdNZS6iP0UADMeSGQ9v%2BckxOpZHpamVeaEB48alNLedL97wTz1V%2BJMaeTBB2vr706TmKVatddiUMbtauHwv1L%2BUivMwyrz5vQY6pgFlyRNUpJ9GRJ1jUAGAJhQa%2FxTOocnOedtGakH37oXwgC8AZVnyUgBSTKW9Doxw48Mi1OPfm2%2BWDuTRRqAbZbSaSv4JHwZwKnVwPExa1kfBSdACdMPodGlCunuers0Q5wh0ARJVRM8ww9jgf8bPQX3mJMTZ9kS0RhWeTkXZPzZVxJV1MIML5dUqmzV%2FwmYvqwzl5ctEWVAb6dN%2BgrPTHN2Yo731mKPK&X-Amz-Signature=fdeeb371f16ffdfa3eeb1c28739c9d4f5e37dbc5f31dad347f9fb48e6a1f9ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRF3AGZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBjYN%2F3Ghq9qf8yIOKIwTrHZHEc%2BZMjxFqG024%2B6BN7HAiBg01FSkRrqNdQKUZ4VtnBrtCAdQB0f%2FIx%2F89wz4PYooCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMSfWc%2BiI2C%2FpcxbcsKtwDKF%2BU0%2FOuG3o8CFtaLfnKsa41Gqnl8gnjsx%2FksI7ckzffM14Hkldl1qtSTc1Q%2BDJ%2FpPdl%2BM49ub6fiAJDQ%2BU7%2FheSogZ2l9RD1Nf8uAlAUMTiI%2BV4hIpTfKZHd6zcCRUV8WDtfJHQPaCTVJA3hjeFa6ePrGTCsErynaHD5VmTVsG6MRPlZzclGMSoukOWmCzf6VAR4ZSdMFxjvWDn5W9vdZPkQqHe4INShe5CGSyuuzGEcuNqPfZGm%2BFkW%2FXz0PNkKT%2B%2BNGh07RWod8%2FSvjliRwdEGCxcTmBj6VQyKVfggAP%2BVrGWLMSUF19GhxsnWvh0yYBGc2FboFe0oIzCXGf8ED3%2BoLeFevM8j2i%2FK%2F6d%2BskoL9cWILKyNog1hpKzIRzXUftlWwq%2BfJ4xzgvXv1WX%2FJSHc9WEv9lR5r41s5ydzfOgDjxjUQgm5ucRaOddo%2F4s2PdENMI219EB6vSGFSVFZRCBBDdQNZwB%2F7Dfi%2F0335dx%2BN10wzL1Izo12VhWQ3MaQ6mquZgZFwFdlXVyeUAZmwXm4u8y9n%2F4HBdNZS6iP0UADMeSGQ9v%2BckxOpZHpamVeaEB48alNLedL97wTz1V%2BJMaeTBB2vr706TmKVatddiUMbtauHwv1L%2BUivMwyrz5vQY6pgFlyRNUpJ9GRJ1jUAGAJhQa%2FxTOocnOedtGakH37oXwgC8AZVnyUgBSTKW9Doxw48Mi1OPfm2%2BWDuTRRqAbZbSaSv4JHwZwKnVwPExa1kfBSdACdMPodGlCunuers0Q5wh0ARJVRM8ww9jgf8bPQX3mJMTZ9kS0RhWeTkXZPzZVxJV1MIML5dUqmzV%2FwmYvqwzl5ctEWVAb6dN%2BgrPTHN2Yo731mKPK&X-Amz-Signature=c81ea54030d61d3e9f2a6b0310eed20b1438a16d25625e56ec8120f091f59fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRF3AGZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBjYN%2F3Ghq9qf8yIOKIwTrHZHEc%2BZMjxFqG024%2B6BN7HAiBg01FSkRrqNdQKUZ4VtnBrtCAdQB0f%2FIx%2F89wz4PYooCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMSfWc%2BiI2C%2FpcxbcsKtwDKF%2BU0%2FOuG3o8CFtaLfnKsa41Gqnl8gnjsx%2FksI7ckzffM14Hkldl1qtSTc1Q%2BDJ%2FpPdl%2BM49ub6fiAJDQ%2BU7%2FheSogZ2l9RD1Nf8uAlAUMTiI%2BV4hIpTfKZHd6zcCRUV8WDtfJHQPaCTVJA3hjeFa6ePrGTCsErynaHD5VmTVsG6MRPlZzclGMSoukOWmCzf6VAR4ZSdMFxjvWDn5W9vdZPkQqHe4INShe5CGSyuuzGEcuNqPfZGm%2BFkW%2FXz0PNkKT%2B%2BNGh07RWod8%2FSvjliRwdEGCxcTmBj6VQyKVfggAP%2BVrGWLMSUF19GhxsnWvh0yYBGc2FboFe0oIzCXGf8ED3%2BoLeFevM8j2i%2FK%2F6d%2BskoL9cWILKyNog1hpKzIRzXUftlWwq%2BfJ4xzgvXv1WX%2FJSHc9WEv9lR5r41s5ydzfOgDjxjUQgm5ucRaOddo%2F4s2PdENMI219EB6vSGFSVFZRCBBDdQNZwB%2F7Dfi%2F0335dx%2BN10wzL1Izo12VhWQ3MaQ6mquZgZFwFdlXVyeUAZmwXm4u8y9n%2F4HBdNZS6iP0UADMeSGQ9v%2BckxOpZHpamVeaEB48alNLedL97wTz1V%2BJMaeTBB2vr706TmKVatddiUMbtauHwv1L%2BUivMwyrz5vQY6pgFlyRNUpJ9GRJ1jUAGAJhQa%2FxTOocnOedtGakH37oXwgC8AZVnyUgBSTKW9Doxw48Mi1OPfm2%2BWDuTRRqAbZbSaSv4JHwZwKnVwPExa1kfBSdACdMPodGlCunuers0Q5wh0ARJVRM8ww9jgf8bPQX3mJMTZ9kS0RhWeTkXZPzZVxJV1MIML5dUqmzV%2FwmYvqwzl5ctEWVAb6dN%2BgrPTHN2Yo731mKPK&X-Amz-Signature=6e75dbf4fda3d4e62a0a1d8243977a7dbe77bfc664c774ac19610fc013ba23de&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
