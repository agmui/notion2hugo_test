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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUQV64R%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFK90gffEWbff%2BFJbqzLSjYIwIEk2wEwYMRbYnNv1HUtAiBh2OeYOB25Z7xwS0oz11R8b2s1oXRr289QSl67bn3XOCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMCjHi9OqiCwhkQU5sKtwD0pL6jPrwZAtSQC3fDaZuC7rR%2FKCNAVaK1XtkfHG9%2BzEGGHshaERX6Ycm5tCoMWNzeMRAP0FT%2B%2Fm1Sa%2FuOt%2FE3GC0o2Thbt1LngF6LzThu9xBmEzcXuoZ7WH1OsnIUxQSjFaC%2F837FOUki6itCLk%2F94i0ABi1eWa%2Fsk2vm4E6O%2FPIxN9zty6idPS8Hm8DXIy4o4rkHgXctQYPhX9tgeM0bv9%2BbSWno%2Bl1QwblHgpAUR8cz3h8Qtp1Wnr1ixYtweG3IMzKjtsG8W%2FxTiFVHPogHBz%2FchFqBUzPEUJL7We%2B0WQYgIwpeL2NJkAUNsRtWI4wRdgYjQ8OYJrjpQq73gR6D2Lc6n17A0t%2FVCTIFG9KyQJFxUZtkJ2JwHapuCcg%2BodCMPbk7QZtvEnpKqW9qXDSEyNUVZgqOPQdCxRSJGDtAwVokfUvnPQPpSRsJb7AWc3ZXw4aHlIL7am6BUTLYrTcE5HsKq7ksnOzAquEWLE%2BPHnZWJ4j3axOwCNrHfXGx54OP8UD1m%2FtSGabWiKHiYdAE2yX1FBfmPqYLNVj%2FvZFOrIHdHTrUa3hkjBQOZjZjjOpmlK%2F%2FSd6VxjEP7tVksIf6Ev9B3zUZMity1mDDpUOWc2ZeDtA63LTOT9i%2BZ8w0bmvwwY6pgHQ9NSBn3M7qRNj29H0ivHMWCCTV1HD4t0VFGjqux18eZwZqDn6U0yB2h7PqNfKOa%2FE4rwrqSVVZ2Rvq6OF3H4Z2whSrnu9S2lsy7BgbYOfPrvntxcMlzfs%2FPkNUKO%2FgFGvGqsXFhAczj0KfrK4ZNxLOni1aWH%2BcjV6fFJ%2BEEH3RJDZMwA5IDFHreS%2BfTu3Mwl%2BHxi33%2FXsKHk06VumwhhYJNehwW5V&X-Amz-Signature=3bca47a56bf4c042c59eca6c7697355982f5f0dbd94322a9d5a40af53b240475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUQV64R%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFK90gffEWbff%2BFJbqzLSjYIwIEk2wEwYMRbYnNv1HUtAiBh2OeYOB25Z7xwS0oz11R8b2s1oXRr289QSl67bn3XOCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMCjHi9OqiCwhkQU5sKtwD0pL6jPrwZAtSQC3fDaZuC7rR%2FKCNAVaK1XtkfHG9%2BzEGGHshaERX6Ycm5tCoMWNzeMRAP0FT%2B%2Fm1Sa%2FuOt%2FE3GC0o2Thbt1LngF6LzThu9xBmEzcXuoZ7WH1OsnIUxQSjFaC%2F837FOUki6itCLk%2F94i0ABi1eWa%2Fsk2vm4E6O%2FPIxN9zty6idPS8Hm8DXIy4o4rkHgXctQYPhX9tgeM0bv9%2BbSWno%2Bl1QwblHgpAUR8cz3h8Qtp1Wnr1ixYtweG3IMzKjtsG8W%2FxTiFVHPogHBz%2FchFqBUzPEUJL7We%2B0WQYgIwpeL2NJkAUNsRtWI4wRdgYjQ8OYJrjpQq73gR6D2Lc6n17A0t%2FVCTIFG9KyQJFxUZtkJ2JwHapuCcg%2BodCMPbk7QZtvEnpKqW9qXDSEyNUVZgqOPQdCxRSJGDtAwVokfUvnPQPpSRsJb7AWc3ZXw4aHlIL7am6BUTLYrTcE5HsKq7ksnOzAquEWLE%2BPHnZWJ4j3axOwCNrHfXGx54OP8UD1m%2FtSGabWiKHiYdAE2yX1FBfmPqYLNVj%2FvZFOrIHdHTrUa3hkjBQOZjZjjOpmlK%2F%2FSd6VxjEP7tVksIf6Ev9B3zUZMity1mDDpUOWc2ZeDtA63LTOT9i%2BZ8w0bmvwwY6pgHQ9NSBn3M7qRNj29H0ivHMWCCTV1HD4t0VFGjqux18eZwZqDn6U0yB2h7PqNfKOa%2FE4rwrqSVVZ2Rvq6OF3H4Z2whSrnu9S2lsy7BgbYOfPrvntxcMlzfs%2FPkNUKO%2FgFGvGqsXFhAczj0KfrK4ZNxLOni1aWH%2BcjV6fFJ%2BEEH3RJDZMwA5IDFHreS%2BfTu3Mwl%2BHxi33%2FXsKHk06VumwhhYJNehwW5V&X-Amz-Signature=3afe03f704776dfafa5e760c2337e04964031fcb73889fa7d8f6a0a25a40f287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUQV64R%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFK90gffEWbff%2BFJbqzLSjYIwIEk2wEwYMRbYnNv1HUtAiBh2OeYOB25Z7xwS0oz11R8b2s1oXRr289QSl67bn3XOCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMCjHi9OqiCwhkQU5sKtwD0pL6jPrwZAtSQC3fDaZuC7rR%2FKCNAVaK1XtkfHG9%2BzEGGHshaERX6Ycm5tCoMWNzeMRAP0FT%2B%2Fm1Sa%2FuOt%2FE3GC0o2Thbt1LngF6LzThu9xBmEzcXuoZ7WH1OsnIUxQSjFaC%2F837FOUki6itCLk%2F94i0ABi1eWa%2Fsk2vm4E6O%2FPIxN9zty6idPS8Hm8DXIy4o4rkHgXctQYPhX9tgeM0bv9%2BbSWno%2Bl1QwblHgpAUR8cz3h8Qtp1Wnr1ixYtweG3IMzKjtsG8W%2FxTiFVHPogHBz%2FchFqBUzPEUJL7We%2B0WQYgIwpeL2NJkAUNsRtWI4wRdgYjQ8OYJrjpQq73gR6D2Lc6n17A0t%2FVCTIFG9KyQJFxUZtkJ2JwHapuCcg%2BodCMPbk7QZtvEnpKqW9qXDSEyNUVZgqOPQdCxRSJGDtAwVokfUvnPQPpSRsJb7AWc3ZXw4aHlIL7am6BUTLYrTcE5HsKq7ksnOzAquEWLE%2BPHnZWJ4j3axOwCNrHfXGx54OP8UD1m%2FtSGabWiKHiYdAE2yX1FBfmPqYLNVj%2FvZFOrIHdHTrUa3hkjBQOZjZjjOpmlK%2F%2FSd6VxjEP7tVksIf6Ev9B3zUZMity1mDDpUOWc2ZeDtA63LTOT9i%2BZ8w0bmvwwY6pgHQ9NSBn3M7qRNj29H0ivHMWCCTV1HD4t0VFGjqux18eZwZqDn6U0yB2h7PqNfKOa%2FE4rwrqSVVZ2Rvq6OF3H4Z2whSrnu9S2lsy7BgbYOfPrvntxcMlzfs%2FPkNUKO%2FgFGvGqsXFhAczj0KfrK4ZNxLOni1aWH%2BcjV6fFJ%2BEEH3RJDZMwA5IDFHreS%2BfTu3Mwl%2BHxi33%2FXsKHk06VumwhhYJNehwW5V&X-Amz-Signature=98cdee239e2e55c964da78f68f745c4fdaaa73231c7e511672bc60b8355fdf0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUQV64R%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFK90gffEWbff%2BFJbqzLSjYIwIEk2wEwYMRbYnNv1HUtAiBh2OeYOB25Z7xwS0oz11R8b2s1oXRr289QSl67bn3XOCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMCjHi9OqiCwhkQU5sKtwD0pL6jPrwZAtSQC3fDaZuC7rR%2FKCNAVaK1XtkfHG9%2BzEGGHshaERX6Ycm5tCoMWNzeMRAP0FT%2B%2Fm1Sa%2FuOt%2FE3GC0o2Thbt1LngF6LzThu9xBmEzcXuoZ7WH1OsnIUxQSjFaC%2F837FOUki6itCLk%2F94i0ABi1eWa%2Fsk2vm4E6O%2FPIxN9zty6idPS8Hm8DXIy4o4rkHgXctQYPhX9tgeM0bv9%2BbSWno%2Bl1QwblHgpAUR8cz3h8Qtp1Wnr1ixYtweG3IMzKjtsG8W%2FxTiFVHPogHBz%2FchFqBUzPEUJL7We%2B0WQYgIwpeL2NJkAUNsRtWI4wRdgYjQ8OYJrjpQq73gR6D2Lc6n17A0t%2FVCTIFG9KyQJFxUZtkJ2JwHapuCcg%2BodCMPbk7QZtvEnpKqW9qXDSEyNUVZgqOPQdCxRSJGDtAwVokfUvnPQPpSRsJb7AWc3ZXw4aHlIL7am6BUTLYrTcE5HsKq7ksnOzAquEWLE%2BPHnZWJ4j3axOwCNrHfXGx54OP8UD1m%2FtSGabWiKHiYdAE2yX1FBfmPqYLNVj%2FvZFOrIHdHTrUa3hkjBQOZjZjjOpmlK%2F%2FSd6VxjEP7tVksIf6Ev9B3zUZMity1mDDpUOWc2ZeDtA63LTOT9i%2BZ8w0bmvwwY6pgHQ9NSBn3M7qRNj29H0ivHMWCCTV1HD4t0VFGjqux18eZwZqDn6U0yB2h7PqNfKOa%2FE4rwrqSVVZ2Rvq6OF3H4Z2whSrnu9S2lsy7BgbYOfPrvntxcMlzfs%2FPkNUKO%2FgFGvGqsXFhAczj0KfrK4ZNxLOni1aWH%2BcjV6fFJ%2BEEH3RJDZMwA5IDFHreS%2BfTu3Mwl%2BHxi33%2FXsKHk06VumwhhYJNehwW5V&X-Amz-Signature=59bfd322a33739d17f1766cf9ae39844bf0db35a07319df472fb959e10e9e1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUQV64R%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFK90gffEWbff%2BFJbqzLSjYIwIEk2wEwYMRbYnNv1HUtAiBh2OeYOB25Z7xwS0oz11R8b2s1oXRr289QSl67bn3XOCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMCjHi9OqiCwhkQU5sKtwD0pL6jPrwZAtSQC3fDaZuC7rR%2FKCNAVaK1XtkfHG9%2BzEGGHshaERX6Ycm5tCoMWNzeMRAP0FT%2B%2Fm1Sa%2FuOt%2FE3GC0o2Thbt1LngF6LzThu9xBmEzcXuoZ7WH1OsnIUxQSjFaC%2F837FOUki6itCLk%2F94i0ABi1eWa%2Fsk2vm4E6O%2FPIxN9zty6idPS8Hm8DXIy4o4rkHgXctQYPhX9tgeM0bv9%2BbSWno%2Bl1QwblHgpAUR8cz3h8Qtp1Wnr1ixYtweG3IMzKjtsG8W%2FxTiFVHPogHBz%2FchFqBUzPEUJL7We%2B0WQYgIwpeL2NJkAUNsRtWI4wRdgYjQ8OYJrjpQq73gR6D2Lc6n17A0t%2FVCTIFG9KyQJFxUZtkJ2JwHapuCcg%2BodCMPbk7QZtvEnpKqW9qXDSEyNUVZgqOPQdCxRSJGDtAwVokfUvnPQPpSRsJb7AWc3ZXw4aHlIL7am6BUTLYrTcE5HsKq7ksnOzAquEWLE%2BPHnZWJ4j3axOwCNrHfXGx54OP8UD1m%2FtSGabWiKHiYdAE2yX1FBfmPqYLNVj%2FvZFOrIHdHTrUa3hkjBQOZjZjjOpmlK%2F%2FSd6VxjEP7tVksIf6Ev9B3zUZMity1mDDpUOWc2ZeDtA63LTOT9i%2BZ8w0bmvwwY6pgHQ9NSBn3M7qRNj29H0ivHMWCCTV1HD4t0VFGjqux18eZwZqDn6U0yB2h7PqNfKOa%2FE4rwrqSVVZ2Rvq6OF3H4Z2whSrnu9S2lsy7BgbYOfPrvntxcMlzfs%2FPkNUKO%2FgFGvGqsXFhAczj0KfrK4ZNxLOni1aWH%2BcjV6fFJ%2BEEH3RJDZMwA5IDFHreS%2BfTu3Mwl%2BHxi33%2FXsKHk06VumwhhYJNehwW5V&X-Amz-Signature=31e8b7693ee6a04501b12fd98fb1dbd6c3715f39d82afeac31979db0f2ba7853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
