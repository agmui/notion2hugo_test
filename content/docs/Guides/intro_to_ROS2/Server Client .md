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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2XSGVU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeDt9TLcmBprF8fiQnaEIdKQ8Ug0BPE%2FuDkWF3S2EVuAiEAgdd%2B6d768XMjcs4DyrDryGEdSvbA%2BRwbDfXsRlNtWo8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLJS7YXDHi0NjxSQRSrcA1TZm9oFjwFAVqXiW%2BExDoVf3VxPjNy7iIQCCHQtn4q2hIFSIcHICqzMe3XXX6SqaKbJElL2GUiaA9f513uqdKFi3sPg4ttG5xu7tGCsOOw3hYdx0yv6k5K7JSVQ6IwjQC98ulg%2BcagNlhDH0gUItsoIdDVw%2BccEFh%2FpyJDocvFPoLa3Yoisk5n18KrK9ZkfbewVz%2BqpCKiOFBXCk91XyG36IHGNuGxWFLgiHGxurPdoCdNi%2FOWqz46xwtR4fY4TO5zwk%2B1SCjlLKj3ps02VidIKetpScSKutN%2FXeDRTj%2BNpkVAg8iIh0BVUJHUaEU15XjfQc2it3v%2BuTIdg0uiJfrtrfc2zT%2F6GExWeF8ezgfZgvSuH3edpuuFawXL37Hg6BAslvhlF%2Fs9g6il1avmpO8i62B96YlHsbVn%2FjEduMuiq93XNIx2UHaO%2BcE2mVcWBKIOHj2tjF6aATrg2w0ZwJo%2BStN2aGCWgeyl8gjBOuvPFppwQ7mpMATNDmC3Y1SSgib6aQTpJVxJTnQbeFsLlfmZTCcl%2F4Cyz6XwYXsKu1r5ckR4odv0nIujBxm9if9JZJg8oOrEp7OfbGyIfWDr7tsJbhj%2BPceTpFE8Q1d9ALR4mTcqISwHpBytDIfDhMI6Okr8GOqUB60flZJJOj61%2FoBsUF%2BSqx4o9ZgtyB1%2BDYs%2BiHHXzM%2FdS8XODFrtgkxWWM1GOhOAGWT3zALE7CPYz6ZbWE7GGeZIA6xXhZ4iVRb25SvxT5CYvt8lbznhs1Pm%2BqRNsSt%2FqarKo%2B583KgpGs313f73ETMJhNB%2BQm6rONtVnPM2aaJBve%2FiOttm45xiRPlgI%2BXNiDVG3cZYGGq5uBMW6hGreZd%2BBFPp2&X-Amz-Signature=4e646e4d9df3586df5787cb76b3f2b1a4e138d4d7d477f842da598bcbc364edc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2XSGVU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeDt9TLcmBprF8fiQnaEIdKQ8Ug0BPE%2FuDkWF3S2EVuAiEAgdd%2B6d768XMjcs4DyrDryGEdSvbA%2BRwbDfXsRlNtWo8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLJS7YXDHi0NjxSQRSrcA1TZm9oFjwFAVqXiW%2BExDoVf3VxPjNy7iIQCCHQtn4q2hIFSIcHICqzMe3XXX6SqaKbJElL2GUiaA9f513uqdKFi3sPg4ttG5xu7tGCsOOw3hYdx0yv6k5K7JSVQ6IwjQC98ulg%2BcagNlhDH0gUItsoIdDVw%2BccEFh%2FpyJDocvFPoLa3Yoisk5n18KrK9ZkfbewVz%2BqpCKiOFBXCk91XyG36IHGNuGxWFLgiHGxurPdoCdNi%2FOWqz46xwtR4fY4TO5zwk%2B1SCjlLKj3ps02VidIKetpScSKutN%2FXeDRTj%2BNpkVAg8iIh0BVUJHUaEU15XjfQc2it3v%2BuTIdg0uiJfrtrfc2zT%2F6GExWeF8ezgfZgvSuH3edpuuFawXL37Hg6BAslvhlF%2Fs9g6il1avmpO8i62B96YlHsbVn%2FjEduMuiq93XNIx2UHaO%2BcE2mVcWBKIOHj2tjF6aATrg2w0ZwJo%2BStN2aGCWgeyl8gjBOuvPFppwQ7mpMATNDmC3Y1SSgib6aQTpJVxJTnQbeFsLlfmZTCcl%2F4Cyz6XwYXsKu1r5ckR4odv0nIujBxm9if9JZJg8oOrEp7OfbGyIfWDr7tsJbhj%2BPceTpFE8Q1d9ALR4mTcqISwHpBytDIfDhMI6Okr8GOqUB60flZJJOj61%2FoBsUF%2BSqx4o9ZgtyB1%2BDYs%2BiHHXzM%2FdS8XODFrtgkxWWM1GOhOAGWT3zALE7CPYz6ZbWE7GGeZIA6xXhZ4iVRb25SvxT5CYvt8lbznhs1Pm%2BqRNsSt%2FqarKo%2B583KgpGs313f73ETMJhNB%2BQm6rONtVnPM2aaJBve%2FiOttm45xiRPlgI%2BXNiDVG3cZYGGq5uBMW6hGreZd%2BBFPp2&X-Amz-Signature=873d1abbdbfcdf3e0db3b2fd99d457aa9a7113be5b77118d0e8cb142d0c21866&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2XSGVU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeDt9TLcmBprF8fiQnaEIdKQ8Ug0BPE%2FuDkWF3S2EVuAiEAgdd%2B6d768XMjcs4DyrDryGEdSvbA%2BRwbDfXsRlNtWo8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLJS7YXDHi0NjxSQRSrcA1TZm9oFjwFAVqXiW%2BExDoVf3VxPjNy7iIQCCHQtn4q2hIFSIcHICqzMe3XXX6SqaKbJElL2GUiaA9f513uqdKFi3sPg4ttG5xu7tGCsOOw3hYdx0yv6k5K7JSVQ6IwjQC98ulg%2BcagNlhDH0gUItsoIdDVw%2BccEFh%2FpyJDocvFPoLa3Yoisk5n18KrK9ZkfbewVz%2BqpCKiOFBXCk91XyG36IHGNuGxWFLgiHGxurPdoCdNi%2FOWqz46xwtR4fY4TO5zwk%2B1SCjlLKj3ps02VidIKetpScSKutN%2FXeDRTj%2BNpkVAg8iIh0BVUJHUaEU15XjfQc2it3v%2BuTIdg0uiJfrtrfc2zT%2F6GExWeF8ezgfZgvSuH3edpuuFawXL37Hg6BAslvhlF%2Fs9g6il1avmpO8i62B96YlHsbVn%2FjEduMuiq93XNIx2UHaO%2BcE2mVcWBKIOHj2tjF6aATrg2w0ZwJo%2BStN2aGCWgeyl8gjBOuvPFppwQ7mpMATNDmC3Y1SSgib6aQTpJVxJTnQbeFsLlfmZTCcl%2F4Cyz6XwYXsKu1r5ckR4odv0nIujBxm9if9JZJg8oOrEp7OfbGyIfWDr7tsJbhj%2BPceTpFE8Q1d9ALR4mTcqISwHpBytDIfDhMI6Okr8GOqUB60flZJJOj61%2FoBsUF%2BSqx4o9ZgtyB1%2BDYs%2BiHHXzM%2FdS8XODFrtgkxWWM1GOhOAGWT3zALE7CPYz6ZbWE7GGeZIA6xXhZ4iVRb25SvxT5CYvt8lbznhs1Pm%2BqRNsSt%2FqarKo%2B583KgpGs313f73ETMJhNB%2BQm6rONtVnPM2aaJBve%2FiOttm45xiRPlgI%2BXNiDVG3cZYGGq5uBMW6hGreZd%2BBFPp2&X-Amz-Signature=9689ec1470e75f5fc12c9589ed1bff944d9433ec700de15847df025fc82d4f32&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2XSGVU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeDt9TLcmBprF8fiQnaEIdKQ8Ug0BPE%2FuDkWF3S2EVuAiEAgdd%2B6d768XMjcs4DyrDryGEdSvbA%2BRwbDfXsRlNtWo8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLJS7YXDHi0NjxSQRSrcA1TZm9oFjwFAVqXiW%2BExDoVf3VxPjNy7iIQCCHQtn4q2hIFSIcHICqzMe3XXX6SqaKbJElL2GUiaA9f513uqdKFi3sPg4ttG5xu7tGCsOOw3hYdx0yv6k5K7JSVQ6IwjQC98ulg%2BcagNlhDH0gUItsoIdDVw%2BccEFh%2FpyJDocvFPoLa3Yoisk5n18KrK9ZkfbewVz%2BqpCKiOFBXCk91XyG36IHGNuGxWFLgiHGxurPdoCdNi%2FOWqz46xwtR4fY4TO5zwk%2B1SCjlLKj3ps02VidIKetpScSKutN%2FXeDRTj%2BNpkVAg8iIh0BVUJHUaEU15XjfQc2it3v%2BuTIdg0uiJfrtrfc2zT%2F6GExWeF8ezgfZgvSuH3edpuuFawXL37Hg6BAslvhlF%2Fs9g6il1avmpO8i62B96YlHsbVn%2FjEduMuiq93XNIx2UHaO%2BcE2mVcWBKIOHj2tjF6aATrg2w0ZwJo%2BStN2aGCWgeyl8gjBOuvPFppwQ7mpMATNDmC3Y1SSgib6aQTpJVxJTnQbeFsLlfmZTCcl%2F4Cyz6XwYXsKu1r5ckR4odv0nIujBxm9if9JZJg8oOrEp7OfbGyIfWDr7tsJbhj%2BPceTpFE8Q1d9ALR4mTcqISwHpBytDIfDhMI6Okr8GOqUB60flZJJOj61%2FoBsUF%2BSqx4o9ZgtyB1%2BDYs%2BiHHXzM%2FdS8XODFrtgkxWWM1GOhOAGWT3zALE7CPYz6ZbWE7GGeZIA6xXhZ4iVRb25SvxT5CYvt8lbznhs1Pm%2BqRNsSt%2FqarKo%2B583KgpGs313f73ETMJhNB%2BQm6rONtVnPM2aaJBve%2FiOttm45xiRPlgI%2BXNiDVG3cZYGGq5uBMW6hGreZd%2BBFPp2&X-Amz-Signature=541a55bf71c0dd05d2d2672c1d879d7934aeb897bc2cf87b7f929cfe2a951bce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2XSGVU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeDt9TLcmBprF8fiQnaEIdKQ8Ug0BPE%2FuDkWF3S2EVuAiEAgdd%2B6d768XMjcs4DyrDryGEdSvbA%2BRwbDfXsRlNtWo8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLJS7YXDHi0NjxSQRSrcA1TZm9oFjwFAVqXiW%2BExDoVf3VxPjNy7iIQCCHQtn4q2hIFSIcHICqzMe3XXX6SqaKbJElL2GUiaA9f513uqdKFi3sPg4ttG5xu7tGCsOOw3hYdx0yv6k5K7JSVQ6IwjQC98ulg%2BcagNlhDH0gUItsoIdDVw%2BccEFh%2FpyJDocvFPoLa3Yoisk5n18KrK9ZkfbewVz%2BqpCKiOFBXCk91XyG36IHGNuGxWFLgiHGxurPdoCdNi%2FOWqz46xwtR4fY4TO5zwk%2B1SCjlLKj3ps02VidIKetpScSKutN%2FXeDRTj%2BNpkVAg8iIh0BVUJHUaEU15XjfQc2it3v%2BuTIdg0uiJfrtrfc2zT%2F6GExWeF8ezgfZgvSuH3edpuuFawXL37Hg6BAslvhlF%2Fs9g6il1avmpO8i62B96YlHsbVn%2FjEduMuiq93XNIx2UHaO%2BcE2mVcWBKIOHj2tjF6aATrg2w0ZwJo%2BStN2aGCWgeyl8gjBOuvPFppwQ7mpMATNDmC3Y1SSgib6aQTpJVxJTnQbeFsLlfmZTCcl%2F4Cyz6XwYXsKu1r5ckR4odv0nIujBxm9if9JZJg8oOrEp7OfbGyIfWDr7tsJbhj%2BPceTpFE8Q1d9ALR4mTcqISwHpBytDIfDhMI6Okr8GOqUB60flZJJOj61%2FoBsUF%2BSqx4o9ZgtyB1%2BDYs%2BiHHXzM%2FdS8XODFrtgkxWWM1GOhOAGWT3zALE7CPYz6ZbWE7GGeZIA6xXhZ4iVRb25SvxT5CYvt8lbznhs1Pm%2BqRNsSt%2FqarKo%2B583KgpGs313f73ETMJhNB%2BQm6rONtVnPM2aaJBve%2FiOttm45xiRPlgI%2BXNiDVG3cZYGGq5uBMW6hGreZd%2BBFPp2&X-Amz-Signature=017e2bd94ab53c5c820b301cd86071246fdcba9bb949bf63539d6da395c39f02&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
