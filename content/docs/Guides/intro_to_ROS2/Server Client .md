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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIQANEQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU2LdCAZnWEkJgDv%2F10xV1Ji2POU1j8T6MXQyHtbM7ZQIhALxxZjjAdNV%2FN58UGv6ve6u9G3hesluUhKjHcqTj9clZKv8DCG8QABoMNjM3NDIzMTgzODA1IgyUaJ5vUHrNxUGnQUwq3APIPtpYZfjuO4z8htptoU3AEGBO7Uxpq4%2BA9JAOic%2B62e81538uSVFd8o%2BMFexMGaf1g0hHYf%2BpQhgVZQUF0S0K7kZpczSqbwvfB5MgaigSXTbUUKhZCRoBUCoccXGprNtlGyWOKostejisFnA5TeErAmAO5MNCnA1HpprgpJqwmpw2e8U2ZzIKhRcDmRTXkKdoJ9LlnzWnDPfDxlRK%2FwiT6%2Fw5TPPGvDxpZUDPlTTCEgYpFLtyI2WlxHZQW0ne5DwGZ2TfH4UxU3iS3q6EO3Q6Cco8hOMuDeFvHKbbMoI3NRDAOu0GEm8kD9awkS4SXLbEIKXFgFCnyUc8lBl%2Brr4UcBhnUJmJKJQcMgKeiSgZ8pfwNxRG4xtfHfFzeZzulLQ4Mr9N89MrhsR12xZX48a9YQ0Nv9H9rjuEc4rQJM%2F0CUgWEkPoH1MGZI7FPxI1In0%2FfwPyhoa00xWPbTvJiLvCnoP%2FRe%2BC0XqWUbGPSC5shLpt7qIu0rzgVHJ4V8xBQztef290einUkijr4d%2Blw5dIOUB7PwIDXseY5i74JSPch%2FNG1gHRj8IqvOvHOqdNt6A5AIR2RKuxlvJlkBS23gEvcz4%2FjJque3x%2BbAZBgiLYd0gwN8Kayf0N1oVssTDMk8TCBjqkAYoRVCG3o6a8aVapMeivaHJEr%2B8lVVJLPo0gyTtkDdhYEsgTiw9dgLRkEvg7gqze2ihqe6mnsHVFcTO2aTBM%2BeT9U3n9QzJAGs1zdFrAxGXTVxk5WNhGdPNOH5JiA9nr6NVOPiLGKhlj8%2Ffi533383%2FLoTsmjMjIXzA5KQkLwHyIQ9VK2kSodVEnvYnXqnQYJaYg1gB%2FoMU8QMbWNq%2FEFOfmhavu&X-Amz-Signature=d24379312bb727e4c2dc5124f1f9592b4774b1b4c58efce84996764b1bf6cbe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIQANEQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU2LdCAZnWEkJgDv%2F10xV1Ji2POU1j8T6MXQyHtbM7ZQIhALxxZjjAdNV%2FN58UGv6ve6u9G3hesluUhKjHcqTj9clZKv8DCG8QABoMNjM3NDIzMTgzODA1IgyUaJ5vUHrNxUGnQUwq3APIPtpYZfjuO4z8htptoU3AEGBO7Uxpq4%2BA9JAOic%2B62e81538uSVFd8o%2BMFexMGaf1g0hHYf%2BpQhgVZQUF0S0K7kZpczSqbwvfB5MgaigSXTbUUKhZCRoBUCoccXGprNtlGyWOKostejisFnA5TeErAmAO5MNCnA1HpprgpJqwmpw2e8U2ZzIKhRcDmRTXkKdoJ9LlnzWnDPfDxlRK%2FwiT6%2Fw5TPPGvDxpZUDPlTTCEgYpFLtyI2WlxHZQW0ne5DwGZ2TfH4UxU3iS3q6EO3Q6Cco8hOMuDeFvHKbbMoI3NRDAOu0GEm8kD9awkS4SXLbEIKXFgFCnyUc8lBl%2Brr4UcBhnUJmJKJQcMgKeiSgZ8pfwNxRG4xtfHfFzeZzulLQ4Mr9N89MrhsR12xZX48a9YQ0Nv9H9rjuEc4rQJM%2F0CUgWEkPoH1MGZI7FPxI1In0%2FfwPyhoa00xWPbTvJiLvCnoP%2FRe%2BC0XqWUbGPSC5shLpt7qIu0rzgVHJ4V8xBQztef290einUkijr4d%2Blw5dIOUB7PwIDXseY5i74JSPch%2FNG1gHRj8IqvOvHOqdNt6A5AIR2RKuxlvJlkBS23gEvcz4%2FjJque3x%2BbAZBgiLYd0gwN8Kayf0N1oVssTDMk8TCBjqkAYoRVCG3o6a8aVapMeivaHJEr%2B8lVVJLPo0gyTtkDdhYEsgTiw9dgLRkEvg7gqze2ihqe6mnsHVFcTO2aTBM%2BeT9U3n9QzJAGs1zdFrAxGXTVxk5WNhGdPNOH5JiA9nr6NVOPiLGKhlj8%2Ffi533383%2FLoTsmjMjIXzA5KQkLwHyIQ9VK2kSodVEnvYnXqnQYJaYg1gB%2FoMU8QMbWNq%2FEFOfmhavu&X-Amz-Signature=7e4baaec107fc74fdcb34463f9e3aa47feb998e89d6774dbdfd07fe3d9403c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIQANEQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU2LdCAZnWEkJgDv%2F10xV1Ji2POU1j8T6MXQyHtbM7ZQIhALxxZjjAdNV%2FN58UGv6ve6u9G3hesluUhKjHcqTj9clZKv8DCG8QABoMNjM3NDIzMTgzODA1IgyUaJ5vUHrNxUGnQUwq3APIPtpYZfjuO4z8htptoU3AEGBO7Uxpq4%2BA9JAOic%2B62e81538uSVFd8o%2BMFexMGaf1g0hHYf%2BpQhgVZQUF0S0K7kZpczSqbwvfB5MgaigSXTbUUKhZCRoBUCoccXGprNtlGyWOKostejisFnA5TeErAmAO5MNCnA1HpprgpJqwmpw2e8U2ZzIKhRcDmRTXkKdoJ9LlnzWnDPfDxlRK%2FwiT6%2Fw5TPPGvDxpZUDPlTTCEgYpFLtyI2WlxHZQW0ne5DwGZ2TfH4UxU3iS3q6EO3Q6Cco8hOMuDeFvHKbbMoI3NRDAOu0GEm8kD9awkS4SXLbEIKXFgFCnyUc8lBl%2Brr4UcBhnUJmJKJQcMgKeiSgZ8pfwNxRG4xtfHfFzeZzulLQ4Mr9N89MrhsR12xZX48a9YQ0Nv9H9rjuEc4rQJM%2F0CUgWEkPoH1MGZI7FPxI1In0%2FfwPyhoa00xWPbTvJiLvCnoP%2FRe%2BC0XqWUbGPSC5shLpt7qIu0rzgVHJ4V8xBQztef290einUkijr4d%2Blw5dIOUB7PwIDXseY5i74JSPch%2FNG1gHRj8IqvOvHOqdNt6A5AIR2RKuxlvJlkBS23gEvcz4%2FjJque3x%2BbAZBgiLYd0gwN8Kayf0N1oVssTDMk8TCBjqkAYoRVCG3o6a8aVapMeivaHJEr%2B8lVVJLPo0gyTtkDdhYEsgTiw9dgLRkEvg7gqze2ihqe6mnsHVFcTO2aTBM%2BeT9U3n9QzJAGs1zdFrAxGXTVxk5WNhGdPNOH5JiA9nr6NVOPiLGKhlj8%2Ffi533383%2FLoTsmjMjIXzA5KQkLwHyIQ9VK2kSodVEnvYnXqnQYJaYg1gB%2FoMU8QMbWNq%2FEFOfmhavu&X-Amz-Signature=e95178806807f81a8ec20e6423d2519b82c2cff79217184871f04194ddd60f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIQANEQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU2LdCAZnWEkJgDv%2F10xV1Ji2POU1j8T6MXQyHtbM7ZQIhALxxZjjAdNV%2FN58UGv6ve6u9G3hesluUhKjHcqTj9clZKv8DCG8QABoMNjM3NDIzMTgzODA1IgyUaJ5vUHrNxUGnQUwq3APIPtpYZfjuO4z8htptoU3AEGBO7Uxpq4%2BA9JAOic%2B62e81538uSVFd8o%2BMFexMGaf1g0hHYf%2BpQhgVZQUF0S0K7kZpczSqbwvfB5MgaigSXTbUUKhZCRoBUCoccXGprNtlGyWOKostejisFnA5TeErAmAO5MNCnA1HpprgpJqwmpw2e8U2ZzIKhRcDmRTXkKdoJ9LlnzWnDPfDxlRK%2FwiT6%2Fw5TPPGvDxpZUDPlTTCEgYpFLtyI2WlxHZQW0ne5DwGZ2TfH4UxU3iS3q6EO3Q6Cco8hOMuDeFvHKbbMoI3NRDAOu0GEm8kD9awkS4SXLbEIKXFgFCnyUc8lBl%2Brr4UcBhnUJmJKJQcMgKeiSgZ8pfwNxRG4xtfHfFzeZzulLQ4Mr9N89MrhsR12xZX48a9YQ0Nv9H9rjuEc4rQJM%2F0CUgWEkPoH1MGZI7FPxI1In0%2FfwPyhoa00xWPbTvJiLvCnoP%2FRe%2BC0XqWUbGPSC5shLpt7qIu0rzgVHJ4V8xBQztef290einUkijr4d%2Blw5dIOUB7PwIDXseY5i74JSPch%2FNG1gHRj8IqvOvHOqdNt6A5AIR2RKuxlvJlkBS23gEvcz4%2FjJque3x%2BbAZBgiLYd0gwN8Kayf0N1oVssTDMk8TCBjqkAYoRVCG3o6a8aVapMeivaHJEr%2B8lVVJLPo0gyTtkDdhYEsgTiw9dgLRkEvg7gqze2ihqe6mnsHVFcTO2aTBM%2BeT9U3n9QzJAGs1zdFrAxGXTVxk5WNhGdPNOH5JiA9nr6NVOPiLGKhlj8%2Ffi533383%2FLoTsmjMjIXzA5KQkLwHyIQ9VK2kSodVEnvYnXqnQYJaYg1gB%2FoMU8QMbWNq%2FEFOfmhavu&X-Amz-Signature=658cc3b846165a4b4aeef884c401af01217e7403b591e1fbeb2a06a0c667c375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIQANEQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU2LdCAZnWEkJgDv%2F10xV1Ji2POU1j8T6MXQyHtbM7ZQIhALxxZjjAdNV%2FN58UGv6ve6u9G3hesluUhKjHcqTj9clZKv8DCG8QABoMNjM3NDIzMTgzODA1IgyUaJ5vUHrNxUGnQUwq3APIPtpYZfjuO4z8htptoU3AEGBO7Uxpq4%2BA9JAOic%2B62e81538uSVFd8o%2BMFexMGaf1g0hHYf%2BpQhgVZQUF0S0K7kZpczSqbwvfB5MgaigSXTbUUKhZCRoBUCoccXGprNtlGyWOKostejisFnA5TeErAmAO5MNCnA1HpprgpJqwmpw2e8U2ZzIKhRcDmRTXkKdoJ9LlnzWnDPfDxlRK%2FwiT6%2Fw5TPPGvDxpZUDPlTTCEgYpFLtyI2WlxHZQW0ne5DwGZ2TfH4UxU3iS3q6EO3Q6Cco8hOMuDeFvHKbbMoI3NRDAOu0GEm8kD9awkS4SXLbEIKXFgFCnyUc8lBl%2Brr4UcBhnUJmJKJQcMgKeiSgZ8pfwNxRG4xtfHfFzeZzulLQ4Mr9N89MrhsR12xZX48a9YQ0Nv9H9rjuEc4rQJM%2F0CUgWEkPoH1MGZI7FPxI1In0%2FfwPyhoa00xWPbTvJiLvCnoP%2FRe%2BC0XqWUbGPSC5shLpt7qIu0rzgVHJ4V8xBQztef290einUkijr4d%2Blw5dIOUB7PwIDXseY5i74JSPch%2FNG1gHRj8IqvOvHOqdNt6A5AIR2RKuxlvJlkBS23gEvcz4%2FjJque3x%2BbAZBgiLYd0gwN8Kayf0N1oVssTDMk8TCBjqkAYoRVCG3o6a8aVapMeivaHJEr%2B8lVVJLPo0gyTtkDdhYEsgTiw9dgLRkEvg7gqze2ihqe6mnsHVFcTO2aTBM%2BeT9U3n9QzJAGs1zdFrAxGXTVxk5WNhGdPNOH5JiA9nr6NVOPiLGKhlj8%2Ffi533383%2FLoTsmjMjIXzA5KQkLwHyIQ9VK2kSodVEnvYnXqnQYJaYg1gB%2FoMU8QMbWNq%2FEFOfmhavu&X-Amz-Signature=0160fc2dd2d03df078c6defe1c5a1b561d971e98452d4d3daae920304e6fe726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
