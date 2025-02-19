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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WSJ2K6B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmmrX58HTW0%2FYfkCaVCCr4%2FLhG47kvt3Npma4IGpGOAAiBpHAyFABDK1euMnbidQ4O9qCL066mxqzBDiGojwfrsnyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV0Nvl7PJ1YIp0ZdNKtwDEldn5H2s90QTXT5yCbJAOVUh6kufKeRTAMlLJ8nT1ViASJwWCiJXLR6oXNY9Uuvp%2BFlrTqg9%2F4BBW484Kl%2F5Ey%2BGfd3nNQ7jIEOuyNjSDldk4ikZiqPYdQPDx%2B20zRCpOwbIe9AC4nnokShGMhFPD%2F%2BTNXACfBmy0mCOfik%2Fawb2U1yTSUrW73lRvNlJUmQfvR0kTtoLqyjs0L9HlOTceB5KGWR2xfTuirhBNORFMuy6CdAzjMbbkvPHJDKfR7zYTaD7Y8TlxUbY0L1xLgL9OPzUtCLb6myf%2F90I6igraSwouYrR2yib2A134SEvizH4TcPGUFl2v4HmbW9ZzoxOuB5fpUUxX45Evy6PUDQRoWRAG7q6GI%2B1cLZe91cVz5Td61D56CH9Alump8HHJ%2FwCWILz2Q76kKPoFPE1axG1REnF%2FUx8%2FMLpOIRSvEsbx30ExIpRvfu7fUzfAY8Fohf2dyckFUik3wz1RbnoxxPupvIvLEiIuuX6Zu%2FJM0YvbEvphdxjFBYRvKBXWqwy%2FtmWxZzpG4lviT9owN%2F5pyTBcxgBPPQqreYgEmADOdlYb4MLgnr%2F5e8otDuvsP2tqYLzG8mSDXX5I5cS9oPSnyTY9hsb9wcBLJn%2BNJfOYncwgu%2FYvQY6pgHCnCxVoO%2B3QF6%2FUN7iyT3fpaD4pPVCcJ2XMNU7NCAVkgIjxSzNbly1TWqMyfCGOkPdZHu7ubC00wTRoIot2D0OemyTmofFWFEI%2FIv0FYfWf0369AsEBt1kd5jUuyYYcZSLlPfj7WkGj0r7JxMF%2Be1rv%2F%2BdIhMGlXuQW%2BTUH1h%2BuClGl7wMUrgfPHeWwOGSsfk0EMTnF5P21LK1QBcv8pz1jfkN5OW2&X-Amz-Signature=1c4948edb89e8144287de90ddc9d766eee867b6b3fcd77e63466e33cc7eaed09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WSJ2K6B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmmrX58HTW0%2FYfkCaVCCr4%2FLhG47kvt3Npma4IGpGOAAiBpHAyFABDK1euMnbidQ4O9qCL066mxqzBDiGojwfrsnyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV0Nvl7PJ1YIp0ZdNKtwDEldn5H2s90QTXT5yCbJAOVUh6kufKeRTAMlLJ8nT1ViASJwWCiJXLR6oXNY9Uuvp%2BFlrTqg9%2F4BBW484Kl%2F5Ey%2BGfd3nNQ7jIEOuyNjSDldk4ikZiqPYdQPDx%2B20zRCpOwbIe9AC4nnokShGMhFPD%2F%2BTNXACfBmy0mCOfik%2Fawb2U1yTSUrW73lRvNlJUmQfvR0kTtoLqyjs0L9HlOTceB5KGWR2xfTuirhBNORFMuy6CdAzjMbbkvPHJDKfR7zYTaD7Y8TlxUbY0L1xLgL9OPzUtCLb6myf%2F90I6igraSwouYrR2yib2A134SEvizH4TcPGUFl2v4HmbW9ZzoxOuB5fpUUxX45Evy6PUDQRoWRAG7q6GI%2B1cLZe91cVz5Td61D56CH9Alump8HHJ%2FwCWILz2Q76kKPoFPE1axG1REnF%2FUx8%2FMLpOIRSvEsbx30ExIpRvfu7fUzfAY8Fohf2dyckFUik3wz1RbnoxxPupvIvLEiIuuX6Zu%2FJM0YvbEvphdxjFBYRvKBXWqwy%2FtmWxZzpG4lviT9owN%2F5pyTBcxgBPPQqreYgEmADOdlYb4MLgnr%2F5e8otDuvsP2tqYLzG8mSDXX5I5cS9oPSnyTY9hsb9wcBLJn%2BNJfOYncwgu%2FYvQY6pgHCnCxVoO%2B3QF6%2FUN7iyT3fpaD4pPVCcJ2XMNU7NCAVkgIjxSzNbly1TWqMyfCGOkPdZHu7ubC00wTRoIot2D0OemyTmofFWFEI%2FIv0FYfWf0369AsEBt1kd5jUuyYYcZSLlPfj7WkGj0r7JxMF%2Be1rv%2F%2BdIhMGlXuQW%2BTUH1h%2BuClGl7wMUrgfPHeWwOGSsfk0EMTnF5P21LK1QBcv8pz1jfkN5OW2&X-Amz-Signature=354b9e59dec97934e7ad39e5e335a408c139c4b98c60ebc2e8eecc44c090ecb7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WSJ2K6B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmmrX58HTW0%2FYfkCaVCCr4%2FLhG47kvt3Npma4IGpGOAAiBpHAyFABDK1euMnbidQ4O9qCL066mxqzBDiGojwfrsnyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV0Nvl7PJ1YIp0ZdNKtwDEldn5H2s90QTXT5yCbJAOVUh6kufKeRTAMlLJ8nT1ViASJwWCiJXLR6oXNY9Uuvp%2BFlrTqg9%2F4BBW484Kl%2F5Ey%2BGfd3nNQ7jIEOuyNjSDldk4ikZiqPYdQPDx%2B20zRCpOwbIe9AC4nnokShGMhFPD%2F%2BTNXACfBmy0mCOfik%2Fawb2U1yTSUrW73lRvNlJUmQfvR0kTtoLqyjs0L9HlOTceB5KGWR2xfTuirhBNORFMuy6CdAzjMbbkvPHJDKfR7zYTaD7Y8TlxUbY0L1xLgL9OPzUtCLb6myf%2F90I6igraSwouYrR2yib2A134SEvizH4TcPGUFl2v4HmbW9ZzoxOuB5fpUUxX45Evy6PUDQRoWRAG7q6GI%2B1cLZe91cVz5Td61D56CH9Alump8HHJ%2FwCWILz2Q76kKPoFPE1axG1REnF%2FUx8%2FMLpOIRSvEsbx30ExIpRvfu7fUzfAY8Fohf2dyckFUik3wz1RbnoxxPupvIvLEiIuuX6Zu%2FJM0YvbEvphdxjFBYRvKBXWqwy%2FtmWxZzpG4lviT9owN%2F5pyTBcxgBPPQqreYgEmADOdlYb4MLgnr%2F5e8otDuvsP2tqYLzG8mSDXX5I5cS9oPSnyTY9hsb9wcBLJn%2BNJfOYncwgu%2FYvQY6pgHCnCxVoO%2B3QF6%2FUN7iyT3fpaD4pPVCcJ2XMNU7NCAVkgIjxSzNbly1TWqMyfCGOkPdZHu7ubC00wTRoIot2D0OemyTmofFWFEI%2FIv0FYfWf0369AsEBt1kd5jUuyYYcZSLlPfj7WkGj0r7JxMF%2Be1rv%2F%2BdIhMGlXuQW%2BTUH1h%2BuClGl7wMUrgfPHeWwOGSsfk0EMTnF5P21LK1QBcv8pz1jfkN5OW2&X-Amz-Signature=671c1f08c2d671e8f65304298ae93375cbffa4be54448e10cc369b71a06f1976&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WSJ2K6B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmmrX58HTW0%2FYfkCaVCCr4%2FLhG47kvt3Npma4IGpGOAAiBpHAyFABDK1euMnbidQ4O9qCL066mxqzBDiGojwfrsnyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV0Nvl7PJ1YIp0ZdNKtwDEldn5H2s90QTXT5yCbJAOVUh6kufKeRTAMlLJ8nT1ViASJwWCiJXLR6oXNY9Uuvp%2BFlrTqg9%2F4BBW484Kl%2F5Ey%2BGfd3nNQ7jIEOuyNjSDldk4ikZiqPYdQPDx%2B20zRCpOwbIe9AC4nnokShGMhFPD%2F%2BTNXACfBmy0mCOfik%2Fawb2U1yTSUrW73lRvNlJUmQfvR0kTtoLqyjs0L9HlOTceB5KGWR2xfTuirhBNORFMuy6CdAzjMbbkvPHJDKfR7zYTaD7Y8TlxUbY0L1xLgL9OPzUtCLb6myf%2F90I6igraSwouYrR2yib2A134SEvizH4TcPGUFl2v4HmbW9ZzoxOuB5fpUUxX45Evy6PUDQRoWRAG7q6GI%2B1cLZe91cVz5Td61D56CH9Alump8HHJ%2FwCWILz2Q76kKPoFPE1axG1REnF%2FUx8%2FMLpOIRSvEsbx30ExIpRvfu7fUzfAY8Fohf2dyckFUik3wz1RbnoxxPupvIvLEiIuuX6Zu%2FJM0YvbEvphdxjFBYRvKBXWqwy%2FtmWxZzpG4lviT9owN%2F5pyTBcxgBPPQqreYgEmADOdlYb4MLgnr%2F5e8otDuvsP2tqYLzG8mSDXX5I5cS9oPSnyTY9hsb9wcBLJn%2BNJfOYncwgu%2FYvQY6pgHCnCxVoO%2B3QF6%2FUN7iyT3fpaD4pPVCcJ2XMNU7NCAVkgIjxSzNbly1TWqMyfCGOkPdZHu7ubC00wTRoIot2D0OemyTmofFWFEI%2FIv0FYfWf0369AsEBt1kd5jUuyYYcZSLlPfj7WkGj0r7JxMF%2Be1rv%2F%2BdIhMGlXuQW%2BTUH1h%2BuClGl7wMUrgfPHeWwOGSsfk0EMTnF5P21LK1QBcv8pz1jfkN5OW2&X-Amz-Signature=6813bceefbb689447535ce34bac06ba41fcbf1b7fb1ce5bb53edd8f8755aa121&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WSJ2K6B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmmrX58HTW0%2FYfkCaVCCr4%2FLhG47kvt3Npma4IGpGOAAiBpHAyFABDK1euMnbidQ4O9qCL066mxqzBDiGojwfrsnyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV0Nvl7PJ1YIp0ZdNKtwDEldn5H2s90QTXT5yCbJAOVUh6kufKeRTAMlLJ8nT1ViASJwWCiJXLR6oXNY9Uuvp%2BFlrTqg9%2F4BBW484Kl%2F5Ey%2BGfd3nNQ7jIEOuyNjSDldk4ikZiqPYdQPDx%2B20zRCpOwbIe9AC4nnokShGMhFPD%2F%2BTNXACfBmy0mCOfik%2Fawb2U1yTSUrW73lRvNlJUmQfvR0kTtoLqyjs0L9HlOTceB5KGWR2xfTuirhBNORFMuy6CdAzjMbbkvPHJDKfR7zYTaD7Y8TlxUbY0L1xLgL9OPzUtCLb6myf%2F90I6igraSwouYrR2yib2A134SEvizH4TcPGUFl2v4HmbW9ZzoxOuB5fpUUxX45Evy6PUDQRoWRAG7q6GI%2B1cLZe91cVz5Td61D56CH9Alump8HHJ%2FwCWILz2Q76kKPoFPE1axG1REnF%2FUx8%2FMLpOIRSvEsbx30ExIpRvfu7fUzfAY8Fohf2dyckFUik3wz1RbnoxxPupvIvLEiIuuX6Zu%2FJM0YvbEvphdxjFBYRvKBXWqwy%2FtmWxZzpG4lviT9owN%2F5pyTBcxgBPPQqreYgEmADOdlYb4MLgnr%2F5e8otDuvsP2tqYLzG8mSDXX5I5cS9oPSnyTY9hsb9wcBLJn%2BNJfOYncwgu%2FYvQY6pgHCnCxVoO%2B3QF6%2FUN7iyT3fpaD4pPVCcJ2XMNU7NCAVkgIjxSzNbly1TWqMyfCGOkPdZHu7ubC00wTRoIot2D0OemyTmofFWFEI%2FIv0FYfWf0369AsEBt1kd5jUuyYYcZSLlPfj7WkGj0r7JxMF%2Be1rv%2F%2BdIhMGlXuQW%2BTUH1h%2BuClGl7wMUrgfPHeWwOGSsfk0EMTnF5P21LK1QBcv8pz1jfkN5OW2&X-Amz-Signature=cf4ef88ad71917218f02ac7142e630cfc9602ca16a2e2febe47ed72d29c039a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
