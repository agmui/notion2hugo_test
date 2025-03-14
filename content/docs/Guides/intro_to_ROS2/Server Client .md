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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZCFTEN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxKHceWN1xzE0MRKdE9KUmqYJqUFHaetXvN4JEmnErsCIGx3FPrR0xbfVkMuWltQMs4KbGXjDP%2BvbHT0tPqrZBmgKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fh1waka13rFx0x0cq3AMmfBrXjATWHLK%2BDI2IuXbsA%2FcWESvk6%2FHLqnceVGVIh8SOIMx%2Fqcmo7gqX7SkyYnalnu7NHykQn50pzyOglxWAd1i8PTQEyUa4a8C33xV%2FNKaKYJAleJmYMvcQIXN7SDBdpJXddjN97TwkOSGd8Kn7A6%2BPlatVFN3sfBmUdbjo9hryiyjPqRj%2FJ7ZLlKyEV958lzkXPZ7iCZHBVqku9Dg0Lpluvr4Hr1G1JQjRJLiPtUudWs4ttmVlokUf4eyU9X6fpZdKIrIU8pKUy2TSZViYCfB1dbARv5r1j26w1SocjNgrlT2H%2FTkssNPouKJDrCBFEmvOD4l6oPjKEF%2Fh1VuJsnIJSUj0hkCuJASmvDGkKpo2YyAuzuhxuB1FjS7sOeU8AvkFel%2ByaTzpQNDtQ4nddKsf%2F92k63gH0F5YAi4p%2FQOVnSQQ1G%2FAROR5sk2W%2BrH3Pl08sKA2RlQa3FUGruMT9%2BYGxjEPI4aF%2Beii5r%2B8kHrF9YqltoZFQ9gYWReirRdB5KKTFMpSrkQDqvbWkN7HXirv59Xe1OWcQhAvGooTcZflw%2FDGVTNf%2FhM4O7CLcJ45XPwad6XUydG7sab0sJJ0UmEJJqkMRW%2Fsbj%2FCc16lndoVe8zSVrapKCZipjC7js6%2BBjqnAfdgo7nEcJnIHCk9tvJuprzPEgJZOgitmnBuWEx9pZYkL1TCpHyrAmOSJUmaBCbV5su1HTormTgViZ4WZG4DBPtuDcYxKJfMLQGFsZxqIjsNyuNBmSwxIfX548miW6BGr5ECvW%2FCpqF378YJl5mjaKvsufIkMRqUonub07BYwwHBcST7KoT5oUlybAZHSSeLU%2BPZ0QhyWiJo6e7K2pCUH3ABOuVeOKl1&X-Amz-Signature=5bd3a29bdbb041ebbfea6cab80e64c2b8e9b71299268d2b289441f6d7be43a66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZCFTEN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxKHceWN1xzE0MRKdE9KUmqYJqUFHaetXvN4JEmnErsCIGx3FPrR0xbfVkMuWltQMs4KbGXjDP%2BvbHT0tPqrZBmgKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fh1waka13rFx0x0cq3AMmfBrXjATWHLK%2BDI2IuXbsA%2FcWESvk6%2FHLqnceVGVIh8SOIMx%2Fqcmo7gqX7SkyYnalnu7NHykQn50pzyOglxWAd1i8PTQEyUa4a8C33xV%2FNKaKYJAleJmYMvcQIXN7SDBdpJXddjN97TwkOSGd8Kn7A6%2BPlatVFN3sfBmUdbjo9hryiyjPqRj%2FJ7ZLlKyEV958lzkXPZ7iCZHBVqku9Dg0Lpluvr4Hr1G1JQjRJLiPtUudWs4ttmVlokUf4eyU9X6fpZdKIrIU8pKUy2TSZViYCfB1dbARv5r1j26w1SocjNgrlT2H%2FTkssNPouKJDrCBFEmvOD4l6oPjKEF%2Fh1VuJsnIJSUj0hkCuJASmvDGkKpo2YyAuzuhxuB1FjS7sOeU8AvkFel%2ByaTzpQNDtQ4nddKsf%2F92k63gH0F5YAi4p%2FQOVnSQQ1G%2FAROR5sk2W%2BrH3Pl08sKA2RlQa3FUGruMT9%2BYGxjEPI4aF%2Beii5r%2B8kHrF9YqltoZFQ9gYWReirRdB5KKTFMpSrkQDqvbWkN7HXirv59Xe1OWcQhAvGooTcZflw%2FDGVTNf%2FhM4O7CLcJ45XPwad6XUydG7sab0sJJ0UmEJJqkMRW%2Fsbj%2FCc16lndoVe8zSVrapKCZipjC7js6%2BBjqnAfdgo7nEcJnIHCk9tvJuprzPEgJZOgitmnBuWEx9pZYkL1TCpHyrAmOSJUmaBCbV5su1HTormTgViZ4WZG4DBPtuDcYxKJfMLQGFsZxqIjsNyuNBmSwxIfX548miW6BGr5ECvW%2FCpqF378YJl5mjaKvsufIkMRqUonub07BYwwHBcST7KoT5oUlybAZHSSeLU%2BPZ0QhyWiJo6e7K2pCUH3ABOuVeOKl1&X-Amz-Signature=29e1c6ca52e62955455f4a519aac250f49c628874148994de65c09e67adf5b71&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZCFTEN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxKHceWN1xzE0MRKdE9KUmqYJqUFHaetXvN4JEmnErsCIGx3FPrR0xbfVkMuWltQMs4KbGXjDP%2BvbHT0tPqrZBmgKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fh1waka13rFx0x0cq3AMmfBrXjATWHLK%2BDI2IuXbsA%2FcWESvk6%2FHLqnceVGVIh8SOIMx%2Fqcmo7gqX7SkyYnalnu7NHykQn50pzyOglxWAd1i8PTQEyUa4a8C33xV%2FNKaKYJAleJmYMvcQIXN7SDBdpJXddjN97TwkOSGd8Kn7A6%2BPlatVFN3sfBmUdbjo9hryiyjPqRj%2FJ7ZLlKyEV958lzkXPZ7iCZHBVqku9Dg0Lpluvr4Hr1G1JQjRJLiPtUudWs4ttmVlokUf4eyU9X6fpZdKIrIU8pKUy2TSZViYCfB1dbARv5r1j26w1SocjNgrlT2H%2FTkssNPouKJDrCBFEmvOD4l6oPjKEF%2Fh1VuJsnIJSUj0hkCuJASmvDGkKpo2YyAuzuhxuB1FjS7sOeU8AvkFel%2ByaTzpQNDtQ4nddKsf%2F92k63gH0F5YAi4p%2FQOVnSQQ1G%2FAROR5sk2W%2BrH3Pl08sKA2RlQa3FUGruMT9%2BYGxjEPI4aF%2Beii5r%2B8kHrF9YqltoZFQ9gYWReirRdB5KKTFMpSrkQDqvbWkN7HXirv59Xe1OWcQhAvGooTcZflw%2FDGVTNf%2FhM4O7CLcJ45XPwad6XUydG7sab0sJJ0UmEJJqkMRW%2Fsbj%2FCc16lndoVe8zSVrapKCZipjC7js6%2BBjqnAfdgo7nEcJnIHCk9tvJuprzPEgJZOgitmnBuWEx9pZYkL1TCpHyrAmOSJUmaBCbV5su1HTormTgViZ4WZG4DBPtuDcYxKJfMLQGFsZxqIjsNyuNBmSwxIfX548miW6BGr5ECvW%2FCpqF378YJl5mjaKvsufIkMRqUonub07BYwwHBcST7KoT5oUlybAZHSSeLU%2BPZ0QhyWiJo6e7K2pCUH3ABOuVeOKl1&X-Amz-Signature=995efece0cfe9f3d0aed6019dcef6ab5f599c9ca9ce806dacdddcfcef446a37b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZCFTEN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxKHceWN1xzE0MRKdE9KUmqYJqUFHaetXvN4JEmnErsCIGx3FPrR0xbfVkMuWltQMs4KbGXjDP%2BvbHT0tPqrZBmgKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fh1waka13rFx0x0cq3AMmfBrXjATWHLK%2BDI2IuXbsA%2FcWESvk6%2FHLqnceVGVIh8SOIMx%2Fqcmo7gqX7SkyYnalnu7NHykQn50pzyOglxWAd1i8PTQEyUa4a8C33xV%2FNKaKYJAleJmYMvcQIXN7SDBdpJXddjN97TwkOSGd8Kn7A6%2BPlatVFN3sfBmUdbjo9hryiyjPqRj%2FJ7ZLlKyEV958lzkXPZ7iCZHBVqku9Dg0Lpluvr4Hr1G1JQjRJLiPtUudWs4ttmVlokUf4eyU9X6fpZdKIrIU8pKUy2TSZViYCfB1dbARv5r1j26w1SocjNgrlT2H%2FTkssNPouKJDrCBFEmvOD4l6oPjKEF%2Fh1VuJsnIJSUj0hkCuJASmvDGkKpo2YyAuzuhxuB1FjS7sOeU8AvkFel%2ByaTzpQNDtQ4nddKsf%2F92k63gH0F5YAi4p%2FQOVnSQQ1G%2FAROR5sk2W%2BrH3Pl08sKA2RlQa3FUGruMT9%2BYGxjEPI4aF%2Beii5r%2B8kHrF9YqltoZFQ9gYWReirRdB5KKTFMpSrkQDqvbWkN7HXirv59Xe1OWcQhAvGooTcZflw%2FDGVTNf%2FhM4O7CLcJ45XPwad6XUydG7sab0sJJ0UmEJJqkMRW%2Fsbj%2FCc16lndoVe8zSVrapKCZipjC7js6%2BBjqnAfdgo7nEcJnIHCk9tvJuprzPEgJZOgitmnBuWEx9pZYkL1TCpHyrAmOSJUmaBCbV5su1HTormTgViZ4WZG4DBPtuDcYxKJfMLQGFsZxqIjsNyuNBmSwxIfX548miW6BGr5ECvW%2FCpqF378YJl5mjaKvsufIkMRqUonub07BYwwHBcST7KoT5oUlybAZHSSeLU%2BPZ0QhyWiJo6e7K2pCUH3ABOuVeOKl1&X-Amz-Signature=7d19fa5e8cbd25e3d11fd03603408dfe9287437c63076c198cd36414c64ad320&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZCFTEN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxKHceWN1xzE0MRKdE9KUmqYJqUFHaetXvN4JEmnErsCIGx3FPrR0xbfVkMuWltQMs4KbGXjDP%2BvbHT0tPqrZBmgKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fh1waka13rFx0x0cq3AMmfBrXjATWHLK%2BDI2IuXbsA%2FcWESvk6%2FHLqnceVGVIh8SOIMx%2Fqcmo7gqX7SkyYnalnu7NHykQn50pzyOglxWAd1i8PTQEyUa4a8C33xV%2FNKaKYJAleJmYMvcQIXN7SDBdpJXddjN97TwkOSGd8Kn7A6%2BPlatVFN3sfBmUdbjo9hryiyjPqRj%2FJ7ZLlKyEV958lzkXPZ7iCZHBVqku9Dg0Lpluvr4Hr1G1JQjRJLiPtUudWs4ttmVlokUf4eyU9X6fpZdKIrIU8pKUy2TSZViYCfB1dbARv5r1j26w1SocjNgrlT2H%2FTkssNPouKJDrCBFEmvOD4l6oPjKEF%2Fh1VuJsnIJSUj0hkCuJASmvDGkKpo2YyAuzuhxuB1FjS7sOeU8AvkFel%2ByaTzpQNDtQ4nddKsf%2F92k63gH0F5YAi4p%2FQOVnSQQ1G%2FAROR5sk2W%2BrH3Pl08sKA2RlQa3FUGruMT9%2BYGxjEPI4aF%2Beii5r%2B8kHrF9YqltoZFQ9gYWReirRdB5KKTFMpSrkQDqvbWkN7HXirv59Xe1OWcQhAvGooTcZflw%2FDGVTNf%2FhM4O7CLcJ45XPwad6XUydG7sab0sJJ0UmEJJqkMRW%2Fsbj%2FCc16lndoVe8zSVrapKCZipjC7js6%2BBjqnAfdgo7nEcJnIHCk9tvJuprzPEgJZOgitmnBuWEx9pZYkL1TCpHyrAmOSJUmaBCbV5su1HTormTgViZ4WZG4DBPtuDcYxKJfMLQGFsZxqIjsNyuNBmSwxIfX548miW6BGr5ECvW%2FCpqF378YJl5mjaKvsufIkMRqUonub07BYwwHBcST7KoT5oUlybAZHSSeLU%2BPZ0QhyWiJo6e7K2pCUH3ABOuVeOKl1&X-Amz-Signature=18aad9f8150cc1a6591a80e5e54518ba31e6fa00799d609e9d387f63cfcb50c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
