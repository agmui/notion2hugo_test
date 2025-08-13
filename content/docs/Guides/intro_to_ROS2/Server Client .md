---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQEYEAQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiuABuEWLmZ%2BCZN1SctKw9WGkNgJQP7wbwh8oGdyB04QIgXaroJEDcEP8jL1%2Fo0CKAL%2FSXQLXyS5Rndq%2FrbrNFqgYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMwUHjzhVMum50HIIircA1vBN1fiHdSJJCl0AjU10GxDUEliDaGkjACBcxRJNjQ2zHIN1GPednuuxakA7ZqEM9UP5bsjALaNzd4tJ%2BK9rFt1e0xpJ2pXNdE2ewlhTkd8EkGwK9NGkQxg0Wp4S5PyOXof8Tn9I75f32zCIlcfajjRRQore%2FQ7F5ZV1jBiQuVYxLC08XEpBOjpC0GNNyKc26D6mZmz7H1KnQwoABp9QCHUbXdK9TGaNR0Ck6%2F56%2F7dpaCbOU5GMbg5%2BrUFZ4voTX5c5Tx4TnRDADm3DbLiCtWuDg4YIPFW9zHFOc3GnTBjDvlQO6fTKEGLXqrCWzPChv5G2gMvKu7ZA54nM7PKnmu4Unqkmrk2wwHYVsvNYXMg9TW4%2Buy6DvoqFhfefK0QZ2sBunagNjBHw28C%2FjTl9MHeDMAiMYyeoXK6pD%2BkwH6p906Fosyisxi4efqay7FudMxw3zZpnXNOIaJH7lKk8gBD21rq4iJ3sNiYM4R1vy0l8VinRTElzTCQqEL5qrZrtnO3qxJDEepqmlmOA0I2o3ZOupMsQ%2FFpWmSUBYDQE1tMF2F0DVzY2pCqxc6FX424eIO4Y4UanL40AVu6gdMqufSv8DkA3k%2Bqb%2FzNkIqA0sC%2BVYax3s6y41RO5BWAMIye8cQGOqUBHiEiupE5CfWiclN7B32T%2BY75n5%2B2RDyNXc5Qh1HVCwrq%2F%2BVnYZBi5NGZ8iJgGTtLyBF6160TO%2B%2BZNi1D9R8lFlhYoKsxK6thkSeCJtPlHWljUoi8ryfYoIPRtvAngAz0PPsQQY5qYFZpF34awvsfAvb0zssBiowgaQ%2BqcyN3bG7sMkX2ZSOpOUW2i%2Fr%2Ba1Mug45wpTReTxFhBrGIDoVvEdYaZlms&X-Amz-Signature=48d6c6f33a22931b77739193087d73a4abe213e8cdb393c70f3276c54b5ca72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQEYEAQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiuABuEWLmZ%2BCZN1SctKw9WGkNgJQP7wbwh8oGdyB04QIgXaroJEDcEP8jL1%2Fo0CKAL%2FSXQLXyS5Rndq%2FrbrNFqgYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMwUHjzhVMum50HIIircA1vBN1fiHdSJJCl0AjU10GxDUEliDaGkjACBcxRJNjQ2zHIN1GPednuuxakA7ZqEM9UP5bsjALaNzd4tJ%2BK9rFt1e0xpJ2pXNdE2ewlhTkd8EkGwK9NGkQxg0Wp4S5PyOXof8Tn9I75f32zCIlcfajjRRQore%2FQ7F5ZV1jBiQuVYxLC08XEpBOjpC0GNNyKc26D6mZmz7H1KnQwoABp9QCHUbXdK9TGaNR0Ck6%2F56%2F7dpaCbOU5GMbg5%2BrUFZ4voTX5c5Tx4TnRDADm3DbLiCtWuDg4YIPFW9zHFOc3GnTBjDvlQO6fTKEGLXqrCWzPChv5G2gMvKu7ZA54nM7PKnmu4Unqkmrk2wwHYVsvNYXMg9TW4%2Buy6DvoqFhfefK0QZ2sBunagNjBHw28C%2FjTl9MHeDMAiMYyeoXK6pD%2BkwH6p906Fosyisxi4efqay7FudMxw3zZpnXNOIaJH7lKk8gBD21rq4iJ3sNiYM4R1vy0l8VinRTElzTCQqEL5qrZrtnO3qxJDEepqmlmOA0I2o3ZOupMsQ%2FFpWmSUBYDQE1tMF2F0DVzY2pCqxc6FX424eIO4Y4UanL40AVu6gdMqufSv8DkA3k%2Bqb%2FzNkIqA0sC%2BVYax3s6y41RO5BWAMIye8cQGOqUBHiEiupE5CfWiclN7B32T%2BY75n5%2B2RDyNXc5Qh1HVCwrq%2F%2BVnYZBi5NGZ8iJgGTtLyBF6160TO%2B%2BZNi1D9R8lFlhYoKsxK6thkSeCJtPlHWljUoi8ryfYoIPRtvAngAz0PPsQQY5qYFZpF34awvsfAvb0zssBiowgaQ%2BqcyN3bG7sMkX2ZSOpOUW2i%2Fr%2Ba1Mug45wpTReTxFhBrGIDoVvEdYaZlms&X-Amz-Signature=2f12165417902a1c6745f6d1b94b422aa77b59414cb8f664933dbf4deb83d3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQEYEAQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiuABuEWLmZ%2BCZN1SctKw9WGkNgJQP7wbwh8oGdyB04QIgXaroJEDcEP8jL1%2Fo0CKAL%2FSXQLXyS5Rndq%2FrbrNFqgYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMwUHjzhVMum50HIIircA1vBN1fiHdSJJCl0AjU10GxDUEliDaGkjACBcxRJNjQ2zHIN1GPednuuxakA7ZqEM9UP5bsjALaNzd4tJ%2BK9rFt1e0xpJ2pXNdE2ewlhTkd8EkGwK9NGkQxg0Wp4S5PyOXof8Tn9I75f32zCIlcfajjRRQore%2FQ7F5ZV1jBiQuVYxLC08XEpBOjpC0GNNyKc26D6mZmz7H1KnQwoABp9QCHUbXdK9TGaNR0Ck6%2F56%2F7dpaCbOU5GMbg5%2BrUFZ4voTX5c5Tx4TnRDADm3DbLiCtWuDg4YIPFW9zHFOc3GnTBjDvlQO6fTKEGLXqrCWzPChv5G2gMvKu7ZA54nM7PKnmu4Unqkmrk2wwHYVsvNYXMg9TW4%2Buy6DvoqFhfefK0QZ2sBunagNjBHw28C%2FjTl9MHeDMAiMYyeoXK6pD%2BkwH6p906Fosyisxi4efqay7FudMxw3zZpnXNOIaJH7lKk8gBD21rq4iJ3sNiYM4R1vy0l8VinRTElzTCQqEL5qrZrtnO3qxJDEepqmlmOA0I2o3ZOupMsQ%2FFpWmSUBYDQE1tMF2F0DVzY2pCqxc6FX424eIO4Y4UanL40AVu6gdMqufSv8DkA3k%2Bqb%2FzNkIqA0sC%2BVYax3s6y41RO5BWAMIye8cQGOqUBHiEiupE5CfWiclN7B32T%2BY75n5%2B2RDyNXc5Qh1HVCwrq%2F%2BVnYZBi5NGZ8iJgGTtLyBF6160TO%2B%2BZNi1D9R8lFlhYoKsxK6thkSeCJtPlHWljUoi8ryfYoIPRtvAngAz0PPsQQY5qYFZpF34awvsfAvb0zssBiowgaQ%2BqcyN3bG7sMkX2ZSOpOUW2i%2Fr%2Ba1Mug45wpTReTxFhBrGIDoVvEdYaZlms&X-Amz-Signature=6954d32172ff3ed25a17cd859000714338b774d347b2cdb6b57159ccab22e37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQEYEAQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiuABuEWLmZ%2BCZN1SctKw9WGkNgJQP7wbwh8oGdyB04QIgXaroJEDcEP8jL1%2Fo0CKAL%2FSXQLXyS5Rndq%2FrbrNFqgYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMwUHjzhVMum50HIIircA1vBN1fiHdSJJCl0AjU10GxDUEliDaGkjACBcxRJNjQ2zHIN1GPednuuxakA7ZqEM9UP5bsjALaNzd4tJ%2BK9rFt1e0xpJ2pXNdE2ewlhTkd8EkGwK9NGkQxg0Wp4S5PyOXof8Tn9I75f32zCIlcfajjRRQore%2FQ7F5ZV1jBiQuVYxLC08XEpBOjpC0GNNyKc26D6mZmz7H1KnQwoABp9QCHUbXdK9TGaNR0Ck6%2F56%2F7dpaCbOU5GMbg5%2BrUFZ4voTX5c5Tx4TnRDADm3DbLiCtWuDg4YIPFW9zHFOc3GnTBjDvlQO6fTKEGLXqrCWzPChv5G2gMvKu7ZA54nM7PKnmu4Unqkmrk2wwHYVsvNYXMg9TW4%2Buy6DvoqFhfefK0QZ2sBunagNjBHw28C%2FjTl9MHeDMAiMYyeoXK6pD%2BkwH6p906Fosyisxi4efqay7FudMxw3zZpnXNOIaJH7lKk8gBD21rq4iJ3sNiYM4R1vy0l8VinRTElzTCQqEL5qrZrtnO3qxJDEepqmlmOA0I2o3ZOupMsQ%2FFpWmSUBYDQE1tMF2F0DVzY2pCqxc6FX424eIO4Y4UanL40AVu6gdMqufSv8DkA3k%2Bqb%2FzNkIqA0sC%2BVYax3s6y41RO5BWAMIye8cQGOqUBHiEiupE5CfWiclN7B32T%2BY75n5%2B2RDyNXc5Qh1HVCwrq%2F%2BVnYZBi5NGZ8iJgGTtLyBF6160TO%2B%2BZNi1D9R8lFlhYoKsxK6thkSeCJtPlHWljUoi8ryfYoIPRtvAngAz0PPsQQY5qYFZpF34awvsfAvb0zssBiowgaQ%2BqcyN3bG7sMkX2ZSOpOUW2i%2Fr%2Ba1Mug45wpTReTxFhBrGIDoVvEdYaZlms&X-Amz-Signature=bdd1c71a274a59b7f761eff81788b137f8d3befa9dd442c1bf92993305688833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQEYEAQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiuABuEWLmZ%2BCZN1SctKw9WGkNgJQP7wbwh8oGdyB04QIgXaroJEDcEP8jL1%2Fo0CKAL%2FSXQLXyS5Rndq%2FrbrNFqgYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMwUHjzhVMum50HIIircA1vBN1fiHdSJJCl0AjU10GxDUEliDaGkjACBcxRJNjQ2zHIN1GPednuuxakA7ZqEM9UP5bsjALaNzd4tJ%2BK9rFt1e0xpJ2pXNdE2ewlhTkd8EkGwK9NGkQxg0Wp4S5PyOXof8Tn9I75f32zCIlcfajjRRQore%2FQ7F5ZV1jBiQuVYxLC08XEpBOjpC0GNNyKc26D6mZmz7H1KnQwoABp9QCHUbXdK9TGaNR0Ck6%2F56%2F7dpaCbOU5GMbg5%2BrUFZ4voTX5c5Tx4TnRDADm3DbLiCtWuDg4YIPFW9zHFOc3GnTBjDvlQO6fTKEGLXqrCWzPChv5G2gMvKu7ZA54nM7PKnmu4Unqkmrk2wwHYVsvNYXMg9TW4%2Buy6DvoqFhfefK0QZ2sBunagNjBHw28C%2FjTl9MHeDMAiMYyeoXK6pD%2BkwH6p906Fosyisxi4efqay7FudMxw3zZpnXNOIaJH7lKk8gBD21rq4iJ3sNiYM4R1vy0l8VinRTElzTCQqEL5qrZrtnO3qxJDEepqmlmOA0I2o3ZOupMsQ%2FFpWmSUBYDQE1tMF2F0DVzY2pCqxc6FX424eIO4Y4UanL40AVu6gdMqufSv8DkA3k%2Bqb%2FzNkIqA0sC%2BVYax3s6y41RO5BWAMIye8cQGOqUBHiEiupE5CfWiclN7B32T%2BY75n5%2B2RDyNXc5Qh1HVCwrq%2F%2BVnYZBi5NGZ8iJgGTtLyBF6160TO%2B%2BZNi1D9R8lFlhYoKsxK6thkSeCJtPlHWljUoi8ryfYoIPRtvAngAz0PPsQQY5qYFZpF34awvsfAvb0zssBiowgaQ%2BqcyN3bG7sMkX2ZSOpOUW2i%2Fr%2Ba1Mug45wpTReTxFhBrGIDoVvEdYaZlms&X-Amz-Signature=b93fd6b170340e70b488e60b0eb2feede169b555e480ec22db13d7a391ff3525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
