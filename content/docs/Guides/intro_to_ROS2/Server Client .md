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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTT7L7SF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDw7GwiAFtDDhGKtah3BvKBlQwdfTRQvBGu39YGamnaeAIgTWN%2BzvBSFfiLcxIlP2JsUtjdMJSNG4HS16qccCwkoNwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI9xrbSsiQh77MySzircA%2By7CRnR48Dz7D9mQulI3XYrBOATWGBaF1%2Bu0JGRLHrCdiNOKgceLYhfJ0yihL%2F07oYv6MECMEOGqd%2Bs0a2GJRkpxrQFXNT9IzYNUU9HVrrXKY2wM76%2Frt6CA7peG7E4FH9oAj5MypTxO1CeRYHRFKEbTU%2BgI41ljwS4bi7aUC%2B7J%2FfpZvXOt%2BmSyvn%2FM2V9Jc5npVJgk3BCV6A5BIcbpzEzWkVaWBcu6OplDlFuCdE351763H3JLe%2BSWeEFlbD6DfSM4kkXtAkywWtA7wfl9cnPKRxa5wjU%2FepDtI%2BkMgPhm5gZ0JeL66TeR6m8ditNHKs4FAe6TNkYJEiXvlkOF9%2FAkmMmaQs0diGV4jmixAKidtu5xkNU9VyNQrWgCHzgIoMGeygjH5ungTZrDnP%2F5aFNbIzwVcNRA7LkRLu36usARZy1tMbYNnTH2CCFIstnECw%2FjkveN1ryxf23cPC7dfl4kf%2B%2BwTV7GAU1iZ4of7Russy%2B8zVKrbvnfPdJdq6Px6%2Fm3HswCwKSHPFlsxe%2BKsR1iErzkm6IZEDLmi5P2mM0ag0TPotpQ%2FBsHXfuW3wkscahXd7prf6fyj5EC6GSNon5n09rxNCo7%2Bk6%2Fwf20xyc1qnyL7GLKLzI2KcYMMe3nMMGOqUBuugYe9fph0D2WElvpSf9MqwyPWJAKb3iuoT5eaSgUx5qOMoxJGi9rBnG6AwCQNguDoL42btX%2F49TAa5AC1ULoFmlvymqT295P63gtDZMGLZQtoQflOs75lQyLNl0iPmkleeLtnKnX6c%2Fs9HxmxCjrrMLqj9YoUTZ2i1A0KFv3Y%2FkKsuydd4EDVJBPqc3BIv%2FBk3zm2WtAYmIdZ%2FYfLjwBq39z6qz&X-Amz-Signature=de71ff7d363efd8fe59e8c52a469e95a5b0b2dc3eda326824bc727f0a5f0e147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTT7L7SF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDw7GwiAFtDDhGKtah3BvKBlQwdfTRQvBGu39YGamnaeAIgTWN%2BzvBSFfiLcxIlP2JsUtjdMJSNG4HS16qccCwkoNwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI9xrbSsiQh77MySzircA%2By7CRnR48Dz7D9mQulI3XYrBOATWGBaF1%2Bu0JGRLHrCdiNOKgceLYhfJ0yihL%2F07oYv6MECMEOGqd%2Bs0a2GJRkpxrQFXNT9IzYNUU9HVrrXKY2wM76%2Frt6CA7peG7E4FH9oAj5MypTxO1CeRYHRFKEbTU%2BgI41ljwS4bi7aUC%2B7J%2FfpZvXOt%2BmSyvn%2FM2V9Jc5npVJgk3BCV6A5BIcbpzEzWkVaWBcu6OplDlFuCdE351763H3JLe%2BSWeEFlbD6DfSM4kkXtAkywWtA7wfl9cnPKRxa5wjU%2FepDtI%2BkMgPhm5gZ0JeL66TeR6m8ditNHKs4FAe6TNkYJEiXvlkOF9%2FAkmMmaQs0diGV4jmixAKidtu5xkNU9VyNQrWgCHzgIoMGeygjH5ungTZrDnP%2F5aFNbIzwVcNRA7LkRLu36usARZy1tMbYNnTH2CCFIstnECw%2FjkveN1ryxf23cPC7dfl4kf%2B%2BwTV7GAU1iZ4of7Russy%2B8zVKrbvnfPdJdq6Px6%2Fm3HswCwKSHPFlsxe%2BKsR1iErzkm6IZEDLmi5P2mM0ag0TPotpQ%2FBsHXfuW3wkscahXd7prf6fyj5EC6GSNon5n09rxNCo7%2Bk6%2Fwf20xyc1qnyL7GLKLzI2KcYMMe3nMMGOqUBuugYe9fph0D2WElvpSf9MqwyPWJAKb3iuoT5eaSgUx5qOMoxJGi9rBnG6AwCQNguDoL42btX%2F49TAa5AC1ULoFmlvymqT295P63gtDZMGLZQtoQflOs75lQyLNl0iPmkleeLtnKnX6c%2Fs9HxmxCjrrMLqj9YoUTZ2i1A0KFv3Y%2FkKsuydd4EDVJBPqc3BIv%2FBk3zm2WtAYmIdZ%2FYfLjwBq39z6qz&X-Amz-Signature=b71c8a161fadbfc8588149b0204f21c61901613a2d9acc0798b5e8fb7755b71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTT7L7SF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDw7GwiAFtDDhGKtah3BvKBlQwdfTRQvBGu39YGamnaeAIgTWN%2BzvBSFfiLcxIlP2JsUtjdMJSNG4HS16qccCwkoNwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI9xrbSsiQh77MySzircA%2By7CRnR48Dz7D9mQulI3XYrBOATWGBaF1%2Bu0JGRLHrCdiNOKgceLYhfJ0yihL%2F07oYv6MECMEOGqd%2Bs0a2GJRkpxrQFXNT9IzYNUU9HVrrXKY2wM76%2Frt6CA7peG7E4FH9oAj5MypTxO1CeRYHRFKEbTU%2BgI41ljwS4bi7aUC%2B7J%2FfpZvXOt%2BmSyvn%2FM2V9Jc5npVJgk3BCV6A5BIcbpzEzWkVaWBcu6OplDlFuCdE351763H3JLe%2BSWeEFlbD6DfSM4kkXtAkywWtA7wfl9cnPKRxa5wjU%2FepDtI%2BkMgPhm5gZ0JeL66TeR6m8ditNHKs4FAe6TNkYJEiXvlkOF9%2FAkmMmaQs0diGV4jmixAKidtu5xkNU9VyNQrWgCHzgIoMGeygjH5ungTZrDnP%2F5aFNbIzwVcNRA7LkRLu36usARZy1tMbYNnTH2CCFIstnECw%2FjkveN1ryxf23cPC7dfl4kf%2B%2BwTV7GAU1iZ4of7Russy%2B8zVKrbvnfPdJdq6Px6%2Fm3HswCwKSHPFlsxe%2BKsR1iErzkm6IZEDLmi5P2mM0ag0TPotpQ%2FBsHXfuW3wkscahXd7prf6fyj5EC6GSNon5n09rxNCo7%2Bk6%2Fwf20xyc1qnyL7GLKLzI2KcYMMe3nMMGOqUBuugYe9fph0D2WElvpSf9MqwyPWJAKb3iuoT5eaSgUx5qOMoxJGi9rBnG6AwCQNguDoL42btX%2F49TAa5AC1ULoFmlvymqT295P63gtDZMGLZQtoQflOs75lQyLNl0iPmkleeLtnKnX6c%2Fs9HxmxCjrrMLqj9YoUTZ2i1A0KFv3Y%2FkKsuydd4EDVJBPqc3BIv%2FBk3zm2WtAYmIdZ%2FYfLjwBq39z6qz&X-Amz-Signature=fc0a72fa2e2c79e1923ef577f93d9ea4c7e8f5d8ba4d2f4f765c2128119435db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTT7L7SF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDw7GwiAFtDDhGKtah3BvKBlQwdfTRQvBGu39YGamnaeAIgTWN%2BzvBSFfiLcxIlP2JsUtjdMJSNG4HS16qccCwkoNwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI9xrbSsiQh77MySzircA%2By7CRnR48Dz7D9mQulI3XYrBOATWGBaF1%2Bu0JGRLHrCdiNOKgceLYhfJ0yihL%2F07oYv6MECMEOGqd%2Bs0a2GJRkpxrQFXNT9IzYNUU9HVrrXKY2wM76%2Frt6CA7peG7E4FH9oAj5MypTxO1CeRYHRFKEbTU%2BgI41ljwS4bi7aUC%2B7J%2FfpZvXOt%2BmSyvn%2FM2V9Jc5npVJgk3BCV6A5BIcbpzEzWkVaWBcu6OplDlFuCdE351763H3JLe%2BSWeEFlbD6DfSM4kkXtAkywWtA7wfl9cnPKRxa5wjU%2FepDtI%2BkMgPhm5gZ0JeL66TeR6m8ditNHKs4FAe6TNkYJEiXvlkOF9%2FAkmMmaQs0diGV4jmixAKidtu5xkNU9VyNQrWgCHzgIoMGeygjH5ungTZrDnP%2F5aFNbIzwVcNRA7LkRLu36usARZy1tMbYNnTH2CCFIstnECw%2FjkveN1ryxf23cPC7dfl4kf%2B%2BwTV7GAU1iZ4of7Russy%2B8zVKrbvnfPdJdq6Px6%2Fm3HswCwKSHPFlsxe%2BKsR1iErzkm6IZEDLmi5P2mM0ag0TPotpQ%2FBsHXfuW3wkscahXd7prf6fyj5EC6GSNon5n09rxNCo7%2Bk6%2Fwf20xyc1qnyL7GLKLzI2KcYMMe3nMMGOqUBuugYe9fph0D2WElvpSf9MqwyPWJAKb3iuoT5eaSgUx5qOMoxJGi9rBnG6AwCQNguDoL42btX%2F49TAa5AC1ULoFmlvymqT295P63gtDZMGLZQtoQflOs75lQyLNl0iPmkleeLtnKnX6c%2Fs9HxmxCjrrMLqj9YoUTZ2i1A0KFv3Y%2FkKsuydd4EDVJBPqc3BIv%2FBk3zm2WtAYmIdZ%2FYfLjwBq39z6qz&X-Amz-Signature=db7eeff64821658912359f542ba2c8aa5d68c7740fc43be009f6dcbc35974504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTT7L7SF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDw7GwiAFtDDhGKtah3BvKBlQwdfTRQvBGu39YGamnaeAIgTWN%2BzvBSFfiLcxIlP2JsUtjdMJSNG4HS16qccCwkoNwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI9xrbSsiQh77MySzircA%2By7CRnR48Dz7D9mQulI3XYrBOATWGBaF1%2Bu0JGRLHrCdiNOKgceLYhfJ0yihL%2F07oYv6MECMEOGqd%2Bs0a2GJRkpxrQFXNT9IzYNUU9HVrrXKY2wM76%2Frt6CA7peG7E4FH9oAj5MypTxO1CeRYHRFKEbTU%2BgI41ljwS4bi7aUC%2B7J%2FfpZvXOt%2BmSyvn%2FM2V9Jc5npVJgk3BCV6A5BIcbpzEzWkVaWBcu6OplDlFuCdE351763H3JLe%2BSWeEFlbD6DfSM4kkXtAkywWtA7wfl9cnPKRxa5wjU%2FepDtI%2BkMgPhm5gZ0JeL66TeR6m8ditNHKs4FAe6TNkYJEiXvlkOF9%2FAkmMmaQs0diGV4jmixAKidtu5xkNU9VyNQrWgCHzgIoMGeygjH5ungTZrDnP%2F5aFNbIzwVcNRA7LkRLu36usARZy1tMbYNnTH2CCFIstnECw%2FjkveN1ryxf23cPC7dfl4kf%2B%2BwTV7GAU1iZ4of7Russy%2B8zVKrbvnfPdJdq6Px6%2Fm3HswCwKSHPFlsxe%2BKsR1iErzkm6IZEDLmi5P2mM0ag0TPotpQ%2FBsHXfuW3wkscahXd7prf6fyj5EC6GSNon5n09rxNCo7%2Bk6%2Fwf20xyc1qnyL7GLKLzI2KcYMMe3nMMGOqUBuugYe9fph0D2WElvpSf9MqwyPWJAKb3iuoT5eaSgUx5qOMoxJGi9rBnG6AwCQNguDoL42btX%2F49TAa5AC1ULoFmlvymqT295P63gtDZMGLZQtoQflOs75lQyLNl0iPmkleeLtnKnX6c%2Fs9HxmxCjrrMLqj9YoUTZ2i1A0KFv3Y%2FkKsuydd4EDVJBPqc3BIv%2FBk3zm2WtAYmIdZ%2FYfLjwBq39z6qz&X-Amz-Signature=ba13f55634326cec05324a1985d28b8fb0a315d237ba1edba449f7c2cc1857dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
