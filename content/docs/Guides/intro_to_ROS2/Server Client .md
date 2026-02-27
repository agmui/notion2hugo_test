---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXMS2JUA%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDAv9cG%2FK0Txvv6pPbQGY7PabtwXWQmnTymgoqEMC2i2wIhALi7Lh%2FtjvAnlc4Oyq7fkdOAtwTV%2FKqon89kHcCYtiQ8Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzfXAdeuKw0FXAr7NEq3APPKcO2i%2BA5iTDGaVLY0aXSIeihpb3clLcJCFvwjXK%2BXJvtaqsQCl5eWheqxDEW%2BlKUQuuvoiSNPNs6CZjvYJs8XSwJ70Fh%2F4p43%2FuZyXNyG%2BWQEZE9gdOH%2BG8P666ekecZ8Nf3OLf8bBvR0dIzwZNXBjMfmxPmbbhb6Qm81Nl0NxOcu%2BsJ9Ky4A6ueweLmXOOihbmQLHmYMEW7cBcRYSxGWe8auHUOlouOOUqPgY%2F8YICxg%2BTpAC0h0QGCpyCsDHHDczhiwMo6Rj%2F6OuFv3FdvTUtjuHzhJ5cp4P2PM03M62HQ%2F1XVV3PuBDC8qVVtCTumoblPHC2TyRAZ8hrdikKoHm2TNgr1%2B6aoL2LuqxJz243Yp4un8IU5D%2FxNxWZDB9Dr%2FsTZ7dvrKCN9Yu2LQ%2FgDyNv5lZYWVW341lxo5vS6aYwlHZWCoSx9Ww9hLDQf9u42PzHzhP%2B7WX5awQt3lsNRXLJHkawyodYm5kL9ZqnCTo%2B%2BIE2VnxuZQ7%2ByG2OL0Aay2FbJSNhMgl%2FLJOOtpXk4vJEv4Tn%2FyAH405BpfNv2cnxjREWdeE6aQe1wks3%2FwK9uEntvEfWH8bIQ9FlF571LcDxXUbsV5Mcavl7p9gnqlGfmEM8SS9nNq6w6qzCP2oPNBjqkAUk38fpT8gKB%2Fx1mCU91K%2B6owaiM74K%2B2ZGWpGouFpny6KSWsqPli5f0EsuKoM4996Hs%2FLZoOXMKTPQOpte44oiOkEPv0Hrm3h1viMSOvJwMNKDlS68n29LCNNt9lSxFxfuC%2Bf4j%2FXsNsaGV6T502CL4VJT1X09luRmjxdh9YGYS8c3urglwBRXHoeah%2BRUwTJW2Xa0YsqUmnSpSCldeGoCVBukq&X-Amz-Signature=383a4c44a97ba650deebc2d79323837c00b77c768db504ff4af28a4ec04a4d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXMS2JUA%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDAv9cG%2FK0Txvv6pPbQGY7PabtwXWQmnTymgoqEMC2i2wIhALi7Lh%2FtjvAnlc4Oyq7fkdOAtwTV%2FKqon89kHcCYtiQ8Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzfXAdeuKw0FXAr7NEq3APPKcO2i%2BA5iTDGaVLY0aXSIeihpb3clLcJCFvwjXK%2BXJvtaqsQCl5eWheqxDEW%2BlKUQuuvoiSNPNs6CZjvYJs8XSwJ70Fh%2F4p43%2FuZyXNyG%2BWQEZE9gdOH%2BG8P666ekecZ8Nf3OLf8bBvR0dIzwZNXBjMfmxPmbbhb6Qm81Nl0NxOcu%2BsJ9Ky4A6ueweLmXOOihbmQLHmYMEW7cBcRYSxGWe8auHUOlouOOUqPgY%2F8YICxg%2BTpAC0h0QGCpyCsDHHDczhiwMo6Rj%2F6OuFv3FdvTUtjuHzhJ5cp4P2PM03M62HQ%2F1XVV3PuBDC8qVVtCTumoblPHC2TyRAZ8hrdikKoHm2TNgr1%2B6aoL2LuqxJz243Yp4un8IU5D%2FxNxWZDB9Dr%2FsTZ7dvrKCN9Yu2LQ%2FgDyNv5lZYWVW341lxo5vS6aYwlHZWCoSx9Ww9hLDQf9u42PzHzhP%2B7WX5awQt3lsNRXLJHkawyodYm5kL9ZqnCTo%2B%2BIE2VnxuZQ7%2ByG2OL0Aay2FbJSNhMgl%2FLJOOtpXk4vJEv4Tn%2FyAH405BpfNv2cnxjREWdeE6aQe1wks3%2FwK9uEntvEfWH8bIQ9FlF571LcDxXUbsV5Mcavl7p9gnqlGfmEM8SS9nNq6w6qzCP2oPNBjqkAUk38fpT8gKB%2Fx1mCU91K%2B6owaiM74K%2B2ZGWpGouFpny6KSWsqPli5f0EsuKoM4996Hs%2FLZoOXMKTPQOpte44oiOkEPv0Hrm3h1viMSOvJwMNKDlS68n29LCNNt9lSxFxfuC%2Bf4j%2FXsNsaGV6T502CL4VJT1X09luRmjxdh9YGYS8c3urglwBRXHoeah%2BRUwTJW2Xa0YsqUmnSpSCldeGoCVBukq&X-Amz-Signature=1d223dd3d3e1ccbfa9109d155ef4ced6fdab28efd413e02895473a4e765ca341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXMS2JUA%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDAv9cG%2FK0Txvv6pPbQGY7PabtwXWQmnTymgoqEMC2i2wIhALi7Lh%2FtjvAnlc4Oyq7fkdOAtwTV%2FKqon89kHcCYtiQ8Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzfXAdeuKw0FXAr7NEq3APPKcO2i%2BA5iTDGaVLY0aXSIeihpb3clLcJCFvwjXK%2BXJvtaqsQCl5eWheqxDEW%2BlKUQuuvoiSNPNs6CZjvYJs8XSwJ70Fh%2F4p43%2FuZyXNyG%2BWQEZE9gdOH%2BG8P666ekecZ8Nf3OLf8bBvR0dIzwZNXBjMfmxPmbbhb6Qm81Nl0NxOcu%2BsJ9Ky4A6ueweLmXOOihbmQLHmYMEW7cBcRYSxGWe8auHUOlouOOUqPgY%2F8YICxg%2BTpAC0h0QGCpyCsDHHDczhiwMo6Rj%2F6OuFv3FdvTUtjuHzhJ5cp4P2PM03M62HQ%2F1XVV3PuBDC8qVVtCTumoblPHC2TyRAZ8hrdikKoHm2TNgr1%2B6aoL2LuqxJz243Yp4un8IU5D%2FxNxWZDB9Dr%2FsTZ7dvrKCN9Yu2LQ%2FgDyNv5lZYWVW341lxo5vS6aYwlHZWCoSx9Ww9hLDQf9u42PzHzhP%2B7WX5awQt3lsNRXLJHkawyodYm5kL9ZqnCTo%2B%2BIE2VnxuZQ7%2ByG2OL0Aay2FbJSNhMgl%2FLJOOtpXk4vJEv4Tn%2FyAH405BpfNv2cnxjREWdeE6aQe1wks3%2FwK9uEntvEfWH8bIQ9FlF571LcDxXUbsV5Mcavl7p9gnqlGfmEM8SS9nNq6w6qzCP2oPNBjqkAUk38fpT8gKB%2Fx1mCU91K%2B6owaiM74K%2B2ZGWpGouFpny6KSWsqPli5f0EsuKoM4996Hs%2FLZoOXMKTPQOpte44oiOkEPv0Hrm3h1viMSOvJwMNKDlS68n29LCNNt9lSxFxfuC%2Bf4j%2FXsNsaGV6T502CL4VJT1X09luRmjxdh9YGYS8c3urglwBRXHoeah%2BRUwTJW2Xa0YsqUmnSpSCldeGoCVBukq&X-Amz-Signature=50fd8a096462bdf4e5ad4a2984be67013a4b351a4dd386b8ec000d1409310980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXMS2JUA%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDAv9cG%2FK0Txvv6pPbQGY7PabtwXWQmnTymgoqEMC2i2wIhALi7Lh%2FtjvAnlc4Oyq7fkdOAtwTV%2FKqon89kHcCYtiQ8Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzfXAdeuKw0FXAr7NEq3APPKcO2i%2BA5iTDGaVLY0aXSIeihpb3clLcJCFvwjXK%2BXJvtaqsQCl5eWheqxDEW%2BlKUQuuvoiSNPNs6CZjvYJs8XSwJ70Fh%2F4p43%2FuZyXNyG%2BWQEZE9gdOH%2BG8P666ekecZ8Nf3OLf8bBvR0dIzwZNXBjMfmxPmbbhb6Qm81Nl0NxOcu%2BsJ9Ky4A6ueweLmXOOihbmQLHmYMEW7cBcRYSxGWe8auHUOlouOOUqPgY%2F8YICxg%2BTpAC0h0QGCpyCsDHHDczhiwMo6Rj%2F6OuFv3FdvTUtjuHzhJ5cp4P2PM03M62HQ%2F1XVV3PuBDC8qVVtCTumoblPHC2TyRAZ8hrdikKoHm2TNgr1%2B6aoL2LuqxJz243Yp4un8IU5D%2FxNxWZDB9Dr%2FsTZ7dvrKCN9Yu2LQ%2FgDyNv5lZYWVW341lxo5vS6aYwlHZWCoSx9Ww9hLDQf9u42PzHzhP%2B7WX5awQt3lsNRXLJHkawyodYm5kL9ZqnCTo%2B%2BIE2VnxuZQ7%2ByG2OL0Aay2FbJSNhMgl%2FLJOOtpXk4vJEv4Tn%2FyAH405BpfNv2cnxjREWdeE6aQe1wks3%2FwK9uEntvEfWH8bIQ9FlF571LcDxXUbsV5Mcavl7p9gnqlGfmEM8SS9nNq6w6qzCP2oPNBjqkAUk38fpT8gKB%2Fx1mCU91K%2B6owaiM74K%2B2ZGWpGouFpny6KSWsqPli5f0EsuKoM4996Hs%2FLZoOXMKTPQOpte44oiOkEPv0Hrm3h1viMSOvJwMNKDlS68n29LCNNt9lSxFxfuC%2Bf4j%2FXsNsaGV6T502CL4VJT1X09luRmjxdh9YGYS8c3urglwBRXHoeah%2BRUwTJW2Xa0YsqUmnSpSCldeGoCVBukq&X-Amz-Signature=b287d8f28fdba69f01d69f95c8f95e903e03ef79b81444cedf60d7a179f0e751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXMS2JUA%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDAv9cG%2FK0Txvv6pPbQGY7PabtwXWQmnTymgoqEMC2i2wIhALi7Lh%2FtjvAnlc4Oyq7fkdOAtwTV%2FKqon89kHcCYtiQ8Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzfXAdeuKw0FXAr7NEq3APPKcO2i%2BA5iTDGaVLY0aXSIeihpb3clLcJCFvwjXK%2BXJvtaqsQCl5eWheqxDEW%2BlKUQuuvoiSNPNs6CZjvYJs8XSwJ70Fh%2F4p43%2FuZyXNyG%2BWQEZE9gdOH%2BG8P666ekecZ8Nf3OLf8bBvR0dIzwZNXBjMfmxPmbbhb6Qm81Nl0NxOcu%2BsJ9Ky4A6ueweLmXOOihbmQLHmYMEW7cBcRYSxGWe8auHUOlouOOUqPgY%2F8YICxg%2BTpAC0h0QGCpyCsDHHDczhiwMo6Rj%2F6OuFv3FdvTUtjuHzhJ5cp4P2PM03M62HQ%2F1XVV3PuBDC8qVVtCTumoblPHC2TyRAZ8hrdikKoHm2TNgr1%2B6aoL2LuqxJz243Yp4un8IU5D%2FxNxWZDB9Dr%2FsTZ7dvrKCN9Yu2LQ%2FgDyNv5lZYWVW341lxo5vS6aYwlHZWCoSx9Ww9hLDQf9u42PzHzhP%2B7WX5awQt3lsNRXLJHkawyodYm5kL9ZqnCTo%2B%2BIE2VnxuZQ7%2ByG2OL0Aay2FbJSNhMgl%2FLJOOtpXk4vJEv4Tn%2FyAH405BpfNv2cnxjREWdeE6aQe1wks3%2FwK9uEntvEfWH8bIQ9FlF571LcDxXUbsV5Mcavl7p9gnqlGfmEM8SS9nNq6w6qzCP2oPNBjqkAUk38fpT8gKB%2Fx1mCU91K%2B6owaiM74K%2B2ZGWpGouFpny6KSWsqPli5f0EsuKoM4996Hs%2FLZoOXMKTPQOpte44oiOkEPv0Hrm3h1viMSOvJwMNKDlS68n29LCNNt9lSxFxfuC%2Bf4j%2FXsNsaGV6T502CL4VJT1X09luRmjxdh9YGYS8c3urglwBRXHoeah%2BRUwTJW2Xa0YsqUmnSpSCldeGoCVBukq&X-Amz-Signature=e3c2f5d37a3737fdb2e49496a9b10c3c5c9ba0d88be7ed0cde7eee862551faa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
