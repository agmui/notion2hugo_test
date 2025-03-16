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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLUWH33%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWPUu1kVaivrz6a9dKnPjTukB3T%2FEb1ZE4la8EcwDdVAIgdeI%2Ff2zWL6b0roF4m8rsdgxCpagUnKOxGfkyz2UfGbwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDUdbOvPeafnRU9ZtSrcA397fWBs6Rm7KsLy7bvWnqWfC7wOAxp2w0ralc3ZFm1zA9AwuMaW%2B85hdF02hIKKqHGmyIq3E8r7er249qjy0OtLXa6owghQMvgzZ8WMg3yayED19wiZO66WKPk8OJjMR6kHfBOaHMhu4JEV2I%2BADN3hO9hOvqWKwOpwNJOtVnX3SmihoO2eUTLXqAzAs66ey1HeHYWimS9GgEzFzRsq5CjhNlkBrxsDvXsaz1jbu8xp8ZmWukobrkETJz8Ns49UBE3wnq569lFtrwSokqec0dGmyAxl2rCagkgzvmNqosWdwFs5IgPZISqN5deG6pi78eM0ng79%2FmmcVIuA12pRe%2F8yBfg41FkpRGr43N0ua06jaZv2vGdueC7EsdAp347zaWCdEYI3cfQoCnkvmwzxKD%2Bvkv9YW1pwjqnxxLdJlwkzb0FjsdayWzQuubRqoZGEoAp2QSVmtKmcvpuJVMLtQyC4NbrBxTX9J4OGdyod1UguYDk8XCwWCedFuyP0JjR8aqAdzqT5FbQukC3mMudt%2BNlEXS2%2BiwgK298ul1nlEQ%2BUacYr2wAlomioH5LgITg%2BP2v6qBCjZa97BNvWeNt%2FjQRcmWv38y8nDVq3DKh1R%2BaYmGFg0Og5NEwVq0kNMPm93L4GOqUBD7BioXC%2BGIRCev5uJxy%2FYvIWBDasI%2FfIS0x8GHeFW0bqPFtoIs9cBhUp7h3jsqaydhTpP9E6ieBmYM0m48l4JfUS5saPmf7nWJSMsgGk90zEo8dj6i8AbkK%2FKcqQBzfAhdqL528I4b8AwYFK5P1e31ppqD2LQ15dbGdw4KcWyiYlQbe0elAHGJiz%2FXxcAnyv9Q6KbY2WAQz0iFt5h1xAD9tpC7vl&X-Amz-Signature=1751cd32070cec4ed0e40127fb5fbdb2d88c71f979cc2479aa3a1cb575d86186&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLUWH33%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWPUu1kVaivrz6a9dKnPjTukB3T%2FEb1ZE4la8EcwDdVAIgdeI%2Ff2zWL6b0roF4m8rsdgxCpagUnKOxGfkyz2UfGbwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDUdbOvPeafnRU9ZtSrcA397fWBs6Rm7KsLy7bvWnqWfC7wOAxp2w0ralc3ZFm1zA9AwuMaW%2B85hdF02hIKKqHGmyIq3E8r7er249qjy0OtLXa6owghQMvgzZ8WMg3yayED19wiZO66WKPk8OJjMR6kHfBOaHMhu4JEV2I%2BADN3hO9hOvqWKwOpwNJOtVnX3SmihoO2eUTLXqAzAs66ey1HeHYWimS9GgEzFzRsq5CjhNlkBrxsDvXsaz1jbu8xp8ZmWukobrkETJz8Ns49UBE3wnq569lFtrwSokqec0dGmyAxl2rCagkgzvmNqosWdwFs5IgPZISqN5deG6pi78eM0ng79%2FmmcVIuA12pRe%2F8yBfg41FkpRGr43N0ua06jaZv2vGdueC7EsdAp347zaWCdEYI3cfQoCnkvmwzxKD%2Bvkv9YW1pwjqnxxLdJlwkzb0FjsdayWzQuubRqoZGEoAp2QSVmtKmcvpuJVMLtQyC4NbrBxTX9J4OGdyod1UguYDk8XCwWCedFuyP0JjR8aqAdzqT5FbQukC3mMudt%2BNlEXS2%2BiwgK298ul1nlEQ%2BUacYr2wAlomioH5LgITg%2BP2v6qBCjZa97BNvWeNt%2FjQRcmWv38y8nDVq3DKh1R%2BaYmGFg0Og5NEwVq0kNMPm93L4GOqUBD7BioXC%2BGIRCev5uJxy%2FYvIWBDasI%2FfIS0x8GHeFW0bqPFtoIs9cBhUp7h3jsqaydhTpP9E6ieBmYM0m48l4JfUS5saPmf7nWJSMsgGk90zEo8dj6i8AbkK%2FKcqQBzfAhdqL528I4b8AwYFK5P1e31ppqD2LQ15dbGdw4KcWyiYlQbe0elAHGJiz%2FXxcAnyv9Q6KbY2WAQz0iFt5h1xAD9tpC7vl&X-Amz-Signature=090e319300adb6ca142e1d890bd5bc76d4d68db6379e875d2b6a684b11fc75ef&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLUWH33%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWPUu1kVaivrz6a9dKnPjTukB3T%2FEb1ZE4la8EcwDdVAIgdeI%2Ff2zWL6b0roF4m8rsdgxCpagUnKOxGfkyz2UfGbwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDUdbOvPeafnRU9ZtSrcA397fWBs6Rm7KsLy7bvWnqWfC7wOAxp2w0ralc3ZFm1zA9AwuMaW%2B85hdF02hIKKqHGmyIq3E8r7er249qjy0OtLXa6owghQMvgzZ8WMg3yayED19wiZO66WKPk8OJjMR6kHfBOaHMhu4JEV2I%2BADN3hO9hOvqWKwOpwNJOtVnX3SmihoO2eUTLXqAzAs66ey1HeHYWimS9GgEzFzRsq5CjhNlkBrxsDvXsaz1jbu8xp8ZmWukobrkETJz8Ns49UBE3wnq569lFtrwSokqec0dGmyAxl2rCagkgzvmNqosWdwFs5IgPZISqN5deG6pi78eM0ng79%2FmmcVIuA12pRe%2F8yBfg41FkpRGr43N0ua06jaZv2vGdueC7EsdAp347zaWCdEYI3cfQoCnkvmwzxKD%2Bvkv9YW1pwjqnxxLdJlwkzb0FjsdayWzQuubRqoZGEoAp2QSVmtKmcvpuJVMLtQyC4NbrBxTX9J4OGdyod1UguYDk8XCwWCedFuyP0JjR8aqAdzqT5FbQukC3mMudt%2BNlEXS2%2BiwgK298ul1nlEQ%2BUacYr2wAlomioH5LgITg%2BP2v6qBCjZa97BNvWeNt%2FjQRcmWv38y8nDVq3DKh1R%2BaYmGFg0Og5NEwVq0kNMPm93L4GOqUBD7BioXC%2BGIRCev5uJxy%2FYvIWBDasI%2FfIS0x8GHeFW0bqPFtoIs9cBhUp7h3jsqaydhTpP9E6ieBmYM0m48l4JfUS5saPmf7nWJSMsgGk90zEo8dj6i8AbkK%2FKcqQBzfAhdqL528I4b8AwYFK5P1e31ppqD2LQ15dbGdw4KcWyiYlQbe0elAHGJiz%2FXxcAnyv9Q6KbY2WAQz0iFt5h1xAD9tpC7vl&X-Amz-Signature=334b291e8ee00c1eaf5eba11a983c6fde709bd3563c4ae56291005c0475d15a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLUWH33%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWPUu1kVaivrz6a9dKnPjTukB3T%2FEb1ZE4la8EcwDdVAIgdeI%2Ff2zWL6b0roF4m8rsdgxCpagUnKOxGfkyz2UfGbwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDUdbOvPeafnRU9ZtSrcA397fWBs6Rm7KsLy7bvWnqWfC7wOAxp2w0ralc3ZFm1zA9AwuMaW%2B85hdF02hIKKqHGmyIq3E8r7er249qjy0OtLXa6owghQMvgzZ8WMg3yayED19wiZO66WKPk8OJjMR6kHfBOaHMhu4JEV2I%2BADN3hO9hOvqWKwOpwNJOtVnX3SmihoO2eUTLXqAzAs66ey1HeHYWimS9GgEzFzRsq5CjhNlkBrxsDvXsaz1jbu8xp8ZmWukobrkETJz8Ns49UBE3wnq569lFtrwSokqec0dGmyAxl2rCagkgzvmNqosWdwFs5IgPZISqN5deG6pi78eM0ng79%2FmmcVIuA12pRe%2F8yBfg41FkpRGr43N0ua06jaZv2vGdueC7EsdAp347zaWCdEYI3cfQoCnkvmwzxKD%2Bvkv9YW1pwjqnxxLdJlwkzb0FjsdayWzQuubRqoZGEoAp2QSVmtKmcvpuJVMLtQyC4NbrBxTX9J4OGdyod1UguYDk8XCwWCedFuyP0JjR8aqAdzqT5FbQukC3mMudt%2BNlEXS2%2BiwgK298ul1nlEQ%2BUacYr2wAlomioH5LgITg%2BP2v6qBCjZa97BNvWeNt%2FjQRcmWv38y8nDVq3DKh1R%2BaYmGFg0Og5NEwVq0kNMPm93L4GOqUBD7BioXC%2BGIRCev5uJxy%2FYvIWBDasI%2FfIS0x8GHeFW0bqPFtoIs9cBhUp7h3jsqaydhTpP9E6ieBmYM0m48l4JfUS5saPmf7nWJSMsgGk90zEo8dj6i8AbkK%2FKcqQBzfAhdqL528I4b8AwYFK5P1e31ppqD2LQ15dbGdw4KcWyiYlQbe0elAHGJiz%2FXxcAnyv9Q6KbY2WAQz0iFt5h1xAD9tpC7vl&X-Amz-Signature=5207feb536eebd7d8b0216a80a2fec3d12aeac801e5a9ba14d4ba9eafc4c6b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLUWH33%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWPUu1kVaivrz6a9dKnPjTukB3T%2FEb1ZE4la8EcwDdVAIgdeI%2Ff2zWL6b0roF4m8rsdgxCpagUnKOxGfkyz2UfGbwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDUdbOvPeafnRU9ZtSrcA397fWBs6Rm7KsLy7bvWnqWfC7wOAxp2w0ralc3ZFm1zA9AwuMaW%2B85hdF02hIKKqHGmyIq3E8r7er249qjy0OtLXa6owghQMvgzZ8WMg3yayED19wiZO66WKPk8OJjMR6kHfBOaHMhu4JEV2I%2BADN3hO9hOvqWKwOpwNJOtVnX3SmihoO2eUTLXqAzAs66ey1HeHYWimS9GgEzFzRsq5CjhNlkBrxsDvXsaz1jbu8xp8ZmWukobrkETJz8Ns49UBE3wnq569lFtrwSokqec0dGmyAxl2rCagkgzvmNqosWdwFs5IgPZISqN5deG6pi78eM0ng79%2FmmcVIuA12pRe%2F8yBfg41FkpRGr43N0ua06jaZv2vGdueC7EsdAp347zaWCdEYI3cfQoCnkvmwzxKD%2Bvkv9YW1pwjqnxxLdJlwkzb0FjsdayWzQuubRqoZGEoAp2QSVmtKmcvpuJVMLtQyC4NbrBxTX9J4OGdyod1UguYDk8XCwWCedFuyP0JjR8aqAdzqT5FbQukC3mMudt%2BNlEXS2%2BiwgK298ul1nlEQ%2BUacYr2wAlomioH5LgITg%2BP2v6qBCjZa97BNvWeNt%2FjQRcmWv38y8nDVq3DKh1R%2BaYmGFg0Og5NEwVq0kNMPm93L4GOqUBD7BioXC%2BGIRCev5uJxy%2FYvIWBDasI%2FfIS0x8GHeFW0bqPFtoIs9cBhUp7h3jsqaydhTpP9E6ieBmYM0m48l4JfUS5saPmf7nWJSMsgGk90zEo8dj6i8AbkK%2FKcqQBzfAhdqL528I4b8AwYFK5P1e31ppqD2LQ15dbGdw4KcWyiYlQbe0elAHGJiz%2FXxcAnyv9Q6KbY2WAQz0iFt5h1xAD9tpC7vl&X-Amz-Signature=e2911487f134c5b1a068c89bc5b25d6a1cabaccdc79b3a5bbe8dd6c2aeefd08a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
