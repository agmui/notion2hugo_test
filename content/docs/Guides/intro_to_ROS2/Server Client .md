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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEC7GMEW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAcfMFwZgluR6lAaWmV7ckEUiLNZ6Yow9sWFPxpxsJMDAiEA6Jhc3Q7UPNkUQhLeGzOxAZs5bOmo0xMdAoX80gRb07UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuXlrl3qOOOkrQvfircA8QTRENvkkTlKuu058JOqFh9V9kFI1dtjo5S4THhtVOSe%2FONgb6VkEv7BKWL4hb6HElLwXN1jV8n1jduuf4fP241VFxnsQLwbNsHdLJYUcZjLMKQBO4B8rIoxzHj576K4iNTKUcUJTHtk9517RZYuTZVHVBBTlREI%2FRdtg1k3g9priruALqGLuhI5HAX4cN7z0jFotFYI%2FVqHZb5X0PfWsSK0jF9%2BNeiRS5pbjDBog%2FGNsYWgLUX0AbGNRm%2FUalE6H1XJuZywYDQqmojDdYeehmP%2FdVCwMULcwPAF2T%2FmF5%2BAhwuTPi8k11lo0Wof6ZGs1NclxuWlfFw%2BJyOZbdr8kCvSmZS%2F%2FdkphKPMOP%2F8i7JpZWjLn6oC0CzplfWIF%2BWkhQ3s7U7xMDJFPrut%2Fe0cJxaxEtF896Ph%2FTXzS%2BlzAoNRGftIQ3qqO8PYNprJUnEiuM0P2vqUgsUm9fQwuKlHyXf08pqz%2B%2B00qO%2BOrOtmdzyafCxiyeuJvdrirxSGT7QXzOFVQPL3pMWc%2FDLSN9%2FPWcex3nEZHT95y1gNPezhXWJokl%2BE02ROfJWE%2Bp925K%2BnrUgkQYcisWYy9rch3nb5n14%2Bvz47oC8PfqV37RguL4E0VUaYlzAtvq73sY0MML3usEGOqUB%2BVZ9Tc%2FrZpphJMS9XZxXEOd4OR29m8UkKcJkDZByOTCkkg7dEPcahyDsns6TkZbCXJhJLqy%2FNT9s%2FyL%2F36arEi36AhYN8vObFtwPGePWJJdk9OmvV37TXmCoUQi3BoEd%2FIM9amdHjPOlygqkWJXopG%2B9X3n7tI3lQtfzgCph1Eot4lKgdLzv2l%2BtcCrLJkFroajHaSSIMkIjaQJtEIDAN5HD8DAE&X-Amz-Signature=c917e5674c16707dd7e70b45dc0564e279c7ac29d687ebaa92cbe91460c98070&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEC7GMEW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAcfMFwZgluR6lAaWmV7ckEUiLNZ6Yow9sWFPxpxsJMDAiEA6Jhc3Q7UPNkUQhLeGzOxAZs5bOmo0xMdAoX80gRb07UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuXlrl3qOOOkrQvfircA8QTRENvkkTlKuu058JOqFh9V9kFI1dtjo5S4THhtVOSe%2FONgb6VkEv7BKWL4hb6HElLwXN1jV8n1jduuf4fP241VFxnsQLwbNsHdLJYUcZjLMKQBO4B8rIoxzHj576K4iNTKUcUJTHtk9517RZYuTZVHVBBTlREI%2FRdtg1k3g9priruALqGLuhI5HAX4cN7z0jFotFYI%2FVqHZb5X0PfWsSK0jF9%2BNeiRS5pbjDBog%2FGNsYWgLUX0AbGNRm%2FUalE6H1XJuZywYDQqmojDdYeehmP%2FdVCwMULcwPAF2T%2FmF5%2BAhwuTPi8k11lo0Wof6ZGs1NclxuWlfFw%2BJyOZbdr8kCvSmZS%2F%2FdkphKPMOP%2F8i7JpZWjLn6oC0CzplfWIF%2BWkhQ3s7U7xMDJFPrut%2Fe0cJxaxEtF896Ph%2FTXzS%2BlzAoNRGftIQ3qqO8PYNprJUnEiuM0P2vqUgsUm9fQwuKlHyXf08pqz%2B%2B00qO%2BOrOtmdzyafCxiyeuJvdrirxSGT7QXzOFVQPL3pMWc%2FDLSN9%2FPWcex3nEZHT95y1gNPezhXWJokl%2BE02ROfJWE%2Bp925K%2BnrUgkQYcisWYy9rch3nb5n14%2Bvz47oC8PfqV37RguL4E0VUaYlzAtvq73sY0MML3usEGOqUB%2BVZ9Tc%2FrZpphJMS9XZxXEOd4OR29m8UkKcJkDZByOTCkkg7dEPcahyDsns6TkZbCXJhJLqy%2FNT9s%2FyL%2F36arEi36AhYN8vObFtwPGePWJJdk9OmvV37TXmCoUQi3BoEd%2FIM9amdHjPOlygqkWJXopG%2B9X3n7tI3lQtfzgCph1Eot4lKgdLzv2l%2BtcCrLJkFroajHaSSIMkIjaQJtEIDAN5HD8DAE&X-Amz-Signature=0cd469253a2bf92320067f9a0bb26bd647986c500c447fa42cfa6f724a900efc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEC7GMEW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAcfMFwZgluR6lAaWmV7ckEUiLNZ6Yow9sWFPxpxsJMDAiEA6Jhc3Q7UPNkUQhLeGzOxAZs5bOmo0xMdAoX80gRb07UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuXlrl3qOOOkrQvfircA8QTRENvkkTlKuu058JOqFh9V9kFI1dtjo5S4THhtVOSe%2FONgb6VkEv7BKWL4hb6HElLwXN1jV8n1jduuf4fP241VFxnsQLwbNsHdLJYUcZjLMKQBO4B8rIoxzHj576K4iNTKUcUJTHtk9517RZYuTZVHVBBTlREI%2FRdtg1k3g9priruALqGLuhI5HAX4cN7z0jFotFYI%2FVqHZb5X0PfWsSK0jF9%2BNeiRS5pbjDBog%2FGNsYWgLUX0AbGNRm%2FUalE6H1XJuZywYDQqmojDdYeehmP%2FdVCwMULcwPAF2T%2FmF5%2BAhwuTPi8k11lo0Wof6ZGs1NclxuWlfFw%2BJyOZbdr8kCvSmZS%2F%2FdkphKPMOP%2F8i7JpZWjLn6oC0CzplfWIF%2BWkhQ3s7U7xMDJFPrut%2Fe0cJxaxEtF896Ph%2FTXzS%2BlzAoNRGftIQ3qqO8PYNprJUnEiuM0P2vqUgsUm9fQwuKlHyXf08pqz%2B%2B00qO%2BOrOtmdzyafCxiyeuJvdrirxSGT7QXzOFVQPL3pMWc%2FDLSN9%2FPWcex3nEZHT95y1gNPezhXWJokl%2BE02ROfJWE%2Bp925K%2BnrUgkQYcisWYy9rch3nb5n14%2Bvz47oC8PfqV37RguL4E0VUaYlzAtvq73sY0MML3usEGOqUB%2BVZ9Tc%2FrZpphJMS9XZxXEOd4OR29m8UkKcJkDZByOTCkkg7dEPcahyDsns6TkZbCXJhJLqy%2FNT9s%2FyL%2F36arEi36AhYN8vObFtwPGePWJJdk9OmvV37TXmCoUQi3BoEd%2FIM9amdHjPOlygqkWJXopG%2B9X3n7tI3lQtfzgCph1Eot4lKgdLzv2l%2BtcCrLJkFroajHaSSIMkIjaQJtEIDAN5HD8DAE&X-Amz-Signature=f912a00c4938e6e2a7999497e3cb34dd99d0c386de3a82c0446a8704de0adf1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEC7GMEW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAcfMFwZgluR6lAaWmV7ckEUiLNZ6Yow9sWFPxpxsJMDAiEA6Jhc3Q7UPNkUQhLeGzOxAZs5bOmo0xMdAoX80gRb07UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuXlrl3qOOOkrQvfircA8QTRENvkkTlKuu058JOqFh9V9kFI1dtjo5S4THhtVOSe%2FONgb6VkEv7BKWL4hb6HElLwXN1jV8n1jduuf4fP241VFxnsQLwbNsHdLJYUcZjLMKQBO4B8rIoxzHj576K4iNTKUcUJTHtk9517RZYuTZVHVBBTlREI%2FRdtg1k3g9priruALqGLuhI5HAX4cN7z0jFotFYI%2FVqHZb5X0PfWsSK0jF9%2BNeiRS5pbjDBog%2FGNsYWgLUX0AbGNRm%2FUalE6H1XJuZywYDQqmojDdYeehmP%2FdVCwMULcwPAF2T%2FmF5%2BAhwuTPi8k11lo0Wof6ZGs1NclxuWlfFw%2BJyOZbdr8kCvSmZS%2F%2FdkphKPMOP%2F8i7JpZWjLn6oC0CzplfWIF%2BWkhQ3s7U7xMDJFPrut%2Fe0cJxaxEtF896Ph%2FTXzS%2BlzAoNRGftIQ3qqO8PYNprJUnEiuM0P2vqUgsUm9fQwuKlHyXf08pqz%2B%2B00qO%2BOrOtmdzyafCxiyeuJvdrirxSGT7QXzOFVQPL3pMWc%2FDLSN9%2FPWcex3nEZHT95y1gNPezhXWJokl%2BE02ROfJWE%2Bp925K%2BnrUgkQYcisWYy9rch3nb5n14%2Bvz47oC8PfqV37RguL4E0VUaYlzAtvq73sY0MML3usEGOqUB%2BVZ9Tc%2FrZpphJMS9XZxXEOd4OR29m8UkKcJkDZByOTCkkg7dEPcahyDsns6TkZbCXJhJLqy%2FNT9s%2FyL%2F36arEi36AhYN8vObFtwPGePWJJdk9OmvV37TXmCoUQi3BoEd%2FIM9amdHjPOlygqkWJXopG%2B9X3n7tI3lQtfzgCph1Eot4lKgdLzv2l%2BtcCrLJkFroajHaSSIMkIjaQJtEIDAN5HD8DAE&X-Amz-Signature=2efbcdd7654ba3e62d86b6262b5567cc3ea0d84ecea4267afd7459005687da1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEC7GMEW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAcfMFwZgluR6lAaWmV7ckEUiLNZ6Yow9sWFPxpxsJMDAiEA6Jhc3Q7UPNkUQhLeGzOxAZs5bOmo0xMdAoX80gRb07UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuXlrl3qOOOkrQvfircA8QTRENvkkTlKuu058JOqFh9V9kFI1dtjo5S4THhtVOSe%2FONgb6VkEv7BKWL4hb6HElLwXN1jV8n1jduuf4fP241VFxnsQLwbNsHdLJYUcZjLMKQBO4B8rIoxzHj576K4iNTKUcUJTHtk9517RZYuTZVHVBBTlREI%2FRdtg1k3g9priruALqGLuhI5HAX4cN7z0jFotFYI%2FVqHZb5X0PfWsSK0jF9%2BNeiRS5pbjDBog%2FGNsYWgLUX0AbGNRm%2FUalE6H1XJuZywYDQqmojDdYeehmP%2FdVCwMULcwPAF2T%2FmF5%2BAhwuTPi8k11lo0Wof6ZGs1NclxuWlfFw%2BJyOZbdr8kCvSmZS%2F%2FdkphKPMOP%2F8i7JpZWjLn6oC0CzplfWIF%2BWkhQ3s7U7xMDJFPrut%2Fe0cJxaxEtF896Ph%2FTXzS%2BlzAoNRGftIQ3qqO8PYNprJUnEiuM0P2vqUgsUm9fQwuKlHyXf08pqz%2B%2B00qO%2BOrOtmdzyafCxiyeuJvdrirxSGT7QXzOFVQPL3pMWc%2FDLSN9%2FPWcex3nEZHT95y1gNPezhXWJokl%2BE02ROfJWE%2Bp925K%2BnrUgkQYcisWYy9rch3nb5n14%2Bvz47oC8PfqV37RguL4E0VUaYlzAtvq73sY0MML3usEGOqUB%2BVZ9Tc%2FrZpphJMS9XZxXEOd4OR29m8UkKcJkDZByOTCkkg7dEPcahyDsns6TkZbCXJhJLqy%2FNT9s%2FyL%2F36arEi36AhYN8vObFtwPGePWJJdk9OmvV37TXmCoUQi3BoEd%2FIM9amdHjPOlygqkWJXopG%2B9X3n7tI3lQtfzgCph1Eot4lKgdLzv2l%2BtcCrLJkFroajHaSSIMkIjaQJtEIDAN5HD8DAE&X-Amz-Signature=c06af37e44c7cb0d4b787a2d3e97ba8df75c7bc2e66146e74b382e285c013da6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
