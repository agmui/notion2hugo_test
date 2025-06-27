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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF57PIRD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAv0oay1MEaYOBuOaw24guts31NTYTjA5NuswXOHlVvaAiB8mFZ6PsaRPycC0nw9cKL3cM3D3x37LtVFtp%2FrPDCDyyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM4L9DGLAo%2BBDDfJpvKtwDsHWUCDlr6Lwq7d%2FVNCluJi5qsJM9UrTQYBl3tXowQ1%2FEph5hTljlBQ%2BUfzVqBGz9lYndFRgxRRYCrRYPg%2BMnUaNcKL%2F4POBASDsgHtrdBlAEEvMcieSmDCqYXh3ZqluEhCrQcYxuCh2ofXwNv%2F3L8Yd6AmoXWHT%2BdNuI3wQ8BCHjt%2BTc0nVxyPHcF7EgVgzlbynaV8%2B8xmRHiSe5gtov2wlp3CgS2%2F2F3JpHQ7Xphi4ZVHZ%2F6LEKeRGlM5DAqRPiqhynyP8It9ZPOa1uAea6sCCu7FMsOHnLQ0PtB9sjIA8RN7zXjjQwsgxRrgdLskIxbsU0Mgyj9ygVd7S3Ka%2FNv7yJJ5lds0iaOrDDcMoqjTUr5Tt%2Fp06Bk53PPbhMvgvxSv1icQKFDbvv3zPB%2FDeuQm0CNX%2FNoNDMaevJtK%2FrK2m8G7yOILsnElcEo4jyRZpaCvaB0ocevJ37wzi2tKZWXYVXPAabk%2FUuQGf%2BKApZbC4HbETmdVhVpTI%2F9XKsN9rU%2Bvq5Vj%2BzyhJ6QS5xy2IYYIgkfeumezOlg88yF1o3xoMgNhbmRtcmIAotSHZn2yYGgC7aSTjdexnUSOfSGKIZOR6S9kKEfNFgMeet1228zvZHoXa7ihqFcWJnh%2BcwsqD4wgY6pgGNMdgfLMghrrlhtddkyKi1xH0C29b6UYrA4FlTA7nr%2B40%2BNkNa5krQ7DkKXk3WiTD3LCdet5fkOaX%2FdTt%2BJtugyblO7%2F%2FFNXbhWVW6Nyud9MOtCH36trYhJ7pq82jHwhMbK%2BPHhO793shE7MhRf4x9%2Bhbuk4q2vCv8CCZaknHUCmkHLzza6KwYWrycAl0qBIrgKSrzn05Cmx0%2BwSDs2tB%2BMq3dcKwa&X-Amz-Signature=af941ef9b38d9e757c37f323dfac5ec316dd466d9dddcb45d5c179419839d15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF57PIRD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAv0oay1MEaYOBuOaw24guts31NTYTjA5NuswXOHlVvaAiB8mFZ6PsaRPycC0nw9cKL3cM3D3x37LtVFtp%2FrPDCDyyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM4L9DGLAo%2BBDDfJpvKtwDsHWUCDlr6Lwq7d%2FVNCluJi5qsJM9UrTQYBl3tXowQ1%2FEph5hTljlBQ%2BUfzVqBGz9lYndFRgxRRYCrRYPg%2BMnUaNcKL%2F4POBASDsgHtrdBlAEEvMcieSmDCqYXh3ZqluEhCrQcYxuCh2ofXwNv%2F3L8Yd6AmoXWHT%2BdNuI3wQ8BCHjt%2BTc0nVxyPHcF7EgVgzlbynaV8%2B8xmRHiSe5gtov2wlp3CgS2%2F2F3JpHQ7Xphi4ZVHZ%2F6LEKeRGlM5DAqRPiqhynyP8It9ZPOa1uAea6sCCu7FMsOHnLQ0PtB9sjIA8RN7zXjjQwsgxRrgdLskIxbsU0Mgyj9ygVd7S3Ka%2FNv7yJJ5lds0iaOrDDcMoqjTUr5Tt%2Fp06Bk53PPbhMvgvxSv1icQKFDbvv3zPB%2FDeuQm0CNX%2FNoNDMaevJtK%2FrK2m8G7yOILsnElcEo4jyRZpaCvaB0ocevJ37wzi2tKZWXYVXPAabk%2FUuQGf%2BKApZbC4HbETmdVhVpTI%2F9XKsN9rU%2Bvq5Vj%2BzyhJ6QS5xy2IYYIgkfeumezOlg88yF1o3xoMgNhbmRtcmIAotSHZn2yYGgC7aSTjdexnUSOfSGKIZOR6S9kKEfNFgMeet1228zvZHoXa7ihqFcWJnh%2BcwsqD4wgY6pgGNMdgfLMghrrlhtddkyKi1xH0C29b6UYrA4FlTA7nr%2B40%2BNkNa5krQ7DkKXk3WiTD3LCdet5fkOaX%2FdTt%2BJtugyblO7%2F%2FFNXbhWVW6Nyud9MOtCH36trYhJ7pq82jHwhMbK%2BPHhO793shE7MhRf4x9%2Bhbuk4q2vCv8CCZaknHUCmkHLzza6KwYWrycAl0qBIrgKSrzn05Cmx0%2BwSDs2tB%2BMq3dcKwa&X-Amz-Signature=e09a6813318356db8f7073210190a8963dfdcb77bfbf0d3a960b6a49550e3c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF57PIRD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAv0oay1MEaYOBuOaw24guts31NTYTjA5NuswXOHlVvaAiB8mFZ6PsaRPycC0nw9cKL3cM3D3x37LtVFtp%2FrPDCDyyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM4L9DGLAo%2BBDDfJpvKtwDsHWUCDlr6Lwq7d%2FVNCluJi5qsJM9UrTQYBl3tXowQ1%2FEph5hTljlBQ%2BUfzVqBGz9lYndFRgxRRYCrRYPg%2BMnUaNcKL%2F4POBASDsgHtrdBlAEEvMcieSmDCqYXh3ZqluEhCrQcYxuCh2ofXwNv%2F3L8Yd6AmoXWHT%2BdNuI3wQ8BCHjt%2BTc0nVxyPHcF7EgVgzlbynaV8%2B8xmRHiSe5gtov2wlp3CgS2%2F2F3JpHQ7Xphi4ZVHZ%2F6LEKeRGlM5DAqRPiqhynyP8It9ZPOa1uAea6sCCu7FMsOHnLQ0PtB9sjIA8RN7zXjjQwsgxRrgdLskIxbsU0Mgyj9ygVd7S3Ka%2FNv7yJJ5lds0iaOrDDcMoqjTUr5Tt%2Fp06Bk53PPbhMvgvxSv1icQKFDbvv3zPB%2FDeuQm0CNX%2FNoNDMaevJtK%2FrK2m8G7yOILsnElcEo4jyRZpaCvaB0ocevJ37wzi2tKZWXYVXPAabk%2FUuQGf%2BKApZbC4HbETmdVhVpTI%2F9XKsN9rU%2Bvq5Vj%2BzyhJ6QS5xy2IYYIgkfeumezOlg88yF1o3xoMgNhbmRtcmIAotSHZn2yYGgC7aSTjdexnUSOfSGKIZOR6S9kKEfNFgMeet1228zvZHoXa7ihqFcWJnh%2BcwsqD4wgY6pgGNMdgfLMghrrlhtddkyKi1xH0C29b6UYrA4FlTA7nr%2B40%2BNkNa5krQ7DkKXk3WiTD3LCdet5fkOaX%2FdTt%2BJtugyblO7%2F%2FFNXbhWVW6Nyud9MOtCH36trYhJ7pq82jHwhMbK%2BPHhO793shE7MhRf4x9%2Bhbuk4q2vCv8CCZaknHUCmkHLzza6KwYWrycAl0qBIrgKSrzn05Cmx0%2BwSDs2tB%2BMq3dcKwa&X-Amz-Signature=2baae6fd53f235c193f4e581b167eafa579b76a66aade3ee91c66a817513b23c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF57PIRD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAv0oay1MEaYOBuOaw24guts31NTYTjA5NuswXOHlVvaAiB8mFZ6PsaRPycC0nw9cKL3cM3D3x37LtVFtp%2FrPDCDyyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM4L9DGLAo%2BBDDfJpvKtwDsHWUCDlr6Lwq7d%2FVNCluJi5qsJM9UrTQYBl3tXowQ1%2FEph5hTljlBQ%2BUfzVqBGz9lYndFRgxRRYCrRYPg%2BMnUaNcKL%2F4POBASDsgHtrdBlAEEvMcieSmDCqYXh3ZqluEhCrQcYxuCh2ofXwNv%2F3L8Yd6AmoXWHT%2BdNuI3wQ8BCHjt%2BTc0nVxyPHcF7EgVgzlbynaV8%2B8xmRHiSe5gtov2wlp3CgS2%2F2F3JpHQ7Xphi4ZVHZ%2F6LEKeRGlM5DAqRPiqhynyP8It9ZPOa1uAea6sCCu7FMsOHnLQ0PtB9sjIA8RN7zXjjQwsgxRrgdLskIxbsU0Mgyj9ygVd7S3Ka%2FNv7yJJ5lds0iaOrDDcMoqjTUr5Tt%2Fp06Bk53PPbhMvgvxSv1icQKFDbvv3zPB%2FDeuQm0CNX%2FNoNDMaevJtK%2FrK2m8G7yOILsnElcEo4jyRZpaCvaB0ocevJ37wzi2tKZWXYVXPAabk%2FUuQGf%2BKApZbC4HbETmdVhVpTI%2F9XKsN9rU%2Bvq5Vj%2BzyhJ6QS5xy2IYYIgkfeumezOlg88yF1o3xoMgNhbmRtcmIAotSHZn2yYGgC7aSTjdexnUSOfSGKIZOR6S9kKEfNFgMeet1228zvZHoXa7ihqFcWJnh%2BcwsqD4wgY6pgGNMdgfLMghrrlhtddkyKi1xH0C29b6UYrA4FlTA7nr%2B40%2BNkNa5krQ7DkKXk3WiTD3LCdet5fkOaX%2FdTt%2BJtugyblO7%2F%2FFNXbhWVW6Nyud9MOtCH36trYhJ7pq82jHwhMbK%2BPHhO793shE7MhRf4x9%2Bhbuk4q2vCv8CCZaknHUCmkHLzza6KwYWrycAl0qBIrgKSrzn05Cmx0%2BwSDs2tB%2BMq3dcKwa&X-Amz-Signature=8fd2065a2ac9d4f9f1e6832358fadb314a0bf9ae6bce8b4410eafded44e9da59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF57PIRD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAv0oay1MEaYOBuOaw24guts31NTYTjA5NuswXOHlVvaAiB8mFZ6PsaRPycC0nw9cKL3cM3D3x37LtVFtp%2FrPDCDyyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM4L9DGLAo%2BBDDfJpvKtwDsHWUCDlr6Lwq7d%2FVNCluJi5qsJM9UrTQYBl3tXowQ1%2FEph5hTljlBQ%2BUfzVqBGz9lYndFRgxRRYCrRYPg%2BMnUaNcKL%2F4POBASDsgHtrdBlAEEvMcieSmDCqYXh3ZqluEhCrQcYxuCh2ofXwNv%2F3L8Yd6AmoXWHT%2BdNuI3wQ8BCHjt%2BTc0nVxyPHcF7EgVgzlbynaV8%2B8xmRHiSe5gtov2wlp3CgS2%2F2F3JpHQ7Xphi4ZVHZ%2F6LEKeRGlM5DAqRPiqhynyP8It9ZPOa1uAea6sCCu7FMsOHnLQ0PtB9sjIA8RN7zXjjQwsgxRrgdLskIxbsU0Mgyj9ygVd7S3Ka%2FNv7yJJ5lds0iaOrDDcMoqjTUr5Tt%2Fp06Bk53PPbhMvgvxSv1icQKFDbvv3zPB%2FDeuQm0CNX%2FNoNDMaevJtK%2FrK2m8G7yOILsnElcEo4jyRZpaCvaB0ocevJ37wzi2tKZWXYVXPAabk%2FUuQGf%2BKApZbC4HbETmdVhVpTI%2F9XKsN9rU%2Bvq5Vj%2BzyhJ6QS5xy2IYYIgkfeumezOlg88yF1o3xoMgNhbmRtcmIAotSHZn2yYGgC7aSTjdexnUSOfSGKIZOR6S9kKEfNFgMeet1228zvZHoXa7ihqFcWJnh%2BcwsqD4wgY6pgGNMdgfLMghrrlhtddkyKi1xH0C29b6UYrA4FlTA7nr%2B40%2BNkNa5krQ7DkKXk3WiTD3LCdet5fkOaX%2FdTt%2BJtugyblO7%2F%2FFNXbhWVW6Nyud9MOtCH36trYhJ7pq82jHwhMbK%2BPHhO793shE7MhRf4x9%2Bhbuk4q2vCv8CCZaknHUCmkHLzza6KwYWrycAl0qBIrgKSrzn05Cmx0%2BwSDs2tB%2BMq3dcKwa&X-Amz-Signature=31f0fbc4c7d2dba236166b45b1be42adff0821eb09a530cfa85a8caca1a64f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
