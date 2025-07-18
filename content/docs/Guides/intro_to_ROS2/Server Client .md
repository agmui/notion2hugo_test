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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WITAZKT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICn2mMp1ZEwpAnmwpKKlYstom57iLehE0O2DLGucxtucAiEA0lrQKWdTzlOesYhVmSi9YCS%2BHd0apKgpQ0mXpCLYtCsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNFJJWa%2BkpT57IDQyrcA8HqfUB2EE0obQb2b0Z6DpEhM85etp%2BD7J09hUSby1MWdOj0BTkQKBp%2BAdG0K01BntCbUZ3JfCxp6oiP%2BoholrcjxLVhI3PrOiqzV98lOdm4B9kMfjhy1wkX4BolONrbvkKFV0Tc21S5qF05OhkWEaPThy%2FO8d26EtJobgrOztR0VU%2BmC6OyKkTrBJYtevgCJCoVcFWH2Iyn%2BNNpfIsJlw21d41S1N3f86N0Vsi%2BGQlMGtYKA7DrQHxyBU2Uy8U6z5U5UGbmwWjrWz%2BQ8%2FbocyGyI%2BStOYwhxK8ZDCMc3E7vSGUbfKiARMinFBkraDEM7JoCUc1IQUFZ0sa8f3w5nm83sOOFdNINCPOkUItF1Y%2FUSWNOHrvwfvlVxxRJQcJJ%2FnCOQZ6tNYfFwZaZAdfh%2FihtfeBjg1s6zmZjDG6ErehI%2FY702PKVfZd8DvsWJgpHHGWxjG8IbeQ0btA64VarHUtRnpz%2BSov59D7OV%2F2PjRo1lXOzsjBKAXkCRlxusbS5d546WfYEz2Bdr5weHAEA6dpZpLgSal4ipLkXblRhqCeJf4Y5aHyGaCTUyMm2PRNwL7BkYJVXQVxHjQcoxGJPIEUGEbvF3cy6o3i9RPi3ANTi2h6DeWlhj24s8iMKMK6K68MGOqUBp6thDdGu%2FCN7rBPblPNcLD2CJ8Qp3g8LeCmUMzIWZP4M1JMgIdeonrtOTVS%2Bppr1ZXRzeew%2BduC84fqInVEQl1aWCs%2FfO7ljmPDwbW10iL6M0177BIzQg8H4eQEm0%2FSpTVFdJHjLxun5TJsWGVDSNtmVceUPPocJ2Jfl3KAaQgmmJHa0k1HmH%2BMowBJ0P0UBQo%2FQ%2BIn8EHa78pgSm5Q7jxy%2FsdKB&X-Amz-Signature=b5a8b427794d2d04804765c31ee25663a95e135e6329cfe3bab388347aa4f7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WITAZKT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICn2mMp1ZEwpAnmwpKKlYstom57iLehE0O2DLGucxtucAiEA0lrQKWdTzlOesYhVmSi9YCS%2BHd0apKgpQ0mXpCLYtCsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNFJJWa%2BkpT57IDQyrcA8HqfUB2EE0obQb2b0Z6DpEhM85etp%2BD7J09hUSby1MWdOj0BTkQKBp%2BAdG0K01BntCbUZ3JfCxp6oiP%2BoholrcjxLVhI3PrOiqzV98lOdm4B9kMfjhy1wkX4BolONrbvkKFV0Tc21S5qF05OhkWEaPThy%2FO8d26EtJobgrOztR0VU%2BmC6OyKkTrBJYtevgCJCoVcFWH2Iyn%2BNNpfIsJlw21d41S1N3f86N0Vsi%2BGQlMGtYKA7DrQHxyBU2Uy8U6z5U5UGbmwWjrWz%2BQ8%2FbocyGyI%2BStOYwhxK8ZDCMc3E7vSGUbfKiARMinFBkraDEM7JoCUc1IQUFZ0sa8f3w5nm83sOOFdNINCPOkUItF1Y%2FUSWNOHrvwfvlVxxRJQcJJ%2FnCOQZ6tNYfFwZaZAdfh%2FihtfeBjg1s6zmZjDG6ErehI%2FY702PKVfZd8DvsWJgpHHGWxjG8IbeQ0btA64VarHUtRnpz%2BSov59D7OV%2F2PjRo1lXOzsjBKAXkCRlxusbS5d546WfYEz2Bdr5weHAEA6dpZpLgSal4ipLkXblRhqCeJf4Y5aHyGaCTUyMm2PRNwL7BkYJVXQVxHjQcoxGJPIEUGEbvF3cy6o3i9RPi3ANTi2h6DeWlhj24s8iMKMK6K68MGOqUBp6thDdGu%2FCN7rBPblPNcLD2CJ8Qp3g8LeCmUMzIWZP4M1JMgIdeonrtOTVS%2Bppr1ZXRzeew%2BduC84fqInVEQl1aWCs%2FfO7ljmPDwbW10iL6M0177BIzQg8H4eQEm0%2FSpTVFdJHjLxun5TJsWGVDSNtmVceUPPocJ2Jfl3KAaQgmmJHa0k1HmH%2BMowBJ0P0UBQo%2FQ%2BIn8EHa78pgSm5Q7jxy%2FsdKB&X-Amz-Signature=24c4b8d53175886719fef4c3a462923070e582dfbba35f95d481c623871f49c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WITAZKT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICn2mMp1ZEwpAnmwpKKlYstom57iLehE0O2DLGucxtucAiEA0lrQKWdTzlOesYhVmSi9YCS%2BHd0apKgpQ0mXpCLYtCsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNFJJWa%2BkpT57IDQyrcA8HqfUB2EE0obQb2b0Z6DpEhM85etp%2BD7J09hUSby1MWdOj0BTkQKBp%2BAdG0K01BntCbUZ3JfCxp6oiP%2BoholrcjxLVhI3PrOiqzV98lOdm4B9kMfjhy1wkX4BolONrbvkKFV0Tc21S5qF05OhkWEaPThy%2FO8d26EtJobgrOztR0VU%2BmC6OyKkTrBJYtevgCJCoVcFWH2Iyn%2BNNpfIsJlw21d41S1N3f86N0Vsi%2BGQlMGtYKA7DrQHxyBU2Uy8U6z5U5UGbmwWjrWz%2BQ8%2FbocyGyI%2BStOYwhxK8ZDCMc3E7vSGUbfKiARMinFBkraDEM7JoCUc1IQUFZ0sa8f3w5nm83sOOFdNINCPOkUItF1Y%2FUSWNOHrvwfvlVxxRJQcJJ%2FnCOQZ6tNYfFwZaZAdfh%2FihtfeBjg1s6zmZjDG6ErehI%2FY702PKVfZd8DvsWJgpHHGWxjG8IbeQ0btA64VarHUtRnpz%2BSov59D7OV%2F2PjRo1lXOzsjBKAXkCRlxusbS5d546WfYEz2Bdr5weHAEA6dpZpLgSal4ipLkXblRhqCeJf4Y5aHyGaCTUyMm2PRNwL7BkYJVXQVxHjQcoxGJPIEUGEbvF3cy6o3i9RPi3ANTi2h6DeWlhj24s8iMKMK6K68MGOqUBp6thDdGu%2FCN7rBPblPNcLD2CJ8Qp3g8LeCmUMzIWZP4M1JMgIdeonrtOTVS%2Bppr1ZXRzeew%2BduC84fqInVEQl1aWCs%2FfO7ljmPDwbW10iL6M0177BIzQg8H4eQEm0%2FSpTVFdJHjLxun5TJsWGVDSNtmVceUPPocJ2Jfl3KAaQgmmJHa0k1HmH%2BMowBJ0P0UBQo%2FQ%2BIn8EHa78pgSm5Q7jxy%2FsdKB&X-Amz-Signature=fbf9f8ecedbd35c428458e6122bb44bc53396dbd763b5bf62655e4309a3f9aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WITAZKT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICn2mMp1ZEwpAnmwpKKlYstom57iLehE0O2DLGucxtucAiEA0lrQKWdTzlOesYhVmSi9YCS%2BHd0apKgpQ0mXpCLYtCsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNFJJWa%2BkpT57IDQyrcA8HqfUB2EE0obQb2b0Z6DpEhM85etp%2BD7J09hUSby1MWdOj0BTkQKBp%2BAdG0K01BntCbUZ3JfCxp6oiP%2BoholrcjxLVhI3PrOiqzV98lOdm4B9kMfjhy1wkX4BolONrbvkKFV0Tc21S5qF05OhkWEaPThy%2FO8d26EtJobgrOztR0VU%2BmC6OyKkTrBJYtevgCJCoVcFWH2Iyn%2BNNpfIsJlw21d41S1N3f86N0Vsi%2BGQlMGtYKA7DrQHxyBU2Uy8U6z5U5UGbmwWjrWz%2BQ8%2FbocyGyI%2BStOYwhxK8ZDCMc3E7vSGUbfKiARMinFBkraDEM7JoCUc1IQUFZ0sa8f3w5nm83sOOFdNINCPOkUItF1Y%2FUSWNOHrvwfvlVxxRJQcJJ%2FnCOQZ6tNYfFwZaZAdfh%2FihtfeBjg1s6zmZjDG6ErehI%2FY702PKVfZd8DvsWJgpHHGWxjG8IbeQ0btA64VarHUtRnpz%2BSov59D7OV%2F2PjRo1lXOzsjBKAXkCRlxusbS5d546WfYEz2Bdr5weHAEA6dpZpLgSal4ipLkXblRhqCeJf4Y5aHyGaCTUyMm2PRNwL7BkYJVXQVxHjQcoxGJPIEUGEbvF3cy6o3i9RPi3ANTi2h6DeWlhj24s8iMKMK6K68MGOqUBp6thDdGu%2FCN7rBPblPNcLD2CJ8Qp3g8LeCmUMzIWZP4M1JMgIdeonrtOTVS%2Bppr1ZXRzeew%2BduC84fqInVEQl1aWCs%2FfO7ljmPDwbW10iL6M0177BIzQg8H4eQEm0%2FSpTVFdJHjLxun5TJsWGVDSNtmVceUPPocJ2Jfl3KAaQgmmJHa0k1HmH%2BMowBJ0P0UBQo%2FQ%2BIn8EHa78pgSm5Q7jxy%2FsdKB&X-Amz-Signature=fe1cd3086999e4b7724a64c9b44dfb8433400663576b819a720bd40276002b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WITAZKT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICn2mMp1ZEwpAnmwpKKlYstom57iLehE0O2DLGucxtucAiEA0lrQKWdTzlOesYhVmSi9YCS%2BHd0apKgpQ0mXpCLYtCsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNFJJWa%2BkpT57IDQyrcA8HqfUB2EE0obQb2b0Z6DpEhM85etp%2BD7J09hUSby1MWdOj0BTkQKBp%2BAdG0K01BntCbUZ3JfCxp6oiP%2BoholrcjxLVhI3PrOiqzV98lOdm4B9kMfjhy1wkX4BolONrbvkKFV0Tc21S5qF05OhkWEaPThy%2FO8d26EtJobgrOztR0VU%2BmC6OyKkTrBJYtevgCJCoVcFWH2Iyn%2BNNpfIsJlw21d41S1N3f86N0Vsi%2BGQlMGtYKA7DrQHxyBU2Uy8U6z5U5UGbmwWjrWz%2BQ8%2FbocyGyI%2BStOYwhxK8ZDCMc3E7vSGUbfKiARMinFBkraDEM7JoCUc1IQUFZ0sa8f3w5nm83sOOFdNINCPOkUItF1Y%2FUSWNOHrvwfvlVxxRJQcJJ%2FnCOQZ6tNYfFwZaZAdfh%2FihtfeBjg1s6zmZjDG6ErehI%2FY702PKVfZd8DvsWJgpHHGWxjG8IbeQ0btA64VarHUtRnpz%2BSov59D7OV%2F2PjRo1lXOzsjBKAXkCRlxusbS5d546WfYEz2Bdr5weHAEA6dpZpLgSal4ipLkXblRhqCeJf4Y5aHyGaCTUyMm2PRNwL7BkYJVXQVxHjQcoxGJPIEUGEbvF3cy6o3i9RPi3ANTi2h6DeWlhj24s8iMKMK6K68MGOqUBp6thDdGu%2FCN7rBPblPNcLD2CJ8Qp3g8LeCmUMzIWZP4M1JMgIdeonrtOTVS%2Bppr1ZXRzeew%2BduC84fqInVEQl1aWCs%2FfO7ljmPDwbW10iL6M0177BIzQg8H4eQEm0%2FSpTVFdJHjLxun5TJsWGVDSNtmVceUPPocJ2Jfl3KAaQgmmJHa0k1HmH%2BMowBJ0P0UBQo%2FQ%2BIn8EHa78pgSm5Q7jxy%2FsdKB&X-Amz-Signature=e5c7199a86234e117e4b2c8d7bca0cd5896d566e08aa20693303766e5eacec93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
