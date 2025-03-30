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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IOWBHQF%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIH8E8cUkmy5ichRep0UhBcl%2BgPs35Mzc9C07YFu2h21vAiEAq%2BrCxzUzLpLfnIdbY1R4b1Rf%2Br%2FxS4RZCtEid2Gw1FsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExK6OZXfm%2F2S3uQYircA%2Bt3OjjZ7Bwx%2BqxqnLIfqZAR%2FDTdYg8KPRvCsU7iQjMp6YKA%2BPf0vGxwrR5Sk0vpK6uArFUTVG5MKemNzVhoKndmW8CH9cpUK47r8B7oulrzt8neVxGr%2BD%2BtDFPCOKi%2F1Fms0SgqGfoVQpuXBgFZGHU55sbdRI7LhwvI8qglvuRSr9TKbliDS1egV4tDDZt43PBlsGrW5a4Cgm6yq8SDn%2BSjTRM3qGqjtWZsv7FDv8zdiP23PtjOwZfAhVeQe3uwUu7Hy0Zfu9aJt84ktUHps71FCfd4pSzUOKXEc2rZT8behRvGdzsmGVuLeohgykQDLb2tFbpSLgw7VYi%2F6jbltOwwuPaU3fHbdv8LGZ%2Bj6mympO99rG2cjXWfDb9ZfDuIBkqtD3bYuDRZFhDKX7h74sya8tguauB0F5h8%2FnbURPBVNdYbiBDSdsiFTXp4alRGKOLG80gXQMBd9RTOBwMn1OgqA94FA5MuQoyaemOu0ewzfn3SRrQuMgy1AY9tQER%2B4MRnmGr6ur5SI%2BpQh%2BSvlta4Vxyl8NTg5FUVzAooIsWSWjCQUgKblRbOfKVVGNPwTjXfP%2FjZfDFjlXmZxhBHBXlo2fDZldSyWm6xTgmFDxO%2BQo5f47I%2B41qdZJyhMMmbpr8GOqUBNSZgpqrDFIcbmhVm7j%2BBFucfnjyoCxuKip4bukIuR79n111437z7fo%2FycZMpR1r22ogXo%2Bc9L1xDzCs2TKRqkJNqCaGZB8L3oxVBJWVT5%2FBxxcXIs9S5zHi6LNWjL6t7f5cKOPLgNIpAiAbCxvwkWsrv61e1CAIrvnU7mk%2Bowt3pVB%2FRKDdbSj15WMm4RsRhsxh00vs7gAf7GYdVVa8YD8JeArp8&X-Amz-Signature=04e94cf39a328545203ade614f34d517800e91d49d52e4be78fea1fdeba369ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IOWBHQF%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIH8E8cUkmy5ichRep0UhBcl%2BgPs35Mzc9C07YFu2h21vAiEAq%2BrCxzUzLpLfnIdbY1R4b1Rf%2Br%2FxS4RZCtEid2Gw1FsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExK6OZXfm%2F2S3uQYircA%2Bt3OjjZ7Bwx%2BqxqnLIfqZAR%2FDTdYg8KPRvCsU7iQjMp6YKA%2BPf0vGxwrR5Sk0vpK6uArFUTVG5MKemNzVhoKndmW8CH9cpUK47r8B7oulrzt8neVxGr%2BD%2BtDFPCOKi%2F1Fms0SgqGfoVQpuXBgFZGHU55sbdRI7LhwvI8qglvuRSr9TKbliDS1egV4tDDZt43PBlsGrW5a4Cgm6yq8SDn%2BSjTRM3qGqjtWZsv7FDv8zdiP23PtjOwZfAhVeQe3uwUu7Hy0Zfu9aJt84ktUHps71FCfd4pSzUOKXEc2rZT8behRvGdzsmGVuLeohgykQDLb2tFbpSLgw7VYi%2F6jbltOwwuPaU3fHbdv8LGZ%2Bj6mympO99rG2cjXWfDb9ZfDuIBkqtD3bYuDRZFhDKX7h74sya8tguauB0F5h8%2FnbURPBVNdYbiBDSdsiFTXp4alRGKOLG80gXQMBd9RTOBwMn1OgqA94FA5MuQoyaemOu0ewzfn3SRrQuMgy1AY9tQER%2B4MRnmGr6ur5SI%2BpQh%2BSvlta4Vxyl8NTg5FUVzAooIsWSWjCQUgKblRbOfKVVGNPwTjXfP%2FjZfDFjlXmZxhBHBXlo2fDZldSyWm6xTgmFDxO%2BQo5f47I%2B41qdZJyhMMmbpr8GOqUBNSZgpqrDFIcbmhVm7j%2BBFucfnjyoCxuKip4bukIuR79n111437z7fo%2FycZMpR1r22ogXo%2Bc9L1xDzCs2TKRqkJNqCaGZB8L3oxVBJWVT5%2FBxxcXIs9S5zHi6LNWjL6t7f5cKOPLgNIpAiAbCxvwkWsrv61e1CAIrvnU7mk%2Bowt3pVB%2FRKDdbSj15WMm4RsRhsxh00vs7gAf7GYdVVa8YD8JeArp8&X-Amz-Signature=a5d6e3d44968d9f14a0b391474f8e2da8334d36125345355f15b93874de72324&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IOWBHQF%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIH8E8cUkmy5ichRep0UhBcl%2BgPs35Mzc9C07YFu2h21vAiEAq%2BrCxzUzLpLfnIdbY1R4b1Rf%2Br%2FxS4RZCtEid2Gw1FsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExK6OZXfm%2F2S3uQYircA%2Bt3OjjZ7Bwx%2BqxqnLIfqZAR%2FDTdYg8KPRvCsU7iQjMp6YKA%2BPf0vGxwrR5Sk0vpK6uArFUTVG5MKemNzVhoKndmW8CH9cpUK47r8B7oulrzt8neVxGr%2BD%2BtDFPCOKi%2F1Fms0SgqGfoVQpuXBgFZGHU55sbdRI7LhwvI8qglvuRSr9TKbliDS1egV4tDDZt43PBlsGrW5a4Cgm6yq8SDn%2BSjTRM3qGqjtWZsv7FDv8zdiP23PtjOwZfAhVeQe3uwUu7Hy0Zfu9aJt84ktUHps71FCfd4pSzUOKXEc2rZT8behRvGdzsmGVuLeohgykQDLb2tFbpSLgw7VYi%2F6jbltOwwuPaU3fHbdv8LGZ%2Bj6mympO99rG2cjXWfDb9ZfDuIBkqtD3bYuDRZFhDKX7h74sya8tguauB0F5h8%2FnbURPBVNdYbiBDSdsiFTXp4alRGKOLG80gXQMBd9RTOBwMn1OgqA94FA5MuQoyaemOu0ewzfn3SRrQuMgy1AY9tQER%2B4MRnmGr6ur5SI%2BpQh%2BSvlta4Vxyl8NTg5FUVzAooIsWSWjCQUgKblRbOfKVVGNPwTjXfP%2FjZfDFjlXmZxhBHBXlo2fDZldSyWm6xTgmFDxO%2BQo5f47I%2B41qdZJyhMMmbpr8GOqUBNSZgpqrDFIcbmhVm7j%2BBFucfnjyoCxuKip4bukIuR79n111437z7fo%2FycZMpR1r22ogXo%2Bc9L1xDzCs2TKRqkJNqCaGZB8L3oxVBJWVT5%2FBxxcXIs9S5zHi6LNWjL6t7f5cKOPLgNIpAiAbCxvwkWsrv61e1CAIrvnU7mk%2Bowt3pVB%2FRKDdbSj15WMm4RsRhsxh00vs7gAf7GYdVVa8YD8JeArp8&X-Amz-Signature=80971e05a446bab598330b8a1c85ad3bea2051e38cd8b3851fc6eeb2419aaa18&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IOWBHQF%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIH8E8cUkmy5ichRep0UhBcl%2BgPs35Mzc9C07YFu2h21vAiEAq%2BrCxzUzLpLfnIdbY1R4b1Rf%2Br%2FxS4RZCtEid2Gw1FsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExK6OZXfm%2F2S3uQYircA%2Bt3OjjZ7Bwx%2BqxqnLIfqZAR%2FDTdYg8KPRvCsU7iQjMp6YKA%2BPf0vGxwrR5Sk0vpK6uArFUTVG5MKemNzVhoKndmW8CH9cpUK47r8B7oulrzt8neVxGr%2BD%2BtDFPCOKi%2F1Fms0SgqGfoVQpuXBgFZGHU55sbdRI7LhwvI8qglvuRSr9TKbliDS1egV4tDDZt43PBlsGrW5a4Cgm6yq8SDn%2BSjTRM3qGqjtWZsv7FDv8zdiP23PtjOwZfAhVeQe3uwUu7Hy0Zfu9aJt84ktUHps71FCfd4pSzUOKXEc2rZT8behRvGdzsmGVuLeohgykQDLb2tFbpSLgw7VYi%2F6jbltOwwuPaU3fHbdv8LGZ%2Bj6mympO99rG2cjXWfDb9ZfDuIBkqtD3bYuDRZFhDKX7h74sya8tguauB0F5h8%2FnbURPBVNdYbiBDSdsiFTXp4alRGKOLG80gXQMBd9RTOBwMn1OgqA94FA5MuQoyaemOu0ewzfn3SRrQuMgy1AY9tQER%2B4MRnmGr6ur5SI%2BpQh%2BSvlta4Vxyl8NTg5FUVzAooIsWSWjCQUgKblRbOfKVVGNPwTjXfP%2FjZfDFjlXmZxhBHBXlo2fDZldSyWm6xTgmFDxO%2BQo5f47I%2B41qdZJyhMMmbpr8GOqUBNSZgpqrDFIcbmhVm7j%2BBFucfnjyoCxuKip4bukIuR79n111437z7fo%2FycZMpR1r22ogXo%2Bc9L1xDzCs2TKRqkJNqCaGZB8L3oxVBJWVT5%2FBxxcXIs9S5zHi6LNWjL6t7f5cKOPLgNIpAiAbCxvwkWsrv61e1CAIrvnU7mk%2Bowt3pVB%2FRKDdbSj15WMm4RsRhsxh00vs7gAf7GYdVVa8YD8JeArp8&X-Amz-Signature=f2f7c71beae45f1b597270aeb8dce355079164af9b9cae71ce0ec7274140f50a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IOWBHQF%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIH8E8cUkmy5ichRep0UhBcl%2BgPs35Mzc9C07YFu2h21vAiEAq%2BrCxzUzLpLfnIdbY1R4b1Rf%2Br%2FxS4RZCtEid2Gw1FsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExK6OZXfm%2F2S3uQYircA%2Bt3OjjZ7Bwx%2BqxqnLIfqZAR%2FDTdYg8KPRvCsU7iQjMp6YKA%2BPf0vGxwrR5Sk0vpK6uArFUTVG5MKemNzVhoKndmW8CH9cpUK47r8B7oulrzt8neVxGr%2BD%2BtDFPCOKi%2F1Fms0SgqGfoVQpuXBgFZGHU55sbdRI7LhwvI8qglvuRSr9TKbliDS1egV4tDDZt43PBlsGrW5a4Cgm6yq8SDn%2BSjTRM3qGqjtWZsv7FDv8zdiP23PtjOwZfAhVeQe3uwUu7Hy0Zfu9aJt84ktUHps71FCfd4pSzUOKXEc2rZT8behRvGdzsmGVuLeohgykQDLb2tFbpSLgw7VYi%2F6jbltOwwuPaU3fHbdv8LGZ%2Bj6mympO99rG2cjXWfDb9ZfDuIBkqtD3bYuDRZFhDKX7h74sya8tguauB0F5h8%2FnbURPBVNdYbiBDSdsiFTXp4alRGKOLG80gXQMBd9RTOBwMn1OgqA94FA5MuQoyaemOu0ewzfn3SRrQuMgy1AY9tQER%2B4MRnmGr6ur5SI%2BpQh%2BSvlta4Vxyl8NTg5FUVzAooIsWSWjCQUgKblRbOfKVVGNPwTjXfP%2FjZfDFjlXmZxhBHBXlo2fDZldSyWm6xTgmFDxO%2BQo5f47I%2B41qdZJyhMMmbpr8GOqUBNSZgpqrDFIcbmhVm7j%2BBFucfnjyoCxuKip4bukIuR79n111437z7fo%2FycZMpR1r22ogXo%2Bc9L1xDzCs2TKRqkJNqCaGZB8L3oxVBJWVT5%2FBxxcXIs9S5zHi6LNWjL6t7f5cKOPLgNIpAiAbCxvwkWsrv61e1CAIrvnU7mk%2Bowt3pVB%2FRKDdbSj15WMm4RsRhsxh00vs7gAf7GYdVVa8YD8JeArp8&X-Amz-Signature=597bfd6dc9e12ca92957c347de756320649e4a5ffd7cd5e5c7bb96d4853672c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
