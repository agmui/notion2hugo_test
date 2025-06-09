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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RG2KOC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsP%2FBwaDQRWY5LKE7OBOlHjr69VFk%2BbmD%2BP3TilSFIUAiBwoQIKdN2dTOP6iFDE%2BBk0nYALjy4OGH1TJLIV%2FXaNnCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyI9WPsOaq0c%2FtKhPKtwDBhm1ONDea01z1D%2BwOm31lyDemxhtkhrm2dwBj8tjQ2YQoacV0NGX8KXwDqQ7eTla8MVAnPX6nob1t%2B3VUQIewn4E2XOnMKsGvKUCNps3sUruEs%2BVRbGGk5P7z%2F%2FDhQ62NbRmw47BL5K%2BkbGQV22JD72oxx6MqfjcXrA%2FQcqevvf%2FH9kUJzdaUNNKMuFQ2FXv8UmWDYpW%2BNFzESypzSKPkgB5R5Zw519uQO0tsw%2BXD9kQ25O3AKMaZqiXfe%2F5mfOIPqU7ji%2FPiz6YS%2BoJNijSsrmjeuB9fnc91Hz6rRiNHROZCXKZyCiYR6kEEyZn7odfDp74k5my5iSZcBltY%2BEFjQWMC93fq%2BGHc63u0wJ3BvRN5ZIIT%2BHCcuxRK7BXPYYPp67kDqEROzARbTkvrikV4YNjT4LgJsgbH5Xy5ndDjdPZ0Ss7n4aWHypRjnAAfrcp5Q486LcRqUda1UiDJDFSZNlqULng3%2Fk3JMS8iOGm%2FRouZ8t98XXl79fJUYr315buxfYcjgg%2FLMPShczdprrSHep3%2BDbYPPdwBjRZlroK7IWQyNdYKRRqajSW54XqS7DpEGD7SVNkj2lOgi8bxZyU1PJ%2BPHXmJm6%2Fi3nbZyqPJCIrUd2kGH7fuks7X%2FYw8tGbwgY6pgFLQR9r%2F2pdUR0ufFjnwwUML70rJWFy8meIIZeJNqw00%2BWt6D15UYTbkIOKyMH8cdOrMvo758hEf3nEgGFC0JkJ3p32FFygKlOppW%2Bergiu%2FmvqOt1D3urOoYeaGfhk8YgCVT0bd23nlA%2Bd45psXom0Kb3jbYNL9fLy16IcDIXxMLlop9iZlo4rRli2eT2NAKrIYyPUIunGsClulwWYrQA6w5%2BOLWam&X-Amz-Signature=2cb302c7078f8d0f47b1ec5462d77f053c0103cb0f5aaf52a1be82eeb8556f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RG2KOC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsP%2FBwaDQRWY5LKE7OBOlHjr69VFk%2BbmD%2BP3TilSFIUAiBwoQIKdN2dTOP6iFDE%2BBk0nYALjy4OGH1TJLIV%2FXaNnCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyI9WPsOaq0c%2FtKhPKtwDBhm1ONDea01z1D%2BwOm31lyDemxhtkhrm2dwBj8tjQ2YQoacV0NGX8KXwDqQ7eTla8MVAnPX6nob1t%2B3VUQIewn4E2XOnMKsGvKUCNps3sUruEs%2BVRbGGk5P7z%2F%2FDhQ62NbRmw47BL5K%2BkbGQV22JD72oxx6MqfjcXrA%2FQcqevvf%2FH9kUJzdaUNNKMuFQ2FXv8UmWDYpW%2BNFzESypzSKPkgB5R5Zw519uQO0tsw%2BXD9kQ25O3AKMaZqiXfe%2F5mfOIPqU7ji%2FPiz6YS%2BoJNijSsrmjeuB9fnc91Hz6rRiNHROZCXKZyCiYR6kEEyZn7odfDp74k5my5iSZcBltY%2BEFjQWMC93fq%2BGHc63u0wJ3BvRN5ZIIT%2BHCcuxRK7BXPYYPp67kDqEROzARbTkvrikV4YNjT4LgJsgbH5Xy5ndDjdPZ0Ss7n4aWHypRjnAAfrcp5Q486LcRqUda1UiDJDFSZNlqULng3%2Fk3JMS8iOGm%2FRouZ8t98XXl79fJUYr315buxfYcjgg%2FLMPShczdprrSHep3%2BDbYPPdwBjRZlroK7IWQyNdYKRRqajSW54XqS7DpEGD7SVNkj2lOgi8bxZyU1PJ%2BPHXmJm6%2Fi3nbZyqPJCIrUd2kGH7fuks7X%2FYw8tGbwgY6pgFLQR9r%2F2pdUR0ufFjnwwUML70rJWFy8meIIZeJNqw00%2BWt6D15UYTbkIOKyMH8cdOrMvo758hEf3nEgGFC0JkJ3p32FFygKlOppW%2Bergiu%2FmvqOt1D3urOoYeaGfhk8YgCVT0bd23nlA%2Bd45psXom0Kb3jbYNL9fLy16IcDIXxMLlop9iZlo4rRli2eT2NAKrIYyPUIunGsClulwWYrQA6w5%2BOLWam&X-Amz-Signature=039707f983f2a6f930a2d09dab86440e925491a09c892e1c27203a22080039f3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RG2KOC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsP%2FBwaDQRWY5LKE7OBOlHjr69VFk%2BbmD%2BP3TilSFIUAiBwoQIKdN2dTOP6iFDE%2BBk0nYALjy4OGH1TJLIV%2FXaNnCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyI9WPsOaq0c%2FtKhPKtwDBhm1ONDea01z1D%2BwOm31lyDemxhtkhrm2dwBj8tjQ2YQoacV0NGX8KXwDqQ7eTla8MVAnPX6nob1t%2B3VUQIewn4E2XOnMKsGvKUCNps3sUruEs%2BVRbGGk5P7z%2F%2FDhQ62NbRmw47BL5K%2BkbGQV22JD72oxx6MqfjcXrA%2FQcqevvf%2FH9kUJzdaUNNKMuFQ2FXv8UmWDYpW%2BNFzESypzSKPkgB5R5Zw519uQO0tsw%2BXD9kQ25O3AKMaZqiXfe%2F5mfOIPqU7ji%2FPiz6YS%2BoJNijSsrmjeuB9fnc91Hz6rRiNHROZCXKZyCiYR6kEEyZn7odfDp74k5my5iSZcBltY%2BEFjQWMC93fq%2BGHc63u0wJ3BvRN5ZIIT%2BHCcuxRK7BXPYYPp67kDqEROzARbTkvrikV4YNjT4LgJsgbH5Xy5ndDjdPZ0Ss7n4aWHypRjnAAfrcp5Q486LcRqUda1UiDJDFSZNlqULng3%2Fk3JMS8iOGm%2FRouZ8t98XXl79fJUYr315buxfYcjgg%2FLMPShczdprrSHep3%2BDbYPPdwBjRZlroK7IWQyNdYKRRqajSW54XqS7DpEGD7SVNkj2lOgi8bxZyU1PJ%2BPHXmJm6%2Fi3nbZyqPJCIrUd2kGH7fuks7X%2FYw8tGbwgY6pgFLQR9r%2F2pdUR0ufFjnwwUML70rJWFy8meIIZeJNqw00%2BWt6D15UYTbkIOKyMH8cdOrMvo758hEf3nEgGFC0JkJ3p32FFygKlOppW%2Bergiu%2FmvqOt1D3urOoYeaGfhk8YgCVT0bd23nlA%2Bd45psXom0Kb3jbYNL9fLy16IcDIXxMLlop9iZlo4rRli2eT2NAKrIYyPUIunGsClulwWYrQA6w5%2BOLWam&X-Amz-Signature=5451c9ec2ecbb8412f362b3ccc81764c9d225a7668ea27568e7481695c749cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RG2KOC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsP%2FBwaDQRWY5LKE7OBOlHjr69VFk%2BbmD%2BP3TilSFIUAiBwoQIKdN2dTOP6iFDE%2BBk0nYALjy4OGH1TJLIV%2FXaNnCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyI9WPsOaq0c%2FtKhPKtwDBhm1ONDea01z1D%2BwOm31lyDemxhtkhrm2dwBj8tjQ2YQoacV0NGX8KXwDqQ7eTla8MVAnPX6nob1t%2B3VUQIewn4E2XOnMKsGvKUCNps3sUruEs%2BVRbGGk5P7z%2F%2FDhQ62NbRmw47BL5K%2BkbGQV22JD72oxx6MqfjcXrA%2FQcqevvf%2FH9kUJzdaUNNKMuFQ2FXv8UmWDYpW%2BNFzESypzSKPkgB5R5Zw519uQO0tsw%2BXD9kQ25O3AKMaZqiXfe%2F5mfOIPqU7ji%2FPiz6YS%2BoJNijSsrmjeuB9fnc91Hz6rRiNHROZCXKZyCiYR6kEEyZn7odfDp74k5my5iSZcBltY%2BEFjQWMC93fq%2BGHc63u0wJ3BvRN5ZIIT%2BHCcuxRK7BXPYYPp67kDqEROzARbTkvrikV4YNjT4LgJsgbH5Xy5ndDjdPZ0Ss7n4aWHypRjnAAfrcp5Q486LcRqUda1UiDJDFSZNlqULng3%2Fk3JMS8iOGm%2FRouZ8t98XXl79fJUYr315buxfYcjgg%2FLMPShczdprrSHep3%2BDbYPPdwBjRZlroK7IWQyNdYKRRqajSW54XqS7DpEGD7SVNkj2lOgi8bxZyU1PJ%2BPHXmJm6%2Fi3nbZyqPJCIrUd2kGH7fuks7X%2FYw8tGbwgY6pgFLQR9r%2F2pdUR0ufFjnwwUML70rJWFy8meIIZeJNqw00%2BWt6D15UYTbkIOKyMH8cdOrMvo758hEf3nEgGFC0JkJ3p32FFygKlOppW%2Bergiu%2FmvqOt1D3urOoYeaGfhk8YgCVT0bd23nlA%2Bd45psXom0Kb3jbYNL9fLy16IcDIXxMLlop9iZlo4rRli2eT2NAKrIYyPUIunGsClulwWYrQA6w5%2BOLWam&X-Amz-Signature=013795ff843470a1875c2f34f9d1c1fbda2d0cbc5cbbbe27edc9b92411d6e580&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RG2KOC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsP%2FBwaDQRWY5LKE7OBOlHjr69VFk%2BbmD%2BP3TilSFIUAiBwoQIKdN2dTOP6iFDE%2BBk0nYALjy4OGH1TJLIV%2FXaNnCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyI9WPsOaq0c%2FtKhPKtwDBhm1ONDea01z1D%2BwOm31lyDemxhtkhrm2dwBj8tjQ2YQoacV0NGX8KXwDqQ7eTla8MVAnPX6nob1t%2B3VUQIewn4E2XOnMKsGvKUCNps3sUruEs%2BVRbGGk5P7z%2F%2FDhQ62NbRmw47BL5K%2BkbGQV22JD72oxx6MqfjcXrA%2FQcqevvf%2FH9kUJzdaUNNKMuFQ2FXv8UmWDYpW%2BNFzESypzSKPkgB5R5Zw519uQO0tsw%2BXD9kQ25O3AKMaZqiXfe%2F5mfOIPqU7ji%2FPiz6YS%2BoJNijSsrmjeuB9fnc91Hz6rRiNHROZCXKZyCiYR6kEEyZn7odfDp74k5my5iSZcBltY%2BEFjQWMC93fq%2BGHc63u0wJ3BvRN5ZIIT%2BHCcuxRK7BXPYYPp67kDqEROzARbTkvrikV4YNjT4LgJsgbH5Xy5ndDjdPZ0Ss7n4aWHypRjnAAfrcp5Q486LcRqUda1UiDJDFSZNlqULng3%2Fk3JMS8iOGm%2FRouZ8t98XXl79fJUYr315buxfYcjgg%2FLMPShczdprrSHep3%2BDbYPPdwBjRZlroK7IWQyNdYKRRqajSW54XqS7DpEGD7SVNkj2lOgi8bxZyU1PJ%2BPHXmJm6%2Fi3nbZyqPJCIrUd2kGH7fuks7X%2FYw8tGbwgY6pgFLQR9r%2F2pdUR0ufFjnwwUML70rJWFy8meIIZeJNqw00%2BWt6D15UYTbkIOKyMH8cdOrMvo758hEf3nEgGFC0JkJ3p32FFygKlOppW%2Bergiu%2FmvqOt1D3urOoYeaGfhk8YgCVT0bd23nlA%2Bd45psXom0Kb3jbYNL9fLy16IcDIXxMLlop9iZlo4rRli2eT2NAKrIYyPUIunGsClulwWYrQA6w5%2BOLWam&X-Amz-Signature=d7cd2b61563da4e660acf9074070d1b5c90b0524c63ae284b0d450ba87f46a25&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
