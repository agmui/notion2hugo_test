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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRRMW2X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC1r9K5iHyRdT6BRrxWsrbnRr5z4%2BgSzZEdzPgZkEpVzAIgckF09aayeGaO49CvuQ7Eo39d6R2ez5hClqzoP1udxfsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNf23ogIJxmM6h%2FTmCrcA%2F%2FoE4mrywz2Rdte1kUsDd7ms933BlYWbTgztrUaJIaNp0tfg9SNgJ%2FwqMJNY5Jo3vekow08lH26%2FGiy%2FS%2BnBggGIVJhDpyQQcAxM89QPkwTUyqOL6NwwxI0Epdi3MeHXJO8U5TejRrya%2B0w3amsgMMOlcb3mFP0a3frmfLuwLqYW3Mkrzpa78OzM4DFbkjt5m9KoTv6Z3hNQuhrY6FK%2FZw1TZN3VBBe6qF0t5aLHveIypISbwlEtGicLR3Vz2K68Iu%2FOJSgcQNO9aYxj3CCdqmvHtFWKDgsUc6wQCASiGbrGzmNQdmLRf%2BBYXLzW359J84Gp9mKyMnZ%2FoqxsUlivrLFLGUUoGhh8iGGuvw8xAMJuXKDor6eeNNi%2BA4ncmlu9CAFJR%2FEbxglZXNvX5I5%2FTp9N55wwpQbiaVpFOvFpncLgYqn2LkBsc4dBc9zrw3Z8nQZ%2FFiM5ftCLt6RJw7IMNQuMnS55SGotUIj84T1n3LFvHh0vjuGwivttdzjJef6VnNYxK3sJT1pF1As3FMdHxaX%2BkgjKMyRAb6NlY7ofFZeZq4iIO2VXkYGDgzrbpx7XQCICz9kwo1oGUJkXkrua1mOyU5H4KEYhPPuG5%2BtP7qz6tt90ySMe0BbheDhMN22tsEGOqUB09LQ7chveeP6zuILcpSDxdldKutn%2BhGOYlvFx952gtXEskJPAfJRQXj66vdkuDIo7lqkhbMZg2dbmVuEkBvwh1cBEMPx0v7%2FUoPUeFENWIgzdWy3SxhYf%2FD6sGZsf3%2FuIP2r58tRAurDXOonjxkWTSLFAOHkmFqykhTxQYcGAB4ajR8NiHv7mcQUnw5jpb2rHqGtwCJxJMr5ASyljV85rkmVMU%2BC&X-Amz-Signature=ab545082026a687b76dc3b216849045249c5a82bb60208d611729b4ffe3fa924&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRRMW2X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC1r9K5iHyRdT6BRrxWsrbnRr5z4%2BgSzZEdzPgZkEpVzAIgckF09aayeGaO49CvuQ7Eo39d6R2ez5hClqzoP1udxfsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNf23ogIJxmM6h%2FTmCrcA%2F%2FoE4mrywz2Rdte1kUsDd7ms933BlYWbTgztrUaJIaNp0tfg9SNgJ%2FwqMJNY5Jo3vekow08lH26%2FGiy%2FS%2BnBggGIVJhDpyQQcAxM89QPkwTUyqOL6NwwxI0Epdi3MeHXJO8U5TejRrya%2B0w3amsgMMOlcb3mFP0a3frmfLuwLqYW3Mkrzpa78OzM4DFbkjt5m9KoTv6Z3hNQuhrY6FK%2FZw1TZN3VBBe6qF0t5aLHveIypISbwlEtGicLR3Vz2K68Iu%2FOJSgcQNO9aYxj3CCdqmvHtFWKDgsUc6wQCASiGbrGzmNQdmLRf%2BBYXLzW359J84Gp9mKyMnZ%2FoqxsUlivrLFLGUUoGhh8iGGuvw8xAMJuXKDor6eeNNi%2BA4ncmlu9CAFJR%2FEbxglZXNvX5I5%2FTp9N55wwpQbiaVpFOvFpncLgYqn2LkBsc4dBc9zrw3Z8nQZ%2FFiM5ftCLt6RJw7IMNQuMnS55SGotUIj84T1n3LFvHh0vjuGwivttdzjJef6VnNYxK3sJT1pF1As3FMdHxaX%2BkgjKMyRAb6NlY7ofFZeZq4iIO2VXkYGDgzrbpx7XQCICz9kwo1oGUJkXkrua1mOyU5H4KEYhPPuG5%2BtP7qz6tt90ySMe0BbheDhMN22tsEGOqUB09LQ7chveeP6zuILcpSDxdldKutn%2BhGOYlvFx952gtXEskJPAfJRQXj66vdkuDIo7lqkhbMZg2dbmVuEkBvwh1cBEMPx0v7%2FUoPUeFENWIgzdWy3SxhYf%2FD6sGZsf3%2FuIP2r58tRAurDXOonjxkWTSLFAOHkmFqykhTxQYcGAB4ajR8NiHv7mcQUnw5jpb2rHqGtwCJxJMr5ASyljV85rkmVMU%2BC&X-Amz-Signature=85eacad59b16477a953be9dfc5852fc5cd1e772b7aeeff23c098a9840f317acc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRRMW2X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC1r9K5iHyRdT6BRrxWsrbnRr5z4%2BgSzZEdzPgZkEpVzAIgckF09aayeGaO49CvuQ7Eo39d6R2ez5hClqzoP1udxfsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNf23ogIJxmM6h%2FTmCrcA%2F%2FoE4mrywz2Rdte1kUsDd7ms933BlYWbTgztrUaJIaNp0tfg9SNgJ%2FwqMJNY5Jo3vekow08lH26%2FGiy%2FS%2BnBggGIVJhDpyQQcAxM89QPkwTUyqOL6NwwxI0Epdi3MeHXJO8U5TejRrya%2B0w3amsgMMOlcb3mFP0a3frmfLuwLqYW3Mkrzpa78OzM4DFbkjt5m9KoTv6Z3hNQuhrY6FK%2FZw1TZN3VBBe6qF0t5aLHveIypISbwlEtGicLR3Vz2K68Iu%2FOJSgcQNO9aYxj3CCdqmvHtFWKDgsUc6wQCASiGbrGzmNQdmLRf%2BBYXLzW359J84Gp9mKyMnZ%2FoqxsUlivrLFLGUUoGhh8iGGuvw8xAMJuXKDor6eeNNi%2BA4ncmlu9CAFJR%2FEbxglZXNvX5I5%2FTp9N55wwpQbiaVpFOvFpncLgYqn2LkBsc4dBc9zrw3Z8nQZ%2FFiM5ftCLt6RJw7IMNQuMnS55SGotUIj84T1n3LFvHh0vjuGwivttdzjJef6VnNYxK3sJT1pF1As3FMdHxaX%2BkgjKMyRAb6NlY7ofFZeZq4iIO2VXkYGDgzrbpx7XQCICz9kwo1oGUJkXkrua1mOyU5H4KEYhPPuG5%2BtP7qz6tt90ySMe0BbheDhMN22tsEGOqUB09LQ7chveeP6zuILcpSDxdldKutn%2BhGOYlvFx952gtXEskJPAfJRQXj66vdkuDIo7lqkhbMZg2dbmVuEkBvwh1cBEMPx0v7%2FUoPUeFENWIgzdWy3SxhYf%2FD6sGZsf3%2FuIP2r58tRAurDXOonjxkWTSLFAOHkmFqykhTxQYcGAB4ajR8NiHv7mcQUnw5jpb2rHqGtwCJxJMr5ASyljV85rkmVMU%2BC&X-Amz-Signature=94724ff6df6618b4652a0c7cbe4d617f0456e9cd8f31995777f172cc350f2223&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRRMW2X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC1r9K5iHyRdT6BRrxWsrbnRr5z4%2BgSzZEdzPgZkEpVzAIgckF09aayeGaO49CvuQ7Eo39d6R2ez5hClqzoP1udxfsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNf23ogIJxmM6h%2FTmCrcA%2F%2FoE4mrywz2Rdte1kUsDd7ms933BlYWbTgztrUaJIaNp0tfg9SNgJ%2FwqMJNY5Jo3vekow08lH26%2FGiy%2FS%2BnBggGIVJhDpyQQcAxM89QPkwTUyqOL6NwwxI0Epdi3MeHXJO8U5TejRrya%2B0w3amsgMMOlcb3mFP0a3frmfLuwLqYW3Mkrzpa78OzM4DFbkjt5m9KoTv6Z3hNQuhrY6FK%2FZw1TZN3VBBe6qF0t5aLHveIypISbwlEtGicLR3Vz2K68Iu%2FOJSgcQNO9aYxj3CCdqmvHtFWKDgsUc6wQCASiGbrGzmNQdmLRf%2BBYXLzW359J84Gp9mKyMnZ%2FoqxsUlivrLFLGUUoGhh8iGGuvw8xAMJuXKDor6eeNNi%2BA4ncmlu9CAFJR%2FEbxglZXNvX5I5%2FTp9N55wwpQbiaVpFOvFpncLgYqn2LkBsc4dBc9zrw3Z8nQZ%2FFiM5ftCLt6RJw7IMNQuMnS55SGotUIj84T1n3LFvHh0vjuGwivttdzjJef6VnNYxK3sJT1pF1As3FMdHxaX%2BkgjKMyRAb6NlY7ofFZeZq4iIO2VXkYGDgzrbpx7XQCICz9kwo1oGUJkXkrua1mOyU5H4KEYhPPuG5%2BtP7qz6tt90ySMe0BbheDhMN22tsEGOqUB09LQ7chveeP6zuILcpSDxdldKutn%2BhGOYlvFx952gtXEskJPAfJRQXj66vdkuDIo7lqkhbMZg2dbmVuEkBvwh1cBEMPx0v7%2FUoPUeFENWIgzdWy3SxhYf%2FD6sGZsf3%2FuIP2r58tRAurDXOonjxkWTSLFAOHkmFqykhTxQYcGAB4ajR8NiHv7mcQUnw5jpb2rHqGtwCJxJMr5ASyljV85rkmVMU%2BC&X-Amz-Signature=250da7d6d36723d588c5d4957756b8277cfcf46a4d294bb887e74ef11514a3ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRRMW2X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC1r9K5iHyRdT6BRrxWsrbnRr5z4%2BgSzZEdzPgZkEpVzAIgckF09aayeGaO49CvuQ7Eo39d6R2ez5hClqzoP1udxfsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNf23ogIJxmM6h%2FTmCrcA%2F%2FoE4mrywz2Rdte1kUsDd7ms933BlYWbTgztrUaJIaNp0tfg9SNgJ%2FwqMJNY5Jo3vekow08lH26%2FGiy%2FS%2BnBggGIVJhDpyQQcAxM89QPkwTUyqOL6NwwxI0Epdi3MeHXJO8U5TejRrya%2B0w3amsgMMOlcb3mFP0a3frmfLuwLqYW3Mkrzpa78OzM4DFbkjt5m9KoTv6Z3hNQuhrY6FK%2FZw1TZN3VBBe6qF0t5aLHveIypISbwlEtGicLR3Vz2K68Iu%2FOJSgcQNO9aYxj3CCdqmvHtFWKDgsUc6wQCASiGbrGzmNQdmLRf%2BBYXLzW359J84Gp9mKyMnZ%2FoqxsUlivrLFLGUUoGhh8iGGuvw8xAMJuXKDor6eeNNi%2BA4ncmlu9CAFJR%2FEbxglZXNvX5I5%2FTp9N55wwpQbiaVpFOvFpncLgYqn2LkBsc4dBc9zrw3Z8nQZ%2FFiM5ftCLt6RJw7IMNQuMnS55SGotUIj84T1n3LFvHh0vjuGwivttdzjJef6VnNYxK3sJT1pF1As3FMdHxaX%2BkgjKMyRAb6NlY7ofFZeZq4iIO2VXkYGDgzrbpx7XQCICz9kwo1oGUJkXkrua1mOyU5H4KEYhPPuG5%2BtP7qz6tt90ySMe0BbheDhMN22tsEGOqUB09LQ7chveeP6zuILcpSDxdldKutn%2BhGOYlvFx952gtXEskJPAfJRQXj66vdkuDIo7lqkhbMZg2dbmVuEkBvwh1cBEMPx0v7%2FUoPUeFENWIgzdWy3SxhYf%2FD6sGZsf3%2FuIP2r58tRAurDXOonjxkWTSLFAOHkmFqykhTxQYcGAB4ajR8NiHv7mcQUnw5jpb2rHqGtwCJxJMr5ASyljV85rkmVMU%2BC&X-Amz-Signature=1cdccad8eb2d6fd2f20e04369d0c707156576693c4a8ee4b5e11e0328d1ad8ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
