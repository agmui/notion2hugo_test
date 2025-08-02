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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375HCR6G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqz60cPV8Oloaa8BFRqAstUk4R3350B3tow7n1WOk8AIhAMrowFis2V6BSpo8OYRj7BNx0eHHS%2BSCwzWMum11U8nLKv8DCBAQABoMNjM3NDIzMTgzODA1IgxLXDWPpBV3z5fpzvQq3AN8Y%2Bvphnq9dUxAboSEn7RdbDpHvq3PsD%2FEblBHarlD3xDy5Wg6kkohwCJ1X3z2mE5dTUKyKaCQL6%2F9v6zuMCgMVDUwi6q6PkwuMJx4EzaQUrj88Bqrk5J4wlapyFj%2FXxFthJlfRdIqGHWBqed0EZ3G4aCr4zGTGzISUzHOJdnqy2oq25Qv72hrDz7ae5bm2DikwPQjSA8NuXnkdgGcFmgT%2FCg%2BF%2BOcvyd8IUsWTtMqOMWPLm4PCcX4FHBi70dOuegDZggyUAioI3MXr39bCG41jsUM7sYlIzyJbGfWN%2FgxD9OX3%2BXJtnCZrLL20SCYeEYFXRCmeTYWQsrjfl8MmiKf873m%2BUXp%2BC39dUbHWQyI8eGQPk13vpcGtT9j8cTnfC4acxDIPReyGTxRuWC2ij7cJCSl8kfPpA2EYcnjusMArBWbhw0CTNwNMmNLa3iFODEKepzrQjLRmDcG5qN0JU4HwyuMwdMLfOiBdNelERY4pWOoEUmvGKwmm1PGuqoCeSrb7qRrqTIeUIZFRHwbrpM4gRJHQ94ILvolPBYMsuRrUb31M4Q9%2FJpq5jmM%2BNb9jLXF0JFjMNbqBfN0jvkXLaMJh1%2FCp6mo0X5deugLmsHMctMj62BLNGYNtJDQaDCV8LbEBjqkAbWHd3opGOhQ83GwQ4olc2lOz%2FIfe6kjRc7yPLugQvi50xnvL578qOzokKO8FaTz5tfv23XoJ6sLi3gCk0IdVjTIb2qq%2B9mfakZkh8WM9xSRv5GwoB00%2FLWZGgVxA2I3MBN4bmHIYWuQmJwg8XkMxA2nGWUjqXTsP8Yq4LkqMOovqVKT6%2FUY%2FM2J9w0lDzwvI1mNDwVAjfn3efzhTlHxk5BZe5HN&X-Amz-Signature=3d32c64715385dc5b8c63fcc84d4de39126abf1a5b4ab76ba398345e2588c91d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375HCR6G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqz60cPV8Oloaa8BFRqAstUk4R3350B3tow7n1WOk8AIhAMrowFis2V6BSpo8OYRj7BNx0eHHS%2BSCwzWMum11U8nLKv8DCBAQABoMNjM3NDIzMTgzODA1IgxLXDWPpBV3z5fpzvQq3AN8Y%2Bvphnq9dUxAboSEn7RdbDpHvq3PsD%2FEblBHarlD3xDy5Wg6kkohwCJ1X3z2mE5dTUKyKaCQL6%2F9v6zuMCgMVDUwi6q6PkwuMJx4EzaQUrj88Bqrk5J4wlapyFj%2FXxFthJlfRdIqGHWBqed0EZ3G4aCr4zGTGzISUzHOJdnqy2oq25Qv72hrDz7ae5bm2DikwPQjSA8NuXnkdgGcFmgT%2FCg%2BF%2BOcvyd8IUsWTtMqOMWPLm4PCcX4FHBi70dOuegDZggyUAioI3MXr39bCG41jsUM7sYlIzyJbGfWN%2FgxD9OX3%2BXJtnCZrLL20SCYeEYFXRCmeTYWQsrjfl8MmiKf873m%2BUXp%2BC39dUbHWQyI8eGQPk13vpcGtT9j8cTnfC4acxDIPReyGTxRuWC2ij7cJCSl8kfPpA2EYcnjusMArBWbhw0CTNwNMmNLa3iFODEKepzrQjLRmDcG5qN0JU4HwyuMwdMLfOiBdNelERY4pWOoEUmvGKwmm1PGuqoCeSrb7qRrqTIeUIZFRHwbrpM4gRJHQ94ILvolPBYMsuRrUb31M4Q9%2FJpq5jmM%2BNb9jLXF0JFjMNbqBfN0jvkXLaMJh1%2FCp6mo0X5deugLmsHMctMj62BLNGYNtJDQaDCV8LbEBjqkAbWHd3opGOhQ83GwQ4olc2lOz%2FIfe6kjRc7yPLugQvi50xnvL578qOzokKO8FaTz5tfv23XoJ6sLi3gCk0IdVjTIb2qq%2B9mfakZkh8WM9xSRv5GwoB00%2FLWZGgVxA2I3MBN4bmHIYWuQmJwg8XkMxA2nGWUjqXTsP8Yq4LkqMOovqVKT6%2FUY%2FM2J9w0lDzwvI1mNDwVAjfn3efzhTlHxk5BZe5HN&X-Amz-Signature=d4e97d94c4c7f86aec8b6bc4dc09cacc264cc3969f5d7bf68050950876cce720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375HCR6G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqz60cPV8Oloaa8BFRqAstUk4R3350B3tow7n1WOk8AIhAMrowFis2V6BSpo8OYRj7BNx0eHHS%2BSCwzWMum11U8nLKv8DCBAQABoMNjM3NDIzMTgzODA1IgxLXDWPpBV3z5fpzvQq3AN8Y%2Bvphnq9dUxAboSEn7RdbDpHvq3PsD%2FEblBHarlD3xDy5Wg6kkohwCJ1X3z2mE5dTUKyKaCQL6%2F9v6zuMCgMVDUwi6q6PkwuMJx4EzaQUrj88Bqrk5J4wlapyFj%2FXxFthJlfRdIqGHWBqed0EZ3G4aCr4zGTGzISUzHOJdnqy2oq25Qv72hrDz7ae5bm2DikwPQjSA8NuXnkdgGcFmgT%2FCg%2BF%2BOcvyd8IUsWTtMqOMWPLm4PCcX4FHBi70dOuegDZggyUAioI3MXr39bCG41jsUM7sYlIzyJbGfWN%2FgxD9OX3%2BXJtnCZrLL20SCYeEYFXRCmeTYWQsrjfl8MmiKf873m%2BUXp%2BC39dUbHWQyI8eGQPk13vpcGtT9j8cTnfC4acxDIPReyGTxRuWC2ij7cJCSl8kfPpA2EYcnjusMArBWbhw0CTNwNMmNLa3iFODEKepzrQjLRmDcG5qN0JU4HwyuMwdMLfOiBdNelERY4pWOoEUmvGKwmm1PGuqoCeSrb7qRrqTIeUIZFRHwbrpM4gRJHQ94ILvolPBYMsuRrUb31M4Q9%2FJpq5jmM%2BNb9jLXF0JFjMNbqBfN0jvkXLaMJh1%2FCp6mo0X5deugLmsHMctMj62BLNGYNtJDQaDCV8LbEBjqkAbWHd3opGOhQ83GwQ4olc2lOz%2FIfe6kjRc7yPLugQvi50xnvL578qOzokKO8FaTz5tfv23XoJ6sLi3gCk0IdVjTIb2qq%2B9mfakZkh8WM9xSRv5GwoB00%2FLWZGgVxA2I3MBN4bmHIYWuQmJwg8XkMxA2nGWUjqXTsP8Yq4LkqMOovqVKT6%2FUY%2FM2J9w0lDzwvI1mNDwVAjfn3efzhTlHxk5BZe5HN&X-Amz-Signature=c90c7efeb1509b1f321b8e3771aa0f80c5ab6e609d57bd22c98d0e7b264e99b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375HCR6G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqz60cPV8Oloaa8BFRqAstUk4R3350B3tow7n1WOk8AIhAMrowFis2V6BSpo8OYRj7BNx0eHHS%2BSCwzWMum11U8nLKv8DCBAQABoMNjM3NDIzMTgzODA1IgxLXDWPpBV3z5fpzvQq3AN8Y%2Bvphnq9dUxAboSEn7RdbDpHvq3PsD%2FEblBHarlD3xDy5Wg6kkohwCJ1X3z2mE5dTUKyKaCQL6%2F9v6zuMCgMVDUwi6q6PkwuMJx4EzaQUrj88Bqrk5J4wlapyFj%2FXxFthJlfRdIqGHWBqed0EZ3G4aCr4zGTGzISUzHOJdnqy2oq25Qv72hrDz7ae5bm2DikwPQjSA8NuXnkdgGcFmgT%2FCg%2BF%2BOcvyd8IUsWTtMqOMWPLm4PCcX4FHBi70dOuegDZggyUAioI3MXr39bCG41jsUM7sYlIzyJbGfWN%2FgxD9OX3%2BXJtnCZrLL20SCYeEYFXRCmeTYWQsrjfl8MmiKf873m%2BUXp%2BC39dUbHWQyI8eGQPk13vpcGtT9j8cTnfC4acxDIPReyGTxRuWC2ij7cJCSl8kfPpA2EYcnjusMArBWbhw0CTNwNMmNLa3iFODEKepzrQjLRmDcG5qN0JU4HwyuMwdMLfOiBdNelERY4pWOoEUmvGKwmm1PGuqoCeSrb7qRrqTIeUIZFRHwbrpM4gRJHQ94ILvolPBYMsuRrUb31M4Q9%2FJpq5jmM%2BNb9jLXF0JFjMNbqBfN0jvkXLaMJh1%2FCp6mo0X5deugLmsHMctMj62BLNGYNtJDQaDCV8LbEBjqkAbWHd3opGOhQ83GwQ4olc2lOz%2FIfe6kjRc7yPLugQvi50xnvL578qOzokKO8FaTz5tfv23XoJ6sLi3gCk0IdVjTIb2qq%2B9mfakZkh8WM9xSRv5GwoB00%2FLWZGgVxA2I3MBN4bmHIYWuQmJwg8XkMxA2nGWUjqXTsP8Yq4LkqMOovqVKT6%2FUY%2FM2J9w0lDzwvI1mNDwVAjfn3efzhTlHxk5BZe5HN&X-Amz-Signature=6de918dc3378913ae2ddfdf06897d33d662cd29fac5892ad859c855db92e68ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375HCR6G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqz60cPV8Oloaa8BFRqAstUk4R3350B3tow7n1WOk8AIhAMrowFis2V6BSpo8OYRj7BNx0eHHS%2BSCwzWMum11U8nLKv8DCBAQABoMNjM3NDIzMTgzODA1IgxLXDWPpBV3z5fpzvQq3AN8Y%2Bvphnq9dUxAboSEn7RdbDpHvq3PsD%2FEblBHarlD3xDy5Wg6kkohwCJ1X3z2mE5dTUKyKaCQL6%2F9v6zuMCgMVDUwi6q6PkwuMJx4EzaQUrj88Bqrk5J4wlapyFj%2FXxFthJlfRdIqGHWBqed0EZ3G4aCr4zGTGzISUzHOJdnqy2oq25Qv72hrDz7ae5bm2DikwPQjSA8NuXnkdgGcFmgT%2FCg%2BF%2BOcvyd8IUsWTtMqOMWPLm4PCcX4FHBi70dOuegDZggyUAioI3MXr39bCG41jsUM7sYlIzyJbGfWN%2FgxD9OX3%2BXJtnCZrLL20SCYeEYFXRCmeTYWQsrjfl8MmiKf873m%2BUXp%2BC39dUbHWQyI8eGQPk13vpcGtT9j8cTnfC4acxDIPReyGTxRuWC2ij7cJCSl8kfPpA2EYcnjusMArBWbhw0CTNwNMmNLa3iFODEKepzrQjLRmDcG5qN0JU4HwyuMwdMLfOiBdNelERY4pWOoEUmvGKwmm1PGuqoCeSrb7qRrqTIeUIZFRHwbrpM4gRJHQ94ILvolPBYMsuRrUb31M4Q9%2FJpq5jmM%2BNb9jLXF0JFjMNbqBfN0jvkXLaMJh1%2FCp6mo0X5deugLmsHMctMj62BLNGYNtJDQaDCV8LbEBjqkAbWHd3opGOhQ83GwQ4olc2lOz%2FIfe6kjRc7yPLugQvi50xnvL578qOzokKO8FaTz5tfv23XoJ6sLi3gCk0IdVjTIb2qq%2B9mfakZkh8WM9xSRv5GwoB00%2FLWZGgVxA2I3MBN4bmHIYWuQmJwg8XkMxA2nGWUjqXTsP8Yq4LkqMOovqVKT6%2FUY%2FM2J9w0lDzwvI1mNDwVAjfn3efzhTlHxk5BZe5HN&X-Amz-Signature=ea896ec076f561239eb568edde2f4d1fa02bba87a0c02cf8a03f3d1335c91aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
