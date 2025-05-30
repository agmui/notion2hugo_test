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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIH4NI2U%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzb4lYYCvvhMgb4N%2F7oDjHHuPHxgv9JBD2xhbfUs4HWAiEAnEJo53HHxXyTrV7gt7O1bjLQFM7tiKgzJrfvtgl0jhAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbuSC%2BcVNwyb7tl7yrcAwYacBUIZLOvgk%2FkG5cAbTwFTyvTvnqSfNB82AQZD6ifJeDMJO4oR0vwf7aLiwO6N3ecIuDuiOUAFOQs2zMr8O%2FkoggSRK%2BYriwyTJQmhm09yItEQXkVWfHyZi3h4VU3AzjUVy3O%2F%2BlEQeK5rfKRBWEqf1dOWkkvdvT3gJkwGNoorF53dslKO9dYjVafTcAxIlI0miQpwTQHQ0Fw7i%2ByzK6ArUvZrn9fCeUeY8eZ%2BOxD%2Bu7ONA3nxYG6VxcdhCg1KY65rvsKP0e60eQ8tHqBLEO7WeyRbiytxi68BLTdd1cu7PD7PfH6F8w1Jx3%2FsMsdtRJc9XVXO5cdckVkWiDt06%2FYdfyWHjRJAKFgiauwJAmlmpayhDiHtc%2Bfx%2BH9LuH3wKRCX9feMOSjeSDVPsWXDifrBSTXeNeMRtydmzgcXrPrcOV4t55xyjlu%2BGRN7nmcfeaD5CtgyOmMekxA0eCD8OXccSE1Bxg%2BAtEXDp3bXr8WgcYApkJsKqOUzQ5H6QZaaivITn2EsttRXosBCGFLk%2FumdfLB5Am9WX0T%2BJSzRlO8i00SPLskCfbU5T2zT9%2FrP476NqzSU%2FIcNoGQzuBwTqh%2BgvaRYVlO5rs5UcTAjuccPvY1RGr8ADPVtjk%2FMODd5MEGOqUBnHMP7YNpX3dgM%2FPYQlXQ1b6z%2BE%2BGGb4lzg3kJnlT9cEd8c8wOU71uI%2FS1%2BqPAJIX17H%2F%2FkbYalUjAGtone%2B1axPybY5SN1inrD8GnDs3itokX6LopprtCmepfWDOmos3bLYcXmi0LJwqV3Q7Jh9SziktSq60If8IRjVzf8zE8sZsCEXUpAdCVwmMoXNvmRdzX8oq0coX7V3PUj8UOH8UKsRBY2UZ&X-Amz-Signature=00110631597a6af324e9601cffd7578caa6b5c9d4269f49fd43aacb0fe1113ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIH4NI2U%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzb4lYYCvvhMgb4N%2F7oDjHHuPHxgv9JBD2xhbfUs4HWAiEAnEJo53HHxXyTrV7gt7O1bjLQFM7tiKgzJrfvtgl0jhAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbuSC%2BcVNwyb7tl7yrcAwYacBUIZLOvgk%2FkG5cAbTwFTyvTvnqSfNB82AQZD6ifJeDMJO4oR0vwf7aLiwO6N3ecIuDuiOUAFOQs2zMr8O%2FkoggSRK%2BYriwyTJQmhm09yItEQXkVWfHyZi3h4VU3AzjUVy3O%2F%2BlEQeK5rfKRBWEqf1dOWkkvdvT3gJkwGNoorF53dslKO9dYjVafTcAxIlI0miQpwTQHQ0Fw7i%2ByzK6ArUvZrn9fCeUeY8eZ%2BOxD%2Bu7ONA3nxYG6VxcdhCg1KY65rvsKP0e60eQ8tHqBLEO7WeyRbiytxi68BLTdd1cu7PD7PfH6F8w1Jx3%2FsMsdtRJc9XVXO5cdckVkWiDt06%2FYdfyWHjRJAKFgiauwJAmlmpayhDiHtc%2Bfx%2BH9LuH3wKRCX9feMOSjeSDVPsWXDifrBSTXeNeMRtydmzgcXrPrcOV4t55xyjlu%2BGRN7nmcfeaD5CtgyOmMekxA0eCD8OXccSE1Bxg%2BAtEXDp3bXr8WgcYApkJsKqOUzQ5H6QZaaivITn2EsttRXosBCGFLk%2FumdfLB5Am9WX0T%2BJSzRlO8i00SPLskCfbU5T2zT9%2FrP476NqzSU%2FIcNoGQzuBwTqh%2BgvaRYVlO5rs5UcTAjuccPvY1RGr8ADPVtjk%2FMODd5MEGOqUBnHMP7YNpX3dgM%2FPYQlXQ1b6z%2BE%2BGGb4lzg3kJnlT9cEd8c8wOU71uI%2FS1%2BqPAJIX17H%2F%2FkbYalUjAGtone%2B1axPybY5SN1inrD8GnDs3itokX6LopprtCmepfWDOmos3bLYcXmi0LJwqV3Q7Jh9SziktSq60If8IRjVzf8zE8sZsCEXUpAdCVwmMoXNvmRdzX8oq0coX7V3PUj8UOH8UKsRBY2UZ&X-Amz-Signature=47de9f0f5a9316797cf62f8a71b09263b21408915d4cfefe083cb93107402dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIH4NI2U%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzb4lYYCvvhMgb4N%2F7oDjHHuPHxgv9JBD2xhbfUs4HWAiEAnEJo53HHxXyTrV7gt7O1bjLQFM7tiKgzJrfvtgl0jhAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbuSC%2BcVNwyb7tl7yrcAwYacBUIZLOvgk%2FkG5cAbTwFTyvTvnqSfNB82AQZD6ifJeDMJO4oR0vwf7aLiwO6N3ecIuDuiOUAFOQs2zMr8O%2FkoggSRK%2BYriwyTJQmhm09yItEQXkVWfHyZi3h4VU3AzjUVy3O%2F%2BlEQeK5rfKRBWEqf1dOWkkvdvT3gJkwGNoorF53dslKO9dYjVafTcAxIlI0miQpwTQHQ0Fw7i%2ByzK6ArUvZrn9fCeUeY8eZ%2BOxD%2Bu7ONA3nxYG6VxcdhCg1KY65rvsKP0e60eQ8tHqBLEO7WeyRbiytxi68BLTdd1cu7PD7PfH6F8w1Jx3%2FsMsdtRJc9XVXO5cdckVkWiDt06%2FYdfyWHjRJAKFgiauwJAmlmpayhDiHtc%2Bfx%2BH9LuH3wKRCX9feMOSjeSDVPsWXDifrBSTXeNeMRtydmzgcXrPrcOV4t55xyjlu%2BGRN7nmcfeaD5CtgyOmMekxA0eCD8OXccSE1Bxg%2BAtEXDp3bXr8WgcYApkJsKqOUzQ5H6QZaaivITn2EsttRXosBCGFLk%2FumdfLB5Am9WX0T%2BJSzRlO8i00SPLskCfbU5T2zT9%2FrP476NqzSU%2FIcNoGQzuBwTqh%2BgvaRYVlO5rs5UcTAjuccPvY1RGr8ADPVtjk%2FMODd5MEGOqUBnHMP7YNpX3dgM%2FPYQlXQ1b6z%2BE%2BGGb4lzg3kJnlT9cEd8c8wOU71uI%2FS1%2BqPAJIX17H%2F%2FkbYalUjAGtone%2B1axPybY5SN1inrD8GnDs3itokX6LopprtCmepfWDOmos3bLYcXmi0LJwqV3Q7Jh9SziktSq60If8IRjVzf8zE8sZsCEXUpAdCVwmMoXNvmRdzX8oq0coX7V3PUj8UOH8UKsRBY2UZ&X-Amz-Signature=114c5939265c1f6e0c7efc709230f54713ca3c83b72b4c419ef80db2367f0b21&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIH4NI2U%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzb4lYYCvvhMgb4N%2F7oDjHHuPHxgv9JBD2xhbfUs4HWAiEAnEJo53HHxXyTrV7gt7O1bjLQFM7tiKgzJrfvtgl0jhAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbuSC%2BcVNwyb7tl7yrcAwYacBUIZLOvgk%2FkG5cAbTwFTyvTvnqSfNB82AQZD6ifJeDMJO4oR0vwf7aLiwO6N3ecIuDuiOUAFOQs2zMr8O%2FkoggSRK%2BYriwyTJQmhm09yItEQXkVWfHyZi3h4VU3AzjUVy3O%2F%2BlEQeK5rfKRBWEqf1dOWkkvdvT3gJkwGNoorF53dslKO9dYjVafTcAxIlI0miQpwTQHQ0Fw7i%2ByzK6ArUvZrn9fCeUeY8eZ%2BOxD%2Bu7ONA3nxYG6VxcdhCg1KY65rvsKP0e60eQ8tHqBLEO7WeyRbiytxi68BLTdd1cu7PD7PfH6F8w1Jx3%2FsMsdtRJc9XVXO5cdckVkWiDt06%2FYdfyWHjRJAKFgiauwJAmlmpayhDiHtc%2Bfx%2BH9LuH3wKRCX9feMOSjeSDVPsWXDifrBSTXeNeMRtydmzgcXrPrcOV4t55xyjlu%2BGRN7nmcfeaD5CtgyOmMekxA0eCD8OXccSE1Bxg%2BAtEXDp3bXr8WgcYApkJsKqOUzQ5H6QZaaivITn2EsttRXosBCGFLk%2FumdfLB5Am9WX0T%2BJSzRlO8i00SPLskCfbU5T2zT9%2FrP476NqzSU%2FIcNoGQzuBwTqh%2BgvaRYVlO5rs5UcTAjuccPvY1RGr8ADPVtjk%2FMODd5MEGOqUBnHMP7YNpX3dgM%2FPYQlXQ1b6z%2BE%2BGGb4lzg3kJnlT9cEd8c8wOU71uI%2FS1%2BqPAJIX17H%2F%2FkbYalUjAGtone%2B1axPybY5SN1inrD8GnDs3itokX6LopprtCmepfWDOmos3bLYcXmi0LJwqV3Q7Jh9SziktSq60If8IRjVzf8zE8sZsCEXUpAdCVwmMoXNvmRdzX8oq0coX7V3PUj8UOH8UKsRBY2UZ&X-Amz-Signature=2d0ea534330ac79c2f83111f3cab8e98a0367ffba1853b2510962f3483a3c01d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIH4NI2U%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzb4lYYCvvhMgb4N%2F7oDjHHuPHxgv9JBD2xhbfUs4HWAiEAnEJo53HHxXyTrV7gt7O1bjLQFM7tiKgzJrfvtgl0jhAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbuSC%2BcVNwyb7tl7yrcAwYacBUIZLOvgk%2FkG5cAbTwFTyvTvnqSfNB82AQZD6ifJeDMJO4oR0vwf7aLiwO6N3ecIuDuiOUAFOQs2zMr8O%2FkoggSRK%2BYriwyTJQmhm09yItEQXkVWfHyZi3h4VU3AzjUVy3O%2F%2BlEQeK5rfKRBWEqf1dOWkkvdvT3gJkwGNoorF53dslKO9dYjVafTcAxIlI0miQpwTQHQ0Fw7i%2ByzK6ArUvZrn9fCeUeY8eZ%2BOxD%2Bu7ONA3nxYG6VxcdhCg1KY65rvsKP0e60eQ8tHqBLEO7WeyRbiytxi68BLTdd1cu7PD7PfH6F8w1Jx3%2FsMsdtRJc9XVXO5cdckVkWiDt06%2FYdfyWHjRJAKFgiauwJAmlmpayhDiHtc%2Bfx%2BH9LuH3wKRCX9feMOSjeSDVPsWXDifrBSTXeNeMRtydmzgcXrPrcOV4t55xyjlu%2BGRN7nmcfeaD5CtgyOmMekxA0eCD8OXccSE1Bxg%2BAtEXDp3bXr8WgcYApkJsKqOUzQ5H6QZaaivITn2EsttRXosBCGFLk%2FumdfLB5Am9WX0T%2BJSzRlO8i00SPLskCfbU5T2zT9%2FrP476NqzSU%2FIcNoGQzuBwTqh%2BgvaRYVlO5rs5UcTAjuccPvY1RGr8ADPVtjk%2FMODd5MEGOqUBnHMP7YNpX3dgM%2FPYQlXQ1b6z%2BE%2BGGb4lzg3kJnlT9cEd8c8wOU71uI%2FS1%2BqPAJIX17H%2F%2FkbYalUjAGtone%2B1axPybY5SN1inrD8GnDs3itokX6LopprtCmepfWDOmos3bLYcXmi0LJwqV3Q7Jh9SziktSq60If8IRjVzf8zE8sZsCEXUpAdCVwmMoXNvmRdzX8oq0coX7V3PUj8UOH8UKsRBY2UZ&X-Amz-Signature=f26b9f90a8ef4d4bd04624e62b251f21e7aa628c43079219629dd90dce948281&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
