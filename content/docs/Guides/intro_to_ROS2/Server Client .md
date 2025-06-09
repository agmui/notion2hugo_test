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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LATR75B%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6kqrcfYgpSk%2F7ZSzFjiPOQn1jS6g%2BZC3fXU9%2FNhz2AiBspqk%2Fk%2Fc8suw1c6iu6Q9ZS7hniSMZ2TLvG%2BCnaGmmASqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM40ypb8TXpiKayJrdKtwD6BDiViPx7j7SW5mYIOwtey003bXl4f0pLFOfQAV7HwXb8DzdvmI1nBQiUTZnbaZDq1s4jLVnIKXul9m%2BWzeUscpaaVoOzEB6gCwppMelgFuBf7At%2F6L5Zp9GBRFZ7mjZCIoZtc0RaOkNXYcaIb3rM7pCK%2B%2BuPeM1J852aeo1jx%2F1FXs7byJpGMpeHPRHySVc%2Fu34SfOYNoQ9RHpZwlDTL5dKhRrp1v%2BgTo9i%2FmsnbyFOgRkutI7LZ%2B2qPh7pq%2FDfKRwxeco0xIr8yXbs7jrYdQtIjBUG5Cx2FmgC4zI4ooSQu%2FZJFNPMmNoQgmSaJnyUdSVqhBg32fk4LWWwmNxjGZeSy%2FZEDNEgDWvsLpJSs60iZNDykxVZPQtl%2Bw5xjcflWSL3alkvGLqUkUJux75l6kAlZy0rq0nF8BweVExZ28slARmUzKHrnlQ6zAsn5%2F%2BlhK1W0wLoCL4zdFU0RgchVtl3tEakwTxxptIvwY4%2B5R8uCRMH4ruc7Zc%2Bsf7q48zR4BdNGw2Gp3Aw%2BCSMGlSPUU8BH5nPYzItCE2o8VN%2F0wwCWCTbUmU%2FtrocUHfZU1UaBd%2FN%2Fe11ElOouM2dR87rPnxRrMRoku6oFknc83GJd9xs7l3dajsvaZkQjcgw8O2YwgY6pgGpkweAXVYLBMn%2BUh0xRlBO6bsWdMFWzrXbGjdGENxpaIRab56mGwLEAthUNDktc0FMuwR5CamzGxhkatxz%2F0PsnVTF9tMjDXpsj0aR9tC5NBqSwhxxb2SdyqxTuA0eyOYCr2%2BOxsb39u%2FKB7HhPx1reefQK4iv%2FL98LeiARET9bOS8dBrKaqdlFe39JVnEioP5CObUETWW8ul8Jq8zUU9uJtuCxK9p&X-Amz-Signature=cba68551317671c32b2a39ab470b12370446a7342104dca2274443f721d6ac0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LATR75B%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6kqrcfYgpSk%2F7ZSzFjiPOQn1jS6g%2BZC3fXU9%2FNhz2AiBspqk%2Fk%2Fc8suw1c6iu6Q9ZS7hniSMZ2TLvG%2BCnaGmmASqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM40ypb8TXpiKayJrdKtwD6BDiViPx7j7SW5mYIOwtey003bXl4f0pLFOfQAV7HwXb8DzdvmI1nBQiUTZnbaZDq1s4jLVnIKXul9m%2BWzeUscpaaVoOzEB6gCwppMelgFuBf7At%2F6L5Zp9GBRFZ7mjZCIoZtc0RaOkNXYcaIb3rM7pCK%2B%2BuPeM1J852aeo1jx%2F1FXs7byJpGMpeHPRHySVc%2Fu34SfOYNoQ9RHpZwlDTL5dKhRrp1v%2BgTo9i%2FmsnbyFOgRkutI7LZ%2B2qPh7pq%2FDfKRwxeco0xIr8yXbs7jrYdQtIjBUG5Cx2FmgC4zI4ooSQu%2FZJFNPMmNoQgmSaJnyUdSVqhBg32fk4LWWwmNxjGZeSy%2FZEDNEgDWvsLpJSs60iZNDykxVZPQtl%2Bw5xjcflWSL3alkvGLqUkUJux75l6kAlZy0rq0nF8BweVExZ28slARmUzKHrnlQ6zAsn5%2F%2BlhK1W0wLoCL4zdFU0RgchVtl3tEakwTxxptIvwY4%2B5R8uCRMH4ruc7Zc%2Bsf7q48zR4BdNGw2Gp3Aw%2BCSMGlSPUU8BH5nPYzItCE2o8VN%2F0wwCWCTbUmU%2FtrocUHfZU1UaBd%2FN%2Fe11ElOouM2dR87rPnxRrMRoku6oFknc83GJd9xs7l3dajsvaZkQjcgw8O2YwgY6pgGpkweAXVYLBMn%2BUh0xRlBO6bsWdMFWzrXbGjdGENxpaIRab56mGwLEAthUNDktc0FMuwR5CamzGxhkatxz%2F0PsnVTF9tMjDXpsj0aR9tC5NBqSwhxxb2SdyqxTuA0eyOYCr2%2BOxsb39u%2FKB7HhPx1reefQK4iv%2FL98LeiARET9bOS8dBrKaqdlFe39JVnEioP5CObUETWW8ul8Jq8zUU9uJtuCxK9p&X-Amz-Signature=b570051020e7406acd816146fd04f29f4bfa5a9c35d3520b8c56d465e5c76577&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LATR75B%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6kqrcfYgpSk%2F7ZSzFjiPOQn1jS6g%2BZC3fXU9%2FNhz2AiBspqk%2Fk%2Fc8suw1c6iu6Q9ZS7hniSMZ2TLvG%2BCnaGmmASqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM40ypb8TXpiKayJrdKtwD6BDiViPx7j7SW5mYIOwtey003bXl4f0pLFOfQAV7HwXb8DzdvmI1nBQiUTZnbaZDq1s4jLVnIKXul9m%2BWzeUscpaaVoOzEB6gCwppMelgFuBf7At%2F6L5Zp9GBRFZ7mjZCIoZtc0RaOkNXYcaIb3rM7pCK%2B%2BuPeM1J852aeo1jx%2F1FXs7byJpGMpeHPRHySVc%2Fu34SfOYNoQ9RHpZwlDTL5dKhRrp1v%2BgTo9i%2FmsnbyFOgRkutI7LZ%2B2qPh7pq%2FDfKRwxeco0xIr8yXbs7jrYdQtIjBUG5Cx2FmgC4zI4ooSQu%2FZJFNPMmNoQgmSaJnyUdSVqhBg32fk4LWWwmNxjGZeSy%2FZEDNEgDWvsLpJSs60iZNDykxVZPQtl%2Bw5xjcflWSL3alkvGLqUkUJux75l6kAlZy0rq0nF8BweVExZ28slARmUzKHrnlQ6zAsn5%2F%2BlhK1W0wLoCL4zdFU0RgchVtl3tEakwTxxptIvwY4%2B5R8uCRMH4ruc7Zc%2Bsf7q48zR4BdNGw2Gp3Aw%2BCSMGlSPUU8BH5nPYzItCE2o8VN%2F0wwCWCTbUmU%2FtrocUHfZU1UaBd%2FN%2Fe11ElOouM2dR87rPnxRrMRoku6oFknc83GJd9xs7l3dajsvaZkQjcgw8O2YwgY6pgGpkweAXVYLBMn%2BUh0xRlBO6bsWdMFWzrXbGjdGENxpaIRab56mGwLEAthUNDktc0FMuwR5CamzGxhkatxz%2F0PsnVTF9tMjDXpsj0aR9tC5NBqSwhxxb2SdyqxTuA0eyOYCr2%2BOxsb39u%2FKB7HhPx1reefQK4iv%2FL98LeiARET9bOS8dBrKaqdlFe39JVnEioP5CObUETWW8ul8Jq8zUU9uJtuCxK9p&X-Amz-Signature=97d547d163ed8e1038ca6d325e975dcf0525a0f6f701181cb908982e02a885ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LATR75B%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6kqrcfYgpSk%2F7ZSzFjiPOQn1jS6g%2BZC3fXU9%2FNhz2AiBspqk%2Fk%2Fc8suw1c6iu6Q9ZS7hniSMZ2TLvG%2BCnaGmmASqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM40ypb8TXpiKayJrdKtwD6BDiViPx7j7SW5mYIOwtey003bXl4f0pLFOfQAV7HwXb8DzdvmI1nBQiUTZnbaZDq1s4jLVnIKXul9m%2BWzeUscpaaVoOzEB6gCwppMelgFuBf7At%2F6L5Zp9GBRFZ7mjZCIoZtc0RaOkNXYcaIb3rM7pCK%2B%2BuPeM1J852aeo1jx%2F1FXs7byJpGMpeHPRHySVc%2Fu34SfOYNoQ9RHpZwlDTL5dKhRrp1v%2BgTo9i%2FmsnbyFOgRkutI7LZ%2B2qPh7pq%2FDfKRwxeco0xIr8yXbs7jrYdQtIjBUG5Cx2FmgC4zI4ooSQu%2FZJFNPMmNoQgmSaJnyUdSVqhBg32fk4LWWwmNxjGZeSy%2FZEDNEgDWvsLpJSs60iZNDykxVZPQtl%2Bw5xjcflWSL3alkvGLqUkUJux75l6kAlZy0rq0nF8BweVExZ28slARmUzKHrnlQ6zAsn5%2F%2BlhK1W0wLoCL4zdFU0RgchVtl3tEakwTxxptIvwY4%2B5R8uCRMH4ruc7Zc%2Bsf7q48zR4BdNGw2Gp3Aw%2BCSMGlSPUU8BH5nPYzItCE2o8VN%2F0wwCWCTbUmU%2FtrocUHfZU1UaBd%2FN%2Fe11ElOouM2dR87rPnxRrMRoku6oFknc83GJd9xs7l3dajsvaZkQjcgw8O2YwgY6pgGpkweAXVYLBMn%2BUh0xRlBO6bsWdMFWzrXbGjdGENxpaIRab56mGwLEAthUNDktc0FMuwR5CamzGxhkatxz%2F0PsnVTF9tMjDXpsj0aR9tC5NBqSwhxxb2SdyqxTuA0eyOYCr2%2BOxsb39u%2FKB7HhPx1reefQK4iv%2FL98LeiARET9bOS8dBrKaqdlFe39JVnEioP5CObUETWW8ul8Jq8zUU9uJtuCxK9p&X-Amz-Signature=2efce36ff24461abe7dc09d02e7f832c1e9109a2fd98db1347b395b7439b4b19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LATR75B%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6kqrcfYgpSk%2F7ZSzFjiPOQn1jS6g%2BZC3fXU9%2FNhz2AiBspqk%2Fk%2Fc8suw1c6iu6Q9ZS7hniSMZ2TLvG%2BCnaGmmASqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM40ypb8TXpiKayJrdKtwD6BDiViPx7j7SW5mYIOwtey003bXl4f0pLFOfQAV7HwXb8DzdvmI1nBQiUTZnbaZDq1s4jLVnIKXul9m%2BWzeUscpaaVoOzEB6gCwppMelgFuBf7At%2F6L5Zp9GBRFZ7mjZCIoZtc0RaOkNXYcaIb3rM7pCK%2B%2BuPeM1J852aeo1jx%2F1FXs7byJpGMpeHPRHySVc%2Fu34SfOYNoQ9RHpZwlDTL5dKhRrp1v%2BgTo9i%2FmsnbyFOgRkutI7LZ%2B2qPh7pq%2FDfKRwxeco0xIr8yXbs7jrYdQtIjBUG5Cx2FmgC4zI4ooSQu%2FZJFNPMmNoQgmSaJnyUdSVqhBg32fk4LWWwmNxjGZeSy%2FZEDNEgDWvsLpJSs60iZNDykxVZPQtl%2Bw5xjcflWSL3alkvGLqUkUJux75l6kAlZy0rq0nF8BweVExZ28slARmUzKHrnlQ6zAsn5%2F%2BlhK1W0wLoCL4zdFU0RgchVtl3tEakwTxxptIvwY4%2B5R8uCRMH4ruc7Zc%2Bsf7q48zR4BdNGw2Gp3Aw%2BCSMGlSPUU8BH5nPYzItCE2o8VN%2F0wwCWCTbUmU%2FtrocUHfZU1UaBd%2FN%2Fe11ElOouM2dR87rPnxRrMRoku6oFknc83GJd9xs7l3dajsvaZkQjcgw8O2YwgY6pgGpkweAXVYLBMn%2BUh0xRlBO6bsWdMFWzrXbGjdGENxpaIRab56mGwLEAthUNDktc0FMuwR5CamzGxhkatxz%2F0PsnVTF9tMjDXpsj0aR9tC5NBqSwhxxb2SdyqxTuA0eyOYCr2%2BOxsb39u%2FKB7HhPx1reefQK4iv%2FL98LeiARET9bOS8dBrKaqdlFe39JVnEioP5CObUETWW8ul8Jq8zUU9uJtuCxK9p&X-Amz-Signature=a6d4723ddccb721fe0a2eb2272fe0286922a1231a030b43101cfa0bedd359fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
