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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JGW5AYG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2wq%2FlclWeHPbpd0IMLqnfTqLTssFibM9YjjBuc%2BFZhAiEArzFO0h9EAxuNL14wxtsODKHdRF6YGh6xclbqVleC%2FekqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEVOPFfVfU2MAWfXSrcA9hyRFzbwwbD4Mddvg8VV29EVxl3x7rqT9jvRwA1fLZRWdl74uoMRs2yqBhsjPbCpN9ZNzypHKN2Eb2Y%2BTeygqKCwy7SASc6UnIwMI7uQxVZXf%2FnWBu4%2FrUn8S%2BoLViEOJ4Ufllu%2By18YxBBNZucwsHBMi9AGfSognQhLqaF2YFq5KYiX8HjbpwSLV%2BZBWaonMaKAEMCxh1zxCRv5EA3lR0HfcQw6ku0ck%2B7YgCBZB49If84InkwvpYkKKvDiiOZkdc%2FC7GgLQ6XoWcgJmo5YPgC96Bzwo%2FxpXB9R7Wu%2BHAeywk7WNV8%2FhUpoirw49uSokVSRV2VVya9S8o45iWdKVM%2Bq8ePAXWZpSsEH3dizM264VszLPfTT78ZkmHmjNyKUsJrMoczhj8978taps9cdQ04UQE%2F751i10jgIDTOyJhv3ZPXt3eEVAYCp8xYqj833Km0DLhfoHJD6NUUKa84Zg%2Fo6Jo3FesvXnd71KEWlP2XDQ34TtGpE0AVkJv209nJJ1kqVsOonlJZBsSiOiCbTo4guzRS8WW37AnZk6auxhF01uAwl86p%2BGOHe4rLntVUwloIvX4G8pu9GYvxADUWuuF2gC0BYDspJYrd%2BKkPLkU59C%2BKz9aIV8poOYbeMK6iyMMGOqUBlMpB0FipN6jljc0F9TZ6lbfxDiZoCrY9ZNu9q93O6%2BzuFc5h%2Fc%2FZo%2FGnY8h438aQLvylalNlOqJtJkHdNgD3PAyJu7fbBSkuAWc2Fj1qe2Ef2BTtnr06Y0eCtRx8eClFy3dqR8113lNv%2BVeOKlYDF89AiV9eKixzGTM%2FH%2BEeINrzoljyfHrKw2FfL%2BLb8H1dy1kniFlGpm88FGPC9bJHW%2Fd2ixup&X-Amz-Signature=a50d30d6045c19cc2cfb85efc0e0b821709646f41d5865760e543b994fe04308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JGW5AYG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2wq%2FlclWeHPbpd0IMLqnfTqLTssFibM9YjjBuc%2BFZhAiEArzFO0h9EAxuNL14wxtsODKHdRF6YGh6xclbqVleC%2FekqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEVOPFfVfU2MAWfXSrcA9hyRFzbwwbD4Mddvg8VV29EVxl3x7rqT9jvRwA1fLZRWdl74uoMRs2yqBhsjPbCpN9ZNzypHKN2Eb2Y%2BTeygqKCwy7SASc6UnIwMI7uQxVZXf%2FnWBu4%2FrUn8S%2BoLViEOJ4Ufllu%2By18YxBBNZucwsHBMi9AGfSognQhLqaF2YFq5KYiX8HjbpwSLV%2BZBWaonMaKAEMCxh1zxCRv5EA3lR0HfcQw6ku0ck%2B7YgCBZB49If84InkwvpYkKKvDiiOZkdc%2FC7GgLQ6XoWcgJmo5YPgC96Bzwo%2FxpXB9R7Wu%2BHAeywk7WNV8%2FhUpoirw49uSokVSRV2VVya9S8o45iWdKVM%2Bq8ePAXWZpSsEH3dizM264VszLPfTT78ZkmHmjNyKUsJrMoczhj8978taps9cdQ04UQE%2F751i10jgIDTOyJhv3ZPXt3eEVAYCp8xYqj833Km0DLhfoHJD6NUUKa84Zg%2Fo6Jo3FesvXnd71KEWlP2XDQ34TtGpE0AVkJv209nJJ1kqVsOonlJZBsSiOiCbTo4guzRS8WW37AnZk6auxhF01uAwl86p%2BGOHe4rLntVUwloIvX4G8pu9GYvxADUWuuF2gC0BYDspJYrd%2BKkPLkU59C%2BKz9aIV8poOYbeMK6iyMMGOqUBlMpB0FipN6jljc0F9TZ6lbfxDiZoCrY9ZNu9q93O6%2BzuFc5h%2Fc%2FZo%2FGnY8h438aQLvylalNlOqJtJkHdNgD3PAyJu7fbBSkuAWc2Fj1qe2Ef2BTtnr06Y0eCtRx8eClFy3dqR8113lNv%2BVeOKlYDF89AiV9eKixzGTM%2FH%2BEeINrzoljyfHrKw2FfL%2BLb8H1dy1kniFlGpm88FGPC9bJHW%2Fd2ixup&X-Amz-Signature=3e4a67c469b4ff163ade53141ce99c176ef5800da6b7b1f1b980457149dc1f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JGW5AYG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2wq%2FlclWeHPbpd0IMLqnfTqLTssFibM9YjjBuc%2BFZhAiEArzFO0h9EAxuNL14wxtsODKHdRF6YGh6xclbqVleC%2FekqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEVOPFfVfU2MAWfXSrcA9hyRFzbwwbD4Mddvg8VV29EVxl3x7rqT9jvRwA1fLZRWdl74uoMRs2yqBhsjPbCpN9ZNzypHKN2Eb2Y%2BTeygqKCwy7SASc6UnIwMI7uQxVZXf%2FnWBu4%2FrUn8S%2BoLViEOJ4Ufllu%2By18YxBBNZucwsHBMi9AGfSognQhLqaF2YFq5KYiX8HjbpwSLV%2BZBWaonMaKAEMCxh1zxCRv5EA3lR0HfcQw6ku0ck%2B7YgCBZB49If84InkwvpYkKKvDiiOZkdc%2FC7GgLQ6XoWcgJmo5YPgC96Bzwo%2FxpXB9R7Wu%2BHAeywk7WNV8%2FhUpoirw49uSokVSRV2VVya9S8o45iWdKVM%2Bq8ePAXWZpSsEH3dizM264VszLPfTT78ZkmHmjNyKUsJrMoczhj8978taps9cdQ04UQE%2F751i10jgIDTOyJhv3ZPXt3eEVAYCp8xYqj833Km0DLhfoHJD6NUUKa84Zg%2Fo6Jo3FesvXnd71KEWlP2XDQ34TtGpE0AVkJv209nJJ1kqVsOonlJZBsSiOiCbTo4guzRS8WW37AnZk6auxhF01uAwl86p%2BGOHe4rLntVUwloIvX4G8pu9GYvxADUWuuF2gC0BYDspJYrd%2BKkPLkU59C%2BKz9aIV8poOYbeMK6iyMMGOqUBlMpB0FipN6jljc0F9TZ6lbfxDiZoCrY9ZNu9q93O6%2BzuFc5h%2Fc%2FZo%2FGnY8h438aQLvylalNlOqJtJkHdNgD3PAyJu7fbBSkuAWc2Fj1qe2Ef2BTtnr06Y0eCtRx8eClFy3dqR8113lNv%2BVeOKlYDF89AiV9eKixzGTM%2FH%2BEeINrzoljyfHrKw2FfL%2BLb8H1dy1kniFlGpm88FGPC9bJHW%2Fd2ixup&X-Amz-Signature=4e79a82cca894ec6a2e4796496cbe62c464a6fed05d8bf54d3fe47099cec7afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JGW5AYG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2wq%2FlclWeHPbpd0IMLqnfTqLTssFibM9YjjBuc%2BFZhAiEArzFO0h9EAxuNL14wxtsODKHdRF6YGh6xclbqVleC%2FekqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEVOPFfVfU2MAWfXSrcA9hyRFzbwwbD4Mddvg8VV29EVxl3x7rqT9jvRwA1fLZRWdl74uoMRs2yqBhsjPbCpN9ZNzypHKN2Eb2Y%2BTeygqKCwy7SASc6UnIwMI7uQxVZXf%2FnWBu4%2FrUn8S%2BoLViEOJ4Ufllu%2By18YxBBNZucwsHBMi9AGfSognQhLqaF2YFq5KYiX8HjbpwSLV%2BZBWaonMaKAEMCxh1zxCRv5EA3lR0HfcQw6ku0ck%2B7YgCBZB49If84InkwvpYkKKvDiiOZkdc%2FC7GgLQ6XoWcgJmo5YPgC96Bzwo%2FxpXB9R7Wu%2BHAeywk7WNV8%2FhUpoirw49uSokVSRV2VVya9S8o45iWdKVM%2Bq8ePAXWZpSsEH3dizM264VszLPfTT78ZkmHmjNyKUsJrMoczhj8978taps9cdQ04UQE%2F751i10jgIDTOyJhv3ZPXt3eEVAYCp8xYqj833Km0DLhfoHJD6NUUKa84Zg%2Fo6Jo3FesvXnd71KEWlP2XDQ34TtGpE0AVkJv209nJJ1kqVsOonlJZBsSiOiCbTo4guzRS8WW37AnZk6auxhF01uAwl86p%2BGOHe4rLntVUwloIvX4G8pu9GYvxADUWuuF2gC0BYDspJYrd%2BKkPLkU59C%2BKz9aIV8poOYbeMK6iyMMGOqUBlMpB0FipN6jljc0F9TZ6lbfxDiZoCrY9ZNu9q93O6%2BzuFc5h%2Fc%2FZo%2FGnY8h438aQLvylalNlOqJtJkHdNgD3PAyJu7fbBSkuAWc2Fj1qe2Ef2BTtnr06Y0eCtRx8eClFy3dqR8113lNv%2BVeOKlYDF89AiV9eKixzGTM%2FH%2BEeINrzoljyfHrKw2FfL%2BLb8H1dy1kniFlGpm88FGPC9bJHW%2Fd2ixup&X-Amz-Signature=839e5bc50fc7fa3c70e7ced54a9b15f2e89942079f21b41fe9f8758c1a3abc20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JGW5AYG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2wq%2FlclWeHPbpd0IMLqnfTqLTssFibM9YjjBuc%2BFZhAiEArzFO0h9EAxuNL14wxtsODKHdRF6YGh6xclbqVleC%2FekqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEVOPFfVfU2MAWfXSrcA9hyRFzbwwbD4Mddvg8VV29EVxl3x7rqT9jvRwA1fLZRWdl74uoMRs2yqBhsjPbCpN9ZNzypHKN2Eb2Y%2BTeygqKCwy7SASc6UnIwMI7uQxVZXf%2FnWBu4%2FrUn8S%2BoLViEOJ4Ufllu%2By18YxBBNZucwsHBMi9AGfSognQhLqaF2YFq5KYiX8HjbpwSLV%2BZBWaonMaKAEMCxh1zxCRv5EA3lR0HfcQw6ku0ck%2B7YgCBZB49If84InkwvpYkKKvDiiOZkdc%2FC7GgLQ6XoWcgJmo5YPgC96Bzwo%2FxpXB9R7Wu%2BHAeywk7WNV8%2FhUpoirw49uSokVSRV2VVya9S8o45iWdKVM%2Bq8ePAXWZpSsEH3dizM264VszLPfTT78ZkmHmjNyKUsJrMoczhj8978taps9cdQ04UQE%2F751i10jgIDTOyJhv3ZPXt3eEVAYCp8xYqj833Km0DLhfoHJD6NUUKa84Zg%2Fo6Jo3FesvXnd71KEWlP2XDQ34TtGpE0AVkJv209nJJ1kqVsOonlJZBsSiOiCbTo4guzRS8WW37AnZk6auxhF01uAwl86p%2BGOHe4rLntVUwloIvX4G8pu9GYvxADUWuuF2gC0BYDspJYrd%2BKkPLkU59C%2BKz9aIV8poOYbeMK6iyMMGOqUBlMpB0FipN6jljc0F9TZ6lbfxDiZoCrY9ZNu9q93O6%2BzuFc5h%2Fc%2FZo%2FGnY8h438aQLvylalNlOqJtJkHdNgD3PAyJu7fbBSkuAWc2Fj1qe2Ef2BTtnr06Y0eCtRx8eClFy3dqR8113lNv%2BVeOKlYDF89AiV9eKixzGTM%2FH%2BEeINrzoljyfHrKw2FfL%2BLb8H1dy1kniFlGpm88FGPC9bJHW%2Fd2ixup&X-Amz-Signature=3981a8cd0958cf3ec14abb752c0b15476500b78033fdef363922a67a6f6d851b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
