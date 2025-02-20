---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4MHQ3SW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOt3%2FyK1ddbIj86duqYnzXGybjOGcLufloTLUl6AsBrAiEA0x3YSbVZTocv9v1tWQGcUkP%2FqXAdfdWtIUxb7TZqYisqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwbHO%2BpQkRT2fSogSrcAw4NrgAUdDXJnT43AITIU7IF6skFQLUyzLUB1pCcvkn%2BgGYurEHIYyFUPjY%2F7eM23ASZtz5hEAzFGrQvCmRoYSNpB0jgVcYxlhfUNdPmdAPGKxvL0xVX9W2vUthMPBMdOEoTx7Ivwkhp9l7niQDQsPMYK7HYP8dG3scZfWLka0TlCPuk7lwXa9ruZwlc%2BpGvBsX%2B7j00bGEWbPEho%2BnrSgejRgkIITJxSnwT3juOmE9IsHeZUuI38AmhlSpapRd5GLp2xbmJ%2FJFNoI68At4K61PC7g%2Bp%2Fhf4M%2F4XXBiHtLZ%2BCC9wprPAlJ0gxGscnDv5vsFao88273IkG%2FCZx4Apa4NLFEKVCwpwaXHpSxJx%2FVD1Q9FZPBZqJuOUpu4J51M5Os1Rqhw7xE98Oc4pYtSfKLYTZMbUBxm9ASDukrMjrWHfxVWlIa1yPvl0gDoy0bYYPorIgG3MT7nk7GMok%2FUEIxgFdmUcYDeZjn5U%2FXCPaMhf6jemNCnBSn8DpDQUIGvPXO7fxkxs69wnAETpzYHXtmqP4tgNqcvLNuD1owEKRw6jZiLoczXVkeBnc9f1wN8rni8b%2Bq7MaU%2BxxU7u2kiZ1UnaQtG7S7xte4BlM5R%2FTvEmtr3E0cUxHgbLERufMMGn2r0GOqUBtboccxxkp%2Fl%2B7f5PCt468pGEwyS02rBNI2fhox%2Fku3heBw6rslnceZI760ZO%2FZYbGNvXssspGvZSuNkx0DsMlD2NFEInTiFLClhp6OUMtDQFsezcL9Fg%2FUhPjwXR%2BrcOfxAB%2BbbxE0o%2FmAaJtA9nmf2FI3VDyW%2FPnHkrxMDtdU3yBvxW5FMC6seonjcp2daioRL1mTI52gFLwAL%2BLRJYqMTZkbqA&X-Amz-Signature=737ce43b26d9672625cc3da76300190af3269c3516a80950e35695dfd03333aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4MHQ3SW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOt3%2FyK1ddbIj86duqYnzXGybjOGcLufloTLUl6AsBrAiEA0x3YSbVZTocv9v1tWQGcUkP%2FqXAdfdWtIUxb7TZqYisqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwbHO%2BpQkRT2fSogSrcAw4NrgAUdDXJnT43AITIU7IF6skFQLUyzLUB1pCcvkn%2BgGYurEHIYyFUPjY%2F7eM23ASZtz5hEAzFGrQvCmRoYSNpB0jgVcYxlhfUNdPmdAPGKxvL0xVX9W2vUthMPBMdOEoTx7Ivwkhp9l7niQDQsPMYK7HYP8dG3scZfWLka0TlCPuk7lwXa9ruZwlc%2BpGvBsX%2B7j00bGEWbPEho%2BnrSgejRgkIITJxSnwT3juOmE9IsHeZUuI38AmhlSpapRd5GLp2xbmJ%2FJFNoI68At4K61PC7g%2Bp%2Fhf4M%2F4XXBiHtLZ%2BCC9wprPAlJ0gxGscnDv5vsFao88273IkG%2FCZx4Apa4NLFEKVCwpwaXHpSxJx%2FVD1Q9FZPBZqJuOUpu4J51M5Os1Rqhw7xE98Oc4pYtSfKLYTZMbUBxm9ASDukrMjrWHfxVWlIa1yPvl0gDoy0bYYPorIgG3MT7nk7GMok%2FUEIxgFdmUcYDeZjn5U%2FXCPaMhf6jemNCnBSn8DpDQUIGvPXO7fxkxs69wnAETpzYHXtmqP4tgNqcvLNuD1owEKRw6jZiLoczXVkeBnc9f1wN8rni8b%2Bq7MaU%2BxxU7u2kiZ1UnaQtG7S7xte4BlM5R%2FTvEmtr3E0cUxHgbLERufMMGn2r0GOqUBtboccxxkp%2Fl%2B7f5PCt468pGEwyS02rBNI2fhox%2Fku3heBw6rslnceZI760ZO%2FZYbGNvXssspGvZSuNkx0DsMlD2NFEInTiFLClhp6OUMtDQFsezcL9Fg%2FUhPjwXR%2BrcOfxAB%2BbbxE0o%2FmAaJtA9nmf2FI3VDyW%2FPnHkrxMDtdU3yBvxW5FMC6seonjcp2daioRL1mTI52gFLwAL%2BLRJYqMTZkbqA&X-Amz-Signature=6bbbdeb7918a6b6d69fe6eb4952b5e72310d0aecf6dc6cf85bd0862f2921e38d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4MHQ3SW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOt3%2FyK1ddbIj86duqYnzXGybjOGcLufloTLUl6AsBrAiEA0x3YSbVZTocv9v1tWQGcUkP%2FqXAdfdWtIUxb7TZqYisqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwbHO%2BpQkRT2fSogSrcAw4NrgAUdDXJnT43AITIU7IF6skFQLUyzLUB1pCcvkn%2BgGYurEHIYyFUPjY%2F7eM23ASZtz5hEAzFGrQvCmRoYSNpB0jgVcYxlhfUNdPmdAPGKxvL0xVX9W2vUthMPBMdOEoTx7Ivwkhp9l7niQDQsPMYK7HYP8dG3scZfWLka0TlCPuk7lwXa9ruZwlc%2BpGvBsX%2B7j00bGEWbPEho%2BnrSgejRgkIITJxSnwT3juOmE9IsHeZUuI38AmhlSpapRd5GLp2xbmJ%2FJFNoI68At4K61PC7g%2Bp%2Fhf4M%2F4XXBiHtLZ%2BCC9wprPAlJ0gxGscnDv5vsFao88273IkG%2FCZx4Apa4NLFEKVCwpwaXHpSxJx%2FVD1Q9FZPBZqJuOUpu4J51M5Os1Rqhw7xE98Oc4pYtSfKLYTZMbUBxm9ASDukrMjrWHfxVWlIa1yPvl0gDoy0bYYPorIgG3MT7nk7GMok%2FUEIxgFdmUcYDeZjn5U%2FXCPaMhf6jemNCnBSn8DpDQUIGvPXO7fxkxs69wnAETpzYHXtmqP4tgNqcvLNuD1owEKRw6jZiLoczXVkeBnc9f1wN8rni8b%2Bq7MaU%2BxxU7u2kiZ1UnaQtG7S7xte4BlM5R%2FTvEmtr3E0cUxHgbLERufMMGn2r0GOqUBtboccxxkp%2Fl%2B7f5PCt468pGEwyS02rBNI2fhox%2Fku3heBw6rslnceZI760ZO%2FZYbGNvXssspGvZSuNkx0DsMlD2NFEInTiFLClhp6OUMtDQFsezcL9Fg%2FUhPjwXR%2BrcOfxAB%2BbbxE0o%2FmAaJtA9nmf2FI3VDyW%2FPnHkrxMDtdU3yBvxW5FMC6seonjcp2daioRL1mTI52gFLwAL%2BLRJYqMTZkbqA&X-Amz-Signature=fd3fe2be68d63613f47c3d3497b6b2a2d2f14308aeb6af2ccaeb7ace92de6a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4MHQ3SW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOt3%2FyK1ddbIj86duqYnzXGybjOGcLufloTLUl6AsBrAiEA0x3YSbVZTocv9v1tWQGcUkP%2FqXAdfdWtIUxb7TZqYisqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwbHO%2BpQkRT2fSogSrcAw4NrgAUdDXJnT43AITIU7IF6skFQLUyzLUB1pCcvkn%2BgGYurEHIYyFUPjY%2F7eM23ASZtz5hEAzFGrQvCmRoYSNpB0jgVcYxlhfUNdPmdAPGKxvL0xVX9W2vUthMPBMdOEoTx7Ivwkhp9l7niQDQsPMYK7HYP8dG3scZfWLka0TlCPuk7lwXa9ruZwlc%2BpGvBsX%2B7j00bGEWbPEho%2BnrSgejRgkIITJxSnwT3juOmE9IsHeZUuI38AmhlSpapRd5GLp2xbmJ%2FJFNoI68At4K61PC7g%2Bp%2Fhf4M%2F4XXBiHtLZ%2BCC9wprPAlJ0gxGscnDv5vsFao88273IkG%2FCZx4Apa4NLFEKVCwpwaXHpSxJx%2FVD1Q9FZPBZqJuOUpu4J51M5Os1Rqhw7xE98Oc4pYtSfKLYTZMbUBxm9ASDukrMjrWHfxVWlIa1yPvl0gDoy0bYYPorIgG3MT7nk7GMok%2FUEIxgFdmUcYDeZjn5U%2FXCPaMhf6jemNCnBSn8DpDQUIGvPXO7fxkxs69wnAETpzYHXtmqP4tgNqcvLNuD1owEKRw6jZiLoczXVkeBnc9f1wN8rni8b%2Bq7MaU%2BxxU7u2kiZ1UnaQtG7S7xte4BlM5R%2FTvEmtr3E0cUxHgbLERufMMGn2r0GOqUBtboccxxkp%2Fl%2B7f5PCt468pGEwyS02rBNI2fhox%2Fku3heBw6rslnceZI760ZO%2FZYbGNvXssspGvZSuNkx0DsMlD2NFEInTiFLClhp6OUMtDQFsezcL9Fg%2FUhPjwXR%2BrcOfxAB%2BbbxE0o%2FmAaJtA9nmf2FI3VDyW%2FPnHkrxMDtdU3yBvxW5FMC6seonjcp2daioRL1mTI52gFLwAL%2BLRJYqMTZkbqA&X-Amz-Signature=56f2a881b13a846988ab17199c5519cd1a45fab0bf72a2296947f01de93a0fea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4MHQ3SW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOt3%2FyK1ddbIj86duqYnzXGybjOGcLufloTLUl6AsBrAiEA0x3YSbVZTocv9v1tWQGcUkP%2FqXAdfdWtIUxb7TZqYisqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwbHO%2BpQkRT2fSogSrcAw4NrgAUdDXJnT43AITIU7IF6skFQLUyzLUB1pCcvkn%2BgGYurEHIYyFUPjY%2F7eM23ASZtz5hEAzFGrQvCmRoYSNpB0jgVcYxlhfUNdPmdAPGKxvL0xVX9W2vUthMPBMdOEoTx7Ivwkhp9l7niQDQsPMYK7HYP8dG3scZfWLka0TlCPuk7lwXa9ruZwlc%2BpGvBsX%2B7j00bGEWbPEho%2BnrSgejRgkIITJxSnwT3juOmE9IsHeZUuI38AmhlSpapRd5GLp2xbmJ%2FJFNoI68At4K61PC7g%2Bp%2Fhf4M%2F4XXBiHtLZ%2BCC9wprPAlJ0gxGscnDv5vsFao88273IkG%2FCZx4Apa4NLFEKVCwpwaXHpSxJx%2FVD1Q9FZPBZqJuOUpu4J51M5Os1Rqhw7xE98Oc4pYtSfKLYTZMbUBxm9ASDukrMjrWHfxVWlIa1yPvl0gDoy0bYYPorIgG3MT7nk7GMok%2FUEIxgFdmUcYDeZjn5U%2FXCPaMhf6jemNCnBSn8DpDQUIGvPXO7fxkxs69wnAETpzYHXtmqP4tgNqcvLNuD1owEKRw6jZiLoczXVkeBnc9f1wN8rni8b%2Bq7MaU%2BxxU7u2kiZ1UnaQtG7S7xte4BlM5R%2FTvEmtr3E0cUxHgbLERufMMGn2r0GOqUBtboccxxkp%2Fl%2B7f5PCt468pGEwyS02rBNI2fhox%2Fku3heBw6rslnceZI760ZO%2FZYbGNvXssspGvZSuNkx0DsMlD2NFEInTiFLClhp6OUMtDQFsezcL9Fg%2FUhPjwXR%2BrcOfxAB%2BbbxE0o%2FmAaJtA9nmf2FI3VDyW%2FPnHkrxMDtdU3yBvxW5FMC6seonjcp2daioRL1mTI52gFLwAL%2BLRJYqMTZkbqA&X-Amz-Signature=d88f733de9799948caf698f2caee39e83bd0d21b130322bcab36865c1c1c455b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
