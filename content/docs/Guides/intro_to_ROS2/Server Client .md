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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMTU73C%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDKaS3AS20CLcMDHWWZicMNCe%2FF3W25GYUffk97EEBkLwIhAJPp4RSVSoDC8Eh6lTRAbvSFj6v37yfF5ZQJyOKoKeAsKv8DCBoQABoMNjM3NDIzMTgzODA1IgzR8D0NeciUiRlgFB4q3AMnDoK1djNk7aMyRvOBeux20%2BOn9ehuEm7aCy3CcVqNvyVzfKsJTM10gHpM%2FCWA7e0YTPA1U9WosaQS03quH6X1eLOJX47c1pgTm6ooCuzve%2B1NJQvrpbFodOU%2Fajyx%2BimyxPIuZW5x4i3FsGaotEKEYlLge%2F1rdTJB7Ecd3asgUgHJJu0m1aMf5SisfoudTsEopHbUe1k7f8H9pbjd1MWnaG8DWZTDJST2L9sT2u4l9Om73t3ptBA%2Fjgc0qMsojsffQ9eTRZaDeAHwHqcB46cJrb7yHRzFh1MB%2BncFKHCYnBN08Yc12KU13xv9814%2FYM2IMxuaDwbDw9ssMujMxpC2dyOc48iFg%2BLKt8xA4izBpg5q2ob%2Fokfjo%2Fw%2Bk66xAHsseJ3Ab1l4siZLBg%2FzDu2qQyd2Y3iwnrRit0%2FEJMDzy%2Fqu2q2cArYcFJkm7KgSLp%2F6y2%2FFMIrnQmpUUmrgm3VF2shiK5VYiho%2BxEFO2AFbNsQCMgeWEVT3tmVpen4hn4kpBG3jsYHzlfNRGm1wfV3vcblwnV0Hq4xPktCMVg54gF%2BI2gR9Zu7kK78Ks2w4HZdmrNQeUjcl6m%2FKbS7syzdPU2e%2BUYGiIbDFXOw3iC9szCJIuq3Fd4NtAQJLZjDd5ZrDBjqkAUokI38F6xpTXLNRAoJEhAi9ExlzMz1E2GkdyscRxyDbzSjX%2BLgaiBlsLTLDh%2Ba4SBCtJvp7kCqcV40eAgsf5zn5mSeIGPAl0MUQ2T17PktzMyO%2FZSx3Klw%2BNkN5JF%2FJD64KrVZZvVzTR%2FrSrMSwe9xju%2FVf7oD6fjdPXot%2FqwaVgEXp3FNMmb5HW87w73v7I3rCjJkNgW8k9wQ44bNs54BylJmr&X-Amz-Signature=535a0229f207fe79e3000dfd6907a601293af44c525b7dcd7352994c5ac9072d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMTU73C%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDKaS3AS20CLcMDHWWZicMNCe%2FF3W25GYUffk97EEBkLwIhAJPp4RSVSoDC8Eh6lTRAbvSFj6v37yfF5ZQJyOKoKeAsKv8DCBoQABoMNjM3NDIzMTgzODA1IgzR8D0NeciUiRlgFB4q3AMnDoK1djNk7aMyRvOBeux20%2BOn9ehuEm7aCy3CcVqNvyVzfKsJTM10gHpM%2FCWA7e0YTPA1U9WosaQS03quH6X1eLOJX47c1pgTm6ooCuzve%2B1NJQvrpbFodOU%2Fajyx%2BimyxPIuZW5x4i3FsGaotEKEYlLge%2F1rdTJB7Ecd3asgUgHJJu0m1aMf5SisfoudTsEopHbUe1k7f8H9pbjd1MWnaG8DWZTDJST2L9sT2u4l9Om73t3ptBA%2Fjgc0qMsojsffQ9eTRZaDeAHwHqcB46cJrb7yHRzFh1MB%2BncFKHCYnBN08Yc12KU13xv9814%2FYM2IMxuaDwbDw9ssMujMxpC2dyOc48iFg%2BLKt8xA4izBpg5q2ob%2Fokfjo%2Fw%2Bk66xAHsseJ3Ab1l4siZLBg%2FzDu2qQyd2Y3iwnrRit0%2FEJMDzy%2Fqu2q2cArYcFJkm7KgSLp%2F6y2%2FFMIrnQmpUUmrgm3VF2shiK5VYiho%2BxEFO2AFbNsQCMgeWEVT3tmVpen4hn4kpBG3jsYHzlfNRGm1wfV3vcblwnV0Hq4xPktCMVg54gF%2BI2gR9Zu7kK78Ks2w4HZdmrNQeUjcl6m%2FKbS7syzdPU2e%2BUYGiIbDFXOw3iC9szCJIuq3Fd4NtAQJLZjDd5ZrDBjqkAUokI38F6xpTXLNRAoJEhAi9ExlzMz1E2GkdyscRxyDbzSjX%2BLgaiBlsLTLDh%2Ba4SBCtJvp7kCqcV40eAgsf5zn5mSeIGPAl0MUQ2T17PktzMyO%2FZSx3Klw%2BNkN5JF%2FJD64KrVZZvVzTR%2FrSrMSwe9xju%2FVf7oD6fjdPXot%2FqwaVgEXp3FNMmb5HW87w73v7I3rCjJkNgW8k9wQ44bNs54BylJmr&X-Amz-Signature=1a23d03c49c63425ae4e1471644e0496a6bf430b47dcc2088ca5177e1c891c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMTU73C%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDKaS3AS20CLcMDHWWZicMNCe%2FF3W25GYUffk97EEBkLwIhAJPp4RSVSoDC8Eh6lTRAbvSFj6v37yfF5ZQJyOKoKeAsKv8DCBoQABoMNjM3NDIzMTgzODA1IgzR8D0NeciUiRlgFB4q3AMnDoK1djNk7aMyRvOBeux20%2BOn9ehuEm7aCy3CcVqNvyVzfKsJTM10gHpM%2FCWA7e0YTPA1U9WosaQS03quH6X1eLOJX47c1pgTm6ooCuzve%2B1NJQvrpbFodOU%2Fajyx%2BimyxPIuZW5x4i3FsGaotEKEYlLge%2F1rdTJB7Ecd3asgUgHJJu0m1aMf5SisfoudTsEopHbUe1k7f8H9pbjd1MWnaG8DWZTDJST2L9sT2u4l9Om73t3ptBA%2Fjgc0qMsojsffQ9eTRZaDeAHwHqcB46cJrb7yHRzFh1MB%2BncFKHCYnBN08Yc12KU13xv9814%2FYM2IMxuaDwbDw9ssMujMxpC2dyOc48iFg%2BLKt8xA4izBpg5q2ob%2Fokfjo%2Fw%2Bk66xAHsseJ3Ab1l4siZLBg%2FzDu2qQyd2Y3iwnrRit0%2FEJMDzy%2Fqu2q2cArYcFJkm7KgSLp%2F6y2%2FFMIrnQmpUUmrgm3VF2shiK5VYiho%2BxEFO2AFbNsQCMgeWEVT3tmVpen4hn4kpBG3jsYHzlfNRGm1wfV3vcblwnV0Hq4xPktCMVg54gF%2BI2gR9Zu7kK78Ks2w4HZdmrNQeUjcl6m%2FKbS7syzdPU2e%2BUYGiIbDFXOw3iC9szCJIuq3Fd4NtAQJLZjDd5ZrDBjqkAUokI38F6xpTXLNRAoJEhAi9ExlzMz1E2GkdyscRxyDbzSjX%2BLgaiBlsLTLDh%2Ba4SBCtJvp7kCqcV40eAgsf5zn5mSeIGPAl0MUQ2T17PktzMyO%2FZSx3Klw%2BNkN5JF%2FJD64KrVZZvVzTR%2FrSrMSwe9xju%2FVf7oD6fjdPXot%2FqwaVgEXp3FNMmb5HW87w73v7I3rCjJkNgW8k9wQ44bNs54BylJmr&X-Amz-Signature=0c0867690cc5bd95e415da753b7b2094b8dbf5aaa053a38abb8975f976bfe488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMTU73C%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDKaS3AS20CLcMDHWWZicMNCe%2FF3W25GYUffk97EEBkLwIhAJPp4RSVSoDC8Eh6lTRAbvSFj6v37yfF5ZQJyOKoKeAsKv8DCBoQABoMNjM3NDIzMTgzODA1IgzR8D0NeciUiRlgFB4q3AMnDoK1djNk7aMyRvOBeux20%2BOn9ehuEm7aCy3CcVqNvyVzfKsJTM10gHpM%2FCWA7e0YTPA1U9WosaQS03quH6X1eLOJX47c1pgTm6ooCuzve%2B1NJQvrpbFodOU%2Fajyx%2BimyxPIuZW5x4i3FsGaotEKEYlLge%2F1rdTJB7Ecd3asgUgHJJu0m1aMf5SisfoudTsEopHbUe1k7f8H9pbjd1MWnaG8DWZTDJST2L9sT2u4l9Om73t3ptBA%2Fjgc0qMsojsffQ9eTRZaDeAHwHqcB46cJrb7yHRzFh1MB%2BncFKHCYnBN08Yc12KU13xv9814%2FYM2IMxuaDwbDw9ssMujMxpC2dyOc48iFg%2BLKt8xA4izBpg5q2ob%2Fokfjo%2Fw%2Bk66xAHsseJ3Ab1l4siZLBg%2FzDu2qQyd2Y3iwnrRit0%2FEJMDzy%2Fqu2q2cArYcFJkm7KgSLp%2F6y2%2FFMIrnQmpUUmrgm3VF2shiK5VYiho%2BxEFO2AFbNsQCMgeWEVT3tmVpen4hn4kpBG3jsYHzlfNRGm1wfV3vcblwnV0Hq4xPktCMVg54gF%2BI2gR9Zu7kK78Ks2w4HZdmrNQeUjcl6m%2FKbS7syzdPU2e%2BUYGiIbDFXOw3iC9szCJIuq3Fd4NtAQJLZjDd5ZrDBjqkAUokI38F6xpTXLNRAoJEhAi9ExlzMz1E2GkdyscRxyDbzSjX%2BLgaiBlsLTLDh%2Ba4SBCtJvp7kCqcV40eAgsf5zn5mSeIGPAl0MUQ2T17PktzMyO%2FZSx3Klw%2BNkN5JF%2FJD64KrVZZvVzTR%2FrSrMSwe9xju%2FVf7oD6fjdPXot%2FqwaVgEXp3FNMmb5HW87w73v7I3rCjJkNgW8k9wQ44bNs54BylJmr&X-Amz-Signature=25946edf3aae7557b4409b962518a8010d73c02dd3e7910afa884397fe18aa52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMTU73C%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDKaS3AS20CLcMDHWWZicMNCe%2FF3W25GYUffk97EEBkLwIhAJPp4RSVSoDC8Eh6lTRAbvSFj6v37yfF5ZQJyOKoKeAsKv8DCBoQABoMNjM3NDIzMTgzODA1IgzR8D0NeciUiRlgFB4q3AMnDoK1djNk7aMyRvOBeux20%2BOn9ehuEm7aCy3CcVqNvyVzfKsJTM10gHpM%2FCWA7e0YTPA1U9WosaQS03quH6X1eLOJX47c1pgTm6ooCuzve%2B1NJQvrpbFodOU%2Fajyx%2BimyxPIuZW5x4i3FsGaotEKEYlLge%2F1rdTJB7Ecd3asgUgHJJu0m1aMf5SisfoudTsEopHbUe1k7f8H9pbjd1MWnaG8DWZTDJST2L9sT2u4l9Om73t3ptBA%2Fjgc0qMsojsffQ9eTRZaDeAHwHqcB46cJrb7yHRzFh1MB%2BncFKHCYnBN08Yc12KU13xv9814%2FYM2IMxuaDwbDw9ssMujMxpC2dyOc48iFg%2BLKt8xA4izBpg5q2ob%2Fokfjo%2Fw%2Bk66xAHsseJ3Ab1l4siZLBg%2FzDu2qQyd2Y3iwnrRit0%2FEJMDzy%2Fqu2q2cArYcFJkm7KgSLp%2F6y2%2FFMIrnQmpUUmrgm3VF2shiK5VYiho%2BxEFO2AFbNsQCMgeWEVT3tmVpen4hn4kpBG3jsYHzlfNRGm1wfV3vcblwnV0Hq4xPktCMVg54gF%2BI2gR9Zu7kK78Ks2w4HZdmrNQeUjcl6m%2FKbS7syzdPU2e%2BUYGiIbDFXOw3iC9szCJIuq3Fd4NtAQJLZjDd5ZrDBjqkAUokI38F6xpTXLNRAoJEhAi9ExlzMz1E2GkdyscRxyDbzSjX%2BLgaiBlsLTLDh%2Ba4SBCtJvp7kCqcV40eAgsf5zn5mSeIGPAl0MUQ2T17PktzMyO%2FZSx3Klw%2BNkN5JF%2FJD64KrVZZvVzTR%2FrSrMSwe9xju%2FVf7oD6fjdPXot%2FqwaVgEXp3FNMmb5HW87w73v7I3rCjJkNgW8k9wQ44bNs54BylJmr&X-Amz-Signature=cbdd04ceaaaa5715e8b4e7f4b9e24c4ba14ecc0c3bf36a470ff86e849c107801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
