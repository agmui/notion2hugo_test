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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLCEV7S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCz7f8vBeS9jsQv5yKIK%2F8XGVm8fag1u8iUExa%2F%2BfrM2QIhANItiA0RdERrjL%2Fndxe9ygJDwxKoZwatdbEZKtqkAtmvKv8DCHAQABoMNjM3NDIzMTgzODA1Igz3%2BsTnKYWUkHhkRTgq3ANwNRgS3sPPy4jyi9%2BA%2BFiTG8RlWYIWHz32vIrv9cT1EXlzxeXtfnd5lVnJ2A222L%2FJcyOqSw337QPT%2B1ftgiBK8nSutvuVCQb1B8UhgG3rerW2skOk%2BdD1RbJcVtId6Pm9R%2F8J%2BlpqBUqHWYtk5X%2Fydva20QfLQ1yn3dpu51RECoRLrIlnNSW1HqKKFxZN%2FCDZZUI0MeVFDENM9IfKyyDUBYt6VFbqrtslOy9nXo%2BOk2KURYGkZymvbbP7Wq0GCtBNozHYSv5z9aXKQdCE90%2FgnHJGyj%2BkVWFJ1WEzJEPW%2B5X71%2FThHSPU2y4MWa6EGMoWDXeMe03UAGoO14gQtZ%2BCd1MxOg6y14wuEXvI1Gil3puoUeJIESJtzT%2BzgzApWhECGjR9ZBsmfyFv3HoWaiTGJg6XQVYi2tCmBUFxR9TyAHT5Eb3LqNMtHZshw75N5ezY6mCQ9o8hoUZA9S4Zvry2DZYpwyiK%2B7NXSo%2FcnMbpjgO%2BHqR1yaGtYaY4frdlsGkFzr1TsOYOxOeV4%2FFroVAoOyy3YB%2BNAVMjDHYHvBp5gWQL7bNakP4NGC6DoqmkTZTwKlGtFcp3FmblAhjXz14EZ48wJF0yKzFce29CEvIY4hx3IWcfSoW4cf%2BhhTDJqp6%2FBjqkARcbY7leG0M7%2BZ3M6Vs00RnJzpn5cuT1kETnyIJ8b1MyczwYcStRLeZOGSWzyGvabokBE%2BZ1AJAAusKHmaFn1Vs0Jsva8z0OX%2FzGw0H6KBZkaHmxyuuKKraqXREpY%2BAQ7ppXfzhNUAUUsZp%2Fy9vz04tV6BDfmJAwWpxEuQX9DXdiRzU6eh59B7uv93SawkUD4zqGF%2FB3wA7akuCvlOimaOcwPu3M&X-Amz-Signature=1cfc003c25500d485c2e8e8c251ebd472ec76dd57a177051227076b46da15f80&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLCEV7S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCz7f8vBeS9jsQv5yKIK%2F8XGVm8fag1u8iUExa%2F%2BfrM2QIhANItiA0RdERrjL%2Fndxe9ygJDwxKoZwatdbEZKtqkAtmvKv8DCHAQABoMNjM3NDIzMTgzODA1Igz3%2BsTnKYWUkHhkRTgq3ANwNRgS3sPPy4jyi9%2BA%2BFiTG8RlWYIWHz32vIrv9cT1EXlzxeXtfnd5lVnJ2A222L%2FJcyOqSw337QPT%2B1ftgiBK8nSutvuVCQb1B8UhgG3rerW2skOk%2BdD1RbJcVtId6Pm9R%2F8J%2BlpqBUqHWYtk5X%2Fydva20QfLQ1yn3dpu51RECoRLrIlnNSW1HqKKFxZN%2FCDZZUI0MeVFDENM9IfKyyDUBYt6VFbqrtslOy9nXo%2BOk2KURYGkZymvbbP7Wq0GCtBNozHYSv5z9aXKQdCE90%2FgnHJGyj%2BkVWFJ1WEzJEPW%2B5X71%2FThHSPU2y4MWa6EGMoWDXeMe03UAGoO14gQtZ%2BCd1MxOg6y14wuEXvI1Gil3puoUeJIESJtzT%2BzgzApWhECGjR9ZBsmfyFv3HoWaiTGJg6XQVYi2tCmBUFxR9TyAHT5Eb3LqNMtHZshw75N5ezY6mCQ9o8hoUZA9S4Zvry2DZYpwyiK%2B7NXSo%2FcnMbpjgO%2BHqR1yaGtYaY4frdlsGkFzr1TsOYOxOeV4%2FFroVAoOyy3YB%2BNAVMjDHYHvBp5gWQL7bNakP4NGC6DoqmkTZTwKlGtFcp3FmblAhjXz14EZ48wJF0yKzFce29CEvIY4hx3IWcfSoW4cf%2BhhTDJqp6%2FBjqkARcbY7leG0M7%2BZ3M6Vs00RnJzpn5cuT1kETnyIJ8b1MyczwYcStRLeZOGSWzyGvabokBE%2BZ1AJAAusKHmaFn1Vs0Jsva8z0OX%2FzGw0H6KBZkaHmxyuuKKraqXREpY%2BAQ7ppXfzhNUAUUsZp%2Fy9vz04tV6BDfmJAwWpxEuQX9DXdiRzU6eh59B7uv93SawkUD4zqGF%2FB3wA7akuCvlOimaOcwPu3M&X-Amz-Signature=2a2d18b1e95d0353b34cddcbb7bd238391f7c07598dbfdfccfd3637903e27c18&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLCEV7S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCz7f8vBeS9jsQv5yKIK%2F8XGVm8fag1u8iUExa%2F%2BfrM2QIhANItiA0RdERrjL%2Fndxe9ygJDwxKoZwatdbEZKtqkAtmvKv8DCHAQABoMNjM3NDIzMTgzODA1Igz3%2BsTnKYWUkHhkRTgq3ANwNRgS3sPPy4jyi9%2BA%2BFiTG8RlWYIWHz32vIrv9cT1EXlzxeXtfnd5lVnJ2A222L%2FJcyOqSw337QPT%2B1ftgiBK8nSutvuVCQb1B8UhgG3rerW2skOk%2BdD1RbJcVtId6Pm9R%2F8J%2BlpqBUqHWYtk5X%2Fydva20QfLQ1yn3dpu51RECoRLrIlnNSW1HqKKFxZN%2FCDZZUI0MeVFDENM9IfKyyDUBYt6VFbqrtslOy9nXo%2BOk2KURYGkZymvbbP7Wq0GCtBNozHYSv5z9aXKQdCE90%2FgnHJGyj%2BkVWFJ1WEzJEPW%2B5X71%2FThHSPU2y4MWa6EGMoWDXeMe03UAGoO14gQtZ%2BCd1MxOg6y14wuEXvI1Gil3puoUeJIESJtzT%2BzgzApWhECGjR9ZBsmfyFv3HoWaiTGJg6XQVYi2tCmBUFxR9TyAHT5Eb3LqNMtHZshw75N5ezY6mCQ9o8hoUZA9S4Zvry2DZYpwyiK%2B7NXSo%2FcnMbpjgO%2BHqR1yaGtYaY4frdlsGkFzr1TsOYOxOeV4%2FFroVAoOyy3YB%2BNAVMjDHYHvBp5gWQL7bNakP4NGC6DoqmkTZTwKlGtFcp3FmblAhjXz14EZ48wJF0yKzFce29CEvIY4hx3IWcfSoW4cf%2BhhTDJqp6%2FBjqkARcbY7leG0M7%2BZ3M6Vs00RnJzpn5cuT1kETnyIJ8b1MyczwYcStRLeZOGSWzyGvabokBE%2BZ1AJAAusKHmaFn1Vs0Jsva8z0OX%2FzGw0H6KBZkaHmxyuuKKraqXREpY%2BAQ7ppXfzhNUAUUsZp%2Fy9vz04tV6BDfmJAwWpxEuQX9DXdiRzU6eh59B7uv93SawkUD4zqGF%2FB3wA7akuCvlOimaOcwPu3M&X-Amz-Signature=df9e5833fe5178d3e55a6d7a849478d48ffdc73ca1c016e208970c73ad842459&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLCEV7S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCz7f8vBeS9jsQv5yKIK%2F8XGVm8fag1u8iUExa%2F%2BfrM2QIhANItiA0RdERrjL%2Fndxe9ygJDwxKoZwatdbEZKtqkAtmvKv8DCHAQABoMNjM3NDIzMTgzODA1Igz3%2BsTnKYWUkHhkRTgq3ANwNRgS3sPPy4jyi9%2BA%2BFiTG8RlWYIWHz32vIrv9cT1EXlzxeXtfnd5lVnJ2A222L%2FJcyOqSw337QPT%2B1ftgiBK8nSutvuVCQb1B8UhgG3rerW2skOk%2BdD1RbJcVtId6Pm9R%2F8J%2BlpqBUqHWYtk5X%2Fydva20QfLQ1yn3dpu51RECoRLrIlnNSW1HqKKFxZN%2FCDZZUI0MeVFDENM9IfKyyDUBYt6VFbqrtslOy9nXo%2BOk2KURYGkZymvbbP7Wq0GCtBNozHYSv5z9aXKQdCE90%2FgnHJGyj%2BkVWFJ1WEzJEPW%2B5X71%2FThHSPU2y4MWa6EGMoWDXeMe03UAGoO14gQtZ%2BCd1MxOg6y14wuEXvI1Gil3puoUeJIESJtzT%2BzgzApWhECGjR9ZBsmfyFv3HoWaiTGJg6XQVYi2tCmBUFxR9TyAHT5Eb3LqNMtHZshw75N5ezY6mCQ9o8hoUZA9S4Zvry2DZYpwyiK%2B7NXSo%2FcnMbpjgO%2BHqR1yaGtYaY4frdlsGkFzr1TsOYOxOeV4%2FFroVAoOyy3YB%2BNAVMjDHYHvBp5gWQL7bNakP4NGC6DoqmkTZTwKlGtFcp3FmblAhjXz14EZ48wJF0yKzFce29CEvIY4hx3IWcfSoW4cf%2BhhTDJqp6%2FBjqkARcbY7leG0M7%2BZ3M6Vs00RnJzpn5cuT1kETnyIJ8b1MyczwYcStRLeZOGSWzyGvabokBE%2BZ1AJAAusKHmaFn1Vs0Jsva8z0OX%2FzGw0H6KBZkaHmxyuuKKraqXREpY%2BAQ7ppXfzhNUAUUsZp%2Fy9vz04tV6BDfmJAwWpxEuQX9DXdiRzU6eh59B7uv93SawkUD4zqGF%2FB3wA7akuCvlOimaOcwPu3M&X-Amz-Signature=bf5087f2a08e8315ba86095eae3df965d3cc67f91b75a1db310b49614c2adb50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLCEV7S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCz7f8vBeS9jsQv5yKIK%2F8XGVm8fag1u8iUExa%2F%2BfrM2QIhANItiA0RdERrjL%2Fndxe9ygJDwxKoZwatdbEZKtqkAtmvKv8DCHAQABoMNjM3NDIzMTgzODA1Igz3%2BsTnKYWUkHhkRTgq3ANwNRgS3sPPy4jyi9%2BA%2BFiTG8RlWYIWHz32vIrv9cT1EXlzxeXtfnd5lVnJ2A222L%2FJcyOqSw337QPT%2B1ftgiBK8nSutvuVCQb1B8UhgG3rerW2skOk%2BdD1RbJcVtId6Pm9R%2F8J%2BlpqBUqHWYtk5X%2Fydva20QfLQ1yn3dpu51RECoRLrIlnNSW1HqKKFxZN%2FCDZZUI0MeVFDENM9IfKyyDUBYt6VFbqrtslOy9nXo%2BOk2KURYGkZymvbbP7Wq0GCtBNozHYSv5z9aXKQdCE90%2FgnHJGyj%2BkVWFJ1WEzJEPW%2B5X71%2FThHSPU2y4MWa6EGMoWDXeMe03UAGoO14gQtZ%2BCd1MxOg6y14wuEXvI1Gil3puoUeJIESJtzT%2BzgzApWhECGjR9ZBsmfyFv3HoWaiTGJg6XQVYi2tCmBUFxR9TyAHT5Eb3LqNMtHZshw75N5ezY6mCQ9o8hoUZA9S4Zvry2DZYpwyiK%2B7NXSo%2FcnMbpjgO%2BHqR1yaGtYaY4frdlsGkFzr1TsOYOxOeV4%2FFroVAoOyy3YB%2BNAVMjDHYHvBp5gWQL7bNakP4NGC6DoqmkTZTwKlGtFcp3FmblAhjXz14EZ48wJF0yKzFce29CEvIY4hx3IWcfSoW4cf%2BhhTDJqp6%2FBjqkARcbY7leG0M7%2BZ3M6Vs00RnJzpn5cuT1kETnyIJ8b1MyczwYcStRLeZOGSWzyGvabokBE%2BZ1AJAAusKHmaFn1Vs0Jsva8z0OX%2FzGw0H6KBZkaHmxyuuKKraqXREpY%2BAQ7ppXfzhNUAUUsZp%2Fy9vz04tV6BDfmJAwWpxEuQX9DXdiRzU6eh59B7uv93SawkUD4zqGF%2FB3wA7akuCvlOimaOcwPu3M&X-Amz-Signature=146ef739bc0d03f73a995f22ae38a38aca74b00a163a46b39ce6eddeff28affa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
