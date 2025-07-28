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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBT37YM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDi%2B0YA%2BOm0T238jJIAQ1vnsLHmDRtXNVeK5dULD8fQ1wIgfMD6uYHvUB9bUVzfE9BCFWZ0jSN7%2BNWr15WuXEmyt6cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwjJKPynpUQcX4ircA3awFDDDFpQIaVMJ5%2F22%2FgmZPDfWeyAGj4rLkXixFzxoyBXui0kiu%2BDAZ%2FO4EL14ZdxgX1tmas9ooRO%2BBJnhca3EQL3DEfIASnWxpHbBnYwQs9cH6aNSVIxfUrecO4YG45u6X3iaZxOBL7qMLGKquxqKG2Cu4zRjo%2B%2B5E9B8ChPscZvrR%2BTnEnKYTw02FEsDh0%2B9pGCNm%2FTxAwFbmY4ECzqrMgtjwadTpYWx4mWLgzwKeBYIqvIML10E4K%2FXnMUAeJYzMSh5NM5PxFFf00qQKUQLgk86A0dQw7mtXTSUmP%2FXihzllQiVIglTqZHQYIrU4QrcO8%2F74FYDNboHA5%2FpV2IVs4WUCIePgmYcbiJzD3Sm1fR1nSqox%2BJU9WPY3GIL3bIDjmnQ%2FF2duTKtRvg7LUmCuJ%2F9xaCruVdsmGgRnyKURBhtom9%2Bk%2BAXEgmyKcWXMU3Ojxt7N2wnsKWhjGHr0pOwd7JYbv9FruO6kSDXP%2Bv3cGMIB%2Bttp%2BfOFmPwCHHIAxPaqWdMOS%2BErs5wFjIFneQ2z4bqzisso8ZKj0mQswq7Gc8MSIFVPdI9cntPpXQs3F5YDXYjjtsMIVx5SGJnCBlOOwbkhVqjwjgaeBKr0V1V9zYThDwI%2BELQOm1tMMO5n8QGOqUB2n8KopujSZIJDvjNdnmNZUxpS0k373ICQkdHg%2B72diEYzgq0zU93fHQi%2BK%2F9lBtPygpsy5gqGeIONPzoGDYNbfMxYjCaI0Xb%2F3ASDLwXFy7o%2BZQLjdl5hTercdHC%2BodkGYklswcXbYjlQS2BQi80u3IfD29zAi%2FlwJU8RVSCdBcVCW%2BzvzLFmj9lEgDvlFmFI5w3IIy7RtmtxToLEvMYaqo%2BToRU&X-Amz-Signature=550e98d64f5a26b49572ff51763cadec41c66ff72eec448586be20250330f817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBT37YM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDi%2B0YA%2BOm0T238jJIAQ1vnsLHmDRtXNVeK5dULD8fQ1wIgfMD6uYHvUB9bUVzfE9BCFWZ0jSN7%2BNWr15WuXEmyt6cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwjJKPynpUQcX4ircA3awFDDDFpQIaVMJ5%2F22%2FgmZPDfWeyAGj4rLkXixFzxoyBXui0kiu%2BDAZ%2FO4EL14ZdxgX1tmas9ooRO%2BBJnhca3EQL3DEfIASnWxpHbBnYwQs9cH6aNSVIxfUrecO4YG45u6X3iaZxOBL7qMLGKquxqKG2Cu4zRjo%2B%2B5E9B8ChPscZvrR%2BTnEnKYTw02FEsDh0%2B9pGCNm%2FTxAwFbmY4ECzqrMgtjwadTpYWx4mWLgzwKeBYIqvIML10E4K%2FXnMUAeJYzMSh5NM5PxFFf00qQKUQLgk86A0dQw7mtXTSUmP%2FXihzllQiVIglTqZHQYIrU4QrcO8%2F74FYDNboHA5%2FpV2IVs4WUCIePgmYcbiJzD3Sm1fR1nSqox%2BJU9WPY3GIL3bIDjmnQ%2FF2duTKtRvg7LUmCuJ%2F9xaCruVdsmGgRnyKURBhtom9%2Bk%2BAXEgmyKcWXMU3Ojxt7N2wnsKWhjGHr0pOwd7JYbv9FruO6kSDXP%2Bv3cGMIB%2Bttp%2BfOFmPwCHHIAxPaqWdMOS%2BErs5wFjIFneQ2z4bqzisso8ZKj0mQswq7Gc8MSIFVPdI9cntPpXQs3F5YDXYjjtsMIVx5SGJnCBlOOwbkhVqjwjgaeBKr0V1V9zYThDwI%2BELQOm1tMMO5n8QGOqUB2n8KopujSZIJDvjNdnmNZUxpS0k373ICQkdHg%2B72diEYzgq0zU93fHQi%2BK%2F9lBtPygpsy5gqGeIONPzoGDYNbfMxYjCaI0Xb%2F3ASDLwXFy7o%2BZQLjdl5hTercdHC%2BodkGYklswcXbYjlQS2BQi80u3IfD29zAi%2FlwJU8RVSCdBcVCW%2BzvzLFmj9lEgDvlFmFI5w3IIy7RtmtxToLEvMYaqo%2BToRU&X-Amz-Signature=7d5507c6969fb0c60ec9a71b763617c880f5a7f6880e3177f4ffa239dd2fded6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBT37YM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDi%2B0YA%2BOm0T238jJIAQ1vnsLHmDRtXNVeK5dULD8fQ1wIgfMD6uYHvUB9bUVzfE9BCFWZ0jSN7%2BNWr15WuXEmyt6cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwjJKPynpUQcX4ircA3awFDDDFpQIaVMJ5%2F22%2FgmZPDfWeyAGj4rLkXixFzxoyBXui0kiu%2BDAZ%2FO4EL14ZdxgX1tmas9ooRO%2BBJnhca3EQL3DEfIASnWxpHbBnYwQs9cH6aNSVIxfUrecO4YG45u6X3iaZxOBL7qMLGKquxqKG2Cu4zRjo%2B%2B5E9B8ChPscZvrR%2BTnEnKYTw02FEsDh0%2B9pGCNm%2FTxAwFbmY4ECzqrMgtjwadTpYWx4mWLgzwKeBYIqvIML10E4K%2FXnMUAeJYzMSh5NM5PxFFf00qQKUQLgk86A0dQw7mtXTSUmP%2FXihzllQiVIglTqZHQYIrU4QrcO8%2F74FYDNboHA5%2FpV2IVs4WUCIePgmYcbiJzD3Sm1fR1nSqox%2BJU9WPY3GIL3bIDjmnQ%2FF2duTKtRvg7LUmCuJ%2F9xaCruVdsmGgRnyKURBhtom9%2Bk%2BAXEgmyKcWXMU3Ojxt7N2wnsKWhjGHr0pOwd7JYbv9FruO6kSDXP%2Bv3cGMIB%2Bttp%2BfOFmPwCHHIAxPaqWdMOS%2BErs5wFjIFneQ2z4bqzisso8ZKj0mQswq7Gc8MSIFVPdI9cntPpXQs3F5YDXYjjtsMIVx5SGJnCBlOOwbkhVqjwjgaeBKr0V1V9zYThDwI%2BELQOm1tMMO5n8QGOqUB2n8KopujSZIJDvjNdnmNZUxpS0k373ICQkdHg%2B72diEYzgq0zU93fHQi%2BK%2F9lBtPygpsy5gqGeIONPzoGDYNbfMxYjCaI0Xb%2F3ASDLwXFy7o%2BZQLjdl5hTercdHC%2BodkGYklswcXbYjlQS2BQi80u3IfD29zAi%2FlwJU8RVSCdBcVCW%2BzvzLFmj9lEgDvlFmFI5w3IIy7RtmtxToLEvMYaqo%2BToRU&X-Amz-Signature=a0197296ebdbfd96b34e0d02e61a1e5b39cc3659fb2348654f1e804795715384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBT37YM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDi%2B0YA%2BOm0T238jJIAQ1vnsLHmDRtXNVeK5dULD8fQ1wIgfMD6uYHvUB9bUVzfE9BCFWZ0jSN7%2BNWr15WuXEmyt6cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwjJKPynpUQcX4ircA3awFDDDFpQIaVMJ5%2F22%2FgmZPDfWeyAGj4rLkXixFzxoyBXui0kiu%2BDAZ%2FO4EL14ZdxgX1tmas9ooRO%2BBJnhca3EQL3DEfIASnWxpHbBnYwQs9cH6aNSVIxfUrecO4YG45u6X3iaZxOBL7qMLGKquxqKG2Cu4zRjo%2B%2B5E9B8ChPscZvrR%2BTnEnKYTw02FEsDh0%2B9pGCNm%2FTxAwFbmY4ECzqrMgtjwadTpYWx4mWLgzwKeBYIqvIML10E4K%2FXnMUAeJYzMSh5NM5PxFFf00qQKUQLgk86A0dQw7mtXTSUmP%2FXihzllQiVIglTqZHQYIrU4QrcO8%2F74FYDNboHA5%2FpV2IVs4WUCIePgmYcbiJzD3Sm1fR1nSqox%2BJU9WPY3GIL3bIDjmnQ%2FF2duTKtRvg7LUmCuJ%2F9xaCruVdsmGgRnyKURBhtom9%2Bk%2BAXEgmyKcWXMU3Ojxt7N2wnsKWhjGHr0pOwd7JYbv9FruO6kSDXP%2Bv3cGMIB%2Bttp%2BfOFmPwCHHIAxPaqWdMOS%2BErs5wFjIFneQ2z4bqzisso8ZKj0mQswq7Gc8MSIFVPdI9cntPpXQs3F5YDXYjjtsMIVx5SGJnCBlOOwbkhVqjwjgaeBKr0V1V9zYThDwI%2BELQOm1tMMO5n8QGOqUB2n8KopujSZIJDvjNdnmNZUxpS0k373ICQkdHg%2B72diEYzgq0zU93fHQi%2BK%2F9lBtPygpsy5gqGeIONPzoGDYNbfMxYjCaI0Xb%2F3ASDLwXFy7o%2BZQLjdl5hTercdHC%2BodkGYklswcXbYjlQS2BQi80u3IfD29zAi%2FlwJU8RVSCdBcVCW%2BzvzLFmj9lEgDvlFmFI5w3IIy7RtmtxToLEvMYaqo%2BToRU&X-Amz-Signature=72c64e5beb2e8154bfa42dfdf6f3c971037bcbe3ff63fe007bea3a237bb1b032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBT37YM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDi%2B0YA%2BOm0T238jJIAQ1vnsLHmDRtXNVeK5dULD8fQ1wIgfMD6uYHvUB9bUVzfE9BCFWZ0jSN7%2BNWr15WuXEmyt6cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwjJKPynpUQcX4ircA3awFDDDFpQIaVMJ5%2F22%2FgmZPDfWeyAGj4rLkXixFzxoyBXui0kiu%2BDAZ%2FO4EL14ZdxgX1tmas9ooRO%2BBJnhca3EQL3DEfIASnWxpHbBnYwQs9cH6aNSVIxfUrecO4YG45u6X3iaZxOBL7qMLGKquxqKG2Cu4zRjo%2B%2B5E9B8ChPscZvrR%2BTnEnKYTw02FEsDh0%2B9pGCNm%2FTxAwFbmY4ECzqrMgtjwadTpYWx4mWLgzwKeBYIqvIML10E4K%2FXnMUAeJYzMSh5NM5PxFFf00qQKUQLgk86A0dQw7mtXTSUmP%2FXihzllQiVIglTqZHQYIrU4QrcO8%2F74FYDNboHA5%2FpV2IVs4WUCIePgmYcbiJzD3Sm1fR1nSqox%2BJU9WPY3GIL3bIDjmnQ%2FF2duTKtRvg7LUmCuJ%2F9xaCruVdsmGgRnyKURBhtom9%2Bk%2BAXEgmyKcWXMU3Ojxt7N2wnsKWhjGHr0pOwd7JYbv9FruO6kSDXP%2Bv3cGMIB%2Bttp%2BfOFmPwCHHIAxPaqWdMOS%2BErs5wFjIFneQ2z4bqzisso8ZKj0mQswq7Gc8MSIFVPdI9cntPpXQs3F5YDXYjjtsMIVx5SGJnCBlOOwbkhVqjwjgaeBKr0V1V9zYThDwI%2BELQOm1tMMO5n8QGOqUB2n8KopujSZIJDvjNdnmNZUxpS0k373ICQkdHg%2B72diEYzgq0zU93fHQi%2BK%2F9lBtPygpsy5gqGeIONPzoGDYNbfMxYjCaI0Xb%2F3ASDLwXFy7o%2BZQLjdl5hTercdHC%2BodkGYklswcXbYjlQS2BQi80u3IfD29zAi%2FlwJU8RVSCdBcVCW%2BzvzLFmj9lEgDvlFmFI5w3IIy7RtmtxToLEvMYaqo%2BToRU&X-Amz-Signature=44eeb3104796f0a9118b04996049d33b5aad578c0a4ec59a9f42a4c39d6dccaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
