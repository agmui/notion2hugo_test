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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZY44BU7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3dMhU7jd8xwLLzLgIcSxt8Du1%2FNP0gK56DbYK1dNZmAIhAMO91Lo%2BnZ9M%2BpSrOJPRAWC09w4tGATN5uO8TrroWQzLKv8DCEEQABoMNjM3NDIzMTgzODA1Igyz1xe4j3srqgA9uK0q3APbUr4s9PWdid%2Bfb33wtPIss1149%2BJuFt4IAmUlvp%2BqcJPbsNiVXBAcWEVLSqpzq7F%2FPV%2BWGKnFs9EoRzl43Q1t1CLsNjVSR3aZV%2F3LtHjarjXRclMbMeOiiGmTf5X%2FIdIGu2K5%2Fl5XDBqBXOl3RbKZ%2FWhoOO9wWqIl0iSz12F5W%2B%2ByDJn3XqpOOweQRMD7FInSzve92ULxRq%2BFv8JkagiW301hTGSGv1pBLsxYsIvyUc9xJ1zPp3l9lOQUpQromE%2BylZ28VDNjJCAekExNMLPHPmzOqaKu5xszgZjFr5WA5%2FydwS4E%2FF1%2ByRNNpCmw9hbc%2Bdkyx3OyXKWZfdCKa55PARPQJjoqqJ0WgwPQ95YpKJyKIE0ScZf5uBASaxh0Mz4H1JMHOSeteAYpzqsZALa2ahdzD42cLOofllulpgsk1Md6oLR1CxrE8W6LE5CFj2VVmd2U7vpLa6kDZHI8hpPtw0JBfNiKVtkSFJLE2LPvMmj0LxlFw%2BxQZVe%2B7ssLaiY7kRo9tv1M2TNOZPY%2FYVn2NiZ3YzPFSvM8sPbXlRtScjkv9TrxuKdozT7qUBBMRqFoT3MNy%2F4p3aHXCNPYng%2Bj2Tmr5vte7mdL0DAb%2Bn3MQP1A2ht1yIwFDiu%2FezDkr%2FbEBjqkAVAFpzZiNwX8JHFibGYeDPowT9e2yiMH%2BiFAgznDTRhvBKRrFInCqYpRynbAPVEnSd1rZxXYqahuFczPLZiNtzyF7LarIbIJ9%2B4nqm1PngMi6iGre%2B%2BljSFX7OqFQUotMK7czSTi0dY4Vx053kG1SQkvklkXSoWDvPG2TtaYeLk%2FRojAHLZ2zuMqPItZFsacsOYSu3VilFeQVfHb%2FInVw%2FwYHFjp&X-Amz-Signature=778afa0143fe2c9df3d41b6502b6091e693fa89ca567791cf7cc078713fcb5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZY44BU7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3dMhU7jd8xwLLzLgIcSxt8Du1%2FNP0gK56DbYK1dNZmAIhAMO91Lo%2BnZ9M%2BpSrOJPRAWC09w4tGATN5uO8TrroWQzLKv8DCEEQABoMNjM3NDIzMTgzODA1Igyz1xe4j3srqgA9uK0q3APbUr4s9PWdid%2Bfb33wtPIss1149%2BJuFt4IAmUlvp%2BqcJPbsNiVXBAcWEVLSqpzq7F%2FPV%2BWGKnFs9EoRzl43Q1t1CLsNjVSR3aZV%2F3LtHjarjXRclMbMeOiiGmTf5X%2FIdIGu2K5%2Fl5XDBqBXOl3RbKZ%2FWhoOO9wWqIl0iSz12F5W%2B%2ByDJn3XqpOOweQRMD7FInSzve92ULxRq%2BFv8JkagiW301hTGSGv1pBLsxYsIvyUc9xJ1zPp3l9lOQUpQromE%2BylZ28VDNjJCAekExNMLPHPmzOqaKu5xszgZjFr5WA5%2FydwS4E%2FF1%2ByRNNpCmw9hbc%2Bdkyx3OyXKWZfdCKa55PARPQJjoqqJ0WgwPQ95YpKJyKIE0ScZf5uBASaxh0Mz4H1JMHOSeteAYpzqsZALa2ahdzD42cLOofllulpgsk1Md6oLR1CxrE8W6LE5CFj2VVmd2U7vpLa6kDZHI8hpPtw0JBfNiKVtkSFJLE2LPvMmj0LxlFw%2BxQZVe%2B7ssLaiY7kRo9tv1M2TNOZPY%2FYVn2NiZ3YzPFSvM8sPbXlRtScjkv9TrxuKdozT7qUBBMRqFoT3MNy%2F4p3aHXCNPYng%2Bj2Tmr5vte7mdL0DAb%2Bn3MQP1A2ht1yIwFDiu%2FezDkr%2FbEBjqkAVAFpzZiNwX8JHFibGYeDPowT9e2yiMH%2BiFAgznDTRhvBKRrFInCqYpRynbAPVEnSd1rZxXYqahuFczPLZiNtzyF7LarIbIJ9%2B4nqm1PngMi6iGre%2B%2BljSFX7OqFQUotMK7czSTi0dY4Vx053kG1SQkvklkXSoWDvPG2TtaYeLk%2FRojAHLZ2zuMqPItZFsacsOYSu3VilFeQVfHb%2FInVw%2FwYHFjp&X-Amz-Signature=98a71367fb492433d48945ffd19d94d05e9c2deffcaf96a442a352c935db4e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZY44BU7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3dMhU7jd8xwLLzLgIcSxt8Du1%2FNP0gK56DbYK1dNZmAIhAMO91Lo%2BnZ9M%2BpSrOJPRAWC09w4tGATN5uO8TrroWQzLKv8DCEEQABoMNjM3NDIzMTgzODA1Igyz1xe4j3srqgA9uK0q3APbUr4s9PWdid%2Bfb33wtPIss1149%2BJuFt4IAmUlvp%2BqcJPbsNiVXBAcWEVLSqpzq7F%2FPV%2BWGKnFs9EoRzl43Q1t1CLsNjVSR3aZV%2F3LtHjarjXRclMbMeOiiGmTf5X%2FIdIGu2K5%2Fl5XDBqBXOl3RbKZ%2FWhoOO9wWqIl0iSz12F5W%2B%2ByDJn3XqpOOweQRMD7FInSzve92ULxRq%2BFv8JkagiW301hTGSGv1pBLsxYsIvyUc9xJ1zPp3l9lOQUpQromE%2BylZ28VDNjJCAekExNMLPHPmzOqaKu5xszgZjFr5WA5%2FydwS4E%2FF1%2ByRNNpCmw9hbc%2Bdkyx3OyXKWZfdCKa55PARPQJjoqqJ0WgwPQ95YpKJyKIE0ScZf5uBASaxh0Mz4H1JMHOSeteAYpzqsZALa2ahdzD42cLOofllulpgsk1Md6oLR1CxrE8W6LE5CFj2VVmd2U7vpLa6kDZHI8hpPtw0JBfNiKVtkSFJLE2LPvMmj0LxlFw%2BxQZVe%2B7ssLaiY7kRo9tv1M2TNOZPY%2FYVn2NiZ3YzPFSvM8sPbXlRtScjkv9TrxuKdozT7qUBBMRqFoT3MNy%2F4p3aHXCNPYng%2Bj2Tmr5vte7mdL0DAb%2Bn3MQP1A2ht1yIwFDiu%2FezDkr%2FbEBjqkAVAFpzZiNwX8JHFibGYeDPowT9e2yiMH%2BiFAgznDTRhvBKRrFInCqYpRynbAPVEnSd1rZxXYqahuFczPLZiNtzyF7LarIbIJ9%2B4nqm1PngMi6iGre%2B%2BljSFX7OqFQUotMK7czSTi0dY4Vx053kG1SQkvklkXSoWDvPG2TtaYeLk%2FRojAHLZ2zuMqPItZFsacsOYSu3VilFeQVfHb%2FInVw%2FwYHFjp&X-Amz-Signature=292e45235055b97d8bba2e95e626c4270a414e489ea3ed9715632978d4b4cce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZY44BU7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3dMhU7jd8xwLLzLgIcSxt8Du1%2FNP0gK56DbYK1dNZmAIhAMO91Lo%2BnZ9M%2BpSrOJPRAWC09w4tGATN5uO8TrroWQzLKv8DCEEQABoMNjM3NDIzMTgzODA1Igyz1xe4j3srqgA9uK0q3APbUr4s9PWdid%2Bfb33wtPIss1149%2BJuFt4IAmUlvp%2BqcJPbsNiVXBAcWEVLSqpzq7F%2FPV%2BWGKnFs9EoRzl43Q1t1CLsNjVSR3aZV%2F3LtHjarjXRclMbMeOiiGmTf5X%2FIdIGu2K5%2Fl5XDBqBXOl3RbKZ%2FWhoOO9wWqIl0iSz12F5W%2B%2ByDJn3XqpOOweQRMD7FInSzve92ULxRq%2BFv8JkagiW301hTGSGv1pBLsxYsIvyUc9xJ1zPp3l9lOQUpQromE%2BylZ28VDNjJCAekExNMLPHPmzOqaKu5xszgZjFr5WA5%2FydwS4E%2FF1%2ByRNNpCmw9hbc%2Bdkyx3OyXKWZfdCKa55PARPQJjoqqJ0WgwPQ95YpKJyKIE0ScZf5uBASaxh0Mz4H1JMHOSeteAYpzqsZALa2ahdzD42cLOofllulpgsk1Md6oLR1CxrE8W6LE5CFj2VVmd2U7vpLa6kDZHI8hpPtw0JBfNiKVtkSFJLE2LPvMmj0LxlFw%2BxQZVe%2B7ssLaiY7kRo9tv1M2TNOZPY%2FYVn2NiZ3YzPFSvM8sPbXlRtScjkv9TrxuKdozT7qUBBMRqFoT3MNy%2F4p3aHXCNPYng%2Bj2Tmr5vte7mdL0DAb%2Bn3MQP1A2ht1yIwFDiu%2FezDkr%2FbEBjqkAVAFpzZiNwX8JHFibGYeDPowT9e2yiMH%2BiFAgznDTRhvBKRrFInCqYpRynbAPVEnSd1rZxXYqahuFczPLZiNtzyF7LarIbIJ9%2B4nqm1PngMi6iGre%2B%2BljSFX7OqFQUotMK7czSTi0dY4Vx053kG1SQkvklkXSoWDvPG2TtaYeLk%2FRojAHLZ2zuMqPItZFsacsOYSu3VilFeQVfHb%2FInVw%2FwYHFjp&X-Amz-Signature=a88e85d820e23665c14b23f8681eaf76461e70da2776f7e7abc586742669d1ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZY44BU7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3dMhU7jd8xwLLzLgIcSxt8Du1%2FNP0gK56DbYK1dNZmAIhAMO91Lo%2BnZ9M%2BpSrOJPRAWC09w4tGATN5uO8TrroWQzLKv8DCEEQABoMNjM3NDIzMTgzODA1Igyz1xe4j3srqgA9uK0q3APbUr4s9PWdid%2Bfb33wtPIss1149%2BJuFt4IAmUlvp%2BqcJPbsNiVXBAcWEVLSqpzq7F%2FPV%2BWGKnFs9EoRzl43Q1t1CLsNjVSR3aZV%2F3LtHjarjXRclMbMeOiiGmTf5X%2FIdIGu2K5%2Fl5XDBqBXOl3RbKZ%2FWhoOO9wWqIl0iSz12F5W%2B%2ByDJn3XqpOOweQRMD7FInSzve92ULxRq%2BFv8JkagiW301hTGSGv1pBLsxYsIvyUc9xJ1zPp3l9lOQUpQromE%2BylZ28VDNjJCAekExNMLPHPmzOqaKu5xszgZjFr5WA5%2FydwS4E%2FF1%2ByRNNpCmw9hbc%2Bdkyx3OyXKWZfdCKa55PARPQJjoqqJ0WgwPQ95YpKJyKIE0ScZf5uBASaxh0Mz4H1JMHOSeteAYpzqsZALa2ahdzD42cLOofllulpgsk1Md6oLR1CxrE8W6LE5CFj2VVmd2U7vpLa6kDZHI8hpPtw0JBfNiKVtkSFJLE2LPvMmj0LxlFw%2BxQZVe%2B7ssLaiY7kRo9tv1M2TNOZPY%2FYVn2NiZ3YzPFSvM8sPbXlRtScjkv9TrxuKdozT7qUBBMRqFoT3MNy%2F4p3aHXCNPYng%2Bj2Tmr5vte7mdL0DAb%2Bn3MQP1A2ht1yIwFDiu%2FezDkr%2FbEBjqkAVAFpzZiNwX8JHFibGYeDPowT9e2yiMH%2BiFAgznDTRhvBKRrFInCqYpRynbAPVEnSd1rZxXYqahuFczPLZiNtzyF7LarIbIJ9%2B4nqm1PngMi6iGre%2B%2BljSFX7OqFQUotMK7czSTi0dY4Vx053kG1SQkvklkXSoWDvPG2TtaYeLk%2FRojAHLZ2zuMqPItZFsacsOYSu3VilFeQVfHb%2FInVw%2FwYHFjp&X-Amz-Signature=5c72729ca434cf7d149805eb558a4ebcefad5904d3db152c7505530b2f4816cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
