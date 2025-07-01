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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5HKERG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF1PjN4i0m7bfE4XBZzhwVc0rTIFLjZeFAunN7GfS2%2FAiEA2TdjBvNDqGJCKUkorjwl8TtS3s8t9vtwM8AAGKvrIA4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BLwZ%2FecbDBqsATpCrcAxyk25QgLi0U0L%2BS4FY2ctP8mznROneWA4xfHBp%2BDKIdeSebEccptdaJRFs0ZqC61QEUzFDnQClY5BULsWSZ72Xyub1xifzk%2BKCVOaOaHd8wP6EofII5FOTYUKp1L7gve4Y8xgOfFASUUWLLxO7bGjFXI42OfB2PdY2QlSdi5ztjcMVKvSZ2I6mRgiWgB3QmuvIX4jM9OQAIKr3mhl8xlFtxbyWntoqY%2BAZYyp00usYLoql%2BJioutqDID4QFwESqOBzdYF12XFWJJUWw0aMR0OpEU2d7n4jB7qTKkP%2BrZvvVxAbqE6xvZ6ksx%2F6Z0g1VC43hmFSImevDPuhF3Fcrsi9%2BTNAXpiKQNzHtvNvI4k0tZANHQyvTnwPieG2M66y21awqrGDQnhgDdpTFtoJygnCOLQ%2B7Ei%2BqCi9cO7xDFe9%2FFjfFSikoA3ur3tyPgBKC4GzAcBbu8mudQQvsC8wiOtrlRp30jtHItUBQQKs3OGlH2heoekssktSHsM95yYRBGqc8J1caCe2bUvMm2HwE63cwm%2BkBPaYwEhPD3oLHFs3HMDneD3y3cBr5Pcv6g9jNhcjY5oBupJRk68e8dk8e0euRheS7mdlpHT%2B7huwGwfDZgBNHatTwdUKxVUrkMPvDkMMGOqUBaZ4kln%2FJaiixudDMIVu4zC8ZX%2BZUhLjUhbCHCB4KVRmGcHIyuOe1JclGy%2BtAC3dCnrFAR%2FnXpjoYZRPEIM108qgFEuEen%2Fl%2FMYp%2Bq7ZwjzR0ep0qsBBLg66%2Bpmn7X%2BLfmpSuMsVctfzMGMOHtbkO24U1JEX8kkLPNTNjXQDB0Zl9QPneZ5DBSmnlfB7F%2Fqjg8utjmd2KU01mMxQExUraCRS2cG8o&X-Amz-Signature=3c18b16b377c71182ff1d650f79fd7009274d25a438146db3a861a04622b4c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5HKERG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF1PjN4i0m7bfE4XBZzhwVc0rTIFLjZeFAunN7GfS2%2FAiEA2TdjBvNDqGJCKUkorjwl8TtS3s8t9vtwM8AAGKvrIA4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BLwZ%2FecbDBqsATpCrcAxyk25QgLi0U0L%2BS4FY2ctP8mznROneWA4xfHBp%2BDKIdeSebEccptdaJRFs0ZqC61QEUzFDnQClY5BULsWSZ72Xyub1xifzk%2BKCVOaOaHd8wP6EofII5FOTYUKp1L7gve4Y8xgOfFASUUWLLxO7bGjFXI42OfB2PdY2QlSdi5ztjcMVKvSZ2I6mRgiWgB3QmuvIX4jM9OQAIKr3mhl8xlFtxbyWntoqY%2BAZYyp00usYLoql%2BJioutqDID4QFwESqOBzdYF12XFWJJUWw0aMR0OpEU2d7n4jB7qTKkP%2BrZvvVxAbqE6xvZ6ksx%2F6Z0g1VC43hmFSImevDPuhF3Fcrsi9%2BTNAXpiKQNzHtvNvI4k0tZANHQyvTnwPieG2M66y21awqrGDQnhgDdpTFtoJygnCOLQ%2B7Ei%2BqCi9cO7xDFe9%2FFjfFSikoA3ur3tyPgBKC4GzAcBbu8mudQQvsC8wiOtrlRp30jtHItUBQQKs3OGlH2heoekssktSHsM95yYRBGqc8J1caCe2bUvMm2HwE63cwm%2BkBPaYwEhPD3oLHFs3HMDneD3y3cBr5Pcv6g9jNhcjY5oBupJRk68e8dk8e0euRheS7mdlpHT%2B7huwGwfDZgBNHatTwdUKxVUrkMPvDkMMGOqUBaZ4kln%2FJaiixudDMIVu4zC8ZX%2BZUhLjUhbCHCB4KVRmGcHIyuOe1JclGy%2BtAC3dCnrFAR%2FnXpjoYZRPEIM108qgFEuEen%2Fl%2FMYp%2Bq7ZwjzR0ep0qsBBLg66%2Bpmn7X%2BLfmpSuMsVctfzMGMOHtbkO24U1JEX8kkLPNTNjXQDB0Zl9QPneZ5DBSmnlfB7F%2Fqjg8utjmd2KU01mMxQExUraCRS2cG8o&X-Amz-Signature=3659d36e7c8f5941a70e311391f2a04bc5bd7e19ad8392f0838f80deb8e23a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5HKERG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF1PjN4i0m7bfE4XBZzhwVc0rTIFLjZeFAunN7GfS2%2FAiEA2TdjBvNDqGJCKUkorjwl8TtS3s8t9vtwM8AAGKvrIA4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BLwZ%2FecbDBqsATpCrcAxyk25QgLi0U0L%2BS4FY2ctP8mznROneWA4xfHBp%2BDKIdeSebEccptdaJRFs0ZqC61QEUzFDnQClY5BULsWSZ72Xyub1xifzk%2BKCVOaOaHd8wP6EofII5FOTYUKp1L7gve4Y8xgOfFASUUWLLxO7bGjFXI42OfB2PdY2QlSdi5ztjcMVKvSZ2I6mRgiWgB3QmuvIX4jM9OQAIKr3mhl8xlFtxbyWntoqY%2BAZYyp00usYLoql%2BJioutqDID4QFwESqOBzdYF12XFWJJUWw0aMR0OpEU2d7n4jB7qTKkP%2BrZvvVxAbqE6xvZ6ksx%2F6Z0g1VC43hmFSImevDPuhF3Fcrsi9%2BTNAXpiKQNzHtvNvI4k0tZANHQyvTnwPieG2M66y21awqrGDQnhgDdpTFtoJygnCOLQ%2B7Ei%2BqCi9cO7xDFe9%2FFjfFSikoA3ur3tyPgBKC4GzAcBbu8mudQQvsC8wiOtrlRp30jtHItUBQQKs3OGlH2heoekssktSHsM95yYRBGqc8J1caCe2bUvMm2HwE63cwm%2BkBPaYwEhPD3oLHFs3HMDneD3y3cBr5Pcv6g9jNhcjY5oBupJRk68e8dk8e0euRheS7mdlpHT%2B7huwGwfDZgBNHatTwdUKxVUrkMPvDkMMGOqUBaZ4kln%2FJaiixudDMIVu4zC8ZX%2BZUhLjUhbCHCB4KVRmGcHIyuOe1JclGy%2BtAC3dCnrFAR%2FnXpjoYZRPEIM108qgFEuEen%2Fl%2FMYp%2Bq7ZwjzR0ep0qsBBLg66%2Bpmn7X%2BLfmpSuMsVctfzMGMOHtbkO24U1JEX8kkLPNTNjXQDB0Zl9QPneZ5DBSmnlfB7F%2Fqjg8utjmd2KU01mMxQExUraCRS2cG8o&X-Amz-Signature=a95d4cd38d09d5d6acc6a0ae7fbd76ca96ebbefa057709a566354860844f63e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5HKERG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF1PjN4i0m7bfE4XBZzhwVc0rTIFLjZeFAunN7GfS2%2FAiEA2TdjBvNDqGJCKUkorjwl8TtS3s8t9vtwM8AAGKvrIA4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BLwZ%2FecbDBqsATpCrcAxyk25QgLi0U0L%2BS4FY2ctP8mznROneWA4xfHBp%2BDKIdeSebEccptdaJRFs0ZqC61QEUzFDnQClY5BULsWSZ72Xyub1xifzk%2BKCVOaOaHd8wP6EofII5FOTYUKp1L7gve4Y8xgOfFASUUWLLxO7bGjFXI42OfB2PdY2QlSdi5ztjcMVKvSZ2I6mRgiWgB3QmuvIX4jM9OQAIKr3mhl8xlFtxbyWntoqY%2BAZYyp00usYLoql%2BJioutqDID4QFwESqOBzdYF12XFWJJUWw0aMR0OpEU2d7n4jB7qTKkP%2BrZvvVxAbqE6xvZ6ksx%2F6Z0g1VC43hmFSImevDPuhF3Fcrsi9%2BTNAXpiKQNzHtvNvI4k0tZANHQyvTnwPieG2M66y21awqrGDQnhgDdpTFtoJygnCOLQ%2B7Ei%2BqCi9cO7xDFe9%2FFjfFSikoA3ur3tyPgBKC4GzAcBbu8mudQQvsC8wiOtrlRp30jtHItUBQQKs3OGlH2heoekssktSHsM95yYRBGqc8J1caCe2bUvMm2HwE63cwm%2BkBPaYwEhPD3oLHFs3HMDneD3y3cBr5Pcv6g9jNhcjY5oBupJRk68e8dk8e0euRheS7mdlpHT%2B7huwGwfDZgBNHatTwdUKxVUrkMPvDkMMGOqUBaZ4kln%2FJaiixudDMIVu4zC8ZX%2BZUhLjUhbCHCB4KVRmGcHIyuOe1JclGy%2BtAC3dCnrFAR%2FnXpjoYZRPEIM108qgFEuEen%2Fl%2FMYp%2Bq7ZwjzR0ep0qsBBLg66%2Bpmn7X%2BLfmpSuMsVctfzMGMOHtbkO24U1JEX8kkLPNTNjXQDB0Zl9QPneZ5DBSmnlfB7F%2Fqjg8utjmd2KU01mMxQExUraCRS2cG8o&X-Amz-Signature=15e0c037fcd03e36090da6279093bcdce05aa8b0d21dadc21ee9c686bb15eb4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5HKERG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF1PjN4i0m7bfE4XBZzhwVc0rTIFLjZeFAunN7GfS2%2FAiEA2TdjBvNDqGJCKUkorjwl8TtS3s8t9vtwM8AAGKvrIA4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BLwZ%2FecbDBqsATpCrcAxyk25QgLi0U0L%2BS4FY2ctP8mznROneWA4xfHBp%2BDKIdeSebEccptdaJRFs0ZqC61QEUzFDnQClY5BULsWSZ72Xyub1xifzk%2BKCVOaOaHd8wP6EofII5FOTYUKp1L7gve4Y8xgOfFASUUWLLxO7bGjFXI42OfB2PdY2QlSdi5ztjcMVKvSZ2I6mRgiWgB3QmuvIX4jM9OQAIKr3mhl8xlFtxbyWntoqY%2BAZYyp00usYLoql%2BJioutqDID4QFwESqOBzdYF12XFWJJUWw0aMR0OpEU2d7n4jB7qTKkP%2BrZvvVxAbqE6xvZ6ksx%2F6Z0g1VC43hmFSImevDPuhF3Fcrsi9%2BTNAXpiKQNzHtvNvI4k0tZANHQyvTnwPieG2M66y21awqrGDQnhgDdpTFtoJygnCOLQ%2B7Ei%2BqCi9cO7xDFe9%2FFjfFSikoA3ur3tyPgBKC4GzAcBbu8mudQQvsC8wiOtrlRp30jtHItUBQQKs3OGlH2heoekssktSHsM95yYRBGqc8J1caCe2bUvMm2HwE63cwm%2BkBPaYwEhPD3oLHFs3HMDneD3y3cBr5Pcv6g9jNhcjY5oBupJRk68e8dk8e0euRheS7mdlpHT%2B7huwGwfDZgBNHatTwdUKxVUrkMPvDkMMGOqUBaZ4kln%2FJaiixudDMIVu4zC8ZX%2BZUhLjUhbCHCB4KVRmGcHIyuOe1JclGy%2BtAC3dCnrFAR%2FnXpjoYZRPEIM108qgFEuEen%2Fl%2FMYp%2Bq7ZwjzR0ep0qsBBLg66%2Bpmn7X%2BLfmpSuMsVctfzMGMOHtbkO24U1JEX8kkLPNTNjXQDB0Zl9QPneZ5DBSmnlfB7F%2Fqjg8utjmd2KU01mMxQExUraCRS2cG8o&X-Amz-Signature=ebfe672b20ed1b6e254f76d6c8d64a2cf3ec9d6b13266bb889821110adc083e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
