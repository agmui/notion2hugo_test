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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIDYSZG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7m%2Fde3dpQzxrge1o4MX1LcDQ1kdukoNarNLpQ%2FoqhKQIhAKu0sm8Etehq0Ko6E97Y%2B2cFc68QWjjeJwcJl3SXtKJGKv8DCBcQABoMNjM3NDIzMTgzODA1Igyl0dvqyEgsygFW1ZAq3APXgiqo1NBNdMayiAHxHVrp81d5Kl3Y6VyMtI6CSeudowyXW4uKllajVLu00spm7IXDLYlWTJhF2%2B1K3G3Myhef7ZmD%2Fvtad%2FAHjSo3FjtBP6GevGkptHwjHRl89gd6JJcSLNEQndPlKTXZZAljixBaO6HbqLGdAk1KOq3xCtrEUUev6iSTSwcfHq8FdpC0VjTjQzoJCMu2dt100uAYX4HwlmifSZmVXUYBalItMNXiDBCt378BfZon%2Bsm11Old2Lj5ozMpMWCV3utAbsQVl%2BRrsv%2Fx7XGrc1JWoD4GP5kYZc7ZoN2tqLJ5Fy8txZX10pb30uidK6wQpbgkd2ox9kXIJnMo9CL2o3crnuEO7uFrh7VYtSpAnhF0UQb%2BHNYmKHWZ2t%2F8BR7U0SLgD3o8Zqf4erfuJQBTGIAYygTQOk0yp5T0c9e0PQYxpClpnWekFv8YpJTI4xAWh2%2F0wrKPa5dsh1vVpGTQFbBExt3JzTY%2BFYlRdEtoqhU4VoO14F7x%2FfHs5fZ9Q6zmSVvrkufX97XuKt4QbeSEPDWJht8hAdgGlZGUVEgMXRoZGUlZEvP9ztAARphI%2FWlFRBNmJeIXOXw2%2Fo8ONY79jf6MW2vHrvvS6X8HbLFFAK7UXZUjyjDej4O9BjqkAcn%2FGK9ifSGj7uIDKlevB2Jd1UhVlgmRWpiqSSaK4MZhpab4CBB%2BwsHApkUMEs4wHZeIXr%2FPSay0FL6%2BCMmINAGQlzt5oz0KC2i6Z70abKQpw20GgTPfA%2Fuv6hwDeJW7ODsLklRtT6XoEtGJyAk4OHWgj6xiqPUF4Q6bzKCW0fRR%2B8wiXbV80he62oYxUHYl9eFXSBpVoHA%2FUKKBbeoju8oDo%2BwS&X-Amz-Signature=71f6413e4325f30d2c12e71fe1f37f762c296a850fc05701a239fbb83357614f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIDYSZG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7m%2Fde3dpQzxrge1o4MX1LcDQ1kdukoNarNLpQ%2FoqhKQIhAKu0sm8Etehq0Ko6E97Y%2B2cFc68QWjjeJwcJl3SXtKJGKv8DCBcQABoMNjM3NDIzMTgzODA1Igyl0dvqyEgsygFW1ZAq3APXgiqo1NBNdMayiAHxHVrp81d5Kl3Y6VyMtI6CSeudowyXW4uKllajVLu00spm7IXDLYlWTJhF2%2B1K3G3Myhef7ZmD%2Fvtad%2FAHjSo3FjtBP6GevGkptHwjHRl89gd6JJcSLNEQndPlKTXZZAljixBaO6HbqLGdAk1KOq3xCtrEUUev6iSTSwcfHq8FdpC0VjTjQzoJCMu2dt100uAYX4HwlmifSZmVXUYBalItMNXiDBCt378BfZon%2Bsm11Old2Lj5ozMpMWCV3utAbsQVl%2BRrsv%2Fx7XGrc1JWoD4GP5kYZc7ZoN2tqLJ5Fy8txZX10pb30uidK6wQpbgkd2ox9kXIJnMo9CL2o3crnuEO7uFrh7VYtSpAnhF0UQb%2BHNYmKHWZ2t%2F8BR7U0SLgD3o8Zqf4erfuJQBTGIAYygTQOk0yp5T0c9e0PQYxpClpnWekFv8YpJTI4xAWh2%2F0wrKPa5dsh1vVpGTQFbBExt3JzTY%2BFYlRdEtoqhU4VoO14F7x%2FfHs5fZ9Q6zmSVvrkufX97XuKt4QbeSEPDWJht8hAdgGlZGUVEgMXRoZGUlZEvP9ztAARphI%2FWlFRBNmJeIXOXw2%2Fo8ONY79jf6MW2vHrvvS6X8HbLFFAK7UXZUjyjDej4O9BjqkAcn%2FGK9ifSGj7uIDKlevB2Jd1UhVlgmRWpiqSSaK4MZhpab4CBB%2BwsHApkUMEs4wHZeIXr%2FPSay0FL6%2BCMmINAGQlzt5oz0KC2i6Z70abKQpw20GgTPfA%2Fuv6hwDeJW7ODsLklRtT6XoEtGJyAk4OHWgj6xiqPUF4Q6bzKCW0fRR%2B8wiXbV80he62oYxUHYl9eFXSBpVoHA%2FUKKBbeoju8oDo%2BwS&X-Amz-Signature=569aae1e9121b5fbc0ec9bf73af60ec96b15511b133dec795195b4d6122526e0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIDYSZG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7m%2Fde3dpQzxrge1o4MX1LcDQ1kdukoNarNLpQ%2FoqhKQIhAKu0sm8Etehq0Ko6E97Y%2B2cFc68QWjjeJwcJl3SXtKJGKv8DCBcQABoMNjM3NDIzMTgzODA1Igyl0dvqyEgsygFW1ZAq3APXgiqo1NBNdMayiAHxHVrp81d5Kl3Y6VyMtI6CSeudowyXW4uKllajVLu00spm7IXDLYlWTJhF2%2B1K3G3Myhef7ZmD%2Fvtad%2FAHjSo3FjtBP6GevGkptHwjHRl89gd6JJcSLNEQndPlKTXZZAljixBaO6HbqLGdAk1KOq3xCtrEUUev6iSTSwcfHq8FdpC0VjTjQzoJCMu2dt100uAYX4HwlmifSZmVXUYBalItMNXiDBCt378BfZon%2Bsm11Old2Lj5ozMpMWCV3utAbsQVl%2BRrsv%2Fx7XGrc1JWoD4GP5kYZc7ZoN2tqLJ5Fy8txZX10pb30uidK6wQpbgkd2ox9kXIJnMo9CL2o3crnuEO7uFrh7VYtSpAnhF0UQb%2BHNYmKHWZ2t%2F8BR7U0SLgD3o8Zqf4erfuJQBTGIAYygTQOk0yp5T0c9e0PQYxpClpnWekFv8YpJTI4xAWh2%2F0wrKPa5dsh1vVpGTQFbBExt3JzTY%2BFYlRdEtoqhU4VoO14F7x%2FfHs5fZ9Q6zmSVvrkufX97XuKt4QbeSEPDWJht8hAdgGlZGUVEgMXRoZGUlZEvP9ztAARphI%2FWlFRBNmJeIXOXw2%2Fo8ONY79jf6MW2vHrvvS6X8HbLFFAK7UXZUjyjDej4O9BjqkAcn%2FGK9ifSGj7uIDKlevB2Jd1UhVlgmRWpiqSSaK4MZhpab4CBB%2BwsHApkUMEs4wHZeIXr%2FPSay0FL6%2BCMmINAGQlzt5oz0KC2i6Z70abKQpw20GgTPfA%2Fuv6hwDeJW7ODsLklRtT6XoEtGJyAk4OHWgj6xiqPUF4Q6bzKCW0fRR%2B8wiXbV80he62oYxUHYl9eFXSBpVoHA%2FUKKBbeoju8oDo%2BwS&X-Amz-Signature=90460a585319b1fa5ddb2004084b584a7190bdb1da743c65d2fe11063d215098&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIDYSZG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7m%2Fde3dpQzxrge1o4MX1LcDQ1kdukoNarNLpQ%2FoqhKQIhAKu0sm8Etehq0Ko6E97Y%2B2cFc68QWjjeJwcJl3SXtKJGKv8DCBcQABoMNjM3NDIzMTgzODA1Igyl0dvqyEgsygFW1ZAq3APXgiqo1NBNdMayiAHxHVrp81d5Kl3Y6VyMtI6CSeudowyXW4uKllajVLu00spm7IXDLYlWTJhF2%2B1K3G3Myhef7ZmD%2Fvtad%2FAHjSo3FjtBP6GevGkptHwjHRl89gd6JJcSLNEQndPlKTXZZAljixBaO6HbqLGdAk1KOq3xCtrEUUev6iSTSwcfHq8FdpC0VjTjQzoJCMu2dt100uAYX4HwlmifSZmVXUYBalItMNXiDBCt378BfZon%2Bsm11Old2Lj5ozMpMWCV3utAbsQVl%2BRrsv%2Fx7XGrc1JWoD4GP5kYZc7ZoN2tqLJ5Fy8txZX10pb30uidK6wQpbgkd2ox9kXIJnMo9CL2o3crnuEO7uFrh7VYtSpAnhF0UQb%2BHNYmKHWZ2t%2F8BR7U0SLgD3o8Zqf4erfuJQBTGIAYygTQOk0yp5T0c9e0PQYxpClpnWekFv8YpJTI4xAWh2%2F0wrKPa5dsh1vVpGTQFbBExt3JzTY%2BFYlRdEtoqhU4VoO14F7x%2FfHs5fZ9Q6zmSVvrkufX97XuKt4QbeSEPDWJht8hAdgGlZGUVEgMXRoZGUlZEvP9ztAARphI%2FWlFRBNmJeIXOXw2%2Fo8ONY79jf6MW2vHrvvS6X8HbLFFAK7UXZUjyjDej4O9BjqkAcn%2FGK9ifSGj7uIDKlevB2Jd1UhVlgmRWpiqSSaK4MZhpab4CBB%2BwsHApkUMEs4wHZeIXr%2FPSay0FL6%2BCMmINAGQlzt5oz0KC2i6Z70abKQpw20GgTPfA%2Fuv6hwDeJW7ODsLklRtT6XoEtGJyAk4OHWgj6xiqPUF4Q6bzKCW0fRR%2B8wiXbV80he62oYxUHYl9eFXSBpVoHA%2FUKKBbeoju8oDo%2BwS&X-Amz-Signature=69a1a4aae597b91f04c44ea48c0994ddae580432a4cda1b3dd41378a534e683a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIDYSZG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7m%2Fde3dpQzxrge1o4MX1LcDQ1kdukoNarNLpQ%2FoqhKQIhAKu0sm8Etehq0Ko6E97Y%2B2cFc68QWjjeJwcJl3SXtKJGKv8DCBcQABoMNjM3NDIzMTgzODA1Igyl0dvqyEgsygFW1ZAq3APXgiqo1NBNdMayiAHxHVrp81d5Kl3Y6VyMtI6CSeudowyXW4uKllajVLu00spm7IXDLYlWTJhF2%2B1K3G3Myhef7ZmD%2Fvtad%2FAHjSo3FjtBP6GevGkptHwjHRl89gd6JJcSLNEQndPlKTXZZAljixBaO6HbqLGdAk1KOq3xCtrEUUev6iSTSwcfHq8FdpC0VjTjQzoJCMu2dt100uAYX4HwlmifSZmVXUYBalItMNXiDBCt378BfZon%2Bsm11Old2Lj5ozMpMWCV3utAbsQVl%2BRrsv%2Fx7XGrc1JWoD4GP5kYZc7ZoN2tqLJ5Fy8txZX10pb30uidK6wQpbgkd2ox9kXIJnMo9CL2o3crnuEO7uFrh7VYtSpAnhF0UQb%2BHNYmKHWZ2t%2F8BR7U0SLgD3o8Zqf4erfuJQBTGIAYygTQOk0yp5T0c9e0PQYxpClpnWekFv8YpJTI4xAWh2%2F0wrKPa5dsh1vVpGTQFbBExt3JzTY%2BFYlRdEtoqhU4VoO14F7x%2FfHs5fZ9Q6zmSVvrkufX97XuKt4QbeSEPDWJht8hAdgGlZGUVEgMXRoZGUlZEvP9ztAARphI%2FWlFRBNmJeIXOXw2%2Fo8ONY79jf6MW2vHrvvS6X8HbLFFAK7UXZUjyjDej4O9BjqkAcn%2FGK9ifSGj7uIDKlevB2Jd1UhVlgmRWpiqSSaK4MZhpab4CBB%2BwsHApkUMEs4wHZeIXr%2FPSay0FL6%2BCMmINAGQlzt5oz0KC2i6Z70abKQpw20GgTPfA%2Fuv6hwDeJW7ODsLklRtT6XoEtGJyAk4OHWgj6xiqPUF4Q6bzKCW0fRR%2B8wiXbV80he62oYxUHYl9eFXSBpVoHA%2FUKKBbeoju8oDo%2BwS&X-Amz-Signature=2630e195818cf2b80972576e1c90354fab5d1ee0eabec58b5742dc35dde4541e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
