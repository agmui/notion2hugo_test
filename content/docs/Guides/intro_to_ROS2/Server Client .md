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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPOGQQI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3N3JA0u3%2F16EtpL2ACPxvhRXjPwYoTWOejSmtNTn0BAIhAPUCZj8gtZ%2FWlTiKQj3qQMm254Eqeyrroy84SHNOqbujKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMkPNee%2FXcCMHtvKMq3APVikSXoTP8f2j2JliLXVCH1D4G01tWZABft3OahKIOZdJ5XEEmjQflE%2FI5dj5j4vxmYCQKJrdlbVmrJB7pO6dQmpkwhY7hKOIaoS3Lxcyay4oX5ArHu%2Fz0vV%2F5tt%2FCv5fQ%2FzPW8h3tAG%2Fy6GwC6YVI7NZvN8d7V0q2kz5neEV3bxNAp9inzJNyWxHX60ZUxZe%2F9mhyyFLSG7UkyRl5u7vl8CMmOhhijBM%2B40H2Qs%2FfROmkwYhEtYJGL0mZIx1pv4M3ZpYAc9FKXzYxAdifLoNI4Is53OWFnJXOzGyjcXEcNhtjYgbd6XZD9QBYEZq1kHML2x%2FddQ1jiuzpCZttcxZmXICLiy9tAuGZmuenbQAQpKRDxJ%2BkJT%2BPaqLr2a4mJyUv5urNH%2B2GCy4ndHNbfQ8%2FYfmtyU7wZpnk9VGVHeHTV2c6x%2Fhn3BLTj6FP6Bi5qdTQy4BzYRWyw4ME4Rb9sWN%2Bm%2F3n05SWSr5H%2BzKtVYe023g6BCXjP0pjmOjglDKVazgMuM8iALfgy0NQranXwDXQg4dL%2Fbg3sn%2BB3u8dqnwN1JmkoNi%2B0lTxr4tEHoyuUmmVuddGOzk%2BzTeEbsj9cHpofnPpsubVf5CaniuYl1f0QDe%2FGhJtrhTV9wxPrzCUrsTABjqkAUdC%2BzsfB3haKe1qZ6avPpIyztmpyXmZJ%2FAQCF%2Fs3e7KXzyShiIfbNeFmatIqMceutLb7dpExQc7MEEMWOfeQbquCTO%2FBvS70XETJKlwEmF8n6hANKxa49g4wGnJ7xLYN4OdkWTS1Z%2FF1g34FQ4duligGwZOnk0GVPtjQSlptNMQI742T2kfQjuCfy83%2Fz%2FfLsBbS3%2FwmdZkN8u6AFY698zWysvm&X-Amz-Signature=a8129930c22a0c15c26f6de3d0310bdb0e460eab55f33a6d1f85e94248e69a76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPOGQQI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3N3JA0u3%2F16EtpL2ACPxvhRXjPwYoTWOejSmtNTn0BAIhAPUCZj8gtZ%2FWlTiKQj3qQMm254Eqeyrroy84SHNOqbujKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMkPNee%2FXcCMHtvKMq3APVikSXoTP8f2j2JliLXVCH1D4G01tWZABft3OahKIOZdJ5XEEmjQflE%2FI5dj5j4vxmYCQKJrdlbVmrJB7pO6dQmpkwhY7hKOIaoS3Lxcyay4oX5ArHu%2Fz0vV%2F5tt%2FCv5fQ%2FzPW8h3tAG%2Fy6GwC6YVI7NZvN8d7V0q2kz5neEV3bxNAp9inzJNyWxHX60ZUxZe%2F9mhyyFLSG7UkyRl5u7vl8CMmOhhijBM%2B40H2Qs%2FfROmkwYhEtYJGL0mZIx1pv4M3ZpYAc9FKXzYxAdifLoNI4Is53OWFnJXOzGyjcXEcNhtjYgbd6XZD9QBYEZq1kHML2x%2FddQ1jiuzpCZttcxZmXICLiy9tAuGZmuenbQAQpKRDxJ%2BkJT%2BPaqLr2a4mJyUv5urNH%2B2GCy4ndHNbfQ8%2FYfmtyU7wZpnk9VGVHeHTV2c6x%2Fhn3BLTj6FP6Bi5qdTQy4BzYRWyw4ME4Rb9sWN%2Bm%2F3n05SWSr5H%2BzKtVYe023g6BCXjP0pjmOjglDKVazgMuM8iALfgy0NQranXwDXQg4dL%2Fbg3sn%2BB3u8dqnwN1JmkoNi%2B0lTxr4tEHoyuUmmVuddGOzk%2BzTeEbsj9cHpofnPpsubVf5CaniuYl1f0QDe%2FGhJtrhTV9wxPrzCUrsTABjqkAUdC%2BzsfB3haKe1qZ6avPpIyztmpyXmZJ%2FAQCF%2Fs3e7KXzyShiIfbNeFmatIqMceutLb7dpExQc7MEEMWOfeQbquCTO%2FBvS70XETJKlwEmF8n6hANKxa49g4wGnJ7xLYN4OdkWTS1Z%2FF1g34FQ4duligGwZOnk0GVPtjQSlptNMQI742T2kfQjuCfy83%2Fz%2FfLsBbS3%2FwmdZkN8u6AFY698zWysvm&X-Amz-Signature=c14b7a0fcb3f58a891803db5cb39a1efb82686e6bf9c47dd10e9b1e18486de76&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPOGQQI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3N3JA0u3%2F16EtpL2ACPxvhRXjPwYoTWOejSmtNTn0BAIhAPUCZj8gtZ%2FWlTiKQj3qQMm254Eqeyrroy84SHNOqbujKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMkPNee%2FXcCMHtvKMq3APVikSXoTP8f2j2JliLXVCH1D4G01tWZABft3OahKIOZdJ5XEEmjQflE%2FI5dj5j4vxmYCQKJrdlbVmrJB7pO6dQmpkwhY7hKOIaoS3Lxcyay4oX5ArHu%2Fz0vV%2F5tt%2FCv5fQ%2FzPW8h3tAG%2Fy6GwC6YVI7NZvN8d7V0q2kz5neEV3bxNAp9inzJNyWxHX60ZUxZe%2F9mhyyFLSG7UkyRl5u7vl8CMmOhhijBM%2B40H2Qs%2FfROmkwYhEtYJGL0mZIx1pv4M3ZpYAc9FKXzYxAdifLoNI4Is53OWFnJXOzGyjcXEcNhtjYgbd6XZD9QBYEZq1kHML2x%2FddQ1jiuzpCZttcxZmXICLiy9tAuGZmuenbQAQpKRDxJ%2BkJT%2BPaqLr2a4mJyUv5urNH%2B2GCy4ndHNbfQ8%2FYfmtyU7wZpnk9VGVHeHTV2c6x%2Fhn3BLTj6FP6Bi5qdTQy4BzYRWyw4ME4Rb9sWN%2Bm%2F3n05SWSr5H%2BzKtVYe023g6BCXjP0pjmOjglDKVazgMuM8iALfgy0NQranXwDXQg4dL%2Fbg3sn%2BB3u8dqnwN1JmkoNi%2B0lTxr4tEHoyuUmmVuddGOzk%2BzTeEbsj9cHpofnPpsubVf5CaniuYl1f0QDe%2FGhJtrhTV9wxPrzCUrsTABjqkAUdC%2BzsfB3haKe1qZ6avPpIyztmpyXmZJ%2FAQCF%2Fs3e7KXzyShiIfbNeFmatIqMceutLb7dpExQc7MEEMWOfeQbquCTO%2FBvS70XETJKlwEmF8n6hANKxa49g4wGnJ7xLYN4OdkWTS1Z%2FF1g34FQ4duligGwZOnk0GVPtjQSlptNMQI742T2kfQjuCfy83%2Fz%2FfLsBbS3%2FwmdZkN8u6AFY698zWysvm&X-Amz-Signature=687dc73e0cef32040486a40d603fb6babdf350ba1786948eafd7f7f8ce94aa72&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPOGQQI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3N3JA0u3%2F16EtpL2ACPxvhRXjPwYoTWOejSmtNTn0BAIhAPUCZj8gtZ%2FWlTiKQj3qQMm254Eqeyrroy84SHNOqbujKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMkPNee%2FXcCMHtvKMq3APVikSXoTP8f2j2JliLXVCH1D4G01tWZABft3OahKIOZdJ5XEEmjQflE%2FI5dj5j4vxmYCQKJrdlbVmrJB7pO6dQmpkwhY7hKOIaoS3Lxcyay4oX5ArHu%2Fz0vV%2F5tt%2FCv5fQ%2FzPW8h3tAG%2Fy6GwC6YVI7NZvN8d7V0q2kz5neEV3bxNAp9inzJNyWxHX60ZUxZe%2F9mhyyFLSG7UkyRl5u7vl8CMmOhhijBM%2B40H2Qs%2FfROmkwYhEtYJGL0mZIx1pv4M3ZpYAc9FKXzYxAdifLoNI4Is53OWFnJXOzGyjcXEcNhtjYgbd6XZD9QBYEZq1kHML2x%2FddQ1jiuzpCZttcxZmXICLiy9tAuGZmuenbQAQpKRDxJ%2BkJT%2BPaqLr2a4mJyUv5urNH%2B2GCy4ndHNbfQ8%2FYfmtyU7wZpnk9VGVHeHTV2c6x%2Fhn3BLTj6FP6Bi5qdTQy4BzYRWyw4ME4Rb9sWN%2Bm%2F3n05SWSr5H%2BzKtVYe023g6BCXjP0pjmOjglDKVazgMuM8iALfgy0NQranXwDXQg4dL%2Fbg3sn%2BB3u8dqnwN1JmkoNi%2B0lTxr4tEHoyuUmmVuddGOzk%2BzTeEbsj9cHpofnPpsubVf5CaniuYl1f0QDe%2FGhJtrhTV9wxPrzCUrsTABjqkAUdC%2BzsfB3haKe1qZ6avPpIyztmpyXmZJ%2FAQCF%2Fs3e7KXzyShiIfbNeFmatIqMceutLb7dpExQc7MEEMWOfeQbquCTO%2FBvS70XETJKlwEmF8n6hANKxa49g4wGnJ7xLYN4OdkWTS1Z%2FF1g34FQ4duligGwZOnk0GVPtjQSlptNMQI742T2kfQjuCfy83%2Fz%2FfLsBbS3%2FwmdZkN8u6AFY698zWysvm&X-Amz-Signature=e9628ed27fbd066d9e136406d30080d35471f6d2992ad0501b2ffbf8df2db470&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPOGQQI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3N3JA0u3%2F16EtpL2ACPxvhRXjPwYoTWOejSmtNTn0BAIhAPUCZj8gtZ%2FWlTiKQj3qQMm254Eqeyrroy84SHNOqbujKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMkPNee%2FXcCMHtvKMq3APVikSXoTP8f2j2JliLXVCH1D4G01tWZABft3OahKIOZdJ5XEEmjQflE%2FI5dj5j4vxmYCQKJrdlbVmrJB7pO6dQmpkwhY7hKOIaoS3Lxcyay4oX5ArHu%2Fz0vV%2F5tt%2FCv5fQ%2FzPW8h3tAG%2Fy6GwC6YVI7NZvN8d7V0q2kz5neEV3bxNAp9inzJNyWxHX60ZUxZe%2F9mhyyFLSG7UkyRl5u7vl8CMmOhhijBM%2B40H2Qs%2FfROmkwYhEtYJGL0mZIx1pv4M3ZpYAc9FKXzYxAdifLoNI4Is53OWFnJXOzGyjcXEcNhtjYgbd6XZD9QBYEZq1kHML2x%2FddQ1jiuzpCZttcxZmXICLiy9tAuGZmuenbQAQpKRDxJ%2BkJT%2BPaqLr2a4mJyUv5urNH%2B2GCy4ndHNbfQ8%2FYfmtyU7wZpnk9VGVHeHTV2c6x%2Fhn3BLTj6FP6Bi5qdTQy4BzYRWyw4ME4Rb9sWN%2Bm%2F3n05SWSr5H%2BzKtVYe023g6BCXjP0pjmOjglDKVazgMuM8iALfgy0NQranXwDXQg4dL%2Fbg3sn%2BB3u8dqnwN1JmkoNi%2B0lTxr4tEHoyuUmmVuddGOzk%2BzTeEbsj9cHpofnPpsubVf5CaniuYl1f0QDe%2FGhJtrhTV9wxPrzCUrsTABjqkAUdC%2BzsfB3haKe1qZ6avPpIyztmpyXmZJ%2FAQCF%2Fs3e7KXzyShiIfbNeFmatIqMceutLb7dpExQc7MEEMWOfeQbquCTO%2FBvS70XETJKlwEmF8n6hANKxa49g4wGnJ7xLYN4OdkWTS1Z%2FF1g34FQ4duligGwZOnk0GVPtjQSlptNMQI742T2kfQjuCfy83%2Fz%2FfLsBbS3%2FwmdZkN8u6AFY698zWysvm&X-Amz-Signature=d67c07d1144265dc2c8e422f0802f01ad0f9a2e008043869a412d2e5b5323cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
