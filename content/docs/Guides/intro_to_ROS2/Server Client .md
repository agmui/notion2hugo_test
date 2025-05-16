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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK3U4W4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIhj%2BbB402OUU1sJVp9wGRZ5%2F8c6MoO%2BIOjNM7nrUu3AiEA3AwsdNOlgiroG8YpQzKoupa15oo%2FylYCYAB9i2%2F486cq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCk6Ydf3QWzX3xOuLCrcAzeKDiKGT8NGM3RVQPfdC12k1ReO2SSUgFrnkl8YTL%2FAHhGbxd%2BxxMoSxLY1hmh5N3gu0sJo75GOP%2FJZn%2Fk3CEk89Y7%2BMstmUjVtGGxf%2Bz8BDJy5GjAKlwl5btT3EFuD9RGZLUAL1adL%2Bi9omz8mgOTe9zfHJrruSBQcWhl5qoh2wXHhLqyMdVVleyh1%2FfodXMu2kDluxP4VccUsHYs56HjaFRILp06mmG2kMiIs4nFTXXHHfLAYcLkoyCOK9XS9Qt048ftQhxMeDCvU%2FNAg58l6FxO24f2DCKC4Kiv88XIT3sMjPW11%2FvPh2s2vTRT7B7G9UzW5XAx6dJGCLV3IEurCL%2F1ElgMIwGn8RRAg%2FpDZhuoZif0DqufwREa%2Ft68MVkynYVK8CckuZvDSfwyEVq%2BwBN0bPjcjGvywvWZ3B47IwQtjnymGH9wXrwyWYyt5kHRlswwRgd8MTVU6tJ1F%2F6kQFNU0C9HCNujNjkn4Qy6HPDTmIUstZYpStF7kUGWHk6%2F046734hUgZ71qZToX2fBGzGruAmogscDICNOSjIFJkWFeG%2BEY%2FGlsDbkdMcsw%2BZuJ50bRpHWESxAkrEWhn07t8ci8sa3uTaWEvIN7diFVaxBkumTN8EJjkSl0MOKBncEGOqUBxgyIG452MJtNQNgy1RjTELfylZ1amzyC%2FjzHAFCVGCmIR%2BNOp4uyNsSJIber3I9qMb8U9k7SfvUvmmFcfe%2B70q0bMZFg9%2FNoCdg2NKWOonkOjX2gf5S0ub6y9XTgD%2BQq9j%2BMpmZMloFk8wzB0ZGd1v8wk2AFLtNbwaj7MxSBSziWDPA367gdHjiEj8i40Bc2AAY3ZGFn1dgo5iqDO%2Fmf3pdLF9hb&X-Amz-Signature=cc085153a33fcb5f18ae38288642d86e2c5f12f5150369c2576b5554a8e2bc91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK3U4W4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIhj%2BbB402OUU1sJVp9wGRZ5%2F8c6MoO%2BIOjNM7nrUu3AiEA3AwsdNOlgiroG8YpQzKoupa15oo%2FylYCYAB9i2%2F486cq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCk6Ydf3QWzX3xOuLCrcAzeKDiKGT8NGM3RVQPfdC12k1ReO2SSUgFrnkl8YTL%2FAHhGbxd%2BxxMoSxLY1hmh5N3gu0sJo75GOP%2FJZn%2Fk3CEk89Y7%2BMstmUjVtGGxf%2Bz8BDJy5GjAKlwl5btT3EFuD9RGZLUAL1adL%2Bi9omz8mgOTe9zfHJrruSBQcWhl5qoh2wXHhLqyMdVVleyh1%2FfodXMu2kDluxP4VccUsHYs56HjaFRILp06mmG2kMiIs4nFTXXHHfLAYcLkoyCOK9XS9Qt048ftQhxMeDCvU%2FNAg58l6FxO24f2DCKC4Kiv88XIT3sMjPW11%2FvPh2s2vTRT7B7G9UzW5XAx6dJGCLV3IEurCL%2F1ElgMIwGn8RRAg%2FpDZhuoZif0DqufwREa%2Ft68MVkynYVK8CckuZvDSfwyEVq%2BwBN0bPjcjGvywvWZ3B47IwQtjnymGH9wXrwyWYyt5kHRlswwRgd8MTVU6tJ1F%2F6kQFNU0C9HCNujNjkn4Qy6HPDTmIUstZYpStF7kUGWHk6%2F046734hUgZ71qZToX2fBGzGruAmogscDICNOSjIFJkWFeG%2BEY%2FGlsDbkdMcsw%2BZuJ50bRpHWESxAkrEWhn07t8ci8sa3uTaWEvIN7diFVaxBkumTN8EJjkSl0MOKBncEGOqUBxgyIG452MJtNQNgy1RjTELfylZ1amzyC%2FjzHAFCVGCmIR%2BNOp4uyNsSJIber3I9qMb8U9k7SfvUvmmFcfe%2B70q0bMZFg9%2FNoCdg2NKWOonkOjX2gf5S0ub6y9XTgD%2BQq9j%2BMpmZMloFk8wzB0ZGd1v8wk2AFLtNbwaj7MxSBSziWDPA367gdHjiEj8i40Bc2AAY3ZGFn1dgo5iqDO%2Fmf3pdLF9hb&X-Amz-Signature=96ee8e8daa7e0543dfcbe7146015636c3353bc47a18425a639c2052867a1a4da&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK3U4W4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIhj%2BbB402OUU1sJVp9wGRZ5%2F8c6MoO%2BIOjNM7nrUu3AiEA3AwsdNOlgiroG8YpQzKoupa15oo%2FylYCYAB9i2%2F486cq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCk6Ydf3QWzX3xOuLCrcAzeKDiKGT8NGM3RVQPfdC12k1ReO2SSUgFrnkl8YTL%2FAHhGbxd%2BxxMoSxLY1hmh5N3gu0sJo75GOP%2FJZn%2Fk3CEk89Y7%2BMstmUjVtGGxf%2Bz8BDJy5GjAKlwl5btT3EFuD9RGZLUAL1adL%2Bi9omz8mgOTe9zfHJrruSBQcWhl5qoh2wXHhLqyMdVVleyh1%2FfodXMu2kDluxP4VccUsHYs56HjaFRILp06mmG2kMiIs4nFTXXHHfLAYcLkoyCOK9XS9Qt048ftQhxMeDCvU%2FNAg58l6FxO24f2DCKC4Kiv88XIT3sMjPW11%2FvPh2s2vTRT7B7G9UzW5XAx6dJGCLV3IEurCL%2F1ElgMIwGn8RRAg%2FpDZhuoZif0DqufwREa%2Ft68MVkynYVK8CckuZvDSfwyEVq%2BwBN0bPjcjGvywvWZ3B47IwQtjnymGH9wXrwyWYyt5kHRlswwRgd8MTVU6tJ1F%2F6kQFNU0C9HCNujNjkn4Qy6HPDTmIUstZYpStF7kUGWHk6%2F046734hUgZ71qZToX2fBGzGruAmogscDICNOSjIFJkWFeG%2BEY%2FGlsDbkdMcsw%2BZuJ50bRpHWESxAkrEWhn07t8ci8sa3uTaWEvIN7diFVaxBkumTN8EJjkSl0MOKBncEGOqUBxgyIG452MJtNQNgy1RjTELfylZ1amzyC%2FjzHAFCVGCmIR%2BNOp4uyNsSJIber3I9qMb8U9k7SfvUvmmFcfe%2B70q0bMZFg9%2FNoCdg2NKWOonkOjX2gf5S0ub6y9XTgD%2BQq9j%2BMpmZMloFk8wzB0ZGd1v8wk2AFLtNbwaj7MxSBSziWDPA367gdHjiEj8i40Bc2AAY3ZGFn1dgo5iqDO%2Fmf3pdLF9hb&X-Amz-Signature=52941fcd897b3493d7a8178a37d030e1ed3527d74ec27181b2acf427e78d25ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK3U4W4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIhj%2BbB402OUU1sJVp9wGRZ5%2F8c6MoO%2BIOjNM7nrUu3AiEA3AwsdNOlgiroG8YpQzKoupa15oo%2FylYCYAB9i2%2F486cq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCk6Ydf3QWzX3xOuLCrcAzeKDiKGT8NGM3RVQPfdC12k1ReO2SSUgFrnkl8YTL%2FAHhGbxd%2BxxMoSxLY1hmh5N3gu0sJo75GOP%2FJZn%2Fk3CEk89Y7%2BMstmUjVtGGxf%2Bz8BDJy5GjAKlwl5btT3EFuD9RGZLUAL1adL%2Bi9omz8mgOTe9zfHJrruSBQcWhl5qoh2wXHhLqyMdVVleyh1%2FfodXMu2kDluxP4VccUsHYs56HjaFRILp06mmG2kMiIs4nFTXXHHfLAYcLkoyCOK9XS9Qt048ftQhxMeDCvU%2FNAg58l6FxO24f2DCKC4Kiv88XIT3sMjPW11%2FvPh2s2vTRT7B7G9UzW5XAx6dJGCLV3IEurCL%2F1ElgMIwGn8RRAg%2FpDZhuoZif0DqufwREa%2Ft68MVkynYVK8CckuZvDSfwyEVq%2BwBN0bPjcjGvywvWZ3B47IwQtjnymGH9wXrwyWYyt5kHRlswwRgd8MTVU6tJ1F%2F6kQFNU0C9HCNujNjkn4Qy6HPDTmIUstZYpStF7kUGWHk6%2F046734hUgZ71qZToX2fBGzGruAmogscDICNOSjIFJkWFeG%2BEY%2FGlsDbkdMcsw%2BZuJ50bRpHWESxAkrEWhn07t8ci8sa3uTaWEvIN7diFVaxBkumTN8EJjkSl0MOKBncEGOqUBxgyIG452MJtNQNgy1RjTELfylZ1amzyC%2FjzHAFCVGCmIR%2BNOp4uyNsSJIber3I9qMb8U9k7SfvUvmmFcfe%2B70q0bMZFg9%2FNoCdg2NKWOonkOjX2gf5S0ub6y9XTgD%2BQq9j%2BMpmZMloFk8wzB0ZGd1v8wk2AFLtNbwaj7MxSBSziWDPA367gdHjiEj8i40Bc2AAY3ZGFn1dgo5iqDO%2Fmf3pdLF9hb&X-Amz-Signature=f779c439c0c7b684183cf75ec530d1b0acdc8ad494f281aefc622fdb8ea7fcb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK3U4W4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIhj%2BbB402OUU1sJVp9wGRZ5%2F8c6MoO%2BIOjNM7nrUu3AiEA3AwsdNOlgiroG8YpQzKoupa15oo%2FylYCYAB9i2%2F486cq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCk6Ydf3QWzX3xOuLCrcAzeKDiKGT8NGM3RVQPfdC12k1ReO2SSUgFrnkl8YTL%2FAHhGbxd%2BxxMoSxLY1hmh5N3gu0sJo75GOP%2FJZn%2Fk3CEk89Y7%2BMstmUjVtGGxf%2Bz8BDJy5GjAKlwl5btT3EFuD9RGZLUAL1adL%2Bi9omz8mgOTe9zfHJrruSBQcWhl5qoh2wXHhLqyMdVVleyh1%2FfodXMu2kDluxP4VccUsHYs56HjaFRILp06mmG2kMiIs4nFTXXHHfLAYcLkoyCOK9XS9Qt048ftQhxMeDCvU%2FNAg58l6FxO24f2DCKC4Kiv88XIT3sMjPW11%2FvPh2s2vTRT7B7G9UzW5XAx6dJGCLV3IEurCL%2F1ElgMIwGn8RRAg%2FpDZhuoZif0DqufwREa%2Ft68MVkynYVK8CckuZvDSfwyEVq%2BwBN0bPjcjGvywvWZ3B47IwQtjnymGH9wXrwyWYyt5kHRlswwRgd8MTVU6tJ1F%2F6kQFNU0C9HCNujNjkn4Qy6HPDTmIUstZYpStF7kUGWHk6%2F046734hUgZ71qZToX2fBGzGruAmogscDICNOSjIFJkWFeG%2BEY%2FGlsDbkdMcsw%2BZuJ50bRpHWESxAkrEWhn07t8ci8sa3uTaWEvIN7diFVaxBkumTN8EJjkSl0MOKBncEGOqUBxgyIG452MJtNQNgy1RjTELfylZ1amzyC%2FjzHAFCVGCmIR%2BNOp4uyNsSJIber3I9qMb8U9k7SfvUvmmFcfe%2B70q0bMZFg9%2FNoCdg2NKWOonkOjX2gf5S0ub6y9XTgD%2BQq9j%2BMpmZMloFk8wzB0ZGd1v8wk2AFLtNbwaj7MxSBSziWDPA367gdHjiEj8i40Bc2AAY3ZGFn1dgo5iqDO%2Fmf3pdLF9hb&X-Amz-Signature=8d844a0aae0aece32f316b084a3402dc0f77e96326f96514cd1285c3e3a7a398&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
