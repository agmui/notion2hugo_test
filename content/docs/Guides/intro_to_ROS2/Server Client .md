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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGW3HDK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPkva5gBeykhIHznJ0%2FMH9UDmjimbNGbyE8iIoST%2F%2FDgIhAI8SL0sXsD6KTTELW0asWo3wV%2BhT3F%2BiKiy86yt%2BFMRpKv8DCCkQABoMNjM3NDIzMTgzODA1Igxxl7L4fQaY0B%2Bq%2B%2FQq3AOVVRg2ndVKYKHGjaL7nrwUt%2FZLn%2F0W9sLn%2B2dGrP%2BRN1ZOqIvuzGOn2AHqKjSrcJ1fatH6pQnNoosPX2l81nc0XJaBMalk76scz%2Fdb9A4ZOAYPBHG9AbKucnw9OgC78Fx%2FTrFWurcV%2FyCNkMtONhZajutcMoA6Ro7RN0BCA%2Bzik%2F6wTvKF7CyV%2Bzw5g7FY7FIvxzEzIFNXV%2FEmrXjETUYo3%2Bb%2BxiEgGpeQYcOJ9ZUoxR8U7G8McMEJX5so%2FEWs3qpyMjCDPG9bNGBzZ4T%2Fh0v0FmqJYRNHECcqWFoxqzssydI7U2HKzW3CHsVxlzng4TqNF5qF%2B%2BLLBN%2FFKs%2Fp0v9V6DUPPwjqOyhzm9nAt8VtOsxciiFEqwZJCxDVvVLVh1AzpHjZLg9FOlz2Cp472VkG6QPPPFJdxG6FX%2FzpavegI2gEqygoj6ux74eWXiB8SzhaVriYaw%2BJ15ygHDeowXx5pwE21sf8kfHTfpgiIK%2FO3e2TV8JwjoFWBlcYth3wVz%2BOIhufmOisPCyDfzegztOKxFrGgkx0T22bVsYfZxn671gR6aVGN5GAEq2mtptDNGS9uYp2o0wpiCW9slMLj2l4gkZQgAoCwAdA6es2mHKJGlnrsOID7ANUueYo6zCf0OHABjqkAQWTCZYa9ILLi4HJTq9lND%2Ftpmf%2BfxZJRYLs276mjg80ZHpDwp%2BHa0DCK0JzdQPeFtV1OJD%2FqJAnZ6l88HxJIR5Ae%2BdGsb18N%2B9n4pCnPy9oC34MUNoxEjFKbYQTdlhyv5sjHDKEQNUyvUIJX9%2BSgKwfEXJeztSAwnBakm3aW2M5mTOPqOwAxvdB8shemV4HptwXDh4qTyiMW97tWfqQqouXnYj2&X-Amz-Signature=7e02a8ecdaf96be84509f12db4d450bf876989925025043344b2d61f84e30975&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGW3HDK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPkva5gBeykhIHznJ0%2FMH9UDmjimbNGbyE8iIoST%2F%2FDgIhAI8SL0sXsD6KTTELW0asWo3wV%2BhT3F%2BiKiy86yt%2BFMRpKv8DCCkQABoMNjM3NDIzMTgzODA1Igxxl7L4fQaY0B%2Bq%2B%2FQq3AOVVRg2ndVKYKHGjaL7nrwUt%2FZLn%2F0W9sLn%2B2dGrP%2BRN1ZOqIvuzGOn2AHqKjSrcJ1fatH6pQnNoosPX2l81nc0XJaBMalk76scz%2Fdb9A4ZOAYPBHG9AbKucnw9OgC78Fx%2FTrFWurcV%2FyCNkMtONhZajutcMoA6Ro7RN0BCA%2Bzik%2F6wTvKF7CyV%2Bzw5g7FY7FIvxzEzIFNXV%2FEmrXjETUYo3%2Bb%2BxiEgGpeQYcOJ9ZUoxR8U7G8McMEJX5so%2FEWs3qpyMjCDPG9bNGBzZ4T%2Fh0v0FmqJYRNHECcqWFoxqzssydI7U2HKzW3CHsVxlzng4TqNF5qF%2B%2BLLBN%2FFKs%2Fp0v9V6DUPPwjqOyhzm9nAt8VtOsxciiFEqwZJCxDVvVLVh1AzpHjZLg9FOlz2Cp472VkG6QPPPFJdxG6FX%2FzpavegI2gEqygoj6ux74eWXiB8SzhaVriYaw%2BJ15ygHDeowXx5pwE21sf8kfHTfpgiIK%2FO3e2TV8JwjoFWBlcYth3wVz%2BOIhufmOisPCyDfzegztOKxFrGgkx0T22bVsYfZxn671gR6aVGN5GAEq2mtptDNGS9uYp2o0wpiCW9slMLj2l4gkZQgAoCwAdA6es2mHKJGlnrsOID7ANUueYo6zCf0OHABjqkAQWTCZYa9ILLi4HJTq9lND%2Ftpmf%2BfxZJRYLs276mjg80ZHpDwp%2BHa0DCK0JzdQPeFtV1OJD%2FqJAnZ6l88HxJIR5Ae%2BdGsb18N%2B9n4pCnPy9oC34MUNoxEjFKbYQTdlhyv5sjHDKEQNUyvUIJX9%2BSgKwfEXJeztSAwnBakm3aW2M5mTOPqOwAxvdB8shemV4HptwXDh4qTyiMW97tWfqQqouXnYj2&X-Amz-Signature=cc183a5a31c773c1bb66072f4f870e1d8da1a1ef9ab0d46095528a5d34876825&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGW3HDK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPkva5gBeykhIHznJ0%2FMH9UDmjimbNGbyE8iIoST%2F%2FDgIhAI8SL0sXsD6KTTELW0asWo3wV%2BhT3F%2BiKiy86yt%2BFMRpKv8DCCkQABoMNjM3NDIzMTgzODA1Igxxl7L4fQaY0B%2Bq%2B%2FQq3AOVVRg2ndVKYKHGjaL7nrwUt%2FZLn%2F0W9sLn%2B2dGrP%2BRN1ZOqIvuzGOn2AHqKjSrcJ1fatH6pQnNoosPX2l81nc0XJaBMalk76scz%2Fdb9A4ZOAYPBHG9AbKucnw9OgC78Fx%2FTrFWurcV%2FyCNkMtONhZajutcMoA6Ro7RN0BCA%2Bzik%2F6wTvKF7CyV%2Bzw5g7FY7FIvxzEzIFNXV%2FEmrXjETUYo3%2Bb%2BxiEgGpeQYcOJ9ZUoxR8U7G8McMEJX5so%2FEWs3qpyMjCDPG9bNGBzZ4T%2Fh0v0FmqJYRNHECcqWFoxqzssydI7U2HKzW3CHsVxlzng4TqNF5qF%2B%2BLLBN%2FFKs%2Fp0v9V6DUPPwjqOyhzm9nAt8VtOsxciiFEqwZJCxDVvVLVh1AzpHjZLg9FOlz2Cp472VkG6QPPPFJdxG6FX%2FzpavegI2gEqygoj6ux74eWXiB8SzhaVriYaw%2BJ15ygHDeowXx5pwE21sf8kfHTfpgiIK%2FO3e2TV8JwjoFWBlcYth3wVz%2BOIhufmOisPCyDfzegztOKxFrGgkx0T22bVsYfZxn671gR6aVGN5GAEq2mtptDNGS9uYp2o0wpiCW9slMLj2l4gkZQgAoCwAdA6es2mHKJGlnrsOID7ANUueYo6zCf0OHABjqkAQWTCZYa9ILLi4HJTq9lND%2Ftpmf%2BfxZJRYLs276mjg80ZHpDwp%2BHa0DCK0JzdQPeFtV1OJD%2FqJAnZ6l88HxJIR5Ae%2BdGsb18N%2B9n4pCnPy9oC34MUNoxEjFKbYQTdlhyv5sjHDKEQNUyvUIJX9%2BSgKwfEXJeztSAwnBakm3aW2M5mTOPqOwAxvdB8shemV4HptwXDh4qTyiMW97tWfqQqouXnYj2&X-Amz-Signature=19501dce1d271a3c94907c51c7998255899fb986c4243e86dba8cdc99d7b8428&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGW3HDK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPkva5gBeykhIHznJ0%2FMH9UDmjimbNGbyE8iIoST%2F%2FDgIhAI8SL0sXsD6KTTELW0asWo3wV%2BhT3F%2BiKiy86yt%2BFMRpKv8DCCkQABoMNjM3NDIzMTgzODA1Igxxl7L4fQaY0B%2Bq%2B%2FQq3AOVVRg2ndVKYKHGjaL7nrwUt%2FZLn%2F0W9sLn%2B2dGrP%2BRN1ZOqIvuzGOn2AHqKjSrcJ1fatH6pQnNoosPX2l81nc0XJaBMalk76scz%2Fdb9A4ZOAYPBHG9AbKucnw9OgC78Fx%2FTrFWurcV%2FyCNkMtONhZajutcMoA6Ro7RN0BCA%2Bzik%2F6wTvKF7CyV%2Bzw5g7FY7FIvxzEzIFNXV%2FEmrXjETUYo3%2Bb%2BxiEgGpeQYcOJ9ZUoxR8U7G8McMEJX5so%2FEWs3qpyMjCDPG9bNGBzZ4T%2Fh0v0FmqJYRNHECcqWFoxqzssydI7U2HKzW3CHsVxlzng4TqNF5qF%2B%2BLLBN%2FFKs%2Fp0v9V6DUPPwjqOyhzm9nAt8VtOsxciiFEqwZJCxDVvVLVh1AzpHjZLg9FOlz2Cp472VkG6QPPPFJdxG6FX%2FzpavegI2gEqygoj6ux74eWXiB8SzhaVriYaw%2BJ15ygHDeowXx5pwE21sf8kfHTfpgiIK%2FO3e2TV8JwjoFWBlcYth3wVz%2BOIhufmOisPCyDfzegztOKxFrGgkx0T22bVsYfZxn671gR6aVGN5GAEq2mtptDNGS9uYp2o0wpiCW9slMLj2l4gkZQgAoCwAdA6es2mHKJGlnrsOID7ANUueYo6zCf0OHABjqkAQWTCZYa9ILLi4HJTq9lND%2Ftpmf%2BfxZJRYLs276mjg80ZHpDwp%2BHa0DCK0JzdQPeFtV1OJD%2FqJAnZ6l88HxJIR5Ae%2BdGsb18N%2B9n4pCnPy9oC34MUNoxEjFKbYQTdlhyv5sjHDKEQNUyvUIJX9%2BSgKwfEXJeztSAwnBakm3aW2M5mTOPqOwAxvdB8shemV4HptwXDh4qTyiMW97tWfqQqouXnYj2&X-Amz-Signature=afe28b9af6ca11283466787683b16572be5e5729c7c74fa3fa31f841cfe130d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGW3HDK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPkva5gBeykhIHznJ0%2FMH9UDmjimbNGbyE8iIoST%2F%2FDgIhAI8SL0sXsD6KTTELW0asWo3wV%2BhT3F%2BiKiy86yt%2BFMRpKv8DCCkQABoMNjM3NDIzMTgzODA1Igxxl7L4fQaY0B%2Bq%2B%2FQq3AOVVRg2ndVKYKHGjaL7nrwUt%2FZLn%2F0W9sLn%2B2dGrP%2BRN1ZOqIvuzGOn2AHqKjSrcJ1fatH6pQnNoosPX2l81nc0XJaBMalk76scz%2Fdb9A4ZOAYPBHG9AbKucnw9OgC78Fx%2FTrFWurcV%2FyCNkMtONhZajutcMoA6Ro7RN0BCA%2Bzik%2F6wTvKF7CyV%2Bzw5g7FY7FIvxzEzIFNXV%2FEmrXjETUYo3%2Bb%2BxiEgGpeQYcOJ9ZUoxR8U7G8McMEJX5so%2FEWs3qpyMjCDPG9bNGBzZ4T%2Fh0v0FmqJYRNHECcqWFoxqzssydI7U2HKzW3CHsVxlzng4TqNF5qF%2B%2BLLBN%2FFKs%2Fp0v9V6DUPPwjqOyhzm9nAt8VtOsxciiFEqwZJCxDVvVLVh1AzpHjZLg9FOlz2Cp472VkG6QPPPFJdxG6FX%2FzpavegI2gEqygoj6ux74eWXiB8SzhaVriYaw%2BJ15ygHDeowXx5pwE21sf8kfHTfpgiIK%2FO3e2TV8JwjoFWBlcYth3wVz%2BOIhufmOisPCyDfzegztOKxFrGgkx0T22bVsYfZxn671gR6aVGN5GAEq2mtptDNGS9uYp2o0wpiCW9slMLj2l4gkZQgAoCwAdA6es2mHKJGlnrsOID7ANUueYo6zCf0OHABjqkAQWTCZYa9ILLi4HJTq9lND%2Ftpmf%2BfxZJRYLs276mjg80ZHpDwp%2BHa0DCK0JzdQPeFtV1OJD%2FqJAnZ6l88HxJIR5Ae%2BdGsb18N%2B9n4pCnPy9oC34MUNoxEjFKbYQTdlhyv5sjHDKEQNUyvUIJX9%2BSgKwfEXJeztSAwnBakm3aW2M5mTOPqOwAxvdB8shemV4HptwXDh4qTyiMW97tWfqQqouXnYj2&X-Amz-Signature=57f785ad1ab15eb9e6f3fa9756d20fc47823b6487c0bef7f43861da3442b9bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
