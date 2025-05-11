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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KU37OL7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxscf8VhSSwQdRqkDIfzhTg%2Bys2crulEGtkN7HqBio%2BwIhAPdCHJF2wkcNkzuBF%2BdUmz%2FDZI505yJyoHtkoB5WUZCPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEASuc5YnB631Y6CAq3ANZO7YR60Vqyo%2FYUyqbZ9Uhz%2FcQGPAO%2BGIPiovgUYI4ajwuZvRgJqAc8vEF49QrL4FGjSFaSaYIerjRVq2r7nYhVHbefkzqPfwurt70lirS0w9DwqGxUhTng7Ij%2FtmXCr8l15peE5X6Cxb%2Fmvhn%2Fj7xsYfByuuRhUfNHeH7FqNkNszA%2FtHSSvoh4kd227JeKG3TWAkDUJJUuo2lh0bZTa00VAAqiD7w6vWYG72UNz%2BjZcy%2BgGVqwdXCJtHaieh0x5hf2j78PLcwjBfmiXQs0NLE9QCf8NtDbkxyLyo2wBuLvF1fbtRiGBg9tBExrmA9hjHawFkesBIkT4IH9gXhRnodUvF82a1%2BxsDMy3DpqnfzNmtOtWZLgUhbNVSWcFmqK%2Br9T4llN5xiBjxcMH4ipsrL3M%2BMDysLdqoc8aL0a9%2B1poS3Bf%2B%2FlSah2qs31kwtGX43mU94L6ELHDfJ4trhszWm1yEfXumPci526TJi2xhE59nsP4Yx1bvoRG1uPC0LhWSRMtPSjIXrbtKjZCqTHhXYjf7qNqUB5%2BIplUpFqBG8r%2F4oNPZe%2FcYbfPf2lh62DOOPI8qogNzlZm6y4FocsPwQLv2Q7zkDxF24MTXSzwiutapjJgAMpUgmJccaWDDV3oDBBjqkAVcwJUalw9FPmiZWHc4VqCkSFZCm%2Fozt4Y2BskYhFdwtPjgCpR0c1haO048qihuAGbn9mNbWAny0yWYuqZzuC0tC5K3VtNlxhIpHnrNthpVHrSqHNfN1kcOCl0pPFdq9U6oUFgwVgx%2FMv4VhdnOXZjPKyHKlEUv9vfFfsLx5czpFnwFbzwmzOf9z61nL6KdEdwVK58VSXGCNN2EgNrIez7GUM9fs&X-Amz-Signature=7e35a8a199874b5968ddcd0cb8543bf2c6ec27e2dc6863558277a89746c02c67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KU37OL7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxscf8VhSSwQdRqkDIfzhTg%2Bys2crulEGtkN7HqBio%2BwIhAPdCHJF2wkcNkzuBF%2BdUmz%2FDZI505yJyoHtkoB5WUZCPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEASuc5YnB631Y6CAq3ANZO7YR60Vqyo%2FYUyqbZ9Uhz%2FcQGPAO%2BGIPiovgUYI4ajwuZvRgJqAc8vEF49QrL4FGjSFaSaYIerjRVq2r7nYhVHbefkzqPfwurt70lirS0w9DwqGxUhTng7Ij%2FtmXCr8l15peE5X6Cxb%2Fmvhn%2Fj7xsYfByuuRhUfNHeH7FqNkNszA%2FtHSSvoh4kd227JeKG3TWAkDUJJUuo2lh0bZTa00VAAqiD7w6vWYG72UNz%2BjZcy%2BgGVqwdXCJtHaieh0x5hf2j78PLcwjBfmiXQs0NLE9QCf8NtDbkxyLyo2wBuLvF1fbtRiGBg9tBExrmA9hjHawFkesBIkT4IH9gXhRnodUvF82a1%2BxsDMy3DpqnfzNmtOtWZLgUhbNVSWcFmqK%2Br9T4llN5xiBjxcMH4ipsrL3M%2BMDysLdqoc8aL0a9%2B1poS3Bf%2B%2FlSah2qs31kwtGX43mU94L6ELHDfJ4trhszWm1yEfXumPci526TJi2xhE59nsP4Yx1bvoRG1uPC0LhWSRMtPSjIXrbtKjZCqTHhXYjf7qNqUB5%2BIplUpFqBG8r%2F4oNPZe%2FcYbfPf2lh62DOOPI8qogNzlZm6y4FocsPwQLv2Q7zkDxF24MTXSzwiutapjJgAMpUgmJccaWDDV3oDBBjqkAVcwJUalw9FPmiZWHc4VqCkSFZCm%2Fozt4Y2BskYhFdwtPjgCpR0c1haO048qihuAGbn9mNbWAny0yWYuqZzuC0tC5K3VtNlxhIpHnrNthpVHrSqHNfN1kcOCl0pPFdq9U6oUFgwVgx%2FMv4VhdnOXZjPKyHKlEUv9vfFfsLx5czpFnwFbzwmzOf9z61nL6KdEdwVK58VSXGCNN2EgNrIez7GUM9fs&X-Amz-Signature=2e51ff430218614b9d7bcb44d5918e7c97be813eef6bb74ea3782a274347a873&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KU37OL7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxscf8VhSSwQdRqkDIfzhTg%2Bys2crulEGtkN7HqBio%2BwIhAPdCHJF2wkcNkzuBF%2BdUmz%2FDZI505yJyoHtkoB5WUZCPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEASuc5YnB631Y6CAq3ANZO7YR60Vqyo%2FYUyqbZ9Uhz%2FcQGPAO%2BGIPiovgUYI4ajwuZvRgJqAc8vEF49QrL4FGjSFaSaYIerjRVq2r7nYhVHbefkzqPfwurt70lirS0w9DwqGxUhTng7Ij%2FtmXCr8l15peE5X6Cxb%2Fmvhn%2Fj7xsYfByuuRhUfNHeH7FqNkNszA%2FtHSSvoh4kd227JeKG3TWAkDUJJUuo2lh0bZTa00VAAqiD7w6vWYG72UNz%2BjZcy%2BgGVqwdXCJtHaieh0x5hf2j78PLcwjBfmiXQs0NLE9QCf8NtDbkxyLyo2wBuLvF1fbtRiGBg9tBExrmA9hjHawFkesBIkT4IH9gXhRnodUvF82a1%2BxsDMy3DpqnfzNmtOtWZLgUhbNVSWcFmqK%2Br9T4llN5xiBjxcMH4ipsrL3M%2BMDysLdqoc8aL0a9%2B1poS3Bf%2B%2FlSah2qs31kwtGX43mU94L6ELHDfJ4trhszWm1yEfXumPci526TJi2xhE59nsP4Yx1bvoRG1uPC0LhWSRMtPSjIXrbtKjZCqTHhXYjf7qNqUB5%2BIplUpFqBG8r%2F4oNPZe%2FcYbfPf2lh62DOOPI8qogNzlZm6y4FocsPwQLv2Q7zkDxF24MTXSzwiutapjJgAMpUgmJccaWDDV3oDBBjqkAVcwJUalw9FPmiZWHc4VqCkSFZCm%2Fozt4Y2BskYhFdwtPjgCpR0c1haO048qihuAGbn9mNbWAny0yWYuqZzuC0tC5K3VtNlxhIpHnrNthpVHrSqHNfN1kcOCl0pPFdq9U6oUFgwVgx%2FMv4VhdnOXZjPKyHKlEUv9vfFfsLx5czpFnwFbzwmzOf9z61nL6KdEdwVK58VSXGCNN2EgNrIez7GUM9fs&X-Amz-Signature=95a1e06be617e601320dc343a78616fbee6b7cfec559fb5e95b7c63b464514b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KU37OL7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxscf8VhSSwQdRqkDIfzhTg%2Bys2crulEGtkN7HqBio%2BwIhAPdCHJF2wkcNkzuBF%2BdUmz%2FDZI505yJyoHtkoB5WUZCPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEASuc5YnB631Y6CAq3ANZO7YR60Vqyo%2FYUyqbZ9Uhz%2FcQGPAO%2BGIPiovgUYI4ajwuZvRgJqAc8vEF49QrL4FGjSFaSaYIerjRVq2r7nYhVHbefkzqPfwurt70lirS0w9DwqGxUhTng7Ij%2FtmXCr8l15peE5X6Cxb%2Fmvhn%2Fj7xsYfByuuRhUfNHeH7FqNkNszA%2FtHSSvoh4kd227JeKG3TWAkDUJJUuo2lh0bZTa00VAAqiD7w6vWYG72UNz%2BjZcy%2BgGVqwdXCJtHaieh0x5hf2j78PLcwjBfmiXQs0NLE9QCf8NtDbkxyLyo2wBuLvF1fbtRiGBg9tBExrmA9hjHawFkesBIkT4IH9gXhRnodUvF82a1%2BxsDMy3DpqnfzNmtOtWZLgUhbNVSWcFmqK%2Br9T4llN5xiBjxcMH4ipsrL3M%2BMDysLdqoc8aL0a9%2B1poS3Bf%2B%2FlSah2qs31kwtGX43mU94L6ELHDfJ4trhszWm1yEfXumPci526TJi2xhE59nsP4Yx1bvoRG1uPC0LhWSRMtPSjIXrbtKjZCqTHhXYjf7qNqUB5%2BIplUpFqBG8r%2F4oNPZe%2FcYbfPf2lh62DOOPI8qogNzlZm6y4FocsPwQLv2Q7zkDxF24MTXSzwiutapjJgAMpUgmJccaWDDV3oDBBjqkAVcwJUalw9FPmiZWHc4VqCkSFZCm%2Fozt4Y2BskYhFdwtPjgCpR0c1haO048qihuAGbn9mNbWAny0yWYuqZzuC0tC5K3VtNlxhIpHnrNthpVHrSqHNfN1kcOCl0pPFdq9U6oUFgwVgx%2FMv4VhdnOXZjPKyHKlEUv9vfFfsLx5czpFnwFbzwmzOf9z61nL6KdEdwVK58VSXGCNN2EgNrIez7GUM9fs&X-Amz-Signature=f03a1914514c49b96a21ec0ede78ac178ee36f9b09b7e5f79811430c378109f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KU37OL7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxscf8VhSSwQdRqkDIfzhTg%2Bys2crulEGtkN7HqBio%2BwIhAPdCHJF2wkcNkzuBF%2BdUmz%2FDZI505yJyoHtkoB5WUZCPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEASuc5YnB631Y6CAq3ANZO7YR60Vqyo%2FYUyqbZ9Uhz%2FcQGPAO%2BGIPiovgUYI4ajwuZvRgJqAc8vEF49QrL4FGjSFaSaYIerjRVq2r7nYhVHbefkzqPfwurt70lirS0w9DwqGxUhTng7Ij%2FtmXCr8l15peE5X6Cxb%2Fmvhn%2Fj7xsYfByuuRhUfNHeH7FqNkNszA%2FtHSSvoh4kd227JeKG3TWAkDUJJUuo2lh0bZTa00VAAqiD7w6vWYG72UNz%2BjZcy%2BgGVqwdXCJtHaieh0x5hf2j78PLcwjBfmiXQs0NLE9QCf8NtDbkxyLyo2wBuLvF1fbtRiGBg9tBExrmA9hjHawFkesBIkT4IH9gXhRnodUvF82a1%2BxsDMy3DpqnfzNmtOtWZLgUhbNVSWcFmqK%2Br9T4llN5xiBjxcMH4ipsrL3M%2BMDysLdqoc8aL0a9%2B1poS3Bf%2B%2FlSah2qs31kwtGX43mU94L6ELHDfJ4trhszWm1yEfXumPci526TJi2xhE59nsP4Yx1bvoRG1uPC0LhWSRMtPSjIXrbtKjZCqTHhXYjf7qNqUB5%2BIplUpFqBG8r%2F4oNPZe%2FcYbfPf2lh62DOOPI8qogNzlZm6y4FocsPwQLv2Q7zkDxF24MTXSzwiutapjJgAMpUgmJccaWDDV3oDBBjqkAVcwJUalw9FPmiZWHc4VqCkSFZCm%2Fozt4Y2BskYhFdwtPjgCpR0c1haO048qihuAGbn9mNbWAny0yWYuqZzuC0tC5K3VtNlxhIpHnrNthpVHrSqHNfN1kcOCl0pPFdq9U6oUFgwVgx%2FMv4VhdnOXZjPKyHKlEUv9vfFfsLx5czpFnwFbzwmzOf9z61nL6KdEdwVK58VSXGCNN2EgNrIez7GUM9fs&X-Amz-Signature=eb5640c40d2c39e13e27f9971190330b01e3b5cb37771fd84ca240889cafa893&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
