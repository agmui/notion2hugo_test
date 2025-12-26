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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPCCXKP%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDFiqIvKOR%2FStFiQz2q9AdKCDHl7Fp3hCpqhC0NTjh0DwIhAKyVkyXrB2VZUtxb%2FM7m%2Fnf2xATcpMBkqPGrGKmT6PhpKv8DCEUQABoMNjM3NDIzMTgzODA1IgyrKruro1kVClw5Qcoq3AMZ68xmVg3B7%2F18u3x1hVS6EjHsg9HfUjzptApQcyDV%2F%2B%2BCyBPjHapsKIr10Ayj9GuqKUaSRUlOqyZIjrA8qb9oYsT6%2FxM8M0CEy%2Btz2Dx5A0T%2F0t0EUhKAUsGoNLw4yHqnve1NujexeBernCtsVdt%2FZlgZDY3%2B1k2jor5%2B1IBbe61FqR91YrC8IsJyxS2uLqkMaxfSz3djAgIWiNntPJBCqjXDXbIersbkkUVIX4shH4c9nLR4u7VvR%2FnZBDxt6G3QHKtV7gpyEPtKo71o6nR02DPzjuUHweDBZWhl9fy5n2YZVmhldTz1gwPz%2F1Rfejt8vp0Yy%2B1e15F9J2E2AdCcbcdi2CgZv6UmpmMoBdt3eympmZOQH69AidiGeKEzkNeQHZvGjSj2i%2FBYZuFQ%2B8Dfm1HYuGoARCLxzpvU6MZS%2FzNgJZ2WHYfW10LWDtXx7b2M6zpVLGK1fvFc7xQmXDUiQmI4QzY75SjPmcltc56VfHE2t39b9tIyKSVLHSzcdLRkcLkA93W7%2FCamAHduw9HCWxk%2BuLMS%2BSgSL0R6axkqmh8UpNwA4jjtB%2BRDZKPH9%2FWa2d9lq1A5%2BIkMRSXWpwoqtabnG0BXeNQmMvyWv3glIXM1JeSDYx3QX9eKITDZrbbKBjqkAQsdOkdRo4D0KVCQ38nrTkjHwnHPE9M8EHFo9zOCAAqI0ph02A60an1e8Z%2BNlOB9st4%2FoIA0DFii73tYwJ7oi717Jz4QZNAOlDKo5kUw7nE6A00SBTey7rn%2FVlrmEDzddC9m8P4tAS8AfA%2ByUztcduWH0CrO3q2sBQe3nCe0jIltOdTd0b67o1o6oLGyGNg0B51DeyJXeukKRsEFezhgx9EkfJBQ&X-Amz-Signature=14dbacdb5ef67a8d2d0c55ba6a0b22cf34493e083b9259f6812cad1f71ad9efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPCCXKP%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDFiqIvKOR%2FStFiQz2q9AdKCDHl7Fp3hCpqhC0NTjh0DwIhAKyVkyXrB2VZUtxb%2FM7m%2Fnf2xATcpMBkqPGrGKmT6PhpKv8DCEUQABoMNjM3NDIzMTgzODA1IgyrKruro1kVClw5Qcoq3AMZ68xmVg3B7%2F18u3x1hVS6EjHsg9HfUjzptApQcyDV%2F%2B%2BCyBPjHapsKIr10Ayj9GuqKUaSRUlOqyZIjrA8qb9oYsT6%2FxM8M0CEy%2Btz2Dx5A0T%2F0t0EUhKAUsGoNLw4yHqnve1NujexeBernCtsVdt%2FZlgZDY3%2B1k2jor5%2B1IBbe61FqR91YrC8IsJyxS2uLqkMaxfSz3djAgIWiNntPJBCqjXDXbIersbkkUVIX4shH4c9nLR4u7VvR%2FnZBDxt6G3QHKtV7gpyEPtKo71o6nR02DPzjuUHweDBZWhl9fy5n2YZVmhldTz1gwPz%2F1Rfejt8vp0Yy%2B1e15F9J2E2AdCcbcdi2CgZv6UmpmMoBdt3eympmZOQH69AidiGeKEzkNeQHZvGjSj2i%2FBYZuFQ%2B8Dfm1HYuGoARCLxzpvU6MZS%2FzNgJZ2WHYfW10LWDtXx7b2M6zpVLGK1fvFc7xQmXDUiQmI4QzY75SjPmcltc56VfHE2t39b9tIyKSVLHSzcdLRkcLkA93W7%2FCamAHduw9HCWxk%2BuLMS%2BSgSL0R6axkqmh8UpNwA4jjtB%2BRDZKPH9%2FWa2d9lq1A5%2BIkMRSXWpwoqtabnG0BXeNQmMvyWv3glIXM1JeSDYx3QX9eKITDZrbbKBjqkAQsdOkdRo4D0KVCQ38nrTkjHwnHPE9M8EHFo9zOCAAqI0ph02A60an1e8Z%2BNlOB9st4%2FoIA0DFii73tYwJ7oi717Jz4QZNAOlDKo5kUw7nE6A00SBTey7rn%2FVlrmEDzddC9m8P4tAS8AfA%2ByUztcduWH0CrO3q2sBQe3nCe0jIltOdTd0b67o1o6oLGyGNg0B51DeyJXeukKRsEFezhgx9EkfJBQ&X-Amz-Signature=65b6cc264393ebdad7d77c8f1faec7ab59647b6aef37358b4f78ce01ad4dab8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPCCXKP%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDFiqIvKOR%2FStFiQz2q9AdKCDHl7Fp3hCpqhC0NTjh0DwIhAKyVkyXrB2VZUtxb%2FM7m%2Fnf2xATcpMBkqPGrGKmT6PhpKv8DCEUQABoMNjM3NDIzMTgzODA1IgyrKruro1kVClw5Qcoq3AMZ68xmVg3B7%2F18u3x1hVS6EjHsg9HfUjzptApQcyDV%2F%2B%2BCyBPjHapsKIr10Ayj9GuqKUaSRUlOqyZIjrA8qb9oYsT6%2FxM8M0CEy%2Btz2Dx5A0T%2F0t0EUhKAUsGoNLw4yHqnve1NujexeBernCtsVdt%2FZlgZDY3%2B1k2jor5%2B1IBbe61FqR91YrC8IsJyxS2uLqkMaxfSz3djAgIWiNntPJBCqjXDXbIersbkkUVIX4shH4c9nLR4u7VvR%2FnZBDxt6G3QHKtV7gpyEPtKo71o6nR02DPzjuUHweDBZWhl9fy5n2YZVmhldTz1gwPz%2F1Rfejt8vp0Yy%2B1e15F9J2E2AdCcbcdi2CgZv6UmpmMoBdt3eympmZOQH69AidiGeKEzkNeQHZvGjSj2i%2FBYZuFQ%2B8Dfm1HYuGoARCLxzpvU6MZS%2FzNgJZ2WHYfW10LWDtXx7b2M6zpVLGK1fvFc7xQmXDUiQmI4QzY75SjPmcltc56VfHE2t39b9tIyKSVLHSzcdLRkcLkA93W7%2FCamAHduw9HCWxk%2BuLMS%2BSgSL0R6axkqmh8UpNwA4jjtB%2BRDZKPH9%2FWa2d9lq1A5%2BIkMRSXWpwoqtabnG0BXeNQmMvyWv3glIXM1JeSDYx3QX9eKITDZrbbKBjqkAQsdOkdRo4D0KVCQ38nrTkjHwnHPE9M8EHFo9zOCAAqI0ph02A60an1e8Z%2BNlOB9st4%2FoIA0DFii73tYwJ7oi717Jz4QZNAOlDKo5kUw7nE6A00SBTey7rn%2FVlrmEDzddC9m8P4tAS8AfA%2ByUztcduWH0CrO3q2sBQe3nCe0jIltOdTd0b67o1o6oLGyGNg0B51DeyJXeukKRsEFezhgx9EkfJBQ&X-Amz-Signature=21aac2ec7af2c5073b0a2df4cc5f409771bf8bed58b2e5d084a5963c11c05b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPCCXKP%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDFiqIvKOR%2FStFiQz2q9AdKCDHl7Fp3hCpqhC0NTjh0DwIhAKyVkyXrB2VZUtxb%2FM7m%2Fnf2xATcpMBkqPGrGKmT6PhpKv8DCEUQABoMNjM3NDIzMTgzODA1IgyrKruro1kVClw5Qcoq3AMZ68xmVg3B7%2F18u3x1hVS6EjHsg9HfUjzptApQcyDV%2F%2B%2BCyBPjHapsKIr10Ayj9GuqKUaSRUlOqyZIjrA8qb9oYsT6%2FxM8M0CEy%2Btz2Dx5A0T%2F0t0EUhKAUsGoNLw4yHqnve1NujexeBernCtsVdt%2FZlgZDY3%2B1k2jor5%2B1IBbe61FqR91YrC8IsJyxS2uLqkMaxfSz3djAgIWiNntPJBCqjXDXbIersbkkUVIX4shH4c9nLR4u7VvR%2FnZBDxt6G3QHKtV7gpyEPtKo71o6nR02DPzjuUHweDBZWhl9fy5n2YZVmhldTz1gwPz%2F1Rfejt8vp0Yy%2B1e15F9J2E2AdCcbcdi2CgZv6UmpmMoBdt3eympmZOQH69AidiGeKEzkNeQHZvGjSj2i%2FBYZuFQ%2B8Dfm1HYuGoARCLxzpvU6MZS%2FzNgJZ2WHYfW10LWDtXx7b2M6zpVLGK1fvFc7xQmXDUiQmI4QzY75SjPmcltc56VfHE2t39b9tIyKSVLHSzcdLRkcLkA93W7%2FCamAHduw9HCWxk%2BuLMS%2BSgSL0R6axkqmh8UpNwA4jjtB%2BRDZKPH9%2FWa2d9lq1A5%2BIkMRSXWpwoqtabnG0BXeNQmMvyWv3glIXM1JeSDYx3QX9eKITDZrbbKBjqkAQsdOkdRo4D0KVCQ38nrTkjHwnHPE9M8EHFo9zOCAAqI0ph02A60an1e8Z%2BNlOB9st4%2FoIA0DFii73tYwJ7oi717Jz4QZNAOlDKo5kUw7nE6A00SBTey7rn%2FVlrmEDzddC9m8P4tAS8AfA%2ByUztcduWH0CrO3q2sBQe3nCe0jIltOdTd0b67o1o6oLGyGNg0B51DeyJXeukKRsEFezhgx9EkfJBQ&X-Amz-Signature=5b19bc9cba24b857b196cb71ecc248a8f08c2a86226c355d34ce0e8603f69be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPCCXKP%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDFiqIvKOR%2FStFiQz2q9AdKCDHl7Fp3hCpqhC0NTjh0DwIhAKyVkyXrB2VZUtxb%2FM7m%2Fnf2xATcpMBkqPGrGKmT6PhpKv8DCEUQABoMNjM3NDIzMTgzODA1IgyrKruro1kVClw5Qcoq3AMZ68xmVg3B7%2F18u3x1hVS6EjHsg9HfUjzptApQcyDV%2F%2B%2BCyBPjHapsKIr10Ayj9GuqKUaSRUlOqyZIjrA8qb9oYsT6%2FxM8M0CEy%2Btz2Dx5A0T%2F0t0EUhKAUsGoNLw4yHqnve1NujexeBernCtsVdt%2FZlgZDY3%2B1k2jor5%2B1IBbe61FqR91YrC8IsJyxS2uLqkMaxfSz3djAgIWiNntPJBCqjXDXbIersbkkUVIX4shH4c9nLR4u7VvR%2FnZBDxt6G3QHKtV7gpyEPtKo71o6nR02DPzjuUHweDBZWhl9fy5n2YZVmhldTz1gwPz%2F1Rfejt8vp0Yy%2B1e15F9J2E2AdCcbcdi2CgZv6UmpmMoBdt3eympmZOQH69AidiGeKEzkNeQHZvGjSj2i%2FBYZuFQ%2B8Dfm1HYuGoARCLxzpvU6MZS%2FzNgJZ2WHYfW10LWDtXx7b2M6zpVLGK1fvFc7xQmXDUiQmI4QzY75SjPmcltc56VfHE2t39b9tIyKSVLHSzcdLRkcLkA93W7%2FCamAHduw9HCWxk%2BuLMS%2BSgSL0R6axkqmh8UpNwA4jjtB%2BRDZKPH9%2FWa2d9lq1A5%2BIkMRSXWpwoqtabnG0BXeNQmMvyWv3glIXM1JeSDYx3QX9eKITDZrbbKBjqkAQsdOkdRo4D0KVCQ38nrTkjHwnHPE9M8EHFo9zOCAAqI0ph02A60an1e8Z%2BNlOB9st4%2FoIA0DFii73tYwJ7oi717Jz4QZNAOlDKo5kUw7nE6A00SBTey7rn%2FVlrmEDzddC9m8P4tAS8AfA%2ByUztcduWH0CrO3q2sBQe3nCe0jIltOdTd0b67o1o6oLGyGNg0B51DeyJXeukKRsEFezhgx9EkfJBQ&X-Amz-Signature=1aefc50e96de776b17fea280bbb6b4aabeae40335f85bcebfe4a3173790fd649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
