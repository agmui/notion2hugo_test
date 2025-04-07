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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZC3WU2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHWZy1jbfxa3H8SpY81xmHAhxVrJhdyN35dTx8oEDjywIgVCavbwDlhqXXF1Po20z6xJpskIp7N8ZTIj1LXsoUvd0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJKSnaxDH%2FnGz36q9ircA171GZrhB8IR83ddljH%2Bs%2B02oP%2BGI9DBOeBHZ59dx6d23geFF3DuGfhZswz63CNXJ6kgFOs3nMmDU5V0qJDjSyCE%2B8SQRLwDWqRZpEHBMfa3GWgF1rX%2F5IY9C0ljKTGpHcTf4ibCWuzuqnRe48WMOF3uGbBzM230YoGO5CCzJ8coj3vMPbbtX7gwbM%2BeWgw6mgz3%2BTyFG1Ss939UpwZhWuKLzEy3uQQUoYUtYQojgnk7rCRITSq7HZGUpmCBnBlGQg0OHEKTTVFxUBZwJGKmhwxAKVjVDUDsq1E2Rm6gKatAOJKz2Q5CJIneTv9rDcepQPQsHITXfdCy7PUnZHMLpwVSqIRvVpRDscHX9jG8LPUPBeHDy7KDCBjlhvyj7IXprNlh3zr2v5chaV2PhMMXQx1b7dIKbLfBTTf4Hcub38%2BFeHE2oGoya2P9255jm738U25kbXCXqyYnV09wc2AeY8dSZnBMwFI%2FiW9d23FW8Y8JWx5cASbDHQVMnKyxtulR%2FLKq7NdH4LuFiqZ7AcvLn7XOstc1cOssjzvx71R2ct2YksuKvE%2BQYD1y5C9e0XDomc7XeAkbd8Jb6hOAvmGFYRGnx2QLuDhYvnbnRBjRWSORIgVzqqFIIMc0cizrMKvRzb8GOqUBPmfAqwRCFVd67d4CKDacW%2FuB9G%2FnJJVxPZTlaPmlrlqVVISMtk4%2BRpKMifCos5kPK1larT%2FgqK0xrhHSpeq2NnYxslj70FH5Zz1sGkyH0OlBrzA7zPPH0sw2LWLpqb3YZkZSK%2F8QCrjsbxkPlu4e5RTwfI8QuLWSA851jgzIzDwexPai5IM875W0WeXDQMBHY%2FsWNrtQh9rJPp48%2B5ksosrDDCVG&X-Amz-Signature=df24e6b841eae6dd773020ee41731de5d47b3f887289f7583c7732513d6c8ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZC3WU2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHWZy1jbfxa3H8SpY81xmHAhxVrJhdyN35dTx8oEDjywIgVCavbwDlhqXXF1Po20z6xJpskIp7N8ZTIj1LXsoUvd0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJKSnaxDH%2FnGz36q9ircA171GZrhB8IR83ddljH%2Bs%2B02oP%2BGI9DBOeBHZ59dx6d23geFF3DuGfhZswz63CNXJ6kgFOs3nMmDU5V0qJDjSyCE%2B8SQRLwDWqRZpEHBMfa3GWgF1rX%2F5IY9C0ljKTGpHcTf4ibCWuzuqnRe48WMOF3uGbBzM230YoGO5CCzJ8coj3vMPbbtX7gwbM%2BeWgw6mgz3%2BTyFG1Ss939UpwZhWuKLzEy3uQQUoYUtYQojgnk7rCRITSq7HZGUpmCBnBlGQg0OHEKTTVFxUBZwJGKmhwxAKVjVDUDsq1E2Rm6gKatAOJKz2Q5CJIneTv9rDcepQPQsHITXfdCy7PUnZHMLpwVSqIRvVpRDscHX9jG8LPUPBeHDy7KDCBjlhvyj7IXprNlh3zr2v5chaV2PhMMXQx1b7dIKbLfBTTf4Hcub38%2BFeHE2oGoya2P9255jm738U25kbXCXqyYnV09wc2AeY8dSZnBMwFI%2FiW9d23FW8Y8JWx5cASbDHQVMnKyxtulR%2FLKq7NdH4LuFiqZ7AcvLn7XOstc1cOssjzvx71R2ct2YksuKvE%2BQYD1y5C9e0XDomc7XeAkbd8Jb6hOAvmGFYRGnx2QLuDhYvnbnRBjRWSORIgVzqqFIIMc0cizrMKvRzb8GOqUBPmfAqwRCFVd67d4CKDacW%2FuB9G%2FnJJVxPZTlaPmlrlqVVISMtk4%2BRpKMifCos5kPK1larT%2FgqK0xrhHSpeq2NnYxslj70FH5Zz1sGkyH0OlBrzA7zPPH0sw2LWLpqb3YZkZSK%2F8QCrjsbxkPlu4e5RTwfI8QuLWSA851jgzIzDwexPai5IM875W0WeXDQMBHY%2FsWNrtQh9rJPp48%2B5ksosrDDCVG&X-Amz-Signature=7596c207768d14b6aee6b87e0425ed3d8454e7c005a2d31b17bd4e2c6cb4164a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZC3WU2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHWZy1jbfxa3H8SpY81xmHAhxVrJhdyN35dTx8oEDjywIgVCavbwDlhqXXF1Po20z6xJpskIp7N8ZTIj1LXsoUvd0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJKSnaxDH%2FnGz36q9ircA171GZrhB8IR83ddljH%2Bs%2B02oP%2BGI9DBOeBHZ59dx6d23geFF3DuGfhZswz63CNXJ6kgFOs3nMmDU5V0qJDjSyCE%2B8SQRLwDWqRZpEHBMfa3GWgF1rX%2F5IY9C0ljKTGpHcTf4ibCWuzuqnRe48WMOF3uGbBzM230YoGO5CCzJ8coj3vMPbbtX7gwbM%2BeWgw6mgz3%2BTyFG1Ss939UpwZhWuKLzEy3uQQUoYUtYQojgnk7rCRITSq7HZGUpmCBnBlGQg0OHEKTTVFxUBZwJGKmhwxAKVjVDUDsq1E2Rm6gKatAOJKz2Q5CJIneTv9rDcepQPQsHITXfdCy7PUnZHMLpwVSqIRvVpRDscHX9jG8LPUPBeHDy7KDCBjlhvyj7IXprNlh3zr2v5chaV2PhMMXQx1b7dIKbLfBTTf4Hcub38%2BFeHE2oGoya2P9255jm738U25kbXCXqyYnV09wc2AeY8dSZnBMwFI%2FiW9d23FW8Y8JWx5cASbDHQVMnKyxtulR%2FLKq7NdH4LuFiqZ7AcvLn7XOstc1cOssjzvx71R2ct2YksuKvE%2BQYD1y5C9e0XDomc7XeAkbd8Jb6hOAvmGFYRGnx2QLuDhYvnbnRBjRWSORIgVzqqFIIMc0cizrMKvRzb8GOqUBPmfAqwRCFVd67d4CKDacW%2FuB9G%2FnJJVxPZTlaPmlrlqVVISMtk4%2BRpKMifCos5kPK1larT%2FgqK0xrhHSpeq2NnYxslj70FH5Zz1sGkyH0OlBrzA7zPPH0sw2LWLpqb3YZkZSK%2F8QCrjsbxkPlu4e5RTwfI8QuLWSA851jgzIzDwexPai5IM875W0WeXDQMBHY%2FsWNrtQh9rJPp48%2B5ksosrDDCVG&X-Amz-Signature=8de0992b84c63c4f21dde6b2d99acde64c03be37f6ad8b1e138a58f11d13f07a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZC3WU2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHWZy1jbfxa3H8SpY81xmHAhxVrJhdyN35dTx8oEDjywIgVCavbwDlhqXXF1Po20z6xJpskIp7N8ZTIj1LXsoUvd0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJKSnaxDH%2FnGz36q9ircA171GZrhB8IR83ddljH%2Bs%2B02oP%2BGI9DBOeBHZ59dx6d23geFF3DuGfhZswz63CNXJ6kgFOs3nMmDU5V0qJDjSyCE%2B8SQRLwDWqRZpEHBMfa3GWgF1rX%2F5IY9C0ljKTGpHcTf4ibCWuzuqnRe48WMOF3uGbBzM230YoGO5CCzJ8coj3vMPbbtX7gwbM%2BeWgw6mgz3%2BTyFG1Ss939UpwZhWuKLzEy3uQQUoYUtYQojgnk7rCRITSq7HZGUpmCBnBlGQg0OHEKTTVFxUBZwJGKmhwxAKVjVDUDsq1E2Rm6gKatAOJKz2Q5CJIneTv9rDcepQPQsHITXfdCy7PUnZHMLpwVSqIRvVpRDscHX9jG8LPUPBeHDy7KDCBjlhvyj7IXprNlh3zr2v5chaV2PhMMXQx1b7dIKbLfBTTf4Hcub38%2BFeHE2oGoya2P9255jm738U25kbXCXqyYnV09wc2AeY8dSZnBMwFI%2FiW9d23FW8Y8JWx5cASbDHQVMnKyxtulR%2FLKq7NdH4LuFiqZ7AcvLn7XOstc1cOssjzvx71R2ct2YksuKvE%2BQYD1y5C9e0XDomc7XeAkbd8Jb6hOAvmGFYRGnx2QLuDhYvnbnRBjRWSORIgVzqqFIIMc0cizrMKvRzb8GOqUBPmfAqwRCFVd67d4CKDacW%2FuB9G%2FnJJVxPZTlaPmlrlqVVISMtk4%2BRpKMifCos5kPK1larT%2FgqK0xrhHSpeq2NnYxslj70FH5Zz1sGkyH0OlBrzA7zPPH0sw2LWLpqb3YZkZSK%2F8QCrjsbxkPlu4e5RTwfI8QuLWSA851jgzIzDwexPai5IM875W0WeXDQMBHY%2FsWNrtQh9rJPp48%2B5ksosrDDCVG&X-Amz-Signature=1f8fa7604e22734d85463fc0850d0bd2a613aebf39ebbc1d0636eb251c4cb14b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZC3WU2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHWZy1jbfxa3H8SpY81xmHAhxVrJhdyN35dTx8oEDjywIgVCavbwDlhqXXF1Po20z6xJpskIp7N8ZTIj1LXsoUvd0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJKSnaxDH%2FnGz36q9ircA171GZrhB8IR83ddljH%2Bs%2B02oP%2BGI9DBOeBHZ59dx6d23geFF3DuGfhZswz63CNXJ6kgFOs3nMmDU5V0qJDjSyCE%2B8SQRLwDWqRZpEHBMfa3GWgF1rX%2F5IY9C0ljKTGpHcTf4ibCWuzuqnRe48WMOF3uGbBzM230YoGO5CCzJ8coj3vMPbbtX7gwbM%2BeWgw6mgz3%2BTyFG1Ss939UpwZhWuKLzEy3uQQUoYUtYQojgnk7rCRITSq7HZGUpmCBnBlGQg0OHEKTTVFxUBZwJGKmhwxAKVjVDUDsq1E2Rm6gKatAOJKz2Q5CJIneTv9rDcepQPQsHITXfdCy7PUnZHMLpwVSqIRvVpRDscHX9jG8LPUPBeHDy7KDCBjlhvyj7IXprNlh3zr2v5chaV2PhMMXQx1b7dIKbLfBTTf4Hcub38%2BFeHE2oGoya2P9255jm738U25kbXCXqyYnV09wc2AeY8dSZnBMwFI%2FiW9d23FW8Y8JWx5cASbDHQVMnKyxtulR%2FLKq7NdH4LuFiqZ7AcvLn7XOstc1cOssjzvx71R2ct2YksuKvE%2BQYD1y5C9e0XDomc7XeAkbd8Jb6hOAvmGFYRGnx2QLuDhYvnbnRBjRWSORIgVzqqFIIMc0cizrMKvRzb8GOqUBPmfAqwRCFVd67d4CKDacW%2FuB9G%2FnJJVxPZTlaPmlrlqVVISMtk4%2BRpKMifCos5kPK1larT%2FgqK0xrhHSpeq2NnYxslj70FH5Zz1sGkyH0OlBrzA7zPPH0sw2LWLpqb3YZkZSK%2F8QCrjsbxkPlu4e5RTwfI8QuLWSA851jgzIzDwexPai5IM875W0WeXDQMBHY%2FsWNrtQh9rJPp48%2B5ksosrDDCVG&X-Amz-Signature=d54c91f12ab8e4324df7dac1774c3c49865d671eff8211797f0a08b2b636c791&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
