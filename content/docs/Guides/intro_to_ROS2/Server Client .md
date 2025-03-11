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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNB7IFK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIG9%2F7Trpkxm5l041VsGviBM%2Fr8cV%2FEmrU9OM06YV7kvqAiEA%2BxFhioVsVrTPPVcZJhWkR49aq3R%2BHpTTGB5XwL0IpjEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9Os9q8nSXahq8yBircA826XzKkmlzwGia8XDxLChGuvx6Xy1sgwq1I5TXHY9raEipHwwzg8N%2F26aYSPEkleNHIt%2FR9u32w9fVP31fmOi4XSi%2Fms2Tp%2F%2FyC7rpHcFdGpmSNfmWmOGmelHK4RlI%2Bhzv3T3Qaf6rb%2BWYSvBHCxop1scd%2Bc8ypWsvJaGUnlzLEb8LdAwQOYE9OHxKwq7ta4W3DbhlOD7ZgYcRQi9eDd4BSA7Ujlozx8eP40dJxy8PiSMIdazckQS%2FFkj5c6plyAIfzG6JJAxqdISibhmQTTVAXQ1egJKs6J7atn%2BhVlcNDhM5U9kQ9NopBsVDr%2Bap8umEr75%2BF2y0iooU4QLD1KoU%2BxHbsDXBoPgxbDbHTK39Z%2F90PqAb15CIIWQMVQpDavV0u%2Fzml6woHEkWZXxhrItbJvME87LjDBLCwglhRanEcR%2BhjPqAjH%2BrIULWG1Hj7l9pX26q7s3%2FwDy0Ib8KDZjg%2F4xGMQuYyp1PsmuLqNUaqx1qjpB3pvqcshgtOql%2F%2BILyV1VuHyqQvoy3VIEfbgxNiThS55ki4kvgMsuy29Jk3HsWpT%2FFW7F5efBx0bwv8XBneijVX07Z9bSLJjc5zRJU46voWEYxK5Yr%2BT%2BWqnXqfbuYglers1ycwxjJCMKvwvr4GOqUBlQgpw8l9ELa7mUiXCfrIlpRIqylnEXc3VMobQyuQwb4EENbwMPpM3qWMvP8oCZbwqRk4J24jzccI1xXW9eBjhDiCVMdEAu%2FOujTGwpQxwvWqguDvAwLARsm8G2Zd%2F%2BEJ4eGXtkv%2FSfkT5Oyunx8gHleRbfTWd4bTTQk2i4Aq9ulX%2B%2FX7ddC%2BienQYe9%2B4WYKkVVAgAgANpsyeUtfzgjWJNJ7pbjz&X-Amz-Signature=efdb994c8fa4a1ce04092351f95a91d2fdd39185213e08681b1059c44bdf9903&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNB7IFK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIG9%2F7Trpkxm5l041VsGviBM%2Fr8cV%2FEmrU9OM06YV7kvqAiEA%2BxFhioVsVrTPPVcZJhWkR49aq3R%2BHpTTGB5XwL0IpjEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9Os9q8nSXahq8yBircA826XzKkmlzwGia8XDxLChGuvx6Xy1sgwq1I5TXHY9raEipHwwzg8N%2F26aYSPEkleNHIt%2FR9u32w9fVP31fmOi4XSi%2Fms2Tp%2F%2FyC7rpHcFdGpmSNfmWmOGmelHK4RlI%2Bhzv3T3Qaf6rb%2BWYSvBHCxop1scd%2Bc8ypWsvJaGUnlzLEb8LdAwQOYE9OHxKwq7ta4W3DbhlOD7ZgYcRQi9eDd4BSA7Ujlozx8eP40dJxy8PiSMIdazckQS%2FFkj5c6plyAIfzG6JJAxqdISibhmQTTVAXQ1egJKs6J7atn%2BhVlcNDhM5U9kQ9NopBsVDr%2Bap8umEr75%2BF2y0iooU4QLD1KoU%2BxHbsDXBoPgxbDbHTK39Z%2F90PqAb15CIIWQMVQpDavV0u%2Fzml6woHEkWZXxhrItbJvME87LjDBLCwglhRanEcR%2BhjPqAjH%2BrIULWG1Hj7l9pX26q7s3%2FwDy0Ib8KDZjg%2F4xGMQuYyp1PsmuLqNUaqx1qjpB3pvqcshgtOql%2F%2BILyV1VuHyqQvoy3VIEfbgxNiThS55ki4kvgMsuy29Jk3HsWpT%2FFW7F5efBx0bwv8XBneijVX07Z9bSLJjc5zRJU46voWEYxK5Yr%2BT%2BWqnXqfbuYglers1ycwxjJCMKvwvr4GOqUBlQgpw8l9ELa7mUiXCfrIlpRIqylnEXc3VMobQyuQwb4EENbwMPpM3qWMvP8oCZbwqRk4J24jzccI1xXW9eBjhDiCVMdEAu%2FOujTGwpQxwvWqguDvAwLARsm8G2Zd%2F%2BEJ4eGXtkv%2FSfkT5Oyunx8gHleRbfTWd4bTTQk2i4Aq9ulX%2B%2FX7ddC%2BienQYe9%2B4WYKkVVAgAgANpsyeUtfzgjWJNJ7pbjz&X-Amz-Signature=9bbc708463f169e526718c4b26f795c1d679e50267605e7da8a7dcc595696a64&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNB7IFK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIG9%2F7Trpkxm5l041VsGviBM%2Fr8cV%2FEmrU9OM06YV7kvqAiEA%2BxFhioVsVrTPPVcZJhWkR49aq3R%2BHpTTGB5XwL0IpjEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9Os9q8nSXahq8yBircA826XzKkmlzwGia8XDxLChGuvx6Xy1sgwq1I5TXHY9raEipHwwzg8N%2F26aYSPEkleNHIt%2FR9u32w9fVP31fmOi4XSi%2Fms2Tp%2F%2FyC7rpHcFdGpmSNfmWmOGmelHK4RlI%2Bhzv3T3Qaf6rb%2BWYSvBHCxop1scd%2Bc8ypWsvJaGUnlzLEb8LdAwQOYE9OHxKwq7ta4W3DbhlOD7ZgYcRQi9eDd4BSA7Ujlozx8eP40dJxy8PiSMIdazckQS%2FFkj5c6plyAIfzG6JJAxqdISibhmQTTVAXQ1egJKs6J7atn%2BhVlcNDhM5U9kQ9NopBsVDr%2Bap8umEr75%2BF2y0iooU4QLD1KoU%2BxHbsDXBoPgxbDbHTK39Z%2F90PqAb15CIIWQMVQpDavV0u%2Fzml6woHEkWZXxhrItbJvME87LjDBLCwglhRanEcR%2BhjPqAjH%2BrIULWG1Hj7l9pX26q7s3%2FwDy0Ib8KDZjg%2F4xGMQuYyp1PsmuLqNUaqx1qjpB3pvqcshgtOql%2F%2BILyV1VuHyqQvoy3VIEfbgxNiThS55ki4kvgMsuy29Jk3HsWpT%2FFW7F5efBx0bwv8XBneijVX07Z9bSLJjc5zRJU46voWEYxK5Yr%2BT%2BWqnXqfbuYglers1ycwxjJCMKvwvr4GOqUBlQgpw8l9ELa7mUiXCfrIlpRIqylnEXc3VMobQyuQwb4EENbwMPpM3qWMvP8oCZbwqRk4J24jzccI1xXW9eBjhDiCVMdEAu%2FOujTGwpQxwvWqguDvAwLARsm8G2Zd%2F%2BEJ4eGXtkv%2FSfkT5Oyunx8gHleRbfTWd4bTTQk2i4Aq9ulX%2B%2FX7ddC%2BienQYe9%2B4WYKkVVAgAgANpsyeUtfzgjWJNJ7pbjz&X-Amz-Signature=a54f3ca2d980c8eff2a690900a58e70a1b120997efc1f6a466ee13a6ec0f8da6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNB7IFK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIG9%2F7Trpkxm5l041VsGviBM%2Fr8cV%2FEmrU9OM06YV7kvqAiEA%2BxFhioVsVrTPPVcZJhWkR49aq3R%2BHpTTGB5XwL0IpjEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9Os9q8nSXahq8yBircA826XzKkmlzwGia8XDxLChGuvx6Xy1sgwq1I5TXHY9raEipHwwzg8N%2F26aYSPEkleNHIt%2FR9u32w9fVP31fmOi4XSi%2Fms2Tp%2F%2FyC7rpHcFdGpmSNfmWmOGmelHK4RlI%2Bhzv3T3Qaf6rb%2BWYSvBHCxop1scd%2Bc8ypWsvJaGUnlzLEb8LdAwQOYE9OHxKwq7ta4W3DbhlOD7ZgYcRQi9eDd4BSA7Ujlozx8eP40dJxy8PiSMIdazckQS%2FFkj5c6plyAIfzG6JJAxqdISibhmQTTVAXQ1egJKs6J7atn%2BhVlcNDhM5U9kQ9NopBsVDr%2Bap8umEr75%2BF2y0iooU4QLD1KoU%2BxHbsDXBoPgxbDbHTK39Z%2F90PqAb15CIIWQMVQpDavV0u%2Fzml6woHEkWZXxhrItbJvME87LjDBLCwglhRanEcR%2BhjPqAjH%2BrIULWG1Hj7l9pX26q7s3%2FwDy0Ib8KDZjg%2F4xGMQuYyp1PsmuLqNUaqx1qjpB3pvqcshgtOql%2F%2BILyV1VuHyqQvoy3VIEfbgxNiThS55ki4kvgMsuy29Jk3HsWpT%2FFW7F5efBx0bwv8XBneijVX07Z9bSLJjc5zRJU46voWEYxK5Yr%2BT%2BWqnXqfbuYglers1ycwxjJCMKvwvr4GOqUBlQgpw8l9ELa7mUiXCfrIlpRIqylnEXc3VMobQyuQwb4EENbwMPpM3qWMvP8oCZbwqRk4J24jzccI1xXW9eBjhDiCVMdEAu%2FOujTGwpQxwvWqguDvAwLARsm8G2Zd%2F%2BEJ4eGXtkv%2FSfkT5Oyunx8gHleRbfTWd4bTTQk2i4Aq9ulX%2B%2FX7ddC%2BienQYe9%2B4WYKkVVAgAgANpsyeUtfzgjWJNJ7pbjz&X-Amz-Signature=dc8b115f4f62b37fae00775cf6d73719931e84ff18cc164facb72402e0faa706&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNB7IFK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIG9%2F7Trpkxm5l041VsGviBM%2Fr8cV%2FEmrU9OM06YV7kvqAiEA%2BxFhioVsVrTPPVcZJhWkR49aq3R%2BHpTTGB5XwL0IpjEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9Os9q8nSXahq8yBircA826XzKkmlzwGia8XDxLChGuvx6Xy1sgwq1I5TXHY9raEipHwwzg8N%2F26aYSPEkleNHIt%2FR9u32w9fVP31fmOi4XSi%2Fms2Tp%2F%2FyC7rpHcFdGpmSNfmWmOGmelHK4RlI%2Bhzv3T3Qaf6rb%2BWYSvBHCxop1scd%2Bc8ypWsvJaGUnlzLEb8LdAwQOYE9OHxKwq7ta4W3DbhlOD7ZgYcRQi9eDd4BSA7Ujlozx8eP40dJxy8PiSMIdazckQS%2FFkj5c6plyAIfzG6JJAxqdISibhmQTTVAXQ1egJKs6J7atn%2BhVlcNDhM5U9kQ9NopBsVDr%2Bap8umEr75%2BF2y0iooU4QLD1KoU%2BxHbsDXBoPgxbDbHTK39Z%2F90PqAb15CIIWQMVQpDavV0u%2Fzml6woHEkWZXxhrItbJvME87LjDBLCwglhRanEcR%2BhjPqAjH%2BrIULWG1Hj7l9pX26q7s3%2FwDy0Ib8KDZjg%2F4xGMQuYyp1PsmuLqNUaqx1qjpB3pvqcshgtOql%2F%2BILyV1VuHyqQvoy3VIEfbgxNiThS55ki4kvgMsuy29Jk3HsWpT%2FFW7F5efBx0bwv8XBneijVX07Z9bSLJjc5zRJU46voWEYxK5Yr%2BT%2BWqnXqfbuYglers1ycwxjJCMKvwvr4GOqUBlQgpw8l9ELa7mUiXCfrIlpRIqylnEXc3VMobQyuQwb4EENbwMPpM3qWMvP8oCZbwqRk4J24jzccI1xXW9eBjhDiCVMdEAu%2FOujTGwpQxwvWqguDvAwLARsm8G2Zd%2F%2BEJ4eGXtkv%2FSfkT5Oyunx8gHleRbfTWd4bTTQk2i4Aq9ulX%2B%2FX7ddC%2BienQYe9%2B4WYKkVVAgAgANpsyeUtfzgjWJNJ7pbjz&X-Amz-Signature=991520a07be6069520d234140078d4562c7703d91bdb35215e9cf03892337601&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
