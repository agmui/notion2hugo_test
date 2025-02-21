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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX5PTKOS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE87t8oKdgriwt0Fxw8uXwOFurshk7bU6orOR9sIpvyQAiBT3MIi1n3Xa72h9vSnBaEjK93w3%2FM%2FmeQuj8zgyu54WiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1sirObqlRhf0V4s7KtwDHOKvtzD3QeF8PJHYoyGO8T%2BsQWrRtboP69V%2BY4eTI%2FAMK0dlZSFXAv7cK2Lfop7Ybihv57vua1CmlS7C7ZT4T3VXB22mJNNj%2FKhG%2BmCzkcsNmXTznt%2Bn1L%2Bqx2GeLK8MRLdDB3d4hjjNw%2B%2FV9aNHlcv5NVozpXZOMOqUWhRAYuo2%2ByC9yl4fNfgEcHdUg7heknv8vUc4B%2FtxtEY9Hvs8oA6gGtamdE2cSbaAjyI4sqcC65gb7Lm2ury004FcvG1xR%2BKHTtLdSgFfC4l4l76n06s6JV7fR0GkaZKRDFEvMD6DD7vPUSGyvcODOmW0vHTpsmFBJAACdMvUZHB3VLrBOMLo6KRFhmp7vLhDtRWFICwyOOOwG%2Fz3KDEuzC8F3fRqlL9q1x6QbY%2Fduouqn1HsK3f39fWSTnVu7qLyYegfysH5DDBUl5INydNNrTFVE6mQus7%2FQyZPSat9NtCHNwaqNYBaWl6FDQGBZu%2FMr%2FHe8Hmd9tVUfbxI76%2Bi8EbS2KoBzZgcAJoXlUbTvlI6tnEJBxL%2BMkysELfYGfOmaPM%2Frj2Z%2BXtyNwZK4ypKheN6gKN5Q7SYxPUBsCCId5EgfGD7mXv6t%2BADhHYne%2B8Fk1JTcb3Hgpvz4VeEIZQi1DowgcHgvQY6pgFelTL4ldQfERTgCEw%2BEbi2thNiM5n0fmmAQhDm%2BU3ucAGbDk7g4FPbyFk8Tq%2FY%2FJUVfOVLvsAjh3fnfxoEBP4nLWkjgc8EhN0FoDjUpCehHextefH8zmHB47%2FTBzO6EtIrButXMm7yvrkHhDiQECE40irLop1IyyGarm4veEwj3hgVKMqX%2FPxe%2Bti3BN2%2BgFr%2FR7ri8EK3URtfkPqTU33hUfFND73O&X-Amz-Signature=b91b80ac776ae3cbff4a515b2a8dd14d2925b474f06e90c389d4d4fddb258b36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX5PTKOS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE87t8oKdgriwt0Fxw8uXwOFurshk7bU6orOR9sIpvyQAiBT3MIi1n3Xa72h9vSnBaEjK93w3%2FM%2FmeQuj8zgyu54WiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1sirObqlRhf0V4s7KtwDHOKvtzD3QeF8PJHYoyGO8T%2BsQWrRtboP69V%2BY4eTI%2FAMK0dlZSFXAv7cK2Lfop7Ybihv57vua1CmlS7C7ZT4T3VXB22mJNNj%2FKhG%2BmCzkcsNmXTznt%2Bn1L%2Bqx2GeLK8MRLdDB3d4hjjNw%2B%2FV9aNHlcv5NVozpXZOMOqUWhRAYuo2%2ByC9yl4fNfgEcHdUg7heknv8vUc4B%2FtxtEY9Hvs8oA6gGtamdE2cSbaAjyI4sqcC65gb7Lm2ury004FcvG1xR%2BKHTtLdSgFfC4l4l76n06s6JV7fR0GkaZKRDFEvMD6DD7vPUSGyvcODOmW0vHTpsmFBJAACdMvUZHB3VLrBOMLo6KRFhmp7vLhDtRWFICwyOOOwG%2Fz3KDEuzC8F3fRqlL9q1x6QbY%2Fduouqn1HsK3f39fWSTnVu7qLyYegfysH5DDBUl5INydNNrTFVE6mQus7%2FQyZPSat9NtCHNwaqNYBaWl6FDQGBZu%2FMr%2FHe8Hmd9tVUfbxI76%2Bi8EbS2KoBzZgcAJoXlUbTvlI6tnEJBxL%2BMkysELfYGfOmaPM%2Frj2Z%2BXtyNwZK4ypKheN6gKN5Q7SYxPUBsCCId5EgfGD7mXv6t%2BADhHYne%2B8Fk1JTcb3Hgpvz4VeEIZQi1DowgcHgvQY6pgFelTL4ldQfERTgCEw%2BEbi2thNiM5n0fmmAQhDm%2BU3ucAGbDk7g4FPbyFk8Tq%2FY%2FJUVfOVLvsAjh3fnfxoEBP4nLWkjgc8EhN0FoDjUpCehHextefH8zmHB47%2FTBzO6EtIrButXMm7yvrkHhDiQECE40irLop1IyyGarm4veEwj3hgVKMqX%2FPxe%2Bti3BN2%2BgFr%2FR7ri8EK3URtfkPqTU33hUfFND73O&X-Amz-Signature=c5f3dc32df857c67fd4378ad4d55f157a8b97cb9501cfc7debe3b374bfddaa7b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX5PTKOS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE87t8oKdgriwt0Fxw8uXwOFurshk7bU6orOR9sIpvyQAiBT3MIi1n3Xa72h9vSnBaEjK93w3%2FM%2FmeQuj8zgyu54WiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1sirObqlRhf0V4s7KtwDHOKvtzD3QeF8PJHYoyGO8T%2BsQWrRtboP69V%2BY4eTI%2FAMK0dlZSFXAv7cK2Lfop7Ybihv57vua1CmlS7C7ZT4T3VXB22mJNNj%2FKhG%2BmCzkcsNmXTznt%2Bn1L%2Bqx2GeLK8MRLdDB3d4hjjNw%2B%2FV9aNHlcv5NVozpXZOMOqUWhRAYuo2%2ByC9yl4fNfgEcHdUg7heknv8vUc4B%2FtxtEY9Hvs8oA6gGtamdE2cSbaAjyI4sqcC65gb7Lm2ury004FcvG1xR%2BKHTtLdSgFfC4l4l76n06s6JV7fR0GkaZKRDFEvMD6DD7vPUSGyvcODOmW0vHTpsmFBJAACdMvUZHB3VLrBOMLo6KRFhmp7vLhDtRWFICwyOOOwG%2Fz3KDEuzC8F3fRqlL9q1x6QbY%2Fduouqn1HsK3f39fWSTnVu7qLyYegfysH5DDBUl5INydNNrTFVE6mQus7%2FQyZPSat9NtCHNwaqNYBaWl6FDQGBZu%2FMr%2FHe8Hmd9tVUfbxI76%2Bi8EbS2KoBzZgcAJoXlUbTvlI6tnEJBxL%2BMkysELfYGfOmaPM%2Frj2Z%2BXtyNwZK4ypKheN6gKN5Q7SYxPUBsCCId5EgfGD7mXv6t%2BADhHYne%2B8Fk1JTcb3Hgpvz4VeEIZQi1DowgcHgvQY6pgFelTL4ldQfERTgCEw%2BEbi2thNiM5n0fmmAQhDm%2BU3ucAGbDk7g4FPbyFk8Tq%2FY%2FJUVfOVLvsAjh3fnfxoEBP4nLWkjgc8EhN0FoDjUpCehHextefH8zmHB47%2FTBzO6EtIrButXMm7yvrkHhDiQECE40irLop1IyyGarm4veEwj3hgVKMqX%2FPxe%2Bti3BN2%2BgFr%2FR7ri8EK3URtfkPqTU33hUfFND73O&X-Amz-Signature=38f05f981f5dd79edd7edf430bef91a2e44eae6d72da441fc3f80117e29709f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX5PTKOS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE87t8oKdgriwt0Fxw8uXwOFurshk7bU6orOR9sIpvyQAiBT3MIi1n3Xa72h9vSnBaEjK93w3%2FM%2FmeQuj8zgyu54WiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1sirObqlRhf0V4s7KtwDHOKvtzD3QeF8PJHYoyGO8T%2BsQWrRtboP69V%2BY4eTI%2FAMK0dlZSFXAv7cK2Lfop7Ybihv57vua1CmlS7C7ZT4T3VXB22mJNNj%2FKhG%2BmCzkcsNmXTznt%2Bn1L%2Bqx2GeLK8MRLdDB3d4hjjNw%2B%2FV9aNHlcv5NVozpXZOMOqUWhRAYuo2%2ByC9yl4fNfgEcHdUg7heknv8vUc4B%2FtxtEY9Hvs8oA6gGtamdE2cSbaAjyI4sqcC65gb7Lm2ury004FcvG1xR%2BKHTtLdSgFfC4l4l76n06s6JV7fR0GkaZKRDFEvMD6DD7vPUSGyvcODOmW0vHTpsmFBJAACdMvUZHB3VLrBOMLo6KRFhmp7vLhDtRWFICwyOOOwG%2Fz3KDEuzC8F3fRqlL9q1x6QbY%2Fduouqn1HsK3f39fWSTnVu7qLyYegfysH5DDBUl5INydNNrTFVE6mQus7%2FQyZPSat9NtCHNwaqNYBaWl6FDQGBZu%2FMr%2FHe8Hmd9tVUfbxI76%2Bi8EbS2KoBzZgcAJoXlUbTvlI6tnEJBxL%2BMkysELfYGfOmaPM%2Frj2Z%2BXtyNwZK4ypKheN6gKN5Q7SYxPUBsCCId5EgfGD7mXv6t%2BADhHYne%2B8Fk1JTcb3Hgpvz4VeEIZQi1DowgcHgvQY6pgFelTL4ldQfERTgCEw%2BEbi2thNiM5n0fmmAQhDm%2BU3ucAGbDk7g4FPbyFk8Tq%2FY%2FJUVfOVLvsAjh3fnfxoEBP4nLWkjgc8EhN0FoDjUpCehHextefH8zmHB47%2FTBzO6EtIrButXMm7yvrkHhDiQECE40irLop1IyyGarm4veEwj3hgVKMqX%2FPxe%2Bti3BN2%2BgFr%2FR7ri8EK3URtfkPqTU33hUfFND73O&X-Amz-Signature=1489dc026d9d970ef8af0b5e8147839c8768e2600d38b608cfe005d78d0be7f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX5PTKOS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE87t8oKdgriwt0Fxw8uXwOFurshk7bU6orOR9sIpvyQAiBT3MIi1n3Xa72h9vSnBaEjK93w3%2FM%2FmeQuj8zgyu54WiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1sirObqlRhf0V4s7KtwDHOKvtzD3QeF8PJHYoyGO8T%2BsQWrRtboP69V%2BY4eTI%2FAMK0dlZSFXAv7cK2Lfop7Ybihv57vua1CmlS7C7ZT4T3VXB22mJNNj%2FKhG%2BmCzkcsNmXTznt%2Bn1L%2Bqx2GeLK8MRLdDB3d4hjjNw%2B%2FV9aNHlcv5NVozpXZOMOqUWhRAYuo2%2ByC9yl4fNfgEcHdUg7heknv8vUc4B%2FtxtEY9Hvs8oA6gGtamdE2cSbaAjyI4sqcC65gb7Lm2ury004FcvG1xR%2BKHTtLdSgFfC4l4l76n06s6JV7fR0GkaZKRDFEvMD6DD7vPUSGyvcODOmW0vHTpsmFBJAACdMvUZHB3VLrBOMLo6KRFhmp7vLhDtRWFICwyOOOwG%2Fz3KDEuzC8F3fRqlL9q1x6QbY%2Fduouqn1HsK3f39fWSTnVu7qLyYegfysH5DDBUl5INydNNrTFVE6mQus7%2FQyZPSat9NtCHNwaqNYBaWl6FDQGBZu%2FMr%2FHe8Hmd9tVUfbxI76%2Bi8EbS2KoBzZgcAJoXlUbTvlI6tnEJBxL%2BMkysELfYGfOmaPM%2Frj2Z%2BXtyNwZK4ypKheN6gKN5Q7SYxPUBsCCId5EgfGD7mXv6t%2BADhHYne%2B8Fk1JTcb3Hgpvz4VeEIZQi1DowgcHgvQY6pgFelTL4ldQfERTgCEw%2BEbi2thNiM5n0fmmAQhDm%2BU3ucAGbDk7g4FPbyFk8Tq%2FY%2FJUVfOVLvsAjh3fnfxoEBP4nLWkjgc8EhN0FoDjUpCehHextefH8zmHB47%2FTBzO6EtIrButXMm7yvrkHhDiQECE40irLop1IyyGarm4veEwj3hgVKMqX%2FPxe%2Bti3BN2%2BgFr%2FR7ri8EK3URtfkPqTU33hUfFND73O&X-Amz-Signature=3d698bd9b13fdc5902e2143e7226fe87b031648be4a93186bee681311095f9be&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
