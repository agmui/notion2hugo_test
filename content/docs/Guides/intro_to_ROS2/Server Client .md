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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTTTNPX2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE0k2aokFJKOpDksT%2Fl5vp%2BwxpVMZ%2BAw8Bt1KCgVPLPAiAKDgGml9tkoxNDFU9JmvSPiogmWdaPntR7VwgvT%2B5HFiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFom44R9F1CDrClfJKtwDCSc%2B2HdCZ32BAaL2xV7NnVkwEOcNR7ROu%2BNkMn1Rz79ImebYmI%2FIe1BXe2YjCf0aQHWDvfFUZWwakxbwOdRJPJoafDVW9BRUBn6W6IZ432UDIB%2BQLi0qQf2A8mjxesMuHeVdEwHzpfQf9inX6qqLa9CPuAEMl7WIpzT6GLQaw3yx6iF8OXAesslrzMWhjOg2eOiQXe1797ndwvvG0hHHwiR0RqnpXCN6Ad7i17vL2F%2Ba4oYm3drSnq1iPOEabdsmZcGjmDUQ%2ByiPrfetQAy2MMr2ydWp6p%2FFQ6t0Wr%2F3mPjkKKwKPB7q91CQ%2BamMvoQTnps5BZPDbW04mB4c2yqhGhy3rd3kqFQN7W1Ns5GZZNfMMWAMxuavlKxxvkZrhJUaae7L3qmbeVZlYachDCUnJYCtZeAxtNruFrn6gUocQxVR9S8P2U7ieJEmlS%2BksXbjfdUa0sNbl1V%2FawvDH54m81f4nOHQC5ZCeY4svX1Rj4E%2B7qVRc3u4EUWLDW7yWCRO%2BVVJBvZWgZFd4wo1ElZ9chkwu9tsMmew7WR047DrCLwaykP%2BA2KpPoeJGG6qtdxMdFSf67a3PibL6KV9xOK7gKS32zWe4lDJDWLVAvsofNUDE3%2FJY5O3Mw%2BHBUQwnsH4vAY6pgETGz0%2BzZar6%2BFOYma5itLHy3DzMJTCtea%2BQx6ypmMZ99N3U2kTdZ9AfuixpwXPbggGQBoRSTxsgNCgrpk%2BS9WsbfrDoBBlfQjKjHI88zg19azqmbHq0p1LcsBkyLPXTcxKGtn%2FMlxIflL8g4chUktX4uV4M%2FQ7vgSS9%2B4oWYZGQyeoawKx51RpxZuHNI9XQfJ%2FQlodm%2FUux4L392H%2FuW6JBJMSCUSi&X-Amz-Signature=1ef1eef116cb7304992cba0a791625997b0ff0dbe8b3addc2482cabc9f9d145f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTTTNPX2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE0k2aokFJKOpDksT%2Fl5vp%2BwxpVMZ%2BAw8Bt1KCgVPLPAiAKDgGml9tkoxNDFU9JmvSPiogmWdaPntR7VwgvT%2B5HFiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFom44R9F1CDrClfJKtwDCSc%2B2HdCZ32BAaL2xV7NnVkwEOcNR7ROu%2BNkMn1Rz79ImebYmI%2FIe1BXe2YjCf0aQHWDvfFUZWwakxbwOdRJPJoafDVW9BRUBn6W6IZ432UDIB%2BQLi0qQf2A8mjxesMuHeVdEwHzpfQf9inX6qqLa9CPuAEMl7WIpzT6GLQaw3yx6iF8OXAesslrzMWhjOg2eOiQXe1797ndwvvG0hHHwiR0RqnpXCN6Ad7i17vL2F%2Ba4oYm3drSnq1iPOEabdsmZcGjmDUQ%2ByiPrfetQAy2MMr2ydWp6p%2FFQ6t0Wr%2F3mPjkKKwKPB7q91CQ%2BamMvoQTnps5BZPDbW04mB4c2yqhGhy3rd3kqFQN7W1Ns5GZZNfMMWAMxuavlKxxvkZrhJUaae7L3qmbeVZlYachDCUnJYCtZeAxtNruFrn6gUocQxVR9S8P2U7ieJEmlS%2BksXbjfdUa0sNbl1V%2FawvDH54m81f4nOHQC5ZCeY4svX1Rj4E%2B7qVRc3u4EUWLDW7yWCRO%2BVVJBvZWgZFd4wo1ElZ9chkwu9tsMmew7WR047DrCLwaykP%2BA2KpPoeJGG6qtdxMdFSf67a3PibL6KV9xOK7gKS32zWe4lDJDWLVAvsofNUDE3%2FJY5O3Mw%2BHBUQwnsH4vAY6pgETGz0%2BzZar6%2BFOYma5itLHy3DzMJTCtea%2BQx6ypmMZ99N3U2kTdZ9AfuixpwXPbggGQBoRSTxsgNCgrpk%2BS9WsbfrDoBBlfQjKjHI88zg19azqmbHq0p1LcsBkyLPXTcxKGtn%2FMlxIflL8g4chUktX4uV4M%2FQ7vgSS9%2B4oWYZGQyeoawKx51RpxZuHNI9XQfJ%2FQlodm%2FUux4L392H%2FuW6JBJMSCUSi&X-Amz-Signature=f86a7380a225f081200ca3085545618d94ccb77c2df7b9fe974e326b41346c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTTTNPX2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE0k2aokFJKOpDksT%2Fl5vp%2BwxpVMZ%2BAw8Bt1KCgVPLPAiAKDgGml9tkoxNDFU9JmvSPiogmWdaPntR7VwgvT%2B5HFiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFom44R9F1CDrClfJKtwDCSc%2B2HdCZ32BAaL2xV7NnVkwEOcNR7ROu%2BNkMn1Rz79ImebYmI%2FIe1BXe2YjCf0aQHWDvfFUZWwakxbwOdRJPJoafDVW9BRUBn6W6IZ432UDIB%2BQLi0qQf2A8mjxesMuHeVdEwHzpfQf9inX6qqLa9CPuAEMl7WIpzT6GLQaw3yx6iF8OXAesslrzMWhjOg2eOiQXe1797ndwvvG0hHHwiR0RqnpXCN6Ad7i17vL2F%2Ba4oYm3drSnq1iPOEabdsmZcGjmDUQ%2ByiPrfetQAy2MMr2ydWp6p%2FFQ6t0Wr%2F3mPjkKKwKPB7q91CQ%2BamMvoQTnps5BZPDbW04mB4c2yqhGhy3rd3kqFQN7W1Ns5GZZNfMMWAMxuavlKxxvkZrhJUaae7L3qmbeVZlYachDCUnJYCtZeAxtNruFrn6gUocQxVR9S8P2U7ieJEmlS%2BksXbjfdUa0sNbl1V%2FawvDH54m81f4nOHQC5ZCeY4svX1Rj4E%2B7qVRc3u4EUWLDW7yWCRO%2BVVJBvZWgZFd4wo1ElZ9chkwu9tsMmew7WR047DrCLwaykP%2BA2KpPoeJGG6qtdxMdFSf67a3PibL6KV9xOK7gKS32zWe4lDJDWLVAvsofNUDE3%2FJY5O3Mw%2BHBUQwnsH4vAY6pgETGz0%2BzZar6%2BFOYma5itLHy3DzMJTCtea%2BQx6ypmMZ99N3U2kTdZ9AfuixpwXPbggGQBoRSTxsgNCgrpk%2BS9WsbfrDoBBlfQjKjHI88zg19azqmbHq0p1LcsBkyLPXTcxKGtn%2FMlxIflL8g4chUktX4uV4M%2FQ7vgSS9%2B4oWYZGQyeoawKx51RpxZuHNI9XQfJ%2FQlodm%2FUux4L392H%2FuW6JBJMSCUSi&X-Amz-Signature=acf5de98f587e8dacc8d5226a727f985a4ddfea41f10e53b9a1a38afafc2315f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTTTNPX2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE0k2aokFJKOpDksT%2Fl5vp%2BwxpVMZ%2BAw8Bt1KCgVPLPAiAKDgGml9tkoxNDFU9JmvSPiogmWdaPntR7VwgvT%2B5HFiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFom44R9F1CDrClfJKtwDCSc%2B2HdCZ32BAaL2xV7NnVkwEOcNR7ROu%2BNkMn1Rz79ImebYmI%2FIe1BXe2YjCf0aQHWDvfFUZWwakxbwOdRJPJoafDVW9BRUBn6W6IZ432UDIB%2BQLi0qQf2A8mjxesMuHeVdEwHzpfQf9inX6qqLa9CPuAEMl7WIpzT6GLQaw3yx6iF8OXAesslrzMWhjOg2eOiQXe1797ndwvvG0hHHwiR0RqnpXCN6Ad7i17vL2F%2Ba4oYm3drSnq1iPOEabdsmZcGjmDUQ%2ByiPrfetQAy2MMr2ydWp6p%2FFQ6t0Wr%2F3mPjkKKwKPB7q91CQ%2BamMvoQTnps5BZPDbW04mB4c2yqhGhy3rd3kqFQN7W1Ns5GZZNfMMWAMxuavlKxxvkZrhJUaae7L3qmbeVZlYachDCUnJYCtZeAxtNruFrn6gUocQxVR9S8P2U7ieJEmlS%2BksXbjfdUa0sNbl1V%2FawvDH54m81f4nOHQC5ZCeY4svX1Rj4E%2B7qVRc3u4EUWLDW7yWCRO%2BVVJBvZWgZFd4wo1ElZ9chkwu9tsMmew7WR047DrCLwaykP%2BA2KpPoeJGG6qtdxMdFSf67a3PibL6KV9xOK7gKS32zWe4lDJDWLVAvsofNUDE3%2FJY5O3Mw%2BHBUQwnsH4vAY6pgETGz0%2BzZar6%2BFOYma5itLHy3DzMJTCtea%2BQx6ypmMZ99N3U2kTdZ9AfuixpwXPbggGQBoRSTxsgNCgrpk%2BS9WsbfrDoBBlfQjKjHI88zg19azqmbHq0p1LcsBkyLPXTcxKGtn%2FMlxIflL8g4chUktX4uV4M%2FQ7vgSS9%2B4oWYZGQyeoawKx51RpxZuHNI9XQfJ%2FQlodm%2FUux4L392H%2FuW6JBJMSCUSi&X-Amz-Signature=78079f6df164e95527ff0276492f323af785701f82a96cc4bf5c17f32348eb82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTTTNPX2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE0k2aokFJKOpDksT%2Fl5vp%2BwxpVMZ%2BAw8Bt1KCgVPLPAiAKDgGml9tkoxNDFU9JmvSPiogmWdaPntR7VwgvT%2B5HFiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFom44R9F1CDrClfJKtwDCSc%2B2HdCZ32BAaL2xV7NnVkwEOcNR7ROu%2BNkMn1Rz79ImebYmI%2FIe1BXe2YjCf0aQHWDvfFUZWwakxbwOdRJPJoafDVW9BRUBn6W6IZ432UDIB%2BQLi0qQf2A8mjxesMuHeVdEwHzpfQf9inX6qqLa9CPuAEMl7WIpzT6GLQaw3yx6iF8OXAesslrzMWhjOg2eOiQXe1797ndwvvG0hHHwiR0RqnpXCN6Ad7i17vL2F%2Ba4oYm3drSnq1iPOEabdsmZcGjmDUQ%2ByiPrfetQAy2MMr2ydWp6p%2FFQ6t0Wr%2F3mPjkKKwKPB7q91CQ%2BamMvoQTnps5BZPDbW04mB4c2yqhGhy3rd3kqFQN7W1Ns5GZZNfMMWAMxuavlKxxvkZrhJUaae7L3qmbeVZlYachDCUnJYCtZeAxtNruFrn6gUocQxVR9S8P2U7ieJEmlS%2BksXbjfdUa0sNbl1V%2FawvDH54m81f4nOHQC5ZCeY4svX1Rj4E%2B7qVRc3u4EUWLDW7yWCRO%2BVVJBvZWgZFd4wo1ElZ9chkwu9tsMmew7WR047DrCLwaykP%2BA2KpPoeJGG6qtdxMdFSf67a3PibL6KV9xOK7gKS32zWe4lDJDWLVAvsofNUDE3%2FJY5O3Mw%2BHBUQwnsH4vAY6pgETGz0%2BzZar6%2BFOYma5itLHy3DzMJTCtea%2BQx6ypmMZ99N3U2kTdZ9AfuixpwXPbggGQBoRSTxsgNCgrpk%2BS9WsbfrDoBBlfQjKjHI88zg19azqmbHq0p1LcsBkyLPXTcxKGtn%2FMlxIflL8g4chUktX4uV4M%2FQ7vgSS9%2B4oWYZGQyeoawKx51RpxZuHNI9XQfJ%2FQlodm%2FUux4L392H%2FuW6JBJMSCUSi&X-Amz-Signature=53f97938103e1fd8835003f922e974a9784e58266086b70d32270f3d9b0952ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
