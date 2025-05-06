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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEAIA3L%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSeTksMpqjnnkuOx9n3gFqDLSxVnxsiiRk%2FgiEwvNQJQIgNxo9aSaHbSZwM0KMcEfKbX%2BuCqe0spWgN3pc67U%2FBPUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGeeo7IgnnlYJ20AECrcA77DW1oUi77RP80kKgZNYU7SRzN1gVE3TWGpfFsPW7FYeKGCJXKYTZnG6meHQAVoJ53fp3%2FIV7%2FHPMqXyxG5Uu0IopJPlsftNUbI0FbgyLsLRQj8G31h%2BQ5lcsnUdwWgbhCRF0UapN50uWB%2B1PeOgjND8K%2BE9D4fDClb6ZRBWS6goTjVP3Z4NKeSlnQplmxEcTuMc7A12xjWLr68ysYLN4sNq44Q9pJ7X3chqNRqNaKCR2Eo4KJH41k2ZwOJXjpGFy%2BAtLoI7pprgh3nJp1OPd4oOE10eRm1158aUz0dO4u7OFwOqgN%2B%2BBsoYovhG4nUCR8sypCtsjdNGBurFo9cJ8uLAw44IOKE7lTv%2FxPVoUX6xV3ZqxEM7ipmvQDFjW%2BI7%2FBce9tM3TU8kTUCD7SBBJHSBK3jAi63OJjFHO6ZomM9KcjamywDE8dvUUpDPXpcYn30nBRPEeWhvHznhP%2F4YffHN1kydVmjTs52bT4hZYp9qPUKdpxVlti6hvNRZ%2FaM3Jsjsdh2bH%2BSB1s%2BzeC4vq%2BdBWpnlcXJaAM1ql8dFje4woPRXwAG%2FtZH2DhgvFW96jT20%2BwqUQOiime1I5ZEHRt4t8aLC9%2FDzGqV2cbAnCUEBnb0JaK5T2KeYd1MMMDK5cAGOqUBzRBdzVxkxR4ZxwFw1z7vS0aPoFwNUZrbp2%2FhbUu0dsrTO3JIdBI%2FHHMiiHGonMyVcY8Z43795LDl%2B7XBWHCsICrz%2FUjNJ7%2BUh%2F8duMeU4Xv3SmAUGKDEY6737I%2FkMszTz0%2Bmk%2Fj4UC87owhlXcYIfCegKbaxeYLRzyxEuqYOEw0dThGpF38N23%2Bj8S29BM%2F0NvGS2rNwv8yPrYMv8x3HXsyfCSwN&X-Amz-Signature=603959573dbd19c904b05fa7139aff63c3a463946b3778b0fd263356ecac7c51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEAIA3L%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSeTksMpqjnnkuOx9n3gFqDLSxVnxsiiRk%2FgiEwvNQJQIgNxo9aSaHbSZwM0KMcEfKbX%2BuCqe0spWgN3pc67U%2FBPUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGeeo7IgnnlYJ20AECrcA77DW1oUi77RP80kKgZNYU7SRzN1gVE3TWGpfFsPW7FYeKGCJXKYTZnG6meHQAVoJ53fp3%2FIV7%2FHPMqXyxG5Uu0IopJPlsftNUbI0FbgyLsLRQj8G31h%2BQ5lcsnUdwWgbhCRF0UapN50uWB%2B1PeOgjND8K%2BE9D4fDClb6ZRBWS6goTjVP3Z4NKeSlnQplmxEcTuMc7A12xjWLr68ysYLN4sNq44Q9pJ7X3chqNRqNaKCR2Eo4KJH41k2ZwOJXjpGFy%2BAtLoI7pprgh3nJp1OPd4oOE10eRm1158aUz0dO4u7OFwOqgN%2B%2BBsoYovhG4nUCR8sypCtsjdNGBurFo9cJ8uLAw44IOKE7lTv%2FxPVoUX6xV3ZqxEM7ipmvQDFjW%2BI7%2FBce9tM3TU8kTUCD7SBBJHSBK3jAi63OJjFHO6ZomM9KcjamywDE8dvUUpDPXpcYn30nBRPEeWhvHznhP%2F4YffHN1kydVmjTs52bT4hZYp9qPUKdpxVlti6hvNRZ%2FaM3Jsjsdh2bH%2BSB1s%2BzeC4vq%2BdBWpnlcXJaAM1ql8dFje4woPRXwAG%2FtZH2DhgvFW96jT20%2BwqUQOiime1I5ZEHRt4t8aLC9%2FDzGqV2cbAnCUEBnb0JaK5T2KeYd1MMMDK5cAGOqUBzRBdzVxkxR4ZxwFw1z7vS0aPoFwNUZrbp2%2FhbUu0dsrTO3JIdBI%2FHHMiiHGonMyVcY8Z43795LDl%2B7XBWHCsICrz%2FUjNJ7%2BUh%2F8duMeU4Xv3SmAUGKDEY6737I%2FkMszTz0%2Bmk%2Fj4UC87owhlXcYIfCegKbaxeYLRzyxEuqYOEw0dThGpF38N23%2Bj8S29BM%2F0NvGS2rNwv8yPrYMv8x3HXsyfCSwN&X-Amz-Signature=966b8898b56d73da2df23bc475fe08e769f4c3b379992c54d7ca86029f8688c1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEAIA3L%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSeTksMpqjnnkuOx9n3gFqDLSxVnxsiiRk%2FgiEwvNQJQIgNxo9aSaHbSZwM0KMcEfKbX%2BuCqe0spWgN3pc67U%2FBPUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGeeo7IgnnlYJ20AECrcA77DW1oUi77RP80kKgZNYU7SRzN1gVE3TWGpfFsPW7FYeKGCJXKYTZnG6meHQAVoJ53fp3%2FIV7%2FHPMqXyxG5Uu0IopJPlsftNUbI0FbgyLsLRQj8G31h%2BQ5lcsnUdwWgbhCRF0UapN50uWB%2B1PeOgjND8K%2BE9D4fDClb6ZRBWS6goTjVP3Z4NKeSlnQplmxEcTuMc7A12xjWLr68ysYLN4sNq44Q9pJ7X3chqNRqNaKCR2Eo4KJH41k2ZwOJXjpGFy%2BAtLoI7pprgh3nJp1OPd4oOE10eRm1158aUz0dO4u7OFwOqgN%2B%2BBsoYovhG4nUCR8sypCtsjdNGBurFo9cJ8uLAw44IOKE7lTv%2FxPVoUX6xV3ZqxEM7ipmvQDFjW%2BI7%2FBce9tM3TU8kTUCD7SBBJHSBK3jAi63OJjFHO6ZomM9KcjamywDE8dvUUpDPXpcYn30nBRPEeWhvHznhP%2F4YffHN1kydVmjTs52bT4hZYp9qPUKdpxVlti6hvNRZ%2FaM3Jsjsdh2bH%2BSB1s%2BzeC4vq%2BdBWpnlcXJaAM1ql8dFje4woPRXwAG%2FtZH2DhgvFW96jT20%2BwqUQOiime1I5ZEHRt4t8aLC9%2FDzGqV2cbAnCUEBnb0JaK5T2KeYd1MMMDK5cAGOqUBzRBdzVxkxR4ZxwFw1z7vS0aPoFwNUZrbp2%2FhbUu0dsrTO3JIdBI%2FHHMiiHGonMyVcY8Z43795LDl%2B7XBWHCsICrz%2FUjNJ7%2BUh%2F8duMeU4Xv3SmAUGKDEY6737I%2FkMszTz0%2Bmk%2Fj4UC87owhlXcYIfCegKbaxeYLRzyxEuqYOEw0dThGpF38N23%2Bj8S29BM%2F0NvGS2rNwv8yPrYMv8x3HXsyfCSwN&X-Amz-Signature=cc7597a1a0541d2ec3ff8912e743902b3f44bcb79f1cdfae00065794819cf51a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEAIA3L%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSeTksMpqjnnkuOx9n3gFqDLSxVnxsiiRk%2FgiEwvNQJQIgNxo9aSaHbSZwM0KMcEfKbX%2BuCqe0spWgN3pc67U%2FBPUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGeeo7IgnnlYJ20AECrcA77DW1oUi77RP80kKgZNYU7SRzN1gVE3TWGpfFsPW7FYeKGCJXKYTZnG6meHQAVoJ53fp3%2FIV7%2FHPMqXyxG5Uu0IopJPlsftNUbI0FbgyLsLRQj8G31h%2BQ5lcsnUdwWgbhCRF0UapN50uWB%2B1PeOgjND8K%2BE9D4fDClb6ZRBWS6goTjVP3Z4NKeSlnQplmxEcTuMc7A12xjWLr68ysYLN4sNq44Q9pJ7X3chqNRqNaKCR2Eo4KJH41k2ZwOJXjpGFy%2BAtLoI7pprgh3nJp1OPd4oOE10eRm1158aUz0dO4u7OFwOqgN%2B%2BBsoYovhG4nUCR8sypCtsjdNGBurFo9cJ8uLAw44IOKE7lTv%2FxPVoUX6xV3ZqxEM7ipmvQDFjW%2BI7%2FBce9tM3TU8kTUCD7SBBJHSBK3jAi63OJjFHO6ZomM9KcjamywDE8dvUUpDPXpcYn30nBRPEeWhvHznhP%2F4YffHN1kydVmjTs52bT4hZYp9qPUKdpxVlti6hvNRZ%2FaM3Jsjsdh2bH%2BSB1s%2BzeC4vq%2BdBWpnlcXJaAM1ql8dFje4woPRXwAG%2FtZH2DhgvFW96jT20%2BwqUQOiime1I5ZEHRt4t8aLC9%2FDzGqV2cbAnCUEBnb0JaK5T2KeYd1MMMDK5cAGOqUBzRBdzVxkxR4ZxwFw1z7vS0aPoFwNUZrbp2%2FhbUu0dsrTO3JIdBI%2FHHMiiHGonMyVcY8Z43795LDl%2B7XBWHCsICrz%2FUjNJ7%2BUh%2F8duMeU4Xv3SmAUGKDEY6737I%2FkMszTz0%2Bmk%2Fj4UC87owhlXcYIfCegKbaxeYLRzyxEuqYOEw0dThGpF38N23%2Bj8S29BM%2F0NvGS2rNwv8yPrYMv8x3HXsyfCSwN&X-Amz-Signature=459a940864d706ba76765ef5dd22fa3c3c0f88a31b33e5d7ae337069bb1257b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEAIA3L%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSeTksMpqjnnkuOx9n3gFqDLSxVnxsiiRk%2FgiEwvNQJQIgNxo9aSaHbSZwM0KMcEfKbX%2BuCqe0spWgN3pc67U%2FBPUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGeeo7IgnnlYJ20AECrcA77DW1oUi77RP80kKgZNYU7SRzN1gVE3TWGpfFsPW7FYeKGCJXKYTZnG6meHQAVoJ53fp3%2FIV7%2FHPMqXyxG5Uu0IopJPlsftNUbI0FbgyLsLRQj8G31h%2BQ5lcsnUdwWgbhCRF0UapN50uWB%2B1PeOgjND8K%2BE9D4fDClb6ZRBWS6goTjVP3Z4NKeSlnQplmxEcTuMc7A12xjWLr68ysYLN4sNq44Q9pJ7X3chqNRqNaKCR2Eo4KJH41k2ZwOJXjpGFy%2BAtLoI7pprgh3nJp1OPd4oOE10eRm1158aUz0dO4u7OFwOqgN%2B%2BBsoYovhG4nUCR8sypCtsjdNGBurFo9cJ8uLAw44IOKE7lTv%2FxPVoUX6xV3ZqxEM7ipmvQDFjW%2BI7%2FBce9tM3TU8kTUCD7SBBJHSBK3jAi63OJjFHO6ZomM9KcjamywDE8dvUUpDPXpcYn30nBRPEeWhvHznhP%2F4YffHN1kydVmjTs52bT4hZYp9qPUKdpxVlti6hvNRZ%2FaM3Jsjsdh2bH%2BSB1s%2BzeC4vq%2BdBWpnlcXJaAM1ql8dFje4woPRXwAG%2FtZH2DhgvFW96jT20%2BwqUQOiime1I5ZEHRt4t8aLC9%2FDzGqV2cbAnCUEBnb0JaK5T2KeYd1MMMDK5cAGOqUBzRBdzVxkxR4ZxwFw1z7vS0aPoFwNUZrbp2%2FhbUu0dsrTO3JIdBI%2FHHMiiHGonMyVcY8Z43795LDl%2B7XBWHCsICrz%2FUjNJ7%2BUh%2F8duMeU4Xv3SmAUGKDEY6737I%2FkMszTz0%2Bmk%2Fj4UC87owhlXcYIfCegKbaxeYLRzyxEuqYOEw0dThGpF38N23%2Bj8S29BM%2F0NvGS2rNwv8yPrYMv8x3HXsyfCSwN&X-Amz-Signature=5ee66bb8ebda2f77898ea24cfb434b686b3a0b3b465828038806ddafde0a1c11&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
