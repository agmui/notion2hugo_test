---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWQEOOUT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJXtcBcSfH5K66Difycxhequgy3rL%2Fhx9532LBKR4BXQIgKpcx%2B%2BRAnfGxFHOHFvMI6fwUTmvJcAC8fRBvd7%2B1s%2FUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDOjS5EYzKEPK9akMjircA47yee8C%2BCvpRpVVEdqgQd0sOvsm%2FOC3Osz7fx%2B8IKaCTaQXwduUoAWcaCOLRYW6TZlsJTKng%2BIW6gCU4yjFIUO5APKGSC9LvLaOsXAJqGTXyopRnAPUwO9YlTITe9BLl%2Ff9HnFHGCsQbxgxaY58y1lDe6vPMuZhQYJsiNVXAJyv1LpB4WODmjbyobS6rK%2BbTRIwgdm2cG%2B087QtyH1uKXOeYt85rRb6SYj%2F1pqzzQIkJtX4D7awa50fS2fJ24TST3etkVtB5C2uTQUVzKReAzPQzeH0VPsSzVW7yxVhecBEhjMYwEO1kwicW%2BJ6SgzMmKzN9AVYZV6CRTiiRX5yNLIzEyjz6jVvfIjiC5s3vrN2SmScSBnJrLPAzxjjogaDwJ34KNq3NlSe7wNKXzsVH61LVEi7XTVFJjWmgvPQbLDbEQMp9lBBrkjvrDYXvoYrsUOdYgngmud%2FFvkbY3P3F9XIRd1Dj9p6O3QMTEUp2G3LuMcs%2B%2FKKbvO0NT1%2Fp%2BUhazOSI3tiYVkly4i3vEMqEgc7R0fLQpmzWgJUJDzhIU%2B3cXBTwT5D8zNOxosOSHpVepQjcvXmtTShNIJcdG7k%2BHmlp6ui1Y7JbBBJW4T9TC29OOPlF%2F%2FKL9FbcjwqMO%2Bf88QGOqUBlGMsWLX4n0%2F01VNc8au%2BdRhx4JAb7auQLz6VyUdQQsjNDsTIqJAR0pEvdJD%2FPqpvu6Oi6o5%2BEOTLekqO5coWm9adygWlO8ua5Qc0pqw6wUocpq1Jn%2FygOIdo2AjoAVD7g7lSPbVhaoP%2F3wkS%2BljDd5EJbdtG8xshCCwK3O8V%2FVo%2BF6ECt5uO72PfBmjcuIDIHCK4x%2F%2F2P%2BLzZ%2FEn5yV%2FR2o2IxzR&X-Amz-Signature=f797de85f6e80a19b11044eead9a3f189e45dc6d94fb6b273829c845b0522e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWQEOOUT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJXtcBcSfH5K66Difycxhequgy3rL%2Fhx9532LBKR4BXQIgKpcx%2B%2BRAnfGxFHOHFvMI6fwUTmvJcAC8fRBvd7%2B1s%2FUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDOjS5EYzKEPK9akMjircA47yee8C%2BCvpRpVVEdqgQd0sOvsm%2FOC3Osz7fx%2B8IKaCTaQXwduUoAWcaCOLRYW6TZlsJTKng%2BIW6gCU4yjFIUO5APKGSC9LvLaOsXAJqGTXyopRnAPUwO9YlTITe9BLl%2Ff9HnFHGCsQbxgxaY58y1lDe6vPMuZhQYJsiNVXAJyv1LpB4WODmjbyobS6rK%2BbTRIwgdm2cG%2B087QtyH1uKXOeYt85rRb6SYj%2F1pqzzQIkJtX4D7awa50fS2fJ24TST3etkVtB5C2uTQUVzKReAzPQzeH0VPsSzVW7yxVhecBEhjMYwEO1kwicW%2BJ6SgzMmKzN9AVYZV6CRTiiRX5yNLIzEyjz6jVvfIjiC5s3vrN2SmScSBnJrLPAzxjjogaDwJ34KNq3NlSe7wNKXzsVH61LVEi7XTVFJjWmgvPQbLDbEQMp9lBBrkjvrDYXvoYrsUOdYgngmud%2FFvkbY3P3F9XIRd1Dj9p6O3QMTEUp2G3LuMcs%2B%2FKKbvO0NT1%2Fp%2BUhazOSI3tiYVkly4i3vEMqEgc7R0fLQpmzWgJUJDzhIU%2B3cXBTwT5D8zNOxosOSHpVepQjcvXmtTShNIJcdG7k%2BHmlp6ui1Y7JbBBJW4T9TC29OOPlF%2F%2FKL9FbcjwqMO%2Bf88QGOqUBlGMsWLX4n0%2F01VNc8au%2BdRhx4JAb7auQLz6VyUdQQsjNDsTIqJAR0pEvdJD%2FPqpvu6Oi6o5%2BEOTLekqO5coWm9adygWlO8ua5Qc0pqw6wUocpq1Jn%2FygOIdo2AjoAVD7g7lSPbVhaoP%2F3wkS%2BljDd5EJbdtG8xshCCwK3O8V%2FVo%2BF6ECt5uO72PfBmjcuIDIHCK4x%2F%2F2P%2BLzZ%2FEn5yV%2FR2o2IxzR&X-Amz-Signature=9ebae6ce75cb986323b1373716591fa830e98e5808dfb4d814241b92770014bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWQEOOUT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJXtcBcSfH5K66Difycxhequgy3rL%2Fhx9532LBKR4BXQIgKpcx%2B%2BRAnfGxFHOHFvMI6fwUTmvJcAC8fRBvd7%2B1s%2FUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDOjS5EYzKEPK9akMjircA47yee8C%2BCvpRpVVEdqgQd0sOvsm%2FOC3Osz7fx%2B8IKaCTaQXwduUoAWcaCOLRYW6TZlsJTKng%2BIW6gCU4yjFIUO5APKGSC9LvLaOsXAJqGTXyopRnAPUwO9YlTITe9BLl%2Ff9HnFHGCsQbxgxaY58y1lDe6vPMuZhQYJsiNVXAJyv1LpB4WODmjbyobS6rK%2BbTRIwgdm2cG%2B087QtyH1uKXOeYt85rRb6SYj%2F1pqzzQIkJtX4D7awa50fS2fJ24TST3etkVtB5C2uTQUVzKReAzPQzeH0VPsSzVW7yxVhecBEhjMYwEO1kwicW%2BJ6SgzMmKzN9AVYZV6CRTiiRX5yNLIzEyjz6jVvfIjiC5s3vrN2SmScSBnJrLPAzxjjogaDwJ34KNq3NlSe7wNKXzsVH61LVEi7XTVFJjWmgvPQbLDbEQMp9lBBrkjvrDYXvoYrsUOdYgngmud%2FFvkbY3P3F9XIRd1Dj9p6O3QMTEUp2G3LuMcs%2B%2FKKbvO0NT1%2Fp%2BUhazOSI3tiYVkly4i3vEMqEgc7R0fLQpmzWgJUJDzhIU%2B3cXBTwT5D8zNOxosOSHpVepQjcvXmtTShNIJcdG7k%2BHmlp6ui1Y7JbBBJW4T9TC29OOPlF%2F%2FKL9FbcjwqMO%2Bf88QGOqUBlGMsWLX4n0%2F01VNc8au%2BdRhx4JAb7auQLz6VyUdQQsjNDsTIqJAR0pEvdJD%2FPqpvu6Oi6o5%2BEOTLekqO5coWm9adygWlO8ua5Qc0pqw6wUocpq1Jn%2FygOIdo2AjoAVD7g7lSPbVhaoP%2F3wkS%2BljDd5EJbdtG8xshCCwK3O8V%2FVo%2BF6ECt5uO72PfBmjcuIDIHCK4x%2F%2F2P%2BLzZ%2FEn5yV%2FR2o2IxzR&X-Amz-Signature=973e0f7986444060314f7f277126b98c0d5c754906686ea84da0fba7a521257b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWQEOOUT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJXtcBcSfH5K66Difycxhequgy3rL%2Fhx9532LBKR4BXQIgKpcx%2B%2BRAnfGxFHOHFvMI6fwUTmvJcAC8fRBvd7%2B1s%2FUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDOjS5EYzKEPK9akMjircA47yee8C%2BCvpRpVVEdqgQd0sOvsm%2FOC3Osz7fx%2B8IKaCTaQXwduUoAWcaCOLRYW6TZlsJTKng%2BIW6gCU4yjFIUO5APKGSC9LvLaOsXAJqGTXyopRnAPUwO9YlTITe9BLl%2Ff9HnFHGCsQbxgxaY58y1lDe6vPMuZhQYJsiNVXAJyv1LpB4WODmjbyobS6rK%2BbTRIwgdm2cG%2B087QtyH1uKXOeYt85rRb6SYj%2F1pqzzQIkJtX4D7awa50fS2fJ24TST3etkVtB5C2uTQUVzKReAzPQzeH0VPsSzVW7yxVhecBEhjMYwEO1kwicW%2BJ6SgzMmKzN9AVYZV6CRTiiRX5yNLIzEyjz6jVvfIjiC5s3vrN2SmScSBnJrLPAzxjjogaDwJ34KNq3NlSe7wNKXzsVH61LVEi7XTVFJjWmgvPQbLDbEQMp9lBBrkjvrDYXvoYrsUOdYgngmud%2FFvkbY3P3F9XIRd1Dj9p6O3QMTEUp2G3LuMcs%2B%2FKKbvO0NT1%2Fp%2BUhazOSI3tiYVkly4i3vEMqEgc7R0fLQpmzWgJUJDzhIU%2B3cXBTwT5D8zNOxosOSHpVepQjcvXmtTShNIJcdG7k%2BHmlp6ui1Y7JbBBJW4T9TC29OOPlF%2F%2FKL9FbcjwqMO%2Bf88QGOqUBlGMsWLX4n0%2F01VNc8au%2BdRhx4JAb7auQLz6VyUdQQsjNDsTIqJAR0pEvdJD%2FPqpvu6Oi6o5%2BEOTLekqO5coWm9adygWlO8ua5Qc0pqw6wUocpq1Jn%2FygOIdo2AjoAVD7g7lSPbVhaoP%2F3wkS%2BljDd5EJbdtG8xshCCwK3O8V%2FVo%2BF6ECt5uO72PfBmjcuIDIHCK4x%2F%2F2P%2BLzZ%2FEn5yV%2FR2o2IxzR&X-Amz-Signature=c400c11f24e7b9fbe16bb80c49d769280e661eea2bba0d39edd3dc3fada73db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWQEOOUT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJXtcBcSfH5K66Difycxhequgy3rL%2Fhx9532LBKR4BXQIgKpcx%2B%2BRAnfGxFHOHFvMI6fwUTmvJcAC8fRBvd7%2B1s%2FUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDOjS5EYzKEPK9akMjircA47yee8C%2BCvpRpVVEdqgQd0sOvsm%2FOC3Osz7fx%2B8IKaCTaQXwduUoAWcaCOLRYW6TZlsJTKng%2BIW6gCU4yjFIUO5APKGSC9LvLaOsXAJqGTXyopRnAPUwO9YlTITe9BLl%2Ff9HnFHGCsQbxgxaY58y1lDe6vPMuZhQYJsiNVXAJyv1LpB4WODmjbyobS6rK%2BbTRIwgdm2cG%2B087QtyH1uKXOeYt85rRb6SYj%2F1pqzzQIkJtX4D7awa50fS2fJ24TST3etkVtB5C2uTQUVzKReAzPQzeH0VPsSzVW7yxVhecBEhjMYwEO1kwicW%2BJ6SgzMmKzN9AVYZV6CRTiiRX5yNLIzEyjz6jVvfIjiC5s3vrN2SmScSBnJrLPAzxjjogaDwJ34KNq3NlSe7wNKXzsVH61LVEi7XTVFJjWmgvPQbLDbEQMp9lBBrkjvrDYXvoYrsUOdYgngmud%2FFvkbY3P3F9XIRd1Dj9p6O3QMTEUp2G3LuMcs%2B%2FKKbvO0NT1%2Fp%2BUhazOSI3tiYVkly4i3vEMqEgc7R0fLQpmzWgJUJDzhIU%2B3cXBTwT5D8zNOxosOSHpVepQjcvXmtTShNIJcdG7k%2BHmlp6ui1Y7JbBBJW4T9TC29OOPlF%2F%2FKL9FbcjwqMO%2Bf88QGOqUBlGMsWLX4n0%2F01VNc8au%2BdRhx4JAb7auQLz6VyUdQQsjNDsTIqJAR0pEvdJD%2FPqpvu6Oi6o5%2BEOTLekqO5coWm9adygWlO8ua5Qc0pqw6wUocpq1Jn%2FygOIdo2AjoAVD7g7lSPbVhaoP%2F3wkS%2BljDd5EJbdtG8xshCCwK3O8V%2FVo%2BF6ECt5uO72PfBmjcuIDIHCK4x%2F%2F2P%2BLzZ%2FEn5yV%2FR2o2IxzR&X-Amz-Signature=9bb00a101d165d978d26955c2af7fe599a68324ba1695814b8778c4d9eeb24c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
