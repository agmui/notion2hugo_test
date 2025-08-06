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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZUBYF5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBHGh9J8%2BoiCkWQlCtK7iJc1yTFcxas6YktOVofYdbqNAiEAxlJvFIUuh3EJyOf5DQ%2FG7FzH5ppngj14K54ELF1w3%2BEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDdIhDVw9nWdH98XKyrcAxuSW8eqnzbnkz1UzuPsy8njpX7HA6KsRePkscASk3XeDFRY7hrDwILexRM2ynVApp8E8sF5SNVHA1UUcO3ssYu29BdrkL5PrHKVToFqlloTIoqJsLQuqdkTvKKvcOAIrgZiOx8a%2FwnCtfG%2Bh449pHhZ3NhEmLr6b6SU3KkJEkNJV%2B5hM5ymsjvUHZj5YNdYvSeV52PSoMfXYJ5sJfAWAq%2BcD5P5mb2Lroz6vmzkRVd6IeO0Dqx98%2FpAERmZE1SAdzxvkaE8yNAKlmNzZN3or7bcE0%2BIahSmtE%2BzaGpsghbittgJlUiIXwRLl5KxpPok64kR%2Bxx5dJIbfGndWOE%2F3gubiKX5gcNS%2BTeNkik9RkrMJpA8xmLWqSF5YXd5anMoFR3YdfSOpO9aP8uaZoRtU4oGXTnLtyUDzPAc4rzUZ4xNduBYAtiVJ%2BKdP9TLIsfLNJfTCUUpvSGj43t5g9szf85WNHNK1oRPyxLwITsPvX4eGDlU3K1s3eUEBnDzA9QW4MNVSMk%2Bnh5tA7cXDzx%2B36Rf4YMQKjw8wO10TLxzu70g5HoqjRKaAgbPInLeaETR4gVKj0tW3TMZBX17HAyl8RWeWbhNYaW5KR1t%2FXhqLFSSYKgA8LTSG50UlPxWMJH7zcQGOqUBixb0ChwIALtUsQtXAfyz4h05wh5tb7GLmOqM7OXGoKZSU%2FpZsV6Y3E30qTawvdqWe%2FsQuyQZY9tIhskbC%2Be0jCly69a80xMTMlfbce26TUJA4GbamGekbGzbf8rUFZET7j9hZdblbxGH1NxKdm8R6TPO%2Bu4U7yv4YHbTTW0z4vMIBktrZsNPo9jk10v4LLdpEf6qCRQTtX8ET7tgBQmlSH7eWL5W&X-Amz-Signature=b48e7c452b5c162be08940f6238d787d8a3753796079305b637bca10e066d7d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZUBYF5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBHGh9J8%2BoiCkWQlCtK7iJc1yTFcxas6YktOVofYdbqNAiEAxlJvFIUuh3EJyOf5DQ%2FG7FzH5ppngj14K54ELF1w3%2BEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDdIhDVw9nWdH98XKyrcAxuSW8eqnzbnkz1UzuPsy8njpX7HA6KsRePkscASk3XeDFRY7hrDwILexRM2ynVApp8E8sF5SNVHA1UUcO3ssYu29BdrkL5PrHKVToFqlloTIoqJsLQuqdkTvKKvcOAIrgZiOx8a%2FwnCtfG%2Bh449pHhZ3NhEmLr6b6SU3KkJEkNJV%2B5hM5ymsjvUHZj5YNdYvSeV52PSoMfXYJ5sJfAWAq%2BcD5P5mb2Lroz6vmzkRVd6IeO0Dqx98%2FpAERmZE1SAdzxvkaE8yNAKlmNzZN3or7bcE0%2BIahSmtE%2BzaGpsghbittgJlUiIXwRLl5KxpPok64kR%2Bxx5dJIbfGndWOE%2F3gubiKX5gcNS%2BTeNkik9RkrMJpA8xmLWqSF5YXd5anMoFR3YdfSOpO9aP8uaZoRtU4oGXTnLtyUDzPAc4rzUZ4xNduBYAtiVJ%2BKdP9TLIsfLNJfTCUUpvSGj43t5g9szf85WNHNK1oRPyxLwITsPvX4eGDlU3K1s3eUEBnDzA9QW4MNVSMk%2Bnh5tA7cXDzx%2B36Rf4YMQKjw8wO10TLxzu70g5HoqjRKaAgbPInLeaETR4gVKj0tW3TMZBX17HAyl8RWeWbhNYaW5KR1t%2FXhqLFSSYKgA8LTSG50UlPxWMJH7zcQGOqUBixb0ChwIALtUsQtXAfyz4h05wh5tb7GLmOqM7OXGoKZSU%2FpZsV6Y3E30qTawvdqWe%2FsQuyQZY9tIhskbC%2Be0jCly69a80xMTMlfbce26TUJA4GbamGekbGzbf8rUFZET7j9hZdblbxGH1NxKdm8R6TPO%2Bu4U7yv4YHbTTW0z4vMIBktrZsNPo9jk10v4LLdpEf6qCRQTtX8ET7tgBQmlSH7eWL5W&X-Amz-Signature=b6486d409b7a5ca854e1bb0916cdac9d08d6dae7029ac188aca694a6ec0861f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZUBYF5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBHGh9J8%2BoiCkWQlCtK7iJc1yTFcxas6YktOVofYdbqNAiEAxlJvFIUuh3EJyOf5DQ%2FG7FzH5ppngj14K54ELF1w3%2BEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDdIhDVw9nWdH98XKyrcAxuSW8eqnzbnkz1UzuPsy8njpX7HA6KsRePkscASk3XeDFRY7hrDwILexRM2ynVApp8E8sF5SNVHA1UUcO3ssYu29BdrkL5PrHKVToFqlloTIoqJsLQuqdkTvKKvcOAIrgZiOx8a%2FwnCtfG%2Bh449pHhZ3NhEmLr6b6SU3KkJEkNJV%2B5hM5ymsjvUHZj5YNdYvSeV52PSoMfXYJ5sJfAWAq%2BcD5P5mb2Lroz6vmzkRVd6IeO0Dqx98%2FpAERmZE1SAdzxvkaE8yNAKlmNzZN3or7bcE0%2BIahSmtE%2BzaGpsghbittgJlUiIXwRLl5KxpPok64kR%2Bxx5dJIbfGndWOE%2F3gubiKX5gcNS%2BTeNkik9RkrMJpA8xmLWqSF5YXd5anMoFR3YdfSOpO9aP8uaZoRtU4oGXTnLtyUDzPAc4rzUZ4xNduBYAtiVJ%2BKdP9TLIsfLNJfTCUUpvSGj43t5g9szf85WNHNK1oRPyxLwITsPvX4eGDlU3K1s3eUEBnDzA9QW4MNVSMk%2Bnh5tA7cXDzx%2B36Rf4YMQKjw8wO10TLxzu70g5HoqjRKaAgbPInLeaETR4gVKj0tW3TMZBX17HAyl8RWeWbhNYaW5KR1t%2FXhqLFSSYKgA8LTSG50UlPxWMJH7zcQGOqUBixb0ChwIALtUsQtXAfyz4h05wh5tb7GLmOqM7OXGoKZSU%2FpZsV6Y3E30qTawvdqWe%2FsQuyQZY9tIhskbC%2Be0jCly69a80xMTMlfbce26TUJA4GbamGekbGzbf8rUFZET7j9hZdblbxGH1NxKdm8R6TPO%2Bu4U7yv4YHbTTW0z4vMIBktrZsNPo9jk10v4LLdpEf6qCRQTtX8ET7tgBQmlSH7eWL5W&X-Amz-Signature=03e88bddfbfa9320564f6549d9a8454fbd64005d537cfdf6856fb4410582c492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZUBYF5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBHGh9J8%2BoiCkWQlCtK7iJc1yTFcxas6YktOVofYdbqNAiEAxlJvFIUuh3EJyOf5DQ%2FG7FzH5ppngj14K54ELF1w3%2BEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDdIhDVw9nWdH98XKyrcAxuSW8eqnzbnkz1UzuPsy8njpX7HA6KsRePkscASk3XeDFRY7hrDwILexRM2ynVApp8E8sF5SNVHA1UUcO3ssYu29BdrkL5PrHKVToFqlloTIoqJsLQuqdkTvKKvcOAIrgZiOx8a%2FwnCtfG%2Bh449pHhZ3NhEmLr6b6SU3KkJEkNJV%2B5hM5ymsjvUHZj5YNdYvSeV52PSoMfXYJ5sJfAWAq%2BcD5P5mb2Lroz6vmzkRVd6IeO0Dqx98%2FpAERmZE1SAdzxvkaE8yNAKlmNzZN3or7bcE0%2BIahSmtE%2BzaGpsghbittgJlUiIXwRLl5KxpPok64kR%2Bxx5dJIbfGndWOE%2F3gubiKX5gcNS%2BTeNkik9RkrMJpA8xmLWqSF5YXd5anMoFR3YdfSOpO9aP8uaZoRtU4oGXTnLtyUDzPAc4rzUZ4xNduBYAtiVJ%2BKdP9TLIsfLNJfTCUUpvSGj43t5g9szf85WNHNK1oRPyxLwITsPvX4eGDlU3K1s3eUEBnDzA9QW4MNVSMk%2Bnh5tA7cXDzx%2B36Rf4YMQKjw8wO10TLxzu70g5HoqjRKaAgbPInLeaETR4gVKj0tW3TMZBX17HAyl8RWeWbhNYaW5KR1t%2FXhqLFSSYKgA8LTSG50UlPxWMJH7zcQGOqUBixb0ChwIALtUsQtXAfyz4h05wh5tb7GLmOqM7OXGoKZSU%2FpZsV6Y3E30qTawvdqWe%2FsQuyQZY9tIhskbC%2Be0jCly69a80xMTMlfbce26TUJA4GbamGekbGzbf8rUFZET7j9hZdblbxGH1NxKdm8R6TPO%2Bu4U7yv4YHbTTW0z4vMIBktrZsNPo9jk10v4LLdpEf6qCRQTtX8ET7tgBQmlSH7eWL5W&X-Amz-Signature=a56476c8ec08696e26b03657071734959530d346773e5a060a9c361b4c9b4097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZUBYF5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBHGh9J8%2BoiCkWQlCtK7iJc1yTFcxas6YktOVofYdbqNAiEAxlJvFIUuh3EJyOf5DQ%2FG7FzH5ppngj14K54ELF1w3%2BEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDdIhDVw9nWdH98XKyrcAxuSW8eqnzbnkz1UzuPsy8njpX7HA6KsRePkscASk3XeDFRY7hrDwILexRM2ynVApp8E8sF5SNVHA1UUcO3ssYu29BdrkL5PrHKVToFqlloTIoqJsLQuqdkTvKKvcOAIrgZiOx8a%2FwnCtfG%2Bh449pHhZ3NhEmLr6b6SU3KkJEkNJV%2B5hM5ymsjvUHZj5YNdYvSeV52PSoMfXYJ5sJfAWAq%2BcD5P5mb2Lroz6vmzkRVd6IeO0Dqx98%2FpAERmZE1SAdzxvkaE8yNAKlmNzZN3or7bcE0%2BIahSmtE%2BzaGpsghbittgJlUiIXwRLl5KxpPok64kR%2Bxx5dJIbfGndWOE%2F3gubiKX5gcNS%2BTeNkik9RkrMJpA8xmLWqSF5YXd5anMoFR3YdfSOpO9aP8uaZoRtU4oGXTnLtyUDzPAc4rzUZ4xNduBYAtiVJ%2BKdP9TLIsfLNJfTCUUpvSGj43t5g9szf85WNHNK1oRPyxLwITsPvX4eGDlU3K1s3eUEBnDzA9QW4MNVSMk%2Bnh5tA7cXDzx%2B36Rf4YMQKjw8wO10TLxzu70g5HoqjRKaAgbPInLeaETR4gVKj0tW3TMZBX17HAyl8RWeWbhNYaW5KR1t%2FXhqLFSSYKgA8LTSG50UlPxWMJH7zcQGOqUBixb0ChwIALtUsQtXAfyz4h05wh5tb7GLmOqM7OXGoKZSU%2FpZsV6Y3E30qTawvdqWe%2FsQuyQZY9tIhskbC%2Be0jCly69a80xMTMlfbce26TUJA4GbamGekbGzbf8rUFZET7j9hZdblbxGH1NxKdm8R6TPO%2Bu4U7yv4YHbTTW0z4vMIBktrZsNPo9jk10v4LLdpEf6qCRQTtX8ET7tgBQmlSH7eWL5W&X-Amz-Signature=882bc5363b2d45263101639ce012023c51d9694bdb6ea5e987b4f38e98428eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
