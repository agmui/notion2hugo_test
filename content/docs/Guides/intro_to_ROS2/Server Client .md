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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIW4TUS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGzRs6Dcz4Mezo2XLqoUjnCuknt4gff6uBSHPf%2BP8PnpAiEA36YY0O%2BkTfLC6BetQ8CCILoc%2FxYKA9jHcv9HXiIoz0gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Hz2%2FWbZE51KCAbircA977z4LFpc%2BR4zsvFr75Qc89b2H6QTBmrqtAndqQVvv5dkuYjkFkCJHYhpSeU5jJtQxohNXsparq9Naj6cgSu443Wir3WeimDytjmrg%2Fc0F4fdMrUam%2BXjdksu%2F4QjUnIIaRrwWUNQlpW7tb2%2Fvz7ktuk8TwTjmRd0tHzBub3DFFMquUit1rQDG3xpj%2FeA0QZMAMN7k3d7r26gGomlm8Krwu7iPsdIo4yW65Bu9VNdrPMeSQpgl2CA2b037WOlp7uw2CoXJ7hvCDrv2KMDVjx2F5mO8GiAX9DmK1HtQaZxqR1FEgMOM4Nl9TrLCgMX9A1bFBRyYjg3kDSADNrvYnLriWj%2Bn1efNF6SO5459WeoTuRp5DFLmCyKt7aS2erADo72LB0ZswNUbM%2FjjDt3R%2FS8RmKvjdwnQ4OUnMztCtV1jvwyqqGIwjtH634LT%2B5FZdPE03qni4eBuAvEvCphXs7QOV765pREWIFXOUcKs5gbmDIbkrxkryToMSji3yslLcMholgj5dbnHMwhnFSLlePkPPCXS0zs0f7WmyNEFD2hHbWDfsf9dW6xbxb6AYhLc3E5jd%2FYU%2FmcHau67EPxrFw41Z8PkvFmJ8tCWyTHFmw%2Ftm8kTd0Iiq3Ob04sy9MKX2g74GOqUBciqlgkiU%2FigUjbDxXFl7f12%2BD3ITzPjQgtNU9qsjZoRNxM9upoe1gAg%2FAibP3iasee4EEG15qJcb6aOYevy7JGJpL7%2FPqTIfosJN2FOge%2BurM%2FnL5xVu2tJYbROO67vLEvChsbsu8PHY5%2BoPyqEvipCcrCtb3i7zBFJk4oVzTLAt0UCsWwC7VbojA1elsBSYL2X43sMQgQkkZDo4PXsoLFnU%2FGCD&X-Amz-Signature=1407712ec972ab2455835ea5b07c9b21e09b94887185e0026655ed554fe7680e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIW4TUS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGzRs6Dcz4Mezo2XLqoUjnCuknt4gff6uBSHPf%2BP8PnpAiEA36YY0O%2BkTfLC6BetQ8CCILoc%2FxYKA9jHcv9HXiIoz0gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Hz2%2FWbZE51KCAbircA977z4LFpc%2BR4zsvFr75Qc89b2H6QTBmrqtAndqQVvv5dkuYjkFkCJHYhpSeU5jJtQxohNXsparq9Naj6cgSu443Wir3WeimDytjmrg%2Fc0F4fdMrUam%2BXjdksu%2F4QjUnIIaRrwWUNQlpW7tb2%2Fvz7ktuk8TwTjmRd0tHzBub3DFFMquUit1rQDG3xpj%2FeA0QZMAMN7k3d7r26gGomlm8Krwu7iPsdIo4yW65Bu9VNdrPMeSQpgl2CA2b037WOlp7uw2CoXJ7hvCDrv2KMDVjx2F5mO8GiAX9DmK1HtQaZxqR1FEgMOM4Nl9TrLCgMX9A1bFBRyYjg3kDSADNrvYnLriWj%2Bn1efNF6SO5459WeoTuRp5DFLmCyKt7aS2erADo72LB0ZswNUbM%2FjjDt3R%2FS8RmKvjdwnQ4OUnMztCtV1jvwyqqGIwjtH634LT%2B5FZdPE03qni4eBuAvEvCphXs7QOV765pREWIFXOUcKs5gbmDIbkrxkryToMSji3yslLcMholgj5dbnHMwhnFSLlePkPPCXS0zs0f7WmyNEFD2hHbWDfsf9dW6xbxb6AYhLc3E5jd%2FYU%2FmcHau67EPxrFw41Z8PkvFmJ8tCWyTHFmw%2Ftm8kTd0Iiq3Ob04sy9MKX2g74GOqUBciqlgkiU%2FigUjbDxXFl7f12%2BD3ITzPjQgtNU9qsjZoRNxM9upoe1gAg%2FAibP3iasee4EEG15qJcb6aOYevy7JGJpL7%2FPqTIfosJN2FOge%2BurM%2FnL5xVu2tJYbROO67vLEvChsbsu8PHY5%2BoPyqEvipCcrCtb3i7zBFJk4oVzTLAt0UCsWwC7VbojA1elsBSYL2X43sMQgQkkZDo4PXsoLFnU%2FGCD&X-Amz-Signature=b4ddf84fed20484be45fb4bacda00f92aa968ab28af39d8fc5ae3bab59d0cbb5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIW4TUS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGzRs6Dcz4Mezo2XLqoUjnCuknt4gff6uBSHPf%2BP8PnpAiEA36YY0O%2BkTfLC6BetQ8CCILoc%2FxYKA9jHcv9HXiIoz0gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Hz2%2FWbZE51KCAbircA977z4LFpc%2BR4zsvFr75Qc89b2H6QTBmrqtAndqQVvv5dkuYjkFkCJHYhpSeU5jJtQxohNXsparq9Naj6cgSu443Wir3WeimDytjmrg%2Fc0F4fdMrUam%2BXjdksu%2F4QjUnIIaRrwWUNQlpW7tb2%2Fvz7ktuk8TwTjmRd0tHzBub3DFFMquUit1rQDG3xpj%2FeA0QZMAMN7k3d7r26gGomlm8Krwu7iPsdIo4yW65Bu9VNdrPMeSQpgl2CA2b037WOlp7uw2CoXJ7hvCDrv2KMDVjx2F5mO8GiAX9DmK1HtQaZxqR1FEgMOM4Nl9TrLCgMX9A1bFBRyYjg3kDSADNrvYnLriWj%2Bn1efNF6SO5459WeoTuRp5DFLmCyKt7aS2erADo72LB0ZswNUbM%2FjjDt3R%2FS8RmKvjdwnQ4OUnMztCtV1jvwyqqGIwjtH634LT%2B5FZdPE03qni4eBuAvEvCphXs7QOV765pREWIFXOUcKs5gbmDIbkrxkryToMSji3yslLcMholgj5dbnHMwhnFSLlePkPPCXS0zs0f7WmyNEFD2hHbWDfsf9dW6xbxb6AYhLc3E5jd%2FYU%2FmcHau67EPxrFw41Z8PkvFmJ8tCWyTHFmw%2Ftm8kTd0Iiq3Ob04sy9MKX2g74GOqUBciqlgkiU%2FigUjbDxXFl7f12%2BD3ITzPjQgtNU9qsjZoRNxM9upoe1gAg%2FAibP3iasee4EEG15qJcb6aOYevy7JGJpL7%2FPqTIfosJN2FOge%2BurM%2FnL5xVu2tJYbROO67vLEvChsbsu8PHY5%2BoPyqEvipCcrCtb3i7zBFJk4oVzTLAt0UCsWwC7VbojA1elsBSYL2X43sMQgQkkZDo4PXsoLFnU%2FGCD&X-Amz-Signature=d0d131413482dc554423228bbd7a51d56622f0efb6e28bfb2eb6a453485a05e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIW4TUS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGzRs6Dcz4Mezo2XLqoUjnCuknt4gff6uBSHPf%2BP8PnpAiEA36YY0O%2BkTfLC6BetQ8CCILoc%2FxYKA9jHcv9HXiIoz0gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Hz2%2FWbZE51KCAbircA977z4LFpc%2BR4zsvFr75Qc89b2H6QTBmrqtAndqQVvv5dkuYjkFkCJHYhpSeU5jJtQxohNXsparq9Naj6cgSu443Wir3WeimDytjmrg%2Fc0F4fdMrUam%2BXjdksu%2F4QjUnIIaRrwWUNQlpW7tb2%2Fvz7ktuk8TwTjmRd0tHzBub3DFFMquUit1rQDG3xpj%2FeA0QZMAMN7k3d7r26gGomlm8Krwu7iPsdIo4yW65Bu9VNdrPMeSQpgl2CA2b037WOlp7uw2CoXJ7hvCDrv2KMDVjx2F5mO8GiAX9DmK1HtQaZxqR1FEgMOM4Nl9TrLCgMX9A1bFBRyYjg3kDSADNrvYnLriWj%2Bn1efNF6SO5459WeoTuRp5DFLmCyKt7aS2erADo72LB0ZswNUbM%2FjjDt3R%2FS8RmKvjdwnQ4OUnMztCtV1jvwyqqGIwjtH634LT%2B5FZdPE03qni4eBuAvEvCphXs7QOV765pREWIFXOUcKs5gbmDIbkrxkryToMSji3yslLcMholgj5dbnHMwhnFSLlePkPPCXS0zs0f7WmyNEFD2hHbWDfsf9dW6xbxb6AYhLc3E5jd%2FYU%2FmcHau67EPxrFw41Z8PkvFmJ8tCWyTHFmw%2Ftm8kTd0Iiq3Ob04sy9MKX2g74GOqUBciqlgkiU%2FigUjbDxXFl7f12%2BD3ITzPjQgtNU9qsjZoRNxM9upoe1gAg%2FAibP3iasee4EEG15qJcb6aOYevy7JGJpL7%2FPqTIfosJN2FOge%2BurM%2FnL5xVu2tJYbROO67vLEvChsbsu8PHY5%2BoPyqEvipCcrCtb3i7zBFJk4oVzTLAt0UCsWwC7VbojA1elsBSYL2X43sMQgQkkZDo4PXsoLFnU%2FGCD&X-Amz-Signature=eda8d234e6571ee10b92bc26056a1e19cfee75002d2a74af33922536da1169a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIW4TUS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGzRs6Dcz4Mezo2XLqoUjnCuknt4gff6uBSHPf%2BP8PnpAiEA36YY0O%2BkTfLC6BetQ8CCILoc%2FxYKA9jHcv9HXiIoz0gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Hz2%2FWbZE51KCAbircA977z4LFpc%2BR4zsvFr75Qc89b2H6QTBmrqtAndqQVvv5dkuYjkFkCJHYhpSeU5jJtQxohNXsparq9Naj6cgSu443Wir3WeimDytjmrg%2Fc0F4fdMrUam%2BXjdksu%2F4QjUnIIaRrwWUNQlpW7tb2%2Fvz7ktuk8TwTjmRd0tHzBub3DFFMquUit1rQDG3xpj%2FeA0QZMAMN7k3d7r26gGomlm8Krwu7iPsdIo4yW65Bu9VNdrPMeSQpgl2CA2b037WOlp7uw2CoXJ7hvCDrv2KMDVjx2F5mO8GiAX9DmK1HtQaZxqR1FEgMOM4Nl9TrLCgMX9A1bFBRyYjg3kDSADNrvYnLriWj%2Bn1efNF6SO5459WeoTuRp5DFLmCyKt7aS2erADo72LB0ZswNUbM%2FjjDt3R%2FS8RmKvjdwnQ4OUnMztCtV1jvwyqqGIwjtH634LT%2B5FZdPE03qni4eBuAvEvCphXs7QOV765pREWIFXOUcKs5gbmDIbkrxkryToMSji3yslLcMholgj5dbnHMwhnFSLlePkPPCXS0zs0f7WmyNEFD2hHbWDfsf9dW6xbxb6AYhLc3E5jd%2FYU%2FmcHau67EPxrFw41Z8PkvFmJ8tCWyTHFmw%2Ftm8kTd0Iiq3Ob04sy9MKX2g74GOqUBciqlgkiU%2FigUjbDxXFl7f12%2BD3ITzPjQgtNU9qsjZoRNxM9upoe1gAg%2FAibP3iasee4EEG15qJcb6aOYevy7JGJpL7%2FPqTIfosJN2FOge%2BurM%2FnL5xVu2tJYbROO67vLEvChsbsu8PHY5%2BoPyqEvipCcrCtb3i7zBFJk4oVzTLAt0UCsWwC7VbojA1elsBSYL2X43sMQgQkkZDo4PXsoLFnU%2FGCD&X-Amz-Signature=764a4bf0d54832a7acf354b85dc8fb8e57e10e8ba2fade4b9264bf8ea8c91ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
