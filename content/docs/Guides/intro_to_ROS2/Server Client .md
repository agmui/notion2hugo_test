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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCBKDNB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnyItKbY2tGV5je%2BDvLw9KVEyWARnJCQNiLafJ%2BbSYUwIgCe6G4aY4aTIQT6XY%2B%2BvZnjYEZCBzMXL9xdosgLkcvNMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJqimcGOR8M6Fzk9BSrcAzgvAZgAgA3r5gp7jae4D4%2Bn%2FSCTfoTaJbH0dAFpddIoNRI%2FtHkiWrkIrvZn2X1X4detABU5l2AiKLQscFie9I%2Bag8WITUKtgwtEa2g9dK51huRy%2F3uxO0xMG3%2BqwV4Gxux2s1vG6P7NJCqteFVbqZhLgHJtJj3gLZ82CURev46%2FK3WFEIiIbUiGIzfSh%2FAvbpsPzhf9FebNwG46HxqwWBYba7Z7%2FIHOA692xgKQyJBA9x8Xb9yZBDVoQxtrzwjt58bt9auSaHtZ227BcSuEnv6LxY74jh6BhrGxxtyX8ER2CypZX4xK4nbGROEJYgdqXYpL6gpbLuhN9ARPmjn72IGtqA7sW0t0OXQe6hKtnsZuWEy143%2Bl9QNlyfF8x5vBAWCSxsuAZtoDu185pd%2FXZjnO%2BfwFb70whECt3oPwlLSNXxoFj7i4GXgK5IaJLLIWm989%2BbBF0G3BHSqxvq7vL9Cpjt895oG%2FiU1zMJXWXJn63ZkLyu3n2D%2B%2BfF2rZsW6cG0sxQOgeSljroNYGDPDd6LlxXRRzVoylfviFsbHj%2Ban3vxHgvJ283cKHHoh370buQoIDY50V%2B2pQxiODuwGmYbCqj%2BbQfM9Xtdxy6QDan%2BCrh9DDliv%2Bk8ZrRP2MMnrur0GOqUBXkIohMN8FDNPqOtkws1U2g9uAu%2BiczC9anh0AK0iwatcx7lFUGzdiRjn9kYYXrcgR5UChdQ8x%2Bq10rD068PFwQFuXfeX1EsDhFaFiSy2M%2Bzg08JtQbbYs5UsmVlYAiMkf2KuI%2F8scTncTWaxE6gcmcb2LWq8P6hMqFI8viKCtnB1KnpzDeq3w%2FqQO7nzgtRe9tat%2FPMTBuzmh8zBD01I6Fuo5Kpo&X-Amz-Signature=588fdf82f0c58488e1c40a5a72a9718f56c59431feb2e8117b8e021717368de2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCBKDNB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnyItKbY2tGV5je%2BDvLw9KVEyWARnJCQNiLafJ%2BbSYUwIgCe6G4aY4aTIQT6XY%2B%2BvZnjYEZCBzMXL9xdosgLkcvNMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJqimcGOR8M6Fzk9BSrcAzgvAZgAgA3r5gp7jae4D4%2Bn%2FSCTfoTaJbH0dAFpddIoNRI%2FtHkiWrkIrvZn2X1X4detABU5l2AiKLQscFie9I%2Bag8WITUKtgwtEa2g9dK51huRy%2F3uxO0xMG3%2BqwV4Gxux2s1vG6P7NJCqteFVbqZhLgHJtJj3gLZ82CURev46%2FK3WFEIiIbUiGIzfSh%2FAvbpsPzhf9FebNwG46HxqwWBYba7Z7%2FIHOA692xgKQyJBA9x8Xb9yZBDVoQxtrzwjt58bt9auSaHtZ227BcSuEnv6LxY74jh6BhrGxxtyX8ER2CypZX4xK4nbGROEJYgdqXYpL6gpbLuhN9ARPmjn72IGtqA7sW0t0OXQe6hKtnsZuWEy143%2Bl9QNlyfF8x5vBAWCSxsuAZtoDu185pd%2FXZjnO%2BfwFb70whECt3oPwlLSNXxoFj7i4GXgK5IaJLLIWm989%2BbBF0G3BHSqxvq7vL9Cpjt895oG%2FiU1zMJXWXJn63ZkLyu3n2D%2B%2BfF2rZsW6cG0sxQOgeSljroNYGDPDd6LlxXRRzVoylfviFsbHj%2Ban3vxHgvJ283cKHHoh370buQoIDY50V%2B2pQxiODuwGmYbCqj%2BbQfM9Xtdxy6QDan%2BCrh9DDliv%2Bk8ZrRP2MMnrur0GOqUBXkIohMN8FDNPqOtkws1U2g9uAu%2BiczC9anh0AK0iwatcx7lFUGzdiRjn9kYYXrcgR5UChdQ8x%2Bq10rD068PFwQFuXfeX1EsDhFaFiSy2M%2Bzg08JtQbbYs5UsmVlYAiMkf2KuI%2F8scTncTWaxE6gcmcb2LWq8P6hMqFI8viKCtnB1KnpzDeq3w%2FqQO7nzgtRe9tat%2FPMTBuzmh8zBD01I6Fuo5Kpo&X-Amz-Signature=d0ba7941ff1ae25a87dc9a96cf4e495c904508fbb7bbd458555cdbb5f142a1e3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCBKDNB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnyItKbY2tGV5je%2BDvLw9KVEyWARnJCQNiLafJ%2BbSYUwIgCe6G4aY4aTIQT6XY%2B%2BvZnjYEZCBzMXL9xdosgLkcvNMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJqimcGOR8M6Fzk9BSrcAzgvAZgAgA3r5gp7jae4D4%2Bn%2FSCTfoTaJbH0dAFpddIoNRI%2FtHkiWrkIrvZn2X1X4detABU5l2AiKLQscFie9I%2Bag8WITUKtgwtEa2g9dK51huRy%2F3uxO0xMG3%2BqwV4Gxux2s1vG6P7NJCqteFVbqZhLgHJtJj3gLZ82CURev46%2FK3WFEIiIbUiGIzfSh%2FAvbpsPzhf9FebNwG46HxqwWBYba7Z7%2FIHOA692xgKQyJBA9x8Xb9yZBDVoQxtrzwjt58bt9auSaHtZ227BcSuEnv6LxY74jh6BhrGxxtyX8ER2CypZX4xK4nbGROEJYgdqXYpL6gpbLuhN9ARPmjn72IGtqA7sW0t0OXQe6hKtnsZuWEy143%2Bl9QNlyfF8x5vBAWCSxsuAZtoDu185pd%2FXZjnO%2BfwFb70whECt3oPwlLSNXxoFj7i4GXgK5IaJLLIWm989%2BbBF0G3BHSqxvq7vL9Cpjt895oG%2FiU1zMJXWXJn63ZkLyu3n2D%2B%2BfF2rZsW6cG0sxQOgeSljroNYGDPDd6LlxXRRzVoylfviFsbHj%2Ban3vxHgvJ283cKHHoh370buQoIDY50V%2B2pQxiODuwGmYbCqj%2BbQfM9Xtdxy6QDan%2BCrh9DDliv%2Bk8ZrRP2MMnrur0GOqUBXkIohMN8FDNPqOtkws1U2g9uAu%2BiczC9anh0AK0iwatcx7lFUGzdiRjn9kYYXrcgR5UChdQ8x%2Bq10rD068PFwQFuXfeX1EsDhFaFiSy2M%2Bzg08JtQbbYs5UsmVlYAiMkf2KuI%2F8scTncTWaxE6gcmcb2LWq8P6hMqFI8viKCtnB1KnpzDeq3w%2FqQO7nzgtRe9tat%2FPMTBuzmh8zBD01I6Fuo5Kpo&X-Amz-Signature=dabc65fb67bcc757b2b96890b0b5fa0b653bf035d74ab0fb8706653366176aec&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCBKDNB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnyItKbY2tGV5je%2BDvLw9KVEyWARnJCQNiLafJ%2BbSYUwIgCe6G4aY4aTIQT6XY%2B%2BvZnjYEZCBzMXL9xdosgLkcvNMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJqimcGOR8M6Fzk9BSrcAzgvAZgAgA3r5gp7jae4D4%2Bn%2FSCTfoTaJbH0dAFpddIoNRI%2FtHkiWrkIrvZn2X1X4detABU5l2AiKLQscFie9I%2Bag8WITUKtgwtEa2g9dK51huRy%2F3uxO0xMG3%2BqwV4Gxux2s1vG6P7NJCqteFVbqZhLgHJtJj3gLZ82CURev46%2FK3WFEIiIbUiGIzfSh%2FAvbpsPzhf9FebNwG46HxqwWBYba7Z7%2FIHOA692xgKQyJBA9x8Xb9yZBDVoQxtrzwjt58bt9auSaHtZ227BcSuEnv6LxY74jh6BhrGxxtyX8ER2CypZX4xK4nbGROEJYgdqXYpL6gpbLuhN9ARPmjn72IGtqA7sW0t0OXQe6hKtnsZuWEy143%2Bl9QNlyfF8x5vBAWCSxsuAZtoDu185pd%2FXZjnO%2BfwFb70whECt3oPwlLSNXxoFj7i4GXgK5IaJLLIWm989%2BbBF0G3BHSqxvq7vL9Cpjt895oG%2FiU1zMJXWXJn63ZkLyu3n2D%2B%2BfF2rZsW6cG0sxQOgeSljroNYGDPDd6LlxXRRzVoylfviFsbHj%2Ban3vxHgvJ283cKHHoh370buQoIDY50V%2B2pQxiODuwGmYbCqj%2BbQfM9Xtdxy6QDan%2BCrh9DDliv%2Bk8ZrRP2MMnrur0GOqUBXkIohMN8FDNPqOtkws1U2g9uAu%2BiczC9anh0AK0iwatcx7lFUGzdiRjn9kYYXrcgR5UChdQ8x%2Bq10rD068PFwQFuXfeX1EsDhFaFiSy2M%2Bzg08JtQbbYs5UsmVlYAiMkf2KuI%2F8scTncTWaxE6gcmcb2LWq8P6hMqFI8viKCtnB1KnpzDeq3w%2FqQO7nzgtRe9tat%2FPMTBuzmh8zBD01I6Fuo5Kpo&X-Amz-Signature=8a5b56a9225155e7ec0ca65ba45792ab46a2befc808c23f64768e473b4e926ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCBKDNB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnyItKbY2tGV5je%2BDvLw9KVEyWARnJCQNiLafJ%2BbSYUwIgCe6G4aY4aTIQT6XY%2B%2BvZnjYEZCBzMXL9xdosgLkcvNMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJqimcGOR8M6Fzk9BSrcAzgvAZgAgA3r5gp7jae4D4%2Bn%2FSCTfoTaJbH0dAFpddIoNRI%2FtHkiWrkIrvZn2X1X4detABU5l2AiKLQscFie9I%2Bag8WITUKtgwtEa2g9dK51huRy%2F3uxO0xMG3%2BqwV4Gxux2s1vG6P7NJCqteFVbqZhLgHJtJj3gLZ82CURev46%2FK3WFEIiIbUiGIzfSh%2FAvbpsPzhf9FebNwG46HxqwWBYba7Z7%2FIHOA692xgKQyJBA9x8Xb9yZBDVoQxtrzwjt58bt9auSaHtZ227BcSuEnv6LxY74jh6BhrGxxtyX8ER2CypZX4xK4nbGROEJYgdqXYpL6gpbLuhN9ARPmjn72IGtqA7sW0t0OXQe6hKtnsZuWEy143%2Bl9QNlyfF8x5vBAWCSxsuAZtoDu185pd%2FXZjnO%2BfwFb70whECt3oPwlLSNXxoFj7i4GXgK5IaJLLIWm989%2BbBF0G3BHSqxvq7vL9Cpjt895oG%2FiU1zMJXWXJn63ZkLyu3n2D%2B%2BfF2rZsW6cG0sxQOgeSljroNYGDPDd6LlxXRRzVoylfviFsbHj%2Ban3vxHgvJ283cKHHoh370buQoIDY50V%2B2pQxiODuwGmYbCqj%2BbQfM9Xtdxy6QDan%2BCrh9DDliv%2Bk8ZrRP2MMnrur0GOqUBXkIohMN8FDNPqOtkws1U2g9uAu%2BiczC9anh0AK0iwatcx7lFUGzdiRjn9kYYXrcgR5UChdQ8x%2Bq10rD068PFwQFuXfeX1EsDhFaFiSy2M%2Bzg08JtQbbYs5UsmVlYAiMkf2KuI%2F8scTncTWaxE6gcmcb2LWq8P6hMqFI8viKCtnB1KnpzDeq3w%2FqQO7nzgtRe9tat%2FPMTBuzmh8zBD01I6Fuo5Kpo&X-Amz-Signature=4d7100bcf35890c4d6b39c2e5c46e92fe49e17103182c9efca1454dedb9f9304&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
