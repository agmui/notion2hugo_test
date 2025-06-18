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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=38cd1486dbe93c069c38da5553be4cafa5010979e9c60f575ca6c05f448d44dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=ef4970cec17f683c891175386c86261b8c9d5774ec469c7ad83d1fb7c77b57e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=8a836925b68bd7d0db03a3ea7b7a3c2c791e01e48c3921072a3027109c7ad713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=1086fd56ca88af4b7766c5ccb2e7239aa576e631bbf24bb250bbe051f53dbbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=80ecca6f7451d1e6d45b0d32b32b59dff9b4b0fd6763be92caf4372938f57c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
