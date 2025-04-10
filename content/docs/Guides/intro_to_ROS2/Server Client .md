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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZ42N32%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBgpqAO6EpJoswDkIo4fUrOj3H6nwJGf9XusIAoIJn4vAiBU2pECqeYDvUA6%2F3VKWk7k6E4WbqZLaRtXo3rvd2wsWCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC83tx2RsfDG0VZYlKtwDGcPEULxY8EPwndjYp7t3Jb8hb66mHNXg3UFxnKaB514scLgyovpHlR3EVeZvUSkX07AXkgbL96Wc7LSmRdThx4pE5z7K43yt2C0BMDgMcSoeI%2Fmqa3lBGSUYE6%2FfY%2F7Ys%2FKEQxEEMenOvTMBJmqdUp5MP%2B4sqIrYfDbgSClJ3%2BDz2wtGtRkWIrrW0HuL4ADajB4vI9E5kGeel2No0EolS5TpLD01fH95ybFJqbCtLvl2PEDlzxUW3yn%2Bz1FpKx1ZrKXgpsTO4FXK8i1mbQHEJKy2ZDZU1fMqcTChCvDkK29WnkrcxvSM89D8yA1nxUt7NkvJsQ7JRIqfQadOeT6oPkyctSrriCWIRna6KeSw2M6HLxCBXJup4PVt5GVHEgR6TKIN62KspTYg3ecdE4lvJDGIkGslJumXrdpWRZqDDE8kukgNU2agdjdNzPuEFIUHomzBmsYxPbSsw%2FvLCOhizhLE9k4TYjztKiufjsFoTAhv9eCUEb098VvmJzg4G7fS%2BC90aWieDq2GXX3GvwRBOT1%2FBZlCVKUO%2FoR4sYqaOHV190cAUi2qf4Z%2FI1dIv8XMtGkSXlwAFeL1N8aothcmFJhl%2Fy%2Blz37G8bB6fA5yUGBQze9zaonoV9%2FcJDow55DhvwY6pgHp8clyn8GXf3htJIfnSAqmEpNMlgAgNAFLE44kGGh41iVkGSpDLTvqsMy0JznUGCqIgtb5NsKZ3zpR7jo0aOYfrSYfDKXiVaG7SJU2lwQiQNoB%2BQkss74Rak9d52tFpMGjr98zEvreMcX1JXeQ0IrJi5Z00769I3rLr9UR7QPssxFUxNt7AOpGlPhYV3G%2FgzibLTln4ZXEzFJMGLF0LqGmXREAF8B6&X-Amz-Signature=51324e34fd8fbaef0f3146be83df4f9e4cb6e349f41badcecf76ffe8f9cad192&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZ42N32%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBgpqAO6EpJoswDkIo4fUrOj3H6nwJGf9XusIAoIJn4vAiBU2pECqeYDvUA6%2F3VKWk7k6E4WbqZLaRtXo3rvd2wsWCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC83tx2RsfDG0VZYlKtwDGcPEULxY8EPwndjYp7t3Jb8hb66mHNXg3UFxnKaB514scLgyovpHlR3EVeZvUSkX07AXkgbL96Wc7LSmRdThx4pE5z7K43yt2C0BMDgMcSoeI%2Fmqa3lBGSUYE6%2FfY%2F7Ys%2FKEQxEEMenOvTMBJmqdUp5MP%2B4sqIrYfDbgSClJ3%2BDz2wtGtRkWIrrW0HuL4ADajB4vI9E5kGeel2No0EolS5TpLD01fH95ybFJqbCtLvl2PEDlzxUW3yn%2Bz1FpKx1ZrKXgpsTO4FXK8i1mbQHEJKy2ZDZU1fMqcTChCvDkK29WnkrcxvSM89D8yA1nxUt7NkvJsQ7JRIqfQadOeT6oPkyctSrriCWIRna6KeSw2M6HLxCBXJup4PVt5GVHEgR6TKIN62KspTYg3ecdE4lvJDGIkGslJumXrdpWRZqDDE8kukgNU2agdjdNzPuEFIUHomzBmsYxPbSsw%2FvLCOhizhLE9k4TYjztKiufjsFoTAhv9eCUEb098VvmJzg4G7fS%2BC90aWieDq2GXX3GvwRBOT1%2FBZlCVKUO%2FoR4sYqaOHV190cAUi2qf4Z%2FI1dIv8XMtGkSXlwAFeL1N8aothcmFJhl%2Fy%2Blz37G8bB6fA5yUGBQze9zaonoV9%2FcJDow55DhvwY6pgHp8clyn8GXf3htJIfnSAqmEpNMlgAgNAFLE44kGGh41iVkGSpDLTvqsMy0JznUGCqIgtb5NsKZ3zpR7jo0aOYfrSYfDKXiVaG7SJU2lwQiQNoB%2BQkss74Rak9d52tFpMGjr98zEvreMcX1JXeQ0IrJi5Z00769I3rLr9UR7QPssxFUxNt7AOpGlPhYV3G%2FgzibLTln4ZXEzFJMGLF0LqGmXREAF8B6&X-Amz-Signature=c6c47e85fe41ceae001985a22685dffedd3bff608d143e98d227a89baddb0be2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZ42N32%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBgpqAO6EpJoswDkIo4fUrOj3H6nwJGf9XusIAoIJn4vAiBU2pECqeYDvUA6%2F3VKWk7k6E4WbqZLaRtXo3rvd2wsWCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC83tx2RsfDG0VZYlKtwDGcPEULxY8EPwndjYp7t3Jb8hb66mHNXg3UFxnKaB514scLgyovpHlR3EVeZvUSkX07AXkgbL96Wc7LSmRdThx4pE5z7K43yt2C0BMDgMcSoeI%2Fmqa3lBGSUYE6%2FfY%2F7Ys%2FKEQxEEMenOvTMBJmqdUp5MP%2B4sqIrYfDbgSClJ3%2BDz2wtGtRkWIrrW0HuL4ADajB4vI9E5kGeel2No0EolS5TpLD01fH95ybFJqbCtLvl2PEDlzxUW3yn%2Bz1FpKx1ZrKXgpsTO4FXK8i1mbQHEJKy2ZDZU1fMqcTChCvDkK29WnkrcxvSM89D8yA1nxUt7NkvJsQ7JRIqfQadOeT6oPkyctSrriCWIRna6KeSw2M6HLxCBXJup4PVt5GVHEgR6TKIN62KspTYg3ecdE4lvJDGIkGslJumXrdpWRZqDDE8kukgNU2agdjdNzPuEFIUHomzBmsYxPbSsw%2FvLCOhizhLE9k4TYjztKiufjsFoTAhv9eCUEb098VvmJzg4G7fS%2BC90aWieDq2GXX3GvwRBOT1%2FBZlCVKUO%2FoR4sYqaOHV190cAUi2qf4Z%2FI1dIv8XMtGkSXlwAFeL1N8aothcmFJhl%2Fy%2Blz37G8bB6fA5yUGBQze9zaonoV9%2FcJDow55DhvwY6pgHp8clyn8GXf3htJIfnSAqmEpNMlgAgNAFLE44kGGh41iVkGSpDLTvqsMy0JznUGCqIgtb5NsKZ3zpR7jo0aOYfrSYfDKXiVaG7SJU2lwQiQNoB%2BQkss74Rak9d52tFpMGjr98zEvreMcX1JXeQ0IrJi5Z00769I3rLr9UR7QPssxFUxNt7AOpGlPhYV3G%2FgzibLTln4ZXEzFJMGLF0LqGmXREAF8B6&X-Amz-Signature=d1f13d151f2114aa4b66a898414ab8b293ad6b82b8ebfec87d388e457836df7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZ42N32%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBgpqAO6EpJoswDkIo4fUrOj3H6nwJGf9XusIAoIJn4vAiBU2pECqeYDvUA6%2F3VKWk7k6E4WbqZLaRtXo3rvd2wsWCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC83tx2RsfDG0VZYlKtwDGcPEULxY8EPwndjYp7t3Jb8hb66mHNXg3UFxnKaB514scLgyovpHlR3EVeZvUSkX07AXkgbL96Wc7LSmRdThx4pE5z7K43yt2C0BMDgMcSoeI%2Fmqa3lBGSUYE6%2FfY%2F7Ys%2FKEQxEEMenOvTMBJmqdUp5MP%2B4sqIrYfDbgSClJ3%2BDz2wtGtRkWIrrW0HuL4ADajB4vI9E5kGeel2No0EolS5TpLD01fH95ybFJqbCtLvl2PEDlzxUW3yn%2Bz1FpKx1ZrKXgpsTO4FXK8i1mbQHEJKy2ZDZU1fMqcTChCvDkK29WnkrcxvSM89D8yA1nxUt7NkvJsQ7JRIqfQadOeT6oPkyctSrriCWIRna6KeSw2M6HLxCBXJup4PVt5GVHEgR6TKIN62KspTYg3ecdE4lvJDGIkGslJumXrdpWRZqDDE8kukgNU2agdjdNzPuEFIUHomzBmsYxPbSsw%2FvLCOhizhLE9k4TYjztKiufjsFoTAhv9eCUEb098VvmJzg4G7fS%2BC90aWieDq2GXX3GvwRBOT1%2FBZlCVKUO%2FoR4sYqaOHV190cAUi2qf4Z%2FI1dIv8XMtGkSXlwAFeL1N8aothcmFJhl%2Fy%2Blz37G8bB6fA5yUGBQze9zaonoV9%2FcJDow55DhvwY6pgHp8clyn8GXf3htJIfnSAqmEpNMlgAgNAFLE44kGGh41iVkGSpDLTvqsMy0JznUGCqIgtb5NsKZ3zpR7jo0aOYfrSYfDKXiVaG7SJU2lwQiQNoB%2BQkss74Rak9d52tFpMGjr98zEvreMcX1JXeQ0IrJi5Z00769I3rLr9UR7QPssxFUxNt7AOpGlPhYV3G%2FgzibLTln4ZXEzFJMGLF0LqGmXREAF8B6&X-Amz-Signature=23213def83a7880fdcaf867830748ff480d0b6baf9433fde6979fd8018896156&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZ42N32%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBgpqAO6EpJoswDkIo4fUrOj3H6nwJGf9XusIAoIJn4vAiBU2pECqeYDvUA6%2F3VKWk7k6E4WbqZLaRtXo3rvd2wsWCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC83tx2RsfDG0VZYlKtwDGcPEULxY8EPwndjYp7t3Jb8hb66mHNXg3UFxnKaB514scLgyovpHlR3EVeZvUSkX07AXkgbL96Wc7LSmRdThx4pE5z7K43yt2C0BMDgMcSoeI%2Fmqa3lBGSUYE6%2FfY%2F7Ys%2FKEQxEEMenOvTMBJmqdUp5MP%2B4sqIrYfDbgSClJ3%2BDz2wtGtRkWIrrW0HuL4ADajB4vI9E5kGeel2No0EolS5TpLD01fH95ybFJqbCtLvl2PEDlzxUW3yn%2Bz1FpKx1ZrKXgpsTO4FXK8i1mbQHEJKy2ZDZU1fMqcTChCvDkK29WnkrcxvSM89D8yA1nxUt7NkvJsQ7JRIqfQadOeT6oPkyctSrriCWIRna6KeSw2M6HLxCBXJup4PVt5GVHEgR6TKIN62KspTYg3ecdE4lvJDGIkGslJumXrdpWRZqDDE8kukgNU2agdjdNzPuEFIUHomzBmsYxPbSsw%2FvLCOhizhLE9k4TYjztKiufjsFoTAhv9eCUEb098VvmJzg4G7fS%2BC90aWieDq2GXX3GvwRBOT1%2FBZlCVKUO%2FoR4sYqaOHV190cAUi2qf4Z%2FI1dIv8XMtGkSXlwAFeL1N8aothcmFJhl%2Fy%2Blz37G8bB6fA5yUGBQze9zaonoV9%2FcJDow55DhvwY6pgHp8clyn8GXf3htJIfnSAqmEpNMlgAgNAFLE44kGGh41iVkGSpDLTvqsMy0JznUGCqIgtb5NsKZ3zpR7jo0aOYfrSYfDKXiVaG7SJU2lwQiQNoB%2BQkss74Rak9d52tFpMGjr98zEvreMcX1JXeQ0IrJi5Z00769I3rLr9UR7QPssxFUxNt7AOpGlPhYV3G%2FgzibLTln4ZXEzFJMGLF0LqGmXREAF8B6&X-Amz-Signature=9865f8d0e902c71ec11dc674b02f66afe68a7a3cdae0b8e4fc8a69ac56f3f194&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
