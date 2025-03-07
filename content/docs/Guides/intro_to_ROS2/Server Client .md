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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGJPTQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOyeNfBC04mvlfE33z9z1gn4ndvYah2PMHL5lxb2KeFgIgbzGaIotCVrBrHqfERU0B8no33d54MmFG70fqaxtYzZ8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFStYNwJCCv6IFxvoSrcA4YKKiHJ5o8fX35uyr5pYapFAIKuPr1%2Fiucr9tA5eE6pW6KZpFV%2FvGNWr13Zl3AZDU9HoIx5MFgRGpLWKAAdjn4czeY9m4n1lzocj3kJ9Jzj104DtuAMBruo4vLs4pWVh5BVJEOzbvBlBWhu5WUV9RwAt5XQIRgklWE%2Bb2PEAlIvAOlWrx1%2Ba7W4Q8XjyAteQnLLwb6JSmj4%2BcBmBDrHHcR2ToB2XX4PSqzPSdYxBxnmBSIKFULiwh33LAz3iv51dBlodZNh%2FS0tjT1xrCcUtG9iQi5dEpCVd3oKN6sP9HyO9geVcfxvvr5xcRDh64tg0FpiiTarDoBmV%2F%2F9okrxcAPBQAglLJYMWOoqgqpzlLb5gF%2BF5N0z3K2Mg6M9t3E%2Fedhl1Prmryc0PJR6x9IvAnMdUipA2eGdxW9uRaJu5OIippoGEkQs9cCKuXDm%2BacGaj91djV%2F5YmJzDVa5zsHpuaHyW2HUaOEGDZiSm61CPto%2Bg%2B%2BLR34qToQlfYQ13Uo%2BcPPw581lhClRhHy%2FTBwexZpLB9WJ12JTBmdZ30yJqE1yK%2BCqQ34b8qh6VxBrXe8%2BPthLWUkoKOzH5DTSoDzmaVES%2BnHwTO1YDa5CQzrQVZVPn80q8t6JG7qwn5MMKf%2Bq74GOqUBJKcKFb31TqegY48fuedcwiQgDYuQ0XGvwryK7ub35rDg3lYiQK%2FaA8O3jjQ5zQ5kqhWSexNvlkypOh85BedtM20LbevtmmXSwZ8NNjtOHIKd7yiALFETWqX9J5kFHdoZPNWcftw54DE%2BdGlplqJwz9Iur2VKdoaQqf5%2BOF445S9HUjNZdoPO8uQSqHNQqiZCX7%2FxnY8NrIwxnd84Gih%2BvWpKWMIg&X-Amz-Signature=574df29fd404bd738aec1357ed1e4a63e9ade0a240770e543354f4520e78de5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGJPTQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOyeNfBC04mvlfE33z9z1gn4ndvYah2PMHL5lxb2KeFgIgbzGaIotCVrBrHqfERU0B8no33d54MmFG70fqaxtYzZ8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFStYNwJCCv6IFxvoSrcA4YKKiHJ5o8fX35uyr5pYapFAIKuPr1%2Fiucr9tA5eE6pW6KZpFV%2FvGNWr13Zl3AZDU9HoIx5MFgRGpLWKAAdjn4czeY9m4n1lzocj3kJ9Jzj104DtuAMBruo4vLs4pWVh5BVJEOzbvBlBWhu5WUV9RwAt5XQIRgklWE%2Bb2PEAlIvAOlWrx1%2Ba7W4Q8XjyAteQnLLwb6JSmj4%2BcBmBDrHHcR2ToB2XX4PSqzPSdYxBxnmBSIKFULiwh33LAz3iv51dBlodZNh%2FS0tjT1xrCcUtG9iQi5dEpCVd3oKN6sP9HyO9geVcfxvvr5xcRDh64tg0FpiiTarDoBmV%2F%2F9okrxcAPBQAglLJYMWOoqgqpzlLb5gF%2BF5N0z3K2Mg6M9t3E%2Fedhl1Prmryc0PJR6x9IvAnMdUipA2eGdxW9uRaJu5OIippoGEkQs9cCKuXDm%2BacGaj91djV%2F5YmJzDVa5zsHpuaHyW2HUaOEGDZiSm61CPto%2Bg%2B%2BLR34qToQlfYQ13Uo%2BcPPw581lhClRhHy%2FTBwexZpLB9WJ12JTBmdZ30yJqE1yK%2BCqQ34b8qh6VxBrXe8%2BPthLWUkoKOzH5DTSoDzmaVES%2BnHwTO1YDa5CQzrQVZVPn80q8t6JG7qwn5MMKf%2Bq74GOqUBJKcKFb31TqegY48fuedcwiQgDYuQ0XGvwryK7ub35rDg3lYiQK%2FaA8O3jjQ5zQ5kqhWSexNvlkypOh85BedtM20LbevtmmXSwZ8NNjtOHIKd7yiALFETWqX9J5kFHdoZPNWcftw54DE%2BdGlplqJwz9Iur2VKdoaQqf5%2BOF445S9HUjNZdoPO8uQSqHNQqiZCX7%2FxnY8NrIwxnd84Gih%2BvWpKWMIg&X-Amz-Signature=7985a80ecf960858eb4e6be1428322c60f10c40a225247efe65a9571bce0703e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGJPTQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOyeNfBC04mvlfE33z9z1gn4ndvYah2PMHL5lxb2KeFgIgbzGaIotCVrBrHqfERU0B8no33d54MmFG70fqaxtYzZ8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFStYNwJCCv6IFxvoSrcA4YKKiHJ5o8fX35uyr5pYapFAIKuPr1%2Fiucr9tA5eE6pW6KZpFV%2FvGNWr13Zl3AZDU9HoIx5MFgRGpLWKAAdjn4czeY9m4n1lzocj3kJ9Jzj104DtuAMBruo4vLs4pWVh5BVJEOzbvBlBWhu5WUV9RwAt5XQIRgklWE%2Bb2PEAlIvAOlWrx1%2Ba7W4Q8XjyAteQnLLwb6JSmj4%2BcBmBDrHHcR2ToB2XX4PSqzPSdYxBxnmBSIKFULiwh33LAz3iv51dBlodZNh%2FS0tjT1xrCcUtG9iQi5dEpCVd3oKN6sP9HyO9geVcfxvvr5xcRDh64tg0FpiiTarDoBmV%2F%2F9okrxcAPBQAglLJYMWOoqgqpzlLb5gF%2BF5N0z3K2Mg6M9t3E%2Fedhl1Prmryc0PJR6x9IvAnMdUipA2eGdxW9uRaJu5OIippoGEkQs9cCKuXDm%2BacGaj91djV%2F5YmJzDVa5zsHpuaHyW2HUaOEGDZiSm61CPto%2Bg%2B%2BLR34qToQlfYQ13Uo%2BcPPw581lhClRhHy%2FTBwexZpLB9WJ12JTBmdZ30yJqE1yK%2BCqQ34b8qh6VxBrXe8%2BPthLWUkoKOzH5DTSoDzmaVES%2BnHwTO1YDa5CQzrQVZVPn80q8t6JG7qwn5MMKf%2Bq74GOqUBJKcKFb31TqegY48fuedcwiQgDYuQ0XGvwryK7ub35rDg3lYiQK%2FaA8O3jjQ5zQ5kqhWSexNvlkypOh85BedtM20LbevtmmXSwZ8NNjtOHIKd7yiALFETWqX9J5kFHdoZPNWcftw54DE%2BdGlplqJwz9Iur2VKdoaQqf5%2BOF445S9HUjNZdoPO8uQSqHNQqiZCX7%2FxnY8NrIwxnd84Gih%2BvWpKWMIg&X-Amz-Signature=d91b76df099ed58f16cdc0d423fb954e8168872ad2240235f1119e9227ebed61&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGJPTQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOyeNfBC04mvlfE33z9z1gn4ndvYah2PMHL5lxb2KeFgIgbzGaIotCVrBrHqfERU0B8no33d54MmFG70fqaxtYzZ8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFStYNwJCCv6IFxvoSrcA4YKKiHJ5o8fX35uyr5pYapFAIKuPr1%2Fiucr9tA5eE6pW6KZpFV%2FvGNWr13Zl3AZDU9HoIx5MFgRGpLWKAAdjn4czeY9m4n1lzocj3kJ9Jzj104DtuAMBruo4vLs4pWVh5BVJEOzbvBlBWhu5WUV9RwAt5XQIRgklWE%2Bb2PEAlIvAOlWrx1%2Ba7W4Q8XjyAteQnLLwb6JSmj4%2BcBmBDrHHcR2ToB2XX4PSqzPSdYxBxnmBSIKFULiwh33LAz3iv51dBlodZNh%2FS0tjT1xrCcUtG9iQi5dEpCVd3oKN6sP9HyO9geVcfxvvr5xcRDh64tg0FpiiTarDoBmV%2F%2F9okrxcAPBQAglLJYMWOoqgqpzlLb5gF%2BF5N0z3K2Mg6M9t3E%2Fedhl1Prmryc0PJR6x9IvAnMdUipA2eGdxW9uRaJu5OIippoGEkQs9cCKuXDm%2BacGaj91djV%2F5YmJzDVa5zsHpuaHyW2HUaOEGDZiSm61CPto%2Bg%2B%2BLR34qToQlfYQ13Uo%2BcPPw581lhClRhHy%2FTBwexZpLB9WJ12JTBmdZ30yJqE1yK%2BCqQ34b8qh6VxBrXe8%2BPthLWUkoKOzH5DTSoDzmaVES%2BnHwTO1YDa5CQzrQVZVPn80q8t6JG7qwn5MMKf%2Bq74GOqUBJKcKFb31TqegY48fuedcwiQgDYuQ0XGvwryK7ub35rDg3lYiQK%2FaA8O3jjQ5zQ5kqhWSexNvlkypOh85BedtM20LbevtmmXSwZ8NNjtOHIKd7yiALFETWqX9J5kFHdoZPNWcftw54DE%2BdGlplqJwz9Iur2VKdoaQqf5%2BOF445S9HUjNZdoPO8uQSqHNQqiZCX7%2FxnY8NrIwxnd84Gih%2BvWpKWMIg&X-Amz-Signature=fd13530a23452f18210e74d9d649c7c3400478afd40bdc3e360cb164c35e4acd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGJPTQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOyeNfBC04mvlfE33z9z1gn4ndvYah2PMHL5lxb2KeFgIgbzGaIotCVrBrHqfERU0B8no33d54MmFG70fqaxtYzZ8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFStYNwJCCv6IFxvoSrcA4YKKiHJ5o8fX35uyr5pYapFAIKuPr1%2Fiucr9tA5eE6pW6KZpFV%2FvGNWr13Zl3AZDU9HoIx5MFgRGpLWKAAdjn4czeY9m4n1lzocj3kJ9Jzj104DtuAMBruo4vLs4pWVh5BVJEOzbvBlBWhu5WUV9RwAt5XQIRgklWE%2Bb2PEAlIvAOlWrx1%2Ba7W4Q8XjyAteQnLLwb6JSmj4%2BcBmBDrHHcR2ToB2XX4PSqzPSdYxBxnmBSIKFULiwh33LAz3iv51dBlodZNh%2FS0tjT1xrCcUtG9iQi5dEpCVd3oKN6sP9HyO9geVcfxvvr5xcRDh64tg0FpiiTarDoBmV%2F%2F9okrxcAPBQAglLJYMWOoqgqpzlLb5gF%2BF5N0z3K2Mg6M9t3E%2Fedhl1Prmryc0PJR6x9IvAnMdUipA2eGdxW9uRaJu5OIippoGEkQs9cCKuXDm%2BacGaj91djV%2F5YmJzDVa5zsHpuaHyW2HUaOEGDZiSm61CPto%2Bg%2B%2BLR34qToQlfYQ13Uo%2BcPPw581lhClRhHy%2FTBwexZpLB9WJ12JTBmdZ30yJqE1yK%2BCqQ34b8qh6VxBrXe8%2BPthLWUkoKOzH5DTSoDzmaVES%2BnHwTO1YDa5CQzrQVZVPn80q8t6JG7qwn5MMKf%2Bq74GOqUBJKcKFb31TqegY48fuedcwiQgDYuQ0XGvwryK7ub35rDg3lYiQK%2FaA8O3jjQ5zQ5kqhWSexNvlkypOh85BedtM20LbevtmmXSwZ8NNjtOHIKd7yiALFETWqX9J5kFHdoZPNWcftw54DE%2BdGlplqJwz9Iur2VKdoaQqf5%2BOF445S9HUjNZdoPO8uQSqHNQqiZCX7%2FxnY8NrIwxnd84Gih%2BvWpKWMIg&X-Amz-Signature=ace43c5f35da07c85b6a874b8a80d667841a30913dfa2ba98fea0f5fe639200a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
