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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKHIW6C%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC44NcdoXS4Ra5oDVEYO631ax9TFon3w%2BhT6RQFzZjCkgIhAP%2BPygyRuv6j2mx0QC0bhu1u0ACjT6lB4jUvYFpAIKy8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVv98P4KMvEqOOTV8q3AP86y06uKstpa53kzu3pGOQpvfYsvwmpkaJRv%2FVlf4M7r2wOFju%2FT2Cc9GDnZEWAQZ4jXFJFEqpotLHfBrmIoJumP7DXWb9z72wP4vqoPp4WzIRw7TO0J6xg3mySZWQ2VDK9a4XbXNJZdYmUps2tHlizZf2%2BiEu51CsSTP5ttkRz8SAqXvEiO7tIPSqZZDyboGkuSiml93OyVp08WgSKGjAyK4oz8noh9WcQZr4X8cwp2ebEJ3LLhhB%2FoUdFarAFtq6jcHK7Aa7FsxYrIYSKGsBIka6glnwhSMSCeuZ7bEUj6jgoj5dzO9scxIsxIJFGTozMOGbRUOAg6aLQMJ2Zi0sS3zhC7CFJkponNdaXyUp8WanZkdnhDBbLwICuutdf4WLxrCcs56zbIb4UKWSFF67OMzPkFvRuFXR%2F%2FRkKdAabtolZUVqhcnoG1oGC%2BKCpeMhQPF4TZuLAKLftc4rinJPkFPS4HULRPyNwZuOIvNcP79TQ%2B7Llqmp4sh2S80GHi%2FJZ%2Fg9d7Sw2%2BO%2BiGdzwt%2B5Z6UXbVKubODHDeE5Sk1XlQ59Z1N%2FQWiZ%2FUoze3CCILa9TPeIJ7O%2FHTM0O2%2FVoBq0q3xrm0VBW11eihxvfMMSUaRWbYzV61o5DtLbLjDw7pjCBjqkAeS2y3YxJ3FwgnPgx7kOTHZ0QSyihdvdEsSYlDnWi%2BW5pB78TrMDkUIwZzVjEkXe8zT4q8sYJe9iOVYB7RXO%2FnHWs7%2FucmBfJOcA6Gw8Cmgmf9wSmDv8b4THKIUTPXKJSycbI3TNzAUvVP85SXf9%2BLNV%2FBm0lo1CHdpeTqBKw4nvXktBldVzMlj77QKb5fj7okEHO9rVTB6VhRjHNHEU5O6pJsj1&X-Amz-Signature=94c94ffd3b23ed16e2ef9ac473efd0ab07ad5891295b7116c903be984a397fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKHIW6C%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC44NcdoXS4Ra5oDVEYO631ax9TFon3w%2BhT6RQFzZjCkgIhAP%2BPygyRuv6j2mx0QC0bhu1u0ACjT6lB4jUvYFpAIKy8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVv98P4KMvEqOOTV8q3AP86y06uKstpa53kzu3pGOQpvfYsvwmpkaJRv%2FVlf4M7r2wOFju%2FT2Cc9GDnZEWAQZ4jXFJFEqpotLHfBrmIoJumP7DXWb9z72wP4vqoPp4WzIRw7TO0J6xg3mySZWQ2VDK9a4XbXNJZdYmUps2tHlizZf2%2BiEu51CsSTP5ttkRz8SAqXvEiO7tIPSqZZDyboGkuSiml93OyVp08WgSKGjAyK4oz8noh9WcQZr4X8cwp2ebEJ3LLhhB%2FoUdFarAFtq6jcHK7Aa7FsxYrIYSKGsBIka6glnwhSMSCeuZ7bEUj6jgoj5dzO9scxIsxIJFGTozMOGbRUOAg6aLQMJ2Zi0sS3zhC7CFJkponNdaXyUp8WanZkdnhDBbLwICuutdf4WLxrCcs56zbIb4UKWSFF67OMzPkFvRuFXR%2F%2FRkKdAabtolZUVqhcnoG1oGC%2BKCpeMhQPF4TZuLAKLftc4rinJPkFPS4HULRPyNwZuOIvNcP79TQ%2B7Llqmp4sh2S80GHi%2FJZ%2Fg9d7Sw2%2BO%2BiGdzwt%2B5Z6UXbVKubODHDeE5Sk1XlQ59Z1N%2FQWiZ%2FUoze3CCILa9TPeIJ7O%2FHTM0O2%2FVoBq0q3xrm0VBW11eihxvfMMSUaRWbYzV61o5DtLbLjDw7pjCBjqkAeS2y3YxJ3FwgnPgx7kOTHZ0QSyihdvdEsSYlDnWi%2BW5pB78TrMDkUIwZzVjEkXe8zT4q8sYJe9iOVYB7RXO%2FnHWs7%2FucmBfJOcA6Gw8Cmgmf9wSmDv8b4THKIUTPXKJSycbI3TNzAUvVP85SXf9%2BLNV%2FBm0lo1CHdpeTqBKw4nvXktBldVzMlj77QKb5fj7okEHO9rVTB6VhRjHNHEU5O6pJsj1&X-Amz-Signature=f064863ce30dce29263033bbe00727fe506a9110712654e06eee1c05affebdd2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKHIW6C%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC44NcdoXS4Ra5oDVEYO631ax9TFon3w%2BhT6RQFzZjCkgIhAP%2BPygyRuv6j2mx0QC0bhu1u0ACjT6lB4jUvYFpAIKy8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVv98P4KMvEqOOTV8q3AP86y06uKstpa53kzu3pGOQpvfYsvwmpkaJRv%2FVlf4M7r2wOFju%2FT2Cc9GDnZEWAQZ4jXFJFEqpotLHfBrmIoJumP7DXWb9z72wP4vqoPp4WzIRw7TO0J6xg3mySZWQ2VDK9a4XbXNJZdYmUps2tHlizZf2%2BiEu51CsSTP5ttkRz8SAqXvEiO7tIPSqZZDyboGkuSiml93OyVp08WgSKGjAyK4oz8noh9WcQZr4X8cwp2ebEJ3LLhhB%2FoUdFarAFtq6jcHK7Aa7FsxYrIYSKGsBIka6glnwhSMSCeuZ7bEUj6jgoj5dzO9scxIsxIJFGTozMOGbRUOAg6aLQMJ2Zi0sS3zhC7CFJkponNdaXyUp8WanZkdnhDBbLwICuutdf4WLxrCcs56zbIb4UKWSFF67OMzPkFvRuFXR%2F%2FRkKdAabtolZUVqhcnoG1oGC%2BKCpeMhQPF4TZuLAKLftc4rinJPkFPS4HULRPyNwZuOIvNcP79TQ%2B7Llqmp4sh2S80GHi%2FJZ%2Fg9d7Sw2%2BO%2BiGdzwt%2B5Z6UXbVKubODHDeE5Sk1XlQ59Z1N%2FQWiZ%2FUoze3CCILa9TPeIJ7O%2FHTM0O2%2FVoBq0q3xrm0VBW11eihxvfMMSUaRWbYzV61o5DtLbLjDw7pjCBjqkAeS2y3YxJ3FwgnPgx7kOTHZ0QSyihdvdEsSYlDnWi%2BW5pB78TrMDkUIwZzVjEkXe8zT4q8sYJe9iOVYB7RXO%2FnHWs7%2FucmBfJOcA6Gw8Cmgmf9wSmDv8b4THKIUTPXKJSycbI3TNzAUvVP85SXf9%2BLNV%2FBm0lo1CHdpeTqBKw4nvXktBldVzMlj77QKb5fj7okEHO9rVTB6VhRjHNHEU5O6pJsj1&X-Amz-Signature=b1c551371b2607802a274e3bdd33528d40023949354f37137a620931e7fc4476&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKHIW6C%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC44NcdoXS4Ra5oDVEYO631ax9TFon3w%2BhT6RQFzZjCkgIhAP%2BPygyRuv6j2mx0QC0bhu1u0ACjT6lB4jUvYFpAIKy8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVv98P4KMvEqOOTV8q3AP86y06uKstpa53kzu3pGOQpvfYsvwmpkaJRv%2FVlf4M7r2wOFju%2FT2Cc9GDnZEWAQZ4jXFJFEqpotLHfBrmIoJumP7DXWb9z72wP4vqoPp4WzIRw7TO0J6xg3mySZWQ2VDK9a4XbXNJZdYmUps2tHlizZf2%2BiEu51CsSTP5ttkRz8SAqXvEiO7tIPSqZZDyboGkuSiml93OyVp08WgSKGjAyK4oz8noh9WcQZr4X8cwp2ebEJ3LLhhB%2FoUdFarAFtq6jcHK7Aa7FsxYrIYSKGsBIka6glnwhSMSCeuZ7bEUj6jgoj5dzO9scxIsxIJFGTozMOGbRUOAg6aLQMJ2Zi0sS3zhC7CFJkponNdaXyUp8WanZkdnhDBbLwICuutdf4WLxrCcs56zbIb4UKWSFF67OMzPkFvRuFXR%2F%2FRkKdAabtolZUVqhcnoG1oGC%2BKCpeMhQPF4TZuLAKLftc4rinJPkFPS4HULRPyNwZuOIvNcP79TQ%2B7Llqmp4sh2S80GHi%2FJZ%2Fg9d7Sw2%2BO%2BiGdzwt%2B5Z6UXbVKubODHDeE5Sk1XlQ59Z1N%2FQWiZ%2FUoze3CCILa9TPeIJ7O%2FHTM0O2%2FVoBq0q3xrm0VBW11eihxvfMMSUaRWbYzV61o5DtLbLjDw7pjCBjqkAeS2y3YxJ3FwgnPgx7kOTHZ0QSyihdvdEsSYlDnWi%2BW5pB78TrMDkUIwZzVjEkXe8zT4q8sYJe9iOVYB7RXO%2FnHWs7%2FucmBfJOcA6Gw8Cmgmf9wSmDv8b4THKIUTPXKJSycbI3TNzAUvVP85SXf9%2BLNV%2FBm0lo1CHdpeTqBKw4nvXktBldVzMlj77QKb5fj7okEHO9rVTB6VhRjHNHEU5O6pJsj1&X-Amz-Signature=1c16bd889c49ed769b92cb27a32969b8930b55e771d622078e4267cb8d52c44d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKHIW6C%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC44NcdoXS4Ra5oDVEYO631ax9TFon3w%2BhT6RQFzZjCkgIhAP%2BPygyRuv6j2mx0QC0bhu1u0ACjT6lB4jUvYFpAIKy8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVv98P4KMvEqOOTV8q3AP86y06uKstpa53kzu3pGOQpvfYsvwmpkaJRv%2FVlf4M7r2wOFju%2FT2Cc9GDnZEWAQZ4jXFJFEqpotLHfBrmIoJumP7DXWb9z72wP4vqoPp4WzIRw7TO0J6xg3mySZWQ2VDK9a4XbXNJZdYmUps2tHlizZf2%2BiEu51CsSTP5ttkRz8SAqXvEiO7tIPSqZZDyboGkuSiml93OyVp08WgSKGjAyK4oz8noh9WcQZr4X8cwp2ebEJ3LLhhB%2FoUdFarAFtq6jcHK7Aa7FsxYrIYSKGsBIka6glnwhSMSCeuZ7bEUj6jgoj5dzO9scxIsxIJFGTozMOGbRUOAg6aLQMJ2Zi0sS3zhC7CFJkponNdaXyUp8WanZkdnhDBbLwICuutdf4WLxrCcs56zbIb4UKWSFF67OMzPkFvRuFXR%2F%2FRkKdAabtolZUVqhcnoG1oGC%2BKCpeMhQPF4TZuLAKLftc4rinJPkFPS4HULRPyNwZuOIvNcP79TQ%2B7Llqmp4sh2S80GHi%2FJZ%2Fg9d7Sw2%2BO%2BiGdzwt%2B5Z6UXbVKubODHDeE5Sk1XlQ59Z1N%2FQWiZ%2FUoze3CCILa9TPeIJ7O%2FHTM0O2%2FVoBq0q3xrm0VBW11eihxvfMMSUaRWbYzV61o5DtLbLjDw7pjCBjqkAeS2y3YxJ3FwgnPgx7kOTHZ0QSyihdvdEsSYlDnWi%2BW5pB78TrMDkUIwZzVjEkXe8zT4q8sYJe9iOVYB7RXO%2FnHWs7%2FucmBfJOcA6Gw8Cmgmf9wSmDv8b4THKIUTPXKJSycbI3TNzAUvVP85SXf9%2BLNV%2FBm0lo1CHdpeTqBKw4nvXktBldVzMlj77QKb5fj7okEHO9rVTB6VhRjHNHEU5O6pJsj1&X-Amz-Signature=d4bb1be0cb3c122c04a4b48d8dbe46bd9654e96e8eb056344fd99cfd3a4d1c18&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
