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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PYXLFG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCIqIqplUmCE%2BvXYqHJCbHJLVCt1DlaowWEJE4Un%2Fk%2FygIhAOSCrunzuDwSaSbvHMhwZDZNbtRSPkepF7ArOGT7oE9qKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdjrpzsu2H0fpdgSAq3AMs7hLHbKJJdz41OI2GpZnlKUraaPMTVJgS92hOSH4EPZSfkrseQ4zflzcGwoA5aiR5sh3V3d%2BpvGKDtYnf66GZsl1bL4yTABZFF90GS3YkRBNaQLmj9maw6m0mLS3CQwAX9nPGWEn4ILgwsDMhOMrYOjea2Ek1DN0t%2F3SRke1fpwiFihUTBM9bHlzkUhbn6qRHavASujZPBfyS%2BoPN26kXf%2FOd7b%2F7id1Oa5f5pwqX2xo0RubIKZtw38UlsHJlSnsCRZxlUtKIp296fOhyKfrCZfpE9ip2Q0FZVuPkYiO8FQZ%2BqVKZQ01gti1btx4JmaO7zJx6FohEAQM%2Fe%2Fq0cDWcNoCuItlb5%2FMUEjUkV1PrGhP12sDD9vITTOZgr%2FF%2BDiN0AWEMXk3ZT%2FSXW1iFiO%2FGn%2BPDC0%2BNa6S72X28OqAsl9KL0QT5QMxSKgr4Wc7ZDskcIQp66Bju69wXP2sdV9lCuFVgVUkwihu2HAIvJjVMXnFdQQlplTZD%2Br60MRPg94p35Gn4jergXTD0nUQxuEy8fbxqwCBJPu%2FU1gWv%2FRQOYAw%2F3aeuWj%2FHpQpib8rU6ujXb5r%2FkKOsRKkdi5VQgrAYD0fny14vGJ81gYE4TP%2Bk9a9ntQiUkgUaIuC1GDDzia2%2FBjqkAbZid%2Fb15z%2BbU9StLPsJuUugYWw%2FpJ%2FXBwbIkPQ9s3aVkaPeN5WUgM7fnbFxbKHgE95VASjnTPkpQjXKr%2BKit%2BpDAbbdbLIbbM%2BUdgbSDcvj55WGCmE1KtCTHqpQ4iuy4M9k59yhuA3FMIvNE0%2BA9vArGRARYeu5zXG6xgTf3667rSgPyUFeXJi7q5iTa4C8o%2FhD1w8zhOvDGkSkCR9ioDRsHACH&X-Amz-Signature=87a12c96ebada14c1d522863a2ca2a01f49457136973edd278f19d2f9f809820&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PYXLFG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCIqIqplUmCE%2BvXYqHJCbHJLVCt1DlaowWEJE4Un%2Fk%2FygIhAOSCrunzuDwSaSbvHMhwZDZNbtRSPkepF7ArOGT7oE9qKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdjrpzsu2H0fpdgSAq3AMs7hLHbKJJdz41OI2GpZnlKUraaPMTVJgS92hOSH4EPZSfkrseQ4zflzcGwoA5aiR5sh3V3d%2BpvGKDtYnf66GZsl1bL4yTABZFF90GS3YkRBNaQLmj9maw6m0mLS3CQwAX9nPGWEn4ILgwsDMhOMrYOjea2Ek1DN0t%2F3SRke1fpwiFihUTBM9bHlzkUhbn6qRHavASujZPBfyS%2BoPN26kXf%2FOd7b%2F7id1Oa5f5pwqX2xo0RubIKZtw38UlsHJlSnsCRZxlUtKIp296fOhyKfrCZfpE9ip2Q0FZVuPkYiO8FQZ%2BqVKZQ01gti1btx4JmaO7zJx6FohEAQM%2Fe%2Fq0cDWcNoCuItlb5%2FMUEjUkV1PrGhP12sDD9vITTOZgr%2FF%2BDiN0AWEMXk3ZT%2FSXW1iFiO%2FGn%2BPDC0%2BNa6S72X28OqAsl9KL0QT5QMxSKgr4Wc7ZDskcIQp66Bju69wXP2sdV9lCuFVgVUkwihu2HAIvJjVMXnFdQQlplTZD%2Br60MRPg94p35Gn4jergXTD0nUQxuEy8fbxqwCBJPu%2FU1gWv%2FRQOYAw%2F3aeuWj%2FHpQpib8rU6ujXb5r%2FkKOsRKkdi5VQgrAYD0fny14vGJ81gYE4TP%2Bk9a9ntQiUkgUaIuC1GDDzia2%2FBjqkAbZid%2Fb15z%2BbU9StLPsJuUugYWw%2FpJ%2FXBwbIkPQ9s3aVkaPeN5WUgM7fnbFxbKHgE95VASjnTPkpQjXKr%2BKit%2BpDAbbdbLIbbM%2BUdgbSDcvj55WGCmE1KtCTHqpQ4iuy4M9k59yhuA3FMIvNE0%2BA9vArGRARYeu5zXG6xgTf3667rSgPyUFeXJi7q5iTa4C8o%2FhD1w8zhOvDGkSkCR9ioDRsHACH&X-Amz-Signature=21b254046d6144762457cc7df87e279e5a396799dadd2b78211d1a02690b95c9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PYXLFG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCIqIqplUmCE%2BvXYqHJCbHJLVCt1DlaowWEJE4Un%2Fk%2FygIhAOSCrunzuDwSaSbvHMhwZDZNbtRSPkepF7ArOGT7oE9qKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdjrpzsu2H0fpdgSAq3AMs7hLHbKJJdz41OI2GpZnlKUraaPMTVJgS92hOSH4EPZSfkrseQ4zflzcGwoA5aiR5sh3V3d%2BpvGKDtYnf66GZsl1bL4yTABZFF90GS3YkRBNaQLmj9maw6m0mLS3CQwAX9nPGWEn4ILgwsDMhOMrYOjea2Ek1DN0t%2F3SRke1fpwiFihUTBM9bHlzkUhbn6qRHavASujZPBfyS%2BoPN26kXf%2FOd7b%2F7id1Oa5f5pwqX2xo0RubIKZtw38UlsHJlSnsCRZxlUtKIp296fOhyKfrCZfpE9ip2Q0FZVuPkYiO8FQZ%2BqVKZQ01gti1btx4JmaO7zJx6FohEAQM%2Fe%2Fq0cDWcNoCuItlb5%2FMUEjUkV1PrGhP12sDD9vITTOZgr%2FF%2BDiN0AWEMXk3ZT%2FSXW1iFiO%2FGn%2BPDC0%2BNa6S72X28OqAsl9KL0QT5QMxSKgr4Wc7ZDskcIQp66Bju69wXP2sdV9lCuFVgVUkwihu2HAIvJjVMXnFdQQlplTZD%2Br60MRPg94p35Gn4jergXTD0nUQxuEy8fbxqwCBJPu%2FU1gWv%2FRQOYAw%2F3aeuWj%2FHpQpib8rU6ujXb5r%2FkKOsRKkdi5VQgrAYD0fny14vGJ81gYE4TP%2Bk9a9ntQiUkgUaIuC1GDDzia2%2FBjqkAbZid%2Fb15z%2BbU9StLPsJuUugYWw%2FpJ%2FXBwbIkPQ9s3aVkaPeN5WUgM7fnbFxbKHgE95VASjnTPkpQjXKr%2BKit%2BpDAbbdbLIbbM%2BUdgbSDcvj55WGCmE1KtCTHqpQ4iuy4M9k59yhuA3FMIvNE0%2BA9vArGRARYeu5zXG6xgTf3667rSgPyUFeXJi7q5iTa4C8o%2FhD1w8zhOvDGkSkCR9ioDRsHACH&X-Amz-Signature=3356d2441f357d38645b98eb2f6cb6da9d1bf4706d1d249db21c8cf832169980&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PYXLFG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCIqIqplUmCE%2BvXYqHJCbHJLVCt1DlaowWEJE4Un%2Fk%2FygIhAOSCrunzuDwSaSbvHMhwZDZNbtRSPkepF7ArOGT7oE9qKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdjrpzsu2H0fpdgSAq3AMs7hLHbKJJdz41OI2GpZnlKUraaPMTVJgS92hOSH4EPZSfkrseQ4zflzcGwoA5aiR5sh3V3d%2BpvGKDtYnf66GZsl1bL4yTABZFF90GS3YkRBNaQLmj9maw6m0mLS3CQwAX9nPGWEn4ILgwsDMhOMrYOjea2Ek1DN0t%2F3SRke1fpwiFihUTBM9bHlzkUhbn6qRHavASujZPBfyS%2BoPN26kXf%2FOd7b%2F7id1Oa5f5pwqX2xo0RubIKZtw38UlsHJlSnsCRZxlUtKIp296fOhyKfrCZfpE9ip2Q0FZVuPkYiO8FQZ%2BqVKZQ01gti1btx4JmaO7zJx6FohEAQM%2Fe%2Fq0cDWcNoCuItlb5%2FMUEjUkV1PrGhP12sDD9vITTOZgr%2FF%2BDiN0AWEMXk3ZT%2FSXW1iFiO%2FGn%2BPDC0%2BNa6S72X28OqAsl9KL0QT5QMxSKgr4Wc7ZDskcIQp66Bju69wXP2sdV9lCuFVgVUkwihu2HAIvJjVMXnFdQQlplTZD%2Br60MRPg94p35Gn4jergXTD0nUQxuEy8fbxqwCBJPu%2FU1gWv%2FRQOYAw%2F3aeuWj%2FHpQpib8rU6ujXb5r%2FkKOsRKkdi5VQgrAYD0fny14vGJ81gYE4TP%2Bk9a9ntQiUkgUaIuC1GDDzia2%2FBjqkAbZid%2Fb15z%2BbU9StLPsJuUugYWw%2FpJ%2FXBwbIkPQ9s3aVkaPeN5WUgM7fnbFxbKHgE95VASjnTPkpQjXKr%2BKit%2BpDAbbdbLIbbM%2BUdgbSDcvj55WGCmE1KtCTHqpQ4iuy4M9k59yhuA3FMIvNE0%2BA9vArGRARYeu5zXG6xgTf3667rSgPyUFeXJi7q5iTa4C8o%2FhD1w8zhOvDGkSkCR9ioDRsHACH&X-Amz-Signature=25c6cee8d527c56302f55a046705b11b94e5995be5e6491bba59c9ec235e86e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PYXLFG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCIqIqplUmCE%2BvXYqHJCbHJLVCt1DlaowWEJE4Un%2Fk%2FygIhAOSCrunzuDwSaSbvHMhwZDZNbtRSPkepF7ArOGT7oE9qKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdjrpzsu2H0fpdgSAq3AMs7hLHbKJJdz41OI2GpZnlKUraaPMTVJgS92hOSH4EPZSfkrseQ4zflzcGwoA5aiR5sh3V3d%2BpvGKDtYnf66GZsl1bL4yTABZFF90GS3YkRBNaQLmj9maw6m0mLS3CQwAX9nPGWEn4ILgwsDMhOMrYOjea2Ek1DN0t%2F3SRke1fpwiFihUTBM9bHlzkUhbn6qRHavASujZPBfyS%2BoPN26kXf%2FOd7b%2F7id1Oa5f5pwqX2xo0RubIKZtw38UlsHJlSnsCRZxlUtKIp296fOhyKfrCZfpE9ip2Q0FZVuPkYiO8FQZ%2BqVKZQ01gti1btx4JmaO7zJx6FohEAQM%2Fe%2Fq0cDWcNoCuItlb5%2FMUEjUkV1PrGhP12sDD9vITTOZgr%2FF%2BDiN0AWEMXk3ZT%2FSXW1iFiO%2FGn%2BPDC0%2BNa6S72X28OqAsl9KL0QT5QMxSKgr4Wc7ZDskcIQp66Bju69wXP2sdV9lCuFVgVUkwihu2HAIvJjVMXnFdQQlplTZD%2Br60MRPg94p35Gn4jergXTD0nUQxuEy8fbxqwCBJPu%2FU1gWv%2FRQOYAw%2F3aeuWj%2FHpQpib8rU6ujXb5r%2FkKOsRKkdi5VQgrAYD0fny14vGJ81gYE4TP%2Bk9a9ntQiUkgUaIuC1GDDzia2%2FBjqkAbZid%2Fb15z%2BbU9StLPsJuUugYWw%2FpJ%2FXBwbIkPQ9s3aVkaPeN5WUgM7fnbFxbKHgE95VASjnTPkpQjXKr%2BKit%2BpDAbbdbLIbbM%2BUdgbSDcvj55WGCmE1KtCTHqpQ4iuy4M9k59yhuA3FMIvNE0%2BA9vArGRARYeu5zXG6xgTf3667rSgPyUFeXJi7q5iTa4C8o%2FhD1w8zhOvDGkSkCR9ioDRsHACH&X-Amz-Signature=6927bc7583a1ce38dd84f5e4c2e4641a5b58bbe1cd2b2accd65e2348c925fc4e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
