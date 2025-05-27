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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBDZMGD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNwepDnB4ZL3Ms5Fv4DZl3EWTegWxQ7tluZvqdu19U%2BAiAI8FhI1A1TIH9IQgNPl2oG8lajQhocGBJFL7B4GefWDir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMCRcHFMAvTdTPyq3IKtwDb%2F%2BVox2hn19ye%2B9r1CtuadnUXea6wrDWAll2aCRAmttejKXzncJAH632Z%2BEshYThRE1Eg9tADUXndfmich4sGWBkoweZ9MU5l%2BdHht6Bcm7aw2JTcgtW7inIsdZINZoVxYxnX4Ty3D3LgWumAMc9qsHCAKpU9WcvDzGvmaGTExB56SOAs%2B%2FH6lpB8CuDBT%2FjPwcueGTxvaAa8Ane3zqZMqwCFtofmXUo356k8NowegC9cNwQ2bHnn8p7jAJXsh9tIf%2B5zgixul3VY0PSFQkUeDwXVrU2cpgMPJAOASEsKjG3Bq2Mrghp6kMN6H0sDY%2By2qCVYOQgUZyYPef13u2v%2B18TaQMa40DA6KMiNVb6RwH5UPB9WkMhs9TYrF%2BMNoM%2FR94mnJ3GMpUzc9vilvKmGDY%2FMzKjZc6UnZ3nToSGjyquTBy3fuFfYduVi7W189j%2BeSoyIvQxuUaiySYQp%2BNHAY9aiwT3d8DHwoyrkSAMj2cl5qsedsVJqwUpEh37zB%2BsvZUzLdYJ6HJi8gwl0PD3ZclFWcvp28KqpgWbH5cw%2FcX0Ljl1xVgshdXhADfSkcejoQDjFMGBaxKeXSfkC7NltTWAmpkAr3Lcgs69N0e5%2FG9AIDglk30L%2BIHyo%2B4whPzWwQY6pgF%2BJ%2FfBlhqZvCGfwi8HfP6gAWuaAlf5Gw8e5H4TY42pZM%2FDOetD28K6jfXCqsmTN3hKfskOlGNeTXKbyNSqZB4zuHnrO%2FWt6LkqaPWYtgHHhpJrXLlRP59A45I79wysfZP%2B7VmSixnicd4J4WXBdhaAuJ8T8wId0EpaAyBBWPImlui2oKYXRJa1WK20lYJl4cYGZuqFv%2FuoUIqe%2Bzk3E1Ro3vQxgguM&X-Amz-Signature=953e8faa6379a0c230e3ab60602b9668534c0c24e4b293db61dea8490b61ce3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBDZMGD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNwepDnB4ZL3Ms5Fv4DZl3EWTegWxQ7tluZvqdu19U%2BAiAI8FhI1A1TIH9IQgNPl2oG8lajQhocGBJFL7B4GefWDir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMCRcHFMAvTdTPyq3IKtwDb%2F%2BVox2hn19ye%2B9r1CtuadnUXea6wrDWAll2aCRAmttejKXzncJAH632Z%2BEshYThRE1Eg9tADUXndfmich4sGWBkoweZ9MU5l%2BdHht6Bcm7aw2JTcgtW7inIsdZINZoVxYxnX4Ty3D3LgWumAMc9qsHCAKpU9WcvDzGvmaGTExB56SOAs%2B%2FH6lpB8CuDBT%2FjPwcueGTxvaAa8Ane3zqZMqwCFtofmXUo356k8NowegC9cNwQ2bHnn8p7jAJXsh9tIf%2B5zgixul3VY0PSFQkUeDwXVrU2cpgMPJAOASEsKjG3Bq2Mrghp6kMN6H0sDY%2By2qCVYOQgUZyYPef13u2v%2B18TaQMa40DA6KMiNVb6RwH5UPB9WkMhs9TYrF%2BMNoM%2FR94mnJ3GMpUzc9vilvKmGDY%2FMzKjZc6UnZ3nToSGjyquTBy3fuFfYduVi7W189j%2BeSoyIvQxuUaiySYQp%2BNHAY9aiwT3d8DHwoyrkSAMj2cl5qsedsVJqwUpEh37zB%2BsvZUzLdYJ6HJi8gwl0PD3ZclFWcvp28KqpgWbH5cw%2FcX0Ljl1xVgshdXhADfSkcejoQDjFMGBaxKeXSfkC7NltTWAmpkAr3Lcgs69N0e5%2FG9AIDglk30L%2BIHyo%2B4whPzWwQY6pgF%2BJ%2FfBlhqZvCGfwi8HfP6gAWuaAlf5Gw8e5H4TY42pZM%2FDOetD28K6jfXCqsmTN3hKfskOlGNeTXKbyNSqZB4zuHnrO%2FWt6LkqaPWYtgHHhpJrXLlRP59A45I79wysfZP%2B7VmSixnicd4J4WXBdhaAuJ8T8wId0EpaAyBBWPImlui2oKYXRJa1WK20lYJl4cYGZuqFv%2FuoUIqe%2Bzk3E1Ro3vQxgguM&X-Amz-Signature=2d0e3112d9b0bbd6dc94a7758ca48e910b27b5c7462994850ed676a22847da33&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBDZMGD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNwepDnB4ZL3Ms5Fv4DZl3EWTegWxQ7tluZvqdu19U%2BAiAI8FhI1A1TIH9IQgNPl2oG8lajQhocGBJFL7B4GefWDir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMCRcHFMAvTdTPyq3IKtwDb%2F%2BVox2hn19ye%2B9r1CtuadnUXea6wrDWAll2aCRAmttejKXzncJAH632Z%2BEshYThRE1Eg9tADUXndfmich4sGWBkoweZ9MU5l%2BdHht6Bcm7aw2JTcgtW7inIsdZINZoVxYxnX4Ty3D3LgWumAMc9qsHCAKpU9WcvDzGvmaGTExB56SOAs%2B%2FH6lpB8CuDBT%2FjPwcueGTxvaAa8Ane3zqZMqwCFtofmXUo356k8NowegC9cNwQ2bHnn8p7jAJXsh9tIf%2B5zgixul3VY0PSFQkUeDwXVrU2cpgMPJAOASEsKjG3Bq2Mrghp6kMN6H0sDY%2By2qCVYOQgUZyYPef13u2v%2B18TaQMa40DA6KMiNVb6RwH5UPB9WkMhs9TYrF%2BMNoM%2FR94mnJ3GMpUzc9vilvKmGDY%2FMzKjZc6UnZ3nToSGjyquTBy3fuFfYduVi7W189j%2BeSoyIvQxuUaiySYQp%2BNHAY9aiwT3d8DHwoyrkSAMj2cl5qsedsVJqwUpEh37zB%2BsvZUzLdYJ6HJi8gwl0PD3ZclFWcvp28KqpgWbH5cw%2FcX0Ljl1xVgshdXhADfSkcejoQDjFMGBaxKeXSfkC7NltTWAmpkAr3Lcgs69N0e5%2FG9AIDglk30L%2BIHyo%2B4whPzWwQY6pgF%2BJ%2FfBlhqZvCGfwi8HfP6gAWuaAlf5Gw8e5H4TY42pZM%2FDOetD28K6jfXCqsmTN3hKfskOlGNeTXKbyNSqZB4zuHnrO%2FWt6LkqaPWYtgHHhpJrXLlRP59A45I79wysfZP%2B7VmSixnicd4J4WXBdhaAuJ8T8wId0EpaAyBBWPImlui2oKYXRJa1WK20lYJl4cYGZuqFv%2FuoUIqe%2Bzk3E1Ro3vQxgguM&X-Amz-Signature=b61f97c5f048ed1c04b4ce2dbc092c7ac9eef3d74f211c9cede2ba3ca9e5d726&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBDZMGD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNwepDnB4ZL3Ms5Fv4DZl3EWTegWxQ7tluZvqdu19U%2BAiAI8FhI1A1TIH9IQgNPl2oG8lajQhocGBJFL7B4GefWDir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMCRcHFMAvTdTPyq3IKtwDb%2F%2BVox2hn19ye%2B9r1CtuadnUXea6wrDWAll2aCRAmttejKXzncJAH632Z%2BEshYThRE1Eg9tADUXndfmich4sGWBkoweZ9MU5l%2BdHht6Bcm7aw2JTcgtW7inIsdZINZoVxYxnX4Ty3D3LgWumAMc9qsHCAKpU9WcvDzGvmaGTExB56SOAs%2B%2FH6lpB8CuDBT%2FjPwcueGTxvaAa8Ane3zqZMqwCFtofmXUo356k8NowegC9cNwQ2bHnn8p7jAJXsh9tIf%2B5zgixul3VY0PSFQkUeDwXVrU2cpgMPJAOASEsKjG3Bq2Mrghp6kMN6H0sDY%2By2qCVYOQgUZyYPef13u2v%2B18TaQMa40DA6KMiNVb6RwH5UPB9WkMhs9TYrF%2BMNoM%2FR94mnJ3GMpUzc9vilvKmGDY%2FMzKjZc6UnZ3nToSGjyquTBy3fuFfYduVi7W189j%2BeSoyIvQxuUaiySYQp%2BNHAY9aiwT3d8DHwoyrkSAMj2cl5qsedsVJqwUpEh37zB%2BsvZUzLdYJ6HJi8gwl0PD3ZclFWcvp28KqpgWbH5cw%2FcX0Ljl1xVgshdXhADfSkcejoQDjFMGBaxKeXSfkC7NltTWAmpkAr3Lcgs69N0e5%2FG9AIDglk30L%2BIHyo%2B4whPzWwQY6pgF%2BJ%2FfBlhqZvCGfwi8HfP6gAWuaAlf5Gw8e5H4TY42pZM%2FDOetD28K6jfXCqsmTN3hKfskOlGNeTXKbyNSqZB4zuHnrO%2FWt6LkqaPWYtgHHhpJrXLlRP59A45I79wysfZP%2B7VmSixnicd4J4WXBdhaAuJ8T8wId0EpaAyBBWPImlui2oKYXRJa1WK20lYJl4cYGZuqFv%2FuoUIqe%2Bzk3E1Ro3vQxgguM&X-Amz-Signature=6d55140d1ee7de71904e1b26e03682a2324ffd6308ec84e3aab91084ffc0e73a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBDZMGD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNwepDnB4ZL3Ms5Fv4DZl3EWTegWxQ7tluZvqdu19U%2BAiAI8FhI1A1TIH9IQgNPl2oG8lajQhocGBJFL7B4GefWDir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMCRcHFMAvTdTPyq3IKtwDb%2F%2BVox2hn19ye%2B9r1CtuadnUXea6wrDWAll2aCRAmttejKXzncJAH632Z%2BEshYThRE1Eg9tADUXndfmich4sGWBkoweZ9MU5l%2BdHht6Bcm7aw2JTcgtW7inIsdZINZoVxYxnX4Ty3D3LgWumAMc9qsHCAKpU9WcvDzGvmaGTExB56SOAs%2B%2FH6lpB8CuDBT%2FjPwcueGTxvaAa8Ane3zqZMqwCFtofmXUo356k8NowegC9cNwQ2bHnn8p7jAJXsh9tIf%2B5zgixul3VY0PSFQkUeDwXVrU2cpgMPJAOASEsKjG3Bq2Mrghp6kMN6H0sDY%2By2qCVYOQgUZyYPef13u2v%2B18TaQMa40DA6KMiNVb6RwH5UPB9WkMhs9TYrF%2BMNoM%2FR94mnJ3GMpUzc9vilvKmGDY%2FMzKjZc6UnZ3nToSGjyquTBy3fuFfYduVi7W189j%2BeSoyIvQxuUaiySYQp%2BNHAY9aiwT3d8DHwoyrkSAMj2cl5qsedsVJqwUpEh37zB%2BsvZUzLdYJ6HJi8gwl0PD3ZclFWcvp28KqpgWbH5cw%2FcX0Ljl1xVgshdXhADfSkcejoQDjFMGBaxKeXSfkC7NltTWAmpkAr3Lcgs69N0e5%2FG9AIDglk30L%2BIHyo%2B4whPzWwQY6pgF%2BJ%2FfBlhqZvCGfwi8HfP6gAWuaAlf5Gw8e5H4TY42pZM%2FDOetD28K6jfXCqsmTN3hKfskOlGNeTXKbyNSqZB4zuHnrO%2FWt6LkqaPWYtgHHhpJrXLlRP59A45I79wysfZP%2B7VmSixnicd4J4WXBdhaAuJ8T8wId0EpaAyBBWPImlui2oKYXRJa1WK20lYJl4cYGZuqFv%2FuoUIqe%2Bzk3E1Ro3vQxgguM&X-Amz-Signature=5b80ffb77f9e173a15a5b577e55f51430dd846086a4aff54dcdb784ecd118680&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
