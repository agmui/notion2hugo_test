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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUUEQ63%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCFojW3rvdXduDllcUH29FK0meCMcpLSrYFkFLtH8pBGgIhAJ2h2Qyca2NvYBahdVyJotCUtKglNzdqN24ktDQwqJZCKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1yd4ui8hAY9mQl%2Bcq3AN3RcNmrMkOTZDscC5FCeZilAqmJBnaeJxctb46kquspgXquwdL3dcfWzfm6QHxTCT%2F%2FRVnACJI8ps9aITG4QrU9qt1%2B3ynT27WcJU3Eo347E6Ex7yEf6KvU0B6EVzlrMy1qrn2NoyD1M8FxKOfIWyZe2OtxaVdTaems7x%2FbP5N3KAYV19E2EiBRPX%2BgCimK1UQw27TQ9oN83bssF405IuRQzbWA5jm6UP4IRq8CxoOWjSyP9kRtKeSRrXrXo31rAtJSOk9xEaw481w21B0K%2BKi52CCl%2B%2ByjYpP%2FKt2zzkrXSW2zZQvFjOP0ZK%2B3djYO00Ne9M9x5DOGpTd1GTs8Tre8YhrHMPz1gssjJnazXFcgMt2axg66OOats3mHxLF8d0XqfAhtH7UbrhmPVuFAoqgg5CcmuDU4zSvoXmkG05WsopA34OUwR8quEUwqRb4r%2FFguG4hMB2hr2RLnOkrmodqk5trf%2Fbb67OoiHAMq5LWKQaeWMLmaAqW5X1poavmk6wEPjrUMNhpjEQmR2Fwp0pKeu020l44h%2B1xYdmnZGm%2Bu4m5mJmWmA7Zk699maZzx4Xhp2fIUYdM5blYHgyJxm5zhC6gw5ypDaI%2F1Z%2Bc9njYxssm46VFUqg%2FIz6RfDDVw%2BK%2FBjqkASD6S9kNmh4ZMx00VegxcCjM5r3l%2B4KMroyaBefRfEoYolkxoxPMvoC1fDAK6wPGGYlq5oD%2BBSKt81kQazhYkj35bBn77OR1r4GItENrb44De%2B8c9DUK7JyK9AObbiKmbk6zbRyPPAt57WQ9JGfPzdx91Q0ocgeUR4645kC4cQQH5RbUTUPYbDIu0N72W9yxIbJ%2B8wIK8e7WS%2BCHwPaCDdoFk482&X-Amz-Signature=03c296976418e11fefa6bd662fec0f1aa631307f5d6eed7fb21c009e29fe243a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUUEQ63%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCFojW3rvdXduDllcUH29FK0meCMcpLSrYFkFLtH8pBGgIhAJ2h2Qyca2NvYBahdVyJotCUtKglNzdqN24ktDQwqJZCKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1yd4ui8hAY9mQl%2Bcq3AN3RcNmrMkOTZDscC5FCeZilAqmJBnaeJxctb46kquspgXquwdL3dcfWzfm6QHxTCT%2F%2FRVnACJI8ps9aITG4QrU9qt1%2B3ynT27WcJU3Eo347E6Ex7yEf6KvU0B6EVzlrMy1qrn2NoyD1M8FxKOfIWyZe2OtxaVdTaems7x%2FbP5N3KAYV19E2EiBRPX%2BgCimK1UQw27TQ9oN83bssF405IuRQzbWA5jm6UP4IRq8CxoOWjSyP9kRtKeSRrXrXo31rAtJSOk9xEaw481w21B0K%2BKi52CCl%2B%2ByjYpP%2FKt2zzkrXSW2zZQvFjOP0ZK%2B3djYO00Ne9M9x5DOGpTd1GTs8Tre8YhrHMPz1gssjJnazXFcgMt2axg66OOats3mHxLF8d0XqfAhtH7UbrhmPVuFAoqgg5CcmuDU4zSvoXmkG05WsopA34OUwR8quEUwqRb4r%2FFguG4hMB2hr2RLnOkrmodqk5trf%2Fbb67OoiHAMq5LWKQaeWMLmaAqW5X1poavmk6wEPjrUMNhpjEQmR2Fwp0pKeu020l44h%2B1xYdmnZGm%2Bu4m5mJmWmA7Zk699maZzx4Xhp2fIUYdM5blYHgyJxm5zhC6gw5ypDaI%2F1Z%2Bc9njYxssm46VFUqg%2FIz6RfDDVw%2BK%2FBjqkASD6S9kNmh4ZMx00VegxcCjM5r3l%2B4KMroyaBefRfEoYolkxoxPMvoC1fDAK6wPGGYlq5oD%2BBSKt81kQazhYkj35bBn77OR1r4GItENrb44De%2B8c9DUK7JyK9AObbiKmbk6zbRyPPAt57WQ9JGfPzdx91Q0ocgeUR4645kC4cQQH5RbUTUPYbDIu0N72W9yxIbJ%2B8wIK8e7WS%2BCHwPaCDdoFk482&X-Amz-Signature=dbc8a41c7482436a49a3b18c6c82814831704a021daffbd9acdb7b254ec8f8a5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUUEQ63%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCFojW3rvdXduDllcUH29FK0meCMcpLSrYFkFLtH8pBGgIhAJ2h2Qyca2NvYBahdVyJotCUtKglNzdqN24ktDQwqJZCKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1yd4ui8hAY9mQl%2Bcq3AN3RcNmrMkOTZDscC5FCeZilAqmJBnaeJxctb46kquspgXquwdL3dcfWzfm6QHxTCT%2F%2FRVnACJI8ps9aITG4QrU9qt1%2B3ynT27WcJU3Eo347E6Ex7yEf6KvU0B6EVzlrMy1qrn2NoyD1M8FxKOfIWyZe2OtxaVdTaems7x%2FbP5N3KAYV19E2EiBRPX%2BgCimK1UQw27TQ9oN83bssF405IuRQzbWA5jm6UP4IRq8CxoOWjSyP9kRtKeSRrXrXo31rAtJSOk9xEaw481w21B0K%2BKi52CCl%2B%2ByjYpP%2FKt2zzkrXSW2zZQvFjOP0ZK%2B3djYO00Ne9M9x5DOGpTd1GTs8Tre8YhrHMPz1gssjJnazXFcgMt2axg66OOats3mHxLF8d0XqfAhtH7UbrhmPVuFAoqgg5CcmuDU4zSvoXmkG05WsopA34OUwR8quEUwqRb4r%2FFguG4hMB2hr2RLnOkrmodqk5trf%2Fbb67OoiHAMq5LWKQaeWMLmaAqW5X1poavmk6wEPjrUMNhpjEQmR2Fwp0pKeu020l44h%2B1xYdmnZGm%2Bu4m5mJmWmA7Zk699maZzx4Xhp2fIUYdM5blYHgyJxm5zhC6gw5ypDaI%2F1Z%2Bc9njYxssm46VFUqg%2FIz6RfDDVw%2BK%2FBjqkASD6S9kNmh4ZMx00VegxcCjM5r3l%2B4KMroyaBefRfEoYolkxoxPMvoC1fDAK6wPGGYlq5oD%2BBSKt81kQazhYkj35bBn77OR1r4GItENrb44De%2B8c9DUK7JyK9AObbiKmbk6zbRyPPAt57WQ9JGfPzdx91Q0ocgeUR4645kC4cQQH5RbUTUPYbDIu0N72W9yxIbJ%2B8wIK8e7WS%2BCHwPaCDdoFk482&X-Amz-Signature=ecdb3a977bc4012657ee01d6d6cd21743de61fc9427d076f2d618d955a1c90a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUUEQ63%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCFojW3rvdXduDllcUH29FK0meCMcpLSrYFkFLtH8pBGgIhAJ2h2Qyca2NvYBahdVyJotCUtKglNzdqN24ktDQwqJZCKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1yd4ui8hAY9mQl%2Bcq3AN3RcNmrMkOTZDscC5FCeZilAqmJBnaeJxctb46kquspgXquwdL3dcfWzfm6QHxTCT%2F%2FRVnACJI8ps9aITG4QrU9qt1%2B3ynT27WcJU3Eo347E6Ex7yEf6KvU0B6EVzlrMy1qrn2NoyD1M8FxKOfIWyZe2OtxaVdTaems7x%2FbP5N3KAYV19E2EiBRPX%2BgCimK1UQw27TQ9oN83bssF405IuRQzbWA5jm6UP4IRq8CxoOWjSyP9kRtKeSRrXrXo31rAtJSOk9xEaw481w21B0K%2BKi52CCl%2B%2ByjYpP%2FKt2zzkrXSW2zZQvFjOP0ZK%2B3djYO00Ne9M9x5DOGpTd1GTs8Tre8YhrHMPz1gssjJnazXFcgMt2axg66OOats3mHxLF8d0XqfAhtH7UbrhmPVuFAoqgg5CcmuDU4zSvoXmkG05WsopA34OUwR8quEUwqRb4r%2FFguG4hMB2hr2RLnOkrmodqk5trf%2Fbb67OoiHAMq5LWKQaeWMLmaAqW5X1poavmk6wEPjrUMNhpjEQmR2Fwp0pKeu020l44h%2B1xYdmnZGm%2Bu4m5mJmWmA7Zk699maZzx4Xhp2fIUYdM5blYHgyJxm5zhC6gw5ypDaI%2F1Z%2Bc9njYxssm46VFUqg%2FIz6RfDDVw%2BK%2FBjqkASD6S9kNmh4ZMx00VegxcCjM5r3l%2B4KMroyaBefRfEoYolkxoxPMvoC1fDAK6wPGGYlq5oD%2BBSKt81kQazhYkj35bBn77OR1r4GItENrb44De%2B8c9DUK7JyK9AObbiKmbk6zbRyPPAt57WQ9JGfPzdx91Q0ocgeUR4645kC4cQQH5RbUTUPYbDIu0N72W9yxIbJ%2B8wIK8e7WS%2BCHwPaCDdoFk482&X-Amz-Signature=eb249e36ae1c05a6e347b4313e088ccf3d18823db84b4e7f4048f6f789381b4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUUEQ63%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCFojW3rvdXduDllcUH29FK0meCMcpLSrYFkFLtH8pBGgIhAJ2h2Qyca2NvYBahdVyJotCUtKglNzdqN24ktDQwqJZCKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1yd4ui8hAY9mQl%2Bcq3AN3RcNmrMkOTZDscC5FCeZilAqmJBnaeJxctb46kquspgXquwdL3dcfWzfm6QHxTCT%2F%2FRVnACJI8ps9aITG4QrU9qt1%2B3ynT27WcJU3Eo347E6Ex7yEf6KvU0B6EVzlrMy1qrn2NoyD1M8FxKOfIWyZe2OtxaVdTaems7x%2FbP5N3KAYV19E2EiBRPX%2BgCimK1UQw27TQ9oN83bssF405IuRQzbWA5jm6UP4IRq8CxoOWjSyP9kRtKeSRrXrXo31rAtJSOk9xEaw481w21B0K%2BKi52CCl%2B%2ByjYpP%2FKt2zzkrXSW2zZQvFjOP0ZK%2B3djYO00Ne9M9x5DOGpTd1GTs8Tre8YhrHMPz1gssjJnazXFcgMt2axg66OOats3mHxLF8d0XqfAhtH7UbrhmPVuFAoqgg5CcmuDU4zSvoXmkG05WsopA34OUwR8quEUwqRb4r%2FFguG4hMB2hr2RLnOkrmodqk5trf%2Fbb67OoiHAMq5LWKQaeWMLmaAqW5X1poavmk6wEPjrUMNhpjEQmR2Fwp0pKeu020l44h%2B1xYdmnZGm%2Bu4m5mJmWmA7Zk699maZzx4Xhp2fIUYdM5blYHgyJxm5zhC6gw5ypDaI%2F1Z%2Bc9njYxssm46VFUqg%2FIz6RfDDVw%2BK%2FBjqkASD6S9kNmh4ZMx00VegxcCjM5r3l%2B4KMroyaBefRfEoYolkxoxPMvoC1fDAK6wPGGYlq5oD%2BBSKt81kQazhYkj35bBn77OR1r4GItENrb44De%2B8c9DUK7JyK9AObbiKmbk6zbRyPPAt57WQ9JGfPzdx91Q0ocgeUR4645kC4cQQH5RbUTUPYbDIu0N72W9yxIbJ%2B8wIK8e7WS%2BCHwPaCDdoFk482&X-Amz-Signature=155652c4c2a56d3158e7ea1521a8e1ae1609cb21b8bd76860dce138acb84bf14&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
