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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4ML5W4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHTyP3AKiGEOxJFOn8SFb6inYBDxDH9RQ8V%2FtdtLmY4OAiAjeGYpmrcZM31j%2FZOhdsowZ6ZOJ2P4RNEjyfK3mvp9miqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNt%2BVrQgEnBYMqLVHKtwDY4oeNPujzJRUi4H%2Fr%2FPp5lLdXoMsdCj7rnsEf%2B2C2u3M%2FGfEM8LoiaAV3YxHku028WuT3nsnQsqmCh8jRd94CZAVaGSofF6ofToWjr0OS35etmJiW9ss%2Fo0S8ZpBfeGE8FnfRhBxmB1ix1XUv2pczhvgyDWL%2B09pY4G1sxNBFCtykEau06kGS1o%2Bq3bqMhsbyoqr2fVsl9tLi7cZmY9hEEDjU05ELJbNLVOnCS%2FojYU0tDbNlBV99NDqyN%2BT54EZ%2BeuGHx8K%2FvDrYlRF6q1VZTsym70A0gG%2FZiM9a70d4YC%2FlFp1GpKErcej3lL6BZoz4FvEkTsvZAcSFwWe0bJWrPYBoh%2FrNZtN%2BlXqHFzC81SJMOZF7j%2FORkNTi6MNnb4TUq%2F1VkdETX%2BTl8ANeM95Ntj%2BhWszHN%2BhkgIPwRNNyIwifS3D%2F1D6qDLnfaYkiC5YQwmu7DGBlugevshbHMNPNqQ30TorGzy1FWh39%2FiEoWvjIO2Kk0pUb0sYARMoPet69fDwHnn6l79j2%2ByXXJoEJ61zD89Hi21L%2BZTkf5n4NjtdvZmcXa%2FzsWsbu7KrVHzD1WptTLiUVzaH0Disz8%2FUycDaAZ1W6pnq9KCzf623nsaufDHEB0m%2FIO6epJowvYHkvwY6pgHObneZRb0LcoSABkXyErNtOSESEE0eJlmBpQXF1%2Ff%2FW4dIGxSxkqITeUJYH%2BCZ7h6rZZvFvtK0acfFTY8r5v30VrZ2c8zbO%2Bd8pVnxmsf5XNrQs6rEvc9pt9JI2313Qw%2BUDIe8%2B421OW%2FvngjEPpZJmByPNh%2FWOZr2V%2B1BzGG9htriIab3p76nWLf4yZycdg%2FBIUrmjFNbwP5kd8oCErxBLb9BH1si&X-Amz-Signature=9b649d475892534e5cf6f4605b9642ab0146117cc6b0099ac13882d381c59a00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4ML5W4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHTyP3AKiGEOxJFOn8SFb6inYBDxDH9RQ8V%2FtdtLmY4OAiAjeGYpmrcZM31j%2FZOhdsowZ6ZOJ2P4RNEjyfK3mvp9miqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNt%2BVrQgEnBYMqLVHKtwDY4oeNPujzJRUi4H%2Fr%2FPp5lLdXoMsdCj7rnsEf%2B2C2u3M%2FGfEM8LoiaAV3YxHku028WuT3nsnQsqmCh8jRd94CZAVaGSofF6ofToWjr0OS35etmJiW9ss%2Fo0S8ZpBfeGE8FnfRhBxmB1ix1XUv2pczhvgyDWL%2B09pY4G1sxNBFCtykEau06kGS1o%2Bq3bqMhsbyoqr2fVsl9tLi7cZmY9hEEDjU05ELJbNLVOnCS%2FojYU0tDbNlBV99NDqyN%2BT54EZ%2BeuGHx8K%2FvDrYlRF6q1VZTsym70A0gG%2FZiM9a70d4YC%2FlFp1GpKErcej3lL6BZoz4FvEkTsvZAcSFwWe0bJWrPYBoh%2FrNZtN%2BlXqHFzC81SJMOZF7j%2FORkNTi6MNnb4TUq%2F1VkdETX%2BTl8ANeM95Ntj%2BhWszHN%2BhkgIPwRNNyIwifS3D%2F1D6qDLnfaYkiC5YQwmu7DGBlugevshbHMNPNqQ30TorGzy1FWh39%2FiEoWvjIO2Kk0pUb0sYARMoPet69fDwHnn6l79j2%2ByXXJoEJ61zD89Hi21L%2BZTkf5n4NjtdvZmcXa%2FzsWsbu7KrVHzD1WptTLiUVzaH0Disz8%2FUycDaAZ1W6pnq9KCzf623nsaufDHEB0m%2FIO6epJowvYHkvwY6pgHObneZRb0LcoSABkXyErNtOSESEE0eJlmBpQXF1%2Ff%2FW4dIGxSxkqITeUJYH%2BCZ7h6rZZvFvtK0acfFTY8r5v30VrZ2c8zbO%2Bd8pVnxmsf5XNrQs6rEvc9pt9JI2313Qw%2BUDIe8%2B421OW%2FvngjEPpZJmByPNh%2FWOZr2V%2B1BzGG9htriIab3p76nWLf4yZycdg%2FBIUrmjFNbwP5kd8oCErxBLb9BH1si&X-Amz-Signature=974ce70577b674fcecf9d244a07e418447544b2db1bb58afc40a3427c3072233&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4ML5W4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHTyP3AKiGEOxJFOn8SFb6inYBDxDH9RQ8V%2FtdtLmY4OAiAjeGYpmrcZM31j%2FZOhdsowZ6ZOJ2P4RNEjyfK3mvp9miqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNt%2BVrQgEnBYMqLVHKtwDY4oeNPujzJRUi4H%2Fr%2FPp5lLdXoMsdCj7rnsEf%2B2C2u3M%2FGfEM8LoiaAV3YxHku028WuT3nsnQsqmCh8jRd94CZAVaGSofF6ofToWjr0OS35etmJiW9ss%2Fo0S8ZpBfeGE8FnfRhBxmB1ix1XUv2pczhvgyDWL%2B09pY4G1sxNBFCtykEau06kGS1o%2Bq3bqMhsbyoqr2fVsl9tLi7cZmY9hEEDjU05ELJbNLVOnCS%2FojYU0tDbNlBV99NDqyN%2BT54EZ%2BeuGHx8K%2FvDrYlRF6q1VZTsym70A0gG%2FZiM9a70d4YC%2FlFp1GpKErcej3lL6BZoz4FvEkTsvZAcSFwWe0bJWrPYBoh%2FrNZtN%2BlXqHFzC81SJMOZF7j%2FORkNTi6MNnb4TUq%2F1VkdETX%2BTl8ANeM95Ntj%2BhWszHN%2BhkgIPwRNNyIwifS3D%2F1D6qDLnfaYkiC5YQwmu7DGBlugevshbHMNPNqQ30TorGzy1FWh39%2FiEoWvjIO2Kk0pUb0sYARMoPet69fDwHnn6l79j2%2ByXXJoEJ61zD89Hi21L%2BZTkf5n4NjtdvZmcXa%2FzsWsbu7KrVHzD1WptTLiUVzaH0Disz8%2FUycDaAZ1W6pnq9KCzf623nsaufDHEB0m%2FIO6epJowvYHkvwY6pgHObneZRb0LcoSABkXyErNtOSESEE0eJlmBpQXF1%2Ff%2FW4dIGxSxkqITeUJYH%2BCZ7h6rZZvFvtK0acfFTY8r5v30VrZ2c8zbO%2Bd8pVnxmsf5XNrQs6rEvc9pt9JI2313Qw%2BUDIe8%2B421OW%2FvngjEPpZJmByPNh%2FWOZr2V%2B1BzGG9htriIab3p76nWLf4yZycdg%2FBIUrmjFNbwP5kd8oCErxBLb9BH1si&X-Amz-Signature=ff3dfa5c2771606a58d945974604b61a50430de2b16136f7b275abfeb444261b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4ML5W4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHTyP3AKiGEOxJFOn8SFb6inYBDxDH9RQ8V%2FtdtLmY4OAiAjeGYpmrcZM31j%2FZOhdsowZ6ZOJ2P4RNEjyfK3mvp9miqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNt%2BVrQgEnBYMqLVHKtwDY4oeNPujzJRUi4H%2Fr%2FPp5lLdXoMsdCj7rnsEf%2B2C2u3M%2FGfEM8LoiaAV3YxHku028WuT3nsnQsqmCh8jRd94CZAVaGSofF6ofToWjr0OS35etmJiW9ss%2Fo0S8ZpBfeGE8FnfRhBxmB1ix1XUv2pczhvgyDWL%2B09pY4G1sxNBFCtykEau06kGS1o%2Bq3bqMhsbyoqr2fVsl9tLi7cZmY9hEEDjU05ELJbNLVOnCS%2FojYU0tDbNlBV99NDqyN%2BT54EZ%2BeuGHx8K%2FvDrYlRF6q1VZTsym70A0gG%2FZiM9a70d4YC%2FlFp1GpKErcej3lL6BZoz4FvEkTsvZAcSFwWe0bJWrPYBoh%2FrNZtN%2BlXqHFzC81SJMOZF7j%2FORkNTi6MNnb4TUq%2F1VkdETX%2BTl8ANeM95Ntj%2BhWszHN%2BhkgIPwRNNyIwifS3D%2F1D6qDLnfaYkiC5YQwmu7DGBlugevshbHMNPNqQ30TorGzy1FWh39%2FiEoWvjIO2Kk0pUb0sYARMoPet69fDwHnn6l79j2%2ByXXJoEJ61zD89Hi21L%2BZTkf5n4NjtdvZmcXa%2FzsWsbu7KrVHzD1WptTLiUVzaH0Disz8%2FUycDaAZ1W6pnq9KCzf623nsaufDHEB0m%2FIO6epJowvYHkvwY6pgHObneZRb0LcoSABkXyErNtOSESEE0eJlmBpQXF1%2Ff%2FW4dIGxSxkqITeUJYH%2BCZ7h6rZZvFvtK0acfFTY8r5v30VrZ2c8zbO%2Bd8pVnxmsf5XNrQs6rEvc9pt9JI2313Qw%2BUDIe8%2B421OW%2FvngjEPpZJmByPNh%2FWOZr2V%2B1BzGG9htriIab3p76nWLf4yZycdg%2FBIUrmjFNbwP5kd8oCErxBLb9BH1si&X-Amz-Signature=3e79ec348a21ff703504bf9ef768d54c10a8c367ad2452396bf47477d5aa4609&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4ML5W4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHTyP3AKiGEOxJFOn8SFb6inYBDxDH9RQ8V%2FtdtLmY4OAiAjeGYpmrcZM31j%2FZOhdsowZ6ZOJ2P4RNEjyfK3mvp9miqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNt%2BVrQgEnBYMqLVHKtwDY4oeNPujzJRUi4H%2Fr%2FPp5lLdXoMsdCj7rnsEf%2B2C2u3M%2FGfEM8LoiaAV3YxHku028WuT3nsnQsqmCh8jRd94CZAVaGSofF6ofToWjr0OS35etmJiW9ss%2Fo0S8ZpBfeGE8FnfRhBxmB1ix1XUv2pczhvgyDWL%2B09pY4G1sxNBFCtykEau06kGS1o%2Bq3bqMhsbyoqr2fVsl9tLi7cZmY9hEEDjU05ELJbNLVOnCS%2FojYU0tDbNlBV99NDqyN%2BT54EZ%2BeuGHx8K%2FvDrYlRF6q1VZTsym70A0gG%2FZiM9a70d4YC%2FlFp1GpKErcej3lL6BZoz4FvEkTsvZAcSFwWe0bJWrPYBoh%2FrNZtN%2BlXqHFzC81SJMOZF7j%2FORkNTi6MNnb4TUq%2F1VkdETX%2BTl8ANeM95Ntj%2BhWszHN%2BhkgIPwRNNyIwifS3D%2F1D6qDLnfaYkiC5YQwmu7DGBlugevshbHMNPNqQ30TorGzy1FWh39%2FiEoWvjIO2Kk0pUb0sYARMoPet69fDwHnn6l79j2%2ByXXJoEJ61zD89Hi21L%2BZTkf5n4NjtdvZmcXa%2FzsWsbu7KrVHzD1WptTLiUVzaH0Disz8%2FUycDaAZ1W6pnq9KCzf623nsaufDHEB0m%2FIO6epJowvYHkvwY6pgHObneZRb0LcoSABkXyErNtOSESEE0eJlmBpQXF1%2Ff%2FW4dIGxSxkqITeUJYH%2BCZ7h6rZZvFvtK0acfFTY8r5v30VrZ2c8zbO%2Bd8pVnxmsf5XNrQs6rEvc9pt9JI2313Qw%2BUDIe8%2B421OW%2FvngjEPpZJmByPNh%2FWOZr2V%2B1BzGG9htriIab3p76nWLf4yZycdg%2FBIUrmjFNbwP5kd8oCErxBLb9BH1si&X-Amz-Signature=07a8e30034ac1267b42c21989214843528a9387ce855c7c88cbe5745f0090ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
