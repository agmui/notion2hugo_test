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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWIDNYL%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDVO3zDVVrlIZLCVDBjK5tzhA3lMvumQypg7%2BYdZn8PBAiA5jdnzq%2FFmPm6tlNAASoGpBKhvVaaerbbnyjR6HOI%2FiSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirC6wbz%2FlsEaxupyKtwDC4RmALOjUVrn9awSRNm4Y5BvdlvxPRgor8MyE9cskEeCc%2BjjcYoCZXOdSwoL5ijCYKqd0RANjXh9KWqsbYFn3q5dho%2FOqEf4n%2BqQFvi68uIp5m03X0v3X6leprlQ87mc3gsKjWL6%2BPDVamueWc%2FlsoTEUnVUCD7WlOX0N%2BgIfPFrMHgyjUQvHaacyL8tRaM9zLyB7zAi5t%2BB02plUYeNd8sGJ98INAhTXYSAQQKG3xuO0NIncm2nRsY83%2FHGb5BYlfVBxKoYauu%2B7LtCJrNXJxo%2BQ4%2FwqlzVQnbSG7tCPR8QYVXr3E8lsqlYpFaMDJrzMe%2FrR0Cmv2B6KjCP27GPrEH4qnZC0wfCoah%2F57O%2BmMBbGdMHNMUeKZZBI9KiSA29a2Pjx48Y1kIyzQMtkI8e1eEYwHfisg%2FQHwlYSPAi%2FCsb9%2FYRYlHla1hod9D0z%2F563%2Bvu1xSn2qpNwgZdkOJACty1pzrJHiIWVrEhOhIN8qq%2BeZJFAhOIRNBaCMlQ7C9U1i00ZABDwKETUqI80LgZJ%2Bkb2AGOKvmMc2ly8xUXLmdjqAFKYaLfbFPF%2B9LfOuQUfZJyrizvm76nuEnrp3K9PpBEngtp8c4LDP%2BrBvGXUdcVlf%2FBvTjh%2B4L9clEwsYKRwAY6pgGP2miuwzfZl5Hel1J2JXp0R1yktKXLeco2GsaAQbAt0eebp%2BX6TJIaBs2wCGYS1dQKn%2B7l%2FjPMjV917VkLKXGkbIFU1uMJLToLUIw%2Bkgs5OGkIVcoACBgJJJ4OLsogeyVBTg2EjT2y2rtxhpLGnednFhijxIqyPTwMDm7jwT0BF%2FrfDbsimk%2FXBquRptvPKb9jJsjHwzuqm4yMpJ3BfYiAzQU9aSVI&X-Amz-Signature=61d7c0fdbb7620bf4488089ed7939e3aa97fdc3b8093365859e528d288bb283c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWIDNYL%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDVO3zDVVrlIZLCVDBjK5tzhA3lMvumQypg7%2BYdZn8PBAiA5jdnzq%2FFmPm6tlNAASoGpBKhvVaaerbbnyjR6HOI%2FiSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirC6wbz%2FlsEaxupyKtwDC4RmALOjUVrn9awSRNm4Y5BvdlvxPRgor8MyE9cskEeCc%2BjjcYoCZXOdSwoL5ijCYKqd0RANjXh9KWqsbYFn3q5dho%2FOqEf4n%2BqQFvi68uIp5m03X0v3X6leprlQ87mc3gsKjWL6%2BPDVamueWc%2FlsoTEUnVUCD7WlOX0N%2BgIfPFrMHgyjUQvHaacyL8tRaM9zLyB7zAi5t%2BB02plUYeNd8sGJ98INAhTXYSAQQKG3xuO0NIncm2nRsY83%2FHGb5BYlfVBxKoYauu%2B7LtCJrNXJxo%2BQ4%2FwqlzVQnbSG7tCPR8QYVXr3E8lsqlYpFaMDJrzMe%2FrR0Cmv2B6KjCP27GPrEH4qnZC0wfCoah%2F57O%2BmMBbGdMHNMUeKZZBI9KiSA29a2Pjx48Y1kIyzQMtkI8e1eEYwHfisg%2FQHwlYSPAi%2FCsb9%2FYRYlHla1hod9D0z%2F563%2Bvu1xSn2qpNwgZdkOJACty1pzrJHiIWVrEhOhIN8qq%2BeZJFAhOIRNBaCMlQ7C9U1i00ZABDwKETUqI80LgZJ%2Bkb2AGOKvmMc2ly8xUXLmdjqAFKYaLfbFPF%2B9LfOuQUfZJyrizvm76nuEnrp3K9PpBEngtp8c4LDP%2BrBvGXUdcVlf%2FBvTjh%2B4L9clEwsYKRwAY6pgGP2miuwzfZl5Hel1J2JXp0R1yktKXLeco2GsaAQbAt0eebp%2BX6TJIaBs2wCGYS1dQKn%2B7l%2FjPMjV917VkLKXGkbIFU1uMJLToLUIw%2Bkgs5OGkIVcoACBgJJJ4OLsogeyVBTg2EjT2y2rtxhpLGnednFhijxIqyPTwMDm7jwT0BF%2FrfDbsimk%2FXBquRptvPKb9jJsjHwzuqm4yMpJ3BfYiAzQU9aSVI&X-Amz-Signature=a07564c66a5e10577ed610a39ad7f0237b214737d4b7c772e627e9929cabb6fd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWIDNYL%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDVO3zDVVrlIZLCVDBjK5tzhA3lMvumQypg7%2BYdZn8PBAiA5jdnzq%2FFmPm6tlNAASoGpBKhvVaaerbbnyjR6HOI%2FiSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirC6wbz%2FlsEaxupyKtwDC4RmALOjUVrn9awSRNm4Y5BvdlvxPRgor8MyE9cskEeCc%2BjjcYoCZXOdSwoL5ijCYKqd0RANjXh9KWqsbYFn3q5dho%2FOqEf4n%2BqQFvi68uIp5m03X0v3X6leprlQ87mc3gsKjWL6%2BPDVamueWc%2FlsoTEUnVUCD7WlOX0N%2BgIfPFrMHgyjUQvHaacyL8tRaM9zLyB7zAi5t%2BB02plUYeNd8sGJ98INAhTXYSAQQKG3xuO0NIncm2nRsY83%2FHGb5BYlfVBxKoYauu%2B7LtCJrNXJxo%2BQ4%2FwqlzVQnbSG7tCPR8QYVXr3E8lsqlYpFaMDJrzMe%2FrR0Cmv2B6KjCP27GPrEH4qnZC0wfCoah%2F57O%2BmMBbGdMHNMUeKZZBI9KiSA29a2Pjx48Y1kIyzQMtkI8e1eEYwHfisg%2FQHwlYSPAi%2FCsb9%2FYRYlHla1hod9D0z%2F563%2Bvu1xSn2qpNwgZdkOJACty1pzrJHiIWVrEhOhIN8qq%2BeZJFAhOIRNBaCMlQ7C9U1i00ZABDwKETUqI80LgZJ%2Bkb2AGOKvmMc2ly8xUXLmdjqAFKYaLfbFPF%2B9LfOuQUfZJyrizvm76nuEnrp3K9PpBEngtp8c4LDP%2BrBvGXUdcVlf%2FBvTjh%2B4L9clEwsYKRwAY6pgGP2miuwzfZl5Hel1J2JXp0R1yktKXLeco2GsaAQbAt0eebp%2BX6TJIaBs2wCGYS1dQKn%2B7l%2FjPMjV917VkLKXGkbIFU1uMJLToLUIw%2Bkgs5OGkIVcoACBgJJJ4OLsogeyVBTg2EjT2y2rtxhpLGnednFhijxIqyPTwMDm7jwT0BF%2FrfDbsimk%2FXBquRptvPKb9jJsjHwzuqm4yMpJ3BfYiAzQU9aSVI&X-Amz-Signature=b960d98f8161567a32c2beaab514f2d8b0bacac9471762eb76fcf09d790166f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWIDNYL%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDVO3zDVVrlIZLCVDBjK5tzhA3lMvumQypg7%2BYdZn8PBAiA5jdnzq%2FFmPm6tlNAASoGpBKhvVaaerbbnyjR6HOI%2FiSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirC6wbz%2FlsEaxupyKtwDC4RmALOjUVrn9awSRNm4Y5BvdlvxPRgor8MyE9cskEeCc%2BjjcYoCZXOdSwoL5ijCYKqd0RANjXh9KWqsbYFn3q5dho%2FOqEf4n%2BqQFvi68uIp5m03X0v3X6leprlQ87mc3gsKjWL6%2BPDVamueWc%2FlsoTEUnVUCD7WlOX0N%2BgIfPFrMHgyjUQvHaacyL8tRaM9zLyB7zAi5t%2BB02plUYeNd8sGJ98INAhTXYSAQQKG3xuO0NIncm2nRsY83%2FHGb5BYlfVBxKoYauu%2B7LtCJrNXJxo%2BQ4%2FwqlzVQnbSG7tCPR8QYVXr3E8lsqlYpFaMDJrzMe%2FrR0Cmv2B6KjCP27GPrEH4qnZC0wfCoah%2F57O%2BmMBbGdMHNMUeKZZBI9KiSA29a2Pjx48Y1kIyzQMtkI8e1eEYwHfisg%2FQHwlYSPAi%2FCsb9%2FYRYlHla1hod9D0z%2F563%2Bvu1xSn2qpNwgZdkOJACty1pzrJHiIWVrEhOhIN8qq%2BeZJFAhOIRNBaCMlQ7C9U1i00ZABDwKETUqI80LgZJ%2Bkb2AGOKvmMc2ly8xUXLmdjqAFKYaLfbFPF%2B9LfOuQUfZJyrizvm76nuEnrp3K9PpBEngtp8c4LDP%2BrBvGXUdcVlf%2FBvTjh%2B4L9clEwsYKRwAY6pgGP2miuwzfZl5Hel1J2JXp0R1yktKXLeco2GsaAQbAt0eebp%2BX6TJIaBs2wCGYS1dQKn%2B7l%2FjPMjV917VkLKXGkbIFU1uMJLToLUIw%2Bkgs5OGkIVcoACBgJJJ4OLsogeyVBTg2EjT2y2rtxhpLGnednFhijxIqyPTwMDm7jwT0BF%2FrfDbsimk%2FXBquRptvPKb9jJsjHwzuqm4yMpJ3BfYiAzQU9aSVI&X-Amz-Signature=8a35493b8f62e53e84dce22feb326d84c06aa3df463aa4550c5e3b9ca79ee99b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWIDNYL%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDVO3zDVVrlIZLCVDBjK5tzhA3lMvumQypg7%2BYdZn8PBAiA5jdnzq%2FFmPm6tlNAASoGpBKhvVaaerbbnyjR6HOI%2FiSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirC6wbz%2FlsEaxupyKtwDC4RmALOjUVrn9awSRNm4Y5BvdlvxPRgor8MyE9cskEeCc%2BjjcYoCZXOdSwoL5ijCYKqd0RANjXh9KWqsbYFn3q5dho%2FOqEf4n%2BqQFvi68uIp5m03X0v3X6leprlQ87mc3gsKjWL6%2BPDVamueWc%2FlsoTEUnVUCD7WlOX0N%2BgIfPFrMHgyjUQvHaacyL8tRaM9zLyB7zAi5t%2BB02plUYeNd8sGJ98INAhTXYSAQQKG3xuO0NIncm2nRsY83%2FHGb5BYlfVBxKoYauu%2B7LtCJrNXJxo%2BQ4%2FwqlzVQnbSG7tCPR8QYVXr3E8lsqlYpFaMDJrzMe%2FrR0Cmv2B6KjCP27GPrEH4qnZC0wfCoah%2F57O%2BmMBbGdMHNMUeKZZBI9KiSA29a2Pjx48Y1kIyzQMtkI8e1eEYwHfisg%2FQHwlYSPAi%2FCsb9%2FYRYlHla1hod9D0z%2F563%2Bvu1xSn2qpNwgZdkOJACty1pzrJHiIWVrEhOhIN8qq%2BeZJFAhOIRNBaCMlQ7C9U1i00ZABDwKETUqI80LgZJ%2Bkb2AGOKvmMc2ly8xUXLmdjqAFKYaLfbFPF%2B9LfOuQUfZJyrizvm76nuEnrp3K9PpBEngtp8c4LDP%2BrBvGXUdcVlf%2FBvTjh%2B4L9clEwsYKRwAY6pgGP2miuwzfZl5Hel1J2JXp0R1yktKXLeco2GsaAQbAt0eebp%2BX6TJIaBs2wCGYS1dQKn%2B7l%2FjPMjV917VkLKXGkbIFU1uMJLToLUIw%2Bkgs5OGkIVcoACBgJJJ4OLsogeyVBTg2EjT2y2rtxhpLGnednFhijxIqyPTwMDm7jwT0BF%2FrfDbsimk%2FXBquRptvPKb9jJsjHwzuqm4yMpJ3BfYiAzQU9aSVI&X-Amz-Signature=97ce42368a38da74c82d074af8ef9cdfa0d24b8776bf5dae38202eea14cbaa07&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
