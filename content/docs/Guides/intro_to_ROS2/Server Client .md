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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHSRZ5F%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSY%2Br3EuggiiqAI%2BnOmdS0XoUgWsZTQ7TQfbQfFK2EHAIhAImoX8jR7BT9RkTnJz2WWWs9UTTl39N9XM98mLyqia4kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEmKQFYiypgbGshGAq3ANybF6OPRwMPJnzW%2Bog%2BXITylpyQ3ik5b9tmdd27DaW3esOfs9drVVCda5qCruofndziXhwrcYZXcYiN7qcxDP8bDmzBlSWuwVbPNJ%2FGmqJNr8iF8Pk24teBYUfPRugCaceFDsn%2BxxJg0IqLUnW8F4i5vMlhp%2B3ts0dL6EVGHmHn1%2B5cLPWArFw17ppwXFcBmx7n68zk6G0HSmaRvb9scuAQA%2FPxlXdc9yaAtLUE1UAzMl4ZkzkZ4LdLMD%2FFoD9XDvc4aOMU9Av5zy%2BS%2BJTmVV4E0AQaWzmRHnrfUDmOwVwrs8H81qjjrY%2BbycuqcTp2%2FTWv0Q1kJJnFOomC2e3CUsRbatGgJlRCPwz1pAvnLb0jsvn7HktdDsDLr8UREE%2F%2B05vW1bq%2B5YD2WdJreop5I2TtLdOEqkMMCDfzI5IQTkUQcW9ZYoyKpAzDXLvvOXPEV82IndjnhalnRst5%2BXTpbQ5bZjjOzMqqRXkz7J98qSC2H3jwSCvHq7kBf8Fau%2BCHIzkHrYMbkr4ZK41HcgUkod4QZq978cqOjXC1Waq2zbYiLe4mLNghghscScTneTIUeVl%2BcJraldD3irksMBWuWGRp%2FAwF7979UEucYIaC2%2Bkdi0bR2tgHXkplMnOyjCE6dO%2BBjqkAWRmrTcmRjffhW6pcQPlslpYaI%2FamF2m6tgYzSBvCNF547zKrflT8NMfH1NvTo%2FjjHf6p6FHSwxCmCd0DDYJzFvf2FSQP8U9DJB3Oai38cuND6XNYnUknOXuUrw4CfI33km0L8V3anzPuKj%2B0qHlF%2Foa%2FRcy8aEHMROyLSqWpmxR%2Br0gv2hRJQeg803P0ZDV9UPreK0vkoQ0qxUOETxAnTj3lrvy&X-Amz-Signature=ca85aaf7221135a75689885b94c5085d33045bf6a4336db2ba1702f1392255fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHSRZ5F%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSY%2Br3EuggiiqAI%2BnOmdS0XoUgWsZTQ7TQfbQfFK2EHAIhAImoX8jR7BT9RkTnJz2WWWs9UTTl39N9XM98mLyqia4kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEmKQFYiypgbGshGAq3ANybF6OPRwMPJnzW%2Bog%2BXITylpyQ3ik5b9tmdd27DaW3esOfs9drVVCda5qCruofndziXhwrcYZXcYiN7qcxDP8bDmzBlSWuwVbPNJ%2FGmqJNr8iF8Pk24teBYUfPRugCaceFDsn%2BxxJg0IqLUnW8F4i5vMlhp%2B3ts0dL6EVGHmHn1%2B5cLPWArFw17ppwXFcBmx7n68zk6G0HSmaRvb9scuAQA%2FPxlXdc9yaAtLUE1UAzMl4ZkzkZ4LdLMD%2FFoD9XDvc4aOMU9Av5zy%2BS%2BJTmVV4E0AQaWzmRHnrfUDmOwVwrs8H81qjjrY%2BbycuqcTp2%2FTWv0Q1kJJnFOomC2e3CUsRbatGgJlRCPwz1pAvnLb0jsvn7HktdDsDLr8UREE%2F%2B05vW1bq%2B5YD2WdJreop5I2TtLdOEqkMMCDfzI5IQTkUQcW9ZYoyKpAzDXLvvOXPEV82IndjnhalnRst5%2BXTpbQ5bZjjOzMqqRXkz7J98qSC2H3jwSCvHq7kBf8Fau%2BCHIzkHrYMbkr4ZK41HcgUkod4QZq978cqOjXC1Waq2zbYiLe4mLNghghscScTneTIUeVl%2BcJraldD3irksMBWuWGRp%2FAwF7979UEucYIaC2%2Bkdi0bR2tgHXkplMnOyjCE6dO%2BBjqkAWRmrTcmRjffhW6pcQPlslpYaI%2FamF2m6tgYzSBvCNF547zKrflT8NMfH1NvTo%2FjjHf6p6FHSwxCmCd0DDYJzFvf2FSQP8U9DJB3Oai38cuND6XNYnUknOXuUrw4CfI33km0L8V3anzPuKj%2B0qHlF%2Foa%2FRcy8aEHMROyLSqWpmxR%2Br0gv2hRJQeg803P0ZDV9UPreK0vkoQ0qxUOETxAnTj3lrvy&X-Amz-Signature=df5f38c2955323e6ef759c8ec4598647d29db9f37bca88a5de64aa6b28a339bb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHSRZ5F%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSY%2Br3EuggiiqAI%2BnOmdS0XoUgWsZTQ7TQfbQfFK2EHAIhAImoX8jR7BT9RkTnJz2WWWs9UTTl39N9XM98mLyqia4kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEmKQFYiypgbGshGAq3ANybF6OPRwMPJnzW%2Bog%2BXITylpyQ3ik5b9tmdd27DaW3esOfs9drVVCda5qCruofndziXhwrcYZXcYiN7qcxDP8bDmzBlSWuwVbPNJ%2FGmqJNr8iF8Pk24teBYUfPRugCaceFDsn%2BxxJg0IqLUnW8F4i5vMlhp%2B3ts0dL6EVGHmHn1%2B5cLPWArFw17ppwXFcBmx7n68zk6G0HSmaRvb9scuAQA%2FPxlXdc9yaAtLUE1UAzMl4ZkzkZ4LdLMD%2FFoD9XDvc4aOMU9Av5zy%2BS%2BJTmVV4E0AQaWzmRHnrfUDmOwVwrs8H81qjjrY%2BbycuqcTp2%2FTWv0Q1kJJnFOomC2e3CUsRbatGgJlRCPwz1pAvnLb0jsvn7HktdDsDLr8UREE%2F%2B05vW1bq%2B5YD2WdJreop5I2TtLdOEqkMMCDfzI5IQTkUQcW9ZYoyKpAzDXLvvOXPEV82IndjnhalnRst5%2BXTpbQ5bZjjOzMqqRXkz7J98qSC2H3jwSCvHq7kBf8Fau%2BCHIzkHrYMbkr4ZK41HcgUkod4QZq978cqOjXC1Waq2zbYiLe4mLNghghscScTneTIUeVl%2BcJraldD3irksMBWuWGRp%2FAwF7979UEucYIaC2%2Bkdi0bR2tgHXkplMnOyjCE6dO%2BBjqkAWRmrTcmRjffhW6pcQPlslpYaI%2FamF2m6tgYzSBvCNF547zKrflT8NMfH1NvTo%2FjjHf6p6FHSwxCmCd0DDYJzFvf2FSQP8U9DJB3Oai38cuND6XNYnUknOXuUrw4CfI33km0L8V3anzPuKj%2B0qHlF%2Foa%2FRcy8aEHMROyLSqWpmxR%2Br0gv2hRJQeg803P0ZDV9UPreK0vkoQ0qxUOETxAnTj3lrvy&X-Amz-Signature=d4ba4e81d6c5e7ee9914633acb8f9b8a0a5b40f92c6da69a88b2fc88130129ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHSRZ5F%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSY%2Br3EuggiiqAI%2BnOmdS0XoUgWsZTQ7TQfbQfFK2EHAIhAImoX8jR7BT9RkTnJz2WWWs9UTTl39N9XM98mLyqia4kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEmKQFYiypgbGshGAq3ANybF6OPRwMPJnzW%2Bog%2BXITylpyQ3ik5b9tmdd27DaW3esOfs9drVVCda5qCruofndziXhwrcYZXcYiN7qcxDP8bDmzBlSWuwVbPNJ%2FGmqJNr8iF8Pk24teBYUfPRugCaceFDsn%2BxxJg0IqLUnW8F4i5vMlhp%2B3ts0dL6EVGHmHn1%2B5cLPWArFw17ppwXFcBmx7n68zk6G0HSmaRvb9scuAQA%2FPxlXdc9yaAtLUE1UAzMl4ZkzkZ4LdLMD%2FFoD9XDvc4aOMU9Av5zy%2BS%2BJTmVV4E0AQaWzmRHnrfUDmOwVwrs8H81qjjrY%2BbycuqcTp2%2FTWv0Q1kJJnFOomC2e3CUsRbatGgJlRCPwz1pAvnLb0jsvn7HktdDsDLr8UREE%2F%2B05vW1bq%2B5YD2WdJreop5I2TtLdOEqkMMCDfzI5IQTkUQcW9ZYoyKpAzDXLvvOXPEV82IndjnhalnRst5%2BXTpbQ5bZjjOzMqqRXkz7J98qSC2H3jwSCvHq7kBf8Fau%2BCHIzkHrYMbkr4ZK41HcgUkod4QZq978cqOjXC1Waq2zbYiLe4mLNghghscScTneTIUeVl%2BcJraldD3irksMBWuWGRp%2FAwF7979UEucYIaC2%2Bkdi0bR2tgHXkplMnOyjCE6dO%2BBjqkAWRmrTcmRjffhW6pcQPlslpYaI%2FamF2m6tgYzSBvCNF547zKrflT8NMfH1NvTo%2FjjHf6p6FHSwxCmCd0DDYJzFvf2FSQP8U9DJB3Oai38cuND6XNYnUknOXuUrw4CfI33km0L8V3anzPuKj%2B0qHlF%2Foa%2FRcy8aEHMROyLSqWpmxR%2Br0gv2hRJQeg803P0ZDV9UPreK0vkoQ0qxUOETxAnTj3lrvy&X-Amz-Signature=347812d0a7aa572c29dcf61cc01acf6b11944dd0474254477f86e0aea32175c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHSRZ5F%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSY%2Br3EuggiiqAI%2BnOmdS0XoUgWsZTQ7TQfbQfFK2EHAIhAImoX8jR7BT9RkTnJz2WWWs9UTTl39N9XM98mLyqia4kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEmKQFYiypgbGshGAq3ANybF6OPRwMPJnzW%2Bog%2BXITylpyQ3ik5b9tmdd27DaW3esOfs9drVVCda5qCruofndziXhwrcYZXcYiN7qcxDP8bDmzBlSWuwVbPNJ%2FGmqJNr8iF8Pk24teBYUfPRugCaceFDsn%2BxxJg0IqLUnW8F4i5vMlhp%2B3ts0dL6EVGHmHn1%2B5cLPWArFw17ppwXFcBmx7n68zk6G0HSmaRvb9scuAQA%2FPxlXdc9yaAtLUE1UAzMl4ZkzkZ4LdLMD%2FFoD9XDvc4aOMU9Av5zy%2BS%2BJTmVV4E0AQaWzmRHnrfUDmOwVwrs8H81qjjrY%2BbycuqcTp2%2FTWv0Q1kJJnFOomC2e3CUsRbatGgJlRCPwz1pAvnLb0jsvn7HktdDsDLr8UREE%2F%2B05vW1bq%2B5YD2WdJreop5I2TtLdOEqkMMCDfzI5IQTkUQcW9ZYoyKpAzDXLvvOXPEV82IndjnhalnRst5%2BXTpbQ5bZjjOzMqqRXkz7J98qSC2H3jwSCvHq7kBf8Fau%2BCHIzkHrYMbkr4ZK41HcgUkod4QZq978cqOjXC1Waq2zbYiLe4mLNghghscScTneTIUeVl%2BcJraldD3irksMBWuWGRp%2FAwF7979UEucYIaC2%2Bkdi0bR2tgHXkplMnOyjCE6dO%2BBjqkAWRmrTcmRjffhW6pcQPlslpYaI%2FamF2m6tgYzSBvCNF547zKrflT8NMfH1NvTo%2FjjHf6p6FHSwxCmCd0DDYJzFvf2FSQP8U9DJB3Oai38cuND6XNYnUknOXuUrw4CfI33km0L8V3anzPuKj%2B0qHlF%2Foa%2FRcy8aEHMROyLSqWpmxR%2Br0gv2hRJQeg803P0ZDV9UPreK0vkoQ0qxUOETxAnTj3lrvy&X-Amz-Signature=892293bd8894b3828dea8a464322ac245092a4c4c87e45211e0d70482e70d98f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
