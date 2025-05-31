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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPI6PFYA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDajDOoR4TSQ05ghSRZUFYwHTH8xv2p74YH5nEZa4zAvAiB24ndPySmvw1ddlcdSh7%2FJjf3QAHAPOhjXfMar%2F9ExcyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JN49rRdYdf1NJ5TKtwDwVvKiFcVxV7x0G88XiQsnNi%2BIzIH7bRDaLADk7APqECJia8BDHB6%2FrPvZrocvwMbVmE0%2BS7QBo%2BQlj0Z717vFy6DXk5zz2JsnJaqANgzp0E8bi38DrJm6aE8y7YhhijOGV4nIhWrCkFD3tUqazKgj3zuK0HFi4ANM%2FoBWrUKVTSmR1bk%2F4yz%2BjDqMGpXSnrL5IKvv1IOBB%2BEMFHlZN9Q%2BLCgo8do52Hgw%2FvjHbJS5fHSiAJbnGlGN5bOI28MYmEA7c%2FsqE16Nznou%2FsfE6zgRkckQ03fx512Eak4Hhm76X%2BeleEFELox4OwHXPzFvjOPsCcZrVvtDTYGlhvjAiKxD20eICySvvnVooORP0%2FzbRRT3GX99pdWPR6s804yhLLALozDZC8rymXuPp4YJtdW94xsiS9QdFjg7kLl8EFD0iJjUvWXDNqmLZmpTsHrucojrwjiTe%2FfIcRsc3vW%2FXxle%2B9IZcTrN6c7x8rmew0AobCL2JDbJNFzbWdbQjAcUJOF5UpGV6ddxOxqUz1j0bp%2BaUuq86HTfhmiLbsLi3pKg2ts72yZ7yOFLsIi5cxqcG3oTqCtQSd8pQwJlVGSvNRf9lUr5eZ8obs6AaX0O86ctylz8ej2tS1NSAZDcVwwp%2BXpwQY6pgHnJQIZ3oFkksh0ja8MAehS5IziMB0xSQhc6PeRqAK0772YzLpS8v4O%2BmEI8S%2F0piy46cDByZguf9fmjXNwVvU2sjRDAt5Jx5UjL7xlTzx%2BUWDhBIobxJtSD03Ufnq8fS2O%2Fej4HUdfIDmTut05cvwMauJvHbv%2BAzzsGSZ3hWZ3HWSG1hDjch5Ft%2FeHNLGdmm24xFcLhBYe3yn8qOyx5MxgkVlNC%2Blf&X-Amz-Signature=951d77def0932b4ff7c218787b7fe827543e0cf728b17e97bbba697bbf7c701b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPI6PFYA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDajDOoR4TSQ05ghSRZUFYwHTH8xv2p74YH5nEZa4zAvAiB24ndPySmvw1ddlcdSh7%2FJjf3QAHAPOhjXfMar%2F9ExcyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JN49rRdYdf1NJ5TKtwDwVvKiFcVxV7x0G88XiQsnNi%2BIzIH7bRDaLADk7APqECJia8BDHB6%2FrPvZrocvwMbVmE0%2BS7QBo%2BQlj0Z717vFy6DXk5zz2JsnJaqANgzp0E8bi38DrJm6aE8y7YhhijOGV4nIhWrCkFD3tUqazKgj3zuK0HFi4ANM%2FoBWrUKVTSmR1bk%2F4yz%2BjDqMGpXSnrL5IKvv1IOBB%2BEMFHlZN9Q%2BLCgo8do52Hgw%2FvjHbJS5fHSiAJbnGlGN5bOI28MYmEA7c%2FsqE16Nznou%2FsfE6zgRkckQ03fx512Eak4Hhm76X%2BeleEFELox4OwHXPzFvjOPsCcZrVvtDTYGlhvjAiKxD20eICySvvnVooORP0%2FzbRRT3GX99pdWPR6s804yhLLALozDZC8rymXuPp4YJtdW94xsiS9QdFjg7kLl8EFD0iJjUvWXDNqmLZmpTsHrucojrwjiTe%2FfIcRsc3vW%2FXxle%2B9IZcTrN6c7x8rmew0AobCL2JDbJNFzbWdbQjAcUJOF5UpGV6ddxOxqUz1j0bp%2BaUuq86HTfhmiLbsLi3pKg2ts72yZ7yOFLsIi5cxqcG3oTqCtQSd8pQwJlVGSvNRf9lUr5eZ8obs6AaX0O86ctylz8ej2tS1NSAZDcVwwp%2BXpwQY6pgHnJQIZ3oFkksh0ja8MAehS5IziMB0xSQhc6PeRqAK0772YzLpS8v4O%2BmEI8S%2F0piy46cDByZguf9fmjXNwVvU2sjRDAt5Jx5UjL7xlTzx%2BUWDhBIobxJtSD03Ufnq8fS2O%2Fej4HUdfIDmTut05cvwMauJvHbv%2BAzzsGSZ3hWZ3HWSG1hDjch5Ft%2FeHNLGdmm24xFcLhBYe3yn8qOyx5MxgkVlNC%2Blf&X-Amz-Signature=40d43fb6fe8c848c5c3af02dddb785ae6742fde54393ce6762bc4e53369bb0ee&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPI6PFYA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDajDOoR4TSQ05ghSRZUFYwHTH8xv2p74YH5nEZa4zAvAiB24ndPySmvw1ddlcdSh7%2FJjf3QAHAPOhjXfMar%2F9ExcyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JN49rRdYdf1NJ5TKtwDwVvKiFcVxV7x0G88XiQsnNi%2BIzIH7bRDaLADk7APqECJia8BDHB6%2FrPvZrocvwMbVmE0%2BS7QBo%2BQlj0Z717vFy6DXk5zz2JsnJaqANgzp0E8bi38DrJm6aE8y7YhhijOGV4nIhWrCkFD3tUqazKgj3zuK0HFi4ANM%2FoBWrUKVTSmR1bk%2F4yz%2BjDqMGpXSnrL5IKvv1IOBB%2BEMFHlZN9Q%2BLCgo8do52Hgw%2FvjHbJS5fHSiAJbnGlGN5bOI28MYmEA7c%2FsqE16Nznou%2FsfE6zgRkckQ03fx512Eak4Hhm76X%2BeleEFELox4OwHXPzFvjOPsCcZrVvtDTYGlhvjAiKxD20eICySvvnVooORP0%2FzbRRT3GX99pdWPR6s804yhLLALozDZC8rymXuPp4YJtdW94xsiS9QdFjg7kLl8EFD0iJjUvWXDNqmLZmpTsHrucojrwjiTe%2FfIcRsc3vW%2FXxle%2B9IZcTrN6c7x8rmew0AobCL2JDbJNFzbWdbQjAcUJOF5UpGV6ddxOxqUz1j0bp%2BaUuq86HTfhmiLbsLi3pKg2ts72yZ7yOFLsIi5cxqcG3oTqCtQSd8pQwJlVGSvNRf9lUr5eZ8obs6AaX0O86ctylz8ej2tS1NSAZDcVwwp%2BXpwQY6pgHnJQIZ3oFkksh0ja8MAehS5IziMB0xSQhc6PeRqAK0772YzLpS8v4O%2BmEI8S%2F0piy46cDByZguf9fmjXNwVvU2sjRDAt5Jx5UjL7xlTzx%2BUWDhBIobxJtSD03Ufnq8fS2O%2Fej4HUdfIDmTut05cvwMauJvHbv%2BAzzsGSZ3hWZ3HWSG1hDjch5Ft%2FeHNLGdmm24xFcLhBYe3yn8qOyx5MxgkVlNC%2Blf&X-Amz-Signature=b60e6a3f7eba8bf1cd2e3e5f718993e5853f0f212129137a77fd9956ba65ea8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPI6PFYA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDajDOoR4TSQ05ghSRZUFYwHTH8xv2p74YH5nEZa4zAvAiB24ndPySmvw1ddlcdSh7%2FJjf3QAHAPOhjXfMar%2F9ExcyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JN49rRdYdf1NJ5TKtwDwVvKiFcVxV7x0G88XiQsnNi%2BIzIH7bRDaLADk7APqECJia8BDHB6%2FrPvZrocvwMbVmE0%2BS7QBo%2BQlj0Z717vFy6DXk5zz2JsnJaqANgzp0E8bi38DrJm6aE8y7YhhijOGV4nIhWrCkFD3tUqazKgj3zuK0HFi4ANM%2FoBWrUKVTSmR1bk%2F4yz%2BjDqMGpXSnrL5IKvv1IOBB%2BEMFHlZN9Q%2BLCgo8do52Hgw%2FvjHbJS5fHSiAJbnGlGN5bOI28MYmEA7c%2FsqE16Nznou%2FsfE6zgRkckQ03fx512Eak4Hhm76X%2BeleEFELox4OwHXPzFvjOPsCcZrVvtDTYGlhvjAiKxD20eICySvvnVooORP0%2FzbRRT3GX99pdWPR6s804yhLLALozDZC8rymXuPp4YJtdW94xsiS9QdFjg7kLl8EFD0iJjUvWXDNqmLZmpTsHrucojrwjiTe%2FfIcRsc3vW%2FXxle%2B9IZcTrN6c7x8rmew0AobCL2JDbJNFzbWdbQjAcUJOF5UpGV6ddxOxqUz1j0bp%2BaUuq86HTfhmiLbsLi3pKg2ts72yZ7yOFLsIi5cxqcG3oTqCtQSd8pQwJlVGSvNRf9lUr5eZ8obs6AaX0O86ctylz8ej2tS1NSAZDcVwwp%2BXpwQY6pgHnJQIZ3oFkksh0ja8MAehS5IziMB0xSQhc6PeRqAK0772YzLpS8v4O%2BmEI8S%2F0piy46cDByZguf9fmjXNwVvU2sjRDAt5Jx5UjL7xlTzx%2BUWDhBIobxJtSD03Ufnq8fS2O%2Fej4HUdfIDmTut05cvwMauJvHbv%2BAzzsGSZ3hWZ3HWSG1hDjch5Ft%2FeHNLGdmm24xFcLhBYe3yn8qOyx5MxgkVlNC%2Blf&X-Amz-Signature=691004eba15afd3e63c4b0a0e086d228d382108e2d50553be75e09943733013e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPI6PFYA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDajDOoR4TSQ05ghSRZUFYwHTH8xv2p74YH5nEZa4zAvAiB24ndPySmvw1ddlcdSh7%2FJjf3QAHAPOhjXfMar%2F9ExcyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JN49rRdYdf1NJ5TKtwDwVvKiFcVxV7x0G88XiQsnNi%2BIzIH7bRDaLADk7APqECJia8BDHB6%2FrPvZrocvwMbVmE0%2BS7QBo%2BQlj0Z717vFy6DXk5zz2JsnJaqANgzp0E8bi38DrJm6aE8y7YhhijOGV4nIhWrCkFD3tUqazKgj3zuK0HFi4ANM%2FoBWrUKVTSmR1bk%2F4yz%2BjDqMGpXSnrL5IKvv1IOBB%2BEMFHlZN9Q%2BLCgo8do52Hgw%2FvjHbJS5fHSiAJbnGlGN5bOI28MYmEA7c%2FsqE16Nznou%2FsfE6zgRkckQ03fx512Eak4Hhm76X%2BeleEFELox4OwHXPzFvjOPsCcZrVvtDTYGlhvjAiKxD20eICySvvnVooORP0%2FzbRRT3GX99pdWPR6s804yhLLALozDZC8rymXuPp4YJtdW94xsiS9QdFjg7kLl8EFD0iJjUvWXDNqmLZmpTsHrucojrwjiTe%2FfIcRsc3vW%2FXxle%2B9IZcTrN6c7x8rmew0AobCL2JDbJNFzbWdbQjAcUJOF5UpGV6ddxOxqUz1j0bp%2BaUuq86HTfhmiLbsLi3pKg2ts72yZ7yOFLsIi5cxqcG3oTqCtQSd8pQwJlVGSvNRf9lUr5eZ8obs6AaX0O86ctylz8ej2tS1NSAZDcVwwp%2BXpwQY6pgHnJQIZ3oFkksh0ja8MAehS5IziMB0xSQhc6PeRqAK0772YzLpS8v4O%2BmEI8S%2F0piy46cDByZguf9fmjXNwVvU2sjRDAt5Jx5UjL7xlTzx%2BUWDhBIobxJtSD03Ufnq8fS2O%2Fej4HUdfIDmTut05cvwMauJvHbv%2BAzzsGSZ3hWZ3HWSG1hDjch5Ft%2FeHNLGdmm24xFcLhBYe3yn8qOyx5MxgkVlNC%2Blf&X-Amz-Signature=7fb4fc04cd4a3ab528e0603c0aab4cee43c6569c79c1e5a22dc4f814c536f131&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
