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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOQFS7RJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC9qmBW5R6b3jKyTEygD%2BdHynIayyi1g31xAAsxrt0hjAIgJdEuBzQEI7odI2%2Fuq2knUUjSycYnAE0HvOHbYTBuDFAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBGmErXyhyv1BbRtOSrcA6lFKtO%2FD%2FUUFKk%2Fy%2Fkjl6N0i4Mag4h5Dw4o%2BDqkXpJ1nHB7HZiT8nJaYot0lu4pd0F8D1qslrVybsEt66M4dgFNBgkqEYIqXXU4rIW1forEcR00%2Fq8IJHJgjqjB1t2bueMrcnsP15Xw1y7eATyCdEGnMnjF1l9inIUVaGvex38HgfOKBPdTUL43ThWnGsG%2FnM16a0%2FrNro9qRmTssOURyHMzKEynMGVuIPFxyVLK1EHByoWisulycPFp6EVSnW9r9b%2FCyMHbdPtsLoYouoBEPv83JRj%2BLEorNMechMq6Yr2U0cLtAsb7GMGQo%2FZqKbHmhiZjZOSNIKIdHaa6jWj5%2FhO98nZB6DzT2UHp9INSYv2sYqZKnti%2F39QNEJSEu3PnPLeG%2B%2BqISOBxAKRxYzhrzIsq2%2BIphkFyeY2mZUb0bIPyc9DnjOq0FlfetspgL7XeiAswK%2Bk21fb2Np3w3wOwl15DLxzSW1lJz6nbUFZJJRw7DcBJ%2BNJbYc08%2FwXkeV3dpQaBWGH5dg%2Fpte5WVcq20skHzlQXBOpukyTGse68KgHPrQh%2FukI5UN3ADxDxwfpZ862JH2VXpjPYl25UZBSPNv9BX4rzwP%2FeMHXfzPyNP1S6HJVJH7gZmz0%2BEJxMMfB9MIGOqUBkRVRnQGjLcqX7sTPMa8Z9VHyTznidhJiyg34i4PJm6Akv67WcosdGOe3bGMjNTWp9m8zVzV%2BR255iNv8qNM7fk%2B0oqAFGW%2F0cq1sog36oJGWapRaLdrzT3R%2F9a4mRw6Xse9fSiL7RQdFF7akpeVxyWjEwXYaaijjeBh3v%2F1KwpgnOXZe4zyyxbqMs6C7DP0Zhn6Qpog%2Fwp8IqhgwBDowaLRWsQ8u&X-Amz-Signature=8d73c38f5a590675d4489ba84964a733777da2ee41cb91dc0699979e7b6c9472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOQFS7RJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC9qmBW5R6b3jKyTEygD%2BdHynIayyi1g31xAAsxrt0hjAIgJdEuBzQEI7odI2%2Fuq2knUUjSycYnAE0HvOHbYTBuDFAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBGmErXyhyv1BbRtOSrcA6lFKtO%2FD%2FUUFKk%2Fy%2Fkjl6N0i4Mag4h5Dw4o%2BDqkXpJ1nHB7HZiT8nJaYot0lu4pd0F8D1qslrVybsEt66M4dgFNBgkqEYIqXXU4rIW1forEcR00%2Fq8IJHJgjqjB1t2bueMrcnsP15Xw1y7eATyCdEGnMnjF1l9inIUVaGvex38HgfOKBPdTUL43ThWnGsG%2FnM16a0%2FrNro9qRmTssOURyHMzKEynMGVuIPFxyVLK1EHByoWisulycPFp6EVSnW9r9b%2FCyMHbdPtsLoYouoBEPv83JRj%2BLEorNMechMq6Yr2U0cLtAsb7GMGQo%2FZqKbHmhiZjZOSNIKIdHaa6jWj5%2FhO98nZB6DzT2UHp9INSYv2sYqZKnti%2F39QNEJSEu3PnPLeG%2B%2BqISOBxAKRxYzhrzIsq2%2BIphkFyeY2mZUb0bIPyc9DnjOq0FlfetspgL7XeiAswK%2Bk21fb2Np3w3wOwl15DLxzSW1lJz6nbUFZJJRw7DcBJ%2BNJbYc08%2FwXkeV3dpQaBWGH5dg%2Fpte5WVcq20skHzlQXBOpukyTGse68KgHPrQh%2FukI5UN3ADxDxwfpZ862JH2VXpjPYl25UZBSPNv9BX4rzwP%2FeMHXfzPyNP1S6HJVJH7gZmz0%2BEJxMMfB9MIGOqUBkRVRnQGjLcqX7sTPMa8Z9VHyTznidhJiyg34i4PJm6Akv67WcosdGOe3bGMjNTWp9m8zVzV%2BR255iNv8qNM7fk%2B0oqAFGW%2F0cq1sog36oJGWapRaLdrzT3R%2F9a4mRw6Xse9fSiL7RQdFF7akpeVxyWjEwXYaaijjeBh3v%2F1KwpgnOXZe4zyyxbqMs6C7DP0Zhn6Qpog%2Fwp8IqhgwBDowaLRWsQ8u&X-Amz-Signature=b83413abab61f53268b90decdd96fa5fe4405d46a7235235498e59fc68a294da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOQFS7RJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC9qmBW5R6b3jKyTEygD%2BdHynIayyi1g31xAAsxrt0hjAIgJdEuBzQEI7odI2%2Fuq2knUUjSycYnAE0HvOHbYTBuDFAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBGmErXyhyv1BbRtOSrcA6lFKtO%2FD%2FUUFKk%2Fy%2Fkjl6N0i4Mag4h5Dw4o%2BDqkXpJ1nHB7HZiT8nJaYot0lu4pd0F8D1qslrVybsEt66M4dgFNBgkqEYIqXXU4rIW1forEcR00%2Fq8IJHJgjqjB1t2bueMrcnsP15Xw1y7eATyCdEGnMnjF1l9inIUVaGvex38HgfOKBPdTUL43ThWnGsG%2FnM16a0%2FrNro9qRmTssOURyHMzKEynMGVuIPFxyVLK1EHByoWisulycPFp6EVSnW9r9b%2FCyMHbdPtsLoYouoBEPv83JRj%2BLEorNMechMq6Yr2U0cLtAsb7GMGQo%2FZqKbHmhiZjZOSNIKIdHaa6jWj5%2FhO98nZB6DzT2UHp9INSYv2sYqZKnti%2F39QNEJSEu3PnPLeG%2B%2BqISOBxAKRxYzhrzIsq2%2BIphkFyeY2mZUb0bIPyc9DnjOq0FlfetspgL7XeiAswK%2Bk21fb2Np3w3wOwl15DLxzSW1lJz6nbUFZJJRw7DcBJ%2BNJbYc08%2FwXkeV3dpQaBWGH5dg%2Fpte5WVcq20skHzlQXBOpukyTGse68KgHPrQh%2FukI5UN3ADxDxwfpZ862JH2VXpjPYl25UZBSPNv9BX4rzwP%2FeMHXfzPyNP1S6HJVJH7gZmz0%2BEJxMMfB9MIGOqUBkRVRnQGjLcqX7sTPMa8Z9VHyTznidhJiyg34i4PJm6Akv67WcosdGOe3bGMjNTWp9m8zVzV%2BR255iNv8qNM7fk%2B0oqAFGW%2F0cq1sog36oJGWapRaLdrzT3R%2F9a4mRw6Xse9fSiL7RQdFF7akpeVxyWjEwXYaaijjeBh3v%2F1KwpgnOXZe4zyyxbqMs6C7DP0Zhn6Qpog%2Fwp8IqhgwBDowaLRWsQ8u&X-Amz-Signature=bf80498675007fdf9cf25208e73878b761e2b63353ff40463640e0dd0f227196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOQFS7RJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC9qmBW5R6b3jKyTEygD%2BdHynIayyi1g31xAAsxrt0hjAIgJdEuBzQEI7odI2%2Fuq2knUUjSycYnAE0HvOHbYTBuDFAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBGmErXyhyv1BbRtOSrcA6lFKtO%2FD%2FUUFKk%2Fy%2Fkjl6N0i4Mag4h5Dw4o%2BDqkXpJ1nHB7HZiT8nJaYot0lu4pd0F8D1qslrVybsEt66M4dgFNBgkqEYIqXXU4rIW1forEcR00%2Fq8IJHJgjqjB1t2bueMrcnsP15Xw1y7eATyCdEGnMnjF1l9inIUVaGvex38HgfOKBPdTUL43ThWnGsG%2FnM16a0%2FrNro9qRmTssOURyHMzKEynMGVuIPFxyVLK1EHByoWisulycPFp6EVSnW9r9b%2FCyMHbdPtsLoYouoBEPv83JRj%2BLEorNMechMq6Yr2U0cLtAsb7GMGQo%2FZqKbHmhiZjZOSNIKIdHaa6jWj5%2FhO98nZB6DzT2UHp9INSYv2sYqZKnti%2F39QNEJSEu3PnPLeG%2B%2BqISOBxAKRxYzhrzIsq2%2BIphkFyeY2mZUb0bIPyc9DnjOq0FlfetspgL7XeiAswK%2Bk21fb2Np3w3wOwl15DLxzSW1lJz6nbUFZJJRw7DcBJ%2BNJbYc08%2FwXkeV3dpQaBWGH5dg%2Fpte5WVcq20skHzlQXBOpukyTGse68KgHPrQh%2FukI5UN3ADxDxwfpZ862JH2VXpjPYl25UZBSPNv9BX4rzwP%2FeMHXfzPyNP1S6HJVJH7gZmz0%2BEJxMMfB9MIGOqUBkRVRnQGjLcqX7sTPMa8Z9VHyTznidhJiyg34i4PJm6Akv67WcosdGOe3bGMjNTWp9m8zVzV%2BR255iNv8qNM7fk%2B0oqAFGW%2F0cq1sog36oJGWapRaLdrzT3R%2F9a4mRw6Xse9fSiL7RQdFF7akpeVxyWjEwXYaaijjeBh3v%2F1KwpgnOXZe4zyyxbqMs6C7DP0Zhn6Qpog%2Fwp8IqhgwBDowaLRWsQ8u&X-Amz-Signature=b1f881e340224df36773eeb3bb8ff3a46e25dd979f0e78d30772b6578bf653bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOQFS7RJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC9qmBW5R6b3jKyTEygD%2BdHynIayyi1g31xAAsxrt0hjAIgJdEuBzQEI7odI2%2Fuq2knUUjSycYnAE0HvOHbYTBuDFAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBGmErXyhyv1BbRtOSrcA6lFKtO%2FD%2FUUFKk%2Fy%2Fkjl6N0i4Mag4h5Dw4o%2BDqkXpJ1nHB7HZiT8nJaYot0lu4pd0F8D1qslrVybsEt66M4dgFNBgkqEYIqXXU4rIW1forEcR00%2Fq8IJHJgjqjB1t2bueMrcnsP15Xw1y7eATyCdEGnMnjF1l9inIUVaGvex38HgfOKBPdTUL43ThWnGsG%2FnM16a0%2FrNro9qRmTssOURyHMzKEynMGVuIPFxyVLK1EHByoWisulycPFp6EVSnW9r9b%2FCyMHbdPtsLoYouoBEPv83JRj%2BLEorNMechMq6Yr2U0cLtAsb7GMGQo%2FZqKbHmhiZjZOSNIKIdHaa6jWj5%2FhO98nZB6DzT2UHp9INSYv2sYqZKnti%2F39QNEJSEu3PnPLeG%2B%2BqISOBxAKRxYzhrzIsq2%2BIphkFyeY2mZUb0bIPyc9DnjOq0FlfetspgL7XeiAswK%2Bk21fb2Np3w3wOwl15DLxzSW1lJz6nbUFZJJRw7DcBJ%2BNJbYc08%2FwXkeV3dpQaBWGH5dg%2Fpte5WVcq20skHzlQXBOpukyTGse68KgHPrQh%2FukI5UN3ADxDxwfpZ862JH2VXpjPYl25UZBSPNv9BX4rzwP%2FeMHXfzPyNP1S6HJVJH7gZmz0%2BEJxMMfB9MIGOqUBkRVRnQGjLcqX7sTPMa8Z9VHyTznidhJiyg34i4PJm6Akv67WcosdGOe3bGMjNTWp9m8zVzV%2BR255iNv8qNM7fk%2B0oqAFGW%2F0cq1sog36oJGWapRaLdrzT3R%2F9a4mRw6Xse9fSiL7RQdFF7akpeVxyWjEwXYaaijjeBh3v%2F1KwpgnOXZe4zyyxbqMs6C7DP0Zhn6Qpog%2Fwp8IqhgwBDowaLRWsQ8u&X-Amz-Signature=0da3d2b500c9fab064fe7c62ff556299f9f8f4910725cb12cbf298dc0442a756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
