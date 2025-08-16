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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDSFLF57%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCcQqlc4L7XXeoRlbGDXDL%2FTNp%2FzKxL2j6nDNSSX51BpQIhAKxrTRADYoTw7bpIf4xqi6BmRX7XwoLwFhOW3a%2Fbh2pqKv8DCHEQABoMNjM3NDIzMTgzODA1IgxP8QJUvJgpUELfpUQq3AMtNbOKVykd3WORSyXneALTVyPsX3li%2FmHl2wj7P%2Btmq%2BIlTy0ixSwQJV3Sscme9zBpzOxvX8CoBDU7xHHkyC8eI9GD3%2Bf5coY76v6WH2PRFLld704t6GB1UZfDWpFi4%2BW16Q1WqGCelEmWRJqQLFSMhfwAJoQMji%2BjT7cgNR8IQv735qRusCN%2BfIkCXl50JVyIWJg0xulgzUQMV3OaXrEIyp4VizVRWSXiSN3FC%2B4xS3UvDr24kne7PmwqmYX1nNFFLcOm7u6I%2BmfVHEbal0b7XG44gI7NPQctYdG81pGQQAomHdq2z3DyZZCjoaNMVcfLZ0FUx3QitmYiIU77ynjMf%2Fj1dfjGO5SATP6pMVh2Qv%2B1NPSV0zL0RrQqmHBzDTyQBhBBcE6SJsQXQnbC9I%2FEG1eUpCyqK9szA7H8ZhYvZhkJj49WUpNRbayM6Pws8KTFhlOIP6TpbOaCpsC6Dpeue75X1viX2pbcpz%2F4SODdDVIomoPkFNpTmIyskMaU%2BT7RRhb20mnlZINBi%2BY4SF3gafHxDx0Q60N0Ojk6LtHJV38K8hGuN4s8wGY%2FAOPUIMOV3nRJnWjWjUOH%2BWW4E3g1qi4VegRB2q90CcGbOCG9dkzh0Vq8xDk13FUJCTDg94DFBjqkAT84h2wVds8j5oGJJSUt8HTS02j7cJM7MnZ7ATg0ak3ELA7PgEDikmmRkRhKgAEvG8OnVWX2JYlhQ5WMeVCCrUewVGMx7FnAq2xksK5PaSWzlRg%2BNKS58ryKP3jOnPCoEzaX3ixzvhy8x2dT7vSyAEXjtAJZLAbOiTawyOuRC9PBw5G6ciY5ys3XRZQ2LM%2FL8PLiabINHbuWmlQSRwMNQxl9TAPh&X-Amz-Signature=b618995850b86390bcb23328bffb6a0f5cdc83805f1ab3697eb1471616a0189e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDSFLF57%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCcQqlc4L7XXeoRlbGDXDL%2FTNp%2FzKxL2j6nDNSSX51BpQIhAKxrTRADYoTw7bpIf4xqi6BmRX7XwoLwFhOW3a%2Fbh2pqKv8DCHEQABoMNjM3NDIzMTgzODA1IgxP8QJUvJgpUELfpUQq3AMtNbOKVykd3WORSyXneALTVyPsX3li%2FmHl2wj7P%2Btmq%2BIlTy0ixSwQJV3Sscme9zBpzOxvX8CoBDU7xHHkyC8eI9GD3%2Bf5coY76v6WH2PRFLld704t6GB1UZfDWpFi4%2BW16Q1WqGCelEmWRJqQLFSMhfwAJoQMji%2BjT7cgNR8IQv735qRusCN%2BfIkCXl50JVyIWJg0xulgzUQMV3OaXrEIyp4VizVRWSXiSN3FC%2B4xS3UvDr24kne7PmwqmYX1nNFFLcOm7u6I%2BmfVHEbal0b7XG44gI7NPQctYdG81pGQQAomHdq2z3DyZZCjoaNMVcfLZ0FUx3QitmYiIU77ynjMf%2Fj1dfjGO5SATP6pMVh2Qv%2B1NPSV0zL0RrQqmHBzDTyQBhBBcE6SJsQXQnbC9I%2FEG1eUpCyqK9szA7H8ZhYvZhkJj49WUpNRbayM6Pws8KTFhlOIP6TpbOaCpsC6Dpeue75X1viX2pbcpz%2F4SODdDVIomoPkFNpTmIyskMaU%2BT7RRhb20mnlZINBi%2BY4SF3gafHxDx0Q60N0Ojk6LtHJV38K8hGuN4s8wGY%2FAOPUIMOV3nRJnWjWjUOH%2BWW4E3g1qi4VegRB2q90CcGbOCG9dkzh0Vq8xDk13FUJCTDg94DFBjqkAT84h2wVds8j5oGJJSUt8HTS02j7cJM7MnZ7ATg0ak3ELA7PgEDikmmRkRhKgAEvG8OnVWX2JYlhQ5WMeVCCrUewVGMx7FnAq2xksK5PaSWzlRg%2BNKS58ryKP3jOnPCoEzaX3ixzvhy8x2dT7vSyAEXjtAJZLAbOiTawyOuRC9PBw5G6ciY5ys3XRZQ2LM%2FL8PLiabINHbuWmlQSRwMNQxl9TAPh&X-Amz-Signature=eb43dc6c92274e6c3e98af5a33da3ebd543b4aed9a59faf2e266c932141eac2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDSFLF57%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCcQqlc4L7XXeoRlbGDXDL%2FTNp%2FzKxL2j6nDNSSX51BpQIhAKxrTRADYoTw7bpIf4xqi6BmRX7XwoLwFhOW3a%2Fbh2pqKv8DCHEQABoMNjM3NDIzMTgzODA1IgxP8QJUvJgpUELfpUQq3AMtNbOKVykd3WORSyXneALTVyPsX3li%2FmHl2wj7P%2Btmq%2BIlTy0ixSwQJV3Sscme9zBpzOxvX8CoBDU7xHHkyC8eI9GD3%2Bf5coY76v6WH2PRFLld704t6GB1UZfDWpFi4%2BW16Q1WqGCelEmWRJqQLFSMhfwAJoQMji%2BjT7cgNR8IQv735qRusCN%2BfIkCXl50JVyIWJg0xulgzUQMV3OaXrEIyp4VizVRWSXiSN3FC%2B4xS3UvDr24kne7PmwqmYX1nNFFLcOm7u6I%2BmfVHEbal0b7XG44gI7NPQctYdG81pGQQAomHdq2z3DyZZCjoaNMVcfLZ0FUx3QitmYiIU77ynjMf%2Fj1dfjGO5SATP6pMVh2Qv%2B1NPSV0zL0RrQqmHBzDTyQBhBBcE6SJsQXQnbC9I%2FEG1eUpCyqK9szA7H8ZhYvZhkJj49WUpNRbayM6Pws8KTFhlOIP6TpbOaCpsC6Dpeue75X1viX2pbcpz%2F4SODdDVIomoPkFNpTmIyskMaU%2BT7RRhb20mnlZINBi%2BY4SF3gafHxDx0Q60N0Ojk6LtHJV38K8hGuN4s8wGY%2FAOPUIMOV3nRJnWjWjUOH%2BWW4E3g1qi4VegRB2q90CcGbOCG9dkzh0Vq8xDk13FUJCTDg94DFBjqkAT84h2wVds8j5oGJJSUt8HTS02j7cJM7MnZ7ATg0ak3ELA7PgEDikmmRkRhKgAEvG8OnVWX2JYlhQ5WMeVCCrUewVGMx7FnAq2xksK5PaSWzlRg%2BNKS58ryKP3jOnPCoEzaX3ixzvhy8x2dT7vSyAEXjtAJZLAbOiTawyOuRC9PBw5G6ciY5ys3XRZQ2LM%2FL8PLiabINHbuWmlQSRwMNQxl9TAPh&X-Amz-Signature=49864967bd332a3a88581085a47aa5d76177d12fabf09f0ceda502059ba44ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDSFLF57%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCcQqlc4L7XXeoRlbGDXDL%2FTNp%2FzKxL2j6nDNSSX51BpQIhAKxrTRADYoTw7bpIf4xqi6BmRX7XwoLwFhOW3a%2Fbh2pqKv8DCHEQABoMNjM3NDIzMTgzODA1IgxP8QJUvJgpUELfpUQq3AMtNbOKVykd3WORSyXneALTVyPsX3li%2FmHl2wj7P%2Btmq%2BIlTy0ixSwQJV3Sscme9zBpzOxvX8CoBDU7xHHkyC8eI9GD3%2Bf5coY76v6WH2PRFLld704t6GB1UZfDWpFi4%2BW16Q1WqGCelEmWRJqQLFSMhfwAJoQMji%2BjT7cgNR8IQv735qRusCN%2BfIkCXl50JVyIWJg0xulgzUQMV3OaXrEIyp4VizVRWSXiSN3FC%2B4xS3UvDr24kne7PmwqmYX1nNFFLcOm7u6I%2BmfVHEbal0b7XG44gI7NPQctYdG81pGQQAomHdq2z3DyZZCjoaNMVcfLZ0FUx3QitmYiIU77ynjMf%2Fj1dfjGO5SATP6pMVh2Qv%2B1NPSV0zL0RrQqmHBzDTyQBhBBcE6SJsQXQnbC9I%2FEG1eUpCyqK9szA7H8ZhYvZhkJj49WUpNRbayM6Pws8KTFhlOIP6TpbOaCpsC6Dpeue75X1viX2pbcpz%2F4SODdDVIomoPkFNpTmIyskMaU%2BT7RRhb20mnlZINBi%2BY4SF3gafHxDx0Q60N0Ojk6LtHJV38K8hGuN4s8wGY%2FAOPUIMOV3nRJnWjWjUOH%2BWW4E3g1qi4VegRB2q90CcGbOCG9dkzh0Vq8xDk13FUJCTDg94DFBjqkAT84h2wVds8j5oGJJSUt8HTS02j7cJM7MnZ7ATg0ak3ELA7PgEDikmmRkRhKgAEvG8OnVWX2JYlhQ5WMeVCCrUewVGMx7FnAq2xksK5PaSWzlRg%2BNKS58ryKP3jOnPCoEzaX3ixzvhy8x2dT7vSyAEXjtAJZLAbOiTawyOuRC9PBw5G6ciY5ys3XRZQ2LM%2FL8PLiabINHbuWmlQSRwMNQxl9TAPh&X-Amz-Signature=82267b310ad432d1e5c0ac38a9d80c4a58ef156a545567bb4dc82517b7adf7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDSFLF57%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCcQqlc4L7XXeoRlbGDXDL%2FTNp%2FzKxL2j6nDNSSX51BpQIhAKxrTRADYoTw7bpIf4xqi6BmRX7XwoLwFhOW3a%2Fbh2pqKv8DCHEQABoMNjM3NDIzMTgzODA1IgxP8QJUvJgpUELfpUQq3AMtNbOKVykd3WORSyXneALTVyPsX3li%2FmHl2wj7P%2Btmq%2BIlTy0ixSwQJV3Sscme9zBpzOxvX8CoBDU7xHHkyC8eI9GD3%2Bf5coY76v6WH2PRFLld704t6GB1UZfDWpFi4%2BW16Q1WqGCelEmWRJqQLFSMhfwAJoQMji%2BjT7cgNR8IQv735qRusCN%2BfIkCXl50JVyIWJg0xulgzUQMV3OaXrEIyp4VizVRWSXiSN3FC%2B4xS3UvDr24kne7PmwqmYX1nNFFLcOm7u6I%2BmfVHEbal0b7XG44gI7NPQctYdG81pGQQAomHdq2z3DyZZCjoaNMVcfLZ0FUx3QitmYiIU77ynjMf%2Fj1dfjGO5SATP6pMVh2Qv%2B1NPSV0zL0RrQqmHBzDTyQBhBBcE6SJsQXQnbC9I%2FEG1eUpCyqK9szA7H8ZhYvZhkJj49WUpNRbayM6Pws8KTFhlOIP6TpbOaCpsC6Dpeue75X1viX2pbcpz%2F4SODdDVIomoPkFNpTmIyskMaU%2BT7RRhb20mnlZINBi%2BY4SF3gafHxDx0Q60N0Ojk6LtHJV38K8hGuN4s8wGY%2FAOPUIMOV3nRJnWjWjUOH%2BWW4E3g1qi4VegRB2q90CcGbOCG9dkzh0Vq8xDk13FUJCTDg94DFBjqkAT84h2wVds8j5oGJJSUt8HTS02j7cJM7MnZ7ATg0ak3ELA7PgEDikmmRkRhKgAEvG8OnVWX2JYlhQ5WMeVCCrUewVGMx7FnAq2xksK5PaSWzlRg%2BNKS58ryKP3jOnPCoEzaX3ixzvhy8x2dT7vSyAEXjtAJZLAbOiTawyOuRC9PBw5G6ciY5ys3XRZQ2LM%2FL8PLiabINHbuWmlQSRwMNQxl9TAPh&X-Amz-Signature=2fac790c2d0fc62602c8cfd8743af8606e2c226fa6cd3fafd7001a573f9d97f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
