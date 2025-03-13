---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XVXBD26%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7iIuc7D4h6yf2PMcAB4YsHUKM%2FP41WtrW3TFJwN8xvAiAOrRnb0%2BGscyLT1IfoDvT3VlRLxsxZxfPHw5LUObtK3CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgeibA4g7YW%2FCpAeKtwDUvqj7P4DYAi1mY4N9TNXRzGkNWjAojrEgOLR6ykYbWx%2Bm8kptnIcQiBz7QSGwz3KCr9W2bpuJQJBj%2FK%2FoPc0c4qGgI6%2ByU9J7cTKR0iK14fKRCqZfRItl4K1tWp15aiBaANLGVpya%2FQsvlVAam08DeHkqK9KFMmXe7ufUZXOnCHJo0sIHSDqe6rHykV0AGXaLcmrBeof%2Bl8MiLUdmmXanyig7oNNmF03hzV1mUtuwAiln1gzWQ3CjkHZrWlLBTAelO3dg8QHeo5Z4mWQZuY9rU%2FTz5Mo1fec8KO0Yn3SILGYWo391nKTFnRCVEC56SzMUst7FhLgfrnezYG3AURXBx9DIU8LByUBCfZ5nxyuYe0%2BmDNrjlh0MewGd%2F8DnasGRE6hOeo1W9YvpcVDo2%2BNGzYn1fpiP5VpePfgdNFiNO02XIPH0FIkl6lQZLxfFSIBfYmbTkH6iW5kLUnm83Ke%2FtrXsuQQy4dox%2FSxaAwa84239xijFqXI4c66jatKBSqETJhnSswzmD5Oa62qVXpg5Ei2bgxoA8wCkH1SOyutVLwSMPQgj3RcVl%2Fv5x7bv4YjBOKdpVAHSLUc63Z5UOxhZbsJYr4xsYr2%2FNXTM87MwUh9KIlL5j95nWDWFnAw2tLKvgY6pgELHgmNmTR9tPrVw3xWgKH6xL1lUrDVw%2F94mTxojP04rjnIMu3Ashb9pRtkaSexMRpnHVIwMpCKWMGEJTZPFyLNiadJhbUfEbP37OB39NN%2BzlRdmRobGdcRjy8cYHs0vwD9r6cSZdX3NISEv%2FBCYqsdNen7IsbL9BVnd53C2E08yft6G2oOKkx%2B3HThdNvFF7R1CleG2HF42Y657GpRRj6XzqEhJfXs&X-Amz-Signature=db8efb1774dd75774307e98cb28992022603cb4809a295506bfc99e3d02870c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XVXBD26%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7iIuc7D4h6yf2PMcAB4YsHUKM%2FP41WtrW3TFJwN8xvAiAOrRnb0%2BGscyLT1IfoDvT3VlRLxsxZxfPHw5LUObtK3CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgeibA4g7YW%2FCpAeKtwDUvqj7P4DYAi1mY4N9TNXRzGkNWjAojrEgOLR6ykYbWx%2Bm8kptnIcQiBz7QSGwz3KCr9W2bpuJQJBj%2FK%2FoPc0c4qGgI6%2ByU9J7cTKR0iK14fKRCqZfRItl4K1tWp15aiBaANLGVpya%2FQsvlVAam08DeHkqK9KFMmXe7ufUZXOnCHJo0sIHSDqe6rHykV0AGXaLcmrBeof%2Bl8MiLUdmmXanyig7oNNmF03hzV1mUtuwAiln1gzWQ3CjkHZrWlLBTAelO3dg8QHeo5Z4mWQZuY9rU%2FTz5Mo1fec8KO0Yn3SILGYWo391nKTFnRCVEC56SzMUst7FhLgfrnezYG3AURXBx9DIU8LByUBCfZ5nxyuYe0%2BmDNrjlh0MewGd%2F8DnasGRE6hOeo1W9YvpcVDo2%2BNGzYn1fpiP5VpePfgdNFiNO02XIPH0FIkl6lQZLxfFSIBfYmbTkH6iW5kLUnm83Ke%2FtrXsuQQy4dox%2FSxaAwa84239xijFqXI4c66jatKBSqETJhnSswzmD5Oa62qVXpg5Ei2bgxoA8wCkH1SOyutVLwSMPQgj3RcVl%2Fv5x7bv4YjBOKdpVAHSLUc63Z5UOxhZbsJYr4xsYr2%2FNXTM87MwUh9KIlL5j95nWDWFnAw2tLKvgY6pgELHgmNmTR9tPrVw3xWgKH6xL1lUrDVw%2F94mTxojP04rjnIMu3Ashb9pRtkaSexMRpnHVIwMpCKWMGEJTZPFyLNiadJhbUfEbP37OB39NN%2BzlRdmRobGdcRjy8cYHs0vwD9r6cSZdX3NISEv%2FBCYqsdNen7IsbL9BVnd53C2E08yft6G2oOKkx%2B3HThdNvFF7R1CleG2HF42Y657GpRRj6XzqEhJfXs&X-Amz-Signature=5255912a3cdf811cf3c4a75774be69321260c5f0b917ca94129e849cd44f2706&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XVXBD26%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7iIuc7D4h6yf2PMcAB4YsHUKM%2FP41WtrW3TFJwN8xvAiAOrRnb0%2BGscyLT1IfoDvT3VlRLxsxZxfPHw5LUObtK3CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgeibA4g7YW%2FCpAeKtwDUvqj7P4DYAi1mY4N9TNXRzGkNWjAojrEgOLR6ykYbWx%2Bm8kptnIcQiBz7QSGwz3KCr9W2bpuJQJBj%2FK%2FoPc0c4qGgI6%2ByU9J7cTKR0iK14fKRCqZfRItl4K1tWp15aiBaANLGVpya%2FQsvlVAam08DeHkqK9KFMmXe7ufUZXOnCHJo0sIHSDqe6rHykV0AGXaLcmrBeof%2Bl8MiLUdmmXanyig7oNNmF03hzV1mUtuwAiln1gzWQ3CjkHZrWlLBTAelO3dg8QHeo5Z4mWQZuY9rU%2FTz5Mo1fec8KO0Yn3SILGYWo391nKTFnRCVEC56SzMUst7FhLgfrnezYG3AURXBx9DIU8LByUBCfZ5nxyuYe0%2BmDNrjlh0MewGd%2F8DnasGRE6hOeo1W9YvpcVDo2%2BNGzYn1fpiP5VpePfgdNFiNO02XIPH0FIkl6lQZLxfFSIBfYmbTkH6iW5kLUnm83Ke%2FtrXsuQQy4dox%2FSxaAwa84239xijFqXI4c66jatKBSqETJhnSswzmD5Oa62qVXpg5Ei2bgxoA8wCkH1SOyutVLwSMPQgj3RcVl%2Fv5x7bv4YjBOKdpVAHSLUc63Z5UOxhZbsJYr4xsYr2%2FNXTM87MwUh9KIlL5j95nWDWFnAw2tLKvgY6pgELHgmNmTR9tPrVw3xWgKH6xL1lUrDVw%2F94mTxojP04rjnIMu3Ashb9pRtkaSexMRpnHVIwMpCKWMGEJTZPFyLNiadJhbUfEbP37OB39NN%2BzlRdmRobGdcRjy8cYHs0vwD9r6cSZdX3NISEv%2FBCYqsdNen7IsbL9BVnd53C2E08yft6G2oOKkx%2B3HThdNvFF7R1CleG2HF42Y657GpRRj6XzqEhJfXs&X-Amz-Signature=5c62fc675f2e681eb1ece3b40819bef917d1c189941b8ef18735ea52cacdf8b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XVXBD26%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7iIuc7D4h6yf2PMcAB4YsHUKM%2FP41WtrW3TFJwN8xvAiAOrRnb0%2BGscyLT1IfoDvT3VlRLxsxZxfPHw5LUObtK3CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgeibA4g7YW%2FCpAeKtwDUvqj7P4DYAi1mY4N9TNXRzGkNWjAojrEgOLR6ykYbWx%2Bm8kptnIcQiBz7QSGwz3KCr9W2bpuJQJBj%2FK%2FoPc0c4qGgI6%2ByU9J7cTKR0iK14fKRCqZfRItl4K1tWp15aiBaANLGVpya%2FQsvlVAam08DeHkqK9KFMmXe7ufUZXOnCHJo0sIHSDqe6rHykV0AGXaLcmrBeof%2Bl8MiLUdmmXanyig7oNNmF03hzV1mUtuwAiln1gzWQ3CjkHZrWlLBTAelO3dg8QHeo5Z4mWQZuY9rU%2FTz5Mo1fec8KO0Yn3SILGYWo391nKTFnRCVEC56SzMUst7FhLgfrnezYG3AURXBx9DIU8LByUBCfZ5nxyuYe0%2BmDNrjlh0MewGd%2F8DnasGRE6hOeo1W9YvpcVDo2%2BNGzYn1fpiP5VpePfgdNFiNO02XIPH0FIkl6lQZLxfFSIBfYmbTkH6iW5kLUnm83Ke%2FtrXsuQQy4dox%2FSxaAwa84239xijFqXI4c66jatKBSqETJhnSswzmD5Oa62qVXpg5Ei2bgxoA8wCkH1SOyutVLwSMPQgj3RcVl%2Fv5x7bv4YjBOKdpVAHSLUc63Z5UOxhZbsJYr4xsYr2%2FNXTM87MwUh9KIlL5j95nWDWFnAw2tLKvgY6pgELHgmNmTR9tPrVw3xWgKH6xL1lUrDVw%2F94mTxojP04rjnIMu3Ashb9pRtkaSexMRpnHVIwMpCKWMGEJTZPFyLNiadJhbUfEbP37OB39NN%2BzlRdmRobGdcRjy8cYHs0vwD9r6cSZdX3NISEv%2FBCYqsdNen7IsbL9BVnd53C2E08yft6G2oOKkx%2B3HThdNvFF7R1CleG2HF42Y657GpRRj6XzqEhJfXs&X-Amz-Signature=da470dbb199817ba0adcfa6c6ad78a6d3a4029a1628fd568aee55378b0366a24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XVXBD26%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7iIuc7D4h6yf2PMcAB4YsHUKM%2FP41WtrW3TFJwN8xvAiAOrRnb0%2BGscyLT1IfoDvT3VlRLxsxZxfPHw5LUObtK3CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgeibA4g7YW%2FCpAeKtwDUvqj7P4DYAi1mY4N9TNXRzGkNWjAojrEgOLR6ykYbWx%2Bm8kptnIcQiBz7QSGwz3KCr9W2bpuJQJBj%2FK%2FoPc0c4qGgI6%2ByU9J7cTKR0iK14fKRCqZfRItl4K1tWp15aiBaANLGVpya%2FQsvlVAam08DeHkqK9KFMmXe7ufUZXOnCHJo0sIHSDqe6rHykV0AGXaLcmrBeof%2Bl8MiLUdmmXanyig7oNNmF03hzV1mUtuwAiln1gzWQ3CjkHZrWlLBTAelO3dg8QHeo5Z4mWQZuY9rU%2FTz5Mo1fec8KO0Yn3SILGYWo391nKTFnRCVEC56SzMUst7FhLgfrnezYG3AURXBx9DIU8LByUBCfZ5nxyuYe0%2BmDNrjlh0MewGd%2F8DnasGRE6hOeo1W9YvpcVDo2%2BNGzYn1fpiP5VpePfgdNFiNO02XIPH0FIkl6lQZLxfFSIBfYmbTkH6iW5kLUnm83Ke%2FtrXsuQQy4dox%2FSxaAwa84239xijFqXI4c66jatKBSqETJhnSswzmD5Oa62qVXpg5Ei2bgxoA8wCkH1SOyutVLwSMPQgj3RcVl%2Fv5x7bv4YjBOKdpVAHSLUc63Z5UOxhZbsJYr4xsYr2%2FNXTM87MwUh9KIlL5j95nWDWFnAw2tLKvgY6pgELHgmNmTR9tPrVw3xWgKH6xL1lUrDVw%2F94mTxojP04rjnIMu3Ashb9pRtkaSexMRpnHVIwMpCKWMGEJTZPFyLNiadJhbUfEbP37OB39NN%2BzlRdmRobGdcRjy8cYHs0vwD9r6cSZdX3NISEv%2FBCYqsdNen7IsbL9BVnd53C2E08yft6G2oOKkx%2B3HThdNvFF7R1CleG2HF42Y657GpRRj6XzqEhJfXs&X-Amz-Signature=33540df0fc8d53ea952c1f4af0375ce5f6a68c72885dd0ba8002aac0d8c08ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
