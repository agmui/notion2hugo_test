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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXJ5Y3W%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0NkQK%2BOGyy3EaQfeAkZqt89lM6pVX1jBzNqACDH2O8wIhANHNfBbxKOo8M2vCsmNZUBauOSpiS7K4ONOJ0bUOvzk4KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKcTtktdK7BUx0xzsq3AOy7e3hqbtepd6WsbBXhhvnf4L9pO61OkjVe%2FguOCYlj34I%2B9Nit8w%2B0GRYeef1pWtM0xwDCvXgUNTvhlLm5M59pecQHbSt7Su3Xbj%2FKphrGUzpaoRivTlkHo82MYt9v%2FHj0OCCOycdbADe5P19%2B6nzYJoKOiHfwrnuauU%2FKuWKmerGid9rd1s0%2FHrsdn%2FVyqON46NRzssterNNZkjxAh615HUROunW1O0xwiK9w5BDUjsC4%2F39a%2Bjt151LZqQmsIxQINs9ZJhF41zfdnckCj%2FfwFome6i5qlpvesISFBNIz3gE4gKfAVCyPi6UYOQIBA8fyoybP9%2BPCLyaz8km1JjaJjoSiVkKHUOeBWReahcINvCYspXtHMdwYbQBZFDInRQPwFG87qLdWuBFUr0pGn3nj5kpb4DFsUwiHmzOo7LYNxPxTVXMyKvRmu43EwMAAypQqBpGriFAkK3Jj2s7kymL%2B4tupLdrRfDYgI%2BbIQxjMRt1O%2FnEoFsn%2FESpIejtg%2FAT%2BdNrrDx619oMumfWYnHK8vWRut12P9lMTfPLH6JKum%2BXFLXe%2B0jYCP4RhJJgyGIeCnp4DProA8A%2BisSrKKo1KVgm6lY%2FGq85MHXGzM1OwhwG1ib1wjfiMlLYiDCV%2FMLABjqkAaNcWuvEWTO0hVIfkR4OgAZqeOOGz41K%2F5dxXferq2uK7VsldqSMmtZvNR4r5q%2BW1%2F1zAAi0HjsZS%2ByE7SNgCwny%2Fmm1w1DXIZmrhNg4zvV0kQR6oZ4jov8HbSnv4gi6dswk45gjvW5wRDrrSVYAOMLwax2t6MFmhix7HhLATnHngUnBqCdOev%2Bdx8vWXHUjefmFz%2FrxLw9LLWPQVKiKXVqg08bx&X-Amz-Signature=bd324493bcddf92670b44b1df6fa85cc304c66135948497d3313563a918278e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXJ5Y3W%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0NkQK%2BOGyy3EaQfeAkZqt89lM6pVX1jBzNqACDH2O8wIhANHNfBbxKOo8M2vCsmNZUBauOSpiS7K4ONOJ0bUOvzk4KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKcTtktdK7BUx0xzsq3AOy7e3hqbtepd6WsbBXhhvnf4L9pO61OkjVe%2FguOCYlj34I%2B9Nit8w%2B0GRYeef1pWtM0xwDCvXgUNTvhlLm5M59pecQHbSt7Su3Xbj%2FKphrGUzpaoRivTlkHo82MYt9v%2FHj0OCCOycdbADe5P19%2B6nzYJoKOiHfwrnuauU%2FKuWKmerGid9rd1s0%2FHrsdn%2FVyqON46NRzssterNNZkjxAh615HUROunW1O0xwiK9w5BDUjsC4%2F39a%2Bjt151LZqQmsIxQINs9ZJhF41zfdnckCj%2FfwFome6i5qlpvesISFBNIz3gE4gKfAVCyPi6UYOQIBA8fyoybP9%2BPCLyaz8km1JjaJjoSiVkKHUOeBWReahcINvCYspXtHMdwYbQBZFDInRQPwFG87qLdWuBFUr0pGn3nj5kpb4DFsUwiHmzOo7LYNxPxTVXMyKvRmu43EwMAAypQqBpGriFAkK3Jj2s7kymL%2B4tupLdrRfDYgI%2BbIQxjMRt1O%2FnEoFsn%2FESpIejtg%2FAT%2BdNrrDx619oMumfWYnHK8vWRut12P9lMTfPLH6JKum%2BXFLXe%2B0jYCP4RhJJgyGIeCnp4DProA8A%2BisSrKKo1KVgm6lY%2FGq85MHXGzM1OwhwG1ib1wjfiMlLYiDCV%2FMLABjqkAaNcWuvEWTO0hVIfkR4OgAZqeOOGz41K%2F5dxXferq2uK7VsldqSMmtZvNR4r5q%2BW1%2F1zAAi0HjsZS%2ByE7SNgCwny%2Fmm1w1DXIZmrhNg4zvV0kQR6oZ4jov8HbSnv4gi6dswk45gjvW5wRDrrSVYAOMLwax2t6MFmhix7HhLATnHngUnBqCdOev%2Bdx8vWXHUjefmFz%2FrxLw9LLWPQVKiKXVqg08bx&X-Amz-Signature=21e4bfe9a661909671044e4014b4d7231195ab49ed2139e6f23dc15a06bb583b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXJ5Y3W%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0NkQK%2BOGyy3EaQfeAkZqt89lM6pVX1jBzNqACDH2O8wIhANHNfBbxKOo8M2vCsmNZUBauOSpiS7K4ONOJ0bUOvzk4KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKcTtktdK7BUx0xzsq3AOy7e3hqbtepd6WsbBXhhvnf4L9pO61OkjVe%2FguOCYlj34I%2B9Nit8w%2B0GRYeef1pWtM0xwDCvXgUNTvhlLm5M59pecQHbSt7Su3Xbj%2FKphrGUzpaoRivTlkHo82MYt9v%2FHj0OCCOycdbADe5P19%2B6nzYJoKOiHfwrnuauU%2FKuWKmerGid9rd1s0%2FHrsdn%2FVyqON46NRzssterNNZkjxAh615HUROunW1O0xwiK9w5BDUjsC4%2F39a%2Bjt151LZqQmsIxQINs9ZJhF41zfdnckCj%2FfwFome6i5qlpvesISFBNIz3gE4gKfAVCyPi6UYOQIBA8fyoybP9%2BPCLyaz8km1JjaJjoSiVkKHUOeBWReahcINvCYspXtHMdwYbQBZFDInRQPwFG87qLdWuBFUr0pGn3nj5kpb4DFsUwiHmzOo7LYNxPxTVXMyKvRmu43EwMAAypQqBpGriFAkK3Jj2s7kymL%2B4tupLdrRfDYgI%2BbIQxjMRt1O%2FnEoFsn%2FESpIejtg%2FAT%2BdNrrDx619oMumfWYnHK8vWRut12P9lMTfPLH6JKum%2BXFLXe%2B0jYCP4RhJJgyGIeCnp4DProA8A%2BisSrKKo1KVgm6lY%2FGq85MHXGzM1OwhwG1ib1wjfiMlLYiDCV%2FMLABjqkAaNcWuvEWTO0hVIfkR4OgAZqeOOGz41K%2F5dxXferq2uK7VsldqSMmtZvNR4r5q%2BW1%2F1zAAi0HjsZS%2ByE7SNgCwny%2Fmm1w1DXIZmrhNg4zvV0kQR6oZ4jov8HbSnv4gi6dswk45gjvW5wRDrrSVYAOMLwax2t6MFmhix7HhLATnHngUnBqCdOev%2Bdx8vWXHUjefmFz%2FrxLw9LLWPQVKiKXVqg08bx&X-Amz-Signature=07b662410c5e04b29b89a26260e9464d46f81c474cd6e1f0b10cf37d04934178&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXJ5Y3W%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0NkQK%2BOGyy3EaQfeAkZqt89lM6pVX1jBzNqACDH2O8wIhANHNfBbxKOo8M2vCsmNZUBauOSpiS7K4ONOJ0bUOvzk4KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKcTtktdK7BUx0xzsq3AOy7e3hqbtepd6WsbBXhhvnf4L9pO61OkjVe%2FguOCYlj34I%2B9Nit8w%2B0GRYeef1pWtM0xwDCvXgUNTvhlLm5M59pecQHbSt7Su3Xbj%2FKphrGUzpaoRivTlkHo82MYt9v%2FHj0OCCOycdbADe5P19%2B6nzYJoKOiHfwrnuauU%2FKuWKmerGid9rd1s0%2FHrsdn%2FVyqON46NRzssterNNZkjxAh615HUROunW1O0xwiK9w5BDUjsC4%2F39a%2Bjt151LZqQmsIxQINs9ZJhF41zfdnckCj%2FfwFome6i5qlpvesISFBNIz3gE4gKfAVCyPi6UYOQIBA8fyoybP9%2BPCLyaz8km1JjaJjoSiVkKHUOeBWReahcINvCYspXtHMdwYbQBZFDInRQPwFG87qLdWuBFUr0pGn3nj5kpb4DFsUwiHmzOo7LYNxPxTVXMyKvRmu43EwMAAypQqBpGriFAkK3Jj2s7kymL%2B4tupLdrRfDYgI%2BbIQxjMRt1O%2FnEoFsn%2FESpIejtg%2FAT%2BdNrrDx619oMumfWYnHK8vWRut12P9lMTfPLH6JKum%2BXFLXe%2B0jYCP4RhJJgyGIeCnp4DProA8A%2BisSrKKo1KVgm6lY%2FGq85MHXGzM1OwhwG1ib1wjfiMlLYiDCV%2FMLABjqkAaNcWuvEWTO0hVIfkR4OgAZqeOOGz41K%2F5dxXferq2uK7VsldqSMmtZvNR4r5q%2BW1%2F1zAAi0HjsZS%2ByE7SNgCwny%2Fmm1w1DXIZmrhNg4zvV0kQR6oZ4jov8HbSnv4gi6dswk45gjvW5wRDrrSVYAOMLwax2t6MFmhix7HhLATnHngUnBqCdOev%2Bdx8vWXHUjefmFz%2FrxLw9LLWPQVKiKXVqg08bx&X-Amz-Signature=4a9ff595c0cc7540bdaf84d0d1b81ba5bf8bf040e537248380a34b04a0d35b78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXJ5Y3W%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0NkQK%2BOGyy3EaQfeAkZqt89lM6pVX1jBzNqACDH2O8wIhANHNfBbxKOo8M2vCsmNZUBauOSpiS7K4ONOJ0bUOvzk4KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKcTtktdK7BUx0xzsq3AOy7e3hqbtepd6WsbBXhhvnf4L9pO61OkjVe%2FguOCYlj34I%2B9Nit8w%2B0GRYeef1pWtM0xwDCvXgUNTvhlLm5M59pecQHbSt7Su3Xbj%2FKphrGUzpaoRivTlkHo82MYt9v%2FHj0OCCOycdbADe5P19%2B6nzYJoKOiHfwrnuauU%2FKuWKmerGid9rd1s0%2FHrsdn%2FVyqON46NRzssterNNZkjxAh615HUROunW1O0xwiK9w5BDUjsC4%2F39a%2Bjt151LZqQmsIxQINs9ZJhF41zfdnckCj%2FfwFome6i5qlpvesISFBNIz3gE4gKfAVCyPi6UYOQIBA8fyoybP9%2BPCLyaz8km1JjaJjoSiVkKHUOeBWReahcINvCYspXtHMdwYbQBZFDInRQPwFG87qLdWuBFUr0pGn3nj5kpb4DFsUwiHmzOo7LYNxPxTVXMyKvRmu43EwMAAypQqBpGriFAkK3Jj2s7kymL%2B4tupLdrRfDYgI%2BbIQxjMRt1O%2FnEoFsn%2FESpIejtg%2FAT%2BdNrrDx619oMumfWYnHK8vWRut12P9lMTfPLH6JKum%2BXFLXe%2B0jYCP4RhJJgyGIeCnp4DProA8A%2BisSrKKo1KVgm6lY%2FGq85MHXGzM1OwhwG1ib1wjfiMlLYiDCV%2FMLABjqkAaNcWuvEWTO0hVIfkR4OgAZqeOOGz41K%2F5dxXferq2uK7VsldqSMmtZvNR4r5q%2BW1%2F1zAAi0HjsZS%2ByE7SNgCwny%2Fmm1w1DXIZmrhNg4zvV0kQR6oZ4jov8HbSnv4gi6dswk45gjvW5wRDrrSVYAOMLwax2t6MFmhix7HhLATnHngUnBqCdOev%2Bdx8vWXHUjefmFz%2FrxLw9LLWPQVKiKXVqg08bx&X-Amz-Signature=1ba45788c0f6eb86091493296a9de68aecfca561d561981ad1b441ef16984337&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
