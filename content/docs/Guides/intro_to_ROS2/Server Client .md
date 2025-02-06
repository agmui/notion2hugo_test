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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWTSEE4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDZkFfRKje6MngW%2Fzf3X8YzHjjrB63%2B0VxZCXdXKLKxoQIgUx%2F5Y3gWQFzcnKuKRvwvrDq%2FxFfrThlncrF6yUMlKO0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDB4RoCyO%2BqmI2QFqbSrcA3w1TyfF5B1gdwGyntQ5fUQ%2Flwf8y%2Fee%2BoydiBjhuxX%2Fob7UPnDzYZbUys8SxaJ%2BFvE5qAa6JSOAwenPGKYk7LVzn%2BbNYB8GnUlelW1fuW2XvDSsZAxgSDk27rzO3vCievrF42R4Sl9UwEhx0fQp6jPRa0uybP1jSXSO8Z5Ku4h%2BF%2FOwtGnl6H2BRFqXgQtuGA0EfQL%2BxzM0FTD5idHNl%2F3SWNZbVX88cPPhiKYX025sB2BVd8cH8yiJVFuiX9weXCvEc55lnwH%2BQuMKwj59Vfh3cWMXzplszl0pB1adYlpd3%2FkL2zFdM53ubOUTZNexNV2Sl%2F2ssz5jA43P%2BwBL4axATppnB%2FoKNR2qDmudgvESBMzIXwb8oewDCRP7Ub%2B%2FZTPI%2B4L3CkTes7q8cRkNhXCYgZL%2BFPGQ0n8f2uH3xY6cEv1HHu%2FvD7ZyhdP5JnlxLvadmUJ1dNj2Nf93tjrpDBYberLloTZNQmTh4CMR4lHS76p1NVx%2Bs8jJg6AaTt0lchNDNqc8gNxDeT9tj17MExEyLJ58CB3KEhFC3L0cWOx5F2U%2ByfIhQRgr9m6Dd%2Be4PKIrsZq87OxWZPaxiBXRDjYV8W7sX0jmdLChzZBT8aul0SWJF7tSuQk0kfioMKrtj70GOqUBFYmTTaTydV98qp5uFp%2Fmm%2BP7eIFUA%2FEqnklmn6Rs7bcF%2BLqY1nju0AAwai7PESvyv6ik8B18I7OA6mi2ImqSvqDmlBQCKJeQw5DlJwVza4o3r%2B7HNKm%2FBOM%2FnNjlkLbrSHxo%2FUPcOWaRSAGh%2FJV1hfMX9JomdNGPO1Dx2scxfNN7Tzna6iHnxm3I4L7yYHR0l9DDo2c68AI0Hx5BqKIuyQHs8iD6&X-Amz-Signature=129c290a799d6b05f7ffc409b0357d3d9f11cc1f5f56608c63a7dd916b3b0606&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWTSEE4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDZkFfRKje6MngW%2Fzf3X8YzHjjrB63%2B0VxZCXdXKLKxoQIgUx%2F5Y3gWQFzcnKuKRvwvrDq%2FxFfrThlncrF6yUMlKO0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDB4RoCyO%2BqmI2QFqbSrcA3w1TyfF5B1gdwGyntQ5fUQ%2Flwf8y%2Fee%2BoydiBjhuxX%2Fob7UPnDzYZbUys8SxaJ%2BFvE5qAa6JSOAwenPGKYk7LVzn%2BbNYB8GnUlelW1fuW2XvDSsZAxgSDk27rzO3vCievrF42R4Sl9UwEhx0fQp6jPRa0uybP1jSXSO8Z5Ku4h%2BF%2FOwtGnl6H2BRFqXgQtuGA0EfQL%2BxzM0FTD5idHNl%2F3SWNZbVX88cPPhiKYX025sB2BVd8cH8yiJVFuiX9weXCvEc55lnwH%2BQuMKwj59Vfh3cWMXzplszl0pB1adYlpd3%2FkL2zFdM53ubOUTZNexNV2Sl%2F2ssz5jA43P%2BwBL4axATppnB%2FoKNR2qDmudgvESBMzIXwb8oewDCRP7Ub%2B%2FZTPI%2B4L3CkTes7q8cRkNhXCYgZL%2BFPGQ0n8f2uH3xY6cEv1HHu%2FvD7ZyhdP5JnlxLvadmUJ1dNj2Nf93tjrpDBYberLloTZNQmTh4CMR4lHS76p1NVx%2Bs8jJg6AaTt0lchNDNqc8gNxDeT9tj17MExEyLJ58CB3KEhFC3L0cWOx5F2U%2ByfIhQRgr9m6Dd%2Be4PKIrsZq87OxWZPaxiBXRDjYV8W7sX0jmdLChzZBT8aul0SWJF7tSuQk0kfioMKrtj70GOqUBFYmTTaTydV98qp5uFp%2Fmm%2BP7eIFUA%2FEqnklmn6Rs7bcF%2BLqY1nju0AAwai7PESvyv6ik8B18I7OA6mi2ImqSvqDmlBQCKJeQw5DlJwVza4o3r%2B7HNKm%2FBOM%2FnNjlkLbrSHxo%2FUPcOWaRSAGh%2FJV1hfMX9JomdNGPO1Dx2scxfNN7Tzna6iHnxm3I4L7yYHR0l9DDo2c68AI0Hx5BqKIuyQHs8iD6&X-Amz-Signature=d21240d649fecac290436111774c841cb0dafee5659424bb20308f2cf48ef9ef&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWTSEE4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDZkFfRKje6MngW%2Fzf3X8YzHjjrB63%2B0VxZCXdXKLKxoQIgUx%2F5Y3gWQFzcnKuKRvwvrDq%2FxFfrThlncrF6yUMlKO0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDB4RoCyO%2BqmI2QFqbSrcA3w1TyfF5B1gdwGyntQ5fUQ%2Flwf8y%2Fee%2BoydiBjhuxX%2Fob7UPnDzYZbUys8SxaJ%2BFvE5qAa6JSOAwenPGKYk7LVzn%2BbNYB8GnUlelW1fuW2XvDSsZAxgSDk27rzO3vCievrF42R4Sl9UwEhx0fQp6jPRa0uybP1jSXSO8Z5Ku4h%2BF%2FOwtGnl6H2BRFqXgQtuGA0EfQL%2BxzM0FTD5idHNl%2F3SWNZbVX88cPPhiKYX025sB2BVd8cH8yiJVFuiX9weXCvEc55lnwH%2BQuMKwj59Vfh3cWMXzplszl0pB1adYlpd3%2FkL2zFdM53ubOUTZNexNV2Sl%2F2ssz5jA43P%2BwBL4axATppnB%2FoKNR2qDmudgvESBMzIXwb8oewDCRP7Ub%2B%2FZTPI%2B4L3CkTes7q8cRkNhXCYgZL%2BFPGQ0n8f2uH3xY6cEv1HHu%2FvD7ZyhdP5JnlxLvadmUJ1dNj2Nf93tjrpDBYberLloTZNQmTh4CMR4lHS76p1NVx%2Bs8jJg6AaTt0lchNDNqc8gNxDeT9tj17MExEyLJ58CB3KEhFC3L0cWOx5F2U%2ByfIhQRgr9m6Dd%2Be4PKIrsZq87OxWZPaxiBXRDjYV8W7sX0jmdLChzZBT8aul0SWJF7tSuQk0kfioMKrtj70GOqUBFYmTTaTydV98qp5uFp%2Fmm%2BP7eIFUA%2FEqnklmn6Rs7bcF%2BLqY1nju0AAwai7PESvyv6ik8B18I7OA6mi2ImqSvqDmlBQCKJeQw5DlJwVza4o3r%2B7HNKm%2FBOM%2FnNjlkLbrSHxo%2FUPcOWaRSAGh%2FJV1hfMX9JomdNGPO1Dx2scxfNN7Tzna6iHnxm3I4L7yYHR0l9DDo2c68AI0Hx5BqKIuyQHs8iD6&X-Amz-Signature=7f92059d29b4b8ee6abcc6c77180b7f5133e831cce27e5364917022718c0f0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWTSEE4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDZkFfRKje6MngW%2Fzf3X8YzHjjrB63%2B0VxZCXdXKLKxoQIgUx%2F5Y3gWQFzcnKuKRvwvrDq%2FxFfrThlncrF6yUMlKO0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDB4RoCyO%2BqmI2QFqbSrcA3w1TyfF5B1gdwGyntQ5fUQ%2Flwf8y%2Fee%2BoydiBjhuxX%2Fob7UPnDzYZbUys8SxaJ%2BFvE5qAa6JSOAwenPGKYk7LVzn%2BbNYB8GnUlelW1fuW2XvDSsZAxgSDk27rzO3vCievrF42R4Sl9UwEhx0fQp6jPRa0uybP1jSXSO8Z5Ku4h%2BF%2FOwtGnl6H2BRFqXgQtuGA0EfQL%2BxzM0FTD5idHNl%2F3SWNZbVX88cPPhiKYX025sB2BVd8cH8yiJVFuiX9weXCvEc55lnwH%2BQuMKwj59Vfh3cWMXzplszl0pB1adYlpd3%2FkL2zFdM53ubOUTZNexNV2Sl%2F2ssz5jA43P%2BwBL4axATppnB%2FoKNR2qDmudgvESBMzIXwb8oewDCRP7Ub%2B%2FZTPI%2B4L3CkTes7q8cRkNhXCYgZL%2BFPGQ0n8f2uH3xY6cEv1HHu%2FvD7ZyhdP5JnlxLvadmUJ1dNj2Nf93tjrpDBYberLloTZNQmTh4CMR4lHS76p1NVx%2Bs8jJg6AaTt0lchNDNqc8gNxDeT9tj17MExEyLJ58CB3KEhFC3L0cWOx5F2U%2ByfIhQRgr9m6Dd%2Be4PKIrsZq87OxWZPaxiBXRDjYV8W7sX0jmdLChzZBT8aul0SWJF7tSuQk0kfioMKrtj70GOqUBFYmTTaTydV98qp5uFp%2Fmm%2BP7eIFUA%2FEqnklmn6Rs7bcF%2BLqY1nju0AAwai7PESvyv6ik8B18I7OA6mi2ImqSvqDmlBQCKJeQw5DlJwVza4o3r%2B7HNKm%2FBOM%2FnNjlkLbrSHxo%2FUPcOWaRSAGh%2FJV1hfMX9JomdNGPO1Dx2scxfNN7Tzna6iHnxm3I4L7yYHR0l9DDo2c68AI0Hx5BqKIuyQHs8iD6&X-Amz-Signature=ef1e9e3db86537d5072d0bec3698ba262dd348cd8133d95ea407a2d7d4afab2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWTSEE4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDZkFfRKje6MngW%2Fzf3X8YzHjjrB63%2B0VxZCXdXKLKxoQIgUx%2F5Y3gWQFzcnKuKRvwvrDq%2FxFfrThlncrF6yUMlKO0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDB4RoCyO%2BqmI2QFqbSrcA3w1TyfF5B1gdwGyntQ5fUQ%2Flwf8y%2Fee%2BoydiBjhuxX%2Fob7UPnDzYZbUys8SxaJ%2BFvE5qAa6JSOAwenPGKYk7LVzn%2BbNYB8GnUlelW1fuW2XvDSsZAxgSDk27rzO3vCievrF42R4Sl9UwEhx0fQp6jPRa0uybP1jSXSO8Z5Ku4h%2BF%2FOwtGnl6H2BRFqXgQtuGA0EfQL%2BxzM0FTD5idHNl%2F3SWNZbVX88cPPhiKYX025sB2BVd8cH8yiJVFuiX9weXCvEc55lnwH%2BQuMKwj59Vfh3cWMXzplszl0pB1adYlpd3%2FkL2zFdM53ubOUTZNexNV2Sl%2F2ssz5jA43P%2BwBL4axATppnB%2FoKNR2qDmudgvESBMzIXwb8oewDCRP7Ub%2B%2FZTPI%2B4L3CkTes7q8cRkNhXCYgZL%2BFPGQ0n8f2uH3xY6cEv1HHu%2FvD7ZyhdP5JnlxLvadmUJ1dNj2Nf93tjrpDBYberLloTZNQmTh4CMR4lHS76p1NVx%2Bs8jJg6AaTt0lchNDNqc8gNxDeT9tj17MExEyLJ58CB3KEhFC3L0cWOx5F2U%2ByfIhQRgr9m6Dd%2Be4PKIrsZq87OxWZPaxiBXRDjYV8W7sX0jmdLChzZBT8aul0SWJF7tSuQk0kfioMKrtj70GOqUBFYmTTaTydV98qp5uFp%2Fmm%2BP7eIFUA%2FEqnklmn6Rs7bcF%2BLqY1nju0AAwai7PESvyv6ik8B18I7OA6mi2ImqSvqDmlBQCKJeQw5DlJwVza4o3r%2B7HNKm%2FBOM%2FnNjlkLbrSHxo%2FUPcOWaRSAGh%2FJV1hfMX9JomdNGPO1Dx2scxfNN7Tzna6iHnxm3I4L7yYHR0l9DDo2c68AI0Hx5BqKIuyQHs8iD6&X-Amz-Signature=ac2008cdc769ebfa3633b825cd13575a8704fc711320353b5089f2e95196b5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
