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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSCEA6D%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVPXMY6EdEMhdHaDfPB3yoqYLlTnFXhVL4kKchpRuYlgIhAM4dgkxm2k49W1hEH3Fx5szB0ITcJUutx7IejGYPTWeqKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiCfvt3kLrshiGzsAq3AO8g4Ysd5MeIwG23aey1nMQkkGBZqOV%2BWtrOuHG9dUNo3WNWTnt713oUI0RM8rpu2a3Dk2RTgiksFxnxnS49wcSIA7Tl7wsazy8IZlix06LaV%2BY7uV8uajigiNK%2BPpYzzSj6BbBhVOw2SNhsSrG8cKWZqdnfJxOBySip7u7fIoPzWq148o7ardB8yuCpVWrX%2FLJASD0X6xPt8yIH9Gh8Uz07sqsUXyZInLhtgNmbQ3Oq%2BNQs94%2BJrF2ndRDtfl7HV5uA%2B0qjOdYHDF8M1eeyBz0j6ZDQbsUyYapBalQbgKeygymLSzBHqWf60%2BUJN5bZrVRbNpagXx3PLtzC%2FOx6eGxXl07PfWChhTOyzQ3yZd3MEQKktBWpG75O91QO5cSLNqiymFwT5EYuuhI9ZnZUKOxt%2F5HkAJB%2FpsEHYqy2BaTK4zZJP2QSF9c20mW63WmqJYYqJZw5%2F1MNH1u1hWPQm0%2BJtFli%2Bc1hEPYtM4%2BLeMj6tl3hOUyh2Fz%2BXFnDZyAzNZ89Adq8tG7eNCP3%2FktBli2o0bKPxGnSJ2Bji7hhLWaPLJm9Dt6OiehVr7CyKKYR2qF35XtNMAKQFExPGP4yroM2IM5csjYif4Y43tHKeDQQCnne%2Bld%2FWpNZt8ZFDDQvenBBjqkAaQGpWvLfO9vdIEzGWJKG3IJnqfshs9QP2ZnAXi%2FYFgKCChYJiAZ1uw5F7E48bSnTJ5vHpl%2Fh1huab1MiUO3iLKMcFnXeFR1Hlo0GPXsxY5AC4Lyi1MgH2pjIyKt8KCs6FHFwgrfkyygWiGFCXXXv%2FVOxC0faNU0VpicGlGRlGTsYvq%2FwWxN62ItPTb4mL0PZ7imCh9%2B6bDXKrubUCIAPE9TIg2b&X-Amz-Signature=122c0d256714f651c00925b3ca25c01c277c72d7ac26691f396d30c83e384ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSCEA6D%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVPXMY6EdEMhdHaDfPB3yoqYLlTnFXhVL4kKchpRuYlgIhAM4dgkxm2k49W1hEH3Fx5szB0ITcJUutx7IejGYPTWeqKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiCfvt3kLrshiGzsAq3AO8g4Ysd5MeIwG23aey1nMQkkGBZqOV%2BWtrOuHG9dUNo3WNWTnt713oUI0RM8rpu2a3Dk2RTgiksFxnxnS49wcSIA7Tl7wsazy8IZlix06LaV%2BY7uV8uajigiNK%2BPpYzzSj6BbBhVOw2SNhsSrG8cKWZqdnfJxOBySip7u7fIoPzWq148o7ardB8yuCpVWrX%2FLJASD0X6xPt8yIH9Gh8Uz07sqsUXyZInLhtgNmbQ3Oq%2BNQs94%2BJrF2ndRDtfl7HV5uA%2B0qjOdYHDF8M1eeyBz0j6ZDQbsUyYapBalQbgKeygymLSzBHqWf60%2BUJN5bZrVRbNpagXx3PLtzC%2FOx6eGxXl07PfWChhTOyzQ3yZd3MEQKktBWpG75O91QO5cSLNqiymFwT5EYuuhI9ZnZUKOxt%2F5HkAJB%2FpsEHYqy2BaTK4zZJP2QSF9c20mW63WmqJYYqJZw5%2F1MNH1u1hWPQm0%2BJtFli%2Bc1hEPYtM4%2BLeMj6tl3hOUyh2Fz%2BXFnDZyAzNZ89Adq8tG7eNCP3%2FktBli2o0bKPxGnSJ2Bji7hhLWaPLJm9Dt6OiehVr7CyKKYR2qF35XtNMAKQFExPGP4yroM2IM5csjYif4Y43tHKeDQQCnne%2Bld%2FWpNZt8ZFDDQvenBBjqkAaQGpWvLfO9vdIEzGWJKG3IJnqfshs9QP2ZnAXi%2FYFgKCChYJiAZ1uw5F7E48bSnTJ5vHpl%2Fh1huab1MiUO3iLKMcFnXeFR1Hlo0GPXsxY5AC4Lyi1MgH2pjIyKt8KCs6FHFwgrfkyygWiGFCXXXv%2FVOxC0faNU0VpicGlGRlGTsYvq%2FwWxN62ItPTb4mL0PZ7imCh9%2B6bDXKrubUCIAPE9TIg2b&X-Amz-Signature=f0153bf6035649983f9d05a8c3295c34008c0933fba2ee510596f5d81c87ddd3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSCEA6D%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVPXMY6EdEMhdHaDfPB3yoqYLlTnFXhVL4kKchpRuYlgIhAM4dgkxm2k49W1hEH3Fx5szB0ITcJUutx7IejGYPTWeqKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiCfvt3kLrshiGzsAq3AO8g4Ysd5MeIwG23aey1nMQkkGBZqOV%2BWtrOuHG9dUNo3WNWTnt713oUI0RM8rpu2a3Dk2RTgiksFxnxnS49wcSIA7Tl7wsazy8IZlix06LaV%2BY7uV8uajigiNK%2BPpYzzSj6BbBhVOw2SNhsSrG8cKWZqdnfJxOBySip7u7fIoPzWq148o7ardB8yuCpVWrX%2FLJASD0X6xPt8yIH9Gh8Uz07sqsUXyZInLhtgNmbQ3Oq%2BNQs94%2BJrF2ndRDtfl7HV5uA%2B0qjOdYHDF8M1eeyBz0j6ZDQbsUyYapBalQbgKeygymLSzBHqWf60%2BUJN5bZrVRbNpagXx3PLtzC%2FOx6eGxXl07PfWChhTOyzQ3yZd3MEQKktBWpG75O91QO5cSLNqiymFwT5EYuuhI9ZnZUKOxt%2F5HkAJB%2FpsEHYqy2BaTK4zZJP2QSF9c20mW63WmqJYYqJZw5%2F1MNH1u1hWPQm0%2BJtFli%2Bc1hEPYtM4%2BLeMj6tl3hOUyh2Fz%2BXFnDZyAzNZ89Adq8tG7eNCP3%2FktBli2o0bKPxGnSJ2Bji7hhLWaPLJm9Dt6OiehVr7CyKKYR2qF35XtNMAKQFExPGP4yroM2IM5csjYif4Y43tHKeDQQCnne%2Bld%2FWpNZt8ZFDDQvenBBjqkAaQGpWvLfO9vdIEzGWJKG3IJnqfshs9QP2ZnAXi%2FYFgKCChYJiAZ1uw5F7E48bSnTJ5vHpl%2Fh1huab1MiUO3iLKMcFnXeFR1Hlo0GPXsxY5AC4Lyi1MgH2pjIyKt8KCs6FHFwgrfkyygWiGFCXXXv%2FVOxC0faNU0VpicGlGRlGTsYvq%2FwWxN62ItPTb4mL0PZ7imCh9%2B6bDXKrubUCIAPE9TIg2b&X-Amz-Signature=95c94e32c5904fa22d7767e3b46287d7a63e8131435924c0be68c7832fdc053b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSCEA6D%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVPXMY6EdEMhdHaDfPB3yoqYLlTnFXhVL4kKchpRuYlgIhAM4dgkxm2k49W1hEH3Fx5szB0ITcJUutx7IejGYPTWeqKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiCfvt3kLrshiGzsAq3AO8g4Ysd5MeIwG23aey1nMQkkGBZqOV%2BWtrOuHG9dUNo3WNWTnt713oUI0RM8rpu2a3Dk2RTgiksFxnxnS49wcSIA7Tl7wsazy8IZlix06LaV%2BY7uV8uajigiNK%2BPpYzzSj6BbBhVOw2SNhsSrG8cKWZqdnfJxOBySip7u7fIoPzWq148o7ardB8yuCpVWrX%2FLJASD0X6xPt8yIH9Gh8Uz07sqsUXyZInLhtgNmbQ3Oq%2BNQs94%2BJrF2ndRDtfl7HV5uA%2B0qjOdYHDF8M1eeyBz0j6ZDQbsUyYapBalQbgKeygymLSzBHqWf60%2BUJN5bZrVRbNpagXx3PLtzC%2FOx6eGxXl07PfWChhTOyzQ3yZd3MEQKktBWpG75O91QO5cSLNqiymFwT5EYuuhI9ZnZUKOxt%2F5HkAJB%2FpsEHYqy2BaTK4zZJP2QSF9c20mW63WmqJYYqJZw5%2F1MNH1u1hWPQm0%2BJtFli%2Bc1hEPYtM4%2BLeMj6tl3hOUyh2Fz%2BXFnDZyAzNZ89Adq8tG7eNCP3%2FktBli2o0bKPxGnSJ2Bji7hhLWaPLJm9Dt6OiehVr7CyKKYR2qF35XtNMAKQFExPGP4yroM2IM5csjYif4Y43tHKeDQQCnne%2Bld%2FWpNZt8ZFDDQvenBBjqkAaQGpWvLfO9vdIEzGWJKG3IJnqfshs9QP2ZnAXi%2FYFgKCChYJiAZ1uw5F7E48bSnTJ5vHpl%2Fh1huab1MiUO3iLKMcFnXeFR1Hlo0GPXsxY5AC4Lyi1MgH2pjIyKt8KCs6FHFwgrfkyygWiGFCXXXv%2FVOxC0faNU0VpicGlGRlGTsYvq%2FwWxN62ItPTb4mL0PZ7imCh9%2B6bDXKrubUCIAPE9TIg2b&X-Amz-Signature=4dd16363f4968b19efefa6424202aac5dba250f22ae36ed1f29cc9fa9b8b24d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSCEA6D%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVPXMY6EdEMhdHaDfPB3yoqYLlTnFXhVL4kKchpRuYlgIhAM4dgkxm2k49W1hEH3Fx5szB0ITcJUutx7IejGYPTWeqKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiCfvt3kLrshiGzsAq3AO8g4Ysd5MeIwG23aey1nMQkkGBZqOV%2BWtrOuHG9dUNo3WNWTnt713oUI0RM8rpu2a3Dk2RTgiksFxnxnS49wcSIA7Tl7wsazy8IZlix06LaV%2BY7uV8uajigiNK%2BPpYzzSj6BbBhVOw2SNhsSrG8cKWZqdnfJxOBySip7u7fIoPzWq148o7ardB8yuCpVWrX%2FLJASD0X6xPt8yIH9Gh8Uz07sqsUXyZInLhtgNmbQ3Oq%2BNQs94%2BJrF2ndRDtfl7HV5uA%2B0qjOdYHDF8M1eeyBz0j6ZDQbsUyYapBalQbgKeygymLSzBHqWf60%2BUJN5bZrVRbNpagXx3PLtzC%2FOx6eGxXl07PfWChhTOyzQ3yZd3MEQKktBWpG75O91QO5cSLNqiymFwT5EYuuhI9ZnZUKOxt%2F5HkAJB%2FpsEHYqy2BaTK4zZJP2QSF9c20mW63WmqJYYqJZw5%2F1MNH1u1hWPQm0%2BJtFli%2Bc1hEPYtM4%2BLeMj6tl3hOUyh2Fz%2BXFnDZyAzNZ89Adq8tG7eNCP3%2FktBli2o0bKPxGnSJ2Bji7hhLWaPLJm9Dt6OiehVr7CyKKYR2qF35XtNMAKQFExPGP4yroM2IM5csjYif4Y43tHKeDQQCnne%2Bld%2FWpNZt8ZFDDQvenBBjqkAaQGpWvLfO9vdIEzGWJKG3IJnqfshs9QP2ZnAXi%2FYFgKCChYJiAZ1uw5F7E48bSnTJ5vHpl%2Fh1huab1MiUO3iLKMcFnXeFR1Hlo0GPXsxY5AC4Lyi1MgH2pjIyKt8KCs6FHFwgrfkyygWiGFCXXXv%2FVOxC0faNU0VpicGlGRlGTsYvq%2FwWxN62ItPTb4mL0PZ7imCh9%2B6bDXKrubUCIAPE9TIg2b&X-Amz-Signature=2ee96291883dd4fc150652b431738d8939dbd81d166dad724f293fe77058ebc8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
