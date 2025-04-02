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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKIWFHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAslRMXwdeIOADNQ916%2FlYzjUmsezsRhCXGoLaW3m9geAiEAx1Y1RDOvotbelVVkJ4gcW4ViEeVDERQVqcDa2VPCsnwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDwEMsTX7hv9wW%2BiSrcAzdQc79pctIILW5uUs4OEgd48CDXMZ0hV2z6svZq0%2BFQg6RE8aZySyWk%2BbOkVQIEJYkOuDK35N8zVmmWJWViyBDDaZBmln%2B2%2FXaF8p6dkrtHoI61LWDgLsZ%2FkA6euxxsWw22FytGVbn5loKCR6a5i3VA8iyk4XqptvCrwSASgneW5qz%2FSiFtUiRwla6G6tq1PPKnTbC1MdB4aViK%2Fx2gMjWSVC3O1p8Kjz6TKEJtQy%2FlENQmmR1nNIRLjuGieaLGzp8aCnJuxxi8I1IITATqGhEn87aHLrhZZDP1su6sKEBhn0PWplqRBU%2FuonMFPyn3OqNHdPFEg12RD5k0rNnQYlMlziB1LtLkZ4aC1AIYxFxA%2FYVzE075Iu%2FGY4JIlgX9qChyClcehm26yfr%2BPbO1Wzk%2B7QkYEgm0I%2FQGAyTaH7vIGE7DV5vEe6WS%2FaaFO%2FZ37dp%2Bg8iBquKUaFuOWI3QyccwiDo%2F4kktBQ1Ne4rlK96MTaX4s8atFjO5oYPmfIpQZPwswtGugp%2FvhJiclhihsQSuBaXJXUO3k8apMH4yP61G2L8vrEg7txJYuG8vhWDB3qk4kvK9MR8bfF9LvexMMwzNq13pbm4D8x9Qfl23bH0ZGjPNwELJwZsVGrFkMPPXtr8GOqUBIM2sN5RWjV0eMeKLyk2V5xqUqiAiU8hSGgNRdjnO944%2F71IqW%2BMvw%2FrthIRdYtf%2F6hLsaKkk81SMUxn325rZZ9D4N97drcDNNkEM0M%2B1n3Ch0bD6Y1GuvV7ePYT%2BrSErQKCr4M9uvtbO3Cxu8xJqGv0znXtjWDQYwJVu5pMs8gxqDmv6KgAu1yJ%2F9X2CpT2XhLVDfZlJZdP%2ForA6hDzl5ugKRdZ2&X-Amz-Signature=77a77b80e261acff6e423bf98182a73095689913be80a1d503bf4aef05b15131&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKIWFHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAslRMXwdeIOADNQ916%2FlYzjUmsezsRhCXGoLaW3m9geAiEAx1Y1RDOvotbelVVkJ4gcW4ViEeVDERQVqcDa2VPCsnwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDwEMsTX7hv9wW%2BiSrcAzdQc79pctIILW5uUs4OEgd48CDXMZ0hV2z6svZq0%2BFQg6RE8aZySyWk%2BbOkVQIEJYkOuDK35N8zVmmWJWViyBDDaZBmln%2B2%2FXaF8p6dkrtHoI61LWDgLsZ%2FkA6euxxsWw22FytGVbn5loKCR6a5i3VA8iyk4XqptvCrwSASgneW5qz%2FSiFtUiRwla6G6tq1PPKnTbC1MdB4aViK%2Fx2gMjWSVC3O1p8Kjz6TKEJtQy%2FlENQmmR1nNIRLjuGieaLGzp8aCnJuxxi8I1IITATqGhEn87aHLrhZZDP1su6sKEBhn0PWplqRBU%2FuonMFPyn3OqNHdPFEg12RD5k0rNnQYlMlziB1LtLkZ4aC1AIYxFxA%2FYVzE075Iu%2FGY4JIlgX9qChyClcehm26yfr%2BPbO1Wzk%2B7QkYEgm0I%2FQGAyTaH7vIGE7DV5vEe6WS%2FaaFO%2FZ37dp%2Bg8iBquKUaFuOWI3QyccwiDo%2F4kktBQ1Ne4rlK96MTaX4s8atFjO5oYPmfIpQZPwswtGugp%2FvhJiclhihsQSuBaXJXUO3k8apMH4yP61G2L8vrEg7txJYuG8vhWDB3qk4kvK9MR8bfF9LvexMMwzNq13pbm4D8x9Qfl23bH0ZGjPNwELJwZsVGrFkMPPXtr8GOqUBIM2sN5RWjV0eMeKLyk2V5xqUqiAiU8hSGgNRdjnO944%2F71IqW%2BMvw%2FrthIRdYtf%2F6hLsaKkk81SMUxn325rZZ9D4N97drcDNNkEM0M%2B1n3Ch0bD6Y1GuvV7ePYT%2BrSErQKCr4M9uvtbO3Cxu8xJqGv0znXtjWDQYwJVu5pMs8gxqDmv6KgAu1yJ%2F9X2CpT2XhLVDfZlJZdP%2ForA6hDzl5ugKRdZ2&X-Amz-Signature=e068ce4a965f0c22a190c8ede0201fe0451ccc36a84582db311616eb71c47fee&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKIWFHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAslRMXwdeIOADNQ916%2FlYzjUmsezsRhCXGoLaW3m9geAiEAx1Y1RDOvotbelVVkJ4gcW4ViEeVDERQVqcDa2VPCsnwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDwEMsTX7hv9wW%2BiSrcAzdQc79pctIILW5uUs4OEgd48CDXMZ0hV2z6svZq0%2BFQg6RE8aZySyWk%2BbOkVQIEJYkOuDK35N8zVmmWJWViyBDDaZBmln%2B2%2FXaF8p6dkrtHoI61LWDgLsZ%2FkA6euxxsWw22FytGVbn5loKCR6a5i3VA8iyk4XqptvCrwSASgneW5qz%2FSiFtUiRwla6G6tq1PPKnTbC1MdB4aViK%2Fx2gMjWSVC3O1p8Kjz6TKEJtQy%2FlENQmmR1nNIRLjuGieaLGzp8aCnJuxxi8I1IITATqGhEn87aHLrhZZDP1su6sKEBhn0PWplqRBU%2FuonMFPyn3OqNHdPFEg12RD5k0rNnQYlMlziB1LtLkZ4aC1AIYxFxA%2FYVzE075Iu%2FGY4JIlgX9qChyClcehm26yfr%2BPbO1Wzk%2B7QkYEgm0I%2FQGAyTaH7vIGE7DV5vEe6WS%2FaaFO%2FZ37dp%2Bg8iBquKUaFuOWI3QyccwiDo%2F4kktBQ1Ne4rlK96MTaX4s8atFjO5oYPmfIpQZPwswtGugp%2FvhJiclhihsQSuBaXJXUO3k8apMH4yP61G2L8vrEg7txJYuG8vhWDB3qk4kvK9MR8bfF9LvexMMwzNq13pbm4D8x9Qfl23bH0ZGjPNwELJwZsVGrFkMPPXtr8GOqUBIM2sN5RWjV0eMeKLyk2V5xqUqiAiU8hSGgNRdjnO944%2F71IqW%2BMvw%2FrthIRdYtf%2F6hLsaKkk81SMUxn325rZZ9D4N97drcDNNkEM0M%2B1n3Ch0bD6Y1GuvV7ePYT%2BrSErQKCr4M9uvtbO3Cxu8xJqGv0znXtjWDQYwJVu5pMs8gxqDmv6KgAu1yJ%2F9X2CpT2XhLVDfZlJZdP%2ForA6hDzl5ugKRdZ2&X-Amz-Signature=db5ed3ccb1d0f358d13e82f7cd9bd09fa6d54d0af0a67a013da0239607bc6c78&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKIWFHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAslRMXwdeIOADNQ916%2FlYzjUmsezsRhCXGoLaW3m9geAiEAx1Y1RDOvotbelVVkJ4gcW4ViEeVDERQVqcDa2VPCsnwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDwEMsTX7hv9wW%2BiSrcAzdQc79pctIILW5uUs4OEgd48CDXMZ0hV2z6svZq0%2BFQg6RE8aZySyWk%2BbOkVQIEJYkOuDK35N8zVmmWJWViyBDDaZBmln%2B2%2FXaF8p6dkrtHoI61LWDgLsZ%2FkA6euxxsWw22FytGVbn5loKCR6a5i3VA8iyk4XqptvCrwSASgneW5qz%2FSiFtUiRwla6G6tq1PPKnTbC1MdB4aViK%2Fx2gMjWSVC3O1p8Kjz6TKEJtQy%2FlENQmmR1nNIRLjuGieaLGzp8aCnJuxxi8I1IITATqGhEn87aHLrhZZDP1su6sKEBhn0PWplqRBU%2FuonMFPyn3OqNHdPFEg12RD5k0rNnQYlMlziB1LtLkZ4aC1AIYxFxA%2FYVzE075Iu%2FGY4JIlgX9qChyClcehm26yfr%2BPbO1Wzk%2B7QkYEgm0I%2FQGAyTaH7vIGE7DV5vEe6WS%2FaaFO%2FZ37dp%2Bg8iBquKUaFuOWI3QyccwiDo%2F4kktBQ1Ne4rlK96MTaX4s8atFjO5oYPmfIpQZPwswtGugp%2FvhJiclhihsQSuBaXJXUO3k8apMH4yP61G2L8vrEg7txJYuG8vhWDB3qk4kvK9MR8bfF9LvexMMwzNq13pbm4D8x9Qfl23bH0ZGjPNwELJwZsVGrFkMPPXtr8GOqUBIM2sN5RWjV0eMeKLyk2V5xqUqiAiU8hSGgNRdjnO944%2F71IqW%2BMvw%2FrthIRdYtf%2F6hLsaKkk81SMUxn325rZZ9D4N97drcDNNkEM0M%2B1n3Ch0bD6Y1GuvV7ePYT%2BrSErQKCr4M9uvtbO3Cxu8xJqGv0znXtjWDQYwJVu5pMs8gxqDmv6KgAu1yJ%2F9X2CpT2XhLVDfZlJZdP%2ForA6hDzl5ugKRdZ2&X-Amz-Signature=de96d0887224512cc1bf485276bdff950d99bbf185cd0fe23ec84cd779fcec9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKIWFHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAslRMXwdeIOADNQ916%2FlYzjUmsezsRhCXGoLaW3m9geAiEAx1Y1RDOvotbelVVkJ4gcW4ViEeVDERQVqcDa2VPCsnwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDwEMsTX7hv9wW%2BiSrcAzdQc79pctIILW5uUs4OEgd48CDXMZ0hV2z6svZq0%2BFQg6RE8aZySyWk%2BbOkVQIEJYkOuDK35N8zVmmWJWViyBDDaZBmln%2B2%2FXaF8p6dkrtHoI61LWDgLsZ%2FkA6euxxsWw22FytGVbn5loKCR6a5i3VA8iyk4XqptvCrwSASgneW5qz%2FSiFtUiRwla6G6tq1PPKnTbC1MdB4aViK%2Fx2gMjWSVC3O1p8Kjz6TKEJtQy%2FlENQmmR1nNIRLjuGieaLGzp8aCnJuxxi8I1IITATqGhEn87aHLrhZZDP1su6sKEBhn0PWplqRBU%2FuonMFPyn3OqNHdPFEg12RD5k0rNnQYlMlziB1LtLkZ4aC1AIYxFxA%2FYVzE075Iu%2FGY4JIlgX9qChyClcehm26yfr%2BPbO1Wzk%2B7QkYEgm0I%2FQGAyTaH7vIGE7DV5vEe6WS%2FaaFO%2FZ37dp%2Bg8iBquKUaFuOWI3QyccwiDo%2F4kktBQ1Ne4rlK96MTaX4s8atFjO5oYPmfIpQZPwswtGugp%2FvhJiclhihsQSuBaXJXUO3k8apMH4yP61G2L8vrEg7txJYuG8vhWDB3qk4kvK9MR8bfF9LvexMMwzNq13pbm4D8x9Qfl23bH0ZGjPNwELJwZsVGrFkMPPXtr8GOqUBIM2sN5RWjV0eMeKLyk2V5xqUqiAiU8hSGgNRdjnO944%2F71IqW%2BMvw%2FrthIRdYtf%2F6hLsaKkk81SMUxn325rZZ9D4N97drcDNNkEM0M%2B1n3Ch0bD6Y1GuvV7ePYT%2BrSErQKCr4M9uvtbO3Cxu8xJqGv0znXtjWDQYwJVu5pMs8gxqDmv6KgAu1yJ%2F9X2CpT2XhLVDfZlJZdP%2ForA6hDzl5ugKRdZ2&X-Amz-Signature=6520896a7195eb9974478a1d35db522621e76826aa6bc7ac26c44c0323cbb0a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
