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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJ766CF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBeEQIgGnrSEsufCSD5Okma1BUu6DCZFr769089g%2FLh4AiAWd0OYcR38kUXHJ2fr5q7%2BX8fUJhYU%2FAENrTm%2B9DRS9Cr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMBaLJXn4sV8%2BMHeldKtwDiQY9vrMN4u89pEyWQGnNFu%2BgrC%2FBKnvjCaQqvd77csWaNEMXi0EVt8gr2SEHKQL9tlYi78fEXXQAVNG0ZPR9LkPcaYTvLG9zsondaYRznJB63LksxCukD7FhwGx5hSID%2BTBnXLFAf3DOIIZgab1cRsrAbfhPBCRpYBJA94K7KIVjoTxsT%2B4i7Cl%2Bjxzh9PEHrRZ9qbF%2BXgFdSjK24biFj%2BeP4E%2Fei2Ve3RKE53WtJdj2xl%2BImKuMlAhA6M8yU57k%2FnE09%2Fbb5Jp89t5fNrEtoA4L%2FqlseW3qxUFbHlSvBZTFoXIicK5FT3fETm0igODu%2BocX6gFwO9APYHRIZo%2BpDpT8fB9DNgHfA3PhKkSfvFqHM1bJdne2GCLGsv6ohejAUncvbZcpmerXFqKLp2P3L7vlcyHTGqiR0kjlrSzo6jyYJeawDx9UEL2FHc8j1RYx6SOfMCtuQMcUsVT482mYmdLhz0yJnySIuJOxR5SCXrcd1yMoOTJ34lTOGSVf%2F3XEnLbspWzTdwPoGSxGBIHZDrR6Yvb77SExsUw9xslKNbN2m9m4kSHPh4zM7WuMWTwZPV1Lke8QgQMuLrM%2FmzGNA%2FjnDLScbujL%2BgQdBjqDdw2qO0liV8a2ZCYeOyMw45HjwwY6pgHmrt4qGM3mkcW2YpjxLNc%2FKmAg%2FZ80KvIaZ%2Bn8B23ksdXt%2Be9Ie2hBoGf7687RJfGfXasElW0z9pxCNXGOXY%2B00NFFUTYSiIZReRBKfCS3LWnIiR2VRyQtudizbfVr0abRlCG6cNHWO7SB%2FcTFarm92JGsRbwCYoyc4mb%2FNoZYw9Q14yl3Jo%2FtlRxoOOBjZ74u0kIaB%2B%2B%2FrMrb3GmW15f09ARbSSgu&X-Amz-Signature=a202b1f6476607711b636d52ddbbcd604a5f317eb9b14d3737d9e1dfd8e49ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJ766CF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBeEQIgGnrSEsufCSD5Okma1BUu6DCZFr769089g%2FLh4AiAWd0OYcR38kUXHJ2fr5q7%2BX8fUJhYU%2FAENrTm%2B9DRS9Cr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMBaLJXn4sV8%2BMHeldKtwDiQY9vrMN4u89pEyWQGnNFu%2BgrC%2FBKnvjCaQqvd77csWaNEMXi0EVt8gr2SEHKQL9tlYi78fEXXQAVNG0ZPR9LkPcaYTvLG9zsondaYRznJB63LksxCukD7FhwGx5hSID%2BTBnXLFAf3DOIIZgab1cRsrAbfhPBCRpYBJA94K7KIVjoTxsT%2B4i7Cl%2Bjxzh9PEHrRZ9qbF%2BXgFdSjK24biFj%2BeP4E%2Fei2Ve3RKE53WtJdj2xl%2BImKuMlAhA6M8yU57k%2FnE09%2Fbb5Jp89t5fNrEtoA4L%2FqlseW3qxUFbHlSvBZTFoXIicK5FT3fETm0igODu%2BocX6gFwO9APYHRIZo%2BpDpT8fB9DNgHfA3PhKkSfvFqHM1bJdne2GCLGsv6ohejAUncvbZcpmerXFqKLp2P3L7vlcyHTGqiR0kjlrSzo6jyYJeawDx9UEL2FHc8j1RYx6SOfMCtuQMcUsVT482mYmdLhz0yJnySIuJOxR5SCXrcd1yMoOTJ34lTOGSVf%2F3XEnLbspWzTdwPoGSxGBIHZDrR6Yvb77SExsUw9xslKNbN2m9m4kSHPh4zM7WuMWTwZPV1Lke8QgQMuLrM%2FmzGNA%2FjnDLScbujL%2BgQdBjqDdw2qO0liV8a2ZCYeOyMw45HjwwY6pgHmrt4qGM3mkcW2YpjxLNc%2FKmAg%2FZ80KvIaZ%2Bn8B23ksdXt%2Be9Ie2hBoGf7687RJfGfXasElW0z9pxCNXGOXY%2B00NFFUTYSiIZReRBKfCS3LWnIiR2VRyQtudizbfVr0abRlCG6cNHWO7SB%2FcTFarm92JGsRbwCYoyc4mb%2FNoZYw9Q14yl3Jo%2FtlRxoOOBjZ74u0kIaB%2B%2B%2FrMrb3GmW15f09ARbSSgu&X-Amz-Signature=db256c1de452a46c4a863b26213e5a2d45fa7171626ab5af9aded980b1cfc695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJ766CF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBeEQIgGnrSEsufCSD5Okma1BUu6DCZFr769089g%2FLh4AiAWd0OYcR38kUXHJ2fr5q7%2BX8fUJhYU%2FAENrTm%2B9DRS9Cr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMBaLJXn4sV8%2BMHeldKtwDiQY9vrMN4u89pEyWQGnNFu%2BgrC%2FBKnvjCaQqvd77csWaNEMXi0EVt8gr2SEHKQL9tlYi78fEXXQAVNG0ZPR9LkPcaYTvLG9zsondaYRznJB63LksxCukD7FhwGx5hSID%2BTBnXLFAf3DOIIZgab1cRsrAbfhPBCRpYBJA94K7KIVjoTxsT%2B4i7Cl%2Bjxzh9PEHrRZ9qbF%2BXgFdSjK24biFj%2BeP4E%2Fei2Ve3RKE53WtJdj2xl%2BImKuMlAhA6M8yU57k%2FnE09%2Fbb5Jp89t5fNrEtoA4L%2FqlseW3qxUFbHlSvBZTFoXIicK5FT3fETm0igODu%2BocX6gFwO9APYHRIZo%2BpDpT8fB9DNgHfA3PhKkSfvFqHM1bJdne2GCLGsv6ohejAUncvbZcpmerXFqKLp2P3L7vlcyHTGqiR0kjlrSzo6jyYJeawDx9UEL2FHc8j1RYx6SOfMCtuQMcUsVT482mYmdLhz0yJnySIuJOxR5SCXrcd1yMoOTJ34lTOGSVf%2F3XEnLbspWzTdwPoGSxGBIHZDrR6Yvb77SExsUw9xslKNbN2m9m4kSHPh4zM7WuMWTwZPV1Lke8QgQMuLrM%2FmzGNA%2FjnDLScbujL%2BgQdBjqDdw2qO0liV8a2ZCYeOyMw45HjwwY6pgHmrt4qGM3mkcW2YpjxLNc%2FKmAg%2FZ80KvIaZ%2Bn8B23ksdXt%2Be9Ie2hBoGf7687RJfGfXasElW0z9pxCNXGOXY%2B00NFFUTYSiIZReRBKfCS3LWnIiR2VRyQtudizbfVr0abRlCG6cNHWO7SB%2FcTFarm92JGsRbwCYoyc4mb%2FNoZYw9Q14yl3Jo%2FtlRxoOOBjZ74u0kIaB%2B%2B%2FrMrb3GmW15f09ARbSSgu&X-Amz-Signature=9d3ce022f9dcaf728c6318433cfdba7b023080ceddffcb0bdef6418fc1c6d290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJ766CF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBeEQIgGnrSEsufCSD5Okma1BUu6DCZFr769089g%2FLh4AiAWd0OYcR38kUXHJ2fr5q7%2BX8fUJhYU%2FAENrTm%2B9DRS9Cr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMBaLJXn4sV8%2BMHeldKtwDiQY9vrMN4u89pEyWQGnNFu%2BgrC%2FBKnvjCaQqvd77csWaNEMXi0EVt8gr2SEHKQL9tlYi78fEXXQAVNG0ZPR9LkPcaYTvLG9zsondaYRznJB63LksxCukD7FhwGx5hSID%2BTBnXLFAf3DOIIZgab1cRsrAbfhPBCRpYBJA94K7KIVjoTxsT%2B4i7Cl%2Bjxzh9PEHrRZ9qbF%2BXgFdSjK24biFj%2BeP4E%2Fei2Ve3RKE53WtJdj2xl%2BImKuMlAhA6M8yU57k%2FnE09%2Fbb5Jp89t5fNrEtoA4L%2FqlseW3qxUFbHlSvBZTFoXIicK5FT3fETm0igODu%2BocX6gFwO9APYHRIZo%2BpDpT8fB9DNgHfA3PhKkSfvFqHM1bJdne2GCLGsv6ohejAUncvbZcpmerXFqKLp2P3L7vlcyHTGqiR0kjlrSzo6jyYJeawDx9UEL2FHc8j1RYx6SOfMCtuQMcUsVT482mYmdLhz0yJnySIuJOxR5SCXrcd1yMoOTJ34lTOGSVf%2F3XEnLbspWzTdwPoGSxGBIHZDrR6Yvb77SExsUw9xslKNbN2m9m4kSHPh4zM7WuMWTwZPV1Lke8QgQMuLrM%2FmzGNA%2FjnDLScbujL%2BgQdBjqDdw2qO0liV8a2ZCYeOyMw45HjwwY6pgHmrt4qGM3mkcW2YpjxLNc%2FKmAg%2FZ80KvIaZ%2Bn8B23ksdXt%2Be9Ie2hBoGf7687RJfGfXasElW0z9pxCNXGOXY%2B00NFFUTYSiIZReRBKfCS3LWnIiR2VRyQtudizbfVr0abRlCG6cNHWO7SB%2FcTFarm92JGsRbwCYoyc4mb%2FNoZYw9Q14yl3Jo%2FtlRxoOOBjZ74u0kIaB%2B%2B%2FrMrb3GmW15f09ARbSSgu&X-Amz-Signature=2eaf7a178727b50064ac3d681cd073e3f7f729bf3ce36cb7ff7a056a253686af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJ766CF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBeEQIgGnrSEsufCSD5Okma1BUu6DCZFr769089g%2FLh4AiAWd0OYcR38kUXHJ2fr5q7%2BX8fUJhYU%2FAENrTm%2B9DRS9Cr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMBaLJXn4sV8%2BMHeldKtwDiQY9vrMN4u89pEyWQGnNFu%2BgrC%2FBKnvjCaQqvd77csWaNEMXi0EVt8gr2SEHKQL9tlYi78fEXXQAVNG0ZPR9LkPcaYTvLG9zsondaYRznJB63LksxCukD7FhwGx5hSID%2BTBnXLFAf3DOIIZgab1cRsrAbfhPBCRpYBJA94K7KIVjoTxsT%2B4i7Cl%2Bjxzh9PEHrRZ9qbF%2BXgFdSjK24biFj%2BeP4E%2Fei2Ve3RKE53WtJdj2xl%2BImKuMlAhA6M8yU57k%2FnE09%2Fbb5Jp89t5fNrEtoA4L%2FqlseW3qxUFbHlSvBZTFoXIicK5FT3fETm0igODu%2BocX6gFwO9APYHRIZo%2BpDpT8fB9DNgHfA3PhKkSfvFqHM1bJdne2GCLGsv6ohejAUncvbZcpmerXFqKLp2P3L7vlcyHTGqiR0kjlrSzo6jyYJeawDx9UEL2FHc8j1RYx6SOfMCtuQMcUsVT482mYmdLhz0yJnySIuJOxR5SCXrcd1yMoOTJ34lTOGSVf%2F3XEnLbspWzTdwPoGSxGBIHZDrR6Yvb77SExsUw9xslKNbN2m9m4kSHPh4zM7WuMWTwZPV1Lke8QgQMuLrM%2FmzGNA%2FjnDLScbujL%2BgQdBjqDdw2qO0liV8a2ZCYeOyMw45HjwwY6pgHmrt4qGM3mkcW2YpjxLNc%2FKmAg%2FZ80KvIaZ%2Bn8B23ksdXt%2Be9Ie2hBoGf7687RJfGfXasElW0z9pxCNXGOXY%2B00NFFUTYSiIZReRBKfCS3LWnIiR2VRyQtudizbfVr0abRlCG6cNHWO7SB%2FcTFarm92JGsRbwCYoyc4mb%2FNoZYw9Q14yl3Jo%2FtlRxoOOBjZ74u0kIaB%2B%2B%2FrMrb3GmW15f09ARbSSgu&X-Amz-Signature=561700014a6bdae93cd398c93ac13ebb3f4771fdf357a4f719fdb84adbce598d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
