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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RH5NIF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFjGkVsNeWncFUe8IV9Jz5p5wk0DP4jXJPu88huKc7rTAiEA6rutyUXaZbs%2Bvy%2F0JvXqV7AV%2Be6nTx%2FLDtrA35LlPnEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWyq0da5wjgbKdXtSrcAzgS9lHgPbG8zzXNzrnCi3gS1Tp%2Bv33JLGdVM4rSlJiNo6DZJ1YGX2QVIxkAll%2BxhAnwaYIEkKpJ%2F3kClJKYTqq0qOivtkhfGO%2BoD4%2BrO9u4GyM05ndMgNfHVo5WARJaTrzUAJ%2FU7xvbFkuDOPE6Y43Ajxgc9L6cOzVlBCs7VxPLecifLi2ofUij%2B9SEWHuzRdi8SxaAH6LxWXeH%2F%2BcwEC%2FXEw7Y%2BH7IWyk%2Bm4FVGiBqivj9fb%2BuoLzIFREBx5y7ZQa6fymfC6mNMDYgBT%2Bgy2EjRH6Ep2%2Fzap5NmrsvWjOBtJyZm450WxrnL6SWdeabqYWclczTOP72ZCnQ2ZqkOcqWk4XZJKGVW9zNMCU%2B1QYy30JL180xHb3EDnzVa5St65guRVoiuN8XU1TUGuOgHiDFqw99TDzC%2FwGq2F9GiUlsOJJlvBM8WdPSoRPQ82LcktDupiLadb1OFZzOROJeF6tP%2Fzg7SZX4coQVUvNeZCljsOSlJYp%2FM%2FcvlYjY4HYyWE87ZkNcc1kVU0Uf8wIPavnrqLwB9Sl1uXVyT%2FOtc5Pwy3toblA8JuuF0I8KGYE3Brvur9nVAframXRO6P1lyZfrVaVmjz%2FSITRZtGlxcVgeuy%2F6n6RPWfcgVEgDML%2B9iMEGOqUBrEFceS%2F2L4xwfld%2BhhalzfDMgPBiNsg5IAooiZUReVf8ZXrPTzLPPJUovOWQkDag6r%2FxOzI1x7o%2FtCaPyZQ6YxkMumFoikycwdl05Khd1PuRjH4oJZLfKVFLu2%2F6RQ7d8EgmJa0pnGxn7oYkDabMQ8TwvilG%2FsRGaHiz5Sb8p4baegz9U%2BTWqsTELQnAqhUiw7epWTUHGzSe1aGVMsRoUxm77pVt&X-Amz-Signature=8ab1aae96362ef1ef97c245de0cf1e153743fad47cb1d1a79cf9d53538d007ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RH5NIF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFjGkVsNeWncFUe8IV9Jz5p5wk0DP4jXJPu88huKc7rTAiEA6rutyUXaZbs%2Bvy%2F0JvXqV7AV%2Be6nTx%2FLDtrA35LlPnEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWyq0da5wjgbKdXtSrcAzgS9lHgPbG8zzXNzrnCi3gS1Tp%2Bv33JLGdVM4rSlJiNo6DZJ1YGX2QVIxkAll%2BxhAnwaYIEkKpJ%2F3kClJKYTqq0qOivtkhfGO%2BoD4%2BrO9u4GyM05ndMgNfHVo5WARJaTrzUAJ%2FU7xvbFkuDOPE6Y43Ajxgc9L6cOzVlBCs7VxPLecifLi2ofUij%2B9SEWHuzRdi8SxaAH6LxWXeH%2F%2BcwEC%2FXEw7Y%2BH7IWyk%2Bm4FVGiBqivj9fb%2BuoLzIFREBx5y7ZQa6fymfC6mNMDYgBT%2Bgy2EjRH6Ep2%2Fzap5NmrsvWjOBtJyZm450WxrnL6SWdeabqYWclczTOP72ZCnQ2ZqkOcqWk4XZJKGVW9zNMCU%2B1QYy30JL180xHb3EDnzVa5St65guRVoiuN8XU1TUGuOgHiDFqw99TDzC%2FwGq2F9GiUlsOJJlvBM8WdPSoRPQ82LcktDupiLadb1OFZzOROJeF6tP%2Fzg7SZX4coQVUvNeZCljsOSlJYp%2FM%2FcvlYjY4HYyWE87ZkNcc1kVU0Uf8wIPavnrqLwB9Sl1uXVyT%2FOtc5Pwy3toblA8JuuF0I8KGYE3Brvur9nVAframXRO6P1lyZfrVaVmjz%2FSITRZtGlxcVgeuy%2F6n6RPWfcgVEgDML%2B9iMEGOqUBrEFceS%2F2L4xwfld%2BhhalzfDMgPBiNsg5IAooiZUReVf8ZXrPTzLPPJUovOWQkDag6r%2FxOzI1x7o%2FtCaPyZQ6YxkMumFoikycwdl05Khd1PuRjH4oJZLfKVFLu2%2F6RQ7d8EgmJa0pnGxn7oYkDabMQ8TwvilG%2FsRGaHiz5Sb8p4baegz9U%2BTWqsTELQnAqhUiw7epWTUHGzSe1aGVMsRoUxm77pVt&X-Amz-Signature=9f0da05f678b7358b77faa8f672d2d8c8a823b100903e141a25fc33d5ae91cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RH5NIF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFjGkVsNeWncFUe8IV9Jz5p5wk0DP4jXJPu88huKc7rTAiEA6rutyUXaZbs%2Bvy%2F0JvXqV7AV%2Be6nTx%2FLDtrA35LlPnEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWyq0da5wjgbKdXtSrcAzgS9lHgPbG8zzXNzrnCi3gS1Tp%2Bv33JLGdVM4rSlJiNo6DZJ1YGX2QVIxkAll%2BxhAnwaYIEkKpJ%2F3kClJKYTqq0qOivtkhfGO%2BoD4%2BrO9u4GyM05ndMgNfHVo5WARJaTrzUAJ%2FU7xvbFkuDOPE6Y43Ajxgc9L6cOzVlBCs7VxPLecifLi2ofUij%2B9SEWHuzRdi8SxaAH6LxWXeH%2F%2BcwEC%2FXEw7Y%2BH7IWyk%2Bm4FVGiBqivj9fb%2BuoLzIFREBx5y7ZQa6fymfC6mNMDYgBT%2Bgy2EjRH6Ep2%2Fzap5NmrsvWjOBtJyZm450WxrnL6SWdeabqYWclczTOP72ZCnQ2ZqkOcqWk4XZJKGVW9zNMCU%2B1QYy30JL180xHb3EDnzVa5St65guRVoiuN8XU1TUGuOgHiDFqw99TDzC%2FwGq2F9GiUlsOJJlvBM8WdPSoRPQ82LcktDupiLadb1OFZzOROJeF6tP%2Fzg7SZX4coQVUvNeZCljsOSlJYp%2FM%2FcvlYjY4HYyWE87ZkNcc1kVU0Uf8wIPavnrqLwB9Sl1uXVyT%2FOtc5Pwy3toblA8JuuF0I8KGYE3Brvur9nVAframXRO6P1lyZfrVaVmjz%2FSITRZtGlxcVgeuy%2F6n6RPWfcgVEgDML%2B9iMEGOqUBrEFceS%2F2L4xwfld%2BhhalzfDMgPBiNsg5IAooiZUReVf8ZXrPTzLPPJUovOWQkDag6r%2FxOzI1x7o%2FtCaPyZQ6YxkMumFoikycwdl05Khd1PuRjH4oJZLfKVFLu2%2F6RQ7d8EgmJa0pnGxn7oYkDabMQ8TwvilG%2FsRGaHiz5Sb8p4baegz9U%2BTWqsTELQnAqhUiw7epWTUHGzSe1aGVMsRoUxm77pVt&X-Amz-Signature=6a33cc6d3be975e9c44c330789f291c22a7e175b478737da482a063c60a7aa52&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RH5NIF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFjGkVsNeWncFUe8IV9Jz5p5wk0DP4jXJPu88huKc7rTAiEA6rutyUXaZbs%2Bvy%2F0JvXqV7AV%2Be6nTx%2FLDtrA35LlPnEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWyq0da5wjgbKdXtSrcAzgS9lHgPbG8zzXNzrnCi3gS1Tp%2Bv33JLGdVM4rSlJiNo6DZJ1YGX2QVIxkAll%2BxhAnwaYIEkKpJ%2F3kClJKYTqq0qOivtkhfGO%2BoD4%2BrO9u4GyM05ndMgNfHVo5WARJaTrzUAJ%2FU7xvbFkuDOPE6Y43Ajxgc9L6cOzVlBCs7VxPLecifLi2ofUij%2B9SEWHuzRdi8SxaAH6LxWXeH%2F%2BcwEC%2FXEw7Y%2BH7IWyk%2Bm4FVGiBqivj9fb%2BuoLzIFREBx5y7ZQa6fymfC6mNMDYgBT%2Bgy2EjRH6Ep2%2Fzap5NmrsvWjOBtJyZm450WxrnL6SWdeabqYWclczTOP72ZCnQ2ZqkOcqWk4XZJKGVW9zNMCU%2B1QYy30JL180xHb3EDnzVa5St65guRVoiuN8XU1TUGuOgHiDFqw99TDzC%2FwGq2F9GiUlsOJJlvBM8WdPSoRPQ82LcktDupiLadb1OFZzOROJeF6tP%2Fzg7SZX4coQVUvNeZCljsOSlJYp%2FM%2FcvlYjY4HYyWE87ZkNcc1kVU0Uf8wIPavnrqLwB9Sl1uXVyT%2FOtc5Pwy3toblA8JuuF0I8KGYE3Brvur9nVAframXRO6P1lyZfrVaVmjz%2FSITRZtGlxcVgeuy%2F6n6RPWfcgVEgDML%2B9iMEGOqUBrEFceS%2F2L4xwfld%2BhhalzfDMgPBiNsg5IAooiZUReVf8ZXrPTzLPPJUovOWQkDag6r%2FxOzI1x7o%2FtCaPyZQ6YxkMumFoikycwdl05Khd1PuRjH4oJZLfKVFLu2%2F6RQ7d8EgmJa0pnGxn7oYkDabMQ8TwvilG%2FsRGaHiz5Sb8p4baegz9U%2BTWqsTELQnAqhUiw7epWTUHGzSe1aGVMsRoUxm77pVt&X-Amz-Signature=700a0903f1758f6558d6415baf40783ead0d55c7d64f9aa9e0ae04e305caa5b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RH5NIF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFjGkVsNeWncFUe8IV9Jz5p5wk0DP4jXJPu88huKc7rTAiEA6rutyUXaZbs%2Bvy%2F0JvXqV7AV%2Be6nTx%2FLDtrA35LlPnEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWyq0da5wjgbKdXtSrcAzgS9lHgPbG8zzXNzrnCi3gS1Tp%2Bv33JLGdVM4rSlJiNo6DZJ1YGX2QVIxkAll%2BxhAnwaYIEkKpJ%2F3kClJKYTqq0qOivtkhfGO%2BoD4%2BrO9u4GyM05ndMgNfHVo5WARJaTrzUAJ%2FU7xvbFkuDOPE6Y43Ajxgc9L6cOzVlBCs7VxPLecifLi2ofUij%2B9SEWHuzRdi8SxaAH6LxWXeH%2F%2BcwEC%2FXEw7Y%2BH7IWyk%2Bm4FVGiBqivj9fb%2BuoLzIFREBx5y7ZQa6fymfC6mNMDYgBT%2Bgy2EjRH6Ep2%2Fzap5NmrsvWjOBtJyZm450WxrnL6SWdeabqYWclczTOP72ZCnQ2ZqkOcqWk4XZJKGVW9zNMCU%2B1QYy30JL180xHb3EDnzVa5St65guRVoiuN8XU1TUGuOgHiDFqw99TDzC%2FwGq2F9GiUlsOJJlvBM8WdPSoRPQ82LcktDupiLadb1OFZzOROJeF6tP%2Fzg7SZX4coQVUvNeZCljsOSlJYp%2FM%2FcvlYjY4HYyWE87ZkNcc1kVU0Uf8wIPavnrqLwB9Sl1uXVyT%2FOtc5Pwy3toblA8JuuF0I8KGYE3Brvur9nVAframXRO6P1lyZfrVaVmjz%2FSITRZtGlxcVgeuy%2F6n6RPWfcgVEgDML%2B9iMEGOqUBrEFceS%2F2L4xwfld%2BhhalzfDMgPBiNsg5IAooiZUReVf8ZXrPTzLPPJUovOWQkDag6r%2FxOzI1x7o%2FtCaPyZQ6YxkMumFoikycwdl05Khd1PuRjH4oJZLfKVFLu2%2F6RQ7d8EgmJa0pnGxn7oYkDabMQ8TwvilG%2FsRGaHiz5Sb8p4baegz9U%2BTWqsTELQnAqhUiw7epWTUHGzSe1aGVMsRoUxm77pVt&X-Amz-Signature=271d51d8eb07e23ec19c01a5bdfc2fa03cbf2530e6d8f20bd77c9f185abaf698&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
