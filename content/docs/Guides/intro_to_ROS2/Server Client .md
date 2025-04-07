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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNRHTTX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfjIHtCVcSwxDTPhqdEioKxEp1xtCzTgvwykfZ3WevvAIhANIhZxQk%2BqcKPFFEkgleLExmPoeuIvmItlSpLCKHTuJtKv8DCF4QABoMNjM3NDIzMTgzODA1Igwj8ltYhGEBDSNSDrAq3ANWwsqV06DsetreBOnMfWj2mrHa1%2FncJQG%2BvJdzeAvFaCQrQZvfd8nab79zKPbtw%2BDaY2QDKAx9mIbaL6AhEh5CJHCRusGltVjdnU%2FCApHhWncnQ03u74A2EbOmiiivcCxbQZYk6m267iCEQK1FMtqB3eZ349AmW9osX9TSQ70pq7elbMFfRM%2BLkR9HJJyWyyTija7rREYTj1B8cF%2BzF7YBtVzMmSt0iSNL2DO0JHoPSepV7ba5Z9TyIvgDyv3HYPv0LgeMKUvbTAZOUaGzEso3BLaengWRbhbX5GBu75uwgdygZoBH2Jzqbt1d89B7BobUZalWkMTM1t8e2TBUM9kbEh0rBX6pBUNqo7dAZkubYzID3cLiJjT52gMvWf9XBtSpOdD%2B%2BmwHshQ4zZ0ARzEZMO3%2BRYSKYFvr7Oma5AVIr0pK8BaeHW38mj8yIErUBRqDxHUsV3AnuUGeprk03YUDyxOqEjnkH5Vii7mo2ebSO%2BJ%2FGe%2F4PanItHATni0sRcVKSYIoOCZGlsPuYbDonkbJPg797VnrQ57JlwxXpOH7n8m66naRWnl3JtzA9Qkx3FtuB%2BikJJyRYB0oGRF6YmXqFHmCAjnbekFm1w3QawKjLFHgnHCoRqzIlGg0wDC4nc%2B%2FBjqkAa27Kh7whjVPrM7r%2BwlFD99TDyFq22nem87Q5tH%2FlFI3XYeCM%2BMFQYVXpzliSZnkxsBr%2Btb4iE%2BvPrqFFfYgv888iTwR4ugDX2BpaZfszeDObgtZrlJqlIjjrQfbyyXsEJoyyhPhZZU1LhpWQP9s90eQHdPjJ70nkkY%2BiMR%2BkbuBxpm2yk8BcIpU5vkfdR7xSrSrmk%2F9E1WIAPq0TSPJxF6z%2F%2BH4&X-Amz-Signature=166c99f53dcc3879d01226844e01f6ad910863ecbb9357f7cfd704a0e6f48e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNRHTTX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfjIHtCVcSwxDTPhqdEioKxEp1xtCzTgvwykfZ3WevvAIhANIhZxQk%2BqcKPFFEkgleLExmPoeuIvmItlSpLCKHTuJtKv8DCF4QABoMNjM3NDIzMTgzODA1Igwj8ltYhGEBDSNSDrAq3ANWwsqV06DsetreBOnMfWj2mrHa1%2FncJQG%2BvJdzeAvFaCQrQZvfd8nab79zKPbtw%2BDaY2QDKAx9mIbaL6AhEh5CJHCRusGltVjdnU%2FCApHhWncnQ03u74A2EbOmiiivcCxbQZYk6m267iCEQK1FMtqB3eZ349AmW9osX9TSQ70pq7elbMFfRM%2BLkR9HJJyWyyTija7rREYTj1B8cF%2BzF7YBtVzMmSt0iSNL2DO0JHoPSepV7ba5Z9TyIvgDyv3HYPv0LgeMKUvbTAZOUaGzEso3BLaengWRbhbX5GBu75uwgdygZoBH2Jzqbt1d89B7BobUZalWkMTM1t8e2TBUM9kbEh0rBX6pBUNqo7dAZkubYzID3cLiJjT52gMvWf9XBtSpOdD%2B%2BmwHshQ4zZ0ARzEZMO3%2BRYSKYFvr7Oma5AVIr0pK8BaeHW38mj8yIErUBRqDxHUsV3AnuUGeprk03YUDyxOqEjnkH5Vii7mo2ebSO%2BJ%2FGe%2F4PanItHATni0sRcVKSYIoOCZGlsPuYbDonkbJPg797VnrQ57JlwxXpOH7n8m66naRWnl3JtzA9Qkx3FtuB%2BikJJyRYB0oGRF6YmXqFHmCAjnbekFm1w3QawKjLFHgnHCoRqzIlGg0wDC4nc%2B%2FBjqkAa27Kh7whjVPrM7r%2BwlFD99TDyFq22nem87Q5tH%2FlFI3XYeCM%2BMFQYVXpzliSZnkxsBr%2Btb4iE%2BvPrqFFfYgv888iTwR4ugDX2BpaZfszeDObgtZrlJqlIjjrQfbyyXsEJoyyhPhZZU1LhpWQP9s90eQHdPjJ70nkkY%2BiMR%2BkbuBxpm2yk8BcIpU5vkfdR7xSrSrmk%2F9E1WIAPq0TSPJxF6z%2F%2BH4&X-Amz-Signature=915499637b783542bb677157a9a6c8b51e84fd8188f770755146051f6b5fdb67&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNRHTTX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfjIHtCVcSwxDTPhqdEioKxEp1xtCzTgvwykfZ3WevvAIhANIhZxQk%2BqcKPFFEkgleLExmPoeuIvmItlSpLCKHTuJtKv8DCF4QABoMNjM3NDIzMTgzODA1Igwj8ltYhGEBDSNSDrAq3ANWwsqV06DsetreBOnMfWj2mrHa1%2FncJQG%2BvJdzeAvFaCQrQZvfd8nab79zKPbtw%2BDaY2QDKAx9mIbaL6AhEh5CJHCRusGltVjdnU%2FCApHhWncnQ03u74A2EbOmiiivcCxbQZYk6m267iCEQK1FMtqB3eZ349AmW9osX9TSQ70pq7elbMFfRM%2BLkR9HJJyWyyTija7rREYTj1B8cF%2BzF7YBtVzMmSt0iSNL2DO0JHoPSepV7ba5Z9TyIvgDyv3HYPv0LgeMKUvbTAZOUaGzEso3BLaengWRbhbX5GBu75uwgdygZoBH2Jzqbt1d89B7BobUZalWkMTM1t8e2TBUM9kbEh0rBX6pBUNqo7dAZkubYzID3cLiJjT52gMvWf9XBtSpOdD%2B%2BmwHshQ4zZ0ARzEZMO3%2BRYSKYFvr7Oma5AVIr0pK8BaeHW38mj8yIErUBRqDxHUsV3AnuUGeprk03YUDyxOqEjnkH5Vii7mo2ebSO%2BJ%2FGe%2F4PanItHATni0sRcVKSYIoOCZGlsPuYbDonkbJPg797VnrQ57JlwxXpOH7n8m66naRWnl3JtzA9Qkx3FtuB%2BikJJyRYB0oGRF6YmXqFHmCAjnbekFm1w3QawKjLFHgnHCoRqzIlGg0wDC4nc%2B%2FBjqkAa27Kh7whjVPrM7r%2BwlFD99TDyFq22nem87Q5tH%2FlFI3XYeCM%2BMFQYVXpzliSZnkxsBr%2Btb4iE%2BvPrqFFfYgv888iTwR4ugDX2BpaZfszeDObgtZrlJqlIjjrQfbyyXsEJoyyhPhZZU1LhpWQP9s90eQHdPjJ70nkkY%2BiMR%2BkbuBxpm2yk8BcIpU5vkfdR7xSrSrmk%2F9E1WIAPq0TSPJxF6z%2F%2BH4&X-Amz-Signature=7aa6a36a1a382b49357cd7596f1693b2d4789c0269625f0602658fbb668a67ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNRHTTX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfjIHtCVcSwxDTPhqdEioKxEp1xtCzTgvwykfZ3WevvAIhANIhZxQk%2BqcKPFFEkgleLExmPoeuIvmItlSpLCKHTuJtKv8DCF4QABoMNjM3NDIzMTgzODA1Igwj8ltYhGEBDSNSDrAq3ANWwsqV06DsetreBOnMfWj2mrHa1%2FncJQG%2BvJdzeAvFaCQrQZvfd8nab79zKPbtw%2BDaY2QDKAx9mIbaL6AhEh5CJHCRusGltVjdnU%2FCApHhWncnQ03u74A2EbOmiiivcCxbQZYk6m267iCEQK1FMtqB3eZ349AmW9osX9TSQ70pq7elbMFfRM%2BLkR9HJJyWyyTija7rREYTj1B8cF%2BzF7YBtVzMmSt0iSNL2DO0JHoPSepV7ba5Z9TyIvgDyv3HYPv0LgeMKUvbTAZOUaGzEso3BLaengWRbhbX5GBu75uwgdygZoBH2Jzqbt1d89B7BobUZalWkMTM1t8e2TBUM9kbEh0rBX6pBUNqo7dAZkubYzID3cLiJjT52gMvWf9XBtSpOdD%2B%2BmwHshQ4zZ0ARzEZMO3%2BRYSKYFvr7Oma5AVIr0pK8BaeHW38mj8yIErUBRqDxHUsV3AnuUGeprk03YUDyxOqEjnkH5Vii7mo2ebSO%2BJ%2FGe%2F4PanItHATni0sRcVKSYIoOCZGlsPuYbDonkbJPg797VnrQ57JlwxXpOH7n8m66naRWnl3JtzA9Qkx3FtuB%2BikJJyRYB0oGRF6YmXqFHmCAjnbekFm1w3QawKjLFHgnHCoRqzIlGg0wDC4nc%2B%2FBjqkAa27Kh7whjVPrM7r%2BwlFD99TDyFq22nem87Q5tH%2FlFI3XYeCM%2BMFQYVXpzliSZnkxsBr%2Btb4iE%2BvPrqFFfYgv888iTwR4ugDX2BpaZfszeDObgtZrlJqlIjjrQfbyyXsEJoyyhPhZZU1LhpWQP9s90eQHdPjJ70nkkY%2BiMR%2BkbuBxpm2yk8BcIpU5vkfdR7xSrSrmk%2F9E1WIAPq0TSPJxF6z%2F%2BH4&X-Amz-Signature=a8a786b23ece343b0b0c976488545bd9a32a96297306cb3e5e757ac507fc1574&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNRHTTX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfjIHtCVcSwxDTPhqdEioKxEp1xtCzTgvwykfZ3WevvAIhANIhZxQk%2BqcKPFFEkgleLExmPoeuIvmItlSpLCKHTuJtKv8DCF4QABoMNjM3NDIzMTgzODA1Igwj8ltYhGEBDSNSDrAq3ANWwsqV06DsetreBOnMfWj2mrHa1%2FncJQG%2BvJdzeAvFaCQrQZvfd8nab79zKPbtw%2BDaY2QDKAx9mIbaL6AhEh5CJHCRusGltVjdnU%2FCApHhWncnQ03u74A2EbOmiiivcCxbQZYk6m267iCEQK1FMtqB3eZ349AmW9osX9TSQ70pq7elbMFfRM%2BLkR9HJJyWyyTija7rREYTj1B8cF%2BzF7YBtVzMmSt0iSNL2DO0JHoPSepV7ba5Z9TyIvgDyv3HYPv0LgeMKUvbTAZOUaGzEso3BLaengWRbhbX5GBu75uwgdygZoBH2Jzqbt1d89B7BobUZalWkMTM1t8e2TBUM9kbEh0rBX6pBUNqo7dAZkubYzID3cLiJjT52gMvWf9XBtSpOdD%2B%2BmwHshQ4zZ0ARzEZMO3%2BRYSKYFvr7Oma5AVIr0pK8BaeHW38mj8yIErUBRqDxHUsV3AnuUGeprk03YUDyxOqEjnkH5Vii7mo2ebSO%2BJ%2FGe%2F4PanItHATni0sRcVKSYIoOCZGlsPuYbDonkbJPg797VnrQ57JlwxXpOH7n8m66naRWnl3JtzA9Qkx3FtuB%2BikJJyRYB0oGRF6YmXqFHmCAjnbekFm1w3QawKjLFHgnHCoRqzIlGg0wDC4nc%2B%2FBjqkAa27Kh7whjVPrM7r%2BwlFD99TDyFq22nem87Q5tH%2FlFI3XYeCM%2BMFQYVXpzliSZnkxsBr%2Btb4iE%2BvPrqFFfYgv888iTwR4ugDX2BpaZfszeDObgtZrlJqlIjjrQfbyyXsEJoyyhPhZZU1LhpWQP9s90eQHdPjJ70nkkY%2BiMR%2BkbuBxpm2yk8BcIpU5vkfdR7xSrSrmk%2F9E1WIAPq0TSPJxF6z%2F%2BH4&X-Amz-Signature=29152da95caa10018e858e65055ab498dd269ab42ed10eac7c688e6814c806e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
