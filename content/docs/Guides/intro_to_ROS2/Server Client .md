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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZJSZBQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYaTB5ZsOH%2FlplEaxm6CWfAa%2B4hd%2FRHc1xfmgkcA3ccwIhAP9WfTwoQ67WPiQ5s02LZ1j4g05Q5mezp%2B4QIq7HXuVHKv8DCDcQABoMNjM3NDIzMTgzODA1IgxNXKlf0Ls0rX0HCh0q3AMZ3tP%2FiKG%2FVhskgcv%2F4cPRd1fTEYdS0m2KUkohWcmhi88ajM6dzN%2B%2B4RIfFMd1NsqGb92%2BZv4IQlGwzTG56Z67O2KNApy2gO6Dl2N9K%2FlnI1kw9G0jj0SSUGkuX7ISPyB%2Bbyts5J0RV7BC%2FWkYVEy0GKdGX9tlXBQIjtLkZjAI7wuRESifxN4BGtnEY164zVd%2BR2YQ8pIgRWhtUcrVCJ07YGhZG3d3ggCKYlxxQxhyiYVqFTd9u2txs15Y0brc6nSJGBzD1AYHmFCAWl5s3f9zFnhAa6Ku6cc3Gy%2FgkyPMACMOEv45v1%2B%2FxXM1B3s1Z2msMWpBXQqCE%2BSfabSWd6BYvQPjWYcJtUlZ0EEVoHkWf2Wm2DnNbXa5fqD4TCgF1DQSALLNkh82CUxu9hLd6FmZg3eVkkJWOgEStBmMTbstE4l%2BnTgPzwyx%2BuN4vf4tBCrqOTISzN8%2BkwEXiDddJDkeMNfQc479%2FD5jARUTQ2F4IMGyGbjzrACD%2FuJ24HvnL%2Fnx%2F4UcU3SC3qHlJgnmzKBwJ6KvJFQWpAqkNJ5ZDIO9N9%2B1S94pZaVxb88n6ADiOblVf%2BijZHqUXdU3HgGw%2FFVLdcrstwWNIQ4ZInjzE9rFK5dFRJaHWbUkKRfGtzD58ZG%2FBjqkAbjJoQO%2F9Lv%2BCwYhg1b%2BY%2BzhixO2WpJzaD1mims6ES2XP%2FTL9XQ7WVLe3y1T8Al2sslTeOL5Wxkuhl0jeJe7L%2B%2ByaO5wqBWEyK1TjmMdzcVGc2CWptP0SdIQyDh8JO10jD4F2fyVEkPaRbIwb4xH9%2FgRfuPmGsGxwjk7L8Sl0wz5%2F1RXGhXjYjYBQ8lKqzengM8PcbR4z2cxHfTBKZMz%2BlNUcTUA&X-Amz-Signature=b90550d8be01b3a47f842f0d5130111f5a1a4d7025801ab716f391e37c022323&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZJSZBQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYaTB5ZsOH%2FlplEaxm6CWfAa%2B4hd%2FRHc1xfmgkcA3ccwIhAP9WfTwoQ67WPiQ5s02LZ1j4g05Q5mezp%2B4QIq7HXuVHKv8DCDcQABoMNjM3NDIzMTgzODA1IgxNXKlf0Ls0rX0HCh0q3AMZ3tP%2FiKG%2FVhskgcv%2F4cPRd1fTEYdS0m2KUkohWcmhi88ajM6dzN%2B%2B4RIfFMd1NsqGb92%2BZv4IQlGwzTG56Z67O2KNApy2gO6Dl2N9K%2FlnI1kw9G0jj0SSUGkuX7ISPyB%2Bbyts5J0RV7BC%2FWkYVEy0GKdGX9tlXBQIjtLkZjAI7wuRESifxN4BGtnEY164zVd%2BR2YQ8pIgRWhtUcrVCJ07YGhZG3d3ggCKYlxxQxhyiYVqFTd9u2txs15Y0brc6nSJGBzD1AYHmFCAWl5s3f9zFnhAa6Ku6cc3Gy%2FgkyPMACMOEv45v1%2B%2FxXM1B3s1Z2msMWpBXQqCE%2BSfabSWd6BYvQPjWYcJtUlZ0EEVoHkWf2Wm2DnNbXa5fqD4TCgF1DQSALLNkh82CUxu9hLd6FmZg3eVkkJWOgEStBmMTbstE4l%2BnTgPzwyx%2BuN4vf4tBCrqOTISzN8%2BkwEXiDddJDkeMNfQc479%2FD5jARUTQ2F4IMGyGbjzrACD%2FuJ24HvnL%2Fnx%2F4UcU3SC3qHlJgnmzKBwJ6KvJFQWpAqkNJ5ZDIO9N9%2B1S94pZaVxb88n6ADiOblVf%2BijZHqUXdU3HgGw%2FFVLdcrstwWNIQ4ZInjzE9rFK5dFRJaHWbUkKRfGtzD58ZG%2FBjqkAbjJoQO%2F9Lv%2BCwYhg1b%2BY%2BzhixO2WpJzaD1mims6ES2XP%2FTL9XQ7WVLe3y1T8Al2sslTeOL5Wxkuhl0jeJe7L%2B%2ByaO5wqBWEyK1TjmMdzcVGc2CWptP0SdIQyDh8JO10jD4F2fyVEkPaRbIwb4xH9%2FgRfuPmGsGxwjk7L8Sl0wz5%2F1RXGhXjYjYBQ8lKqzengM8PcbR4z2cxHfTBKZMz%2BlNUcTUA&X-Amz-Signature=4388793098abef0869c9699935bf24a31711a79344eedc0197d3e87636416b24&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZJSZBQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYaTB5ZsOH%2FlplEaxm6CWfAa%2B4hd%2FRHc1xfmgkcA3ccwIhAP9WfTwoQ67WPiQ5s02LZ1j4g05Q5mezp%2B4QIq7HXuVHKv8DCDcQABoMNjM3NDIzMTgzODA1IgxNXKlf0Ls0rX0HCh0q3AMZ3tP%2FiKG%2FVhskgcv%2F4cPRd1fTEYdS0m2KUkohWcmhi88ajM6dzN%2B%2B4RIfFMd1NsqGb92%2BZv4IQlGwzTG56Z67O2KNApy2gO6Dl2N9K%2FlnI1kw9G0jj0SSUGkuX7ISPyB%2Bbyts5J0RV7BC%2FWkYVEy0GKdGX9tlXBQIjtLkZjAI7wuRESifxN4BGtnEY164zVd%2BR2YQ8pIgRWhtUcrVCJ07YGhZG3d3ggCKYlxxQxhyiYVqFTd9u2txs15Y0brc6nSJGBzD1AYHmFCAWl5s3f9zFnhAa6Ku6cc3Gy%2FgkyPMACMOEv45v1%2B%2FxXM1B3s1Z2msMWpBXQqCE%2BSfabSWd6BYvQPjWYcJtUlZ0EEVoHkWf2Wm2DnNbXa5fqD4TCgF1DQSALLNkh82CUxu9hLd6FmZg3eVkkJWOgEStBmMTbstE4l%2BnTgPzwyx%2BuN4vf4tBCrqOTISzN8%2BkwEXiDddJDkeMNfQc479%2FD5jARUTQ2F4IMGyGbjzrACD%2FuJ24HvnL%2Fnx%2F4UcU3SC3qHlJgnmzKBwJ6KvJFQWpAqkNJ5ZDIO9N9%2B1S94pZaVxb88n6ADiOblVf%2BijZHqUXdU3HgGw%2FFVLdcrstwWNIQ4ZInjzE9rFK5dFRJaHWbUkKRfGtzD58ZG%2FBjqkAbjJoQO%2F9Lv%2BCwYhg1b%2BY%2BzhixO2WpJzaD1mims6ES2XP%2FTL9XQ7WVLe3y1T8Al2sslTeOL5Wxkuhl0jeJe7L%2B%2ByaO5wqBWEyK1TjmMdzcVGc2CWptP0SdIQyDh8JO10jD4F2fyVEkPaRbIwb4xH9%2FgRfuPmGsGxwjk7L8Sl0wz5%2F1RXGhXjYjYBQ8lKqzengM8PcbR4z2cxHfTBKZMz%2BlNUcTUA&X-Amz-Signature=51b2a1a19380cc289370c4da26310ac06f38c17ae8c2af5307e1fbf30d241cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZJSZBQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYaTB5ZsOH%2FlplEaxm6CWfAa%2B4hd%2FRHc1xfmgkcA3ccwIhAP9WfTwoQ67WPiQ5s02LZ1j4g05Q5mezp%2B4QIq7HXuVHKv8DCDcQABoMNjM3NDIzMTgzODA1IgxNXKlf0Ls0rX0HCh0q3AMZ3tP%2FiKG%2FVhskgcv%2F4cPRd1fTEYdS0m2KUkohWcmhi88ajM6dzN%2B%2B4RIfFMd1NsqGb92%2BZv4IQlGwzTG56Z67O2KNApy2gO6Dl2N9K%2FlnI1kw9G0jj0SSUGkuX7ISPyB%2Bbyts5J0RV7BC%2FWkYVEy0GKdGX9tlXBQIjtLkZjAI7wuRESifxN4BGtnEY164zVd%2BR2YQ8pIgRWhtUcrVCJ07YGhZG3d3ggCKYlxxQxhyiYVqFTd9u2txs15Y0brc6nSJGBzD1AYHmFCAWl5s3f9zFnhAa6Ku6cc3Gy%2FgkyPMACMOEv45v1%2B%2FxXM1B3s1Z2msMWpBXQqCE%2BSfabSWd6BYvQPjWYcJtUlZ0EEVoHkWf2Wm2DnNbXa5fqD4TCgF1DQSALLNkh82CUxu9hLd6FmZg3eVkkJWOgEStBmMTbstE4l%2BnTgPzwyx%2BuN4vf4tBCrqOTISzN8%2BkwEXiDddJDkeMNfQc479%2FD5jARUTQ2F4IMGyGbjzrACD%2FuJ24HvnL%2Fnx%2F4UcU3SC3qHlJgnmzKBwJ6KvJFQWpAqkNJ5ZDIO9N9%2B1S94pZaVxb88n6ADiOblVf%2BijZHqUXdU3HgGw%2FFVLdcrstwWNIQ4ZInjzE9rFK5dFRJaHWbUkKRfGtzD58ZG%2FBjqkAbjJoQO%2F9Lv%2BCwYhg1b%2BY%2BzhixO2WpJzaD1mims6ES2XP%2FTL9XQ7WVLe3y1T8Al2sslTeOL5Wxkuhl0jeJe7L%2B%2ByaO5wqBWEyK1TjmMdzcVGc2CWptP0SdIQyDh8JO10jD4F2fyVEkPaRbIwb4xH9%2FgRfuPmGsGxwjk7L8Sl0wz5%2F1RXGhXjYjYBQ8lKqzengM8PcbR4z2cxHfTBKZMz%2BlNUcTUA&X-Amz-Signature=10e6233751378ef1d1bd256313bb512816c08f7b7d8ad140619f34c587992212&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZJSZBQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYaTB5ZsOH%2FlplEaxm6CWfAa%2B4hd%2FRHc1xfmgkcA3ccwIhAP9WfTwoQ67WPiQ5s02LZ1j4g05Q5mezp%2B4QIq7HXuVHKv8DCDcQABoMNjM3NDIzMTgzODA1IgxNXKlf0Ls0rX0HCh0q3AMZ3tP%2FiKG%2FVhskgcv%2F4cPRd1fTEYdS0m2KUkohWcmhi88ajM6dzN%2B%2B4RIfFMd1NsqGb92%2BZv4IQlGwzTG56Z67O2KNApy2gO6Dl2N9K%2FlnI1kw9G0jj0SSUGkuX7ISPyB%2Bbyts5J0RV7BC%2FWkYVEy0GKdGX9tlXBQIjtLkZjAI7wuRESifxN4BGtnEY164zVd%2BR2YQ8pIgRWhtUcrVCJ07YGhZG3d3ggCKYlxxQxhyiYVqFTd9u2txs15Y0brc6nSJGBzD1AYHmFCAWl5s3f9zFnhAa6Ku6cc3Gy%2FgkyPMACMOEv45v1%2B%2FxXM1B3s1Z2msMWpBXQqCE%2BSfabSWd6BYvQPjWYcJtUlZ0EEVoHkWf2Wm2DnNbXa5fqD4TCgF1DQSALLNkh82CUxu9hLd6FmZg3eVkkJWOgEStBmMTbstE4l%2BnTgPzwyx%2BuN4vf4tBCrqOTISzN8%2BkwEXiDddJDkeMNfQc479%2FD5jARUTQ2F4IMGyGbjzrACD%2FuJ24HvnL%2Fnx%2F4UcU3SC3qHlJgnmzKBwJ6KvJFQWpAqkNJ5ZDIO9N9%2B1S94pZaVxb88n6ADiOblVf%2BijZHqUXdU3HgGw%2FFVLdcrstwWNIQ4ZInjzE9rFK5dFRJaHWbUkKRfGtzD58ZG%2FBjqkAbjJoQO%2F9Lv%2BCwYhg1b%2BY%2BzhixO2WpJzaD1mims6ES2XP%2FTL9XQ7WVLe3y1T8Al2sslTeOL5Wxkuhl0jeJe7L%2B%2ByaO5wqBWEyK1TjmMdzcVGc2CWptP0SdIQyDh8JO10jD4F2fyVEkPaRbIwb4xH9%2FgRfuPmGsGxwjk7L8Sl0wz5%2F1RXGhXjYjYBQ8lKqzengM8PcbR4z2cxHfTBKZMz%2BlNUcTUA&X-Amz-Signature=4c28ee2158f0af9e60251f667cce33530be902f9eeb0af67c27d2de35f80748f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
