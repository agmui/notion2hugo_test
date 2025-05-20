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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCT54YXZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRh3VWwNXXf1GhX9uhLeRFlBs%2B7fs27cjMQXF9h%2Br%2BZAiEA%2FgQFeypjdv%2FweIB9PdnPxTeFEqa7hsBwqrlsRd5jGwEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2Bw1TcVRpMLp9R9yrcAybxjNYnV3muM%2B9MwVE9C7X9jy46dQSBig%2BZ%2FlffWilKadeHmLyM%2BYv2nkJnMtSlYgZ9lsBRgUOBk6ErbSeBxKN2mVqVU08aBCIEiSRg1xvU3jtTwdyCx4yMKL0V2TD8izflBYbXzcRng9Qz5dho1hlyT8AoP3NFGLxb2FINfWPUpoBwnNYlvyf9EGTD%2BYUB7FiWUWrsQNWwIcxIquce5kKo7Zs8QtHMMyvUSAL%2FP580BwH5kjLF0Oky%2FJ46cjxihFrSyOhfv3U90I8MZ5nnpUo7TWubnGmdONlU%2BuZXJ9U20LL0z5jOalY7LtBpf6Rv5sbvAd6ej7T5FscvVbiNdJPt8MbON%2BIQGU2iw6TwiEQFWtJQNRZEt07j%2B%2FVHKjKFeKAoE6DiXaGatchp%2FnhZUcPP%2B1Q4gi3Xs4xjo%2Ft6gQdGAuhv2ZIxx2oP2%2FpqRtxfJ7ZMyoeg2GJSAGZa7zQzSFwFs5hxttXQpA6ZaBbKp9wEHf0cPaKs%2Bwekn90HSoqLm%2B8HrpRy4ZGx5NlSqGXM2CLr68XdTroKVT7uLbRXKmtP9NGjQz7WzcXPpPPE8aHeM8od5bafzynJH1w0%2FjNT8BP7kKffuhcDnJTBySK%2Fs6uMc7R77gZD2R3t8FPnMNbLs8EGOqUBOIFR3aL%2FLoWucYKii23nuPMEDFMrYTLSsWHH1LAJEYG%2Fxsi5YVXMpxPVm2SxM0lv%2FQIsWKq%2FmrJlksQeKOfVGLWr1OQz5DRmHFnECIgVIVQf%2Fnn3Vs3gUT4bibbKs5064VZrZjSjmoK2mU921yqyaw7OxF3z47PtmqmZY5V1DQBFGs9dh58rQdJ7swLuwmW%2B%2BPA%2Bc3kE6WCivimouJyjOmMifcUV&X-Amz-Signature=0f7bd7f64ed56429ddd28554af6324bafbd18aa96bdd513b42996c0443fc9dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCT54YXZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRh3VWwNXXf1GhX9uhLeRFlBs%2B7fs27cjMQXF9h%2Br%2BZAiEA%2FgQFeypjdv%2FweIB9PdnPxTeFEqa7hsBwqrlsRd5jGwEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2Bw1TcVRpMLp9R9yrcAybxjNYnV3muM%2B9MwVE9C7X9jy46dQSBig%2BZ%2FlffWilKadeHmLyM%2BYv2nkJnMtSlYgZ9lsBRgUOBk6ErbSeBxKN2mVqVU08aBCIEiSRg1xvU3jtTwdyCx4yMKL0V2TD8izflBYbXzcRng9Qz5dho1hlyT8AoP3NFGLxb2FINfWPUpoBwnNYlvyf9EGTD%2BYUB7FiWUWrsQNWwIcxIquce5kKo7Zs8QtHMMyvUSAL%2FP580BwH5kjLF0Oky%2FJ46cjxihFrSyOhfv3U90I8MZ5nnpUo7TWubnGmdONlU%2BuZXJ9U20LL0z5jOalY7LtBpf6Rv5sbvAd6ej7T5FscvVbiNdJPt8MbON%2BIQGU2iw6TwiEQFWtJQNRZEt07j%2B%2FVHKjKFeKAoE6DiXaGatchp%2FnhZUcPP%2B1Q4gi3Xs4xjo%2Ft6gQdGAuhv2ZIxx2oP2%2FpqRtxfJ7ZMyoeg2GJSAGZa7zQzSFwFs5hxttXQpA6ZaBbKp9wEHf0cPaKs%2Bwekn90HSoqLm%2B8HrpRy4ZGx5NlSqGXM2CLr68XdTroKVT7uLbRXKmtP9NGjQz7WzcXPpPPE8aHeM8od5bafzynJH1w0%2FjNT8BP7kKffuhcDnJTBySK%2Fs6uMc7R77gZD2R3t8FPnMNbLs8EGOqUBOIFR3aL%2FLoWucYKii23nuPMEDFMrYTLSsWHH1LAJEYG%2Fxsi5YVXMpxPVm2SxM0lv%2FQIsWKq%2FmrJlksQeKOfVGLWr1OQz5DRmHFnECIgVIVQf%2Fnn3Vs3gUT4bibbKs5064VZrZjSjmoK2mU921yqyaw7OxF3z47PtmqmZY5V1DQBFGs9dh58rQdJ7swLuwmW%2B%2BPA%2Bc3kE6WCivimouJyjOmMifcUV&X-Amz-Signature=5efa761706f203b8a2ef2ee5aec31d671a5a5695a1de583b66166551169f8e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCT54YXZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRh3VWwNXXf1GhX9uhLeRFlBs%2B7fs27cjMQXF9h%2Br%2BZAiEA%2FgQFeypjdv%2FweIB9PdnPxTeFEqa7hsBwqrlsRd5jGwEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2Bw1TcVRpMLp9R9yrcAybxjNYnV3muM%2B9MwVE9C7X9jy46dQSBig%2BZ%2FlffWilKadeHmLyM%2BYv2nkJnMtSlYgZ9lsBRgUOBk6ErbSeBxKN2mVqVU08aBCIEiSRg1xvU3jtTwdyCx4yMKL0V2TD8izflBYbXzcRng9Qz5dho1hlyT8AoP3NFGLxb2FINfWPUpoBwnNYlvyf9EGTD%2BYUB7FiWUWrsQNWwIcxIquce5kKo7Zs8QtHMMyvUSAL%2FP580BwH5kjLF0Oky%2FJ46cjxihFrSyOhfv3U90I8MZ5nnpUo7TWubnGmdONlU%2BuZXJ9U20LL0z5jOalY7LtBpf6Rv5sbvAd6ej7T5FscvVbiNdJPt8MbON%2BIQGU2iw6TwiEQFWtJQNRZEt07j%2B%2FVHKjKFeKAoE6DiXaGatchp%2FnhZUcPP%2B1Q4gi3Xs4xjo%2Ft6gQdGAuhv2ZIxx2oP2%2FpqRtxfJ7ZMyoeg2GJSAGZa7zQzSFwFs5hxttXQpA6ZaBbKp9wEHf0cPaKs%2Bwekn90HSoqLm%2B8HrpRy4ZGx5NlSqGXM2CLr68XdTroKVT7uLbRXKmtP9NGjQz7WzcXPpPPE8aHeM8od5bafzynJH1w0%2FjNT8BP7kKffuhcDnJTBySK%2Fs6uMc7R77gZD2R3t8FPnMNbLs8EGOqUBOIFR3aL%2FLoWucYKii23nuPMEDFMrYTLSsWHH1LAJEYG%2Fxsi5YVXMpxPVm2SxM0lv%2FQIsWKq%2FmrJlksQeKOfVGLWr1OQz5DRmHFnECIgVIVQf%2Fnn3Vs3gUT4bibbKs5064VZrZjSjmoK2mU921yqyaw7OxF3z47PtmqmZY5V1DQBFGs9dh58rQdJ7swLuwmW%2B%2BPA%2Bc3kE6WCivimouJyjOmMifcUV&X-Amz-Signature=6bf92bf619b0a07078ac1f2ca897911364158b8a4ebe8cc12a5ee8313c6562b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCT54YXZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRh3VWwNXXf1GhX9uhLeRFlBs%2B7fs27cjMQXF9h%2Br%2BZAiEA%2FgQFeypjdv%2FweIB9PdnPxTeFEqa7hsBwqrlsRd5jGwEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2Bw1TcVRpMLp9R9yrcAybxjNYnV3muM%2B9MwVE9C7X9jy46dQSBig%2BZ%2FlffWilKadeHmLyM%2BYv2nkJnMtSlYgZ9lsBRgUOBk6ErbSeBxKN2mVqVU08aBCIEiSRg1xvU3jtTwdyCx4yMKL0V2TD8izflBYbXzcRng9Qz5dho1hlyT8AoP3NFGLxb2FINfWPUpoBwnNYlvyf9EGTD%2BYUB7FiWUWrsQNWwIcxIquce5kKo7Zs8QtHMMyvUSAL%2FP580BwH5kjLF0Oky%2FJ46cjxihFrSyOhfv3U90I8MZ5nnpUo7TWubnGmdONlU%2BuZXJ9U20LL0z5jOalY7LtBpf6Rv5sbvAd6ej7T5FscvVbiNdJPt8MbON%2BIQGU2iw6TwiEQFWtJQNRZEt07j%2B%2FVHKjKFeKAoE6DiXaGatchp%2FnhZUcPP%2B1Q4gi3Xs4xjo%2Ft6gQdGAuhv2ZIxx2oP2%2FpqRtxfJ7ZMyoeg2GJSAGZa7zQzSFwFs5hxttXQpA6ZaBbKp9wEHf0cPaKs%2Bwekn90HSoqLm%2B8HrpRy4ZGx5NlSqGXM2CLr68XdTroKVT7uLbRXKmtP9NGjQz7WzcXPpPPE8aHeM8od5bafzynJH1w0%2FjNT8BP7kKffuhcDnJTBySK%2Fs6uMc7R77gZD2R3t8FPnMNbLs8EGOqUBOIFR3aL%2FLoWucYKii23nuPMEDFMrYTLSsWHH1LAJEYG%2Fxsi5YVXMpxPVm2SxM0lv%2FQIsWKq%2FmrJlksQeKOfVGLWr1OQz5DRmHFnECIgVIVQf%2Fnn3Vs3gUT4bibbKs5064VZrZjSjmoK2mU921yqyaw7OxF3z47PtmqmZY5V1DQBFGs9dh58rQdJ7swLuwmW%2B%2BPA%2Bc3kE6WCivimouJyjOmMifcUV&X-Amz-Signature=f0b61804aaf3ac5e62b6f662bae975d46f1757532d44b67f0f02b453ab049540&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCT54YXZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRh3VWwNXXf1GhX9uhLeRFlBs%2B7fs27cjMQXF9h%2Br%2BZAiEA%2FgQFeypjdv%2FweIB9PdnPxTeFEqa7hsBwqrlsRd5jGwEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2Bw1TcVRpMLp9R9yrcAybxjNYnV3muM%2B9MwVE9C7X9jy46dQSBig%2BZ%2FlffWilKadeHmLyM%2BYv2nkJnMtSlYgZ9lsBRgUOBk6ErbSeBxKN2mVqVU08aBCIEiSRg1xvU3jtTwdyCx4yMKL0V2TD8izflBYbXzcRng9Qz5dho1hlyT8AoP3NFGLxb2FINfWPUpoBwnNYlvyf9EGTD%2BYUB7FiWUWrsQNWwIcxIquce5kKo7Zs8QtHMMyvUSAL%2FP580BwH5kjLF0Oky%2FJ46cjxihFrSyOhfv3U90I8MZ5nnpUo7TWubnGmdONlU%2BuZXJ9U20LL0z5jOalY7LtBpf6Rv5sbvAd6ej7T5FscvVbiNdJPt8MbON%2BIQGU2iw6TwiEQFWtJQNRZEt07j%2B%2FVHKjKFeKAoE6DiXaGatchp%2FnhZUcPP%2B1Q4gi3Xs4xjo%2Ft6gQdGAuhv2ZIxx2oP2%2FpqRtxfJ7ZMyoeg2GJSAGZa7zQzSFwFs5hxttXQpA6ZaBbKp9wEHf0cPaKs%2Bwekn90HSoqLm%2B8HrpRy4ZGx5NlSqGXM2CLr68XdTroKVT7uLbRXKmtP9NGjQz7WzcXPpPPE8aHeM8od5bafzynJH1w0%2FjNT8BP7kKffuhcDnJTBySK%2Fs6uMc7R77gZD2R3t8FPnMNbLs8EGOqUBOIFR3aL%2FLoWucYKii23nuPMEDFMrYTLSsWHH1LAJEYG%2Fxsi5YVXMpxPVm2SxM0lv%2FQIsWKq%2FmrJlksQeKOfVGLWr1OQz5DRmHFnECIgVIVQf%2Fnn3Vs3gUT4bibbKs5064VZrZjSjmoK2mU921yqyaw7OxF3z47PtmqmZY5V1DQBFGs9dh58rQdJ7swLuwmW%2B%2BPA%2Bc3kE6WCivimouJyjOmMifcUV&X-Amz-Signature=6a6c29ad30a542ff7d0dc55e33a817ce615440d5adc1ffe4c5405c97687f1bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
