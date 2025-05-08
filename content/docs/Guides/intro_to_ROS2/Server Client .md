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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PSRIKID%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2nJMmB4a54Cr8Kz2puVSOmN8%2F7KkzkiEClTMSciSsIgIhAKmCkmi9LeEZXOh8SooLOuJoyFRLOvHpZbF3EXKscm26Kv8DCHsQABoMNjM3NDIzMTgzODA1Igxuf2zZbm79XGBT1ogq3APjeZh9Jkbkf79OVxPOHVtI%2FuCDo9pSEK2OWUeXFh%2BG%2BKvDW0GtEFx0xjOHqwqs5A%2BJ4TtWtVVO17YzlsOREcAvTGt9N84OUKtKubyh4cddPQFTOlcnX%2B0CnXxWqubTaNhEjWQHKvyZAwnULTEv2JPap4eEMh5FXnFxoutcgfcRuBUJQXJA6HJEtxskA3Qh8L7XTKSR1o31KmkT2CfOWp1tD7Uf2x7NNZryGkFeH0w1NPfbsNprx%2FLMu8Rj63Xh6QOPlgYnrLUgWVMxqq4yVyqf2mj0apjqzCrEXuQVJSbXKnpiv%2FR3IcjW%2BZnREeV%2BK1Jgah2U7R8XE%2BbccEJLEB2bJmBzeX%2FJHKm0H2n6j4s5jYNbWxvHchKESjxfDGED47FAd5wSomhFXAD1h9MRyo252UjiftrIpJicCWI%2F16%2F2QTkaLsLzEmR2tU9wdZHAuSimJl2Wl%2BJz61NIiqn%2FM%2BHu3krA6GV1UIM0Z4AuNEA%2F89H%2BHhzd6XXPcaKZO%2ByukbefqIJUwXOgI89fkmFDJanRCaGWr0FhEiiDBrQi0GAvtWJ4hSv3f8iZ7lIyuGXG4BCbcKrLzcY7jJ8X%2BQtYz0ybyHW6MW7SJb9H04UljtrtLDbD6QRmZS9HhU2rOTCE5vPABjqkAcHy8tW%2BoeQ4MGRpBHSRJkL6ZAqRMT5MY3IGF9s5bg%2BZvIAiWwnSFEbO15zOaA%2FNfloz215KYGeibCCBpu1BeIbN6yvMThAVWgw8AnzHVRfn9vR4oBSw5WhqOoKNh0rXB8fi6ooyNDNjG2vZCLNJAMM0hLPKvKMvMdLCWMg2GobSx8InJ1o7Qjvn%2BH8uMd31QIw8La%2FOBqaF3BZ3d1WeoC16z9rR&X-Amz-Signature=8c5bce1254d61393c41a8c1c05efd48330a9a8af56d1b000097537976129c3a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PSRIKID%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2nJMmB4a54Cr8Kz2puVSOmN8%2F7KkzkiEClTMSciSsIgIhAKmCkmi9LeEZXOh8SooLOuJoyFRLOvHpZbF3EXKscm26Kv8DCHsQABoMNjM3NDIzMTgzODA1Igxuf2zZbm79XGBT1ogq3APjeZh9Jkbkf79OVxPOHVtI%2FuCDo9pSEK2OWUeXFh%2BG%2BKvDW0GtEFx0xjOHqwqs5A%2BJ4TtWtVVO17YzlsOREcAvTGt9N84OUKtKubyh4cddPQFTOlcnX%2B0CnXxWqubTaNhEjWQHKvyZAwnULTEv2JPap4eEMh5FXnFxoutcgfcRuBUJQXJA6HJEtxskA3Qh8L7XTKSR1o31KmkT2CfOWp1tD7Uf2x7NNZryGkFeH0w1NPfbsNprx%2FLMu8Rj63Xh6QOPlgYnrLUgWVMxqq4yVyqf2mj0apjqzCrEXuQVJSbXKnpiv%2FR3IcjW%2BZnREeV%2BK1Jgah2U7R8XE%2BbccEJLEB2bJmBzeX%2FJHKm0H2n6j4s5jYNbWxvHchKESjxfDGED47FAd5wSomhFXAD1h9MRyo252UjiftrIpJicCWI%2F16%2F2QTkaLsLzEmR2tU9wdZHAuSimJl2Wl%2BJz61NIiqn%2FM%2BHu3krA6GV1UIM0Z4AuNEA%2F89H%2BHhzd6XXPcaKZO%2ByukbefqIJUwXOgI89fkmFDJanRCaGWr0FhEiiDBrQi0GAvtWJ4hSv3f8iZ7lIyuGXG4BCbcKrLzcY7jJ8X%2BQtYz0ybyHW6MW7SJb9H04UljtrtLDbD6QRmZS9HhU2rOTCE5vPABjqkAcHy8tW%2BoeQ4MGRpBHSRJkL6ZAqRMT5MY3IGF9s5bg%2BZvIAiWwnSFEbO15zOaA%2FNfloz215KYGeibCCBpu1BeIbN6yvMThAVWgw8AnzHVRfn9vR4oBSw5WhqOoKNh0rXB8fi6ooyNDNjG2vZCLNJAMM0hLPKvKMvMdLCWMg2GobSx8InJ1o7Qjvn%2BH8uMd31QIw8La%2FOBqaF3BZ3d1WeoC16z9rR&X-Amz-Signature=94382db23e0a65773888bddaf243f0d58e4cadba3ef857955f19ac01996ca74c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PSRIKID%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2nJMmB4a54Cr8Kz2puVSOmN8%2F7KkzkiEClTMSciSsIgIhAKmCkmi9LeEZXOh8SooLOuJoyFRLOvHpZbF3EXKscm26Kv8DCHsQABoMNjM3NDIzMTgzODA1Igxuf2zZbm79XGBT1ogq3APjeZh9Jkbkf79OVxPOHVtI%2FuCDo9pSEK2OWUeXFh%2BG%2BKvDW0GtEFx0xjOHqwqs5A%2BJ4TtWtVVO17YzlsOREcAvTGt9N84OUKtKubyh4cddPQFTOlcnX%2B0CnXxWqubTaNhEjWQHKvyZAwnULTEv2JPap4eEMh5FXnFxoutcgfcRuBUJQXJA6HJEtxskA3Qh8L7XTKSR1o31KmkT2CfOWp1tD7Uf2x7NNZryGkFeH0w1NPfbsNprx%2FLMu8Rj63Xh6QOPlgYnrLUgWVMxqq4yVyqf2mj0apjqzCrEXuQVJSbXKnpiv%2FR3IcjW%2BZnREeV%2BK1Jgah2U7R8XE%2BbccEJLEB2bJmBzeX%2FJHKm0H2n6j4s5jYNbWxvHchKESjxfDGED47FAd5wSomhFXAD1h9MRyo252UjiftrIpJicCWI%2F16%2F2QTkaLsLzEmR2tU9wdZHAuSimJl2Wl%2BJz61NIiqn%2FM%2BHu3krA6GV1UIM0Z4AuNEA%2F89H%2BHhzd6XXPcaKZO%2ByukbefqIJUwXOgI89fkmFDJanRCaGWr0FhEiiDBrQi0GAvtWJ4hSv3f8iZ7lIyuGXG4BCbcKrLzcY7jJ8X%2BQtYz0ybyHW6MW7SJb9H04UljtrtLDbD6QRmZS9HhU2rOTCE5vPABjqkAcHy8tW%2BoeQ4MGRpBHSRJkL6ZAqRMT5MY3IGF9s5bg%2BZvIAiWwnSFEbO15zOaA%2FNfloz215KYGeibCCBpu1BeIbN6yvMThAVWgw8AnzHVRfn9vR4oBSw5WhqOoKNh0rXB8fi6ooyNDNjG2vZCLNJAMM0hLPKvKMvMdLCWMg2GobSx8InJ1o7Qjvn%2BH8uMd31QIw8La%2FOBqaF3BZ3d1WeoC16z9rR&X-Amz-Signature=794666c394740b4a677de817f2aa9d0cce4e7bac98a7f7da6a45164b83f1f45a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PSRIKID%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2nJMmB4a54Cr8Kz2puVSOmN8%2F7KkzkiEClTMSciSsIgIhAKmCkmi9LeEZXOh8SooLOuJoyFRLOvHpZbF3EXKscm26Kv8DCHsQABoMNjM3NDIzMTgzODA1Igxuf2zZbm79XGBT1ogq3APjeZh9Jkbkf79OVxPOHVtI%2FuCDo9pSEK2OWUeXFh%2BG%2BKvDW0GtEFx0xjOHqwqs5A%2BJ4TtWtVVO17YzlsOREcAvTGt9N84OUKtKubyh4cddPQFTOlcnX%2B0CnXxWqubTaNhEjWQHKvyZAwnULTEv2JPap4eEMh5FXnFxoutcgfcRuBUJQXJA6HJEtxskA3Qh8L7XTKSR1o31KmkT2CfOWp1tD7Uf2x7NNZryGkFeH0w1NPfbsNprx%2FLMu8Rj63Xh6QOPlgYnrLUgWVMxqq4yVyqf2mj0apjqzCrEXuQVJSbXKnpiv%2FR3IcjW%2BZnREeV%2BK1Jgah2U7R8XE%2BbccEJLEB2bJmBzeX%2FJHKm0H2n6j4s5jYNbWxvHchKESjxfDGED47FAd5wSomhFXAD1h9MRyo252UjiftrIpJicCWI%2F16%2F2QTkaLsLzEmR2tU9wdZHAuSimJl2Wl%2BJz61NIiqn%2FM%2BHu3krA6GV1UIM0Z4AuNEA%2F89H%2BHhzd6XXPcaKZO%2ByukbefqIJUwXOgI89fkmFDJanRCaGWr0FhEiiDBrQi0GAvtWJ4hSv3f8iZ7lIyuGXG4BCbcKrLzcY7jJ8X%2BQtYz0ybyHW6MW7SJb9H04UljtrtLDbD6QRmZS9HhU2rOTCE5vPABjqkAcHy8tW%2BoeQ4MGRpBHSRJkL6ZAqRMT5MY3IGF9s5bg%2BZvIAiWwnSFEbO15zOaA%2FNfloz215KYGeibCCBpu1BeIbN6yvMThAVWgw8AnzHVRfn9vR4oBSw5WhqOoKNh0rXB8fi6ooyNDNjG2vZCLNJAMM0hLPKvKMvMdLCWMg2GobSx8InJ1o7Qjvn%2BH8uMd31QIw8La%2FOBqaF3BZ3d1WeoC16z9rR&X-Amz-Signature=8a4f4d1cd2ae0c211d60d08b1e0bf2396883e0d1d6d36f4ac03492ccb1bad9f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PSRIKID%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2nJMmB4a54Cr8Kz2puVSOmN8%2F7KkzkiEClTMSciSsIgIhAKmCkmi9LeEZXOh8SooLOuJoyFRLOvHpZbF3EXKscm26Kv8DCHsQABoMNjM3NDIzMTgzODA1Igxuf2zZbm79XGBT1ogq3APjeZh9Jkbkf79OVxPOHVtI%2FuCDo9pSEK2OWUeXFh%2BG%2BKvDW0GtEFx0xjOHqwqs5A%2BJ4TtWtVVO17YzlsOREcAvTGt9N84OUKtKubyh4cddPQFTOlcnX%2B0CnXxWqubTaNhEjWQHKvyZAwnULTEv2JPap4eEMh5FXnFxoutcgfcRuBUJQXJA6HJEtxskA3Qh8L7XTKSR1o31KmkT2CfOWp1tD7Uf2x7NNZryGkFeH0w1NPfbsNprx%2FLMu8Rj63Xh6QOPlgYnrLUgWVMxqq4yVyqf2mj0apjqzCrEXuQVJSbXKnpiv%2FR3IcjW%2BZnREeV%2BK1Jgah2U7R8XE%2BbccEJLEB2bJmBzeX%2FJHKm0H2n6j4s5jYNbWxvHchKESjxfDGED47FAd5wSomhFXAD1h9MRyo252UjiftrIpJicCWI%2F16%2F2QTkaLsLzEmR2tU9wdZHAuSimJl2Wl%2BJz61NIiqn%2FM%2BHu3krA6GV1UIM0Z4AuNEA%2F89H%2BHhzd6XXPcaKZO%2ByukbefqIJUwXOgI89fkmFDJanRCaGWr0FhEiiDBrQi0GAvtWJ4hSv3f8iZ7lIyuGXG4BCbcKrLzcY7jJ8X%2BQtYz0ybyHW6MW7SJb9H04UljtrtLDbD6QRmZS9HhU2rOTCE5vPABjqkAcHy8tW%2BoeQ4MGRpBHSRJkL6ZAqRMT5MY3IGF9s5bg%2BZvIAiWwnSFEbO15zOaA%2FNfloz215KYGeibCCBpu1BeIbN6yvMThAVWgw8AnzHVRfn9vR4oBSw5WhqOoKNh0rXB8fi6ooyNDNjG2vZCLNJAMM0hLPKvKMvMdLCWMg2GobSx8InJ1o7Qjvn%2BH8uMd31QIw8La%2FOBqaF3BZ3d1WeoC16z9rR&X-Amz-Signature=5f6474d79cf4b0205dfc9131bec95ae8418e172947c1008a12e780b0acb761d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
