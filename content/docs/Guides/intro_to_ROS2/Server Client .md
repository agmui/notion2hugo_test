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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYDPUKW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEfByQrCvK3r%2Br%2Fq4KQgxhNSXyrswicsH3%2F5IdSRX7z4AiEAvOstV5xkcT09nyL2yz9kDdbhjc7O%2FLYc6a1URyH7%2BsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtKIQib9XY2DFXYzircA%2BsobCOCTo4sn3BzlqhOFTS3AD%2Fq54XJghteDmDHz6pw4Pql%2Fo0%2B1Sg79jv2wo%2FoeuQp8UMo5Gff%2FB1vzPMXF4Kwg0C7ol7l0x2ILWbUY%2FLpABDGIjslqe4%2FmlvSPKk0CWOc86UYkzBZAwUT%2FwusbAcLysQ%2FcEaT2P7WtZTW7U228ScjrLCgn%2FvEwDJKHsppwcqBxPZ25Zrh861asCjHp018MpPcB%2BlByH5X8M22zvcXjzkluwiSDlKqa7IFAAN3oTPoyJ038rttMaBXRJs50cPTpXQwDcgPBXe3m4xiJJj0%2FU%2BoWeyUU71mqh%2FyNeXtUHkegNZfufyV6E5%2BZHsMD6lKPvCj44QCp0CNYIYTIVUuYYCqAe3ct2pWeZFq0lYHoE0ablsnBacnW%2BMd386VGOtBQ4moe9Ur8giz4OOdN7tptuZ%2BNc7fBLyDWnOG4W3HZhHhevOBfSt8WQRUfpOWhk4YTIneydXJm7nvOCh4DUtJ%2Fas9h%2FYxH5CiYpn77SoxlbsMuZ6of8PmLGKlXPOvdXsFlzQQvU2VJrrG2H04i2YzZ%2FGKDjQbS4QRbPqAgvOx9OlUsp7qU4eDlNsJt3xNOKqffnX8EA3pjqQvnPwISED%2Fi9JvazkeIflmRBUOMNroosAGOqUBwnJFhxB0M5jHxgy2%2B%2F5XqMWMjUjfHtg%2BaIVMm9rWc4GR8LmbPJNZAoAEQiVAKJ1RNwoittUY%2Bfn3khyLVZ0q%2BRrlSF7zQ0LWbIB%2BE8CuDoTdZlVCsIy1Vwy022ON3zGWPVDctNJXkZtMf5wCqTtJoLi9l5xVC21G7QGQdfIi0IzKpGvMvktQgirLqfS3wd1aV3z5zCM%2BCNV2bj0GVwfgrAD1R2KW&X-Amz-Signature=3bfc64accc050f4d66d29c34dcb278ccac88572de74c59b36c7e7d24c0c73c33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYDPUKW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEfByQrCvK3r%2Br%2Fq4KQgxhNSXyrswicsH3%2F5IdSRX7z4AiEAvOstV5xkcT09nyL2yz9kDdbhjc7O%2FLYc6a1URyH7%2BsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtKIQib9XY2DFXYzircA%2BsobCOCTo4sn3BzlqhOFTS3AD%2Fq54XJghteDmDHz6pw4Pql%2Fo0%2B1Sg79jv2wo%2FoeuQp8UMo5Gff%2FB1vzPMXF4Kwg0C7ol7l0x2ILWbUY%2FLpABDGIjslqe4%2FmlvSPKk0CWOc86UYkzBZAwUT%2FwusbAcLysQ%2FcEaT2P7WtZTW7U228ScjrLCgn%2FvEwDJKHsppwcqBxPZ25Zrh861asCjHp018MpPcB%2BlByH5X8M22zvcXjzkluwiSDlKqa7IFAAN3oTPoyJ038rttMaBXRJs50cPTpXQwDcgPBXe3m4xiJJj0%2FU%2BoWeyUU71mqh%2FyNeXtUHkegNZfufyV6E5%2BZHsMD6lKPvCj44QCp0CNYIYTIVUuYYCqAe3ct2pWeZFq0lYHoE0ablsnBacnW%2BMd386VGOtBQ4moe9Ur8giz4OOdN7tptuZ%2BNc7fBLyDWnOG4W3HZhHhevOBfSt8WQRUfpOWhk4YTIneydXJm7nvOCh4DUtJ%2Fas9h%2FYxH5CiYpn77SoxlbsMuZ6of8PmLGKlXPOvdXsFlzQQvU2VJrrG2H04i2YzZ%2FGKDjQbS4QRbPqAgvOx9OlUsp7qU4eDlNsJt3xNOKqffnX8EA3pjqQvnPwISED%2Fi9JvazkeIflmRBUOMNroosAGOqUBwnJFhxB0M5jHxgy2%2B%2F5XqMWMjUjfHtg%2BaIVMm9rWc4GR8LmbPJNZAoAEQiVAKJ1RNwoittUY%2Bfn3khyLVZ0q%2BRrlSF7zQ0LWbIB%2BE8CuDoTdZlVCsIy1Vwy022ON3zGWPVDctNJXkZtMf5wCqTtJoLi9l5xVC21G7QGQdfIi0IzKpGvMvktQgirLqfS3wd1aV3z5zCM%2BCNV2bj0GVwfgrAD1R2KW&X-Amz-Signature=b641703d08535fba0137f1f0488f95e8fbc0c4cc3cad3e28999bb60372d6dad4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYDPUKW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEfByQrCvK3r%2Br%2Fq4KQgxhNSXyrswicsH3%2F5IdSRX7z4AiEAvOstV5xkcT09nyL2yz9kDdbhjc7O%2FLYc6a1URyH7%2BsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtKIQib9XY2DFXYzircA%2BsobCOCTo4sn3BzlqhOFTS3AD%2Fq54XJghteDmDHz6pw4Pql%2Fo0%2B1Sg79jv2wo%2FoeuQp8UMo5Gff%2FB1vzPMXF4Kwg0C7ol7l0x2ILWbUY%2FLpABDGIjslqe4%2FmlvSPKk0CWOc86UYkzBZAwUT%2FwusbAcLysQ%2FcEaT2P7WtZTW7U228ScjrLCgn%2FvEwDJKHsppwcqBxPZ25Zrh861asCjHp018MpPcB%2BlByH5X8M22zvcXjzkluwiSDlKqa7IFAAN3oTPoyJ038rttMaBXRJs50cPTpXQwDcgPBXe3m4xiJJj0%2FU%2BoWeyUU71mqh%2FyNeXtUHkegNZfufyV6E5%2BZHsMD6lKPvCj44QCp0CNYIYTIVUuYYCqAe3ct2pWeZFq0lYHoE0ablsnBacnW%2BMd386VGOtBQ4moe9Ur8giz4OOdN7tptuZ%2BNc7fBLyDWnOG4W3HZhHhevOBfSt8WQRUfpOWhk4YTIneydXJm7nvOCh4DUtJ%2Fas9h%2FYxH5CiYpn77SoxlbsMuZ6of8PmLGKlXPOvdXsFlzQQvU2VJrrG2H04i2YzZ%2FGKDjQbS4QRbPqAgvOx9OlUsp7qU4eDlNsJt3xNOKqffnX8EA3pjqQvnPwISED%2Fi9JvazkeIflmRBUOMNroosAGOqUBwnJFhxB0M5jHxgy2%2B%2F5XqMWMjUjfHtg%2BaIVMm9rWc4GR8LmbPJNZAoAEQiVAKJ1RNwoittUY%2Bfn3khyLVZ0q%2BRrlSF7zQ0LWbIB%2BE8CuDoTdZlVCsIy1Vwy022ON3zGWPVDctNJXkZtMf5wCqTtJoLi9l5xVC21G7QGQdfIi0IzKpGvMvktQgirLqfS3wd1aV3z5zCM%2BCNV2bj0GVwfgrAD1R2KW&X-Amz-Signature=65702c8c9e7f621ba52f12656c3b101e63879427341ac055e2ae0cc3b5e4194b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYDPUKW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEfByQrCvK3r%2Br%2Fq4KQgxhNSXyrswicsH3%2F5IdSRX7z4AiEAvOstV5xkcT09nyL2yz9kDdbhjc7O%2FLYc6a1URyH7%2BsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtKIQib9XY2DFXYzircA%2BsobCOCTo4sn3BzlqhOFTS3AD%2Fq54XJghteDmDHz6pw4Pql%2Fo0%2B1Sg79jv2wo%2FoeuQp8UMo5Gff%2FB1vzPMXF4Kwg0C7ol7l0x2ILWbUY%2FLpABDGIjslqe4%2FmlvSPKk0CWOc86UYkzBZAwUT%2FwusbAcLysQ%2FcEaT2P7WtZTW7U228ScjrLCgn%2FvEwDJKHsppwcqBxPZ25Zrh861asCjHp018MpPcB%2BlByH5X8M22zvcXjzkluwiSDlKqa7IFAAN3oTPoyJ038rttMaBXRJs50cPTpXQwDcgPBXe3m4xiJJj0%2FU%2BoWeyUU71mqh%2FyNeXtUHkegNZfufyV6E5%2BZHsMD6lKPvCj44QCp0CNYIYTIVUuYYCqAe3ct2pWeZFq0lYHoE0ablsnBacnW%2BMd386VGOtBQ4moe9Ur8giz4OOdN7tptuZ%2BNc7fBLyDWnOG4W3HZhHhevOBfSt8WQRUfpOWhk4YTIneydXJm7nvOCh4DUtJ%2Fas9h%2FYxH5CiYpn77SoxlbsMuZ6of8PmLGKlXPOvdXsFlzQQvU2VJrrG2H04i2YzZ%2FGKDjQbS4QRbPqAgvOx9OlUsp7qU4eDlNsJt3xNOKqffnX8EA3pjqQvnPwISED%2Fi9JvazkeIflmRBUOMNroosAGOqUBwnJFhxB0M5jHxgy2%2B%2F5XqMWMjUjfHtg%2BaIVMm9rWc4GR8LmbPJNZAoAEQiVAKJ1RNwoittUY%2Bfn3khyLVZ0q%2BRrlSF7zQ0LWbIB%2BE8CuDoTdZlVCsIy1Vwy022ON3zGWPVDctNJXkZtMf5wCqTtJoLi9l5xVC21G7QGQdfIi0IzKpGvMvktQgirLqfS3wd1aV3z5zCM%2BCNV2bj0GVwfgrAD1R2KW&X-Amz-Signature=5a84e5204b5d0d03abc8f3fe9207cba29007b1b8393a3195356d810be11e64b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYDPUKW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEfByQrCvK3r%2Br%2Fq4KQgxhNSXyrswicsH3%2F5IdSRX7z4AiEAvOstV5xkcT09nyL2yz9kDdbhjc7O%2FLYc6a1URyH7%2BsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtKIQib9XY2DFXYzircA%2BsobCOCTo4sn3BzlqhOFTS3AD%2Fq54XJghteDmDHz6pw4Pql%2Fo0%2B1Sg79jv2wo%2FoeuQp8UMo5Gff%2FB1vzPMXF4Kwg0C7ol7l0x2ILWbUY%2FLpABDGIjslqe4%2FmlvSPKk0CWOc86UYkzBZAwUT%2FwusbAcLysQ%2FcEaT2P7WtZTW7U228ScjrLCgn%2FvEwDJKHsppwcqBxPZ25Zrh861asCjHp018MpPcB%2BlByH5X8M22zvcXjzkluwiSDlKqa7IFAAN3oTPoyJ038rttMaBXRJs50cPTpXQwDcgPBXe3m4xiJJj0%2FU%2BoWeyUU71mqh%2FyNeXtUHkegNZfufyV6E5%2BZHsMD6lKPvCj44QCp0CNYIYTIVUuYYCqAe3ct2pWeZFq0lYHoE0ablsnBacnW%2BMd386VGOtBQ4moe9Ur8giz4OOdN7tptuZ%2BNc7fBLyDWnOG4W3HZhHhevOBfSt8WQRUfpOWhk4YTIneydXJm7nvOCh4DUtJ%2Fas9h%2FYxH5CiYpn77SoxlbsMuZ6of8PmLGKlXPOvdXsFlzQQvU2VJrrG2H04i2YzZ%2FGKDjQbS4QRbPqAgvOx9OlUsp7qU4eDlNsJt3xNOKqffnX8EA3pjqQvnPwISED%2Fi9JvazkeIflmRBUOMNroosAGOqUBwnJFhxB0M5jHxgy2%2B%2F5XqMWMjUjfHtg%2BaIVMm9rWc4GR8LmbPJNZAoAEQiVAKJ1RNwoittUY%2Bfn3khyLVZ0q%2BRrlSF7zQ0LWbIB%2BE8CuDoTdZlVCsIy1Vwy022ON3zGWPVDctNJXkZtMf5wCqTtJoLi9l5xVC21G7QGQdfIi0IzKpGvMvktQgirLqfS3wd1aV3z5zCM%2BCNV2bj0GVwfgrAD1R2KW&X-Amz-Signature=2e8cf89248a98b717e2fdfa20df42dd66f2de80ce61d833b7172f523b30d52fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
