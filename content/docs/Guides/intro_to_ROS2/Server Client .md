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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPAFWAI%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCTCW3LM9yEz2QlfeUXiDhbsOPeUGQFPjJGduvGrKwpewIhAJs%2FanId2UalspCCLbUFLyrZQT2%2F1RwEF0q7R9dhdFPmKv8DCHAQABoMNjM3NDIzMTgzODA1Igy8W%2BVm0DX%2FQXnrrugq3ANrNC5POruCy9K5Ik2AlWqK2bsBqhyeUuxrDgPRL9lem4JuvxOIAfnJCVuaQk%2BFwoHdJki6y98ze2DBn%2BJsZ6H7dp2wZWahHoFj9OFsOp2mWfmAic%2B1Z70nag%2BbUIXHP4IcfoWhHpnennFSMDrUtWRIMNAmMsJD9HS%2FFA8Igb7KVGh1bg2n1XEzTic%2B7iFpIwfvGVxJGfEnSEv5gXlMrvuabkJiuGqRJcMrm21gZXrl%2FLg4hW%2FLe7kPusbxaqPmQtj7AcMQtNlsKwSxvC7FPUqm2LyTLX9pMOt%2FupREfGoFEnNbpNP3A9InjJBYoeM56jaECxb2b9AtELLyWoj%2B%2B6CVj7S6T3Rcj260BJ25IeLkYqlTGj3L88u1JgM6dPwUPwivRQGnVWvz8a%2BfRjlp5rNYFF86la4Rb685xcSys%2BlslaDlM3VKQoM5io%2B9xlROJl7tACxO98lLUR9hHZ0pmZhxNcWSm0dpzvBwCagJdZt8Ip3nMiqdIMNw%2F5GYoqyeC1lpQToYFoTeAxhhs46b%2BEQPBviz8KpTc7L44X18XHNRO39Yk%2BtmWnQt4nqztGp%2Bm5nYcqpj3HWZUPi16ohidQDYVjIfVkbfLHqfS3MZjmdBRTK%2F1G%2BrpbNhozjbwTDe67S%2BBjqkAY4VvS8eonzt2rmjZsryUd3Dlle0oDW8fsZ6MUsHP9spgh6O3ltWo9vBkgSSNF2BgnEXxSOs5Fe9ixhkI6rxv%2BAKgBigj%2FrvNoPlREu%2FnNSF8j8uqEtNWlyzsqUtleWYHgU1evTPlLFglQ2txUGm8StR69a33RJDAts%2FzzFZJjAU4bu5jPadO7tDiEZqdWfd08tXS6oDiukDTWMrfPkfIjww4f0I&X-Amz-Signature=a9160d1adb75911b7854b6384ccebcbeb07d28f7ab4bcaf8c5e8fff440ea64e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPAFWAI%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCTCW3LM9yEz2QlfeUXiDhbsOPeUGQFPjJGduvGrKwpewIhAJs%2FanId2UalspCCLbUFLyrZQT2%2F1RwEF0q7R9dhdFPmKv8DCHAQABoMNjM3NDIzMTgzODA1Igy8W%2BVm0DX%2FQXnrrugq3ANrNC5POruCy9K5Ik2AlWqK2bsBqhyeUuxrDgPRL9lem4JuvxOIAfnJCVuaQk%2BFwoHdJki6y98ze2DBn%2BJsZ6H7dp2wZWahHoFj9OFsOp2mWfmAic%2B1Z70nag%2BbUIXHP4IcfoWhHpnennFSMDrUtWRIMNAmMsJD9HS%2FFA8Igb7KVGh1bg2n1XEzTic%2B7iFpIwfvGVxJGfEnSEv5gXlMrvuabkJiuGqRJcMrm21gZXrl%2FLg4hW%2FLe7kPusbxaqPmQtj7AcMQtNlsKwSxvC7FPUqm2LyTLX9pMOt%2FupREfGoFEnNbpNP3A9InjJBYoeM56jaECxb2b9AtELLyWoj%2B%2B6CVj7S6T3Rcj260BJ25IeLkYqlTGj3L88u1JgM6dPwUPwivRQGnVWvz8a%2BfRjlp5rNYFF86la4Rb685xcSys%2BlslaDlM3VKQoM5io%2B9xlROJl7tACxO98lLUR9hHZ0pmZhxNcWSm0dpzvBwCagJdZt8Ip3nMiqdIMNw%2F5GYoqyeC1lpQToYFoTeAxhhs46b%2BEQPBviz8KpTc7L44X18XHNRO39Yk%2BtmWnQt4nqztGp%2Bm5nYcqpj3HWZUPi16ohidQDYVjIfVkbfLHqfS3MZjmdBRTK%2F1G%2BrpbNhozjbwTDe67S%2BBjqkAY4VvS8eonzt2rmjZsryUd3Dlle0oDW8fsZ6MUsHP9spgh6O3ltWo9vBkgSSNF2BgnEXxSOs5Fe9ixhkI6rxv%2BAKgBigj%2FrvNoPlREu%2FnNSF8j8uqEtNWlyzsqUtleWYHgU1evTPlLFglQ2txUGm8StR69a33RJDAts%2FzzFZJjAU4bu5jPadO7tDiEZqdWfd08tXS6oDiukDTWMrfPkfIjww4f0I&X-Amz-Signature=b098e8958f977aed11e014d0c471fc2600af48f5a4baecee1827465587fae020&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPAFWAI%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCTCW3LM9yEz2QlfeUXiDhbsOPeUGQFPjJGduvGrKwpewIhAJs%2FanId2UalspCCLbUFLyrZQT2%2F1RwEF0q7R9dhdFPmKv8DCHAQABoMNjM3NDIzMTgzODA1Igy8W%2BVm0DX%2FQXnrrugq3ANrNC5POruCy9K5Ik2AlWqK2bsBqhyeUuxrDgPRL9lem4JuvxOIAfnJCVuaQk%2BFwoHdJki6y98ze2DBn%2BJsZ6H7dp2wZWahHoFj9OFsOp2mWfmAic%2B1Z70nag%2BbUIXHP4IcfoWhHpnennFSMDrUtWRIMNAmMsJD9HS%2FFA8Igb7KVGh1bg2n1XEzTic%2B7iFpIwfvGVxJGfEnSEv5gXlMrvuabkJiuGqRJcMrm21gZXrl%2FLg4hW%2FLe7kPusbxaqPmQtj7AcMQtNlsKwSxvC7FPUqm2LyTLX9pMOt%2FupREfGoFEnNbpNP3A9InjJBYoeM56jaECxb2b9AtELLyWoj%2B%2B6CVj7S6T3Rcj260BJ25IeLkYqlTGj3L88u1JgM6dPwUPwivRQGnVWvz8a%2BfRjlp5rNYFF86la4Rb685xcSys%2BlslaDlM3VKQoM5io%2B9xlROJl7tACxO98lLUR9hHZ0pmZhxNcWSm0dpzvBwCagJdZt8Ip3nMiqdIMNw%2F5GYoqyeC1lpQToYFoTeAxhhs46b%2BEQPBviz8KpTc7L44X18XHNRO39Yk%2BtmWnQt4nqztGp%2Bm5nYcqpj3HWZUPi16ohidQDYVjIfVkbfLHqfS3MZjmdBRTK%2F1G%2BrpbNhozjbwTDe67S%2BBjqkAY4VvS8eonzt2rmjZsryUd3Dlle0oDW8fsZ6MUsHP9spgh6O3ltWo9vBkgSSNF2BgnEXxSOs5Fe9ixhkI6rxv%2BAKgBigj%2FrvNoPlREu%2FnNSF8j8uqEtNWlyzsqUtleWYHgU1evTPlLFglQ2txUGm8StR69a33RJDAts%2FzzFZJjAU4bu5jPadO7tDiEZqdWfd08tXS6oDiukDTWMrfPkfIjww4f0I&X-Amz-Signature=40e1c3e0c4868dcbbfc66f525721dd452361672551e23d9bbee0ee4605bb3935&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPAFWAI%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCTCW3LM9yEz2QlfeUXiDhbsOPeUGQFPjJGduvGrKwpewIhAJs%2FanId2UalspCCLbUFLyrZQT2%2F1RwEF0q7R9dhdFPmKv8DCHAQABoMNjM3NDIzMTgzODA1Igy8W%2BVm0DX%2FQXnrrugq3ANrNC5POruCy9K5Ik2AlWqK2bsBqhyeUuxrDgPRL9lem4JuvxOIAfnJCVuaQk%2BFwoHdJki6y98ze2DBn%2BJsZ6H7dp2wZWahHoFj9OFsOp2mWfmAic%2B1Z70nag%2BbUIXHP4IcfoWhHpnennFSMDrUtWRIMNAmMsJD9HS%2FFA8Igb7KVGh1bg2n1XEzTic%2B7iFpIwfvGVxJGfEnSEv5gXlMrvuabkJiuGqRJcMrm21gZXrl%2FLg4hW%2FLe7kPusbxaqPmQtj7AcMQtNlsKwSxvC7FPUqm2LyTLX9pMOt%2FupREfGoFEnNbpNP3A9InjJBYoeM56jaECxb2b9AtELLyWoj%2B%2B6CVj7S6T3Rcj260BJ25IeLkYqlTGj3L88u1JgM6dPwUPwivRQGnVWvz8a%2BfRjlp5rNYFF86la4Rb685xcSys%2BlslaDlM3VKQoM5io%2B9xlROJl7tACxO98lLUR9hHZ0pmZhxNcWSm0dpzvBwCagJdZt8Ip3nMiqdIMNw%2F5GYoqyeC1lpQToYFoTeAxhhs46b%2BEQPBviz8KpTc7L44X18XHNRO39Yk%2BtmWnQt4nqztGp%2Bm5nYcqpj3HWZUPi16ohidQDYVjIfVkbfLHqfS3MZjmdBRTK%2F1G%2BrpbNhozjbwTDe67S%2BBjqkAY4VvS8eonzt2rmjZsryUd3Dlle0oDW8fsZ6MUsHP9spgh6O3ltWo9vBkgSSNF2BgnEXxSOs5Fe9ixhkI6rxv%2BAKgBigj%2FrvNoPlREu%2FnNSF8j8uqEtNWlyzsqUtleWYHgU1evTPlLFglQ2txUGm8StR69a33RJDAts%2FzzFZJjAU4bu5jPadO7tDiEZqdWfd08tXS6oDiukDTWMrfPkfIjww4f0I&X-Amz-Signature=2fa95069e081d34f066adc55c5d812b8e5a00527acd5fffb70554e548be118e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPAFWAI%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCTCW3LM9yEz2QlfeUXiDhbsOPeUGQFPjJGduvGrKwpewIhAJs%2FanId2UalspCCLbUFLyrZQT2%2F1RwEF0q7R9dhdFPmKv8DCHAQABoMNjM3NDIzMTgzODA1Igy8W%2BVm0DX%2FQXnrrugq3ANrNC5POruCy9K5Ik2AlWqK2bsBqhyeUuxrDgPRL9lem4JuvxOIAfnJCVuaQk%2BFwoHdJki6y98ze2DBn%2BJsZ6H7dp2wZWahHoFj9OFsOp2mWfmAic%2B1Z70nag%2BbUIXHP4IcfoWhHpnennFSMDrUtWRIMNAmMsJD9HS%2FFA8Igb7KVGh1bg2n1XEzTic%2B7iFpIwfvGVxJGfEnSEv5gXlMrvuabkJiuGqRJcMrm21gZXrl%2FLg4hW%2FLe7kPusbxaqPmQtj7AcMQtNlsKwSxvC7FPUqm2LyTLX9pMOt%2FupREfGoFEnNbpNP3A9InjJBYoeM56jaECxb2b9AtELLyWoj%2B%2B6CVj7S6T3Rcj260BJ25IeLkYqlTGj3L88u1JgM6dPwUPwivRQGnVWvz8a%2BfRjlp5rNYFF86la4Rb685xcSys%2BlslaDlM3VKQoM5io%2B9xlROJl7tACxO98lLUR9hHZ0pmZhxNcWSm0dpzvBwCagJdZt8Ip3nMiqdIMNw%2F5GYoqyeC1lpQToYFoTeAxhhs46b%2BEQPBviz8KpTc7L44X18XHNRO39Yk%2BtmWnQt4nqztGp%2Bm5nYcqpj3HWZUPi16ohidQDYVjIfVkbfLHqfS3MZjmdBRTK%2F1G%2BrpbNhozjbwTDe67S%2BBjqkAY4VvS8eonzt2rmjZsryUd3Dlle0oDW8fsZ6MUsHP9spgh6O3ltWo9vBkgSSNF2BgnEXxSOs5Fe9ixhkI6rxv%2BAKgBigj%2FrvNoPlREu%2FnNSF8j8uqEtNWlyzsqUtleWYHgU1evTPlLFglQ2txUGm8StR69a33RJDAts%2FzzFZJjAU4bu5jPadO7tDiEZqdWfd08tXS6oDiukDTWMrfPkfIjww4f0I&X-Amz-Signature=62ebef905395c25be81007a915ef7551c6a29f7a898b4c4d329e62a37bc69570&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
