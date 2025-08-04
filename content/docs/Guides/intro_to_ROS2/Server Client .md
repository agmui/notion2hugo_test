---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KEJBPHU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDvg%2FGFmGpOHeDjBGpbccRbUWEWMJ3Qqlbw0ao%2Foa8FdgIgWlhOUmNO1lLx95olaqZ4MXs8YycafKT0oYvd%2BLtc75Iq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDM9buTFi0lIduWCZtSrcA%2Fnc3DqQAY5Rsv5pfP3bT4Rv81OlmJf1eoUZa2bCqaMy9z3XwXyAwiaXaibyUV9JFe2GuLqaJJhOwKGFtt3rQ4HQCJMOxJflLpeewvcD3rJKgsy1wy1WBFj20PR4gFdsYQmUMwQZkXl8Pmn7KfjmsdrpGdtLYIXD3Mz8glySDWPtAO2hyEDBTEaR3U7L1uRktx%2FFsNdyh78XXxnLJSxLzSLqf%2FJTFDWByKb7%2FOSXT55LwUBdIH1UyUsnL%2FT8cDZT3vj3nDqmSkgnbPzJ6Zt6ReYpAm1G7XHOKhwjOReFHl3jpINTiwQohXVh8ByB5VS3vABm0VQBIb%2F%2BoCaeJOht7BEooG8R3848EqI91Z6Y2k6vqgj3D9UF55vL9ylyyu7r65iX%2FrQ0fUhY1V54OhoiWQGTgAhH1zHkUf9rYSojXgAnFHoAwkqIXk%2BbpV82f1ozc0D4xj%2FjEGRglS1pMygFXqj0bryuTJQlS6k49krkLUnCj4BB8yBwCfsPJe6btrYJDJ4cTCmIh1su70WSeW0717Liih1%2B2iqrjlnCRCbgJLHlcwDvH%2Bvc2tA6A%2F%2Bs9GMqZKsMXe3HBdt0gWl16wQIencB%2BXLhH3KvXALi77H6sd0Nvw8x47DKxoOQlsKZMIK4wcQGOqUBgTvmAOsul5GvOF8%2FU4ULN7I8LpeNp9ZhrOZUv3nOB1iAsF4dzZksVyvH0wgy3HlJplX2gtrbcWSzsO7tbh4zBKyOwXAWJXNX2MLv%2FjyhpvJmgn5eZmVsWbQFrUKTFXwJP0xxzxcQ1%2F%2BAaHhHGe9kACByBAiFv40dGaiRh28i1jwi2ctgKfpuy6viiccyhEs1tvEVRNY%2Bq96sf4Q2UkA0N4uOR0cR&X-Amz-Signature=b0374d0bad7c9d82d9c6be87111a458b8c30e6a9dd0dd2b0bb280a9bc8d08477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KEJBPHU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDvg%2FGFmGpOHeDjBGpbccRbUWEWMJ3Qqlbw0ao%2Foa8FdgIgWlhOUmNO1lLx95olaqZ4MXs8YycafKT0oYvd%2BLtc75Iq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDM9buTFi0lIduWCZtSrcA%2Fnc3DqQAY5Rsv5pfP3bT4Rv81OlmJf1eoUZa2bCqaMy9z3XwXyAwiaXaibyUV9JFe2GuLqaJJhOwKGFtt3rQ4HQCJMOxJflLpeewvcD3rJKgsy1wy1WBFj20PR4gFdsYQmUMwQZkXl8Pmn7KfjmsdrpGdtLYIXD3Mz8glySDWPtAO2hyEDBTEaR3U7L1uRktx%2FFsNdyh78XXxnLJSxLzSLqf%2FJTFDWByKb7%2FOSXT55LwUBdIH1UyUsnL%2FT8cDZT3vj3nDqmSkgnbPzJ6Zt6ReYpAm1G7XHOKhwjOReFHl3jpINTiwQohXVh8ByB5VS3vABm0VQBIb%2F%2BoCaeJOht7BEooG8R3848EqI91Z6Y2k6vqgj3D9UF55vL9ylyyu7r65iX%2FrQ0fUhY1V54OhoiWQGTgAhH1zHkUf9rYSojXgAnFHoAwkqIXk%2BbpV82f1ozc0D4xj%2FjEGRglS1pMygFXqj0bryuTJQlS6k49krkLUnCj4BB8yBwCfsPJe6btrYJDJ4cTCmIh1su70WSeW0717Liih1%2B2iqrjlnCRCbgJLHlcwDvH%2Bvc2tA6A%2F%2Bs9GMqZKsMXe3HBdt0gWl16wQIencB%2BXLhH3KvXALi77H6sd0Nvw8x47DKxoOQlsKZMIK4wcQGOqUBgTvmAOsul5GvOF8%2FU4ULN7I8LpeNp9ZhrOZUv3nOB1iAsF4dzZksVyvH0wgy3HlJplX2gtrbcWSzsO7tbh4zBKyOwXAWJXNX2MLv%2FjyhpvJmgn5eZmVsWbQFrUKTFXwJP0xxzxcQ1%2F%2BAaHhHGe9kACByBAiFv40dGaiRh28i1jwi2ctgKfpuy6viiccyhEs1tvEVRNY%2Bq96sf4Q2UkA0N4uOR0cR&X-Amz-Signature=caac7449c736d2a14e991f1e86b5eec9724a3d677582044e13b7ca38baa06761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KEJBPHU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDvg%2FGFmGpOHeDjBGpbccRbUWEWMJ3Qqlbw0ao%2Foa8FdgIgWlhOUmNO1lLx95olaqZ4MXs8YycafKT0oYvd%2BLtc75Iq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDM9buTFi0lIduWCZtSrcA%2Fnc3DqQAY5Rsv5pfP3bT4Rv81OlmJf1eoUZa2bCqaMy9z3XwXyAwiaXaibyUV9JFe2GuLqaJJhOwKGFtt3rQ4HQCJMOxJflLpeewvcD3rJKgsy1wy1WBFj20PR4gFdsYQmUMwQZkXl8Pmn7KfjmsdrpGdtLYIXD3Mz8glySDWPtAO2hyEDBTEaR3U7L1uRktx%2FFsNdyh78XXxnLJSxLzSLqf%2FJTFDWByKb7%2FOSXT55LwUBdIH1UyUsnL%2FT8cDZT3vj3nDqmSkgnbPzJ6Zt6ReYpAm1G7XHOKhwjOReFHl3jpINTiwQohXVh8ByB5VS3vABm0VQBIb%2F%2BoCaeJOht7BEooG8R3848EqI91Z6Y2k6vqgj3D9UF55vL9ylyyu7r65iX%2FrQ0fUhY1V54OhoiWQGTgAhH1zHkUf9rYSojXgAnFHoAwkqIXk%2BbpV82f1ozc0D4xj%2FjEGRglS1pMygFXqj0bryuTJQlS6k49krkLUnCj4BB8yBwCfsPJe6btrYJDJ4cTCmIh1su70WSeW0717Liih1%2B2iqrjlnCRCbgJLHlcwDvH%2Bvc2tA6A%2F%2Bs9GMqZKsMXe3HBdt0gWl16wQIencB%2BXLhH3KvXALi77H6sd0Nvw8x47DKxoOQlsKZMIK4wcQGOqUBgTvmAOsul5GvOF8%2FU4ULN7I8LpeNp9ZhrOZUv3nOB1iAsF4dzZksVyvH0wgy3HlJplX2gtrbcWSzsO7tbh4zBKyOwXAWJXNX2MLv%2FjyhpvJmgn5eZmVsWbQFrUKTFXwJP0xxzxcQ1%2F%2BAaHhHGe9kACByBAiFv40dGaiRh28i1jwi2ctgKfpuy6viiccyhEs1tvEVRNY%2Bq96sf4Q2UkA0N4uOR0cR&X-Amz-Signature=4ec3c76711ce81ddcc921d7d8d54fe4b8973376be6aafe2f1d972a3d7f31873d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KEJBPHU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDvg%2FGFmGpOHeDjBGpbccRbUWEWMJ3Qqlbw0ao%2Foa8FdgIgWlhOUmNO1lLx95olaqZ4MXs8YycafKT0oYvd%2BLtc75Iq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDM9buTFi0lIduWCZtSrcA%2Fnc3DqQAY5Rsv5pfP3bT4Rv81OlmJf1eoUZa2bCqaMy9z3XwXyAwiaXaibyUV9JFe2GuLqaJJhOwKGFtt3rQ4HQCJMOxJflLpeewvcD3rJKgsy1wy1WBFj20PR4gFdsYQmUMwQZkXl8Pmn7KfjmsdrpGdtLYIXD3Mz8glySDWPtAO2hyEDBTEaR3U7L1uRktx%2FFsNdyh78XXxnLJSxLzSLqf%2FJTFDWByKb7%2FOSXT55LwUBdIH1UyUsnL%2FT8cDZT3vj3nDqmSkgnbPzJ6Zt6ReYpAm1G7XHOKhwjOReFHl3jpINTiwQohXVh8ByB5VS3vABm0VQBIb%2F%2BoCaeJOht7BEooG8R3848EqI91Z6Y2k6vqgj3D9UF55vL9ylyyu7r65iX%2FrQ0fUhY1V54OhoiWQGTgAhH1zHkUf9rYSojXgAnFHoAwkqIXk%2BbpV82f1ozc0D4xj%2FjEGRglS1pMygFXqj0bryuTJQlS6k49krkLUnCj4BB8yBwCfsPJe6btrYJDJ4cTCmIh1su70WSeW0717Liih1%2B2iqrjlnCRCbgJLHlcwDvH%2Bvc2tA6A%2F%2Bs9GMqZKsMXe3HBdt0gWl16wQIencB%2BXLhH3KvXALi77H6sd0Nvw8x47DKxoOQlsKZMIK4wcQGOqUBgTvmAOsul5GvOF8%2FU4ULN7I8LpeNp9ZhrOZUv3nOB1iAsF4dzZksVyvH0wgy3HlJplX2gtrbcWSzsO7tbh4zBKyOwXAWJXNX2MLv%2FjyhpvJmgn5eZmVsWbQFrUKTFXwJP0xxzxcQ1%2F%2BAaHhHGe9kACByBAiFv40dGaiRh28i1jwi2ctgKfpuy6viiccyhEs1tvEVRNY%2Bq96sf4Q2UkA0N4uOR0cR&X-Amz-Signature=ab12995c7f544c2c3bcc4100693e1de58be5ac01346639f71626d7ffa4325774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KEJBPHU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDvg%2FGFmGpOHeDjBGpbccRbUWEWMJ3Qqlbw0ao%2Foa8FdgIgWlhOUmNO1lLx95olaqZ4MXs8YycafKT0oYvd%2BLtc75Iq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDM9buTFi0lIduWCZtSrcA%2Fnc3DqQAY5Rsv5pfP3bT4Rv81OlmJf1eoUZa2bCqaMy9z3XwXyAwiaXaibyUV9JFe2GuLqaJJhOwKGFtt3rQ4HQCJMOxJflLpeewvcD3rJKgsy1wy1WBFj20PR4gFdsYQmUMwQZkXl8Pmn7KfjmsdrpGdtLYIXD3Mz8glySDWPtAO2hyEDBTEaR3U7L1uRktx%2FFsNdyh78XXxnLJSxLzSLqf%2FJTFDWByKb7%2FOSXT55LwUBdIH1UyUsnL%2FT8cDZT3vj3nDqmSkgnbPzJ6Zt6ReYpAm1G7XHOKhwjOReFHl3jpINTiwQohXVh8ByB5VS3vABm0VQBIb%2F%2BoCaeJOht7BEooG8R3848EqI91Z6Y2k6vqgj3D9UF55vL9ylyyu7r65iX%2FrQ0fUhY1V54OhoiWQGTgAhH1zHkUf9rYSojXgAnFHoAwkqIXk%2BbpV82f1ozc0D4xj%2FjEGRglS1pMygFXqj0bryuTJQlS6k49krkLUnCj4BB8yBwCfsPJe6btrYJDJ4cTCmIh1su70WSeW0717Liih1%2B2iqrjlnCRCbgJLHlcwDvH%2Bvc2tA6A%2F%2Bs9GMqZKsMXe3HBdt0gWl16wQIencB%2BXLhH3KvXALi77H6sd0Nvw8x47DKxoOQlsKZMIK4wcQGOqUBgTvmAOsul5GvOF8%2FU4ULN7I8LpeNp9ZhrOZUv3nOB1iAsF4dzZksVyvH0wgy3HlJplX2gtrbcWSzsO7tbh4zBKyOwXAWJXNX2MLv%2FjyhpvJmgn5eZmVsWbQFrUKTFXwJP0xxzxcQ1%2F%2BAaHhHGe9kACByBAiFv40dGaiRh28i1jwi2ctgKfpuy6viiccyhEs1tvEVRNY%2Bq96sf4Q2UkA0N4uOR0cR&X-Amz-Signature=1523bde61a5b46198289e3a44ce423c0e87062dad7014583647ba63d17db5c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
