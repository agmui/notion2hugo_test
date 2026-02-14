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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPS6VPF6%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHQqTMxaI%2FLfDmFLXFUvossQ45HIVA53o4U6cGrIx4i4AiA26PxkcEM%2BCkLkZMoxzmZpNi9eoUmzi%2BhbKZu%2BKNNRcSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VLnkAAs2Ow%2FKZfhKtwDDq4SlTa6pJlS0W%2BI69F%2BVrvxOIkCElD%2Bmfrh6j39ItkTTjf0mU9LWT4FcwuZeQIeV7gLnBl2wzm4RvUFcTwyeLhEjlp5MTiFodGjv%2F8bW8x6k5TLo3YnlNblJaaz4HLdyLSyFFsfTU0u4eGbFNt83Xf4sMxL%2BjYrJEw9RCYOjKYRE%2Ba3UMMZ0S5vCvh4eKHbK6mYcL7UcenfcTmMZVb%2Bspf9I4r6OvfV%2B3Hq1zNkR8INVScf10Jr0eLgIWYmL%2FJ0olAgsuzRmoQi%2Ftf1u9mDuhkNRLwkcWNNUDyOCMND5PoK7DKmjjgFY6mlY%2F6eGbxUbSWwWnFwm%2F6RrpS3Z0uTHWIlcjHCgT4Wih301dr%2Flfd3AtxVUjbh%2FdvQhUp%2FX4xXNQQXOFhprtxGFuWvKmvsZ5kgZYnQjLbxCLkF0OlkPLx7R%2FunhB57K%2BgU2wQpxyQ2YU2pDfeQkVgKqDJnvqt0GOQ9U0lKL0E6x8ED7XTHvf9VDv%2F6Y4lmNnftPERxrxd430g%2Bn1xTfOXF%2Bo8OI1COQzdhMakQY91UzNKoj7sdFiZoc%2Bwh6vm4TbHOWcPpQYSWbDHW5S0juBCYLgQ4isEjbbJcpdqccCRteuUUG%2ByfRb3wNJXiCM5jNg6N27AwspK%2FzAY6pgEljycxrO3CkGqRoaeCkqALpI4Va5UKxobCrk1hj%2FkmQRI5N2%2Fw1QshaM2DEHSTId%2BLJu8PyPnHE5C7ZX%2B7S1WeroHTaDMcI%2BrR2dTgWBrvBGtKqrUf%2FstImgYkUn9PriqmdxXNBxoRELr7S1OVwHDPGTwEcQeTbNWlCSfZThSU3aNp3vb6B%2BJ9UF2CfC097GjPclFJW52y5ZVDygLU43bI21rEfGON&X-Amz-Signature=b8a80242794a906e7c095ff2e541832ca75d88055548c9de83fd5984131dd3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPS6VPF6%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHQqTMxaI%2FLfDmFLXFUvossQ45HIVA53o4U6cGrIx4i4AiA26PxkcEM%2BCkLkZMoxzmZpNi9eoUmzi%2BhbKZu%2BKNNRcSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VLnkAAs2Ow%2FKZfhKtwDDq4SlTa6pJlS0W%2BI69F%2BVrvxOIkCElD%2Bmfrh6j39ItkTTjf0mU9LWT4FcwuZeQIeV7gLnBl2wzm4RvUFcTwyeLhEjlp5MTiFodGjv%2F8bW8x6k5TLo3YnlNblJaaz4HLdyLSyFFsfTU0u4eGbFNt83Xf4sMxL%2BjYrJEw9RCYOjKYRE%2Ba3UMMZ0S5vCvh4eKHbK6mYcL7UcenfcTmMZVb%2Bspf9I4r6OvfV%2B3Hq1zNkR8INVScf10Jr0eLgIWYmL%2FJ0olAgsuzRmoQi%2Ftf1u9mDuhkNRLwkcWNNUDyOCMND5PoK7DKmjjgFY6mlY%2F6eGbxUbSWwWnFwm%2F6RrpS3Z0uTHWIlcjHCgT4Wih301dr%2Flfd3AtxVUjbh%2FdvQhUp%2FX4xXNQQXOFhprtxGFuWvKmvsZ5kgZYnQjLbxCLkF0OlkPLx7R%2FunhB57K%2BgU2wQpxyQ2YU2pDfeQkVgKqDJnvqt0GOQ9U0lKL0E6x8ED7XTHvf9VDv%2F6Y4lmNnftPERxrxd430g%2Bn1xTfOXF%2Bo8OI1COQzdhMakQY91UzNKoj7sdFiZoc%2Bwh6vm4TbHOWcPpQYSWbDHW5S0juBCYLgQ4isEjbbJcpdqccCRteuUUG%2ByfRb3wNJXiCM5jNg6N27AwspK%2FzAY6pgEljycxrO3CkGqRoaeCkqALpI4Va5UKxobCrk1hj%2FkmQRI5N2%2Fw1QshaM2DEHSTId%2BLJu8PyPnHE5C7ZX%2B7S1WeroHTaDMcI%2BrR2dTgWBrvBGtKqrUf%2FstImgYkUn9PriqmdxXNBxoRELr7S1OVwHDPGTwEcQeTbNWlCSfZThSU3aNp3vb6B%2BJ9UF2CfC097GjPclFJW52y5ZVDygLU43bI21rEfGON&X-Amz-Signature=9c6c42dfd5ffed75d238728642d9c1e2d9718ae383076a29bd3be16bbbc4b56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPS6VPF6%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHQqTMxaI%2FLfDmFLXFUvossQ45HIVA53o4U6cGrIx4i4AiA26PxkcEM%2BCkLkZMoxzmZpNi9eoUmzi%2BhbKZu%2BKNNRcSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VLnkAAs2Ow%2FKZfhKtwDDq4SlTa6pJlS0W%2BI69F%2BVrvxOIkCElD%2Bmfrh6j39ItkTTjf0mU9LWT4FcwuZeQIeV7gLnBl2wzm4RvUFcTwyeLhEjlp5MTiFodGjv%2F8bW8x6k5TLo3YnlNblJaaz4HLdyLSyFFsfTU0u4eGbFNt83Xf4sMxL%2BjYrJEw9RCYOjKYRE%2Ba3UMMZ0S5vCvh4eKHbK6mYcL7UcenfcTmMZVb%2Bspf9I4r6OvfV%2B3Hq1zNkR8INVScf10Jr0eLgIWYmL%2FJ0olAgsuzRmoQi%2Ftf1u9mDuhkNRLwkcWNNUDyOCMND5PoK7DKmjjgFY6mlY%2F6eGbxUbSWwWnFwm%2F6RrpS3Z0uTHWIlcjHCgT4Wih301dr%2Flfd3AtxVUjbh%2FdvQhUp%2FX4xXNQQXOFhprtxGFuWvKmvsZ5kgZYnQjLbxCLkF0OlkPLx7R%2FunhB57K%2BgU2wQpxyQ2YU2pDfeQkVgKqDJnvqt0GOQ9U0lKL0E6x8ED7XTHvf9VDv%2F6Y4lmNnftPERxrxd430g%2Bn1xTfOXF%2Bo8OI1COQzdhMakQY91UzNKoj7sdFiZoc%2Bwh6vm4TbHOWcPpQYSWbDHW5S0juBCYLgQ4isEjbbJcpdqccCRteuUUG%2ByfRb3wNJXiCM5jNg6N27AwspK%2FzAY6pgEljycxrO3CkGqRoaeCkqALpI4Va5UKxobCrk1hj%2FkmQRI5N2%2Fw1QshaM2DEHSTId%2BLJu8PyPnHE5C7ZX%2B7S1WeroHTaDMcI%2BrR2dTgWBrvBGtKqrUf%2FstImgYkUn9PriqmdxXNBxoRELr7S1OVwHDPGTwEcQeTbNWlCSfZThSU3aNp3vb6B%2BJ9UF2CfC097GjPclFJW52y5ZVDygLU43bI21rEfGON&X-Amz-Signature=a1da7e8e2845a7a35836fcbd4d341337f388b74e6a507a1f44a6b644f9f7311e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPS6VPF6%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHQqTMxaI%2FLfDmFLXFUvossQ45HIVA53o4U6cGrIx4i4AiA26PxkcEM%2BCkLkZMoxzmZpNi9eoUmzi%2BhbKZu%2BKNNRcSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VLnkAAs2Ow%2FKZfhKtwDDq4SlTa6pJlS0W%2BI69F%2BVrvxOIkCElD%2Bmfrh6j39ItkTTjf0mU9LWT4FcwuZeQIeV7gLnBl2wzm4RvUFcTwyeLhEjlp5MTiFodGjv%2F8bW8x6k5TLo3YnlNblJaaz4HLdyLSyFFsfTU0u4eGbFNt83Xf4sMxL%2BjYrJEw9RCYOjKYRE%2Ba3UMMZ0S5vCvh4eKHbK6mYcL7UcenfcTmMZVb%2Bspf9I4r6OvfV%2B3Hq1zNkR8INVScf10Jr0eLgIWYmL%2FJ0olAgsuzRmoQi%2Ftf1u9mDuhkNRLwkcWNNUDyOCMND5PoK7DKmjjgFY6mlY%2F6eGbxUbSWwWnFwm%2F6RrpS3Z0uTHWIlcjHCgT4Wih301dr%2Flfd3AtxVUjbh%2FdvQhUp%2FX4xXNQQXOFhprtxGFuWvKmvsZ5kgZYnQjLbxCLkF0OlkPLx7R%2FunhB57K%2BgU2wQpxyQ2YU2pDfeQkVgKqDJnvqt0GOQ9U0lKL0E6x8ED7XTHvf9VDv%2F6Y4lmNnftPERxrxd430g%2Bn1xTfOXF%2Bo8OI1COQzdhMakQY91UzNKoj7sdFiZoc%2Bwh6vm4TbHOWcPpQYSWbDHW5S0juBCYLgQ4isEjbbJcpdqccCRteuUUG%2ByfRb3wNJXiCM5jNg6N27AwspK%2FzAY6pgEljycxrO3CkGqRoaeCkqALpI4Va5UKxobCrk1hj%2FkmQRI5N2%2Fw1QshaM2DEHSTId%2BLJu8PyPnHE5C7ZX%2B7S1WeroHTaDMcI%2BrR2dTgWBrvBGtKqrUf%2FstImgYkUn9PriqmdxXNBxoRELr7S1OVwHDPGTwEcQeTbNWlCSfZThSU3aNp3vb6B%2BJ9UF2CfC097GjPclFJW52y5ZVDygLU43bI21rEfGON&X-Amz-Signature=ed4a255a9c58ea44c4b1681997e0a9febb22a1915e49180b6241d4cf8c1dcde9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPS6VPF6%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHQqTMxaI%2FLfDmFLXFUvossQ45HIVA53o4U6cGrIx4i4AiA26PxkcEM%2BCkLkZMoxzmZpNi9eoUmzi%2BhbKZu%2BKNNRcSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VLnkAAs2Ow%2FKZfhKtwDDq4SlTa6pJlS0W%2BI69F%2BVrvxOIkCElD%2Bmfrh6j39ItkTTjf0mU9LWT4FcwuZeQIeV7gLnBl2wzm4RvUFcTwyeLhEjlp5MTiFodGjv%2F8bW8x6k5TLo3YnlNblJaaz4HLdyLSyFFsfTU0u4eGbFNt83Xf4sMxL%2BjYrJEw9RCYOjKYRE%2Ba3UMMZ0S5vCvh4eKHbK6mYcL7UcenfcTmMZVb%2Bspf9I4r6OvfV%2B3Hq1zNkR8INVScf10Jr0eLgIWYmL%2FJ0olAgsuzRmoQi%2Ftf1u9mDuhkNRLwkcWNNUDyOCMND5PoK7DKmjjgFY6mlY%2F6eGbxUbSWwWnFwm%2F6RrpS3Z0uTHWIlcjHCgT4Wih301dr%2Flfd3AtxVUjbh%2FdvQhUp%2FX4xXNQQXOFhprtxGFuWvKmvsZ5kgZYnQjLbxCLkF0OlkPLx7R%2FunhB57K%2BgU2wQpxyQ2YU2pDfeQkVgKqDJnvqt0GOQ9U0lKL0E6x8ED7XTHvf9VDv%2F6Y4lmNnftPERxrxd430g%2Bn1xTfOXF%2Bo8OI1COQzdhMakQY91UzNKoj7sdFiZoc%2Bwh6vm4TbHOWcPpQYSWbDHW5S0juBCYLgQ4isEjbbJcpdqccCRteuUUG%2ByfRb3wNJXiCM5jNg6N27AwspK%2FzAY6pgEljycxrO3CkGqRoaeCkqALpI4Va5UKxobCrk1hj%2FkmQRI5N2%2Fw1QshaM2DEHSTId%2BLJu8PyPnHE5C7ZX%2B7S1WeroHTaDMcI%2BrR2dTgWBrvBGtKqrUf%2FstImgYkUn9PriqmdxXNBxoRELr7S1OVwHDPGTwEcQeTbNWlCSfZThSU3aNp3vb6B%2BJ9UF2CfC097GjPclFJW52y5ZVDygLU43bI21rEfGON&X-Amz-Signature=50d17e873cdb78ccd42bf2000e764d50b11778ba064479366619be9004dad422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
