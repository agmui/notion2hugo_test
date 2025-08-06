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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2GEXJR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQC1L27dWoyp%2BvKX3Vg7uvc%2Bj0atNW914BGpWWu4f%2BePJAIgPOz9nADPO8G6YXuLTCN%2FMIuylPBQFnHcitvw2ngX4GUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN0yFX8sUqYfU3AUwCrcA03fNCIhPKo%2BvWwp6hYjyUs6falgQxT%2Bqyl%2BFYAKalSvn0iOm4yv0wD83eO43dz6vPjnrM2sX7OKwwlM8tHPfWUwNP00gGpFAg%2FXg1%2FaMcMXP2sT1CLTBFB0HbhlcbRNxOUoqCUuhqX0jofTEbh54u6nZnAKOZ3ASu0jD1nu%2B6cUJWPoF51aq%2FLwzRiJTIoA9D09ylPSngVCGIPu%2FGGLKy9pMq96W3%2BLtFw8feaW%2FItPmfqnEEDa0x1KGpwrzfjk%2FQdPXSqWT8mqfVvP3F7vGIInmAR1%2BOcLGnMrBznu4Oii%2BQqQbDErMf9jkpa4kY6zN0TWSPgGLDkRTiZnW0ARbRUQA5IaUfy3amF2CRRoSIaqkwLKohjeARqHlUAqJirr1qza%2BpwqX06lWQguuJtghtR8ofnK0xG2qZNFARXXYASpLhx5RkU1PVAAg0eaYKZ2UOlEflxJ4aiFrJvl7KbMEhvGfeFkRamRAqjGJ7Uee6QBlptK2IpkWpSSnQ7LJzEdf6emdjT%2FA3%2BxKmccfy65HjLZ08REDNX4LT02%2B3hbzcgxtBysAiEdJSlhcnC%2Bl0%2Bta705ZUNnNIyCN7xbT2%2F%2FJ4GwOZ0gNGCPrQNTc05iBLbacc2VwOIGq7Ov9ssrMNjvy8QGOqUBFropLhjtbXhFxdZ3R%2B80Mf%2BL6nEDKAkupYAvfvX08KIfE0GP1m%2Fin2%2BXbzcny2ayvRRnoTPwFWf0whmOua611Bwl%2F7ZOizI7V7ihTAnXgT0GhGFDtbQGk%2FPzO3K3ObVqy9ysSMLB23nHFxUgswVTxQujuv%2FEbExv%2Fp4ruB5ZybX0WeIi1wJAmalY3Y5L3ywhmknAZOie5UERCgf8D4awmv0hid3t&X-Amz-Signature=6c16c52c11b7d7cc55f5c0791b27fe697793643b0eed66ff6c78024b1ea4971d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2GEXJR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQC1L27dWoyp%2BvKX3Vg7uvc%2Bj0atNW914BGpWWu4f%2BePJAIgPOz9nADPO8G6YXuLTCN%2FMIuylPBQFnHcitvw2ngX4GUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN0yFX8sUqYfU3AUwCrcA03fNCIhPKo%2BvWwp6hYjyUs6falgQxT%2Bqyl%2BFYAKalSvn0iOm4yv0wD83eO43dz6vPjnrM2sX7OKwwlM8tHPfWUwNP00gGpFAg%2FXg1%2FaMcMXP2sT1CLTBFB0HbhlcbRNxOUoqCUuhqX0jofTEbh54u6nZnAKOZ3ASu0jD1nu%2B6cUJWPoF51aq%2FLwzRiJTIoA9D09ylPSngVCGIPu%2FGGLKy9pMq96W3%2BLtFw8feaW%2FItPmfqnEEDa0x1KGpwrzfjk%2FQdPXSqWT8mqfVvP3F7vGIInmAR1%2BOcLGnMrBznu4Oii%2BQqQbDErMf9jkpa4kY6zN0TWSPgGLDkRTiZnW0ARbRUQA5IaUfy3amF2CRRoSIaqkwLKohjeARqHlUAqJirr1qza%2BpwqX06lWQguuJtghtR8ofnK0xG2qZNFARXXYASpLhx5RkU1PVAAg0eaYKZ2UOlEflxJ4aiFrJvl7KbMEhvGfeFkRamRAqjGJ7Uee6QBlptK2IpkWpSSnQ7LJzEdf6emdjT%2FA3%2BxKmccfy65HjLZ08REDNX4LT02%2B3hbzcgxtBysAiEdJSlhcnC%2Bl0%2Bta705ZUNnNIyCN7xbT2%2F%2FJ4GwOZ0gNGCPrQNTc05iBLbacc2VwOIGq7Ov9ssrMNjvy8QGOqUBFropLhjtbXhFxdZ3R%2B80Mf%2BL6nEDKAkupYAvfvX08KIfE0GP1m%2Fin2%2BXbzcny2ayvRRnoTPwFWf0whmOua611Bwl%2F7ZOizI7V7ihTAnXgT0GhGFDtbQGk%2FPzO3K3ObVqy9ysSMLB23nHFxUgswVTxQujuv%2FEbExv%2Fp4ruB5ZybX0WeIi1wJAmalY3Y5L3ywhmknAZOie5UERCgf8D4awmv0hid3t&X-Amz-Signature=6732c566cc4332a353e533f64cb72f0777c7cc28ad0e27a6978af2ef5c01b609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2GEXJR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQC1L27dWoyp%2BvKX3Vg7uvc%2Bj0atNW914BGpWWu4f%2BePJAIgPOz9nADPO8G6YXuLTCN%2FMIuylPBQFnHcitvw2ngX4GUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN0yFX8sUqYfU3AUwCrcA03fNCIhPKo%2BvWwp6hYjyUs6falgQxT%2Bqyl%2BFYAKalSvn0iOm4yv0wD83eO43dz6vPjnrM2sX7OKwwlM8tHPfWUwNP00gGpFAg%2FXg1%2FaMcMXP2sT1CLTBFB0HbhlcbRNxOUoqCUuhqX0jofTEbh54u6nZnAKOZ3ASu0jD1nu%2B6cUJWPoF51aq%2FLwzRiJTIoA9D09ylPSngVCGIPu%2FGGLKy9pMq96W3%2BLtFw8feaW%2FItPmfqnEEDa0x1KGpwrzfjk%2FQdPXSqWT8mqfVvP3F7vGIInmAR1%2BOcLGnMrBznu4Oii%2BQqQbDErMf9jkpa4kY6zN0TWSPgGLDkRTiZnW0ARbRUQA5IaUfy3amF2CRRoSIaqkwLKohjeARqHlUAqJirr1qza%2BpwqX06lWQguuJtghtR8ofnK0xG2qZNFARXXYASpLhx5RkU1PVAAg0eaYKZ2UOlEflxJ4aiFrJvl7KbMEhvGfeFkRamRAqjGJ7Uee6QBlptK2IpkWpSSnQ7LJzEdf6emdjT%2FA3%2BxKmccfy65HjLZ08REDNX4LT02%2B3hbzcgxtBysAiEdJSlhcnC%2Bl0%2Bta705ZUNnNIyCN7xbT2%2F%2FJ4GwOZ0gNGCPrQNTc05iBLbacc2VwOIGq7Ov9ssrMNjvy8QGOqUBFropLhjtbXhFxdZ3R%2B80Mf%2BL6nEDKAkupYAvfvX08KIfE0GP1m%2Fin2%2BXbzcny2ayvRRnoTPwFWf0whmOua611Bwl%2F7ZOizI7V7ihTAnXgT0GhGFDtbQGk%2FPzO3K3ObVqy9ysSMLB23nHFxUgswVTxQujuv%2FEbExv%2Fp4ruB5ZybX0WeIi1wJAmalY3Y5L3ywhmknAZOie5UERCgf8D4awmv0hid3t&X-Amz-Signature=89ece2ca99a81645b7f220f98d58d2b4e509a355ffe565fbd759df70294768bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2GEXJR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQC1L27dWoyp%2BvKX3Vg7uvc%2Bj0atNW914BGpWWu4f%2BePJAIgPOz9nADPO8G6YXuLTCN%2FMIuylPBQFnHcitvw2ngX4GUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN0yFX8sUqYfU3AUwCrcA03fNCIhPKo%2BvWwp6hYjyUs6falgQxT%2Bqyl%2BFYAKalSvn0iOm4yv0wD83eO43dz6vPjnrM2sX7OKwwlM8tHPfWUwNP00gGpFAg%2FXg1%2FaMcMXP2sT1CLTBFB0HbhlcbRNxOUoqCUuhqX0jofTEbh54u6nZnAKOZ3ASu0jD1nu%2B6cUJWPoF51aq%2FLwzRiJTIoA9D09ylPSngVCGIPu%2FGGLKy9pMq96W3%2BLtFw8feaW%2FItPmfqnEEDa0x1KGpwrzfjk%2FQdPXSqWT8mqfVvP3F7vGIInmAR1%2BOcLGnMrBznu4Oii%2BQqQbDErMf9jkpa4kY6zN0TWSPgGLDkRTiZnW0ARbRUQA5IaUfy3amF2CRRoSIaqkwLKohjeARqHlUAqJirr1qza%2BpwqX06lWQguuJtghtR8ofnK0xG2qZNFARXXYASpLhx5RkU1PVAAg0eaYKZ2UOlEflxJ4aiFrJvl7KbMEhvGfeFkRamRAqjGJ7Uee6QBlptK2IpkWpSSnQ7LJzEdf6emdjT%2FA3%2BxKmccfy65HjLZ08REDNX4LT02%2B3hbzcgxtBysAiEdJSlhcnC%2Bl0%2Bta705ZUNnNIyCN7xbT2%2F%2FJ4GwOZ0gNGCPrQNTc05iBLbacc2VwOIGq7Ov9ssrMNjvy8QGOqUBFropLhjtbXhFxdZ3R%2B80Mf%2BL6nEDKAkupYAvfvX08KIfE0GP1m%2Fin2%2BXbzcny2ayvRRnoTPwFWf0whmOua611Bwl%2F7ZOizI7V7ihTAnXgT0GhGFDtbQGk%2FPzO3K3ObVqy9ysSMLB23nHFxUgswVTxQujuv%2FEbExv%2Fp4ruB5ZybX0WeIi1wJAmalY3Y5L3ywhmknAZOie5UERCgf8D4awmv0hid3t&X-Amz-Signature=383117b9b22632e8cbd9b42d2737acae8ad8fe4e958c1b5c35bf2b7f77097122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2GEXJR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQC1L27dWoyp%2BvKX3Vg7uvc%2Bj0atNW914BGpWWu4f%2BePJAIgPOz9nADPO8G6YXuLTCN%2FMIuylPBQFnHcitvw2ngX4GUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN0yFX8sUqYfU3AUwCrcA03fNCIhPKo%2BvWwp6hYjyUs6falgQxT%2Bqyl%2BFYAKalSvn0iOm4yv0wD83eO43dz6vPjnrM2sX7OKwwlM8tHPfWUwNP00gGpFAg%2FXg1%2FaMcMXP2sT1CLTBFB0HbhlcbRNxOUoqCUuhqX0jofTEbh54u6nZnAKOZ3ASu0jD1nu%2B6cUJWPoF51aq%2FLwzRiJTIoA9D09ylPSngVCGIPu%2FGGLKy9pMq96W3%2BLtFw8feaW%2FItPmfqnEEDa0x1KGpwrzfjk%2FQdPXSqWT8mqfVvP3F7vGIInmAR1%2BOcLGnMrBznu4Oii%2BQqQbDErMf9jkpa4kY6zN0TWSPgGLDkRTiZnW0ARbRUQA5IaUfy3amF2CRRoSIaqkwLKohjeARqHlUAqJirr1qza%2BpwqX06lWQguuJtghtR8ofnK0xG2qZNFARXXYASpLhx5RkU1PVAAg0eaYKZ2UOlEflxJ4aiFrJvl7KbMEhvGfeFkRamRAqjGJ7Uee6QBlptK2IpkWpSSnQ7LJzEdf6emdjT%2FA3%2BxKmccfy65HjLZ08REDNX4LT02%2B3hbzcgxtBysAiEdJSlhcnC%2Bl0%2Bta705ZUNnNIyCN7xbT2%2F%2FJ4GwOZ0gNGCPrQNTc05iBLbacc2VwOIGq7Ov9ssrMNjvy8QGOqUBFropLhjtbXhFxdZ3R%2B80Mf%2BL6nEDKAkupYAvfvX08KIfE0GP1m%2Fin2%2BXbzcny2ayvRRnoTPwFWf0whmOua611Bwl%2F7ZOizI7V7ihTAnXgT0GhGFDtbQGk%2FPzO3K3ObVqy9ysSMLB23nHFxUgswVTxQujuv%2FEbExv%2Fp4ruB5ZybX0WeIi1wJAmalY3Y5L3ywhmknAZOie5UERCgf8D4awmv0hid3t&X-Amz-Signature=60bdcb44ee370be64f52e5e50590fa31143a36e3a506afb9445f6298e35b1522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
