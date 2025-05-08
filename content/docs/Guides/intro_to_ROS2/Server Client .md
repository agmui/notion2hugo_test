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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWB3NNL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNq4MOgKVs05kdhVC9QsZAmi8Zq0LcsGBHYyN7vcWMAAIhANm0WJNmHSAEUlAAb1cNNRvZvORvSDmJg1AisoMnzE1wKv8DCGoQABoMNjM3NDIzMTgzODA1IgxloSY%2F9OAaeSmxyvYq3AOzI3t%2BeLg%2FvYGWiXWIVGVx3ydKDt5Mby9E5xuwIqInmdmIYCvtonFS4Zb2VVDEjQAu0PsdjD14H1I8nJS7NrGbSQ4yt3h%2Fsqp%2FSIiNKQXvaObTLJMU2WYSyRKrcVs%2BS5MpqZcJBUtRUIMWnMIvmaC6YM9Tum%2FEiejo2QnF6NwkfrorjzC2XTn3eSULP2x1uSlOkZlgTCo34WhRChVXiVAR0lesUzuK6kqquWfaa8ovaDwyTgTaDiAiyGzKGz01sWU0hbvyX%2FSO07ddCRJHzOIBMLEriLhNY4kxJy1gSmvAYstzW2fkdmO%2FuJlDtWczMLDE8ampdv7y4NMALaAs891JdtCqVWCXiS%2Bkxhqu%2FJtx5bp6RTfbs1w0QhLB75u85AHaoaqE1AR5KyfJO4VIB0hmGBHC4Y%2FCACwZesaTnSusdjwd6vQonwD03G0l5ZebXGt8OlLr6CGN%2FNX7w0hnQgL9srC4X%2BuGUjwcFOUlurCJT%2BlEQoJmT4bLWn6%2BrFsFZqHxKf55AVbmYxK7ufHK43%2FPL%2BeH8y0OvjpnTnKEUng%2FvDfWKhCZqCHdAtwW4FY9EojsleH%2BIZWP2ZnKT3S7OFuqsbFlmcdnxXv3rZZ3qQjyhQRK3SlGjirn2G0P0zDF%2BO%2FABjqkAfj5mWhZ0GHeOFAX793T%2BnkwmdWTBVREnNOV%2BnHw0Lci9lQYEQ7i3k5rSJSfYO1C1wPJ3M8TQNtoroflDeBEr22viqlWOVxXaZy2uoSTbyyGOP4GNX4gWEkQ0aomQJ1xKJhGgKRx3VhoDTZ7sXuhRpsMyPxXhAv1UnjFhV7ttADBRjiEDbMWJ%2F1kG5WIV0Rg4a0gAUEUnjFxkcDd6AH%2F5KdZo0fw&X-Amz-Signature=aba880daa69f51c305d8d0fa4306b80a753c0e2c7255ded7061977e1ba0cf20a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWB3NNL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNq4MOgKVs05kdhVC9QsZAmi8Zq0LcsGBHYyN7vcWMAAIhANm0WJNmHSAEUlAAb1cNNRvZvORvSDmJg1AisoMnzE1wKv8DCGoQABoMNjM3NDIzMTgzODA1IgxloSY%2F9OAaeSmxyvYq3AOzI3t%2BeLg%2FvYGWiXWIVGVx3ydKDt5Mby9E5xuwIqInmdmIYCvtonFS4Zb2VVDEjQAu0PsdjD14H1I8nJS7NrGbSQ4yt3h%2Fsqp%2FSIiNKQXvaObTLJMU2WYSyRKrcVs%2BS5MpqZcJBUtRUIMWnMIvmaC6YM9Tum%2FEiejo2QnF6NwkfrorjzC2XTn3eSULP2x1uSlOkZlgTCo34WhRChVXiVAR0lesUzuK6kqquWfaa8ovaDwyTgTaDiAiyGzKGz01sWU0hbvyX%2FSO07ddCRJHzOIBMLEriLhNY4kxJy1gSmvAYstzW2fkdmO%2FuJlDtWczMLDE8ampdv7y4NMALaAs891JdtCqVWCXiS%2Bkxhqu%2FJtx5bp6RTfbs1w0QhLB75u85AHaoaqE1AR5KyfJO4VIB0hmGBHC4Y%2FCACwZesaTnSusdjwd6vQonwD03G0l5ZebXGt8OlLr6CGN%2FNX7w0hnQgL9srC4X%2BuGUjwcFOUlurCJT%2BlEQoJmT4bLWn6%2BrFsFZqHxKf55AVbmYxK7ufHK43%2FPL%2BeH8y0OvjpnTnKEUng%2FvDfWKhCZqCHdAtwW4FY9EojsleH%2BIZWP2ZnKT3S7OFuqsbFlmcdnxXv3rZZ3qQjyhQRK3SlGjirn2G0P0zDF%2BO%2FABjqkAfj5mWhZ0GHeOFAX793T%2BnkwmdWTBVREnNOV%2BnHw0Lci9lQYEQ7i3k5rSJSfYO1C1wPJ3M8TQNtoroflDeBEr22viqlWOVxXaZy2uoSTbyyGOP4GNX4gWEkQ0aomQJ1xKJhGgKRx3VhoDTZ7sXuhRpsMyPxXhAv1UnjFhV7ttADBRjiEDbMWJ%2F1kG5WIV0Rg4a0gAUEUnjFxkcDd6AH%2F5KdZo0fw&X-Amz-Signature=a64cd4520b4e729e1d4a2b092a3cdf8a89c86aa9d0b98becf68b8ef9514ab768&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWB3NNL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNq4MOgKVs05kdhVC9QsZAmi8Zq0LcsGBHYyN7vcWMAAIhANm0WJNmHSAEUlAAb1cNNRvZvORvSDmJg1AisoMnzE1wKv8DCGoQABoMNjM3NDIzMTgzODA1IgxloSY%2F9OAaeSmxyvYq3AOzI3t%2BeLg%2FvYGWiXWIVGVx3ydKDt5Mby9E5xuwIqInmdmIYCvtonFS4Zb2VVDEjQAu0PsdjD14H1I8nJS7NrGbSQ4yt3h%2Fsqp%2FSIiNKQXvaObTLJMU2WYSyRKrcVs%2BS5MpqZcJBUtRUIMWnMIvmaC6YM9Tum%2FEiejo2QnF6NwkfrorjzC2XTn3eSULP2x1uSlOkZlgTCo34WhRChVXiVAR0lesUzuK6kqquWfaa8ovaDwyTgTaDiAiyGzKGz01sWU0hbvyX%2FSO07ddCRJHzOIBMLEriLhNY4kxJy1gSmvAYstzW2fkdmO%2FuJlDtWczMLDE8ampdv7y4NMALaAs891JdtCqVWCXiS%2Bkxhqu%2FJtx5bp6RTfbs1w0QhLB75u85AHaoaqE1AR5KyfJO4VIB0hmGBHC4Y%2FCACwZesaTnSusdjwd6vQonwD03G0l5ZebXGt8OlLr6CGN%2FNX7w0hnQgL9srC4X%2BuGUjwcFOUlurCJT%2BlEQoJmT4bLWn6%2BrFsFZqHxKf55AVbmYxK7ufHK43%2FPL%2BeH8y0OvjpnTnKEUng%2FvDfWKhCZqCHdAtwW4FY9EojsleH%2BIZWP2ZnKT3S7OFuqsbFlmcdnxXv3rZZ3qQjyhQRK3SlGjirn2G0P0zDF%2BO%2FABjqkAfj5mWhZ0GHeOFAX793T%2BnkwmdWTBVREnNOV%2BnHw0Lci9lQYEQ7i3k5rSJSfYO1C1wPJ3M8TQNtoroflDeBEr22viqlWOVxXaZy2uoSTbyyGOP4GNX4gWEkQ0aomQJ1xKJhGgKRx3VhoDTZ7sXuhRpsMyPxXhAv1UnjFhV7ttADBRjiEDbMWJ%2F1kG5WIV0Rg4a0gAUEUnjFxkcDd6AH%2F5KdZo0fw&X-Amz-Signature=58fcc192547021e22358bb7838eab558e513a2fb5b7b27f90eb36d7553b94f58&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWB3NNL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNq4MOgKVs05kdhVC9QsZAmi8Zq0LcsGBHYyN7vcWMAAIhANm0WJNmHSAEUlAAb1cNNRvZvORvSDmJg1AisoMnzE1wKv8DCGoQABoMNjM3NDIzMTgzODA1IgxloSY%2F9OAaeSmxyvYq3AOzI3t%2BeLg%2FvYGWiXWIVGVx3ydKDt5Mby9E5xuwIqInmdmIYCvtonFS4Zb2VVDEjQAu0PsdjD14H1I8nJS7NrGbSQ4yt3h%2Fsqp%2FSIiNKQXvaObTLJMU2WYSyRKrcVs%2BS5MpqZcJBUtRUIMWnMIvmaC6YM9Tum%2FEiejo2QnF6NwkfrorjzC2XTn3eSULP2x1uSlOkZlgTCo34WhRChVXiVAR0lesUzuK6kqquWfaa8ovaDwyTgTaDiAiyGzKGz01sWU0hbvyX%2FSO07ddCRJHzOIBMLEriLhNY4kxJy1gSmvAYstzW2fkdmO%2FuJlDtWczMLDE8ampdv7y4NMALaAs891JdtCqVWCXiS%2Bkxhqu%2FJtx5bp6RTfbs1w0QhLB75u85AHaoaqE1AR5KyfJO4VIB0hmGBHC4Y%2FCACwZesaTnSusdjwd6vQonwD03G0l5ZebXGt8OlLr6CGN%2FNX7w0hnQgL9srC4X%2BuGUjwcFOUlurCJT%2BlEQoJmT4bLWn6%2BrFsFZqHxKf55AVbmYxK7ufHK43%2FPL%2BeH8y0OvjpnTnKEUng%2FvDfWKhCZqCHdAtwW4FY9EojsleH%2BIZWP2ZnKT3S7OFuqsbFlmcdnxXv3rZZ3qQjyhQRK3SlGjirn2G0P0zDF%2BO%2FABjqkAfj5mWhZ0GHeOFAX793T%2BnkwmdWTBVREnNOV%2BnHw0Lci9lQYEQ7i3k5rSJSfYO1C1wPJ3M8TQNtoroflDeBEr22viqlWOVxXaZy2uoSTbyyGOP4GNX4gWEkQ0aomQJ1xKJhGgKRx3VhoDTZ7sXuhRpsMyPxXhAv1UnjFhV7ttADBRjiEDbMWJ%2F1kG5WIV0Rg4a0gAUEUnjFxkcDd6AH%2F5KdZo0fw&X-Amz-Signature=ea2d44f8d1b58047f52ea134184c7abc4a1654d701566639a997ac915f56feae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWB3NNL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNq4MOgKVs05kdhVC9QsZAmi8Zq0LcsGBHYyN7vcWMAAIhANm0WJNmHSAEUlAAb1cNNRvZvORvSDmJg1AisoMnzE1wKv8DCGoQABoMNjM3NDIzMTgzODA1IgxloSY%2F9OAaeSmxyvYq3AOzI3t%2BeLg%2FvYGWiXWIVGVx3ydKDt5Mby9E5xuwIqInmdmIYCvtonFS4Zb2VVDEjQAu0PsdjD14H1I8nJS7NrGbSQ4yt3h%2Fsqp%2FSIiNKQXvaObTLJMU2WYSyRKrcVs%2BS5MpqZcJBUtRUIMWnMIvmaC6YM9Tum%2FEiejo2QnF6NwkfrorjzC2XTn3eSULP2x1uSlOkZlgTCo34WhRChVXiVAR0lesUzuK6kqquWfaa8ovaDwyTgTaDiAiyGzKGz01sWU0hbvyX%2FSO07ddCRJHzOIBMLEriLhNY4kxJy1gSmvAYstzW2fkdmO%2FuJlDtWczMLDE8ampdv7y4NMALaAs891JdtCqVWCXiS%2Bkxhqu%2FJtx5bp6RTfbs1w0QhLB75u85AHaoaqE1AR5KyfJO4VIB0hmGBHC4Y%2FCACwZesaTnSusdjwd6vQonwD03G0l5ZebXGt8OlLr6CGN%2FNX7w0hnQgL9srC4X%2BuGUjwcFOUlurCJT%2BlEQoJmT4bLWn6%2BrFsFZqHxKf55AVbmYxK7ufHK43%2FPL%2BeH8y0OvjpnTnKEUng%2FvDfWKhCZqCHdAtwW4FY9EojsleH%2BIZWP2ZnKT3S7OFuqsbFlmcdnxXv3rZZ3qQjyhQRK3SlGjirn2G0P0zDF%2BO%2FABjqkAfj5mWhZ0GHeOFAX793T%2BnkwmdWTBVREnNOV%2BnHw0Lci9lQYEQ7i3k5rSJSfYO1C1wPJ3M8TQNtoroflDeBEr22viqlWOVxXaZy2uoSTbyyGOP4GNX4gWEkQ0aomQJ1xKJhGgKRx3VhoDTZ7sXuhRpsMyPxXhAv1UnjFhV7ttADBRjiEDbMWJ%2F1kG5WIV0Rg4a0gAUEUnjFxkcDd6AH%2F5KdZo0fw&X-Amz-Signature=e832a0d6b7451076705828ee76a88fed1611384aba0338953101b3ef59cf685f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
