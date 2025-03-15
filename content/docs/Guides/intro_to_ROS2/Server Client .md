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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NV7ST55%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr4b7qGROd9C4kNdb%2BsiD4Mydya9fmZUohqvOSJGXQhQIgF1c8Xo2efP13TUr5EpUscmUZ05Y4z%2FWTOM%2B%2FzyUOdyEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDC0WJSaJbWRhL7a%2BvCrcA1EtC9b3i4cqA6BowVV3R6PHFZCNR46bHlsjoF06OblQVgeC39yDB1kstGYQCRtGv7CbJkiHM9ECg4G7M1syWscMFljKM1t5NMjuvoAIPfwhtVQT0eXcNRhBKJIotTS5XHcg8zlj9yXC2uc9CuqfI9ZWd5Myu2L%2BvWPNw6EVUxONy9tEvEbQS%2FjRlTS0lN9UAZgCA5ew583dKNKEhzylyeWhefC6o%2F169I7e2o5jm%2BWy5duOdPbrjNOxT3cZyXwxcLi5JJVcRwt%2BWVwO0WIe4XbAeiG1alHVK%2F6biiglw7q5zJD6DsCPv2OptEDS%2BU%2BrbfkET5p6Sp63Gh1CMHnLx1k2VlFFnSM%2Fe9jbNoteQgKGG4RBiS6NzwXY1TwSdsb6Rc%2B6mo1t8yuGkjvOcKDqkIFpDWRFiZKXebJXxJmM6frIfwfm0V5NeDydlcisnLt4kTeV6QjlofaNk7ERUGWK%2FQX8qOI%2FZVOvhvrWrpddJXJKdPT8VsqiRm1My5%2FNqq1uaeCmyFgSjloVSKVQ1yuwLp5m5J9npxB2TAEcEIhs63GeXsrZGZPtwaMgtPdlNCcuLNVhdZeoM2yDu3NWvbam3rhHdsOJRVVTI0qoNTDRWyLvKBWG1dZOsQ3nC55JMP3r1r4GOqUBl3VLILdTU9xm5uFZwNY7A7BjlhQzc1LNn8n%2Fqi88U%2FtwnL0Yu129Bc923Ix3z3gx1hO4ymEDG1Q6IKFKrJwBT1xGE6XvprLB5FkRHB55FjneO2Zw3Y70mWwSQlKWqLKZk6765cn7V6W4Zs5nYjDCzdHGmeTKYpsZS6dBbnKZ62IEkH011ypW3Sq2vcjTeR8M9PSi1lClGBt9oeOTuk6wL4QTTfDr&X-Amz-Signature=f2b19cefe6ef3f7d18ecf4e1b0dc704c674e06a4ac7098bdd40789815af38922&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NV7ST55%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr4b7qGROd9C4kNdb%2BsiD4Mydya9fmZUohqvOSJGXQhQIgF1c8Xo2efP13TUr5EpUscmUZ05Y4z%2FWTOM%2B%2FzyUOdyEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDC0WJSaJbWRhL7a%2BvCrcA1EtC9b3i4cqA6BowVV3R6PHFZCNR46bHlsjoF06OblQVgeC39yDB1kstGYQCRtGv7CbJkiHM9ECg4G7M1syWscMFljKM1t5NMjuvoAIPfwhtVQT0eXcNRhBKJIotTS5XHcg8zlj9yXC2uc9CuqfI9ZWd5Myu2L%2BvWPNw6EVUxONy9tEvEbQS%2FjRlTS0lN9UAZgCA5ew583dKNKEhzylyeWhefC6o%2F169I7e2o5jm%2BWy5duOdPbrjNOxT3cZyXwxcLi5JJVcRwt%2BWVwO0WIe4XbAeiG1alHVK%2F6biiglw7q5zJD6DsCPv2OptEDS%2BU%2BrbfkET5p6Sp63Gh1CMHnLx1k2VlFFnSM%2Fe9jbNoteQgKGG4RBiS6NzwXY1TwSdsb6Rc%2B6mo1t8yuGkjvOcKDqkIFpDWRFiZKXebJXxJmM6frIfwfm0V5NeDydlcisnLt4kTeV6QjlofaNk7ERUGWK%2FQX8qOI%2FZVOvhvrWrpddJXJKdPT8VsqiRm1My5%2FNqq1uaeCmyFgSjloVSKVQ1yuwLp5m5J9npxB2TAEcEIhs63GeXsrZGZPtwaMgtPdlNCcuLNVhdZeoM2yDu3NWvbam3rhHdsOJRVVTI0qoNTDRWyLvKBWG1dZOsQ3nC55JMP3r1r4GOqUBl3VLILdTU9xm5uFZwNY7A7BjlhQzc1LNn8n%2Fqi88U%2FtwnL0Yu129Bc923Ix3z3gx1hO4ymEDG1Q6IKFKrJwBT1xGE6XvprLB5FkRHB55FjneO2Zw3Y70mWwSQlKWqLKZk6765cn7V6W4Zs5nYjDCzdHGmeTKYpsZS6dBbnKZ62IEkH011ypW3Sq2vcjTeR8M9PSi1lClGBt9oeOTuk6wL4QTTfDr&X-Amz-Signature=6d0e0e70e9fda77e134c493f1a17ac237ce311e968643486efda73ba7efbac3c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NV7ST55%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr4b7qGROd9C4kNdb%2BsiD4Mydya9fmZUohqvOSJGXQhQIgF1c8Xo2efP13TUr5EpUscmUZ05Y4z%2FWTOM%2B%2FzyUOdyEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDC0WJSaJbWRhL7a%2BvCrcA1EtC9b3i4cqA6BowVV3R6PHFZCNR46bHlsjoF06OblQVgeC39yDB1kstGYQCRtGv7CbJkiHM9ECg4G7M1syWscMFljKM1t5NMjuvoAIPfwhtVQT0eXcNRhBKJIotTS5XHcg8zlj9yXC2uc9CuqfI9ZWd5Myu2L%2BvWPNw6EVUxONy9tEvEbQS%2FjRlTS0lN9UAZgCA5ew583dKNKEhzylyeWhefC6o%2F169I7e2o5jm%2BWy5duOdPbrjNOxT3cZyXwxcLi5JJVcRwt%2BWVwO0WIe4XbAeiG1alHVK%2F6biiglw7q5zJD6DsCPv2OptEDS%2BU%2BrbfkET5p6Sp63Gh1CMHnLx1k2VlFFnSM%2Fe9jbNoteQgKGG4RBiS6NzwXY1TwSdsb6Rc%2B6mo1t8yuGkjvOcKDqkIFpDWRFiZKXebJXxJmM6frIfwfm0V5NeDydlcisnLt4kTeV6QjlofaNk7ERUGWK%2FQX8qOI%2FZVOvhvrWrpddJXJKdPT8VsqiRm1My5%2FNqq1uaeCmyFgSjloVSKVQ1yuwLp5m5J9npxB2TAEcEIhs63GeXsrZGZPtwaMgtPdlNCcuLNVhdZeoM2yDu3NWvbam3rhHdsOJRVVTI0qoNTDRWyLvKBWG1dZOsQ3nC55JMP3r1r4GOqUBl3VLILdTU9xm5uFZwNY7A7BjlhQzc1LNn8n%2Fqi88U%2FtwnL0Yu129Bc923Ix3z3gx1hO4ymEDG1Q6IKFKrJwBT1xGE6XvprLB5FkRHB55FjneO2Zw3Y70mWwSQlKWqLKZk6765cn7V6W4Zs5nYjDCzdHGmeTKYpsZS6dBbnKZ62IEkH011ypW3Sq2vcjTeR8M9PSi1lClGBt9oeOTuk6wL4QTTfDr&X-Amz-Signature=b7456156c9ef080e5a883086656b1f46ac21ad30bec4919fad2cdab7d63f7ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NV7ST55%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr4b7qGROd9C4kNdb%2BsiD4Mydya9fmZUohqvOSJGXQhQIgF1c8Xo2efP13TUr5EpUscmUZ05Y4z%2FWTOM%2B%2FzyUOdyEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDC0WJSaJbWRhL7a%2BvCrcA1EtC9b3i4cqA6BowVV3R6PHFZCNR46bHlsjoF06OblQVgeC39yDB1kstGYQCRtGv7CbJkiHM9ECg4G7M1syWscMFljKM1t5NMjuvoAIPfwhtVQT0eXcNRhBKJIotTS5XHcg8zlj9yXC2uc9CuqfI9ZWd5Myu2L%2BvWPNw6EVUxONy9tEvEbQS%2FjRlTS0lN9UAZgCA5ew583dKNKEhzylyeWhefC6o%2F169I7e2o5jm%2BWy5duOdPbrjNOxT3cZyXwxcLi5JJVcRwt%2BWVwO0WIe4XbAeiG1alHVK%2F6biiglw7q5zJD6DsCPv2OptEDS%2BU%2BrbfkET5p6Sp63Gh1CMHnLx1k2VlFFnSM%2Fe9jbNoteQgKGG4RBiS6NzwXY1TwSdsb6Rc%2B6mo1t8yuGkjvOcKDqkIFpDWRFiZKXebJXxJmM6frIfwfm0V5NeDydlcisnLt4kTeV6QjlofaNk7ERUGWK%2FQX8qOI%2FZVOvhvrWrpddJXJKdPT8VsqiRm1My5%2FNqq1uaeCmyFgSjloVSKVQ1yuwLp5m5J9npxB2TAEcEIhs63GeXsrZGZPtwaMgtPdlNCcuLNVhdZeoM2yDu3NWvbam3rhHdsOJRVVTI0qoNTDRWyLvKBWG1dZOsQ3nC55JMP3r1r4GOqUBl3VLILdTU9xm5uFZwNY7A7BjlhQzc1LNn8n%2Fqi88U%2FtwnL0Yu129Bc923Ix3z3gx1hO4ymEDG1Q6IKFKrJwBT1xGE6XvprLB5FkRHB55FjneO2Zw3Y70mWwSQlKWqLKZk6765cn7V6W4Zs5nYjDCzdHGmeTKYpsZS6dBbnKZ62IEkH011ypW3Sq2vcjTeR8M9PSi1lClGBt9oeOTuk6wL4QTTfDr&X-Amz-Signature=81871d662fd4a8ecfaf0a7618918df56491fd24a73291c658b408b4f08f8627f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NV7ST55%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr4b7qGROd9C4kNdb%2BsiD4Mydya9fmZUohqvOSJGXQhQIgF1c8Xo2efP13TUr5EpUscmUZ05Y4z%2FWTOM%2B%2FzyUOdyEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDC0WJSaJbWRhL7a%2BvCrcA1EtC9b3i4cqA6BowVV3R6PHFZCNR46bHlsjoF06OblQVgeC39yDB1kstGYQCRtGv7CbJkiHM9ECg4G7M1syWscMFljKM1t5NMjuvoAIPfwhtVQT0eXcNRhBKJIotTS5XHcg8zlj9yXC2uc9CuqfI9ZWd5Myu2L%2BvWPNw6EVUxONy9tEvEbQS%2FjRlTS0lN9UAZgCA5ew583dKNKEhzylyeWhefC6o%2F169I7e2o5jm%2BWy5duOdPbrjNOxT3cZyXwxcLi5JJVcRwt%2BWVwO0WIe4XbAeiG1alHVK%2F6biiglw7q5zJD6DsCPv2OptEDS%2BU%2BrbfkET5p6Sp63Gh1CMHnLx1k2VlFFnSM%2Fe9jbNoteQgKGG4RBiS6NzwXY1TwSdsb6Rc%2B6mo1t8yuGkjvOcKDqkIFpDWRFiZKXebJXxJmM6frIfwfm0V5NeDydlcisnLt4kTeV6QjlofaNk7ERUGWK%2FQX8qOI%2FZVOvhvrWrpddJXJKdPT8VsqiRm1My5%2FNqq1uaeCmyFgSjloVSKVQ1yuwLp5m5J9npxB2TAEcEIhs63GeXsrZGZPtwaMgtPdlNCcuLNVhdZeoM2yDu3NWvbam3rhHdsOJRVVTI0qoNTDRWyLvKBWG1dZOsQ3nC55JMP3r1r4GOqUBl3VLILdTU9xm5uFZwNY7A7BjlhQzc1LNn8n%2Fqi88U%2FtwnL0Yu129Bc923Ix3z3gx1hO4ymEDG1Q6IKFKrJwBT1xGE6XvprLB5FkRHB55FjneO2Zw3Y70mWwSQlKWqLKZk6765cn7V6W4Zs5nYjDCzdHGmeTKYpsZS6dBbnKZ62IEkH011ypW3Sq2vcjTeR8M9PSi1lClGBt9oeOTuk6wL4QTTfDr&X-Amz-Signature=7cbde253fa5ea780e8cfe1ba7552088679b977e1585d747858ab833dccedbddb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
