---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WN3LRL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD%2Fq%2BbAiGqErr18fVOLa986MnzdNapJ3T9XYSolsqWXBAIgSnXIn4y11uL6w5h6A1SbsPZpf0jNQ8LD00Q9gtKpKxkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMd1ISH1YthT0tZhfircA115XoTMCd7l9W%2BCem%2BNfyriFiVKYj%2FY6hBKwwJtr4kvYhDbqNlhu5EQa4mvRafKdzyMZ%2FtXAyF%2FK%2FWDevrwPnHfamDNSyIOIVzZ%2Bh0yIAxHyhDgPSzMTJLxYqQ0%2BeaU0gOpuI3JZ64SOOhDN9ePBvXyIe0HuoYyvE%2F7pjYfNSmuRpswKtlOHRvMX9zl4evIdRxuEEyht3sIoR6aRQektzGVpxd12ImPXJbxg791LTi8Yj5vebQboQU4LweZ2T%2F4G2hPcjZoiKDdMV%2B2qptmOrjkHBcO0B8%2FCmPQXSfgziwF2OK26X3Ff1OLFbOQIknFi4kpZ%2FMsSCyDQH4aOfa5vYjO%2Byd4CudAEKe%2FTwWLPt3GNDCuBv4L6BiSAoAjR8ReYaWxkchss9iu1Ps%2FuLgaHkK1Y40mhmYCKLShs6XCWb9uhS7lIkxORio30YvG1Z9SRfTwVIr6MCR4x03WujDQg5mj1D4hk88IZc4Of%2FGRHjQxZSm7av%2BGqn5VzYW6MN0ltLoUmu2J2NPjKkUlUoLDDaJG2MSywX7ulIky9HF2BR1Vl%2FMjguJaCa0D8yGOWadJ8OmhyKhIuaIuuyKMNDnWz9fPjcBjgm1sokNPo80KhD5Oys2x%2B1k3hDkYayQxMIOi0MQGOqUB5pgUAJLTJ7JZQ0wKwQCu8uTHOh5h3d0LxrvC3KVF9WD6xpWIYfhdzKPLMCZ8PI6MnvrHgYsskZmJqqRVRQh%2BpZKixUGIKatWXambf%2FLY%2FUMOxMsNHU1A0GIJzNUrWKwwVRcs%2BDu%2FJM7eJ7NA5zSGAQisGJ7sRfNssyqK3O%2BmNRrsgljB7QXK136fMjeBQShXI36pnZ1BqGkYz5bSlzzi9AcGEBVd&X-Amz-Signature=d36c8003ca4ab4121f29446ee0d90d0ed2407b8afd4f7c566b0ac190403d34ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WN3LRL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD%2Fq%2BbAiGqErr18fVOLa986MnzdNapJ3T9XYSolsqWXBAIgSnXIn4y11uL6w5h6A1SbsPZpf0jNQ8LD00Q9gtKpKxkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMd1ISH1YthT0tZhfircA115XoTMCd7l9W%2BCem%2BNfyriFiVKYj%2FY6hBKwwJtr4kvYhDbqNlhu5EQa4mvRafKdzyMZ%2FtXAyF%2FK%2FWDevrwPnHfamDNSyIOIVzZ%2Bh0yIAxHyhDgPSzMTJLxYqQ0%2BeaU0gOpuI3JZ64SOOhDN9ePBvXyIe0HuoYyvE%2F7pjYfNSmuRpswKtlOHRvMX9zl4evIdRxuEEyht3sIoR6aRQektzGVpxd12ImPXJbxg791LTi8Yj5vebQboQU4LweZ2T%2F4G2hPcjZoiKDdMV%2B2qptmOrjkHBcO0B8%2FCmPQXSfgziwF2OK26X3Ff1OLFbOQIknFi4kpZ%2FMsSCyDQH4aOfa5vYjO%2Byd4CudAEKe%2FTwWLPt3GNDCuBv4L6BiSAoAjR8ReYaWxkchss9iu1Ps%2FuLgaHkK1Y40mhmYCKLShs6XCWb9uhS7lIkxORio30YvG1Z9SRfTwVIr6MCR4x03WujDQg5mj1D4hk88IZc4Of%2FGRHjQxZSm7av%2BGqn5VzYW6MN0ltLoUmu2J2NPjKkUlUoLDDaJG2MSywX7ulIky9HF2BR1Vl%2FMjguJaCa0D8yGOWadJ8OmhyKhIuaIuuyKMNDnWz9fPjcBjgm1sokNPo80KhD5Oys2x%2B1k3hDkYayQxMIOi0MQGOqUB5pgUAJLTJ7JZQ0wKwQCu8uTHOh5h3d0LxrvC3KVF9WD6xpWIYfhdzKPLMCZ8PI6MnvrHgYsskZmJqqRVRQh%2BpZKixUGIKatWXambf%2FLY%2FUMOxMsNHU1A0GIJzNUrWKwwVRcs%2BDu%2FJM7eJ7NA5zSGAQisGJ7sRfNssyqK3O%2BmNRrsgljB7QXK136fMjeBQShXI36pnZ1BqGkYz5bSlzzi9AcGEBVd&X-Amz-Signature=0417b58f979dca2a85ec94932314cb52bae84e3fdff4918559257abd375f1e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WN3LRL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD%2Fq%2BbAiGqErr18fVOLa986MnzdNapJ3T9XYSolsqWXBAIgSnXIn4y11uL6w5h6A1SbsPZpf0jNQ8LD00Q9gtKpKxkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMd1ISH1YthT0tZhfircA115XoTMCd7l9W%2BCem%2BNfyriFiVKYj%2FY6hBKwwJtr4kvYhDbqNlhu5EQa4mvRafKdzyMZ%2FtXAyF%2FK%2FWDevrwPnHfamDNSyIOIVzZ%2Bh0yIAxHyhDgPSzMTJLxYqQ0%2BeaU0gOpuI3JZ64SOOhDN9ePBvXyIe0HuoYyvE%2F7pjYfNSmuRpswKtlOHRvMX9zl4evIdRxuEEyht3sIoR6aRQektzGVpxd12ImPXJbxg791LTi8Yj5vebQboQU4LweZ2T%2F4G2hPcjZoiKDdMV%2B2qptmOrjkHBcO0B8%2FCmPQXSfgziwF2OK26X3Ff1OLFbOQIknFi4kpZ%2FMsSCyDQH4aOfa5vYjO%2Byd4CudAEKe%2FTwWLPt3GNDCuBv4L6BiSAoAjR8ReYaWxkchss9iu1Ps%2FuLgaHkK1Y40mhmYCKLShs6XCWb9uhS7lIkxORio30YvG1Z9SRfTwVIr6MCR4x03WujDQg5mj1D4hk88IZc4Of%2FGRHjQxZSm7av%2BGqn5VzYW6MN0ltLoUmu2J2NPjKkUlUoLDDaJG2MSywX7ulIky9HF2BR1Vl%2FMjguJaCa0D8yGOWadJ8OmhyKhIuaIuuyKMNDnWz9fPjcBjgm1sokNPo80KhD5Oys2x%2B1k3hDkYayQxMIOi0MQGOqUB5pgUAJLTJ7JZQ0wKwQCu8uTHOh5h3d0LxrvC3KVF9WD6xpWIYfhdzKPLMCZ8PI6MnvrHgYsskZmJqqRVRQh%2BpZKixUGIKatWXambf%2FLY%2FUMOxMsNHU1A0GIJzNUrWKwwVRcs%2BDu%2FJM7eJ7NA5zSGAQisGJ7sRfNssyqK3O%2BmNRrsgljB7QXK136fMjeBQShXI36pnZ1BqGkYz5bSlzzi9AcGEBVd&X-Amz-Signature=bbaf5f0cd765d1849d0c4e5e42fae87caf7f4f9df3e50643be98e6e6542f6977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WN3LRL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD%2Fq%2BbAiGqErr18fVOLa986MnzdNapJ3T9XYSolsqWXBAIgSnXIn4y11uL6w5h6A1SbsPZpf0jNQ8LD00Q9gtKpKxkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMd1ISH1YthT0tZhfircA115XoTMCd7l9W%2BCem%2BNfyriFiVKYj%2FY6hBKwwJtr4kvYhDbqNlhu5EQa4mvRafKdzyMZ%2FtXAyF%2FK%2FWDevrwPnHfamDNSyIOIVzZ%2Bh0yIAxHyhDgPSzMTJLxYqQ0%2BeaU0gOpuI3JZ64SOOhDN9ePBvXyIe0HuoYyvE%2F7pjYfNSmuRpswKtlOHRvMX9zl4evIdRxuEEyht3sIoR6aRQektzGVpxd12ImPXJbxg791LTi8Yj5vebQboQU4LweZ2T%2F4G2hPcjZoiKDdMV%2B2qptmOrjkHBcO0B8%2FCmPQXSfgziwF2OK26X3Ff1OLFbOQIknFi4kpZ%2FMsSCyDQH4aOfa5vYjO%2Byd4CudAEKe%2FTwWLPt3GNDCuBv4L6BiSAoAjR8ReYaWxkchss9iu1Ps%2FuLgaHkK1Y40mhmYCKLShs6XCWb9uhS7lIkxORio30YvG1Z9SRfTwVIr6MCR4x03WujDQg5mj1D4hk88IZc4Of%2FGRHjQxZSm7av%2BGqn5VzYW6MN0ltLoUmu2J2NPjKkUlUoLDDaJG2MSywX7ulIky9HF2BR1Vl%2FMjguJaCa0D8yGOWadJ8OmhyKhIuaIuuyKMNDnWz9fPjcBjgm1sokNPo80KhD5Oys2x%2B1k3hDkYayQxMIOi0MQGOqUB5pgUAJLTJ7JZQ0wKwQCu8uTHOh5h3d0LxrvC3KVF9WD6xpWIYfhdzKPLMCZ8PI6MnvrHgYsskZmJqqRVRQh%2BpZKixUGIKatWXambf%2FLY%2FUMOxMsNHU1A0GIJzNUrWKwwVRcs%2BDu%2FJM7eJ7NA5zSGAQisGJ7sRfNssyqK3O%2BmNRrsgljB7QXK136fMjeBQShXI36pnZ1BqGkYz5bSlzzi9AcGEBVd&X-Amz-Signature=605386105d0546d9c45bca749103e51069315a8066be008dd7458e87ba67e582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WN3LRL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD%2Fq%2BbAiGqErr18fVOLa986MnzdNapJ3T9XYSolsqWXBAIgSnXIn4y11uL6w5h6A1SbsPZpf0jNQ8LD00Q9gtKpKxkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMd1ISH1YthT0tZhfircA115XoTMCd7l9W%2BCem%2BNfyriFiVKYj%2FY6hBKwwJtr4kvYhDbqNlhu5EQa4mvRafKdzyMZ%2FtXAyF%2FK%2FWDevrwPnHfamDNSyIOIVzZ%2Bh0yIAxHyhDgPSzMTJLxYqQ0%2BeaU0gOpuI3JZ64SOOhDN9ePBvXyIe0HuoYyvE%2F7pjYfNSmuRpswKtlOHRvMX9zl4evIdRxuEEyht3sIoR6aRQektzGVpxd12ImPXJbxg791LTi8Yj5vebQboQU4LweZ2T%2F4G2hPcjZoiKDdMV%2B2qptmOrjkHBcO0B8%2FCmPQXSfgziwF2OK26X3Ff1OLFbOQIknFi4kpZ%2FMsSCyDQH4aOfa5vYjO%2Byd4CudAEKe%2FTwWLPt3GNDCuBv4L6BiSAoAjR8ReYaWxkchss9iu1Ps%2FuLgaHkK1Y40mhmYCKLShs6XCWb9uhS7lIkxORio30YvG1Z9SRfTwVIr6MCR4x03WujDQg5mj1D4hk88IZc4Of%2FGRHjQxZSm7av%2BGqn5VzYW6MN0ltLoUmu2J2NPjKkUlUoLDDaJG2MSywX7ulIky9HF2BR1Vl%2FMjguJaCa0D8yGOWadJ8OmhyKhIuaIuuyKMNDnWz9fPjcBjgm1sokNPo80KhD5Oys2x%2B1k3hDkYayQxMIOi0MQGOqUB5pgUAJLTJ7JZQ0wKwQCu8uTHOh5h3d0LxrvC3KVF9WD6xpWIYfhdzKPLMCZ8PI6MnvrHgYsskZmJqqRVRQh%2BpZKixUGIKatWXambf%2FLY%2FUMOxMsNHU1A0GIJzNUrWKwwVRcs%2BDu%2FJM7eJ7NA5zSGAQisGJ7sRfNssyqK3O%2BmNRrsgljB7QXK136fMjeBQShXI36pnZ1BqGkYz5bSlzzi9AcGEBVd&X-Amz-Signature=c75bc62e73b165d03dd5546db352c4a626a1e7defc4bcdef698608caee347bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
