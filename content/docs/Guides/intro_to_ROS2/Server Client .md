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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNUV2BM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDFSmsdA2llokabgiIm7npwdJqdPiFzW6lV%2Fo8HdjPhmgIhAL3L4j0zxBF%2FTegVpKyl0o69VDjWKXYn0Vu8%2ByB%2FNLSOKv8DCDUQABoMNjM3NDIzMTgzODA1Igwkwbdp36leTgIMxkAq3APXLdTY3nKDmB6Z%2FlTPYCBjIH%2F9rgSYwK9qNbobginMHKrB1lpEAy1y%2FQ1KC%2Bn7NPSDsfXcZ6N42lDqzlbewyAPpUB4A7R%2Bh9xQf2b0rVJz%2BspMeJQ66cYxZo6ITJ%2F5eSIvuiXyFmteODCfYiGVYBNyasBqemWwFwOVjKlPPDOZklekqsuv3QuNluJY2RY8cKrDxmG0OCIz%2FZaWS0ed78FbsqK79OGipj%2FXltpXsw9Luj%2FbT5QP1VUsQNIXy96GR77Hcwq8hfRjCZMxut2A8RXfgyuoOVDKP%2FjTmzUS4zdR80YLvFASRcWtVuqj17lNgedw4s7Yi1dvSO7AqtCn73DWC3jYXrK00cKnQzRGO7C0VA04QBp6UbSsDYGRhEBZBGE%2BGoxhqTWIvuARJyyIojnmTe2SNdP1Hegk6YhNkrE1zGyDHZrLBmMZIVTrEjjsMaW7s5atLgl1%2FMjLvRMq3%2Bn%2BuIHa%2FUBRm7JIWouvOMxfiikczbeqr05qKcFvMpSggbz7bU2yTGhCZGNhI9FhChd5XgbcxjUTXop%2FOKvPEb9O2RnlHtCJrIwCtBLDe5GttRGicmoPUkT30n9G0Hn%2BeRfW%2B7I1Xep%2FmVjcaR8mbT%2B%2BUMo8KfamnNrMlA0RPzDe56DDBjqkATdQ7ECuEJTnhOb2WmuSzDLztEHtWSmAZJS1qYAE3cpQuDNIc4%2BTpe%2BlIAjGh8vRJpMIczYmm8JkqYahKcpJxEpsO3tRF3Qpvwpu8c8qmXJM2Q1uuIXa31IFroC1Irp6VyoAYpjw8TUH4Cpg2vsppP3z%2BkqpR7pWDGznbWW3u0j28SUrOWHNVdZrSchbOTOlxBra1IH1a1gdRjkJ68UaSHDMM%2Fow&X-Amz-Signature=e5c7b592a285d6991feb48193f0b6f5f7bf009353f25eeca1505025cb5fc125f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNUV2BM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDFSmsdA2llokabgiIm7npwdJqdPiFzW6lV%2Fo8HdjPhmgIhAL3L4j0zxBF%2FTegVpKyl0o69VDjWKXYn0Vu8%2ByB%2FNLSOKv8DCDUQABoMNjM3NDIzMTgzODA1Igwkwbdp36leTgIMxkAq3APXLdTY3nKDmB6Z%2FlTPYCBjIH%2F9rgSYwK9qNbobginMHKrB1lpEAy1y%2FQ1KC%2Bn7NPSDsfXcZ6N42lDqzlbewyAPpUB4A7R%2Bh9xQf2b0rVJz%2BspMeJQ66cYxZo6ITJ%2F5eSIvuiXyFmteODCfYiGVYBNyasBqemWwFwOVjKlPPDOZklekqsuv3QuNluJY2RY8cKrDxmG0OCIz%2FZaWS0ed78FbsqK79OGipj%2FXltpXsw9Luj%2FbT5QP1VUsQNIXy96GR77Hcwq8hfRjCZMxut2A8RXfgyuoOVDKP%2FjTmzUS4zdR80YLvFASRcWtVuqj17lNgedw4s7Yi1dvSO7AqtCn73DWC3jYXrK00cKnQzRGO7C0VA04QBp6UbSsDYGRhEBZBGE%2BGoxhqTWIvuARJyyIojnmTe2SNdP1Hegk6YhNkrE1zGyDHZrLBmMZIVTrEjjsMaW7s5atLgl1%2FMjLvRMq3%2Bn%2BuIHa%2FUBRm7JIWouvOMxfiikczbeqr05qKcFvMpSggbz7bU2yTGhCZGNhI9FhChd5XgbcxjUTXop%2FOKvPEb9O2RnlHtCJrIwCtBLDe5GttRGicmoPUkT30n9G0Hn%2BeRfW%2B7I1Xep%2FmVjcaR8mbT%2B%2BUMo8KfamnNrMlA0RPzDe56DDBjqkATdQ7ECuEJTnhOb2WmuSzDLztEHtWSmAZJS1qYAE3cpQuDNIc4%2BTpe%2BlIAjGh8vRJpMIczYmm8JkqYahKcpJxEpsO3tRF3Qpvwpu8c8qmXJM2Q1uuIXa31IFroC1Irp6VyoAYpjw8TUH4Cpg2vsppP3z%2BkqpR7pWDGznbWW3u0j28SUrOWHNVdZrSchbOTOlxBra1IH1a1gdRjkJ68UaSHDMM%2Fow&X-Amz-Signature=b52b8715360ccc3f1e3298699501e9b83b8394769ce968f1b2a90d165f226bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNUV2BM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDFSmsdA2llokabgiIm7npwdJqdPiFzW6lV%2Fo8HdjPhmgIhAL3L4j0zxBF%2FTegVpKyl0o69VDjWKXYn0Vu8%2ByB%2FNLSOKv8DCDUQABoMNjM3NDIzMTgzODA1Igwkwbdp36leTgIMxkAq3APXLdTY3nKDmB6Z%2FlTPYCBjIH%2F9rgSYwK9qNbobginMHKrB1lpEAy1y%2FQ1KC%2Bn7NPSDsfXcZ6N42lDqzlbewyAPpUB4A7R%2Bh9xQf2b0rVJz%2BspMeJQ66cYxZo6ITJ%2F5eSIvuiXyFmteODCfYiGVYBNyasBqemWwFwOVjKlPPDOZklekqsuv3QuNluJY2RY8cKrDxmG0OCIz%2FZaWS0ed78FbsqK79OGipj%2FXltpXsw9Luj%2FbT5QP1VUsQNIXy96GR77Hcwq8hfRjCZMxut2A8RXfgyuoOVDKP%2FjTmzUS4zdR80YLvFASRcWtVuqj17lNgedw4s7Yi1dvSO7AqtCn73DWC3jYXrK00cKnQzRGO7C0VA04QBp6UbSsDYGRhEBZBGE%2BGoxhqTWIvuARJyyIojnmTe2SNdP1Hegk6YhNkrE1zGyDHZrLBmMZIVTrEjjsMaW7s5atLgl1%2FMjLvRMq3%2Bn%2BuIHa%2FUBRm7JIWouvOMxfiikczbeqr05qKcFvMpSggbz7bU2yTGhCZGNhI9FhChd5XgbcxjUTXop%2FOKvPEb9O2RnlHtCJrIwCtBLDe5GttRGicmoPUkT30n9G0Hn%2BeRfW%2B7I1Xep%2FmVjcaR8mbT%2B%2BUMo8KfamnNrMlA0RPzDe56DDBjqkATdQ7ECuEJTnhOb2WmuSzDLztEHtWSmAZJS1qYAE3cpQuDNIc4%2BTpe%2BlIAjGh8vRJpMIczYmm8JkqYahKcpJxEpsO3tRF3Qpvwpu8c8qmXJM2Q1uuIXa31IFroC1Irp6VyoAYpjw8TUH4Cpg2vsppP3z%2BkqpR7pWDGznbWW3u0j28SUrOWHNVdZrSchbOTOlxBra1IH1a1gdRjkJ68UaSHDMM%2Fow&X-Amz-Signature=c97f3dc21b51098b835d8bbb30a612e5407a5c217a270e4db7337f63315fc661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNUV2BM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDFSmsdA2llokabgiIm7npwdJqdPiFzW6lV%2Fo8HdjPhmgIhAL3L4j0zxBF%2FTegVpKyl0o69VDjWKXYn0Vu8%2ByB%2FNLSOKv8DCDUQABoMNjM3NDIzMTgzODA1Igwkwbdp36leTgIMxkAq3APXLdTY3nKDmB6Z%2FlTPYCBjIH%2F9rgSYwK9qNbobginMHKrB1lpEAy1y%2FQ1KC%2Bn7NPSDsfXcZ6N42lDqzlbewyAPpUB4A7R%2Bh9xQf2b0rVJz%2BspMeJQ66cYxZo6ITJ%2F5eSIvuiXyFmteODCfYiGVYBNyasBqemWwFwOVjKlPPDOZklekqsuv3QuNluJY2RY8cKrDxmG0OCIz%2FZaWS0ed78FbsqK79OGipj%2FXltpXsw9Luj%2FbT5QP1VUsQNIXy96GR77Hcwq8hfRjCZMxut2A8RXfgyuoOVDKP%2FjTmzUS4zdR80YLvFASRcWtVuqj17lNgedw4s7Yi1dvSO7AqtCn73DWC3jYXrK00cKnQzRGO7C0VA04QBp6UbSsDYGRhEBZBGE%2BGoxhqTWIvuARJyyIojnmTe2SNdP1Hegk6YhNkrE1zGyDHZrLBmMZIVTrEjjsMaW7s5atLgl1%2FMjLvRMq3%2Bn%2BuIHa%2FUBRm7JIWouvOMxfiikczbeqr05qKcFvMpSggbz7bU2yTGhCZGNhI9FhChd5XgbcxjUTXop%2FOKvPEb9O2RnlHtCJrIwCtBLDe5GttRGicmoPUkT30n9G0Hn%2BeRfW%2B7I1Xep%2FmVjcaR8mbT%2B%2BUMo8KfamnNrMlA0RPzDe56DDBjqkATdQ7ECuEJTnhOb2WmuSzDLztEHtWSmAZJS1qYAE3cpQuDNIc4%2BTpe%2BlIAjGh8vRJpMIczYmm8JkqYahKcpJxEpsO3tRF3Qpvwpu8c8qmXJM2Q1uuIXa31IFroC1Irp6VyoAYpjw8TUH4Cpg2vsppP3z%2BkqpR7pWDGznbWW3u0j28SUrOWHNVdZrSchbOTOlxBra1IH1a1gdRjkJ68UaSHDMM%2Fow&X-Amz-Signature=fa006929f78bdd45db56ab91f829191d387cca97fa979cb8fb1f8b7be2e55a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNUV2BM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDFSmsdA2llokabgiIm7npwdJqdPiFzW6lV%2Fo8HdjPhmgIhAL3L4j0zxBF%2FTegVpKyl0o69VDjWKXYn0Vu8%2ByB%2FNLSOKv8DCDUQABoMNjM3NDIzMTgzODA1Igwkwbdp36leTgIMxkAq3APXLdTY3nKDmB6Z%2FlTPYCBjIH%2F9rgSYwK9qNbobginMHKrB1lpEAy1y%2FQ1KC%2Bn7NPSDsfXcZ6N42lDqzlbewyAPpUB4A7R%2Bh9xQf2b0rVJz%2BspMeJQ66cYxZo6ITJ%2F5eSIvuiXyFmteODCfYiGVYBNyasBqemWwFwOVjKlPPDOZklekqsuv3QuNluJY2RY8cKrDxmG0OCIz%2FZaWS0ed78FbsqK79OGipj%2FXltpXsw9Luj%2FbT5QP1VUsQNIXy96GR77Hcwq8hfRjCZMxut2A8RXfgyuoOVDKP%2FjTmzUS4zdR80YLvFASRcWtVuqj17lNgedw4s7Yi1dvSO7AqtCn73DWC3jYXrK00cKnQzRGO7C0VA04QBp6UbSsDYGRhEBZBGE%2BGoxhqTWIvuARJyyIojnmTe2SNdP1Hegk6YhNkrE1zGyDHZrLBmMZIVTrEjjsMaW7s5atLgl1%2FMjLvRMq3%2Bn%2BuIHa%2FUBRm7JIWouvOMxfiikczbeqr05qKcFvMpSggbz7bU2yTGhCZGNhI9FhChd5XgbcxjUTXop%2FOKvPEb9O2RnlHtCJrIwCtBLDe5GttRGicmoPUkT30n9G0Hn%2BeRfW%2B7I1Xep%2FmVjcaR8mbT%2B%2BUMo8KfamnNrMlA0RPzDe56DDBjqkATdQ7ECuEJTnhOb2WmuSzDLztEHtWSmAZJS1qYAE3cpQuDNIc4%2BTpe%2BlIAjGh8vRJpMIczYmm8JkqYahKcpJxEpsO3tRF3Qpvwpu8c8qmXJM2Q1uuIXa31IFroC1Irp6VyoAYpjw8TUH4Cpg2vsppP3z%2BkqpR7pWDGznbWW3u0j28SUrOWHNVdZrSchbOTOlxBra1IH1a1gdRjkJ68UaSHDMM%2Fow&X-Amz-Signature=43a4c6d714a655b02cc19f2fed75ae36ae2558704450631298b0e667fa526b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
