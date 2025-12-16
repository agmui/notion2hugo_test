---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDSNIXW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9j4UYZOccJOqeM463co2ZERnpjYrtvf32cel69PVUrAiEA4VJLuKDvth05opO%2Fty%2BwCCQybKKcrLImTyHZrRVV3u8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMw0D3sYslyAqGwZVCrcA9fGqn%2FXLxTOp1NC%2FFkdoMCE8dU7L77RN%2BE7TYYfOdaFVnbD8PuSLolZWjAtuYjD4%2B8YXIfzZxZQBuiNrAoFJ6S5AaRBlCn4rIyVI3FQZztB81IykdEiPxVVdGI8YMO6iDzxVV2sCUa%2FXtmDM%2BTWyCbmb7%2FvFbXvcKal68v83s9SixtwhG4PxrJKgKB9ifbZ916tJntF5xb2Hvw8bzSnmKSXu7YvzMyuiE7cQmbumwtODIBRGFxYSMJcCd3OiLemtbAVhjO4CCrXm5W55MvgEFf0bjg7lz0mU7qpOHnGzqDfJaF75P48hpU%2Fw4wqgHEcY4Ig1v61f7iJ1%2BgMnplSsVEGl3CT%2FAN7mUVIgypisyhuvPmP%2FpLH0%2FbLLcjrkex7xQbQdMaf4weLG6QZYw%2BesoaNDxXQbx91xtRXm7VflvllPSfY6skGcIpcJo11lZPzW6DBej7nIFcN4L7EdrDgWUYMkn3Xexd8FaXdFJW75l5DuRKhzaL4KOgivrdamDPDh7Jxnf9bC2K8yT8YrYbzunyPH%2FG%2BqyQBYyz5oL%2FWELuz8KClAzmH6cvGUForF1fGiQ8DVEYbbGji3357WyTA42HV5DIU%2FM37x5kfr9RQAahkNk1usfdh%2BTCDDqQVMPDJgsoGOqUBwaVh9751KkdSCm4MR1khNrj2l39VSeNG9HPbClK6uZK63Uvv1EqRBqck%2FZJef3v9S%2F%2BzReBgrrLSu2IkKJqD%2BvzqHijx7k%2BglTk%2FTz%2F18r7%2FNXDeSlZainacxtXwv3d%2BvdHf4ikVN0LdwLwjvtWYlGUMqFxl74PLeHLqYJZgtMMjxFkfRncJ%2BFzTCrDqLACnyFsONFWkZeWAHU5tKx1Uu322bhQR&X-Amz-Signature=3bae861c97645d056ecb3b556743ff9c9a69c187ae0e71ebd3ab81489fb33bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDSNIXW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9j4UYZOccJOqeM463co2ZERnpjYrtvf32cel69PVUrAiEA4VJLuKDvth05opO%2Fty%2BwCCQybKKcrLImTyHZrRVV3u8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMw0D3sYslyAqGwZVCrcA9fGqn%2FXLxTOp1NC%2FFkdoMCE8dU7L77RN%2BE7TYYfOdaFVnbD8PuSLolZWjAtuYjD4%2B8YXIfzZxZQBuiNrAoFJ6S5AaRBlCn4rIyVI3FQZztB81IykdEiPxVVdGI8YMO6iDzxVV2sCUa%2FXtmDM%2BTWyCbmb7%2FvFbXvcKal68v83s9SixtwhG4PxrJKgKB9ifbZ916tJntF5xb2Hvw8bzSnmKSXu7YvzMyuiE7cQmbumwtODIBRGFxYSMJcCd3OiLemtbAVhjO4CCrXm5W55MvgEFf0bjg7lz0mU7qpOHnGzqDfJaF75P48hpU%2Fw4wqgHEcY4Ig1v61f7iJ1%2BgMnplSsVEGl3CT%2FAN7mUVIgypisyhuvPmP%2FpLH0%2FbLLcjrkex7xQbQdMaf4weLG6QZYw%2BesoaNDxXQbx91xtRXm7VflvllPSfY6skGcIpcJo11lZPzW6DBej7nIFcN4L7EdrDgWUYMkn3Xexd8FaXdFJW75l5DuRKhzaL4KOgivrdamDPDh7Jxnf9bC2K8yT8YrYbzunyPH%2FG%2BqyQBYyz5oL%2FWELuz8KClAzmH6cvGUForF1fGiQ8DVEYbbGji3357WyTA42HV5DIU%2FM37x5kfr9RQAahkNk1usfdh%2BTCDDqQVMPDJgsoGOqUBwaVh9751KkdSCm4MR1khNrj2l39VSeNG9HPbClK6uZK63Uvv1EqRBqck%2FZJef3v9S%2F%2BzReBgrrLSu2IkKJqD%2BvzqHijx7k%2BglTk%2FTz%2F18r7%2FNXDeSlZainacxtXwv3d%2BvdHf4ikVN0LdwLwjvtWYlGUMqFxl74PLeHLqYJZgtMMjxFkfRncJ%2BFzTCrDqLACnyFsONFWkZeWAHU5tKx1Uu322bhQR&X-Amz-Signature=e5667e6f5076ca168372917489eefa5542eb7a30f3afbfd2ca5d21378d9461d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDSNIXW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9j4UYZOccJOqeM463co2ZERnpjYrtvf32cel69PVUrAiEA4VJLuKDvth05opO%2Fty%2BwCCQybKKcrLImTyHZrRVV3u8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMw0D3sYslyAqGwZVCrcA9fGqn%2FXLxTOp1NC%2FFkdoMCE8dU7L77RN%2BE7TYYfOdaFVnbD8PuSLolZWjAtuYjD4%2B8YXIfzZxZQBuiNrAoFJ6S5AaRBlCn4rIyVI3FQZztB81IykdEiPxVVdGI8YMO6iDzxVV2sCUa%2FXtmDM%2BTWyCbmb7%2FvFbXvcKal68v83s9SixtwhG4PxrJKgKB9ifbZ916tJntF5xb2Hvw8bzSnmKSXu7YvzMyuiE7cQmbumwtODIBRGFxYSMJcCd3OiLemtbAVhjO4CCrXm5W55MvgEFf0bjg7lz0mU7qpOHnGzqDfJaF75P48hpU%2Fw4wqgHEcY4Ig1v61f7iJ1%2BgMnplSsVEGl3CT%2FAN7mUVIgypisyhuvPmP%2FpLH0%2FbLLcjrkex7xQbQdMaf4weLG6QZYw%2BesoaNDxXQbx91xtRXm7VflvllPSfY6skGcIpcJo11lZPzW6DBej7nIFcN4L7EdrDgWUYMkn3Xexd8FaXdFJW75l5DuRKhzaL4KOgivrdamDPDh7Jxnf9bC2K8yT8YrYbzunyPH%2FG%2BqyQBYyz5oL%2FWELuz8KClAzmH6cvGUForF1fGiQ8DVEYbbGji3357WyTA42HV5DIU%2FM37x5kfr9RQAahkNk1usfdh%2BTCDDqQVMPDJgsoGOqUBwaVh9751KkdSCm4MR1khNrj2l39VSeNG9HPbClK6uZK63Uvv1EqRBqck%2FZJef3v9S%2F%2BzReBgrrLSu2IkKJqD%2BvzqHijx7k%2BglTk%2FTz%2F18r7%2FNXDeSlZainacxtXwv3d%2BvdHf4ikVN0LdwLwjvtWYlGUMqFxl74PLeHLqYJZgtMMjxFkfRncJ%2BFzTCrDqLACnyFsONFWkZeWAHU5tKx1Uu322bhQR&X-Amz-Signature=baed065f331f98481d421e2cbd6b0b1270c585f3245b8042c96db831ae9e13fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDSNIXW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9j4UYZOccJOqeM463co2ZERnpjYrtvf32cel69PVUrAiEA4VJLuKDvth05opO%2Fty%2BwCCQybKKcrLImTyHZrRVV3u8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMw0D3sYslyAqGwZVCrcA9fGqn%2FXLxTOp1NC%2FFkdoMCE8dU7L77RN%2BE7TYYfOdaFVnbD8PuSLolZWjAtuYjD4%2B8YXIfzZxZQBuiNrAoFJ6S5AaRBlCn4rIyVI3FQZztB81IykdEiPxVVdGI8YMO6iDzxVV2sCUa%2FXtmDM%2BTWyCbmb7%2FvFbXvcKal68v83s9SixtwhG4PxrJKgKB9ifbZ916tJntF5xb2Hvw8bzSnmKSXu7YvzMyuiE7cQmbumwtODIBRGFxYSMJcCd3OiLemtbAVhjO4CCrXm5W55MvgEFf0bjg7lz0mU7qpOHnGzqDfJaF75P48hpU%2Fw4wqgHEcY4Ig1v61f7iJ1%2BgMnplSsVEGl3CT%2FAN7mUVIgypisyhuvPmP%2FpLH0%2FbLLcjrkex7xQbQdMaf4weLG6QZYw%2BesoaNDxXQbx91xtRXm7VflvllPSfY6skGcIpcJo11lZPzW6DBej7nIFcN4L7EdrDgWUYMkn3Xexd8FaXdFJW75l5DuRKhzaL4KOgivrdamDPDh7Jxnf9bC2K8yT8YrYbzunyPH%2FG%2BqyQBYyz5oL%2FWELuz8KClAzmH6cvGUForF1fGiQ8DVEYbbGji3357WyTA42HV5DIU%2FM37x5kfr9RQAahkNk1usfdh%2BTCDDqQVMPDJgsoGOqUBwaVh9751KkdSCm4MR1khNrj2l39VSeNG9HPbClK6uZK63Uvv1EqRBqck%2FZJef3v9S%2F%2BzReBgrrLSu2IkKJqD%2BvzqHijx7k%2BglTk%2FTz%2F18r7%2FNXDeSlZainacxtXwv3d%2BvdHf4ikVN0LdwLwjvtWYlGUMqFxl74PLeHLqYJZgtMMjxFkfRncJ%2BFzTCrDqLACnyFsONFWkZeWAHU5tKx1Uu322bhQR&X-Amz-Signature=69c985e364d861261e75b9f0fbd940f2ed6857b7048c5160607c794f4f7bb782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDSNIXW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9j4UYZOccJOqeM463co2ZERnpjYrtvf32cel69PVUrAiEA4VJLuKDvth05opO%2Fty%2BwCCQybKKcrLImTyHZrRVV3u8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMw0D3sYslyAqGwZVCrcA9fGqn%2FXLxTOp1NC%2FFkdoMCE8dU7L77RN%2BE7TYYfOdaFVnbD8PuSLolZWjAtuYjD4%2B8YXIfzZxZQBuiNrAoFJ6S5AaRBlCn4rIyVI3FQZztB81IykdEiPxVVdGI8YMO6iDzxVV2sCUa%2FXtmDM%2BTWyCbmb7%2FvFbXvcKal68v83s9SixtwhG4PxrJKgKB9ifbZ916tJntF5xb2Hvw8bzSnmKSXu7YvzMyuiE7cQmbumwtODIBRGFxYSMJcCd3OiLemtbAVhjO4CCrXm5W55MvgEFf0bjg7lz0mU7qpOHnGzqDfJaF75P48hpU%2Fw4wqgHEcY4Ig1v61f7iJ1%2BgMnplSsVEGl3CT%2FAN7mUVIgypisyhuvPmP%2FpLH0%2FbLLcjrkex7xQbQdMaf4weLG6QZYw%2BesoaNDxXQbx91xtRXm7VflvllPSfY6skGcIpcJo11lZPzW6DBej7nIFcN4L7EdrDgWUYMkn3Xexd8FaXdFJW75l5DuRKhzaL4KOgivrdamDPDh7Jxnf9bC2K8yT8YrYbzunyPH%2FG%2BqyQBYyz5oL%2FWELuz8KClAzmH6cvGUForF1fGiQ8DVEYbbGji3357WyTA42HV5DIU%2FM37x5kfr9RQAahkNk1usfdh%2BTCDDqQVMPDJgsoGOqUBwaVh9751KkdSCm4MR1khNrj2l39VSeNG9HPbClK6uZK63Uvv1EqRBqck%2FZJef3v9S%2F%2BzReBgrrLSu2IkKJqD%2BvzqHijx7k%2BglTk%2FTz%2F18r7%2FNXDeSlZainacxtXwv3d%2BvdHf4ikVN0LdwLwjvtWYlGUMqFxl74PLeHLqYJZgtMMjxFkfRncJ%2BFzTCrDqLACnyFsONFWkZeWAHU5tKx1Uu322bhQR&X-Amz-Signature=bdc60b3bc27f2f2708ce7e1a27c41a3fdf2902c8eb381e82e28482710a4b6d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
