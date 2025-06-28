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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ENCHLLA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHldyhahro1kN1Fkp%2BU9OOsR5cMO4mxeqFjygvfMIk6XAiEAppW5ue%2Fr94NsZqrn2LI8qyPU5hWRV%2BIas6KEosdYpFwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoGbxnCthmE46xP%2FyrcA%2B0QhpHzpCk0tXNnCemgA0t9YUKnfHY9GkNQkjczwSOEpEUe%2F%2FNNnW2HkHjla4PRkVQNPIKhf5aVd%2B8h8xlzU%2FeeYY2h7zwcfWgBA1HAGoMsOsViuhPh%2BpvincEYGei55eB8iRjemgORh8W5rcFXe4gALHHi9VX01mPMLOfUKWgv7Ns0dF5DtvOSN1B9zrpVDPIxg5ssle%2Bq12ovi%2FMhWdsy9zaSU%2FLSLOAG%2BMvsFNjKIH09Qw%2BaesELvFdoe3xgLrhf1DYETJe1pfoM8hzZVqZMKvQ1DNuVTx4IOBOBniVBE8hSOUHRQ8qnuwPeibx9OMFOrZ1X8P0WZPwkn%2FidIHq9JgxvC6uP3FwTO1a8Cebau1Huk1sMtbaoI0acd86hn3mEjZPQR6qfrcI94ZQm2HuIc9wfst%2BwDCxiC%2F3YVlzskEdnQ7iroLxJaPSsoD2auh8tTGmq99y989oyZuee%2BWrLDjTQnC0DvEPeDBtMMw%2BrOV6AmBq6IDZphc5LOXvQTM37kHzFE8oVUw2HUJUPsIAZMsuZNjetc2h%2BaBM5rTp5kqX4ysqsURx4eRxUdSxUr9viXUoH0IDF%2F0iVatCU9sQNtCn0K%2F9FO0kNfCS%2FsqMTaAMuJhwYQVjKTYmeMM2Q%2F8IGOqUBqNCQ3gFEPaomWpZ60JNAhAt8nbmTnLeOhinhdNWRwWM47Woa99lmFVkFVUpPk3B%2FPgFu63%2BTHyXNfHglOzUXCZHYLqvR%2BZ%2B2b11xcPgcLg1f0N%2FLUE%2Bbu2SnODmxRgrzIenKcYpFNM%2FhmLgEWinlCtWAIYvmf9hHk7y7CmzbDTNwBq4kl8gJOO4eeTljCrHG0jgU7KmkTb%2FrSsq%2FRyHk7m3ilNft&X-Amz-Signature=a84fdeeaa0e820228adcb37ac1c3b3366e336d81d2bdc833a3835551f4240ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ENCHLLA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHldyhahro1kN1Fkp%2BU9OOsR5cMO4mxeqFjygvfMIk6XAiEAppW5ue%2Fr94NsZqrn2LI8qyPU5hWRV%2BIas6KEosdYpFwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoGbxnCthmE46xP%2FyrcA%2B0QhpHzpCk0tXNnCemgA0t9YUKnfHY9GkNQkjczwSOEpEUe%2F%2FNNnW2HkHjla4PRkVQNPIKhf5aVd%2B8h8xlzU%2FeeYY2h7zwcfWgBA1HAGoMsOsViuhPh%2BpvincEYGei55eB8iRjemgORh8W5rcFXe4gALHHi9VX01mPMLOfUKWgv7Ns0dF5DtvOSN1B9zrpVDPIxg5ssle%2Bq12ovi%2FMhWdsy9zaSU%2FLSLOAG%2BMvsFNjKIH09Qw%2BaesELvFdoe3xgLrhf1DYETJe1pfoM8hzZVqZMKvQ1DNuVTx4IOBOBniVBE8hSOUHRQ8qnuwPeibx9OMFOrZ1X8P0WZPwkn%2FidIHq9JgxvC6uP3FwTO1a8Cebau1Huk1sMtbaoI0acd86hn3mEjZPQR6qfrcI94ZQm2HuIc9wfst%2BwDCxiC%2F3YVlzskEdnQ7iroLxJaPSsoD2auh8tTGmq99y989oyZuee%2BWrLDjTQnC0DvEPeDBtMMw%2BrOV6AmBq6IDZphc5LOXvQTM37kHzFE8oVUw2HUJUPsIAZMsuZNjetc2h%2BaBM5rTp5kqX4ysqsURx4eRxUdSxUr9viXUoH0IDF%2F0iVatCU9sQNtCn0K%2F9FO0kNfCS%2FsqMTaAMuJhwYQVjKTYmeMM2Q%2F8IGOqUBqNCQ3gFEPaomWpZ60JNAhAt8nbmTnLeOhinhdNWRwWM47Woa99lmFVkFVUpPk3B%2FPgFu63%2BTHyXNfHglOzUXCZHYLqvR%2BZ%2B2b11xcPgcLg1f0N%2FLUE%2Bbu2SnODmxRgrzIenKcYpFNM%2FhmLgEWinlCtWAIYvmf9hHk7y7CmzbDTNwBq4kl8gJOO4eeTljCrHG0jgU7KmkTb%2FrSsq%2FRyHk7m3ilNft&X-Amz-Signature=2e5c12bcb5cdf65210e1dbf7b342fd0c2e5301542c5219459fec2935847d5457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ENCHLLA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHldyhahro1kN1Fkp%2BU9OOsR5cMO4mxeqFjygvfMIk6XAiEAppW5ue%2Fr94NsZqrn2LI8qyPU5hWRV%2BIas6KEosdYpFwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoGbxnCthmE46xP%2FyrcA%2B0QhpHzpCk0tXNnCemgA0t9YUKnfHY9GkNQkjczwSOEpEUe%2F%2FNNnW2HkHjla4PRkVQNPIKhf5aVd%2B8h8xlzU%2FeeYY2h7zwcfWgBA1HAGoMsOsViuhPh%2BpvincEYGei55eB8iRjemgORh8W5rcFXe4gALHHi9VX01mPMLOfUKWgv7Ns0dF5DtvOSN1B9zrpVDPIxg5ssle%2Bq12ovi%2FMhWdsy9zaSU%2FLSLOAG%2BMvsFNjKIH09Qw%2BaesELvFdoe3xgLrhf1DYETJe1pfoM8hzZVqZMKvQ1DNuVTx4IOBOBniVBE8hSOUHRQ8qnuwPeibx9OMFOrZ1X8P0WZPwkn%2FidIHq9JgxvC6uP3FwTO1a8Cebau1Huk1sMtbaoI0acd86hn3mEjZPQR6qfrcI94ZQm2HuIc9wfst%2BwDCxiC%2F3YVlzskEdnQ7iroLxJaPSsoD2auh8tTGmq99y989oyZuee%2BWrLDjTQnC0DvEPeDBtMMw%2BrOV6AmBq6IDZphc5LOXvQTM37kHzFE8oVUw2HUJUPsIAZMsuZNjetc2h%2BaBM5rTp5kqX4ysqsURx4eRxUdSxUr9viXUoH0IDF%2F0iVatCU9sQNtCn0K%2F9FO0kNfCS%2FsqMTaAMuJhwYQVjKTYmeMM2Q%2F8IGOqUBqNCQ3gFEPaomWpZ60JNAhAt8nbmTnLeOhinhdNWRwWM47Woa99lmFVkFVUpPk3B%2FPgFu63%2BTHyXNfHglOzUXCZHYLqvR%2BZ%2B2b11xcPgcLg1f0N%2FLUE%2Bbu2SnODmxRgrzIenKcYpFNM%2FhmLgEWinlCtWAIYvmf9hHk7y7CmzbDTNwBq4kl8gJOO4eeTljCrHG0jgU7KmkTb%2FrSsq%2FRyHk7m3ilNft&X-Amz-Signature=afbf81eafce17d01256b1a1c753dec6a001178e6e6edf7f90531ed7f606ef67f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ENCHLLA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHldyhahro1kN1Fkp%2BU9OOsR5cMO4mxeqFjygvfMIk6XAiEAppW5ue%2Fr94NsZqrn2LI8qyPU5hWRV%2BIas6KEosdYpFwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoGbxnCthmE46xP%2FyrcA%2B0QhpHzpCk0tXNnCemgA0t9YUKnfHY9GkNQkjczwSOEpEUe%2F%2FNNnW2HkHjla4PRkVQNPIKhf5aVd%2B8h8xlzU%2FeeYY2h7zwcfWgBA1HAGoMsOsViuhPh%2BpvincEYGei55eB8iRjemgORh8W5rcFXe4gALHHi9VX01mPMLOfUKWgv7Ns0dF5DtvOSN1B9zrpVDPIxg5ssle%2Bq12ovi%2FMhWdsy9zaSU%2FLSLOAG%2BMvsFNjKIH09Qw%2BaesELvFdoe3xgLrhf1DYETJe1pfoM8hzZVqZMKvQ1DNuVTx4IOBOBniVBE8hSOUHRQ8qnuwPeibx9OMFOrZ1X8P0WZPwkn%2FidIHq9JgxvC6uP3FwTO1a8Cebau1Huk1sMtbaoI0acd86hn3mEjZPQR6qfrcI94ZQm2HuIc9wfst%2BwDCxiC%2F3YVlzskEdnQ7iroLxJaPSsoD2auh8tTGmq99y989oyZuee%2BWrLDjTQnC0DvEPeDBtMMw%2BrOV6AmBq6IDZphc5LOXvQTM37kHzFE8oVUw2HUJUPsIAZMsuZNjetc2h%2BaBM5rTp5kqX4ysqsURx4eRxUdSxUr9viXUoH0IDF%2F0iVatCU9sQNtCn0K%2F9FO0kNfCS%2FsqMTaAMuJhwYQVjKTYmeMM2Q%2F8IGOqUBqNCQ3gFEPaomWpZ60JNAhAt8nbmTnLeOhinhdNWRwWM47Woa99lmFVkFVUpPk3B%2FPgFu63%2BTHyXNfHglOzUXCZHYLqvR%2BZ%2B2b11xcPgcLg1f0N%2FLUE%2Bbu2SnODmxRgrzIenKcYpFNM%2FhmLgEWinlCtWAIYvmf9hHk7y7CmzbDTNwBq4kl8gJOO4eeTljCrHG0jgU7KmkTb%2FrSsq%2FRyHk7m3ilNft&X-Amz-Signature=126def9e68b50e9ef4923542b2ba8e0b6a723a7586ac43a4570ea287ea24a322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ENCHLLA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHldyhahro1kN1Fkp%2BU9OOsR5cMO4mxeqFjygvfMIk6XAiEAppW5ue%2Fr94NsZqrn2LI8qyPU5hWRV%2BIas6KEosdYpFwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoGbxnCthmE46xP%2FyrcA%2B0QhpHzpCk0tXNnCemgA0t9YUKnfHY9GkNQkjczwSOEpEUe%2F%2FNNnW2HkHjla4PRkVQNPIKhf5aVd%2B8h8xlzU%2FeeYY2h7zwcfWgBA1HAGoMsOsViuhPh%2BpvincEYGei55eB8iRjemgORh8W5rcFXe4gALHHi9VX01mPMLOfUKWgv7Ns0dF5DtvOSN1B9zrpVDPIxg5ssle%2Bq12ovi%2FMhWdsy9zaSU%2FLSLOAG%2BMvsFNjKIH09Qw%2BaesELvFdoe3xgLrhf1DYETJe1pfoM8hzZVqZMKvQ1DNuVTx4IOBOBniVBE8hSOUHRQ8qnuwPeibx9OMFOrZ1X8P0WZPwkn%2FidIHq9JgxvC6uP3FwTO1a8Cebau1Huk1sMtbaoI0acd86hn3mEjZPQR6qfrcI94ZQm2HuIc9wfst%2BwDCxiC%2F3YVlzskEdnQ7iroLxJaPSsoD2auh8tTGmq99y989oyZuee%2BWrLDjTQnC0DvEPeDBtMMw%2BrOV6AmBq6IDZphc5LOXvQTM37kHzFE8oVUw2HUJUPsIAZMsuZNjetc2h%2BaBM5rTp5kqX4ysqsURx4eRxUdSxUr9viXUoH0IDF%2F0iVatCU9sQNtCn0K%2F9FO0kNfCS%2FsqMTaAMuJhwYQVjKTYmeMM2Q%2F8IGOqUBqNCQ3gFEPaomWpZ60JNAhAt8nbmTnLeOhinhdNWRwWM47Woa99lmFVkFVUpPk3B%2FPgFu63%2BTHyXNfHglOzUXCZHYLqvR%2BZ%2B2b11xcPgcLg1f0N%2FLUE%2Bbu2SnODmxRgrzIenKcYpFNM%2FhmLgEWinlCtWAIYvmf9hHk7y7CmzbDTNwBq4kl8gJOO4eeTljCrHG0jgU7KmkTb%2FrSsq%2FRyHk7m3ilNft&X-Amz-Signature=de5f710caa8fca7dacfc1e11dab7b9c124c160d699d2e12cbbae697085567994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
