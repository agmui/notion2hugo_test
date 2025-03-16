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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEH7BNQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtruia3RFOQs0ZRLj3cVAC2THpUQ0xZvMsZus2p7sD7gIgKeI9ESP3BK6GRRPJet1zsR7pSe0vSKxksgSRXAtwh2cq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMpWpE8PB0pEqXQmISrcAyrz5cxY8YnLdM5o5gxbgSpHffKyBQiueX32ZyHQcYXsXa17anO3uARyZ%2BXkNBL9khZiog%2Bd6EkMxjZBDgztikH6qgKc09WmlBZWtJpkoYPjLMkU5mE6qa0Dc98rVS9DLVY%2BD3gXABgLLEXAA5vwEyXWIq%2F1%2FHCsSK8hEK8%2Fqfzf0%2Bq%2BDTB%2F9ve9ztKDfsTBv%2FDe2PWgdH22utPDAWrCWahtYtBDTcYn4Cb8bC3n8zSeMm3zpiSOYGMojf%2FMUIw6eoeZLSQpqIAIg1lAIEk6BRGCdePbN8s8V7INzx3mg3jZl8VFg3Vaxgor8Bkw70OaLNZ6THVZ0n9qt01R%2Ba8tYK3ngxfNNF9%2Bq%2Bkd31PWgpt%2ByRhUM5fAViZwp2WyeBLikfRZY%2B64i9keKeL2Jrz61i4vXKWjBQyE841VnIk9GLReckJg6WJ7vd3lgiirc86rPloROg8Z922wIz%2F9nerr0SMYJyuJQ%2BG%2FEbJWhUxWz6jwB8NW%2FgwX%2BpyODJmM%2BPd%2BuLQxr9wvXVq38Uo0RZtvMcxFE5cE6d%2FtfKQzmlgURtMQNvmypSikp5sc0iZa9k9QncYt%2BFEAw8gRnO9hKjT2Ao4fYVe3YsUesK0jncnoy%2F%2BMCy7tmHSBgHqpMnH5MOSB2L4GOqUBFvAAAVpLIeuioBW5HKd0%2Bhtwf7rlTHmmgVJCfOxo211w4BrqMY2scsfxc%2Bg0X26fDiqxd1eRww1FedQMRneyfxamvROpyYBWvqcfKU%2FTo8vzZqgTFLsHfx4UzYjPr2OGEtN0Alja6dSlI8QQkdpd7ayNTrWVwAGL1bO0UX4RHnqCNUs4xyDgC9eNtFWLE3dxBuFQEiBxD5Zr1uZqAo2NwnBaazuu&X-Amz-Signature=bd15af32d5fe063d5497eefc1ed898f63face836176abbc56123dd76c7362b95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEH7BNQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtruia3RFOQs0ZRLj3cVAC2THpUQ0xZvMsZus2p7sD7gIgKeI9ESP3BK6GRRPJet1zsR7pSe0vSKxksgSRXAtwh2cq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMpWpE8PB0pEqXQmISrcAyrz5cxY8YnLdM5o5gxbgSpHffKyBQiueX32ZyHQcYXsXa17anO3uARyZ%2BXkNBL9khZiog%2Bd6EkMxjZBDgztikH6qgKc09WmlBZWtJpkoYPjLMkU5mE6qa0Dc98rVS9DLVY%2BD3gXABgLLEXAA5vwEyXWIq%2F1%2FHCsSK8hEK8%2Fqfzf0%2Bq%2BDTB%2F9ve9ztKDfsTBv%2FDe2PWgdH22utPDAWrCWahtYtBDTcYn4Cb8bC3n8zSeMm3zpiSOYGMojf%2FMUIw6eoeZLSQpqIAIg1lAIEk6BRGCdePbN8s8V7INzx3mg3jZl8VFg3Vaxgor8Bkw70OaLNZ6THVZ0n9qt01R%2Ba8tYK3ngxfNNF9%2Bq%2Bkd31PWgpt%2ByRhUM5fAViZwp2WyeBLikfRZY%2B64i9keKeL2Jrz61i4vXKWjBQyE841VnIk9GLReckJg6WJ7vd3lgiirc86rPloROg8Z922wIz%2F9nerr0SMYJyuJQ%2BG%2FEbJWhUxWz6jwB8NW%2FgwX%2BpyODJmM%2BPd%2BuLQxr9wvXVq38Uo0RZtvMcxFE5cE6d%2FtfKQzmlgURtMQNvmypSikp5sc0iZa9k9QncYt%2BFEAw8gRnO9hKjT2Ao4fYVe3YsUesK0jncnoy%2F%2BMCy7tmHSBgHqpMnH5MOSB2L4GOqUBFvAAAVpLIeuioBW5HKd0%2Bhtwf7rlTHmmgVJCfOxo211w4BrqMY2scsfxc%2Bg0X26fDiqxd1eRww1FedQMRneyfxamvROpyYBWvqcfKU%2FTo8vzZqgTFLsHfx4UzYjPr2OGEtN0Alja6dSlI8QQkdpd7ayNTrWVwAGL1bO0UX4RHnqCNUs4xyDgC9eNtFWLE3dxBuFQEiBxD5Zr1uZqAo2NwnBaazuu&X-Amz-Signature=a0a51e48a8c09a0f4593bcd475765437c5d56dc300705abe1db09a1d2474945d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEH7BNQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtruia3RFOQs0ZRLj3cVAC2THpUQ0xZvMsZus2p7sD7gIgKeI9ESP3BK6GRRPJet1zsR7pSe0vSKxksgSRXAtwh2cq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMpWpE8PB0pEqXQmISrcAyrz5cxY8YnLdM5o5gxbgSpHffKyBQiueX32ZyHQcYXsXa17anO3uARyZ%2BXkNBL9khZiog%2Bd6EkMxjZBDgztikH6qgKc09WmlBZWtJpkoYPjLMkU5mE6qa0Dc98rVS9DLVY%2BD3gXABgLLEXAA5vwEyXWIq%2F1%2FHCsSK8hEK8%2Fqfzf0%2Bq%2BDTB%2F9ve9ztKDfsTBv%2FDe2PWgdH22utPDAWrCWahtYtBDTcYn4Cb8bC3n8zSeMm3zpiSOYGMojf%2FMUIw6eoeZLSQpqIAIg1lAIEk6BRGCdePbN8s8V7INzx3mg3jZl8VFg3Vaxgor8Bkw70OaLNZ6THVZ0n9qt01R%2Ba8tYK3ngxfNNF9%2Bq%2Bkd31PWgpt%2ByRhUM5fAViZwp2WyeBLikfRZY%2B64i9keKeL2Jrz61i4vXKWjBQyE841VnIk9GLReckJg6WJ7vd3lgiirc86rPloROg8Z922wIz%2F9nerr0SMYJyuJQ%2BG%2FEbJWhUxWz6jwB8NW%2FgwX%2BpyODJmM%2BPd%2BuLQxr9wvXVq38Uo0RZtvMcxFE5cE6d%2FtfKQzmlgURtMQNvmypSikp5sc0iZa9k9QncYt%2BFEAw8gRnO9hKjT2Ao4fYVe3YsUesK0jncnoy%2F%2BMCy7tmHSBgHqpMnH5MOSB2L4GOqUBFvAAAVpLIeuioBW5HKd0%2Bhtwf7rlTHmmgVJCfOxo211w4BrqMY2scsfxc%2Bg0X26fDiqxd1eRww1FedQMRneyfxamvROpyYBWvqcfKU%2FTo8vzZqgTFLsHfx4UzYjPr2OGEtN0Alja6dSlI8QQkdpd7ayNTrWVwAGL1bO0UX4RHnqCNUs4xyDgC9eNtFWLE3dxBuFQEiBxD5Zr1uZqAo2NwnBaazuu&X-Amz-Signature=4791b9bdc5f5c35b86629d6f9d2940bd0a71d721b61ea92322ac745815915172&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEH7BNQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtruia3RFOQs0ZRLj3cVAC2THpUQ0xZvMsZus2p7sD7gIgKeI9ESP3BK6GRRPJet1zsR7pSe0vSKxksgSRXAtwh2cq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMpWpE8PB0pEqXQmISrcAyrz5cxY8YnLdM5o5gxbgSpHffKyBQiueX32ZyHQcYXsXa17anO3uARyZ%2BXkNBL9khZiog%2Bd6EkMxjZBDgztikH6qgKc09WmlBZWtJpkoYPjLMkU5mE6qa0Dc98rVS9DLVY%2BD3gXABgLLEXAA5vwEyXWIq%2F1%2FHCsSK8hEK8%2Fqfzf0%2Bq%2BDTB%2F9ve9ztKDfsTBv%2FDe2PWgdH22utPDAWrCWahtYtBDTcYn4Cb8bC3n8zSeMm3zpiSOYGMojf%2FMUIw6eoeZLSQpqIAIg1lAIEk6BRGCdePbN8s8V7INzx3mg3jZl8VFg3Vaxgor8Bkw70OaLNZ6THVZ0n9qt01R%2Ba8tYK3ngxfNNF9%2Bq%2Bkd31PWgpt%2ByRhUM5fAViZwp2WyeBLikfRZY%2B64i9keKeL2Jrz61i4vXKWjBQyE841VnIk9GLReckJg6WJ7vd3lgiirc86rPloROg8Z922wIz%2F9nerr0SMYJyuJQ%2BG%2FEbJWhUxWz6jwB8NW%2FgwX%2BpyODJmM%2BPd%2BuLQxr9wvXVq38Uo0RZtvMcxFE5cE6d%2FtfKQzmlgURtMQNvmypSikp5sc0iZa9k9QncYt%2BFEAw8gRnO9hKjT2Ao4fYVe3YsUesK0jncnoy%2F%2BMCy7tmHSBgHqpMnH5MOSB2L4GOqUBFvAAAVpLIeuioBW5HKd0%2Bhtwf7rlTHmmgVJCfOxo211w4BrqMY2scsfxc%2Bg0X26fDiqxd1eRww1FedQMRneyfxamvROpyYBWvqcfKU%2FTo8vzZqgTFLsHfx4UzYjPr2OGEtN0Alja6dSlI8QQkdpd7ayNTrWVwAGL1bO0UX4RHnqCNUs4xyDgC9eNtFWLE3dxBuFQEiBxD5Zr1uZqAo2NwnBaazuu&X-Amz-Signature=0e643d7e4130f4abbe725649f58f18be8b91620f6940a54db3a1c06048c44c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEH7BNQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtruia3RFOQs0ZRLj3cVAC2THpUQ0xZvMsZus2p7sD7gIgKeI9ESP3BK6GRRPJet1zsR7pSe0vSKxksgSRXAtwh2cq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMpWpE8PB0pEqXQmISrcAyrz5cxY8YnLdM5o5gxbgSpHffKyBQiueX32ZyHQcYXsXa17anO3uARyZ%2BXkNBL9khZiog%2Bd6EkMxjZBDgztikH6qgKc09WmlBZWtJpkoYPjLMkU5mE6qa0Dc98rVS9DLVY%2BD3gXABgLLEXAA5vwEyXWIq%2F1%2FHCsSK8hEK8%2Fqfzf0%2Bq%2BDTB%2F9ve9ztKDfsTBv%2FDe2PWgdH22utPDAWrCWahtYtBDTcYn4Cb8bC3n8zSeMm3zpiSOYGMojf%2FMUIw6eoeZLSQpqIAIg1lAIEk6BRGCdePbN8s8V7INzx3mg3jZl8VFg3Vaxgor8Bkw70OaLNZ6THVZ0n9qt01R%2Ba8tYK3ngxfNNF9%2Bq%2Bkd31PWgpt%2ByRhUM5fAViZwp2WyeBLikfRZY%2B64i9keKeL2Jrz61i4vXKWjBQyE841VnIk9GLReckJg6WJ7vd3lgiirc86rPloROg8Z922wIz%2F9nerr0SMYJyuJQ%2BG%2FEbJWhUxWz6jwB8NW%2FgwX%2BpyODJmM%2BPd%2BuLQxr9wvXVq38Uo0RZtvMcxFE5cE6d%2FtfKQzmlgURtMQNvmypSikp5sc0iZa9k9QncYt%2BFEAw8gRnO9hKjT2Ao4fYVe3YsUesK0jncnoy%2F%2BMCy7tmHSBgHqpMnH5MOSB2L4GOqUBFvAAAVpLIeuioBW5HKd0%2Bhtwf7rlTHmmgVJCfOxo211w4BrqMY2scsfxc%2Bg0X26fDiqxd1eRww1FedQMRneyfxamvROpyYBWvqcfKU%2FTo8vzZqgTFLsHfx4UzYjPr2OGEtN0Alja6dSlI8QQkdpd7ayNTrWVwAGL1bO0UX4RHnqCNUs4xyDgC9eNtFWLE3dxBuFQEiBxD5Zr1uZqAo2NwnBaazuu&X-Amz-Signature=51a4a4af70477f9d21e32fce9d33925c0abaa00e3055911e0a7dd82ee77cc1d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
