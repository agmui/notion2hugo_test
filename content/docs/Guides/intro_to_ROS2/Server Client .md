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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQPOU77%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj1Mf%2FP4HWgc%2FblhVkYZUjjVxEm1RkdIhpCivWbL0IrQIgAIpW%2Bz9lrHh1SFG5KBANKUcvML%2Fb4mKSyJMFaVKaCPYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG9%2BlHuVw04wpzk9JircAxeQxTQmTUeKmSJxQJqs1FpxsttFYdNcxg3qFjiERUT0pIvSVWdDZhbSumqbpYUDEKusTg90M26SShR4%2BKoEF6qphb1SyhJzB1DdJ4MOVHcRY2TYdbJgpdPRJCHq7tlOzfA9%2BTDlwcbeSsKoBzQsl4bhT9R5OTwYflwzDjwYgbuwz1EFeDIxTfuI1Whs3A9OCAY%2FRup3GxRi6hES8YkVm0Fo8vchskau3dkDS8TlPd4DiX7SHxn2Hhj1qvpD5sOa1TzCJX5M6piqh00yjtAScXXe8WWmzc%2B2nWCnnDwviSYo5NoAjMMBazTq230HxcL4D0ShlgorR46PfU75cwwLoqPsnZWr%2FbAu8u4FCpOC9BfRjL6qUyAaGhAotCpu%2FOKl7EydeT65huc8AdKaVv8RE9I7CqzGte%2FfMdTYc0iXxPFPh1XVshfA4cK8sxIuvln0pU8uQo2GgPgZQMjU7j%2FLQjBqu6fy%2FW2GT7oomAQVTcubbYMJr38URbDPyWPDAOXrL3exprAMa6v%2Fpmd2dbrplizIRKQNx%2FoCXvm%2FG0T7eUl78r7NUAMayxUMzTlLHEFptrXePWjPEF2RUxbQkhCFGtT4Lv5d%2BnQe2gh4HD%2BgtmYz2NcL796zTnkZaC4jMMyUp8EGOqUBJZ2vMCpaLmCEgDM009odKyw%2FLJ4tSJAVvnt2k2SyOX%2F5CmXy4%2FgMLcbwFMrb1EdVfCxZa9B0kvafKn5m8%2BLarGmO0ZQCNnY8to7FU46uLAG26E%2FqkJ%2BqwINUydaqGUaEbuK1iMLZbcF%2B7OX9MzAWfJKdWUTJ3pPDM6TuZvcn8gRH8O1N9PcsRM2l3ICXeMgwdIefLPkikrjYcKAZklf5KQzgrKMi&X-Amz-Signature=0ae5c76aa325c46b8d0ef8398adc26c595d675f6071a75c787d0eb7e5fca89c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQPOU77%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj1Mf%2FP4HWgc%2FblhVkYZUjjVxEm1RkdIhpCivWbL0IrQIgAIpW%2Bz9lrHh1SFG5KBANKUcvML%2Fb4mKSyJMFaVKaCPYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG9%2BlHuVw04wpzk9JircAxeQxTQmTUeKmSJxQJqs1FpxsttFYdNcxg3qFjiERUT0pIvSVWdDZhbSumqbpYUDEKusTg90M26SShR4%2BKoEF6qphb1SyhJzB1DdJ4MOVHcRY2TYdbJgpdPRJCHq7tlOzfA9%2BTDlwcbeSsKoBzQsl4bhT9R5OTwYflwzDjwYgbuwz1EFeDIxTfuI1Whs3A9OCAY%2FRup3GxRi6hES8YkVm0Fo8vchskau3dkDS8TlPd4DiX7SHxn2Hhj1qvpD5sOa1TzCJX5M6piqh00yjtAScXXe8WWmzc%2B2nWCnnDwviSYo5NoAjMMBazTq230HxcL4D0ShlgorR46PfU75cwwLoqPsnZWr%2FbAu8u4FCpOC9BfRjL6qUyAaGhAotCpu%2FOKl7EydeT65huc8AdKaVv8RE9I7CqzGte%2FfMdTYc0iXxPFPh1XVshfA4cK8sxIuvln0pU8uQo2GgPgZQMjU7j%2FLQjBqu6fy%2FW2GT7oomAQVTcubbYMJr38URbDPyWPDAOXrL3exprAMa6v%2Fpmd2dbrplizIRKQNx%2FoCXvm%2FG0T7eUl78r7NUAMayxUMzTlLHEFptrXePWjPEF2RUxbQkhCFGtT4Lv5d%2BnQe2gh4HD%2BgtmYz2NcL796zTnkZaC4jMMyUp8EGOqUBJZ2vMCpaLmCEgDM009odKyw%2FLJ4tSJAVvnt2k2SyOX%2F5CmXy4%2FgMLcbwFMrb1EdVfCxZa9B0kvafKn5m8%2BLarGmO0ZQCNnY8to7FU46uLAG26E%2FqkJ%2BqwINUydaqGUaEbuK1iMLZbcF%2B7OX9MzAWfJKdWUTJ3pPDM6TuZvcn8gRH8O1N9PcsRM2l3ICXeMgwdIefLPkikrjYcKAZklf5KQzgrKMi&X-Amz-Signature=9ebb75c1ea3b2b65b802d7eaffa219305e65bf84fc9439766864e1e02dc053a3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQPOU77%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj1Mf%2FP4HWgc%2FblhVkYZUjjVxEm1RkdIhpCivWbL0IrQIgAIpW%2Bz9lrHh1SFG5KBANKUcvML%2Fb4mKSyJMFaVKaCPYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG9%2BlHuVw04wpzk9JircAxeQxTQmTUeKmSJxQJqs1FpxsttFYdNcxg3qFjiERUT0pIvSVWdDZhbSumqbpYUDEKusTg90M26SShR4%2BKoEF6qphb1SyhJzB1DdJ4MOVHcRY2TYdbJgpdPRJCHq7tlOzfA9%2BTDlwcbeSsKoBzQsl4bhT9R5OTwYflwzDjwYgbuwz1EFeDIxTfuI1Whs3A9OCAY%2FRup3GxRi6hES8YkVm0Fo8vchskau3dkDS8TlPd4DiX7SHxn2Hhj1qvpD5sOa1TzCJX5M6piqh00yjtAScXXe8WWmzc%2B2nWCnnDwviSYo5NoAjMMBazTq230HxcL4D0ShlgorR46PfU75cwwLoqPsnZWr%2FbAu8u4FCpOC9BfRjL6qUyAaGhAotCpu%2FOKl7EydeT65huc8AdKaVv8RE9I7CqzGte%2FfMdTYc0iXxPFPh1XVshfA4cK8sxIuvln0pU8uQo2GgPgZQMjU7j%2FLQjBqu6fy%2FW2GT7oomAQVTcubbYMJr38URbDPyWPDAOXrL3exprAMa6v%2Fpmd2dbrplizIRKQNx%2FoCXvm%2FG0T7eUl78r7NUAMayxUMzTlLHEFptrXePWjPEF2RUxbQkhCFGtT4Lv5d%2BnQe2gh4HD%2BgtmYz2NcL796zTnkZaC4jMMyUp8EGOqUBJZ2vMCpaLmCEgDM009odKyw%2FLJ4tSJAVvnt2k2SyOX%2F5CmXy4%2FgMLcbwFMrb1EdVfCxZa9B0kvafKn5m8%2BLarGmO0ZQCNnY8to7FU46uLAG26E%2FqkJ%2BqwINUydaqGUaEbuK1iMLZbcF%2B7OX9MzAWfJKdWUTJ3pPDM6TuZvcn8gRH8O1N9PcsRM2l3ICXeMgwdIefLPkikrjYcKAZklf5KQzgrKMi&X-Amz-Signature=e9f676f3ad8ea4ac1a02b0e789574cdc8be6151f87beeedd9197781cc077de89&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQPOU77%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj1Mf%2FP4HWgc%2FblhVkYZUjjVxEm1RkdIhpCivWbL0IrQIgAIpW%2Bz9lrHh1SFG5KBANKUcvML%2Fb4mKSyJMFaVKaCPYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG9%2BlHuVw04wpzk9JircAxeQxTQmTUeKmSJxQJqs1FpxsttFYdNcxg3qFjiERUT0pIvSVWdDZhbSumqbpYUDEKusTg90M26SShR4%2BKoEF6qphb1SyhJzB1DdJ4MOVHcRY2TYdbJgpdPRJCHq7tlOzfA9%2BTDlwcbeSsKoBzQsl4bhT9R5OTwYflwzDjwYgbuwz1EFeDIxTfuI1Whs3A9OCAY%2FRup3GxRi6hES8YkVm0Fo8vchskau3dkDS8TlPd4DiX7SHxn2Hhj1qvpD5sOa1TzCJX5M6piqh00yjtAScXXe8WWmzc%2B2nWCnnDwviSYo5NoAjMMBazTq230HxcL4D0ShlgorR46PfU75cwwLoqPsnZWr%2FbAu8u4FCpOC9BfRjL6qUyAaGhAotCpu%2FOKl7EydeT65huc8AdKaVv8RE9I7CqzGte%2FfMdTYc0iXxPFPh1XVshfA4cK8sxIuvln0pU8uQo2GgPgZQMjU7j%2FLQjBqu6fy%2FW2GT7oomAQVTcubbYMJr38URbDPyWPDAOXrL3exprAMa6v%2Fpmd2dbrplizIRKQNx%2FoCXvm%2FG0T7eUl78r7NUAMayxUMzTlLHEFptrXePWjPEF2RUxbQkhCFGtT4Lv5d%2BnQe2gh4HD%2BgtmYz2NcL796zTnkZaC4jMMyUp8EGOqUBJZ2vMCpaLmCEgDM009odKyw%2FLJ4tSJAVvnt2k2SyOX%2F5CmXy4%2FgMLcbwFMrb1EdVfCxZa9B0kvafKn5m8%2BLarGmO0ZQCNnY8to7FU46uLAG26E%2FqkJ%2BqwINUydaqGUaEbuK1iMLZbcF%2B7OX9MzAWfJKdWUTJ3pPDM6TuZvcn8gRH8O1N9PcsRM2l3ICXeMgwdIefLPkikrjYcKAZklf5KQzgrKMi&X-Amz-Signature=3f3d2ca58a8f4799a007b36542a6c59c14f0c2cb22deb96c1be51065f348de2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQPOU77%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj1Mf%2FP4HWgc%2FblhVkYZUjjVxEm1RkdIhpCivWbL0IrQIgAIpW%2Bz9lrHh1SFG5KBANKUcvML%2Fb4mKSyJMFaVKaCPYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG9%2BlHuVw04wpzk9JircAxeQxTQmTUeKmSJxQJqs1FpxsttFYdNcxg3qFjiERUT0pIvSVWdDZhbSumqbpYUDEKusTg90M26SShR4%2BKoEF6qphb1SyhJzB1DdJ4MOVHcRY2TYdbJgpdPRJCHq7tlOzfA9%2BTDlwcbeSsKoBzQsl4bhT9R5OTwYflwzDjwYgbuwz1EFeDIxTfuI1Whs3A9OCAY%2FRup3GxRi6hES8YkVm0Fo8vchskau3dkDS8TlPd4DiX7SHxn2Hhj1qvpD5sOa1TzCJX5M6piqh00yjtAScXXe8WWmzc%2B2nWCnnDwviSYo5NoAjMMBazTq230HxcL4D0ShlgorR46PfU75cwwLoqPsnZWr%2FbAu8u4FCpOC9BfRjL6qUyAaGhAotCpu%2FOKl7EydeT65huc8AdKaVv8RE9I7CqzGte%2FfMdTYc0iXxPFPh1XVshfA4cK8sxIuvln0pU8uQo2GgPgZQMjU7j%2FLQjBqu6fy%2FW2GT7oomAQVTcubbYMJr38URbDPyWPDAOXrL3exprAMa6v%2Fpmd2dbrplizIRKQNx%2FoCXvm%2FG0T7eUl78r7NUAMayxUMzTlLHEFptrXePWjPEF2RUxbQkhCFGtT4Lv5d%2BnQe2gh4HD%2BgtmYz2NcL796zTnkZaC4jMMyUp8EGOqUBJZ2vMCpaLmCEgDM009odKyw%2FLJ4tSJAVvnt2k2SyOX%2F5CmXy4%2FgMLcbwFMrb1EdVfCxZa9B0kvafKn5m8%2BLarGmO0ZQCNnY8to7FU46uLAG26E%2FqkJ%2BqwINUydaqGUaEbuK1iMLZbcF%2B7OX9MzAWfJKdWUTJ3pPDM6TuZvcn8gRH8O1N9PcsRM2l3ICXeMgwdIefLPkikrjYcKAZklf5KQzgrKMi&X-Amz-Signature=45ca8755ebcceb3ad9fc58088a4de4a0e9930970c36e37ecf73957b69e262874&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
