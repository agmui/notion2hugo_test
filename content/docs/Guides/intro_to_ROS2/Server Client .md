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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5R6YJH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2FwCz121m%2BwFFyDNef7PjiaMLF%2BaXmbkkrRAGHtBV%2BwIhAPeZh5dD%2BE2JUg0uqN2LeSVHEOUw4BQXEhvGOU3CEPUvKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzamhO8fAqDamIB2yUq3AMHYvtCiGqDZ5ZYNs6Dmv6yGld9vV9YmJdGn%2Bduq6I4QvprmrX5jdzymxXAEhNJssRfZQSatyD1y6yPh6JWWZWWGQuMhT9ojz9%2FWVrf3OhBcqtythCe39XjOilqpVHS5fRay0Duw6HzFZMA0CvUpMuMiXytNtcJPJTq8xmhDl592LjEA2Z2ncNLPv6EULRaq9C0E6iheaJ069gVYP96IA6XVfVZYQDVBlvIGpUcxrt21rfrDVSBwl%2FRCvzicfzsmgoYqbpKQfnQCZpVtI%2FsGt0Ms7dve8re6S%2Ba7U2cXFn%2B0xen2vR7B8%2FvnjaWcCEY2O%2BaEG9Ke7Ghg38GllinxVMUZkxHqNDHhDlo3JZdqvN%2Br84kzgWVjG9bHwNCoKyYRCyKZObIqzNLxlGTieaRsS7HUafCKBLvV%2B%2BflAKsWVlQlMZcuolAik0cOMn4Vi6%2Fy%2BIFes5mG42aMPzek71eTASAs5%2FrbDI%2BAUK3FQS5FZO%2FRLwhHt47R%2FOESIt1HjEKk9THSQ9P%2FkRy6IFJPKVOzcx%2BxWbwFfAjkNXg1tBujygeHLqnJ8s15EGKXFzixNiDxNuNq36y%2Fc0fUb%2F%2BwsmhZSQZ6kqkPJK1uFilNy57gktdaQcT85nFXKnjIim82zD41cXDBjqkAe%2FrhurEmmTN5XyFIwy8V3lph7A%2Bxde0ldDHniY4l1g6yx1azUFENoX96KX35H07baSplFWlp7tEVdtG4Os3523GuqAJnjyLH6wH7CYRl4OkEFrktMFLznkZmPSmlrR9ek%2BJIjSnAv8xomSm799h6iO9fWp%2BWRhCTpAhcDL%2FUaR3mPwlypp3YdbKeHkE2CH0eCLFM0v494zp0IYoqYGtKt%2FLE3B%2B&X-Amz-Signature=cbb011f65b4ef8cb09591cdedf344b34ee1c7c34bd8d090506646e73f419221f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5R6YJH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2FwCz121m%2BwFFyDNef7PjiaMLF%2BaXmbkkrRAGHtBV%2BwIhAPeZh5dD%2BE2JUg0uqN2LeSVHEOUw4BQXEhvGOU3CEPUvKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzamhO8fAqDamIB2yUq3AMHYvtCiGqDZ5ZYNs6Dmv6yGld9vV9YmJdGn%2Bduq6I4QvprmrX5jdzymxXAEhNJssRfZQSatyD1y6yPh6JWWZWWGQuMhT9ojz9%2FWVrf3OhBcqtythCe39XjOilqpVHS5fRay0Duw6HzFZMA0CvUpMuMiXytNtcJPJTq8xmhDl592LjEA2Z2ncNLPv6EULRaq9C0E6iheaJ069gVYP96IA6XVfVZYQDVBlvIGpUcxrt21rfrDVSBwl%2FRCvzicfzsmgoYqbpKQfnQCZpVtI%2FsGt0Ms7dve8re6S%2Ba7U2cXFn%2B0xen2vR7B8%2FvnjaWcCEY2O%2BaEG9Ke7Ghg38GllinxVMUZkxHqNDHhDlo3JZdqvN%2Br84kzgWVjG9bHwNCoKyYRCyKZObIqzNLxlGTieaRsS7HUafCKBLvV%2B%2BflAKsWVlQlMZcuolAik0cOMn4Vi6%2Fy%2BIFes5mG42aMPzek71eTASAs5%2FrbDI%2BAUK3FQS5FZO%2FRLwhHt47R%2FOESIt1HjEKk9THSQ9P%2FkRy6IFJPKVOzcx%2BxWbwFfAjkNXg1tBujygeHLqnJ8s15EGKXFzixNiDxNuNq36y%2Fc0fUb%2F%2BwsmhZSQZ6kqkPJK1uFilNy57gktdaQcT85nFXKnjIim82zD41cXDBjqkAe%2FrhurEmmTN5XyFIwy8V3lph7A%2Bxde0ldDHniY4l1g6yx1azUFENoX96KX35H07baSplFWlp7tEVdtG4Os3523GuqAJnjyLH6wH7CYRl4OkEFrktMFLznkZmPSmlrR9ek%2BJIjSnAv8xomSm799h6iO9fWp%2BWRhCTpAhcDL%2FUaR3mPwlypp3YdbKeHkE2CH0eCLFM0v494zp0IYoqYGtKt%2FLE3B%2B&X-Amz-Signature=81f972b7951b1fd707cb7dd1ee9711a0dc0e7b289f730865910637df4d2349a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5R6YJH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2FwCz121m%2BwFFyDNef7PjiaMLF%2BaXmbkkrRAGHtBV%2BwIhAPeZh5dD%2BE2JUg0uqN2LeSVHEOUw4BQXEhvGOU3CEPUvKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzamhO8fAqDamIB2yUq3AMHYvtCiGqDZ5ZYNs6Dmv6yGld9vV9YmJdGn%2Bduq6I4QvprmrX5jdzymxXAEhNJssRfZQSatyD1y6yPh6JWWZWWGQuMhT9ojz9%2FWVrf3OhBcqtythCe39XjOilqpVHS5fRay0Duw6HzFZMA0CvUpMuMiXytNtcJPJTq8xmhDl592LjEA2Z2ncNLPv6EULRaq9C0E6iheaJ069gVYP96IA6XVfVZYQDVBlvIGpUcxrt21rfrDVSBwl%2FRCvzicfzsmgoYqbpKQfnQCZpVtI%2FsGt0Ms7dve8re6S%2Ba7U2cXFn%2B0xen2vR7B8%2FvnjaWcCEY2O%2BaEG9Ke7Ghg38GllinxVMUZkxHqNDHhDlo3JZdqvN%2Br84kzgWVjG9bHwNCoKyYRCyKZObIqzNLxlGTieaRsS7HUafCKBLvV%2B%2BflAKsWVlQlMZcuolAik0cOMn4Vi6%2Fy%2BIFes5mG42aMPzek71eTASAs5%2FrbDI%2BAUK3FQS5FZO%2FRLwhHt47R%2FOESIt1HjEKk9THSQ9P%2FkRy6IFJPKVOzcx%2BxWbwFfAjkNXg1tBujygeHLqnJ8s15EGKXFzixNiDxNuNq36y%2Fc0fUb%2F%2BwsmhZSQZ6kqkPJK1uFilNy57gktdaQcT85nFXKnjIim82zD41cXDBjqkAe%2FrhurEmmTN5XyFIwy8V3lph7A%2Bxde0ldDHniY4l1g6yx1azUFENoX96KX35H07baSplFWlp7tEVdtG4Os3523GuqAJnjyLH6wH7CYRl4OkEFrktMFLznkZmPSmlrR9ek%2BJIjSnAv8xomSm799h6iO9fWp%2BWRhCTpAhcDL%2FUaR3mPwlypp3YdbKeHkE2CH0eCLFM0v494zp0IYoqYGtKt%2FLE3B%2B&X-Amz-Signature=3fcd557ca12867c945f3833583178aab9e0d25ae233b8bb85697e216e191de88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5R6YJH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2FwCz121m%2BwFFyDNef7PjiaMLF%2BaXmbkkrRAGHtBV%2BwIhAPeZh5dD%2BE2JUg0uqN2LeSVHEOUw4BQXEhvGOU3CEPUvKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzamhO8fAqDamIB2yUq3AMHYvtCiGqDZ5ZYNs6Dmv6yGld9vV9YmJdGn%2Bduq6I4QvprmrX5jdzymxXAEhNJssRfZQSatyD1y6yPh6JWWZWWGQuMhT9ojz9%2FWVrf3OhBcqtythCe39XjOilqpVHS5fRay0Duw6HzFZMA0CvUpMuMiXytNtcJPJTq8xmhDl592LjEA2Z2ncNLPv6EULRaq9C0E6iheaJ069gVYP96IA6XVfVZYQDVBlvIGpUcxrt21rfrDVSBwl%2FRCvzicfzsmgoYqbpKQfnQCZpVtI%2FsGt0Ms7dve8re6S%2Ba7U2cXFn%2B0xen2vR7B8%2FvnjaWcCEY2O%2BaEG9Ke7Ghg38GllinxVMUZkxHqNDHhDlo3JZdqvN%2Br84kzgWVjG9bHwNCoKyYRCyKZObIqzNLxlGTieaRsS7HUafCKBLvV%2B%2BflAKsWVlQlMZcuolAik0cOMn4Vi6%2Fy%2BIFes5mG42aMPzek71eTASAs5%2FrbDI%2BAUK3FQS5FZO%2FRLwhHt47R%2FOESIt1HjEKk9THSQ9P%2FkRy6IFJPKVOzcx%2BxWbwFfAjkNXg1tBujygeHLqnJ8s15EGKXFzixNiDxNuNq36y%2Fc0fUb%2F%2BwsmhZSQZ6kqkPJK1uFilNy57gktdaQcT85nFXKnjIim82zD41cXDBjqkAe%2FrhurEmmTN5XyFIwy8V3lph7A%2Bxde0ldDHniY4l1g6yx1azUFENoX96KX35H07baSplFWlp7tEVdtG4Os3523GuqAJnjyLH6wH7CYRl4OkEFrktMFLznkZmPSmlrR9ek%2BJIjSnAv8xomSm799h6iO9fWp%2BWRhCTpAhcDL%2FUaR3mPwlypp3YdbKeHkE2CH0eCLFM0v494zp0IYoqYGtKt%2FLE3B%2B&X-Amz-Signature=23a5fead541ac05c29ae2126656e70a33a8fb3a2e5838344de237ff533e4929b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5R6YJH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2FwCz121m%2BwFFyDNef7PjiaMLF%2BaXmbkkrRAGHtBV%2BwIhAPeZh5dD%2BE2JUg0uqN2LeSVHEOUw4BQXEhvGOU3CEPUvKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzamhO8fAqDamIB2yUq3AMHYvtCiGqDZ5ZYNs6Dmv6yGld9vV9YmJdGn%2Bduq6I4QvprmrX5jdzymxXAEhNJssRfZQSatyD1y6yPh6JWWZWWGQuMhT9ojz9%2FWVrf3OhBcqtythCe39XjOilqpVHS5fRay0Duw6HzFZMA0CvUpMuMiXytNtcJPJTq8xmhDl592LjEA2Z2ncNLPv6EULRaq9C0E6iheaJ069gVYP96IA6XVfVZYQDVBlvIGpUcxrt21rfrDVSBwl%2FRCvzicfzsmgoYqbpKQfnQCZpVtI%2FsGt0Ms7dve8re6S%2Ba7U2cXFn%2B0xen2vR7B8%2FvnjaWcCEY2O%2BaEG9Ke7Ghg38GllinxVMUZkxHqNDHhDlo3JZdqvN%2Br84kzgWVjG9bHwNCoKyYRCyKZObIqzNLxlGTieaRsS7HUafCKBLvV%2B%2BflAKsWVlQlMZcuolAik0cOMn4Vi6%2Fy%2BIFes5mG42aMPzek71eTASAs5%2FrbDI%2BAUK3FQS5FZO%2FRLwhHt47R%2FOESIt1HjEKk9THSQ9P%2FkRy6IFJPKVOzcx%2BxWbwFfAjkNXg1tBujygeHLqnJ8s15EGKXFzixNiDxNuNq36y%2Fc0fUb%2F%2BwsmhZSQZ6kqkPJK1uFilNy57gktdaQcT85nFXKnjIim82zD41cXDBjqkAe%2FrhurEmmTN5XyFIwy8V3lph7A%2Bxde0ldDHniY4l1g6yx1azUFENoX96KX35H07baSplFWlp7tEVdtG4Os3523GuqAJnjyLH6wH7CYRl4OkEFrktMFLznkZmPSmlrR9ek%2BJIjSnAv8xomSm799h6iO9fWp%2BWRhCTpAhcDL%2FUaR3mPwlypp3YdbKeHkE2CH0eCLFM0v494zp0IYoqYGtKt%2FLE3B%2B&X-Amz-Signature=10375e832e8cc694459b354048672362519d86f0d1b1bd52080084e7f64c49dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
