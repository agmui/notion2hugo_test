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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JRXEAIJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDtxOItJFzxxhc7Dwn7SBoKA7OppwWuDriVfGMBA4vhXQIhAPFCIbEkn00skC8%2Ftfkd0QA2RyMb6BW63jLIcqKjW4pUKv8DCEwQABoMNjM3NDIzMTgzODA1IgwBn6GBtdFqK%2BKgp3cq3APK%2FgL1TgU7gnC854sUjvYY2HrXpLd1OzTrGjSUWmdoJD6i1FgD48uEjpKXpbr3ehTNTd%2FmNzCbMKSm9KxdxobL46nBDlRIfoK0FuXyEdqLMT1lfysoDU9ElHKfWZbGBSLDoHQqr%2BSXTU4%2BFBa802%2FflhJqtnCPw2aNpC4k5SD0ZTlDFSmCzZMLg8FkVu5dBCfIPIP%2Flkt%2FpRnfuT24QsUR%2BxL3idvkm4s17XdLKd5Frxoorz7SLk20dnxX1uhf1hryJVpx7xnhOytJs%2FFeFha1mA5RiT8U2cs3IEu7CqDMNuRSBGBr2ZDXZyBoTA1rCAznH6NuJ23n3muPcqJepqsgePTbjJ7fF0RkK3w7cdZ4z%2FY183JjFBHL07BGAs%2FWfqwJ4%2Feg6W3lZ%2FoJD8RxwlfG7du%2FSd7IVP05ixZkW7Ts4NkW5751C4zh09j67pp9kKwROOW08bTnD9FGgrV0%2F97M%2BRxgjjdxZkwBLkGRFH1AGKyMyvA6O5x4MEwjxIilLBwhH6hU7C0WgkOIl7g2o22za5keg3MhhkN2QQFCMxJE2RtiQ5ekRmKWAtW4Nwj7aUS1XDlg%2BGICGhwrPjwflUpfAauw%2B26ZstXDv099JodofTpiMlHwJGODXAJ4uTCi2IfCBjqkAeGNwJmbUOZ%2BC1g0Behq%2BlqkUWAnO4r93u91LxqPfsa6J8qlZQgxmQ8U08A5DgovIFgyFitS9aDE5AD2wk0P7bqRfthRFviZjcpxgJAzHfdlasHph2GgZUnLr4VsxgiplmEPR3sLOkj1z%2BUaV8c0EwV3meVIb5G368DqvNleBqOYhr4CTeptYaJsg%2BSGwFQGTQOzBsoo5R10UE%2BQeDStn6JC6SIo&X-Amz-Signature=f69f1d57a01a717256a3c20eadb1ce671cb3e62e959222e28e614af677a9c49c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JRXEAIJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDtxOItJFzxxhc7Dwn7SBoKA7OppwWuDriVfGMBA4vhXQIhAPFCIbEkn00skC8%2Ftfkd0QA2RyMb6BW63jLIcqKjW4pUKv8DCEwQABoMNjM3NDIzMTgzODA1IgwBn6GBtdFqK%2BKgp3cq3APK%2FgL1TgU7gnC854sUjvYY2HrXpLd1OzTrGjSUWmdoJD6i1FgD48uEjpKXpbr3ehTNTd%2FmNzCbMKSm9KxdxobL46nBDlRIfoK0FuXyEdqLMT1lfysoDU9ElHKfWZbGBSLDoHQqr%2BSXTU4%2BFBa802%2FflhJqtnCPw2aNpC4k5SD0ZTlDFSmCzZMLg8FkVu5dBCfIPIP%2Flkt%2FpRnfuT24QsUR%2BxL3idvkm4s17XdLKd5Frxoorz7SLk20dnxX1uhf1hryJVpx7xnhOytJs%2FFeFha1mA5RiT8U2cs3IEu7CqDMNuRSBGBr2ZDXZyBoTA1rCAznH6NuJ23n3muPcqJepqsgePTbjJ7fF0RkK3w7cdZ4z%2FY183JjFBHL07BGAs%2FWfqwJ4%2Feg6W3lZ%2FoJD8RxwlfG7du%2FSd7IVP05ixZkW7Ts4NkW5751C4zh09j67pp9kKwROOW08bTnD9FGgrV0%2F97M%2BRxgjjdxZkwBLkGRFH1AGKyMyvA6O5x4MEwjxIilLBwhH6hU7C0WgkOIl7g2o22za5keg3MhhkN2QQFCMxJE2RtiQ5ekRmKWAtW4Nwj7aUS1XDlg%2BGICGhwrPjwflUpfAauw%2B26ZstXDv099JodofTpiMlHwJGODXAJ4uTCi2IfCBjqkAeGNwJmbUOZ%2BC1g0Behq%2BlqkUWAnO4r93u91LxqPfsa6J8qlZQgxmQ8U08A5DgovIFgyFitS9aDE5AD2wk0P7bqRfthRFviZjcpxgJAzHfdlasHph2GgZUnLr4VsxgiplmEPR3sLOkj1z%2BUaV8c0EwV3meVIb5G368DqvNleBqOYhr4CTeptYaJsg%2BSGwFQGTQOzBsoo5R10UE%2BQeDStn6JC6SIo&X-Amz-Signature=0aa4605aca2908331ac9114e8f578d2a87c8370aa7d2585b2f7d8e862d955059&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JRXEAIJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDtxOItJFzxxhc7Dwn7SBoKA7OppwWuDriVfGMBA4vhXQIhAPFCIbEkn00skC8%2Ftfkd0QA2RyMb6BW63jLIcqKjW4pUKv8DCEwQABoMNjM3NDIzMTgzODA1IgwBn6GBtdFqK%2BKgp3cq3APK%2FgL1TgU7gnC854sUjvYY2HrXpLd1OzTrGjSUWmdoJD6i1FgD48uEjpKXpbr3ehTNTd%2FmNzCbMKSm9KxdxobL46nBDlRIfoK0FuXyEdqLMT1lfysoDU9ElHKfWZbGBSLDoHQqr%2BSXTU4%2BFBa802%2FflhJqtnCPw2aNpC4k5SD0ZTlDFSmCzZMLg8FkVu5dBCfIPIP%2Flkt%2FpRnfuT24QsUR%2BxL3idvkm4s17XdLKd5Frxoorz7SLk20dnxX1uhf1hryJVpx7xnhOytJs%2FFeFha1mA5RiT8U2cs3IEu7CqDMNuRSBGBr2ZDXZyBoTA1rCAznH6NuJ23n3muPcqJepqsgePTbjJ7fF0RkK3w7cdZ4z%2FY183JjFBHL07BGAs%2FWfqwJ4%2Feg6W3lZ%2FoJD8RxwlfG7du%2FSd7IVP05ixZkW7Ts4NkW5751C4zh09j67pp9kKwROOW08bTnD9FGgrV0%2F97M%2BRxgjjdxZkwBLkGRFH1AGKyMyvA6O5x4MEwjxIilLBwhH6hU7C0WgkOIl7g2o22za5keg3MhhkN2QQFCMxJE2RtiQ5ekRmKWAtW4Nwj7aUS1XDlg%2BGICGhwrPjwflUpfAauw%2B26ZstXDv099JodofTpiMlHwJGODXAJ4uTCi2IfCBjqkAeGNwJmbUOZ%2BC1g0Behq%2BlqkUWAnO4r93u91LxqPfsa6J8qlZQgxmQ8U08A5DgovIFgyFitS9aDE5AD2wk0P7bqRfthRFviZjcpxgJAzHfdlasHph2GgZUnLr4VsxgiplmEPR3sLOkj1z%2BUaV8c0EwV3meVIb5G368DqvNleBqOYhr4CTeptYaJsg%2BSGwFQGTQOzBsoo5R10UE%2BQeDStn6JC6SIo&X-Amz-Signature=631fafc9ce7fe89001b4b44c3cfdd2cb57091b7828298cd4014b83bcdf5d1bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JRXEAIJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDtxOItJFzxxhc7Dwn7SBoKA7OppwWuDriVfGMBA4vhXQIhAPFCIbEkn00skC8%2Ftfkd0QA2RyMb6BW63jLIcqKjW4pUKv8DCEwQABoMNjM3NDIzMTgzODA1IgwBn6GBtdFqK%2BKgp3cq3APK%2FgL1TgU7gnC854sUjvYY2HrXpLd1OzTrGjSUWmdoJD6i1FgD48uEjpKXpbr3ehTNTd%2FmNzCbMKSm9KxdxobL46nBDlRIfoK0FuXyEdqLMT1lfysoDU9ElHKfWZbGBSLDoHQqr%2BSXTU4%2BFBa802%2FflhJqtnCPw2aNpC4k5SD0ZTlDFSmCzZMLg8FkVu5dBCfIPIP%2Flkt%2FpRnfuT24QsUR%2BxL3idvkm4s17XdLKd5Frxoorz7SLk20dnxX1uhf1hryJVpx7xnhOytJs%2FFeFha1mA5RiT8U2cs3IEu7CqDMNuRSBGBr2ZDXZyBoTA1rCAznH6NuJ23n3muPcqJepqsgePTbjJ7fF0RkK3w7cdZ4z%2FY183JjFBHL07BGAs%2FWfqwJ4%2Feg6W3lZ%2FoJD8RxwlfG7du%2FSd7IVP05ixZkW7Ts4NkW5751C4zh09j67pp9kKwROOW08bTnD9FGgrV0%2F97M%2BRxgjjdxZkwBLkGRFH1AGKyMyvA6O5x4MEwjxIilLBwhH6hU7C0WgkOIl7g2o22za5keg3MhhkN2QQFCMxJE2RtiQ5ekRmKWAtW4Nwj7aUS1XDlg%2BGICGhwrPjwflUpfAauw%2B26ZstXDv099JodofTpiMlHwJGODXAJ4uTCi2IfCBjqkAeGNwJmbUOZ%2BC1g0Behq%2BlqkUWAnO4r93u91LxqPfsa6J8qlZQgxmQ8U08A5DgovIFgyFitS9aDE5AD2wk0P7bqRfthRFviZjcpxgJAzHfdlasHph2GgZUnLr4VsxgiplmEPR3sLOkj1z%2BUaV8c0EwV3meVIb5G368DqvNleBqOYhr4CTeptYaJsg%2BSGwFQGTQOzBsoo5R10UE%2BQeDStn6JC6SIo&X-Amz-Signature=348bd55c5491fc2515f862294885c4610539a0827ab2a857de8850c73f441b89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JRXEAIJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDtxOItJFzxxhc7Dwn7SBoKA7OppwWuDriVfGMBA4vhXQIhAPFCIbEkn00skC8%2Ftfkd0QA2RyMb6BW63jLIcqKjW4pUKv8DCEwQABoMNjM3NDIzMTgzODA1IgwBn6GBtdFqK%2BKgp3cq3APK%2FgL1TgU7gnC854sUjvYY2HrXpLd1OzTrGjSUWmdoJD6i1FgD48uEjpKXpbr3ehTNTd%2FmNzCbMKSm9KxdxobL46nBDlRIfoK0FuXyEdqLMT1lfysoDU9ElHKfWZbGBSLDoHQqr%2BSXTU4%2BFBa802%2FflhJqtnCPw2aNpC4k5SD0ZTlDFSmCzZMLg8FkVu5dBCfIPIP%2Flkt%2FpRnfuT24QsUR%2BxL3idvkm4s17XdLKd5Frxoorz7SLk20dnxX1uhf1hryJVpx7xnhOytJs%2FFeFha1mA5RiT8U2cs3IEu7CqDMNuRSBGBr2ZDXZyBoTA1rCAznH6NuJ23n3muPcqJepqsgePTbjJ7fF0RkK3w7cdZ4z%2FY183JjFBHL07BGAs%2FWfqwJ4%2Feg6W3lZ%2FoJD8RxwlfG7du%2FSd7IVP05ixZkW7Ts4NkW5751C4zh09j67pp9kKwROOW08bTnD9FGgrV0%2F97M%2BRxgjjdxZkwBLkGRFH1AGKyMyvA6O5x4MEwjxIilLBwhH6hU7C0WgkOIl7g2o22za5keg3MhhkN2QQFCMxJE2RtiQ5ekRmKWAtW4Nwj7aUS1XDlg%2BGICGhwrPjwflUpfAauw%2B26ZstXDv099JodofTpiMlHwJGODXAJ4uTCi2IfCBjqkAeGNwJmbUOZ%2BC1g0Behq%2BlqkUWAnO4r93u91LxqPfsa6J8qlZQgxmQ8U08A5DgovIFgyFitS9aDE5AD2wk0P7bqRfthRFviZjcpxgJAzHfdlasHph2GgZUnLr4VsxgiplmEPR3sLOkj1z%2BUaV8c0EwV3meVIb5G368DqvNleBqOYhr4CTeptYaJsg%2BSGwFQGTQOzBsoo5R10UE%2BQeDStn6JC6SIo&X-Amz-Signature=fa2f610530367a0996f52ab47d9d9fd03c2c439a7e1a4c1d941cf4e64edd67d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
