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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AE6PVPN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCV9mC%2FDdLPHivPcDBchRIYZ7ldaMuMhN84QN1exp6AbwIgb43V4FXlUCYxHCVALNAZzf78StwpIfwofQ6rfa7SHXcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMnCg6MJAV32yfejcSrcA1kvQtD6gIGb3XMHBsf%2BNZHJOFIB%2Bs1u832sop6TgWIiappOWRnVf5A3Y%2FdVuBZ%2Fyq%2BBA4bKvmYx%2FxvcWPi7pov2S9qZ6eaxCLlPPz4XD8x%2BbbuhclZaR9dZ9%2FXIu0pBbVHsrFstir2dVS6weNhpdl%2FnnU%2Bq1fzaTkbbF%2BJ5kyaiRZKySE%2BkB81F7j1MP0ndhEx5aLCI0MMCUhStLe2kL6S5vGnokr2P3SvUheN1Htxtjpze%2FH6geccEutV9kkoXn5pMp4HoY24GSQjlIO8qtrWKijiq8aUyqqk1lijZ1k%2FFpcsvINUXoLNf%2F7vDZopIyOoFIecGzHtoktZVS45C9MMffVY%2FLG4yg6j1NtEsge69tKEhlLV%2FIOXFfjYyssLEzAIHgE%2B69qQ4xUzZRPUte7jvIK1zzVgdPuBycJYyZ15%2BlPRJb8IV%2FIs%2BwZurUTCPNDzaVLFMxDIY6mRy%2B%2FiNSoBFdB9Zcsqkti9RifDgLGZkNahAOiyEygPp41YiMn3wczsFHWC%2F5V99fRCV2xfM4ZpTaCEOCl8WT58QkDUZbSRgswa6rizXYuV1Lhq18MOsWkhPD76G7vH4GT3hyREhen4bCJ%2B3lnOBInF7sQ3WMKifct14NQOOB0jVMNflMOqJi8QGOqUBpNtG7hfrK5nynm%2BTy9k1yuknjZwmyI1VUJxWOpyI8fTnwTzAKIk%2BkJt4PIiZCfjyykmoZqIgAh1eZqaJKZGs5QiCYMs8ok%2B770pqzINA8snmTnv1qOp2P5YIqaAfd9BGmUZij0kZe93osIy8LCIxrxF2CSO%2BlJz7zO4PmEfjfa0Ajq8SD%2ByVt6SxXPCKdM%2FNxBhvZy4jfeDt88%2Bs5dUk2RT5M146&X-Amz-Signature=9596c32407293efcb99123607a8e680a158d2d68e113d3620583d679bd7d55be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AE6PVPN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCV9mC%2FDdLPHivPcDBchRIYZ7ldaMuMhN84QN1exp6AbwIgb43V4FXlUCYxHCVALNAZzf78StwpIfwofQ6rfa7SHXcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMnCg6MJAV32yfejcSrcA1kvQtD6gIGb3XMHBsf%2BNZHJOFIB%2Bs1u832sop6TgWIiappOWRnVf5A3Y%2FdVuBZ%2Fyq%2BBA4bKvmYx%2FxvcWPi7pov2S9qZ6eaxCLlPPz4XD8x%2BbbuhclZaR9dZ9%2FXIu0pBbVHsrFstir2dVS6weNhpdl%2FnnU%2Bq1fzaTkbbF%2BJ5kyaiRZKySE%2BkB81F7j1MP0ndhEx5aLCI0MMCUhStLe2kL6S5vGnokr2P3SvUheN1Htxtjpze%2FH6geccEutV9kkoXn5pMp4HoY24GSQjlIO8qtrWKijiq8aUyqqk1lijZ1k%2FFpcsvINUXoLNf%2F7vDZopIyOoFIecGzHtoktZVS45C9MMffVY%2FLG4yg6j1NtEsge69tKEhlLV%2FIOXFfjYyssLEzAIHgE%2B69qQ4xUzZRPUte7jvIK1zzVgdPuBycJYyZ15%2BlPRJb8IV%2FIs%2BwZurUTCPNDzaVLFMxDIY6mRy%2B%2FiNSoBFdB9Zcsqkti9RifDgLGZkNahAOiyEygPp41YiMn3wczsFHWC%2F5V99fRCV2xfM4ZpTaCEOCl8WT58QkDUZbSRgswa6rizXYuV1Lhq18MOsWkhPD76G7vH4GT3hyREhen4bCJ%2B3lnOBInF7sQ3WMKifct14NQOOB0jVMNflMOqJi8QGOqUBpNtG7hfrK5nynm%2BTy9k1yuknjZwmyI1VUJxWOpyI8fTnwTzAKIk%2BkJt4PIiZCfjyykmoZqIgAh1eZqaJKZGs5QiCYMs8ok%2B770pqzINA8snmTnv1qOp2P5YIqaAfd9BGmUZij0kZe93osIy8LCIxrxF2CSO%2BlJz7zO4PmEfjfa0Ajq8SD%2ByVt6SxXPCKdM%2FNxBhvZy4jfeDt88%2Bs5dUk2RT5M146&X-Amz-Signature=fe5f0c01904e5959018de1ee178fcf36d3c8c34ad6d5d9343ad48442e25d64eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AE6PVPN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCV9mC%2FDdLPHivPcDBchRIYZ7ldaMuMhN84QN1exp6AbwIgb43V4FXlUCYxHCVALNAZzf78StwpIfwofQ6rfa7SHXcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMnCg6MJAV32yfejcSrcA1kvQtD6gIGb3XMHBsf%2BNZHJOFIB%2Bs1u832sop6TgWIiappOWRnVf5A3Y%2FdVuBZ%2Fyq%2BBA4bKvmYx%2FxvcWPi7pov2S9qZ6eaxCLlPPz4XD8x%2BbbuhclZaR9dZ9%2FXIu0pBbVHsrFstir2dVS6weNhpdl%2FnnU%2Bq1fzaTkbbF%2BJ5kyaiRZKySE%2BkB81F7j1MP0ndhEx5aLCI0MMCUhStLe2kL6S5vGnokr2P3SvUheN1Htxtjpze%2FH6geccEutV9kkoXn5pMp4HoY24GSQjlIO8qtrWKijiq8aUyqqk1lijZ1k%2FFpcsvINUXoLNf%2F7vDZopIyOoFIecGzHtoktZVS45C9MMffVY%2FLG4yg6j1NtEsge69tKEhlLV%2FIOXFfjYyssLEzAIHgE%2B69qQ4xUzZRPUte7jvIK1zzVgdPuBycJYyZ15%2BlPRJb8IV%2FIs%2BwZurUTCPNDzaVLFMxDIY6mRy%2B%2FiNSoBFdB9Zcsqkti9RifDgLGZkNahAOiyEygPp41YiMn3wczsFHWC%2F5V99fRCV2xfM4ZpTaCEOCl8WT58QkDUZbSRgswa6rizXYuV1Lhq18MOsWkhPD76G7vH4GT3hyREhen4bCJ%2B3lnOBInF7sQ3WMKifct14NQOOB0jVMNflMOqJi8QGOqUBpNtG7hfrK5nynm%2BTy9k1yuknjZwmyI1VUJxWOpyI8fTnwTzAKIk%2BkJt4PIiZCfjyykmoZqIgAh1eZqaJKZGs5QiCYMs8ok%2B770pqzINA8snmTnv1qOp2P5YIqaAfd9BGmUZij0kZe93osIy8LCIxrxF2CSO%2BlJz7zO4PmEfjfa0Ajq8SD%2ByVt6SxXPCKdM%2FNxBhvZy4jfeDt88%2Bs5dUk2RT5M146&X-Amz-Signature=50b350b5a606bd3f2848578d0facc35a527dcc399b0f8bcdaeb699ce6e53ae7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AE6PVPN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCV9mC%2FDdLPHivPcDBchRIYZ7ldaMuMhN84QN1exp6AbwIgb43V4FXlUCYxHCVALNAZzf78StwpIfwofQ6rfa7SHXcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMnCg6MJAV32yfejcSrcA1kvQtD6gIGb3XMHBsf%2BNZHJOFIB%2Bs1u832sop6TgWIiappOWRnVf5A3Y%2FdVuBZ%2Fyq%2BBA4bKvmYx%2FxvcWPi7pov2S9qZ6eaxCLlPPz4XD8x%2BbbuhclZaR9dZ9%2FXIu0pBbVHsrFstir2dVS6weNhpdl%2FnnU%2Bq1fzaTkbbF%2BJ5kyaiRZKySE%2BkB81F7j1MP0ndhEx5aLCI0MMCUhStLe2kL6S5vGnokr2P3SvUheN1Htxtjpze%2FH6geccEutV9kkoXn5pMp4HoY24GSQjlIO8qtrWKijiq8aUyqqk1lijZ1k%2FFpcsvINUXoLNf%2F7vDZopIyOoFIecGzHtoktZVS45C9MMffVY%2FLG4yg6j1NtEsge69tKEhlLV%2FIOXFfjYyssLEzAIHgE%2B69qQ4xUzZRPUte7jvIK1zzVgdPuBycJYyZ15%2BlPRJb8IV%2FIs%2BwZurUTCPNDzaVLFMxDIY6mRy%2B%2FiNSoBFdB9Zcsqkti9RifDgLGZkNahAOiyEygPp41YiMn3wczsFHWC%2F5V99fRCV2xfM4ZpTaCEOCl8WT58QkDUZbSRgswa6rizXYuV1Lhq18MOsWkhPD76G7vH4GT3hyREhen4bCJ%2B3lnOBInF7sQ3WMKifct14NQOOB0jVMNflMOqJi8QGOqUBpNtG7hfrK5nynm%2BTy9k1yuknjZwmyI1VUJxWOpyI8fTnwTzAKIk%2BkJt4PIiZCfjyykmoZqIgAh1eZqaJKZGs5QiCYMs8ok%2B770pqzINA8snmTnv1qOp2P5YIqaAfd9BGmUZij0kZe93osIy8LCIxrxF2CSO%2BlJz7zO4PmEfjfa0Ajq8SD%2ByVt6SxXPCKdM%2FNxBhvZy4jfeDt88%2Bs5dUk2RT5M146&X-Amz-Signature=8b4f96efa5f2522a8e4c70386b74109b1afe869bf377f2fd90fa89ca5cd817e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AE6PVPN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCV9mC%2FDdLPHivPcDBchRIYZ7ldaMuMhN84QN1exp6AbwIgb43V4FXlUCYxHCVALNAZzf78StwpIfwofQ6rfa7SHXcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMnCg6MJAV32yfejcSrcA1kvQtD6gIGb3XMHBsf%2BNZHJOFIB%2Bs1u832sop6TgWIiappOWRnVf5A3Y%2FdVuBZ%2Fyq%2BBA4bKvmYx%2FxvcWPi7pov2S9qZ6eaxCLlPPz4XD8x%2BbbuhclZaR9dZ9%2FXIu0pBbVHsrFstir2dVS6weNhpdl%2FnnU%2Bq1fzaTkbbF%2BJ5kyaiRZKySE%2BkB81F7j1MP0ndhEx5aLCI0MMCUhStLe2kL6S5vGnokr2P3SvUheN1Htxtjpze%2FH6geccEutV9kkoXn5pMp4HoY24GSQjlIO8qtrWKijiq8aUyqqk1lijZ1k%2FFpcsvINUXoLNf%2F7vDZopIyOoFIecGzHtoktZVS45C9MMffVY%2FLG4yg6j1NtEsge69tKEhlLV%2FIOXFfjYyssLEzAIHgE%2B69qQ4xUzZRPUte7jvIK1zzVgdPuBycJYyZ15%2BlPRJb8IV%2FIs%2BwZurUTCPNDzaVLFMxDIY6mRy%2B%2FiNSoBFdB9Zcsqkti9RifDgLGZkNahAOiyEygPp41YiMn3wczsFHWC%2F5V99fRCV2xfM4ZpTaCEOCl8WT58QkDUZbSRgswa6rizXYuV1Lhq18MOsWkhPD76G7vH4GT3hyREhen4bCJ%2B3lnOBInF7sQ3WMKifct14NQOOB0jVMNflMOqJi8QGOqUBpNtG7hfrK5nynm%2BTy9k1yuknjZwmyI1VUJxWOpyI8fTnwTzAKIk%2BkJt4PIiZCfjyykmoZqIgAh1eZqaJKZGs5QiCYMs8ok%2B770pqzINA8snmTnv1qOp2P5YIqaAfd9BGmUZij0kZe93osIy8LCIxrxF2CSO%2BlJz7zO4PmEfjfa0Ajq8SD%2ByVt6SxXPCKdM%2FNxBhvZy4jfeDt88%2Bs5dUk2RT5M146&X-Amz-Signature=020e2b78f17ff618d8b3dd1ca61b57d3e32c0513a20deb155e8ccb0bca4c2aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
