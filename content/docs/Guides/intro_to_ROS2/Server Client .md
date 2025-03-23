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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URH3JVK4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDQd5aMqOslKhI0OIr%2FHaM0YCrhw9%2Fo7hPCBQCWbxuP5AIhAM%2FFQIYB3pzqgiMzC4%2BY0rHjVNIeA8Bxf%2BVcbaMfcbSCKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FwnTogz%2Filw6CaIgq3AOWbvfLp70w2oNny7gIcUOfhTKtSuqvyrF6nubN33hmhx2xxibwsOUYZDmwRqjolI3MTmGXip7J9rwt2M2MwQ6TvK7RpqrP%2BEcnXln%2Br8Pjy03juJHvFu4WFOdZD%2FW%2FiXOdsnrM1AA27w5ba%2F30tfBnN8xbKbTAGR2a14dtRZpRgzEfOShf682kcT%2F%2FuQGnDirTnBiUNnb5%2BNoyLGVWmWHgbKBFVcj9Xdh%2FrTPKP836wM5IybX6ursY%2BO1KFT7YuGKmu7NCO8cs7crbD6aCV5qJ7KReZna5yAPQrYVWrHGqLjTTvqiuPdA%2B1yDArYaPvUdTChPI1OTWFRTEIsWrYx7G2aMXDYpEyys4myA4IuA%2FQ49F2yWTaR%2BSK4TBC2YAhmAQY9S1O%2BjDnEPafSJs1%2FmzOmwzwIWHOqySYH4G6GIE0zx2yYocZ43aAwyLZqogQuH4Lo%2BeG1IHdrUmr%2FpdRtg6yvV1RccahSIpInbJYgQww65VjqBO3WzxfI%2FlIEcLCikUBqT1axozpQaaPgXVo7viwmPVTEdUKnoLVmzRNFSvuUovE82BFSa8MplXo1KdXpox268zuTqma8KX9kJH%2FxahMADgJJexrUjahP9L7s%2F0PQxlXYg3C188z8%2BdeTDQ8%2F6%2BBjqkAaxkZOhMgksdIQoJsO1dN5qLAqCCwtEZSnHvz5httDzGDVHeO0O4G9m1wPesgwsURwUvTAIPcfmQW2u5Cy9TN%2FIKMl96L4y44Dfv2ITRNd3dfc%2BbgXRxv0g6ciPftUa6ZDA5UcwnBt2GcX1nJacoS5r2u21ulkv%2FlY%2BOP1hPWIYptttudAMqYQMlkN%2B2Nwo55P2Gls8Kw7DgtlqTjdk7Wd3%2B2hjT&X-Amz-Signature=d88dfcfad103e81d791140b4cb79cbdf64444cdb139ea960a72768be53dc95cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URH3JVK4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDQd5aMqOslKhI0OIr%2FHaM0YCrhw9%2Fo7hPCBQCWbxuP5AIhAM%2FFQIYB3pzqgiMzC4%2BY0rHjVNIeA8Bxf%2BVcbaMfcbSCKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FwnTogz%2Filw6CaIgq3AOWbvfLp70w2oNny7gIcUOfhTKtSuqvyrF6nubN33hmhx2xxibwsOUYZDmwRqjolI3MTmGXip7J9rwt2M2MwQ6TvK7RpqrP%2BEcnXln%2Br8Pjy03juJHvFu4WFOdZD%2FW%2FiXOdsnrM1AA27w5ba%2F30tfBnN8xbKbTAGR2a14dtRZpRgzEfOShf682kcT%2F%2FuQGnDirTnBiUNnb5%2BNoyLGVWmWHgbKBFVcj9Xdh%2FrTPKP836wM5IybX6ursY%2BO1KFT7YuGKmu7NCO8cs7crbD6aCV5qJ7KReZna5yAPQrYVWrHGqLjTTvqiuPdA%2B1yDArYaPvUdTChPI1OTWFRTEIsWrYx7G2aMXDYpEyys4myA4IuA%2FQ49F2yWTaR%2BSK4TBC2YAhmAQY9S1O%2BjDnEPafSJs1%2FmzOmwzwIWHOqySYH4G6GIE0zx2yYocZ43aAwyLZqogQuH4Lo%2BeG1IHdrUmr%2FpdRtg6yvV1RccahSIpInbJYgQww65VjqBO3WzxfI%2FlIEcLCikUBqT1axozpQaaPgXVo7viwmPVTEdUKnoLVmzRNFSvuUovE82BFSa8MplXo1KdXpox268zuTqma8KX9kJH%2FxahMADgJJexrUjahP9L7s%2F0PQxlXYg3C188z8%2BdeTDQ8%2F6%2BBjqkAaxkZOhMgksdIQoJsO1dN5qLAqCCwtEZSnHvz5httDzGDVHeO0O4G9m1wPesgwsURwUvTAIPcfmQW2u5Cy9TN%2FIKMl96L4y44Dfv2ITRNd3dfc%2BbgXRxv0g6ciPftUa6ZDA5UcwnBt2GcX1nJacoS5r2u21ulkv%2FlY%2BOP1hPWIYptttudAMqYQMlkN%2B2Nwo55P2Gls8Kw7DgtlqTjdk7Wd3%2B2hjT&X-Amz-Signature=8f71ef75215061d5a0e38d1dd97e10ba31b4aaf75cfdf9b3ff17ab08bd02a550&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URH3JVK4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDQd5aMqOslKhI0OIr%2FHaM0YCrhw9%2Fo7hPCBQCWbxuP5AIhAM%2FFQIYB3pzqgiMzC4%2BY0rHjVNIeA8Bxf%2BVcbaMfcbSCKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FwnTogz%2Filw6CaIgq3AOWbvfLp70w2oNny7gIcUOfhTKtSuqvyrF6nubN33hmhx2xxibwsOUYZDmwRqjolI3MTmGXip7J9rwt2M2MwQ6TvK7RpqrP%2BEcnXln%2Br8Pjy03juJHvFu4WFOdZD%2FW%2FiXOdsnrM1AA27w5ba%2F30tfBnN8xbKbTAGR2a14dtRZpRgzEfOShf682kcT%2F%2FuQGnDirTnBiUNnb5%2BNoyLGVWmWHgbKBFVcj9Xdh%2FrTPKP836wM5IybX6ursY%2BO1KFT7YuGKmu7NCO8cs7crbD6aCV5qJ7KReZna5yAPQrYVWrHGqLjTTvqiuPdA%2B1yDArYaPvUdTChPI1OTWFRTEIsWrYx7G2aMXDYpEyys4myA4IuA%2FQ49F2yWTaR%2BSK4TBC2YAhmAQY9S1O%2BjDnEPafSJs1%2FmzOmwzwIWHOqySYH4G6GIE0zx2yYocZ43aAwyLZqogQuH4Lo%2BeG1IHdrUmr%2FpdRtg6yvV1RccahSIpInbJYgQww65VjqBO3WzxfI%2FlIEcLCikUBqT1axozpQaaPgXVo7viwmPVTEdUKnoLVmzRNFSvuUovE82BFSa8MplXo1KdXpox268zuTqma8KX9kJH%2FxahMADgJJexrUjahP9L7s%2F0PQxlXYg3C188z8%2BdeTDQ8%2F6%2BBjqkAaxkZOhMgksdIQoJsO1dN5qLAqCCwtEZSnHvz5httDzGDVHeO0O4G9m1wPesgwsURwUvTAIPcfmQW2u5Cy9TN%2FIKMl96L4y44Dfv2ITRNd3dfc%2BbgXRxv0g6ciPftUa6ZDA5UcwnBt2GcX1nJacoS5r2u21ulkv%2FlY%2BOP1hPWIYptttudAMqYQMlkN%2B2Nwo55P2Gls8Kw7DgtlqTjdk7Wd3%2B2hjT&X-Amz-Signature=ec056f18d31f9aad272289032a3d7f3cd9b879b9c4cefc0032a91e42cfdc61b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URH3JVK4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDQd5aMqOslKhI0OIr%2FHaM0YCrhw9%2Fo7hPCBQCWbxuP5AIhAM%2FFQIYB3pzqgiMzC4%2BY0rHjVNIeA8Bxf%2BVcbaMfcbSCKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FwnTogz%2Filw6CaIgq3AOWbvfLp70w2oNny7gIcUOfhTKtSuqvyrF6nubN33hmhx2xxibwsOUYZDmwRqjolI3MTmGXip7J9rwt2M2MwQ6TvK7RpqrP%2BEcnXln%2Br8Pjy03juJHvFu4WFOdZD%2FW%2FiXOdsnrM1AA27w5ba%2F30tfBnN8xbKbTAGR2a14dtRZpRgzEfOShf682kcT%2F%2FuQGnDirTnBiUNnb5%2BNoyLGVWmWHgbKBFVcj9Xdh%2FrTPKP836wM5IybX6ursY%2BO1KFT7YuGKmu7NCO8cs7crbD6aCV5qJ7KReZna5yAPQrYVWrHGqLjTTvqiuPdA%2B1yDArYaPvUdTChPI1OTWFRTEIsWrYx7G2aMXDYpEyys4myA4IuA%2FQ49F2yWTaR%2BSK4TBC2YAhmAQY9S1O%2BjDnEPafSJs1%2FmzOmwzwIWHOqySYH4G6GIE0zx2yYocZ43aAwyLZqogQuH4Lo%2BeG1IHdrUmr%2FpdRtg6yvV1RccahSIpInbJYgQww65VjqBO3WzxfI%2FlIEcLCikUBqT1axozpQaaPgXVo7viwmPVTEdUKnoLVmzRNFSvuUovE82BFSa8MplXo1KdXpox268zuTqma8KX9kJH%2FxahMADgJJexrUjahP9L7s%2F0PQxlXYg3C188z8%2BdeTDQ8%2F6%2BBjqkAaxkZOhMgksdIQoJsO1dN5qLAqCCwtEZSnHvz5httDzGDVHeO0O4G9m1wPesgwsURwUvTAIPcfmQW2u5Cy9TN%2FIKMl96L4y44Dfv2ITRNd3dfc%2BbgXRxv0g6ciPftUa6ZDA5UcwnBt2GcX1nJacoS5r2u21ulkv%2FlY%2BOP1hPWIYptttudAMqYQMlkN%2B2Nwo55P2Gls8Kw7DgtlqTjdk7Wd3%2B2hjT&X-Amz-Signature=290bbd2824ca0aaa358b53dff3c32dc90fc8d763882bb697f7665dfad570c690&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URH3JVK4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDQd5aMqOslKhI0OIr%2FHaM0YCrhw9%2Fo7hPCBQCWbxuP5AIhAM%2FFQIYB3pzqgiMzC4%2BY0rHjVNIeA8Bxf%2BVcbaMfcbSCKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FwnTogz%2Filw6CaIgq3AOWbvfLp70w2oNny7gIcUOfhTKtSuqvyrF6nubN33hmhx2xxibwsOUYZDmwRqjolI3MTmGXip7J9rwt2M2MwQ6TvK7RpqrP%2BEcnXln%2Br8Pjy03juJHvFu4WFOdZD%2FW%2FiXOdsnrM1AA27w5ba%2F30tfBnN8xbKbTAGR2a14dtRZpRgzEfOShf682kcT%2F%2FuQGnDirTnBiUNnb5%2BNoyLGVWmWHgbKBFVcj9Xdh%2FrTPKP836wM5IybX6ursY%2BO1KFT7YuGKmu7NCO8cs7crbD6aCV5qJ7KReZna5yAPQrYVWrHGqLjTTvqiuPdA%2B1yDArYaPvUdTChPI1OTWFRTEIsWrYx7G2aMXDYpEyys4myA4IuA%2FQ49F2yWTaR%2BSK4TBC2YAhmAQY9S1O%2BjDnEPafSJs1%2FmzOmwzwIWHOqySYH4G6GIE0zx2yYocZ43aAwyLZqogQuH4Lo%2BeG1IHdrUmr%2FpdRtg6yvV1RccahSIpInbJYgQww65VjqBO3WzxfI%2FlIEcLCikUBqT1axozpQaaPgXVo7viwmPVTEdUKnoLVmzRNFSvuUovE82BFSa8MplXo1KdXpox268zuTqma8KX9kJH%2FxahMADgJJexrUjahP9L7s%2F0PQxlXYg3C188z8%2BdeTDQ8%2F6%2BBjqkAaxkZOhMgksdIQoJsO1dN5qLAqCCwtEZSnHvz5httDzGDVHeO0O4G9m1wPesgwsURwUvTAIPcfmQW2u5Cy9TN%2FIKMl96L4y44Dfv2ITRNd3dfc%2BbgXRxv0g6ciPftUa6ZDA5UcwnBt2GcX1nJacoS5r2u21ulkv%2FlY%2BOP1hPWIYptttudAMqYQMlkN%2B2Nwo55P2Gls8Kw7DgtlqTjdk7Wd3%2B2hjT&X-Amz-Signature=55ce7ad24a5208b729f913c3a47c59d1e2ca5ee49dccd03fb83e490934f8a31b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
