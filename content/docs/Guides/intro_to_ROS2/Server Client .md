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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIVVK74%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnXTlqZ4CkrqyChSqucPJXlwesbV5tY1FSbHnYeM74dAiEAomP2o0A7nEyzvc%2Bfc7Q7WI9ciXVNIgDE9VbR0%2FdMcJcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYY%2Bqn%2BDMmibIFrOSrcA7gIks2SZ0Js3j41YHpMr3STGx9%2F1hFIGKqURr6I09YIqUgIqz8P3aU8udHFeyAvqe%2FAOdf5XYszCHU9opnQKse83kUzu0dXQ1KtPmrlnWl3Tr8rPpPwtoczc4YAfGqKLEbCjW36lgoTk9W5GZG%2BWblDq6gk27B9GA1J3HOuXBvgzwciTpqII%2FmEes5gYy7JlrijPBm1LRbc45EDrqjXVrN1vXsKfD3us2MOORSoZKKA7ctb7qxO9AOGmllvz7Y6CSlnaehpvXRiwZQJW5k3fmKGHvr22%2FG78MnXOuKOaNTvleQwtsb85LvlBjnbaXgllh1sDR2sGBoZUPifUtdj0n3%2BMh6LHOy1Aw5hKz3EIlmB4qqZ%2Fb%2FVICSGMMhaWhDfsJ%2FggytMn1CPNRNywqi%2BbEgTeBsFkNMTmL5Esequ7FeiIbh9BcJiFd5TKc3l2yNxB%2FLoTIuppT6PI2zTps3xjZRLCtulf75j4OY6zxvuo7xhG6q9arfCuPS3olVgYSbTS34uamfQKhfkV3cXyUh7hczYm3lVCr7weksFcyob3BBvzdT%2F9SFf7kXGspbyqidXWLK4VKD3Ns%2B9hxOHhfhotpLrbAL13NTZgS%2FUbIy6nnSVyJ%2BvERmqyAB8GV6xMNWv%2FcAGOqUBiiyxL1nzYI0nReaOD%2Fi8jdNslZqrow14NNuWGJ7WWRnpxeCtio%2FJVVSsHYLja1i7MQXxNNwA9PV5Jn4d45WrgwAqD06KMwFQu2UyOEthp%2BlQRFkwxAp840yV8RwcR6uSlsS80IbOJh0dWJzmr4ZybACIRRDk9ky8yXPBENYEOKG%2FM1v1Aq7FXchFRA4Qxeo5EyH%2BvsZRze2GikLuy%2BlJR9VWgE1K&X-Amz-Signature=19021a00403726ccc054a5c72ebad7a99b6dfc5d875681316c6b7b2efa55c9bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIVVK74%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnXTlqZ4CkrqyChSqucPJXlwesbV5tY1FSbHnYeM74dAiEAomP2o0A7nEyzvc%2Bfc7Q7WI9ciXVNIgDE9VbR0%2FdMcJcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYY%2Bqn%2BDMmibIFrOSrcA7gIks2SZ0Js3j41YHpMr3STGx9%2F1hFIGKqURr6I09YIqUgIqz8P3aU8udHFeyAvqe%2FAOdf5XYszCHU9opnQKse83kUzu0dXQ1KtPmrlnWl3Tr8rPpPwtoczc4YAfGqKLEbCjW36lgoTk9W5GZG%2BWblDq6gk27B9GA1J3HOuXBvgzwciTpqII%2FmEes5gYy7JlrijPBm1LRbc45EDrqjXVrN1vXsKfD3us2MOORSoZKKA7ctb7qxO9AOGmllvz7Y6CSlnaehpvXRiwZQJW5k3fmKGHvr22%2FG78MnXOuKOaNTvleQwtsb85LvlBjnbaXgllh1sDR2sGBoZUPifUtdj0n3%2BMh6LHOy1Aw5hKz3EIlmB4qqZ%2Fb%2FVICSGMMhaWhDfsJ%2FggytMn1CPNRNywqi%2BbEgTeBsFkNMTmL5Esequ7FeiIbh9BcJiFd5TKc3l2yNxB%2FLoTIuppT6PI2zTps3xjZRLCtulf75j4OY6zxvuo7xhG6q9arfCuPS3olVgYSbTS34uamfQKhfkV3cXyUh7hczYm3lVCr7weksFcyob3BBvzdT%2F9SFf7kXGspbyqidXWLK4VKD3Ns%2B9hxOHhfhotpLrbAL13NTZgS%2FUbIy6nnSVyJ%2BvERmqyAB8GV6xMNWv%2FcAGOqUBiiyxL1nzYI0nReaOD%2Fi8jdNslZqrow14NNuWGJ7WWRnpxeCtio%2FJVVSsHYLja1i7MQXxNNwA9PV5Jn4d45WrgwAqD06KMwFQu2UyOEthp%2BlQRFkwxAp840yV8RwcR6uSlsS80IbOJh0dWJzmr4ZybACIRRDk9ky8yXPBENYEOKG%2FM1v1Aq7FXchFRA4Qxeo5EyH%2BvsZRze2GikLuy%2BlJR9VWgE1K&X-Amz-Signature=4ec91d2fd1a784c1e0456c956811447181d89ce26f210c9374a076b1cd35433a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIVVK74%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnXTlqZ4CkrqyChSqucPJXlwesbV5tY1FSbHnYeM74dAiEAomP2o0A7nEyzvc%2Bfc7Q7WI9ciXVNIgDE9VbR0%2FdMcJcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYY%2Bqn%2BDMmibIFrOSrcA7gIks2SZ0Js3j41YHpMr3STGx9%2F1hFIGKqURr6I09YIqUgIqz8P3aU8udHFeyAvqe%2FAOdf5XYszCHU9opnQKse83kUzu0dXQ1KtPmrlnWl3Tr8rPpPwtoczc4YAfGqKLEbCjW36lgoTk9W5GZG%2BWblDq6gk27B9GA1J3HOuXBvgzwciTpqII%2FmEes5gYy7JlrijPBm1LRbc45EDrqjXVrN1vXsKfD3us2MOORSoZKKA7ctb7qxO9AOGmllvz7Y6CSlnaehpvXRiwZQJW5k3fmKGHvr22%2FG78MnXOuKOaNTvleQwtsb85LvlBjnbaXgllh1sDR2sGBoZUPifUtdj0n3%2BMh6LHOy1Aw5hKz3EIlmB4qqZ%2Fb%2FVICSGMMhaWhDfsJ%2FggytMn1CPNRNywqi%2BbEgTeBsFkNMTmL5Esequ7FeiIbh9BcJiFd5TKc3l2yNxB%2FLoTIuppT6PI2zTps3xjZRLCtulf75j4OY6zxvuo7xhG6q9arfCuPS3olVgYSbTS34uamfQKhfkV3cXyUh7hczYm3lVCr7weksFcyob3BBvzdT%2F9SFf7kXGspbyqidXWLK4VKD3Ns%2B9hxOHhfhotpLrbAL13NTZgS%2FUbIy6nnSVyJ%2BvERmqyAB8GV6xMNWv%2FcAGOqUBiiyxL1nzYI0nReaOD%2Fi8jdNslZqrow14NNuWGJ7WWRnpxeCtio%2FJVVSsHYLja1i7MQXxNNwA9PV5Jn4d45WrgwAqD06KMwFQu2UyOEthp%2BlQRFkwxAp840yV8RwcR6uSlsS80IbOJh0dWJzmr4ZybACIRRDk9ky8yXPBENYEOKG%2FM1v1Aq7FXchFRA4Qxeo5EyH%2BvsZRze2GikLuy%2BlJR9VWgE1K&X-Amz-Signature=da6d274d31cd5376fcf6b1a63e7f635be27ba4d350f4bdb457ef05739fa2ef7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIVVK74%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnXTlqZ4CkrqyChSqucPJXlwesbV5tY1FSbHnYeM74dAiEAomP2o0A7nEyzvc%2Bfc7Q7WI9ciXVNIgDE9VbR0%2FdMcJcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYY%2Bqn%2BDMmibIFrOSrcA7gIks2SZ0Js3j41YHpMr3STGx9%2F1hFIGKqURr6I09YIqUgIqz8P3aU8udHFeyAvqe%2FAOdf5XYszCHU9opnQKse83kUzu0dXQ1KtPmrlnWl3Tr8rPpPwtoczc4YAfGqKLEbCjW36lgoTk9W5GZG%2BWblDq6gk27B9GA1J3HOuXBvgzwciTpqII%2FmEes5gYy7JlrijPBm1LRbc45EDrqjXVrN1vXsKfD3us2MOORSoZKKA7ctb7qxO9AOGmllvz7Y6CSlnaehpvXRiwZQJW5k3fmKGHvr22%2FG78MnXOuKOaNTvleQwtsb85LvlBjnbaXgllh1sDR2sGBoZUPifUtdj0n3%2BMh6LHOy1Aw5hKz3EIlmB4qqZ%2Fb%2FVICSGMMhaWhDfsJ%2FggytMn1CPNRNywqi%2BbEgTeBsFkNMTmL5Esequ7FeiIbh9BcJiFd5TKc3l2yNxB%2FLoTIuppT6PI2zTps3xjZRLCtulf75j4OY6zxvuo7xhG6q9arfCuPS3olVgYSbTS34uamfQKhfkV3cXyUh7hczYm3lVCr7weksFcyob3BBvzdT%2F9SFf7kXGspbyqidXWLK4VKD3Ns%2B9hxOHhfhotpLrbAL13NTZgS%2FUbIy6nnSVyJ%2BvERmqyAB8GV6xMNWv%2FcAGOqUBiiyxL1nzYI0nReaOD%2Fi8jdNslZqrow14NNuWGJ7WWRnpxeCtio%2FJVVSsHYLja1i7MQXxNNwA9PV5Jn4d45WrgwAqD06KMwFQu2UyOEthp%2BlQRFkwxAp840yV8RwcR6uSlsS80IbOJh0dWJzmr4ZybACIRRDk9ky8yXPBENYEOKG%2FM1v1Aq7FXchFRA4Qxeo5EyH%2BvsZRze2GikLuy%2BlJR9VWgE1K&X-Amz-Signature=2df27e4c67f4264ae1a78a126aa762b1072000466a213a73e1159cd4e1762221&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIVVK74%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnXTlqZ4CkrqyChSqucPJXlwesbV5tY1FSbHnYeM74dAiEAomP2o0A7nEyzvc%2Bfc7Q7WI9ciXVNIgDE9VbR0%2FdMcJcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYY%2Bqn%2BDMmibIFrOSrcA7gIks2SZ0Js3j41YHpMr3STGx9%2F1hFIGKqURr6I09YIqUgIqz8P3aU8udHFeyAvqe%2FAOdf5XYszCHU9opnQKse83kUzu0dXQ1KtPmrlnWl3Tr8rPpPwtoczc4YAfGqKLEbCjW36lgoTk9W5GZG%2BWblDq6gk27B9GA1J3HOuXBvgzwciTpqII%2FmEes5gYy7JlrijPBm1LRbc45EDrqjXVrN1vXsKfD3us2MOORSoZKKA7ctb7qxO9AOGmllvz7Y6CSlnaehpvXRiwZQJW5k3fmKGHvr22%2FG78MnXOuKOaNTvleQwtsb85LvlBjnbaXgllh1sDR2sGBoZUPifUtdj0n3%2BMh6LHOy1Aw5hKz3EIlmB4qqZ%2Fb%2FVICSGMMhaWhDfsJ%2FggytMn1CPNRNywqi%2BbEgTeBsFkNMTmL5Esequ7FeiIbh9BcJiFd5TKc3l2yNxB%2FLoTIuppT6PI2zTps3xjZRLCtulf75j4OY6zxvuo7xhG6q9arfCuPS3olVgYSbTS34uamfQKhfkV3cXyUh7hczYm3lVCr7weksFcyob3BBvzdT%2F9SFf7kXGspbyqidXWLK4VKD3Ns%2B9hxOHhfhotpLrbAL13NTZgS%2FUbIy6nnSVyJ%2BvERmqyAB8GV6xMNWv%2FcAGOqUBiiyxL1nzYI0nReaOD%2Fi8jdNslZqrow14NNuWGJ7WWRnpxeCtio%2FJVVSsHYLja1i7MQXxNNwA9PV5Jn4d45WrgwAqD06KMwFQu2UyOEthp%2BlQRFkwxAp840yV8RwcR6uSlsS80IbOJh0dWJzmr4ZybACIRRDk9ky8yXPBENYEOKG%2FM1v1Aq7FXchFRA4Qxeo5EyH%2BvsZRze2GikLuy%2BlJR9VWgE1K&X-Amz-Signature=a6b90ffb448de73470abed3ecc16db9ec29abe1f659b24f720e3b1af06138671&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
