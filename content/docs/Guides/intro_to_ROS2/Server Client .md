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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTCV2FR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6rXyxBIG%2BtqlRclM9KHZAtODG83e5%2BsSERe%2BdiEk9vAIhANPjXMza2%2BitcThyrRVnQ8y6%2BYQn4SClGGVEBOg4PiQuKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFssWJWj6fWnWk19sq3APG1HEwU3LyK86F%2BpE5nBshdu%2BZyLUKvQOkcm4tYkIKVEkRpfgPhVm8QKs0xw9AzL3R9%2FeoyNCSb0l%2FtCcbPfVcy8VsYeA8lKR0GqFBE1AanQv7Js83qRlhoTo3ZL%2Ft0JGCH%2FSWuGaNG6QpRiYy2ch3Bh2%2FEkrFYr%2Fhm%2FUlHK3%2Bs14%2FrDE504vZrkmH%2B%2FIBUbkUbj%2B536FYH2PwJu79ilogetcjQ8T6TZKiPdpazbIo7JgXufZMUfbwzrHgM0YoCdC7D6kLJhaaGXh2aRgp3h0AU1o7X%2Fu%2BpYDke2J%2BtnIyNJL9lTSfF77KeSkyd%2B9doDxyx0409oOLq9q2Iaq98X86QMHQArSy7Wyh22oW2KgbVY3BBrPS3i1AFTWKkhhiQwMG1LMV%2B5fSz%2F3PGv6WIDd%2FOSamjSXz8Iz68PCA0VgGi88BzvazXUz6uhn6cdsQ%2BIsq6BVRN6jQEE8NgB4JEGgvMI%2F8neX3uOUboWxNfjPMOUVAW3RghPStAprtHlu6Ip9ZTeFRjHPcLU3Eo6gjR3xc5PhQiEmZ6KGoQG3wWKKsoB2MxwZJQZwIiG7mxA6Ny4rHGVbvXi0jhHt0e29ucrxGweDtm96PLmrylk7nYj0wbBIkNsIp47mcryjSQTCqzNnCBjqkAbfR2C4fvBabw9A7e8Fmqbp2PSC1TFKb%2FaTvlFVATdfvYMn2bYTP4xH%2B17lQyiklqqJfZf4PwnbiB3hlEFR5ZA40AawOgT5rR0E5K6gNmm1uHfQl0j3v7KM%2FfH8TuTaGh5p%2BgvD20XPd0AAKhEPUWAZMZVrMgmCWPadN8swAe6OXwvEwrovOMSrsFICWpJ%2BAghv5h31bEYfk5EuFQPAhag%2FqPbdo&X-Amz-Signature=edc83ccf889f510c436fc3091866de5a01ae4ee3b4d8e768f79b083b476363b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTCV2FR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6rXyxBIG%2BtqlRclM9KHZAtODG83e5%2BsSERe%2BdiEk9vAIhANPjXMza2%2BitcThyrRVnQ8y6%2BYQn4SClGGVEBOg4PiQuKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFssWJWj6fWnWk19sq3APG1HEwU3LyK86F%2BpE5nBshdu%2BZyLUKvQOkcm4tYkIKVEkRpfgPhVm8QKs0xw9AzL3R9%2FeoyNCSb0l%2FtCcbPfVcy8VsYeA8lKR0GqFBE1AanQv7Js83qRlhoTo3ZL%2Ft0JGCH%2FSWuGaNG6QpRiYy2ch3Bh2%2FEkrFYr%2Fhm%2FUlHK3%2Bs14%2FrDE504vZrkmH%2B%2FIBUbkUbj%2B536FYH2PwJu79ilogetcjQ8T6TZKiPdpazbIo7JgXufZMUfbwzrHgM0YoCdC7D6kLJhaaGXh2aRgp3h0AU1o7X%2Fu%2BpYDke2J%2BtnIyNJL9lTSfF77KeSkyd%2B9doDxyx0409oOLq9q2Iaq98X86QMHQArSy7Wyh22oW2KgbVY3BBrPS3i1AFTWKkhhiQwMG1LMV%2B5fSz%2F3PGv6WIDd%2FOSamjSXz8Iz68PCA0VgGi88BzvazXUz6uhn6cdsQ%2BIsq6BVRN6jQEE8NgB4JEGgvMI%2F8neX3uOUboWxNfjPMOUVAW3RghPStAprtHlu6Ip9ZTeFRjHPcLU3Eo6gjR3xc5PhQiEmZ6KGoQG3wWKKsoB2MxwZJQZwIiG7mxA6Ny4rHGVbvXi0jhHt0e29ucrxGweDtm96PLmrylk7nYj0wbBIkNsIp47mcryjSQTCqzNnCBjqkAbfR2C4fvBabw9A7e8Fmqbp2PSC1TFKb%2FaTvlFVATdfvYMn2bYTP4xH%2B17lQyiklqqJfZf4PwnbiB3hlEFR5ZA40AawOgT5rR0E5K6gNmm1uHfQl0j3v7KM%2FfH8TuTaGh5p%2BgvD20XPd0AAKhEPUWAZMZVrMgmCWPadN8swAe6OXwvEwrovOMSrsFICWpJ%2BAghv5h31bEYfk5EuFQPAhag%2FqPbdo&X-Amz-Signature=e08133a8ad7042a9cc6188a76eaaf7afdddc82a2f82e935310d931c2a765f011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTCV2FR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6rXyxBIG%2BtqlRclM9KHZAtODG83e5%2BsSERe%2BdiEk9vAIhANPjXMza2%2BitcThyrRVnQ8y6%2BYQn4SClGGVEBOg4PiQuKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFssWJWj6fWnWk19sq3APG1HEwU3LyK86F%2BpE5nBshdu%2BZyLUKvQOkcm4tYkIKVEkRpfgPhVm8QKs0xw9AzL3R9%2FeoyNCSb0l%2FtCcbPfVcy8VsYeA8lKR0GqFBE1AanQv7Js83qRlhoTo3ZL%2Ft0JGCH%2FSWuGaNG6QpRiYy2ch3Bh2%2FEkrFYr%2Fhm%2FUlHK3%2Bs14%2FrDE504vZrkmH%2B%2FIBUbkUbj%2B536FYH2PwJu79ilogetcjQ8T6TZKiPdpazbIo7JgXufZMUfbwzrHgM0YoCdC7D6kLJhaaGXh2aRgp3h0AU1o7X%2Fu%2BpYDke2J%2BtnIyNJL9lTSfF77KeSkyd%2B9doDxyx0409oOLq9q2Iaq98X86QMHQArSy7Wyh22oW2KgbVY3BBrPS3i1AFTWKkhhiQwMG1LMV%2B5fSz%2F3PGv6WIDd%2FOSamjSXz8Iz68PCA0VgGi88BzvazXUz6uhn6cdsQ%2BIsq6BVRN6jQEE8NgB4JEGgvMI%2F8neX3uOUboWxNfjPMOUVAW3RghPStAprtHlu6Ip9ZTeFRjHPcLU3Eo6gjR3xc5PhQiEmZ6KGoQG3wWKKsoB2MxwZJQZwIiG7mxA6Ny4rHGVbvXi0jhHt0e29ucrxGweDtm96PLmrylk7nYj0wbBIkNsIp47mcryjSQTCqzNnCBjqkAbfR2C4fvBabw9A7e8Fmqbp2PSC1TFKb%2FaTvlFVATdfvYMn2bYTP4xH%2B17lQyiklqqJfZf4PwnbiB3hlEFR5ZA40AawOgT5rR0E5K6gNmm1uHfQl0j3v7KM%2FfH8TuTaGh5p%2BgvD20XPd0AAKhEPUWAZMZVrMgmCWPadN8swAe6OXwvEwrovOMSrsFICWpJ%2BAghv5h31bEYfk5EuFQPAhag%2FqPbdo&X-Amz-Signature=97a4c53445410cfff93c3e047d189a28a3d07aa602babadd83ebfd4d1c45945f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTCV2FR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6rXyxBIG%2BtqlRclM9KHZAtODG83e5%2BsSERe%2BdiEk9vAIhANPjXMza2%2BitcThyrRVnQ8y6%2BYQn4SClGGVEBOg4PiQuKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFssWJWj6fWnWk19sq3APG1HEwU3LyK86F%2BpE5nBshdu%2BZyLUKvQOkcm4tYkIKVEkRpfgPhVm8QKs0xw9AzL3R9%2FeoyNCSb0l%2FtCcbPfVcy8VsYeA8lKR0GqFBE1AanQv7Js83qRlhoTo3ZL%2Ft0JGCH%2FSWuGaNG6QpRiYy2ch3Bh2%2FEkrFYr%2Fhm%2FUlHK3%2Bs14%2FrDE504vZrkmH%2B%2FIBUbkUbj%2B536FYH2PwJu79ilogetcjQ8T6TZKiPdpazbIo7JgXufZMUfbwzrHgM0YoCdC7D6kLJhaaGXh2aRgp3h0AU1o7X%2Fu%2BpYDke2J%2BtnIyNJL9lTSfF77KeSkyd%2B9doDxyx0409oOLq9q2Iaq98X86QMHQArSy7Wyh22oW2KgbVY3BBrPS3i1AFTWKkhhiQwMG1LMV%2B5fSz%2F3PGv6WIDd%2FOSamjSXz8Iz68PCA0VgGi88BzvazXUz6uhn6cdsQ%2BIsq6BVRN6jQEE8NgB4JEGgvMI%2F8neX3uOUboWxNfjPMOUVAW3RghPStAprtHlu6Ip9ZTeFRjHPcLU3Eo6gjR3xc5PhQiEmZ6KGoQG3wWKKsoB2MxwZJQZwIiG7mxA6Ny4rHGVbvXi0jhHt0e29ucrxGweDtm96PLmrylk7nYj0wbBIkNsIp47mcryjSQTCqzNnCBjqkAbfR2C4fvBabw9A7e8Fmqbp2PSC1TFKb%2FaTvlFVATdfvYMn2bYTP4xH%2B17lQyiklqqJfZf4PwnbiB3hlEFR5ZA40AawOgT5rR0E5K6gNmm1uHfQl0j3v7KM%2FfH8TuTaGh5p%2BgvD20XPd0AAKhEPUWAZMZVrMgmCWPadN8swAe6OXwvEwrovOMSrsFICWpJ%2BAghv5h31bEYfk5EuFQPAhag%2FqPbdo&X-Amz-Signature=f57c6b0dab9188f7e1bae0247dab0b0f92a42cd96156595403cd329295f32bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTCV2FR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6rXyxBIG%2BtqlRclM9KHZAtODG83e5%2BsSERe%2BdiEk9vAIhANPjXMza2%2BitcThyrRVnQ8y6%2BYQn4SClGGVEBOg4PiQuKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFssWJWj6fWnWk19sq3APG1HEwU3LyK86F%2BpE5nBshdu%2BZyLUKvQOkcm4tYkIKVEkRpfgPhVm8QKs0xw9AzL3R9%2FeoyNCSb0l%2FtCcbPfVcy8VsYeA8lKR0GqFBE1AanQv7Js83qRlhoTo3ZL%2Ft0JGCH%2FSWuGaNG6QpRiYy2ch3Bh2%2FEkrFYr%2Fhm%2FUlHK3%2Bs14%2FrDE504vZrkmH%2B%2FIBUbkUbj%2B536FYH2PwJu79ilogetcjQ8T6TZKiPdpazbIo7JgXufZMUfbwzrHgM0YoCdC7D6kLJhaaGXh2aRgp3h0AU1o7X%2Fu%2BpYDke2J%2BtnIyNJL9lTSfF77KeSkyd%2B9doDxyx0409oOLq9q2Iaq98X86QMHQArSy7Wyh22oW2KgbVY3BBrPS3i1AFTWKkhhiQwMG1LMV%2B5fSz%2F3PGv6WIDd%2FOSamjSXz8Iz68PCA0VgGi88BzvazXUz6uhn6cdsQ%2BIsq6BVRN6jQEE8NgB4JEGgvMI%2F8neX3uOUboWxNfjPMOUVAW3RghPStAprtHlu6Ip9ZTeFRjHPcLU3Eo6gjR3xc5PhQiEmZ6KGoQG3wWKKsoB2MxwZJQZwIiG7mxA6Ny4rHGVbvXi0jhHt0e29ucrxGweDtm96PLmrylk7nYj0wbBIkNsIp47mcryjSQTCqzNnCBjqkAbfR2C4fvBabw9A7e8Fmqbp2PSC1TFKb%2FaTvlFVATdfvYMn2bYTP4xH%2B17lQyiklqqJfZf4PwnbiB3hlEFR5ZA40AawOgT5rR0E5K6gNmm1uHfQl0j3v7KM%2FfH8TuTaGh5p%2BgvD20XPd0AAKhEPUWAZMZVrMgmCWPadN8swAe6OXwvEwrovOMSrsFICWpJ%2BAghv5h31bEYfk5EuFQPAhag%2FqPbdo&X-Amz-Signature=de4244c0bead7f6a170dd35e6bef0082d61f99c96d50f7a9beefb87c74003e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
