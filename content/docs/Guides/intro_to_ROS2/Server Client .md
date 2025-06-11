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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP6WQEQH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC5ZD9TzjTu9QsiKsF2DPwWK9w5zBglvDW881VVxneaZgIhAOSngSOIMBWsvyGVbFL%2BKqSOYGKiSKiy2HWqC4fNLxABKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv2kjqTx%2BZ8yn057oq3ANqi%2B%2BmwdZ5J38wb4wpBnH36mOQg9dZNpk1LxJnk2MXlhW13yjmQxmpwfTJTim1hpDsm2Ea8%2FEGoJRfuvc8VtQ09b%2BMsoNLr0Uu2%2FXEQJ%2BlavHY0ESLim1od%2FBoSyev6%2Bbk18MQ3SCqyCVQeuVar077cGPaYOZR3tyShjvN%2Bw50mt1IN5cpRZo3L6zUxe6wbltDaH%2F4Vo80aZsczeASmucbc23rbDsT%2FGxfgXmFK0TNUwg1fej30F6z98B51pw08Jbc%2Ff8EW%2FEIJ4qrouhLLkSxKcDEsja2%2Fs2wrwaDA%2FqFoLg3BoQa7zbyEcsoyCOduOxSSwbwOtvKI3NCiiDXhUkJdzJMVOmVs2jFTh0r3L33rxYQr0toqyimBWOVm2qjsQC%2B83fkNeqm3wkCyxjcAb3jodJg10ICgFkEFeccjjq5ZDYw2RvHSALOqZKnUvTORMbOMcpc2ShAt97yIluaseLYI43AAHyEYf0Ao0RHCfSfkGvlqGa8oSybJq5oZw1jHUqB9tAUF6jS7R7InlscPh0qeonw8%2FWB%2B8GnmpyNXuloQ5d4Nr5UBJdOcFH0cozeM5WgMOCd%2BoHLSutzrVe%2FD8YTkj%2BFriaBsJ9%2BfAdocNtaf8A533FB68qW9PX9zzDj16fCBjqkAWLjcSVx%2FI5gxL6b3ME74u6x%2F%2Fd%2FMND%2FLHQqU%2B8qstqcH6mxSzt%2FnAhJlzvk1IJMScbUnZpqPqr8i73xUYxC1jSfqKCbOT%2F5gWYaG2mkex4sBzp6Mbh%2BnC9UsdiEOtDExguJHeA9QwHtrJRHvJ9nHtvRslMNNTYEIP%2FsZ0Nf2AXFD%2ByqtXoMMDDOblOfN7kFdlAilEBjaRxae00n2nq3tmn7ODmE&X-Amz-Signature=1de622252019b91b504176450394d0bce334c4622efd73853da9c904e4a89124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP6WQEQH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC5ZD9TzjTu9QsiKsF2DPwWK9w5zBglvDW881VVxneaZgIhAOSngSOIMBWsvyGVbFL%2BKqSOYGKiSKiy2HWqC4fNLxABKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv2kjqTx%2BZ8yn057oq3ANqi%2B%2BmwdZ5J38wb4wpBnH36mOQg9dZNpk1LxJnk2MXlhW13yjmQxmpwfTJTim1hpDsm2Ea8%2FEGoJRfuvc8VtQ09b%2BMsoNLr0Uu2%2FXEQJ%2BlavHY0ESLim1od%2FBoSyev6%2Bbk18MQ3SCqyCVQeuVar077cGPaYOZR3tyShjvN%2Bw50mt1IN5cpRZo3L6zUxe6wbltDaH%2F4Vo80aZsczeASmucbc23rbDsT%2FGxfgXmFK0TNUwg1fej30F6z98B51pw08Jbc%2Ff8EW%2FEIJ4qrouhLLkSxKcDEsja2%2Fs2wrwaDA%2FqFoLg3BoQa7zbyEcsoyCOduOxSSwbwOtvKI3NCiiDXhUkJdzJMVOmVs2jFTh0r3L33rxYQr0toqyimBWOVm2qjsQC%2B83fkNeqm3wkCyxjcAb3jodJg10ICgFkEFeccjjq5ZDYw2RvHSALOqZKnUvTORMbOMcpc2ShAt97yIluaseLYI43AAHyEYf0Ao0RHCfSfkGvlqGa8oSybJq5oZw1jHUqB9tAUF6jS7R7InlscPh0qeonw8%2FWB%2B8GnmpyNXuloQ5d4Nr5UBJdOcFH0cozeM5WgMOCd%2BoHLSutzrVe%2FD8YTkj%2BFriaBsJ9%2BfAdocNtaf8A533FB68qW9PX9zzDj16fCBjqkAWLjcSVx%2FI5gxL6b3ME74u6x%2F%2Fd%2FMND%2FLHQqU%2B8qstqcH6mxSzt%2FnAhJlzvk1IJMScbUnZpqPqr8i73xUYxC1jSfqKCbOT%2F5gWYaG2mkex4sBzp6Mbh%2BnC9UsdiEOtDExguJHeA9QwHtrJRHvJ9nHtvRslMNNTYEIP%2FsZ0Nf2AXFD%2ByqtXoMMDDOblOfN7kFdlAilEBjaRxae00n2nq3tmn7ODmE&X-Amz-Signature=3d732f14584969fd317448680febd540a085427e5809e17f5a8b2773bcb7e2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP6WQEQH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC5ZD9TzjTu9QsiKsF2DPwWK9w5zBglvDW881VVxneaZgIhAOSngSOIMBWsvyGVbFL%2BKqSOYGKiSKiy2HWqC4fNLxABKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv2kjqTx%2BZ8yn057oq3ANqi%2B%2BmwdZ5J38wb4wpBnH36mOQg9dZNpk1LxJnk2MXlhW13yjmQxmpwfTJTim1hpDsm2Ea8%2FEGoJRfuvc8VtQ09b%2BMsoNLr0Uu2%2FXEQJ%2BlavHY0ESLim1od%2FBoSyev6%2Bbk18MQ3SCqyCVQeuVar077cGPaYOZR3tyShjvN%2Bw50mt1IN5cpRZo3L6zUxe6wbltDaH%2F4Vo80aZsczeASmucbc23rbDsT%2FGxfgXmFK0TNUwg1fej30F6z98B51pw08Jbc%2Ff8EW%2FEIJ4qrouhLLkSxKcDEsja2%2Fs2wrwaDA%2FqFoLg3BoQa7zbyEcsoyCOduOxSSwbwOtvKI3NCiiDXhUkJdzJMVOmVs2jFTh0r3L33rxYQr0toqyimBWOVm2qjsQC%2B83fkNeqm3wkCyxjcAb3jodJg10ICgFkEFeccjjq5ZDYw2RvHSALOqZKnUvTORMbOMcpc2ShAt97yIluaseLYI43AAHyEYf0Ao0RHCfSfkGvlqGa8oSybJq5oZw1jHUqB9tAUF6jS7R7InlscPh0qeonw8%2FWB%2B8GnmpyNXuloQ5d4Nr5UBJdOcFH0cozeM5WgMOCd%2BoHLSutzrVe%2FD8YTkj%2BFriaBsJ9%2BfAdocNtaf8A533FB68qW9PX9zzDj16fCBjqkAWLjcSVx%2FI5gxL6b3ME74u6x%2F%2Fd%2FMND%2FLHQqU%2B8qstqcH6mxSzt%2FnAhJlzvk1IJMScbUnZpqPqr8i73xUYxC1jSfqKCbOT%2F5gWYaG2mkex4sBzp6Mbh%2BnC9UsdiEOtDExguJHeA9QwHtrJRHvJ9nHtvRslMNNTYEIP%2FsZ0Nf2AXFD%2ByqtXoMMDDOblOfN7kFdlAilEBjaRxae00n2nq3tmn7ODmE&X-Amz-Signature=7aa160e46888f65627f079ab9f9738ab7d00c10625c9277b90f5900899ec2cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP6WQEQH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC5ZD9TzjTu9QsiKsF2DPwWK9w5zBglvDW881VVxneaZgIhAOSngSOIMBWsvyGVbFL%2BKqSOYGKiSKiy2HWqC4fNLxABKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv2kjqTx%2BZ8yn057oq3ANqi%2B%2BmwdZ5J38wb4wpBnH36mOQg9dZNpk1LxJnk2MXlhW13yjmQxmpwfTJTim1hpDsm2Ea8%2FEGoJRfuvc8VtQ09b%2BMsoNLr0Uu2%2FXEQJ%2BlavHY0ESLim1od%2FBoSyev6%2Bbk18MQ3SCqyCVQeuVar077cGPaYOZR3tyShjvN%2Bw50mt1IN5cpRZo3L6zUxe6wbltDaH%2F4Vo80aZsczeASmucbc23rbDsT%2FGxfgXmFK0TNUwg1fej30F6z98B51pw08Jbc%2Ff8EW%2FEIJ4qrouhLLkSxKcDEsja2%2Fs2wrwaDA%2FqFoLg3BoQa7zbyEcsoyCOduOxSSwbwOtvKI3NCiiDXhUkJdzJMVOmVs2jFTh0r3L33rxYQr0toqyimBWOVm2qjsQC%2B83fkNeqm3wkCyxjcAb3jodJg10ICgFkEFeccjjq5ZDYw2RvHSALOqZKnUvTORMbOMcpc2ShAt97yIluaseLYI43AAHyEYf0Ao0RHCfSfkGvlqGa8oSybJq5oZw1jHUqB9tAUF6jS7R7InlscPh0qeonw8%2FWB%2B8GnmpyNXuloQ5d4Nr5UBJdOcFH0cozeM5WgMOCd%2BoHLSutzrVe%2FD8YTkj%2BFriaBsJ9%2BfAdocNtaf8A533FB68qW9PX9zzDj16fCBjqkAWLjcSVx%2FI5gxL6b3ME74u6x%2F%2Fd%2FMND%2FLHQqU%2B8qstqcH6mxSzt%2FnAhJlzvk1IJMScbUnZpqPqr8i73xUYxC1jSfqKCbOT%2F5gWYaG2mkex4sBzp6Mbh%2BnC9UsdiEOtDExguJHeA9QwHtrJRHvJ9nHtvRslMNNTYEIP%2FsZ0Nf2AXFD%2ByqtXoMMDDOblOfN7kFdlAilEBjaRxae00n2nq3tmn7ODmE&X-Amz-Signature=cbf6c5e45420ebaf8271bcf4a0d132412fe26bd92f88d596e17229ad31950892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP6WQEQH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC5ZD9TzjTu9QsiKsF2DPwWK9w5zBglvDW881VVxneaZgIhAOSngSOIMBWsvyGVbFL%2BKqSOYGKiSKiy2HWqC4fNLxABKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv2kjqTx%2BZ8yn057oq3ANqi%2B%2BmwdZ5J38wb4wpBnH36mOQg9dZNpk1LxJnk2MXlhW13yjmQxmpwfTJTim1hpDsm2Ea8%2FEGoJRfuvc8VtQ09b%2BMsoNLr0Uu2%2FXEQJ%2BlavHY0ESLim1od%2FBoSyev6%2Bbk18MQ3SCqyCVQeuVar077cGPaYOZR3tyShjvN%2Bw50mt1IN5cpRZo3L6zUxe6wbltDaH%2F4Vo80aZsczeASmucbc23rbDsT%2FGxfgXmFK0TNUwg1fej30F6z98B51pw08Jbc%2Ff8EW%2FEIJ4qrouhLLkSxKcDEsja2%2Fs2wrwaDA%2FqFoLg3BoQa7zbyEcsoyCOduOxSSwbwOtvKI3NCiiDXhUkJdzJMVOmVs2jFTh0r3L33rxYQr0toqyimBWOVm2qjsQC%2B83fkNeqm3wkCyxjcAb3jodJg10ICgFkEFeccjjq5ZDYw2RvHSALOqZKnUvTORMbOMcpc2ShAt97yIluaseLYI43AAHyEYf0Ao0RHCfSfkGvlqGa8oSybJq5oZw1jHUqB9tAUF6jS7R7InlscPh0qeonw8%2FWB%2B8GnmpyNXuloQ5d4Nr5UBJdOcFH0cozeM5WgMOCd%2BoHLSutzrVe%2FD8YTkj%2BFriaBsJ9%2BfAdocNtaf8A533FB68qW9PX9zzDj16fCBjqkAWLjcSVx%2FI5gxL6b3ME74u6x%2F%2Fd%2FMND%2FLHQqU%2B8qstqcH6mxSzt%2FnAhJlzvk1IJMScbUnZpqPqr8i73xUYxC1jSfqKCbOT%2F5gWYaG2mkex4sBzp6Mbh%2BnC9UsdiEOtDExguJHeA9QwHtrJRHvJ9nHtvRslMNNTYEIP%2FsZ0Nf2AXFD%2ByqtXoMMDDOblOfN7kFdlAilEBjaRxae00n2nq3tmn7ODmE&X-Amz-Signature=f0a75dd4e3e807ab9ed2c313fce274a2c422a114e9d1521668f65bc1e91a72fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
