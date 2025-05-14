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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OQCGWPC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGVCpidwiq8r1gNc2eVaJVl%2BImKka0gAo1FAwQyWeiXcAiEAmBfhJsDk7Wi7DQIcH2kq%2BFZlY5ncjvfQ14jYcUkbpq0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNi5i0y%2BxpwYp%2BumgCrcAzx9anoLRpI1tCDYymsDpXVX1%2FfZ0yNAUzs7BZrl4u8Podf7P9uyK2jyV3q%2BlsaLfGHpSjrMRdnctEzjBAE4B7TpHxQJ8U6M2dRh9xRE8V8i6%2By7R7K%2B5cNgOxdAvyvInVLTP13kEl8J3WUL0aQSD0fGfPbPfOjssAPA%2BNn51%2F9TWiQdc7TR%2B3hZsyk4aCodVdUWgkddm1q5j6VduqFrHe9TAg9oF52g%2FHZWahyFKQjEHNSjE9IaqfVYN7MgWcWmtBTJ01b6bA8dupr8VqvEGhpCP4K44Iw%2FjLJOKimDuSJMIWmd8TmAOwWPoGSfn2rKbzfs8fO9%2FRtP6IyFngqI6NjAe0MahQ4U8nQxzf3Qr90sg8dRsTesRev7AoX%2Bt3MyuRTu8yLvnGroqDMpr0o9LIWSyQMn5ShYdCCUmzhKWnObDdkemnWm4zhOOqUqa5Ue%2B%2Bvn3Cxdf6IJJymDzge2HJElFUKh9MBwS11BzMYOxpQZbhlCt8OouATrc5c2HVM5Vq27Aylbfkob%2BYtuxFaUPCcVB2pLPNn7202Ixg%2FnUn%2BieJUe2zE78QN%2BbnNBrRly0KZ4YuTxBS7vb%2B%2BxtuV8LHkT9gJOro7Ns3ZD3gWbOBOQX2Phqtg9w4bge94OMJWGksEGOqUBaT1pTQ3Rzt22js8sLRroYF9nr3eeSavOUBL6Bir0fMBQxl32%2FtxIFM2n4480u0Hec4nT29EMIekxaK5MhwzsN6jYJ8EJVCCTvFRHsr9Bmtx5KnLdG5ZOljt91TvDbjJ6pv4%2BbOKsNNS5ILQouMUmM1UoBqyj%2F5%2FI3reObqGtQdxILsEtbl1lv6v0yHArQpY3azuKlWKgjPtl0NE7L6sAeI8BTPKi&X-Amz-Signature=d649f91eb5652f78d5422b54db1e3c73a8af829d0114dfe053e735a5dacc8cee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OQCGWPC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGVCpidwiq8r1gNc2eVaJVl%2BImKka0gAo1FAwQyWeiXcAiEAmBfhJsDk7Wi7DQIcH2kq%2BFZlY5ncjvfQ14jYcUkbpq0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNi5i0y%2BxpwYp%2BumgCrcAzx9anoLRpI1tCDYymsDpXVX1%2FfZ0yNAUzs7BZrl4u8Podf7P9uyK2jyV3q%2BlsaLfGHpSjrMRdnctEzjBAE4B7TpHxQJ8U6M2dRh9xRE8V8i6%2By7R7K%2B5cNgOxdAvyvInVLTP13kEl8J3WUL0aQSD0fGfPbPfOjssAPA%2BNn51%2F9TWiQdc7TR%2B3hZsyk4aCodVdUWgkddm1q5j6VduqFrHe9TAg9oF52g%2FHZWahyFKQjEHNSjE9IaqfVYN7MgWcWmtBTJ01b6bA8dupr8VqvEGhpCP4K44Iw%2FjLJOKimDuSJMIWmd8TmAOwWPoGSfn2rKbzfs8fO9%2FRtP6IyFngqI6NjAe0MahQ4U8nQxzf3Qr90sg8dRsTesRev7AoX%2Bt3MyuRTu8yLvnGroqDMpr0o9LIWSyQMn5ShYdCCUmzhKWnObDdkemnWm4zhOOqUqa5Ue%2B%2Bvn3Cxdf6IJJymDzge2HJElFUKh9MBwS11BzMYOxpQZbhlCt8OouATrc5c2HVM5Vq27Aylbfkob%2BYtuxFaUPCcVB2pLPNn7202Ixg%2FnUn%2BieJUe2zE78QN%2BbnNBrRly0KZ4YuTxBS7vb%2B%2BxtuV8LHkT9gJOro7Ns3ZD3gWbOBOQX2Phqtg9w4bge94OMJWGksEGOqUBaT1pTQ3Rzt22js8sLRroYF9nr3eeSavOUBL6Bir0fMBQxl32%2FtxIFM2n4480u0Hec4nT29EMIekxaK5MhwzsN6jYJ8EJVCCTvFRHsr9Bmtx5KnLdG5ZOljt91TvDbjJ6pv4%2BbOKsNNS5ILQouMUmM1UoBqyj%2F5%2FI3reObqGtQdxILsEtbl1lv6v0yHArQpY3azuKlWKgjPtl0NE7L6sAeI8BTPKi&X-Amz-Signature=82bd6e2d6290142e93ac73d15484ee29d6ca6b200b631e4b4938078a3e190703&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OQCGWPC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGVCpidwiq8r1gNc2eVaJVl%2BImKka0gAo1FAwQyWeiXcAiEAmBfhJsDk7Wi7DQIcH2kq%2BFZlY5ncjvfQ14jYcUkbpq0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNi5i0y%2BxpwYp%2BumgCrcAzx9anoLRpI1tCDYymsDpXVX1%2FfZ0yNAUzs7BZrl4u8Podf7P9uyK2jyV3q%2BlsaLfGHpSjrMRdnctEzjBAE4B7TpHxQJ8U6M2dRh9xRE8V8i6%2By7R7K%2B5cNgOxdAvyvInVLTP13kEl8J3WUL0aQSD0fGfPbPfOjssAPA%2BNn51%2F9TWiQdc7TR%2B3hZsyk4aCodVdUWgkddm1q5j6VduqFrHe9TAg9oF52g%2FHZWahyFKQjEHNSjE9IaqfVYN7MgWcWmtBTJ01b6bA8dupr8VqvEGhpCP4K44Iw%2FjLJOKimDuSJMIWmd8TmAOwWPoGSfn2rKbzfs8fO9%2FRtP6IyFngqI6NjAe0MahQ4U8nQxzf3Qr90sg8dRsTesRev7AoX%2Bt3MyuRTu8yLvnGroqDMpr0o9LIWSyQMn5ShYdCCUmzhKWnObDdkemnWm4zhOOqUqa5Ue%2B%2Bvn3Cxdf6IJJymDzge2HJElFUKh9MBwS11BzMYOxpQZbhlCt8OouATrc5c2HVM5Vq27Aylbfkob%2BYtuxFaUPCcVB2pLPNn7202Ixg%2FnUn%2BieJUe2zE78QN%2BbnNBrRly0KZ4YuTxBS7vb%2B%2BxtuV8LHkT9gJOro7Ns3ZD3gWbOBOQX2Phqtg9w4bge94OMJWGksEGOqUBaT1pTQ3Rzt22js8sLRroYF9nr3eeSavOUBL6Bir0fMBQxl32%2FtxIFM2n4480u0Hec4nT29EMIekxaK5MhwzsN6jYJ8EJVCCTvFRHsr9Bmtx5KnLdG5ZOljt91TvDbjJ6pv4%2BbOKsNNS5ILQouMUmM1UoBqyj%2F5%2FI3reObqGtQdxILsEtbl1lv6v0yHArQpY3azuKlWKgjPtl0NE7L6sAeI8BTPKi&X-Amz-Signature=3278172caac24ac9c353dbfea27b7578ac9e2d3d3f86b4a61f243ce15ef49ada&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OQCGWPC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGVCpidwiq8r1gNc2eVaJVl%2BImKka0gAo1FAwQyWeiXcAiEAmBfhJsDk7Wi7DQIcH2kq%2BFZlY5ncjvfQ14jYcUkbpq0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNi5i0y%2BxpwYp%2BumgCrcAzx9anoLRpI1tCDYymsDpXVX1%2FfZ0yNAUzs7BZrl4u8Podf7P9uyK2jyV3q%2BlsaLfGHpSjrMRdnctEzjBAE4B7TpHxQJ8U6M2dRh9xRE8V8i6%2By7R7K%2B5cNgOxdAvyvInVLTP13kEl8J3WUL0aQSD0fGfPbPfOjssAPA%2BNn51%2F9TWiQdc7TR%2B3hZsyk4aCodVdUWgkddm1q5j6VduqFrHe9TAg9oF52g%2FHZWahyFKQjEHNSjE9IaqfVYN7MgWcWmtBTJ01b6bA8dupr8VqvEGhpCP4K44Iw%2FjLJOKimDuSJMIWmd8TmAOwWPoGSfn2rKbzfs8fO9%2FRtP6IyFngqI6NjAe0MahQ4U8nQxzf3Qr90sg8dRsTesRev7AoX%2Bt3MyuRTu8yLvnGroqDMpr0o9LIWSyQMn5ShYdCCUmzhKWnObDdkemnWm4zhOOqUqa5Ue%2B%2Bvn3Cxdf6IJJymDzge2HJElFUKh9MBwS11BzMYOxpQZbhlCt8OouATrc5c2HVM5Vq27Aylbfkob%2BYtuxFaUPCcVB2pLPNn7202Ixg%2FnUn%2BieJUe2zE78QN%2BbnNBrRly0KZ4YuTxBS7vb%2B%2BxtuV8LHkT9gJOro7Ns3ZD3gWbOBOQX2Phqtg9w4bge94OMJWGksEGOqUBaT1pTQ3Rzt22js8sLRroYF9nr3eeSavOUBL6Bir0fMBQxl32%2FtxIFM2n4480u0Hec4nT29EMIekxaK5MhwzsN6jYJ8EJVCCTvFRHsr9Bmtx5KnLdG5ZOljt91TvDbjJ6pv4%2BbOKsNNS5ILQouMUmM1UoBqyj%2F5%2FI3reObqGtQdxILsEtbl1lv6v0yHArQpY3azuKlWKgjPtl0NE7L6sAeI8BTPKi&X-Amz-Signature=47170b51f1baef4c6251036ed266b73408abb016f14a2e5a34522b3c676b46bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OQCGWPC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGVCpidwiq8r1gNc2eVaJVl%2BImKka0gAo1FAwQyWeiXcAiEAmBfhJsDk7Wi7DQIcH2kq%2BFZlY5ncjvfQ14jYcUkbpq0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNi5i0y%2BxpwYp%2BumgCrcAzx9anoLRpI1tCDYymsDpXVX1%2FfZ0yNAUzs7BZrl4u8Podf7P9uyK2jyV3q%2BlsaLfGHpSjrMRdnctEzjBAE4B7TpHxQJ8U6M2dRh9xRE8V8i6%2By7R7K%2B5cNgOxdAvyvInVLTP13kEl8J3WUL0aQSD0fGfPbPfOjssAPA%2BNn51%2F9TWiQdc7TR%2B3hZsyk4aCodVdUWgkddm1q5j6VduqFrHe9TAg9oF52g%2FHZWahyFKQjEHNSjE9IaqfVYN7MgWcWmtBTJ01b6bA8dupr8VqvEGhpCP4K44Iw%2FjLJOKimDuSJMIWmd8TmAOwWPoGSfn2rKbzfs8fO9%2FRtP6IyFngqI6NjAe0MahQ4U8nQxzf3Qr90sg8dRsTesRev7AoX%2Bt3MyuRTu8yLvnGroqDMpr0o9LIWSyQMn5ShYdCCUmzhKWnObDdkemnWm4zhOOqUqa5Ue%2B%2Bvn3Cxdf6IJJymDzge2HJElFUKh9MBwS11BzMYOxpQZbhlCt8OouATrc5c2HVM5Vq27Aylbfkob%2BYtuxFaUPCcVB2pLPNn7202Ixg%2FnUn%2BieJUe2zE78QN%2BbnNBrRly0KZ4YuTxBS7vb%2B%2BxtuV8LHkT9gJOro7Ns3ZD3gWbOBOQX2Phqtg9w4bge94OMJWGksEGOqUBaT1pTQ3Rzt22js8sLRroYF9nr3eeSavOUBL6Bir0fMBQxl32%2FtxIFM2n4480u0Hec4nT29EMIekxaK5MhwzsN6jYJ8EJVCCTvFRHsr9Bmtx5KnLdG5ZOljt91TvDbjJ6pv4%2BbOKsNNS5ILQouMUmM1UoBqyj%2F5%2FI3reObqGtQdxILsEtbl1lv6v0yHArQpY3azuKlWKgjPtl0NE7L6sAeI8BTPKi&X-Amz-Signature=5675023de3eb7e3672564ef3af1189116b27c7106ff16a8722e121f40a81e3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
