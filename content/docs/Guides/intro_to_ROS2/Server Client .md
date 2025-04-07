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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MN4HSEI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk00kacYrH2WEqQskO%2FonjPF82lyedf46NruvKygQCEAiEAn15OSPD0jiZ5EgON%2FOL0tvyPQcP%2FC5ElkyeaLdy2SOcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDI4p9ptppBgpJT7H7CrcA23%2F1pAzT3MPNQdic5%2FJwSW3Pb4tDI3Y91BgyClGJLAsuilwDnvXXNvVpWDXuyTY6G6g8qNvSk04832kdu4LY6Ap5StmDtNHOB%2B3AcaKN1BCGkA7mH7pE5vrclQd9TvbZpVxHmR5bl%2BnrwpUZzlqv6dyVJfKOTF0z1%2Fo%2BDFjZ5vW%2B9GLuW3dPiDzJEm8vw6xQ6hdCpudiIN6MGd%2FyBqfwQQBqztP%2Fa0UZ4KG3okYIidRyJ0lCACLkNf1mxFwWYk47cwj5urFh7pikcChY1WUlPR0KGgbsOvxnBXzuBb7FMkctWR8XBqlTo28ra7HMTgZag9OiJ%2FtWbSvale7%2FbyWPkhPZHG%2BawZ%2B7T%2BIK3tQShRRmRbdWxRptBOsKGRcAWOixNXnjn7CXHkC%2FIdshZIROoAPW2woVdltH3VDmK7Ge%2FkogD8H3hkn%2B5XpTfpPQMwVdh18eRTw5W%2FBZuaDYDUDAEh9jVurnUkCCeNb6vIZ%2Fg6sL6AA3FT46kfim0DWWRWBp%2B%2B0IPV8hQrlQvGr35enPWbETSUbVWG2x8nWSbT3t8GA0BMY02IHf6o0VBwE0cpBLgzfJD974bo1EHeysL%2F9oXWLl7pIG54NV%2B%2BcRLKYnbGMxRTOWMlDLnGNpw%2BkMKe4zb8GOqUBIlvqwhgN22A8ZgqkS%2BPKueLc%2FxVugO3sLaOphSwEF0cpjgrKvErwpjoqtib7BGPlitdFmJnf4h2IvnVly2sEMyB6dQFd3k%2B1S4GxMq0HGI0xpwEdOlUTLgy3tTwyXsZGgMfljwYv850YRtPfQjZnlfJidOQkMXmByobWScP9kDMBhjp0TDizl30bcUKLEszekc24xP9wyhZ0rZsY%2BKsiEFMouu6n&X-Amz-Signature=110e5ac33ae045f42f2e20bf41ef42a143f357f770f8791e8fb44952e58a8027&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MN4HSEI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk00kacYrH2WEqQskO%2FonjPF82lyedf46NruvKygQCEAiEAn15OSPD0jiZ5EgON%2FOL0tvyPQcP%2FC5ElkyeaLdy2SOcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDI4p9ptppBgpJT7H7CrcA23%2F1pAzT3MPNQdic5%2FJwSW3Pb4tDI3Y91BgyClGJLAsuilwDnvXXNvVpWDXuyTY6G6g8qNvSk04832kdu4LY6Ap5StmDtNHOB%2B3AcaKN1BCGkA7mH7pE5vrclQd9TvbZpVxHmR5bl%2BnrwpUZzlqv6dyVJfKOTF0z1%2Fo%2BDFjZ5vW%2B9GLuW3dPiDzJEm8vw6xQ6hdCpudiIN6MGd%2FyBqfwQQBqztP%2Fa0UZ4KG3okYIidRyJ0lCACLkNf1mxFwWYk47cwj5urFh7pikcChY1WUlPR0KGgbsOvxnBXzuBb7FMkctWR8XBqlTo28ra7HMTgZag9OiJ%2FtWbSvale7%2FbyWPkhPZHG%2BawZ%2B7T%2BIK3tQShRRmRbdWxRptBOsKGRcAWOixNXnjn7CXHkC%2FIdshZIROoAPW2woVdltH3VDmK7Ge%2FkogD8H3hkn%2B5XpTfpPQMwVdh18eRTw5W%2FBZuaDYDUDAEh9jVurnUkCCeNb6vIZ%2Fg6sL6AA3FT46kfim0DWWRWBp%2B%2B0IPV8hQrlQvGr35enPWbETSUbVWG2x8nWSbT3t8GA0BMY02IHf6o0VBwE0cpBLgzfJD974bo1EHeysL%2F9oXWLl7pIG54NV%2B%2BcRLKYnbGMxRTOWMlDLnGNpw%2BkMKe4zb8GOqUBIlvqwhgN22A8ZgqkS%2BPKueLc%2FxVugO3sLaOphSwEF0cpjgrKvErwpjoqtib7BGPlitdFmJnf4h2IvnVly2sEMyB6dQFd3k%2B1S4GxMq0HGI0xpwEdOlUTLgy3tTwyXsZGgMfljwYv850YRtPfQjZnlfJidOQkMXmByobWScP9kDMBhjp0TDizl30bcUKLEszekc24xP9wyhZ0rZsY%2BKsiEFMouu6n&X-Amz-Signature=fb9f46e4be8cc5180936e494ef862d54bcce8161f5ce35d67a4da02d7f955ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MN4HSEI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk00kacYrH2WEqQskO%2FonjPF82lyedf46NruvKygQCEAiEAn15OSPD0jiZ5EgON%2FOL0tvyPQcP%2FC5ElkyeaLdy2SOcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDI4p9ptppBgpJT7H7CrcA23%2F1pAzT3MPNQdic5%2FJwSW3Pb4tDI3Y91BgyClGJLAsuilwDnvXXNvVpWDXuyTY6G6g8qNvSk04832kdu4LY6Ap5StmDtNHOB%2B3AcaKN1BCGkA7mH7pE5vrclQd9TvbZpVxHmR5bl%2BnrwpUZzlqv6dyVJfKOTF0z1%2Fo%2BDFjZ5vW%2B9GLuW3dPiDzJEm8vw6xQ6hdCpudiIN6MGd%2FyBqfwQQBqztP%2Fa0UZ4KG3okYIidRyJ0lCACLkNf1mxFwWYk47cwj5urFh7pikcChY1WUlPR0KGgbsOvxnBXzuBb7FMkctWR8XBqlTo28ra7HMTgZag9OiJ%2FtWbSvale7%2FbyWPkhPZHG%2BawZ%2B7T%2BIK3tQShRRmRbdWxRptBOsKGRcAWOixNXnjn7CXHkC%2FIdshZIROoAPW2woVdltH3VDmK7Ge%2FkogD8H3hkn%2B5XpTfpPQMwVdh18eRTw5W%2FBZuaDYDUDAEh9jVurnUkCCeNb6vIZ%2Fg6sL6AA3FT46kfim0DWWRWBp%2B%2B0IPV8hQrlQvGr35enPWbETSUbVWG2x8nWSbT3t8GA0BMY02IHf6o0VBwE0cpBLgzfJD974bo1EHeysL%2F9oXWLl7pIG54NV%2B%2BcRLKYnbGMxRTOWMlDLnGNpw%2BkMKe4zb8GOqUBIlvqwhgN22A8ZgqkS%2BPKueLc%2FxVugO3sLaOphSwEF0cpjgrKvErwpjoqtib7BGPlitdFmJnf4h2IvnVly2sEMyB6dQFd3k%2B1S4GxMq0HGI0xpwEdOlUTLgy3tTwyXsZGgMfljwYv850YRtPfQjZnlfJidOQkMXmByobWScP9kDMBhjp0TDizl30bcUKLEszekc24xP9wyhZ0rZsY%2BKsiEFMouu6n&X-Amz-Signature=bad9d7c96ea397f831cdd5312410d2c1c6f122478b5c5f104ba86d56aa035a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MN4HSEI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk00kacYrH2WEqQskO%2FonjPF82lyedf46NruvKygQCEAiEAn15OSPD0jiZ5EgON%2FOL0tvyPQcP%2FC5ElkyeaLdy2SOcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDI4p9ptppBgpJT7H7CrcA23%2F1pAzT3MPNQdic5%2FJwSW3Pb4tDI3Y91BgyClGJLAsuilwDnvXXNvVpWDXuyTY6G6g8qNvSk04832kdu4LY6Ap5StmDtNHOB%2B3AcaKN1BCGkA7mH7pE5vrclQd9TvbZpVxHmR5bl%2BnrwpUZzlqv6dyVJfKOTF0z1%2Fo%2BDFjZ5vW%2B9GLuW3dPiDzJEm8vw6xQ6hdCpudiIN6MGd%2FyBqfwQQBqztP%2Fa0UZ4KG3okYIidRyJ0lCACLkNf1mxFwWYk47cwj5urFh7pikcChY1WUlPR0KGgbsOvxnBXzuBb7FMkctWR8XBqlTo28ra7HMTgZag9OiJ%2FtWbSvale7%2FbyWPkhPZHG%2BawZ%2B7T%2BIK3tQShRRmRbdWxRptBOsKGRcAWOixNXnjn7CXHkC%2FIdshZIROoAPW2woVdltH3VDmK7Ge%2FkogD8H3hkn%2B5XpTfpPQMwVdh18eRTw5W%2FBZuaDYDUDAEh9jVurnUkCCeNb6vIZ%2Fg6sL6AA3FT46kfim0DWWRWBp%2B%2B0IPV8hQrlQvGr35enPWbETSUbVWG2x8nWSbT3t8GA0BMY02IHf6o0VBwE0cpBLgzfJD974bo1EHeysL%2F9oXWLl7pIG54NV%2B%2BcRLKYnbGMxRTOWMlDLnGNpw%2BkMKe4zb8GOqUBIlvqwhgN22A8ZgqkS%2BPKueLc%2FxVugO3sLaOphSwEF0cpjgrKvErwpjoqtib7BGPlitdFmJnf4h2IvnVly2sEMyB6dQFd3k%2B1S4GxMq0HGI0xpwEdOlUTLgy3tTwyXsZGgMfljwYv850YRtPfQjZnlfJidOQkMXmByobWScP9kDMBhjp0TDizl30bcUKLEszekc24xP9wyhZ0rZsY%2BKsiEFMouu6n&X-Amz-Signature=0a1dc26ae134fb62c17c217d42224cca024889b82e3313416ff8ba6854124c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MN4HSEI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk00kacYrH2WEqQskO%2FonjPF82lyedf46NruvKygQCEAiEAn15OSPD0jiZ5EgON%2FOL0tvyPQcP%2FC5ElkyeaLdy2SOcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDI4p9ptppBgpJT7H7CrcA23%2F1pAzT3MPNQdic5%2FJwSW3Pb4tDI3Y91BgyClGJLAsuilwDnvXXNvVpWDXuyTY6G6g8qNvSk04832kdu4LY6Ap5StmDtNHOB%2B3AcaKN1BCGkA7mH7pE5vrclQd9TvbZpVxHmR5bl%2BnrwpUZzlqv6dyVJfKOTF0z1%2Fo%2BDFjZ5vW%2B9GLuW3dPiDzJEm8vw6xQ6hdCpudiIN6MGd%2FyBqfwQQBqztP%2Fa0UZ4KG3okYIidRyJ0lCACLkNf1mxFwWYk47cwj5urFh7pikcChY1WUlPR0KGgbsOvxnBXzuBb7FMkctWR8XBqlTo28ra7HMTgZag9OiJ%2FtWbSvale7%2FbyWPkhPZHG%2BawZ%2B7T%2BIK3tQShRRmRbdWxRptBOsKGRcAWOixNXnjn7CXHkC%2FIdshZIROoAPW2woVdltH3VDmK7Ge%2FkogD8H3hkn%2B5XpTfpPQMwVdh18eRTw5W%2FBZuaDYDUDAEh9jVurnUkCCeNb6vIZ%2Fg6sL6AA3FT46kfim0DWWRWBp%2B%2B0IPV8hQrlQvGr35enPWbETSUbVWG2x8nWSbT3t8GA0BMY02IHf6o0VBwE0cpBLgzfJD974bo1EHeysL%2F9oXWLl7pIG54NV%2B%2BcRLKYnbGMxRTOWMlDLnGNpw%2BkMKe4zb8GOqUBIlvqwhgN22A8ZgqkS%2BPKueLc%2FxVugO3sLaOphSwEF0cpjgrKvErwpjoqtib7BGPlitdFmJnf4h2IvnVly2sEMyB6dQFd3k%2B1S4GxMq0HGI0xpwEdOlUTLgy3tTwyXsZGgMfljwYv850YRtPfQjZnlfJidOQkMXmByobWScP9kDMBhjp0TDizl30bcUKLEszekc24xP9wyhZ0rZsY%2BKsiEFMouu6n&X-Amz-Signature=fe8c5713e1ff1fca137eadc3be1ac7c22cb6c3387a40bc663ec582e513211e56&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
