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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AQNW7B%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCfPREazhTvwHHf1N%2B7llGcLjWpsPSq1jStVJ%2FMpMto8wIgRlZ6u8aQByjy0ngnFd4JD4Cubp2GGI7gi576SSvrdPsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHRaQ4oGZtArptyphSrcA0tHfrP0CpIa097NZHXr0CYA6Oru3niiexDdVlCWPA9fWtdDDoR6SW7IFzn6ka%2Br1va0Xn7nDaU0n4A3CJFuMKreOtHQmD2A6K%2FqGdyUZ672EOcYOmhUXfeMNZhgkhkoIdIthCkGUiV3ZYFZsUj3FzGzfIS7r1lNMc0X29Bd%2F1f9V1bjBc7N1xqIhPjJfoi2zfGpyJBqRZzBIrUd55pzbmhamv0GrUQx187FyYkmSJvCEhi%2FUCRJyVYGItSEwWPgbdbkvOzbBBmofaxOBBDeX1WZqVwpcV9hXX%2BNAd06ZkV39PTUIxgNAptmVacIwoOlOPCY3x%2Fsn%2FDcED7zdA2xR7NGWFzdjCHzR1wrER%2FQCM5%2BZMFf0fZcWP5fHdhRzI8UVPrDWXvBoCFCt4Kyqi6yp02f1LHtqBz5YOzjGJkdwWkcYusPAjNVxOJ8CsbvqbM1c2FQa18OVLJw1bwi8Bw0kYfbjiXOs8e1NiceXiRaNqk2j%2FGNtlWVrVyT7BioU3Zn9spLW3YRlhtjPJ1nzww%2BfWfp1TPk1%2BuMXI0dwNIdyC7IsMKKNHwgNeeNCBRJeMteAso0M9nF97qKF1AZaNMd2aw6HyrpI%2Ft7ncmBRNvzJ1NfL49B1IdGJKGUZa6qMJKT3sMGOqUBDmaQy8hxyTgGb3mKDspf6iyq6S4occLcuhMAW54R%2BYTjjK92%2FXNjkDDWg84SWj0WI2An3nWCwENyqoHmoI5L47Kx0pMavzCfUU9LClaOqVNguLtZ%2FsHnfQKO3n%2FsPhP9e6QR4GCwVeV%2BOjWuJSnSHPeubm%2F0gylVNH3cjYdsndwtPaQHlIfORVJTMxvx%2B9YDII8fPb0p8ls1TfUHX6QEh0p9ddaF&X-Amz-Signature=72157ed5822edab2e07306e10119fcc7b9d5a8542cbc300e709e401f7d92de87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AQNW7B%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCfPREazhTvwHHf1N%2B7llGcLjWpsPSq1jStVJ%2FMpMto8wIgRlZ6u8aQByjy0ngnFd4JD4Cubp2GGI7gi576SSvrdPsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHRaQ4oGZtArptyphSrcA0tHfrP0CpIa097NZHXr0CYA6Oru3niiexDdVlCWPA9fWtdDDoR6SW7IFzn6ka%2Br1va0Xn7nDaU0n4A3CJFuMKreOtHQmD2A6K%2FqGdyUZ672EOcYOmhUXfeMNZhgkhkoIdIthCkGUiV3ZYFZsUj3FzGzfIS7r1lNMc0X29Bd%2F1f9V1bjBc7N1xqIhPjJfoi2zfGpyJBqRZzBIrUd55pzbmhamv0GrUQx187FyYkmSJvCEhi%2FUCRJyVYGItSEwWPgbdbkvOzbBBmofaxOBBDeX1WZqVwpcV9hXX%2BNAd06ZkV39PTUIxgNAptmVacIwoOlOPCY3x%2Fsn%2FDcED7zdA2xR7NGWFzdjCHzR1wrER%2FQCM5%2BZMFf0fZcWP5fHdhRzI8UVPrDWXvBoCFCt4Kyqi6yp02f1LHtqBz5YOzjGJkdwWkcYusPAjNVxOJ8CsbvqbM1c2FQa18OVLJw1bwi8Bw0kYfbjiXOs8e1NiceXiRaNqk2j%2FGNtlWVrVyT7BioU3Zn9spLW3YRlhtjPJ1nzww%2BfWfp1TPk1%2BuMXI0dwNIdyC7IsMKKNHwgNeeNCBRJeMteAso0M9nF97qKF1AZaNMd2aw6HyrpI%2Ft7ncmBRNvzJ1NfL49B1IdGJKGUZa6qMJKT3sMGOqUBDmaQy8hxyTgGb3mKDspf6iyq6S4occLcuhMAW54R%2BYTjjK92%2FXNjkDDWg84SWj0WI2An3nWCwENyqoHmoI5L47Kx0pMavzCfUU9LClaOqVNguLtZ%2FsHnfQKO3n%2FsPhP9e6QR4GCwVeV%2BOjWuJSnSHPeubm%2F0gylVNH3cjYdsndwtPaQHlIfORVJTMxvx%2B9YDII8fPb0p8ls1TfUHX6QEh0p9ddaF&X-Amz-Signature=8ff4519f8810e29ca95be111bc43a6ba06256301b9936f3367a463aa2a2b0938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AQNW7B%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCfPREazhTvwHHf1N%2B7llGcLjWpsPSq1jStVJ%2FMpMto8wIgRlZ6u8aQByjy0ngnFd4JD4Cubp2GGI7gi576SSvrdPsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHRaQ4oGZtArptyphSrcA0tHfrP0CpIa097NZHXr0CYA6Oru3niiexDdVlCWPA9fWtdDDoR6SW7IFzn6ka%2Br1va0Xn7nDaU0n4A3CJFuMKreOtHQmD2A6K%2FqGdyUZ672EOcYOmhUXfeMNZhgkhkoIdIthCkGUiV3ZYFZsUj3FzGzfIS7r1lNMc0X29Bd%2F1f9V1bjBc7N1xqIhPjJfoi2zfGpyJBqRZzBIrUd55pzbmhamv0GrUQx187FyYkmSJvCEhi%2FUCRJyVYGItSEwWPgbdbkvOzbBBmofaxOBBDeX1WZqVwpcV9hXX%2BNAd06ZkV39PTUIxgNAptmVacIwoOlOPCY3x%2Fsn%2FDcED7zdA2xR7NGWFzdjCHzR1wrER%2FQCM5%2BZMFf0fZcWP5fHdhRzI8UVPrDWXvBoCFCt4Kyqi6yp02f1LHtqBz5YOzjGJkdwWkcYusPAjNVxOJ8CsbvqbM1c2FQa18OVLJw1bwi8Bw0kYfbjiXOs8e1NiceXiRaNqk2j%2FGNtlWVrVyT7BioU3Zn9spLW3YRlhtjPJ1nzww%2BfWfp1TPk1%2BuMXI0dwNIdyC7IsMKKNHwgNeeNCBRJeMteAso0M9nF97qKF1AZaNMd2aw6HyrpI%2Ft7ncmBRNvzJ1NfL49B1IdGJKGUZa6qMJKT3sMGOqUBDmaQy8hxyTgGb3mKDspf6iyq6S4occLcuhMAW54R%2BYTjjK92%2FXNjkDDWg84SWj0WI2An3nWCwENyqoHmoI5L47Kx0pMavzCfUU9LClaOqVNguLtZ%2FsHnfQKO3n%2FsPhP9e6QR4GCwVeV%2BOjWuJSnSHPeubm%2F0gylVNH3cjYdsndwtPaQHlIfORVJTMxvx%2B9YDII8fPb0p8ls1TfUHX6QEh0p9ddaF&X-Amz-Signature=6d9d4f50277290777d1315b40981db623689f507fdc44521053ff6d5b5846ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AQNW7B%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCfPREazhTvwHHf1N%2B7llGcLjWpsPSq1jStVJ%2FMpMto8wIgRlZ6u8aQByjy0ngnFd4JD4Cubp2GGI7gi576SSvrdPsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHRaQ4oGZtArptyphSrcA0tHfrP0CpIa097NZHXr0CYA6Oru3niiexDdVlCWPA9fWtdDDoR6SW7IFzn6ka%2Br1va0Xn7nDaU0n4A3CJFuMKreOtHQmD2A6K%2FqGdyUZ672EOcYOmhUXfeMNZhgkhkoIdIthCkGUiV3ZYFZsUj3FzGzfIS7r1lNMc0X29Bd%2F1f9V1bjBc7N1xqIhPjJfoi2zfGpyJBqRZzBIrUd55pzbmhamv0GrUQx187FyYkmSJvCEhi%2FUCRJyVYGItSEwWPgbdbkvOzbBBmofaxOBBDeX1WZqVwpcV9hXX%2BNAd06ZkV39PTUIxgNAptmVacIwoOlOPCY3x%2Fsn%2FDcED7zdA2xR7NGWFzdjCHzR1wrER%2FQCM5%2BZMFf0fZcWP5fHdhRzI8UVPrDWXvBoCFCt4Kyqi6yp02f1LHtqBz5YOzjGJkdwWkcYusPAjNVxOJ8CsbvqbM1c2FQa18OVLJw1bwi8Bw0kYfbjiXOs8e1NiceXiRaNqk2j%2FGNtlWVrVyT7BioU3Zn9spLW3YRlhtjPJ1nzww%2BfWfp1TPk1%2BuMXI0dwNIdyC7IsMKKNHwgNeeNCBRJeMteAso0M9nF97qKF1AZaNMd2aw6HyrpI%2Ft7ncmBRNvzJ1NfL49B1IdGJKGUZa6qMJKT3sMGOqUBDmaQy8hxyTgGb3mKDspf6iyq6S4occLcuhMAW54R%2BYTjjK92%2FXNjkDDWg84SWj0WI2An3nWCwENyqoHmoI5L47Kx0pMavzCfUU9LClaOqVNguLtZ%2FsHnfQKO3n%2FsPhP9e6QR4GCwVeV%2BOjWuJSnSHPeubm%2F0gylVNH3cjYdsndwtPaQHlIfORVJTMxvx%2B9YDII8fPb0p8ls1TfUHX6QEh0p9ddaF&X-Amz-Signature=da70e471dbc2352849462c37431903c199f6307364db25726846754319c657b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AQNW7B%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCfPREazhTvwHHf1N%2B7llGcLjWpsPSq1jStVJ%2FMpMto8wIgRlZ6u8aQByjy0ngnFd4JD4Cubp2GGI7gi576SSvrdPsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHRaQ4oGZtArptyphSrcA0tHfrP0CpIa097NZHXr0CYA6Oru3niiexDdVlCWPA9fWtdDDoR6SW7IFzn6ka%2Br1va0Xn7nDaU0n4A3CJFuMKreOtHQmD2A6K%2FqGdyUZ672EOcYOmhUXfeMNZhgkhkoIdIthCkGUiV3ZYFZsUj3FzGzfIS7r1lNMc0X29Bd%2F1f9V1bjBc7N1xqIhPjJfoi2zfGpyJBqRZzBIrUd55pzbmhamv0GrUQx187FyYkmSJvCEhi%2FUCRJyVYGItSEwWPgbdbkvOzbBBmofaxOBBDeX1WZqVwpcV9hXX%2BNAd06ZkV39PTUIxgNAptmVacIwoOlOPCY3x%2Fsn%2FDcED7zdA2xR7NGWFzdjCHzR1wrER%2FQCM5%2BZMFf0fZcWP5fHdhRzI8UVPrDWXvBoCFCt4Kyqi6yp02f1LHtqBz5YOzjGJkdwWkcYusPAjNVxOJ8CsbvqbM1c2FQa18OVLJw1bwi8Bw0kYfbjiXOs8e1NiceXiRaNqk2j%2FGNtlWVrVyT7BioU3Zn9spLW3YRlhtjPJ1nzww%2BfWfp1TPk1%2BuMXI0dwNIdyC7IsMKKNHwgNeeNCBRJeMteAso0M9nF97qKF1AZaNMd2aw6HyrpI%2Ft7ncmBRNvzJ1NfL49B1IdGJKGUZa6qMJKT3sMGOqUBDmaQy8hxyTgGb3mKDspf6iyq6S4occLcuhMAW54R%2BYTjjK92%2FXNjkDDWg84SWj0WI2An3nWCwENyqoHmoI5L47Kx0pMavzCfUU9LClaOqVNguLtZ%2FsHnfQKO3n%2FsPhP9e6QR4GCwVeV%2BOjWuJSnSHPeubm%2F0gylVNH3cjYdsndwtPaQHlIfORVJTMxvx%2B9YDII8fPb0p8ls1TfUHX6QEh0p9ddaF&X-Amz-Signature=eb1b6cceeb32f244cd451e32f3131d85758e253fa314426d28abbc151e4cc868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
