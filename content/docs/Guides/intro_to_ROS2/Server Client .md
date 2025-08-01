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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCDXKI4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDIsGv%2B4IHsQHHeFtS8zsj6gUe203fcza8oL%2FdVXuN3QIgf%2BHqE6FJoRXKE4l6IgN3CYgdqvhJHFoVb%2B9o4ZVbThYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHBc5GAVbS1ZC%2BzCCrcA%2Fa95rHAgKbzpltiwUANyuQLga%2FWPddNu%2FvXcruqn4uNTn2MWbY%2FUXByuu%2BqsJyiRAb8KiAUMUVIbVEAf%2Byip6LEBEzlV5WvyXd3x4a9A0X7dUNY8xmg4dazY7putw9CRLZsyLUV2sTIIvpuP4U4rKKR8UkWk1wcUman3zS6Fb%2BOBfRWT6f1TDCg2GWorDJ8XIugrzHadX6baZEcJ9NQpFwuKUNZnCVPa4E7SOBsIVe9ltVrVsoL3KM6TVaPU2iE%2BMqVB8cP6zN9F5hGFc%2F%2B1Bw%2B5bDPjAa0iT6tr0jAkfhgAlc%2Fj568MIpwsaKHNcPSiimnwqAx0o1Ah%2Ba%2Ft%2B3FixyFVtjxNdLlCe50sp99qHNsO0RJEr0%2B1kmy4yM6TNuw2xM880LnNdQgxUqJbdiFsdfrqSiSIKYSPjYvrVaavI1GWQS55VniuzShasifQE8P87dwh4r%2BWUwhi%2FmgMAKm09IOVpmoKqLZPgHaYBDuxF%2Ft3zpO5RJEvOsjyhcvh4tKl7jxRqPOIZi4dzSz%2BEWq8bhIfbwr0cTyBPU4wi3k3SLdnwzSlSE2fAFLTopcilxHPNjKoC%2FqlTo6u%2B6Qup0fSKwbawamP1mxIReshXkohDo4M%2BVVbNTwmA%2BvY%2BYIMO%2BbscQGOqUB1sci%2F6JOdbewdyE2DqO1Rum90fhvM7YovhErDW0vooFwi7A2j%2FcUsMA1K9tJdHOMtz%2BpIV130RDW7f1C%2B1aEpYLRHu3wh63AjkGGjYwgHOq4UO278H6ZClfRZcAc%2BBljttOcMuS%2FIZRT2nEnux4AZpQ77ZfYrLJwWo%2FiEOuoSNIfiG8N7ffeE1kxw1XSuE080YfD37BLi50QD7zBV7IwIYAWQxX5&X-Amz-Signature=04fa516308dc8dd8484adc43d7cc593a9e16e9762f723d36567c1e24b83ccb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCDXKI4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDIsGv%2B4IHsQHHeFtS8zsj6gUe203fcza8oL%2FdVXuN3QIgf%2BHqE6FJoRXKE4l6IgN3CYgdqvhJHFoVb%2B9o4ZVbThYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHBc5GAVbS1ZC%2BzCCrcA%2Fa95rHAgKbzpltiwUANyuQLga%2FWPddNu%2FvXcruqn4uNTn2MWbY%2FUXByuu%2BqsJyiRAb8KiAUMUVIbVEAf%2Byip6LEBEzlV5WvyXd3x4a9A0X7dUNY8xmg4dazY7putw9CRLZsyLUV2sTIIvpuP4U4rKKR8UkWk1wcUman3zS6Fb%2BOBfRWT6f1TDCg2GWorDJ8XIugrzHadX6baZEcJ9NQpFwuKUNZnCVPa4E7SOBsIVe9ltVrVsoL3KM6TVaPU2iE%2BMqVB8cP6zN9F5hGFc%2F%2B1Bw%2B5bDPjAa0iT6tr0jAkfhgAlc%2Fj568MIpwsaKHNcPSiimnwqAx0o1Ah%2Ba%2Ft%2B3FixyFVtjxNdLlCe50sp99qHNsO0RJEr0%2B1kmy4yM6TNuw2xM880LnNdQgxUqJbdiFsdfrqSiSIKYSPjYvrVaavI1GWQS55VniuzShasifQE8P87dwh4r%2BWUwhi%2FmgMAKm09IOVpmoKqLZPgHaYBDuxF%2Ft3zpO5RJEvOsjyhcvh4tKl7jxRqPOIZi4dzSz%2BEWq8bhIfbwr0cTyBPU4wi3k3SLdnwzSlSE2fAFLTopcilxHPNjKoC%2FqlTo6u%2B6Qup0fSKwbawamP1mxIReshXkohDo4M%2BVVbNTwmA%2BvY%2BYIMO%2BbscQGOqUB1sci%2F6JOdbewdyE2DqO1Rum90fhvM7YovhErDW0vooFwi7A2j%2FcUsMA1K9tJdHOMtz%2BpIV130RDW7f1C%2B1aEpYLRHu3wh63AjkGGjYwgHOq4UO278H6ZClfRZcAc%2BBljttOcMuS%2FIZRT2nEnux4AZpQ77ZfYrLJwWo%2FiEOuoSNIfiG8N7ffeE1kxw1XSuE080YfD37BLi50QD7zBV7IwIYAWQxX5&X-Amz-Signature=5015d2a5da6feeb216ceef70e0c66134a83039a5e237bb8c72bc3a3c5a24c748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCDXKI4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDIsGv%2B4IHsQHHeFtS8zsj6gUe203fcza8oL%2FdVXuN3QIgf%2BHqE6FJoRXKE4l6IgN3CYgdqvhJHFoVb%2B9o4ZVbThYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHBc5GAVbS1ZC%2BzCCrcA%2Fa95rHAgKbzpltiwUANyuQLga%2FWPddNu%2FvXcruqn4uNTn2MWbY%2FUXByuu%2BqsJyiRAb8KiAUMUVIbVEAf%2Byip6LEBEzlV5WvyXd3x4a9A0X7dUNY8xmg4dazY7putw9CRLZsyLUV2sTIIvpuP4U4rKKR8UkWk1wcUman3zS6Fb%2BOBfRWT6f1TDCg2GWorDJ8XIugrzHadX6baZEcJ9NQpFwuKUNZnCVPa4E7SOBsIVe9ltVrVsoL3KM6TVaPU2iE%2BMqVB8cP6zN9F5hGFc%2F%2B1Bw%2B5bDPjAa0iT6tr0jAkfhgAlc%2Fj568MIpwsaKHNcPSiimnwqAx0o1Ah%2Ba%2Ft%2B3FixyFVtjxNdLlCe50sp99qHNsO0RJEr0%2B1kmy4yM6TNuw2xM880LnNdQgxUqJbdiFsdfrqSiSIKYSPjYvrVaavI1GWQS55VniuzShasifQE8P87dwh4r%2BWUwhi%2FmgMAKm09IOVpmoKqLZPgHaYBDuxF%2Ft3zpO5RJEvOsjyhcvh4tKl7jxRqPOIZi4dzSz%2BEWq8bhIfbwr0cTyBPU4wi3k3SLdnwzSlSE2fAFLTopcilxHPNjKoC%2FqlTo6u%2B6Qup0fSKwbawamP1mxIReshXkohDo4M%2BVVbNTwmA%2BvY%2BYIMO%2BbscQGOqUB1sci%2F6JOdbewdyE2DqO1Rum90fhvM7YovhErDW0vooFwi7A2j%2FcUsMA1K9tJdHOMtz%2BpIV130RDW7f1C%2B1aEpYLRHu3wh63AjkGGjYwgHOq4UO278H6ZClfRZcAc%2BBljttOcMuS%2FIZRT2nEnux4AZpQ77ZfYrLJwWo%2FiEOuoSNIfiG8N7ffeE1kxw1XSuE080YfD37BLi50QD7zBV7IwIYAWQxX5&X-Amz-Signature=f38879cc2cd3e7526f8d2c65b01ed2ae67f804fde466826df32e61f88fd55dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCDXKI4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDIsGv%2B4IHsQHHeFtS8zsj6gUe203fcza8oL%2FdVXuN3QIgf%2BHqE6FJoRXKE4l6IgN3CYgdqvhJHFoVb%2B9o4ZVbThYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHBc5GAVbS1ZC%2BzCCrcA%2Fa95rHAgKbzpltiwUANyuQLga%2FWPddNu%2FvXcruqn4uNTn2MWbY%2FUXByuu%2BqsJyiRAb8KiAUMUVIbVEAf%2Byip6LEBEzlV5WvyXd3x4a9A0X7dUNY8xmg4dazY7putw9CRLZsyLUV2sTIIvpuP4U4rKKR8UkWk1wcUman3zS6Fb%2BOBfRWT6f1TDCg2GWorDJ8XIugrzHadX6baZEcJ9NQpFwuKUNZnCVPa4E7SOBsIVe9ltVrVsoL3KM6TVaPU2iE%2BMqVB8cP6zN9F5hGFc%2F%2B1Bw%2B5bDPjAa0iT6tr0jAkfhgAlc%2Fj568MIpwsaKHNcPSiimnwqAx0o1Ah%2Ba%2Ft%2B3FixyFVtjxNdLlCe50sp99qHNsO0RJEr0%2B1kmy4yM6TNuw2xM880LnNdQgxUqJbdiFsdfrqSiSIKYSPjYvrVaavI1GWQS55VniuzShasifQE8P87dwh4r%2BWUwhi%2FmgMAKm09IOVpmoKqLZPgHaYBDuxF%2Ft3zpO5RJEvOsjyhcvh4tKl7jxRqPOIZi4dzSz%2BEWq8bhIfbwr0cTyBPU4wi3k3SLdnwzSlSE2fAFLTopcilxHPNjKoC%2FqlTo6u%2B6Qup0fSKwbawamP1mxIReshXkohDo4M%2BVVbNTwmA%2BvY%2BYIMO%2BbscQGOqUB1sci%2F6JOdbewdyE2DqO1Rum90fhvM7YovhErDW0vooFwi7A2j%2FcUsMA1K9tJdHOMtz%2BpIV130RDW7f1C%2B1aEpYLRHu3wh63AjkGGjYwgHOq4UO278H6ZClfRZcAc%2BBljttOcMuS%2FIZRT2nEnux4AZpQ77ZfYrLJwWo%2FiEOuoSNIfiG8N7ffeE1kxw1XSuE080YfD37BLi50QD7zBV7IwIYAWQxX5&X-Amz-Signature=fe43e4d7821feaeedfc88ab68856c99c89fd887d271e9e22d44e7be855c813a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCDXKI4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDIsGv%2B4IHsQHHeFtS8zsj6gUe203fcza8oL%2FdVXuN3QIgf%2BHqE6FJoRXKE4l6IgN3CYgdqvhJHFoVb%2B9o4ZVbThYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHBc5GAVbS1ZC%2BzCCrcA%2Fa95rHAgKbzpltiwUANyuQLga%2FWPddNu%2FvXcruqn4uNTn2MWbY%2FUXByuu%2BqsJyiRAb8KiAUMUVIbVEAf%2Byip6LEBEzlV5WvyXd3x4a9A0X7dUNY8xmg4dazY7putw9CRLZsyLUV2sTIIvpuP4U4rKKR8UkWk1wcUman3zS6Fb%2BOBfRWT6f1TDCg2GWorDJ8XIugrzHadX6baZEcJ9NQpFwuKUNZnCVPa4E7SOBsIVe9ltVrVsoL3KM6TVaPU2iE%2BMqVB8cP6zN9F5hGFc%2F%2B1Bw%2B5bDPjAa0iT6tr0jAkfhgAlc%2Fj568MIpwsaKHNcPSiimnwqAx0o1Ah%2Ba%2Ft%2B3FixyFVtjxNdLlCe50sp99qHNsO0RJEr0%2B1kmy4yM6TNuw2xM880LnNdQgxUqJbdiFsdfrqSiSIKYSPjYvrVaavI1GWQS55VniuzShasifQE8P87dwh4r%2BWUwhi%2FmgMAKm09IOVpmoKqLZPgHaYBDuxF%2Ft3zpO5RJEvOsjyhcvh4tKl7jxRqPOIZi4dzSz%2BEWq8bhIfbwr0cTyBPU4wi3k3SLdnwzSlSE2fAFLTopcilxHPNjKoC%2FqlTo6u%2B6Qup0fSKwbawamP1mxIReshXkohDo4M%2BVVbNTwmA%2BvY%2BYIMO%2BbscQGOqUB1sci%2F6JOdbewdyE2DqO1Rum90fhvM7YovhErDW0vooFwi7A2j%2FcUsMA1K9tJdHOMtz%2BpIV130RDW7f1C%2B1aEpYLRHu3wh63AjkGGjYwgHOq4UO278H6ZClfRZcAc%2BBljttOcMuS%2FIZRT2nEnux4AZpQ77ZfYrLJwWo%2FiEOuoSNIfiG8N7ffeE1kxw1XSuE080YfD37BLi50QD7zBV7IwIYAWQxX5&X-Amz-Signature=9a2c6aeb6f805661e68c99ce3f6293259a6eff8a39ebe934f1e1deb2ac2db1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
