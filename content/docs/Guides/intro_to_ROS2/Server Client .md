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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSC4FBH4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD1jpts6OqeGkBYrFQF%2BKxB4FscGrxa06VeilXyVPB%2FtwIgK8hh6ZY4dIp2ggv3ow7SGF%2BgfI2DLnXioPCr4x9iE4Yq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD3dwssrqdXCnFssCircA9M1NWd07qn7IxObvhVdH9FToBlaPMjJBfz%2BoLI4rZ3IG4DRooVlnmZvFYGuI%2FhhEblqik01JnMkjgMoYJz8QVbT0ITpokHxQvAZlxtt5xaxXYG8Iw6%2FM3VyvtagEaXBkk1BRxkdeXluQ6aahDuLPZQEokR1OrzbMR%2FuuoKwBN2Hwi2oiokj15As7wX5f3ldqbsSkEWL2ucVS5l1LBtx43vMbtyqkqbQWKBvAiGGENi8ReFtFKvOVZdFAU0kJMekKFMSH3pbNZsCugAC0joe%2FbWstOUOgQeOPdUZThc%2BYXeNTa%2BZIjeSlvLxHTTuahpeghffoiz5bPmbcbWFQ8huTh4xS%2FNmXs9valt1tYyh2K%2B84QhxNHuSqMpvTrZbMx5v2c1SN115Kw1FfW3zzUqffd4B9FuZM6Wybds%2B4PUeyvPR%2BMm61wuGFjk9%2BMaFjMazvZV2PKV%2F3H%2FyyFIRbtrXppiwb3nUC%2BqGvq%2B6x4RxZ6InZv%2BEi2FlzhJB8Uiuguow5sFVZZXl3rvBc7%2BgDLmqP4ux0JgYGFuXEI35fWP6FP17uv22JtmbXwEnF%2Bgxnq0dhxJMTvlCkW1RMj8eWXtjS3hxM4EqXffgd5hhdLc%2F0N97j1pnveKzsWVDb7KfMMfjv8IGOqUBKVyv9yim8vKiGjbUvzlYK1c1UKZcu3ei5MwqbK0mA339Dsy6myBdqfWd9mUnGZwE7gLxlK2kYnPFHXWRId%2B8YAQyZeG7NWVt0uK%2Fr5Y4EGNCbP65Um4cxfhSTUcFaQPGr9cSowwhfhKdXDOvnGEMbKOBcROVd2M4bz%2F1aa73C4uMOgpVMGo5kVjB597TVfzJMqD6gAxZOJ0DYURvBjK24EpGqNa8&X-Amz-Signature=829c6fa437980fbb7e6a953bbbf758e876937b3d5ed1ce618f57b551e8cf1f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSC4FBH4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD1jpts6OqeGkBYrFQF%2BKxB4FscGrxa06VeilXyVPB%2FtwIgK8hh6ZY4dIp2ggv3ow7SGF%2BgfI2DLnXioPCr4x9iE4Yq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD3dwssrqdXCnFssCircA9M1NWd07qn7IxObvhVdH9FToBlaPMjJBfz%2BoLI4rZ3IG4DRooVlnmZvFYGuI%2FhhEblqik01JnMkjgMoYJz8QVbT0ITpokHxQvAZlxtt5xaxXYG8Iw6%2FM3VyvtagEaXBkk1BRxkdeXluQ6aahDuLPZQEokR1OrzbMR%2FuuoKwBN2Hwi2oiokj15As7wX5f3ldqbsSkEWL2ucVS5l1LBtx43vMbtyqkqbQWKBvAiGGENi8ReFtFKvOVZdFAU0kJMekKFMSH3pbNZsCugAC0joe%2FbWstOUOgQeOPdUZThc%2BYXeNTa%2BZIjeSlvLxHTTuahpeghffoiz5bPmbcbWFQ8huTh4xS%2FNmXs9valt1tYyh2K%2B84QhxNHuSqMpvTrZbMx5v2c1SN115Kw1FfW3zzUqffd4B9FuZM6Wybds%2B4PUeyvPR%2BMm61wuGFjk9%2BMaFjMazvZV2PKV%2F3H%2FyyFIRbtrXppiwb3nUC%2BqGvq%2B6x4RxZ6InZv%2BEi2FlzhJB8Uiuguow5sFVZZXl3rvBc7%2BgDLmqP4ux0JgYGFuXEI35fWP6FP17uv22JtmbXwEnF%2Bgxnq0dhxJMTvlCkW1RMj8eWXtjS3hxM4EqXffgd5hhdLc%2F0N97j1pnveKzsWVDb7KfMMfjv8IGOqUBKVyv9yim8vKiGjbUvzlYK1c1UKZcu3ei5MwqbK0mA339Dsy6myBdqfWd9mUnGZwE7gLxlK2kYnPFHXWRId%2B8YAQyZeG7NWVt0uK%2Fr5Y4EGNCbP65Um4cxfhSTUcFaQPGr9cSowwhfhKdXDOvnGEMbKOBcROVd2M4bz%2F1aa73C4uMOgpVMGo5kVjB597TVfzJMqD6gAxZOJ0DYURvBjK24EpGqNa8&X-Amz-Signature=e4d30ac634948795e8975c9773d41e8ebd527fd509193502a027a8f06f9714d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSC4FBH4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD1jpts6OqeGkBYrFQF%2BKxB4FscGrxa06VeilXyVPB%2FtwIgK8hh6ZY4dIp2ggv3ow7SGF%2BgfI2DLnXioPCr4x9iE4Yq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD3dwssrqdXCnFssCircA9M1NWd07qn7IxObvhVdH9FToBlaPMjJBfz%2BoLI4rZ3IG4DRooVlnmZvFYGuI%2FhhEblqik01JnMkjgMoYJz8QVbT0ITpokHxQvAZlxtt5xaxXYG8Iw6%2FM3VyvtagEaXBkk1BRxkdeXluQ6aahDuLPZQEokR1OrzbMR%2FuuoKwBN2Hwi2oiokj15As7wX5f3ldqbsSkEWL2ucVS5l1LBtx43vMbtyqkqbQWKBvAiGGENi8ReFtFKvOVZdFAU0kJMekKFMSH3pbNZsCugAC0joe%2FbWstOUOgQeOPdUZThc%2BYXeNTa%2BZIjeSlvLxHTTuahpeghffoiz5bPmbcbWFQ8huTh4xS%2FNmXs9valt1tYyh2K%2B84QhxNHuSqMpvTrZbMx5v2c1SN115Kw1FfW3zzUqffd4B9FuZM6Wybds%2B4PUeyvPR%2BMm61wuGFjk9%2BMaFjMazvZV2PKV%2F3H%2FyyFIRbtrXppiwb3nUC%2BqGvq%2B6x4RxZ6InZv%2BEi2FlzhJB8Uiuguow5sFVZZXl3rvBc7%2BgDLmqP4ux0JgYGFuXEI35fWP6FP17uv22JtmbXwEnF%2Bgxnq0dhxJMTvlCkW1RMj8eWXtjS3hxM4EqXffgd5hhdLc%2F0N97j1pnveKzsWVDb7KfMMfjv8IGOqUBKVyv9yim8vKiGjbUvzlYK1c1UKZcu3ei5MwqbK0mA339Dsy6myBdqfWd9mUnGZwE7gLxlK2kYnPFHXWRId%2B8YAQyZeG7NWVt0uK%2Fr5Y4EGNCbP65Um4cxfhSTUcFaQPGr9cSowwhfhKdXDOvnGEMbKOBcROVd2M4bz%2F1aa73C4uMOgpVMGo5kVjB597TVfzJMqD6gAxZOJ0DYURvBjK24EpGqNa8&X-Amz-Signature=4fa89600474405502bf0e894da7f9dd0cf6fb60a235b0626530b0e6c33aba42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSC4FBH4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD1jpts6OqeGkBYrFQF%2BKxB4FscGrxa06VeilXyVPB%2FtwIgK8hh6ZY4dIp2ggv3ow7SGF%2BgfI2DLnXioPCr4x9iE4Yq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD3dwssrqdXCnFssCircA9M1NWd07qn7IxObvhVdH9FToBlaPMjJBfz%2BoLI4rZ3IG4DRooVlnmZvFYGuI%2FhhEblqik01JnMkjgMoYJz8QVbT0ITpokHxQvAZlxtt5xaxXYG8Iw6%2FM3VyvtagEaXBkk1BRxkdeXluQ6aahDuLPZQEokR1OrzbMR%2FuuoKwBN2Hwi2oiokj15As7wX5f3ldqbsSkEWL2ucVS5l1LBtx43vMbtyqkqbQWKBvAiGGENi8ReFtFKvOVZdFAU0kJMekKFMSH3pbNZsCugAC0joe%2FbWstOUOgQeOPdUZThc%2BYXeNTa%2BZIjeSlvLxHTTuahpeghffoiz5bPmbcbWFQ8huTh4xS%2FNmXs9valt1tYyh2K%2B84QhxNHuSqMpvTrZbMx5v2c1SN115Kw1FfW3zzUqffd4B9FuZM6Wybds%2B4PUeyvPR%2BMm61wuGFjk9%2BMaFjMazvZV2PKV%2F3H%2FyyFIRbtrXppiwb3nUC%2BqGvq%2B6x4RxZ6InZv%2BEi2FlzhJB8Uiuguow5sFVZZXl3rvBc7%2BgDLmqP4ux0JgYGFuXEI35fWP6FP17uv22JtmbXwEnF%2Bgxnq0dhxJMTvlCkW1RMj8eWXtjS3hxM4EqXffgd5hhdLc%2F0N97j1pnveKzsWVDb7KfMMfjv8IGOqUBKVyv9yim8vKiGjbUvzlYK1c1UKZcu3ei5MwqbK0mA339Dsy6myBdqfWd9mUnGZwE7gLxlK2kYnPFHXWRId%2B8YAQyZeG7NWVt0uK%2Fr5Y4EGNCbP65Um4cxfhSTUcFaQPGr9cSowwhfhKdXDOvnGEMbKOBcROVd2M4bz%2F1aa73C4uMOgpVMGo5kVjB597TVfzJMqD6gAxZOJ0DYURvBjK24EpGqNa8&X-Amz-Signature=c91a09b4e52a5c53319e47be643b152369cd19ffa1f5392df5131a1d835588fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSC4FBH4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD1jpts6OqeGkBYrFQF%2BKxB4FscGrxa06VeilXyVPB%2FtwIgK8hh6ZY4dIp2ggv3ow7SGF%2BgfI2DLnXioPCr4x9iE4Yq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD3dwssrqdXCnFssCircA9M1NWd07qn7IxObvhVdH9FToBlaPMjJBfz%2BoLI4rZ3IG4DRooVlnmZvFYGuI%2FhhEblqik01JnMkjgMoYJz8QVbT0ITpokHxQvAZlxtt5xaxXYG8Iw6%2FM3VyvtagEaXBkk1BRxkdeXluQ6aahDuLPZQEokR1OrzbMR%2FuuoKwBN2Hwi2oiokj15As7wX5f3ldqbsSkEWL2ucVS5l1LBtx43vMbtyqkqbQWKBvAiGGENi8ReFtFKvOVZdFAU0kJMekKFMSH3pbNZsCugAC0joe%2FbWstOUOgQeOPdUZThc%2BYXeNTa%2BZIjeSlvLxHTTuahpeghffoiz5bPmbcbWFQ8huTh4xS%2FNmXs9valt1tYyh2K%2B84QhxNHuSqMpvTrZbMx5v2c1SN115Kw1FfW3zzUqffd4B9FuZM6Wybds%2B4PUeyvPR%2BMm61wuGFjk9%2BMaFjMazvZV2PKV%2F3H%2FyyFIRbtrXppiwb3nUC%2BqGvq%2B6x4RxZ6InZv%2BEi2FlzhJB8Uiuguow5sFVZZXl3rvBc7%2BgDLmqP4ux0JgYGFuXEI35fWP6FP17uv22JtmbXwEnF%2Bgxnq0dhxJMTvlCkW1RMj8eWXtjS3hxM4EqXffgd5hhdLc%2F0N97j1pnveKzsWVDb7KfMMfjv8IGOqUBKVyv9yim8vKiGjbUvzlYK1c1UKZcu3ei5MwqbK0mA339Dsy6myBdqfWd9mUnGZwE7gLxlK2kYnPFHXWRId%2B8YAQyZeG7NWVt0uK%2Fr5Y4EGNCbP65Um4cxfhSTUcFaQPGr9cSowwhfhKdXDOvnGEMbKOBcROVd2M4bz%2F1aa73C4uMOgpVMGo5kVjB597TVfzJMqD6gAxZOJ0DYURvBjK24EpGqNa8&X-Amz-Signature=e77f25aeb7417a920c2e263623a09e6b404dd0534e26d0d177f0e5a721fb4b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
