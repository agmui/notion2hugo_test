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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNNHQAT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bwb%2FUt7YIKWt6sLhvfazWM3mbz0GArUC8hnhdITXptAIgHSqR21sqOj7LoSPC2cVQs66W4tvoSYdTHrP%2BgelROpoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B0LXt9FBM0NYc1DSrcAzXMAkWEHdUnD7jdXR0FAlp29cxE6iak54ek%2FiKE0ivJdgJv6a57a2KPTsqE0IjFv7jfCxppLz3GhvQ7tm55C9MhV5ofFM1aN6ZvV5BSJ7wRlIXLoGtNGAwQG0hjUMxwWep2y1W43sp4AfyoQYXNymaKj%2FLcWCmOGqEL3%2FB4Jx3r51%2BsSbK9hC0%2Fd4ohCzHSe4MnUBu7ZKtLeeuGvIym4uWs6ImbrFC3OaULM%2FlPtKIkA0FK40dUmQ4IE1gDIzlpNNnvGza7KlFXcCYDaH1630QNi4%2BqNYjEuYaCtRMXDt9Z4CzbXXt784KF6fiolvcP%2BvQ4DKqTRxRwK584vIeLde1viVF8TtHatIF6UPWHx6FvsLPaz6DUOA9UZy4NZ8RLKmIJ4gzxidd3Jg0KgiW748q7DVfzPTkGcYD0DUS6v3a669AEMjM%2BJ5QxO%2BjoaIpq6haqNOuADFg5LNuqnQ0iKkYmw%2BlRQ6eLvvtavmF%2FZKfYG2iKqucY8zwJunhaqbMPOGgiCdV3LICM5ZqtFGeozvOBwnooQ0u10oh56dzG1DUrr6l4hst0LjgXOzcuRUraxyfmjTq1znr%2BDg0rdP6YVOqBJRVTT92dn7mOdxgLy5jM2Ut8kp0rByVf1TcCMPCOpL0GOqUBJnGtbEkypLPqtt7vx3EwdlggzhA7D1BPgpMeaQtgpxIW7%2FPIm%2FEbeE%2FNDw9abcnDvf8aeA7vv958EEwTUdcQ5wjPHpryKVxGM%2FgZDF9rg26TXqZLCb29jmTczQrEOpC%2B8Ky%2B4TdZ3j6oXbIrICgP5qYJiiksadGjpRVTUMflqe%2BNCantLw7BC%2F85sJXcWYU41%2B3VuxZwMl6B%2BYUQNrJfZNdhzTOB&X-Amz-Signature=3893576470e83c1488b13dbdeb3410b12c6bcef50c597104a29acc1383948521&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNNHQAT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bwb%2FUt7YIKWt6sLhvfazWM3mbz0GArUC8hnhdITXptAIgHSqR21sqOj7LoSPC2cVQs66W4tvoSYdTHrP%2BgelROpoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B0LXt9FBM0NYc1DSrcAzXMAkWEHdUnD7jdXR0FAlp29cxE6iak54ek%2FiKE0ivJdgJv6a57a2KPTsqE0IjFv7jfCxppLz3GhvQ7tm55C9MhV5ofFM1aN6ZvV5BSJ7wRlIXLoGtNGAwQG0hjUMxwWep2y1W43sp4AfyoQYXNymaKj%2FLcWCmOGqEL3%2FB4Jx3r51%2BsSbK9hC0%2Fd4ohCzHSe4MnUBu7ZKtLeeuGvIym4uWs6ImbrFC3OaULM%2FlPtKIkA0FK40dUmQ4IE1gDIzlpNNnvGza7KlFXcCYDaH1630QNi4%2BqNYjEuYaCtRMXDt9Z4CzbXXt784KF6fiolvcP%2BvQ4DKqTRxRwK584vIeLde1viVF8TtHatIF6UPWHx6FvsLPaz6DUOA9UZy4NZ8RLKmIJ4gzxidd3Jg0KgiW748q7DVfzPTkGcYD0DUS6v3a669AEMjM%2BJ5QxO%2BjoaIpq6haqNOuADFg5LNuqnQ0iKkYmw%2BlRQ6eLvvtavmF%2FZKfYG2iKqucY8zwJunhaqbMPOGgiCdV3LICM5ZqtFGeozvOBwnooQ0u10oh56dzG1DUrr6l4hst0LjgXOzcuRUraxyfmjTq1znr%2BDg0rdP6YVOqBJRVTT92dn7mOdxgLy5jM2Ut8kp0rByVf1TcCMPCOpL0GOqUBJnGtbEkypLPqtt7vx3EwdlggzhA7D1BPgpMeaQtgpxIW7%2FPIm%2FEbeE%2FNDw9abcnDvf8aeA7vv958EEwTUdcQ5wjPHpryKVxGM%2FgZDF9rg26TXqZLCb29jmTczQrEOpC%2B8Ky%2B4TdZ3j6oXbIrICgP5qYJiiksadGjpRVTUMflqe%2BNCantLw7BC%2F85sJXcWYU41%2B3VuxZwMl6B%2BYUQNrJfZNdhzTOB&X-Amz-Signature=5ba6c5c14948965e4419511ad728590739bf507d4c4761eac3c14f433d403cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNNHQAT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bwb%2FUt7YIKWt6sLhvfazWM3mbz0GArUC8hnhdITXptAIgHSqR21sqOj7LoSPC2cVQs66W4tvoSYdTHrP%2BgelROpoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B0LXt9FBM0NYc1DSrcAzXMAkWEHdUnD7jdXR0FAlp29cxE6iak54ek%2FiKE0ivJdgJv6a57a2KPTsqE0IjFv7jfCxppLz3GhvQ7tm55C9MhV5ofFM1aN6ZvV5BSJ7wRlIXLoGtNGAwQG0hjUMxwWep2y1W43sp4AfyoQYXNymaKj%2FLcWCmOGqEL3%2FB4Jx3r51%2BsSbK9hC0%2Fd4ohCzHSe4MnUBu7ZKtLeeuGvIym4uWs6ImbrFC3OaULM%2FlPtKIkA0FK40dUmQ4IE1gDIzlpNNnvGza7KlFXcCYDaH1630QNi4%2BqNYjEuYaCtRMXDt9Z4CzbXXt784KF6fiolvcP%2BvQ4DKqTRxRwK584vIeLde1viVF8TtHatIF6UPWHx6FvsLPaz6DUOA9UZy4NZ8RLKmIJ4gzxidd3Jg0KgiW748q7DVfzPTkGcYD0DUS6v3a669AEMjM%2BJ5QxO%2BjoaIpq6haqNOuADFg5LNuqnQ0iKkYmw%2BlRQ6eLvvtavmF%2FZKfYG2iKqucY8zwJunhaqbMPOGgiCdV3LICM5ZqtFGeozvOBwnooQ0u10oh56dzG1DUrr6l4hst0LjgXOzcuRUraxyfmjTq1znr%2BDg0rdP6YVOqBJRVTT92dn7mOdxgLy5jM2Ut8kp0rByVf1TcCMPCOpL0GOqUBJnGtbEkypLPqtt7vx3EwdlggzhA7D1BPgpMeaQtgpxIW7%2FPIm%2FEbeE%2FNDw9abcnDvf8aeA7vv958EEwTUdcQ5wjPHpryKVxGM%2FgZDF9rg26TXqZLCb29jmTczQrEOpC%2B8Ky%2B4TdZ3j6oXbIrICgP5qYJiiksadGjpRVTUMflqe%2BNCantLw7BC%2F85sJXcWYU41%2B3VuxZwMl6B%2BYUQNrJfZNdhzTOB&X-Amz-Signature=6efbd1d708196264b9c40807d2f41ff56725714cceb280f7e0700d73a7baf53a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNNHQAT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bwb%2FUt7YIKWt6sLhvfazWM3mbz0GArUC8hnhdITXptAIgHSqR21sqOj7LoSPC2cVQs66W4tvoSYdTHrP%2BgelROpoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B0LXt9FBM0NYc1DSrcAzXMAkWEHdUnD7jdXR0FAlp29cxE6iak54ek%2FiKE0ivJdgJv6a57a2KPTsqE0IjFv7jfCxppLz3GhvQ7tm55C9MhV5ofFM1aN6ZvV5BSJ7wRlIXLoGtNGAwQG0hjUMxwWep2y1W43sp4AfyoQYXNymaKj%2FLcWCmOGqEL3%2FB4Jx3r51%2BsSbK9hC0%2Fd4ohCzHSe4MnUBu7ZKtLeeuGvIym4uWs6ImbrFC3OaULM%2FlPtKIkA0FK40dUmQ4IE1gDIzlpNNnvGza7KlFXcCYDaH1630QNi4%2BqNYjEuYaCtRMXDt9Z4CzbXXt784KF6fiolvcP%2BvQ4DKqTRxRwK584vIeLde1viVF8TtHatIF6UPWHx6FvsLPaz6DUOA9UZy4NZ8RLKmIJ4gzxidd3Jg0KgiW748q7DVfzPTkGcYD0DUS6v3a669AEMjM%2BJ5QxO%2BjoaIpq6haqNOuADFg5LNuqnQ0iKkYmw%2BlRQ6eLvvtavmF%2FZKfYG2iKqucY8zwJunhaqbMPOGgiCdV3LICM5ZqtFGeozvOBwnooQ0u10oh56dzG1DUrr6l4hst0LjgXOzcuRUraxyfmjTq1znr%2BDg0rdP6YVOqBJRVTT92dn7mOdxgLy5jM2Ut8kp0rByVf1TcCMPCOpL0GOqUBJnGtbEkypLPqtt7vx3EwdlggzhA7D1BPgpMeaQtgpxIW7%2FPIm%2FEbeE%2FNDw9abcnDvf8aeA7vv958EEwTUdcQ5wjPHpryKVxGM%2FgZDF9rg26TXqZLCb29jmTczQrEOpC%2B8Ky%2B4TdZ3j6oXbIrICgP5qYJiiksadGjpRVTUMflqe%2BNCantLw7BC%2F85sJXcWYU41%2B3VuxZwMl6B%2BYUQNrJfZNdhzTOB&X-Amz-Signature=3d9de1ce4762d3ac70e46f2354abbbf95949750ea88cec47ca2ef9d48adc9166&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNNHQAT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bwb%2FUt7YIKWt6sLhvfazWM3mbz0GArUC8hnhdITXptAIgHSqR21sqOj7LoSPC2cVQs66W4tvoSYdTHrP%2BgelROpoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B0LXt9FBM0NYc1DSrcAzXMAkWEHdUnD7jdXR0FAlp29cxE6iak54ek%2FiKE0ivJdgJv6a57a2KPTsqE0IjFv7jfCxppLz3GhvQ7tm55C9MhV5ofFM1aN6ZvV5BSJ7wRlIXLoGtNGAwQG0hjUMxwWep2y1W43sp4AfyoQYXNymaKj%2FLcWCmOGqEL3%2FB4Jx3r51%2BsSbK9hC0%2Fd4ohCzHSe4MnUBu7ZKtLeeuGvIym4uWs6ImbrFC3OaULM%2FlPtKIkA0FK40dUmQ4IE1gDIzlpNNnvGza7KlFXcCYDaH1630QNi4%2BqNYjEuYaCtRMXDt9Z4CzbXXt784KF6fiolvcP%2BvQ4DKqTRxRwK584vIeLde1viVF8TtHatIF6UPWHx6FvsLPaz6DUOA9UZy4NZ8RLKmIJ4gzxidd3Jg0KgiW748q7DVfzPTkGcYD0DUS6v3a669AEMjM%2BJ5QxO%2BjoaIpq6haqNOuADFg5LNuqnQ0iKkYmw%2BlRQ6eLvvtavmF%2FZKfYG2iKqucY8zwJunhaqbMPOGgiCdV3LICM5ZqtFGeozvOBwnooQ0u10oh56dzG1DUrr6l4hst0LjgXOzcuRUraxyfmjTq1znr%2BDg0rdP6YVOqBJRVTT92dn7mOdxgLy5jM2Ut8kp0rByVf1TcCMPCOpL0GOqUBJnGtbEkypLPqtt7vx3EwdlggzhA7D1BPgpMeaQtgpxIW7%2FPIm%2FEbeE%2FNDw9abcnDvf8aeA7vv958EEwTUdcQ5wjPHpryKVxGM%2FgZDF9rg26TXqZLCb29jmTczQrEOpC%2B8Ky%2B4TdZ3j6oXbIrICgP5qYJiiksadGjpRVTUMflqe%2BNCantLw7BC%2F85sJXcWYU41%2B3VuxZwMl6B%2BYUQNrJfZNdhzTOB&X-Amz-Signature=20f50832ff81bed2d1a03a67993975d1b5b7b98459a88bac076842fdd9233f97&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
