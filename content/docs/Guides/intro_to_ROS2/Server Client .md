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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN2LSCS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG%2F%2Fn%2FiLkTn%2FX6wH2h2A6GtfcMGlwTmCIs1UVKnIS8%2FAIgLEr8h2yr4f80b8Q5azu7iWPomhQbm%2FQxJVwZjufLF6Uq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPZAGkK582mtnDAmQSrcAy4oQJ9DSDCfcVlIa4zS8YFOMk%2FoQrZRzN6KfL314jIh%2B3I2hZc%2FivNHeWOOkA6UckwJ0kwU8kIWib21NdglT%2FUM2EvUc7onF0%2BQX1ntXM9U9VojNZEtBPX%2FLk%2BtI1T1FY8Iq8k%2BJdapJpg7%2FdooVLW%2FBD22l1kWjlv2ONW39RoJY8lroAv5%2FQFDSdG%2Bb63pjAl8Il08XKhdOO6vhCgwl6ON6thHURY9Eds5Py6%2BAGdVq6jXtInWRcBFMIIxsY7HScLJAS0c8mpLn8u2kBPTUD%2Bx2Q3h2NuHGMVudz7FBIshPb2olHVp4VWqn2AfPogeX%2BhzZwyL3isbbnAuqXsGRETcRLQKy%2Bjqc3eaO82eiE99oWbKQAmxeRK455TmNWpnvrk4SLfmb3x37j6E0p00fPHWaURp%2FTdbSVg2RY3Ck6KrgJqM0Aggl2wEJrofxfYNzkoZheacZz60A41p5klOARLRKt73OWymIPOGU5J34mYK7V4n%2FdLi2G9VJ8sBorgSaWcDwbq1%2B7NMJFFSNJtPQ2uyfQW0xfcHZyXzeoBa2i%2Bc8Bez4z439ElO5O1Qe2c0Hy7Ce%2B%2BarHJnCnpUZ%2Fh52BMwulp9B4eFZL9dDCSGlzX5Wb8po%2BYgVETKr6pyMIKJm78GOqUBkc5xgNG2Tg32EnLFbs4aTrMypU4O0jEGcB7H0aXdWyvHi6v2f567MHkAYtM2rw0PMKh7BFbIUS4VqzVsNuNQznMt3ux3TuguZVFGhN65cP%2FsD6qLknOm7hctgKlamprfHi4cUhLMRgazh06wxplakfZHulEP%2F7sb6z1jQ2UJBGti7IP9wRHccDxifC5QHHhouFfFf9ac5aE9z2Oy43DLI%2FxUsUl4&X-Amz-Signature=cb6f9a9f3b8ce2d5d37c475668910d195fdb2951645a2639d7da0e19e1efd677&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN2LSCS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG%2F%2Fn%2FiLkTn%2FX6wH2h2A6GtfcMGlwTmCIs1UVKnIS8%2FAIgLEr8h2yr4f80b8Q5azu7iWPomhQbm%2FQxJVwZjufLF6Uq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPZAGkK582mtnDAmQSrcAy4oQJ9DSDCfcVlIa4zS8YFOMk%2FoQrZRzN6KfL314jIh%2B3I2hZc%2FivNHeWOOkA6UckwJ0kwU8kIWib21NdglT%2FUM2EvUc7onF0%2BQX1ntXM9U9VojNZEtBPX%2FLk%2BtI1T1FY8Iq8k%2BJdapJpg7%2FdooVLW%2FBD22l1kWjlv2ONW39RoJY8lroAv5%2FQFDSdG%2Bb63pjAl8Il08XKhdOO6vhCgwl6ON6thHURY9Eds5Py6%2BAGdVq6jXtInWRcBFMIIxsY7HScLJAS0c8mpLn8u2kBPTUD%2Bx2Q3h2NuHGMVudz7FBIshPb2olHVp4VWqn2AfPogeX%2BhzZwyL3isbbnAuqXsGRETcRLQKy%2Bjqc3eaO82eiE99oWbKQAmxeRK455TmNWpnvrk4SLfmb3x37j6E0p00fPHWaURp%2FTdbSVg2RY3Ck6KrgJqM0Aggl2wEJrofxfYNzkoZheacZz60A41p5klOARLRKt73OWymIPOGU5J34mYK7V4n%2FdLi2G9VJ8sBorgSaWcDwbq1%2B7NMJFFSNJtPQ2uyfQW0xfcHZyXzeoBa2i%2Bc8Bez4z439ElO5O1Qe2c0Hy7Ce%2B%2BarHJnCnpUZ%2Fh52BMwulp9B4eFZL9dDCSGlzX5Wb8po%2BYgVETKr6pyMIKJm78GOqUBkc5xgNG2Tg32EnLFbs4aTrMypU4O0jEGcB7H0aXdWyvHi6v2f567MHkAYtM2rw0PMKh7BFbIUS4VqzVsNuNQznMt3ux3TuguZVFGhN65cP%2FsD6qLknOm7hctgKlamprfHi4cUhLMRgazh06wxplakfZHulEP%2F7sb6z1jQ2UJBGti7IP9wRHccDxifC5QHHhouFfFf9ac5aE9z2Oy43DLI%2FxUsUl4&X-Amz-Signature=b390cc360918d087649f359031cc43244cb54d0dfd64c2894c8bc2d39125c313&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN2LSCS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG%2F%2Fn%2FiLkTn%2FX6wH2h2A6GtfcMGlwTmCIs1UVKnIS8%2FAIgLEr8h2yr4f80b8Q5azu7iWPomhQbm%2FQxJVwZjufLF6Uq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPZAGkK582mtnDAmQSrcAy4oQJ9DSDCfcVlIa4zS8YFOMk%2FoQrZRzN6KfL314jIh%2B3I2hZc%2FivNHeWOOkA6UckwJ0kwU8kIWib21NdglT%2FUM2EvUc7onF0%2BQX1ntXM9U9VojNZEtBPX%2FLk%2BtI1T1FY8Iq8k%2BJdapJpg7%2FdooVLW%2FBD22l1kWjlv2ONW39RoJY8lroAv5%2FQFDSdG%2Bb63pjAl8Il08XKhdOO6vhCgwl6ON6thHURY9Eds5Py6%2BAGdVq6jXtInWRcBFMIIxsY7HScLJAS0c8mpLn8u2kBPTUD%2Bx2Q3h2NuHGMVudz7FBIshPb2olHVp4VWqn2AfPogeX%2BhzZwyL3isbbnAuqXsGRETcRLQKy%2Bjqc3eaO82eiE99oWbKQAmxeRK455TmNWpnvrk4SLfmb3x37j6E0p00fPHWaURp%2FTdbSVg2RY3Ck6KrgJqM0Aggl2wEJrofxfYNzkoZheacZz60A41p5klOARLRKt73OWymIPOGU5J34mYK7V4n%2FdLi2G9VJ8sBorgSaWcDwbq1%2B7NMJFFSNJtPQ2uyfQW0xfcHZyXzeoBa2i%2Bc8Bez4z439ElO5O1Qe2c0Hy7Ce%2B%2BarHJnCnpUZ%2Fh52BMwulp9B4eFZL9dDCSGlzX5Wb8po%2BYgVETKr6pyMIKJm78GOqUBkc5xgNG2Tg32EnLFbs4aTrMypU4O0jEGcB7H0aXdWyvHi6v2f567MHkAYtM2rw0PMKh7BFbIUS4VqzVsNuNQznMt3ux3TuguZVFGhN65cP%2FsD6qLknOm7hctgKlamprfHi4cUhLMRgazh06wxplakfZHulEP%2F7sb6z1jQ2UJBGti7IP9wRHccDxifC5QHHhouFfFf9ac5aE9z2Oy43DLI%2FxUsUl4&X-Amz-Signature=021e829179aa9a18a36e02aed0ad877725c1dba7b64e865cd3dd0cfd206ca60b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN2LSCS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG%2F%2Fn%2FiLkTn%2FX6wH2h2A6GtfcMGlwTmCIs1UVKnIS8%2FAIgLEr8h2yr4f80b8Q5azu7iWPomhQbm%2FQxJVwZjufLF6Uq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPZAGkK582mtnDAmQSrcAy4oQJ9DSDCfcVlIa4zS8YFOMk%2FoQrZRzN6KfL314jIh%2B3I2hZc%2FivNHeWOOkA6UckwJ0kwU8kIWib21NdglT%2FUM2EvUc7onF0%2BQX1ntXM9U9VojNZEtBPX%2FLk%2BtI1T1FY8Iq8k%2BJdapJpg7%2FdooVLW%2FBD22l1kWjlv2ONW39RoJY8lroAv5%2FQFDSdG%2Bb63pjAl8Il08XKhdOO6vhCgwl6ON6thHURY9Eds5Py6%2BAGdVq6jXtInWRcBFMIIxsY7HScLJAS0c8mpLn8u2kBPTUD%2Bx2Q3h2NuHGMVudz7FBIshPb2olHVp4VWqn2AfPogeX%2BhzZwyL3isbbnAuqXsGRETcRLQKy%2Bjqc3eaO82eiE99oWbKQAmxeRK455TmNWpnvrk4SLfmb3x37j6E0p00fPHWaURp%2FTdbSVg2RY3Ck6KrgJqM0Aggl2wEJrofxfYNzkoZheacZz60A41p5klOARLRKt73OWymIPOGU5J34mYK7V4n%2FdLi2G9VJ8sBorgSaWcDwbq1%2B7NMJFFSNJtPQ2uyfQW0xfcHZyXzeoBa2i%2Bc8Bez4z439ElO5O1Qe2c0Hy7Ce%2B%2BarHJnCnpUZ%2Fh52BMwulp9B4eFZL9dDCSGlzX5Wb8po%2BYgVETKr6pyMIKJm78GOqUBkc5xgNG2Tg32EnLFbs4aTrMypU4O0jEGcB7H0aXdWyvHi6v2f567MHkAYtM2rw0PMKh7BFbIUS4VqzVsNuNQznMt3ux3TuguZVFGhN65cP%2FsD6qLknOm7hctgKlamprfHi4cUhLMRgazh06wxplakfZHulEP%2F7sb6z1jQ2UJBGti7IP9wRHccDxifC5QHHhouFfFf9ac5aE9z2Oy43DLI%2FxUsUl4&X-Amz-Signature=1de20c0f70942e753d09c59bcda0b3d8f97077312059ff5aab86558ae4c03c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN2LSCS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG%2F%2Fn%2FiLkTn%2FX6wH2h2A6GtfcMGlwTmCIs1UVKnIS8%2FAIgLEr8h2yr4f80b8Q5azu7iWPomhQbm%2FQxJVwZjufLF6Uq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPZAGkK582mtnDAmQSrcAy4oQJ9DSDCfcVlIa4zS8YFOMk%2FoQrZRzN6KfL314jIh%2B3I2hZc%2FivNHeWOOkA6UckwJ0kwU8kIWib21NdglT%2FUM2EvUc7onF0%2BQX1ntXM9U9VojNZEtBPX%2FLk%2BtI1T1FY8Iq8k%2BJdapJpg7%2FdooVLW%2FBD22l1kWjlv2ONW39RoJY8lroAv5%2FQFDSdG%2Bb63pjAl8Il08XKhdOO6vhCgwl6ON6thHURY9Eds5Py6%2BAGdVq6jXtInWRcBFMIIxsY7HScLJAS0c8mpLn8u2kBPTUD%2Bx2Q3h2NuHGMVudz7FBIshPb2olHVp4VWqn2AfPogeX%2BhzZwyL3isbbnAuqXsGRETcRLQKy%2Bjqc3eaO82eiE99oWbKQAmxeRK455TmNWpnvrk4SLfmb3x37j6E0p00fPHWaURp%2FTdbSVg2RY3Ck6KrgJqM0Aggl2wEJrofxfYNzkoZheacZz60A41p5klOARLRKt73OWymIPOGU5J34mYK7V4n%2FdLi2G9VJ8sBorgSaWcDwbq1%2B7NMJFFSNJtPQ2uyfQW0xfcHZyXzeoBa2i%2Bc8Bez4z439ElO5O1Qe2c0Hy7Ce%2B%2BarHJnCnpUZ%2Fh52BMwulp9B4eFZL9dDCSGlzX5Wb8po%2BYgVETKr6pyMIKJm78GOqUBkc5xgNG2Tg32EnLFbs4aTrMypU4O0jEGcB7H0aXdWyvHi6v2f567MHkAYtM2rw0PMKh7BFbIUS4VqzVsNuNQznMt3ux3TuguZVFGhN65cP%2FsD6qLknOm7hctgKlamprfHi4cUhLMRgazh06wxplakfZHulEP%2F7sb6z1jQ2UJBGti7IP9wRHccDxifC5QHHhouFfFf9ac5aE9z2Oy43DLI%2FxUsUl4&X-Amz-Signature=b8ddff86b243b0f03a7e13fdf2bf2edd837b1c9dab3b0132e5da567b822269ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
