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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OMQOUV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE%2B2SkvA6MFco6ZCoaw7W6dkkLD7SuPrlXwpqlnZdfYgAiBtGD5rW6MPzo7Bh3AvjiCDoSCyarl3LVtnioXSSd%2BojSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMneEUb%2B4JMPHxTH4VKtwDtHvWhtpRwNynqy2cKBmWJrw8YZ02HeeUOAN3HCwrf3%2FcVH6mYLsaJRvSWRV0COfMhOrnvRJB4eSItDIAHwsrKlkx%2BhvsKrCvrLgSfE07zJpO0Q8o5fYycBWBEGyWdb7Ff%2Bbz7Rr7AlSf5xndG44D1YoVyOUTDJJZwCDJniq0qH%2FlXLR%2BNbV3bXlzOSexrZl1YfZvHeGk0TEBYlrSXWMiiyFUB3wrFEH4m91KcEPn6%2BHph01cKAgpSE6sCv%2F7x%2BXkrfNo7C9PqCyr%2BOoW1gda3kv44ackYO93bhbXYTFXSikqxkDf%2BduhesTz6NVq1lUHdBqX8Wj69x7RDEom2%2B0bXW5vI6KJkh30uXUO1yjK8OyCsLHL1FNivkcoPmNxKU%2Fe3OiCS2PrKn3ET19icH068ongEagnA4yolYUyhecddioKNKpATASq8gq2q3r9ESTjikAr%2BPgYC0tJ9aHYTMXxYctixQmOTOtJj1Tm04lvvoLYfOR4YrRj6t3ga7Qr6SIT2j1p8pCDlbvjxAB2B96ZV8GmH8r%2BdPjn908cdtBwnCl5vwLGlB5P1Tfe1%2FEPWisZc8pqnNmtVCAh36dQUzwZn99V4xRP6Led%2FswOUUp986WP2NOcar68mfZFv7Qw36%2BFvgY6pgGY3pobuRAtxA44WFi0SN69BhzNYFYJ1K%2FOFGv8hSbgeHXIEhbb7MGnTbTTB8OM69%2FObsvN8%2BsHIwBo2VoZtGuOU9Nbnkg8msiZOn%2FHM3DK60NiYj0ADdtJm%2BV32zIRyLuzXtiD8C8BEWrR1idumgeL0YIiL%2BnvYIMujHahUuq50VWCb%2Fz8TDASbEi6I10z%2BUbPp3lENqSN5xk7cIwQAS3hF10mkvYV&X-Amz-Signature=953d3b8c1dc2f2dc58f189ca78e0dd22fc9466ec09d2872e4bb6a4f74c519ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OMQOUV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE%2B2SkvA6MFco6ZCoaw7W6dkkLD7SuPrlXwpqlnZdfYgAiBtGD5rW6MPzo7Bh3AvjiCDoSCyarl3LVtnioXSSd%2BojSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMneEUb%2B4JMPHxTH4VKtwDtHvWhtpRwNynqy2cKBmWJrw8YZ02HeeUOAN3HCwrf3%2FcVH6mYLsaJRvSWRV0COfMhOrnvRJB4eSItDIAHwsrKlkx%2BhvsKrCvrLgSfE07zJpO0Q8o5fYycBWBEGyWdb7Ff%2Bbz7Rr7AlSf5xndG44D1YoVyOUTDJJZwCDJniq0qH%2FlXLR%2BNbV3bXlzOSexrZl1YfZvHeGk0TEBYlrSXWMiiyFUB3wrFEH4m91KcEPn6%2BHph01cKAgpSE6sCv%2F7x%2BXkrfNo7C9PqCyr%2BOoW1gda3kv44ackYO93bhbXYTFXSikqxkDf%2BduhesTz6NVq1lUHdBqX8Wj69x7RDEom2%2B0bXW5vI6KJkh30uXUO1yjK8OyCsLHL1FNivkcoPmNxKU%2Fe3OiCS2PrKn3ET19icH068ongEagnA4yolYUyhecddioKNKpATASq8gq2q3r9ESTjikAr%2BPgYC0tJ9aHYTMXxYctixQmOTOtJj1Tm04lvvoLYfOR4YrRj6t3ga7Qr6SIT2j1p8pCDlbvjxAB2B96ZV8GmH8r%2BdPjn908cdtBwnCl5vwLGlB5P1Tfe1%2FEPWisZc8pqnNmtVCAh36dQUzwZn99V4xRP6Led%2FswOUUp986WP2NOcar68mfZFv7Qw36%2BFvgY6pgGY3pobuRAtxA44WFi0SN69BhzNYFYJ1K%2FOFGv8hSbgeHXIEhbb7MGnTbTTB8OM69%2FObsvN8%2BsHIwBo2VoZtGuOU9Nbnkg8msiZOn%2FHM3DK60NiYj0ADdtJm%2BV32zIRyLuzXtiD8C8BEWrR1idumgeL0YIiL%2BnvYIMujHahUuq50VWCb%2Fz8TDASbEi6I10z%2BUbPp3lENqSN5xk7cIwQAS3hF10mkvYV&X-Amz-Signature=0f17345f66e0ffafb1bcfe8f5c4a7e327fbe3d4e07993c1d4be8891c8f3229ff&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OMQOUV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE%2B2SkvA6MFco6ZCoaw7W6dkkLD7SuPrlXwpqlnZdfYgAiBtGD5rW6MPzo7Bh3AvjiCDoSCyarl3LVtnioXSSd%2BojSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMneEUb%2B4JMPHxTH4VKtwDtHvWhtpRwNynqy2cKBmWJrw8YZ02HeeUOAN3HCwrf3%2FcVH6mYLsaJRvSWRV0COfMhOrnvRJB4eSItDIAHwsrKlkx%2BhvsKrCvrLgSfE07zJpO0Q8o5fYycBWBEGyWdb7Ff%2Bbz7Rr7AlSf5xndG44D1YoVyOUTDJJZwCDJniq0qH%2FlXLR%2BNbV3bXlzOSexrZl1YfZvHeGk0TEBYlrSXWMiiyFUB3wrFEH4m91KcEPn6%2BHph01cKAgpSE6sCv%2F7x%2BXkrfNo7C9PqCyr%2BOoW1gda3kv44ackYO93bhbXYTFXSikqxkDf%2BduhesTz6NVq1lUHdBqX8Wj69x7RDEom2%2B0bXW5vI6KJkh30uXUO1yjK8OyCsLHL1FNivkcoPmNxKU%2Fe3OiCS2PrKn3ET19icH068ongEagnA4yolYUyhecddioKNKpATASq8gq2q3r9ESTjikAr%2BPgYC0tJ9aHYTMXxYctixQmOTOtJj1Tm04lvvoLYfOR4YrRj6t3ga7Qr6SIT2j1p8pCDlbvjxAB2B96ZV8GmH8r%2BdPjn908cdtBwnCl5vwLGlB5P1Tfe1%2FEPWisZc8pqnNmtVCAh36dQUzwZn99V4xRP6Led%2FswOUUp986WP2NOcar68mfZFv7Qw36%2BFvgY6pgGY3pobuRAtxA44WFi0SN69BhzNYFYJ1K%2FOFGv8hSbgeHXIEhbb7MGnTbTTB8OM69%2FObsvN8%2BsHIwBo2VoZtGuOU9Nbnkg8msiZOn%2FHM3DK60NiYj0ADdtJm%2BV32zIRyLuzXtiD8C8BEWrR1idumgeL0YIiL%2BnvYIMujHahUuq50VWCb%2Fz8TDASbEi6I10z%2BUbPp3lENqSN5xk7cIwQAS3hF10mkvYV&X-Amz-Signature=2fd6fcb89873205797a779c875ca76b3b3f8855a095e943da831e2fc2ecb6ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OMQOUV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE%2B2SkvA6MFco6ZCoaw7W6dkkLD7SuPrlXwpqlnZdfYgAiBtGD5rW6MPzo7Bh3AvjiCDoSCyarl3LVtnioXSSd%2BojSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMneEUb%2B4JMPHxTH4VKtwDtHvWhtpRwNynqy2cKBmWJrw8YZ02HeeUOAN3HCwrf3%2FcVH6mYLsaJRvSWRV0COfMhOrnvRJB4eSItDIAHwsrKlkx%2BhvsKrCvrLgSfE07zJpO0Q8o5fYycBWBEGyWdb7Ff%2Bbz7Rr7AlSf5xndG44D1YoVyOUTDJJZwCDJniq0qH%2FlXLR%2BNbV3bXlzOSexrZl1YfZvHeGk0TEBYlrSXWMiiyFUB3wrFEH4m91KcEPn6%2BHph01cKAgpSE6sCv%2F7x%2BXkrfNo7C9PqCyr%2BOoW1gda3kv44ackYO93bhbXYTFXSikqxkDf%2BduhesTz6NVq1lUHdBqX8Wj69x7RDEom2%2B0bXW5vI6KJkh30uXUO1yjK8OyCsLHL1FNivkcoPmNxKU%2Fe3OiCS2PrKn3ET19icH068ongEagnA4yolYUyhecddioKNKpATASq8gq2q3r9ESTjikAr%2BPgYC0tJ9aHYTMXxYctixQmOTOtJj1Tm04lvvoLYfOR4YrRj6t3ga7Qr6SIT2j1p8pCDlbvjxAB2B96ZV8GmH8r%2BdPjn908cdtBwnCl5vwLGlB5P1Tfe1%2FEPWisZc8pqnNmtVCAh36dQUzwZn99V4xRP6Led%2FswOUUp986WP2NOcar68mfZFv7Qw36%2BFvgY6pgGY3pobuRAtxA44WFi0SN69BhzNYFYJ1K%2FOFGv8hSbgeHXIEhbb7MGnTbTTB8OM69%2FObsvN8%2BsHIwBo2VoZtGuOU9Nbnkg8msiZOn%2FHM3DK60NiYj0ADdtJm%2BV32zIRyLuzXtiD8C8BEWrR1idumgeL0YIiL%2BnvYIMujHahUuq50VWCb%2Fz8TDASbEi6I10z%2BUbPp3lENqSN5xk7cIwQAS3hF10mkvYV&X-Amz-Signature=2197e48ed3bb83eebcfce19a188aaf95cbb41794f117302c210af24d1c7bf42e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OMQOUV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE%2B2SkvA6MFco6ZCoaw7W6dkkLD7SuPrlXwpqlnZdfYgAiBtGD5rW6MPzo7Bh3AvjiCDoSCyarl3LVtnioXSSd%2BojSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMneEUb%2B4JMPHxTH4VKtwDtHvWhtpRwNynqy2cKBmWJrw8YZ02HeeUOAN3HCwrf3%2FcVH6mYLsaJRvSWRV0COfMhOrnvRJB4eSItDIAHwsrKlkx%2BhvsKrCvrLgSfE07zJpO0Q8o5fYycBWBEGyWdb7Ff%2Bbz7Rr7AlSf5xndG44D1YoVyOUTDJJZwCDJniq0qH%2FlXLR%2BNbV3bXlzOSexrZl1YfZvHeGk0TEBYlrSXWMiiyFUB3wrFEH4m91KcEPn6%2BHph01cKAgpSE6sCv%2F7x%2BXkrfNo7C9PqCyr%2BOoW1gda3kv44ackYO93bhbXYTFXSikqxkDf%2BduhesTz6NVq1lUHdBqX8Wj69x7RDEom2%2B0bXW5vI6KJkh30uXUO1yjK8OyCsLHL1FNivkcoPmNxKU%2Fe3OiCS2PrKn3ET19icH068ongEagnA4yolYUyhecddioKNKpATASq8gq2q3r9ESTjikAr%2BPgYC0tJ9aHYTMXxYctixQmOTOtJj1Tm04lvvoLYfOR4YrRj6t3ga7Qr6SIT2j1p8pCDlbvjxAB2B96ZV8GmH8r%2BdPjn908cdtBwnCl5vwLGlB5P1Tfe1%2FEPWisZc8pqnNmtVCAh36dQUzwZn99V4xRP6Led%2FswOUUp986WP2NOcar68mfZFv7Qw36%2BFvgY6pgGY3pobuRAtxA44WFi0SN69BhzNYFYJ1K%2FOFGv8hSbgeHXIEhbb7MGnTbTTB8OM69%2FObsvN8%2BsHIwBo2VoZtGuOU9Nbnkg8msiZOn%2FHM3DK60NiYj0ADdtJm%2BV32zIRyLuzXtiD8C8BEWrR1idumgeL0YIiL%2BnvYIMujHahUuq50VWCb%2Fz8TDASbEi6I10z%2BUbPp3lENqSN5xk7cIwQAS3hF10mkvYV&X-Amz-Signature=763e70affb27ebb7a6a7d22cc7e52350cfaab6efbb353b4011ff09969079b85b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
