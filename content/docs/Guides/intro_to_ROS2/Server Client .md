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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPMJWVX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRvpDcaBBPE2sPKtt5fjJIrrQaucjgWyaamB5Q7SIRKAiEA6froN96TKG12CAf9F1ywyOCnYXHE9CzubuWyercJY8gq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDvtI5N56bVJHd%2F9circA4pfaJMIdb9lOEgJfjiA72p1zNmzJ3IUprEIv%2FkQD7IPtfJ3JfSITS2pZ4AC2EsCBUx9JguOWLnAFvfIcm2OI7Abia1JNOCbvaq2q4mGmIL4R6Bh7CcC7Lk6FLJq%2B7y8Bq58uh50F6sEDl0RQ4j2lAQvS7pm%2BKWSQfWBBd%2FzgjqFWzN%2Bj4n6XV%2BisOyf3sXyhmQJZQBt3ixHeUjOrC%2FalP5YzK92NUKvTCJr0H963tutoulhMHALy0ncnQxXDOW%2FvsuLZJtiDyn7WyaBV8pDbyyHrcOKSfdWksVb6Z%2FIiHQFYJnMvt3Dv3BshhLfFtxySfw5u8dGhJHLY97hwRq37spSS6OFzA4sT6OrmvZf9RwGlEuETfAIttkeipqp2eZM%2BxOU3zu1Z82lnTYS8kBBH0gau0Cv7H6vrLn%2Fsdr4Js0lKeJnONNdxohZ6kNCsjjJrCt15a9a%2BDkr6WPv14bR0Q4ThFf%2FK0vFvO%2FwH6SCXer3fxzcG6HSI1ac6698jBW30a%2B4WbTaG5ND5kmjhpHsq8lIN%2BvbIbSVcNwRRTCHgKGFyEv%2Fp0EqcbsF7A%2FwR2%2B%2FZc1XK2rba63CGuedzQM6EC00eS74HV%2BvwxvyHIZ8ItmYiR7RUEHL7wPO71zSMKTU1sEGOqUB%2Fa%2BkfZFiKl0Y8rHFIITaKWvmg5d3WHQwRfi%2BRSKylUtH5ppEn1Ih85SMSLkjOWLEG%2BEENd4wWDTVlv8ojjZIJFT1iKm2e4UbmKY5yESHkw1GOOdakJ%2FikUeBIt91I2nGA7%2BRpiDhDVZPg4Nq2xvQvQlGa%2BmRcZkG%2FNlYh9GpKzgTSquaJuyZr1nm1vMLYoSDPIthIfPUFlwtjzPud0PJHVmsAMJY&X-Amz-Signature=59cb511b7d738814b86ad0aa1f9684ce6201f52d2afc633d22754e8292481570&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPMJWVX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRvpDcaBBPE2sPKtt5fjJIrrQaucjgWyaamB5Q7SIRKAiEA6froN96TKG12CAf9F1ywyOCnYXHE9CzubuWyercJY8gq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDvtI5N56bVJHd%2F9circA4pfaJMIdb9lOEgJfjiA72p1zNmzJ3IUprEIv%2FkQD7IPtfJ3JfSITS2pZ4AC2EsCBUx9JguOWLnAFvfIcm2OI7Abia1JNOCbvaq2q4mGmIL4R6Bh7CcC7Lk6FLJq%2B7y8Bq58uh50F6sEDl0RQ4j2lAQvS7pm%2BKWSQfWBBd%2FzgjqFWzN%2Bj4n6XV%2BisOyf3sXyhmQJZQBt3ixHeUjOrC%2FalP5YzK92NUKvTCJr0H963tutoulhMHALy0ncnQxXDOW%2FvsuLZJtiDyn7WyaBV8pDbyyHrcOKSfdWksVb6Z%2FIiHQFYJnMvt3Dv3BshhLfFtxySfw5u8dGhJHLY97hwRq37spSS6OFzA4sT6OrmvZf9RwGlEuETfAIttkeipqp2eZM%2BxOU3zu1Z82lnTYS8kBBH0gau0Cv7H6vrLn%2Fsdr4Js0lKeJnONNdxohZ6kNCsjjJrCt15a9a%2BDkr6WPv14bR0Q4ThFf%2FK0vFvO%2FwH6SCXer3fxzcG6HSI1ac6698jBW30a%2B4WbTaG5ND5kmjhpHsq8lIN%2BvbIbSVcNwRRTCHgKGFyEv%2Fp0EqcbsF7A%2FwR2%2B%2FZc1XK2rba63CGuedzQM6EC00eS74HV%2BvwxvyHIZ8ItmYiR7RUEHL7wPO71zSMKTU1sEGOqUB%2Fa%2BkfZFiKl0Y8rHFIITaKWvmg5d3WHQwRfi%2BRSKylUtH5ppEn1Ih85SMSLkjOWLEG%2BEENd4wWDTVlv8ojjZIJFT1iKm2e4UbmKY5yESHkw1GOOdakJ%2FikUeBIt91I2nGA7%2BRpiDhDVZPg4Nq2xvQvQlGa%2BmRcZkG%2FNlYh9GpKzgTSquaJuyZr1nm1vMLYoSDPIthIfPUFlwtjzPud0PJHVmsAMJY&X-Amz-Signature=09e392573a6b4262378d70d27f463ac52273fd5818b4f4b6094769977156f619&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPMJWVX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRvpDcaBBPE2sPKtt5fjJIrrQaucjgWyaamB5Q7SIRKAiEA6froN96TKG12CAf9F1ywyOCnYXHE9CzubuWyercJY8gq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDvtI5N56bVJHd%2F9circA4pfaJMIdb9lOEgJfjiA72p1zNmzJ3IUprEIv%2FkQD7IPtfJ3JfSITS2pZ4AC2EsCBUx9JguOWLnAFvfIcm2OI7Abia1JNOCbvaq2q4mGmIL4R6Bh7CcC7Lk6FLJq%2B7y8Bq58uh50F6sEDl0RQ4j2lAQvS7pm%2BKWSQfWBBd%2FzgjqFWzN%2Bj4n6XV%2BisOyf3sXyhmQJZQBt3ixHeUjOrC%2FalP5YzK92NUKvTCJr0H963tutoulhMHALy0ncnQxXDOW%2FvsuLZJtiDyn7WyaBV8pDbyyHrcOKSfdWksVb6Z%2FIiHQFYJnMvt3Dv3BshhLfFtxySfw5u8dGhJHLY97hwRq37spSS6OFzA4sT6OrmvZf9RwGlEuETfAIttkeipqp2eZM%2BxOU3zu1Z82lnTYS8kBBH0gau0Cv7H6vrLn%2Fsdr4Js0lKeJnONNdxohZ6kNCsjjJrCt15a9a%2BDkr6WPv14bR0Q4ThFf%2FK0vFvO%2FwH6SCXer3fxzcG6HSI1ac6698jBW30a%2B4WbTaG5ND5kmjhpHsq8lIN%2BvbIbSVcNwRRTCHgKGFyEv%2Fp0EqcbsF7A%2FwR2%2B%2FZc1XK2rba63CGuedzQM6EC00eS74HV%2BvwxvyHIZ8ItmYiR7RUEHL7wPO71zSMKTU1sEGOqUB%2Fa%2BkfZFiKl0Y8rHFIITaKWvmg5d3WHQwRfi%2BRSKylUtH5ppEn1Ih85SMSLkjOWLEG%2BEENd4wWDTVlv8ojjZIJFT1iKm2e4UbmKY5yESHkw1GOOdakJ%2FikUeBIt91I2nGA7%2BRpiDhDVZPg4Nq2xvQvQlGa%2BmRcZkG%2FNlYh9GpKzgTSquaJuyZr1nm1vMLYoSDPIthIfPUFlwtjzPud0PJHVmsAMJY&X-Amz-Signature=3dd8370305d9e05335a27a69e0f5c84c634d044cd14db3162311ca190fdbcbe8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPMJWVX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRvpDcaBBPE2sPKtt5fjJIrrQaucjgWyaamB5Q7SIRKAiEA6froN96TKG12CAf9F1ywyOCnYXHE9CzubuWyercJY8gq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDvtI5N56bVJHd%2F9circA4pfaJMIdb9lOEgJfjiA72p1zNmzJ3IUprEIv%2FkQD7IPtfJ3JfSITS2pZ4AC2EsCBUx9JguOWLnAFvfIcm2OI7Abia1JNOCbvaq2q4mGmIL4R6Bh7CcC7Lk6FLJq%2B7y8Bq58uh50F6sEDl0RQ4j2lAQvS7pm%2BKWSQfWBBd%2FzgjqFWzN%2Bj4n6XV%2BisOyf3sXyhmQJZQBt3ixHeUjOrC%2FalP5YzK92NUKvTCJr0H963tutoulhMHALy0ncnQxXDOW%2FvsuLZJtiDyn7WyaBV8pDbyyHrcOKSfdWksVb6Z%2FIiHQFYJnMvt3Dv3BshhLfFtxySfw5u8dGhJHLY97hwRq37spSS6OFzA4sT6OrmvZf9RwGlEuETfAIttkeipqp2eZM%2BxOU3zu1Z82lnTYS8kBBH0gau0Cv7H6vrLn%2Fsdr4Js0lKeJnONNdxohZ6kNCsjjJrCt15a9a%2BDkr6WPv14bR0Q4ThFf%2FK0vFvO%2FwH6SCXer3fxzcG6HSI1ac6698jBW30a%2B4WbTaG5ND5kmjhpHsq8lIN%2BvbIbSVcNwRRTCHgKGFyEv%2Fp0EqcbsF7A%2FwR2%2B%2FZc1XK2rba63CGuedzQM6EC00eS74HV%2BvwxvyHIZ8ItmYiR7RUEHL7wPO71zSMKTU1sEGOqUB%2Fa%2BkfZFiKl0Y8rHFIITaKWvmg5d3WHQwRfi%2BRSKylUtH5ppEn1Ih85SMSLkjOWLEG%2BEENd4wWDTVlv8ojjZIJFT1iKm2e4UbmKY5yESHkw1GOOdakJ%2FikUeBIt91I2nGA7%2BRpiDhDVZPg4Nq2xvQvQlGa%2BmRcZkG%2FNlYh9GpKzgTSquaJuyZr1nm1vMLYoSDPIthIfPUFlwtjzPud0PJHVmsAMJY&X-Amz-Signature=3ad80113b9aca95621b162c8762950183171f3bcd87f470d554146425dd04a42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPMJWVX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRvpDcaBBPE2sPKtt5fjJIrrQaucjgWyaamB5Q7SIRKAiEA6froN96TKG12CAf9F1ywyOCnYXHE9CzubuWyercJY8gq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDvtI5N56bVJHd%2F9circA4pfaJMIdb9lOEgJfjiA72p1zNmzJ3IUprEIv%2FkQD7IPtfJ3JfSITS2pZ4AC2EsCBUx9JguOWLnAFvfIcm2OI7Abia1JNOCbvaq2q4mGmIL4R6Bh7CcC7Lk6FLJq%2B7y8Bq58uh50F6sEDl0RQ4j2lAQvS7pm%2BKWSQfWBBd%2FzgjqFWzN%2Bj4n6XV%2BisOyf3sXyhmQJZQBt3ixHeUjOrC%2FalP5YzK92NUKvTCJr0H963tutoulhMHALy0ncnQxXDOW%2FvsuLZJtiDyn7WyaBV8pDbyyHrcOKSfdWksVb6Z%2FIiHQFYJnMvt3Dv3BshhLfFtxySfw5u8dGhJHLY97hwRq37spSS6OFzA4sT6OrmvZf9RwGlEuETfAIttkeipqp2eZM%2BxOU3zu1Z82lnTYS8kBBH0gau0Cv7H6vrLn%2Fsdr4Js0lKeJnONNdxohZ6kNCsjjJrCt15a9a%2BDkr6WPv14bR0Q4ThFf%2FK0vFvO%2FwH6SCXer3fxzcG6HSI1ac6698jBW30a%2B4WbTaG5ND5kmjhpHsq8lIN%2BvbIbSVcNwRRTCHgKGFyEv%2Fp0EqcbsF7A%2FwR2%2B%2FZc1XK2rba63CGuedzQM6EC00eS74HV%2BvwxvyHIZ8ItmYiR7RUEHL7wPO71zSMKTU1sEGOqUB%2Fa%2BkfZFiKl0Y8rHFIITaKWvmg5d3WHQwRfi%2BRSKylUtH5ppEn1Ih85SMSLkjOWLEG%2BEENd4wWDTVlv8ojjZIJFT1iKm2e4UbmKY5yESHkw1GOOdakJ%2FikUeBIt91I2nGA7%2BRpiDhDVZPg4Nq2xvQvQlGa%2BmRcZkG%2FNlYh9GpKzgTSquaJuyZr1nm1vMLYoSDPIthIfPUFlwtjzPud0PJHVmsAMJY&X-Amz-Signature=d946ff4474f647010e6cdda2a1d267c3dcf1c0b73ba8f3fe152bdc195f34fe9e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
