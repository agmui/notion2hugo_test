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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RLEUBA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD8kbYD3VMRsX1wgI7u3On2ELsSk%2FJb0llzfEzxIefopgIgNsAarxEPa4l6MNjdCCj%2B5txE0hEJWI1mupsueSV1rjcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0vncX7fLX2nMqyayrcAwo2bmc%2BK%2B2gCzpxhRn6SgbnoBKVQ%2Bnm4eP2uzt2kPAYD%2Fu4%2BV24FM4ucWV0FcEyKD5SmsEDfLB%2FTFDwup8qxkvO3AExKvE00iuEXyb4nLjMCYcd2qdsTbFCMHtQjjMi58YrF%2FUCgZNt4QsJ%2Big7QS%2B8SNgiAMAEfZBNrWMNjhwWvJu%2FO2qp3slbw7hKHP%2Fa8WfRpFyKa19mqMoetq305vsS80Z%2FTQfoV7j4ZX433%2BSpYEtP1demRxiAqrbv5bjE3dCIp889OOWBQyCnAB8%2Bek94sYkX8qFMcts9EceaRM9ci23OdFbL%2BB439FDUcmhVde5orzpt4V4b%2BB5kqmCbMA93SzyCNUTYfh37HV80jPaee6P4iCO4fG1S0Dl6R1NbQxg4SBvTtGod9eYJMUqRahTIAMIkitJeabbNTvtSWkDXNU1%2FAUx5bIW3Vr3bkQHv7yjG2i%2B8P4sDm949%2FMtNyWi5fDQ%2ForjMhWu3WkW5kNNujWsaVGMhoRfn1q0QhZjFWry1YjR0%2Bk1IBy0ruwNEE3G8yTKwo%2BESrVi4q1C09me8qSqdkkXD6vnAWRLB8YCohYlhunToK4aQTpjBAVgbKqjPr7D%2FV%2FS%2Bf%2F0E4VN8Ai2xaXMGGUh0uzqyczThMPao3b8GOqUBykjCEOW9Dk2wO0didD3vy63v9Wkr%2FALIoQXmSl3Hfy72afiW8VaMv%2FjaCgBeWp4PHu4Ks3Nfx6B%2FoYRCPL%2Byy32%2FYmHKSnSFI6FGZH0PYmW7oEcytsKYacyPs0e9x6eCKybwVxmX6o7Bb97qkxeyTLm4kgKFZLiwvfozJ%2F%2Bvw1krLetHSSjt4u01dtGF4BBHoMiI1rPmP0uJ02wSDGF6JGq3QeNu&X-Amz-Signature=0861acc443be66cfdb1179c3db617077a87360f294371e412bbfd28efd40c626&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RLEUBA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD8kbYD3VMRsX1wgI7u3On2ELsSk%2FJb0llzfEzxIefopgIgNsAarxEPa4l6MNjdCCj%2B5txE0hEJWI1mupsueSV1rjcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0vncX7fLX2nMqyayrcAwo2bmc%2BK%2B2gCzpxhRn6SgbnoBKVQ%2Bnm4eP2uzt2kPAYD%2Fu4%2BV24FM4ucWV0FcEyKD5SmsEDfLB%2FTFDwup8qxkvO3AExKvE00iuEXyb4nLjMCYcd2qdsTbFCMHtQjjMi58YrF%2FUCgZNt4QsJ%2Big7QS%2B8SNgiAMAEfZBNrWMNjhwWvJu%2FO2qp3slbw7hKHP%2Fa8WfRpFyKa19mqMoetq305vsS80Z%2FTQfoV7j4ZX433%2BSpYEtP1demRxiAqrbv5bjE3dCIp889OOWBQyCnAB8%2Bek94sYkX8qFMcts9EceaRM9ci23OdFbL%2BB439FDUcmhVde5orzpt4V4b%2BB5kqmCbMA93SzyCNUTYfh37HV80jPaee6P4iCO4fG1S0Dl6R1NbQxg4SBvTtGod9eYJMUqRahTIAMIkitJeabbNTvtSWkDXNU1%2FAUx5bIW3Vr3bkQHv7yjG2i%2B8P4sDm949%2FMtNyWi5fDQ%2ForjMhWu3WkW5kNNujWsaVGMhoRfn1q0QhZjFWry1YjR0%2Bk1IBy0ruwNEE3G8yTKwo%2BESrVi4q1C09me8qSqdkkXD6vnAWRLB8YCohYlhunToK4aQTpjBAVgbKqjPr7D%2FV%2FS%2Bf%2F0E4VN8Ai2xaXMGGUh0uzqyczThMPao3b8GOqUBykjCEOW9Dk2wO0didD3vy63v9Wkr%2FALIoQXmSl3Hfy72afiW8VaMv%2FjaCgBeWp4PHu4Ks3Nfx6B%2FoYRCPL%2Byy32%2FYmHKSnSFI6FGZH0PYmW7oEcytsKYacyPs0e9x6eCKybwVxmX6o7Bb97qkxeyTLm4kgKFZLiwvfozJ%2F%2Bvw1krLetHSSjt4u01dtGF4BBHoMiI1rPmP0uJ02wSDGF6JGq3QeNu&X-Amz-Signature=4af99cccd409d0e34f5571f1504752f993dd05f58ca7932a2d69566aefcb52f1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RLEUBA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD8kbYD3VMRsX1wgI7u3On2ELsSk%2FJb0llzfEzxIefopgIgNsAarxEPa4l6MNjdCCj%2B5txE0hEJWI1mupsueSV1rjcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0vncX7fLX2nMqyayrcAwo2bmc%2BK%2B2gCzpxhRn6SgbnoBKVQ%2Bnm4eP2uzt2kPAYD%2Fu4%2BV24FM4ucWV0FcEyKD5SmsEDfLB%2FTFDwup8qxkvO3AExKvE00iuEXyb4nLjMCYcd2qdsTbFCMHtQjjMi58YrF%2FUCgZNt4QsJ%2Big7QS%2B8SNgiAMAEfZBNrWMNjhwWvJu%2FO2qp3slbw7hKHP%2Fa8WfRpFyKa19mqMoetq305vsS80Z%2FTQfoV7j4ZX433%2BSpYEtP1demRxiAqrbv5bjE3dCIp889OOWBQyCnAB8%2Bek94sYkX8qFMcts9EceaRM9ci23OdFbL%2BB439FDUcmhVde5orzpt4V4b%2BB5kqmCbMA93SzyCNUTYfh37HV80jPaee6P4iCO4fG1S0Dl6R1NbQxg4SBvTtGod9eYJMUqRahTIAMIkitJeabbNTvtSWkDXNU1%2FAUx5bIW3Vr3bkQHv7yjG2i%2B8P4sDm949%2FMtNyWi5fDQ%2ForjMhWu3WkW5kNNujWsaVGMhoRfn1q0QhZjFWry1YjR0%2Bk1IBy0ruwNEE3G8yTKwo%2BESrVi4q1C09me8qSqdkkXD6vnAWRLB8YCohYlhunToK4aQTpjBAVgbKqjPr7D%2FV%2FS%2Bf%2F0E4VN8Ai2xaXMGGUh0uzqyczThMPao3b8GOqUBykjCEOW9Dk2wO0didD3vy63v9Wkr%2FALIoQXmSl3Hfy72afiW8VaMv%2FjaCgBeWp4PHu4Ks3Nfx6B%2FoYRCPL%2Byy32%2FYmHKSnSFI6FGZH0PYmW7oEcytsKYacyPs0e9x6eCKybwVxmX6o7Bb97qkxeyTLm4kgKFZLiwvfozJ%2F%2Bvw1krLetHSSjt4u01dtGF4BBHoMiI1rPmP0uJ02wSDGF6JGq3QeNu&X-Amz-Signature=f84f0713e05de2306ae50bf6408a86e47ab7b14ef666e1ba9a505e6edb30cc22&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RLEUBA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD8kbYD3VMRsX1wgI7u3On2ELsSk%2FJb0llzfEzxIefopgIgNsAarxEPa4l6MNjdCCj%2B5txE0hEJWI1mupsueSV1rjcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0vncX7fLX2nMqyayrcAwo2bmc%2BK%2B2gCzpxhRn6SgbnoBKVQ%2Bnm4eP2uzt2kPAYD%2Fu4%2BV24FM4ucWV0FcEyKD5SmsEDfLB%2FTFDwup8qxkvO3AExKvE00iuEXyb4nLjMCYcd2qdsTbFCMHtQjjMi58YrF%2FUCgZNt4QsJ%2Big7QS%2B8SNgiAMAEfZBNrWMNjhwWvJu%2FO2qp3slbw7hKHP%2Fa8WfRpFyKa19mqMoetq305vsS80Z%2FTQfoV7j4ZX433%2BSpYEtP1demRxiAqrbv5bjE3dCIp889OOWBQyCnAB8%2Bek94sYkX8qFMcts9EceaRM9ci23OdFbL%2BB439FDUcmhVde5orzpt4V4b%2BB5kqmCbMA93SzyCNUTYfh37HV80jPaee6P4iCO4fG1S0Dl6R1NbQxg4SBvTtGod9eYJMUqRahTIAMIkitJeabbNTvtSWkDXNU1%2FAUx5bIW3Vr3bkQHv7yjG2i%2B8P4sDm949%2FMtNyWi5fDQ%2ForjMhWu3WkW5kNNujWsaVGMhoRfn1q0QhZjFWry1YjR0%2Bk1IBy0ruwNEE3G8yTKwo%2BESrVi4q1C09me8qSqdkkXD6vnAWRLB8YCohYlhunToK4aQTpjBAVgbKqjPr7D%2FV%2FS%2Bf%2F0E4VN8Ai2xaXMGGUh0uzqyczThMPao3b8GOqUBykjCEOW9Dk2wO0didD3vy63v9Wkr%2FALIoQXmSl3Hfy72afiW8VaMv%2FjaCgBeWp4PHu4Ks3Nfx6B%2FoYRCPL%2Byy32%2FYmHKSnSFI6FGZH0PYmW7oEcytsKYacyPs0e9x6eCKybwVxmX6o7Bb97qkxeyTLm4kgKFZLiwvfozJ%2F%2Bvw1krLetHSSjt4u01dtGF4BBHoMiI1rPmP0uJ02wSDGF6JGq3QeNu&X-Amz-Signature=8c9a3e043cb8053be6b08be6a5f15aeb09ea2f31fd377ab5e5b3923a24561dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RLEUBA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD8kbYD3VMRsX1wgI7u3On2ELsSk%2FJb0llzfEzxIefopgIgNsAarxEPa4l6MNjdCCj%2B5txE0hEJWI1mupsueSV1rjcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0vncX7fLX2nMqyayrcAwo2bmc%2BK%2B2gCzpxhRn6SgbnoBKVQ%2Bnm4eP2uzt2kPAYD%2Fu4%2BV24FM4ucWV0FcEyKD5SmsEDfLB%2FTFDwup8qxkvO3AExKvE00iuEXyb4nLjMCYcd2qdsTbFCMHtQjjMi58YrF%2FUCgZNt4QsJ%2Big7QS%2B8SNgiAMAEfZBNrWMNjhwWvJu%2FO2qp3slbw7hKHP%2Fa8WfRpFyKa19mqMoetq305vsS80Z%2FTQfoV7j4ZX433%2BSpYEtP1demRxiAqrbv5bjE3dCIp889OOWBQyCnAB8%2Bek94sYkX8qFMcts9EceaRM9ci23OdFbL%2BB439FDUcmhVde5orzpt4V4b%2BB5kqmCbMA93SzyCNUTYfh37HV80jPaee6P4iCO4fG1S0Dl6R1NbQxg4SBvTtGod9eYJMUqRahTIAMIkitJeabbNTvtSWkDXNU1%2FAUx5bIW3Vr3bkQHv7yjG2i%2B8P4sDm949%2FMtNyWi5fDQ%2ForjMhWu3WkW5kNNujWsaVGMhoRfn1q0QhZjFWry1YjR0%2Bk1IBy0ruwNEE3G8yTKwo%2BESrVi4q1C09me8qSqdkkXD6vnAWRLB8YCohYlhunToK4aQTpjBAVgbKqjPr7D%2FV%2FS%2Bf%2F0E4VN8Ai2xaXMGGUh0uzqyczThMPao3b8GOqUBykjCEOW9Dk2wO0didD3vy63v9Wkr%2FALIoQXmSl3Hfy72afiW8VaMv%2FjaCgBeWp4PHu4Ks3Nfx6B%2FoYRCPL%2Byy32%2FYmHKSnSFI6FGZH0PYmW7oEcytsKYacyPs0e9x6eCKybwVxmX6o7Bb97qkxeyTLm4kgKFZLiwvfozJ%2F%2Bvw1krLetHSSjt4u01dtGF4BBHoMiI1rPmP0uJ02wSDGF6JGq3QeNu&X-Amz-Signature=06f06e4b32d491c2f66cb16f30d9fd87164fe29f7eae35e92803293f9ec83d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
