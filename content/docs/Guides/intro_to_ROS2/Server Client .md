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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLA2IL6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGgXaQjRwPG0fJj%2BfR3mjFONniRppv1HITCq%2BzmhT42WAiEAtSLp%2BoHCx1qrwxcXSupMtpHoIqF%2FBEUD1PkR5xCQEskqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWufPd3AGhYv40k6ircA%2B9GGk1cxuWwi0FvXjsw%2FukIbhPzetxCYw48Y%2F3Se4JWxT9AEd2vxUp8nrqaLpEaSjqnPZV2NuwepF2pK4epu1H4A02nPBE3KCbnS5QgKh36XeeyLXdoW%2BXkV4L1Zm88zjq2MLJSmI1WPqmKoJLfXHuEj603IEF8MHsXXlcN2GlYd%2FP45rOb7M6iEsgMPkkiisvnK%2FfLGxaNNvK%2Bf9X9AOgJgUun5DREzJrEkFCANDS3IHk78nDhiLaP6%2Fd2Xmk%2Bli%2Fs7R2niQcDkQhOeCCucmJFdv%2FzNagcIXE0sjaQktXgaD1WiNCefhnYApSiSzp8VNf0ezf1eVEjX8ZAttOWedV7qKYeKJyU1xdYPNQkDo2ve1E3yKKNhA7Iv7RfolbihiSBQquK%2B9dKC%2B7PAHttx2oIYCotl5UPOQHdNVDJPUwy90j3bdvtH7sQvKh4N9O0H%2FVBbSBLG1wdq5TcZpORzQ%2FUpIePq%2FW%2BmKrDUrFdXNejcb9eztBQYtWowgLydVV5D23vmqNmVbb2LAcVU2SP1KdmGnrssb0dPvdNyZ2jIC2WAy5GQPuCE2HXjIgxA42Nvn%2BiKaKTVG3EhxbYDMYlMlrcZqIEjzUHzuidU1hJBgHb2GMngFacBew4HMjkMPXguL8GOqUBLHxJt8Wi%2F%2FXZ%2F67G%2FdzWlYmhMH%2FPUFnYPqzfnDiQERgNMLfxg6uzn8W2E%2FE%2BGaGk7JQ5L8496okRQCVC6%2FaT%2F4XBa3UIXWS62NO5A19siyLVkns8w6haUWcYIwZCtWjQZLii1EDPrlyojBgXX6wawb5Mm8USy1D%2BnL4h94V6wuECEfYhYAQrWqL1Q91EotNBSnB%2Bua%2FUC%2BnuJOLSy0JOxiFOD4Uv&X-Amz-Signature=f222fab936f5c7960d46068ee7e18931a77e7cde10be025a1eea304e3fe6091d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLA2IL6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGgXaQjRwPG0fJj%2BfR3mjFONniRppv1HITCq%2BzmhT42WAiEAtSLp%2BoHCx1qrwxcXSupMtpHoIqF%2FBEUD1PkR5xCQEskqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWufPd3AGhYv40k6ircA%2B9GGk1cxuWwi0FvXjsw%2FukIbhPzetxCYw48Y%2F3Se4JWxT9AEd2vxUp8nrqaLpEaSjqnPZV2NuwepF2pK4epu1H4A02nPBE3KCbnS5QgKh36XeeyLXdoW%2BXkV4L1Zm88zjq2MLJSmI1WPqmKoJLfXHuEj603IEF8MHsXXlcN2GlYd%2FP45rOb7M6iEsgMPkkiisvnK%2FfLGxaNNvK%2Bf9X9AOgJgUun5DREzJrEkFCANDS3IHk78nDhiLaP6%2Fd2Xmk%2Bli%2Fs7R2niQcDkQhOeCCucmJFdv%2FzNagcIXE0sjaQktXgaD1WiNCefhnYApSiSzp8VNf0ezf1eVEjX8ZAttOWedV7qKYeKJyU1xdYPNQkDo2ve1E3yKKNhA7Iv7RfolbihiSBQquK%2B9dKC%2B7PAHttx2oIYCotl5UPOQHdNVDJPUwy90j3bdvtH7sQvKh4N9O0H%2FVBbSBLG1wdq5TcZpORzQ%2FUpIePq%2FW%2BmKrDUrFdXNejcb9eztBQYtWowgLydVV5D23vmqNmVbb2LAcVU2SP1KdmGnrssb0dPvdNyZ2jIC2WAy5GQPuCE2HXjIgxA42Nvn%2BiKaKTVG3EhxbYDMYlMlrcZqIEjzUHzuidU1hJBgHb2GMngFacBew4HMjkMPXguL8GOqUBLHxJt8Wi%2F%2FXZ%2F67G%2FdzWlYmhMH%2FPUFnYPqzfnDiQERgNMLfxg6uzn8W2E%2FE%2BGaGk7JQ5L8496okRQCVC6%2FaT%2F4XBa3UIXWS62NO5A19siyLVkns8w6haUWcYIwZCtWjQZLii1EDPrlyojBgXX6wawb5Mm8USy1D%2BnL4h94V6wuECEfYhYAQrWqL1Q91EotNBSnB%2Bua%2FUC%2BnuJOLSy0JOxiFOD4Uv&X-Amz-Signature=2ac93bad5f7ab53458802cb96acfd4fe3fdc60270f64a1317d17f1f82ffd4500&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLA2IL6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGgXaQjRwPG0fJj%2BfR3mjFONniRppv1HITCq%2BzmhT42WAiEAtSLp%2BoHCx1qrwxcXSupMtpHoIqF%2FBEUD1PkR5xCQEskqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWufPd3AGhYv40k6ircA%2B9GGk1cxuWwi0FvXjsw%2FukIbhPzetxCYw48Y%2F3Se4JWxT9AEd2vxUp8nrqaLpEaSjqnPZV2NuwepF2pK4epu1H4A02nPBE3KCbnS5QgKh36XeeyLXdoW%2BXkV4L1Zm88zjq2MLJSmI1WPqmKoJLfXHuEj603IEF8MHsXXlcN2GlYd%2FP45rOb7M6iEsgMPkkiisvnK%2FfLGxaNNvK%2Bf9X9AOgJgUun5DREzJrEkFCANDS3IHk78nDhiLaP6%2Fd2Xmk%2Bli%2Fs7R2niQcDkQhOeCCucmJFdv%2FzNagcIXE0sjaQktXgaD1WiNCefhnYApSiSzp8VNf0ezf1eVEjX8ZAttOWedV7qKYeKJyU1xdYPNQkDo2ve1E3yKKNhA7Iv7RfolbihiSBQquK%2B9dKC%2B7PAHttx2oIYCotl5UPOQHdNVDJPUwy90j3bdvtH7sQvKh4N9O0H%2FVBbSBLG1wdq5TcZpORzQ%2FUpIePq%2FW%2BmKrDUrFdXNejcb9eztBQYtWowgLydVV5D23vmqNmVbb2LAcVU2SP1KdmGnrssb0dPvdNyZ2jIC2WAy5GQPuCE2HXjIgxA42Nvn%2BiKaKTVG3EhxbYDMYlMlrcZqIEjzUHzuidU1hJBgHb2GMngFacBew4HMjkMPXguL8GOqUBLHxJt8Wi%2F%2FXZ%2F67G%2FdzWlYmhMH%2FPUFnYPqzfnDiQERgNMLfxg6uzn8W2E%2FE%2BGaGk7JQ5L8496okRQCVC6%2FaT%2F4XBa3UIXWS62NO5A19siyLVkns8w6haUWcYIwZCtWjQZLii1EDPrlyojBgXX6wawb5Mm8USy1D%2BnL4h94V6wuECEfYhYAQrWqL1Q91EotNBSnB%2Bua%2FUC%2BnuJOLSy0JOxiFOD4Uv&X-Amz-Signature=5c4d5aac0c54502ecc9339018dd44038d4142c9dd4bd298d22ca1e21820cdfab&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLA2IL6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGgXaQjRwPG0fJj%2BfR3mjFONniRppv1HITCq%2BzmhT42WAiEAtSLp%2BoHCx1qrwxcXSupMtpHoIqF%2FBEUD1PkR5xCQEskqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWufPd3AGhYv40k6ircA%2B9GGk1cxuWwi0FvXjsw%2FukIbhPzetxCYw48Y%2F3Se4JWxT9AEd2vxUp8nrqaLpEaSjqnPZV2NuwepF2pK4epu1H4A02nPBE3KCbnS5QgKh36XeeyLXdoW%2BXkV4L1Zm88zjq2MLJSmI1WPqmKoJLfXHuEj603IEF8MHsXXlcN2GlYd%2FP45rOb7M6iEsgMPkkiisvnK%2FfLGxaNNvK%2Bf9X9AOgJgUun5DREzJrEkFCANDS3IHk78nDhiLaP6%2Fd2Xmk%2Bli%2Fs7R2niQcDkQhOeCCucmJFdv%2FzNagcIXE0sjaQktXgaD1WiNCefhnYApSiSzp8VNf0ezf1eVEjX8ZAttOWedV7qKYeKJyU1xdYPNQkDo2ve1E3yKKNhA7Iv7RfolbihiSBQquK%2B9dKC%2B7PAHttx2oIYCotl5UPOQHdNVDJPUwy90j3bdvtH7sQvKh4N9O0H%2FVBbSBLG1wdq5TcZpORzQ%2FUpIePq%2FW%2BmKrDUrFdXNejcb9eztBQYtWowgLydVV5D23vmqNmVbb2LAcVU2SP1KdmGnrssb0dPvdNyZ2jIC2WAy5GQPuCE2HXjIgxA42Nvn%2BiKaKTVG3EhxbYDMYlMlrcZqIEjzUHzuidU1hJBgHb2GMngFacBew4HMjkMPXguL8GOqUBLHxJt8Wi%2F%2FXZ%2F67G%2FdzWlYmhMH%2FPUFnYPqzfnDiQERgNMLfxg6uzn8W2E%2FE%2BGaGk7JQ5L8496okRQCVC6%2FaT%2F4XBa3UIXWS62NO5A19siyLVkns8w6haUWcYIwZCtWjQZLii1EDPrlyojBgXX6wawb5Mm8USy1D%2BnL4h94V6wuECEfYhYAQrWqL1Q91EotNBSnB%2Bua%2FUC%2BnuJOLSy0JOxiFOD4Uv&X-Amz-Signature=d8a04060a9bf0b6553da2bd8bd8c326e08c3ded96411da8deb0d4326eafb3856&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLA2IL6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGgXaQjRwPG0fJj%2BfR3mjFONniRppv1HITCq%2BzmhT42WAiEAtSLp%2BoHCx1qrwxcXSupMtpHoIqF%2FBEUD1PkR5xCQEskqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWufPd3AGhYv40k6ircA%2B9GGk1cxuWwi0FvXjsw%2FukIbhPzetxCYw48Y%2F3Se4JWxT9AEd2vxUp8nrqaLpEaSjqnPZV2NuwepF2pK4epu1H4A02nPBE3KCbnS5QgKh36XeeyLXdoW%2BXkV4L1Zm88zjq2MLJSmI1WPqmKoJLfXHuEj603IEF8MHsXXlcN2GlYd%2FP45rOb7M6iEsgMPkkiisvnK%2FfLGxaNNvK%2Bf9X9AOgJgUun5DREzJrEkFCANDS3IHk78nDhiLaP6%2Fd2Xmk%2Bli%2Fs7R2niQcDkQhOeCCucmJFdv%2FzNagcIXE0sjaQktXgaD1WiNCefhnYApSiSzp8VNf0ezf1eVEjX8ZAttOWedV7qKYeKJyU1xdYPNQkDo2ve1E3yKKNhA7Iv7RfolbihiSBQquK%2B9dKC%2B7PAHttx2oIYCotl5UPOQHdNVDJPUwy90j3bdvtH7sQvKh4N9O0H%2FVBbSBLG1wdq5TcZpORzQ%2FUpIePq%2FW%2BmKrDUrFdXNejcb9eztBQYtWowgLydVV5D23vmqNmVbb2LAcVU2SP1KdmGnrssb0dPvdNyZ2jIC2WAy5GQPuCE2HXjIgxA42Nvn%2BiKaKTVG3EhxbYDMYlMlrcZqIEjzUHzuidU1hJBgHb2GMngFacBew4HMjkMPXguL8GOqUBLHxJt8Wi%2F%2FXZ%2F67G%2FdzWlYmhMH%2FPUFnYPqzfnDiQERgNMLfxg6uzn8W2E%2FE%2BGaGk7JQ5L8496okRQCVC6%2FaT%2F4XBa3UIXWS62NO5A19siyLVkns8w6haUWcYIwZCtWjQZLii1EDPrlyojBgXX6wawb5Mm8USy1D%2BnL4h94V6wuECEfYhYAQrWqL1Q91EotNBSnB%2Bua%2FUC%2BnuJOLSy0JOxiFOD4Uv&X-Amz-Signature=d4e2cbcd027bba8e0f2485f75529f710ad8332e69fa87f5e0c3580594f63d67c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
