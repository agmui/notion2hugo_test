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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4G5FP2%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCfeOhjXCgHGc0vuBOlZaVuij6EEutEjfMrH9EjW64uCgIgE6BzeipqY14AI%2BCkCpazyaqodWjsfXZMka8JDtPI7Voq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIy4ath9CBnpzaPllyrcA3mafpdYypjyMvR%2BQiil7L2TnEvay1CEYbzpxx%2BNbY364wxCtZl9pX5LZAvXvN2v5yqAgsj2gkbHYOvgm1CZbf25bEnfA1JNM%2Ba%2B7uHwB71R3oXK30D1%2B2ngKbqlT8U2Onn71E9kgzK3qBLNRVaA1Ah1nNVk5LbQESTGZQAMKoOxJK89rEyODAF8gPt7PO%2BHtZhW6ikwJHPmAO0Gf8RNXgZv4AkoK9rlp9WFIa2UNrwG6mNE3zI5gj5j70NR33bVIllyb1EFymu3IuIcyhEkvCItn1H1Fc%2FRe2QVUvUKpxj5Lir0DVWLeNlAtgJgVXyN07XzVUzXPIFwxm26FM08IB3e54uRBULMA1JOuxiR8msUp8%2BY8k8M9eW%2Bu4pXaP%2BYeajagHyDeBu71F8cxZr0Gqz7R3H2k4TtWP8JftC75Ncrf5lA4qfvhqoMECFFRgKUSbmw%2BSyN%2B8MLRx1VgqGugIjFP4zaNkomGK%2B%2Fe830zvYN0myTbPO31w2uShLpZJKtVlGmvpXBCkOqHv%2F%2FyId%2BXloixXUS5fgHed0pPppeY%2F41CVykwuL3cvHqzr0%2Fff9xkDOgNnUesd2g%2BX41XX%2BP0wnsJA%2B9DXYu12gOtjApE1abss%2BA41s31PEX8KexMNXqqsMGOqUBAClVbJh3ua6tp7fEzvpyfqfavxgm6jzK86wa5m%2FEuqQZrUYTU90TcE03fCubXr7Vrg%2Fu%2FrpCJ5fUerk%2BWPMqAnbFswHmixxS0g%2FSSiveRqdKhxt1fMd2EmNiwQxEUyW4n8at7Kl9f%2FN2JwwG4pWndjcd%2FFB0wgg8b%2Bq%2FCFIlKy2Brm8GIYKg1%2FUPeSdWqG2tUiLxAcJCRm2yRnVK3WoCj3%2Fupa4K&X-Amz-Signature=e0d80640b4f936beda3e5f77e813c9ee72e843c681633978051c6fde24df7e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4G5FP2%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCfeOhjXCgHGc0vuBOlZaVuij6EEutEjfMrH9EjW64uCgIgE6BzeipqY14AI%2BCkCpazyaqodWjsfXZMka8JDtPI7Voq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIy4ath9CBnpzaPllyrcA3mafpdYypjyMvR%2BQiil7L2TnEvay1CEYbzpxx%2BNbY364wxCtZl9pX5LZAvXvN2v5yqAgsj2gkbHYOvgm1CZbf25bEnfA1JNM%2Ba%2B7uHwB71R3oXK30D1%2B2ngKbqlT8U2Onn71E9kgzK3qBLNRVaA1Ah1nNVk5LbQESTGZQAMKoOxJK89rEyODAF8gPt7PO%2BHtZhW6ikwJHPmAO0Gf8RNXgZv4AkoK9rlp9WFIa2UNrwG6mNE3zI5gj5j70NR33bVIllyb1EFymu3IuIcyhEkvCItn1H1Fc%2FRe2QVUvUKpxj5Lir0DVWLeNlAtgJgVXyN07XzVUzXPIFwxm26FM08IB3e54uRBULMA1JOuxiR8msUp8%2BY8k8M9eW%2Bu4pXaP%2BYeajagHyDeBu71F8cxZr0Gqz7R3H2k4TtWP8JftC75Ncrf5lA4qfvhqoMECFFRgKUSbmw%2BSyN%2B8MLRx1VgqGugIjFP4zaNkomGK%2B%2Fe830zvYN0myTbPO31w2uShLpZJKtVlGmvpXBCkOqHv%2F%2FyId%2BXloixXUS5fgHed0pPppeY%2F41CVykwuL3cvHqzr0%2Fff9xkDOgNnUesd2g%2BX41XX%2BP0wnsJA%2B9DXYu12gOtjApE1abss%2BA41s31PEX8KexMNXqqsMGOqUBAClVbJh3ua6tp7fEzvpyfqfavxgm6jzK86wa5m%2FEuqQZrUYTU90TcE03fCubXr7Vrg%2Fu%2FrpCJ5fUerk%2BWPMqAnbFswHmixxS0g%2FSSiveRqdKhxt1fMd2EmNiwQxEUyW4n8at7Kl9f%2FN2JwwG4pWndjcd%2FFB0wgg8b%2Bq%2FCFIlKy2Brm8GIYKg1%2FUPeSdWqG2tUiLxAcJCRm2yRnVK3WoCj3%2Fupa4K&X-Amz-Signature=72cbe7ec1e25992985ac3150a35cac636a171ab187f70a547ca1eb868fedb260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4G5FP2%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCfeOhjXCgHGc0vuBOlZaVuij6EEutEjfMrH9EjW64uCgIgE6BzeipqY14AI%2BCkCpazyaqodWjsfXZMka8JDtPI7Voq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIy4ath9CBnpzaPllyrcA3mafpdYypjyMvR%2BQiil7L2TnEvay1CEYbzpxx%2BNbY364wxCtZl9pX5LZAvXvN2v5yqAgsj2gkbHYOvgm1CZbf25bEnfA1JNM%2Ba%2B7uHwB71R3oXK30D1%2B2ngKbqlT8U2Onn71E9kgzK3qBLNRVaA1Ah1nNVk5LbQESTGZQAMKoOxJK89rEyODAF8gPt7PO%2BHtZhW6ikwJHPmAO0Gf8RNXgZv4AkoK9rlp9WFIa2UNrwG6mNE3zI5gj5j70NR33bVIllyb1EFymu3IuIcyhEkvCItn1H1Fc%2FRe2QVUvUKpxj5Lir0DVWLeNlAtgJgVXyN07XzVUzXPIFwxm26FM08IB3e54uRBULMA1JOuxiR8msUp8%2BY8k8M9eW%2Bu4pXaP%2BYeajagHyDeBu71F8cxZr0Gqz7R3H2k4TtWP8JftC75Ncrf5lA4qfvhqoMECFFRgKUSbmw%2BSyN%2B8MLRx1VgqGugIjFP4zaNkomGK%2B%2Fe830zvYN0myTbPO31w2uShLpZJKtVlGmvpXBCkOqHv%2F%2FyId%2BXloixXUS5fgHed0pPppeY%2F41CVykwuL3cvHqzr0%2Fff9xkDOgNnUesd2g%2BX41XX%2BP0wnsJA%2B9DXYu12gOtjApE1abss%2BA41s31PEX8KexMNXqqsMGOqUBAClVbJh3ua6tp7fEzvpyfqfavxgm6jzK86wa5m%2FEuqQZrUYTU90TcE03fCubXr7Vrg%2Fu%2FrpCJ5fUerk%2BWPMqAnbFswHmixxS0g%2FSSiveRqdKhxt1fMd2EmNiwQxEUyW4n8at7Kl9f%2FN2JwwG4pWndjcd%2FFB0wgg8b%2Bq%2FCFIlKy2Brm8GIYKg1%2FUPeSdWqG2tUiLxAcJCRm2yRnVK3WoCj3%2Fupa4K&X-Amz-Signature=59daf5af0faa2bd34e31ad055f14ad227ceef46a4d8a13b9cec5066f38abeef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4G5FP2%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCfeOhjXCgHGc0vuBOlZaVuij6EEutEjfMrH9EjW64uCgIgE6BzeipqY14AI%2BCkCpazyaqodWjsfXZMka8JDtPI7Voq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIy4ath9CBnpzaPllyrcA3mafpdYypjyMvR%2BQiil7L2TnEvay1CEYbzpxx%2BNbY364wxCtZl9pX5LZAvXvN2v5yqAgsj2gkbHYOvgm1CZbf25bEnfA1JNM%2Ba%2B7uHwB71R3oXK30D1%2B2ngKbqlT8U2Onn71E9kgzK3qBLNRVaA1Ah1nNVk5LbQESTGZQAMKoOxJK89rEyODAF8gPt7PO%2BHtZhW6ikwJHPmAO0Gf8RNXgZv4AkoK9rlp9WFIa2UNrwG6mNE3zI5gj5j70NR33bVIllyb1EFymu3IuIcyhEkvCItn1H1Fc%2FRe2QVUvUKpxj5Lir0DVWLeNlAtgJgVXyN07XzVUzXPIFwxm26FM08IB3e54uRBULMA1JOuxiR8msUp8%2BY8k8M9eW%2Bu4pXaP%2BYeajagHyDeBu71F8cxZr0Gqz7R3H2k4TtWP8JftC75Ncrf5lA4qfvhqoMECFFRgKUSbmw%2BSyN%2B8MLRx1VgqGugIjFP4zaNkomGK%2B%2Fe830zvYN0myTbPO31w2uShLpZJKtVlGmvpXBCkOqHv%2F%2FyId%2BXloixXUS5fgHed0pPppeY%2F41CVykwuL3cvHqzr0%2Fff9xkDOgNnUesd2g%2BX41XX%2BP0wnsJA%2B9DXYu12gOtjApE1abss%2BA41s31PEX8KexMNXqqsMGOqUBAClVbJh3ua6tp7fEzvpyfqfavxgm6jzK86wa5m%2FEuqQZrUYTU90TcE03fCubXr7Vrg%2Fu%2FrpCJ5fUerk%2BWPMqAnbFswHmixxS0g%2FSSiveRqdKhxt1fMd2EmNiwQxEUyW4n8at7Kl9f%2FN2JwwG4pWndjcd%2FFB0wgg8b%2Bq%2FCFIlKy2Brm8GIYKg1%2FUPeSdWqG2tUiLxAcJCRm2yRnVK3WoCj3%2Fupa4K&X-Amz-Signature=e2d2d9fa1b15ba6fcee8faa890160d05ed30d75e70627112d04d308fe0f3ab68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4G5FP2%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCfeOhjXCgHGc0vuBOlZaVuij6EEutEjfMrH9EjW64uCgIgE6BzeipqY14AI%2BCkCpazyaqodWjsfXZMka8JDtPI7Voq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIy4ath9CBnpzaPllyrcA3mafpdYypjyMvR%2BQiil7L2TnEvay1CEYbzpxx%2BNbY364wxCtZl9pX5LZAvXvN2v5yqAgsj2gkbHYOvgm1CZbf25bEnfA1JNM%2Ba%2B7uHwB71R3oXK30D1%2B2ngKbqlT8U2Onn71E9kgzK3qBLNRVaA1Ah1nNVk5LbQESTGZQAMKoOxJK89rEyODAF8gPt7PO%2BHtZhW6ikwJHPmAO0Gf8RNXgZv4AkoK9rlp9WFIa2UNrwG6mNE3zI5gj5j70NR33bVIllyb1EFymu3IuIcyhEkvCItn1H1Fc%2FRe2QVUvUKpxj5Lir0DVWLeNlAtgJgVXyN07XzVUzXPIFwxm26FM08IB3e54uRBULMA1JOuxiR8msUp8%2BY8k8M9eW%2Bu4pXaP%2BYeajagHyDeBu71F8cxZr0Gqz7R3H2k4TtWP8JftC75Ncrf5lA4qfvhqoMECFFRgKUSbmw%2BSyN%2B8MLRx1VgqGugIjFP4zaNkomGK%2B%2Fe830zvYN0myTbPO31w2uShLpZJKtVlGmvpXBCkOqHv%2F%2FyId%2BXloixXUS5fgHed0pPppeY%2F41CVykwuL3cvHqzr0%2Fff9xkDOgNnUesd2g%2BX41XX%2BP0wnsJA%2B9DXYu12gOtjApE1abss%2BA41s31PEX8KexMNXqqsMGOqUBAClVbJh3ua6tp7fEzvpyfqfavxgm6jzK86wa5m%2FEuqQZrUYTU90TcE03fCubXr7Vrg%2Fu%2FrpCJ5fUerk%2BWPMqAnbFswHmixxS0g%2FSSiveRqdKhxt1fMd2EmNiwQxEUyW4n8at7Kl9f%2FN2JwwG4pWndjcd%2FFB0wgg8b%2Bq%2FCFIlKy2Brm8GIYKg1%2FUPeSdWqG2tUiLxAcJCRm2yRnVK3WoCj3%2Fupa4K&X-Amz-Signature=fed4ff4517f3ce05713dffe81f97ddf6e364c2e06dd0ad7c741608660922d76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
