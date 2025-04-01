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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULDYRSX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDWbSOMguZS385LHo%2BNkO%2FPrLNnry9X0OswruQjPmUgnAIhAMNDQrObq9%2FyPm8FJoFJncz3h6eDyl4HuqdQKPciPdO3KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoDC%2FBVfGknhiellwq3AMR6mrrCJhYR%2BORH%2BkfEXgxfsossjzdXwu7JWPG1d6XGkM9B7Fayx5VHcWKkWHo4MRcnfIeQXTT0pxBrvX1A5AY2yBHiblhwItJgtRwFbhxc%2BAia4t1Nx8oefuJVdiem5990lWkdfrl5yQqKk7HKL%2Btz%2FS4s9Ves3MTmYa3W%2B08caGKSIkv1%2F0vCgFGn6yFDiefSoFw2BH8VCxKytKcawYxumkVl8J8YFdWniAlGW5wOEftFFvnCq4GMkwIJim%2BrG04xpHk3Ouyt8VrMj5WXzuqDwViZI%2BaCXmaLg9gwJs6bg%2Fza0BFe4zn%2BbbMzs7ciggvnLBmd9l10wXy%2B8vnfIz19rVKl%2FHBIqfpZ8BXjqUiOv76xEfDb747CJFrSjIOjdwFQA4E6bsOrS43IyE%2ByKQg6BqqlecskFkdvnu8S9vU%2FSftgaPx7jg4CV%2BIQhP5JEdr7%2FaM5FD4vSdOhRw9cEainm1ALzzPXcsiUvLsFjfUWHSrbqoIRuyi3Aoa3o9MawqRNS7x%2FwloH1O80Hd64EvmtrGLL6rSbMRZ4qMrXvDAXFZIX6oU3aavuxFGq7HKyblW%2BD6v6ymN5TpxBdTqLDPatowL%2B9HmQE5lAcOp9IbebLNOAQadhBQskRjmUjDQpK2%2FBjqkATzKc06wcRu6GkqYh24nT8c4KCnqmIr484Kwpkt7EoCx7xHHWFvT%2B8vkj1e9VS4jlLYkpjO%2BsCE4K7vYOH3Q0VzGWNRH3I2pqcCA3MsS8VNzpmUmlmbRlh6NLow8gbOeDnPWRNSZf2xUfvjP3vq0aKGh1WjuGwHqbCXZTShDX9fZDXiZqu%2Fd43r%2FJMajZcpm93SrFGKlEmsCqZNiiaF9WZCw8Cag&X-Amz-Signature=03fae7ed6d1c146de558ce12aabd0e80cd2ab8c37789d96edac5b99533ed222f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULDYRSX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDWbSOMguZS385LHo%2BNkO%2FPrLNnry9X0OswruQjPmUgnAIhAMNDQrObq9%2FyPm8FJoFJncz3h6eDyl4HuqdQKPciPdO3KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoDC%2FBVfGknhiellwq3AMR6mrrCJhYR%2BORH%2BkfEXgxfsossjzdXwu7JWPG1d6XGkM9B7Fayx5VHcWKkWHo4MRcnfIeQXTT0pxBrvX1A5AY2yBHiblhwItJgtRwFbhxc%2BAia4t1Nx8oefuJVdiem5990lWkdfrl5yQqKk7HKL%2Btz%2FS4s9Ves3MTmYa3W%2B08caGKSIkv1%2F0vCgFGn6yFDiefSoFw2BH8VCxKytKcawYxumkVl8J8YFdWniAlGW5wOEftFFvnCq4GMkwIJim%2BrG04xpHk3Ouyt8VrMj5WXzuqDwViZI%2BaCXmaLg9gwJs6bg%2Fza0BFe4zn%2BbbMzs7ciggvnLBmd9l10wXy%2B8vnfIz19rVKl%2FHBIqfpZ8BXjqUiOv76xEfDb747CJFrSjIOjdwFQA4E6bsOrS43IyE%2ByKQg6BqqlecskFkdvnu8S9vU%2FSftgaPx7jg4CV%2BIQhP5JEdr7%2FaM5FD4vSdOhRw9cEainm1ALzzPXcsiUvLsFjfUWHSrbqoIRuyi3Aoa3o9MawqRNS7x%2FwloH1O80Hd64EvmtrGLL6rSbMRZ4qMrXvDAXFZIX6oU3aavuxFGq7HKyblW%2BD6v6ymN5TpxBdTqLDPatowL%2B9HmQE5lAcOp9IbebLNOAQadhBQskRjmUjDQpK2%2FBjqkATzKc06wcRu6GkqYh24nT8c4KCnqmIr484Kwpkt7EoCx7xHHWFvT%2B8vkj1e9VS4jlLYkpjO%2BsCE4K7vYOH3Q0VzGWNRH3I2pqcCA3MsS8VNzpmUmlmbRlh6NLow8gbOeDnPWRNSZf2xUfvjP3vq0aKGh1WjuGwHqbCXZTShDX9fZDXiZqu%2Fd43r%2FJMajZcpm93SrFGKlEmsCqZNiiaF9WZCw8Cag&X-Amz-Signature=62d70f41d6a49b88a8bfbec6b6b3c6ac09145fbcc3a7c0b6f29af8f5e88e64fb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULDYRSX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDWbSOMguZS385LHo%2BNkO%2FPrLNnry9X0OswruQjPmUgnAIhAMNDQrObq9%2FyPm8FJoFJncz3h6eDyl4HuqdQKPciPdO3KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoDC%2FBVfGknhiellwq3AMR6mrrCJhYR%2BORH%2BkfEXgxfsossjzdXwu7JWPG1d6XGkM9B7Fayx5VHcWKkWHo4MRcnfIeQXTT0pxBrvX1A5AY2yBHiblhwItJgtRwFbhxc%2BAia4t1Nx8oefuJVdiem5990lWkdfrl5yQqKk7HKL%2Btz%2FS4s9Ves3MTmYa3W%2B08caGKSIkv1%2F0vCgFGn6yFDiefSoFw2BH8VCxKytKcawYxumkVl8J8YFdWniAlGW5wOEftFFvnCq4GMkwIJim%2BrG04xpHk3Ouyt8VrMj5WXzuqDwViZI%2BaCXmaLg9gwJs6bg%2Fza0BFe4zn%2BbbMzs7ciggvnLBmd9l10wXy%2B8vnfIz19rVKl%2FHBIqfpZ8BXjqUiOv76xEfDb747CJFrSjIOjdwFQA4E6bsOrS43IyE%2ByKQg6BqqlecskFkdvnu8S9vU%2FSftgaPx7jg4CV%2BIQhP5JEdr7%2FaM5FD4vSdOhRw9cEainm1ALzzPXcsiUvLsFjfUWHSrbqoIRuyi3Aoa3o9MawqRNS7x%2FwloH1O80Hd64EvmtrGLL6rSbMRZ4qMrXvDAXFZIX6oU3aavuxFGq7HKyblW%2BD6v6ymN5TpxBdTqLDPatowL%2B9HmQE5lAcOp9IbebLNOAQadhBQskRjmUjDQpK2%2FBjqkATzKc06wcRu6GkqYh24nT8c4KCnqmIr484Kwpkt7EoCx7xHHWFvT%2B8vkj1e9VS4jlLYkpjO%2BsCE4K7vYOH3Q0VzGWNRH3I2pqcCA3MsS8VNzpmUmlmbRlh6NLow8gbOeDnPWRNSZf2xUfvjP3vq0aKGh1WjuGwHqbCXZTShDX9fZDXiZqu%2Fd43r%2FJMajZcpm93SrFGKlEmsCqZNiiaF9WZCw8Cag&X-Amz-Signature=3db363b460197e0bfd2a738cc932e4f65089dc7864fd41d5e6a008166ffe6295&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULDYRSX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDWbSOMguZS385LHo%2BNkO%2FPrLNnry9X0OswruQjPmUgnAIhAMNDQrObq9%2FyPm8FJoFJncz3h6eDyl4HuqdQKPciPdO3KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoDC%2FBVfGknhiellwq3AMR6mrrCJhYR%2BORH%2BkfEXgxfsossjzdXwu7JWPG1d6XGkM9B7Fayx5VHcWKkWHo4MRcnfIeQXTT0pxBrvX1A5AY2yBHiblhwItJgtRwFbhxc%2BAia4t1Nx8oefuJVdiem5990lWkdfrl5yQqKk7HKL%2Btz%2FS4s9Ves3MTmYa3W%2B08caGKSIkv1%2F0vCgFGn6yFDiefSoFw2BH8VCxKytKcawYxumkVl8J8YFdWniAlGW5wOEftFFvnCq4GMkwIJim%2BrG04xpHk3Ouyt8VrMj5WXzuqDwViZI%2BaCXmaLg9gwJs6bg%2Fza0BFe4zn%2BbbMzs7ciggvnLBmd9l10wXy%2B8vnfIz19rVKl%2FHBIqfpZ8BXjqUiOv76xEfDb747CJFrSjIOjdwFQA4E6bsOrS43IyE%2ByKQg6BqqlecskFkdvnu8S9vU%2FSftgaPx7jg4CV%2BIQhP5JEdr7%2FaM5FD4vSdOhRw9cEainm1ALzzPXcsiUvLsFjfUWHSrbqoIRuyi3Aoa3o9MawqRNS7x%2FwloH1O80Hd64EvmtrGLL6rSbMRZ4qMrXvDAXFZIX6oU3aavuxFGq7HKyblW%2BD6v6ymN5TpxBdTqLDPatowL%2B9HmQE5lAcOp9IbebLNOAQadhBQskRjmUjDQpK2%2FBjqkATzKc06wcRu6GkqYh24nT8c4KCnqmIr484Kwpkt7EoCx7xHHWFvT%2B8vkj1e9VS4jlLYkpjO%2BsCE4K7vYOH3Q0VzGWNRH3I2pqcCA3MsS8VNzpmUmlmbRlh6NLow8gbOeDnPWRNSZf2xUfvjP3vq0aKGh1WjuGwHqbCXZTShDX9fZDXiZqu%2Fd43r%2FJMajZcpm93SrFGKlEmsCqZNiiaF9WZCw8Cag&X-Amz-Signature=56a8ab0fac79dc690b56a5fee53ffa4361db885c038da67cc628a93ab52b6238&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULDYRSX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDWbSOMguZS385LHo%2BNkO%2FPrLNnry9X0OswruQjPmUgnAIhAMNDQrObq9%2FyPm8FJoFJncz3h6eDyl4HuqdQKPciPdO3KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoDC%2FBVfGknhiellwq3AMR6mrrCJhYR%2BORH%2BkfEXgxfsossjzdXwu7JWPG1d6XGkM9B7Fayx5VHcWKkWHo4MRcnfIeQXTT0pxBrvX1A5AY2yBHiblhwItJgtRwFbhxc%2BAia4t1Nx8oefuJVdiem5990lWkdfrl5yQqKk7HKL%2Btz%2FS4s9Ves3MTmYa3W%2B08caGKSIkv1%2F0vCgFGn6yFDiefSoFw2BH8VCxKytKcawYxumkVl8J8YFdWniAlGW5wOEftFFvnCq4GMkwIJim%2BrG04xpHk3Ouyt8VrMj5WXzuqDwViZI%2BaCXmaLg9gwJs6bg%2Fza0BFe4zn%2BbbMzs7ciggvnLBmd9l10wXy%2B8vnfIz19rVKl%2FHBIqfpZ8BXjqUiOv76xEfDb747CJFrSjIOjdwFQA4E6bsOrS43IyE%2ByKQg6BqqlecskFkdvnu8S9vU%2FSftgaPx7jg4CV%2BIQhP5JEdr7%2FaM5FD4vSdOhRw9cEainm1ALzzPXcsiUvLsFjfUWHSrbqoIRuyi3Aoa3o9MawqRNS7x%2FwloH1O80Hd64EvmtrGLL6rSbMRZ4qMrXvDAXFZIX6oU3aavuxFGq7HKyblW%2BD6v6ymN5TpxBdTqLDPatowL%2B9HmQE5lAcOp9IbebLNOAQadhBQskRjmUjDQpK2%2FBjqkATzKc06wcRu6GkqYh24nT8c4KCnqmIr484Kwpkt7EoCx7xHHWFvT%2B8vkj1e9VS4jlLYkpjO%2BsCE4K7vYOH3Q0VzGWNRH3I2pqcCA3MsS8VNzpmUmlmbRlh6NLow8gbOeDnPWRNSZf2xUfvjP3vq0aKGh1WjuGwHqbCXZTShDX9fZDXiZqu%2Fd43r%2FJMajZcpm93SrFGKlEmsCqZNiiaF9WZCw8Cag&X-Amz-Signature=f28ec48e25b56588298b25f5b5d9baa6bf8efce0229973f6fe3e60f013df4f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
