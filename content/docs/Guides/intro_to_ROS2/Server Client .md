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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBKYEA4Z%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIA7r0Hw0L5%2B7zJz%2B0YtAWkktkwZTNAO7D6FPCcMDh7lbAiBOIFVhsk7iVYaNGxzKaJWz%2BOfP9CiS4Cc9QeENDLQOmCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMtIT5JgHzv0So6hBNKtwDwij83kYxWXMuRi93fAssYfjZcmBexBgeUEpQdF0QC%2BodmyVBxVca52ZcptrFibonc2k1YFGYCYFVk%2BFXs87zlHTrxXzHL%2FbnBQN%2BKkm4dlZ90U1WXMfSzXHDmLUFOewN5dEG%2BtNhmCzj91w2Ezxo0JI%2Fxb1I4hf8IMaC1xenMVjz3viFz21NCPP2cFB7%2F0lSIbWp%2BNj3L32eIqR5rFMOkVSqWQwgufcgx0rWOa7vkRgIwvp8quc5doyOUys%2ByBZ2PJVwciczb2YKgaHTG76dTBC6hp37dcoeceSsXBtjyNRaLeRi4liYD%2BM5twwdCyMoV%2FyIUsFz%2FYNTMM2Bb1RMShk8ycmLiMhW0qfC8I1gpuSW9fixdA7R6PQve%2B8klcm2jzRith9DfS0pTYbTN%2F69nYLWG51i39TkKo%2Bq8JZJOepwp2YQzoTeu%2BjQ5%2BXss3IscjXWctQPOEnbsQw2BgzhR5wKQzZkfR%2BZImzt7h8JhEJ6ybE0%2BJkzkDgI%2BzELJ2Oi3qhWmlu7qMceYcVC2wnDq4JgxmgX%2FQOU%2FHFFGJHAAJYLU7vaRsCoylXZmUvTA9FXrckvT4bAInCoDUjY%2B0gj5O45TN7oEXo%2B4vUO93lqw1cSkdFlLaZH%2B9bKyi4wxIzwwgY6pgFzu8FRCQzNa3kCMKlS7qzuNDnvtYpbYe6x%2Bq9YguTTGMBTk7tDg1cLAXkyTxdK7a00BtUrsylaShX6SJ6OUHfPFZekKoS3sLV6rKQBFBaq6%2BllfxdFA0CbOZFe5sgwG1ZHbwsxhsCqZzZhiepC6hBsNpiYOTETxHOqKkvNfnVvvp4iwWboM%2BcPd2lD5uztuP5yG0gwU%2FhL9FpPdITTAnOXp49xNbku&X-Amz-Signature=74f2db03ffeda9c5130cb068914de249dd479d5a08b68cbf2071269610243619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBKYEA4Z%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIA7r0Hw0L5%2B7zJz%2B0YtAWkktkwZTNAO7D6FPCcMDh7lbAiBOIFVhsk7iVYaNGxzKaJWz%2BOfP9CiS4Cc9QeENDLQOmCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMtIT5JgHzv0So6hBNKtwDwij83kYxWXMuRi93fAssYfjZcmBexBgeUEpQdF0QC%2BodmyVBxVca52ZcptrFibonc2k1YFGYCYFVk%2BFXs87zlHTrxXzHL%2FbnBQN%2BKkm4dlZ90U1WXMfSzXHDmLUFOewN5dEG%2BtNhmCzj91w2Ezxo0JI%2Fxb1I4hf8IMaC1xenMVjz3viFz21NCPP2cFB7%2F0lSIbWp%2BNj3L32eIqR5rFMOkVSqWQwgufcgx0rWOa7vkRgIwvp8quc5doyOUys%2ByBZ2PJVwciczb2YKgaHTG76dTBC6hp37dcoeceSsXBtjyNRaLeRi4liYD%2BM5twwdCyMoV%2FyIUsFz%2FYNTMM2Bb1RMShk8ycmLiMhW0qfC8I1gpuSW9fixdA7R6PQve%2B8klcm2jzRith9DfS0pTYbTN%2F69nYLWG51i39TkKo%2Bq8JZJOepwp2YQzoTeu%2BjQ5%2BXss3IscjXWctQPOEnbsQw2BgzhR5wKQzZkfR%2BZImzt7h8JhEJ6ybE0%2BJkzkDgI%2BzELJ2Oi3qhWmlu7qMceYcVC2wnDq4JgxmgX%2FQOU%2FHFFGJHAAJYLU7vaRsCoylXZmUvTA9FXrckvT4bAInCoDUjY%2B0gj5O45TN7oEXo%2B4vUO93lqw1cSkdFlLaZH%2B9bKyi4wxIzwwgY6pgFzu8FRCQzNa3kCMKlS7qzuNDnvtYpbYe6x%2Bq9YguTTGMBTk7tDg1cLAXkyTxdK7a00BtUrsylaShX6SJ6OUHfPFZekKoS3sLV6rKQBFBaq6%2BllfxdFA0CbOZFe5sgwG1ZHbwsxhsCqZzZhiepC6hBsNpiYOTETxHOqKkvNfnVvvp4iwWboM%2BcPd2lD5uztuP5yG0gwU%2FhL9FpPdITTAnOXp49xNbku&X-Amz-Signature=aa292c273a28ad1a35ce036f703ea559097ee1a6230f5cdfd632c0e1ba8112cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBKYEA4Z%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIA7r0Hw0L5%2B7zJz%2B0YtAWkktkwZTNAO7D6FPCcMDh7lbAiBOIFVhsk7iVYaNGxzKaJWz%2BOfP9CiS4Cc9QeENDLQOmCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMtIT5JgHzv0So6hBNKtwDwij83kYxWXMuRi93fAssYfjZcmBexBgeUEpQdF0QC%2BodmyVBxVca52ZcptrFibonc2k1YFGYCYFVk%2BFXs87zlHTrxXzHL%2FbnBQN%2BKkm4dlZ90U1WXMfSzXHDmLUFOewN5dEG%2BtNhmCzj91w2Ezxo0JI%2Fxb1I4hf8IMaC1xenMVjz3viFz21NCPP2cFB7%2F0lSIbWp%2BNj3L32eIqR5rFMOkVSqWQwgufcgx0rWOa7vkRgIwvp8quc5doyOUys%2ByBZ2PJVwciczb2YKgaHTG76dTBC6hp37dcoeceSsXBtjyNRaLeRi4liYD%2BM5twwdCyMoV%2FyIUsFz%2FYNTMM2Bb1RMShk8ycmLiMhW0qfC8I1gpuSW9fixdA7R6PQve%2B8klcm2jzRith9DfS0pTYbTN%2F69nYLWG51i39TkKo%2Bq8JZJOepwp2YQzoTeu%2BjQ5%2BXss3IscjXWctQPOEnbsQw2BgzhR5wKQzZkfR%2BZImzt7h8JhEJ6ybE0%2BJkzkDgI%2BzELJ2Oi3qhWmlu7qMceYcVC2wnDq4JgxmgX%2FQOU%2FHFFGJHAAJYLU7vaRsCoylXZmUvTA9FXrckvT4bAInCoDUjY%2B0gj5O45TN7oEXo%2B4vUO93lqw1cSkdFlLaZH%2B9bKyi4wxIzwwgY6pgFzu8FRCQzNa3kCMKlS7qzuNDnvtYpbYe6x%2Bq9YguTTGMBTk7tDg1cLAXkyTxdK7a00BtUrsylaShX6SJ6OUHfPFZekKoS3sLV6rKQBFBaq6%2BllfxdFA0CbOZFe5sgwG1ZHbwsxhsCqZzZhiepC6hBsNpiYOTETxHOqKkvNfnVvvp4iwWboM%2BcPd2lD5uztuP5yG0gwU%2FhL9FpPdITTAnOXp49xNbku&X-Amz-Signature=e2d9322589b104ea5a91b055a18bb55e270afa10ca8d49642e18fc46cb22a289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBKYEA4Z%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIA7r0Hw0L5%2B7zJz%2B0YtAWkktkwZTNAO7D6FPCcMDh7lbAiBOIFVhsk7iVYaNGxzKaJWz%2BOfP9CiS4Cc9QeENDLQOmCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMtIT5JgHzv0So6hBNKtwDwij83kYxWXMuRi93fAssYfjZcmBexBgeUEpQdF0QC%2BodmyVBxVca52ZcptrFibonc2k1YFGYCYFVk%2BFXs87zlHTrxXzHL%2FbnBQN%2BKkm4dlZ90U1WXMfSzXHDmLUFOewN5dEG%2BtNhmCzj91w2Ezxo0JI%2Fxb1I4hf8IMaC1xenMVjz3viFz21NCPP2cFB7%2F0lSIbWp%2BNj3L32eIqR5rFMOkVSqWQwgufcgx0rWOa7vkRgIwvp8quc5doyOUys%2ByBZ2PJVwciczb2YKgaHTG76dTBC6hp37dcoeceSsXBtjyNRaLeRi4liYD%2BM5twwdCyMoV%2FyIUsFz%2FYNTMM2Bb1RMShk8ycmLiMhW0qfC8I1gpuSW9fixdA7R6PQve%2B8klcm2jzRith9DfS0pTYbTN%2F69nYLWG51i39TkKo%2Bq8JZJOepwp2YQzoTeu%2BjQ5%2BXss3IscjXWctQPOEnbsQw2BgzhR5wKQzZkfR%2BZImzt7h8JhEJ6ybE0%2BJkzkDgI%2BzELJ2Oi3qhWmlu7qMceYcVC2wnDq4JgxmgX%2FQOU%2FHFFGJHAAJYLU7vaRsCoylXZmUvTA9FXrckvT4bAInCoDUjY%2B0gj5O45TN7oEXo%2B4vUO93lqw1cSkdFlLaZH%2B9bKyi4wxIzwwgY6pgFzu8FRCQzNa3kCMKlS7qzuNDnvtYpbYe6x%2Bq9YguTTGMBTk7tDg1cLAXkyTxdK7a00BtUrsylaShX6SJ6OUHfPFZekKoS3sLV6rKQBFBaq6%2BllfxdFA0CbOZFe5sgwG1ZHbwsxhsCqZzZhiepC6hBsNpiYOTETxHOqKkvNfnVvvp4iwWboM%2BcPd2lD5uztuP5yG0gwU%2FhL9FpPdITTAnOXp49xNbku&X-Amz-Signature=f2b0ca166205efd54988719ff3155adeb77ca2b2387f2b6775ece51efb11cb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBKYEA4Z%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIA7r0Hw0L5%2B7zJz%2B0YtAWkktkwZTNAO7D6FPCcMDh7lbAiBOIFVhsk7iVYaNGxzKaJWz%2BOfP9CiS4Cc9QeENDLQOmCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMtIT5JgHzv0So6hBNKtwDwij83kYxWXMuRi93fAssYfjZcmBexBgeUEpQdF0QC%2BodmyVBxVca52ZcptrFibonc2k1YFGYCYFVk%2BFXs87zlHTrxXzHL%2FbnBQN%2BKkm4dlZ90U1WXMfSzXHDmLUFOewN5dEG%2BtNhmCzj91w2Ezxo0JI%2Fxb1I4hf8IMaC1xenMVjz3viFz21NCPP2cFB7%2F0lSIbWp%2BNj3L32eIqR5rFMOkVSqWQwgufcgx0rWOa7vkRgIwvp8quc5doyOUys%2ByBZ2PJVwciczb2YKgaHTG76dTBC6hp37dcoeceSsXBtjyNRaLeRi4liYD%2BM5twwdCyMoV%2FyIUsFz%2FYNTMM2Bb1RMShk8ycmLiMhW0qfC8I1gpuSW9fixdA7R6PQve%2B8klcm2jzRith9DfS0pTYbTN%2F69nYLWG51i39TkKo%2Bq8JZJOepwp2YQzoTeu%2BjQ5%2BXss3IscjXWctQPOEnbsQw2BgzhR5wKQzZkfR%2BZImzt7h8JhEJ6ybE0%2BJkzkDgI%2BzELJ2Oi3qhWmlu7qMceYcVC2wnDq4JgxmgX%2FQOU%2FHFFGJHAAJYLU7vaRsCoylXZmUvTA9FXrckvT4bAInCoDUjY%2B0gj5O45TN7oEXo%2B4vUO93lqw1cSkdFlLaZH%2B9bKyi4wxIzwwgY6pgFzu8FRCQzNa3kCMKlS7qzuNDnvtYpbYe6x%2Bq9YguTTGMBTk7tDg1cLAXkyTxdK7a00BtUrsylaShX6SJ6OUHfPFZekKoS3sLV6rKQBFBaq6%2BllfxdFA0CbOZFe5sgwG1ZHbwsxhsCqZzZhiepC6hBsNpiYOTETxHOqKkvNfnVvvp4iwWboM%2BcPd2lD5uztuP5yG0gwU%2FhL9FpPdITTAnOXp49xNbku&X-Amz-Signature=787fca15129420d9f49365e82422c00295d3bb8b8a27df2e140b722edc59d5e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
