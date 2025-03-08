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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC75AFXK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHeicAxlQcU2aMu3yn40CBRBxBo2OG907J6Bi7qzpSB0AiAh8wGAuuCIWVQsgxxjqk2J6uhxtorIRRaBbOho4v2m0Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMWH2ac%2B%2B46q0r%2FVeMKtwDzvMhWupGoL%2BDjgJVh3JJsYi4rx6zFmyw64BU5L9xLWQk7vK%2F7rCae0GRBd8BDqIpj81ccIHdDJza1Qn2%2F11bhnHUBtwre1DaiUPlamwHfQJFWLlt2OdKJZhTdBJ8CdX2cmrRZD6mUbzA5DTAl3hNK9e9ax9c81ySOB%2BCEVdh%2FQCpbN3CMhMhZOfGJO%2BivJP5AJg9nozPVYxF5GnXI%2Fyd6ST41Qvrvc0uIMqX5ZxZTEu54yKbcT7IojnE3TbN%2FPzSYModl8albG4i0kiCWunLfmPhl8HwrATaEN64xvvUw5zDcpFvBcIuF97yBWUgOFa4yAhxv9ORig3tcHMiutEZjOTQQ1%2FmovSWdMzhWLOgxrXVXSOXgc2C9DVJMVqln4LwgLFQaXkfhX6JLfpT87bCSzai2UM9NxgHpj%2B5De8MTClbcrjSuO09aXG3KAR%2FxE1MUpxq4UKji6nJ6XpOcklinp01iSaxZyT485%2Fczp07eeoj6Jr639qFEmg%2FInotpp0uXw%2FDlUU4cmEUZBexW4Ljp4yphZ0nXVyR9Aizo18LGliCuQpY%2Br7H4%2BRPDIwj5zsPUxE4T0u3Q4oZ24fdoERUU5%2BMEpkbo9AtsqOXkl7hDCfN4WbqROzD0dy7gXYw%2FvquvgY6pgGsmPmxU0oBut1IKPftDNpT8uzxGO9ZBWnCLTPa3u0sU%2BwDuEBCxpkucGBUWebg3joZHh67VKRamnDYqW0QuBBCsMOScdSSumi55emHSYJVRwG32lebCZund%2BrrZgQuRPNAeFkTFhJBHWntlKkc%2BPjqJN7DWpmeHGuKaYuaH4BPNJiRKDN%2BuFv7%2FRTVxzeQdC9IsXucOG3%2FwLGQH0oeC%2B5li1YXvwV%2F&X-Amz-Signature=0c237e763f02d76abfdf36c5b94560474236bd0db8b89f82bb0f25ba130bf82f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC75AFXK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHeicAxlQcU2aMu3yn40CBRBxBo2OG907J6Bi7qzpSB0AiAh8wGAuuCIWVQsgxxjqk2J6uhxtorIRRaBbOho4v2m0Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMWH2ac%2B%2B46q0r%2FVeMKtwDzvMhWupGoL%2BDjgJVh3JJsYi4rx6zFmyw64BU5L9xLWQk7vK%2F7rCae0GRBd8BDqIpj81ccIHdDJza1Qn2%2F11bhnHUBtwre1DaiUPlamwHfQJFWLlt2OdKJZhTdBJ8CdX2cmrRZD6mUbzA5DTAl3hNK9e9ax9c81ySOB%2BCEVdh%2FQCpbN3CMhMhZOfGJO%2BivJP5AJg9nozPVYxF5GnXI%2Fyd6ST41Qvrvc0uIMqX5ZxZTEu54yKbcT7IojnE3TbN%2FPzSYModl8albG4i0kiCWunLfmPhl8HwrATaEN64xvvUw5zDcpFvBcIuF97yBWUgOFa4yAhxv9ORig3tcHMiutEZjOTQQ1%2FmovSWdMzhWLOgxrXVXSOXgc2C9DVJMVqln4LwgLFQaXkfhX6JLfpT87bCSzai2UM9NxgHpj%2B5De8MTClbcrjSuO09aXG3KAR%2FxE1MUpxq4UKji6nJ6XpOcklinp01iSaxZyT485%2Fczp07eeoj6Jr639qFEmg%2FInotpp0uXw%2FDlUU4cmEUZBexW4Ljp4yphZ0nXVyR9Aizo18LGliCuQpY%2Br7H4%2BRPDIwj5zsPUxE4T0u3Q4oZ24fdoERUU5%2BMEpkbo9AtsqOXkl7hDCfN4WbqROzD0dy7gXYw%2FvquvgY6pgGsmPmxU0oBut1IKPftDNpT8uzxGO9ZBWnCLTPa3u0sU%2BwDuEBCxpkucGBUWebg3joZHh67VKRamnDYqW0QuBBCsMOScdSSumi55emHSYJVRwG32lebCZund%2BrrZgQuRPNAeFkTFhJBHWntlKkc%2BPjqJN7DWpmeHGuKaYuaH4BPNJiRKDN%2BuFv7%2FRTVxzeQdC9IsXucOG3%2FwLGQH0oeC%2B5li1YXvwV%2F&X-Amz-Signature=564220e34b88a0988b572eb2626c5677115ee3454042f1121b0dc469eec1ef33&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC75AFXK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHeicAxlQcU2aMu3yn40CBRBxBo2OG907J6Bi7qzpSB0AiAh8wGAuuCIWVQsgxxjqk2J6uhxtorIRRaBbOho4v2m0Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMWH2ac%2B%2B46q0r%2FVeMKtwDzvMhWupGoL%2BDjgJVh3JJsYi4rx6zFmyw64BU5L9xLWQk7vK%2F7rCae0GRBd8BDqIpj81ccIHdDJza1Qn2%2F11bhnHUBtwre1DaiUPlamwHfQJFWLlt2OdKJZhTdBJ8CdX2cmrRZD6mUbzA5DTAl3hNK9e9ax9c81ySOB%2BCEVdh%2FQCpbN3CMhMhZOfGJO%2BivJP5AJg9nozPVYxF5GnXI%2Fyd6ST41Qvrvc0uIMqX5ZxZTEu54yKbcT7IojnE3TbN%2FPzSYModl8albG4i0kiCWunLfmPhl8HwrATaEN64xvvUw5zDcpFvBcIuF97yBWUgOFa4yAhxv9ORig3tcHMiutEZjOTQQ1%2FmovSWdMzhWLOgxrXVXSOXgc2C9DVJMVqln4LwgLFQaXkfhX6JLfpT87bCSzai2UM9NxgHpj%2B5De8MTClbcrjSuO09aXG3KAR%2FxE1MUpxq4UKji6nJ6XpOcklinp01iSaxZyT485%2Fczp07eeoj6Jr639qFEmg%2FInotpp0uXw%2FDlUU4cmEUZBexW4Ljp4yphZ0nXVyR9Aizo18LGliCuQpY%2Br7H4%2BRPDIwj5zsPUxE4T0u3Q4oZ24fdoERUU5%2BMEpkbo9AtsqOXkl7hDCfN4WbqROzD0dy7gXYw%2FvquvgY6pgGsmPmxU0oBut1IKPftDNpT8uzxGO9ZBWnCLTPa3u0sU%2BwDuEBCxpkucGBUWebg3joZHh67VKRamnDYqW0QuBBCsMOScdSSumi55emHSYJVRwG32lebCZund%2BrrZgQuRPNAeFkTFhJBHWntlKkc%2BPjqJN7DWpmeHGuKaYuaH4BPNJiRKDN%2BuFv7%2FRTVxzeQdC9IsXucOG3%2FwLGQH0oeC%2B5li1YXvwV%2F&X-Amz-Signature=337fb1a217a0faf355fe19cda6e12a112834c05f35beb22ffd24dfb06643083d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC75AFXK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHeicAxlQcU2aMu3yn40CBRBxBo2OG907J6Bi7qzpSB0AiAh8wGAuuCIWVQsgxxjqk2J6uhxtorIRRaBbOho4v2m0Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMWH2ac%2B%2B46q0r%2FVeMKtwDzvMhWupGoL%2BDjgJVh3JJsYi4rx6zFmyw64BU5L9xLWQk7vK%2F7rCae0GRBd8BDqIpj81ccIHdDJza1Qn2%2F11bhnHUBtwre1DaiUPlamwHfQJFWLlt2OdKJZhTdBJ8CdX2cmrRZD6mUbzA5DTAl3hNK9e9ax9c81ySOB%2BCEVdh%2FQCpbN3CMhMhZOfGJO%2BivJP5AJg9nozPVYxF5GnXI%2Fyd6ST41Qvrvc0uIMqX5ZxZTEu54yKbcT7IojnE3TbN%2FPzSYModl8albG4i0kiCWunLfmPhl8HwrATaEN64xvvUw5zDcpFvBcIuF97yBWUgOFa4yAhxv9ORig3tcHMiutEZjOTQQ1%2FmovSWdMzhWLOgxrXVXSOXgc2C9DVJMVqln4LwgLFQaXkfhX6JLfpT87bCSzai2UM9NxgHpj%2B5De8MTClbcrjSuO09aXG3KAR%2FxE1MUpxq4UKji6nJ6XpOcklinp01iSaxZyT485%2Fczp07eeoj6Jr639qFEmg%2FInotpp0uXw%2FDlUU4cmEUZBexW4Ljp4yphZ0nXVyR9Aizo18LGliCuQpY%2Br7H4%2BRPDIwj5zsPUxE4T0u3Q4oZ24fdoERUU5%2BMEpkbo9AtsqOXkl7hDCfN4WbqROzD0dy7gXYw%2FvquvgY6pgGsmPmxU0oBut1IKPftDNpT8uzxGO9ZBWnCLTPa3u0sU%2BwDuEBCxpkucGBUWebg3joZHh67VKRamnDYqW0QuBBCsMOScdSSumi55emHSYJVRwG32lebCZund%2BrrZgQuRPNAeFkTFhJBHWntlKkc%2BPjqJN7DWpmeHGuKaYuaH4BPNJiRKDN%2BuFv7%2FRTVxzeQdC9IsXucOG3%2FwLGQH0oeC%2B5li1YXvwV%2F&X-Amz-Signature=3d195379d9b6de2fb6f38d92ca135d80e4303aec7c8f77ce8774aa22fbc6b651&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC75AFXK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHeicAxlQcU2aMu3yn40CBRBxBo2OG907J6Bi7qzpSB0AiAh8wGAuuCIWVQsgxxjqk2J6uhxtorIRRaBbOho4v2m0Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMWH2ac%2B%2B46q0r%2FVeMKtwDzvMhWupGoL%2BDjgJVh3JJsYi4rx6zFmyw64BU5L9xLWQk7vK%2F7rCae0GRBd8BDqIpj81ccIHdDJza1Qn2%2F11bhnHUBtwre1DaiUPlamwHfQJFWLlt2OdKJZhTdBJ8CdX2cmrRZD6mUbzA5DTAl3hNK9e9ax9c81ySOB%2BCEVdh%2FQCpbN3CMhMhZOfGJO%2BivJP5AJg9nozPVYxF5GnXI%2Fyd6ST41Qvrvc0uIMqX5ZxZTEu54yKbcT7IojnE3TbN%2FPzSYModl8albG4i0kiCWunLfmPhl8HwrATaEN64xvvUw5zDcpFvBcIuF97yBWUgOFa4yAhxv9ORig3tcHMiutEZjOTQQ1%2FmovSWdMzhWLOgxrXVXSOXgc2C9DVJMVqln4LwgLFQaXkfhX6JLfpT87bCSzai2UM9NxgHpj%2B5De8MTClbcrjSuO09aXG3KAR%2FxE1MUpxq4UKji6nJ6XpOcklinp01iSaxZyT485%2Fczp07eeoj6Jr639qFEmg%2FInotpp0uXw%2FDlUU4cmEUZBexW4Ljp4yphZ0nXVyR9Aizo18LGliCuQpY%2Br7H4%2BRPDIwj5zsPUxE4T0u3Q4oZ24fdoERUU5%2BMEpkbo9AtsqOXkl7hDCfN4WbqROzD0dy7gXYw%2FvquvgY6pgGsmPmxU0oBut1IKPftDNpT8uzxGO9ZBWnCLTPa3u0sU%2BwDuEBCxpkucGBUWebg3joZHh67VKRamnDYqW0QuBBCsMOScdSSumi55emHSYJVRwG32lebCZund%2BrrZgQuRPNAeFkTFhJBHWntlKkc%2BPjqJN7DWpmeHGuKaYuaH4BPNJiRKDN%2BuFv7%2FRTVxzeQdC9IsXucOG3%2FwLGQH0oeC%2B5li1YXvwV%2F&X-Amz-Signature=cd9dc6ab8c6d6cb83766584cf518b08698ef48cbd49ba74061b4cc19fdb0d359&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
