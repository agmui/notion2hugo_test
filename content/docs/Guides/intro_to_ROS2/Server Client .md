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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWPA5EZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgNWnFRtpMNPck6m05fVtbTYV0Cv4vRnf37UM91Ra7MAiEAwjVOTZzGIwqnM9yDCKrcxfBkT5s9kWHEp7TO7SSpoqQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkD8qvtkY9%2B2Cu3yCrcA9WX6hUVuFMmeSeTOy53F1fhgPCiXTC4G%2Bsa8VcLOxmWMt3WV0xSPaOzsh6h8%2F4EGVVF25qYG1yRUUPv4UG2a9FBY3Iq1g1IaJazGbtLYtcAifnxIzn6xNzEerhBLjolAH03SXWYb8%2BW9wr9TXSyFrPn0gIhiNYKACS8azd9tIffxxPouYnDW%2FmsY9UDB21k97%2Bh4BewJ%2Bb%2BP3NV0m77DOIFsp61kTOkNPAfSBNh5aKDNJzrTNWgXzER9xTJyCSV7QvjhjPt47Z%2BsKJCB9z%2FzYDP6mLHdz5CVcdbfkNkmMskziWWbB%2F9seOQm8Y%2Br2YLFryHb1YeIM7BBD9WUmmZkHtnCypz9o85yb5Y5bw00Ff5Vvlo0U3A6BtHYRxkVytrvvEeBmse02Eboe7ayUmFXLM%2FNY8vWSc4wVE%2F9jkvA82AQfk%2Bw%2FWJpn3XPe%2FsOXiFoL9b8Q8FQQ5qhDxcTf0y5Kp9FWRu38KbhJx5rP1X16vh0ZKOn4Uny2EXYHZirI3FZNklIsDUZZfQ2txvAA3z8dtdsKo3%2F41LnPAw%2FY0pGq0LGKCbiWNUssKKy41IrhCOMLxtIVXxtUvitNfN6xwoN98aJbN3Pgc3E9R%2B2G%2FZ0PsEsiXqPP4zdqE%2BAoDRMPv9vsMGOqUBZ0y8o5ghrCfJypv%2BTT8E8ZkPsKttoco9x24HBtBHCbDFx07yjmhDTw0B7UWj8z1ve5xsTFGs4NNRlLUaVzr3%2BkbEQxVM328x6Bjl1ux0MiE6tqWDhRVO6F3gEV2WEoJrvBH1DLwIRjoR8U%2FtI3TL%2FIVYMmLJ0062Cc%2B7T%2BObB0C%2F9MfMbO25SZwdXVvlja6YeWwVsgJlxiMoKm0PWZ%2Bfe8G8uI2e&X-Amz-Signature=1fe881b7a6187af9a58cf63d5ffaade422384cc53143b1ab89ede78c72e02a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWPA5EZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgNWnFRtpMNPck6m05fVtbTYV0Cv4vRnf37UM91Ra7MAiEAwjVOTZzGIwqnM9yDCKrcxfBkT5s9kWHEp7TO7SSpoqQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkD8qvtkY9%2B2Cu3yCrcA9WX6hUVuFMmeSeTOy53F1fhgPCiXTC4G%2Bsa8VcLOxmWMt3WV0xSPaOzsh6h8%2F4EGVVF25qYG1yRUUPv4UG2a9FBY3Iq1g1IaJazGbtLYtcAifnxIzn6xNzEerhBLjolAH03SXWYb8%2BW9wr9TXSyFrPn0gIhiNYKACS8azd9tIffxxPouYnDW%2FmsY9UDB21k97%2Bh4BewJ%2Bb%2BP3NV0m77DOIFsp61kTOkNPAfSBNh5aKDNJzrTNWgXzER9xTJyCSV7QvjhjPt47Z%2BsKJCB9z%2FzYDP6mLHdz5CVcdbfkNkmMskziWWbB%2F9seOQm8Y%2Br2YLFryHb1YeIM7BBD9WUmmZkHtnCypz9o85yb5Y5bw00Ff5Vvlo0U3A6BtHYRxkVytrvvEeBmse02Eboe7ayUmFXLM%2FNY8vWSc4wVE%2F9jkvA82AQfk%2Bw%2FWJpn3XPe%2FsOXiFoL9b8Q8FQQ5qhDxcTf0y5Kp9FWRu38KbhJx5rP1X16vh0ZKOn4Uny2EXYHZirI3FZNklIsDUZZfQ2txvAA3z8dtdsKo3%2F41LnPAw%2FY0pGq0LGKCbiWNUssKKy41IrhCOMLxtIVXxtUvitNfN6xwoN98aJbN3Pgc3E9R%2B2G%2FZ0PsEsiXqPP4zdqE%2BAoDRMPv9vsMGOqUBZ0y8o5ghrCfJypv%2BTT8E8ZkPsKttoco9x24HBtBHCbDFx07yjmhDTw0B7UWj8z1ve5xsTFGs4NNRlLUaVzr3%2BkbEQxVM328x6Bjl1ux0MiE6tqWDhRVO6F3gEV2WEoJrvBH1DLwIRjoR8U%2FtI3TL%2FIVYMmLJ0062Cc%2B7T%2BObB0C%2F9MfMbO25SZwdXVvlja6YeWwVsgJlxiMoKm0PWZ%2Bfe8G8uI2e&X-Amz-Signature=d9e30cffbb95c6957fdd2f279c213cc0917a0535cb05dd8488a62d5ad069f012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWPA5EZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgNWnFRtpMNPck6m05fVtbTYV0Cv4vRnf37UM91Ra7MAiEAwjVOTZzGIwqnM9yDCKrcxfBkT5s9kWHEp7TO7SSpoqQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkD8qvtkY9%2B2Cu3yCrcA9WX6hUVuFMmeSeTOy53F1fhgPCiXTC4G%2Bsa8VcLOxmWMt3WV0xSPaOzsh6h8%2F4EGVVF25qYG1yRUUPv4UG2a9FBY3Iq1g1IaJazGbtLYtcAifnxIzn6xNzEerhBLjolAH03SXWYb8%2BW9wr9TXSyFrPn0gIhiNYKACS8azd9tIffxxPouYnDW%2FmsY9UDB21k97%2Bh4BewJ%2Bb%2BP3NV0m77DOIFsp61kTOkNPAfSBNh5aKDNJzrTNWgXzER9xTJyCSV7QvjhjPt47Z%2BsKJCB9z%2FzYDP6mLHdz5CVcdbfkNkmMskziWWbB%2F9seOQm8Y%2Br2YLFryHb1YeIM7BBD9WUmmZkHtnCypz9o85yb5Y5bw00Ff5Vvlo0U3A6BtHYRxkVytrvvEeBmse02Eboe7ayUmFXLM%2FNY8vWSc4wVE%2F9jkvA82AQfk%2Bw%2FWJpn3XPe%2FsOXiFoL9b8Q8FQQ5qhDxcTf0y5Kp9FWRu38KbhJx5rP1X16vh0ZKOn4Uny2EXYHZirI3FZNklIsDUZZfQ2txvAA3z8dtdsKo3%2F41LnPAw%2FY0pGq0LGKCbiWNUssKKy41IrhCOMLxtIVXxtUvitNfN6xwoN98aJbN3Pgc3E9R%2B2G%2FZ0PsEsiXqPP4zdqE%2BAoDRMPv9vsMGOqUBZ0y8o5ghrCfJypv%2BTT8E8ZkPsKttoco9x24HBtBHCbDFx07yjmhDTw0B7UWj8z1ve5xsTFGs4NNRlLUaVzr3%2BkbEQxVM328x6Bjl1ux0MiE6tqWDhRVO6F3gEV2WEoJrvBH1DLwIRjoR8U%2FtI3TL%2FIVYMmLJ0062Cc%2B7T%2BObB0C%2F9MfMbO25SZwdXVvlja6YeWwVsgJlxiMoKm0PWZ%2Bfe8G8uI2e&X-Amz-Signature=f70eff5a187d1d818ed73f3c26227dc98c10a2877bb3dd9bc6474a277ffd6341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWPA5EZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgNWnFRtpMNPck6m05fVtbTYV0Cv4vRnf37UM91Ra7MAiEAwjVOTZzGIwqnM9yDCKrcxfBkT5s9kWHEp7TO7SSpoqQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkD8qvtkY9%2B2Cu3yCrcA9WX6hUVuFMmeSeTOy53F1fhgPCiXTC4G%2Bsa8VcLOxmWMt3WV0xSPaOzsh6h8%2F4EGVVF25qYG1yRUUPv4UG2a9FBY3Iq1g1IaJazGbtLYtcAifnxIzn6xNzEerhBLjolAH03SXWYb8%2BW9wr9TXSyFrPn0gIhiNYKACS8azd9tIffxxPouYnDW%2FmsY9UDB21k97%2Bh4BewJ%2Bb%2BP3NV0m77DOIFsp61kTOkNPAfSBNh5aKDNJzrTNWgXzER9xTJyCSV7QvjhjPt47Z%2BsKJCB9z%2FzYDP6mLHdz5CVcdbfkNkmMskziWWbB%2F9seOQm8Y%2Br2YLFryHb1YeIM7BBD9WUmmZkHtnCypz9o85yb5Y5bw00Ff5Vvlo0U3A6BtHYRxkVytrvvEeBmse02Eboe7ayUmFXLM%2FNY8vWSc4wVE%2F9jkvA82AQfk%2Bw%2FWJpn3XPe%2FsOXiFoL9b8Q8FQQ5qhDxcTf0y5Kp9FWRu38KbhJx5rP1X16vh0ZKOn4Uny2EXYHZirI3FZNklIsDUZZfQ2txvAA3z8dtdsKo3%2F41LnPAw%2FY0pGq0LGKCbiWNUssKKy41IrhCOMLxtIVXxtUvitNfN6xwoN98aJbN3Pgc3E9R%2B2G%2FZ0PsEsiXqPP4zdqE%2BAoDRMPv9vsMGOqUBZ0y8o5ghrCfJypv%2BTT8E8ZkPsKttoco9x24HBtBHCbDFx07yjmhDTw0B7UWj8z1ve5xsTFGs4NNRlLUaVzr3%2BkbEQxVM328x6Bjl1ux0MiE6tqWDhRVO6F3gEV2WEoJrvBH1DLwIRjoR8U%2FtI3TL%2FIVYMmLJ0062Cc%2B7T%2BObB0C%2F9MfMbO25SZwdXVvlja6YeWwVsgJlxiMoKm0PWZ%2Bfe8G8uI2e&X-Amz-Signature=ae716c8b80b0de9a9d08d3457872322684863b522f811cc66a319d4b7738ee92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWPA5EZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgNWnFRtpMNPck6m05fVtbTYV0Cv4vRnf37UM91Ra7MAiEAwjVOTZzGIwqnM9yDCKrcxfBkT5s9kWHEp7TO7SSpoqQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkD8qvtkY9%2B2Cu3yCrcA9WX6hUVuFMmeSeTOy53F1fhgPCiXTC4G%2Bsa8VcLOxmWMt3WV0xSPaOzsh6h8%2F4EGVVF25qYG1yRUUPv4UG2a9FBY3Iq1g1IaJazGbtLYtcAifnxIzn6xNzEerhBLjolAH03SXWYb8%2BW9wr9TXSyFrPn0gIhiNYKACS8azd9tIffxxPouYnDW%2FmsY9UDB21k97%2Bh4BewJ%2Bb%2BP3NV0m77DOIFsp61kTOkNPAfSBNh5aKDNJzrTNWgXzER9xTJyCSV7QvjhjPt47Z%2BsKJCB9z%2FzYDP6mLHdz5CVcdbfkNkmMskziWWbB%2F9seOQm8Y%2Br2YLFryHb1YeIM7BBD9WUmmZkHtnCypz9o85yb5Y5bw00Ff5Vvlo0U3A6BtHYRxkVytrvvEeBmse02Eboe7ayUmFXLM%2FNY8vWSc4wVE%2F9jkvA82AQfk%2Bw%2FWJpn3XPe%2FsOXiFoL9b8Q8FQQ5qhDxcTf0y5Kp9FWRu38KbhJx5rP1X16vh0ZKOn4Uny2EXYHZirI3FZNklIsDUZZfQ2txvAA3z8dtdsKo3%2F41LnPAw%2FY0pGq0LGKCbiWNUssKKy41IrhCOMLxtIVXxtUvitNfN6xwoN98aJbN3Pgc3E9R%2B2G%2FZ0PsEsiXqPP4zdqE%2BAoDRMPv9vsMGOqUBZ0y8o5ghrCfJypv%2BTT8E8ZkPsKttoco9x24HBtBHCbDFx07yjmhDTw0B7UWj8z1ve5xsTFGs4NNRlLUaVzr3%2BkbEQxVM328x6Bjl1ux0MiE6tqWDhRVO6F3gEV2WEoJrvBH1DLwIRjoR8U%2FtI3TL%2FIVYMmLJ0062Cc%2B7T%2BObB0C%2F9MfMbO25SZwdXVvlja6YeWwVsgJlxiMoKm0PWZ%2Bfe8G8uI2e&X-Amz-Signature=b9a9eb288536effc00354ccfe5f263a07219b1bc2431f5b3634bd792707e8a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
