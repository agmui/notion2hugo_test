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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGVHTXV7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCQc24Z75UaOUUrVQZsTc8G3GJJ9ANiF7r2nouBlq9ZAiEAp1QabkC8FaLSM0sicJjKTp6DINoG9Kqo4DaHwbxV4cYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBi2r4%2F0Oq0JAkVBzircAwN6Z6LaGo5fYQDlfJ0ZwyuHMn6JCpaNWEYPfIt77S3Uphp%2F%2BWBJuay08rrbFymV2AsHvuz2DGP98%2F%2FgcNkgz37nEy4v4%2BlWib8RHopGaRGbkEMAyOvB6ZtnxVq0cn5SAHBuX7OLGxL5gO%2FbrsxRN5tv74Q%2Bu5We7m93tjoK7VWuh6nKDMnef8AEWhz0oqzXsakeJG6eKfXLGpttEAhO1rzqlfl1a%2FXp02Ya3Y1DxVXS9ZNHIEo2qxtEbN8nRgK8u8vcvfgI%2BW5u6nTnEOxm1xcaRhqLf9bqsfdAiziuWtBcOhzOSKK6dx9IfGiZsfaWDJhZzv0q%2BYwZxhrD2vn6pIlxUlazzCOVMZ28pPy69tp0IV%2FQ%2BI4PV%2F6n%2FfB%2FjESFw1nBQLcb4ENLWSU5nX0Vr1WM4T%2BBHb1bWt1P4N%2BmvcIU3wRiX7SzsCg7Y%2BXecSbhCKAQPqukWfeSDBXtJUsSHgfS4e1IQDvbcWuXN03JGJ52cc9320K4PbpLl8%2FI8BO40%2FcsJsnNRDzs3QNLYHWwgb0%2FIcv0DNNnZyChOWLjut7iMnwK%2ButfoQNBxdVw88DCKJYyQ2VAkX0r3AsVzJC1EV%2BgkfaVW6eZ2gkJHUuRdEhi75Fd2635gLS9TA16MJ6j%2Fb8GOqUBuDmewDcL1182rwgn%2BGzk%2FhfsmkGEr%2F%2FxezEblKMss0pV%2FFLzAJN1EcCYzUeV%2FBsLKmQM2uNJIpKB5XyiALXh%2BIF9S0yHhTO%2Bz7ldooK%2BBXwMmcWMPaLPdq3DyTzKUml1JJUDOHo%2BTMO5cYW7GAPepnXNjWG3zmwFekdWin%2BNF7k4DNVXc6hrq%2FZIKWDkDvbJwIldFy6ENK4KH0oKnE%2Ftced2btGO&X-Amz-Signature=0375c1a34421d94228e046294d2d1b52edd8566ed3035bb6c650d6f3b9bb59da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGVHTXV7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCQc24Z75UaOUUrVQZsTc8G3GJJ9ANiF7r2nouBlq9ZAiEAp1QabkC8FaLSM0sicJjKTp6DINoG9Kqo4DaHwbxV4cYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBi2r4%2F0Oq0JAkVBzircAwN6Z6LaGo5fYQDlfJ0ZwyuHMn6JCpaNWEYPfIt77S3Uphp%2F%2BWBJuay08rrbFymV2AsHvuz2DGP98%2F%2FgcNkgz37nEy4v4%2BlWib8RHopGaRGbkEMAyOvB6ZtnxVq0cn5SAHBuX7OLGxL5gO%2FbrsxRN5tv74Q%2Bu5We7m93tjoK7VWuh6nKDMnef8AEWhz0oqzXsakeJG6eKfXLGpttEAhO1rzqlfl1a%2FXp02Ya3Y1DxVXS9ZNHIEo2qxtEbN8nRgK8u8vcvfgI%2BW5u6nTnEOxm1xcaRhqLf9bqsfdAiziuWtBcOhzOSKK6dx9IfGiZsfaWDJhZzv0q%2BYwZxhrD2vn6pIlxUlazzCOVMZ28pPy69tp0IV%2FQ%2BI4PV%2F6n%2FfB%2FjESFw1nBQLcb4ENLWSU5nX0Vr1WM4T%2BBHb1bWt1P4N%2BmvcIU3wRiX7SzsCg7Y%2BXecSbhCKAQPqukWfeSDBXtJUsSHgfS4e1IQDvbcWuXN03JGJ52cc9320K4PbpLl8%2FI8BO40%2FcsJsnNRDzs3QNLYHWwgb0%2FIcv0DNNnZyChOWLjut7iMnwK%2ButfoQNBxdVw88DCKJYyQ2VAkX0r3AsVzJC1EV%2BgkfaVW6eZ2gkJHUuRdEhi75Fd2635gLS9TA16MJ6j%2Fb8GOqUBuDmewDcL1182rwgn%2BGzk%2FhfsmkGEr%2F%2FxezEblKMss0pV%2FFLzAJN1EcCYzUeV%2FBsLKmQM2uNJIpKB5XyiALXh%2BIF9S0yHhTO%2Bz7ldooK%2BBXwMmcWMPaLPdq3DyTzKUml1JJUDOHo%2BTMO5cYW7GAPepnXNjWG3zmwFekdWin%2BNF7k4DNVXc6hrq%2FZIKWDkDvbJwIldFy6ENK4KH0oKnE%2Ftced2btGO&X-Amz-Signature=d90538425a87c1114f03d8b3d66419702985ac087c5c86592568e715b452fdf0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGVHTXV7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCQc24Z75UaOUUrVQZsTc8G3GJJ9ANiF7r2nouBlq9ZAiEAp1QabkC8FaLSM0sicJjKTp6DINoG9Kqo4DaHwbxV4cYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBi2r4%2F0Oq0JAkVBzircAwN6Z6LaGo5fYQDlfJ0ZwyuHMn6JCpaNWEYPfIt77S3Uphp%2F%2BWBJuay08rrbFymV2AsHvuz2DGP98%2F%2FgcNkgz37nEy4v4%2BlWib8RHopGaRGbkEMAyOvB6ZtnxVq0cn5SAHBuX7OLGxL5gO%2FbrsxRN5tv74Q%2Bu5We7m93tjoK7VWuh6nKDMnef8AEWhz0oqzXsakeJG6eKfXLGpttEAhO1rzqlfl1a%2FXp02Ya3Y1DxVXS9ZNHIEo2qxtEbN8nRgK8u8vcvfgI%2BW5u6nTnEOxm1xcaRhqLf9bqsfdAiziuWtBcOhzOSKK6dx9IfGiZsfaWDJhZzv0q%2BYwZxhrD2vn6pIlxUlazzCOVMZ28pPy69tp0IV%2FQ%2BI4PV%2F6n%2FfB%2FjESFw1nBQLcb4ENLWSU5nX0Vr1WM4T%2BBHb1bWt1P4N%2BmvcIU3wRiX7SzsCg7Y%2BXecSbhCKAQPqukWfeSDBXtJUsSHgfS4e1IQDvbcWuXN03JGJ52cc9320K4PbpLl8%2FI8BO40%2FcsJsnNRDzs3QNLYHWwgb0%2FIcv0DNNnZyChOWLjut7iMnwK%2ButfoQNBxdVw88DCKJYyQ2VAkX0r3AsVzJC1EV%2BgkfaVW6eZ2gkJHUuRdEhi75Fd2635gLS9TA16MJ6j%2Fb8GOqUBuDmewDcL1182rwgn%2BGzk%2FhfsmkGEr%2F%2FxezEblKMss0pV%2FFLzAJN1EcCYzUeV%2FBsLKmQM2uNJIpKB5XyiALXh%2BIF9S0yHhTO%2Bz7ldooK%2BBXwMmcWMPaLPdq3DyTzKUml1JJUDOHo%2BTMO5cYW7GAPepnXNjWG3zmwFekdWin%2BNF7k4DNVXc6hrq%2FZIKWDkDvbJwIldFy6ENK4KH0oKnE%2Ftced2btGO&X-Amz-Signature=5684259a7dd4224b977fd9d103ac22858d7b00d802e053ce00376268960b1a56&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGVHTXV7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCQc24Z75UaOUUrVQZsTc8G3GJJ9ANiF7r2nouBlq9ZAiEAp1QabkC8FaLSM0sicJjKTp6DINoG9Kqo4DaHwbxV4cYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBi2r4%2F0Oq0JAkVBzircAwN6Z6LaGo5fYQDlfJ0ZwyuHMn6JCpaNWEYPfIt77S3Uphp%2F%2BWBJuay08rrbFymV2AsHvuz2DGP98%2F%2FgcNkgz37nEy4v4%2BlWib8RHopGaRGbkEMAyOvB6ZtnxVq0cn5SAHBuX7OLGxL5gO%2FbrsxRN5tv74Q%2Bu5We7m93tjoK7VWuh6nKDMnef8AEWhz0oqzXsakeJG6eKfXLGpttEAhO1rzqlfl1a%2FXp02Ya3Y1DxVXS9ZNHIEo2qxtEbN8nRgK8u8vcvfgI%2BW5u6nTnEOxm1xcaRhqLf9bqsfdAiziuWtBcOhzOSKK6dx9IfGiZsfaWDJhZzv0q%2BYwZxhrD2vn6pIlxUlazzCOVMZ28pPy69tp0IV%2FQ%2BI4PV%2F6n%2FfB%2FjESFw1nBQLcb4ENLWSU5nX0Vr1WM4T%2BBHb1bWt1P4N%2BmvcIU3wRiX7SzsCg7Y%2BXecSbhCKAQPqukWfeSDBXtJUsSHgfS4e1IQDvbcWuXN03JGJ52cc9320K4PbpLl8%2FI8BO40%2FcsJsnNRDzs3QNLYHWwgb0%2FIcv0DNNnZyChOWLjut7iMnwK%2ButfoQNBxdVw88DCKJYyQ2VAkX0r3AsVzJC1EV%2BgkfaVW6eZ2gkJHUuRdEhi75Fd2635gLS9TA16MJ6j%2Fb8GOqUBuDmewDcL1182rwgn%2BGzk%2FhfsmkGEr%2F%2FxezEblKMss0pV%2FFLzAJN1EcCYzUeV%2FBsLKmQM2uNJIpKB5XyiALXh%2BIF9S0yHhTO%2Bz7ldooK%2BBXwMmcWMPaLPdq3DyTzKUml1JJUDOHo%2BTMO5cYW7GAPepnXNjWG3zmwFekdWin%2BNF7k4DNVXc6hrq%2FZIKWDkDvbJwIldFy6ENK4KH0oKnE%2Ftced2btGO&X-Amz-Signature=e84b87a32d3f0a62b2145b0139b9fcf06c660bc321a9024e9c49a522f09262c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGVHTXV7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCQc24Z75UaOUUrVQZsTc8G3GJJ9ANiF7r2nouBlq9ZAiEAp1QabkC8FaLSM0sicJjKTp6DINoG9Kqo4DaHwbxV4cYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBi2r4%2F0Oq0JAkVBzircAwN6Z6LaGo5fYQDlfJ0ZwyuHMn6JCpaNWEYPfIt77S3Uphp%2F%2BWBJuay08rrbFymV2AsHvuz2DGP98%2F%2FgcNkgz37nEy4v4%2BlWib8RHopGaRGbkEMAyOvB6ZtnxVq0cn5SAHBuX7OLGxL5gO%2FbrsxRN5tv74Q%2Bu5We7m93tjoK7VWuh6nKDMnef8AEWhz0oqzXsakeJG6eKfXLGpttEAhO1rzqlfl1a%2FXp02Ya3Y1DxVXS9ZNHIEo2qxtEbN8nRgK8u8vcvfgI%2BW5u6nTnEOxm1xcaRhqLf9bqsfdAiziuWtBcOhzOSKK6dx9IfGiZsfaWDJhZzv0q%2BYwZxhrD2vn6pIlxUlazzCOVMZ28pPy69tp0IV%2FQ%2BI4PV%2F6n%2FfB%2FjESFw1nBQLcb4ENLWSU5nX0Vr1WM4T%2BBHb1bWt1P4N%2BmvcIU3wRiX7SzsCg7Y%2BXecSbhCKAQPqukWfeSDBXtJUsSHgfS4e1IQDvbcWuXN03JGJ52cc9320K4PbpLl8%2FI8BO40%2FcsJsnNRDzs3QNLYHWwgb0%2FIcv0DNNnZyChOWLjut7iMnwK%2ButfoQNBxdVw88DCKJYyQ2VAkX0r3AsVzJC1EV%2BgkfaVW6eZ2gkJHUuRdEhi75Fd2635gLS9TA16MJ6j%2Fb8GOqUBuDmewDcL1182rwgn%2BGzk%2FhfsmkGEr%2F%2FxezEblKMss0pV%2FFLzAJN1EcCYzUeV%2FBsLKmQM2uNJIpKB5XyiALXh%2BIF9S0yHhTO%2Bz7ldooK%2BBXwMmcWMPaLPdq3DyTzKUml1JJUDOHo%2BTMO5cYW7GAPepnXNjWG3zmwFekdWin%2BNF7k4DNVXc6hrq%2FZIKWDkDvbJwIldFy6ENK4KH0oKnE%2Ftced2btGO&X-Amz-Signature=83e295d95a4a0da1b883ea592983c8c01c09b764c45ea0e8c9c0b59326e85833&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
