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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPUS675%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICI7bZqIM%2FLcBdcfqquTztA6pQFizdfuF5usOMQZJCChAiEAmfwbAIsUk%2BFxOqYhwwt4m73vHa%2BXhQiEkAKaOkAmCqUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BhwUgvqg9Ssu642ircA%2BpWF8Oq0L3%2FNC3Mfab5ncvr7icgcolX%2FEgQhE71izSV2ZUqZb3MmALR7dYwUxzJtKc5iMZAwL4wXpOkVTB6KeQSMexpBH2l9z9cABk79c%2BZNZguulPn3eZY5tVVpt3Fp%2FXZ3NdeeTk7w0oyZLw9rxDKGV74ClEyIn5xXlIkxXm6zUof6OT%2Bp84KUOd%2FwJx4SRgQAclfSmgsRG8UD5RUhBTlMsKGBZtGePgWR%2BdP0U%2FKA%2BplK7EhWYk6VCEE%2BzfqBI1HQenMRJbXXSWmNBFfrDaDU%2B5apRbyAEU5b1ay%2BRXlVpOoALTchSXOf%2B8fA3dk07j4jUIG7%2BZ3p5pmuBvbx%2BV0whqsZS783drIQnrqBSAl8BhwncU8J6ZbD5U2Jffl0NxjKMboogCsoBLmKK73kQ1EFKqZ9H0SgLFBjVSpl8FC5Pg5hbCJbODySaixuvlzUOmDGbunPEDygtRww%2FNa2%2BxiK4bG4k%2BgW0vhI%2FY9E2qw8v5xkTaIX5c7IHOboO0YXX8OAE13bYmqtHJp6ju6BwkKgsG%2FApzfQ%2BfkuDXpk45Pf7YuybxFPByDho3hgMWSPWbfqqqnyFWvmGLI39wvCclR5TptPPn0QzVecRyMiZsnncq4PA2LwZRSRH%2FEMO3l2b8GOqUB5%2FJSgcZ%2B4aHg4ZRgxUQ6TtPLaU37vVVnv71TFDKv1gMsdCuFYf7XSiwI%2FdbGmKGofO1TT6I5Fa1WeWRyfs68D7FrYrQyvnMnukz3%2Fuu1ISMSVLMEyRHkbq9qDczHWtZA0wVHYLdWIeMZMEAjF%2Bd4R4%2F%2B40VmB2g%2BOoTWvSsYg3ON6ykK2XyNCiy8zGyGNHJ1UJo2BnHpZOO7GUXgGcgFM7ndxnWY&X-Amz-Signature=384fa5f05a9a351be95bf92f3cbf78c0c7ffbf5b51f0c4fa71813ccc70696baa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPUS675%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICI7bZqIM%2FLcBdcfqquTztA6pQFizdfuF5usOMQZJCChAiEAmfwbAIsUk%2BFxOqYhwwt4m73vHa%2BXhQiEkAKaOkAmCqUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BhwUgvqg9Ssu642ircA%2BpWF8Oq0L3%2FNC3Mfab5ncvr7icgcolX%2FEgQhE71izSV2ZUqZb3MmALR7dYwUxzJtKc5iMZAwL4wXpOkVTB6KeQSMexpBH2l9z9cABk79c%2BZNZguulPn3eZY5tVVpt3Fp%2FXZ3NdeeTk7w0oyZLw9rxDKGV74ClEyIn5xXlIkxXm6zUof6OT%2Bp84KUOd%2FwJx4SRgQAclfSmgsRG8UD5RUhBTlMsKGBZtGePgWR%2BdP0U%2FKA%2BplK7EhWYk6VCEE%2BzfqBI1HQenMRJbXXSWmNBFfrDaDU%2B5apRbyAEU5b1ay%2BRXlVpOoALTchSXOf%2B8fA3dk07j4jUIG7%2BZ3p5pmuBvbx%2BV0whqsZS783drIQnrqBSAl8BhwncU8J6ZbD5U2Jffl0NxjKMboogCsoBLmKK73kQ1EFKqZ9H0SgLFBjVSpl8FC5Pg5hbCJbODySaixuvlzUOmDGbunPEDygtRww%2FNa2%2BxiK4bG4k%2BgW0vhI%2FY9E2qw8v5xkTaIX5c7IHOboO0YXX8OAE13bYmqtHJp6ju6BwkKgsG%2FApzfQ%2BfkuDXpk45Pf7YuybxFPByDho3hgMWSPWbfqqqnyFWvmGLI39wvCclR5TptPPn0QzVecRyMiZsnncq4PA2LwZRSRH%2FEMO3l2b8GOqUB5%2FJSgcZ%2B4aHg4ZRgxUQ6TtPLaU37vVVnv71TFDKv1gMsdCuFYf7XSiwI%2FdbGmKGofO1TT6I5Fa1WeWRyfs68D7FrYrQyvnMnukz3%2Fuu1ISMSVLMEyRHkbq9qDczHWtZA0wVHYLdWIeMZMEAjF%2Bd4R4%2F%2B40VmB2g%2BOoTWvSsYg3ON6ykK2XyNCiy8zGyGNHJ1UJo2BnHpZOO7GUXgGcgFM7ndxnWY&X-Amz-Signature=6f8444ad4a22a995f70b7764a71067550a0ddb1be1d53fe02913007d9a19c96a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPUS675%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICI7bZqIM%2FLcBdcfqquTztA6pQFizdfuF5usOMQZJCChAiEAmfwbAIsUk%2BFxOqYhwwt4m73vHa%2BXhQiEkAKaOkAmCqUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BhwUgvqg9Ssu642ircA%2BpWF8Oq0L3%2FNC3Mfab5ncvr7icgcolX%2FEgQhE71izSV2ZUqZb3MmALR7dYwUxzJtKc5iMZAwL4wXpOkVTB6KeQSMexpBH2l9z9cABk79c%2BZNZguulPn3eZY5tVVpt3Fp%2FXZ3NdeeTk7w0oyZLw9rxDKGV74ClEyIn5xXlIkxXm6zUof6OT%2Bp84KUOd%2FwJx4SRgQAclfSmgsRG8UD5RUhBTlMsKGBZtGePgWR%2BdP0U%2FKA%2BplK7EhWYk6VCEE%2BzfqBI1HQenMRJbXXSWmNBFfrDaDU%2B5apRbyAEU5b1ay%2BRXlVpOoALTchSXOf%2B8fA3dk07j4jUIG7%2BZ3p5pmuBvbx%2BV0whqsZS783drIQnrqBSAl8BhwncU8J6ZbD5U2Jffl0NxjKMboogCsoBLmKK73kQ1EFKqZ9H0SgLFBjVSpl8FC5Pg5hbCJbODySaixuvlzUOmDGbunPEDygtRww%2FNa2%2BxiK4bG4k%2BgW0vhI%2FY9E2qw8v5xkTaIX5c7IHOboO0YXX8OAE13bYmqtHJp6ju6BwkKgsG%2FApzfQ%2BfkuDXpk45Pf7YuybxFPByDho3hgMWSPWbfqqqnyFWvmGLI39wvCclR5TptPPn0QzVecRyMiZsnncq4PA2LwZRSRH%2FEMO3l2b8GOqUB5%2FJSgcZ%2B4aHg4ZRgxUQ6TtPLaU37vVVnv71TFDKv1gMsdCuFYf7XSiwI%2FdbGmKGofO1TT6I5Fa1WeWRyfs68D7FrYrQyvnMnukz3%2Fuu1ISMSVLMEyRHkbq9qDczHWtZA0wVHYLdWIeMZMEAjF%2Bd4R4%2F%2B40VmB2g%2BOoTWvSsYg3ON6ykK2XyNCiy8zGyGNHJ1UJo2BnHpZOO7GUXgGcgFM7ndxnWY&X-Amz-Signature=dd4263d8b36d12ada342af9784cde8bd1a3f9a28c1974d0642ef9c326cb0edee&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPUS675%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICI7bZqIM%2FLcBdcfqquTztA6pQFizdfuF5usOMQZJCChAiEAmfwbAIsUk%2BFxOqYhwwt4m73vHa%2BXhQiEkAKaOkAmCqUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BhwUgvqg9Ssu642ircA%2BpWF8Oq0L3%2FNC3Mfab5ncvr7icgcolX%2FEgQhE71izSV2ZUqZb3MmALR7dYwUxzJtKc5iMZAwL4wXpOkVTB6KeQSMexpBH2l9z9cABk79c%2BZNZguulPn3eZY5tVVpt3Fp%2FXZ3NdeeTk7w0oyZLw9rxDKGV74ClEyIn5xXlIkxXm6zUof6OT%2Bp84KUOd%2FwJx4SRgQAclfSmgsRG8UD5RUhBTlMsKGBZtGePgWR%2BdP0U%2FKA%2BplK7EhWYk6VCEE%2BzfqBI1HQenMRJbXXSWmNBFfrDaDU%2B5apRbyAEU5b1ay%2BRXlVpOoALTchSXOf%2B8fA3dk07j4jUIG7%2BZ3p5pmuBvbx%2BV0whqsZS783drIQnrqBSAl8BhwncU8J6ZbD5U2Jffl0NxjKMboogCsoBLmKK73kQ1EFKqZ9H0SgLFBjVSpl8FC5Pg5hbCJbODySaixuvlzUOmDGbunPEDygtRww%2FNa2%2BxiK4bG4k%2BgW0vhI%2FY9E2qw8v5xkTaIX5c7IHOboO0YXX8OAE13bYmqtHJp6ju6BwkKgsG%2FApzfQ%2BfkuDXpk45Pf7YuybxFPByDho3hgMWSPWbfqqqnyFWvmGLI39wvCclR5TptPPn0QzVecRyMiZsnncq4PA2LwZRSRH%2FEMO3l2b8GOqUB5%2FJSgcZ%2B4aHg4ZRgxUQ6TtPLaU37vVVnv71TFDKv1gMsdCuFYf7XSiwI%2FdbGmKGofO1TT6I5Fa1WeWRyfs68D7FrYrQyvnMnukz3%2Fuu1ISMSVLMEyRHkbq9qDczHWtZA0wVHYLdWIeMZMEAjF%2Bd4R4%2F%2B40VmB2g%2BOoTWvSsYg3ON6ykK2XyNCiy8zGyGNHJ1UJo2BnHpZOO7GUXgGcgFM7ndxnWY&X-Amz-Signature=a41c3866de0456aef286ff244a004ddf8d193db816f555551da1bbb10ccb8180&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPUS675%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICI7bZqIM%2FLcBdcfqquTztA6pQFizdfuF5usOMQZJCChAiEAmfwbAIsUk%2BFxOqYhwwt4m73vHa%2BXhQiEkAKaOkAmCqUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BhwUgvqg9Ssu642ircA%2BpWF8Oq0L3%2FNC3Mfab5ncvr7icgcolX%2FEgQhE71izSV2ZUqZb3MmALR7dYwUxzJtKc5iMZAwL4wXpOkVTB6KeQSMexpBH2l9z9cABk79c%2BZNZguulPn3eZY5tVVpt3Fp%2FXZ3NdeeTk7w0oyZLw9rxDKGV74ClEyIn5xXlIkxXm6zUof6OT%2Bp84KUOd%2FwJx4SRgQAclfSmgsRG8UD5RUhBTlMsKGBZtGePgWR%2BdP0U%2FKA%2BplK7EhWYk6VCEE%2BzfqBI1HQenMRJbXXSWmNBFfrDaDU%2B5apRbyAEU5b1ay%2BRXlVpOoALTchSXOf%2B8fA3dk07j4jUIG7%2BZ3p5pmuBvbx%2BV0whqsZS783drIQnrqBSAl8BhwncU8J6ZbD5U2Jffl0NxjKMboogCsoBLmKK73kQ1EFKqZ9H0SgLFBjVSpl8FC5Pg5hbCJbODySaixuvlzUOmDGbunPEDygtRww%2FNa2%2BxiK4bG4k%2BgW0vhI%2FY9E2qw8v5xkTaIX5c7IHOboO0YXX8OAE13bYmqtHJp6ju6BwkKgsG%2FApzfQ%2BfkuDXpk45Pf7YuybxFPByDho3hgMWSPWbfqqqnyFWvmGLI39wvCclR5TptPPn0QzVecRyMiZsnncq4PA2LwZRSRH%2FEMO3l2b8GOqUB5%2FJSgcZ%2B4aHg4ZRgxUQ6TtPLaU37vVVnv71TFDKv1gMsdCuFYf7XSiwI%2FdbGmKGofO1TT6I5Fa1WeWRyfs68D7FrYrQyvnMnukz3%2Fuu1ISMSVLMEyRHkbq9qDczHWtZA0wVHYLdWIeMZMEAjF%2Bd4R4%2F%2B40VmB2g%2BOoTWvSsYg3ON6ykK2XyNCiy8zGyGNHJ1UJo2BnHpZOO7GUXgGcgFM7ndxnWY&X-Amz-Signature=5c300173241f47e475f230a9c365e9129e179ffbac6e317433bdf7e33790a6c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
