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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYJCXE3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBupuKHzNaGAFHTg2RMEgut9U1d6sr9rxi%2BEjEU3diQIgLAddn27MRNnvittN4oqhG91sgBBIdVJn1tRI7EHlzFsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvhvHYi3Xvu1ha0YircA416W5zI43vvINh8Nmkq2V%2FCSn8EcHzWK9xKob3zR04nl4xrHNKdmBgWqxwtzdK2QMCuzklKkCaix3qlIf0vEvZZLpzUpW1zeFsVkleWg0GXFbWkiz9HxUGVxEJevmRKqqpGmEMGeSw6PschDcaq5EffhkR4nryO7Ms0yLbAUVXTAQvJZeM0q4TbpWiMihmxDAJENVLAsXxY9pLGCMgETK3BZ32Ihl1sxq9GHHHlGPMxsj%2BztUbY0aFyB5cpy4%2Bl2X3LH5ai0yzVYrlZdar%2BX%2BctMC74%2BGa5EKsg%2FF7FGHuQVznP2PgM6U6aQGDgeMSckxfO1e%2B7mhxIU%2FIW%2BiSvHbdw7DXVmqbEhMD7hybs15C8Yn2OzChzwEITxvXGS6GYFw2ioJRrgsS7j1Zd3jKJe3oxN6xWxB9%2FA%2BhEeasNOUQKDTK7nX2KPb708K8b6WFc4kKvcN%2FOYKipocrZh5xxFoLvQ1ljLvXXrz3c5j9kIUDpYgl6vMl82r7h3zV2cYFv44Gc8xuIPc%2BTEoBpX3jcpGrmzQ49x2%2BNKDprJXHMku7OHZkDnh%2Fotgev9rHNfIAigF8wJQJb9jsVvfAyJCjAsMKf4qb%2BNvYJ%2BsXBCdkcr8yz9TX7QRLpi9KvJt5LMOHLs8EGOqUBvMubaMF1Yq0NXyxQnG5sfkiWlgsU532rZeLoAZ41TzMKY%2BLAe9i04%2FQ4dZwlV65CLkS%2FsGjX2vHT8Tjlt04uFZEaXpcQNvOWzhJAcAH9xUn1Ks8wsuZqhqySmqnCwGB7xlM7%2F5Lt6x7kjGnF3szJZcY23WBgaihbn49oC4P97JK7JzKiLjieTNI3uwYlP56lxFbqLhOcMjC8mvOpqUKqSQ4EBiy0&X-Amz-Signature=55bfa1553a326f6a3d173dd5d9840354dc4971ba274634289d7ae8726142781d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYJCXE3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBupuKHzNaGAFHTg2RMEgut9U1d6sr9rxi%2BEjEU3diQIgLAddn27MRNnvittN4oqhG91sgBBIdVJn1tRI7EHlzFsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvhvHYi3Xvu1ha0YircA416W5zI43vvINh8Nmkq2V%2FCSn8EcHzWK9xKob3zR04nl4xrHNKdmBgWqxwtzdK2QMCuzklKkCaix3qlIf0vEvZZLpzUpW1zeFsVkleWg0GXFbWkiz9HxUGVxEJevmRKqqpGmEMGeSw6PschDcaq5EffhkR4nryO7Ms0yLbAUVXTAQvJZeM0q4TbpWiMihmxDAJENVLAsXxY9pLGCMgETK3BZ32Ihl1sxq9GHHHlGPMxsj%2BztUbY0aFyB5cpy4%2Bl2X3LH5ai0yzVYrlZdar%2BX%2BctMC74%2BGa5EKsg%2FF7FGHuQVznP2PgM6U6aQGDgeMSckxfO1e%2B7mhxIU%2FIW%2BiSvHbdw7DXVmqbEhMD7hybs15C8Yn2OzChzwEITxvXGS6GYFw2ioJRrgsS7j1Zd3jKJe3oxN6xWxB9%2FA%2BhEeasNOUQKDTK7nX2KPb708K8b6WFc4kKvcN%2FOYKipocrZh5xxFoLvQ1ljLvXXrz3c5j9kIUDpYgl6vMl82r7h3zV2cYFv44Gc8xuIPc%2BTEoBpX3jcpGrmzQ49x2%2BNKDprJXHMku7OHZkDnh%2Fotgev9rHNfIAigF8wJQJb9jsVvfAyJCjAsMKf4qb%2BNvYJ%2BsXBCdkcr8yz9TX7QRLpi9KvJt5LMOHLs8EGOqUBvMubaMF1Yq0NXyxQnG5sfkiWlgsU532rZeLoAZ41TzMKY%2BLAe9i04%2FQ4dZwlV65CLkS%2FsGjX2vHT8Tjlt04uFZEaXpcQNvOWzhJAcAH9xUn1Ks8wsuZqhqySmqnCwGB7xlM7%2F5Lt6x7kjGnF3szJZcY23WBgaihbn49oC4P97JK7JzKiLjieTNI3uwYlP56lxFbqLhOcMjC8mvOpqUKqSQ4EBiy0&X-Amz-Signature=c855ab99ee6d108ad595854295a51b0da0ea173678cf9bbe3596d9a9416cc598&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYJCXE3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBupuKHzNaGAFHTg2RMEgut9U1d6sr9rxi%2BEjEU3diQIgLAddn27MRNnvittN4oqhG91sgBBIdVJn1tRI7EHlzFsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvhvHYi3Xvu1ha0YircA416W5zI43vvINh8Nmkq2V%2FCSn8EcHzWK9xKob3zR04nl4xrHNKdmBgWqxwtzdK2QMCuzklKkCaix3qlIf0vEvZZLpzUpW1zeFsVkleWg0GXFbWkiz9HxUGVxEJevmRKqqpGmEMGeSw6PschDcaq5EffhkR4nryO7Ms0yLbAUVXTAQvJZeM0q4TbpWiMihmxDAJENVLAsXxY9pLGCMgETK3BZ32Ihl1sxq9GHHHlGPMxsj%2BztUbY0aFyB5cpy4%2Bl2X3LH5ai0yzVYrlZdar%2BX%2BctMC74%2BGa5EKsg%2FF7FGHuQVznP2PgM6U6aQGDgeMSckxfO1e%2B7mhxIU%2FIW%2BiSvHbdw7DXVmqbEhMD7hybs15C8Yn2OzChzwEITxvXGS6GYFw2ioJRrgsS7j1Zd3jKJe3oxN6xWxB9%2FA%2BhEeasNOUQKDTK7nX2KPb708K8b6WFc4kKvcN%2FOYKipocrZh5xxFoLvQ1ljLvXXrz3c5j9kIUDpYgl6vMl82r7h3zV2cYFv44Gc8xuIPc%2BTEoBpX3jcpGrmzQ49x2%2BNKDprJXHMku7OHZkDnh%2Fotgev9rHNfIAigF8wJQJb9jsVvfAyJCjAsMKf4qb%2BNvYJ%2BsXBCdkcr8yz9TX7QRLpi9KvJt5LMOHLs8EGOqUBvMubaMF1Yq0NXyxQnG5sfkiWlgsU532rZeLoAZ41TzMKY%2BLAe9i04%2FQ4dZwlV65CLkS%2FsGjX2vHT8Tjlt04uFZEaXpcQNvOWzhJAcAH9xUn1Ks8wsuZqhqySmqnCwGB7xlM7%2F5Lt6x7kjGnF3szJZcY23WBgaihbn49oC4P97JK7JzKiLjieTNI3uwYlP56lxFbqLhOcMjC8mvOpqUKqSQ4EBiy0&X-Amz-Signature=439e05791b789bc157a8d187a164709f1494e49f128f797c9e6c7a29b2d0a022&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYJCXE3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBupuKHzNaGAFHTg2RMEgut9U1d6sr9rxi%2BEjEU3diQIgLAddn27MRNnvittN4oqhG91sgBBIdVJn1tRI7EHlzFsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvhvHYi3Xvu1ha0YircA416W5zI43vvINh8Nmkq2V%2FCSn8EcHzWK9xKob3zR04nl4xrHNKdmBgWqxwtzdK2QMCuzklKkCaix3qlIf0vEvZZLpzUpW1zeFsVkleWg0GXFbWkiz9HxUGVxEJevmRKqqpGmEMGeSw6PschDcaq5EffhkR4nryO7Ms0yLbAUVXTAQvJZeM0q4TbpWiMihmxDAJENVLAsXxY9pLGCMgETK3BZ32Ihl1sxq9GHHHlGPMxsj%2BztUbY0aFyB5cpy4%2Bl2X3LH5ai0yzVYrlZdar%2BX%2BctMC74%2BGa5EKsg%2FF7FGHuQVznP2PgM6U6aQGDgeMSckxfO1e%2B7mhxIU%2FIW%2BiSvHbdw7DXVmqbEhMD7hybs15C8Yn2OzChzwEITxvXGS6GYFw2ioJRrgsS7j1Zd3jKJe3oxN6xWxB9%2FA%2BhEeasNOUQKDTK7nX2KPb708K8b6WFc4kKvcN%2FOYKipocrZh5xxFoLvQ1ljLvXXrz3c5j9kIUDpYgl6vMl82r7h3zV2cYFv44Gc8xuIPc%2BTEoBpX3jcpGrmzQ49x2%2BNKDprJXHMku7OHZkDnh%2Fotgev9rHNfIAigF8wJQJb9jsVvfAyJCjAsMKf4qb%2BNvYJ%2BsXBCdkcr8yz9TX7QRLpi9KvJt5LMOHLs8EGOqUBvMubaMF1Yq0NXyxQnG5sfkiWlgsU532rZeLoAZ41TzMKY%2BLAe9i04%2FQ4dZwlV65CLkS%2FsGjX2vHT8Tjlt04uFZEaXpcQNvOWzhJAcAH9xUn1Ks8wsuZqhqySmqnCwGB7xlM7%2F5Lt6x7kjGnF3szJZcY23WBgaihbn49oC4P97JK7JzKiLjieTNI3uwYlP56lxFbqLhOcMjC8mvOpqUKqSQ4EBiy0&X-Amz-Signature=3f14ddef7e16654bcb88c49b7bc105bb770b55c8c0a45ca45c47dc53f437eb1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYJCXE3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBupuKHzNaGAFHTg2RMEgut9U1d6sr9rxi%2BEjEU3diQIgLAddn27MRNnvittN4oqhG91sgBBIdVJn1tRI7EHlzFsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvhvHYi3Xvu1ha0YircA416W5zI43vvINh8Nmkq2V%2FCSn8EcHzWK9xKob3zR04nl4xrHNKdmBgWqxwtzdK2QMCuzklKkCaix3qlIf0vEvZZLpzUpW1zeFsVkleWg0GXFbWkiz9HxUGVxEJevmRKqqpGmEMGeSw6PschDcaq5EffhkR4nryO7Ms0yLbAUVXTAQvJZeM0q4TbpWiMihmxDAJENVLAsXxY9pLGCMgETK3BZ32Ihl1sxq9GHHHlGPMxsj%2BztUbY0aFyB5cpy4%2Bl2X3LH5ai0yzVYrlZdar%2BX%2BctMC74%2BGa5EKsg%2FF7FGHuQVznP2PgM6U6aQGDgeMSckxfO1e%2B7mhxIU%2FIW%2BiSvHbdw7DXVmqbEhMD7hybs15C8Yn2OzChzwEITxvXGS6GYFw2ioJRrgsS7j1Zd3jKJe3oxN6xWxB9%2FA%2BhEeasNOUQKDTK7nX2KPb708K8b6WFc4kKvcN%2FOYKipocrZh5xxFoLvQ1ljLvXXrz3c5j9kIUDpYgl6vMl82r7h3zV2cYFv44Gc8xuIPc%2BTEoBpX3jcpGrmzQ49x2%2BNKDprJXHMku7OHZkDnh%2Fotgev9rHNfIAigF8wJQJb9jsVvfAyJCjAsMKf4qb%2BNvYJ%2BsXBCdkcr8yz9TX7QRLpi9KvJt5LMOHLs8EGOqUBvMubaMF1Yq0NXyxQnG5sfkiWlgsU532rZeLoAZ41TzMKY%2BLAe9i04%2FQ4dZwlV65CLkS%2FsGjX2vHT8Tjlt04uFZEaXpcQNvOWzhJAcAH9xUn1Ks8wsuZqhqySmqnCwGB7xlM7%2F5Lt6x7kjGnF3szJZcY23WBgaihbn49oC4P97JK7JzKiLjieTNI3uwYlP56lxFbqLhOcMjC8mvOpqUKqSQ4EBiy0&X-Amz-Signature=b37f3953024a3c96d256fd65bb3eb3ec8ac79593e557df45ea3ccd6c867ca061&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
