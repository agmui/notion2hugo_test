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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPKPBV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID5pR2KqThmw1R6p%2F4E%2FcEdb3Hn%2FXe70zkxVU8Kvzu9MAiEA2KvY5ATFG%2Bs2Cn67GS2NexkP8NsfAIcQgsDlAaYU4SAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEtIUqS2yzvQ29ukUSrcA6QzoizMeZcFxIG3OwX%2F%2FTfo%2FacDN65wEnpawtXbpYZevdqa5G1HjVsJlaj0euf7FncTVOjfywl%2BbifgCSn0kcjNtFlR961SivW6CHxBlxCGjuKP6acZROp2Ggb9VJo6AsY6E6YWkXR9144eGjIdCAfg2ExGzBHhKnpQvM0SUxbBQlY8Uh2eOy4j%2FofobRqLvv2HnjnIf%2Bl7rzsDQByzz0CBiXMfO1620Y0stjmh5Av2HBfc6Mk2HDmgUVeHqNoGCi2EpkSqzpjPENvteR1ieedaiQC0tTu4B%2FnMPyQqNWn%2BvjMF4nrlBb%2Fl%2FYfbiYtwFpHbnbz8%2B8fTxK3b9dj%2BE9hX3Mja46u5NbO33SG4EEoLkxBeLPVgRg2wijisJliXSpbUTFidaNOSyzrQQIQetGlOyMKwX%2BcWu77p4CfhPFnWhxthIkiw%2Fng1n5n1OUlrGG754qVUpXHTCTCsjcQhUIq%2FJKzoPnwx5TvH87UxtuO8JR3pbhoTACNqzuB9prbVGyk2NsOwV%2Bg3v8vXkcNlvjcbccr4Xsb3yqbkK315ekT6W52C6wWCdN3YiC8qeUCMCowH6SPiihS9%2F2LjW06DCOzKqqSE7khdSz4CWt2Zu%2FeN0fZW74H%2FXLN0ksnrMPK2%2FMQGOqUBqMZqnLlSy7GPmYXicFgg%2FANHQb7r93Jc0yG4YqfWzvJI0byHV74FY6Q2J%2Fbs8jCRKP3I275Hj%2BRb6%2FMtPe9UM1BjBQnP0Z1wBC4ae1Hz%2FWw7CQChp%2B62s3Kzz6y%2BBCRrhGCYJAZquo6Bi6NE0dyLFnJFENLYRPc6o5lAFnHVQ8BwysAzbDPV6LvV1b9YonvyHfMmXz0%2Ft22HqrboByGpCLIjRsE1&X-Amz-Signature=8f24aa686fed297f3b1ab56b199758784ecd13e3ddc779d0b7aabf8119771a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPKPBV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID5pR2KqThmw1R6p%2F4E%2FcEdb3Hn%2FXe70zkxVU8Kvzu9MAiEA2KvY5ATFG%2Bs2Cn67GS2NexkP8NsfAIcQgsDlAaYU4SAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEtIUqS2yzvQ29ukUSrcA6QzoizMeZcFxIG3OwX%2F%2FTfo%2FacDN65wEnpawtXbpYZevdqa5G1HjVsJlaj0euf7FncTVOjfywl%2BbifgCSn0kcjNtFlR961SivW6CHxBlxCGjuKP6acZROp2Ggb9VJo6AsY6E6YWkXR9144eGjIdCAfg2ExGzBHhKnpQvM0SUxbBQlY8Uh2eOy4j%2FofobRqLvv2HnjnIf%2Bl7rzsDQByzz0CBiXMfO1620Y0stjmh5Av2HBfc6Mk2HDmgUVeHqNoGCi2EpkSqzpjPENvteR1ieedaiQC0tTu4B%2FnMPyQqNWn%2BvjMF4nrlBb%2Fl%2FYfbiYtwFpHbnbz8%2B8fTxK3b9dj%2BE9hX3Mja46u5NbO33SG4EEoLkxBeLPVgRg2wijisJliXSpbUTFidaNOSyzrQQIQetGlOyMKwX%2BcWu77p4CfhPFnWhxthIkiw%2Fng1n5n1OUlrGG754qVUpXHTCTCsjcQhUIq%2FJKzoPnwx5TvH87UxtuO8JR3pbhoTACNqzuB9prbVGyk2NsOwV%2Bg3v8vXkcNlvjcbccr4Xsb3yqbkK315ekT6W52C6wWCdN3YiC8qeUCMCowH6SPiihS9%2F2LjW06DCOzKqqSE7khdSz4CWt2Zu%2FeN0fZW74H%2FXLN0ksnrMPK2%2FMQGOqUBqMZqnLlSy7GPmYXicFgg%2FANHQb7r93Jc0yG4YqfWzvJI0byHV74FY6Q2J%2Fbs8jCRKP3I275Hj%2BRb6%2FMtPe9UM1BjBQnP0Z1wBC4ae1Hz%2FWw7CQChp%2B62s3Kzz6y%2BBCRrhGCYJAZquo6Bi6NE0dyLFnJFENLYRPc6o5lAFnHVQ8BwysAzbDPV6LvV1b9YonvyHfMmXz0%2Ft22HqrboByGpCLIjRsE1&X-Amz-Signature=a031c778a099cb16c1ef96110f56912ff238373951e0bef1d22c12912cdac73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPKPBV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID5pR2KqThmw1R6p%2F4E%2FcEdb3Hn%2FXe70zkxVU8Kvzu9MAiEA2KvY5ATFG%2Bs2Cn67GS2NexkP8NsfAIcQgsDlAaYU4SAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEtIUqS2yzvQ29ukUSrcA6QzoizMeZcFxIG3OwX%2F%2FTfo%2FacDN65wEnpawtXbpYZevdqa5G1HjVsJlaj0euf7FncTVOjfywl%2BbifgCSn0kcjNtFlR961SivW6CHxBlxCGjuKP6acZROp2Ggb9VJo6AsY6E6YWkXR9144eGjIdCAfg2ExGzBHhKnpQvM0SUxbBQlY8Uh2eOy4j%2FofobRqLvv2HnjnIf%2Bl7rzsDQByzz0CBiXMfO1620Y0stjmh5Av2HBfc6Mk2HDmgUVeHqNoGCi2EpkSqzpjPENvteR1ieedaiQC0tTu4B%2FnMPyQqNWn%2BvjMF4nrlBb%2Fl%2FYfbiYtwFpHbnbz8%2B8fTxK3b9dj%2BE9hX3Mja46u5NbO33SG4EEoLkxBeLPVgRg2wijisJliXSpbUTFidaNOSyzrQQIQetGlOyMKwX%2BcWu77p4CfhPFnWhxthIkiw%2Fng1n5n1OUlrGG754qVUpXHTCTCsjcQhUIq%2FJKzoPnwx5TvH87UxtuO8JR3pbhoTACNqzuB9prbVGyk2NsOwV%2Bg3v8vXkcNlvjcbccr4Xsb3yqbkK315ekT6W52C6wWCdN3YiC8qeUCMCowH6SPiihS9%2F2LjW06DCOzKqqSE7khdSz4CWt2Zu%2FeN0fZW74H%2FXLN0ksnrMPK2%2FMQGOqUBqMZqnLlSy7GPmYXicFgg%2FANHQb7r93Jc0yG4YqfWzvJI0byHV74FY6Q2J%2Fbs8jCRKP3I275Hj%2BRb6%2FMtPe9UM1BjBQnP0Z1wBC4ae1Hz%2FWw7CQChp%2B62s3Kzz6y%2BBCRrhGCYJAZquo6Bi6NE0dyLFnJFENLYRPc6o5lAFnHVQ8BwysAzbDPV6LvV1b9YonvyHfMmXz0%2Ft22HqrboByGpCLIjRsE1&X-Amz-Signature=50caacb4366906b529c95d2f93beea385911aa4cedd78317a53f047e4017e113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPKPBV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID5pR2KqThmw1R6p%2F4E%2FcEdb3Hn%2FXe70zkxVU8Kvzu9MAiEA2KvY5ATFG%2Bs2Cn67GS2NexkP8NsfAIcQgsDlAaYU4SAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEtIUqS2yzvQ29ukUSrcA6QzoizMeZcFxIG3OwX%2F%2FTfo%2FacDN65wEnpawtXbpYZevdqa5G1HjVsJlaj0euf7FncTVOjfywl%2BbifgCSn0kcjNtFlR961SivW6CHxBlxCGjuKP6acZROp2Ggb9VJo6AsY6E6YWkXR9144eGjIdCAfg2ExGzBHhKnpQvM0SUxbBQlY8Uh2eOy4j%2FofobRqLvv2HnjnIf%2Bl7rzsDQByzz0CBiXMfO1620Y0stjmh5Av2HBfc6Mk2HDmgUVeHqNoGCi2EpkSqzpjPENvteR1ieedaiQC0tTu4B%2FnMPyQqNWn%2BvjMF4nrlBb%2Fl%2FYfbiYtwFpHbnbz8%2B8fTxK3b9dj%2BE9hX3Mja46u5NbO33SG4EEoLkxBeLPVgRg2wijisJliXSpbUTFidaNOSyzrQQIQetGlOyMKwX%2BcWu77p4CfhPFnWhxthIkiw%2Fng1n5n1OUlrGG754qVUpXHTCTCsjcQhUIq%2FJKzoPnwx5TvH87UxtuO8JR3pbhoTACNqzuB9prbVGyk2NsOwV%2Bg3v8vXkcNlvjcbccr4Xsb3yqbkK315ekT6W52C6wWCdN3YiC8qeUCMCowH6SPiihS9%2F2LjW06DCOzKqqSE7khdSz4CWt2Zu%2FeN0fZW74H%2FXLN0ksnrMPK2%2FMQGOqUBqMZqnLlSy7GPmYXicFgg%2FANHQb7r93Jc0yG4YqfWzvJI0byHV74FY6Q2J%2Fbs8jCRKP3I275Hj%2BRb6%2FMtPe9UM1BjBQnP0Z1wBC4ae1Hz%2FWw7CQChp%2B62s3Kzz6y%2BBCRrhGCYJAZquo6Bi6NE0dyLFnJFENLYRPc6o5lAFnHVQ8BwysAzbDPV6LvV1b9YonvyHfMmXz0%2Ft22HqrboByGpCLIjRsE1&X-Amz-Signature=66bfa9bf7d816f0d8d7cb7bcb486f00f611fdf0da787e6910839d39a2a9e582e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPKPBV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID5pR2KqThmw1R6p%2F4E%2FcEdb3Hn%2FXe70zkxVU8Kvzu9MAiEA2KvY5ATFG%2Bs2Cn67GS2NexkP8NsfAIcQgsDlAaYU4SAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEtIUqS2yzvQ29ukUSrcA6QzoizMeZcFxIG3OwX%2F%2FTfo%2FacDN65wEnpawtXbpYZevdqa5G1HjVsJlaj0euf7FncTVOjfywl%2BbifgCSn0kcjNtFlR961SivW6CHxBlxCGjuKP6acZROp2Ggb9VJo6AsY6E6YWkXR9144eGjIdCAfg2ExGzBHhKnpQvM0SUxbBQlY8Uh2eOy4j%2FofobRqLvv2HnjnIf%2Bl7rzsDQByzz0CBiXMfO1620Y0stjmh5Av2HBfc6Mk2HDmgUVeHqNoGCi2EpkSqzpjPENvteR1ieedaiQC0tTu4B%2FnMPyQqNWn%2BvjMF4nrlBb%2Fl%2FYfbiYtwFpHbnbz8%2B8fTxK3b9dj%2BE9hX3Mja46u5NbO33SG4EEoLkxBeLPVgRg2wijisJliXSpbUTFidaNOSyzrQQIQetGlOyMKwX%2BcWu77p4CfhPFnWhxthIkiw%2Fng1n5n1OUlrGG754qVUpXHTCTCsjcQhUIq%2FJKzoPnwx5TvH87UxtuO8JR3pbhoTACNqzuB9prbVGyk2NsOwV%2Bg3v8vXkcNlvjcbccr4Xsb3yqbkK315ekT6W52C6wWCdN3YiC8qeUCMCowH6SPiihS9%2F2LjW06DCOzKqqSE7khdSz4CWt2Zu%2FeN0fZW74H%2FXLN0ksnrMPK2%2FMQGOqUBqMZqnLlSy7GPmYXicFgg%2FANHQb7r93Jc0yG4YqfWzvJI0byHV74FY6Q2J%2Fbs8jCRKP3I275Hj%2BRb6%2FMtPe9UM1BjBQnP0Z1wBC4ae1Hz%2FWw7CQChp%2B62s3Kzz6y%2BBCRrhGCYJAZquo6Bi6NE0dyLFnJFENLYRPc6o5lAFnHVQ8BwysAzbDPV6LvV1b9YonvyHfMmXz0%2Ft22HqrboByGpCLIjRsE1&X-Amz-Signature=3d839ce380b89a18bcc9856c0af622693639b0a47d8bd096d0812fb68acedc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
