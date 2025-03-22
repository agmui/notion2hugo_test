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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWQIUOG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFKaxB5G6pglHddrz97UJjbUSNf%2Fz0HWCgc72lB4cTlBAiEAm%2FoZlguNxYD4gVtyw%2FBdnJ%2B96vaJDrriC6ASQT2g0b8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMBTkJZvye3qyTEjyrcA4LmlSWeFZvhZw8y5H1%2FAc02AOwUPQ957Qg3R0h5PsYxoX97e0n0EDjcLt7Y%2BDh4OxL%2F%2FV7AwLVkDiqBSnTwjIOzuz2mBUtKqlc8AKrpdGl4tMVu2P%2BcAbE2smtWfsSRQQdw4Yb5M%2Br8G55t6YaZC1UrG0PhfcnMVMm4Go6MYmgCBeWGHTFfVVuG2hMH2RevB%2BKyRpb9sWc7RUSin%2BJa664KA5ZsKgbAio22c18u0PzgKyIO1bHENy3H6Hi9PW8Ei%2BdFj4z9yIejgkiBW%2Ftn1V23pSkZcQLiEfimOqkh8%2FhoElj%2FCA%2F5Dj2ywwn0XrRWR6XKTxRevOG0qvuU%2BaSIabnPFzAbGc3fn6mYWorfb%2BrsxJbllRMQIQ1Vkkno9vfQKH8oD33NLxp0suiVtw099oY6X31u3lAbZqGW9H6V1QvfMuouB6uijnnFPGS6Mml6wC78u1fpAxFq0NK8VaZGcZknHq%2Fyiz4ju%2FNVEVkBrpjYx%2FJeXJ6vaWigSh%2F7sBYdeTetX%2BcbrYX3QxOHnSQCAHsYaSjpRSEqAKQfyQtqTkzDf4Q7eONnxZGMpsvVkCczbk5zBM4cuChfH9IW0Q7OhyOZuS55hI5Rsipg8Q7yJOfSy6b7E4G1prTDc8hQMOqt%2Br4GOqUBam1nuGcwXeoBagftcbeNiM4u2sOvIZKfQZvhE0opsfWA7%2BiLizsdhTnNKg4%2F9E7%2BIXlDyCRh%2B2k1S80Dte8RFj514bsiqnHrEI1nwsueaaLDo6t8JWX0byAUlcy1hkrMyv9F%2B9W0VmMPZ%2Fap%2Frm9k%2FF23mEh2q4f68nyEZDucW8DRX4G4HrFs2qbq%2FnGUYvoLwh7x5ub9OiVcRkzEh2hx5CNpvv1&X-Amz-Signature=e1038b416af459f1bb2cf5e3c1bfcce6c1e921c70322d45dd7ab3d12570fb163&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWQIUOG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFKaxB5G6pglHddrz97UJjbUSNf%2Fz0HWCgc72lB4cTlBAiEAm%2FoZlguNxYD4gVtyw%2FBdnJ%2B96vaJDrriC6ASQT2g0b8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMBTkJZvye3qyTEjyrcA4LmlSWeFZvhZw8y5H1%2FAc02AOwUPQ957Qg3R0h5PsYxoX97e0n0EDjcLt7Y%2BDh4OxL%2F%2FV7AwLVkDiqBSnTwjIOzuz2mBUtKqlc8AKrpdGl4tMVu2P%2BcAbE2smtWfsSRQQdw4Yb5M%2Br8G55t6YaZC1UrG0PhfcnMVMm4Go6MYmgCBeWGHTFfVVuG2hMH2RevB%2BKyRpb9sWc7RUSin%2BJa664KA5ZsKgbAio22c18u0PzgKyIO1bHENy3H6Hi9PW8Ei%2BdFj4z9yIejgkiBW%2Ftn1V23pSkZcQLiEfimOqkh8%2FhoElj%2FCA%2F5Dj2ywwn0XrRWR6XKTxRevOG0qvuU%2BaSIabnPFzAbGc3fn6mYWorfb%2BrsxJbllRMQIQ1Vkkno9vfQKH8oD33NLxp0suiVtw099oY6X31u3lAbZqGW9H6V1QvfMuouB6uijnnFPGS6Mml6wC78u1fpAxFq0NK8VaZGcZknHq%2Fyiz4ju%2FNVEVkBrpjYx%2FJeXJ6vaWigSh%2F7sBYdeTetX%2BcbrYX3QxOHnSQCAHsYaSjpRSEqAKQfyQtqTkzDf4Q7eONnxZGMpsvVkCczbk5zBM4cuChfH9IW0Q7OhyOZuS55hI5Rsipg8Q7yJOfSy6b7E4G1prTDc8hQMOqt%2Br4GOqUBam1nuGcwXeoBagftcbeNiM4u2sOvIZKfQZvhE0opsfWA7%2BiLizsdhTnNKg4%2F9E7%2BIXlDyCRh%2B2k1S80Dte8RFj514bsiqnHrEI1nwsueaaLDo6t8JWX0byAUlcy1hkrMyv9F%2B9W0VmMPZ%2Fap%2Frm9k%2FF23mEh2q4f68nyEZDucW8DRX4G4HrFs2qbq%2FnGUYvoLwh7x5ub9OiVcRkzEh2hx5CNpvv1&X-Amz-Signature=1a7ef78d82d88fff9ebec7aa3cbdb56cfb7cf57481cbba7d6193c6d5908cbb8e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWQIUOG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFKaxB5G6pglHddrz97UJjbUSNf%2Fz0HWCgc72lB4cTlBAiEAm%2FoZlguNxYD4gVtyw%2FBdnJ%2B96vaJDrriC6ASQT2g0b8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMBTkJZvye3qyTEjyrcA4LmlSWeFZvhZw8y5H1%2FAc02AOwUPQ957Qg3R0h5PsYxoX97e0n0EDjcLt7Y%2BDh4OxL%2F%2FV7AwLVkDiqBSnTwjIOzuz2mBUtKqlc8AKrpdGl4tMVu2P%2BcAbE2smtWfsSRQQdw4Yb5M%2Br8G55t6YaZC1UrG0PhfcnMVMm4Go6MYmgCBeWGHTFfVVuG2hMH2RevB%2BKyRpb9sWc7RUSin%2BJa664KA5ZsKgbAio22c18u0PzgKyIO1bHENy3H6Hi9PW8Ei%2BdFj4z9yIejgkiBW%2Ftn1V23pSkZcQLiEfimOqkh8%2FhoElj%2FCA%2F5Dj2ywwn0XrRWR6XKTxRevOG0qvuU%2BaSIabnPFzAbGc3fn6mYWorfb%2BrsxJbllRMQIQ1Vkkno9vfQKH8oD33NLxp0suiVtw099oY6X31u3lAbZqGW9H6V1QvfMuouB6uijnnFPGS6Mml6wC78u1fpAxFq0NK8VaZGcZknHq%2Fyiz4ju%2FNVEVkBrpjYx%2FJeXJ6vaWigSh%2F7sBYdeTetX%2BcbrYX3QxOHnSQCAHsYaSjpRSEqAKQfyQtqTkzDf4Q7eONnxZGMpsvVkCczbk5zBM4cuChfH9IW0Q7OhyOZuS55hI5Rsipg8Q7yJOfSy6b7E4G1prTDc8hQMOqt%2Br4GOqUBam1nuGcwXeoBagftcbeNiM4u2sOvIZKfQZvhE0opsfWA7%2BiLizsdhTnNKg4%2F9E7%2BIXlDyCRh%2B2k1S80Dte8RFj514bsiqnHrEI1nwsueaaLDo6t8JWX0byAUlcy1hkrMyv9F%2B9W0VmMPZ%2Fap%2Frm9k%2FF23mEh2q4f68nyEZDucW8DRX4G4HrFs2qbq%2FnGUYvoLwh7x5ub9OiVcRkzEh2hx5CNpvv1&X-Amz-Signature=b14cbb2c298187763514902b53953a6df2be3739d956d11f80c6674265e74258&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWQIUOG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFKaxB5G6pglHddrz97UJjbUSNf%2Fz0HWCgc72lB4cTlBAiEAm%2FoZlguNxYD4gVtyw%2FBdnJ%2B96vaJDrriC6ASQT2g0b8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMBTkJZvye3qyTEjyrcA4LmlSWeFZvhZw8y5H1%2FAc02AOwUPQ957Qg3R0h5PsYxoX97e0n0EDjcLt7Y%2BDh4OxL%2F%2FV7AwLVkDiqBSnTwjIOzuz2mBUtKqlc8AKrpdGl4tMVu2P%2BcAbE2smtWfsSRQQdw4Yb5M%2Br8G55t6YaZC1UrG0PhfcnMVMm4Go6MYmgCBeWGHTFfVVuG2hMH2RevB%2BKyRpb9sWc7RUSin%2BJa664KA5ZsKgbAio22c18u0PzgKyIO1bHENy3H6Hi9PW8Ei%2BdFj4z9yIejgkiBW%2Ftn1V23pSkZcQLiEfimOqkh8%2FhoElj%2FCA%2F5Dj2ywwn0XrRWR6XKTxRevOG0qvuU%2BaSIabnPFzAbGc3fn6mYWorfb%2BrsxJbllRMQIQ1Vkkno9vfQKH8oD33NLxp0suiVtw099oY6X31u3lAbZqGW9H6V1QvfMuouB6uijnnFPGS6Mml6wC78u1fpAxFq0NK8VaZGcZknHq%2Fyiz4ju%2FNVEVkBrpjYx%2FJeXJ6vaWigSh%2F7sBYdeTetX%2BcbrYX3QxOHnSQCAHsYaSjpRSEqAKQfyQtqTkzDf4Q7eONnxZGMpsvVkCczbk5zBM4cuChfH9IW0Q7OhyOZuS55hI5Rsipg8Q7yJOfSy6b7E4G1prTDc8hQMOqt%2Br4GOqUBam1nuGcwXeoBagftcbeNiM4u2sOvIZKfQZvhE0opsfWA7%2BiLizsdhTnNKg4%2F9E7%2BIXlDyCRh%2B2k1S80Dte8RFj514bsiqnHrEI1nwsueaaLDo6t8JWX0byAUlcy1hkrMyv9F%2B9W0VmMPZ%2Fap%2Frm9k%2FF23mEh2q4f68nyEZDucW8DRX4G4HrFs2qbq%2FnGUYvoLwh7x5ub9OiVcRkzEh2hx5CNpvv1&X-Amz-Signature=036a0966672bb9f97df2ca8d4dba19fcee81d90412b84d841082ee98496db4c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWQIUOG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFKaxB5G6pglHddrz97UJjbUSNf%2Fz0HWCgc72lB4cTlBAiEAm%2FoZlguNxYD4gVtyw%2FBdnJ%2B96vaJDrriC6ASQT2g0b8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMBTkJZvye3qyTEjyrcA4LmlSWeFZvhZw8y5H1%2FAc02AOwUPQ957Qg3R0h5PsYxoX97e0n0EDjcLt7Y%2BDh4OxL%2F%2FV7AwLVkDiqBSnTwjIOzuz2mBUtKqlc8AKrpdGl4tMVu2P%2BcAbE2smtWfsSRQQdw4Yb5M%2Br8G55t6YaZC1UrG0PhfcnMVMm4Go6MYmgCBeWGHTFfVVuG2hMH2RevB%2BKyRpb9sWc7RUSin%2BJa664KA5ZsKgbAio22c18u0PzgKyIO1bHENy3H6Hi9PW8Ei%2BdFj4z9yIejgkiBW%2Ftn1V23pSkZcQLiEfimOqkh8%2FhoElj%2FCA%2F5Dj2ywwn0XrRWR6XKTxRevOG0qvuU%2BaSIabnPFzAbGc3fn6mYWorfb%2BrsxJbllRMQIQ1Vkkno9vfQKH8oD33NLxp0suiVtw099oY6X31u3lAbZqGW9H6V1QvfMuouB6uijnnFPGS6Mml6wC78u1fpAxFq0NK8VaZGcZknHq%2Fyiz4ju%2FNVEVkBrpjYx%2FJeXJ6vaWigSh%2F7sBYdeTetX%2BcbrYX3QxOHnSQCAHsYaSjpRSEqAKQfyQtqTkzDf4Q7eONnxZGMpsvVkCczbk5zBM4cuChfH9IW0Q7OhyOZuS55hI5Rsipg8Q7yJOfSy6b7E4G1prTDc8hQMOqt%2Br4GOqUBam1nuGcwXeoBagftcbeNiM4u2sOvIZKfQZvhE0opsfWA7%2BiLizsdhTnNKg4%2F9E7%2BIXlDyCRh%2B2k1S80Dte8RFj514bsiqnHrEI1nwsueaaLDo6t8JWX0byAUlcy1hkrMyv9F%2B9W0VmMPZ%2Fap%2Frm9k%2FF23mEh2q4f68nyEZDucW8DRX4G4HrFs2qbq%2FnGUYvoLwh7x5ub9OiVcRkzEh2hx5CNpvv1&X-Amz-Signature=7aeca534e9446f7634b4accb1519b508d82122f9fbda8073aff4a5f6f716cb02&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
