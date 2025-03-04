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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSMD22Z6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbHJ%2Favia1LpcsHJFYOilVDtI5J1jMOUNlplytlfgnsAiEAtT9OOzVF4TeljOm0lU72eaJjjpSArm0nbVineMAyEdUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhLib4jZjX%2FBYbv7SrcA13cFogy1Ft0zelX98ZxQRXl6UJxOPFfAaW1kxriesQ%2BayD1scGLOpY0DdiWTiOk3p%2BK7pOApWqBeACrpkxpdPO0FPClU1C5hRzDEUeYGKcX%2BQSWY6rHKs5f5pssGovtXFaiKPtJl%2FszrFcZmhfDz8Mu%2FXBHORstPCPatRpa2z7CEk6zI%2Fqc8Z0NsKVpUPptS05YgFP11sfA3LwsnMfgJ6jf1nSlIYZWhHdA8uIcGmLZtvdqmgwXendnetUlViaGyigKd3mxUhaJ1GBLe8zpsjHeaf%2BGSUvW7ytZUk1vi9BlZKC360vlnQCNltgx64eZVkk6%2Fi6gSh9TgpODKkx9OS59txzR08CmjS1GMTsOeW%2FJ2G%2B4H1%2Fxm59Vn6NJWYXINr%2FQd8kbxuxbew6PRaMGaRCr4cXlmWU7WiTFUeYzzBScCUdM4vzivA9aWl6JkUFn%2FWjgr%2Bj9ROb7DhMLoMOrRrSNZmxcfYDrrbWbjQrElC5CRMUSBVajG%2Fazfiv3PWnOnmxAnFhXot22%2BDv4cNU3ZJ6pndVkdnstujhrnURuhA%2B6KDDhi2YFNDU0MtZOPiC4PGGADW2UikIxrNTc6y%2BYjibAUkROM22lvyB2Eg11M8l93VAUZ%2BayI7FtU2gXMKH4mL4GOqUBvHViSjwt30cQ28GI4yAYU2lLjWP%2FNSeew3TASAa1y6%2B4KjCA60%2FHoFNW8dWGH%2BpbwYRwyi5qVm5ZeQqFzHTwP3Bl%2FIJ83e6HwdeADkHymb69f1RnNamE%2FVTOsLovk%2B%2BEUo4GhUK82V4jp4xGREVZje4hCJm4C8qJc7IEkAbMKZRZ15QhYTmrWS86MD4gNZmsV%2Bk%2FG3PLvu%2FdF19GNTLQL9pr6hRd&X-Amz-Signature=9c78d92ed0091762aa21ecfe56c83d6ac98ec573e418f07c6b4ab3ecc671584a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSMD22Z6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbHJ%2Favia1LpcsHJFYOilVDtI5J1jMOUNlplytlfgnsAiEAtT9OOzVF4TeljOm0lU72eaJjjpSArm0nbVineMAyEdUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhLib4jZjX%2FBYbv7SrcA13cFogy1Ft0zelX98ZxQRXl6UJxOPFfAaW1kxriesQ%2BayD1scGLOpY0DdiWTiOk3p%2BK7pOApWqBeACrpkxpdPO0FPClU1C5hRzDEUeYGKcX%2BQSWY6rHKs5f5pssGovtXFaiKPtJl%2FszrFcZmhfDz8Mu%2FXBHORstPCPatRpa2z7CEk6zI%2Fqc8Z0NsKVpUPptS05YgFP11sfA3LwsnMfgJ6jf1nSlIYZWhHdA8uIcGmLZtvdqmgwXendnetUlViaGyigKd3mxUhaJ1GBLe8zpsjHeaf%2BGSUvW7ytZUk1vi9BlZKC360vlnQCNltgx64eZVkk6%2Fi6gSh9TgpODKkx9OS59txzR08CmjS1GMTsOeW%2FJ2G%2B4H1%2Fxm59Vn6NJWYXINr%2FQd8kbxuxbew6PRaMGaRCr4cXlmWU7WiTFUeYzzBScCUdM4vzivA9aWl6JkUFn%2FWjgr%2Bj9ROb7DhMLoMOrRrSNZmxcfYDrrbWbjQrElC5CRMUSBVajG%2Fazfiv3PWnOnmxAnFhXot22%2BDv4cNU3ZJ6pndVkdnstujhrnURuhA%2B6KDDhi2YFNDU0MtZOPiC4PGGADW2UikIxrNTc6y%2BYjibAUkROM22lvyB2Eg11M8l93VAUZ%2BayI7FtU2gXMKH4mL4GOqUBvHViSjwt30cQ28GI4yAYU2lLjWP%2FNSeew3TASAa1y6%2B4KjCA60%2FHoFNW8dWGH%2BpbwYRwyi5qVm5ZeQqFzHTwP3Bl%2FIJ83e6HwdeADkHymb69f1RnNamE%2FVTOsLovk%2B%2BEUo4GhUK82V4jp4xGREVZje4hCJm4C8qJc7IEkAbMKZRZ15QhYTmrWS86MD4gNZmsV%2Bk%2FG3PLvu%2FdF19GNTLQL9pr6hRd&X-Amz-Signature=2f7cc2373e8ff29eddf68dd3f5c04fadb8f644ba62a1184aac92adb7251e5509&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSMD22Z6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbHJ%2Favia1LpcsHJFYOilVDtI5J1jMOUNlplytlfgnsAiEAtT9OOzVF4TeljOm0lU72eaJjjpSArm0nbVineMAyEdUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhLib4jZjX%2FBYbv7SrcA13cFogy1Ft0zelX98ZxQRXl6UJxOPFfAaW1kxriesQ%2BayD1scGLOpY0DdiWTiOk3p%2BK7pOApWqBeACrpkxpdPO0FPClU1C5hRzDEUeYGKcX%2BQSWY6rHKs5f5pssGovtXFaiKPtJl%2FszrFcZmhfDz8Mu%2FXBHORstPCPatRpa2z7CEk6zI%2Fqc8Z0NsKVpUPptS05YgFP11sfA3LwsnMfgJ6jf1nSlIYZWhHdA8uIcGmLZtvdqmgwXendnetUlViaGyigKd3mxUhaJ1GBLe8zpsjHeaf%2BGSUvW7ytZUk1vi9BlZKC360vlnQCNltgx64eZVkk6%2Fi6gSh9TgpODKkx9OS59txzR08CmjS1GMTsOeW%2FJ2G%2B4H1%2Fxm59Vn6NJWYXINr%2FQd8kbxuxbew6PRaMGaRCr4cXlmWU7WiTFUeYzzBScCUdM4vzivA9aWl6JkUFn%2FWjgr%2Bj9ROb7DhMLoMOrRrSNZmxcfYDrrbWbjQrElC5CRMUSBVajG%2Fazfiv3PWnOnmxAnFhXot22%2BDv4cNU3ZJ6pndVkdnstujhrnURuhA%2B6KDDhi2YFNDU0MtZOPiC4PGGADW2UikIxrNTc6y%2BYjibAUkROM22lvyB2Eg11M8l93VAUZ%2BayI7FtU2gXMKH4mL4GOqUBvHViSjwt30cQ28GI4yAYU2lLjWP%2FNSeew3TASAa1y6%2B4KjCA60%2FHoFNW8dWGH%2BpbwYRwyi5qVm5ZeQqFzHTwP3Bl%2FIJ83e6HwdeADkHymb69f1RnNamE%2FVTOsLovk%2B%2BEUo4GhUK82V4jp4xGREVZje4hCJm4C8qJc7IEkAbMKZRZ15QhYTmrWS86MD4gNZmsV%2Bk%2FG3PLvu%2FdF19GNTLQL9pr6hRd&X-Amz-Signature=d657f40dc84950d5ffbb8ee18429f9e2c0ab649d90d1f7b0464bc10a06191797&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSMD22Z6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbHJ%2Favia1LpcsHJFYOilVDtI5J1jMOUNlplytlfgnsAiEAtT9OOzVF4TeljOm0lU72eaJjjpSArm0nbVineMAyEdUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhLib4jZjX%2FBYbv7SrcA13cFogy1Ft0zelX98ZxQRXl6UJxOPFfAaW1kxriesQ%2BayD1scGLOpY0DdiWTiOk3p%2BK7pOApWqBeACrpkxpdPO0FPClU1C5hRzDEUeYGKcX%2BQSWY6rHKs5f5pssGovtXFaiKPtJl%2FszrFcZmhfDz8Mu%2FXBHORstPCPatRpa2z7CEk6zI%2Fqc8Z0NsKVpUPptS05YgFP11sfA3LwsnMfgJ6jf1nSlIYZWhHdA8uIcGmLZtvdqmgwXendnetUlViaGyigKd3mxUhaJ1GBLe8zpsjHeaf%2BGSUvW7ytZUk1vi9BlZKC360vlnQCNltgx64eZVkk6%2Fi6gSh9TgpODKkx9OS59txzR08CmjS1GMTsOeW%2FJ2G%2B4H1%2Fxm59Vn6NJWYXINr%2FQd8kbxuxbew6PRaMGaRCr4cXlmWU7WiTFUeYzzBScCUdM4vzivA9aWl6JkUFn%2FWjgr%2Bj9ROb7DhMLoMOrRrSNZmxcfYDrrbWbjQrElC5CRMUSBVajG%2Fazfiv3PWnOnmxAnFhXot22%2BDv4cNU3ZJ6pndVkdnstujhrnURuhA%2B6KDDhi2YFNDU0MtZOPiC4PGGADW2UikIxrNTc6y%2BYjibAUkROM22lvyB2Eg11M8l93VAUZ%2BayI7FtU2gXMKH4mL4GOqUBvHViSjwt30cQ28GI4yAYU2lLjWP%2FNSeew3TASAa1y6%2B4KjCA60%2FHoFNW8dWGH%2BpbwYRwyi5qVm5ZeQqFzHTwP3Bl%2FIJ83e6HwdeADkHymb69f1RnNamE%2FVTOsLovk%2B%2BEUo4GhUK82V4jp4xGREVZje4hCJm4C8qJc7IEkAbMKZRZ15QhYTmrWS86MD4gNZmsV%2Bk%2FG3PLvu%2FdF19GNTLQL9pr6hRd&X-Amz-Signature=0b7dff17be72922a9df210e3a274acadc8d5c2d609ed5fbdef33235d40b8b381&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSMD22Z6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbHJ%2Favia1LpcsHJFYOilVDtI5J1jMOUNlplytlfgnsAiEAtT9OOzVF4TeljOm0lU72eaJjjpSArm0nbVineMAyEdUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhLib4jZjX%2FBYbv7SrcA13cFogy1Ft0zelX98ZxQRXl6UJxOPFfAaW1kxriesQ%2BayD1scGLOpY0DdiWTiOk3p%2BK7pOApWqBeACrpkxpdPO0FPClU1C5hRzDEUeYGKcX%2BQSWY6rHKs5f5pssGovtXFaiKPtJl%2FszrFcZmhfDz8Mu%2FXBHORstPCPatRpa2z7CEk6zI%2Fqc8Z0NsKVpUPptS05YgFP11sfA3LwsnMfgJ6jf1nSlIYZWhHdA8uIcGmLZtvdqmgwXendnetUlViaGyigKd3mxUhaJ1GBLe8zpsjHeaf%2BGSUvW7ytZUk1vi9BlZKC360vlnQCNltgx64eZVkk6%2Fi6gSh9TgpODKkx9OS59txzR08CmjS1GMTsOeW%2FJ2G%2B4H1%2Fxm59Vn6NJWYXINr%2FQd8kbxuxbew6PRaMGaRCr4cXlmWU7WiTFUeYzzBScCUdM4vzivA9aWl6JkUFn%2FWjgr%2Bj9ROb7DhMLoMOrRrSNZmxcfYDrrbWbjQrElC5CRMUSBVajG%2Fazfiv3PWnOnmxAnFhXot22%2BDv4cNU3ZJ6pndVkdnstujhrnURuhA%2B6KDDhi2YFNDU0MtZOPiC4PGGADW2UikIxrNTc6y%2BYjibAUkROM22lvyB2Eg11M8l93VAUZ%2BayI7FtU2gXMKH4mL4GOqUBvHViSjwt30cQ28GI4yAYU2lLjWP%2FNSeew3TASAa1y6%2B4KjCA60%2FHoFNW8dWGH%2BpbwYRwyi5qVm5ZeQqFzHTwP3Bl%2FIJ83e6HwdeADkHymb69f1RnNamE%2FVTOsLovk%2B%2BEUo4GhUK82V4jp4xGREVZje4hCJm4C8qJc7IEkAbMKZRZ15QhYTmrWS86MD4gNZmsV%2Bk%2FG3PLvu%2FdF19GNTLQL9pr6hRd&X-Amz-Signature=f2d2325b4375cd994909f6bb4bb64fe026d278dffbdaea80833593c587980e76&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
