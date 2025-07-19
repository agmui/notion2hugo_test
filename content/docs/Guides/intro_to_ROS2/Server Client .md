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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWNY6QE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDf1qli9JJwJqPW%2BIFlWyb44pPzNrSqQe6WrPmxQwQnAiEApJsoUbPOPKuudsQyIEXUezydldRDIilaSK2Ykj88P0AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPqzHRAln3nmp437yrcAxbd0hrhXZEPO6B%2BQ9v0TSKfsTBzIdUhD6aEzifvl1fAXUb4S0IbOrsiihE9wWPVNT0R3D%2FOoOmoZkrrVS7bJSeLb2Tw8xfX6g95KWYdmufgc1kAtUmCgs6goZ%2FR4iHEDurK9%2FaCV4OkwRkHPDswuiUsP0n3LgmHvWxV4aaE7nHqxstbXOvncNqDf06i4acbdvZVXIsNSuBr%2BM6ERpVnVb1KGGm4Rc0vO0Ln8ZYgWhfxfdfDxOMUeH8wERtzig3HQ3c5bLGcAWU0Bd7xwYFI9BRAgEt1Bs1tPEJZ47e%2BGlTzsuF9gr9Ibv3cXNk7%2F5fI4y7TbUWh5JHwuAfquDprtN5wY3fbaZ4dOVJXk3jlfCVplRoy1BpK2Ep56yOjpceEaiomcFRnwjdjLNliihPyyZptturPTJC9AavVYqxMXm8LuHrOUrWzwP98pkur4k%2FgjUiacZky23tSvK7uzocGZGed0IJ%2F%2BMtNmgX%2Fb54LiFe8iC5YxXsXrGuCTC4hQLVYx5ClMd4tF5waDzyMJMfeEN%2Fw5LhqG7PAD8ZkBavTr1T4LLak0gYQFQCaYXF58L2NH0pqMMe9oXOW3so4sTnfmQy4hlgj0rHOKoM8%2B9D9VQuYrEQpHOUPRGozPz94MI7278MGOqUBLr%2FXTUjCSdk%2Bv7kxxhvUHF3awQZwSHqnodT3f7Qo4rjMYIybSG4nz1nt25FhDRI%2BnP3Nw47ojiwvmTY8bvC9triqJfT0DH8pXHxmi9oSg5Lb2JOBacwwcprbudh0SfrK8bm0YOYA4C9k%2BxQ%2FpynFczF0R3QcwHk%2BIVZdUGIeDOlM25WUhl5UJe1SKMJnK6Om9QlVomiJ8VnNk3wSeNR0orknXWE7&X-Amz-Signature=fea73c970a9a588059c728edb3041971c62e76a1356c1a1a6378f5c8186cfae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWNY6QE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDf1qli9JJwJqPW%2BIFlWyb44pPzNrSqQe6WrPmxQwQnAiEApJsoUbPOPKuudsQyIEXUezydldRDIilaSK2Ykj88P0AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPqzHRAln3nmp437yrcAxbd0hrhXZEPO6B%2BQ9v0TSKfsTBzIdUhD6aEzifvl1fAXUb4S0IbOrsiihE9wWPVNT0R3D%2FOoOmoZkrrVS7bJSeLb2Tw8xfX6g95KWYdmufgc1kAtUmCgs6goZ%2FR4iHEDurK9%2FaCV4OkwRkHPDswuiUsP0n3LgmHvWxV4aaE7nHqxstbXOvncNqDf06i4acbdvZVXIsNSuBr%2BM6ERpVnVb1KGGm4Rc0vO0Ln8ZYgWhfxfdfDxOMUeH8wERtzig3HQ3c5bLGcAWU0Bd7xwYFI9BRAgEt1Bs1tPEJZ47e%2BGlTzsuF9gr9Ibv3cXNk7%2F5fI4y7TbUWh5JHwuAfquDprtN5wY3fbaZ4dOVJXk3jlfCVplRoy1BpK2Ep56yOjpceEaiomcFRnwjdjLNliihPyyZptturPTJC9AavVYqxMXm8LuHrOUrWzwP98pkur4k%2FgjUiacZky23tSvK7uzocGZGed0IJ%2F%2BMtNmgX%2Fb54LiFe8iC5YxXsXrGuCTC4hQLVYx5ClMd4tF5waDzyMJMfeEN%2Fw5LhqG7PAD8ZkBavTr1T4LLak0gYQFQCaYXF58L2NH0pqMMe9oXOW3so4sTnfmQy4hlgj0rHOKoM8%2B9D9VQuYrEQpHOUPRGozPz94MI7278MGOqUBLr%2FXTUjCSdk%2Bv7kxxhvUHF3awQZwSHqnodT3f7Qo4rjMYIybSG4nz1nt25FhDRI%2BnP3Nw47ojiwvmTY8bvC9triqJfT0DH8pXHxmi9oSg5Lb2JOBacwwcprbudh0SfrK8bm0YOYA4C9k%2BxQ%2FpynFczF0R3QcwHk%2BIVZdUGIeDOlM25WUhl5UJe1SKMJnK6Om9QlVomiJ8VnNk3wSeNR0orknXWE7&X-Amz-Signature=02461aae58b3fb1e3695c5f4316c8cef3f59bfc2995f8caa37687ef93670f5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWNY6QE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDf1qli9JJwJqPW%2BIFlWyb44pPzNrSqQe6WrPmxQwQnAiEApJsoUbPOPKuudsQyIEXUezydldRDIilaSK2Ykj88P0AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPqzHRAln3nmp437yrcAxbd0hrhXZEPO6B%2BQ9v0TSKfsTBzIdUhD6aEzifvl1fAXUb4S0IbOrsiihE9wWPVNT0R3D%2FOoOmoZkrrVS7bJSeLb2Tw8xfX6g95KWYdmufgc1kAtUmCgs6goZ%2FR4iHEDurK9%2FaCV4OkwRkHPDswuiUsP0n3LgmHvWxV4aaE7nHqxstbXOvncNqDf06i4acbdvZVXIsNSuBr%2BM6ERpVnVb1KGGm4Rc0vO0Ln8ZYgWhfxfdfDxOMUeH8wERtzig3HQ3c5bLGcAWU0Bd7xwYFI9BRAgEt1Bs1tPEJZ47e%2BGlTzsuF9gr9Ibv3cXNk7%2F5fI4y7TbUWh5JHwuAfquDprtN5wY3fbaZ4dOVJXk3jlfCVplRoy1BpK2Ep56yOjpceEaiomcFRnwjdjLNliihPyyZptturPTJC9AavVYqxMXm8LuHrOUrWzwP98pkur4k%2FgjUiacZky23tSvK7uzocGZGed0IJ%2F%2BMtNmgX%2Fb54LiFe8iC5YxXsXrGuCTC4hQLVYx5ClMd4tF5waDzyMJMfeEN%2Fw5LhqG7PAD8ZkBavTr1T4LLak0gYQFQCaYXF58L2NH0pqMMe9oXOW3so4sTnfmQy4hlgj0rHOKoM8%2B9D9VQuYrEQpHOUPRGozPz94MI7278MGOqUBLr%2FXTUjCSdk%2Bv7kxxhvUHF3awQZwSHqnodT3f7Qo4rjMYIybSG4nz1nt25FhDRI%2BnP3Nw47ojiwvmTY8bvC9triqJfT0DH8pXHxmi9oSg5Lb2JOBacwwcprbudh0SfrK8bm0YOYA4C9k%2BxQ%2FpynFczF0R3QcwHk%2BIVZdUGIeDOlM25WUhl5UJe1SKMJnK6Om9QlVomiJ8VnNk3wSeNR0orknXWE7&X-Amz-Signature=bce8dc6ca13afb79d1a2f9432006847e7a13b2c9d185c80e4008de33d9d7163d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWNY6QE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDf1qli9JJwJqPW%2BIFlWyb44pPzNrSqQe6WrPmxQwQnAiEApJsoUbPOPKuudsQyIEXUezydldRDIilaSK2Ykj88P0AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPqzHRAln3nmp437yrcAxbd0hrhXZEPO6B%2BQ9v0TSKfsTBzIdUhD6aEzifvl1fAXUb4S0IbOrsiihE9wWPVNT0R3D%2FOoOmoZkrrVS7bJSeLb2Tw8xfX6g95KWYdmufgc1kAtUmCgs6goZ%2FR4iHEDurK9%2FaCV4OkwRkHPDswuiUsP0n3LgmHvWxV4aaE7nHqxstbXOvncNqDf06i4acbdvZVXIsNSuBr%2BM6ERpVnVb1KGGm4Rc0vO0Ln8ZYgWhfxfdfDxOMUeH8wERtzig3HQ3c5bLGcAWU0Bd7xwYFI9BRAgEt1Bs1tPEJZ47e%2BGlTzsuF9gr9Ibv3cXNk7%2F5fI4y7TbUWh5JHwuAfquDprtN5wY3fbaZ4dOVJXk3jlfCVplRoy1BpK2Ep56yOjpceEaiomcFRnwjdjLNliihPyyZptturPTJC9AavVYqxMXm8LuHrOUrWzwP98pkur4k%2FgjUiacZky23tSvK7uzocGZGed0IJ%2F%2BMtNmgX%2Fb54LiFe8iC5YxXsXrGuCTC4hQLVYx5ClMd4tF5waDzyMJMfeEN%2Fw5LhqG7PAD8ZkBavTr1T4LLak0gYQFQCaYXF58L2NH0pqMMe9oXOW3so4sTnfmQy4hlgj0rHOKoM8%2B9D9VQuYrEQpHOUPRGozPz94MI7278MGOqUBLr%2FXTUjCSdk%2Bv7kxxhvUHF3awQZwSHqnodT3f7Qo4rjMYIybSG4nz1nt25FhDRI%2BnP3Nw47ojiwvmTY8bvC9triqJfT0DH8pXHxmi9oSg5Lb2JOBacwwcprbudh0SfrK8bm0YOYA4C9k%2BxQ%2FpynFczF0R3QcwHk%2BIVZdUGIeDOlM25WUhl5UJe1SKMJnK6Om9QlVomiJ8VnNk3wSeNR0orknXWE7&X-Amz-Signature=c33003009bf7b2c4bc2595fffbeca4c89ed5a392b77b3ff203fb7e4eda730931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWNY6QE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDf1qli9JJwJqPW%2BIFlWyb44pPzNrSqQe6WrPmxQwQnAiEApJsoUbPOPKuudsQyIEXUezydldRDIilaSK2Ykj88P0AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPqzHRAln3nmp437yrcAxbd0hrhXZEPO6B%2BQ9v0TSKfsTBzIdUhD6aEzifvl1fAXUb4S0IbOrsiihE9wWPVNT0R3D%2FOoOmoZkrrVS7bJSeLb2Tw8xfX6g95KWYdmufgc1kAtUmCgs6goZ%2FR4iHEDurK9%2FaCV4OkwRkHPDswuiUsP0n3LgmHvWxV4aaE7nHqxstbXOvncNqDf06i4acbdvZVXIsNSuBr%2BM6ERpVnVb1KGGm4Rc0vO0Ln8ZYgWhfxfdfDxOMUeH8wERtzig3HQ3c5bLGcAWU0Bd7xwYFI9BRAgEt1Bs1tPEJZ47e%2BGlTzsuF9gr9Ibv3cXNk7%2F5fI4y7TbUWh5JHwuAfquDprtN5wY3fbaZ4dOVJXk3jlfCVplRoy1BpK2Ep56yOjpceEaiomcFRnwjdjLNliihPyyZptturPTJC9AavVYqxMXm8LuHrOUrWzwP98pkur4k%2FgjUiacZky23tSvK7uzocGZGed0IJ%2F%2BMtNmgX%2Fb54LiFe8iC5YxXsXrGuCTC4hQLVYx5ClMd4tF5waDzyMJMfeEN%2Fw5LhqG7PAD8ZkBavTr1T4LLak0gYQFQCaYXF58L2NH0pqMMe9oXOW3so4sTnfmQy4hlgj0rHOKoM8%2B9D9VQuYrEQpHOUPRGozPz94MI7278MGOqUBLr%2FXTUjCSdk%2Bv7kxxhvUHF3awQZwSHqnodT3f7Qo4rjMYIybSG4nz1nt25FhDRI%2BnP3Nw47ojiwvmTY8bvC9triqJfT0DH8pXHxmi9oSg5Lb2JOBacwwcprbudh0SfrK8bm0YOYA4C9k%2BxQ%2FpynFczF0R3QcwHk%2BIVZdUGIeDOlM25WUhl5UJe1SKMJnK6Om9QlVomiJ8VnNk3wSeNR0orknXWE7&X-Amz-Signature=e67ff41242b984e34ac826be3ea14cccc4fec537ec434bf8dd9a4d6ed529ed08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
