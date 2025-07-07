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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5VIHG7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHbQE7NTULo3PnUAU3O4xBECYKfj9%2FLbytU0jBt28xGWAiAE6XL%2FGkks%2FWI%2BVvcf4Wb6Of9N0GHiQeJYq%2B9RMbo49Cr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMDeh7FPvC3axR9jHCKtwDAZ27PHk4emjnS%2FQh%2By9X9kXCXu1J5LCA9Ga9maws2iO8nfTC03ghfpvrgoBcmJeWnndJ8mwTNGpQVdjZ%2BHNj4TsWDEEzi1jzHznsECOegQ5vOCSTGEEtt56RuQMwokcX4pgsFYKVZLxLm9QwLrxwfkuDFH801mpwrhyp80JbnLcjNCOk2VUyZVVP8Puf9wNmf8yzQaNAdGkxkVLI%2F%2B1OPTtQYHm6b%2FD6B2xYkugjVRx0IYmN5Uplw6oyWpLJ0rdwHxgZJ1pa0lyUpXl%2B47CPzT2xxDBhfuJpUg%2B%2B5wyKOd1hImtrcf9ix8sXUaAdg2zyjPNL5YsnbMQ87u1J6%2FdCg6afXEsxSi9kOMkcZdgA3OYK0QBDIrfurLFWvGCnf9G8cbDcGtMTSTWmGI3AtpY5VM48sHtGccTvKrMfqa5f6v9xCxoK0iC83MBTpLE%2Be3aLmSQ2XGNe62uGPjGuInH7AZnB4loC1uOoycSX9d%2FzJUoc9EkBwY5WFz2ORmEHnRrl54G%2FLeK1yUKzzSTZmNcw1lL3jyx0j%2Bq5wU4z65TPe4qyAT0f%2FiMPKVp8noeoLdE%2F0cHYP6iV7ifb%2F%2FcX2DCayJtl6M0Hkwu1KcJZAM5KJG0nmrPVzOA%2BCH6%2F6pAwjemswwY6pgG1nqWsrbUoXMmLUNv8dHiDBwvk%2BtV4ZEKSwiX0U%2B3z9bFT7KsC5i8ZKeqSL%2BE2FwdaFyQjPIAbxVzlBbOKKSx8lOFLZduvwq%2F3UyEYZypiycSfbKlolPmjtSZhtuXbWhJXCFUtvnB6aS%2BtAaJ9HFnQgkcRjwXpg34BjJSbSlrSYLW94I1j7x0lya8N9B%2FUzZCx0j4SXtB%2FRnC0DgyImW07J77hN05h&X-Amz-Signature=ebf4955bb81cb635f04569838ac3df5e25766f8abe2c881a15d39d404681fb99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5VIHG7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHbQE7NTULo3PnUAU3O4xBECYKfj9%2FLbytU0jBt28xGWAiAE6XL%2FGkks%2FWI%2BVvcf4Wb6Of9N0GHiQeJYq%2B9RMbo49Cr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMDeh7FPvC3axR9jHCKtwDAZ27PHk4emjnS%2FQh%2By9X9kXCXu1J5LCA9Ga9maws2iO8nfTC03ghfpvrgoBcmJeWnndJ8mwTNGpQVdjZ%2BHNj4TsWDEEzi1jzHznsECOegQ5vOCSTGEEtt56RuQMwokcX4pgsFYKVZLxLm9QwLrxwfkuDFH801mpwrhyp80JbnLcjNCOk2VUyZVVP8Puf9wNmf8yzQaNAdGkxkVLI%2F%2B1OPTtQYHm6b%2FD6B2xYkugjVRx0IYmN5Uplw6oyWpLJ0rdwHxgZJ1pa0lyUpXl%2B47CPzT2xxDBhfuJpUg%2B%2B5wyKOd1hImtrcf9ix8sXUaAdg2zyjPNL5YsnbMQ87u1J6%2FdCg6afXEsxSi9kOMkcZdgA3OYK0QBDIrfurLFWvGCnf9G8cbDcGtMTSTWmGI3AtpY5VM48sHtGccTvKrMfqa5f6v9xCxoK0iC83MBTpLE%2Be3aLmSQ2XGNe62uGPjGuInH7AZnB4loC1uOoycSX9d%2FzJUoc9EkBwY5WFz2ORmEHnRrl54G%2FLeK1yUKzzSTZmNcw1lL3jyx0j%2Bq5wU4z65TPe4qyAT0f%2FiMPKVp8noeoLdE%2F0cHYP6iV7ifb%2F%2FcX2DCayJtl6M0Hkwu1KcJZAM5KJG0nmrPVzOA%2BCH6%2F6pAwjemswwY6pgG1nqWsrbUoXMmLUNv8dHiDBwvk%2BtV4ZEKSwiX0U%2B3z9bFT7KsC5i8ZKeqSL%2BE2FwdaFyQjPIAbxVzlBbOKKSx8lOFLZduvwq%2F3UyEYZypiycSfbKlolPmjtSZhtuXbWhJXCFUtvnB6aS%2BtAaJ9HFnQgkcRjwXpg34BjJSbSlrSYLW94I1j7x0lya8N9B%2FUzZCx0j4SXtB%2FRnC0DgyImW07J77hN05h&X-Amz-Signature=f35fdd6ea4921d08df1715659a482a1dab0f6f14bfef0b383b1f9d6b6f7c5037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5VIHG7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHbQE7NTULo3PnUAU3O4xBECYKfj9%2FLbytU0jBt28xGWAiAE6XL%2FGkks%2FWI%2BVvcf4Wb6Of9N0GHiQeJYq%2B9RMbo49Cr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMDeh7FPvC3axR9jHCKtwDAZ27PHk4emjnS%2FQh%2By9X9kXCXu1J5LCA9Ga9maws2iO8nfTC03ghfpvrgoBcmJeWnndJ8mwTNGpQVdjZ%2BHNj4TsWDEEzi1jzHznsECOegQ5vOCSTGEEtt56RuQMwokcX4pgsFYKVZLxLm9QwLrxwfkuDFH801mpwrhyp80JbnLcjNCOk2VUyZVVP8Puf9wNmf8yzQaNAdGkxkVLI%2F%2B1OPTtQYHm6b%2FD6B2xYkugjVRx0IYmN5Uplw6oyWpLJ0rdwHxgZJ1pa0lyUpXl%2B47CPzT2xxDBhfuJpUg%2B%2B5wyKOd1hImtrcf9ix8sXUaAdg2zyjPNL5YsnbMQ87u1J6%2FdCg6afXEsxSi9kOMkcZdgA3OYK0QBDIrfurLFWvGCnf9G8cbDcGtMTSTWmGI3AtpY5VM48sHtGccTvKrMfqa5f6v9xCxoK0iC83MBTpLE%2Be3aLmSQ2XGNe62uGPjGuInH7AZnB4loC1uOoycSX9d%2FzJUoc9EkBwY5WFz2ORmEHnRrl54G%2FLeK1yUKzzSTZmNcw1lL3jyx0j%2Bq5wU4z65TPe4qyAT0f%2FiMPKVp8noeoLdE%2F0cHYP6iV7ifb%2F%2FcX2DCayJtl6M0Hkwu1KcJZAM5KJG0nmrPVzOA%2BCH6%2F6pAwjemswwY6pgG1nqWsrbUoXMmLUNv8dHiDBwvk%2BtV4ZEKSwiX0U%2B3z9bFT7KsC5i8ZKeqSL%2BE2FwdaFyQjPIAbxVzlBbOKKSx8lOFLZduvwq%2F3UyEYZypiycSfbKlolPmjtSZhtuXbWhJXCFUtvnB6aS%2BtAaJ9HFnQgkcRjwXpg34BjJSbSlrSYLW94I1j7x0lya8N9B%2FUzZCx0j4SXtB%2FRnC0DgyImW07J77hN05h&X-Amz-Signature=f3569879577a6ef97b205c085206da40b3676408bfe2623f5ef63ede034157d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5VIHG7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHbQE7NTULo3PnUAU3O4xBECYKfj9%2FLbytU0jBt28xGWAiAE6XL%2FGkks%2FWI%2BVvcf4Wb6Of9N0GHiQeJYq%2B9RMbo49Cr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMDeh7FPvC3axR9jHCKtwDAZ27PHk4emjnS%2FQh%2By9X9kXCXu1J5LCA9Ga9maws2iO8nfTC03ghfpvrgoBcmJeWnndJ8mwTNGpQVdjZ%2BHNj4TsWDEEzi1jzHznsECOegQ5vOCSTGEEtt56RuQMwokcX4pgsFYKVZLxLm9QwLrxwfkuDFH801mpwrhyp80JbnLcjNCOk2VUyZVVP8Puf9wNmf8yzQaNAdGkxkVLI%2F%2B1OPTtQYHm6b%2FD6B2xYkugjVRx0IYmN5Uplw6oyWpLJ0rdwHxgZJ1pa0lyUpXl%2B47CPzT2xxDBhfuJpUg%2B%2B5wyKOd1hImtrcf9ix8sXUaAdg2zyjPNL5YsnbMQ87u1J6%2FdCg6afXEsxSi9kOMkcZdgA3OYK0QBDIrfurLFWvGCnf9G8cbDcGtMTSTWmGI3AtpY5VM48sHtGccTvKrMfqa5f6v9xCxoK0iC83MBTpLE%2Be3aLmSQ2XGNe62uGPjGuInH7AZnB4loC1uOoycSX9d%2FzJUoc9EkBwY5WFz2ORmEHnRrl54G%2FLeK1yUKzzSTZmNcw1lL3jyx0j%2Bq5wU4z65TPe4qyAT0f%2FiMPKVp8noeoLdE%2F0cHYP6iV7ifb%2F%2FcX2DCayJtl6M0Hkwu1KcJZAM5KJG0nmrPVzOA%2BCH6%2F6pAwjemswwY6pgG1nqWsrbUoXMmLUNv8dHiDBwvk%2BtV4ZEKSwiX0U%2B3z9bFT7KsC5i8ZKeqSL%2BE2FwdaFyQjPIAbxVzlBbOKKSx8lOFLZduvwq%2F3UyEYZypiycSfbKlolPmjtSZhtuXbWhJXCFUtvnB6aS%2BtAaJ9HFnQgkcRjwXpg34BjJSbSlrSYLW94I1j7x0lya8N9B%2FUzZCx0j4SXtB%2FRnC0DgyImW07J77hN05h&X-Amz-Signature=c7523015d87d85c13b069f26e505cd5a9aceff39bdccccbd059611c91bd7ab9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5VIHG7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHbQE7NTULo3PnUAU3O4xBECYKfj9%2FLbytU0jBt28xGWAiAE6XL%2FGkks%2FWI%2BVvcf4Wb6Of9N0GHiQeJYq%2B9RMbo49Cr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMDeh7FPvC3axR9jHCKtwDAZ27PHk4emjnS%2FQh%2By9X9kXCXu1J5LCA9Ga9maws2iO8nfTC03ghfpvrgoBcmJeWnndJ8mwTNGpQVdjZ%2BHNj4TsWDEEzi1jzHznsECOegQ5vOCSTGEEtt56RuQMwokcX4pgsFYKVZLxLm9QwLrxwfkuDFH801mpwrhyp80JbnLcjNCOk2VUyZVVP8Puf9wNmf8yzQaNAdGkxkVLI%2F%2B1OPTtQYHm6b%2FD6B2xYkugjVRx0IYmN5Uplw6oyWpLJ0rdwHxgZJ1pa0lyUpXl%2B47CPzT2xxDBhfuJpUg%2B%2B5wyKOd1hImtrcf9ix8sXUaAdg2zyjPNL5YsnbMQ87u1J6%2FdCg6afXEsxSi9kOMkcZdgA3OYK0QBDIrfurLFWvGCnf9G8cbDcGtMTSTWmGI3AtpY5VM48sHtGccTvKrMfqa5f6v9xCxoK0iC83MBTpLE%2Be3aLmSQ2XGNe62uGPjGuInH7AZnB4loC1uOoycSX9d%2FzJUoc9EkBwY5WFz2ORmEHnRrl54G%2FLeK1yUKzzSTZmNcw1lL3jyx0j%2Bq5wU4z65TPe4qyAT0f%2FiMPKVp8noeoLdE%2F0cHYP6iV7ifb%2F%2FcX2DCayJtl6M0Hkwu1KcJZAM5KJG0nmrPVzOA%2BCH6%2F6pAwjemswwY6pgG1nqWsrbUoXMmLUNv8dHiDBwvk%2BtV4ZEKSwiX0U%2B3z9bFT7KsC5i8ZKeqSL%2BE2FwdaFyQjPIAbxVzlBbOKKSx8lOFLZduvwq%2F3UyEYZypiycSfbKlolPmjtSZhtuXbWhJXCFUtvnB6aS%2BtAaJ9HFnQgkcRjwXpg34BjJSbSlrSYLW94I1j7x0lya8N9B%2FUzZCx0j4SXtB%2FRnC0DgyImW07J77hN05h&X-Amz-Signature=c4145061751ed14e19f11878853b68bc6c5e69a95361946d5dc55e728fc4054e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
