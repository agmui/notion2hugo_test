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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQRT3OTE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIALnswzyEnuEFAgVGr4D5ojNuiAvWhKPVYTZmJqzkN0oAiBl%2FT2BiqYx%2BanAv%2BRQKQawGKBiLEspksPU2tCXjgyIaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMsQUyD2DV0Hlt%2BhbNKtwDmiM8D9XdsMHH61rw2chIIUbcLzvgNi%2FwMp%2BuLV%2FT5IMDJ%2BXCGwb08rcmitm%2BwiQekALj1PfmDHkhwgjPhGac%2BMGHsuQzOTCtZdWKt6bsq7sQeNk5Et06K4lxACB5yYuHHZKtVMKt5O0FCKPXlMzdYLndS%2Fji6PSCN%2BgOgeb03ehlr0RrO2x2tTTuZz2jl2Y84oALjB96pQb8o42TYoUpAKH8IqOqhYodklsn8Lskfwlsh5s7mB2pb%2Bst5ggXuzVdrRBKD8LlJojCMlHsZo3k4GAkLG2rO9Ijokny5Rglxj63RTf5hYgsCKtB2%2B67F%2BdieeKWKYSeecLXIWrNdUVBv2odD29JUXiTOsVgTKwTRWkULpOFPaBICua2X0WjyOsdH7UL1kUL5px6smft1jBAQTd2ROxKURl8skSYFYt33QONGafqg34TVoNGMvhFLet4yf7ImwuCMVLw8X%2FwO3qXN%2BsFSGVXUPnsI02YpAwaLg7i63lKAvYac%2FwnIFO2WhFJXetyqhF22bAVSAfQrjKoo8kSwWhmq0SUIFv2oH7YO0pbkHBcQDSq1naOilJ8BS%2BvJlsjzI1GboIFTPVWyBAXewqYk4oh%2F%2FfwGPsfRau2i0oOx8Xk2ql%2BJdoJfVAw5MG1wgY6pgF1iYagkLFic7cr2XrigJf3cZoWxMXeiUMEcFFhdHzF9ktCQHXRkS3eyJiq9e3sZlc3Kh%2BzdKKAJo9tKJnLn%2FeaAVfNEi7qJBWz5xydLNzarVTAB6OYUN5ouv6U6nllS6BNEB%2FupBG25Jm0CZhhb5wO1ewysDorZreBuBFrSs%2BGxex1pB3huQ1mOVU9fA%2F10yuTZctC5v2mydHWj42t5UW6hEC5kqg5&X-Amz-Signature=16ac42a71607ea4c389a910d4b9c98abc7a2c6a733ddcd446feba68cfc9c3ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQRT3OTE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIALnswzyEnuEFAgVGr4D5ojNuiAvWhKPVYTZmJqzkN0oAiBl%2FT2BiqYx%2BanAv%2BRQKQawGKBiLEspksPU2tCXjgyIaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMsQUyD2DV0Hlt%2BhbNKtwDmiM8D9XdsMHH61rw2chIIUbcLzvgNi%2FwMp%2BuLV%2FT5IMDJ%2BXCGwb08rcmitm%2BwiQekALj1PfmDHkhwgjPhGac%2BMGHsuQzOTCtZdWKt6bsq7sQeNk5Et06K4lxACB5yYuHHZKtVMKt5O0FCKPXlMzdYLndS%2Fji6PSCN%2BgOgeb03ehlr0RrO2x2tTTuZz2jl2Y84oALjB96pQb8o42TYoUpAKH8IqOqhYodklsn8Lskfwlsh5s7mB2pb%2Bst5ggXuzVdrRBKD8LlJojCMlHsZo3k4GAkLG2rO9Ijokny5Rglxj63RTf5hYgsCKtB2%2B67F%2BdieeKWKYSeecLXIWrNdUVBv2odD29JUXiTOsVgTKwTRWkULpOFPaBICua2X0WjyOsdH7UL1kUL5px6smft1jBAQTd2ROxKURl8skSYFYt33QONGafqg34TVoNGMvhFLet4yf7ImwuCMVLw8X%2FwO3qXN%2BsFSGVXUPnsI02YpAwaLg7i63lKAvYac%2FwnIFO2WhFJXetyqhF22bAVSAfQrjKoo8kSwWhmq0SUIFv2oH7YO0pbkHBcQDSq1naOilJ8BS%2BvJlsjzI1GboIFTPVWyBAXewqYk4oh%2F%2FfwGPsfRau2i0oOx8Xk2ql%2BJdoJfVAw5MG1wgY6pgF1iYagkLFic7cr2XrigJf3cZoWxMXeiUMEcFFhdHzF9ktCQHXRkS3eyJiq9e3sZlc3Kh%2BzdKKAJo9tKJnLn%2FeaAVfNEi7qJBWz5xydLNzarVTAB6OYUN5ouv6U6nllS6BNEB%2FupBG25Jm0CZhhb5wO1ewysDorZreBuBFrSs%2BGxex1pB3huQ1mOVU9fA%2F10yuTZctC5v2mydHWj42t5UW6hEC5kqg5&X-Amz-Signature=1492834153657e5a2d960ab4539a42f35666a940ff52f4be1e69f445b68061f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQRT3OTE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIALnswzyEnuEFAgVGr4D5ojNuiAvWhKPVYTZmJqzkN0oAiBl%2FT2BiqYx%2BanAv%2BRQKQawGKBiLEspksPU2tCXjgyIaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMsQUyD2DV0Hlt%2BhbNKtwDmiM8D9XdsMHH61rw2chIIUbcLzvgNi%2FwMp%2BuLV%2FT5IMDJ%2BXCGwb08rcmitm%2BwiQekALj1PfmDHkhwgjPhGac%2BMGHsuQzOTCtZdWKt6bsq7sQeNk5Et06K4lxACB5yYuHHZKtVMKt5O0FCKPXlMzdYLndS%2Fji6PSCN%2BgOgeb03ehlr0RrO2x2tTTuZz2jl2Y84oALjB96pQb8o42TYoUpAKH8IqOqhYodklsn8Lskfwlsh5s7mB2pb%2Bst5ggXuzVdrRBKD8LlJojCMlHsZo3k4GAkLG2rO9Ijokny5Rglxj63RTf5hYgsCKtB2%2B67F%2BdieeKWKYSeecLXIWrNdUVBv2odD29JUXiTOsVgTKwTRWkULpOFPaBICua2X0WjyOsdH7UL1kUL5px6smft1jBAQTd2ROxKURl8skSYFYt33QONGafqg34TVoNGMvhFLet4yf7ImwuCMVLw8X%2FwO3qXN%2BsFSGVXUPnsI02YpAwaLg7i63lKAvYac%2FwnIFO2WhFJXetyqhF22bAVSAfQrjKoo8kSwWhmq0SUIFv2oH7YO0pbkHBcQDSq1naOilJ8BS%2BvJlsjzI1GboIFTPVWyBAXewqYk4oh%2F%2FfwGPsfRau2i0oOx8Xk2ql%2BJdoJfVAw5MG1wgY6pgF1iYagkLFic7cr2XrigJf3cZoWxMXeiUMEcFFhdHzF9ktCQHXRkS3eyJiq9e3sZlc3Kh%2BzdKKAJo9tKJnLn%2FeaAVfNEi7qJBWz5xydLNzarVTAB6OYUN5ouv6U6nllS6BNEB%2FupBG25Jm0CZhhb5wO1ewysDorZreBuBFrSs%2BGxex1pB3huQ1mOVU9fA%2F10yuTZctC5v2mydHWj42t5UW6hEC5kqg5&X-Amz-Signature=a6a7a0dc64dfb1998d599acb175727a463f0e8ab943020780f501dffcdf043f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQRT3OTE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIALnswzyEnuEFAgVGr4D5ojNuiAvWhKPVYTZmJqzkN0oAiBl%2FT2BiqYx%2BanAv%2BRQKQawGKBiLEspksPU2tCXjgyIaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMsQUyD2DV0Hlt%2BhbNKtwDmiM8D9XdsMHH61rw2chIIUbcLzvgNi%2FwMp%2BuLV%2FT5IMDJ%2BXCGwb08rcmitm%2BwiQekALj1PfmDHkhwgjPhGac%2BMGHsuQzOTCtZdWKt6bsq7sQeNk5Et06K4lxACB5yYuHHZKtVMKt5O0FCKPXlMzdYLndS%2Fji6PSCN%2BgOgeb03ehlr0RrO2x2tTTuZz2jl2Y84oALjB96pQb8o42TYoUpAKH8IqOqhYodklsn8Lskfwlsh5s7mB2pb%2Bst5ggXuzVdrRBKD8LlJojCMlHsZo3k4GAkLG2rO9Ijokny5Rglxj63RTf5hYgsCKtB2%2B67F%2BdieeKWKYSeecLXIWrNdUVBv2odD29JUXiTOsVgTKwTRWkULpOFPaBICua2X0WjyOsdH7UL1kUL5px6smft1jBAQTd2ROxKURl8skSYFYt33QONGafqg34TVoNGMvhFLet4yf7ImwuCMVLw8X%2FwO3qXN%2BsFSGVXUPnsI02YpAwaLg7i63lKAvYac%2FwnIFO2WhFJXetyqhF22bAVSAfQrjKoo8kSwWhmq0SUIFv2oH7YO0pbkHBcQDSq1naOilJ8BS%2BvJlsjzI1GboIFTPVWyBAXewqYk4oh%2F%2FfwGPsfRau2i0oOx8Xk2ql%2BJdoJfVAw5MG1wgY6pgF1iYagkLFic7cr2XrigJf3cZoWxMXeiUMEcFFhdHzF9ktCQHXRkS3eyJiq9e3sZlc3Kh%2BzdKKAJo9tKJnLn%2FeaAVfNEi7qJBWz5xydLNzarVTAB6OYUN5ouv6U6nllS6BNEB%2FupBG25Jm0CZhhb5wO1ewysDorZreBuBFrSs%2BGxex1pB3huQ1mOVU9fA%2F10yuTZctC5v2mydHWj42t5UW6hEC5kqg5&X-Amz-Signature=642a6bbadfbb34fecd939977e77e1d3aa5586d5cfd2520b97d0b43d2e91faebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQRT3OTE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIALnswzyEnuEFAgVGr4D5ojNuiAvWhKPVYTZmJqzkN0oAiBl%2FT2BiqYx%2BanAv%2BRQKQawGKBiLEspksPU2tCXjgyIaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMsQUyD2DV0Hlt%2BhbNKtwDmiM8D9XdsMHH61rw2chIIUbcLzvgNi%2FwMp%2BuLV%2FT5IMDJ%2BXCGwb08rcmitm%2BwiQekALj1PfmDHkhwgjPhGac%2BMGHsuQzOTCtZdWKt6bsq7sQeNk5Et06K4lxACB5yYuHHZKtVMKt5O0FCKPXlMzdYLndS%2Fji6PSCN%2BgOgeb03ehlr0RrO2x2tTTuZz2jl2Y84oALjB96pQb8o42TYoUpAKH8IqOqhYodklsn8Lskfwlsh5s7mB2pb%2Bst5ggXuzVdrRBKD8LlJojCMlHsZo3k4GAkLG2rO9Ijokny5Rglxj63RTf5hYgsCKtB2%2B67F%2BdieeKWKYSeecLXIWrNdUVBv2odD29JUXiTOsVgTKwTRWkULpOFPaBICua2X0WjyOsdH7UL1kUL5px6smft1jBAQTd2ROxKURl8skSYFYt33QONGafqg34TVoNGMvhFLet4yf7ImwuCMVLw8X%2FwO3qXN%2BsFSGVXUPnsI02YpAwaLg7i63lKAvYac%2FwnIFO2WhFJXetyqhF22bAVSAfQrjKoo8kSwWhmq0SUIFv2oH7YO0pbkHBcQDSq1naOilJ8BS%2BvJlsjzI1GboIFTPVWyBAXewqYk4oh%2F%2FfwGPsfRau2i0oOx8Xk2ql%2BJdoJfVAw5MG1wgY6pgF1iYagkLFic7cr2XrigJf3cZoWxMXeiUMEcFFhdHzF9ktCQHXRkS3eyJiq9e3sZlc3Kh%2BzdKKAJo9tKJnLn%2FeaAVfNEi7qJBWz5xydLNzarVTAB6OYUN5ouv6U6nllS6BNEB%2FupBG25Jm0CZhhb5wO1ewysDorZreBuBFrSs%2BGxex1pB3huQ1mOVU9fA%2F10yuTZctC5v2mydHWj42t5UW6hEC5kqg5&X-Amz-Signature=a05e94fa8313d06928be818cae7b917d5a8fed47fa9ba677ff0f5aae632dce83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
