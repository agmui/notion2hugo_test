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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6LFLJA3%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAakRf%2FRy5utVTLqR9UfpHYtA56mHXGYNYfLUymoNfAIgJRsDMGt2wN3iuYRyBqveHPmnRRXXU51g9WVHfP6zEKQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FFzqVmUMR9DmFrBSrcA7%2FQ1y3e5tckqJtTKAgn85m0P9UeAf8bKRIZ9xfu8PEpfzJTJ%2FAlZiwkZwuNuculZpM4gDQS3%2FN4zq1ljDGRGi6V1zunxtgKrZ3pGtk3lUYJ1dHZSQz6cuSUGfrFmr2lvyYtb13Nk2REP3%2B23XvJ97F1kHLaecXuQfu%2FPOFq%2F2QsE%2BjZ8E%2BcCLwlN5BSTJvqSvHCj%2FcQTV%2FKWtCbjosqDniO2jOp5d9uJXYKnGAC0C4%2Bn%2BFNbByuyDsbDJb%2Bjc5nwdkQNcW6h%2F4Vp6UVsABMvn6eKJ8uHs7NskGez8FtTD8fH%2Bdmeuk8mPePlDif3WhEF6mnIm%2BdP%2FNf88JTXlFW6OUDG85LLg5rqyTYNqvynigy1wrqRYMz3EDt5JP7zuTbhZ%2BZdKutcEWL10wNAWn6BH8pEiL8gvmSLoj3qykSnTZT5%2BgLokU7h5F8ud6r9e7Qo%2FX9NNEKQeea2yrWcaeewEIyQ3W9uqgx9TLQa0EaW8witOnM7OVmJt2bj2NpyOq1uB7TuG96p7mXU4oSNYuqlnSyA9t4HV4S%2Bi4mDLs5%2BJWTtUMccEFVEI7i6LnFbitFebni05PyD0T3SoRAt1eG%2Fed0aNlHe4rf7v18crF5YamATdK7bKEX7r6EcLe%2FMK6f%2B8MGOqUB7bI%2B6GDfj0LCEQCWxyf9Sh8LOkk2fZCRS378PYYMinsML%2F%2BbVdNUjTV9Gyl6qllvMvk8zD068Ev6f1LW%2BebAm4G5t31Jyn0zJhuk1CXWMuuUxZ7YrXR9WYheYsAoBC4ByzixeS%2B0Tpp73NV2t7GLu1wRY6WbOeZqZvpJSOwVZK2Vx%2F1cyMKnFsmn0BNk9SZrgPD5WX6Tm2LowJ8TiuwIliLXQf47&X-Amz-Signature=9e241f3b42f10b0f5e9c044c87d1c9d0fb03376f37b0d05f206b9ef36b79baa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6LFLJA3%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAakRf%2FRy5utVTLqR9UfpHYtA56mHXGYNYfLUymoNfAIgJRsDMGt2wN3iuYRyBqveHPmnRRXXU51g9WVHfP6zEKQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FFzqVmUMR9DmFrBSrcA7%2FQ1y3e5tckqJtTKAgn85m0P9UeAf8bKRIZ9xfu8PEpfzJTJ%2FAlZiwkZwuNuculZpM4gDQS3%2FN4zq1ljDGRGi6V1zunxtgKrZ3pGtk3lUYJ1dHZSQz6cuSUGfrFmr2lvyYtb13Nk2REP3%2B23XvJ97F1kHLaecXuQfu%2FPOFq%2F2QsE%2BjZ8E%2BcCLwlN5BSTJvqSvHCj%2FcQTV%2FKWtCbjosqDniO2jOp5d9uJXYKnGAC0C4%2Bn%2BFNbByuyDsbDJb%2Bjc5nwdkQNcW6h%2F4Vp6UVsABMvn6eKJ8uHs7NskGez8FtTD8fH%2Bdmeuk8mPePlDif3WhEF6mnIm%2BdP%2FNf88JTXlFW6OUDG85LLg5rqyTYNqvynigy1wrqRYMz3EDt5JP7zuTbhZ%2BZdKutcEWL10wNAWn6BH8pEiL8gvmSLoj3qykSnTZT5%2BgLokU7h5F8ud6r9e7Qo%2FX9NNEKQeea2yrWcaeewEIyQ3W9uqgx9TLQa0EaW8witOnM7OVmJt2bj2NpyOq1uB7TuG96p7mXU4oSNYuqlnSyA9t4HV4S%2Bi4mDLs5%2BJWTtUMccEFVEI7i6LnFbitFebni05PyD0T3SoRAt1eG%2Fed0aNlHe4rf7v18crF5YamATdK7bKEX7r6EcLe%2FMK6f%2B8MGOqUB7bI%2B6GDfj0LCEQCWxyf9Sh8LOkk2fZCRS378PYYMinsML%2F%2BbVdNUjTV9Gyl6qllvMvk8zD068Ev6f1LW%2BebAm4G5t31Jyn0zJhuk1CXWMuuUxZ7YrXR9WYheYsAoBC4ByzixeS%2B0Tpp73NV2t7GLu1wRY6WbOeZqZvpJSOwVZK2Vx%2F1cyMKnFsmn0BNk9SZrgPD5WX6Tm2LowJ8TiuwIliLXQf47&X-Amz-Signature=65fd9d59a7c3a090eb30ed7c277e2ab41e83cec22d2c38d4921eb235e2e64b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6LFLJA3%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAakRf%2FRy5utVTLqR9UfpHYtA56mHXGYNYfLUymoNfAIgJRsDMGt2wN3iuYRyBqveHPmnRRXXU51g9WVHfP6zEKQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FFzqVmUMR9DmFrBSrcA7%2FQ1y3e5tckqJtTKAgn85m0P9UeAf8bKRIZ9xfu8PEpfzJTJ%2FAlZiwkZwuNuculZpM4gDQS3%2FN4zq1ljDGRGi6V1zunxtgKrZ3pGtk3lUYJ1dHZSQz6cuSUGfrFmr2lvyYtb13Nk2REP3%2B23XvJ97F1kHLaecXuQfu%2FPOFq%2F2QsE%2BjZ8E%2BcCLwlN5BSTJvqSvHCj%2FcQTV%2FKWtCbjosqDniO2jOp5d9uJXYKnGAC0C4%2Bn%2BFNbByuyDsbDJb%2Bjc5nwdkQNcW6h%2F4Vp6UVsABMvn6eKJ8uHs7NskGez8FtTD8fH%2Bdmeuk8mPePlDif3WhEF6mnIm%2BdP%2FNf88JTXlFW6OUDG85LLg5rqyTYNqvynigy1wrqRYMz3EDt5JP7zuTbhZ%2BZdKutcEWL10wNAWn6BH8pEiL8gvmSLoj3qykSnTZT5%2BgLokU7h5F8ud6r9e7Qo%2FX9NNEKQeea2yrWcaeewEIyQ3W9uqgx9TLQa0EaW8witOnM7OVmJt2bj2NpyOq1uB7TuG96p7mXU4oSNYuqlnSyA9t4HV4S%2Bi4mDLs5%2BJWTtUMccEFVEI7i6LnFbitFebni05PyD0T3SoRAt1eG%2Fed0aNlHe4rf7v18crF5YamATdK7bKEX7r6EcLe%2FMK6f%2B8MGOqUB7bI%2B6GDfj0LCEQCWxyf9Sh8LOkk2fZCRS378PYYMinsML%2F%2BbVdNUjTV9Gyl6qllvMvk8zD068Ev6f1LW%2BebAm4G5t31Jyn0zJhuk1CXWMuuUxZ7YrXR9WYheYsAoBC4ByzixeS%2B0Tpp73NV2t7GLu1wRY6WbOeZqZvpJSOwVZK2Vx%2F1cyMKnFsmn0BNk9SZrgPD5WX6Tm2LowJ8TiuwIliLXQf47&X-Amz-Signature=cab662c13d687525d3cb3b5e89417cef709380bb80cdc5ab80b515b29553fd65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6LFLJA3%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAakRf%2FRy5utVTLqR9UfpHYtA56mHXGYNYfLUymoNfAIgJRsDMGt2wN3iuYRyBqveHPmnRRXXU51g9WVHfP6zEKQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FFzqVmUMR9DmFrBSrcA7%2FQ1y3e5tckqJtTKAgn85m0P9UeAf8bKRIZ9xfu8PEpfzJTJ%2FAlZiwkZwuNuculZpM4gDQS3%2FN4zq1ljDGRGi6V1zunxtgKrZ3pGtk3lUYJ1dHZSQz6cuSUGfrFmr2lvyYtb13Nk2REP3%2B23XvJ97F1kHLaecXuQfu%2FPOFq%2F2QsE%2BjZ8E%2BcCLwlN5BSTJvqSvHCj%2FcQTV%2FKWtCbjosqDniO2jOp5d9uJXYKnGAC0C4%2Bn%2BFNbByuyDsbDJb%2Bjc5nwdkQNcW6h%2F4Vp6UVsABMvn6eKJ8uHs7NskGez8FtTD8fH%2Bdmeuk8mPePlDif3WhEF6mnIm%2BdP%2FNf88JTXlFW6OUDG85LLg5rqyTYNqvynigy1wrqRYMz3EDt5JP7zuTbhZ%2BZdKutcEWL10wNAWn6BH8pEiL8gvmSLoj3qykSnTZT5%2BgLokU7h5F8ud6r9e7Qo%2FX9NNEKQeea2yrWcaeewEIyQ3W9uqgx9TLQa0EaW8witOnM7OVmJt2bj2NpyOq1uB7TuG96p7mXU4oSNYuqlnSyA9t4HV4S%2Bi4mDLs5%2BJWTtUMccEFVEI7i6LnFbitFebni05PyD0T3SoRAt1eG%2Fed0aNlHe4rf7v18crF5YamATdK7bKEX7r6EcLe%2FMK6f%2B8MGOqUB7bI%2B6GDfj0LCEQCWxyf9Sh8LOkk2fZCRS378PYYMinsML%2F%2BbVdNUjTV9Gyl6qllvMvk8zD068Ev6f1LW%2BebAm4G5t31Jyn0zJhuk1CXWMuuUxZ7YrXR9WYheYsAoBC4ByzixeS%2B0Tpp73NV2t7GLu1wRY6WbOeZqZvpJSOwVZK2Vx%2F1cyMKnFsmn0BNk9SZrgPD5WX6Tm2LowJ8TiuwIliLXQf47&X-Amz-Signature=c41dc5dab26accc5c678b53101af9d5ab0e3b5e41c0e573df14a8697ae9fd68b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6LFLJA3%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAakRf%2FRy5utVTLqR9UfpHYtA56mHXGYNYfLUymoNfAIgJRsDMGt2wN3iuYRyBqveHPmnRRXXU51g9WVHfP6zEKQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FFzqVmUMR9DmFrBSrcA7%2FQ1y3e5tckqJtTKAgn85m0P9UeAf8bKRIZ9xfu8PEpfzJTJ%2FAlZiwkZwuNuculZpM4gDQS3%2FN4zq1ljDGRGi6V1zunxtgKrZ3pGtk3lUYJ1dHZSQz6cuSUGfrFmr2lvyYtb13Nk2REP3%2B23XvJ97F1kHLaecXuQfu%2FPOFq%2F2QsE%2BjZ8E%2BcCLwlN5BSTJvqSvHCj%2FcQTV%2FKWtCbjosqDniO2jOp5d9uJXYKnGAC0C4%2Bn%2BFNbByuyDsbDJb%2Bjc5nwdkQNcW6h%2F4Vp6UVsABMvn6eKJ8uHs7NskGez8FtTD8fH%2Bdmeuk8mPePlDif3WhEF6mnIm%2BdP%2FNf88JTXlFW6OUDG85LLg5rqyTYNqvynigy1wrqRYMz3EDt5JP7zuTbhZ%2BZdKutcEWL10wNAWn6BH8pEiL8gvmSLoj3qykSnTZT5%2BgLokU7h5F8ud6r9e7Qo%2FX9NNEKQeea2yrWcaeewEIyQ3W9uqgx9TLQa0EaW8witOnM7OVmJt2bj2NpyOq1uB7TuG96p7mXU4oSNYuqlnSyA9t4HV4S%2Bi4mDLs5%2BJWTtUMccEFVEI7i6LnFbitFebni05PyD0T3SoRAt1eG%2Fed0aNlHe4rf7v18crF5YamATdK7bKEX7r6EcLe%2FMK6f%2B8MGOqUB7bI%2B6GDfj0LCEQCWxyf9Sh8LOkk2fZCRS378PYYMinsML%2F%2BbVdNUjTV9Gyl6qllvMvk8zD068Ev6f1LW%2BebAm4G5t31Jyn0zJhuk1CXWMuuUxZ7YrXR9WYheYsAoBC4ByzixeS%2B0Tpp73NV2t7GLu1wRY6WbOeZqZvpJSOwVZK2Vx%2F1cyMKnFsmn0BNk9SZrgPD5WX6Tm2LowJ8TiuwIliLXQf47&X-Amz-Signature=9a4bf331e55770fabb8e155a48e6b96b6bf1e90e17b081015b6630362a915baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
