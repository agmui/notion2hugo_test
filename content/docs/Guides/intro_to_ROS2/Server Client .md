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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXK34PP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdTce0AN2hQzSagZ3LeDeAmaS%2Bj6hT%2FBFH3pE738Yt3AiEAgX8DFsW0krmDu%2FG3nmE5%2FsA7I4hsJW2aGjnXOLB5cPEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FvAS2iAs8Klq0M5ircAws4RwRLS8sdN3GO8AN%2B%2Fr0TvN2ptBJDvGBDL28TWjRRcv5QUCOD26aKNI6ZR3gjSIj3tRA4olnP0DvpFfK9%2B%2BsXIf6ZhpKWn%2BbHZiShbeCsmOr25mqAOX3vjKmIjulDRzDC%2BKsF5I87QAso3l%2F8qD%2BG0nRW5CFs%2BZ3tizZrcYCZe44mCidIAOiUWArODxrWOJcgNMhRUsHIikNDXxMlokpXcCy0yqFbdET2a5f%2FaG%2BNt133qxxnhiHF8Z0LMeBW09tp3VNhLVmTTIM1iMGwXq6a98Rp3ScGgf786rpnYHbhtMGJzdeda14vluwcknNPc4DkjmVmOXaFgc3uYUDG%2F2ikme1M3LpWpyEHVD6fUZ2nYokzUMwNYS%2BjHv8PA%2Bj0MiOtOkBfdIXMghVTQUXyG%2Bo%2BXAcSOxBrHed%2FVnlLthcc%2FUmKgeLpFJ4mNlGQPqTBbcmXWeHfg5rwEdRUxLtMqdHrn3pFRuHJAwgt0Gpjjx45VmLkHxKWIqjSWvyvPhi34yBrdCgWGzrCljzDEEMULjrMYFONiyKuA9z5%2F3FKn87yqweoDsaH4JmjbwXlSBdEodKwzUQnD%2BCcECZvVQTOs42cud%2Byv5WSQrsvS8i5WSOb%2FMmGH60geIiu7ykoMIS067wGOqUBajefm672ZSfwBFo1eNh5WmOkTdgiFbeje7%2BBZX4oWyMTioi8wU5oWuTVnFZgJzqphoUOVo%2FanO%2BbI63I6duWmfDWI4kitMRYWiobdcAy58AZXCGXh8HcwYKKFBtI2YvKUoEoF%2FezkoQaMVHkmg5kzIuS15RjPvp8qKZnXVcGIE32EctI%2FinjjErW5qIR0HZVoro%2Flf9n74zM6bDPSQD5qB6IZ1fc&X-Amz-Signature=5bf0b1bbae3bc0b911c931da909f79880bb56f5829d280dcedb7f315fc8ae3d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXK34PP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdTce0AN2hQzSagZ3LeDeAmaS%2Bj6hT%2FBFH3pE738Yt3AiEAgX8DFsW0krmDu%2FG3nmE5%2FsA7I4hsJW2aGjnXOLB5cPEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FvAS2iAs8Klq0M5ircAws4RwRLS8sdN3GO8AN%2B%2Fr0TvN2ptBJDvGBDL28TWjRRcv5QUCOD26aKNI6ZR3gjSIj3tRA4olnP0DvpFfK9%2B%2BsXIf6ZhpKWn%2BbHZiShbeCsmOr25mqAOX3vjKmIjulDRzDC%2BKsF5I87QAso3l%2F8qD%2BG0nRW5CFs%2BZ3tizZrcYCZe44mCidIAOiUWArODxrWOJcgNMhRUsHIikNDXxMlokpXcCy0yqFbdET2a5f%2FaG%2BNt133qxxnhiHF8Z0LMeBW09tp3VNhLVmTTIM1iMGwXq6a98Rp3ScGgf786rpnYHbhtMGJzdeda14vluwcknNPc4DkjmVmOXaFgc3uYUDG%2F2ikme1M3LpWpyEHVD6fUZ2nYokzUMwNYS%2BjHv8PA%2Bj0MiOtOkBfdIXMghVTQUXyG%2Bo%2BXAcSOxBrHed%2FVnlLthcc%2FUmKgeLpFJ4mNlGQPqTBbcmXWeHfg5rwEdRUxLtMqdHrn3pFRuHJAwgt0Gpjjx45VmLkHxKWIqjSWvyvPhi34yBrdCgWGzrCljzDEEMULjrMYFONiyKuA9z5%2F3FKn87yqweoDsaH4JmjbwXlSBdEodKwzUQnD%2BCcECZvVQTOs42cud%2Byv5WSQrsvS8i5WSOb%2FMmGH60geIiu7ykoMIS067wGOqUBajefm672ZSfwBFo1eNh5WmOkTdgiFbeje7%2BBZX4oWyMTioi8wU5oWuTVnFZgJzqphoUOVo%2FanO%2BbI63I6duWmfDWI4kitMRYWiobdcAy58AZXCGXh8HcwYKKFBtI2YvKUoEoF%2FezkoQaMVHkmg5kzIuS15RjPvp8qKZnXVcGIE32EctI%2FinjjErW5qIR0HZVoro%2Flf9n74zM6bDPSQD5qB6IZ1fc&X-Amz-Signature=42d2c84ca82611b5efb6fd6bc98d3d25650268809dc20391ba92df8b4696d788&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXK34PP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdTce0AN2hQzSagZ3LeDeAmaS%2Bj6hT%2FBFH3pE738Yt3AiEAgX8DFsW0krmDu%2FG3nmE5%2FsA7I4hsJW2aGjnXOLB5cPEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FvAS2iAs8Klq0M5ircAws4RwRLS8sdN3GO8AN%2B%2Fr0TvN2ptBJDvGBDL28TWjRRcv5QUCOD26aKNI6ZR3gjSIj3tRA4olnP0DvpFfK9%2B%2BsXIf6ZhpKWn%2BbHZiShbeCsmOr25mqAOX3vjKmIjulDRzDC%2BKsF5I87QAso3l%2F8qD%2BG0nRW5CFs%2BZ3tizZrcYCZe44mCidIAOiUWArODxrWOJcgNMhRUsHIikNDXxMlokpXcCy0yqFbdET2a5f%2FaG%2BNt133qxxnhiHF8Z0LMeBW09tp3VNhLVmTTIM1iMGwXq6a98Rp3ScGgf786rpnYHbhtMGJzdeda14vluwcknNPc4DkjmVmOXaFgc3uYUDG%2F2ikme1M3LpWpyEHVD6fUZ2nYokzUMwNYS%2BjHv8PA%2Bj0MiOtOkBfdIXMghVTQUXyG%2Bo%2BXAcSOxBrHed%2FVnlLthcc%2FUmKgeLpFJ4mNlGQPqTBbcmXWeHfg5rwEdRUxLtMqdHrn3pFRuHJAwgt0Gpjjx45VmLkHxKWIqjSWvyvPhi34yBrdCgWGzrCljzDEEMULjrMYFONiyKuA9z5%2F3FKn87yqweoDsaH4JmjbwXlSBdEodKwzUQnD%2BCcECZvVQTOs42cud%2Byv5WSQrsvS8i5WSOb%2FMmGH60geIiu7ykoMIS067wGOqUBajefm672ZSfwBFo1eNh5WmOkTdgiFbeje7%2BBZX4oWyMTioi8wU5oWuTVnFZgJzqphoUOVo%2FanO%2BbI63I6duWmfDWI4kitMRYWiobdcAy58AZXCGXh8HcwYKKFBtI2YvKUoEoF%2FezkoQaMVHkmg5kzIuS15RjPvp8qKZnXVcGIE32EctI%2FinjjErW5qIR0HZVoro%2Flf9n74zM6bDPSQD5qB6IZ1fc&X-Amz-Signature=142c4e5fa88569fdbf2661d94af4e5021c8a484ebe41b9507dd60b1ba236abeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXK34PP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdTce0AN2hQzSagZ3LeDeAmaS%2Bj6hT%2FBFH3pE738Yt3AiEAgX8DFsW0krmDu%2FG3nmE5%2FsA7I4hsJW2aGjnXOLB5cPEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FvAS2iAs8Klq0M5ircAws4RwRLS8sdN3GO8AN%2B%2Fr0TvN2ptBJDvGBDL28TWjRRcv5QUCOD26aKNI6ZR3gjSIj3tRA4olnP0DvpFfK9%2B%2BsXIf6ZhpKWn%2BbHZiShbeCsmOr25mqAOX3vjKmIjulDRzDC%2BKsF5I87QAso3l%2F8qD%2BG0nRW5CFs%2BZ3tizZrcYCZe44mCidIAOiUWArODxrWOJcgNMhRUsHIikNDXxMlokpXcCy0yqFbdET2a5f%2FaG%2BNt133qxxnhiHF8Z0LMeBW09tp3VNhLVmTTIM1iMGwXq6a98Rp3ScGgf786rpnYHbhtMGJzdeda14vluwcknNPc4DkjmVmOXaFgc3uYUDG%2F2ikme1M3LpWpyEHVD6fUZ2nYokzUMwNYS%2BjHv8PA%2Bj0MiOtOkBfdIXMghVTQUXyG%2Bo%2BXAcSOxBrHed%2FVnlLthcc%2FUmKgeLpFJ4mNlGQPqTBbcmXWeHfg5rwEdRUxLtMqdHrn3pFRuHJAwgt0Gpjjx45VmLkHxKWIqjSWvyvPhi34yBrdCgWGzrCljzDEEMULjrMYFONiyKuA9z5%2F3FKn87yqweoDsaH4JmjbwXlSBdEodKwzUQnD%2BCcECZvVQTOs42cud%2Byv5WSQrsvS8i5WSOb%2FMmGH60geIiu7ykoMIS067wGOqUBajefm672ZSfwBFo1eNh5WmOkTdgiFbeje7%2BBZX4oWyMTioi8wU5oWuTVnFZgJzqphoUOVo%2FanO%2BbI63I6duWmfDWI4kitMRYWiobdcAy58AZXCGXh8HcwYKKFBtI2YvKUoEoF%2FezkoQaMVHkmg5kzIuS15RjPvp8qKZnXVcGIE32EctI%2FinjjErW5qIR0HZVoro%2Flf9n74zM6bDPSQD5qB6IZ1fc&X-Amz-Signature=51c2209f436673842bd2ebb6b09013a8f0f15c4ca864b6196c0977c38e530654&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXK34PP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdTce0AN2hQzSagZ3LeDeAmaS%2Bj6hT%2FBFH3pE738Yt3AiEAgX8DFsW0krmDu%2FG3nmE5%2FsA7I4hsJW2aGjnXOLB5cPEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FvAS2iAs8Klq0M5ircAws4RwRLS8sdN3GO8AN%2B%2Fr0TvN2ptBJDvGBDL28TWjRRcv5QUCOD26aKNI6ZR3gjSIj3tRA4olnP0DvpFfK9%2B%2BsXIf6ZhpKWn%2BbHZiShbeCsmOr25mqAOX3vjKmIjulDRzDC%2BKsF5I87QAso3l%2F8qD%2BG0nRW5CFs%2BZ3tizZrcYCZe44mCidIAOiUWArODxrWOJcgNMhRUsHIikNDXxMlokpXcCy0yqFbdET2a5f%2FaG%2BNt133qxxnhiHF8Z0LMeBW09tp3VNhLVmTTIM1iMGwXq6a98Rp3ScGgf786rpnYHbhtMGJzdeda14vluwcknNPc4DkjmVmOXaFgc3uYUDG%2F2ikme1M3LpWpyEHVD6fUZ2nYokzUMwNYS%2BjHv8PA%2Bj0MiOtOkBfdIXMghVTQUXyG%2Bo%2BXAcSOxBrHed%2FVnlLthcc%2FUmKgeLpFJ4mNlGQPqTBbcmXWeHfg5rwEdRUxLtMqdHrn3pFRuHJAwgt0Gpjjx45VmLkHxKWIqjSWvyvPhi34yBrdCgWGzrCljzDEEMULjrMYFONiyKuA9z5%2F3FKn87yqweoDsaH4JmjbwXlSBdEodKwzUQnD%2BCcECZvVQTOs42cud%2Byv5WSQrsvS8i5WSOb%2FMmGH60geIiu7ykoMIS067wGOqUBajefm672ZSfwBFo1eNh5WmOkTdgiFbeje7%2BBZX4oWyMTioi8wU5oWuTVnFZgJzqphoUOVo%2FanO%2BbI63I6duWmfDWI4kitMRYWiobdcAy58AZXCGXh8HcwYKKFBtI2YvKUoEoF%2FezkoQaMVHkmg5kzIuS15RjPvp8qKZnXVcGIE32EctI%2FinjjErW5qIR0HZVoro%2Flf9n74zM6bDPSQD5qB6IZ1fc&X-Amz-Signature=c509ac3be24a54b98f9f67f715f78bd29a5945d68776f253d42ce50407126d02&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
