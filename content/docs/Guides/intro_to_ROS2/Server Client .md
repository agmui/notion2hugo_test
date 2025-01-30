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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK4MKED%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiaQkZ7HoFXMBO8os0ESNATmjYzS1Ow6fhLwUQkRFwcgIhAJ%2Bw%2BHV2hRn8ZHFSmtyvk68RIzJ49T8zMNsNRa5XaDM8KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwwE4CuSuA0808%2FpYq3APWiH%2BFehfVrOsrIuc7LTT9C0%2BQ0wbCBOU4QumscUM8257fbY6ssKSlMbQ5OHpuPhxDSJLu4HbsyczCGcppkQNoWUXwn0BbQbhTpBQbfsmP0I%2BDFvHGGNXarYlGBEH9nsWME%2F1RQ6oMLBlhdyYziM%2BzGvRvHI354oKwgupX7Y8QSjCZ1BLm1L2ntPwX7ook5vKO6SrIxDtB%2By86zedaaZ8m%2FWr4dkBouWXYlnxGVLXj2x1p7Z5ksXR5IIatLkXwy4aSi8z7i5ailWBrS9zoAHeW7WDoLiNVpD5tSjEkBZ3LuIgbWLRy%2Fd1RDuu325hoaM3%2B5%2F9Kfu7YfQYUUmuRjW%2BAE0EyliaoG5kMOpHcwvJUburFeGpXEdMhCvUrY%2B7yyn8RXwBYbHGqGY7ISSZa2pLYxKE9GMqFKwb1mT4EjKmLnemm9ljLspjYsKb6knIav9QMLYSgKFFKuPKPMArOBSxXEOgZVyKmYLRRFQkuOic3mMS1OVlzQ7QaroCHPwYgjoP0gJB3dIXuXVOFN3WCUljVU4qMMroYAdJ675E3ZPTjsBi8K38UsPDnTNlBafEUFvGg973jI93ldTfihLntTMTk7nSBsFJVzU2%2BBgBKG8x9g4r0XU0Sx051ATzMojCExuq8BjqkAX1JocyrasRRB%2FzNs4befmBvCV3c8phBbtZaFs1aU8MGUVAMLoFQahdQUe1UMXLiRWa8rBIklV2%2BBDzdTFw2igPbka6%2BTL9Iku4BMu7YJTBXk3cZdtNCdas8LCQzN0QS%2BdAeKkmf2BfwTgmObbOUfsegUdDb7g56cno3rHutU3DMp6uVoknl8ejB1AKSykPujIm54ARBPshdasT1EMwvPkOkCNuM&X-Amz-Signature=248dfa7baac15600f870349f5ec7960b5f202a9d8c0311e4e2d2df768b36acc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK4MKED%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiaQkZ7HoFXMBO8os0ESNATmjYzS1Ow6fhLwUQkRFwcgIhAJ%2Bw%2BHV2hRn8ZHFSmtyvk68RIzJ49T8zMNsNRa5XaDM8KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwwE4CuSuA0808%2FpYq3APWiH%2BFehfVrOsrIuc7LTT9C0%2BQ0wbCBOU4QumscUM8257fbY6ssKSlMbQ5OHpuPhxDSJLu4HbsyczCGcppkQNoWUXwn0BbQbhTpBQbfsmP0I%2BDFvHGGNXarYlGBEH9nsWME%2F1RQ6oMLBlhdyYziM%2BzGvRvHI354oKwgupX7Y8QSjCZ1BLm1L2ntPwX7ook5vKO6SrIxDtB%2By86zedaaZ8m%2FWr4dkBouWXYlnxGVLXj2x1p7Z5ksXR5IIatLkXwy4aSi8z7i5ailWBrS9zoAHeW7WDoLiNVpD5tSjEkBZ3LuIgbWLRy%2Fd1RDuu325hoaM3%2B5%2F9Kfu7YfQYUUmuRjW%2BAE0EyliaoG5kMOpHcwvJUburFeGpXEdMhCvUrY%2B7yyn8RXwBYbHGqGY7ISSZa2pLYxKE9GMqFKwb1mT4EjKmLnemm9ljLspjYsKb6knIav9QMLYSgKFFKuPKPMArOBSxXEOgZVyKmYLRRFQkuOic3mMS1OVlzQ7QaroCHPwYgjoP0gJB3dIXuXVOFN3WCUljVU4qMMroYAdJ675E3ZPTjsBi8K38UsPDnTNlBafEUFvGg973jI93ldTfihLntTMTk7nSBsFJVzU2%2BBgBKG8x9g4r0XU0Sx051ATzMojCExuq8BjqkAX1JocyrasRRB%2FzNs4befmBvCV3c8phBbtZaFs1aU8MGUVAMLoFQahdQUe1UMXLiRWa8rBIklV2%2BBDzdTFw2igPbka6%2BTL9Iku4BMu7YJTBXk3cZdtNCdas8LCQzN0QS%2BdAeKkmf2BfwTgmObbOUfsegUdDb7g56cno3rHutU3DMp6uVoknl8ejB1AKSykPujIm54ARBPshdasT1EMwvPkOkCNuM&X-Amz-Signature=4ce8115b0db0065327094a1f19906719d09c8734230d8a89daabee6f19aea4b5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK4MKED%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiaQkZ7HoFXMBO8os0ESNATmjYzS1Ow6fhLwUQkRFwcgIhAJ%2Bw%2BHV2hRn8ZHFSmtyvk68RIzJ49T8zMNsNRa5XaDM8KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwwE4CuSuA0808%2FpYq3APWiH%2BFehfVrOsrIuc7LTT9C0%2BQ0wbCBOU4QumscUM8257fbY6ssKSlMbQ5OHpuPhxDSJLu4HbsyczCGcppkQNoWUXwn0BbQbhTpBQbfsmP0I%2BDFvHGGNXarYlGBEH9nsWME%2F1RQ6oMLBlhdyYziM%2BzGvRvHI354oKwgupX7Y8QSjCZ1BLm1L2ntPwX7ook5vKO6SrIxDtB%2By86zedaaZ8m%2FWr4dkBouWXYlnxGVLXj2x1p7Z5ksXR5IIatLkXwy4aSi8z7i5ailWBrS9zoAHeW7WDoLiNVpD5tSjEkBZ3LuIgbWLRy%2Fd1RDuu325hoaM3%2B5%2F9Kfu7YfQYUUmuRjW%2BAE0EyliaoG5kMOpHcwvJUburFeGpXEdMhCvUrY%2B7yyn8RXwBYbHGqGY7ISSZa2pLYxKE9GMqFKwb1mT4EjKmLnemm9ljLspjYsKb6knIav9QMLYSgKFFKuPKPMArOBSxXEOgZVyKmYLRRFQkuOic3mMS1OVlzQ7QaroCHPwYgjoP0gJB3dIXuXVOFN3WCUljVU4qMMroYAdJ675E3ZPTjsBi8K38UsPDnTNlBafEUFvGg973jI93ldTfihLntTMTk7nSBsFJVzU2%2BBgBKG8x9g4r0XU0Sx051ATzMojCExuq8BjqkAX1JocyrasRRB%2FzNs4befmBvCV3c8phBbtZaFs1aU8MGUVAMLoFQahdQUe1UMXLiRWa8rBIklV2%2BBDzdTFw2igPbka6%2BTL9Iku4BMu7YJTBXk3cZdtNCdas8LCQzN0QS%2BdAeKkmf2BfwTgmObbOUfsegUdDb7g56cno3rHutU3DMp6uVoknl8ejB1AKSykPujIm54ARBPshdasT1EMwvPkOkCNuM&X-Amz-Signature=081693ea04fc13e934d91ebbc1913c4d4dbb50db124f142b2c603bd8cdeb17f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK4MKED%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiaQkZ7HoFXMBO8os0ESNATmjYzS1Ow6fhLwUQkRFwcgIhAJ%2Bw%2BHV2hRn8ZHFSmtyvk68RIzJ49T8zMNsNRa5XaDM8KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwwE4CuSuA0808%2FpYq3APWiH%2BFehfVrOsrIuc7LTT9C0%2BQ0wbCBOU4QumscUM8257fbY6ssKSlMbQ5OHpuPhxDSJLu4HbsyczCGcppkQNoWUXwn0BbQbhTpBQbfsmP0I%2BDFvHGGNXarYlGBEH9nsWME%2F1RQ6oMLBlhdyYziM%2BzGvRvHI354oKwgupX7Y8QSjCZ1BLm1L2ntPwX7ook5vKO6SrIxDtB%2By86zedaaZ8m%2FWr4dkBouWXYlnxGVLXj2x1p7Z5ksXR5IIatLkXwy4aSi8z7i5ailWBrS9zoAHeW7WDoLiNVpD5tSjEkBZ3LuIgbWLRy%2Fd1RDuu325hoaM3%2B5%2F9Kfu7YfQYUUmuRjW%2BAE0EyliaoG5kMOpHcwvJUburFeGpXEdMhCvUrY%2B7yyn8RXwBYbHGqGY7ISSZa2pLYxKE9GMqFKwb1mT4EjKmLnemm9ljLspjYsKb6knIav9QMLYSgKFFKuPKPMArOBSxXEOgZVyKmYLRRFQkuOic3mMS1OVlzQ7QaroCHPwYgjoP0gJB3dIXuXVOFN3WCUljVU4qMMroYAdJ675E3ZPTjsBi8K38UsPDnTNlBafEUFvGg973jI93ldTfihLntTMTk7nSBsFJVzU2%2BBgBKG8x9g4r0XU0Sx051ATzMojCExuq8BjqkAX1JocyrasRRB%2FzNs4befmBvCV3c8phBbtZaFs1aU8MGUVAMLoFQahdQUe1UMXLiRWa8rBIklV2%2BBDzdTFw2igPbka6%2BTL9Iku4BMu7YJTBXk3cZdtNCdas8LCQzN0QS%2BdAeKkmf2BfwTgmObbOUfsegUdDb7g56cno3rHutU3DMp6uVoknl8ejB1AKSykPujIm54ARBPshdasT1EMwvPkOkCNuM&X-Amz-Signature=889dd36c04642978913b99878f7ff2e1b69f67c522fba0f8c02023565cbad2c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK4MKED%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiaQkZ7HoFXMBO8os0ESNATmjYzS1Ow6fhLwUQkRFwcgIhAJ%2Bw%2BHV2hRn8ZHFSmtyvk68RIzJ49T8zMNsNRa5XaDM8KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwwE4CuSuA0808%2FpYq3APWiH%2BFehfVrOsrIuc7LTT9C0%2BQ0wbCBOU4QumscUM8257fbY6ssKSlMbQ5OHpuPhxDSJLu4HbsyczCGcppkQNoWUXwn0BbQbhTpBQbfsmP0I%2BDFvHGGNXarYlGBEH9nsWME%2F1RQ6oMLBlhdyYziM%2BzGvRvHI354oKwgupX7Y8QSjCZ1BLm1L2ntPwX7ook5vKO6SrIxDtB%2By86zedaaZ8m%2FWr4dkBouWXYlnxGVLXj2x1p7Z5ksXR5IIatLkXwy4aSi8z7i5ailWBrS9zoAHeW7WDoLiNVpD5tSjEkBZ3LuIgbWLRy%2Fd1RDuu325hoaM3%2B5%2F9Kfu7YfQYUUmuRjW%2BAE0EyliaoG5kMOpHcwvJUburFeGpXEdMhCvUrY%2B7yyn8RXwBYbHGqGY7ISSZa2pLYxKE9GMqFKwb1mT4EjKmLnemm9ljLspjYsKb6knIav9QMLYSgKFFKuPKPMArOBSxXEOgZVyKmYLRRFQkuOic3mMS1OVlzQ7QaroCHPwYgjoP0gJB3dIXuXVOFN3WCUljVU4qMMroYAdJ675E3ZPTjsBi8K38UsPDnTNlBafEUFvGg973jI93ldTfihLntTMTk7nSBsFJVzU2%2BBgBKG8x9g4r0XU0Sx051ATzMojCExuq8BjqkAX1JocyrasRRB%2FzNs4befmBvCV3c8phBbtZaFs1aU8MGUVAMLoFQahdQUe1UMXLiRWa8rBIklV2%2BBDzdTFw2igPbka6%2BTL9Iku4BMu7YJTBXk3cZdtNCdas8LCQzN0QS%2BdAeKkmf2BfwTgmObbOUfsegUdDb7g56cno3rHutU3DMp6uVoknl8ejB1AKSykPujIm54ARBPshdasT1EMwvPkOkCNuM&X-Amz-Signature=54800ce8f387a82629da40c5f84e6a9dc1847d62d54504ef94d8a7c7df7c3ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
