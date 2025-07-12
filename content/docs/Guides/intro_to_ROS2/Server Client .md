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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRZUGBW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVpKuxMl7t9pPmQ0QWkxkAeYleLfyh2oMTUlYnK7vkJAiAzjNfaO6vb9de8HVXe%2BboENBCoxiiufr3YfPfMA9Rn8SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7b1r97ziMoJ5%2FDzPKtwDxmDhJfm5pI3pOiSqourhJPPZ8LK7JwuOBaE8BHrGNZjO%2FgoSeHf6h2QMFr0waFXjfT84GC%2Fw%2FBdmK0Frgb0ACo%2BFBgPsNllM79bjRRkeCeApGKAZfCQgPYB%2B2z3H83Wkk%2B6%2F5znKI0nduoMtS88PWIDFFkh1Vde2ZUHCjLhhtsAqapt6lFslBxJ7jllpCJlIoyJkqZVZPO7efB9yoKQ8mIvNAZ1zIgh4YBH5EoTcztNIC57ZBjUP6aruL4wcsWsS%2FlCe%2BgbegzAz3MbqcV1XMTcgZuw61lsBt%2BlD%2BXUZ7PwbUWNedVSZ%2BJhoUIK8cd9abt1KgDY9vFaI09PBftVi%2Bywg91CJovb8SWVpcAjFWaQJs3nHjODrfDTJpFUcYWggH8bP9Dn%2F9q12fgsRr1K0CjldIuyaEHix8HNn7QFG0CNxm7DXmP49pJmgzJVpbI0koBypKKOGA2d5Kbqp9iiYKLBXm6tu1SxHfM7AefHjN8rfk8LkoRHVWh%2FCz46%2B21u6awI3kxR2sXc331IUKorQ8%2F9hmGtCNuK3D6Zw1XKfE6s8U%2BcoBq4IMwYBCbyS5Pv5yRrQfhNULcsXROuY%2FpbpSNSIkNYBzXQ6QdOfDsjje6N%2Bw0NT1hprtQ%2BnGU0wvq3KwwY6pgEswPs3Z%2BqOJrb%2BxdzA7SxcqxizKSj6kq%2F5i6dcHMzASYg1RNhyCVQe4SoCHrdiKNXbgeF7%2BU2JoVdQKU4qTrjvyyIdThMmGCry6NkvabEbi8UN4IT1SUNudK46AAnAqldY5qu43oAojLVUErIbn5Z8BWjcz%2FT2X8Hj0BTUyjMRLy2LWLSzavFBZkvL1KHfC6t8Y4dJOI4bB6pbVtrNdeuKJGzL3Uxd&X-Amz-Signature=edf17b442718ba00df524c04e0e2c20149261cab3054022bf83b9d7b43de5091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRZUGBW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVpKuxMl7t9pPmQ0QWkxkAeYleLfyh2oMTUlYnK7vkJAiAzjNfaO6vb9de8HVXe%2BboENBCoxiiufr3YfPfMA9Rn8SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7b1r97ziMoJ5%2FDzPKtwDxmDhJfm5pI3pOiSqourhJPPZ8LK7JwuOBaE8BHrGNZjO%2FgoSeHf6h2QMFr0waFXjfT84GC%2Fw%2FBdmK0Frgb0ACo%2BFBgPsNllM79bjRRkeCeApGKAZfCQgPYB%2B2z3H83Wkk%2B6%2F5znKI0nduoMtS88PWIDFFkh1Vde2ZUHCjLhhtsAqapt6lFslBxJ7jllpCJlIoyJkqZVZPO7efB9yoKQ8mIvNAZ1zIgh4YBH5EoTcztNIC57ZBjUP6aruL4wcsWsS%2FlCe%2BgbegzAz3MbqcV1XMTcgZuw61lsBt%2BlD%2BXUZ7PwbUWNedVSZ%2BJhoUIK8cd9abt1KgDY9vFaI09PBftVi%2Bywg91CJovb8SWVpcAjFWaQJs3nHjODrfDTJpFUcYWggH8bP9Dn%2F9q12fgsRr1K0CjldIuyaEHix8HNn7QFG0CNxm7DXmP49pJmgzJVpbI0koBypKKOGA2d5Kbqp9iiYKLBXm6tu1SxHfM7AefHjN8rfk8LkoRHVWh%2FCz46%2B21u6awI3kxR2sXc331IUKorQ8%2F9hmGtCNuK3D6Zw1XKfE6s8U%2BcoBq4IMwYBCbyS5Pv5yRrQfhNULcsXROuY%2FpbpSNSIkNYBzXQ6QdOfDsjje6N%2Bw0NT1hprtQ%2BnGU0wvq3KwwY6pgEswPs3Z%2BqOJrb%2BxdzA7SxcqxizKSj6kq%2F5i6dcHMzASYg1RNhyCVQe4SoCHrdiKNXbgeF7%2BU2JoVdQKU4qTrjvyyIdThMmGCry6NkvabEbi8UN4IT1SUNudK46AAnAqldY5qu43oAojLVUErIbn5Z8BWjcz%2FT2X8Hj0BTUyjMRLy2LWLSzavFBZkvL1KHfC6t8Y4dJOI4bB6pbVtrNdeuKJGzL3Uxd&X-Amz-Signature=8f64bbf323c2afde6f928a5481bdd5a2e68463730faf0429b2fc97a5b8d85d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRZUGBW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVpKuxMl7t9pPmQ0QWkxkAeYleLfyh2oMTUlYnK7vkJAiAzjNfaO6vb9de8HVXe%2BboENBCoxiiufr3YfPfMA9Rn8SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7b1r97ziMoJ5%2FDzPKtwDxmDhJfm5pI3pOiSqourhJPPZ8LK7JwuOBaE8BHrGNZjO%2FgoSeHf6h2QMFr0waFXjfT84GC%2Fw%2FBdmK0Frgb0ACo%2BFBgPsNllM79bjRRkeCeApGKAZfCQgPYB%2B2z3H83Wkk%2B6%2F5znKI0nduoMtS88PWIDFFkh1Vde2ZUHCjLhhtsAqapt6lFslBxJ7jllpCJlIoyJkqZVZPO7efB9yoKQ8mIvNAZ1zIgh4YBH5EoTcztNIC57ZBjUP6aruL4wcsWsS%2FlCe%2BgbegzAz3MbqcV1XMTcgZuw61lsBt%2BlD%2BXUZ7PwbUWNedVSZ%2BJhoUIK8cd9abt1KgDY9vFaI09PBftVi%2Bywg91CJovb8SWVpcAjFWaQJs3nHjODrfDTJpFUcYWggH8bP9Dn%2F9q12fgsRr1K0CjldIuyaEHix8HNn7QFG0CNxm7DXmP49pJmgzJVpbI0koBypKKOGA2d5Kbqp9iiYKLBXm6tu1SxHfM7AefHjN8rfk8LkoRHVWh%2FCz46%2B21u6awI3kxR2sXc331IUKorQ8%2F9hmGtCNuK3D6Zw1XKfE6s8U%2BcoBq4IMwYBCbyS5Pv5yRrQfhNULcsXROuY%2FpbpSNSIkNYBzXQ6QdOfDsjje6N%2Bw0NT1hprtQ%2BnGU0wvq3KwwY6pgEswPs3Z%2BqOJrb%2BxdzA7SxcqxizKSj6kq%2F5i6dcHMzASYg1RNhyCVQe4SoCHrdiKNXbgeF7%2BU2JoVdQKU4qTrjvyyIdThMmGCry6NkvabEbi8UN4IT1SUNudK46AAnAqldY5qu43oAojLVUErIbn5Z8BWjcz%2FT2X8Hj0BTUyjMRLy2LWLSzavFBZkvL1KHfC6t8Y4dJOI4bB6pbVtrNdeuKJGzL3Uxd&X-Amz-Signature=2ede7f7df6289d59115ca092042801a76feb4748eec1ecd8348a2046b05bcfdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRZUGBW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVpKuxMl7t9pPmQ0QWkxkAeYleLfyh2oMTUlYnK7vkJAiAzjNfaO6vb9de8HVXe%2BboENBCoxiiufr3YfPfMA9Rn8SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7b1r97ziMoJ5%2FDzPKtwDxmDhJfm5pI3pOiSqourhJPPZ8LK7JwuOBaE8BHrGNZjO%2FgoSeHf6h2QMFr0waFXjfT84GC%2Fw%2FBdmK0Frgb0ACo%2BFBgPsNllM79bjRRkeCeApGKAZfCQgPYB%2B2z3H83Wkk%2B6%2F5znKI0nduoMtS88PWIDFFkh1Vde2ZUHCjLhhtsAqapt6lFslBxJ7jllpCJlIoyJkqZVZPO7efB9yoKQ8mIvNAZ1zIgh4YBH5EoTcztNIC57ZBjUP6aruL4wcsWsS%2FlCe%2BgbegzAz3MbqcV1XMTcgZuw61lsBt%2BlD%2BXUZ7PwbUWNedVSZ%2BJhoUIK8cd9abt1KgDY9vFaI09PBftVi%2Bywg91CJovb8SWVpcAjFWaQJs3nHjODrfDTJpFUcYWggH8bP9Dn%2F9q12fgsRr1K0CjldIuyaEHix8HNn7QFG0CNxm7DXmP49pJmgzJVpbI0koBypKKOGA2d5Kbqp9iiYKLBXm6tu1SxHfM7AefHjN8rfk8LkoRHVWh%2FCz46%2B21u6awI3kxR2sXc331IUKorQ8%2F9hmGtCNuK3D6Zw1XKfE6s8U%2BcoBq4IMwYBCbyS5Pv5yRrQfhNULcsXROuY%2FpbpSNSIkNYBzXQ6QdOfDsjje6N%2Bw0NT1hprtQ%2BnGU0wvq3KwwY6pgEswPs3Z%2BqOJrb%2BxdzA7SxcqxizKSj6kq%2F5i6dcHMzASYg1RNhyCVQe4SoCHrdiKNXbgeF7%2BU2JoVdQKU4qTrjvyyIdThMmGCry6NkvabEbi8UN4IT1SUNudK46AAnAqldY5qu43oAojLVUErIbn5Z8BWjcz%2FT2X8Hj0BTUyjMRLy2LWLSzavFBZkvL1KHfC6t8Y4dJOI4bB6pbVtrNdeuKJGzL3Uxd&X-Amz-Signature=70df5b6d65a1f086dd08c12023c428a71b30697ef31d8cc17a8ebca111633ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRZUGBW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVpKuxMl7t9pPmQ0QWkxkAeYleLfyh2oMTUlYnK7vkJAiAzjNfaO6vb9de8HVXe%2BboENBCoxiiufr3YfPfMA9Rn8SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7b1r97ziMoJ5%2FDzPKtwDxmDhJfm5pI3pOiSqourhJPPZ8LK7JwuOBaE8BHrGNZjO%2FgoSeHf6h2QMFr0waFXjfT84GC%2Fw%2FBdmK0Frgb0ACo%2BFBgPsNllM79bjRRkeCeApGKAZfCQgPYB%2B2z3H83Wkk%2B6%2F5znKI0nduoMtS88PWIDFFkh1Vde2ZUHCjLhhtsAqapt6lFslBxJ7jllpCJlIoyJkqZVZPO7efB9yoKQ8mIvNAZ1zIgh4YBH5EoTcztNIC57ZBjUP6aruL4wcsWsS%2FlCe%2BgbegzAz3MbqcV1XMTcgZuw61lsBt%2BlD%2BXUZ7PwbUWNedVSZ%2BJhoUIK8cd9abt1KgDY9vFaI09PBftVi%2Bywg91CJovb8SWVpcAjFWaQJs3nHjODrfDTJpFUcYWggH8bP9Dn%2F9q12fgsRr1K0CjldIuyaEHix8HNn7QFG0CNxm7DXmP49pJmgzJVpbI0koBypKKOGA2d5Kbqp9iiYKLBXm6tu1SxHfM7AefHjN8rfk8LkoRHVWh%2FCz46%2B21u6awI3kxR2sXc331IUKorQ8%2F9hmGtCNuK3D6Zw1XKfE6s8U%2BcoBq4IMwYBCbyS5Pv5yRrQfhNULcsXROuY%2FpbpSNSIkNYBzXQ6QdOfDsjje6N%2Bw0NT1hprtQ%2BnGU0wvq3KwwY6pgEswPs3Z%2BqOJrb%2BxdzA7SxcqxizKSj6kq%2F5i6dcHMzASYg1RNhyCVQe4SoCHrdiKNXbgeF7%2BU2JoVdQKU4qTrjvyyIdThMmGCry6NkvabEbi8UN4IT1SUNudK46AAnAqldY5qu43oAojLVUErIbn5Z8BWjcz%2FT2X8Hj0BTUyjMRLy2LWLSzavFBZkvL1KHfC6t8Y4dJOI4bB6pbVtrNdeuKJGzL3Uxd&X-Amz-Signature=bc64663b8c45d680c4034641e860a9463b3669a8a370b94abc887e11f1c441d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
