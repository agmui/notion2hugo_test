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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYYSOTL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDgyaOKFr%2FaZcoZ5T8I%2FppxSKnmp8kLx4woP5TbzPtd1QIgCpuGkMgGakj6PcCxjSqJPIa6WoigZlYjiA7SF4%2BTLR0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUenl0MoR%2BAPmeDyircA2flyw%2FVA34xtppko74VLd458qb%2BQc0dYpcW4SlSuPPbQAihaju56A1kyqMCI2Zo6oBzWwFufL3wN5XGSwAwAWh%2FB%2FQCNnjXD3E9miSFoCO0PhuL%2BnhHqWTl1cEXK67A88eIrrfio%2Fhq2PkFkbK2sZIC4A9XOtYIwUz1J0P7Ak8Sh2WUYMRMeUh9%2F29cER4BDAkVKCK7syTKIobZpRJQI9dIwtVi3FR1sTUmUUjkMfFx22nLF1OlCdebHpNX7ZpzGJCKSGi3tOxTa9PNtckz5QpKPfUgLZqRTMnW4Z1w6S8zWk80UDvue0G99ABWt0Psgj0SQv5xnRdtcOYMiDsx9FhIyU2ZQ8oqmAGgGgl8HbHk0I9%2BeplB%2BSGEh7QKF8NcYQ%2BkxVZCM1Kz%2Bp5ki1dNIwaIObqOFUBgU7sMVYYukznCsm7CDQK9C7moXm6u9TMKn9BvATsmiZqIvYrqjeTc3Dv5iVKzqm8wNZbhZetF%2BuXDla04hFp9EuJ2MFXzZUcgFO5Moyjh6aDHQ1z%2BJ6sfHwjFMczJcMIJ62eR1A1j1ku%2B2Izm7EkNtxkR6MmlBArJvpDF3RfSlk%2FBTTTC50mmb%2BlDYKsUGiPi%2BkX1w3Q1gonE98Pkj0UCIsBnZUitMIi48cEGOqUB4b6s5uG%2FGXOYPG5ecsqc4t7CpWM4mcAjm1L7vjOSI2DNA07OoyttieNGz5usXB9uPLJvDKACxaFw1JoQl2%2BLtAHLwaXEz7J%2BnpBekUfjPxKHSG3FXtgC8QnhEqvo10M%2F%2F6gLXsJiDDlPs08b%2BR7rLquF5Yl4ylUcZvjqyvpZ3mulLSPRdibyTJBBUPJPlFtyYKcpJM%2BH%2F2COBzHSEz8IfsOjuc8c&X-Amz-Signature=61daab4c3a77213709c88a20f09544bc83884b13cb9d7a683893a9f26b51a383&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYYSOTL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDgyaOKFr%2FaZcoZ5T8I%2FppxSKnmp8kLx4woP5TbzPtd1QIgCpuGkMgGakj6PcCxjSqJPIa6WoigZlYjiA7SF4%2BTLR0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUenl0MoR%2BAPmeDyircA2flyw%2FVA34xtppko74VLd458qb%2BQc0dYpcW4SlSuPPbQAihaju56A1kyqMCI2Zo6oBzWwFufL3wN5XGSwAwAWh%2FB%2FQCNnjXD3E9miSFoCO0PhuL%2BnhHqWTl1cEXK67A88eIrrfio%2Fhq2PkFkbK2sZIC4A9XOtYIwUz1J0P7Ak8Sh2WUYMRMeUh9%2F29cER4BDAkVKCK7syTKIobZpRJQI9dIwtVi3FR1sTUmUUjkMfFx22nLF1OlCdebHpNX7ZpzGJCKSGi3tOxTa9PNtckz5QpKPfUgLZqRTMnW4Z1w6S8zWk80UDvue0G99ABWt0Psgj0SQv5xnRdtcOYMiDsx9FhIyU2ZQ8oqmAGgGgl8HbHk0I9%2BeplB%2BSGEh7QKF8NcYQ%2BkxVZCM1Kz%2Bp5ki1dNIwaIObqOFUBgU7sMVYYukznCsm7CDQK9C7moXm6u9TMKn9BvATsmiZqIvYrqjeTc3Dv5iVKzqm8wNZbhZetF%2BuXDla04hFp9EuJ2MFXzZUcgFO5Moyjh6aDHQ1z%2BJ6sfHwjFMczJcMIJ62eR1A1j1ku%2B2Izm7EkNtxkR6MmlBArJvpDF3RfSlk%2FBTTTC50mmb%2BlDYKsUGiPi%2BkX1w3Q1gonE98Pkj0UCIsBnZUitMIi48cEGOqUB4b6s5uG%2FGXOYPG5ecsqc4t7CpWM4mcAjm1L7vjOSI2DNA07OoyttieNGz5usXB9uPLJvDKACxaFw1JoQl2%2BLtAHLwaXEz7J%2BnpBekUfjPxKHSG3FXtgC8QnhEqvo10M%2F%2F6gLXsJiDDlPs08b%2BR7rLquF5Yl4ylUcZvjqyvpZ3mulLSPRdibyTJBBUPJPlFtyYKcpJM%2BH%2F2COBzHSEz8IfsOjuc8c&X-Amz-Signature=af621388dd82dc331df737e81bf7846010eedd86da5dbe115e08e0d6d4b345ee&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYYSOTL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDgyaOKFr%2FaZcoZ5T8I%2FppxSKnmp8kLx4woP5TbzPtd1QIgCpuGkMgGakj6PcCxjSqJPIa6WoigZlYjiA7SF4%2BTLR0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUenl0MoR%2BAPmeDyircA2flyw%2FVA34xtppko74VLd458qb%2BQc0dYpcW4SlSuPPbQAihaju56A1kyqMCI2Zo6oBzWwFufL3wN5XGSwAwAWh%2FB%2FQCNnjXD3E9miSFoCO0PhuL%2BnhHqWTl1cEXK67A88eIrrfio%2Fhq2PkFkbK2sZIC4A9XOtYIwUz1J0P7Ak8Sh2WUYMRMeUh9%2F29cER4BDAkVKCK7syTKIobZpRJQI9dIwtVi3FR1sTUmUUjkMfFx22nLF1OlCdebHpNX7ZpzGJCKSGi3tOxTa9PNtckz5QpKPfUgLZqRTMnW4Z1w6S8zWk80UDvue0G99ABWt0Psgj0SQv5xnRdtcOYMiDsx9FhIyU2ZQ8oqmAGgGgl8HbHk0I9%2BeplB%2BSGEh7QKF8NcYQ%2BkxVZCM1Kz%2Bp5ki1dNIwaIObqOFUBgU7sMVYYukznCsm7CDQK9C7moXm6u9TMKn9BvATsmiZqIvYrqjeTc3Dv5iVKzqm8wNZbhZetF%2BuXDla04hFp9EuJ2MFXzZUcgFO5Moyjh6aDHQ1z%2BJ6sfHwjFMczJcMIJ62eR1A1j1ku%2B2Izm7EkNtxkR6MmlBArJvpDF3RfSlk%2FBTTTC50mmb%2BlDYKsUGiPi%2BkX1w3Q1gonE98Pkj0UCIsBnZUitMIi48cEGOqUB4b6s5uG%2FGXOYPG5ecsqc4t7CpWM4mcAjm1L7vjOSI2DNA07OoyttieNGz5usXB9uPLJvDKACxaFw1JoQl2%2BLtAHLwaXEz7J%2BnpBekUfjPxKHSG3FXtgC8QnhEqvo10M%2F%2F6gLXsJiDDlPs08b%2BR7rLquF5Yl4ylUcZvjqyvpZ3mulLSPRdibyTJBBUPJPlFtyYKcpJM%2BH%2F2COBzHSEz8IfsOjuc8c&X-Amz-Signature=864b62dc55a395ac2be7234952107646c7b410c2566a424400fd59e9806ca4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYYSOTL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDgyaOKFr%2FaZcoZ5T8I%2FppxSKnmp8kLx4woP5TbzPtd1QIgCpuGkMgGakj6PcCxjSqJPIa6WoigZlYjiA7SF4%2BTLR0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUenl0MoR%2BAPmeDyircA2flyw%2FVA34xtppko74VLd458qb%2BQc0dYpcW4SlSuPPbQAihaju56A1kyqMCI2Zo6oBzWwFufL3wN5XGSwAwAWh%2FB%2FQCNnjXD3E9miSFoCO0PhuL%2BnhHqWTl1cEXK67A88eIrrfio%2Fhq2PkFkbK2sZIC4A9XOtYIwUz1J0P7Ak8Sh2WUYMRMeUh9%2F29cER4BDAkVKCK7syTKIobZpRJQI9dIwtVi3FR1sTUmUUjkMfFx22nLF1OlCdebHpNX7ZpzGJCKSGi3tOxTa9PNtckz5QpKPfUgLZqRTMnW4Z1w6S8zWk80UDvue0G99ABWt0Psgj0SQv5xnRdtcOYMiDsx9FhIyU2ZQ8oqmAGgGgl8HbHk0I9%2BeplB%2BSGEh7QKF8NcYQ%2BkxVZCM1Kz%2Bp5ki1dNIwaIObqOFUBgU7sMVYYukznCsm7CDQK9C7moXm6u9TMKn9BvATsmiZqIvYrqjeTc3Dv5iVKzqm8wNZbhZetF%2BuXDla04hFp9EuJ2MFXzZUcgFO5Moyjh6aDHQ1z%2BJ6sfHwjFMczJcMIJ62eR1A1j1ku%2B2Izm7EkNtxkR6MmlBArJvpDF3RfSlk%2FBTTTC50mmb%2BlDYKsUGiPi%2BkX1w3Q1gonE98Pkj0UCIsBnZUitMIi48cEGOqUB4b6s5uG%2FGXOYPG5ecsqc4t7CpWM4mcAjm1L7vjOSI2DNA07OoyttieNGz5usXB9uPLJvDKACxaFw1JoQl2%2BLtAHLwaXEz7J%2BnpBekUfjPxKHSG3FXtgC8QnhEqvo10M%2F%2F6gLXsJiDDlPs08b%2BR7rLquF5Yl4ylUcZvjqyvpZ3mulLSPRdibyTJBBUPJPlFtyYKcpJM%2BH%2F2COBzHSEz8IfsOjuc8c&X-Amz-Signature=e919727bc0a2863fb52b7c70de596a32af0e2a05e2e502b42492906de31448a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYYSOTL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDgyaOKFr%2FaZcoZ5T8I%2FppxSKnmp8kLx4woP5TbzPtd1QIgCpuGkMgGakj6PcCxjSqJPIa6WoigZlYjiA7SF4%2BTLR0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUenl0MoR%2BAPmeDyircA2flyw%2FVA34xtppko74VLd458qb%2BQc0dYpcW4SlSuPPbQAihaju56A1kyqMCI2Zo6oBzWwFufL3wN5XGSwAwAWh%2FB%2FQCNnjXD3E9miSFoCO0PhuL%2BnhHqWTl1cEXK67A88eIrrfio%2Fhq2PkFkbK2sZIC4A9XOtYIwUz1J0P7Ak8Sh2WUYMRMeUh9%2F29cER4BDAkVKCK7syTKIobZpRJQI9dIwtVi3FR1sTUmUUjkMfFx22nLF1OlCdebHpNX7ZpzGJCKSGi3tOxTa9PNtckz5QpKPfUgLZqRTMnW4Z1w6S8zWk80UDvue0G99ABWt0Psgj0SQv5xnRdtcOYMiDsx9FhIyU2ZQ8oqmAGgGgl8HbHk0I9%2BeplB%2BSGEh7QKF8NcYQ%2BkxVZCM1Kz%2Bp5ki1dNIwaIObqOFUBgU7sMVYYukznCsm7CDQK9C7moXm6u9TMKn9BvATsmiZqIvYrqjeTc3Dv5iVKzqm8wNZbhZetF%2BuXDla04hFp9EuJ2MFXzZUcgFO5Moyjh6aDHQ1z%2BJ6sfHwjFMczJcMIJ62eR1A1j1ku%2B2Izm7EkNtxkR6MmlBArJvpDF3RfSlk%2FBTTTC50mmb%2BlDYKsUGiPi%2BkX1w3Q1gonE98Pkj0UCIsBnZUitMIi48cEGOqUB4b6s5uG%2FGXOYPG5ecsqc4t7CpWM4mcAjm1L7vjOSI2DNA07OoyttieNGz5usXB9uPLJvDKACxaFw1JoQl2%2BLtAHLwaXEz7J%2BnpBekUfjPxKHSG3FXtgC8QnhEqvo10M%2F%2F6gLXsJiDDlPs08b%2BR7rLquF5Yl4ylUcZvjqyvpZ3mulLSPRdibyTJBBUPJPlFtyYKcpJM%2BH%2F2COBzHSEz8IfsOjuc8c&X-Amz-Signature=1dca02903c0dbd0de92b4a8acf999cbc77d802f53f5d8afd4a3977390ea127c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
