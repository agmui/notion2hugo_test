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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKENU7CO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC2aTU7bhO3IGY%2F11pKekr%2F5kOveAJLOOvk8i6Qml3bQQIgP8%2FOi0uHUDXbw1X1OXvnw1i6dZ69ibfhbLSuWtQL2RkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfh1NMfXFs%2FTe2lYyrcAwOL19x9k289tVGe7RuJCapfKuqKLukRJrsWNZxXOU78%2BM5RIbfiAcxa9rE5768Dq3jiPgi4lCooiKHO%2BZYcXcC%2Fo2usaJxB6YDPKEuU%2FGcZNnF9svR831COStkpfJNtXDFUULpCwty1T9nrA0WUrvyD%2BIrHhx6OXP%2BMP7fIkTEW%2Fz0%2BWNMfYxh9V06wGMex5jQy1Y8m8ugUa40P%2Fo5YKGuwggikCpM%2F1ad2gWenR6p7tzGktlBO44sENqESn5q1o8vT4TEhDkklRQ5y8GFYgpp27K5Vs840LPhlkGzJDf06DrAnmJGRQokn5l2ga0LtS8NsvNR%2Bd0HoCYx2UZLznk3ieW6%2FRRFW6HJXtzjijlNScIoSNlNnSFLu49q4mlP8WwLIMwQoo3auoPcUhHRaNSYWnSP2eM7UmhIVDdP6Y7380riuy%2BNQmpHhypt7MzwmPx1Wg4YRjsBVNIPT%2FyXJErUisOYHz9hvXe%2BTJoCi21BW0f5yPgEYT71avJxgKy75u5BKPhJJIPh0PPx7WWr4AlRjEvpMp36ClLyWh%2FjhJ7bhdUrWd647ue8JC1tc07mqrAt1QhfwBC5t8ZkR2eKcx9PKWAHfJLWRT5NVHL8Flh8LtyyTy1Il8JAFIcMvMJydiMEGOqUBFVw5pTlzSMyt8%2Brd1HkVansmjp%2Fi%2Fxe%2BdySazogurapLofqm7DJWw96H1RZHEK77QmguLHsOSmi3y5KPlpRUtUhUC5J%2BqZ4wukIcYb%2B23U66tgGNrnIjwWyZCO2RYpgqhFgxTyE2KiYMhC0HFkkiCBY6ObivdXxKfIUUi%2BZw1%2BhaG1MzH61aZo7Yb9YT5Npm0tijxOjFAc7lx4N8r0VeUJeLPu5b&X-Amz-Signature=f6b3c4efea13fe02f64541f7253677abc34b5e865c4a69c98576afddb506ea3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKENU7CO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC2aTU7bhO3IGY%2F11pKekr%2F5kOveAJLOOvk8i6Qml3bQQIgP8%2FOi0uHUDXbw1X1OXvnw1i6dZ69ibfhbLSuWtQL2RkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfh1NMfXFs%2FTe2lYyrcAwOL19x9k289tVGe7RuJCapfKuqKLukRJrsWNZxXOU78%2BM5RIbfiAcxa9rE5768Dq3jiPgi4lCooiKHO%2BZYcXcC%2Fo2usaJxB6YDPKEuU%2FGcZNnF9svR831COStkpfJNtXDFUULpCwty1T9nrA0WUrvyD%2BIrHhx6OXP%2BMP7fIkTEW%2Fz0%2BWNMfYxh9V06wGMex5jQy1Y8m8ugUa40P%2Fo5YKGuwggikCpM%2F1ad2gWenR6p7tzGktlBO44sENqESn5q1o8vT4TEhDkklRQ5y8GFYgpp27K5Vs840LPhlkGzJDf06DrAnmJGRQokn5l2ga0LtS8NsvNR%2Bd0HoCYx2UZLznk3ieW6%2FRRFW6HJXtzjijlNScIoSNlNnSFLu49q4mlP8WwLIMwQoo3auoPcUhHRaNSYWnSP2eM7UmhIVDdP6Y7380riuy%2BNQmpHhypt7MzwmPx1Wg4YRjsBVNIPT%2FyXJErUisOYHz9hvXe%2BTJoCi21BW0f5yPgEYT71avJxgKy75u5BKPhJJIPh0PPx7WWr4AlRjEvpMp36ClLyWh%2FjhJ7bhdUrWd647ue8JC1tc07mqrAt1QhfwBC5t8ZkR2eKcx9PKWAHfJLWRT5NVHL8Flh8LtyyTy1Il8JAFIcMvMJydiMEGOqUBFVw5pTlzSMyt8%2Brd1HkVansmjp%2Fi%2Fxe%2BdySazogurapLofqm7DJWw96H1RZHEK77QmguLHsOSmi3y5KPlpRUtUhUC5J%2BqZ4wukIcYb%2B23U66tgGNrnIjwWyZCO2RYpgqhFgxTyE2KiYMhC0HFkkiCBY6ObivdXxKfIUUi%2BZw1%2BhaG1MzH61aZo7Yb9YT5Npm0tijxOjFAc7lx4N8r0VeUJeLPu5b&X-Amz-Signature=470c2eddca912fcafa90ebc32141a9d644394d84072abc6841fa12e9c326e2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKENU7CO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC2aTU7bhO3IGY%2F11pKekr%2F5kOveAJLOOvk8i6Qml3bQQIgP8%2FOi0uHUDXbw1X1OXvnw1i6dZ69ibfhbLSuWtQL2RkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfh1NMfXFs%2FTe2lYyrcAwOL19x9k289tVGe7RuJCapfKuqKLukRJrsWNZxXOU78%2BM5RIbfiAcxa9rE5768Dq3jiPgi4lCooiKHO%2BZYcXcC%2Fo2usaJxB6YDPKEuU%2FGcZNnF9svR831COStkpfJNtXDFUULpCwty1T9nrA0WUrvyD%2BIrHhx6OXP%2BMP7fIkTEW%2Fz0%2BWNMfYxh9V06wGMex5jQy1Y8m8ugUa40P%2Fo5YKGuwggikCpM%2F1ad2gWenR6p7tzGktlBO44sENqESn5q1o8vT4TEhDkklRQ5y8GFYgpp27K5Vs840LPhlkGzJDf06DrAnmJGRQokn5l2ga0LtS8NsvNR%2Bd0HoCYx2UZLznk3ieW6%2FRRFW6HJXtzjijlNScIoSNlNnSFLu49q4mlP8WwLIMwQoo3auoPcUhHRaNSYWnSP2eM7UmhIVDdP6Y7380riuy%2BNQmpHhypt7MzwmPx1Wg4YRjsBVNIPT%2FyXJErUisOYHz9hvXe%2BTJoCi21BW0f5yPgEYT71avJxgKy75u5BKPhJJIPh0PPx7WWr4AlRjEvpMp36ClLyWh%2FjhJ7bhdUrWd647ue8JC1tc07mqrAt1QhfwBC5t8ZkR2eKcx9PKWAHfJLWRT5NVHL8Flh8LtyyTy1Il8JAFIcMvMJydiMEGOqUBFVw5pTlzSMyt8%2Brd1HkVansmjp%2Fi%2Fxe%2BdySazogurapLofqm7DJWw96H1RZHEK77QmguLHsOSmi3y5KPlpRUtUhUC5J%2BqZ4wukIcYb%2B23U66tgGNrnIjwWyZCO2RYpgqhFgxTyE2KiYMhC0HFkkiCBY6ObivdXxKfIUUi%2BZw1%2BhaG1MzH61aZo7Yb9YT5Npm0tijxOjFAc7lx4N8r0VeUJeLPu5b&X-Amz-Signature=c4cc096eac8686853579d3576854a571e8bc9a26a0bc666446d856f4b301ce8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKENU7CO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC2aTU7bhO3IGY%2F11pKekr%2F5kOveAJLOOvk8i6Qml3bQQIgP8%2FOi0uHUDXbw1X1OXvnw1i6dZ69ibfhbLSuWtQL2RkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfh1NMfXFs%2FTe2lYyrcAwOL19x9k289tVGe7RuJCapfKuqKLukRJrsWNZxXOU78%2BM5RIbfiAcxa9rE5768Dq3jiPgi4lCooiKHO%2BZYcXcC%2Fo2usaJxB6YDPKEuU%2FGcZNnF9svR831COStkpfJNtXDFUULpCwty1T9nrA0WUrvyD%2BIrHhx6OXP%2BMP7fIkTEW%2Fz0%2BWNMfYxh9V06wGMex5jQy1Y8m8ugUa40P%2Fo5YKGuwggikCpM%2F1ad2gWenR6p7tzGktlBO44sENqESn5q1o8vT4TEhDkklRQ5y8GFYgpp27K5Vs840LPhlkGzJDf06DrAnmJGRQokn5l2ga0LtS8NsvNR%2Bd0HoCYx2UZLznk3ieW6%2FRRFW6HJXtzjijlNScIoSNlNnSFLu49q4mlP8WwLIMwQoo3auoPcUhHRaNSYWnSP2eM7UmhIVDdP6Y7380riuy%2BNQmpHhypt7MzwmPx1Wg4YRjsBVNIPT%2FyXJErUisOYHz9hvXe%2BTJoCi21BW0f5yPgEYT71avJxgKy75u5BKPhJJIPh0PPx7WWr4AlRjEvpMp36ClLyWh%2FjhJ7bhdUrWd647ue8JC1tc07mqrAt1QhfwBC5t8ZkR2eKcx9PKWAHfJLWRT5NVHL8Flh8LtyyTy1Il8JAFIcMvMJydiMEGOqUBFVw5pTlzSMyt8%2Brd1HkVansmjp%2Fi%2Fxe%2BdySazogurapLofqm7DJWw96H1RZHEK77QmguLHsOSmi3y5KPlpRUtUhUC5J%2BqZ4wukIcYb%2B23U66tgGNrnIjwWyZCO2RYpgqhFgxTyE2KiYMhC0HFkkiCBY6ObivdXxKfIUUi%2BZw1%2BhaG1MzH61aZo7Yb9YT5Npm0tijxOjFAc7lx4N8r0VeUJeLPu5b&X-Amz-Signature=3962e44c4197e25fe7d161f4ba494b76d6a88a2664fbba97f229ca2d524ff974&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKENU7CO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC2aTU7bhO3IGY%2F11pKekr%2F5kOveAJLOOvk8i6Qml3bQQIgP8%2FOi0uHUDXbw1X1OXvnw1i6dZ69ibfhbLSuWtQL2RkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfh1NMfXFs%2FTe2lYyrcAwOL19x9k289tVGe7RuJCapfKuqKLukRJrsWNZxXOU78%2BM5RIbfiAcxa9rE5768Dq3jiPgi4lCooiKHO%2BZYcXcC%2Fo2usaJxB6YDPKEuU%2FGcZNnF9svR831COStkpfJNtXDFUULpCwty1T9nrA0WUrvyD%2BIrHhx6OXP%2BMP7fIkTEW%2Fz0%2BWNMfYxh9V06wGMex5jQy1Y8m8ugUa40P%2Fo5YKGuwggikCpM%2F1ad2gWenR6p7tzGktlBO44sENqESn5q1o8vT4TEhDkklRQ5y8GFYgpp27K5Vs840LPhlkGzJDf06DrAnmJGRQokn5l2ga0LtS8NsvNR%2Bd0HoCYx2UZLznk3ieW6%2FRRFW6HJXtzjijlNScIoSNlNnSFLu49q4mlP8WwLIMwQoo3auoPcUhHRaNSYWnSP2eM7UmhIVDdP6Y7380riuy%2BNQmpHhypt7MzwmPx1Wg4YRjsBVNIPT%2FyXJErUisOYHz9hvXe%2BTJoCi21BW0f5yPgEYT71avJxgKy75u5BKPhJJIPh0PPx7WWr4AlRjEvpMp36ClLyWh%2FjhJ7bhdUrWd647ue8JC1tc07mqrAt1QhfwBC5t8ZkR2eKcx9PKWAHfJLWRT5NVHL8Flh8LtyyTy1Il8JAFIcMvMJydiMEGOqUBFVw5pTlzSMyt8%2Brd1HkVansmjp%2Fi%2Fxe%2BdySazogurapLofqm7DJWw96H1RZHEK77QmguLHsOSmi3y5KPlpRUtUhUC5J%2BqZ4wukIcYb%2B23U66tgGNrnIjwWyZCO2RYpgqhFgxTyE2KiYMhC0HFkkiCBY6ObivdXxKfIUUi%2BZw1%2BhaG1MzH61aZo7Yb9YT5Npm0tijxOjFAc7lx4N8r0VeUJeLPu5b&X-Amz-Signature=3199fd3a12cfe46e4dc6facd217d0fdd02b7d3014dd500d33e25687ffefb1c14&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
