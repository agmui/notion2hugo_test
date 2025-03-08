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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPFN7H6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbRQxrVOnYKC6ZUsNXMoxePGoA0XcdwlP2dC1v3OwgUQIgLhLTgy0fh0oP9%2F6NOnOzUC7rp2GmC1Eh%2BhhFOiqVNrMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLZb28Hxyivrs4Qm8SrcA74T5gLpdLOc%2FB3S0%2FT9W9X4uYlHV3XbDcB9pMeypcg7YHnQtifopuySXCMQnkdvFMSjM4XegmqqjkpnHx%2B23pUNuWpRc1ka4W6%2ByQYTcQaCztI9ioZKo%2FGsJhxxv5IxUe4RUIjznESbLrmIhFjkvh9cq28v4o9%2F57OzjzHJdMftkMkJfCyl5mg3Tv4CTsWbzWlQ17%2B0P0r36tMx2OALIanzhKdUKPujCSaStvLJjV6Spli85fCTxaNSMuu572Ie3T%2BL4f10hV4B%2B98AzPfSt7xK8rZSMe2JDf5G8PnyKDXeguqMqbef5g%2FsqN4BOBzTqMLXqZqKN1PTjRRptTjFnCfr2UR7yj5wFgGU%2B9SexX4Qn7bE558q2XV4EuHRrCe7fkp1yHudm3o44w3hxxhQafIDmWJog7sUlfk7h7WrBfiTfZ93zQj5%2B3hHprWYjMPeIa%2FByx%2BfkjaZKrg28KgwMK7eywDBJJKxaALXFVpMns5mO%2Fo2AGPmChChDecRlRDgd%2FqRdtRDxyhJPeIMrY6v900uaACX92TGuC9hbv8jA%2BukJoBwhhxdcKPoUbSss%2BzD6495reVR0AsBV9WyX71TUlOYwda2dubuIMvMkW%2FnWo26fXall2QLUumt1OOXMNXcrr4GOqUBmIlkPb3Y7cdW5QcCtOdR%2BxT7r3u%2FSi%2BejcA%2BPBWXYWetzyIzkVBA5rxMTlen8F45zzoWZkT%2BOVxo9ykknQruVADKv2I9YtVsPyOSFfeqAdRyfKVuAEfrmDJOFHG%2FHjYwQYk23d78EbIhORoQ8q1jBH47MWDr0ZRvyC6ZtpS95cA8hzN9CdSY3EqsUOjtoK%2B860nbXLtc1nINxWO8mQ2RVOGYNKB0&X-Amz-Signature=ee1c14fe25fc876f59085dc972e52b5ecc7d03a0a3fdf5e2e072bf67ccce59c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPFN7H6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbRQxrVOnYKC6ZUsNXMoxePGoA0XcdwlP2dC1v3OwgUQIgLhLTgy0fh0oP9%2F6NOnOzUC7rp2GmC1Eh%2BhhFOiqVNrMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLZb28Hxyivrs4Qm8SrcA74T5gLpdLOc%2FB3S0%2FT9W9X4uYlHV3XbDcB9pMeypcg7YHnQtifopuySXCMQnkdvFMSjM4XegmqqjkpnHx%2B23pUNuWpRc1ka4W6%2ByQYTcQaCztI9ioZKo%2FGsJhxxv5IxUe4RUIjznESbLrmIhFjkvh9cq28v4o9%2F57OzjzHJdMftkMkJfCyl5mg3Tv4CTsWbzWlQ17%2B0P0r36tMx2OALIanzhKdUKPujCSaStvLJjV6Spli85fCTxaNSMuu572Ie3T%2BL4f10hV4B%2B98AzPfSt7xK8rZSMe2JDf5G8PnyKDXeguqMqbef5g%2FsqN4BOBzTqMLXqZqKN1PTjRRptTjFnCfr2UR7yj5wFgGU%2B9SexX4Qn7bE558q2XV4EuHRrCe7fkp1yHudm3o44w3hxxhQafIDmWJog7sUlfk7h7WrBfiTfZ93zQj5%2B3hHprWYjMPeIa%2FByx%2BfkjaZKrg28KgwMK7eywDBJJKxaALXFVpMns5mO%2Fo2AGPmChChDecRlRDgd%2FqRdtRDxyhJPeIMrY6v900uaACX92TGuC9hbv8jA%2BukJoBwhhxdcKPoUbSss%2BzD6495reVR0AsBV9WyX71TUlOYwda2dubuIMvMkW%2FnWo26fXall2QLUumt1OOXMNXcrr4GOqUBmIlkPb3Y7cdW5QcCtOdR%2BxT7r3u%2FSi%2BejcA%2BPBWXYWetzyIzkVBA5rxMTlen8F45zzoWZkT%2BOVxo9ykknQruVADKv2I9YtVsPyOSFfeqAdRyfKVuAEfrmDJOFHG%2FHjYwQYk23d78EbIhORoQ8q1jBH47MWDr0ZRvyC6ZtpS95cA8hzN9CdSY3EqsUOjtoK%2B860nbXLtc1nINxWO8mQ2RVOGYNKB0&X-Amz-Signature=d5908c495fcbac6c0d39bb848b54c91e21a664f0ec37b5c20df1191102b6e1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPFN7H6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbRQxrVOnYKC6ZUsNXMoxePGoA0XcdwlP2dC1v3OwgUQIgLhLTgy0fh0oP9%2F6NOnOzUC7rp2GmC1Eh%2BhhFOiqVNrMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLZb28Hxyivrs4Qm8SrcA74T5gLpdLOc%2FB3S0%2FT9W9X4uYlHV3XbDcB9pMeypcg7YHnQtifopuySXCMQnkdvFMSjM4XegmqqjkpnHx%2B23pUNuWpRc1ka4W6%2ByQYTcQaCztI9ioZKo%2FGsJhxxv5IxUe4RUIjznESbLrmIhFjkvh9cq28v4o9%2F57OzjzHJdMftkMkJfCyl5mg3Tv4CTsWbzWlQ17%2B0P0r36tMx2OALIanzhKdUKPujCSaStvLJjV6Spli85fCTxaNSMuu572Ie3T%2BL4f10hV4B%2B98AzPfSt7xK8rZSMe2JDf5G8PnyKDXeguqMqbef5g%2FsqN4BOBzTqMLXqZqKN1PTjRRptTjFnCfr2UR7yj5wFgGU%2B9SexX4Qn7bE558q2XV4EuHRrCe7fkp1yHudm3o44w3hxxhQafIDmWJog7sUlfk7h7WrBfiTfZ93zQj5%2B3hHprWYjMPeIa%2FByx%2BfkjaZKrg28KgwMK7eywDBJJKxaALXFVpMns5mO%2Fo2AGPmChChDecRlRDgd%2FqRdtRDxyhJPeIMrY6v900uaACX92TGuC9hbv8jA%2BukJoBwhhxdcKPoUbSss%2BzD6495reVR0AsBV9WyX71TUlOYwda2dubuIMvMkW%2FnWo26fXall2QLUumt1OOXMNXcrr4GOqUBmIlkPb3Y7cdW5QcCtOdR%2BxT7r3u%2FSi%2BejcA%2BPBWXYWetzyIzkVBA5rxMTlen8F45zzoWZkT%2BOVxo9ykknQruVADKv2I9YtVsPyOSFfeqAdRyfKVuAEfrmDJOFHG%2FHjYwQYk23d78EbIhORoQ8q1jBH47MWDr0ZRvyC6ZtpS95cA8hzN9CdSY3EqsUOjtoK%2B860nbXLtc1nINxWO8mQ2RVOGYNKB0&X-Amz-Signature=adb135b0cd0124dda8a4b3eb58df2fac74dacc412789a7c84faf4d4b2e6e247e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPFN7H6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbRQxrVOnYKC6ZUsNXMoxePGoA0XcdwlP2dC1v3OwgUQIgLhLTgy0fh0oP9%2F6NOnOzUC7rp2GmC1Eh%2BhhFOiqVNrMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLZb28Hxyivrs4Qm8SrcA74T5gLpdLOc%2FB3S0%2FT9W9X4uYlHV3XbDcB9pMeypcg7YHnQtifopuySXCMQnkdvFMSjM4XegmqqjkpnHx%2B23pUNuWpRc1ka4W6%2ByQYTcQaCztI9ioZKo%2FGsJhxxv5IxUe4RUIjznESbLrmIhFjkvh9cq28v4o9%2F57OzjzHJdMftkMkJfCyl5mg3Tv4CTsWbzWlQ17%2B0P0r36tMx2OALIanzhKdUKPujCSaStvLJjV6Spli85fCTxaNSMuu572Ie3T%2BL4f10hV4B%2B98AzPfSt7xK8rZSMe2JDf5G8PnyKDXeguqMqbef5g%2FsqN4BOBzTqMLXqZqKN1PTjRRptTjFnCfr2UR7yj5wFgGU%2B9SexX4Qn7bE558q2XV4EuHRrCe7fkp1yHudm3o44w3hxxhQafIDmWJog7sUlfk7h7WrBfiTfZ93zQj5%2B3hHprWYjMPeIa%2FByx%2BfkjaZKrg28KgwMK7eywDBJJKxaALXFVpMns5mO%2Fo2AGPmChChDecRlRDgd%2FqRdtRDxyhJPeIMrY6v900uaACX92TGuC9hbv8jA%2BukJoBwhhxdcKPoUbSss%2BzD6495reVR0AsBV9WyX71TUlOYwda2dubuIMvMkW%2FnWo26fXall2QLUumt1OOXMNXcrr4GOqUBmIlkPb3Y7cdW5QcCtOdR%2BxT7r3u%2FSi%2BejcA%2BPBWXYWetzyIzkVBA5rxMTlen8F45zzoWZkT%2BOVxo9ykknQruVADKv2I9YtVsPyOSFfeqAdRyfKVuAEfrmDJOFHG%2FHjYwQYk23d78EbIhORoQ8q1jBH47MWDr0ZRvyC6ZtpS95cA8hzN9CdSY3EqsUOjtoK%2B860nbXLtc1nINxWO8mQ2RVOGYNKB0&X-Amz-Signature=9e835fb9843403d17d952450648c0d3299d1d6ef5b55d7f35b53caa48442d31c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPFN7H6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbRQxrVOnYKC6ZUsNXMoxePGoA0XcdwlP2dC1v3OwgUQIgLhLTgy0fh0oP9%2F6NOnOzUC7rp2GmC1Eh%2BhhFOiqVNrMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLZb28Hxyivrs4Qm8SrcA74T5gLpdLOc%2FB3S0%2FT9W9X4uYlHV3XbDcB9pMeypcg7YHnQtifopuySXCMQnkdvFMSjM4XegmqqjkpnHx%2B23pUNuWpRc1ka4W6%2ByQYTcQaCztI9ioZKo%2FGsJhxxv5IxUe4RUIjznESbLrmIhFjkvh9cq28v4o9%2F57OzjzHJdMftkMkJfCyl5mg3Tv4CTsWbzWlQ17%2B0P0r36tMx2OALIanzhKdUKPujCSaStvLJjV6Spli85fCTxaNSMuu572Ie3T%2BL4f10hV4B%2B98AzPfSt7xK8rZSMe2JDf5G8PnyKDXeguqMqbef5g%2FsqN4BOBzTqMLXqZqKN1PTjRRptTjFnCfr2UR7yj5wFgGU%2B9SexX4Qn7bE558q2XV4EuHRrCe7fkp1yHudm3o44w3hxxhQafIDmWJog7sUlfk7h7WrBfiTfZ93zQj5%2B3hHprWYjMPeIa%2FByx%2BfkjaZKrg28KgwMK7eywDBJJKxaALXFVpMns5mO%2Fo2AGPmChChDecRlRDgd%2FqRdtRDxyhJPeIMrY6v900uaACX92TGuC9hbv8jA%2BukJoBwhhxdcKPoUbSss%2BzD6495reVR0AsBV9WyX71TUlOYwda2dubuIMvMkW%2FnWo26fXall2QLUumt1OOXMNXcrr4GOqUBmIlkPb3Y7cdW5QcCtOdR%2BxT7r3u%2FSi%2BejcA%2BPBWXYWetzyIzkVBA5rxMTlen8F45zzoWZkT%2BOVxo9ykknQruVADKv2I9YtVsPyOSFfeqAdRyfKVuAEfrmDJOFHG%2FHjYwQYk23d78EbIhORoQ8q1jBH47MWDr0ZRvyC6ZtpS95cA8hzN9CdSY3EqsUOjtoK%2B860nbXLtc1nINxWO8mQ2RVOGYNKB0&X-Amz-Signature=9022c429a14ade7766c8410d2436215f5d1c466c659e0e59d6eb0b2308c13ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
