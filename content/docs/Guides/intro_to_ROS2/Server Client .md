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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A726TU5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGLnsfNuyM4PZL%2FvXzE90HqwjbLUgBHdIrtMCFrKddCNAiBNlICrV%2FnsL0z4qezQLW8JD2JfWGiFtu57TTR%2FCCPi5SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4WM7UVukooK5NSEKtwDM0S3cjnAogdLsmI1AOIT8Gqg4GmdbxviiabEwbRJi1aMc6KTeXoe11ZddKlLX%2BdiiRYEoTHsx%2FLnZSOUnozLRXT8pTT8TrRXhINz3Yes0Ops%2Fl3IcI5jXrqsmmtbSmMRnU5xYn7p2d5MKJkG%2FYJWBSnZDRDNJbiFrQ2RjT8XMG2r6SYoSbwdgXBj3HWrTrbJ%2FUjBnf10YkpQVIxhmEbFCQyFtVVIeqSC%2FW9S6A3MtxMxd0wBPdj86f6kWhfFpjiX%2Fnz8dEXmRHpRN1TN8CSo6moqXMW%2BSvyPE9lAEynHSKQ9TkLUXUmM4rT2WPlQ2im334uC6A6tWaaTKE9FAT63T7DSKdyXotzUHE67uC6F8WgnALQSM1E%2BN42GLnzYG39qxdyR11acMkYQPUJOOr8f6Q%2F4T7wh9zpilb7ZSff2rV6DiJCG%2BQCuzfLggvjscKZeFB3qQI2%2FITcBpViPT%2BG3qolqLrZqrRBa85Wj95JEtHVlHGmwK52j6W5uX6uYTMzqbf5b0pg6hZA7TyaKe3mhZPYJiQgk%2BUkB3c4lZPZSapm%2FfivC%2B8hIpjgwsX3suRDQupCxyqZu2udDaZTvyyDaHuh4ZR4YkYeHuh2RLgDkNMRjkxLzt29IJF2W%2FGwwxem1vwY6pgE6lpEmasVz7RqYvcCJtYifF01JauzkZ4maYmxEHd3FgvbXGFaWrZdJuQhI%2BafCBZYo%2Fcosror%2FHiP5qh2Vgxg3bT%2B1Cp28x3AgRca8%2FW4jkpfwmJn7%2FMltG%2FhU9jvurv%2FtQKVIpiDilyZZe39ohFSHkVETtwwmJxzQnXa34XMHoH7gG1zRuOtasOAoR0b1G7Tijsy2KpUbSu8vOzMKz%2BiKw6ExBEfN&X-Amz-Signature=6d7446fcf8d5c1ec8530208a9780933e2bd006d735b8c453208e4616d253e3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A726TU5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGLnsfNuyM4PZL%2FvXzE90HqwjbLUgBHdIrtMCFrKddCNAiBNlICrV%2FnsL0z4qezQLW8JD2JfWGiFtu57TTR%2FCCPi5SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4WM7UVukooK5NSEKtwDM0S3cjnAogdLsmI1AOIT8Gqg4GmdbxviiabEwbRJi1aMc6KTeXoe11ZddKlLX%2BdiiRYEoTHsx%2FLnZSOUnozLRXT8pTT8TrRXhINz3Yes0Ops%2Fl3IcI5jXrqsmmtbSmMRnU5xYn7p2d5MKJkG%2FYJWBSnZDRDNJbiFrQ2RjT8XMG2r6SYoSbwdgXBj3HWrTrbJ%2FUjBnf10YkpQVIxhmEbFCQyFtVVIeqSC%2FW9S6A3MtxMxd0wBPdj86f6kWhfFpjiX%2Fnz8dEXmRHpRN1TN8CSo6moqXMW%2BSvyPE9lAEynHSKQ9TkLUXUmM4rT2WPlQ2im334uC6A6tWaaTKE9FAT63T7DSKdyXotzUHE67uC6F8WgnALQSM1E%2BN42GLnzYG39qxdyR11acMkYQPUJOOr8f6Q%2F4T7wh9zpilb7ZSff2rV6DiJCG%2BQCuzfLggvjscKZeFB3qQI2%2FITcBpViPT%2BG3qolqLrZqrRBa85Wj95JEtHVlHGmwK52j6W5uX6uYTMzqbf5b0pg6hZA7TyaKe3mhZPYJiQgk%2BUkB3c4lZPZSapm%2FfivC%2B8hIpjgwsX3suRDQupCxyqZu2udDaZTvyyDaHuh4ZR4YkYeHuh2RLgDkNMRjkxLzt29IJF2W%2FGwwxem1vwY6pgE6lpEmasVz7RqYvcCJtYifF01JauzkZ4maYmxEHd3FgvbXGFaWrZdJuQhI%2BafCBZYo%2Fcosror%2FHiP5qh2Vgxg3bT%2B1Cp28x3AgRca8%2FW4jkpfwmJn7%2FMltG%2FhU9jvurv%2FtQKVIpiDilyZZe39ohFSHkVETtwwmJxzQnXa34XMHoH7gG1zRuOtasOAoR0b1G7Tijsy2KpUbSu8vOzMKz%2BiKw6ExBEfN&X-Amz-Signature=ead164e65f795c2071601c7d89ef3cb6f0c3b36090c0ac8049d70abf707a2a96&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A726TU5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGLnsfNuyM4PZL%2FvXzE90HqwjbLUgBHdIrtMCFrKddCNAiBNlICrV%2FnsL0z4qezQLW8JD2JfWGiFtu57TTR%2FCCPi5SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4WM7UVukooK5NSEKtwDM0S3cjnAogdLsmI1AOIT8Gqg4GmdbxviiabEwbRJi1aMc6KTeXoe11ZddKlLX%2BdiiRYEoTHsx%2FLnZSOUnozLRXT8pTT8TrRXhINz3Yes0Ops%2Fl3IcI5jXrqsmmtbSmMRnU5xYn7p2d5MKJkG%2FYJWBSnZDRDNJbiFrQ2RjT8XMG2r6SYoSbwdgXBj3HWrTrbJ%2FUjBnf10YkpQVIxhmEbFCQyFtVVIeqSC%2FW9S6A3MtxMxd0wBPdj86f6kWhfFpjiX%2Fnz8dEXmRHpRN1TN8CSo6moqXMW%2BSvyPE9lAEynHSKQ9TkLUXUmM4rT2WPlQ2im334uC6A6tWaaTKE9FAT63T7DSKdyXotzUHE67uC6F8WgnALQSM1E%2BN42GLnzYG39qxdyR11acMkYQPUJOOr8f6Q%2F4T7wh9zpilb7ZSff2rV6DiJCG%2BQCuzfLggvjscKZeFB3qQI2%2FITcBpViPT%2BG3qolqLrZqrRBa85Wj95JEtHVlHGmwK52j6W5uX6uYTMzqbf5b0pg6hZA7TyaKe3mhZPYJiQgk%2BUkB3c4lZPZSapm%2FfivC%2B8hIpjgwsX3suRDQupCxyqZu2udDaZTvyyDaHuh4ZR4YkYeHuh2RLgDkNMRjkxLzt29IJF2W%2FGwwxem1vwY6pgE6lpEmasVz7RqYvcCJtYifF01JauzkZ4maYmxEHd3FgvbXGFaWrZdJuQhI%2BafCBZYo%2Fcosror%2FHiP5qh2Vgxg3bT%2B1Cp28x3AgRca8%2FW4jkpfwmJn7%2FMltG%2FhU9jvurv%2FtQKVIpiDilyZZe39ohFSHkVETtwwmJxzQnXa34XMHoH7gG1zRuOtasOAoR0b1G7Tijsy2KpUbSu8vOzMKz%2BiKw6ExBEfN&X-Amz-Signature=b24982d70ea04cc3b36d82e5742f3bebc11cc8b76e32782ab2a03d235025e082&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A726TU5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGLnsfNuyM4PZL%2FvXzE90HqwjbLUgBHdIrtMCFrKddCNAiBNlICrV%2FnsL0z4qezQLW8JD2JfWGiFtu57TTR%2FCCPi5SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4WM7UVukooK5NSEKtwDM0S3cjnAogdLsmI1AOIT8Gqg4GmdbxviiabEwbRJi1aMc6KTeXoe11ZddKlLX%2BdiiRYEoTHsx%2FLnZSOUnozLRXT8pTT8TrRXhINz3Yes0Ops%2Fl3IcI5jXrqsmmtbSmMRnU5xYn7p2d5MKJkG%2FYJWBSnZDRDNJbiFrQ2RjT8XMG2r6SYoSbwdgXBj3HWrTrbJ%2FUjBnf10YkpQVIxhmEbFCQyFtVVIeqSC%2FW9S6A3MtxMxd0wBPdj86f6kWhfFpjiX%2Fnz8dEXmRHpRN1TN8CSo6moqXMW%2BSvyPE9lAEynHSKQ9TkLUXUmM4rT2WPlQ2im334uC6A6tWaaTKE9FAT63T7DSKdyXotzUHE67uC6F8WgnALQSM1E%2BN42GLnzYG39qxdyR11acMkYQPUJOOr8f6Q%2F4T7wh9zpilb7ZSff2rV6DiJCG%2BQCuzfLggvjscKZeFB3qQI2%2FITcBpViPT%2BG3qolqLrZqrRBa85Wj95JEtHVlHGmwK52j6W5uX6uYTMzqbf5b0pg6hZA7TyaKe3mhZPYJiQgk%2BUkB3c4lZPZSapm%2FfivC%2B8hIpjgwsX3suRDQupCxyqZu2udDaZTvyyDaHuh4ZR4YkYeHuh2RLgDkNMRjkxLzt29IJF2W%2FGwwxem1vwY6pgE6lpEmasVz7RqYvcCJtYifF01JauzkZ4maYmxEHd3FgvbXGFaWrZdJuQhI%2BafCBZYo%2Fcosror%2FHiP5qh2Vgxg3bT%2B1Cp28x3AgRca8%2FW4jkpfwmJn7%2FMltG%2FhU9jvurv%2FtQKVIpiDilyZZe39ohFSHkVETtwwmJxzQnXa34XMHoH7gG1zRuOtasOAoR0b1G7Tijsy2KpUbSu8vOzMKz%2BiKw6ExBEfN&X-Amz-Signature=a389ee46c667c16874474909afc418cd681fc847b784255dcf3be5ff482a82d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A726TU5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGLnsfNuyM4PZL%2FvXzE90HqwjbLUgBHdIrtMCFrKddCNAiBNlICrV%2FnsL0z4qezQLW8JD2JfWGiFtu57TTR%2FCCPi5SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4WM7UVukooK5NSEKtwDM0S3cjnAogdLsmI1AOIT8Gqg4GmdbxviiabEwbRJi1aMc6KTeXoe11ZddKlLX%2BdiiRYEoTHsx%2FLnZSOUnozLRXT8pTT8TrRXhINz3Yes0Ops%2Fl3IcI5jXrqsmmtbSmMRnU5xYn7p2d5MKJkG%2FYJWBSnZDRDNJbiFrQ2RjT8XMG2r6SYoSbwdgXBj3HWrTrbJ%2FUjBnf10YkpQVIxhmEbFCQyFtVVIeqSC%2FW9S6A3MtxMxd0wBPdj86f6kWhfFpjiX%2Fnz8dEXmRHpRN1TN8CSo6moqXMW%2BSvyPE9lAEynHSKQ9TkLUXUmM4rT2WPlQ2im334uC6A6tWaaTKE9FAT63T7DSKdyXotzUHE67uC6F8WgnALQSM1E%2BN42GLnzYG39qxdyR11acMkYQPUJOOr8f6Q%2F4T7wh9zpilb7ZSff2rV6DiJCG%2BQCuzfLggvjscKZeFB3qQI2%2FITcBpViPT%2BG3qolqLrZqrRBa85Wj95JEtHVlHGmwK52j6W5uX6uYTMzqbf5b0pg6hZA7TyaKe3mhZPYJiQgk%2BUkB3c4lZPZSapm%2FfivC%2B8hIpjgwsX3suRDQupCxyqZu2udDaZTvyyDaHuh4ZR4YkYeHuh2RLgDkNMRjkxLzt29IJF2W%2FGwwxem1vwY6pgE6lpEmasVz7RqYvcCJtYifF01JauzkZ4maYmxEHd3FgvbXGFaWrZdJuQhI%2BafCBZYo%2Fcosror%2FHiP5qh2Vgxg3bT%2B1Cp28x3AgRca8%2FW4jkpfwmJn7%2FMltG%2FhU9jvurv%2FtQKVIpiDilyZZe39ohFSHkVETtwwmJxzQnXa34XMHoH7gG1zRuOtasOAoR0b1G7Tijsy2KpUbSu8vOzMKz%2BiKw6ExBEfN&X-Amz-Signature=fed04a94b727c46fa54b624a748b17087d5fd02592399bec85e0a55f4fc83ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
