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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FV52JKM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHuTTW1phMBU7io1mTIN54acNi%2FwmP3kMWXbdbABV8zQIhAPqn6yJtjR%2FbG1ZxrnrigWzLoU0fHKnHCV0MCIERCfaTKv8DCC4QABoMNjM3NDIzMTgzODA1Igy%2BsYCqBbHDqj7kecgq3AMUsj1zl4M6zhttCLQJxn0udp8zGPr0Md211fxaOwvo7Zj259IwB9Vn06jZYHksSTUz%2BaRfSO90PFl6dKMt84ffPPwCpFIG0jHxtjnEgg55aMVbVhfE2P2lTmyk8mDe3Elj4PGe7lFYawbnwCvuNT%2Fw4wOkaMTnguzbU3jZddC8RTJLV8JuhOB3KADzLLXtXFTZv%2BTyOA%2Bvq%2FYa4P0k0NJfY68cFlg%2BgRRO4YbrunFRSZGG7AO47TUMFF0XiCWAjzy%2BlqB8y%2Br0VcTWlEJ%2FK4Xv5Et5wti8sNK9jIZTU6vhC2Z6BBFbLfp1D%2FnH4G5W2saCAlNTV83RIoEoLzlyxtCFDN3pdme0g5Jnk9tPxtsaWLpq5df4DNlxtlYnsSSl5IowvYXMopbOjXW%2FIxY1zdw3BtBH0SGr2%2B%2BgYHmJ9%2BuxxGKX5YsDFo02GiKYjpoX8dYGXqI%2Buog7Y%2FGaf7loCVzTB4S7YSM4gdA1%2BylkEpHJMITjojTiZmCsdjkbzutLKYDs854%2BxVSSnsJgYTqwJKOOvtOPJWHkhtC7P7CTT5sp9xLFi1ozrZAGC9tQ8WdPxeLaDEiragdCzhFS6pFmjrxpCMb4ufchm6rQhvjcEqtNl4JWlAy4dQK8ADAkdDCSgIHCBjqkARd8yrb65ZAa4egtZFwg15xILbxE4CXZA2F20MpBj%2FB6S%2BWIoE3XEg1%2BUa0adQY0zJzMJtlOJ4sTqqs5Vr4uIVUelP3u6KT%2FnnZbeYDtELL%2FqFVXUxg614wLhh5NnoZ3W7yXM3VSeKZjJqdyoNP2lcNavbr4nNJBw%2BXW%2BpHFeoEukz0L5jZg6HOuIb59Wat%2BtHS9O1fnHsxN6nwSnVUZxjrOuJDP&X-Amz-Signature=55526cffd27eb49388040866349114b44dfdbe8e0ff657ab4dd9142589f6561b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FV52JKM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHuTTW1phMBU7io1mTIN54acNi%2FwmP3kMWXbdbABV8zQIhAPqn6yJtjR%2FbG1ZxrnrigWzLoU0fHKnHCV0MCIERCfaTKv8DCC4QABoMNjM3NDIzMTgzODA1Igy%2BsYCqBbHDqj7kecgq3AMUsj1zl4M6zhttCLQJxn0udp8zGPr0Md211fxaOwvo7Zj259IwB9Vn06jZYHksSTUz%2BaRfSO90PFl6dKMt84ffPPwCpFIG0jHxtjnEgg55aMVbVhfE2P2lTmyk8mDe3Elj4PGe7lFYawbnwCvuNT%2Fw4wOkaMTnguzbU3jZddC8RTJLV8JuhOB3KADzLLXtXFTZv%2BTyOA%2Bvq%2FYa4P0k0NJfY68cFlg%2BgRRO4YbrunFRSZGG7AO47TUMFF0XiCWAjzy%2BlqB8y%2Br0VcTWlEJ%2FK4Xv5Et5wti8sNK9jIZTU6vhC2Z6BBFbLfp1D%2FnH4G5W2saCAlNTV83RIoEoLzlyxtCFDN3pdme0g5Jnk9tPxtsaWLpq5df4DNlxtlYnsSSl5IowvYXMopbOjXW%2FIxY1zdw3BtBH0SGr2%2B%2BgYHmJ9%2BuxxGKX5YsDFo02GiKYjpoX8dYGXqI%2Buog7Y%2FGaf7loCVzTB4S7YSM4gdA1%2BylkEpHJMITjojTiZmCsdjkbzutLKYDs854%2BxVSSnsJgYTqwJKOOvtOPJWHkhtC7P7CTT5sp9xLFi1ozrZAGC9tQ8WdPxeLaDEiragdCzhFS6pFmjrxpCMb4ufchm6rQhvjcEqtNl4JWlAy4dQK8ADAkdDCSgIHCBjqkARd8yrb65ZAa4egtZFwg15xILbxE4CXZA2F20MpBj%2FB6S%2BWIoE3XEg1%2BUa0adQY0zJzMJtlOJ4sTqqs5Vr4uIVUelP3u6KT%2FnnZbeYDtELL%2FqFVXUxg614wLhh5NnoZ3W7yXM3VSeKZjJqdyoNP2lcNavbr4nNJBw%2BXW%2BpHFeoEukz0L5jZg6HOuIb59Wat%2BtHS9O1fnHsxN6nwSnVUZxjrOuJDP&X-Amz-Signature=3d424ef4eb8582f14ecf74a6d6018ca6f8cd1f9e5686f3454314931ba2e52f86&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FV52JKM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHuTTW1phMBU7io1mTIN54acNi%2FwmP3kMWXbdbABV8zQIhAPqn6yJtjR%2FbG1ZxrnrigWzLoU0fHKnHCV0MCIERCfaTKv8DCC4QABoMNjM3NDIzMTgzODA1Igy%2BsYCqBbHDqj7kecgq3AMUsj1zl4M6zhttCLQJxn0udp8zGPr0Md211fxaOwvo7Zj259IwB9Vn06jZYHksSTUz%2BaRfSO90PFl6dKMt84ffPPwCpFIG0jHxtjnEgg55aMVbVhfE2P2lTmyk8mDe3Elj4PGe7lFYawbnwCvuNT%2Fw4wOkaMTnguzbU3jZddC8RTJLV8JuhOB3KADzLLXtXFTZv%2BTyOA%2Bvq%2FYa4P0k0NJfY68cFlg%2BgRRO4YbrunFRSZGG7AO47TUMFF0XiCWAjzy%2BlqB8y%2Br0VcTWlEJ%2FK4Xv5Et5wti8sNK9jIZTU6vhC2Z6BBFbLfp1D%2FnH4G5W2saCAlNTV83RIoEoLzlyxtCFDN3pdme0g5Jnk9tPxtsaWLpq5df4DNlxtlYnsSSl5IowvYXMopbOjXW%2FIxY1zdw3BtBH0SGr2%2B%2BgYHmJ9%2BuxxGKX5YsDFo02GiKYjpoX8dYGXqI%2Buog7Y%2FGaf7loCVzTB4S7YSM4gdA1%2BylkEpHJMITjojTiZmCsdjkbzutLKYDs854%2BxVSSnsJgYTqwJKOOvtOPJWHkhtC7P7CTT5sp9xLFi1ozrZAGC9tQ8WdPxeLaDEiragdCzhFS6pFmjrxpCMb4ufchm6rQhvjcEqtNl4JWlAy4dQK8ADAkdDCSgIHCBjqkARd8yrb65ZAa4egtZFwg15xILbxE4CXZA2F20MpBj%2FB6S%2BWIoE3XEg1%2BUa0adQY0zJzMJtlOJ4sTqqs5Vr4uIVUelP3u6KT%2FnnZbeYDtELL%2FqFVXUxg614wLhh5NnoZ3W7yXM3VSeKZjJqdyoNP2lcNavbr4nNJBw%2BXW%2BpHFeoEukz0L5jZg6HOuIb59Wat%2BtHS9O1fnHsxN6nwSnVUZxjrOuJDP&X-Amz-Signature=539975309d51a1e008fd3bb70a8f62abe90a2d4d5c838c5b0edea8b4a91a8e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FV52JKM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHuTTW1phMBU7io1mTIN54acNi%2FwmP3kMWXbdbABV8zQIhAPqn6yJtjR%2FbG1ZxrnrigWzLoU0fHKnHCV0MCIERCfaTKv8DCC4QABoMNjM3NDIzMTgzODA1Igy%2BsYCqBbHDqj7kecgq3AMUsj1zl4M6zhttCLQJxn0udp8zGPr0Md211fxaOwvo7Zj259IwB9Vn06jZYHksSTUz%2BaRfSO90PFl6dKMt84ffPPwCpFIG0jHxtjnEgg55aMVbVhfE2P2lTmyk8mDe3Elj4PGe7lFYawbnwCvuNT%2Fw4wOkaMTnguzbU3jZddC8RTJLV8JuhOB3KADzLLXtXFTZv%2BTyOA%2Bvq%2FYa4P0k0NJfY68cFlg%2BgRRO4YbrunFRSZGG7AO47TUMFF0XiCWAjzy%2BlqB8y%2Br0VcTWlEJ%2FK4Xv5Et5wti8sNK9jIZTU6vhC2Z6BBFbLfp1D%2FnH4G5W2saCAlNTV83RIoEoLzlyxtCFDN3pdme0g5Jnk9tPxtsaWLpq5df4DNlxtlYnsSSl5IowvYXMopbOjXW%2FIxY1zdw3BtBH0SGr2%2B%2BgYHmJ9%2BuxxGKX5YsDFo02GiKYjpoX8dYGXqI%2Buog7Y%2FGaf7loCVzTB4S7YSM4gdA1%2BylkEpHJMITjojTiZmCsdjkbzutLKYDs854%2BxVSSnsJgYTqwJKOOvtOPJWHkhtC7P7CTT5sp9xLFi1ozrZAGC9tQ8WdPxeLaDEiragdCzhFS6pFmjrxpCMb4ufchm6rQhvjcEqtNl4JWlAy4dQK8ADAkdDCSgIHCBjqkARd8yrb65ZAa4egtZFwg15xILbxE4CXZA2F20MpBj%2FB6S%2BWIoE3XEg1%2BUa0adQY0zJzMJtlOJ4sTqqs5Vr4uIVUelP3u6KT%2FnnZbeYDtELL%2FqFVXUxg614wLhh5NnoZ3W7yXM3VSeKZjJqdyoNP2lcNavbr4nNJBw%2BXW%2BpHFeoEukz0L5jZg6HOuIb59Wat%2BtHS9O1fnHsxN6nwSnVUZxjrOuJDP&X-Amz-Signature=4a18d4e062cb67434d9e218851510996e55719e6873ddc320a117492efc6fb2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FV52JKM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHuTTW1phMBU7io1mTIN54acNi%2FwmP3kMWXbdbABV8zQIhAPqn6yJtjR%2FbG1ZxrnrigWzLoU0fHKnHCV0MCIERCfaTKv8DCC4QABoMNjM3NDIzMTgzODA1Igy%2BsYCqBbHDqj7kecgq3AMUsj1zl4M6zhttCLQJxn0udp8zGPr0Md211fxaOwvo7Zj259IwB9Vn06jZYHksSTUz%2BaRfSO90PFl6dKMt84ffPPwCpFIG0jHxtjnEgg55aMVbVhfE2P2lTmyk8mDe3Elj4PGe7lFYawbnwCvuNT%2Fw4wOkaMTnguzbU3jZddC8RTJLV8JuhOB3KADzLLXtXFTZv%2BTyOA%2Bvq%2FYa4P0k0NJfY68cFlg%2BgRRO4YbrunFRSZGG7AO47TUMFF0XiCWAjzy%2BlqB8y%2Br0VcTWlEJ%2FK4Xv5Et5wti8sNK9jIZTU6vhC2Z6BBFbLfp1D%2FnH4G5W2saCAlNTV83RIoEoLzlyxtCFDN3pdme0g5Jnk9tPxtsaWLpq5df4DNlxtlYnsSSl5IowvYXMopbOjXW%2FIxY1zdw3BtBH0SGr2%2B%2BgYHmJ9%2BuxxGKX5YsDFo02GiKYjpoX8dYGXqI%2Buog7Y%2FGaf7loCVzTB4S7YSM4gdA1%2BylkEpHJMITjojTiZmCsdjkbzutLKYDs854%2BxVSSnsJgYTqwJKOOvtOPJWHkhtC7P7CTT5sp9xLFi1ozrZAGC9tQ8WdPxeLaDEiragdCzhFS6pFmjrxpCMb4ufchm6rQhvjcEqtNl4JWlAy4dQK8ADAkdDCSgIHCBjqkARd8yrb65ZAa4egtZFwg15xILbxE4CXZA2F20MpBj%2FB6S%2BWIoE3XEg1%2BUa0adQY0zJzMJtlOJ4sTqqs5Vr4uIVUelP3u6KT%2FnnZbeYDtELL%2FqFVXUxg614wLhh5NnoZ3W7yXM3VSeKZjJqdyoNP2lcNavbr4nNJBw%2BXW%2BpHFeoEukz0L5jZg6HOuIb59Wat%2BtHS9O1fnHsxN6nwSnVUZxjrOuJDP&X-Amz-Signature=04685f5085b43e7fad7d7b6a9f234458dee1ad74ae345a3b997a6545f47d3e04&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
