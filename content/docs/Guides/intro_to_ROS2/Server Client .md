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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLUTJH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgK8caB7L1p4CjszDLa7Jpqt%2BNGL3gMV%2ByQI5rLHeIwIgT1YjQNB7Q63bwZ9kvrCz4o0Lklskp1XqdEGNIf9X5TkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuzDj98ib3x8kzmSircA7uUhub%2Beeagka19p8%2F85TKEq%2F8%2F1s7QdllaOYO0INwoWkRH%2Fzq1dHqk%2BcEg6zC4B4l3vBGumRmku7wrDwJvTaDV9ZVvXk4WQo%2BLz1ChXXpuX020ti6e4vs%2Fjo%2B1S%2F5KYuX%2B7RKhkzQSxmRLQwnS95x1iR4eM38KB%2B8fQbsuLFMYRhNNYY5hSjmPAFeOE9gjQcAetSmovZkNKQs3PtpdT7q%2BRaPQ%2Fk%2Bs5dhxfNP75O%2B9mYqmj%2Bl6Ttp4Ea%2BzYsVvMklwgBU0rnbqtxrajWbBvHVq1RerwnyP3yvLwM7eDI6VeCMQ2o6IX13%2FWAhl%2FO1d%2F9LDPlqf75RbimMLytR9iT86xgW9YJl7NJO2XBUEb0jfQ1gIIEQhkaswY%2F1XeEPGutDTWE66A6TUZMU0VKTMXqQ2or89%2BDkWgnlEwvgSlc8gEC0Dotmfx3kxSsenbbBfamwJ2RFcHI4q8cvvwPcUYXFTx5FZRdR6zZ7DaMbiAXseF7HTqzVqYmXGs4M82kjnNYEi24ObMqmD0s5LmvyQi7JnKStJvfobkD7ceYSAbG2ObzGo0df1tOL79L0lQYHDNl6SvK7Xi279Ot%2F8%2BI45veNl3Bho57eQqdZU%2FjuIKp93dQVJhaknBZu1muuJMLattcQGOqUBSuabcWCY8nVoMYEjNWTPW3OOFCXkdyHNRqS3Nogdez8pzAMA9y4OvuilI17%2FJ0H9HW7a%2BKnj7GcRI9%2FlJZKXNefGToXbZAJLohwR2NnDKgQ3Vpmr%2FL5UAPE%2B%2FSuS5ecygcEsDwodMWmx9T2z4phpDN7s6Lu%2Fr3oadKIoSmToR1IcAa3ayEORJaI4bj%2BY9wiKDT3UQWvnuOKm7ECdqOdnfPSwHOeF&X-Amz-Signature=128fedb2c68505ef05b6877eb6934b4ccf633b1bdadafe67748554da5e9800f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLUTJH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgK8caB7L1p4CjszDLa7Jpqt%2BNGL3gMV%2ByQI5rLHeIwIgT1YjQNB7Q63bwZ9kvrCz4o0Lklskp1XqdEGNIf9X5TkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuzDj98ib3x8kzmSircA7uUhub%2Beeagka19p8%2F85TKEq%2F8%2F1s7QdllaOYO0INwoWkRH%2Fzq1dHqk%2BcEg6zC4B4l3vBGumRmku7wrDwJvTaDV9ZVvXk4WQo%2BLz1ChXXpuX020ti6e4vs%2Fjo%2B1S%2F5KYuX%2B7RKhkzQSxmRLQwnS95x1iR4eM38KB%2B8fQbsuLFMYRhNNYY5hSjmPAFeOE9gjQcAetSmovZkNKQs3PtpdT7q%2BRaPQ%2Fk%2Bs5dhxfNP75O%2B9mYqmj%2Bl6Ttp4Ea%2BzYsVvMklwgBU0rnbqtxrajWbBvHVq1RerwnyP3yvLwM7eDI6VeCMQ2o6IX13%2FWAhl%2FO1d%2F9LDPlqf75RbimMLytR9iT86xgW9YJl7NJO2XBUEb0jfQ1gIIEQhkaswY%2F1XeEPGutDTWE66A6TUZMU0VKTMXqQ2or89%2BDkWgnlEwvgSlc8gEC0Dotmfx3kxSsenbbBfamwJ2RFcHI4q8cvvwPcUYXFTx5FZRdR6zZ7DaMbiAXseF7HTqzVqYmXGs4M82kjnNYEi24ObMqmD0s5LmvyQi7JnKStJvfobkD7ceYSAbG2ObzGo0df1tOL79L0lQYHDNl6SvK7Xi279Ot%2F8%2BI45veNl3Bho57eQqdZU%2FjuIKp93dQVJhaknBZu1muuJMLattcQGOqUBSuabcWCY8nVoMYEjNWTPW3OOFCXkdyHNRqS3Nogdez8pzAMA9y4OvuilI17%2FJ0H9HW7a%2BKnj7GcRI9%2FlJZKXNefGToXbZAJLohwR2NnDKgQ3Vpmr%2FL5UAPE%2B%2FSuS5ecygcEsDwodMWmx9T2z4phpDN7s6Lu%2Fr3oadKIoSmToR1IcAa3ayEORJaI4bj%2BY9wiKDT3UQWvnuOKm7ECdqOdnfPSwHOeF&X-Amz-Signature=750f32397f744b19af0705636196932ae6dcf30c030ab21e1d9110e0ad770d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLUTJH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgK8caB7L1p4CjszDLa7Jpqt%2BNGL3gMV%2ByQI5rLHeIwIgT1YjQNB7Q63bwZ9kvrCz4o0Lklskp1XqdEGNIf9X5TkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuzDj98ib3x8kzmSircA7uUhub%2Beeagka19p8%2F85TKEq%2F8%2F1s7QdllaOYO0INwoWkRH%2Fzq1dHqk%2BcEg6zC4B4l3vBGumRmku7wrDwJvTaDV9ZVvXk4WQo%2BLz1ChXXpuX020ti6e4vs%2Fjo%2B1S%2F5KYuX%2B7RKhkzQSxmRLQwnS95x1iR4eM38KB%2B8fQbsuLFMYRhNNYY5hSjmPAFeOE9gjQcAetSmovZkNKQs3PtpdT7q%2BRaPQ%2Fk%2Bs5dhxfNP75O%2B9mYqmj%2Bl6Ttp4Ea%2BzYsVvMklwgBU0rnbqtxrajWbBvHVq1RerwnyP3yvLwM7eDI6VeCMQ2o6IX13%2FWAhl%2FO1d%2F9LDPlqf75RbimMLytR9iT86xgW9YJl7NJO2XBUEb0jfQ1gIIEQhkaswY%2F1XeEPGutDTWE66A6TUZMU0VKTMXqQ2or89%2BDkWgnlEwvgSlc8gEC0Dotmfx3kxSsenbbBfamwJ2RFcHI4q8cvvwPcUYXFTx5FZRdR6zZ7DaMbiAXseF7HTqzVqYmXGs4M82kjnNYEi24ObMqmD0s5LmvyQi7JnKStJvfobkD7ceYSAbG2ObzGo0df1tOL79L0lQYHDNl6SvK7Xi279Ot%2F8%2BI45veNl3Bho57eQqdZU%2FjuIKp93dQVJhaknBZu1muuJMLattcQGOqUBSuabcWCY8nVoMYEjNWTPW3OOFCXkdyHNRqS3Nogdez8pzAMA9y4OvuilI17%2FJ0H9HW7a%2BKnj7GcRI9%2FlJZKXNefGToXbZAJLohwR2NnDKgQ3Vpmr%2FL5UAPE%2B%2FSuS5ecygcEsDwodMWmx9T2z4phpDN7s6Lu%2Fr3oadKIoSmToR1IcAa3ayEORJaI4bj%2BY9wiKDT3UQWvnuOKm7ECdqOdnfPSwHOeF&X-Amz-Signature=225360903bdaf3a48ae3bdd447a62d895c0c66f781afcd81bf6c90516f20f228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLUTJH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgK8caB7L1p4CjszDLa7Jpqt%2BNGL3gMV%2ByQI5rLHeIwIgT1YjQNB7Q63bwZ9kvrCz4o0Lklskp1XqdEGNIf9X5TkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuzDj98ib3x8kzmSircA7uUhub%2Beeagka19p8%2F85TKEq%2F8%2F1s7QdllaOYO0INwoWkRH%2Fzq1dHqk%2BcEg6zC4B4l3vBGumRmku7wrDwJvTaDV9ZVvXk4WQo%2BLz1ChXXpuX020ti6e4vs%2Fjo%2B1S%2F5KYuX%2B7RKhkzQSxmRLQwnS95x1iR4eM38KB%2B8fQbsuLFMYRhNNYY5hSjmPAFeOE9gjQcAetSmovZkNKQs3PtpdT7q%2BRaPQ%2Fk%2Bs5dhxfNP75O%2B9mYqmj%2Bl6Ttp4Ea%2BzYsVvMklwgBU0rnbqtxrajWbBvHVq1RerwnyP3yvLwM7eDI6VeCMQ2o6IX13%2FWAhl%2FO1d%2F9LDPlqf75RbimMLytR9iT86xgW9YJl7NJO2XBUEb0jfQ1gIIEQhkaswY%2F1XeEPGutDTWE66A6TUZMU0VKTMXqQ2or89%2BDkWgnlEwvgSlc8gEC0Dotmfx3kxSsenbbBfamwJ2RFcHI4q8cvvwPcUYXFTx5FZRdR6zZ7DaMbiAXseF7HTqzVqYmXGs4M82kjnNYEi24ObMqmD0s5LmvyQi7JnKStJvfobkD7ceYSAbG2ObzGo0df1tOL79L0lQYHDNl6SvK7Xi279Ot%2F8%2BI45veNl3Bho57eQqdZU%2FjuIKp93dQVJhaknBZu1muuJMLattcQGOqUBSuabcWCY8nVoMYEjNWTPW3OOFCXkdyHNRqS3Nogdez8pzAMA9y4OvuilI17%2FJ0H9HW7a%2BKnj7GcRI9%2FlJZKXNefGToXbZAJLohwR2NnDKgQ3Vpmr%2FL5UAPE%2B%2FSuS5ecygcEsDwodMWmx9T2z4phpDN7s6Lu%2Fr3oadKIoSmToR1IcAa3ayEORJaI4bj%2BY9wiKDT3UQWvnuOKm7ECdqOdnfPSwHOeF&X-Amz-Signature=a9c168d4d0d578c12261bc136bd12f46c174d18fddffa52c5b1ca42f4fd970ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLUTJH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgK8caB7L1p4CjszDLa7Jpqt%2BNGL3gMV%2ByQI5rLHeIwIgT1YjQNB7Q63bwZ9kvrCz4o0Lklskp1XqdEGNIf9X5TkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuzDj98ib3x8kzmSircA7uUhub%2Beeagka19p8%2F85TKEq%2F8%2F1s7QdllaOYO0INwoWkRH%2Fzq1dHqk%2BcEg6zC4B4l3vBGumRmku7wrDwJvTaDV9ZVvXk4WQo%2BLz1ChXXpuX020ti6e4vs%2Fjo%2B1S%2F5KYuX%2B7RKhkzQSxmRLQwnS95x1iR4eM38KB%2B8fQbsuLFMYRhNNYY5hSjmPAFeOE9gjQcAetSmovZkNKQs3PtpdT7q%2BRaPQ%2Fk%2Bs5dhxfNP75O%2B9mYqmj%2Bl6Ttp4Ea%2BzYsVvMklwgBU0rnbqtxrajWbBvHVq1RerwnyP3yvLwM7eDI6VeCMQ2o6IX13%2FWAhl%2FO1d%2F9LDPlqf75RbimMLytR9iT86xgW9YJl7NJO2XBUEb0jfQ1gIIEQhkaswY%2F1XeEPGutDTWE66A6TUZMU0VKTMXqQ2or89%2BDkWgnlEwvgSlc8gEC0Dotmfx3kxSsenbbBfamwJ2RFcHI4q8cvvwPcUYXFTx5FZRdR6zZ7DaMbiAXseF7HTqzVqYmXGs4M82kjnNYEi24ObMqmD0s5LmvyQi7JnKStJvfobkD7ceYSAbG2ObzGo0df1tOL79L0lQYHDNl6SvK7Xi279Ot%2F8%2BI45veNl3Bho57eQqdZU%2FjuIKp93dQVJhaknBZu1muuJMLattcQGOqUBSuabcWCY8nVoMYEjNWTPW3OOFCXkdyHNRqS3Nogdez8pzAMA9y4OvuilI17%2FJ0H9HW7a%2BKnj7GcRI9%2FlJZKXNefGToXbZAJLohwR2NnDKgQ3Vpmr%2FL5UAPE%2B%2FSuS5ecygcEsDwodMWmx9T2z4phpDN7s6Lu%2Fr3oadKIoSmToR1IcAa3ayEORJaI4bj%2BY9wiKDT3UQWvnuOKm7ECdqOdnfPSwHOeF&X-Amz-Signature=ce36377d63e0d50599ba57487721aa6e870895bc7db90209aac7fd615f19de6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
