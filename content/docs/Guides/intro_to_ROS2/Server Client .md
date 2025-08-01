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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMV2FPBY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8ITM1Lh1fWRolzSzBI86f3Z7IC0q0eaLxTurXsOj%2FNQIgEUPP2O0L5VAACHJem3PYQeHDVUkNA5ChgbbafXMRwdoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiKyh6ZDl7YHslKCCrcA7OppiDbwqSp4oyLqCyF9wRbK22EeK8I216POVC5YHwbniKmKP%2FNVmummLOeoTjxfYILkKPKzXAd7tg6dROm9WPWbEOMMGEzThE2pu23rj2S%2Fh40moxHdCzBuomcBY2YXsTlCsMZzjValQjmOH8ZkdEjy5VzHyZWvqd5mVy%2FEMMdT%2FuKLL6wayrT1LOdVmt3iuAACE2ANgPZVc6CPtj%2B1LI3h3PsAoFJv%2FjnZwyO8ULdabbMw50H013V8vUqIccSnVg1LEYwaZdPs4QYoZbpfglj0evw2U7KRve6vZIWOvrrKXE4YX44SOHA%2FZIrHMVFthln%2Bl9IhxBYA1R4ev%2FDg0XNpb0CBtlT3dxAsmBv3lYb%2F4BWHUUREXbSgbxrRlYM6RO1FovGSt2yh%2FwPc2ZUQd0XUvfJiI9RN2hFPYntoqD3phrURN%2FGMr1aZEXysEBkSvWgPUzngy0XfOFUFtA%2F%2FqYkPFRczgDGjs8%2FrxL0w7zvgSiDBJ%2BSg%2FvHZO0iHOiPRV3m5U6ii8i4GB2oOQ4cfsx1D1EcUro%2FotMwg8SwPP2WB729YV8BuF63d10cjbLNhrQMgd3n0Mfz65yTyTgFF1cARkSsPbbcupaQvYrm4vEoAApE0PQaaufM0ZGiMOP6s8QGOqUBa49uiJ8A3%2BOxbwqpBFE1F2PwWUcz88nmx3fx1VmaMiMLCIrdyi7ZqlBPLmXcwxqz5XJUp8TqOPx2ScFeZWmS8MP1CHDJcoiL6qtZwx6wu5pxvCMRh%2B1jo%2FGi%2BZJoJhKInF4%2F%2Bp0asAIGufK0JktkUkc9MAFNnwGUQ0joVC6lYNNd7vPLmh1L6pIEzFKf3NQi9KPk4uaL46IvgLy3oWqDiYoLY5yp&X-Amz-Signature=e51444886d9ab1d544b4a57d1dca40480dc5836909346eb97826cdc7fe20622d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMV2FPBY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8ITM1Lh1fWRolzSzBI86f3Z7IC0q0eaLxTurXsOj%2FNQIgEUPP2O0L5VAACHJem3PYQeHDVUkNA5ChgbbafXMRwdoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiKyh6ZDl7YHslKCCrcA7OppiDbwqSp4oyLqCyF9wRbK22EeK8I216POVC5YHwbniKmKP%2FNVmummLOeoTjxfYILkKPKzXAd7tg6dROm9WPWbEOMMGEzThE2pu23rj2S%2Fh40moxHdCzBuomcBY2YXsTlCsMZzjValQjmOH8ZkdEjy5VzHyZWvqd5mVy%2FEMMdT%2FuKLL6wayrT1LOdVmt3iuAACE2ANgPZVc6CPtj%2B1LI3h3PsAoFJv%2FjnZwyO8ULdabbMw50H013V8vUqIccSnVg1LEYwaZdPs4QYoZbpfglj0evw2U7KRve6vZIWOvrrKXE4YX44SOHA%2FZIrHMVFthln%2Bl9IhxBYA1R4ev%2FDg0XNpb0CBtlT3dxAsmBv3lYb%2F4BWHUUREXbSgbxrRlYM6RO1FovGSt2yh%2FwPc2ZUQd0XUvfJiI9RN2hFPYntoqD3phrURN%2FGMr1aZEXysEBkSvWgPUzngy0XfOFUFtA%2F%2FqYkPFRczgDGjs8%2FrxL0w7zvgSiDBJ%2BSg%2FvHZO0iHOiPRV3m5U6ii8i4GB2oOQ4cfsx1D1EcUro%2FotMwg8SwPP2WB729YV8BuF63d10cjbLNhrQMgd3n0Mfz65yTyTgFF1cARkSsPbbcupaQvYrm4vEoAApE0PQaaufM0ZGiMOP6s8QGOqUBa49uiJ8A3%2BOxbwqpBFE1F2PwWUcz88nmx3fx1VmaMiMLCIrdyi7ZqlBPLmXcwxqz5XJUp8TqOPx2ScFeZWmS8MP1CHDJcoiL6qtZwx6wu5pxvCMRh%2B1jo%2FGi%2BZJoJhKInF4%2F%2Bp0asAIGufK0JktkUkc9MAFNnwGUQ0joVC6lYNNd7vPLmh1L6pIEzFKf3NQi9KPk4uaL46IvgLy3oWqDiYoLY5yp&X-Amz-Signature=15d76e0493bb12efe23963d6552110baa72d35127837c6b324b279f697cd52b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMV2FPBY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8ITM1Lh1fWRolzSzBI86f3Z7IC0q0eaLxTurXsOj%2FNQIgEUPP2O0L5VAACHJem3PYQeHDVUkNA5ChgbbafXMRwdoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiKyh6ZDl7YHslKCCrcA7OppiDbwqSp4oyLqCyF9wRbK22EeK8I216POVC5YHwbniKmKP%2FNVmummLOeoTjxfYILkKPKzXAd7tg6dROm9WPWbEOMMGEzThE2pu23rj2S%2Fh40moxHdCzBuomcBY2YXsTlCsMZzjValQjmOH8ZkdEjy5VzHyZWvqd5mVy%2FEMMdT%2FuKLL6wayrT1LOdVmt3iuAACE2ANgPZVc6CPtj%2B1LI3h3PsAoFJv%2FjnZwyO8ULdabbMw50H013V8vUqIccSnVg1LEYwaZdPs4QYoZbpfglj0evw2U7KRve6vZIWOvrrKXE4YX44SOHA%2FZIrHMVFthln%2Bl9IhxBYA1R4ev%2FDg0XNpb0CBtlT3dxAsmBv3lYb%2F4BWHUUREXbSgbxrRlYM6RO1FovGSt2yh%2FwPc2ZUQd0XUvfJiI9RN2hFPYntoqD3phrURN%2FGMr1aZEXysEBkSvWgPUzngy0XfOFUFtA%2F%2FqYkPFRczgDGjs8%2FrxL0w7zvgSiDBJ%2BSg%2FvHZO0iHOiPRV3m5U6ii8i4GB2oOQ4cfsx1D1EcUro%2FotMwg8SwPP2WB729YV8BuF63d10cjbLNhrQMgd3n0Mfz65yTyTgFF1cARkSsPbbcupaQvYrm4vEoAApE0PQaaufM0ZGiMOP6s8QGOqUBa49uiJ8A3%2BOxbwqpBFE1F2PwWUcz88nmx3fx1VmaMiMLCIrdyi7ZqlBPLmXcwxqz5XJUp8TqOPx2ScFeZWmS8MP1CHDJcoiL6qtZwx6wu5pxvCMRh%2B1jo%2FGi%2BZJoJhKInF4%2F%2Bp0asAIGufK0JktkUkc9MAFNnwGUQ0joVC6lYNNd7vPLmh1L6pIEzFKf3NQi9KPk4uaL46IvgLy3oWqDiYoLY5yp&X-Amz-Signature=b05eeb14357d7a8df5f08f8da28dd954dc3567fb96d805a6aba42b769735bc12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMV2FPBY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8ITM1Lh1fWRolzSzBI86f3Z7IC0q0eaLxTurXsOj%2FNQIgEUPP2O0L5VAACHJem3PYQeHDVUkNA5ChgbbafXMRwdoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiKyh6ZDl7YHslKCCrcA7OppiDbwqSp4oyLqCyF9wRbK22EeK8I216POVC5YHwbniKmKP%2FNVmummLOeoTjxfYILkKPKzXAd7tg6dROm9WPWbEOMMGEzThE2pu23rj2S%2Fh40moxHdCzBuomcBY2YXsTlCsMZzjValQjmOH8ZkdEjy5VzHyZWvqd5mVy%2FEMMdT%2FuKLL6wayrT1LOdVmt3iuAACE2ANgPZVc6CPtj%2B1LI3h3PsAoFJv%2FjnZwyO8ULdabbMw50H013V8vUqIccSnVg1LEYwaZdPs4QYoZbpfglj0evw2U7KRve6vZIWOvrrKXE4YX44SOHA%2FZIrHMVFthln%2Bl9IhxBYA1R4ev%2FDg0XNpb0CBtlT3dxAsmBv3lYb%2F4BWHUUREXbSgbxrRlYM6RO1FovGSt2yh%2FwPc2ZUQd0XUvfJiI9RN2hFPYntoqD3phrURN%2FGMr1aZEXysEBkSvWgPUzngy0XfOFUFtA%2F%2FqYkPFRczgDGjs8%2FrxL0w7zvgSiDBJ%2BSg%2FvHZO0iHOiPRV3m5U6ii8i4GB2oOQ4cfsx1D1EcUro%2FotMwg8SwPP2WB729YV8BuF63d10cjbLNhrQMgd3n0Mfz65yTyTgFF1cARkSsPbbcupaQvYrm4vEoAApE0PQaaufM0ZGiMOP6s8QGOqUBa49uiJ8A3%2BOxbwqpBFE1F2PwWUcz88nmx3fx1VmaMiMLCIrdyi7ZqlBPLmXcwxqz5XJUp8TqOPx2ScFeZWmS8MP1CHDJcoiL6qtZwx6wu5pxvCMRh%2B1jo%2FGi%2BZJoJhKInF4%2F%2Bp0asAIGufK0JktkUkc9MAFNnwGUQ0joVC6lYNNd7vPLmh1L6pIEzFKf3NQi9KPk4uaL46IvgLy3oWqDiYoLY5yp&X-Amz-Signature=82224929c9f2b2f36108ac38e6c1aea587655b66de22b39f892048ef375bd454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMV2FPBY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8ITM1Lh1fWRolzSzBI86f3Z7IC0q0eaLxTurXsOj%2FNQIgEUPP2O0L5VAACHJem3PYQeHDVUkNA5ChgbbafXMRwdoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiKyh6ZDl7YHslKCCrcA7OppiDbwqSp4oyLqCyF9wRbK22EeK8I216POVC5YHwbniKmKP%2FNVmummLOeoTjxfYILkKPKzXAd7tg6dROm9WPWbEOMMGEzThE2pu23rj2S%2Fh40moxHdCzBuomcBY2YXsTlCsMZzjValQjmOH8ZkdEjy5VzHyZWvqd5mVy%2FEMMdT%2FuKLL6wayrT1LOdVmt3iuAACE2ANgPZVc6CPtj%2B1LI3h3PsAoFJv%2FjnZwyO8ULdabbMw50H013V8vUqIccSnVg1LEYwaZdPs4QYoZbpfglj0evw2U7KRve6vZIWOvrrKXE4YX44SOHA%2FZIrHMVFthln%2Bl9IhxBYA1R4ev%2FDg0XNpb0CBtlT3dxAsmBv3lYb%2F4BWHUUREXbSgbxrRlYM6RO1FovGSt2yh%2FwPc2ZUQd0XUvfJiI9RN2hFPYntoqD3phrURN%2FGMr1aZEXysEBkSvWgPUzngy0XfOFUFtA%2F%2FqYkPFRczgDGjs8%2FrxL0w7zvgSiDBJ%2BSg%2FvHZO0iHOiPRV3m5U6ii8i4GB2oOQ4cfsx1D1EcUro%2FotMwg8SwPP2WB729YV8BuF63d10cjbLNhrQMgd3n0Mfz65yTyTgFF1cARkSsPbbcupaQvYrm4vEoAApE0PQaaufM0ZGiMOP6s8QGOqUBa49uiJ8A3%2BOxbwqpBFE1F2PwWUcz88nmx3fx1VmaMiMLCIrdyi7ZqlBPLmXcwxqz5XJUp8TqOPx2ScFeZWmS8MP1CHDJcoiL6qtZwx6wu5pxvCMRh%2B1jo%2FGi%2BZJoJhKInF4%2F%2Bp0asAIGufK0JktkUkc9MAFNnwGUQ0joVC6lYNNd7vPLmh1L6pIEzFKf3NQi9KPk4uaL46IvgLy3oWqDiYoLY5yp&X-Amz-Signature=b1a85ef6958ef3e167353ca471e10acd3a4ec0ecc6adbabf9527a8b6cb603472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
