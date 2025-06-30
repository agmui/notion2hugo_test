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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6B4NSK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BO41RUcCoaAydg1thlFZPcehiXUkjQcgKLro4bdDpAAiEAsHFI9rg3IEnxzmlo5PfzMhzST4CBpNMYk96Psl%2BHAF0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNox%2Ft6Ww5%2BYnR%2FvPyrcAxI9U%2FY7MQkuaLbxsn%2Fj57KDiu6HrrmfGTOVWV8Z2EEmcZo2wDB4uyfeiscGCCGfC5lszSwuU4h%2BWOYWOq8lu2U6jHCKxjL73%2Bw7EOXtnH1jtG4dYwKBmKvydZS5V8Yq6iA2718N6VFQlfzbE9lAFT9bhMfPegDJiVVJy%2B3RHNp%2FjD%2BdWECtFlpRb1V3CJ9uOmA6udEdFhNTSzIa99l%2Be0joSVhVJXNCOYmz6SIne7s1b%2BNeoufHhe4M%2FYUtjLzVqPpf4lahOsYE89YKUVZ9TmeUTtPaBg4VURvUPWqhEZs47%2F6P87ZZ053bDrLUCG9PzcOsc6MtSU01GbPXUz9%2FyZEZVi%2BFfpmxbcylDt5bSt56pHmM96t0l8LDqm%2Bw3LQwEk9EiSHfC7vmxgq61WzBXGgIgWqvNL%2FrbzVbyQyHC3gcdEiJmIGufD7f2sLZkvPZdFwf0ASOL11QMUPmviXVRl0j%2Bij9kUwIcS2AoMFGf11ws%2FuG8FH1PYsSp3LZXGZX1RGGZFXje8OotaIKnjSWcvy53yuVc4a%2FKtIPH0m5P8UVNcGSUjqWek1y25cTcwsuc2mJSZ2vCiP7dp2XrURZBnFcks1czGkRMDrnhdK7%2BdehUgTV0chhsd%2BoLxKpMPnph8MGOqUBHvr2tTQMhOeAEeUEzfdcZ56baZ6vboZXqreYOMevm3b45PEAUpW3l7ARJ6R%2FLKYPq5EF84fouMrUhmv%2FObPAuqBw1c4BnsIXplak7dHFV3Z39Z3Bb99tmIk21GR1KqRGmH4bfVzUVTQ1CjonQwYUGY5qxdwIBvn9wLIn8ZWd6YvQ%2BuJllvr4U1aIgTZxd14tQxLSedrwEeUIYCKBSKPRDhCTKw9X&X-Amz-Signature=59887eb7216460e2b91e766ca644eb3aff2a9b93873987d5e817ba3e659e76d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6B4NSK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BO41RUcCoaAydg1thlFZPcehiXUkjQcgKLro4bdDpAAiEAsHFI9rg3IEnxzmlo5PfzMhzST4CBpNMYk96Psl%2BHAF0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNox%2Ft6Ww5%2BYnR%2FvPyrcAxI9U%2FY7MQkuaLbxsn%2Fj57KDiu6HrrmfGTOVWV8Z2EEmcZo2wDB4uyfeiscGCCGfC5lszSwuU4h%2BWOYWOq8lu2U6jHCKxjL73%2Bw7EOXtnH1jtG4dYwKBmKvydZS5V8Yq6iA2718N6VFQlfzbE9lAFT9bhMfPegDJiVVJy%2B3RHNp%2FjD%2BdWECtFlpRb1V3CJ9uOmA6udEdFhNTSzIa99l%2Be0joSVhVJXNCOYmz6SIne7s1b%2BNeoufHhe4M%2FYUtjLzVqPpf4lahOsYE89YKUVZ9TmeUTtPaBg4VURvUPWqhEZs47%2F6P87ZZ053bDrLUCG9PzcOsc6MtSU01GbPXUz9%2FyZEZVi%2BFfpmxbcylDt5bSt56pHmM96t0l8LDqm%2Bw3LQwEk9EiSHfC7vmxgq61WzBXGgIgWqvNL%2FrbzVbyQyHC3gcdEiJmIGufD7f2sLZkvPZdFwf0ASOL11QMUPmviXVRl0j%2Bij9kUwIcS2AoMFGf11ws%2FuG8FH1PYsSp3LZXGZX1RGGZFXje8OotaIKnjSWcvy53yuVc4a%2FKtIPH0m5P8UVNcGSUjqWek1y25cTcwsuc2mJSZ2vCiP7dp2XrURZBnFcks1czGkRMDrnhdK7%2BdehUgTV0chhsd%2BoLxKpMPnph8MGOqUBHvr2tTQMhOeAEeUEzfdcZ56baZ6vboZXqreYOMevm3b45PEAUpW3l7ARJ6R%2FLKYPq5EF84fouMrUhmv%2FObPAuqBw1c4BnsIXplak7dHFV3Z39Z3Bb99tmIk21GR1KqRGmH4bfVzUVTQ1CjonQwYUGY5qxdwIBvn9wLIn8ZWd6YvQ%2BuJllvr4U1aIgTZxd14tQxLSedrwEeUIYCKBSKPRDhCTKw9X&X-Amz-Signature=9fadbb7fa6047caa07ed332e1155c87c2c85dfeb8730e78a29a39a798e9fd4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6B4NSK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BO41RUcCoaAydg1thlFZPcehiXUkjQcgKLro4bdDpAAiEAsHFI9rg3IEnxzmlo5PfzMhzST4CBpNMYk96Psl%2BHAF0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNox%2Ft6Ww5%2BYnR%2FvPyrcAxI9U%2FY7MQkuaLbxsn%2Fj57KDiu6HrrmfGTOVWV8Z2EEmcZo2wDB4uyfeiscGCCGfC5lszSwuU4h%2BWOYWOq8lu2U6jHCKxjL73%2Bw7EOXtnH1jtG4dYwKBmKvydZS5V8Yq6iA2718N6VFQlfzbE9lAFT9bhMfPegDJiVVJy%2B3RHNp%2FjD%2BdWECtFlpRb1V3CJ9uOmA6udEdFhNTSzIa99l%2Be0joSVhVJXNCOYmz6SIne7s1b%2BNeoufHhe4M%2FYUtjLzVqPpf4lahOsYE89YKUVZ9TmeUTtPaBg4VURvUPWqhEZs47%2F6P87ZZ053bDrLUCG9PzcOsc6MtSU01GbPXUz9%2FyZEZVi%2BFfpmxbcylDt5bSt56pHmM96t0l8LDqm%2Bw3LQwEk9EiSHfC7vmxgq61WzBXGgIgWqvNL%2FrbzVbyQyHC3gcdEiJmIGufD7f2sLZkvPZdFwf0ASOL11QMUPmviXVRl0j%2Bij9kUwIcS2AoMFGf11ws%2FuG8FH1PYsSp3LZXGZX1RGGZFXje8OotaIKnjSWcvy53yuVc4a%2FKtIPH0m5P8UVNcGSUjqWek1y25cTcwsuc2mJSZ2vCiP7dp2XrURZBnFcks1czGkRMDrnhdK7%2BdehUgTV0chhsd%2BoLxKpMPnph8MGOqUBHvr2tTQMhOeAEeUEzfdcZ56baZ6vboZXqreYOMevm3b45PEAUpW3l7ARJ6R%2FLKYPq5EF84fouMrUhmv%2FObPAuqBw1c4BnsIXplak7dHFV3Z39Z3Bb99tmIk21GR1KqRGmH4bfVzUVTQ1CjonQwYUGY5qxdwIBvn9wLIn8ZWd6YvQ%2BuJllvr4U1aIgTZxd14tQxLSedrwEeUIYCKBSKPRDhCTKw9X&X-Amz-Signature=0ff06d2df5c419be8741cedf586e08b5fea76ee47a3e91ec86ec5b25a8372a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6B4NSK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BO41RUcCoaAydg1thlFZPcehiXUkjQcgKLro4bdDpAAiEAsHFI9rg3IEnxzmlo5PfzMhzST4CBpNMYk96Psl%2BHAF0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNox%2Ft6Ww5%2BYnR%2FvPyrcAxI9U%2FY7MQkuaLbxsn%2Fj57KDiu6HrrmfGTOVWV8Z2EEmcZo2wDB4uyfeiscGCCGfC5lszSwuU4h%2BWOYWOq8lu2U6jHCKxjL73%2Bw7EOXtnH1jtG4dYwKBmKvydZS5V8Yq6iA2718N6VFQlfzbE9lAFT9bhMfPegDJiVVJy%2B3RHNp%2FjD%2BdWECtFlpRb1V3CJ9uOmA6udEdFhNTSzIa99l%2Be0joSVhVJXNCOYmz6SIne7s1b%2BNeoufHhe4M%2FYUtjLzVqPpf4lahOsYE89YKUVZ9TmeUTtPaBg4VURvUPWqhEZs47%2F6P87ZZ053bDrLUCG9PzcOsc6MtSU01GbPXUz9%2FyZEZVi%2BFfpmxbcylDt5bSt56pHmM96t0l8LDqm%2Bw3LQwEk9EiSHfC7vmxgq61WzBXGgIgWqvNL%2FrbzVbyQyHC3gcdEiJmIGufD7f2sLZkvPZdFwf0ASOL11QMUPmviXVRl0j%2Bij9kUwIcS2AoMFGf11ws%2FuG8FH1PYsSp3LZXGZX1RGGZFXje8OotaIKnjSWcvy53yuVc4a%2FKtIPH0m5P8UVNcGSUjqWek1y25cTcwsuc2mJSZ2vCiP7dp2XrURZBnFcks1czGkRMDrnhdK7%2BdehUgTV0chhsd%2BoLxKpMPnph8MGOqUBHvr2tTQMhOeAEeUEzfdcZ56baZ6vboZXqreYOMevm3b45PEAUpW3l7ARJ6R%2FLKYPq5EF84fouMrUhmv%2FObPAuqBw1c4BnsIXplak7dHFV3Z39Z3Bb99tmIk21GR1KqRGmH4bfVzUVTQ1CjonQwYUGY5qxdwIBvn9wLIn8ZWd6YvQ%2BuJllvr4U1aIgTZxd14tQxLSedrwEeUIYCKBSKPRDhCTKw9X&X-Amz-Signature=685be10526a8d1065bab43c658637e1bcb3e950a6142a3f7290b9a32a089706b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6B4NSK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BO41RUcCoaAydg1thlFZPcehiXUkjQcgKLro4bdDpAAiEAsHFI9rg3IEnxzmlo5PfzMhzST4CBpNMYk96Psl%2BHAF0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNox%2Ft6Ww5%2BYnR%2FvPyrcAxI9U%2FY7MQkuaLbxsn%2Fj57KDiu6HrrmfGTOVWV8Z2EEmcZo2wDB4uyfeiscGCCGfC5lszSwuU4h%2BWOYWOq8lu2U6jHCKxjL73%2Bw7EOXtnH1jtG4dYwKBmKvydZS5V8Yq6iA2718N6VFQlfzbE9lAFT9bhMfPegDJiVVJy%2B3RHNp%2FjD%2BdWECtFlpRb1V3CJ9uOmA6udEdFhNTSzIa99l%2Be0joSVhVJXNCOYmz6SIne7s1b%2BNeoufHhe4M%2FYUtjLzVqPpf4lahOsYE89YKUVZ9TmeUTtPaBg4VURvUPWqhEZs47%2F6P87ZZ053bDrLUCG9PzcOsc6MtSU01GbPXUz9%2FyZEZVi%2BFfpmxbcylDt5bSt56pHmM96t0l8LDqm%2Bw3LQwEk9EiSHfC7vmxgq61WzBXGgIgWqvNL%2FrbzVbyQyHC3gcdEiJmIGufD7f2sLZkvPZdFwf0ASOL11QMUPmviXVRl0j%2Bij9kUwIcS2AoMFGf11ws%2FuG8FH1PYsSp3LZXGZX1RGGZFXje8OotaIKnjSWcvy53yuVc4a%2FKtIPH0m5P8UVNcGSUjqWek1y25cTcwsuc2mJSZ2vCiP7dp2XrURZBnFcks1czGkRMDrnhdK7%2BdehUgTV0chhsd%2BoLxKpMPnph8MGOqUBHvr2tTQMhOeAEeUEzfdcZ56baZ6vboZXqreYOMevm3b45PEAUpW3l7ARJ6R%2FLKYPq5EF84fouMrUhmv%2FObPAuqBw1c4BnsIXplak7dHFV3Z39Z3Bb99tmIk21GR1KqRGmH4bfVzUVTQ1CjonQwYUGY5qxdwIBvn9wLIn8ZWd6YvQ%2BuJllvr4U1aIgTZxd14tQxLSedrwEeUIYCKBSKPRDhCTKw9X&X-Amz-Signature=da720b2902631f390e0c48240eeb975974be6c8b7523d4e7a8df319538c4fe19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
