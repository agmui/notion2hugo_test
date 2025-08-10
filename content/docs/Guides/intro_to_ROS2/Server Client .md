---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VULPQJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC376Iyxa3%2BDPE1kH4NZ%2BUs5V3qQRBDWtTiVkJ3An7EQIgKhlhGfp%2B1thXHfNUoi%2FHHUnSyGg1pBtY%2By4MQw1WLVYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqcDkeOLbDfmnX2eircA5Lmzx1aYcWFZzIiwVHbZjPgcnQRPh4j16f8V%2F6ONObieQ5iEZK6bCVZ7z1x0omjzmMQuxFMBC%2BZHnS%2FnHOgxRgxEkl7%2Fcwx4RTAKncp3AJh8x3P%2FFvkvoJ4siQqYiAvhR%2F07bKewWZbLiI%2B8v%2FwEAkocAZjf9ha7KG01s5q7ttBg0TZenrNcIhNqaYnyrkG73UIEZE2OWE0MKVoqWLtz8FdPB7m%2FoBJ4mU8CSDmZPsBYGWyyvavJ3Ry59EsnKTLNQjmebp41LkSgAxJNdlSloJV2AV%2FQcwXTz1mRSupPtTEjrr%2BKjgwQPIjgpSsv1XPG7ET5zWOUw7bwlSPP2kmaWHktWs%2BYR08tE1wHprRJ4xBhW3alEkkHy4Jb7L8Eb4CQxyBH%2Fc8T710DV5Tr%2BodnNB%2F%2FZ3GkHIzECIOwvT%2BtElJlm%2F9%2FSwNF8MJQ6jeNDZWGaYJkqaOPrtIXxMqZjDGKdncYLBuhb6MYN3Z0Hib6okq6q1pkFYV%2Bg%2FlmL4jx%2F7yx6t7smr%2Bf1O42waKukWTZ84CsftsTmdVdyLiOvaoZwG%2Ft%2Bq6n3jhHyVwkYNRCEYAyc7LilTpiZQMjvhVjS7CkmN4Fg3oxhkNXH5RNyctTUFq24Gzd8Q60EK5XHqWMOSY4sQGOqUBNXVMm0rU0lBKEIqyWQhiHGGvoNXk3AZp7gXVoO2bgrE2PYRFRLu47pgcS04AjxUuCJu1dHifhYeH53bhE%2FRnGN5o%2FsWqf%2BP2PV7GCjkAEOw6e%2F74Mxe%2BAxG8yCanfrvtTF5riiibeimZiz87kbC7iWt1iiWz5t6xg%2B%2FHzM3GaL05JN4I93DSCPpENxM3yvdrXqoKqAy37BfgMLym%2FbkWZOFoRhOR&X-Amz-Signature=fa054c7124af4c7e1be4f959f011a09848f8a657ca768dee5eb1a32baf11d43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VULPQJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC376Iyxa3%2BDPE1kH4NZ%2BUs5V3qQRBDWtTiVkJ3An7EQIgKhlhGfp%2B1thXHfNUoi%2FHHUnSyGg1pBtY%2By4MQw1WLVYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqcDkeOLbDfmnX2eircA5Lmzx1aYcWFZzIiwVHbZjPgcnQRPh4j16f8V%2F6ONObieQ5iEZK6bCVZ7z1x0omjzmMQuxFMBC%2BZHnS%2FnHOgxRgxEkl7%2Fcwx4RTAKncp3AJh8x3P%2FFvkvoJ4siQqYiAvhR%2F07bKewWZbLiI%2B8v%2FwEAkocAZjf9ha7KG01s5q7ttBg0TZenrNcIhNqaYnyrkG73UIEZE2OWE0MKVoqWLtz8FdPB7m%2FoBJ4mU8CSDmZPsBYGWyyvavJ3Ry59EsnKTLNQjmebp41LkSgAxJNdlSloJV2AV%2FQcwXTz1mRSupPtTEjrr%2BKjgwQPIjgpSsv1XPG7ET5zWOUw7bwlSPP2kmaWHktWs%2BYR08tE1wHprRJ4xBhW3alEkkHy4Jb7L8Eb4CQxyBH%2Fc8T710DV5Tr%2BodnNB%2F%2FZ3GkHIzECIOwvT%2BtElJlm%2F9%2FSwNF8MJQ6jeNDZWGaYJkqaOPrtIXxMqZjDGKdncYLBuhb6MYN3Z0Hib6okq6q1pkFYV%2Bg%2FlmL4jx%2F7yx6t7smr%2Bf1O42waKukWTZ84CsftsTmdVdyLiOvaoZwG%2Ft%2Bq6n3jhHyVwkYNRCEYAyc7LilTpiZQMjvhVjS7CkmN4Fg3oxhkNXH5RNyctTUFq24Gzd8Q60EK5XHqWMOSY4sQGOqUBNXVMm0rU0lBKEIqyWQhiHGGvoNXk3AZp7gXVoO2bgrE2PYRFRLu47pgcS04AjxUuCJu1dHifhYeH53bhE%2FRnGN5o%2FsWqf%2BP2PV7GCjkAEOw6e%2F74Mxe%2BAxG8yCanfrvtTF5riiibeimZiz87kbC7iWt1iiWz5t6xg%2B%2FHzM3GaL05JN4I93DSCPpENxM3yvdrXqoKqAy37BfgMLym%2FbkWZOFoRhOR&X-Amz-Signature=7ae1e1dd939dfd2346fa617ef9fdb5d7e9d9835faeabbe1d2ab81c671425b04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VULPQJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC376Iyxa3%2BDPE1kH4NZ%2BUs5V3qQRBDWtTiVkJ3An7EQIgKhlhGfp%2B1thXHfNUoi%2FHHUnSyGg1pBtY%2By4MQw1WLVYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqcDkeOLbDfmnX2eircA5Lmzx1aYcWFZzIiwVHbZjPgcnQRPh4j16f8V%2F6ONObieQ5iEZK6bCVZ7z1x0omjzmMQuxFMBC%2BZHnS%2FnHOgxRgxEkl7%2Fcwx4RTAKncp3AJh8x3P%2FFvkvoJ4siQqYiAvhR%2F07bKewWZbLiI%2B8v%2FwEAkocAZjf9ha7KG01s5q7ttBg0TZenrNcIhNqaYnyrkG73UIEZE2OWE0MKVoqWLtz8FdPB7m%2FoBJ4mU8CSDmZPsBYGWyyvavJ3Ry59EsnKTLNQjmebp41LkSgAxJNdlSloJV2AV%2FQcwXTz1mRSupPtTEjrr%2BKjgwQPIjgpSsv1XPG7ET5zWOUw7bwlSPP2kmaWHktWs%2BYR08tE1wHprRJ4xBhW3alEkkHy4Jb7L8Eb4CQxyBH%2Fc8T710DV5Tr%2BodnNB%2F%2FZ3GkHIzECIOwvT%2BtElJlm%2F9%2FSwNF8MJQ6jeNDZWGaYJkqaOPrtIXxMqZjDGKdncYLBuhb6MYN3Z0Hib6okq6q1pkFYV%2Bg%2FlmL4jx%2F7yx6t7smr%2Bf1O42waKukWTZ84CsftsTmdVdyLiOvaoZwG%2Ft%2Bq6n3jhHyVwkYNRCEYAyc7LilTpiZQMjvhVjS7CkmN4Fg3oxhkNXH5RNyctTUFq24Gzd8Q60EK5XHqWMOSY4sQGOqUBNXVMm0rU0lBKEIqyWQhiHGGvoNXk3AZp7gXVoO2bgrE2PYRFRLu47pgcS04AjxUuCJu1dHifhYeH53bhE%2FRnGN5o%2FsWqf%2BP2PV7GCjkAEOw6e%2F74Mxe%2BAxG8yCanfrvtTF5riiibeimZiz87kbC7iWt1iiWz5t6xg%2B%2FHzM3GaL05JN4I93DSCPpENxM3yvdrXqoKqAy37BfgMLym%2FbkWZOFoRhOR&X-Amz-Signature=0f7864a60e9f13ef690684dbd3b6d441e7d033649e0e5268056c2f65e5e0d9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VULPQJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC376Iyxa3%2BDPE1kH4NZ%2BUs5V3qQRBDWtTiVkJ3An7EQIgKhlhGfp%2B1thXHfNUoi%2FHHUnSyGg1pBtY%2By4MQw1WLVYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqcDkeOLbDfmnX2eircA5Lmzx1aYcWFZzIiwVHbZjPgcnQRPh4j16f8V%2F6ONObieQ5iEZK6bCVZ7z1x0omjzmMQuxFMBC%2BZHnS%2FnHOgxRgxEkl7%2Fcwx4RTAKncp3AJh8x3P%2FFvkvoJ4siQqYiAvhR%2F07bKewWZbLiI%2B8v%2FwEAkocAZjf9ha7KG01s5q7ttBg0TZenrNcIhNqaYnyrkG73UIEZE2OWE0MKVoqWLtz8FdPB7m%2FoBJ4mU8CSDmZPsBYGWyyvavJ3Ry59EsnKTLNQjmebp41LkSgAxJNdlSloJV2AV%2FQcwXTz1mRSupPtTEjrr%2BKjgwQPIjgpSsv1XPG7ET5zWOUw7bwlSPP2kmaWHktWs%2BYR08tE1wHprRJ4xBhW3alEkkHy4Jb7L8Eb4CQxyBH%2Fc8T710DV5Tr%2BodnNB%2F%2FZ3GkHIzECIOwvT%2BtElJlm%2F9%2FSwNF8MJQ6jeNDZWGaYJkqaOPrtIXxMqZjDGKdncYLBuhb6MYN3Z0Hib6okq6q1pkFYV%2Bg%2FlmL4jx%2F7yx6t7smr%2Bf1O42waKukWTZ84CsftsTmdVdyLiOvaoZwG%2Ft%2Bq6n3jhHyVwkYNRCEYAyc7LilTpiZQMjvhVjS7CkmN4Fg3oxhkNXH5RNyctTUFq24Gzd8Q60EK5XHqWMOSY4sQGOqUBNXVMm0rU0lBKEIqyWQhiHGGvoNXk3AZp7gXVoO2bgrE2PYRFRLu47pgcS04AjxUuCJu1dHifhYeH53bhE%2FRnGN5o%2FsWqf%2BP2PV7GCjkAEOw6e%2F74Mxe%2BAxG8yCanfrvtTF5riiibeimZiz87kbC7iWt1iiWz5t6xg%2B%2FHzM3GaL05JN4I93DSCPpENxM3yvdrXqoKqAy37BfgMLym%2FbkWZOFoRhOR&X-Amz-Signature=309c93b905969bf6f3a5d8cb97a4b0ea890bc589909bdaef3ca89c661a438731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VULPQJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC376Iyxa3%2BDPE1kH4NZ%2BUs5V3qQRBDWtTiVkJ3An7EQIgKhlhGfp%2B1thXHfNUoi%2FHHUnSyGg1pBtY%2By4MQw1WLVYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqcDkeOLbDfmnX2eircA5Lmzx1aYcWFZzIiwVHbZjPgcnQRPh4j16f8V%2F6ONObieQ5iEZK6bCVZ7z1x0omjzmMQuxFMBC%2BZHnS%2FnHOgxRgxEkl7%2Fcwx4RTAKncp3AJh8x3P%2FFvkvoJ4siQqYiAvhR%2F07bKewWZbLiI%2B8v%2FwEAkocAZjf9ha7KG01s5q7ttBg0TZenrNcIhNqaYnyrkG73UIEZE2OWE0MKVoqWLtz8FdPB7m%2FoBJ4mU8CSDmZPsBYGWyyvavJ3Ry59EsnKTLNQjmebp41LkSgAxJNdlSloJV2AV%2FQcwXTz1mRSupPtTEjrr%2BKjgwQPIjgpSsv1XPG7ET5zWOUw7bwlSPP2kmaWHktWs%2BYR08tE1wHprRJ4xBhW3alEkkHy4Jb7L8Eb4CQxyBH%2Fc8T710DV5Tr%2BodnNB%2F%2FZ3GkHIzECIOwvT%2BtElJlm%2F9%2FSwNF8MJQ6jeNDZWGaYJkqaOPrtIXxMqZjDGKdncYLBuhb6MYN3Z0Hib6okq6q1pkFYV%2Bg%2FlmL4jx%2F7yx6t7smr%2Bf1O42waKukWTZ84CsftsTmdVdyLiOvaoZwG%2Ft%2Bq6n3jhHyVwkYNRCEYAyc7LilTpiZQMjvhVjS7CkmN4Fg3oxhkNXH5RNyctTUFq24Gzd8Q60EK5XHqWMOSY4sQGOqUBNXVMm0rU0lBKEIqyWQhiHGGvoNXk3AZp7gXVoO2bgrE2PYRFRLu47pgcS04AjxUuCJu1dHifhYeH53bhE%2FRnGN5o%2FsWqf%2BP2PV7GCjkAEOw6e%2F74Mxe%2BAxG8yCanfrvtTF5riiibeimZiz87kbC7iWt1iiWz5t6xg%2B%2FHzM3GaL05JN4I93DSCPpENxM3yvdrXqoKqAy37BfgMLym%2FbkWZOFoRhOR&X-Amz-Signature=5c48c1235144db65cdf5832da36e3ca83f8cb1f6003a28d0d5f0542d6894803e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
