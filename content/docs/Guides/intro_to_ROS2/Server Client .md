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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2AYAIV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmstBrs1ClHHBij%2F6IMS7xzIKokwheRNYM5X721DJrgQIhAJoXOL2gOwzKbGNDC%2BuKPXK7qzNWsy6k%2Bf40R65VVxHtKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxygGj4FAPiyIzF3A8q3APeoOy80l%2F2Ao4u65I9iXxDN1RzJtAo%2FHKlt0Z93xcGeC3RePX96rugB%2B%2F2%2Bw1QKlcEIRVJai3nL5SYWe2W71FYdscA8XOB3DF0vRS8NOtgHKSQPEeVV4dZPUCXwmWfKm5WFGbZMatX%2FdaSdZEYeuOH4Yit%2FjY0IpG9FV6CAbFDE6U0X31tNJ6IGBc4qNyv%2Bt6CT62HsmQWY5AEgU5FKkZjVmFWbF02Nc4NVZH7F%2BoYrx5PGHbQhiflNOOZrWpZM5oK%2FomtFZNhKMnQRlad6nkO1DvVstgFxxa5HCB0p5oNdjC1Y4QFL7mMJsP0MtLMAZvcu3cFVqj%2FmQU5CIVZGWH5FVNjatRp7N4kwu2WmgrlifE6V1GPAdwVnUs8A6WxW%2BVuSO0ctKlj6J6EJEhSdT81eybPvvjh46BCK9%2FmjIukIRnyJOZsTBpYo0lIDhw6x5z6ktl8FEQv3NDLK1HSTo3fS3dIeVVRscvkbTOh8QwpIiufsDSjTI4GSlZYnBNwFmBe6W3M%2FwydxPDWwItBaJnOePJhbLk1Fx%2FopDNTnU1a7e%2FlSi2TazPrUziefdKvXj48tFqEkE5WTazVVz45Y8KlXojkPY5p05kNgvwiQqzPbwUh6%2F8BkbDHojVgxDD2qr7DBjqkAVYYVVOjIjtXm6wmUL4eEQiHIRj97codGvQx8wxWMWJSGE7Pwjc4Jizi1ly9P3BV6YXnu1CbPjljCI4YZNMqlw83%2BNnOnE4nR0OKIpoYCdWP%2Feeirc3MtMPZK3XKpRkLzqPufEL4LJA2flB3%2FXCtxCsQQ2A0i%2Bkf8B3s%2FEml6xYTpv1HOnA9%2BQ69rKEto1nM72Y4Wz1lt8jBj6%2BDqKLFgYglt61o&X-Amz-Signature=4f436c9d89bf42c53c67eb343f8372c8da5141d55e9f7ae43612f07f98c37799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2AYAIV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmstBrs1ClHHBij%2F6IMS7xzIKokwheRNYM5X721DJrgQIhAJoXOL2gOwzKbGNDC%2BuKPXK7qzNWsy6k%2Bf40R65VVxHtKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxygGj4FAPiyIzF3A8q3APeoOy80l%2F2Ao4u65I9iXxDN1RzJtAo%2FHKlt0Z93xcGeC3RePX96rugB%2B%2F2%2Bw1QKlcEIRVJai3nL5SYWe2W71FYdscA8XOB3DF0vRS8NOtgHKSQPEeVV4dZPUCXwmWfKm5WFGbZMatX%2FdaSdZEYeuOH4Yit%2FjY0IpG9FV6CAbFDE6U0X31tNJ6IGBc4qNyv%2Bt6CT62HsmQWY5AEgU5FKkZjVmFWbF02Nc4NVZH7F%2BoYrx5PGHbQhiflNOOZrWpZM5oK%2FomtFZNhKMnQRlad6nkO1DvVstgFxxa5HCB0p5oNdjC1Y4QFL7mMJsP0MtLMAZvcu3cFVqj%2FmQU5CIVZGWH5FVNjatRp7N4kwu2WmgrlifE6V1GPAdwVnUs8A6WxW%2BVuSO0ctKlj6J6EJEhSdT81eybPvvjh46BCK9%2FmjIukIRnyJOZsTBpYo0lIDhw6x5z6ktl8FEQv3NDLK1HSTo3fS3dIeVVRscvkbTOh8QwpIiufsDSjTI4GSlZYnBNwFmBe6W3M%2FwydxPDWwItBaJnOePJhbLk1Fx%2FopDNTnU1a7e%2FlSi2TazPrUziefdKvXj48tFqEkE5WTazVVz45Y8KlXojkPY5p05kNgvwiQqzPbwUh6%2F8BkbDHojVgxDD2qr7DBjqkAVYYVVOjIjtXm6wmUL4eEQiHIRj97codGvQx8wxWMWJSGE7Pwjc4Jizi1ly9P3BV6YXnu1CbPjljCI4YZNMqlw83%2BNnOnE4nR0OKIpoYCdWP%2Feeirc3MtMPZK3XKpRkLzqPufEL4LJA2flB3%2FXCtxCsQQ2A0i%2Bkf8B3s%2FEml6xYTpv1HOnA9%2BQ69rKEto1nM72Y4Wz1lt8jBj6%2BDqKLFgYglt61o&X-Amz-Signature=39c512bfaaed079d242f72185b2ce83ee42e1750ed0082e9ee17184b628f3db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2AYAIV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmstBrs1ClHHBij%2F6IMS7xzIKokwheRNYM5X721DJrgQIhAJoXOL2gOwzKbGNDC%2BuKPXK7qzNWsy6k%2Bf40R65VVxHtKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxygGj4FAPiyIzF3A8q3APeoOy80l%2F2Ao4u65I9iXxDN1RzJtAo%2FHKlt0Z93xcGeC3RePX96rugB%2B%2F2%2Bw1QKlcEIRVJai3nL5SYWe2W71FYdscA8XOB3DF0vRS8NOtgHKSQPEeVV4dZPUCXwmWfKm5WFGbZMatX%2FdaSdZEYeuOH4Yit%2FjY0IpG9FV6CAbFDE6U0X31tNJ6IGBc4qNyv%2Bt6CT62HsmQWY5AEgU5FKkZjVmFWbF02Nc4NVZH7F%2BoYrx5PGHbQhiflNOOZrWpZM5oK%2FomtFZNhKMnQRlad6nkO1DvVstgFxxa5HCB0p5oNdjC1Y4QFL7mMJsP0MtLMAZvcu3cFVqj%2FmQU5CIVZGWH5FVNjatRp7N4kwu2WmgrlifE6V1GPAdwVnUs8A6WxW%2BVuSO0ctKlj6J6EJEhSdT81eybPvvjh46BCK9%2FmjIukIRnyJOZsTBpYo0lIDhw6x5z6ktl8FEQv3NDLK1HSTo3fS3dIeVVRscvkbTOh8QwpIiufsDSjTI4GSlZYnBNwFmBe6W3M%2FwydxPDWwItBaJnOePJhbLk1Fx%2FopDNTnU1a7e%2FlSi2TazPrUziefdKvXj48tFqEkE5WTazVVz45Y8KlXojkPY5p05kNgvwiQqzPbwUh6%2F8BkbDHojVgxDD2qr7DBjqkAVYYVVOjIjtXm6wmUL4eEQiHIRj97codGvQx8wxWMWJSGE7Pwjc4Jizi1ly9P3BV6YXnu1CbPjljCI4YZNMqlw83%2BNnOnE4nR0OKIpoYCdWP%2Feeirc3MtMPZK3XKpRkLzqPufEL4LJA2flB3%2FXCtxCsQQ2A0i%2Bkf8B3s%2FEml6xYTpv1HOnA9%2BQ69rKEto1nM72Y4Wz1lt8jBj6%2BDqKLFgYglt61o&X-Amz-Signature=42ad8343eba9b2c4df7849bdd4b7e70b663a2c295533e4d4aafc0faa4fb59005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2AYAIV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmstBrs1ClHHBij%2F6IMS7xzIKokwheRNYM5X721DJrgQIhAJoXOL2gOwzKbGNDC%2BuKPXK7qzNWsy6k%2Bf40R65VVxHtKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxygGj4FAPiyIzF3A8q3APeoOy80l%2F2Ao4u65I9iXxDN1RzJtAo%2FHKlt0Z93xcGeC3RePX96rugB%2B%2F2%2Bw1QKlcEIRVJai3nL5SYWe2W71FYdscA8XOB3DF0vRS8NOtgHKSQPEeVV4dZPUCXwmWfKm5WFGbZMatX%2FdaSdZEYeuOH4Yit%2FjY0IpG9FV6CAbFDE6U0X31tNJ6IGBc4qNyv%2Bt6CT62HsmQWY5AEgU5FKkZjVmFWbF02Nc4NVZH7F%2BoYrx5PGHbQhiflNOOZrWpZM5oK%2FomtFZNhKMnQRlad6nkO1DvVstgFxxa5HCB0p5oNdjC1Y4QFL7mMJsP0MtLMAZvcu3cFVqj%2FmQU5CIVZGWH5FVNjatRp7N4kwu2WmgrlifE6V1GPAdwVnUs8A6WxW%2BVuSO0ctKlj6J6EJEhSdT81eybPvvjh46BCK9%2FmjIukIRnyJOZsTBpYo0lIDhw6x5z6ktl8FEQv3NDLK1HSTo3fS3dIeVVRscvkbTOh8QwpIiufsDSjTI4GSlZYnBNwFmBe6W3M%2FwydxPDWwItBaJnOePJhbLk1Fx%2FopDNTnU1a7e%2FlSi2TazPrUziefdKvXj48tFqEkE5WTazVVz45Y8KlXojkPY5p05kNgvwiQqzPbwUh6%2F8BkbDHojVgxDD2qr7DBjqkAVYYVVOjIjtXm6wmUL4eEQiHIRj97codGvQx8wxWMWJSGE7Pwjc4Jizi1ly9P3BV6YXnu1CbPjljCI4YZNMqlw83%2BNnOnE4nR0OKIpoYCdWP%2Feeirc3MtMPZK3XKpRkLzqPufEL4LJA2flB3%2FXCtxCsQQ2A0i%2Bkf8B3s%2FEml6xYTpv1HOnA9%2BQ69rKEto1nM72Y4Wz1lt8jBj6%2BDqKLFgYglt61o&X-Amz-Signature=8b5b9abdbe1a07a7ff4a9e49fa9a82410dbc2bd299f4f489df84a931325be68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2AYAIV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmstBrs1ClHHBij%2F6IMS7xzIKokwheRNYM5X721DJrgQIhAJoXOL2gOwzKbGNDC%2BuKPXK7qzNWsy6k%2Bf40R65VVxHtKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxygGj4FAPiyIzF3A8q3APeoOy80l%2F2Ao4u65I9iXxDN1RzJtAo%2FHKlt0Z93xcGeC3RePX96rugB%2B%2F2%2Bw1QKlcEIRVJai3nL5SYWe2W71FYdscA8XOB3DF0vRS8NOtgHKSQPEeVV4dZPUCXwmWfKm5WFGbZMatX%2FdaSdZEYeuOH4Yit%2FjY0IpG9FV6CAbFDE6U0X31tNJ6IGBc4qNyv%2Bt6CT62HsmQWY5AEgU5FKkZjVmFWbF02Nc4NVZH7F%2BoYrx5PGHbQhiflNOOZrWpZM5oK%2FomtFZNhKMnQRlad6nkO1DvVstgFxxa5HCB0p5oNdjC1Y4QFL7mMJsP0MtLMAZvcu3cFVqj%2FmQU5CIVZGWH5FVNjatRp7N4kwu2WmgrlifE6V1GPAdwVnUs8A6WxW%2BVuSO0ctKlj6J6EJEhSdT81eybPvvjh46BCK9%2FmjIukIRnyJOZsTBpYo0lIDhw6x5z6ktl8FEQv3NDLK1HSTo3fS3dIeVVRscvkbTOh8QwpIiufsDSjTI4GSlZYnBNwFmBe6W3M%2FwydxPDWwItBaJnOePJhbLk1Fx%2FopDNTnU1a7e%2FlSi2TazPrUziefdKvXj48tFqEkE5WTazVVz45Y8KlXojkPY5p05kNgvwiQqzPbwUh6%2F8BkbDHojVgxDD2qr7DBjqkAVYYVVOjIjtXm6wmUL4eEQiHIRj97codGvQx8wxWMWJSGE7Pwjc4Jizi1ly9P3BV6YXnu1CbPjljCI4YZNMqlw83%2BNnOnE4nR0OKIpoYCdWP%2Feeirc3MtMPZK3XKpRkLzqPufEL4LJA2flB3%2FXCtxCsQQ2A0i%2Bkf8B3s%2FEml6xYTpv1HOnA9%2BQ69rKEto1nM72Y4Wz1lt8jBj6%2BDqKLFgYglt61o&X-Amz-Signature=2af296ea9e89dbe6a55a635bb272b74f44583b2277ed73259174d0d9fe6fbc56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
