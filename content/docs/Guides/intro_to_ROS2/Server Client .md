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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVKXSQH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFXay7cTp4YKwI%2Be6l%2BaUe6zfIdntAr8jFGncS4u0HT5AiEAp6lJ6vPSFIM6TddcWWO3%2BUmJwJw6g6NlgCJ5oVSF0Ecq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHQnBgWydV%2F5F%2FawbircA2Z7SYno2Xgj5l%2BC9LIY8HmRkldrRCoyBws0W1vs2g7TbmeAhFDDC7rNhDIdtwHtVzgxCpIn2mb1Po7J3MoaevnQrlKi3EJpbUMVlhd92vmu0zJuN3aiGoVZGJMKPBGo%2BKLKaIwUUBbchOm8pkEsaKiu7NKkNgpIDSLdfBvtDN8SF9xRRzPRS8hvjVd8GekrEq3c2GB5nFAQzdRQRbuii8bkjiMD2kGhOSwABUBrj%2F82oXFIuAGWmODqBRxtGxqQwxJk7PEDe%2Be%2ByO3fTyNEw6NbBRNqwViDQIc5yo2LfIj%2B%2FucrA%2Fmyy%2FMyufzmkuELosUqut5cSMqo%2FgU5wKrNOb0ucX7Urv%2B8X3fM3fi6QNwBClTHNjhPy3w9EKGZGJo3ILpQjlsnLfhv3AaSElAm%2B4hVauoR87e6vDcC7bP9RG7MxHvLK8ryG9juCOuqJttR4SscAmVSB8btOEq1hoKEe%2FqtB7CuRKstRPNABTWvGwHYNOa5A830Nhqv29R%2BwwR4ego4oedHBZMitEeIPNOXlgIKLB0EWbs6EUjHnGntnLtC10yWIUo9DuDUYXHrxAIoZxHPUiiQtfgvNCOl5U3GBXDERZ1ueeN3QVqM80Gq4j%2FN5UswAKQDyaGlCTdKMOzb9r0GOqUBWoJg3u7ciBwrh8zHNR5FPmEGvWnNtrJPPpWGwuYmMj5paHXIRdo3S9HoYIgPj6DEWVJGPCP3l4yKgbUvbCtgfUzkaurZyr4LvViwp5BMHOqp1vxOHJNGEyQef9sdtcR8285YEtYvs6ci6EAkfx95yV1AD47tkgiq2KNCDxGOkrYjgHRV2UsrQJULr6W98jDUNh45WtlE3kyshrLt7dUeqW98wA5Q&X-Amz-Signature=3c81f09f748f2723565ffe313d1f0db358ad474c0151a7fd3fa7843098e793ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVKXSQH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFXay7cTp4YKwI%2Be6l%2BaUe6zfIdntAr8jFGncS4u0HT5AiEAp6lJ6vPSFIM6TddcWWO3%2BUmJwJw6g6NlgCJ5oVSF0Ecq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHQnBgWydV%2F5F%2FawbircA2Z7SYno2Xgj5l%2BC9LIY8HmRkldrRCoyBws0W1vs2g7TbmeAhFDDC7rNhDIdtwHtVzgxCpIn2mb1Po7J3MoaevnQrlKi3EJpbUMVlhd92vmu0zJuN3aiGoVZGJMKPBGo%2BKLKaIwUUBbchOm8pkEsaKiu7NKkNgpIDSLdfBvtDN8SF9xRRzPRS8hvjVd8GekrEq3c2GB5nFAQzdRQRbuii8bkjiMD2kGhOSwABUBrj%2F82oXFIuAGWmODqBRxtGxqQwxJk7PEDe%2Be%2ByO3fTyNEw6NbBRNqwViDQIc5yo2LfIj%2B%2FucrA%2Fmyy%2FMyufzmkuELosUqut5cSMqo%2FgU5wKrNOb0ucX7Urv%2B8X3fM3fi6QNwBClTHNjhPy3w9EKGZGJo3ILpQjlsnLfhv3AaSElAm%2B4hVauoR87e6vDcC7bP9RG7MxHvLK8ryG9juCOuqJttR4SscAmVSB8btOEq1hoKEe%2FqtB7CuRKstRPNABTWvGwHYNOa5A830Nhqv29R%2BwwR4ego4oedHBZMitEeIPNOXlgIKLB0EWbs6EUjHnGntnLtC10yWIUo9DuDUYXHrxAIoZxHPUiiQtfgvNCOl5U3GBXDERZ1ueeN3QVqM80Gq4j%2FN5UswAKQDyaGlCTdKMOzb9r0GOqUBWoJg3u7ciBwrh8zHNR5FPmEGvWnNtrJPPpWGwuYmMj5paHXIRdo3S9HoYIgPj6DEWVJGPCP3l4yKgbUvbCtgfUzkaurZyr4LvViwp5BMHOqp1vxOHJNGEyQef9sdtcR8285YEtYvs6ci6EAkfx95yV1AD47tkgiq2KNCDxGOkrYjgHRV2UsrQJULr6W98jDUNh45WtlE3kyshrLt7dUeqW98wA5Q&X-Amz-Signature=196e7d15e7f6596250e3462f02276d41d4741808090f4d863d7d154abac87c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVKXSQH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFXay7cTp4YKwI%2Be6l%2BaUe6zfIdntAr8jFGncS4u0HT5AiEAp6lJ6vPSFIM6TddcWWO3%2BUmJwJw6g6NlgCJ5oVSF0Ecq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHQnBgWydV%2F5F%2FawbircA2Z7SYno2Xgj5l%2BC9LIY8HmRkldrRCoyBws0W1vs2g7TbmeAhFDDC7rNhDIdtwHtVzgxCpIn2mb1Po7J3MoaevnQrlKi3EJpbUMVlhd92vmu0zJuN3aiGoVZGJMKPBGo%2BKLKaIwUUBbchOm8pkEsaKiu7NKkNgpIDSLdfBvtDN8SF9xRRzPRS8hvjVd8GekrEq3c2GB5nFAQzdRQRbuii8bkjiMD2kGhOSwABUBrj%2F82oXFIuAGWmODqBRxtGxqQwxJk7PEDe%2Be%2ByO3fTyNEw6NbBRNqwViDQIc5yo2LfIj%2B%2FucrA%2Fmyy%2FMyufzmkuELosUqut5cSMqo%2FgU5wKrNOb0ucX7Urv%2B8X3fM3fi6QNwBClTHNjhPy3w9EKGZGJo3ILpQjlsnLfhv3AaSElAm%2B4hVauoR87e6vDcC7bP9RG7MxHvLK8ryG9juCOuqJttR4SscAmVSB8btOEq1hoKEe%2FqtB7CuRKstRPNABTWvGwHYNOa5A830Nhqv29R%2BwwR4ego4oedHBZMitEeIPNOXlgIKLB0EWbs6EUjHnGntnLtC10yWIUo9DuDUYXHrxAIoZxHPUiiQtfgvNCOl5U3GBXDERZ1ueeN3QVqM80Gq4j%2FN5UswAKQDyaGlCTdKMOzb9r0GOqUBWoJg3u7ciBwrh8zHNR5FPmEGvWnNtrJPPpWGwuYmMj5paHXIRdo3S9HoYIgPj6DEWVJGPCP3l4yKgbUvbCtgfUzkaurZyr4LvViwp5BMHOqp1vxOHJNGEyQef9sdtcR8285YEtYvs6ci6EAkfx95yV1AD47tkgiq2KNCDxGOkrYjgHRV2UsrQJULr6W98jDUNh45WtlE3kyshrLt7dUeqW98wA5Q&X-Amz-Signature=663d46ba8de11ffe62e3e022c3fa849b3130beb39bab9f3370c85f43cf09c79a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVKXSQH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFXay7cTp4YKwI%2Be6l%2BaUe6zfIdntAr8jFGncS4u0HT5AiEAp6lJ6vPSFIM6TddcWWO3%2BUmJwJw6g6NlgCJ5oVSF0Ecq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHQnBgWydV%2F5F%2FawbircA2Z7SYno2Xgj5l%2BC9LIY8HmRkldrRCoyBws0W1vs2g7TbmeAhFDDC7rNhDIdtwHtVzgxCpIn2mb1Po7J3MoaevnQrlKi3EJpbUMVlhd92vmu0zJuN3aiGoVZGJMKPBGo%2BKLKaIwUUBbchOm8pkEsaKiu7NKkNgpIDSLdfBvtDN8SF9xRRzPRS8hvjVd8GekrEq3c2GB5nFAQzdRQRbuii8bkjiMD2kGhOSwABUBrj%2F82oXFIuAGWmODqBRxtGxqQwxJk7PEDe%2Be%2ByO3fTyNEw6NbBRNqwViDQIc5yo2LfIj%2B%2FucrA%2Fmyy%2FMyufzmkuELosUqut5cSMqo%2FgU5wKrNOb0ucX7Urv%2B8X3fM3fi6QNwBClTHNjhPy3w9EKGZGJo3ILpQjlsnLfhv3AaSElAm%2B4hVauoR87e6vDcC7bP9RG7MxHvLK8ryG9juCOuqJttR4SscAmVSB8btOEq1hoKEe%2FqtB7CuRKstRPNABTWvGwHYNOa5A830Nhqv29R%2BwwR4ego4oedHBZMitEeIPNOXlgIKLB0EWbs6EUjHnGntnLtC10yWIUo9DuDUYXHrxAIoZxHPUiiQtfgvNCOl5U3GBXDERZ1ueeN3QVqM80Gq4j%2FN5UswAKQDyaGlCTdKMOzb9r0GOqUBWoJg3u7ciBwrh8zHNR5FPmEGvWnNtrJPPpWGwuYmMj5paHXIRdo3S9HoYIgPj6DEWVJGPCP3l4yKgbUvbCtgfUzkaurZyr4LvViwp5BMHOqp1vxOHJNGEyQef9sdtcR8285YEtYvs6ci6EAkfx95yV1AD47tkgiq2KNCDxGOkrYjgHRV2UsrQJULr6W98jDUNh45WtlE3kyshrLt7dUeqW98wA5Q&X-Amz-Signature=da94e7b459f415e15e80bd2f41e14459670cf2e7ecdfda53b8217215e1d2ed12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVKXSQH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFXay7cTp4YKwI%2Be6l%2BaUe6zfIdntAr8jFGncS4u0HT5AiEAp6lJ6vPSFIM6TddcWWO3%2BUmJwJw6g6NlgCJ5oVSF0Ecq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHQnBgWydV%2F5F%2FawbircA2Z7SYno2Xgj5l%2BC9LIY8HmRkldrRCoyBws0W1vs2g7TbmeAhFDDC7rNhDIdtwHtVzgxCpIn2mb1Po7J3MoaevnQrlKi3EJpbUMVlhd92vmu0zJuN3aiGoVZGJMKPBGo%2BKLKaIwUUBbchOm8pkEsaKiu7NKkNgpIDSLdfBvtDN8SF9xRRzPRS8hvjVd8GekrEq3c2GB5nFAQzdRQRbuii8bkjiMD2kGhOSwABUBrj%2F82oXFIuAGWmODqBRxtGxqQwxJk7PEDe%2Be%2ByO3fTyNEw6NbBRNqwViDQIc5yo2LfIj%2B%2FucrA%2Fmyy%2FMyufzmkuELosUqut5cSMqo%2FgU5wKrNOb0ucX7Urv%2B8X3fM3fi6QNwBClTHNjhPy3w9EKGZGJo3ILpQjlsnLfhv3AaSElAm%2B4hVauoR87e6vDcC7bP9RG7MxHvLK8ryG9juCOuqJttR4SscAmVSB8btOEq1hoKEe%2FqtB7CuRKstRPNABTWvGwHYNOa5A830Nhqv29R%2BwwR4ego4oedHBZMitEeIPNOXlgIKLB0EWbs6EUjHnGntnLtC10yWIUo9DuDUYXHrxAIoZxHPUiiQtfgvNCOl5U3GBXDERZ1ueeN3QVqM80Gq4j%2FN5UswAKQDyaGlCTdKMOzb9r0GOqUBWoJg3u7ciBwrh8zHNR5FPmEGvWnNtrJPPpWGwuYmMj5paHXIRdo3S9HoYIgPj6DEWVJGPCP3l4yKgbUvbCtgfUzkaurZyr4LvViwp5BMHOqp1vxOHJNGEyQef9sdtcR8285YEtYvs6ci6EAkfx95yV1AD47tkgiq2KNCDxGOkrYjgHRV2UsrQJULr6W98jDUNh45WtlE3kyshrLt7dUeqW98wA5Q&X-Amz-Signature=0bb010b996f290adec65016fa69faf416f13a0fea705355eb1735a41742c9ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
