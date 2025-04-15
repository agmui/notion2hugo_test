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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYIPUFQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByTnMgfKvkZi75Q0uiXZNmIvuG1BE120K3aY88cvbesAiAokXReMAHCl%2BY8V32x8M67Of%2FyLLkml0vBjFYEJ18m3ir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMpM%2FCAUf2oWBfNk0rKtwDep%2F7LfyCtItMwRDZoUHioAeZeBuQFjqVLs8Qp11DkY9s8ypKP0XIGj5yltBVpvbCV9fKaDxUqqoyFY4ecCOyrVTwAVp4q4pQaFA2KJXg9MQnp4AVzyR86Vl%2F2H8um03nxtQxRqXVXVgbIUjEPbnaVTIx44tY0xsg1FeLpMlk46fka%2FMvgYf3t2rr479vPi2%2F8ij%2BQCKocBa1LVuJy1drdbfbvCaO4A%2Fm3obKJeELto7Tu1uE1QYB1Z4NfFg1TdU12K708HMQq3qCxDg9szy7AkZoxz%2BompBLuCQwoYwojnOUtfnrPU3FdKAyUyKrTFM6c%2BB1znVCKQTrKovTlR%2FWH8awSw6VsTiqNnV8KCaoMq69W43cy0iRzhv%2FVTrwLAJFlMuFC12nMLWFZsqQ2vB3AePjqDutnj7my%2BvNzknCwNaNbXzARu0mbV5OUhvD417X%2BEfffP5vGUk5Qg%2BQIZI3P3A6pAYlSJRS0udfgdDmn2RCB7d9aj3tTTlxl5QRILe0kXDFh7V%2B4sFF%2FTDdJZABCzh1MmxqHfUJ8enPGNvg3Q6vkSAF6%2B%2BfkeUP7SgQF%2BO9bL7uUBS%2BzPfGTBMfiPUeJUT8BqtenY0PLfEfMXr70F%2Fu0S8rxiCTHU%2FKG8Qwq4H4vwY6pgGScT1PqIEKwYEldMKVBkOLU58FJlg0%2FgsgZ0%2FNxrEZLe43RxTY2qzdxK6LuVMeEt1g8p8AJPM3AIwaSCZMOSYnEeRO5uZPIoxeXPswOSnL%2FirIhy0J1KKJZ0FdHDzwRF9UVHLg%2F4%2BIbQlPKKmwh8l43d9LKNBY3GAQgxgMkH%2FLrvLyVgiYcaAIKUTMPGFDGglSB%2F%2BvMzFaLe4MV6huVgcykOiVKz6q&X-Amz-Signature=65e12fdf0c7461c41207cd25aa9b80857066069606a0bd7455b6a2ed88afb300&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYIPUFQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByTnMgfKvkZi75Q0uiXZNmIvuG1BE120K3aY88cvbesAiAokXReMAHCl%2BY8V32x8M67Of%2FyLLkml0vBjFYEJ18m3ir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMpM%2FCAUf2oWBfNk0rKtwDep%2F7LfyCtItMwRDZoUHioAeZeBuQFjqVLs8Qp11DkY9s8ypKP0XIGj5yltBVpvbCV9fKaDxUqqoyFY4ecCOyrVTwAVp4q4pQaFA2KJXg9MQnp4AVzyR86Vl%2F2H8um03nxtQxRqXVXVgbIUjEPbnaVTIx44tY0xsg1FeLpMlk46fka%2FMvgYf3t2rr479vPi2%2F8ij%2BQCKocBa1LVuJy1drdbfbvCaO4A%2Fm3obKJeELto7Tu1uE1QYB1Z4NfFg1TdU12K708HMQq3qCxDg9szy7AkZoxz%2BompBLuCQwoYwojnOUtfnrPU3FdKAyUyKrTFM6c%2BB1znVCKQTrKovTlR%2FWH8awSw6VsTiqNnV8KCaoMq69W43cy0iRzhv%2FVTrwLAJFlMuFC12nMLWFZsqQ2vB3AePjqDutnj7my%2BvNzknCwNaNbXzARu0mbV5OUhvD417X%2BEfffP5vGUk5Qg%2BQIZI3P3A6pAYlSJRS0udfgdDmn2RCB7d9aj3tTTlxl5QRILe0kXDFh7V%2B4sFF%2FTDdJZABCzh1MmxqHfUJ8enPGNvg3Q6vkSAF6%2B%2BfkeUP7SgQF%2BO9bL7uUBS%2BzPfGTBMfiPUeJUT8BqtenY0PLfEfMXr70F%2Fu0S8rxiCTHU%2FKG8Qwq4H4vwY6pgGScT1PqIEKwYEldMKVBkOLU58FJlg0%2FgsgZ0%2FNxrEZLe43RxTY2qzdxK6LuVMeEt1g8p8AJPM3AIwaSCZMOSYnEeRO5uZPIoxeXPswOSnL%2FirIhy0J1KKJZ0FdHDzwRF9UVHLg%2F4%2BIbQlPKKmwh8l43d9LKNBY3GAQgxgMkH%2FLrvLyVgiYcaAIKUTMPGFDGglSB%2F%2BvMzFaLe4MV6huVgcykOiVKz6q&X-Amz-Signature=f95fba0c50a07e5238552c8d9ab64bb7eae7a2e56563f81dc6b80772fa407668&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYIPUFQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByTnMgfKvkZi75Q0uiXZNmIvuG1BE120K3aY88cvbesAiAokXReMAHCl%2BY8V32x8M67Of%2FyLLkml0vBjFYEJ18m3ir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMpM%2FCAUf2oWBfNk0rKtwDep%2F7LfyCtItMwRDZoUHioAeZeBuQFjqVLs8Qp11DkY9s8ypKP0XIGj5yltBVpvbCV9fKaDxUqqoyFY4ecCOyrVTwAVp4q4pQaFA2KJXg9MQnp4AVzyR86Vl%2F2H8um03nxtQxRqXVXVgbIUjEPbnaVTIx44tY0xsg1FeLpMlk46fka%2FMvgYf3t2rr479vPi2%2F8ij%2BQCKocBa1LVuJy1drdbfbvCaO4A%2Fm3obKJeELto7Tu1uE1QYB1Z4NfFg1TdU12K708HMQq3qCxDg9szy7AkZoxz%2BompBLuCQwoYwojnOUtfnrPU3FdKAyUyKrTFM6c%2BB1znVCKQTrKovTlR%2FWH8awSw6VsTiqNnV8KCaoMq69W43cy0iRzhv%2FVTrwLAJFlMuFC12nMLWFZsqQ2vB3AePjqDutnj7my%2BvNzknCwNaNbXzARu0mbV5OUhvD417X%2BEfffP5vGUk5Qg%2BQIZI3P3A6pAYlSJRS0udfgdDmn2RCB7d9aj3tTTlxl5QRILe0kXDFh7V%2B4sFF%2FTDdJZABCzh1MmxqHfUJ8enPGNvg3Q6vkSAF6%2B%2BfkeUP7SgQF%2BO9bL7uUBS%2BzPfGTBMfiPUeJUT8BqtenY0PLfEfMXr70F%2Fu0S8rxiCTHU%2FKG8Qwq4H4vwY6pgGScT1PqIEKwYEldMKVBkOLU58FJlg0%2FgsgZ0%2FNxrEZLe43RxTY2qzdxK6LuVMeEt1g8p8AJPM3AIwaSCZMOSYnEeRO5uZPIoxeXPswOSnL%2FirIhy0J1KKJZ0FdHDzwRF9UVHLg%2F4%2BIbQlPKKmwh8l43d9LKNBY3GAQgxgMkH%2FLrvLyVgiYcaAIKUTMPGFDGglSB%2F%2BvMzFaLe4MV6huVgcykOiVKz6q&X-Amz-Signature=71d1807b33681748d0e866c336a94089b09399aaad91caec4107607d226718e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYIPUFQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByTnMgfKvkZi75Q0uiXZNmIvuG1BE120K3aY88cvbesAiAokXReMAHCl%2BY8V32x8M67Of%2FyLLkml0vBjFYEJ18m3ir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMpM%2FCAUf2oWBfNk0rKtwDep%2F7LfyCtItMwRDZoUHioAeZeBuQFjqVLs8Qp11DkY9s8ypKP0XIGj5yltBVpvbCV9fKaDxUqqoyFY4ecCOyrVTwAVp4q4pQaFA2KJXg9MQnp4AVzyR86Vl%2F2H8um03nxtQxRqXVXVgbIUjEPbnaVTIx44tY0xsg1FeLpMlk46fka%2FMvgYf3t2rr479vPi2%2F8ij%2BQCKocBa1LVuJy1drdbfbvCaO4A%2Fm3obKJeELto7Tu1uE1QYB1Z4NfFg1TdU12K708HMQq3qCxDg9szy7AkZoxz%2BompBLuCQwoYwojnOUtfnrPU3FdKAyUyKrTFM6c%2BB1znVCKQTrKovTlR%2FWH8awSw6VsTiqNnV8KCaoMq69W43cy0iRzhv%2FVTrwLAJFlMuFC12nMLWFZsqQ2vB3AePjqDutnj7my%2BvNzknCwNaNbXzARu0mbV5OUhvD417X%2BEfffP5vGUk5Qg%2BQIZI3P3A6pAYlSJRS0udfgdDmn2RCB7d9aj3tTTlxl5QRILe0kXDFh7V%2B4sFF%2FTDdJZABCzh1MmxqHfUJ8enPGNvg3Q6vkSAF6%2B%2BfkeUP7SgQF%2BO9bL7uUBS%2BzPfGTBMfiPUeJUT8BqtenY0PLfEfMXr70F%2Fu0S8rxiCTHU%2FKG8Qwq4H4vwY6pgGScT1PqIEKwYEldMKVBkOLU58FJlg0%2FgsgZ0%2FNxrEZLe43RxTY2qzdxK6LuVMeEt1g8p8AJPM3AIwaSCZMOSYnEeRO5uZPIoxeXPswOSnL%2FirIhy0J1KKJZ0FdHDzwRF9UVHLg%2F4%2BIbQlPKKmwh8l43d9LKNBY3GAQgxgMkH%2FLrvLyVgiYcaAIKUTMPGFDGglSB%2F%2BvMzFaLe4MV6huVgcykOiVKz6q&X-Amz-Signature=4d37c43cc2ecb6f3c50c3c2de76dd95dbafefde0e4a409ac436e0394ac3f7352&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYIPUFQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByTnMgfKvkZi75Q0uiXZNmIvuG1BE120K3aY88cvbesAiAokXReMAHCl%2BY8V32x8M67Of%2FyLLkml0vBjFYEJ18m3ir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMpM%2FCAUf2oWBfNk0rKtwDep%2F7LfyCtItMwRDZoUHioAeZeBuQFjqVLs8Qp11DkY9s8ypKP0XIGj5yltBVpvbCV9fKaDxUqqoyFY4ecCOyrVTwAVp4q4pQaFA2KJXg9MQnp4AVzyR86Vl%2F2H8um03nxtQxRqXVXVgbIUjEPbnaVTIx44tY0xsg1FeLpMlk46fka%2FMvgYf3t2rr479vPi2%2F8ij%2BQCKocBa1LVuJy1drdbfbvCaO4A%2Fm3obKJeELto7Tu1uE1QYB1Z4NfFg1TdU12K708HMQq3qCxDg9szy7AkZoxz%2BompBLuCQwoYwojnOUtfnrPU3FdKAyUyKrTFM6c%2BB1znVCKQTrKovTlR%2FWH8awSw6VsTiqNnV8KCaoMq69W43cy0iRzhv%2FVTrwLAJFlMuFC12nMLWFZsqQ2vB3AePjqDutnj7my%2BvNzknCwNaNbXzARu0mbV5OUhvD417X%2BEfffP5vGUk5Qg%2BQIZI3P3A6pAYlSJRS0udfgdDmn2RCB7d9aj3tTTlxl5QRILe0kXDFh7V%2B4sFF%2FTDdJZABCzh1MmxqHfUJ8enPGNvg3Q6vkSAF6%2B%2BfkeUP7SgQF%2BO9bL7uUBS%2BzPfGTBMfiPUeJUT8BqtenY0PLfEfMXr70F%2Fu0S8rxiCTHU%2FKG8Qwq4H4vwY6pgGScT1PqIEKwYEldMKVBkOLU58FJlg0%2FgsgZ0%2FNxrEZLe43RxTY2qzdxK6LuVMeEt1g8p8AJPM3AIwaSCZMOSYnEeRO5uZPIoxeXPswOSnL%2FirIhy0J1KKJZ0FdHDzwRF9UVHLg%2F4%2BIbQlPKKmwh8l43d9LKNBY3GAQgxgMkH%2FLrvLyVgiYcaAIKUTMPGFDGglSB%2F%2BvMzFaLe4MV6huVgcykOiVKz6q&X-Amz-Signature=f941960a712fb375679252fa9dbd4f2b6d1d77d3cd16ca01107a98fd43367fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
