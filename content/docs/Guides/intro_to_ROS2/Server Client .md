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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GQQNQP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIEmGICdr4y9MLT5m%2Bv8hGUK%2Bld1FL61y1jEeqUW%2Fd%2Bo6AiEArMQkvE430RoCtqs0vP%2FjomeWN8TLRWoRHeRwy1X5RHYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBznOI0aX4FgH%2BCfWircAx10oxMpiJTSel0Xx1mgX1gQVLf15Z%2BX1BZE6g5QSsjTBauoIkEtPHpDRINiwf4q68V7ClaiYlR%2Blg6tD6t80ZVZdvoeQUpTTVTXeIxQfRWqrK7NpdbArMPKi2CTsEjQsais6BTZU%2BS7TnOQvJlRpy1flzGJ%2F9%2BgWMZDlpX2kcYIe17NITmwqoet5Zv7tQInhpzik0f1Qo3mdWYAEAjQssFVmvEFIlo09kRBBRIoAzS6y6hvTUqv8EC3j1u6Q%2FfPzoNT0%2BSJijXdE%2BHS4tkwwc2XUVGtL%2B3PhyBDAon7mC82wrhiLS1PuKwlbYTaaSLJLqFRn9ulrRNL7d%2BHrEsGQx7Xy5T3NXnJc%2BSK%2Bu1lhSLndCtsEFKl78VSOvo4bhGBp5oe0i8UyU24QEX8yfTn9hI38Tsp3OBRuQrflgmASCEVnF2VrGhY7My68kuGv0PxgbzPNVrWAGqn2XAKxgOhnZ6NMbyOXja05sn%2B27%2FauK6j%2F6RnSMhE%2F%2BQQEdXxzDv9VPedQsJJu1hwZZBlAtX8xYiZn0%2FEQ1UNtWPMwce9Vedj2CjFVWV%2F1N51y67RU7couWrSO2IGXK5l%2B69%2B2OXNhO%2FNJ%2FuQjRUe%2FBUxmNR0hG9bmRypPOoQlMRoRgR2MPGQgb4GOqUB81TFczwf8wIdplQ%2FsTxV4bDOmrkcA%2Fsnmu%2F%2FiU4%2FQJLFsoU5pIOfVrSnzH2IBqAbWcnU7hHUoLhepMmf%2FYnO33wvg%2FN7cqoiCsjQMqnZIHw51ZwlGPZqucFRXlbIPsrEbf2P%2BSuCVYuNVLUfLCPK2pAbtNR54UUIYv0%2F7%2Fx%2BAzzK5VrZasviaqoGYmk5LNTuqeLcw2KElZEloyak4VpmIZ7EhUMg&X-Amz-Signature=1b3489c94ef020332a92736b995da14aa4f4ca61e442e119038129d804536bff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GQQNQP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIEmGICdr4y9MLT5m%2Bv8hGUK%2Bld1FL61y1jEeqUW%2Fd%2Bo6AiEArMQkvE430RoCtqs0vP%2FjomeWN8TLRWoRHeRwy1X5RHYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBznOI0aX4FgH%2BCfWircAx10oxMpiJTSel0Xx1mgX1gQVLf15Z%2BX1BZE6g5QSsjTBauoIkEtPHpDRINiwf4q68V7ClaiYlR%2Blg6tD6t80ZVZdvoeQUpTTVTXeIxQfRWqrK7NpdbArMPKi2CTsEjQsais6BTZU%2BS7TnOQvJlRpy1flzGJ%2F9%2BgWMZDlpX2kcYIe17NITmwqoet5Zv7tQInhpzik0f1Qo3mdWYAEAjQssFVmvEFIlo09kRBBRIoAzS6y6hvTUqv8EC3j1u6Q%2FfPzoNT0%2BSJijXdE%2BHS4tkwwc2XUVGtL%2B3PhyBDAon7mC82wrhiLS1PuKwlbYTaaSLJLqFRn9ulrRNL7d%2BHrEsGQx7Xy5T3NXnJc%2BSK%2Bu1lhSLndCtsEFKl78VSOvo4bhGBp5oe0i8UyU24QEX8yfTn9hI38Tsp3OBRuQrflgmASCEVnF2VrGhY7My68kuGv0PxgbzPNVrWAGqn2XAKxgOhnZ6NMbyOXja05sn%2B27%2FauK6j%2F6RnSMhE%2F%2BQQEdXxzDv9VPedQsJJu1hwZZBlAtX8xYiZn0%2FEQ1UNtWPMwce9Vedj2CjFVWV%2F1N51y67RU7couWrSO2IGXK5l%2B69%2B2OXNhO%2FNJ%2FuQjRUe%2FBUxmNR0hG9bmRypPOoQlMRoRgR2MPGQgb4GOqUB81TFczwf8wIdplQ%2FsTxV4bDOmrkcA%2Fsnmu%2F%2FiU4%2FQJLFsoU5pIOfVrSnzH2IBqAbWcnU7hHUoLhepMmf%2FYnO33wvg%2FN7cqoiCsjQMqnZIHw51ZwlGPZqucFRXlbIPsrEbf2P%2BSuCVYuNVLUfLCPK2pAbtNR54UUIYv0%2F7%2Fx%2BAzzK5VrZasviaqoGYmk5LNTuqeLcw2KElZEloyak4VpmIZ7EhUMg&X-Amz-Signature=3691bb2a9f78e167486f1293206630b6b9be57f3312ec9906037b32398671d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GQQNQP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIEmGICdr4y9MLT5m%2Bv8hGUK%2Bld1FL61y1jEeqUW%2Fd%2Bo6AiEArMQkvE430RoCtqs0vP%2FjomeWN8TLRWoRHeRwy1X5RHYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBznOI0aX4FgH%2BCfWircAx10oxMpiJTSel0Xx1mgX1gQVLf15Z%2BX1BZE6g5QSsjTBauoIkEtPHpDRINiwf4q68V7ClaiYlR%2Blg6tD6t80ZVZdvoeQUpTTVTXeIxQfRWqrK7NpdbArMPKi2CTsEjQsais6BTZU%2BS7TnOQvJlRpy1flzGJ%2F9%2BgWMZDlpX2kcYIe17NITmwqoet5Zv7tQInhpzik0f1Qo3mdWYAEAjQssFVmvEFIlo09kRBBRIoAzS6y6hvTUqv8EC3j1u6Q%2FfPzoNT0%2BSJijXdE%2BHS4tkwwc2XUVGtL%2B3PhyBDAon7mC82wrhiLS1PuKwlbYTaaSLJLqFRn9ulrRNL7d%2BHrEsGQx7Xy5T3NXnJc%2BSK%2Bu1lhSLndCtsEFKl78VSOvo4bhGBp5oe0i8UyU24QEX8yfTn9hI38Tsp3OBRuQrflgmASCEVnF2VrGhY7My68kuGv0PxgbzPNVrWAGqn2XAKxgOhnZ6NMbyOXja05sn%2B27%2FauK6j%2F6RnSMhE%2F%2BQQEdXxzDv9VPedQsJJu1hwZZBlAtX8xYiZn0%2FEQ1UNtWPMwce9Vedj2CjFVWV%2F1N51y67RU7couWrSO2IGXK5l%2B69%2B2OXNhO%2FNJ%2FuQjRUe%2FBUxmNR0hG9bmRypPOoQlMRoRgR2MPGQgb4GOqUB81TFczwf8wIdplQ%2FsTxV4bDOmrkcA%2Fsnmu%2F%2FiU4%2FQJLFsoU5pIOfVrSnzH2IBqAbWcnU7hHUoLhepMmf%2FYnO33wvg%2FN7cqoiCsjQMqnZIHw51ZwlGPZqucFRXlbIPsrEbf2P%2BSuCVYuNVLUfLCPK2pAbtNR54UUIYv0%2F7%2Fx%2BAzzK5VrZasviaqoGYmk5LNTuqeLcw2KElZEloyak4VpmIZ7EhUMg&X-Amz-Signature=8711756110a1af6934b190902f597f774609527e55d8c3d30f18827ad2a91b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GQQNQP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIEmGICdr4y9MLT5m%2Bv8hGUK%2Bld1FL61y1jEeqUW%2Fd%2Bo6AiEArMQkvE430RoCtqs0vP%2FjomeWN8TLRWoRHeRwy1X5RHYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBznOI0aX4FgH%2BCfWircAx10oxMpiJTSel0Xx1mgX1gQVLf15Z%2BX1BZE6g5QSsjTBauoIkEtPHpDRINiwf4q68V7ClaiYlR%2Blg6tD6t80ZVZdvoeQUpTTVTXeIxQfRWqrK7NpdbArMPKi2CTsEjQsais6BTZU%2BS7TnOQvJlRpy1flzGJ%2F9%2BgWMZDlpX2kcYIe17NITmwqoet5Zv7tQInhpzik0f1Qo3mdWYAEAjQssFVmvEFIlo09kRBBRIoAzS6y6hvTUqv8EC3j1u6Q%2FfPzoNT0%2BSJijXdE%2BHS4tkwwc2XUVGtL%2B3PhyBDAon7mC82wrhiLS1PuKwlbYTaaSLJLqFRn9ulrRNL7d%2BHrEsGQx7Xy5T3NXnJc%2BSK%2Bu1lhSLndCtsEFKl78VSOvo4bhGBp5oe0i8UyU24QEX8yfTn9hI38Tsp3OBRuQrflgmASCEVnF2VrGhY7My68kuGv0PxgbzPNVrWAGqn2XAKxgOhnZ6NMbyOXja05sn%2B27%2FauK6j%2F6RnSMhE%2F%2BQQEdXxzDv9VPedQsJJu1hwZZBlAtX8xYiZn0%2FEQ1UNtWPMwce9Vedj2CjFVWV%2F1N51y67RU7couWrSO2IGXK5l%2B69%2B2OXNhO%2FNJ%2FuQjRUe%2FBUxmNR0hG9bmRypPOoQlMRoRgR2MPGQgb4GOqUB81TFczwf8wIdplQ%2FsTxV4bDOmrkcA%2Fsnmu%2F%2FiU4%2FQJLFsoU5pIOfVrSnzH2IBqAbWcnU7hHUoLhepMmf%2FYnO33wvg%2FN7cqoiCsjQMqnZIHw51ZwlGPZqucFRXlbIPsrEbf2P%2BSuCVYuNVLUfLCPK2pAbtNR54UUIYv0%2F7%2Fx%2BAzzK5VrZasviaqoGYmk5LNTuqeLcw2KElZEloyak4VpmIZ7EhUMg&X-Amz-Signature=baff586c6776656ec1d53f3fac46ca8a689d1160bfa1bd39e515fa69c1bd1ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GQQNQP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIEmGICdr4y9MLT5m%2Bv8hGUK%2Bld1FL61y1jEeqUW%2Fd%2Bo6AiEArMQkvE430RoCtqs0vP%2FjomeWN8TLRWoRHeRwy1X5RHYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBznOI0aX4FgH%2BCfWircAx10oxMpiJTSel0Xx1mgX1gQVLf15Z%2BX1BZE6g5QSsjTBauoIkEtPHpDRINiwf4q68V7ClaiYlR%2Blg6tD6t80ZVZdvoeQUpTTVTXeIxQfRWqrK7NpdbArMPKi2CTsEjQsais6BTZU%2BS7TnOQvJlRpy1flzGJ%2F9%2BgWMZDlpX2kcYIe17NITmwqoet5Zv7tQInhpzik0f1Qo3mdWYAEAjQssFVmvEFIlo09kRBBRIoAzS6y6hvTUqv8EC3j1u6Q%2FfPzoNT0%2BSJijXdE%2BHS4tkwwc2XUVGtL%2B3PhyBDAon7mC82wrhiLS1PuKwlbYTaaSLJLqFRn9ulrRNL7d%2BHrEsGQx7Xy5T3NXnJc%2BSK%2Bu1lhSLndCtsEFKl78VSOvo4bhGBp5oe0i8UyU24QEX8yfTn9hI38Tsp3OBRuQrflgmASCEVnF2VrGhY7My68kuGv0PxgbzPNVrWAGqn2XAKxgOhnZ6NMbyOXja05sn%2B27%2FauK6j%2F6RnSMhE%2F%2BQQEdXxzDv9VPedQsJJu1hwZZBlAtX8xYiZn0%2FEQ1UNtWPMwce9Vedj2CjFVWV%2F1N51y67RU7couWrSO2IGXK5l%2B69%2B2OXNhO%2FNJ%2FuQjRUe%2FBUxmNR0hG9bmRypPOoQlMRoRgR2MPGQgb4GOqUB81TFczwf8wIdplQ%2FsTxV4bDOmrkcA%2Fsnmu%2F%2FiU4%2FQJLFsoU5pIOfVrSnzH2IBqAbWcnU7hHUoLhepMmf%2FYnO33wvg%2FN7cqoiCsjQMqnZIHw51ZwlGPZqucFRXlbIPsrEbf2P%2BSuCVYuNVLUfLCPK2pAbtNR54UUIYv0%2F7%2Fx%2BAzzK5VrZasviaqoGYmk5LNTuqeLcw2KElZEloyak4VpmIZ7EhUMg&X-Amz-Signature=08c3b1bf74191aefadbae15347dbf4c00550b3e88c3c26057a1e62181f60f96c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
