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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCE7WQ2I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh6NFgm0sg9Yc6e5qKT0pV1uXKOia2BXXAC759MtMi5QIgJYFLzM0Pm%2F0bN3kNZRhbHdK92BDyJcNzVgxLvLk7ldIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1ZbpOresnlVS7B%2BCrcAz6TR5HI%2FMgegkeYzfAQchmL0TKL%2F%2Fw6mKXOrpn6ccZBmTH5kcN%2BsOtCb5uFV2ZO7UaV9hdx1hop4mwRXcmTvBATpf%2BpqLwps4wQeGGX32856NTDvJa50bTEg75HAFvZpqKDWFnYFIYzu9p0sJ%2Fo4feCvjsMh09660Rhd5eUODimAxzw90TmT3J%2B8%2BMZz3xFxapqCXSMbxWKF2IQN2%2BVR2UE%2BdWBqhPZV3YqwgOg9T2ud%2Bc9R840fWE0GVEfYZaG6a5TgDLx0Pl%2BiVfVQZwVeBRVAMD4RIY0CCHWqSNRNSJtCZP%2BPlFSmMclZdULFFvY97%2BthqE5FVW0cJAcgLop%2BRnhtKlYRHBcBYSgAZQnAEkVsfOZQcyM6y1mOeEhhyKMLXsamjC0PI5eB54K4URNvySeaFU7nElNmCE9hNnuGXy5oSEH%2FqiAeuIjByMefdsW4f9GPepxgoO8n8WBrifdVPWEA1L%2BR6AUG0WFtKTVp7iflx%2FI14kJgD3ZIh7hEtQ45r4D5rle%2BeYQQ9YATiikyz9D2%2FyCetrimEIUmqstVU8ZkL9ThNkegMusCNcEIH4hG49Niz3fqmW4ZBbjqT92ckO38qMN23sZv04FRapYpTKxEMGKabIMFPQI26sYMIOn9rwGOqUBGv7PRq0r8H1HuUs991j0YsOiichLU0rusl67rtIv1FKc%2BpSQOw8rCw1IQcpO0Tr%2BnR2ZDfZVb50ZSsQyEAhHMwqWidxrfAfyVy1D08NQrHZ%2BuKnMNwMBL59jBN3P%2Fm%2FRS%2BtZnIwZcW8%2BvU9j5jJylhRpizufXTXdFZ6Mp5OmkUciKiW7xoUYUG4QwtKgvVX0jZwciNUxCkW%2FzeOMuTPgANQXBWZ5&X-Amz-Signature=5dd5ab4144647cd3cd45b17bf8c61d36c2320e25ba858dd8d659d48e19e31972&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCE7WQ2I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh6NFgm0sg9Yc6e5qKT0pV1uXKOia2BXXAC759MtMi5QIgJYFLzM0Pm%2F0bN3kNZRhbHdK92BDyJcNzVgxLvLk7ldIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1ZbpOresnlVS7B%2BCrcAz6TR5HI%2FMgegkeYzfAQchmL0TKL%2F%2Fw6mKXOrpn6ccZBmTH5kcN%2BsOtCb5uFV2ZO7UaV9hdx1hop4mwRXcmTvBATpf%2BpqLwps4wQeGGX32856NTDvJa50bTEg75HAFvZpqKDWFnYFIYzu9p0sJ%2Fo4feCvjsMh09660Rhd5eUODimAxzw90TmT3J%2B8%2BMZz3xFxapqCXSMbxWKF2IQN2%2BVR2UE%2BdWBqhPZV3YqwgOg9T2ud%2Bc9R840fWE0GVEfYZaG6a5TgDLx0Pl%2BiVfVQZwVeBRVAMD4RIY0CCHWqSNRNSJtCZP%2BPlFSmMclZdULFFvY97%2BthqE5FVW0cJAcgLop%2BRnhtKlYRHBcBYSgAZQnAEkVsfOZQcyM6y1mOeEhhyKMLXsamjC0PI5eB54K4URNvySeaFU7nElNmCE9hNnuGXy5oSEH%2FqiAeuIjByMefdsW4f9GPepxgoO8n8WBrifdVPWEA1L%2BR6AUG0WFtKTVp7iflx%2FI14kJgD3ZIh7hEtQ45r4D5rle%2BeYQQ9YATiikyz9D2%2FyCetrimEIUmqstVU8ZkL9ThNkegMusCNcEIH4hG49Niz3fqmW4ZBbjqT92ckO38qMN23sZv04FRapYpTKxEMGKabIMFPQI26sYMIOn9rwGOqUBGv7PRq0r8H1HuUs991j0YsOiichLU0rusl67rtIv1FKc%2BpSQOw8rCw1IQcpO0Tr%2BnR2ZDfZVb50ZSsQyEAhHMwqWidxrfAfyVy1D08NQrHZ%2BuKnMNwMBL59jBN3P%2Fm%2FRS%2BtZnIwZcW8%2BvU9j5jJylhRpizufXTXdFZ6Mp5OmkUciKiW7xoUYUG4QwtKgvVX0jZwciNUxCkW%2FzeOMuTPgANQXBWZ5&X-Amz-Signature=13fa9ec97366488957a06ff4173144f94512b4df3a6c504c4e127755234dc6de&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCE7WQ2I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh6NFgm0sg9Yc6e5qKT0pV1uXKOia2BXXAC759MtMi5QIgJYFLzM0Pm%2F0bN3kNZRhbHdK92BDyJcNzVgxLvLk7ldIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1ZbpOresnlVS7B%2BCrcAz6TR5HI%2FMgegkeYzfAQchmL0TKL%2F%2Fw6mKXOrpn6ccZBmTH5kcN%2BsOtCb5uFV2ZO7UaV9hdx1hop4mwRXcmTvBATpf%2BpqLwps4wQeGGX32856NTDvJa50bTEg75HAFvZpqKDWFnYFIYzu9p0sJ%2Fo4feCvjsMh09660Rhd5eUODimAxzw90TmT3J%2B8%2BMZz3xFxapqCXSMbxWKF2IQN2%2BVR2UE%2BdWBqhPZV3YqwgOg9T2ud%2Bc9R840fWE0GVEfYZaG6a5TgDLx0Pl%2BiVfVQZwVeBRVAMD4RIY0CCHWqSNRNSJtCZP%2BPlFSmMclZdULFFvY97%2BthqE5FVW0cJAcgLop%2BRnhtKlYRHBcBYSgAZQnAEkVsfOZQcyM6y1mOeEhhyKMLXsamjC0PI5eB54K4URNvySeaFU7nElNmCE9hNnuGXy5oSEH%2FqiAeuIjByMefdsW4f9GPepxgoO8n8WBrifdVPWEA1L%2BR6AUG0WFtKTVp7iflx%2FI14kJgD3ZIh7hEtQ45r4D5rle%2BeYQQ9YATiikyz9D2%2FyCetrimEIUmqstVU8ZkL9ThNkegMusCNcEIH4hG49Niz3fqmW4ZBbjqT92ckO38qMN23sZv04FRapYpTKxEMGKabIMFPQI26sYMIOn9rwGOqUBGv7PRq0r8H1HuUs991j0YsOiichLU0rusl67rtIv1FKc%2BpSQOw8rCw1IQcpO0Tr%2BnR2ZDfZVb50ZSsQyEAhHMwqWidxrfAfyVy1D08NQrHZ%2BuKnMNwMBL59jBN3P%2Fm%2FRS%2BtZnIwZcW8%2BvU9j5jJylhRpizufXTXdFZ6Mp5OmkUciKiW7xoUYUG4QwtKgvVX0jZwciNUxCkW%2FzeOMuTPgANQXBWZ5&X-Amz-Signature=fcf6449c63e34c6b3d2af2192321e563d22546c1fe11ba9d102460b720c29bda&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCE7WQ2I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh6NFgm0sg9Yc6e5qKT0pV1uXKOia2BXXAC759MtMi5QIgJYFLzM0Pm%2F0bN3kNZRhbHdK92BDyJcNzVgxLvLk7ldIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1ZbpOresnlVS7B%2BCrcAz6TR5HI%2FMgegkeYzfAQchmL0TKL%2F%2Fw6mKXOrpn6ccZBmTH5kcN%2BsOtCb5uFV2ZO7UaV9hdx1hop4mwRXcmTvBATpf%2BpqLwps4wQeGGX32856NTDvJa50bTEg75HAFvZpqKDWFnYFIYzu9p0sJ%2Fo4feCvjsMh09660Rhd5eUODimAxzw90TmT3J%2B8%2BMZz3xFxapqCXSMbxWKF2IQN2%2BVR2UE%2BdWBqhPZV3YqwgOg9T2ud%2Bc9R840fWE0GVEfYZaG6a5TgDLx0Pl%2BiVfVQZwVeBRVAMD4RIY0CCHWqSNRNSJtCZP%2BPlFSmMclZdULFFvY97%2BthqE5FVW0cJAcgLop%2BRnhtKlYRHBcBYSgAZQnAEkVsfOZQcyM6y1mOeEhhyKMLXsamjC0PI5eB54K4URNvySeaFU7nElNmCE9hNnuGXy5oSEH%2FqiAeuIjByMefdsW4f9GPepxgoO8n8WBrifdVPWEA1L%2BR6AUG0WFtKTVp7iflx%2FI14kJgD3ZIh7hEtQ45r4D5rle%2BeYQQ9YATiikyz9D2%2FyCetrimEIUmqstVU8ZkL9ThNkegMusCNcEIH4hG49Niz3fqmW4ZBbjqT92ckO38qMN23sZv04FRapYpTKxEMGKabIMFPQI26sYMIOn9rwGOqUBGv7PRq0r8H1HuUs991j0YsOiichLU0rusl67rtIv1FKc%2BpSQOw8rCw1IQcpO0Tr%2BnR2ZDfZVb50ZSsQyEAhHMwqWidxrfAfyVy1D08NQrHZ%2BuKnMNwMBL59jBN3P%2Fm%2FRS%2BtZnIwZcW8%2BvU9j5jJylhRpizufXTXdFZ6Mp5OmkUciKiW7xoUYUG4QwtKgvVX0jZwciNUxCkW%2FzeOMuTPgANQXBWZ5&X-Amz-Signature=40c16bd4e2f7240e5d94201d87b32ed1fff8578d1ad51a7667ce8ef63f27a5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCE7WQ2I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh6NFgm0sg9Yc6e5qKT0pV1uXKOia2BXXAC759MtMi5QIgJYFLzM0Pm%2F0bN3kNZRhbHdK92BDyJcNzVgxLvLk7ldIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1ZbpOresnlVS7B%2BCrcAz6TR5HI%2FMgegkeYzfAQchmL0TKL%2F%2Fw6mKXOrpn6ccZBmTH5kcN%2BsOtCb5uFV2ZO7UaV9hdx1hop4mwRXcmTvBATpf%2BpqLwps4wQeGGX32856NTDvJa50bTEg75HAFvZpqKDWFnYFIYzu9p0sJ%2Fo4feCvjsMh09660Rhd5eUODimAxzw90TmT3J%2B8%2BMZz3xFxapqCXSMbxWKF2IQN2%2BVR2UE%2BdWBqhPZV3YqwgOg9T2ud%2Bc9R840fWE0GVEfYZaG6a5TgDLx0Pl%2BiVfVQZwVeBRVAMD4RIY0CCHWqSNRNSJtCZP%2BPlFSmMclZdULFFvY97%2BthqE5FVW0cJAcgLop%2BRnhtKlYRHBcBYSgAZQnAEkVsfOZQcyM6y1mOeEhhyKMLXsamjC0PI5eB54K4URNvySeaFU7nElNmCE9hNnuGXy5oSEH%2FqiAeuIjByMefdsW4f9GPepxgoO8n8WBrifdVPWEA1L%2BR6AUG0WFtKTVp7iflx%2FI14kJgD3ZIh7hEtQ45r4D5rle%2BeYQQ9YATiikyz9D2%2FyCetrimEIUmqstVU8ZkL9ThNkegMusCNcEIH4hG49Niz3fqmW4ZBbjqT92ckO38qMN23sZv04FRapYpTKxEMGKabIMFPQI26sYMIOn9rwGOqUBGv7PRq0r8H1HuUs991j0YsOiichLU0rusl67rtIv1FKc%2BpSQOw8rCw1IQcpO0Tr%2BnR2ZDfZVb50ZSsQyEAhHMwqWidxrfAfyVy1D08NQrHZ%2BuKnMNwMBL59jBN3P%2Fm%2FRS%2BtZnIwZcW8%2BvU9j5jJylhRpizufXTXdFZ6Mp5OmkUciKiW7xoUYUG4QwtKgvVX0jZwciNUxCkW%2FzeOMuTPgANQXBWZ5&X-Amz-Signature=a7152a6847d717e6869c86b9afbd115dce15088b34bf5f135bbd2665c145c20d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
