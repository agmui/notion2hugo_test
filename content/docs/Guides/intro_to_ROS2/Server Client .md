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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEOW7MA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4nMSWCaRUjn7KJcj5XWbClgt3cSXf78WE5jNFGaVmsAiA3YMSiVmPh9VGFzykB3XZGo9V9qdPbzyYBnIbsXpMZHyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMpngaxe256FQyxzXvKtwDFaWAgAB2l6%2F9zWPTbiCsADkrG8fsar7a5Y0CPa9JezmzpjRdabHdoEAFnDZEzidVst8vPNK%2BY7R4wFQ9z%2FAr8yDhv13BoLTmnix2ECv44VcpQVWk%2FGsFEOB3KqWlMZ5RC26mYyz5PtUnR7qpBXJjMBHFXH6TfLdu5VCGVfpop5wSdmlaPwIXgwXjoNACuf4vvE0IG7PU6KDJxbRiI%2F60mIwgiYf9aHQNau9ukNw0mX96hpb9yykp70jWgm3QvPkH3BVbpUmAh%2BeSUyr%2FEa9e2Gb9AvjUsZ7tJkRhfhl2frJMJNmS9xp9ifhejtvs2mcNCE0JOaZl6kqnjexziLO6oU6Hp3uZ3852hHltSYBwNuDJo2AcKxhPFpksQ6MNDzC5QV%2Bwtja3%2FZehbsAqclFriscKH%2Fhsnmb4dKbdemcOnJZk5cfw3BQO%2F41BI5N%2F%2FHRcBGLvKo1OsucLtKQGoz6eJogiRzdZIvsV2hseJeE8yq2QykUqvvKAIq36RAqJtoAUZR3XmoEeFNKGs8eT1i%2FJFl5Lq0PE408N%2Bxv1XM13OEXFfv3SD02689%2Fv%2B6uQCum077M5XMYhuoxBBQZeS%2FKU53XslwXjKIigmITCYe2FKy88S8BqPemvNVOwD7Ew2tekwQY6pgEAgIm%2BFhiM2QHG84d%2Bvdcc9DWCZWtKdq1Br02O6W6t22%2Fm0WIHG2S0Dof5mm%2BBQ05uOHfbdjK2qkZ34nUmlciH7ACe%2Fn6NenvZ4VuGzeb2hxidfO%2BfiYye4fphSPP%2BDvCaT9z27mQoibZo9Hii7WkIfK1XCWftAbKosNsurq21T4KEntB%2FVVyxTTbbseUVQuMpujqRytaPFBRGHRsaLavrV%2BrEYXod&X-Amz-Signature=92f2917dd67aab68acb7857f455d2a85d71995f3c47ee642e152ff425854f6c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEOW7MA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4nMSWCaRUjn7KJcj5XWbClgt3cSXf78WE5jNFGaVmsAiA3YMSiVmPh9VGFzykB3XZGo9V9qdPbzyYBnIbsXpMZHyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMpngaxe256FQyxzXvKtwDFaWAgAB2l6%2F9zWPTbiCsADkrG8fsar7a5Y0CPa9JezmzpjRdabHdoEAFnDZEzidVst8vPNK%2BY7R4wFQ9z%2FAr8yDhv13BoLTmnix2ECv44VcpQVWk%2FGsFEOB3KqWlMZ5RC26mYyz5PtUnR7qpBXJjMBHFXH6TfLdu5VCGVfpop5wSdmlaPwIXgwXjoNACuf4vvE0IG7PU6KDJxbRiI%2F60mIwgiYf9aHQNau9ukNw0mX96hpb9yykp70jWgm3QvPkH3BVbpUmAh%2BeSUyr%2FEa9e2Gb9AvjUsZ7tJkRhfhl2frJMJNmS9xp9ifhejtvs2mcNCE0JOaZl6kqnjexziLO6oU6Hp3uZ3852hHltSYBwNuDJo2AcKxhPFpksQ6MNDzC5QV%2Bwtja3%2FZehbsAqclFriscKH%2Fhsnmb4dKbdemcOnJZk5cfw3BQO%2F41BI5N%2F%2FHRcBGLvKo1OsucLtKQGoz6eJogiRzdZIvsV2hseJeE8yq2QykUqvvKAIq36RAqJtoAUZR3XmoEeFNKGs8eT1i%2FJFl5Lq0PE408N%2Bxv1XM13OEXFfv3SD02689%2Fv%2B6uQCum077M5XMYhuoxBBQZeS%2FKU53XslwXjKIigmITCYe2FKy88S8BqPemvNVOwD7Ew2tekwQY6pgEAgIm%2BFhiM2QHG84d%2Bvdcc9DWCZWtKdq1Br02O6W6t22%2Fm0WIHG2S0Dof5mm%2BBQ05uOHfbdjK2qkZ34nUmlciH7ACe%2Fn6NenvZ4VuGzeb2hxidfO%2BfiYye4fphSPP%2BDvCaT9z27mQoibZo9Hii7WkIfK1XCWftAbKosNsurq21T4KEntB%2FVVyxTTbbseUVQuMpujqRytaPFBRGHRsaLavrV%2BrEYXod&X-Amz-Signature=fb951d90e8ca0c8d798c83dc509b040bbbbfa817b076b65327092ed6aab19163&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEOW7MA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4nMSWCaRUjn7KJcj5XWbClgt3cSXf78WE5jNFGaVmsAiA3YMSiVmPh9VGFzykB3XZGo9V9qdPbzyYBnIbsXpMZHyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMpngaxe256FQyxzXvKtwDFaWAgAB2l6%2F9zWPTbiCsADkrG8fsar7a5Y0CPa9JezmzpjRdabHdoEAFnDZEzidVst8vPNK%2BY7R4wFQ9z%2FAr8yDhv13BoLTmnix2ECv44VcpQVWk%2FGsFEOB3KqWlMZ5RC26mYyz5PtUnR7qpBXJjMBHFXH6TfLdu5VCGVfpop5wSdmlaPwIXgwXjoNACuf4vvE0IG7PU6KDJxbRiI%2F60mIwgiYf9aHQNau9ukNw0mX96hpb9yykp70jWgm3QvPkH3BVbpUmAh%2BeSUyr%2FEa9e2Gb9AvjUsZ7tJkRhfhl2frJMJNmS9xp9ifhejtvs2mcNCE0JOaZl6kqnjexziLO6oU6Hp3uZ3852hHltSYBwNuDJo2AcKxhPFpksQ6MNDzC5QV%2Bwtja3%2FZehbsAqclFriscKH%2Fhsnmb4dKbdemcOnJZk5cfw3BQO%2F41BI5N%2F%2FHRcBGLvKo1OsucLtKQGoz6eJogiRzdZIvsV2hseJeE8yq2QykUqvvKAIq36RAqJtoAUZR3XmoEeFNKGs8eT1i%2FJFl5Lq0PE408N%2Bxv1XM13OEXFfv3SD02689%2Fv%2B6uQCum077M5XMYhuoxBBQZeS%2FKU53XslwXjKIigmITCYe2FKy88S8BqPemvNVOwD7Ew2tekwQY6pgEAgIm%2BFhiM2QHG84d%2Bvdcc9DWCZWtKdq1Br02O6W6t22%2Fm0WIHG2S0Dof5mm%2BBQ05uOHfbdjK2qkZ34nUmlciH7ACe%2Fn6NenvZ4VuGzeb2hxidfO%2BfiYye4fphSPP%2BDvCaT9z27mQoibZo9Hii7WkIfK1XCWftAbKosNsurq21T4KEntB%2FVVyxTTbbseUVQuMpujqRytaPFBRGHRsaLavrV%2BrEYXod&X-Amz-Signature=a1f6bb12fa0fb35e036f92130eab4e9bd97644a56203a0e835c3bd4afa768364&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEOW7MA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4nMSWCaRUjn7KJcj5XWbClgt3cSXf78WE5jNFGaVmsAiA3YMSiVmPh9VGFzykB3XZGo9V9qdPbzyYBnIbsXpMZHyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMpngaxe256FQyxzXvKtwDFaWAgAB2l6%2F9zWPTbiCsADkrG8fsar7a5Y0CPa9JezmzpjRdabHdoEAFnDZEzidVst8vPNK%2BY7R4wFQ9z%2FAr8yDhv13BoLTmnix2ECv44VcpQVWk%2FGsFEOB3KqWlMZ5RC26mYyz5PtUnR7qpBXJjMBHFXH6TfLdu5VCGVfpop5wSdmlaPwIXgwXjoNACuf4vvE0IG7PU6KDJxbRiI%2F60mIwgiYf9aHQNau9ukNw0mX96hpb9yykp70jWgm3QvPkH3BVbpUmAh%2BeSUyr%2FEa9e2Gb9AvjUsZ7tJkRhfhl2frJMJNmS9xp9ifhejtvs2mcNCE0JOaZl6kqnjexziLO6oU6Hp3uZ3852hHltSYBwNuDJo2AcKxhPFpksQ6MNDzC5QV%2Bwtja3%2FZehbsAqclFriscKH%2Fhsnmb4dKbdemcOnJZk5cfw3BQO%2F41BI5N%2F%2FHRcBGLvKo1OsucLtKQGoz6eJogiRzdZIvsV2hseJeE8yq2QykUqvvKAIq36RAqJtoAUZR3XmoEeFNKGs8eT1i%2FJFl5Lq0PE408N%2Bxv1XM13OEXFfv3SD02689%2Fv%2B6uQCum077M5XMYhuoxBBQZeS%2FKU53XslwXjKIigmITCYe2FKy88S8BqPemvNVOwD7Ew2tekwQY6pgEAgIm%2BFhiM2QHG84d%2Bvdcc9DWCZWtKdq1Br02O6W6t22%2Fm0WIHG2S0Dof5mm%2BBQ05uOHfbdjK2qkZ34nUmlciH7ACe%2Fn6NenvZ4VuGzeb2hxidfO%2BfiYye4fphSPP%2BDvCaT9z27mQoibZo9Hii7WkIfK1XCWftAbKosNsurq21T4KEntB%2FVVyxTTbbseUVQuMpujqRytaPFBRGHRsaLavrV%2BrEYXod&X-Amz-Signature=eee2890683eac9b04f3fe13ea850140599da309280799c50ff94142e45289f35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEOW7MA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4nMSWCaRUjn7KJcj5XWbClgt3cSXf78WE5jNFGaVmsAiA3YMSiVmPh9VGFzykB3XZGo9V9qdPbzyYBnIbsXpMZHyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMpngaxe256FQyxzXvKtwDFaWAgAB2l6%2F9zWPTbiCsADkrG8fsar7a5Y0CPa9JezmzpjRdabHdoEAFnDZEzidVst8vPNK%2BY7R4wFQ9z%2FAr8yDhv13BoLTmnix2ECv44VcpQVWk%2FGsFEOB3KqWlMZ5RC26mYyz5PtUnR7qpBXJjMBHFXH6TfLdu5VCGVfpop5wSdmlaPwIXgwXjoNACuf4vvE0IG7PU6KDJxbRiI%2F60mIwgiYf9aHQNau9ukNw0mX96hpb9yykp70jWgm3QvPkH3BVbpUmAh%2BeSUyr%2FEa9e2Gb9AvjUsZ7tJkRhfhl2frJMJNmS9xp9ifhejtvs2mcNCE0JOaZl6kqnjexziLO6oU6Hp3uZ3852hHltSYBwNuDJo2AcKxhPFpksQ6MNDzC5QV%2Bwtja3%2FZehbsAqclFriscKH%2Fhsnmb4dKbdemcOnJZk5cfw3BQO%2F41BI5N%2F%2FHRcBGLvKo1OsucLtKQGoz6eJogiRzdZIvsV2hseJeE8yq2QykUqvvKAIq36RAqJtoAUZR3XmoEeFNKGs8eT1i%2FJFl5Lq0PE408N%2Bxv1XM13OEXFfv3SD02689%2Fv%2B6uQCum077M5XMYhuoxBBQZeS%2FKU53XslwXjKIigmITCYe2FKy88S8BqPemvNVOwD7Ew2tekwQY6pgEAgIm%2BFhiM2QHG84d%2Bvdcc9DWCZWtKdq1Br02O6W6t22%2Fm0WIHG2S0Dof5mm%2BBQ05uOHfbdjK2qkZ34nUmlciH7ACe%2Fn6NenvZ4VuGzeb2hxidfO%2BfiYye4fphSPP%2BDvCaT9z27mQoibZo9Hii7WkIfK1XCWftAbKosNsurq21T4KEntB%2FVVyxTTbbseUVQuMpujqRytaPFBRGHRsaLavrV%2BrEYXod&X-Amz-Signature=2829508a1639900d00159186086f594eae0b95da1bf3dfbf24f0d6f3e66b5d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
