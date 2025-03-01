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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETZJVLZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDJ0ya%2F1axfC8mhKio2MpMR4sQQRb%2FMzjWkCHoCoKRUTAIgMvyfheanZsQ%2BeiQqDIVHNHEcscGa54dIF4flaWd28iMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFBhLZKGzeS77xurCrcA9YCCUR5G5PKExAm2CiHtmVWlNX5qXqZ3h2nzd8ByIH8qBI%2FXAL8eUY0UnfwZbIoLVjGWYzWT6PN%2FBNXBntxP2HNlG%2FkyIS%2BDpp1R3RomHY4YwXlnek0lrLZdAc6xop9RG5tsLK57F7X1tcSA7anVgkY%2Bo%2F3i%2FzgrRGI3dlhlsNYTI0rJIVwY5lUICpAVkIygwDVnnmf6vuOqsWbL6Z8JOK%2FOhOu%2BrZvKC4GJawD6gbns%2B2MN9YS3Kl3%2B54B6D9c3we4sbC9xY5EAbTSIRgtvs1q2b%2FHHj6eIoJC6J2fJawU4M1w4aJVHyahfdbsnHgV1Hcws17R7vgdtjS7D9T0xUh03%2FeF8nMhWgvCGiYkxtLyi%2FkGPNQHpbHFk%2BAXBaRBtKPSoCD0YAnMlrZAtOJuKnJ0nAzryzj9vh%2BOv5Us%2F%2BSWaqEgIq54zGvVAwEdSNUmXHqizfQVkQ%2FSkjqL%2FG8Elf7TaqGtxQVncyCSUIRlf6%2FW2SfAT59TA0Bh0nDxrSYQFq%2BBSvA7MKDk2uQkp3EYoRxEZISn58kUMFqgafVGrS8VhXOQLzWfj5nrvTMI3vtSmvfQXkCXisrDHylqvVpDJ1m6eFA25f2KBfRwxYLzyXqWyX4EGW0M%2BXdANrhEMM%2B6i74GOqUBE0Mvxb1Aw3f%2FtfSxUYhiOVxbdZumq49xPwmDB5HGoRG%2F%2FsR8nWTmrx3cMjlHp5cEY9ZSM8YqeU8hCE7yYyIwf8C3F1T03KPV%2FUb5wE0F3JEm4liSxV8HxRpkkW0vd58UPRGmC2ftpJBVhKdj7y%2BDAvJtoPYhxEQs0P14mSMSXxTQlMrvLyXifqfJAUXCLArkY7HGVB7ZOMhyLBWqZmybjItuy07r&X-Amz-Signature=87006be81f84161b276604a98aca2c9785cceef85b52422669baa77262b9dd90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETZJVLZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDJ0ya%2F1axfC8mhKio2MpMR4sQQRb%2FMzjWkCHoCoKRUTAIgMvyfheanZsQ%2BeiQqDIVHNHEcscGa54dIF4flaWd28iMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFBhLZKGzeS77xurCrcA9YCCUR5G5PKExAm2CiHtmVWlNX5qXqZ3h2nzd8ByIH8qBI%2FXAL8eUY0UnfwZbIoLVjGWYzWT6PN%2FBNXBntxP2HNlG%2FkyIS%2BDpp1R3RomHY4YwXlnek0lrLZdAc6xop9RG5tsLK57F7X1tcSA7anVgkY%2Bo%2F3i%2FzgrRGI3dlhlsNYTI0rJIVwY5lUICpAVkIygwDVnnmf6vuOqsWbL6Z8JOK%2FOhOu%2BrZvKC4GJawD6gbns%2B2MN9YS3Kl3%2B54B6D9c3we4sbC9xY5EAbTSIRgtvs1q2b%2FHHj6eIoJC6J2fJawU4M1w4aJVHyahfdbsnHgV1Hcws17R7vgdtjS7D9T0xUh03%2FeF8nMhWgvCGiYkxtLyi%2FkGPNQHpbHFk%2BAXBaRBtKPSoCD0YAnMlrZAtOJuKnJ0nAzryzj9vh%2BOv5Us%2F%2BSWaqEgIq54zGvVAwEdSNUmXHqizfQVkQ%2FSkjqL%2FG8Elf7TaqGtxQVncyCSUIRlf6%2FW2SfAT59TA0Bh0nDxrSYQFq%2BBSvA7MKDk2uQkp3EYoRxEZISn58kUMFqgafVGrS8VhXOQLzWfj5nrvTMI3vtSmvfQXkCXisrDHylqvVpDJ1m6eFA25f2KBfRwxYLzyXqWyX4EGW0M%2BXdANrhEMM%2B6i74GOqUBE0Mvxb1Aw3f%2FtfSxUYhiOVxbdZumq49xPwmDB5HGoRG%2F%2FsR8nWTmrx3cMjlHp5cEY9ZSM8YqeU8hCE7yYyIwf8C3F1T03KPV%2FUb5wE0F3JEm4liSxV8HxRpkkW0vd58UPRGmC2ftpJBVhKdj7y%2BDAvJtoPYhxEQs0P14mSMSXxTQlMrvLyXifqfJAUXCLArkY7HGVB7ZOMhyLBWqZmybjItuy07r&X-Amz-Signature=45c0f7d4db2d2cbc4925a671790e87b8379d8fc68e73bafe4ffd085bb9c03224&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETZJVLZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDJ0ya%2F1axfC8mhKio2MpMR4sQQRb%2FMzjWkCHoCoKRUTAIgMvyfheanZsQ%2BeiQqDIVHNHEcscGa54dIF4flaWd28iMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFBhLZKGzeS77xurCrcA9YCCUR5G5PKExAm2CiHtmVWlNX5qXqZ3h2nzd8ByIH8qBI%2FXAL8eUY0UnfwZbIoLVjGWYzWT6PN%2FBNXBntxP2HNlG%2FkyIS%2BDpp1R3RomHY4YwXlnek0lrLZdAc6xop9RG5tsLK57F7X1tcSA7anVgkY%2Bo%2F3i%2FzgrRGI3dlhlsNYTI0rJIVwY5lUICpAVkIygwDVnnmf6vuOqsWbL6Z8JOK%2FOhOu%2BrZvKC4GJawD6gbns%2B2MN9YS3Kl3%2B54B6D9c3we4sbC9xY5EAbTSIRgtvs1q2b%2FHHj6eIoJC6J2fJawU4M1w4aJVHyahfdbsnHgV1Hcws17R7vgdtjS7D9T0xUh03%2FeF8nMhWgvCGiYkxtLyi%2FkGPNQHpbHFk%2BAXBaRBtKPSoCD0YAnMlrZAtOJuKnJ0nAzryzj9vh%2BOv5Us%2F%2BSWaqEgIq54zGvVAwEdSNUmXHqizfQVkQ%2FSkjqL%2FG8Elf7TaqGtxQVncyCSUIRlf6%2FW2SfAT59TA0Bh0nDxrSYQFq%2BBSvA7MKDk2uQkp3EYoRxEZISn58kUMFqgafVGrS8VhXOQLzWfj5nrvTMI3vtSmvfQXkCXisrDHylqvVpDJ1m6eFA25f2KBfRwxYLzyXqWyX4EGW0M%2BXdANrhEMM%2B6i74GOqUBE0Mvxb1Aw3f%2FtfSxUYhiOVxbdZumq49xPwmDB5HGoRG%2F%2FsR8nWTmrx3cMjlHp5cEY9ZSM8YqeU8hCE7yYyIwf8C3F1T03KPV%2FUb5wE0F3JEm4liSxV8HxRpkkW0vd58UPRGmC2ftpJBVhKdj7y%2BDAvJtoPYhxEQs0P14mSMSXxTQlMrvLyXifqfJAUXCLArkY7HGVB7ZOMhyLBWqZmybjItuy07r&X-Amz-Signature=cf98e278b35fcefe34185c58147f77874a5ce5ff54a0693ea426472d0bbf3466&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETZJVLZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDJ0ya%2F1axfC8mhKio2MpMR4sQQRb%2FMzjWkCHoCoKRUTAIgMvyfheanZsQ%2BeiQqDIVHNHEcscGa54dIF4flaWd28iMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFBhLZKGzeS77xurCrcA9YCCUR5G5PKExAm2CiHtmVWlNX5qXqZ3h2nzd8ByIH8qBI%2FXAL8eUY0UnfwZbIoLVjGWYzWT6PN%2FBNXBntxP2HNlG%2FkyIS%2BDpp1R3RomHY4YwXlnek0lrLZdAc6xop9RG5tsLK57F7X1tcSA7anVgkY%2Bo%2F3i%2FzgrRGI3dlhlsNYTI0rJIVwY5lUICpAVkIygwDVnnmf6vuOqsWbL6Z8JOK%2FOhOu%2BrZvKC4GJawD6gbns%2B2MN9YS3Kl3%2B54B6D9c3we4sbC9xY5EAbTSIRgtvs1q2b%2FHHj6eIoJC6J2fJawU4M1w4aJVHyahfdbsnHgV1Hcws17R7vgdtjS7D9T0xUh03%2FeF8nMhWgvCGiYkxtLyi%2FkGPNQHpbHFk%2BAXBaRBtKPSoCD0YAnMlrZAtOJuKnJ0nAzryzj9vh%2BOv5Us%2F%2BSWaqEgIq54zGvVAwEdSNUmXHqizfQVkQ%2FSkjqL%2FG8Elf7TaqGtxQVncyCSUIRlf6%2FW2SfAT59TA0Bh0nDxrSYQFq%2BBSvA7MKDk2uQkp3EYoRxEZISn58kUMFqgafVGrS8VhXOQLzWfj5nrvTMI3vtSmvfQXkCXisrDHylqvVpDJ1m6eFA25f2KBfRwxYLzyXqWyX4EGW0M%2BXdANrhEMM%2B6i74GOqUBE0Mvxb1Aw3f%2FtfSxUYhiOVxbdZumq49xPwmDB5HGoRG%2F%2FsR8nWTmrx3cMjlHp5cEY9ZSM8YqeU8hCE7yYyIwf8C3F1T03KPV%2FUb5wE0F3JEm4liSxV8HxRpkkW0vd58UPRGmC2ftpJBVhKdj7y%2BDAvJtoPYhxEQs0P14mSMSXxTQlMrvLyXifqfJAUXCLArkY7HGVB7ZOMhyLBWqZmybjItuy07r&X-Amz-Signature=bedb0ae2644c0cc4f8fdec1ce386469ace1cb0d34a2a1551e0b7833a6e00098c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETZJVLZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDJ0ya%2F1axfC8mhKio2MpMR4sQQRb%2FMzjWkCHoCoKRUTAIgMvyfheanZsQ%2BeiQqDIVHNHEcscGa54dIF4flaWd28iMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFBhLZKGzeS77xurCrcA9YCCUR5G5PKExAm2CiHtmVWlNX5qXqZ3h2nzd8ByIH8qBI%2FXAL8eUY0UnfwZbIoLVjGWYzWT6PN%2FBNXBntxP2HNlG%2FkyIS%2BDpp1R3RomHY4YwXlnek0lrLZdAc6xop9RG5tsLK57F7X1tcSA7anVgkY%2Bo%2F3i%2FzgrRGI3dlhlsNYTI0rJIVwY5lUICpAVkIygwDVnnmf6vuOqsWbL6Z8JOK%2FOhOu%2BrZvKC4GJawD6gbns%2B2MN9YS3Kl3%2B54B6D9c3we4sbC9xY5EAbTSIRgtvs1q2b%2FHHj6eIoJC6J2fJawU4M1w4aJVHyahfdbsnHgV1Hcws17R7vgdtjS7D9T0xUh03%2FeF8nMhWgvCGiYkxtLyi%2FkGPNQHpbHFk%2BAXBaRBtKPSoCD0YAnMlrZAtOJuKnJ0nAzryzj9vh%2BOv5Us%2F%2BSWaqEgIq54zGvVAwEdSNUmXHqizfQVkQ%2FSkjqL%2FG8Elf7TaqGtxQVncyCSUIRlf6%2FW2SfAT59TA0Bh0nDxrSYQFq%2BBSvA7MKDk2uQkp3EYoRxEZISn58kUMFqgafVGrS8VhXOQLzWfj5nrvTMI3vtSmvfQXkCXisrDHylqvVpDJ1m6eFA25f2KBfRwxYLzyXqWyX4EGW0M%2BXdANrhEMM%2B6i74GOqUBE0Mvxb1Aw3f%2FtfSxUYhiOVxbdZumq49xPwmDB5HGoRG%2F%2FsR8nWTmrx3cMjlHp5cEY9ZSM8YqeU8hCE7yYyIwf8C3F1T03KPV%2FUb5wE0F3JEm4liSxV8HxRpkkW0vd58UPRGmC2ftpJBVhKdj7y%2BDAvJtoPYhxEQs0P14mSMSXxTQlMrvLyXifqfJAUXCLArkY7HGVB7ZOMhyLBWqZmybjItuy07r&X-Amz-Signature=0bc5a29980b77ebb171b7c509d246ac520314647e225d59b9707616d01105835&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
