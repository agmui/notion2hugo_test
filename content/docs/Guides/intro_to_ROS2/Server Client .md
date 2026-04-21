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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QO5JOGJ%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B2bMUvc7etQxOaUaCgK5UYvrFc%2FvSf5EEg%2FbSBgSrjQIhAJV9%2FvZlvKlkV8e9xu4zcQrDR6ZP6LSm8nCpYodwq94gKv8DCCsQABoMNjM3NDIzMTgzODA1IgykbX6t3SRH8oQeFDIq3APlipBcRLNQhzgnVDISxeirgZOZTrU3PuE5gZ9OSUVd4OgXlvr2Q8X%2FpV%2BdDJIPtRIAOqunoEOUu6R%2B6UBwsHBmuOeLnbxLYwaCcg3z%2F186UHwH0q5%2BVGEO8G5igYEFs3vAFuBwgj6DYrFA7zhEno9PP%2FQ7P8M1dqRjb3ghUSZaLQMZp8rFGLFcKCE3CNjaRqwNxNU094clCAuiUckr%2BcB44mYgXeHISOFN%2BcJ4V31q5S38pSDDDwvF5VSQCQ6ZYLQyfWjM30CFkWHgC7%2Fxda7vYycAOcCatPtaS4GSv3nsyz6xKdbT3ahse98bvXPOH2S3fpG0W5%2BR4jIj%2FmyXB4n%2BJJBjW8%2FAT08Yg4p8X18aFXprF7CXU4pj1Vbwg81dZ8cJsXIzQbe0qrhwx5UcA9SmQwJ7BP0gxTM4vp1%2BQqbL%2Fz0Qd2xUOG%2Fj8XknwY%2F82FL1tjPo%2F4oDkpvst86era6zUR5CSJKQfWCUw4JKjUpfRA48RaEsoX7DrjnLIF6yWskVkjXsskWAOtOYXBzTUTZ%2FPmsyJ57jT%2Bg5OMZWAfS92hfEC%2FM6Hwu7B15Q1z7x9EezB2lPaEaJUWVIe1A%2BaTnxNrnT0w2Mhju0KIqEaO%2FMKjdv71%2FrbBTfmv9gwzCmrJvPBjqkAQchapwjpCJ5EYGtcX19bv7%2BSoQ95bcvQljJED3H8i83ioKYMambwcxvb2m8FLx58r2J6FTUK%2FXaDhMPmLQj6O1B4hXbwQkoJY45vZNQkbH%2FkzYEWbKbPNWFgdNI%2BY83SB90oc4Cb%2BQfGJIzeb3bB8FTnHHOFoJTMo%2BZ1gk7YWNzM0zKEoQUhDm%2BuTSmJLThK1%2Br9a22tYwhsN1U5VIWznNn6yqY&X-Amz-Signature=ba65998f91aaf6a700855791f59fa1e57ee1fb390a9671fb89cc35795a36caaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QO5JOGJ%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B2bMUvc7etQxOaUaCgK5UYvrFc%2FvSf5EEg%2FbSBgSrjQIhAJV9%2FvZlvKlkV8e9xu4zcQrDR6ZP6LSm8nCpYodwq94gKv8DCCsQABoMNjM3NDIzMTgzODA1IgykbX6t3SRH8oQeFDIq3APlipBcRLNQhzgnVDISxeirgZOZTrU3PuE5gZ9OSUVd4OgXlvr2Q8X%2FpV%2BdDJIPtRIAOqunoEOUu6R%2B6UBwsHBmuOeLnbxLYwaCcg3z%2F186UHwH0q5%2BVGEO8G5igYEFs3vAFuBwgj6DYrFA7zhEno9PP%2FQ7P8M1dqRjb3ghUSZaLQMZp8rFGLFcKCE3CNjaRqwNxNU094clCAuiUckr%2BcB44mYgXeHISOFN%2BcJ4V31q5S38pSDDDwvF5VSQCQ6ZYLQyfWjM30CFkWHgC7%2Fxda7vYycAOcCatPtaS4GSv3nsyz6xKdbT3ahse98bvXPOH2S3fpG0W5%2BR4jIj%2FmyXB4n%2BJJBjW8%2FAT08Yg4p8X18aFXprF7CXU4pj1Vbwg81dZ8cJsXIzQbe0qrhwx5UcA9SmQwJ7BP0gxTM4vp1%2BQqbL%2Fz0Qd2xUOG%2Fj8XknwY%2F82FL1tjPo%2F4oDkpvst86era6zUR5CSJKQfWCUw4JKjUpfRA48RaEsoX7DrjnLIF6yWskVkjXsskWAOtOYXBzTUTZ%2FPmsyJ57jT%2Bg5OMZWAfS92hfEC%2FM6Hwu7B15Q1z7x9EezB2lPaEaJUWVIe1A%2BaTnxNrnT0w2Mhju0KIqEaO%2FMKjdv71%2FrbBTfmv9gwzCmrJvPBjqkAQchapwjpCJ5EYGtcX19bv7%2BSoQ95bcvQljJED3H8i83ioKYMambwcxvb2m8FLx58r2J6FTUK%2FXaDhMPmLQj6O1B4hXbwQkoJY45vZNQkbH%2FkzYEWbKbPNWFgdNI%2BY83SB90oc4Cb%2BQfGJIzeb3bB8FTnHHOFoJTMo%2BZ1gk7YWNzM0zKEoQUhDm%2BuTSmJLThK1%2Br9a22tYwhsN1U5VIWznNn6yqY&X-Amz-Signature=66930344b0541bd4a2949a0fc3f6006ab9dd7c1ffe6202e0af2e1f28a4baeb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QO5JOGJ%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B2bMUvc7etQxOaUaCgK5UYvrFc%2FvSf5EEg%2FbSBgSrjQIhAJV9%2FvZlvKlkV8e9xu4zcQrDR6ZP6LSm8nCpYodwq94gKv8DCCsQABoMNjM3NDIzMTgzODA1IgykbX6t3SRH8oQeFDIq3APlipBcRLNQhzgnVDISxeirgZOZTrU3PuE5gZ9OSUVd4OgXlvr2Q8X%2FpV%2BdDJIPtRIAOqunoEOUu6R%2B6UBwsHBmuOeLnbxLYwaCcg3z%2F186UHwH0q5%2BVGEO8G5igYEFs3vAFuBwgj6DYrFA7zhEno9PP%2FQ7P8M1dqRjb3ghUSZaLQMZp8rFGLFcKCE3CNjaRqwNxNU094clCAuiUckr%2BcB44mYgXeHISOFN%2BcJ4V31q5S38pSDDDwvF5VSQCQ6ZYLQyfWjM30CFkWHgC7%2Fxda7vYycAOcCatPtaS4GSv3nsyz6xKdbT3ahse98bvXPOH2S3fpG0W5%2BR4jIj%2FmyXB4n%2BJJBjW8%2FAT08Yg4p8X18aFXprF7CXU4pj1Vbwg81dZ8cJsXIzQbe0qrhwx5UcA9SmQwJ7BP0gxTM4vp1%2BQqbL%2Fz0Qd2xUOG%2Fj8XknwY%2F82FL1tjPo%2F4oDkpvst86era6zUR5CSJKQfWCUw4JKjUpfRA48RaEsoX7DrjnLIF6yWskVkjXsskWAOtOYXBzTUTZ%2FPmsyJ57jT%2Bg5OMZWAfS92hfEC%2FM6Hwu7B15Q1z7x9EezB2lPaEaJUWVIe1A%2BaTnxNrnT0w2Mhju0KIqEaO%2FMKjdv71%2FrbBTfmv9gwzCmrJvPBjqkAQchapwjpCJ5EYGtcX19bv7%2BSoQ95bcvQljJED3H8i83ioKYMambwcxvb2m8FLx58r2J6FTUK%2FXaDhMPmLQj6O1B4hXbwQkoJY45vZNQkbH%2FkzYEWbKbPNWFgdNI%2BY83SB90oc4Cb%2BQfGJIzeb3bB8FTnHHOFoJTMo%2BZ1gk7YWNzM0zKEoQUhDm%2BuTSmJLThK1%2Br9a22tYwhsN1U5VIWznNn6yqY&X-Amz-Signature=7a6ff8a7727c7abee74e82a8befec3db7b8da002b87b1ab9209dae4c38a35347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QO5JOGJ%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B2bMUvc7etQxOaUaCgK5UYvrFc%2FvSf5EEg%2FbSBgSrjQIhAJV9%2FvZlvKlkV8e9xu4zcQrDR6ZP6LSm8nCpYodwq94gKv8DCCsQABoMNjM3NDIzMTgzODA1IgykbX6t3SRH8oQeFDIq3APlipBcRLNQhzgnVDISxeirgZOZTrU3PuE5gZ9OSUVd4OgXlvr2Q8X%2FpV%2BdDJIPtRIAOqunoEOUu6R%2B6UBwsHBmuOeLnbxLYwaCcg3z%2F186UHwH0q5%2BVGEO8G5igYEFs3vAFuBwgj6DYrFA7zhEno9PP%2FQ7P8M1dqRjb3ghUSZaLQMZp8rFGLFcKCE3CNjaRqwNxNU094clCAuiUckr%2BcB44mYgXeHISOFN%2BcJ4V31q5S38pSDDDwvF5VSQCQ6ZYLQyfWjM30CFkWHgC7%2Fxda7vYycAOcCatPtaS4GSv3nsyz6xKdbT3ahse98bvXPOH2S3fpG0W5%2BR4jIj%2FmyXB4n%2BJJBjW8%2FAT08Yg4p8X18aFXprF7CXU4pj1Vbwg81dZ8cJsXIzQbe0qrhwx5UcA9SmQwJ7BP0gxTM4vp1%2BQqbL%2Fz0Qd2xUOG%2Fj8XknwY%2F82FL1tjPo%2F4oDkpvst86era6zUR5CSJKQfWCUw4JKjUpfRA48RaEsoX7DrjnLIF6yWskVkjXsskWAOtOYXBzTUTZ%2FPmsyJ57jT%2Bg5OMZWAfS92hfEC%2FM6Hwu7B15Q1z7x9EezB2lPaEaJUWVIe1A%2BaTnxNrnT0w2Mhju0KIqEaO%2FMKjdv71%2FrbBTfmv9gwzCmrJvPBjqkAQchapwjpCJ5EYGtcX19bv7%2BSoQ95bcvQljJED3H8i83ioKYMambwcxvb2m8FLx58r2J6FTUK%2FXaDhMPmLQj6O1B4hXbwQkoJY45vZNQkbH%2FkzYEWbKbPNWFgdNI%2BY83SB90oc4Cb%2BQfGJIzeb3bB8FTnHHOFoJTMo%2BZ1gk7YWNzM0zKEoQUhDm%2BuTSmJLThK1%2Br9a22tYwhsN1U5VIWznNn6yqY&X-Amz-Signature=e31015e00beb601222b88db28fb484afcdc4d5720c1c1fb7ae992fffd0224a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QO5JOGJ%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B2bMUvc7etQxOaUaCgK5UYvrFc%2FvSf5EEg%2FbSBgSrjQIhAJV9%2FvZlvKlkV8e9xu4zcQrDR6ZP6LSm8nCpYodwq94gKv8DCCsQABoMNjM3NDIzMTgzODA1IgykbX6t3SRH8oQeFDIq3APlipBcRLNQhzgnVDISxeirgZOZTrU3PuE5gZ9OSUVd4OgXlvr2Q8X%2FpV%2BdDJIPtRIAOqunoEOUu6R%2B6UBwsHBmuOeLnbxLYwaCcg3z%2F186UHwH0q5%2BVGEO8G5igYEFs3vAFuBwgj6DYrFA7zhEno9PP%2FQ7P8M1dqRjb3ghUSZaLQMZp8rFGLFcKCE3CNjaRqwNxNU094clCAuiUckr%2BcB44mYgXeHISOFN%2BcJ4V31q5S38pSDDDwvF5VSQCQ6ZYLQyfWjM30CFkWHgC7%2Fxda7vYycAOcCatPtaS4GSv3nsyz6xKdbT3ahse98bvXPOH2S3fpG0W5%2BR4jIj%2FmyXB4n%2BJJBjW8%2FAT08Yg4p8X18aFXprF7CXU4pj1Vbwg81dZ8cJsXIzQbe0qrhwx5UcA9SmQwJ7BP0gxTM4vp1%2BQqbL%2Fz0Qd2xUOG%2Fj8XknwY%2F82FL1tjPo%2F4oDkpvst86era6zUR5CSJKQfWCUw4JKjUpfRA48RaEsoX7DrjnLIF6yWskVkjXsskWAOtOYXBzTUTZ%2FPmsyJ57jT%2Bg5OMZWAfS92hfEC%2FM6Hwu7B15Q1z7x9EezB2lPaEaJUWVIe1A%2BaTnxNrnT0w2Mhju0KIqEaO%2FMKjdv71%2FrbBTfmv9gwzCmrJvPBjqkAQchapwjpCJ5EYGtcX19bv7%2BSoQ95bcvQljJED3H8i83ioKYMambwcxvb2m8FLx58r2J6FTUK%2FXaDhMPmLQj6O1B4hXbwQkoJY45vZNQkbH%2FkzYEWbKbPNWFgdNI%2BY83SB90oc4Cb%2BQfGJIzeb3bB8FTnHHOFoJTMo%2BZ1gk7YWNzM0zKEoQUhDm%2BuTSmJLThK1%2Br9a22tYwhsN1U5VIWznNn6yqY&X-Amz-Signature=3f92c20c6b4ec02fdb07cc3c414c9daea30765b25690a5e39bfaba80ba8ebf2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
