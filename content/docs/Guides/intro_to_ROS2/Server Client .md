---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX656L3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkkgWdyLO%2BackDHL2vMuO6taM%2Fh29jz2mMO%2FyZx1tTRAiA4ptdRGFluDUsbOzK%2BqNMckN1M524yocWFVPxv3axDWCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG0f5wTWn%2B6SWmb0SKtwDNp%2BW9ouUcsMA2zh2kCmwmMr3VIJqMHTv4zAwfC3BtK7hdM%2BhV5mjgC%2F13J2P2IjfHhveGcM8ulC1cacv6is9c2oyz4hJxGPHsgpbobm%2BgQCQfDjOqy3LYd9lXdQHU61J0Y3TbemyIhJTz2R6s%2BaZHqSgR4HvZjRxowBkt5cJdvzrHUuNrohwiVLWSJtV9D4jitZWn6bz4M1NKIKUELWtWN6axIA1bbOG4YmLKOosITHYltns6vzjyFVZJSGRrscgRSfd0eROj2hVZH0ILd5JvzDj0Tj56I45Lybt1R43GVP4%2BGsp1XWuOYUS%2BBdvlZ5JJdCqD5wbeFAXz6B8WRU5q%2F1%2FZeoJtWb70XU9CLwuRNHYJqVKdPUvsWB%2F2pMd6bszENOxwjD0l49ci28Wv2kSObM%2BLIFXrKqxEJTPD26V7sA25y%2BxFUVWADt9AAmX74hEAUmo5FsLuJ69BWgzGB3beKROUvYQGgGurK28MWzGCKrfNxauSAvJc45uaZe2yIvojo1vx%2FL21n5lSNGkixjAHD6iwie%2BBGusFiwi2f79oY6Ivta82Rr6wRL9Efh4bVot9%2BMZje2ecPwRpkMIxgd%2F6aIeGeOEHBWJ%2BH6O6SsbKJTBXspUAIoKPyG7up0wn7rjxAY6pgEkn%2BDpYTyENAahV0hGCvLbPO%2BtYSEY243T2SNxrJBW2xzKopb4CY9NC%2FoQsPcl%2FA4faznih9wZOuHMWWaDq8OGOPKFk16yWVE9eSb1I5vvhyOyADko5kY7zI%2FFj%2FhiyuOemcWfofIymEux%2FGKbnmZOuIc2hpPC45Iasn%2Bo3Ggs6y78kD2NybO3Zx%2FxrnMKnmpwb8uHxVDRswVADKNPWHgirN0IzoCl&X-Amz-Signature=79b0887a93b132f50077c37522e8a28a71400172beaa8e4ef3f621daafba50ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX656L3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkkgWdyLO%2BackDHL2vMuO6taM%2Fh29jz2mMO%2FyZx1tTRAiA4ptdRGFluDUsbOzK%2BqNMckN1M524yocWFVPxv3axDWCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG0f5wTWn%2B6SWmb0SKtwDNp%2BW9ouUcsMA2zh2kCmwmMr3VIJqMHTv4zAwfC3BtK7hdM%2BhV5mjgC%2F13J2P2IjfHhveGcM8ulC1cacv6is9c2oyz4hJxGPHsgpbobm%2BgQCQfDjOqy3LYd9lXdQHU61J0Y3TbemyIhJTz2R6s%2BaZHqSgR4HvZjRxowBkt5cJdvzrHUuNrohwiVLWSJtV9D4jitZWn6bz4M1NKIKUELWtWN6axIA1bbOG4YmLKOosITHYltns6vzjyFVZJSGRrscgRSfd0eROj2hVZH0ILd5JvzDj0Tj56I45Lybt1R43GVP4%2BGsp1XWuOYUS%2BBdvlZ5JJdCqD5wbeFAXz6B8WRU5q%2F1%2FZeoJtWb70XU9CLwuRNHYJqVKdPUvsWB%2F2pMd6bszENOxwjD0l49ci28Wv2kSObM%2BLIFXrKqxEJTPD26V7sA25y%2BxFUVWADt9AAmX74hEAUmo5FsLuJ69BWgzGB3beKROUvYQGgGurK28MWzGCKrfNxauSAvJc45uaZe2yIvojo1vx%2FL21n5lSNGkixjAHD6iwie%2BBGusFiwi2f79oY6Ivta82Rr6wRL9Efh4bVot9%2BMZje2ecPwRpkMIxgd%2F6aIeGeOEHBWJ%2BH6O6SsbKJTBXspUAIoKPyG7up0wn7rjxAY6pgEkn%2BDpYTyENAahV0hGCvLbPO%2BtYSEY243T2SNxrJBW2xzKopb4CY9NC%2FoQsPcl%2FA4faznih9wZOuHMWWaDq8OGOPKFk16yWVE9eSb1I5vvhyOyADko5kY7zI%2FFj%2FhiyuOemcWfofIymEux%2FGKbnmZOuIc2hpPC45Iasn%2Bo3Ggs6y78kD2NybO3Zx%2FxrnMKnmpwb8uHxVDRswVADKNPWHgirN0IzoCl&X-Amz-Signature=f06ea546cb0f2efa36cbcb21563a2a8d9a5dd801ab7d754806e1f102a9eeacc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX656L3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkkgWdyLO%2BackDHL2vMuO6taM%2Fh29jz2mMO%2FyZx1tTRAiA4ptdRGFluDUsbOzK%2BqNMckN1M524yocWFVPxv3axDWCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG0f5wTWn%2B6SWmb0SKtwDNp%2BW9ouUcsMA2zh2kCmwmMr3VIJqMHTv4zAwfC3BtK7hdM%2BhV5mjgC%2F13J2P2IjfHhveGcM8ulC1cacv6is9c2oyz4hJxGPHsgpbobm%2BgQCQfDjOqy3LYd9lXdQHU61J0Y3TbemyIhJTz2R6s%2BaZHqSgR4HvZjRxowBkt5cJdvzrHUuNrohwiVLWSJtV9D4jitZWn6bz4M1NKIKUELWtWN6axIA1bbOG4YmLKOosITHYltns6vzjyFVZJSGRrscgRSfd0eROj2hVZH0ILd5JvzDj0Tj56I45Lybt1R43GVP4%2BGsp1XWuOYUS%2BBdvlZ5JJdCqD5wbeFAXz6B8WRU5q%2F1%2FZeoJtWb70XU9CLwuRNHYJqVKdPUvsWB%2F2pMd6bszENOxwjD0l49ci28Wv2kSObM%2BLIFXrKqxEJTPD26V7sA25y%2BxFUVWADt9AAmX74hEAUmo5FsLuJ69BWgzGB3beKROUvYQGgGurK28MWzGCKrfNxauSAvJc45uaZe2yIvojo1vx%2FL21n5lSNGkixjAHD6iwie%2BBGusFiwi2f79oY6Ivta82Rr6wRL9Efh4bVot9%2BMZje2ecPwRpkMIxgd%2F6aIeGeOEHBWJ%2BH6O6SsbKJTBXspUAIoKPyG7up0wn7rjxAY6pgEkn%2BDpYTyENAahV0hGCvLbPO%2BtYSEY243T2SNxrJBW2xzKopb4CY9NC%2FoQsPcl%2FA4faznih9wZOuHMWWaDq8OGOPKFk16yWVE9eSb1I5vvhyOyADko5kY7zI%2FFj%2FhiyuOemcWfofIymEux%2FGKbnmZOuIc2hpPC45Iasn%2Bo3Ggs6y78kD2NybO3Zx%2FxrnMKnmpwb8uHxVDRswVADKNPWHgirN0IzoCl&X-Amz-Signature=f77470861613bd2ea6283a12e0f0be5256a025ddeedb5404cfff084a7a1dd27c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX656L3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkkgWdyLO%2BackDHL2vMuO6taM%2Fh29jz2mMO%2FyZx1tTRAiA4ptdRGFluDUsbOzK%2BqNMckN1M524yocWFVPxv3axDWCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG0f5wTWn%2B6SWmb0SKtwDNp%2BW9ouUcsMA2zh2kCmwmMr3VIJqMHTv4zAwfC3BtK7hdM%2BhV5mjgC%2F13J2P2IjfHhveGcM8ulC1cacv6is9c2oyz4hJxGPHsgpbobm%2BgQCQfDjOqy3LYd9lXdQHU61J0Y3TbemyIhJTz2R6s%2BaZHqSgR4HvZjRxowBkt5cJdvzrHUuNrohwiVLWSJtV9D4jitZWn6bz4M1NKIKUELWtWN6axIA1bbOG4YmLKOosITHYltns6vzjyFVZJSGRrscgRSfd0eROj2hVZH0ILd5JvzDj0Tj56I45Lybt1R43GVP4%2BGsp1XWuOYUS%2BBdvlZ5JJdCqD5wbeFAXz6B8WRU5q%2F1%2FZeoJtWb70XU9CLwuRNHYJqVKdPUvsWB%2F2pMd6bszENOxwjD0l49ci28Wv2kSObM%2BLIFXrKqxEJTPD26V7sA25y%2BxFUVWADt9AAmX74hEAUmo5FsLuJ69BWgzGB3beKROUvYQGgGurK28MWzGCKrfNxauSAvJc45uaZe2yIvojo1vx%2FL21n5lSNGkixjAHD6iwie%2BBGusFiwi2f79oY6Ivta82Rr6wRL9Efh4bVot9%2BMZje2ecPwRpkMIxgd%2F6aIeGeOEHBWJ%2BH6O6SsbKJTBXspUAIoKPyG7up0wn7rjxAY6pgEkn%2BDpYTyENAahV0hGCvLbPO%2BtYSEY243T2SNxrJBW2xzKopb4CY9NC%2FoQsPcl%2FA4faznih9wZOuHMWWaDq8OGOPKFk16yWVE9eSb1I5vvhyOyADko5kY7zI%2FFj%2FhiyuOemcWfofIymEux%2FGKbnmZOuIc2hpPC45Iasn%2Bo3Ggs6y78kD2NybO3Zx%2FxrnMKnmpwb8uHxVDRswVADKNPWHgirN0IzoCl&X-Amz-Signature=3920838497cc81755a7986da574037119ec3194cbe3873a5816baa1fd6102e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX656L3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkkgWdyLO%2BackDHL2vMuO6taM%2Fh29jz2mMO%2FyZx1tTRAiA4ptdRGFluDUsbOzK%2BqNMckN1M524yocWFVPxv3axDWCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG0f5wTWn%2B6SWmb0SKtwDNp%2BW9ouUcsMA2zh2kCmwmMr3VIJqMHTv4zAwfC3BtK7hdM%2BhV5mjgC%2F13J2P2IjfHhveGcM8ulC1cacv6is9c2oyz4hJxGPHsgpbobm%2BgQCQfDjOqy3LYd9lXdQHU61J0Y3TbemyIhJTz2R6s%2BaZHqSgR4HvZjRxowBkt5cJdvzrHUuNrohwiVLWSJtV9D4jitZWn6bz4M1NKIKUELWtWN6axIA1bbOG4YmLKOosITHYltns6vzjyFVZJSGRrscgRSfd0eROj2hVZH0ILd5JvzDj0Tj56I45Lybt1R43GVP4%2BGsp1XWuOYUS%2BBdvlZ5JJdCqD5wbeFAXz6B8WRU5q%2F1%2FZeoJtWb70XU9CLwuRNHYJqVKdPUvsWB%2F2pMd6bszENOxwjD0l49ci28Wv2kSObM%2BLIFXrKqxEJTPD26V7sA25y%2BxFUVWADt9AAmX74hEAUmo5FsLuJ69BWgzGB3beKROUvYQGgGurK28MWzGCKrfNxauSAvJc45uaZe2yIvojo1vx%2FL21n5lSNGkixjAHD6iwie%2BBGusFiwi2f79oY6Ivta82Rr6wRL9Efh4bVot9%2BMZje2ecPwRpkMIxgd%2F6aIeGeOEHBWJ%2BH6O6SsbKJTBXspUAIoKPyG7up0wn7rjxAY6pgEkn%2BDpYTyENAahV0hGCvLbPO%2BtYSEY243T2SNxrJBW2xzKopb4CY9NC%2FoQsPcl%2FA4faznih9wZOuHMWWaDq8OGOPKFk16yWVE9eSb1I5vvhyOyADko5kY7zI%2FFj%2FhiyuOemcWfofIymEux%2FGKbnmZOuIc2hpPC45Iasn%2Bo3Ggs6y78kD2NybO3Zx%2FxrnMKnmpwb8uHxVDRswVADKNPWHgirN0IzoCl&X-Amz-Signature=3d258eae93989b9e820298ffef10deeb5d4b37f24d7b100a15f0986b648e5a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
