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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIIJ7FP6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICTBR74z1ElBx2IMnSXIKH7bvvRBVFk5z8ac4LPPIWuDAiEAw7iyE%2Fp%2FhVNzUMs5zQ1IdMAbzj9%2BveAoHQQYdrAOTDQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDE400T%2FbtZQyzwa4SircA%2FPKBDR1gL6GzY4tpKMZYFIZzz6s1fGnT2wnetwdNQCjQevriVZZ2lZuRLA4Kj%2Bp7LRjid%2Bz1daAmKxtZHStJLIdevWDqYPBlVaY0lhU%2BKRcc5znHMOrgLcexu3CRd%2Bgb0GeeUvD68tDST5AgHcAcF%2BlqzbNIXP9CrPenzWDYaz4D5vECWTpjZPwtxP5NqaxjdtnI3HfUgOxkPy2j2mpBIHSlyOJ6XnGh9emcUzOUzAKmxZ4NTr3JMBWyPeEMVLd0wFJ0jM72eQjztlBp1SGoD%2BY0IKmSY5cC%2BTK8fP%2BEoW%2Fmih9Pv%2FjUgjToFBc63FeAS2uj9lrGhXivrTIhvD2HnoWzlURbUeLP%2F4DoXFnI3DAuJzD8lsEL9l%2FFNM4OMUQ5EFCzlWyOnc1965JfiCmpJOXA%2FSjaLertCgW%2F1I0Y4QyZ3xeYrzUhKMIy76IGTB68Sw%2FdvrOK%2BS%2FASrpVaU9C6qGHUkqk%2Fc41s0tXWxMCdbpfTxGOg1OIe1XbZZxT%2Bgq7H9oJTG0dmCWJIBcmIoaLjuq4QZKFEAThrvpRUNzYorLBOdKcVG%2BUHjdteZz%2BofKTqSIfpZd0ufIxGMcddkg7fUMHdy3uEdhlGAyLkTsXjz%2Bk0wlcHG6CLu9psIKMNzBk8QGOqUBXO8a7%2BD%2BWluXpjtj0g1DotnBxytNy%2F7qWiB22lRxtZQFIfVA6HZNtsMRfOcm6N2SU%2FymY8SjXwymlFKKQOJJQNJOqH4wwiQ0aocGMXU821%2BCW%2Bny3hKj0NRyYhK7Nyex%2F8XGb9XGzoJ1b9Dccp60bTR6nNBrnY%2BxnTduDJQcxlJ%2BUWcy0eTTt2ZOYH%2B9u%2FmH%2BDJ8ZfR6WokCBspXXUGNt2YgDAky&X-Amz-Signature=a2911e7142392da5b87de439be9e150ad72c984b663893121a6cd99507769295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIIJ7FP6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICTBR74z1ElBx2IMnSXIKH7bvvRBVFk5z8ac4LPPIWuDAiEAw7iyE%2Fp%2FhVNzUMs5zQ1IdMAbzj9%2BveAoHQQYdrAOTDQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDE400T%2FbtZQyzwa4SircA%2FPKBDR1gL6GzY4tpKMZYFIZzz6s1fGnT2wnetwdNQCjQevriVZZ2lZuRLA4Kj%2Bp7LRjid%2Bz1daAmKxtZHStJLIdevWDqYPBlVaY0lhU%2BKRcc5znHMOrgLcexu3CRd%2Bgb0GeeUvD68tDST5AgHcAcF%2BlqzbNIXP9CrPenzWDYaz4D5vECWTpjZPwtxP5NqaxjdtnI3HfUgOxkPy2j2mpBIHSlyOJ6XnGh9emcUzOUzAKmxZ4NTr3JMBWyPeEMVLd0wFJ0jM72eQjztlBp1SGoD%2BY0IKmSY5cC%2BTK8fP%2BEoW%2Fmih9Pv%2FjUgjToFBc63FeAS2uj9lrGhXivrTIhvD2HnoWzlURbUeLP%2F4DoXFnI3DAuJzD8lsEL9l%2FFNM4OMUQ5EFCzlWyOnc1965JfiCmpJOXA%2FSjaLertCgW%2F1I0Y4QyZ3xeYrzUhKMIy76IGTB68Sw%2FdvrOK%2BS%2FASrpVaU9C6qGHUkqk%2Fc41s0tXWxMCdbpfTxGOg1OIe1XbZZxT%2Bgq7H9oJTG0dmCWJIBcmIoaLjuq4QZKFEAThrvpRUNzYorLBOdKcVG%2BUHjdteZz%2BofKTqSIfpZd0ufIxGMcddkg7fUMHdy3uEdhlGAyLkTsXjz%2Bk0wlcHG6CLu9psIKMNzBk8QGOqUBXO8a7%2BD%2BWluXpjtj0g1DotnBxytNy%2F7qWiB22lRxtZQFIfVA6HZNtsMRfOcm6N2SU%2FymY8SjXwymlFKKQOJJQNJOqH4wwiQ0aocGMXU821%2BCW%2Bny3hKj0NRyYhK7Nyex%2F8XGb9XGzoJ1b9Dccp60bTR6nNBrnY%2BxnTduDJQcxlJ%2BUWcy0eTTt2ZOYH%2B9u%2FmH%2BDJ8ZfR6WokCBspXXUGNt2YgDAky&X-Amz-Signature=580cc860688e6e11ffa50c30b74575df2acd226f24fe76f8b72d78c176291675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIIJ7FP6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICTBR74z1ElBx2IMnSXIKH7bvvRBVFk5z8ac4LPPIWuDAiEAw7iyE%2Fp%2FhVNzUMs5zQ1IdMAbzj9%2BveAoHQQYdrAOTDQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDE400T%2FbtZQyzwa4SircA%2FPKBDR1gL6GzY4tpKMZYFIZzz6s1fGnT2wnetwdNQCjQevriVZZ2lZuRLA4Kj%2Bp7LRjid%2Bz1daAmKxtZHStJLIdevWDqYPBlVaY0lhU%2BKRcc5znHMOrgLcexu3CRd%2Bgb0GeeUvD68tDST5AgHcAcF%2BlqzbNIXP9CrPenzWDYaz4D5vECWTpjZPwtxP5NqaxjdtnI3HfUgOxkPy2j2mpBIHSlyOJ6XnGh9emcUzOUzAKmxZ4NTr3JMBWyPeEMVLd0wFJ0jM72eQjztlBp1SGoD%2BY0IKmSY5cC%2BTK8fP%2BEoW%2Fmih9Pv%2FjUgjToFBc63FeAS2uj9lrGhXivrTIhvD2HnoWzlURbUeLP%2F4DoXFnI3DAuJzD8lsEL9l%2FFNM4OMUQ5EFCzlWyOnc1965JfiCmpJOXA%2FSjaLertCgW%2F1I0Y4QyZ3xeYrzUhKMIy76IGTB68Sw%2FdvrOK%2BS%2FASrpVaU9C6qGHUkqk%2Fc41s0tXWxMCdbpfTxGOg1OIe1XbZZxT%2Bgq7H9oJTG0dmCWJIBcmIoaLjuq4QZKFEAThrvpRUNzYorLBOdKcVG%2BUHjdteZz%2BofKTqSIfpZd0ufIxGMcddkg7fUMHdy3uEdhlGAyLkTsXjz%2Bk0wlcHG6CLu9psIKMNzBk8QGOqUBXO8a7%2BD%2BWluXpjtj0g1DotnBxytNy%2F7qWiB22lRxtZQFIfVA6HZNtsMRfOcm6N2SU%2FymY8SjXwymlFKKQOJJQNJOqH4wwiQ0aocGMXU821%2BCW%2Bny3hKj0NRyYhK7Nyex%2F8XGb9XGzoJ1b9Dccp60bTR6nNBrnY%2BxnTduDJQcxlJ%2BUWcy0eTTt2ZOYH%2B9u%2FmH%2BDJ8ZfR6WokCBspXXUGNt2YgDAky&X-Amz-Signature=e21953b4a29d3b62848e7afe0be1fe6b3501656c887f0de27dd46b417cc83b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIIJ7FP6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICTBR74z1ElBx2IMnSXIKH7bvvRBVFk5z8ac4LPPIWuDAiEAw7iyE%2Fp%2FhVNzUMs5zQ1IdMAbzj9%2BveAoHQQYdrAOTDQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDE400T%2FbtZQyzwa4SircA%2FPKBDR1gL6GzY4tpKMZYFIZzz6s1fGnT2wnetwdNQCjQevriVZZ2lZuRLA4Kj%2Bp7LRjid%2Bz1daAmKxtZHStJLIdevWDqYPBlVaY0lhU%2BKRcc5znHMOrgLcexu3CRd%2Bgb0GeeUvD68tDST5AgHcAcF%2BlqzbNIXP9CrPenzWDYaz4D5vECWTpjZPwtxP5NqaxjdtnI3HfUgOxkPy2j2mpBIHSlyOJ6XnGh9emcUzOUzAKmxZ4NTr3JMBWyPeEMVLd0wFJ0jM72eQjztlBp1SGoD%2BY0IKmSY5cC%2BTK8fP%2BEoW%2Fmih9Pv%2FjUgjToFBc63FeAS2uj9lrGhXivrTIhvD2HnoWzlURbUeLP%2F4DoXFnI3DAuJzD8lsEL9l%2FFNM4OMUQ5EFCzlWyOnc1965JfiCmpJOXA%2FSjaLertCgW%2F1I0Y4QyZ3xeYrzUhKMIy76IGTB68Sw%2FdvrOK%2BS%2FASrpVaU9C6qGHUkqk%2Fc41s0tXWxMCdbpfTxGOg1OIe1XbZZxT%2Bgq7H9oJTG0dmCWJIBcmIoaLjuq4QZKFEAThrvpRUNzYorLBOdKcVG%2BUHjdteZz%2BofKTqSIfpZd0ufIxGMcddkg7fUMHdy3uEdhlGAyLkTsXjz%2Bk0wlcHG6CLu9psIKMNzBk8QGOqUBXO8a7%2BD%2BWluXpjtj0g1DotnBxytNy%2F7qWiB22lRxtZQFIfVA6HZNtsMRfOcm6N2SU%2FymY8SjXwymlFKKQOJJQNJOqH4wwiQ0aocGMXU821%2BCW%2Bny3hKj0NRyYhK7Nyex%2F8XGb9XGzoJ1b9Dccp60bTR6nNBrnY%2BxnTduDJQcxlJ%2BUWcy0eTTt2ZOYH%2B9u%2FmH%2BDJ8ZfR6WokCBspXXUGNt2YgDAky&X-Amz-Signature=4f9c333e1d19ec92afcb7dfc6a1a13641694ed6bd38c9ee9dd90fedd320def7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIIJ7FP6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICTBR74z1ElBx2IMnSXIKH7bvvRBVFk5z8ac4LPPIWuDAiEAw7iyE%2Fp%2FhVNzUMs5zQ1IdMAbzj9%2BveAoHQQYdrAOTDQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDE400T%2FbtZQyzwa4SircA%2FPKBDR1gL6GzY4tpKMZYFIZzz6s1fGnT2wnetwdNQCjQevriVZZ2lZuRLA4Kj%2Bp7LRjid%2Bz1daAmKxtZHStJLIdevWDqYPBlVaY0lhU%2BKRcc5znHMOrgLcexu3CRd%2Bgb0GeeUvD68tDST5AgHcAcF%2BlqzbNIXP9CrPenzWDYaz4D5vECWTpjZPwtxP5NqaxjdtnI3HfUgOxkPy2j2mpBIHSlyOJ6XnGh9emcUzOUzAKmxZ4NTr3JMBWyPeEMVLd0wFJ0jM72eQjztlBp1SGoD%2BY0IKmSY5cC%2BTK8fP%2BEoW%2Fmih9Pv%2FjUgjToFBc63FeAS2uj9lrGhXivrTIhvD2HnoWzlURbUeLP%2F4DoXFnI3DAuJzD8lsEL9l%2FFNM4OMUQ5EFCzlWyOnc1965JfiCmpJOXA%2FSjaLertCgW%2F1I0Y4QyZ3xeYrzUhKMIy76IGTB68Sw%2FdvrOK%2BS%2FASrpVaU9C6qGHUkqk%2Fc41s0tXWxMCdbpfTxGOg1OIe1XbZZxT%2Bgq7H9oJTG0dmCWJIBcmIoaLjuq4QZKFEAThrvpRUNzYorLBOdKcVG%2BUHjdteZz%2BofKTqSIfpZd0ufIxGMcddkg7fUMHdy3uEdhlGAyLkTsXjz%2Bk0wlcHG6CLu9psIKMNzBk8QGOqUBXO8a7%2BD%2BWluXpjtj0g1DotnBxytNy%2F7qWiB22lRxtZQFIfVA6HZNtsMRfOcm6N2SU%2FymY8SjXwymlFKKQOJJQNJOqH4wwiQ0aocGMXU821%2BCW%2Bny3hKj0NRyYhK7Nyex%2F8XGb9XGzoJ1b9Dccp60bTR6nNBrnY%2BxnTduDJQcxlJ%2BUWcy0eTTt2ZOYH%2B9u%2FmH%2BDJ8ZfR6WokCBspXXUGNt2YgDAky&X-Amz-Signature=c48956ec1b0777c8df80e40bd1de86ee39f7a51082459de4c9760b4d154c64a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
