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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNJVIN6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6dxlUAIK4KgWPKyijcBqL6hYCuiGPRJOu%2Bv4Vg%2FsqKQIgVcrtYqOo2xIod7vQCa0x6p0ACvXbI7sX%2BfJGsOXs4LYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMrTl57JbkNPKRIQYircA%2FEXVDLcsxwE1APOTcP45DJLEkK%2FL9ZiKjY9dsn5YkV6mGFKtf1UqvwTdmxViML4qvJkwP5j%2Bf5K5h7Ai25uxTi%2F9HrKSpPp88K29m%2BSJpSfsrvEblo6LBI7CC7EdsvTYHSsSZk%2BZmPRyACsZJOMaAeRE7QEQRPKaeAFB2DLWVh8xqMHtyn0wHHZxJYyyCsjheZNoZeRO%2BbPo5SBjGV32wxvelArBqrrnfZ36zqPbdusAfGLBPH0LNefvyRnCMA%2BEeOd4gJk%2FlP4rEpzni7fqEAcAnmxHh4ZbZhQ8DkLLUz5uptKSoDI%2FOHqijqvXGWlp6cCwDVhPW8%2B1GwQnr9a6JZzcK4MQBj9egJs%2B77IwoY4XZdFf5aM1lBfFMYDR%2FhuAus%2F35ukmsBMVUBLTxp2W0MujIpFIgpG8EzRB11scTomJ4mvhjT%2BckzvpcuJkNUXsMzmO%2FqGcbrFr8WBXYfDfUi8%2F0%2Fe1QwT83gcaT%2FpPRyARrlRBM4u42Lf4h4tNsA3CpumilRei6MgLpkqAszTh8V%2FR9OM6WD2ZrR%2FwTd9c54EXSDnI06rIrK7LXBqwBzk3OSQDz5PHn%2BX4f0Uvu0HE%2FI7eiG%2BH%2Fi5QycaU992GOi6Onp%2FUTIAtCGC0QYhMLXa%2FcQGOqUBofDzy1%2BZyYqHFGP%2FGikZJ9pM5QgZPGUOVGgu8cirL76uduVhluIeS2NXTwyMHIw%2BC2PXOuXBPLte2PeHCLOtQhreasiU51%2Btcn5a5HDnyF8MYV5pVSCFPnAdIrQwG0UpYpovwJ%2F%2F769sIXmrPf2uEoT%2FanHyDmgNvyIlk5H5l99LklaWo%2FGJ1AgSrurFmNLR%2F2nN5TeXv0emwVm0WXhSZNldgGYs&X-Amz-Signature=3704c259423ab8f1e5c04a85b08c2690e967e95d5ff6aac9a52567529a98c802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNJVIN6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6dxlUAIK4KgWPKyijcBqL6hYCuiGPRJOu%2Bv4Vg%2FsqKQIgVcrtYqOo2xIod7vQCa0x6p0ACvXbI7sX%2BfJGsOXs4LYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMrTl57JbkNPKRIQYircA%2FEXVDLcsxwE1APOTcP45DJLEkK%2FL9ZiKjY9dsn5YkV6mGFKtf1UqvwTdmxViML4qvJkwP5j%2Bf5K5h7Ai25uxTi%2F9HrKSpPp88K29m%2BSJpSfsrvEblo6LBI7CC7EdsvTYHSsSZk%2BZmPRyACsZJOMaAeRE7QEQRPKaeAFB2DLWVh8xqMHtyn0wHHZxJYyyCsjheZNoZeRO%2BbPo5SBjGV32wxvelArBqrrnfZ36zqPbdusAfGLBPH0LNefvyRnCMA%2BEeOd4gJk%2FlP4rEpzni7fqEAcAnmxHh4ZbZhQ8DkLLUz5uptKSoDI%2FOHqijqvXGWlp6cCwDVhPW8%2B1GwQnr9a6JZzcK4MQBj9egJs%2B77IwoY4XZdFf5aM1lBfFMYDR%2FhuAus%2F35ukmsBMVUBLTxp2W0MujIpFIgpG8EzRB11scTomJ4mvhjT%2BckzvpcuJkNUXsMzmO%2FqGcbrFr8WBXYfDfUi8%2F0%2Fe1QwT83gcaT%2FpPRyARrlRBM4u42Lf4h4tNsA3CpumilRei6MgLpkqAszTh8V%2FR9OM6WD2ZrR%2FwTd9c54EXSDnI06rIrK7LXBqwBzk3OSQDz5PHn%2BX4f0Uvu0HE%2FI7eiG%2BH%2Fi5QycaU992GOi6Onp%2FUTIAtCGC0QYhMLXa%2FcQGOqUBofDzy1%2BZyYqHFGP%2FGikZJ9pM5QgZPGUOVGgu8cirL76uduVhluIeS2NXTwyMHIw%2BC2PXOuXBPLte2PeHCLOtQhreasiU51%2Btcn5a5HDnyF8MYV5pVSCFPnAdIrQwG0UpYpovwJ%2F%2F769sIXmrPf2uEoT%2FanHyDmgNvyIlk5H5l99LklaWo%2FGJ1AgSrurFmNLR%2F2nN5TeXv0emwVm0WXhSZNldgGYs&X-Amz-Signature=0246cccc2301a173f2b1dea6d13cc90fb98b6f3d3b4b1801d64e8add917f3582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNJVIN6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6dxlUAIK4KgWPKyijcBqL6hYCuiGPRJOu%2Bv4Vg%2FsqKQIgVcrtYqOo2xIod7vQCa0x6p0ACvXbI7sX%2BfJGsOXs4LYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMrTl57JbkNPKRIQYircA%2FEXVDLcsxwE1APOTcP45DJLEkK%2FL9ZiKjY9dsn5YkV6mGFKtf1UqvwTdmxViML4qvJkwP5j%2Bf5K5h7Ai25uxTi%2F9HrKSpPp88K29m%2BSJpSfsrvEblo6LBI7CC7EdsvTYHSsSZk%2BZmPRyACsZJOMaAeRE7QEQRPKaeAFB2DLWVh8xqMHtyn0wHHZxJYyyCsjheZNoZeRO%2BbPo5SBjGV32wxvelArBqrrnfZ36zqPbdusAfGLBPH0LNefvyRnCMA%2BEeOd4gJk%2FlP4rEpzni7fqEAcAnmxHh4ZbZhQ8DkLLUz5uptKSoDI%2FOHqijqvXGWlp6cCwDVhPW8%2B1GwQnr9a6JZzcK4MQBj9egJs%2B77IwoY4XZdFf5aM1lBfFMYDR%2FhuAus%2F35ukmsBMVUBLTxp2W0MujIpFIgpG8EzRB11scTomJ4mvhjT%2BckzvpcuJkNUXsMzmO%2FqGcbrFr8WBXYfDfUi8%2F0%2Fe1QwT83gcaT%2FpPRyARrlRBM4u42Lf4h4tNsA3CpumilRei6MgLpkqAszTh8V%2FR9OM6WD2ZrR%2FwTd9c54EXSDnI06rIrK7LXBqwBzk3OSQDz5PHn%2BX4f0Uvu0HE%2FI7eiG%2BH%2Fi5QycaU992GOi6Onp%2FUTIAtCGC0QYhMLXa%2FcQGOqUBofDzy1%2BZyYqHFGP%2FGikZJ9pM5QgZPGUOVGgu8cirL76uduVhluIeS2NXTwyMHIw%2BC2PXOuXBPLte2PeHCLOtQhreasiU51%2Btcn5a5HDnyF8MYV5pVSCFPnAdIrQwG0UpYpovwJ%2F%2F769sIXmrPf2uEoT%2FanHyDmgNvyIlk5H5l99LklaWo%2FGJ1AgSrurFmNLR%2F2nN5TeXv0emwVm0WXhSZNldgGYs&X-Amz-Signature=2a4ae3dd55880762910922609b2c3ccf1ea7f7ca1c2bf03b3a81ba90f0f00a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNJVIN6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6dxlUAIK4KgWPKyijcBqL6hYCuiGPRJOu%2Bv4Vg%2FsqKQIgVcrtYqOo2xIod7vQCa0x6p0ACvXbI7sX%2BfJGsOXs4LYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMrTl57JbkNPKRIQYircA%2FEXVDLcsxwE1APOTcP45DJLEkK%2FL9ZiKjY9dsn5YkV6mGFKtf1UqvwTdmxViML4qvJkwP5j%2Bf5K5h7Ai25uxTi%2F9HrKSpPp88K29m%2BSJpSfsrvEblo6LBI7CC7EdsvTYHSsSZk%2BZmPRyACsZJOMaAeRE7QEQRPKaeAFB2DLWVh8xqMHtyn0wHHZxJYyyCsjheZNoZeRO%2BbPo5SBjGV32wxvelArBqrrnfZ36zqPbdusAfGLBPH0LNefvyRnCMA%2BEeOd4gJk%2FlP4rEpzni7fqEAcAnmxHh4ZbZhQ8DkLLUz5uptKSoDI%2FOHqijqvXGWlp6cCwDVhPW8%2B1GwQnr9a6JZzcK4MQBj9egJs%2B77IwoY4XZdFf5aM1lBfFMYDR%2FhuAus%2F35ukmsBMVUBLTxp2W0MujIpFIgpG8EzRB11scTomJ4mvhjT%2BckzvpcuJkNUXsMzmO%2FqGcbrFr8WBXYfDfUi8%2F0%2Fe1QwT83gcaT%2FpPRyARrlRBM4u42Lf4h4tNsA3CpumilRei6MgLpkqAszTh8V%2FR9OM6WD2ZrR%2FwTd9c54EXSDnI06rIrK7LXBqwBzk3OSQDz5PHn%2BX4f0Uvu0HE%2FI7eiG%2BH%2Fi5QycaU992GOi6Onp%2FUTIAtCGC0QYhMLXa%2FcQGOqUBofDzy1%2BZyYqHFGP%2FGikZJ9pM5QgZPGUOVGgu8cirL76uduVhluIeS2NXTwyMHIw%2BC2PXOuXBPLte2PeHCLOtQhreasiU51%2Btcn5a5HDnyF8MYV5pVSCFPnAdIrQwG0UpYpovwJ%2F%2F769sIXmrPf2uEoT%2FanHyDmgNvyIlk5H5l99LklaWo%2FGJ1AgSrurFmNLR%2F2nN5TeXv0emwVm0WXhSZNldgGYs&X-Amz-Signature=dc427f9f87d01c971448f1c1967d5eae39f6181b2101203a49f04fe7ce947824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNJVIN6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6dxlUAIK4KgWPKyijcBqL6hYCuiGPRJOu%2Bv4Vg%2FsqKQIgVcrtYqOo2xIod7vQCa0x6p0ACvXbI7sX%2BfJGsOXs4LYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMrTl57JbkNPKRIQYircA%2FEXVDLcsxwE1APOTcP45DJLEkK%2FL9ZiKjY9dsn5YkV6mGFKtf1UqvwTdmxViML4qvJkwP5j%2Bf5K5h7Ai25uxTi%2F9HrKSpPp88K29m%2BSJpSfsrvEblo6LBI7CC7EdsvTYHSsSZk%2BZmPRyACsZJOMaAeRE7QEQRPKaeAFB2DLWVh8xqMHtyn0wHHZxJYyyCsjheZNoZeRO%2BbPo5SBjGV32wxvelArBqrrnfZ36zqPbdusAfGLBPH0LNefvyRnCMA%2BEeOd4gJk%2FlP4rEpzni7fqEAcAnmxHh4ZbZhQ8DkLLUz5uptKSoDI%2FOHqijqvXGWlp6cCwDVhPW8%2B1GwQnr9a6JZzcK4MQBj9egJs%2B77IwoY4XZdFf5aM1lBfFMYDR%2FhuAus%2F35ukmsBMVUBLTxp2W0MujIpFIgpG8EzRB11scTomJ4mvhjT%2BckzvpcuJkNUXsMzmO%2FqGcbrFr8WBXYfDfUi8%2F0%2Fe1QwT83gcaT%2FpPRyARrlRBM4u42Lf4h4tNsA3CpumilRei6MgLpkqAszTh8V%2FR9OM6WD2ZrR%2FwTd9c54EXSDnI06rIrK7LXBqwBzk3OSQDz5PHn%2BX4f0Uvu0HE%2FI7eiG%2BH%2Fi5QycaU992GOi6Onp%2FUTIAtCGC0QYhMLXa%2FcQGOqUBofDzy1%2BZyYqHFGP%2FGikZJ9pM5QgZPGUOVGgu8cirL76uduVhluIeS2NXTwyMHIw%2BC2PXOuXBPLte2PeHCLOtQhreasiU51%2Btcn5a5HDnyF8MYV5pVSCFPnAdIrQwG0UpYpovwJ%2F%2F769sIXmrPf2uEoT%2FanHyDmgNvyIlk5H5l99LklaWo%2FGJ1AgSrurFmNLR%2F2nN5TeXv0emwVm0WXhSZNldgGYs&X-Amz-Signature=74062bc91f4667e24f1c3e3980087aa04a19e7f2a2b7fbb241cfb045e0b9e9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
