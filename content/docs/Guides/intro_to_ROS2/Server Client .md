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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246VNT4G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBv4bKBhnRGC3FjWprsQie%2BIuZBrWgFcqPwe4k7NktdyAiEAlNDHBcP7DAacmi4a5IHkj2%2BL8XbJIYyQty9oqziqxjYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODNWmkTVeBJM3hKJyrcA%2FHCoxToNWlGaI5UyXefQc8wRYBHxzBGTjXWRMR2pCpwTXl%2FU0jasr0EmNArtqD%2B91FQ2bYZGhht0K5s1JNeu07PrBOwsrdWUfEcDkmZ5bm%2FSjwr3AVNeRwczubSEMaG3unIN72BFWN512N93xR3KWuZPAopVt6xp7Ut4ZDm0mYOJNAD1WjlxihLQzgUBU9Udbna%2BHTkfmIo7e4ZKaBYWfVs3S%2FP5y45%2Bn3%2BxiO8atKMN8FgrL7iPb%2B1gKT3C4hzWTG9N7K%2FNMetcpUIPtQZPO3gY%2FbCXmDxMLkMXIxep75Aq6yyfUygzO9OJi5leVdIcQqtnTxZHoH%2FO%2B60qN5x4GfB8vgF1UYJSSYSasFa793rp%2BApYiBH8xxmZ13h4VZe37wSjBG0p%2Fl5kzqBFWcbhVairftkWJTtL5t8DLHLFbgvXLTagmhvPU%2BQPzD5kD6UTowEphbVSpoLq4aFOci%2F3QpApAt%2Bp1PEPym55cZxu5VwJ4WyDNwMdy5ciVw0qmVTKE%2FlIJlpeWphR%2B3Xf1TlYyEmsKR%2FMZ4x%2BMeOo6IWS%2B%2FEfzdbR6oTCG79sFnAI7PDqz%2Bm5Fso3eWqWsgVm2XJVxz4lG14jLIHfsZhqEpu7Xsji1KvhXtMdua%2B32gzMJmQ0cQGOqUBI6jd174btALBe8vLxT57hJoBf9rnO8c7Vg%2BdVSq2s7QnB1lHLY8mpkll%2FhLmCjR%2B4yFyu56T52B1%2Fd%2FD%2BQhkak5JHMIp0iX7UYZxlMUQQq2%2BDEjrZ1cfS%2Fp8oUz1JPq8cERDWtkrTI27XIPqIqqTq7EGYS%2FAyE8g1iaj0xYfL79CnrS8svLU7T1sKVU2nAG3FJr0Yo9AkdYPgQx3bxssGJLmbnre&X-Amz-Signature=c290bcf0b23bcec479e46ecd58cfaf30c83ef0960e558b3b4843e2c6fc355d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246VNT4G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBv4bKBhnRGC3FjWprsQie%2BIuZBrWgFcqPwe4k7NktdyAiEAlNDHBcP7DAacmi4a5IHkj2%2BL8XbJIYyQty9oqziqxjYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODNWmkTVeBJM3hKJyrcA%2FHCoxToNWlGaI5UyXefQc8wRYBHxzBGTjXWRMR2pCpwTXl%2FU0jasr0EmNArtqD%2B91FQ2bYZGhht0K5s1JNeu07PrBOwsrdWUfEcDkmZ5bm%2FSjwr3AVNeRwczubSEMaG3unIN72BFWN512N93xR3KWuZPAopVt6xp7Ut4ZDm0mYOJNAD1WjlxihLQzgUBU9Udbna%2BHTkfmIo7e4ZKaBYWfVs3S%2FP5y45%2Bn3%2BxiO8atKMN8FgrL7iPb%2B1gKT3C4hzWTG9N7K%2FNMetcpUIPtQZPO3gY%2FbCXmDxMLkMXIxep75Aq6yyfUygzO9OJi5leVdIcQqtnTxZHoH%2FO%2B60qN5x4GfB8vgF1UYJSSYSasFa793rp%2BApYiBH8xxmZ13h4VZe37wSjBG0p%2Fl5kzqBFWcbhVairftkWJTtL5t8DLHLFbgvXLTagmhvPU%2BQPzD5kD6UTowEphbVSpoLq4aFOci%2F3QpApAt%2Bp1PEPym55cZxu5VwJ4WyDNwMdy5ciVw0qmVTKE%2FlIJlpeWphR%2B3Xf1TlYyEmsKR%2FMZ4x%2BMeOo6IWS%2B%2FEfzdbR6oTCG79sFnAI7PDqz%2Bm5Fso3eWqWsgVm2XJVxz4lG14jLIHfsZhqEpu7Xsji1KvhXtMdua%2B32gzMJmQ0cQGOqUBI6jd174btALBe8vLxT57hJoBf9rnO8c7Vg%2BdVSq2s7QnB1lHLY8mpkll%2FhLmCjR%2B4yFyu56T52B1%2Fd%2FD%2BQhkak5JHMIp0iX7UYZxlMUQQq2%2BDEjrZ1cfS%2Fp8oUz1JPq8cERDWtkrTI27XIPqIqqTq7EGYS%2FAyE8g1iaj0xYfL79CnrS8svLU7T1sKVU2nAG3FJr0Yo9AkdYPgQx3bxssGJLmbnre&X-Amz-Signature=484333c0ec40177b95f8f3f47488eee3f8d55735626b9237b0456725980dfc0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246VNT4G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBv4bKBhnRGC3FjWprsQie%2BIuZBrWgFcqPwe4k7NktdyAiEAlNDHBcP7DAacmi4a5IHkj2%2BL8XbJIYyQty9oqziqxjYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODNWmkTVeBJM3hKJyrcA%2FHCoxToNWlGaI5UyXefQc8wRYBHxzBGTjXWRMR2pCpwTXl%2FU0jasr0EmNArtqD%2B91FQ2bYZGhht0K5s1JNeu07PrBOwsrdWUfEcDkmZ5bm%2FSjwr3AVNeRwczubSEMaG3unIN72BFWN512N93xR3KWuZPAopVt6xp7Ut4ZDm0mYOJNAD1WjlxihLQzgUBU9Udbna%2BHTkfmIo7e4ZKaBYWfVs3S%2FP5y45%2Bn3%2BxiO8atKMN8FgrL7iPb%2B1gKT3C4hzWTG9N7K%2FNMetcpUIPtQZPO3gY%2FbCXmDxMLkMXIxep75Aq6yyfUygzO9OJi5leVdIcQqtnTxZHoH%2FO%2B60qN5x4GfB8vgF1UYJSSYSasFa793rp%2BApYiBH8xxmZ13h4VZe37wSjBG0p%2Fl5kzqBFWcbhVairftkWJTtL5t8DLHLFbgvXLTagmhvPU%2BQPzD5kD6UTowEphbVSpoLq4aFOci%2F3QpApAt%2Bp1PEPym55cZxu5VwJ4WyDNwMdy5ciVw0qmVTKE%2FlIJlpeWphR%2B3Xf1TlYyEmsKR%2FMZ4x%2BMeOo6IWS%2B%2FEfzdbR6oTCG79sFnAI7PDqz%2Bm5Fso3eWqWsgVm2XJVxz4lG14jLIHfsZhqEpu7Xsji1KvhXtMdua%2B32gzMJmQ0cQGOqUBI6jd174btALBe8vLxT57hJoBf9rnO8c7Vg%2BdVSq2s7QnB1lHLY8mpkll%2FhLmCjR%2B4yFyu56T52B1%2Fd%2FD%2BQhkak5JHMIp0iX7UYZxlMUQQq2%2BDEjrZ1cfS%2Fp8oUz1JPq8cERDWtkrTI27XIPqIqqTq7EGYS%2FAyE8g1iaj0xYfL79CnrS8svLU7T1sKVU2nAG3FJr0Yo9AkdYPgQx3bxssGJLmbnre&X-Amz-Signature=d8db7887b3c356448a183d61d4104feb1db02d5b3745b08436f1f4d1f46c6cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246VNT4G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBv4bKBhnRGC3FjWprsQie%2BIuZBrWgFcqPwe4k7NktdyAiEAlNDHBcP7DAacmi4a5IHkj2%2BL8XbJIYyQty9oqziqxjYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODNWmkTVeBJM3hKJyrcA%2FHCoxToNWlGaI5UyXefQc8wRYBHxzBGTjXWRMR2pCpwTXl%2FU0jasr0EmNArtqD%2B91FQ2bYZGhht0K5s1JNeu07PrBOwsrdWUfEcDkmZ5bm%2FSjwr3AVNeRwczubSEMaG3unIN72BFWN512N93xR3KWuZPAopVt6xp7Ut4ZDm0mYOJNAD1WjlxihLQzgUBU9Udbna%2BHTkfmIo7e4ZKaBYWfVs3S%2FP5y45%2Bn3%2BxiO8atKMN8FgrL7iPb%2B1gKT3C4hzWTG9N7K%2FNMetcpUIPtQZPO3gY%2FbCXmDxMLkMXIxep75Aq6yyfUygzO9OJi5leVdIcQqtnTxZHoH%2FO%2B60qN5x4GfB8vgF1UYJSSYSasFa793rp%2BApYiBH8xxmZ13h4VZe37wSjBG0p%2Fl5kzqBFWcbhVairftkWJTtL5t8DLHLFbgvXLTagmhvPU%2BQPzD5kD6UTowEphbVSpoLq4aFOci%2F3QpApAt%2Bp1PEPym55cZxu5VwJ4WyDNwMdy5ciVw0qmVTKE%2FlIJlpeWphR%2B3Xf1TlYyEmsKR%2FMZ4x%2BMeOo6IWS%2B%2FEfzdbR6oTCG79sFnAI7PDqz%2Bm5Fso3eWqWsgVm2XJVxz4lG14jLIHfsZhqEpu7Xsji1KvhXtMdua%2B32gzMJmQ0cQGOqUBI6jd174btALBe8vLxT57hJoBf9rnO8c7Vg%2BdVSq2s7QnB1lHLY8mpkll%2FhLmCjR%2B4yFyu56T52B1%2Fd%2FD%2BQhkak5JHMIp0iX7UYZxlMUQQq2%2BDEjrZ1cfS%2Fp8oUz1JPq8cERDWtkrTI27XIPqIqqTq7EGYS%2FAyE8g1iaj0xYfL79CnrS8svLU7T1sKVU2nAG3FJr0Yo9AkdYPgQx3bxssGJLmbnre&X-Amz-Signature=9f3dde9177fa7e94565e5537a7cc85ece6a4a6b0de6d20153e191efc7f34b417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246VNT4G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBv4bKBhnRGC3FjWprsQie%2BIuZBrWgFcqPwe4k7NktdyAiEAlNDHBcP7DAacmi4a5IHkj2%2BL8XbJIYyQty9oqziqxjYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODNWmkTVeBJM3hKJyrcA%2FHCoxToNWlGaI5UyXefQc8wRYBHxzBGTjXWRMR2pCpwTXl%2FU0jasr0EmNArtqD%2B91FQ2bYZGhht0K5s1JNeu07PrBOwsrdWUfEcDkmZ5bm%2FSjwr3AVNeRwczubSEMaG3unIN72BFWN512N93xR3KWuZPAopVt6xp7Ut4ZDm0mYOJNAD1WjlxihLQzgUBU9Udbna%2BHTkfmIo7e4ZKaBYWfVs3S%2FP5y45%2Bn3%2BxiO8atKMN8FgrL7iPb%2B1gKT3C4hzWTG9N7K%2FNMetcpUIPtQZPO3gY%2FbCXmDxMLkMXIxep75Aq6yyfUygzO9OJi5leVdIcQqtnTxZHoH%2FO%2B60qN5x4GfB8vgF1UYJSSYSasFa793rp%2BApYiBH8xxmZ13h4VZe37wSjBG0p%2Fl5kzqBFWcbhVairftkWJTtL5t8DLHLFbgvXLTagmhvPU%2BQPzD5kD6UTowEphbVSpoLq4aFOci%2F3QpApAt%2Bp1PEPym55cZxu5VwJ4WyDNwMdy5ciVw0qmVTKE%2FlIJlpeWphR%2B3Xf1TlYyEmsKR%2FMZ4x%2BMeOo6IWS%2B%2FEfzdbR6oTCG79sFnAI7PDqz%2Bm5Fso3eWqWsgVm2XJVxz4lG14jLIHfsZhqEpu7Xsji1KvhXtMdua%2B32gzMJmQ0cQGOqUBI6jd174btALBe8vLxT57hJoBf9rnO8c7Vg%2BdVSq2s7QnB1lHLY8mpkll%2FhLmCjR%2B4yFyu56T52B1%2Fd%2FD%2BQhkak5JHMIp0iX7UYZxlMUQQq2%2BDEjrZ1cfS%2Fp8oUz1JPq8cERDWtkrTI27XIPqIqqTq7EGYS%2FAyE8g1iaj0xYfL79CnrS8svLU7T1sKVU2nAG3FJr0Yo9AkdYPgQx3bxssGJLmbnre&X-Amz-Signature=5970d9a80ead09a8fd6bbf60a764f8c2327afce59b96fe3ee47a80305a3ef33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
