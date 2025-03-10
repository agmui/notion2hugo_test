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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYMR6RX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEAlwNH6ns8E5SwBsk%2B4%2Fw2K1XE%2BgvztbWhklTcHRQPjAiBz0gDT7a3iRmWIzj6AAumxVFHyReBmq%2BzOAR8wll9TsCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Etlutg9oacDHKf9KtwDF71%2B85uO4U70Ys4b4ux1lNSbsPmjnVoE5qVRe2AKY%2BwZ93aIUdzHbaBeeOWBKZvLeiiQh0xUVx8H41ujAqVxXGhBFiESPnT%2Fv5EdF5ncCTOO9ARWlT3yTsM7mx8jK%2FwrC%2BKTCXsHQMsTBmW%2FVV6GPY3HI2HPpUjAOXX58XQLSY%2FJ2VC%2FMi%2BIL4MP5Ai5DzZ4wzSCeKolRFxJrFd%2FYMPqHNrsn5SYA%2BUoyrpEB90wGOZMNg%2FnBNwRwtSbhUES%2BcL6%2FjcXylp5aCPdRurc9nkji2bOyLwBkzHNo4XgJ4jDxk185EbFhbZv5%2FRCxxfdQmcPoUqwA9ssnuADQdCJxLqraVx4MJB0gvnuXI1yGiHfKHzcgJ5yDdj73nBKPXTTgx4JbwjclCp%2BsiZtDmZFK3r3Dd3IJ%2BuyHiVdKjGIDA8Gh%2BnBxn8J2xmYe%2FJ5PED%2FOx5O3%2BzjwaNyUE0ail%2Bas%2B9KQcZs5Vy4AATZkA19W%2FEEEYUv5qB7t45r1Z2ZwHrqW7Ht6ZNXxKsTJyC4DPOcvwI5pmkFNQj0t3%2FcKjxZL6S8ISlFTb2l8xBgBtAACkVeNusj0c5AytHVSGs8ig2xOjeJEpoh%2Fcow8YBTksVIvEEBbhiJm7MxGxQ519E1U84wx4u9vgY6pgHR36%2B2dkOJW4ng1qlKUW3LlAz6SLVVJ2F1qtpuJR1W3f9bsgv8HB7umnezHPOGSipFVP9Kk7B6LyhKLGUP6%2BTA%2B%2BY2wHFNAwZYSiavOow24KmknJc7owBureQNOvgyDJg6w27AUEqERcONTMI7r8jX03DY9I3IKr1TThaayZXrhN2%2Fhyb6kWpCItESnNpbweOPYnIG1cG4RZtrxTyQS5JARr497d5u&X-Amz-Signature=d5bae5b300cb19e0fc3065d95c6050f1d7dd48f1b01d84585909476cdb77ec70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYMR6RX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEAlwNH6ns8E5SwBsk%2B4%2Fw2K1XE%2BgvztbWhklTcHRQPjAiBz0gDT7a3iRmWIzj6AAumxVFHyReBmq%2BzOAR8wll9TsCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Etlutg9oacDHKf9KtwDF71%2B85uO4U70Ys4b4ux1lNSbsPmjnVoE5qVRe2AKY%2BwZ93aIUdzHbaBeeOWBKZvLeiiQh0xUVx8H41ujAqVxXGhBFiESPnT%2Fv5EdF5ncCTOO9ARWlT3yTsM7mx8jK%2FwrC%2BKTCXsHQMsTBmW%2FVV6GPY3HI2HPpUjAOXX58XQLSY%2FJ2VC%2FMi%2BIL4MP5Ai5DzZ4wzSCeKolRFxJrFd%2FYMPqHNrsn5SYA%2BUoyrpEB90wGOZMNg%2FnBNwRwtSbhUES%2BcL6%2FjcXylp5aCPdRurc9nkji2bOyLwBkzHNo4XgJ4jDxk185EbFhbZv5%2FRCxxfdQmcPoUqwA9ssnuADQdCJxLqraVx4MJB0gvnuXI1yGiHfKHzcgJ5yDdj73nBKPXTTgx4JbwjclCp%2BsiZtDmZFK3r3Dd3IJ%2BuyHiVdKjGIDA8Gh%2BnBxn8J2xmYe%2FJ5PED%2FOx5O3%2BzjwaNyUE0ail%2Bas%2B9KQcZs5Vy4AATZkA19W%2FEEEYUv5qB7t45r1Z2ZwHrqW7Ht6ZNXxKsTJyC4DPOcvwI5pmkFNQj0t3%2FcKjxZL6S8ISlFTb2l8xBgBtAACkVeNusj0c5AytHVSGs8ig2xOjeJEpoh%2Fcow8YBTksVIvEEBbhiJm7MxGxQ519E1U84wx4u9vgY6pgHR36%2B2dkOJW4ng1qlKUW3LlAz6SLVVJ2F1qtpuJR1W3f9bsgv8HB7umnezHPOGSipFVP9Kk7B6LyhKLGUP6%2BTA%2B%2BY2wHFNAwZYSiavOow24KmknJc7owBureQNOvgyDJg6w27AUEqERcONTMI7r8jX03DY9I3IKr1TThaayZXrhN2%2Fhyb6kWpCItESnNpbweOPYnIG1cG4RZtrxTyQS5JARr497d5u&X-Amz-Signature=9dc06c54ee0c6bbb9c86e8eccc8909706d69fece8065c86073e198ceaa7082cf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYMR6RX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEAlwNH6ns8E5SwBsk%2B4%2Fw2K1XE%2BgvztbWhklTcHRQPjAiBz0gDT7a3iRmWIzj6AAumxVFHyReBmq%2BzOAR8wll9TsCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Etlutg9oacDHKf9KtwDF71%2B85uO4U70Ys4b4ux1lNSbsPmjnVoE5qVRe2AKY%2BwZ93aIUdzHbaBeeOWBKZvLeiiQh0xUVx8H41ujAqVxXGhBFiESPnT%2Fv5EdF5ncCTOO9ARWlT3yTsM7mx8jK%2FwrC%2BKTCXsHQMsTBmW%2FVV6GPY3HI2HPpUjAOXX58XQLSY%2FJ2VC%2FMi%2BIL4MP5Ai5DzZ4wzSCeKolRFxJrFd%2FYMPqHNrsn5SYA%2BUoyrpEB90wGOZMNg%2FnBNwRwtSbhUES%2BcL6%2FjcXylp5aCPdRurc9nkji2bOyLwBkzHNo4XgJ4jDxk185EbFhbZv5%2FRCxxfdQmcPoUqwA9ssnuADQdCJxLqraVx4MJB0gvnuXI1yGiHfKHzcgJ5yDdj73nBKPXTTgx4JbwjclCp%2BsiZtDmZFK3r3Dd3IJ%2BuyHiVdKjGIDA8Gh%2BnBxn8J2xmYe%2FJ5PED%2FOx5O3%2BzjwaNyUE0ail%2Bas%2B9KQcZs5Vy4AATZkA19W%2FEEEYUv5qB7t45r1Z2ZwHrqW7Ht6ZNXxKsTJyC4DPOcvwI5pmkFNQj0t3%2FcKjxZL6S8ISlFTb2l8xBgBtAACkVeNusj0c5AytHVSGs8ig2xOjeJEpoh%2Fcow8YBTksVIvEEBbhiJm7MxGxQ519E1U84wx4u9vgY6pgHR36%2B2dkOJW4ng1qlKUW3LlAz6SLVVJ2F1qtpuJR1W3f9bsgv8HB7umnezHPOGSipFVP9Kk7B6LyhKLGUP6%2BTA%2B%2BY2wHFNAwZYSiavOow24KmknJc7owBureQNOvgyDJg6w27AUEqERcONTMI7r8jX03DY9I3IKr1TThaayZXrhN2%2Fhyb6kWpCItESnNpbweOPYnIG1cG4RZtrxTyQS5JARr497d5u&X-Amz-Signature=9478543fb427fe41559284a4c10cd2e75a4883f864fa4be72775c2223de2b351&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYMR6RX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEAlwNH6ns8E5SwBsk%2B4%2Fw2K1XE%2BgvztbWhklTcHRQPjAiBz0gDT7a3iRmWIzj6AAumxVFHyReBmq%2BzOAR8wll9TsCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Etlutg9oacDHKf9KtwDF71%2B85uO4U70Ys4b4ux1lNSbsPmjnVoE5qVRe2AKY%2BwZ93aIUdzHbaBeeOWBKZvLeiiQh0xUVx8H41ujAqVxXGhBFiESPnT%2Fv5EdF5ncCTOO9ARWlT3yTsM7mx8jK%2FwrC%2BKTCXsHQMsTBmW%2FVV6GPY3HI2HPpUjAOXX58XQLSY%2FJ2VC%2FMi%2BIL4MP5Ai5DzZ4wzSCeKolRFxJrFd%2FYMPqHNrsn5SYA%2BUoyrpEB90wGOZMNg%2FnBNwRwtSbhUES%2BcL6%2FjcXylp5aCPdRurc9nkji2bOyLwBkzHNo4XgJ4jDxk185EbFhbZv5%2FRCxxfdQmcPoUqwA9ssnuADQdCJxLqraVx4MJB0gvnuXI1yGiHfKHzcgJ5yDdj73nBKPXTTgx4JbwjclCp%2BsiZtDmZFK3r3Dd3IJ%2BuyHiVdKjGIDA8Gh%2BnBxn8J2xmYe%2FJ5PED%2FOx5O3%2BzjwaNyUE0ail%2Bas%2B9KQcZs5Vy4AATZkA19W%2FEEEYUv5qB7t45r1Z2ZwHrqW7Ht6ZNXxKsTJyC4DPOcvwI5pmkFNQj0t3%2FcKjxZL6S8ISlFTb2l8xBgBtAACkVeNusj0c5AytHVSGs8ig2xOjeJEpoh%2Fcow8YBTksVIvEEBbhiJm7MxGxQ519E1U84wx4u9vgY6pgHR36%2B2dkOJW4ng1qlKUW3LlAz6SLVVJ2F1qtpuJR1W3f9bsgv8HB7umnezHPOGSipFVP9Kk7B6LyhKLGUP6%2BTA%2B%2BY2wHFNAwZYSiavOow24KmknJc7owBureQNOvgyDJg6w27AUEqERcONTMI7r8jX03DY9I3IKr1TThaayZXrhN2%2Fhyb6kWpCItESnNpbweOPYnIG1cG4RZtrxTyQS5JARr497d5u&X-Amz-Signature=88388f32d463106e5c31e6989f4b3123686ea313cd164b6fd975278922d33cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYMR6RX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEAlwNH6ns8E5SwBsk%2B4%2Fw2K1XE%2BgvztbWhklTcHRQPjAiBz0gDT7a3iRmWIzj6AAumxVFHyReBmq%2BzOAR8wll9TsCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Etlutg9oacDHKf9KtwDF71%2B85uO4U70Ys4b4ux1lNSbsPmjnVoE5qVRe2AKY%2BwZ93aIUdzHbaBeeOWBKZvLeiiQh0xUVx8H41ujAqVxXGhBFiESPnT%2Fv5EdF5ncCTOO9ARWlT3yTsM7mx8jK%2FwrC%2BKTCXsHQMsTBmW%2FVV6GPY3HI2HPpUjAOXX58XQLSY%2FJ2VC%2FMi%2BIL4MP5Ai5DzZ4wzSCeKolRFxJrFd%2FYMPqHNrsn5SYA%2BUoyrpEB90wGOZMNg%2FnBNwRwtSbhUES%2BcL6%2FjcXylp5aCPdRurc9nkji2bOyLwBkzHNo4XgJ4jDxk185EbFhbZv5%2FRCxxfdQmcPoUqwA9ssnuADQdCJxLqraVx4MJB0gvnuXI1yGiHfKHzcgJ5yDdj73nBKPXTTgx4JbwjclCp%2BsiZtDmZFK3r3Dd3IJ%2BuyHiVdKjGIDA8Gh%2BnBxn8J2xmYe%2FJ5PED%2FOx5O3%2BzjwaNyUE0ail%2Bas%2B9KQcZs5Vy4AATZkA19W%2FEEEYUv5qB7t45r1Z2ZwHrqW7Ht6ZNXxKsTJyC4DPOcvwI5pmkFNQj0t3%2FcKjxZL6S8ISlFTb2l8xBgBtAACkVeNusj0c5AytHVSGs8ig2xOjeJEpoh%2Fcow8YBTksVIvEEBbhiJm7MxGxQ519E1U84wx4u9vgY6pgHR36%2B2dkOJW4ng1qlKUW3LlAz6SLVVJ2F1qtpuJR1W3f9bsgv8HB7umnezHPOGSipFVP9Kk7B6LyhKLGUP6%2BTA%2B%2BY2wHFNAwZYSiavOow24KmknJc7owBureQNOvgyDJg6w27AUEqERcONTMI7r8jX03DY9I3IKr1TThaayZXrhN2%2Fhyb6kWpCItESnNpbweOPYnIG1cG4RZtrxTyQS5JARr497d5u&X-Amz-Signature=dc208f7c3246720d1b8b975a112fe1ab704076250eedbecedd523dcf627d490f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
