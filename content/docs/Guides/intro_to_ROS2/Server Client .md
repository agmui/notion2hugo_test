---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAEQ3W4V%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtYNFGCWSEggnYDvDgjkmvDDc8HMqGveVAflSzpoqdugIgLnlqna27gvsa2ttNXspEvH4IaD0bfZvqo3H1QNRFi20qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMrFYU8dNgBNUgrDyrcA7Tw9zilNBSnCJwm3zxBOlhHrrfoREZ09BluBKqAZQFBvy4uV8gJty5o8Dx3qomZzBsjGBqaVF4TEeibreV61E5UDd2ZwA2Q536iR3SSfBE3o0Z%2Fsh1ff%2BQqGLogaH4YJ7C%2Be5MvjNZQL5m5L8CY9dZIO7ls00Sh7DKlwltrdDVkkPS4TysfuB%2F44wJ773ZCuvaZJwTcxKPEUnTwnpESPZgUnnb3O88Ntv%2BFs%2F2xoPtysp8f8vdvWzFMjTZ6%2Fp9B7n19K1FHBegK0ltfmTL2vLhbFAZgzK6EWUDD4TMBjqxh0t%2FWIUOMPk3dSs6HP3Ya%2FdZUWimCGEMYz6Iw23AXnp3cNI5pTOv4nJd5%2BrkCJSznywZy%2F2KvOtqjHIOnENIYiVDKf4NxKSMPbxLA9%2BHm0SGYruxRfmcSflxlMCuGyUus2mhcjFRvXFcnPvxJa5mH3IB%2Fj8qbZ0NF1Ul5QGARNPBbV11oPHM4y%2BKCZYGgkIrGtpoQINZpKwvh5PNCown4eCYqRIc32%2FQ5IMkq3bkHa1G%2B4d9AJr%2Fio%2BdYW1hJ52hHa%2FvJCNBYnnHlBDIrAmloCVRZgi0LoSRtmazi%2FORYKL3uEP8cYBPy5B9chrpvkrjhsEPnbaRlddQEjR6uMIWN%2B8cGOqUB5ep6AJgnZyfAL%2BR4RnrBKGB9bUDHXDlHjkQvzrL%2BMTez9m69N9dFlBMPbqnbd%2BQL1G3OwikISQgl4heo5ANzR%2BuhehL1fwtmyZ9Vxzl6laXMKDwGujpqapsIjLV1Uyydxfp23aL7joYLup3FLrMINodwOygBA0sWD7vpLnVLerbz6ME6iWHYpsWHkq1754mJbmtNlYddoyqGSqoPAS0OFTNJiPNd&X-Amz-Signature=ba33a8712f057264077a3426dd589cd40ff5b1659c66c92adaf6890f24c668f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAEQ3W4V%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtYNFGCWSEggnYDvDgjkmvDDc8HMqGveVAflSzpoqdugIgLnlqna27gvsa2ttNXspEvH4IaD0bfZvqo3H1QNRFi20qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMrFYU8dNgBNUgrDyrcA7Tw9zilNBSnCJwm3zxBOlhHrrfoREZ09BluBKqAZQFBvy4uV8gJty5o8Dx3qomZzBsjGBqaVF4TEeibreV61E5UDd2ZwA2Q536iR3SSfBE3o0Z%2Fsh1ff%2BQqGLogaH4YJ7C%2Be5MvjNZQL5m5L8CY9dZIO7ls00Sh7DKlwltrdDVkkPS4TysfuB%2F44wJ773ZCuvaZJwTcxKPEUnTwnpESPZgUnnb3O88Ntv%2BFs%2F2xoPtysp8f8vdvWzFMjTZ6%2Fp9B7n19K1FHBegK0ltfmTL2vLhbFAZgzK6EWUDD4TMBjqxh0t%2FWIUOMPk3dSs6HP3Ya%2FdZUWimCGEMYz6Iw23AXnp3cNI5pTOv4nJd5%2BrkCJSznywZy%2F2KvOtqjHIOnENIYiVDKf4NxKSMPbxLA9%2BHm0SGYruxRfmcSflxlMCuGyUus2mhcjFRvXFcnPvxJa5mH3IB%2Fj8qbZ0NF1Ul5QGARNPBbV11oPHM4y%2BKCZYGgkIrGtpoQINZpKwvh5PNCown4eCYqRIc32%2FQ5IMkq3bkHa1G%2B4d9AJr%2Fio%2BdYW1hJ52hHa%2FvJCNBYnnHlBDIrAmloCVRZgi0LoSRtmazi%2FORYKL3uEP8cYBPy5B9chrpvkrjhsEPnbaRlddQEjR6uMIWN%2B8cGOqUB5ep6AJgnZyfAL%2BR4RnrBKGB9bUDHXDlHjkQvzrL%2BMTez9m69N9dFlBMPbqnbd%2BQL1G3OwikISQgl4heo5ANzR%2BuhehL1fwtmyZ9Vxzl6laXMKDwGujpqapsIjLV1Uyydxfp23aL7joYLup3FLrMINodwOygBA0sWD7vpLnVLerbz6ME6iWHYpsWHkq1754mJbmtNlYddoyqGSqoPAS0OFTNJiPNd&X-Amz-Signature=539856e520f8a34251cfe298e85e8c05ac0e33679be687766e40ad156deef37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAEQ3W4V%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtYNFGCWSEggnYDvDgjkmvDDc8HMqGveVAflSzpoqdugIgLnlqna27gvsa2ttNXspEvH4IaD0bfZvqo3H1QNRFi20qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMrFYU8dNgBNUgrDyrcA7Tw9zilNBSnCJwm3zxBOlhHrrfoREZ09BluBKqAZQFBvy4uV8gJty5o8Dx3qomZzBsjGBqaVF4TEeibreV61E5UDd2ZwA2Q536iR3SSfBE3o0Z%2Fsh1ff%2BQqGLogaH4YJ7C%2Be5MvjNZQL5m5L8CY9dZIO7ls00Sh7DKlwltrdDVkkPS4TysfuB%2F44wJ773ZCuvaZJwTcxKPEUnTwnpESPZgUnnb3O88Ntv%2BFs%2F2xoPtysp8f8vdvWzFMjTZ6%2Fp9B7n19K1FHBegK0ltfmTL2vLhbFAZgzK6EWUDD4TMBjqxh0t%2FWIUOMPk3dSs6HP3Ya%2FdZUWimCGEMYz6Iw23AXnp3cNI5pTOv4nJd5%2BrkCJSznywZy%2F2KvOtqjHIOnENIYiVDKf4NxKSMPbxLA9%2BHm0SGYruxRfmcSflxlMCuGyUus2mhcjFRvXFcnPvxJa5mH3IB%2Fj8qbZ0NF1Ul5QGARNPBbV11oPHM4y%2BKCZYGgkIrGtpoQINZpKwvh5PNCown4eCYqRIc32%2FQ5IMkq3bkHa1G%2B4d9AJr%2Fio%2BdYW1hJ52hHa%2FvJCNBYnnHlBDIrAmloCVRZgi0LoSRtmazi%2FORYKL3uEP8cYBPy5B9chrpvkrjhsEPnbaRlddQEjR6uMIWN%2B8cGOqUB5ep6AJgnZyfAL%2BR4RnrBKGB9bUDHXDlHjkQvzrL%2BMTez9m69N9dFlBMPbqnbd%2BQL1G3OwikISQgl4heo5ANzR%2BuhehL1fwtmyZ9Vxzl6laXMKDwGujpqapsIjLV1Uyydxfp23aL7joYLup3FLrMINodwOygBA0sWD7vpLnVLerbz6ME6iWHYpsWHkq1754mJbmtNlYddoyqGSqoPAS0OFTNJiPNd&X-Amz-Signature=caf9d1f23ba454fb3f6de5bba47e75d1fdd438bed1976b5560a22fe214ef06bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAEQ3W4V%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtYNFGCWSEggnYDvDgjkmvDDc8HMqGveVAflSzpoqdugIgLnlqna27gvsa2ttNXspEvH4IaD0bfZvqo3H1QNRFi20qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMrFYU8dNgBNUgrDyrcA7Tw9zilNBSnCJwm3zxBOlhHrrfoREZ09BluBKqAZQFBvy4uV8gJty5o8Dx3qomZzBsjGBqaVF4TEeibreV61E5UDd2ZwA2Q536iR3SSfBE3o0Z%2Fsh1ff%2BQqGLogaH4YJ7C%2Be5MvjNZQL5m5L8CY9dZIO7ls00Sh7DKlwltrdDVkkPS4TysfuB%2F44wJ773ZCuvaZJwTcxKPEUnTwnpESPZgUnnb3O88Ntv%2BFs%2F2xoPtysp8f8vdvWzFMjTZ6%2Fp9B7n19K1FHBegK0ltfmTL2vLhbFAZgzK6EWUDD4TMBjqxh0t%2FWIUOMPk3dSs6HP3Ya%2FdZUWimCGEMYz6Iw23AXnp3cNI5pTOv4nJd5%2BrkCJSznywZy%2F2KvOtqjHIOnENIYiVDKf4NxKSMPbxLA9%2BHm0SGYruxRfmcSflxlMCuGyUus2mhcjFRvXFcnPvxJa5mH3IB%2Fj8qbZ0NF1Ul5QGARNPBbV11oPHM4y%2BKCZYGgkIrGtpoQINZpKwvh5PNCown4eCYqRIc32%2FQ5IMkq3bkHa1G%2B4d9AJr%2Fio%2BdYW1hJ52hHa%2FvJCNBYnnHlBDIrAmloCVRZgi0LoSRtmazi%2FORYKL3uEP8cYBPy5B9chrpvkrjhsEPnbaRlddQEjR6uMIWN%2B8cGOqUB5ep6AJgnZyfAL%2BR4RnrBKGB9bUDHXDlHjkQvzrL%2BMTez9m69N9dFlBMPbqnbd%2BQL1G3OwikISQgl4heo5ANzR%2BuhehL1fwtmyZ9Vxzl6laXMKDwGujpqapsIjLV1Uyydxfp23aL7joYLup3FLrMINodwOygBA0sWD7vpLnVLerbz6ME6iWHYpsWHkq1754mJbmtNlYddoyqGSqoPAS0OFTNJiPNd&X-Amz-Signature=e8732a7d298dd6903df602ac28e43e065399ce55df99facb23b97b757357bbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAEQ3W4V%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtYNFGCWSEggnYDvDgjkmvDDc8HMqGveVAflSzpoqdugIgLnlqna27gvsa2ttNXspEvH4IaD0bfZvqo3H1QNRFi20qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMrFYU8dNgBNUgrDyrcA7Tw9zilNBSnCJwm3zxBOlhHrrfoREZ09BluBKqAZQFBvy4uV8gJty5o8Dx3qomZzBsjGBqaVF4TEeibreV61E5UDd2ZwA2Q536iR3SSfBE3o0Z%2Fsh1ff%2BQqGLogaH4YJ7C%2Be5MvjNZQL5m5L8CY9dZIO7ls00Sh7DKlwltrdDVkkPS4TysfuB%2F44wJ773ZCuvaZJwTcxKPEUnTwnpESPZgUnnb3O88Ntv%2BFs%2F2xoPtysp8f8vdvWzFMjTZ6%2Fp9B7n19K1FHBegK0ltfmTL2vLhbFAZgzK6EWUDD4TMBjqxh0t%2FWIUOMPk3dSs6HP3Ya%2FdZUWimCGEMYz6Iw23AXnp3cNI5pTOv4nJd5%2BrkCJSznywZy%2F2KvOtqjHIOnENIYiVDKf4NxKSMPbxLA9%2BHm0SGYruxRfmcSflxlMCuGyUus2mhcjFRvXFcnPvxJa5mH3IB%2Fj8qbZ0NF1Ul5QGARNPBbV11oPHM4y%2BKCZYGgkIrGtpoQINZpKwvh5PNCown4eCYqRIc32%2FQ5IMkq3bkHa1G%2B4d9AJr%2Fio%2BdYW1hJ52hHa%2FvJCNBYnnHlBDIrAmloCVRZgi0LoSRtmazi%2FORYKL3uEP8cYBPy5B9chrpvkrjhsEPnbaRlddQEjR6uMIWN%2B8cGOqUB5ep6AJgnZyfAL%2BR4RnrBKGB9bUDHXDlHjkQvzrL%2BMTez9m69N9dFlBMPbqnbd%2BQL1G3OwikISQgl4heo5ANzR%2BuhehL1fwtmyZ9Vxzl6laXMKDwGujpqapsIjLV1Uyydxfp23aL7joYLup3FLrMINodwOygBA0sWD7vpLnVLerbz6ME6iWHYpsWHkq1754mJbmtNlYddoyqGSqoPAS0OFTNJiPNd&X-Amz-Signature=dbebff53f439aa86476c9e44c094fb6e62144132822d0862bb76263436d30ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
