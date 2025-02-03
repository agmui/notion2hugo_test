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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZLZKVB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6RhBayIm3WLpobGIP%2BPXdsJ2xQfQCr9Xzaa%2FAbTVfIAiBHWCLxuuOg75jIvsh3TjR5vcHmiRM9yM5srnB1HyYZUyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM5mmhGgidA5tL0fUMKtwD2aTPGGyuHCoo4H1fF2ReR05n0OlsSqxfVbAJB4UHkBXm5d8fPv0noMBPituCXzSt1R%2FNXk2ZIRQhqqZa6M2CrXinFEI90XNND6I3JuD53MbTWwmlLgpBJYibqHq9Iy6lTXM20rasakVqyAEfQ%2BDAQAUDzrBNVl7rk5Ugfkpe7Ybxr9hyzcsGEpJfePjiGiiaGZqIwOX5TCM2LXLlHIAMykjUDlPeAozi7svUT3xKqMbcIYQR7tqBg8PFBZT5gEgnvvyHMmjX6aH6Z5UDUfpO%2FO%2FFyfCWthUEHE9GfPIwN7%2B4aNrl6dMFtR%2FeEbfFpJWziIgp1Js%2FwRVWDOE%2BIX55GDAs9MtSG2HGvbO5Z6IgiudnZ4yJ1eUwMNkAaHwbc45SXGBudgIQD9h2SQzuVymP9OiLTf3MmhyqLWJfSp%2F44pt0sLERVngALKEDQ5MVTo6DjPFmQeWhrebd8ZCmz591ONGQBha6QktKjh0NcT6rXGoHxeqoEHeEI9JA%2FiowWj7Z9TfDUuwkCNDTH0evu%2B9MmaVzLmYljviN6EJ8FrWE%2FARpLim8bTGf4iLzw55b%2B4LN3jqEBKBFNPDBdQgYgVY6WHV5FxQ0HFqXJJSmppL1ELU4OSBBqCBtr1R69QMwhNWCvQY6pgHxnv6uCKrz%2BdeBNyGG3mLeweaEPLFgoCvCM7mIpH4VPcT1lsdaYBWEJYZHG5Cr4f9D8ImjUu1MzK9e0DrCDYoa3K7mc%2Bg1dxyY0FldpcM9QAB7aU6tIXi3459mPIgVJk6I5yqEjsVyEvJNTCE6jvqkt8oszoALKehbgyKArB5oh45N1oHuxDeeX7vKNS4BKH4NFikixjIbJI9FGAU3pskNLYc8khA9&X-Amz-Signature=ddf97d1da7fd09dc06516346359466f65131c23554aac6fa068c50ca82e92046&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZLZKVB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6RhBayIm3WLpobGIP%2BPXdsJ2xQfQCr9Xzaa%2FAbTVfIAiBHWCLxuuOg75jIvsh3TjR5vcHmiRM9yM5srnB1HyYZUyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM5mmhGgidA5tL0fUMKtwD2aTPGGyuHCoo4H1fF2ReR05n0OlsSqxfVbAJB4UHkBXm5d8fPv0noMBPituCXzSt1R%2FNXk2ZIRQhqqZa6M2CrXinFEI90XNND6I3JuD53MbTWwmlLgpBJYibqHq9Iy6lTXM20rasakVqyAEfQ%2BDAQAUDzrBNVl7rk5Ugfkpe7Ybxr9hyzcsGEpJfePjiGiiaGZqIwOX5TCM2LXLlHIAMykjUDlPeAozi7svUT3xKqMbcIYQR7tqBg8PFBZT5gEgnvvyHMmjX6aH6Z5UDUfpO%2FO%2FFyfCWthUEHE9GfPIwN7%2B4aNrl6dMFtR%2FeEbfFpJWziIgp1Js%2FwRVWDOE%2BIX55GDAs9MtSG2HGvbO5Z6IgiudnZ4yJ1eUwMNkAaHwbc45SXGBudgIQD9h2SQzuVymP9OiLTf3MmhyqLWJfSp%2F44pt0sLERVngALKEDQ5MVTo6DjPFmQeWhrebd8ZCmz591ONGQBha6QktKjh0NcT6rXGoHxeqoEHeEI9JA%2FiowWj7Z9TfDUuwkCNDTH0evu%2B9MmaVzLmYljviN6EJ8FrWE%2FARpLim8bTGf4iLzw55b%2B4LN3jqEBKBFNPDBdQgYgVY6WHV5FxQ0HFqXJJSmppL1ELU4OSBBqCBtr1R69QMwhNWCvQY6pgHxnv6uCKrz%2BdeBNyGG3mLeweaEPLFgoCvCM7mIpH4VPcT1lsdaYBWEJYZHG5Cr4f9D8ImjUu1MzK9e0DrCDYoa3K7mc%2Bg1dxyY0FldpcM9QAB7aU6tIXi3459mPIgVJk6I5yqEjsVyEvJNTCE6jvqkt8oszoALKehbgyKArB5oh45N1oHuxDeeX7vKNS4BKH4NFikixjIbJI9FGAU3pskNLYc8khA9&X-Amz-Signature=59eb9e4cdf70d3c588c0ae13ea45e30c0169389e44905a1dfa6d8bda694cda7c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZLZKVB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6RhBayIm3WLpobGIP%2BPXdsJ2xQfQCr9Xzaa%2FAbTVfIAiBHWCLxuuOg75jIvsh3TjR5vcHmiRM9yM5srnB1HyYZUyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM5mmhGgidA5tL0fUMKtwD2aTPGGyuHCoo4H1fF2ReR05n0OlsSqxfVbAJB4UHkBXm5d8fPv0noMBPituCXzSt1R%2FNXk2ZIRQhqqZa6M2CrXinFEI90XNND6I3JuD53MbTWwmlLgpBJYibqHq9Iy6lTXM20rasakVqyAEfQ%2BDAQAUDzrBNVl7rk5Ugfkpe7Ybxr9hyzcsGEpJfePjiGiiaGZqIwOX5TCM2LXLlHIAMykjUDlPeAozi7svUT3xKqMbcIYQR7tqBg8PFBZT5gEgnvvyHMmjX6aH6Z5UDUfpO%2FO%2FFyfCWthUEHE9GfPIwN7%2B4aNrl6dMFtR%2FeEbfFpJWziIgp1Js%2FwRVWDOE%2BIX55GDAs9MtSG2HGvbO5Z6IgiudnZ4yJ1eUwMNkAaHwbc45SXGBudgIQD9h2SQzuVymP9OiLTf3MmhyqLWJfSp%2F44pt0sLERVngALKEDQ5MVTo6DjPFmQeWhrebd8ZCmz591ONGQBha6QktKjh0NcT6rXGoHxeqoEHeEI9JA%2FiowWj7Z9TfDUuwkCNDTH0evu%2B9MmaVzLmYljviN6EJ8FrWE%2FARpLim8bTGf4iLzw55b%2B4LN3jqEBKBFNPDBdQgYgVY6WHV5FxQ0HFqXJJSmppL1ELU4OSBBqCBtr1R69QMwhNWCvQY6pgHxnv6uCKrz%2BdeBNyGG3mLeweaEPLFgoCvCM7mIpH4VPcT1lsdaYBWEJYZHG5Cr4f9D8ImjUu1MzK9e0DrCDYoa3K7mc%2Bg1dxyY0FldpcM9QAB7aU6tIXi3459mPIgVJk6I5yqEjsVyEvJNTCE6jvqkt8oszoALKehbgyKArB5oh45N1oHuxDeeX7vKNS4BKH4NFikixjIbJI9FGAU3pskNLYc8khA9&X-Amz-Signature=3cea67fa86e8ba95736c719025e554e8f3a01e92e40ca1a0cb9f40291e8855a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZLZKVB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6RhBayIm3WLpobGIP%2BPXdsJ2xQfQCr9Xzaa%2FAbTVfIAiBHWCLxuuOg75jIvsh3TjR5vcHmiRM9yM5srnB1HyYZUyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM5mmhGgidA5tL0fUMKtwD2aTPGGyuHCoo4H1fF2ReR05n0OlsSqxfVbAJB4UHkBXm5d8fPv0noMBPituCXzSt1R%2FNXk2ZIRQhqqZa6M2CrXinFEI90XNND6I3JuD53MbTWwmlLgpBJYibqHq9Iy6lTXM20rasakVqyAEfQ%2BDAQAUDzrBNVl7rk5Ugfkpe7Ybxr9hyzcsGEpJfePjiGiiaGZqIwOX5TCM2LXLlHIAMykjUDlPeAozi7svUT3xKqMbcIYQR7tqBg8PFBZT5gEgnvvyHMmjX6aH6Z5UDUfpO%2FO%2FFyfCWthUEHE9GfPIwN7%2B4aNrl6dMFtR%2FeEbfFpJWziIgp1Js%2FwRVWDOE%2BIX55GDAs9MtSG2HGvbO5Z6IgiudnZ4yJ1eUwMNkAaHwbc45SXGBudgIQD9h2SQzuVymP9OiLTf3MmhyqLWJfSp%2F44pt0sLERVngALKEDQ5MVTo6DjPFmQeWhrebd8ZCmz591ONGQBha6QktKjh0NcT6rXGoHxeqoEHeEI9JA%2FiowWj7Z9TfDUuwkCNDTH0evu%2B9MmaVzLmYljviN6EJ8FrWE%2FARpLim8bTGf4iLzw55b%2B4LN3jqEBKBFNPDBdQgYgVY6WHV5FxQ0HFqXJJSmppL1ELU4OSBBqCBtr1R69QMwhNWCvQY6pgHxnv6uCKrz%2BdeBNyGG3mLeweaEPLFgoCvCM7mIpH4VPcT1lsdaYBWEJYZHG5Cr4f9D8ImjUu1MzK9e0DrCDYoa3K7mc%2Bg1dxyY0FldpcM9QAB7aU6tIXi3459mPIgVJk6I5yqEjsVyEvJNTCE6jvqkt8oszoALKehbgyKArB5oh45N1oHuxDeeX7vKNS4BKH4NFikixjIbJI9FGAU3pskNLYc8khA9&X-Amz-Signature=279a10b506e20c4b72e59709bbf29d67802048fa93c1704edca023a6c4ab4457&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZLZKVB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6RhBayIm3WLpobGIP%2BPXdsJ2xQfQCr9Xzaa%2FAbTVfIAiBHWCLxuuOg75jIvsh3TjR5vcHmiRM9yM5srnB1HyYZUyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM5mmhGgidA5tL0fUMKtwD2aTPGGyuHCoo4H1fF2ReR05n0OlsSqxfVbAJB4UHkBXm5d8fPv0noMBPituCXzSt1R%2FNXk2ZIRQhqqZa6M2CrXinFEI90XNND6I3JuD53MbTWwmlLgpBJYibqHq9Iy6lTXM20rasakVqyAEfQ%2BDAQAUDzrBNVl7rk5Ugfkpe7Ybxr9hyzcsGEpJfePjiGiiaGZqIwOX5TCM2LXLlHIAMykjUDlPeAozi7svUT3xKqMbcIYQR7tqBg8PFBZT5gEgnvvyHMmjX6aH6Z5UDUfpO%2FO%2FFyfCWthUEHE9GfPIwN7%2B4aNrl6dMFtR%2FeEbfFpJWziIgp1Js%2FwRVWDOE%2BIX55GDAs9MtSG2HGvbO5Z6IgiudnZ4yJ1eUwMNkAaHwbc45SXGBudgIQD9h2SQzuVymP9OiLTf3MmhyqLWJfSp%2F44pt0sLERVngALKEDQ5MVTo6DjPFmQeWhrebd8ZCmz591ONGQBha6QktKjh0NcT6rXGoHxeqoEHeEI9JA%2FiowWj7Z9TfDUuwkCNDTH0evu%2B9MmaVzLmYljviN6EJ8FrWE%2FARpLim8bTGf4iLzw55b%2B4LN3jqEBKBFNPDBdQgYgVY6WHV5FxQ0HFqXJJSmppL1ELU4OSBBqCBtr1R69QMwhNWCvQY6pgHxnv6uCKrz%2BdeBNyGG3mLeweaEPLFgoCvCM7mIpH4VPcT1lsdaYBWEJYZHG5Cr4f9D8ImjUu1MzK9e0DrCDYoa3K7mc%2Bg1dxyY0FldpcM9QAB7aU6tIXi3459mPIgVJk6I5yqEjsVyEvJNTCE6jvqkt8oszoALKehbgyKArB5oh45N1oHuxDeeX7vKNS4BKH4NFikixjIbJI9FGAU3pskNLYc8khA9&X-Amz-Signature=a1e817b32f94275ce7202302cce612c0aad994274af679f5585f2a670a41a624&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
