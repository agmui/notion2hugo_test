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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHOCKQ3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCQqOGNH7CjVV%2BPQzm7jb95Y8S%2BZCNkQzR1vjF7nb2xBQIgLO1LqoqZMUkmVi8EnT0OQgX5ZS3bRq%2BjmUDNNeiomTkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDC0vJ9VKmLshIB8mfCrcA9V%2BTEPSqNjYB9Lxf25iUnKaRIvSl5UOpzLz6FlRHyPhfQ5h00ZOrjKLFaWUwt8M1WE9y6Y9EeRC5sXODIHedbC%2BF63j7Cua01TPe1DlcykkI6eyq038Ezd31jrHBvblo8Sl9ixxP7gkysPk5162H7x6kiKdY8ZH%2FL894ebVujC42Qxa%2FjfzNNtro9RaSNoTSn4ANI%2BtvPYqDAH2pajCHDQdf7PBB03rzIFKrjkmINxmIYfaA4iBt88bQyjEUKoDz8l0szEEESDFOjF%2FS83YQlXou4q1yQH7Cn5Bbqmo1CpZxGkzmpoofZOSmT4NPB8kjbAsKJeOUk4LsA%2FGAx1VQS4FjUYZxM8Ntx2UQRwQUEnF%2BEUxocRY74JEPpvDENLASh3NYUxRxJdADkJSJxp2vhzPKlFhcAF7xnhwCQIfDyBGzmEyvlWgJ4XRWrFnJkyGWcliSIEyGUxMZKu4daNswi9s1ahbI49iRBu88qYhM7j%2F0hWy9vKTUNO%2BxQpO4ejbeMpr0SuPT0pO97jOEF1UhV4GBEXsfXxKwgxblb4zyOg1cer7QKJH%2BoGITcew1UTc2olx0bn%2FjPlxyTyKnhHN1e9CBrizXRbEXaUnRi%2B%2FzdvLRRO1ez1O5kaDdfiXMLyX4MMGOqUBFpAJU3I5CpfvaGXd%2FIF7cyR4tDvYIIqHyW5EKV%2BlrcswIzrd%2BpVlInNF0LLMIYMUxbLW0UCASwd0h7SJhFTJx%2BwQm6yz8pb0eZAXrEiIw0Qrav%2FEgx2UDxlqgxLYZP%2FwDPEl%2BDwRHwv%2BpeWKde%2Fe5uxx1YbBBT04dSjpBsiZDVX7z%2FLrRzwegnq2hf5lYGlh4u%2B0OyIyypRgHBsSybQjyzyQ7KiE&X-Amz-Signature=b080d2096f2ca8e09b6c78672638307626749151c0e1746d840c6f35d450dbdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHOCKQ3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCQqOGNH7CjVV%2BPQzm7jb95Y8S%2BZCNkQzR1vjF7nb2xBQIgLO1LqoqZMUkmVi8EnT0OQgX5ZS3bRq%2BjmUDNNeiomTkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDC0vJ9VKmLshIB8mfCrcA9V%2BTEPSqNjYB9Lxf25iUnKaRIvSl5UOpzLz6FlRHyPhfQ5h00ZOrjKLFaWUwt8M1WE9y6Y9EeRC5sXODIHedbC%2BF63j7Cua01TPe1DlcykkI6eyq038Ezd31jrHBvblo8Sl9ixxP7gkysPk5162H7x6kiKdY8ZH%2FL894ebVujC42Qxa%2FjfzNNtro9RaSNoTSn4ANI%2BtvPYqDAH2pajCHDQdf7PBB03rzIFKrjkmINxmIYfaA4iBt88bQyjEUKoDz8l0szEEESDFOjF%2FS83YQlXou4q1yQH7Cn5Bbqmo1CpZxGkzmpoofZOSmT4NPB8kjbAsKJeOUk4LsA%2FGAx1VQS4FjUYZxM8Ntx2UQRwQUEnF%2BEUxocRY74JEPpvDENLASh3NYUxRxJdADkJSJxp2vhzPKlFhcAF7xnhwCQIfDyBGzmEyvlWgJ4XRWrFnJkyGWcliSIEyGUxMZKu4daNswi9s1ahbI49iRBu88qYhM7j%2F0hWy9vKTUNO%2BxQpO4ejbeMpr0SuPT0pO97jOEF1UhV4GBEXsfXxKwgxblb4zyOg1cer7QKJH%2BoGITcew1UTc2olx0bn%2FjPlxyTyKnhHN1e9CBrizXRbEXaUnRi%2B%2FzdvLRRO1ez1O5kaDdfiXMLyX4MMGOqUBFpAJU3I5CpfvaGXd%2FIF7cyR4tDvYIIqHyW5EKV%2BlrcswIzrd%2BpVlInNF0LLMIYMUxbLW0UCASwd0h7SJhFTJx%2BwQm6yz8pb0eZAXrEiIw0Qrav%2FEgx2UDxlqgxLYZP%2FwDPEl%2BDwRHwv%2BpeWKde%2Fe5uxx1YbBBT04dSjpBsiZDVX7z%2FLrRzwegnq2hf5lYGlh4u%2B0OyIyypRgHBsSybQjyzyQ7KiE&X-Amz-Signature=8670c8cf8614f2b881585bc9afbe72d371160b2d50b070ba062c6826da6cf4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHOCKQ3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCQqOGNH7CjVV%2BPQzm7jb95Y8S%2BZCNkQzR1vjF7nb2xBQIgLO1LqoqZMUkmVi8EnT0OQgX5ZS3bRq%2BjmUDNNeiomTkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDC0vJ9VKmLshIB8mfCrcA9V%2BTEPSqNjYB9Lxf25iUnKaRIvSl5UOpzLz6FlRHyPhfQ5h00ZOrjKLFaWUwt8M1WE9y6Y9EeRC5sXODIHedbC%2BF63j7Cua01TPe1DlcykkI6eyq038Ezd31jrHBvblo8Sl9ixxP7gkysPk5162H7x6kiKdY8ZH%2FL894ebVujC42Qxa%2FjfzNNtro9RaSNoTSn4ANI%2BtvPYqDAH2pajCHDQdf7PBB03rzIFKrjkmINxmIYfaA4iBt88bQyjEUKoDz8l0szEEESDFOjF%2FS83YQlXou4q1yQH7Cn5Bbqmo1CpZxGkzmpoofZOSmT4NPB8kjbAsKJeOUk4LsA%2FGAx1VQS4FjUYZxM8Ntx2UQRwQUEnF%2BEUxocRY74JEPpvDENLASh3NYUxRxJdADkJSJxp2vhzPKlFhcAF7xnhwCQIfDyBGzmEyvlWgJ4XRWrFnJkyGWcliSIEyGUxMZKu4daNswi9s1ahbI49iRBu88qYhM7j%2F0hWy9vKTUNO%2BxQpO4ejbeMpr0SuPT0pO97jOEF1UhV4GBEXsfXxKwgxblb4zyOg1cer7QKJH%2BoGITcew1UTc2olx0bn%2FjPlxyTyKnhHN1e9CBrizXRbEXaUnRi%2B%2FzdvLRRO1ez1O5kaDdfiXMLyX4MMGOqUBFpAJU3I5CpfvaGXd%2FIF7cyR4tDvYIIqHyW5EKV%2BlrcswIzrd%2BpVlInNF0LLMIYMUxbLW0UCASwd0h7SJhFTJx%2BwQm6yz8pb0eZAXrEiIw0Qrav%2FEgx2UDxlqgxLYZP%2FwDPEl%2BDwRHwv%2BpeWKde%2Fe5uxx1YbBBT04dSjpBsiZDVX7z%2FLrRzwegnq2hf5lYGlh4u%2B0OyIyypRgHBsSybQjyzyQ7KiE&X-Amz-Signature=fb117931417ea90cf2c2e9a039787d988117d35b1b493561f88ff6b1f9c7ed48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHOCKQ3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCQqOGNH7CjVV%2BPQzm7jb95Y8S%2BZCNkQzR1vjF7nb2xBQIgLO1LqoqZMUkmVi8EnT0OQgX5ZS3bRq%2BjmUDNNeiomTkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDC0vJ9VKmLshIB8mfCrcA9V%2BTEPSqNjYB9Lxf25iUnKaRIvSl5UOpzLz6FlRHyPhfQ5h00ZOrjKLFaWUwt8M1WE9y6Y9EeRC5sXODIHedbC%2BF63j7Cua01TPe1DlcykkI6eyq038Ezd31jrHBvblo8Sl9ixxP7gkysPk5162H7x6kiKdY8ZH%2FL894ebVujC42Qxa%2FjfzNNtro9RaSNoTSn4ANI%2BtvPYqDAH2pajCHDQdf7PBB03rzIFKrjkmINxmIYfaA4iBt88bQyjEUKoDz8l0szEEESDFOjF%2FS83YQlXou4q1yQH7Cn5Bbqmo1CpZxGkzmpoofZOSmT4NPB8kjbAsKJeOUk4LsA%2FGAx1VQS4FjUYZxM8Ntx2UQRwQUEnF%2BEUxocRY74JEPpvDENLASh3NYUxRxJdADkJSJxp2vhzPKlFhcAF7xnhwCQIfDyBGzmEyvlWgJ4XRWrFnJkyGWcliSIEyGUxMZKu4daNswi9s1ahbI49iRBu88qYhM7j%2F0hWy9vKTUNO%2BxQpO4ejbeMpr0SuPT0pO97jOEF1UhV4GBEXsfXxKwgxblb4zyOg1cer7QKJH%2BoGITcew1UTc2olx0bn%2FjPlxyTyKnhHN1e9CBrizXRbEXaUnRi%2B%2FzdvLRRO1ez1O5kaDdfiXMLyX4MMGOqUBFpAJU3I5CpfvaGXd%2FIF7cyR4tDvYIIqHyW5EKV%2BlrcswIzrd%2BpVlInNF0LLMIYMUxbLW0UCASwd0h7SJhFTJx%2BwQm6yz8pb0eZAXrEiIw0Qrav%2FEgx2UDxlqgxLYZP%2FwDPEl%2BDwRHwv%2BpeWKde%2Fe5uxx1YbBBT04dSjpBsiZDVX7z%2FLrRzwegnq2hf5lYGlh4u%2B0OyIyypRgHBsSybQjyzyQ7KiE&X-Amz-Signature=ec5f3d788bc0a483c6dae837a3f9dae9918cb18b525d43f5d0747aaadc54d56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHOCKQ3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCQqOGNH7CjVV%2BPQzm7jb95Y8S%2BZCNkQzR1vjF7nb2xBQIgLO1LqoqZMUkmVi8EnT0OQgX5ZS3bRq%2BjmUDNNeiomTkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDC0vJ9VKmLshIB8mfCrcA9V%2BTEPSqNjYB9Lxf25iUnKaRIvSl5UOpzLz6FlRHyPhfQ5h00ZOrjKLFaWUwt8M1WE9y6Y9EeRC5sXODIHedbC%2BF63j7Cua01TPe1DlcykkI6eyq038Ezd31jrHBvblo8Sl9ixxP7gkysPk5162H7x6kiKdY8ZH%2FL894ebVujC42Qxa%2FjfzNNtro9RaSNoTSn4ANI%2BtvPYqDAH2pajCHDQdf7PBB03rzIFKrjkmINxmIYfaA4iBt88bQyjEUKoDz8l0szEEESDFOjF%2FS83YQlXou4q1yQH7Cn5Bbqmo1CpZxGkzmpoofZOSmT4NPB8kjbAsKJeOUk4LsA%2FGAx1VQS4FjUYZxM8Ntx2UQRwQUEnF%2BEUxocRY74JEPpvDENLASh3NYUxRxJdADkJSJxp2vhzPKlFhcAF7xnhwCQIfDyBGzmEyvlWgJ4XRWrFnJkyGWcliSIEyGUxMZKu4daNswi9s1ahbI49iRBu88qYhM7j%2F0hWy9vKTUNO%2BxQpO4ejbeMpr0SuPT0pO97jOEF1UhV4GBEXsfXxKwgxblb4zyOg1cer7QKJH%2BoGITcew1UTc2olx0bn%2FjPlxyTyKnhHN1e9CBrizXRbEXaUnRi%2B%2FzdvLRRO1ez1O5kaDdfiXMLyX4MMGOqUBFpAJU3I5CpfvaGXd%2FIF7cyR4tDvYIIqHyW5EKV%2BlrcswIzrd%2BpVlInNF0LLMIYMUxbLW0UCASwd0h7SJhFTJx%2BwQm6yz8pb0eZAXrEiIw0Qrav%2FEgx2UDxlqgxLYZP%2FwDPEl%2BDwRHwv%2BpeWKde%2Fe5uxx1YbBBT04dSjpBsiZDVX7z%2FLrRzwegnq2hf5lYGlh4u%2B0OyIyypRgHBsSybQjyzyQ7KiE&X-Amz-Signature=e58cc7e983216f1b7115dedc922b446bb79cd67909bb2bb2408c6352898996ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
