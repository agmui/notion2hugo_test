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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWPR24G%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDkF5g9kV1uK%2BVIgzCs6ok9CwiKPpf61WK6i5%2BpKS9ElAiEA4Y4NamIS9UMFAG%2FHDG3sYQniugeFxcslgUF9idGw7%2FIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjIxPtA9UfRo%2F0ZOSrcAy3b15ekaU13KI2eTgpExMkjtrnjmslH3YZxW0UTlEafNPP5yHTRVeY3PFQ1IQuorMJ%2B9d4lMd%2B6fJhftL1a36SwoTx%2Bi%2Bs2MaYZc4gzDOKJ%2BL4SbiuAl%2BtYfDz%2BQs9OyXdhOoiLC2f36TWp2egC0YcCveRIS7hfnohvArFxGWtz5k0dKCvfXdZ%2FEJLMZnYuVd8N%2BT0EZ6UxOhe7nDyoMZLA%2FRolcT3GOWKChFDKb6Oc0jLWvvusgEk2J4D4Bx%2BYEGGD1msePmVUzplVwwMcK7Dx43e%2BOdPHgbCMmqRUyF7KhqHbMzBPQFauNK42kPZ%2Fz3Q8sHzse1c21dY8xvf2lG4PrYoXsP9bDu3CVcYTDtZAbj5AKSE6DMd1sZW5CAY%2F9W3KU23qeIe2crOVWTzt3Cx21gArM9WaFuWVA7iK2AasgI8YJpJmCqu5igeWQedElUOKjovB6mUEO8mRbHl%2BfumcNC%2B4j10J035KTZhJIZ4cB3oXTUjrrBrPFiB62ara2dsenqoSn1BQ5jW8VGzW4NEX3fdpgpKLRfw3Zn9DLelh7%2BSE6CFpg1lPD4YyTEB4orSY2pLMA%2BwavbIoJCr%2FhUFQ51R03SkEF9n0xhuVz0U%2BbX7Mfva8kKyJPHQtMJykksAGOqUB3E49SYq4B8qS74tq34FsTlo0OHMhkicFHWcZcyfBh%2Bq%2FTQC1RAScD8fwkIR3A5NdPQPwHM%2F49EefjcU1psnumW3MrOWaObTlRsfhl%2Bn6m4Bvjl7vjLzJbfNF0kfpSdalyuFB0I%2BeW%2BgcPg4ZKsmn5Lql4jDxgzgc5MS1W0CXHPU7Qlw9HE7ttobyWDmKh86n6OxZ3KELs3fJwIE7Hgb7q4qdj1ks&X-Amz-Signature=ad25f45ec9d20f9585c66c64e5903f7b29e072f9b2472f25f1e9b82261f8647e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWPR24G%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDkF5g9kV1uK%2BVIgzCs6ok9CwiKPpf61WK6i5%2BpKS9ElAiEA4Y4NamIS9UMFAG%2FHDG3sYQniugeFxcslgUF9idGw7%2FIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjIxPtA9UfRo%2F0ZOSrcAy3b15ekaU13KI2eTgpExMkjtrnjmslH3YZxW0UTlEafNPP5yHTRVeY3PFQ1IQuorMJ%2B9d4lMd%2B6fJhftL1a36SwoTx%2Bi%2Bs2MaYZc4gzDOKJ%2BL4SbiuAl%2BtYfDz%2BQs9OyXdhOoiLC2f36TWp2egC0YcCveRIS7hfnohvArFxGWtz5k0dKCvfXdZ%2FEJLMZnYuVd8N%2BT0EZ6UxOhe7nDyoMZLA%2FRolcT3GOWKChFDKb6Oc0jLWvvusgEk2J4D4Bx%2BYEGGD1msePmVUzplVwwMcK7Dx43e%2BOdPHgbCMmqRUyF7KhqHbMzBPQFauNK42kPZ%2Fz3Q8sHzse1c21dY8xvf2lG4PrYoXsP9bDu3CVcYTDtZAbj5AKSE6DMd1sZW5CAY%2F9W3KU23qeIe2crOVWTzt3Cx21gArM9WaFuWVA7iK2AasgI8YJpJmCqu5igeWQedElUOKjovB6mUEO8mRbHl%2BfumcNC%2B4j10J035KTZhJIZ4cB3oXTUjrrBrPFiB62ara2dsenqoSn1BQ5jW8VGzW4NEX3fdpgpKLRfw3Zn9DLelh7%2BSE6CFpg1lPD4YyTEB4orSY2pLMA%2BwavbIoJCr%2FhUFQ51R03SkEF9n0xhuVz0U%2BbX7Mfva8kKyJPHQtMJykksAGOqUB3E49SYq4B8qS74tq34FsTlo0OHMhkicFHWcZcyfBh%2Bq%2FTQC1RAScD8fwkIR3A5NdPQPwHM%2F49EefjcU1psnumW3MrOWaObTlRsfhl%2Bn6m4Bvjl7vjLzJbfNF0kfpSdalyuFB0I%2BeW%2BgcPg4ZKsmn5Lql4jDxgzgc5MS1W0CXHPU7Qlw9HE7ttobyWDmKh86n6OxZ3KELs3fJwIE7Hgb7q4qdj1ks&X-Amz-Signature=d91616a84518805e516169c0271465c4fd4a78931ed37da6ec7d0530d4513ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWPR24G%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDkF5g9kV1uK%2BVIgzCs6ok9CwiKPpf61WK6i5%2BpKS9ElAiEA4Y4NamIS9UMFAG%2FHDG3sYQniugeFxcslgUF9idGw7%2FIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjIxPtA9UfRo%2F0ZOSrcAy3b15ekaU13KI2eTgpExMkjtrnjmslH3YZxW0UTlEafNPP5yHTRVeY3PFQ1IQuorMJ%2B9d4lMd%2B6fJhftL1a36SwoTx%2Bi%2Bs2MaYZc4gzDOKJ%2BL4SbiuAl%2BtYfDz%2BQs9OyXdhOoiLC2f36TWp2egC0YcCveRIS7hfnohvArFxGWtz5k0dKCvfXdZ%2FEJLMZnYuVd8N%2BT0EZ6UxOhe7nDyoMZLA%2FRolcT3GOWKChFDKb6Oc0jLWvvusgEk2J4D4Bx%2BYEGGD1msePmVUzplVwwMcK7Dx43e%2BOdPHgbCMmqRUyF7KhqHbMzBPQFauNK42kPZ%2Fz3Q8sHzse1c21dY8xvf2lG4PrYoXsP9bDu3CVcYTDtZAbj5AKSE6DMd1sZW5CAY%2F9W3KU23qeIe2crOVWTzt3Cx21gArM9WaFuWVA7iK2AasgI8YJpJmCqu5igeWQedElUOKjovB6mUEO8mRbHl%2BfumcNC%2B4j10J035KTZhJIZ4cB3oXTUjrrBrPFiB62ara2dsenqoSn1BQ5jW8VGzW4NEX3fdpgpKLRfw3Zn9DLelh7%2BSE6CFpg1lPD4YyTEB4orSY2pLMA%2BwavbIoJCr%2FhUFQ51R03SkEF9n0xhuVz0U%2BbX7Mfva8kKyJPHQtMJykksAGOqUB3E49SYq4B8qS74tq34FsTlo0OHMhkicFHWcZcyfBh%2Bq%2FTQC1RAScD8fwkIR3A5NdPQPwHM%2F49EefjcU1psnumW3MrOWaObTlRsfhl%2Bn6m4Bvjl7vjLzJbfNF0kfpSdalyuFB0I%2BeW%2BgcPg4ZKsmn5Lql4jDxgzgc5MS1W0CXHPU7Qlw9HE7ttobyWDmKh86n6OxZ3KELs3fJwIE7Hgb7q4qdj1ks&X-Amz-Signature=e2aa32655312f6622568cd2da2e80eb0f8515876b417601146e5c947e55907a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWPR24G%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDkF5g9kV1uK%2BVIgzCs6ok9CwiKPpf61WK6i5%2BpKS9ElAiEA4Y4NamIS9UMFAG%2FHDG3sYQniugeFxcslgUF9idGw7%2FIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjIxPtA9UfRo%2F0ZOSrcAy3b15ekaU13KI2eTgpExMkjtrnjmslH3YZxW0UTlEafNPP5yHTRVeY3PFQ1IQuorMJ%2B9d4lMd%2B6fJhftL1a36SwoTx%2Bi%2Bs2MaYZc4gzDOKJ%2BL4SbiuAl%2BtYfDz%2BQs9OyXdhOoiLC2f36TWp2egC0YcCveRIS7hfnohvArFxGWtz5k0dKCvfXdZ%2FEJLMZnYuVd8N%2BT0EZ6UxOhe7nDyoMZLA%2FRolcT3GOWKChFDKb6Oc0jLWvvusgEk2J4D4Bx%2BYEGGD1msePmVUzplVwwMcK7Dx43e%2BOdPHgbCMmqRUyF7KhqHbMzBPQFauNK42kPZ%2Fz3Q8sHzse1c21dY8xvf2lG4PrYoXsP9bDu3CVcYTDtZAbj5AKSE6DMd1sZW5CAY%2F9W3KU23qeIe2crOVWTzt3Cx21gArM9WaFuWVA7iK2AasgI8YJpJmCqu5igeWQedElUOKjovB6mUEO8mRbHl%2BfumcNC%2B4j10J035KTZhJIZ4cB3oXTUjrrBrPFiB62ara2dsenqoSn1BQ5jW8VGzW4NEX3fdpgpKLRfw3Zn9DLelh7%2BSE6CFpg1lPD4YyTEB4orSY2pLMA%2BwavbIoJCr%2FhUFQ51R03SkEF9n0xhuVz0U%2BbX7Mfva8kKyJPHQtMJykksAGOqUB3E49SYq4B8qS74tq34FsTlo0OHMhkicFHWcZcyfBh%2Bq%2FTQC1RAScD8fwkIR3A5NdPQPwHM%2F49EefjcU1psnumW3MrOWaObTlRsfhl%2Bn6m4Bvjl7vjLzJbfNF0kfpSdalyuFB0I%2BeW%2BgcPg4ZKsmn5Lql4jDxgzgc5MS1W0CXHPU7Qlw9HE7ttobyWDmKh86n6OxZ3KELs3fJwIE7Hgb7q4qdj1ks&X-Amz-Signature=11347e56159910bbf6736e60eff1de7536e2217f6be980d4acd0e5cad3e418f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWPR24G%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDkF5g9kV1uK%2BVIgzCs6ok9CwiKPpf61WK6i5%2BpKS9ElAiEA4Y4NamIS9UMFAG%2FHDG3sYQniugeFxcslgUF9idGw7%2FIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjIxPtA9UfRo%2F0ZOSrcAy3b15ekaU13KI2eTgpExMkjtrnjmslH3YZxW0UTlEafNPP5yHTRVeY3PFQ1IQuorMJ%2B9d4lMd%2B6fJhftL1a36SwoTx%2Bi%2Bs2MaYZc4gzDOKJ%2BL4SbiuAl%2BtYfDz%2BQs9OyXdhOoiLC2f36TWp2egC0YcCveRIS7hfnohvArFxGWtz5k0dKCvfXdZ%2FEJLMZnYuVd8N%2BT0EZ6UxOhe7nDyoMZLA%2FRolcT3GOWKChFDKb6Oc0jLWvvusgEk2J4D4Bx%2BYEGGD1msePmVUzplVwwMcK7Dx43e%2BOdPHgbCMmqRUyF7KhqHbMzBPQFauNK42kPZ%2Fz3Q8sHzse1c21dY8xvf2lG4PrYoXsP9bDu3CVcYTDtZAbj5AKSE6DMd1sZW5CAY%2F9W3KU23qeIe2crOVWTzt3Cx21gArM9WaFuWVA7iK2AasgI8YJpJmCqu5igeWQedElUOKjovB6mUEO8mRbHl%2BfumcNC%2B4j10J035KTZhJIZ4cB3oXTUjrrBrPFiB62ara2dsenqoSn1BQ5jW8VGzW4NEX3fdpgpKLRfw3Zn9DLelh7%2BSE6CFpg1lPD4YyTEB4orSY2pLMA%2BwavbIoJCr%2FhUFQ51R03SkEF9n0xhuVz0U%2BbX7Mfva8kKyJPHQtMJykksAGOqUB3E49SYq4B8qS74tq34FsTlo0OHMhkicFHWcZcyfBh%2Bq%2FTQC1RAScD8fwkIR3A5NdPQPwHM%2F49EefjcU1psnumW3MrOWaObTlRsfhl%2Bn6m4Bvjl7vjLzJbfNF0kfpSdalyuFB0I%2BeW%2BgcPg4ZKsmn5Lql4jDxgzgc5MS1W0CXHPU7Qlw9HE7ttobyWDmKh86n6OxZ3KELs3fJwIE7Hgb7q4qdj1ks&X-Amz-Signature=ed6535d2f3f42d72144e0309a8a8da07626afba19ab772a48a3fc9b7718e6047&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
