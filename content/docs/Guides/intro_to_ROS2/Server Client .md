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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHOLNWS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFXr0yDSgNh76vQlfhaf6NdKzN9%2F%2BcvWIbdJdLZtPljtAiA5mCSy6tMCNjRn3%2Bjbe91tO%2FKy5QtlXq2CsdgBCn7GmyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZGv4DUvbGVzplS5tKtwDcrMyInJ6FuDHTxeviSZAdTtuE8EKtjrwqUW95DSwPiahxNmLiY7hxtqpOoO%2FuazanfYpMjPykA8rRxP7gNsiHs0Nw8MjddKD5uBfPSo9FlHxSBxPJIF4r0WGXpx9JQnlLDn9tik9Rmf8FluMvmPIfUOQeHibqKTB0K1q%2F744%2FjvHfVKsH4oy6m962uDmDAkXq5bsFZKmvKMyqC1fhXBDy3t9DVoPMg9%2FtA1OMyLfkMPAsbgvT2Q55M%2BPoKm7nrIS%2Fm161ZbDMTSOOVZwzWA%2BuTUyxmBJqMLHfh3LQw03eQ%2BMh0PNkKrMAUkJh%2BwpMvlXH4nBm6U7ftRO2otkAQ0CeMYXw1cWg4CHZY8B44PWT%2FyARNfRQuKiupkWwHpaDpyVxMiAvvbQV677vmh3Bm7eNBvNq4r9%2B8q3YswkXkrs2OnMRiIlCu6NcIfjO8Mt56R%2Fft%2FpNjibKIcErWG9Je2fE66YjT1UM160nFNr3AdH%2Blt7v9mbDHIOHoflFfQx1ai9mgY9N4F3gpLQQdKyy8FXCkqglfFxEpmGX9iRuko9ri5yWOo%2BM7LLl0LYYdh10CbXR%2FNyDZp30tTceNZ7GtG2%2BpYqRjDIGzhIFurrIG8KxTZIlCxQsFSHcX6nFL0wh%2Fj3vgY6pgGDlJecAYFtj8KBfRrt7INp%2FSQDvJj%2BVn3yiEWMUBt%2FVJGlHTWE25aLlkkZv8k7RUBFNSpfqn%2B5%2BNnWShhkoHNZMJMgcs4nno54sG7P0k9H85RZCm%2BU5jTCb3Y5pQ7KoamPuQ8t%2BOR%2B88AH6AruoWXzTpM3xXhKjxflZxM3b%2F%2FqbP5DLAtttkUq10oErMUO7eoulZ5ZuCpOrJud2FJl830YItTDxYFV&X-Amz-Signature=0174be555c157e2762191e1e77a54f3f1ccd72f8256e6212af22869556b948cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHOLNWS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFXr0yDSgNh76vQlfhaf6NdKzN9%2F%2BcvWIbdJdLZtPljtAiA5mCSy6tMCNjRn3%2Bjbe91tO%2FKy5QtlXq2CsdgBCn7GmyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZGv4DUvbGVzplS5tKtwDcrMyInJ6FuDHTxeviSZAdTtuE8EKtjrwqUW95DSwPiahxNmLiY7hxtqpOoO%2FuazanfYpMjPykA8rRxP7gNsiHs0Nw8MjddKD5uBfPSo9FlHxSBxPJIF4r0WGXpx9JQnlLDn9tik9Rmf8FluMvmPIfUOQeHibqKTB0K1q%2F744%2FjvHfVKsH4oy6m962uDmDAkXq5bsFZKmvKMyqC1fhXBDy3t9DVoPMg9%2FtA1OMyLfkMPAsbgvT2Q55M%2BPoKm7nrIS%2Fm161ZbDMTSOOVZwzWA%2BuTUyxmBJqMLHfh3LQw03eQ%2BMh0PNkKrMAUkJh%2BwpMvlXH4nBm6U7ftRO2otkAQ0CeMYXw1cWg4CHZY8B44PWT%2FyARNfRQuKiupkWwHpaDpyVxMiAvvbQV677vmh3Bm7eNBvNq4r9%2B8q3YswkXkrs2OnMRiIlCu6NcIfjO8Mt56R%2Fft%2FpNjibKIcErWG9Je2fE66YjT1UM160nFNr3AdH%2Blt7v9mbDHIOHoflFfQx1ai9mgY9N4F3gpLQQdKyy8FXCkqglfFxEpmGX9iRuko9ri5yWOo%2BM7LLl0LYYdh10CbXR%2FNyDZp30tTceNZ7GtG2%2BpYqRjDIGzhIFurrIG8KxTZIlCxQsFSHcX6nFL0wh%2Fj3vgY6pgGDlJecAYFtj8KBfRrt7INp%2FSQDvJj%2BVn3yiEWMUBt%2FVJGlHTWE25aLlkkZv8k7RUBFNSpfqn%2B5%2BNnWShhkoHNZMJMgcs4nno54sG7P0k9H85RZCm%2BU5jTCb3Y5pQ7KoamPuQ8t%2BOR%2B88AH6AruoWXzTpM3xXhKjxflZxM3b%2F%2FqbP5DLAtttkUq10oErMUO7eoulZ5ZuCpOrJud2FJl830YItTDxYFV&X-Amz-Signature=6a0f9c92f34b022a5e583aeb3ace51f51866bd990adba3999e9fd4211297e2cd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHOLNWS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFXr0yDSgNh76vQlfhaf6NdKzN9%2F%2BcvWIbdJdLZtPljtAiA5mCSy6tMCNjRn3%2Bjbe91tO%2FKy5QtlXq2CsdgBCn7GmyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZGv4DUvbGVzplS5tKtwDcrMyInJ6FuDHTxeviSZAdTtuE8EKtjrwqUW95DSwPiahxNmLiY7hxtqpOoO%2FuazanfYpMjPykA8rRxP7gNsiHs0Nw8MjddKD5uBfPSo9FlHxSBxPJIF4r0WGXpx9JQnlLDn9tik9Rmf8FluMvmPIfUOQeHibqKTB0K1q%2F744%2FjvHfVKsH4oy6m962uDmDAkXq5bsFZKmvKMyqC1fhXBDy3t9DVoPMg9%2FtA1OMyLfkMPAsbgvT2Q55M%2BPoKm7nrIS%2Fm161ZbDMTSOOVZwzWA%2BuTUyxmBJqMLHfh3LQw03eQ%2BMh0PNkKrMAUkJh%2BwpMvlXH4nBm6U7ftRO2otkAQ0CeMYXw1cWg4CHZY8B44PWT%2FyARNfRQuKiupkWwHpaDpyVxMiAvvbQV677vmh3Bm7eNBvNq4r9%2B8q3YswkXkrs2OnMRiIlCu6NcIfjO8Mt56R%2Fft%2FpNjibKIcErWG9Je2fE66YjT1UM160nFNr3AdH%2Blt7v9mbDHIOHoflFfQx1ai9mgY9N4F3gpLQQdKyy8FXCkqglfFxEpmGX9iRuko9ri5yWOo%2BM7LLl0LYYdh10CbXR%2FNyDZp30tTceNZ7GtG2%2BpYqRjDIGzhIFurrIG8KxTZIlCxQsFSHcX6nFL0wh%2Fj3vgY6pgGDlJecAYFtj8KBfRrt7INp%2FSQDvJj%2BVn3yiEWMUBt%2FVJGlHTWE25aLlkkZv8k7RUBFNSpfqn%2B5%2BNnWShhkoHNZMJMgcs4nno54sG7P0k9H85RZCm%2BU5jTCb3Y5pQ7KoamPuQ8t%2BOR%2B88AH6AruoWXzTpM3xXhKjxflZxM3b%2F%2FqbP5DLAtttkUq10oErMUO7eoulZ5ZuCpOrJud2FJl830YItTDxYFV&X-Amz-Signature=3ee6889113979aec6f732a95b1b4408ece93225ee602d6ade99de71199963a46&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHOLNWS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFXr0yDSgNh76vQlfhaf6NdKzN9%2F%2BcvWIbdJdLZtPljtAiA5mCSy6tMCNjRn3%2Bjbe91tO%2FKy5QtlXq2CsdgBCn7GmyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZGv4DUvbGVzplS5tKtwDcrMyInJ6FuDHTxeviSZAdTtuE8EKtjrwqUW95DSwPiahxNmLiY7hxtqpOoO%2FuazanfYpMjPykA8rRxP7gNsiHs0Nw8MjddKD5uBfPSo9FlHxSBxPJIF4r0WGXpx9JQnlLDn9tik9Rmf8FluMvmPIfUOQeHibqKTB0K1q%2F744%2FjvHfVKsH4oy6m962uDmDAkXq5bsFZKmvKMyqC1fhXBDy3t9DVoPMg9%2FtA1OMyLfkMPAsbgvT2Q55M%2BPoKm7nrIS%2Fm161ZbDMTSOOVZwzWA%2BuTUyxmBJqMLHfh3LQw03eQ%2BMh0PNkKrMAUkJh%2BwpMvlXH4nBm6U7ftRO2otkAQ0CeMYXw1cWg4CHZY8B44PWT%2FyARNfRQuKiupkWwHpaDpyVxMiAvvbQV677vmh3Bm7eNBvNq4r9%2B8q3YswkXkrs2OnMRiIlCu6NcIfjO8Mt56R%2Fft%2FpNjibKIcErWG9Je2fE66YjT1UM160nFNr3AdH%2Blt7v9mbDHIOHoflFfQx1ai9mgY9N4F3gpLQQdKyy8FXCkqglfFxEpmGX9iRuko9ri5yWOo%2BM7LLl0LYYdh10CbXR%2FNyDZp30tTceNZ7GtG2%2BpYqRjDIGzhIFurrIG8KxTZIlCxQsFSHcX6nFL0wh%2Fj3vgY6pgGDlJecAYFtj8KBfRrt7INp%2FSQDvJj%2BVn3yiEWMUBt%2FVJGlHTWE25aLlkkZv8k7RUBFNSpfqn%2B5%2BNnWShhkoHNZMJMgcs4nno54sG7P0k9H85RZCm%2BU5jTCb3Y5pQ7KoamPuQ8t%2BOR%2B88AH6AruoWXzTpM3xXhKjxflZxM3b%2F%2FqbP5DLAtttkUq10oErMUO7eoulZ5ZuCpOrJud2FJl830YItTDxYFV&X-Amz-Signature=c9c65b470f801696056abe97dd5c8809d3731c63beec5978e9a7f9788f689582&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHOLNWS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFXr0yDSgNh76vQlfhaf6NdKzN9%2F%2BcvWIbdJdLZtPljtAiA5mCSy6tMCNjRn3%2Bjbe91tO%2FKy5QtlXq2CsdgBCn7GmyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZGv4DUvbGVzplS5tKtwDcrMyInJ6FuDHTxeviSZAdTtuE8EKtjrwqUW95DSwPiahxNmLiY7hxtqpOoO%2FuazanfYpMjPykA8rRxP7gNsiHs0Nw8MjddKD5uBfPSo9FlHxSBxPJIF4r0WGXpx9JQnlLDn9tik9Rmf8FluMvmPIfUOQeHibqKTB0K1q%2F744%2FjvHfVKsH4oy6m962uDmDAkXq5bsFZKmvKMyqC1fhXBDy3t9DVoPMg9%2FtA1OMyLfkMPAsbgvT2Q55M%2BPoKm7nrIS%2Fm161ZbDMTSOOVZwzWA%2BuTUyxmBJqMLHfh3LQw03eQ%2BMh0PNkKrMAUkJh%2BwpMvlXH4nBm6U7ftRO2otkAQ0CeMYXw1cWg4CHZY8B44PWT%2FyARNfRQuKiupkWwHpaDpyVxMiAvvbQV677vmh3Bm7eNBvNq4r9%2B8q3YswkXkrs2OnMRiIlCu6NcIfjO8Mt56R%2Fft%2FpNjibKIcErWG9Je2fE66YjT1UM160nFNr3AdH%2Blt7v9mbDHIOHoflFfQx1ai9mgY9N4F3gpLQQdKyy8FXCkqglfFxEpmGX9iRuko9ri5yWOo%2BM7LLl0LYYdh10CbXR%2FNyDZp30tTceNZ7GtG2%2BpYqRjDIGzhIFurrIG8KxTZIlCxQsFSHcX6nFL0wh%2Fj3vgY6pgGDlJecAYFtj8KBfRrt7INp%2FSQDvJj%2BVn3yiEWMUBt%2FVJGlHTWE25aLlkkZv8k7RUBFNSpfqn%2B5%2BNnWShhkoHNZMJMgcs4nno54sG7P0k9H85RZCm%2BU5jTCb3Y5pQ7KoamPuQ8t%2BOR%2B88AH6AruoWXzTpM3xXhKjxflZxM3b%2F%2FqbP5DLAtttkUq10oErMUO7eoulZ5ZuCpOrJud2FJl830YItTDxYFV&X-Amz-Signature=14360d03d55290612ec0a58ef4a936a981aad3e987f0377c83f19f32e57fea7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
