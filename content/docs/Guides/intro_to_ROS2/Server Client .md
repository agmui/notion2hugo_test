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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLTPQHU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Knpx63tWmg8xhRkDIxNwCpCkzf9rrbL49LJI6WaMPgIhALxzv0grdVMHB%2FKbd8WjLWl4yerGmUL0nj7DhVpFW5lgKv8DCBcQABoMNjM3NDIzMTgzODA1Igz1qQbylm43zbMYG6Aq3AMF%2BYQ9057Z%2FVhB9WVi0y166QHCwyHN9JRytY7l%2BD%2B6hmm1Vo6pDF2%2BRrEVI99HjFZfZIabjEDZSLY6VxHWDwMlnG598JPYAhsi1PA108rtxzixbi9f%2FIw0D2jCIzgywHeeIbsMpOXwLkGvQi2KtRLu%2B70XHLY%2BQMASkWkNfdBq6YB8iDB%2Bw05U2pqxRUfWwmZcjDXOlyCBZ6dKTzoRzy2qWeq%2FTaN13WX03RIPItB5ZNkdMsMJN2ndygzbZRz8b9j7Pc%2FnqPAkhZrcZqiaHn9mb%2FYo5ReAmr3nDGKfDvobDTe02vzOSdH69a1y096ECquRCHPGT4an4R12CCgKaoE%2FuD7Q5zP4H%2BJHToQChiRzQDeIRa5VF%2F%2FyazgyJBCy5xUZkmwmnsRrAyP7tO9LT%2FDqkZDuaHA6usx2EX5sOxIsCziAn0WHqb%2FNYLCMBlwx2HsIMrWHs1o1FmiD5z7wX42ykLXNRUldvFhR3DHq3OOkZw%2B7Gp0cijfAVMdEGf%2BoJG5ywtVUC99Gk%2F184Wk4%2BLeamE%2FlWj1lA2GzOlqjrZPiI1jLmdnAXMNNX1tcz1atibqAHsH2i%2F2Dz7nRHW9HYdqVRAXVgr9px3cIaHwfDjyxkM%2FvH9bnyiBqOwUH%2FDDAqPS%2FBjqkAdA2iSqJjENsBKWdyxRH7NLBETLXKCBkU%2ByqRm9H1Fxa7R%2BsBW%2B0tKXCpGKaBjfX8XJKK5bgpo%2FVGCEl93VTnflWuVocsHSLlCHNxvc6L86tiiYz41pudNfmipnCrVlXFr%2BPgpiULlPAcu33fU8CouB8ii63tMXejLaI45526t%2BmX8FCrR66DnVv76qpJUpJdfi7NHKpFo2AZN%2BZyiIFeVM7PdeO&X-Amz-Signature=45a00cdc08d91aa3bc33daed01b8a69a0b7bdf77eeea8f163f5a3bc46a157278&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLTPQHU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Knpx63tWmg8xhRkDIxNwCpCkzf9rrbL49LJI6WaMPgIhALxzv0grdVMHB%2FKbd8WjLWl4yerGmUL0nj7DhVpFW5lgKv8DCBcQABoMNjM3NDIzMTgzODA1Igz1qQbylm43zbMYG6Aq3AMF%2BYQ9057Z%2FVhB9WVi0y166QHCwyHN9JRytY7l%2BD%2B6hmm1Vo6pDF2%2BRrEVI99HjFZfZIabjEDZSLY6VxHWDwMlnG598JPYAhsi1PA108rtxzixbi9f%2FIw0D2jCIzgywHeeIbsMpOXwLkGvQi2KtRLu%2B70XHLY%2BQMASkWkNfdBq6YB8iDB%2Bw05U2pqxRUfWwmZcjDXOlyCBZ6dKTzoRzy2qWeq%2FTaN13WX03RIPItB5ZNkdMsMJN2ndygzbZRz8b9j7Pc%2FnqPAkhZrcZqiaHn9mb%2FYo5ReAmr3nDGKfDvobDTe02vzOSdH69a1y096ECquRCHPGT4an4R12CCgKaoE%2FuD7Q5zP4H%2BJHToQChiRzQDeIRa5VF%2F%2FyazgyJBCy5xUZkmwmnsRrAyP7tO9LT%2FDqkZDuaHA6usx2EX5sOxIsCziAn0WHqb%2FNYLCMBlwx2HsIMrWHs1o1FmiD5z7wX42ykLXNRUldvFhR3DHq3OOkZw%2B7Gp0cijfAVMdEGf%2BoJG5ywtVUC99Gk%2F184Wk4%2BLeamE%2FlWj1lA2GzOlqjrZPiI1jLmdnAXMNNX1tcz1atibqAHsH2i%2F2Dz7nRHW9HYdqVRAXVgr9px3cIaHwfDjyxkM%2FvH9bnyiBqOwUH%2FDDAqPS%2FBjqkAdA2iSqJjENsBKWdyxRH7NLBETLXKCBkU%2ByqRm9H1Fxa7R%2BsBW%2B0tKXCpGKaBjfX8XJKK5bgpo%2FVGCEl93VTnflWuVocsHSLlCHNxvc6L86tiiYz41pudNfmipnCrVlXFr%2BPgpiULlPAcu33fU8CouB8ii63tMXejLaI45526t%2BmX8FCrR66DnVv76qpJUpJdfi7NHKpFo2AZN%2BZyiIFeVM7PdeO&X-Amz-Signature=91dfc5d489abe8edb3bd7c178bc4c79785f339ed01902e3488b44210d41570e3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLTPQHU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Knpx63tWmg8xhRkDIxNwCpCkzf9rrbL49LJI6WaMPgIhALxzv0grdVMHB%2FKbd8WjLWl4yerGmUL0nj7DhVpFW5lgKv8DCBcQABoMNjM3NDIzMTgzODA1Igz1qQbylm43zbMYG6Aq3AMF%2BYQ9057Z%2FVhB9WVi0y166QHCwyHN9JRytY7l%2BD%2B6hmm1Vo6pDF2%2BRrEVI99HjFZfZIabjEDZSLY6VxHWDwMlnG598JPYAhsi1PA108rtxzixbi9f%2FIw0D2jCIzgywHeeIbsMpOXwLkGvQi2KtRLu%2B70XHLY%2BQMASkWkNfdBq6YB8iDB%2Bw05U2pqxRUfWwmZcjDXOlyCBZ6dKTzoRzy2qWeq%2FTaN13WX03RIPItB5ZNkdMsMJN2ndygzbZRz8b9j7Pc%2FnqPAkhZrcZqiaHn9mb%2FYo5ReAmr3nDGKfDvobDTe02vzOSdH69a1y096ECquRCHPGT4an4R12CCgKaoE%2FuD7Q5zP4H%2BJHToQChiRzQDeIRa5VF%2F%2FyazgyJBCy5xUZkmwmnsRrAyP7tO9LT%2FDqkZDuaHA6usx2EX5sOxIsCziAn0WHqb%2FNYLCMBlwx2HsIMrWHs1o1FmiD5z7wX42ykLXNRUldvFhR3DHq3OOkZw%2B7Gp0cijfAVMdEGf%2BoJG5ywtVUC99Gk%2F184Wk4%2BLeamE%2FlWj1lA2GzOlqjrZPiI1jLmdnAXMNNX1tcz1atibqAHsH2i%2F2Dz7nRHW9HYdqVRAXVgr9px3cIaHwfDjyxkM%2FvH9bnyiBqOwUH%2FDDAqPS%2FBjqkAdA2iSqJjENsBKWdyxRH7NLBETLXKCBkU%2ByqRm9H1Fxa7R%2BsBW%2B0tKXCpGKaBjfX8XJKK5bgpo%2FVGCEl93VTnflWuVocsHSLlCHNxvc6L86tiiYz41pudNfmipnCrVlXFr%2BPgpiULlPAcu33fU8CouB8ii63tMXejLaI45526t%2BmX8FCrR66DnVv76qpJUpJdfi7NHKpFo2AZN%2BZyiIFeVM7PdeO&X-Amz-Signature=58ca6da2712631a8d042d685cfc5e2939464c809709a9ff29c31c398e22abfea&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLTPQHU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Knpx63tWmg8xhRkDIxNwCpCkzf9rrbL49LJI6WaMPgIhALxzv0grdVMHB%2FKbd8WjLWl4yerGmUL0nj7DhVpFW5lgKv8DCBcQABoMNjM3NDIzMTgzODA1Igz1qQbylm43zbMYG6Aq3AMF%2BYQ9057Z%2FVhB9WVi0y166QHCwyHN9JRytY7l%2BD%2B6hmm1Vo6pDF2%2BRrEVI99HjFZfZIabjEDZSLY6VxHWDwMlnG598JPYAhsi1PA108rtxzixbi9f%2FIw0D2jCIzgywHeeIbsMpOXwLkGvQi2KtRLu%2B70XHLY%2BQMASkWkNfdBq6YB8iDB%2Bw05U2pqxRUfWwmZcjDXOlyCBZ6dKTzoRzy2qWeq%2FTaN13WX03RIPItB5ZNkdMsMJN2ndygzbZRz8b9j7Pc%2FnqPAkhZrcZqiaHn9mb%2FYo5ReAmr3nDGKfDvobDTe02vzOSdH69a1y096ECquRCHPGT4an4R12CCgKaoE%2FuD7Q5zP4H%2BJHToQChiRzQDeIRa5VF%2F%2FyazgyJBCy5xUZkmwmnsRrAyP7tO9LT%2FDqkZDuaHA6usx2EX5sOxIsCziAn0WHqb%2FNYLCMBlwx2HsIMrWHs1o1FmiD5z7wX42ykLXNRUldvFhR3DHq3OOkZw%2B7Gp0cijfAVMdEGf%2BoJG5ywtVUC99Gk%2F184Wk4%2BLeamE%2FlWj1lA2GzOlqjrZPiI1jLmdnAXMNNX1tcz1atibqAHsH2i%2F2Dz7nRHW9HYdqVRAXVgr9px3cIaHwfDjyxkM%2FvH9bnyiBqOwUH%2FDDAqPS%2FBjqkAdA2iSqJjENsBKWdyxRH7NLBETLXKCBkU%2ByqRm9H1Fxa7R%2BsBW%2B0tKXCpGKaBjfX8XJKK5bgpo%2FVGCEl93VTnflWuVocsHSLlCHNxvc6L86tiiYz41pudNfmipnCrVlXFr%2BPgpiULlPAcu33fU8CouB8ii63tMXejLaI45526t%2BmX8FCrR66DnVv76qpJUpJdfi7NHKpFo2AZN%2BZyiIFeVM7PdeO&X-Amz-Signature=4a50e2054f93269306a57c79eab50333dbb32cebe360fc6fb03d0aa8734c163f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLTPQHU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Knpx63tWmg8xhRkDIxNwCpCkzf9rrbL49LJI6WaMPgIhALxzv0grdVMHB%2FKbd8WjLWl4yerGmUL0nj7DhVpFW5lgKv8DCBcQABoMNjM3NDIzMTgzODA1Igz1qQbylm43zbMYG6Aq3AMF%2BYQ9057Z%2FVhB9WVi0y166QHCwyHN9JRytY7l%2BD%2B6hmm1Vo6pDF2%2BRrEVI99HjFZfZIabjEDZSLY6VxHWDwMlnG598JPYAhsi1PA108rtxzixbi9f%2FIw0D2jCIzgywHeeIbsMpOXwLkGvQi2KtRLu%2B70XHLY%2BQMASkWkNfdBq6YB8iDB%2Bw05U2pqxRUfWwmZcjDXOlyCBZ6dKTzoRzy2qWeq%2FTaN13WX03RIPItB5ZNkdMsMJN2ndygzbZRz8b9j7Pc%2FnqPAkhZrcZqiaHn9mb%2FYo5ReAmr3nDGKfDvobDTe02vzOSdH69a1y096ECquRCHPGT4an4R12CCgKaoE%2FuD7Q5zP4H%2BJHToQChiRzQDeIRa5VF%2F%2FyazgyJBCy5xUZkmwmnsRrAyP7tO9LT%2FDqkZDuaHA6usx2EX5sOxIsCziAn0WHqb%2FNYLCMBlwx2HsIMrWHs1o1FmiD5z7wX42ykLXNRUldvFhR3DHq3OOkZw%2B7Gp0cijfAVMdEGf%2BoJG5ywtVUC99Gk%2F184Wk4%2BLeamE%2FlWj1lA2GzOlqjrZPiI1jLmdnAXMNNX1tcz1atibqAHsH2i%2F2Dz7nRHW9HYdqVRAXVgr9px3cIaHwfDjyxkM%2FvH9bnyiBqOwUH%2FDDAqPS%2FBjqkAdA2iSqJjENsBKWdyxRH7NLBETLXKCBkU%2ByqRm9H1Fxa7R%2BsBW%2B0tKXCpGKaBjfX8XJKK5bgpo%2FVGCEl93VTnflWuVocsHSLlCHNxvc6L86tiiYz41pudNfmipnCrVlXFr%2BPgpiULlPAcu33fU8CouB8ii63tMXejLaI45526t%2BmX8FCrR66DnVv76qpJUpJdfi7NHKpFo2AZN%2BZyiIFeVM7PdeO&X-Amz-Signature=d7b961e7e77fbccd996b32d5ebccc82a34b20faa8408d085c140055ba2737ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
