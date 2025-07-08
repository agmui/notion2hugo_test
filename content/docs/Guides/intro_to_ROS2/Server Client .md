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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA453IN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgAc3znNyGAesKE1Pgdw6cY5izrcd%2FTbC4q5EZzWt6nAiEA%2Bmw45LwhSqE2u1rmHxjbQwKRK51Cz2387FyyhaOkCDQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSILxS3fjcJ0Z6kIyrcA2iRR8ek0iJ0rBDAfzbXF0BDhyv612UXP7KRv5uq6u%2FwLLhmXnNxgX1ERC35JqBUfgFNTgSmVO1s65Blhlf3Evcaa9K70yorB2luJJWz6ZMF7wRnmsyR9z9VXQwfW0LNeqFXJtcdJvgUcxKNsoQZzoftKlGryWcy5FMq4KPzQMaeiZsotssrVZN%2BfaVuS%2BBZji3Ly2dfrG0fIYmmjcsKUv%2BUYCj61IfAFRNTUsRUuw9qo0szQIM7qpyW1BwHdzWMSfrDbM922csEvrucRUJEPal%2F2ogCZKlbX7tIJ8Yl%2Btn4VUqvYIo%2F%2BgTY9rYCH2RO1kdqmuUAdCFLq%2Byxlh0DTsxhpDWF2yNZwNRdmYnnmNkCvqERfGm9vHBXme0G81Rm%2FDGmYiwUmIVup3X4%2FPFfyfMPlBJ4yUoP1u6yd9O%2BjDRIFhVngahivDS8akCuF6vuiL3ZawPCsrBWKgPgthiV%2FS1gjKEoRJw4JXuqimcI2fW4xezYOP%2Bbra1MGqiBakSEOGU3tj%2F54zB6UMFp1Sbor8yHo5NSsogPsb1v2VQEV4wi9Lxs80X7ai5BMrinIqgj1txQLVELETchFMwIDkaoDIfpx0h2eRGLrYjykr9pK%2Bxio3ny0Cbnaa95NnJUMJfHs8MGOqUBoQCM%2BUIC2ZQ05714%2BbC5BpGEfUFWc1weZnv%2BAtLCIy6IsK0WiaG2MWgwEhNXN1EaVQZXCz73vY4o9HZBRUoslypocxUTMRDnmkUOt4O2oOobNn7iH9z6p0%2FnG0cKis7Y%2BnCeYGxkBUaeYt%2FiKsw1y4aFEpw7VmPDqZMjvs6MCUbMSIqFylEQZy91Y%2FEmbAmbOYKlmxikwOWqJHJVb0%2BYqJ58E1ut&X-Amz-Signature=15f25a6725fabb3d63086320b0d455ee5953cbc260ba47c95e581c9f86a3d663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA453IN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgAc3znNyGAesKE1Pgdw6cY5izrcd%2FTbC4q5EZzWt6nAiEA%2Bmw45LwhSqE2u1rmHxjbQwKRK51Cz2387FyyhaOkCDQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSILxS3fjcJ0Z6kIyrcA2iRR8ek0iJ0rBDAfzbXF0BDhyv612UXP7KRv5uq6u%2FwLLhmXnNxgX1ERC35JqBUfgFNTgSmVO1s65Blhlf3Evcaa9K70yorB2luJJWz6ZMF7wRnmsyR9z9VXQwfW0LNeqFXJtcdJvgUcxKNsoQZzoftKlGryWcy5FMq4KPzQMaeiZsotssrVZN%2BfaVuS%2BBZji3Ly2dfrG0fIYmmjcsKUv%2BUYCj61IfAFRNTUsRUuw9qo0szQIM7qpyW1BwHdzWMSfrDbM922csEvrucRUJEPal%2F2ogCZKlbX7tIJ8Yl%2Btn4VUqvYIo%2F%2BgTY9rYCH2RO1kdqmuUAdCFLq%2Byxlh0DTsxhpDWF2yNZwNRdmYnnmNkCvqERfGm9vHBXme0G81Rm%2FDGmYiwUmIVup3X4%2FPFfyfMPlBJ4yUoP1u6yd9O%2BjDRIFhVngahivDS8akCuF6vuiL3ZawPCsrBWKgPgthiV%2FS1gjKEoRJw4JXuqimcI2fW4xezYOP%2Bbra1MGqiBakSEOGU3tj%2F54zB6UMFp1Sbor8yHo5NSsogPsb1v2VQEV4wi9Lxs80X7ai5BMrinIqgj1txQLVELETchFMwIDkaoDIfpx0h2eRGLrYjykr9pK%2Bxio3ny0Cbnaa95NnJUMJfHs8MGOqUBoQCM%2BUIC2ZQ05714%2BbC5BpGEfUFWc1weZnv%2BAtLCIy6IsK0WiaG2MWgwEhNXN1EaVQZXCz73vY4o9HZBRUoslypocxUTMRDnmkUOt4O2oOobNn7iH9z6p0%2FnG0cKis7Y%2BnCeYGxkBUaeYt%2FiKsw1y4aFEpw7VmPDqZMjvs6MCUbMSIqFylEQZy91Y%2FEmbAmbOYKlmxikwOWqJHJVb0%2BYqJ58E1ut&X-Amz-Signature=a8f42067689c27b9535f188e1b1c2776642c6cc31e71268e50467132e691204b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA453IN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgAc3znNyGAesKE1Pgdw6cY5izrcd%2FTbC4q5EZzWt6nAiEA%2Bmw45LwhSqE2u1rmHxjbQwKRK51Cz2387FyyhaOkCDQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSILxS3fjcJ0Z6kIyrcA2iRR8ek0iJ0rBDAfzbXF0BDhyv612UXP7KRv5uq6u%2FwLLhmXnNxgX1ERC35JqBUfgFNTgSmVO1s65Blhlf3Evcaa9K70yorB2luJJWz6ZMF7wRnmsyR9z9VXQwfW0LNeqFXJtcdJvgUcxKNsoQZzoftKlGryWcy5FMq4KPzQMaeiZsotssrVZN%2BfaVuS%2BBZji3Ly2dfrG0fIYmmjcsKUv%2BUYCj61IfAFRNTUsRUuw9qo0szQIM7qpyW1BwHdzWMSfrDbM922csEvrucRUJEPal%2F2ogCZKlbX7tIJ8Yl%2Btn4VUqvYIo%2F%2BgTY9rYCH2RO1kdqmuUAdCFLq%2Byxlh0DTsxhpDWF2yNZwNRdmYnnmNkCvqERfGm9vHBXme0G81Rm%2FDGmYiwUmIVup3X4%2FPFfyfMPlBJ4yUoP1u6yd9O%2BjDRIFhVngahivDS8akCuF6vuiL3ZawPCsrBWKgPgthiV%2FS1gjKEoRJw4JXuqimcI2fW4xezYOP%2Bbra1MGqiBakSEOGU3tj%2F54zB6UMFp1Sbor8yHo5NSsogPsb1v2VQEV4wi9Lxs80X7ai5BMrinIqgj1txQLVELETchFMwIDkaoDIfpx0h2eRGLrYjykr9pK%2Bxio3ny0Cbnaa95NnJUMJfHs8MGOqUBoQCM%2BUIC2ZQ05714%2BbC5BpGEfUFWc1weZnv%2BAtLCIy6IsK0WiaG2MWgwEhNXN1EaVQZXCz73vY4o9HZBRUoslypocxUTMRDnmkUOt4O2oOobNn7iH9z6p0%2FnG0cKis7Y%2BnCeYGxkBUaeYt%2FiKsw1y4aFEpw7VmPDqZMjvs6MCUbMSIqFylEQZy91Y%2FEmbAmbOYKlmxikwOWqJHJVb0%2BYqJ58E1ut&X-Amz-Signature=d287cd93721eb5f27b5ab17a57323a348b27ab9aed85f870b57b612ef7797ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA453IN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgAc3znNyGAesKE1Pgdw6cY5izrcd%2FTbC4q5EZzWt6nAiEA%2Bmw45LwhSqE2u1rmHxjbQwKRK51Cz2387FyyhaOkCDQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSILxS3fjcJ0Z6kIyrcA2iRR8ek0iJ0rBDAfzbXF0BDhyv612UXP7KRv5uq6u%2FwLLhmXnNxgX1ERC35JqBUfgFNTgSmVO1s65Blhlf3Evcaa9K70yorB2luJJWz6ZMF7wRnmsyR9z9VXQwfW0LNeqFXJtcdJvgUcxKNsoQZzoftKlGryWcy5FMq4KPzQMaeiZsotssrVZN%2BfaVuS%2BBZji3Ly2dfrG0fIYmmjcsKUv%2BUYCj61IfAFRNTUsRUuw9qo0szQIM7qpyW1BwHdzWMSfrDbM922csEvrucRUJEPal%2F2ogCZKlbX7tIJ8Yl%2Btn4VUqvYIo%2F%2BgTY9rYCH2RO1kdqmuUAdCFLq%2Byxlh0DTsxhpDWF2yNZwNRdmYnnmNkCvqERfGm9vHBXme0G81Rm%2FDGmYiwUmIVup3X4%2FPFfyfMPlBJ4yUoP1u6yd9O%2BjDRIFhVngahivDS8akCuF6vuiL3ZawPCsrBWKgPgthiV%2FS1gjKEoRJw4JXuqimcI2fW4xezYOP%2Bbra1MGqiBakSEOGU3tj%2F54zB6UMFp1Sbor8yHo5NSsogPsb1v2VQEV4wi9Lxs80X7ai5BMrinIqgj1txQLVELETchFMwIDkaoDIfpx0h2eRGLrYjykr9pK%2Bxio3ny0Cbnaa95NnJUMJfHs8MGOqUBoQCM%2BUIC2ZQ05714%2BbC5BpGEfUFWc1weZnv%2BAtLCIy6IsK0WiaG2MWgwEhNXN1EaVQZXCz73vY4o9HZBRUoslypocxUTMRDnmkUOt4O2oOobNn7iH9z6p0%2FnG0cKis7Y%2BnCeYGxkBUaeYt%2FiKsw1y4aFEpw7VmPDqZMjvs6MCUbMSIqFylEQZy91Y%2FEmbAmbOYKlmxikwOWqJHJVb0%2BYqJ58E1ut&X-Amz-Signature=be27902afacf9bfa4257f3964449ac162e78fa9c1aa1ea4fb1bd8f799d231022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA453IN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgAc3znNyGAesKE1Pgdw6cY5izrcd%2FTbC4q5EZzWt6nAiEA%2Bmw45LwhSqE2u1rmHxjbQwKRK51Cz2387FyyhaOkCDQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSILxS3fjcJ0Z6kIyrcA2iRR8ek0iJ0rBDAfzbXF0BDhyv612UXP7KRv5uq6u%2FwLLhmXnNxgX1ERC35JqBUfgFNTgSmVO1s65Blhlf3Evcaa9K70yorB2luJJWz6ZMF7wRnmsyR9z9VXQwfW0LNeqFXJtcdJvgUcxKNsoQZzoftKlGryWcy5FMq4KPzQMaeiZsotssrVZN%2BfaVuS%2BBZji3Ly2dfrG0fIYmmjcsKUv%2BUYCj61IfAFRNTUsRUuw9qo0szQIM7qpyW1BwHdzWMSfrDbM922csEvrucRUJEPal%2F2ogCZKlbX7tIJ8Yl%2Btn4VUqvYIo%2F%2BgTY9rYCH2RO1kdqmuUAdCFLq%2Byxlh0DTsxhpDWF2yNZwNRdmYnnmNkCvqERfGm9vHBXme0G81Rm%2FDGmYiwUmIVup3X4%2FPFfyfMPlBJ4yUoP1u6yd9O%2BjDRIFhVngahivDS8akCuF6vuiL3ZawPCsrBWKgPgthiV%2FS1gjKEoRJw4JXuqimcI2fW4xezYOP%2Bbra1MGqiBakSEOGU3tj%2F54zB6UMFp1Sbor8yHo5NSsogPsb1v2VQEV4wi9Lxs80X7ai5BMrinIqgj1txQLVELETchFMwIDkaoDIfpx0h2eRGLrYjykr9pK%2Bxio3ny0Cbnaa95NnJUMJfHs8MGOqUBoQCM%2BUIC2ZQ05714%2BbC5BpGEfUFWc1weZnv%2BAtLCIy6IsK0WiaG2MWgwEhNXN1EaVQZXCz73vY4o9HZBRUoslypocxUTMRDnmkUOt4O2oOobNn7iH9z6p0%2FnG0cKis7Y%2BnCeYGxkBUaeYt%2FiKsw1y4aFEpw7VmPDqZMjvs6MCUbMSIqFylEQZy91Y%2FEmbAmbOYKlmxikwOWqJHJVb0%2BYqJ58E1ut&X-Amz-Signature=045faa0625789fa2c295e6c62ae6cda2fb70e354d25f607f3ba59b2e336d62b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
