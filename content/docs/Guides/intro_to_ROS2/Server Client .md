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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E3L46LG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJs%2BkNbAf924EONILLPZ0%2FcFzqHWy12BoZkjamA2juxAiBeRTpocV9ZGNfwgyf3v9HDI9RgrLEnfaABEiKaamdQKir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMES5lhKywaRZeDlytKtwD%2F%2F6Sz3IgFJ35T3mE8yjGNBHp71NrPx2DxMyPIMZs9R9MhmQ%2FaBy%2BHasg%2BN%2BZC522X5NSBLa8eIQJOA1%2B3%2BHTDRTJ7GbD8A4eHYP6P9zv0O0rytB72B3lID2NtQnnB%2FyaHSsC7gVSFIhCkdotYUYtraSyv%2BJ8jz%2FDC28V%2BdnPmovg5PhBvKwNs%2FaTGx%2FIjh0s5qjXAxT%2Bknfyfh3zJu423y5oIo95kDEdis3nTUHG4ih4%2BGMe26Ury2Ol7qilT7jV03cxHNZNMDzcCANBrL28ZevPa7f8SGJn%2BLo%2FmDjXRJ5GeMJZNxVdBrqrIEbVo7YJMt8EUVvzcTF45Qrv7uQkLC4Dxw2iXHVjsq%2FGK9BE5FaVYiU8fUIerAvVBOCWP%2B6YrA8vOfIFZ%2FhSlPqaLOfDxkmig4FBmA1JtTNo45WB%2Fh2%2BQmFbg1j7ukdfjG6HuegO0CG%2B%2FhgpLb%2BcHQQHy6K%2FRp%2FsoUhlUorakqScYbm7Gm5NRV%2BwK76MXGPzUP%2BCoNP9SbZNMOMV052d66jDcUqBJ50%2BttQebjNanjIDawe%2B%2FL1uOBoTwmAbgtivmXa6cGz8rG79I9xdefEVVeckSXhpQ8zYXALGZD%2FT0nbxbbMRep9ZYNycJHPOdi7NQWYwvYaLwgY6pgHL5lunU3iLJ2sFC8cSnO1B3WHz7AqILgPEBIRINBB%2FKQf3RPZSOr%2FKAPCoDpNoZaqDzSIYReOZ45IgmhEZSl7hVVvjiHadRvDKm93FOrsqdvISMlSC4jXS%2B9hIOVA0IIOj7IMGvzpWHGE7T32qFCl3Qu8pdO3aCKXOpzLWtwjeTujPuTcn41GSZcs%2BKBBhu9Xm8TXibz%2Ft8Zfp%2B2DNnbVnx7dstA0u&X-Amz-Signature=bd37d079655a8d5d8baeed7f33509d167c486b5346ac8526e327295983d07e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E3L46LG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJs%2BkNbAf924EONILLPZ0%2FcFzqHWy12BoZkjamA2juxAiBeRTpocV9ZGNfwgyf3v9HDI9RgrLEnfaABEiKaamdQKir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMES5lhKywaRZeDlytKtwD%2F%2F6Sz3IgFJ35T3mE8yjGNBHp71NrPx2DxMyPIMZs9R9MhmQ%2FaBy%2BHasg%2BN%2BZC522X5NSBLa8eIQJOA1%2B3%2BHTDRTJ7GbD8A4eHYP6P9zv0O0rytB72B3lID2NtQnnB%2FyaHSsC7gVSFIhCkdotYUYtraSyv%2BJ8jz%2FDC28V%2BdnPmovg5PhBvKwNs%2FaTGx%2FIjh0s5qjXAxT%2Bknfyfh3zJu423y5oIo95kDEdis3nTUHG4ih4%2BGMe26Ury2Ol7qilT7jV03cxHNZNMDzcCANBrL28ZevPa7f8SGJn%2BLo%2FmDjXRJ5GeMJZNxVdBrqrIEbVo7YJMt8EUVvzcTF45Qrv7uQkLC4Dxw2iXHVjsq%2FGK9BE5FaVYiU8fUIerAvVBOCWP%2B6YrA8vOfIFZ%2FhSlPqaLOfDxkmig4FBmA1JtTNo45WB%2Fh2%2BQmFbg1j7ukdfjG6HuegO0CG%2B%2FhgpLb%2BcHQQHy6K%2FRp%2FsoUhlUorakqScYbm7Gm5NRV%2BwK76MXGPzUP%2BCoNP9SbZNMOMV052d66jDcUqBJ50%2BttQebjNanjIDawe%2B%2FL1uOBoTwmAbgtivmXa6cGz8rG79I9xdefEVVeckSXhpQ8zYXALGZD%2FT0nbxbbMRep9ZYNycJHPOdi7NQWYwvYaLwgY6pgHL5lunU3iLJ2sFC8cSnO1B3WHz7AqILgPEBIRINBB%2FKQf3RPZSOr%2FKAPCoDpNoZaqDzSIYReOZ45IgmhEZSl7hVVvjiHadRvDKm93FOrsqdvISMlSC4jXS%2B9hIOVA0IIOj7IMGvzpWHGE7T32qFCl3Qu8pdO3aCKXOpzLWtwjeTujPuTcn41GSZcs%2BKBBhu9Xm8TXibz%2Ft8Zfp%2B2DNnbVnx7dstA0u&X-Amz-Signature=a237528d81a38245e3837a84d0ba7b01dc9eba73ab2bcada00f3c02e2c142b08&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E3L46LG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJs%2BkNbAf924EONILLPZ0%2FcFzqHWy12BoZkjamA2juxAiBeRTpocV9ZGNfwgyf3v9HDI9RgrLEnfaABEiKaamdQKir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMES5lhKywaRZeDlytKtwD%2F%2F6Sz3IgFJ35T3mE8yjGNBHp71NrPx2DxMyPIMZs9R9MhmQ%2FaBy%2BHasg%2BN%2BZC522X5NSBLa8eIQJOA1%2B3%2BHTDRTJ7GbD8A4eHYP6P9zv0O0rytB72B3lID2NtQnnB%2FyaHSsC7gVSFIhCkdotYUYtraSyv%2BJ8jz%2FDC28V%2BdnPmovg5PhBvKwNs%2FaTGx%2FIjh0s5qjXAxT%2Bknfyfh3zJu423y5oIo95kDEdis3nTUHG4ih4%2BGMe26Ury2Ol7qilT7jV03cxHNZNMDzcCANBrL28ZevPa7f8SGJn%2BLo%2FmDjXRJ5GeMJZNxVdBrqrIEbVo7YJMt8EUVvzcTF45Qrv7uQkLC4Dxw2iXHVjsq%2FGK9BE5FaVYiU8fUIerAvVBOCWP%2B6YrA8vOfIFZ%2FhSlPqaLOfDxkmig4FBmA1JtTNo45WB%2Fh2%2BQmFbg1j7ukdfjG6HuegO0CG%2B%2FhgpLb%2BcHQQHy6K%2FRp%2FsoUhlUorakqScYbm7Gm5NRV%2BwK76MXGPzUP%2BCoNP9SbZNMOMV052d66jDcUqBJ50%2BttQebjNanjIDawe%2B%2FL1uOBoTwmAbgtivmXa6cGz8rG79I9xdefEVVeckSXhpQ8zYXALGZD%2FT0nbxbbMRep9ZYNycJHPOdi7NQWYwvYaLwgY6pgHL5lunU3iLJ2sFC8cSnO1B3WHz7AqILgPEBIRINBB%2FKQf3RPZSOr%2FKAPCoDpNoZaqDzSIYReOZ45IgmhEZSl7hVVvjiHadRvDKm93FOrsqdvISMlSC4jXS%2B9hIOVA0IIOj7IMGvzpWHGE7T32qFCl3Qu8pdO3aCKXOpzLWtwjeTujPuTcn41GSZcs%2BKBBhu9Xm8TXibz%2Ft8Zfp%2B2DNnbVnx7dstA0u&X-Amz-Signature=1fcb6770320d337837ccea9cfcc3473f11e0a8e179b521f54119b7ea0b93eecf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E3L46LG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJs%2BkNbAf924EONILLPZ0%2FcFzqHWy12BoZkjamA2juxAiBeRTpocV9ZGNfwgyf3v9HDI9RgrLEnfaABEiKaamdQKir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMES5lhKywaRZeDlytKtwD%2F%2F6Sz3IgFJ35T3mE8yjGNBHp71NrPx2DxMyPIMZs9R9MhmQ%2FaBy%2BHasg%2BN%2BZC522X5NSBLa8eIQJOA1%2B3%2BHTDRTJ7GbD8A4eHYP6P9zv0O0rytB72B3lID2NtQnnB%2FyaHSsC7gVSFIhCkdotYUYtraSyv%2BJ8jz%2FDC28V%2BdnPmovg5PhBvKwNs%2FaTGx%2FIjh0s5qjXAxT%2Bknfyfh3zJu423y5oIo95kDEdis3nTUHG4ih4%2BGMe26Ury2Ol7qilT7jV03cxHNZNMDzcCANBrL28ZevPa7f8SGJn%2BLo%2FmDjXRJ5GeMJZNxVdBrqrIEbVo7YJMt8EUVvzcTF45Qrv7uQkLC4Dxw2iXHVjsq%2FGK9BE5FaVYiU8fUIerAvVBOCWP%2B6YrA8vOfIFZ%2FhSlPqaLOfDxkmig4FBmA1JtTNo45WB%2Fh2%2BQmFbg1j7ukdfjG6HuegO0CG%2B%2FhgpLb%2BcHQQHy6K%2FRp%2FsoUhlUorakqScYbm7Gm5NRV%2BwK76MXGPzUP%2BCoNP9SbZNMOMV052d66jDcUqBJ50%2BttQebjNanjIDawe%2B%2FL1uOBoTwmAbgtivmXa6cGz8rG79I9xdefEVVeckSXhpQ8zYXALGZD%2FT0nbxbbMRep9ZYNycJHPOdi7NQWYwvYaLwgY6pgHL5lunU3iLJ2sFC8cSnO1B3WHz7AqILgPEBIRINBB%2FKQf3RPZSOr%2FKAPCoDpNoZaqDzSIYReOZ45IgmhEZSl7hVVvjiHadRvDKm93FOrsqdvISMlSC4jXS%2B9hIOVA0IIOj7IMGvzpWHGE7T32qFCl3Qu8pdO3aCKXOpzLWtwjeTujPuTcn41GSZcs%2BKBBhu9Xm8TXibz%2Ft8Zfp%2B2DNnbVnx7dstA0u&X-Amz-Signature=02ec1c8cbacf0631a63a39a9ce5e540b2381e40210c991eb8a8badc35da37a91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E3L46LG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJs%2BkNbAf924EONILLPZ0%2FcFzqHWy12BoZkjamA2juxAiBeRTpocV9ZGNfwgyf3v9HDI9RgrLEnfaABEiKaamdQKir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMES5lhKywaRZeDlytKtwD%2F%2F6Sz3IgFJ35T3mE8yjGNBHp71NrPx2DxMyPIMZs9R9MhmQ%2FaBy%2BHasg%2BN%2BZC522X5NSBLa8eIQJOA1%2B3%2BHTDRTJ7GbD8A4eHYP6P9zv0O0rytB72B3lID2NtQnnB%2FyaHSsC7gVSFIhCkdotYUYtraSyv%2BJ8jz%2FDC28V%2BdnPmovg5PhBvKwNs%2FaTGx%2FIjh0s5qjXAxT%2Bknfyfh3zJu423y5oIo95kDEdis3nTUHG4ih4%2BGMe26Ury2Ol7qilT7jV03cxHNZNMDzcCANBrL28ZevPa7f8SGJn%2BLo%2FmDjXRJ5GeMJZNxVdBrqrIEbVo7YJMt8EUVvzcTF45Qrv7uQkLC4Dxw2iXHVjsq%2FGK9BE5FaVYiU8fUIerAvVBOCWP%2B6YrA8vOfIFZ%2FhSlPqaLOfDxkmig4FBmA1JtTNo45WB%2Fh2%2BQmFbg1j7ukdfjG6HuegO0CG%2B%2FhgpLb%2BcHQQHy6K%2FRp%2FsoUhlUorakqScYbm7Gm5NRV%2BwK76MXGPzUP%2BCoNP9SbZNMOMV052d66jDcUqBJ50%2BttQebjNanjIDawe%2B%2FL1uOBoTwmAbgtivmXa6cGz8rG79I9xdefEVVeckSXhpQ8zYXALGZD%2FT0nbxbbMRep9ZYNycJHPOdi7NQWYwvYaLwgY6pgHL5lunU3iLJ2sFC8cSnO1B3WHz7AqILgPEBIRINBB%2FKQf3RPZSOr%2FKAPCoDpNoZaqDzSIYReOZ45IgmhEZSl7hVVvjiHadRvDKm93FOrsqdvISMlSC4jXS%2B9hIOVA0IIOj7IMGvzpWHGE7T32qFCl3Qu8pdO3aCKXOpzLWtwjeTujPuTcn41GSZcs%2BKBBhu9Xm8TXibz%2Ft8Zfp%2B2DNnbVnx7dstA0u&X-Amz-Signature=08f733adc6fa4584412d7d4c7093f46d5e3a574f685f4df1e40be799699adf23&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
