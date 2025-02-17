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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MK5KBZD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDRmDzrK30uGcE5DlCILg1IlOlhlsvY%2BdQkZOxmpwq1CAiAyAi1ieVO4LvRRAWlXeJRjv9S4LVCl2x8HriOeV%2F759Sr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMydsh6up6x3bUHcnnKtwDEB8Peg%2BIkMP%2BFK3ysdPoZoRw1mxZEPOFaQZCWLZWoquX0COInP%2FyhCDMjyXn3roNg2hzenUh4wwFOmgY3hiSgiq0j%2F7uxjx793%2FiwDr7%2BGTYCznj32hwtgoMRgVEdA0sa4GpcAYvwmOpzpZASBi9d1cTNuJ1hU8E3fvm6J4VDP02g4ETbafBhXExFLKT43tdJnebXzNQIrdo%2FcT2WtjPhIln2LBxMgNnfdRbSOi6H%2FRMQa0%2BUkaO1YF3LKrBChmR9bti1IOKiKDKpdQpkPp7jxi%2Bu3EZy0J6W6jKiM1WOlLvTBb86aeDGWhcHLHPObB7naDgYSrTCTEEwnQGbPssjO1zwCSI48SpWKP4iY6dd68wE2Ww1zT2iGstT%2BuV0WrVTOnZUuBModf8lIVUkpjzCnNXHS%2B4Cv1BC3Nmxf%2BoAG1SivMqTGXOm0xwq4LROFmuh8xOKDMe46x%2BVaKAyQe1n6VndNdIjYq8S%2BJiTrKNugWERBbvniD8HOhZS06EAqokYjEkPOWr3k46ND9FIsU%2BXUDPMGOtiEqrQW0qK6E%2Bemvli42O6iEupMuH2xvBDnql8pH1YngB%2FG0Nq4QSCIjJgQUKScCbwEwj%2Bz6lrKZW1U4UjpvBB8dvkuzZAfIw6srOvQY6pgH7UWAicF4RgstktwfK2PbAydPTLfMIoxCrTjFthuUnLGfji1A62vWQtjaqtNk5Kd876VE%2FHcWYuIeJ9sh%2BJjW52HGABkU3AbpkeiTu137pVS0V4avBunz93vvmjKx6oK0XuilB%2FtOhG4NG4P6ZbTja23%2BmYNUuKNSR6S0WrCtV%2FKg4RKBDsUoAirW1Az4OIsn2S4Kco%2BYKokpsjY8kNFi0SQfaH7Fq&X-Amz-Signature=d6d7ba6b1bbfc6461e93846616f9438b74331bafb3f2e84a30cf92b6f8971a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MK5KBZD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDRmDzrK30uGcE5DlCILg1IlOlhlsvY%2BdQkZOxmpwq1CAiAyAi1ieVO4LvRRAWlXeJRjv9S4LVCl2x8HriOeV%2F759Sr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMydsh6up6x3bUHcnnKtwDEB8Peg%2BIkMP%2BFK3ysdPoZoRw1mxZEPOFaQZCWLZWoquX0COInP%2FyhCDMjyXn3roNg2hzenUh4wwFOmgY3hiSgiq0j%2F7uxjx793%2FiwDr7%2BGTYCznj32hwtgoMRgVEdA0sa4GpcAYvwmOpzpZASBi9d1cTNuJ1hU8E3fvm6J4VDP02g4ETbafBhXExFLKT43tdJnebXzNQIrdo%2FcT2WtjPhIln2LBxMgNnfdRbSOi6H%2FRMQa0%2BUkaO1YF3LKrBChmR9bti1IOKiKDKpdQpkPp7jxi%2Bu3EZy0J6W6jKiM1WOlLvTBb86aeDGWhcHLHPObB7naDgYSrTCTEEwnQGbPssjO1zwCSI48SpWKP4iY6dd68wE2Ww1zT2iGstT%2BuV0WrVTOnZUuBModf8lIVUkpjzCnNXHS%2B4Cv1BC3Nmxf%2BoAG1SivMqTGXOm0xwq4LROFmuh8xOKDMe46x%2BVaKAyQe1n6VndNdIjYq8S%2BJiTrKNugWERBbvniD8HOhZS06EAqokYjEkPOWr3k46ND9FIsU%2BXUDPMGOtiEqrQW0qK6E%2Bemvli42O6iEupMuH2xvBDnql8pH1YngB%2FG0Nq4QSCIjJgQUKScCbwEwj%2Bz6lrKZW1U4UjpvBB8dvkuzZAfIw6srOvQY6pgH7UWAicF4RgstktwfK2PbAydPTLfMIoxCrTjFthuUnLGfji1A62vWQtjaqtNk5Kd876VE%2FHcWYuIeJ9sh%2BJjW52HGABkU3AbpkeiTu137pVS0V4avBunz93vvmjKx6oK0XuilB%2FtOhG4NG4P6ZbTja23%2BmYNUuKNSR6S0WrCtV%2FKg4RKBDsUoAirW1Az4OIsn2S4Kco%2BYKokpsjY8kNFi0SQfaH7Fq&X-Amz-Signature=8f0646a4c1ecaa48cb4cd9965b58e5265d44d1d8407068d96078cb2af1101b42&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MK5KBZD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDRmDzrK30uGcE5DlCILg1IlOlhlsvY%2BdQkZOxmpwq1CAiAyAi1ieVO4LvRRAWlXeJRjv9S4LVCl2x8HriOeV%2F759Sr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMydsh6up6x3bUHcnnKtwDEB8Peg%2BIkMP%2BFK3ysdPoZoRw1mxZEPOFaQZCWLZWoquX0COInP%2FyhCDMjyXn3roNg2hzenUh4wwFOmgY3hiSgiq0j%2F7uxjx793%2FiwDr7%2BGTYCznj32hwtgoMRgVEdA0sa4GpcAYvwmOpzpZASBi9d1cTNuJ1hU8E3fvm6J4VDP02g4ETbafBhXExFLKT43tdJnebXzNQIrdo%2FcT2WtjPhIln2LBxMgNnfdRbSOi6H%2FRMQa0%2BUkaO1YF3LKrBChmR9bti1IOKiKDKpdQpkPp7jxi%2Bu3EZy0J6W6jKiM1WOlLvTBb86aeDGWhcHLHPObB7naDgYSrTCTEEwnQGbPssjO1zwCSI48SpWKP4iY6dd68wE2Ww1zT2iGstT%2BuV0WrVTOnZUuBModf8lIVUkpjzCnNXHS%2B4Cv1BC3Nmxf%2BoAG1SivMqTGXOm0xwq4LROFmuh8xOKDMe46x%2BVaKAyQe1n6VndNdIjYq8S%2BJiTrKNugWERBbvniD8HOhZS06EAqokYjEkPOWr3k46ND9FIsU%2BXUDPMGOtiEqrQW0qK6E%2Bemvli42O6iEupMuH2xvBDnql8pH1YngB%2FG0Nq4QSCIjJgQUKScCbwEwj%2Bz6lrKZW1U4UjpvBB8dvkuzZAfIw6srOvQY6pgH7UWAicF4RgstktwfK2PbAydPTLfMIoxCrTjFthuUnLGfji1A62vWQtjaqtNk5Kd876VE%2FHcWYuIeJ9sh%2BJjW52HGABkU3AbpkeiTu137pVS0V4avBunz93vvmjKx6oK0XuilB%2FtOhG4NG4P6ZbTja23%2BmYNUuKNSR6S0WrCtV%2FKg4RKBDsUoAirW1Az4OIsn2S4Kco%2BYKokpsjY8kNFi0SQfaH7Fq&X-Amz-Signature=7a7171adf62e67142c0dd18aa1b03141f53c8643f97225964ced02f10530f725&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MK5KBZD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDRmDzrK30uGcE5DlCILg1IlOlhlsvY%2BdQkZOxmpwq1CAiAyAi1ieVO4LvRRAWlXeJRjv9S4LVCl2x8HriOeV%2F759Sr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMydsh6up6x3bUHcnnKtwDEB8Peg%2BIkMP%2BFK3ysdPoZoRw1mxZEPOFaQZCWLZWoquX0COInP%2FyhCDMjyXn3roNg2hzenUh4wwFOmgY3hiSgiq0j%2F7uxjx793%2FiwDr7%2BGTYCznj32hwtgoMRgVEdA0sa4GpcAYvwmOpzpZASBi9d1cTNuJ1hU8E3fvm6J4VDP02g4ETbafBhXExFLKT43tdJnebXzNQIrdo%2FcT2WtjPhIln2LBxMgNnfdRbSOi6H%2FRMQa0%2BUkaO1YF3LKrBChmR9bti1IOKiKDKpdQpkPp7jxi%2Bu3EZy0J6W6jKiM1WOlLvTBb86aeDGWhcHLHPObB7naDgYSrTCTEEwnQGbPssjO1zwCSI48SpWKP4iY6dd68wE2Ww1zT2iGstT%2BuV0WrVTOnZUuBModf8lIVUkpjzCnNXHS%2B4Cv1BC3Nmxf%2BoAG1SivMqTGXOm0xwq4LROFmuh8xOKDMe46x%2BVaKAyQe1n6VndNdIjYq8S%2BJiTrKNugWERBbvniD8HOhZS06EAqokYjEkPOWr3k46ND9FIsU%2BXUDPMGOtiEqrQW0qK6E%2Bemvli42O6iEupMuH2xvBDnql8pH1YngB%2FG0Nq4QSCIjJgQUKScCbwEwj%2Bz6lrKZW1U4UjpvBB8dvkuzZAfIw6srOvQY6pgH7UWAicF4RgstktwfK2PbAydPTLfMIoxCrTjFthuUnLGfji1A62vWQtjaqtNk5Kd876VE%2FHcWYuIeJ9sh%2BJjW52HGABkU3AbpkeiTu137pVS0V4avBunz93vvmjKx6oK0XuilB%2FtOhG4NG4P6ZbTja23%2BmYNUuKNSR6S0WrCtV%2FKg4RKBDsUoAirW1Az4OIsn2S4Kco%2BYKokpsjY8kNFi0SQfaH7Fq&X-Amz-Signature=36a081d4bb9b1220ca824b5d97c1c12dd385c00242a622585696769b11d2f614&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MK5KBZD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDRmDzrK30uGcE5DlCILg1IlOlhlsvY%2BdQkZOxmpwq1CAiAyAi1ieVO4LvRRAWlXeJRjv9S4LVCl2x8HriOeV%2F759Sr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMydsh6up6x3bUHcnnKtwDEB8Peg%2BIkMP%2BFK3ysdPoZoRw1mxZEPOFaQZCWLZWoquX0COInP%2FyhCDMjyXn3roNg2hzenUh4wwFOmgY3hiSgiq0j%2F7uxjx793%2FiwDr7%2BGTYCznj32hwtgoMRgVEdA0sa4GpcAYvwmOpzpZASBi9d1cTNuJ1hU8E3fvm6J4VDP02g4ETbafBhXExFLKT43tdJnebXzNQIrdo%2FcT2WtjPhIln2LBxMgNnfdRbSOi6H%2FRMQa0%2BUkaO1YF3LKrBChmR9bti1IOKiKDKpdQpkPp7jxi%2Bu3EZy0J6W6jKiM1WOlLvTBb86aeDGWhcHLHPObB7naDgYSrTCTEEwnQGbPssjO1zwCSI48SpWKP4iY6dd68wE2Ww1zT2iGstT%2BuV0WrVTOnZUuBModf8lIVUkpjzCnNXHS%2B4Cv1BC3Nmxf%2BoAG1SivMqTGXOm0xwq4LROFmuh8xOKDMe46x%2BVaKAyQe1n6VndNdIjYq8S%2BJiTrKNugWERBbvniD8HOhZS06EAqokYjEkPOWr3k46ND9FIsU%2BXUDPMGOtiEqrQW0qK6E%2Bemvli42O6iEupMuH2xvBDnql8pH1YngB%2FG0Nq4QSCIjJgQUKScCbwEwj%2Bz6lrKZW1U4UjpvBB8dvkuzZAfIw6srOvQY6pgH7UWAicF4RgstktwfK2PbAydPTLfMIoxCrTjFthuUnLGfji1A62vWQtjaqtNk5Kd876VE%2FHcWYuIeJ9sh%2BJjW52HGABkU3AbpkeiTu137pVS0V4avBunz93vvmjKx6oK0XuilB%2FtOhG4NG4P6ZbTja23%2BmYNUuKNSR6S0WrCtV%2FKg4RKBDsUoAirW1Az4OIsn2S4Kco%2BYKokpsjY8kNFi0SQfaH7Fq&X-Amz-Signature=4009606a20e48813923dc5b6d264216763d750bf65c37a0f7cf762d2c7b22e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
