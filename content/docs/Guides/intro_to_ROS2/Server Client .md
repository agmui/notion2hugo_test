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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHHVVO4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyA%2Bcxm9fJhUo2Y8a9lLH7GbvERPwlQsUi7JDe4etaFAiBf3V%2F9s0hRUgD90HSp0gWPwagiVljBDTNinREgnffrSCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMciW7557KLEeaVX5vKtwD40jKL1jDUXGdiJlPtKHXZZBe9VLrq%2FRTkROICumRFOlbTkJl%2FXBvG4zfsf8nmnrjhd%2Fkv55yuK7%2FZXq26A9Dg%2BExzWxa75aDanjsko207XGNzv8cGuZkn6clFLmRfZG%2BnkshIaPin6HtmJsi6D5ubLhF5%2FslrT9PRMbQY1M53u5Ip8bOHY3HmC63eUcGd%2BAep52CK5fXbw2H2RMgvfuMurXi8HqohCd9Z7WD6YvVm8yJz4bAPuUZivudIF6QvyzQDyB25GtW4LudNueGS7QTOP7nNU19sis%2BDSJsTam2qmFpI0sJOjwUGMPubGnpBoXENOOL0cpCJ8LFRYNS9cpxIYzAaExmQE9dIXiPfu%2FLgTgIZBvE9qdFsoQWQKi5fbXsnKuOhhBCGGk1uPzUxKjOlizzzKDDgLfZUiOWZd5FtcBKBAluLzr3xJpOQWuplY%2BDbCzcRk3%2FTNpu%2FNrMHHr5ayAfqljcGHOexsihyBFCcz9r1%2FMFU1Gtp5QV1MlTayNfVc5OjWcL8Ufa09ti2419wxCxnC9%2FKIWzeHJr2X%2FCPBewyg4v4cXkU2ohU8Z2TeigbmxREx7Lv5vfha%2BJK0o8f%2BksnqDL6G7o2FZplceDymfi3j3rWAfMO6KEPXYw8KDewgY6pgH70ZApDdCQkZfBnu9sQPrFqxeOB59lkuVHUJBWN91cGSB4WDmYcHiFE3WVTJX5hkiywVVOWcMHGN9s%2F%2FqpxHwVHZEKFW3wc6OEyWRJTerlJqcniBolx48rUfLFfQWf%2BQKwmHPBfUX631%2FlKMPNsh96TJt2ujFHp0shhfxPLAlw4mDOCIhcZi6HVwMLGmzKnu2ea9aaXdlWemGez60w3%2BYhGVkStIWF&X-Amz-Signature=cbb6fd385f81457459a879325eeeff16b6040ded4641096cd9c9e4822aa7601f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHHVVO4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyA%2Bcxm9fJhUo2Y8a9lLH7GbvERPwlQsUi7JDe4etaFAiBf3V%2F9s0hRUgD90HSp0gWPwagiVljBDTNinREgnffrSCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMciW7557KLEeaVX5vKtwD40jKL1jDUXGdiJlPtKHXZZBe9VLrq%2FRTkROICumRFOlbTkJl%2FXBvG4zfsf8nmnrjhd%2Fkv55yuK7%2FZXq26A9Dg%2BExzWxa75aDanjsko207XGNzv8cGuZkn6clFLmRfZG%2BnkshIaPin6HtmJsi6D5ubLhF5%2FslrT9PRMbQY1M53u5Ip8bOHY3HmC63eUcGd%2BAep52CK5fXbw2H2RMgvfuMurXi8HqohCd9Z7WD6YvVm8yJz4bAPuUZivudIF6QvyzQDyB25GtW4LudNueGS7QTOP7nNU19sis%2BDSJsTam2qmFpI0sJOjwUGMPubGnpBoXENOOL0cpCJ8LFRYNS9cpxIYzAaExmQE9dIXiPfu%2FLgTgIZBvE9qdFsoQWQKi5fbXsnKuOhhBCGGk1uPzUxKjOlizzzKDDgLfZUiOWZd5FtcBKBAluLzr3xJpOQWuplY%2BDbCzcRk3%2FTNpu%2FNrMHHr5ayAfqljcGHOexsihyBFCcz9r1%2FMFU1Gtp5QV1MlTayNfVc5OjWcL8Ufa09ti2419wxCxnC9%2FKIWzeHJr2X%2FCPBewyg4v4cXkU2ohU8Z2TeigbmxREx7Lv5vfha%2BJK0o8f%2BksnqDL6G7o2FZplceDymfi3j3rWAfMO6KEPXYw8KDewgY6pgH70ZApDdCQkZfBnu9sQPrFqxeOB59lkuVHUJBWN91cGSB4WDmYcHiFE3WVTJX5hkiywVVOWcMHGN9s%2F%2FqpxHwVHZEKFW3wc6OEyWRJTerlJqcniBolx48rUfLFfQWf%2BQKwmHPBfUX631%2FlKMPNsh96TJt2ujFHp0shhfxPLAlw4mDOCIhcZi6HVwMLGmzKnu2ea9aaXdlWemGez60w3%2BYhGVkStIWF&X-Amz-Signature=0d574463d9b1312808962aa8a8b8e0b0207f86442378b52765a547af7d4ab0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHHVVO4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyA%2Bcxm9fJhUo2Y8a9lLH7GbvERPwlQsUi7JDe4etaFAiBf3V%2F9s0hRUgD90HSp0gWPwagiVljBDTNinREgnffrSCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMciW7557KLEeaVX5vKtwD40jKL1jDUXGdiJlPtKHXZZBe9VLrq%2FRTkROICumRFOlbTkJl%2FXBvG4zfsf8nmnrjhd%2Fkv55yuK7%2FZXq26A9Dg%2BExzWxa75aDanjsko207XGNzv8cGuZkn6clFLmRfZG%2BnkshIaPin6HtmJsi6D5ubLhF5%2FslrT9PRMbQY1M53u5Ip8bOHY3HmC63eUcGd%2BAep52CK5fXbw2H2RMgvfuMurXi8HqohCd9Z7WD6YvVm8yJz4bAPuUZivudIF6QvyzQDyB25GtW4LudNueGS7QTOP7nNU19sis%2BDSJsTam2qmFpI0sJOjwUGMPubGnpBoXENOOL0cpCJ8LFRYNS9cpxIYzAaExmQE9dIXiPfu%2FLgTgIZBvE9qdFsoQWQKi5fbXsnKuOhhBCGGk1uPzUxKjOlizzzKDDgLfZUiOWZd5FtcBKBAluLzr3xJpOQWuplY%2BDbCzcRk3%2FTNpu%2FNrMHHr5ayAfqljcGHOexsihyBFCcz9r1%2FMFU1Gtp5QV1MlTayNfVc5OjWcL8Ufa09ti2419wxCxnC9%2FKIWzeHJr2X%2FCPBewyg4v4cXkU2ohU8Z2TeigbmxREx7Lv5vfha%2BJK0o8f%2BksnqDL6G7o2FZplceDymfi3j3rWAfMO6KEPXYw8KDewgY6pgH70ZApDdCQkZfBnu9sQPrFqxeOB59lkuVHUJBWN91cGSB4WDmYcHiFE3WVTJX5hkiywVVOWcMHGN9s%2F%2FqpxHwVHZEKFW3wc6OEyWRJTerlJqcniBolx48rUfLFfQWf%2BQKwmHPBfUX631%2FlKMPNsh96TJt2ujFHp0shhfxPLAlw4mDOCIhcZi6HVwMLGmzKnu2ea9aaXdlWemGez60w3%2BYhGVkStIWF&X-Amz-Signature=279bc07220b38827615409fc8cf937f86007518903b89081e5b5981776725dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHHVVO4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyA%2Bcxm9fJhUo2Y8a9lLH7GbvERPwlQsUi7JDe4etaFAiBf3V%2F9s0hRUgD90HSp0gWPwagiVljBDTNinREgnffrSCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMciW7557KLEeaVX5vKtwD40jKL1jDUXGdiJlPtKHXZZBe9VLrq%2FRTkROICumRFOlbTkJl%2FXBvG4zfsf8nmnrjhd%2Fkv55yuK7%2FZXq26A9Dg%2BExzWxa75aDanjsko207XGNzv8cGuZkn6clFLmRfZG%2BnkshIaPin6HtmJsi6D5ubLhF5%2FslrT9PRMbQY1M53u5Ip8bOHY3HmC63eUcGd%2BAep52CK5fXbw2H2RMgvfuMurXi8HqohCd9Z7WD6YvVm8yJz4bAPuUZivudIF6QvyzQDyB25GtW4LudNueGS7QTOP7nNU19sis%2BDSJsTam2qmFpI0sJOjwUGMPubGnpBoXENOOL0cpCJ8LFRYNS9cpxIYzAaExmQE9dIXiPfu%2FLgTgIZBvE9qdFsoQWQKi5fbXsnKuOhhBCGGk1uPzUxKjOlizzzKDDgLfZUiOWZd5FtcBKBAluLzr3xJpOQWuplY%2BDbCzcRk3%2FTNpu%2FNrMHHr5ayAfqljcGHOexsihyBFCcz9r1%2FMFU1Gtp5QV1MlTayNfVc5OjWcL8Ufa09ti2419wxCxnC9%2FKIWzeHJr2X%2FCPBewyg4v4cXkU2ohU8Z2TeigbmxREx7Lv5vfha%2BJK0o8f%2BksnqDL6G7o2FZplceDymfi3j3rWAfMO6KEPXYw8KDewgY6pgH70ZApDdCQkZfBnu9sQPrFqxeOB59lkuVHUJBWN91cGSB4WDmYcHiFE3WVTJX5hkiywVVOWcMHGN9s%2F%2FqpxHwVHZEKFW3wc6OEyWRJTerlJqcniBolx48rUfLFfQWf%2BQKwmHPBfUX631%2FlKMPNsh96TJt2ujFHp0shhfxPLAlw4mDOCIhcZi6HVwMLGmzKnu2ea9aaXdlWemGez60w3%2BYhGVkStIWF&X-Amz-Signature=7d912abe4b61998e2e9d6bf3fc3b945f342d051a9afd4fc2e5e56a51e939ace8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHHVVO4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyA%2Bcxm9fJhUo2Y8a9lLH7GbvERPwlQsUi7JDe4etaFAiBf3V%2F9s0hRUgD90HSp0gWPwagiVljBDTNinREgnffrSCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMciW7557KLEeaVX5vKtwD40jKL1jDUXGdiJlPtKHXZZBe9VLrq%2FRTkROICumRFOlbTkJl%2FXBvG4zfsf8nmnrjhd%2Fkv55yuK7%2FZXq26A9Dg%2BExzWxa75aDanjsko207XGNzv8cGuZkn6clFLmRfZG%2BnkshIaPin6HtmJsi6D5ubLhF5%2FslrT9PRMbQY1M53u5Ip8bOHY3HmC63eUcGd%2BAep52CK5fXbw2H2RMgvfuMurXi8HqohCd9Z7WD6YvVm8yJz4bAPuUZivudIF6QvyzQDyB25GtW4LudNueGS7QTOP7nNU19sis%2BDSJsTam2qmFpI0sJOjwUGMPubGnpBoXENOOL0cpCJ8LFRYNS9cpxIYzAaExmQE9dIXiPfu%2FLgTgIZBvE9qdFsoQWQKi5fbXsnKuOhhBCGGk1uPzUxKjOlizzzKDDgLfZUiOWZd5FtcBKBAluLzr3xJpOQWuplY%2BDbCzcRk3%2FTNpu%2FNrMHHr5ayAfqljcGHOexsihyBFCcz9r1%2FMFU1Gtp5QV1MlTayNfVc5OjWcL8Ufa09ti2419wxCxnC9%2FKIWzeHJr2X%2FCPBewyg4v4cXkU2ohU8Z2TeigbmxREx7Lv5vfha%2BJK0o8f%2BksnqDL6G7o2FZplceDymfi3j3rWAfMO6KEPXYw8KDewgY6pgH70ZApDdCQkZfBnu9sQPrFqxeOB59lkuVHUJBWN91cGSB4WDmYcHiFE3WVTJX5hkiywVVOWcMHGN9s%2F%2FqpxHwVHZEKFW3wc6OEyWRJTerlJqcniBolx48rUfLFfQWf%2BQKwmHPBfUX631%2FlKMPNsh96TJt2ujFHp0shhfxPLAlw4mDOCIhcZi6HVwMLGmzKnu2ea9aaXdlWemGez60w3%2BYhGVkStIWF&X-Amz-Signature=ea8d7fabf2c9faaf695d2035a07db1def1bf8683a44a764bcd65bc25c58276b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
