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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HV7R5S%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDa2%2Fk%2BfBZDc3YHLsJj0%2BPmismJDKLiamWXhwYJo519RAiEAjf0s%2BlBaD5t5yIufX8%2BZyESQ5GRT2RN0YbZL5lZijDIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FqOkSRmLzKH2cX5yrcA3AvYejPfGyY2wlp1uNSS%2FDfESwDePi4NftfGtRqnLLX4gzXFh%2FtqTw9BInEU19YBVZtanrKnT%2FeDWUJmB42zhbmbzdoDHAQhFR96t%2FJRANAwkuJ0Ed013DloSEm4zVFapwVDjReA80wGP5RaIQ8J8F35olm4yEaA0SS%2BloKK48pl%2FKG0k%2BU9uao8EuRYvQImZIUAX%2BJxwSNoUAkGeJ0Nr8RoRzPzlnZBdYW73GZZ8wtf6vDWfRe2vGja2qsDpIMyqReETBIA%2BOqUvRQK0we9uuFKUe2O8fKqI%2F%2BftT2XiLhTZmRzRwXvpWxa9tEK069gup%2FRThHOlNS91VsRUNkdWo9bqn42jjd0oyqMehtNjd3jIl9xxIvE50xgKZ9c84MVzRhEu1Tfb%2Fdu%2BPvyDviCsOUpIrcUrsfEFYYewOZYmpTw%2Fq9SC9mjABt9jLi%2F7BYA8sfyj%2F%2BdiM8LtavE28Af4oiLEHPSFLsHeHwGQ%2Fk9WV%2F0GrSfQvK%2BktsNFpfbMEyGt2JWM7iJzektuugAKH%2BWnmKqFZwSxNRVXuLJU%2BpCHOaUMPrpCr8B40N8m2FuKtLgXWKwDD7oXsgOXJr0pvaXRrzLRxY07VQKhTLQtNd5G4j68MZZI5cQT%2FAqs9XMIy7hMEGOqUB2tWB2HCJ2vcYlKm89MyvEFkzACZJKZ3TcyvfqEwjofPH8cUEAjZcOxbqFX1cm5Ccn0yg9hlDZ7w51uz3ZrSK5F1xjiceh2e76xN1NOvdkBbFmSNb0wudZfBTUk6hbHr%2FAKydIKtlLNgyRBUyODoJ4xaMNwzeq%2BJPLCV5L2JSMx6wsfInsNgIGSyY3WFtoN%2BKRJBR7uG%2BSSTBSINSB1WRPMRnv448&X-Amz-Signature=8c99aafe87a25f80f6172fb5ce44b7f6285ea422be8252e96843bee62b609814&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HV7R5S%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDa2%2Fk%2BfBZDc3YHLsJj0%2BPmismJDKLiamWXhwYJo519RAiEAjf0s%2BlBaD5t5yIufX8%2BZyESQ5GRT2RN0YbZL5lZijDIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FqOkSRmLzKH2cX5yrcA3AvYejPfGyY2wlp1uNSS%2FDfESwDePi4NftfGtRqnLLX4gzXFh%2FtqTw9BInEU19YBVZtanrKnT%2FeDWUJmB42zhbmbzdoDHAQhFR96t%2FJRANAwkuJ0Ed013DloSEm4zVFapwVDjReA80wGP5RaIQ8J8F35olm4yEaA0SS%2BloKK48pl%2FKG0k%2BU9uao8EuRYvQImZIUAX%2BJxwSNoUAkGeJ0Nr8RoRzPzlnZBdYW73GZZ8wtf6vDWfRe2vGja2qsDpIMyqReETBIA%2BOqUvRQK0we9uuFKUe2O8fKqI%2F%2BftT2XiLhTZmRzRwXvpWxa9tEK069gup%2FRThHOlNS91VsRUNkdWo9bqn42jjd0oyqMehtNjd3jIl9xxIvE50xgKZ9c84MVzRhEu1Tfb%2Fdu%2BPvyDviCsOUpIrcUrsfEFYYewOZYmpTw%2Fq9SC9mjABt9jLi%2F7BYA8sfyj%2F%2BdiM8LtavE28Af4oiLEHPSFLsHeHwGQ%2Fk9WV%2F0GrSfQvK%2BktsNFpfbMEyGt2JWM7iJzektuugAKH%2BWnmKqFZwSxNRVXuLJU%2BpCHOaUMPrpCr8B40N8m2FuKtLgXWKwDD7oXsgOXJr0pvaXRrzLRxY07VQKhTLQtNd5G4j68MZZI5cQT%2FAqs9XMIy7hMEGOqUB2tWB2HCJ2vcYlKm89MyvEFkzACZJKZ3TcyvfqEwjofPH8cUEAjZcOxbqFX1cm5Ccn0yg9hlDZ7w51uz3ZrSK5F1xjiceh2e76xN1NOvdkBbFmSNb0wudZfBTUk6hbHr%2FAKydIKtlLNgyRBUyODoJ4xaMNwzeq%2BJPLCV5L2JSMx6wsfInsNgIGSyY3WFtoN%2BKRJBR7uG%2BSSTBSINSB1WRPMRnv448&X-Amz-Signature=b85e92d4a8fe62cf248dc9a4cfbed16d661364e29b190d6d780c554c2b32faa6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HV7R5S%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDa2%2Fk%2BfBZDc3YHLsJj0%2BPmismJDKLiamWXhwYJo519RAiEAjf0s%2BlBaD5t5yIufX8%2BZyESQ5GRT2RN0YbZL5lZijDIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FqOkSRmLzKH2cX5yrcA3AvYejPfGyY2wlp1uNSS%2FDfESwDePi4NftfGtRqnLLX4gzXFh%2FtqTw9BInEU19YBVZtanrKnT%2FeDWUJmB42zhbmbzdoDHAQhFR96t%2FJRANAwkuJ0Ed013DloSEm4zVFapwVDjReA80wGP5RaIQ8J8F35olm4yEaA0SS%2BloKK48pl%2FKG0k%2BU9uao8EuRYvQImZIUAX%2BJxwSNoUAkGeJ0Nr8RoRzPzlnZBdYW73GZZ8wtf6vDWfRe2vGja2qsDpIMyqReETBIA%2BOqUvRQK0we9uuFKUe2O8fKqI%2F%2BftT2XiLhTZmRzRwXvpWxa9tEK069gup%2FRThHOlNS91VsRUNkdWo9bqn42jjd0oyqMehtNjd3jIl9xxIvE50xgKZ9c84MVzRhEu1Tfb%2Fdu%2BPvyDviCsOUpIrcUrsfEFYYewOZYmpTw%2Fq9SC9mjABt9jLi%2F7BYA8sfyj%2F%2BdiM8LtavE28Af4oiLEHPSFLsHeHwGQ%2Fk9WV%2F0GrSfQvK%2BktsNFpfbMEyGt2JWM7iJzektuugAKH%2BWnmKqFZwSxNRVXuLJU%2BpCHOaUMPrpCr8B40N8m2FuKtLgXWKwDD7oXsgOXJr0pvaXRrzLRxY07VQKhTLQtNd5G4j68MZZI5cQT%2FAqs9XMIy7hMEGOqUB2tWB2HCJ2vcYlKm89MyvEFkzACZJKZ3TcyvfqEwjofPH8cUEAjZcOxbqFX1cm5Ccn0yg9hlDZ7w51uz3ZrSK5F1xjiceh2e76xN1NOvdkBbFmSNb0wudZfBTUk6hbHr%2FAKydIKtlLNgyRBUyODoJ4xaMNwzeq%2BJPLCV5L2JSMx6wsfInsNgIGSyY3WFtoN%2BKRJBR7uG%2BSSTBSINSB1WRPMRnv448&X-Amz-Signature=8bbe50b6aabc1e60b8a3f4b25fe5f0a9f498b2131f695c7d945f94fd34aa7021&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HV7R5S%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDa2%2Fk%2BfBZDc3YHLsJj0%2BPmismJDKLiamWXhwYJo519RAiEAjf0s%2BlBaD5t5yIufX8%2BZyESQ5GRT2RN0YbZL5lZijDIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FqOkSRmLzKH2cX5yrcA3AvYejPfGyY2wlp1uNSS%2FDfESwDePi4NftfGtRqnLLX4gzXFh%2FtqTw9BInEU19YBVZtanrKnT%2FeDWUJmB42zhbmbzdoDHAQhFR96t%2FJRANAwkuJ0Ed013DloSEm4zVFapwVDjReA80wGP5RaIQ8J8F35olm4yEaA0SS%2BloKK48pl%2FKG0k%2BU9uao8EuRYvQImZIUAX%2BJxwSNoUAkGeJ0Nr8RoRzPzlnZBdYW73GZZ8wtf6vDWfRe2vGja2qsDpIMyqReETBIA%2BOqUvRQK0we9uuFKUe2O8fKqI%2F%2BftT2XiLhTZmRzRwXvpWxa9tEK069gup%2FRThHOlNS91VsRUNkdWo9bqn42jjd0oyqMehtNjd3jIl9xxIvE50xgKZ9c84MVzRhEu1Tfb%2Fdu%2BPvyDviCsOUpIrcUrsfEFYYewOZYmpTw%2Fq9SC9mjABt9jLi%2F7BYA8sfyj%2F%2BdiM8LtavE28Af4oiLEHPSFLsHeHwGQ%2Fk9WV%2F0GrSfQvK%2BktsNFpfbMEyGt2JWM7iJzektuugAKH%2BWnmKqFZwSxNRVXuLJU%2BpCHOaUMPrpCr8B40N8m2FuKtLgXWKwDD7oXsgOXJr0pvaXRrzLRxY07VQKhTLQtNd5G4j68MZZI5cQT%2FAqs9XMIy7hMEGOqUB2tWB2HCJ2vcYlKm89MyvEFkzACZJKZ3TcyvfqEwjofPH8cUEAjZcOxbqFX1cm5Ccn0yg9hlDZ7w51uz3ZrSK5F1xjiceh2e76xN1NOvdkBbFmSNb0wudZfBTUk6hbHr%2FAKydIKtlLNgyRBUyODoJ4xaMNwzeq%2BJPLCV5L2JSMx6wsfInsNgIGSyY3WFtoN%2BKRJBR7uG%2BSSTBSINSB1WRPMRnv448&X-Amz-Signature=484d2aebd495deb1e007ae60d0c7e8274298ad9a70e61c527cb9d86547da9803&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HV7R5S%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDa2%2Fk%2BfBZDc3YHLsJj0%2BPmismJDKLiamWXhwYJo519RAiEAjf0s%2BlBaD5t5yIufX8%2BZyESQ5GRT2RN0YbZL5lZijDIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FqOkSRmLzKH2cX5yrcA3AvYejPfGyY2wlp1uNSS%2FDfESwDePi4NftfGtRqnLLX4gzXFh%2FtqTw9BInEU19YBVZtanrKnT%2FeDWUJmB42zhbmbzdoDHAQhFR96t%2FJRANAwkuJ0Ed013DloSEm4zVFapwVDjReA80wGP5RaIQ8J8F35olm4yEaA0SS%2BloKK48pl%2FKG0k%2BU9uao8EuRYvQImZIUAX%2BJxwSNoUAkGeJ0Nr8RoRzPzlnZBdYW73GZZ8wtf6vDWfRe2vGja2qsDpIMyqReETBIA%2BOqUvRQK0we9uuFKUe2O8fKqI%2F%2BftT2XiLhTZmRzRwXvpWxa9tEK069gup%2FRThHOlNS91VsRUNkdWo9bqn42jjd0oyqMehtNjd3jIl9xxIvE50xgKZ9c84MVzRhEu1Tfb%2Fdu%2BPvyDviCsOUpIrcUrsfEFYYewOZYmpTw%2Fq9SC9mjABt9jLi%2F7BYA8sfyj%2F%2BdiM8LtavE28Af4oiLEHPSFLsHeHwGQ%2Fk9WV%2F0GrSfQvK%2BktsNFpfbMEyGt2JWM7iJzektuugAKH%2BWnmKqFZwSxNRVXuLJU%2BpCHOaUMPrpCr8B40N8m2FuKtLgXWKwDD7oXsgOXJr0pvaXRrzLRxY07VQKhTLQtNd5G4j68MZZI5cQT%2FAqs9XMIy7hMEGOqUB2tWB2HCJ2vcYlKm89MyvEFkzACZJKZ3TcyvfqEwjofPH8cUEAjZcOxbqFX1cm5Ccn0yg9hlDZ7w51uz3ZrSK5F1xjiceh2e76xN1NOvdkBbFmSNb0wudZfBTUk6hbHr%2FAKydIKtlLNgyRBUyODoJ4xaMNwzeq%2BJPLCV5L2JSMx6wsfInsNgIGSyY3WFtoN%2BKRJBR7uG%2BSSTBSINSB1WRPMRnv448&X-Amz-Signature=8f5ec7c453e0105562615392f414c02085f97db6a4a5c625b64ed60a8313eb8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
