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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7B5KYH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCClwsqi71KV9Y%2FbWRABHhBllJM0ZkU0kLCXayK1QJGNwIgXIWiY7iqdcaRjHaiQ4oqX4ybH29ZLStJwX1Jg54nPZUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv%2Fioa6EL73TEDRWCrcA8zyzXU6jCPFYhfW2JxQPonEIjhDDbMGce9LIINzhGIZQ59BTfqSPt14umRaRB%2Fjj7l7wUxY5V8y8M9qa6yVg3YbWKHNMYDrwA6GnCFOrr%2Bokzo3Usi782zCSNB%2Bf8H6zHb2HiccaWSMryfuoPuN6B74lqaj2iK1jDdl5zX%2FIHYHskHKmb06h5u%2FFhghp0eJcsjccc3rDa2%2FjTXB90lL0k396t%2FjEpoeF7ftbpBOqyC%2FZM8l5obGbLdSEMbtBDwUAi1rlpob2EyfD0w9ya1jxgy8vptkN4P%2FeBWLXmJJ8fY2wpufwZUgpJOzbveiN3oajcGrATgei2btsP%2BRLii1YQAyAjxppeiNIhYccy0Z0igDo%2FacTrqddQbQd3TXXIAf2NQsfMoBcG2gmW4h8IevjaEncLZejBOxK6kOazEqF1Nx35xA3pKUP9lCg23nuK3xL9EaRdHKV5NrNJ0UFk6by30D0NduRGv%2B9X9uNmTKD76xKRGqSRBpex%2F4yUhxYMDIYHRCDYyeYHwXack2H17NODllN0%2FQRF5b%2BPLMuAyQIRhF%2BbkSHtgf%2BLmhSUE9OahXh9Fu0cEvQrhfUOkgGmtPNSDw6D3VRJL%2BNXRw%2BypM%2FYKtakPDejcN8h5LIAP4MNy00cQGOqUBp15JN6zg4Voe7StxoWYnOlXRCabqCi683NWyWWWLtcjhjPiGHJG2VD6JshN7EM%2FNJ2s8RLPJtkQMyukX%2BU4U3vzSeFofT81BzoqB8Er4XQn7W7QARq9STTXHF0H2JSKff6A37o%2FIxU%2FrTVW7aDWx0cmJUWYosAOG26KzJidvyRmgGlFEVks%2Bwltk%2F2oD6d6JkTrCxv2YzhmSkHdf56Ut6AugzC6j&X-Amz-Signature=5224ded9aa14622b5abe9fb668e9d3fcfac69497c60ca696144428e6c1d53f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7B5KYH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCClwsqi71KV9Y%2FbWRABHhBllJM0ZkU0kLCXayK1QJGNwIgXIWiY7iqdcaRjHaiQ4oqX4ybH29ZLStJwX1Jg54nPZUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv%2Fioa6EL73TEDRWCrcA8zyzXU6jCPFYhfW2JxQPonEIjhDDbMGce9LIINzhGIZQ59BTfqSPt14umRaRB%2Fjj7l7wUxY5V8y8M9qa6yVg3YbWKHNMYDrwA6GnCFOrr%2Bokzo3Usi782zCSNB%2Bf8H6zHb2HiccaWSMryfuoPuN6B74lqaj2iK1jDdl5zX%2FIHYHskHKmb06h5u%2FFhghp0eJcsjccc3rDa2%2FjTXB90lL0k396t%2FjEpoeF7ftbpBOqyC%2FZM8l5obGbLdSEMbtBDwUAi1rlpob2EyfD0w9ya1jxgy8vptkN4P%2FeBWLXmJJ8fY2wpufwZUgpJOzbveiN3oajcGrATgei2btsP%2BRLii1YQAyAjxppeiNIhYccy0Z0igDo%2FacTrqddQbQd3TXXIAf2NQsfMoBcG2gmW4h8IevjaEncLZejBOxK6kOazEqF1Nx35xA3pKUP9lCg23nuK3xL9EaRdHKV5NrNJ0UFk6by30D0NduRGv%2B9X9uNmTKD76xKRGqSRBpex%2F4yUhxYMDIYHRCDYyeYHwXack2H17NODllN0%2FQRF5b%2BPLMuAyQIRhF%2BbkSHtgf%2BLmhSUE9OahXh9Fu0cEvQrhfUOkgGmtPNSDw6D3VRJL%2BNXRw%2BypM%2FYKtakPDejcN8h5LIAP4MNy00cQGOqUBp15JN6zg4Voe7StxoWYnOlXRCabqCi683NWyWWWLtcjhjPiGHJG2VD6JshN7EM%2FNJ2s8RLPJtkQMyukX%2BU4U3vzSeFofT81BzoqB8Er4XQn7W7QARq9STTXHF0H2JSKff6A37o%2FIxU%2FrTVW7aDWx0cmJUWYosAOG26KzJidvyRmgGlFEVks%2Bwltk%2F2oD6d6JkTrCxv2YzhmSkHdf56Ut6AugzC6j&X-Amz-Signature=f9959a8152209f24278032b97a081ae7a7cb071aa76fa9a860fe67123c4cf91f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7B5KYH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCClwsqi71KV9Y%2FbWRABHhBllJM0ZkU0kLCXayK1QJGNwIgXIWiY7iqdcaRjHaiQ4oqX4ybH29ZLStJwX1Jg54nPZUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv%2Fioa6EL73TEDRWCrcA8zyzXU6jCPFYhfW2JxQPonEIjhDDbMGce9LIINzhGIZQ59BTfqSPt14umRaRB%2Fjj7l7wUxY5V8y8M9qa6yVg3YbWKHNMYDrwA6GnCFOrr%2Bokzo3Usi782zCSNB%2Bf8H6zHb2HiccaWSMryfuoPuN6B74lqaj2iK1jDdl5zX%2FIHYHskHKmb06h5u%2FFhghp0eJcsjccc3rDa2%2FjTXB90lL0k396t%2FjEpoeF7ftbpBOqyC%2FZM8l5obGbLdSEMbtBDwUAi1rlpob2EyfD0w9ya1jxgy8vptkN4P%2FeBWLXmJJ8fY2wpufwZUgpJOzbveiN3oajcGrATgei2btsP%2BRLii1YQAyAjxppeiNIhYccy0Z0igDo%2FacTrqddQbQd3TXXIAf2NQsfMoBcG2gmW4h8IevjaEncLZejBOxK6kOazEqF1Nx35xA3pKUP9lCg23nuK3xL9EaRdHKV5NrNJ0UFk6by30D0NduRGv%2B9X9uNmTKD76xKRGqSRBpex%2F4yUhxYMDIYHRCDYyeYHwXack2H17NODllN0%2FQRF5b%2BPLMuAyQIRhF%2BbkSHtgf%2BLmhSUE9OahXh9Fu0cEvQrhfUOkgGmtPNSDw6D3VRJL%2BNXRw%2BypM%2FYKtakPDejcN8h5LIAP4MNy00cQGOqUBp15JN6zg4Voe7StxoWYnOlXRCabqCi683NWyWWWLtcjhjPiGHJG2VD6JshN7EM%2FNJ2s8RLPJtkQMyukX%2BU4U3vzSeFofT81BzoqB8Er4XQn7W7QARq9STTXHF0H2JSKff6A37o%2FIxU%2FrTVW7aDWx0cmJUWYosAOG26KzJidvyRmgGlFEVks%2Bwltk%2F2oD6d6JkTrCxv2YzhmSkHdf56Ut6AugzC6j&X-Amz-Signature=c0cad78f9958aaa3a58a4c53b7752560cd904771e3c4a9967a1be767fa12280a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7B5KYH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCClwsqi71KV9Y%2FbWRABHhBllJM0ZkU0kLCXayK1QJGNwIgXIWiY7iqdcaRjHaiQ4oqX4ybH29ZLStJwX1Jg54nPZUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv%2Fioa6EL73TEDRWCrcA8zyzXU6jCPFYhfW2JxQPonEIjhDDbMGce9LIINzhGIZQ59BTfqSPt14umRaRB%2Fjj7l7wUxY5V8y8M9qa6yVg3YbWKHNMYDrwA6GnCFOrr%2Bokzo3Usi782zCSNB%2Bf8H6zHb2HiccaWSMryfuoPuN6B74lqaj2iK1jDdl5zX%2FIHYHskHKmb06h5u%2FFhghp0eJcsjccc3rDa2%2FjTXB90lL0k396t%2FjEpoeF7ftbpBOqyC%2FZM8l5obGbLdSEMbtBDwUAi1rlpob2EyfD0w9ya1jxgy8vptkN4P%2FeBWLXmJJ8fY2wpufwZUgpJOzbveiN3oajcGrATgei2btsP%2BRLii1YQAyAjxppeiNIhYccy0Z0igDo%2FacTrqddQbQd3TXXIAf2NQsfMoBcG2gmW4h8IevjaEncLZejBOxK6kOazEqF1Nx35xA3pKUP9lCg23nuK3xL9EaRdHKV5NrNJ0UFk6by30D0NduRGv%2B9X9uNmTKD76xKRGqSRBpex%2F4yUhxYMDIYHRCDYyeYHwXack2H17NODllN0%2FQRF5b%2BPLMuAyQIRhF%2BbkSHtgf%2BLmhSUE9OahXh9Fu0cEvQrhfUOkgGmtPNSDw6D3VRJL%2BNXRw%2BypM%2FYKtakPDejcN8h5LIAP4MNy00cQGOqUBp15JN6zg4Voe7StxoWYnOlXRCabqCi683NWyWWWLtcjhjPiGHJG2VD6JshN7EM%2FNJ2s8RLPJtkQMyukX%2BU4U3vzSeFofT81BzoqB8Er4XQn7W7QARq9STTXHF0H2JSKff6A37o%2FIxU%2FrTVW7aDWx0cmJUWYosAOG26KzJidvyRmgGlFEVks%2Bwltk%2F2oD6d6JkTrCxv2YzhmSkHdf56Ut6AugzC6j&X-Amz-Signature=0c63bb68eb00de3308d122a4bb3cf68ac8c7afd5a1f2e9ad03dd3b69e98e871b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7B5KYH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCClwsqi71KV9Y%2FbWRABHhBllJM0ZkU0kLCXayK1QJGNwIgXIWiY7iqdcaRjHaiQ4oqX4ybH29ZLStJwX1Jg54nPZUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv%2Fioa6EL73TEDRWCrcA8zyzXU6jCPFYhfW2JxQPonEIjhDDbMGce9LIINzhGIZQ59BTfqSPt14umRaRB%2Fjj7l7wUxY5V8y8M9qa6yVg3YbWKHNMYDrwA6GnCFOrr%2Bokzo3Usi782zCSNB%2Bf8H6zHb2HiccaWSMryfuoPuN6B74lqaj2iK1jDdl5zX%2FIHYHskHKmb06h5u%2FFhghp0eJcsjccc3rDa2%2FjTXB90lL0k396t%2FjEpoeF7ftbpBOqyC%2FZM8l5obGbLdSEMbtBDwUAi1rlpob2EyfD0w9ya1jxgy8vptkN4P%2FeBWLXmJJ8fY2wpufwZUgpJOzbveiN3oajcGrATgei2btsP%2BRLii1YQAyAjxppeiNIhYccy0Z0igDo%2FacTrqddQbQd3TXXIAf2NQsfMoBcG2gmW4h8IevjaEncLZejBOxK6kOazEqF1Nx35xA3pKUP9lCg23nuK3xL9EaRdHKV5NrNJ0UFk6by30D0NduRGv%2B9X9uNmTKD76xKRGqSRBpex%2F4yUhxYMDIYHRCDYyeYHwXack2H17NODllN0%2FQRF5b%2BPLMuAyQIRhF%2BbkSHtgf%2BLmhSUE9OahXh9Fu0cEvQrhfUOkgGmtPNSDw6D3VRJL%2BNXRw%2BypM%2FYKtakPDejcN8h5LIAP4MNy00cQGOqUBp15JN6zg4Voe7StxoWYnOlXRCabqCi683NWyWWWLtcjhjPiGHJG2VD6JshN7EM%2FNJ2s8RLPJtkQMyukX%2BU4U3vzSeFofT81BzoqB8Er4XQn7W7QARq9STTXHF0H2JSKff6A37o%2FIxU%2FrTVW7aDWx0cmJUWYosAOG26KzJidvyRmgGlFEVks%2Bwltk%2F2oD6d6JkTrCxv2YzhmSkHdf56Ut6AugzC6j&X-Amz-Signature=ee93090d580500d85c1dd423d04bb56d40da756429ded3ea72d051e83d96b6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
