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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3MA4JOT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCVU3UkUkR%2B4mgyCBJLRf6Xd%2F%2FRojlvcJYEXmJ1Q%2FWQYQIhAKH9kAMF6CPU85FurkPlQhsVzQVOsToMPNTZraPJI1KHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM0P2K5I1YUe67epEq3AMQNXclR4vr%2BqZkfggRJVK8GUj2pE6BnPLTQbgU0NBcRm4HWK9ZSYGkG4PKhd8P3zfJZyTPdX0zGSKQ3kvQf0I%2B5jM4DUzxM7qby8%2FoNjB3EyTwlYmoFYHEZEqkhV4EEnsq32a8YqreYXF76fE71Pf4BGUp6HGhWOhy4fWfdn1mAPQZwzd6AULPZ3aV5iAjKGXN%2BWgyt1ilZ4gVR7Fdy5D9WggnYrpYp6QG7vgyMmsCyQrQmaqJSt%2FL9guuL92s0oSs%2BTf26PdyaHXpMtq2lEI3zK35EgEZRk3q4CpTdkkUsyWvRzupyRui9NK4aaQrRo3Y%2Bfw%2Br%2BJrsb4gVf0JKHuEQByCs0bIHBcODBc1ZEHel%2F6VozrKoaSELGRUCwHIub13od%2BaS3HHXozxGxxajBGx6F60uVnIEhcVZcQQkhjr%2BOKIFitQQhemT%2B1pBF6od9qpciazBO2VyoCpYhoABboFexkKjttsyHVUuJgjcgTCUMzCU14xDkT62ICCs1dfRkAe6%2Baou%2FgA8o78fnBYn8bOdYm2h6mU5fcXGrPX60%2ByK8%2BYp%2FuA8Rar2twGGwv8gPNku46ghnpmeoOjbKk5g7KdtQRO7I%2BK5tqZ5PfziwGeMHVIygZeWY3KJZQ%2BXDDpirO%2FBjqkAeQSUelB4reJ5lCXKGFYmKSZHfQEeXOQgi2r4i6S%2Ff4Gt5eF72cIlLzJSZsFmn6TtTi3DNChI8YVxPplTjr%2B028ZMnCfEJ3XQ2YkXJPE%2BTjBMzmlpcoBdz2mhVF3SUNvke6HVJlh5WJon8iVoqUMpW%2FVDVmmkxjN9dd4aM18XvAnNihwiy%2FUJBp0pd%2FYXO0ZXcxY44OgftWwKwXDAivMII8AJQFs&X-Amz-Signature=349513a996e80d1e1db8f59a5d0bf111c811ce3215c072d0a99a36ff37109b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3MA4JOT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCVU3UkUkR%2B4mgyCBJLRf6Xd%2F%2FRojlvcJYEXmJ1Q%2FWQYQIhAKH9kAMF6CPU85FurkPlQhsVzQVOsToMPNTZraPJI1KHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM0P2K5I1YUe67epEq3AMQNXclR4vr%2BqZkfggRJVK8GUj2pE6BnPLTQbgU0NBcRm4HWK9ZSYGkG4PKhd8P3zfJZyTPdX0zGSKQ3kvQf0I%2B5jM4DUzxM7qby8%2FoNjB3EyTwlYmoFYHEZEqkhV4EEnsq32a8YqreYXF76fE71Pf4BGUp6HGhWOhy4fWfdn1mAPQZwzd6AULPZ3aV5iAjKGXN%2BWgyt1ilZ4gVR7Fdy5D9WggnYrpYp6QG7vgyMmsCyQrQmaqJSt%2FL9guuL92s0oSs%2BTf26PdyaHXpMtq2lEI3zK35EgEZRk3q4CpTdkkUsyWvRzupyRui9NK4aaQrRo3Y%2Bfw%2Br%2BJrsb4gVf0JKHuEQByCs0bIHBcODBc1ZEHel%2F6VozrKoaSELGRUCwHIub13od%2BaS3HHXozxGxxajBGx6F60uVnIEhcVZcQQkhjr%2BOKIFitQQhemT%2B1pBF6od9qpciazBO2VyoCpYhoABboFexkKjttsyHVUuJgjcgTCUMzCU14xDkT62ICCs1dfRkAe6%2Baou%2FgA8o78fnBYn8bOdYm2h6mU5fcXGrPX60%2ByK8%2BYp%2FuA8Rar2twGGwv8gPNku46ghnpmeoOjbKk5g7KdtQRO7I%2BK5tqZ5PfziwGeMHVIygZeWY3KJZQ%2BXDDpirO%2FBjqkAeQSUelB4reJ5lCXKGFYmKSZHfQEeXOQgi2r4i6S%2Ff4Gt5eF72cIlLzJSZsFmn6TtTi3DNChI8YVxPplTjr%2B028ZMnCfEJ3XQ2YkXJPE%2BTjBMzmlpcoBdz2mhVF3SUNvke6HVJlh5WJon8iVoqUMpW%2FVDVmmkxjN9dd4aM18XvAnNihwiy%2FUJBp0pd%2FYXO0ZXcxY44OgftWwKwXDAivMII8AJQFs&X-Amz-Signature=b1b98c55b9f7d223fd7bd22ef05eebcc6e1dff756978a967c6eea034c4149357&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3MA4JOT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCVU3UkUkR%2B4mgyCBJLRf6Xd%2F%2FRojlvcJYEXmJ1Q%2FWQYQIhAKH9kAMF6CPU85FurkPlQhsVzQVOsToMPNTZraPJI1KHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM0P2K5I1YUe67epEq3AMQNXclR4vr%2BqZkfggRJVK8GUj2pE6BnPLTQbgU0NBcRm4HWK9ZSYGkG4PKhd8P3zfJZyTPdX0zGSKQ3kvQf0I%2B5jM4DUzxM7qby8%2FoNjB3EyTwlYmoFYHEZEqkhV4EEnsq32a8YqreYXF76fE71Pf4BGUp6HGhWOhy4fWfdn1mAPQZwzd6AULPZ3aV5iAjKGXN%2BWgyt1ilZ4gVR7Fdy5D9WggnYrpYp6QG7vgyMmsCyQrQmaqJSt%2FL9guuL92s0oSs%2BTf26PdyaHXpMtq2lEI3zK35EgEZRk3q4CpTdkkUsyWvRzupyRui9NK4aaQrRo3Y%2Bfw%2Br%2BJrsb4gVf0JKHuEQByCs0bIHBcODBc1ZEHel%2F6VozrKoaSELGRUCwHIub13od%2BaS3HHXozxGxxajBGx6F60uVnIEhcVZcQQkhjr%2BOKIFitQQhemT%2B1pBF6od9qpciazBO2VyoCpYhoABboFexkKjttsyHVUuJgjcgTCUMzCU14xDkT62ICCs1dfRkAe6%2Baou%2FgA8o78fnBYn8bOdYm2h6mU5fcXGrPX60%2ByK8%2BYp%2FuA8Rar2twGGwv8gPNku46ghnpmeoOjbKk5g7KdtQRO7I%2BK5tqZ5PfziwGeMHVIygZeWY3KJZQ%2BXDDpirO%2FBjqkAeQSUelB4reJ5lCXKGFYmKSZHfQEeXOQgi2r4i6S%2Ff4Gt5eF72cIlLzJSZsFmn6TtTi3DNChI8YVxPplTjr%2B028ZMnCfEJ3XQ2YkXJPE%2BTjBMzmlpcoBdz2mhVF3SUNvke6HVJlh5WJon8iVoqUMpW%2FVDVmmkxjN9dd4aM18XvAnNihwiy%2FUJBp0pd%2FYXO0ZXcxY44OgftWwKwXDAivMII8AJQFs&X-Amz-Signature=6b7ae32e600fa916845bc103e88768825828f8aca1dd4a6704c8623eae16f75e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3MA4JOT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCVU3UkUkR%2B4mgyCBJLRf6Xd%2F%2FRojlvcJYEXmJ1Q%2FWQYQIhAKH9kAMF6CPU85FurkPlQhsVzQVOsToMPNTZraPJI1KHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM0P2K5I1YUe67epEq3AMQNXclR4vr%2BqZkfggRJVK8GUj2pE6BnPLTQbgU0NBcRm4HWK9ZSYGkG4PKhd8P3zfJZyTPdX0zGSKQ3kvQf0I%2B5jM4DUzxM7qby8%2FoNjB3EyTwlYmoFYHEZEqkhV4EEnsq32a8YqreYXF76fE71Pf4BGUp6HGhWOhy4fWfdn1mAPQZwzd6AULPZ3aV5iAjKGXN%2BWgyt1ilZ4gVR7Fdy5D9WggnYrpYp6QG7vgyMmsCyQrQmaqJSt%2FL9guuL92s0oSs%2BTf26PdyaHXpMtq2lEI3zK35EgEZRk3q4CpTdkkUsyWvRzupyRui9NK4aaQrRo3Y%2Bfw%2Br%2BJrsb4gVf0JKHuEQByCs0bIHBcODBc1ZEHel%2F6VozrKoaSELGRUCwHIub13od%2BaS3HHXozxGxxajBGx6F60uVnIEhcVZcQQkhjr%2BOKIFitQQhemT%2B1pBF6od9qpciazBO2VyoCpYhoABboFexkKjttsyHVUuJgjcgTCUMzCU14xDkT62ICCs1dfRkAe6%2Baou%2FgA8o78fnBYn8bOdYm2h6mU5fcXGrPX60%2ByK8%2BYp%2FuA8Rar2twGGwv8gPNku46ghnpmeoOjbKk5g7KdtQRO7I%2BK5tqZ5PfziwGeMHVIygZeWY3KJZQ%2BXDDpirO%2FBjqkAeQSUelB4reJ5lCXKGFYmKSZHfQEeXOQgi2r4i6S%2Ff4Gt5eF72cIlLzJSZsFmn6TtTi3DNChI8YVxPplTjr%2B028ZMnCfEJ3XQ2YkXJPE%2BTjBMzmlpcoBdz2mhVF3SUNvke6HVJlh5WJon8iVoqUMpW%2FVDVmmkxjN9dd4aM18XvAnNihwiy%2FUJBp0pd%2FYXO0ZXcxY44OgftWwKwXDAivMII8AJQFs&X-Amz-Signature=1920066f46fc801cbbe03b43f9575eb0e281aa93c52ccb7973eec4e4b1921f56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3MA4JOT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCVU3UkUkR%2B4mgyCBJLRf6Xd%2F%2FRojlvcJYEXmJ1Q%2FWQYQIhAKH9kAMF6CPU85FurkPlQhsVzQVOsToMPNTZraPJI1KHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM0P2K5I1YUe67epEq3AMQNXclR4vr%2BqZkfggRJVK8GUj2pE6BnPLTQbgU0NBcRm4HWK9ZSYGkG4PKhd8P3zfJZyTPdX0zGSKQ3kvQf0I%2B5jM4DUzxM7qby8%2FoNjB3EyTwlYmoFYHEZEqkhV4EEnsq32a8YqreYXF76fE71Pf4BGUp6HGhWOhy4fWfdn1mAPQZwzd6AULPZ3aV5iAjKGXN%2BWgyt1ilZ4gVR7Fdy5D9WggnYrpYp6QG7vgyMmsCyQrQmaqJSt%2FL9guuL92s0oSs%2BTf26PdyaHXpMtq2lEI3zK35EgEZRk3q4CpTdkkUsyWvRzupyRui9NK4aaQrRo3Y%2Bfw%2Br%2BJrsb4gVf0JKHuEQByCs0bIHBcODBc1ZEHel%2F6VozrKoaSELGRUCwHIub13od%2BaS3HHXozxGxxajBGx6F60uVnIEhcVZcQQkhjr%2BOKIFitQQhemT%2B1pBF6od9qpciazBO2VyoCpYhoABboFexkKjttsyHVUuJgjcgTCUMzCU14xDkT62ICCs1dfRkAe6%2Baou%2FgA8o78fnBYn8bOdYm2h6mU5fcXGrPX60%2ByK8%2BYp%2FuA8Rar2twGGwv8gPNku46ghnpmeoOjbKk5g7KdtQRO7I%2BK5tqZ5PfziwGeMHVIygZeWY3KJZQ%2BXDDpirO%2FBjqkAeQSUelB4reJ5lCXKGFYmKSZHfQEeXOQgi2r4i6S%2Ff4Gt5eF72cIlLzJSZsFmn6TtTi3DNChI8YVxPplTjr%2B028ZMnCfEJ3XQ2YkXJPE%2BTjBMzmlpcoBdz2mhVF3SUNvke6HVJlh5WJon8iVoqUMpW%2FVDVmmkxjN9dd4aM18XvAnNihwiy%2FUJBp0pd%2FYXO0ZXcxY44OgftWwKwXDAivMII8AJQFs&X-Amz-Signature=e46ba22d147235d103d0ae853b275bbc125bd85a13a8676a8914cc88dbf0e94e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
