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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2RWBTV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDypyLqXSqOhv9WSDetQaNuE0v4EXOeLn6AL8VkGbn2dAiEA%2B2vhGovXsfdkvWrIfiw6scDIHrIf5Bzc%2FZkq2J3Op5YqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAITExGe2%2BGvbIk0nircAyJzbH9Wie0cFNiuTl1HFXA%2FrreaiRbjBdnzraiGrY1jIYDROsJxXLB28%2B6IGhpWo1qTKRjbDuUiL6H%2FBgRSmJuN%2BUCsqC%2BkCitPGZJuN%2FCzMxAR0X0zmW8puV5fkA587M%2F%2BgKzmNpytRpGCQLNc6Fz8jC68qTuhotfby8dZXA%2Bp9EpEnUd6HkUX9lNu%2B%2BD1DrMnwuwqQv%2FmgDkRm%2FXVMCe8YWt05waiqWK8T1ZYUYEAktRHG7mJJiVLFqgOS1s8BWfi1IqaGC0yoZEd7iHE6uY8t0%2BowRxq7dMLtsJ34dM6v2UWgy%2BpKsBCq99dNJT9O9lRFoXA21fvnte26eIkD%2F8V9LICzIsXvS4cFsQRtuRYVlywP1OsIvI6GZtRyrEvgP%2BImHrpu9KkzYG5RCIwKH71q9G55yqRL2ZUe7qJ3v8QzSUa2dNygBP57gzyoQFFr8V5NdrCCKwCFJoqIp7xWqBxOPxU0oKZlT6HGxjGgY5hMmNeK7lHTkoln2eGQWfEMroxlEsX%2Bc1WjwhcbRdRy3lH82TfysS3CEqcscjWHVHaiXJ2iB2A1wYBr%2FQbnGnzz7sgwlOwUqWyLT%2BaxrpBVo2itkfMoTZcFojo5jsl9xj8FMCtmHhOBE0vekC6MIjQv8MGOqUBXWIK%2B0IG0pKrxdzQB9vAoqCx1ceAXV8jKZyVIfQj3%2FQQ4XoSfE21XX9tF5dnkF5H94wNKy50KScaLxH69cIy5gSuIWrj9%2BSTXn9giKj8k%2Fhxu0n0W3GUXe7EGsMtucinPqBRfp2qnExW8A8tzdw2tpemuXZ0ffOOJBqVYniSS40XhY1R2LValA23GC2MCv8bpj0UKlqpXZOw9Ppn9os1OUDRpNcE&X-Amz-Signature=22d63fea533d5b7f0ed3f4155c71fb98c998baed53a8b3d1bfb646d2e62288c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2RWBTV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDypyLqXSqOhv9WSDetQaNuE0v4EXOeLn6AL8VkGbn2dAiEA%2B2vhGovXsfdkvWrIfiw6scDIHrIf5Bzc%2FZkq2J3Op5YqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAITExGe2%2BGvbIk0nircAyJzbH9Wie0cFNiuTl1HFXA%2FrreaiRbjBdnzraiGrY1jIYDROsJxXLB28%2B6IGhpWo1qTKRjbDuUiL6H%2FBgRSmJuN%2BUCsqC%2BkCitPGZJuN%2FCzMxAR0X0zmW8puV5fkA587M%2F%2BgKzmNpytRpGCQLNc6Fz8jC68qTuhotfby8dZXA%2Bp9EpEnUd6HkUX9lNu%2B%2BD1DrMnwuwqQv%2FmgDkRm%2FXVMCe8YWt05waiqWK8T1ZYUYEAktRHG7mJJiVLFqgOS1s8BWfi1IqaGC0yoZEd7iHE6uY8t0%2BowRxq7dMLtsJ34dM6v2UWgy%2BpKsBCq99dNJT9O9lRFoXA21fvnte26eIkD%2F8V9LICzIsXvS4cFsQRtuRYVlywP1OsIvI6GZtRyrEvgP%2BImHrpu9KkzYG5RCIwKH71q9G55yqRL2ZUe7qJ3v8QzSUa2dNygBP57gzyoQFFr8V5NdrCCKwCFJoqIp7xWqBxOPxU0oKZlT6HGxjGgY5hMmNeK7lHTkoln2eGQWfEMroxlEsX%2Bc1WjwhcbRdRy3lH82TfysS3CEqcscjWHVHaiXJ2iB2A1wYBr%2FQbnGnzz7sgwlOwUqWyLT%2BaxrpBVo2itkfMoTZcFojo5jsl9xj8FMCtmHhOBE0vekC6MIjQv8MGOqUBXWIK%2B0IG0pKrxdzQB9vAoqCx1ceAXV8jKZyVIfQj3%2FQQ4XoSfE21XX9tF5dnkF5H94wNKy50KScaLxH69cIy5gSuIWrj9%2BSTXn9giKj8k%2Fhxu0n0W3GUXe7EGsMtucinPqBRfp2qnExW8A8tzdw2tpemuXZ0ffOOJBqVYniSS40XhY1R2LValA23GC2MCv8bpj0UKlqpXZOw9Ppn9os1OUDRpNcE&X-Amz-Signature=43ff3c224ad9a6449c1ac6dad348aba8ffd7c56b44768bf99b720f9762471ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2RWBTV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDypyLqXSqOhv9WSDetQaNuE0v4EXOeLn6AL8VkGbn2dAiEA%2B2vhGovXsfdkvWrIfiw6scDIHrIf5Bzc%2FZkq2J3Op5YqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAITExGe2%2BGvbIk0nircAyJzbH9Wie0cFNiuTl1HFXA%2FrreaiRbjBdnzraiGrY1jIYDROsJxXLB28%2B6IGhpWo1qTKRjbDuUiL6H%2FBgRSmJuN%2BUCsqC%2BkCitPGZJuN%2FCzMxAR0X0zmW8puV5fkA587M%2F%2BgKzmNpytRpGCQLNc6Fz8jC68qTuhotfby8dZXA%2Bp9EpEnUd6HkUX9lNu%2B%2BD1DrMnwuwqQv%2FmgDkRm%2FXVMCe8YWt05waiqWK8T1ZYUYEAktRHG7mJJiVLFqgOS1s8BWfi1IqaGC0yoZEd7iHE6uY8t0%2BowRxq7dMLtsJ34dM6v2UWgy%2BpKsBCq99dNJT9O9lRFoXA21fvnte26eIkD%2F8V9LICzIsXvS4cFsQRtuRYVlywP1OsIvI6GZtRyrEvgP%2BImHrpu9KkzYG5RCIwKH71q9G55yqRL2ZUe7qJ3v8QzSUa2dNygBP57gzyoQFFr8V5NdrCCKwCFJoqIp7xWqBxOPxU0oKZlT6HGxjGgY5hMmNeK7lHTkoln2eGQWfEMroxlEsX%2Bc1WjwhcbRdRy3lH82TfysS3CEqcscjWHVHaiXJ2iB2A1wYBr%2FQbnGnzz7sgwlOwUqWyLT%2BaxrpBVo2itkfMoTZcFojo5jsl9xj8FMCtmHhOBE0vekC6MIjQv8MGOqUBXWIK%2B0IG0pKrxdzQB9vAoqCx1ceAXV8jKZyVIfQj3%2FQQ4XoSfE21XX9tF5dnkF5H94wNKy50KScaLxH69cIy5gSuIWrj9%2BSTXn9giKj8k%2Fhxu0n0W3GUXe7EGsMtucinPqBRfp2qnExW8A8tzdw2tpemuXZ0ffOOJBqVYniSS40XhY1R2LValA23GC2MCv8bpj0UKlqpXZOw9Ppn9os1OUDRpNcE&X-Amz-Signature=b9f26200bf1cbbcb3df7856a5126c3b2f53b3398a46352ec734cbdea5ad63c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2RWBTV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDypyLqXSqOhv9WSDetQaNuE0v4EXOeLn6AL8VkGbn2dAiEA%2B2vhGovXsfdkvWrIfiw6scDIHrIf5Bzc%2FZkq2J3Op5YqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAITExGe2%2BGvbIk0nircAyJzbH9Wie0cFNiuTl1HFXA%2FrreaiRbjBdnzraiGrY1jIYDROsJxXLB28%2B6IGhpWo1qTKRjbDuUiL6H%2FBgRSmJuN%2BUCsqC%2BkCitPGZJuN%2FCzMxAR0X0zmW8puV5fkA587M%2F%2BgKzmNpytRpGCQLNc6Fz8jC68qTuhotfby8dZXA%2Bp9EpEnUd6HkUX9lNu%2B%2BD1DrMnwuwqQv%2FmgDkRm%2FXVMCe8YWt05waiqWK8T1ZYUYEAktRHG7mJJiVLFqgOS1s8BWfi1IqaGC0yoZEd7iHE6uY8t0%2BowRxq7dMLtsJ34dM6v2UWgy%2BpKsBCq99dNJT9O9lRFoXA21fvnte26eIkD%2F8V9LICzIsXvS4cFsQRtuRYVlywP1OsIvI6GZtRyrEvgP%2BImHrpu9KkzYG5RCIwKH71q9G55yqRL2ZUe7qJ3v8QzSUa2dNygBP57gzyoQFFr8V5NdrCCKwCFJoqIp7xWqBxOPxU0oKZlT6HGxjGgY5hMmNeK7lHTkoln2eGQWfEMroxlEsX%2Bc1WjwhcbRdRy3lH82TfysS3CEqcscjWHVHaiXJ2iB2A1wYBr%2FQbnGnzz7sgwlOwUqWyLT%2BaxrpBVo2itkfMoTZcFojo5jsl9xj8FMCtmHhOBE0vekC6MIjQv8MGOqUBXWIK%2B0IG0pKrxdzQB9vAoqCx1ceAXV8jKZyVIfQj3%2FQQ4XoSfE21XX9tF5dnkF5H94wNKy50KScaLxH69cIy5gSuIWrj9%2BSTXn9giKj8k%2Fhxu0n0W3GUXe7EGsMtucinPqBRfp2qnExW8A8tzdw2tpemuXZ0ffOOJBqVYniSS40XhY1R2LValA23GC2MCv8bpj0UKlqpXZOw9Ppn9os1OUDRpNcE&X-Amz-Signature=844ba6fc289bb2664df2b4095b6b731d712e548a05ddd2e048b0786ef301e938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2RWBTV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDypyLqXSqOhv9WSDetQaNuE0v4EXOeLn6AL8VkGbn2dAiEA%2B2vhGovXsfdkvWrIfiw6scDIHrIf5Bzc%2FZkq2J3Op5YqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAITExGe2%2BGvbIk0nircAyJzbH9Wie0cFNiuTl1HFXA%2FrreaiRbjBdnzraiGrY1jIYDROsJxXLB28%2B6IGhpWo1qTKRjbDuUiL6H%2FBgRSmJuN%2BUCsqC%2BkCitPGZJuN%2FCzMxAR0X0zmW8puV5fkA587M%2F%2BgKzmNpytRpGCQLNc6Fz8jC68qTuhotfby8dZXA%2Bp9EpEnUd6HkUX9lNu%2B%2BD1DrMnwuwqQv%2FmgDkRm%2FXVMCe8YWt05waiqWK8T1ZYUYEAktRHG7mJJiVLFqgOS1s8BWfi1IqaGC0yoZEd7iHE6uY8t0%2BowRxq7dMLtsJ34dM6v2UWgy%2BpKsBCq99dNJT9O9lRFoXA21fvnte26eIkD%2F8V9LICzIsXvS4cFsQRtuRYVlywP1OsIvI6GZtRyrEvgP%2BImHrpu9KkzYG5RCIwKH71q9G55yqRL2ZUe7qJ3v8QzSUa2dNygBP57gzyoQFFr8V5NdrCCKwCFJoqIp7xWqBxOPxU0oKZlT6HGxjGgY5hMmNeK7lHTkoln2eGQWfEMroxlEsX%2Bc1WjwhcbRdRy3lH82TfysS3CEqcscjWHVHaiXJ2iB2A1wYBr%2FQbnGnzz7sgwlOwUqWyLT%2BaxrpBVo2itkfMoTZcFojo5jsl9xj8FMCtmHhOBE0vekC6MIjQv8MGOqUBXWIK%2B0IG0pKrxdzQB9vAoqCx1ceAXV8jKZyVIfQj3%2FQQ4XoSfE21XX9tF5dnkF5H94wNKy50KScaLxH69cIy5gSuIWrj9%2BSTXn9giKj8k%2Fhxu0n0W3GUXe7EGsMtucinPqBRfp2qnExW8A8tzdw2tpemuXZ0ffOOJBqVYniSS40XhY1R2LValA23GC2MCv8bpj0UKlqpXZOw9Ppn9os1OUDRpNcE&X-Amz-Signature=0776f1d2178fa574295a8c214ec110a3be35fabe24af434dd352d9f57fc833c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
