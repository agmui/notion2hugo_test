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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVKPPBK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaRR6EOvPnsz8YmXPHKck6tSwOQahFCogj47sD75a5WgIgSmPKKKhb34CjLS%2FcllenrRXKG%2F2munx932GHYtjJi%2BgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiDk2KUdvXxCXEZkircA%2FM9LvEWi64SmN5Pk18RD%2B9FwqvWOVsyo2UTKarwRHNPf17S5QwCXgwgIW6nRxFoiOEjgZSbcX%2FlwyjoNLzB3l1lSEClF0jvpYJIonYxVoCdGDkXY7MGYnGN3ED8JG21fWjke2okoF4RblSb8hozBt0doc5sj48DNQQ6vXBInAbDCXd6OJJagosDPwEIy4Gm6PvM88xrzfNH6xYEFnykBn4bBjYP%2BSmtaTAYt68fA%2FyDTFvvGx7UlKenIOATv4Y6CDA8KgM6J4J7WusK4AFFYjYQ35tPovNT5fj7ParR5bf31RxKe60ybfjoj5sHayDtcWRrFKGi8Tqc9SJUyiH9bm4IF9oTA2IzzqLI%2BKiIjDkoEblyxnlVLQJVAaMtJKHBtF%2BdBa8%2Bh1YWq58KVm6PtD%2FXxL7YDceny%2FiPMv2u6zYPIhF0ykpfnsi7fn833ofTdYnYw%2FlqBCmfA%2FQ%2BAxlCHFIMaHu7TPeGl6j1EKryFmropbCjE3aix5fa85cLSXw%2Fuu53HHyLVnImKmI9cCObE55EE0zIV7g14ZUlhsVebhIC0V3xzfTEtAu%2BIMLTmsBLMSue0Lb%2FARG4yc28PBtuiWmOeAzE2DDXv3XcJPq%2FMNTXMsWV9CsvRF4NGpPkMNTqrcQGOqUBOS4aIVue6Vv796yzqT4HwixIip8j515H8cDzH2HxhO6TUI7HkWDuBLMZ0iZgXiHyQH%2F45UfsMNrvj9IQb6HMwUmrfylauPM34NNA64iiUvuHBPe%2BqQq%2F9S2sJWVBpNttRDMnTgpXT%2FiFN5raBwP4lby6WK%2B73QJCIFjW8sVE4kmdNu%2FPIE612%2FDoLcOyOvcutc2precl%2BT9KBfRmjeM4pOCFCFjq&X-Amz-Signature=59bacb364ab55a02e3ee20aa875b0ac7c0c4c695e239e631f477acb614431823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVKPPBK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaRR6EOvPnsz8YmXPHKck6tSwOQahFCogj47sD75a5WgIgSmPKKKhb34CjLS%2FcllenrRXKG%2F2munx932GHYtjJi%2BgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiDk2KUdvXxCXEZkircA%2FM9LvEWi64SmN5Pk18RD%2B9FwqvWOVsyo2UTKarwRHNPf17S5QwCXgwgIW6nRxFoiOEjgZSbcX%2FlwyjoNLzB3l1lSEClF0jvpYJIonYxVoCdGDkXY7MGYnGN3ED8JG21fWjke2okoF4RblSb8hozBt0doc5sj48DNQQ6vXBInAbDCXd6OJJagosDPwEIy4Gm6PvM88xrzfNH6xYEFnykBn4bBjYP%2BSmtaTAYt68fA%2FyDTFvvGx7UlKenIOATv4Y6CDA8KgM6J4J7WusK4AFFYjYQ35tPovNT5fj7ParR5bf31RxKe60ybfjoj5sHayDtcWRrFKGi8Tqc9SJUyiH9bm4IF9oTA2IzzqLI%2BKiIjDkoEblyxnlVLQJVAaMtJKHBtF%2BdBa8%2Bh1YWq58KVm6PtD%2FXxL7YDceny%2FiPMv2u6zYPIhF0ykpfnsi7fn833ofTdYnYw%2FlqBCmfA%2FQ%2BAxlCHFIMaHu7TPeGl6j1EKryFmropbCjE3aix5fa85cLSXw%2Fuu53HHyLVnImKmI9cCObE55EE0zIV7g14ZUlhsVebhIC0V3xzfTEtAu%2BIMLTmsBLMSue0Lb%2FARG4yc28PBtuiWmOeAzE2DDXv3XcJPq%2FMNTXMsWV9CsvRF4NGpPkMNTqrcQGOqUBOS4aIVue6Vv796yzqT4HwixIip8j515H8cDzH2HxhO6TUI7HkWDuBLMZ0iZgXiHyQH%2F45UfsMNrvj9IQb6HMwUmrfylauPM34NNA64iiUvuHBPe%2BqQq%2F9S2sJWVBpNttRDMnTgpXT%2FiFN5raBwP4lby6WK%2B73QJCIFjW8sVE4kmdNu%2FPIE612%2FDoLcOyOvcutc2precl%2BT9KBfRmjeM4pOCFCFjq&X-Amz-Signature=edff0b635cb503854103a5fe0727d933705b491f7e0103bcf8692aef077bddfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVKPPBK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaRR6EOvPnsz8YmXPHKck6tSwOQahFCogj47sD75a5WgIgSmPKKKhb34CjLS%2FcllenrRXKG%2F2munx932GHYtjJi%2BgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiDk2KUdvXxCXEZkircA%2FM9LvEWi64SmN5Pk18RD%2B9FwqvWOVsyo2UTKarwRHNPf17S5QwCXgwgIW6nRxFoiOEjgZSbcX%2FlwyjoNLzB3l1lSEClF0jvpYJIonYxVoCdGDkXY7MGYnGN3ED8JG21fWjke2okoF4RblSb8hozBt0doc5sj48DNQQ6vXBInAbDCXd6OJJagosDPwEIy4Gm6PvM88xrzfNH6xYEFnykBn4bBjYP%2BSmtaTAYt68fA%2FyDTFvvGx7UlKenIOATv4Y6CDA8KgM6J4J7WusK4AFFYjYQ35tPovNT5fj7ParR5bf31RxKe60ybfjoj5sHayDtcWRrFKGi8Tqc9SJUyiH9bm4IF9oTA2IzzqLI%2BKiIjDkoEblyxnlVLQJVAaMtJKHBtF%2BdBa8%2Bh1YWq58KVm6PtD%2FXxL7YDceny%2FiPMv2u6zYPIhF0ykpfnsi7fn833ofTdYnYw%2FlqBCmfA%2FQ%2BAxlCHFIMaHu7TPeGl6j1EKryFmropbCjE3aix5fa85cLSXw%2Fuu53HHyLVnImKmI9cCObE55EE0zIV7g14ZUlhsVebhIC0V3xzfTEtAu%2BIMLTmsBLMSue0Lb%2FARG4yc28PBtuiWmOeAzE2DDXv3XcJPq%2FMNTXMsWV9CsvRF4NGpPkMNTqrcQGOqUBOS4aIVue6Vv796yzqT4HwixIip8j515H8cDzH2HxhO6TUI7HkWDuBLMZ0iZgXiHyQH%2F45UfsMNrvj9IQb6HMwUmrfylauPM34NNA64iiUvuHBPe%2BqQq%2F9S2sJWVBpNttRDMnTgpXT%2FiFN5raBwP4lby6WK%2B73QJCIFjW8sVE4kmdNu%2FPIE612%2FDoLcOyOvcutc2precl%2BT9KBfRmjeM4pOCFCFjq&X-Amz-Signature=5e8e95ed39a5c857fe988a0d249d3a976e1a0b65cb6a643f7a7b20e6d3679708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVKPPBK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaRR6EOvPnsz8YmXPHKck6tSwOQahFCogj47sD75a5WgIgSmPKKKhb34CjLS%2FcllenrRXKG%2F2munx932GHYtjJi%2BgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiDk2KUdvXxCXEZkircA%2FM9LvEWi64SmN5Pk18RD%2B9FwqvWOVsyo2UTKarwRHNPf17S5QwCXgwgIW6nRxFoiOEjgZSbcX%2FlwyjoNLzB3l1lSEClF0jvpYJIonYxVoCdGDkXY7MGYnGN3ED8JG21fWjke2okoF4RblSb8hozBt0doc5sj48DNQQ6vXBInAbDCXd6OJJagosDPwEIy4Gm6PvM88xrzfNH6xYEFnykBn4bBjYP%2BSmtaTAYt68fA%2FyDTFvvGx7UlKenIOATv4Y6CDA8KgM6J4J7WusK4AFFYjYQ35tPovNT5fj7ParR5bf31RxKe60ybfjoj5sHayDtcWRrFKGi8Tqc9SJUyiH9bm4IF9oTA2IzzqLI%2BKiIjDkoEblyxnlVLQJVAaMtJKHBtF%2BdBa8%2Bh1YWq58KVm6PtD%2FXxL7YDceny%2FiPMv2u6zYPIhF0ykpfnsi7fn833ofTdYnYw%2FlqBCmfA%2FQ%2BAxlCHFIMaHu7TPeGl6j1EKryFmropbCjE3aix5fa85cLSXw%2Fuu53HHyLVnImKmI9cCObE55EE0zIV7g14ZUlhsVebhIC0V3xzfTEtAu%2BIMLTmsBLMSue0Lb%2FARG4yc28PBtuiWmOeAzE2DDXv3XcJPq%2FMNTXMsWV9CsvRF4NGpPkMNTqrcQGOqUBOS4aIVue6Vv796yzqT4HwixIip8j515H8cDzH2HxhO6TUI7HkWDuBLMZ0iZgXiHyQH%2F45UfsMNrvj9IQb6HMwUmrfylauPM34NNA64iiUvuHBPe%2BqQq%2F9S2sJWVBpNttRDMnTgpXT%2FiFN5raBwP4lby6WK%2B73QJCIFjW8sVE4kmdNu%2FPIE612%2FDoLcOyOvcutc2precl%2BT9KBfRmjeM4pOCFCFjq&X-Amz-Signature=621c7df03c013cafc1d60d46ec32f7266c458bcc8153aad881f651cacb4b54f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVKPPBK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaRR6EOvPnsz8YmXPHKck6tSwOQahFCogj47sD75a5WgIgSmPKKKhb34CjLS%2FcllenrRXKG%2F2munx932GHYtjJi%2BgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiDk2KUdvXxCXEZkircA%2FM9LvEWi64SmN5Pk18RD%2B9FwqvWOVsyo2UTKarwRHNPf17S5QwCXgwgIW6nRxFoiOEjgZSbcX%2FlwyjoNLzB3l1lSEClF0jvpYJIonYxVoCdGDkXY7MGYnGN3ED8JG21fWjke2okoF4RblSb8hozBt0doc5sj48DNQQ6vXBInAbDCXd6OJJagosDPwEIy4Gm6PvM88xrzfNH6xYEFnykBn4bBjYP%2BSmtaTAYt68fA%2FyDTFvvGx7UlKenIOATv4Y6CDA8KgM6J4J7WusK4AFFYjYQ35tPovNT5fj7ParR5bf31RxKe60ybfjoj5sHayDtcWRrFKGi8Tqc9SJUyiH9bm4IF9oTA2IzzqLI%2BKiIjDkoEblyxnlVLQJVAaMtJKHBtF%2BdBa8%2Bh1YWq58KVm6PtD%2FXxL7YDceny%2FiPMv2u6zYPIhF0ykpfnsi7fn833ofTdYnYw%2FlqBCmfA%2FQ%2BAxlCHFIMaHu7TPeGl6j1EKryFmropbCjE3aix5fa85cLSXw%2Fuu53HHyLVnImKmI9cCObE55EE0zIV7g14ZUlhsVebhIC0V3xzfTEtAu%2BIMLTmsBLMSue0Lb%2FARG4yc28PBtuiWmOeAzE2DDXv3XcJPq%2FMNTXMsWV9CsvRF4NGpPkMNTqrcQGOqUBOS4aIVue6Vv796yzqT4HwixIip8j515H8cDzH2HxhO6TUI7HkWDuBLMZ0iZgXiHyQH%2F45UfsMNrvj9IQb6HMwUmrfylauPM34NNA64iiUvuHBPe%2BqQq%2F9S2sJWVBpNttRDMnTgpXT%2FiFN5raBwP4lby6WK%2B73QJCIFjW8sVE4kmdNu%2FPIE612%2FDoLcOyOvcutc2precl%2BT9KBfRmjeM4pOCFCFjq&X-Amz-Signature=fd6e074d0aace6ff81e5c4f701a321b7afe6435cf9f0822c5afb3c2421cab970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
