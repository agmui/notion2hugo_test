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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4EFDOJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCID9a1hAASLbHDY3WinnRHvS%2BAu5RrnprxpeHq2JBkGSgAiEAlYswjVXwzSOvIxYdpcxoqS%2Ftvl7k3yMKgQzk8IzKdcoqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCRUYKNgEh%2BnfpoQCrcA0uT9o71kwTTHkHKZOF39UrntDf30Gb%2B7R4l8ELjUHDXi6GaCWO1ha5KYN2JDUgKhiyz%2BdXoh8Pr%2BZ%2B3%2B8dWy48JeqtmitAvUnmtOWe0AznHISw7Wq6qdYVtithNnoZGmtWO%2F5ngR9Et1UDMZRDZtFU7uMBldbDWH2luO2E5eHI51bP2goe36j93SD7ShzRLhnCIRKUfhNp5qkcM%2BMhaQhVZAlahQ4TJ3xoeMFwKTR5z26dIxuKKnvstKYI1XkdtXndq481zK1HOEFelEvFltzppMZMwWFl8rJzbFPMyNe38bZruUunKxOpdyExnPusZK1Wxp49dsMvOUslsmH1KcI6OWNCM1W1VHavCD2lz6RzN9zCXSobn54mE0WdV57Ut9yj0uAubM5MC4zFsIgV3yh8tMiVoSuy2Hp2RLB%2BzCd%2FET0zHr5QZ3j%2B70WXMqkx5AqNRpgDMX3Zq5vHmVwepGfhGY51xhOg4t4Lo8HVg11wLI32CbqX9wXEy4UvIyekpkUH8QTB7v8AbJkXmrDvHPYdhCXpWoX4CWJXd8NB3pTxmhxs5LFjlnM5zpUnFtGhvHpvpuUSPqPq%2FGu%2FuubxKg8iWcXIdWCwiHi1Y3rFH3Ab%2F58akpJI9zX0rl2OeMK3kx74GOqUBzA8pg7nI0OfLgyv9Zvej3Oo7GYAz2aaHsPitg4%2BwNzoRcA9autH5YxjZv%2BPkaBdaRu%2Bzr8B%2BxZV5xVAGw6Yv8UTyw053SH6akmRaTqGR87VfLJNliQHzBmOZLbnPtbRSY%2FvqJ4k5taSyCjZbTF%2FRDvSyrSgakx0Jm1s7hgGTY5xpa%2FLczOpAEkMhReFeJW3oGwceUPooaUivl%2BKAzHzacwxs%2FqcF&X-Amz-Signature=88e87cb39df2f38ca4ecbc6bd51016f33c6b115815027cfe1c859ebf47c03cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4EFDOJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCID9a1hAASLbHDY3WinnRHvS%2BAu5RrnprxpeHq2JBkGSgAiEAlYswjVXwzSOvIxYdpcxoqS%2Ftvl7k3yMKgQzk8IzKdcoqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCRUYKNgEh%2BnfpoQCrcA0uT9o71kwTTHkHKZOF39UrntDf30Gb%2B7R4l8ELjUHDXi6GaCWO1ha5KYN2JDUgKhiyz%2BdXoh8Pr%2BZ%2B3%2B8dWy48JeqtmitAvUnmtOWe0AznHISw7Wq6qdYVtithNnoZGmtWO%2F5ngR9Et1UDMZRDZtFU7uMBldbDWH2luO2E5eHI51bP2goe36j93SD7ShzRLhnCIRKUfhNp5qkcM%2BMhaQhVZAlahQ4TJ3xoeMFwKTR5z26dIxuKKnvstKYI1XkdtXndq481zK1HOEFelEvFltzppMZMwWFl8rJzbFPMyNe38bZruUunKxOpdyExnPusZK1Wxp49dsMvOUslsmH1KcI6OWNCM1W1VHavCD2lz6RzN9zCXSobn54mE0WdV57Ut9yj0uAubM5MC4zFsIgV3yh8tMiVoSuy2Hp2RLB%2BzCd%2FET0zHr5QZ3j%2B70WXMqkx5AqNRpgDMX3Zq5vHmVwepGfhGY51xhOg4t4Lo8HVg11wLI32CbqX9wXEy4UvIyekpkUH8QTB7v8AbJkXmrDvHPYdhCXpWoX4CWJXd8NB3pTxmhxs5LFjlnM5zpUnFtGhvHpvpuUSPqPq%2FGu%2FuubxKg8iWcXIdWCwiHi1Y3rFH3Ab%2F58akpJI9zX0rl2OeMK3kx74GOqUBzA8pg7nI0OfLgyv9Zvej3Oo7GYAz2aaHsPitg4%2BwNzoRcA9autH5YxjZv%2BPkaBdaRu%2Bzr8B%2BxZV5xVAGw6Yv8UTyw053SH6akmRaTqGR87VfLJNliQHzBmOZLbnPtbRSY%2FvqJ4k5taSyCjZbTF%2FRDvSyrSgakx0Jm1s7hgGTY5xpa%2FLczOpAEkMhReFeJW3oGwceUPooaUivl%2BKAzHzacwxs%2FqcF&X-Amz-Signature=e33ae6f1a27f20e9178420dc1555e7a2b947fe630a357feef3bef33b00729975&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4EFDOJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCID9a1hAASLbHDY3WinnRHvS%2BAu5RrnprxpeHq2JBkGSgAiEAlYswjVXwzSOvIxYdpcxoqS%2Ftvl7k3yMKgQzk8IzKdcoqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCRUYKNgEh%2BnfpoQCrcA0uT9o71kwTTHkHKZOF39UrntDf30Gb%2B7R4l8ELjUHDXi6GaCWO1ha5KYN2JDUgKhiyz%2BdXoh8Pr%2BZ%2B3%2B8dWy48JeqtmitAvUnmtOWe0AznHISw7Wq6qdYVtithNnoZGmtWO%2F5ngR9Et1UDMZRDZtFU7uMBldbDWH2luO2E5eHI51bP2goe36j93SD7ShzRLhnCIRKUfhNp5qkcM%2BMhaQhVZAlahQ4TJ3xoeMFwKTR5z26dIxuKKnvstKYI1XkdtXndq481zK1HOEFelEvFltzppMZMwWFl8rJzbFPMyNe38bZruUunKxOpdyExnPusZK1Wxp49dsMvOUslsmH1KcI6OWNCM1W1VHavCD2lz6RzN9zCXSobn54mE0WdV57Ut9yj0uAubM5MC4zFsIgV3yh8tMiVoSuy2Hp2RLB%2BzCd%2FET0zHr5QZ3j%2B70WXMqkx5AqNRpgDMX3Zq5vHmVwepGfhGY51xhOg4t4Lo8HVg11wLI32CbqX9wXEy4UvIyekpkUH8QTB7v8AbJkXmrDvHPYdhCXpWoX4CWJXd8NB3pTxmhxs5LFjlnM5zpUnFtGhvHpvpuUSPqPq%2FGu%2FuubxKg8iWcXIdWCwiHi1Y3rFH3Ab%2F58akpJI9zX0rl2OeMK3kx74GOqUBzA8pg7nI0OfLgyv9Zvej3Oo7GYAz2aaHsPitg4%2BwNzoRcA9autH5YxjZv%2BPkaBdaRu%2Bzr8B%2BxZV5xVAGw6Yv8UTyw053SH6akmRaTqGR87VfLJNliQHzBmOZLbnPtbRSY%2FvqJ4k5taSyCjZbTF%2FRDvSyrSgakx0Jm1s7hgGTY5xpa%2FLczOpAEkMhReFeJW3oGwceUPooaUivl%2BKAzHzacwxs%2FqcF&X-Amz-Signature=03df33164b54baa754fba89ba93172ccce3b1dfe64c25f985c38899efbe6db7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4EFDOJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCID9a1hAASLbHDY3WinnRHvS%2BAu5RrnprxpeHq2JBkGSgAiEAlYswjVXwzSOvIxYdpcxoqS%2Ftvl7k3yMKgQzk8IzKdcoqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCRUYKNgEh%2BnfpoQCrcA0uT9o71kwTTHkHKZOF39UrntDf30Gb%2B7R4l8ELjUHDXi6GaCWO1ha5KYN2JDUgKhiyz%2BdXoh8Pr%2BZ%2B3%2B8dWy48JeqtmitAvUnmtOWe0AznHISw7Wq6qdYVtithNnoZGmtWO%2F5ngR9Et1UDMZRDZtFU7uMBldbDWH2luO2E5eHI51bP2goe36j93SD7ShzRLhnCIRKUfhNp5qkcM%2BMhaQhVZAlahQ4TJ3xoeMFwKTR5z26dIxuKKnvstKYI1XkdtXndq481zK1HOEFelEvFltzppMZMwWFl8rJzbFPMyNe38bZruUunKxOpdyExnPusZK1Wxp49dsMvOUslsmH1KcI6OWNCM1W1VHavCD2lz6RzN9zCXSobn54mE0WdV57Ut9yj0uAubM5MC4zFsIgV3yh8tMiVoSuy2Hp2RLB%2BzCd%2FET0zHr5QZ3j%2B70WXMqkx5AqNRpgDMX3Zq5vHmVwepGfhGY51xhOg4t4Lo8HVg11wLI32CbqX9wXEy4UvIyekpkUH8QTB7v8AbJkXmrDvHPYdhCXpWoX4CWJXd8NB3pTxmhxs5LFjlnM5zpUnFtGhvHpvpuUSPqPq%2FGu%2FuubxKg8iWcXIdWCwiHi1Y3rFH3Ab%2F58akpJI9zX0rl2OeMK3kx74GOqUBzA8pg7nI0OfLgyv9Zvej3Oo7GYAz2aaHsPitg4%2BwNzoRcA9autH5YxjZv%2BPkaBdaRu%2Bzr8B%2BxZV5xVAGw6Yv8UTyw053SH6akmRaTqGR87VfLJNliQHzBmOZLbnPtbRSY%2FvqJ4k5taSyCjZbTF%2FRDvSyrSgakx0Jm1s7hgGTY5xpa%2FLczOpAEkMhReFeJW3oGwceUPooaUivl%2BKAzHzacwxs%2FqcF&X-Amz-Signature=90f102ebe97d395f191c4aa135039cc88df04ae3bd98e16d1e09bf0f9f0d53f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4EFDOJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCID9a1hAASLbHDY3WinnRHvS%2BAu5RrnprxpeHq2JBkGSgAiEAlYswjVXwzSOvIxYdpcxoqS%2Ftvl7k3yMKgQzk8IzKdcoqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCRUYKNgEh%2BnfpoQCrcA0uT9o71kwTTHkHKZOF39UrntDf30Gb%2B7R4l8ELjUHDXi6GaCWO1ha5KYN2JDUgKhiyz%2BdXoh8Pr%2BZ%2B3%2B8dWy48JeqtmitAvUnmtOWe0AznHISw7Wq6qdYVtithNnoZGmtWO%2F5ngR9Et1UDMZRDZtFU7uMBldbDWH2luO2E5eHI51bP2goe36j93SD7ShzRLhnCIRKUfhNp5qkcM%2BMhaQhVZAlahQ4TJ3xoeMFwKTR5z26dIxuKKnvstKYI1XkdtXndq481zK1HOEFelEvFltzppMZMwWFl8rJzbFPMyNe38bZruUunKxOpdyExnPusZK1Wxp49dsMvOUslsmH1KcI6OWNCM1W1VHavCD2lz6RzN9zCXSobn54mE0WdV57Ut9yj0uAubM5MC4zFsIgV3yh8tMiVoSuy2Hp2RLB%2BzCd%2FET0zHr5QZ3j%2B70WXMqkx5AqNRpgDMX3Zq5vHmVwepGfhGY51xhOg4t4Lo8HVg11wLI32CbqX9wXEy4UvIyekpkUH8QTB7v8AbJkXmrDvHPYdhCXpWoX4CWJXd8NB3pTxmhxs5LFjlnM5zpUnFtGhvHpvpuUSPqPq%2FGu%2FuubxKg8iWcXIdWCwiHi1Y3rFH3Ab%2F58akpJI9zX0rl2OeMK3kx74GOqUBzA8pg7nI0OfLgyv9Zvej3Oo7GYAz2aaHsPitg4%2BwNzoRcA9autH5YxjZv%2BPkaBdaRu%2Bzr8B%2BxZV5xVAGw6Yv8UTyw053SH6akmRaTqGR87VfLJNliQHzBmOZLbnPtbRSY%2FvqJ4k5taSyCjZbTF%2FRDvSyrSgakx0Jm1s7hgGTY5xpa%2FLczOpAEkMhReFeJW3oGwceUPooaUivl%2BKAzHzacwxs%2FqcF&X-Amz-Signature=0664299f748ba7339e66803c6643be173d2f636d1616dc238f2e4d4894b66d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
