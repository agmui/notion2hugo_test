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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE6BAJW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMS5h%2F%2FRfBLgLmR%2BAMvJRscwVXZ%2F%2FOCZUrkutVyciizgIhANrhXl7vdMh%2Bvndl90E4s%2FRroCpJajJyYde1%2BdfYT6J8KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2FsMStkhtbhOGAC8q3APanYykUCiLVdBs5iEVY3a3rPRBvbQa3arGFu7yuZ2IIQUV978L6uHWgjSHWvaEJTDgPieln85WuDHTX6wi3RmY%2BNrak6ufeLS2mPcc%2BZUzueZuzORJ50TOD2qieUSk%2Fc1PgSQ6bv9FQ4v9IKxKVPubdD7Yvgfrbzl40u8G3eXi%2Frvnt5UHOEcR8HEKpVxLQGEv1VOS7URUuZCgK17JJ0xixM0Vk1w2rvTqr2ytE5ByrmMw3cki097igBZ582ECneFhUJ5JyYFUm7HcaHiXQ9VzSBkeHg4D8sgVveLwVvn5WeNI7fDgPFyLx%2BvpO2lPBJk%2BJ%2FYZq27JiSg%2BQfpq5qtwinTihD%2FVeoDKXU9WZvn5eocpPFF0ECu%2BILG56MF19tPNKyROnXS82STKfvh6agYPzs5YUX4tJfMVrdt3QGIH2UpkJ%2FV80D7cHOxuDRcB5Jq1efYuhvR%2Beykxcf3gRT9Bkm1ovEwyOuoZ91Rkt6wpVy66e%2FU5ioTSpK5IPGkX4CP5MgAzwzabkTqCdLc6irG2PihIqPoduDD0wa6Xc74bFEzweixOT9aKaKpH%2FUyT5YArnA3g6l9BKH3qSqCipzbTEzR%2FluUYwcmIE6X%2FeOYHZ2vT5ICn%2B3yMynS8UjCd%2FbPDBjqkAdOrWLqfa2jzsXwa4WL0hh51g3PrQXknROBYlBn2vvSGR0b6X%2F5%2FjqFB%2FeXOxuIQjwLkPTJD2kE%2Bllh7sEY6ubP0Wzj8NFkYiopTyY9yKcUcAs44Ig74Gfhr2wlfH5p%2B5lKVjfEjmRjba0fMcWa%2FeiAQKGgpxGT9yvNhfrcXup3EJwBnTtDIqm6NTit2XFaqwLsWZ%2F9x65pzCkjiQnSRATtTYxD%2B&X-Amz-Signature=6b472311667becf73183562c2044862796dfd184e576d4dec97e4624decc62e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE6BAJW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMS5h%2F%2FRfBLgLmR%2BAMvJRscwVXZ%2F%2FOCZUrkutVyciizgIhANrhXl7vdMh%2Bvndl90E4s%2FRroCpJajJyYde1%2BdfYT6J8KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2FsMStkhtbhOGAC8q3APanYykUCiLVdBs5iEVY3a3rPRBvbQa3arGFu7yuZ2IIQUV978L6uHWgjSHWvaEJTDgPieln85WuDHTX6wi3RmY%2BNrak6ufeLS2mPcc%2BZUzueZuzORJ50TOD2qieUSk%2Fc1PgSQ6bv9FQ4v9IKxKVPubdD7Yvgfrbzl40u8G3eXi%2Frvnt5UHOEcR8HEKpVxLQGEv1VOS7URUuZCgK17JJ0xixM0Vk1w2rvTqr2ytE5ByrmMw3cki097igBZ582ECneFhUJ5JyYFUm7HcaHiXQ9VzSBkeHg4D8sgVveLwVvn5WeNI7fDgPFyLx%2BvpO2lPBJk%2BJ%2FYZq27JiSg%2BQfpq5qtwinTihD%2FVeoDKXU9WZvn5eocpPFF0ECu%2BILG56MF19tPNKyROnXS82STKfvh6agYPzs5YUX4tJfMVrdt3QGIH2UpkJ%2FV80D7cHOxuDRcB5Jq1efYuhvR%2Beykxcf3gRT9Bkm1ovEwyOuoZ91Rkt6wpVy66e%2FU5ioTSpK5IPGkX4CP5MgAzwzabkTqCdLc6irG2PihIqPoduDD0wa6Xc74bFEzweixOT9aKaKpH%2FUyT5YArnA3g6l9BKH3qSqCipzbTEzR%2FluUYwcmIE6X%2FeOYHZ2vT5ICn%2B3yMynS8UjCd%2FbPDBjqkAdOrWLqfa2jzsXwa4WL0hh51g3PrQXknROBYlBn2vvSGR0b6X%2F5%2FjqFB%2FeXOxuIQjwLkPTJD2kE%2Bllh7sEY6ubP0Wzj8NFkYiopTyY9yKcUcAs44Ig74Gfhr2wlfH5p%2B5lKVjfEjmRjba0fMcWa%2FeiAQKGgpxGT9yvNhfrcXup3EJwBnTtDIqm6NTit2XFaqwLsWZ%2F9x65pzCkjiQnSRATtTYxD%2B&X-Amz-Signature=269810f4866c5d1faf579a1ca348d9fa8a0a78043b532be902a4b1a9cce35bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE6BAJW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMS5h%2F%2FRfBLgLmR%2BAMvJRscwVXZ%2F%2FOCZUrkutVyciizgIhANrhXl7vdMh%2Bvndl90E4s%2FRroCpJajJyYde1%2BdfYT6J8KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2FsMStkhtbhOGAC8q3APanYykUCiLVdBs5iEVY3a3rPRBvbQa3arGFu7yuZ2IIQUV978L6uHWgjSHWvaEJTDgPieln85WuDHTX6wi3RmY%2BNrak6ufeLS2mPcc%2BZUzueZuzORJ50TOD2qieUSk%2Fc1PgSQ6bv9FQ4v9IKxKVPubdD7Yvgfrbzl40u8G3eXi%2Frvnt5UHOEcR8HEKpVxLQGEv1VOS7URUuZCgK17JJ0xixM0Vk1w2rvTqr2ytE5ByrmMw3cki097igBZ582ECneFhUJ5JyYFUm7HcaHiXQ9VzSBkeHg4D8sgVveLwVvn5WeNI7fDgPFyLx%2BvpO2lPBJk%2BJ%2FYZq27JiSg%2BQfpq5qtwinTihD%2FVeoDKXU9WZvn5eocpPFF0ECu%2BILG56MF19tPNKyROnXS82STKfvh6agYPzs5YUX4tJfMVrdt3QGIH2UpkJ%2FV80D7cHOxuDRcB5Jq1efYuhvR%2Beykxcf3gRT9Bkm1ovEwyOuoZ91Rkt6wpVy66e%2FU5ioTSpK5IPGkX4CP5MgAzwzabkTqCdLc6irG2PihIqPoduDD0wa6Xc74bFEzweixOT9aKaKpH%2FUyT5YArnA3g6l9BKH3qSqCipzbTEzR%2FluUYwcmIE6X%2FeOYHZ2vT5ICn%2B3yMynS8UjCd%2FbPDBjqkAdOrWLqfa2jzsXwa4WL0hh51g3PrQXknROBYlBn2vvSGR0b6X%2F5%2FjqFB%2FeXOxuIQjwLkPTJD2kE%2Bllh7sEY6ubP0Wzj8NFkYiopTyY9yKcUcAs44Ig74Gfhr2wlfH5p%2B5lKVjfEjmRjba0fMcWa%2FeiAQKGgpxGT9yvNhfrcXup3EJwBnTtDIqm6NTit2XFaqwLsWZ%2F9x65pzCkjiQnSRATtTYxD%2B&X-Amz-Signature=c49882efa400cb495bfcbe8673b36ec6d7201eae4d5f24b1ab5baa94f4edb976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE6BAJW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMS5h%2F%2FRfBLgLmR%2BAMvJRscwVXZ%2F%2FOCZUrkutVyciizgIhANrhXl7vdMh%2Bvndl90E4s%2FRroCpJajJyYde1%2BdfYT6J8KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2FsMStkhtbhOGAC8q3APanYykUCiLVdBs5iEVY3a3rPRBvbQa3arGFu7yuZ2IIQUV978L6uHWgjSHWvaEJTDgPieln85WuDHTX6wi3RmY%2BNrak6ufeLS2mPcc%2BZUzueZuzORJ50TOD2qieUSk%2Fc1PgSQ6bv9FQ4v9IKxKVPubdD7Yvgfrbzl40u8G3eXi%2Frvnt5UHOEcR8HEKpVxLQGEv1VOS7URUuZCgK17JJ0xixM0Vk1w2rvTqr2ytE5ByrmMw3cki097igBZ582ECneFhUJ5JyYFUm7HcaHiXQ9VzSBkeHg4D8sgVveLwVvn5WeNI7fDgPFyLx%2BvpO2lPBJk%2BJ%2FYZq27JiSg%2BQfpq5qtwinTihD%2FVeoDKXU9WZvn5eocpPFF0ECu%2BILG56MF19tPNKyROnXS82STKfvh6agYPzs5YUX4tJfMVrdt3QGIH2UpkJ%2FV80D7cHOxuDRcB5Jq1efYuhvR%2Beykxcf3gRT9Bkm1ovEwyOuoZ91Rkt6wpVy66e%2FU5ioTSpK5IPGkX4CP5MgAzwzabkTqCdLc6irG2PihIqPoduDD0wa6Xc74bFEzweixOT9aKaKpH%2FUyT5YArnA3g6l9BKH3qSqCipzbTEzR%2FluUYwcmIE6X%2FeOYHZ2vT5ICn%2B3yMynS8UjCd%2FbPDBjqkAdOrWLqfa2jzsXwa4WL0hh51g3PrQXknROBYlBn2vvSGR0b6X%2F5%2FjqFB%2FeXOxuIQjwLkPTJD2kE%2Bllh7sEY6ubP0Wzj8NFkYiopTyY9yKcUcAs44Ig74Gfhr2wlfH5p%2B5lKVjfEjmRjba0fMcWa%2FeiAQKGgpxGT9yvNhfrcXup3EJwBnTtDIqm6NTit2XFaqwLsWZ%2F9x65pzCkjiQnSRATtTYxD%2B&X-Amz-Signature=1ee2068d5192f0f7eb1383e02201d5f00aaf676c9fc7aef8a6d290f9c13249b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE6BAJW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMS5h%2F%2FRfBLgLmR%2BAMvJRscwVXZ%2F%2FOCZUrkutVyciizgIhANrhXl7vdMh%2Bvndl90E4s%2FRroCpJajJyYde1%2BdfYT6J8KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2FsMStkhtbhOGAC8q3APanYykUCiLVdBs5iEVY3a3rPRBvbQa3arGFu7yuZ2IIQUV978L6uHWgjSHWvaEJTDgPieln85WuDHTX6wi3RmY%2BNrak6ufeLS2mPcc%2BZUzueZuzORJ50TOD2qieUSk%2Fc1PgSQ6bv9FQ4v9IKxKVPubdD7Yvgfrbzl40u8G3eXi%2Frvnt5UHOEcR8HEKpVxLQGEv1VOS7URUuZCgK17JJ0xixM0Vk1w2rvTqr2ytE5ByrmMw3cki097igBZ582ECneFhUJ5JyYFUm7HcaHiXQ9VzSBkeHg4D8sgVveLwVvn5WeNI7fDgPFyLx%2BvpO2lPBJk%2BJ%2FYZq27JiSg%2BQfpq5qtwinTihD%2FVeoDKXU9WZvn5eocpPFF0ECu%2BILG56MF19tPNKyROnXS82STKfvh6agYPzs5YUX4tJfMVrdt3QGIH2UpkJ%2FV80D7cHOxuDRcB5Jq1efYuhvR%2Beykxcf3gRT9Bkm1ovEwyOuoZ91Rkt6wpVy66e%2FU5ioTSpK5IPGkX4CP5MgAzwzabkTqCdLc6irG2PihIqPoduDD0wa6Xc74bFEzweixOT9aKaKpH%2FUyT5YArnA3g6l9BKH3qSqCipzbTEzR%2FluUYwcmIE6X%2FeOYHZ2vT5ICn%2B3yMynS8UjCd%2FbPDBjqkAdOrWLqfa2jzsXwa4WL0hh51g3PrQXknROBYlBn2vvSGR0b6X%2F5%2FjqFB%2FeXOxuIQjwLkPTJD2kE%2Bllh7sEY6ubP0Wzj8NFkYiopTyY9yKcUcAs44Ig74Gfhr2wlfH5p%2B5lKVjfEjmRjba0fMcWa%2FeiAQKGgpxGT9yvNhfrcXup3EJwBnTtDIqm6NTit2XFaqwLsWZ%2F9x65pzCkjiQnSRATtTYxD%2B&X-Amz-Signature=611c026f4ad815248267fc7e864509b883c52ee2782b90e24bb1222b3a401baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
