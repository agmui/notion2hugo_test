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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUEGP7X%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdUZmriMC6FGxtufIBC%2B0yf3jAJHM%2FpC3BhXi6Dw8xNwIgRat6Sup7HL2J7PclpaiPnGmlxRICzqmaDBKMx%2F05foAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYN3%2BKre4RK62CBoyrcA%2BNWjW7UO%2FeEUVmT76vr0hcCUVu%2FDz0SdMeMKAlpxDFevHP9e37tKfpv9AYdqJuoh6g5DI6N0yrPwdlXIOtSu3NtQ4Jywek5CXKbtmAg%2FKYAb7vZc23X%2FQb2wtc180EjtHkVnSbaaltgBujvde%2Fp%2BRyNFZ7ZZO%2F2HIuZWwES9mVgKsX3cRl8ZiTKfAEC6z5uhtlx48%2FE0O27NxUuwmJ7zfvj4efBzYq7YnWx%2BM9JUBN%2BdF5wyFKmye1%2BZQfZwQFZxzFh0UD0nOlnBazPWAeqQBcCkEOWkx%2FkZG2R8OOzt4uuJYCwprchYjLfN1G%2FLrrTTNLyaSNPABYX4jV7vmLKkdL1%2FSguvCA%2FE4Tpk2%2FgKz0yx9trBbyu9cx%2B8rNho9iS8eiEXopjr0WKkkCqNm3vZdLZ8bE55WZ22Ks9jvfy9WnQkDtDdjSL9KWzXl0Z3LzrWgnrXJ9itJUFn2yIz5ZLUJRfGEQQYJhXbLMCIR%2FYkTpKiH2HBZ6eVkdPM5vLMy6UylnTGE5z16m6e5YVH%2BUdmJ8BhANi%2BrtHbzOWjtaN6wazDPAy4hAg9H1PngJsyEZxpQcqHeRR%2B%2FHDDxIbM4N9UB0sEiJnXJa5DPheVIr%2BuqEx%2F4ktTSvjuJk4mKqfMOSWgsEGOqUB5w8lcN%2F9NrwuPtWGBAuQcawMc%2FJF%2F7K46xIUk0rybXo8CLdQ5A7yzmo2VvL7rFwEddX12aIm1j0xDIebnE4udXELIvavJZRpaUz7agR1%2FPCCwF5vS1OUQPf7L5MetQF06IrivFbY7bpT3gDMO55P6mOPxYT3O22fRUdQyfKMzUi%2B92M5Z5xFVf9X1N1o26xjyDgm3G49GwLxqllr1Xe0LbRhDNsx&X-Amz-Signature=b22069ef44687674db56133661e647c1fb30449ee840a754a7ac9beea9c69d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUEGP7X%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdUZmriMC6FGxtufIBC%2B0yf3jAJHM%2FpC3BhXi6Dw8xNwIgRat6Sup7HL2J7PclpaiPnGmlxRICzqmaDBKMx%2F05foAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYN3%2BKre4RK62CBoyrcA%2BNWjW7UO%2FeEUVmT76vr0hcCUVu%2FDz0SdMeMKAlpxDFevHP9e37tKfpv9AYdqJuoh6g5DI6N0yrPwdlXIOtSu3NtQ4Jywek5CXKbtmAg%2FKYAb7vZc23X%2FQb2wtc180EjtHkVnSbaaltgBujvde%2Fp%2BRyNFZ7ZZO%2F2HIuZWwES9mVgKsX3cRl8ZiTKfAEC6z5uhtlx48%2FE0O27NxUuwmJ7zfvj4efBzYq7YnWx%2BM9JUBN%2BdF5wyFKmye1%2BZQfZwQFZxzFh0UD0nOlnBazPWAeqQBcCkEOWkx%2FkZG2R8OOzt4uuJYCwprchYjLfN1G%2FLrrTTNLyaSNPABYX4jV7vmLKkdL1%2FSguvCA%2FE4Tpk2%2FgKz0yx9trBbyu9cx%2B8rNho9iS8eiEXopjr0WKkkCqNm3vZdLZ8bE55WZ22Ks9jvfy9WnQkDtDdjSL9KWzXl0Z3LzrWgnrXJ9itJUFn2yIz5ZLUJRfGEQQYJhXbLMCIR%2FYkTpKiH2HBZ6eVkdPM5vLMy6UylnTGE5z16m6e5YVH%2BUdmJ8BhANi%2BrtHbzOWjtaN6wazDPAy4hAg9H1PngJsyEZxpQcqHeRR%2B%2FHDDxIbM4N9UB0sEiJnXJa5DPheVIr%2BuqEx%2F4ktTSvjuJk4mKqfMOSWgsEGOqUB5w8lcN%2F9NrwuPtWGBAuQcawMc%2FJF%2F7K46xIUk0rybXo8CLdQ5A7yzmo2VvL7rFwEddX12aIm1j0xDIebnE4udXELIvavJZRpaUz7agR1%2FPCCwF5vS1OUQPf7L5MetQF06IrivFbY7bpT3gDMO55P6mOPxYT3O22fRUdQyfKMzUi%2B92M5Z5xFVf9X1N1o26xjyDgm3G49GwLxqllr1Xe0LbRhDNsx&X-Amz-Signature=27670db6a6f9c20a569b45da4b95285fbdc365b37104628260e99f53273fcab4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUEGP7X%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdUZmriMC6FGxtufIBC%2B0yf3jAJHM%2FpC3BhXi6Dw8xNwIgRat6Sup7HL2J7PclpaiPnGmlxRICzqmaDBKMx%2F05foAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYN3%2BKre4RK62CBoyrcA%2BNWjW7UO%2FeEUVmT76vr0hcCUVu%2FDz0SdMeMKAlpxDFevHP9e37tKfpv9AYdqJuoh6g5DI6N0yrPwdlXIOtSu3NtQ4Jywek5CXKbtmAg%2FKYAb7vZc23X%2FQb2wtc180EjtHkVnSbaaltgBujvde%2Fp%2BRyNFZ7ZZO%2F2HIuZWwES9mVgKsX3cRl8ZiTKfAEC6z5uhtlx48%2FE0O27NxUuwmJ7zfvj4efBzYq7YnWx%2BM9JUBN%2BdF5wyFKmye1%2BZQfZwQFZxzFh0UD0nOlnBazPWAeqQBcCkEOWkx%2FkZG2R8OOzt4uuJYCwprchYjLfN1G%2FLrrTTNLyaSNPABYX4jV7vmLKkdL1%2FSguvCA%2FE4Tpk2%2FgKz0yx9trBbyu9cx%2B8rNho9iS8eiEXopjr0WKkkCqNm3vZdLZ8bE55WZ22Ks9jvfy9WnQkDtDdjSL9KWzXl0Z3LzrWgnrXJ9itJUFn2yIz5ZLUJRfGEQQYJhXbLMCIR%2FYkTpKiH2HBZ6eVkdPM5vLMy6UylnTGE5z16m6e5YVH%2BUdmJ8BhANi%2BrtHbzOWjtaN6wazDPAy4hAg9H1PngJsyEZxpQcqHeRR%2B%2FHDDxIbM4N9UB0sEiJnXJa5DPheVIr%2BuqEx%2F4ktTSvjuJk4mKqfMOSWgsEGOqUB5w8lcN%2F9NrwuPtWGBAuQcawMc%2FJF%2F7K46xIUk0rybXo8CLdQ5A7yzmo2VvL7rFwEddX12aIm1j0xDIebnE4udXELIvavJZRpaUz7agR1%2FPCCwF5vS1OUQPf7L5MetQF06IrivFbY7bpT3gDMO55P6mOPxYT3O22fRUdQyfKMzUi%2B92M5Z5xFVf9X1N1o26xjyDgm3G49GwLxqllr1Xe0LbRhDNsx&X-Amz-Signature=ea48f90a1587c5f0954bc53c7c6c8b87a3ea8358f4f30ffb295f60103e19355b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUEGP7X%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdUZmriMC6FGxtufIBC%2B0yf3jAJHM%2FpC3BhXi6Dw8xNwIgRat6Sup7HL2J7PclpaiPnGmlxRICzqmaDBKMx%2F05foAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYN3%2BKre4RK62CBoyrcA%2BNWjW7UO%2FeEUVmT76vr0hcCUVu%2FDz0SdMeMKAlpxDFevHP9e37tKfpv9AYdqJuoh6g5DI6N0yrPwdlXIOtSu3NtQ4Jywek5CXKbtmAg%2FKYAb7vZc23X%2FQb2wtc180EjtHkVnSbaaltgBujvde%2Fp%2BRyNFZ7ZZO%2F2HIuZWwES9mVgKsX3cRl8ZiTKfAEC6z5uhtlx48%2FE0O27NxUuwmJ7zfvj4efBzYq7YnWx%2BM9JUBN%2BdF5wyFKmye1%2BZQfZwQFZxzFh0UD0nOlnBazPWAeqQBcCkEOWkx%2FkZG2R8OOzt4uuJYCwprchYjLfN1G%2FLrrTTNLyaSNPABYX4jV7vmLKkdL1%2FSguvCA%2FE4Tpk2%2FgKz0yx9trBbyu9cx%2B8rNho9iS8eiEXopjr0WKkkCqNm3vZdLZ8bE55WZ22Ks9jvfy9WnQkDtDdjSL9KWzXl0Z3LzrWgnrXJ9itJUFn2yIz5ZLUJRfGEQQYJhXbLMCIR%2FYkTpKiH2HBZ6eVkdPM5vLMy6UylnTGE5z16m6e5YVH%2BUdmJ8BhANi%2BrtHbzOWjtaN6wazDPAy4hAg9H1PngJsyEZxpQcqHeRR%2B%2FHDDxIbM4N9UB0sEiJnXJa5DPheVIr%2BuqEx%2F4ktTSvjuJk4mKqfMOSWgsEGOqUB5w8lcN%2F9NrwuPtWGBAuQcawMc%2FJF%2F7K46xIUk0rybXo8CLdQ5A7yzmo2VvL7rFwEddX12aIm1j0xDIebnE4udXELIvavJZRpaUz7agR1%2FPCCwF5vS1OUQPf7L5MetQF06IrivFbY7bpT3gDMO55P6mOPxYT3O22fRUdQyfKMzUi%2B92M5Z5xFVf9X1N1o26xjyDgm3G49GwLxqllr1Xe0LbRhDNsx&X-Amz-Signature=9d2a99a0689033312c198c3572b56ca9e17f810ee6255b4b232327781b85eb73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUEGP7X%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdUZmriMC6FGxtufIBC%2B0yf3jAJHM%2FpC3BhXi6Dw8xNwIgRat6Sup7HL2J7PclpaiPnGmlxRICzqmaDBKMx%2F05foAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYN3%2BKre4RK62CBoyrcA%2BNWjW7UO%2FeEUVmT76vr0hcCUVu%2FDz0SdMeMKAlpxDFevHP9e37tKfpv9AYdqJuoh6g5DI6N0yrPwdlXIOtSu3NtQ4Jywek5CXKbtmAg%2FKYAb7vZc23X%2FQb2wtc180EjtHkVnSbaaltgBujvde%2Fp%2BRyNFZ7ZZO%2F2HIuZWwES9mVgKsX3cRl8ZiTKfAEC6z5uhtlx48%2FE0O27NxUuwmJ7zfvj4efBzYq7YnWx%2BM9JUBN%2BdF5wyFKmye1%2BZQfZwQFZxzFh0UD0nOlnBazPWAeqQBcCkEOWkx%2FkZG2R8OOzt4uuJYCwprchYjLfN1G%2FLrrTTNLyaSNPABYX4jV7vmLKkdL1%2FSguvCA%2FE4Tpk2%2FgKz0yx9trBbyu9cx%2B8rNho9iS8eiEXopjr0WKkkCqNm3vZdLZ8bE55WZ22Ks9jvfy9WnQkDtDdjSL9KWzXl0Z3LzrWgnrXJ9itJUFn2yIz5ZLUJRfGEQQYJhXbLMCIR%2FYkTpKiH2HBZ6eVkdPM5vLMy6UylnTGE5z16m6e5YVH%2BUdmJ8BhANi%2BrtHbzOWjtaN6wazDPAy4hAg9H1PngJsyEZxpQcqHeRR%2B%2FHDDxIbM4N9UB0sEiJnXJa5DPheVIr%2BuqEx%2F4ktTSvjuJk4mKqfMOSWgsEGOqUB5w8lcN%2F9NrwuPtWGBAuQcawMc%2FJF%2F7K46xIUk0rybXo8CLdQ5A7yzmo2VvL7rFwEddX12aIm1j0xDIebnE4udXELIvavJZRpaUz7agR1%2FPCCwF5vS1OUQPf7L5MetQF06IrivFbY7bpT3gDMO55P6mOPxYT3O22fRUdQyfKMzUi%2B92M5Z5xFVf9X1N1o26xjyDgm3G49GwLxqllr1Xe0LbRhDNsx&X-Amz-Signature=ae3da15aa28a3de24a578015b45eb5c544609c8f19579f85e618885cd73b70c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
