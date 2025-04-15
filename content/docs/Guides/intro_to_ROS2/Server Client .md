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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3YILEP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFlIOMr0ncBkOgN5bl%2B7%2FiQGdgxIggVpucA36IVimxQIhAK2ilXEqmtqF3ogyh%2FFeCx%2BOMud6UKcuD2t7u%2BLx2Xd%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwMkrYQ%2BjRwDoxYtlkq3AO5ROh%2Fm%2B5SbZdix2zRKIoXHTSgMSU93YS3rKMg1yAo7gjoeqEPdeZ2mLqs2llJ30leYi9ONbjocc%2FKe%2BYkWrJa6pKuersWvawOH1ZGm%2Fe6M2RzZ4Yt3aLFMdFuFa2u9N6qnrtu7R%2FlTJgv2lKFC9FcFbaRD7%2B9ZykMoICHju3gBGJd2MVGwV7N7hqOeNo0tI6ifLaFv1%2BVKsAaqWscKc%2BhjppIeStIwJU7KrJt2Gmybz20SnBXHMa6RR9J49OyVQF54umcMmBaLn8Gb7vYGfGDjB%2F0hfZKDyCsKuqM8sHVemPTNIFjIF9CVbstsNugVOItGFenBreqgGwu7t8T%2B8jMMeGGD%2Be5vW7%2BR%2F5nQK1gsFjyrE3egW%2Brn%2BlYpKrHYxnlgUdKHAAn2pPp4X7xk268TK1UWTEH5Deni9pqlDdbmgnBXSlo5QtjSuwbtUBGL0356Utt71VQeFVfbcdLpcvGBTMWfsEawJRY8oKBRiGD1q8G4lKiVOpMLrv7tInFJjnJKM%2BomyBawEqBVbtTIzjJgpgNJHNKaV1CyYZqwvZw4nGpL%2BGcDgwhPK0j64DJMum1aQe%2BEMZyOTqsJxyiAKz4PBYbuKTQ8z6jrDZBCqSCBIjPq8hdxe9BqAzLFTCt0Pe%2FBjqkAYPD%2FEfjpFP4SOW9dSiEk6JJFsD%2Bl9V%2BKgn3pUppH%2FnSJNs4kSDiOsMbWQ%2FFGMBkIf0B518bqjlEs%2BJQUHpJB1DOeYdodHNCdC00u2OMEkmNC53v4IyMFmj9JwxZvwY7F63%2FG8aE1zLsyWWoWAbqG9ldRjmb2h9jDJxoYpuzC0kNQK5vXuHawxGks%2Bu72abXYTgsfjDcj40nkxD8y2OWma60tW9N&X-Amz-Signature=8ab02e3ead7cb6bace7c12ea0e9810044d7ee971f1f510efaec7d0c4d1638557&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3YILEP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFlIOMr0ncBkOgN5bl%2B7%2FiQGdgxIggVpucA36IVimxQIhAK2ilXEqmtqF3ogyh%2FFeCx%2BOMud6UKcuD2t7u%2BLx2Xd%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwMkrYQ%2BjRwDoxYtlkq3AO5ROh%2Fm%2B5SbZdix2zRKIoXHTSgMSU93YS3rKMg1yAo7gjoeqEPdeZ2mLqs2llJ30leYi9ONbjocc%2FKe%2BYkWrJa6pKuersWvawOH1ZGm%2Fe6M2RzZ4Yt3aLFMdFuFa2u9N6qnrtu7R%2FlTJgv2lKFC9FcFbaRD7%2B9ZykMoICHju3gBGJd2MVGwV7N7hqOeNo0tI6ifLaFv1%2BVKsAaqWscKc%2BhjppIeStIwJU7KrJt2Gmybz20SnBXHMa6RR9J49OyVQF54umcMmBaLn8Gb7vYGfGDjB%2F0hfZKDyCsKuqM8sHVemPTNIFjIF9CVbstsNugVOItGFenBreqgGwu7t8T%2B8jMMeGGD%2Be5vW7%2BR%2F5nQK1gsFjyrE3egW%2Brn%2BlYpKrHYxnlgUdKHAAn2pPp4X7xk268TK1UWTEH5Deni9pqlDdbmgnBXSlo5QtjSuwbtUBGL0356Utt71VQeFVfbcdLpcvGBTMWfsEawJRY8oKBRiGD1q8G4lKiVOpMLrv7tInFJjnJKM%2BomyBawEqBVbtTIzjJgpgNJHNKaV1CyYZqwvZw4nGpL%2BGcDgwhPK0j64DJMum1aQe%2BEMZyOTqsJxyiAKz4PBYbuKTQ8z6jrDZBCqSCBIjPq8hdxe9BqAzLFTCt0Pe%2FBjqkAYPD%2FEfjpFP4SOW9dSiEk6JJFsD%2Bl9V%2BKgn3pUppH%2FnSJNs4kSDiOsMbWQ%2FFGMBkIf0B518bqjlEs%2BJQUHpJB1DOeYdodHNCdC00u2OMEkmNC53v4IyMFmj9JwxZvwY7F63%2FG8aE1zLsyWWoWAbqG9ldRjmb2h9jDJxoYpuzC0kNQK5vXuHawxGks%2Bu72abXYTgsfjDcj40nkxD8y2OWma60tW9N&X-Amz-Signature=01e6aa643f7903c8fdc4dfe5f014a8286fa47eeed83200c78f6b8b3793d4e10d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3YILEP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFlIOMr0ncBkOgN5bl%2B7%2FiQGdgxIggVpucA36IVimxQIhAK2ilXEqmtqF3ogyh%2FFeCx%2BOMud6UKcuD2t7u%2BLx2Xd%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwMkrYQ%2BjRwDoxYtlkq3AO5ROh%2Fm%2B5SbZdix2zRKIoXHTSgMSU93YS3rKMg1yAo7gjoeqEPdeZ2mLqs2llJ30leYi9ONbjocc%2FKe%2BYkWrJa6pKuersWvawOH1ZGm%2Fe6M2RzZ4Yt3aLFMdFuFa2u9N6qnrtu7R%2FlTJgv2lKFC9FcFbaRD7%2B9ZykMoICHju3gBGJd2MVGwV7N7hqOeNo0tI6ifLaFv1%2BVKsAaqWscKc%2BhjppIeStIwJU7KrJt2Gmybz20SnBXHMa6RR9J49OyVQF54umcMmBaLn8Gb7vYGfGDjB%2F0hfZKDyCsKuqM8sHVemPTNIFjIF9CVbstsNugVOItGFenBreqgGwu7t8T%2B8jMMeGGD%2Be5vW7%2BR%2F5nQK1gsFjyrE3egW%2Brn%2BlYpKrHYxnlgUdKHAAn2pPp4X7xk268TK1UWTEH5Deni9pqlDdbmgnBXSlo5QtjSuwbtUBGL0356Utt71VQeFVfbcdLpcvGBTMWfsEawJRY8oKBRiGD1q8G4lKiVOpMLrv7tInFJjnJKM%2BomyBawEqBVbtTIzjJgpgNJHNKaV1CyYZqwvZw4nGpL%2BGcDgwhPK0j64DJMum1aQe%2BEMZyOTqsJxyiAKz4PBYbuKTQ8z6jrDZBCqSCBIjPq8hdxe9BqAzLFTCt0Pe%2FBjqkAYPD%2FEfjpFP4SOW9dSiEk6JJFsD%2Bl9V%2BKgn3pUppH%2FnSJNs4kSDiOsMbWQ%2FFGMBkIf0B518bqjlEs%2BJQUHpJB1DOeYdodHNCdC00u2OMEkmNC53v4IyMFmj9JwxZvwY7F63%2FG8aE1zLsyWWoWAbqG9ldRjmb2h9jDJxoYpuzC0kNQK5vXuHawxGks%2Bu72abXYTgsfjDcj40nkxD8y2OWma60tW9N&X-Amz-Signature=49d8f546fa13d5159440c909e043e7205d3492374b62a1a30188eaf06c2a7de4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3YILEP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFlIOMr0ncBkOgN5bl%2B7%2FiQGdgxIggVpucA36IVimxQIhAK2ilXEqmtqF3ogyh%2FFeCx%2BOMud6UKcuD2t7u%2BLx2Xd%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwMkrYQ%2BjRwDoxYtlkq3AO5ROh%2Fm%2B5SbZdix2zRKIoXHTSgMSU93YS3rKMg1yAo7gjoeqEPdeZ2mLqs2llJ30leYi9ONbjocc%2FKe%2BYkWrJa6pKuersWvawOH1ZGm%2Fe6M2RzZ4Yt3aLFMdFuFa2u9N6qnrtu7R%2FlTJgv2lKFC9FcFbaRD7%2B9ZykMoICHju3gBGJd2MVGwV7N7hqOeNo0tI6ifLaFv1%2BVKsAaqWscKc%2BhjppIeStIwJU7KrJt2Gmybz20SnBXHMa6RR9J49OyVQF54umcMmBaLn8Gb7vYGfGDjB%2F0hfZKDyCsKuqM8sHVemPTNIFjIF9CVbstsNugVOItGFenBreqgGwu7t8T%2B8jMMeGGD%2Be5vW7%2BR%2F5nQK1gsFjyrE3egW%2Brn%2BlYpKrHYxnlgUdKHAAn2pPp4X7xk268TK1UWTEH5Deni9pqlDdbmgnBXSlo5QtjSuwbtUBGL0356Utt71VQeFVfbcdLpcvGBTMWfsEawJRY8oKBRiGD1q8G4lKiVOpMLrv7tInFJjnJKM%2BomyBawEqBVbtTIzjJgpgNJHNKaV1CyYZqwvZw4nGpL%2BGcDgwhPK0j64DJMum1aQe%2BEMZyOTqsJxyiAKz4PBYbuKTQ8z6jrDZBCqSCBIjPq8hdxe9BqAzLFTCt0Pe%2FBjqkAYPD%2FEfjpFP4SOW9dSiEk6JJFsD%2Bl9V%2BKgn3pUppH%2FnSJNs4kSDiOsMbWQ%2FFGMBkIf0B518bqjlEs%2BJQUHpJB1DOeYdodHNCdC00u2OMEkmNC53v4IyMFmj9JwxZvwY7F63%2FG8aE1zLsyWWoWAbqG9ldRjmb2h9jDJxoYpuzC0kNQK5vXuHawxGks%2Bu72abXYTgsfjDcj40nkxD8y2OWma60tW9N&X-Amz-Signature=5509b536674edc9a5db01d0ee6e81338e2fc6a96e6738b97526148cd588490b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3YILEP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFlIOMr0ncBkOgN5bl%2B7%2FiQGdgxIggVpucA36IVimxQIhAK2ilXEqmtqF3ogyh%2FFeCx%2BOMud6UKcuD2t7u%2BLx2Xd%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwMkrYQ%2BjRwDoxYtlkq3AO5ROh%2Fm%2B5SbZdix2zRKIoXHTSgMSU93YS3rKMg1yAo7gjoeqEPdeZ2mLqs2llJ30leYi9ONbjocc%2FKe%2BYkWrJa6pKuersWvawOH1ZGm%2Fe6M2RzZ4Yt3aLFMdFuFa2u9N6qnrtu7R%2FlTJgv2lKFC9FcFbaRD7%2B9ZykMoICHju3gBGJd2MVGwV7N7hqOeNo0tI6ifLaFv1%2BVKsAaqWscKc%2BhjppIeStIwJU7KrJt2Gmybz20SnBXHMa6RR9J49OyVQF54umcMmBaLn8Gb7vYGfGDjB%2F0hfZKDyCsKuqM8sHVemPTNIFjIF9CVbstsNugVOItGFenBreqgGwu7t8T%2B8jMMeGGD%2Be5vW7%2BR%2F5nQK1gsFjyrE3egW%2Brn%2BlYpKrHYxnlgUdKHAAn2pPp4X7xk268TK1UWTEH5Deni9pqlDdbmgnBXSlo5QtjSuwbtUBGL0356Utt71VQeFVfbcdLpcvGBTMWfsEawJRY8oKBRiGD1q8G4lKiVOpMLrv7tInFJjnJKM%2BomyBawEqBVbtTIzjJgpgNJHNKaV1CyYZqwvZw4nGpL%2BGcDgwhPK0j64DJMum1aQe%2BEMZyOTqsJxyiAKz4PBYbuKTQ8z6jrDZBCqSCBIjPq8hdxe9BqAzLFTCt0Pe%2FBjqkAYPD%2FEfjpFP4SOW9dSiEk6JJFsD%2Bl9V%2BKgn3pUppH%2FnSJNs4kSDiOsMbWQ%2FFGMBkIf0B518bqjlEs%2BJQUHpJB1DOeYdodHNCdC00u2OMEkmNC53v4IyMFmj9JwxZvwY7F63%2FG8aE1zLsyWWoWAbqG9ldRjmb2h9jDJxoYpuzC0kNQK5vXuHawxGks%2Bu72abXYTgsfjDcj40nkxD8y2OWma60tW9N&X-Amz-Signature=acec7fdf92c9932d8aa13c61b055c2ef0e3865b2cc275250f50cdbafb56535de&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
