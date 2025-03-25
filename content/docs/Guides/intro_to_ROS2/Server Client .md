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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ZPET3D%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3HSzzptw%2Fuuc0troB0XGAh6ihs3U6kJcz%2BA89ngzpswIhAKjF245PJtE0%2BFgSFtADJGwMgH4sT4Tam4YpCGNIyvHDKv8DCBsQABoMNjM3NDIzMTgzODA1IgxO88O3HB9n5ZusTYIq3ANwgsQ87WVGzH0Zxkzc6z5Z%2Bzu78ai3shZjnPniV%2FxpthQCr3tUzsPYJf4%2FXDSdlqxUkDj6kz4tFOQOes7ud6oVVA2m%2BTKmGq%2FC%2FAnET4V2SwrFclHJqgVuzfa34Mi60230bgIjS1uPjebjFVwVgtah0hEJP2sLBGpRbLaGEJ2vAr8wj8UF1CDstQ6wtZhtWx5MtirsKBGKN%2B7I%2Bnpkh4f%2FU2GA8jlAH4rUCnYjKIszILLNTP3JfvJ5jvY8CVLdxXTQauXTtceRKBIZzSYZADcgkcihvkhXAaH9abMbza%2BY%2BhQmpav5oTepmY145J9Pm8HSncQZwlj%2Bf0jsuUGNsBjPV2EgMGQAKjPUzVQkGDfX26Nks%2FvRlPs0UnfEB9sw%2Ba3IqGwS7ICWqrQQCILf4n0dCcYHJuGEamng5BMmhKeyaQtsc65l7L1dalldsvNzoiQ%2FC85L9ucHVpgw4OBFAJZWpX3UHmpOvb6YDW%2FKoSdid4Ole6h335ow3Lo0RSb2Zdfd%2BTavJgLQ%2BhfnB8NIyvm8ltmWe2Iu0JppqU3EQM7XIism0F99isX2lJ%2BvJkSmtMG%2FFJjAyQKFIMcwSVTvsALZzXmIofs30I3h%2F%2BUWe7ELE281Tsynb34PPlHbzDCe44u%2FBjqkAQ%2FFq4sVtI2zprdqSKMc8Jn7sNPC6nsagpz6jO%2BiEIEyjKC5P2IT4bHfoA2nS565tF6L98qdQXZ%2FAgFzIFTpoR%2FqKtJk2y8wNysoC9Ej4ksFw9gbbf6NfwjjGzTkTVCTQHVZFQCCysnDGjgjxICENHgFtCZxMajMIXP74pIwwS%2F2ojTI170i9jaNGyuS0Rqx%2BwHZJBf3BYc3ZTuusehfQuzTTzBJ&X-Amz-Signature=f1b4c14b51760a918c92db0578344f531c0a7fc2e04592537dac027d83d14fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ZPET3D%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3HSzzptw%2Fuuc0troB0XGAh6ihs3U6kJcz%2BA89ngzpswIhAKjF245PJtE0%2BFgSFtADJGwMgH4sT4Tam4YpCGNIyvHDKv8DCBsQABoMNjM3NDIzMTgzODA1IgxO88O3HB9n5ZusTYIq3ANwgsQ87WVGzH0Zxkzc6z5Z%2Bzu78ai3shZjnPniV%2FxpthQCr3tUzsPYJf4%2FXDSdlqxUkDj6kz4tFOQOes7ud6oVVA2m%2BTKmGq%2FC%2FAnET4V2SwrFclHJqgVuzfa34Mi60230bgIjS1uPjebjFVwVgtah0hEJP2sLBGpRbLaGEJ2vAr8wj8UF1CDstQ6wtZhtWx5MtirsKBGKN%2B7I%2Bnpkh4f%2FU2GA8jlAH4rUCnYjKIszILLNTP3JfvJ5jvY8CVLdxXTQauXTtceRKBIZzSYZADcgkcihvkhXAaH9abMbza%2BY%2BhQmpav5oTepmY145J9Pm8HSncQZwlj%2Bf0jsuUGNsBjPV2EgMGQAKjPUzVQkGDfX26Nks%2FvRlPs0UnfEB9sw%2Ba3IqGwS7ICWqrQQCILf4n0dCcYHJuGEamng5BMmhKeyaQtsc65l7L1dalldsvNzoiQ%2FC85L9ucHVpgw4OBFAJZWpX3UHmpOvb6YDW%2FKoSdid4Ole6h335ow3Lo0RSb2Zdfd%2BTavJgLQ%2BhfnB8NIyvm8ltmWe2Iu0JppqU3EQM7XIism0F99isX2lJ%2BvJkSmtMG%2FFJjAyQKFIMcwSVTvsALZzXmIofs30I3h%2F%2BUWe7ELE281Tsynb34PPlHbzDCe44u%2FBjqkAQ%2FFq4sVtI2zprdqSKMc8Jn7sNPC6nsagpz6jO%2BiEIEyjKC5P2IT4bHfoA2nS565tF6L98qdQXZ%2FAgFzIFTpoR%2FqKtJk2y8wNysoC9Ej4ksFw9gbbf6NfwjjGzTkTVCTQHVZFQCCysnDGjgjxICENHgFtCZxMajMIXP74pIwwS%2F2ojTI170i9jaNGyuS0Rqx%2BwHZJBf3BYc3ZTuusehfQuzTTzBJ&X-Amz-Signature=04e83b0b6bb7617ca21639777ea0ccbf274fec8c7a777d03c92f6b84f384a745&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ZPET3D%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3HSzzptw%2Fuuc0troB0XGAh6ihs3U6kJcz%2BA89ngzpswIhAKjF245PJtE0%2BFgSFtADJGwMgH4sT4Tam4YpCGNIyvHDKv8DCBsQABoMNjM3NDIzMTgzODA1IgxO88O3HB9n5ZusTYIq3ANwgsQ87WVGzH0Zxkzc6z5Z%2Bzu78ai3shZjnPniV%2FxpthQCr3tUzsPYJf4%2FXDSdlqxUkDj6kz4tFOQOes7ud6oVVA2m%2BTKmGq%2FC%2FAnET4V2SwrFclHJqgVuzfa34Mi60230bgIjS1uPjebjFVwVgtah0hEJP2sLBGpRbLaGEJ2vAr8wj8UF1CDstQ6wtZhtWx5MtirsKBGKN%2B7I%2Bnpkh4f%2FU2GA8jlAH4rUCnYjKIszILLNTP3JfvJ5jvY8CVLdxXTQauXTtceRKBIZzSYZADcgkcihvkhXAaH9abMbza%2BY%2BhQmpav5oTepmY145J9Pm8HSncQZwlj%2Bf0jsuUGNsBjPV2EgMGQAKjPUzVQkGDfX26Nks%2FvRlPs0UnfEB9sw%2Ba3IqGwS7ICWqrQQCILf4n0dCcYHJuGEamng5BMmhKeyaQtsc65l7L1dalldsvNzoiQ%2FC85L9ucHVpgw4OBFAJZWpX3UHmpOvb6YDW%2FKoSdid4Ole6h335ow3Lo0RSb2Zdfd%2BTavJgLQ%2BhfnB8NIyvm8ltmWe2Iu0JppqU3EQM7XIism0F99isX2lJ%2BvJkSmtMG%2FFJjAyQKFIMcwSVTvsALZzXmIofs30I3h%2F%2BUWe7ELE281Tsynb34PPlHbzDCe44u%2FBjqkAQ%2FFq4sVtI2zprdqSKMc8Jn7sNPC6nsagpz6jO%2BiEIEyjKC5P2IT4bHfoA2nS565tF6L98qdQXZ%2FAgFzIFTpoR%2FqKtJk2y8wNysoC9Ej4ksFw9gbbf6NfwjjGzTkTVCTQHVZFQCCysnDGjgjxICENHgFtCZxMajMIXP74pIwwS%2F2ojTI170i9jaNGyuS0Rqx%2BwHZJBf3BYc3ZTuusehfQuzTTzBJ&X-Amz-Signature=3c7a595f05f3fd3a69db436506768694b69bee8c7d7dd1a38600c361d6ca0ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ZPET3D%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3HSzzptw%2Fuuc0troB0XGAh6ihs3U6kJcz%2BA89ngzpswIhAKjF245PJtE0%2BFgSFtADJGwMgH4sT4Tam4YpCGNIyvHDKv8DCBsQABoMNjM3NDIzMTgzODA1IgxO88O3HB9n5ZusTYIq3ANwgsQ87WVGzH0Zxkzc6z5Z%2Bzu78ai3shZjnPniV%2FxpthQCr3tUzsPYJf4%2FXDSdlqxUkDj6kz4tFOQOes7ud6oVVA2m%2BTKmGq%2FC%2FAnET4V2SwrFclHJqgVuzfa34Mi60230bgIjS1uPjebjFVwVgtah0hEJP2sLBGpRbLaGEJ2vAr8wj8UF1CDstQ6wtZhtWx5MtirsKBGKN%2B7I%2Bnpkh4f%2FU2GA8jlAH4rUCnYjKIszILLNTP3JfvJ5jvY8CVLdxXTQauXTtceRKBIZzSYZADcgkcihvkhXAaH9abMbza%2BY%2BhQmpav5oTepmY145J9Pm8HSncQZwlj%2Bf0jsuUGNsBjPV2EgMGQAKjPUzVQkGDfX26Nks%2FvRlPs0UnfEB9sw%2Ba3IqGwS7ICWqrQQCILf4n0dCcYHJuGEamng5BMmhKeyaQtsc65l7L1dalldsvNzoiQ%2FC85L9ucHVpgw4OBFAJZWpX3UHmpOvb6YDW%2FKoSdid4Ole6h335ow3Lo0RSb2Zdfd%2BTavJgLQ%2BhfnB8NIyvm8ltmWe2Iu0JppqU3EQM7XIism0F99isX2lJ%2BvJkSmtMG%2FFJjAyQKFIMcwSVTvsALZzXmIofs30I3h%2F%2BUWe7ELE281Tsynb34PPlHbzDCe44u%2FBjqkAQ%2FFq4sVtI2zprdqSKMc8Jn7sNPC6nsagpz6jO%2BiEIEyjKC5P2IT4bHfoA2nS565tF6L98qdQXZ%2FAgFzIFTpoR%2FqKtJk2y8wNysoC9Ej4ksFw9gbbf6NfwjjGzTkTVCTQHVZFQCCysnDGjgjxICENHgFtCZxMajMIXP74pIwwS%2F2ojTI170i9jaNGyuS0Rqx%2BwHZJBf3BYc3ZTuusehfQuzTTzBJ&X-Amz-Signature=f614daa32593d96348d4948a7898a184f4dfa88d623c6fb8c3eceaa0bc2352f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ZPET3D%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3HSzzptw%2Fuuc0troB0XGAh6ihs3U6kJcz%2BA89ngzpswIhAKjF245PJtE0%2BFgSFtADJGwMgH4sT4Tam4YpCGNIyvHDKv8DCBsQABoMNjM3NDIzMTgzODA1IgxO88O3HB9n5ZusTYIq3ANwgsQ87WVGzH0Zxkzc6z5Z%2Bzu78ai3shZjnPniV%2FxpthQCr3tUzsPYJf4%2FXDSdlqxUkDj6kz4tFOQOes7ud6oVVA2m%2BTKmGq%2FC%2FAnET4V2SwrFclHJqgVuzfa34Mi60230bgIjS1uPjebjFVwVgtah0hEJP2sLBGpRbLaGEJ2vAr8wj8UF1CDstQ6wtZhtWx5MtirsKBGKN%2B7I%2Bnpkh4f%2FU2GA8jlAH4rUCnYjKIszILLNTP3JfvJ5jvY8CVLdxXTQauXTtceRKBIZzSYZADcgkcihvkhXAaH9abMbza%2BY%2BhQmpav5oTepmY145J9Pm8HSncQZwlj%2Bf0jsuUGNsBjPV2EgMGQAKjPUzVQkGDfX26Nks%2FvRlPs0UnfEB9sw%2Ba3IqGwS7ICWqrQQCILf4n0dCcYHJuGEamng5BMmhKeyaQtsc65l7L1dalldsvNzoiQ%2FC85L9ucHVpgw4OBFAJZWpX3UHmpOvb6YDW%2FKoSdid4Ole6h335ow3Lo0RSb2Zdfd%2BTavJgLQ%2BhfnB8NIyvm8ltmWe2Iu0JppqU3EQM7XIism0F99isX2lJ%2BvJkSmtMG%2FFJjAyQKFIMcwSVTvsALZzXmIofs30I3h%2F%2BUWe7ELE281Tsynb34PPlHbzDCe44u%2FBjqkAQ%2FFq4sVtI2zprdqSKMc8Jn7sNPC6nsagpz6jO%2BiEIEyjKC5P2IT4bHfoA2nS565tF6L98qdQXZ%2FAgFzIFTpoR%2FqKtJk2y8wNysoC9Ej4ksFw9gbbf6NfwjjGzTkTVCTQHVZFQCCysnDGjgjxICENHgFtCZxMajMIXP74pIwwS%2F2ojTI170i9jaNGyuS0Rqx%2BwHZJBf3BYc3ZTuusehfQuzTTzBJ&X-Amz-Signature=d1949c78ba8560eabc1d001210dd5889887305af1ade211e4e033c5dfc700a70&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
