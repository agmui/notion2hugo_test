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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYELNIVM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCRPej%2B7E%2FkO1o9w6T42XE%2Ff7pbQjcE22rrIV6PKHnlrQIhAN3sW%2Fy8KkbP%2FWKoYrH72bcsKwXzY5V4UygiT3eaEbqCKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxryRcdn4yUdMvRwhoq3APO6w9LkyTrsvM%2FaCcrZTrMKjJHbYkmkqdx7Y5ByIVs931mpPwsdQy9okJFoFqOgvIeL84xescIjTTVpcrHDEqn9aXrREFnGXFANasw%2BkLs3WYjWBl5w2shyUg5o9neHLantvgh6lZCwE26U%2FU5od5U59IzdNAdkdOjQqHZzGLuNKumOnvL%2Bma%2FpOFU1sze%2FwafttMrn0aPXDuTgQLC%2B9wKTc71op1GOksp5gB5UnfBQxXFQocPb4ZaqAIKh%2Fdr%2FQzh9YLalfyS5sm6SjJerjv%2FTPKr%2F9T8cMKNDRjCo0OVSPMcRAD%2Fm4BivtF3qBek%2FPXlZWqvgDyduoFvfNA0zugquLHSzjxwAvwMJtzLL62SmgdZ%2FNdEhMBkyAYEYqmmgzLC6a4M7tdB2KKU6As49OaOYiwk8bUsB817qJQHstWIjqvAWBeJ1DtVpuOFEGJgbQ0QePmGreoIf5m7oIDS%2Fv1JkPz5D4eW6CUtV5m88lLelhSShohFSMRo4uRDHcBxvDyqpMS3E7MBdF3QuOHAv7fnVXCgpjr0htWkxwA5jfJ0%2FSBct4EYE30HtoIiqbrPp6F2YG86npTNriyuhDw5EL6yWC0XDZeT9NudICGn7bGh8Q6WO3mGXv8vWZCZ1TDWo5LABjqkAZ2Abfh7j%2BIWNSvJM9E%2B5CuBJxiG5XixTwyF8wtDpRFyWvTiopmUPBxmb4wf4STe9VdLcV1YVxw4A6XrxY4kNEaJt1BnnzQo%2FxsNIOimsLlvYTou3AYPrmyD5Z7wg4izzyxRmCV865ljH46MB3O97R8U0TqcSJBO24duLgmJusGjBNsX2dPZRB4uooJmvq8zLnA6tK3wjuNP4ww7VDGxPCFiI9xH&X-Amz-Signature=3ebc1f3652f813d740a5cda7232126bc74050b35864091ab6bcd6129e19dd1b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYELNIVM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCRPej%2B7E%2FkO1o9w6T42XE%2Ff7pbQjcE22rrIV6PKHnlrQIhAN3sW%2Fy8KkbP%2FWKoYrH72bcsKwXzY5V4UygiT3eaEbqCKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxryRcdn4yUdMvRwhoq3APO6w9LkyTrsvM%2FaCcrZTrMKjJHbYkmkqdx7Y5ByIVs931mpPwsdQy9okJFoFqOgvIeL84xescIjTTVpcrHDEqn9aXrREFnGXFANasw%2BkLs3WYjWBl5w2shyUg5o9neHLantvgh6lZCwE26U%2FU5od5U59IzdNAdkdOjQqHZzGLuNKumOnvL%2Bma%2FpOFU1sze%2FwafttMrn0aPXDuTgQLC%2B9wKTc71op1GOksp5gB5UnfBQxXFQocPb4ZaqAIKh%2Fdr%2FQzh9YLalfyS5sm6SjJerjv%2FTPKr%2F9T8cMKNDRjCo0OVSPMcRAD%2Fm4BivtF3qBek%2FPXlZWqvgDyduoFvfNA0zugquLHSzjxwAvwMJtzLL62SmgdZ%2FNdEhMBkyAYEYqmmgzLC6a4M7tdB2KKU6As49OaOYiwk8bUsB817qJQHstWIjqvAWBeJ1DtVpuOFEGJgbQ0QePmGreoIf5m7oIDS%2Fv1JkPz5D4eW6CUtV5m88lLelhSShohFSMRo4uRDHcBxvDyqpMS3E7MBdF3QuOHAv7fnVXCgpjr0htWkxwA5jfJ0%2FSBct4EYE30HtoIiqbrPp6F2YG86npTNriyuhDw5EL6yWC0XDZeT9NudICGn7bGh8Q6WO3mGXv8vWZCZ1TDWo5LABjqkAZ2Abfh7j%2BIWNSvJM9E%2B5CuBJxiG5XixTwyF8wtDpRFyWvTiopmUPBxmb4wf4STe9VdLcV1YVxw4A6XrxY4kNEaJt1BnnzQo%2FxsNIOimsLlvYTou3AYPrmyD5Z7wg4izzyxRmCV865ljH46MB3O97R8U0TqcSJBO24duLgmJusGjBNsX2dPZRB4uooJmvq8zLnA6tK3wjuNP4ww7VDGxPCFiI9xH&X-Amz-Signature=b15066cb54d40ad9ad0a0a4b306eca5e8d25104198b9e4bfdc41ca028bd133c7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYELNIVM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCRPej%2B7E%2FkO1o9w6T42XE%2Ff7pbQjcE22rrIV6PKHnlrQIhAN3sW%2Fy8KkbP%2FWKoYrH72bcsKwXzY5V4UygiT3eaEbqCKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxryRcdn4yUdMvRwhoq3APO6w9LkyTrsvM%2FaCcrZTrMKjJHbYkmkqdx7Y5ByIVs931mpPwsdQy9okJFoFqOgvIeL84xescIjTTVpcrHDEqn9aXrREFnGXFANasw%2BkLs3WYjWBl5w2shyUg5o9neHLantvgh6lZCwE26U%2FU5od5U59IzdNAdkdOjQqHZzGLuNKumOnvL%2Bma%2FpOFU1sze%2FwafttMrn0aPXDuTgQLC%2B9wKTc71op1GOksp5gB5UnfBQxXFQocPb4ZaqAIKh%2Fdr%2FQzh9YLalfyS5sm6SjJerjv%2FTPKr%2F9T8cMKNDRjCo0OVSPMcRAD%2Fm4BivtF3qBek%2FPXlZWqvgDyduoFvfNA0zugquLHSzjxwAvwMJtzLL62SmgdZ%2FNdEhMBkyAYEYqmmgzLC6a4M7tdB2KKU6As49OaOYiwk8bUsB817qJQHstWIjqvAWBeJ1DtVpuOFEGJgbQ0QePmGreoIf5m7oIDS%2Fv1JkPz5D4eW6CUtV5m88lLelhSShohFSMRo4uRDHcBxvDyqpMS3E7MBdF3QuOHAv7fnVXCgpjr0htWkxwA5jfJ0%2FSBct4EYE30HtoIiqbrPp6F2YG86npTNriyuhDw5EL6yWC0XDZeT9NudICGn7bGh8Q6WO3mGXv8vWZCZ1TDWo5LABjqkAZ2Abfh7j%2BIWNSvJM9E%2B5CuBJxiG5XixTwyF8wtDpRFyWvTiopmUPBxmb4wf4STe9VdLcV1YVxw4A6XrxY4kNEaJt1BnnzQo%2FxsNIOimsLlvYTou3AYPrmyD5Z7wg4izzyxRmCV865ljH46MB3O97R8U0TqcSJBO24duLgmJusGjBNsX2dPZRB4uooJmvq8zLnA6tK3wjuNP4ww7VDGxPCFiI9xH&X-Amz-Signature=5ee2426ff8faae0c235bfd7af7ea9f23309d9c844ce08b512469a34d101940a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYELNIVM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCRPej%2B7E%2FkO1o9w6T42XE%2Ff7pbQjcE22rrIV6PKHnlrQIhAN3sW%2Fy8KkbP%2FWKoYrH72bcsKwXzY5V4UygiT3eaEbqCKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxryRcdn4yUdMvRwhoq3APO6w9LkyTrsvM%2FaCcrZTrMKjJHbYkmkqdx7Y5ByIVs931mpPwsdQy9okJFoFqOgvIeL84xescIjTTVpcrHDEqn9aXrREFnGXFANasw%2BkLs3WYjWBl5w2shyUg5o9neHLantvgh6lZCwE26U%2FU5od5U59IzdNAdkdOjQqHZzGLuNKumOnvL%2Bma%2FpOFU1sze%2FwafttMrn0aPXDuTgQLC%2B9wKTc71op1GOksp5gB5UnfBQxXFQocPb4ZaqAIKh%2Fdr%2FQzh9YLalfyS5sm6SjJerjv%2FTPKr%2F9T8cMKNDRjCo0OVSPMcRAD%2Fm4BivtF3qBek%2FPXlZWqvgDyduoFvfNA0zugquLHSzjxwAvwMJtzLL62SmgdZ%2FNdEhMBkyAYEYqmmgzLC6a4M7tdB2KKU6As49OaOYiwk8bUsB817qJQHstWIjqvAWBeJ1DtVpuOFEGJgbQ0QePmGreoIf5m7oIDS%2Fv1JkPz5D4eW6CUtV5m88lLelhSShohFSMRo4uRDHcBxvDyqpMS3E7MBdF3QuOHAv7fnVXCgpjr0htWkxwA5jfJ0%2FSBct4EYE30HtoIiqbrPp6F2YG86npTNriyuhDw5EL6yWC0XDZeT9NudICGn7bGh8Q6WO3mGXv8vWZCZ1TDWo5LABjqkAZ2Abfh7j%2BIWNSvJM9E%2B5CuBJxiG5XixTwyF8wtDpRFyWvTiopmUPBxmb4wf4STe9VdLcV1YVxw4A6XrxY4kNEaJt1BnnzQo%2FxsNIOimsLlvYTou3AYPrmyD5Z7wg4izzyxRmCV865ljH46MB3O97R8U0TqcSJBO24duLgmJusGjBNsX2dPZRB4uooJmvq8zLnA6tK3wjuNP4ww7VDGxPCFiI9xH&X-Amz-Signature=65abc9b595431db0864ecd9a3d18a38c8f07f5ea6cd46e97baaa47b3c74c7573&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYELNIVM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCRPej%2B7E%2FkO1o9w6T42XE%2Ff7pbQjcE22rrIV6PKHnlrQIhAN3sW%2Fy8KkbP%2FWKoYrH72bcsKwXzY5V4UygiT3eaEbqCKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxryRcdn4yUdMvRwhoq3APO6w9LkyTrsvM%2FaCcrZTrMKjJHbYkmkqdx7Y5ByIVs931mpPwsdQy9okJFoFqOgvIeL84xescIjTTVpcrHDEqn9aXrREFnGXFANasw%2BkLs3WYjWBl5w2shyUg5o9neHLantvgh6lZCwE26U%2FU5od5U59IzdNAdkdOjQqHZzGLuNKumOnvL%2Bma%2FpOFU1sze%2FwafttMrn0aPXDuTgQLC%2B9wKTc71op1GOksp5gB5UnfBQxXFQocPb4ZaqAIKh%2Fdr%2FQzh9YLalfyS5sm6SjJerjv%2FTPKr%2F9T8cMKNDRjCo0OVSPMcRAD%2Fm4BivtF3qBek%2FPXlZWqvgDyduoFvfNA0zugquLHSzjxwAvwMJtzLL62SmgdZ%2FNdEhMBkyAYEYqmmgzLC6a4M7tdB2KKU6As49OaOYiwk8bUsB817qJQHstWIjqvAWBeJ1DtVpuOFEGJgbQ0QePmGreoIf5m7oIDS%2Fv1JkPz5D4eW6CUtV5m88lLelhSShohFSMRo4uRDHcBxvDyqpMS3E7MBdF3QuOHAv7fnVXCgpjr0htWkxwA5jfJ0%2FSBct4EYE30HtoIiqbrPp6F2YG86npTNriyuhDw5EL6yWC0XDZeT9NudICGn7bGh8Q6WO3mGXv8vWZCZ1TDWo5LABjqkAZ2Abfh7j%2BIWNSvJM9E%2B5CuBJxiG5XixTwyF8wtDpRFyWvTiopmUPBxmb4wf4STe9VdLcV1YVxw4A6XrxY4kNEaJt1BnnzQo%2FxsNIOimsLlvYTou3AYPrmyD5Z7wg4izzyxRmCV865ljH46MB3O97R8U0TqcSJBO24duLgmJusGjBNsX2dPZRB4uooJmvq8zLnA6tK3wjuNP4ww7VDGxPCFiI9xH&X-Amz-Signature=e4114dadb515d7c8d1175bcd3eee6d731569c723e693c30deafd6ed17cc8500a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
