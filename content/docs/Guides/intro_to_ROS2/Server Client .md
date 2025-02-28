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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLEMUND%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCqOH7bP8KBRrr%2BondEI4Ck3S%2FJyvSOJ4k4PYpRZ5ADdwIhAIkG3XXFzRch8J9TDbU3iAVplaClY5FDn%2FHQf%2BqKo2u1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydq2%2FRQ0E6dYGBkmAq3APrQxzs%2B1BKl%2BZ%2FfqAN2SXLTYdo7v8KNd1%2Ffz77GV9wM%2Bwd3i16rTD2IZAsz%2FGTAJ5ht3i%2BuWAZaVMvdC5IFbO3fUxztn6fPCqfSWl%2B53xEOgEmivZyTi7SEV054O4ziNVTZnymy9KRJ537SL%2FdS4Vylq5iQKdTw9HcZOxYSXLVxWf5QX15XeQcWuts56LF1RNYBitqJaDk0C%2BZN6XQGWF%2FGupaWHgmtMu%2BWLBZp4NLx2cbodj0HkhQkI9Y6nhBQ3l%2BabuubTRAcGu143ikNQRwqX1i43ebLumT%2FFmwp8oNralBIxvp1HhYvBnYx9hl%2FFxzY3Ey85PBt%2FquRZtoJ0GJT7TWJyhLmbKh4fOlCgJWgai3ImAfCk9Kk3DuNz2MR%2FDw%2FJvwFHavdd7MahDI7wwh9%2FA7Ym9Ra1Him9eryx%2BaOK%2B0xqrgYxWlp%2F0jwaWnf5dwSmJ8goK4KDN9zQ3MnlubBl9KzoljLV1ORM2yHTz8ISiemq2P0fH%2BYfMkXZazWH00bPvG0e64tGsD1%2FVI6qFXDW70J8nndcbszUYlee1LTL74z%2FPGEE%2FY%2FIEg16k5zEhIbIz8QF6Syw%2F%2B2YsE1fIR6ZBn%2BxHkuWU1i809PB3ZlkTXrslAUdhJCmaknDDSj4W%2BBjqkAb11gUqjZCAt%2B2t7eVvJT%2FOwyR5c9xRvjWixa1gA2fVYNLFpymVtOC9%2FZ4tTDDUU0oYcUucKHBGX6UUfh02Sg78vgg4Z8vY%2BXjo4hhf4rOwPhdy%2FzSH6ocL0NdsAbiwjQCJYw5E28AEAKrsk1RSto14P2s9ga3rqdPWhbgEYNymSFcWFFHBWnHE3srsvaSdUJDWHAoKSiGYXfUw4Pu4esrXmDJVv&X-Amz-Signature=79a9a1097a5ab9763e8260b169242c86857697f0214f6aa9aa18b8409be8d10d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLEMUND%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCqOH7bP8KBRrr%2BondEI4Ck3S%2FJyvSOJ4k4PYpRZ5ADdwIhAIkG3XXFzRch8J9TDbU3iAVplaClY5FDn%2FHQf%2BqKo2u1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydq2%2FRQ0E6dYGBkmAq3APrQxzs%2B1BKl%2BZ%2FfqAN2SXLTYdo7v8KNd1%2Ffz77GV9wM%2Bwd3i16rTD2IZAsz%2FGTAJ5ht3i%2BuWAZaVMvdC5IFbO3fUxztn6fPCqfSWl%2B53xEOgEmivZyTi7SEV054O4ziNVTZnymy9KRJ537SL%2FdS4Vylq5iQKdTw9HcZOxYSXLVxWf5QX15XeQcWuts56LF1RNYBitqJaDk0C%2BZN6XQGWF%2FGupaWHgmtMu%2BWLBZp4NLx2cbodj0HkhQkI9Y6nhBQ3l%2BabuubTRAcGu143ikNQRwqX1i43ebLumT%2FFmwp8oNralBIxvp1HhYvBnYx9hl%2FFxzY3Ey85PBt%2FquRZtoJ0GJT7TWJyhLmbKh4fOlCgJWgai3ImAfCk9Kk3DuNz2MR%2FDw%2FJvwFHavdd7MahDI7wwh9%2FA7Ym9Ra1Him9eryx%2BaOK%2B0xqrgYxWlp%2F0jwaWnf5dwSmJ8goK4KDN9zQ3MnlubBl9KzoljLV1ORM2yHTz8ISiemq2P0fH%2BYfMkXZazWH00bPvG0e64tGsD1%2FVI6qFXDW70J8nndcbszUYlee1LTL74z%2FPGEE%2FY%2FIEg16k5zEhIbIz8QF6Syw%2F%2B2YsE1fIR6ZBn%2BxHkuWU1i809PB3ZlkTXrslAUdhJCmaknDDSj4W%2BBjqkAb11gUqjZCAt%2B2t7eVvJT%2FOwyR5c9xRvjWixa1gA2fVYNLFpymVtOC9%2FZ4tTDDUU0oYcUucKHBGX6UUfh02Sg78vgg4Z8vY%2BXjo4hhf4rOwPhdy%2FzSH6ocL0NdsAbiwjQCJYw5E28AEAKrsk1RSto14P2s9ga3rqdPWhbgEYNymSFcWFFHBWnHE3srsvaSdUJDWHAoKSiGYXfUw4Pu4esrXmDJVv&X-Amz-Signature=d2384b8a4a18a3ea42ec37bdf1105ce5693efb478765a92e4e7986726c301855&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLEMUND%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCqOH7bP8KBRrr%2BondEI4Ck3S%2FJyvSOJ4k4PYpRZ5ADdwIhAIkG3XXFzRch8J9TDbU3iAVplaClY5FDn%2FHQf%2BqKo2u1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydq2%2FRQ0E6dYGBkmAq3APrQxzs%2B1BKl%2BZ%2FfqAN2SXLTYdo7v8KNd1%2Ffz77GV9wM%2Bwd3i16rTD2IZAsz%2FGTAJ5ht3i%2BuWAZaVMvdC5IFbO3fUxztn6fPCqfSWl%2B53xEOgEmivZyTi7SEV054O4ziNVTZnymy9KRJ537SL%2FdS4Vylq5iQKdTw9HcZOxYSXLVxWf5QX15XeQcWuts56LF1RNYBitqJaDk0C%2BZN6XQGWF%2FGupaWHgmtMu%2BWLBZp4NLx2cbodj0HkhQkI9Y6nhBQ3l%2BabuubTRAcGu143ikNQRwqX1i43ebLumT%2FFmwp8oNralBIxvp1HhYvBnYx9hl%2FFxzY3Ey85PBt%2FquRZtoJ0GJT7TWJyhLmbKh4fOlCgJWgai3ImAfCk9Kk3DuNz2MR%2FDw%2FJvwFHavdd7MahDI7wwh9%2FA7Ym9Ra1Him9eryx%2BaOK%2B0xqrgYxWlp%2F0jwaWnf5dwSmJ8goK4KDN9zQ3MnlubBl9KzoljLV1ORM2yHTz8ISiemq2P0fH%2BYfMkXZazWH00bPvG0e64tGsD1%2FVI6qFXDW70J8nndcbszUYlee1LTL74z%2FPGEE%2FY%2FIEg16k5zEhIbIz8QF6Syw%2F%2B2YsE1fIR6ZBn%2BxHkuWU1i809PB3ZlkTXrslAUdhJCmaknDDSj4W%2BBjqkAb11gUqjZCAt%2B2t7eVvJT%2FOwyR5c9xRvjWixa1gA2fVYNLFpymVtOC9%2FZ4tTDDUU0oYcUucKHBGX6UUfh02Sg78vgg4Z8vY%2BXjo4hhf4rOwPhdy%2FzSH6ocL0NdsAbiwjQCJYw5E28AEAKrsk1RSto14P2s9ga3rqdPWhbgEYNymSFcWFFHBWnHE3srsvaSdUJDWHAoKSiGYXfUw4Pu4esrXmDJVv&X-Amz-Signature=dd790ed1524a0eb93e0bee059714dcf4681530baf47c45ed19baced3b29c83e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLEMUND%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCqOH7bP8KBRrr%2BondEI4Ck3S%2FJyvSOJ4k4PYpRZ5ADdwIhAIkG3XXFzRch8J9TDbU3iAVplaClY5FDn%2FHQf%2BqKo2u1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydq2%2FRQ0E6dYGBkmAq3APrQxzs%2B1BKl%2BZ%2FfqAN2SXLTYdo7v8KNd1%2Ffz77GV9wM%2Bwd3i16rTD2IZAsz%2FGTAJ5ht3i%2BuWAZaVMvdC5IFbO3fUxztn6fPCqfSWl%2B53xEOgEmivZyTi7SEV054O4ziNVTZnymy9KRJ537SL%2FdS4Vylq5iQKdTw9HcZOxYSXLVxWf5QX15XeQcWuts56LF1RNYBitqJaDk0C%2BZN6XQGWF%2FGupaWHgmtMu%2BWLBZp4NLx2cbodj0HkhQkI9Y6nhBQ3l%2BabuubTRAcGu143ikNQRwqX1i43ebLumT%2FFmwp8oNralBIxvp1HhYvBnYx9hl%2FFxzY3Ey85PBt%2FquRZtoJ0GJT7TWJyhLmbKh4fOlCgJWgai3ImAfCk9Kk3DuNz2MR%2FDw%2FJvwFHavdd7MahDI7wwh9%2FA7Ym9Ra1Him9eryx%2BaOK%2B0xqrgYxWlp%2F0jwaWnf5dwSmJ8goK4KDN9zQ3MnlubBl9KzoljLV1ORM2yHTz8ISiemq2P0fH%2BYfMkXZazWH00bPvG0e64tGsD1%2FVI6qFXDW70J8nndcbszUYlee1LTL74z%2FPGEE%2FY%2FIEg16k5zEhIbIz8QF6Syw%2F%2B2YsE1fIR6ZBn%2BxHkuWU1i809PB3ZlkTXrslAUdhJCmaknDDSj4W%2BBjqkAb11gUqjZCAt%2B2t7eVvJT%2FOwyR5c9xRvjWixa1gA2fVYNLFpymVtOC9%2FZ4tTDDUU0oYcUucKHBGX6UUfh02Sg78vgg4Z8vY%2BXjo4hhf4rOwPhdy%2FzSH6ocL0NdsAbiwjQCJYw5E28AEAKrsk1RSto14P2s9ga3rqdPWhbgEYNymSFcWFFHBWnHE3srsvaSdUJDWHAoKSiGYXfUw4Pu4esrXmDJVv&X-Amz-Signature=08f34117fdbd81dc5aad0618b00fd9e176f7cc083e4aef33911e244a385678bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLEMUND%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCqOH7bP8KBRrr%2BondEI4Ck3S%2FJyvSOJ4k4PYpRZ5ADdwIhAIkG3XXFzRch8J9TDbU3iAVplaClY5FDn%2FHQf%2BqKo2u1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydq2%2FRQ0E6dYGBkmAq3APrQxzs%2B1BKl%2BZ%2FfqAN2SXLTYdo7v8KNd1%2Ffz77GV9wM%2Bwd3i16rTD2IZAsz%2FGTAJ5ht3i%2BuWAZaVMvdC5IFbO3fUxztn6fPCqfSWl%2B53xEOgEmivZyTi7SEV054O4ziNVTZnymy9KRJ537SL%2FdS4Vylq5iQKdTw9HcZOxYSXLVxWf5QX15XeQcWuts56LF1RNYBitqJaDk0C%2BZN6XQGWF%2FGupaWHgmtMu%2BWLBZp4NLx2cbodj0HkhQkI9Y6nhBQ3l%2BabuubTRAcGu143ikNQRwqX1i43ebLumT%2FFmwp8oNralBIxvp1HhYvBnYx9hl%2FFxzY3Ey85PBt%2FquRZtoJ0GJT7TWJyhLmbKh4fOlCgJWgai3ImAfCk9Kk3DuNz2MR%2FDw%2FJvwFHavdd7MahDI7wwh9%2FA7Ym9Ra1Him9eryx%2BaOK%2B0xqrgYxWlp%2F0jwaWnf5dwSmJ8goK4KDN9zQ3MnlubBl9KzoljLV1ORM2yHTz8ISiemq2P0fH%2BYfMkXZazWH00bPvG0e64tGsD1%2FVI6qFXDW70J8nndcbszUYlee1LTL74z%2FPGEE%2FY%2FIEg16k5zEhIbIz8QF6Syw%2F%2B2YsE1fIR6ZBn%2BxHkuWU1i809PB3ZlkTXrslAUdhJCmaknDDSj4W%2BBjqkAb11gUqjZCAt%2B2t7eVvJT%2FOwyR5c9xRvjWixa1gA2fVYNLFpymVtOC9%2FZ4tTDDUU0oYcUucKHBGX6UUfh02Sg78vgg4Z8vY%2BXjo4hhf4rOwPhdy%2FzSH6ocL0NdsAbiwjQCJYw5E28AEAKrsk1RSto14P2s9ga3rqdPWhbgEYNymSFcWFFHBWnHE3srsvaSdUJDWHAoKSiGYXfUw4Pu4esrXmDJVv&X-Amz-Signature=e3aabf7716972652a98dfcd66debf8cba951451755f25141ff6cbffa4f2ed741&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
