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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXN45KH3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCsAWv7D65JejzYYYbF1YgaabRdJ4t%2FiwSYYTfLCGqYxQIhAKuWeVrMqyZaZzM8kezPHxQZIyBAyGtO0TF2fxcn3L1DKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK%2BOTuFqYq8gxwX1Yq3AONCb%2BnkZTJ%2BwCbV5P1sKt%2FSbSyoQatiftpRIvwqNLMmVKDApeC2n%2FYwXZPYI%2FuCuAvkTYJXRa%2FOvueKi22C%2BnXLQszSH9SgbSw%2FSTwf9SphoQN3ieIxAO1Me7XR9ibS6BCiqDvsKpz826l%2FfWSHf6sKW7bKr7Ld7DQzDf0woOUf1y%2Fp7gkiw2FwBnewUiMZLi1hu1rrZOSR4N3oVT4tebQ3RHyZWgl%2F9G3nBwgSYKoV3D6LzVXHoTDhQWHBaacylCEPdpqgO0qgrONRKehYond%2BG4GfZUBLkROkb1dZeIoffhzApYFR0FAiRywG09DwgX%2BmoPCvKgDcp9G7LGEySsBUmBV1LL8BtXdf6wuqhpmW3bwU0mhyYaR5%2Fd0NiLCNU3JAW%2FUIppQocSWAm9AeYmWzMkhYfS0fbEWF%2BRdmU9hM3kIS%2FeFXwzgtbmu2lby3VHG9xVRSvszevFqiP5NiwDmIAIE5PtqJRgrujjhkcPVFuApQgoqnd5pFqLwY%2FRYkcWw6CQvzRSFZBOweQni0Tf1JQbpVleLmWIPfHG%2FsWUxSoUedQ7b%2BbOqjQmG4s5V0QzVELX5N%2FeHnDvRcwi26C9FTDC6%2FgdAsMqrBon%2F6L0yuNOZlG7HuBkPfw6bWTCvoea8BjqkASYYF4TW2J%2FYVBcyHGgihhhGHIl8dW1L7iCVcfSt2%2FjxDBO%2FD5hKnHmkUHzbMRrDEHcZMX%2Bup7hb3Degf45FSYD6yDAKN5qZezthQmV3XOp6Mz%2F94lK21LDG%2BjTUgayMhJokN7NtZ%2FalfDInwkL4WcLdlozG%2BlPpby39Pbqgu68fAcb5F6iM4x37LNtMhD%2B2bX%2F%2BGcFhKyxYGWoCFTc7r9ahcgoS&X-Amz-Signature=06675d02474affe9c7b49d53ea44b60f53573c3c908732515e2650c6a3413a30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXN45KH3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCsAWv7D65JejzYYYbF1YgaabRdJ4t%2FiwSYYTfLCGqYxQIhAKuWeVrMqyZaZzM8kezPHxQZIyBAyGtO0TF2fxcn3L1DKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK%2BOTuFqYq8gxwX1Yq3AONCb%2BnkZTJ%2BwCbV5P1sKt%2FSbSyoQatiftpRIvwqNLMmVKDApeC2n%2FYwXZPYI%2FuCuAvkTYJXRa%2FOvueKi22C%2BnXLQszSH9SgbSw%2FSTwf9SphoQN3ieIxAO1Me7XR9ibS6BCiqDvsKpz826l%2FfWSHf6sKW7bKr7Ld7DQzDf0woOUf1y%2Fp7gkiw2FwBnewUiMZLi1hu1rrZOSR4N3oVT4tebQ3RHyZWgl%2F9G3nBwgSYKoV3D6LzVXHoTDhQWHBaacylCEPdpqgO0qgrONRKehYond%2BG4GfZUBLkROkb1dZeIoffhzApYFR0FAiRywG09DwgX%2BmoPCvKgDcp9G7LGEySsBUmBV1LL8BtXdf6wuqhpmW3bwU0mhyYaR5%2Fd0NiLCNU3JAW%2FUIppQocSWAm9AeYmWzMkhYfS0fbEWF%2BRdmU9hM3kIS%2FeFXwzgtbmu2lby3VHG9xVRSvszevFqiP5NiwDmIAIE5PtqJRgrujjhkcPVFuApQgoqnd5pFqLwY%2FRYkcWw6CQvzRSFZBOweQni0Tf1JQbpVleLmWIPfHG%2FsWUxSoUedQ7b%2BbOqjQmG4s5V0QzVELX5N%2FeHnDvRcwi26C9FTDC6%2FgdAsMqrBon%2F6L0yuNOZlG7HuBkPfw6bWTCvoea8BjqkASYYF4TW2J%2FYVBcyHGgihhhGHIl8dW1L7iCVcfSt2%2FjxDBO%2FD5hKnHmkUHzbMRrDEHcZMX%2Bup7hb3Degf45FSYD6yDAKN5qZezthQmV3XOp6Mz%2F94lK21LDG%2BjTUgayMhJokN7NtZ%2FalfDInwkL4WcLdlozG%2BlPpby39Pbqgu68fAcb5F6iM4x37LNtMhD%2B2bX%2F%2BGcFhKyxYGWoCFTc7r9ahcgoS&X-Amz-Signature=8f12824bbba3d06fb92a2264277901f1381c2eed96cbe34414ee7606cd423610&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXN45KH3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCsAWv7D65JejzYYYbF1YgaabRdJ4t%2FiwSYYTfLCGqYxQIhAKuWeVrMqyZaZzM8kezPHxQZIyBAyGtO0TF2fxcn3L1DKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK%2BOTuFqYq8gxwX1Yq3AONCb%2BnkZTJ%2BwCbV5P1sKt%2FSbSyoQatiftpRIvwqNLMmVKDApeC2n%2FYwXZPYI%2FuCuAvkTYJXRa%2FOvueKi22C%2BnXLQszSH9SgbSw%2FSTwf9SphoQN3ieIxAO1Me7XR9ibS6BCiqDvsKpz826l%2FfWSHf6sKW7bKr7Ld7DQzDf0woOUf1y%2Fp7gkiw2FwBnewUiMZLi1hu1rrZOSR4N3oVT4tebQ3RHyZWgl%2F9G3nBwgSYKoV3D6LzVXHoTDhQWHBaacylCEPdpqgO0qgrONRKehYond%2BG4GfZUBLkROkb1dZeIoffhzApYFR0FAiRywG09DwgX%2BmoPCvKgDcp9G7LGEySsBUmBV1LL8BtXdf6wuqhpmW3bwU0mhyYaR5%2Fd0NiLCNU3JAW%2FUIppQocSWAm9AeYmWzMkhYfS0fbEWF%2BRdmU9hM3kIS%2FeFXwzgtbmu2lby3VHG9xVRSvszevFqiP5NiwDmIAIE5PtqJRgrujjhkcPVFuApQgoqnd5pFqLwY%2FRYkcWw6CQvzRSFZBOweQni0Tf1JQbpVleLmWIPfHG%2FsWUxSoUedQ7b%2BbOqjQmG4s5V0QzVELX5N%2FeHnDvRcwi26C9FTDC6%2FgdAsMqrBon%2F6L0yuNOZlG7HuBkPfw6bWTCvoea8BjqkASYYF4TW2J%2FYVBcyHGgihhhGHIl8dW1L7iCVcfSt2%2FjxDBO%2FD5hKnHmkUHzbMRrDEHcZMX%2Bup7hb3Degf45FSYD6yDAKN5qZezthQmV3XOp6Mz%2F94lK21LDG%2BjTUgayMhJokN7NtZ%2FalfDInwkL4WcLdlozG%2BlPpby39Pbqgu68fAcb5F6iM4x37LNtMhD%2B2bX%2F%2BGcFhKyxYGWoCFTc7r9ahcgoS&X-Amz-Signature=ef7c6ebc6be8ead1c253d398bbc64fbda8b8683f4b6266e943bf71f74d46e218&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXN45KH3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCsAWv7D65JejzYYYbF1YgaabRdJ4t%2FiwSYYTfLCGqYxQIhAKuWeVrMqyZaZzM8kezPHxQZIyBAyGtO0TF2fxcn3L1DKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK%2BOTuFqYq8gxwX1Yq3AONCb%2BnkZTJ%2BwCbV5P1sKt%2FSbSyoQatiftpRIvwqNLMmVKDApeC2n%2FYwXZPYI%2FuCuAvkTYJXRa%2FOvueKi22C%2BnXLQszSH9SgbSw%2FSTwf9SphoQN3ieIxAO1Me7XR9ibS6BCiqDvsKpz826l%2FfWSHf6sKW7bKr7Ld7DQzDf0woOUf1y%2Fp7gkiw2FwBnewUiMZLi1hu1rrZOSR4N3oVT4tebQ3RHyZWgl%2F9G3nBwgSYKoV3D6LzVXHoTDhQWHBaacylCEPdpqgO0qgrONRKehYond%2BG4GfZUBLkROkb1dZeIoffhzApYFR0FAiRywG09DwgX%2BmoPCvKgDcp9G7LGEySsBUmBV1LL8BtXdf6wuqhpmW3bwU0mhyYaR5%2Fd0NiLCNU3JAW%2FUIppQocSWAm9AeYmWzMkhYfS0fbEWF%2BRdmU9hM3kIS%2FeFXwzgtbmu2lby3VHG9xVRSvszevFqiP5NiwDmIAIE5PtqJRgrujjhkcPVFuApQgoqnd5pFqLwY%2FRYkcWw6CQvzRSFZBOweQni0Tf1JQbpVleLmWIPfHG%2FsWUxSoUedQ7b%2BbOqjQmG4s5V0QzVELX5N%2FeHnDvRcwi26C9FTDC6%2FgdAsMqrBon%2F6L0yuNOZlG7HuBkPfw6bWTCvoea8BjqkASYYF4TW2J%2FYVBcyHGgihhhGHIl8dW1L7iCVcfSt2%2FjxDBO%2FD5hKnHmkUHzbMRrDEHcZMX%2Bup7hb3Degf45FSYD6yDAKN5qZezthQmV3XOp6Mz%2F94lK21LDG%2BjTUgayMhJokN7NtZ%2FalfDInwkL4WcLdlozG%2BlPpby39Pbqgu68fAcb5F6iM4x37LNtMhD%2B2bX%2F%2BGcFhKyxYGWoCFTc7r9ahcgoS&X-Amz-Signature=02917e352320bb6dff90c62a3d62b4f57a6e7c5f6ba4dfa0d9ac4682e53808e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXN45KH3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCsAWv7D65JejzYYYbF1YgaabRdJ4t%2FiwSYYTfLCGqYxQIhAKuWeVrMqyZaZzM8kezPHxQZIyBAyGtO0TF2fxcn3L1DKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK%2BOTuFqYq8gxwX1Yq3AONCb%2BnkZTJ%2BwCbV5P1sKt%2FSbSyoQatiftpRIvwqNLMmVKDApeC2n%2FYwXZPYI%2FuCuAvkTYJXRa%2FOvueKi22C%2BnXLQszSH9SgbSw%2FSTwf9SphoQN3ieIxAO1Me7XR9ibS6BCiqDvsKpz826l%2FfWSHf6sKW7bKr7Ld7DQzDf0woOUf1y%2Fp7gkiw2FwBnewUiMZLi1hu1rrZOSR4N3oVT4tebQ3RHyZWgl%2F9G3nBwgSYKoV3D6LzVXHoTDhQWHBaacylCEPdpqgO0qgrONRKehYond%2BG4GfZUBLkROkb1dZeIoffhzApYFR0FAiRywG09DwgX%2BmoPCvKgDcp9G7LGEySsBUmBV1LL8BtXdf6wuqhpmW3bwU0mhyYaR5%2Fd0NiLCNU3JAW%2FUIppQocSWAm9AeYmWzMkhYfS0fbEWF%2BRdmU9hM3kIS%2FeFXwzgtbmu2lby3VHG9xVRSvszevFqiP5NiwDmIAIE5PtqJRgrujjhkcPVFuApQgoqnd5pFqLwY%2FRYkcWw6CQvzRSFZBOweQni0Tf1JQbpVleLmWIPfHG%2FsWUxSoUedQ7b%2BbOqjQmG4s5V0QzVELX5N%2FeHnDvRcwi26C9FTDC6%2FgdAsMqrBon%2F6L0yuNOZlG7HuBkPfw6bWTCvoea8BjqkASYYF4TW2J%2FYVBcyHGgihhhGHIl8dW1L7iCVcfSt2%2FjxDBO%2FD5hKnHmkUHzbMRrDEHcZMX%2Bup7hb3Degf45FSYD6yDAKN5qZezthQmV3XOp6Mz%2F94lK21LDG%2BjTUgayMhJokN7NtZ%2FalfDInwkL4WcLdlozG%2BlPpby39Pbqgu68fAcb5F6iM4x37LNtMhD%2B2bX%2F%2BGcFhKyxYGWoCFTc7r9ahcgoS&X-Amz-Signature=749a53f1b1b1ffff3b8243d283573192891698f2f7faf5e9608b0d1b8a8131b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
