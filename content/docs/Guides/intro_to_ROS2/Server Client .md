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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YODLD2VV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC9pwkIj2S%2BNAJ4FdTCdXdC%2Fp47AcUPEXyAfLcUJhmoTgIhAP3FZ%2BMw39rOlxTMlyRvXSJ5YfOLU0RaVseeXRalHE5ZKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfWVfd8pLtIJC6U4Iq3AMh7cNZ1iNi9QCyx8CXLU7lud3f5h93S8OGsreldoVjn9F6xUrbYJhkdZ5Q5xA3uekXSmQZiAO2iR8HGT1eoj%2FVRejKFa8ZIM5gAKg1YKhZeFOWtxI902JYv6%2BnDvN%2By5QpjXAL7el%2FZuZ2O%2B5Md%2FiVZtyK8WVJ5ZKep937KLlLU%2FzazRes61rPZgMJBp%2F0jbR523Jz%2FqY4gkhCDn6LIf%2Faznvxtv96tT3FbsiGPK5CiX4IRdyyupG%2B2e3yh%2FOpdSiKgsKo8v%2F%2F9O2kSsWHADYegKlOgLNEI%2BbcyWOm5J%2Bgnz4PJBxRL756KhpNQzTPZlo2ldcOlf5hZE5Wa2tIu0DVNcNdECoJzvG%2BPjoqrLG5aFHB8uwBpSSDsf%2BlTubEIGNvw%2BwJ0UNSSD2VyDXZwW%2FSkNipaMyzLsZKSWOAv7Ah6gMFmsfeePrpZJvKaIdgq1GNo7uTTTWpcwu1xa2erE8JADKJ0u%2BnwHBOVgHEPQAVE%2Fqv44libyVZ0VwSt7qsy3V%2FZ5YYptVW3X82J0NBc87nUN%2FPMfNEeLxsM1G17a3ELrmCWlc0CRcUZ6WHzZr9YeI1g0vv1n8fpWBGNQQTkqv6XiIqjDFozMxkYgPJ%2BBP2EBXRcU9bzEHCnEXEgjC34bzBBjqkASWNGmSfjJI8i6ujvXCfvqjB4sLzi3piQjrVtqTXpltWymWUrqM%2FIklKCmwQMh%2FR1tHf03TIsSngQg7OmqIvlC%2Be3CBOzPKShX4Tvnp5U2xCmCnQAGWyi4AXxJ2b84v%2FKOS8IRour6jawA8je8z17IVNEDPFFO9hnd6yr8k3%2BzTK%2FKguLxDrTksFtA23G9GSx85XsWKdHy3FFU700eLI%2BfRDd5DY&X-Amz-Signature=48c2a3ebc37dbabd738a0aa950c8d5f9ac41b4c4df230b2825cde219ced74637&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YODLD2VV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC9pwkIj2S%2BNAJ4FdTCdXdC%2Fp47AcUPEXyAfLcUJhmoTgIhAP3FZ%2BMw39rOlxTMlyRvXSJ5YfOLU0RaVseeXRalHE5ZKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfWVfd8pLtIJC6U4Iq3AMh7cNZ1iNi9QCyx8CXLU7lud3f5h93S8OGsreldoVjn9F6xUrbYJhkdZ5Q5xA3uekXSmQZiAO2iR8HGT1eoj%2FVRejKFa8ZIM5gAKg1YKhZeFOWtxI902JYv6%2BnDvN%2By5QpjXAL7el%2FZuZ2O%2B5Md%2FiVZtyK8WVJ5ZKep937KLlLU%2FzazRes61rPZgMJBp%2F0jbR523Jz%2FqY4gkhCDn6LIf%2Faznvxtv96tT3FbsiGPK5CiX4IRdyyupG%2B2e3yh%2FOpdSiKgsKo8v%2F%2F9O2kSsWHADYegKlOgLNEI%2BbcyWOm5J%2Bgnz4PJBxRL756KhpNQzTPZlo2ldcOlf5hZE5Wa2tIu0DVNcNdECoJzvG%2BPjoqrLG5aFHB8uwBpSSDsf%2BlTubEIGNvw%2BwJ0UNSSD2VyDXZwW%2FSkNipaMyzLsZKSWOAv7Ah6gMFmsfeePrpZJvKaIdgq1GNo7uTTTWpcwu1xa2erE8JADKJ0u%2BnwHBOVgHEPQAVE%2Fqv44libyVZ0VwSt7qsy3V%2FZ5YYptVW3X82J0NBc87nUN%2FPMfNEeLxsM1G17a3ELrmCWlc0CRcUZ6WHzZr9YeI1g0vv1n8fpWBGNQQTkqv6XiIqjDFozMxkYgPJ%2BBP2EBXRcU9bzEHCnEXEgjC34bzBBjqkASWNGmSfjJI8i6ujvXCfvqjB4sLzi3piQjrVtqTXpltWymWUrqM%2FIklKCmwQMh%2FR1tHf03TIsSngQg7OmqIvlC%2Be3CBOzPKShX4Tvnp5U2xCmCnQAGWyi4AXxJ2b84v%2FKOS8IRour6jawA8je8z17IVNEDPFFO9hnd6yr8k3%2BzTK%2FKguLxDrTksFtA23G9GSx85XsWKdHy3FFU700eLI%2BfRDd5DY&X-Amz-Signature=cd1ebf09fd40663c4332986f22b3f36589a5a22f67c0571a37d066f7040ca0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YODLD2VV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC9pwkIj2S%2BNAJ4FdTCdXdC%2Fp47AcUPEXyAfLcUJhmoTgIhAP3FZ%2BMw39rOlxTMlyRvXSJ5YfOLU0RaVseeXRalHE5ZKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfWVfd8pLtIJC6U4Iq3AMh7cNZ1iNi9QCyx8CXLU7lud3f5h93S8OGsreldoVjn9F6xUrbYJhkdZ5Q5xA3uekXSmQZiAO2iR8HGT1eoj%2FVRejKFa8ZIM5gAKg1YKhZeFOWtxI902JYv6%2BnDvN%2By5QpjXAL7el%2FZuZ2O%2B5Md%2FiVZtyK8WVJ5ZKep937KLlLU%2FzazRes61rPZgMJBp%2F0jbR523Jz%2FqY4gkhCDn6LIf%2Faznvxtv96tT3FbsiGPK5CiX4IRdyyupG%2B2e3yh%2FOpdSiKgsKo8v%2F%2F9O2kSsWHADYegKlOgLNEI%2BbcyWOm5J%2Bgnz4PJBxRL756KhpNQzTPZlo2ldcOlf5hZE5Wa2tIu0DVNcNdECoJzvG%2BPjoqrLG5aFHB8uwBpSSDsf%2BlTubEIGNvw%2BwJ0UNSSD2VyDXZwW%2FSkNipaMyzLsZKSWOAv7Ah6gMFmsfeePrpZJvKaIdgq1GNo7uTTTWpcwu1xa2erE8JADKJ0u%2BnwHBOVgHEPQAVE%2Fqv44libyVZ0VwSt7qsy3V%2FZ5YYptVW3X82J0NBc87nUN%2FPMfNEeLxsM1G17a3ELrmCWlc0CRcUZ6WHzZr9YeI1g0vv1n8fpWBGNQQTkqv6XiIqjDFozMxkYgPJ%2BBP2EBXRcU9bzEHCnEXEgjC34bzBBjqkASWNGmSfjJI8i6ujvXCfvqjB4sLzi3piQjrVtqTXpltWymWUrqM%2FIklKCmwQMh%2FR1tHf03TIsSngQg7OmqIvlC%2Be3CBOzPKShX4Tvnp5U2xCmCnQAGWyi4AXxJ2b84v%2FKOS8IRour6jawA8je8z17IVNEDPFFO9hnd6yr8k3%2BzTK%2FKguLxDrTksFtA23G9GSx85XsWKdHy3FFU700eLI%2BfRDd5DY&X-Amz-Signature=d4cbb923841aaa9282744f81a122a4e6ae200e5ee0ee0023d400ee604e8773c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YODLD2VV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC9pwkIj2S%2BNAJ4FdTCdXdC%2Fp47AcUPEXyAfLcUJhmoTgIhAP3FZ%2BMw39rOlxTMlyRvXSJ5YfOLU0RaVseeXRalHE5ZKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfWVfd8pLtIJC6U4Iq3AMh7cNZ1iNi9QCyx8CXLU7lud3f5h93S8OGsreldoVjn9F6xUrbYJhkdZ5Q5xA3uekXSmQZiAO2iR8HGT1eoj%2FVRejKFa8ZIM5gAKg1YKhZeFOWtxI902JYv6%2BnDvN%2By5QpjXAL7el%2FZuZ2O%2B5Md%2FiVZtyK8WVJ5ZKep937KLlLU%2FzazRes61rPZgMJBp%2F0jbR523Jz%2FqY4gkhCDn6LIf%2Faznvxtv96tT3FbsiGPK5CiX4IRdyyupG%2B2e3yh%2FOpdSiKgsKo8v%2F%2F9O2kSsWHADYegKlOgLNEI%2BbcyWOm5J%2Bgnz4PJBxRL756KhpNQzTPZlo2ldcOlf5hZE5Wa2tIu0DVNcNdECoJzvG%2BPjoqrLG5aFHB8uwBpSSDsf%2BlTubEIGNvw%2BwJ0UNSSD2VyDXZwW%2FSkNipaMyzLsZKSWOAv7Ah6gMFmsfeePrpZJvKaIdgq1GNo7uTTTWpcwu1xa2erE8JADKJ0u%2BnwHBOVgHEPQAVE%2Fqv44libyVZ0VwSt7qsy3V%2FZ5YYptVW3X82J0NBc87nUN%2FPMfNEeLxsM1G17a3ELrmCWlc0CRcUZ6WHzZr9YeI1g0vv1n8fpWBGNQQTkqv6XiIqjDFozMxkYgPJ%2BBP2EBXRcU9bzEHCnEXEgjC34bzBBjqkASWNGmSfjJI8i6ujvXCfvqjB4sLzi3piQjrVtqTXpltWymWUrqM%2FIklKCmwQMh%2FR1tHf03TIsSngQg7OmqIvlC%2Be3CBOzPKShX4Tvnp5U2xCmCnQAGWyi4AXxJ2b84v%2FKOS8IRour6jawA8je8z17IVNEDPFFO9hnd6yr8k3%2BzTK%2FKguLxDrTksFtA23G9GSx85XsWKdHy3FFU700eLI%2BfRDd5DY&X-Amz-Signature=385f96d22da39065108fda3ccd9b2633b2180b468810ee90d90c57ca7693387d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YODLD2VV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC9pwkIj2S%2BNAJ4FdTCdXdC%2Fp47AcUPEXyAfLcUJhmoTgIhAP3FZ%2BMw39rOlxTMlyRvXSJ5YfOLU0RaVseeXRalHE5ZKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfWVfd8pLtIJC6U4Iq3AMh7cNZ1iNi9QCyx8CXLU7lud3f5h93S8OGsreldoVjn9F6xUrbYJhkdZ5Q5xA3uekXSmQZiAO2iR8HGT1eoj%2FVRejKFa8ZIM5gAKg1YKhZeFOWtxI902JYv6%2BnDvN%2By5QpjXAL7el%2FZuZ2O%2B5Md%2FiVZtyK8WVJ5ZKep937KLlLU%2FzazRes61rPZgMJBp%2F0jbR523Jz%2FqY4gkhCDn6LIf%2Faznvxtv96tT3FbsiGPK5CiX4IRdyyupG%2B2e3yh%2FOpdSiKgsKo8v%2F%2F9O2kSsWHADYegKlOgLNEI%2BbcyWOm5J%2Bgnz4PJBxRL756KhpNQzTPZlo2ldcOlf5hZE5Wa2tIu0DVNcNdECoJzvG%2BPjoqrLG5aFHB8uwBpSSDsf%2BlTubEIGNvw%2BwJ0UNSSD2VyDXZwW%2FSkNipaMyzLsZKSWOAv7Ah6gMFmsfeePrpZJvKaIdgq1GNo7uTTTWpcwu1xa2erE8JADKJ0u%2BnwHBOVgHEPQAVE%2Fqv44libyVZ0VwSt7qsy3V%2FZ5YYptVW3X82J0NBc87nUN%2FPMfNEeLxsM1G17a3ELrmCWlc0CRcUZ6WHzZr9YeI1g0vv1n8fpWBGNQQTkqv6XiIqjDFozMxkYgPJ%2BBP2EBXRcU9bzEHCnEXEgjC34bzBBjqkASWNGmSfjJI8i6ujvXCfvqjB4sLzi3piQjrVtqTXpltWymWUrqM%2FIklKCmwQMh%2FR1tHf03TIsSngQg7OmqIvlC%2Be3CBOzPKShX4Tvnp5U2xCmCnQAGWyi4AXxJ2b84v%2FKOS8IRour6jawA8je8z17IVNEDPFFO9hnd6yr8k3%2BzTK%2FKguLxDrTksFtA23G9GSx85XsWKdHy3FFU700eLI%2BfRDd5DY&X-Amz-Signature=94ee4cfe9fe8f438d0f6a699485eab96ee45d6eb1ed0c41d11da5320d55f8d11&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
