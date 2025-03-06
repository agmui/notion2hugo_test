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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ7VZHIS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0xL%2FWrmDh%2BQE5wDKlj3CMEcL9Ndoj2maRwFSFVMW1wIgQih3snEa80%2BrW%2FNvLbMgjwHyoxcTPwmEYnrrcW5JIUkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDElxHiR1I%2Fy10lzMMyrcA4jxERDvrvo8gL%2FowNGGsS9QiA8n0W%2BFw2al6Z8HR1OjAWrE9mmKU0HuuUiUeDSx6MOTRLuMj2pnheY%2FA2AzgDiBmt3Yi4c4Gj5WNJ49pg1iwWukDgcawPck5xZJyfQiMEJJdhnR1FXLk6HxqDfxgOhzZH%2BCTY%2BD0GOmE26Tbo3mn%2F%2FmnbepywhrnItA2%2BzmC70gPvy2es1KBKNnLXPLjdw0Ireib8IATj4Aqk5GpQMdafQEaeuk1JE6%2BCMreW9NStIOgbYSTZc9zHnanSBveWe09hoa9S4Ybyr4PdnWSSmTeVkjZlqyQaxr3u4Nc%2FDG3A3hvfS5ZgdKQn%2F7GVNSP7jlsSOGoT7FgLrscDmxzRmBEibnv3kAIrOxAzUkafLfPHgK6obtZsrrRD8bGBalkQtSLxz3k8PDvoBWHsPprUYKl9Z9y2rq4Jlb%2BBkDBkkPX1qnqlbq5aTG%2Fcz2uF3GCHFHPzZjM4F%2F9EhnL0qmLAAYZQ9Z9hSIg9AiyQ9Adoml6CoewG%2BKciryP5yzYG%2BvzIL2GiG0YWyYchYMoo54mjqH7Ujkjlcm%2B98a5RsZgp1bpmYD2V%2B7bwfyP%2Bw9rkWD7cLEcA0J7BnZ1bcHAE%2Fswtol2TqPEN56sBgp3Lw3MLyVpL4GOqUBuy7Xa9V%2BlLBrV9Mq9VWlRPGx7LOoYlh1CjCrSV8HUeTmTjFnjqF8XJ%2FmZxEGppUcx9TsENodoMo02SdM%2BckDGrFO%2B%2BeOhcfzxP4gz6XKxLVpuczXbdMVgxZ%2Fn8Pfk9gPLCd3%2Fwf5jkNjKbbGtxAovUHrtp46V4ffFIvGPYfNcamDUrZenjmapeEKyMtIUKg472Y2C5SjBDtcQmO66aeZuprgjfU7&X-Amz-Signature=b57d2049977ff77e8a2dd41a0dde1c8c8970283d84bb55c4db8b5475e5e27231&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ7VZHIS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0xL%2FWrmDh%2BQE5wDKlj3CMEcL9Ndoj2maRwFSFVMW1wIgQih3snEa80%2BrW%2FNvLbMgjwHyoxcTPwmEYnrrcW5JIUkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDElxHiR1I%2Fy10lzMMyrcA4jxERDvrvo8gL%2FowNGGsS9QiA8n0W%2BFw2al6Z8HR1OjAWrE9mmKU0HuuUiUeDSx6MOTRLuMj2pnheY%2FA2AzgDiBmt3Yi4c4Gj5WNJ49pg1iwWukDgcawPck5xZJyfQiMEJJdhnR1FXLk6HxqDfxgOhzZH%2BCTY%2BD0GOmE26Tbo3mn%2F%2FmnbepywhrnItA2%2BzmC70gPvy2es1KBKNnLXPLjdw0Ireib8IATj4Aqk5GpQMdafQEaeuk1JE6%2BCMreW9NStIOgbYSTZc9zHnanSBveWe09hoa9S4Ybyr4PdnWSSmTeVkjZlqyQaxr3u4Nc%2FDG3A3hvfS5ZgdKQn%2F7GVNSP7jlsSOGoT7FgLrscDmxzRmBEibnv3kAIrOxAzUkafLfPHgK6obtZsrrRD8bGBalkQtSLxz3k8PDvoBWHsPprUYKl9Z9y2rq4Jlb%2BBkDBkkPX1qnqlbq5aTG%2Fcz2uF3GCHFHPzZjM4F%2F9EhnL0qmLAAYZQ9Z9hSIg9AiyQ9Adoml6CoewG%2BKciryP5yzYG%2BvzIL2GiG0YWyYchYMoo54mjqH7Ujkjlcm%2B98a5RsZgp1bpmYD2V%2B7bwfyP%2Bw9rkWD7cLEcA0J7BnZ1bcHAE%2Fswtol2TqPEN56sBgp3Lw3MLyVpL4GOqUBuy7Xa9V%2BlLBrV9Mq9VWlRPGx7LOoYlh1CjCrSV8HUeTmTjFnjqF8XJ%2FmZxEGppUcx9TsENodoMo02SdM%2BckDGrFO%2B%2BeOhcfzxP4gz6XKxLVpuczXbdMVgxZ%2Fn8Pfk9gPLCd3%2Fwf5jkNjKbbGtxAovUHrtp46V4ffFIvGPYfNcamDUrZenjmapeEKyMtIUKg472Y2C5SjBDtcQmO66aeZuprgjfU7&X-Amz-Signature=f390401045a22e4f301344959d983080627e0d13192578386188afd71044b8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ7VZHIS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0xL%2FWrmDh%2BQE5wDKlj3CMEcL9Ndoj2maRwFSFVMW1wIgQih3snEa80%2BrW%2FNvLbMgjwHyoxcTPwmEYnrrcW5JIUkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDElxHiR1I%2Fy10lzMMyrcA4jxERDvrvo8gL%2FowNGGsS9QiA8n0W%2BFw2al6Z8HR1OjAWrE9mmKU0HuuUiUeDSx6MOTRLuMj2pnheY%2FA2AzgDiBmt3Yi4c4Gj5WNJ49pg1iwWukDgcawPck5xZJyfQiMEJJdhnR1FXLk6HxqDfxgOhzZH%2BCTY%2BD0GOmE26Tbo3mn%2F%2FmnbepywhrnItA2%2BzmC70gPvy2es1KBKNnLXPLjdw0Ireib8IATj4Aqk5GpQMdafQEaeuk1JE6%2BCMreW9NStIOgbYSTZc9zHnanSBveWe09hoa9S4Ybyr4PdnWSSmTeVkjZlqyQaxr3u4Nc%2FDG3A3hvfS5ZgdKQn%2F7GVNSP7jlsSOGoT7FgLrscDmxzRmBEibnv3kAIrOxAzUkafLfPHgK6obtZsrrRD8bGBalkQtSLxz3k8PDvoBWHsPprUYKl9Z9y2rq4Jlb%2BBkDBkkPX1qnqlbq5aTG%2Fcz2uF3GCHFHPzZjM4F%2F9EhnL0qmLAAYZQ9Z9hSIg9AiyQ9Adoml6CoewG%2BKciryP5yzYG%2BvzIL2GiG0YWyYchYMoo54mjqH7Ujkjlcm%2B98a5RsZgp1bpmYD2V%2B7bwfyP%2Bw9rkWD7cLEcA0J7BnZ1bcHAE%2Fswtol2TqPEN56sBgp3Lw3MLyVpL4GOqUBuy7Xa9V%2BlLBrV9Mq9VWlRPGx7LOoYlh1CjCrSV8HUeTmTjFnjqF8XJ%2FmZxEGppUcx9TsENodoMo02SdM%2BckDGrFO%2B%2BeOhcfzxP4gz6XKxLVpuczXbdMVgxZ%2Fn8Pfk9gPLCd3%2Fwf5jkNjKbbGtxAovUHrtp46V4ffFIvGPYfNcamDUrZenjmapeEKyMtIUKg472Y2C5SjBDtcQmO66aeZuprgjfU7&X-Amz-Signature=6df01f3ce746af1ed544020ecaa6a3044cc3f9264f2eac1e571225c55565670f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ7VZHIS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0xL%2FWrmDh%2BQE5wDKlj3CMEcL9Ndoj2maRwFSFVMW1wIgQih3snEa80%2BrW%2FNvLbMgjwHyoxcTPwmEYnrrcW5JIUkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDElxHiR1I%2Fy10lzMMyrcA4jxERDvrvo8gL%2FowNGGsS9QiA8n0W%2BFw2al6Z8HR1OjAWrE9mmKU0HuuUiUeDSx6MOTRLuMj2pnheY%2FA2AzgDiBmt3Yi4c4Gj5WNJ49pg1iwWukDgcawPck5xZJyfQiMEJJdhnR1FXLk6HxqDfxgOhzZH%2BCTY%2BD0GOmE26Tbo3mn%2F%2FmnbepywhrnItA2%2BzmC70gPvy2es1KBKNnLXPLjdw0Ireib8IATj4Aqk5GpQMdafQEaeuk1JE6%2BCMreW9NStIOgbYSTZc9zHnanSBveWe09hoa9S4Ybyr4PdnWSSmTeVkjZlqyQaxr3u4Nc%2FDG3A3hvfS5ZgdKQn%2F7GVNSP7jlsSOGoT7FgLrscDmxzRmBEibnv3kAIrOxAzUkafLfPHgK6obtZsrrRD8bGBalkQtSLxz3k8PDvoBWHsPprUYKl9Z9y2rq4Jlb%2BBkDBkkPX1qnqlbq5aTG%2Fcz2uF3GCHFHPzZjM4F%2F9EhnL0qmLAAYZQ9Z9hSIg9AiyQ9Adoml6CoewG%2BKciryP5yzYG%2BvzIL2GiG0YWyYchYMoo54mjqH7Ujkjlcm%2B98a5RsZgp1bpmYD2V%2B7bwfyP%2Bw9rkWD7cLEcA0J7BnZ1bcHAE%2Fswtol2TqPEN56sBgp3Lw3MLyVpL4GOqUBuy7Xa9V%2BlLBrV9Mq9VWlRPGx7LOoYlh1CjCrSV8HUeTmTjFnjqF8XJ%2FmZxEGppUcx9TsENodoMo02SdM%2BckDGrFO%2B%2BeOhcfzxP4gz6XKxLVpuczXbdMVgxZ%2Fn8Pfk9gPLCd3%2Fwf5jkNjKbbGtxAovUHrtp46V4ffFIvGPYfNcamDUrZenjmapeEKyMtIUKg472Y2C5SjBDtcQmO66aeZuprgjfU7&X-Amz-Signature=1c33167c11dbfefdb531dbb9ab174ee47469de16f7a03f75199eed0437252a18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ7VZHIS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0xL%2FWrmDh%2BQE5wDKlj3CMEcL9Ndoj2maRwFSFVMW1wIgQih3snEa80%2BrW%2FNvLbMgjwHyoxcTPwmEYnrrcW5JIUkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDElxHiR1I%2Fy10lzMMyrcA4jxERDvrvo8gL%2FowNGGsS9QiA8n0W%2BFw2al6Z8HR1OjAWrE9mmKU0HuuUiUeDSx6MOTRLuMj2pnheY%2FA2AzgDiBmt3Yi4c4Gj5WNJ49pg1iwWukDgcawPck5xZJyfQiMEJJdhnR1FXLk6HxqDfxgOhzZH%2BCTY%2BD0GOmE26Tbo3mn%2F%2FmnbepywhrnItA2%2BzmC70gPvy2es1KBKNnLXPLjdw0Ireib8IATj4Aqk5GpQMdafQEaeuk1JE6%2BCMreW9NStIOgbYSTZc9zHnanSBveWe09hoa9S4Ybyr4PdnWSSmTeVkjZlqyQaxr3u4Nc%2FDG3A3hvfS5ZgdKQn%2F7GVNSP7jlsSOGoT7FgLrscDmxzRmBEibnv3kAIrOxAzUkafLfPHgK6obtZsrrRD8bGBalkQtSLxz3k8PDvoBWHsPprUYKl9Z9y2rq4Jlb%2BBkDBkkPX1qnqlbq5aTG%2Fcz2uF3GCHFHPzZjM4F%2F9EhnL0qmLAAYZQ9Z9hSIg9AiyQ9Adoml6CoewG%2BKciryP5yzYG%2BvzIL2GiG0YWyYchYMoo54mjqH7Ujkjlcm%2B98a5RsZgp1bpmYD2V%2B7bwfyP%2Bw9rkWD7cLEcA0J7BnZ1bcHAE%2Fswtol2TqPEN56sBgp3Lw3MLyVpL4GOqUBuy7Xa9V%2BlLBrV9Mq9VWlRPGx7LOoYlh1CjCrSV8HUeTmTjFnjqF8XJ%2FmZxEGppUcx9TsENodoMo02SdM%2BckDGrFO%2B%2BeOhcfzxP4gz6XKxLVpuczXbdMVgxZ%2Fn8Pfk9gPLCd3%2Fwf5jkNjKbbGtxAovUHrtp46V4ffFIvGPYfNcamDUrZenjmapeEKyMtIUKg472Y2C5SjBDtcQmO66aeZuprgjfU7&X-Amz-Signature=355628dc0dcbb3e8aeeb32a207e86e015c7a808f4983556297e26b99af105139&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
