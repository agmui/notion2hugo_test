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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7KRSXBG%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIF6KO1KnFr0A2JSgRb3Vw5Xk8q1XKe4ZHXgBi1rlTFLDAiAm8r%2F55AY9GaL7OyZ3%2FrAf8FLkZ72xs7BmUG9ig5%2Bhoir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM9ZCtHGH7Psxppfa6KtwDLISyJd2eTSwS7M1iJ9srpypSkitlJi6UlUC2WEk5S9JqZPIeGZIlq2JnIj5N1Dr2RrG9uNR1rKZmrFrDRYkxJ6e7ufGDBqOWCBuMDESlGGWhZW8L8Dm6UqZOyFiaIxUon2ZGIVlg29Fa%2Bq4302lniqpnjLGhY5LZHLiM4%2FU4qWqrY0XooP4gSBnv1F7LasHLgPnMa17YXDqMpi0yD9CZ08neuihDHvP8ia%2Bmqw3nM%2BTRA27GrVINb5sCqaqX9DbGnrLhP22RapdLaeULkADmSMBf4%2F9UXYhy3hRUKJVn9QVwt2BCR%2BZptXXvCSkrtUZ6s6lO6FikrgHiBTQ%2BVvvhlqi57W%2B7R1s%2BMOaTSHqGrKq5yWIQbVNoCtyj4RhZ8kJ9W2mg2gjNeMIRJBBB6w6UfpBuvki3AkQA45Tx5310yF60PN1hXZ%2FhHAMr9VZwJHYzRx%2B9hXuvpySWMKnTSDEi0YUhPsD2KMV6SYL%2FhChshCeIisoWhljLwfIRI2xUwCrm3eb8LLsJ5HViJ%2BzrZehrtodgivw8uPehLsIrxrKNb03j3Xe%2BLBrLEzOmhQbuxJqApd9x0M3notW%2FwZYUqyXHrDkQ91A%2F3qzEBBIqsBqSj4d6ICh7Da3RCxtlg1Iw0YuAvgY6pgFnUX4S5BHWLXh9cd1HAPwc3l4UkotqObMWNdYqoq0pWiD%2FwfBiTG9aWBREh%2BtI5VZX4WJuV5phJ7G4%2BXYP9mrVp9gx0YcCY3aHPEFpFdLvxbmsoNedlKWJIsRqZ%2FzmZivTU3LdL%2BKGyt4FCjAaP5b3xv0glJFC9P5g9zOoCinP5dr9daCm21IZ12cL0nKFmIYwOdjVxzOOuFqOxSzWYncaP8bQOUyA&X-Amz-Signature=a1cf57a933567d05ee6602cd174ba9eb6239ac2434a40858dd0d90bef2d5bfa4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7KRSXBG%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIF6KO1KnFr0A2JSgRb3Vw5Xk8q1XKe4ZHXgBi1rlTFLDAiAm8r%2F55AY9GaL7OyZ3%2FrAf8FLkZ72xs7BmUG9ig5%2Bhoir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM9ZCtHGH7Psxppfa6KtwDLISyJd2eTSwS7M1iJ9srpypSkitlJi6UlUC2WEk5S9JqZPIeGZIlq2JnIj5N1Dr2RrG9uNR1rKZmrFrDRYkxJ6e7ufGDBqOWCBuMDESlGGWhZW8L8Dm6UqZOyFiaIxUon2ZGIVlg29Fa%2Bq4302lniqpnjLGhY5LZHLiM4%2FU4qWqrY0XooP4gSBnv1F7LasHLgPnMa17YXDqMpi0yD9CZ08neuihDHvP8ia%2Bmqw3nM%2BTRA27GrVINb5sCqaqX9DbGnrLhP22RapdLaeULkADmSMBf4%2F9UXYhy3hRUKJVn9QVwt2BCR%2BZptXXvCSkrtUZ6s6lO6FikrgHiBTQ%2BVvvhlqi57W%2B7R1s%2BMOaTSHqGrKq5yWIQbVNoCtyj4RhZ8kJ9W2mg2gjNeMIRJBBB6w6UfpBuvki3AkQA45Tx5310yF60PN1hXZ%2FhHAMr9VZwJHYzRx%2B9hXuvpySWMKnTSDEi0YUhPsD2KMV6SYL%2FhChshCeIisoWhljLwfIRI2xUwCrm3eb8LLsJ5HViJ%2BzrZehrtodgivw8uPehLsIrxrKNb03j3Xe%2BLBrLEzOmhQbuxJqApd9x0M3notW%2FwZYUqyXHrDkQ91A%2F3qzEBBIqsBqSj4d6ICh7Da3RCxtlg1Iw0YuAvgY6pgFnUX4S5BHWLXh9cd1HAPwc3l4UkotqObMWNdYqoq0pWiD%2FwfBiTG9aWBREh%2BtI5VZX4WJuV5phJ7G4%2BXYP9mrVp9gx0YcCY3aHPEFpFdLvxbmsoNedlKWJIsRqZ%2FzmZivTU3LdL%2BKGyt4FCjAaP5b3xv0glJFC9P5g9zOoCinP5dr9daCm21IZ12cL0nKFmIYwOdjVxzOOuFqOxSzWYncaP8bQOUyA&X-Amz-Signature=33ab8e56e9fb984bf68f974213e6e0694e891d276092b65ded373a57d16f0d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7KRSXBG%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIF6KO1KnFr0A2JSgRb3Vw5Xk8q1XKe4ZHXgBi1rlTFLDAiAm8r%2F55AY9GaL7OyZ3%2FrAf8FLkZ72xs7BmUG9ig5%2Bhoir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM9ZCtHGH7Psxppfa6KtwDLISyJd2eTSwS7M1iJ9srpypSkitlJi6UlUC2WEk5S9JqZPIeGZIlq2JnIj5N1Dr2RrG9uNR1rKZmrFrDRYkxJ6e7ufGDBqOWCBuMDESlGGWhZW8L8Dm6UqZOyFiaIxUon2ZGIVlg29Fa%2Bq4302lniqpnjLGhY5LZHLiM4%2FU4qWqrY0XooP4gSBnv1F7LasHLgPnMa17YXDqMpi0yD9CZ08neuihDHvP8ia%2Bmqw3nM%2BTRA27GrVINb5sCqaqX9DbGnrLhP22RapdLaeULkADmSMBf4%2F9UXYhy3hRUKJVn9QVwt2BCR%2BZptXXvCSkrtUZ6s6lO6FikrgHiBTQ%2BVvvhlqi57W%2B7R1s%2BMOaTSHqGrKq5yWIQbVNoCtyj4RhZ8kJ9W2mg2gjNeMIRJBBB6w6UfpBuvki3AkQA45Tx5310yF60PN1hXZ%2FhHAMr9VZwJHYzRx%2B9hXuvpySWMKnTSDEi0YUhPsD2KMV6SYL%2FhChshCeIisoWhljLwfIRI2xUwCrm3eb8LLsJ5HViJ%2BzrZehrtodgivw8uPehLsIrxrKNb03j3Xe%2BLBrLEzOmhQbuxJqApd9x0M3notW%2FwZYUqyXHrDkQ91A%2F3qzEBBIqsBqSj4d6ICh7Da3RCxtlg1Iw0YuAvgY6pgFnUX4S5BHWLXh9cd1HAPwc3l4UkotqObMWNdYqoq0pWiD%2FwfBiTG9aWBREh%2BtI5VZX4WJuV5phJ7G4%2BXYP9mrVp9gx0YcCY3aHPEFpFdLvxbmsoNedlKWJIsRqZ%2FzmZivTU3LdL%2BKGyt4FCjAaP5b3xv0glJFC9P5g9zOoCinP5dr9daCm21IZ12cL0nKFmIYwOdjVxzOOuFqOxSzWYncaP8bQOUyA&X-Amz-Signature=7970060a05f139b8cf2f8bf5138dd54d8b7813e9c2b1385fe0686c010457eedc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7KRSXBG%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIF6KO1KnFr0A2JSgRb3Vw5Xk8q1XKe4ZHXgBi1rlTFLDAiAm8r%2F55AY9GaL7OyZ3%2FrAf8FLkZ72xs7BmUG9ig5%2Bhoir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM9ZCtHGH7Psxppfa6KtwDLISyJd2eTSwS7M1iJ9srpypSkitlJi6UlUC2WEk5S9JqZPIeGZIlq2JnIj5N1Dr2RrG9uNR1rKZmrFrDRYkxJ6e7ufGDBqOWCBuMDESlGGWhZW8L8Dm6UqZOyFiaIxUon2ZGIVlg29Fa%2Bq4302lniqpnjLGhY5LZHLiM4%2FU4qWqrY0XooP4gSBnv1F7LasHLgPnMa17YXDqMpi0yD9CZ08neuihDHvP8ia%2Bmqw3nM%2BTRA27GrVINb5sCqaqX9DbGnrLhP22RapdLaeULkADmSMBf4%2F9UXYhy3hRUKJVn9QVwt2BCR%2BZptXXvCSkrtUZ6s6lO6FikrgHiBTQ%2BVvvhlqi57W%2B7R1s%2BMOaTSHqGrKq5yWIQbVNoCtyj4RhZ8kJ9W2mg2gjNeMIRJBBB6w6UfpBuvki3AkQA45Tx5310yF60PN1hXZ%2FhHAMr9VZwJHYzRx%2B9hXuvpySWMKnTSDEi0YUhPsD2KMV6SYL%2FhChshCeIisoWhljLwfIRI2xUwCrm3eb8LLsJ5HViJ%2BzrZehrtodgivw8uPehLsIrxrKNb03j3Xe%2BLBrLEzOmhQbuxJqApd9x0M3notW%2FwZYUqyXHrDkQ91A%2F3qzEBBIqsBqSj4d6ICh7Da3RCxtlg1Iw0YuAvgY6pgFnUX4S5BHWLXh9cd1HAPwc3l4UkotqObMWNdYqoq0pWiD%2FwfBiTG9aWBREh%2BtI5VZX4WJuV5phJ7G4%2BXYP9mrVp9gx0YcCY3aHPEFpFdLvxbmsoNedlKWJIsRqZ%2FzmZivTU3LdL%2BKGyt4FCjAaP5b3xv0glJFC9P5g9zOoCinP5dr9daCm21IZ12cL0nKFmIYwOdjVxzOOuFqOxSzWYncaP8bQOUyA&X-Amz-Signature=bff16f04322cb67f26f4ead898a52c49f7f343621e96455fb11f8fb7f923980e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7KRSXBG%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIF6KO1KnFr0A2JSgRb3Vw5Xk8q1XKe4ZHXgBi1rlTFLDAiAm8r%2F55AY9GaL7OyZ3%2FrAf8FLkZ72xs7BmUG9ig5%2Bhoir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM9ZCtHGH7Psxppfa6KtwDLISyJd2eTSwS7M1iJ9srpypSkitlJi6UlUC2WEk5S9JqZPIeGZIlq2JnIj5N1Dr2RrG9uNR1rKZmrFrDRYkxJ6e7ufGDBqOWCBuMDESlGGWhZW8L8Dm6UqZOyFiaIxUon2ZGIVlg29Fa%2Bq4302lniqpnjLGhY5LZHLiM4%2FU4qWqrY0XooP4gSBnv1F7LasHLgPnMa17YXDqMpi0yD9CZ08neuihDHvP8ia%2Bmqw3nM%2BTRA27GrVINb5sCqaqX9DbGnrLhP22RapdLaeULkADmSMBf4%2F9UXYhy3hRUKJVn9QVwt2BCR%2BZptXXvCSkrtUZ6s6lO6FikrgHiBTQ%2BVvvhlqi57W%2B7R1s%2BMOaTSHqGrKq5yWIQbVNoCtyj4RhZ8kJ9W2mg2gjNeMIRJBBB6w6UfpBuvki3AkQA45Tx5310yF60PN1hXZ%2FhHAMr9VZwJHYzRx%2B9hXuvpySWMKnTSDEi0YUhPsD2KMV6SYL%2FhChshCeIisoWhljLwfIRI2xUwCrm3eb8LLsJ5HViJ%2BzrZehrtodgivw8uPehLsIrxrKNb03j3Xe%2BLBrLEzOmhQbuxJqApd9x0M3notW%2FwZYUqyXHrDkQ91A%2F3qzEBBIqsBqSj4d6ICh7Da3RCxtlg1Iw0YuAvgY6pgFnUX4S5BHWLXh9cd1HAPwc3l4UkotqObMWNdYqoq0pWiD%2FwfBiTG9aWBREh%2BtI5VZX4WJuV5phJ7G4%2BXYP9mrVp9gx0YcCY3aHPEFpFdLvxbmsoNedlKWJIsRqZ%2FzmZivTU3LdL%2BKGyt4FCjAaP5b3xv0glJFC9P5g9zOoCinP5dr9daCm21IZ12cL0nKFmIYwOdjVxzOOuFqOxSzWYncaP8bQOUyA&X-Amz-Signature=42ffcff40a89368cc9d57a9f5179a81d04cc2e65a0509dff8fc705350ab96bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
