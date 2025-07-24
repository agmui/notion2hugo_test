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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S4R55K5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD%2B6RIklzz%2FHiTPD9VhPKDSvKxIJjBfJOj7lqCWXtIkKwIhAPh6xgM8ER%2BsQFUitNC%2BBGj%2FVxNEo7D36IZtVey0FwiVKv8DCCsQABoMNjM3NDIzMTgzODA1IgyhroRvENWP%2BQQ0JwUq3AM4k26BL1ynDS1U8dESkky6CuxadtnkwGDYOn5X2XP%2BepzCbdgmZzrI4koiORQ3pykdMqbFFp5bNroD8NyffxIXcIJ7SEKJHZGtGRaisSfYEdA2o0nD32GtEZu%2BpePehoou5xdBBzgCp8hASJRmTINl%2FkVbaZr5Awg%2F9Te%2FJK%2Fot8zW8Ihlgh4ctEBbm0C97trNyM7CO3XCbsTiVbQUTHlzrDtoKcpPLLdDmq6%2FUW2YlC2LyjqdxR%2BZrDoUX%2BD%2Bp%2FaHZ3lDWeUC7yJRyy%2B4OW%2Fycau7HoOiFWQUt9cHup3QsTNxg3ypWxTdlhdks7w4%2BIS1ffMuChdqNi1c3PkUys9lF67eEpzhykd6c5NxH8OwmRf73b2A%2BXg56hd2ks4ixepf6QgWj00QIX6Y0fZ5rcJIR1UvfRRW%2FcRmAKRkLaODuWbWKqjm%2BxmzJncOKitTQXPqYnFqUHvP0bsFTZ4mgjSeCQNtiiJr3edkD1k%2Bm1zBH5zygEfl%2FcjtgSAmPq%2BgoSGuV044q5cvO%2BpZoLmW6M3bg04Wv4YpW5YUEbGfr3VE5SYlhka5IlNQZwk9b36iAYXdSIQNmeUmmKiFwPNDLIQ9LkrJ5e6CSR0ztTBQh5bqLKn8sqr8LE%2FMr28QHTDuj4jEBjqkAWfAtW16chco%2F%2BdovYKgqfrJkhBq6S9TegbvqCLxXgXsBwSi13%2FxtY10X4Vfn8MrAkiF58UepGauTkOd6uGT3Q1xUcl%2FjnfoArSROWdzrUuU%2FXyp5H6AH1zUuq6j7a1Y0fTLHG%2F4VPmodijik6IWkjUVPbNz5BoUuhdaZXkCS4NiTeVTmkfQh9zcdlFIvTtvxjVFYGEg%2B2o3rx5a4375JFDFb0ec&X-Amz-Signature=0e9e4f0905bd97d4e04e11acf225106e842f7b1aa7b7d5ce2e97dea2dd738c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S4R55K5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD%2B6RIklzz%2FHiTPD9VhPKDSvKxIJjBfJOj7lqCWXtIkKwIhAPh6xgM8ER%2BsQFUitNC%2BBGj%2FVxNEo7D36IZtVey0FwiVKv8DCCsQABoMNjM3NDIzMTgzODA1IgyhroRvENWP%2BQQ0JwUq3AM4k26BL1ynDS1U8dESkky6CuxadtnkwGDYOn5X2XP%2BepzCbdgmZzrI4koiORQ3pykdMqbFFp5bNroD8NyffxIXcIJ7SEKJHZGtGRaisSfYEdA2o0nD32GtEZu%2BpePehoou5xdBBzgCp8hASJRmTINl%2FkVbaZr5Awg%2F9Te%2FJK%2Fot8zW8Ihlgh4ctEBbm0C97trNyM7CO3XCbsTiVbQUTHlzrDtoKcpPLLdDmq6%2FUW2YlC2LyjqdxR%2BZrDoUX%2BD%2Bp%2FaHZ3lDWeUC7yJRyy%2B4OW%2Fycau7HoOiFWQUt9cHup3QsTNxg3ypWxTdlhdks7w4%2BIS1ffMuChdqNi1c3PkUys9lF67eEpzhykd6c5NxH8OwmRf73b2A%2BXg56hd2ks4ixepf6QgWj00QIX6Y0fZ5rcJIR1UvfRRW%2FcRmAKRkLaODuWbWKqjm%2BxmzJncOKitTQXPqYnFqUHvP0bsFTZ4mgjSeCQNtiiJr3edkD1k%2Bm1zBH5zygEfl%2FcjtgSAmPq%2BgoSGuV044q5cvO%2BpZoLmW6M3bg04Wv4YpW5YUEbGfr3VE5SYlhka5IlNQZwk9b36iAYXdSIQNmeUmmKiFwPNDLIQ9LkrJ5e6CSR0ztTBQh5bqLKn8sqr8LE%2FMr28QHTDuj4jEBjqkAWfAtW16chco%2F%2BdovYKgqfrJkhBq6S9TegbvqCLxXgXsBwSi13%2FxtY10X4Vfn8MrAkiF58UepGauTkOd6uGT3Q1xUcl%2FjnfoArSROWdzrUuU%2FXyp5H6AH1zUuq6j7a1Y0fTLHG%2F4VPmodijik6IWkjUVPbNz5BoUuhdaZXkCS4NiTeVTmkfQh9zcdlFIvTtvxjVFYGEg%2B2o3rx5a4375JFDFb0ec&X-Amz-Signature=6d0823381f0ecf6e3fbb01f42ee700d630140636b8aa8621919a61baf29f10a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S4R55K5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD%2B6RIklzz%2FHiTPD9VhPKDSvKxIJjBfJOj7lqCWXtIkKwIhAPh6xgM8ER%2BsQFUitNC%2BBGj%2FVxNEo7D36IZtVey0FwiVKv8DCCsQABoMNjM3NDIzMTgzODA1IgyhroRvENWP%2BQQ0JwUq3AM4k26BL1ynDS1U8dESkky6CuxadtnkwGDYOn5X2XP%2BepzCbdgmZzrI4koiORQ3pykdMqbFFp5bNroD8NyffxIXcIJ7SEKJHZGtGRaisSfYEdA2o0nD32GtEZu%2BpePehoou5xdBBzgCp8hASJRmTINl%2FkVbaZr5Awg%2F9Te%2FJK%2Fot8zW8Ihlgh4ctEBbm0C97trNyM7CO3XCbsTiVbQUTHlzrDtoKcpPLLdDmq6%2FUW2YlC2LyjqdxR%2BZrDoUX%2BD%2Bp%2FaHZ3lDWeUC7yJRyy%2B4OW%2Fycau7HoOiFWQUt9cHup3QsTNxg3ypWxTdlhdks7w4%2BIS1ffMuChdqNi1c3PkUys9lF67eEpzhykd6c5NxH8OwmRf73b2A%2BXg56hd2ks4ixepf6QgWj00QIX6Y0fZ5rcJIR1UvfRRW%2FcRmAKRkLaODuWbWKqjm%2BxmzJncOKitTQXPqYnFqUHvP0bsFTZ4mgjSeCQNtiiJr3edkD1k%2Bm1zBH5zygEfl%2FcjtgSAmPq%2BgoSGuV044q5cvO%2BpZoLmW6M3bg04Wv4YpW5YUEbGfr3VE5SYlhka5IlNQZwk9b36iAYXdSIQNmeUmmKiFwPNDLIQ9LkrJ5e6CSR0ztTBQh5bqLKn8sqr8LE%2FMr28QHTDuj4jEBjqkAWfAtW16chco%2F%2BdovYKgqfrJkhBq6S9TegbvqCLxXgXsBwSi13%2FxtY10X4Vfn8MrAkiF58UepGauTkOd6uGT3Q1xUcl%2FjnfoArSROWdzrUuU%2FXyp5H6AH1zUuq6j7a1Y0fTLHG%2F4VPmodijik6IWkjUVPbNz5BoUuhdaZXkCS4NiTeVTmkfQh9zcdlFIvTtvxjVFYGEg%2B2o3rx5a4375JFDFb0ec&X-Amz-Signature=1cae45d837abd7b4211259373f36f03e912212b3ec4e80f9f7b138cec67b0b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S4R55K5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD%2B6RIklzz%2FHiTPD9VhPKDSvKxIJjBfJOj7lqCWXtIkKwIhAPh6xgM8ER%2BsQFUitNC%2BBGj%2FVxNEo7D36IZtVey0FwiVKv8DCCsQABoMNjM3NDIzMTgzODA1IgyhroRvENWP%2BQQ0JwUq3AM4k26BL1ynDS1U8dESkky6CuxadtnkwGDYOn5X2XP%2BepzCbdgmZzrI4koiORQ3pykdMqbFFp5bNroD8NyffxIXcIJ7SEKJHZGtGRaisSfYEdA2o0nD32GtEZu%2BpePehoou5xdBBzgCp8hASJRmTINl%2FkVbaZr5Awg%2F9Te%2FJK%2Fot8zW8Ihlgh4ctEBbm0C97trNyM7CO3XCbsTiVbQUTHlzrDtoKcpPLLdDmq6%2FUW2YlC2LyjqdxR%2BZrDoUX%2BD%2Bp%2FaHZ3lDWeUC7yJRyy%2B4OW%2Fycau7HoOiFWQUt9cHup3QsTNxg3ypWxTdlhdks7w4%2BIS1ffMuChdqNi1c3PkUys9lF67eEpzhykd6c5NxH8OwmRf73b2A%2BXg56hd2ks4ixepf6QgWj00QIX6Y0fZ5rcJIR1UvfRRW%2FcRmAKRkLaODuWbWKqjm%2BxmzJncOKitTQXPqYnFqUHvP0bsFTZ4mgjSeCQNtiiJr3edkD1k%2Bm1zBH5zygEfl%2FcjtgSAmPq%2BgoSGuV044q5cvO%2BpZoLmW6M3bg04Wv4YpW5YUEbGfr3VE5SYlhka5IlNQZwk9b36iAYXdSIQNmeUmmKiFwPNDLIQ9LkrJ5e6CSR0ztTBQh5bqLKn8sqr8LE%2FMr28QHTDuj4jEBjqkAWfAtW16chco%2F%2BdovYKgqfrJkhBq6S9TegbvqCLxXgXsBwSi13%2FxtY10X4Vfn8MrAkiF58UepGauTkOd6uGT3Q1xUcl%2FjnfoArSROWdzrUuU%2FXyp5H6AH1zUuq6j7a1Y0fTLHG%2F4VPmodijik6IWkjUVPbNz5BoUuhdaZXkCS4NiTeVTmkfQh9zcdlFIvTtvxjVFYGEg%2B2o3rx5a4375JFDFb0ec&X-Amz-Signature=63415cbb24d193a766420037bb39446f76045141bb579e18e01a638926a93e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S4R55K5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD%2B6RIklzz%2FHiTPD9VhPKDSvKxIJjBfJOj7lqCWXtIkKwIhAPh6xgM8ER%2BsQFUitNC%2BBGj%2FVxNEo7D36IZtVey0FwiVKv8DCCsQABoMNjM3NDIzMTgzODA1IgyhroRvENWP%2BQQ0JwUq3AM4k26BL1ynDS1U8dESkky6CuxadtnkwGDYOn5X2XP%2BepzCbdgmZzrI4koiORQ3pykdMqbFFp5bNroD8NyffxIXcIJ7SEKJHZGtGRaisSfYEdA2o0nD32GtEZu%2BpePehoou5xdBBzgCp8hASJRmTINl%2FkVbaZr5Awg%2F9Te%2FJK%2Fot8zW8Ihlgh4ctEBbm0C97trNyM7CO3XCbsTiVbQUTHlzrDtoKcpPLLdDmq6%2FUW2YlC2LyjqdxR%2BZrDoUX%2BD%2Bp%2FaHZ3lDWeUC7yJRyy%2B4OW%2Fycau7HoOiFWQUt9cHup3QsTNxg3ypWxTdlhdks7w4%2BIS1ffMuChdqNi1c3PkUys9lF67eEpzhykd6c5NxH8OwmRf73b2A%2BXg56hd2ks4ixepf6QgWj00QIX6Y0fZ5rcJIR1UvfRRW%2FcRmAKRkLaODuWbWKqjm%2BxmzJncOKitTQXPqYnFqUHvP0bsFTZ4mgjSeCQNtiiJr3edkD1k%2Bm1zBH5zygEfl%2FcjtgSAmPq%2BgoSGuV044q5cvO%2BpZoLmW6M3bg04Wv4YpW5YUEbGfr3VE5SYlhka5IlNQZwk9b36iAYXdSIQNmeUmmKiFwPNDLIQ9LkrJ5e6CSR0ztTBQh5bqLKn8sqr8LE%2FMr28QHTDuj4jEBjqkAWfAtW16chco%2F%2BdovYKgqfrJkhBq6S9TegbvqCLxXgXsBwSi13%2FxtY10X4Vfn8MrAkiF58UepGauTkOd6uGT3Q1xUcl%2FjnfoArSROWdzrUuU%2FXyp5H6AH1zUuq6j7a1Y0fTLHG%2F4VPmodijik6IWkjUVPbNz5BoUuhdaZXkCS4NiTeVTmkfQh9zcdlFIvTtvxjVFYGEg%2B2o3rx5a4375JFDFb0ec&X-Amz-Signature=559fa97031de32810f4831e970cdc39070f46a68ce1050bd9ff00309719a2a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
