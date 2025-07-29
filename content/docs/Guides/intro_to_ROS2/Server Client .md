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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3FGZL2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEpXSVkse60MJC7An9jL4%2B%2FfQy%2BGNNMiQegJDfTSevizAiAMnwwyXFwbJFzV5UmoEDHfCtOzPCV7WPge%2BhHTRSLi0SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTdJjB6ZyriWQVpqTKtwDeB1YDp64LAB5KyXf3yb1c1IlaH3tm9ySZFgaG7KPy8ixj7EucscoFvyot8HRRLyW%2BbxCqnowHyuc%2BxQg0rRDAceRNFnp824aROz03xASaWryIK6f1hI47CPoOGTkXlPNwP0mrkpb50JzrFzU0ITK5NFycMiI%2BzQS7hf0VyUGy6Iexd5qd5e0NMKaTT96B04dYHw85FR7PqoVkMoxWCZ%2BZeUyMkAB2iaQo40Qp2o9DLKZigovGQn4VeNQ4wDT7%2BxY21fuDb0ZnJyIg1pFUZUtgyXRLQMsARriV3uQtzw7tjNixIPAUb7xKne4Qj16wyYpa4nqt6SgBI25UEUGBDkBGzJERhFXAL7Nn%2B3B0Fv84uHZ5BSQf28hCuyixJ%2FNAtwZjc3nOkRCPuZkmrchdJ0F6%2FkampjflhLgMAJxdCu7nTfUqRnLU16g5cgYI3dR%2F53E%2F%2B9dfriV0T7OkaIEa1ZzHfAIbr3PEu6nBOykAuKcAx4t7mrmyaHVSeaokcY%2BLY1pSraTdj4GPy2tDW6VZDieNyAw9OrrOG46J30%2B3oDcn83BazKpxqABTVtQ4lqzDK86enIjkmGUbbU1r43HEe8JlFMnLLrYeedeRuKwsc8RTSUH7ohCr%2FZkSOHAkEQw58ugxAY6pgFSF9vIEVaJGWSSPDb5C6gjDA43Qeaex0wOCJrvooLRZIgvBfh44iSC8y3fp0oQM%2BSzT%2Fd%2BnZKSaxq%2FGjpKS5%2FDy7Xiwz%2FN5IDfUNiaIf%2FUA1Y3AsCA2B36q7HqQSODgSf6W9N%2BoCfSyKRdg%2FRnqDp1%2F4ofjN1J90jPFkA6hi0alZqz%2FBVZ3m%2F9deKOSj0k1SxQQ%2FuXR3A%2F7dMHeijXoCzm%2BrFSyRQ%2B&X-Amz-Signature=ba982e63e86130f26126e04da6b16ac248d2a848288ecccecbf6fc65b976a901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3FGZL2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEpXSVkse60MJC7An9jL4%2B%2FfQy%2BGNNMiQegJDfTSevizAiAMnwwyXFwbJFzV5UmoEDHfCtOzPCV7WPge%2BhHTRSLi0SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTdJjB6ZyriWQVpqTKtwDeB1YDp64LAB5KyXf3yb1c1IlaH3tm9ySZFgaG7KPy8ixj7EucscoFvyot8HRRLyW%2BbxCqnowHyuc%2BxQg0rRDAceRNFnp824aROz03xASaWryIK6f1hI47CPoOGTkXlPNwP0mrkpb50JzrFzU0ITK5NFycMiI%2BzQS7hf0VyUGy6Iexd5qd5e0NMKaTT96B04dYHw85FR7PqoVkMoxWCZ%2BZeUyMkAB2iaQo40Qp2o9DLKZigovGQn4VeNQ4wDT7%2BxY21fuDb0ZnJyIg1pFUZUtgyXRLQMsARriV3uQtzw7tjNixIPAUb7xKne4Qj16wyYpa4nqt6SgBI25UEUGBDkBGzJERhFXAL7Nn%2B3B0Fv84uHZ5BSQf28hCuyixJ%2FNAtwZjc3nOkRCPuZkmrchdJ0F6%2FkampjflhLgMAJxdCu7nTfUqRnLU16g5cgYI3dR%2F53E%2F%2B9dfriV0T7OkaIEa1ZzHfAIbr3PEu6nBOykAuKcAx4t7mrmyaHVSeaokcY%2BLY1pSraTdj4GPy2tDW6VZDieNyAw9OrrOG46J30%2B3oDcn83BazKpxqABTVtQ4lqzDK86enIjkmGUbbU1r43HEe8JlFMnLLrYeedeRuKwsc8RTSUH7ohCr%2FZkSOHAkEQw58ugxAY6pgFSF9vIEVaJGWSSPDb5C6gjDA43Qeaex0wOCJrvooLRZIgvBfh44iSC8y3fp0oQM%2BSzT%2Fd%2BnZKSaxq%2FGjpKS5%2FDy7Xiwz%2FN5IDfUNiaIf%2FUA1Y3AsCA2B36q7HqQSODgSf6W9N%2BoCfSyKRdg%2FRnqDp1%2F4ofjN1J90jPFkA6hi0alZqz%2FBVZ3m%2F9deKOSj0k1SxQQ%2FuXR3A%2F7dMHeijXoCzm%2BrFSyRQ%2B&X-Amz-Signature=e86b0fa0042411d1fa827331670116cbb7f4448821c8802584eae828d18167a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3FGZL2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEpXSVkse60MJC7An9jL4%2B%2FfQy%2BGNNMiQegJDfTSevizAiAMnwwyXFwbJFzV5UmoEDHfCtOzPCV7WPge%2BhHTRSLi0SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTdJjB6ZyriWQVpqTKtwDeB1YDp64LAB5KyXf3yb1c1IlaH3tm9ySZFgaG7KPy8ixj7EucscoFvyot8HRRLyW%2BbxCqnowHyuc%2BxQg0rRDAceRNFnp824aROz03xASaWryIK6f1hI47CPoOGTkXlPNwP0mrkpb50JzrFzU0ITK5NFycMiI%2BzQS7hf0VyUGy6Iexd5qd5e0NMKaTT96B04dYHw85FR7PqoVkMoxWCZ%2BZeUyMkAB2iaQo40Qp2o9DLKZigovGQn4VeNQ4wDT7%2BxY21fuDb0ZnJyIg1pFUZUtgyXRLQMsARriV3uQtzw7tjNixIPAUb7xKne4Qj16wyYpa4nqt6SgBI25UEUGBDkBGzJERhFXAL7Nn%2B3B0Fv84uHZ5BSQf28hCuyixJ%2FNAtwZjc3nOkRCPuZkmrchdJ0F6%2FkampjflhLgMAJxdCu7nTfUqRnLU16g5cgYI3dR%2F53E%2F%2B9dfriV0T7OkaIEa1ZzHfAIbr3PEu6nBOykAuKcAx4t7mrmyaHVSeaokcY%2BLY1pSraTdj4GPy2tDW6VZDieNyAw9OrrOG46J30%2B3oDcn83BazKpxqABTVtQ4lqzDK86enIjkmGUbbU1r43HEe8JlFMnLLrYeedeRuKwsc8RTSUH7ohCr%2FZkSOHAkEQw58ugxAY6pgFSF9vIEVaJGWSSPDb5C6gjDA43Qeaex0wOCJrvooLRZIgvBfh44iSC8y3fp0oQM%2BSzT%2Fd%2BnZKSaxq%2FGjpKS5%2FDy7Xiwz%2FN5IDfUNiaIf%2FUA1Y3AsCA2B36q7HqQSODgSf6W9N%2BoCfSyKRdg%2FRnqDp1%2F4ofjN1J90jPFkA6hi0alZqz%2FBVZ3m%2F9deKOSj0k1SxQQ%2FuXR3A%2F7dMHeijXoCzm%2BrFSyRQ%2B&X-Amz-Signature=1d95c8ae4a686445be4745dd7a87262759e0acf439acb98d28beeb49d4844320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3FGZL2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEpXSVkse60MJC7An9jL4%2B%2FfQy%2BGNNMiQegJDfTSevizAiAMnwwyXFwbJFzV5UmoEDHfCtOzPCV7WPge%2BhHTRSLi0SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTdJjB6ZyriWQVpqTKtwDeB1YDp64LAB5KyXf3yb1c1IlaH3tm9ySZFgaG7KPy8ixj7EucscoFvyot8HRRLyW%2BbxCqnowHyuc%2BxQg0rRDAceRNFnp824aROz03xASaWryIK6f1hI47CPoOGTkXlPNwP0mrkpb50JzrFzU0ITK5NFycMiI%2BzQS7hf0VyUGy6Iexd5qd5e0NMKaTT96B04dYHw85FR7PqoVkMoxWCZ%2BZeUyMkAB2iaQo40Qp2o9DLKZigovGQn4VeNQ4wDT7%2BxY21fuDb0ZnJyIg1pFUZUtgyXRLQMsARriV3uQtzw7tjNixIPAUb7xKne4Qj16wyYpa4nqt6SgBI25UEUGBDkBGzJERhFXAL7Nn%2B3B0Fv84uHZ5BSQf28hCuyixJ%2FNAtwZjc3nOkRCPuZkmrchdJ0F6%2FkampjflhLgMAJxdCu7nTfUqRnLU16g5cgYI3dR%2F53E%2F%2B9dfriV0T7OkaIEa1ZzHfAIbr3PEu6nBOykAuKcAx4t7mrmyaHVSeaokcY%2BLY1pSraTdj4GPy2tDW6VZDieNyAw9OrrOG46J30%2B3oDcn83BazKpxqABTVtQ4lqzDK86enIjkmGUbbU1r43HEe8JlFMnLLrYeedeRuKwsc8RTSUH7ohCr%2FZkSOHAkEQw58ugxAY6pgFSF9vIEVaJGWSSPDb5C6gjDA43Qeaex0wOCJrvooLRZIgvBfh44iSC8y3fp0oQM%2BSzT%2Fd%2BnZKSaxq%2FGjpKS5%2FDy7Xiwz%2FN5IDfUNiaIf%2FUA1Y3AsCA2B36q7HqQSODgSf6W9N%2BoCfSyKRdg%2FRnqDp1%2F4ofjN1J90jPFkA6hi0alZqz%2FBVZ3m%2F9deKOSj0k1SxQQ%2FuXR3A%2F7dMHeijXoCzm%2BrFSyRQ%2B&X-Amz-Signature=4426106cc04bb6a2d2ce4e0edf382e97c82cc289c7811b1eaf93dcff44c253d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3FGZL2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEpXSVkse60MJC7An9jL4%2B%2FfQy%2BGNNMiQegJDfTSevizAiAMnwwyXFwbJFzV5UmoEDHfCtOzPCV7WPge%2BhHTRSLi0SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTdJjB6ZyriWQVpqTKtwDeB1YDp64LAB5KyXf3yb1c1IlaH3tm9ySZFgaG7KPy8ixj7EucscoFvyot8HRRLyW%2BbxCqnowHyuc%2BxQg0rRDAceRNFnp824aROz03xASaWryIK6f1hI47CPoOGTkXlPNwP0mrkpb50JzrFzU0ITK5NFycMiI%2BzQS7hf0VyUGy6Iexd5qd5e0NMKaTT96B04dYHw85FR7PqoVkMoxWCZ%2BZeUyMkAB2iaQo40Qp2o9DLKZigovGQn4VeNQ4wDT7%2BxY21fuDb0ZnJyIg1pFUZUtgyXRLQMsARriV3uQtzw7tjNixIPAUb7xKne4Qj16wyYpa4nqt6SgBI25UEUGBDkBGzJERhFXAL7Nn%2B3B0Fv84uHZ5BSQf28hCuyixJ%2FNAtwZjc3nOkRCPuZkmrchdJ0F6%2FkampjflhLgMAJxdCu7nTfUqRnLU16g5cgYI3dR%2F53E%2F%2B9dfriV0T7OkaIEa1ZzHfAIbr3PEu6nBOykAuKcAx4t7mrmyaHVSeaokcY%2BLY1pSraTdj4GPy2tDW6VZDieNyAw9OrrOG46J30%2B3oDcn83BazKpxqABTVtQ4lqzDK86enIjkmGUbbU1r43HEe8JlFMnLLrYeedeRuKwsc8RTSUH7ohCr%2FZkSOHAkEQw58ugxAY6pgFSF9vIEVaJGWSSPDb5C6gjDA43Qeaex0wOCJrvooLRZIgvBfh44iSC8y3fp0oQM%2BSzT%2Fd%2BnZKSaxq%2FGjpKS5%2FDy7Xiwz%2FN5IDfUNiaIf%2FUA1Y3AsCA2B36q7HqQSODgSf6W9N%2BoCfSyKRdg%2FRnqDp1%2F4ofjN1J90jPFkA6hi0alZqz%2FBVZ3m%2F9deKOSj0k1SxQQ%2FuXR3A%2F7dMHeijXoCzm%2BrFSyRQ%2B&X-Amz-Signature=b7d446c5f229590901cfec60af2ccc9b52f738231dbb87af5cbbce5d5ef1b777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
