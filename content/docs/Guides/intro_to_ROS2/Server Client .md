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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YG3EMYW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ2tyiUOsdXtvCxBF7SigRAt%2F64jVxtGrHx96Y5yCveAiAwoU7JB7L5gC7mSsGdO7n4yJW3IYoFwQmyD4%2B5phL0qCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSb%2BWLETTnd%2FP%2FxsWKtwD0cxq6E%2BdZCsNhsMDes3UscFdjisBdzeC%2FSgnmUoobY8Ma0amuo2Ux2P%2BYauOwXBx8HfzEfcaAjfmJstxFsi%2FXHWbP%2B8Oa%2BP7OgJ%2B0fFVPY%2BxjbOlL30uChB5t39xOXlPXx9AYEx3Es54rliIzeLfsFiE3AsFFgDdbovSSgQKf6dOcswwEbjRHeRB6MkpR%2BZ8nOx9P%2Bs3YOysAbW1zuS9tPMolZGcVxMxPbHVT7RfaaAmWLbIhPeFJ2eszsIkOeIfH2nqHOY%2BtwXDniaBMjD03ELzEr8XYBiCqMbjuFB2dps9ceWt%2FnW%2FCIA2ZCUPsdJ8kBu4zXoaRZftXZbfB5d14p%2BTSUMWZrcIga0FiVOhUQj%2FwdKK2vtLL2ira%2BjGFh11nRIxEobU6Qo8eNFmSafVD000C5VvV%2Brtjr5S0pByXKbxxqBDxpI7fUJQuVNyS0vW7qjxOKDOcGwkGLEzNZ86lLDiSLYf9NNyeulJcCmmt6awaJNunm6OP96q96faTZTRSkYW7upm90GBcvXXV6DMq9tOxhveHfYE2OQbD3FI1T1RzuOwKf66hvmsNjT5zz7GZuOzjIkM%2BHrtfHwBxFkbc2AOewzOSJcWUKVHr8OgBvDK4VlnAjwH01dbStQwtJ%2BUvgY6pgEhh6%2B9VZ7iz9ImK2GSsWvWCajSfVyRL%2B%2B5hoI8at4gsxliKrPS%2FGARuA1qzoCHESgObZz8PqiLxnh76WkW3aIXjBt8LM6Fi2ieU5iucAQW7EaxHF208Y6dnayxSpoCkZNqH0y3QA8c0TI6E7TTLj%2FAZ2VIGuD80IDZLeuyKESkQS1HKS0jHKu%2FHYJFRdbLkmyBMbOEiecsyrtwmUT0bDEeclD31kVJ&X-Amz-Signature=51a98ec3b47f4fd27de53c3380d86b88f8225c38df6d53094470094360d6d8d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YG3EMYW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ2tyiUOsdXtvCxBF7SigRAt%2F64jVxtGrHx96Y5yCveAiAwoU7JB7L5gC7mSsGdO7n4yJW3IYoFwQmyD4%2B5phL0qCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSb%2BWLETTnd%2FP%2FxsWKtwD0cxq6E%2BdZCsNhsMDes3UscFdjisBdzeC%2FSgnmUoobY8Ma0amuo2Ux2P%2BYauOwXBx8HfzEfcaAjfmJstxFsi%2FXHWbP%2B8Oa%2BP7OgJ%2B0fFVPY%2BxjbOlL30uChB5t39xOXlPXx9AYEx3Es54rliIzeLfsFiE3AsFFgDdbovSSgQKf6dOcswwEbjRHeRB6MkpR%2BZ8nOx9P%2Bs3YOysAbW1zuS9tPMolZGcVxMxPbHVT7RfaaAmWLbIhPeFJ2eszsIkOeIfH2nqHOY%2BtwXDniaBMjD03ELzEr8XYBiCqMbjuFB2dps9ceWt%2FnW%2FCIA2ZCUPsdJ8kBu4zXoaRZftXZbfB5d14p%2BTSUMWZrcIga0FiVOhUQj%2FwdKK2vtLL2ira%2BjGFh11nRIxEobU6Qo8eNFmSafVD000C5VvV%2Brtjr5S0pByXKbxxqBDxpI7fUJQuVNyS0vW7qjxOKDOcGwkGLEzNZ86lLDiSLYf9NNyeulJcCmmt6awaJNunm6OP96q96faTZTRSkYW7upm90GBcvXXV6DMq9tOxhveHfYE2OQbD3FI1T1RzuOwKf66hvmsNjT5zz7GZuOzjIkM%2BHrtfHwBxFkbc2AOewzOSJcWUKVHr8OgBvDK4VlnAjwH01dbStQwtJ%2BUvgY6pgEhh6%2B9VZ7iz9ImK2GSsWvWCajSfVyRL%2B%2B5hoI8at4gsxliKrPS%2FGARuA1qzoCHESgObZz8PqiLxnh76WkW3aIXjBt8LM6Fi2ieU5iucAQW7EaxHF208Y6dnayxSpoCkZNqH0y3QA8c0TI6E7TTLj%2FAZ2VIGuD80IDZLeuyKESkQS1HKS0jHKu%2FHYJFRdbLkmyBMbOEiecsyrtwmUT0bDEeclD31kVJ&X-Amz-Signature=73d7e367816be7fa24320294992a97408ef3ac8690bb3670f946c5a18cd25b42&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YG3EMYW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ2tyiUOsdXtvCxBF7SigRAt%2F64jVxtGrHx96Y5yCveAiAwoU7JB7L5gC7mSsGdO7n4yJW3IYoFwQmyD4%2B5phL0qCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSb%2BWLETTnd%2FP%2FxsWKtwD0cxq6E%2BdZCsNhsMDes3UscFdjisBdzeC%2FSgnmUoobY8Ma0amuo2Ux2P%2BYauOwXBx8HfzEfcaAjfmJstxFsi%2FXHWbP%2B8Oa%2BP7OgJ%2B0fFVPY%2BxjbOlL30uChB5t39xOXlPXx9AYEx3Es54rliIzeLfsFiE3AsFFgDdbovSSgQKf6dOcswwEbjRHeRB6MkpR%2BZ8nOx9P%2Bs3YOysAbW1zuS9tPMolZGcVxMxPbHVT7RfaaAmWLbIhPeFJ2eszsIkOeIfH2nqHOY%2BtwXDniaBMjD03ELzEr8XYBiCqMbjuFB2dps9ceWt%2FnW%2FCIA2ZCUPsdJ8kBu4zXoaRZftXZbfB5d14p%2BTSUMWZrcIga0FiVOhUQj%2FwdKK2vtLL2ira%2BjGFh11nRIxEobU6Qo8eNFmSafVD000C5VvV%2Brtjr5S0pByXKbxxqBDxpI7fUJQuVNyS0vW7qjxOKDOcGwkGLEzNZ86lLDiSLYf9NNyeulJcCmmt6awaJNunm6OP96q96faTZTRSkYW7upm90GBcvXXV6DMq9tOxhveHfYE2OQbD3FI1T1RzuOwKf66hvmsNjT5zz7GZuOzjIkM%2BHrtfHwBxFkbc2AOewzOSJcWUKVHr8OgBvDK4VlnAjwH01dbStQwtJ%2BUvgY6pgEhh6%2B9VZ7iz9ImK2GSsWvWCajSfVyRL%2B%2B5hoI8at4gsxliKrPS%2FGARuA1qzoCHESgObZz8PqiLxnh76WkW3aIXjBt8LM6Fi2ieU5iucAQW7EaxHF208Y6dnayxSpoCkZNqH0y3QA8c0TI6E7TTLj%2FAZ2VIGuD80IDZLeuyKESkQS1HKS0jHKu%2FHYJFRdbLkmyBMbOEiecsyrtwmUT0bDEeclD31kVJ&X-Amz-Signature=7ca1ddee25e96c98834e7094db7ea06e11de0cd867b320024b6c1139aa8ff2d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YG3EMYW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ2tyiUOsdXtvCxBF7SigRAt%2F64jVxtGrHx96Y5yCveAiAwoU7JB7L5gC7mSsGdO7n4yJW3IYoFwQmyD4%2B5phL0qCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSb%2BWLETTnd%2FP%2FxsWKtwD0cxq6E%2BdZCsNhsMDes3UscFdjisBdzeC%2FSgnmUoobY8Ma0amuo2Ux2P%2BYauOwXBx8HfzEfcaAjfmJstxFsi%2FXHWbP%2B8Oa%2BP7OgJ%2B0fFVPY%2BxjbOlL30uChB5t39xOXlPXx9AYEx3Es54rliIzeLfsFiE3AsFFgDdbovSSgQKf6dOcswwEbjRHeRB6MkpR%2BZ8nOx9P%2Bs3YOysAbW1zuS9tPMolZGcVxMxPbHVT7RfaaAmWLbIhPeFJ2eszsIkOeIfH2nqHOY%2BtwXDniaBMjD03ELzEr8XYBiCqMbjuFB2dps9ceWt%2FnW%2FCIA2ZCUPsdJ8kBu4zXoaRZftXZbfB5d14p%2BTSUMWZrcIga0FiVOhUQj%2FwdKK2vtLL2ira%2BjGFh11nRIxEobU6Qo8eNFmSafVD000C5VvV%2Brtjr5S0pByXKbxxqBDxpI7fUJQuVNyS0vW7qjxOKDOcGwkGLEzNZ86lLDiSLYf9NNyeulJcCmmt6awaJNunm6OP96q96faTZTRSkYW7upm90GBcvXXV6DMq9tOxhveHfYE2OQbD3FI1T1RzuOwKf66hvmsNjT5zz7GZuOzjIkM%2BHrtfHwBxFkbc2AOewzOSJcWUKVHr8OgBvDK4VlnAjwH01dbStQwtJ%2BUvgY6pgEhh6%2B9VZ7iz9ImK2GSsWvWCajSfVyRL%2B%2B5hoI8at4gsxliKrPS%2FGARuA1qzoCHESgObZz8PqiLxnh76WkW3aIXjBt8LM6Fi2ieU5iucAQW7EaxHF208Y6dnayxSpoCkZNqH0y3QA8c0TI6E7TTLj%2FAZ2VIGuD80IDZLeuyKESkQS1HKS0jHKu%2FHYJFRdbLkmyBMbOEiecsyrtwmUT0bDEeclD31kVJ&X-Amz-Signature=aefc3ee39385cd018641ff54d16acde6869a66c290e216b25b7436c6afce1cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YG3EMYW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ2tyiUOsdXtvCxBF7SigRAt%2F64jVxtGrHx96Y5yCveAiAwoU7JB7L5gC7mSsGdO7n4yJW3IYoFwQmyD4%2B5phL0qCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSb%2BWLETTnd%2FP%2FxsWKtwD0cxq6E%2BdZCsNhsMDes3UscFdjisBdzeC%2FSgnmUoobY8Ma0amuo2Ux2P%2BYauOwXBx8HfzEfcaAjfmJstxFsi%2FXHWbP%2B8Oa%2BP7OgJ%2B0fFVPY%2BxjbOlL30uChB5t39xOXlPXx9AYEx3Es54rliIzeLfsFiE3AsFFgDdbovSSgQKf6dOcswwEbjRHeRB6MkpR%2BZ8nOx9P%2Bs3YOysAbW1zuS9tPMolZGcVxMxPbHVT7RfaaAmWLbIhPeFJ2eszsIkOeIfH2nqHOY%2BtwXDniaBMjD03ELzEr8XYBiCqMbjuFB2dps9ceWt%2FnW%2FCIA2ZCUPsdJ8kBu4zXoaRZftXZbfB5d14p%2BTSUMWZrcIga0FiVOhUQj%2FwdKK2vtLL2ira%2BjGFh11nRIxEobU6Qo8eNFmSafVD000C5VvV%2Brtjr5S0pByXKbxxqBDxpI7fUJQuVNyS0vW7qjxOKDOcGwkGLEzNZ86lLDiSLYf9NNyeulJcCmmt6awaJNunm6OP96q96faTZTRSkYW7upm90GBcvXXV6DMq9tOxhveHfYE2OQbD3FI1T1RzuOwKf66hvmsNjT5zz7GZuOzjIkM%2BHrtfHwBxFkbc2AOewzOSJcWUKVHr8OgBvDK4VlnAjwH01dbStQwtJ%2BUvgY6pgEhh6%2B9VZ7iz9ImK2GSsWvWCajSfVyRL%2B%2B5hoI8at4gsxliKrPS%2FGARuA1qzoCHESgObZz8PqiLxnh76WkW3aIXjBt8LM6Fi2ieU5iucAQW7EaxHF208Y6dnayxSpoCkZNqH0y3QA8c0TI6E7TTLj%2FAZ2VIGuD80IDZLeuyKESkQS1HKS0jHKu%2FHYJFRdbLkmyBMbOEiecsyrtwmUT0bDEeclD31kVJ&X-Amz-Signature=a83bb540bb322201241cb507fdca0b7bf376b74d320d4580030b8fd634cb63fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
