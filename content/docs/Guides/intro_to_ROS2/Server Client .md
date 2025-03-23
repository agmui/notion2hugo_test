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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RNITQI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCpY12gvZvKfoiBLm33YBBw4oWua8c1g5ynQ%2B%2Buv4Ad4gIhAOXG9tacOftaVSM17ioQfGSa%2FCLT0YhkFybHt7idQus%2BKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNTBW0QQD5fKjxXHwq3AOC9934%2BkbhDDTo%2BJiKJgloTmlwJuCZXJdPy2vaEQ4IYD%2FlFTtFHyk8IHFCGh75o%2F%2BDPjZMlYDHH6VZN%2BqbqbEygLxn0SWBTXkFQw08VZmAX%2F6tE%2FpeH4tPVoREmYS0LpQGffYd%2BSy1taZJQDIITu843kAj9yZJWjVSVFDkMiicfwg6ICpB8MMWjcH9DnmLL5kFluIgUMj8NtcKyibcxwP1dZOhnLUsswpwbsBbk75EaPlQNXhSR49pcRVlOxsdkYZZooTF2Rx8WU4KFzdJU7R8JDu%2BxO7K9oMxYzzAvhSPr2AG0mdUatK%2BInLJcylt0YzRx3ORxfkIripiSXGdpRTqIn%2BgDvvsQSjlu6VW6itWkLz%2Fec5Nc0Kkgd2pcUR%2F4PY5QWNzDbXYQmTm9cLRgSeObzbe2RKisyi9vbriHmcnx9%2BOmOmaburgWLdiFnCjzelD5nWZkkJuGjRxEYoEnzgXCsuwktvYyJF0yYTd9C02u2Aphe%2FrAtrx7t2ZEa4ReTHrXwWdlHEYaSpm9hUPTRagbwscikonJbmK9FbfQBPg27R7yTBGwh5bEj8o5mWZzlIp240aZzSJvDp4Xmc43sJKL32W2eu0bzWlO5WW5PK%2F3f6WRmTiIzqL5dBPsTCXzf%2B%2BBjqkAWElxyKEW3XqoMdvxrVm3Oii9yZj2OtPnxurc1E%2F0XzgqyR0ZF5BfcnTeEGIUBkUneDlls9LW2x5HYlq9SLgPkpYkVp6vqIDBPePvjQQAwxWjX4eP2MXt4WALOe6%2B1msQjtmyc0Jb4rJouJsmEMrVH%2F4aZXI06zm4hITsqeMuFO7St1lo%2B9RlxO0RgGOAQlsdyKkFsw%2BzTGyeRfIJWjHORmK%2FQEV&X-Amz-Signature=fcac4e803367613f9fd3d94dd0dad009e08cfaeb6e20437538b9a07c710d2e09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RNITQI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCpY12gvZvKfoiBLm33YBBw4oWua8c1g5ynQ%2B%2Buv4Ad4gIhAOXG9tacOftaVSM17ioQfGSa%2FCLT0YhkFybHt7idQus%2BKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNTBW0QQD5fKjxXHwq3AOC9934%2BkbhDDTo%2BJiKJgloTmlwJuCZXJdPy2vaEQ4IYD%2FlFTtFHyk8IHFCGh75o%2F%2BDPjZMlYDHH6VZN%2BqbqbEygLxn0SWBTXkFQw08VZmAX%2F6tE%2FpeH4tPVoREmYS0LpQGffYd%2BSy1taZJQDIITu843kAj9yZJWjVSVFDkMiicfwg6ICpB8MMWjcH9DnmLL5kFluIgUMj8NtcKyibcxwP1dZOhnLUsswpwbsBbk75EaPlQNXhSR49pcRVlOxsdkYZZooTF2Rx8WU4KFzdJU7R8JDu%2BxO7K9oMxYzzAvhSPr2AG0mdUatK%2BInLJcylt0YzRx3ORxfkIripiSXGdpRTqIn%2BgDvvsQSjlu6VW6itWkLz%2Fec5Nc0Kkgd2pcUR%2F4PY5QWNzDbXYQmTm9cLRgSeObzbe2RKisyi9vbriHmcnx9%2BOmOmaburgWLdiFnCjzelD5nWZkkJuGjRxEYoEnzgXCsuwktvYyJF0yYTd9C02u2Aphe%2FrAtrx7t2ZEa4ReTHrXwWdlHEYaSpm9hUPTRagbwscikonJbmK9FbfQBPg27R7yTBGwh5bEj8o5mWZzlIp240aZzSJvDp4Xmc43sJKL32W2eu0bzWlO5WW5PK%2F3f6WRmTiIzqL5dBPsTCXzf%2B%2BBjqkAWElxyKEW3XqoMdvxrVm3Oii9yZj2OtPnxurc1E%2F0XzgqyR0ZF5BfcnTeEGIUBkUneDlls9LW2x5HYlq9SLgPkpYkVp6vqIDBPePvjQQAwxWjX4eP2MXt4WALOe6%2B1msQjtmyc0Jb4rJouJsmEMrVH%2F4aZXI06zm4hITsqeMuFO7St1lo%2B9RlxO0RgGOAQlsdyKkFsw%2BzTGyeRfIJWjHORmK%2FQEV&X-Amz-Signature=432531c4eed55e72ae77d3d576a4e4b3d95e83935605f102669c612ac6371053&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RNITQI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCpY12gvZvKfoiBLm33YBBw4oWua8c1g5ynQ%2B%2Buv4Ad4gIhAOXG9tacOftaVSM17ioQfGSa%2FCLT0YhkFybHt7idQus%2BKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNTBW0QQD5fKjxXHwq3AOC9934%2BkbhDDTo%2BJiKJgloTmlwJuCZXJdPy2vaEQ4IYD%2FlFTtFHyk8IHFCGh75o%2F%2BDPjZMlYDHH6VZN%2BqbqbEygLxn0SWBTXkFQw08VZmAX%2F6tE%2FpeH4tPVoREmYS0LpQGffYd%2BSy1taZJQDIITu843kAj9yZJWjVSVFDkMiicfwg6ICpB8MMWjcH9DnmLL5kFluIgUMj8NtcKyibcxwP1dZOhnLUsswpwbsBbk75EaPlQNXhSR49pcRVlOxsdkYZZooTF2Rx8WU4KFzdJU7R8JDu%2BxO7K9oMxYzzAvhSPr2AG0mdUatK%2BInLJcylt0YzRx3ORxfkIripiSXGdpRTqIn%2BgDvvsQSjlu6VW6itWkLz%2Fec5Nc0Kkgd2pcUR%2F4PY5QWNzDbXYQmTm9cLRgSeObzbe2RKisyi9vbriHmcnx9%2BOmOmaburgWLdiFnCjzelD5nWZkkJuGjRxEYoEnzgXCsuwktvYyJF0yYTd9C02u2Aphe%2FrAtrx7t2ZEa4ReTHrXwWdlHEYaSpm9hUPTRagbwscikonJbmK9FbfQBPg27R7yTBGwh5bEj8o5mWZzlIp240aZzSJvDp4Xmc43sJKL32W2eu0bzWlO5WW5PK%2F3f6WRmTiIzqL5dBPsTCXzf%2B%2BBjqkAWElxyKEW3XqoMdvxrVm3Oii9yZj2OtPnxurc1E%2F0XzgqyR0ZF5BfcnTeEGIUBkUneDlls9LW2x5HYlq9SLgPkpYkVp6vqIDBPePvjQQAwxWjX4eP2MXt4WALOe6%2B1msQjtmyc0Jb4rJouJsmEMrVH%2F4aZXI06zm4hITsqeMuFO7St1lo%2B9RlxO0RgGOAQlsdyKkFsw%2BzTGyeRfIJWjHORmK%2FQEV&X-Amz-Signature=f7616a1532eb213dcd3a344a83558f26d9e17ad4b76b5a235da073a7f6579051&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RNITQI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCpY12gvZvKfoiBLm33YBBw4oWua8c1g5ynQ%2B%2Buv4Ad4gIhAOXG9tacOftaVSM17ioQfGSa%2FCLT0YhkFybHt7idQus%2BKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNTBW0QQD5fKjxXHwq3AOC9934%2BkbhDDTo%2BJiKJgloTmlwJuCZXJdPy2vaEQ4IYD%2FlFTtFHyk8IHFCGh75o%2F%2BDPjZMlYDHH6VZN%2BqbqbEygLxn0SWBTXkFQw08VZmAX%2F6tE%2FpeH4tPVoREmYS0LpQGffYd%2BSy1taZJQDIITu843kAj9yZJWjVSVFDkMiicfwg6ICpB8MMWjcH9DnmLL5kFluIgUMj8NtcKyibcxwP1dZOhnLUsswpwbsBbk75EaPlQNXhSR49pcRVlOxsdkYZZooTF2Rx8WU4KFzdJU7R8JDu%2BxO7K9oMxYzzAvhSPr2AG0mdUatK%2BInLJcylt0YzRx3ORxfkIripiSXGdpRTqIn%2BgDvvsQSjlu6VW6itWkLz%2Fec5Nc0Kkgd2pcUR%2F4PY5QWNzDbXYQmTm9cLRgSeObzbe2RKisyi9vbriHmcnx9%2BOmOmaburgWLdiFnCjzelD5nWZkkJuGjRxEYoEnzgXCsuwktvYyJF0yYTd9C02u2Aphe%2FrAtrx7t2ZEa4ReTHrXwWdlHEYaSpm9hUPTRagbwscikonJbmK9FbfQBPg27R7yTBGwh5bEj8o5mWZzlIp240aZzSJvDp4Xmc43sJKL32W2eu0bzWlO5WW5PK%2F3f6WRmTiIzqL5dBPsTCXzf%2B%2BBjqkAWElxyKEW3XqoMdvxrVm3Oii9yZj2OtPnxurc1E%2F0XzgqyR0ZF5BfcnTeEGIUBkUneDlls9LW2x5HYlq9SLgPkpYkVp6vqIDBPePvjQQAwxWjX4eP2MXt4WALOe6%2B1msQjtmyc0Jb4rJouJsmEMrVH%2F4aZXI06zm4hITsqeMuFO7St1lo%2B9RlxO0RgGOAQlsdyKkFsw%2BzTGyeRfIJWjHORmK%2FQEV&X-Amz-Signature=1e6463110050e7961c552d0c6daeb9ef6c15e3b7e1540f9976920a828179e303&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RNITQI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCpY12gvZvKfoiBLm33YBBw4oWua8c1g5ynQ%2B%2Buv4Ad4gIhAOXG9tacOftaVSM17ioQfGSa%2FCLT0YhkFybHt7idQus%2BKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNTBW0QQD5fKjxXHwq3AOC9934%2BkbhDDTo%2BJiKJgloTmlwJuCZXJdPy2vaEQ4IYD%2FlFTtFHyk8IHFCGh75o%2F%2BDPjZMlYDHH6VZN%2BqbqbEygLxn0SWBTXkFQw08VZmAX%2F6tE%2FpeH4tPVoREmYS0LpQGffYd%2BSy1taZJQDIITu843kAj9yZJWjVSVFDkMiicfwg6ICpB8MMWjcH9DnmLL5kFluIgUMj8NtcKyibcxwP1dZOhnLUsswpwbsBbk75EaPlQNXhSR49pcRVlOxsdkYZZooTF2Rx8WU4KFzdJU7R8JDu%2BxO7K9oMxYzzAvhSPr2AG0mdUatK%2BInLJcylt0YzRx3ORxfkIripiSXGdpRTqIn%2BgDvvsQSjlu6VW6itWkLz%2Fec5Nc0Kkgd2pcUR%2F4PY5QWNzDbXYQmTm9cLRgSeObzbe2RKisyi9vbriHmcnx9%2BOmOmaburgWLdiFnCjzelD5nWZkkJuGjRxEYoEnzgXCsuwktvYyJF0yYTd9C02u2Aphe%2FrAtrx7t2ZEa4ReTHrXwWdlHEYaSpm9hUPTRagbwscikonJbmK9FbfQBPg27R7yTBGwh5bEj8o5mWZzlIp240aZzSJvDp4Xmc43sJKL32W2eu0bzWlO5WW5PK%2F3f6WRmTiIzqL5dBPsTCXzf%2B%2BBjqkAWElxyKEW3XqoMdvxrVm3Oii9yZj2OtPnxurc1E%2F0XzgqyR0ZF5BfcnTeEGIUBkUneDlls9LW2x5HYlq9SLgPkpYkVp6vqIDBPePvjQQAwxWjX4eP2MXt4WALOe6%2B1msQjtmyc0Jb4rJouJsmEMrVH%2F4aZXI06zm4hITsqeMuFO7St1lo%2B9RlxO0RgGOAQlsdyKkFsw%2BzTGyeRfIJWjHORmK%2FQEV&X-Amz-Signature=94f3fb72e0d6fe521287b06740602d9fe10ec04ddfff516ef95626ce7cc3267c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
