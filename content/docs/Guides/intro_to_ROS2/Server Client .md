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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELWESW7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCX08G8LXrNuFfUB2%2BdrPGkTIjE0Qz2I0ELUPeWcA7HRgIgeC%2BcKpkCbqBSnSWMwgGbCYc0Jbb8pPE8LbHqIgc2twsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHfTxHfa9sd%2B3xkOCrcA%2FxwQKAPIidkIbJWGFH1wGOrqYznKheUKcaWJo4TXCuCetIi6TNf7X10PZ3cCdtVKsgJUxxiNGNejeipOhInnX%2FvtmzXmcR36y5gXjXG9Dc9A6vVvEjajV4W8J4qpUrIsJdIdlpKCd0kPvJ9JRDFfpPZnWr0BqoGzcOJXWJPN830ln14w7smJIjiq8t%2F4NcgCTOAYqJC7YsVjV%2FJov2gynrHmC59iZil8S00smiTpC%2FQyZHfTf3ariJ0eyBcuSRGv6uyXExi%2BJe%2BitwRt5BjY53ymhkeOlW%2BzjaDd9inJhNr69kYyblHSrNM1jmuM0anRB38Os3krwKgzgYDeW4ZCaDHTL8Hd6dtyH6fllozt1hRMMcpX8CGqIQcmG03mHn1qI%2FKjpU%2BZb5urC3JZ5hSSvOQZ9OoWwy27ilyioSC4EVMA3zRtvslyYPjHxCiDzutOMfzdq1rWetjS5JvAPoaxC%2FVeSwUr%2BVX3YmYRwXIrdlqmVdVeLVqnNZ5jw42uI%2B2Y8cZPs1fV%2BLUhtUoliXwVV8BxKELroahmUzfZwbZ6cTCfONv1kPKGNyovb0XLXtPL%2FApvM7LXaoAu0%2BfwqSgDcXdkGRI0zTvhigqA3p12h2Yx7W%2FO01jWvtIu2NRMILEgMEGOqUBcGE9JVyyn2mZD%2BfepsXVTGDl9AXyZabL6ygQG6Lt%2FEaaKfVE5N1yGgxh6Z374JsTgu0%2FG3rUNxchMMRdz8XAEqOC4swf%2FR3HFBcWb59UnllU9EgszxUgowdlRVu3ZCCDgWk8vq8Sdn1nqvxTmHnwHKekPuzBpY4d3cgOkkbRnHVN6CndAfPQDcieFsSi%2FO%2FqWDUHzuUFBb7bGDDM0d9rBe7Y%2B9jE&X-Amz-Signature=d30430432546b35bb83684c0bcbd71afa68d1f152c5db6bb24c20a58fc90b831&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELWESW7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCX08G8LXrNuFfUB2%2BdrPGkTIjE0Qz2I0ELUPeWcA7HRgIgeC%2BcKpkCbqBSnSWMwgGbCYc0Jbb8pPE8LbHqIgc2twsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHfTxHfa9sd%2B3xkOCrcA%2FxwQKAPIidkIbJWGFH1wGOrqYznKheUKcaWJo4TXCuCetIi6TNf7X10PZ3cCdtVKsgJUxxiNGNejeipOhInnX%2FvtmzXmcR36y5gXjXG9Dc9A6vVvEjajV4W8J4qpUrIsJdIdlpKCd0kPvJ9JRDFfpPZnWr0BqoGzcOJXWJPN830ln14w7smJIjiq8t%2F4NcgCTOAYqJC7YsVjV%2FJov2gynrHmC59iZil8S00smiTpC%2FQyZHfTf3ariJ0eyBcuSRGv6uyXExi%2BJe%2BitwRt5BjY53ymhkeOlW%2BzjaDd9inJhNr69kYyblHSrNM1jmuM0anRB38Os3krwKgzgYDeW4ZCaDHTL8Hd6dtyH6fllozt1hRMMcpX8CGqIQcmG03mHn1qI%2FKjpU%2BZb5urC3JZ5hSSvOQZ9OoWwy27ilyioSC4EVMA3zRtvslyYPjHxCiDzutOMfzdq1rWetjS5JvAPoaxC%2FVeSwUr%2BVX3YmYRwXIrdlqmVdVeLVqnNZ5jw42uI%2B2Y8cZPs1fV%2BLUhtUoliXwVV8BxKELroahmUzfZwbZ6cTCfONv1kPKGNyovb0XLXtPL%2FApvM7LXaoAu0%2BfwqSgDcXdkGRI0zTvhigqA3p12h2Yx7W%2FO01jWvtIu2NRMILEgMEGOqUBcGE9JVyyn2mZD%2BfepsXVTGDl9AXyZabL6ygQG6Lt%2FEaaKfVE5N1yGgxh6Z374JsTgu0%2FG3rUNxchMMRdz8XAEqOC4swf%2FR3HFBcWb59UnllU9EgszxUgowdlRVu3ZCCDgWk8vq8Sdn1nqvxTmHnwHKekPuzBpY4d3cgOkkbRnHVN6CndAfPQDcieFsSi%2FO%2FqWDUHzuUFBb7bGDDM0d9rBe7Y%2B9jE&X-Amz-Signature=1c8574b06058120952f8556449b731788463c00a1d6153e845439480b0e1ab99&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELWESW7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCX08G8LXrNuFfUB2%2BdrPGkTIjE0Qz2I0ELUPeWcA7HRgIgeC%2BcKpkCbqBSnSWMwgGbCYc0Jbb8pPE8LbHqIgc2twsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHfTxHfa9sd%2B3xkOCrcA%2FxwQKAPIidkIbJWGFH1wGOrqYznKheUKcaWJo4TXCuCetIi6TNf7X10PZ3cCdtVKsgJUxxiNGNejeipOhInnX%2FvtmzXmcR36y5gXjXG9Dc9A6vVvEjajV4W8J4qpUrIsJdIdlpKCd0kPvJ9JRDFfpPZnWr0BqoGzcOJXWJPN830ln14w7smJIjiq8t%2F4NcgCTOAYqJC7YsVjV%2FJov2gynrHmC59iZil8S00smiTpC%2FQyZHfTf3ariJ0eyBcuSRGv6uyXExi%2BJe%2BitwRt5BjY53ymhkeOlW%2BzjaDd9inJhNr69kYyblHSrNM1jmuM0anRB38Os3krwKgzgYDeW4ZCaDHTL8Hd6dtyH6fllozt1hRMMcpX8CGqIQcmG03mHn1qI%2FKjpU%2BZb5urC3JZ5hSSvOQZ9OoWwy27ilyioSC4EVMA3zRtvslyYPjHxCiDzutOMfzdq1rWetjS5JvAPoaxC%2FVeSwUr%2BVX3YmYRwXIrdlqmVdVeLVqnNZ5jw42uI%2B2Y8cZPs1fV%2BLUhtUoliXwVV8BxKELroahmUzfZwbZ6cTCfONv1kPKGNyovb0XLXtPL%2FApvM7LXaoAu0%2BfwqSgDcXdkGRI0zTvhigqA3p12h2Yx7W%2FO01jWvtIu2NRMILEgMEGOqUBcGE9JVyyn2mZD%2BfepsXVTGDl9AXyZabL6ygQG6Lt%2FEaaKfVE5N1yGgxh6Z374JsTgu0%2FG3rUNxchMMRdz8XAEqOC4swf%2FR3HFBcWb59UnllU9EgszxUgowdlRVu3ZCCDgWk8vq8Sdn1nqvxTmHnwHKekPuzBpY4d3cgOkkbRnHVN6CndAfPQDcieFsSi%2FO%2FqWDUHzuUFBb7bGDDM0d9rBe7Y%2B9jE&X-Amz-Signature=a07acc537a559377f84209ff8a09f1e96ff47bc303309c31e0c4b7015348685b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELWESW7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCX08G8LXrNuFfUB2%2BdrPGkTIjE0Qz2I0ELUPeWcA7HRgIgeC%2BcKpkCbqBSnSWMwgGbCYc0Jbb8pPE8LbHqIgc2twsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHfTxHfa9sd%2B3xkOCrcA%2FxwQKAPIidkIbJWGFH1wGOrqYznKheUKcaWJo4TXCuCetIi6TNf7X10PZ3cCdtVKsgJUxxiNGNejeipOhInnX%2FvtmzXmcR36y5gXjXG9Dc9A6vVvEjajV4W8J4qpUrIsJdIdlpKCd0kPvJ9JRDFfpPZnWr0BqoGzcOJXWJPN830ln14w7smJIjiq8t%2F4NcgCTOAYqJC7YsVjV%2FJov2gynrHmC59iZil8S00smiTpC%2FQyZHfTf3ariJ0eyBcuSRGv6uyXExi%2BJe%2BitwRt5BjY53ymhkeOlW%2BzjaDd9inJhNr69kYyblHSrNM1jmuM0anRB38Os3krwKgzgYDeW4ZCaDHTL8Hd6dtyH6fllozt1hRMMcpX8CGqIQcmG03mHn1qI%2FKjpU%2BZb5urC3JZ5hSSvOQZ9OoWwy27ilyioSC4EVMA3zRtvslyYPjHxCiDzutOMfzdq1rWetjS5JvAPoaxC%2FVeSwUr%2BVX3YmYRwXIrdlqmVdVeLVqnNZ5jw42uI%2B2Y8cZPs1fV%2BLUhtUoliXwVV8BxKELroahmUzfZwbZ6cTCfONv1kPKGNyovb0XLXtPL%2FApvM7LXaoAu0%2BfwqSgDcXdkGRI0zTvhigqA3p12h2Yx7W%2FO01jWvtIu2NRMILEgMEGOqUBcGE9JVyyn2mZD%2BfepsXVTGDl9AXyZabL6ygQG6Lt%2FEaaKfVE5N1yGgxh6Z374JsTgu0%2FG3rUNxchMMRdz8XAEqOC4swf%2FR3HFBcWb59UnllU9EgszxUgowdlRVu3ZCCDgWk8vq8Sdn1nqvxTmHnwHKekPuzBpY4d3cgOkkbRnHVN6CndAfPQDcieFsSi%2FO%2FqWDUHzuUFBb7bGDDM0d9rBe7Y%2B9jE&X-Amz-Signature=26c6960972279b8237a1718a45472045190e323a1831c8ac1dc2ac13ff6c12fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELWESW7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCX08G8LXrNuFfUB2%2BdrPGkTIjE0Qz2I0ELUPeWcA7HRgIgeC%2BcKpkCbqBSnSWMwgGbCYc0Jbb8pPE8LbHqIgc2twsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHfTxHfa9sd%2B3xkOCrcA%2FxwQKAPIidkIbJWGFH1wGOrqYznKheUKcaWJo4TXCuCetIi6TNf7X10PZ3cCdtVKsgJUxxiNGNejeipOhInnX%2FvtmzXmcR36y5gXjXG9Dc9A6vVvEjajV4W8J4qpUrIsJdIdlpKCd0kPvJ9JRDFfpPZnWr0BqoGzcOJXWJPN830ln14w7smJIjiq8t%2F4NcgCTOAYqJC7YsVjV%2FJov2gynrHmC59iZil8S00smiTpC%2FQyZHfTf3ariJ0eyBcuSRGv6uyXExi%2BJe%2BitwRt5BjY53ymhkeOlW%2BzjaDd9inJhNr69kYyblHSrNM1jmuM0anRB38Os3krwKgzgYDeW4ZCaDHTL8Hd6dtyH6fllozt1hRMMcpX8CGqIQcmG03mHn1qI%2FKjpU%2BZb5urC3JZ5hSSvOQZ9OoWwy27ilyioSC4EVMA3zRtvslyYPjHxCiDzutOMfzdq1rWetjS5JvAPoaxC%2FVeSwUr%2BVX3YmYRwXIrdlqmVdVeLVqnNZ5jw42uI%2B2Y8cZPs1fV%2BLUhtUoliXwVV8BxKELroahmUzfZwbZ6cTCfONv1kPKGNyovb0XLXtPL%2FApvM7LXaoAu0%2BfwqSgDcXdkGRI0zTvhigqA3p12h2Yx7W%2FO01jWvtIu2NRMILEgMEGOqUBcGE9JVyyn2mZD%2BfepsXVTGDl9AXyZabL6ygQG6Lt%2FEaaKfVE5N1yGgxh6Z374JsTgu0%2FG3rUNxchMMRdz8XAEqOC4swf%2FR3HFBcWb59UnllU9EgszxUgowdlRVu3ZCCDgWk8vq8Sdn1nqvxTmHnwHKekPuzBpY4d3cgOkkbRnHVN6CndAfPQDcieFsSi%2FO%2FqWDUHzuUFBb7bGDDM0d9rBe7Y%2B9jE&X-Amz-Signature=0b378f62f97bf1ce84bf72765a40c59053520c2c731d75c45b42e190bb71192e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
