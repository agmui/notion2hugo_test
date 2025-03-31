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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNLAIT6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCHACH3bxxqVnxjV2xsO7tPR01e4cyJXKFJZA5frT3eAgIhAIbwUu%2FQiWmvAHBj0aCqr6semRG7tuaEq6BEOvo2kQEZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJQX2mMUCJT59GTpkq3AO3bTNs5nyPWK0XBo4Iz7mgPlDM9Dz1TxA%2FsTMR1HzFeWn2Jm%2FjBgE%2BF3Yl3HAvo8I%2Bk%2FlX54s2hdbf%2BMtHiWbxXsdZpB40d2nTqLetoUxidThVdjzDrrgyTsE146PkB3J4irw3ltfitUY%2Fg6AJ2B4aROprCL8V4JEEuMJx8U9bEnSUe1jZP6NmgQz5o%2BbkOxIfXTRr6SR58atVgFDshs4HzY2or%2BTQ%2Ft9ijiGdHyIyDRKqpVfRJdPXmFeSQxpQuW7w9Cs2YDtT8qdGekqBzl5id%2BpZOe5FwE6kQLEMwzF1RRPgAA9ZKnaFTh74WDQ9O3pL0qysqEIlUfDFdVRo%2FeHfDI%2BMjaTX82We6tbJOrHXczbX%2F3I5arL93CzE68dyKSkVzYtf1F6DyVdXRlLtk0cy8fnvmqkUCeFtS8U7zKrKtLOK7P6PhaIKRkrchCf9cFFIW6zjNNNlTGJ2oamCITbyQTKZHeYHRJAD5DodZcxEXvyHoMySDtqbSXqrLQosoj5fuYxquuvs5TqcPFpo%2F39N67%2B5LMtYOed01v5%2FcDBTnOgKkqj0REWD04WHjuBSqC%2FIl9oHQhq9zQNSnH7F36lfRZ9uym0PmW4QHjuO%2FUM1cTIZQVnyYDHjhcbXkDDtyai%2FBjqkAf3PIKzQAoBodf%2FxOSKCGaAyqS30hX4Mc0tNSGDuT1TZ4IqtUIKXALpt5Z7bJ%2BawmgmpbwlZ72i%2BFkEeFmTUY7bvHDdPlmPrN08je40XBl%2FnPTCYan5PoGDjndl7sgAoKKitmq3UYuI8eOxoQfSumcHzB0ngw3bXE5xhsAkLvu4YsIoyh2ZaUyX%2FgP68%2B%2BXWUvC%2BwrNGcSWVJ5lqwvBMay%2BkpU4G&X-Amz-Signature=6f48cd29ff3b4ea79e9f418ed9f30e114d5eaf4d93f8bbba04f7e8a70be8da31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNLAIT6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCHACH3bxxqVnxjV2xsO7tPR01e4cyJXKFJZA5frT3eAgIhAIbwUu%2FQiWmvAHBj0aCqr6semRG7tuaEq6BEOvo2kQEZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJQX2mMUCJT59GTpkq3AO3bTNs5nyPWK0XBo4Iz7mgPlDM9Dz1TxA%2FsTMR1HzFeWn2Jm%2FjBgE%2BF3Yl3HAvo8I%2Bk%2FlX54s2hdbf%2BMtHiWbxXsdZpB40d2nTqLetoUxidThVdjzDrrgyTsE146PkB3J4irw3ltfitUY%2Fg6AJ2B4aROprCL8V4JEEuMJx8U9bEnSUe1jZP6NmgQz5o%2BbkOxIfXTRr6SR58atVgFDshs4HzY2or%2BTQ%2Ft9ijiGdHyIyDRKqpVfRJdPXmFeSQxpQuW7w9Cs2YDtT8qdGekqBzl5id%2BpZOe5FwE6kQLEMwzF1RRPgAA9ZKnaFTh74WDQ9O3pL0qysqEIlUfDFdVRo%2FeHfDI%2BMjaTX82We6tbJOrHXczbX%2F3I5arL93CzE68dyKSkVzYtf1F6DyVdXRlLtk0cy8fnvmqkUCeFtS8U7zKrKtLOK7P6PhaIKRkrchCf9cFFIW6zjNNNlTGJ2oamCITbyQTKZHeYHRJAD5DodZcxEXvyHoMySDtqbSXqrLQosoj5fuYxquuvs5TqcPFpo%2F39N67%2B5LMtYOed01v5%2FcDBTnOgKkqj0REWD04WHjuBSqC%2FIl9oHQhq9zQNSnH7F36lfRZ9uym0PmW4QHjuO%2FUM1cTIZQVnyYDHjhcbXkDDtyai%2FBjqkAf3PIKzQAoBodf%2FxOSKCGaAyqS30hX4Mc0tNSGDuT1TZ4IqtUIKXALpt5Z7bJ%2BawmgmpbwlZ72i%2BFkEeFmTUY7bvHDdPlmPrN08je40XBl%2FnPTCYan5PoGDjndl7sgAoKKitmq3UYuI8eOxoQfSumcHzB0ngw3bXE5xhsAkLvu4YsIoyh2ZaUyX%2FgP68%2B%2BXWUvC%2BwrNGcSWVJ5lqwvBMay%2BkpU4G&X-Amz-Signature=a95a188dca95bd8e1e3d258d83e5491a84f3582da17f73ab206ff24d9e954abc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNLAIT6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCHACH3bxxqVnxjV2xsO7tPR01e4cyJXKFJZA5frT3eAgIhAIbwUu%2FQiWmvAHBj0aCqr6semRG7tuaEq6BEOvo2kQEZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJQX2mMUCJT59GTpkq3AO3bTNs5nyPWK0XBo4Iz7mgPlDM9Dz1TxA%2FsTMR1HzFeWn2Jm%2FjBgE%2BF3Yl3HAvo8I%2Bk%2FlX54s2hdbf%2BMtHiWbxXsdZpB40d2nTqLetoUxidThVdjzDrrgyTsE146PkB3J4irw3ltfitUY%2Fg6AJ2B4aROprCL8V4JEEuMJx8U9bEnSUe1jZP6NmgQz5o%2BbkOxIfXTRr6SR58atVgFDshs4HzY2or%2BTQ%2Ft9ijiGdHyIyDRKqpVfRJdPXmFeSQxpQuW7w9Cs2YDtT8qdGekqBzl5id%2BpZOe5FwE6kQLEMwzF1RRPgAA9ZKnaFTh74WDQ9O3pL0qysqEIlUfDFdVRo%2FeHfDI%2BMjaTX82We6tbJOrHXczbX%2F3I5arL93CzE68dyKSkVzYtf1F6DyVdXRlLtk0cy8fnvmqkUCeFtS8U7zKrKtLOK7P6PhaIKRkrchCf9cFFIW6zjNNNlTGJ2oamCITbyQTKZHeYHRJAD5DodZcxEXvyHoMySDtqbSXqrLQosoj5fuYxquuvs5TqcPFpo%2F39N67%2B5LMtYOed01v5%2FcDBTnOgKkqj0REWD04WHjuBSqC%2FIl9oHQhq9zQNSnH7F36lfRZ9uym0PmW4QHjuO%2FUM1cTIZQVnyYDHjhcbXkDDtyai%2FBjqkAf3PIKzQAoBodf%2FxOSKCGaAyqS30hX4Mc0tNSGDuT1TZ4IqtUIKXALpt5Z7bJ%2BawmgmpbwlZ72i%2BFkEeFmTUY7bvHDdPlmPrN08je40XBl%2FnPTCYan5PoGDjndl7sgAoKKitmq3UYuI8eOxoQfSumcHzB0ngw3bXE5xhsAkLvu4YsIoyh2ZaUyX%2FgP68%2B%2BXWUvC%2BwrNGcSWVJ5lqwvBMay%2BkpU4G&X-Amz-Signature=42601be31c6a1c3d531315ce44cfc20008d0b4c108dfa443afb9ee45862a3e68&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNLAIT6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCHACH3bxxqVnxjV2xsO7tPR01e4cyJXKFJZA5frT3eAgIhAIbwUu%2FQiWmvAHBj0aCqr6semRG7tuaEq6BEOvo2kQEZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJQX2mMUCJT59GTpkq3AO3bTNs5nyPWK0XBo4Iz7mgPlDM9Dz1TxA%2FsTMR1HzFeWn2Jm%2FjBgE%2BF3Yl3HAvo8I%2Bk%2FlX54s2hdbf%2BMtHiWbxXsdZpB40d2nTqLetoUxidThVdjzDrrgyTsE146PkB3J4irw3ltfitUY%2Fg6AJ2B4aROprCL8V4JEEuMJx8U9bEnSUe1jZP6NmgQz5o%2BbkOxIfXTRr6SR58atVgFDshs4HzY2or%2BTQ%2Ft9ijiGdHyIyDRKqpVfRJdPXmFeSQxpQuW7w9Cs2YDtT8qdGekqBzl5id%2BpZOe5FwE6kQLEMwzF1RRPgAA9ZKnaFTh74WDQ9O3pL0qysqEIlUfDFdVRo%2FeHfDI%2BMjaTX82We6tbJOrHXczbX%2F3I5arL93CzE68dyKSkVzYtf1F6DyVdXRlLtk0cy8fnvmqkUCeFtS8U7zKrKtLOK7P6PhaIKRkrchCf9cFFIW6zjNNNlTGJ2oamCITbyQTKZHeYHRJAD5DodZcxEXvyHoMySDtqbSXqrLQosoj5fuYxquuvs5TqcPFpo%2F39N67%2B5LMtYOed01v5%2FcDBTnOgKkqj0REWD04WHjuBSqC%2FIl9oHQhq9zQNSnH7F36lfRZ9uym0PmW4QHjuO%2FUM1cTIZQVnyYDHjhcbXkDDtyai%2FBjqkAf3PIKzQAoBodf%2FxOSKCGaAyqS30hX4Mc0tNSGDuT1TZ4IqtUIKXALpt5Z7bJ%2BawmgmpbwlZ72i%2BFkEeFmTUY7bvHDdPlmPrN08je40XBl%2FnPTCYan5PoGDjndl7sgAoKKitmq3UYuI8eOxoQfSumcHzB0ngw3bXE5xhsAkLvu4YsIoyh2ZaUyX%2FgP68%2B%2BXWUvC%2BwrNGcSWVJ5lqwvBMay%2BkpU4G&X-Amz-Signature=5f1e57dddaf46437a881160a341e6807a42011d9aa317dccc45a8fc6f2d6743f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNLAIT6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCHACH3bxxqVnxjV2xsO7tPR01e4cyJXKFJZA5frT3eAgIhAIbwUu%2FQiWmvAHBj0aCqr6semRG7tuaEq6BEOvo2kQEZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJQX2mMUCJT59GTpkq3AO3bTNs5nyPWK0XBo4Iz7mgPlDM9Dz1TxA%2FsTMR1HzFeWn2Jm%2FjBgE%2BF3Yl3HAvo8I%2Bk%2FlX54s2hdbf%2BMtHiWbxXsdZpB40d2nTqLetoUxidThVdjzDrrgyTsE146PkB3J4irw3ltfitUY%2Fg6AJ2B4aROprCL8V4JEEuMJx8U9bEnSUe1jZP6NmgQz5o%2BbkOxIfXTRr6SR58atVgFDshs4HzY2or%2BTQ%2Ft9ijiGdHyIyDRKqpVfRJdPXmFeSQxpQuW7w9Cs2YDtT8qdGekqBzl5id%2BpZOe5FwE6kQLEMwzF1RRPgAA9ZKnaFTh74WDQ9O3pL0qysqEIlUfDFdVRo%2FeHfDI%2BMjaTX82We6tbJOrHXczbX%2F3I5arL93CzE68dyKSkVzYtf1F6DyVdXRlLtk0cy8fnvmqkUCeFtS8U7zKrKtLOK7P6PhaIKRkrchCf9cFFIW6zjNNNlTGJ2oamCITbyQTKZHeYHRJAD5DodZcxEXvyHoMySDtqbSXqrLQosoj5fuYxquuvs5TqcPFpo%2F39N67%2B5LMtYOed01v5%2FcDBTnOgKkqj0REWD04WHjuBSqC%2FIl9oHQhq9zQNSnH7F36lfRZ9uym0PmW4QHjuO%2FUM1cTIZQVnyYDHjhcbXkDDtyai%2FBjqkAf3PIKzQAoBodf%2FxOSKCGaAyqS30hX4Mc0tNSGDuT1TZ4IqtUIKXALpt5Z7bJ%2BawmgmpbwlZ72i%2BFkEeFmTUY7bvHDdPlmPrN08je40XBl%2FnPTCYan5PoGDjndl7sgAoKKitmq3UYuI8eOxoQfSumcHzB0ngw3bXE5xhsAkLvu4YsIoyh2ZaUyX%2FgP68%2B%2BXWUvC%2BwrNGcSWVJ5lqwvBMay%2BkpU4G&X-Amz-Signature=e17a8edffeaed86468832e3c7feee50ef60604513d1f0c009dd8ad6c9f972af1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
