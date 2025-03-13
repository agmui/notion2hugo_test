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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCSY7EB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH1zWACBTlzMTXP6ivaffz%2FOhYMSAkdXehHdttqfi3XwIhAOQ5YVGF2RYFhbgCjYa8PxmsWJ2e6rMjln3hEl3P0i6WKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCKFLhJJY9knL28P0q3AOTz2Ma8tWC6c2k93%2BWx2lGW2eFEZdCcwXd8evbVxGEoNB9xE%2FPwVgTKhw4cUi%2B2KC0WLBq2lqrP4g6DRjKnaFmFuzPLSYdukochCNdKBl23mXg16B7Rw6RuJAMGghoH2pm58mH7aNtpWEwNnHaUoqjW8B4YfS41UnWSjBYcUSQO5cSkISJfAwmHoNPcG%2FLyVhUzNpwkRqJ58u772ZnF15GGInXFe9Fuf4hKxxaoxKs4v23f4AwNUms%2BodqK1XDdKy2GgCyotL3R1p2GTtnvq1JjmT3%2B4VOOmYvjhL9u8Xmcd3HSKHnBrPwPjOYVr5K4Ic0JUSb%2ByV42CFmmiURs%2Fpa9X9HIundagcqwZDhiSU1XHKv0DyssCPFksb1pb1b1bIRNlY4WcnxlDOxUteZNL1pdJ27xZQM8hH%2F5kmHZVedfJwmD9fLZh4huW0aNnXq71Cq01QSQmEbaWblHQNMtQvKwOlGX8sR5B6Jg9a8%2Fe2pAItLOZG7QWWfQoZbe8RIMk1gz5%2FyPM3bBohwhau1Q720IAcFjGAIZm90aAXjk94mBdR5FLkqw1c6wTOxrtd16xnM1t3z9kxZPFK%2BGUw3%2FU%2BaL3Nq3dKnv6eXPa%2FnEoe6xbTt726mYebC3IU7hDD2m8u%2BBjqkAfefYG32Mi0YOX0lwbi8aT6%2Bl1v2c33FbYE2TvJWzPw02sUmeFEYgN8trGtTEm3T1EXJGcwfjx0KmGtr0TRO8YK7d2A9OcByu%2FVOSch%2FiSHfFmrYKJ%2F9bJb66nV8r63t6qBw1ReWGE3CoOFb8fBB8ziyOMkKKgFnumNw7VDTPO5lZL4iUoa%2B249hCbJndFmfoxzjT6OMU6HauxxVkSP4dNLjhylm&X-Amz-Signature=c1e86793b643306641b343f9f2bc43b08b97a910651900823d3f6b02e5279ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCSY7EB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH1zWACBTlzMTXP6ivaffz%2FOhYMSAkdXehHdttqfi3XwIhAOQ5YVGF2RYFhbgCjYa8PxmsWJ2e6rMjln3hEl3P0i6WKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCKFLhJJY9knL28P0q3AOTz2Ma8tWC6c2k93%2BWx2lGW2eFEZdCcwXd8evbVxGEoNB9xE%2FPwVgTKhw4cUi%2B2KC0WLBq2lqrP4g6DRjKnaFmFuzPLSYdukochCNdKBl23mXg16B7Rw6RuJAMGghoH2pm58mH7aNtpWEwNnHaUoqjW8B4YfS41UnWSjBYcUSQO5cSkISJfAwmHoNPcG%2FLyVhUzNpwkRqJ58u772ZnF15GGInXFe9Fuf4hKxxaoxKs4v23f4AwNUms%2BodqK1XDdKy2GgCyotL3R1p2GTtnvq1JjmT3%2B4VOOmYvjhL9u8Xmcd3HSKHnBrPwPjOYVr5K4Ic0JUSb%2ByV42CFmmiURs%2Fpa9X9HIundagcqwZDhiSU1XHKv0DyssCPFksb1pb1b1bIRNlY4WcnxlDOxUteZNL1pdJ27xZQM8hH%2F5kmHZVedfJwmD9fLZh4huW0aNnXq71Cq01QSQmEbaWblHQNMtQvKwOlGX8sR5B6Jg9a8%2Fe2pAItLOZG7QWWfQoZbe8RIMk1gz5%2FyPM3bBohwhau1Q720IAcFjGAIZm90aAXjk94mBdR5FLkqw1c6wTOxrtd16xnM1t3z9kxZPFK%2BGUw3%2FU%2BaL3Nq3dKnv6eXPa%2FnEoe6xbTt726mYebC3IU7hDD2m8u%2BBjqkAfefYG32Mi0YOX0lwbi8aT6%2Bl1v2c33FbYE2TvJWzPw02sUmeFEYgN8trGtTEm3T1EXJGcwfjx0KmGtr0TRO8YK7d2A9OcByu%2FVOSch%2FiSHfFmrYKJ%2F9bJb66nV8r63t6qBw1ReWGE3CoOFb8fBB8ziyOMkKKgFnumNw7VDTPO5lZL4iUoa%2B249hCbJndFmfoxzjT6OMU6HauxxVkSP4dNLjhylm&X-Amz-Signature=1900065566c6d7f5d3823ca266cba9f6fdfac334b11c6b02dd7a04e04f5469c9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCSY7EB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH1zWACBTlzMTXP6ivaffz%2FOhYMSAkdXehHdttqfi3XwIhAOQ5YVGF2RYFhbgCjYa8PxmsWJ2e6rMjln3hEl3P0i6WKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCKFLhJJY9knL28P0q3AOTz2Ma8tWC6c2k93%2BWx2lGW2eFEZdCcwXd8evbVxGEoNB9xE%2FPwVgTKhw4cUi%2B2KC0WLBq2lqrP4g6DRjKnaFmFuzPLSYdukochCNdKBl23mXg16B7Rw6RuJAMGghoH2pm58mH7aNtpWEwNnHaUoqjW8B4YfS41UnWSjBYcUSQO5cSkISJfAwmHoNPcG%2FLyVhUzNpwkRqJ58u772ZnF15GGInXFe9Fuf4hKxxaoxKs4v23f4AwNUms%2BodqK1XDdKy2GgCyotL3R1p2GTtnvq1JjmT3%2B4VOOmYvjhL9u8Xmcd3HSKHnBrPwPjOYVr5K4Ic0JUSb%2ByV42CFmmiURs%2Fpa9X9HIundagcqwZDhiSU1XHKv0DyssCPFksb1pb1b1bIRNlY4WcnxlDOxUteZNL1pdJ27xZQM8hH%2F5kmHZVedfJwmD9fLZh4huW0aNnXq71Cq01QSQmEbaWblHQNMtQvKwOlGX8sR5B6Jg9a8%2Fe2pAItLOZG7QWWfQoZbe8RIMk1gz5%2FyPM3bBohwhau1Q720IAcFjGAIZm90aAXjk94mBdR5FLkqw1c6wTOxrtd16xnM1t3z9kxZPFK%2BGUw3%2FU%2BaL3Nq3dKnv6eXPa%2FnEoe6xbTt726mYebC3IU7hDD2m8u%2BBjqkAfefYG32Mi0YOX0lwbi8aT6%2Bl1v2c33FbYE2TvJWzPw02sUmeFEYgN8trGtTEm3T1EXJGcwfjx0KmGtr0TRO8YK7d2A9OcByu%2FVOSch%2FiSHfFmrYKJ%2F9bJb66nV8r63t6qBw1ReWGE3CoOFb8fBB8ziyOMkKKgFnumNw7VDTPO5lZL4iUoa%2B249hCbJndFmfoxzjT6OMU6HauxxVkSP4dNLjhylm&X-Amz-Signature=16e5675187f56809a9c6759758cf4101286e05fd4b7e502709588ad606296323&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCSY7EB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH1zWACBTlzMTXP6ivaffz%2FOhYMSAkdXehHdttqfi3XwIhAOQ5YVGF2RYFhbgCjYa8PxmsWJ2e6rMjln3hEl3P0i6WKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCKFLhJJY9knL28P0q3AOTz2Ma8tWC6c2k93%2BWx2lGW2eFEZdCcwXd8evbVxGEoNB9xE%2FPwVgTKhw4cUi%2B2KC0WLBq2lqrP4g6DRjKnaFmFuzPLSYdukochCNdKBl23mXg16B7Rw6RuJAMGghoH2pm58mH7aNtpWEwNnHaUoqjW8B4YfS41UnWSjBYcUSQO5cSkISJfAwmHoNPcG%2FLyVhUzNpwkRqJ58u772ZnF15GGInXFe9Fuf4hKxxaoxKs4v23f4AwNUms%2BodqK1XDdKy2GgCyotL3R1p2GTtnvq1JjmT3%2B4VOOmYvjhL9u8Xmcd3HSKHnBrPwPjOYVr5K4Ic0JUSb%2ByV42CFmmiURs%2Fpa9X9HIundagcqwZDhiSU1XHKv0DyssCPFksb1pb1b1bIRNlY4WcnxlDOxUteZNL1pdJ27xZQM8hH%2F5kmHZVedfJwmD9fLZh4huW0aNnXq71Cq01QSQmEbaWblHQNMtQvKwOlGX8sR5B6Jg9a8%2Fe2pAItLOZG7QWWfQoZbe8RIMk1gz5%2FyPM3bBohwhau1Q720IAcFjGAIZm90aAXjk94mBdR5FLkqw1c6wTOxrtd16xnM1t3z9kxZPFK%2BGUw3%2FU%2BaL3Nq3dKnv6eXPa%2FnEoe6xbTt726mYebC3IU7hDD2m8u%2BBjqkAfefYG32Mi0YOX0lwbi8aT6%2Bl1v2c33FbYE2TvJWzPw02sUmeFEYgN8trGtTEm3T1EXJGcwfjx0KmGtr0TRO8YK7d2A9OcByu%2FVOSch%2FiSHfFmrYKJ%2F9bJb66nV8r63t6qBw1ReWGE3CoOFb8fBB8ziyOMkKKgFnumNw7VDTPO5lZL4iUoa%2B249hCbJndFmfoxzjT6OMU6HauxxVkSP4dNLjhylm&X-Amz-Signature=cb4e4a09110511e385f42ce8d9271e54cdd286d672405ba5dbb68ed8a4875f32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCSY7EB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH1zWACBTlzMTXP6ivaffz%2FOhYMSAkdXehHdttqfi3XwIhAOQ5YVGF2RYFhbgCjYa8PxmsWJ2e6rMjln3hEl3P0i6WKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCKFLhJJY9knL28P0q3AOTz2Ma8tWC6c2k93%2BWx2lGW2eFEZdCcwXd8evbVxGEoNB9xE%2FPwVgTKhw4cUi%2B2KC0WLBq2lqrP4g6DRjKnaFmFuzPLSYdukochCNdKBl23mXg16B7Rw6RuJAMGghoH2pm58mH7aNtpWEwNnHaUoqjW8B4YfS41UnWSjBYcUSQO5cSkISJfAwmHoNPcG%2FLyVhUzNpwkRqJ58u772ZnF15GGInXFe9Fuf4hKxxaoxKs4v23f4AwNUms%2BodqK1XDdKy2GgCyotL3R1p2GTtnvq1JjmT3%2B4VOOmYvjhL9u8Xmcd3HSKHnBrPwPjOYVr5K4Ic0JUSb%2ByV42CFmmiURs%2Fpa9X9HIundagcqwZDhiSU1XHKv0DyssCPFksb1pb1b1bIRNlY4WcnxlDOxUteZNL1pdJ27xZQM8hH%2F5kmHZVedfJwmD9fLZh4huW0aNnXq71Cq01QSQmEbaWblHQNMtQvKwOlGX8sR5B6Jg9a8%2Fe2pAItLOZG7QWWfQoZbe8RIMk1gz5%2FyPM3bBohwhau1Q720IAcFjGAIZm90aAXjk94mBdR5FLkqw1c6wTOxrtd16xnM1t3z9kxZPFK%2BGUw3%2FU%2BaL3Nq3dKnv6eXPa%2FnEoe6xbTt726mYebC3IU7hDD2m8u%2BBjqkAfefYG32Mi0YOX0lwbi8aT6%2Bl1v2c33FbYE2TvJWzPw02sUmeFEYgN8trGtTEm3T1EXJGcwfjx0KmGtr0TRO8YK7d2A9OcByu%2FVOSch%2FiSHfFmrYKJ%2F9bJb66nV8r63t6qBw1ReWGE3CoOFb8fBB8ziyOMkKKgFnumNw7VDTPO5lZL4iUoa%2B249hCbJndFmfoxzjT6OMU6HauxxVkSP4dNLjhylm&X-Amz-Signature=b8b88152a109b0f4311ffcddaf68dfbe1bdea7a568fd7f1e3a96bc121d776629&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
