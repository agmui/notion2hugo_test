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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCKWHYK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCte7yZGMJAhqqiMzdJTxTA87hwVY3UHJSE9GpYTpB2AiEArnJ%2FssZWyJ%2FwHJGHQhaaSOA4yRIQQZzgkz47ZFhzCGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKZwFNaz1b9qVkzaLCrcA50%2BiZbTiLKb%2FwR%2FgokAPSYd%2Bse7gUhkoMcZ0MtF5tLvDSBioAMMhHh0Vr4Sel6eb9k9XI8PbzB9yJwP%2BkJMSRcLD34u82Ni0ZpKnSbKPcqi5S3bO%2FFBSZvV0L663ql5Uj0xZ9%2FsJakUl9Lu9mStXK7g3FyGz01qHFoo2%2FhhZJ9wmHvmyi95VNoeVKcnFFyCbsiNS8HeXvONDbRjXMiyxtnzJuGSK436GIW%2FIlDLGThmRuN23CWpEfN8ghXajlAuiyGyRkP5RSwm%2FyEM%2F312TeT0AV1wur6cE1405SfP%2BIj1kvcoIaD3zBGNDLOuTwIizLcgZa1Xc1%2FBXfWVIQF2S7hxm12xAGVl2i7Qa7IeNqEw8%2BoRLS5Q%2FsvNdfke1TKATtBTCHGa29860mhmJojGG9NSrfFRbXD3PfMENDSDwLnql%2FQJDLSPH8qSOmRxYxvwWvqBoqJN50Y15DcZzPGI7Ce6B%2B7vU9ueg5KyL1rBhVqCOenC%2BGPySZep9VkLH7sXfxraPSGyKJaDjZwkdxNAGM7Yw1Ai524ledn%2FGPJZg2KYDYdFtvxKoiSoDSiMLkU2RWjMLPBHQdMxFuC66yQMOjf83mbXn3UPgEEy65eSQxr4Czu7cItJyKs1yPb%2BMLO57sAGOqUBz%2BuZI1WWOsCXXUyjxQFLaoybggbOB3rEFkAXw4d7w4okUIo%2B7SU2fI0kqnC80yz7OQTYieBLep7B8yu9nc8gc2JtiitJiuXDcks1JoB7giNWXAF1rqGtTVoFTHBS2AVw50upCn0AJAFfxXSTUqYPHEteCxug%2FqJWjQO3ql4glMb5fMUckRmvvSIHgn6TzI1bR%2FpVL%2BNxYYf5cyMfsr1vN9cpFb1c&X-Amz-Signature=f9c5f20dd9223456dc797b1e90e506738347a604b022979911ef5bd0f11ffab0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCKWHYK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCte7yZGMJAhqqiMzdJTxTA87hwVY3UHJSE9GpYTpB2AiEArnJ%2FssZWyJ%2FwHJGHQhaaSOA4yRIQQZzgkz47ZFhzCGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKZwFNaz1b9qVkzaLCrcA50%2BiZbTiLKb%2FwR%2FgokAPSYd%2Bse7gUhkoMcZ0MtF5tLvDSBioAMMhHh0Vr4Sel6eb9k9XI8PbzB9yJwP%2BkJMSRcLD34u82Ni0ZpKnSbKPcqi5S3bO%2FFBSZvV0L663ql5Uj0xZ9%2FsJakUl9Lu9mStXK7g3FyGz01qHFoo2%2FhhZJ9wmHvmyi95VNoeVKcnFFyCbsiNS8HeXvONDbRjXMiyxtnzJuGSK436GIW%2FIlDLGThmRuN23CWpEfN8ghXajlAuiyGyRkP5RSwm%2FyEM%2F312TeT0AV1wur6cE1405SfP%2BIj1kvcoIaD3zBGNDLOuTwIizLcgZa1Xc1%2FBXfWVIQF2S7hxm12xAGVl2i7Qa7IeNqEw8%2BoRLS5Q%2FsvNdfke1TKATtBTCHGa29860mhmJojGG9NSrfFRbXD3PfMENDSDwLnql%2FQJDLSPH8qSOmRxYxvwWvqBoqJN50Y15DcZzPGI7Ce6B%2B7vU9ueg5KyL1rBhVqCOenC%2BGPySZep9VkLH7sXfxraPSGyKJaDjZwkdxNAGM7Yw1Ai524ledn%2FGPJZg2KYDYdFtvxKoiSoDSiMLkU2RWjMLPBHQdMxFuC66yQMOjf83mbXn3UPgEEy65eSQxr4Czu7cItJyKs1yPb%2BMLO57sAGOqUBz%2BuZI1WWOsCXXUyjxQFLaoybggbOB3rEFkAXw4d7w4okUIo%2B7SU2fI0kqnC80yz7OQTYieBLep7B8yu9nc8gc2JtiitJiuXDcks1JoB7giNWXAF1rqGtTVoFTHBS2AVw50upCn0AJAFfxXSTUqYPHEteCxug%2FqJWjQO3ql4glMb5fMUckRmvvSIHgn6TzI1bR%2FpVL%2BNxYYf5cyMfsr1vN9cpFb1c&X-Amz-Signature=74a56a26c3b236d47ee886a74414769f84ada90afd448e4e8b8668436bda70eb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCKWHYK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCte7yZGMJAhqqiMzdJTxTA87hwVY3UHJSE9GpYTpB2AiEArnJ%2FssZWyJ%2FwHJGHQhaaSOA4yRIQQZzgkz47ZFhzCGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKZwFNaz1b9qVkzaLCrcA50%2BiZbTiLKb%2FwR%2FgokAPSYd%2Bse7gUhkoMcZ0MtF5tLvDSBioAMMhHh0Vr4Sel6eb9k9XI8PbzB9yJwP%2BkJMSRcLD34u82Ni0ZpKnSbKPcqi5S3bO%2FFBSZvV0L663ql5Uj0xZ9%2FsJakUl9Lu9mStXK7g3FyGz01qHFoo2%2FhhZJ9wmHvmyi95VNoeVKcnFFyCbsiNS8HeXvONDbRjXMiyxtnzJuGSK436GIW%2FIlDLGThmRuN23CWpEfN8ghXajlAuiyGyRkP5RSwm%2FyEM%2F312TeT0AV1wur6cE1405SfP%2BIj1kvcoIaD3zBGNDLOuTwIizLcgZa1Xc1%2FBXfWVIQF2S7hxm12xAGVl2i7Qa7IeNqEw8%2BoRLS5Q%2FsvNdfke1TKATtBTCHGa29860mhmJojGG9NSrfFRbXD3PfMENDSDwLnql%2FQJDLSPH8qSOmRxYxvwWvqBoqJN50Y15DcZzPGI7Ce6B%2B7vU9ueg5KyL1rBhVqCOenC%2BGPySZep9VkLH7sXfxraPSGyKJaDjZwkdxNAGM7Yw1Ai524ledn%2FGPJZg2KYDYdFtvxKoiSoDSiMLkU2RWjMLPBHQdMxFuC66yQMOjf83mbXn3UPgEEy65eSQxr4Czu7cItJyKs1yPb%2BMLO57sAGOqUBz%2BuZI1WWOsCXXUyjxQFLaoybggbOB3rEFkAXw4d7w4okUIo%2B7SU2fI0kqnC80yz7OQTYieBLep7B8yu9nc8gc2JtiitJiuXDcks1JoB7giNWXAF1rqGtTVoFTHBS2AVw50upCn0AJAFfxXSTUqYPHEteCxug%2FqJWjQO3ql4glMb5fMUckRmvvSIHgn6TzI1bR%2FpVL%2BNxYYf5cyMfsr1vN9cpFb1c&X-Amz-Signature=5fefef5f5478ab26cf7bee888c9972037b29c20f64ee019121bc43c777356004&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCKWHYK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCte7yZGMJAhqqiMzdJTxTA87hwVY3UHJSE9GpYTpB2AiEArnJ%2FssZWyJ%2FwHJGHQhaaSOA4yRIQQZzgkz47ZFhzCGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKZwFNaz1b9qVkzaLCrcA50%2BiZbTiLKb%2FwR%2FgokAPSYd%2Bse7gUhkoMcZ0MtF5tLvDSBioAMMhHh0Vr4Sel6eb9k9XI8PbzB9yJwP%2BkJMSRcLD34u82Ni0ZpKnSbKPcqi5S3bO%2FFBSZvV0L663ql5Uj0xZ9%2FsJakUl9Lu9mStXK7g3FyGz01qHFoo2%2FhhZJ9wmHvmyi95VNoeVKcnFFyCbsiNS8HeXvONDbRjXMiyxtnzJuGSK436GIW%2FIlDLGThmRuN23CWpEfN8ghXajlAuiyGyRkP5RSwm%2FyEM%2F312TeT0AV1wur6cE1405SfP%2BIj1kvcoIaD3zBGNDLOuTwIizLcgZa1Xc1%2FBXfWVIQF2S7hxm12xAGVl2i7Qa7IeNqEw8%2BoRLS5Q%2FsvNdfke1TKATtBTCHGa29860mhmJojGG9NSrfFRbXD3PfMENDSDwLnql%2FQJDLSPH8qSOmRxYxvwWvqBoqJN50Y15DcZzPGI7Ce6B%2B7vU9ueg5KyL1rBhVqCOenC%2BGPySZep9VkLH7sXfxraPSGyKJaDjZwkdxNAGM7Yw1Ai524ledn%2FGPJZg2KYDYdFtvxKoiSoDSiMLkU2RWjMLPBHQdMxFuC66yQMOjf83mbXn3UPgEEy65eSQxr4Czu7cItJyKs1yPb%2BMLO57sAGOqUBz%2BuZI1WWOsCXXUyjxQFLaoybggbOB3rEFkAXw4d7w4okUIo%2B7SU2fI0kqnC80yz7OQTYieBLep7B8yu9nc8gc2JtiitJiuXDcks1JoB7giNWXAF1rqGtTVoFTHBS2AVw50upCn0AJAFfxXSTUqYPHEteCxug%2FqJWjQO3ql4glMb5fMUckRmvvSIHgn6TzI1bR%2FpVL%2BNxYYf5cyMfsr1vN9cpFb1c&X-Amz-Signature=90a295829adb01f3d85b58b13e6c22b67b0d53b5131f77b6b7b55d2677e8781e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCKWHYK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCte7yZGMJAhqqiMzdJTxTA87hwVY3UHJSE9GpYTpB2AiEArnJ%2FssZWyJ%2FwHJGHQhaaSOA4yRIQQZzgkz47ZFhzCGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKZwFNaz1b9qVkzaLCrcA50%2BiZbTiLKb%2FwR%2FgokAPSYd%2Bse7gUhkoMcZ0MtF5tLvDSBioAMMhHh0Vr4Sel6eb9k9XI8PbzB9yJwP%2BkJMSRcLD34u82Ni0ZpKnSbKPcqi5S3bO%2FFBSZvV0L663ql5Uj0xZ9%2FsJakUl9Lu9mStXK7g3FyGz01qHFoo2%2FhhZJ9wmHvmyi95VNoeVKcnFFyCbsiNS8HeXvONDbRjXMiyxtnzJuGSK436GIW%2FIlDLGThmRuN23CWpEfN8ghXajlAuiyGyRkP5RSwm%2FyEM%2F312TeT0AV1wur6cE1405SfP%2BIj1kvcoIaD3zBGNDLOuTwIizLcgZa1Xc1%2FBXfWVIQF2S7hxm12xAGVl2i7Qa7IeNqEw8%2BoRLS5Q%2FsvNdfke1TKATtBTCHGa29860mhmJojGG9NSrfFRbXD3PfMENDSDwLnql%2FQJDLSPH8qSOmRxYxvwWvqBoqJN50Y15DcZzPGI7Ce6B%2B7vU9ueg5KyL1rBhVqCOenC%2BGPySZep9VkLH7sXfxraPSGyKJaDjZwkdxNAGM7Yw1Ai524ledn%2FGPJZg2KYDYdFtvxKoiSoDSiMLkU2RWjMLPBHQdMxFuC66yQMOjf83mbXn3UPgEEy65eSQxr4Czu7cItJyKs1yPb%2BMLO57sAGOqUBz%2BuZI1WWOsCXXUyjxQFLaoybggbOB3rEFkAXw4d7w4okUIo%2B7SU2fI0kqnC80yz7OQTYieBLep7B8yu9nc8gc2JtiitJiuXDcks1JoB7giNWXAF1rqGtTVoFTHBS2AVw50upCn0AJAFfxXSTUqYPHEteCxug%2FqJWjQO3ql4glMb5fMUckRmvvSIHgn6TzI1bR%2FpVL%2BNxYYf5cyMfsr1vN9cpFb1c&X-Amz-Signature=82ce4470360fe616dd5ec5aee70f1441dc047db79ad094466985a2c76bb60871&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
