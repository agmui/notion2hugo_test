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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFDCZRQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHmaW8c7iS0Jj2aX88kT4BBsJnC3abGFhU40e%2BJ0vuZZAiBDW78PQlu4JP5NHrwMWPQKdqvOTqOIeStLpEa64R1%2FXSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaLH2NOWBrP5jgOppKtwDSZL2y%2FMovN1QY1%2BlC8roKcjZNEA5M3IC4b6aHxnkmh6%2Fj6T6OomqJFVfWmd54M5ApUlFfDhwfw0QHTxvFpfC4kpqD3lu5u%2FQIhDNHHA2REZnnhzsdoNiq0uJrtzw5MzAUWivseVbNtZ9keS5GQ7XH7bHd0XvOWcXWSQDUVYckVYX8yyPK48SgwJwukXlcBWiZQlEvsPwXi4pDznVYJN1IJagm3QJuIJKTGQrPkVrtn3Hhxna9WJi7laQsvQLEDizo1nentZyoHE8Qcarns8KV2aEecvJ6lYF%2BMPSFPvHXfaA6p2vHQgmd8jJwmhRsIyIYr8XV4SMGD9y%2Bd1d6ng3N3mfAvtflAmA1THfWKmhA23snA1JVJj9pWWhgqYDPKu4ENEPwp2rUGDOAShfjLmqweU2XvzbkI9X26iqkdUAsHPARtu6syGGfger1CUFWgR5PG%2BKZvZ3OXJjXSX%2BlTixbYxPF8ot72KmvxgG1i2cc2Fi3Qw3v%2B07Jp%2FrNQ2jUpBWIkOMDrfMr0lF25ClA71j0t%2FtquFbeB2jEUHNqDMLP6wfgzuUXSNnY5pur0CPhzz%2F9QrUR2ks3FVdCxN4tBe4A3vhZiVNHGr0wuSGGc5rWDQfwYw02oKDPpQl%2BaIwh%2BP9vgY6pgGb9WfWVNCA3lW%2F5rxI6lVoAXxn%2FHAQqTQNjgsywe10RutXeT06WQOAqYmOULzs4AGBlSOVIP58EDq7lKDJOUM1CXeMB9dSnRRXjnhpxXCNHggplu8Zb0N1nXABxBzEkAoBjSTJe9EpuJ6zCl0obEO9IgJ5mGezdOq2aHZfWEIBq74HYdhHR3jzd13Vmdl2G1T1GIcas1CG3pCTFYyagGkGTLORHgf5&X-Amz-Signature=731be8e7949a97842429afd7a7431938a52455047fdde5ed285a56ec8de61051&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFDCZRQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHmaW8c7iS0Jj2aX88kT4BBsJnC3abGFhU40e%2BJ0vuZZAiBDW78PQlu4JP5NHrwMWPQKdqvOTqOIeStLpEa64R1%2FXSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaLH2NOWBrP5jgOppKtwDSZL2y%2FMovN1QY1%2BlC8roKcjZNEA5M3IC4b6aHxnkmh6%2Fj6T6OomqJFVfWmd54M5ApUlFfDhwfw0QHTxvFpfC4kpqD3lu5u%2FQIhDNHHA2REZnnhzsdoNiq0uJrtzw5MzAUWivseVbNtZ9keS5GQ7XH7bHd0XvOWcXWSQDUVYckVYX8yyPK48SgwJwukXlcBWiZQlEvsPwXi4pDznVYJN1IJagm3QJuIJKTGQrPkVrtn3Hhxna9WJi7laQsvQLEDizo1nentZyoHE8Qcarns8KV2aEecvJ6lYF%2BMPSFPvHXfaA6p2vHQgmd8jJwmhRsIyIYr8XV4SMGD9y%2Bd1d6ng3N3mfAvtflAmA1THfWKmhA23snA1JVJj9pWWhgqYDPKu4ENEPwp2rUGDOAShfjLmqweU2XvzbkI9X26iqkdUAsHPARtu6syGGfger1CUFWgR5PG%2BKZvZ3OXJjXSX%2BlTixbYxPF8ot72KmvxgG1i2cc2Fi3Qw3v%2B07Jp%2FrNQ2jUpBWIkOMDrfMr0lF25ClA71j0t%2FtquFbeB2jEUHNqDMLP6wfgzuUXSNnY5pur0CPhzz%2F9QrUR2ks3FVdCxN4tBe4A3vhZiVNHGr0wuSGGc5rWDQfwYw02oKDPpQl%2BaIwh%2BP9vgY6pgGb9WfWVNCA3lW%2F5rxI6lVoAXxn%2FHAQqTQNjgsywe10RutXeT06WQOAqYmOULzs4AGBlSOVIP58EDq7lKDJOUM1CXeMB9dSnRRXjnhpxXCNHggplu8Zb0N1nXABxBzEkAoBjSTJe9EpuJ6zCl0obEO9IgJ5mGezdOq2aHZfWEIBq74HYdhHR3jzd13Vmdl2G1T1GIcas1CG3pCTFYyagGkGTLORHgf5&X-Amz-Signature=0409fe2a7a54172b69954d3efabcca0a615b06873d920cfb3127d6428767d042&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFDCZRQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHmaW8c7iS0Jj2aX88kT4BBsJnC3abGFhU40e%2BJ0vuZZAiBDW78PQlu4JP5NHrwMWPQKdqvOTqOIeStLpEa64R1%2FXSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaLH2NOWBrP5jgOppKtwDSZL2y%2FMovN1QY1%2BlC8roKcjZNEA5M3IC4b6aHxnkmh6%2Fj6T6OomqJFVfWmd54M5ApUlFfDhwfw0QHTxvFpfC4kpqD3lu5u%2FQIhDNHHA2REZnnhzsdoNiq0uJrtzw5MzAUWivseVbNtZ9keS5GQ7XH7bHd0XvOWcXWSQDUVYckVYX8yyPK48SgwJwukXlcBWiZQlEvsPwXi4pDznVYJN1IJagm3QJuIJKTGQrPkVrtn3Hhxna9WJi7laQsvQLEDizo1nentZyoHE8Qcarns8KV2aEecvJ6lYF%2BMPSFPvHXfaA6p2vHQgmd8jJwmhRsIyIYr8XV4SMGD9y%2Bd1d6ng3N3mfAvtflAmA1THfWKmhA23snA1JVJj9pWWhgqYDPKu4ENEPwp2rUGDOAShfjLmqweU2XvzbkI9X26iqkdUAsHPARtu6syGGfger1CUFWgR5PG%2BKZvZ3OXJjXSX%2BlTixbYxPF8ot72KmvxgG1i2cc2Fi3Qw3v%2B07Jp%2FrNQ2jUpBWIkOMDrfMr0lF25ClA71j0t%2FtquFbeB2jEUHNqDMLP6wfgzuUXSNnY5pur0CPhzz%2F9QrUR2ks3FVdCxN4tBe4A3vhZiVNHGr0wuSGGc5rWDQfwYw02oKDPpQl%2BaIwh%2BP9vgY6pgGb9WfWVNCA3lW%2F5rxI6lVoAXxn%2FHAQqTQNjgsywe10RutXeT06WQOAqYmOULzs4AGBlSOVIP58EDq7lKDJOUM1CXeMB9dSnRRXjnhpxXCNHggplu8Zb0N1nXABxBzEkAoBjSTJe9EpuJ6zCl0obEO9IgJ5mGezdOq2aHZfWEIBq74HYdhHR3jzd13Vmdl2G1T1GIcas1CG3pCTFYyagGkGTLORHgf5&X-Amz-Signature=650f2da08d7f27c15dbae56f2f3da8df0bdd866d9dc58d6b9b8ffb5edc9dbe1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFDCZRQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHmaW8c7iS0Jj2aX88kT4BBsJnC3abGFhU40e%2BJ0vuZZAiBDW78PQlu4JP5NHrwMWPQKdqvOTqOIeStLpEa64R1%2FXSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaLH2NOWBrP5jgOppKtwDSZL2y%2FMovN1QY1%2BlC8roKcjZNEA5M3IC4b6aHxnkmh6%2Fj6T6OomqJFVfWmd54M5ApUlFfDhwfw0QHTxvFpfC4kpqD3lu5u%2FQIhDNHHA2REZnnhzsdoNiq0uJrtzw5MzAUWivseVbNtZ9keS5GQ7XH7bHd0XvOWcXWSQDUVYckVYX8yyPK48SgwJwukXlcBWiZQlEvsPwXi4pDznVYJN1IJagm3QJuIJKTGQrPkVrtn3Hhxna9WJi7laQsvQLEDizo1nentZyoHE8Qcarns8KV2aEecvJ6lYF%2BMPSFPvHXfaA6p2vHQgmd8jJwmhRsIyIYr8XV4SMGD9y%2Bd1d6ng3N3mfAvtflAmA1THfWKmhA23snA1JVJj9pWWhgqYDPKu4ENEPwp2rUGDOAShfjLmqweU2XvzbkI9X26iqkdUAsHPARtu6syGGfger1CUFWgR5PG%2BKZvZ3OXJjXSX%2BlTixbYxPF8ot72KmvxgG1i2cc2Fi3Qw3v%2B07Jp%2FrNQ2jUpBWIkOMDrfMr0lF25ClA71j0t%2FtquFbeB2jEUHNqDMLP6wfgzuUXSNnY5pur0CPhzz%2F9QrUR2ks3FVdCxN4tBe4A3vhZiVNHGr0wuSGGc5rWDQfwYw02oKDPpQl%2BaIwh%2BP9vgY6pgGb9WfWVNCA3lW%2F5rxI6lVoAXxn%2FHAQqTQNjgsywe10RutXeT06WQOAqYmOULzs4AGBlSOVIP58EDq7lKDJOUM1CXeMB9dSnRRXjnhpxXCNHggplu8Zb0N1nXABxBzEkAoBjSTJe9EpuJ6zCl0obEO9IgJ5mGezdOq2aHZfWEIBq74HYdhHR3jzd13Vmdl2G1T1GIcas1CG3pCTFYyagGkGTLORHgf5&X-Amz-Signature=67a11e201d2ec929b493bbbd055bd189eba023136afea435acc0c6cc53a78ece&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFDCZRQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHmaW8c7iS0Jj2aX88kT4BBsJnC3abGFhU40e%2BJ0vuZZAiBDW78PQlu4JP5NHrwMWPQKdqvOTqOIeStLpEa64R1%2FXSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaLH2NOWBrP5jgOppKtwDSZL2y%2FMovN1QY1%2BlC8roKcjZNEA5M3IC4b6aHxnkmh6%2Fj6T6OomqJFVfWmd54M5ApUlFfDhwfw0QHTxvFpfC4kpqD3lu5u%2FQIhDNHHA2REZnnhzsdoNiq0uJrtzw5MzAUWivseVbNtZ9keS5GQ7XH7bHd0XvOWcXWSQDUVYckVYX8yyPK48SgwJwukXlcBWiZQlEvsPwXi4pDznVYJN1IJagm3QJuIJKTGQrPkVrtn3Hhxna9WJi7laQsvQLEDizo1nentZyoHE8Qcarns8KV2aEecvJ6lYF%2BMPSFPvHXfaA6p2vHQgmd8jJwmhRsIyIYr8XV4SMGD9y%2Bd1d6ng3N3mfAvtflAmA1THfWKmhA23snA1JVJj9pWWhgqYDPKu4ENEPwp2rUGDOAShfjLmqweU2XvzbkI9X26iqkdUAsHPARtu6syGGfger1CUFWgR5PG%2BKZvZ3OXJjXSX%2BlTixbYxPF8ot72KmvxgG1i2cc2Fi3Qw3v%2B07Jp%2FrNQ2jUpBWIkOMDrfMr0lF25ClA71j0t%2FtquFbeB2jEUHNqDMLP6wfgzuUXSNnY5pur0CPhzz%2F9QrUR2ks3FVdCxN4tBe4A3vhZiVNHGr0wuSGGc5rWDQfwYw02oKDPpQl%2BaIwh%2BP9vgY6pgGb9WfWVNCA3lW%2F5rxI6lVoAXxn%2FHAQqTQNjgsywe10RutXeT06WQOAqYmOULzs4AGBlSOVIP58EDq7lKDJOUM1CXeMB9dSnRRXjnhpxXCNHggplu8Zb0N1nXABxBzEkAoBjSTJe9EpuJ6zCl0obEO9IgJ5mGezdOq2aHZfWEIBq74HYdhHR3jzd13Vmdl2G1T1GIcas1CG3pCTFYyagGkGTLORHgf5&X-Amz-Signature=f9a645d9621fbb9cfd3d19f84c75ae40f6cbe2cfba81e32e028aec97bf397229&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
