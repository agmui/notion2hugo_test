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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQFST7F%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDX%2BNZsWgQqdaOLTHimNzAhyobA9fUgmmBqnLz3C%2F4q1QIhAK6m36uauHyN%2ByRGvcio7FWWvAD6TwES5ovcIrR6FTTXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzVrwIqAk7ThG%2FyjsEq3ANhyMSUm6cS3339IYgvM8T7GkO2vmVweBczjeHHbR73%2FIdrSU%2BiBiXMUQ5gSv6CnEO8mjkfq2T%2FzgdyTZZ7NuDO7Y%2FFx%2Bkes9USTOrA8asCTCq19NN2H1Uqe8c8GqD4QRkv%2BvX%2BcNAI0R%2BLjf66JSG1zXZfW8Vqu%2Feb5UlzFU2ccl4S1Bh7JA%2FEAnaGiexCSZHsSjgy8THk8IpzZSJwn9xXU2V40fqBp9RmWyw0wCN7cQCLhzN18fYHSgmMnUUXFep2QfjLWPGbUU5uAfnmMR5uRvIMnpE50jJBT5HgbHd3pWktYN78XLoDB6FAFLSSK7gb1cv9DfULJ1HXuwoaCp6CQ3AHSqyYrQFwQJj0EfWLSzRPgrF0oJmqeGeFy1TmfhADDI6f91gkDMsGBMakx4xWVvLml5oN1zc4nTZ2LH9U14gT%2Bw%2BLHocDyUZh27TiGK43FhLO1rBOuWvJCs2vGD27RI2q9DEVhScvuIjOMUerJRk9l1U5ZrehI3mci3k2eb7RmVFeHUNJbR0F5%2BWFTmKX%2FAaowjTCvQxkPwtVkqlGAsCkvWST8u7Ixhz%2FiyLYDpSF4Yu66JTnDH%2B7CH3szoZR%2Fd%2B3G0m1NhcDpJTgbpeBaYr7JxnFfDIWSPQDaTCWy6nDBjqkAQpicB08s%2FwHCaTF2a%2FCdK7il6rdVv0Fb63EurpVVOhGnuYWSxul1ub26EMqTlBkJTjcv8ocdBY887fU74BWUUOxAEkAmZWU%2BOwchWygzDgFLHDvlFd5VNSuHhVgOMIH7cOLhn1zYqCghNQODqISnkVhwURk3Jsx0A%2FFCScebYrS%2BxDuFGEmM2aUhD392H8T9pPTGW3L%2BAtB7Df4Mjl4LBvyXftz&X-Amz-Signature=797ce990c4b2327e039f1115e85f27aafc3e9bbd3618781c817c05ba49136c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQFST7F%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDX%2BNZsWgQqdaOLTHimNzAhyobA9fUgmmBqnLz3C%2F4q1QIhAK6m36uauHyN%2ByRGvcio7FWWvAD6TwES5ovcIrR6FTTXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzVrwIqAk7ThG%2FyjsEq3ANhyMSUm6cS3339IYgvM8T7GkO2vmVweBczjeHHbR73%2FIdrSU%2BiBiXMUQ5gSv6CnEO8mjkfq2T%2FzgdyTZZ7NuDO7Y%2FFx%2Bkes9USTOrA8asCTCq19NN2H1Uqe8c8GqD4QRkv%2BvX%2BcNAI0R%2BLjf66JSG1zXZfW8Vqu%2Feb5UlzFU2ccl4S1Bh7JA%2FEAnaGiexCSZHsSjgy8THk8IpzZSJwn9xXU2V40fqBp9RmWyw0wCN7cQCLhzN18fYHSgmMnUUXFep2QfjLWPGbUU5uAfnmMR5uRvIMnpE50jJBT5HgbHd3pWktYN78XLoDB6FAFLSSK7gb1cv9DfULJ1HXuwoaCp6CQ3AHSqyYrQFwQJj0EfWLSzRPgrF0oJmqeGeFy1TmfhADDI6f91gkDMsGBMakx4xWVvLml5oN1zc4nTZ2LH9U14gT%2Bw%2BLHocDyUZh27TiGK43FhLO1rBOuWvJCs2vGD27RI2q9DEVhScvuIjOMUerJRk9l1U5ZrehI3mci3k2eb7RmVFeHUNJbR0F5%2BWFTmKX%2FAaowjTCvQxkPwtVkqlGAsCkvWST8u7Ixhz%2FiyLYDpSF4Yu66JTnDH%2B7CH3szoZR%2Fd%2B3G0m1NhcDpJTgbpeBaYr7JxnFfDIWSPQDaTCWy6nDBjqkAQpicB08s%2FwHCaTF2a%2FCdK7il6rdVv0Fb63EurpVVOhGnuYWSxul1ub26EMqTlBkJTjcv8ocdBY887fU74BWUUOxAEkAmZWU%2BOwchWygzDgFLHDvlFd5VNSuHhVgOMIH7cOLhn1zYqCghNQODqISnkVhwURk3Jsx0A%2FFCScebYrS%2BxDuFGEmM2aUhD392H8T9pPTGW3L%2BAtB7Df4Mjl4LBvyXftz&X-Amz-Signature=2a3b5871f8dddd7852c060bfd416758efa34b8cae4a2144c0c24ee1d4af77703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQFST7F%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDX%2BNZsWgQqdaOLTHimNzAhyobA9fUgmmBqnLz3C%2F4q1QIhAK6m36uauHyN%2ByRGvcio7FWWvAD6TwES5ovcIrR6FTTXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzVrwIqAk7ThG%2FyjsEq3ANhyMSUm6cS3339IYgvM8T7GkO2vmVweBczjeHHbR73%2FIdrSU%2BiBiXMUQ5gSv6CnEO8mjkfq2T%2FzgdyTZZ7NuDO7Y%2FFx%2Bkes9USTOrA8asCTCq19NN2H1Uqe8c8GqD4QRkv%2BvX%2BcNAI0R%2BLjf66JSG1zXZfW8Vqu%2Feb5UlzFU2ccl4S1Bh7JA%2FEAnaGiexCSZHsSjgy8THk8IpzZSJwn9xXU2V40fqBp9RmWyw0wCN7cQCLhzN18fYHSgmMnUUXFep2QfjLWPGbUU5uAfnmMR5uRvIMnpE50jJBT5HgbHd3pWktYN78XLoDB6FAFLSSK7gb1cv9DfULJ1HXuwoaCp6CQ3AHSqyYrQFwQJj0EfWLSzRPgrF0oJmqeGeFy1TmfhADDI6f91gkDMsGBMakx4xWVvLml5oN1zc4nTZ2LH9U14gT%2Bw%2BLHocDyUZh27TiGK43FhLO1rBOuWvJCs2vGD27RI2q9DEVhScvuIjOMUerJRk9l1U5ZrehI3mci3k2eb7RmVFeHUNJbR0F5%2BWFTmKX%2FAaowjTCvQxkPwtVkqlGAsCkvWST8u7Ixhz%2FiyLYDpSF4Yu66JTnDH%2B7CH3szoZR%2Fd%2B3G0m1NhcDpJTgbpeBaYr7JxnFfDIWSPQDaTCWy6nDBjqkAQpicB08s%2FwHCaTF2a%2FCdK7il6rdVv0Fb63EurpVVOhGnuYWSxul1ub26EMqTlBkJTjcv8ocdBY887fU74BWUUOxAEkAmZWU%2BOwchWygzDgFLHDvlFd5VNSuHhVgOMIH7cOLhn1zYqCghNQODqISnkVhwURk3Jsx0A%2FFCScebYrS%2BxDuFGEmM2aUhD392H8T9pPTGW3L%2BAtB7Df4Mjl4LBvyXftz&X-Amz-Signature=18ddfc5b229c27ea794c3c2773efeb7352be5ee379d86d70aac6ae1f08074a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQFST7F%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDX%2BNZsWgQqdaOLTHimNzAhyobA9fUgmmBqnLz3C%2F4q1QIhAK6m36uauHyN%2ByRGvcio7FWWvAD6TwES5ovcIrR6FTTXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzVrwIqAk7ThG%2FyjsEq3ANhyMSUm6cS3339IYgvM8T7GkO2vmVweBczjeHHbR73%2FIdrSU%2BiBiXMUQ5gSv6CnEO8mjkfq2T%2FzgdyTZZ7NuDO7Y%2FFx%2Bkes9USTOrA8asCTCq19NN2H1Uqe8c8GqD4QRkv%2BvX%2BcNAI0R%2BLjf66JSG1zXZfW8Vqu%2Feb5UlzFU2ccl4S1Bh7JA%2FEAnaGiexCSZHsSjgy8THk8IpzZSJwn9xXU2V40fqBp9RmWyw0wCN7cQCLhzN18fYHSgmMnUUXFep2QfjLWPGbUU5uAfnmMR5uRvIMnpE50jJBT5HgbHd3pWktYN78XLoDB6FAFLSSK7gb1cv9DfULJ1HXuwoaCp6CQ3AHSqyYrQFwQJj0EfWLSzRPgrF0oJmqeGeFy1TmfhADDI6f91gkDMsGBMakx4xWVvLml5oN1zc4nTZ2LH9U14gT%2Bw%2BLHocDyUZh27TiGK43FhLO1rBOuWvJCs2vGD27RI2q9DEVhScvuIjOMUerJRk9l1U5ZrehI3mci3k2eb7RmVFeHUNJbR0F5%2BWFTmKX%2FAaowjTCvQxkPwtVkqlGAsCkvWST8u7Ixhz%2FiyLYDpSF4Yu66JTnDH%2B7CH3szoZR%2Fd%2B3G0m1NhcDpJTgbpeBaYr7JxnFfDIWSPQDaTCWy6nDBjqkAQpicB08s%2FwHCaTF2a%2FCdK7il6rdVv0Fb63EurpVVOhGnuYWSxul1ub26EMqTlBkJTjcv8ocdBY887fU74BWUUOxAEkAmZWU%2BOwchWygzDgFLHDvlFd5VNSuHhVgOMIH7cOLhn1zYqCghNQODqISnkVhwURk3Jsx0A%2FFCScebYrS%2BxDuFGEmM2aUhD392H8T9pPTGW3L%2BAtB7Df4Mjl4LBvyXftz&X-Amz-Signature=e01506658cc98cbde0abbc88d88b0f00b505b44d68891833cedf7cd816ee9434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQFST7F%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDX%2BNZsWgQqdaOLTHimNzAhyobA9fUgmmBqnLz3C%2F4q1QIhAK6m36uauHyN%2ByRGvcio7FWWvAD6TwES5ovcIrR6FTTXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzVrwIqAk7ThG%2FyjsEq3ANhyMSUm6cS3339IYgvM8T7GkO2vmVweBczjeHHbR73%2FIdrSU%2BiBiXMUQ5gSv6CnEO8mjkfq2T%2FzgdyTZZ7NuDO7Y%2FFx%2Bkes9USTOrA8asCTCq19NN2H1Uqe8c8GqD4QRkv%2BvX%2BcNAI0R%2BLjf66JSG1zXZfW8Vqu%2Feb5UlzFU2ccl4S1Bh7JA%2FEAnaGiexCSZHsSjgy8THk8IpzZSJwn9xXU2V40fqBp9RmWyw0wCN7cQCLhzN18fYHSgmMnUUXFep2QfjLWPGbUU5uAfnmMR5uRvIMnpE50jJBT5HgbHd3pWktYN78XLoDB6FAFLSSK7gb1cv9DfULJ1HXuwoaCp6CQ3AHSqyYrQFwQJj0EfWLSzRPgrF0oJmqeGeFy1TmfhADDI6f91gkDMsGBMakx4xWVvLml5oN1zc4nTZ2LH9U14gT%2Bw%2BLHocDyUZh27TiGK43FhLO1rBOuWvJCs2vGD27RI2q9DEVhScvuIjOMUerJRk9l1U5ZrehI3mci3k2eb7RmVFeHUNJbR0F5%2BWFTmKX%2FAaowjTCvQxkPwtVkqlGAsCkvWST8u7Ixhz%2FiyLYDpSF4Yu66JTnDH%2B7CH3szoZR%2Fd%2B3G0m1NhcDpJTgbpeBaYr7JxnFfDIWSPQDaTCWy6nDBjqkAQpicB08s%2FwHCaTF2a%2FCdK7il6rdVv0Fb63EurpVVOhGnuYWSxul1ub26EMqTlBkJTjcv8ocdBY887fU74BWUUOxAEkAmZWU%2BOwchWygzDgFLHDvlFd5VNSuHhVgOMIH7cOLhn1zYqCghNQODqISnkVhwURk3Jsx0A%2FFCScebYrS%2BxDuFGEmM2aUhD392H8T9pPTGW3L%2BAtB7Df4Mjl4LBvyXftz&X-Amz-Signature=7c59ece517cdc533217adf98e5342af9164de014672999d477b5d15181d9717a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
