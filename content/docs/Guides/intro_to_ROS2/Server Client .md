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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUJNMKG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBOcjI0w71RxOHcLJU3%2Bqw9kNpozxBF1E1B9X5TB79DjAiEApz%2FXhos84kQ6e%2Bm8xHb7XzV%2BUNcPk1%2BBnEvfE%2BpOd1kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFgMTKPvJ6ASSulAyrcA7hIO6QVcPXfl0gXNti1BpjlvMhHVsmbzzS6N8zFkPaLvE%2FkqVHdfBQvDurzyDD7gHHYmUfNksKcnLApjjOdoVkVzinIHuSwtSDnDJ2xV%2FhIQbk0DMHiiTeMAR2YQ35k1w8vep1Gp0Kn6iidON5ImtAK5AyOjrgyDa6h1o2KhNIg2E6xtv4gBF1QIZZHRVWWEPwuoq55qel%2F5NbJX57d%2B9X0AhHbq9CoUEI%2BVxe6709BVaoirV7RHYdO7gn58A0PA6ZRXuPioMUYHXphnxki39kBDQPrtrmem%2BqsnOunjrkajzzSHHn7PE73TrtGgcM9IO9LaRzdD74s23XrXJtvOvNubPO4OQUOqSSvabdIsQDiebrPvFNdz67NCf3VD3Cpaa8EYoHjV%2FFaTuoEOZCTdNMUxUnSwDHK0nMa8Hikuy4A%2FTgXxSudcCoD47uLpCgKMVr5wfBCY4ax%2FbZRsx2miu331oTqB0ALbi5wQ7y3aEy0B1QEzdY2gBJ8dxrGSukdbBYJiqQaZPATg52l3l53BDhixOPkpbGeOCJg5xafzuCmBJtUxVPBfYdEwIyFzDgYCZld7DSDyi60xLjhsucrvCh0OEinRcsZyfjGslIR9YGuq0sNll4INlwrjPQHMIK1ocQGOqUBrCbU3a9AlQ%2FJfqxQBME%2BEQ8FGh0RdewJnOKrdZ7SeU1F0gCM6%2BYcO1FJq7%2FdDM2qAF%2BfLNBP9RBbWf%2B0Ruol0uOljlq3d0mvgx%2FjvmucE0FijLGurLxA5PFTpWSBr2FnWDD%2BOkqGhs758YI1UFvoVCgibnd3BXmqEZ1CrdNUCoHtVccZAtrQsrrmew9t0M5ylxnurG1tHJ7b7x%2BuvxvKJqZATTJr&X-Amz-Signature=378026a2fec1cd3c7cc40699696da22f1607fb32035b9233eec138070cdc07cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUJNMKG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBOcjI0w71RxOHcLJU3%2Bqw9kNpozxBF1E1B9X5TB79DjAiEApz%2FXhos84kQ6e%2Bm8xHb7XzV%2BUNcPk1%2BBnEvfE%2BpOd1kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFgMTKPvJ6ASSulAyrcA7hIO6QVcPXfl0gXNti1BpjlvMhHVsmbzzS6N8zFkPaLvE%2FkqVHdfBQvDurzyDD7gHHYmUfNksKcnLApjjOdoVkVzinIHuSwtSDnDJ2xV%2FhIQbk0DMHiiTeMAR2YQ35k1w8vep1Gp0Kn6iidON5ImtAK5AyOjrgyDa6h1o2KhNIg2E6xtv4gBF1QIZZHRVWWEPwuoq55qel%2F5NbJX57d%2B9X0AhHbq9CoUEI%2BVxe6709BVaoirV7RHYdO7gn58A0PA6ZRXuPioMUYHXphnxki39kBDQPrtrmem%2BqsnOunjrkajzzSHHn7PE73TrtGgcM9IO9LaRzdD74s23XrXJtvOvNubPO4OQUOqSSvabdIsQDiebrPvFNdz67NCf3VD3Cpaa8EYoHjV%2FFaTuoEOZCTdNMUxUnSwDHK0nMa8Hikuy4A%2FTgXxSudcCoD47uLpCgKMVr5wfBCY4ax%2FbZRsx2miu331oTqB0ALbi5wQ7y3aEy0B1QEzdY2gBJ8dxrGSukdbBYJiqQaZPATg52l3l53BDhixOPkpbGeOCJg5xafzuCmBJtUxVPBfYdEwIyFzDgYCZld7DSDyi60xLjhsucrvCh0OEinRcsZyfjGslIR9YGuq0sNll4INlwrjPQHMIK1ocQGOqUBrCbU3a9AlQ%2FJfqxQBME%2BEQ8FGh0RdewJnOKrdZ7SeU1F0gCM6%2BYcO1FJq7%2FdDM2qAF%2BfLNBP9RBbWf%2B0Ruol0uOljlq3d0mvgx%2FjvmucE0FijLGurLxA5PFTpWSBr2FnWDD%2BOkqGhs758YI1UFvoVCgibnd3BXmqEZ1CrdNUCoHtVccZAtrQsrrmew9t0M5ylxnurG1tHJ7b7x%2BuvxvKJqZATTJr&X-Amz-Signature=3721c2671e5ff253407a00cd27fbcf9421f8f8eeb1f53e549a7a3584c0d1c575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUJNMKG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBOcjI0w71RxOHcLJU3%2Bqw9kNpozxBF1E1B9X5TB79DjAiEApz%2FXhos84kQ6e%2Bm8xHb7XzV%2BUNcPk1%2BBnEvfE%2BpOd1kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFgMTKPvJ6ASSulAyrcA7hIO6QVcPXfl0gXNti1BpjlvMhHVsmbzzS6N8zFkPaLvE%2FkqVHdfBQvDurzyDD7gHHYmUfNksKcnLApjjOdoVkVzinIHuSwtSDnDJ2xV%2FhIQbk0DMHiiTeMAR2YQ35k1w8vep1Gp0Kn6iidON5ImtAK5AyOjrgyDa6h1o2KhNIg2E6xtv4gBF1QIZZHRVWWEPwuoq55qel%2F5NbJX57d%2B9X0AhHbq9CoUEI%2BVxe6709BVaoirV7RHYdO7gn58A0PA6ZRXuPioMUYHXphnxki39kBDQPrtrmem%2BqsnOunjrkajzzSHHn7PE73TrtGgcM9IO9LaRzdD74s23XrXJtvOvNubPO4OQUOqSSvabdIsQDiebrPvFNdz67NCf3VD3Cpaa8EYoHjV%2FFaTuoEOZCTdNMUxUnSwDHK0nMa8Hikuy4A%2FTgXxSudcCoD47uLpCgKMVr5wfBCY4ax%2FbZRsx2miu331oTqB0ALbi5wQ7y3aEy0B1QEzdY2gBJ8dxrGSukdbBYJiqQaZPATg52l3l53BDhixOPkpbGeOCJg5xafzuCmBJtUxVPBfYdEwIyFzDgYCZld7DSDyi60xLjhsucrvCh0OEinRcsZyfjGslIR9YGuq0sNll4INlwrjPQHMIK1ocQGOqUBrCbU3a9AlQ%2FJfqxQBME%2BEQ8FGh0RdewJnOKrdZ7SeU1F0gCM6%2BYcO1FJq7%2FdDM2qAF%2BfLNBP9RBbWf%2B0Ruol0uOljlq3d0mvgx%2FjvmucE0FijLGurLxA5PFTpWSBr2FnWDD%2BOkqGhs758YI1UFvoVCgibnd3BXmqEZ1CrdNUCoHtVccZAtrQsrrmew9t0M5ylxnurG1tHJ7b7x%2BuvxvKJqZATTJr&X-Amz-Signature=2c43f9dea2baa9b61527a9e673169ac6417b06885372ced0696da2f822c06421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUJNMKG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBOcjI0w71RxOHcLJU3%2Bqw9kNpozxBF1E1B9X5TB79DjAiEApz%2FXhos84kQ6e%2Bm8xHb7XzV%2BUNcPk1%2BBnEvfE%2BpOd1kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFgMTKPvJ6ASSulAyrcA7hIO6QVcPXfl0gXNti1BpjlvMhHVsmbzzS6N8zFkPaLvE%2FkqVHdfBQvDurzyDD7gHHYmUfNksKcnLApjjOdoVkVzinIHuSwtSDnDJ2xV%2FhIQbk0DMHiiTeMAR2YQ35k1w8vep1Gp0Kn6iidON5ImtAK5AyOjrgyDa6h1o2KhNIg2E6xtv4gBF1QIZZHRVWWEPwuoq55qel%2F5NbJX57d%2B9X0AhHbq9CoUEI%2BVxe6709BVaoirV7RHYdO7gn58A0PA6ZRXuPioMUYHXphnxki39kBDQPrtrmem%2BqsnOunjrkajzzSHHn7PE73TrtGgcM9IO9LaRzdD74s23XrXJtvOvNubPO4OQUOqSSvabdIsQDiebrPvFNdz67NCf3VD3Cpaa8EYoHjV%2FFaTuoEOZCTdNMUxUnSwDHK0nMa8Hikuy4A%2FTgXxSudcCoD47uLpCgKMVr5wfBCY4ax%2FbZRsx2miu331oTqB0ALbi5wQ7y3aEy0B1QEzdY2gBJ8dxrGSukdbBYJiqQaZPATg52l3l53BDhixOPkpbGeOCJg5xafzuCmBJtUxVPBfYdEwIyFzDgYCZld7DSDyi60xLjhsucrvCh0OEinRcsZyfjGslIR9YGuq0sNll4INlwrjPQHMIK1ocQGOqUBrCbU3a9AlQ%2FJfqxQBME%2BEQ8FGh0RdewJnOKrdZ7SeU1F0gCM6%2BYcO1FJq7%2FdDM2qAF%2BfLNBP9RBbWf%2B0Ruol0uOljlq3d0mvgx%2FjvmucE0FijLGurLxA5PFTpWSBr2FnWDD%2BOkqGhs758YI1UFvoVCgibnd3BXmqEZ1CrdNUCoHtVccZAtrQsrrmew9t0M5ylxnurG1tHJ7b7x%2BuvxvKJqZATTJr&X-Amz-Signature=625d096e1dc3a9a79820aa87151b97628f00a2dd77bbf88db4b9cafad766be23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUJNMKG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBOcjI0w71RxOHcLJU3%2Bqw9kNpozxBF1E1B9X5TB79DjAiEApz%2FXhos84kQ6e%2Bm8xHb7XzV%2BUNcPk1%2BBnEvfE%2BpOd1kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFgMTKPvJ6ASSulAyrcA7hIO6QVcPXfl0gXNti1BpjlvMhHVsmbzzS6N8zFkPaLvE%2FkqVHdfBQvDurzyDD7gHHYmUfNksKcnLApjjOdoVkVzinIHuSwtSDnDJ2xV%2FhIQbk0DMHiiTeMAR2YQ35k1w8vep1Gp0Kn6iidON5ImtAK5AyOjrgyDa6h1o2KhNIg2E6xtv4gBF1QIZZHRVWWEPwuoq55qel%2F5NbJX57d%2B9X0AhHbq9CoUEI%2BVxe6709BVaoirV7RHYdO7gn58A0PA6ZRXuPioMUYHXphnxki39kBDQPrtrmem%2BqsnOunjrkajzzSHHn7PE73TrtGgcM9IO9LaRzdD74s23XrXJtvOvNubPO4OQUOqSSvabdIsQDiebrPvFNdz67NCf3VD3Cpaa8EYoHjV%2FFaTuoEOZCTdNMUxUnSwDHK0nMa8Hikuy4A%2FTgXxSudcCoD47uLpCgKMVr5wfBCY4ax%2FbZRsx2miu331oTqB0ALbi5wQ7y3aEy0B1QEzdY2gBJ8dxrGSukdbBYJiqQaZPATg52l3l53BDhixOPkpbGeOCJg5xafzuCmBJtUxVPBfYdEwIyFzDgYCZld7DSDyi60xLjhsucrvCh0OEinRcsZyfjGslIR9YGuq0sNll4INlwrjPQHMIK1ocQGOqUBrCbU3a9AlQ%2FJfqxQBME%2BEQ8FGh0RdewJnOKrdZ7SeU1F0gCM6%2BYcO1FJq7%2FdDM2qAF%2BfLNBP9RBbWf%2B0Ruol0uOljlq3d0mvgx%2FjvmucE0FijLGurLxA5PFTpWSBr2FnWDD%2BOkqGhs758YI1UFvoVCgibnd3BXmqEZ1CrdNUCoHtVccZAtrQsrrmew9t0M5ylxnurG1tHJ7b7x%2BuvxvKJqZATTJr&X-Amz-Signature=b7e3672ddfdc40ed1077f267b64faa5562ea35986811144b83ed17ea550123bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
