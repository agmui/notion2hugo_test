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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623J7WE4V%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGL5fM8whd%2B8Ji7L2FDGPdCMXE1L%2FgafT2RvgnxJrOsNAiEA4zG1qyjESwoy0CW1jvD0xuIQr1%2ForWypGOSP5%2BcPR%2Fkq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNMrQLRqvjvScanBGyrcA1Gv5qrQqSQaEuYjT71jcfQYsDp7ZAdNViJOZ5cw1%2Fw9pSVTAjGjhBK1I9ci%2FQHbfKLZKEa62xIL57JQSDFCgusBQ3F19bCjWracsv8JMNXdC0zkisqWB7ltAiteeFUgInMxab8eThPBd93S6i2ABkJmpRfHGnNCMzurSL%2F4Ngqcoh7J1L6OWL7GgcX4LF8rFfiH418COKKlpEGkCAz20lNiwck5Zhc7wt%2BXUM1YdXH2F5SrAkD0TxuCYLo%2BuEeXygtZQtcbfgYwj9tT65ToaVvJG4JuzIxzGk%2B%2F0eSM3ymbobgPfimfYVVd8HmRCFDIOugZaCt3iDKikMj2STJS7eAxMt0TYC7kZ5lpfoHuUQm12waLgrkS1QEAw4WKHCrMG9N0SlGpHxYkZC2ERoGc3HOQ24rXGjyn1e97DOPPHjYnGbXA%2BR2oA4mHBo07moOQE4N5nFtYnALKJ7Daqvw1%2BhUCagfgiy8XMMFy1qKxdGJ4rPJm19mMcxrUf2jDdCtUDxnU2QfH0KKJEpBYq9oesnIo6Ml4Tf0Ez7bbgzZ4xsTJW0Czh41CPL0VZOVaVUHipDqaMj1IrUrY%2FKy5C8lhI8m3m7BKu8gaLmUgwe%2Fe5aSOvZNSOWCFkwUNBaUoMJey6cIGOqUBKPNTxD97Wx%2FiB%2FOKTZolI8dPk5y6wtlpiCBqrkdBn4lScptEeUwTjEPqMj4kP4bzI7HVP79kExf9ic9V8faVgLusznqHRJWfIHETlQEezduar%2FTxWjF42QGSZF8cwRveSt0ZhEV1shj4iVFBKf%2B%2F392Bsi4PGJbmbsdmO%2B5QxdSLRMjtJFmAcXswXbOv%2FHX6X1VDb7EHyZ3RmMwjjnjNYcWPJtW6&X-Amz-Signature=373b5f7d850ce33aeb43fb49dd8b2163319ca853a7793cd3baae237bfdcb0dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623J7WE4V%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGL5fM8whd%2B8Ji7L2FDGPdCMXE1L%2FgafT2RvgnxJrOsNAiEA4zG1qyjESwoy0CW1jvD0xuIQr1%2ForWypGOSP5%2BcPR%2Fkq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNMrQLRqvjvScanBGyrcA1Gv5qrQqSQaEuYjT71jcfQYsDp7ZAdNViJOZ5cw1%2Fw9pSVTAjGjhBK1I9ci%2FQHbfKLZKEa62xIL57JQSDFCgusBQ3F19bCjWracsv8JMNXdC0zkisqWB7ltAiteeFUgInMxab8eThPBd93S6i2ABkJmpRfHGnNCMzurSL%2F4Ngqcoh7J1L6OWL7GgcX4LF8rFfiH418COKKlpEGkCAz20lNiwck5Zhc7wt%2BXUM1YdXH2F5SrAkD0TxuCYLo%2BuEeXygtZQtcbfgYwj9tT65ToaVvJG4JuzIxzGk%2B%2F0eSM3ymbobgPfimfYVVd8HmRCFDIOugZaCt3iDKikMj2STJS7eAxMt0TYC7kZ5lpfoHuUQm12waLgrkS1QEAw4WKHCrMG9N0SlGpHxYkZC2ERoGc3HOQ24rXGjyn1e97DOPPHjYnGbXA%2BR2oA4mHBo07moOQE4N5nFtYnALKJ7Daqvw1%2BhUCagfgiy8XMMFy1qKxdGJ4rPJm19mMcxrUf2jDdCtUDxnU2QfH0KKJEpBYq9oesnIo6Ml4Tf0Ez7bbgzZ4xsTJW0Czh41CPL0VZOVaVUHipDqaMj1IrUrY%2FKy5C8lhI8m3m7BKu8gaLmUgwe%2Fe5aSOvZNSOWCFkwUNBaUoMJey6cIGOqUBKPNTxD97Wx%2FiB%2FOKTZolI8dPk5y6wtlpiCBqrkdBn4lScptEeUwTjEPqMj4kP4bzI7HVP79kExf9ic9V8faVgLusznqHRJWfIHETlQEezduar%2FTxWjF42QGSZF8cwRveSt0ZhEV1shj4iVFBKf%2B%2F392Bsi4PGJbmbsdmO%2B5QxdSLRMjtJFmAcXswXbOv%2FHX6X1VDb7EHyZ3RmMwjjnjNYcWPJtW6&X-Amz-Signature=ca028c8092b1b2646b3484db5253d59ea718994028bdc40d236d07c5d8f180e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623J7WE4V%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGL5fM8whd%2B8Ji7L2FDGPdCMXE1L%2FgafT2RvgnxJrOsNAiEA4zG1qyjESwoy0CW1jvD0xuIQr1%2ForWypGOSP5%2BcPR%2Fkq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNMrQLRqvjvScanBGyrcA1Gv5qrQqSQaEuYjT71jcfQYsDp7ZAdNViJOZ5cw1%2Fw9pSVTAjGjhBK1I9ci%2FQHbfKLZKEa62xIL57JQSDFCgusBQ3F19bCjWracsv8JMNXdC0zkisqWB7ltAiteeFUgInMxab8eThPBd93S6i2ABkJmpRfHGnNCMzurSL%2F4Ngqcoh7J1L6OWL7GgcX4LF8rFfiH418COKKlpEGkCAz20lNiwck5Zhc7wt%2BXUM1YdXH2F5SrAkD0TxuCYLo%2BuEeXygtZQtcbfgYwj9tT65ToaVvJG4JuzIxzGk%2B%2F0eSM3ymbobgPfimfYVVd8HmRCFDIOugZaCt3iDKikMj2STJS7eAxMt0TYC7kZ5lpfoHuUQm12waLgrkS1QEAw4WKHCrMG9N0SlGpHxYkZC2ERoGc3HOQ24rXGjyn1e97DOPPHjYnGbXA%2BR2oA4mHBo07moOQE4N5nFtYnALKJ7Daqvw1%2BhUCagfgiy8XMMFy1qKxdGJ4rPJm19mMcxrUf2jDdCtUDxnU2QfH0KKJEpBYq9oesnIo6Ml4Tf0Ez7bbgzZ4xsTJW0Czh41CPL0VZOVaVUHipDqaMj1IrUrY%2FKy5C8lhI8m3m7BKu8gaLmUgwe%2Fe5aSOvZNSOWCFkwUNBaUoMJey6cIGOqUBKPNTxD97Wx%2FiB%2FOKTZolI8dPk5y6wtlpiCBqrkdBn4lScptEeUwTjEPqMj4kP4bzI7HVP79kExf9ic9V8faVgLusznqHRJWfIHETlQEezduar%2FTxWjF42QGSZF8cwRveSt0ZhEV1shj4iVFBKf%2B%2F392Bsi4PGJbmbsdmO%2B5QxdSLRMjtJFmAcXswXbOv%2FHX6X1VDb7EHyZ3RmMwjjnjNYcWPJtW6&X-Amz-Signature=50b64daf6d1269144d2b03022ca0aa1139a7e3673e5392a3f7ac8b0ec2afa13c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623J7WE4V%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGL5fM8whd%2B8Ji7L2FDGPdCMXE1L%2FgafT2RvgnxJrOsNAiEA4zG1qyjESwoy0CW1jvD0xuIQr1%2ForWypGOSP5%2BcPR%2Fkq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNMrQLRqvjvScanBGyrcA1Gv5qrQqSQaEuYjT71jcfQYsDp7ZAdNViJOZ5cw1%2Fw9pSVTAjGjhBK1I9ci%2FQHbfKLZKEa62xIL57JQSDFCgusBQ3F19bCjWracsv8JMNXdC0zkisqWB7ltAiteeFUgInMxab8eThPBd93S6i2ABkJmpRfHGnNCMzurSL%2F4Ngqcoh7J1L6OWL7GgcX4LF8rFfiH418COKKlpEGkCAz20lNiwck5Zhc7wt%2BXUM1YdXH2F5SrAkD0TxuCYLo%2BuEeXygtZQtcbfgYwj9tT65ToaVvJG4JuzIxzGk%2B%2F0eSM3ymbobgPfimfYVVd8HmRCFDIOugZaCt3iDKikMj2STJS7eAxMt0TYC7kZ5lpfoHuUQm12waLgrkS1QEAw4WKHCrMG9N0SlGpHxYkZC2ERoGc3HOQ24rXGjyn1e97DOPPHjYnGbXA%2BR2oA4mHBo07moOQE4N5nFtYnALKJ7Daqvw1%2BhUCagfgiy8XMMFy1qKxdGJ4rPJm19mMcxrUf2jDdCtUDxnU2QfH0KKJEpBYq9oesnIo6Ml4Tf0Ez7bbgzZ4xsTJW0Czh41CPL0VZOVaVUHipDqaMj1IrUrY%2FKy5C8lhI8m3m7BKu8gaLmUgwe%2Fe5aSOvZNSOWCFkwUNBaUoMJey6cIGOqUBKPNTxD97Wx%2FiB%2FOKTZolI8dPk5y6wtlpiCBqrkdBn4lScptEeUwTjEPqMj4kP4bzI7HVP79kExf9ic9V8faVgLusznqHRJWfIHETlQEezduar%2FTxWjF42QGSZF8cwRveSt0ZhEV1shj4iVFBKf%2B%2F392Bsi4PGJbmbsdmO%2B5QxdSLRMjtJFmAcXswXbOv%2FHX6X1VDb7EHyZ3RmMwjjnjNYcWPJtW6&X-Amz-Signature=207a9757154b57fca3ea13e1d73c3c6579f81dd428baaa3857a5ded4ca13349c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623J7WE4V%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGL5fM8whd%2B8Ji7L2FDGPdCMXE1L%2FgafT2RvgnxJrOsNAiEA4zG1qyjESwoy0CW1jvD0xuIQr1%2ForWypGOSP5%2BcPR%2Fkq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNMrQLRqvjvScanBGyrcA1Gv5qrQqSQaEuYjT71jcfQYsDp7ZAdNViJOZ5cw1%2Fw9pSVTAjGjhBK1I9ci%2FQHbfKLZKEa62xIL57JQSDFCgusBQ3F19bCjWracsv8JMNXdC0zkisqWB7ltAiteeFUgInMxab8eThPBd93S6i2ABkJmpRfHGnNCMzurSL%2F4Ngqcoh7J1L6OWL7GgcX4LF8rFfiH418COKKlpEGkCAz20lNiwck5Zhc7wt%2BXUM1YdXH2F5SrAkD0TxuCYLo%2BuEeXygtZQtcbfgYwj9tT65ToaVvJG4JuzIxzGk%2B%2F0eSM3ymbobgPfimfYVVd8HmRCFDIOugZaCt3iDKikMj2STJS7eAxMt0TYC7kZ5lpfoHuUQm12waLgrkS1QEAw4WKHCrMG9N0SlGpHxYkZC2ERoGc3HOQ24rXGjyn1e97DOPPHjYnGbXA%2BR2oA4mHBo07moOQE4N5nFtYnALKJ7Daqvw1%2BhUCagfgiy8XMMFy1qKxdGJ4rPJm19mMcxrUf2jDdCtUDxnU2QfH0KKJEpBYq9oesnIo6Ml4Tf0Ez7bbgzZ4xsTJW0Czh41CPL0VZOVaVUHipDqaMj1IrUrY%2FKy5C8lhI8m3m7BKu8gaLmUgwe%2Fe5aSOvZNSOWCFkwUNBaUoMJey6cIGOqUBKPNTxD97Wx%2FiB%2FOKTZolI8dPk5y6wtlpiCBqrkdBn4lScptEeUwTjEPqMj4kP4bzI7HVP79kExf9ic9V8faVgLusznqHRJWfIHETlQEezduar%2FTxWjF42QGSZF8cwRveSt0ZhEV1shj4iVFBKf%2B%2F392Bsi4PGJbmbsdmO%2B5QxdSLRMjtJFmAcXswXbOv%2FHX6X1VDb7EHyZ3RmMwjjnjNYcWPJtW6&X-Amz-Signature=51abcc23f2a653bff8119b58b2abcf584c2096a55da542f5bfa50e306fa6ac33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
