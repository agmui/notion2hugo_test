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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3FQ5Y6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFbOKGn%2B%2FgfmOM3CMkFpd6d4Y5S1oYrt72vfzA1EPDcKAiEA5FzJ0LGQObzHGQ3lvcW%2Fc3sn7kIpZUHaelVqkewBLdoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDB6%2BDYvFPLCngFZzVSrcA5Rbl%2FN%2FUnfqUag%2FxStzaQrGZRsKwC1fbnKDAYdYs%2FAFagU2XlUG7X8KOPSaLTQmVn%2F9kh%2FVKgXsW22W53bYor9x3VWJ6cLSm344t9yIlXs0tywwtg%2BgO8qlG72H0j%2B44pkjhpEUHWrwe4UXh5urUHrBE1VILaQ6%2FCIQgN639vwUfXs3DpaaZvp%2FyTOEfASEKWm8GvwE2gGSiYNvlEkRqIkb9STCIrS1dWLy%2BieNuH40ZUADFZ0Y25jUd8OgsfIv66pZ2HLBpheJrBfFrBvgdyALVukDmNY9KCGGb51KrsGwfigbEdZLmGi0QWFqw0gDnekzKO9t1Ssa7sDRV5P%2Ba0siJu4gtsUlZ6iD6NjttNv52p4H%2B6ext4lwU%2Bq%2BEKSK3%2BIeMnHriVDkzUuT0%2BNrIbwmInUF5CYpvKSU5SRMygPOTT6Q9kbstbGsPgy%2FbsXT7GZmzdxhIhG68wFIEhj1XGpcE%2FCeSLKLYbvqmxgOTuqRQSG3cYue7WvaLGsvDNKWYqpze36ZBgvb9uCihA6nDpNWbhhdTsbAY5YmR7TuJkZdW7qfpWwhiTQrq2irRQY%2BgzXifGGKbRNYWpXyEPLKlxNluJ3PsHPdeWvKeVEmY5pIgkni1OpXmYVLy9dIMJ6ez8EGOqUBAwqonDN6OxVD5oyhD50IcEzANIHjSkE9rTnl3WxD7jVSmf4tQv3khEPF2xYE4mq%2FVrguOaaxf77D0MECEdTDfubfIneOXw2CpY%2Fv6QO%2FiTR5o1b5GJUl8vUOHwHCF795ql2rZw46SPR5FlSQ8kbiSnNr3kSyAMCflnTk3dBKer46BDUlYJArOJ49C9X5ERvW4FOJen2dT4yl2CSvQbpUpgrS2kQC&X-Amz-Signature=d2c32a95bd5e212996c94e15120524e5c7c64726d681455c254d65751f35671a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3FQ5Y6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFbOKGn%2B%2FgfmOM3CMkFpd6d4Y5S1oYrt72vfzA1EPDcKAiEA5FzJ0LGQObzHGQ3lvcW%2Fc3sn7kIpZUHaelVqkewBLdoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDB6%2BDYvFPLCngFZzVSrcA5Rbl%2FN%2FUnfqUag%2FxStzaQrGZRsKwC1fbnKDAYdYs%2FAFagU2XlUG7X8KOPSaLTQmVn%2F9kh%2FVKgXsW22W53bYor9x3VWJ6cLSm344t9yIlXs0tywwtg%2BgO8qlG72H0j%2B44pkjhpEUHWrwe4UXh5urUHrBE1VILaQ6%2FCIQgN639vwUfXs3DpaaZvp%2FyTOEfASEKWm8GvwE2gGSiYNvlEkRqIkb9STCIrS1dWLy%2BieNuH40ZUADFZ0Y25jUd8OgsfIv66pZ2HLBpheJrBfFrBvgdyALVukDmNY9KCGGb51KrsGwfigbEdZLmGi0QWFqw0gDnekzKO9t1Ssa7sDRV5P%2Ba0siJu4gtsUlZ6iD6NjttNv52p4H%2B6ext4lwU%2Bq%2BEKSK3%2BIeMnHriVDkzUuT0%2BNrIbwmInUF5CYpvKSU5SRMygPOTT6Q9kbstbGsPgy%2FbsXT7GZmzdxhIhG68wFIEhj1XGpcE%2FCeSLKLYbvqmxgOTuqRQSG3cYue7WvaLGsvDNKWYqpze36ZBgvb9uCihA6nDpNWbhhdTsbAY5YmR7TuJkZdW7qfpWwhiTQrq2irRQY%2BgzXifGGKbRNYWpXyEPLKlxNluJ3PsHPdeWvKeVEmY5pIgkni1OpXmYVLy9dIMJ6ez8EGOqUBAwqonDN6OxVD5oyhD50IcEzANIHjSkE9rTnl3WxD7jVSmf4tQv3khEPF2xYE4mq%2FVrguOaaxf77D0MECEdTDfubfIneOXw2CpY%2Fv6QO%2FiTR5o1b5GJUl8vUOHwHCF795ql2rZw46SPR5FlSQ8kbiSnNr3kSyAMCflnTk3dBKer46BDUlYJArOJ49C9X5ERvW4FOJen2dT4yl2CSvQbpUpgrS2kQC&X-Amz-Signature=320a047129c29b4b2c675d304ac0676b683b0758c1a8030eb6e70496bfd1464b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3FQ5Y6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFbOKGn%2B%2FgfmOM3CMkFpd6d4Y5S1oYrt72vfzA1EPDcKAiEA5FzJ0LGQObzHGQ3lvcW%2Fc3sn7kIpZUHaelVqkewBLdoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDB6%2BDYvFPLCngFZzVSrcA5Rbl%2FN%2FUnfqUag%2FxStzaQrGZRsKwC1fbnKDAYdYs%2FAFagU2XlUG7X8KOPSaLTQmVn%2F9kh%2FVKgXsW22W53bYor9x3VWJ6cLSm344t9yIlXs0tywwtg%2BgO8qlG72H0j%2B44pkjhpEUHWrwe4UXh5urUHrBE1VILaQ6%2FCIQgN639vwUfXs3DpaaZvp%2FyTOEfASEKWm8GvwE2gGSiYNvlEkRqIkb9STCIrS1dWLy%2BieNuH40ZUADFZ0Y25jUd8OgsfIv66pZ2HLBpheJrBfFrBvgdyALVukDmNY9KCGGb51KrsGwfigbEdZLmGi0QWFqw0gDnekzKO9t1Ssa7sDRV5P%2Ba0siJu4gtsUlZ6iD6NjttNv52p4H%2B6ext4lwU%2Bq%2BEKSK3%2BIeMnHriVDkzUuT0%2BNrIbwmInUF5CYpvKSU5SRMygPOTT6Q9kbstbGsPgy%2FbsXT7GZmzdxhIhG68wFIEhj1XGpcE%2FCeSLKLYbvqmxgOTuqRQSG3cYue7WvaLGsvDNKWYqpze36ZBgvb9uCihA6nDpNWbhhdTsbAY5YmR7TuJkZdW7qfpWwhiTQrq2irRQY%2BgzXifGGKbRNYWpXyEPLKlxNluJ3PsHPdeWvKeVEmY5pIgkni1OpXmYVLy9dIMJ6ez8EGOqUBAwqonDN6OxVD5oyhD50IcEzANIHjSkE9rTnl3WxD7jVSmf4tQv3khEPF2xYE4mq%2FVrguOaaxf77D0MECEdTDfubfIneOXw2CpY%2Fv6QO%2FiTR5o1b5GJUl8vUOHwHCF795ql2rZw46SPR5FlSQ8kbiSnNr3kSyAMCflnTk3dBKer46BDUlYJArOJ49C9X5ERvW4FOJen2dT4yl2CSvQbpUpgrS2kQC&X-Amz-Signature=57ef8b0f7532ced31e9f2ded95b0774e7e209c316720c320ed2689137073bcd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3FQ5Y6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFbOKGn%2B%2FgfmOM3CMkFpd6d4Y5S1oYrt72vfzA1EPDcKAiEA5FzJ0LGQObzHGQ3lvcW%2Fc3sn7kIpZUHaelVqkewBLdoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDB6%2BDYvFPLCngFZzVSrcA5Rbl%2FN%2FUnfqUag%2FxStzaQrGZRsKwC1fbnKDAYdYs%2FAFagU2XlUG7X8KOPSaLTQmVn%2F9kh%2FVKgXsW22W53bYor9x3VWJ6cLSm344t9yIlXs0tywwtg%2BgO8qlG72H0j%2B44pkjhpEUHWrwe4UXh5urUHrBE1VILaQ6%2FCIQgN639vwUfXs3DpaaZvp%2FyTOEfASEKWm8GvwE2gGSiYNvlEkRqIkb9STCIrS1dWLy%2BieNuH40ZUADFZ0Y25jUd8OgsfIv66pZ2HLBpheJrBfFrBvgdyALVukDmNY9KCGGb51KrsGwfigbEdZLmGi0QWFqw0gDnekzKO9t1Ssa7sDRV5P%2Ba0siJu4gtsUlZ6iD6NjttNv52p4H%2B6ext4lwU%2Bq%2BEKSK3%2BIeMnHriVDkzUuT0%2BNrIbwmInUF5CYpvKSU5SRMygPOTT6Q9kbstbGsPgy%2FbsXT7GZmzdxhIhG68wFIEhj1XGpcE%2FCeSLKLYbvqmxgOTuqRQSG3cYue7WvaLGsvDNKWYqpze36ZBgvb9uCihA6nDpNWbhhdTsbAY5YmR7TuJkZdW7qfpWwhiTQrq2irRQY%2BgzXifGGKbRNYWpXyEPLKlxNluJ3PsHPdeWvKeVEmY5pIgkni1OpXmYVLy9dIMJ6ez8EGOqUBAwqonDN6OxVD5oyhD50IcEzANIHjSkE9rTnl3WxD7jVSmf4tQv3khEPF2xYE4mq%2FVrguOaaxf77D0MECEdTDfubfIneOXw2CpY%2Fv6QO%2FiTR5o1b5GJUl8vUOHwHCF795ql2rZw46SPR5FlSQ8kbiSnNr3kSyAMCflnTk3dBKer46BDUlYJArOJ49C9X5ERvW4FOJen2dT4yl2CSvQbpUpgrS2kQC&X-Amz-Signature=ebfde0e1d3eedcf34d6bb412d1c08deea5e64f70bc32dab10278e3f87da9fca6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3FQ5Y6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFbOKGn%2B%2FgfmOM3CMkFpd6d4Y5S1oYrt72vfzA1EPDcKAiEA5FzJ0LGQObzHGQ3lvcW%2Fc3sn7kIpZUHaelVqkewBLdoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDB6%2BDYvFPLCngFZzVSrcA5Rbl%2FN%2FUnfqUag%2FxStzaQrGZRsKwC1fbnKDAYdYs%2FAFagU2XlUG7X8KOPSaLTQmVn%2F9kh%2FVKgXsW22W53bYor9x3VWJ6cLSm344t9yIlXs0tywwtg%2BgO8qlG72H0j%2B44pkjhpEUHWrwe4UXh5urUHrBE1VILaQ6%2FCIQgN639vwUfXs3DpaaZvp%2FyTOEfASEKWm8GvwE2gGSiYNvlEkRqIkb9STCIrS1dWLy%2BieNuH40ZUADFZ0Y25jUd8OgsfIv66pZ2HLBpheJrBfFrBvgdyALVukDmNY9KCGGb51KrsGwfigbEdZLmGi0QWFqw0gDnekzKO9t1Ssa7sDRV5P%2Ba0siJu4gtsUlZ6iD6NjttNv52p4H%2B6ext4lwU%2Bq%2BEKSK3%2BIeMnHriVDkzUuT0%2BNrIbwmInUF5CYpvKSU5SRMygPOTT6Q9kbstbGsPgy%2FbsXT7GZmzdxhIhG68wFIEhj1XGpcE%2FCeSLKLYbvqmxgOTuqRQSG3cYue7WvaLGsvDNKWYqpze36ZBgvb9uCihA6nDpNWbhhdTsbAY5YmR7TuJkZdW7qfpWwhiTQrq2irRQY%2BgzXifGGKbRNYWpXyEPLKlxNluJ3PsHPdeWvKeVEmY5pIgkni1OpXmYVLy9dIMJ6ez8EGOqUBAwqonDN6OxVD5oyhD50IcEzANIHjSkE9rTnl3WxD7jVSmf4tQv3khEPF2xYE4mq%2FVrguOaaxf77D0MECEdTDfubfIneOXw2CpY%2Fv6QO%2FiTR5o1b5GJUl8vUOHwHCF795ql2rZw46SPR5FlSQ8kbiSnNr3kSyAMCflnTk3dBKer46BDUlYJArOJ49C9X5ERvW4FOJen2dT4yl2CSvQbpUpgrS2kQC&X-Amz-Signature=da68e5a7603988e0a05fa5f1a361a168a6f3ed666e602ae4396114400daa54e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
