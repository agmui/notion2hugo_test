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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CILUW5G%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDeDO1cqQfnM%2BEA%2Fpb7bXRZ%2BxaBqjkjqCpEDBqQfvo3WwIgHYIbbBqhuW0gcyI%2FcZba3FGufHz44NxXgt2XzlAdRxIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqJNVtM7ofacJJx%2BircAzdQZKYFygl9Uxv2TlSxy%2BwlaKr0YozceH0BIdhYEA2fdsr5R21S7KsGDimdvnszqx2HvTIZ0ehm%2FPrV5eA2kdXGuKVSv6ho2E32iHcjdTm6Cj%2B6%2BOUvHDzN1XXADhL64nB9GzibssXqEglavV23FUsAioisR93GIv%2FzndDBo7wOkZXRYkvpI5RzXWnEDeQL6Mauy1LK8PNDPPvA2WUfe2CooTsmLYq%2Fi04gSOcnsegYn4mSZ7BfUlcIHuFJaXLSH%2FYCdgn2ZLOG5Lq%2BLxgrEj935QiuS8N7VYhXDOSFXJ%2Bl6ny25wqQsmGeDQE41LpM4xfB%2FlccQrWUgjbvLuMqGqN1XyUoe7J1ibPQ9FohR8pu4rI5ZUlwxHwVN5JsD1N7Ij1oJGMBgU1sVItwRWW1nGZrO026U7evOpIwDh7tTUCmZGH7QOXyyyCCtws3ImAL5Ss5%2FQZYG%2BFtvCninZJxxZjez2ywdt3yGIPjHO3KqMBEX51l19t9DfR%2BzNjXcO0YtajhpnylQDOKeKUZt8Nqg%2BhlwEGJ6YVmK7zQric3n3lr%2Ba4TyO4Feq5g3ghWefhECKK7A6H32SUOWYkGDTxv9nRC7qeG226ryQ2ypTHJcOKxGwaZeIR0GW94JhMgMMSx678GOqUBVq%2Fwb29y9%2Fz05Uk%2F4z81LtzI%2BB2C5Hv72OJwnM1pWKq2ZYyFxxjYZh%2BRW7V7xzLCOl62tNlA7aVBI9%2BT5keF7RdB6n9WWR8%2BjKw3%2FchDfxkyKkttRKNReDh3BwnU3%2BaLRrWQOIH%2FryFADQiNJ2BwKLVWaMmWAyyhFm2z5N%2Fd53GHw2JiWoXwZxzToSLUoMC01SMnECII8PYt3%2FGiWmbDVU6YmofV&X-Amz-Signature=54eebea0dba429571e648d45b634067a0f18f5aa9d87db371197ee15868ed967&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CILUW5G%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDeDO1cqQfnM%2BEA%2Fpb7bXRZ%2BxaBqjkjqCpEDBqQfvo3WwIgHYIbbBqhuW0gcyI%2FcZba3FGufHz44NxXgt2XzlAdRxIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqJNVtM7ofacJJx%2BircAzdQZKYFygl9Uxv2TlSxy%2BwlaKr0YozceH0BIdhYEA2fdsr5R21S7KsGDimdvnszqx2HvTIZ0ehm%2FPrV5eA2kdXGuKVSv6ho2E32iHcjdTm6Cj%2B6%2BOUvHDzN1XXADhL64nB9GzibssXqEglavV23FUsAioisR93GIv%2FzndDBo7wOkZXRYkvpI5RzXWnEDeQL6Mauy1LK8PNDPPvA2WUfe2CooTsmLYq%2Fi04gSOcnsegYn4mSZ7BfUlcIHuFJaXLSH%2FYCdgn2ZLOG5Lq%2BLxgrEj935QiuS8N7VYhXDOSFXJ%2Bl6ny25wqQsmGeDQE41LpM4xfB%2FlccQrWUgjbvLuMqGqN1XyUoe7J1ibPQ9FohR8pu4rI5ZUlwxHwVN5JsD1N7Ij1oJGMBgU1sVItwRWW1nGZrO026U7evOpIwDh7tTUCmZGH7QOXyyyCCtws3ImAL5Ss5%2FQZYG%2BFtvCninZJxxZjez2ywdt3yGIPjHO3KqMBEX51l19t9DfR%2BzNjXcO0YtajhpnylQDOKeKUZt8Nqg%2BhlwEGJ6YVmK7zQric3n3lr%2Ba4TyO4Feq5g3ghWefhECKK7A6H32SUOWYkGDTxv9nRC7qeG226ryQ2ypTHJcOKxGwaZeIR0GW94JhMgMMSx678GOqUBVq%2Fwb29y9%2Fz05Uk%2F4z81LtzI%2BB2C5Hv72OJwnM1pWKq2ZYyFxxjYZh%2BRW7V7xzLCOl62tNlA7aVBI9%2BT5keF7RdB6n9WWR8%2BjKw3%2FchDfxkyKkttRKNReDh3BwnU3%2BaLRrWQOIH%2FryFADQiNJ2BwKLVWaMmWAyyhFm2z5N%2Fd53GHw2JiWoXwZxzToSLUoMC01SMnECII8PYt3%2FGiWmbDVU6YmofV&X-Amz-Signature=f538c54a37f9e860b96812d8f499eec9251d018b5c5944a6040cbddc54e6529d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CILUW5G%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDeDO1cqQfnM%2BEA%2Fpb7bXRZ%2BxaBqjkjqCpEDBqQfvo3WwIgHYIbbBqhuW0gcyI%2FcZba3FGufHz44NxXgt2XzlAdRxIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqJNVtM7ofacJJx%2BircAzdQZKYFygl9Uxv2TlSxy%2BwlaKr0YozceH0BIdhYEA2fdsr5R21S7KsGDimdvnszqx2HvTIZ0ehm%2FPrV5eA2kdXGuKVSv6ho2E32iHcjdTm6Cj%2B6%2BOUvHDzN1XXADhL64nB9GzibssXqEglavV23FUsAioisR93GIv%2FzndDBo7wOkZXRYkvpI5RzXWnEDeQL6Mauy1LK8PNDPPvA2WUfe2CooTsmLYq%2Fi04gSOcnsegYn4mSZ7BfUlcIHuFJaXLSH%2FYCdgn2ZLOG5Lq%2BLxgrEj935QiuS8N7VYhXDOSFXJ%2Bl6ny25wqQsmGeDQE41LpM4xfB%2FlccQrWUgjbvLuMqGqN1XyUoe7J1ibPQ9FohR8pu4rI5ZUlwxHwVN5JsD1N7Ij1oJGMBgU1sVItwRWW1nGZrO026U7evOpIwDh7tTUCmZGH7QOXyyyCCtws3ImAL5Ss5%2FQZYG%2BFtvCninZJxxZjez2ywdt3yGIPjHO3KqMBEX51l19t9DfR%2BzNjXcO0YtajhpnylQDOKeKUZt8Nqg%2BhlwEGJ6YVmK7zQric3n3lr%2Ba4TyO4Feq5g3ghWefhECKK7A6H32SUOWYkGDTxv9nRC7qeG226ryQ2ypTHJcOKxGwaZeIR0GW94JhMgMMSx678GOqUBVq%2Fwb29y9%2Fz05Uk%2F4z81LtzI%2BB2C5Hv72OJwnM1pWKq2ZYyFxxjYZh%2BRW7V7xzLCOl62tNlA7aVBI9%2BT5keF7RdB6n9WWR8%2BjKw3%2FchDfxkyKkttRKNReDh3BwnU3%2BaLRrWQOIH%2FryFADQiNJ2BwKLVWaMmWAyyhFm2z5N%2Fd53GHw2JiWoXwZxzToSLUoMC01SMnECII8PYt3%2FGiWmbDVU6YmofV&X-Amz-Signature=091924b74cb7e4e2345799551e8373b97f38f814a89b02c538810f96232c0519&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CILUW5G%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDeDO1cqQfnM%2BEA%2Fpb7bXRZ%2BxaBqjkjqCpEDBqQfvo3WwIgHYIbbBqhuW0gcyI%2FcZba3FGufHz44NxXgt2XzlAdRxIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqJNVtM7ofacJJx%2BircAzdQZKYFygl9Uxv2TlSxy%2BwlaKr0YozceH0BIdhYEA2fdsr5R21S7KsGDimdvnszqx2HvTIZ0ehm%2FPrV5eA2kdXGuKVSv6ho2E32iHcjdTm6Cj%2B6%2BOUvHDzN1XXADhL64nB9GzibssXqEglavV23FUsAioisR93GIv%2FzndDBo7wOkZXRYkvpI5RzXWnEDeQL6Mauy1LK8PNDPPvA2WUfe2CooTsmLYq%2Fi04gSOcnsegYn4mSZ7BfUlcIHuFJaXLSH%2FYCdgn2ZLOG5Lq%2BLxgrEj935QiuS8N7VYhXDOSFXJ%2Bl6ny25wqQsmGeDQE41LpM4xfB%2FlccQrWUgjbvLuMqGqN1XyUoe7J1ibPQ9FohR8pu4rI5ZUlwxHwVN5JsD1N7Ij1oJGMBgU1sVItwRWW1nGZrO026U7evOpIwDh7tTUCmZGH7QOXyyyCCtws3ImAL5Ss5%2FQZYG%2BFtvCninZJxxZjez2ywdt3yGIPjHO3KqMBEX51l19t9DfR%2BzNjXcO0YtajhpnylQDOKeKUZt8Nqg%2BhlwEGJ6YVmK7zQric3n3lr%2Ba4TyO4Feq5g3ghWefhECKK7A6H32SUOWYkGDTxv9nRC7qeG226ryQ2ypTHJcOKxGwaZeIR0GW94JhMgMMSx678GOqUBVq%2Fwb29y9%2Fz05Uk%2F4z81LtzI%2BB2C5Hv72OJwnM1pWKq2ZYyFxxjYZh%2BRW7V7xzLCOl62tNlA7aVBI9%2BT5keF7RdB6n9WWR8%2BjKw3%2FchDfxkyKkttRKNReDh3BwnU3%2BaLRrWQOIH%2FryFADQiNJ2BwKLVWaMmWAyyhFm2z5N%2Fd53GHw2JiWoXwZxzToSLUoMC01SMnECII8PYt3%2FGiWmbDVU6YmofV&X-Amz-Signature=ac40e2ce4fb885f946ea5b2a1188ac818374f5ac5365e435e4bd9bb1d46a38b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CILUW5G%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDeDO1cqQfnM%2BEA%2Fpb7bXRZ%2BxaBqjkjqCpEDBqQfvo3WwIgHYIbbBqhuW0gcyI%2FcZba3FGufHz44NxXgt2XzlAdRxIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqJNVtM7ofacJJx%2BircAzdQZKYFygl9Uxv2TlSxy%2BwlaKr0YozceH0BIdhYEA2fdsr5R21S7KsGDimdvnszqx2HvTIZ0ehm%2FPrV5eA2kdXGuKVSv6ho2E32iHcjdTm6Cj%2B6%2BOUvHDzN1XXADhL64nB9GzibssXqEglavV23FUsAioisR93GIv%2FzndDBo7wOkZXRYkvpI5RzXWnEDeQL6Mauy1LK8PNDPPvA2WUfe2CooTsmLYq%2Fi04gSOcnsegYn4mSZ7BfUlcIHuFJaXLSH%2FYCdgn2ZLOG5Lq%2BLxgrEj935QiuS8N7VYhXDOSFXJ%2Bl6ny25wqQsmGeDQE41LpM4xfB%2FlccQrWUgjbvLuMqGqN1XyUoe7J1ibPQ9FohR8pu4rI5ZUlwxHwVN5JsD1N7Ij1oJGMBgU1sVItwRWW1nGZrO026U7evOpIwDh7tTUCmZGH7QOXyyyCCtws3ImAL5Ss5%2FQZYG%2BFtvCninZJxxZjez2ywdt3yGIPjHO3KqMBEX51l19t9DfR%2BzNjXcO0YtajhpnylQDOKeKUZt8Nqg%2BhlwEGJ6YVmK7zQric3n3lr%2Ba4TyO4Feq5g3ghWefhECKK7A6H32SUOWYkGDTxv9nRC7qeG226ryQ2ypTHJcOKxGwaZeIR0GW94JhMgMMSx678GOqUBVq%2Fwb29y9%2Fz05Uk%2F4z81LtzI%2BB2C5Hv72OJwnM1pWKq2ZYyFxxjYZh%2BRW7V7xzLCOl62tNlA7aVBI9%2BT5keF7RdB6n9WWR8%2BjKw3%2FchDfxkyKkttRKNReDh3BwnU3%2BaLRrWQOIH%2FryFADQiNJ2BwKLVWaMmWAyyhFm2z5N%2Fd53GHw2JiWoXwZxzToSLUoMC01SMnECII8PYt3%2FGiWmbDVU6YmofV&X-Amz-Signature=63da18f7317152cebc4f51e7e8dd0b4e3429e12e6a7079d10809f830a2204df8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
