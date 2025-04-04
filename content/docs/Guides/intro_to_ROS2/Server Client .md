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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRO726Q%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsg2odx4SULbvvd9Fl7Q1VjIh3oGNfHCAzVGT25o3j2AIhAM0pbN32FeIM7pURTPjUEa5a%2BIlSzEAZ2x0pACYoozNIKv8DCBIQABoMNjM3NDIzMTgzODA1IgxWO%2BWrEJDLNk%2B531oq3AMeZdLEYROkupkqO0DOHWEPFccOICd7OhT6uGQXsoFpUhS03B1UV8Vo1mv6UlYhBn%2BgA8Mkj6tVEpFZXMwSfbJK5JJ3KSWeQ0MufaJaLYm3juC%2F41GF9cosM6jCNe7meqKK30IZp1Lss6e4i05iQO7AH6SN3IufMo2SDpIovxlRZAoRR%2Fkl%2BMq8vP8I2OeYPBvBBQUB0zS5E2e6jgPpmKlqoNtNaYR2qchpJAIpMthnwwLM8DRRJZKFxmmwYWqT1HV8wel91fB412F2%2FKD4dvRSV9iRvzSFYLDU1Lr5nPIePhSl20HqNDkXovpHL4RjdMGzJV48Sv%2BxiSmj%2BfcWBRB%2BaabNqrdABAfJ0RX7ISOyZ3ofvVXvbuHnfPFfnGKDLUpAR62Pi5ChcUTeWqsJupRSNysiW6kyKYI1QYvD%2F5jeAgQrf7BVSkdenNjsEcVkUd09EgK8Wihx6ixyv6clfZ5z8nSXLCZw9CKe11qINlglKb98IMGddxQA%2BJ5T5mmZRfiLw44KjZwxs2%2Fh%2FZYMXAb4uKl0UbEB4gKwCnVZLOZd90DlSR%2BL9UGEO2CkCZhTbNqpPWaeqiIi%2F5cnM2lwtzJAmvmp%2BNXC86OmIPXAynrpuWikBJnD1fqPm2lxwTD4yL6%2FBjqkATnItO6IRymQk%2BiLk1F8jyLIpfm0uh7%2FT%2F6xfPsOJ1mkVc3jGPv1%2Bg0uCMrzgDrAMH5GRrKW1eTcqFxTLN%2F0V7ziPw3GitYff%2FXlnv4cer5EohsgiS2f%2FJo9rqF5Gv4n5cUGI9HDpMKmVUKI1OpCo6JW%2B4yVKU9ekzHGw4a5tRP98zeXhYuiRPpm8RiU624%2BXsBJbRttYGmoiDVKxsLKLDspSbZN&X-Amz-Signature=6bdf7b5857482b3837c5d706bd819f68ef1a716d7386bc20105109c59a892899&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRO726Q%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsg2odx4SULbvvd9Fl7Q1VjIh3oGNfHCAzVGT25o3j2AIhAM0pbN32FeIM7pURTPjUEa5a%2BIlSzEAZ2x0pACYoozNIKv8DCBIQABoMNjM3NDIzMTgzODA1IgxWO%2BWrEJDLNk%2B531oq3AMeZdLEYROkupkqO0DOHWEPFccOICd7OhT6uGQXsoFpUhS03B1UV8Vo1mv6UlYhBn%2BgA8Mkj6tVEpFZXMwSfbJK5JJ3KSWeQ0MufaJaLYm3juC%2F41GF9cosM6jCNe7meqKK30IZp1Lss6e4i05iQO7AH6SN3IufMo2SDpIovxlRZAoRR%2Fkl%2BMq8vP8I2OeYPBvBBQUB0zS5E2e6jgPpmKlqoNtNaYR2qchpJAIpMthnwwLM8DRRJZKFxmmwYWqT1HV8wel91fB412F2%2FKD4dvRSV9iRvzSFYLDU1Lr5nPIePhSl20HqNDkXovpHL4RjdMGzJV48Sv%2BxiSmj%2BfcWBRB%2BaabNqrdABAfJ0RX7ISOyZ3ofvVXvbuHnfPFfnGKDLUpAR62Pi5ChcUTeWqsJupRSNysiW6kyKYI1QYvD%2F5jeAgQrf7BVSkdenNjsEcVkUd09EgK8Wihx6ixyv6clfZ5z8nSXLCZw9CKe11qINlglKb98IMGddxQA%2BJ5T5mmZRfiLw44KjZwxs2%2Fh%2FZYMXAb4uKl0UbEB4gKwCnVZLOZd90DlSR%2BL9UGEO2CkCZhTbNqpPWaeqiIi%2F5cnM2lwtzJAmvmp%2BNXC86OmIPXAynrpuWikBJnD1fqPm2lxwTD4yL6%2FBjqkATnItO6IRymQk%2BiLk1F8jyLIpfm0uh7%2FT%2F6xfPsOJ1mkVc3jGPv1%2Bg0uCMrzgDrAMH5GRrKW1eTcqFxTLN%2F0V7ziPw3GitYff%2FXlnv4cer5EohsgiS2f%2FJo9rqF5Gv4n5cUGI9HDpMKmVUKI1OpCo6JW%2B4yVKU9ekzHGw4a5tRP98zeXhYuiRPpm8RiU624%2BXsBJbRttYGmoiDVKxsLKLDspSbZN&X-Amz-Signature=c2fc0e137f0c9b01e02e578fa21f49eb63aa85e0d4a52f042611aeda6f661cde&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRO726Q%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsg2odx4SULbvvd9Fl7Q1VjIh3oGNfHCAzVGT25o3j2AIhAM0pbN32FeIM7pURTPjUEa5a%2BIlSzEAZ2x0pACYoozNIKv8DCBIQABoMNjM3NDIzMTgzODA1IgxWO%2BWrEJDLNk%2B531oq3AMeZdLEYROkupkqO0DOHWEPFccOICd7OhT6uGQXsoFpUhS03B1UV8Vo1mv6UlYhBn%2BgA8Mkj6tVEpFZXMwSfbJK5JJ3KSWeQ0MufaJaLYm3juC%2F41GF9cosM6jCNe7meqKK30IZp1Lss6e4i05iQO7AH6SN3IufMo2SDpIovxlRZAoRR%2Fkl%2BMq8vP8I2OeYPBvBBQUB0zS5E2e6jgPpmKlqoNtNaYR2qchpJAIpMthnwwLM8DRRJZKFxmmwYWqT1HV8wel91fB412F2%2FKD4dvRSV9iRvzSFYLDU1Lr5nPIePhSl20HqNDkXovpHL4RjdMGzJV48Sv%2BxiSmj%2BfcWBRB%2BaabNqrdABAfJ0RX7ISOyZ3ofvVXvbuHnfPFfnGKDLUpAR62Pi5ChcUTeWqsJupRSNysiW6kyKYI1QYvD%2F5jeAgQrf7BVSkdenNjsEcVkUd09EgK8Wihx6ixyv6clfZ5z8nSXLCZw9CKe11qINlglKb98IMGddxQA%2BJ5T5mmZRfiLw44KjZwxs2%2Fh%2FZYMXAb4uKl0UbEB4gKwCnVZLOZd90DlSR%2BL9UGEO2CkCZhTbNqpPWaeqiIi%2F5cnM2lwtzJAmvmp%2BNXC86OmIPXAynrpuWikBJnD1fqPm2lxwTD4yL6%2FBjqkATnItO6IRymQk%2BiLk1F8jyLIpfm0uh7%2FT%2F6xfPsOJ1mkVc3jGPv1%2Bg0uCMrzgDrAMH5GRrKW1eTcqFxTLN%2F0V7ziPw3GitYff%2FXlnv4cer5EohsgiS2f%2FJo9rqF5Gv4n5cUGI9HDpMKmVUKI1OpCo6JW%2B4yVKU9ekzHGw4a5tRP98zeXhYuiRPpm8RiU624%2BXsBJbRttYGmoiDVKxsLKLDspSbZN&X-Amz-Signature=ac0118078ecbf21e630be29f0542f12aa61f18eca0c2d3e4afe2c990eff2c488&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRO726Q%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsg2odx4SULbvvd9Fl7Q1VjIh3oGNfHCAzVGT25o3j2AIhAM0pbN32FeIM7pURTPjUEa5a%2BIlSzEAZ2x0pACYoozNIKv8DCBIQABoMNjM3NDIzMTgzODA1IgxWO%2BWrEJDLNk%2B531oq3AMeZdLEYROkupkqO0DOHWEPFccOICd7OhT6uGQXsoFpUhS03B1UV8Vo1mv6UlYhBn%2BgA8Mkj6tVEpFZXMwSfbJK5JJ3KSWeQ0MufaJaLYm3juC%2F41GF9cosM6jCNe7meqKK30IZp1Lss6e4i05iQO7AH6SN3IufMo2SDpIovxlRZAoRR%2Fkl%2BMq8vP8I2OeYPBvBBQUB0zS5E2e6jgPpmKlqoNtNaYR2qchpJAIpMthnwwLM8DRRJZKFxmmwYWqT1HV8wel91fB412F2%2FKD4dvRSV9iRvzSFYLDU1Lr5nPIePhSl20HqNDkXovpHL4RjdMGzJV48Sv%2BxiSmj%2BfcWBRB%2BaabNqrdABAfJ0RX7ISOyZ3ofvVXvbuHnfPFfnGKDLUpAR62Pi5ChcUTeWqsJupRSNysiW6kyKYI1QYvD%2F5jeAgQrf7BVSkdenNjsEcVkUd09EgK8Wihx6ixyv6clfZ5z8nSXLCZw9CKe11qINlglKb98IMGddxQA%2BJ5T5mmZRfiLw44KjZwxs2%2Fh%2FZYMXAb4uKl0UbEB4gKwCnVZLOZd90DlSR%2BL9UGEO2CkCZhTbNqpPWaeqiIi%2F5cnM2lwtzJAmvmp%2BNXC86OmIPXAynrpuWikBJnD1fqPm2lxwTD4yL6%2FBjqkATnItO6IRymQk%2BiLk1F8jyLIpfm0uh7%2FT%2F6xfPsOJ1mkVc3jGPv1%2Bg0uCMrzgDrAMH5GRrKW1eTcqFxTLN%2F0V7ziPw3GitYff%2FXlnv4cer5EohsgiS2f%2FJo9rqF5Gv4n5cUGI9HDpMKmVUKI1OpCo6JW%2B4yVKU9ekzHGw4a5tRP98zeXhYuiRPpm8RiU624%2BXsBJbRttYGmoiDVKxsLKLDspSbZN&X-Amz-Signature=2a7e4d25c04c86169f4bbcd296066979ffb694c21e81c20fccdc6f27567b20be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRO726Q%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsg2odx4SULbvvd9Fl7Q1VjIh3oGNfHCAzVGT25o3j2AIhAM0pbN32FeIM7pURTPjUEa5a%2BIlSzEAZ2x0pACYoozNIKv8DCBIQABoMNjM3NDIzMTgzODA1IgxWO%2BWrEJDLNk%2B531oq3AMeZdLEYROkupkqO0DOHWEPFccOICd7OhT6uGQXsoFpUhS03B1UV8Vo1mv6UlYhBn%2BgA8Mkj6tVEpFZXMwSfbJK5JJ3KSWeQ0MufaJaLYm3juC%2F41GF9cosM6jCNe7meqKK30IZp1Lss6e4i05iQO7AH6SN3IufMo2SDpIovxlRZAoRR%2Fkl%2BMq8vP8I2OeYPBvBBQUB0zS5E2e6jgPpmKlqoNtNaYR2qchpJAIpMthnwwLM8DRRJZKFxmmwYWqT1HV8wel91fB412F2%2FKD4dvRSV9iRvzSFYLDU1Lr5nPIePhSl20HqNDkXovpHL4RjdMGzJV48Sv%2BxiSmj%2BfcWBRB%2BaabNqrdABAfJ0RX7ISOyZ3ofvVXvbuHnfPFfnGKDLUpAR62Pi5ChcUTeWqsJupRSNysiW6kyKYI1QYvD%2F5jeAgQrf7BVSkdenNjsEcVkUd09EgK8Wihx6ixyv6clfZ5z8nSXLCZw9CKe11qINlglKb98IMGddxQA%2BJ5T5mmZRfiLw44KjZwxs2%2Fh%2FZYMXAb4uKl0UbEB4gKwCnVZLOZd90DlSR%2BL9UGEO2CkCZhTbNqpPWaeqiIi%2F5cnM2lwtzJAmvmp%2BNXC86OmIPXAynrpuWikBJnD1fqPm2lxwTD4yL6%2FBjqkATnItO6IRymQk%2BiLk1F8jyLIpfm0uh7%2FT%2F6xfPsOJ1mkVc3jGPv1%2Bg0uCMrzgDrAMH5GRrKW1eTcqFxTLN%2F0V7ziPw3GitYff%2FXlnv4cer5EohsgiS2f%2FJo9rqF5Gv4n5cUGI9HDpMKmVUKI1OpCo6JW%2B4yVKU9ekzHGw4a5tRP98zeXhYuiRPpm8RiU624%2BXsBJbRttYGmoiDVKxsLKLDspSbZN&X-Amz-Signature=9f528169797e33e3a40a169d94dbafcd40e38315d53daeac5b1965f947eb385f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
