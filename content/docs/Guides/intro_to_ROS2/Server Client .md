---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTT45YXI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsYJCaIK58vYcp6SqrmRpL7EFCb60h%2ByPmmUxz8aa6zwIgTL2rVevQ%2FRo0RF%2FzH1ZEAtED6EnWUvKq3I2c3YkPO%2F0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDO5%2Fr3avcuEPuHVQQircA6y5vZdevdLru4NebpnEMbSOZ74O5cQ47%2F5C6aT5dYrhgyni7tNSWdwQkSc1Zt62Sm0lzTQOKcRZ5a0F1Ny7wDhfbpESN%2Fcki0SFy78KaomQ7sGzp7V2K5qR6fK5%2FsLTxI9KrG6sM%2Bq8lTajjEWqjT0BLsKSKNByMsavyGQAN%2FCJTR2cSfzv8JhL3gY%2B7DP1MNe2Ei27tuugBqS6kwKiaKfYQ1ShCD4IkvYp4smC8cjX7nDpEhMjT00Um0aQeEBLNgIJJ9uWf25iMs0xrnWe0jd9NQo5HnR8SQ1%2BsJ32wsYHVZBWI321TQAk3n1yBweAjGnQOOLRL9rlsIVO0SgSQNky591rceKzWP23wOQi36wOFgo6A4XimGQERmjF0o3G5NuBdgpEysVxJS4tWkGSectSGVIfyHSt7MMo9OxqdaBVGlaAYmksV4KVLiHBzOkl6nycsTpRQ9dVcnPhpIeruMCLBrbUl4ECdM0QjXWal1J8xuAkLDFdfCf%2F6L%2FzM3YLwp1P20vH9sbaikY7rBuTwiYfBGxRKiNF53QrRaCd0ypRE5B6%2Br6XcMmz8uTlVTamm2VzOecEj6d%2BrSlrqcPczJs6QZy7req2To381bRLfTIpHkHKGFp0qevWbcA3MM3W8b0GOqUBtu917MccHcnuEGkOVOvYYBT29VZOWIVEV0krhIMhMaooupF6VJJPev0FN5BKEqP8oUIlEaXlrLejWZfHFQUmyUtRyBQRrOTnXXeS8ucplwRPYMDSRHp%2Fw002LJmM9l%2FBN9bFzHRtwnYoF4jHB4gdib%2BvBwdbJIMGzbnnxHhtH3LVUgbsv9wOB%2FOEf%2Bq4ZbyfIFyxJt1W5%2BeDUR%2FlpZgN4lMdYRfM&X-Amz-Signature=9b4eb4235f82ac6a3701af715f2dc633cd623cac8d6310daf168f8abcdc9ba0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTT45YXI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsYJCaIK58vYcp6SqrmRpL7EFCb60h%2ByPmmUxz8aa6zwIgTL2rVevQ%2FRo0RF%2FzH1ZEAtED6EnWUvKq3I2c3YkPO%2F0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDO5%2Fr3avcuEPuHVQQircA6y5vZdevdLru4NebpnEMbSOZ74O5cQ47%2F5C6aT5dYrhgyni7tNSWdwQkSc1Zt62Sm0lzTQOKcRZ5a0F1Ny7wDhfbpESN%2Fcki0SFy78KaomQ7sGzp7V2K5qR6fK5%2FsLTxI9KrG6sM%2Bq8lTajjEWqjT0BLsKSKNByMsavyGQAN%2FCJTR2cSfzv8JhL3gY%2B7DP1MNe2Ei27tuugBqS6kwKiaKfYQ1ShCD4IkvYp4smC8cjX7nDpEhMjT00Um0aQeEBLNgIJJ9uWf25iMs0xrnWe0jd9NQo5HnR8SQ1%2BsJ32wsYHVZBWI321TQAk3n1yBweAjGnQOOLRL9rlsIVO0SgSQNky591rceKzWP23wOQi36wOFgo6A4XimGQERmjF0o3G5NuBdgpEysVxJS4tWkGSectSGVIfyHSt7MMo9OxqdaBVGlaAYmksV4KVLiHBzOkl6nycsTpRQ9dVcnPhpIeruMCLBrbUl4ECdM0QjXWal1J8xuAkLDFdfCf%2F6L%2FzM3YLwp1P20vH9sbaikY7rBuTwiYfBGxRKiNF53QrRaCd0ypRE5B6%2Br6XcMmz8uTlVTamm2VzOecEj6d%2BrSlrqcPczJs6QZy7req2To381bRLfTIpHkHKGFp0qevWbcA3MM3W8b0GOqUBtu917MccHcnuEGkOVOvYYBT29VZOWIVEV0krhIMhMaooupF6VJJPev0FN5BKEqP8oUIlEaXlrLejWZfHFQUmyUtRyBQRrOTnXXeS8ucplwRPYMDSRHp%2Fw002LJmM9l%2FBN9bFzHRtwnYoF4jHB4gdib%2BvBwdbJIMGzbnnxHhtH3LVUgbsv9wOB%2FOEf%2Bq4ZbyfIFyxJt1W5%2BeDUR%2FlpZgN4lMdYRfM&X-Amz-Signature=400edd9ca5781450c726b16ffba12bbb3f2e1f40e40f4070dac3d9c7c8832c28&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTT45YXI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsYJCaIK58vYcp6SqrmRpL7EFCb60h%2ByPmmUxz8aa6zwIgTL2rVevQ%2FRo0RF%2FzH1ZEAtED6EnWUvKq3I2c3YkPO%2F0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDO5%2Fr3avcuEPuHVQQircA6y5vZdevdLru4NebpnEMbSOZ74O5cQ47%2F5C6aT5dYrhgyni7tNSWdwQkSc1Zt62Sm0lzTQOKcRZ5a0F1Ny7wDhfbpESN%2Fcki0SFy78KaomQ7sGzp7V2K5qR6fK5%2FsLTxI9KrG6sM%2Bq8lTajjEWqjT0BLsKSKNByMsavyGQAN%2FCJTR2cSfzv8JhL3gY%2B7DP1MNe2Ei27tuugBqS6kwKiaKfYQ1ShCD4IkvYp4smC8cjX7nDpEhMjT00Um0aQeEBLNgIJJ9uWf25iMs0xrnWe0jd9NQo5HnR8SQ1%2BsJ32wsYHVZBWI321TQAk3n1yBweAjGnQOOLRL9rlsIVO0SgSQNky591rceKzWP23wOQi36wOFgo6A4XimGQERmjF0o3G5NuBdgpEysVxJS4tWkGSectSGVIfyHSt7MMo9OxqdaBVGlaAYmksV4KVLiHBzOkl6nycsTpRQ9dVcnPhpIeruMCLBrbUl4ECdM0QjXWal1J8xuAkLDFdfCf%2F6L%2FzM3YLwp1P20vH9sbaikY7rBuTwiYfBGxRKiNF53QrRaCd0ypRE5B6%2Br6XcMmz8uTlVTamm2VzOecEj6d%2BrSlrqcPczJs6QZy7req2To381bRLfTIpHkHKGFp0qevWbcA3MM3W8b0GOqUBtu917MccHcnuEGkOVOvYYBT29VZOWIVEV0krhIMhMaooupF6VJJPev0FN5BKEqP8oUIlEaXlrLejWZfHFQUmyUtRyBQRrOTnXXeS8ucplwRPYMDSRHp%2Fw002LJmM9l%2FBN9bFzHRtwnYoF4jHB4gdib%2BvBwdbJIMGzbnnxHhtH3LVUgbsv9wOB%2FOEf%2Bq4ZbyfIFyxJt1W5%2BeDUR%2FlpZgN4lMdYRfM&X-Amz-Signature=6c8a0c58dd232fa4290f98b85757ca1a8505dcef0757030e80cb339c829cc53e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTT45YXI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsYJCaIK58vYcp6SqrmRpL7EFCb60h%2ByPmmUxz8aa6zwIgTL2rVevQ%2FRo0RF%2FzH1ZEAtED6EnWUvKq3I2c3YkPO%2F0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDO5%2Fr3avcuEPuHVQQircA6y5vZdevdLru4NebpnEMbSOZ74O5cQ47%2F5C6aT5dYrhgyni7tNSWdwQkSc1Zt62Sm0lzTQOKcRZ5a0F1Ny7wDhfbpESN%2Fcki0SFy78KaomQ7sGzp7V2K5qR6fK5%2FsLTxI9KrG6sM%2Bq8lTajjEWqjT0BLsKSKNByMsavyGQAN%2FCJTR2cSfzv8JhL3gY%2B7DP1MNe2Ei27tuugBqS6kwKiaKfYQ1ShCD4IkvYp4smC8cjX7nDpEhMjT00Um0aQeEBLNgIJJ9uWf25iMs0xrnWe0jd9NQo5HnR8SQ1%2BsJ32wsYHVZBWI321TQAk3n1yBweAjGnQOOLRL9rlsIVO0SgSQNky591rceKzWP23wOQi36wOFgo6A4XimGQERmjF0o3G5NuBdgpEysVxJS4tWkGSectSGVIfyHSt7MMo9OxqdaBVGlaAYmksV4KVLiHBzOkl6nycsTpRQ9dVcnPhpIeruMCLBrbUl4ECdM0QjXWal1J8xuAkLDFdfCf%2F6L%2FzM3YLwp1P20vH9sbaikY7rBuTwiYfBGxRKiNF53QrRaCd0ypRE5B6%2Br6XcMmz8uTlVTamm2VzOecEj6d%2BrSlrqcPczJs6QZy7req2To381bRLfTIpHkHKGFp0qevWbcA3MM3W8b0GOqUBtu917MccHcnuEGkOVOvYYBT29VZOWIVEV0krhIMhMaooupF6VJJPev0FN5BKEqP8oUIlEaXlrLejWZfHFQUmyUtRyBQRrOTnXXeS8ucplwRPYMDSRHp%2Fw002LJmM9l%2FBN9bFzHRtwnYoF4jHB4gdib%2BvBwdbJIMGzbnnxHhtH3LVUgbsv9wOB%2FOEf%2Bq4ZbyfIFyxJt1W5%2BeDUR%2FlpZgN4lMdYRfM&X-Amz-Signature=738311f512beb4812d2004e47ba771862bfee5d10b41d858b65dcf22fa111729&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTT45YXI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsYJCaIK58vYcp6SqrmRpL7EFCb60h%2ByPmmUxz8aa6zwIgTL2rVevQ%2FRo0RF%2FzH1ZEAtED6EnWUvKq3I2c3YkPO%2F0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDO5%2Fr3avcuEPuHVQQircA6y5vZdevdLru4NebpnEMbSOZ74O5cQ47%2F5C6aT5dYrhgyni7tNSWdwQkSc1Zt62Sm0lzTQOKcRZ5a0F1Ny7wDhfbpESN%2Fcki0SFy78KaomQ7sGzp7V2K5qR6fK5%2FsLTxI9KrG6sM%2Bq8lTajjEWqjT0BLsKSKNByMsavyGQAN%2FCJTR2cSfzv8JhL3gY%2B7DP1MNe2Ei27tuugBqS6kwKiaKfYQ1ShCD4IkvYp4smC8cjX7nDpEhMjT00Um0aQeEBLNgIJJ9uWf25iMs0xrnWe0jd9NQo5HnR8SQ1%2BsJ32wsYHVZBWI321TQAk3n1yBweAjGnQOOLRL9rlsIVO0SgSQNky591rceKzWP23wOQi36wOFgo6A4XimGQERmjF0o3G5NuBdgpEysVxJS4tWkGSectSGVIfyHSt7MMo9OxqdaBVGlaAYmksV4KVLiHBzOkl6nycsTpRQ9dVcnPhpIeruMCLBrbUl4ECdM0QjXWal1J8xuAkLDFdfCf%2F6L%2FzM3YLwp1P20vH9sbaikY7rBuTwiYfBGxRKiNF53QrRaCd0ypRE5B6%2Br6XcMmz8uTlVTamm2VzOecEj6d%2BrSlrqcPczJs6QZy7req2To381bRLfTIpHkHKGFp0qevWbcA3MM3W8b0GOqUBtu917MccHcnuEGkOVOvYYBT29VZOWIVEV0krhIMhMaooupF6VJJPev0FN5BKEqP8oUIlEaXlrLejWZfHFQUmyUtRyBQRrOTnXXeS8ucplwRPYMDSRHp%2Fw002LJmM9l%2FBN9bFzHRtwnYoF4jHB4gdib%2BvBwdbJIMGzbnnxHhtH3LVUgbsv9wOB%2FOEf%2Bq4ZbyfIFyxJt1W5%2BeDUR%2FlpZgN4lMdYRfM&X-Amz-Signature=a72c4b3514bb2db9a8bd468d9e652a8a4a63cfd8324d27039c2d903aaee0c6f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
