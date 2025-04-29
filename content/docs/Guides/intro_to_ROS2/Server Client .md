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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLMUG4Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIM3qLVu24BNWa2Zg7metYi6uHf9uDy9wor%2BXr0N9T9gIhAJAbnDy%2Bp3WBtDO8TBx5WwIJY2eZF66wb%2BOKhNyl1mdjKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaENVNJk8qav6WmT8q3APwWIitLgW3TSXjs89E%2BIDmXGcg5NklAuhoIAXALf78LyK1LtZ4WKhSjXju0fmNjYIPsc1K08znDUkbukhd9KN0Zo3lvL41KkuprVH43QpwqgS9rB2bhz7ebXf8HzSQeW1nvbUyJmwHtjdqF9sBrd9jpmcBr1umWpXpdAMaqlCJ08BcxzwAsnvzngl2TkSk5bg6%2BMKukBjbHCEAC0qCI%2FFc4sNHEC2UdKxT0wd0wKiPADlrl7fmlOKpmjECewMeUcK2djKwHTu%2FY5pTx%2FMcvKsM4POZjSl3MaeAMocNXt18OO5TJJKMoYcTVVqJkDhDefWn0xJTYtBzo4EVi%2BTbyPeTKg4weymHnktUptcHklNpden0TbY02twrKzLHju9S4W%2F7210hxK9UULhuDYthIeKqYBNaYaPq5lzo1hjUFB7WUR7QSZpGmNJNquQAfqqTtjifJldLjKmm1jHhsEJnPJ2BZlfsHChq9s%2FJjDsTA0dwW7uHU2lN7L%2BkrMfnd7npFZHGEzhX6U9CFSCGJuaajxkApANtoqwrxiA7G2DD6Yory8s4Z20MVP30PGAAaqN%2BSoIqeKKt853PD0ZIxFOhLtIX8xAMtavBxTeYw9aD03D0T%2BB0%2Bl7fcvSTciJeIDC3%2BMPABjqkAUutcFOQhdtiRdnHiGuyBMUkYFSRF4bj3KMPv1ke%2FdmN4q2pVJsIFYMSISEFXGsu%2FM3P15Uq8UwlBoTP3fNtwORHUihbQBLsta67e3wRrASXt4bJuea%2BqH5XAB9LC1vQ0%2BTvgD%2F8IalQkwQtKYzUy3WLNqAkxV7MfLULlpLGV7W6dg0eVRt3rBncVZ33KTncmgH9JjTmRzHX8GORvnHHIMW9waMS&X-Amz-Signature=15a182521fc1a2fb4559ae0a0c014e99b1db82875ba8091ccd938bb7d0a5776d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLMUG4Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIM3qLVu24BNWa2Zg7metYi6uHf9uDy9wor%2BXr0N9T9gIhAJAbnDy%2Bp3WBtDO8TBx5WwIJY2eZF66wb%2BOKhNyl1mdjKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaENVNJk8qav6WmT8q3APwWIitLgW3TSXjs89E%2BIDmXGcg5NklAuhoIAXALf78LyK1LtZ4WKhSjXju0fmNjYIPsc1K08znDUkbukhd9KN0Zo3lvL41KkuprVH43QpwqgS9rB2bhz7ebXf8HzSQeW1nvbUyJmwHtjdqF9sBrd9jpmcBr1umWpXpdAMaqlCJ08BcxzwAsnvzngl2TkSk5bg6%2BMKukBjbHCEAC0qCI%2FFc4sNHEC2UdKxT0wd0wKiPADlrl7fmlOKpmjECewMeUcK2djKwHTu%2FY5pTx%2FMcvKsM4POZjSl3MaeAMocNXt18OO5TJJKMoYcTVVqJkDhDefWn0xJTYtBzo4EVi%2BTbyPeTKg4weymHnktUptcHklNpden0TbY02twrKzLHju9S4W%2F7210hxK9UULhuDYthIeKqYBNaYaPq5lzo1hjUFB7WUR7QSZpGmNJNquQAfqqTtjifJldLjKmm1jHhsEJnPJ2BZlfsHChq9s%2FJjDsTA0dwW7uHU2lN7L%2BkrMfnd7npFZHGEzhX6U9CFSCGJuaajxkApANtoqwrxiA7G2DD6Yory8s4Z20MVP30PGAAaqN%2BSoIqeKKt853PD0ZIxFOhLtIX8xAMtavBxTeYw9aD03D0T%2BB0%2Bl7fcvSTciJeIDC3%2BMPABjqkAUutcFOQhdtiRdnHiGuyBMUkYFSRF4bj3KMPv1ke%2FdmN4q2pVJsIFYMSISEFXGsu%2FM3P15Uq8UwlBoTP3fNtwORHUihbQBLsta67e3wRrASXt4bJuea%2BqH5XAB9LC1vQ0%2BTvgD%2F8IalQkwQtKYzUy3WLNqAkxV7MfLULlpLGV7W6dg0eVRt3rBncVZ33KTncmgH9JjTmRzHX8GORvnHHIMW9waMS&X-Amz-Signature=addc6cc16d96dc8320933b4eabc810972306b0c982df3977ab9e26690bed0bed&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLMUG4Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIM3qLVu24BNWa2Zg7metYi6uHf9uDy9wor%2BXr0N9T9gIhAJAbnDy%2Bp3WBtDO8TBx5WwIJY2eZF66wb%2BOKhNyl1mdjKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaENVNJk8qav6WmT8q3APwWIitLgW3TSXjs89E%2BIDmXGcg5NklAuhoIAXALf78LyK1LtZ4WKhSjXju0fmNjYIPsc1K08znDUkbukhd9KN0Zo3lvL41KkuprVH43QpwqgS9rB2bhz7ebXf8HzSQeW1nvbUyJmwHtjdqF9sBrd9jpmcBr1umWpXpdAMaqlCJ08BcxzwAsnvzngl2TkSk5bg6%2BMKukBjbHCEAC0qCI%2FFc4sNHEC2UdKxT0wd0wKiPADlrl7fmlOKpmjECewMeUcK2djKwHTu%2FY5pTx%2FMcvKsM4POZjSl3MaeAMocNXt18OO5TJJKMoYcTVVqJkDhDefWn0xJTYtBzo4EVi%2BTbyPeTKg4weymHnktUptcHklNpden0TbY02twrKzLHju9S4W%2F7210hxK9UULhuDYthIeKqYBNaYaPq5lzo1hjUFB7WUR7QSZpGmNJNquQAfqqTtjifJldLjKmm1jHhsEJnPJ2BZlfsHChq9s%2FJjDsTA0dwW7uHU2lN7L%2BkrMfnd7npFZHGEzhX6U9CFSCGJuaajxkApANtoqwrxiA7G2DD6Yory8s4Z20MVP30PGAAaqN%2BSoIqeKKt853PD0ZIxFOhLtIX8xAMtavBxTeYw9aD03D0T%2BB0%2Bl7fcvSTciJeIDC3%2BMPABjqkAUutcFOQhdtiRdnHiGuyBMUkYFSRF4bj3KMPv1ke%2FdmN4q2pVJsIFYMSISEFXGsu%2FM3P15Uq8UwlBoTP3fNtwORHUihbQBLsta67e3wRrASXt4bJuea%2BqH5XAB9LC1vQ0%2BTvgD%2F8IalQkwQtKYzUy3WLNqAkxV7MfLULlpLGV7W6dg0eVRt3rBncVZ33KTncmgH9JjTmRzHX8GORvnHHIMW9waMS&X-Amz-Signature=ee5a858bcbdf241b2bb070eb1628c2f4c3c4e79eff598001484e03ec30422613&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLMUG4Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIM3qLVu24BNWa2Zg7metYi6uHf9uDy9wor%2BXr0N9T9gIhAJAbnDy%2Bp3WBtDO8TBx5WwIJY2eZF66wb%2BOKhNyl1mdjKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaENVNJk8qav6WmT8q3APwWIitLgW3TSXjs89E%2BIDmXGcg5NklAuhoIAXALf78LyK1LtZ4WKhSjXju0fmNjYIPsc1K08znDUkbukhd9KN0Zo3lvL41KkuprVH43QpwqgS9rB2bhz7ebXf8HzSQeW1nvbUyJmwHtjdqF9sBrd9jpmcBr1umWpXpdAMaqlCJ08BcxzwAsnvzngl2TkSk5bg6%2BMKukBjbHCEAC0qCI%2FFc4sNHEC2UdKxT0wd0wKiPADlrl7fmlOKpmjECewMeUcK2djKwHTu%2FY5pTx%2FMcvKsM4POZjSl3MaeAMocNXt18OO5TJJKMoYcTVVqJkDhDefWn0xJTYtBzo4EVi%2BTbyPeTKg4weymHnktUptcHklNpden0TbY02twrKzLHju9S4W%2F7210hxK9UULhuDYthIeKqYBNaYaPq5lzo1hjUFB7WUR7QSZpGmNJNquQAfqqTtjifJldLjKmm1jHhsEJnPJ2BZlfsHChq9s%2FJjDsTA0dwW7uHU2lN7L%2BkrMfnd7npFZHGEzhX6U9CFSCGJuaajxkApANtoqwrxiA7G2DD6Yory8s4Z20MVP30PGAAaqN%2BSoIqeKKt853PD0ZIxFOhLtIX8xAMtavBxTeYw9aD03D0T%2BB0%2Bl7fcvSTciJeIDC3%2BMPABjqkAUutcFOQhdtiRdnHiGuyBMUkYFSRF4bj3KMPv1ke%2FdmN4q2pVJsIFYMSISEFXGsu%2FM3P15Uq8UwlBoTP3fNtwORHUihbQBLsta67e3wRrASXt4bJuea%2BqH5XAB9LC1vQ0%2BTvgD%2F8IalQkwQtKYzUy3WLNqAkxV7MfLULlpLGV7W6dg0eVRt3rBncVZ33KTncmgH9JjTmRzHX8GORvnHHIMW9waMS&X-Amz-Signature=10d111403e3e1579018ff621ac171173b88946f41f333b1ceeb5ee0e4243ab2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLMUG4Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIM3qLVu24BNWa2Zg7metYi6uHf9uDy9wor%2BXr0N9T9gIhAJAbnDy%2Bp3WBtDO8TBx5WwIJY2eZF66wb%2BOKhNyl1mdjKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaENVNJk8qav6WmT8q3APwWIitLgW3TSXjs89E%2BIDmXGcg5NklAuhoIAXALf78LyK1LtZ4WKhSjXju0fmNjYIPsc1K08znDUkbukhd9KN0Zo3lvL41KkuprVH43QpwqgS9rB2bhz7ebXf8HzSQeW1nvbUyJmwHtjdqF9sBrd9jpmcBr1umWpXpdAMaqlCJ08BcxzwAsnvzngl2TkSk5bg6%2BMKukBjbHCEAC0qCI%2FFc4sNHEC2UdKxT0wd0wKiPADlrl7fmlOKpmjECewMeUcK2djKwHTu%2FY5pTx%2FMcvKsM4POZjSl3MaeAMocNXt18OO5TJJKMoYcTVVqJkDhDefWn0xJTYtBzo4EVi%2BTbyPeTKg4weymHnktUptcHklNpden0TbY02twrKzLHju9S4W%2F7210hxK9UULhuDYthIeKqYBNaYaPq5lzo1hjUFB7WUR7QSZpGmNJNquQAfqqTtjifJldLjKmm1jHhsEJnPJ2BZlfsHChq9s%2FJjDsTA0dwW7uHU2lN7L%2BkrMfnd7npFZHGEzhX6U9CFSCGJuaajxkApANtoqwrxiA7G2DD6Yory8s4Z20MVP30PGAAaqN%2BSoIqeKKt853PD0ZIxFOhLtIX8xAMtavBxTeYw9aD03D0T%2BB0%2Bl7fcvSTciJeIDC3%2BMPABjqkAUutcFOQhdtiRdnHiGuyBMUkYFSRF4bj3KMPv1ke%2FdmN4q2pVJsIFYMSISEFXGsu%2FM3P15Uq8UwlBoTP3fNtwORHUihbQBLsta67e3wRrASXt4bJuea%2BqH5XAB9LC1vQ0%2BTvgD%2F8IalQkwQtKYzUy3WLNqAkxV7MfLULlpLGV7W6dg0eVRt3rBncVZ33KTncmgH9JjTmRzHX8GORvnHHIMW9waMS&X-Amz-Signature=4a34cab98e2569650a2a3dacd76136595cf6424668173332268f7c8e240acc27&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
