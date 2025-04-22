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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4YH3DS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC3t%2BPk4RQabD1zb9kF2WV5kBnx1ksBHOw6h1yWigidjwIhAP60K4Hxt%2Fm35Z58KUvP2hcLguMbvwmzm5n0%2FFc4IhqYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPNfWvB4dD%2FgWE7IEq3APaBtuN0dbciwk%2FkKXLw%2F94SNQzMwrFB61WoBKWGlriuYT4S4g1N4Dym3QZTExOCPoc7FVryLUnufPyeHf0ZDVRGmNwPgD%2Fp3vB7S2ri33Ta4FyQ2vnhjAedMUuPml6J1h4RryDqNHPXSe4e5eJoEHbyEesCEFxvCpN02b7kgx6xcxzoYvLUcWknCeLMuSTEL28a0ul4NcJZn9r%2FMnrbDuYVXgdtgzVF0Gqe5gH4vThBYLzWVNcutVRGK1rohhGHZg7%2B2wQKSLSo3EFlpGEQvfQblK3WVQHzdVhELR4c2SkEvIBV6Bb8br94xsNATPCyjd8OmD%2BJeX99qdNbZxIbQK7WJPriBtopQDQS13b6Ups2GVB6QMMkRJWKt8iiFkzTF%2BFFK%2FHWHMi2jIDZdxaKzx51nqmdi5E8FCszQ2vLCVhSNIIYRzo9ClsygMmnOKr0sQc9UYk5mIek%2FYRI1tScY2JokQrM7GDn79YHo6LqQegAcMUBSCgOvj49yLQjWmImJEtmh1ZV%2FTsOX2NNBJaVaBZRX%2BGUKzG3tioVjPCGJjgM8un1fs08iTaWAA2yGZ9zyClBQC6hbVisQC%2FnGsfoLD4hmcZ8FlXknUTYUOoTIDrZE3kAsAIJwhw2TjchTCqiaDABjqkAYwzUJS7UrpcmR%2F5vKMm71VqsOuJUm%2FwuVM7wYj%2BVtB%2BCzXCopvkgRQDxynvWO8SiGLOasXdXLo3Zi%2Fe0T%2F%2FekRPymtF9zL2Iv%2FyvTy9ujGX0eKx9NcTC%2BAdsGkZvEUNlvLkqCkWDFuLK9paOP%2F9izM0j1kW4cdnF0hXcabERqDe8h7djreoThbYE0%2Bf%2FQXHQI2UMuxsxVgShvCooax6ydxCAJsn&X-Amz-Signature=ec22851812bab20f5cee58ff9226a9f5ec9e16578d330c2c3520da4506a50c54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4YH3DS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC3t%2BPk4RQabD1zb9kF2WV5kBnx1ksBHOw6h1yWigidjwIhAP60K4Hxt%2Fm35Z58KUvP2hcLguMbvwmzm5n0%2FFc4IhqYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPNfWvB4dD%2FgWE7IEq3APaBtuN0dbciwk%2FkKXLw%2F94SNQzMwrFB61WoBKWGlriuYT4S4g1N4Dym3QZTExOCPoc7FVryLUnufPyeHf0ZDVRGmNwPgD%2Fp3vB7S2ri33Ta4FyQ2vnhjAedMUuPml6J1h4RryDqNHPXSe4e5eJoEHbyEesCEFxvCpN02b7kgx6xcxzoYvLUcWknCeLMuSTEL28a0ul4NcJZn9r%2FMnrbDuYVXgdtgzVF0Gqe5gH4vThBYLzWVNcutVRGK1rohhGHZg7%2B2wQKSLSo3EFlpGEQvfQblK3WVQHzdVhELR4c2SkEvIBV6Bb8br94xsNATPCyjd8OmD%2BJeX99qdNbZxIbQK7WJPriBtopQDQS13b6Ups2GVB6QMMkRJWKt8iiFkzTF%2BFFK%2FHWHMi2jIDZdxaKzx51nqmdi5E8FCszQ2vLCVhSNIIYRzo9ClsygMmnOKr0sQc9UYk5mIek%2FYRI1tScY2JokQrM7GDn79YHo6LqQegAcMUBSCgOvj49yLQjWmImJEtmh1ZV%2FTsOX2NNBJaVaBZRX%2BGUKzG3tioVjPCGJjgM8un1fs08iTaWAA2yGZ9zyClBQC6hbVisQC%2FnGsfoLD4hmcZ8FlXknUTYUOoTIDrZE3kAsAIJwhw2TjchTCqiaDABjqkAYwzUJS7UrpcmR%2F5vKMm71VqsOuJUm%2FwuVM7wYj%2BVtB%2BCzXCopvkgRQDxynvWO8SiGLOasXdXLo3Zi%2Fe0T%2F%2FekRPymtF9zL2Iv%2FyvTy9ujGX0eKx9NcTC%2BAdsGkZvEUNlvLkqCkWDFuLK9paOP%2F9izM0j1kW4cdnF0hXcabERqDe8h7djreoThbYE0%2Bf%2FQXHQI2UMuxsxVgShvCooax6ydxCAJsn&X-Amz-Signature=0bde2018f0d3515d2c4a1ca5e1390658f57eef4d0a98aaad3241232002828db1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4YH3DS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC3t%2BPk4RQabD1zb9kF2WV5kBnx1ksBHOw6h1yWigidjwIhAP60K4Hxt%2Fm35Z58KUvP2hcLguMbvwmzm5n0%2FFc4IhqYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPNfWvB4dD%2FgWE7IEq3APaBtuN0dbciwk%2FkKXLw%2F94SNQzMwrFB61WoBKWGlriuYT4S4g1N4Dym3QZTExOCPoc7FVryLUnufPyeHf0ZDVRGmNwPgD%2Fp3vB7S2ri33Ta4FyQ2vnhjAedMUuPml6J1h4RryDqNHPXSe4e5eJoEHbyEesCEFxvCpN02b7kgx6xcxzoYvLUcWknCeLMuSTEL28a0ul4NcJZn9r%2FMnrbDuYVXgdtgzVF0Gqe5gH4vThBYLzWVNcutVRGK1rohhGHZg7%2B2wQKSLSo3EFlpGEQvfQblK3WVQHzdVhELR4c2SkEvIBV6Bb8br94xsNATPCyjd8OmD%2BJeX99qdNbZxIbQK7WJPriBtopQDQS13b6Ups2GVB6QMMkRJWKt8iiFkzTF%2BFFK%2FHWHMi2jIDZdxaKzx51nqmdi5E8FCszQ2vLCVhSNIIYRzo9ClsygMmnOKr0sQc9UYk5mIek%2FYRI1tScY2JokQrM7GDn79YHo6LqQegAcMUBSCgOvj49yLQjWmImJEtmh1ZV%2FTsOX2NNBJaVaBZRX%2BGUKzG3tioVjPCGJjgM8un1fs08iTaWAA2yGZ9zyClBQC6hbVisQC%2FnGsfoLD4hmcZ8FlXknUTYUOoTIDrZE3kAsAIJwhw2TjchTCqiaDABjqkAYwzUJS7UrpcmR%2F5vKMm71VqsOuJUm%2FwuVM7wYj%2BVtB%2BCzXCopvkgRQDxynvWO8SiGLOasXdXLo3Zi%2Fe0T%2F%2FekRPymtF9zL2Iv%2FyvTy9ujGX0eKx9NcTC%2BAdsGkZvEUNlvLkqCkWDFuLK9paOP%2F9izM0j1kW4cdnF0hXcabERqDe8h7djreoThbYE0%2Bf%2FQXHQI2UMuxsxVgShvCooax6ydxCAJsn&X-Amz-Signature=838b42a509ff9fd4a60ff32b4963bf571b2c587a5785b1712e353f45a55a236e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4YH3DS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC3t%2BPk4RQabD1zb9kF2WV5kBnx1ksBHOw6h1yWigidjwIhAP60K4Hxt%2Fm35Z58KUvP2hcLguMbvwmzm5n0%2FFc4IhqYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPNfWvB4dD%2FgWE7IEq3APaBtuN0dbciwk%2FkKXLw%2F94SNQzMwrFB61WoBKWGlriuYT4S4g1N4Dym3QZTExOCPoc7FVryLUnufPyeHf0ZDVRGmNwPgD%2Fp3vB7S2ri33Ta4FyQ2vnhjAedMUuPml6J1h4RryDqNHPXSe4e5eJoEHbyEesCEFxvCpN02b7kgx6xcxzoYvLUcWknCeLMuSTEL28a0ul4NcJZn9r%2FMnrbDuYVXgdtgzVF0Gqe5gH4vThBYLzWVNcutVRGK1rohhGHZg7%2B2wQKSLSo3EFlpGEQvfQblK3WVQHzdVhELR4c2SkEvIBV6Bb8br94xsNATPCyjd8OmD%2BJeX99qdNbZxIbQK7WJPriBtopQDQS13b6Ups2GVB6QMMkRJWKt8iiFkzTF%2BFFK%2FHWHMi2jIDZdxaKzx51nqmdi5E8FCszQ2vLCVhSNIIYRzo9ClsygMmnOKr0sQc9UYk5mIek%2FYRI1tScY2JokQrM7GDn79YHo6LqQegAcMUBSCgOvj49yLQjWmImJEtmh1ZV%2FTsOX2NNBJaVaBZRX%2BGUKzG3tioVjPCGJjgM8un1fs08iTaWAA2yGZ9zyClBQC6hbVisQC%2FnGsfoLD4hmcZ8FlXknUTYUOoTIDrZE3kAsAIJwhw2TjchTCqiaDABjqkAYwzUJS7UrpcmR%2F5vKMm71VqsOuJUm%2FwuVM7wYj%2BVtB%2BCzXCopvkgRQDxynvWO8SiGLOasXdXLo3Zi%2Fe0T%2F%2FekRPymtF9zL2Iv%2FyvTy9ujGX0eKx9NcTC%2BAdsGkZvEUNlvLkqCkWDFuLK9paOP%2F9izM0j1kW4cdnF0hXcabERqDe8h7djreoThbYE0%2Bf%2FQXHQI2UMuxsxVgShvCooax6ydxCAJsn&X-Amz-Signature=bb68db31320590a02bcbac029d290b1185c29367860ce43adac8219926e0b2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4YH3DS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC3t%2BPk4RQabD1zb9kF2WV5kBnx1ksBHOw6h1yWigidjwIhAP60K4Hxt%2Fm35Z58KUvP2hcLguMbvwmzm5n0%2FFc4IhqYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPNfWvB4dD%2FgWE7IEq3APaBtuN0dbciwk%2FkKXLw%2F94SNQzMwrFB61WoBKWGlriuYT4S4g1N4Dym3QZTExOCPoc7FVryLUnufPyeHf0ZDVRGmNwPgD%2Fp3vB7S2ri33Ta4FyQ2vnhjAedMUuPml6J1h4RryDqNHPXSe4e5eJoEHbyEesCEFxvCpN02b7kgx6xcxzoYvLUcWknCeLMuSTEL28a0ul4NcJZn9r%2FMnrbDuYVXgdtgzVF0Gqe5gH4vThBYLzWVNcutVRGK1rohhGHZg7%2B2wQKSLSo3EFlpGEQvfQblK3WVQHzdVhELR4c2SkEvIBV6Bb8br94xsNATPCyjd8OmD%2BJeX99qdNbZxIbQK7WJPriBtopQDQS13b6Ups2GVB6QMMkRJWKt8iiFkzTF%2BFFK%2FHWHMi2jIDZdxaKzx51nqmdi5E8FCszQ2vLCVhSNIIYRzo9ClsygMmnOKr0sQc9UYk5mIek%2FYRI1tScY2JokQrM7GDn79YHo6LqQegAcMUBSCgOvj49yLQjWmImJEtmh1ZV%2FTsOX2NNBJaVaBZRX%2BGUKzG3tioVjPCGJjgM8un1fs08iTaWAA2yGZ9zyClBQC6hbVisQC%2FnGsfoLD4hmcZ8FlXknUTYUOoTIDrZE3kAsAIJwhw2TjchTCqiaDABjqkAYwzUJS7UrpcmR%2F5vKMm71VqsOuJUm%2FwuVM7wYj%2BVtB%2BCzXCopvkgRQDxynvWO8SiGLOasXdXLo3Zi%2Fe0T%2F%2FekRPymtF9zL2Iv%2FyvTy9ujGX0eKx9NcTC%2BAdsGkZvEUNlvLkqCkWDFuLK9paOP%2F9izM0j1kW4cdnF0hXcabERqDe8h7djreoThbYE0%2Bf%2FQXHQI2UMuxsxVgShvCooax6ydxCAJsn&X-Amz-Signature=ae9fb2ac94fe7b139d6aa5be1d8c63c515dedb9bd325f2c068a01786e39cc3ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
