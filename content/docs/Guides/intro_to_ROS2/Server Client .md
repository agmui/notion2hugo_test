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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6OCZUCT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrIfNc5%2Bc0yKQKHjxNi0t6G0rHfSCPn%2B5bKFP9cd0IWAiEArC2NuvvqzIb2fZ559wPXwrKstzzo7OI8LzcwZJsKneMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJ7KDO2aO%2BdNkQjaSrcA004jLcqNpImMc21kwUsUz9IYUQCS4fcXRhG4q5gmz4%2FzpjZDHKn0TwlwYxNBTfIfbvwBVmhnenWEfE3G1EBj3lYbchNxm8XlXv8OPklx4Ub%2F2bMPsoEo0NMWP7sv9p4KpqhVgx1bp5%2BhpsKeaBFuIU4L7wd1cOQGKXoOipNLkmmM7%2BYHwmTQzBEtLsBbwhXY4r%2BYXIJebqwjmf1u8IoSSNcErSjpByxHRKxsZMqYeW5a5heqGM%2Fj8Jn4TNa2gRdbKOb4o6UBfMopZ9xZJ78iCJsrRcgUBx8mnvJHdiCdFz3dPSZ1H8y%2F4A3RXATGxdlG51z6kDyhMYcXy5wVA2wys5b9f9ND5wNJ8LPfNnyE8PQDVdF6nEb9RGDaoFPwL1oGIfXe%2F34xTamkI0DYQ7keGF1llOMQdZXXOSLF000cGiXuqdkYIZvszldfoZVFFSGPKhUcot0PN%2FI77yWgniFZYRv4a0v3UwZDLrfRTcpKVsWV4UbpVkYMdjug3YhrlSBWsHogJYZ1PlxHCXbmJBsN1pCVh18O%2BTNFkqvBhs15UAmdg66OeutBQQrtBhzt%2FEvtD9pv%2BstQjwLdwg59sxKmFy9h71McqElPk0QTYUgwQY%2B9RT0xjBwg7FNIzJJMIn79rwGOqUBZ3juCTlTGiXOO6gFcfwHZlnER%2FS4TGyqZkoFdsGDGTja8sFsuS2MIzZtO2u%2FJtZacoHWHppAZxGZTxphKLH0uFq7qxM247gHiVDTP28uFuG%2FgguYXnz%2BAfsLL1I%2BKCkQKhoLIMZCOl5jj05LD1abWYkO2fdi7EkWHMMsm%2FyGeQivjReDGQcIGqgkdeTjCw5zDSbPG60dqfceJzaldSxqVmeitjYa&X-Amz-Signature=58d298bef6cd9dd5af9bd7eb09fac03403a35fd7ab3fd963e24e9e06d9dca5a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6OCZUCT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrIfNc5%2Bc0yKQKHjxNi0t6G0rHfSCPn%2B5bKFP9cd0IWAiEArC2NuvvqzIb2fZ559wPXwrKstzzo7OI8LzcwZJsKneMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJ7KDO2aO%2BdNkQjaSrcA004jLcqNpImMc21kwUsUz9IYUQCS4fcXRhG4q5gmz4%2FzpjZDHKn0TwlwYxNBTfIfbvwBVmhnenWEfE3G1EBj3lYbchNxm8XlXv8OPklx4Ub%2F2bMPsoEo0NMWP7sv9p4KpqhVgx1bp5%2BhpsKeaBFuIU4L7wd1cOQGKXoOipNLkmmM7%2BYHwmTQzBEtLsBbwhXY4r%2BYXIJebqwjmf1u8IoSSNcErSjpByxHRKxsZMqYeW5a5heqGM%2Fj8Jn4TNa2gRdbKOb4o6UBfMopZ9xZJ78iCJsrRcgUBx8mnvJHdiCdFz3dPSZ1H8y%2F4A3RXATGxdlG51z6kDyhMYcXy5wVA2wys5b9f9ND5wNJ8LPfNnyE8PQDVdF6nEb9RGDaoFPwL1oGIfXe%2F34xTamkI0DYQ7keGF1llOMQdZXXOSLF000cGiXuqdkYIZvszldfoZVFFSGPKhUcot0PN%2FI77yWgniFZYRv4a0v3UwZDLrfRTcpKVsWV4UbpVkYMdjug3YhrlSBWsHogJYZ1PlxHCXbmJBsN1pCVh18O%2BTNFkqvBhs15UAmdg66OeutBQQrtBhzt%2FEvtD9pv%2BstQjwLdwg59sxKmFy9h71McqElPk0QTYUgwQY%2B9RT0xjBwg7FNIzJJMIn79rwGOqUBZ3juCTlTGiXOO6gFcfwHZlnER%2FS4TGyqZkoFdsGDGTja8sFsuS2MIzZtO2u%2FJtZacoHWHppAZxGZTxphKLH0uFq7qxM247gHiVDTP28uFuG%2FgguYXnz%2BAfsLL1I%2BKCkQKhoLIMZCOl5jj05LD1abWYkO2fdi7EkWHMMsm%2FyGeQivjReDGQcIGqgkdeTjCw5zDSbPG60dqfceJzaldSxqVmeitjYa&X-Amz-Signature=6d9db87b228c2e6a0754f89a8875d8145af0675bf70a821b420494a011c6102a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6OCZUCT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrIfNc5%2Bc0yKQKHjxNi0t6G0rHfSCPn%2B5bKFP9cd0IWAiEArC2NuvvqzIb2fZ559wPXwrKstzzo7OI8LzcwZJsKneMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJ7KDO2aO%2BdNkQjaSrcA004jLcqNpImMc21kwUsUz9IYUQCS4fcXRhG4q5gmz4%2FzpjZDHKn0TwlwYxNBTfIfbvwBVmhnenWEfE3G1EBj3lYbchNxm8XlXv8OPklx4Ub%2F2bMPsoEo0NMWP7sv9p4KpqhVgx1bp5%2BhpsKeaBFuIU4L7wd1cOQGKXoOipNLkmmM7%2BYHwmTQzBEtLsBbwhXY4r%2BYXIJebqwjmf1u8IoSSNcErSjpByxHRKxsZMqYeW5a5heqGM%2Fj8Jn4TNa2gRdbKOb4o6UBfMopZ9xZJ78iCJsrRcgUBx8mnvJHdiCdFz3dPSZ1H8y%2F4A3RXATGxdlG51z6kDyhMYcXy5wVA2wys5b9f9ND5wNJ8LPfNnyE8PQDVdF6nEb9RGDaoFPwL1oGIfXe%2F34xTamkI0DYQ7keGF1llOMQdZXXOSLF000cGiXuqdkYIZvszldfoZVFFSGPKhUcot0PN%2FI77yWgniFZYRv4a0v3UwZDLrfRTcpKVsWV4UbpVkYMdjug3YhrlSBWsHogJYZ1PlxHCXbmJBsN1pCVh18O%2BTNFkqvBhs15UAmdg66OeutBQQrtBhzt%2FEvtD9pv%2BstQjwLdwg59sxKmFy9h71McqElPk0QTYUgwQY%2B9RT0xjBwg7FNIzJJMIn79rwGOqUBZ3juCTlTGiXOO6gFcfwHZlnER%2FS4TGyqZkoFdsGDGTja8sFsuS2MIzZtO2u%2FJtZacoHWHppAZxGZTxphKLH0uFq7qxM247gHiVDTP28uFuG%2FgguYXnz%2BAfsLL1I%2BKCkQKhoLIMZCOl5jj05LD1abWYkO2fdi7EkWHMMsm%2FyGeQivjReDGQcIGqgkdeTjCw5zDSbPG60dqfceJzaldSxqVmeitjYa&X-Amz-Signature=c461f3357b020610974e2f0e0bf58b8fa4d775b6ca0ec3a8ada673922ce98c31&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6OCZUCT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrIfNc5%2Bc0yKQKHjxNi0t6G0rHfSCPn%2B5bKFP9cd0IWAiEArC2NuvvqzIb2fZ559wPXwrKstzzo7OI8LzcwZJsKneMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJ7KDO2aO%2BdNkQjaSrcA004jLcqNpImMc21kwUsUz9IYUQCS4fcXRhG4q5gmz4%2FzpjZDHKn0TwlwYxNBTfIfbvwBVmhnenWEfE3G1EBj3lYbchNxm8XlXv8OPklx4Ub%2F2bMPsoEo0NMWP7sv9p4KpqhVgx1bp5%2BhpsKeaBFuIU4L7wd1cOQGKXoOipNLkmmM7%2BYHwmTQzBEtLsBbwhXY4r%2BYXIJebqwjmf1u8IoSSNcErSjpByxHRKxsZMqYeW5a5heqGM%2Fj8Jn4TNa2gRdbKOb4o6UBfMopZ9xZJ78iCJsrRcgUBx8mnvJHdiCdFz3dPSZ1H8y%2F4A3RXATGxdlG51z6kDyhMYcXy5wVA2wys5b9f9ND5wNJ8LPfNnyE8PQDVdF6nEb9RGDaoFPwL1oGIfXe%2F34xTamkI0DYQ7keGF1llOMQdZXXOSLF000cGiXuqdkYIZvszldfoZVFFSGPKhUcot0PN%2FI77yWgniFZYRv4a0v3UwZDLrfRTcpKVsWV4UbpVkYMdjug3YhrlSBWsHogJYZ1PlxHCXbmJBsN1pCVh18O%2BTNFkqvBhs15UAmdg66OeutBQQrtBhzt%2FEvtD9pv%2BstQjwLdwg59sxKmFy9h71McqElPk0QTYUgwQY%2B9RT0xjBwg7FNIzJJMIn79rwGOqUBZ3juCTlTGiXOO6gFcfwHZlnER%2FS4TGyqZkoFdsGDGTja8sFsuS2MIzZtO2u%2FJtZacoHWHppAZxGZTxphKLH0uFq7qxM247gHiVDTP28uFuG%2FgguYXnz%2BAfsLL1I%2BKCkQKhoLIMZCOl5jj05LD1abWYkO2fdi7EkWHMMsm%2FyGeQivjReDGQcIGqgkdeTjCw5zDSbPG60dqfceJzaldSxqVmeitjYa&X-Amz-Signature=31bab38d9b6ac23f9dba23254621c4ec7fd1d4a88db1ac5477cb7d6bfec5be2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6OCZUCT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrIfNc5%2Bc0yKQKHjxNi0t6G0rHfSCPn%2B5bKFP9cd0IWAiEArC2NuvvqzIb2fZ559wPXwrKstzzo7OI8LzcwZJsKneMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJ7KDO2aO%2BdNkQjaSrcA004jLcqNpImMc21kwUsUz9IYUQCS4fcXRhG4q5gmz4%2FzpjZDHKn0TwlwYxNBTfIfbvwBVmhnenWEfE3G1EBj3lYbchNxm8XlXv8OPklx4Ub%2F2bMPsoEo0NMWP7sv9p4KpqhVgx1bp5%2BhpsKeaBFuIU4L7wd1cOQGKXoOipNLkmmM7%2BYHwmTQzBEtLsBbwhXY4r%2BYXIJebqwjmf1u8IoSSNcErSjpByxHRKxsZMqYeW5a5heqGM%2Fj8Jn4TNa2gRdbKOb4o6UBfMopZ9xZJ78iCJsrRcgUBx8mnvJHdiCdFz3dPSZ1H8y%2F4A3RXATGxdlG51z6kDyhMYcXy5wVA2wys5b9f9ND5wNJ8LPfNnyE8PQDVdF6nEb9RGDaoFPwL1oGIfXe%2F34xTamkI0DYQ7keGF1llOMQdZXXOSLF000cGiXuqdkYIZvszldfoZVFFSGPKhUcot0PN%2FI77yWgniFZYRv4a0v3UwZDLrfRTcpKVsWV4UbpVkYMdjug3YhrlSBWsHogJYZ1PlxHCXbmJBsN1pCVh18O%2BTNFkqvBhs15UAmdg66OeutBQQrtBhzt%2FEvtD9pv%2BstQjwLdwg59sxKmFy9h71McqElPk0QTYUgwQY%2B9RT0xjBwg7FNIzJJMIn79rwGOqUBZ3juCTlTGiXOO6gFcfwHZlnER%2FS4TGyqZkoFdsGDGTja8sFsuS2MIzZtO2u%2FJtZacoHWHppAZxGZTxphKLH0uFq7qxM247gHiVDTP28uFuG%2FgguYXnz%2BAfsLL1I%2BKCkQKhoLIMZCOl5jj05LD1abWYkO2fdi7EkWHMMsm%2FyGeQivjReDGQcIGqgkdeTjCw5zDSbPG60dqfceJzaldSxqVmeitjYa&X-Amz-Signature=6ad9835f83d1c57b85fa237dbc1fd9a928ab52c7fdc13af1559e92b41c58ec0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
