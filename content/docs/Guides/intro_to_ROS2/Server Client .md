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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHD4RRZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeYqwlTBq6ZAVajRjp%2FGYKaJnWBry4lPU4u57yXAYb5AiEA5iaKzqUttKhUAScPAI4pRG3gv147dlGZfDpU%2BvNAFKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgOZ3NEjY8hwXQCoCrcA35vz2SRka9aCk8J5TFUL8g71duAbi%2FjUywDViz6RC43cOt895dG7sJakMkfjeyhitX91BCk%2FKp%2Bvq4AfN6ph4X1U9oUpAE9nkjMgIu57TBVyydw2yA%2Ba7NOA4lpAATCd3p%2Bhy4qMtPoOlUAfMXODZcxjt8PmsaAGOVhrdI4bqSfhoTcz1K8%2FhGcLB2%2FXoLBo9xUmkhjKIr%2B1ujh42SO48PSS70hITV8TeC6vh2M04f20ldeDxoP7daJjsUR8lk3cC%2BlykDNSHjDBgyP3SDdtfUjTEqbJtKPrPjbGgb1925%2B5gMIgXQz6ayhFyHzfijC8siy%2FKaCEnP3J2VIm2flGiZ8ixcPsmUvODpMlORvk3oeDlrzQr%2FIUjBtpOaAuNvlwhV6PZskbocbAEAVjZPNpPlO3LFQLnqANGDQxM9kTODhmr27XrTokifGcQFNzfuQfJCjfZ0hKK5c4OVAlnXl7%2Bm2WIYDQ5iVZjRq8sd88jf7ELDDQ18zgvme%2Bv48SbE%2FP6L6vn95Eya10HjBFkeARKgmGEJUjHV4iKcC5HwjmfJQdy2J2udnuzChHsV5iRA3rQsiGIVrTz719MRWgYvikM6F2C9al86%2BaNIXGQ3bUXtYrlIqza8gjzuSYFGAMLSz6sEGOqUBQMyK%2BlyA0TlKRUum7SxcCIcEMzCITqwvoszlY9B8GXpRM%2BVM9UjvKFYa9taJ3eaC%2FSEl6LtmHM5GFJPUdjz%2Bh7VBkrwR2%2B%2FLxMYPOBf8oTCcRQXKv%2BIARdjJbgGx3n9ltqWqUz8GUEoJF3HwRX8Romjb4NSQsS1%2Fg3j0OulGC%2BZVOnZ2zRVW8BZzG4ju0GgMyteFWEbSLYalJAsunMedkrot%2FI2W&X-Amz-Signature=685156f9d55497fe16624d397319fa8b46b25cbce86cb25a6af356295f5ae50a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHD4RRZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeYqwlTBq6ZAVajRjp%2FGYKaJnWBry4lPU4u57yXAYb5AiEA5iaKzqUttKhUAScPAI4pRG3gv147dlGZfDpU%2BvNAFKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgOZ3NEjY8hwXQCoCrcA35vz2SRka9aCk8J5TFUL8g71duAbi%2FjUywDViz6RC43cOt895dG7sJakMkfjeyhitX91BCk%2FKp%2Bvq4AfN6ph4X1U9oUpAE9nkjMgIu57TBVyydw2yA%2Ba7NOA4lpAATCd3p%2Bhy4qMtPoOlUAfMXODZcxjt8PmsaAGOVhrdI4bqSfhoTcz1K8%2FhGcLB2%2FXoLBo9xUmkhjKIr%2B1ujh42SO48PSS70hITV8TeC6vh2M04f20ldeDxoP7daJjsUR8lk3cC%2BlykDNSHjDBgyP3SDdtfUjTEqbJtKPrPjbGgb1925%2B5gMIgXQz6ayhFyHzfijC8siy%2FKaCEnP3J2VIm2flGiZ8ixcPsmUvODpMlORvk3oeDlrzQr%2FIUjBtpOaAuNvlwhV6PZskbocbAEAVjZPNpPlO3LFQLnqANGDQxM9kTODhmr27XrTokifGcQFNzfuQfJCjfZ0hKK5c4OVAlnXl7%2Bm2WIYDQ5iVZjRq8sd88jf7ELDDQ18zgvme%2Bv48SbE%2FP6L6vn95Eya10HjBFkeARKgmGEJUjHV4iKcC5HwjmfJQdy2J2udnuzChHsV5iRA3rQsiGIVrTz719MRWgYvikM6F2C9al86%2BaNIXGQ3bUXtYrlIqza8gjzuSYFGAMLSz6sEGOqUBQMyK%2BlyA0TlKRUum7SxcCIcEMzCITqwvoszlY9B8GXpRM%2BVM9UjvKFYa9taJ3eaC%2FSEl6LtmHM5GFJPUdjz%2Bh7VBkrwR2%2B%2FLxMYPOBf8oTCcRQXKv%2BIARdjJbgGx3n9ltqWqUz8GUEoJF3HwRX8Romjb4NSQsS1%2Fg3j0OulGC%2BZVOnZ2zRVW8BZzG4ju0GgMyteFWEbSLYalJAsunMedkrot%2FI2W&X-Amz-Signature=cb777b9a3062eed3d3ea015a1a11f44392a070e0776ee992165e77a00e1a2729&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHD4RRZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeYqwlTBq6ZAVajRjp%2FGYKaJnWBry4lPU4u57yXAYb5AiEA5iaKzqUttKhUAScPAI4pRG3gv147dlGZfDpU%2BvNAFKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgOZ3NEjY8hwXQCoCrcA35vz2SRka9aCk8J5TFUL8g71duAbi%2FjUywDViz6RC43cOt895dG7sJakMkfjeyhitX91BCk%2FKp%2Bvq4AfN6ph4X1U9oUpAE9nkjMgIu57TBVyydw2yA%2Ba7NOA4lpAATCd3p%2Bhy4qMtPoOlUAfMXODZcxjt8PmsaAGOVhrdI4bqSfhoTcz1K8%2FhGcLB2%2FXoLBo9xUmkhjKIr%2B1ujh42SO48PSS70hITV8TeC6vh2M04f20ldeDxoP7daJjsUR8lk3cC%2BlykDNSHjDBgyP3SDdtfUjTEqbJtKPrPjbGgb1925%2B5gMIgXQz6ayhFyHzfijC8siy%2FKaCEnP3J2VIm2flGiZ8ixcPsmUvODpMlORvk3oeDlrzQr%2FIUjBtpOaAuNvlwhV6PZskbocbAEAVjZPNpPlO3LFQLnqANGDQxM9kTODhmr27XrTokifGcQFNzfuQfJCjfZ0hKK5c4OVAlnXl7%2Bm2WIYDQ5iVZjRq8sd88jf7ELDDQ18zgvme%2Bv48SbE%2FP6L6vn95Eya10HjBFkeARKgmGEJUjHV4iKcC5HwjmfJQdy2J2udnuzChHsV5iRA3rQsiGIVrTz719MRWgYvikM6F2C9al86%2BaNIXGQ3bUXtYrlIqza8gjzuSYFGAMLSz6sEGOqUBQMyK%2BlyA0TlKRUum7SxcCIcEMzCITqwvoszlY9B8GXpRM%2BVM9UjvKFYa9taJ3eaC%2FSEl6LtmHM5GFJPUdjz%2Bh7VBkrwR2%2B%2FLxMYPOBf8oTCcRQXKv%2BIARdjJbgGx3n9ltqWqUz8GUEoJF3HwRX8Romjb4NSQsS1%2Fg3j0OulGC%2BZVOnZ2zRVW8BZzG4ju0GgMyteFWEbSLYalJAsunMedkrot%2FI2W&X-Amz-Signature=0e7c5b3580637e1b5ebab0b96fd510f283fff81fff3a8f43edea08eae95d4115&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHD4RRZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeYqwlTBq6ZAVajRjp%2FGYKaJnWBry4lPU4u57yXAYb5AiEA5iaKzqUttKhUAScPAI4pRG3gv147dlGZfDpU%2BvNAFKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgOZ3NEjY8hwXQCoCrcA35vz2SRka9aCk8J5TFUL8g71duAbi%2FjUywDViz6RC43cOt895dG7sJakMkfjeyhitX91BCk%2FKp%2Bvq4AfN6ph4X1U9oUpAE9nkjMgIu57TBVyydw2yA%2Ba7NOA4lpAATCd3p%2Bhy4qMtPoOlUAfMXODZcxjt8PmsaAGOVhrdI4bqSfhoTcz1K8%2FhGcLB2%2FXoLBo9xUmkhjKIr%2B1ujh42SO48PSS70hITV8TeC6vh2M04f20ldeDxoP7daJjsUR8lk3cC%2BlykDNSHjDBgyP3SDdtfUjTEqbJtKPrPjbGgb1925%2B5gMIgXQz6ayhFyHzfijC8siy%2FKaCEnP3J2VIm2flGiZ8ixcPsmUvODpMlORvk3oeDlrzQr%2FIUjBtpOaAuNvlwhV6PZskbocbAEAVjZPNpPlO3LFQLnqANGDQxM9kTODhmr27XrTokifGcQFNzfuQfJCjfZ0hKK5c4OVAlnXl7%2Bm2WIYDQ5iVZjRq8sd88jf7ELDDQ18zgvme%2Bv48SbE%2FP6L6vn95Eya10HjBFkeARKgmGEJUjHV4iKcC5HwjmfJQdy2J2udnuzChHsV5iRA3rQsiGIVrTz719MRWgYvikM6F2C9al86%2BaNIXGQ3bUXtYrlIqza8gjzuSYFGAMLSz6sEGOqUBQMyK%2BlyA0TlKRUum7SxcCIcEMzCITqwvoszlY9B8GXpRM%2BVM9UjvKFYa9taJ3eaC%2FSEl6LtmHM5GFJPUdjz%2Bh7VBkrwR2%2B%2FLxMYPOBf8oTCcRQXKv%2BIARdjJbgGx3n9ltqWqUz8GUEoJF3HwRX8Romjb4NSQsS1%2Fg3j0OulGC%2BZVOnZ2zRVW8BZzG4ju0GgMyteFWEbSLYalJAsunMedkrot%2FI2W&X-Amz-Signature=37f6f19a845fd9b08cc8f774087d5a8fe3134e46e4b218ab04929fcc294382ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHD4RRZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeYqwlTBq6ZAVajRjp%2FGYKaJnWBry4lPU4u57yXAYb5AiEA5iaKzqUttKhUAScPAI4pRG3gv147dlGZfDpU%2BvNAFKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgOZ3NEjY8hwXQCoCrcA35vz2SRka9aCk8J5TFUL8g71duAbi%2FjUywDViz6RC43cOt895dG7sJakMkfjeyhitX91BCk%2FKp%2Bvq4AfN6ph4X1U9oUpAE9nkjMgIu57TBVyydw2yA%2Ba7NOA4lpAATCd3p%2Bhy4qMtPoOlUAfMXODZcxjt8PmsaAGOVhrdI4bqSfhoTcz1K8%2FhGcLB2%2FXoLBo9xUmkhjKIr%2B1ujh42SO48PSS70hITV8TeC6vh2M04f20ldeDxoP7daJjsUR8lk3cC%2BlykDNSHjDBgyP3SDdtfUjTEqbJtKPrPjbGgb1925%2B5gMIgXQz6ayhFyHzfijC8siy%2FKaCEnP3J2VIm2flGiZ8ixcPsmUvODpMlORvk3oeDlrzQr%2FIUjBtpOaAuNvlwhV6PZskbocbAEAVjZPNpPlO3LFQLnqANGDQxM9kTODhmr27XrTokifGcQFNzfuQfJCjfZ0hKK5c4OVAlnXl7%2Bm2WIYDQ5iVZjRq8sd88jf7ELDDQ18zgvme%2Bv48SbE%2FP6L6vn95Eya10HjBFkeARKgmGEJUjHV4iKcC5HwjmfJQdy2J2udnuzChHsV5iRA3rQsiGIVrTz719MRWgYvikM6F2C9al86%2BaNIXGQ3bUXtYrlIqza8gjzuSYFGAMLSz6sEGOqUBQMyK%2BlyA0TlKRUum7SxcCIcEMzCITqwvoszlY9B8GXpRM%2BVM9UjvKFYa9taJ3eaC%2FSEl6LtmHM5GFJPUdjz%2Bh7VBkrwR2%2B%2FLxMYPOBf8oTCcRQXKv%2BIARdjJbgGx3n9ltqWqUz8GUEoJF3HwRX8Romjb4NSQsS1%2Fg3j0OulGC%2BZVOnZ2zRVW8BZzG4ju0GgMyteFWEbSLYalJAsunMedkrot%2FI2W&X-Amz-Signature=17164835ccd52c04e3b051b353c0ad660b01989757eae569d480d0505a4f2fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
