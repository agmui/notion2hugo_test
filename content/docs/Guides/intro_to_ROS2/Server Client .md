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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDQYFGB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCzOFoR3sV6q2Wt8PIuxAeTGQoUUbEKiHqjW3L0T6jx%2BAIgXVKQfwLyvjMuk3nVceFlS73AZC3lzQSjdVRJA3mzJ60q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ5dJICpEQygrf%2BiASrcA4QPhuGtPy0vPQwikdVKk5XyvcEBWukcu%2BmlSHX%2B0ijTfRQ4n9%2Fybt3zJ8V9jgMTrCQXISewLZklA28wGd8BvQFHhc3WzYH9CyBuvhfZJH%2BGS5TcFuqK679Sca3fuXXaj1pgicH8dDboNAC9gErOw7evSE2O5nKN7nNKbonvBRy87u5%2BQBhV8DY8lwIfAo%2B2PYkXRg6jBv0KcjPq4rkXfCKNVZbYN1O3e3clCPM6k5zGCVmYRP9ckmQjw69cK6m%2FS%2BEFcImhtgmcO2D3flwt3q2z8kLZsh%2Bi73iSPPoByAfUOOntLzpbzePPHX6bsX0L%2FaVZIF8kYm01bIRVdRHe5hxJ6YuJ64NvielD2SEN5xiZkiBDLQv%2Flyv6QmVZGy5xAVOWlbIvybzHMc%2FaeVZSlck48zT565c1dUCz33dRfPjvSmj8u1gQh02E439sH%2FtDahTg1y2gex6ysHUJjbAquw%2FuKHboXm2e3OrIDOG%2Fd9fqPjGZZp4iY%2F2CrMoamt2Yx7wBO7oLYLf6Wdx0Nc1GBkPCeU2GDTEQvcJ3175wtEDoAwdc0J6lCRv85g58FqANp2Yxa3z%2BBzdZNSveE3AiX08q55q%2BGva0RLhJbmHWR%2BLjjyWqkYD13Qwp9ab6MPPtwb0GOqUBbQ3cZJfOgwqn0U63stQrFhXGkVMDMde%2BpnVlZgTKPMNisoVpSHHERsJG5UWPLRTuSiSiAKzVo7TIGO4%2FGscohl2sZgd%2BvCzZfQsL67la3cws9UnvI8uL2RLrjeyvWyCHikWUUBFZ%2FGStOwRnXoRVJP8xwtnHDgivkgycqu42EOehofqnXYmLLubXdTIOJZNCTVe9o8u9WIzE2SuwFvT8y0paB1Py&X-Amz-Signature=c06b69b94a9c782c39555cda9ddf5cd9b4423c5b65129e2b128f93c863be3869&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDQYFGB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCzOFoR3sV6q2Wt8PIuxAeTGQoUUbEKiHqjW3L0T6jx%2BAIgXVKQfwLyvjMuk3nVceFlS73AZC3lzQSjdVRJA3mzJ60q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ5dJICpEQygrf%2BiASrcA4QPhuGtPy0vPQwikdVKk5XyvcEBWukcu%2BmlSHX%2B0ijTfRQ4n9%2Fybt3zJ8V9jgMTrCQXISewLZklA28wGd8BvQFHhc3WzYH9CyBuvhfZJH%2BGS5TcFuqK679Sca3fuXXaj1pgicH8dDboNAC9gErOw7evSE2O5nKN7nNKbonvBRy87u5%2BQBhV8DY8lwIfAo%2B2PYkXRg6jBv0KcjPq4rkXfCKNVZbYN1O3e3clCPM6k5zGCVmYRP9ckmQjw69cK6m%2FS%2BEFcImhtgmcO2D3flwt3q2z8kLZsh%2Bi73iSPPoByAfUOOntLzpbzePPHX6bsX0L%2FaVZIF8kYm01bIRVdRHe5hxJ6YuJ64NvielD2SEN5xiZkiBDLQv%2Flyv6QmVZGy5xAVOWlbIvybzHMc%2FaeVZSlck48zT565c1dUCz33dRfPjvSmj8u1gQh02E439sH%2FtDahTg1y2gex6ysHUJjbAquw%2FuKHboXm2e3OrIDOG%2Fd9fqPjGZZp4iY%2F2CrMoamt2Yx7wBO7oLYLf6Wdx0Nc1GBkPCeU2GDTEQvcJ3175wtEDoAwdc0J6lCRv85g58FqANp2Yxa3z%2BBzdZNSveE3AiX08q55q%2BGva0RLhJbmHWR%2BLjjyWqkYD13Qwp9ab6MPPtwb0GOqUBbQ3cZJfOgwqn0U63stQrFhXGkVMDMde%2BpnVlZgTKPMNisoVpSHHERsJG5UWPLRTuSiSiAKzVo7TIGO4%2FGscohl2sZgd%2BvCzZfQsL67la3cws9UnvI8uL2RLrjeyvWyCHikWUUBFZ%2FGStOwRnXoRVJP8xwtnHDgivkgycqu42EOehofqnXYmLLubXdTIOJZNCTVe9o8u9WIzE2SuwFvT8y0paB1Py&X-Amz-Signature=49d379e780e3aff11d53aec1d4abb636b03ebfd489866c4cfb37fc44047d2c84&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDQYFGB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCzOFoR3sV6q2Wt8PIuxAeTGQoUUbEKiHqjW3L0T6jx%2BAIgXVKQfwLyvjMuk3nVceFlS73AZC3lzQSjdVRJA3mzJ60q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ5dJICpEQygrf%2BiASrcA4QPhuGtPy0vPQwikdVKk5XyvcEBWukcu%2BmlSHX%2B0ijTfRQ4n9%2Fybt3zJ8V9jgMTrCQXISewLZklA28wGd8BvQFHhc3WzYH9CyBuvhfZJH%2BGS5TcFuqK679Sca3fuXXaj1pgicH8dDboNAC9gErOw7evSE2O5nKN7nNKbonvBRy87u5%2BQBhV8DY8lwIfAo%2B2PYkXRg6jBv0KcjPq4rkXfCKNVZbYN1O3e3clCPM6k5zGCVmYRP9ckmQjw69cK6m%2FS%2BEFcImhtgmcO2D3flwt3q2z8kLZsh%2Bi73iSPPoByAfUOOntLzpbzePPHX6bsX0L%2FaVZIF8kYm01bIRVdRHe5hxJ6YuJ64NvielD2SEN5xiZkiBDLQv%2Flyv6QmVZGy5xAVOWlbIvybzHMc%2FaeVZSlck48zT565c1dUCz33dRfPjvSmj8u1gQh02E439sH%2FtDahTg1y2gex6ysHUJjbAquw%2FuKHboXm2e3OrIDOG%2Fd9fqPjGZZp4iY%2F2CrMoamt2Yx7wBO7oLYLf6Wdx0Nc1GBkPCeU2GDTEQvcJ3175wtEDoAwdc0J6lCRv85g58FqANp2Yxa3z%2BBzdZNSveE3AiX08q55q%2BGva0RLhJbmHWR%2BLjjyWqkYD13Qwp9ab6MPPtwb0GOqUBbQ3cZJfOgwqn0U63stQrFhXGkVMDMde%2BpnVlZgTKPMNisoVpSHHERsJG5UWPLRTuSiSiAKzVo7TIGO4%2FGscohl2sZgd%2BvCzZfQsL67la3cws9UnvI8uL2RLrjeyvWyCHikWUUBFZ%2FGStOwRnXoRVJP8xwtnHDgivkgycqu42EOehofqnXYmLLubXdTIOJZNCTVe9o8u9WIzE2SuwFvT8y0paB1Py&X-Amz-Signature=9ebdf03829a8675d76be818806631cbee72b6681bdb5b2494de1c78564470f94&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDQYFGB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCzOFoR3sV6q2Wt8PIuxAeTGQoUUbEKiHqjW3L0T6jx%2BAIgXVKQfwLyvjMuk3nVceFlS73AZC3lzQSjdVRJA3mzJ60q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ5dJICpEQygrf%2BiASrcA4QPhuGtPy0vPQwikdVKk5XyvcEBWukcu%2BmlSHX%2B0ijTfRQ4n9%2Fybt3zJ8V9jgMTrCQXISewLZklA28wGd8BvQFHhc3WzYH9CyBuvhfZJH%2BGS5TcFuqK679Sca3fuXXaj1pgicH8dDboNAC9gErOw7evSE2O5nKN7nNKbonvBRy87u5%2BQBhV8DY8lwIfAo%2B2PYkXRg6jBv0KcjPq4rkXfCKNVZbYN1O3e3clCPM6k5zGCVmYRP9ckmQjw69cK6m%2FS%2BEFcImhtgmcO2D3flwt3q2z8kLZsh%2Bi73iSPPoByAfUOOntLzpbzePPHX6bsX0L%2FaVZIF8kYm01bIRVdRHe5hxJ6YuJ64NvielD2SEN5xiZkiBDLQv%2Flyv6QmVZGy5xAVOWlbIvybzHMc%2FaeVZSlck48zT565c1dUCz33dRfPjvSmj8u1gQh02E439sH%2FtDahTg1y2gex6ysHUJjbAquw%2FuKHboXm2e3OrIDOG%2Fd9fqPjGZZp4iY%2F2CrMoamt2Yx7wBO7oLYLf6Wdx0Nc1GBkPCeU2GDTEQvcJ3175wtEDoAwdc0J6lCRv85g58FqANp2Yxa3z%2BBzdZNSveE3AiX08q55q%2BGva0RLhJbmHWR%2BLjjyWqkYD13Qwp9ab6MPPtwb0GOqUBbQ3cZJfOgwqn0U63stQrFhXGkVMDMde%2BpnVlZgTKPMNisoVpSHHERsJG5UWPLRTuSiSiAKzVo7TIGO4%2FGscohl2sZgd%2BvCzZfQsL67la3cws9UnvI8uL2RLrjeyvWyCHikWUUBFZ%2FGStOwRnXoRVJP8xwtnHDgivkgycqu42EOehofqnXYmLLubXdTIOJZNCTVe9o8u9WIzE2SuwFvT8y0paB1Py&X-Amz-Signature=853b581cf7a1b8ba78f5da34e2a70950ac7bfc961019c28ec809da41452ba9ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDQYFGB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCzOFoR3sV6q2Wt8PIuxAeTGQoUUbEKiHqjW3L0T6jx%2BAIgXVKQfwLyvjMuk3nVceFlS73AZC3lzQSjdVRJA3mzJ60q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ5dJICpEQygrf%2BiASrcA4QPhuGtPy0vPQwikdVKk5XyvcEBWukcu%2BmlSHX%2B0ijTfRQ4n9%2Fybt3zJ8V9jgMTrCQXISewLZklA28wGd8BvQFHhc3WzYH9CyBuvhfZJH%2BGS5TcFuqK679Sca3fuXXaj1pgicH8dDboNAC9gErOw7evSE2O5nKN7nNKbonvBRy87u5%2BQBhV8DY8lwIfAo%2B2PYkXRg6jBv0KcjPq4rkXfCKNVZbYN1O3e3clCPM6k5zGCVmYRP9ckmQjw69cK6m%2FS%2BEFcImhtgmcO2D3flwt3q2z8kLZsh%2Bi73iSPPoByAfUOOntLzpbzePPHX6bsX0L%2FaVZIF8kYm01bIRVdRHe5hxJ6YuJ64NvielD2SEN5xiZkiBDLQv%2Flyv6QmVZGy5xAVOWlbIvybzHMc%2FaeVZSlck48zT565c1dUCz33dRfPjvSmj8u1gQh02E439sH%2FtDahTg1y2gex6ysHUJjbAquw%2FuKHboXm2e3OrIDOG%2Fd9fqPjGZZp4iY%2F2CrMoamt2Yx7wBO7oLYLf6Wdx0Nc1GBkPCeU2GDTEQvcJ3175wtEDoAwdc0J6lCRv85g58FqANp2Yxa3z%2BBzdZNSveE3AiX08q55q%2BGva0RLhJbmHWR%2BLjjyWqkYD13Qwp9ab6MPPtwb0GOqUBbQ3cZJfOgwqn0U63stQrFhXGkVMDMde%2BpnVlZgTKPMNisoVpSHHERsJG5UWPLRTuSiSiAKzVo7TIGO4%2FGscohl2sZgd%2BvCzZfQsL67la3cws9UnvI8uL2RLrjeyvWyCHikWUUBFZ%2FGStOwRnXoRVJP8xwtnHDgivkgycqu42EOehofqnXYmLLubXdTIOJZNCTVe9o8u9WIzE2SuwFvT8y0paB1Py&X-Amz-Signature=bfdf01e0bff452ed8e6edd0eee28df5183de4f3fab7b4c8d52a2e51d421bb77b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
