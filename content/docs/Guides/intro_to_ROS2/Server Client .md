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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55XCWKH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtAvgVjWsvio6SVEWA%2Bh4uy%2FyJacWh6s7ZxSRGXYeDAAIhAMyoDDSdMxhIEOubTkpVVi0Cll7ZOPJgo1CiQcd8y4NuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrh3GhmgVApBpyuOIq3APtW3hLp6HBc6yDW7qw8cdKPU2D7MHXWZEKPgNaowynnwic0aZLSgPmkfBApDzihwRU3L6bMUZlJs2%2FJ64ekbU0wBN95QpTe%2F3tLO5bo1sRS%2FdHwa9UK5o8lnEhTsMWQ%2FzuY4vW7Nqh5eaaoNEl%2BqjpunfdtrlRtzVVyPq8K06cPrEZk5kAwEZqAos3O9vcL0tksQ2WnzxaW8FeuL0aVwBCJpzP2inIS2vNOL9Tm3p7OYsdSImEvuj9qXui68rRqVvxr4ht%2FC3WCltqaXTP5kMEavCNgoZKnzhYjnJaW4PeiQ5Nu1upUebWyizrdb5pFYElW1k5tZfXFNLhUDKJkqWnnHchKziv7MQbTI3pR2fR8slI%2BeRINyVg9dWCueun%2FJaMGkMGg07uvJiSBzVHpGkVjrCZuY5zWsJ02JdhghAjxNd1D17M6dVGqElCIj04KadVf%2FByCP0AkRK4BQF%2BVxz5wHuDQwWniC%2FDSCVDWPpRzH%2B%2FAnsugHnioi6B%2BFvGG9BS6juzntF49ftJ5rVkgwoKwj%2Bv4v3%2FdtE7bJesKuOd8XcJLzofqbEe2XZaTpUTdtWEkxnwgnep0VTDqmlj5u2IieoQZNsF6nhCruOC8llIUGlji6CNInLCXez7QzC%2F%2BvS8BjqkARtJSSG1DS9ZNmx4tQnlWN2rTiz51VKTJ91aUhlehwAGLQQDN4PTevuz%2FovxpVklRNxb%2BAGzBj5tW8yhb%2B%2BpWoJ3U6a4lGMt46ZH1miUl%2F1eyOnMjJdp1IooZWHYeJ1FGRN7NvPyPeAxKPtT7P1heT56xGyWeOLnbPV7WxU4DAoGiTIBGyEIY2lyzKNRsRxuUYWz00xYMc3z8G6y1IMNkUjbeuVw&X-Amz-Signature=c3ec86b2a033af4d6c774a97246924d92c35364f490b2eeda4f7e0f59172e994&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55XCWKH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtAvgVjWsvio6SVEWA%2Bh4uy%2FyJacWh6s7ZxSRGXYeDAAIhAMyoDDSdMxhIEOubTkpVVi0Cll7ZOPJgo1CiQcd8y4NuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrh3GhmgVApBpyuOIq3APtW3hLp6HBc6yDW7qw8cdKPU2D7MHXWZEKPgNaowynnwic0aZLSgPmkfBApDzihwRU3L6bMUZlJs2%2FJ64ekbU0wBN95QpTe%2F3tLO5bo1sRS%2FdHwa9UK5o8lnEhTsMWQ%2FzuY4vW7Nqh5eaaoNEl%2BqjpunfdtrlRtzVVyPq8K06cPrEZk5kAwEZqAos3O9vcL0tksQ2WnzxaW8FeuL0aVwBCJpzP2inIS2vNOL9Tm3p7OYsdSImEvuj9qXui68rRqVvxr4ht%2FC3WCltqaXTP5kMEavCNgoZKnzhYjnJaW4PeiQ5Nu1upUebWyizrdb5pFYElW1k5tZfXFNLhUDKJkqWnnHchKziv7MQbTI3pR2fR8slI%2BeRINyVg9dWCueun%2FJaMGkMGg07uvJiSBzVHpGkVjrCZuY5zWsJ02JdhghAjxNd1D17M6dVGqElCIj04KadVf%2FByCP0AkRK4BQF%2BVxz5wHuDQwWniC%2FDSCVDWPpRzH%2B%2FAnsugHnioi6B%2BFvGG9BS6juzntF49ftJ5rVkgwoKwj%2Bv4v3%2FdtE7bJesKuOd8XcJLzofqbEe2XZaTpUTdtWEkxnwgnep0VTDqmlj5u2IieoQZNsF6nhCruOC8llIUGlji6CNInLCXez7QzC%2F%2BvS8BjqkARtJSSG1DS9ZNmx4tQnlWN2rTiz51VKTJ91aUhlehwAGLQQDN4PTevuz%2FovxpVklRNxb%2BAGzBj5tW8yhb%2B%2BpWoJ3U6a4lGMt46ZH1miUl%2F1eyOnMjJdp1IooZWHYeJ1FGRN7NvPyPeAxKPtT7P1heT56xGyWeOLnbPV7WxU4DAoGiTIBGyEIY2lyzKNRsRxuUYWz00xYMc3z8G6y1IMNkUjbeuVw&X-Amz-Signature=1794472336266ff5b1636eff3b95718eef1b440c952922b86294b1d0e6fa8079&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55XCWKH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtAvgVjWsvio6SVEWA%2Bh4uy%2FyJacWh6s7ZxSRGXYeDAAIhAMyoDDSdMxhIEOubTkpVVi0Cll7ZOPJgo1CiQcd8y4NuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrh3GhmgVApBpyuOIq3APtW3hLp6HBc6yDW7qw8cdKPU2D7MHXWZEKPgNaowynnwic0aZLSgPmkfBApDzihwRU3L6bMUZlJs2%2FJ64ekbU0wBN95QpTe%2F3tLO5bo1sRS%2FdHwa9UK5o8lnEhTsMWQ%2FzuY4vW7Nqh5eaaoNEl%2BqjpunfdtrlRtzVVyPq8K06cPrEZk5kAwEZqAos3O9vcL0tksQ2WnzxaW8FeuL0aVwBCJpzP2inIS2vNOL9Tm3p7OYsdSImEvuj9qXui68rRqVvxr4ht%2FC3WCltqaXTP5kMEavCNgoZKnzhYjnJaW4PeiQ5Nu1upUebWyizrdb5pFYElW1k5tZfXFNLhUDKJkqWnnHchKziv7MQbTI3pR2fR8slI%2BeRINyVg9dWCueun%2FJaMGkMGg07uvJiSBzVHpGkVjrCZuY5zWsJ02JdhghAjxNd1D17M6dVGqElCIj04KadVf%2FByCP0AkRK4BQF%2BVxz5wHuDQwWniC%2FDSCVDWPpRzH%2B%2FAnsugHnioi6B%2BFvGG9BS6juzntF49ftJ5rVkgwoKwj%2Bv4v3%2FdtE7bJesKuOd8XcJLzofqbEe2XZaTpUTdtWEkxnwgnep0VTDqmlj5u2IieoQZNsF6nhCruOC8llIUGlji6CNInLCXez7QzC%2F%2BvS8BjqkARtJSSG1DS9ZNmx4tQnlWN2rTiz51VKTJ91aUhlehwAGLQQDN4PTevuz%2FovxpVklRNxb%2BAGzBj5tW8yhb%2B%2BpWoJ3U6a4lGMt46ZH1miUl%2F1eyOnMjJdp1IooZWHYeJ1FGRN7NvPyPeAxKPtT7P1heT56xGyWeOLnbPV7WxU4DAoGiTIBGyEIY2lyzKNRsRxuUYWz00xYMc3z8G6y1IMNkUjbeuVw&X-Amz-Signature=6973c464296d428f90435b5b041407c165f4a1b4bdf141d9d9ff5fb63b9cde97&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55XCWKH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtAvgVjWsvio6SVEWA%2Bh4uy%2FyJacWh6s7ZxSRGXYeDAAIhAMyoDDSdMxhIEOubTkpVVi0Cll7ZOPJgo1CiQcd8y4NuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrh3GhmgVApBpyuOIq3APtW3hLp6HBc6yDW7qw8cdKPU2D7MHXWZEKPgNaowynnwic0aZLSgPmkfBApDzihwRU3L6bMUZlJs2%2FJ64ekbU0wBN95QpTe%2F3tLO5bo1sRS%2FdHwa9UK5o8lnEhTsMWQ%2FzuY4vW7Nqh5eaaoNEl%2BqjpunfdtrlRtzVVyPq8K06cPrEZk5kAwEZqAos3O9vcL0tksQ2WnzxaW8FeuL0aVwBCJpzP2inIS2vNOL9Tm3p7OYsdSImEvuj9qXui68rRqVvxr4ht%2FC3WCltqaXTP5kMEavCNgoZKnzhYjnJaW4PeiQ5Nu1upUebWyizrdb5pFYElW1k5tZfXFNLhUDKJkqWnnHchKziv7MQbTI3pR2fR8slI%2BeRINyVg9dWCueun%2FJaMGkMGg07uvJiSBzVHpGkVjrCZuY5zWsJ02JdhghAjxNd1D17M6dVGqElCIj04KadVf%2FByCP0AkRK4BQF%2BVxz5wHuDQwWniC%2FDSCVDWPpRzH%2B%2FAnsugHnioi6B%2BFvGG9BS6juzntF49ftJ5rVkgwoKwj%2Bv4v3%2FdtE7bJesKuOd8XcJLzofqbEe2XZaTpUTdtWEkxnwgnep0VTDqmlj5u2IieoQZNsF6nhCruOC8llIUGlji6CNInLCXez7QzC%2F%2BvS8BjqkARtJSSG1DS9ZNmx4tQnlWN2rTiz51VKTJ91aUhlehwAGLQQDN4PTevuz%2FovxpVklRNxb%2BAGzBj5tW8yhb%2B%2BpWoJ3U6a4lGMt46ZH1miUl%2F1eyOnMjJdp1IooZWHYeJ1FGRN7NvPyPeAxKPtT7P1heT56xGyWeOLnbPV7WxU4DAoGiTIBGyEIY2lyzKNRsRxuUYWz00xYMc3z8G6y1IMNkUjbeuVw&X-Amz-Signature=afbfec9653a27668845f7b1dd2332e001efcde0eb9388af7c98afe9bb0c9d02d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55XCWKH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtAvgVjWsvio6SVEWA%2Bh4uy%2FyJacWh6s7ZxSRGXYeDAAIhAMyoDDSdMxhIEOubTkpVVi0Cll7ZOPJgo1CiQcd8y4NuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrh3GhmgVApBpyuOIq3APtW3hLp6HBc6yDW7qw8cdKPU2D7MHXWZEKPgNaowynnwic0aZLSgPmkfBApDzihwRU3L6bMUZlJs2%2FJ64ekbU0wBN95QpTe%2F3tLO5bo1sRS%2FdHwa9UK5o8lnEhTsMWQ%2FzuY4vW7Nqh5eaaoNEl%2BqjpunfdtrlRtzVVyPq8K06cPrEZk5kAwEZqAos3O9vcL0tksQ2WnzxaW8FeuL0aVwBCJpzP2inIS2vNOL9Tm3p7OYsdSImEvuj9qXui68rRqVvxr4ht%2FC3WCltqaXTP5kMEavCNgoZKnzhYjnJaW4PeiQ5Nu1upUebWyizrdb5pFYElW1k5tZfXFNLhUDKJkqWnnHchKziv7MQbTI3pR2fR8slI%2BeRINyVg9dWCueun%2FJaMGkMGg07uvJiSBzVHpGkVjrCZuY5zWsJ02JdhghAjxNd1D17M6dVGqElCIj04KadVf%2FByCP0AkRK4BQF%2BVxz5wHuDQwWniC%2FDSCVDWPpRzH%2B%2FAnsugHnioi6B%2BFvGG9BS6juzntF49ftJ5rVkgwoKwj%2Bv4v3%2FdtE7bJesKuOd8XcJLzofqbEe2XZaTpUTdtWEkxnwgnep0VTDqmlj5u2IieoQZNsF6nhCruOC8llIUGlji6CNInLCXez7QzC%2F%2BvS8BjqkARtJSSG1DS9ZNmx4tQnlWN2rTiz51VKTJ91aUhlehwAGLQQDN4PTevuz%2FovxpVklRNxb%2BAGzBj5tW8yhb%2B%2BpWoJ3U6a4lGMt46ZH1miUl%2F1eyOnMjJdp1IooZWHYeJ1FGRN7NvPyPeAxKPtT7P1heT56xGyWeOLnbPV7WxU4DAoGiTIBGyEIY2lyzKNRsRxuUYWz00xYMc3z8G6y1IMNkUjbeuVw&X-Amz-Signature=6fde1ec47bb1d96c54de68c9f931eb58356733f199182b6c8a4dcf23a8a0b192&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
