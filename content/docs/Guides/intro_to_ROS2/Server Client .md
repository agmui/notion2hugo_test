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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4MIVSC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHWrTqRWbv9zRWUuebJPO7KmGd219uXy03YKJJ%2FYeX9QIhAMMrgUVr%2Ftdr8ZoUm9j47JCKoQvhw1qXmeeBvzrYmyk6Kv8DCHoQABoMNjM3NDIzMTgzODA1Igx1wrPwkL7lwmbnuBgq3AOwo33G4G2vwhuqLSdBG02e30ZiNzsyHEvGuCikR9Fjy5SPmKne%2Ff0Jvi9jtK5hUEU%2Br0Px1oJ2tK9VDzsb7BewC%2F7v%2BsFyH9V8GKCFQ2eM8H191SaTj7W27TFzppgZwvpyr4%2F83PsT%2BRon%2F6aBSVLlDbYaUq3WwLUKj0oDoENSknyZI4DxDDehPS3VWxVVzUr5cXNGr0yHamin8MI67u5nU%2BwdIqj4cJCpyeznSneeiLcSsiSMPsFoaqQrPK4O8OG7pqsfgP5SWGRs7GoUioI%2F3Fm85r%2B4n44qbv8%2F8LrqOC%2BC0b1MpWhNA5dmOP3djLLh%2Bm3z0cRiyh5P4HKA4YlTXZlr8dSIvTa4R%2BhlelSgXhL%2Fw6xOcvsNxjSvHW8HfGEuNbYe5g11qs7%2Bzot0O5wnwQ%2FH2sQYUvCKhzH2lIVAfoq2KqA4CFu7mdVF%2FWehUBH1bcIoD04BqfPDLNMWGCLvd%2BMItq%2FQPT86x%2FJlfIPrc%2Bbx1QY%2BVW8KSiQM3jV55bwd%2FvcB4TMTLZXlPMGNZS5RaBYVEhyTpMwl9ezHIR%2Fe8lHNYx7hvTETW4mXS7lmnR98VV4rLqSZ20YiRFAIl86hu6xgunQVCacBzY%2BT%2BUAqOQyuP5HTH2AzKU6K5DC%2BpPvCBjqkAfxl3iv7T6xPmhbntL6fOJFfjvCqBJsIu8AvURTyEAz1fZ0TguZ4G%2F%2BIxWmVxe9z%2BO9PCLgr7RotlbCG8EDQK1bqUqF6lVfyEvb%2B9RJnp181CyRRd5y9Q8CpAQ20noIM4tGt0bh4NISHDDPMAFN36TDJDWyv4llsDhoXgqyG98CFHaZMC0azZqW5wnQ7BNlNgxGl%2Bn382G%2FvPCq4qJUl3dVP1NX8&X-Amz-Signature=06e2bb1cb29acdf739cf32c46c027d13af97922d8440d579b5b247280655fffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4MIVSC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHWrTqRWbv9zRWUuebJPO7KmGd219uXy03YKJJ%2FYeX9QIhAMMrgUVr%2Ftdr8ZoUm9j47JCKoQvhw1qXmeeBvzrYmyk6Kv8DCHoQABoMNjM3NDIzMTgzODA1Igx1wrPwkL7lwmbnuBgq3AOwo33G4G2vwhuqLSdBG02e30ZiNzsyHEvGuCikR9Fjy5SPmKne%2Ff0Jvi9jtK5hUEU%2Br0Px1oJ2tK9VDzsb7BewC%2F7v%2BsFyH9V8GKCFQ2eM8H191SaTj7W27TFzppgZwvpyr4%2F83PsT%2BRon%2F6aBSVLlDbYaUq3WwLUKj0oDoENSknyZI4DxDDehPS3VWxVVzUr5cXNGr0yHamin8MI67u5nU%2BwdIqj4cJCpyeznSneeiLcSsiSMPsFoaqQrPK4O8OG7pqsfgP5SWGRs7GoUioI%2F3Fm85r%2B4n44qbv8%2F8LrqOC%2BC0b1MpWhNA5dmOP3djLLh%2Bm3z0cRiyh5P4HKA4YlTXZlr8dSIvTa4R%2BhlelSgXhL%2Fw6xOcvsNxjSvHW8HfGEuNbYe5g11qs7%2Bzot0O5wnwQ%2FH2sQYUvCKhzH2lIVAfoq2KqA4CFu7mdVF%2FWehUBH1bcIoD04BqfPDLNMWGCLvd%2BMItq%2FQPT86x%2FJlfIPrc%2Bbx1QY%2BVW8KSiQM3jV55bwd%2FvcB4TMTLZXlPMGNZS5RaBYVEhyTpMwl9ezHIR%2Fe8lHNYx7hvTETW4mXS7lmnR98VV4rLqSZ20YiRFAIl86hu6xgunQVCacBzY%2BT%2BUAqOQyuP5HTH2AzKU6K5DC%2BpPvCBjqkAfxl3iv7T6xPmhbntL6fOJFfjvCqBJsIu8AvURTyEAz1fZ0TguZ4G%2F%2BIxWmVxe9z%2BO9PCLgr7RotlbCG8EDQK1bqUqF6lVfyEvb%2B9RJnp181CyRRd5y9Q8CpAQ20noIM4tGt0bh4NISHDDPMAFN36TDJDWyv4llsDhoXgqyG98CFHaZMC0azZqW5wnQ7BNlNgxGl%2Bn382G%2FvPCq4qJUl3dVP1NX8&X-Amz-Signature=3cae3588e23754ff06b92da1af265c63aa0095f75fc85e44dd4909d08508a465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4MIVSC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHWrTqRWbv9zRWUuebJPO7KmGd219uXy03YKJJ%2FYeX9QIhAMMrgUVr%2Ftdr8ZoUm9j47JCKoQvhw1qXmeeBvzrYmyk6Kv8DCHoQABoMNjM3NDIzMTgzODA1Igx1wrPwkL7lwmbnuBgq3AOwo33G4G2vwhuqLSdBG02e30ZiNzsyHEvGuCikR9Fjy5SPmKne%2Ff0Jvi9jtK5hUEU%2Br0Px1oJ2tK9VDzsb7BewC%2F7v%2BsFyH9V8GKCFQ2eM8H191SaTj7W27TFzppgZwvpyr4%2F83PsT%2BRon%2F6aBSVLlDbYaUq3WwLUKj0oDoENSknyZI4DxDDehPS3VWxVVzUr5cXNGr0yHamin8MI67u5nU%2BwdIqj4cJCpyeznSneeiLcSsiSMPsFoaqQrPK4O8OG7pqsfgP5SWGRs7GoUioI%2F3Fm85r%2B4n44qbv8%2F8LrqOC%2BC0b1MpWhNA5dmOP3djLLh%2Bm3z0cRiyh5P4HKA4YlTXZlr8dSIvTa4R%2BhlelSgXhL%2Fw6xOcvsNxjSvHW8HfGEuNbYe5g11qs7%2Bzot0O5wnwQ%2FH2sQYUvCKhzH2lIVAfoq2KqA4CFu7mdVF%2FWehUBH1bcIoD04BqfPDLNMWGCLvd%2BMItq%2FQPT86x%2FJlfIPrc%2Bbx1QY%2BVW8KSiQM3jV55bwd%2FvcB4TMTLZXlPMGNZS5RaBYVEhyTpMwl9ezHIR%2Fe8lHNYx7hvTETW4mXS7lmnR98VV4rLqSZ20YiRFAIl86hu6xgunQVCacBzY%2BT%2BUAqOQyuP5HTH2AzKU6K5DC%2BpPvCBjqkAfxl3iv7T6xPmhbntL6fOJFfjvCqBJsIu8AvURTyEAz1fZ0TguZ4G%2F%2BIxWmVxe9z%2BO9PCLgr7RotlbCG8EDQK1bqUqF6lVfyEvb%2B9RJnp181CyRRd5y9Q8CpAQ20noIM4tGt0bh4NISHDDPMAFN36TDJDWyv4llsDhoXgqyG98CFHaZMC0azZqW5wnQ7BNlNgxGl%2Bn382G%2FvPCq4qJUl3dVP1NX8&X-Amz-Signature=fd5e334417820c40a9f08bca03c7ad307ddc4b41852b2a82fdc9afc239953ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4MIVSC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHWrTqRWbv9zRWUuebJPO7KmGd219uXy03YKJJ%2FYeX9QIhAMMrgUVr%2Ftdr8ZoUm9j47JCKoQvhw1qXmeeBvzrYmyk6Kv8DCHoQABoMNjM3NDIzMTgzODA1Igx1wrPwkL7lwmbnuBgq3AOwo33G4G2vwhuqLSdBG02e30ZiNzsyHEvGuCikR9Fjy5SPmKne%2Ff0Jvi9jtK5hUEU%2Br0Px1oJ2tK9VDzsb7BewC%2F7v%2BsFyH9V8GKCFQ2eM8H191SaTj7W27TFzppgZwvpyr4%2F83PsT%2BRon%2F6aBSVLlDbYaUq3WwLUKj0oDoENSknyZI4DxDDehPS3VWxVVzUr5cXNGr0yHamin8MI67u5nU%2BwdIqj4cJCpyeznSneeiLcSsiSMPsFoaqQrPK4O8OG7pqsfgP5SWGRs7GoUioI%2F3Fm85r%2B4n44qbv8%2F8LrqOC%2BC0b1MpWhNA5dmOP3djLLh%2Bm3z0cRiyh5P4HKA4YlTXZlr8dSIvTa4R%2BhlelSgXhL%2Fw6xOcvsNxjSvHW8HfGEuNbYe5g11qs7%2Bzot0O5wnwQ%2FH2sQYUvCKhzH2lIVAfoq2KqA4CFu7mdVF%2FWehUBH1bcIoD04BqfPDLNMWGCLvd%2BMItq%2FQPT86x%2FJlfIPrc%2Bbx1QY%2BVW8KSiQM3jV55bwd%2FvcB4TMTLZXlPMGNZS5RaBYVEhyTpMwl9ezHIR%2Fe8lHNYx7hvTETW4mXS7lmnR98VV4rLqSZ20YiRFAIl86hu6xgunQVCacBzY%2BT%2BUAqOQyuP5HTH2AzKU6K5DC%2BpPvCBjqkAfxl3iv7T6xPmhbntL6fOJFfjvCqBJsIu8AvURTyEAz1fZ0TguZ4G%2F%2BIxWmVxe9z%2BO9PCLgr7RotlbCG8EDQK1bqUqF6lVfyEvb%2B9RJnp181CyRRd5y9Q8CpAQ20noIM4tGt0bh4NISHDDPMAFN36TDJDWyv4llsDhoXgqyG98CFHaZMC0azZqW5wnQ7BNlNgxGl%2Bn382G%2FvPCq4qJUl3dVP1NX8&X-Amz-Signature=b23fc80cc54d34a865a0d8b382ebf37760dcdc9a054dae03121fdd1560ed5e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4MIVSC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHWrTqRWbv9zRWUuebJPO7KmGd219uXy03YKJJ%2FYeX9QIhAMMrgUVr%2Ftdr8ZoUm9j47JCKoQvhw1qXmeeBvzrYmyk6Kv8DCHoQABoMNjM3NDIzMTgzODA1Igx1wrPwkL7lwmbnuBgq3AOwo33G4G2vwhuqLSdBG02e30ZiNzsyHEvGuCikR9Fjy5SPmKne%2Ff0Jvi9jtK5hUEU%2Br0Px1oJ2tK9VDzsb7BewC%2F7v%2BsFyH9V8GKCFQ2eM8H191SaTj7W27TFzppgZwvpyr4%2F83PsT%2BRon%2F6aBSVLlDbYaUq3WwLUKj0oDoENSknyZI4DxDDehPS3VWxVVzUr5cXNGr0yHamin8MI67u5nU%2BwdIqj4cJCpyeznSneeiLcSsiSMPsFoaqQrPK4O8OG7pqsfgP5SWGRs7GoUioI%2F3Fm85r%2B4n44qbv8%2F8LrqOC%2BC0b1MpWhNA5dmOP3djLLh%2Bm3z0cRiyh5P4HKA4YlTXZlr8dSIvTa4R%2BhlelSgXhL%2Fw6xOcvsNxjSvHW8HfGEuNbYe5g11qs7%2Bzot0O5wnwQ%2FH2sQYUvCKhzH2lIVAfoq2KqA4CFu7mdVF%2FWehUBH1bcIoD04BqfPDLNMWGCLvd%2BMItq%2FQPT86x%2FJlfIPrc%2Bbx1QY%2BVW8KSiQM3jV55bwd%2FvcB4TMTLZXlPMGNZS5RaBYVEhyTpMwl9ezHIR%2Fe8lHNYx7hvTETW4mXS7lmnR98VV4rLqSZ20YiRFAIl86hu6xgunQVCacBzY%2BT%2BUAqOQyuP5HTH2AzKU6K5DC%2BpPvCBjqkAfxl3iv7T6xPmhbntL6fOJFfjvCqBJsIu8AvURTyEAz1fZ0TguZ4G%2F%2BIxWmVxe9z%2BO9PCLgr7RotlbCG8EDQK1bqUqF6lVfyEvb%2B9RJnp181CyRRd5y9Q8CpAQ20noIM4tGt0bh4NISHDDPMAFN36TDJDWyv4llsDhoXgqyG98CFHaZMC0azZqW5wnQ7BNlNgxGl%2Bn382G%2FvPCq4qJUl3dVP1NX8&X-Amz-Signature=ff927d2bf989982f47cad37103f1da177ee56921a61e89d3e0de13fa2624d153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
