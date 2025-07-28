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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYPIFF5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCeEzdtb8NuXwFinq25gZzQOfwbzZUg4vW65gdbRngJIAIhALtYmdIbNMWWhnuG6Bl%2BkwO9maCK%2FXnPHuiH9kG5NB2oKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDWMTS3xT5Rv6Pk7wq3AN%2FUe3vUCLfdyqv6QmEJ14mKteMKCfSMUD4XlgStUtL%2F0OvXRlGIWSji%2FpSzAddULDQ%2BB%2BK96PmsSx2l9B%2FMLnSh6pNfdmFP%2FKuga2S2Uf2l1CDVE0vsbELdtJ8wA5UkPmmArNfu7jLCwFfoEH3qxKCJpdfrfZcEg8fdRJSHDr2UvNZ808rds6qThSwnjeqJZTwqspLDn4stA%2BriqJxL9swCDbQK1q4hPNfuWhBZ%2Fqoqmx9vijRrpDHpT8605YbpETN2ZbAGikuFgDohdvxM%2FI74rlFnZPYyTYFNLCeicDG7mOnxzTj%2FlxeFG9O0TRJGfjOj5ooxA6xsJN1IiPc2VK%2Bsm9HMSbN6kJPU5%2FpRaSwisxvgHjZH8UVIKYUwQVnYKDxOyHRrw0prVTB%2Bx5t3eh9nMfSwZgRAnCip6MsPbCvRB1pUbaDA1fp5n%2Fv%2FEvg6mcGQPQ7oRGpgG%2BdQBtRV1pb1dr49KZoBtZfo5LbsnaWDqa3HL6bOk0ibv2E3xZPfNlvQedUATnJjXsMeSOVo9Amg7yTjurQ%2Bpcv8YvAMWIGzjWonty%2Fwm1wMmqrsCIg3lbZdlaebJT2HGNzSHq20nsvaUQMuX3yNhmF9lYDya%2FlzxaBiJklswgawVCg0jDa8Z%2FEBjqkAY0prrxz906gG3L9VfIXB7Brl7wF0iLREsjUdTtGW9X2XZzt5VAfPK7fNHrK%2FM%2FFea1A0ffQyxHU1TYDinEKNi%2Bnji4HvA6QRpUFk22rPUPa0il8OvhM3i4RjPjDxFwJDSPi2Lds28n8ICD2egTifnsquN3ra8QcqLzmbmdJMM7gjISrxAcp2am%2B2ZudnAKlD8xwgxgyj1V%2BI9wxh7AWKKC0a2%2BW&X-Amz-Signature=00046bc63d3ba557d904dcd259786d7bf780a9877c863105a9fec944cdcd1766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYPIFF5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCeEzdtb8NuXwFinq25gZzQOfwbzZUg4vW65gdbRngJIAIhALtYmdIbNMWWhnuG6Bl%2BkwO9maCK%2FXnPHuiH9kG5NB2oKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDWMTS3xT5Rv6Pk7wq3AN%2FUe3vUCLfdyqv6QmEJ14mKteMKCfSMUD4XlgStUtL%2F0OvXRlGIWSji%2FpSzAddULDQ%2BB%2BK96PmsSx2l9B%2FMLnSh6pNfdmFP%2FKuga2S2Uf2l1CDVE0vsbELdtJ8wA5UkPmmArNfu7jLCwFfoEH3qxKCJpdfrfZcEg8fdRJSHDr2UvNZ808rds6qThSwnjeqJZTwqspLDn4stA%2BriqJxL9swCDbQK1q4hPNfuWhBZ%2Fqoqmx9vijRrpDHpT8605YbpETN2ZbAGikuFgDohdvxM%2FI74rlFnZPYyTYFNLCeicDG7mOnxzTj%2FlxeFG9O0TRJGfjOj5ooxA6xsJN1IiPc2VK%2Bsm9HMSbN6kJPU5%2FpRaSwisxvgHjZH8UVIKYUwQVnYKDxOyHRrw0prVTB%2Bx5t3eh9nMfSwZgRAnCip6MsPbCvRB1pUbaDA1fp5n%2Fv%2FEvg6mcGQPQ7oRGpgG%2BdQBtRV1pb1dr49KZoBtZfo5LbsnaWDqa3HL6bOk0ibv2E3xZPfNlvQedUATnJjXsMeSOVo9Amg7yTjurQ%2Bpcv8YvAMWIGzjWonty%2Fwm1wMmqrsCIg3lbZdlaebJT2HGNzSHq20nsvaUQMuX3yNhmF9lYDya%2FlzxaBiJklswgawVCg0jDa8Z%2FEBjqkAY0prrxz906gG3L9VfIXB7Brl7wF0iLREsjUdTtGW9X2XZzt5VAfPK7fNHrK%2FM%2FFea1A0ffQyxHU1TYDinEKNi%2Bnji4HvA6QRpUFk22rPUPa0il8OvhM3i4RjPjDxFwJDSPi2Lds28n8ICD2egTifnsquN3ra8QcqLzmbmdJMM7gjISrxAcp2am%2B2ZudnAKlD8xwgxgyj1V%2BI9wxh7AWKKC0a2%2BW&X-Amz-Signature=1381c6c43b4d05292844dc99ad54379a5a417b18d7877fc899bd3d807c813300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYPIFF5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCeEzdtb8NuXwFinq25gZzQOfwbzZUg4vW65gdbRngJIAIhALtYmdIbNMWWhnuG6Bl%2BkwO9maCK%2FXnPHuiH9kG5NB2oKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDWMTS3xT5Rv6Pk7wq3AN%2FUe3vUCLfdyqv6QmEJ14mKteMKCfSMUD4XlgStUtL%2F0OvXRlGIWSji%2FpSzAddULDQ%2BB%2BK96PmsSx2l9B%2FMLnSh6pNfdmFP%2FKuga2S2Uf2l1CDVE0vsbELdtJ8wA5UkPmmArNfu7jLCwFfoEH3qxKCJpdfrfZcEg8fdRJSHDr2UvNZ808rds6qThSwnjeqJZTwqspLDn4stA%2BriqJxL9swCDbQK1q4hPNfuWhBZ%2Fqoqmx9vijRrpDHpT8605YbpETN2ZbAGikuFgDohdvxM%2FI74rlFnZPYyTYFNLCeicDG7mOnxzTj%2FlxeFG9O0TRJGfjOj5ooxA6xsJN1IiPc2VK%2Bsm9HMSbN6kJPU5%2FpRaSwisxvgHjZH8UVIKYUwQVnYKDxOyHRrw0prVTB%2Bx5t3eh9nMfSwZgRAnCip6MsPbCvRB1pUbaDA1fp5n%2Fv%2FEvg6mcGQPQ7oRGpgG%2BdQBtRV1pb1dr49KZoBtZfo5LbsnaWDqa3HL6bOk0ibv2E3xZPfNlvQedUATnJjXsMeSOVo9Amg7yTjurQ%2Bpcv8YvAMWIGzjWonty%2Fwm1wMmqrsCIg3lbZdlaebJT2HGNzSHq20nsvaUQMuX3yNhmF9lYDya%2FlzxaBiJklswgawVCg0jDa8Z%2FEBjqkAY0prrxz906gG3L9VfIXB7Brl7wF0iLREsjUdTtGW9X2XZzt5VAfPK7fNHrK%2FM%2FFea1A0ffQyxHU1TYDinEKNi%2Bnji4HvA6QRpUFk22rPUPa0il8OvhM3i4RjPjDxFwJDSPi2Lds28n8ICD2egTifnsquN3ra8QcqLzmbmdJMM7gjISrxAcp2am%2B2ZudnAKlD8xwgxgyj1V%2BI9wxh7AWKKC0a2%2BW&X-Amz-Signature=bef323c736948fda16662887f2324cdcb691755ffb71cb05c29a922cb9bfa6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYPIFF5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCeEzdtb8NuXwFinq25gZzQOfwbzZUg4vW65gdbRngJIAIhALtYmdIbNMWWhnuG6Bl%2BkwO9maCK%2FXnPHuiH9kG5NB2oKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDWMTS3xT5Rv6Pk7wq3AN%2FUe3vUCLfdyqv6QmEJ14mKteMKCfSMUD4XlgStUtL%2F0OvXRlGIWSji%2FpSzAddULDQ%2BB%2BK96PmsSx2l9B%2FMLnSh6pNfdmFP%2FKuga2S2Uf2l1CDVE0vsbELdtJ8wA5UkPmmArNfu7jLCwFfoEH3qxKCJpdfrfZcEg8fdRJSHDr2UvNZ808rds6qThSwnjeqJZTwqspLDn4stA%2BriqJxL9swCDbQK1q4hPNfuWhBZ%2Fqoqmx9vijRrpDHpT8605YbpETN2ZbAGikuFgDohdvxM%2FI74rlFnZPYyTYFNLCeicDG7mOnxzTj%2FlxeFG9O0TRJGfjOj5ooxA6xsJN1IiPc2VK%2Bsm9HMSbN6kJPU5%2FpRaSwisxvgHjZH8UVIKYUwQVnYKDxOyHRrw0prVTB%2Bx5t3eh9nMfSwZgRAnCip6MsPbCvRB1pUbaDA1fp5n%2Fv%2FEvg6mcGQPQ7oRGpgG%2BdQBtRV1pb1dr49KZoBtZfo5LbsnaWDqa3HL6bOk0ibv2E3xZPfNlvQedUATnJjXsMeSOVo9Amg7yTjurQ%2Bpcv8YvAMWIGzjWonty%2Fwm1wMmqrsCIg3lbZdlaebJT2HGNzSHq20nsvaUQMuX3yNhmF9lYDya%2FlzxaBiJklswgawVCg0jDa8Z%2FEBjqkAY0prrxz906gG3L9VfIXB7Brl7wF0iLREsjUdTtGW9X2XZzt5VAfPK7fNHrK%2FM%2FFea1A0ffQyxHU1TYDinEKNi%2Bnji4HvA6QRpUFk22rPUPa0il8OvhM3i4RjPjDxFwJDSPi2Lds28n8ICD2egTifnsquN3ra8QcqLzmbmdJMM7gjISrxAcp2am%2B2ZudnAKlD8xwgxgyj1V%2BI9wxh7AWKKC0a2%2BW&X-Amz-Signature=b8bd1dfb135e0383c6364237f448d26f793dd541ffeb6020e5e73427bee5dd89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYPIFF5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCeEzdtb8NuXwFinq25gZzQOfwbzZUg4vW65gdbRngJIAIhALtYmdIbNMWWhnuG6Bl%2BkwO9maCK%2FXnPHuiH9kG5NB2oKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDWMTS3xT5Rv6Pk7wq3AN%2FUe3vUCLfdyqv6QmEJ14mKteMKCfSMUD4XlgStUtL%2F0OvXRlGIWSji%2FpSzAddULDQ%2BB%2BK96PmsSx2l9B%2FMLnSh6pNfdmFP%2FKuga2S2Uf2l1CDVE0vsbELdtJ8wA5UkPmmArNfu7jLCwFfoEH3qxKCJpdfrfZcEg8fdRJSHDr2UvNZ808rds6qThSwnjeqJZTwqspLDn4stA%2BriqJxL9swCDbQK1q4hPNfuWhBZ%2Fqoqmx9vijRrpDHpT8605YbpETN2ZbAGikuFgDohdvxM%2FI74rlFnZPYyTYFNLCeicDG7mOnxzTj%2FlxeFG9O0TRJGfjOj5ooxA6xsJN1IiPc2VK%2Bsm9HMSbN6kJPU5%2FpRaSwisxvgHjZH8UVIKYUwQVnYKDxOyHRrw0prVTB%2Bx5t3eh9nMfSwZgRAnCip6MsPbCvRB1pUbaDA1fp5n%2Fv%2FEvg6mcGQPQ7oRGpgG%2BdQBtRV1pb1dr49KZoBtZfo5LbsnaWDqa3HL6bOk0ibv2E3xZPfNlvQedUATnJjXsMeSOVo9Amg7yTjurQ%2Bpcv8YvAMWIGzjWonty%2Fwm1wMmqrsCIg3lbZdlaebJT2HGNzSHq20nsvaUQMuX3yNhmF9lYDya%2FlzxaBiJklswgawVCg0jDa8Z%2FEBjqkAY0prrxz906gG3L9VfIXB7Brl7wF0iLREsjUdTtGW9X2XZzt5VAfPK7fNHrK%2FM%2FFea1A0ffQyxHU1TYDinEKNi%2Bnji4HvA6QRpUFk22rPUPa0il8OvhM3i4RjPjDxFwJDSPi2Lds28n8ICD2egTifnsquN3ra8QcqLzmbmdJMM7gjISrxAcp2am%2B2ZudnAKlD8xwgxgyj1V%2BI9wxh7AWKKC0a2%2BW&X-Amz-Signature=76efc6160e45bb40ad658ba14b5bab079b9e55f4b0c76be29725b7ec42c24ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
