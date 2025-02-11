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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRYMT2N%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4Ftap1UVnDPIcMWwNU6X13ke3E88lcdL363XVU7ZUdAiEAxiFnZ%2FkG7r7wfUWfH38afX8CIUrL3d%2F0kecutiM0IjIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAUIykpRwK4ZfUknyrcA3z4AX86fB0618YTJ8VM2R0jWs6zIZ0%2BsvVJOIfRiHqTQqewyN2nVYVRxj3YmKF6VcImqd33%2F0rGTwGjbigt%2BodwWUh62%2B9BkQHNcM8%2FC6eHp1hFqGUGyjbGLRMDzycu1iUA%2BvR4xXKCQecSW5X5Ho19yN5PXxZT9NHzjBhy%2BBnL6sDa9sjOrhbI3aXGwtWNqqxsoDP0JjwSenWJnS88wlUhRvAxmSDecPTJOCQqe7Q9VFvSqDt4woewPOT%2BHHOyFiSUpxsL%2BsBs0R30E3OhWVugF6Y6D0Mh%2BrIjl%2FpuCIxAb9t83R%2FZMOPP60KG7uGgrMlLLFsLKehVWf0S1HSCdmeF2G7K8E00sDiiAAlsi6dPmaDf1S%2FLNJcirLik22oAe%2FIQWN4%2FCi8DjbMikKoZR%2F4n1EG%2BGtgbpVMc%2B%2FiGRbDKVu2elx0NxiMuvH55FGuEkJv9VYWm8G9L0Ai6SQoOrNmKnzfTwOfrb02AvizZV9C81c88xYVks4H7MuSgpD%2Fe1ks%2FudHLGyChoszTx7wGxhCz2kcpxDnVFFPEhbXWMntbrsu%2FVlTZ2cECby40nneRYjjpW8W%2BRjcQnhWeQj1Yw9VXruma4PejeCklmHMknBQXp5LXJejrCPSppJ8dMO7jq70GOqUBoA%2Fsa%2BKWNdvhtelD0K5h2HcDBAcVg896dCHFWw3MeEM9RM8uhOeTUU4c7V14hZ0DPbwjdcGq%2FGkzyS%2F94R8YP1PYKQa8M%2FZ3d1N%2Bb6gICXASBKmnOKDVM9Tb2AwXjyJ1PBDLAXBKyilK8H%2FZpu0k4ID40qPyOXhJCnNKo8ccnpn055gyfE2pz0m3QLxjuC4p7s%2FE%2Ft%2F8FwwXOMsTXikDd%2FrcKEA4&X-Amz-Signature=ee2642ed31b8d141072f3a1699fb2f08a959485a2f66a1ecf07ea1bce7b2ae85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRYMT2N%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4Ftap1UVnDPIcMWwNU6X13ke3E88lcdL363XVU7ZUdAiEAxiFnZ%2FkG7r7wfUWfH38afX8CIUrL3d%2F0kecutiM0IjIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAUIykpRwK4ZfUknyrcA3z4AX86fB0618YTJ8VM2R0jWs6zIZ0%2BsvVJOIfRiHqTQqewyN2nVYVRxj3YmKF6VcImqd33%2F0rGTwGjbigt%2BodwWUh62%2B9BkQHNcM8%2FC6eHp1hFqGUGyjbGLRMDzycu1iUA%2BvR4xXKCQecSW5X5Ho19yN5PXxZT9NHzjBhy%2BBnL6sDa9sjOrhbI3aXGwtWNqqxsoDP0JjwSenWJnS88wlUhRvAxmSDecPTJOCQqe7Q9VFvSqDt4woewPOT%2BHHOyFiSUpxsL%2BsBs0R30E3OhWVugF6Y6D0Mh%2BrIjl%2FpuCIxAb9t83R%2FZMOPP60KG7uGgrMlLLFsLKehVWf0S1HSCdmeF2G7K8E00sDiiAAlsi6dPmaDf1S%2FLNJcirLik22oAe%2FIQWN4%2FCi8DjbMikKoZR%2F4n1EG%2BGtgbpVMc%2B%2FiGRbDKVu2elx0NxiMuvH55FGuEkJv9VYWm8G9L0Ai6SQoOrNmKnzfTwOfrb02AvizZV9C81c88xYVks4H7MuSgpD%2Fe1ks%2FudHLGyChoszTx7wGxhCz2kcpxDnVFFPEhbXWMntbrsu%2FVlTZ2cECby40nneRYjjpW8W%2BRjcQnhWeQj1Yw9VXruma4PejeCklmHMknBQXp5LXJejrCPSppJ8dMO7jq70GOqUBoA%2Fsa%2BKWNdvhtelD0K5h2HcDBAcVg896dCHFWw3MeEM9RM8uhOeTUU4c7V14hZ0DPbwjdcGq%2FGkzyS%2F94R8YP1PYKQa8M%2FZ3d1N%2Bb6gICXASBKmnOKDVM9Tb2AwXjyJ1PBDLAXBKyilK8H%2FZpu0k4ID40qPyOXhJCnNKo8ccnpn055gyfE2pz0m3QLxjuC4p7s%2FE%2Ft%2F8FwwXOMsTXikDd%2FrcKEA4&X-Amz-Signature=271daa47fc9544c9e6ee8fc8501860bca270d9ffc27c5c51c515f729878dc96b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRYMT2N%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4Ftap1UVnDPIcMWwNU6X13ke3E88lcdL363XVU7ZUdAiEAxiFnZ%2FkG7r7wfUWfH38afX8CIUrL3d%2F0kecutiM0IjIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAUIykpRwK4ZfUknyrcA3z4AX86fB0618YTJ8VM2R0jWs6zIZ0%2BsvVJOIfRiHqTQqewyN2nVYVRxj3YmKF6VcImqd33%2F0rGTwGjbigt%2BodwWUh62%2B9BkQHNcM8%2FC6eHp1hFqGUGyjbGLRMDzycu1iUA%2BvR4xXKCQecSW5X5Ho19yN5PXxZT9NHzjBhy%2BBnL6sDa9sjOrhbI3aXGwtWNqqxsoDP0JjwSenWJnS88wlUhRvAxmSDecPTJOCQqe7Q9VFvSqDt4woewPOT%2BHHOyFiSUpxsL%2BsBs0R30E3OhWVugF6Y6D0Mh%2BrIjl%2FpuCIxAb9t83R%2FZMOPP60KG7uGgrMlLLFsLKehVWf0S1HSCdmeF2G7K8E00sDiiAAlsi6dPmaDf1S%2FLNJcirLik22oAe%2FIQWN4%2FCi8DjbMikKoZR%2F4n1EG%2BGtgbpVMc%2B%2FiGRbDKVu2elx0NxiMuvH55FGuEkJv9VYWm8G9L0Ai6SQoOrNmKnzfTwOfrb02AvizZV9C81c88xYVks4H7MuSgpD%2Fe1ks%2FudHLGyChoszTx7wGxhCz2kcpxDnVFFPEhbXWMntbrsu%2FVlTZ2cECby40nneRYjjpW8W%2BRjcQnhWeQj1Yw9VXruma4PejeCklmHMknBQXp5LXJejrCPSppJ8dMO7jq70GOqUBoA%2Fsa%2BKWNdvhtelD0K5h2HcDBAcVg896dCHFWw3MeEM9RM8uhOeTUU4c7V14hZ0DPbwjdcGq%2FGkzyS%2F94R8YP1PYKQa8M%2FZ3d1N%2Bb6gICXASBKmnOKDVM9Tb2AwXjyJ1PBDLAXBKyilK8H%2FZpu0k4ID40qPyOXhJCnNKo8ccnpn055gyfE2pz0m3QLxjuC4p7s%2FE%2Ft%2F8FwwXOMsTXikDd%2FrcKEA4&X-Amz-Signature=09369304a64eb641f0567e5eaf681d0d468fa9ea3a903de3be6272e6128231b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRYMT2N%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4Ftap1UVnDPIcMWwNU6X13ke3E88lcdL363XVU7ZUdAiEAxiFnZ%2FkG7r7wfUWfH38afX8CIUrL3d%2F0kecutiM0IjIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAUIykpRwK4ZfUknyrcA3z4AX86fB0618YTJ8VM2R0jWs6zIZ0%2BsvVJOIfRiHqTQqewyN2nVYVRxj3YmKF6VcImqd33%2F0rGTwGjbigt%2BodwWUh62%2B9BkQHNcM8%2FC6eHp1hFqGUGyjbGLRMDzycu1iUA%2BvR4xXKCQecSW5X5Ho19yN5PXxZT9NHzjBhy%2BBnL6sDa9sjOrhbI3aXGwtWNqqxsoDP0JjwSenWJnS88wlUhRvAxmSDecPTJOCQqe7Q9VFvSqDt4woewPOT%2BHHOyFiSUpxsL%2BsBs0R30E3OhWVugF6Y6D0Mh%2BrIjl%2FpuCIxAb9t83R%2FZMOPP60KG7uGgrMlLLFsLKehVWf0S1HSCdmeF2G7K8E00sDiiAAlsi6dPmaDf1S%2FLNJcirLik22oAe%2FIQWN4%2FCi8DjbMikKoZR%2F4n1EG%2BGtgbpVMc%2B%2FiGRbDKVu2elx0NxiMuvH55FGuEkJv9VYWm8G9L0Ai6SQoOrNmKnzfTwOfrb02AvizZV9C81c88xYVks4H7MuSgpD%2Fe1ks%2FudHLGyChoszTx7wGxhCz2kcpxDnVFFPEhbXWMntbrsu%2FVlTZ2cECby40nneRYjjpW8W%2BRjcQnhWeQj1Yw9VXruma4PejeCklmHMknBQXp5LXJejrCPSppJ8dMO7jq70GOqUBoA%2Fsa%2BKWNdvhtelD0K5h2HcDBAcVg896dCHFWw3MeEM9RM8uhOeTUU4c7V14hZ0DPbwjdcGq%2FGkzyS%2F94R8YP1PYKQa8M%2FZ3d1N%2Bb6gICXASBKmnOKDVM9Tb2AwXjyJ1PBDLAXBKyilK8H%2FZpu0k4ID40qPyOXhJCnNKo8ccnpn055gyfE2pz0m3QLxjuC4p7s%2FE%2Ft%2F8FwwXOMsTXikDd%2FrcKEA4&X-Amz-Signature=ba6109476a21735b37b880a70a33006d86949307308d250ef53da8b7d4371bc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRYMT2N%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4Ftap1UVnDPIcMWwNU6X13ke3E88lcdL363XVU7ZUdAiEAxiFnZ%2FkG7r7wfUWfH38afX8CIUrL3d%2F0kecutiM0IjIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAUIykpRwK4ZfUknyrcA3z4AX86fB0618YTJ8VM2R0jWs6zIZ0%2BsvVJOIfRiHqTQqewyN2nVYVRxj3YmKF6VcImqd33%2F0rGTwGjbigt%2BodwWUh62%2B9BkQHNcM8%2FC6eHp1hFqGUGyjbGLRMDzycu1iUA%2BvR4xXKCQecSW5X5Ho19yN5PXxZT9NHzjBhy%2BBnL6sDa9sjOrhbI3aXGwtWNqqxsoDP0JjwSenWJnS88wlUhRvAxmSDecPTJOCQqe7Q9VFvSqDt4woewPOT%2BHHOyFiSUpxsL%2BsBs0R30E3OhWVugF6Y6D0Mh%2BrIjl%2FpuCIxAb9t83R%2FZMOPP60KG7uGgrMlLLFsLKehVWf0S1HSCdmeF2G7K8E00sDiiAAlsi6dPmaDf1S%2FLNJcirLik22oAe%2FIQWN4%2FCi8DjbMikKoZR%2F4n1EG%2BGtgbpVMc%2B%2FiGRbDKVu2elx0NxiMuvH55FGuEkJv9VYWm8G9L0Ai6SQoOrNmKnzfTwOfrb02AvizZV9C81c88xYVks4H7MuSgpD%2Fe1ks%2FudHLGyChoszTx7wGxhCz2kcpxDnVFFPEhbXWMntbrsu%2FVlTZ2cECby40nneRYjjpW8W%2BRjcQnhWeQj1Yw9VXruma4PejeCklmHMknBQXp5LXJejrCPSppJ8dMO7jq70GOqUBoA%2Fsa%2BKWNdvhtelD0K5h2HcDBAcVg896dCHFWw3MeEM9RM8uhOeTUU4c7V14hZ0DPbwjdcGq%2FGkzyS%2F94R8YP1PYKQa8M%2FZ3d1N%2Bb6gICXASBKmnOKDVM9Tb2AwXjyJ1PBDLAXBKyilK8H%2FZpu0k4ID40qPyOXhJCnNKo8ccnpn055gyfE2pz0m3QLxjuC4p7s%2FE%2Ft%2F8FwwXOMsTXikDd%2FrcKEA4&X-Amz-Signature=8eccda6d9604376fd4de480ac1f820d6b9020728e04e14c46943be9479462587&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
