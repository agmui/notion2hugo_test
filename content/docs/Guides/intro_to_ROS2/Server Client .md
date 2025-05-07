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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYK6UVH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvVR3UuGVKrVDmEVHtQV%2F5gQv5lENcBVzWSYuEG8%2BxxAiAlGgW2WOqc7scExgwFM7X%2BTb5iQHeJBCgoWKLaxmiF4ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPl9hL6e3DnoRrB9IKtwD8U%2FGI22yfmVM1g2vFHUgpH8IzleYB8AW%2FGKSEyvqgJGAXPn4LHzJNpySe6XVm6gaLmdWAqlFQsTUuUbim95d8xuGZnilX6IPo28wyJmlQUDHhuWxmpoqwhhSpRS6ByYSucZZvh6Kq91w%2FxKvWmjk%2Ffc%2F2zDBIVYbvipuw40%2BCJYChH0wG9vnBOim7a%2BGrrlzo%2B%2Ft%2F6b8OxZ8VsxHj4XbB6QHlvbgxyIAJGruBBd4KZYikKDCwfHL7fIgJG6JQmwjThIwYpe6RDJ9kPGm0aRybsTJA2zmVn3hLMnCIWNsgikKXv0nN9TSki4Dz2V0Ta6iIrEP%2BdR08jPeGx4Yy1FnGvbnjXZJI%2BEBHABrLkIxlcRn%2FI5q%2F5buDz2HaM3R77%2FlLOIHRYU%2BA%2B9sNUGannKDJCCt12Ze1CfcsBIMDjnG4tT5m%2BNdert7s66G3mDd7FlwonPkwqHgCtvmtNBCh8w%2BsYOHPABhzwuM%2BVXaPHt6aa%2BsI2NllFsg8G26s4h%2BFG1fbef1ASFSIQ9dhonnCUfgXzabGIYS5xvDcJN1OMttoen2Gaa4%2FqRkZo3IZqJ8fkt1Oj91m60B65pvd0lLeigf0BjYgd3BS5Rc1jLlrZDk2VN6zmktwx1gtTm1bq8w6IjswAY6pgFCGeD%2Fc0Oncxi3LrXztAhrgXOJuxp8g7SYFMLJjNBMzF2VO2e1Veoq%2Fden5XzPXMGzwrVVwO%2F64kmXqNxDisrH0SjmkNiAlzPZQMj1hbcavCUicek%2Fn4IPnGlJtqfgi2VVDtKWFz07dh1jEIPxDO4ZYHaRxYjgXOqgOWPKAMBvv2ranxMMk7BaDuoQ3y3F1KazhPLo00lrxFer5%2FHSdCBHB5XyEPyz&X-Amz-Signature=b06f53d86167a5e0420009dbebd0d92d7ad98899cdf6f058b720f274c76c4458&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYK6UVH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvVR3UuGVKrVDmEVHtQV%2F5gQv5lENcBVzWSYuEG8%2BxxAiAlGgW2WOqc7scExgwFM7X%2BTb5iQHeJBCgoWKLaxmiF4ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPl9hL6e3DnoRrB9IKtwD8U%2FGI22yfmVM1g2vFHUgpH8IzleYB8AW%2FGKSEyvqgJGAXPn4LHzJNpySe6XVm6gaLmdWAqlFQsTUuUbim95d8xuGZnilX6IPo28wyJmlQUDHhuWxmpoqwhhSpRS6ByYSucZZvh6Kq91w%2FxKvWmjk%2Ffc%2F2zDBIVYbvipuw40%2BCJYChH0wG9vnBOim7a%2BGrrlzo%2B%2Ft%2F6b8OxZ8VsxHj4XbB6QHlvbgxyIAJGruBBd4KZYikKDCwfHL7fIgJG6JQmwjThIwYpe6RDJ9kPGm0aRybsTJA2zmVn3hLMnCIWNsgikKXv0nN9TSki4Dz2V0Ta6iIrEP%2BdR08jPeGx4Yy1FnGvbnjXZJI%2BEBHABrLkIxlcRn%2FI5q%2F5buDz2HaM3R77%2FlLOIHRYU%2BA%2B9sNUGannKDJCCt12Ze1CfcsBIMDjnG4tT5m%2BNdert7s66G3mDd7FlwonPkwqHgCtvmtNBCh8w%2BsYOHPABhzwuM%2BVXaPHt6aa%2BsI2NllFsg8G26s4h%2BFG1fbef1ASFSIQ9dhonnCUfgXzabGIYS5xvDcJN1OMttoen2Gaa4%2FqRkZo3IZqJ8fkt1Oj91m60B65pvd0lLeigf0BjYgd3BS5Rc1jLlrZDk2VN6zmktwx1gtTm1bq8w6IjswAY6pgFCGeD%2Fc0Oncxi3LrXztAhrgXOJuxp8g7SYFMLJjNBMzF2VO2e1Veoq%2Fden5XzPXMGzwrVVwO%2F64kmXqNxDisrH0SjmkNiAlzPZQMj1hbcavCUicek%2Fn4IPnGlJtqfgi2VVDtKWFz07dh1jEIPxDO4ZYHaRxYjgXOqgOWPKAMBvv2ranxMMk7BaDuoQ3y3F1KazhPLo00lrxFer5%2FHSdCBHB5XyEPyz&X-Amz-Signature=5371babcf96522131e220e922f4f7d81fdc7898f3243f677f53c20df86f34acd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYK6UVH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvVR3UuGVKrVDmEVHtQV%2F5gQv5lENcBVzWSYuEG8%2BxxAiAlGgW2WOqc7scExgwFM7X%2BTb5iQHeJBCgoWKLaxmiF4ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPl9hL6e3DnoRrB9IKtwD8U%2FGI22yfmVM1g2vFHUgpH8IzleYB8AW%2FGKSEyvqgJGAXPn4LHzJNpySe6XVm6gaLmdWAqlFQsTUuUbim95d8xuGZnilX6IPo28wyJmlQUDHhuWxmpoqwhhSpRS6ByYSucZZvh6Kq91w%2FxKvWmjk%2Ffc%2F2zDBIVYbvipuw40%2BCJYChH0wG9vnBOim7a%2BGrrlzo%2B%2Ft%2F6b8OxZ8VsxHj4XbB6QHlvbgxyIAJGruBBd4KZYikKDCwfHL7fIgJG6JQmwjThIwYpe6RDJ9kPGm0aRybsTJA2zmVn3hLMnCIWNsgikKXv0nN9TSki4Dz2V0Ta6iIrEP%2BdR08jPeGx4Yy1FnGvbnjXZJI%2BEBHABrLkIxlcRn%2FI5q%2F5buDz2HaM3R77%2FlLOIHRYU%2BA%2B9sNUGannKDJCCt12Ze1CfcsBIMDjnG4tT5m%2BNdert7s66G3mDd7FlwonPkwqHgCtvmtNBCh8w%2BsYOHPABhzwuM%2BVXaPHt6aa%2BsI2NllFsg8G26s4h%2BFG1fbef1ASFSIQ9dhonnCUfgXzabGIYS5xvDcJN1OMttoen2Gaa4%2FqRkZo3IZqJ8fkt1Oj91m60B65pvd0lLeigf0BjYgd3BS5Rc1jLlrZDk2VN6zmktwx1gtTm1bq8w6IjswAY6pgFCGeD%2Fc0Oncxi3LrXztAhrgXOJuxp8g7SYFMLJjNBMzF2VO2e1Veoq%2Fden5XzPXMGzwrVVwO%2F64kmXqNxDisrH0SjmkNiAlzPZQMj1hbcavCUicek%2Fn4IPnGlJtqfgi2VVDtKWFz07dh1jEIPxDO4ZYHaRxYjgXOqgOWPKAMBvv2ranxMMk7BaDuoQ3y3F1KazhPLo00lrxFer5%2FHSdCBHB5XyEPyz&X-Amz-Signature=07e14e00e66bf43da3332ed1d69328c38e05d9abd9b1b11d6be3c0062e4ea78e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYK6UVH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvVR3UuGVKrVDmEVHtQV%2F5gQv5lENcBVzWSYuEG8%2BxxAiAlGgW2WOqc7scExgwFM7X%2BTb5iQHeJBCgoWKLaxmiF4ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPl9hL6e3DnoRrB9IKtwD8U%2FGI22yfmVM1g2vFHUgpH8IzleYB8AW%2FGKSEyvqgJGAXPn4LHzJNpySe6XVm6gaLmdWAqlFQsTUuUbim95d8xuGZnilX6IPo28wyJmlQUDHhuWxmpoqwhhSpRS6ByYSucZZvh6Kq91w%2FxKvWmjk%2Ffc%2F2zDBIVYbvipuw40%2BCJYChH0wG9vnBOim7a%2BGrrlzo%2B%2Ft%2F6b8OxZ8VsxHj4XbB6QHlvbgxyIAJGruBBd4KZYikKDCwfHL7fIgJG6JQmwjThIwYpe6RDJ9kPGm0aRybsTJA2zmVn3hLMnCIWNsgikKXv0nN9TSki4Dz2V0Ta6iIrEP%2BdR08jPeGx4Yy1FnGvbnjXZJI%2BEBHABrLkIxlcRn%2FI5q%2F5buDz2HaM3R77%2FlLOIHRYU%2BA%2B9sNUGannKDJCCt12Ze1CfcsBIMDjnG4tT5m%2BNdert7s66G3mDd7FlwonPkwqHgCtvmtNBCh8w%2BsYOHPABhzwuM%2BVXaPHt6aa%2BsI2NllFsg8G26s4h%2BFG1fbef1ASFSIQ9dhonnCUfgXzabGIYS5xvDcJN1OMttoen2Gaa4%2FqRkZo3IZqJ8fkt1Oj91m60B65pvd0lLeigf0BjYgd3BS5Rc1jLlrZDk2VN6zmktwx1gtTm1bq8w6IjswAY6pgFCGeD%2Fc0Oncxi3LrXztAhrgXOJuxp8g7SYFMLJjNBMzF2VO2e1Veoq%2Fden5XzPXMGzwrVVwO%2F64kmXqNxDisrH0SjmkNiAlzPZQMj1hbcavCUicek%2Fn4IPnGlJtqfgi2VVDtKWFz07dh1jEIPxDO4ZYHaRxYjgXOqgOWPKAMBvv2ranxMMk7BaDuoQ3y3F1KazhPLo00lrxFer5%2FHSdCBHB5XyEPyz&X-Amz-Signature=1163de78b87bced7444f617e34df0edf1a50eb3645b905bff20dddf184baa1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYK6UVH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvVR3UuGVKrVDmEVHtQV%2F5gQv5lENcBVzWSYuEG8%2BxxAiAlGgW2WOqc7scExgwFM7X%2BTb5iQHeJBCgoWKLaxmiF4ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPl9hL6e3DnoRrB9IKtwD8U%2FGI22yfmVM1g2vFHUgpH8IzleYB8AW%2FGKSEyvqgJGAXPn4LHzJNpySe6XVm6gaLmdWAqlFQsTUuUbim95d8xuGZnilX6IPo28wyJmlQUDHhuWxmpoqwhhSpRS6ByYSucZZvh6Kq91w%2FxKvWmjk%2Ffc%2F2zDBIVYbvipuw40%2BCJYChH0wG9vnBOim7a%2BGrrlzo%2B%2Ft%2F6b8OxZ8VsxHj4XbB6QHlvbgxyIAJGruBBd4KZYikKDCwfHL7fIgJG6JQmwjThIwYpe6RDJ9kPGm0aRybsTJA2zmVn3hLMnCIWNsgikKXv0nN9TSki4Dz2V0Ta6iIrEP%2BdR08jPeGx4Yy1FnGvbnjXZJI%2BEBHABrLkIxlcRn%2FI5q%2F5buDz2HaM3R77%2FlLOIHRYU%2BA%2B9sNUGannKDJCCt12Ze1CfcsBIMDjnG4tT5m%2BNdert7s66G3mDd7FlwonPkwqHgCtvmtNBCh8w%2BsYOHPABhzwuM%2BVXaPHt6aa%2BsI2NllFsg8G26s4h%2BFG1fbef1ASFSIQ9dhonnCUfgXzabGIYS5xvDcJN1OMttoen2Gaa4%2FqRkZo3IZqJ8fkt1Oj91m60B65pvd0lLeigf0BjYgd3BS5Rc1jLlrZDk2VN6zmktwx1gtTm1bq8w6IjswAY6pgFCGeD%2Fc0Oncxi3LrXztAhrgXOJuxp8g7SYFMLJjNBMzF2VO2e1Veoq%2Fden5XzPXMGzwrVVwO%2F64kmXqNxDisrH0SjmkNiAlzPZQMj1hbcavCUicek%2Fn4IPnGlJtqfgi2VVDtKWFz07dh1jEIPxDO4ZYHaRxYjgXOqgOWPKAMBvv2ranxMMk7BaDuoQ3y3F1KazhPLo00lrxFer5%2FHSdCBHB5XyEPyz&X-Amz-Signature=09eb0df5c954bdc7376f819e543fd11c15ff6b05c829b8309590e3fba9bc8a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
