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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MFMLS5J%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYyCZGkwQx0RGuS0ZhfCpUbgCuP4Y2osruS%2Fi5ffAoyAiEA%2Fz9K8wM0DaIDhpSwIcufgbWhZQ630kNiv9a7I4OlZ%2BwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxDb0KIbxzrZ0U9HircAyYSsZQdPf%2F2z%2F7NKILHCuXZOamsdAuzD9Fqgql1pWmia3d3FxzOtdZAwMOhLcDK2oNbVpvHeR9Cwbu4gFLCYk%2BN5SZwPc8uGHBVbBqU2ek5AmCsedFDYspCkxOxk%2FvhPU8wjWErwh3mkwEjyVb6qWxoqYa27OLmCeIqHDFdv7W6OUu5hlRT4qzh%2BmrujI5JPHVDBxVuWOVwgug36cqNgtiQ99qng8IqvnNSByJ2NBkUQMDJPgdctFzYbg4xvxTER%2FHhTg36TV%2BisZ5C4p1VAgcG2ulHtyBIaouBcNS8sm899KF73sop%2FWBc5Ojl%2FBd7t5NdV7U2jslbxFhIFzIWSTR3UHUMOZ0MD2OUZKy%2FePYbjPna3vOwyxTzQopYQq2HlZ0kxEUBB%2FeLM9ijGCIHEEHtx22FAzo6dvFnUQuS7OcTUApbS4Dsa0yDm9NNkrGqbCBJ19eCX16cEu7G237ScRIywsxrhHnnUbM0dNKb9d3276QWH6wZngnZhO48G5fRAqhehl0DTmJTwdWehZKgtuCC6l39NPv8IpGnsd5F8%2BXo5cl3bHGM1ibq94DvqZX4h%2Bese8F7D9ZM5qO66ty5NdBMazl4Zo%2B9KvgCDXG72x0b%2FgWkUHE9NlqE8reXMMuP%2FMAGOqUBJHC0jQmmUK3E8Q0V0Ld%2Bt7eX3PISuge0BwS6zBvp9UURh4FNykdiOlqdDlttFfFV74bTYXKDTxkbcybpZ%2F2%2BjNiQTkY7UbPfc0kbD21UrXkErhYquaU5MhtWwf75fm48xl8oR2sJ91FwB5WHjlYL0MMGSFc3Pr9%2BXFbeiUzbGqzT8VGO1Njo9t1UlgtDoAwaaltX9K5Flg%2FOYqyt%2Flor0ZURCIsR&X-Amz-Signature=ea302ca93e4f4e5be66075bf31d1e248b6c1684b1c450a8e24f4883f2d6427c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MFMLS5J%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYyCZGkwQx0RGuS0ZhfCpUbgCuP4Y2osruS%2Fi5ffAoyAiEA%2Fz9K8wM0DaIDhpSwIcufgbWhZQ630kNiv9a7I4OlZ%2BwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxDb0KIbxzrZ0U9HircAyYSsZQdPf%2F2z%2F7NKILHCuXZOamsdAuzD9Fqgql1pWmia3d3FxzOtdZAwMOhLcDK2oNbVpvHeR9Cwbu4gFLCYk%2BN5SZwPc8uGHBVbBqU2ek5AmCsedFDYspCkxOxk%2FvhPU8wjWErwh3mkwEjyVb6qWxoqYa27OLmCeIqHDFdv7W6OUu5hlRT4qzh%2BmrujI5JPHVDBxVuWOVwgug36cqNgtiQ99qng8IqvnNSByJ2NBkUQMDJPgdctFzYbg4xvxTER%2FHhTg36TV%2BisZ5C4p1VAgcG2ulHtyBIaouBcNS8sm899KF73sop%2FWBc5Ojl%2FBd7t5NdV7U2jslbxFhIFzIWSTR3UHUMOZ0MD2OUZKy%2FePYbjPna3vOwyxTzQopYQq2HlZ0kxEUBB%2FeLM9ijGCIHEEHtx22FAzo6dvFnUQuS7OcTUApbS4Dsa0yDm9NNkrGqbCBJ19eCX16cEu7G237ScRIywsxrhHnnUbM0dNKb9d3276QWH6wZngnZhO48G5fRAqhehl0DTmJTwdWehZKgtuCC6l39NPv8IpGnsd5F8%2BXo5cl3bHGM1ibq94DvqZX4h%2Bese8F7D9ZM5qO66ty5NdBMazl4Zo%2B9KvgCDXG72x0b%2FgWkUHE9NlqE8reXMMuP%2FMAGOqUBJHC0jQmmUK3E8Q0V0Ld%2Bt7eX3PISuge0BwS6zBvp9UURh4FNykdiOlqdDlttFfFV74bTYXKDTxkbcybpZ%2F2%2BjNiQTkY7UbPfc0kbD21UrXkErhYquaU5MhtWwf75fm48xl8oR2sJ91FwB5WHjlYL0MMGSFc3Pr9%2BXFbeiUzbGqzT8VGO1Njo9t1UlgtDoAwaaltX9K5Flg%2FOYqyt%2Flor0ZURCIsR&X-Amz-Signature=92defb48723dbceeee3a8301d9c1d79e6136ba2f97fee69949c8d3c04c2cc406&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MFMLS5J%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYyCZGkwQx0RGuS0ZhfCpUbgCuP4Y2osruS%2Fi5ffAoyAiEA%2Fz9K8wM0DaIDhpSwIcufgbWhZQ630kNiv9a7I4OlZ%2BwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxDb0KIbxzrZ0U9HircAyYSsZQdPf%2F2z%2F7NKILHCuXZOamsdAuzD9Fqgql1pWmia3d3FxzOtdZAwMOhLcDK2oNbVpvHeR9Cwbu4gFLCYk%2BN5SZwPc8uGHBVbBqU2ek5AmCsedFDYspCkxOxk%2FvhPU8wjWErwh3mkwEjyVb6qWxoqYa27OLmCeIqHDFdv7W6OUu5hlRT4qzh%2BmrujI5JPHVDBxVuWOVwgug36cqNgtiQ99qng8IqvnNSByJ2NBkUQMDJPgdctFzYbg4xvxTER%2FHhTg36TV%2BisZ5C4p1VAgcG2ulHtyBIaouBcNS8sm899KF73sop%2FWBc5Ojl%2FBd7t5NdV7U2jslbxFhIFzIWSTR3UHUMOZ0MD2OUZKy%2FePYbjPna3vOwyxTzQopYQq2HlZ0kxEUBB%2FeLM9ijGCIHEEHtx22FAzo6dvFnUQuS7OcTUApbS4Dsa0yDm9NNkrGqbCBJ19eCX16cEu7G237ScRIywsxrhHnnUbM0dNKb9d3276QWH6wZngnZhO48G5fRAqhehl0DTmJTwdWehZKgtuCC6l39NPv8IpGnsd5F8%2BXo5cl3bHGM1ibq94DvqZX4h%2Bese8F7D9ZM5qO66ty5NdBMazl4Zo%2B9KvgCDXG72x0b%2FgWkUHE9NlqE8reXMMuP%2FMAGOqUBJHC0jQmmUK3E8Q0V0Ld%2Bt7eX3PISuge0BwS6zBvp9UURh4FNykdiOlqdDlttFfFV74bTYXKDTxkbcybpZ%2F2%2BjNiQTkY7UbPfc0kbD21UrXkErhYquaU5MhtWwf75fm48xl8oR2sJ91FwB5WHjlYL0MMGSFc3Pr9%2BXFbeiUzbGqzT8VGO1Njo9t1UlgtDoAwaaltX9K5Flg%2FOYqyt%2Flor0ZURCIsR&X-Amz-Signature=3065f3dd867d63305ce2fc4bff35824dc7230feefa6069a2c3499d2e8dd38d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MFMLS5J%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYyCZGkwQx0RGuS0ZhfCpUbgCuP4Y2osruS%2Fi5ffAoyAiEA%2Fz9K8wM0DaIDhpSwIcufgbWhZQ630kNiv9a7I4OlZ%2BwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxDb0KIbxzrZ0U9HircAyYSsZQdPf%2F2z%2F7NKILHCuXZOamsdAuzD9Fqgql1pWmia3d3FxzOtdZAwMOhLcDK2oNbVpvHeR9Cwbu4gFLCYk%2BN5SZwPc8uGHBVbBqU2ek5AmCsedFDYspCkxOxk%2FvhPU8wjWErwh3mkwEjyVb6qWxoqYa27OLmCeIqHDFdv7W6OUu5hlRT4qzh%2BmrujI5JPHVDBxVuWOVwgug36cqNgtiQ99qng8IqvnNSByJ2NBkUQMDJPgdctFzYbg4xvxTER%2FHhTg36TV%2BisZ5C4p1VAgcG2ulHtyBIaouBcNS8sm899KF73sop%2FWBc5Ojl%2FBd7t5NdV7U2jslbxFhIFzIWSTR3UHUMOZ0MD2OUZKy%2FePYbjPna3vOwyxTzQopYQq2HlZ0kxEUBB%2FeLM9ijGCIHEEHtx22FAzo6dvFnUQuS7OcTUApbS4Dsa0yDm9NNkrGqbCBJ19eCX16cEu7G237ScRIywsxrhHnnUbM0dNKb9d3276QWH6wZngnZhO48G5fRAqhehl0DTmJTwdWehZKgtuCC6l39NPv8IpGnsd5F8%2BXo5cl3bHGM1ibq94DvqZX4h%2Bese8F7D9ZM5qO66ty5NdBMazl4Zo%2B9KvgCDXG72x0b%2FgWkUHE9NlqE8reXMMuP%2FMAGOqUBJHC0jQmmUK3E8Q0V0Ld%2Bt7eX3PISuge0BwS6zBvp9UURh4FNykdiOlqdDlttFfFV74bTYXKDTxkbcybpZ%2F2%2BjNiQTkY7UbPfc0kbD21UrXkErhYquaU5MhtWwf75fm48xl8oR2sJ91FwB5WHjlYL0MMGSFc3Pr9%2BXFbeiUzbGqzT8VGO1Njo9t1UlgtDoAwaaltX9K5Flg%2FOYqyt%2Flor0ZURCIsR&X-Amz-Signature=af2f3e676f5c798df8feaa7c84c0a2ca388fe645a32086e733da0788489efcbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MFMLS5J%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYyCZGkwQx0RGuS0ZhfCpUbgCuP4Y2osruS%2Fi5ffAoyAiEA%2Fz9K8wM0DaIDhpSwIcufgbWhZQ630kNiv9a7I4OlZ%2BwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxDb0KIbxzrZ0U9HircAyYSsZQdPf%2F2z%2F7NKILHCuXZOamsdAuzD9Fqgql1pWmia3d3FxzOtdZAwMOhLcDK2oNbVpvHeR9Cwbu4gFLCYk%2BN5SZwPc8uGHBVbBqU2ek5AmCsedFDYspCkxOxk%2FvhPU8wjWErwh3mkwEjyVb6qWxoqYa27OLmCeIqHDFdv7W6OUu5hlRT4qzh%2BmrujI5JPHVDBxVuWOVwgug36cqNgtiQ99qng8IqvnNSByJ2NBkUQMDJPgdctFzYbg4xvxTER%2FHhTg36TV%2BisZ5C4p1VAgcG2ulHtyBIaouBcNS8sm899KF73sop%2FWBc5Ojl%2FBd7t5NdV7U2jslbxFhIFzIWSTR3UHUMOZ0MD2OUZKy%2FePYbjPna3vOwyxTzQopYQq2HlZ0kxEUBB%2FeLM9ijGCIHEEHtx22FAzo6dvFnUQuS7OcTUApbS4Dsa0yDm9NNkrGqbCBJ19eCX16cEu7G237ScRIywsxrhHnnUbM0dNKb9d3276QWH6wZngnZhO48G5fRAqhehl0DTmJTwdWehZKgtuCC6l39NPv8IpGnsd5F8%2BXo5cl3bHGM1ibq94DvqZX4h%2Bese8F7D9ZM5qO66ty5NdBMazl4Zo%2B9KvgCDXG72x0b%2FgWkUHE9NlqE8reXMMuP%2FMAGOqUBJHC0jQmmUK3E8Q0V0Ld%2Bt7eX3PISuge0BwS6zBvp9UURh4FNykdiOlqdDlttFfFV74bTYXKDTxkbcybpZ%2F2%2BjNiQTkY7UbPfc0kbD21UrXkErhYquaU5MhtWwf75fm48xl8oR2sJ91FwB5WHjlYL0MMGSFc3Pr9%2BXFbeiUzbGqzT8VGO1Njo9t1UlgtDoAwaaltX9K5Flg%2FOYqyt%2Flor0ZURCIsR&X-Amz-Signature=37ce6dbc22a0f6f33e4113f87e3c1ae730347d085fba73c07adf4c191751758c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
