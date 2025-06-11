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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMB3BZJA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFJxMRI86gQUMzBMIN%2BvUmpZaJqoEJjtwoJF41Xr9crQIhAKSVZ5XHL1dfyM9r3flOoNOJHlC4RtiDifCGU5AaKVN3KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSDgXbAq1hc0226zMq3AMxx2eo61hS%2F9OA6J%2Fin0ienxXZBMylo3kPQEzTzqX620ZeUS%2FARdoe0tLuhVnmkoRODsJPP6YzWPnYbVyHrAhLidmoza82hDY5l3Tb7fb7%2FsleaDEmfVY57ghZbaOhyrteBPCrapHMLDhf3AqO6MUdHUiRpYgSWmg1gHQDsfpHJuQhwygzG1WYVIgqi3noKhD9SSVt%2Bx4Y3cEQmjOlWTZotGIbSdKQTluoJkS4VhPIS34UNKJz%2FvrCY4Y%2FQHBkgeUH0ZXe2L6sOPf%2FfIwh36UcfxE2FUrOsJNGk6j5I2xSO%2BZUjLQXQd2gGM%2BFI95Go%2BIh%2FyS7a3xc%2Bnp5Y%2FK9xIGuczpLSw72ldLzUwJwYhJaj0m2SVB2oBoE7KOxK28HJM80CuvCyAZY9beljTglKlGRtTl9I6Jdwst08YbvQUaQbCBgWpr3AQ4quLyAl0Q%2FS4zFdKUy1Jl5nSzJ9DA%2FXe9VDl5fZ9KvPxomNOjdGt1lEii%2F%2FbDifAZB%2F8XJ5L7e9l%2Fq54XP%2FE0zj1AJm4H8QkVZ69nqdjxTxrjI4%2BZHFe1BmwPx4hI5%2FFyi1w7CiIhSlikTNthiHjJeb2zMUQBclqO5EkW5oWeSTJzjRvv8Wiwr3ImcxSgDKc8qRZsI6zDPyaTCBjqkATdRqFvo1IkPjfoAXSQ9BEDvxNLIMcyylgWPjUgqvhftO%2FS3qwnfaoMr2ne6rXbnlmaJG9onow1EITl0eYzrap42gOIPNKKvUzzITF9CTsHvU9PhefArHZ979iT2xJbJWrLIwEy83GouW3yX8ODpDSyhdkk8l%2B%2FdP1agyqxRWVNt6ToDoy8IlVbfZhSrA1akuJ7kbxWm4eCXT%2BDDvaloxxmE7UVn&X-Amz-Signature=c9b9384586b00be0aebd49d28d85719bc810acabce60e356538f544bf90d544c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMB3BZJA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFJxMRI86gQUMzBMIN%2BvUmpZaJqoEJjtwoJF41Xr9crQIhAKSVZ5XHL1dfyM9r3flOoNOJHlC4RtiDifCGU5AaKVN3KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSDgXbAq1hc0226zMq3AMxx2eo61hS%2F9OA6J%2Fin0ienxXZBMylo3kPQEzTzqX620ZeUS%2FARdoe0tLuhVnmkoRODsJPP6YzWPnYbVyHrAhLidmoza82hDY5l3Tb7fb7%2FsleaDEmfVY57ghZbaOhyrteBPCrapHMLDhf3AqO6MUdHUiRpYgSWmg1gHQDsfpHJuQhwygzG1WYVIgqi3noKhD9SSVt%2Bx4Y3cEQmjOlWTZotGIbSdKQTluoJkS4VhPIS34UNKJz%2FvrCY4Y%2FQHBkgeUH0ZXe2L6sOPf%2FfIwh36UcfxE2FUrOsJNGk6j5I2xSO%2BZUjLQXQd2gGM%2BFI95Go%2BIh%2FyS7a3xc%2Bnp5Y%2FK9xIGuczpLSw72ldLzUwJwYhJaj0m2SVB2oBoE7KOxK28HJM80CuvCyAZY9beljTglKlGRtTl9I6Jdwst08YbvQUaQbCBgWpr3AQ4quLyAl0Q%2FS4zFdKUy1Jl5nSzJ9DA%2FXe9VDl5fZ9KvPxomNOjdGt1lEii%2F%2FbDifAZB%2F8XJ5L7e9l%2Fq54XP%2FE0zj1AJm4H8QkVZ69nqdjxTxrjI4%2BZHFe1BmwPx4hI5%2FFyi1w7CiIhSlikTNthiHjJeb2zMUQBclqO5EkW5oWeSTJzjRvv8Wiwr3ImcxSgDKc8qRZsI6zDPyaTCBjqkATdRqFvo1IkPjfoAXSQ9BEDvxNLIMcyylgWPjUgqvhftO%2FS3qwnfaoMr2ne6rXbnlmaJG9onow1EITl0eYzrap42gOIPNKKvUzzITF9CTsHvU9PhefArHZ979iT2xJbJWrLIwEy83GouW3yX8ODpDSyhdkk8l%2B%2FdP1agyqxRWVNt6ToDoy8IlVbfZhSrA1akuJ7kbxWm4eCXT%2BDDvaloxxmE7UVn&X-Amz-Signature=c0c775ae9a8075ef5510a8b4aa3aebedbd9be5456cab22929805e2672707b944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMB3BZJA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFJxMRI86gQUMzBMIN%2BvUmpZaJqoEJjtwoJF41Xr9crQIhAKSVZ5XHL1dfyM9r3flOoNOJHlC4RtiDifCGU5AaKVN3KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSDgXbAq1hc0226zMq3AMxx2eo61hS%2F9OA6J%2Fin0ienxXZBMylo3kPQEzTzqX620ZeUS%2FARdoe0tLuhVnmkoRODsJPP6YzWPnYbVyHrAhLidmoza82hDY5l3Tb7fb7%2FsleaDEmfVY57ghZbaOhyrteBPCrapHMLDhf3AqO6MUdHUiRpYgSWmg1gHQDsfpHJuQhwygzG1WYVIgqi3noKhD9SSVt%2Bx4Y3cEQmjOlWTZotGIbSdKQTluoJkS4VhPIS34UNKJz%2FvrCY4Y%2FQHBkgeUH0ZXe2L6sOPf%2FfIwh36UcfxE2FUrOsJNGk6j5I2xSO%2BZUjLQXQd2gGM%2BFI95Go%2BIh%2FyS7a3xc%2Bnp5Y%2FK9xIGuczpLSw72ldLzUwJwYhJaj0m2SVB2oBoE7KOxK28HJM80CuvCyAZY9beljTglKlGRtTl9I6Jdwst08YbvQUaQbCBgWpr3AQ4quLyAl0Q%2FS4zFdKUy1Jl5nSzJ9DA%2FXe9VDl5fZ9KvPxomNOjdGt1lEii%2F%2FbDifAZB%2F8XJ5L7e9l%2Fq54XP%2FE0zj1AJm4H8QkVZ69nqdjxTxrjI4%2BZHFe1BmwPx4hI5%2FFyi1w7CiIhSlikTNthiHjJeb2zMUQBclqO5EkW5oWeSTJzjRvv8Wiwr3ImcxSgDKc8qRZsI6zDPyaTCBjqkATdRqFvo1IkPjfoAXSQ9BEDvxNLIMcyylgWPjUgqvhftO%2FS3qwnfaoMr2ne6rXbnlmaJG9onow1EITl0eYzrap42gOIPNKKvUzzITF9CTsHvU9PhefArHZ979iT2xJbJWrLIwEy83GouW3yX8ODpDSyhdkk8l%2B%2FdP1agyqxRWVNt6ToDoy8IlVbfZhSrA1akuJ7kbxWm4eCXT%2BDDvaloxxmE7UVn&X-Amz-Signature=a3a5b3841dc75e0455082cbb6ad281ac82d25cf8088bb3927bd4548e6c7affab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMB3BZJA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFJxMRI86gQUMzBMIN%2BvUmpZaJqoEJjtwoJF41Xr9crQIhAKSVZ5XHL1dfyM9r3flOoNOJHlC4RtiDifCGU5AaKVN3KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSDgXbAq1hc0226zMq3AMxx2eo61hS%2F9OA6J%2Fin0ienxXZBMylo3kPQEzTzqX620ZeUS%2FARdoe0tLuhVnmkoRODsJPP6YzWPnYbVyHrAhLidmoza82hDY5l3Tb7fb7%2FsleaDEmfVY57ghZbaOhyrteBPCrapHMLDhf3AqO6MUdHUiRpYgSWmg1gHQDsfpHJuQhwygzG1WYVIgqi3noKhD9SSVt%2Bx4Y3cEQmjOlWTZotGIbSdKQTluoJkS4VhPIS34UNKJz%2FvrCY4Y%2FQHBkgeUH0ZXe2L6sOPf%2FfIwh36UcfxE2FUrOsJNGk6j5I2xSO%2BZUjLQXQd2gGM%2BFI95Go%2BIh%2FyS7a3xc%2Bnp5Y%2FK9xIGuczpLSw72ldLzUwJwYhJaj0m2SVB2oBoE7KOxK28HJM80CuvCyAZY9beljTglKlGRtTl9I6Jdwst08YbvQUaQbCBgWpr3AQ4quLyAl0Q%2FS4zFdKUy1Jl5nSzJ9DA%2FXe9VDl5fZ9KvPxomNOjdGt1lEii%2F%2FbDifAZB%2F8XJ5L7e9l%2Fq54XP%2FE0zj1AJm4H8QkVZ69nqdjxTxrjI4%2BZHFe1BmwPx4hI5%2FFyi1w7CiIhSlikTNthiHjJeb2zMUQBclqO5EkW5oWeSTJzjRvv8Wiwr3ImcxSgDKc8qRZsI6zDPyaTCBjqkATdRqFvo1IkPjfoAXSQ9BEDvxNLIMcyylgWPjUgqvhftO%2FS3qwnfaoMr2ne6rXbnlmaJG9onow1EITl0eYzrap42gOIPNKKvUzzITF9CTsHvU9PhefArHZ979iT2xJbJWrLIwEy83GouW3yX8ODpDSyhdkk8l%2B%2FdP1agyqxRWVNt6ToDoy8IlVbfZhSrA1akuJ7kbxWm4eCXT%2BDDvaloxxmE7UVn&X-Amz-Signature=ffc32c071f120fc8616db34cc09a0149064e52310158f4e8da00d8f621a0e933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMB3BZJA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFJxMRI86gQUMzBMIN%2BvUmpZaJqoEJjtwoJF41Xr9crQIhAKSVZ5XHL1dfyM9r3flOoNOJHlC4RtiDifCGU5AaKVN3KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSDgXbAq1hc0226zMq3AMxx2eo61hS%2F9OA6J%2Fin0ienxXZBMylo3kPQEzTzqX620ZeUS%2FARdoe0tLuhVnmkoRODsJPP6YzWPnYbVyHrAhLidmoza82hDY5l3Tb7fb7%2FsleaDEmfVY57ghZbaOhyrteBPCrapHMLDhf3AqO6MUdHUiRpYgSWmg1gHQDsfpHJuQhwygzG1WYVIgqi3noKhD9SSVt%2Bx4Y3cEQmjOlWTZotGIbSdKQTluoJkS4VhPIS34UNKJz%2FvrCY4Y%2FQHBkgeUH0ZXe2L6sOPf%2FfIwh36UcfxE2FUrOsJNGk6j5I2xSO%2BZUjLQXQd2gGM%2BFI95Go%2BIh%2FyS7a3xc%2Bnp5Y%2FK9xIGuczpLSw72ldLzUwJwYhJaj0m2SVB2oBoE7KOxK28HJM80CuvCyAZY9beljTglKlGRtTl9I6Jdwst08YbvQUaQbCBgWpr3AQ4quLyAl0Q%2FS4zFdKUy1Jl5nSzJ9DA%2FXe9VDl5fZ9KvPxomNOjdGt1lEii%2F%2FbDifAZB%2F8XJ5L7e9l%2Fq54XP%2FE0zj1AJm4H8QkVZ69nqdjxTxrjI4%2BZHFe1BmwPx4hI5%2FFyi1w7CiIhSlikTNthiHjJeb2zMUQBclqO5EkW5oWeSTJzjRvv8Wiwr3ImcxSgDKc8qRZsI6zDPyaTCBjqkATdRqFvo1IkPjfoAXSQ9BEDvxNLIMcyylgWPjUgqvhftO%2FS3qwnfaoMr2ne6rXbnlmaJG9onow1EITl0eYzrap42gOIPNKKvUzzITF9CTsHvU9PhefArHZ979iT2xJbJWrLIwEy83GouW3yX8ODpDSyhdkk8l%2B%2FdP1agyqxRWVNt6ToDoy8IlVbfZhSrA1akuJ7kbxWm4eCXT%2BDDvaloxxmE7UVn&X-Amz-Signature=d95b2039b089e08da71bc89b12865121ff7bc50974fbf984f6f003c7a8f634b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
