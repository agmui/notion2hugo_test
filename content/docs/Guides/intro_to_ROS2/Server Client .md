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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXLHQXC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDSVESnWj13dZl1fqZhRPZ1P7lI9JWuUL5UGEXJ3Xav4gIhAMAYtTGecK7q6gFYs2v4z4XFIja10o8z3U8J%2BogYaWRjKv8DCC8QABoMNjM3NDIzMTgzODA1IgwBzbn%2B2TIviI6OB5Eq3AO7y%2FqV1z9P%2FT4pT3deCJDLUB44KZNOxZkDz0Rlz0l20aFgPxeAFGGTZwzvTWLWTLkEzkelkEBNLcUKqYDn6XxghJZBFYoFsq9HWyAnW%2BgDA3z6bTXioZALNVPVAQChNgARgJmzNKexHhs%2BnjiEu6o%2B1QehroaJKya380IkLnrg6POwMfrQabEre69qX9joV291GSR8dM1TdQso%2BA6r5jg0KSsVrW3iIvKE2%2B0GA7yRz0EVDnPMTTl8MJrUws91O3Icls5QuQ35aFWa8Db50gVHe2OBquRFobhrjfadpg%2BdWKSgusGhJHqpLHgNUX13rXwNGrfmGlzoLElUgnX4O3rOPrtlsn3LJS%2BPjpdzmmm3uNgS9%2BivyFzoy2EHoRDSqDqHZRCm6zILHBKyS5%2Bpd%2FNosPn5XbTcT0fene2yO%2BAYYvj2%2BqUJqBGj50KjO4ujxdDR55mhdWTAVJxlOl9hmqXeyDf9NrGx1kzRgEzXkK7OPa%2BHfFYEJuXHde7s3pxO78tOlwnb%2B0326dTw1eFXjj0VmfBSbsp2Kl61isQmWATY3Umy2%2B0wK5eWYfxyBKTTrVGAOcW8SfPf1yfsNJfMzlIzWce4bis11Ho%2FVt8Q5Km%2BVaTVxHqTzw3cXQJDYDCBxZ%2FDBjqkAZpPOL5MGyijUXUSGI%2FfbcyB69dl51VznRWwyZjUnQGhnfXiuUBifab1uWHlutV9NgEA5sWWDVr6HnecosmbeXiBTRxh176XbU48CLTmlBkpjH2HoKee0%2Bn%2B5SAji999agK9Ph1y5Cy0B40jLM8nIrlQRb03kKHUhrBIe%2F9fc72vJlSHPq0yu5%2B1SweCx0K9x%2F7KJ5RNh8dv8FQWOOnziOYu837F&X-Amz-Signature=c965b64aca55e4218f51c42db82f983fc3049ea7840e3119294f3ad2e8c6b2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXLHQXC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDSVESnWj13dZl1fqZhRPZ1P7lI9JWuUL5UGEXJ3Xav4gIhAMAYtTGecK7q6gFYs2v4z4XFIja10o8z3U8J%2BogYaWRjKv8DCC8QABoMNjM3NDIzMTgzODA1IgwBzbn%2B2TIviI6OB5Eq3AO7y%2FqV1z9P%2FT4pT3deCJDLUB44KZNOxZkDz0Rlz0l20aFgPxeAFGGTZwzvTWLWTLkEzkelkEBNLcUKqYDn6XxghJZBFYoFsq9HWyAnW%2BgDA3z6bTXioZALNVPVAQChNgARgJmzNKexHhs%2BnjiEu6o%2B1QehroaJKya380IkLnrg6POwMfrQabEre69qX9joV291GSR8dM1TdQso%2BA6r5jg0KSsVrW3iIvKE2%2B0GA7yRz0EVDnPMTTl8MJrUws91O3Icls5QuQ35aFWa8Db50gVHe2OBquRFobhrjfadpg%2BdWKSgusGhJHqpLHgNUX13rXwNGrfmGlzoLElUgnX4O3rOPrtlsn3LJS%2BPjpdzmmm3uNgS9%2BivyFzoy2EHoRDSqDqHZRCm6zILHBKyS5%2Bpd%2FNosPn5XbTcT0fene2yO%2BAYYvj2%2BqUJqBGj50KjO4ujxdDR55mhdWTAVJxlOl9hmqXeyDf9NrGx1kzRgEzXkK7OPa%2BHfFYEJuXHde7s3pxO78tOlwnb%2B0326dTw1eFXjj0VmfBSbsp2Kl61isQmWATY3Umy2%2B0wK5eWYfxyBKTTrVGAOcW8SfPf1yfsNJfMzlIzWce4bis11Ho%2FVt8Q5Km%2BVaTVxHqTzw3cXQJDYDCBxZ%2FDBjqkAZpPOL5MGyijUXUSGI%2FfbcyB69dl51VznRWwyZjUnQGhnfXiuUBifab1uWHlutV9NgEA5sWWDVr6HnecosmbeXiBTRxh176XbU48CLTmlBkpjH2HoKee0%2Bn%2B5SAji999agK9Ph1y5Cy0B40jLM8nIrlQRb03kKHUhrBIe%2F9fc72vJlSHPq0yu5%2B1SweCx0K9x%2F7KJ5RNh8dv8FQWOOnziOYu837F&X-Amz-Signature=a51e6645cc82541fbd7a7de38bffa4585365e7e008043db5da61c45bd5f5a057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXLHQXC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDSVESnWj13dZl1fqZhRPZ1P7lI9JWuUL5UGEXJ3Xav4gIhAMAYtTGecK7q6gFYs2v4z4XFIja10o8z3U8J%2BogYaWRjKv8DCC8QABoMNjM3NDIzMTgzODA1IgwBzbn%2B2TIviI6OB5Eq3AO7y%2FqV1z9P%2FT4pT3deCJDLUB44KZNOxZkDz0Rlz0l20aFgPxeAFGGTZwzvTWLWTLkEzkelkEBNLcUKqYDn6XxghJZBFYoFsq9HWyAnW%2BgDA3z6bTXioZALNVPVAQChNgARgJmzNKexHhs%2BnjiEu6o%2B1QehroaJKya380IkLnrg6POwMfrQabEre69qX9joV291GSR8dM1TdQso%2BA6r5jg0KSsVrW3iIvKE2%2B0GA7yRz0EVDnPMTTl8MJrUws91O3Icls5QuQ35aFWa8Db50gVHe2OBquRFobhrjfadpg%2BdWKSgusGhJHqpLHgNUX13rXwNGrfmGlzoLElUgnX4O3rOPrtlsn3LJS%2BPjpdzmmm3uNgS9%2BivyFzoy2EHoRDSqDqHZRCm6zILHBKyS5%2Bpd%2FNosPn5XbTcT0fene2yO%2BAYYvj2%2BqUJqBGj50KjO4ujxdDR55mhdWTAVJxlOl9hmqXeyDf9NrGx1kzRgEzXkK7OPa%2BHfFYEJuXHde7s3pxO78tOlwnb%2B0326dTw1eFXjj0VmfBSbsp2Kl61isQmWATY3Umy2%2B0wK5eWYfxyBKTTrVGAOcW8SfPf1yfsNJfMzlIzWce4bis11Ho%2FVt8Q5Km%2BVaTVxHqTzw3cXQJDYDCBxZ%2FDBjqkAZpPOL5MGyijUXUSGI%2FfbcyB69dl51VznRWwyZjUnQGhnfXiuUBifab1uWHlutV9NgEA5sWWDVr6HnecosmbeXiBTRxh176XbU48CLTmlBkpjH2HoKee0%2Bn%2B5SAji999agK9Ph1y5Cy0B40jLM8nIrlQRb03kKHUhrBIe%2F9fc72vJlSHPq0yu5%2B1SweCx0K9x%2F7KJ5RNh8dv8FQWOOnziOYu837F&X-Amz-Signature=2392a5daf75b0d7a846c99bb294657395d707b092c23891f6a458ba452ff161e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXLHQXC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDSVESnWj13dZl1fqZhRPZ1P7lI9JWuUL5UGEXJ3Xav4gIhAMAYtTGecK7q6gFYs2v4z4XFIja10o8z3U8J%2BogYaWRjKv8DCC8QABoMNjM3NDIzMTgzODA1IgwBzbn%2B2TIviI6OB5Eq3AO7y%2FqV1z9P%2FT4pT3deCJDLUB44KZNOxZkDz0Rlz0l20aFgPxeAFGGTZwzvTWLWTLkEzkelkEBNLcUKqYDn6XxghJZBFYoFsq9HWyAnW%2BgDA3z6bTXioZALNVPVAQChNgARgJmzNKexHhs%2BnjiEu6o%2B1QehroaJKya380IkLnrg6POwMfrQabEre69qX9joV291GSR8dM1TdQso%2BA6r5jg0KSsVrW3iIvKE2%2B0GA7yRz0EVDnPMTTl8MJrUws91O3Icls5QuQ35aFWa8Db50gVHe2OBquRFobhrjfadpg%2BdWKSgusGhJHqpLHgNUX13rXwNGrfmGlzoLElUgnX4O3rOPrtlsn3LJS%2BPjpdzmmm3uNgS9%2BivyFzoy2EHoRDSqDqHZRCm6zILHBKyS5%2Bpd%2FNosPn5XbTcT0fene2yO%2BAYYvj2%2BqUJqBGj50KjO4ujxdDR55mhdWTAVJxlOl9hmqXeyDf9NrGx1kzRgEzXkK7OPa%2BHfFYEJuXHde7s3pxO78tOlwnb%2B0326dTw1eFXjj0VmfBSbsp2Kl61isQmWATY3Umy2%2B0wK5eWYfxyBKTTrVGAOcW8SfPf1yfsNJfMzlIzWce4bis11Ho%2FVt8Q5Km%2BVaTVxHqTzw3cXQJDYDCBxZ%2FDBjqkAZpPOL5MGyijUXUSGI%2FfbcyB69dl51VznRWwyZjUnQGhnfXiuUBifab1uWHlutV9NgEA5sWWDVr6HnecosmbeXiBTRxh176XbU48CLTmlBkpjH2HoKee0%2Bn%2B5SAji999agK9Ph1y5Cy0B40jLM8nIrlQRb03kKHUhrBIe%2F9fc72vJlSHPq0yu5%2B1SweCx0K9x%2F7KJ5RNh8dv8FQWOOnziOYu837F&X-Amz-Signature=2f5ece214dc2ee5fa479a9036ee393fee9a2090b7e6e15d862cf6240a4cbb437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXLHQXC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDSVESnWj13dZl1fqZhRPZ1P7lI9JWuUL5UGEXJ3Xav4gIhAMAYtTGecK7q6gFYs2v4z4XFIja10o8z3U8J%2BogYaWRjKv8DCC8QABoMNjM3NDIzMTgzODA1IgwBzbn%2B2TIviI6OB5Eq3AO7y%2FqV1z9P%2FT4pT3deCJDLUB44KZNOxZkDz0Rlz0l20aFgPxeAFGGTZwzvTWLWTLkEzkelkEBNLcUKqYDn6XxghJZBFYoFsq9HWyAnW%2BgDA3z6bTXioZALNVPVAQChNgARgJmzNKexHhs%2BnjiEu6o%2B1QehroaJKya380IkLnrg6POwMfrQabEre69qX9joV291GSR8dM1TdQso%2BA6r5jg0KSsVrW3iIvKE2%2B0GA7yRz0EVDnPMTTl8MJrUws91O3Icls5QuQ35aFWa8Db50gVHe2OBquRFobhrjfadpg%2BdWKSgusGhJHqpLHgNUX13rXwNGrfmGlzoLElUgnX4O3rOPrtlsn3LJS%2BPjpdzmmm3uNgS9%2BivyFzoy2EHoRDSqDqHZRCm6zILHBKyS5%2Bpd%2FNosPn5XbTcT0fene2yO%2BAYYvj2%2BqUJqBGj50KjO4ujxdDR55mhdWTAVJxlOl9hmqXeyDf9NrGx1kzRgEzXkK7OPa%2BHfFYEJuXHde7s3pxO78tOlwnb%2B0326dTw1eFXjj0VmfBSbsp2Kl61isQmWATY3Umy2%2B0wK5eWYfxyBKTTrVGAOcW8SfPf1yfsNJfMzlIzWce4bis11Ho%2FVt8Q5Km%2BVaTVxHqTzw3cXQJDYDCBxZ%2FDBjqkAZpPOL5MGyijUXUSGI%2FfbcyB69dl51VznRWwyZjUnQGhnfXiuUBifab1uWHlutV9NgEA5sWWDVr6HnecosmbeXiBTRxh176XbU48CLTmlBkpjH2HoKee0%2Bn%2B5SAji999agK9Ph1y5Cy0B40jLM8nIrlQRb03kKHUhrBIe%2F9fc72vJlSHPq0yu5%2B1SweCx0K9x%2F7KJ5RNh8dv8FQWOOnziOYu837F&X-Amz-Signature=f558e08510ea70229e61d32c6183880e9ed6b83f04c14cee162caeffffcd9d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
