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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUNWBA6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIC7%2Ff47obat4vx6Q5rxB6guGC3b4PwX22ygCSy49%2BJHdAiEAynJWryTsHULj67Q6uknFZkQwIZuvZhy5VYflCG8zRgsqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FKAj4wsRKi4HSbpSrcA86gpmaaubFQGMRuF%2FhN7pT%2FgGGgEthjJhqj0dnsTB7ZpYaFDm%2F9up24NYryLYeGp%2BGZh%2FZkkQEVBE07U3mr4xrwP7UHBdBBgY5z7kFFKUmKMlZq%2Ff3kk%2Fv9U7%2BTCoPsBYnZFbQEadCC2mJwKG%2B0Ky6KuKBwPOJNvzzc7FCD4T%2B9JGZpGNHtZ%2B8TAgHV9jAv4M842s%2FQ4qtGn3hwq3uj6jAA%2FDnOLWoqbjbX%2B828ZCt9CPPgPBgLu4Ieib8Vz7R4hQPQ0481anTR1hU7bLpFBWAGB6ubu9t0in1X0CmSjmPj3UcHNur7Ya3QrvwJDl0cz25etnQJSntG1dHgfgXysiuXYvfm8lhIk3xE7VcZdVeyhFxFjoN3l51uOPI6bCv1DI5duejZC4XEtGJ%2B0wswhldH5EuRU3jPxJfvp2rkF7zFjVj8h8A3bHtjGYB3nGGXwgwtOor95yLigdTuY%2BWJNqhRXRS3t7tG9WleoNz6FSnG4%2B%2BBFPOxeJDlZ5c7mH8HKjtE1VqHmX%2BVqexQ5PBluRQKNl8m%2F9LYLdV5lV2HuIu4Av6q98Qx6z5uE2t2OUWPRA%2Fg4PelwrM8p2PDKoOd9PCzpXUz1p1kGRFXZDhqBYsetHtK5OBCoWeDpS0CMJOj1b0GOqUBJKZd73%2F287%2B1%2FAQCKVfJRlKQDA3SQJfEQ3Y8n8BS7yC0JJDsQ2V6gykGeuYSDB2GY3GbAfpupIkQN0MJd%2FE5iLMLOZQ6fQ26Cc825%2FH5v29NqWmGzpGaD0joPB24rx%2BOexFLv1%2F6GaScEBZOSJrz2z1HDd2mIfSXYheLzyatKqBVURLbaXUz1WFxHhN%2BI06VnswiEXq1afppVVz2X%2BgNZ%2BzlN1SY&X-Amz-Signature=0d283513e1b5b49147f0a41da0cc9318693fa6bfbba8c78d8540ca432bd4aa9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUNWBA6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIC7%2Ff47obat4vx6Q5rxB6guGC3b4PwX22ygCSy49%2BJHdAiEAynJWryTsHULj67Q6uknFZkQwIZuvZhy5VYflCG8zRgsqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FKAj4wsRKi4HSbpSrcA86gpmaaubFQGMRuF%2FhN7pT%2FgGGgEthjJhqj0dnsTB7ZpYaFDm%2F9up24NYryLYeGp%2BGZh%2FZkkQEVBE07U3mr4xrwP7UHBdBBgY5z7kFFKUmKMlZq%2Ff3kk%2Fv9U7%2BTCoPsBYnZFbQEadCC2mJwKG%2B0Ky6KuKBwPOJNvzzc7FCD4T%2B9JGZpGNHtZ%2B8TAgHV9jAv4M842s%2FQ4qtGn3hwq3uj6jAA%2FDnOLWoqbjbX%2B828ZCt9CPPgPBgLu4Ieib8Vz7R4hQPQ0481anTR1hU7bLpFBWAGB6ubu9t0in1X0CmSjmPj3UcHNur7Ya3QrvwJDl0cz25etnQJSntG1dHgfgXysiuXYvfm8lhIk3xE7VcZdVeyhFxFjoN3l51uOPI6bCv1DI5duejZC4XEtGJ%2B0wswhldH5EuRU3jPxJfvp2rkF7zFjVj8h8A3bHtjGYB3nGGXwgwtOor95yLigdTuY%2BWJNqhRXRS3t7tG9WleoNz6FSnG4%2B%2BBFPOxeJDlZ5c7mH8HKjtE1VqHmX%2BVqexQ5PBluRQKNl8m%2F9LYLdV5lV2HuIu4Av6q98Qx6z5uE2t2OUWPRA%2Fg4PelwrM8p2PDKoOd9PCzpXUz1p1kGRFXZDhqBYsetHtK5OBCoWeDpS0CMJOj1b0GOqUBJKZd73%2F287%2B1%2FAQCKVfJRlKQDA3SQJfEQ3Y8n8BS7yC0JJDsQ2V6gykGeuYSDB2GY3GbAfpupIkQN0MJd%2FE5iLMLOZQ6fQ26Cc825%2FH5v29NqWmGzpGaD0joPB24rx%2BOexFLv1%2F6GaScEBZOSJrz2z1HDd2mIfSXYheLzyatKqBVURLbaXUz1WFxHhN%2BI06VnswiEXq1afppVVz2X%2BgNZ%2BzlN1SY&X-Amz-Signature=6d3ab0ee38fb2696df0cdf6692974eedee055fc6a22287df4397e5fe6802d15d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUNWBA6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIC7%2Ff47obat4vx6Q5rxB6guGC3b4PwX22ygCSy49%2BJHdAiEAynJWryTsHULj67Q6uknFZkQwIZuvZhy5VYflCG8zRgsqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FKAj4wsRKi4HSbpSrcA86gpmaaubFQGMRuF%2FhN7pT%2FgGGgEthjJhqj0dnsTB7ZpYaFDm%2F9up24NYryLYeGp%2BGZh%2FZkkQEVBE07U3mr4xrwP7UHBdBBgY5z7kFFKUmKMlZq%2Ff3kk%2Fv9U7%2BTCoPsBYnZFbQEadCC2mJwKG%2B0Ky6KuKBwPOJNvzzc7FCD4T%2B9JGZpGNHtZ%2B8TAgHV9jAv4M842s%2FQ4qtGn3hwq3uj6jAA%2FDnOLWoqbjbX%2B828ZCt9CPPgPBgLu4Ieib8Vz7R4hQPQ0481anTR1hU7bLpFBWAGB6ubu9t0in1X0CmSjmPj3UcHNur7Ya3QrvwJDl0cz25etnQJSntG1dHgfgXysiuXYvfm8lhIk3xE7VcZdVeyhFxFjoN3l51uOPI6bCv1DI5duejZC4XEtGJ%2B0wswhldH5EuRU3jPxJfvp2rkF7zFjVj8h8A3bHtjGYB3nGGXwgwtOor95yLigdTuY%2BWJNqhRXRS3t7tG9WleoNz6FSnG4%2B%2BBFPOxeJDlZ5c7mH8HKjtE1VqHmX%2BVqexQ5PBluRQKNl8m%2F9LYLdV5lV2HuIu4Av6q98Qx6z5uE2t2OUWPRA%2Fg4PelwrM8p2PDKoOd9PCzpXUz1p1kGRFXZDhqBYsetHtK5OBCoWeDpS0CMJOj1b0GOqUBJKZd73%2F287%2B1%2FAQCKVfJRlKQDA3SQJfEQ3Y8n8BS7yC0JJDsQ2V6gykGeuYSDB2GY3GbAfpupIkQN0MJd%2FE5iLMLOZQ6fQ26Cc825%2FH5v29NqWmGzpGaD0joPB24rx%2BOexFLv1%2F6GaScEBZOSJrz2z1HDd2mIfSXYheLzyatKqBVURLbaXUz1WFxHhN%2BI06VnswiEXq1afppVVz2X%2BgNZ%2BzlN1SY&X-Amz-Signature=8db91430c76fdd656c7a7da3016da4dbacd2c98cd4fa9f0a13faec2596251340&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUNWBA6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIC7%2Ff47obat4vx6Q5rxB6guGC3b4PwX22ygCSy49%2BJHdAiEAynJWryTsHULj67Q6uknFZkQwIZuvZhy5VYflCG8zRgsqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FKAj4wsRKi4HSbpSrcA86gpmaaubFQGMRuF%2FhN7pT%2FgGGgEthjJhqj0dnsTB7ZpYaFDm%2F9up24NYryLYeGp%2BGZh%2FZkkQEVBE07U3mr4xrwP7UHBdBBgY5z7kFFKUmKMlZq%2Ff3kk%2Fv9U7%2BTCoPsBYnZFbQEadCC2mJwKG%2B0Ky6KuKBwPOJNvzzc7FCD4T%2B9JGZpGNHtZ%2B8TAgHV9jAv4M842s%2FQ4qtGn3hwq3uj6jAA%2FDnOLWoqbjbX%2B828ZCt9CPPgPBgLu4Ieib8Vz7R4hQPQ0481anTR1hU7bLpFBWAGB6ubu9t0in1X0CmSjmPj3UcHNur7Ya3QrvwJDl0cz25etnQJSntG1dHgfgXysiuXYvfm8lhIk3xE7VcZdVeyhFxFjoN3l51uOPI6bCv1DI5duejZC4XEtGJ%2B0wswhldH5EuRU3jPxJfvp2rkF7zFjVj8h8A3bHtjGYB3nGGXwgwtOor95yLigdTuY%2BWJNqhRXRS3t7tG9WleoNz6FSnG4%2B%2BBFPOxeJDlZ5c7mH8HKjtE1VqHmX%2BVqexQ5PBluRQKNl8m%2F9LYLdV5lV2HuIu4Av6q98Qx6z5uE2t2OUWPRA%2Fg4PelwrM8p2PDKoOd9PCzpXUz1p1kGRFXZDhqBYsetHtK5OBCoWeDpS0CMJOj1b0GOqUBJKZd73%2F287%2B1%2FAQCKVfJRlKQDA3SQJfEQ3Y8n8BS7yC0JJDsQ2V6gykGeuYSDB2GY3GbAfpupIkQN0MJd%2FE5iLMLOZQ6fQ26Cc825%2FH5v29NqWmGzpGaD0joPB24rx%2BOexFLv1%2F6GaScEBZOSJrz2z1HDd2mIfSXYheLzyatKqBVURLbaXUz1WFxHhN%2BI06VnswiEXq1afppVVz2X%2BgNZ%2BzlN1SY&X-Amz-Signature=89ae3886392f11b930b19d38eae4c310a602e0321239b7d2b5799163791560c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUNWBA6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIC7%2Ff47obat4vx6Q5rxB6guGC3b4PwX22ygCSy49%2BJHdAiEAynJWryTsHULj67Q6uknFZkQwIZuvZhy5VYflCG8zRgsqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FKAj4wsRKi4HSbpSrcA86gpmaaubFQGMRuF%2FhN7pT%2FgGGgEthjJhqj0dnsTB7ZpYaFDm%2F9up24NYryLYeGp%2BGZh%2FZkkQEVBE07U3mr4xrwP7UHBdBBgY5z7kFFKUmKMlZq%2Ff3kk%2Fv9U7%2BTCoPsBYnZFbQEadCC2mJwKG%2B0Ky6KuKBwPOJNvzzc7FCD4T%2B9JGZpGNHtZ%2B8TAgHV9jAv4M842s%2FQ4qtGn3hwq3uj6jAA%2FDnOLWoqbjbX%2B828ZCt9CPPgPBgLu4Ieib8Vz7R4hQPQ0481anTR1hU7bLpFBWAGB6ubu9t0in1X0CmSjmPj3UcHNur7Ya3QrvwJDl0cz25etnQJSntG1dHgfgXysiuXYvfm8lhIk3xE7VcZdVeyhFxFjoN3l51uOPI6bCv1DI5duejZC4XEtGJ%2B0wswhldH5EuRU3jPxJfvp2rkF7zFjVj8h8A3bHtjGYB3nGGXwgwtOor95yLigdTuY%2BWJNqhRXRS3t7tG9WleoNz6FSnG4%2B%2BBFPOxeJDlZ5c7mH8HKjtE1VqHmX%2BVqexQ5PBluRQKNl8m%2F9LYLdV5lV2HuIu4Av6q98Qx6z5uE2t2OUWPRA%2Fg4PelwrM8p2PDKoOd9PCzpXUz1p1kGRFXZDhqBYsetHtK5OBCoWeDpS0CMJOj1b0GOqUBJKZd73%2F287%2B1%2FAQCKVfJRlKQDA3SQJfEQ3Y8n8BS7yC0JJDsQ2V6gykGeuYSDB2GY3GbAfpupIkQN0MJd%2FE5iLMLOZQ6fQ26Cc825%2FH5v29NqWmGzpGaD0joPB24rx%2BOexFLv1%2F6GaScEBZOSJrz2z1HDd2mIfSXYheLzyatKqBVURLbaXUz1WFxHhN%2BI06VnswiEXq1afppVVz2X%2BgNZ%2BzlN1SY&X-Amz-Signature=75fe00ce6f57b45fc79817a5f952a95b4491c038af4f271cf07c1c1d5fad800e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
