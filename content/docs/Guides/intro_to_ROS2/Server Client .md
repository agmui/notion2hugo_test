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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXOPKAY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCh6gPnEFxFNk5WodW4oTJRm%2FjLeOceIcSfjatByG6VhAIge6%2Fm%2Bk1MW1U7qDu90AHEl3cFq%2BYDWTg8p75%2Fg8IgzV0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoLSXKEjWBx8bbkCircA%2FHROnfGVZ9ej8LFen6BXqawcM0A3jyPufYrtRmeWHUGPbr9%2BKD2mugW4OANr5C6T4vwvD14c%2BZUjiQKNx4ysf4BOIw19fCF98%2BUOqW9ww0t1bxUxJtYNzehjwnRReFICmo0ixAF9n%2FQDKjru4UQxL4Vxo8OnwADaDVxRFJ73Fwdq%2FhQ2z1fbD9iZ9AwtztGpZnRaLdsmn8wdgVXR2qdE23462BnV6RGGjh%2FQsqDGqQXHliyqyjXYEQJ0W3hOaDUvuNeH4W%2FFk%2Fh3uZ%2F4duPktEHyEHjcrxB9HrsDgoTN6ICd5yoxXxURLFnqDioojdq%2F3NhAS0bshosoUYRVjzw%2Fihva8qjQd3cc80NsM4kj75AyqIfQpNtP4YhFvcZOR9o%2FRwJFNOoPlS%2FlBkSGnYUkJKePPEb93kajWuKnz%2BMml83ByTstu6XmxX5ZWmF%2FUKOX%2BKXFv4RlXh1UC7yiH%2BzebajYV50nEoDcKiIPyl4Uz8CqpD0opCG39KdkZ8oCedE0PKkc%2FiRJVAU9wMUGnYfKxWphccvjG6dbuB9FOwaJ32zpfPjOuW3HwlU9kpFcz2hoQvDSFzLoUNrqFcD%2FbJzhVClTtCSsZWXi5rYt1SOrxAD3iMxJeDmjKEy0fF3MPW7xL4GOqUBxw6KpTzMYPGhoHjIFh5hxzp0FpCB105ldZm71vbiFuVqg8o6ksR3xVW%2F5MExNbXcbKeBuFhP8kQm9vAzSGoBMkcl2JY2oVbKzuCXjcsEMifn1%2FxdNIUKdGWiZfwCdkdHqasKhQNRW7axW6j8s9Gkfh3%2BYXg0%2BzcWz0XbSJaJycZ8LwyEOZ44eSpoxd54om%2FPYpb5uaSoUpCMgeBGjCGhdD%2FDHpkF&X-Amz-Signature=388a12a69fd392db3a5298f127ee320f1ef855705313065010ee559bdaf8f9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXOPKAY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCh6gPnEFxFNk5WodW4oTJRm%2FjLeOceIcSfjatByG6VhAIge6%2Fm%2Bk1MW1U7qDu90AHEl3cFq%2BYDWTg8p75%2Fg8IgzV0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoLSXKEjWBx8bbkCircA%2FHROnfGVZ9ej8LFen6BXqawcM0A3jyPufYrtRmeWHUGPbr9%2BKD2mugW4OANr5C6T4vwvD14c%2BZUjiQKNx4ysf4BOIw19fCF98%2BUOqW9ww0t1bxUxJtYNzehjwnRReFICmo0ixAF9n%2FQDKjru4UQxL4Vxo8OnwADaDVxRFJ73Fwdq%2FhQ2z1fbD9iZ9AwtztGpZnRaLdsmn8wdgVXR2qdE23462BnV6RGGjh%2FQsqDGqQXHliyqyjXYEQJ0W3hOaDUvuNeH4W%2FFk%2Fh3uZ%2F4duPktEHyEHjcrxB9HrsDgoTN6ICd5yoxXxURLFnqDioojdq%2F3NhAS0bshosoUYRVjzw%2Fihva8qjQd3cc80NsM4kj75AyqIfQpNtP4YhFvcZOR9o%2FRwJFNOoPlS%2FlBkSGnYUkJKePPEb93kajWuKnz%2BMml83ByTstu6XmxX5ZWmF%2FUKOX%2BKXFv4RlXh1UC7yiH%2BzebajYV50nEoDcKiIPyl4Uz8CqpD0opCG39KdkZ8oCedE0PKkc%2FiRJVAU9wMUGnYfKxWphccvjG6dbuB9FOwaJ32zpfPjOuW3HwlU9kpFcz2hoQvDSFzLoUNrqFcD%2FbJzhVClTtCSsZWXi5rYt1SOrxAD3iMxJeDmjKEy0fF3MPW7xL4GOqUBxw6KpTzMYPGhoHjIFh5hxzp0FpCB105ldZm71vbiFuVqg8o6ksR3xVW%2F5MExNbXcbKeBuFhP8kQm9vAzSGoBMkcl2JY2oVbKzuCXjcsEMifn1%2FxdNIUKdGWiZfwCdkdHqasKhQNRW7axW6j8s9Gkfh3%2BYXg0%2BzcWz0XbSJaJycZ8LwyEOZ44eSpoxd54om%2FPYpb5uaSoUpCMgeBGjCGhdD%2FDHpkF&X-Amz-Signature=4f182dbb7120f7a0e844621c40057729445cb1498acc033c53a48129a73462fc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXOPKAY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCh6gPnEFxFNk5WodW4oTJRm%2FjLeOceIcSfjatByG6VhAIge6%2Fm%2Bk1MW1U7qDu90AHEl3cFq%2BYDWTg8p75%2Fg8IgzV0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoLSXKEjWBx8bbkCircA%2FHROnfGVZ9ej8LFen6BXqawcM0A3jyPufYrtRmeWHUGPbr9%2BKD2mugW4OANr5C6T4vwvD14c%2BZUjiQKNx4ysf4BOIw19fCF98%2BUOqW9ww0t1bxUxJtYNzehjwnRReFICmo0ixAF9n%2FQDKjru4UQxL4Vxo8OnwADaDVxRFJ73Fwdq%2FhQ2z1fbD9iZ9AwtztGpZnRaLdsmn8wdgVXR2qdE23462BnV6RGGjh%2FQsqDGqQXHliyqyjXYEQJ0W3hOaDUvuNeH4W%2FFk%2Fh3uZ%2F4duPktEHyEHjcrxB9HrsDgoTN6ICd5yoxXxURLFnqDioojdq%2F3NhAS0bshosoUYRVjzw%2Fihva8qjQd3cc80NsM4kj75AyqIfQpNtP4YhFvcZOR9o%2FRwJFNOoPlS%2FlBkSGnYUkJKePPEb93kajWuKnz%2BMml83ByTstu6XmxX5ZWmF%2FUKOX%2BKXFv4RlXh1UC7yiH%2BzebajYV50nEoDcKiIPyl4Uz8CqpD0opCG39KdkZ8oCedE0PKkc%2FiRJVAU9wMUGnYfKxWphccvjG6dbuB9FOwaJ32zpfPjOuW3HwlU9kpFcz2hoQvDSFzLoUNrqFcD%2FbJzhVClTtCSsZWXi5rYt1SOrxAD3iMxJeDmjKEy0fF3MPW7xL4GOqUBxw6KpTzMYPGhoHjIFh5hxzp0FpCB105ldZm71vbiFuVqg8o6ksR3xVW%2F5MExNbXcbKeBuFhP8kQm9vAzSGoBMkcl2JY2oVbKzuCXjcsEMifn1%2FxdNIUKdGWiZfwCdkdHqasKhQNRW7axW6j8s9Gkfh3%2BYXg0%2BzcWz0XbSJaJycZ8LwyEOZ44eSpoxd54om%2FPYpb5uaSoUpCMgeBGjCGhdD%2FDHpkF&X-Amz-Signature=9153d504c861f2444b5dcee8dd83922a30a7c8e33107fdec7ad67454c263592a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXOPKAY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCh6gPnEFxFNk5WodW4oTJRm%2FjLeOceIcSfjatByG6VhAIge6%2Fm%2Bk1MW1U7qDu90AHEl3cFq%2BYDWTg8p75%2Fg8IgzV0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoLSXKEjWBx8bbkCircA%2FHROnfGVZ9ej8LFen6BXqawcM0A3jyPufYrtRmeWHUGPbr9%2BKD2mugW4OANr5C6T4vwvD14c%2BZUjiQKNx4ysf4BOIw19fCF98%2BUOqW9ww0t1bxUxJtYNzehjwnRReFICmo0ixAF9n%2FQDKjru4UQxL4Vxo8OnwADaDVxRFJ73Fwdq%2FhQ2z1fbD9iZ9AwtztGpZnRaLdsmn8wdgVXR2qdE23462BnV6RGGjh%2FQsqDGqQXHliyqyjXYEQJ0W3hOaDUvuNeH4W%2FFk%2Fh3uZ%2F4duPktEHyEHjcrxB9HrsDgoTN6ICd5yoxXxURLFnqDioojdq%2F3NhAS0bshosoUYRVjzw%2Fihva8qjQd3cc80NsM4kj75AyqIfQpNtP4YhFvcZOR9o%2FRwJFNOoPlS%2FlBkSGnYUkJKePPEb93kajWuKnz%2BMml83ByTstu6XmxX5ZWmF%2FUKOX%2BKXFv4RlXh1UC7yiH%2BzebajYV50nEoDcKiIPyl4Uz8CqpD0opCG39KdkZ8oCedE0PKkc%2FiRJVAU9wMUGnYfKxWphccvjG6dbuB9FOwaJ32zpfPjOuW3HwlU9kpFcz2hoQvDSFzLoUNrqFcD%2FbJzhVClTtCSsZWXi5rYt1SOrxAD3iMxJeDmjKEy0fF3MPW7xL4GOqUBxw6KpTzMYPGhoHjIFh5hxzp0FpCB105ldZm71vbiFuVqg8o6ksR3xVW%2F5MExNbXcbKeBuFhP8kQm9vAzSGoBMkcl2JY2oVbKzuCXjcsEMifn1%2FxdNIUKdGWiZfwCdkdHqasKhQNRW7axW6j8s9Gkfh3%2BYXg0%2BzcWz0XbSJaJycZ8LwyEOZ44eSpoxd54om%2FPYpb5uaSoUpCMgeBGjCGhdD%2FDHpkF&X-Amz-Signature=b4ee6c1614c898e7f701b923097f96fe17d9bcdcd0e43197fd8a24c8aeee3b17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXOPKAY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCh6gPnEFxFNk5WodW4oTJRm%2FjLeOceIcSfjatByG6VhAIge6%2Fm%2Bk1MW1U7qDu90AHEl3cFq%2BYDWTg8p75%2Fg8IgzV0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoLSXKEjWBx8bbkCircA%2FHROnfGVZ9ej8LFen6BXqawcM0A3jyPufYrtRmeWHUGPbr9%2BKD2mugW4OANr5C6T4vwvD14c%2BZUjiQKNx4ysf4BOIw19fCF98%2BUOqW9ww0t1bxUxJtYNzehjwnRReFICmo0ixAF9n%2FQDKjru4UQxL4Vxo8OnwADaDVxRFJ73Fwdq%2FhQ2z1fbD9iZ9AwtztGpZnRaLdsmn8wdgVXR2qdE23462BnV6RGGjh%2FQsqDGqQXHliyqyjXYEQJ0W3hOaDUvuNeH4W%2FFk%2Fh3uZ%2F4duPktEHyEHjcrxB9HrsDgoTN6ICd5yoxXxURLFnqDioojdq%2F3NhAS0bshosoUYRVjzw%2Fihva8qjQd3cc80NsM4kj75AyqIfQpNtP4YhFvcZOR9o%2FRwJFNOoPlS%2FlBkSGnYUkJKePPEb93kajWuKnz%2BMml83ByTstu6XmxX5ZWmF%2FUKOX%2BKXFv4RlXh1UC7yiH%2BzebajYV50nEoDcKiIPyl4Uz8CqpD0opCG39KdkZ8oCedE0PKkc%2FiRJVAU9wMUGnYfKxWphccvjG6dbuB9FOwaJ32zpfPjOuW3HwlU9kpFcz2hoQvDSFzLoUNrqFcD%2FbJzhVClTtCSsZWXi5rYt1SOrxAD3iMxJeDmjKEy0fF3MPW7xL4GOqUBxw6KpTzMYPGhoHjIFh5hxzp0FpCB105ldZm71vbiFuVqg8o6ksR3xVW%2F5MExNbXcbKeBuFhP8kQm9vAzSGoBMkcl2JY2oVbKzuCXjcsEMifn1%2FxdNIUKdGWiZfwCdkdHqasKhQNRW7axW6j8s9Gkfh3%2BYXg0%2BzcWz0XbSJaJycZ8LwyEOZ44eSpoxd54om%2FPYpb5uaSoUpCMgeBGjCGhdD%2FDHpkF&X-Amz-Signature=45b551f11c548473126f94988dba7907afbe0a01d6661fdbc2153a91f635e899&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
