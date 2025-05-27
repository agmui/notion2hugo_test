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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHGN3OB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCduuR0yHosLNssOIcZlDDhEuyrsXrXKcaJMRosfotNawIhAPESWpmZtYNflekLsnOJ4QQNQrAbgbONX6TPHEVBGJzkKv8DCFYQABoMNjM3NDIzMTgzODA1IgzPlzCugH2Wid2efQQq3AMn5TsiQsUceVcFZ99yD1DISxCbf3sOk5t9RHQfXS7dRvyT8UiG%2BssoWDovz%2BMKPifq56S1OK6ycXmSuaYB2O7tL4rM5P%2BomrJfJmCnTguPHlx13vX%2FU7T4834Z1KRFtTj18Lw6%2BfkVsw0owcnQH23Ga0r6ZO25QIDT3wBud1EPGwpC4p11fDnLSggKZ7C66K9nnR6LlNQz8IPa45w35wuYQBwR2BcL3%2FqP8W6kIMrYpuHB6voqteSwWxuY2HNoKTglNu4c0zZt05WM9BQz5q6yqNuigbhHo%2F107Rp2fEHaIyfpR8nOEasWGk0Ubo%2FBITyQX3jblS%2BavmB8dyvI56tDsWwNKz9oK3CIVcMTimohD4tBiOX5fm8%2FpCcOM6aXv68hdNct6xfvQO4nZpPy8JT8avr3SSyHHNwXKJ7r41TUdZvDpgH2tdIzBDYt%2BcHSgUWIUACpt4r%2B8kzFYxaTkm7I3jqBX2SPeVrsAZlX%2Fv%2Bk%2FKyPT%2F6UF1UJvfx3FZYizpuCe1AKC06RY73dY%2Bua%2FK%2FoDKYlpDyXAqEGEbMO9EzCvJ%2FsUVeNlUJWStbjge7p0O5MuANet8Q57UCRdwVVBdMRmyzz3%2BguXng4pVOOl%2BHu87YZtdzTWvcCquwF0jDlkNXBBjqkARCVZfuMs8%2BjN0O%2BV6PUObFcEK2VyfdoGxKay5rusI0E2R1IK9ZPgLvFOySnbhJ%2FG7qbZL9GAutV7UZZEFOYmQGA2h%2Bfs2kKkIQm7L2Xsd1jqxMKo2fZ%2FEH1DvKFwoA67P%2BRjlUU3mduzAu%2B6KJUCT3nfr5Bib7D%2BQ6DzRcHnkcoCX3x691qH76YAeQaLJk3xovRZEEp8ro8odbjl%2BbgjeweXdC3&X-Amz-Signature=a86f2b84d9ae78e63e813404bada915dbc08d8ab9b2eafea923b39e2a98d99ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHGN3OB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCduuR0yHosLNssOIcZlDDhEuyrsXrXKcaJMRosfotNawIhAPESWpmZtYNflekLsnOJ4QQNQrAbgbONX6TPHEVBGJzkKv8DCFYQABoMNjM3NDIzMTgzODA1IgzPlzCugH2Wid2efQQq3AMn5TsiQsUceVcFZ99yD1DISxCbf3sOk5t9RHQfXS7dRvyT8UiG%2BssoWDovz%2BMKPifq56S1OK6ycXmSuaYB2O7tL4rM5P%2BomrJfJmCnTguPHlx13vX%2FU7T4834Z1KRFtTj18Lw6%2BfkVsw0owcnQH23Ga0r6ZO25QIDT3wBud1EPGwpC4p11fDnLSggKZ7C66K9nnR6LlNQz8IPa45w35wuYQBwR2BcL3%2FqP8W6kIMrYpuHB6voqteSwWxuY2HNoKTglNu4c0zZt05WM9BQz5q6yqNuigbhHo%2F107Rp2fEHaIyfpR8nOEasWGk0Ubo%2FBITyQX3jblS%2BavmB8dyvI56tDsWwNKz9oK3CIVcMTimohD4tBiOX5fm8%2FpCcOM6aXv68hdNct6xfvQO4nZpPy8JT8avr3SSyHHNwXKJ7r41TUdZvDpgH2tdIzBDYt%2BcHSgUWIUACpt4r%2B8kzFYxaTkm7I3jqBX2SPeVrsAZlX%2Fv%2Bk%2FKyPT%2F6UF1UJvfx3FZYizpuCe1AKC06RY73dY%2Bua%2FK%2FoDKYlpDyXAqEGEbMO9EzCvJ%2FsUVeNlUJWStbjge7p0O5MuANet8Q57UCRdwVVBdMRmyzz3%2BguXng4pVOOl%2BHu87YZtdzTWvcCquwF0jDlkNXBBjqkARCVZfuMs8%2BjN0O%2BV6PUObFcEK2VyfdoGxKay5rusI0E2R1IK9ZPgLvFOySnbhJ%2FG7qbZL9GAutV7UZZEFOYmQGA2h%2Bfs2kKkIQm7L2Xsd1jqxMKo2fZ%2FEH1DvKFwoA67P%2BRjlUU3mduzAu%2B6KJUCT3nfr5Bib7D%2BQ6DzRcHnkcoCX3x691qH76YAeQaLJk3xovRZEEp8ro8odbjl%2BbgjeweXdC3&X-Amz-Signature=8acff19352cf24b1e33e58d253a72e8921dc6ee0dbaccdbbb3edcaba0d1b3cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHGN3OB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCduuR0yHosLNssOIcZlDDhEuyrsXrXKcaJMRosfotNawIhAPESWpmZtYNflekLsnOJ4QQNQrAbgbONX6TPHEVBGJzkKv8DCFYQABoMNjM3NDIzMTgzODA1IgzPlzCugH2Wid2efQQq3AMn5TsiQsUceVcFZ99yD1DISxCbf3sOk5t9RHQfXS7dRvyT8UiG%2BssoWDovz%2BMKPifq56S1OK6ycXmSuaYB2O7tL4rM5P%2BomrJfJmCnTguPHlx13vX%2FU7T4834Z1KRFtTj18Lw6%2BfkVsw0owcnQH23Ga0r6ZO25QIDT3wBud1EPGwpC4p11fDnLSggKZ7C66K9nnR6LlNQz8IPa45w35wuYQBwR2BcL3%2FqP8W6kIMrYpuHB6voqteSwWxuY2HNoKTglNu4c0zZt05WM9BQz5q6yqNuigbhHo%2F107Rp2fEHaIyfpR8nOEasWGk0Ubo%2FBITyQX3jblS%2BavmB8dyvI56tDsWwNKz9oK3CIVcMTimohD4tBiOX5fm8%2FpCcOM6aXv68hdNct6xfvQO4nZpPy8JT8avr3SSyHHNwXKJ7r41TUdZvDpgH2tdIzBDYt%2BcHSgUWIUACpt4r%2B8kzFYxaTkm7I3jqBX2SPeVrsAZlX%2Fv%2Bk%2FKyPT%2F6UF1UJvfx3FZYizpuCe1AKC06RY73dY%2Bua%2FK%2FoDKYlpDyXAqEGEbMO9EzCvJ%2FsUVeNlUJWStbjge7p0O5MuANet8Q57UCRdwVVBdMRmyzz3%2BguXng4pVOOl%2BHu87YZtdzTWvcCquwF0jDlkNXBBjqkARCVZfuMs8%2BjN0O%2BV6PUObFcEK2VyfdoGxKay5rusI0E2R1IK9ZPgLvFOySnbhJ%2FG7qbZL9GAutV7UZZEFOYmQGA2h%2Bfs2kKkIQm7L2Xsd1jqxMKo2fZ%2FEH1DvKFwoA67P%2BRjlUU3mduzAu%2B6KJUCT3nfr5Bib7D%2BQ6DzRcHnkcoCX3x691qH76YAeQaLJk3xovRZEEp8ro8odbjl%2BbgjeweXdC3&X-Amz-Signature=41ba9aecce7a7bee32e29068ed434f1cfe5f808daff5c66b6954d4796faf9031&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHGN3OB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCduuR0yHosLNssOIcZlDDhEuyrsXrXKcaJMRosfotNawIhAPESWpmZtYNflekLsnOJ4QQNQrAbgbONX6TPHEVBGJzkKv8DCFYQABoMNjM3NDIzMTgzODA1IgzPlzCugH2Wid2efQQq3AMn5TsiQsUceVcFZ99yD1DISxCbf3sOk5t9RHQfXS7dRvyT8UiG%2BssoWDovz%2BMKPifq56S1OK6ycXmSuaYB2O7tL4rM5P%2BomrJfJmCnTguPHlx13vX%2FU7T4834Z1KRFtTj18Lw6%2BfkVsw0owcnQH23Ga0r6ZO25QIDT3wBud1EPGwpC4p11fDnLSggKZ7C66K9nnR6LlNQz8IPa45w35wuYQBwR2BcL3%2FqP8W6kIMrYpuHB6voqteSwWxuY2HNoKTglNu4c0zZt05WM9BQz5q6yqNuigbhHo%2F107Rp2fEHaIyfpR8nOEasWGk0Ubo%2FBITyQX3jblS%2BavmB8dyvI56tDsWwNKz9oK3CIVcMTimohD4tBiOX5fm8%2FpCcOM6aXv68hdNct6xfvQO4nZpPy8JT8avr3SSyHHNwXKJ7r41TUdZvDpgH2tdIzBDYt%2BcHSgUWIUACpt4r%2B8kzFYxaTkm7I3jqBX2SPeVrsAZlX%2Fv%2Bk%2FKyPT%2F6UF1UJvfx3FZYizpuCe1AKC06RY73dY%2Bua%2FK%2FoDKYlpDyXAqEGEbMO9EzCvJ%2FsUVeNlUJWStbjge7p0O5MuANet8Q57UCRdwVVBdMRmyzz3%2BguXng4pVOOl%2BHu87YZtdzTWvcCquwF0jDlkNXBBjqkARCVZfuMs8%2BjN0O%2BV6PUObFcEK2VyfdoGxKay5rusI0E2R1IK9ZPgLvFOySnbhJ%2FG7qbZL9GAutV7UZZEFOYmQGA2h%2Bfs2kKkIQm7L2Xsd1jqxMKo2fZ%2FEH1DvKFwoA67P%2BRjlUU3mduzAu%2B6KJUCT3nfr5Bib7D%2BQ6DzRcHnkcoCX3x691qH76YAeQaLJk3xovRZEEp8ro8odbjl%2BbgjeweXdC3&X-Amz-Signature=93ccb20b7890cabb41736934d2c2fabf68d8612c0aee1b543ae392983c9abc4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHGN3OB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCduuR0yHosLNssOIcZlDDhEuyrsXrXKcaJMRosfotNawIhAPESWpmZtYNflekLsnOJ4QQNQrAbgbONX6TPHEVBGJzkKv8DCFYQABoMNjM3NDIzMTgzODA1IgzPlzCugH2Wid2efQQq3AMn5TsiQsUceVcFZ99yD1DISxCbf3sOk5t9RHQfXS7dRvyT8UiG%2BssoWDovz%2BMKPifq56S1OK6ycXmSuaYB2O7tL4rM5P%2BomrJfJmCnTguPHlx13vX%2FU7T4834Z1KRFtTj18Lw6%2BfkVsw0owcnQH23Ga0r6ZO25QIDT3wBud1EPGwpC4p11fDnLSggKZ7C66K9nnR6LlNQz8IPa45w35wuYQBwR2BcL3%2FqP8W6kIMrYpuHB6voqteSwWxuY2HNoKTglNu4c0zZt05WM9BQz5q6yqNuigbhHo%2F107Rp2fEHaIyfpR8nOEasWGk0Ubo%2FBITyQX3jblS%2BavmB8dyvI56tDsWwNKz9oK3CIVcMTimohD4tBiOX5fm8%2FpCcOM6aXv68hdNct6xfvQO4nZpPy8JT8avr3SSyHHNwXKJ7r41TUdZvDpgH2tdIzBDYt%2BcHSgUWIUACpt4r%2B8kzFYxaTkm7I3jqBX2SPeVrsAZlX%2Fv%2Bk%2FKyPT%2F6UF1UJvfx3FZYizpuCe1AKC06RY73dY%2Bua%2FK%2FoDKYlpDyXAqEGEbMO9EzCvJ%2FsUVeNlUJWStbjge7p0O5MuANet8Q57UCRdwVVBdMRmyzz3%2BguXng4pVOOl%2BHu87YZtdzTWvcCquwF0jDlkNXBBjqkARCVZfuMs8%2BjN0O%2BV6PUObFcEK2VyfdoGxKay5rusI0E2R1IK9ZPgLvFOySnbhJ%2FG7qbZL9GAutV7UZZEFOYmQGA2h%2Bfs2kKkIQm7L2Xsd1jqxMKo2fZ%2FEH1DvKFwoA67P%2BRjlUU3mduzAu%2B6KJUCT3nfr5Bib7D%2BQ6DzRcHnkcoCX3x691qH76YAeQaLJk3xovRZEEp8ro8odbjl%2BbgjeweXdC3&X-Amz-Signature=d794b78423ba292b11cff3b8e22dee1acb7d70406a86f52b2a02e4ea8fa1cffb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
