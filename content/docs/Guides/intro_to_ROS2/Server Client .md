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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RNZTAS2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo6GjsbqpFM%2BJcfSmqaNlGeeAyw7S%2BuFdaNXUkCqMz%2BAiEAqLrHO6LAy%2BIW76jvK7MRsgIxHn%2BPd1P6hDqwdzdMC9kq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMhlkwAQpjQLkxKq8CrcA%2FUarfxQ%2Bg%2FEgHMpC0Gi12XDaZvoncoILc8GvD%2BvLEAIqLvEvD%2FcdvDHxOZuG%2Bp%2FJVDXIYYz277rdiUkPQ4U7rO8tYpitkdlX20H4%2FaweWs4RC8FAoQJOYPsWWAzNX1rOZUEBVkLrR7Zxazd8%2FJ53Xu%2Fb6MVHrduNwJbYu3EBVzCQMcvsv%2FVOHtnlIjWPg28hQ%2BGAY55667JEgfHGEUwMGmybtkxsdlILKSCLWkWjSbF1UNj%2B8WQ8zOouZn9W1s%2B0ZT0O3%2BqiLfrjWpuYxJ50hknzU9ggkeQFMYK%2Bcvx%2B0NY%2FI4xKly0csboLuffn450Gy%2BVNG7C7Nqjg92vXP%2BHAL%2FYY8kzqgl7xy5SzLWwTBXWe2e8nuQ5XK49Zi%2F29pyMUJxBBWTStn9nfNJBI4ygfEcxEZXGItJY3Td0Gega9NFYCjw1Jr7rJaAiX1UK9AUyspTezEW71RlDUPB3Ub3w%2BLLfmDGMc4sWT3hGnMSVJTFUBS6KeMEBLzOiGd8yze8wXQ0XKBDjUJ389Jx%2Bz3Q6%2B8kbgtHuPRlN9ufVZ7t8HL%2Fnxs90uh545T2pVHDvCYVEAXn86SziAZHlHasnlAEWzGQoV%2BeliFdN68WD6XJ7%2BD7zuTQjaqXBD1WsfiA4MNbAzsMGOqUBWnAt7%2BIBEtQDwKWad7tQWyWn0Sr2YoZ3iuX1VfO%2Fd%2FWo6H0FxYEtTA0Vd4jHNrsw7%2FmQoGYKUJvJ2mEmB%2FQ%2FXH%2F0uDEzWnbj5Vysb6TENYRbXjNzvfMjBz1vlCj4OdqgoU9IQx32ks6W6EOt1ZvJMzCGZjOzYYxGW41tnzBjp8YkN8lKuvDcRXvjMkO5nZil0lcFyiYKGuJCIgBMouwQD8RUkyZB&X-Amz-Signature=a4240c34b44f1d9811a8c99cdba8b4a5d39e77dc11de1e7e752aa3ccfd03059f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RNZTAS2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo6GjsbqpFM%2BJcfSmqaNlGeeAyw7S%2BuFdaNXUkCqMz%2BAiEAqLrHO6LAy%2BIW76jvK7MRsgIxHn%2BPd1P6hDqwdzdMC9kq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMhlkwAQpjQLkxKq8CrcA%2FUarfxQ%2Bg%2FEgHMpC0Gi12XDaZvoncoILc8GvD%2BvLEAIqLvEvD%2FcdvDHxOZuG%2Bp%2FJVDXIYYz277rdiUkPQ4U7rO8tYpitkdlX20H4%2FaweWs4RC8FAoQJOYPsWWAzNX1rOZUEBVkLrR7Zxazd8%2FJ53Xu%2Fb6MVHrduNwJbYu3EBVzCQMcvsv%2FVOHtnlIjWPg28hQ%2BGAY55667JEgfHGEUwMGmybtkxsdlILKSCLWkWjSbF1UNj%2B8WQ8zOouZn9W1s%2B0ZT0O3%2BqiLfrjWpuYxJ50hknzU9ggkeQFMYK%2Bcvx%2B0NY%2FI4xKly0csboLuffn450Gy%2BVNG7C7Nqjg92vXP%2BHAL%2FYY8kzqgl7xy5SzLWwTBXWe2e8nuQ5XK49Zi%2F29pyMUJxBBWTStn9nfNJBI4ygfEcxEZXGItJY3Td0Gega9NFYCjw1Jr7rJaAiX1UK9AUyspTezEW71RlDUPB3Ub3w%2BLLfmDGMc4sWT3hGnMSVJTFUBS6KeMEBLzOiGd8yze8wXQ0XKBDjUJ389Jx%2Bz3Q6%2B8kbgtHuPRlN9ufVZ7t8HL%2Fnxs90uh545T2pVHDvCYVEAXn86SziAZHlHasnlAEWzGQoV%2BeliFdN68WD6XJ7%2BD7zuTQjaqXBD1WsfiA4MNbAzsMGOqUBWnAt7%2BIBEtQDwKWad7tQWyWn0Sr2YoZ3iuX1VfO%2Fd%2FWo6H0FxYEtTA0Vd4jHNrsw7%2FmQoGYKUJvJ2mEmB%2FQ%2FXH%2F0uDEzWnbj5Vysb6TENYRbXjNzvfMjBz1vlCj4OdqgoU9IQx32ks6W6EOt1ZvJMzCGZjOzYYxGW41tnzBjp8YkN8lKuvDcRXvjMkO5nZil0lcFyiYKGuJCIgBMouwQD8RUkyZB&X-Amz-Signature=6d815e4bcf27ebd66593dec3a18238f1831e910243cf36fb787d8d3c151c12a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RNZTAS2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo6GjsbqpFM%2BJcfSmqaNlGeeAyw7S%2BuFdaNXUkCqMz%2BAiEAqLrHO6LAy%2BIW76jvK7MRsgIxHn%2BPd1P6hDqwdzdMC9kq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMhlkwAQpjQLkxKq8CrcA%2FUarfxQ%2Bg%2FEgHMpC0Gi12XDaZvoncoILc8GvD%2BvLEAIqLvEvD%2FcdvDHxOZuG%2Bp%2FJVDXIYYz277rdiUkPQ4U7rO8tYpitkdlX20H4%2FaweWs4RC8FAoQJOYPsWWAzNX1rOZUEBVkLrR7Zxazd8%2FJ53Xu%2Fb6MVHrduNwJbYu3EBVzCQMcvsv%2FVOHtnlIjWPg28hQ%2BGAY55667JEgfHGEUwMGmybtkxsdlILKSCLWkWjSbF1UNj%2B8WQ8zOouZn9W1s%2B0ZT0O3%2BqiLfrjWpuYxJ50hknzU9ggkeQFMYK%2Bcvx%2B0NY%2FI4xKly0csboLuffn450Gy%2BVNG7C7Nqjg92vXP%2BHAL%2FYY8kzqgl7xy5SzLWwTBXWe2e8nuQ5XK49Zi%2F29pyMUJxBBWTStn9nfNJBI4ygfEcxEZXGItJY3Td0Gega9NFYCjw1Jr7rJaAiX1UK9AUyspTezEW71RlDUPB3Ub3w%2BLLfmDGMc4sWT3hGnMSVJTFUBS6KeMEBLzOiGd8yze8wXQ0XKBDjUJ389Jx%2Bz3Q6%2B8kbgtHuPRlN9ufVZ7t8HL%2Fnxs90uh545T2pVHDvCYVEAXn86SziAZHlHasnlAEWzGQoV%2BeliFdN68WD6XJ7%2BD7zuTQjaqXBD1WsfiA4MNbAzsMGOqUBWnAt7%2BIBEtQDwKWad7tQWyWn0Sr2YoZ3iuX1VfO%2Fd%2FWo6H0FxYEtTA0Vd4jHNrsw7%2FmQoGYKUJvJ2mEmB%2FQ%2FXH%2F0uDEzWnbj5Vysb6TENYRbXjNzvfMjBz1vlCj4OdqgoU9IQx32ks6W6EOt1ZvJMzCGZjOzYYxGW41tnzBjp8YkN8lKuvDcRXvjMkO5nZil0lcFyiYKGuJCIgBMouwQD8RUkyZB&X-Amz-Signature=06ff18852ea615ca5b026d9170fc9a7b97e329629d909eff46782798b4381b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RNZTAS2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo6GjsbqpFM%2BJcfSmqaNlGeeAyw7S%2BuFdaNXUkCqMz%2BAiEAqLrHO6LAy%2BIW76jvK7MRsgIxHn%2BPd1P6hDqwdzdMC9kq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMhlkwAQpjQLkxKq8CrcA%2FUarfxQ%2Bg%2FEgHMpC0Gi12XDaZvoncoILc8GvD%2BvLEAIqLvEvD%2FcdvDHxOZuG%2Bp%2FJVDXIYYz277rdiUkPQ4U7rO8tYpitkdlX20H4%2FaweWs4RC8FAoQJOYPsWWAzNX1rOZUEBVkLrR7Zxazd8%2FJ53Xu%2Fb6MVHrduNwJbYu3EBVzCQMcvsv%2FVOHtnlIjWPg28hQ%2BGAY55667JEgfHGEUwMGmybtkxsdlILKSCLWkWjSbF1UNj%2B8WQ8zOouZn9W1s%2B0ZT0O3%2BqiLfrjWpuYxJ50hknzU9ggkeQFMYK%2Bcvx%2B0NY%2FI4xKly0csboLuffn450Gy%2BVNG7C7Nqjg92vXP%2BHAL%2FYY8kzqgl7xy5SzLWwTBXWe2e8nuQ5XK49Zi%2F29pyMUJxBBWTStn9nfNJBI4ygfEcxEZXGItJY3Td0Gega9NFYCjw1Jr7rJaAiX1UK9AUyspTezEW71RlDUPB3Ub3w%2BLLfmDGMc4sWT3hGnMSVJTFUBS6KeMEBLzOiGd8yze8wXQ0XKBDjUJ389Jx%2Bz3Q6%2B8kbgtHuPRlN9ufVZ7t8HL%2Fnxs90uh545T2pVHDvCYVEAXn86SziAZHlHasnlAEWzGQoV%2BeliFdN68WD6XJ7%2BD7zuTQjaqXBD1WsfiA4MNbAzsMGOqUBWnAt7%2BIBEtQDwKWad7tQWyWn0Sr2YoZ3iuX1VfO%2Fd%2FWo6H0FxYEtTA0Vd4jHNrsw7%2FmQoGYKUJvJ2mEmB%2FQ%2FXH%2F0uDEzWnbj5Vysb6TENYRbXjNzvfMjBz1vlCj4OdqgoU9IQx32ks6W6EOt1ZvJMzCGZjOzYYxGW41tnzBjp8YkN8lKuvDcRXvjMkO5nZil0lcFyiYKGuJCIgBMouwQD8RUkyZB&X-Amz-Signature=43b1bc9af15d90c6337ffb42432bf49a1c4f8b834fe205df1f4359c74610a8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RNZTAS2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo6GjsbqpFM%2BJcfSmqaNlGeeAyw7S%2BuFdaNXUkCqMz%2BAiEAqLrHO6LAy%2BIW76jvK7MRsgIxHn%2BPd1P6hDqwdzdMC9kq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMhlkwAQpjQLkxKq8CrcA%2FUarfxQ%2Bg%2FEgHMpC0Gi12XDaZvoncoILc8GvD%2BvLEAIqLvEvD%2FcdvDHxOZuG%2Bp%2FJVDXIYYz277rdiUkPQ4U7rO8tYpitkdlX20H4%2FaweWs4RC8FAoQJOYPsWWAzNX1rOZUEBVkLrR7Zxazd8%2FJ53Xu%2Fb6MVHrduNwJbYu3EBVzCQMcvsv%2FVOHtnlIjWPg28hQ%2BGAY55667JEgfHGEUwMGmybtkxsdlILKSCLWkWjSbF1UNj%2B8WQ8zOouZn9W1s%2B0ZT0O3%2BqiLfrjWpuYxJ50hknzU9ggkeQFMYK%2Bcvx%2B0NY%2FI4xKly0csboLuffn450Gy%2BVNG7C7Nqjg92vXP%2BHAL%2FYY8kzqgl7xy5SzLWwTBXWe2e8nuQ5XK49Zi%2F29pyMUJxBBWTStn9nfNJBI4ygfEcxEZXGItJY3Td0Gega9NFYCjw1Jr7rJaAiX1UK9AUyspTezEW71RlDUPB3Ub3w%2BLLfmDGMc4sWT3hGnMSVJTFUBS6KeMEBLzOiGd8yze8wXQ0XKBDjUJ389Jx%2Bz3Q6%2B8kbgtHuPRlN9ufVZ7t8HL%2Fnxs90uh545T2pVHDvCYVEAXn86SziAZHlHasnlAEWzGQoV%2BeliFdN68WD6XJ7%2BD7zuTQjaqXBD1WsfiA4MNbAzsMGOqUBWnAt7%2BIBEtQDwKWad7tQWyWn0Sr2YoZ3iuX1VfO%2Fd%2FWo6H0FxYEtTA0Vd4jHNrsw7%2FmQoGYKUJvJ2mEmB%2FQ%2FXH%2F0uDEzWnbj5Vysb6TENYRbXjNzvfMjBz1vlCj4OdqgoU9IQx32ks6W6EOt1ZvJMzCGZjOzYYxGW41tnzBjp8YkN8lKuvDcRXvjMkO5nZil0lcFyiYKGuJCIgBMouwQD8RUkyZB&X-Amz-Signature=f442b0d171ab3734c6890a75cc3cf1f0e23dce72a21abc16e64360f0d161434c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
