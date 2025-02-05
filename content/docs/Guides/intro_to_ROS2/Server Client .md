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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJAPRTP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFyMGnw1SS0EnBrwCRCJO6H3TdKlkBqU%2FzLHSF%2BN2ZvEAiEAsh7PRCC1WXfZokXXxArpXNTLYuu10lirwWyPnGOzvCAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOBra6uSbliFYW%2F1ACrcAzmNIPi0UnggdnAhoGwdc8gjCYMQu3l2txZbyBZFFakAHkDF02R7Q%2FDEIKJzDbGSkL9caqNjTIK1%2B89Qi%2BypytJ2CUWtw93FV828kJuMHpsRp44sDJF5KFHz8qeCBjRqFSXi%2F1fN3%2FUVu4X%2FoB0aMoRyJKz3VgZiEQNrjOCif%2F59fOA6rKAG%2BewzevyueRbBTibRkAXIN07Uzs0NDnQZ%2BElb3LeWYoIY9Gkt9U8feDyV%2FkJdYwzwOZ6p1tOjc3Yoosoi9bjFkssD40%2BN3w2%2BmQZRiXxlyw3S21lox5W%2BwYal0WJBIxe6ORVmNdigiKDHTIfS3tRyxBGB3Y%2B1sCSSEnejJYC1VqHcfYkQyJjDc5HJAuAkdsRU7QdKO%2B6%2FNteqwwv5HL7fu5r6v8qzoeoTWzs7maEj2T04I2Bolm5FTwDvgbUnuKxUwWI8%2FGSTii9AiYooMyL9vOE8UQwSi1lSzZQUPnUKhUZcpLz8lRKdA5Z6s0mSV%2Fp%2BP2SSGCt%2FT96%2F0f6xl5GSyTC4cwDcqhLWXjXQrAU%2B0FXhfGfi%2BUM5k06cQacP6P7OedpCPq1wqQjM%2FO3YYewwLY1q%2FAOMG%2BRyTDQdTPGkCYy3fpjD96mtKB%2Fi82YupKEnFSJduIiqMIeNjb0GOqUBHrXhPR3rW%2BYlW9J6Tf7GYiYw83Dftutyr2rHw5tsMUd6vgMih0LF1oKwuXkHJmflzxrX1JchYMniqWCeRp0eHLuzbiMLGOKYLaPaDzPI8Iord00BA4kq8CKTcRJEyeCb5mIuMkt1ByKL3jGrIQTiNhMVVrXsYymNG5EqArzuhRNXxswki2DOTAJke%2BxWCjxEklDQUwulGsTjBbNgLdjkk38oBhBs&X-Amz-Signature=241356ccb878220769257240e60c468e072dc4e447d2c2df186a5cc0a26ebdf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJAPRTP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFyMGnw1SS0EnBrwCRCJO6H3TdKlkBqU%2FzLHSF%2BN2ZvEAiEAsh7PRCC1WXfZokXXxArpXNTLYuu10lirwWyPnGOzvCAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOBra6uSbliFYW%2F1ACrcAzmNIPi0UnggdnAhoGwdc8gjCYMQu3l2txZbyBZFFakAHkDF02R7Q%2FDEIKJzDbGSkL9caqNjTIK1%2B89Qi%2BypytJ2CUWtw93FV828kJuMHpsRp44sDJF5KFHz8qeCBjRqFSXi%2F1fN3%2FUVu4X%2FoB0aMoRyJKz3VgZiEQNrjOCif%2F59fOA6rKAG%2BewzevyueRbBTibRkAXIN07Uzs0NDnQZ%2BElb3LeWYoIY9Gkt9U8feDyV%2FkJdYwzwOZ6p1tOjc3Yoosoi9bjFkssD40%2BN3w2%2BmQZRiXxlyw3S21lox5W%2BwYal0WJBIxe6ORVmNdigiKDHTIfS3tRyxBGB3Y%2B1sCSSEnejJYC1VqHcfYkQyJjDc5HJAuAkdsRU7QdKO%2B6%2FNteqwwv5HL7fu5r6v8qzoeoTWzs7maEj2T04I2Bolm5FTwDvgbUnuKxUwWI8%2FGSTii9AiYooMyL9vOE8UQwSi1lSzZQUPnUKhUZcpLz8lRKdA5Z6s0mSV%2Fp%2BP2SSGCt%2FT96%2F0f6xl5GSyTC4cwDcqhLWXjXQrAU%2B0FXhfGfi%2BUM5k06cQacP6P7OedpCPq1wqQjM%2FO3YYewwLY1q%2FAOMG%2BRyTDQdTPGkCYy3fpjD96mtKB%2Fi82YupKEnFSJduIiqMIeNjb0GOqUBHrXhPR3rW%2BYlW9J6Tf7GYiYw83Dftutyr2rHw5tsMUd6vgMih0LF1oKwuXkHJmflzxrX1JchYMniqWCeRp0eHLuzbiMLGOKYLaPaDzPI8Iord00BA4kq8CKTcRJEyeCb5mIuMkt1ByKL3jGrIQTiNhMVVrXsYymNG5EqArzuhRNXxswki2DOTAJke%2BxWCjxEklDQUwulGsTjBbNgLdjkk38oBhBs&X-Amz-Signature=224a9ba468ee56f58fba918a60a5fa7e1861371b9e8147cef5933b3e1c1c60f7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJAPRTP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFyMGnw1SS0EnBrwCRCJO6H3TdKlkBqU%2FzLHSF%2BN2ZvEAiEAsh7PRCC1WXfZokXXxArpXNTLYuu10lirwWyPnGOzvCAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOBra6uSbliFYW%2F1ACrcAzmNIPi0UnggdnAhoGwdc8gjCYMQu3l2txZbyBZFFakAHkDF02R7Q%2FDEIKJzDbGSkL9caqNjTIK1%2B89Qi%2BypytJ2CUWtw93FV828kJuMHpsRp44sDJF5KFHz8qeCBjRqFSXi%2F1fN3%2FUVu4X%2FoB0aMoRyJKz3VgZiEQNrjOCif%2F59fOA6rKAG%2BewzevyueRbBTibRkAXIN07Uzs0NDnQZ%2BElb3LeWYoIY9Gkt9U8feDyV%2FkJdYwzwOZ6p1tOjc3Yoosoi9bjFkssD40%2BN3w2%2BmQZRiXxlyw3S21lox5W%2BwYal0WJBIxe6ORVmNdigiKDHTIfS3tRyxBGB3Y%2B1sCSSEnejJYC1VqHcfYkQyJjDc5HJAuAkdsRU7QdKO%2B6%2FNteqwwv5HL7fu5r6v8qzoeoTWzs7maEj2T04I2Bolm5FTwDvgbUnuKxUwWI8%2FGSTii9AiYooMyL9vOE8UQwSi1lSzZQUPnUKhUZcpLz8lRKdA5Z6s0mSV%2Fp%2BP2SSGCt%2FT96%2F0f6xl5GSyTC4cwDcqhLWXjXQrAU%2B0FXhfGfi%2BUM5k06cQacP6P7OedpCPq1wqQjM%2FO3YYewwLY1q%2FAOMG%2BRyTDQdTPGkCYy3fpjD96mtKB%2Fi82YupKEnFSJduIiqMIeNjb0GOqUBHrXhPR3rW%2BYlW9J6Tf7GYiYw83Dftutyr2rHw5tsMUd6vgMih0LF1oKwuXkHJmflzxrX1JchYMniqWCeRp0eHLuzbiMLGOKYLaPaDzPI8Iord00BA4kq8CKTcRJEyeCb5mIuMkt1ByKL3jGrIQTiNhMVVrXsYymNG5EqArzuhRNXxswki2DOTAJke%2BxWCjxEklDQUwulGsTjBbNgLdjkk38oBhBs&X-Amz-Signature=50787ac6d6fb63b162d68b1656132d91582fd5a4cd76cb541f6fdeda898cd545&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJAPRTP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFyMGnw1SS0EnBrwCRCJO6H3TdKlkBqU%2FzLHSF%2BN2ZvEAiEAsh7PRCC1WXfZokXXxArpXNTLYuu10lirwWyPnGOzvCAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOBra6uSbliFYW%2F1ACrcAzmNIPi0UnggdnAhoGwdc8gjCYMQu3l2txZbyBZFFakAHkDF02R7Q%2FDEIKJzDbGSkL9caqNjTIK1%2B89Qi%2BypytJ2CUWtw93FV828kJuMHpsRp44sDJF5KFHz8qeCBjRqFSXi%2F1fN3%2FUVu4X%2FoB0aMoRyJKz3VgZiEQNrjOCif%2F59fOA6rKAG%2BewzevyueRbBTibRkAXIN07Uzs0NDnQZ%2BElb3LeWYoIY9Gkt9U8feDyV%2FkJdYwzwOZ6p1tOjc3Yoosoi9bjFkssD40%2BN3w2%2BmQZRiXxlyw3S21lox5W%2BwYal0WJBIxe6ORVmNdigiKDHTIfS3tRyxBGB3Y%2B1sCSSEnejJYC1VqHcfYkQyJjDc5HJAuAkdsRU7QdKO%2B6%2FNteqwwv5HL7fu5r6v8qzoeoTWzs7maEj2T04I2Bolm5FTwDvgbUnuKxUwWI8%2FGSTii9AiYooMyL9vOE8UQwSi1lSzZQUPnUKhUZcpLz8lRKdA5Z6s0mSV%2Fp%2BP2SSGCt%2FT96%2F0f6xl5GSyTC4cwDcqhLWXjXQrAU%2B0FXhfGfi%2BUM5k06cQacP6P7OedpCPq1wqQjM%2FO3YYewwLY1q%2FAOMG%2BRyTDQdTPGkCYy3fpjD96mtKB%2Fi82YupKEnFSJduIiqMIeNjb0GOqUBHrXhPR3rW%2BYlW9J6Tf7GYiYw83Dftutyr2rHw5tsMUd6vgMih0LF1oKwuXkHJmflzxrX1JchYMniqWCeRp0eHLuzbiMLGOKYLaPaDzPI8Iord00BA4kq8CKTcRJEyeCb5mIuMkt1ByKL3jGrIQTiNhMVVrXsYymNG5EqArzuhRNXxswki2DOTAJke%2BxWCjxEklDQUwulGsTjBbNgLdjkk38oBhBs&X-Amz-Signature=7114e7b90856c68c0fbaf5d10f3ae5921c00a7562ac299d37dadc828dd858210&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJAPRTP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFyMGnw1SS0EnBrwCRCJO6H3TdKlkBqU%2FzLHSF%2BN2ZvEAiEAsh7PRCC1WXfZokXXxArpXNTLYuu10lirwWyPnGOzvCAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOBra6uSbliFYW%2F1ACrcAzmNIPi0UnggdnAhoGwdc8gjCYMQu3l2txZbyBZFFakAHkDF02R7Q%2FDEIKJzDbGSkL9caqNjTIK1%2B89Qi%2BypytJ2CUWtw93FV828kJuMHpsRp44sDJF5KFHz8qeCBjRqFSXi%2F1fN3%2FUVu4X%2FoB0aMoRyJKz3VgZiEQNrjOCif%2F59fOA6rKAG%2BewzevyueRbBTibRkAXIN07Uzs0NDnQZ%2BElb3LeWYoIY9Gkt9U8feDyV%2FkJdYwzwOZ6p1tOjc3Yoosoi9bjFkssD40%2BN3w2%2BmQZRiXxlyw3S21lox5W%2BwYal0WJBIxe6ORVmNdigiKDHTIfS3tRyxBGB3Y%2B1sCSSEnejJYC1VqHcfYkQyJjDc5HJAuAkdsRU7QdKO%2B6%2FNteqwwv5HL7fu5r6v8qzoeoTWzs7maEj2T04I2Bolm5FTwDvgbUnuKxUwWI8%2FGSTii9AiYooMyL9vOE8UQwSi1lSzZQUPnUKhUZcpLz8lRKdA5Z6s0mSV%2Fp%2BP2SSGCt%2FT96%2F0f6xl5GSyTC4cwDcqhLWXjXQrAU%2B0FXhfGfi%2BUM5k06cQacP6P7OedpCPq1wqQjM%2FO3YYewwLY1q%2FAOMG%2BRyTDQdTPGkCYy3fpjD96mtKB%2Fi82YupKEnFSJduIiqMIeNjb0GOqUBHrXhPR3rW%2BYlW9J6Tf7GYiYw83Dftutyr2rHw5tsMUd6vgMih0LF1oKwuXkHJmflzxrX1JchYMniqWCeRp0eHLuzbiMLGOKYLaPaDzPI8Iord00BA4kq8CKTcRJEyeCb5mIuMkt1ByKL3jGrIQTiNhMVVrXsYymNG5EqArzuhRNXxswki2DOTAJke%2BxWCjxEklDQUwulGsTjBbNgLdjkk38oBhBs&X-Amz-Signature=4b4b91f5d5698f1d4917ac35aca4d65c0feb2c5de0a849a74e6426a731235046&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
