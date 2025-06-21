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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HRXVQV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN3Ug2m03dJpxHBjCk%2BIiKEOIjUXkXX15tSxZBM8fINgIhAM68KR%2BMqSaSOlM6YQAYVrTLV0HyrKdkUvHEAZg0AaqWKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaiapZyDkTLD6NoSsq3AMoVIylIIbHvs2YfLeczU38ZqBzgS4APd4YhKC8vcIPqSncBTBglhDzj8c4FCEGDMTWE3HWOuOYW83qKNp8b0UzSkGLN7d80tzVb%2B0nyHzomnzqbfQlMbepMCH2E6Fnrj%2BM8Wq9%2F0xkOaFE0XvbuV9CUoB0qSdCqXqTCK9UEsR1Hb%2FJIH2sm7KTGNUPhGoqug7m6tCt4H4qHrZbDQf8AWnKxwaglUCzCHyTQ3bC0tvXWxkoZmuOcbrihnUfVHmMiaBzCGW7mk8JO0Wxgk%2FP7LEC0HnMZVjQGNz5MzEtonpRpvX012jX%2Bq%2F5IIh7uL8IrJwIQRzvTkgmhoi2yS49KgNLI%2BFZIUrZ6Vz62noljytu9BwTj5u9efdNsRlMYzUZavNCv0d6ixhW9DOOmKHg%2F6LJiLY1EyPM%2BVk6BEIq5925MDF18eVJItUUeO9MPNfR8NlK1%2BKtw5oiE0f8j08zCsYTtOvTgHbnYqRPYkKYfDRSn7vOLgp2eV9foATpj6YZKz99%2Bscd8PH%2FriQYNZiZSOGUUy6AMilHTLdYZRyHVlDwKofWt0Vj1vJTXreLDdPEsihl%2FVJ2TQ4RSa%2BuOP8fn1duNryyUdrvDTv9%2FIaCoVm8tgNAwzq%2FxfjTH9UgpjDzr9jCBjqkAdonYfNAaRuEh1l%2FMqu%2FSBTslo1DQaqkc5f1%2B4mUURlJKYxlJ6pORSdDWDlws%2FnDp6P8O8Fg7ATWHZkMTi1RaKUZOKRVV%2Fa9H0sU6lsabaiFbJ1AQS64OPHrYlP6ucmU7IgO7KTDJc8l%2Bv9%2Fa5%2Fh56iHc1odbWnU9avIXSeDmp9P1iBjqviGX10e%2BOx8oK8iTNfkVOho4uV2dt1sIVz%2BJjswYuOE&X-Amz-Signature=9a7b1bd2aac32a5bd5c5909fa89dd304fa8905e0b388549252134170af1a23e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HRXVQV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN3Ug2m03dJpxHBjCk%2BIiKEOIjUXkXX15tSxZBM8fINgIhAM68KR%2BMqSaSOlM6YQAYVrTLV0HyrKdkUvHEAZg0AaqWKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaiapZyDkTLD6NoSsq3AMoVIylIIbHvs2YfLeczU38ZqBzgS4APd4YhKC8vcIPqSncBTBglhDzj8c4FCEGDMTWE3HWOuOYW83qKNp8b0UzSkGLN7d80tzVb%2B0nyHzomnzqbfQlMbepMCH2E6Fnrj%2BM8Wq9%2F0xkOaFE0XvbuV9CUoB0qSdCqXqTCK9UEsR1Hb%2FJIH2sm7KTGNUPhGoqug7m6tCt4H4qHrZbDQf8AWnKxwaglUCzCHyTQ3bC0tvXWxkoZmuOcbrihnUfVHmMiaBzCGW7mk8JO0Wxgk%2FP7LEC0HnMZVjQGNz5MzEtonpRpvX012jX%2Bq%2F5IIh7uL8IrJwIQRzvTkgmhoi2yS49KgNLI%2BFZIUrZ6Vz62noljytu9BwTj5u9efdNsRlMYzUZavNCv0d6ixhW9DOOmKHg%2F6LJiLY1EyPM%2BVk6BEIq5925MDF18eVJItUUeO9MPNfR8NlK1%2BKtw5oiE0f8j08zCsYTtOvTgHbnYqRPYkKYfDRSn7vOLgp2eV9foATpj6YZKz99%2Bscd8PH%2FriQYNZiZSOGUUy6AMilHTLdYZRyHVlDwKofWt0Vj1vJTXreLDdPEsihl%2FVJ2TQ4RSa%2BuOP8fn1duNryyUdrvDTv9%2FIaCoVm8tgNAwzq%2FxfjTH9UgpjDzr9jCBjqkAdonYfNAaRuEh1l%2FMqu%2FSBTslo1DQaqkc5f1%2B4mUURlJKYxlJ6pORSdDWDlws%2FnDp6P8O8Fg7ATWHZkMTi1RaKUZOKRVV%2Fa9H0sU6lsabaiFbJ1AQS64OPHrYlP6ucmU7IgO7KTDJc8l%2Bv9%2Fa5%2Fh56iHc1odbWnU9avIXSeDmp9P1iBjqviGX10e%2BOx8oK8iTNfkVOho4uV2dt1sIVz%2BJjswYuOE&X-Amz-Signature=3656c6a8579926469f0e2cde5d509d124d51fa95bc2e4f690c5cc86c2372d80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HRXVQV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN3Ug2m03dJpxHBjCk%2BIiKEOIjUXkXX15tSxZBM8fINgIhAM68KR%2BMqSaSOlM6YQAYVrTLV0HyrKdkUvHEAZg0AaqWKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaiapZyDkTLD6NoSsq3AMoVIylIIbHvs2YfLeczU38ZqBzgS4APd4YhKC8vcIPqSncBTBglhDzj8c4FCEGDMTWE3HWOuOYW83qKNp8b0UzSkGLN7d80tzVb%2B0nyHzomnzqbfQlMbepMCH2E6Fnrj%2BM8Wq9%2F0xkOaFE0XvbuV9CUoB0qSdCqXqTCK9UEsR1Hb%2FJIH2sm7KTGNUPhGoqug7m6tCt4H4qHrZbDQf8AWnKxwaglUCzCHyTQ3bC0tvXWxkoZmuOcbrihnUfVHmMiaBzCGW7mk8JO0Wxgk%2FP7LEC0HnMZVjQGNz5MzEtonpRpvX012jX%2Bq%2F5IIh7uL8IrJwIQRzvTkgmhoi2yS49KgNLI%2BFZIUrZ6Vz62noljytu9BwTj5u9efdNsRlMYzUZavNCv0d6ixhW9DOOmKHg%2F6LJiLY1EyPM%2BVk6BEIq5925MDF18eVJItUUeO9MPNfR8NlK1%2BKtw5oiE0f8j08zCsYTtOvTgHbnYqRPYkKYfDRSn7vOLgp2eV9foATpj6YZKz99%2Bscd8PH%2FriQYNZiZSOGUUy6AMilHTLdYZRyHVlDwKofWt0Vj1vJTXreLDdPEsihl%2FVJ2TQ4RSa%2BuOP8fn1duNryyUdrvDTv9%2FIaCoVm8tgNAwzq%2FxfjTH9UgpjDzr9jCBjqkAdonYfNAaRuEh1l%2FMqu%2FSBTslo1DQaqkc5f1%2B4mUURlJKYxlJ6pORSdDWDlws%2FnDp6P8O8Fg7ATWHZkMTi1RaKUZOKRVV%2Fa9H0sU6lsabaiFbJ1AQS64OPHrYlP6ucmU7IgO7KTDJc8l%2Bv9%2Fa5%2Fh56iHc1odbWnU9avIXSeDmp9P1iBjqviGX10e%2BOx8oK8iTNfkVOho4uV2dt1sIVz%2BJjswYuOE&X-Amz-Signature=070fad14e9a492b4deea8b6db26a2111102a08418eeee2cc46e50df834eee463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HRXVQV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN3Ug2m03dJpxHBjCk%2BIiKEOIjUXkXX15tSxZBM8fINgIhAM68KR%2BMqSaSOlM6YQAYVrTLV0HyrKdkUvHEAZg0AaqWKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaiapZyDkTLD6NoSsq3AMoVIylIIbHvs2YfLeczU38ZqBzgS4APd4YhKC8vcIPqSncBTBglhDzj8c4FCEGDMTWE3HWOuOYW83qKNp8b0UzSkGLN7d80tzVb%2B0nyHzomnzqbfQlMbepMCH2E6Fnrj%2BM8Wq9%2F0xkOaFE0XvbuV9CUoB0qSdCqXqTCK9UEsR1Hb%2FJIH2sm7KTGNUPhGoqug7m6tCt4H4qHrZbDQf8AWnKxwaglUCzCHyTQ3bC0tvXWxkoZmuOcbrihnUfVHmMiaBzCGW7mk8JO0Wxgk%2FP7LEC0HnMZVjQGNz5MzEtonpRpvX012jX%2Bq%2F5IIh7uL8IrJwIQRzvTkgmhoi2yS49KgNLI%2BFZIUrZ6Vz62noljytu9BwTj5u9efdNsRlMYzUZavNCv0d6ixhW9DOOmKHg%2F6LJiLY1EyPM%2BVk6BEIq5925MDF18eVJItUUeO9MPNfR8NlK1%2BKtw5oiE0f8j08zCsYTtOvTgHbnYqRPYkKYfDRSn7vOLgp2eV9foATpj6YZKz99%2Bscd8PH%2FriQYNZiZSOGUUy6AMilHTLdYZRyHVlDwKofWt0Vj1vJTXreLDdPEsihl%2FVJ2TQ4RSa%2BuOP8fn1duNryyUdrvDTv9%2FIaCoVm8tgNAwzq%2FxfjTH9UgpjDzr9jCBjqkAdonYfNAaRuEh1l%2FMqu%2FSBTslo1DQaqkc5f1%2B4mUURlJKYxlJ6pORSdDWDlws%2FnDp6P8O8Fg7ATWHZkMTi1RaKUZOKRVV%2Fa9H0sU6lsabaiFbJ1AQS64OPHrYlP6ucmU7IgO7KTDJc8l%2Bv9%2Fa5%2Fh56iHc1odbWnU9avIXSeDmp9P1iBjqviGX10e%2BOx8oK8iTNfkVOho4uV2dt1sIVz%2BJjswYuOE&X-Amz-Signature=df5ec10cdb6b18fa788dd9ecf2525c2b86ad9ae6190682f33e26a3765db00d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HRXVQV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN3Ug2m03dJpxHBjCk%2BIiKEOIjUXkXX15tSxZBM8fINgIhAM68KR%2BMqSaSOlM6YQAYVrTLV0HyrKdkUvHEAZg0AaqWKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaiapZyDkTLD6NoSsq3AMoVIylIIbHvs2YfLeczU38ZqBzgS4APd4YhKC8vcIPqSncBTBglhDzj8c4FCEGDMTWE3HWOuOYW83qKNp8b0UzSkGLN7d80tzVb%2B0nyHzomnzqbfQlMbepMCH2E6Fnrj%2BM8Wq9%2F0xkOaFE0XvbuV9CUoB0qSdCqXqTCK9UEsR1Hb%2FJIH2sm7KTGNUPhGoqug7m6tCt4H4qHrZbDQf8AWnKxwaglUCzCHyTQ3bC0tvXWxkoZmuOcbrihnUfVHmMiaBzCGW7mk8JO0Wxgk%2FP7LEC0HnMZVjQGNz5MzEtonpRpvX012jX%2Bq%2F5IIh7uL8IrJwIQRzvTkgmhoi2yS49KgNLI%2BFZIUrZ6Vz62noljytu9BwTj5u9efdNsRlMYzUZavNCv0d6ixhW9DOOmKHg%2F6LJiLY1EyPM%2BVk6BEIq5925MDF18eVJItUUeO9MPNfR8NlK1%2BKtw5oiE0f8j08zCsYTtOvTgHbnYqRPYkKYfDRSn7vOLgp2eV9foATpj6YZKz99%2Bscd8PH%2FriQYNZiZSOGUUy6AMilHTLdYZRyHVlDwKofWt0Vj1vJTXreLDdPEsihl%2FVJ2TQ4RSa%2BuOP8fn1duNryyUdrvDTv9%2FIaCoVm8tgNAwzq%2FxfjTH9UgpjDzr9jCBjqkAdonYfNAaRuEh1l%2FMqu%2FSBTslo1DQaqkc5f1%2B4mUURlJKYxlJ6pORSdDWDlws%2FnDp6P8O8Fg7ATWHZkMTi1RaKUZOKRVV%2Fa9H0sU6lsabaiFbJ1AQS64OPHrYlP6ucmU7IgO7KTDJc8l%2Bv9%2Fa5%2Fh56iHc1odbWnU9avIXSeDmp9P1iBjqviGX10e%2BOx8oK8iTNfkVOho4uV2dt1sIVz%2BJjswYuOE&X-Amz-Signature=a71b88f81abc135d2bd181b9247bae3e43bbb0b95af566bc98be294bd65a0716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
