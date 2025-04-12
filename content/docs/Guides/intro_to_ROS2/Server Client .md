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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJLRN23%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFvCY1AkEM%2BAeRfelTK4zto5qFlwGD%2BwwwlPe2Ck9IFuAiEAwKyLl2OkNx5IPZm0HQy2bXZUPETkHKl9dK6xbQiNEykqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ1%2FS6pRaZ37aSznSrcA2Q0Bj7efdXtbqrJ43txW1tIegf6X%2B7DJ2kIg6%2FDRk8LL%2FFfEjT2Y%2FVYAQDgsYzZDNpoevnqkEVFLXv772LcGFott3zIo5vYxLBMXZCMkGEYzHLIcQR9QDLLWqnthyK3BqUZnNx9fw1%2F5r3gP5xuBw2KiKHwkP%2Byv8NMdIsnJ7hx9PrAS2VS65Wsr4a1ABL0CVzX9aOaohcCEJW1E7JjBx82FT%2F0MkHsiuiXt2DYMtdC3yNvrMb60zyQQmtQdl3eri%2F699eFu4KRCKY%2B7nniCMSvDHuX%2FpqeZmek3io6TceAo9WTRzXaxLL5v6pdwoFlvLxjfQrOiMoIT5Ah%2FvmPSBslD4etaj7A5w6M6BWBoP2WIVrhUt6NWP%2B15kqBlr8ueBh0Uy%2BgUOispWIPPdeVyunWmD%2Fz6Hn%2FsdoGXvqig7YllNK6NpoXjACQ%2B9WlCqxTwPPsU%2F6JEssxyWDTzLVs7ZJ8cGk0bYd2GjUgWOI3WFGlDKHYxDENnQC9EQFeKbfTGjl%2BWC54JXsVqX8rDmv%2BdBRqhjFZdL9f3Uv5uQRr%2FuwL5eDN1WAg5eDt10PFvgeawJ5vsFmjJMtepRGhv9rQ2s7SRvVf0nX8fNFjL3lItQcs9pi7tZ0aSZuUMzOqMJz76b8GOqUBdamvjSalxp7lan9C0IFe9hE8bYKsqBBJcbUazr6WvRhKIBVy4U1k5%2BcRMyALvwfC9ZG1EEEJHaNJYWmJBuiql3p4Bibqk7jXuzV6E53KnKeIM0Vw4nz%2B98zALd%2Ft2N9lL%2FK%2BMRE2cHs1snFYSJK0QUrfSotvdSWdPK0mE5Y95mKN762%2F%2F8oTushdUPMle2jqqBBmBT7fZ14eg5Q6zwg7qCM4ubgL&X-Amz-Signature=1f64c6f9ba8eb57d5e7aefd67ec1ac6ffd6fbcf70d950b12ad6e19250030936e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJLRN23%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFvCY1AkEM%2BAeRfelTK4zto5qFlwGD%2BwwwlPe2Ck9IFuAiEAwKyLl2OkNx5IPZm0HQy2bXZUPETkHKl9dK6xbQiNEykqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ1%2FS6pRaZ37aSznSrcA2Q0Bj7efdXtbqrJ43txW1tIegf6X%2B7DJ2kIg6%2FDRk8LL%2FFfEjT2Y%2FVYAQDgsYzZDNpoevnqkEVFLXv772LcGFott3zIo5vYxLBMXZCMkGEYzHLIcQR9QDLLWqnthyK3BqUZnNx9fw1%2F5r3gP5xuBw2KiKHwkP%2Byv8NMdIsnJ7hx9PrAS2VS65Wsr4a1ABL0CVzX9aOaohcCEJW1E7JjBx82FT%2F0MkHsiuiXt2DYMtdC3yNvrMb60zyQQmtQdl3eri%2F699eFu4KRCKY%2B7nniCMSvDHuX%2FpqeZmek3io6TceAo9WTRzXaxLL5v6pdwoFlvLxjfQrOiMoIT5Ah%2FvmPSBslD4etaj7A5w6M6BWBoP2WIVrhUt6NWP%2B15kqBlr8ueBh0Uy%2BgUOispWIPPdeVyunWmD%2Fz6Hn%2FsdoGXvqig7YllNK6NpoXjACQ%2B9WlCqxTwPPsU%2F6JEssxyWDTzLVs7ZJ8cGk0bYd2GjUgWOI3WFGlDKHYxDENnQC9EQFeKbfTGjl%2BWC54JXsVqX8rDmv%2BdBRqhjFZdL9f3Uv5uQRr%2FuwL5eDN1WAg5eDt10PFvgeawJ5vsFmjJMtepRGhv9rQ2s7SRvVf0nX8fNFjL3lItQcs9pi7tZ0aSZuUMzOqMJz76b8GOqUBdamvjSalxp7lan9C0IFe9hE8bYKsqBBJcbUazr6WvRhKIBVy4U1k5%2BcRMyALvwfC9ZG1EEEJHaNJYWmJBuiql3p4Bibqk7jXuzV6E53KnKeIM0Vw4nz%2B98zALd%2Ft2N9lL%2FK%2BMRE2cHs1snFYSJK0QUrfSotvdSWdPK0mE5Y95mKN762%2F%2F8oTushdUPMle2jqqBBmBT7fZ14eg5Q6zwg7qCM4ubgL&X-Amz-Signature=fd8030d4f08f0e69b9fb9bd6a1e6f07653f5703dd72700f325865276c3dd4c77&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJLRN23%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFvCY1AkEM%2BAeRfelTK4zto5qFlwGD%2BwwwlPe2Ck9IFuAiEAwKyLl2OkNx5IPZm0HQy2bXZUPETkHKl9dK6xbQiNEykqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ1%2FS6pRaZ37aSznSrcA2Q0Bj7efdXtbqrJ43txW1tIegf6X%2B7DJ2kIg6%2FDRk8LL%2FFfEjT2Y%2FVYAQDgsYzZDNpoevnqkEVFLXv772LcGFott3zIo5vYxLBMXZCMkGEYzHLIcQR9QDLLWqnthyK3BqUZnNx9fw1%2F5r3gP5xuBw2KiKHwkP%2Byv8NMdIsnJ7hx9PrAS2VS65Wsr4a1ABL0CVzX9aOaohcCEJW1E7JjBx82FT%2F0MkHsiuiXt2DYMtdC3yNvrMb60zyQQmtQdl3eri%2F699eFu4KRCKY%2B7nniCMSvDHuX%2FpqeZmek3io6TceAo9WTRzXaxLL5v6pdwoFlvLxjfQrOiMoIT5Ah%2FvmPSBslD4etaj7A5w6M6BWBoP2WIVrhUt6NWP%2B15kqBlr8ueBh0Uy%2BgUOispWIPPdeVyunWmD%2Fz6Hn%2FsdoGXvqig7YllNK6NpoXjACQ%2B9WlCqxTwPPsU%2F6JEssxyWDTzLVs7ZJ8cGk0bYd2GjUgWOI3WFGlDKHYxDENnQC9EQFeKbfTGjl%2BWC54JXsVqX8rDmv%2BdBRqhjFZdL9f3Uv5uQRr%2FuwL5eDN1WAg5eDt10PFvgeawJ5vsFmjJMtepRGhv9rQ2s7SRvVf0nX8fNFjL3lItQcs9pi7tZ0aSZuUMzOqMJz76b8GOqUBdamvjSalxp7lan9C0IFe9hE8bYKsqBBJcbUazr6WvRhKIBVy4U1k5%2BcRMyALvwfC9ZG1EEEJHaNJYWmJBuiql3p4Bibqk7jXuzV6E53KnKeIM0Vw4nz%2B98zALd%2Ft2N9lL%2FK%2BMRE2cHs1snFYSJK0QUrfSotvdSWdPK0mE5Y95mKN762%2F%2F8oTushdUPMle2jqqBBmBT7fZ14eg5Q6zwg7qCM4ubgL&X-Amz-Signature=0b39b5b62af25eeae051c92a985f5240d2ea91d04e19155b57c0ceb9c52a512f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJLRN23%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFvCY1AkEM%2BAeRfelTK4zto5qFlwGD%2BwwwlPe2Ck9IFuAiEAwKyLl2OkNx5IPZm0HQy2bXZUPETkHKl9dK6xbQiNEykqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ1%2FS6pRaZ37aSznSrcA2Q0Bj7efdXtbqrJ43txW1tIegf6X%2B7DJ2kIg6%2FDRk8LL%2FFfEjT2Y%2FVYAQDgsYzZDNpoevnqkEVFLXv772LcGFott3zIo5vYxLBMXZCMkGEYzHLIcQR9QDLLWqnthyK3BqUZnNx9fw1%2F5r3gP5xuBw2KiKHwkP%2Byv8NMdIsnJ7hx9PrAS2VS65Wsr4a1ABL0CVzX9aOaohcCEJW1E7JjBx82FT%2F0MkHsiuiXt2DYMtdC3yNvrMb60zyQQmtQdl3eri%2F699eFu4KRCKY%2B7nniCMSvDHuX%2FpqeZmek3io6TceAo9WTRzXaxLL5v6pdwoFlvLxjfQrOiMoIT5Ah%2FvmPSBslD4etaj7A5w6M6BWBoP2WIVrhUt6NWP%2B15kqBlr8ueBh0Uy%2BgUOispWIPPdeVyunWmD%2Fz6Hn%2FsdoGXvqig7YllNK6NpoXjACQ%2B9WlCqxTwPPsU%2F6JEssxyWDTzLVs7ZJ8cGk0bYd2GjUgWOI3WFGlDKHYxDENnQC9EQFeKbfTGjl%2BWC54JXsVqX8rDmv%2BdBRqhjFZdL9f3Uv5uQRr%2FuwL5eDN1WAg5eDt10PFvgeawJ5vsFmjJMtepRGhv9rQ2s7SRvVf0nX8fNFjL3lItQcs9pi7tZ0aSZuUMzOqMJz76b8GOqUBdamvjSalxp7lan9C0IFe9hE8bYKsqBBJcbUazr6WvRhKIBVy4U1k5%2BcRMyALvwfC9ZG1EEEJHaNJYWmJBuiql3p4Bibqk7jXuzV6E53KnKeIM0Vw4nz%2B98zALd%2Ft2N9lL%2FK%2BMRE2cHs1snFYSJK0QUrfSotvdSWdPK0mE5Y95mKN762%2F%2F8oTushdUPMle2jqqBBmBT7fZ14eg5Q6zwg7qCM4ubgL&X-Amz-Signature=a0e42c689e32f9a2b9d51b5ae471a93200c68f5fefcec41d6ebd57405af9324f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJLRN23%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFvCY1AkEM%2BAeRfelTK4zto5qFlwGD%2BwwwlPe2Ck9IFuAiEAwKyLl2OkNx5IPZm0HQy2bXZUPETkHKl9dK6xbQiNEykqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ1%2FS6pRaZ37aSznSrcA2Q0Bj7efdXtbqrJ43txW1tIegf6X%2B7DJ2kIg6%2FDRk8LL%2FFfEjT2Y%2FVYAQDgsYzZDNpoevnqkEVFLXv772LcGFott3zIo5vYxLBMXZCMkGEYzHLIcQR9QDLLWqnthyK3BqUZnNx9fw1%2F5r3gP5xuBw2KiKHwkP%2Byv8NMdIsnJ7hx9PrAS2VS65Wsr4a1ABL0CVzX9aOaohcCEJW1E7JjBx82FT%2F0MkHsiuiXt2DYMtdC3yNvrMb60zyQQmtQdl3eri%2F699eFu4KRCKY%2B7nniCMSvDHuX%2FpqeZmek3io6TceAo9WTRzXaxLL5v6pdwoFlvLxjfQrOiMoIT5Ah%2FvmPSBslD4etaj7A5w6M6BWBoP2WIVrhUt6NWP%2B15kqBlr8ueBh0Uy%2BgUOispWIPPdeVyunWmD%2Fz6Hn%2FsdoGXvqig7YllNK6NpoXjACQ%2B9WlCqxTwPPsU%2F6JEssxyWDTzLVs7ZJ8cGk0bYd2GjUgWOI3WFGlDKHYxDENnQC9EQFeKbfTGjl%2BWC54JXsVqX8rDmv%2BdBRqhjFZdL9f3Uv5uQRr%2FuwL5eDN1WAg5eDt10PFvgeawJ5vsFmjJMtepRGhv9rQ2s7SRvVf0nX8fNFjL3lItQcs9pi7tZ0aSZuUMzOqMJz76b8GOqUBdamvjSalxp7lan9C0IFe9hE8bYKsqBBJcbUazr6WvRhKIBVy4U1k5%2BcRMyALvwfC9ZG1EEEJHaNJYWmJBuiql3p4Bibqk7jXuzV6E53KnKeIM0Vw4nz%2B98zALd%2Ft2N9lL%2FK%2BMRE2cHs1snFYSJK0QUrfSotvdSWdPK0mE5Y95mKN762%2F%2F8oTushdUPMle2jqqBBmBT7fZ14eg5Q6zwg7qCM4ubgL&X-Amz-Signature=bcf205aea674c04c724bfa59f01eaafe15742f0246e39429f3af68af91199534&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
