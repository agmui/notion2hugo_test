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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJVEYJJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDFQgXwyMdmqZBLeo9SNy5j%2BDzUQOINHH4ifx2O%2FfjPggIgdknPEjGdXwgCmsiI4jgDP78mPH71I8Mz71lC665jziYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BQoz6u9FWSuNLHMCrcAzeLv39ig9UV29bRPa3cC%2BofLIWPOoQolNrrdWt95mhFbIZWCYSuz6%2FSISJbMfyeF5Wc3W2vLHFBQOc83ZJCICkl1Gi12fc%2BmOUNAlBc9XNHUCkM7Pf5BYOwG%2Bn5X2aIZtpm1ZaF42lgAF4h9DYkK1N6zXX29lHVNmqeymKHesGE27asY4zXxacR8cpA4rQzqDO3EkOtuh4LcYJyTpGoUfN6X%2FjPYYiKJEy8PL7prXK90a7xnwNwP%2BCJqeY2an2lEV4p4pRKiM%2Blb9iDuezSYi8zdW1LChL%2Fg9Ze8NuULDbq8P1m3cKHdhAunS%2BcDZBksadFAAisE7u6iXj55H2p5uJ8NMUtxFczYWCrhaEFEbyNWFTv%2Br3E5a42GXio%2BfZJUuV0gKVzwVmnB0qtSV950S3DJe8ZNKccyl8VYctU5xn%2Bnyc5Zw6dCoP7QDpvA%2Bx91XUKkAW8ejDiVxrVAZKCDtZMZ3ZY6NIoUhu22SHra6kTep599iMy0kPgRJseuStOQJvaJnGBESu%2FimuwU9aEyNS7oSVW1WSjEAeAPEny6jg%2FecJASvcEUQI7cNu0Fss%2BDnsiGeNEmD%2FqFMh9KZVfUfWMcd9PoVOeQQzKhfL9u0S3B0MiqSeupqfi3KnoMLqfoMQGOqUBdwEglQLRAd6ZK5xUzeoI2NDRafhc1ZEfEDFQRrcfUrlxQC3EfU4qqPe9C3BxhaJSzzPSzO%2F9m1WmsIwcIzrEB%2BlMCU4gH8RJCTWx3rh%2Ffzbj61F7AEa7wx8xBArex5sTPXvoAHuXuAY837Hmf5QgRy3Wqy9aylhM6dkXRrJoY%2FTVTpPCnZrrACx9y%2BJxD0%2BkFJy1aApTA870HCxQG5EcBW%2BM9Dox&X-Amz-Signature=c4b4b14877049383ddd260dc71be2fbc2aedec5ded65b3205471ced10b3089b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJVEYJJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDFQgXwyMdmqZBLeo9SNy5j%2BDzUQOINHH4ifx2O%2FfjPggIgdknPEjGdXwgCmsiI4jgDP78mPH71I8Mz71lC665jziYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BQoz6u9FWSuNLHMCrcAzeLv39ig9UV29bRPa3cC%2BofLIWPOoQolNrrdWt95mhFbIZWCYSuz6%2FSISJbMfyeF5Wc3W2vLHFBQOc83ZJCICkl1Gi12fc%2BmOUNAlBc9XNHUCkM7Pf5BYOwG%2Bn5X2aIZtpm1ZaF42lgAF4h9DYkK1N6zXX29lHVNmqeymKHesGE27asY4zXxacR8cpA4rQzqDO3EkOtuh4LcYJyTpGoUfN6X%2FjPYYiKJEy8PL7prXK90a7xnwNwP%2BCJqeY2an2lEV4p4pRKiM%2Blb9iDuezSYi8zdW1LChL%2Fg9Ze8NuULDbq8P1m3cKHdhAunS%2BcDZBksadFAAisE7u6iXj55H2p5uJ8NMUtxFczYWCrhaEFEbyNWFTv%2Br3E5a42GXio%2BfZJUuV0gKVzwVmnB0qtSV950S3DJe8ZNKccyl8VYctU5xn%2Bnyc5Zw6dCoP7QDpvA%2Bx91XUKkAW8ejDiVxrVAZKCDtZMZ3ZY6NIoUhu22SHra6kTep599iMy0kPgRJseuStOQJvaJnGBESu%2FimuwU9aEyNS7oSVW1WSjEAeAPEny6jg%2FecJASvcEUQI7cNu0Fss%2BDnsiGeNEmD%2FqFMh9KZVfUfWMcd9PoVOeQQzKhfL9u0S3B0MiqSeupqfi3KnoMLqfoMQGOqUBdwEglQLRAd6ZK5xUzeoI2NDRafhc1ZEfEDFQRrcfUrlxQC3EfU4qqPe9C3BxhaJSzzPSzO%2F9m1WmsIwcIzrEB%2BlMCU4gH8RJCTWx3rh%2Ffzbj61F7AEa7wx8xBArex5sTPXvoAHuXuAY837Hmf5QgRy3Wqy9aylhM6dkXRrJoY%2FTVTpPCnZrrACx9y%2BJxD0%2BkFJy1aApTA870HCxQG5EcBW%2BM9Dox&X-Amz-Signature=3b8c83fd6103a30c22eca9e9a0ac5102e9a4d0d3bc0bee07fa6f52eda2fc5b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJVEYJJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDFQgXwyMdmqZBLeo9SNy5j%2BDzUQOINHH4ifx2O%2FfjPggIgdknPEjGdXwgCmsiI4jgDP78mPH71I8Mz71lC665jziYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BQoz6u9FWSuNLHMCrcAzeLv39ig9UV29bRPa3cC%2BofLIWPOoQolNrrdWt95mhFbIZWCYSuz6%2FSISJbMfyeF5Wc3W2vLHFBQOc83ZJCICkl1Gi12fc%2BmOUNAlBc9XNHUCkM7Pf5BYOwG%2Bn5X2aIZtpm1ZaF42lgAF4h9DYkK1N6zXX29lHVNmqeymKHesGE27asY4zXxacR8cpA4rQzqDO3EkOtuh4LcYJyTpGoUfN6X%2FjPYYiKJEy8PL7prXK90a7xnwNwP%2BCJqeY2an2lEV4p4pRKiM%2Blb9iDuezSYi8zdW1LChL%2Fg9Ze8NuULDbq8P1m3cKHdhAunS%2BcDZBksadFAAisE7u6iXj55H2p5uJ8NMUtxFczYWCrhaEFEbyNWFTv%2Br3E5a42GXio%2BfZJUuV0gKVzwVmnB0qtSV950S3DJe8ZNKccyl8VYctU5xn%2Bnyc5Zw6dCoP7QDpvA%2Bx91XUKkAW8ejDiVxrVAZKCDtZMZ3ZY6NIoUhu22SHra6kTep599iMy0kPgRJseuStOQJvaJnGBESu%2FimuwU9aEyNS7oSVW1WSjEAeAPEny6jg%2FecJASvcEUQI7cNu0Fss%2BDnsiGeNEmD%2FqFMh9KZVfUfWMcd9PoVOeQQzKhfL9u0S3B0MiqSeupqfi3KnoMLqfoMQGOqUBdwEglQLRAd6ZK5xUzeoI2NDRafhc1ZEfEDFQRrcfUrlxQC3EfU4qqPe9C3BxhaJSzzPSzO%2F9m1WmsIwcIzrEB%2BlMCU4gH8RJCTWx3rh%2Ffzbj61F7AEa7wx8xBArex5sTPXvoAHuXuAY837Hmf5QgRy3Wqy9aylhM6dkXRrJoY%2FTVTpPCnZrrACx9y%2BJxD0%2BkFJy1aApTA870HCxQG5EcBW%2BM9Dox&X-Amz-Signature=0413cd9f075e8432a1a03d9b690b9a459ddeede6930882038f269e109cea33ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJVEYJJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDFQgXwyMdmqZBLeo9SNy5j%2BDzUQOINHH4ifx2O%2FfjPggIgdknPEjGdXwgCmsiI4jgDP78mPH71I8Mz71lC665jziYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BQoz6u9FWSuNLHMCrcAzeLv39ig9UV29bRPa3cC%2BofLIWPOoQolNrrdWt95mhFbIZWCYSuz6%2FSISJbMfyeF5Wc3W2vLHFBQOc83ZJCICkl1Gi12fc%2BmOUNAlBc9XNHUCkM7Pf5BYOwG%2Bn5X2aIZtpm1ZaF42lgAF4h9DYkK1N6zXX29lHVNmqeymKHesGE27asY4zXxacR8cpA4rQzqDO3EkOtuh4LcYJyTpGoUfN6X%2FjPYYiKJEy8PL7prXK90a7xnwNwP%2BCJqeY2an2lEV4p4pRKiM%2Blb9iDuezSYi8zdW1LChL%2Fg9Ze8NuULDbq8P1m3cKHdhAunS%2BcDZBksadFAAisE7u6iXj55H2p5uJ8NMUtxFczYWCrhaEFEbyNWFTv%2Br3E5a42GXio%2BfZJUuV0gKVzwVmnB0qtSV950S3DJe8ZNKccyl8VYctU5xn%2Bnyc5Zw6dCoP7QDpvA%2Bx91XUKkAW8ejDiVxrVAZKCDtZMZ3ZY6NIoUhu22SHra6kTep599iMy0kPgRJseuStOQJvaJnGBESu%2FimuwU9aEyNS7oSVW1WSjEAeAPEny6jg%2FecJASvcEUQI7cNu0Fss%2BDnsiGeNEmD%2FqFMh9KZVfUfWMcd9PoVOeQQzKhfL9u0S3B0MiqSeupqfi3KnoMLqfoMQGOqUBdwEglQLRAd6ZK5xUzeoI2NDRafhc1ZEfEDFQRrcfUrlxQC3EfU4qqPe9C3BxhaJSzzPSzO%2F9m1WmsIwcIzrEB%2BlMCU4gH8RJCTWx3rh%2Ffzbj61F7AEa7wx8xBArex5sTPXvoAHuXuAY837Hmf5QgRy3Wqy9aylhM6dkXRrJoY%2FTVTpPCnZrrACx9y%2BJxD0%2BkFJy1aApTA870HCxQG5EcBW%2BM9Dox&X-Amz-Signature=4627b64903dc8f455f933ca26c80e15ae1284a0c89600dae0e535d6429b3ab5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJVEYJJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDFQgXwyMdmqZBLeo9SNy5j%2BDzUQOINHH4ifx2O%2FfjPggIgdknPEjGdXwgCmsiI4jgDP78mPH71I8Mz71lC665jziYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BQoz6u9FWSuNLHMCrcAzeLv39ig9UV29bRPa3cC%2BofLIWPOoQolNrrdWt95mhFbIZWCYSuz6%2FSISJbMfyeF5Wc3W2vLHFBQOc83ZJCICkl1Gi12fc%2BmOUNAlBc9XNHUCkM7Pf5BYOwG%2Bn5X2aIZtpm1ZaF42lgAF4h9DYkK1N6zXX29lHVNmqeymKHesGE27asY4zXxacR8cpA4rQzqDO3EkOtuh4LcYJyTpGoUfN6X%2FjPYYiKJEy8PL7prXK90a7xnwNwP%2BCJqeY2an2lEV4p4pRKiM%2Blb9iDuezSYi8zdW1LChL%2Fg9Ze8NuULDbq8P1m3cKHdhAunS%2BcDZBksadFAAisE7u6iXj55H2p5uJ8NMUtxFczYWCrhaEFEbyNWFTv%2Br3E5a42GXio%2BfZJUuV0gKVzwVmnB0qtSV950S3DJe8ZNKccyl8VYctU5xn%2Bnyc5Zw6dCoP7QDpvA%2Bx91XUKkAW8ejDiVxrVAZKCDtZMZ3ZY6NIoUhu22SHra6kTep599iMy0kPgRJseuStOQJvaJnGBESu%2FimuwU9aEyNS7oSVW1WSjEAeAPEny6jg%2FecJASvcEUQI7cNu0Fss%2BDnsiGeNEmD%2FqFMh9KZVfUfWMcd9PoVOeQQzKhfL9u0S3B0MiqSeupqfi3KnoMLqfoMQGOqUBdwEglQLRAd6ZK5xUzeoI2NDRafhc1ZEfEDFQRrcfUrlxQC3EfU4qqPe9C3BxhaJSzzPSzO%2F9m1WmsIwcIzrEB%2BlMCU4gH8RJCTWx3rh%2Ffzbj61F7AEa7wx8xBArex5sTPXvoAHuXuAY837Hmf5QgRy3Wqy9aylhM6dkXRrJoY%2FTVTpPCnZrrACx9y%2BJxD0%2BkFJy1aApTA870HCxQG5EcBW%2BM9Dox&X-Amz-Signature=79f13d70ac2990d7d998a15c2c5a2a559f42ecb373a9013154aa2c334601021b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
