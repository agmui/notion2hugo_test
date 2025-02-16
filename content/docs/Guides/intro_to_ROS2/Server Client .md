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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3CJQ3K%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDJW4Fzw%2F3CwCYDEKp5Ql%2BR99q5RQK1sjsbAczomjafQAIgN1ldGYs8MYjjdLwn0c8wIhX0NJYET1ROfw3KVyfjYz0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBoZ8qkOM5hH1LCBeCrcA5BdYqVNIK6pDE%2BNXl%2F4q1vDJMaHXCzFB5Jq2khDKKU%2FJvF6fY9CPl6%2BbP1XQCvigkgXeQMO69ANlstifQ7gi%2BurnmkwQ9zwZ2ivUyhvAh2PeSEcWNcTzlxTxxP7AEWnPu1SrS4ekyffqxAOapZWT8f%2FGde3HhRl5IqRoc05%2BB35gYLwFFCUcV5%2BzBozSr8RYWuxAhgHWN2B2gl5St5HzhULaM4FQyAeWl16IpbNzM9H6aA0WtH0UJwAJmHH%2FjWQB7cotlPQIn4lW8o2zNtM0J%2BDAgi6DL6D7q3d0M1lLTqD5iM%2FpvaP%2BMsrRMMOeBM7%2Fkz3JNy5h6UxZTQK12tKw4KeYQyN9WhXma8PGYNHOR4lEt9KqEcDuG5PNzzda1oQ3zl1FGU0y%2BreHeMEHzgTBMcgDnncUHXcFg8%2BRkux4qjRAzJMVEwAx0NNnfwrdo8mDs9tDPdzjfDFQLTasInZu4srbHxq24nQmGTqovQwcFanJvqsvXDJJfA2vW5jLE5oMOmZyThEEnB9Sop%2FjJ5q6K1AO%2BwMe2T8sNmisW3EY4vza9%2FQw%2F4DQX8nMQUSs7%2BtWGVkFQc8U6TNOt4nSwEXMSY4sqjYUgcfMKYFndFaqN4ijWN%2FWPT3qeEfS8QTMN%2F9xb0GOqUB34XvY4bqxKCz8doS%2BiFy3TXrcQHe0a3ItAw1AmqVmUh7h%2BhVNj%2FDsd9tRQU%2BHiwybuplzSsC5tclGFKE57MpEKqj9Ld1J2gsxIp0kSb58sAFvsH%2FjwCgB%2FLFgsBhUD9QzJcqf%2FNbI17AmxHnMzl4OdrNU9ol3kVbQyDBrDsyWAh44AostT9HfMs%2FCfRuDj0N0U8CFB9iBbJ%2Fo3YVXFPsl7cWagGG&X-Amz-Signature=7358787722e39371e8e9cb309037caa3d34cc001f78b844123f32a0c1ef238ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3CJQ3K%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDJW4Fzw%2F3CwCYDEKp5Ql%2BR99q5RQK1sjsbAczomjafQAIgN1ldGYs8MYjjdLwn0c8wIhX0NJYET1ROfw3KVyfjYz0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBoZ8qkOM5hH1LCBeCrcA5BdYqVNIK6pDE%2BNXl%2F4q1vDJMaHXCzFB5Jq2khDKKU%2FJvF6fY9CPl6%2BbP1XQCvigkgXeQMO69ANlstifQ7gi%2BurnmkwQ9zwZ2ivUyhvAh2PeSEcWNcTzlxTxxP7AEWnPu1SrS4ekyffqxAOapZWT8f%2FGde3HhRl5IqRoc05%2BB35gYLwFFCUcV5%2BzBozSr8RYWuxAhgHWN2B2gl5St5HzhULaM4FQyAeWl16IpbNzM9H6aA0WtH0UJwAJmHH%2FjWQB7cotlPQIn4lW8o2zNtM0J%2BDAgi6DL6D7q3d0M1lLTqD5iM%2FpvaP%2BMsrRMMOeBM7%2Fkz3JNy5h6UxZTQK12tKw4KeYQyN9WhXma8PGYNHOR4lEt9KqEcDuG5PNzzda1oQ3zl1FGU0y%2BreHeMEHzgTBMcgDnncUHXcFg8%2BRkux4qjRAzJMVEwAx0NNnfwrdo8mDs9tDPdzjfDFQLTasInZu4srbHxq24nQmGTqovQwcFanJvqsvXDJJfA2vW5jLE5oMOmZyThEEnB9Sop%2FjJ5q6K1AO%2BwMe2T8sNmisW3EY4vza9%2FQw%2F4DQX8nMQUSs7%2BtWGVkFQc8U6TNOt4nSwEXMSY4sqjYUgcfMKYFndFaqN4ijWN%2FWPT3qeEfS8QTMN%2F9xb0GOqUB34XvY4bqxKCz8doS%2BiFy3TXrcQHe0a3ItAw1AmqVmUh7h%2BhVNj%2FDsd9tRQU%2BHiwybuplzSsC5tclGFKE57MpEKqj9Ld1J2gsxIp0kSb58sAFvsH%2FjwCgB%2FLFgsBhUD9QzJcqf%2FNbI17AmxHnMzl4OdrNU9ol3kVbQyDBrDsyWAh44AostT9HfMs%2FCfRuDj0N0U8CFB9iBbJ%2Fo3YVXFPsl7cWagGG&X-Amz-Signature=03221fb26cbbc163f9ae0b3d4ac0f3e0437888131b45b35a82d7da3438f4d64b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3CJQ3K%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDJW4Fzw%2F3CwCYDEKp5Ql%2BR99q5RQK1sjsbAczomjafQAIgN1ldGYs8MYjjdLwn0c8wIhX0NJYET1ROfw3KVyfjYz0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBoZ8qkOM5hH1LCBeCrcA5BdYqVNIK6pDE%2BNXl%2F4q1vDJMaHXCzFB5Jq2khDKKU%2FJvF6fY9CPl6%2BbP1XQCvigkgXeQMO69ANlstifQ7gi%2BurnmkwQ9zwZ2ivUyhvAh2PeSEcWNcTzlxTxxP7AEWnPu1SrS4ekyffqxAOapZWT8f%2FGde3HhRl5IqRoc05%2BB35gYLwFFCUcV5%2BzBozSr8RYWuxAhgHWN2B2gl5St5HzhULaM4FQyAeWl16IpbNzM9H6aA0WtH0UJwAJmHH%2FjWQB7cotlPQIn4lW8o2zNtM0J%2BDAgi6DL6D7q3d0M1lLTqD5iM%2FpvaP%2BMsrRMMOeBM7%2Fkz3JNy5h6UxZTQK12tKw4KeYQyN9WhXma8PGYNHOR4lEt9KqEcDuG5PNzzda1oQ3zl1FGU0y%2BreHeMEHzgTBMcgDnncUHXcFg8%2BRkux4qjRAzJMVEwAx0NNnfwrdo8mDs9tDPdzjfDFQLTasInZu4srbHxq24nQmGTqovQwcFanJvqsvXDJJfA2vW5jLE5oMOmZyThEEnB9Sop%2FjJ5q6K1AO%2BwMe2T8sNmisW3EY4vza9%2FQw%2F4DQX8nMQUSs7%2BtWGVkFQc8U6TNOt4nSwEXMSY4sqjYUgcfMKYFndFaqN4ijWN%2FWPT3qeEfS8QTMN%2F9xb0GOqUB34XvY4bqxKCz8doS%2BiFy3TXrcQHe0a3ItAw1AmqVmUh7h%2BhVNj%2FDsd9tRQU%2BHiwybuplzSsC5tclGFKE57MpEKqj9Ld1J2gsxIp0kSb58sAFvsH%2FjwCgB%2FLFgsBhUD9QzJcqf%2FNbI17AmxHnMzl4OdrNU9ol3kVbQyDBrDsyWAh44AostT9HfMs%2FCfRuDj0N0U8CFB9iBbJ%2Fo3YVXFPsl7cWagGG&X-Amz-Signature=be0aa481e1b7224a71dd0c043f3560220f30ad8069000a586f6d6c12d72d4d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3CJQ3K%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDJW4Fzw%2F3CwCYDEKp5Ql%2BR99q5RQK1sjsbAczomjafQAIgN1ldGYs8MYjjdLwn0c8wIhX0NJYET1ROfw3KVyfjYz0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBoZ8qkOM5hH1LCBeCrcA5BdYqVNIK6pDE%2BNXl%2F4q1vDJMaHXCzFB5Jq2khDKKU%2FJvF6fY9CPl6%2BbP1XQCvigkgXeQMO69ANlstifQ7gi%2BurnmkwQ9zwZ2ivUyhvAh2PeSEcWNcTzlxTxxP7AEWnPu1SrS4ekyffqxAOapZWT8f%2FGde3HhRl5IqRoc05%2BB35gYLwFFCUcV5%2BzBozSr8RYWuxAhgHWN2B2gl5St5HzhULaM4FQyAeWl16IpbNzM9H6aA0WtH0UJwAJmHH%2FjWQB7cotlPQIn4lW8o2zNtM0J%2BDAgi6DL6D7q3d0M1lLTqD5iM%2FpvaP%2BMsrRMMOeBM7%2Fkz3JNy5h6UxZTQK12tKw4KeYQyN9WhXma8PGYNHOR4lEt9KqEcDuG5PNzzda1oQ3zl1FGU0y%2BreHeMEHzgTBMcgDnncUHXcFg8%2BRkux4qjRAzJMVEwAx0NNnfwrdo8mDs9tDPdzjfDFQLTasInZu4srbHxq24nQmGTqovQwcFanJvqsvXDJJfA2vW5jLE5oMOmZyThEEnB9Sop%2FjJ5q6K1AO%2BwMe2T8sNmisW3EY4vza9%2FQw%2F4DQX8nMQUSs7%2BtWGVkFQc8U6TNOt4nSwEXMSY4sqjYUgcfMKYFndFaqN4ijWN%2FWPT3qeEfS8QTMN%2F9xb0GOqUB34XvY4bqxKCz8doS%2BiFy3TXrcQHe0a3ItAw1AmqVmUh7h%2BhVNj%2FDsd9tRQU%2BHiwybuplzSsC5tclGFKE57MpEKqj9Ld1J2gsxIp0kSb58sAFvsH%2FjwCgB%2FLFgsBhUD9QzJcqf%2FNbI17AmxHnMzl4OdrNU9ol3kVbQyDBrDsyWAh44AostT9HfMs%2FCfRuDj0N0U8CFB9iBbJ%2Fo3YVXFPsl7cWagGG&X-Amz-Signature=f72267461074ed1ba310ca9217caaae035f03134d16a6765ac01388de7e0f4af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3CJQ3K%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDJW4Fzw%2F3CwCYDEKp5Ql%2BR99q5RQK1sjsbAczomjafQAIgN1ldGYs8MYjjdLwn0c8wIhX0NJYET1ROfw3KVyfjYz0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBoZ8qkOM5hH1LCBeCrcA5BdYqVNIK6pDE%2BNXl%2F4q1vDJMaHXCzFB5Jq2khDKKU%2FJvF6fY9CPl6%2BbP1XQCvigkgXeQMO69ANlstifQ7gi%2BurnmkwQ9zwZ2ivUyhvAh2PeSEcWNcTzlxTxxP7AEWnPu1SrS4ekyffqxAOapZWT8f%2FGde3HhRl5IqRoc05%2BB35gYLwFFCUcV5%2BzBozSr8RYWuxAhgHWN2B2gl5St5HzhULaM4FQyAeWl16IpbNzM9H6aA0WtH0UJwAJmHH%2FjWQB7cotlPQIn4lW8o2zNtM0J%2BDAgi6DL6D7q3d0M1lLTqD5iM%2FpvaP%2BMsrRMMOeBM7%2Fkz3JNy5h6UxZTQK12tKw4KeYQyN9WhXma8PGYNHOR4lEt9KqEcDuG5PNzzda1oQ3zl1FGU0y%2BreHeMEHzgTBMcgDnncUHXcFg8%2BRkux4qjRAzJMVEwAx0NNnfwrdo8mDs9tDPdzjfDFQLTasInZu4srbHxq24nQmGTqovQwcFanJvqsvXDJJfA2vW5jLE5oMOmZyThEEnB9Sop%2FjJ5q6K1AO%2BwMe2T8sNmisW3EY4vza9%2FQw%2F4DQX8nMQUSs7%2BtWGVkFQc8U6TNOt4nSwEXMSY4sqjYUgcfMKYFndFaqN4ijWN%2FWPT3qeEfS8QTMN%2F9xb0GOqUB34XvY4bqxKCz8doS%2BiFy3TXrcQHe0a3ItAw1AmqVmUh7h%2BhVNj%2FDsd9tRQU%2BHiwybuplzSsC5tclGFKE57MpEKqj9Ld1J2gsxIp0kSb58sAFvsH%2FjwCgB%2FLFgsBhUD9QzJcqf%2FNbI17AmxHnMzl4OdrNU9ol3kVbQyDBrDsyWAh44AostT9HfMs%2FCfRuDj0N0U8CFB9iBbJ%2Fo3YVXFPsl7cWagGG&X-Amz-Signature=db66755e76c27222eb45fb498b159de80de37c968b0ecd2a74dab97a01eb8974&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
