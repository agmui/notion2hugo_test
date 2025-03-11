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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULMDRI2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDbpXo2euCXP58pvyhJcOTQ8a8vfY9gOpBK%2BTLf%2Bdr07QIhAIuUOfr98bBmH7X9Z9ZQDsATuREeJIsnT0TpamtRaxotKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEirv5pVWk0CO0grYq3ANzbqg5S9xInLfZ0oKta4fHqiHMOunmbKxKxLyGBjQlqXBepRz%2FyXUoAiubWO0sbf9v8StUozSuxCgj%2FzZ2dUPp56cbN%2BqsuaXOOZhl9nUXAyujNSYw6SzzTcRIJGQnWZ3YpZGjb9jevsF3Ep1T%2FnvNwgDinBGjNRGEA7PWFz9HgVQSDQJHJW8YLa%2F3yMxVVnf%2B8p4IQ9Jgz7F78G6Hg2ZAJ%2FiE%2BYTW61wP1cnWxnUD1Xk14Nz%2FIbzfEi6gQbmDlLGw56lgNkBh07kUo4SkfFCR4QABFK9sOtEZD8hjV3w4vAbMYVt5ZBcPKSpKvl7HfCwWuxppl507WXnVbzUQj7MC0Pofbiz%2Brwbj%2B0sKZHbRrLLWbq5IjfVXQVOsY2EyUHgu7ifbJwgvQqYWJXby8%2BrlTk3ZjH%2B0YoaXI02rUPVUKpyKs%2FWsv8N%2FM4K%2FvM1xgJ5gAq5iHSjg7E1KDZnc6fhmqYSmp0cHJEzywF8LHMVESS18fo9RX%2BFrnsLgr1tnZSGJArrt%2Fg0L%2FW1dTCWgpPFUVYcbEmeaXnolVr0A4Fq4HZ5HH%2Bv3O7j5ocAv2zsALeWCvQbXfGxiTyQ858I8StG8A8xY7hrpECfho9Bzc1VyUceWDqMpFBCXh%2BlSQDCTmMC%2BBjqkAXVR42ltfpmrEwFkm2k1nzpiopiZ1a2FDOQkjDsbyYK4Tj%2F2XRDZcd9JHF9fdbDcmbDb5zAu18YlNdIVsgi%2Bbx40KOMZpNcDGg7RRu6FjNoCmrcFmcUYUKnb6L04ZMcRcYFlO6q7BqFgUGyXO1jC3Apn7xaacJCptKmJw%2F5yN271s7uxILhX226%2BfQgNpUJG2nyV9W4QWPB2c18p2Btsq7kgTy9u&X-Amz-Signature=e17f1a87a59e0f0cb853c53fcea9d401c85625649885083aab9f830eacdfde7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULMDRI2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDbpXo2euCXP58pvyhJcOTQ8a8vfY9gOpBK%2BTLf%2Bdr07QIhAIuUOfr98bBmH7X9Z9ZQDsATuREeJIsnT0TpamtRaxotKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEirv5pVWk0CO0grYq3ANzbqg5S9xInLfZ0oKta4fHqiHMOunmbKxKxLyGBjQlqXBepRz%2FyXUoAiubWO0sbf9v8StUozSuxCgj%2FzZ2dUPp56cbN%2BqsuaXOOZhl9nUXAyujNSYw6SzzTcRIJGQnWZ3YpZGjb9jevsF3Ep1T%2FnvNwgDinBGjNRGEA7PWFz9HgVQSDQJHJW8YLa%2F3yMxVVnf%2B8p4IQ9Jgz7F78G6Hg2ZAJ%2FiE%2BYTW61wP1cnWxnUD1Xk14Nz%2FIbzfEi6gQbmDlLGw56lgNkBh07kUo4SkfFCR4QABFK9sOtEZD8hjV3w4vAbMYVt5ZBcPKSpKvl7HfCwWuxppl507WXnVbzUQj7MC0Pofbiz%2Brwbj%2B0sKZHbRrLLWbq5IjfVXQVOsY2EyUHgu7ifbJwgvQqYWJXby8%2BrlTk3ZjH%2B0YoaXI02rUPVUKpyKs%2FWsv8N%2FM4K%2FvM1xgJ5gAq5iHSjg7E1KDZnc6fhmqYSmp0cHJEzywF8LHMVESS18fo9RX%2BFrnsLgr1tnZSGJArrt%2Fg0L%2FW1dTCWgpPFUVYcbEmeaXnolVr0A4Fq4HZ5HH%2Bv3O7j5ocAv2zsALeWCvQbXfGxiTyQ858I8StG8A8xY7hrpECfho9Bzc1VyUceWDqMpFBCXh%2BlSQDCTmMC%2BBjqkAXVR42ltfpmrEwFkm2k1nzpiopiZ1a2FDOQkjDsbyYK4Tj%2F2XRDZcd9JHF9fdbDcmbDb5zAu18YlNdIVsgi%2Bbx40KOMZpNcDGg7RRu6FjNoCmrcFmcUYUKnb6L04ZMcRcYFlO6q7BqFgUGyXO1jC3Apn7xaacJCptKmJw%2F5yN271s7uxILhX226%2BfQgNpUJG2nyV9W4QWPB2c18p2Btsq7kgTy9u&X-Amz-Signature=c7fe3ee4eacab9778901e6c28f537cbbbb034ca3c33ea522e8f6b47a5d684fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULMDRI2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDbpXo2euCXP58pvyhJcOTQ8a8vfY9gOpBK%2BTLf%2Bdr07QIhAIuUOfr98bBmH7X9Z9ZQDsATuREeJIsnT0TpamtRaxotKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEirv5pVWk0CO0grYq3ANzbqg5S9xInLfZ0oKta4fHqiHMOunmbKxKxLyGBjQlqXBepRz%2FyXUoAiubWO0sbf9v8StUozSuxCgj%2FzZ2dUPp56cbN%2BqsuaXOOZhl9nUXAyujNSYw6SzzTcRIJGQnWZ3YpZGjb9jevsF3Ep1T%2FnvNwgDinBGjNRGEA7PWFz9HgVQSDQJHJW8YLa%2F3yMxVVnf%2B8p4IQ9Jgz7F78G6Hg2ZAJ%2FiE%2BYTW61wP1cnWxnUD1Xk14Nz%2FIbzfEi6gQbmDlLGw56lgNkBh07kUo4SkfFCR4QABFK9sOtEZD8hjV3w4vAbMYVt5ZBcPKSpKvl7HfCwWuxppl507WXnVbzUQj7MC0Pofbiz%2Brwbj%2B0sKZHbRrLLWbq5IjfVXQVOsY2EyUHgu7ifbJwgvQqYWJXby8%2BrlTk3ZjH%2B0YoaXI02rUPVUKpyKs%2FWsv8N%2FM4K%2FvM1xgJ5gAq5iHSjg7E1KDZnc6fhmqYSmp0cHJEzywF8LHMVESS18fo9RX%2BFrnsLgr1tnZSGJArrt%2Fg0L%2FW1dTCWgpPFUVYcbEmeaXnolVr0A4Fq4HZ5HH%2Bv3O7j5ocAv2zsALeWCvQbXfGxiTyQ858I8StG8A8xY7hrpECfho9Bzc1VyUceWDqMpFBCXh%2BlSQDCTmMC%2BBjqkAXVR42ltfpmrEwFkm2k1nzpiopiZ1a2FDOQkjDsbyYK4Tj%2F2XRDZcd9JHF9fdbDcmbDb5zAu18YlNdIVsgi%2Bbx40KOMZpNcDGg7RRu6FjNoCmrcFmcUYUKnb6L04ZMcRcYFlO6q7BqFgUGyXO1jC3Apn7xaacJCptKmJw%2F5yN271s7uxILhX226%2BfQgNpUJG2nyV9W4QWPB2c18p2Btsq7kgTy9u&X-Amz-Signature=ba1d474e933d630e7bc38c25d5eed6772dd95d410eea4440ac1d75e9d252731e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULMDRI2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDbpXo2euCXP58pvyhJcOTQ8a8vfY9gOpBK%2BTLf%2Bdr07QIhAIuUOfr98bBmH7X9Z9ZQDsATuREeJIsnT0TpamtRaxotKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEirv5pVWk0CO0grYq3ANzbqg5S9xInLfZ0oKta4fHqiHMOunmbKxKxLyGBjQlqXBepRz%2FyXUoAiubWO0sbf9v8StUozSuxCgj%2FzZ2dUPp56cbN%2BqsuaXOOZhl9nUXAyujNSYw6SzzTcRIJGQnWZ3YpZGjb9jevsF3Ep1T%2FnvNwgDinBGjNRGEA7PWFz9HgVQSDQJHJW8YLa%2F3yMxVVnf%2B8p4IQ9Jgz7F78G6Hg2ZAJ%2FiE%2BYTW61wP1cnWxnUD1Xk14Nz%2FIbzfEi6gQbmDlLGw56lgNkBh07kUo4SkfFCR4QABFK9sOtEZD8hjV3w4vAbMYVt5ZBcPKSpKvl7HfCwWuxppl507WXnVbzUQj7MC0Pofbiz%2Brwbj%2B0sKZHbRrLLWbq5IjfVXQVOsY2EyUHgu7ifbJwgvQqYWJXby8%2BrlTk3ZjH%2B0YoaXI02rUPVUKpyKs%2FWsv8N%2FM4K%2FvM1xgJ5gAq5iHSjg7E1KDZnc6fhmqYSmp0cHJEzywF8LHMVESS18fo9RX%2BFrnsLgr1tnZSGJArrt%2Fg0L%2FW1dTCWgpPFUVYcbEmeaXnolVr0A4Fq4HZ5HH%2Bv3O7j5ocAv2zsALeWCvQbXfGxiTyQ858I8StG8A8xY7hrpECfho9Bzc1VyUceWDqMpFBCXh%2BlSQDCTmMC%2BBjqkAXVR42ltfpmrEwFkm2k1nzpiopiZ1a2FDOQkjDsbyYK4Tj%2F2XRDZcd9JHF9fdbDcmbDb5zAu18YlNdIVsgi%2Bbx40KOMZpNcDGg7RRu6FjNoCmrcFmcUYUKnb6L04ZMcRcYFlO6q7BqFgUGyXO1jC3Apn7xaacJCptKmJw%2F5yN271s7uxILhX226%2BfQgNpUJG2nyV9W4QWPB2c18p2Btsq7kgTy9u&X-Amz-Signature=327adc0108c80fe4cfa3066e1ea0da1b60cb4c71645fdf438b1696c2fe248813&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULMDRI2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDbpXo2euCXP58pvyhJcOTQ8a8vfY9gOpBK%2BTLf%2Bdr07QIhAIuUOfr98bBmH7X9Z9ZQDsATuREeJIsnT0TpamtRaxotKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEirv5pVWk0CO0grYq3ANzbqg5S9xInLfZ0oKta4fHqiHMOunmbKxKxLyGBjQlqXBepRz%2FyXUoAiubWO0sbf9v8StUozSuxCgj%2FzZ2dUPp56cbN%2BqsuaXOOZhl9nUXAyujNSYw6SzzTcRIJGQnWZ3YpZGjb9jevsF3Ep1T%2FnvNwgDinBGjNRGEA7PWFz9HgVQSDQJHJW8YLa%2F3yMxVVnf%2B8p4IQ9Jgz7F78G6Hg2ZAJ%2FiE%2BYTW61wP1cnWxnUD1Xk14Nz%2FIbzfEi6gQbmDlLGw56lgNkBh07kUo4SkfFCR4QABFK9sOtEZD8hjV3w4vAbMYVt5ZBcPKSpKvl7HfCwWuxppl507WXnVbzUQj7MC0Pofbiz%2Brwbj%2B0sKZHbRrLLWbq5IjfVXQVOsY2EyUHgu7ifbJwgvQqYWJXby8%2BrlTk3ZjH%2B0YoaXI02rUPVUKpyKs%2FWsv8N%2FM4K%2FvM1xgJ5gAq5iHSjg7E1KDZnc6fhmqYSmp0cHJEzywF8LHMVESS18fo9RX%2BFrnsLgr1tnZSGJArrt%2Fg0L%2FW1dTCWgpPFUVYcbEmeaXnolVr0A4Fq4HZ5HH%2Bv3O7j5ocAv2zsALeWCvQbXfGxiTyQ858I8StG8A8xY7hrpECfho9Bzc1VyUceWDqMpFBCXh%2BlSQDCTmMC%2BBjqkAXVR42ltfpmrEwFkm2k1nzpiopiZ1a2FDOQkjDsbyYK4Tj%2F2XRDZcd9JHF9fdbDcmbDb5zAu18YlNdIVsgi%2Bbx40KOMZpNcDGg7RRu6FjNoCmrcFmcUYUKnb6L04ZMcRcYFlO6q7BqFgUGyXO1jC3Apn7xaacJCptKmJw%2F5yN271s7uxILhX226%2BfQgNpUJG2nyV9W4QWPB2c18p2Btsq7kgTy9u&X-Amz-Signature=69e752bac046e575a13af1802cf77aa11d0325d595afd32e1fa51f7a075d27ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
