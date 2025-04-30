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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOI2X3B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBEU2gwwGXP1sVxT95H%2BdpcG5A5nnIIce1PvlzsfmFxDAiBQFP%2F9vrBQ%2FliIhHAK%2Bm8IrlfutlCNO60LjagttvW3%2BCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCSNHnjXdm1YjvHXKtwDLnK%2BSOJza597uj32CBuG4A5Pg5%2B5Ib7qsBqNfv2N1xs1eQ%2Ba8BSWH0qDVyOWfvcCWHhzBqiejdIlxOXjz5a5oq2Z2mWi1ylnq7rygEtgpy7g0opPnLG3YPLHIcuO8ZmPjockHuOa9zuaGNH8TimI%2F9kUk9esHTF65TI1bmGQ3ukosz%2FA8%2FMeEH%2FDqcix0E%2B6ljCaEmz2vCSl1YcnzTgqF3WR3ssGRqpTnOwF3aoB8pvUulcIgM1YkPe7VUZvv2c2ENUkqKl4GjwjJULw7cirPZvnakolvxGCNxqMQCZrVSoqJstj10AnTwaGGydo2tS1rEWjaNeUx6bxXFuJny8aynmearimdHkMMwwhcqL%2B%2BTTX3RxEL8rwVTMTMoQY6%2FSjXF0iy0pfXUQB%2F8aY7Sk4J%2FQGFhg7GkRwhOBjNfNFqb%2FiJH28Fid%2BH%2FXNFS35nyt4kf8ukuESspNaabVLoAnChib2DCx6JmVXujEOo55Wn28Zr5zQ9HjfGxgSKT%2BkXHdD%2Fxe85C%2F%2FvvMz7Rjm2gSaoCLE8eSiQN9NsldgtcP%2BLCFwMTZ4bOjxlfrt9tIsk2tBwIrpo7bAtQx63UpVhIBDWYQ7J%2BnN4GWlNPATvsM7tWZXsylHkohW4o9KNMMwhOHIwAY6pgGBS%2B4jhRYs4nU9x%2B9DtBX98%2BTVDcEGn5KzTzQU%2F47REdOKtZQNdkFoFcun0%2BF8lqrpSY64Le5vU%2FNndawGsyN9I9aR0UU9hKbsIGe0l74o%2BNmkzAdUxhLQ6f7PYyiRwMm7Vlze%2Fnta13qu3OnSGPtmDntwvXT85Rn3nnHq63NXFaFvTpwbb8a57kvzu37UflMgm6YDC33QEfbMhGVfq9%2FRlTFbRJzd&X-Amz-Signature=133c005157b73895aa08250e0e1e9243e445e625ddbfdaa5dc0eed9ac8efaf31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOI2X3B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBEU2gwwGXP1sVxT95H%2BdpcG5A5nnIIce1PvlzsfmFxDAiBQFP%2F9vrBQ%2FliIhHAK%2Bm8IrlfutlCNO60LjagttvW3%2BCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCSNHnjXdm1YjvHXKtwDLnK%2BSOJza597uj32CBuG4A5Pg5%2B5Ib7qsBqNfv2N1xs1eQ%2Ba8BSWH0qDVyOWfvcCWHhzBqiejdIlxOXjz5a5oq2Z2mWi1ylnq7rygEtgpy7g0opPnLG3YPLHIcuO8ZmPjockHuOa9zuaGNH8TimI%2F9kUk9esHTF65TI1bmGQ3ukosz%2FA8%2FMeEH%2FDqcix0E%2B6ljCaEmz2vCSl1YcnzTgqF3WR3ssGRqpTnOwF3aoB8pvUulcIgM1YkPe7VUZvv2c2ENUkqKl4GjwjJULw7cirPZvnakolvxGCNxqMQCZrVSoqJstj10AnTwaGGydo2tS1rEWjaNeUx6bxXFuJny8aynmearimdHkMMwwhcqL%2B%2BTTX3RxEL8rwVTMTMoQY6%2FSjXF0iy0pfXUQB%2F8aY7Sk4J%2FQGFhg7GkRwhOBjNfNFqb%2FiJH28Fid%2BH%2FXNFS35nyt4kf8ukuESspNaabVLoAnChib2DCx6JmVXujEOo55Wn28Zr5zQ9HjfGxgSKT%2BkXHdD%2Fxe85C%2F%2FvvMz7Rjm2gSaoCLE8eSiQN9NsldgtcP%2BLCFwMTZ4bOjxlfrt9tIsk2tBwIrpo7bAtQx63UpVhIBDWYQ7J%2BnN4GWlNPATvsM7tWZXsylHkohW4o9KNMMwhOHIwAY6pgGBS%2B4jhRYs4nU9x%2B9DtBX98%2BTVDcEGn5KzTzQU%2F47REdOKtZQNdkFoFcun0%2BF8lqrpSY64Le5vU%2FNndawGsyN9I9aR0UU9hKbsIGe0l74o%2BNmkzAdUxhLQ6f7PYyiRwMm7Vlze%2Fnta13qu3OnSGPtmDntwvXT85Rn3nnHq63NXFaFvTpwbb8a57kvzu37UflMgm6YDC33QEfbMhGVfq9%2FRlTFbRJzd&X-Amz-Signature=3b46592b3d4ec89408db1751045d3e66196d2d0fb090b480a36ecf1cbeec84d7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOI2X3B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBEU2gwwGXP1sVxT95H%2BdpcG5A5nnIIce1PvlzsfmFxDAiBQFP%2F9vrBQ%2FliIhHAK%2Bm8IrlfutlCNO60LjagttvW3%2BCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCSNHnjXdm1YjvHXKtwDLnK%2BSOJza597uj32CBuG4A5Pg5%2B5Ib7qsBqNfv2N1xs1eQ%2Ba8BSWH0qDVyOWfvcCWHhzBqiejdIlxOXjz5a5oq2Z2mWi1ylnq7rygEtgpy7g0opPnLG3YPLHIcuO8ZmPjockHuOa9zuaGNH8TimI%2F9kUk9esHTF65TI1bmGQ3ukosz%2FA8%2FMeEH%2FDqcix0E%2B6ljCaEmz2vCSl1YcnzTgqF3WR3ssGRqpTnOwF3aoB8pvUulcIgM1YkPe7VUZvv2c2ENUkqKl4GjwjJULw7cirPZvnakolvxGCNxqMQCZrVSoqJstj10AnTwaGGydo2tS1rEWjaNeUx6bxXFuJny8aynmearimdHkMMwwhcqL%2B%2BTTX3RxEL8rwVTMTMoQY6%2FSjXF0iy0pfXUQB%2F8aY7Sk4J%2FQGFhg7GkRwhOBjNfNFqb%2FiJH28Fid%2BH%2FXNFS35nyt4kf8ukuESspNaabVLoAnChib2DCx6JmVXujEOo55Wn28Zr5zQ9HjfGxgSKT%2BkXHdD%2Fxe85C%2F%2FvvMz7Rjm2gSaoCLE8eSiQN9NsldgtcP%2BLCFwMTZ4bOjxlfrt9tIsk2tBwIrpo7bAtQx63UpVhIBDWYQ7J%2BnN4GWlNPATvsM7tWZXsylHkohW4o9KNMMwhOHIwAY6pgGBS%2B4jhRYs4nU9x%2B9DtBX98%2BTVDcEGn5KzTzQU%2F47REdOKtZQNdkFoFcun0%2BF8lqrpSY64Le5vU%2FNndawGsyN9I9aR0UU9hKbsIGe0l74o%2BNmkzAdUxhLQ6f7PYyiRwMm7Vlze%2Fnta13qu3OnSGPtmDntwvXT85Rn3nnHq63NXFaFvTpwbb8a57kvzu37UflMgm6YDC33QEfbMhGVfq9%2FRlTFbRJzd&X-Amz-Signature=5c47a146fe6f4c384587370f3faee15fee96ce30d6361952895f5e28f8dba04d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOI2X3B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBEU2gwwGXP1sVxT95H%2BdpcG5A5nnIIce1PvlzsfmFxDAiBQFP%2F9vrBQ%2FliIhHAK%2Bm8IrlfutlCNO60LjagttvW3%2BCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCSNHnjXdm1YjvHXKtwDLnK%2BSOJza597uj32CBuG4A5Pg5%2B5Ib7qsBqNfv2N1xs1eQ%2Ba8BSWH0qDVyOWfvcCWHhzBqiejdIlxOXjz5a5oq2Z2mWi1ylnq7rygEtgpy7g0opPnLG3YPLHIcuO8ZmPjockHuOa9zuaGNH8TimI%2F9kUk9esHTF65TI1bmGQ3ukosz%2FA8%2FMeEH%2FDqcix0E%2B6ljCaEmz2vCSl1YcnzTgqF3WR3ssGRqpTnOwF3aoB8pvUulcIgM1YkPe7VUZvv2c2ENUkqKl4GjwjJULw7cirPZvnakolvxGCNxqMQCZrVSoqJstj10AnTwaGGydo2tS1rEWjaNeUx6bxXFuJny8aynmearimdHkMMwwhcqL%2B%2BTTX3RxEL8rwVTMTMoQY6%2FSjXF0iy0pfXUQB%2F8aY7Sk4J%2FQGFhg7GkRwhOBjNfNFqb%2FiJH28Fid%2BH%2FXNFS35nyt4kf8ukuESspNaabVLoAnChib2DCx6JmVXujEOo55Wn28Zr5zQ9HjfGxgSKT%2BkXHdD%2Fxe85C%2F%2FvvMz7Rjm2gSaoCLE8eSiQN9NsldgtcP%2BLCFwMTZ4bOjxlfrt9tIsk2tBwIrpo7bAtQx63UpVhIBDWYQ7J%2BnN4GWlNPATvsM7tWZXsylHkohW4o9KNMMwhOHIwAY6pgGBS%2B4jhRYs4nU9x%2B9DtBX98%2BTVDcEGn5KzTzQU%2F47REdOKtZQNdkFoFcun0%2BF8lqrpSY64Le5vU%2FNndawGsyN9I9aR0UU9hKbsIGe0l74o%2BNmkzAdUxhLQ6f7PYyiRwMm7Vlze%2Fnta13qu3OnSGPtmDntwvXT85Rn3nnHq63NXFaFvTpwbb8a57kvzu37UflMgm6YDC33QEfbMhGVfq9%2FRlTFbRJzd&X-Amz-Signature=41a5c66d04c8ddc72c6697e2bd46fedcf11a57cfb349d1fd9d27b0d876fb4798&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOI2X3B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBEU2gwwGXP1sVxT95H%2BdpcG5A5nnIIce1PvlzsfmFxDAiBQFP%2F9vrBQ%2FliIhHAK%2Bm8IrlfutlCNO60LjagttvW3%2BCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCSNHnjXdm1YjvHXKtwDLnK%2BSOJza597uj32CBuG4A5Pg5%2B5Ib7qsBqNfv2N1xs1eQ%2Ba8BSWH0qDVyOWfvcCWHhzBqiejdIlxOXjz5a5oq2Z2mWi1ylnq7rygEtgpy7g0opPnLG3YPLHIcuO8ZmPjockHuOa9zuaGNH8TimI%2F9kUk9esHTF65TI1bmGQ3ukosz%2FA8%2FMeEH%2FDqcix0E%2B6ljCaEmz2vCSl1YcnzTgqF3WR3ssGRqpTnOwF3aoB8pvUulcIgM1YkPe7VUZvv2c2ENUkqKl4GjwjJULw7cirPZvnakolvxGCNxqMQCZrVSoqJstj10AnTwaGGydo2tS1rEWjaNeUx6bxXFuJny8aynmearimdHkMMwwhcqL%2B%2BTTX3RxEL8rwVTMTMoQY6%2FSjXF0iy0pfXUQB%2F8aY7Sk4J%2FQGFhg7GkRwhOBjNfNFqb%2FiJH28Fid%2BH%2FXNFS35nyt4kf8ukuESspNaabVLoAnChib2DCx6JmVXujEOo55Wn28Zr5zQ9HjfGxgSKT%2BkXHdD%2Fxe85C%2F%2FvvMz7Rjm2gSaoCLE8eSiQN9NsldgtcP%2BLCFwMTZ4bOjxlfrt9tIsk2tBwIrpo7bAtQx63UpVhIBDWYQ7J%2BnN4GWlNPATvsM7tWZXsylHkohW4o9KNMMwhOHIwAY6pgGBS%2B4jhRYs4nU9x%2B9DtBX98%2BTVDcEGn5KzTzQU%2F47REdOKtZQNdkFoFcun0%2BF8lqrpSY64Le5vU%2FNndawGsyN9I9aR0UU9hKbsIGe0l74o%2BNmkzAdUxhLQ6f7PYyiRwMm7Vlze%2Fnta13qu3OnSGPtmDntwvXT85Rn3nnHq63NXFaFvTpwbb8a57kvzu37UflMgm6YDC33QEfbMhGVfq9%2FRlTFbRJzd&X-Amz-Signature=5052819099369c0153d24e39b7998a27930a583f7d5e6a1ffb46be3448f9c24e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
