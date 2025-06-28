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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRPP3ELM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5p%2F%2FSq0Xy0GXxmfZUT92d3r3QHMkeLdyuVv0vnsogcwIhAOotdg8RJZVbksaMiTknP3oQ4ISa048AMFxC4Ixhh09gKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWfeWaHYnKMbAOTQYq3AOKTjDFR%2Fi%2Ba0r0swU2pVyWRBQFRHmYWFsS0ltuSGUSl4%2F0OuM0hUapgWXSwwSKEZ96GtuFD4OYYgktgF8NGu%2FHv2C3k%2BnCadIvWw%2FWA8fgL1r%2BwwUu0WpGJkjnJIRzrU72MHEAs6zyYqtMYTS1AsC8%2F3Np0M%2BqSuLdSlzG%2BB64OG%2Bk55jaDnCBZVd8W3E8R7ATSsld0dpAwDqRyOLZOo7Gx0MugswDdIWNNw4%2BuB10EF0mO8lR1C0GiZihBVrmDJvginYPYvEUzjVOESMZH1aUC7GepOamjAvkHbJJEOiqtquqrAkzbvZmqOuZtfJUYS4xT1vdNt0Od7R%2F7vz%2Be8KMrSwfbEHsG3bUDZaBh%2BQCgCRidknd%2FvhKF9bfEMJkxF64UnjhXzMqEazbfgsU6b%2B%2FBEYk%2BN0O0P8q9P4wKs6WfRur9sxYe0%2BGwU09Zt0Lwm0AFnaAExAmX3dj%2BNGSYfs7XUWilsG67eoO0%2BgzIbU%2BWJ21KVgHRATVKsRS7uoAAztc5PU%2BkLLjlvfWUCHQY1ZqE98pow%2Fucua10Q8SiVsPbirkR3d18EX7d37MZyY3aKsQ6V5tGbsocONumqViHc2nqm%2BVx4oMfpZXh5yLxvQl71RaOLBQEk%2B1Hjs5pjDMyv7CBjqkARYpoWyNEu1lcAVNhwax1mV78yo%2FKw2xFOXnLBkNT098ncMDAXrXHNKe9e9Xa9qpUJzNYdQN%2F9itx8GgAaGeyI2CVVOY3j3Ns1IdWEIdJ5X8SQEjZI5VjugnpEW7Q8%2FUqoqlStyr0%2FhqWEU2csrQSTL5OfObGoGtMxEeOwtye05HhAkj8W3iRQkjHBL9BgD2RxjjEYepQzJKCz8qTlAMf31GnbN9&X-Amz-Signature=7df6b1127a5b09df075c0980dc03b2e60aa6c7094879b7751fc7097b7b7d153c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRPP3ELM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5p%2F%2FSq0Xy0GXxmfZUT92d3r3QHMkeLdyuVv0vnsogcwIhAOotdg8RJZVbksaMiTknP3oQ4ISa048AMFxC4Ixhh09gKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWfeWaHYnKMbAOTQYq3AOKTjDFR%2Fi%2Ba0r0swU2pVyWRBQFRHmYWFsS0ltuSGUSl4%2F0OuM0hUapgWXSwwSKEZ96GtuFD4OYYgktgF8NGu%2FHv2C3k%2BnCadIvWw%2FWA8fgL1r%2BwwUu0WpGJkjnJIRzrU72MHEAs6zyYqtMYTS1AsC8%2F3Np0M%2BqSuLdSlzG%2BB64OG%2Bk55jaDnCBZVd8W3E8R7ATSsld0dpAwDqRyOLZOo7Gx0MugswDdIWNNw4%2BuB10EF0mO8lR1C0GiZihBVrmDJvginYPYvEUzjVOESMZH1aUC7GepOamjAvkHbJJEOiqtquqrAkzbvZmqOuZtfJUYS4xT1vdNt0Od7R%2F7vz%2Be8KMrSwfbEHsG3bUDZaBh%2BQCgCRidknd%2FvhKF9bfEMJkxF64UnjhXzMqEazbfgsU6b%2B%2FBEYk%2BN0O0P8q9P4wKs6WfRur9sxYe0%2BGwU09Zt0Lwm0AFnaAExAmX3dj%2BNGSYfs7XUWilsG67eoO0%2BgzIbU%2BWJ21KVgHRATVKsRS7uoAAztc5PU%2BkLLjlvfWUCHQY1ZqE98pow%2Fucua10Q8SiVsPbirkR3d18EX7d37MZyY3aKsQ6V5tGbsocONumqViHc2nqm%2BVx4oMfpZXh5yLxvQl71RaOLBQEk%2B1Hjs5pjDMyv7CBjqkARYpoWyNEu1lcAVNhwax1mV78yo%2FKw2xFOXnLBkNT098ncMDAXrXHNKe9e9Xa9qpUJzNYdQN%2F9itx8GgAaGeyI2CVVOY3j3Ns1IdWEIdJ5X8SQEjZI5VjugnpEW7Q8%2FUqoqlStyr0%2FhqWEU2csrQSTL5OfObGoGtMxEeOwtye05HhAkj8W3iRQkjHBL9BgD2RxjjEYepQzJKCz8qTlAMf31GnbN9&X-Amz-Signature=cc6fabb9c7df62b781ce938e81f3a1f6d250a3a0e7e05b3573886794d2c36012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRPP3ELM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5p%2F%2FSq0Xy0GXxmfZUT92d3r3QHMkeLdyuVv0vnsogcwIhAOotdg8RJZVbksaMiTknP3oQ4ISa048AMFxC4Ixhh09gKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWfeWaHYnKMbAOTQYq3AOKTjDFR%2Fi%2Ba0r0swU2pVyWRBQFRHmYWFsS0ltuSGUSl4%2F0OuM0hUapgWXSwwSKEZ96GtuFD4OYYgktgF8NGu%2FHv2C3k%2BnCadIvWw%2FWA8fgL1r%2BwwUu0WpGJkjnJIRzrU72MHEAs6zyYqtMYTS1AsC8%2F3Np0M%2BqSuLdSlzG%2BB64OG%2Bk55jaDnCBZVd8W3E8R7ATSsld0dpAwDqRyOLZOo7Gx0MugswDdIWNNw4%2BuB10EF0mO8lR1C0GiZihBVrmDJvginYPYvEUzjVOESMZH1aUC7GepOamjAvkHbJJEOiqtquqrAkzbvZmqOuZtfJUYS4xT1vdNt0Od7R%2F7vz%2Be8KMrSwfbEHsG3bUDZaBh%2BQCgCRidknd%2FvhKF9bfEMJkxF64UnjhXzMqEazbfgsU6b%2B%2FBEYk%2BN0O0P8q9P4wKs6WfRur9sxYe0%2BGwU09Zt0Lwm0AFnaAExAmX3dj%2BNGSYfs7XUWilsG67eoO0%2BgzIbU%2BWJ21KVgHRATVKsRS7uoAAztc5PU%2BkLLjlvfWUCHQY1ZqE98pow%2Fucua10Q8SiVsPbirkR3d18EX7d37MZyY3aKsQ6V5tGbsocONumqViHc2nqm%2BVx4oMfpZXh5yLxvQl71RaOLBQEk%2B1Hjs5pjDMyv7CBjqkARYpoWyNEu1lcAVNhwax1mV78yo%2FKw2xFOXnLBkNT098ncMDAXrXHNKe9e9Xa9qpUJzNYdQN%2F9itx8GgAaGeyI2CVVOY3j3Ns1IdWEIdJ5X8SQEjZI5VjugnpEW7Q8%2FUqoqlStyr0%2FhqWEU2csrQSTL5OfObGoGtMxEeOwtye05HhAkj8W3iRQkjHBL9BgD2RxjjEYepQzJKCz8qTlAMf31GnbN9&X-Amz-Signature=063370c6b70d6f870b279dacbc88c2951fddd2ffa56abdcbe3328c5f7a8c99c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRPP3ELM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5p%2F%2FSq0Xy0GXxmfZUT92d3r3QHMkeLdyuVv0vnsogcwIhAOotdg8RJZVbksaMiTknP3oQ4ISa048AMFxC4Ixhh09gKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWfeWaHYnKMbAOTQYq3AOKTjDFR%2Fi%2Ba0r0swU2pVyWRBQFRHmYWFsS0ltuSGUSl4%2F0OuM0hUapgWXSwwSKEZ96GtuFD4OYYgktgF8NGu%2FHv2C3k%2BnCadIvWw%2FWA8fgL1r%2BwwUu0WpGJkjnJIRzrU72MHEAs6zyYqtMYTS1AsC8%2F3Np0M%2BqSuLdSlzG%2BB64OG%2Bk55jaDnCBZVd8W3E8R7ATSsld0dpAwDqRyOLZOo7Gx0MugswDdIWNNw4%2BuB10EF0mO8lR1C0GiZihBVrmDJvginYPYvEUzjVOESMZH1aUC7GepOamjAvkHbJJEOiqtquqrAkzbvZmqOuZtfJUYS4xT1vdNt0Od7R%2F7vz%2Be8KMrSwfbEHsG3bUDZaBh%2BQCgCRidknd%2FvhKF9bfEMJkxF64UnjhXzMqEazbfgsU6b%2B%2FBEYk%2BN0O0P8q9P4wKs6WfRur9sxYe0%2BGwU09Zt0Lwm0AFnaAExAmX3dj%2BNGSYfs7XUWilsG67eoO0%2BgzIbU%2BWJ21KVgHRATVKsRS7uoAAztc5PU%2BkLLjlvfWUCHQY1ZqE98pow%2Fucua10Q8SiVsPbirkR3d18EX7d37MZyY3aKsQ6V5tGbsocONumqViHc2nqm%2BVx4oMfpZXh5yLxvQl71RaOLBQEk%2B1Hjs5pjDMyv7CBjqkARYpoWyNEu1lcAVNhwax1mV78yo%2FKw2xFOXnLBkNT098ncMDAXrXHNKe9e9Xa9qpUJzNYdQN%2F9itx8GgAaGeyI2CVVOY3j3Ns1IdWEIdJ5X8SQEjZI5VjugnpEW7Q8%2FUqoqlStyr0%2FhqWEU2csrQSTL5OfObGoGtMxEeOwtye05HhAkj8W3iRQkjHBL9BgD2RxjjEYepQzJKCz8qTlAMf31GnbN9&X-Amz-Signature=abe54a1ce9fe5f7c68062bd6c00e65908b279372986ad2f1d16455139940a4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRPP3ELM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5p%2F%2FSq0Xy0GXxmfZUT92d3r3QHMkeLdyuVv0vnsogcwIhAOotdg8RJZVbksaMiTknP3oQ4ISa048AMFxC4Ixhh09gKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWfeWaHYnKMbAOTQYq3AOKTjDFR%2Fi%2Ba0r0swU2pVyWRBQFRHmYWFsS0ltuSGUSl4%2F0OuM0hUapgWXSwwSKEZ96GtuFD4OYYgktgF8NGu%2FHv2C3k%2BnCadIvWw%2FWA8fgL1r%2BwwUu0WpGJkjnJIRzrU72MHEAs6zyYqtMYTS1AsC8%2F3Np0M%2BqSuLdSlzG%2BB64OG%2Bk55jaDnCBZVd8W3E8R7ATSsld0dpAwDqRyOLZOo7Gx0MugswDdIWNNw4%2BuB10EF0mO8lR1C0GiZihBVrmDJvginYPYvEUzjVOESMZH1aUC7GepOamjAvkHbJJEOiqtquqrAkzbvZmqOuZtfJUYS4xT1vdNt0Od7R%2F7vz%2Be8KMrSwfbEHsG3bUDZaBh%2BQCgCRidknd%2FvhKF9bfEMJkxF64UnjhXzMqEazbfgsU6b%2B%2FBEYk%2BN0O0P8q9P4wKs6WfRur9sxYe0%2BGwU09Zt0Lwm0AFnaAExAmX3dj%2BNGSYfs7XUWilsG67eoO0%2BgzIbU%2BWJ21KVgHRATVKsRS7uoAAztc5PU%2BkLLjlvfWUCHQY1ZqE98pow%2Fucua10Q8SiVsPbirkR3d18EX7d37MZyY3aKsQ6V5tGbsocONumqViHc2nqm%2BVx4oMfpZXh5yLxvQl71RaOLBQEk%2B1Hjs5pjDMyv7CBjqkARYpoWyNEu1lcAVNhwax1mV78yo%2FKw2xFOXnLBkNT098ncMDAXrXHNKe9e9Xa9qpUJzNYdQN%2F9itx8GgAaGeyI2CVVOY3j3Ns1IdWEIdJ5X8SQEjZI5VjugnpEW7Q8%2FUqoqlStyr0%2FhqWEU2csrQSTL5OfObGoGtMxEeOwtye05HhAkj8W3iRQkjHBL9BgD2RxjjEYepQzJKCz8qTlAMf31GnbN9&X-Amz-Signature=ac32ca318ff22af74866ceccd82d173ef0241b0da64a78234a9f319a84e4102e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
