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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUFUYA5%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQChbQcbc4FlOVFKKQhFQx8L6Kq6SvG8CR9Sn9iIzfVVMQIgODboeULp9Zzd6NF7H4qd9tY%2BxwSqqBNGW7oJzQYcbHgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHG3%2Boy0%2Bc5cONnDoircA9smw2U4qJu%2Bq%2FRd4Y0sPE0vAj73pkoljuCBdS3Ua2I1IoLVXeQT6uVkYuBQopN2fWepHgkqqbbSaUy%2F9T2HpJ2l6XyMAubvJz34AUdlB5xT0NXOgD4XgUfvW0bjq%2FUXse93BCwwc5iXa8UqQ%2BlAeB%2Bk5VNN00Kwj7MDITltLnar6p8P57ZhhhyGR%2Bm28sBppgKFFxJRZHf4%2FJ%2BL4fDmMTAutipBvaHxBVOgX9yufQPHo1z%2FDDJOCtMw9FqBQI9Ej%2Fwz7PvMAUV7GQYasU8T4GryX9bdpSlh0xzFOq9wNFKQfIRMcfbG%2FN9DgnOO1cN1Nf8r3ysrahMjzonjihigfqFQsRjSQJCIiknLaKiEQChvt%2Br%2FMfLvsBF7brr7AaVoQB1QMipoNMvTZtIP4dRtclWqgg6HbBamk%2BaYvGcC6rMleALVklCkIumEiccm5xWcZ81NWF%2FrDAeLvnT7dNG%2F%2FxwMpbAJnVxkI%2FEZk93hwXnelaNAikaF98fHopsDc8Lzu%2FHuAl9nX5XHLXFSzX2NldGJ%2BqoZQZIHykGlZGmQ2BRahcQJVT%2BGIPs31DWl%2B4z6WPd0HeT4tKPhleHQtdY8Ux0RnVC6REytlZDKCy6KJeN4Y%2BVBsy73Wo0rt2dYMPjJu74GOqUBTarIeeU%2Bj3e7YOB3HmZfXdRPklT8A7G5ubX2aYAKuEIbGNUECOvYx1DG%2FNs7qWDE3bDfah9rR2Yn820gWhwBVEJ%2FkAFRdW6C9L9k%2F2Q2cvvOIAUl4BYLXt%2BCnqQzkcjoB9DsLPyQAL5dqd0VxDrPWkzljFi95QChjOB4ltCgAbdfUL8HRihAlm5zOmji8miuQhvbOy4rcnqTvt0CwBLDPmOgG5iH&X-Amz-Signature=4f41a793b4c01d29096019cea795c750f84e5e4a29d5081bc6f268f6178b2ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUFUYA5%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQChbQcbc4FlOVFKKQhFQx8L6Kq6SvG8CR9Sn9iIzfVVMQIgODboeULp9Zzd6NF7H4qd9tY%2BxwSqqBNGW7oJzQYcbHgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHG3%2Boy0%2Bc5cONnDoircA9smw2U4qJu%2Bq%2FRd4Y0sPE0vAj73pkoljuCBdS3Ua2I1IoLVXeQT6uVkYuBQopN2fWepHgkqqbbSaUy%2F9T2HpJ2l6XyMAubvJz34AUdlB5xT0NXOgD4XgUfvW0bjq%2FUXse93BCwwc5iXa8UqQ%2BlAeB%2Bk5VNN00Kwj7MDITltLnar6p8P57ZhhhyGR%2Bm28sBppgKFFxJRZHf4%2FJ%2BL4fDmMTAutipBvaHxBVOgX9yufQPHo1z%2FDDJOCtMw9FqBQI9Ej%2Fwz7PvMAUV7GQYasU8T4GryX9bdpSlh0xzFOq9wNFKQfIRMcfbG%2FN9DgnOO1cN1Nf8r3ysrahMjzonjihigfqFQsRjSQJCIiknLaKiEQChvt%2Br%2FMfLvsBF7brr7AaVoQB1QMipoNMvTZtIP4dRtclWqgg6HbBamk%2BaYvGcC6rMleALVklCkIumEiccm5xWcZ81NWF%2FrDAeLvnT7dNG%2F%2FxwMpbAJnVxkI%2FEZk93hwXnelaNAikaF98fHopsDc8Lzu%2FHuAl9nX5XHLXFSzX2NldGJ%2BqoZQZIHykGlZGmQ2BRahcQJVT%2BGIPs31DWl%2B4z6WPd0HeT4tKPhleHQtdY8Ux0RnVC6REytlZDKCy6KJeN4Y%2BVBsy73Wo0rt2dYMPjJu74GOqUBTarIeeU%2Bj3e7YOB3HmZfXdRPklT8A7G5ubX2aYAKuEIbGNUECOvYx1DG%2FNs7qWDE3bDfah9rR2Yn820gWhwBVEJ%2FkAFRdW6C9L9k%2F2Q2cvvOIAUl4BYLXt%2BCnqQzkcjoB9DsLPyQAL5dqd0VxDrPWkzljFi95QChjOB4ltCgAbdfUL8HRihAlm5zOmji8miuQhvbOy4rcnqTvt0CwBLDPmOgG5iH&X-Amz-Signature=73296a474840ae7aa6e0b5b61387073e78714eea8bb6797bd611bdbb0a1bffaa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUFUYA5%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQChbQcbc4FlOVFKKQhFQx8L6Kq6SvG8CR9Sn9iIzfVVMQIgODboeULp9Zzd6NF7H4qd9tY%2BxwSqqBNGW7oJzQYcbHgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHG3%2Boy0%2Bc5cONnDoircA9smw2U4qJu%2Bq%2FRd4Y0sPE0vAj73pkoljuCBdS3Ua2I1IoLVXeQT6uVkYuBQopN2fWepHgkqqbbSaUy%2F9T2HpJ2l6XyMAubvJz34AUdlB5xT0NXOgD4XgUfvW0bjq%2FUXse93BCwwc5iXa8UqQ%2BlAeB%2Bk5VNN00Kwj7MDITltLnar6p8P57ZhhhyGR%2Bm28sBppgKFFxJRZHf4%2FJ%2BL4fDmMTAutipBvaHxBVOgX9yufQPHo1z%2FDDJOCtMw9FqBQI9Ej%2Fwz7PvMAUV7GQYasU8T4GryX9bdpSlh0xzFOq9wNFKQfIRMcfbG%2FN9DgnOO1cN1Nf8r3ysrahMjzonjihigfqFQsRjSQJCIiknLaKiEQChvt%2Br%2FMfLvsBF7brr7AaVoQB1QMipoNMvTZtIP4dRtclWqgg6HbBamk%2BaYvGcC6rMleALVklCkIumEiccm5xWcZ81NWF%2FrDAeLvnT7dNG%2F%2FxwMpbAJnVxkI%2FEZk93hwXnelaNAikaF98fHopsDc8Lzu%2FHuAl9nX5XHLXFSzX2NldGJ%2BqoZQZIHykGlZGmQ2BRahcQJVT%2BGIPs31DWl%2B4z6WPd0HeT4tKPhleHQtdY8Ux0RnVC6REytlZDKCy6KJeN4Y%2BVBsy73Wo0rt2dYMPjJu74GOqUBTarIeeU%2Bj3e7YOB3HmZfXdRPklT8A7G5ubX2aYAKuEIbGNUECOvYx1DG%2FNs7qWDE3bDfah9rR2Yn820gWhwBVEJ%2FkAFRdW6C9L9k%2F2Q2cvvOIAUl4BYLXt%2BCnqQzkcjoB9DsLPyQAL5dqd0VxDrPWkzljFi95QChjOB4ltCgAbdfUL8HRihAlm5zOmji8miuQhvbOy4rcnqTvt0CwBLDPmOgG5iH&X-Amz-Signature=f701b95bf14462d5151e6450e3f25d12cf67aae3dea984094369de23812c5151&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUFUYA5%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQChbQcbc4FlOVFKKQhFQx8L6Kq6SvG8CR9Sn9iIzfVVMQIgODboeULp9Zzd6NF7H4qd9tY%2BxwSqqBNGW7oJzQYcbHgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHG3%2Boy0%2Bc5cONnDoircA9smw2U4qJu%2Bq%2FRd4Y0sPE0vAj73pkoljuCBdS3Ua2I1IoLVXeQT6uVkYuBQopN2fWepHgkqqbbSaUy%2F9T2HpJ2l6XyMAubvJz34AUdlB5xT0NXOgD4XgUfvW0bjq%2FUXse93BCwwc5iXa8UqQ%2BlAeB%2Bk5VNN00Kwj7MDITltLnar6p8P57ZhhhyGR%2Bm28sBppgKFFxJRZHf4%2FJ%2BL4fDmMTAutipBvaHxBVOgX9yufQPHo1z%2FDDJOCtMw9FqBQI9Ej%2Fwz7PvMAUV7GQYasU8T4GryX9bdpSlh0xzFOq9wNFKQfIRMcfbG%2FN9DgnOO1cN1Nf8r3ysrahMjzonjihigfqFQsRjSQJCIiknLaKiEQChvt%2Br%2FMfLvsBF7brr7AaVoQB1QMipoNMvTZtIP4dRtclWqgg6HbBamk%2BaYvGcC6rMleALVklCkIumEiccm5xWcZ81NWF%2FrDAeLvnT7dNG%2F%2FxwMpbAJnVxkI%2FEZk93hwXnelaNAikaF98fHopsDc8Lzu%2FHuAl9nX5XHLXFSzX2NldGJ%2BqoZQZIHykGlZGmQ2BRahcQJVT%2BGIPs31DWl%2B4z6WPd0HeT4tKPhleHQtdY8Ux0RnVC6REytlZDKCy6KJeN4Y%2BVBsy73Wo0rt2dYMPjJu74GOqUBTarIeeU%2Bj3e7YOB3HmZfXdRPklT8A7G5ubX2aYAKuEIbGNUECOvYx1DG%2FNs7qWDE3bDfah9rR2Yn820gWhwBVEJ%2FkAFRdW6C9L9k%2F2Q2cvvOIAUl4BYLXt%2BCnqQzkcjoB9DsLPyQAL5dqd0VxDrPWkzljFi95QChjOB4ltCgAbdfUL8HRihAlm5zOmji8miuQhvbOy4rcnqTvt0CwBLDPmOgG5iH&X-Amz-Signature=8c49cbe06e8e78dd3ec32b64c04ac1b63fba0d7d95ea20d90a37f95160d68cef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUFUYA5%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQChbQcbc4FlOVFKKQhFQx8L6Kq6SvG8CR9Sn9iIzfVVMQIgODboeULp9Zzd6NF7H4qd9tY%2BxwSqqBNGW7oJzQYcbHgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHG3%2Boy0%2Bc5cONnDoircA9smw2U4qJu%2Bq%2FRd4Y0sPE0vAj73pkoljuCBdS3Ua2I1IoLVXeQT6uVkYuBQopN2fWepHgkqqbbSaUy%2F9T2HpJ2l6XyMAubvJz34AUdlB5xT0NXOgD4XgUfvW0bjq%2FUXse93BCwwc5iXa8UqQ%2BlAeB%2Bk5VNN00Kwj7MDITltLnar6p8P57ZhhhyGR%2Bm28sBppgKFFxJRZHf4%2FJ%2BL4fDmMTAutipBvaHxBVOgX9yufQPHo1z%2FDDJOCtMw9FqBQI9Ej%2Fwz7PvMAUV7GQYasU8T4GryX9bdpSlh0xzFOq9wNFKQfIRMcfbG%2FN9DgnOO1cN1Nf8r3ysrahMjzonjihigfqFQsRjSQJCIiknLaKiEQChvt%2Br%2FMfLvsBF7brr7AaVoQB1QMipoNMvTZtIP4dRtclWqgg6HbBamk%2BaYvGcC6rMleALVklCkIumEiccm5xWcZ81NWF%2FrDAeLvnT7dNG%2F%2FxwMpbAJnVxkI%2FEZk93hwXnelaNAikaF98fHopsDc8Lzu%2FHuAl9nX5XHLXFSzX2NldGJ%2BqoZQZIHykGlZGmQ2BRahcQJVT%2BGIPs31DWl%2B4z6WPd0HeT4tKPhleHQtdY8Ux0RnVC6REytlZDKCy6KJeN4Y%2BVBsy73Wo0rt2dYMPjJu74GOqUBTarIeeU%2Bj3e7YOB3HmZfXdRPklT8A7G5ubX2aYAKuEIbGNUECOvYx1DG%2FNs7qWDE3bDfah9rR2Yn820gWhwBVEJ%2FkAFRdW6C9L9k%2F2Q2cvvOIAUl4BYLXt%2BCnqQzkcjoB9DsLPyQAL5dqd0VxDrPWkzljFi95QChjOB4ltCgAbdfUL8HRihAlm5zOmji8miuQhvbOy4rcnqTvt0CwBLDPmOgG5iH&X-Amz-Signature=08fbe66bef127e578fbbd842f3bccbe06e0ff1e9097ce4f920405732346cdebe&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
