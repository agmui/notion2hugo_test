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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZF77IQF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkVa8iTaDybcLHQRf4MH8JoKK8tBrlNl%2BLhQIxsY6ogIgZIudmG86xIa7xCYY5awB86UBjla05qJZunFGUsQNppMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2ekJaimNGU74hINircA4DOcnmOWkQH5ecoSHw57gb3j1gnbjfwmMCdFf%2BL1mg%2FLIxFPD234urg8xcnVhaVxjg%2FsxPirPviMo%2Be6Umhw%2B8mMcNb%2F%2FEM4ORaXUBTCHczKBiOcuBjZRrrtL2nxmd4GKLt%2FXuBya9xR%2BCdtghOAnqE6bBziFHWBiy5bXgmXcHo3UWfh9LsY0nhyMSHHbaUjhysD5yC6oUbuV78xMaHYiJakaWa7X6ptlsPdZWscogYWLGP7wkdEh%2FHW%2BX7bgJxgutlm9NKdARWDVQ20l2dmit1%2FlGji7JgW3EqKdusU8eNM1EhXco72x2hrCz0n5Y%2BXGRfvycQB8C2qxAmSr%2FVj%2BL9YJSIU9YBzXsqVaPs8ewdXIftNj9I8mQ%2B%2BJ%2BfrhIrVyDGXqgJNU4rLaJHzo%2FhqLCmPlw0xv8tI8bM4NcTvOiYr2epoA1HkQC%2FdIsEiVydtobGbvrbryJZxBXZkIb%2BJKJiSBTGNDx7zGL36j78uYuVusf4l21MzQ9ZOPdzc5pfFC4WhW7k2hSWOcoHsl9PjSegJl%2BmN5WvlE5sbkVN%2FJ1hduR6a%2BhquJPu0tjzT0VhMp%2FxqIW6XSsfZecRXLJClDARkqYmnHCaja0njz9vCNM39mqOLnKnvAclWxQCMNCIn8IGOqUB%2F7yPWFj7gpFC28FXvXhakikWhx2w7TQKElhQy8h749m4CL31XuxmvKXwzKd2BDtIXH21%2Bh1TMqgSO22K9mnacS9Ku87evVZ%2BMBzS0sKXy7w%2FLagzuo6Bt8fsH%2FE5tI1pFp2cOKy3DIn7PugRM9h46dlTSLdlt%2BKtin9IGzlHoFsAt6QuyqL0iFEd%2FvNn5KjaaUVPt5wdZ0LhuqSoFXClNj4f8FqI&X-Amz-Signature=9504dfa8734aa9f2a6f271b2c77f52b49a9b67a3d4977bae4fdcced69d01615d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZF77IQF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkVa8iTaDybcLHQRf4MH8JoKK8tBrlNl%2BLhQIxsY6ogIgZIudmG86xIa7xCYY5awB86UBjla05qJZunFGUsQNppMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2ekJaimNGU74hINircA4DOcnmOWkQH5ecoSHw57gb3j1gnbjfwmMCdFf%2BL1mg%2FLIxFPD234urg8xcnVhaVxjg%2FsxPirPviMo%2Be6Umhw%2B8mMcNb%2F%2FEM4ORaXUBTCHczKBiOcuBjZRrrtL2nxmd4GKLt%2FXuBya9xR%2BCdtghOAnqE6bBziFHWBiy5bXgmXcHo3UWfh9LsY0nhyMSHHbaUjhysD5yC6oUbuV78xMaHYiJakaWa7X6ptlsPdZWscogYWLGP7wkdEh%2FHW%2BX7bgJxgutlm9NKdARWDVQ20l2dmit1%2FlGji7JgW3EqKdusU8eNM1EhXco72x2hrCz0n5Y%2BXGRfvycQB8C2qxAmSr%2FVj%2BL9YJSIU9YBzXsqVaPs8ewdXIftNj9I8mQ%2B%2BJ%2BfrhIrVyDGXqgJNU4rLaJHzo%2FhqLCmPlw0xv8tI8bM4NcTvOiYr2epoA1HkQC%2FdIsEiVydtobGbvrbryJZxBXZkIb%2BJKJiSBTGNDx7zGL36j78uYuVusf4l21MzQ9ZOPdzc5pfFC4WhW7k2hSWOcoHsl9PjSegJl%2BmN5WvlE5sbkVN%2FJ1hduR6a%2BhquJPu0tjzT0VhMp%2FxqIW6XSsfZecRXLJClDARkqYmnHCaja0njz9vCNM39mqOLnKnvAclWxQCMNCIn8IGOqUB%2F7yPWFj7gpFC28FXvXhakikWhx2w7TQKElhQy8h749m4CL31XuxmvKXwzKd2BDtIXH21%2Bh1TMqgSO22K9mnacS9Ku87evVZ%2BMBzS0sKXy7w%2FLagzuo6Bt8fsH%2FE5tI1pFp2cOKy3DIn7PugRM9h46dlTSLdlt%2BKtin9IGzlHoFsAt6QuyqL0iFEd%2FvNn5KjaaUVPt5wdZ0LhuqSoFXClNj4f8FqI&X-Amz-Signature=8cf20e7a3321dcefa4a6c69ca161e3ddb71ec0b0424b246c7ad7f0f563642293&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZF77IQF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkVa8iTaDybcLHQRf4MH8JoKK8tBrlNl%2BLhQIxsY6ogIgZIudmG86xIa7xCYY5awB86UBjla05qJZunFGUsQNppMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2ekJaimNGU74hINircA4DOcnmOWkQH5ecoSHw57gb3j1gnbjfwmMCdFf%2BL1mg%2FLIxFPD234urg8xcnVhaVxjg%2FsxPirPviMo%2Be6Umhw%2B8mMcNb%2F%2FEM4ORaXUBTCHczKBiOcuBjZRrrtL2nxmd4GKLt%2FXuBya9xR%2BCdtghOAnqE6bBziFHWBiy5bXgmXcHo3UWfh9LsY0nhyMSHHbaUjhysD5yC6oUbuV78xMaHYiJakaWa7X6ptlsPdZWscogYWLGP7wkdEh%2FHW%2BX7bgJxgutlm9NKdARWDVQ20l2dmit1%2FlGji7JgW3EqKdusU8eNM1EhXco72x2hrCz0n5Y%2BXGRfvycQB8C2qxAmSr%2FVj%2BL9YJSIU9YBzXsqVaPs8ewdXIftNj9I8mQ%2B%2BJ%2BfrhIrVyDGXqgJNU4rLaJHzo%2FhqLCmPlw0xv8tI8bM4NcTvOiYr2epoA1HkQC%2FdIsEiVydtobGbvrbryJZxBXZkIb%2BJKJiSBTGNDx7zGL36j78uYuVusf4l21MzQ9ZOPdzc5pfFC4WhW7k2hSWOcoHsl9PjSegJl%2BmN5WvlE5sbkVN%2FJ1hduR6a%2BhquJPu0tjzT0VhMp%2FxqIW6XSsfZecRXLJClDARkqYmnHCaja0njz9vCNM39mqOLnKnvAclWxQCMNCIn8IGOqUB%2F7yPWFj7gpFC28FXvXhakikWhx2w7TQKElhQy8h749m4CL31XuxmvKXwzKd2BDtIXH21%2Bh1TMqgSO22K9mnacS9Ku87evVZ%2BMBzS0sKXy7w%2FLagzuo6Bt8fsH%2FE5tI1pFp2cOKy3DIn7PugRM9h46dlTSLdlt%2BKtin9IGzlHoFsAt6QuyqL0iFEd%2FvNn5KjaaUVPt5wdZ0LhuqSoFXClNj4f8FqI&X-Amz-Signature=1e1b685c68e5c5638eb1642c4e58acfdf0674cb20a786977cadd5b0621fcdd03&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZF77IQF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkVa8iTaDybcLHQRf4MH8JoKK8tBrlNl%2BLhQIxsY6ogIgZIudmG86xIa7xCYY5awB86UBjla05qJZunFGUsQNppMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2ekJaimNGU74hINircA4DOcnmOWkQH5ecoSHw57gb3j1gnbjfwmMCdFf%2BL1mg%2FLIxFPD234urg8xcnVhaVxjg%2FsxPirPviMo%2Be6Umhw%2B8mMcNb%2F%2FEM4ORaXUBTCHczKBiOcuBjZRrrtL2nxmd4GKLt%2FXuBya9xR%2BCdtghOAnqE6bBziFHWBiy5bXgmXcHo3UWfh9LsY0nhyMSHHbaUjhysD5yC6oUbuV78xMaHYiJakaWa7X6ptlsPdZWscogYWLGP7wkdEh%2FHW%2BX7bgJxgutlm9NKdARWDVQ20l2dmit1%2FlGji7JgW3EqKdusU8eNM1EhXco72x2hrCz0n5Y%2BXGRfvycQB8C2qxAmSr%2FVj%2BL9YJSIU9YBzXsqVaPs8ewdXIftNj9I8mQ%2B%2BJ%2BfrhIrVyDGXqgJNU4rLaJHzo%2FhqLCmPlw0xv8tI8bM4NcTvOiYr2epoA1HkQC%2FdIsEiVydtobGbvrbryJZxBXZkIb%2BJKJiSBTGNDx7zGL36j78uYuVusf4l21MzQ9ZOPdzc5pfFC4WhW7k2hSWOcoHsl9PjSegJl%2BmN5WvlE5sbkVN%2FJ1hduR6a%2BhquJPu0tjzT0VhMp%2FxqIW6XSsfZecRXLJClDARkqYmnHCaja0njz9vCNM39mqOLnKnvAclWxQCMNCIn8IGOqUB%2F7yPWFj7gpFC28FXvXhakikWhx2w7TQKElhQy8h749m4CL31XuxmvKXwzKd2BDtIXH21%2Bh1TMqgSO22K9mnacS9Ku87evVZ%2BMBzS0sKXy7w%2FLagzuo6Bt8fsH%2FE5tI1pFp2cOKy3DIn7PugRM9h46dlTSLdlt%2BKtin9IGzlHoFsAt6QuyqL0iFEd%2FvNn5KjaaUVPt5wdZ0LhuqSoFXClNj4f8FqI&X-Amz-Signature=837baca08569ffafbef5e0eda4c411a3266d5e13e9b5d191218d78398d61e0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZF77IQF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkVa8iTaDybcLHQRf4MH8JoKK8tBrlNl%2BLhQIxsY6ogIgZIudmG86xIa7xCYY5awB86UBjla05qJZunFGUsQNppMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2ekJaimNGU74hINircA4DOcnmOWkQH5ecoSHw57gb3j1gnbjfwmMCdFf%2BL1mg%2FLIxFPD234urg8xcnVhaVxjg%2FsxPirPviMo%2Be6Umhw%2B8mMcNb%2F%2FEM4ORaXUBTCHczKBiOcuBjZRrrtL2nxmd4GKLt%2FXuBya9xR%2BCdtghOAnqE6bBziFHWBiy5bXgmXcHo3UWfh9LsY0nhyMSHHbaUjhysD5yC6oUbuV78xMaHYiJakaWa7X6ptlsPdZWscogYWLGP7wkdEh%2FHW%2BX7bgJxgutlm9NKdARWDVQ20l2dmit1%2FlGji7JgW3EqKdusU8eNM1EhXco72x2hrCz0n5Y%2BXGRfvycQB8C2qxAmSr%2FVj%2BL9YJSIU9YBzXsqVaPs8ewdXIftNj9I8mQ%2B%2BJ%2BfrhIrVyDGXqgJNU4rLaJHzo%2FhqLCmPlw0xv8tI8bM4NcTvOiYr2epoA1HkQC%2FdIsEiVydtobGbvrbryJZxBXZkIb%2BJKJiSBTGNDx7zGL36j78uYuVusf4l21MzQ9ZOPdzc5pfFC4WhW7k2hSWOcoHsl9PjSegJl%2BmN5WvlE5sbkVN%2FJ1hduR6a%2BhquJPu0tjzT0VhMp%2FxqIW6XSsfZecRXLJClDARkqYmnHCaja0njz9vCNM39mqOLnKnvAclWxQCMNCIn8IGOqUB%2F7yPWFj7gpFC28FXvXhakikWhx2w7TQKElhQy8h749m4CL31XuxmvKXwzKd2BDtIXH21%2Bh1TMqgSO22K9mnacS9Ku87evVZ%2BMBzS0sKXy7w%2FLagzuo6Bt8fsH%2FE5tI1pFp2cOKy3DIn7PugRM9h46dlTSLdlt%2BKtin9IGzlHoFsAt6QuyqL0iFEd%2FvNn5KjaaUVPt5wdZ0LhuqSoFXClNj4f8FqI&X-Amz-Signature=865493dae9f3820653b40d066fd5d709241222223bb4663d82cdd26b214e40fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
