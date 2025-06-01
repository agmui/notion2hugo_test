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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCTJZA4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF%2BzH6N6SNoS2li%2BWOXIUZMGEmCfr2PyRrBass3IB11wAiEA01jIPE0tDSA5Qa2jrNu7ArGWPsZvRILkDm%2B51dTOHc8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3oRsV3DgwU4ba37SrcAx2qQPbHrCOlNh3zImExz2%2FkUD4clSnhVvqBPVGarPvIUVSi3ysUNL7vrhw%2BCWLgaRynDDw%2B%2Fn7CHyQX6yAYnoM65XE5x0sn2h4N%2B4MoX2lUte9TgCVyxwn74F3t3gRbnd8Z0JfyMc%2BV8KddtwFIbdgvbX2XWCKG56VYgbWjCW4FksDN3zxAsm5dMlvM0hpOqi64ce7%2FaBYgzaOefHIp%2FC1XHA3KvLwJtL0oQEA6bB0KapJPl4IqZwp73I71%2BSeJJ3SzfnN3gQB7Z%2FfD1YmlBr%2FgjZUdDUXy6K8m1kAtisvU%2BsqIpFcTXZrooqqSpUdJTZH7xE21P57mW%2FkgXAmP3gWbqTDTZFIB%2F9GO9y07hD3FCzZ63jwcIWeZivHq7K9RM9jcJEd0q5oAZktuLo2LARcpktNnG6Ao%2Fv0x9kOc0erle9XFGvu%2FScdVy1FIusjhvfntSQIdpxSjMDTEcKz6lRCBHGeNfUGd9sbXVYZq7Wv8WYlttcmrheF23NhYipUvVoBQ3sAAiqvsEgjN3uQ1UuZF1YuTdCeCesU%2FYyIS5R1%2Frec%2FLuN%2BbVLB%2FG3Lzgzk6CIXmvTDGxUEJVierY8K5D1accvfoAqQd0UTMLzdeAtxIi2Flg2jhx7G8rodMPHe8MEGOqUBBJ%2BYKZjRvLKDfiQs7AcTP6LQNrgefXF4MeDQ4RR9J5hXfTV73XtV6Q32VHpM%2B%2F6fWSLkaqZRsAPYkisxkbtf4qeXEONGKMUcMUQYXsQsa2ziGMloP%2BdIoxg2bduglvtIfq10NCqZWsBeiwzP%2BO0QR74gzqDOItQi0%2FBkeukFmrOBd%2FJ%2BDs1bfWftAc2%2FQJsndgXqgMJ7HGF1e%2Fms%2F2NK81m102Pf&X-Amz-Signature=cf2e4a12ca01d74584db9bca4e3fd1a8db3f45cb47412abcda1d6761b6e98a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCTJZA4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF%2BzH6N6SNoS2li%2BWOXIUZMGEmCfr2PyRrBass3IB11wAiEA01jIPE0tDSA5Qa2jrNu7ArGWPsZvRILkDm%2B51dTOHc8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3oRsV3DgwU4ba37SrcAx2qQPbHrCOlNh3zImExz2%2FkUD4clSnhVvqBPVGarPvIUVSi3ysUNL7vrhw%2BCWLgaRynDDw%2B%2Fn7CHyQX6yAYnoM65XE5x0sn2h4N%2B4MoX2lUte9TgCVyxwn74F3t3gRbnd8Z0JfyMc%2BV8KddtwFIbdgvbX2XWCKG56VYgbWjCW4FksDN3zxAsm5dMlvM0hpOqi64ce7%2FaBYgzaOefHIp%2FC1XHA3KvLwJtL0oQEA6bB0KapJPl4IqZwp73I71%2BSeJJ3SzfnN3gQB7Z%2FfD1YmlBr%2FgjZUdDUXy6K8m1kAtisvU%2BsqIpFcTXZrooqqSpUdJTZH7xE21P57mW%2FkgXAmP3gWbqTDTZFIB%2F9GO9y07hD3FCzZ63jwcIWeZivHq7K9RM9jcJEd0q5oAZktuLo2LARcpktNnG6Ao%2Fv0x9kOc0erle9XFGvu%2FScdVy1FIusjhvfntSQIdpxSjMDTEcKz6lRCBHGeNfUGd9sbXVYZq7Wv8WYlttcmrheF23NhYipUvVoBQ3sAAiqvsEgjN3uQ1UuZF1YuTdCeCesU%2FYyIS5R1%2Frec%2FLuN%2BbVLB%2FG3Lzgzk6CIXmvTDGxUEJVierY8K5D1accvfoAqQd0UTMLzdeAtxIi2Flg2jhx7G8rodMPHe8MEGOqUBBJ%2BYKZjRvLKDfiQs7AcTP6LQNrgefXF4MeDQ4RR9J5hXfTV73XtV6Q32VHpM%2B%2F6fWSLkaqZRsAPYkisxkbtf4qeXEONGKMUcMUQYXsQsa2ziGMloP%2BdIoxg2bduglvtIfq10NCqZWsBeiwzP%2BO0QR74gzqDOItQi0%2FBkeukFmrOBd%2FJ%2BDs1bfWftAc2%2FQJsndgXqgMJ7HGF1e%2Fms%2F2NK81m102Pf&X-Amz-Signature=c1c8428d4ae711ebfaf788c883c00f0871cf4cd10b7bd9a616685d3008214bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCTJZA4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF%2BzH6N6SNoS2li%2BWOXIUZMGEmCfr2PyRrBass3IB11wAiEA01jIPE0tDSA5Qa2jrNu7ArGWPsZvRILkDm%2B51dTOHc8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3oRsV3DgwU4ba37SrcAx2qQPbHrCOlNh3zImExz2%2FkUD4clSnhVvqBPVGarPvIUVSi3ysUNL7vrhw%2BCWLgaRynDDw%2B%2Fn7CHyQX6yAYnoM65XE5x0sn2h4N%2B4MoX2lUte9TgCVyxwn74F3t3gRbnd8Z0JfyMc%2BV8KddtwFIbdgvbX2XWCKG56VYgbWjCW4FksDN3zxAsm5dMlvM0hpOqi64ce7%2FaBYgzaOefHIp%2FC1XHA3KvLwJtL0oQEA6bB0KapJPl4IqZwp73I71%2BSeJJ3SzfnN3gQB7Z%2FfD1YmlBr%2FgjZUdDUXy6K8m1kAtisvU%2BsqIpFcTXZrooqqSpUdJTZH7xE21P57mW%2FkgXAmP3gWbqTDTZFIB%2F9GO9y07hD3FCzZ63jwcIWeZivHq7K9RM9jcJEd0q5oAZktuLo2LARcpktNnG6Ao%2Fv0x9kOc0erle9XFGvu%2FScdVy1FIusjhvfntSQIdpxSjMDTEcKz6lRCBHGeNfUGd9sbXVYZq7Wv8WYlttcmrheF23NhYipUvVoBQ3sAAiqvsEgjN3uQ1UuZF1YuTdCeCesU%2FYyIS5R1%2Frec%2FLuN%2BbVLB%2FG3Lzgzk6CIXmvTDGxUEJVierY8K5D1accvfoAqQd0UTMLzdeAtxIi2Flg2jhx7G8rodMPHe8MEGOqUBBJ%2BYKZjRvLKDfiQs7AcTP6LQNrgefXF4MeDQ4RR9J5hXfTV73XtV6Q32VHpM%2B%2F6fWSLkaqZRsAPYkisxkbtf4qeXEONGKMUcMUQYXsQsa2ziGMloP%2BdIoxg2bduglvtIfq10NCqZWsBeiwzP%2BO0QR74gzqDOItQi0%2FBkeukFmrOBd%2FJ%2BDs1bfWftAc2%2FQJsndgXqgMJ7HGF1e%2Fms%2F2NK81m102Pf&X-Amz-Signature=c7b38f55b27a184610427c9019cc97cf1f8a39085e0494ce1b963378417c20e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCTJZA4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF%2BzH6N6SNoS2li%2BWOXIUZMGEmCfr2PyRrBass3IB11wAiEA01jIPE0tDSA5Qa2jrNu7ArGWPsZvRILkDm%2B51dTOHc8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3oRsV3DgwU4ba37SrcAx2qQPbHrCOlNh3zImExz2%2FkUD4clSnhVvqBPVGarPvIUVSi3ysUNL7vrhw%2BCWLgaRynDDw%2B%2Fn7CHyQX6yAYnoM65XE5x0sn2h4N%2B4MoX2lUte9TgCVyxwn74F3t3gRbnd8Z0JfyMc%2BV8KddtwFIbdgvbX2XWCKG56VYgbWjCW4FksDN3zxAsm5dMlvM0hpOqi64ce7%2FaBYgzaOefHIp%2FC1XHA3KvLwJtL0oQEA6bB0KapJPl4IqZwp73I71%2BSeJJ3SzfnN3gQB7Z%2FfD1YmlBr%2FgjZUdDUXy6K8m1kAtisvU%2BsqIpFcTXZrooqqSpUdJTZH7xE21P57mW%2FkgXAmP3gWbqTDTZFIB%2F9GO9y07hD3FCzZ63jwcIWeZivHq7K9RM9jcJEd0q5oAZktuLo2LARcpktNnG6Ao%2Fv0x9kOc0erle9XFGvu%2FScdVy1FIusjhvfntSQIdpxSjMDTEcKz6lRCBHGeNfUGd9sbXVYZq7Wv8WYlttcmrheF23NhYipUvVoBQ3sAAiqvsEgjN3uQ1UuZF1YuTdCeCesU%2FYyIS5R1%2Frec%2FLuN%2BbVLB%2FG3Lzgzk6CIXmvTDGxUEJVierY8K5D1accvfoAqQd0UTMLzdeAtxIi2Flg2jhx7G8rodMPHe8MEGOqUBBJ%2BYKZjRvLKDfiQs7AcTP6LQNrgefXF4MeDQ4RR9J5hXfTV73XtV6Q32VHpM%2B%2F6fWSLkaqZRsAPYkisxkbtf4qeXEONGKMUcMUQYXsQsa2ziGMloP%2BdIoxg2bduglvtIfq10NCqZWsBeiwzP%2BO0QR74gzqDOItQi0%2FBkeukFmrOBd%2FJ%2BDs1bfWftAc2%2FQJsndgXqgMJ7HGF1e%2Fms%2F2NK81m102Pf&X-Amz-Signature=35af6a5df2cf30e96920fe48444a4c95231713734cd68765d75abb275d3fba4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCTJZA4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF%2BzH6N6SNoS2li%2BWOXIUZMGEmCfr2PyRrBass3IB11wAiEA01jIPE0tDSA5Qa2jrNu7ArGWPsZvRILkDm%2B51dTOHc8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3oRsV3DgwU4ba37SrcAx2qQPbHrCOlNh3zImExz2%2FkUD4clSnhVvqBPVGarPvIUVSi3ysUNL7vrhw%2BCWLgaRynDDw%2B%2Fn7CHyQX6yAYnoM65XE5x0sn2h4N%2B4MoX2lUte9TgCVyxwn74F3t3gRbnd8Z0JfyMc%2BV8KddtwFIbdgvbX2XWCKG56VYgbWjCW4FksDN3zxAsm5dMlvM0hpOqi64ce7%2FaBYgzaOefHIp%2FC1XHA3KvLwJtL0oQEA6bB0KapJPl4IqZwp73I71%2BSeJJ3SzfnN3gQB7Z%2FfD1YmlBr%2FgjZUdDUXy6K8m1kAtisvU%2BsqIpFcTXZrooqqSpUdJTZH7xE21P57mW%2FkgXAmP3gWbqTDTZFIB%2F9GO9y07hD3FCzZ63jwcIWeZivHq7K9RM9jcJEd0q5oAZktuLo2LARcpktNnG6Ao%2Fv0x9kOc0erle9XFGvu%2FScdVy1FIusjhvfntSQIdpxSjMDTEcKz6lRCBHGeNfUGd9sbXVYZq7Wv8WYlttcmrheF23NhYipUvVoBQ3sAAiqvsEgjN3uQ1UuZF1YuTdCeCesU%2FYyIS5R1%2Frec%2FLuN%2BbVLB%2FG3Lzgzk6CIXmvTDGxUEJVierY8K5D1accvfoAqQd0UTMLzdeAtxIi2Flg2jhx7G8rodMPHe8MEGOqUBBJ%2BYKZjRvLKDfiQs7AcTP6LQNrgefXF4MeDQ4RR9J5hXfTV73XtV6Q32VHpM%2B%2F6fWSLkaqZRsAPYkisxkbtf4qeXEONGKMUcMUQYXsQsa2ziGMloP%2BdIoxg2bduglvtIfq10NCqZWsBeiwzP%2BO0QR74gzqDOItQi0%2FBkeukFmrOBd%2FJ%2BDs1bfWftAc2%2FQJsndgXqgMJ7HGF1e%2Fms%2F2NK81m102Pf&X-Amz-Signature=dc666a956c839dbe2763496b9edac5af35168f34315d84e919017e76ae0ae6ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
