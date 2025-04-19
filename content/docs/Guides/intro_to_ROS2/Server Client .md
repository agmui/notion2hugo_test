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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3LJZMO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCYDuzH9eaJIVLbtM3NjHWsBUGdZw4CAM6oPMZycUOHAIhAJDGSHEAaBpZBBS6wRghxuKkWe87%2B85AfuLEbA7rM3TUKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgSkEEV3jt6DRB0%2Bwq3AN%2BOkczYYLYeE7eG%2BcdmwaprNEvHQDArPNEEJ4xXOpRFeGSOnGEY0XKwBFKjSvWIxVX51CQj60CRJkH3glRth1vSeGmmrmxQlzgS6fDx0KE6XXGA4iNzIQyYISFbRlQobkYrmRd6OphvEQUy%2FTnMVeVpjNpKjVwbuBCSPP7UrRZB2%2F1FRwHZKbWcLo1Mstt66RDq3YiFLJYsLpjrRc4RTtZrb%2B%2FdlI1jDVNSdJBddWwyFosyY9XxixBPy%2FUVdyh1c2itAnqG80gXa6TbZsQZzrIyKFM2Qp%2BaVw7CyyZu7M0eonFPDEdJ%2FEpKlVx6iQ0z5jA5b8UBQOcAaCFIj%2FImqrgDsynvzsnk6EBgllUAQtOUGQEKSuwuh2ZqHtdLcx9AfqDnAfRmoEq3vrWVqZR1tJRATNa%2FR5eGKkG4gGO42F2j6hs65Aq2wPkKFgwt%2BXFpgbZpJ5XzkRh9kifegoZIBL9P9%2FEMF9nrMiSb2WwlRGaWa1qexFMylahy%2F8QwPZfj4E8s6yGQSQXqzfjgmpH5T5iGtCggBJD6E77itPR4OY%2FsfasxCCWIe2BhK%2FokyDl22pWb3byrHG1cyZjg8Ex3yXUrXmmDfeSjDJVKrwfcNJjtbulRhHQsscveQlHxzCsoYzABjqkAaums62j0te%2BeIizs%2FPSvoox3LnzYMS%2BNGUKVSNJ0jnGrQ4rDJ5pumZJuwaydFjI%2BZkUc7dsPrp8cMxrhD2CCcKcuN0BBtfMK2Hq8b6DIFmvX0uZROaL33V2vsbZgKhJuZUH8yr5xmoT5jNEi3Xb1IfaXBSSn%2FuZWHQ1o%2BXQiT%2FLUZtUePpyCAKIRdwxjmaDt3YcqAFZjn1vNq6wH6rv7rdQ4h1F&X-Amz-Signature=eea713291f9f403c3f5099d1722af5567bd47aeb6addf155072f57c42ee3220d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3LJZMO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCYDuzH9eaJIVLbtM3NjHWsBUGdZw4CAM6oPMZycUOHAIhAJDGSHEAaBpZBBS6wRghxuKkWe87%2B85AfuLEbA7rM3TUKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgSkEEV3jt6DRB0%2Bwq3AN%2BOkczYYLYeE7eG%2BcdmwaprNEvHQDArPNEEJ4xXOpRFeGSOnGEY0XKwBFKjSvWIxVX51CQj60CRJkH3glRth1vSeGmmrmxQlzgS6fDx0KE6XXGA4iNzIQyYISFbRlQobkYrmRd6OphvEQUy%2FTnMVeVpjNpKjVwbuBCSPP7UrRZB2%2F1FRwHZKbWcLo1Mstt66RDq3YiFLJYsLpjrRc4RTtZrb%2B%2FdlI1jDVNSdJBddWwyFosyY9XxixBPy%2FUVdyh1c2itAnqG80gXa6TbZsQZzrIyKFM2Qp%2BaVw7CyyZu7M0eonFPDEdJ%2FEpKlVx6iQ0z5jA5b8UBQOcAaCFIj%2FImqrgDsynvzsnk6EBgllUAQtOUGQEKSuwuh2ZqHtdLcx9AfqDnAfRmoEq3vrWVqZR1tJRATNa%2FR5eGKkG4gGO42F2j6hs65Aq2wPkKFgwt%2BXFpgbZpJ5XzkRh9kifegoZIBL9P9%2FEMF9nrMiSb2WwlRGaWa1qexFMylahy%2F8QwPZfj4E8s6yGQSQXqzfjgmpH5T5iGtCggBJD6E77itPR4OY%2FsfasxCCWIe2BhK%2FokyDl22pWb3byrHG1cyZjg8Ex3yXUrXmmDfeSjDJVKrwfcNJjtbulRhHQsscveQlHxzCsoYzABjqkAaums62j0te%2BeIizs%2FPSvoox3LnzYMS%2BNGUKVSNJ0jnGrQ4rDJ5pumZJuwaydFjI%2BZkUc7dsPrp8cMxrhD2CCcKcuN0BBtfMK2Hq8b6DIFmvX0uZROaL33V2vsbZgKhJuZUH8yr5xmoT5jNEi3Xb1IfaXBSSn%2FuZWHQ1o%2BXQiT%2FLUZtUePpyCAKIRdwxjmaDt3YcqAFZjn1vNq6wH6rv7rdQ4h1F&X-Amz-Signature=5d3fd8d2870f3ad66450d939ce42ae3fa1c26284f0e4ce442cfdf41c83e41ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3LJZMO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCYDuzH9eaJIVLbtM3NjHWsBUGdZw4CAM6oPMZycUOHAIhAJDGSHEAaBpZBBS6wRghxuKkWe87%2B85AfuLEbA7rM3TUKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgSkEEV3jt6DRB0%2Bwq3AN%2BOkczYYLYeE7eG%2BcdmwaprNEvHQDArPNEEJ4xXOpRFeGSOnGEY0XKwBFKjSvWIxVX51CQj60CRJkH3glRth1vSeGmmrmxQlzgS6fDx0KE6XXGA4iNzIQyYISFbRlQobkYrmRd6OphvEQUy%2FTnMVeVpjNpKjVwbuBCSPP7UrRZB2%2F1FRwHZKbWcLo1Mstt66RDq3YiFLJYsLpjrRc4RTtZrb%2B%2FdlI1jDVNSdJBddWwyFosyY9XxixBPy%2FUVdyh1c2itAnqG80gXa6TbZsQZzrIyKFM2Qp%2BaVw7CyyZu7M0eonFPDEdJ%2FEpKlVx6iQ0z5jA5b8UBQOcAaCFIj%2FImqrgDsynvzsnk6EBgllUAQtOUGQEKSuwuh2ZqHtdLcx9AfqDnAfRmoEq3vrWVqZR1tJRATNa%2FR5eGKkG4gGO42F2j6hs65Aq2wPkKFgwt%2BXFpgbZpJ5XzkRh9kifegoZIBL9P9%2FEMF9nrMiSb2WwlRGaWa1qexFMylahy%2F8QwPZfj4E8s6yGQSQXqzfjgmpH5T5iGtCggBJD6E77itPR4OY%2FsfasxCCWIe2BhK%2FokyDl22pWb3byrHG1cyZjg8Ex3yXUrXmmDfeSjDJVKrwfcNJjtbulRhHQsscveQlHxzCsoYzABjqkAaums62j0te%2BeIizs%2FPSvoox3LnzYMS%2BNGUKVSNJ0jnGrQ4rDJ5pumZJuwaydFjI%2BZkUc7dsPrp8cMxrhD2CCcKcuN0BBtfMK2Hq8b6DIFmvX0uZROaL33V2vsbZgKhJuZUH8yr5xmoT5jNEi3Xb1IfaXBSSn%2FuZWHQ1o%2BXQiT%2FLUZtUePpyCAKIRdwxjmaDt3YcqAFZjn1vNq6wH6rv7rdQ4h1F&X-Amz-Signature=aa91f584351020a735ca7f1e25d5a2d88086e0f65a001e8121a616f9841a42e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3LJZMO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCYDuzH9eaJIVLbtM3NjHWsBUGdZw4CAM6oPMZycUOHAIhAJDGSHEAaBpZBBS6wRghxuKkWe87%2B85AfuLEbA7rM3TUKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgSkEEV3jt6DRB0%2Bwq3AN%2BOkczYYLYeE7eG%2BcdmwaprNEvHQDArPNEEJ4xXOpRFeGSOnGEY0XKwBFKjSvWIxVX51CQj60CRJkH3glRth1vSeGmmrmxQlzgS6fDx0KE6XXGA4iNzIQyYISFbRlQobkYrmRd6OphvEQUy%2FTnMVeVpjNpKjVwbuBCSPP7UrRZB2%2F1FRwHZKbWcLo1Mstt66RDq3YiFLJYsLpjrRc4RTtZrb%2B%2FdlI1jDVNSdJBddWwyFosyY9XxixBPy%2FUVdyh1c2itAnqG80gXa6TbZsQZzrIyKFM2Qp%2BaVw7CyyZu7M0eonFPDEdJ%2FEpKlVx6iQ0z5jA5b8UBQOcAaCFIj%2FImqrgDsynvzsnk6EBgllUAQtOUGQEKSuwuh2ZqHtdLcx9AfqDnAfRmoEq3vrWVqZR1tJRATNa%2FR5eGKkG4gGO42F2j6hs65Aq2wPkKFgwt%2BXFpgbZpJ5XzkRh9kifegoZIBL9P9%2FEMF9nrMiSb2WwlRGaWa1qexFMylahy%2F8QwPZfj4E8s6yGQSQXqzfjgmpH5T5iGtCggBJD6E77itPR4OY%2FsfasxCCWIe2BhK%2FokyDl22pWb3byrHG1cyZjg8Ex3yXUrXmmDfeSjDJVKrwfcNJjtbulRhHQsscveQlHxzCsoYzABjqkAaums62j0te%2BeIizs%2FPSvoox3LnzYMS%2BNGUKVSNJ0jnGrQ4rDJ5pumZJuwaydFjI%2BZkUc7dsPrp8cMxrhD2CCcKcuN0BBtfMK2Hq8b6DIFmvX0uZROaL33V2vsbZgKhJuZUH8yr5xmoT5jNEi3Xb1IfaXBSSn%2FuZWHQ1o%2BXQiT%2FLUZtUePpyCAKIRdwxjmaDt3YcqAFZjn1vNq6wH6rv7rdQ4h1F&X-Amz-Signature=2b459b214dc0e9b7d2f732b96d6a2422520b810b7feee0bc7d473ec7c53c0bda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3LJZMO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCYDuzH9eaJIVLbtM3NjHWsBUGdZw4CAM6oPMZycUOHAIhAJDGSHEAaBpZBBS6wRghxuKkWe87%2B85AfuLEbA7rM3TUKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgSkEEV3jt6DRB0%2Bwq3AN%2BOkczYYLYeE7eG%2BcdmwaprNEvHQDArPNEEJ4xXOpRFeGSOnGEY0XKwBFKjSvWIxVX51CQj60CRJkH3glRth1vSeGmmrmxQlzgS6fDx0KE6XXGA4iNzIQyYISFbRlQobkYrmRd6OphvEQUy%2FTnMVeVpjNpKjVwbuBCSPP7UrRZB2%2F1FRwHZKbWcLo1Mstt66RDq3YiFLJYsLpjrRc4RTtZrb%2B%2FdlI1jDVNSdJBddWwyFosyY9XxixBPy%2FUVdyh1c2itAnqG80gXa6TbZsQZzrIyKFM2Qp%2BaVw7CyyZu7M0eonFPDEdJ%2FEpKlVx6iQ0z5jA5b8UBQOcAaCFIj%2FImqrgDsynvzsnk6EBgllUAQtOUGQEKSuwuh2ZqHtdLcx9AfqDnAfRmoEq3vrWVqZR1tJRATNa%2FR5eGKkG4gGO42F2j6hs65Aq2wPkKFgwt%2BXFpgbZpJ5XzkRh9kifegoZIBL9P9%2FEMF9nrMiSb2WwlRGaWa1qexFMylahy%2F8QwPZfj4E8s6yGQSQXqzfjgmpH5T5iGtCggBJD6E77itPR4OY%2FsfasxCCWIe2BhK%2FokyDl22pWb3byrHG1cyZjg8Ex3yXUrXmmDfeSjDJVKrwfcNJjtbulRhHQsscveQlHxzCsoYzABjqkAaums62j0te%2BeIizs%2FPSvoox3LnzYMS%2BNGUKVSNJ0jnGrQ4rDJ5pumZJuwaydFjI%2BZkUc7dsPrp8cMxrhD2CCcKcuN0BBtfMK2Hq8b6DIFmvX0uZROaL33V2vsbZgKhJuZUH8yr5xmoT5jNEi3Xb1IfaXBSSn%2FuZWHQ1o%2BXQiT%2FLUZtUePpyCAKIRdwxjmaDt3YcqAFZjn1vNq6wH6rv7rdQ4h1F&X-Amz-Signature=257b8e2257c61205962d8614451e55e7f4930ed8c7a368e3a3a9511b234ca93c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
