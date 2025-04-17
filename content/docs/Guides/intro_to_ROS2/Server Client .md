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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGRWH5Z%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACl8PPhjmPUaN35ifbsLkBbYy5mG0yxvjvuGw4%2FkYz%2FAiEAo%2BOvF0%2BZtgmB%2BE%2BZUgdFUapHoMJWVz1D6ReN0HryHmcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJSC1R2%2BLo3DGlEgLircA3kxON%2BxdGviEZV8KIWwa2F2iGVCriC7Cdb2K6mPlhVwkcKTxH476tthjw8ecBiTRoh4Hplxgi%2FoZdi7BPtAkzr5w4rLV8Pr4aVGeRqOimpPR5coCJ%2F5FJdmF%2FHSy22lW7GdqVaNtJ3z%2BlEvyBByqYRi4oDwVvLbjwkzrkhxMjHLDM9TWrAaFm%2FKXILh357%2Fp3A5digM5K77OVrTQjyXb%2FnYxVt9xFpTaQWZPeV08dSeRTPRcVQVj%2FEmgJuOmYtBPbShUOQIfnpNPhBD%2BborsV35sztcBYS5sABUlBcN9O2%2FV8uXD1od9nHsj7BZZIpgkUi3UVvUd9aX237nGY5nzLF1YYAixXR5oaq4VYEwU%2Bhyuko22zi9%2Bp8Ava27qPFYZQJs5spQ8qkpGU9MQnDcUHSRmOEGly1jTNUqESHQsaM%2BULUog%2B4tIAG5AZTz595CYvIdXAcmiPrC2peKmzsowD1EZAflpnlIFTRlocjxAhPjy5eyt7Ji5xrBRZQfRced7gGoPxgKxMAUOvQeraa7OnTE%2FNcPa%2FhU5KLky1hxipA1S6qFLdp1%2B3fNqhcBobUGzNI3gVFV5q8T3%2BVqzeSrXI5SLULCXJbLMV2Sil1CaS%2BnWs8L2AldkzRf2soPMMuHhsAGOqUBS%2FDNK%2BerTsVOeO79JPd5EkXvwuDkpx6nk3M7gbeCD22B03RdAiAWcryze%2FwUy5egznJM%2BYJB%2BRKiZO2JGvZ2PjNLmbExdR%2BRcyQn56MUMkOW%2BgbbDpP%2F0qgaf7MN3pLoeLkknUziQvI3TeZG8GcT4eTo16s9p3rIk0PYEIfXNOSGlo0O3BayQ2zuOLxY9zmbi5n4Avslm3ejxsE90gaXQybP1ZSz&X-Amz-Signature=2076a8dec5872515c0d2b6a6a2f22d1fab5355ef5d04eadcaf71c8b31b52a27c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGRWH5Z%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACl8PPhjmPUaN35ifbsLkBbYy5mG0yxvjvuGw4%2FkYz%2FAiEAo%2BOvF0%2BZtgmB%2BE%2BZUgdFUapHoMJWVz1D6ReN0HryHmcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJSC1R2%2BLo3DGlEgLircA3kxON%2BxdGviEZV8KIWwa2F2iGVCriC7Cdb2K6mPlhVwkcKTxH476tthjw8ecBiTRoh4Hplxgi%2FoZdi7BPtAkzr5w4rLV8Pr4aVGeRqOimpPR5coCJ%2F5FJdmF%2FHSy22lW7GdqVaNtJ3z%2BlEvyBByqYRi4oDwVvLbjwkzrkhxMjHLDM9TWrAaFm%2FKXILh357%2Fp3A5digM5K77OVrTQjyXb%2FnYxVt9xFpTaQWZPeV08dSeRTPRcVQVj%2FEmgJuOmYtBPbShUOQIfnpNPhBD%2BborsV35sztcBYS5sABUlBcN9O2%2FV8uXD1od9nHsj7BZZIpgkUi3UVvUd9aX237nGY5nzLF1YYAixXR5oaq4VYEwU%2Bhyuko22zi9%2Bp8Ava27qPFYZQJs5spQ8qkpGU9MQnDcUHSRmOEGly1jTNUqESHQsaM%2BULUog%2B4tIAG5AZTz595CYvIdXAcmiPrC2peKmzsowD1EZAflpnlIFTRlocjxAhPjy5eyt7Ji5xrBRZQfRced7gGoPxgKxMAUOvQeraa7OnTE%2FNcPa%2FhU5KLky1hxipA1S6qFLdp1%2B3fNqhcBobUGzNI3gVFV5q8T3%2BVqzeSrXI5SLULCXJbLMV2Sil1CaS%2BnWs8L2AldkzRf2soPMMuHhsAGOqUBS%2FDNK%2BerTsVOeO79JPd5EkXvwuDkpx6nk3M7gbeCD22B03RdAiAWcryze%2FwUy5egznJM%2BYJB%2BRKiZO2JGvZ2PjNLmbExdR%2BRcyQn56MUMkOW%2BgbbDpP%2F0qgaf7MN3pLoeLkknUziQvI3TeZG8GcT4eTo16s9p3rIk0PYEIfXNOSGlo0O3BayQ2zuOLxY9zmbi5n4Avslm3ejxsE90gaXQybP1ZSz&X-Amz-Signature=cd2a046bacc328dee3371454c20956d180a4423ac975a701eba8c11bf812f566&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGRWH5Z%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACl8PPhjmPUaN35ifbsLkBbYy5mG0yxvjvuGw4%2FkYz%2FAiEAo%2BOvF0%2BZtgmB%2BE%2BZUgdFUapHoMJWVz1D6ReN0HryHmcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJSC1R2%2BLo3DGlEgLircA3kxON%2BxdGviEZV8KIWwa2F2iGVCriC7Cdb2K6mPlhVwkcKTxH476tthjw8ecBiTRoh4Hplxgi%2FoZdi7BPtAkzr5w4rLV8Pr4aVGeRqOimpPR5coCJ%2F5FJdmF%2FHSy22lW7GdqVaNtJ3z%2BlEvyBByqYRi4oDwVvLbjwkzrkhxMjHLDM9TWrAaFm%2FKXILh357%2Fp3A5digM5K77OVrTQjyXb%2FnYxVt9xFpTaQWZPeV08dSeRTPRcVQVj%2FEmgJuOmYtBPbShUOQIfnpNPhBD%2BborsV35sztcBYS5sABUlBcN9O2%2FV8uXD1od9nHsj7BZZIpgkUi3UVvUd9aX237nGY5nzLF1YYAixXR5oaq4VYEwU%2Bhyuko22zi9%2Bp8Ava27qPFYZQJs5spQ8qkpGU9MQnDcUHSRmOEGly1jTNUqESHQsaM%2BULUog%2B4tIAG5AZTz595CYvIdXAcmiPrC2peKmzsowD1EZAflpnlIFTRlocjxAhPjy5eyt7Ji5xrBRZQfRced7gGoPxgKxMAUOvQeraa7OnTE%2FNcPa%2FhU5KLky1hxipA1S6qFLdp1%2B3fNqhcBobUGzNI3gVFV5q8T3%2BVqzeSrXI5SLULCXJbLMV2Sil1CaS%2BnWs8L2AldkzRf2soPMMuHhsAGOqUBS%2FDNK%2BerTsVOeO79JPd5EkXvwuDkpx6nk3M7gbeCD22B03RdAiAWcryze%2FwUy5egznJM%2BYJB%2BRKiZO2JGvZ2PjNLmbExdR%2BRcyQn56MUMkOW%2BgbbDpP%2F0qgaf7MN3pLoeLkknUziQvI3TeZG8GcT4eTo16s9p3rIk0PYEIfXNOSGlo0O3BayQ2zuOLxY9zmbi5n4Avslm3ejxsE90gaXQybP1ZSz&X-Amz-Signature=60560b966e31574eaebc3ffa387a50fe49f12c43454d05af5929aeeccda2af26&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGRWH5Z%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACl8PPhjmPUaN35ifbsLkBbYy5mG0yxvjvuGw4%2FkYz%2FAiEAo%2BOvF0%2BZtgmB%2BE%2BZUgdFUapHoMJWVz1D6ReN0HryHmcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJSC1R2%2BLo3DGlEgLircA3kxON%2BxdGviEZV8KIWwa2F2iGVCriC7Cdb2K6mPlhVwkcKTxH476tthjw8ecBiTRoh4Hplxgi%2FoZdi7BPtAkzr5w4rLV8Pr4aVGeRqOimpPR5coCJ%2F5FJdmF%2FHSy22lW7GdqVaNtJ3z%2BlEvyBByqYRi4oDwVvLbjwkzrkhxMjHLDM9TWrAaFm%2FKXILh357%2Fp3A5digM5K77OVrTQjyXb%2FnYxVt9xFpTaQWZPeV08dSeRTPRcVQVj%2FEmgJuOmYtBPbShUOQIfnpNPhBD%2BborsV35sztcBYS5sABUlBcN9O2%2FV8uXD1od9nHsj7BZZIpgkUi3UVvUd9aX237nGY5nzLF1YYAixXR5oaq4VYEwU%2Bhyuko22zi9%2Bp8Ava27qPFYZQJs5spQ8qkpGU9MQnDcUHSRmOEGly1jTNUqESHQsaM%2BULUog%2B4tIAG5AZTz595CYvIdXAcmiPrC2peKmzsowD1EZAflpnlIFTRlocjxAhPjy5eyt7Ji5xrBRZQfRced7gGoPxgKxMAUOvQeraa7OnTE%2FNcPa%2FhU5KLky1hxipA1S6qFLdp1%2B3fNqhcBobUGzNI3gVFV5q8T3%2BVqzeSrXI5SLULCXJbLMV2Sil1CaS%2BnWs8L2AldkzRf2soPMMuHhsAGOqUBS%2FDNK%2BerTsVOeO79JPd5EkXvwuDkpx6nk3M7gbeCD22B03RdAiAWcryze%2FwUy5egznJM%2BYJB%2BRKiZO2JGvZ2PjNLmbExdR%2BRcyQn56MUMkOW%2BgbbDpP%2F0qgaf7MN3pLoeLkknUziQvI3TeZG8GcT4eTo16s9p3rIk0PYEIfXNOSGlo0O3BayQ2zuOLxY9zmbi5n4Avslm3ejxsE90gaXQybP1ZSz&X-Amz-Signature=475b647e8267e15d990eadea5c002e9d770c17df0c411448f150986dc5a833f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGRWH5Z%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACl8PPhjmPUaN35ifbsLkBbYy5mG0yxvjvuGw4%2FkYz%2FAiEAo%2BOvF0%2BZtgmB%2BE%2BZUgdFUapHoMJWVz1D6ReN0HryHmcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJSC1R2%2BLo3DGlEgLircA3kxON%2BxdGviEZV8KIWwa2F2iGVCriC7Cdb2K6mPlhVwkcKTxH476tthjw8ecBiTRoh4Hplxgi%2FoZdi7BPtAkzr5w4rLV8Pr4aVGeRqOimpPR5coCJ%2F5FJdmF%2FHSy22lW7GdqVaNtJ3z%2BlEvyBByqYRi4oDwVvLbjwkzrkhxMjHLDM9TWrAaFm%2FKXILh357%2Fp3A5digM5K77OVrTQjyXb%2FnYxVt9xFpTaQWZPeV08dSeRTPRcVQVj%2FEmgJuOmYtBPbShUOQIfnpNPhBD%2BborsV35sztcBYS5sABUlBcN9O2%2FV8uXD1od9nHsj7BZZIpgkUi3UVvUd9aX237nGY5nzLF1YYAixXR5oaq4VYEwU%2Bhyuko22zi9%2Bp8Ava27qPFYZQJs5spQ8qkpGU9MQnDcUHSRmOEGly1jTNUqESHQsaM%2BULUog%2B4tIAG5AZTz595CYvIdXAcmiPrC2peKmzsowD1EZAflpnlIFTRlocjxAhPjy5eyt7Ji5xrBRZQfRced7gGoPxgKxMAUOvQeraa7OnTE%2FNcPa%2FhU5KLky1hxipA1S6qFLdp1%2B3fNqhcBobUGzNI3gVFV5q8T3%2BVqzeSrXI5SLULCXJbLMV2Sil1CaS%2BnWs8L2AldkzRf2soPMMuHhsAGOqUBS%2FDNK%2BerTsVOeO79JPd5EkXvwuDkpx6nk3M7gbeCD22B03RdAiAWcryze%2FwUy5egznJM%2BYJB%2BRKiZO2JGvZ2PjNLmbExdR%2BRcyQn56MUMkOW%2BgbbDpP%2F0qgaf7MN3pLoeLkknUziQvI3TeZG8GcT4eTo16s9p3rIk0PYEIfXNOSGlo0O3BayQ2zuOLxY9zmbi5n4Avslm3ejxsE90gaXQybP1ZSz&X-Amz-Signature=eb075ce9cfba13d9314cb8a82122118890f67501bce6a1bc44da7b340cf3ca75&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
