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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DBEW3R%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuumIdN1LSbJ5OvZGLLl5eDFFVNfnpOF4q54VrkYJSqAIhAK59O2G8Dy%2FHKQ2zowza8BSZnrHpyJzQOouA4YlGHsevKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSUpo1%2FUwdBZ9bGo0q3AOVK6o0%2BquCa0fxq0hSfxF4PuGRV36r%2BP88ixwS7wch2tBMvji9zgHD6rX0CvnurcB5PrK5Tu4kYx7B9LqsnlYtzstTUx1bx2SBWcKueB2snnmgpFRGxAWOrwEvXkMRlFjKgIK%2BNJ6oiDulV5aE96Tj7p0%2BH5maP5yeoR1KnEQqlzZrPzOO29nZ9iYMq987cYWK%2B%2FlQ1j2J8WkQZq2jYFcF5qL5BNC%2BjKVykEroG8NLzr8Bg%2F351TBAHvJi4NmMYnVO6HmALDJ%2FI8lEgo86F4a7OCejjQjLkKKC7r4Pss2P9Y%2FmMCIvmAePhRN97Q3K1F0l2jGj%2Bxqow8x5HyY0UTpbTbL9bvy2yZ7rbmL6xOjysCP%2FAm3isrSAYONm454E3c78GyDAg5rp%2FFLdNecbJ7Qva%2FQxTbv8d4iretO0J8lAotNFBcPolcxIgx4AJXVpHAGnxSOJIjVtg%2BpJPtON3378uApjkudUpsFscFaBvkhmM2sv2cgdEqcQkQLEBTWp46MyHRZa%2FDas%2BNphQPIomtvf2EuAWBVYFDiS15CbY5tYwZv9rCxWTAP3%2FuZaNoHLmfAgpR7DZu1RZ6tBJs6ZG1HyuxZTct9djeFkMTo%2B89u1UCpoiVTjIN8dHmKeGDDUsuHBBjqkAZxGw1uI6UFhGURlB6yvv0XDN%2B00JTv%2BU4pBEh%2FHAVWI0a7bUu6h00zp9OTgIpovlqeTviQWEncoJ88nqapZr7ENXTc%2FEmxG8diGfp67IYc2TSUVGbxWuXCQxb2iXLJBxAffz2%2B5j2MYX5%2FQKwAuRGfTZ621ubhBwguBEG7I2Rstnfl71oAmwDJ3YTlO8%2FYuj8rG8aSQuNczz0KM0URHhRh5S4fd&X-Amz-Signature=edc0975b9b0732ee031e9b9d03e39457b8294497b86d24d4c01442d20573b2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DBEW3R%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuumIdN1LSbJ5OvZGLLl5eDFFVNfnpOF4q54VrkYJSqAIhAK59O2G8Dy%2FHKQ2zowza8BSZnrHpyJzQOouA4YlGHsevKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSUpo1%2FUwdBZ9bGo0q3AOVK6o0%2BquCa0fxq0hSfxF4PuGRV36r%2BP88ixwS7wch2tBMvji9zgHD6rX0CvnurcB5PrK5Tu4kYx7B9LqsnlYtzstTUx1bx2SBWcKueB2snnmgpFRGxAWOrwEvXkMRlFjKgIK%2BNJ6oiDulV5aE96Tj7p0%2BH5maP5yeoR1KnEQqlzZrPzOO29nZ9iYMq987cYWK%2B%2FlQ1j2J8WkQZq2jYFcF5qL5BNC%2BjKVykEroG8NLzr8Bg%2F351TBAHvJi4NmMYnVO6HmALDJ%2FI8lEgo86F4a7OCejjQjLkKKC7r4Pss2P9Y%2FmMCIvmAePhRN97Q3K1F0l2jGj%2Bxqow8x5HyY0UTpbTbL9bvy2yZ7rbmL6xOjysCP%2FAm3isrSAYONm454E3c78GyDAg5rp%2FFLdNecbJ7Qva%2FQxTbv8d4iretO0J8lAotNFBcPolcxIgx4AJXVpHAGnxSOJIjVtg%2BpJPtON3378uApjkudUpsFscFaBvkhmM2sv2cgdEqcQkQLEBTWp46MyHRZa%2FDas%2BNphQPIomtvf2EuAWBVYFDiS15CbY5tYwZv9rCxWTAP3%2FuZaNoHLmfAgpR7DZu1RZ6tBJs6ZG1HyuxZTct9djeFkMTo%2B89u1UCpoiVTjIN8dHmKeGDDUsuHBBjqkAZxGw1uI6UFhGURlB6yvv0XDN%2B00JTv%2BU4pBEh%2FHAVWI0a7bUu6h00zp9OTgIpovlqeTviQWEncoJ88nqapZr7ENXTc%2FEmxG8diGfp67IYc2TSUVGbxWuXCQxb2iXLJBxAffz2%2B5j2MYX5%2FQKwAuRGfTZ621ubhBwguBEG7I2Rstnfl71oAmwDJ3YTlO8%2FYuj8rG8aSQuNczz0KM0URHhRh5S4fd&X-Amz-Signature=48f321c8b6eff084c446516aa0050f65fe547251c96270273812092c5abca6b6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DBEW3R%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuumIdN1LSbJ5OvZGLLl5eDFFVNfnpOF4q54VrkYJSqAIhAK59O2G8Dy%2FHKQ2zowza8BSZnrHpyJzQOouA4YlGHsevKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSUpo1%2FUwdBZ9bGo0q3AOVK6o0%2BquCa0fxq0hSfxF4PuGRV36r%2BP88ixwS7wch2tBMvji9zgHD6rX0CvnurcB5PrK5Tu4kYx7B9LqsnlYtzstTUx1bx2SBWcKueB2snnmgpFRGxAWOrwEvXkMRlFjKgIK%2BNJ6oiDulV5aE96Tj7p0%2BH5maP5yeoR1KnEQqlzZrPzOO29nZ9iYMq987cYWK%2B%2FlQ1j2J8WkQZq2jYFcF5qL5BNC%2BjKVykEroG8NLzr8Bg%2F351TBAHvJi4NmMYnVO6HmALDJ%2FI8lEgo86F4a7OCejjQjLkKKC7r4Pss2P9Y%2FmMCIvmAePhRN97Q3K1F0l2jGj%2Bxqow8x5HyY0UTpbTbL9bvy2yZ7rbmL6xOjysCP%2FAm3isrSAYONm454E3c78GyDAg5rp%2FFLdNecbJ7Qva%2FQxTbv8d4iretO0J8lAotNFBcPolcxIgx4AJXVpHAGnxSOJIjVtg%2BpJPtON3378uApjkudUpsFscFaBvkhmM2sv2cgdEqcQkQLEBTWp46MyHRZa%2FDas%2BNphQPIomtvf2EuAWBVYFDiS15CbY5tYwZv9rCxWTAP3%2FuZaNoHLmfAgpR7DZu1RZ6tBJs6ZG1HyuxZTct9djeFkMTo%2B89u1UCpoiVTjIN8dHmKeGDDUsuHBBjqkAZxGw1uI6UFhGURlB6yvv0XDN%2B00JTv%2BU4pBEh%2FHAVWI0a7bUu6h00zp9OTgIpovlqeTviQWEncoJ88nqapZr7ENXTc%2FEmxG8diGfp67IYc2TSUVGbxWuXCQxb2iXLJBxAffz2%2B5j2MYX5%2FQKwAuRGfTZ621ubhBwguBEG7I2Rstnfl71oAmwDJ3YTlO8%2FYuj8rG8aSQuNczz0KM0URHhRh5S4fd&X-Amz-Signature=719056193bfd381fd1192ed723f9e4d19c1bb5b32d04d1a227e5adec154b826d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DBEW3R%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuumIdN1LSbJ5OvZGLLl5eDFFVNfnpOF4q54VrkYJSqAIhAK59O2G8Dy%2FHKQ2zowza8BSZnrHpyJzQOouA4YlGHsevKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSUpo1%2FUwdBZ9bGo0q3AOVK6o0%2BquCa0fxq0hSfxF4PuGRV36r%2BP88ixwS7wch2tBMvji9zgHD6rX0CvnurcB5PrK5Tu4kYx7B9LqsnlYtzstTUx1bx2SBWcKueB2snnmgpFRGxAWOrwEvXkMRlFjKgIK%2BNJ6oiDulV5aE96Tj7p0%2BH5maP5yeoR1KnEQqlzZrPzOO29nZ9iYMq987cYWK%2B%2FlQ1j2J8WkQZq2jYFcF5qL5BNC%2BjKVykEroG8NLzr8Bg%2F351TBAHvJi4NmMYnVO6HmALDJ%2FI8lEgo86F4a7OCejjQjLkKKC7r4Pss2P9Y%2FmMCIvmAePhRN97Q3K1F0l2jGj%2Bxqow8x5HyY0UTpbTbL9bvy2yZ7rbmL6xOjysCP%2FAm3isrSAYONm454E3c78GyDAg5rp%2FFLdNecbJ7Qva%2FQxTbv8d4iretO0J8lAotNFBcPolcxIgx4AJXVpHAGnxSOJIjVtg%2BpJPtON3378uApjkudUpsFscFaBvkhmM2sv2cgdEqcQkQLEBTWp46MyHRZa%2FDas%2BNphQPIomtvf2EuAWBVYFDiS15CbY5tYwZv9rCxWTAP3%2FuZaNoHLmfAgpR7DZu1RZ6tBJs6ZG1HyuxZTct9djeFkMTo%2B89u1UCpoiVTjIN8dHmKeGDDUsuHBBjqkAZxGw1uI6UFhGURlB6yvv0XDN%2B00JTv%2BU4pBEh%2FHAVWI0a7bUu6h00zp9OTgIpovlqeTviQWEncoJ88nqapZr7ENXTc%2FEmxG8diGfp67IYc2TSUVGbxWuXCQxb2iXLJBxAffz2%2B5j2MYX5%2FQKwAuRGfTZ621ubhBwguBEG7I2Rstnfl71oAmwDJ3YTlO8%2FYuj8rG8aSQuNczz0KM0URHhRh5S4fd&X-Amz-Signature=d11069e5ea0dfccf9e9f593856baf2d7c795429eebfd1c7356a3ea5f4fac3d95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DBEW3R%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuumIdN1LSbJ5OvZGLLl5eDFFVNfnpOF4q54VrkYJSqAIhAK59O2G8Dy%2FHKQ2zowza8BSZnrHpyJzQOouA4YlGHsevKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSUpo1%2FUwdBZ9bGo0q3AOVK6o0%2BquCa0fxq0hSfxF4PuGRV36r%2BP88ixwS7wch2tBMvji9zgHD6rX0CvnurcB5PrK5Tu4kYx7B9LqsnlYtzstTUx1bx2SBWcKueB2snnmgpFRGxAWOrwEvXkMRlFjKgIK%2BNJ6oiDulV5aE96Tj7p0%2BH5maP5yeoR1KnEQqlzZrPzOO29nZ9iYMq987cYWK%2B%2FlQ1j2J8WkQZq2jYFcF5qL5BNC%2BjKVykEroG8NLzr8Bg%2F351TBAHvJi4NmMYnVO6HmALDJ%2FI8lEgo86F4a7OCejjQjLkKKC7r4Pss2P9Y%2FmMCIvmAePhRN97Q3K1F0l2jGj%2Bxqow8x5HyY0UTpbTbL9bvy2yZ7rbmL6xOjysCP%2FAm3isrSAYONm454E3c78GyDAg5rp%2FFLdNecbJ7Qva%2FQxTbv8d4iretO0J8lAotNFBcPolcxIgx4AJXVpHAGnxSOJIjVtg%2BpJPtON3378uApjkudUpsFscFaBvkhmM2sv2cgdEqcQkQLEBTWp46MyHRZa%2FDas%2BNphQPIomtvf2EuAWBVYFDiS15CbY5tYwZv9rCxWTAP3%2FuZaNoHLmfAgpR7DZu1RZ6tBJs6ZG1HyuxZTct9djeFkMTo%2B89u1UCpoiVTjIN8dHmKeGDDUsuHBBjqkAZxGw1uI6UFhGURlB6yvv0XDN%2B00JTv%2BU4pBEh%2FHAVWI0a7bUu6h00zp9OTgIpovlqeTviQWEncoJ88nqapZr7ENXTc%2FEmxG8diGfp67IYc2TSUVGbxWuXCQxb2iXLJBxAffz2%2B5j2MYX5%2FQKwAuRGfTZ621ubhBwguBEG7I2Rstnfl71oAmwDJ3YTlO8%2FYuj8rG8aSQuNczz0KM0URHhRh5S4fd&X-Amz-Signature=824c27a849d74c55c49dd0751c25f1c3f7f811421fc58e374de5c74110d8f696&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
