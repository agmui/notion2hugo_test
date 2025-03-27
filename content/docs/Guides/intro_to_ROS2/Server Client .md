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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJR5IP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcBbfrxMzBwn1suxALQQTKcTaSq%2FNNwMG9VIKTPVafQAiEA5055A%2BR40ZFb4oQqw%2BigmTw69RGfN50j3g%2FaY9PxprYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDCa5fflpSGiUVi6kSrcA8tRUnTo9KhqW3%2FO8rIq%2Bm1CaWf4QXnsKAc5DNRSVV0DvNWj4aEr3YEs67tg%2BVsWIQ6oomn3QBwB75%2Fd7jGlef1u796v93%2FGF9ahsJy3Dkrilbyoo%2BbdvNv%2Fm9dTTZVU5gDqmbiUW5vcbeYg00bfJ5JJbgOyNpaiQ2BOM%2BA2eVdmlXtmAv0Kgfee3IR0Br0Hg%2FLpcVaT1dryf%2BtQ%2BlbkJJaWBqZQ%2F6JX7g0rVrQQn8lPcxdzeYJqNbdbPMJwyNo6xZDfYKDRLoiQfV7u8tlU3rVHnC0Z0jsUierh0t0OYwijYEdSt%2BxNUTmn3RvrkfOq4CI80IljKYsKwx4cOE84qA0Bf7tqUrxAoQA66ME3nC%2BOy14AdiwhyvVy7VRpeEoTSWtk2vLrGID1AO9loEtMwityW%2Boalt19FU9bJhfBCiy%2FezI%2FLiEPEhtfSsW2aP4Tdyd9cgum8Rx4kHgbU2Szaoqav27R4E1mXsbTIemwVHfgk1jPt9UVla9uIs5sIBZVdxBipxKJv4eoyfoqtqK8EDoCYnaVwbJkvhTxdF2nPzwzGL75Bn99VIncxz1AneaolY5%2FSCPJJj8Y45LexxPbXa3h4oRWbE8VsHASCjapmTHE7wx9ZQVS9y4XuVwZMIyjlr8GOqUB642w2fSPiMoFENV3QkCEK%2BiWvbh07nuqAq4szHAMclsF%2BTe8LtfHqspkbjzBkWXvDmLLtdl8B9WnrGCC%2FNBWCFpBUxqnaF6IZxqiW5tLdqVOMNe%2FGjeHkIMcMQn6IowOESh1iFzYC9E8eB3JNutoe6ZHUekP11hBrjJNVFnurcOD5XVF5dzolG6ShDz1cfiFLQ%2FYcP6O7E2N%2F7S55%2ByyfGRUA%2Fn0&X-Amz-Signature=996f41d3f85a21fb2d625009c1ebdef76c35cb9ceabcb0d087c6169653d3a44c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJR5IP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcBbfrxMzBwn1suxALQQTKcTaSq%2FNNwMG9VIKTPVafQAiEA5055A%2BR40ZFb4oQqw%2BigmTw69RGfN50j3g%2FaY9PxprYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDCa5fflpSGiUVi6kSrcA8tRUnTo9KhqW3%2FO8rIq%2Bm1CaWf4QXnsKAc5DNRSVV0DvNWj4aEr3YEs67tg%2BVsWIQ6oomn3QBwB75%2Fd7jGlef1u796v93%2FGF9ahsJy3Dkrilbyoo%2BbdvNv%2Fm9dTTZVU5gDqmbiUW5vcbeYg00bfJ5JJbgOyNpaiQ2BOM%2BA2eVdmlXtmAv0Kgfee3IR0Br0Hg%2FLpcVaT1dryf%2BtQ%2BlbkJJaWBqZQ%2F6JX7g0rVrQQn8lPcxdzeYJqNbdbPMJwyNo6xZDfYKDRLoiQfV7u8tlU3rVHnC0Z0jsUierh0t0OYwijYEdSt%2BxNUTmn3RvrkfOq4CI80IljKYsKwx4cOE84qA0Bf7tqUrxAoQA66ME3nC%2BOy14AdiwhyvVy7VRpeEoTSWtk2vLrGID1AO9loEtMwityW%2Boalt19FU9bJhfBCiy%2FezI%2FLiEPEhtfSsW2aP4Tdyd9cgum8Rx4kHgbU2Szaoqav27R4E1mXsbTIemwVHfgk1jPt9UVla9uIs5sIBZVdxBipxKJv4eoyfoqtqK8EDoCYnaVwbJkvhTxdF2nPzwzGL75Bn99VIncxz1AneaolY5%2FSCPJJj8Y45LexxPbXa3h4oRWbE8VsHASCjapmTHE7wx9ZQVS9y4XuVwZMIyjlr8GOqUB642w2fSPiMoFENV3QkCEK%2BiWvbh07nuqAq4szHAMclsF%2BTe8LtfHqspkbjzBkWXvDmLLtdl8B9WnrGCC%2FNBWCFpBUxqnaF6IZxqiW5tLdqVOMNe%2FGjeHkIMcMQn6IowOESh1iFzYC9E8eB3JNutoe6ZHUekP11hBrjJNVFnurcOD5XVF5dzolG6ShDz1cfiFLQ%2FYcP6O7E2N%2F7S55%2ByyfGRUA%2Fn0&X-Amz-Signature=344f09000ffdc4c543197f4dde8d7b01b68fcf9caadce21d0046cf439391411a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJR5IP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcBbfrxMzBwn1suxALQQTKcTaSq%2FNNwMG9VIKTPVafQAiEA5055A%2BR40ZFb4oQqw%2BigmTw69RGfN50j3g%2FaY9PxprYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDCa5fflpSGiUVi6kSrcA8tRUnTo9KhqW3%2FO8rIq%2Bm1CaWf4QXnsKAc5DNRSVV0DvNWj4aEr3YEs67tg%2BVsWIQ6oomn3QBwB75%2Fd7jGlef1u796v93%2FGF9ahsJy3Dkrilbyoo%2BbdvNv%2Fm9dTTZVU5gDqmbiUW5vcbeYg00bfJ5JJbgOyNpaiQ2BOM%2BA2eVdmlXtmAv0Kgfee3IR0Br0Hg%2FLpcVaT1dryf%2BtQ%2BlbkJJaWBqZQ%2F6JX7g0rVrQQn8lPcxdzeYJqNbdbPMJwyNo6xZDfYKDRLoiQfV7u8tlU3rVHnC0Z0jsUierh0t0OYwijYEdSt%2BxNUTmn3RvrkfOq4CI80IljKYsKwx4cOE84qA0Bf7tqUrxAoQA66ME3nC%2BOy14AdiwhyvVy7VRpeEoTSWtk2vLrGID1AO9loEtMwityW%2Boalt19FU9bJhfBCiy%2FezI%2FLiEPEhtfSsW2aP4Tdyd9cgum8Rx4kHgbU2Szaoqav27R4E1mXsbTIemwVHfgk1jPt9UVla9uIs5sIBZVdxBipxKJv4eoyfoqtqK8EDoCYnaVwbJkvhTxdF2nPzwzGL75Bn99VIncxz1AneaolY5%2FSCPJJj8Y45LexxPbXa3h4oRWbE8VsHASCjapmTHE7wx9ZQVS9y4XuVwZMIyjlr8GOqUB642w2fSPiMoFENV3QkCEK%2BiWvbh07nuqAq4szHAMclsF%2BTe8LtfHqspkbjzBkWXvDmLLtdl8B9WnrGCC%2FNBWCFpBUxqnaF6IZxqiW5tLdqVOMNe%2FGjeHkIMcMQn6IowOESh1iFzYC9E8eB3JNutoe6ZHUekP11hBrjJNVFnurcOD5XVF5dzolG6ShDz1cfiFLQ%2FYcP6O7E2N%2F7S55%2ByyfGRUA%2Fn0&X-Amz-Signature=0b679ab9b84b1d16e61f30ec403e9d6a2824f1c887c9042afcd3abb928b83a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJR5IP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcBbfrxMzBwn1suxALQQTKcTaSq%2FNNwMG9VIKTPVafQAiEA5055A%2BR40ZFb4oQqw%2BigmTw69RGfN50j3g%2FaY9PxprYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDCa5fflpSGiUVi6kSrcA8tRUnTo9KhqW3%2FO8rIq%2Bm1CaWf4QXnsKAc5DNRSVV0DvNWj4aEr3YEs67tg%2BVsWIQ6oomn3QBwB75%2Fd7jGlef1u796v93%2FGF9ahsJy3Dkrilbyoo%2BbdvNv%2Fm9dTTZVU5gDqmbiUW5vcbeYg00bfJ5JJbgOyNpaiQ2BOM%2BA2eVdmlXtmAv0Kgfee3IR0Br0Hg%2FLpcVaT1dryf%2BtQ%2BlbkJJaWBqZQ%2F6JX7g0rVrQQn8lPcxdzeYJqNbdbPMJwyNo6xZDfYKDRLoiQfV7u8tlU3rVHnC0Z0jsUierh0t0OYwijYEdSt%2BxNUTmn3RvrkfOq4CI80IljKYsKwx4cOE84qA0Bf7tqUrxAoQA66ME3nC%2BOy14AdiwhyvVy7VRpeEoTSWtk2vLrGID1AO9loEtMwityW%2Boalt19FU9bJhfBCiy%2FezI%2FLiEPEhtfSsW2aP4Tdyd9cgum8Rx4kHgbU2Szaoqav27R4E1mXsbTIemwVHfgk1jPt9UVla9uIs5sIBZVdxBipxKJv4eoyfoqtqK8EDoCYnaVwbJkvhTxdF2nPzwzGL75Bn99VIncxz1AneaolY5%2FSCPJJj8Y45LexxPbXa3h4oRWbE8VsHASCjapmTHE7wx9ZQVS9y4XuVwZMIyjlr8GOqUB642w2fSPiMoFENV3QkCEK%2BiWvbh07nuqAq4szHAMclsF%2BTe8LtfHqspkbjzBkWXvDmLLtdl8B9WnrGCC%2FNBWCFpBUxqnaF6IZxqiW5tLdqVOMNe%2FGjeHkIMcMQn6IowOESh1iFzYC9E8eB3JNutoe6ZHUekP11hBrjJNVFnurcOD5XVF5dzolG6ShDz1cfiFLQ%2FYcP6O7E2N%2F7S55%2ByyfGRUA%2Fn0&X-Amz-Signature=e567b56605cc0022c80225fc18043673833a260106acf7fd1f7fc2faff3abf54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJR5IP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcBbfrxMzBwn1suxALQQTKcTaSq%2FNNwMG9VIKTPVafQAiEA5055A%2BR40ZFb4oQqw%2BigmTw69RGfN50j3g%2FaY9PxprYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDCa5fflpSGiUVi6kSrcA8tRUnTo9KhqW3%2FO8rIq%2Bm1CaWf4QXnsKAc5DNRSVV0DvNWj4aEr3YEs67tg%2BVsWIQ6oomn3QBwB75%2Fd7jGlef1u796v93%2FGF9ahsJy3Dkrilbyoo%2BbdvNv%2Fm9dTTZVU5gDqmbiUW5vcbeYg00bfJ5JJbgOyNpaiQ2BOM%2BA2eVdmlXtmAv0Kgfee3IR0Br0Hg%2FLpcVaT1dryf%2BtQ%2BlbkJJaWBqZQ%2F6JX7g0rVrQQn8lPcxdzeYJqNbdbPMJwyNo6xZDfYKDRLoiQfV7u8tlU3rVHnC0Z0jsUierh0t0OYwijYEdSt%2BxNUTmn3RvrkfOq4CI80IljKYsKwx4cOE84qA0Bf7tqUrxAoQA66ME3nC%2BOy14AdiwhyvVy7VRpeEoTSWtk2vLrGID1AO9loEtMwityW%2Boalt19FU9bJhfBCiy%2FezI%2FLiEPEhtfSsW2aP4Tdyd9cgum8Rx4kHgbU2Szaoqav27R4E1mXsbTIemwVHfgk1jPt9UVla9uIs5sIBZVdxBipxKJv4eoyfoqtqK8EDoCYnaVwbJkvhTxdF2nPzwzGL75Bn99VIncxz1AneaolY5%2FSCPJJj8Y45LexxPbXa3h4oRWbE8VsHASCjapmTHE7wx9ZQVS9y4XuVwZMIyjlr8GOqUB642w2fSPiMoFENV3QkCEK%2BiWvbh07nuqAq4szHAMclsF%2BTe8LtfHqspkbjzBkWXvDmLLtdl8B9WnrGCC%2FNBWCFpBUxqnaF6IZxqiW5tLdqVOMNe%2FGjeHkIMcMQn6IowOESh1iFzYC9E8eB3JNutoe6ZHUekP11hBrjJNVFnurcOD5XVF5dzolG6ShDz1cfiFLQ%2FYcP6O7E2N%2F7S55%2ByyfGRUA%2Fn0&X-Amz-Signature=bd6a2dd7b4a02afe76053da35a56dea9f4b767dd61efa1b6a62fbe63523643c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
