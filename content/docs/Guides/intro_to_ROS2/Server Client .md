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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NS7AP6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGTxoYNiTBNC3w3aUxDf5d2RfyudCT1d27EkVjk40zNcAiBEhDV9gyMdKbTySnzqetX8UUPS2fW77RxG1S%2B4FuFfxir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMX17MhVqVrHYz5cdOKtwD9lqMlCDRfkPIfh9LnK7DERiIfIKBVZVwy5Cy9CUg090mv%2BdbNlgtgWeUyUVY2RWj4dBfUvTC%2FqSe48XtLuGZwIAed10uTZudaXA7MqANedmih3ugf7t985U863kVyJ5BX9FMb%2BZC4oQ8hCzCdO%2BxjEH4%2FwbJ0cEImefaRUGJJ5OsE%2B41Ygw9vLQoYbp%2Fpd4DUpfz7KxFFEQNUCIB4%2BvvHrgCD%2FUv73kAYahPb%2Bcx7uS%2FVUEkgYEg%2FxQZ9of1%2BvsS82a0%2BPMVgezsfTDSmMHsqt1gmZPOY66GSE6lfu10cufIL74%2Fu5GmPsKuwTvLzBRqDss6fZRBgM2YoYQOmqYbPBVmqOnkTIOLO4JOF5W1je9NS7IaAK9b4JRFo6XRnGCdBOLJFITLUlUuBaAEfa6SL0d9UKEfS48B%2FUpBIaPDi7wEgvHDLvbIzWlCnlg%2Fo5LqfgjkcLBhbt788yngyUTHzD7QM0w9t9HCsFkPJEVOzXhCuumBM3KTWnw%2FS5VJ8q%2Ff3jJB5xtY%2BAog5F2rTw9T%2BaaLKSfV3AaeGSjnK0t7LJy0oclbK51BGFijcdl7IFIQr4s%2BJmu%2BxiPXAv025YTq0XYdj8hPvwIb%2FrcC3R%2B7Ud3oAnaNlEBTMBP36ZEwkoSWwQY6pgGXNrR1iGDYkK6mHpj6cIVzxuY%2BhX2OtehiHT2pT%2BS9%2BwbAH%2FAfoorSiBA7OVrjSPq2BetwkAqStLiQcN4J4C5JetmNX01WqS%2FPAGRZh3yEtBJVeC0jedIb69e%2Bxen7dG2Il8wJR5r%2BH0QCPp%2FND%2FlMK4c1gsG%2FRlEKZ%2BGXcNlsOnl7L5bhEVEmWYbNuru0vfkee65gFcR7PlldfGK8Vj0sTs%2F7hx1U&X-Amz-Signature=039196ea0fa0c7f447b7f84df5c955818e60bdb0d5717502e7721f6cf18403e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NS7AP6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGTxoYNiTBNC3w3aUxDf5d2RfyudCT1d27EkVjk40zNcAiBEhDV9gyMdKbTySnzqetX8UUPS2fW77RxG1S%2B4FuFfxir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMX17MhVqVrHYz5cdOKtwD9lqMlCDRfkPIfh9LnK7DERiIfIKBVZVwy5Cy9CUg090mv%2BdbNlgtgWeUyUVY2RWj4dBfUvTC%2FqSe48XtLuGZwIAed10uTZudaXA7MqANedmih3ugf7t985U863kVyJ5BX9FMb%2BZC4oQ8hCzCdO%2BxjEH4%2FwbJ0cEImefaRUGJJ5OsE%2B41Ygw9vLQoYbp%2Fpd4DUpfz7KxFFEQNUCIB4%2BvvHrgCD%2FUv73kAYahPb%2Bcx7uS%2FVUEkgYEg%2FxQZ9of1%2BvsS82a0%2BPMVgezsfTDSmMHsqt1gmZPOY66GSE6lfu10cufIL74%2Fu5GmPsKuwTvLzBRqDss6fZRBgM2YoYQOmqYbPBVmqOnkTIOLO4JOF5W1je9NS7IaAK9b4JRFo6XRnGCdBOLJFITLUlUuBaAEfa6SL0d9UKEfS48B%2FUpBIaPDi7wEgvHDLvbIzWlCnlg%2Fo5LqfgjkcLBhbt788yngyUTHzD7QM0w9t9HCsFkPJEVOzXhCuumBM3KTWnw%2FS5VJ8q%2Ff3jJB5xtY%2BAog5F2rTw9T%2BaaLKSfV3AaeGSjnK0t7LJy0oclbK51BGFijcdl7IFIQr4s%2BJmu%2BxiPXAv025YTq0XYdj8hPvwIb%2FrcC3R%2B7Ud3oAnaNlEBTMBP36ZEwkoSWwQY6pgGXNrR1iGDYkK6mHpj6cIVzxuY%2BhX2OtehiHT2pT%2BS9%2BwbAH%2FAfoorSiBA7OVrjSPq2BetwkAqStLiQcN4J4C5JetmNX01WqS%2FPAGRZh3yEtBJVeC0jedIb69e%2Bxen7dG2Il8wJR5r%2BH0QCPp%2FND%2FlMK4c1gsG%2FRlEKZ%2BGXcNlsOnl7L5bhEVEmWYbNuru0vfkee65gFcR7PlldfGK8Vj0sTs%2F7hx1U&X-Amz-Signature=46002a864f6f46dc6690748ffb60f04bd3bf585c2c1930ebd274a763e1b3af7a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NS7AP6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGTxoYNiTBNC3w3aUxDf5d2RfyudCT1d27EkVjk40zNcAiBEhDV9gyMdKbTySnzqetX8UUPS2fW77RxG1S%2B4FuFfxir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMX17MhVqVrHYz5cdOKtwD9lqMlCDRfkPIfh9LnK7DERiIfIKBVZVwy5Cy9CUg090mv%2BdbNlgtgWeUyUVY2RWj4dBfUvTC%2FqSe48XtLuGZwIAed10uTZudaXA7MqANedmih3ugf7t985U863kVyJ5BX9FMb%2BZC4oQ8hCzCdO%2BxjEH4%2FwbJ0cEImefaRUGJJ5OsE%2B41Ygw9vLQoYbp%2Fpd4DUpfz7KxFFEQNUCIB4%2BvvHrgCD%2FUv73kAYahPb%2Bcx7uS%2FVUEkgYEg%2FxQZ9of1%2BvsS82a0%2BPMVgezsfTDSmMHsqt1gmZPOY66GSE6lfu10cufIL74%2Fu5GmPsKuwTvLzBRqDss6fZRBgM2YoYQOmqYbPBVmqOnkTIOLO4JOF5W1je9NS7IaAK9b4JRFo6XRnGCdBOLJFITLUlUuBaAEfa6SL0d9UKEfS48B%2FUpBIaPDi7wEgvHDLvbIzWlCnlg%2Fo5LqfgjkcLBhbt788yngyUTHzD7QM0w9t9HCsFkPJEVOzXhCuumBM3KTWnw%2FS5VJ8q%2Ff3jJB5xtY%2BAog5F2rTw9T%2BaaLKSfV3AaeGSjnK0t7LJy0oclbK51BGFijcdl7IFIQr4s%2BJmu%2BxiPXAv025YTq0XYdj8hPvwIb%2FrcC3R%2B7Ud3oAnaNlEBTMBP36ZEwkoSWwQY6pgGXNrR1iGDYkK6mHpj6cIVzxuY%2BhX2OtehiHT2pT%2BS9%2BwbAH%2FAfoorSiBA7OVrjSPq2BetwkAqStLiQcN4J4C5JetmNX01WqS%2FPAGRZh3yEtBJVeC0jedIb69e%2Bxen7dG2Il8wJR5r%2BH0QCPp%2FND%2FlMK4c1gsG%2FRlEKZ%2BGXcNlsOnl7L5bhEVEmWYbNuru0vfkee65gFcR7PlldfGK8Vj0sTs%2F7hx1U&X-Amz-Signature=c48afd58eb3eb7a3cb8fd4fc32d52124c1107f1abb7f6a92dcfe7846f36626a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NS7AP6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGTxoYNiTBNC3w3aUxDf5d2RfyudCT1d27EkVjk40zNcAiBEhDV9gyMdKbTySnzqetX8UUPS2fW77RxG1S%2B4FuFfxir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMX17MhVqVrHYz5cdOKtwD9lqMlCDRfkPIfh9LnK7DERiIfIKBVZVwy5Cy9CUg090mv%2BdbNlgtgWeUyUVY2RWj4dBfUvTC%2FqSe48XtLuGZwIAed10uTZudaXA7MqANedmih3ugf7t985U863kVyJ5BX9FMb%2BZC4oQ8hCzCdO%2BxjEH4%2FwbJ0cEImefaRUGJJ5OsE%2B41Ygw9vLQoYbp%2Fpd4DUpfz7KxFFEQNUCIB4%2BvvHrgCD%2FUv73kAYahPb%2Bcx7uS%2FVUEkgYEg%2FxQZ9of1%2BvsS82a0%2BPMVgezsfTDSmMHsqt1gmZPOY66GSE6lfu10cufIL74%2Fu5GmPsKuwTvLzBRqDss6fZRBgM2YoYQOmqYbPBVmqOnkTIOLO4JOF5W1je9NS7IaAK9b4JRFo6XRnGCdBOLJFITLUlUuBaAEfa6SL0d9UKEfS48B%2FUpBIaPDi7wEgvHDLvbIzWlCnlg%2Fo5LqfgjkcLBhbt788yngyUTHzD7QM0w9t9HCsFkPJEVOzXhCuumBM3KTWnw%2FS5VJ8q%2Ff3jJB5xtY%2BAog5F2rTw9T%2BaaLKSfV3AaeGSjnK0t7LJy0oclbK51BGFijcdl7IFIQr4s%2BJmu%2BxiPXAv025YTq0XYdj8hPvwIb%2FrcC3R%2B7Ud3oAnaNlEBTMBP36ZEwkoSWwQY6pgGXNrR1iGDYkK6mHpj6cIVzxuY%2BhX2OtehiHT2pT%2BS9%2BwbAH%2FAfoorSiBA7OVrjSPq2BetwkAqStLiQcN4J4C5JetmNX01WqS%2FPAGRZh3yEtBJVeC0jedIb69e%2Bxen7dG2Il8wJR5r%2BH0QCPp%2FND%2FlMK4c1gsG%2FRlEKZ%2BGXcNlsOnl7L5bhEVEmWYbNuru0vfkee65gFcR7PlldfGK8Vj0sTs%2F7hx1U&X-Amz-Signature=0af180ea44a16a6467c9e25914867b9c6f76bdcae9f1f6db3abd8d6ca0a8986d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NS7AP6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGTxoYNiTBNC3w3aUxDf5d2RfyudCT1d27EkVjk40zNcAiBEhDV9gyMdKbTySnzqetX8UUPS2fW77RxG1S%2B4FuFfxir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMX17MhVqVrHYz5cdOKtwD9lqMlCDRfkPIfh9LnK7DERiIfIKBVZVwy5Cy9CUg090mv%2BdbNlgtgWeUyUVY2RWj4dBfUvTC%2FqSe48XtLuGZwIAed10uTZudaXA7MqANedmih3ugf7t985U863kVyJ5BX9FMb%2BZC4oQ8hCzCdO%2BxjEH4%2FwbJ0cEImefaRUGJJ5OsE%2B41Ygw9vLQoYbp%2Fpd4DUpfz7KxFFEQNUCIB4%2BvvHrgCD%2FUv73kAYahPb%2Bcx7uS%2FVUEkgYEg%2FxQZ9of1%2BvsS82a0%2BPMVgezsfTDSmMHsqt1gmZPOY66GSE6lfu10cufIL74%2Fu5GmPsKuwTvLzBRqDss6fZRBgM2YoYQOmqYbPBVmqOnkTIOLO4JOF5W1je9NS7IaAK9b4JRFo6XRnGCdBOLJFITLUlUuBaAEfa6SL0d9UKEfS48B%2FUpBIaPDi7wEgvHDLvbIzWlCnlg%2Fo5LqfgjkcLBhbt788yngyUTHzD7QM0w9t9HCsFkPJEVOzXhCuumBM3KTWnw%2FS5VJ8q%2Ff3jJB5xtY%2BAog5F2rTw9T%2BaaLKSfV3AaeGSjnK0t7LJy0oclbK51BGFijcdl7IFIQr4s%2BJmu%2BxiPXAv025YTq0XYdj8hPvwIb%2FrcC3R%2B7Ud3oAnaNlEBTMBP36ZEwkoSWwQY6pgGXNrR1iGDYkK6mHpj6cIVzxuY%2BhX2OtehiHT2pT%2BS9%2BwbAH%2FAfoorSiBA7OVrjSPq2BetwkAqStLiQcN4J4C5JetmNX01WqS%2FPAGRZh3yEtBJVeC0jedIb69e%2Bxen7dG2Il8wJR5r%2BH0QCPp%2FND%2FlMK4c1gsG%2FRlEKZ%2BGXcNlsOnl7L5bhEVEmWYbNuru0vfkee65gFcR7PlldfGK8Vj0sTs%2F7hx1U&X-Amz-Signature=f2179b1c5bdf97f2903ffe6c619d51ad42356a93f29b108c693f4a66103b6c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
