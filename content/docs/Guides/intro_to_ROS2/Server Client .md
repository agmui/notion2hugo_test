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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA47YFQ6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCOpnROXRUPhcoIk9dU1Mw5m2%2FCyuBT7O6OP1EXUXhrLAIhAL%2BsMPJ%2FYOnh67rMhjX45zJ9wxezVbPPraBgufp7%2BiT0Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzGxTZXy8TGeRr0vOEq3APwhpmz8046nYizv%2BU%2FBcfLN6fM0NvWYjtaC2C7PMyq5OKkdCbcnvNwMQR%2Fn0uGiPoShf9%2Bsa5hefcQ3w8Dk3hf9A1rVjK0Q3tXSXP3bJ6Bc3q%2FXZU98t9PZL%2BTGZf%2FQKTxqtNahPlnGbToeuOVAmIE4jwpvtKETH%2BPohisdkPjlaph0PPie3bf%2FrF1BxFmzgcOH1MUhbx0JxyZ4Yo8BHz8PTjQ6yJHgqgUWUcRc2MdmZOYGVyvFFHAG7qkwltelLb9AI2gnecxHTTEm2mlgfTGAQK2h0Jj0yG065cddnMBAki4vwf%2BKHgyXLL7eE5a73S5QggAjy6gTOA2gnx3ilIB9I%2FW2Fja63C9yd7LHYLQTk0atHw%2BkANMLX0UVj6RbQ9Dste4q7TenvRYjBx1BCfXbvRXWEoXL04Mi%2B5mm714sNkdX2Jgly%2B1RDbiHmERlkORJ1deYLfcaeEqWCeKFbiqRor59mjP%2FQbYQ046GWfxZHXr01B%2BEEjgD3pW4tj2h%2FTRw71qCXJiJDrwgUfY8o7id7%2FG%2BX%2BtZb8xwoQ296mGxe1opq%2F83hKdMSZhVlaiVpMtXIDt4yt5fk7ICVWgQIdbWV5kZhhKz5m4j4y%2Bq07EB%2BV8X5%2FQ4PJhxCfo5jCbhaLDBjqkAbfDxXQ0%2FXe8fS%2BQDsYlVrC4u0Mwe3o5nHkvsYrQsUOH2562LjmFvpU9Hgm2eXbFmMepSu%2F0V4lgkKZ9R8WSJJWK1Foa9u%2F%2BGDUaWTqN3GSOiJ2H23yX4n2KVANblbXGRszIC6IdUbQf5ICePhR9WmUzgNzofa9I%2FjFosZ22UXlTN3tNh0knTp6OoFf8QUbVyUOMF96Aak56hxIFG1BLX9ISWiDS&X-Amz-Signature=328d0ae8595baf3b35180aea730030d110550a62cd3fdf18963d1cf930706bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA47YFQ6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCOpnROXRUPhcoIk9dU1Mw5m2%2FCyuBT7O6OP1EXUXhrLAIhAL%2BsMPJ%2FYOnh67rMhjX45zJ9wxezVbPPraBgufp7%2BiT0Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzGxTZXy8TGeRr0vOEq3APwhpmz8046nYizv%2BU%2FBcfLN6fM0NvWYjtaC2C7PMyq5OKkdCbcnvNwMQR%2Fn0uGiPoShf9%2Bsa5hefcQ3w8Dk3hf9A1rVjK0Q3tXSXP3bJ6Bc3q%2FXZU98t9PZL%2BTGZf%2FQKTxqtNahPlnGbToeuOVAmIE4jwpvtKETH%2BPohisdkPjlaph0PPie3bf%2FrF1BxFmzgcOH1MUhbx0JxyZ4Yo8BHz8PTjQ6yJHgqgUWUcRc2MdmZOYGVyvFFHAG7qkwltelLb9AI2gnecxHTTEm2mlgfTGAQK2h0Jj0yG065cddnMBAki4vwf%2BKHgyXLL7eE5a73S5QggAjy6gTOA2gnx3ilIB9I%2FW2Fja63C9yd7LHYLQTk0atHw%2BkANMLX0UVj6RbQ9Dste4q7TenvRYjBx1BCfXbvRXWEoXL04Mi%2B5mm714sNkdX2Jgly%2B1RDbiHmERlkORJ1deYLfcaeEqWCeKFbiqRor59mjP%2FQbYQ046GWfxZHXr01B%2BEEjgD3pW4tj2h%2FTRw71qCXJiJDrwgUfY8o7id7%2FG%2BX%2BtZb8xwoQ296mGxe1opq%2F83hKdMSZhVlaiVpMtXIDt4yt5fk7ICVWgQIdbWV5kZhhKz5m4j4y%2Bq07EB%2BV8X5%2FQ4PJhxCfo5jCbhaLDBjqkAbfDxXQ0%2FXe8fS%2BQDsYlVrC4u0Mwe3o5nHkvsYrQsUOH2562LjmFvpU9Hgm2eXbFmMepSu%2F0V4lgkKZ9R8WSJJWK1Foa9u%2F%2BGDUaWTqN3GSOiJ2H23yX4n2KVANblbXGRszIC6IdUbQf5ICePhR9WmUzgNzofa9I%2FjFosZ22UXlTN3tNh0knTp6OoFf8QUbVyUOMF96Aak56hxIFG1BLX9ISWiDS&X-Amz-Signature=7e4a814dd058d581a22bd6270a9dff6f236d1dfab577138ce9f79e2486584c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA47YFQ6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCOpnROXRUPhcoIk9dU1Mw5m2%2FCyuBT7O6OP1EXUXhrLAIhAL%2BsMPJ%2FYOnh67rMhjX45zJ9wxezVbPPraBgufp7%2BiT0Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzGxTZXy8TGeRr0vOEq3APwhpmz8046nYizv%2BU%2FBcfLN6fM0NvWYjtaC2C7PMyq5OKkdCbcnvNwMQR%2Fn0uGiPoShf9%2Bsa5hefcQ3w8Dk3hf9A1rVjK0Q3tXSXP3bJ6Bc3q%2FXZU98t9PZL%2BTGZf%2FQKTxqtNahPlnGbToeuOVAmIE4jwpvtKETH%2BPohisdkPjlaph0PPie3bf%2FrF1BxFmzgcOH1MUhbx0JxyZ4Yo8BHz8PTjQ6yJHgqgUWUcRc2MdmZOYGVyvFFHAG7qkwltelLb9AI2gnecxHTTEm2mlgfTGAQK2h0Jj0yG065cddnMBAki4vwf%2BKHgyXLL7eE5a73S5QggAjy6gTOA2gnx3ilIB9I%2FW2Fja63C9yd7LHYLQTk0atHw%2BkANMLX0UVj6RbQ9Dste4q7TenvRYjBx1BCfXbvRXWEoXL04Mi%2B5mm714sNkdX2Jgly%2B1RDbiHmERlkORJ1deYLfcaeEqWCeKFbiqRor59mjP%2FQbYQ046GWfxZHXr01B%2BEEjgD3pW4tj2h%2FTRw71qCXJiJDrwgUfY8o7id7%2FG%2BX%2BtZb8xwoQ296mGxe1opq%2F83hKdMSZhVlaiVpMtXIDt4yt5fk7ICVWgQIdbWV5kZhhKz5m4j4y%2Bq07EB%2BV8X5%2FQ4PJhxCfo5jCbhaLDBjqkAbfDxXQ0%2FXe8fS%2BQDsYlVrC4u0Mwe3o5nHkvsYrQsUOH2562LjmFvpU9Hgm2eXbFmMepSu%2F0V4lgkKZ9R8WSJJWK1Foa9u%2F%2BGDUaWTqN3GSOiJ2H23yX4n2KVANblbXGRszIC6IdUbQf5ICePhR9WmUzgNzofa9I%2FjFosZ22UXlTN3tNh0knTp6OoFf8QUbVyUOMF96Aak56hxIFG1BLX9ISWiDS&X-Amz-Signature=cbde43e20c23c3d29b6604bab05f7a2bd4afc8ab3ca6a8bdfda6ce43000c38ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA47YFQ6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCOpnROXRUPhcoIk9dU1Mw5m2%2FCyuBT7O6OP1EXUXhrLAIhAL%2BsMPJ%2FYOnh67rMhjX45zJ9wxezVbPPraBgufp7%2BiT0Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzGxTZXy8TGeRr0vOEq3APwhpmz8046nYizv%2BU%2FBcfLN6fM0NvWYjtaC2C7PMyq5OKkdCbcnvNwMQR%2Fn0uGiPoShf9%2Bsa5hefcQ3w8Dk3hf9A1rVjK0Q3tXSXP3bJ6Bc3q%2FXZU98t9PZL%2BTGZf%2FQKTxqtNahPlnGbToeuOVAmIE4jwpvtKETH%2BPohisdkPjlaph0PPie3bf%2FrF1BxFmzgcOH1MUhbx0JxyZ4Yo8BHz8PTjQ6yJHgqgUWUcRc2MdmZOYGVyvFFHAG7qkwltelLb9AI2gnecxHTTEm2mlgfTGAQK2h0Jj0yG065cddnMBAki4vwf%2BKHgyXLL7eE5a73S5QggAjy6gTOA2gnx3ilIB9I%2FW2Fja63C9yd7LHYLQTk0atHw%2BkANMLX0UVj6RbQ9Dste4q7TenvRYjBx1BCfXbvRXWEoXL04Mi%2B5mm714sNkdX2Jgly%2B1RDbiHmERlkORJ1deYLfcaeEqWCeKFbiqRor59mjP%2FQbYQ046GWfxZHXr01B%2BEEjgD3pW4tj2h%2FTRw71qCXJiJDrwgUfY8o7id7%2FG%2BX%2BtZb8xwoQ296mGxe1opq%2F83hKdMSZhVlaiVpMtXIDt4yt5fk7ICVWgQIdbWV5kZhhKz5m4j4y%2Bq07EB%2BV8X5%2FQ4PJhxCfo5jCbhaLDBjqkAbfDxXQ0%2FXe8fS%2BQDsYlVrC4u0Mwe3o5nHkvsYrQsUOH2562LjmFvpU9Hgm2eXbFmMepSu%2F0V4lgkKZ9R8WSJJWK1Foa9u%2F%2BGDUaWTqN3GSOiJ2H23yX4n2KVANblbXGRszIC6IdUbQf5ICePhR9WmUzgNzofa9I%2FjFosZ22UXlTN3tNh0knTp6OoFf8QUbVyUOMF96Aak56hxIFG1BLX9ISWiDS&X-Amz-Signature=c7224be47d5bad7fc5d95ff65ed491902f28ef97eeef4a98fcb0ae00732f26f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA47YFQ6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCOpnROXRUPhcoIk9dU1Mw5m2%2FCyuBT7O6OP1EXUXhrLAIhAL%2BsMPJ%2FYOnh67rMhjX45zJ9wxezVbPPraBgufp7%2BiT0Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzGxTZXy8TGeRr0vOEq3APwhpmz8046nYizv%2BU%2FBcfLN6fM0NvWYjtaC2C7PMyq5OKkdCbcnvNwMQR%2Fn0uGiPoShf9%2Bsa5hefcQ3w8Dk3hf9A1rVjK0Q3tXSXP3bJ6Bc3q%2FXZU98t9PZL%2BTGZf%2FQKTxqtNahPlnGbToeuOVAmIE4jwpvtKETH%2BPohisdkPjlaph0PPie3bf%2FrF1BxFmzgcOH1MUhbx0JxyZ4Yo8BHz8PTjQ6yJHgqgUWUcRc2MdmZOYGVyvFFHAG7qkwltelLb9AI2gnecxHTTEm2mlgfTGAQK2h0Jj0yG065cddnMBAki4vwf%2BKHgyXLL7eE5a73S5QggAjy6gTOA2gnx3ilIB9I%2FW2Fja63C9yd7LHYLQTk0atHw%2BkANMLX0UVj6RbQ9Dste4q7TenvRYjBx1BCfXbvRXWEoXL04Mi%2B5mm714sNkdX2Jgly%2B1RDbiHmERlkORJ1deYLfcaeEqWCeKFbiqRor59mjP%2FQbYQ046GWfxZHXr01B%2BEEjgD3pW4tj2h%2FTRw71qCXJiJDrwgUfY8o7id7%2FG%2BX%2BtZb8xwoQ296mGxe1opq%2F83hKdMSZhVlaiVpMtXIDt4yt5fk7ICVWgQIdbWV5kZhhKz5m4j4y%2Bq07EB%2BV8X5%2FQ4PJhxCfo5jCbhaLDBjqkAbfDxXQ0%2FXe8fS%2BQDsYlVrC4u0Mwe3o5nHkvsYrQsUOH2562LjmFvpU9Hgm2eXbFmMepSu%2F0V4lgkKZ9R8WSJJWK1Foa9u%2F%2BGDUaWTqN3GSOiJ2H23yX4n2KVANblbXGRszIC6IdUbQf5ICePhR9WmUzgNzofa9I%2FjFosZ22UXlTN3tNh0knTp6OoFf8QUbVyUOMF96Aak56hxIFG1BLX9ISWiDS&X-Amz-Signature=d078363fa9f97f8236de666f31397d2d1ae57e1c795c086f3319f5c3ddd4a7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
