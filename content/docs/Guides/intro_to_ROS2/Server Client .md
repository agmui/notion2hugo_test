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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QQGXZ2W%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaLZNJcCBdGvU98MtAadYKv0ouVYpggDS2iyV67QpERAIhANncV3MGKKntcppti3leuvsIfTeuCPFMxLeNV5MsY7NIKv8DCDQQABoMNjM3NDIzMTgzODA1IgwqqHqEpmJyaYUlX%2F0q3APNdVssQBprwD8%2FJeqWBEvk3PM%2B6rAxuEutK4r6sZPtnqAOX%2F%2FRtIEerw15809EbdN1ce2ZqNWsjBaub3ktrvZ8dp1QuYca4l0Drs4oVQTCIIlPZwdfsBovlkk9bMZC5mfft23DgCuL3FJOahe7LhWKqjOmL%2Fafmb7xxQZsYs1IYfFjqAlAOeUdZHFUfNjaU9FNejZ45NHZj%2FaggOfI%2F3bvs2iZRddr9Ms80Up%2FWeWN5Br2%2BwVsO5b%2BMk7BSHROx00ePUn%2FtnfyYbKizOE1pti6etkstoEWCk2vaRUi%2B8Dq9%2FLhLMGtczc%2F0K5tKVlxRLI1DjWfPkbEaVM8Yh9Cj1UAIGJK4y3Wy9FcdEuWnJCuE2YxQftzZl7VTSIhWHeuRGZyQnkQDKG7lTVxHDgLKEQJrMNCxhb2R%2Fq6itv7p2lUXLD0wHjy3y3M4FFBTP6qrst%2BjMJ761T3z0wgh1m2YMeOR3KODy3GOZbNXiA8K6WgL%2BUnQVQEb74HqIZ9FGXvZdjC0Qn3LZECwpw%2FLoq0e9eKg81CRJ5ADtVt%2BAENx2wEjTz11oVlLNrtfbIRrwyIWDvwH7SBXuBlOZGQceAV9L3w8G%2BON26ZlfOnyvJ8V%2FDnS8AfDSO%2BtlNW5dUApTD9lJG%2FBjqkASqRt818mMFmk04GAGE%2FI3DAdU3CIAwftMPln5LVGCtSq3bku2uwAp6%2FPXGgYkLImtHOBpFGfLSaMLKN39ahbwTezluHxfzslZntqpgkWrlNdQVu%2F8poDj%2BG8U0yDpcvh43MDC%2B1KcHTBkckCFrs2EnTrci11p3XZIpEwvRX%2FEn8MG8cE32ayOfBQ2ku9Ws70C2WAJJDZzW5J6ZKGVtGyJYdnrK%2B&X-Amz-Signature=d043dd1023a9039448e5c0714ce0a26b22c440b085bee0eb9285584deb765a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QQGXZ2W%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaLZNJcCBdGvU98MtAadYKv0ouVYpggDS2iyV67QpERAIhANncV3MGKKntcppti3leuvsIfTeuCPFMxLeNV5MsY7NIKv8DCDQQABoMNjM3NDIzMTgzODA1IgwqqHqEpmJyaYUlX%2F0q3APNdVssQBprwD8%2FJeqWBEvk3PM%2B6rAxuEutK4r6sZPtnqAOX%2F%2FRtIEerw15809EbdN1ce2ZqNWsjBaub3ktrvZ8dp1QuYca4l0Drs4oVQTCIIlPZwdfsBovlkk9bMZC5mfft23DgCuL3FJOahe7LhWKqjOmL%2Fafmb7xxQZsYs1IYfFjqAlAOeUdZHFUfNjaU9FNejZ45NHZj%2FaggOfI%2F3bvs2iZRddr9Ms80Up%2FWeWN5Br2%2BwVsO5b%2BMk7BSHROx00ePUn%2FtnfyYbKizOE1pti6etkstoEWCk2vaRUi%2B8Dq9%2FLhLMGtczc%2F0K5tKVlxRLI1DjWfPkbEaVM8Yh9Cj1UAIGJK4y3Wy9FcdEuWnJCuE2YxQftzZl7VTSIhWHeuRGZyQnkQDKG7lTVxHDgLKEQJrMNCxhb2R%2Fq6itv7p2lUXLD0wHjy3y3M4FFBTP6qrst%2BjMJ761T3z0wgh1m2YMeOR3KODy3GOZbNXiA8K6WgL%2BUnQVQEb74HqIZ9FGXvZdjC0Qn3LZECwpw%2FLoq0e9eKg81CRJ5ADtVt%2BAENx2wEjTz11oVlLNrtfbIRrwyIWDvwH7SBXuBlOZGQceAV9L3w8G%2BON26ZlfOnyvJ8V%2FDnS8AfDSO%2BtlNW5dUApTD9lJG%2FBjqkASqRt818mMFmk04GAGE%2FI3DAdU3CIAwftMPln5LVGCtSq3bku2uwAp6%2FPXGgYkLImtHOBpFGfLSaMLKN39ahbwTezluHxfzslZntqpgkWrlNdQVu%2F8poDj%2BG8U0yDpcvh43MDC%2B1KcHTBkckCFrs2EnTrci11p3XZIpEwvRX%2FEn8MG8cE32ayOfBQ2ku9Ws70C2WAJJDZzW5J6ZKGVtGyJYdnrK%2B&X-Amz-Signature=c082cc4c0c0a761058508e83f8ad6b3930787e8286453bedff437590222bc724&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QQGXZ2W%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaLZNJcCBdGvU98MtAadYKv0ouVYpggDS2iyV67QpERAIhANncV3MGKKntcppti3leuvsIfTeuCPFMxLeNV5MsY7NIKv8DCDQQABoMNjM3NDIzMTgzODA1IgwqqHqEpmJyaYUlX%2F0q3APNdVssQBprwD8%2FJeqWBEvk3PM%2B6rAxuEutK4r6sZPtnqAOX%2F%2FRtIEerw15809EbdN1ce2ZqNWsjBaub3ktrvZ8dp1QuYca4l0Drs4oVQTCIIlPZwdfsBovlkk9bMZC5mfft23DgCuL3FJOahe7LhWKqjOmL%2Fafmb7xxQZsYs1IYfFjqAlAOeUdZHFUfNjaU9FNejZ45NHZj%2FaggOfI%2F3bvs2iZRddr9Ms80Up%2FWeWN5Br2%2BwVsO5b%2BMk7BSHROx00ePUn%2FtnfyYbKizOE1pti6etkstoEWCk2vaRUi%2B8Dq9%2FLhLMGtczc%2F0K5tKVlxRLI1DjWfPkbEaVM8Yh9Cj1UAIGJK4y3Wy9FcdEuWnJCuE2YxQftzZl7VTSIhWHeuRGZyQnkQDKG7lTVxHDgLKEQJrMNCxhb2R%2Fq6itv7p2lUXLD0wHjy3y3M4FFBTP6qrst%2BjMJ761T3z0wgh1m2YMeOR3KODy3GOZbNXiA8K6WgL%2BUnQVQEb74HqIZ9FGXvZdjC0Qn3LZECwpw%2FLoq0e9eKg81CRJ5ADtVt%2BAENx2wEjTz11oVlLNrtfbIRrwyIWDvwH7SBXuBlOZGQceAV9L3w8G%2BON26ZlfOnyvJ8V%2FDnS8AfDSO%2BtlNW5dUApTD9lJG%2FBjqkASqRt818mMFmk04GAGE%2FI3DAdU3CIAwftMPln5LVGCtSq3bku2uwAp6%2FPXGgYkLImtHOBpFGfLSaMLKN39ahbwTezluHxfzslZntqpgkWrlNdQVu%2F8poDj%2BG8U0yDpcvh43MDC%2B1KcHTBkckCFrs2EnTrci11p3XZIpEwvRX%2FEn8MG8cE32ayOfBQ2ku9Ws70C2WAJJDZzW5J6ZKGVtGyJYdnrK%2B&X-Amz-Signature=e1b9da30563b92a35ea7f71c0d08f2a9ccb9e978cc336e2c6a79a50239f6d127&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QQGXZ2W%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaLZNJcCBdGvU98MtAadYKv0ouVYpggDS2iyV67QpERAIhANncV3MGKKntcppti3leuvsIfTeuCPFMxLeNV5MsY7NIKv8DCDQQABoMNjM3NDIzMTgzODA1IgwqqHqEpmJyaYUlX%2F0q3APNdVssQBprwD8%2FJeqWBEvk3PM%2B6rAxuEutK4r6sZPtnqAOX%2F%2FRtIEerw15809EbdN1ce2ZqNWsjBaub3ktrvZ8dp1QuYca4l0Drs4oVQTCIIlPZwdfsBovlkk9bMZC5mfft23DgCuL3FJOahe7LhWKqjOmL%2Fafmb7xxQZsYs1IYfFjqAlAOeUdZHFUfNjaU9FNejZ45NHZj%2FaggOfI%2F3bvs2iZRddr9Ms80Up%2FWeWN5Br2%2BwVsO5b%2BMk7BSHROx00ePUn%2FtnfyYbKizOE1pti6etkstoEWCk2vaRUi%2B8Dq9%2FLhLMGtczc%2F0K5tKVlxRLI1DjWfPkbEaVM8Yh9Cj1UAIGJK4y3Wy9FcdEuWnJCuE2YxQftzZl7VTSIhWHeuRGZyQnkQDKG7lTVxHDgLKEQJrMNCxhb2R%2Fq6itv7p2lUXLD0wHjy3y3M4FFBTP6qrst%2BjMJ761T3z0wgh1m2YMeOR3KODy3GOZbNXiA8K6WgL%2BUnQVQEb74HqIZ9FGXvZdjC0Qn3LZECwpw%2FLoq0e9eKg81CRJ5ADtVt%2BAENx2wEjTz11oVlLNrtfbIRrwyIWDvwH7SBXuBlOZGQceAV9L3w8G%2BON26ZlfOnyvJ8V%2FDnS8AfDSO%2BtlNW5dUApTD9lJG%2FBjqkASqRt818mMFmk04GAGE%2FI3DAdU3CIAwftMPln5LVGCtSq3bku2uwAp6%2FPXGgYkLImtHOBpFGfLSaMLKN39ahbwTezluHxfzslZntqpgkWrlNdQVu%2F8poDj%2BG8U0yDpcvh43MDC%2B1KcHTBkckCFrs2EnTrci11p3XZIpEwvRX%2FEn8MG8cE32ayOfBQ2ku9Ws70C2WAJJDZzW5J6ZKGVtGyJYdnrK%2B&X-Amz-Signature=fbfa7ea8ebd8fb45fede7f637dbf103b7534abf5a6709d900beb3f5cdc95de27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QQGXZ2W%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaLZNJcCBdGvU98MtAadYKv0ouVYpggDS2iyV67QpERAIhANncV3MGKKntcppti3leuvsIfTeuCPFMxLeNV5MsY7NIKv8DCDQQABoMNjM3NDIzMTgzODA1IgwqqHqEpmJyaYUlX%2F0q3APNdVssQBprwD8%2FJeqWBEvk3PM%2B6rAxuEutK4r6sZPtnqAOX%2F%2FRtIEerw15809EbdN1ce2ZqNWsjBaub3ktrvZ8dp1QuYca4l0Drs4oVQTCIIlPZwdfsBovlkk9bMZC5mfft23DgCuL3FJOahe7LhWKqjOmL%2Fafmb7xxQZsYs1IYfFjqAlAOeUdZHFUfNjaU9FNejZ45NHZj%2FaggOfI%2F3bvs2iZRddr9Ms80Up%2FWeWN5Br2%2BwVsO5b%2BMk7BSHROx00ePUn%2FtnfyYbKizOE1pti6etkstoEWCk2vaRUi%2B8Dq9%2FLhLMGtczc%2F0K5tKVlxRLI1DjWfPkbEaVM8Yh9Cj1UAIGJK4y3Wy9FcdEuWnJCuE2YxQftzZl7VTSIhWHeuRGZyQnkQDKG7lTVxHDgLKEQJrMNCxhb2R%2Fq6itv7p2lUXLD0wHjy3y3M4FFBTP6qrst%2BjMJ761T3z0wgh1m2YMeOR3KODy3GOZbNXiA8K6WgL%2BUnQVQEb74HqIZ9FGXvZdjC0Qn3LZECwpw%2FLoq0e9eKg81CRJ5ADtVt%2BAENx2wEjTz11oVlLNrtfbIRrwyIWDvwH7SBXuBlOZGQceAV9L3w8G%2BON26ZlfOnyvJ8V%2FDnS8AfDSO%2BtlNW5dUApTD9lJG%2FBjqkASqRt818mMFmk04GAGE%2FI3DAdU3CIAwftMPln5LVGCtSq3bku2uwAp6%2FPXGgYkLImtHOBpFGfLSaMLKN39ahbwTezluHxfzslZntqpgkWrlNdQVu%2F8poDj%2BG8U0yDpcvh43MDC%2B1KcHTBkckCFrs2EnTrci11p3XZIpEwvRX%2FEn8MG8cE32ayOfBQ2ku9Ws70C2WAJJDZzW5J6ZKGVtGyJYdnrK%2B&X-Amz-Signature=22aeab4ee104b4945e27898db4f63a8e33860a7a2d82b32ea99ddf7cb1ea38b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
