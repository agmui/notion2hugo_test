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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NN6JTHF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCPq8rp49u3CywBNU%2FZPlZtg87Q26KmbLlMkePdkEErnAIhAJjdH8decrCKkcx9HKAL88QzLV1J8HLZkhm38t0suRMwKv8DCEwQABoMNjM3NDIzMTgzODA1IgzGLASRLacWt7nk6OEq3AN%2BNXP9DjoAwCx%2FNiqshPqIIWtC3gLEiFzhMfShngrlufXg7nwiJrjA9aBUz9HrfXFJErKc%2BrwttG%2BfKdfL829q4BEd6qZNhmWvoAMJ6uOktS9xhMkihcf%2FreQFqzfEhIzi%2BvbNwIXiEMFJ8fy6MHKCh3fFqtoXoQuRsOsY3j0HICzKU8MD5tK%2BssuzzDdVzvvY5v5TyrnP7fOsUNQ4goP7Gws%2F0VeJBRmlh65bBJjKaN%2FLzqlk4dSVOyi6%2BZuyaLxw8qKlvjFCMxpgEpfkCLvKfQhyj8sWXMslULG7QzMJw2M8pFVsTkItIohb%2BR6aSs6iKak05KL1E8dXFkrD1H5GpEZFfpbmaf%2BQ4vK3AHL9L0wPqYKa%2BeIAWqpSbEl2VF5HUYIRcwTP897ixzTJZVEapS8G0dZyfMV%2FQAREm%2Bq8H4rzozoAKE2uh8TEMpTxpBBmAYYxXQ3ThOvua7fmU1hHnw4OlZAtZT6P994z%2Fjrlahnlr0XTPQME79zcJANyhzoJBRoN9RnwzRzhPq2E1pQLBmzZj%2FSyyffxwNKyO%2F5euHiruvuCX30FZeNlZNxTtp83KdCql0FUxM8vpiUJ0itn8btpPIJ9hRIoRb%2Fu7%2FX0x3%2FKdSmgfAwAa1E0yDD514fCBjqkAc%2BMCwm6K7BO2WdhnkoOVtBUXUhBS%2BJf4xuhWuWIQKZ2AU3VQyI%2B13kpRxfZo19zYXbiEjR3tjRqcOrHQOVRdPgPPhltPNpZ61Rubb7wjZuchS8gHhvYgiuAWI7KsgTgoX56yHjN4RwgBfQ9X9aYugkSNb4b3Py6RXIWcTTgJA5%2F86Ca687YLFx7LSQLqCMITKcEkrszNRCkdAPEbwe%2FmcruI%2BUr&X-Amz-Signature=ef8d89372158c00c808af7059fe3d47f6bebea90db4a074263fe28c5eeb88053&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NN6JTHF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCPq8rp49u3CywBNU%2FZPlZtg87Q26KmbLlMkePdkEErnAIhAJjdH8decrCKkcx9HKAL88QzLV1J8HLZkhm38t0suRMwKv8DCEwQABoMNjM3NDIzMTgzODA1IgzGLASRLacWt7nk6OEq3AN%2BNXP9DjoAwCx%2FNiqshPqIIWtC3gLEiFzhMfShngrlufXg7nwiJrjA9aBUz9HrfXFJErKc%2BrwttG%2BfKdfL829q4BEd6qZNhmWvoAMJ6uOktS9xhMkihcf%2FreQFqzfEhIzi%2BvbNwIXiEMFJ8fy6MHKCh3fFqtoXoQuRsOsY3j0HICzKU8MD5tK%2BssuzzDdVzvvY5v5TyrnP7fOsUNQ4goP7Gws%2F0VeJBRmlh65bBJjKaN%2FLzqlk4dSVOyi6%2BZuyaLxw8qKlvjFCMxpgEpfkCLvKfQhyj8sWXMslULG7QzMJw2M8pFVsTkItIohb%2BR6aSs6iKak05KL1E8dXFkrD1H5GpEZFfpbmaf%2BQ4vK3AHL9L0wPqYKa%2BeIAWqpSbEl2VF5HUYIRcwTP897ixzTJZVEapS8G0dZyfMV%2FQAREm%2Bq8H4rzozoAKE2uh8TEMpTxpBBmAYYxXQ3ThOvua7fmU1hHnw4OlZAtZT6P994z%2Fjrlahnlr0XTPQME79zcJANyhzoJBRoN9RnwzRzhPq2E1pQLBmzZj%2FSyyffxwNKyO%2F5euHiruvuCX30FZeNlZNxTtp83KdCql0FUxM8vpiUJ0itn8btpPIJ9hRIoRb%2Fu7%2FX0x3%2FKdSmgfAwAa1E0yDD514fCBjqkAc%2BMCwm6K7BO2WdhnkoOVtBUXUhBS%2BJf4xuhWuWIQKZ2AU3VQyI%2B13kpRxfZo19zYXbiEjR3tjRqcOrHQOVRdPgPPhltPNpZ61Rubb7wjZuchS8gHhvYgiuAWI7KsgTgoX56yHjN4RwgBfQ9X9aYugkSNb4b3Py6RXIWcTTgJA5%2F86Ca687YLFx7LSQLqCMITKcEkrszNRCkdAPEbwe%2FmcruI%2BUr&X-Amz-Signature=562a0a00446f30a08ffd123ab7db4fa606b34bfa6308076a39ce4639ef408590&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NN6JTHF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCPq8rp49u3CywBNU%2FZPlZtg87Q26KmbLlMkePdkEErnAIhAJjdH8decrCKkcx9HKAL88QzLV1J8HLZkhm38t0suRMwKv8DCEwQABoMNjM3NDIzMTgzODA1IgzGLASRLacWt7nk6OEq3AN%2BNXP9DjoAwCx%2FNiqshPqIIWtC3gLEiFzhMfShngrlufXg7nwiJrjA9aBUz9HrfXFJErKc%2BrwttG%2BfKdfL829q4BEd6qZNhmWvoAMJ6uOktS9xhMkihcf%2FreQFqzfEhIzi%2BvbNwIXiEMFJ8fy6MHKCh3fFqtoXoQuRsOsY3j0HICzKU8MD5tK%2BssuzzDdVzvvY5v5TyrnP7fOsUNQ4goP7Gws%2F0VeJBRmlh65bBJjKaN%2FLzqlk4dSVOyi6%2BZuyaLxw8qKlvjFCMxpgEpfkCLvKfQhyj8sWXMslULG7QzMJw2M8pFVsTkItIohb%2BR6aSs6iKak05KL1E8dXFkrD1H5GpEZFfpbmaf%2BQ4vK3AHL9L0wPqYKa%2BeIAWqpSbEl2VF5HUYIRcwTP897ixzTJZVEapS8G0dZyfMV%2FQAREm%2Bq8H4rzozoAKE2uh8TEMpTxpBBmAYYxXQ3ThOvua7fmU1hHnw4OlZAtZT6P994z%2Fjrlahnlr0XTPQME79zcJANyhzoJBRoN9RnwzRzhPq2E1pQLBmzZj%2FSyyffxwNKyO%2F5euHiruvuCX30FZeNlZNxTtp83KdCql0FUxM8vpiUJ0itn8btpPIJ9hRIoRb%2Fu7%2FX0x3%2FKdSmgfAwAa1E0yDD514fCBjqkAc%2BMCwm6K7BO2WdhnkoOVtBUXUhBS%2BJf4xuhWuWIQKZ2AU3VQyI%2B13kpRxfZo19zYXbiEjR3tjRqcOrHQOVRdPgPPhltPNpZ61Rubb7wjZuchS8gHhvYgiuAWI7KsgTgoX56yHjN4RwgBfQ9X9aYugkSNb4b3Py6RXIWcTTgJA5%2F86Ca687YLFx7LSQLqCMITKcEkrszNRCkdAPEbwe%2FmcruI%2BUr&X-Amz-Signature=0c24f4a4263aa31d26f96a195df83f891f2287690815ed98389ed395ab5746cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NN6JTHF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCPq8rp49u3CywBNU%2FZPlZtg87Q26KmbLlMkePdkEErnAIhAJjdH8decrCKkcx9HKAL88QzLV1J8HLZkhm38t0suRMwKv8DCEwQABoMNjM3NDIzMTgzODA1IgzGLASRLacWt7nk6OEq3AN%2BNXP9DjoAwCx%2FNiqshPqIIWtC3gLEiFzhMfShngrlufXg7nwiJrjA9aBUz9HrfXFJErKc%2BrwttG%2BfKdfL829q4BEd6qZNhmWvoAMJ6uOktS9xhMkihcf%2FreQFqzfEhIzi%2BvbNwIXiEMFJ8fy6MHKCh3fFqtoXoQuRsOsY3j0HICzKU8MD5tK%2BssuzzDdVzvvY5v5TyrnP7fOsUNQ4goP7Gws%2F0VeJBRmlh65bBJjKaN%2FLzqlk4dSVOyi6%2BZuyaLxw8qKlvjFCMxpgEpfkCLvKfQhyj8sWXMslULG7QzMJw2M8pFVsTkItIohb%2BR6aSs6iKak05KL1E8dXFkrD1H5GpEZFfpbmaf%2BQ4vK3AHL9L0wPqYKa%2BeIAWqpSbEl2VF5HUYIRcwTP897ixzTJZVEapS8G0dZyfMV%2FQAREm%2Bq8H4rzozoAKE2uh8TEMpTxpBBmAYYxXQ3ThOvua7fmU1hHnw4OlZAtZT6P994z%2Fjrlahnlr0XTPQME79zcJANyhzoJBRoN9RnwzRzhPq2E1pQLBmzZj%2FSyyffxwNKyO%2F5euHiruvuCX30FZeNlZNxTtp83KdCql0FUxM8vpiUJ0itn8btpPIJ9hRIoRb%2Fu7%2FX0x3%2FKdSmgfAwAa1E0yDD514fCBjqkAc%2BMCwm6K7BO2WdhnkoOVtBUXUhBS%2BJf4xuhWuWIQKZ2AU3VQyI%2B13kpRxfZo19zYXbiEjR3tjRqcOrHQOVRdPgPPhltPNpZ61Rubb7wjZuchS8gHhvYgiuAWI7KsgTgoX56yHjN4RwgBfQ9X9aYugkSNb4b3Py6RXIWcTTgJA5%2F86Ca687YLFx7LSQLqCMITKcEkrszNRCkdAPEbwe%2FmcruI%2BUr&X-Amz-Signature=b14fa2e6ea68de9eed83a14816655402bc71a83701027ba77aae4b556e3e1b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NN6JTHF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCPq8rp49u3CywBNU%2FZPlZtg87Q26KmbLlMkePdkEErnAIhAJjdH8decrCKkcx9HKAL88QzLV1J8HLZkhm38t0suRMwKv8DCEwQABoMNjM3NDIzMTgzODA1IgzGLASRLacWt7nk6OEq3AN%2BNXP9DjoAwCx%2FNiqshPqIIWtC3gLEiFzhMfShngrlufXg7nwiJrjA9aBUz9HrfXFJErKc%2BrwttG%2BfKdfL829q4BEd6qZNhmWvoAMJ6uOktS9xhMkihcf%2FreQFqzfEhIzi%2BvbNwIXiEMFJ8fy6MHKCh3fFqtoXoQuRsOsY3j0HICzKU8MD5tK%2BssuzzDdVzvvY5v5TyrnP7fOsUNQ4goP7Gws%2F0VeJBRmlh65bBJjKaN%2FLzqlk4dSVOyi6%2BZuyaLxw8qKlvjFCMxpgEpfkCLvKfQhyj8sWXMslULG7QzMJw2M8pFVsTkItIohb%2BR6aSs6iKak05KL1E8dXFkrD1H5GpEZFfpbmaf%2BQ4vK3AHL9L0wPqYKa%2BeIAWqpSbEl2VF5HUYIRcwTP897ixzTJZVEapS8G0dZyfMV%2FQAREm%2Bq8H4rzozoAKE2uh8TEMpTxpBBmAYYxXQ3ThOvua7fmU1hHnw4OlZAtZT6P994z%2Fjrlahnlr0XTPQME79zcJANyhzoJBRoN9RnwzRzhPq2E1pQLBmzZj%2FSyyffxwNKyO%2F5euHiruvuCX30FZeNlZNxTtp83KdCql0FUxM8vpiUJ0itn8btpPIJ9hRIoRb%2Fu7%2FX0x3%2FKdSmgfAwAa1E0yDD514fCBjqkAc%2BMCwm6K7BO2WdhnkoOVtBUXUhBS%2BJf4xuhWuWIQKZ2AU3VQyI%2B13kpRxfZo19zYXbiEjR3tjRqcOrHQOVRdPgPPhltPNpZ61Rubb7wjZuchS8gHhvYgiuAWI7KsgTgoX56yHjN4RwgBfQ9X9aYugkSNb4b3Py6RXIWcTTgJA5%2F86Ca687YLFx7LSQLqCMITKcEkrszNRCkdAPEbwe%2FmcruI%2BUr&X-Amz-Signature=13e15930c3e3f73b49fc55f6f8a23605a5deafcfd375b7b7255881cbcb7e2412&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
