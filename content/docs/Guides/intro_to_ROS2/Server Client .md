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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXTMT7H%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCBmthavMfcmNLQSgJTbY9vQkgf1XnLPYLPbe6LY1zw4QIhAKXkryuMJboZviZRayEQf%2BaL75bDKd2HVuEKV85rMDxwKv8DCCsQABoMNjM3NDIzMTgzODA1Igy%2FGoDJCdUPmxzHg7cq3APsULRZ17QKtwlHifxnQ4vWJpGE1wTzfhxI22ypR%2BUwHCMAYu6eOpnASDErNlXxCrETfG%2F%2BxvdVYauLzUUo3aqbMiDrqqTYyBL7v3%2FGDrMdE2ZThu7czqul0tkVtvTInPzTj7y1HId4XOcIMXuI6aU%2FprhGU5HCZcQcClVrJKF57j%2Fc3QYfRQJa%2F%2BbAGYQ2KrADFRnuwtDah5VpjMDZzVJmvUuCcc8BAA1rBCIFSFQBucgLwRJ7h1dONYSjs1kzgEjd%2Bwvb2M80YoiT8Fxu43%2Bus1qqve5mCIS4FZFcn3S10UYzHlyFnN%2BN3CHQcsmOlqXAJtAKZOY9qnzTfmFoJO7cQq%2F8GOfar0cd%2FQkJfLhjk%2BTbKgynF2%2BAyD0wtJaJkA9%2FuWwlAHFaQzZCCjITrekq7PQKgxHRoxSQWioPRs9NMOutGVMmvEyQGbw3TCgiYV3z3L3XIuQF8ym9XvtKyUF%2BRBi0IKCMfE0TByEMz0ew8nHuRTBzos4xB1FxQIsUxa6h8UYE0iZSusrND6XCjLaLHpWB4JUXd4imQsujFWu45Jde5Dn1TJL8XhQpgtYH1PmRKBd%2BCKu77Ofils920lTeLqze57xWGODL29%2FiyvZ9CcPPegTvnCZty8i1fjCPzIe9BjqkAQXblNSYWd2pMRwNfRkU14pKTVUBuyqJLng9K2vmeKXjwO3uuUYL2vJSl9py2trYk%2FVkBMX8ebMesSDsDeWXyGq8rUeP4MD08fMxYKEa3LxmAzNCJzuh4QNtJoaQQAOu%2FTWBT4bXsQzBsP%2B6UpJ1O2y%2BuvHDA%2BDFpzhS2ioWPYuRlWSiqXl%2FWzJSNAL7FA1IKPIfIIJTJH8qxYbR5d%2F%2ByGAF4qZV&X-Amz-Signature=492d7485aeeb96dcdd8cd17ec0e5373799a3d63434535a3ecc5261f5ad79ca3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXTMT7H%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCBmthavMfcmNLQSgJTbY9vQkgf1XnLPYLPbe6LY1zw4QIhAKXkryuMJboZviZRayEQf%2BaL75bDKd2HVuEKV85rMDxwKv8DCCsQABoMNjM3NDIzMTgzODA1Igy%2FGoDJCdUPmxzHg7cq3APsULRZ17QKtwlHifxnQ4vWJpGE1wTzfhxI22ypR%2BUwHCMAYu6eOpnASDErNlXxCrETfG%2F%2BxvdVYauLzUUo3aqbMiDrqqTYyBL7v3%2FGDrMdE2ZThu7czqul0tkVtvTInPzTj7y1HId4XOcIMXuI6aU%2FprhGU5HCZcQcClVrJKF57j%2Fc3QYfRQJa%2F%2BbAGYQ2KrADFRnuwtDah5VpjMDZzVJmvUuCcc8BAA1rBCIFSFQBucgLwRJ7h1dONYSjs1kzgEjd%2Bwvb2M80YoiT8Fxu43%2Bus1qqve5mCIS4FZFcn3S10UYzHlyFnN%2BN3CHQcsmOlqXAJtAKZOY9qnzTfmFoJO7cQq%2F8GOfar0cd%2FQkJfLhjk%2BTbKgynF2%2BAyD0wtJaJkA9%2FuWwlAHFaQzZCCjITrekq7PQKgxHRoxSQWioPRs9NMOutGVMmvEyQGbw3TCgiYV3z3L3XIuQF8ym9XvtKyUF%2BRBi0IKCMfE0TByEMz0ew8nHuRTBzos4xB1FxQIsUxa6h8UYE0iZSusrND6XCjLaLHpWB4JUXd4imQsujFWu45Jde5Dn1TJL8XhQpgtYH1PmRKBd%2BCKu77Ofils920lTeLqze57xWGODL29%2FiyvZ9CcPPegTvnCZty8i1fjCPzIe9BjqkAQXblNSYWd2pMRwNfRkU14pKTVUBuyqJLng9K2vmeKXjwO3uuUYL2vJSl9py2trYk%2FVkBMX8ebMesSDsDeWXyGq8rUeP4MD08fMxYKEa3LxmAzNCJzuh4QNtJoaQQAOu%2FTWBT4bXsQzBsP%2B6UpJ1O2y%2BuvHDA%2BDFpzhS2ioWPYuRlWSiqXl%2FWzJSNAL7FA1IKPIfIIJTJH8qxYbR5d%2F%2ByGAF4qZV&X-Amz-Signature=ec9fe8ddb1199c6f83583261575e49212bbbb802a15762460417f5f66ee3a13d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXTMT7H%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCBmthavMfcmNLQSgJTbY9vQkgf1XnLPYLPbe6LY1zw4QIhAKXkryuMJboZviZRayEQf%2BaL75bDKd2HVuEKV85rMDxwKv8DCCsQABoMNjM3NDIzMTgzODA1Igy%2FGoDJCdUPmxzHg7cq3APsULRZ17QKtwlHifxnQ4vWJpGE1wTzfhxI22ypR%2BUwHCMAYu6eOpnASDErNlXxCrETfG%2F%2BxvdVYauLzUUo3aqbMiDrqqTYyBL7v3%2FGDrMdE2ZThu7czqul0tkVtvTInPzTj7y1HId4XOcIMXuI6aU%2FprhGU5HCZcQcClVrJKF57j%2Fc3QYfRQJa%2F%2BbAGYQ2KrADFRnuwtDah5VpjMDZzVJmvUuCcc8BAA1rBCIFSFQBucgLwRJ7h1dONYSjs1kzgEjd%2Bwvb2M80YoiT8Fxu43%2Bus1qqve5mCIS4FZFcn3S10UYzHlyFnN%2BN3CHQcsmOlqXAJtAKZOY9qnzTfmFoJO7cQq%2F8GOfar0cd%2FQkJfLhjk%2BTbKgynF2%2BAyD0wtJaJkA9%2FuWwlAHFaQzZCCjITrekq7PQKgxHRoxSQWioPRs9NMOutGVMmvEyQGbw3TCgiYV3z3L3XIuQF8ym9XvtKyUF%2BRBi0IKCMfE0TByEMz0ew8nHuRTBzos4xB1FxQIsUxa6h8UYE0iZSusrND6XCjLaLHpWB4JUXd4imQsujFWu45Jde5Dn1TJL8XhQpgtYH1PmRKBd%2BCKu77Ofils920lTeLqze57xWGODL29%2FiyvZ9CcPPegTvnCZty8i1fjCPzIe9BjqkAQXblNSYWd2pMRwNfRkU14pKTVUBuyqJLng9K2vmeKXjwO3uuUYL2vJSl9py2trYk%2FVkBMX8ebMesSDsDeWXyGq8rUeP4MD08fMxYKEa3LxmAzNCJzuh4QNtJoaQQAOu%2FTWBT4bXsQzBsP%2B6UpJ1O2y%2BuvHDA%2BDFpzhS2ioWPYuRlWSiqXl%2FWzJSNAL7FA1IKPIfIIJTJH8qxYbR5d%2F%2ByGAF4qZV&X-Amz-Signature=77a88f5ffd2ab679cbd6512a83efdf20e9fe5ab53c8fc1f8d1a7d6ca5cac014d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXTMT7H%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCBmthavMfcmNLQSgJTbY9vQkgf1XnLPYLPbe6LY1zw4QIhAKXkryuMJboZviZRayEQf%2BaL75bDKd2HVuEKV85rMDxwKv8DCCsQABoMNjM3NDIzMTgzODA1Igy%2FGoDJCdUPmxzHg7cq3APsULRZ17QKtwlHifxnQ4vWJpGE1wTzfhxI22ypR%2BUwHCMAYu6eOpnASDErNlXxCrETfG%2F%2BxvdVYauLzUUo3aqbMiDrqqTYyBL7v3%2FGDrMdE2ZThu7czqul0tkVtvTInPzTj7y1HId4XOcIMXuI6aU%2FprhGU5HCZcQcClVrJKF57j%2Fc3QYfRQJa%2F%2BbAGYQ2KrADFRnuwtDah5VpjMDZzVJmvUuCcc8BAA1rBCIFSFQBucgLwRJ7h1dONYSjs1kzgEjd%2Bwvb2M80YoiT8Fxu43%2Bus1qqve5mCIS4FZFcn3S10UYzHlyFnN%2BN3CHQcsmOlqXAJtAKZOY9qnzTfmFoJO7cQq%2F8GOfar0cd%2FQkJfLhjk%2BTbKgynF2%2BAyD0wtJaJkA9%2FuWwlAHFaQzZCCjITrekq7PQKgxHRoxSQWioPRs9NMOutGVMmvEyQGbw3TCgiYV3z3L3XIuQF8ym9XvtKyUF%2BRBi0IKCMfE0TByEMz0ew8nHuRTBzos4xB1FxQIsUxa6h8UYE0iZSusrND6XCjLaLHpWB4JUXd4imQsujFWu45Jde5Dn1TJL8XhQpgtYH1PmRKBd%2BCKu77Ofils920lTeLqze57xWGODL29%2FiyvZ9CcPPegTvnCZty8i1fjCPzIe9BjqkAQXblNSYWd2pMRwNfRkU14pKTVUBuyqJLng9K2vmeKXjwO3uuUYL2vJSl9py2trYk%2FVkBMX8ebMesSDsDeWXyGq8rUeP4MD08fMxYKEa3LxmAzNCJzuh4QNtJoaQQAOu%2FTWBT4bXsQzBsP%2B6UpJ1O2y%2BuvHDA%2BDFpzhS2ioWPYuRlWSiqXl%2FWzJSNAL7FA1IKPIfIIJTJH8qxYbR5d%2F%2ByGAF4qZV&X-Amz-Signature=6d2d496c1e81039c5d9f600a4b046a91c1dc1e8c854f86c3ce2a05352c732540&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXTMT7H%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCBmthavMfcmNLQSgJTbY9vQkgf1XnLPYLPbe6LY1zw4QIhAKXkryuMJboZviZRayEQf%2BaL75bDKd2HVuEKV85rMDxwKv8DCCsQABoMNjM3NDIzMTgzODA1Igy%2FGoDJCdUPmxzHg7cq3APsULRZ17QKtwlHifxnQ4vWJpGE1wTzfhxI22ypR%2BUwHCMAYu6eOpnASDErNlXxCrETfG%2F%2BxvdVYauLzUUo3aqbMiDrqqTYyBL7v3%2FGDrMdE2ZThu7czqul0tkVtvTInPzTj7y1HId4XOcIMXuI6aU%2FprhGU5HCZcQcClVrJKF57j%2Fc3QYfRQJa%2F%2BbAGYQ2KrADFRnuwtDah5VpjMDZzVJmvUuCcc8BAA1rBCIFSFQBucgLwRJ7h1dONYSjs1kzgEjd%2Bwvb2M80YoiT8Fxu43%2Bus1qqve5mCIS4FZFcn3S10UYzHlyFnN%2BN3CHQcsmOlqXAJtAKZOY9qnzTfmFoJO7cQq%2F8GOfar0cd%2FQkJfLhjk%2BTbKgynF2%2BAyD0wtJaJkA9%2FuWwlAHFaQzZCCjITrekq7PQKgxHRoxSQWioPRs9NMOutGVMmvEyQGbw3TCgiYV3z3L3XIuQF8ym9XvtKyUF%2BRBi0IKCMfE0TByEMz0ew8nHuRTBzos4xB1FxQIsUxa6h8UYE0iZSusrND6XCjLaLHpWB4JUXd4imQsujFWu45Jde5Dn1TJL8XhQpgtYH1PmRKBd%2BCKu77Ofils920lTeLqze57xWGODL29%2FiyvZ9CcPPegTvnCZty8i1fjCPzIe9BjqkAQXblNSYWd2pMRwNfRkU14pKTVUBuyqJLng9K2vmeKXjwO3uuUYL2vJSl9py2trYk%2FVkBMX8ebMesSDsDeWXyGq8rUeP4MD08fMxYKEa3LxmAzNCJzuh4QNtJoaQQAOu%2FTWBT4bXsQzBsP%2B6UpJ1O2y%2BuvHDA%2BDFpzhS2ioWPYuRlWSiqXl%2FWzJSNAL7FA1IKPIfIIJTJH8qxYbR5d%2F%2ByGAF4qZV&X-Amz-Signature=2635e8acd3280bd950ac2b5d849dffc7ff4cb54cdcb731cb2d210c9d9d7ec48b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
