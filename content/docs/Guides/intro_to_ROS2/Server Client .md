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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPATAQSJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICx2HapVggFuKP%2BCwciJAZ%2B5nO0xUqXYAMdqKB4F3E%2BzAiAZtve9jCEAT6yHkR6LGXgsnaEciM5qtfMCoxUP%2B8GSKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMdgDbD3v9bmwgLX%2FbKtwDqycNhCviAxMTcgc1rzXiPo7fZf989dZy64rTkQNg%2BkA88zXPmw3qewIgJM%2FMfZiFeQ%2FHLx14%2FIxVL03%2F5NNR3%2B8OXpGbsKPNxDSRIXQLr56uT4xmZ7SUc%2B3w3H6x1ELIzvuTCzwO13EG1VGjXcKrtrWbXGuDGQ6fdcS2ZQh1Yy8%2Bp4cw6cLiDfiCexd2SDgtS%2Fz5m4pVKqSsfhMvcUQp6Lp5PCiiVG20F8JJ5%2BdLKuUmXlIjx9w5fRBqYMP66UlMVPyvT1CTRQ%2BuoyWYuPTEiJotWpd2%2BMuyyCyE3Rptoe6EL8tmiWpNQclrDDySJMV5D3mPxxgsrB3bARCtVVW5cyDD3fRqauq5JYQOiOn%2BQPl1QtMVoxZl9zDjNKybDkCyz4ZnfSxL5cmlVQJYmNzHJz9Yd5dvw%2BFI%2BxvXFEgJtUo1RC427GzvO%2BWC3Z6VwU5KptMADAt2F3I%2FfORsY04N73%2FD%2FYqdOugl3pP2xErBc5kB8hW9Gvgi3g0Uo9GGpf0b1AFBsGqiVy3MHLinngK505Kx7FM6w79ssaIWeKAUmmCu9rHap4i7aDNt3okzOo7sPgF1fPlHW3WzbyQmLVI1dSEGyYO28pkoDbXHqORonZyjZQuF9AOPsi1LZHAwxab6wgY6pgEtnM0kX5h5LBz9c027GEVpaF6HLx9EYlJfGQvmmrzvRMLP0HABtK1XRb8TjC7HWZPV39O36iJWpuq6qrciIM0J%2BXn%2BcWbsFiCTIKovDYuuz8NQTXSVn6ODy1JL4XSmN0dw9GVPzpXR6R13OS55Z9jOl7BMGkhLWtNhZiFiSYOTLZPrH9cdL%2Flus2EXrZ%2BCatUaUDnx1yEbGkpa7yU17MaN5ANHnEMg&X-Amz-Signature=3b82fd91a07f83159951bae8675d8967600edfc89125409a936050620c80d5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPATAQSJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICx2HapVggFuKP%2BCwciJAZ%2B5nO0xUqXYAMdqKB4F3E%2BzAiAZtve9jCEAT6yHkR6LGXgsnaEciM5qtfMCoxUP%2B8GSKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMdgDbD3v9bmwgLX%2FbKtwDqycNhCviAxMTcgc1rzXiPo7fZf989dZy64rTkQNg%2BkA88zXPmw3qewIgJM%2FMfZiFeQ%2FHLx14%2FIxVL03%2F5NNR3%2B8OXpGbsKPNxDSRIXQLr56uT4xmZ7SUc%2B3w3H6x1ELIzvuTCzwO13EG1VGjXcKrtrWbXGuDGQ6fdcS2ZQh1Yy8%2Bp4cw6cLiDfiCexd2SDgtS%2Fz5m4pVKqSsfhMvcUQp6Lp5PCiiVG20F8JJ5%2BdLKuUmXlIjx9w5fRBqYMP66UlMVPyvT1CTRQ%2BuoyWYuPTEiJotWpd2%2BMuyyCyE3Rptoe6EL8tmiWpNQclrDDySJMV5D3mPxxgsrB3bARCtVVW5cyDD3fRqauq5JYQOiOn%2BQPl1QtMVoxZl9zDjNKybDkCyz4ZnfSxL5cmlVQJYmNzHJz9Yd5dvw%2BFI%2BxvXFEgJtUo1RC427GzvO%2BWC3Z6VwU5KptMADAt2F3I%2FfORsY04N73%2FD%2FYqdOugl3pP2xErBc5kB8hW9Gvgi3g0Uo9GGpf0b1AFBsGqiVy3MHLinngK505Kx7FM6w79ssaIWeKAUmmCu9rHap4i7aDNt3okzOo7sPgF1fPlHW3WzbyQmLVI1dSEGyYO28pkoDbXHqORonZyjZQuF9AOPsi1LZHAwxab6wgY6pgEtnM0kX5h5LBz9c027GEVpaF6HLx9EYlJfGQvmmrzvRMLP0HABtK1XRb8TjC7HWZPV39O36iJWpuq6qrciIM0J%2BXn%2BcWbsFiCTIKovDYuuz8NQTXSVn6ODy1JL4XSmN0dw9GVPzpXR6R13OS55Z9jOl7BMGkhLWtNhZiFiSYOTLZPrH9cdL%2Flus2EXrZ%2BCatUaUDnx1yEbGkpa7yU17MaN5ANHnEMg&X-Amz-Signature=3c73487eeebcfe3378f3720dd7f321ad65fa7a79a1638be3378ad974a88897d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPATAQSJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICx2HapVggFuKP%2BCwciJAZ%2B5nO0xUqXYAMdqKB4F3E%2BzAiAZtve9jCEAT6yHkR6LGXgsnaEciM5qtfMCoxUP%2B8GSKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMdgDbD3v9bmwgLX%2FbKtwDqycNhCviAxMTcgc1rzXiPo7fZf989dZy64rTkQNg%2BkA88zXPmw3qewIgJM%2FMfZiFeQ%2FHLx14%2FIxVL03%2F5NNR3%2B8OXpGbsKPNxDSRIXQLr56uT4xmZ7SUc%2B3w3H6x1ELIzvuTCzwO13EG1VGjXcKrtrWbXGuDGQ6fdcS2ZQh1Yy8%2Bp4cw6cLiDfiCexd2SDgtS%2Fz5m4pVKqSsfhMvcUQp6Lp5PCiiVG20F8JJ5%2BdLKuUmXlIjx9w5fRBqYMP66UlMVPyvT1CTRQ%2BuoyWYuPTEiJotWpd2%2BMuyyCyE3Rptoe6EL8tmiWpNQclrDDySJMV5D3mPxxgsrB3bARCtVVW5cyDD3fRqauq5JYQOiOn%2BQPl1QtMVoxZl9zDjNKybDkCyz4ZnfSxL5cmlVQJYmNzHJz9Yd5dvw%2BFI%2BxvXFEgJtUo1RC427GzvO%2BWC3Z6VwU5KptMADAt2F3I%2FfORsY04N73%2FD%2FYqdOugl3pP2xErBc5kB8hW9Gvgi3g0Uo9GGpf0b1AFBsGqiVy3MHLinngK505Kx7FM6w79ssaIWeKAUmmCu9rHap4i7aDNt3okzOo7sPgF1fPlHW3WzbyQmLVI1dSEGyYO28pkoDbXHqORonZyjZQuF9AOPsi1LZHAwxab6wgY6pgEtnM0kX5h5LBz9c027GEVpaF6HLx9EYlJfGQvmmrzvRMLP0HABtK1XRb8TjC7HWZPV39O36iJWpuq6qrciIM0J%2BXn%2BcWbsFiCTIKovDYuuz8NQTXSVn6ODy1JL4XSmN0dw9GVPzpXR6R13OS55Z9jOl7BMGkhLWtNhZiFiSYOTLZPrH9cdL%2Flus2EXrZ%2BCatUaUDnx1yEbGkpa7yU17MaN5ANHnEMg&X-Amz-Signature=c09656cff23f3a6cfb88769894096388eceb26392e31272d58e4d9158bb61523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPATAQSJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICx2HapVggFuKP%2BCwciJAZ%2B5nO0xUqXYAMdqKB4F3E%2BzAiAZtve9jCEAT6yHkR6LGXgsnaEciM5qtfMCoxUP%2B8GSKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMdgDbD3v9bmwgLX%2FbKtwDqycNhCviAxMTcgc1rzXiPo7fZf989dZy64rTkQNg%2BkA88zXPmw3qewIgJM%2FMfZiFeQ%2FHLx14%2FIxVL03%2F5NNR3%2B8OXpGbsKPNxDSRIXQLr56uT4xmZ7SUc%2B3w3H6x1ELIzvuTCzwO13EG1VGjXcKrtrWbXGuDGQ6fdcS2ZQh1Yy8%2Bp4cw6cLiDfiCexd2SDgtS%2Fz5m4pVKqSsfhMvcUQp6Lp5PCiiVG20F8JJ5%2BdLKuUmXlIjx9w5fRBqYMP66UlMVPyvT1CTRQ%2BuoyWYuPTEiJotWpd2%2BMuyyCyE3Rptoe6EL8tmiWpNQclrDDySJMV5D3mPxxgsrB3bARCtVVW5cyDD3fRqauq5JYQOiOn%2BQPl1QtMVoxZl9zDjNKybDkCyz4ZnfSxL5cmlVQJYmNzHJz9Yd5dvw%2BFI%2BxvXFEgJtUo1RC427GzvO%2BWC3Z6VwU5KptMADAt2F3I%2FfORsY04N73%2FD%2FYqdOugl3pP2xErBc5kB8hW9Gvgi3g0Uo9GGpf0b1AFBsGqiVy3MHLinngK505Kx7FM6w79ssaIWeKAUmmCu9rHap4i7aDNt3okzOo7sPgF1fPlHW3WzbyQmLVI1dSEGyYO28pkoDbXHqORonZyjZQuF9AOPsi1LZHAwxab6wgY6pgEtnM0kX5h5LBz9c027GEVpaF6HLx9EYlJfGQvmmrzvRMLP0HABtK1XRb8TjC7HWZPV39O36iJWpuq6qrciIM0J%2BXn%2BcWbsFiCTIKovDYuuz8NQTXSVn6ODy1JL4XSmN0dw9GVPzpXR6R13OS55Z9jOl7BMGkhLWtNhZiFiSYOTLZPrH9cdL%2Flus2EXrZ%2BCatUaUDnx1yEbGkpa7yU17MaN5ANHnEMg&X-Amz-Signature=c8c029439fc03ff0aa086ce8400b861ef81d96cf72f608ab2e3b130676ffc109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPATAQSJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICx2HapVggFuKP%2BCwciJAZ%2B5nO0xUqXYAMdqKB4F3E%2BzAiAZtve9jCEAT6yHkR6LGXgsnaEciM5qtfMCoxUP%2B8GSKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMdgDbD3v9bmwgLX%2FbKtwDqycNhCviAxMTcgc1rzXiPo7fZf989dZy64rTkQNg%2BkA88zXPmw3qewIgJM%2FMfZiFeQ%2FHLx14%2FIxVL03%2F5NNR3%2B8OXpGbsKPNxDSRIXQLr56uT4xmZ7SUc%2B3w3H6x1ELIzvuTCzwO13EG1VGjXcKrtrWbXGuDGQ6fdcS2ZQh1Yy8%2Bp4cw6cLiDfiCexd2SDgtS%2Fz5m4pVKqSsfhMvcUQp6Lp5PCiiVG20F8JJ5%2BdLKuUmXlIjx9w5fRBqYMP66UlMVPyvT1CTRQ%2BuoyWYuPTEiJotWpd2%2BMuyyCyE3Rptoe6EL8tmiWpNQclrDDySJMV5D3mPxxgsrB3bARCtVVW5cyDD3fRqauq5JYQOiOn%2BQPl1QtMVoxZl9zDjNKybDkCyz4ZnfSxL5cmlVQJYmNzHJz9Yd5dvw%2BFI%2BxvXFEgJtUo1RC427GzvO%2BWC3Z6VwU5KptMADAt2F3I%2FfORsY04N73%2FD%2FYqdOugl3pP2xErBc5kB8hW9Gvgi3g0Uo9GGpf0b1AFBsGqiVy3MHLinngK505Kx7FM6w79ssaIWeKAUmmCu9rHap4i7aDNt3okzOo7sPgF1fPlHW3WzbyQmLVI1dSEGyYO28pkoDbXHqORonZyjZQuF9AOPsi1LZHAwxab6wgY6pgEtnM0kX5h5LBz9c027GEVpaF6HLx9EYlJfGQvmmrzvRMLP0HABtK1XRb8TjC7HWZPV39O36iJWpuq6qrciIM0J%2BXn%2BcWbsFiCTIKovDYuuz8NQTXSVn6ODy1JL4XSmN0dw9GVPzpXR6R13OS55Z9jOl7BMGkhLWtNhZiFiSYOTLZPrH9cdL%2Flus2EXrZ%2BCatUaUDnx1yEbGkpa7yU17MaN5ANHnEMg&X-Amz-Signature=374a9b7b158db3f4b2ced9dbe2230aec74993aead663cb0c8f07a3abdb0683e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
