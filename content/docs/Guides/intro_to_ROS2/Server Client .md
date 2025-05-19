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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632XIBJKJ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ%2B7yFUv3s60z1YUqqdq8Ayeip%2FTkHq6Zd3%2FBgRoybAAiAPIEwdVdt58w%2Fpf%2ByFFS5yI6STSCCY4SDCCYywq2kCRiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa13G5H%2BvCRWwcwTuKtwDdGNUFdk8OwrGuYRrYnjvg3ADYotWDOggKlKvK9Q7McBAsjDCBZ05QfI2%2Flq7iqx3NFgfhofwqJkWIpSaNTTQNv8mWuuJG7lKCaBWf83FEDaE6QSFdzlaWoHWZ2t2nqCqjgsGr2ZrFIShDBBYD%2FMaZdug7auLJbHDm3sVhTOzmnjKUuA0n2JOrFzifrQ3Df%2F985tCUa6ma80SWSI4wqn7MkAsyI7ck0pFOfQ0eKjdw%2BByfvHQb7D3ZR0F3uISEGaUBGcQmJ0noY9cbERvQ9Rdbhp%2B8rxGBNc53i3emTlY%2FQ4uLJgCHUWttkA3Wd5VwGlob8sbvH9uon0RhKVldfhXpQ3l6bTDAQXR%2B6KrFGreMb27xDO%2BmfiQOquQnb%2FvqPWs9AnKYk%2FGgF%2BmzthvprNxMZkTIU22Pa7BTxxuwGYmIT371W2ARjKnWUJfAmjLLVVA9yA62XO1%2F1bbq76ZZ7WIgBrkt2bWdh0KOwJTFd3QI%2B7LwI4b%2FRw1pKWTcH6V7ogg0bjsLr118Ck56mNpfzZ9BEfOO2sW81yeC5osEzhPkjRu3teQsdJN9kkI%2FSdylORhegyBk7T6swvfYBrjxnKY%2F8ZZQS17qRjn1XKEEP0rc%2FJFqQNHX9wd4kDXpQEw8vyswQY6pgFUt4a50HYXIpOLgwVw2UXrOCtkKjlasxYE24%2B2ZslRGIaGhFsMjOQd%2B9O5lzdALNeG7KWdBCAFSQgmkMMGoXSzyKiZo2QPB77nJ5KRnr41VRFNCZG3a8b8U6MB44e3srfAj%2B1Y6EfJy783i37RgWKTF1X0NF6qPJVLuXXpnaHPv%2Fl9sD6XMWGfpV6xYUTapr9QkJlRuBCwts2hGYdhikfbQYnMuxys&X-Amz-Signature=0c87924093bcdb4e6bd64a191458501c09dbcb23f6568bdd69656b54c16acfea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632XIBJKJ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ%2B7yFUv3s60z1YUqqdq8Ayeip%2FTkHq6Zd3%2FBgRoybAAiAPIEwdVdt58w%2Fpf%2ByFFS5yI6STSCCY4SDCCYywq2kCRiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa13G5H%2BvCRWwcwTuKtwDdGNUFdk8OwrGuYRrYnjvg3ADYotWDOggKlKvK9Q7McBAsjDCBZ05QfI2%2Flq7iqx3NFgfhofwqJkWIpSaNTTQNv8mWuuJG7lKCaBWf83FEDaE6QSFdzlaWoHWZ2t2nqCqjgsGr2ZrFIShDBBYD%2FMaZdug7auLJbHDm3sVhTOzmnjKUuA0n2JOrFzifrQ3Df%2F985tCUa6ma80SWSI4wqn7MkAsyI7ck0pFOfQ0eKjdw%2BByfvHQb7D3ZR0F3uISEGaUBGcQmJ0noY9cbERvQ9Rdbhp%2B8rxGBNc53i3emTlY%2FQ4uLJgCHUWttkA3Wd5VwGlob8sbvH9uon0RhKVldfhXpQ3l6bTDAQXR%2B6KrFGreMb27xDO%2BmfiQOquQnb%2FvqPWs9AnKYk%2FGgF%2BmzthvprNxMZkTIU22Pa7BTxxuwGYmIT371W2ARjKnWUJfAmjLLVVA9yA62XO1%2F1bbq76ZZ7WIgBrkt2bWdh0KOwJTFd3QI%2B7LwI4b%2FRw1pKWTcH6V7ogg0bjsLr118Ck56mNpfzZ9BEfOO2sW81yeC5osEzhPkjRu3teQsdJN9kkI%2FSdylORhegyBk7T6swvfYBrjxnKY%2F8ZZQS17qRjn1XKEEP0rc%2FJFqQNHX9wd4kDXpQEw8vyswQY6pgFUt4a50HYXIpOLgwVw2UXrOCtkKjlasxYE24%2B2ZslRGIaGhFsMjOQd%2B9O5lzdALNeG7KWdBCAFSQgmkMMGoXSzyKiZo2QPB77nJ5KRnr41VRFNCZG3a8b8U6MB44e3srfAj%2B1Y6EfJy783i37RgWKTF1X0NF6qPJVLuXXpnaHPv%2Fl9sD6XMWGfpV6xYUTapr9QkJlRuBCwts2hGYdhikfbQYnMuxys&X-Amz-Signature=2d5bc59ba3c45fc5c28c60321c9bb96bcabed5e935bca8747b8bf8737521f9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632XIBJKJ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ%2B7yFUv3s60z1YUqqdq8Ayeip%2FTkHq6Zd3%2FBgRoybAAiAPIEwdVdt58w%2Fpf%2ByFFS5yI6STSCCY4SDCCYywq2kCRiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa13G5H%2BvCRWwcwTuKtwDdGNUFdk8OwrGuYRrYnjvg3ADYotWDOggKlKvK9Q7McBAsjDCBZ05QfI2%2Flq7iqx3NFgfhofwqJkWIpSaNTTQNv8mWuuJG7lKCaBWf83FEDaE6QSFdzlaWoHWZ2t2nqCqjgsGr2ZrFIShDBBYD%2FMaZdug7auLJbHDm3sVhTOzmnjKUuA0n2JOrFzifrQ3Df%2F985tCUa6ma80SWSI4wqn7MkAsyI7ck0pFOfQ0eKjdw%2BByfvHQb7D3ZR0F3uISEGaUBGcQmJ0noY9cbERvQ9Rdbhp%2B8rxGBNc53i3emTlY%2FQ4uLJgCHUWttkA3Wd5VwGlob8sbvH9uon0RhKVldfhXpQ3l6bTDAQXR%2B6KrFGreMb27xDO%2BmfiQOquQnb%2FvqPWs9AnKYk%2FGgF%2BmzthvprNxMZkTIU22Pa7BTxxuwGYmIT371W2ARjKnWUJfAmjLLVVA9yA62XO1%2F1bbq76ZZ7WIgBrkt2bWdh0KOwJTFd3QI%2B7LwI4b%2FRw1pKWTcH6V7ogg0bjsLr118Ck56mNpfzZ9BEfOO2sW81yeC5osEzhPkjRu3teQsdJN9kkI%2FSdylORhegyBk7T6swvfYBrjxnKY%2F8ZZQS17qRjn1XKEEP0rc%2FJFqQNHX9wd4kDXpQEw8vyswQY6pgFUt4a50HYXIpOLgwVw2UXrOCtkKjlasxYE24%2B2ZslRGIaGhFsMjOQd%2B9O5lzdALNeG7KWdBCAFSQgmkMMGoXSzyKiZo2QPB77nJ5KRnr41VRFNCZG3a8b8U6MB44e3srfAj%2B1Y6EfJy783i37RgWKTF1X0NF6qPJVLuXXpnaHPv%2Fl9sD6XMWGfpV6xYUTapr9QkJlRuBCwts2hGYdhikfbQYnMuxys&X-Amz-Signature=74b8651a231985cd6e1a1d6b92f3943a6eb64d17194c0f6a6ebb99ea092944e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632XIBJKJ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ%2B7yFUv3s60z1YUqqdq8Ayeip%2FTkHq6Zd3%2FBgRoybAAiAPIEwdVdt58w%2Fpf%2ByFFS5yI6STSCCY4SDCCYywq2kCRiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa13G5H%2BvCRWwcwTuKtwDdGNUFdk8OwrGuYRrYnjvg3ADYotWDOggKlKvK9Q7McBAsjDCBZ05QfI2%2Flq7iqx3NFgfhofwqJkWIpSaNTTQNv8mWuuJG7lKCaBWf83FEDaE6QSFdzlaWoHWZ2t2nqCqjgsGr2ZrFIShDBBYD%2FMaZdug7auLJbHDm3sVhTOzmnjKUuA0n2JOrFzifrQ3Df%2F985tCUa6ma80SWSI4wqn7MkAsyI7ck0pFOfQ0eKjdw%2BByfvHQb7D3ZR0F3uISEGaUBGcQmJ0noY9cbERvQ9Rdbhp%2B8rxGBNc53i3emTlY%2FQ4uLJgCHUWttkA3Wd5VwGlob8sbvH9uon0RhKVldfhXpQ3l6bTDAQXR%2B6KrFGreMb27xDO%2BmfiQOquQnb%2FvqPWs9AnKYk%2FGgF%2BmzthvprNxMZkTIU22Pa7BTxxuwGYmIT371W2ARjKnWUJfAmjLLVVA9yA62XO1%2F1bbq76ZZ7WIgBrkt2bWdh0KOwJTFd3QI%2B7LwI4b%2FRw1pKWTcH6V7ogg0bjsLr118Ck56mNpfzZ9BEfOO2sW81yeC5osEzhPkjRu3teQsdJN9kkI%2FSdylORhegyBk7T6swvfYBrjxnKY%2F8ZZQS17qRjn1XKEEP0rc%2FJFqQNHX9wd4kDXpQEw8vyswQY6pgFUt4a50HYXIpOLgwVw2UXrOCtkKjlasxYE24%2B2ZslRGIaGhFsMjOQd%2B9O5lzdALNeG7KWdBCAFSQgmkMMGoXSzyKiZo2QPB77nJ5KRnr41VRFNCZG3a8b8U6MB44e3srfAj%2B1Y6EfJy783i37RgWKTF1X0NF6qPJVLuXXpnaHPv%2Fl9sD6XMWGfpV6xYUTapr9QkJlRuBCwts2hGYdhikfbQYnMuxys&X-Amz-Signature=0283e1e69a35175668af8385a59dc8554ac7a7bfc580a7e8c1b7fd24fbb91454&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632XIBJKJ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ%2B7yFUv3s60z1YUqqdq8Ayeip%2FTkHq6Zd3%2FBgRoybAAiAPIEwdVdt58w%2Fpf%2ByFFS5yI6STSCCY4SDCCYywq2kCRiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa13G5H%2BvCRWwcwTuKtwDdGNUFdk8OwrGuYRrYnjvg3ADYotWDOggKlKvK9Q7McBAsjDCBZ05QfI2%2Flq7iqx3NFgfhofwqJkWIpSaNTTQNv8mWuuJG7lKCaBWf83FEDaE6QSFdzlaWoHWZ2t2nqCqjgsGr2ZrFIShDBBYD%2FMaZdug7auLJbHDm3sVhTOzmnjKUuA0n2JOrFzifrQ3Df%2F985tCUa6ma80SWSI4wqn7MkAsyI7ck0pFOfQ0eKjdw%2BByfvHQb7D3ZR0F3uISEGaUBGcQmJ0noY9cbERvQ9Rdbhp%2B8rxGBNc53i3emTlY%2FQ4uLJgCHUWttkA3Wd5VwGlob8sbvH9uon0RhKVldfhXpQ3l6bTDAQXR%2B6KrFGreMb27xDO%2BmfiQOquQnb%2FvqPWs9AnKYk%2FGgF%2BmzthvprNxMZkTIU22Pa7BTxxuwGYmIT371W2ARjKnWUJfAmjLLVVA9yA62XO1%2F1bbq76ZZ7WIgBrkt2bWdh0KOwJTFd3QI%2B7LwI4b%2FRw1pKWTcH6V7ogg0bjsLr118Ck56mNpfzZ9BEfOO2sW81yeC5osEzhPkjRu3teQsdJN9kkI%2FSdylORhegyBk7T6swvfYBrjxnKY%2F8ZZQS17qRjn1XKEEP0rc%2FJFqQNHX9wd4kDXpQEw8vyswQY6pgFUt4a50HYXIpOLgwVw2UXrOCtkKjlasxYE24%2B2ZslRGIaGhFsMjOQd%2B9O5lzdALNeG7KWdBCAFSQgmkMMGoXSzyKiZo2QPB77nJ5KRnr41VRFNCZG3a8b8U6MB44e3srfAj%2B1Y6EfJy783i37RgWKTF1X0NF6qPJVLuXXpnaHPv%2Fl9sD6XMWGfpV6xYUTapr9QkJlRuBCwts2hGYdhikfbQYnMuxys&X-Amz-Signature=17b8a75def7f7e225db33b572ebf29184e1d8470276f9b6cef9f7bcb9214626c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
