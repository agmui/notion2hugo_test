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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BBPYSFJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCN5XBT6t5bMzTvORwEVUajxq8btjyBNs%2FGx57d%2BFznhgIhAP0klhxdh8z4Fs%2F8HcQJSUTy3b%2BkFMbPSGNkfLNYrRuYKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvmUeTHbpxKyDmOkUq3AO34ark0QjqcA%2F5dZctD9CBySMZUiMe8H74ufu6q%2B075C1IRtqdCjqWNPy4UZ6QWS78ZTdDaGDtapbyZPehm0VZA0NUhepngC6mHQVnF6wNE%2FU1fRm8Sbrzv9bWI8ng15KMphGIWppxakw0MGtP6L8yseGRhDgWj11jDgyLAMw3hmhW5nM3NFQTeLejZEjIsPN%2B%2FRIO8IzvmuhHEoGjKA%2Bsh5Izc75gbWmxQOS8cU%2Bg%2BRyGycumilW13YA48tYkgaE8lcAICMKXqnkWBPzv5dulMT8UasJv%2BMaIZysp98d88uTYafEKkUwEoWF9OL72%2BRhFN8RobuWvQcJ781Eabygv6EAjwNDAjvrGVFNfHC3cKKV4dFPpbOqkhjC%2BB3e3UzdAhjUecyRDfsCvGBYb22Mrhcdrj6rgOdUtwiR07yGTVifUU4PHyUh%2FdSwuXs5uEMjSOjbizBBO9ZvqzsxdT4q6%2F2sx8acjqF3P2KQCIrwolwpO77afCsF9t8dUyd2aSG9GTkG2TPbDmx96RutMh4ZHsB7JtWnJmh59JLqfHjlxqU0TIV%2BtRMKfcQmzlWZ82q2AISv0XpJ67126KnP6XNU37VpOXxzQd%2BK77ELVp19cPWhHrmTAg%2FMDXeHxPzDRhtbABjqkAQeQHrHSOitnJ73iUNCO9a4BHZjgPWCm%2B3Gbrh8vf%2BhX68uojlD4%2FLjsCh6W6kKIBsQWSB7Ckev5%2BzS7szgKFHoQqGFJX2vmsT9G3XTsMPV50vtsPXZtqT1wHIN4m9BH4w70b%2BOXhMFnrsw%2B42LbWqXSR0cbl%2BI2Q4FVP1u0Gx%2BpSQEp1GQgjrws3YirGkf2xGu%2FH1X9WbOfJbkj1vbl8izoCIlG&X-Amz-Signature=6643a32b8913fd6c32a228e26911be11cb4e0bc8526ac47856f13950bbfc5c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BBPYSFJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCN5XBT6t5bMzTvORwEVUajxq8btjyBNs%2FGx57d%2BFznhgIhAP0klhxdh8z4Fs%2F8HcQJSUTy3b%2BkFMbPSGNkfLNYrRuYKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvmUeTHbpxKyDmOkUq3AO34ark0QjqcA%2F5dZctD9CBySMZUiMe8H74ufu6q%2B075C1IRtqdCjqWNPy4UZ6QWS78ZTdDaGDtapbyZPehm0VZA0NUhepngC6mHQVnF6wNE%2FU1fRm8Sbrzv9bWI8ng15KMphGIWppxakw0MGtP6L8yseGRhDgWj11jDgyLAMw3hmhW5nM3NFQTeLejZEjIsPN%2B%2FRIO8IzvmuhHEoGjKA%2Bsh5Izc75gbWmxQOS8cU%2Bg%2BRyGycumilW13YA48tYkgaE8lcAICMKXqnkWBPzv5dulMT8UasJv%2BMaIZysp98d88uTYafEKkUwEoWF9OL72%2BRhFN8RobuWvQcJ781Eabygv6EAjwNDAjvrGVFNfHC3cKKV4dFPpbOqkhjC%2BB3e3UzdAhjUecyRDfsCvGBYb22Mrhcdrj6rgOdUtwiR07yGTVifUU4PHyUh%2FdSwuXs5uEMjSOjbizBBO9ZvqzsxdT4q6%2F2sx8acjqF3P2KQCIrwolwpO77afCsF9t8dUyd2aSG9GTkG2TPbDmx96RutMh4ZHsB7JtWnJmh59JLqfHjlxqU0TIV%2BtRMKfcQmzlWZ82q2AISv0XpJ67126KnP6XNU37VpOXxzQd%2BK77ELVp19cPWhHrmTAg%2FMDXeHxPzDRhtbABjqkAQeQHrHSOitnJ73iUNCO9a4BHZjgPWCm%2B3Gbrh8vf%2BhX68uojlD4%2FLjsCh6W6kKIBsQWSB7Ckev5%2BzS7szgKFHoQqGFJX2vmsT9G3XTsMPV50vtsPXZtqT1wHIN4m9BH4w70b%2BOXhMFnrsw%2B42LbWqXSR0cbl%2BI2Q4FVP1u0Gx%2BpSQEp1GQgjrws3YirGkf2xGu%2FH1X9WbOfJbkj1vbl8izoCIlG&X-Amz-Signature=60adb5a1137c36a627d908debe3b876ff6c2ced4e2bfce7bd273c9624d89b8e0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BBPYSFJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCN5XBT6t5bMzTvORwEVUajxq8btjyBNs%2FGx57d%2BFznhgIhAP0klhxdh8z4Fs%2F8HcQJSUTy3b%2BkFMbPSGNkfLNYrRuYKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvmUeTHbpxKyDmOkUq3AO34ark0QjqcA%2F5dZctD9CBySMZUiMe8H74ufu6q%2B075C1IRtqdCjqWNPy4UZ6QWS78ZTdDaGDtapbyZPehm0VZA0NUhepngC6mHQVnF6wNE%2FU1fRm8Sbrzv9bWI8ng15KMphGIWppxakw0MGtP6L8yseGRhDgWj11jDgyLAMw3hmhW5nM3NFQTeLejZEjIsPN%2B%2FRIO8IzvmuhHEoGjKA%2Bsh5Izc75gbWmxQOS8cU%2Bg%2BRyGycumilW13YA48tYkgaE8lcAICMKXqnkWBPzv5dulMT8UasJv%2BMaIZysp98d88uTYafEKkUwEoWF9OL72%2BRhFN8RobuWvQcJ781Eabygv6EAjwNDAjvrGVFNfHC3cKKV4dFPpbOqkhjC%2BB3e3UzdAhjUecyRDfsCvGBYb22Mrhcdrj6rgOdUtwiR07yGTVifUU4PHyUh%2FdSwuXs5uEMjSOjbizBBO9ZvqzsxdT4q6%2F2sx8acjqF3P2KQCIrwolwpO77afCsF9t8dUyd2aSG9GTkG2TPbDmx96RutMh4ZHsB7JtWnJmh59JLqfHjlxqU0TIV%2BtRMKfcQmzlWZ82q2AISv0XpJ67126KnP6XNU37VpOXxzQd%2BK77ELVp19cPWhHrmTAg%2FMDXeHxPzDRhtbABjqkAQeQHrHSOitnJ73iUNCO9a4BHZjgPWCm%2B3Gbrh8vf%2BhX68uojlD4%2FLjsCh6W6kKIBsQWSB7Ckev5%2BzS7szgKFHoQqGFJX2vmsT9G3XTsMPV50vtsPXZtqT1wHIN4m9BH4w70b%2BOXhMFnrsw%2B42LbWqXSR0cbl%2BI2Q4FVP1u0Gx%2BpSQEp1GQgjrws3YirGkf2xGu%2FH1X9WbOfJbkj1vbl8izoCIlG&X-Amz-Signature=4571481a2c5bb57775589d4830e30c1b9734d8e2018da96924ccc60745f853de&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BBPYSFJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCN5XBT6t5bMzTvORwEVUajxq8btjyBNs%2FGx57d%2BFznhgIhAP0klhxdh8z4Fs%2F8HcQJSUTy3b%2BkFMbPSGNkfLNYrRuYKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvmUeTHbpxKyDmOkUq3AO34ark0QjqcA%2F5dZctD9CBySMZUiMe8H74ufu6q%2B075C1IRtqdCjqWNPy4UZ6QWS78ZTdDaGDtapbyZPehm0VZA0NUhepngC6mHQVnF6wNE%2FU1fRm8Sbrzv9bWI8ng15KMphGIWppxakw0MGtP6L8yseGRhDgWj11jDgyLAMw3hmhW5nM3NFQTeLejZEjIsPN%2B%2FRIO8IzvmuhHEoGjKA%2Bsh5Izc75gbWmxQOS8cU%2Bg%2BRyGycumilW13YA48tYkgaE8lcAICMKXqnkWBPzv5dulMT8UasJv%2BMaIZysp98d88uTYafEKkUwEoWF9OL72%2BRhFN8RobuWvQcJ781Eabygv6EAjwNDAjvrGVFNfHC3cKKV4dFPpbOqkhjC%2BB3e3UzdAhjUecyRDfsCvGBYb22Mrhcdrj6rgOdUtwiR07yGTVifUU4PHyUh%2FdSwuXs5uEMjSOjbizBBO9ZvqzsxdT4q6%2F2sx8acjqF3P2KQCIrwolwpO77afCsF9t8dUyd2aSG9GTkG2TPbDmx96RutMh4ZHsB7JtWnJmh59JLqfHjlxqU0TIV%2BtRMKfcQmzlWZ82q2AISv0XpJ67126KnP6XNU37VpOXxzQd%2BK77ELVp19cPWhHrmTAg%2FMDXeHxPzDRhtbABjqkAQeQHrHSOitnJ73iUNCO9a4BHZjgPWCm%2B3Gbrh8vf%2BhX68uojlD4%2FLjsCh6W6kKIBsQWSB7Ckev5%2BzS7szgKFHoQqGFJX2vmsT9G3XTsMPV50vtsPXZtqT1wHIN4m9BH4w70b%2BOXhMFnrsw%2B42LbWqXSR0cbl%2BI2Q4FVP1u0Gx%2BpSQEp1GQgjrws3YirGkf2xGu%2FH1X9WbOfJbkj1vbl8izoCIlG&X-Amz-Signature=cba400e76a74bd1871ea196948ede8df488cb0272257c82a7069f9144acbfafd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BBPYSFJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCN5XBT6t5bMzTvORwEVUajxq8btjyBNs%2FGx57d%2BFznhgIhAP0klhxdh8z4Fs%2F8HcQJSUTy3b%2BkFMbPSGNkfLNYrRuYKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvmUeTHbpxKyDmOkUq3AO34ark0QjqcA%2F5dZctD9CBySMZUiMe8H74ufu6q%2B075C1IRtqdCjqWNPy4UZ6QWS78ZTdDaGDtapbyZPehm0VZA0NUhepngC6mHQVnF6wNE%2FU1fRm8Sbrzv9bWI8ng15KMphGIWppxakw0MGtP6L8yseGRhDgWj11jDgyLAMw3hmhW5nM3NFQTeLejZEjIsPN%2B%2FRIO8IzvmuhHEoGjKA%2Bsh5Izc75gbWmxQOS8cU%2Bg%2BRyGycumilW13YA48tYkgaE8lcAICMKXqnkWBPzv5dulMT8UasJv%2BMaIZysp98d88uTYafEKkUwEoWF9OL72%2BRhFN8RobuWvQcJ781Eabygv6EAjwNDAjvrGVFNfHC3cKKV4dFPpbOqkhjC%2BB3e3UzdAhjUecyRDfsCvGBYb22Mrhcdrj6rgOdUtwiR07yGTVifUU4PHyUh%2FdSwuXs5uEMjSOjbizBBO9ZvqzsxdT4q6%2F2sx8acjqF3P2KQCIrwolwpO77afCsF9t8dUyd2aSG9GTkG2TPbDmx96RutMh4ZHsB7JtWnJmh59JLqfHjlxqU0TIV%2BtRMKfcQmzlWZ82q2AISv0XpJ67126KnP6XNU37VpOXxzQd%2BK77ELVp19cPWhHrmTAg%2FMDXeHxPzDRhtbABjqkAQeQHrHSOitnJ73iUNCO9a4BHZjgPWCm%2B3Gbrh8vf%2BhX68uojlD4%2FLjsCh6W6kKIBsQWSB7Ckev5%2BzS7szgKFHoQqGFJX2vmsT9G3XTsMPV50vtsPXZtqT1wHIN4m9BH4w70b%2BOXhMFnrsw%2B42LbWqXSR0cbl%2BI2Q4FVP1u0Gx%2BpSQEp1GQgjrws3YirGkf2xGu%2FH1X9WbOfJbkj1vbl8izoCIlG&X-Amz-Signature=2a252df4bcc492a0c90494cbd685a74b7f99cac6b2515b5edbf42b8368f6bdea&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
