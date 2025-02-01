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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHBUEDU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr6i4hT%2FPfUV1Y52E6Wp%2BEaw5fWJKUP7XdNyGTYY1lKQIhAOq8Zg03Oaj1D4ZB%2FK2POZamhcIVeAIjKSCpk9Q7XjWvKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwILN99SmQNULXdyksq3AMcBy5xj9wG2uRqsTky%2BdYAtcgufj4N2jcRiZbk2iD6vevGQXsuj1%2BMG52%2BKQZgSkA%2BckeOsrzi%2Fyat6iZLbA0Z0rF9u4hlvwzHECKL%2FTFppXajpfXAOc%2FxEyCxl1mnCtCHT%2FTpSHTBksqPRTYDsuMvZBWevjDe0e6Nc36%2BjnmIY02bPJW%2F11RVMkOmrWAG0BHBNTS9bBMapqADG9JOpza233%2FdJHjZrr9USRwslCdimHrd8ABmRucV4JUgt2agIAsbfQQoRVpTVpJ2gbMDcoO1VVUV3%2BiPLv%2BhvtGLJ8JILHF0jijRW%2Faw7T27%2BSY3l3YLS0DxaehL8YCGZPPK%2B9yaPPf6WPnI33Uu0LTi%2BVfq0a7dT18VYWdJExkt9gTFYtfKU7PhmMpzDRWOND07uu7bNlvUe2J3XETjix3rLtYoPSP8EnQRmazoW1BlOnZw6yixZF8PojPsmf2pZcGwxVstCTZiOCO0MiCodooQdlLIc6Chpfq0fTE%2F8E75onRZVfjd3TKA729Ctd09BNrxADD7xsA6SWMSsl9s1uS0cvdC1UUGsMpN7pxOhqkKpuKz65MPWgpQ%2FOCKndVWt4ipEwg6wfaL%2F0iOkqEaZHl3IHTf%2BiaT6kKR6ALP1zFPSTCo7vW8BjqkASwU%2FKk5FlD%2FdFGjrBVKHEf%2BwuVa7WPIB3%2FCq6TOomacJwJA8TfPPu48XzXz5tWQRQdwvPX8kvW9GH1FVctffX1z6GbOQAhj%2FuUsK%2FNuFzJxkuVwQlzXeo%2FDKYfJIsxQKxaKq7OajnmyUHEawlS6IS7GSHn7W9sTIFDZwCwRBY7tabMz7ORHfi2arHOk2LTS7hrGRrG%2FSFJ92I2EuIaopcCk%2BQOW&X-Amz-Signature=2fe69d95ed5296cf4062d3c015540602162bd43a63b2b312153d31c158126fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHBUEDU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr6i4hT%2FPfUV1Y52E6Wp%2BEaw5fWJKUP7XdNyGTYY1lKQIhAOq8Zg03Oaj1D4ZB%2FK2POZamhcIVeAIjKSCpk9Q7XjWvKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwILN99SmQNULXdyksq3AMcBy5xj9wG2uRqsTky%2BdYAtcgufj4N2jcRiZbk2iD6vevGQXsuj1%2BMG52%2BKQZgSkA%2BckeOsrzi%2Fyat6iZLbA0Z0rF9u4hlvwzHECKL%2FTFppXajpfXAOc%2FxEyCxl1mnCtCHT%2FTpSHTBksqPRTYDsuMvZBWevjDe0e6Nc36%2BjnmIY02bPJW%2F11RVMkOmrWAG0BHBNTS9bBMapqADG9JOpza233%2FdJHjZrr9USRwslCdimHrd8ABmRucV4JUgt2agIAsbfQQoRVpTVpJ2gbMDcoO1VVUV3%2BiPLv%2BhvtGLJ8JILHF0jijRW%2Faw7T27%2BSY3l3YLS0DxaehL8YCGZPPK%2B9yaPPf6WPnI33Uu0LTi%2BVfq0a7dT18VYWdJExkt9gTFYtfKU7PhmMpzDRWOND07uu7bNlvUe2J3XETjix3rLtYoPSP8EnQRmazoW1BlOnZw6yixZF8PojPsmf2pZcGwxVstCTZiOCO0MiCodooQdlLIc6Chpfq0fTE%2F8E75onRZVfjd3TKA729Ctd09BNrxADD7xsA6SWMSsl9s1uS0cvdC1UUGsMpN7pxOhqkKpuKz65MPWgpQ%2FOCKndVWt4ipEwg6wfaL%2F0iOkqEaZHl3IHTf%2BiaT6kKR6ALP1zFPSTCo7vW8BjqkASwU%2FKk5FlD%2FdFGjrBVKHEf%2BwuVa7WPIB3%2FCq6TOomacJwJA8TfPPu48XzXz5tWQRQdwvPX8kvW9GH1FVctffX1z6GbOQAhj%2FuUsK%2FNuFzJxkuVwQlzXeo%2FDKYfJIsxQKxaKq7OajnmyUHEawlS6IS7GSHn7W9sTIFDZwCwRBY7tabMz7ORHfi2arHOk2LTS7hrGRrG%2FSFJ92I2EuIaopcCk%2BQOW&X-Amz-Signature=156dada70af3f80ffa69fea41b0f76ac55b29ec8252d7a62abfb39b4230ae788&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHBUEDU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr6i4hT%2FPfUV1Y52E6Wp%2BEaw5fWJKUP7XdNyGTYY1lKQIhAOq8Zg03Oaj1D4ZB%2FK2POZamhcIVeAIjKSCpk9Q7XjWvKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwILN99SmQNULXdyksq3AMcBy5xj9wG2uRqsTky%2BdYAtcgufj4N2jcRiZbk2iD6vevGQXsuj1%2BMG52%2BKQZgSkA%2BckeOsrzi%2Fyat6iZLbA0Z0rF9u4hlvwzHECKL%2FTFppXajpfXAOc%2FxEyCxl1mnCtCHT%2FTpSHTBksqPRTYDsuMvZBWevjDe0e6Nc36%2BjnmIY02bPJW%2F11RVMkOmrWAG0BHBNTS9bBMapqADG9JOpza233%2FdJHjZrr9USRwslCdimHrd8ABmRucV4JUgt2agIAsbfQQoRVpTVpJ2gbMDcoO1VVUV3%2BiPLv%2BhvtGLJ8JILHF0jijRW%2Faw7T27%2BSY3l3YLS0DxaehL8YCGZPPK%2B9yaPPf6WPnI33Uu0LTi%2BVfq0a7dT18VYWdJExkt9gTFYtfKU7PhmMpzDRWOND07uu7bNlvUe2J3XETjix3rLtYoPSP8EnQRmazoW1BlOnZw6yixZF8PojPsmf2pZcGwxVstCTZiOCO0MiCodooQdlLIc6Chpfq0fTE%2F8E75onRZVfjd3TKA729Ctd09BNrxADD7xsA6SWMSsl9s1uS0cvdC1UUGsMpN7pxOhqkKpuKz65MPWgpQ%2FOCKndVWt4ipEwg6wfaL%2F0iOkqEaZHl3IHTf%2BiaT6kKR6ALP1zFPSTCo7vW8BjqkASwU%2FKk5FlD%2FdFGjrBVKHEf%2BwuVa7WPIB3%2FCq6TOomacJwJA8TfPPu48XzXz5tWQRQdwvPX8kvW9GH1FVctffX1z6GbOQAhj%2FuUsK%2FNuFzJxkuVwQlzXeo%2FDKYfJIsxQKxaKq7OajnmyUHEawlS6IS7GSHn7W9sTIFDZwCwRBY7tabMz7ORHfi2arHOk2LTS7hrGRrG%2FSFJ92I2EuIaopcCk%2BQOW&X-Amz-Signature=9bd3ef0246e00b6ce742d80718cde1c29d62b02ba282174756d87f5648142e23&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHBUEDU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr6i4hT%2FPfUV1Y52E6Wp%2BEaw5fWJKUP7XdNyGTYY1lKQIhAOq8Zg03Oaj1D4ZB%2FK2POZamhcIVeAIjKSCpk9Q7XjWvKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwILN99SmQNULXdyksq3AMcBy5xj9wG2uRqsTky%2BdYAtcgufj4N2jcRiZbk2iD6vevGQXsuj1%2BMG52%2BKQZgSkA%2BckeOsrzi%2Fyat6iZLbA0Z0rF9u4hlvwzHECKL%2FTFppXajpfXAOc%2FxEyCxl1mnCtCHT%2FTpSHTBksqPRTYDsuMvZBWevjDe0e6Nc36%2BjnmIY02bPJW%2F11RVMkOmrWAG0BHBNTS9bBMapqADG9JOpza233%2FdJHjZrr9USRwslCdimHrd8ABmRucV4JUgt2agIAsbfQQoRVpTVpJ2gbMDcoO1VVUV3%2BiPLv%2BhvtGLJ8JILHF0jijRW%2Faw7T27%2BSY3l3YLS0DxaehL8YCGZPPK%2B9yaPPf6WPnI33Uu0LTi%2BVfq0a7dT18VYWdJExkt9gTFYtfKU7PhmMpzDRWOND07uu7bNlvUe2J3XETjix3rLtYoPSP8EnQRmazoW1BlOnZw6yixZF8PojPsmf2pZcGwxVstCTZiOCO0MiCodooQdlLIc6Chpfq0fTE%2F8E75onRZVfjd3TKA729Ctd09BNrxADD7xsA6SWMSsl9s1uS0cvdC1UUGsMpN7pxOhqkKpuKz65MPWgpQ%2FOCKndVWt4ipEwg6wfaL%2F0iOkqEaZHl3IHTf%2BiaT6kKR6ALP1zFPSTCo7vW8BjqkASwU%2FKk5FlD%2FdFGjrBVKHEf%2BwuVa7WPIB3%2FCq6TOomacJwJA8TfPPu48XzXz5tWQRQdwvPX8kvW9GH1FVctffX1z6GbOQAhj%2FuUsK%2FNuFzJxkuVwQlzXeo%2FDKYfJIsxQKxaKq7OajnmyUHEawlS6IS7GSHn7W9sTIFDZwCwRBY7tabMz7ORHfi2arHOk2LTS7hrGRrG%2FSFJ92I2EuIaopcCk%2BQOW&X-Amz-Signature=4ed15cb0b71587728dcd3c5498a44183a5ca437cad76e01f4007e75a567752e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHBUEDU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr6i4hT%2FPfUV1Y52E6Wp%2BEaw5fWJKUP7XdNyGTYY1lKQIhAOq8Zg03Oaj1D4ZB%2FK2POZamhcIVeAIjKSCpk9Q7XjWvKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwILN99SmQNULXdyksq3AMcBy5xj9wG2uRqsTky%2BdYAtcgufj4N2jcRiZbk2iD6vevGQXsuj1%2BMG52%2BKQZgSkA%2BckeOsrzi%2Fyat6iZLbA0Z0rF9u4hlvwzHECKL%2FTFppXajpfXAOc%2FxEyCxl1mnCtCHT%2FTpSHTBksqPRTYDsuMvZBWevjDe0e6Nc36%2BjnmIY02bPJW%2F11RVMkOmrWAG0BHBNTS9bBMapqADG9JOpza233%2FdJHjZrr9USRwslCdimHrd8ABmRucV4JUgt2agIAsbfQQoRVpTVpJ2gbMDcoO1VVUV3%2BiPLv%2BhvtGLJ8JILHF0jijRW%2Faw7T27%2BSY3l3YLS0DxaehL8YCGZPPK%2B9yaPPf6WPnI33Uu0LTi%2BVfq0a7dT18VYWdJExkt9gTFYtfKU7PhmMpzDRWOND07uu7bNlvUe2J3XETjix3rLtYoPSP8EnQRmazoW1BlOnZw6yixZF8PojPsmf2pZcGwxVstCTZiOCO0MiCodooQdlLIc6Chpfq0fTE%2F8E75onRZVfjd3TKA729Ctd09BNrxADD7xsA6SWMSsl9s1uS0cvdC1UUGsMpN7pxOhqkKpuKz65MPWgpQ%2FOCKndVWt4ipEwg6wfaL%2F0iOkqEaZHl3IHTf%2BiaT6kKR6ALP1zFPSTCo7vW8BjqkASwU%2FKk5FlD%2FdFGjrBVKHEf%2BwuVa7WPIB3%2FCq6TOomacJwJA8TfPPu48XzXz5tWQRQdwvPX8kvW9GH1FVctffX1z6GbOQAhj%2FuUsK%2FNuFzJxkuVwQlzXeo%2FDKYfJIsxQKxaKq7OajnmyUHEawlS6IS7GSHn7W9sTIFDZwCwRBY7tabMz7ORHfi2arHOk2LTS7hrGRrG%2FSFJ92I2EuIaopcCk%2BQOW&X-Amz-Signature=a7abfb13452825bfc54ca6f68af9da979ccf3ae042c0dc2ac891f7b5803173df&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
