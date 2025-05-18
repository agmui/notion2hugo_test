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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5E7WR2T%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFr37F9g9u4fpibmM1G0ApP5OuI0KbHU4rYVr%2Bozjb%2BQIhALFFV%2FLalKdaX8EhjdHDHO8SCDCLVajv%2Fx%2Ff0Occ2LTpKv8DCG8QABoMNjM3NDIzMTgzODA1Igy9%2BsDTcCYqFMPsddcq3AN8G2Fhq8EnX8sdG4qYdtygvhPEsIRastpir%2Bhtp1DAFO3TFYiEa6LfskOJn2Kt5ZL7da%2BJ%2BcCqTKDNFWhF9w0Ithv5ENmhN%2F3%2FXydKD29Pl2eCnMJzjYNr4WLgBC42qV1oZn4ewvZlTWe5fhuN1Pw%2FLzli5U5eyabOPzqz5RCXG5NTyWU5%2FjcoQnPXUxxxxxz42cNlSdSHf4OrzR9g5KDiqXovt9CmdYfH5weWqajCrp2%2B%2FIqPddLQrJQmzMOukjsY%2FZ02qVOWwBCGOSHf6NQ7vsNbSyPGtT0wF9fxFPWr8WEPQpqaEAgbZ7Rijx6cmy19B%2Fia8hEM5fmfCp%2Fa2swAExF1o7GmminT%2BXyBM8WbyxjvLbjCUnLwJBUkD2NuMBILe6RfEcK5h1rbNbCmUvw6hURwOlCiMqwSyzNyyIvx%2BEwRX1gKmBI0Fg1wQf0YYejEmv%2B4B%2FokgXdNXvLzpGyn6C%2Fcq4X3HIzvdDj1H7ASTx0tv%2Bh1ElTXG7LZEgP0shTr9V3qFn2bkEfihWmB4up1OjahfuLOI2n0ipS9Wex%2FCU1Q%2BFgkLyyGqCqXh2WZgwqJ8vb6w4TLBnp%2Bxxt1xZkNs9oTjGZqogYNS%2FAxh69UcZrKMVdz0QuGhSInRDDX9aXBBjqkAdTEqFyt6tjRMOqBl7jgJQUSSplOEnOe5oh3yU7Q3SVDBMy0iRjKpWm8ti2bgi0M1mkDhnFAWOZe7boiZh6a1ftDsnzCGlzw9X%2BzlzwjSzibVsst4uT9HQX5Y6dUWel9FtUcls5jwqIZJ0agGCeceWtaIou%2Br5nvzQgHfvCK82MX7daH%2F%2FgGyP%2FHjvJRPlZcYPhqc%2FjbW6%2BafK1SbPNNpegZC4%2F6&X-Amz-Signature=d75b5cb034cc0b9cb7008ff21226c8d8420f635bcaf68b0562b3c2e0a1b3d530&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5E7WR2T%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFr37F9g9u4fpibmM1G0ApP5OuI0KbHU4rYVr%2Bozjb%2BQIhALFFV%2FLalKdaX8EhjdHDHO8SCDCLVajv%2Fx%2Ff0Occ2LTpKv8DCG8QABoMNjM3NDIzMTgzODA1Igy9%2BsDTcCYqFMPsddcq3AN8G2Fhq8EnX8sdG4qYdtygvhPEsIRastpir%2Bhtp1DAFO3TFYiEa6LfskOJn2Kt5ZL7da%2BJ%2BcCqTKDNFWhF9w0Ithv5ENmhN%2F3%2FXydKD29Pl2eCnMJzjYNr4WLgBC42qV1oZn4ewvZlTWe5fhuN1Pw%2FLzli5U5eyabOPzqz5RCXG5NTyWU5%2FjcoQnPXUxxxxxz42cNlSdSHf4OrzR9g5KDiqXovt9CmdYfH5weWqajCrp2%2B%2FIqPddLQrJQmzMOukjsY%2FZ02qVOWwBCGOSHf6NQ7vsNbSyPGtT0wF9fxFPWr8WEPQpqaEAgbZ7Rijx6cmy19B%2Fia8hEM5fmfCp%2Fa2swAExF1o7GmminT%2BXyBM8WbyxjvLbjCUnLwJBUkD2NuMBILe6RfEcK5h1rbNbCmUvw6hURwOlCiMqwSyzNyyIvx%2BEwRX1gKmBI0Fg1wQf0YYejEmv%2B4B%2FokgXdNXvLzpGyn6C%2Fcq4X3HIzvdDj1H7ASTx0tv%2Bh1ElTXG7LZEgP0shTr9V3qFn2bkEfihWmB4up1OjahfuLOI2n0ipS9Wex%2FCU1Q%2BFgkLyyGqCqXh2WZgwqJ8vb6w4TLBnp%2Bxxt1xZkNs9oTjGZqogYNS%2FAxh69UcZrKMVdz0QuGhSInRDDX9aXBBjqkAdTEqFyt6tjRMOqBl7jgJQUSSplOEnOe5oh3yU7Q3SVDBMy0iRjKpWm8ti2bgi0M1mkDhnFAWOZe7boiZh6a1ftDsnzCGlzw9X%2BzlzwjSzibVsst4uT9HQX5Y6dUWel9FtUcls5jwqIZJ0agGCeceWtaIou%2Br5nvzQgHfvCK82MX7daH%2F%2FgGyP%2FHjvJRPlZcYPhqc%2FjbW6%2BafK1SbPNNpegZC4%2F6&X-Amz-Signature=4904e423dc10474d17adc27dde0c71268c1506dcfa92e55dc3725a696e07a3b7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5E7WR2T%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFr37F9g9u4fpibmM1G0ApP5OuI0KbHU4rYVr%2Bozjb%2BQIhALFFV%2FLalKdaX8EhjdHDHO8SCDCLVajv%2Fx%2Ff0Occ2LTpKv8DCG8QABoMNjM3NDIzMTgzODA1Igy9%2BsDTcCYqFMPsddcq3AN8G2Fhq8EnX8sdG4qYdtygvhPEsIRastpir%2Bhtp1DAFO3TFYiEa6LfskOJn2Kt5ZL7da%2BJ%2BcCqTKDNFWhF9w0Ithv5ENmhN%2F3%2FXydKD29Pl2eCnMJzjYNr4WLgBC42qV1oZn4ewvZlTWe5fhuN1Pw%2FLzli5U5eyabOPzqz5RCXG5NTyWU5%2FjcoQnPXUxxxxxz42cNlSdSHf4OrzR9g5KDiqXovt9CmdYfH5weWqajCrp2%2B%2FIqPddLQrJQmzMOukjsY%2FZ02qVOWwBCGOSHf6NQ7vsNbSyPGtT0wF9fxFPWr8WEPQpqaEAgbZ7Rijx6cmy19B%2Fia8hEM5fmfCp%2Fa2swAExF1o7GmminT%2BXyBM8WbyxjvLbjCUnLwJBUkD2NuMBILe6RfEcK5h1rbNbCmUvw6hURwOlCiMqwSyzNyyIvx%2BEwRX1gKmBI0Fg1wQf0YYejEmv%2B4B%2FokgXdNXvLzpGyn6C%2Fcq4X3HIzvdDj1H7ASTx0tv%2Bh1ElTXG7LZEgP0shTr9V3qFn2bkEfihWmB4up1OjahfuLOI2n0ipS9Wex%2FCU1Q%2BFgkLyyGqCqXh2WZgwqJ8vb6w4TLBnp%2Bxxt1xZkNs9oTjGZqogYNS%2FAxh69UcZrKMVdz0QuGhSInRDDX9aXBBjqkAdTEqFyt6tjRMOqBl7jgJQUSSplOEnOe5oh3yU7Q3SVDBMy0iRjKpWm8ti2bgi0M1mkDhnFAWOZe7boiZh6a1ftDsnzCGlzw9X%2BzlzwjSzibVsst4uT9HQX5Y6dUWel9FtUcls5jwqIZJ0agGCeceWtaIou%2Br5nvzQgHfvCK82MX7daH%2F%2FgGyP%2FHjvJRPlZcYPhqc%2FjbW6%2BafK1SbPNNpegZC4%2F6&X-Amz-Signature=29abf865d58a2c6980589b99603bfd22fe889b8560ccf41104b6e81a30c77dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5E7WR2T%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFr37F9g9u4fpibmM1G0ApP5OuI0KbHU4rYVr%2Bozjb%2BQIhALFFV%2FLalKdaX8EhjdHDHO8SCDCLVajv%2Fx%2Ff0Occ2LTpKv8DCG8QABoMNjM3NDIzMTgzODA1Igy9%2BsDTcCYqFMPsddcq3AN8G2Fhq8EnX8sdG4qYdtygvhPEsIRastpir%2Bhtp1DAFO3TFYiEa6LfskOJn2Kt5ZL7da%2BJ%2BcCqTKDNFWhF9w0Ithv5ENmhN%2F3%2FXydKD29Pl2eCnMJzjYNr4WLgBC42qV1oZn4ewvZlTWe5fhuN1Pw%2FLzli5U5eyabOPzqz5RCXG5NTyWU5%2FjcoQnPXUxxxxxz42cNlSdSHf4OrzR9g5KDiqXovt9CmdYfH5weWqajCrp2%2B%2FIqPddLQrJQmzMOukjsY%2FZ02qVOWwBCGOSHf6NQ7vsNbSyPGtT0wF9fxFPWr8WEPQpqaEAgbZ7Rijx6cmy19B%2Fia8hEM5fmfCp%2Fa2swAExF1o7GmminT%2BXyBM8WbyxjvLbjCUnLwJBUkD2NuMBILe6RfEcK5h1rbNbCmUvw6hURwOlCiMqwSyzNyyIvx%2BEwRX1gKmBI0Fg1wQf0YYejEmv%2B4B%2FokgXdNXvLzpGyn6C%2Fcq4X3HIzvdDj1H7ASTx0tv%2Bh1ElTXG7LZEgP0shTr9V3qFn2bkEfihWmB4up1OjahfuLOI2n0ipS9Wex%2FCU1Q%2BFgkLyyGqCqXh2WZgwqJ8vb6w4TLBnp%2Bxxt1xZkNs9oTjGZqogYNS%2FAxh69UcZrKMVdz0QuGhSInRDDX9aXBBjqkAdTEqFyt6tjRMOqBl7jgJQUSSplOEnOe5oh3yU7Q3SVDBMy0iRjKpWm8ti2bgi0M1mkDhnFAWOZe7boiZh6a1ftDsnzCGlzw9X%2BzlzwjSzibVsst4uT9HQX5Y6dUWel9FtUcls5jwqIZJ0agGCeceWtaIou%2Br5nvzQgHfvCK82MX7daH%2F%2FgGyP%2FHjvJRPlZcYPhqc%2FjbW6%2BafK1SbPNNpegZC4%2F6&X-Amz-Signature=2ec80cbf3374254e04c0937926827e22f773987293fb76ea9be8fa5a19cf5585&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5E7WR2T%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFr37F9g9u4fpibmM1G0ApP5OuI0KbHU4rYVr%2Bozjb%2BQIhALFFV%2FLalKdaX8EhjdHDHO8SCDCLVajv%2Fx%2Ff0Occ2LTpKv8DCG8QABoMNjM3NDIzMTgzODA1Igy9%2BsDTcCYqFMPsddcq3AN8G2Fhq8EnX8sdG4qYdtygvhPEsIRastpir%2Bhtp1DAFO3TFYiEa6LfskOJn2Kt5ZL7da%2BJ%2BcCqTKDNFWhF9w0Ithv5ENmhN%2F3%2FXydKD29Pl2eCnMJzjYNr4WLgBC42qV1oZn4ewvZlTWe5fhuN1Pw%2FLzli5U5eyabOPzqz5RCXG5NTyWU5%2FjcoQnPXUxxxxxz42cNlSdSHf4OrzR9g5KDiqXovt9CmdYfH5weWqajCrp2%2B%2FIqPddLQrJQmzMOukjsY%2FZ02qVOWwBCGOSHf6NQ7vsNbSyPGtT0wF9fxFPWr8WEPQpqaEAgbZ7Rijx6cmy19B%2Fia8hEM5fmfCp%2Fa2swAExF1o7GmminT%2BXyBM8WbyxjvLbjCUnLwJBUkD2NuMBILe6RfEcK5h1rbNbCmUvw6hURwOlCiMqwSyzNyyIvx%2BEwRX1gKmBI0Fg1wQf0YYejEmv%2B4B%2FokgXdNXvLzpGyn6C%2Fcq4X3HIzvdDj1H7ASTx0tv%2Bh1ElTXG7LZEgP0shTr9V3qFn2bkEfihWmB4up1OjahfuLOI2n0ipS9Wex%2FCU1Q%2BFgkLyyGqCqXh2WZgwqJ8vb6w4TLBnp%2Bxxt1xZkNs9oTjGZqogYNS%2FAxh69UcZrKMVdz0QuGhSInRDDX9aXBBjqkAdTEqFyt6tjRMOqBl7jgJQUSSplOEnOe5oh3yU7Q3SVDBMy0iRjKpWm8ti2bgi0M1mkDhnFAWOZe7boiZh6a1ftDsnzCGlzw9X%2BzlzwjSzibVsst4uT9HQX5Y6dUWel9FtUcls5jwqIZJ0agGCeceWtaIou%2Br5nvzQgHfvCK82MX7daH%2F%2FgGyP%2FHjvJRPlZcYPhqc%2FjbW6%2BafK1SbPNNpegZC4%2F6&X-Amz-Signature=934dd50f64f79d3992a9e60dd43b79c387ba9c02208476e8fa1088891adb4cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
