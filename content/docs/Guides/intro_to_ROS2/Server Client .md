---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466735Y66SB%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBnKQBFpe9N4dLzUfWGgl0VnUUhBqg8ksG1mhR5vov6fAiEAuJA5q1lMCAVirPc%2FSiIiHxIZsLWgfoYZ%2B0xQms%2BbD2cq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJGcGdfnczhHMoyy%2FircA1g9IBPSJiw%2FcumhRkTBX%2Fv6JUzz5TKBiEJi7FWvocWJpznhkmmFtWZgJ6jlvetbfLZhmGvogh8YxnJYuxES2YI%2Frf6jwsOkVeNwlR00xOGjWpJU2GkIfO%2Bd%2BmqsskNzahG1Ky%2BJEjrlhEy%2FrotQbK%2FT8XTN8BPf2yw64n%2F%2FRWzLAz04mhIxgU4WCC6krjET0rwYCwj1AsOsyGtULMlpybF68EQkdmWmKtJfOghIH%2B0moKYLC97cVLHMjC6CJD7h1vtFluwJ7uC7Q2RH0uSL9Eoxt6x0aRKQHyVH%2BL00OQwBEAWlvW7f850x1LfdhNF%2FQC%2BrWaQuHkF48BRm9lDUVDYaUSkeb6zlDsmw9MO9neE2LywBeh6zArjtOU%2B88hCQhaT%2FOGUBAeX2F3qSamhEO8vhUjCf37%2B%2FYMO%2FYqFN%2FtSpoNG3B6KHxZAasE4rk9gV3OVr9rHe%2FMCbjjOPDK4tcaT%2BGwzCqvZJhILlvSoYjVUBRf4cn1%2FDg%2BmqwnnmKKoPE3bxr70BAARuU7MGVL8D0VMcB3eExkZ9e2WXR2UzHMkMJviwA101aKTFHq%2Bg%2BkQOjr7MZk7O05MA4VkpZusIq%2BarUGzwY89b0%2BnFUzHIbdt2HxTAesGp32O4fGLtML%2BYz8wGOqUBM1e3D9C04dYcrVjRRFjo9p1Wj5YVQdN3WapW605d84P%2FBXJ96GQVYOsVhqp7%2BYhUieVxbiDKNy3IFo7jBr%2FTb3vqG0Xf8RGByNyuLzYiueikvjxVgf7e%2FEJ1pJDyIBfTu5x%2BQrUU12aj6%2BAuZK%2FBa4oHAAwpsyTZKy5ABrBIzalCddnWbdPjqvcaEwfUnC5NzJo4fTZoKcS0a3rnPpOE%2F3kYEysH&X-Amz-Signature=185db38c74608b164c7486b795b6ee0996dc51450fc8cd4617cf9eeba2f1c207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466735Y66SB%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBnKQBFpe9N4dLzUfWGgl0VnUUhBqg8ksG1mhR5vov6fAiEAuJA5q1lMCAVirPc%2FSiIiHxIZsLWgfoYZ%2B0xQms%2BbD2cq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJGcGdfnczhHMoyy%2FircA1g9IBPSJiw%2FcumhRkTBX%2Fv6JUzz5TKBiEJi7FWvocWJpznhkmmFtWZgJ6jlvetbfLZhmGvogh8YxnJYuxES2YI%2Frf6jwsOkVeNwlR00xOGjWpJU2GkIfO%2Bd%2BmqsskNzahG1Ky%2BJEjrlhEy%2FrotQbK%2FT8XTN8BPf2yw64n%2F%2FRWzLAz04mhIxgU4WCC6krjET0rwYCwj1AsOsyGtULMlpybF68EQkdmWmKtJfOghIH%2B0moKYLC97cVLHMjC6CJD7h1vtFluwJ7uC7Q2RH0uSL9Eoxt6x0aRKQHyVH%2BL00OQwBEAWlvW7f850x1LfdhNF%2FQC%2BrWaQuHkF48BRm9lDUVDYaUSkeb6zlDsmw9MO9neE2LywBeh6zArjtOU%2B88hCQhaT%2FOGUBAeX2F3qSamhEO8vhUjCf37%2B%2FYMO%2FYqFN%2FtSpoNG3B6KHxZAasE4rk9gV3OVr9rHe%2FMCbjjOPDK4tcaT%2BGwzCqvZJhILlvSoYjVUBRf4cn1%2FDg%2BmqwnnmKKoPE3bxr70BAARuU7MGVL8D0VMcB3eExkZ9e2WXR2UzHMkMJviwA101aKTFHq%2Bg%2BkQOjr7MZk7O05MA4VkpZusIq%2BarUGzwY89b0%2BnFUzHIbdt2HxTAesGp32O4fGLtML%2BYz8wGOqUBM1e3D9C04dYcrVjRRFjo9p1Wj5YVQdN3WapW605d84P%2FBXJ96GQVYOsVhqp7%2BYhUieVxbiDKNy3IFo7jBr%2FTb3vqG0Xf8RGByNyuLzYiueikvjxVgf7e%2FEJ1pJDyIBfTu5x%2BQrUU12aj6%2BAuZK%2FBa4oHAAwpsyTZKy5ABrBIzalCddnWbdPjqvcaEwfUnC5NzJo4fTZoKcS0a3rnPpOE%2F3kYEysH&X-Amz-Signature=f1753c22acef884defe364f52ccba60430e590c2e3c4bfc7802ed40c30bb2963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466735Y66SB%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBnKQBFpe9N4dLzUfWGgl0VnUUhBqg8ksG1mhR5vov6fAiEAuJA5q1lMCAVirPc%2FSiIiHxIZsLWgfoYZ%2B0xQms%2BbD2cq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJGcGdfnczhHMoyy%2FircA1g9IBPSJiw%2FcumhRkTBX%2Fv6JUzz5TKBiEJi7FWvocWJpznhkmmFtWZgJ6jlvetbfLZhmGvogh8YxnJYuxES2YI%2Frf6jwsOkVeNwlR00xOGjWpJU2GkIfO%2Bd%2BmqsskNzahG1Ky%2BJEjrlhEy%2FrotQbK%2FT8XTN8BPf2yw64n%2F%2FRWzLAz04mhIxgU4WCC6krjET0rwYCwj1AsOsyGtULMlpybF68EQkdmWmKtJfOghIH%2B0moKYLC97cVLHMjC6CJD7h1vtFluwJ7uC7Q2RH0uSL9Eoxt6x0aRKQHyVH%2BL00OQwBEAWlvW7f850x1LfdhNF%2FQC%2BrWaQuHkF48BRm9lDUVDYaUSkeb6zlDsmw9MO9neE2LywBeh6zArjtOU%2B88hCQhaT%2FOGUBAeX2F3qSamhEO8vhUjCf37%2B%2FYMO%2FYqFN%2FtSpoNG3B6KHxZAasE4rk9gV3OVr9rHe%2FMCbjjOPDK4tcaT%2BGwzCqvZJhILlvSoYjVUBRf4cn1%2FDg%2BmqwnnmKKoPE3bxr70BAARuU7MGVL8D0VMcB3eExkZ9e2WXR2UzHMkMJviwA101aKTFHq%2Bg%2BkQOjr7MZk7O05MA4VkpZusIq%2BarUGzwY89b0%2BnFUzHIbdt2HxTAesGp32O4fGLtML%2BYz8wGOqUBM1e3D9C04dYcrVjRRFjo9p1Wj5YVQdN3WapW605d84P%2FBXJ96GQVYOsVhqp7%2BYhUieVxbiDKNy3IFo7jBr%2FTb3vqG0Xf8RGByNyuLzYiueikvjxVgf7e%2FEJ1pJDyIBfTu5x%2BQrUU12aj6%2BAuZK%2FBa4oHAAwpsyTZKy5ABrBIzalCddnWbdPjqvcaEwfUnC5NzJo4fTZoKcS0a3rnPpOE%2F3kYEysH&X-Amz-Signature=6310159b57fd50d9e9d41d9c85fe60047cd0e325430011de5f7dd16414256d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466735Y66SB%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBnKQBFpe9N4dLzUfWGgl0VnUUhBqg8ksG1mhR5vov6fAiEAuJA5q1lMCAVirPc%2FSiIiHxIZsLWgfoYZ%2B0xQms%2BbD2cq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJGcGdfnczhHMoyy%2FircA1g9IBPSJiw%2FcumhRkTBX%2Fv6JUzz5TKBiEJi7FWvocWJpznhkmmFtWZgJ6jlvetbfLZhmGvogh8YxnJYuxES2YI%2Frf6jwsOkVeNwlR00xOGjWpJU2GkIfO%2Bd%2BmqsskNzahG1Ky%2BJEjrlhEy%2FrotQbK%2FT8XTN8BPf2yw64n%2F%2FRWzLAz04mhIxgU4WCC6krjET0rwYCwj1AsOsyGtULMlpybF68EQkdmWmKtJfOghIH%2B0moKYLC97cVLHMjC6CJD7h1vtFluwJ7uC7Q2RH0uSL9Eoxt6x0aRKQHyVH%2BL00OQwBEAWlvW7f850x1LfdhNF%2FQC%2BrWaQuHkF48BRm9lDUVDYaUSkeb6zlDsmw9MO9neE2LywBeh6zArjtOU%2B88hCQhaT%2FOGUBAeX2F3qSamhEO8vhUjCf37%2B%2FYMO%2FYqFN%2FtSpoNG3B6KHxZAasE4rk9gV3OVr9rHe%2FMCbjjOPDK4tcaT%2BGwzCqvZJhILlvSoYjVUBRf4cn1%2FDg%2BmqwnnmKKoPE3bxr70BAARuU7MGVL8D0VMcB3eExkZ9e2WXR2UzHMkMJviwA101aKTFHq%2Bg%2BkQOjr7MZk7O05MA4VkpZusIq%2BarUGzwY89b0%2BnFUzHIbdt2HxTAesGp32O4fGLtML%2BYz8wGOqUBM1e3D9C04dYcrVjRRFjo9p1Wj5YVQdN3WapW605d84P%2FBXJ96GQVYOsVhqp7%2BYhUieVxbiDKNy3IFo7jBr%2FTb3vqG0Xf8RGByNyuLzYiueikvjxVgf7e%2FEJ1pJDyIBfTu5x%2BQrUU12aj6%2BAuZK%2FBa4oHAAwpsyTZKy5ABrBIzalCddnWbdPjqvcaEwfUnC5NzJo4fTZoKcS0a3rnPpOE%2F3kYEysH&X-Amz-Signature=440fae467f21fa8c690a63624e41910f25af8151821e2660e641d6a3c641b8e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466735Y66SB%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBnKQBFpe9N4dLzUfWGgl0VnUUhBqg8ksG1mhR5vov6fAiEAuJA5q1lMCAVirPc%2FSiIiHxIZsLWgfoYZ%2B0xQms%2BbD2cq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJGcGdfnczhHMoyy%2FircA1g9IBPSJiw%2FcumhRkTBX%2Fv6JUzz5TKBiEJi7FWvocWJpznhkmmFtWZgJ6jlvetbfLZhmGvogh8YxnJYuxES2YI%2Frf6jwsOkVeNwlR00xOGjWpJU2GkIfO%2Bd%2BmqsskNzahG1Ky%2BJEjrlhEy%2FrotQbK%2FT8XTN8BPf2yw64n%2F%2FRWzLAz04mhIxgU4WCC6krjET0rwYCwj1AsOsyGtULMlpybF68EQkdmWmKtJfOghIH%2B0moKYLC97cVLHMjC6CJD7h1vtFluwJ7uC7Q2RH0uSL9Eoxt6x0aRKQHyVH%2BL00OQwBEAWlvW7f850x1LfdhNF%2FQC%2BrWaQuHkF48BRm9lDUVDYaUSkeb6zlDsmw9MO9neE2LywBeh6zArjtOU%2B88hCQhaT%2FOGUBAeX2F3qSamhEO8vhUjCf37%2B%2FYMO%2FYqFN%2FtSpoNG3B6KHxZAasE4rk9gV3OVr9rHe%2FMCbjjOPDK4tcaT%2BGwzCqvZJhILlvSoYjVUBRf4cn1%2FDg%2BmqwnnmKKoPE3bxr70BAARuU7MGVL8D0VMcB3eExkZ9e2WXR2UzHMkMJviwA101aKTFHq%2Bg%2BkQOjr7MZk7O05MA4VkpZusIq%2BarUGzwY89b0%2BnFUzHIbdt2HxTAesGp32O4fGLtML%2BYz8wGOqUBM1e3D9C04dYcrVjRRFjo9p1Wj5YVQdN3WapW605d84P%2FBXJ96GQVYOsVhqp7%2BYhUieVxbiDKNy3IFo7jBr%2FTb3vqG0Xf8RGByNyuLzYiueikvjxVgf7e%2FEJ1pJDyIBfTu5x%2BQrUU12aj6%2BAuZK%2FBa4oHAAwpsyTZKy5ABrBIzalCddnWbdPjqvcaEwfUnC5NzJo4fTZoKcS0a3rnPpOE%2F3kYEysH&X-Amz-Signature=e1dff4e42ca369fb6b8224b75bacf3394b4fa674425e12cbead91db0a7e6c1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
