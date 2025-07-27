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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KIGVTG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDZ6n%2FzCPtPW7n%2BDchGjTdH66x0Jf0EW4Zjefld%2Fm%2Fx2AiAdAD04Zi60pHJFrw1LZOginiwIJgOD5Ez%2F%2BLxpeMa3yyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM%2FvuMhVTn6SS1LkhIKtwDhbx1y1CChO%2BL99nhmtSBMk8HMwWE0DDLCunzH9jaUSkoAJoL35xXFtCOTia7vb0RUuD5TZnmusc0LbMd4uqWRIxhPT88FVgIO3K1cHwjAaikDqsPW0FtWwrwjBHjnfmoLKvFn5jlRNlMdxsTTkzgvq4BgYUmVT5H3YAHaV1zmEfrXRci5Qnf8wuA7nKb88HVWmL%2BZsAwpSG35Qis8UzIcnLFN%2FNENKbS4f%2Fd819ojSazwDsEGrTBp7aK78%2FM05bFvL7%2FLfEsClJf4GAOnrPGCuWl6kx6lKyAAEAUXTEPhOB4uoVnbWX%2Faj%2BBK2tXTURQ8TWH195upmP4oKrD6Kz1dAtB7rluey1A3kvNIGbFjoA%2FUrivEn9jG1AVadr3cjE%2B1%2F%2FaZWojt%2B11V1bDgOirhRHXX2%2B2p%2FkTFMTjaQggbSqEZbAynxyNIRkyMUG8QlHWJq9wbQxpEpa41Q56Guv3uaLYBGnIVnbM6qlaFPizir5Py%2BKlFBK1yzaTNXVPTSWFHmeDm9ssqXmoi3383gUkKvSLTMvSVNFwz9zMXLsBHKlnxBFajQmRXHffYUxiGZVJdTe1fcb1Ah33hh1mLpdEWwkUNOLDfwhYtGqoqMA7rc%2FvuaZVx5mn49AP9FEwi%2F%2BYxAY6pgFFanFthMYlbCGC4A4zgqeD5VSs1KorXCM3WoFlHqJhY2ds3f8LUfDWSx88fhNWm5mQnzXYE64YD%2BF4TbEaSm2WWNDCF%2FpbLLUjTPJtoUqW7%2Bz6v5AWiRBwKnlAI3W3yQ%2FCH1%2BqLSt1oQ77cV69CFzEL%2B%2BHzqzpI3lpqIrsveH42w3aQ8HEZ31FfnZIJ2pWuKhbX6EpBEJLEu9T30Quis3wI0Grp9j9&X-Amz-Signature=87cdcac408b56c078859a74b2d3e95d76d0cdc23d41d86411b8514e9051f22c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KIGVTG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDZ6n%2FzCPtPW7n%2BDchGjTdH66x0Jf0EW4Zjefld%2Fm%2Fx2AiAdAD04Zi60pHJFrw1LZOginiwIJgOD5Ez%2F%2BLxpeMa3yyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM%2FvuMhVTn6SS1LkhIKtwDhbx1y1CChO%2BL99nhmtSBMk8HMwWE0DDLCunzH9jaUSkoAJoL35xXFtCOTia7vb0RUuD5TZnmusc0LbMd4uqWRIxhPT88FVgIO3K1cHwjAaikDqsPW0FtWwrwjBHjnfmoLKvFn5jlRNlMdxsTTkzgvq4BgYUmVT5H3YAHaV1zmEfrXRci5Qnf8wuA7nKb88HVWmL%2BZsAwpSG35Qis8UzIcnLFN%2FNENKbS4f%2Fd819ojSazwDsEGrTBp7aK78%2FM05bFvL7%2FLfEsClJf4GAOnrPGCuWl6kx6lKyAAEAUXTEPhOB4uoVnbWX%2Faj%2BBK2tXTURQ8TWH195upmP4oKrD6Kz1dAtB7rluey1A3kvNIGbFjoA%2FUrivEn9jG1AVadr3cjE%2B1%2F%2FaZWojt%2B11V1bDgOirhRHXX2%2B2p%2FkTFMTjaQggbSqEZbAynxyNIRkyMUG8QlHWJq9wbQxpEpa41Q56Guv3uaLYBGnIVnbM6qlaFPizir5Py%2BKlFBK1yzaTNXVPTSWFHmeDm9ssqXmoi3383gUkKvSLTMvSVNFwz9zMXLsBHKlnxBFajQmRXHffYUxiGZVJdTe1fcb1Ah33hh1mLpdEWwkUNOLDfwhYtGqoqMA7rc%2FvuaZVx5mn49AP9FEwi%2F%2BYxAY6pgFFanFthMYlbCGC4A4zgqeD5VSs1KorXCM3WoFlHqJhY2ds3f8LUfDWSx88fhNWm5mQnzXYE64YD%2BF4TbEaSm2WWNDCF%2FpbLLUjTPJtoUqW7%2Bz6v5AWiRBwKnlAI3W3yQ%2FCH1%2BqLSt1oQ77cV69CFzEL%2B%2BHzqzpI3lpqIrsveH42w3aQ8HEZ31FfnZIJ2pWuKhbX6EpBEJLEu9T30Quis3wI0Grp9j9&X-Amz-Signature=6dded5c77abd6d9e5429402f5ceb75ca77408e5f5c0620ddfc8c6b435dd295ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KIGVTG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDZ6n%2FzCPtPW7n%2BDchGjTdH66x0Jf0EW4Zjefld%2Fm%2Fx2AiAdAD04Zi60pHJFrw1LZOginiwIJgOD5Ez%2F%2BLxpeMa3yyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM%2FvuMhVTn6SS1LkhIKtwDhbx1y1CChO%2BL99nhmtSBMk8HMwWE0DDLCunzH9jaUSkoAJoL35xXFtCOTia7vb0RUuD5TZnmusc0LbMd4uqWRIxhPT88FVgIO3K1cHwjAaikDqsPW0FtWwrwjBHjnfmoLKvFn5jlRNlMdxsTTkzgvq4BgYUmVT5H3YAHaV1zmEfrXRci5Qnf8wuA7nKb88HVWmL%2BZsAwpSG35Qis8UzIcnLFN%2FNENKbS4f%2Fd819ojSazwDsEGrTBp7aK78%2FM05bFvL7%2FLfEsClJf4GAOnrPGCuWl6kx6lKyAAEAUXTEPhOB4uoVnbWX%2Faj%2BBK2tXTURQ8TWH195upmP4oKrD6Kz1dAtB7rluey1A3kvNIGbFjoA%2FUrivEn9jG1AVadr3cjE%2B1%2F%2FaZWojt%2B11V1bDgOirhRHXX2%2B2p%2FkTFMTjaQggbSqEZbAynxyNIRkyMUG8QlHWJq9wbQxpEpa41Q56Guv3uaLYBGnIVnbM6qlaFPizir5Py%2BKlFBK1yzaTNXVPTSWFHmeDm9ssqXmoi3383gUkKvSLTMvSVNFwz9zMXLsBHKlnxBFajQmRXHffYUxiGZVJdTe1fcb1Ah33hh1mLpdEWwkUNOLDfwhYtGqoqMA7rc%2FvuaZVx5mn49AP9FEwi%2F%2BYxAY6pgFFanFthMYlbCGC4A4zgqeD5VSs1KorXCM3WoFlHqJhY2ds3f8LUfDWSx88fhNWm5mQnzXYE64YD%2BF4TbEaSm2WWNDCF%2FpbLLUjTPJtoUqW7%2Bz6v5AWiRBwKnlAI3W3yQ%2FCH1%2BqLSt1oQ77cV69CFzEL%2B%2BHzqzpI3lpqIrsveH42w3aQ8HEZ31FfnZIJ2pWuKhbX6EpBEJLEu9T30Quis3wI0Grp9j9&X-Amz-Signature=c08736c5232f7b3d929ea3c61e223e590aa9b4c5259a68f73b6c1d655141917c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KIGVTG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDZ6n%2FzCPtPW7n%2BDchGjTdH66x0Jf0EW4Zjefld%2Fm%2Fx2AiAdAD04Zi60pHJFrw1LZOginiwIJgOD5Ez%2F%2BLxpeMa3yyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM%2FvuMhVTn6SS1LkhIKtwDhbx1y1CChO%2BL99nhmtSBMk8HMwWE0DDLCunzH9jaUSkoAJoL35xXFtCOTia7vb0RUuD5TZnmusc0LbMd4uqWRIxhPT88FVgIO3K1cHwjAaikDqsPW0FtWwrwjBHjnfmoLKvFn5jlRNlMdxsTTkzgvq4BgYUmVT5H3YAHaV1zmEfrXRci5Qnf8wuA7nKb88HVWmL%2BZsAwpSG35Qis8UzIcnLFN%2FNENKbS4f%2Fd819ojSazwDsEGrTBp7aK78%2FM05bFvL7%2FLfEsClJf4GAOnrPGCuWl6kx6lKyAAEAUXTEPhOB4uoVnbWX%2Faj%2BBK2tXTURQ8TWH195upmP4oKrD6Kz1dAtB7rluey1A3kvNIGbFjoA%2FUrivEn9jG1AVadr3cjE%2B1%2F%2FaZWojt%2B11V1bDgOirhRHXX2%2B2p%2FkTFMTjaQggbSqEZbAynxyNIRkyMUG8QlHWJq9wbQxpEpa41Q56Guv3uaLYBGnIVnbM6qlaFPizir5Py%2BKlFBK1yzaTNXVPTSWFHmeDm9ssqXmoi3383gUkKvSLTMvSVNFwz9zMXLsBHKlnxBFajQmRXHffYUxiGZVJdTe1fcb1Ah33hh1mLpdEWwkUNOLDfwhYtGqoqMA7rc%2FvuaZVx5mn49AP9FEwi%2F%2BYxAY6pgFFanFthMYlbCGC4A4zgqeD5VSs1KorXCM3WoFlHqJhY2ds3f8LUfDWSx88fhNWm5mQnzXYE64YD%2BF4TbEaSm2WWNDCF%2FpbLLUjTPJtoUqW7%2Bz6v5AWiRBwKnlAI3W3yQ%2FCH1%2BqLSt1oQ77cV69CFzEL%2B%2BHzqzpI3lpqIrsveH42w3aQ8HEZ31FfnZIJ2pWuKhbX6EpBEJLEu9T30Quis3wI0Grp9j9&X-Amz-Signature=4aeb5dc9464d5eddfc20fc3df7dfa74828689d83b3e58b6ef730e9eab0036546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KIGVTG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDZ6n%2FzCPtPW7n%2BDchGjTdH66x0Jf0EW4Zjefld%2Fm%2Fx2AiAdAD04Zi60pHJFrw1LZOginiwIJgOD5Ez%2F%2BLxpeMa3yyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM%2FvuMhVTn6SS1LkhIKtwDhbx1y1CChO%2BL99nhmtSBMk8HMwWE0DDLCunzH9jaUSkoAJoL35xXFtCOTia7vb0RUuD5TZnmusc0LbMd4uqWRIxhPT88FVgIO3K1cHwjAaikDqsPW0FtWwrwjBHjnfmoLKvFn5jlRNlMdxsTTkzgvq4BgYUmVT5H3YAHaV1zmEfrXRci5Qnf8wuA7nKb88HVWmL%2BZsAwpSG35Qis8UzIcnLFN%2FNENKbS4f%2Fd819ojSazwDsEGrTBp7aK78%2FM05bFvL7%2FLfEsClJf4GAOnrPGCuWl6kx6lKyAAEAUXTEPhOB4uoVnbWX%2Faj%2BBK2tXTURQ8TWH195upmP4oKrD6Kz1dAtB7rluey1A3kvNIGbFjoA%2FUrivEn9jG1AVadr3cjE%2B1%2F%2FaZWojt%2B11V1bDgOirhRHXX2%2B2p%2FkTFMTjaQggbSqEZbAynxyNIRkyMUG8QlHWJq9wbQxpEpa41Q56Guv3uaLYBGnIVnbM6qlaFPizir5Py%2BKlFBK1yzaTNXVPTSWFHmeDm9ssqXmoi3383gUkKvSLTMvSVNFwz9zMXLsBHKlnxBFajQmRXHffYUxiGZVJdTe1fcb1Ah33hh1mLpdEWwkUNOLDfwhYtGqoqMA7rc%2FvuaZVx5mn49AP9FEwi%2F%2BYxAY6pgFFanFthMYlbCGC4A4zgqeD5VSs1KorXCM3WoFlHqJhY2ds3f8LUfDWSx88fhNWm5mQnzXYE64YD%2BF4TbEaSm2WWNDCF%2FpbLLUjTPJtoUqW7%2Bz6v5AWiRBwKnlAI3W3yQ%2FCH1%2BqLSt1oQ77cV69CFzEL%2B%2BHzqzpI3lpqIrsveH42w3aQ8HEZ31FfnZIJ2pWuKhbX6EpBEJLEu9T30Quis3wI0Grp9j9&X-Amz-Signature=b668408a244f2b936d5255a1146145f08dcf7f7478832614deec7a1352556afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
