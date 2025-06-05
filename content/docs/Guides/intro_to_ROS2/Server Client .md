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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SIRFBF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCdRWPNmUhDcih3qrAD8HVbd%2BHtHdxaVx7bVviCE4253QIhAL7UtTUUHV%2BIRAp3Pn4BvIhoWmgLJFI3xJCPSLZUVVTOKv8DCDwQABoMNjM3NDIzMTgzODA1IgywemvWlkq1tvO8Bsgq3AP7heOOgavQr6wm7NHKxjAP4Ci2gyqEvhPJNVO1K%2F%2BblMpc8O0Lx8fj78YvlHLv17hQmeKlkLmjbHYzZzsBg4rzYXotM2824tlBegbsxFEO56UXcG3qOmSgdtAuK1LfiS%2FkCsCQvYVs4EPIBptNHia3ZFXdqLpdwcWtIDxSQL7OY0ZeATuNQul4RIb%2BCmItU3yx8LtDLmPIpma0RgRuFg3lOw9a3nyjez8o2xEPNR96IoPbf2yXXxkdSeer1y9Saym2noW5%2BoxPbtrwR7d%2BJMAShHlDV3Zxp2lqKNG7cetnNHOTY2A4FUSKol6sL7L%2BcW7DcUfgOa1qyqH2qLZNj7G1XRfiBmdwl%2B7xdUWPSWycJLwpP7VXCiz6kbpTzHs%2B3GTCxQETu4DE3OVUnXu2HHPX5O60GsxhRekxch8bS%2BKZe0UEWUd49tX4lA1S3nOTM%2BzP%2BdtBVtOg%2Fa2oSuFe%2Fyt8sD41mPrQcRUUCaIWZ54Zpthc4ig2kcxpeL4X1q13DDEEO68DYRkrjlqqHXi4%2BvOPYBhhcY9Op5M8AejlDKvtIUJdJFKDfGqTvZt01htlOKgTfgrYHIMzrajqDrjEhIicQg0sBGXR6PS1MlF0HdqdEAFykrDmBL5WL9S%2BNzDkiYTCBjqkAejS9yrMTHLM%2B9Eln9OLtXMG0CdBsxgScCXcsqGADCTVrjfqbvXjipBf0r4azWezALoyKFB5tYMUwcgYy1ajh32B%2BA8iu8p9n9ouu%2Fp8csQ5ybi4%2F8wYKF8HVxTOHw4AKBdDebLaQ%2Be5ofmDUk7bjdQxCkwGur18jIlGvB6jAtzD6A1C8Hr7HUz8UgDm2i107J8mmxO9cJMHrFe%2FjJ8422g07qZp&X-Amz-Signature=05f512d8cec0f26726515941970445dc7497df1b4e73abc236d733a5aeea1c86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SIRFBF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCdRWPNmUhDcih3qrAD8HVbd%2BHtHdxaVx7bVviCE4253QIhAL7UtTUUHV%2BIRAp3Pn4BvIhoWmgLJFI3xJCPSLZUVVTOKv8DCDwQABoMNjM3NDIzMTgzODA1IgywemvWlkq1tvO8Bsgq3AP7heOOgavQr6wm7NHKxjAP4Ci2gyqEvhPJNVO1K%2F%2BblMpc8O0Lx8fj78YvlHLv17hQmeKlkLmjbHYzZzsBg4rzYXotM2824tlBegbsxFEO56UXcG3qOmSgdtAuK1LfiS%2FkCsCQvYVs4EPIBptNHia3ZFXdqLpdwcWtIDxSQL7OY0ZeATuNQul4RIb%2BCmItU3yx8LtDLmPIpma0RgRuFg3lOw9a3nyjez8o2xEPNR96IoPbf2yXXxkdSeer1y9Saym2noW5%2BoxPbtrwR7d%2BJMAShHlDV3Zxp2lqKNG7cetnNHOTY2A4FUSKol6sL7L%2BcW7DcUfgOa1qyqH2qLZNj7G1XRfiBmdwl%2B7xdUWPSWycJLwpP7VXCiz6kbpTzHs%2B3GTCxQETu4DE3OVUnXu2HHPX5O60GsxhRekxch8bS%2BKZe0UEWUd49tX4lA1S3nOTM%2BzP%2BdtBVtOg%2Fa2oSuFe%2Fyt8sD41mPrQcRUUCaIWZ54Zpthc4ig2kcxpeL4X1q13DDEEO68DYRkrjlqqHXi4%2BvOPYBhhcY9Op5M8AejlDKvtIUJdJFKDfGqTvZt01htlOKgTfgrYHIMzrajqDrjEhIicQg0sBGXR6PS1MlF0HdqdEAFykrDmBL5WL9S%2BNzDkiYTCBjqkAejS9yrMTHLM%2B9Eln9OLtXMG0CdBsxgScCXcsqGADCTVrjfqbvXjipBf0r4azWezALoyKFB5tYMUwcgYy1ajh32B%2BA8iu8p9n9ouu%2Fp8csQ5ybi4%2F8wYKF8HVxTOHw4AKBdDebLaQ%2Be5ofmDUk7bjdQxCkwGur18jIlGvB6jAtzD6A1C8Hr7HUz8UgDm2i107J8mmxO9cJMHrFe%2FjJ8422g07qZp&X-Amz-Signature=dfa214964475580b2ca9bd14cf9004c0040d30cd1cd98e9305a1e2d1f3113f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SIRFBF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCdRWPNmUhDcih3qrAD8HVbd%2BHtHdxaVx7bVviCE4253QIhAL7UtTUUHV%2BIRAp3Pn4BvIhoWmgLJFI3xJCPSLZUVVTOKv8DCDwQABoMNjM3NDIzMTgzODA1IgywemvWlkq1tvO8Bsgq3AP7heOOgavQr6wm7NHKxjAP4Ci2gyqEvhPJNVO1K%2F%2BblMpc8O0Lx8fj78YvlHLv17hQmeKlkLmjbHYzZzsBg4rzYXotM2824tlBegbsxFEO56UXcG3qOmSgdtAuK1LfiS%2FkCsCQvYVs4EPIBptNHia3ZFXdqLpdwcWtIDxSQL7OY0ZeATuNQul4RIb%2BCmItU3yx8LtDLmPIpma0RgRuFg3lOw9a3nyjez8o2xEPNR96IoPbf2yXXxkdSeer1y9Saym2noW5%2BoxPbtrwR7d%2BJMAShHlDV3Zxp2lqKNG7cetnNHOTY2A4FUSKol6sL7L%2BcW7DcUfgOa1qyqH2qLZNj7G1XRfiBmdwl%2B7xdUWPSWycJLwpP7VXCiz6kbpTzHs%2B3GTCxQETu4DE3OVUnXu2HHPX5O60GsxhRekxch8bS%2BKZe0UEWUd49tX4lA1S3nOTM%2BzP%2BdtBVtOg%2Fa2oSuFe%2Fyt8sD41mPrQcRUUCaIWZ54Zpthc4ig2kcxpeL4X1q13DDEEO68DYRkrjlqqHXi4%2BvOPYBhhcY9Op5M8AejlDKvtIUJdJFKDfGqTvZt01htlOKgTfgrYHIMzrajqDrjEhIicQg0sBGXR6PS1MlF0HdqdEAFykrDmBL5WL9S%2BNzDkiYTCBjqkAejS9yrMTHLM%2B9Eln9OLtXMG0CdBsxgScCXcsqGADCTVrjfqbvXjipBf0r4azWezALoyKFB5tYMUwcgYy1ajh32B%2BA8iu8p9n9ouu%2Fp8csQ5ybi4%2F8wYKF8HVxTOHw4AKBdDebLaQ%2Be5ofmDUk7bjdQxCkwGur18jIlGvB6jAtzD6A1C8Hr7HUz8UgDm2i107J8mmxO9cJMHrFe%2FjJ8422g07qZp&X-Amz-Signature=8b13b28a70b77d06ad15dce95a80cac965043a25134562b792373467e66962f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SIRFBF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCdRWPNmUhDcih3qrAD8HVbd%2BHtHdxaVx7bVviCE4253QIhAL7UtTUUHV%2BIRAp3Pn4BvIhoWmgLJFI3xJCPSLZUVVTOKv8DCDwQABoMNjM3NDIzMTgzODA1IgywemvWlkq1tvO8Bsgq3AP7heOOgavQr6wm7NHKxjAP4Ci2gyqEvhPJNVO1K%2F%2BblMpc8O0Lx8fj78YvlHLv17hQmeKlkLmjbHYzZzsBg4rzYXotM2824tlBegbsxFEO56UXcG3qOmSgdtAuK1LfiS%2FkCsCQvYVs4EPIBptNHia3ZFXdqLpdwcWtIDxSQL7OY0ZeATuNQul4RIb%2BCmItU3yx8LtDLmPIpma0RgRuFg3lOw9a3nyjez8o2xEPNR96IoPbf2yXXxkdSeer1y9Saym2noW5%2BoxPbtrwR7d%2BJMAShHlDV3Zxp2lqKNG7cetnNHOTY2A4FUSKol6sL7L%2BcW7DcUfgOa1qyqH2qLZNj7G1XRfiBmdwl%2B7xdUWPSWycJLwpP7VXCiz6kbpTzHs%2B3GTCxQETu4DE3OVUnXu2HHPX5O60GsxhRekxch8bS%2BKZe0UEWUd49tX4lA1S3nOTM%2BzP%2BdtBVtOg%2Fa2oSuFe%2Fyt8sD41mPrQcRUUCaIWZ54Zpthc4ig2kcxpeL4X1q13DDEEO68DYRkrjlqqHXi4%2BvOPYBhhcY9Op5M8AejlDKvtIUJdJFKDfGqTvZt01htlOKgTfgrYHIMzrajqDrjEhIicQg0sBGXR6PS1MlF0HdqdEAFykrDmBL5WL9S%2BNzDkiYTCBjqkAejS9yrMTHLM%2B9Eln9OLtXMG0CdBsxgScCXcsqGADCTVrjfqbvXjipBf0r4azWezALoyKFB5tYMUwcgYy1ajh32B%2BA8iu8p9n9ouu%2Fp8csQ5ybi4%2F8wYKF8HVxTOHw4AKBdDebLaQ%2Be5ofmDUk7bjdQxCkwGur18jIlGvB6jAtzD6A1C8Hr7HUz8UgDm2i107J8mmxO9cJMHrFe%2FjJ8422g07qZp&X-Amz-Signature=4a728cab448916914371d1ccfce258889a208b43a10589d58edcc228ada9504d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SIRFBF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCdRWPNmUhDcih3qrAD8HVbd%2BHtHdxaVx7bVviCE4253QIhAL7UtTUUHV%2BIRAp3Pn4BvIhoWmgLJFI3xJCPSLZUVVTOKv8DCDwQABoMNjM3NDIzMTgzODA1IgywemvWlkq1tvO8Bsgq3AP7heOOgavQr6wm7NHKxjAP4Ci2gyqEvhPJNVO1K%2F%2BblMpc8O0Lx8fj78YvlHLv17hQmeKlkLmjbHYzZzsBg4rzYXotM2824tlBegbsxFEO56UXcG3qOmSgdtAuK1LfiS%2FkCsCQvYVs4EPIBptNHia3ZFXdqLpdwcWtIDxSQL7OY0ZeATuNQul4RIb%2BCmItU3yx8LtDLmPIpma0RgRuFg3lOw9a3nyjez8o2xEPNR96IoPbf2yXXxkdSeer1y9Saym2noW5%2BoxPbtrwR7d%2BJMAShHlDV3Zxp2lqKNG7cetnNHOTY2A4FUSKol6sL7L%2BcW7DcUfgOa1qyqH2qLZNj7G1XRfiBmdwl%2B7xdUWPSWycJLwpP7VXCiz6kbpTzHs%2B3GTCxQETu4DE3OVUnXu2HHPX5O60GsxhRekxch8bS%2BKZe0UEWUd49tX4lA1S3nOTM%2BzP%2BdtBVtOg%2Fa2oSuFe%2Fyt8sD41mPrQcRUUCaIWZ54Zpthc4ig2kcxpeL4X1q13DDEEO68DYRkrjlqqHXi4%2BvOPYBhhcY9Op5M8AejlDKvtIUJdJFKDfGqTvZt01htlOKgTfgrYHIMzrajqDrjEhIicQg0sBGXR6PS1MlF0HdqdEAFykrDmBL5WL9S%2BNzDkiYTCBjqkAejS9yrMTHLM%2B9Eln9OLtXMG0CdBsxgScCXcsqGADCTVrjfqbvXjipBf0r4azWezALoyKFB5tYMUwcgYy1ajh32B%2BA8iu8p9n9ouu%2Fp8csQ5ybi4%2F8wYKF8HVxTOHw4AKBdDebLaQ%2Be5ofmDUk7bjdQxCkwGur18jIlGvB6jAtzD6A1C8Hr7HUz8UgDm2i107J8mmxO9cJMHrFe%2FjJ8422g07qZp&X-Amz-Signature=8e40f7b4bc7453e8cbd9f9fa979d5104b75337444593d9a64fa680dd4a0af32c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
