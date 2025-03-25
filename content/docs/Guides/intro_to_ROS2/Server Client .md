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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDWZGXT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJq3AxXxuqIZ0udCpEMytyvVRS4oheIgNDqZ%2F8ty1lHAiAOi4cPHdYvL6uXPquL8Dw4olGr44khVoXQyO04TcOtkyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMvPGhl7CdoPhsTgrMKtwDj25ylou%2Fxy4QK3gllYkVhI4akkg0eF82g%2BrVzS%2Becnj12X%2FGmILb9LF6%2FgpbYH8vvakPqAOOhkQ4r5%2F1CITEl2YCLbsWo19oR5cndDXgaHTF366nUzPfDJjoxZ9pqK5ye4EJrkTh%2FKuNFtTAYrs%2B8iv9%2FCO7X1wIAWKlsBbAbecxiON0H1RuGGegXh%2BA5bxP0EByNgp1KSM%2Fwt4bSrCY1hLYv4VnQAKKkKAptOycRPQiawdotJQzvSqYgpBDdhF6bue9VT1XxTDeMDFaD4u51a9b%2BqW0pyUOOk4tR%2FwK8j%2BxdAdPwmOe5oWEQZbtvG5lO9dxBGI6Gw0CXOHKBH%2FzIAg0%2Fp64S96Pk2cSEKtA6WNeecBJDWPw1cFdWm8vFe1dbAZQ8tcoU7VY%2BjOaQuuZkTEc5DIg1Rff0gY%2FTsPKXudf%2BR4%2FvSkCzSvhECNo18e9DDyYzIyTOfEcAcXPsWlrOeIfdmLHWV2pKTjb1YNFi8MAvs2NCrnrNp4kM32bKxRWAYrvz0odSFe1SMG3QzEGM9bfmbZxM5P4YwafBxa2C0OM0W7kw5hDFEuZ5EpumaPqnDJhjlv6TH8cOb5UmU2h61HW1tdoMDtnvepIm7OLNrjw97UGlwF%2BS5oGMQsw1eyJvwY6pgHHEZj%2BNgNCeU1lkQYip1bdm8kWnnCjwFtYdEiUNAMEo5ktYIHoy0LNf15NYAFx0HQY46jE7hZqaaEnp%2BOptQEEZFXNne0zxW1faxMPNQP%2BUYhkIiV89VcO5jOX8%2BdyV%2F%2FYLvebsbSJDbmRTzHpNEiEYAwfz4xG7PCHR3VEW4LwOVb2Vq0NGPRLGJJ3lBj0OxU4vGviaSJZUVdq%2FaC%2Bwc0BWh3t1TE%2B&X-Amz-Signature=b49b7776bc91cd1d39e4d009edc1ce706cfebb33381e4824b1a8324a255755ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDWZGXT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJq3AxXxuqIZ0udCpEMytyvVRS4oheIgNDqZ%2F8ty1lHAiAOi4cPHdYvL6uXPquL8Dw4olGr44khVoXQyO04TcOtkyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMvPGhl7CdoPhsTgrMKtwDj25ylou%2Fxy4QK3gllYkVhI4akkg0eF82g%2BrVzS%2Becnj12X%2FGmILb9LF6%2FgpbYH8vvakPqAOOhkQ4r5%2F1CITEl2YCLbsWo19oR5cndDXgaHTF366nUzPfDJjoxZ9pqK5ye4EJrkTh%2FKuNFtTAYrs%2B8iv9%2FCO7X1wIAWKlsBbAbecxiON0H1RuGGegXh%2BA5bxP0EByNgp1KSM%2Fwt4bSrCY1hLYv4VnQAKKkKAptOycRPQiawdotJQzvSqYgpBDdhF6bue9VT1XxTDeMDFaD4u51a9b%2BqW0pyUOOk4tR%2FwK8j%2BxdAdPwmOe5oWEQZbtvG5lO9dxBGI6Gw0CXOHKBH%2FzIAg0%2Fp64S96Pk2cSEKtA6WNeecBJDWPw1cFdWm8vFe1dbAZQ8tcoU7VY%2BjOaQuuZkTEc5DIg1Rff0gY%2FTsPKXudf%2BR4%2FvSkCzSvhECNo18e9DDyYzIyTOfEcAcXPsWlrOeIfdmLHWV2pKTjb1YNFi8MAvs2NCrnrNp4kM32bKxRWAYrvz0odSFe1SMG3QzEGM9bfmbZxM5P4YwafBxa2C0OM0W7kw5hDFEuZ5EpumaPqnDJhjlv6TH8cOb5UmU2h61HW1tdoMDtnvepIm7OLNrjw97UGlwF%2BS5oGMQsw1eyJvwY6pgHHEZj%2BNgNCeU1lkQYip1bdm8kWnnCjwFtYdEiUNAMEo5ktYIHoy0LNf15NYAFx0HQY46jE7hZqaaEnp%2BOptQEEZFXNne0zxW1faxMPNQP%2BUYhkIiV89VcO5jOX8%2BdyV%2F%2FYLvebsbSJDbmRTzHpNEiEYAwfz4xG7PCHR3VEW4LwOVb2Vq0NGPRLGJJ3lBj0OxU4vGviaSJZUVdq%2FaC%2Bwc0BWh3t1TE%2B&X-Amz-Signature=ae7817330941818d50dee8678a34e154c88921a9aabfa0a3530604fe8db61150&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDWZGXT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJq3AxXxuqIZ0udCpEMytyvVRS4oheIgNDqZ%2F8ty1lHAiAOi4cPHdYvL6uXPquL8Dw4olGr44khVoXQyO04TcOtkyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMvPGhl7CdoPhsTgrMKtwDj25ylou%2Fxy4QK3gllYkVhI4akkg0eF82g%2BrVzS%2Becnj12X%2FGmILb9LF6%2FgpbYH8vvakPqAOOhkQ4r5%2F1CITEl2YCLbsWo19oR5cndDXgaHTF366nUzPfDJjoxZ9pqK5ye4EJrkTh%2FKuNFtTAYrs%2B8iv9%2FCO7X1wIAWKlsBbAbecxiON0H1RuGGegXh%2BA5bxP0EByNgp1KSM%2Fwt4bSrCY1hLYv4VnQAKKkKAptOycRPQiawdotJQzvSqYgpBDdhF6bue9VT1XxTDeMDFaD4u51a9b%2BqW0pyUOOk4tR%2FwK8j%2BxdAdPwmOe5oWEQZbtvG5lO9dxBGI6Gw0CXOHKBH%2FzIAg0%2Fp64S96Pk2cSEKtA6WNeecBJDWPw1cFdWm8vFe1dbAZQ8tcoU7VY%2BjOaQuuZkTEc5DIg1Rff0gY%2FTsPKXudf%2BR4%2FvSkCzSvhECNo18e9DDyYzIyTOfEcAcXPsWlrOeIfdmLHWV2pKTjb1YNFi8MAvs2NCrnrNp4kM32bKxRWAYrvz0odSFe1SMG3QzEGM9bfmbZxM5P4YwafBxa2C0OM0W7kw5hDFEuZ5EpumaPqnDJhjlv6TH8cOb5UmU2h61HW1tdoMDtnvepIm7OLNrjw97UGlwF%2BS5oGMQsw1eyJvwY6pgHHEZj%2BNgNCeU1lkQYip1bdm8kWnnCjwFtYdEiUNAMEo5ktYIHoy0LNf15NYAFx0HQY46jE7hZqaaEnp%2BOptQEEZFXNne0zxW1faxMPNQP%2BUYhkIiV89VcO5jOX8%2BdyV%2F%2FYLvebsbSJDbmRTzHpNEiEYAwfz4xG7PCHR3VEW4LwOVb2Vq0NGPRLGJJ3lBj0OxU4vGviaSJZUVdq%2FaC%2Bwc0BWh3t1TE%2B&X-Amz-Signature=68daa491c5121066dedd84ce64d9993c1c9a348dc03afa37b2a13d4501022582&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDWZGXT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJq3AxXxuqIZ0udCpEMytyvVRS4oheIgNDqZ%2F8ty1lHAiAOi4cPHdYvL6uXPquL8Dw4olGr44khVoXQyO04TcOtkyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMvPGhl7CdoPhsTgrMKtwDj25ylou%2Fxy4QK3gllYkVhI4akkg0eF82g%2BrVzS%2Becnj12X%2FGmILb9LF6%2FgpbYH8vvakPqAOOhkQ4r5%2F1CITEl2YCLbsWo19oR5cndDXgaHTF366nUzPfDJjoxZ9pqK5ye4EJrkTh%2FKuNFtTAYrs%2B8iv9%2FCO7X1wIAWKlsBbAbecxiON0H1RuGGegXh%2BA5bxP0EByNgp1KSM%2Fwt4bSrCY1hLYv4VnQAKKkKAptOycRPQiawdotJQzvSqYgpBDdhF6bue9VT1XxTDeMDFaD4u51a9b%2BqW0pyUOOk4tR%2FwK8j%2BxdAdPwmOe5oWEQZbtvG5lO9dxBGI6Gw0CXOHKBH%2FzIAg0%2Fp64S96Pk2cSEKtA6WNeecBJDWPw1cFdWm8vFe1dbAZQ8tcoU7VY%2BjOaQuuZkTEc5DIg1Rff0gY%2FTsPKXudf%2BR4%2FvSkCzSvhECNo18e9DDyYzIyTOfEcAcXPsWlrOeIfdmLHWV2pKTjb1YNFi8MAvs2NCrnrNp4kM32bKxRWAYrvz0odSFe1SMG3QzEGM9bfmbZxM5P4YwafBxa2C0OM0W7kw5hDFEuZ5EpumaPqnDJhjlv6TH8cOb5UmU2h61HW1tdoMDtnvepIm7OLNrjw97UGlwF%2BS5oGMQsw1eyJvwY6pgHHEZj%2BNgNCeU1lkQYip1bdm8kWnnCjwFtYdEiUNAMEo5ktYIHoy0LNf15NYAFx0HQY46jE7hZqaaEnp%2BOptQEEZFXNne0zxW1faxMPNQP%2BUYhkIiV89VcO5jOX8%2BdyV%2F%2FYLvebsbSJDbmRTzHpNEiEYAwfz4xG7PCHR3VEW4LwOVb2Vq0NGPRLGJJ3lBj0OxU4vGviaSJZUVdq%2FaC%2Bwc0BWh3t1TE%2B&X-Amz-Signature=6bccc52c1a770a9277978b3dae8c74d1086a1e32b7612ebee0424e20364c8a48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDWZGXT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJq3AxXxuqIZ0udCpEMytyvVRS4oheIgNDqZ%2F8ty1lHAiAOi4cPHdYvL6uXPquL8Dw4olGr44khVoXQyO04TcOtkyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMvPGhl7CdoPhsTgrMKtwDj25ylou%2Fxy4QK3gllYkVhI4akkg0eF82g%2BrVzS%2Becnj12X%2FGmILb9LF6%2FgpbYH8vvakPqAOOhkQ4r5%2F1CITEl2YCLbsWo19oR5cndDXgaHTF366nUzPfDJjoxZ9pqK5ye4EJrkTh%2FKuNFtTAYrs%2B8iv9%2FCO7X1wIAWKlsBbAbecxiON0H1RuGGegXh%2BA5bxP0EByNgp1KSM%2Fwt4bSrCY1hLYv4VnQAKKkKAptOycRPQiawdotJQzvSqYgpBDdhF6bue9VT1XxTDeMDFaD4u51a9b%2BqW0pyUOOk4tR%2FwK8j%2BxdAdPwmOe5oWEQZbtvG5lO9dxBGI6Gw0CXOHKBH%2FzIAg0%2Fp64S96Pk2cSEKtA6WNeecBJDWPw1cFdWm8vFe1dbAZQ8tcoU7VY%2BjOaQuuZkTEc5DIg1Rff0gY%2FTsPKXudf%2BR4%2FvSkCzSvhECNo18e9DDyYzIyTOfEcAcXPsWlrOeIfdmLHWV2pKTjb1YNFi8MAvs2NCrnrNp4kM32bKxRWAYrvz0odSFe1SMG3QzEGM9bfmbZxM5P4YwafBxa2C0OM0W7kw5hDFEuZ5EpumaPqnDJhjlv6TH8cOb5UmU2h61HW1tdoMDtnvepIm7OLNrjw97UGlwF%2BS5oGMQsw1eyJvwY6pgHHEZj%2BNgNCeU1lkQYip1bdm8kWnnCjwFtYdEiUNAMEo5ktYIHoy0LNf15NYAFx0HQY46jE7hZqaaEnp%2BOptQEEZFXNne0zxW1faxMPNQP%2BUYhkIiV89VcO5jOX8%2BdyV%2F%2FYLvebsbSJDbmRTzHpNEiEYAwfz4xG7PCHR3VEW4LwOVb2Vq0NGPRLGJJ3lBj0OxU4vGviaSJZUVdq%2FaC%2Bwc0BWh3t1TE%2B&X-Amz-Signature=249c7a9db5b90b63e86a072fb693cd0b35419b53927d35512b0a544c372c99de&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
