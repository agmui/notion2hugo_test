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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSS56WJI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIB14HSANSTsyoZ%2FARnh64AWJalGldp6RcymHLlHDLHwxAiEAnFnyWOyubTorOjUpUzFePCv6Ovkp9bOpgamDcsQyDUYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR9tggtNujVzx04ZyrcA84010c3zsR50D%2BSqRXi9micKPLzJmUqvD%2FrfL5bSNrO%2BRCS2V8aCYRckNlf1VU4E%2BF1bUaxNSmAqVwFU%2FrFzKZeG5vjL9KKJSlvHh5vhhHgunYeK40DjSFjI3AMxydJSrTtIVzrFkuYO7WHztqsB6WIWH0zaKLWsI8mXdCFKjNgFGLOrkJrnuYi2Fp%2BJDhNCHzCt0JosvNtzNm2PLjHrB6xt8zbCwo%2FRnSBmfHpPQguR0OmUbUeIyK%2BEzc39ivgMYZJoSISknqoXPQqUfUz7aT%2BewLt0kVHMiCBv%2BoPzy3WBUXG08FD16F%2BPTBJQPyvG%2BJ8tbizjLUwv7TcGBnBhFg5f%2B8LErf%2B8WhgrhclVHHKnN29utnWQcjGFpQrkc1T5LPBZy7DestISfhb3WCTHDQt1AcU32L2USknWCpI%2FyRHVpA0Oi6YNZu22D9tpko0oTSIPorhvByB1d1NOO2O07%2BLF8pBfKt6fzkaoBcc4rwYQYyJCVP4OGMZIBJ%2BdFLBEFFsL6OAO6mirxKM5GRMUViR%2BdUBMSe0rhXAnaGc9SVg1%2FGX2rbeQpgZmmEsrmDnaGuA2WVliAWpizMGRfckO9zJIDltTZ0yTzssBFGShriTS%2BnWaIbWRZ5aISZAMN%2BGj8QGOqUB8F%2FGhq37OIHVqt84j5PBmcmmLNKhO5B3rdLq1j0XYUnFjFc3b33GXDaNi6OZn3jQFuKKW5%2B4wtlSUQnZ12%2BTaUKB6nNGVCzepcUL6BPx%2FvMjyD0Uht%2BtBMvxuNYQM5iK2fZmRCKPHSZeBJqGmog91BK3UnSgS0Boua6Th8cJ4hZWs%2BAJSAPqc5jMTdRjFFs6Rc%2FEKrkw0sy71p0u%2FJ%2F9UuuQLKZt&X-Amz-Signature=951119b79dd2bb8d54d88d336434f5bb5304a75b7d2c773e11fb95621f5257f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSS56WJI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIB14HSANSTsyoZ%2FARnh64AWJalGldp6RcymHLlHDLHwxAiEAnFnyWOyubTorOjUpUzFePCv6Ovkp9bOpgamDcsQyDUYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR9tggtNujVzx04ZyrcA84010c3zsR50D%2BSqRXi9micKPLzJmUqvD%2FrfL5bSNrO%2BRCS2V8aCYRckNlf1VU4E%2BF1bUaxNSmAqVwFU%2FrFzKZeG5vjL9KKJSlvHh5vhhHgunYeK40DjSFjI3AMxydJSrTtIVzrFkuYO7WHztqsB6WIWH0zaKLWsI8mXdCFKjNgFGLOrkJrnuYi2Fp%2BJDhNCHzCt0JosvNtzNm2PLjHrB6xt8zbCwo%2FRnSBmfHpPQguR0OmUbUeIyK%2BEzc39ivgMYZJoSISknqoXPQqUfUz7aT%2BewLt0kVHMiCBv%2BoPzy3WBUXG08FD16F%2BPTBJQPyvG%2BJ8tbizjLUwv7TcGBnBhFg5f%2B8LErf%2B8WhgrhclVHHKnN29utnWQcjGFpQrkc1T5LPBZy7DestISfhb3WCTHDQt1AcU32L2USknWCpI%2FyRHVpA0Oi6YNZu22D9tpko0oTSIPorhvByB1d1NOO2O07%2BLF8pBfKt6fzkaoBcc4rwYQYyJCVP4OGMZIBJ%2BdFLBEFFsL6OAO6mirxKM5GRMUViR%2BdUBMSe0rhXAnaGc9SVg1%2FGX2rbeQpgZmmEsrmDnaGuA2WVliAWpizMGRfckO9zJIDltTZ0yTzssBFGShriTS%2BnWaIbWRZ5aISZAMN%2BGj8QGOqUB8F%2FGhq37OIHVqt84j5PBmcmmLNKhO5B3rdLq1j0XYUnFjFc3b33GXDaNi6OZn3jQFuKKW5%2B4wtlSUQnZ12%2BTaUKB6nNGVCzepcUL6BPx%2FvMjyD0Uht%2BtBMvxuNYQM5iK2fZmRCKPHSZeBJqGmog91BK3UnSgS0Boua6Th8cJ4hZWs%2BAJSAPqc5jMTdRjFFs6Rc%2FEKrkw0sy71p0u%2FJ%2F9UuuQLKZt&X-Amz-Signature=546352c33da916396d0254649a46737695ae78dacc062ae7eb96399a8461109a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSS56WJI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIB14HSANSTsyoZ%2FARnh64AWJalGldp6RcymHLlHDLHwxAiEAnFnyWOyubTorOjUpUzFePCv6Ovkp9bOpgamDcsQyDUYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR9tggtNujVzx04ZyrcA84010c3zsR50D%2BSqRXi9micKPLzJmUqvD%2FrfL5bSNrO%2BRCS2V8aCYRckNlf1VU4E%2BF1bUaxNSmAqVwFU%2FrFzKZeG5vjL9KKJSlvHh5vhhHgunYeK40DjSFjI3AMxydJSrTtIVzrFkuYO7WHztqsB6WIWH0zaKLWsI8mXdCFKjNgFGLOrkJrnuYi2Fp%2BJDhNCHzCt0JosvNtzNm2PLjHrB6xt8zbCwo%2FRnSBmfHpPQguR0OmUbUeIyK%2BEzc39ivgMYZJoSISknqoXPQqUfUz7aT%2BewLt0kVHMiCBv%2BoPzy3WBUXG08FD16F%2BPTBJQPyvG%2BJ8tbizjLUwv7TcGBnBhFg5f%2B8LErf%2B8WhgrhclVHHKnN29utnWQcjGFpQrkc1T5LPBZy7DestISfhb3WCTHDQt1AcU32L2USknWCpI%2FyRHVpA0Oi6YNZu22D9tpko0oTSIPorhvByB1d1NOO2O07%2BLF8pBfKt6fzkaoBcc4rwYQYyJCVP4OGMZIBJ%2BdFLBEFFsL6OAO6mirxKM5GRMUViR%2BdUBMSe0rhXAnaGc9SVg1%2FGX2rbeQpgZmmEsrmDnaGuA2WVliAWpizMGRfckO9zJIDltTZ0yTzssBFGShriTS%2BnWaIbWRZ5aISZAMN%2BGj8QGOqUB8F%2FGhq37OIHVqt84j5PBmcmmLNKhO5B3rdLq1j0XYUnFjFc3b33GXDaNi6OZn3jQFuKKW5%2B4wtlSUQnZ12%2BTaUKB6nNGVCzepcUL6BPx%2FvMjyD0Uht%2BtBMvxuNYQM5iK2fZmRCKPHSZeBJqGmog91BK3UnSgS0Boua6Th8cJ4hZWs%2BAJSAPqc5jMTdRjFFs6Rc%2FEKrkw0sy71p0u%2FJ%2F9UuuQLKZt&X-Amz-Signature=b76cad69d1186cf7958b03559acc6db0fcd407fe8c1f544115c872e5d64a8313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSS56WJI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIB14HSANSTsyoZ%2FARnh64AWJalGldp6RcymHLlHDLHwxAiEAnFnyWOyubTorOjUpUzFePCv6Ovkp9bOpgamDcsQyDUYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR9tggtNujVzx04ZyrcA84010c3zsR50D%2BSqRXi9micKPLzJmUqvD%2FrfL5bSNrO%2BRCS2V8aCYRckNlf1VU4E%2BF1bUaxNSmAqVwFU%2FrFzKZeG5vjL9KKJSlvHh5vhhHgunYeK40DjSFjI3AMxydJSrTtIVzrFkuYO7WHztqsB6WIWH0zaKLWsI8mXdCFKjNgFGLOrkJrnuYi2Fp%2BJDhNCHzCt0JosvNtzNm2PLjHrB6xt8zbCwo%2FRnSBmfHpPQguR0OmUbUeIyK%2BEzc39ivgMYZJoSISknqoXPQqUfUz7aT%2BewLt0kVHMiCBv%2BoPzy3WBUXG08FD16F%2BPTBJQPyvG%2BJ8tbizjLUwv7TcGBnBhFg5f%2B8LErf%2B8WhgrhclVHHKnN29utnWQcjGFpQrkc1T5LPBZy7DestISfhb3WCTHDQt1AcU32L2USknWCpI%2FyRHVpA0Oi6YNZu22D9tpko0oTSIPorhvByB1d1NOO2O07%2BLF8pBfKt6fzkaoBcc4rwYQYyJCVP4OGMZIBJ%2BdFLBEFFsL6OAO6mirxKM5GRMUViR%2BdUBMSe0rhXAnaGc9SVg1%2FGX2rbeQpgZmmEsrmDnaGuA2WVliAWpizMGRfckO9zJIDltTZ0yTzssBFGShriTS%2BnWaIbWRZ5aISZAMN%2BGj8QGOqUB8F%2FGhq37OIHVqt84j5PBmcmmLNKhO5B3rdLq1j0XYUnFjFc3b33GXDaNi6OZn3jQFuKKW5%2B4wtlSUQnZ12%2BTaUKB6nNGVCzepcUL6BPx%2FvMjyD0Uht%2BtBMvxuNYQM5iK2fZmRCKPHSZeBJqGmog91BK3UnSgS0Boua6Th8cJ4hZWs%2BAJSAPqc5jMTdRjFFs6Rc%2FEKrkw0sy71p0u%2FJ%2F9UuuQLKZt&X-Amz-Signature=a91df8c534d87902ecb0107c93fad2d1851aaa474023271ed7da0a71de425b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSS56WJI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIB14HSANSTsyoZ%2FARnh64AWJalGldp6RcymHLlHDLHwxAiEAnFnyWOyubTorOjUpUzFePCv6Ovkp9bOpgamDcsQyDUYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR9tggtNujVzx04ZyrcA84010c3zsR50D%2BSqRXi9micKPLzJmUqvD%2FrfL5bSNrO%2BRCS2V8aCYRckNlf1VU4E%2BF1bUaxNSmAqVwFU%2FrFzKZeG5vjL9KKJSlvHh5vhhHgunYeK40DjSFjI3AMxydJSrTtIVzrFkuYO7WHztqsB6WIWH0zaKLWsI8mXdCFKjNgFGLOrkJrnuYi2Fp%2BJDhNCHzCt0JosvNtzNm2PLjHrB6xt8zbCwo%2FRnSBmfHpPQguR0OmUbUeIyK%2BEzc39ivgMYZJoSISknqoXPQqUfUz7aT%2BewLt0kVHMiCBv%2BoPzy3WBUXG08FD16F%2BPTBJQPyvG%2BJ8tbizjLUwv7TcGBnBhFg5f%2B8LErf%2B8WhgrhclVHHKnN29utnWQcjGFpQrkc1T5LPBZy7DestISfhb3WCTHDQt1AcU32L2USknWCpI%2FyRHVpA0Oi6YNZu22D9tpko0oTSIPorhvByB1d1NOO2O07%2BLF8pBfKt6fzkaoBcc4rwYQYyJCVP4OGMZIBJ%2BdFLBEFFsL6OAO6mirxKM5GRMUViR%2BdUBMSe0rhXAnaGc9SVg1%2FGX2rbeQpgZmmEsrmDnaGuA2WVliAWpizMGRfckO9zJIDltTZ0yTzssBFGShriTS%2BnWaIbWRZ5aISZAMN%2BGj8QGOqUB8F%2FGhq37OIHVqt84j5PBmcmmLNKhO5B3rdLq1j0XYUnFjFc3b33GXDaNi6OZn3jQFuKKW5%2B4wtlSUQnZ12%2BTaUKB6nNGVCzepcUL6BPx%2FvMjyD0Uht%2BtBMvxuNYQM5iK2fZmRCKPHSZeBJqGmog91BK3UnSgS0Boua6Th8cJ4hZWs%2BAJSAPqc5jMTdRjFFs6Rc%2FEKrkw0sy71p0u%2FJ%2F9UuuQLKZt&X-Amz-Signature=7b0998630527acc38b14323561d4bb36fc009f6c55e3a0bf8389c53a10ab345f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
