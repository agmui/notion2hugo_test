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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPGJACUN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHVD7Xb7QML1uZTPHZ4xTANy%2BX0%2Fhd0y7OnRyvrVJ2uAiA14wiDwksyBewo%2B0r7YxYjFfvoQ2Jh6FZ2dXuLwhZWQyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeYmDK8d%2Bl7wKvyC2KtwDtNKWGMnlJYsh1WHc3CR0SKCUmxvOnqe8BuXBEeh9p0s3tqmPWplSPmJghtJEqLYw6Fkq90I%2BXHOQXsRlRlsroiclEoC8PNdjifkhQk5sY7tCRCtt8SgFc8r4s6tR7lc0KF%2FjxrcdZt%2BTenyeEjZ2cP71q8JMlKBEBjXNos1X6QFCsk2tjGQiFL7SrJUY%2FbySgbJUd6DlLMGCFh4p82xAeceGRYx3wiEqInbScBOpnWhLHkhgafe%2F7WhBk5NnRKa3tt6SFx9u1RmvEpn43AGPx65s00mk3nsBFlXmbK0%2BCJRNt6Cg%2FAt%2BkA7nauj%2FrNimH1iOFJUHfHuIGhAsjnJJLDHEPykxYYMIs%2B1F%2BC8OoTGBMYvTkt%2FZPI3a7KSqWBa56wYGG5H%2FXP5OqG17BeEHuaPUbYYWBMiGbOD0SAjC2iM42fXapEgz19cdgWbCtq%2Fq%2BThenO0elQtz0dcW7hd%2B2LrWMQjeSonPcQgSyhq24VINC5HA3W1mGTbrpSsDAgHte%2BcNm2Rq4xsexOnO5IQf5jobDlM%2BXrcLd%2FC9w0y4EDIQL%2FCApxqPbpBC3BpDtxWmb0UEOhZdG7Jp%2BBotMPVoUNDWl0%2F59cFJ7jz2ARqrsPdL%2FNtZGCkCuSJMu2QwjvOUwgY6pgEjT4dScYqIHOIQ2LH7%2Fc3WZC8JMJFzkzAf372BDGGn2IA9rGInhTIep5M%2BXEW8Fz3zlkxN3SKitXViMea4vzDSIymuhAiJ5ePE3rmImBT4EJl8vHIMUPrJMzTTWqgplrSz7JohFsk5zfQWakn2uaLEgh7LKh9L%2FBh5OVM3wsC5nU%2FX%2FMasI7Odkqxi605vGYu00iO8B5ZQcYHqYwa0YKbAt2F7rkdg&X-Amz-Signature=01878fc5fa7a9d0f8712a9c9d93c9f7a1948f1e7c11caaf0b9e41d7d045c2c51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPGJACUN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHVD7Xb7QML1uZTPHZ4xTANy%2BX0%2Fhd0y7OnRyvrVJ2uAiA14wiDwksyBewo%2B0r7YxYjFfvoQ2Jh6FZ2dXuLwhZWQyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeYmDK8d%2Bl7wKvyC2KtwDtNKWGMnlJYsh1WHc3CR0SKCUmxvOnqe8BuXBEeh9p0s3tqmPWplSPmJghtJEqLYw6Fkq90I%2BXHOQXsRlRlsroiclEoC8PNdjifkhQk5sY7tCRCtt8SgFc8r4s6tR7lc0KF%2FjxrcdZt%2BTenyeEjZ2cP71q8JMlKBEBjXNos1X6QFCsk2tjGQiFL7SrJUY%2FbySgbJUd6DlLMGCFh4p82xAeceGRYx3wiEqInbScBOpnWhLHkhgafe%2F7WhBk5NnRKa3tt6SFx9u1RmvEpn43AGPx65s00mk3nsBFlXmbK0%2BCJRNt6Cg%2FAt%2BkA7nauj%2FrNimH1iOFJUHfHuIGhAsjnJJLDHEPykxYYMIs%2B1F%2BC8OoTGBMYvTkt%2FZPI3a7KSqWBa56wYGG5H%2FXP5OqG17BeEHuaPUbYYWBMiGbOD0SAjC2iM42fXapEgz19cdgWbCtq%2Fq%2BThenO0elQtz0dcW7hd%2B2LrWMQjeSonPcQgSyhq24VINC5HA3W1mGTbrpSsDAgHte%2BcNm2Rq4xsexOnO5IQf5jobDlM%2BXrcLd%2FC9w0y4EDIQL%2FCApxqPbpBC3BpDtxWmb0UEOhZdG7Jp%2BBotMPVoUNDWl0%2F59cFJ7jz2ARqrsPdL%2FNtZGCkCuSJMu2QwjvOUwgY6pgEjT4dScYqIHOIQ2LH7%2Fc3WZC8JMJFzkzAf372BDGGn2IA9rGInhTIep5M%2BXEW8Fz3zlkxN3SKitXViMea4vzDSIymuhAiJ5ePE3rmImBT4EJl8vHIMUPrJMzTTWqgplrSz7JohFsk5zfQWakn2uaLEgh7LKh9L%2FBh5OVM3wsC5nU%2FX%2FMasI7Odkqxi605vGYu00iO8B5ZQcYHqYwa0YKbAt2F7rkdg&X-Amz-Signature=72b980bd624ff1848bff5cca166d57fe020073bbefaa27c17d4c7040431ab24b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPGJACUN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHVD7Xb7QML1uZTPHZ4xTANy%2BX0%2Fhd0y7OnRyvrVJ2uAiA14wiDwksyBewo%2B0r7YxYjFfvoQ2Jh6FZ2dXuLwhZWQyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeYmDK8d%2Bl7wKvyC2KtwDtNKWGMnlJYsh1WHc3CR0SKCUmxvOnqe8BuXBEeh9p0s3tqmPWplSPmJghtJEqLYw6Fkq90I%2BXHOQXsRlRlsroiclEoC8PNdjifkhQk5sY7tCRCtt8SgFc8r4s6tR7lc0KF%2FjxrcdZt%2BTenyeEjZ2cP71q8JMlKBEBjXNos1X6QFCsk2tjGQiFL7SrJUY%2FbySgbJUd6DlLMGCFh4p82xAeceGRYx3wiEqInbScBOpnWhLHkhgafe%2F7WhBk5NnRKa3tt6SFx9u1RmvEpn43AGPx65s00mk3nsBFlXmbK0%2BCJRNt6Cg%2FAt%2BkA7nauj%2FrNimH1iOFJUHfHuIGhAsjnJJLDHEPykxYYMIs%2B1F%2BC8OoTGBMYvTkt%2FZPI3a7KSqWBa56wYGG5H%2FXP5OqG17BeEHuaPUbYYWBMiGbOD0SAjC2iM42fXapEgz19cdgWbCtq%2Fq%2BThenO0elQtz0dcW7hd%2B2LrWMQjeSonPcQgSyhq24VINC5HA3W1mGTbrpSsDAgHte%2BcNm2Rq4xsexOnO5IQf5jobDlM%2BXrcLd%2FC9w0y4EDIQL%2FCApxqPbpBC3BpDtxWmb0UEOhZdG7Jp%2BBotMPVoUNDWl0%2F59cFJ7jz2ARqrsPdL%2FNtZGCkCuSJMu2QwjvOUwgY6pgEjT4dScYqIHOIQ2LH7%2Fc3WZC8JMJFzkzAf372BDGGn2IA9rGInhTIep5M%2BXEW8Fz3zlkxN3SKitXViMea4vzDSIymuhAiJ5ePE3rmImBT4EJl8vHIMUPrJMzTTWqgplrSz7JohFsk5zfQWakn2uaLEgh7LKh9L%2FBh5OVM3wsC5nU%2FX%2FMasI7Odkqxi605vGYu00iO8B5ZQcYHqYwa0YKbAt2F7rkdg&X-Amz-Signature=a5978d7b71df3ec153c737c55e8865f2375ddbe2ae0eba12e5e9d169cda1e766&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPGJACUN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHVD7Xb7QML1uZTPHZ4xTANy%2BX0%2Fhd0y7OnRyvrVJ2uAiA14wiDwksyBewo%2B0r7YxYjFfvoQ2Jh6FZ2dXuLwhZWQyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeYmDK8d%2Bl7wKvyC2KtwDtNKWGMnlJYsh1WHc3CR0SKCUmxvOnqe8BuXBEeh9p0s3tqmPWplSPmJghtJEqLYw6Fkq90I%2BXHOQXsRlRlsroiclEoC8PNdjifkhQk5sY7tCRCtt8SgFc8r4s6tR7lc0KF%2FjxrcdZt%2BTenyeEjZ2cP71q8JMlKBEBjXNos1X6QFCsk2tjGQiFL7SrJUY%2FbySgbJUd6DlLMGCFh4p82xAeceGRYx3wiEqInbScBOpnWhLHkhgafe%2F7WhBk5NnRKa3tt6SFx9u1RmvEpn43AGPx65s00mk3nsBFlXmbK0%2BCJRNt6Cg%2FAt%2BkA7nauj%2FrNimH1iOFJUHfHuIGhAsjnJJLDHEPykxYYMIs%2B1F%2BC8OoTGBMYvTkt%2FZPI3a7KSqWBa56wYGG5H%2FXP5OqG17BeEHuaPUbYYWBMiGbOD0SAjC2iM42fXapEgz19cdgWbCtq%2Fq%2BThenO0elQtz0dcW7hd%2B2LrWMQjeSonPcQgSyhq24VINC5HA3W1mGTbrpSsDAgHte%2BcNm2Rq4xsexOnO5IQf5jobDlM%2BXrcLd%2FC9w0y4EDIQL%2FCApxqPbpBC3BpDtxWmb0UEOhZdG7Jp%2BBotMPVoUNDWl0%2F59cFJ7jz2ARqrsPdL%2FNtZGCkCuSJMu2QwjvOUwgY6pgEjT4dScYqIHOIQ2LH7%2Fc3WZC8JMJFzkzAf372BDGGn2IA9rGInhTIep5M%2BXEW8Fz3zlkxN3SKitXViMea4vzDSIymuhAiJ5ePE3rmImBT4EJl8vHIMUPrJMzTTWqgplrSz7JohFsk5zfQWakn2uaLEgh7LKh9L%2FBh5OVM3wsC5nU%2FX%2FMasI7Odkqxi605vGYu00iO8B5ZQcYHqYwa0YKbAt2F7rkdg&X-Amz-Signature=23296f3abc6f0623380bf7cdcb38fdaa50be85dd7268600d9d5ff1a54062a511&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPGJACUN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHVD7Xb7QML1uZTPHZ4xTANy%2BX0%2Fhd0y7OnRyvrVJ2uAiA14wiDwksyBewo%2B0r7YxYjFfvoQ2Jh6FZ2dXuLwhZWQyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeYmDK8d%2Bl7wKvyC2KtwDtNKWGMnlJYsh1WHc3CR0SKCUmxvOnqe8BuXBEeh9p0s3tqmPWplSPmJghtJEqLYw6Fkq90I%2BXHOQXsRlRlsroiclEoC8PNdjifkhQk5sY7tCRCtt8SgFc8r4s6tR7lc0KF%2FjxrcdZt%2BTenyeEjZ2cP71q8JMlKBEBjXNos1X6QFCsk2tjGQiFL7SrJUY%2FbySgbJUd6DlLMGCFh4p82xAeceGRYx3wiEqInbScBOpnWhLHkhgafe%2F7WhBk5NnRKa3tt6SFx9u1RmvEpn43AGPx65s00mk3nsBFlXmbK0%2BCJRNt6Cg%2FAt%2BkA7nauj%2FrNimH1iOFJUHfHuIGhAsjnJJLDHEPykxYYMIs%2B1F%2BC8OoTGBMYvTkt%2FZPI3a7KSqWBa56wYGG5H%2FXP5OqG17BeEHuaPUbYYWBMiGbOD0SAjC2iM42fXapEgz19cdgWbCtq%2Fq%2BThenO0elQtz0dcW7hd%2B2LrWMQjeSonPcQgSyhq24VINC5HA3W1mGTbrpSsDAgHte%2BcNm2Rq4xsexOnO5IQf5jobDlM%2BXrcLd%2FC9w0y4EDIQL%2FCApxqPbpBC3BpDtxWmb0UEOhZdG7Jp%2BBotMPVoUNDWl0%2F59cFJ7jz2ARqrsPdL%2FNtZGCkCuSJMu2QwjvOUwgY6pgEjT4dScYqIHOIQ2LH7%2Fc3WZC8JMJFzkzAf372BDGGn2IA9rGInhTIep5M%2BXEW8Fz3zlkxN3SKitXViMea4vzDSIymuhAiJ5ePE3rmImBT4EJl8vHIMUPrJMzTTWqgplrSz7JohFsk5zfQWakn2uaLEgh7LKh9L%2FBh5OVM3wsC5nU%2FX%2FMasI7Odkqxi605vGYu00iO8B5ZQcYHqYwa0YKbAt2F7rkdg&X-Amz-Signature=732bbc9678aaccdc54a2d11915eed7fdb0083ba6e93613f3c9e3ac3d730ba3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
