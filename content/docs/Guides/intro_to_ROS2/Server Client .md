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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRPZ7BAG%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTgNFoO0M9tqQ3H6K5U1x22UkJDZpGaLkiEo5EmhtWmAIgJlk1tBhHtzB9IpUaHcFK9%2Bdny%2FxwcZdoN6NR2QUDM8AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCR1ILJZxK%2BHzzqoiCrcAxbOixBM9XpdBzfloEq7MhXxZTpJQ3oiL88KreVR%2BIOF4LFG8JZxeLGNRKTn%2FCD2F0UQ5WxpA%2B4OKe%2F8RwvSvkwHQ8dTzz0bvJE7AkyAT5TR2GzxBQWzKivspbwaSQw0UEacv1hNSQMnKtc7o%2BkPeDFs0AswygkxC0hiGOF4FylC6tIM%2F2nj5lQ8vyFYe4ryMSPxfhYqjpZqvPMV4MJckCzXeslngtBLt52die5Vixfr3p5xetMTBc91ttN0Anla0Jyl%2FuxE9IaR8bTuMfAW%2BTXsl6EO2ET5EWr0g0soXqALHDe2wyqcqAcMqjp0xe4knGi5BdeXN06%2BaFvR2H8m%2BydWBMCS8N%2BHSE%2FZC1clgGpptVM9yxnJooDUnBfmeBcw4TemChLrtZK69E7Nnjntd%2B3KSdiWPjUoz9QjUK9MDUtqAkSxDB9fGyjCDG68oo55QOWV92AzR0gnigYqQMOyjlIlieAO5ouRGvO1mtklNA6UJNQTUnZB4ZkuExpiy%2B%2Bf8nUVlMBMzROOq14zhqi6HsWXc2KEnYKQq%2BO967q3ZuKqj9TYwscJzgy6gkU1jsB6tO19ziqQ45r%2BnLKiOo%2BJv1qNvV1kPPmaRfecwmHYBnUVk6ZY5Y0P%2FFKLLkfmMO37jMAGOqUBTKpNGiQnIf9%2BaqRaxKlmp4KM08inlpnV1d0%2F1eyeXVWqtTsBOTUdqw4ORjicj0jhrZEOq1UjB3Hmhq2P9mSs%2FWSdYczGIZ5RmZbGgYluMDZzmdxyeYMkANthXI%2FGjOmPfUiQ%2B28Kj9w%2FJ0i0H6iUONQrqE71sMQL41uvVOjTqIqkJgrr5IGC9Gk98ZEfx42yUcl1qJOKIqi2BqaVUpWeakJZRDAo&X-Amz-Signature=0451a5be5b029ef7b79ba9913bb5e2e77acf2f8976956b958f2299e919c86a92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRPZ7BAG%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTgNFoO0M9tqQ3H6K5U1x22UkJDZpGaLkiEo5EmhtWmAIgJlk1tBhHtzB9IpUaHcFK9%2Bdny%2FxwcZdoN6NR2QUDM8AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCR1ILJZxK%2BHzzqoiCrcAxbOixBM9XpdBzfloEq7MhXxZTpJQ3oiL88KreVR%2BIOF4LFG8JZxeLGNRKTn%2FCD2F0UQ5WxpA%2B4OKe%2F8RwvSvkwHQ8dTzz0bvJE7AkyAT5TR2GzxBQWzKivspbwaSQw0UEacv1hNSQMnKtc7o%2BkPeDFs0AswygkxC0hiGOF4FylC6tIM%2F2nj5lQ8vyFYe4ryMSPxfhYqjpZqvPMV4MJckCzXeslngtBLt52die5Vixfr3p5xetMTBc91ttN0Anla0Jyl%2FuxE9IaR8bTuMfAW%2BTXsl6EO2ET5EWr0g0soXqALHDe2wyqcqAcMqjp0xe4knGi5BdeXN06%2BaFvR2H8m%2BydWBMCS8N%2BHSE%2FZC1clgGpptVM9yxnJooDUnBfmeBcw4TemChLrtZK69E7Nnjntd%2B3KSdiWPjUoz9QjUK9MDUtqAkSxDB9fGyjCDG68oo55QOWV92AzR0gnigYqQMOyjlIlieAO5ouRGvO1mtklNA6UJNQTUnZB4ZkuExpiy%2B%2Bf8nUVlMBMzROOq14zhqi6HsWXc2KEnYKQq%2BO967q3ZuKqj9TYwscJzgy6gkU1jsB6tO19ziqQ45r%2BnLKiOo%2BJv1qNvV1kPPmaRfecwmHYBnUVk6ZY5Y0P%2FFKLLkfmMO37jMAGOqUBTKpNGiQnIf9%2BaqRaxKlmp4KM08inlpnV1d0%2F1eyeXVWqtTsBOTUdqw4ORjicj0jhrZEOq1UjB3Hmhq2P9mSs%2FWSdYczGIZ5RmZbGgYluMDZzmdxyeYMkANthXI%2FGjOmPfUiQ%2B28Kj9w%2FJ0i0H6iUONQrqE71sMQL41uvVOjTqIqkJgrr5IGC9Gk98ZEfx42yUcl1qJOKIqi2BqaVUpWeakJZRDAo&X-Amz-Signature=895a4d4d4fe0677e263bdeed014aa995cf961478f7b73b70a6fa3a4bf6d48b47&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRPZ7BAG%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTgNFoO0M9tqQ3H6K5U1x22UkJDZpGaLkiEo5EmhtWmAIgJlk1tBhHtzB9IpUaHcFK9%2Bdny%2FxwcZdoN6NR2QUDM8AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCR1ILJZxK%2BHzzqoiCrcAxbOixBM9XpdBzfloEq7MhXxZTpJQ3oiL88KreVR%2BIOF4LFG8JZxeLGNRKTn%2FCD2F0UQ5WxpA%2B4OKe%2F8RwvSvkwHQ8dTzz0bvJE7AkyAT5TR2GzxBQWzKivspbwaSQw0UEacv1hNSQMnKtc7o%2BkPeDFs0AswygkxC0hiGOF4FylC6tIM%2F2nj5lQ8vyFYe4ryMSPxfhYqjpZqvPMV4MJckCzXeslngtBLt52die5Vixfr3p5xetMTBc91ttN0Anla0Jyl%2FuxE9IaR8bTuMfAW%2BTXsl6EO2ET5EWr0g0soXqALHDe2wyqcqAcMqjp0xe4knGi5BdeXN06%2BaFvR2H8m%2BydWBMCS8N%2BHSE%2FZC1clgGpptVM9yxnJooDUnBfmeBcw4TemChLrtZK69E7Nnjntd%2B3KSdiWPjUoz9QjUK9MDUtqAkSxDB9fGyjCDG68oo55QOWV92AzR0gnigYqQMOyjlIlieAO5ouRGvO1mtklNA6UJNQTUnZB4ZkuExpiy%2B%2Bf8nUVlMBMzROOq14zhqi6HsWXc2KEnYKQq%2BO967q3ZuKqj9TYwscJzgy6gkU1jsB6tO19ziqQ45r%2BnLKiOo%2BJv1qNvV1kPPmaRfecwmHYBnUVk6ZY5Y0P%2FFKLLkfmMO37jMAGOqUBTKpNGiQnIf9%2BaqRaxKlmp4KM08inlpnV1d0%2F1eyeXVWqtTsBOTUdqw4ORjicj0jhrZEOq1UjB3Hmhq2P9mSs%2FWSdYczGIZ5RmZbGgYluMDZzmdxyeYMkANthXI%2FGjOmPfUiQ%2B28Kj9w%2FJ0i0H6iUONQrqE71sMQL41uvVOjTqIqkJgrr5IGC9Gk98ZEfx42yUcl1qJOKIqi2BqaVUpWeakJZRDAo&X-Amz-Signature=5f298f0cdb7d73615e0a6dc2f9b3c148280d7bee5ed4c632d3c5938b52b9a86a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRPZ7BAG%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTgNFoO0M9tqQ3H6K5U1x22UkJDZpGaLkiEo5EmhtWmAIgJlk1tBhHtzB9IpUaHcFK9%2Bdny%2FxwcZdoN6NR2QUDM8AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCR1ILJZxK%2BHzzqoiCrcAxbOixBM9XpdBzfloEq7MhXxZTpJQ3oiL88KreVR%2BIOF4LFG8JZxeLGNRKTn%2FCD2F0UQ5WxpA%2B4OKe%2F8RwvSvkwHQ8dTzz0bvJE7AkyAT5TR2GzxBQWzKivspbwaSQw0UEacv1hNSQMnKtc7o%2BkPeDFs0AswygkxC0hiGOF4FylC6tIM%2F2nj5lQ8vyFYe4ryMSPxfhYqjpZqvPMV4MJckCzXeslngtBLt52die5Vixfr3p5xetMTBc91ttN0Anla0Jyl%2FuxE9IaR8bTuMfAW%2BTXsl6EO2ET5EWr0g0soXqALHDe2wyqcqAcMqjp0xe4knGi5BdeXN06%2BaFvR2H8m%2BydWBMCS8N%2BHSE%2FZC1clgGpptVM9yxnJooDUnBfmeBcw4TemChLrtZK69E7Nnjntd%2B3KSdiWPjUoz9QjUK9MDUtqAkSxDB9fGyjCDG68oo55QOWV92AzR0gnigYqQMOyjlIlieAO5ouRGvO1mtklNA6UJNQTUnZB4ZkuExpiy%2B%2Bf8nUVlMBMzROOq14zhqi6HsWXc2KEnYKQq%2BO967q3ZuKqj9TYwscJzgy6gkU1jsB6tO19ziqQ45r%2BnLKiOo%2BJv1qNvV1kPPmaRfecwmHYBnUVk6ZY5Y0P%2FFKLLkfmMO37jMAGOqUBTKpNGiQnIf9%2BaqRaxKlmp4KM08inlpnV1d0%2F1eyeXVWqtTsBOTUdqw4ORjicj0jhrZEOq1UjB3Hmhq2P9mSs%2FWSdYczGIZ5RmZbGgYluMDZzmdxyeYMkANthXI%2FGjOmPfUiQ%2B28Kj9w%2FJ0i0H6iUONQrqE71sMQL41uvVOjTqIqkJgrr5IGC9Gk98ZEfx42yUcl1qJOKIqi2BqaVUpWeakJZRDAo&X-Amz-Signature=6155895aee7b4c5178fbafdc04c8157b000466ff8ac8974b5b9eb55a36572a52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRPZ7BAG%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTgNFoO0M9tqQ3H6K5U1x22UkJDZpGaLkiEo5EmhtWmAIgJlk1tBhHtzB9IpUaHcFK9%2Bdny%2FxwcZdoN6NR2QUDM8AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCR1ILJZxK%2BHzzqoiCrcAxbOixBM9XpdBzfloEq7MhXxZTpJQ3oiL88KreVR%2BIOF4LFG8JZxeLGNRKTn%2FCD2F0UQ5WxpA%2B4OKe%2F8RwvSvkwHQ8dTzz0bvJE7AkyAT5TR2GzxBQWzKivspbwaSQw0UEacv1hNSQMnKtc7o%2BkPeDFs0AswygkxC0hiGOF4FylC6tIM%2F2nj5lQ8vyFYe4ryMSPxfhYqjpZqvPMV4MJckCzXeslngtBLt52die5Vixfr3p5xetMTBc91ttN0Anla0Jyl%2FuxE9IaR8bTuMfAW%2BTXsl6EO2ET5EWr0g0soXqALHDe2wyqcqAcMqjp0xe4knGi5BdeXN06%2BaFvR2H8m%2BydWBMCS8N%2BHSE%2FZC1clgGpptVM9yxnJooDUnBfmeBcw4TemChLrtZK69E7Nnjntd%2B3KSdiWPjUoz9QjUK9MDUtqAkSxDB9fGyjCDG68oo55QOWV92AzR0gnigYqQMOyjlIlieAO5ouRGvO1mtklNA6UJNQTUnZB4ZkuExpiy%2B%2Bf8nUVlMBMzROOq14zhqi6HsWXc2KEnYKQq%2BO967q3ZuKqj9TYwscJzgy6gkU1jsB6tO19ziqQ45r%2BnLKiOo%2BJv1qNvV1kPPmaRfecwmHYBnUVk6ZY5Y0P%2FFKLLkfmMO37jMAGOqUBTKpNGiQnIf9%2BaqRaxKlmp4KM08inlpnV1d0%2F1eyeXVWqtTsBOTUdqw4ORjicj0jhrZEOq1UjB3Hmhq2P9mSs%2FWSdYczGIZ5RmZbGgYluMDZzmdxyeYMkANthXI%2FGjOmPfUiQ%2B28Kj9w%2FJ0i0H6iUONQrqE71sMQL41uvVOjTqIqkJgrr5IGC9Gk98ZEfx42yUcl1qJOKIqi2BqaVUpWeakJZRDAo&X-Amz-Signature=1a1cfe8556c4da179f155071ccb2c00c21523ecde3b1cb03ea279e6c4926894c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
