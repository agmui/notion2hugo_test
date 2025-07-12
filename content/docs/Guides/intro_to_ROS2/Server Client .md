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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIEFJAU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQyzGvxFeAWefJ1WevxGoqBEimhJ2NlrMygHUfjie%2FOAiAKhbm3IGHeAX%2FrfrbAQMNwuGG%2B%2Bg0pGb7kKyYiU7NwpSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwV2wTVAy79U1er9YKtwDb%2FQvqgUJ0I4Jk7AzH6Azu3ClYH5YVLna1Ojnl8eitP3CeyoZHdEZSXXmLqkKiQkXfPrV%2BwvtqSpzPyCevmE1HOOdcbbl67W2ggX1tD3vtx%2BXdF1KkYFRNE5TJwjxbKB%2FNrkxhtA2EvKVCsdzpKXVp2iH1pbfsasTp07nin%2BuGVAD4RChiYS%2F%2BBmp52%2BEq0QFBZlXTogyT18Rh0KwXykq04WDhqI3Xhc6dwABGjWQjrxP%2BQ7COOD41G07E20wrW6CFojvPevhiYEftiLFjdvI1xvy7oOZsTPDSWIICOmKbCZjJ6jvXT9WuJWNB9xm5NhBgNT6Q78QUrF88qGmCf7yLvDPkxDFmQopJiG7qmqkCnb%2FdXxSx13eNxM%2B1POgnn4wkGrBYD1A3ZOU8gd4fFJrZmh6zp2kR0bon2kAq1eE2mchI0%2B6tnyS0jcKLvZ6HD%2Fohg1cUpSZN%2B%2BtHf8%2BLhghQ%2FQ1wXirgv%2BXp4NL3UeKBWlOVJcT7sR8sXzFzVgDZKTPFGouSLZvgEvm8b2mWbw%2BH5yRJ43vP%2FhvBnk%2FCMrpENJDuUClExJo8taG%2FBsn8fS63WJ02ScMwFC4CIShN%2BujfbLLEh%2BrXglJWKKtiO7z8Mz37l27fzdIC5MRqHIw%2BYPLwwY6pgEfzkIj%2BaTUapqWDD6gzSc8zL1bsQuV9EZJ9RywcPy54GFhd05l4dVMpPa%2Fg9G9VzE%2BDsZmUEZ65h3rjp6RdJIgkL32XOOasBhQsWk9Tk7OTiwKQp1YTCd6i9LOIrsj1msQnDQ02IfHx4m7u7aoMk6qHXHOJ%2F8IfjvBdXTEeGLjj96MOkwxjdUh0cI4eIxXjSWDDTBuevbIMkqwNLqMPbnEC8gU8F1S&X-Amz-Signature=d4be072d1d69a86124cadfbb352bd5d63fe7cfa67fe21cd2185c06a356c5b010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIEFJAU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQyzGvxFeAWefJ1WevxGoqBEimhJ2NlrMygHUfjie%2FOAiAKhbm3IGHeAX%2FrfrbAQMNwuGG%2B%2Bg0pGb7kKyYiU7NwpSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwV2wTVAy79U1er9YKtwDb%2FQvqgUJ0I4Jk7AzH6Azu3ClYH5YVLna1Ojnl8eitP3CeyoZHdEZSXXmLqkKiQkXfPrV%2BwvtqSpzPyCevmE1HOOdcbbl67W2ggX1tD3vtx%2BXdF1KkYFRNE5TJwjxbKB%2FNrkxhtA2EvKVCsdzpKXVp2iH1pbfsasTp07nin%2BuGVAD4RChiYS%2F%2BBmp52%2BEq0QFBZlXTogyT18Rh0KwXykq04WDhqI3Xhc6dwABGjWQjrxP%2BQ7COOD41G07E20wrW6CFojvPevhiYEftiLFjdvI1xvy7oOZsTPDSWIICOmKbCZjJ6jvXT9WuJWNB9xm5NhBgNT6Q78QUrF88qGmCf7yLvDPkxDFmQopJiG7qmqkCnb%2FdXxSx13eNxM%2B1POgnn4wkGrBYD1A3ZOU8gd4fFJrZmh6zp2kR0bon2kAq1eE2mchI0%2B6tnyS0jcKLvZ6HD%2Fohg1cUpSZN%2B%2BtHf8%2BLhghQ%2FQ1wXirgv%2BXp4NL3UeKBWlOVJcT7sR8sXzFzVgDZKTPFGouSLZvgEvm8b2mWbw%2BH5yRJ43vP%2FhvBnk%2FCMrpENJDuUClExJo8taG%2FBsn8fS63WJ02ScMwFC4CIShN%2BujfbLLEh%2BrXglJWKKtiO7z8Mz37l27fzdIC5MRqHIw%2BYPLwwY6pgEfzkIj%2BaTUapqWDD6gzSc8zL1bsQuV9EZJ9RywcPy54GFhd05l4dVMpPa%2Fg9G9VzE%2BDsZmUEZ65h3rjp6RdJIgkL32XOOasBhQsWk9Tk7OTiwKQp1YTCd6i9LOIrsj1msQnDQ02IfHx4m7u7aoMk6qHXHOJ%2F8IfjvBdXTEeGLjj96MOkwxjdUh0cI4eIxXjSWDDTBuevbIMkqwNLqMPbnEC8gU8F1S&X-Amz-Signature=313e4eb5d5c24d9f1c318a8d5a65dabb6076f5ac7e7937448c3250262e0d387d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIEFJAU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQyzGvxFeAWefJ1WevxGoqBEimhJ2NlrMygHUfjie%2FOAiAKhbm3IGHeAX%2FrfrbAQMNwuGG%2B%2Bg0pGb7kKyYiU7NwpSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwV2wTVAy79U1er9YKtwDb%2FQvqgUJ0I4Jk7AzH6Azu3ClYH5YVLna1Ojnl8eitP3CeyoZHdEZSXXmLqkKiQkXfPrV%2BwvtqSpzPyCevmE1HOOdcbbl67W2ggX1tD3vtx%2BXdF1KkYFRNE5TJwjxbKB%2FNrkxhtA2EvKVCsdzpKXVp2iH1pbfsasTp07nin%2BuGVAD4RChiYS%2F%2BBmp52%2BEq0QFBZlXTogyT18Rh0KwXykq04WDhqI3Xhc6dwABGjWQjrxP%2BQ7COOD41G07E20wrW6CFojvPevhiYEftiLFjdvI1xvy7oOZsTPDSWIICOmKbCZjJ6jvXT9WuJWNB9xm5NhBgNT6Q78QUrF88qGmCf7yLvDPkxDFmQopJiG7qmqkCnb%2FdXxSx13eNxM%2B1POgnn4wkGrBYD1A3ZOU8gd4fFJrZmh6zp2kR0bon2kAq1eE2mchI0%2B6tnyS0jcKLvZ6HD%2Fohg1cUpSZN%2B%2BtHf8%2BLhghQ%2FQ1wXirgv%2BXp4NL3UeKBWlOVJcT7sR8sXzFzVgDZKTPFGouSLZvgEvm8b2mWbw%2BH5yRJ43vP%2FhvBnk%2FCMrpENJDuUClExJo8taG%2FBsn8fS63WJ02ScMwFC4CIShN%2BujfbLLEh%2BrXglJWKKtiO7z8Mz37l27fzdIC5MRqHIw%2BYPLwwY6pgEfzkIj%2BaTUapqWDD6gzSc8zL1bsQuV9EZJ9RywcPy54GFhd05l4dVMpPa%2Fg9G9VzE%2BDsZmUEZ65h3rjp6RdJIgkL32XOOasBhQsWk9Tk7OTiwKQp1YTCd6i9LOIrsj1msQnDQ02IfHx4m7u7aoMk6qHXHOJ%2F8IfjvBdXTEeGLjj96MOkwxjdUh0cI4eIxXjSWDDTBuevbIMkqwNLqMPbnEC8gU8F1S&X-Amz-Signature=ea18afb8f9d0d97a481763304dbcd6dfe3d05215ada5d2159bd86fe8a9c6b589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIEFJAU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQyzGvxFeAWefJ1WevxGoqBEimhJ2NlrMygHUfjie%2FOAiAKhbm3IGHeAX%2FrfrbAQMNwuGG%2B%2Bg0pGb7kKyYiU7NwpSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwV2wTVAy79U1er9YKtwDb%2FQvqgUJ0I4Jk7AzH6Azu3ClYH5YVLna1Ojnl8eitP3CeyoZHdEZSXXmLqkKiQkXfPrV%2BwvtqSpzPyCevmE1HOOdcbbl67W2ggX1tD3vtx%2BXdF1KkYFRNE5TJwjxbKB%2FNrkxhtA2EvKVCsdzpKXVp2iH1pbfsasTp07nin%2BuGVAD4RChiYS%2F%2BBmp52%2BEq0QFBZlXTogyT18Rh0KwXykq04WDhqI3Xhc6dwABGjWQjrxP%2BQ7COOD41G07E20wrW6CFojvPevhiYEftiLFjdvI1xvy7oOZsTPDSWIICOmKbCZjJ6jvXT9WuJWNB9xm5NhBgNT6Q78QUrF88qGmCf7yLvDPkxDFmQopJiG7qmqkCnb%2FdXxSx13eNxM%2B1POgnn4wkGrBYD1A3ZOU8gd4fFJrZmh6zp2kR0bon2kAq1eE2mchI0%2B6tnyS0jcKLvZ6HD%2Fohg1cUpSZN%2B%2BtHf8%2BLhghQ%2FQ1wXirgv%2BXp4NL3UeKBWlOVJcT7sR8sXzFzVgDZKTPFGouSLZvgEvm8b2mWbw%2BH5yRJ43vP%2FhvBnk%2FCMrpENJDuUClExJo8taG%2FBsn8fS63WJ02ScMwFC4CIShN%2BujfbLLEh%2BrXglJWKKtiO7z8Mz37l27fzdIC5MRqHIw%2BYPLwwY6pgEfzkIj%2BaTUapqWDD6gzSc8zL1bsQuV9EZJ9RywcPy54GFhd05l4dVMpPa%2Fg9G9VzE%2BDsZmUEZ65h3rjp6RdJIgkL32XOOasBhQsWk9Tk7OTiwKQp1YTCd6i9LOIrsj1msQnDQ02IfHx4m7u7aoMk6qHXHOJ%2F8IfjvBdXTEeGLjj96MOkwxjdUh0cI4eIxXjSWDDTBuevbIMkqwNLqMPbnEC8gU8F1S&X-Amz-Signature=94001cf1692214230ddef393078bb364d42bbbba50af37717c1b98b824fe4d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIEFJAU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQyzGvxFeAWefJ1WevxGoqBEimhJ2NlrMygHUfjie%2FOAiAKhbm3IGHeAX%2FrfrbAQMNwuGG%2B%2Bg0pGb7kKyYiU7NwpSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwV2wTVAy79U1er9YKtwDb%2FQvqgUJ0I4Jk7AzH6Azu3ClYH5YVLna1Ojnl8eitP3CeyoZHdEZSXXmLqkKiQkXfPrV%2BwvtqSpzPyCevmE1HOOdcbbl67W2ggX1tD3vtx%2BXdF1KkYFRNE5TJwjxbKB%2FNrkxhtA2EvKVCsdzpKXVp2iH1pbfsasTp07nin%2BuGVAD4RChiYS%2F%2BBmp52%2BEq0QFBZlXTogyT18Rh0KwXykq04WDhqI3Xhc6dwABGjWQjrxP%2BQ7COOD41G07E20wrW6CFojvPevhiYEftiLFjdvI1xvy7oOZsTPDSWIICOmKbCZjJ6jvXT9WuJWNB9xm5NhBgNT6Q78QUrF88qGmCf7yLvDPkxDFmQopJiG7qmqkCnb%2FdXxSx13eNxM%2B1POgnn4wkGrBYD1A3ZOU8gd4fFJrZmh6zp2kR0bon2kAq1eE2mchI0%2B6tnyS0jcKLvZ6HD%2Fohg1cUpSZN%2B%2BtHf8%2BLhghQ%2FQ1wXirgv%2BXp4NL3UeKBWlOVJcT7sR8sXzFzVgDZKTPFGouSLZvgEvm8b2mWbw%2BH5yRJ43vP%2FhvBnk%2FCMrpENJDuUClExJo8taG%2FBsn8fS63WJ02ScMwFC4CIShN%2BujfbLLEh%2BrXglJWKKtiO7z8Mz37l27fzdIC5MRqHIw%2BYPLwwY6pgEfzkIj%2BaTUapqWDD6gzSc8zL1bsQuV9EZJ9RywcPy54GFhd05l4dVMpPa%2Fg9G9VzE%2BDsZmUEZ65h3rjp6RdJIgkL32XOOasBhQsWk9Tk7OTiwKQp1YTCd6i9LOIrsj1msQnDQ02IfHx4m7u7aoMk6qHXHOJ%2F8IfjvBdXTEeGLjj96MOkwxjdUh0cI4eIxXjSWDDTBuevbIMkqwNLqMPbnEC8gU8F1S&X-Amz-Signature=d01ab5aebbd60aaaf84ca0cc2e77e9886859e7fc14e344336a85b0d74552c2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
