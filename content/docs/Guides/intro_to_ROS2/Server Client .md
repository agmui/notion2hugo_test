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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y2AC4B%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDrWX5q6zuqpdOqql%2BCojXi4E1efnZgpkkI2klQKSBAEQIhAPPFxIz%2BM%2BEQthDHaYC9XwHEC3IHpmzpja7rRNpbJP27Kv8DCEwQABoMNjM3NDIzMTgzODA1IgwIwUsApI5Vg8rt6KYq3AO87XauioUul9UfHjKL8QL8PmrVYjk3kw6zbdH6UCP2w4jZsTQuAN6s9spR%2F%2BCZvQj53x0dPcHzECMQpbbC33AUEoro9hlI5VkFGJZe7SWv4bb5qGOVbh6qnFq9izQTh%2B%2BThgZPmmp0epyA5u%2BGyXTkkPt%2Fj9y66wSnwuCB4RAQPLS2yAYcHqYWzKrSHQ5b9sYithVEdPveJRtbtom1TbRqfnPHqB0KBGBf7UCl0Pe4cMU3pGGRAfCGlCsJpBZA1frbYLqyoDuXT4UtdWpa6Mprwi7XeyPGhzcL6MkjRMGEsaMAQk%2Bh%2BhfWYEQfCUb4K0oJHbpkCmHGec7BSMRE5sNYFau2iB1PMUs5D0zFwBt6%2FhSSk0cnMwH5HSy4OiTOvAczmVPT%2BVr8c%2FYQgXseH3%2BVYpxPIgIm1%2FdshPSbGZjRqT6jtIYdhRMjIsbacafrJJLjMBN14NaiYtSlGbokk0V3EyerXsibvHv7yEclY1M9dmmJINIYucq52%2FaAk9Ugjz6qJ%2BPF0X3UcrTQnYmaasegMRng7ONiYhgah88hyeScp4dNtMuIgF81I1k1htDF9Rytwpfl9IQaYvRda0vbG3sy9qM4922UeH1GbpTZqPQMr8G94jzokztuXeqxgTCT2IfCBjqkAZafG%2FKUnUNjELPzira6UhKr7i616VrzP5POZ3OtNd2ndMYFPLQbI%2BE0XKnfK2dkNeyNBTxkmSalU80LtE6pdRL5YfezuTZeRHas4dD8nkGuJzoIjTy9W05IboFyU6TcxleR%2B1sy6L9B0p7apgWl3OUxMivL%2Bsa%2BP%2F%2FQ985y8kg7g6gOyVAIQ0wz7%2Bd6eIylWne24sqxEIyr4wErVd5gR3Yv7Kgd&X-Amz-Signature=233a4c336e179bf321d7119f45349fc32de1cc84c83c87bfc79682e949844df1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y2AC4B%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDrWX5q6zuqpdOqql%2BCojXi4E1efnZgpkkI2klQKSBAEQIhAPPFxIz%2BM%2BEQthDHaYC9XwHEC3IHpmzpja7rRNpbJP27Kv8DCEwQABoMNjM3NDIzMTgzODA1IgwIwUsApI5Vg8rt6KYq3AO87XauioUul9UfHjKL8QL8PmrVYjk3kw6zbdH6UCP2w4jZsTQuAN6s9spR%2F%2BCZvQj53x0dPcHzECMQpbbC33AUEoro9hlI5VkFGJZe7SWv4bb5qGOVbh6qnFq9izQTh%2B%2BThgZPmmp0epyA5u%2BGyXTkkPt%2Fj9y66wSnwuCB4RAQPLS2yAYcHqYWzKrSHQ5b9sYithVEdPveJRtbtom1TbRqfnPHqB0KBGBf7UCl0Pe4cMU3pGGRAfCGlCsJpBZA1frbYLqyoDuXT4UtdWpa6Mprwi7XeyPGhzcL6MkjRMGEsaMAQk%2Bh%2BhfWYEQfCUb4K0oJHbpkCmHGec7BSMRE5sNYFau2iB1PMUs5D0zFwBt6%2FhSSk0cnMwH5HSy4OiTOvAczmVPT%2BVr8c%2FYQgXseH3%2BVYpxPIgIm1%2FdshPSbGZjRqT6jtIYdhRMjIsbacafrJJLjMBN14NaiYtSlGbokk0V3EyerXsibvHv7yEclY1M9dmmJINIYucq52%2FaAk9Ugjz6qJ%2BPF0X3UcrTQnYmaasegMRng7ONiYhgah88hyeScp4dNtMuIgF81I1k1htDF9Rytwpfl9IQaYvRda0vbG3sy9qM4922UeH1GbpTZqPQMr8G94jzokztuXeqxgTCT2IfCBjqkAZafG%2FKUnUNjELPzira6UhKr7i616VrzP5POZ3OtNd2ndMYFPLQbI%2BE0XKnfK2dkNeyNBTxkmSalU80LtE6pdRL5YfezuTZeRHas4dD8nkGuJzoIjTy9W05IboFyU6TcxleR%2B1sy6L9B0p7apgWl3OUxMivL%2Bsa%2BP%2F%2FQ985y8kg7g6gOyVAIQ0wz7%2Bd6eIylWne24sqxEIyr4wErVd5gR3Yv7Kgd&X-Amz-Signature=8aa1b7f83795e32a8b639d1c864d51ca7d63b739908dcbb6605cc0f7b0855ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y2AC4B%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDrWX5q6zuqpdOqql%2BCojXi4E1efnZgpkkI2klQKSBAEQIhAPPFxIz%2BM%2BEQthDHaYC9XwHEC3IHpmzpja7rRNpbJP27Kv8DCEwQABoMNjM3NDIzMTgzODA1IgwIwUsApI5Vg8rt6KYq3AO87XauioUul9UfHjKL8QL8PmrVYjk3kw6zbdH6UCP2w4jZsTQuAN6s9spR%2F%2BCZvQj53x0dPcHzECMQpbbC33AUEoro9hlI5VkFGJZe7SWv4bb5qGOVbh6qnFq9izQTh%2B%2BThgZPmmp0epyA5u%2BGyXTkkPt%2Fj9y66wSnwuCB4RAQPLS2yAYcHqYWzKrSHQ5b9sYithVEdPveJRtbtom1TbRqfnPHqB0KBGBf7UCl0Pe4cMU3pGGRAfCGlCsJpBZA1frbYLqyoDuXT4UtdWpa6Mprwi7XeyPGhzcL6MkjRMGEsaMAQk%2Bh%2BhfWYEQfCUb4K0oJHbpkCmHGec7BSMRE5sNYFau2iB1PMUs5D0zFwBt6%2FhSSk0cnMwH5HSy4OiTOvAczmVPT%2BVr8c%2FYQgXseH3%2BVYpxPIgIm1%2FdshPSbGZjRqT6jtIYdhRMjIsbacafrJJLjMBN14NaiYtSlGbokk0V3EyerXsibvHv7yEclY1M9dmmJINIYucq52%2FaAk9Ugjz6qJ%2BPF0X3UcrTQnYmaasegMRng7ONiYhgah88hyeScp4dNtMuIgF81I1k1htDF9Rytwpfl9IQaYvRda0vbG3sy9qM4922UeH1GbpTZqPQMr8G94jzokztuXeqxgTCT2IfCBjqkAZafG%2FKUnUNjELPzira6UhKr7i616VrzP5POZ3OtNd2ndMYFPLQbI%2BE0XKnfK2dkNeyNBTxkmSalU80LtE6pdRL5YfezuTZeRHas4dD8nkGuJzoIjTy9W05IboFyU6TcxleR%2B1sy6L9B0p7apgWl3OUxMivL%2Bsa%2BP%2F%2FQ985y8kg7g6gOyVAIQ0wz7%2Bd6eIylWne24sqxEIyr4wErVd5gR3Yv7Kgd&X-Amz-Signature=dea8ea7ac918b502f0b1c4da265262562ee1092b55ca924b7a0ece026ca126b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y2AC4B%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDrWX5q6zuqpdOqql%2BCojXi4E1efnZgpkkI2klQKSBAEQIhAPPFxIz%2BM%2BEQthDHaYC9XwHEC3IHpmzpja7rRNpbJP27Kv8DCEwQABoMNjM3NDIzMTgzODA1IgwIwUsApI5Vg8rt6KYq3AO87XauioUul9UfHjKL8QL8PmrVYjk3kw6zbdH6UCP2w4jZsTQuAN6s9spR%2F%2BCZvQj53x0dPcHzECMQpbbC33AUEoro9hlI5VkFGJZe7SWv4bb5qGOVbh6qnFq9izQTh%2B%2BThgZPmmp0epyA5u%2BGyXTkkPt%2Fj9y66wSnwuCB4RAQPLS2yAYcHqYWzKrSHQ5b9sYithVEdPveJRtbtom1TbRqfnPHqB0KBGBf7UCl0Pe4cMU3pGGRAfCGlCsJpBZA1frbYLqyoDuXT4UtdWpa6Mprwi7XeyPGhzcL6MkjRMGEsaMAQk%2Bh%2BhfWYEQfCUb4K0oJHbpkCmHGec7BSMRE5sNYFau2iB1PMUs5D0zFwBt6%2FhSSk0cnMwH5HSy4OiTOvAczmVPT%2BVr8c%2FYQgXseH3%2BVYpxPIgIm1%2FdshPSbGZjRqT6jtIYdhRMjIsbacafrJJLjMBN14NaiYtSlGbokk0V3EyerXsibvHv7yEclY1M9dmmJINIYucq52%2FaAk9Ugjz6qJ%2BPF0X3UcrTQnYmaasegMRng7ONiYhgah88hyeScp4dNtMuIgF81I1k1htDF9Rytwpfl9IQaYvRda0vbG3sy9qM4922UeH1GbpTZqPQMr8G94jzokztuXeqxgTCT2IfCBjqkAZafG%2FKUnUNjELPzira6UhKr7i616VrzP5POZ3OtNd2ndMYFPLQbI%2BE0XKnfK2dkNeyNBTxkmSalU80LtE6pdRL5YfezuTZeRHas4dD8nkGuJzoIjTy9W05IboFyU6TcxleR%2B1sy6L9B0p7apgWl3OUxMivL%2Bsa%2BP%2F%2FQ985y8kg7g6gOyVAIQ0wz7%2Bd6eIylWne24sqxEIyr4wErVd5gR3Yv7Kgd&X-Amz-Signature=3386256877de9d8fb66e39cf8d73ee22d07ec5b17c6656188ebc342b652dd801&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y2AC4B%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDrWX5q6zuqpdOqql%2BCojXi4E1efnZgpkkI2klQKSBAEQIhAPPFxIz%2BM%2BEQthDHaYC9XwHEC3IHpmzpja7rRNpbJP27Kv8DCEwQABoMNjM3NDIzMTgzODA1IgwIwUsApI5Vg8rt6KYq3AO87XauioUul9UfHjKL8QL8PmrVYjk3kw6zbdH6UCP2w4jZsTQuAN6s9spR%2F%2BCZvQj53x0dPcHzECMQpbbC33AUEoro9hlI5VkFGJZe7SWv4bb5qGOVbh6qnFq9izQTh%2B%2BThgZPmmp0epyA5u%2BGyXTkkPt%2Fj9y66wSnwuCB4RAQPLS2yAYcHqYWzKrSHQ5b9sYithVEdPveJRtbtom1TbRqfnPHqB0KBGBf7UCl0Pe4cMU3pGGRAfCGlCsJpBZA1frbYLqyoDuXT4UtdWpa6Mprwi7XeyPGhzcL6MkjRMGEsaMAQk%2Bh%2BhfWYEQfCUb4K0oJHbpkCmHGec7BSMRE5sNYFau2iB1PMUs5D0zFwBt6%2FhSSk0cnMwH5HSy4OiTOvAczmVPT%2BVr8c%2FYQgXseH3%2BVYpxPIgIm1%2FdshPSbGZjRqT6jtIYdhRMjIsbacafrJJLjMBN14NaiYtSlGbokk0V3EyerXsibvHv7yEclY1M9dmmJINIYucq52%2FaAk9Ugjz6qJ%2BPF0X3UcrTQnYmaasegMRng7ONiYhgah88hyeScp4dNtMuIgF81I1k1htDF9Rytwpfl9IQaYvRda0vbG3sy9qM4922UeH1GbpTZqPQMr8G94jzokztuXeqxgTCT2IfCBjqkAZafG%2FKUnUNjELPzira6UhKr7i616VrzP5POZ3OtNd2ndMYFPLQbI%2BE0XKnfK2dkNeyNBTxkmSalU80LtE6pdRL5YfezuTZeRHas4dD8nkGuJzoIjTy9W05IboFyU6TcxleR%2B1sy6L9B0p7apgWl3OUxMivL%2Bsa%2BP%2F%2FQ985y8kg7g6gOyVAIQ0wz7%2Bd6eIylWne24sqxEIyr4wErVd5gR3Yv7Kgd&X-Amz-Signature=8ef751f890570d8d10d3395dfc502154a830ecc2d675f03a06a9106fcd8fed20&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
