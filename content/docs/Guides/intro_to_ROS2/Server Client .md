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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VF5OBT7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxlNlBCYazsIuNqgoGsN86Zgg%2FcRIu%2B8S%2BuKlUlB9yKgIhAM7OCMFpvXHohaCg8gJk55GUnThtmmeZXUDectmLlk%2BTKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmW65DvApar8CRHhQq3AMSUYZq8dvziST7Ydi4fzfbmleAxmUpwkyUM438ytjoVx87FYLfHu%2FpBHA6OSheW3cttFgUvN8yTnIKFt3pNxg8LMyhkITuB4MOU14SNURWXN7iykWoTHDLE34dWMKV1dhhl%2BN1IpMmM4h0LoNyeCrwkB%2B1d36ESi8eE34RNaLazON7PdCb6uBT5eD5cIZ7GhKGr0hcmWD4qOIyv8S8QgM4t3n1eScIPqIzjK8MKb8DaOSaDGCG7Ozh2YBZl34O3TfZWo%2Fqi9HnjPFf6LyRsnXazEclApRQI%2FWvppJQc%2BkYyUDMLsbt%2FyX5sYOikbEvOOJ3Y1m8P9CVv7DtMSRRjQTgZYNV%2BEgnDjuqMITqWZIDXhlJWhwaBzRH99iMLiA%2FwRHJJWUGRDVx4XMqH4eziivm%2FVAu8nos23iR80wm%2B0n1vXDyGBtLTIZ32ev9l7gFjBq8eIztEQxLzChHVKgKb60DsrRP6DGhquyn%2BxoG1j4UFby7jMYwTJOqZ2kxHiKWojI5UakL9xg5dVNwFeBZQLmMaCrQp8V6%2BHIZnqmSqy9rbFAM1j2mLVapUs9oxSPSsONO7EWepnav1%2BKNJStiqeXuu6w5Gw4flBn%2F3c0bXV2odFMmp%2BTbKig%2BhH3%2F4zDcy4G%2FBjqkAZ5QVAxyf1uu01rRWnKVC9STXp8yCPmOi%2FQ4wpB90ea0vrNyNqQyHXod9VVYS6YPUo2VDON73TINEjMn1TsZvgWVwU7Veqhb2Hqd%2BX0EubtEl9fxkNdUBYN1nx10Q6MS3%2F8XTVrm18vN7grs1vPnCWx6ys3SIkjT2HSuaLE6DWkR6H08WWD3BqMHlFktttzITlQD86OOt3RAM654EIKEAg2a%2FtHi&X-Amz-Signature=7826a078e1903a06bf6751f25dc783de2faa5e9eb836ba2dd9ab1dd71e106e84&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VF5OBT7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxlNlBCYazsIuNqgoGsN86Zgg%2FcRIu%2B8S%2BuKlUlB9yKgIhAM7OCMFpvXHohaCg8gJk55GUnThtmmeZXUDectmLlk%2BTKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmW65DvApar8CRHhQq3AMSUYZq8dvziST7Ydi4fzfbmleAxmUpwkyUM438ytjoVx87FYLfHu%2FpBHA6OSheW3cttFgUvN8yTnIKFt3pNxg8LMyhkITuB4MOU14SNURWXN7iykWoTHDLE34dWMKV1dhhl%2BN1IpMmM4h0LoNyeCrwkB%2B1d36ESi8eE34RNaLazON7PdCb6uBT5eD5cIZ7GhKGr0hcmWD4qOIyv8S8QgM4t3n1eScIPqIzjK8MKb8DaOSaDGCG7Ozh2YBZl34O3TfZWo%2Fqi9HnjPFf6LyRsnXazEclApRQI%2FWvppJQc%2BkYyUDMLsbt%2FyX5sYOikbEvOOJ3Y1m8P9CVv7DtMSRRjQTgZYNV%2BEgnDjuqMITqWZIDXhlJWhwaBzRH99iMLiA%2FwRHJJWUGRDVx4XMqH4eziivm%2FVAu8nos23iR80wm%2B0n1vXDyGBtLTIZ32ev9l7gFjBq8eIztEQxLzChHVKgKb60DsrRP6DGhquyn%2BxoG1j4UFby7jMYwTJOqZ2kxHiKWojI5UakL9xg5dVNwFeBZQLmMaCrQp8V6%2BHIZnqmSqy9rbFAM1j2mLVapUs9oxSPSsONO7EWepnav1%2BKNJStiqeXuu6w5Gw4flBn%2F3c0bXV2odFMmp%2BTbKig%2BhH3%2F4zDcy4G%2FBjqkAZ5QVAxyf1uu01rRWnKVC9STXp8yCPmOi%2FQ4wpB90ea0vrNyNqQyHXod9VVYS6YPUo2VDON73TINEjMn1TsZvgWVwU7Veqhb2Hqd%2BX0EubtEl9fxkNdUBYN1nx10Q6MS3%2F8XTVrm18vN7grs1vPnCWx6ys3SIkjT2HSuaLE6DWkR6H08WWD3BqMHlFktttzITlQD86OOt3RAM654EIKEAg2a%2FtHi&X-Amz-Signature=002ff1adc0a7163d3ad37ccf936a53fae301595791a1a7d92a157a0592728853&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VF5OBT7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxlNlBCYazsIuNqgoGsN86Zgg%2FcRIu%2B8S%2BuKlUlB9yKgIhAM7OCMFpvXHohaCg8gJk55GUnThtmmeZXUDectmLlk%2BTKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmW65DvApar8CRHhQq3AMSUYZq8dvziST7Ydi4fzfbmleAxmUpwkyUM438ytjoVx87FYLfHu%2FpBHA6OSheW3cttFgUvN8yTnIKFt3pNxg8LMyhkITuB4MOU14SNURWXN7iykWoTHDLE34dWMKV1dhhl%2BN1IpMmM4h0LoNyeCrwkB%2B1d36ESi8eE34RNaLazON7PdCb6uBT5eD5cIZ7GhKGr0hcmWD4qOIyv8S8QgM4t3n1eScIPqIzjK8MKb8DaOSaDGCG7Ozh2YBZl34O3TfZWo%2Fqi9HnjPFf6LyRsnXazEclApRQI%2FWvppJQc%2BkYyUDMLsbt%2FyX5sYOikbEvOOJ3Y1m8P9CVv7DtMSRRjQTgZYNV%2BEgnDjuqMITqWZIDXhlJWhwaBzRH99iMLiA%2FwRHJJWUGRDVx4XMqH4eziivm%2FVAu8nos23iR80wm%2B0n1vXDyGBtLTIZ32ev9l7gFjBq8eIztEQxLzChHVKgKb60DsrRP6DGhquyn%2BxoG1j4UFby7jMYwTJOqZ2kxHiKWojI5UakL9xg5dVNwFeBZQLmMaCrQp8V6%2BHIZnqmSqy9rbFAM1j2mLVapUs9oxSPSsONO7EWepnav1%2BKNJStiqeXuu6w5Gw4flBn%2F3c0bXV2odFMmp%2BTbKig%2BhH3%2F4zDcy4G%2FBjqkAZ5QVAxyf1uu01rRWnKVC9STXp8yCPmOi%2FQ4wpB90ea0vrNyNqQyHXod9VVYS6YPUo2VDON73TINEjMn1TsZvgWVwU7Veqhb2Hqd%2BX0EubtEl9fxkNdUBYN1nx10Q6MS3%2F8XTVrm18vN7grs1vPnCWx6ys3SIkjT2HSuaLE6DWkR6H08WWD3BqMHlFktttzITlQD86OOt3RAM654EIKEAg2a%2FtHi&X-Amz-Signature=e3fd693455777dbe55193b88c3ed6e5a7cfafcfb2401a47cc6b6e844a4af972e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VF5OBT7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxlNlBCYazsIuNqgoGsN86Zgg%2FcRIu%2B8S%2BuKlUlB9yKgIhAM7OCMFpvXHohaCg8gJk55GUnThtmmeZXUDectmLlk%2BTKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmW65DvApar8CRHhQq3AMSUYZq8dvziST7Ydi4fzfbmleAxmUpwkyUM438ytjoVx87FYLfHu%2FpBHA6OSheW3cttFgUvN8yTnIKFt3pNxg8LMyhkITuB4MOU14SNURWXN7iykWoTHDLE34dWMKV1dhhl%2BN1IpMmM4h0LoNyeCrwkB%2B1d36ESi8eE34RNaLazON7PdCb6uBT5eD5cIZ7GhKGr0hcmWD4qOIyv8S8QgM4t3n1eScIPqIzjK8MKb8DaOSaDGCG7Ozh2YBZl34O3TfZWo%2Fqi9HnjPFf6LyRsnXazEclApRQI%2FWvppJQc%2BkYyUDMLsbt%2FyX5sYOikbEvOOJ3Y1m8P9CVv7DtMSRRjQTgZYNV%2BEgnDjuqMITqWZIDXhlJWhwaBzRH99iMLiA%2FwRHJJWUGRDVx4XMqH4eziivm%2FVAu8nos23iR80wm%2B0n1vXDyGBtLTIZ32ev9l7gFjBq8eIztEQxLzChHVKgKb60DsrRP6DGhquyn%2BxoG1j4UFby7jMYwTJOqZ2kxHiKWojI5UakL9xg5dVNwFeBZQLmMaCrQp8V6%2BHIZnqmSqy9rbFAM1j2mLVapUs9oxSPSsONO7EWepnav1%2BKNJStiqeXuu6w5Gw4flBn%2F3c0bXV2odFMmp%2BTbKig%2BhH3%2F4zDcy4G%2FBjqkAZ5QVAxyf1uu01rRWnKVC9STXp8yCPmOi%2FQ4wpB90ea0vrNyNqQyHXod9VVYS6YPUo2VDON73TINEjMn1TsZvgWVwU7Veqhb2Hqd%2BX0EubtEl9fxkNdUBYN1nx10Q6MS3%2F8XTVrm18vN7grs1vPnCWx6ys3SIkjT2HSuaLE6DWkR6H08WWD3BqMHlFktttzITlQD86OOt3RAM654EIKEAg2a%2FtHi&X-Amz-Signature=3aa512f2133149c7af062264c54fccf1956bdf80db85c16d28e6ab546eb3fda4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VF5OBT7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxlNlBCYazsIuNqgoGsN86Zgg%2FcRIu%2B8S%2BuKlUlB9yKgIhAM7OCMFpvXHohaCg8gJk55GUnThtmmeZXUDectmLlk%2BTKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmW65DvApar8CRHhQq3AMSUYZq8dvziST7Ydi4fzfbmleAxmUpwkyUM438ytjoVx87FYLfHu%2FpBHA6OSheW3cttFgUvN8yTnIKFt3pNxg8LMyhkITuB4MOU14SNURWXN7iykWoTHDLE34dWMKV1dhhl%2BN1IpMmM4h0LoNyeCrwkB%2B1d36ESi8eE34RNaLazON7PdCb6uBT5eD5cIZ7GhKGr0hcmWD4qOIyv8S8QgM4t3n1eScIPqIzjK8MKb8DaOSaDGCG7Ozh2YBZl34O3TfZWo%2Fqi9HnjPFf6LyRsnXazEclApRQI%2FWvppJQc%2BkYyUDMLsbt%2FyX5sYOikbEvOOJ3Y1m8P9CVv7DtMSRRjQTgZYNV%2BEgnDjuqMITqWZIDXhlJWhwaBzRH99iMLiA%2FwRHJJWUGRDVx4XMqH4eziivm%2FVAu8nos23iR80wm%2B0n1vXDyGBtLTIZ32ev9l7gFjBq8eIztEQxLzChHVKgKb60DsrRP6DGhquyn%2BxoG1j4UFby7jMYwTJOqZ2kxHiKWojI5UakL9xg5dVNwFeBZQLmMaCrQp8V6%2BHIZnqmSqy9rbFAM1j2mLVapUs9oxSPSsONO7EWepnav1%2BKNJStiqeXuu6w5Gw4flBn%2F3c0bXV2odFMmp%2BTbKig%2BhH3%2F4zDcy4G%2FBjqkAZ5QVAxyf1uu01rRWnKVC9STXp8yCPmOi%2FQ4wpB90ea0vrNyNqQyHXod9VVYS6YPUo2VDON73TINEjMn1TsZvgWVwU7Veqhb2Hqd%2BX0EubtEl9fxkNdUBYN1nx10Q6MS3%2F8XTVrm18vN7grs1vPnCWx6ys3SIkjT2HSuaLE6DWkR6H08WWD3BqMHlFktttzITlQD86OOt3RAM654EIKEAg2a%2FtHi&X-Amz-Signature=2bb7c439118e9c33cba51a9355baf0c7bdc0fe286430459db1f5a8820a8a6495&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
