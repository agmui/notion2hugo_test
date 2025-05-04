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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSIS3QS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDDr%2BfS4QLwxe6IzKzW5idroPc6wUMDKMw0qLw4pqp41AIgfORyJHSyL69dHo0E0dIEpopJy%2BV6oiF18aM97pZsomUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJmtKEQaVtxcsAI3SrcA90SueUKhr5Q%2B10HPuDpfZ9wKxFQ5vZOqiennjd4%2BKkhqqmuUERUKHmZsG0InFNw2B%2FavffIrFtKDsL3BgSIA75zdVlStOzpXd%2FRsu9bggNGgkKN9Epxx5WhtQOzCFpjsFIKPFlf6nVqOnTtxCvdp9Pn%2BptCSU%2FAJ%2Bb5gZaoAkBsmY4sj1wdallsUgD%2F%2FK6HducJfLUtmHX7kpvgdegLxaBaVv2ngHIzz8gOWrRA0gwysbu62ZkPG6YwKHQfBI1nNbXkiNkxiX4nxJnxdjC8TssISvASmZFGGB31eSZOHwWo6WaqHFOh21%2BjFXceOFb8BkWoYng4rPPsnBO4gJQISPG0vQJF2oqmpKhW47pq%2FxKv82kliEhODDJoS70s2pdPc0aC4ChG0kvOdvkX32px%2BsiXupCbsSFlmJE7LzX8uOmYlkEOibb3QvrnuOEtf72J1ierlfkFglCqe2PL8RYo63pVMA%2B5bWBEpJxpV12JlAnjUU4xhuRjV5rYdJtL%2Fn25y11F%2FPtWTciJg36dhvETvi%2FyDL0DdtCafoGXRiElt%2Fgff%2FY65OKrw71rWLSUf5SrKy6OhEXBXLh2Xs78N4BNG%2BAyzoYIqr7HISw30ILV7O0qcSR5K3SQaqC3an9yMPrR28AGOqUB5SStrmcTB0a8GMdF%2BKv1qJNeeFBnTpcysBjhHh9DMVQQmYxDzw69pMcl%2FJwmvZgDK9HBPfy8TBkynU6GN8wdTkjdzgOGsJDBs6jVkjydAy6hDpccXDbL%2BcIRxaX%2BpcBf2uEX1zPPq8THGU73vYykdgWvo1weFjmDIMisfMNeusdpfjcIMiy6qi7U5g0%2FZzePxfql0leXwiEHAxzoZNzC43kvt%2BtZ&X-Amz-Signature=d64bddd685963a3f8b457640fa203dc78fae3d73c67381119d06997d52021a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSIS3QS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDDr%2BfS4QLwxe6IzKzW5idroPc6wUMDKMw0qLw4pqp41AIgfORyJHSyL69dHo0E0dIEpopJy%2BV6oiF18aM97pZsomUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJmtKEQaVtxcsAI3SrcA90SueUKhr5Q%2B10HPuDpfZ9wKxFQ5vZOqiennjd4%2BKkhqqmuUERUKHmZsG0InFNw2B%2FavffIrFtKDsL3BgSIA75zdVlStOzpXd%2FRsu9bggNGgkKN9Epxx5WhtQOzCFpjsFIKPFlf6nVqOnTtxCvdp9Pn%2BptCSU%2FAJ%2Bb5gZaoAkBsmY4sj1wdallsUgD%2F%2FK6HducJfLUtmHX7kpvgdegLxaBaVv2ngHIzz8gOWrRA0gwysbu62ZkPG6YwKHQfBI1nNbXkiNkxiX4nxJnxdjC8TssISvASmZFGGB31eSZOHwWo6WaqHFOh21%2BjFXceOFb8BkWoYng4rPPsnBO4gJQISPG0vQJF2oqmpKhW47pq%2FxKv82kliEhODDJoS70s2pdPc0aC4ChG0kvOdvkX32px%2BsiXupCbsSFlmJE7LzX8uOmYlkEOibb3QvrnuOEtf72J1ierlfkFglCqe2PL8RYo63pVMA%2B5bWBEpJxpV12JlAnjUU4xhuRjV5rYdJtL%2Fn25y11F%2FPtWTciJg36dhvETvi%2FyDL0DdtCafoGXRiElt%2Fgff%2FY65OKrw71rWLSUf5SrKy6OhEXBXLh2Xs78N4BNG%2BAyzoYIqr7HISw30ILV7O0qcSR5K3SQaqC3an9yMPrR28AGOqUB5SStrmcTB0a8GMdF%2BKv1qJNeeFBnTpcysBjhHh9DMVQQmYxDzw69pMcl%2FJwmvZgDK9HBPfy8TBkynU6GN8wdTkjdzgOGsJDBs6jVkjydAy6hDpccXDbL%2BcIRxaX%2BpcBf2uEX1zPPq8THGU73vYykdgWvo1weFjmDIMisfMNeusdpfjcIMiy6qi7U5g0%2FZzePxfql0leXwiEHAxzoZNzC43kvt%2BtZ&X-Amz-Signature=6fe67aa205d90d1aa6c2e3633205802e5df04f220c88e10c5c90135ff83f7aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSIS3QS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDDr%2BfS4QLwxe6IzKzW5idroPc6wUMDKMw0qLw4pqp41AIgfORyJHSyL69dHo0E0dIEpopJy%2BV6oiF18aM97pZsomUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJmtKEQaVtxcsAI3SrcA90SueUKhr5Q%2B10HPuDpfZ9wKxFQ5vZOqiennjd4%2BKkhqqmuUERUKHmZsG0InFNw2B%2FavffIrFtKDsL3BgSIA75zdVlStOzpXd%2FRsu9bggNGgkKN9Epxx5WhtQOzCFpjsFIKPFlf6nVqOnTtxCvdp9Pn%2BptCSU%2FAJ%2Bb5gZaoAkBsmY4sj1wdallsUgD%2F%2FK6HducJfLUtmHX7kpvgdegLxaBaVv2ngHIzz8gOWrRA0gwysbu62ZkPG6YwKHQfBI1nNbXkiNkxiX4nxJnxdjC8TssISvASmZFGGB31eSZOHwWo6WaqHFOh21%2BjFXceOFb8BkWoYng4rPPsnBO4gJQISPG0vQJF2oqmpKhW47pq%2FxKv82kliEhODDJoS70s2pdPc0aC4ChG0kvOdvkX32px%2BsiXupCbsSFlmJE7LzX8uOmYlkEOibb3QvrnuOEtf72J1ierlfkFglCqe2PL8RYo63pVMA%2B5bWBEpJxpV12JlAnjUU4xhuRjV5rYdJtL%2Fn25y11F%2FPtWTciJg36dhvETvi%2FyDL0DdtCafoGXRiElt%2Fgff%2FY65OKrw71rWLSUf5SrKy6OhEXBXLh2Xs78N4BNG%2BAyzoYIqr7HISw30ILV7O0qcSR5K3SQaqC3an9yMPrR28AGOqUB5SStrmcTB0a8GMdF%2BKv1qJNeeFBnTpcysBjhHh9DMVQQmYxDzw69pMcl%2FJwmvZgDK9HBPfy8TBkynU6GN8wdTkjdzgOGsJDBs6jVkjydAy6hDpccXDbL%2BcIRxaX%2BpcBf2uEX1zPPq8THGU73vYykdgWvo1weFjmDIMisfMNeusdpfjcIMiy6qi7U5g0%2FZzePxfql0leXwiEHAxzoZNzC43kvt%2BtZ&X-Amz-Signature=42fc11acec07141ead2bae8f6dbeb8e23cd0e4c7c89299003fc9528ca86c4e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSIS3QS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDDr%2BfS4QLwxe6IzKzW5idroPc6wUMDKMw0qLw4pqp41AIgfORyJHSyL69dHo0E0dIEpopJy%2BV6oiF18aM97pZsomUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJmtKEQaVtxcsAI3SrcA90SueUKhr5Q%2B10HPuDpfZ9wKxFQ5vZOqiennjd4%2BKkhqqmuUERUKHmZsG0InFNw2B%2FavffIrFtKDsL3BgSIA75zdVlStOzpXd%2FRsu9bggNGgkKN9Epxx5WhtQOzCFpjsFIKPFlf6nVqOnTtxCvdp9Pn%2BptCSU%2FAJ%2Bb5gZaoAkBsmY4sj1wdallsUgD%2F%2FK6HducJfLUtmHX7kpvgdegLxaBaVv2ngHIzz8gOWrRA0gwysbu62ZkPG6YwKHQfBI1nNbXkiNkxiX4nxJnxdjC8TssISvASmZFGGB31eSZOHwWo6WaqHFOh21%2BjFXceOFb8BkWoYng4rPPsnBO4gJQISPG0vQJF2oqmpKhW47pq%2FxKv82kliEhODDJoS70s2pdPc0aC4ChG0kvOdvkX32px%2BsiXupCbsSFlmJE7LzX8uOmYlkEOibb3QvrnuOEtf72J1ierlfkFglCqe2PL8RYo63pVMA%2B5bWBEpJxpV12JlAnjUU4xhuRjV5rYdJtL%2Fn25y11F%2FPtWTciJg36dhvETvi%2FyDL0DdtCafoGXRiElt%2Fgff%2FY65OKrw71rWLSUf5SrKy6OhEXBXLh2Xs78N4BNG%2BAyzoYIqr7HISw30ILV7O0qcSR5K3SQaqC3an9yMPrR28AGOqUB5SStrmcTB0a8GMdF%2BKv1qJNeeFBnTpcysBjhHh9DMVQQmYxDzw69pMcl%2FJwmvZgDK9HBPfy8TBkynU6GN8wdTkjdzgOGsJDBs6jVkjydAy6hDpccXDbL%2BcIRxaX%2BpcBf2uEX1zPPq8THGU73vYykdgWvo1weFjmDIMisfMNeusdpfjcIMiy6qi7U5g0%2FZzePxfql0leXwiEHAxzoZNzC43kvt%2BtZ&X-Amz-Signature=a61123968b5815991b1b6bec61ec9428cb8269b2d122956aa903ea64e09de1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSIS3QS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDDr%2BfS4QLwxe6IzKzW5idroPc6wUMDKMw0qLw4pqp41AIgfORyJHSyL69dHo0E0dIEpopJy%2BV6oiF18aM97pZsomUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJmtKEQaVtxcsAI3SrcA90SueUKhr5Q%2B10HPuDpfZ9wKxFQ5vZOqiennjd4%2BKkhqqmuUERUKHmZsG0InFNw2B%2FavffIrFtKDsL3BgSIA75zdVlStOzpXd%2FRsu9bggNGgkKN9Epxx5WhtQOzCFpjsFIKPFlf6nVqOnTtxCvdp9Pn%2BptCSU%2FAJ%2Bb5gZaoAkBsmY4sj1wdallsUgD%2F%2FK6HducJfLUtmHX7kpvgdegLxaBaVv2ngHIzz8gOWrRA0gwysbu62ZkPG6YwKHQfBI1nNbXkiNkxiX4nxJnxdjC8TssISvASmZFGGB31eSZOHwWo6WaqHFOh21%2BjFXceOFb8BkWoYng4rPPsnBO4gJQISPG0vQJF2oqmpKhW47pq%2FxKv82kliEhODDJoS70s2pdPc0aC4ChG0kvOdvkX32px%2BsiXupCbsSFlmJE7LzX8uOmYlkEOibb3QvrnuOEtf72J1ierlfkFglCqe2PL8RYo63pVMA%2B5bWBEpJxpV12JlAnjUU4xhuRjV5rYdJtL%2Fn25y11F%2FPtWTciJg36dhvETvi%2FyDL0DdtCafoGXRiElt%2Fgff%2FY65OKrw71rWLSUf5SrKy6OhEXBXLh2Xs78N4BNG%2BAyzoYIqr7HISw30ILV7O0qcSR5K3SQaqC3an9yMPrR28AGOqUB5SStrmcTB0a8GMdF%2BKv1qJNeeFBnTpcysBjhHh9DMVQQmYxDzw69pMcl%2FJwmvZgDK9HBPfy8TBkynU6GN8wdTkjdzgOGsJDBs6jVkjydAy6hDpccXDbL%2BcIRxaX%2BpcBf2uEX1zPPq8THGU73vYykdgWvo1weFjmDIMisfMNeusdpfjcIMiy6qi7U5g0%2FZzePxfql0leXwiEHAxzoZNzC43kvt%2BtZ&X-Amz-Signature=76aeffb3c80724fe32ecea22a600e6f8dbc61539882383c983492d840cec4e05&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
