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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDSUEPJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOr12HsGKUnNbdw7Wbh0RRX0ySggkN%2Fg2cEbhv3OUZBQIgaB0fewybIkt3OpS0jie3MxnfaQsYLPpDNgDhYfdx2Uoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAUANDzctsFjjWnUuSrcAyYMwcBdW%2BRNIvmdWPK91MV8djRDll0EXlUJSdqzTKUHrGbFP7jwXiLy%2Fqj9YePnHVHHDhP3a3ZrYL482tQLLBtNhnoSSv6a2N6lgl4bpV9CUfTgZNO5GsZtEYP93kGxRyJ18W6n0Gl%2BEc4dxnHOBDutNRPhOlKc%2FKZwVaiRDH7vEnaDQP%2FZ01rrrT669v%2FXS8VQxDijCH9Vyvxf0yL1fboE%2FNC%2BJ3RkwRLZ4jovncO27359qElV5xMnh7lnF0uuXATD59gWLsqL14fX%2BiibdUNvTmfGCK59aa2iz6YgaKXWgfpnEGcEJgyfH6NzExQLekZghg5Y4dFmf5uaNb9Vm1506ARouajENM7G%2BoPfqrJNZVNp%2Be8WU7YtGl05Aqk4jfAylhkN%2FVvxooJIgVTCzgTczk6q27KEuFhel6mdyjQJqJNhWUoMnqpwj1LhwQE3Xf3038fz2wAH6T6xGP7Gb9r95FI4HFr%2Bx9m7DPDoMlYhW%2FLujt3df2g7%2FWHMcWV2OwxcesPBYtiZuYsvZ0%2BvsvxqEFYNs6oQYqfe4zlN%2BVfstxDfg71khn%2F9%2FWb0u%2BnhrB%2FatNiSEHwWBJqndofo76gAS%2FmdSNObi5VD6AtpQF7ry3JyOoOYyefT9TF6MJvsz78GOqUB%2F3TYkbv5KPDJj9%2BdFLvkyuEzi6GeJhgXrv6y3mmijc89MaEkY7xmrb717Yj7niTu8nI5%2F9Mk6mX744cNz7LZ6PLDLSY43aRZBS9%2BxCeNyvBko8KBquxLxrYP4SH3c5XgDcd3OUUZ3kVFXvzJJTxjxvl5o28XjG9ODXDJiNEOsLWg1v3LyOOa%2B74TtJC6TCmCEUH3vkHW9sEjMyM4Ka2Z9HCnxB01&X-Amz-Signature=ed604c97715e5294bd7d71da6883e5a94014300a216e86ce415315b0c40f51c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDSUEPJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOr12HsGKUnNbdw7Wbh0RRX0ySggkN%2Fg2cEbhv3OUZBQIgaB0fewybIkt3OpS0jie3MxnfaQsYLPpDNgDhYfdx2Uoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAUANDzctsFjjWnUuSrcAyYMwcBdW%2BRNIvmdWPK91MV8djRDll0EXlUJSdqzTKUHrGbFP7jwXiLy%2Fqj9YePnHVHHDhP3a3ZrYL482tQLLBtNhnoSSv6a2N6lgl4bpV9CUfTgZNO5GsZtEYP93kGxRyJ18W6n0Gl%2BEc4dxnHOBDutNRPhOlKc%2FKZwVaiRDH7vEnaDQP%2FZ01rrrT669v%2FXS8VQxDijCH9Vyvxf0yL1fboE%2FNC%2BJ3RkwRLZ4jovncO27359qElV5xMnh7lnF0uuXATD59gWLsqL14fX%2BiibdUNvTmfGCK59aa2iz6YgaKXWgfpnEGcEJgyfH6NzExQLekZghg5Y4dFmf5uaNb9Vm1506ARouajENM7G%2BoPfqrJNZVNp%2Be8WU7YtGl05Aqk4jfAylhkN%2FVvxooJIgVTCzgTczk6q27KEuFhel6mdyjQJqJNhWUoMnqpwj1LhwQE3Xf3038fz2wAH6T6xGP7Gb9r95FI4HFr%2Bx9m7DPDoMlYhW%2FLujt3df2g7%2FWHMcWV2OwxcesPBYtiZuYsvZ0%2BvsvxqEFYNs6oQYqfe4zlN%2BVfstxDfg71khn%2F9%2FWb0u%2BnhrB%2FatNiSEHwWBJqndofo76gAS%2FmdSNObi5VD6AtpQF7ry3JyOoOYyefT9TF6MJvsz78GOqUB%2F3TYkbv5KPDJj9%2BdFLvkyuEzi6GeJhgXrv6y3mmijc89MaEkY7xmrb717Yj7niTu8nI5%2F9Mk6mX744cNz7LZ6PLDLSY43aRZBS9%2BxCeNyvBko8KBquxLxrYP4SH3c5XgDcd3OUUZ3kVFXvzJJTxjxvl5o28XjG9ODXDJiNEOsLWg1v3LyOOa%2B74TtJC6TCmCEUH3vkHW9sEjMyM4Ka2Z9HCnxB01&X-Amz-Signature=0676b09607162bf399ae6439d552d54ef3391bd3d18d0ed9433d50cee1d1fb06&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDSUEPJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOr12HsGKUnNbdw7Wbh0RRX0ySggkN%2Fg2cEbhv3OUZBQIgaB0fewybIkt3OpS0jie3MxnfaQsYLPpDNgDhYfdx2Uoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAUANDzctsFjjWnUuSrcAyYMwcBdW%2BRNIvmdWPK91MV8djRDll0EXlUJSdqzTKUHrGbFP7jwXiLy%2Fqj9YePnHVHHDhP3a3ZrYL482tQLLBtNhnoSSv6a2N6lgl4bpV9CUfTgZNO5GsZtEYP93kGxRyJ18W6n0Gl%2BEc4dxnHOBDutNRPhOlKc%2FKZwVaiRDH7vEnaDQP%2FZ01rrrT669v%2FXS8VQxDijCH9Vyvxf0yL1fboE%2FNC%2BJ3RkwRLZ4jovncO27359qElV5xMnh7lnF0uuXATD59gWLsqL14fX%2BiibdUNvTmfGCK59aa2iz6YgaKXWgfpnEGcEJgyfH6NzExQLekZghg5Y4dFmf5uaNb9Vm1506ARouajENM7G%2BoPfqrJNZVNp%2Be8WU7YtGl05Aqk4jfAylhkN%2FVvxooJIgVTCzgTczk6q27KEuFhel6mdyjQJqJNhWUoMnqpwj1LhwQE3Xf3038fz2wAH6T6xGP7Gb9r95FI4HFr%2Bx9m7DPDoMlYhW%2FLujt3df2g7%2FWHMcWV2OwxcesPBYtiZuYsvZ0%2BvsvxqEFYNs6oQYqfe4zlN%2BVfstxDfg71khn%2F9%2FWb0u%2BnhrB%2FatNiSEHwWBJqndofo76gAS%2FmdSNObi5VD6AtpQF7ry3JyOoOYyefT9TF6MJvsz78GOqUB%2F3TYkbv5KPDJj9%2BdFLvkyuEzi6GeJhgXrv6y3mmijc89MaEkY7xmrb717Yj7niTu8nI5%2F9Mk6mX744cNz7LZ6PLDLSY43aRZBS9%2BxCeNyvBko8KBquxLxrYP4SH3c5XgDcd3OUUZ3kVFXvzJJTxjxvl5o28XjG9ODXDJiNEOsLWg1v3LyOOa%2B74TtJC6TCmCEUH3vkHW9sEjMyM4Ka2Z9HCnxB01&X-Amz-Signature=832c4e0f536f725b78216e7e2fa9fb05136642e7db9b185ac79f31764191cb5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDSUEPJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOr12HsGKUnNbdw7Wbh0RRX0ySggkN%2Fg2cEbhv3OUZBQIgaB0fewybIkt3OpS0jie3MxnfaQsYLPpDNgDhYfdx2Uoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAUANDzctsFjjWnUuSrcAyYMwcBdW%2BRNIvmdWPK91MV8djRDll0EXlUJSdqzTKUHrGbFP7jwXiLy%2Fqj9YePnHVHHDhP3a3ZrYL482tQLLBtNhnoSSv6a2N6lgl4bpV9CUfTgZNO5GsZtEYP93kGxRyJ18W6n0Gl%2BEc4dxnHOBDutNRPhOlKc%2FKZwVaiRDH7vEnaDQP%2FZ01rrrT669v%2FXS8VQxDijCH9Vyvxf0yL1fboE%2FNC%2BJ3RkwRLZ4jovncO27359qElV5xMnh7lnF0uuXATD59gWLsqL14fX%2BiibdUNvTmfGCK59aa2iz6YgaKXWgfpnEGcEJgyfH6NzExQLekZghg5Y4dFmf5uaNb9Vm1506ARouajENM7G%2BoPfqrJNZVNp%2Be8WU7YtGl05Aqk4jfAylhkN%2FVvxooJIgVTCzgTczk6q27KEuFhel6mdyjQJqJNhWUoMnqpwj1LhwQE3Xf3038fz2wAH6T6xGP7Gb9r95FI4HFr%2Bx9m7DPDoMlYhW%2FLujt3df2g7%2FWHMcWV2OwxcesPBYtiZuYsvZ0%2BvsvxqEFYNs6oQYqfe4zlN%2BVfstxDfg71khn%2F9%2FWb0u%2BnhrB%2FatNiSEHwWBJqndofo76gAS%2FmdSNObi5VD6AtpQF7ry3JyOoOYyefT9TF6MJvsz78GOqUB%2F3TYkbv5KPDJj9%2BdFLvkyuEzi6GeJhgXrv6y3mmijc89MaEkY7xmrb717Yj7niTu8nI5%2F9Mk6mX744cNz7LZ6PLDLSY43aRZBS9%2BxCeNyvBko8KBquxLxrYP4SH3c5XgDcd3OUUZ3kVFXvzJJTxjxvl5o28XjG9ODXDJiNEOsLWg1v3LyOOa%2B74TtJC6TCmCEUH3vkHW9sEjMyM4Ka2Z9HCnxB01&X-Amz-Signature=238aae729f0570dfbc4710614e9a662d83cc3ffd1ae7605933bf9d4304adb7ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDSUEPJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOr12HsGKUnNbdw7Wbh0RRX0ySggkN%2Fg2cEbhv3OUZBQIgaB0fewybIkt3OpS0jie3MxnfaQsYLPpDNgDhYfdx2Uoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAUANDzctsFjjWnUuSrcAyYMwcBdW%2BRNIvmdWPK91MV8djRDll0EXlUJSdqzTKUHrGbFP7jwXiLy%2Fqj9YePnHVHHDhP3a3ZrYL482tQLLBtNhnoSSv6a2N6lgl4bpV9CUfTgZNO5GsZtEYP93kGxRyJ18W6n0Gl%2BEc4dxnHOBDutNRPhOlKc%2FKZwVaiRDH7vEnaDQP%2FZ01rrrT669v%2FXS8VQxDijCH9Vyvxf0yL1fboE%2FNC%2BJ3RkwRLZ4jovncO27359qElV5xMnh7lnF0uuXATD59gWLsqL14fX%2BiibdUNvTmfGCK59aa2iz6YgaKXWgfpnEGcEJgyfH6NzExQLekZghg5Y4dFmf5uaNb9Vm1506ARouajENM7G%2BoPfqrJNZVNp%2Be8WU7YtGl05Aqk4jfAylhkN%2FVvxooJIgVTCzgTczk6q27KEuFhel6mdyjQJqJNhWUoMnqpwj1LhwQE3Xf3038fz2wAH6T6xGP7Gb9r95FI4HFr%2Bx9m7DPDoMlYhW%2FLujt3df2g7%2FWHMcWV2OwxcesPBYtiZuYsvZ0%2BvsvxqEFYNs6oQYqfe4zlN%2BVfstxDfg71khn%2F9%2FWb0u%2BnhrB%2FatNiSEHwWBJqndofo76gAS%2FmdSNObi5VD6AtpQF7ry3JyOoOYyefT9TF6MJvsz78GOqUB%2F3TYkbv5KPDJj9%2BdFLvkyuEzi6GeJhgXrv6y3mmijc89MaEkY7xmrb717Yj7niTu8nI5%2F9Mk6mX744cNz7LZ6PLDLSY43aRZBS9%2BxCeNyvBko8KBquxLxrYP4SH3c5XgDcd3OUUZ3kVFXvzJJTxjxvl5o28XjG9ODXDJiNEOsLWg1v3LyOOa%2B74TtJC6TCmCEUH3vkHW9sEjMyM4Ka2Z9HCnxB01&X-Amz-Signature=bd947536e8c250cdb5183427d785b15ec886d8ea4919646b6202c1992091337f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
