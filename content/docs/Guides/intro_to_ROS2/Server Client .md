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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LESUDUP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDfy8rW5D4x1Duvoq17yNmIa1GsQrhmHy8v14m2BeLqrgIhALPopXD2bl3XeGVh3RDtgGqMNKCa9cEl2CTqjBUjN6ifKv8DCBsQABoMNjM3NDIzMTgzODA1IgxN1IUIaY5ngizPGj8q3AOuylMZ8%2Fi%2FSz9Lm%2FpKmKm0tcQQ2RUtRix1DrYisgP4vXKNXKs1%2Bz9GSx8nr7a9%2F7OV2FT5CPIyoRT7TaRa%2Fw8mtJ2zZGBksPkfiVE0qL4cDE%2Fu3uuGHZ3wpjyMuqXK%2FeRb3GAO0Svhh5rDXuLzZgHIEUdi7iiM7xNx912Kw6yRs4XGDOv5GfSJHPw5Gp0y%2BCeNf2BPhL%2B8xW0hSSJe4MBXCfvstDTi%2F19seIR%2BtvHszr0i8WiI0YBxyQsRWm%2BylEHnhOCJL6DlT2%2FYPH1eGrNKklg4DKR0rcF1F34k6dk9wNtoZ9Vqw5COQISYL%2FJW9SDtam3aIoKIj8ABEliHq%2Bq341IfjzM5mYjfNex%2BvbaUBtZXzDIUsMyaJx2W7WgtDk7Sire%2Bmz1ZWrxFzQJ50Liyrz4csUTPC9TGTQRVh%2BsB5Ups94GmICFrODaNMWxt7s91YSavAyvEArC0vS772gv9BdJg%2BzdUyseTMXRjD0YbwC%2BPgEc5XI7xyLj%2FByaPwTNXqBTRM4zmzp7Wsw0NbganH3AwxpLtWil%2BNUah7YT8F6%2B4gyyFkJNFjY%2FQueJ%2B5KE1UnNAhZ4k17yecQWKkYI0A69Osxd%2Bobrvqk4HisOAZdYdwPYzkz4dK9lMqjCN58%2FDBjqkAQkbuVeOuDr%2B%2Fti5bH68kLOpwAHoZufDRISeHiyQ%2Fnt60yNA6RWQcVMbupYhGTZlF%2BooBs5wndH2%2FGB88o4EPjx37yyLqPABuryOD2aRfnw77J36FXI8qHPVNIl5KAsCq28xEbn9cj56Xq3LKNULGQc8lcjHg3v87%2F%2FMpJGhTRyBc3VE1MhJNH8L%2BR6HN0%2F0EE7rxjKjH5JoZr7Dqe%2BSXGDY3zr5&X-Amz-Signature=db7d436782e0515a1eef60e6c20d85ec0020ac1f1f23359d456e8137af6b8aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LESUDUP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDfy8rW5D4x1Duvoq17yNmIa1GsQrhmHy8v14m2BeLqrgIhALPopXD2bl3XeGVh3RDtgGqMNKCa9cEl2CTqjBUjN6ifKv8DCBsQABoMNjM3NDIzMTgzODA1IgxN1IUIaY5ngizPGj8q3AOuylMZ8%2Fi%2FSz9Lm%2FpKmKm0tcQQ2RUtRix1DrYisgP4vXKNXKs1%2Bz9GSx8nr7a9%2F7OV2FT5CPIyoRT7TaRa%2Fw8mtJ2zZGBksPkfiVE0qL4cDE%2Fu3uuGHZ3wpjyMuqXK%2FeRb3GAO0Svhh5rDXuLzZgHIEUdi7iiM7xNx912Kw6yRs4XGDOv5GfSJHPw5Gp0y%2BCeNf2BPhL%2B8xW0hSSJe4MBXCfvstDTi%2F19seIR%2BtvHszr0i8WiI0YBxyQsRWm%2BylEHnhOCJL6DlT2%2FYPH1eGrNKklg4DKR0rcF1F34k6dk9wNtoZ9Vqw5COQISYL%2FJW9SDtam3aIoKIj8ABEliHq%2Bq341IfjzM5mYjfNex%2BvbaUBtZXzDIUsMyaJx2W7WgtDk7Sire%2Bmz1ZWrxFzQJ50Liyrz4csUTPC9TGTQRVh%2BsB5Ups94GmICFrODaNMWxt7s91YSavAyvEArC0vS772gv9BdJg%2BzdUyseTMXRjD0YbwC%2BPgEc5XI7xyLj%2FByaPwTNXqBTRM4zmzp7Wsw0NbganH3AwxpLtWil%2BNUah7YT8F6%2B4gyyFkJNFjY%2FQueJ%2B5KE1UnNAhZ4k17yecQWKkYI0A69Osxd%2Bobrvqk4HisOAZdYdwPYzkz4dK9lMqjCN58%2FDBjqkAQkbuVeOuDr%2B%2Fti5bH68kLOpwAHoZufDRISeHiyQ%2Fnt60yNA6RWQcVMbupYhGTZlF%2BooBs5wndH2%2FGB88o4EPjx37yyLqPABuryOD2aRfnw77J36FXI8qHPVNIl5KAsCq28xEbn9cj56Xq3LKNULGQc8lcjHg3v87%2F%2FMpJGhTRyBc3VE1MhJNH8L%2BR6HN0%2F0EE7rxjKjH5JoZr7Dqe%2BSXGDY3zr5&X-Amz-Signature=74fb69583672b9958e0e44426e775d5999528a4236ed350f32537ffe7eb934c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LESUDUP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDfy8rW5D4x1Duvoq17yNmIa1GsQrhmHy8v14m2BeLqrgIhALPopXD2bl3XeGVh3RDtgGqMNKCa9cEl2CTqjBUjN6ifKv8DCBsQABoMNjM3NDIzMTgzODA1IgxN1IUIaY5ngizPGj8q3AOuylMZ8%2Fi%2FSz9Lm%2FpKmKm0tcQQ2RUtRix1DrYisgP4vXKNXKs1%2Bz9GSx8nr7a9%2F7OV2FT5CPIyoRT7TaRa%2Fw8mtJ2zZGBksPkfiVE0qL4cDE%2Fu3uuGHZ3wpjyMuqXK%2FeRb3GAO0Svhh5rDXuLzZgHIEUdi7iiM7xNx912Kw6yRs4XGDOv5GfSJHPw5Gp0y%2BCeNf2BPhL%2B8xW0hSSJe4MBXCfvstDTi%2F19seIR%2BtvHszr0i8WiI0YBxyQsRWm%2BylEHnhOCJL6DlT2%2FYPH1eGrNKklg4DKR0rcF1F34k6dk9wNtoZ9Vqw5COQISYL%2FJW9SDtam3aIoKIj8ABEliHq%2Bq341IfjzM5mYjfNex%2BvbaUBtZXzDIUsMyaJx2W7WgtDk7Sire%2Bmz1ZWrxFzQJ50Liyrz4csUTPC9TGTQRVh%2BsB5Ups94GmICFrODaNMWxt7s91YSavAyvEArC0vS772gv9BdJg%2BzdUyseTMXRjD0YbwC%2BPgEc5XI7xyLj%2FByaPwTNXqBTRM4zmzp7Wsw0NbganH3AwxpLtWil%2BNUah7YT8F6%2B4gyyFkJNFjY%2FQueJ%2B5KE1UnNAhZ4k17yecQWKkYI0A69Osxd%2Bobrvqk4HisOAZdYdwPYzkz4dK9lMqjCN58%2FDBjqkAQkbuVeOuDr%2B%2Fti5bH68kLOpwAHoZufDRISeHiyQ%2Fnt60yNA6RWQcVMbupYhGTZlF%2BooBs5wndH2%2FGB88o4EPjx37yyLqPABuryOD2aRfnw77J36FXI8qHPVNIl5KAsCq28xEbn9cj56Xq3LKNULGQc8lcjHg3v87%2F%2FMpJGhTRyBc3VE1MhJNH8L%2BR6HN0%2F0EE7rxjKjH5JoZr7Dqe%2BSXGDY3zr5&X-Amz-Signature=2a3bf44f86c8e9c088c28a059667cc31816c9306432b5d6a584e97da9aae317f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LESUDUP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDfy8rW5D4x1Duvoq17yNmIa1GsQrhmHy8v14m2BeLqrgIhALPopXD2bl3XeGVh3RDtgGqMNKCa9cEl2CTqjBUjN6ifKv8DCBsQABoMNjM3NDIzMTgzODA1IgxN1IUIaY5ngizPGj8q3AOuylMZ8%2Fi%2FSz9Lm%2FpKmKm0tcQQ2RUtRix1DrYisgP4vXKNXKs1%2Bz9GSx8nr7a9%2F7OV2FT5CPIyoRT7TaRa%2Fw8mtJ2zZGBksPkfiVE0qL4cDE%2Fu3uuGHZ3wpjyMuqXK%2FeRb3GAO0Svhh5rDXuLzZgHIEUdi7iiM7xNx912Kw6yRs4XGDOv5GfSJHPw5Gp0y%2BCeNf2BPhL%2B8xW0hSSJe4MBXCfvstDTi%2F19seIR%2BtvHszr0i8WiI0YBxyQsRWm%2BylEHnhOCJL6DlT2%2FYPH1eGrNKklg4DKR0rcF1F34k6dk9wNtoZ9Vqw5COQISYL%2FJW9SDtam3aIoKIj8ABEliHq%2Bq341IfjzM5mYjfNex%2BvbaUBtZXzDIUsMyaJx2W7WgtDk7Sire%2Bmz1ZWrxFzQJ50Liyrz4csUTPC9TGTQRVh%2BsB5Ups94GmICFrODaNMWxt7s91YSavAyvEArC0vS772gv9BdJg%2BzdUyseTMXRjD0YbwC%2BPgEc5XI7xyLj%2FByaPwTNXqBTRM4zmzp7Wsw0NbganH3AwxpLtWil%2BNUah7YT8F6%2B4gyyFkJNFjY%2FQueJ%2B5KE1UnNAhZ4k17yecQWKkYI0A69Osxd%2Bobrvqk4HisOAZdYdwPYzkz4dK9lMqjCN58%2FDBjqkAQkbuVeOuDr%2B%2Fti5bH68kLOpwAHoZufDRISeHiyQ%2Fnt60yNA6RWQcVMbupYhGTZlF%2BooBs5wndH2%2FGB88o4EPjx37yyLqPABuryOD2aRfnw77J36FXI8qHPVNIl5KAsCq28xEbn9cj56Xq3LKNULGQc8lcjHg3v87%2F%2FMpJGhTRyBc3VE1MhJNH8L%2BR6HN0%2F0EE7rxjKjH5JoZr7Dqe%2BSXGDY3zr5&X-Amz-Signature=0fe7a10872ce2640a0c6461c7c909cba6489e4c3519eea0b09998b3d3bcbca04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LESUDUP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDfy8rW5D4x1Duvoq17yNmIa1GsQrhmHy8v14m2BeLqrgIhALPopXD2bl3XeGVh3RDtgGqMNKCa9cEl2CTqjBUjN6ifKv8DCBsQABoMNjM3NDIzMTgzODA1IgxN1IUIaY5ngizPGj8q3AOuylMZ8%2Fi%2FSz9Lm%2FpKmKm0tcQQ2RUtRix1DrYisgP4vXKNXKs1%2Bz9GSx8nr7a9%2F7OV2FT5CPIyoRT7TaRa%2Fw8mtJ2zZGBksPkfiVE0qL4cDE%2Fu3uuGHZ3wpjyMuqXK%2FeRb3GAO0Svhh5rDXuLzZgHIEUdi7iiM7xNx912Kw6yRs4XGDOv5GfSJHPw5Gp0y%2BCeNf2BPhL%2B8xW0hSSJe4MBXCfvstDTi%2F19seIR%2BtvHszr0i8WiI0YBxyQsRWm%2BylEHnhOCJL6DlT2%2FYPH1eGrNKklg4DKR0rcF1F34k6dk9wNtoZ9Vqw5COQISYL%2FJW9SDtam3aIoKIj8ABEliHq%2Bq341IfjzM5mYjfNex%2BvbaUBtZXzDIUsMyaJx2W7WgtDk7Sire%2Bmz1ZWrxFzQJ50Liyrz4csUTPC9TGTQRVh%2BsB5Ups94GmICFrODaNMWxt7s91YSavAyvEArC0vS772gv9BdJg%2BzdUyseTMXRjD0YbwC%2BPgEc5XI7xyLj%2FByaPwTNXqBTRM4zmzp7Wsw0NbganH3AwxpLtWil%2BNUah7YT8F6%2B4gyyFkJNFjY%2FQueJ%2B5KE1UnNAhZ4k17yecQWKkYI0A69Osxd%2Bobrvqk4HisOAZdYdwPYzkz4dK9lMqjCN58%2FDBjqkAQkbuVeOuDr%2B%2Fti5bH68kLOpwAHoZufDRISeHiyQ%2Fnt60yNA6RWQcVMbupYhGTZlF%2BooBs5wndH2%2FGB88o4EPjx37yyLqPABuryOD2aRfnw77J36FXI8qHPVNIl5KAsCq28xEbn9cj56Xq3LKNULGQc8lcjHg3v87%2F%2FMpJGhTRyBc3VE1MhJNH8L%2BR6HN0%2F0EE7rxjKjH5JoZr7Dqe%2BSXGDY3zr5&X-Amz-Signature=e35f4fbfd3c102c0eb0d23c7c25b21303c002025fa65fa52ac6a1d8ebf9c9209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
