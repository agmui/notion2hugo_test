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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4AX63U%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnwTkS2%2FIL%2BcQX5%2FdxZ1pDCF%2FibqtjORkiKb2JEuenEAiEAsBxRnHcxzmjvn5gjWlo2rrWzd5Y%2BF%2BGUnSdKximnfDwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4AW8uXltIoC2tVAyrcA2b7KnZjPvwLDoRxwK2HFbYCC0SyBVO3pNl0NCHK6ZYGpEltvoACXBscgP36wFs7qR8B%2FqCSmSD7GdiEmuCE99wYobmLRmvKxSejb7N0PZq41%2FkZfwUX%2FNIain2pohMcU6p5isYLAOeoQRNnAN%2BX%2Fk0imteWJtvqHel4vn5kwg0fdDeGwA5T245yQUgmubOLtmC%2F7uIYafV8PZiDc1WGkrbtPtBz4VOnmw2DY5Sqd9KfWUzF64dw2qGDcwykKVsJC5tvi2QQqhJNg2dSDEEIHrmtbdSm7Pum8suSOR%2B0lkTPsQMBM2tzOEAmhoGOTcQLaQ39X1r6QQnjI3pDqYPfPw1d6GWRuLATnv83vEokWG2YpW1jGEOrcGcrwPpIhNGizouWyAcY7mQ0Hkiyy4c7HB4ef7bUAvS65pGMaW0Y6t1PdFkqg1GRJYlbeIYr%2BsvSYCsByX1Fne8Y5pK7Rpm6pB6tpHao6mIMJJfDDLcUWh2F3ZisZpZByLqnC41hVPpH2GyWD6f%2B6XdNekSmUjJBrlUOIBXLGB3vxl5b6YgjjQxBDdLe8urxrDaXd54SilYD6z0kCtVVtZJWhlz32jsl%2FdZ1rZNnqs6pkMi3F0lD3T2Yrbpm6VADxFvhw1iiMOm%2F0b4GOqUBhv%2FS6q9cP4SLjpNFhii%2FA6KF0Fn74q9S6fyEP7ye6TgJpeMW%2Fa8EmBQXUVvR2x9vz1ZA%2BzW6zJZH3CyFkonk%2FJQIuH2Q%2FUtmNYM%2F7RuoN79vCZ2vXUWgaTOGNYZcQRaOwShnVptkpKIJyw6KoOQs3f7qnLGQwyHFszpTf%2FSqrRl3O00x3ubNOkGREBAn2XwQEnXj8b9KwvdC6NoqWensWxqPk3KN&X-Amz-Signature=f142e73ab1c11859df5cb691c0e31c2ae3b4ce242d6826100dd82881bfcec45c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4AX63U%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnwTkS2%2FIL%2BcQX5%2FdxZ1pDCF%2FibqtjORkiKb2JEuenEAiEAsBxRnHcxzmjvn5gjWlo2rrWzd5Y%2BF%2BGUnSdKximnfDwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4AW8uXltIoC2tVAyrcA2b7KnZjPvwLDoRxwK2HFbYCC0SyBVO3pNl0NCHK6ZYGpEltvoACXBscgP36wFs7qR8B%2FqCSmSD7GdiEmuCE99wYobmLRmvKxSejb7N0PZq41%2FkZfwUX%2FNIain2pohMcU6p5isYLAOeoQRNnAN%2BX%2Fk0imteWJtvqHel4vn5kwg0fdDeGwA5T245yQUgmubOLtmC%2F7uIYafV8PZiDc1WGkrbtPtBz4VOnmw2DY5Sqd9KfWUzF64dw2qGDcwykKVsJC5tvi2QQqhJNg2dSDEEIHrmtbdSm7Pum8suSOR%2B0lkTPsQMBM2tzOEAmhoGOTcQLaQ39X1r6QQnjI3pDqYPfPw1d6GWRuLATnv83vEokWG2YpW1jGEOrcGcrwPpIhNGizouWyAcY7mQ0Hkiyy4c7HB4ef7bUAvS65pGMaW0Y6t1PdFkqg1GRJYlbeIYr%2BsvSYCsByX1Fne8Y5pK7Rpm6pB6tpHao6mIMJJfDDLcUWh2F3ZisZpZByLqnC41hVPpH2GyWD6f%2B6XdNekSmUjJBrlUOIBXLGB3vxl5b6YgjjQxBDdLe8urxrDaXd54SilYD6z0kCtVVtZJWhlz32jsl%2FdZ1rZNnqs6pkMi3F0lD3T2Yrbpm6VADxFvhw1iiMOm%2F0b4GOqUBhv%2FS6q9cP4SLjpNFhii%2FA6KF0Fn74q9S6fyEP7ye6TgJpeMW%2Fa8EmBQXUVvR2x9vz1ZA%2BzW6zJZH3CyFkonk%2FJQIuH2Q%2FUtmNYM%2F7RuoN79vCZ2vXUWgaTOGNYZcQRaOwShnVptkpKIJyw6KoOQs3f7qnLGQwyHFszpTf%2FSqrRl3O00x3ubNOkGREBAn2XwQEnXj8b9KwvdC6NoqWensWxqPk3KN&X-Amz-Signature=eaa216dd7f4c0c6fc7150e521b10982112d15bbae234345a6a53ddbc39b2b4b5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4AX63U%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnwTkS2%2FIL%2BcQX5%2FdxZ1pDCF%2FibqtjORkiKb2JEuenEAiEAsBxRnHcxzmjvn5gjWlo2rrWzd5Y%2BF%2BGUnSdKximnfDwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4AW8uXltIoC2tVAyrcA2b7KnZjPvwLDoRxwK2HFbYCC0SyBVO3pNl0NCHK6ZYGpEltvoACXBscgP36wFs7qR8B%2FqCSmSD7GdiEmuCE99wYobmLRmvKxSejb7N0PZq41%2FkZfwUX%2FNIain2pohMcU6p5isYLAOeoQRNnAN%2BX%2Fk0imteWJtvqHel4vn5kwg0fdDeGwA5T245yQUgmubOLtmC%2F7uIYafV8PZiDc1WGkrbtPtBz4VOnmw2DY5Sqd9KfWUzF64dw2qGDcwykKVsJC5tvi2QQqhJNg2dSDEEIHrmtbdSm7Pum8suSOR%2B0lkTPsQMBM2tzOEAmhoGOTcQLaQ39X1r6QQnjI3pDqYPfPw1d6GWRuLATnv83vEokWG2YpW1jGEOrcGcrwPpIhNGizouWyAcY7mQ0Hkiyy4c7HB4ef7bUAvS65pGMaW0Y6t1PdFkqg1GRJYlbeIYr%2BsvSYCsByX1Fne8Y5pK7Rpm6pB6tpHao6mIMJJfDDLcUWh2F3ZisZpZByLqnC41hVPpH2GyWD6f%2B6XdNekSmUjJBrlUOIBXLGB3vxl5b6YgjjQxBDdLe8urxrDaXd54SilYD6z0kCtVVtZJWhlz32jsl%2FdZ1rZNnqs6pkMi3F0lD3T2Yrbpm6VADxFvhw1iiMOm%2F0b4GOqUBhv%2FS6q9cP4SLjpNFhii%2FA6KF0Fn74q9S6fyEP7ye6TgJpeMW%2Fa8EmBQXUVvR2x9vz1ZA%2BzW6zJZH3CyFkonk%2FJQIuH2Q%2FUtmNYM%2F7RuoN79vCZ2vXUWgaTOGNYZcQRaOwShnVptkpKIJyw6KoOQs3f7qnLGQwyHFszpTf%2FSqrRl3O00x3ubNOkGREBAn2XwQEnXj8b9KwvdC6NoqWensWxqPk3KN&X-Amz-Signature=f768d40ee0dfa5956b0a120499463b4efc752999c435fb669caf18ef91dd33cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4AX63U%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnwTkS2%2FIL%2BcQX5%2FdxZ1pDCF%2FibqtjORkiKb2JEuenEAiEAsBxRnHcxzmjvn5gjWlo2rrWzd5Y%2BF%2BGUnSdKximnfDwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4AW8uXltIoC2tVAyrcA2b7KnZjPvwLDoRxwK2HFbYCC0SyBVO3pNl0NCHK6ZYGpEltvoACXBscgP36wFs7qR8B%2FqCSmSD7GdiEmuCE99wYobmLRmvKxSejb7N0PZq41%2FkZfwUX%2FNIain2pohMcU6p5isYLAOeoQRNnAN%2BX%2Fk0imteWJtvqHel4vn5kwg0fdDeGwA5T245yQUgmubOLtmC%2F7uIYafV8PZiDc1WGkrbtPtBz4VOnmw2DY5Sqd9KfWUzF64dw2qGDcwykKVsJC5tvi2QQqhJNg2dSDEEIHrmtbdSm7Pum8suSOR%2B0lkTPsQMBM2tzOEAmhoGOTcQLaQ39X1r6QQnjI3pDqYPfPw1d6GWRuLATnv83vEokWG2YpW1jGEOrcGcrwPpIhNGizouWyAcY7mQ0Hkiyy4c7HB4ef7bUAvS65pGMaW0Y6t1PdFkqg1GRJYlbeIYr%2BsvSYCsByX1Fne8Y5pK7Rpm6pB6tpHao6mIMJJfDDLcUWh2F3ZisZpZByLqnC41hVPpH2GyWD6f%2B6XdNekSmUjJBrlUOIBXLGB3vxl5b6YgjjQxBDdLe8urxrDaXd54SilYD6z0kCtVVtZJWhlz32jsl%2FdZ1rZNnqs6pkMi3F0lD3T2Yrbpm6VADxFvhw1iiMOm%2F0b4GOqUBhv%2FS6q9cP4SLjpNFhii%2FA6KF0Fn74q9S6fyEP7ye6TgJpeMW%2Fa8EmBQXUVvR2x9vz1ZA%2BzW6zJZH3CyFkonk%2FJQIuH2Q%2FUtmNYM%2F7RuoN79vCZ2vXUWgaTOGNYZcQRaOwShnVptkpKIJyw6KoOQs3f7qnLGQwyHFszpTf%2FSqrRl3O00x3ubNOkGREBAn2XwQEnXj8b9KwvdC6NoqWensWxqPk3KN&X-Amz-Signature=2da746d8796277ac4a145685a98e5527e67d87637eb0359b36616fbf62427136&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4AX63U%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnwTkS2%2FIL%2BcQX5%2FdxZ1pDCF%2FibqtjORkiKb2JEuenEAiEAsBxRnHcxzmjvn5gjWlo2rrWzd5Y%2BF%2BGUnSdKximnfDwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4AW8uXltIoC2tVAyrcA2b7KnZjPvwLDoRxwK2HFbYCC0SyBVO3pNl0NCHK6ZYGpEltvoACXBscgP36wFs7qR8B%2FqCSmSD7GdiEmuCE99wYobmLRmvKxSejb7N0PZq41%2FkZfwUX%2FNIain2pohMcU6p5isYLAOeoQRNnAN%2BX%2Fk0imteWJtvqHel4vn5kwg0fdDeGwA5T245yQUgmubOLtmC%2F7uIYafV8PZiDc1WGkrbtPtBz4VOnmw2DY5Sqd9KfWUzF64dw2qGDcwykKVsJC5tvi2QQqhJNg2dSDEEIHrmtbdSm7Pum8suSOR%2B0lkTPsQMBM2tzOEAmhoGOTcQLaQ39X1r6QQnjI3pDqYPfPw1d6GWRuLATnv83vEokWG2YpW1jGEOrcGcrwPpIhNGizouWyAcY7mQ0Hkiyy4c7HB4ef7bUAvS65pGMaW0Y6t1PdFkqg1GRJYlbeIYr%2BsvSYCsByX1Fne8Y5pK7Rpm6pB6tpHao6mIMJJfDDLcUWh2F3ZisZpZByLqnC41hVPpH2GyWD6f%2B6XdNekSmUjJBrlUOIBXLGB3vxl5b6YgjjQxBDdLe8urxrDaXd54SilYD6z0kCtVVtZJWhlz32jsl%2FdZ1rZNnqs6pkMi3F0lD3T2Yrbpm6VADxFvhw1iiMOm%2F0b4GOqUBhv%2FS6q9cP4SLjpNFhii%2FA6KF0Fn74q9S6fyEP7ye6TgJpeMW%2Fa8EmBQXUVvR2x9vz1ZA%2BzW6zJZH3CyFkonk%2FJQIuH2Q%2FUtmNYM%2F7RuoN79vCZ2vXUWgaTOGNYZcQRaOwShnVptkpKIJyw6KoOQs3f7qnLGQwyHFszpTf%2FSqrRl3O00x3ubNOkGREBAn2XwQEnXj8b9KwvdC6NoqWensWxqPk3KN&X-Amz-Signature=ba8e8c7ed5f1a19f7b0f9fa29c0b7b1e653368324adbd2d6d7a41aaf3bfc5936&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
