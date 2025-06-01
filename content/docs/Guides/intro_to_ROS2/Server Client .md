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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMO7HG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCJZnIovNcqz1Q3h7l%2F6jsRmoumga3F0Axn5FlALd4erQIgMEpcVXe%2B%2BtAxPJZQctgu%2FORyYs%2B9memI8zZtSpzGjzUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJId19DrYxEpHy%2B85SrcA5lEcbXOx9bZuZktSB8wio04ej8JGV6WbGe7UlfOzmuNMJ2UQGJnk1UIa5TGbKA6dERTPIarhJImt6PuVHTBviPNq%2BaEnZlDY%2BYtthUzX408YAU39ncfSzJqheBB4XvYN9r%2BfdE%2Fo9hcB7njpEoKxS8PsIrkgugfs00wltFybJu%2F64Uag1gJRovyfdyNH75TDvk9hm1LjOFz3kB5a6Zjo7bs788f8BMb7W1v8yJajwcjIVSYXH0fntredKzCjvu%2Fnpppw17NRq%2F7G3E%2BuCpt5NkIx%2F5wQ%2FqpuRmGDxDHA6vdXalH8QlNiGUd9XPN6xY5OsYzps%2FL%2FlqXk2HJUTln0SwZcDnZkYP3f33ZIovHqRuIFK25PayeSAsN%2FSYTZgmgJ%2B2VgmOzdLuIOpHImzn717lrpEFDYic3P8J9I%2BLPbVnRvi%2Fb%2FEFCJOoih%2FF4WcCulXMR5lgTWdbf64ZlNKOpRd%2F6k8lj2scjrfyrVNiLdbGGiP1c0qJLmXPFzQ0BIGSmfImpAhh%2FLLp6lP1%2FzFkl6XVx0iXPwV5fedK8y5YE1Ui60MeLVIT3Envju42PQCfL61h60%2FNl2uLAIqnicK49Ua2m%2BsnOd70gUZ%2BQTrVyxp%2BnwMhYtYz997wuCGP5MNqP8sEGOqUB%2FMzxQS8582k2AfaKeZlogN3DfpVRYEKRwYqFtU32qUaHOrIowh9RyuRxd2dgImNZ9mzn6zj%2B7vRxxK9yHk7Ty%2FaIfeqYKUT5CJbLHkJjAE%2BRevKQXfpjg9%2FeGWu9KUiskQDVa6%2F050SPjc978LCaLM2ARF8a1WcMk6UQIdQ9yK7YFLtU0i3LsACIH65U9fOU2wH9zupV8PG3cIGVu2iCWjMbxm%2Fv&X-Amz-Signature=c6ef06834ef93a3c1048fd7df5ec6cb5b5a675ff0e21abe0099a68ab4e3ca583&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMO7HG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCJZnIovNcqz1Q3h7l%2F6jsRmoumga3F0Axn5FlALd4erQIgMEpcVXe%2B%2BtAxPJZQctgu%2FORyYs%2B9memI8zZtSpzGjzUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJId19DrYxEpHy%2B85SrcA5lEcbXOx9bZuZktSB8wio04ej8JGV6WbGe7UlfOzmuNMJ2UQGJnk1UIa5TGbKA6dERTPIarhJImt6PuVHTBviPNq%2BaEnZlDY%2BYtthUzX408YAU39ncfSzJqheBB4XvYN9r%2BfdE%2Fo9hcB7njpEoKxS8PsIrkgugfs00wltFybJu%2F64Uag1gJRovyfdyNH75TDvk9hm1LjOFz3kB5a6Zjo7bs788f8BMb7W1v8yJajwcjIVSYXH0fntredKzCjvu%2Fnpppw17NRq%2F7G3E%2BuCpt5NkIx%2F5wQ%2FqpuRmGDxDHA6vdXalH8QlNiGUd9XPN6xY5OsYzps%2FL%2FlqXk2HJUTln0SwZcDnZkYP3f33ZIovHqRuIFK25PayeSAsN%2FSYTZgmgJ%2B2VgmOzdLuIOpHImzn717lrpEFDYic3P8J9I%2BLPbVnRvi%2Fb%2FEFCJOoih%2FF4WcCulXMR5lgTWdbf64ZlNKOpRd%2F6k8lj2scjrfyrVNiLdbGGiP1c0qJLmXPFzQ0BIGSmfImpAhh%2FLLp6lP1%2FzFkl6XVx0iXPwV5fedK8y5YE1Ui60MeLVIT3Envju42PQCfL61h60%2FNl2uLAIqnicK49Ua2m%2BsnOd70gUZ%2BQTrVyxp%2BnwMhYtYz997wuCGP5MNqP8sEGOqUB%2FMzxQS8582k2AfaKeZlogN3DfpVRYEKRwYqFtU32qUaHOrIowh9RyuRxd2dgImNZ9mzn6zj%2B7vRxxK9yHk7Ty%2FaIfeqYKUT5CJbLHkJjAE%2BRevKQXfpjg9%2FeGWu9KUiskQDVa6%2F050SPjc978LCaLM2ARF8a1WcMk6UQIdQ9yK7YFLtU0i3LsACIH65U9fOU2wH9zupV8PG3cIGVu2iCWjMbxm%2Fv&X-Amz-Signature=f968691c619d814135bb2497b786e84966ca4786e97e767601cf3c9826a75c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMO7HG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCJZnIovNcqz1Q3h7l%2F6jsRmoumga3F0Axn5FlALd4erQIgMEpcVXe%2B%2BtAxPJZQctgu%2FORyYs%2B9memI8zZtSpzGjzUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJId19DrYxEpHy%2B85SrcA5lEcbXOx9bZuZktSB8wio04ej8JGV6WbGe7UlfOzmuNMJ2UQGJnk1UIa5TGbKA6dERTPIarhJImt6PuVHTBviPNq%2BaEnZlDY%2BYtthUzX408YAU39ncfSzJqheBB4XvYN9r%2BfdE%2Fo9hcB7njpEoKxS8PsIrkgugfs00wltFybJu%2F64Uag1gJRovyfdyNH75TDvk9hm1LjOFz3kB5a6Zjo7bs788f8BMb7W1v8yJajwcjIVSYXH0fntredKzCjvu%2Fnpppw17NRq%2F7G3E%2BuCpt5NkIx%2F5wQ%2FqpuRmGDxDHA6vdXalH8QlNiGUd9XPN6xY5OsYzps%2FL%2FlqXk2HJUTln0SwZcDnZkYP3f33ZIovHqRuIFK25PayeSAsN%2FSYTZgmgJ%2B2VgmOzdLuIOpHImzn717lrpEFDYic3P8J9I%2BLPbVnRvi%2Fb%2FEFCJOoih%2FF4WcCulXMR5lgTWdbf64ZlNKOpRd%2F6k8lj2scjrfyrVNiLdbGGiP1c0qJLmXPFzQ0BIGSmfImpAhh%2FLLp6lP1%2FzFkl6XVx0iXPwV5fedK8y5YE1Ui60MeLVIT3Envju42PQCfL61h60%2FNl2uLAIqnicK49Ua2m%2BsnOd70gUZ%2BQTrVyxp%2BnwMhYtYz997wuCGP5MNqP8sEGOqUB%2FMzxQS8582k2AfaKeZlogN3DfpVRYEKRwYqFtU32qUaHOrIowh9RyuRxd2dgImNZ9mzn6zj%2B7vRxxK9yHk7Ty%2FaIfeqYKUT5CJbLHkJjAE%2BRevKQXfpjg9%2FeGWu9KUiskQDVa6%2F050SPjc978LCaLM2ARF8a1WcMk6UQIdQ9yK7YFLtU0i3LsACIH65U9fOU2wH9zupV8PG3cIGVu2iCWjMbxm%2Fv&X-Amz-Signature=3a9c2e96bd2ae30b50c116726eaf832670c6401ba9d74290569bf026f9d962c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMO7HG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCJZnIovNcqz1Q3h7l%2F6jsRmoumga3F0Axn5FlALd4erQIgMEpcVXe%2B%2BtAxPJZQctgu%2FORyYs%2B9memI8zZtSpzGjzUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJId19DrYxEpHy%2B85SrcA5lEcbXOx9bZuZktSB8wio04ej8JGV6WbGe7UlfOzmuNMJ2UQGJnk1UIa5TGbKA6dERTPIarhJImt6PuVHTBviPNq%2BaEnZlDY%2BYtthUzX408YAU39ncfSzJqheBB4XvYN9r%2BfdE%2Fo9hcB7njpEoKxS8PsIrkgugfs00wltFybJu%2F64Uag1gJRovyfdyNH75TDvk9hm1LjOFz3kB5a6Zjo7bs788f8BMb7W1v8yJajwcjIVSYXH0fntredKzCjvu%2Fnpppw17NRq%2F7G3E%2BuCpt5NkIx%2F5wQ%2FqpuRmGDxDHA6vdXalH8QlNiGUd9XPN6xY5OsYzps%2FL%2FlqXk2HJUTln0SwZcDnZkYP3f33ZIovHqRuIFK25PayeSAsN%2FSYTZgmgJ%2B2VgmOzdLuIOpHImzn717lrpEFDYic3P8J9I%2BLPbVnRvi%2Fb%2FEFCJOoih%2FF4WcCulXMR5lgTWdbf64ZlNKOpRd%2F6k8lj2scjrfyrVNiLdbGGiP1c0qJLmXPFzQ0BIGSmfImpAhh%2FLLp6lP1%2FzFkl6XVx0iXPwV5fedK8y5YE1Ui60MeLVIT3Envju42PQCfL61h60%2FNl2uLAIqnicK49Ua2m%2BsnOd70gUZ%2BQTrVyxp%2BnwMhYtYz997wuCGP5MNqP8sEGOqUB%2FMzxQS8582k2AfaKeZlogN3DfpVRYEKRwYqFtU32qUaHOrIowh9RyuRxd2dgImNZ9mzn6zj%2B7vRxxK9yHk7Ty%2FaIfeqYKUT5CJbLHkJjAE%2BRevKQXfpjg9%2FeGWu9KUiskQDVa6%2F050SPjc978LCaLM2ARF8a1WcMk6UQIdQ9yK7YFLtU0i3LsACIH65U9fOU2wH9zupV8PG3cIGVu2iCWjMbxm%2Fv&X-Amz-Signature=6e3b5c7326862f21fa969cbc4b767e6a05658b6879b5829c4304d7bd141d53f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMO7HG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCJZnIovNcqz1Q3h7l%2F6jsRmoumga3F0Axn5FlALd4erQIgMEpcVXe%2B%2BtAxPJZQctgu%2FORyYs%2B9memI8zZtSpzGjzUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJId19DrYxEpHy%2B85SrcA5lEcbXOx9bZuZktSB8wio04ej8JGV6WbGe7UlfOzmuNMJ2UQGJnk1UIa5TGbKA6dERTPIarhJImt6PuVHTBviPNq%2BaEnZlDY%2BYtthUzX408YAU39ncfSzJqheBB4XvYN9r%2BfdE%2Fo9hcB7njpEoKxS8PsIrkgugfs00wltFybJu%2F64Uag1gJRovyfdyNH75TDvk9hm1LjOFz3kB5a6Zjo7bs788f8BMb7W1v8yJajwcjIVSYXH0fntredKzCjvu%2Fnpppw17NRq%2F7G3E%2BuCpt5NkIx%2F5wQ%2FqpuRmGDxDHA6vdXalH8QlNiGUd9XPN6xY5OsYzps%2FL%2FlqXk2HJUTln0SwZcDnZkYP3f33ZIovHqRuIFK25PayeSAsN%2FSYTZgmgJ%2B2VgmOzdLuIOpHImzn717lrpEFDYic3P8J9I%2BLPbVnRvi%2Fb%2FEFCJOoih%2FF4WcCulXMR5lgTWdbf64ZlNKOpRd%2F6k8lj2scjrfyrVNiLdbGGiP1c0qJLmXPFzQ0BIGSmfImpAhh%2FLLp6lP1%2FzFkl6XVx0iXPwV5fedK8y5YE1Ui60MeLVIT3Envju42PQCfL61h60%2FNl2uLAIqnicK49Ua2m%2BsnOd70gUZ%2BQTrVyxp%2BnwMhYtYz997wuCGP5MNqP8sEGOqUB%2FMzxQS8582k2AfaKeZlogN3DfpVRYEKRwYqFtU32qUaHOrIowh9RyuRxd2dgImNZ9mzn6zj%2B7vRxxK9yHk7Ty%2FaIfeqYKUT5CJbLHkJjAE%2BRevKQXfpjg9%2FeGWu9KUiskQDVa6%2F050SPjc978LCaLM2ARF8a1WcMk6UQIdQ9yK7YFLtU0i3LsACIH65U9fOU2wH9zupV8PG3cIGVu2iCWjMbxm%2Fv&X-Amz-Signature=7b9f5e4c7ce743e972a616a92de7ebf15651b5fdb4cd3c9f6bbe6f74587b258e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
