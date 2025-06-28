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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2GMDC5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHi50QYepnGhD53J7juc%2BzgxGARN4QiHxm8P1LcGePnAiBUqj%2FiFkZuRnSK3yOf0sebtNZEBHIR6eCHBdCDT3OtRiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx2POdnV1kd8y5KlCKtwD98TBaNVS7dOgxJnRQ9%2FjbsNGYlA5WryUSUaP0%2FvMiG8Cfu25zWypmi519n6JA2GJm%2BAaEfl5AVp5WAxW85cGg1jNgGSTKH%2ByyQWxlycUzbDxlux5Qm2AwRLlBRCbBtjLWcnp1ABW7O1keLpuIcLoYIEebNnG0qVOIZGrCjxH%2B2whe6ZsYmoQtMW6WcJ1UiWmw5pB3mxgMOnNoVTbJb1L%2FMGTZSGeAZcaqOI7oK%2BX9mzlY3A52XXCZapAPemb69byO9RzYXJ9d%2F8OhOd7C0rGutDb8EKpQZq4odbvHEj9UynWZoLXlmVhRl2KCKdBIjnwP0vf8HwoyGvO31UGcaGna8VvyrWgg1P%2BDxWCoL2sssT4XsA5GA%2B0RV0dp5Ooht6UkyDY2yk6cXrtczMKZXzoOTePVsafGR9eu9M95ZifiuBD2c682TfqY9r42kyyxvhZpvaA64h6VaebQjbeL%2BRp4tR2erKjnl2LDLQAksPLC3WP53IFI3CRhMNS6qqQLfPY56jVEuhy6T8T0HyM8iaWl0en4K2jZ4mNQYGOmzIS5rd%2Bi7Zl8EnH%2FE24O2K7Bmgzu2aQot07OrfM%2BNazysrD7gpjkf%2Fklbhf%2FXM%2B21uItbnQCBxXZpdoFQBPur0w54qAwwY6pgHnWcBiZeaS8CMxBz2rqfTu4KHKY5Gs%2Fo4x9ovqiryl2B9yB3mElTYBWjPoDtjD%2B1B812TEL6ST1aj8zFh%2BFDOFEdYDWuQVBjNleuSzUXH17CM5bkoI83v0ZpA4hO8UTY9wmvIjMb%2Ffu3NxfiEk4EVmzp3zjCYxRnuvfDfUbSrj2lC4upmR0oV1L4cFZ5%2Bn4RNKQpolBLMt9jsfGNEuFU6%2BEaA7TGDq&X-Amz-Signature=05aeeed8c44b58b59137c544a39586442b2adea839e93fb8ac67b60ef572b4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2GMDC5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHi50QYepnGhD53J7juc%2BzgxGARN4QiHxm8P1LcGePnAiBUqj%2FiFkZuRnSK3yOf0sebtNZEBHIR6eCHBdCDT3OtRiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx2POdnV1kd8y5KlCKtwD98TBaNVS7dOgxJnRQ9%2FjbsNGYlA5WryUSUaP0%2FvMiG8Cfu25zWypmi519n6JA2GJm%2BAaEfl5AVp5WAxW85cGg1jNgGSTKH%2ByyQWxlycUzbDxlux5Qm2AwRLlBRCbBtjLWcnp1ABW7O1keLpuIcLoYIEebNnG0qVOIZGrCjxH%2B2whe6ZsYmoQtMW6WcJ1UiWmw5pB3mxgMOnNoVTbJb1L%2FMGTZSGeAZcaqOI7oK%2BX9mzlY3A52XXCZapAPemb69byO9RzYXJ9d%2F8OhOd7C0rGutDb8EKpQZq4odbvHEj9UynWZoLXlmVhRl2KCKdBIjnwP0vf8HwoyGvO31UGcaGna8VvyrWgg1P%2BDxWCoL2sssT4XsA5GA%2B0RV0dp5Ooht6UkyDY2yk6cXrtczMKZXzoOTePVsafGR9eu9M95ZifiuBD2c682TfqY9r42kyyxvhZpvaA64h6VaebQjbeL%2BRp4tR2erKjnl2LDLQAksPLC3WP53IFI3CRhMNS6qqQLfPY56jVEuhy6T8T0HyM8iaWl0en4K2jZ4mNQYGOmzIS5rd%2Bi7Zl8EnH%2FE24O2K7Bmgzu2aQot07OrfM%2BNazysrD7gpjkf%2Fklbhf%2FXM%2B21uItbnQCBxXZpdoFQBPur0w54qAwwY6pgHnWcBiZeaS8CMxBz2rqfTu4KHKY5Gs%2Fo4x9ovqiryl2B9yB3mElTYBWjPoDtjD%2B1B812TEL6ST1aj8zFh%2BFDOFEdYDWuQVBjNleuSzUXH17CM5bkoI83v0ZpA4hO8UTY9wmvIjMb%2Ffu3NxfiEk4EVmzp3zjCYxRnuvfDfUbSrj2lC4upmR0oV1L4cFZ5%2Bn4RNKQpolBLMt9jsfGNEuFU6%2BEaA7TGDq&X-Amz-Signature=9976e4b60da2861d1d20e865170c165eb87308d8529052e4b4ea53f217dda1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2GMDC5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHi50QYepnGhD53J7juc%2BzgxGARN4QiHxm8P1LcGePnAiBUqj%2FiFkZuRnSK3yOf0sebtNZEBHIR6eCHBdCDT3OtRiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx2POdnV1kd8y5KlCKtwD98TBaNVS7dOgxJnRQ9%2FjbsNGYlA5WryUSUaP0%2FvMiG8Cfu25zWypmi519n6JA2GJm%2BAaEfl5AVp5WAxW85cGg1jNgGSTKH%2ByyQWxlycUzbDxlux5Qm2AwRLlBRCbBtjLWcnp1ABW7O1keLpuIcLoYIEebNnG0qVOIZGrCjxH%2B2whe6ZsYmoQtMW6WcJ1UiWmw5pB3mxgMOnNoVTbJb1L%2FMGTZSGeAZcaqOI7oK%2BX9mzlY3A52XXCZapAPemb69byO9RzYXJ9d%2F8OhOd7C0rGutDb8EKpQZq4odbvHEj9UynWZoLXlmVhRl2KCKdBIjnwP0vf8HwoyGvO31UGcaGna8VvyrWgg1P%2BDxWCoL2sssT4XsA5GA%2B0RV0dp5Ooht6UkyDY2yk6cXrtczMKZXzoOTePVsafGR9eu9M95ZifiuBD2c682TfqY9r42kyyxvhZpvaA64h6VaebQjbeL%2BRp4tR2erKjnl2LDLQAksPLC3WP53IFI3CRhMNS6qqQLfPY56jVEuhy6T8T0HyM8iaWl0en4K2jZ4mNQYGOmzIS5rd%2Bi7Zl8EnH%2FE24O2K7Bmgzu2aQot07OrfM%2BNazysrD7gpjkf%2Fklbhf%2FXM%2B21uItbnQCBxXZpdoFQBPur0w54qAwwY6pgHnWcBiZeaS8CMxBz2rqfTu4KHKY5Gs%2Fo4x9ovqiryl2B9yB3mElTYBWjPoDtjD%2B1B812TEL6ST1aj8zFh%2BFDOFEdYDWuQVBjNleuSzUXH17CM5bkoI83v0ZpA4hO8UTY9wmvIjMb%2Ffu3NxfiEk4EVmzp3zjCYxRnuvfDfUbSrj2lC4upmR0oV1L4cFZ5%2Bn4RNKQpolBLMt9jsfGNEuFU6%2BEaA7TGDq&X-Amz-Signature=fb36687f01d0554025c65de0033244b0448b1020b02b972720da32d93d949a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2GMDC5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHi50QYepnGhD53J7juc%2BzgxGARN4QiHxm8P1LcGePnAiBUqj%2FiFkZuRnSK3yOf0sebtNZEBHIR6eCHBdCDT3OtRiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx2POdnV1kd8y5KlCKtwD98TBaNVS7dOgxJnRQ9%2FjbsNGYlA5WryUSUaP0%2FvMiG8Cfu25zWypmi519n6JA2GJm%2BAaEfl5AVp5WAxW85cGg1jNgGSTKH%2ByyQWxlycUzbDxlux5Qm2AwRLlBRCbBtjLWcnp1ABW7O1keLpuIcLoYIEebNnG0qVOIZGrCjxH%2B2whe6ZsYmoQtMW6WcJ1UiWmw5pB3mxgMOnNoVTbJb1L%2FMGTZSGeAZcaqOI7oK%2BX9mzlY3A52XXCZapAPemb69byO9RzYXJ9d%2F8OhOd7C0rGutDb8EKpQZq4odbvHEj9UynWZoLXlmVhRl2KCKdBIjnwP0vf8HwoyGvO31UGcaGna8VvyrWgg1P%2BDxWCoL2sssT4XsA5GA%2B0RV0dp5Ooht6UkyDY2yk6cXrtczMKZXzoOTePVsafGR9eu9M95ZifiuBD2c682TfqY9r42kyyxvhZpvaA64h6VaebQjbeL%2BRp4tR2erKjnl2LDLQAksPLC3WP53IFI3CRhMNS6qqQLfPY56jVEuhy6T8T0HyM8iaWl0en4K2jZ4mNQYGOmzIS5rd%2Bi7Zl8EnH%2FE24O2K7Bmgzu2aQot07OrfM%2BNazysrD7gpjkf%2Fklbhf%2FXM%2B21uItbnQCBxXZpdoFQBPur0w54qAwwY6pgHnWcBiZeaS8CMxBz2rqfTu4KHKY5Gs%2Fo4x9ovqiryl2B9yB3mElTYBWjPoDtjD%2B1B812TEL6ST1aj8zFh%2BFDOFEdYDWuQVBjNleuSzUXH17CM5bkoI83v0ZpA4hO8UTY9wmvIjMb%2Ffu3NxfiEk4EVmzp3zjCYxRnuvfDfUbSrj2lC4upmR0oV1L4cFZ5%2Bn4RNKQpolBLMt9jsfGNEuFU6%2BEaA7TGDq&X-Amz-Signature=4e504952135bee4053875560f68ccdbc12ffa4b86f142289eaba156b497d4184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2GMDC5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHi50QYepnGhD53J7juc%2BzgxGARN4QiHxm8P1LcGePnAiBUqj%2FiFkZuRnSK3yOf0sebtNZEBHIR6eCHBdCDT3OtRiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx2POdnV1kd8y5KlCKtwD98TBaNVS7dOgxJnRQ9%2FjbsNGYlA5WryUSUaP0%2FvMiG8Cfu25zWypmi519n6JA2GJm%2BAaEfl5AVp5WAxW85cGg1jNgGSTKH%2ByyQWxlycUzbDxlux5Qm2AwRLlBRCbBtjLWcnp1ABW7O1keLpuIcLoYIEebNnG0qVOIZGrCjxH%2B2whe6ZsYmoQtMW6WcJ1UiWmw5pB3mxgMOnNoVTbJb1L%2FMGTZSGeAZcaqOI7oK%2BX9mzlY3A52XXCZapAPemb69byO9RzYXJ9d%2F8OhOd7C0rGutDb8EKpQZq4odbvHEj9UynWZoLXlmVhRl2KCKdBIjnwP0vf8HwoyGvO31UGcaGna8VvyrWgg1P%2BDxWCoL2sssT4XsA5GA%2B0RV0dp5Ooht6UkyDY2yk6cXrtczMKZXzoOTePVsafGR9eu9M95ZifiuBD2c682TfqY9r42kyyxvhZpvaA64h6VaebQjbeL%2BRp4tR2erKjnl2LDLQAksPLC3WP53IFI3CRhMNS6qqQLfPY56jVEuhy6T8T0HyM8iaWl0en4K2jZ4mNQYGOmzIS5rd%2Bi7Zl8EnH%2FE24O2K7Bmgzu2aQot07OrfM%2BNazysrD7gpjkf%2Fklbhf%2FXM%2B21uItbnQCBxXZpdoFQBPur0w54qAwwY6pgHnWcBiZeaS8CMxBz2rqfTu4KHKY5Gs%2Fo4x9ovqiryl2B9yB3mElTYBWjPoDtjD%2B1B812TEL6ST1aj8zFh%2BFDOFEdYDWuQVBjNleuSzUXH17CM5bkoI83v0ZpA4hO8UTY9wmvIjMb%2Ffu3NxfiEk4EVmzp3zjCYxRnuvfDfUbSrj2lC4upmR0oV1L4cFZ5%2Bn4RNKQpolBLMt9jsfGNEuFU6%2BEaA7TGDq&X-Amz-Signature=6f7f083ca382c062dfe2fc2a759b286558f479e9a78e3f3637fe02e4020aa8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
