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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPPCODR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCVIiee50ciI7MhGDW5QJ4REdqA1TXXa%2B7rNHLhX2DrTwIgcyrfTojIQM%2Bj8%2BXFxsK7OZF4JTorVeDKLQs3mzpknYsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPqyLxXGjlrroxqVyrcA07giOvW8C0Zw%2FLDJnUWnMuM4eR%2Bt7lOhE%2B%2BrQUvRFCCyOmjBLHMZ%2BRq6mkCP4ocW7q4suRjIYuTWDrCCB1P368zqpjc%2BDimCyLXiwsWl3Y%2Fz1%2BTAhtuxIb6u9gBQKEKiEqGASsIi9tUbc9T34dd%2FQyidgT2GfmGIxsyb7xDqpX2vlAG9BKbu0mLZoEICC%2Fyas79lCGv4iVrMEeIbkEe7%2B%2FasbNEHsTRei%2FooEaplAy8ooDArk%2FndsH%2BnQRu7gPKywj0DrUSk%2B5dlgbueSKzKjEcf%2BcgOGqHqBsolNnVpv89wPBJp5D3DiBK1NK4CYfjH1ksvBDJyDxDtInFQuJcdJdjxHHOhpjj9Lao61h9iepVxC8PFhgX8rSawgyR2R1srAKQiK0wBbtGDgbObo%2FYMrJ0r3zT5dsRORdEQf63Udh8YSzGH9aAQhdHJ9YPnmVRn9BGn4dvFOuZ5o5gQV83fVxayR%2B%2FvEkNDnRlPUFS4rpS5Mmrc9GH%2FQeS38WoDO7Ju%2F9OHG71%2FMN95SJVgfQ%2B4MI1%2FP39KMLUyVaSt5fmiP%2Fa4u7XY3WQfe9lFSg%2BoTJwGE0afPk5%2FsHWj8S4lfKak5FH%2BSCiC%2BWPTJvtgfhhUNzT2%2FGRxN%2B5esFHJSkYMIvR2sQGOqUBQ0ujM0mpuiri3CPe3eY6VRtakgIA0ynFwcFDR52UZcECWM%2B78WMdHMybijlo4tB%2FyJMwiH5pQ5Z0HNnVqtH8lxtOIo26pB6tolGE7QkaSsfsXhecqLl0wjFUYYWVw4G%2BP1Atg6r2nLoGNdstTceb1jseq3w%2BbleVKZsVDIyCOfmB4vO4bqDl6lo1eDI%2Fh8uMJwxl73PYOwhmA0YvRaDFc%2Bhx%2BbD7&X-Amz-Signature=a1f537af3900be2db384bb32e669687711aa8d565403f14a16fd9f3cdeac2700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPPCODR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCVIiee50ciI7MhGDW5QJ4REdqA1TXXa%2B7rNHLhX2DrTwIgcyrfTojIQM%2Bj8%2BXFxsK7OZF4JTorVeDKLQs3mzpknYsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPqyLxXGjlrroxqVyrcA07giOvW8C0Zw%2FLDJnUWnMuM4eR%2Bt7lOhE%2B%2BrQUvRFCCyOmjBLHMZ%2BRq6mkCP4ocW7q4suRjIYuTWDrCCB1P368zqpjc%2BDimCyLXiwsWl3Y%2Fz1%2BTAhtuxIb6u9gBQKEKiEqGASsIi9tUbc9T34dd%2FQyidgT2GfmGIxsyb7xDqpX2vlAG9BKbu0mLZoEICC%2Fyas79lCGv4iVrMEeIbkEe7%2B%2FasbNEHsTRei%2FooEaplAy8ooDArk%2FndsH%2BnQRu7gPKywj0DrUSk%2B5dlgbueSKzKjEcf%2BcgOGqHqBsolNnVpv89wPBJp5D3DiBK1NK4CYfjH1ksvBDJyDxDtInFQuJcdJdjxHHOhpjj9Lao61h9iepVxC8PFhgX8rSawgyR2R1srAKQiK0wBbtGDgbObo%2FYMrJ0r3zT5dsRORdEQf63Udh8YSzGH9aAQhdHJ9YPnmVRn9BGn4dvFOuZ5o5gQV83fVxayR%2B%2FvEkNDnRlPUFS4rpS5Mmrc9GH%2FQeS38WoDO7Ju%2F9OHG71%2FMN95SJVgfQ%2B4MI1%2FP39KMLUyVaSt5fmiP%2Fa4u7XY3WQfe9lFSg%2BoTJwGE0afPk5%2FsHWj8S4lfKak5FH%2BSCiC%2BWPTJvtgfhhUNzT2%2FGRxN%2B5esFHJSkYMIvR2sQGOqUBQ0ujM0mpuiri3CPe3eY6VRtakgIA0ynFwcFDR52UZcECWM%2B78WMdHMybijlo4tB%2FyJMwiH5pQ5Z0HNnVqtH8lxtOIo26pB6tolGE7QkaSsfsXhecqLl0wjFUYYWVw4G%2BP1Atg6r2nLoGNdstTceb1jseq3w%2BbleVKZsVDIyCOfmB4vO4bqDl6lo1eDI%2Fh8uMJwxl73PYOwhmA0YvRaDFc%2Bhx%2BbD7&X-Amz-Signature=be8e067a6d2b9f4d8181b779c4bcacd5a4cf2041686a1cac912a6d6054325dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPPCODR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCVIiee50ciI7MhGDW5QJ4REdqA1TXXa%2B7rNHLhX2DrTwIgcyrfTojIQM%2Bj8%2BXFxsK7OZF4JTorVeDKLQs3mzpknYsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPqyLxXGjlrroxqVyrcA07giOvW8C0Zw%2FLDJnUWnMuM4eR%2Bt7lOhE%2B%2BrQUvRFCCyOmjBLHMZ%2BRq6mkCP4ocW7q4suRjIYuTWDrCCB1P368zqpjc%2BDimCyLXiwsWl3Y%2Fz1%2BTAhtuxIb6u9gBQKEKiEqGASsIi9tUbc9T34dd%2FQyidgT2GfmGIxsyb7xDqpX2vlAG9BKbu0mLZoEICC%2Fyas79lCGv4iVrMEeIbkEe7%2B%2FasbNEHsTRei%2FooEaplAy8ooDArk%2FndsH%2BnQRu7gPKywj0DrUSk%2B5dlgbueSKzKjEcf%2BcgOGqHqBsolNnVpv89wPBJp5D3DiBK1NK4CYfjH1ksvBDJyDxDtInFQuJcdJdjxHHOhpjj9Lao61h9iepVxC8PFhgX8rSawgyR2R1srAKQiK0wBbtGDgbObo%2FYMrJ0r3zT5dsRORdEQf63Udh8YSzGH9aAQhdHJ9YPnmVRn9BGn4dvFOuZ5o5gQV83fVxayR%2B%2FvEkNDnRlPUFS4rpS5Mmrc9GH%2FQeS38WoDO7Ju%2F9OHG71%2FMN95SJVgfQ%2B4MI1%2FP39KMLUyVaSt5fmiP%2Fa4u7XY3WQfe9lFSg%2BoTJwGE0afPk5%2FsHWj8S4lfKak5FH%2BSCiC%2BWPTJvtgfhhUNzT2%2FGRxN%2B5esFHJSkYMIvR2sQGOqUBQ0ujM0mpuiri3CPe3eY6VRtakgIA0ynFwcFDR52UZcECWM%2B78WMdHMybijlo4tB%2FyJMwiH5pQ5Z0HNnVqtH8lxtOIo26pB6tolGE7QkaSsfsXhecqLl0wjFUYYWVw4G%2BP1Atg6r2nLoGNdstTceb1jseq3w%2BbleVKZsVDIyCOfmB4vO4bqDl6lo1eDI%2Fh8uMJwxl73PYOwhmA0YvRaDFc%2Bhx%2BbD7&X-Amz-Signature=6c2947f560583cc57e46a7a84c5aa3d7959d40224b68b7fe3286b1f53227b9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPPCODR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCVIiee50ciI7MhGDW5QJ4REdqA1TXXa%2B7rNHLhX2DrTwIgcyrfTojIQM%2Bj8%2BXFxsK7OZF4JTorVeDKLQs3mzpknYsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPqyLxXGjlrroxqVyrcA07giOvW8C0Zw%2FLDJnUWnMuM4eR%2Bt7lOhE%2B%2BrQUvRFCCyOmjBLHMZ%2BRq6mkCP4ocW7q4suRjIYuTWDrCCB1P368zqpjc%2BDimCyLXiwsWl3Y%2Fz1%2BTAhtuxIb6u9gBQKEKiEqGASsIi9tUbc9T34dd%2FQyidgT2GfmGIxsyb7xDqpX2vlAG9BKbu0mLZoEICC%2Fyas79lCGv4iVrMEeIbkEe7%2B%2FasbNEHsTRei%2FooEaplAy8ooDArk%2FndsH%2BnQRu7gPKywj0DrUSk%2B5dlgbueSKzKjEcf%2BcgOGqHqBsolNnVpv89wPBJp5D3DiBK1NK4CYfjH1ksvBDJyDxDtInFQuJcdJdjxHHOhpjj9Lao61h9iepVxC8PFhgX8rSawgyR2R1srAKQiK0wBbtGDgbObo%2FYMrJ0r3zT5dsRORdEQf63Udh8YSzGH9aAQhdHJ9YPnmVRn9BGn4dvFOuZ5o5gQV83fVxayR%2B%2FvEkNDnRlPUFS4rpS5Mmrc9GH%2FQeS38WoDO7Ju%2F9OHG71%2FMN95SJVgfQ%2B4MI1%2FP39KMLUyVaSt5fmiP%2Fa4u7XY3WQfe9lFSg%2BoTJwGE0afPk5%2FsHWj8S4lfKak5FH%2BSCiC%2BWPTJvtgfhhUNzT2%2FGRxN%2B5esFHJSkYMIvR2sQGOqUBQ0ujM0mpuiri3CPe3eY6VRtakgIA0ynFwcFDR52UZcECWM%2B78WMdHMybijlo4tB%2FyJMwiH5pQ5Z0HNnVqtH8lxtOIo26pB6tolGE7QkaSsfsXhecqLl0wjFUYYWVw4G%2BP1Atg6r2nLoGNdstTceb1jseq3w%2BbleVKZsVDIyCOfmB4vO4bqDl6lo1eDI%2Fh8uMJwxl73PYOwhmA0YvRaDFc%2Bhx%2BbD7&X-Amz-Signature=0031d01b2d3c313190955410c0ac3382d80a086a5af0b2c181248e2b805ac647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPPCODR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCVIiee50ciI7MhGDW5QJ4REdqA1TXXa%2B7rNHLhX2DrTwIgcyrfTojIQM%2Bj8%2BXFxsK7OZF4JTorVeDKLQs3mzpknYsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPqyLxXGjlrroxqVyrcA07giOvW8C0Zw%2FLDJnUWnMuM4eR%2Bt7lOhE%2B%2BrQUvRFCCyOmjBLHMZ%2BRq6mkCP4ocW7q4suRjIYuTWDrCCB1P368zqpjc%2BDimCyLXiwsWl3Y%2Fz1%2BTAhtuxIb6u9gBQKEKiEqGASsIi9tUbc9T34dd%2FQyidgT2GfmGIxsyb7xDqpX2vlAG9BKbu0mLZoEICC%2Fyas79lCGv4iVrMEeIbkEe7%2B%2FasbNEHsTRei%2FooEaplAy8ooDArk%2FndsH%2BnQRu7gPKywj0DrUSk%2B5dlgbueSKzKjEcf%2BcgOGqHqBsolNnVpv89wPBJp5D3DiBK1NK4CYfjH1ksvBDJyDxDtInFQuJcdJdjxHHOhpjj9Lao61h9iepVxC8PFhgX8rSawgyR2R1srAKQiK0wBbtGDgbObo%2FYMrJ0r3zT5dsRORdEQf63Udh8YSzGH9aAQhdHJ9YPnmVRn9BGn4dvFOuZ5o5gQV83fVxayR%2B%2FvEkNDnRlPUFS4rpS5Mmrc9GH%2FQeS38WoDO7Ju%2F9OHG71%2FMN95SJVgfQ%2B4MI1%2FP39KMLUyVaSt5fmiP%2Fa4u7XY3WQfe9lFSg%2BoTJwGE0afPk5%2FsHWj8S4lfKak5FH%2BSCiC%2BWPTJvtgfhhUNzT2%2FGRxN%2B5esFHJSkYMIvR2sQGOqUBQ0ujM0mpuiri3CPe3eY6VRtakgIA0ynFwcFDR52UZcECWM%2B78WMdHMybijlo4tB%2FyJMwiH5pQ5Z0HNnVqtH8lxtOIo26pB6tolGE7QkaSsfsXhecqLl0wjFUYYWVw4G%2BP1Atg6r2nLoGNdstTceb1jseq3w%2BbleVKZsVDIyCOfmB4vO4bqDl6lo1eDI%2Fh8uMJwxl73PYOwhmA0YvRaDFc%2Bhx%2BbD7&X-Amz-Signature=dbfac6ac77f98d2ec177d248d1d65da43e31bcdf2e6dadf90b2d3bf973be2fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
