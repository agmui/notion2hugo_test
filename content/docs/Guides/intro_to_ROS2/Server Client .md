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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYQ2PWZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAp4J6s8xwI9kO61tqN3tCc8Yt5%2FvnQrZCvFDLYrNwAWAiEAqv4AI8bj7%2Fq7zfqBpawQU9%2FqnMhpS%2BxF1BMgNSg1jngq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLsuE5s%2FvglE6%2Fx1ircA%2BUMzXR0hNiBlcZMIVsInxEQ5q3w3VOsjeuexvNyA5qJoJyLGm0IjtkUvRUkfSyFCSgIMnRXsN9nCRGiOIL1aBYRjRD6qogaoDdFJP5LcWLE4QXRlGiRc4gTUiaqoKcGnsNT2Db9Vpch6uxDIkxDArwJ6NFudyjPeIHv7OxHT3klsKasgU%2Fl%2FZiCGigHxcHIAkuheN3PQItkER%2FB4ZbQooOr16py8oR7absPfrinoQWyl3EGcL42iIGvVeCpb3WEi4RGlDKyjh%2Be%2B%2BOWniBP7YSjBo36qOV3kLnrkMIN7KN8D4QgLCxXFI2gN%2BpUG3LxEM%2Bl17lvfnKlaxSGMBqM68NoQ5gvYFAW%2BVg%2Bw0r47b1U2THDC8Kw3arSdMlGjA7KZp7AVwCGK1vV5uqBvZ1H9l6pLccAr7vaz9zzWMYeg6z6NT6%2BiemKZhNYz3x5PCkYaF3RShZncidzurl0rgwpyVZUkWvNKA7ojbK7eDUWd%2FqSicRFMzWpgL3wbrVWIfbQwxp%2BjzYBkVTWZmMU4IPxsxIusAzVHqYAxE6yP7VlipI4P%2Bdq9PX%2B4VirUwog3tTtESCmLBKFmyVp3WOF8%2FPXJ83xSerIsnIZi%2FeqHz%2FgYXnX2GwISFfxfJuR%2F9X5MKzRgL4GOqUBogPIFGN6xpTT%2F%2BE3YTPbcvZcbiWZZVMfXJoF5Vo2J%2Bph67ZLjTHkLsTh3wQqo9g8LGHE2unUjXkSO2fXrhVuJb4XeW4QxpNRkT5HkdHUSVzPJF5mBURKBUisyoalCqIZ4ZY0ZhbVGBZ2EsBgTk1KRSPN3EpE%2BVqmt7OBgkfdS9Bprc8bXBubd9CDXWcbmQQeWFa4mEZJk4MCww5odDW2H%2FlDdcBa&X-Amz-Signature=43f96574bcabd067281c9973bd1ee604f50dd0825b4ddcae2c82c0a63f353fce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYQ2PWZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAp4J6s8xwI9kO61tqN3tCc8Yt5%2FvnQrZCvFDLYrNwAWAiEAqv4AI8bj7%2Fq7zfqBpawQU9%2FqnMhpS%2BxF1BMgNSg1jngq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLsuE5s%2FvglE6%2Fx1ircA%2BUMzXR0hNiBlcZMIVsInxEQ5q3w3VOsjeuexvNyA5qJoJyLGm0IjtkUvRUkfSyFCSgIMnRXsN9nCRGiOIL1aBYRjRD6qogaoDdFJP5LcWLE4QXRlGiRc4gTUiaqoKcGnsNT2Db9Vpch6uxDIkxDArwJ6NFudyjPeIHv7OxHT3klsKasgU%2Fl%2FZiCGigHxcHIAkuheN3PQItkER%2FB4ZbQooOr16py8oR7absPfrinoQWyl3EGcL42iIGvVeCpb3WEi4RGlDKyjh%2Be%2B%2BOWniBP7YSjBo36qOV3kLnrkMIN7KN8D4QgLCxXFI2gN%2BpUG3LxEM%2Bl17lvfnKlaxSGMBqM68NoQ5gvYFAW%2BVg%2Bw0r47b1U2THDC8Kw3arSdMlGjA7KZp7AVwCGK1vV5uqBvZ1H9l6pLccAr7vaz9zzWMYeg6z6NT6%2BiemKZhNYz3x5PCkYaF3RShZncidzurl0rgwpyVZUkWvNKA7ojbK7eDUWd%2FqSicRFMzWpgL3wbrVWIfbQwxp%2BjzYBkVTWZmMU4IPxsxIusAzVHqYAxE6yP7VlipI4P%2Bdq9PX%2B4VirUwog3tTtESCmLBKFmyVp3WOF8%2FPXJ83xSerIsnIZi%2FeqHz%2FgYXnX2GwISFfxfJuR%2F9X5MKzRgL4GOqUBogPIFGN6xpTT%2F%2BE3YTPbcvZcbiWZZVMfXJoF5Vo2J%2Bph67ZLjTHkLsTh3wQqo9g8LGHE2unUjXkSO2fXrhVuJb4XeW4QxpNRkT5HkdHUSVzPJF5mBURKBUisyoalCqIZ4ZY0ZhbVGBZ2EsBgTk1KRSPN3EpE%2BVqmt7OBgkfdS9Bprc8bXBubd9CDXWcbmQQeWFa4mEZJk4MCww5odDW2H%2FlDdcBa&X-Amz-Signature=620e0c54ee471e871613b2d352bcceb33fc07918ea8b6b24e21fffc041100fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYQ2PWZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAp4J6s8xwI9kO61tqN3tCc8Yt5%2FvnQrZCvFDLYrNwAWAiEAqv4AI8bj7%2Fq7zfqBpawQU9%2FqnMhpS%2BxF1BMgNSg1jngq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLsuE5s%2FvglE6%2Fx1ircA%2BUMzXR0hNiBlcZMIVsInxEQ5q3w3VOsjeuexvNyA5qJoJyLGm0IjtkUvRUkfSyFCSgIMnRXsN9nCRGiOIL1aBYRjRD6qogaoDdFJP5LcWLE4QXRlGiRc4gTUiaqoKcGnsNT2Db9Vpch6uxDIkxDArwJ6NFudyjPeIHv7OxHT3klsKasgU%2Fl%2FZiCGigHxcHIAkuheN3PQItkER%2FB4ZbQooOr16py8oR7absPfrinoQWyl3EGcL42iIGvVeCpb3WEi4RGlDKyjh%2Be%2B%2BOWniBP7YSjBo36qOV3kLnrkMIN7KN8D4QgLCxXFI2gN%2BpUG3LxEM%2Bl17lvfnKlaxSGMBqM68NoQ5gvYFAW%2BVg%2Bw0r47b1U2THDC8Kw3arSdMlGjA7KZp7AVwCGK1vV5uqBvZ1H9l6pLccAr7vaz9zzWMYeg6z6NT6%2BiemKZhNYz3x5PCkYaF3RShZncidzurl0rgwpyVZUkWvNKA7ojbK7eDUWd%2FqSicRFMzWpgL3wbrVWIfbQwxp%2BjzYBkVTWZmMU4IPxsxIusAzVHqYAxE6yP7VlipI4P%2Bdq9PX%2B4VirUwog3tTtESCmLBKFmyVp3WOF8%2FPXJ83xSerIsnIZi%2FeqHz%2FgYXnX2GwISFfxfJuR%2F9X5MKzRgL4GOqUBogPIFGN6xpTT%2F%2BE3YTPbcvZcbiWZZVMfXJoF5Vo2J%2Bph67ZLjTHkLsTh3wQqo9g8LGHE2unUjXkSO2fXrhVuJb4XeW4QxpNRkT5HkdHUSVzPJF5mBURKBUisyoalCqIZ4ZY0ZhbVGBZ2EsBgTk1KRSPN3EpE%2BVqmt7OBgkfdS9Bprc8bXBubd9CDXWcbmQQeWFa4mEZJk4MCww5odDW2H%2FlDdcBa&X-Amz-Signature=834d6940eca9981b27dcedfc17ecaabe740c6a42723a04ef15d620a353eb9dce&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYQ2PWZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAp4J6s8xwI9kO61tqN3tCc8Yt5%2FvnQrZCvFDLYrNwAWAiEAqv4AI8bj7%2Fq7zfqBpawQU9%2FqnMhpS%2BxF1BMgNSg1jngq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLsuE5s%2FvglE6%2Fx1ircA%2BUMzXR0hNiBlcZMIVsInxEQ5q3w3VOsjeuexvNyA5qJoJyLGm0IjtkUvRUkfSyFCSgIMnRXsN9nCRGiOIL1aBYRjRD6qogaoDdFJP5LcWLE4QXRlGiRc4gTUiaqoKcGnsNT2Db9Vpch6uxDIkxDArwJ6NFudyjPeIHv7OxHT3klsKasgU%2Fl%2FZiCGigHxcHIAkuheN3PQItkER%2FB4ZbQooOr16py8oR7absPfrinoQWyl3EGcL42iIGvVeCpb3WEi4RGlDKyjh%2Be%2B%2BOWniBP7YSjBo36qOV3kLnrkMIN7KN8D4QgLCxXFI2gN%2BpUG3LxEM%2Bl17lvfnKlaxSGMBqM68NoQ5gvYFAW%2BVg%2Bw0r47b1U2THDC8Kw3arSdMlGjA7KZp7AVwCGK1vV5uqBvZ1H9l6pLccAr7vaz9zzWMYeg6z6NT6%2BiemKZhNYz3x5PCkYaF3RShZncidzurl0rgwpyVZUkWvNKA7ojbK7eDUWd%2FqSicRFMzWpgL3wbrVWIfbQwxp%2BjzYBkVTWZmMU4IPxsxIusAzVHqYAxE6yP7VlipI4P%2Bdq9PX%2B4VirUwog3tTtESCmLBKFmyVp3WOF8%2FPXJ83xSerIsnIZi%2FeqHz%2FgYXnX2GwISFfxfJuR%2F9X5MKzRgL4GOqUBogPIFGN6xpTT%2F%2BE3YTPbcvZcbiWZZVMfXJoF5Vo2J%2Bph67ZLjTHkLsTh3wQqo9g8LGHE2unUjXkSO2fXrhVuJb4XeW4QxpNRkT5HkdHUSVzPJF5mBURKBUisyoalCqIZ4ZY0ZhbVGBZ2EsBgTk1KRSPN3EpE%2BVqmt7OBgkfdS9Bprc8bXBubd9CDXWcbmQQeWFa4mEZJk4MCww5odDW2H%2FlDdcBa&X-Amz-Signature=561c12a20c9cc6847b2ba1e2c604106509334139cb6462dc8819d835d43ccb97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYQ2PWZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAp4J6s8xwI9kO61tqN3tCc8Yt5%2FvnQrZCvFDLYrNwAWAiEAqv4AI8bj7%2Fq7zfqBpawQU9%2FqnMhpS%2BxF1BMgNSg1jngq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLsuE5s%2FvglE6%2Fx1ircA%2BUMzXR0hNiBlcZMIVsInxEQ5q3w3VOsjeuexvNyA5qJoJyLGm0IjtkUvRUkfSyFCSgIMnRXsN9nCRGiOIL1aBYRjRD6qogaoDdFJP5LcWLE4QXRlGiRc4gTUiaqoKcGnsNT2Db9Vpch6uxDIkxDArwJ6NFudyjPeIHv7OxHT3klsKasgU%2Fl%2FZiCGigHxcHIAkuheN3PQItkER%2FB4ZbQooOr16py8oR7absPfrinoQWyl3EGcL42iIGvVeCpb3WEi4RGlDKyjh%2Be%2B%2BOWniBP7YSjBo36qOV3kLnrkMIN7KN8D4QgLCxXFI2gN%2BpUG3LxEM%2Bl17lvfnKlaxSGMBqM68NoQ5gvYFAW%2BVg%2Bw0r47b1U2THDC8Kw3arSdMlGjA7KZp7AVwCGK1vV5uqBvZ1H9l6pLccAr7vaz9zzWMYeg6z6NT6%2BiemKZhNYz3x5PCkYaF3RShZncidzurl0rgwpyVZUkWvNKA7ojbK7eDUWd%2FqSicRFMzWpgL3wbrVWIfbQwxp%2BjzYBkVTWZmMU4IPxsxIusAzVHqYAxE6yP7VlipI4P%2Bdq9PX%2B4VirUwog3tTtESCmLBKFmyVp3WOF8%2FPXJ83xSerIsnIZi%2FeqHz%2FgYXnX2GwISFfxfJuR%2F9X5MKzRgL4GOqUBogPIFGN6xpTT%2F%2BE3YTPbcvZcbiWZZVMfXJoF5Vo2J%2Bph67ZLjTHkLsTh3wQqo9g8LGHE2unUjXkSO2fXrhVuJb4XeW4QxpNRkT5HkdHUSVzPJF5mBURKBUisyoalCqIZ4ZY0ZhbVGBZ2EsBgTk1KRSPN3EpE%2BVqmt7OBgkfdS9Bprc8bXBubd9CDXWcbmQQeWFa4mEZJk4MCww5odDW2H%2FlDdcBa&X-Amz-Signature=108abd6f2f234c86078067e884d9216761f8bcce9cc0de9dbe4e7f6573072c75&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
