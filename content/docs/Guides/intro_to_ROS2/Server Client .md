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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMGCSAY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrDXbltPXk0jKdmS3vwumKnzxtgGBlJBxBJf1JwdViFQIhAIxwwF8D2QS17fsGqadTrkGdtQe81C%2FJ1imjra%2Fy5hqSKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTryjBJ8DWjZ3w%2Bj4q3APvnkiY4JKNp67xMYIZ7ORuB%2FkQTTihufXoR7IGzlkUgWGeP8IcIGi4JztmE7qsEOhsg1eb%2Fu%2FSs8Iiy%2F3F9kuPwhhoWry0aYJYFPMBwGKifVyELzTH9MSBWzSr5CK5c5Qk5wpBFTHj%2B%2BrIL3Sd1UhAkmGM610s12zNwx6SFB9IM6f0mq%2B0WDSlyd6wDh9SMsFUAsE6YEkqGS4GcBQn7ZvBOLKhgTRLVGU7en%2BgMSuZInOd6mutfiu%2B0AqkllGgBLDQt0vvhiNtoEfie7mvENNxYAze5RsthjYc9jb0J6YTrsU%2Fo3ZpiHqyV4JGVkvmJRrVd6%2BxZD6fJUGD3cLv%2BpirreREhDNVl6odiIVhoedf5pGjJXFehaQg7hjG4USAuk89EvUrR9xui3CWfxBbNITiIscEmkbZkEBbo0qHG%2BVQyR5YzAx%2FbPTSs0J%2Fkkabd170T5zqBersuFk%2B9Xgb8vPWI7uQdN%2FKlTG6QDtJ7X74ajWZASDKN1lsP0kekXC2QQPR1ejDQZTVm%2BIomt5LKVV%2BAgED8U4l6tW8u01ZX27rnfxdD6RXZfs5UdeONC9e7JPiILHndH5LKEeqOYltnu2kBjFzXmWYaHwEIXP0afZxdGTPPvRdFE75%2BHMNDTCqvdPCBjqkAVoIdI9ymt%2Bj%2BTcVPjtbwmqFsrAkyvpOsICGy%2BORlfzuu%2F9G9WFz4Qg7kgpJKu%2FNLDrVr%2BDgUpI4MCmORWyALi%2Bvmja%2FmtrIVQXtLngyGTRAZyAbydL8hgp4AzpQQPmogoprWQWVoUkAWg446xXVUpY%2FpPWnQ4Sv%2BxQJzmRDTTl7AX2%2Fk31ocvnc8Lt5ltzfCb%2FZ2joxa4agX6%2BJh8nuWcXv5wgq&X-Amz-Signature=8879fb957a0408e6f187a4fc9d5f48736e03f9dc5957e90c7fc582532065ec92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMGCSAY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrDXbltPXk0jKdmS3vwumKnzxtgGBlJBxBJf1JwdViFQIhAIxwwF8D2QS17fsGqadTrkGdtQe81C%2FJ1imjra%2Fy5hqSKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTryjBJ8DWjZ3w%2Bj4q3APvnkiY4JKNp67xMYIZ7ORuB%2FkQTTihufXoR7IGzlkUgWGeP8IcIGi4JztmE7qsEOhsg1eb%2Fu%2FSs8Iiy%2F3F9kuPwhhoWry0aYJYFPMBwGKifVyELzTH9MSBWzSr5CK5c5Qk5wpBFTHj%2B%2BrIL3Sd1UhAkmGM610s12zNwx6SFB9IM6f0mq%2B0WDSlyd6wDh9SMsFUAsE6YEkqGS4GcBQn7ZvBOLKhgTRLVGU7en%2BgMSuZInOd6mutfiu%2B0AqkllGgBLDQt0vvhiNtoEfie7mvENNxYAze5RsthjYc9jb0J6YTrsU%2Fo3ZpiHqyV4JGVkvmJRrVd6%2BxZD6fJUGD3cLv%2BpirreREhDNVl6odiIVhoedf5pGjJXFehaQg7hjG4USAuk89EvUrR9xui3CWfxBbNITiIscEmkbZkEBbo0qHG%2BVQyR5YzAx%2FbPTSs0J%2Fkkabd170T5zqBersuFk%2B9Xgb8vPWI7uQdN%2FKlTG6QDtJ7X74ajWZASDKN1lsP0kekXC2QQPR1ejDQZTVm%2BIomt5LKVV%2BAgED8U4l6tW8u01ZX27rnfxdD6RXZfs5UdeONC9e7JPiILHndH5LKEeqOYltnu2kBjFzXmWYaHwEIXP0afZxdGTPPvRdFE75%2BHMNDTCqvdPCBjqkAVoIdI9ymt%2Bj%2BTcVPjtbwmqFsrAkyvpOsICGy%2BORlfzuu%2F9G9WFz4Qg7kgpJKu%2FNLDrVr%2BDgUpI4MCmORWyALi%2Bvmja%2FmtrIVQXtLngyGTRAZyAbydL8hgp4AzpQQPmogoprWQWVoUkAWg446xXVUpY%2FpPWnQ4Sv%2BxQJzmRDTTl7AX2%2Fk31ocvnc8Lt5ltzfCb%2FZ2joxa4agX6%2BJh8nuWcXv5wgq&X-Amz-Signature=eb1aee038d720ee9e0378000fc6bdc2b34510321980281aa0c89ff2e2907085b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMGCSAY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrDXbltPXk0jKdmS3vwumKnzxtgGBlJBxBJf1JwdViFQIhAIxwwF8D2QS17fsGqadTrkGdtQe81C%2FJ1imjra%2Fy5hqSKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTryjBJ8DWjZ3w%2Bj4q3APvnkiY4JKNp67xMYIZ7ORuB%2FkQTTihufXoR7IGzlkUgWGeP8IcIGi4JztmE7qsEOhsg1eb%2Fu%2FSs8Iiy%2F3F9kuPwhhoWry0aYJYFPMBwGKifVyELzTH9MSBWzSr5CK5c5Qk5wpBFTHj%2B%2BrIL3Sd1UhAkmGM610s12zNwx6SFB9IM6f0mq%2B0WDSlyd6wDh9SMsFUAsE6YEkqGS4GcBQn7ZvBOLKhgTRLVGU7en%2BgMSuZInOd6mutfiu%2B0AqkllGgBLDQt0vvhiNtoEfie7mvENNxYAze5RsthjYc9jb0J6YTrsU%2Fo3ZpiHqyV4JGVkvmJRrVd6%2BxZD6fJUGD3cLv%2BpirreREhDNVl6odiIVhoedf5pGjJXFehaQg7hjG4USAuk89EvUrR9xui3CWfxBbNITiIscEmkbZkEBbo0qHG%2BVQyR5YzAx%2FbPTSs0J%2Fkkabd170T5zqBersuFk%2B9Xgb8vPWI7uQdN%2FKlTG6QDtJ7X74ajWZASDKN1lsP0kekXC2QQPR1ejDQZTVm%2BIomt5LKVV%2BAgED8U4l6tW8u01ZX27rnfxdD6RXZfs5UdeONC9e7JPiILHndH5LKEeqOYltnu2kBjFzXmWYaHwEIXP0afZxdGTPPvRdFE75%2BHMNDTCqvdPCBjqkAVoIdI9ymt%2Bj%2BTcVPjtbwmqFsrAkyvpOsICGy%2BORlfzuu%2F9G9WFz4Qg7kgpJKu%2FNLDrVr%2BDgUpI4MCmORWyALi%2Bvmja%2FmtrIVQXtLngyGTRAZyAbydL8hgp4AzpQQPmogoprWQWVoUkAWg446xXVUpY%2FpPWnQ4Sv%2BxQJzmRDTTl7AX2%2Fk31ocvnc8Lt5ltzfCb%2FZ2joxa4agX6%2BJh8nuWcXv5wgq&X-Amz-Signature=7e3d306e17922e3dea2c22302044d5d8813a5b046d6433f562aa1af6f3362116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMGCSAY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrDXbltPXk0jKdmS3vwumKnzxtgGBlJBxBJf1JwdViFQIhAIxwwF8D2QS17fsGqadTrkGdtQe81C%2FJ1imjra%2Fy5hqSKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTryjBJ8DWjZ3w%2Bj4q3APvnkiY4JKNp67xMYIZ7ORuB%2FkQTTihufXoR7IGzlkUgWGeP8IcIGi4JztmE7qsEOhsg1eb%2Fu%2FSs8Iiy%2F3F9kuPwhhoWry0aYJYFPMBwGKifVyELzTH9MSBWzSr5CK5c5Qk5wpBFTHj%2B%2BrIL3Sd1UhAkmGM610s12zNwx6SFB9IM6f0mq%2B0WDSlyd6wDh9SMsFUAsE6YEkqGS4GcBQn7ZvBOLKhgTRLVGU7en%2BgMSuZInOd6mutfiu%2B0AqkllGgBLDQt0vvhiNtoEfie7mvENNxYAze5RsthjYc9jb0J6YTrsU%2Fo3ZpiHqyV4JGVkvmJRrVd6%2BxZD6fJUGD3cLv%2BpirreREhDNVl6odiIVhoedf5pGjJXFehaQg7hjG4USAuk89EvUrR9xui3CWfxBbNITiIscEmkbZkEBbo0qHG%2BVQyR5YzAx%2FbPTSs0J%2Fkkabd170T5zqBersuFk%2B9Xgb8vPWI7uQdN%2FKlTG6QDtJ7X74ajWZASDKN1lsP0kekXC2QQPR1ejDQZTVm%2BIomt5LKVV%2BAgED8U4l6tW8u01ZX27rnfxdD6RXZfs5UdeONC9e7JPiILHndH5LKEeqOYltnu2kBjFzXmWYaHwEIXP0afZxdGTPPvRdFE75%2BHMNDTCqvdPCBjqkAVoIdI9ymt%2Bj%2BTcVPjtbwmqFsrAkyvpOsICGy%2BORlfzuu%2F9G9WFz4Qg7kgpJKu%2FNLDrVr%2BDgUpI4MCmORWyALi%2Bvmja%2FmtrIVQXtLngyGTRAZyAbydL8hgp4AzpQQPmogoprWQWVoUkAWg446xXVUpY%2FpPWnQ4Sv%2BxQJzmRDTTl7AX2%2Fk31ocvnc8Lt5ltzfCb%2FZ2joxa4agX6%2BJh8nuWcXv5wgq&X-Amz-Signature=144f7a9828ff576acd8563911ad27d1729607a0e05e59b2a47dd384b0118eb79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMGCSAY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrDXbltPXk0jKdmS3vwumKnzxtgGBlJBxBJf1JwdViFQIhAIxwwF8D2QS17fsGqadTrkGdtQe81C%2FJ1imjra%2Fy5hqSKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTryjBJ8DWjZ3w%2Bj4q3APvnkiY4JKNp67xMYIZ7ORuB%2FkQTTihufXoR7IGzlkUgWGeP8IcIGi4JztmE7qsEOhsg1eb%2Fu%2FSs8Iiy%2F3F9kuPwhhoWry0aYJYFPMBwGKifVyELzTH9MSBWzSr5CK5c5Qk5wpBFTHj%2B%2BrIL3Sd1UhAkmGM610s12zNwx6SFB9IM6f0mq%2B0WDSlyd6wDh9SMsFUAsE6YEkqGS4GcBQn7ZvBOLKhgTRLVGU7en%2BgMSuZInOd6mutfiu%2B0AqkllGgBLDQt0vvhiNtoEfie7mvENNxYAze5RsthjYc9jb0J6YTrsU%2Fo3ZpiHqyV4JGVkvmJRrVd6%2BxZD6fJUGD3cLv%2BpirreREhDNVl6odiIVhoedf5pGjJXFehaQg7hjG4USAuk89EvUrR9xui3CWfxBbNITiIscEmkbZkEBbo0qHG%2BVQyR5YzAx%2FbPTSs0J%2Fkkabd170T5zqBersuFk%2B9Xgb8vPWI7uQdN%2FKlTG6QDtJ7X74ajWZASDKN1lsP0kekXC2QQPR1ejDQZTVm%2BIomt5LKVV%2BAgED8U4l6tW8u01ZX27rnfxdD6RXZfs5UdeONC9e7JPiILHndH5LKEeqOYltnu2kBjFzXmWYaHwEIXP0afZxdGTPPvRdFE75%2BHMNDTCqvdPCBjqkAVoIdI9ymt%2Bj%2BTcVPjtbwmqFsrAkyvpOsICGy%2BORlfzuu%2F9G9WFz4Qg7kgpJKu%2FNLDrVr%2BDgUpI4MCmORWyALi%2Bvmja%2FmtrIVQXtLngyGTRAZyAbydL8hgp4AzpQQPmogoprWQWVoUkAWg446xXVUpY%2FpPWnQ4Sv%2BxQJzmRDTTl7AX2%2Fk31ocvnc8Lt5ltzfCb%2FZ2joxa4agX6%2BJh8nuWcXv5wgq&X-Amz-Signature=f3e68ab595ebb2d9a8130596f815320fefc8fe31369b51c8558416ec9cba04c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
