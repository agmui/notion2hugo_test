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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI3CUEFX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh16kPlP%2Fwr0CIFeh1POFj6%2BkoeFAStLx0YXWJfRvojQIgddWFh4iVtvxyTdy8r%2FpGNz5fm9KwJu2a6tbrwE34QeAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJv%2FHehd2rJrMlCY6ircA8%2Bmz1cy22241bAlmCB%2F54LOARjNx6M0%2FinIBAdbziAtW1k126b5WY1E1Q783Pqu58r8LY7Q%2B7ssITSxL62rChXi6VQBvRkAvgFCrPuoOnRTj4yuPxhRte5P0%2Ban4H%2FPkcEDLXgHw7u7YMb%2F%2FRwaIDY%2BL2UALUQWquoB8MB4PH0ymoR4qk%2FjrPNTHlmghSIQREbJLzY7sz2kyk0FIRrZWH9XcSzhqhavEF14yaiAEdMvhzsx8dpWR%2F72oK65c4B13xXIk2pjGt2thlIgm%2By8HjodAz7LN310ntuYqQQGSu5En8IgQEbN4QlGUq3zDb5gqR51VPkJJO%2BA3Hns6sNPdSrQwNGWHQhhbT2hMz4iZ7GtzUfOGtdMqsLVivfty0lXKV%2BrJSQwvu%2BKLJjsYRMHyjpP0ZGtwdBOCk6TAwnGyD%2F1Y6Yo2kVuOrqIXRBxTr07eavzSYQypuhNtRKsQX66UX9x5kJ0MdYG%2BxBblSwAFHipnStAxrhqCAaIVmk2PWztJpIMBUn0NLVDUQK3Vpiz8CamNZfaqARE9z3ttMpSpHsek1n53d1C%2BX2kzWnsOeSi036EOzMDJZFD29jLi%2BN%2FdkVp%2BOSC7OVSN2kJ5xzY5LxKN5iAe2VS1EYGErTvMMDr9r8GOqUBTI8274kncJ4Y3KZhvT6Xjie%2F7ehDX68SNs0BhPR9ZQ8kiewntyZqeFxFPIRI2d8kvCoYH6GHei%2BtHvMys%2FDgcuGwxI%2Fk3IuZ%2FYCtYlDbfzFe3I9Y8i7DZ42NmaOdxUXG78U8CvwKV4%2FTGIqajHPHBjKUZfnjT%2BhSt6F7RyZx1Oz4VRZkmY37NNM2F%2BmwOtAs124vCn7LagJ1O4HDPOSqKbTd7dnY&X-Amz-Signature=b0fa6c9421ba0368700da3211d5881aa2cd684e2cba458871b808144834c1239&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI3CUEFX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh16kPlP%2Fwr0CIFeh1POFj6%2BkoeFAStLx0YXWJfRvojQIgddWFh4iVtvxyTdy8r%2FpGNz5fm9KwJu2a6tbrwE34QeAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJv%2FHehd2rJrMlCY6ircA8%2Bmz1cy22241bAlmCB%2F54LOARjNx6M0%2FinIBAdbziAtW1k126b5WY1E1Q783Pqu58r8LY7Q%2B7ssITSxL62rChXi6VQBvRkAvgFCrPuoOnRTj4yuPxhRte5P0%2Ban4H%2FPkcEDLXgHw7u7YMb%2F%2FRwaIDY%2BL2UALUQWquoB8MB4PH0ymoR4qk%2FjrPNTHlmghSIQREbJLzY7sz2kyk0FIRrZWH9XcSzhqhavEF14yaiAEdMvhzsx8dpWR%2F72oK65c4B13xXIk2pjGt2thlIgm%2By8HjodAz7LN310ntuYqQQGSu5En8IgQEbN4QlGUq3zDb5gqR51VPkJJO%2BA3Hns6sNPdSrQwNGWHQhhbT2hMz4iZ7GtzUfOGtdMqsLVivfty0lXKV%2BrJSQwvu%2BKLJjsYRMHyjpP0ZGtwdBOCk6TAwnGyD%2F1Y6Yo2kVuOrqIXRBxTr07eavzSYQypuhNtRKsQX66UX9x5kJ0MdYG%2BxBblSwAFHipnStAxrhqCAaIVmk2PWztJpIMBUn0NLVDUQK3Vpiz8CamNZfaqARE9z3ttMpSpHsek1n53d1C%2BX2kzWnsOeSi036EOzMDJZFD29jLi%2BN%2FdkVp%2BOSC7OVSN2kJ5xzY5LxKN5iAe2VS1EYGErTvMMDr9r8GOqUBTI8274kncJ4Y3KZhvT6Xjie%2F7ehDX68SNs0BhPR9ZQ8kiewntyZqeFxFPIRI2d8kvCoYH6GHei%2BtHvMys%2FDgcuGwxI%2Fk3IuZ%2FYCtYlDbfzFe3I9Y8i7DZ42NmaOdxUXG78U8CvwKV4%2FTGIqajHPHBjKUZfnjT%2BhSt6F7RyZx1Oz4VRZkmY37NNM2F%2BmwOtAs124vCn7LagJ1O4HDPOSqKbTd7dnY&X-Amz-Signature=ac0ab65818232e2d699c77178cfa501c49816c8987b71b25bb06fa3ddb264e68&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI3CUEFX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh16kPlP%2Fwr0CIFeh1POFj6%2BkoeFAStLx0YXWJfRvojQIgddWFh4iVtvxyTdy8r%2FpGNz5fm9KwJu2a6tbrwE34QeAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJv%2FHehd2rJrMlCY6ircA8%2Bmz1cy22241bAlmCB%2F54LOARjNx6M0%2FinIBAdbziAtW1k126b5WY1E1Q783Pqu58r8LY7Q%2B7ssITSxL62rChXi6VQBvRkAvgFCrPuoOnRTj4yuPxhRte5P0%2Ban4H%2FPkcEDLXgHw7u7YMb%2F%2FRwaIDY%2BL2UALUQWquoB8MB4PH0ymoR4qk%2FjrPNTHlmghSIQREbJLzY7sz2kyk0FIRrZWH9XcSzhqhavEF14yaiAEdMvhzsx8dpWR%2F72oK65c4B13xXIk2pjGt2thlIgm%2By8HjodAz7LN310ntuYqQQGSu5En8IgQEbN4QlGUq3zDb5gqR51VPkJJO%2BA3Hns6sNPdSrQwNGWHQhhbT2hMz4iZ7GtzUfOGtdMqsLVivfty0lXKV%2BrJSQwvu%2BKLJjsYRMHyjpP0ZGtwdBOCk6TAwnGyD%2F1Y6Yo2kVuOrqIXRBxTr07eavzSYQypuhNtRKsQX66UX9x5kJ0MdYG%2BxBblSwAFHipnStAxrhqCAaIVmk2PWztJpIMBUn0NLVDUQK3Vpiz8CamNZfaqARE9z3ttMpSpHsek1n53d1C%2BX2kzWnsOeSi036EOzMDJZFD29jLi%2BN%2FdkVp%2BOSC7OVSN2kJ5xzY5LxKN5iAe2VS1EYGErTvMMDr9r8GOqUBTI8274kncJ4Y3KZhvT6Xjie%2F7ehDX68SNs0BhPR9ZQ8kiewntyZqeFxFPIRI2d8kvCoYH6GHei%2BtHvMys%2FDgcuGwxI%2Fk3IuZ%2FYCtYlDbfzFe3I9Y8i7DZ42NmaOdxUXG78U8CvwKV4%2FTGIqajHPHBjKUZfnjT%2BhSt6F7RyZx1Oz4VRZkmY37NNM2F%2BmwOtAs124vCn7LagJ1O4HDPOSqKbTd7dnY&X-Amz-Signature=050a5c56ab61a1d83fcc7d091713909beadf9eab4b66ccf3133cf479995ffb09&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI3CUEFX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh16kPlP%2Fwr0CIFeh1POFj6%2BkoeFAStLx0YXWJfRvojQIgddWFh4iVtvxyTdy8r%2FpGNz5fm9KwJu2a6tbrwE34QeAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJv%2FHehd2rJrMlCY6ircA8%2Bmz1cy22241bAlmCB%2F54LOARjNx6M0%2FinIBAdbziAtW1k126b5WY1E1Q783Pqu58r8LY7Q%2B7ssITSxL62rChXi6VQBvRkAvgFCrPuoOnRTj4yuPxhRte5P0%2Ban4H%2FPkcEDLXgHw7u7YMb%2F%2FRwaIDY%2BL2UALUQWquoB8MB4PH0ymoR4qk%2FjrPNTHlmghSIQREbJLzY7sz2kyk0FIRrZWH9XcSzhqhavEF14yaiAEdMvhzsx8dpWR%2F72oK65c4B13xXIk2pjGt2thlIgm%2By8HjodAz7LN310ntuYqQQGSu5En8IgQEbN4QlGUq3zDb5gqR51VPkJJO%2BA3Hns6sNPdSrQwNGWHQhhbT2hMz4iZ7GtzUfOGtdMqsLVivfty0lXKV%2BrJSQwvu%2BKLJjsYRMHyjpP0ZGtwdBOCk6TAwnGyD%2F1Y6Yo2kVuOrqIXRBxTr07eavzSYQypuhNtRKsQX66UX9x5kJ0MdYG%2BxBblSwAFHipnStAxrhqCAaIVmk2PWztJpIMBUn0NLVDUQK3Vpiz8CamNZfaqARE9z3ttMpSpHsek1n53d1C%2BX2kzWnsOeSi036EOzMDJZFD29jLi%2BN%2FdkVp%2BOSC7OVSN2kJ5xzY5LxKN5iAe2VS1EYGErTvMMDr9r8GOqUBTI8274kncJ4Y3KZhvT6Xjie%2F7ehDX68SNs0BhPR9ZQ8kiewntyZqeFxFPIRI2d8kvCoYH6GHei%2BtHvMys%2FDgcuGwxI%2Fk3IuZ%2FYCtYlDbfzFe3I9Y8i7DZ42NmaOdxUXG78U8CvwKV4%2FTGIqajHPHBjKUZfnjT%2BhSt6F7RyZx1Oz4VRZkmY37NNM2F%2BmwOtAs124vCn7LagJ1O4HDPOSqKbTd7dnY&X-Amz-Signature=8fb0680646ed065c48b401919679643c5ccbc40b53edc2380b5b7c8736f58d44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI3CUEFX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh16kPlP%2Fwr0CIFeh1POFj6%2BkoeFAStLx0YXWJfRvojQIgddWFh4iVtvxyTdy8r%2FpGNz5fm9KwJu2a6tbrwE34QeAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJv%2FHehd2rJrMlCY6ircA8%2Bmz1cy22241bAlmCB%2F54LOARjNx6M0%2FinIBAdbziAtW1k126b5WY1E1Q783Pqu58r8LY7Q%2B7ssITSxL62rChXi6VQBvRkAvgFCrPuoOnRTj4yuPxhRte5P0%2Ban4H%2FPkcEDLXgHw7u7YMb%2F%2FRwaIDY%2BL2UALUQWquoB8MB4PH0ymoR4qk%2FjrPNTHlmghSIQREbJLzY7sz2kyk0FIRrZWH9XcSzhqhavEF14yaiAEdMvhzsx8dpWR%2F72oK65c4B13xXIk2pjGt2thlIgm%2By8HjodAz7LN310ntuYqQQGSu5En8IgQEbN4QlGUq3zDb5gqR51VPkJJO%2BA3Hns6sNPdSrQwNGWHQhhbT2hMz4iZ7GtzUfOGtdMqsLVivfty0lXKV%2BrJSQwvu%2BKLJjsYRMHyjpP0ZGtwdBOCk6TAwnGyD%2F1Y6Yo2kVuOrqIXRBxTr07eavzSYQypuhNtRKsQX66UX9x5kJ0MdYG%2BxBblSwAFHipnStAxrhqCAaIVmk2PWztJpIMBUn0NLVDUQK3Vpiz8CamNZfaqARE9z3ttMpSpHsek1n53d1C%2BX2kzWnsOeSi036EOzMDJZFD29jLi%2BN%2FdkVp%2BOSC7OVSN2kJ5xzY5LxKN5iAe2VS1EYGErTvMMDr9r8GOqUBTI8274kncJ4Y3KZhvT6Xjie%2F7ehDX68SNs0BhPR9ZQ8kiewntyZqeFxFPIRI2d8kvCoYH6GHei%2BtHvMys%2FDgcuGwxI%2Fk3IuZ%2FYCtYlDbfzFe3I9Y8i7DZ42NmaOdxUXG78U8CvwKV4%2FTGIqajHPHBjKUZfnjT%2BhSt6F7RyZx1Oz4VRZkmY37NNM2F%2BmwOtAs124vCn7LagJ1O4HDPOSqKbTd7dnY&X-Amz-Signature=913c599130e43997752556b00f054f4fe20b19dd32c6ba1d42534372eb7df09b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
