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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJ6HGMT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWf4sZJ0HNpWSX7Aozt1SZyN7N3q7KuPwhZcSgt598AIhAJHXti8CR8ck3ptd1Y3o0dqBnc%2BiHbOY5vB2d%2B4Rb7hCKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz135eCLp%2Bnlj%2BDP%2B8q3AN0NKfN1RHrxCFXpsOfJPd%2FfgNSyRKfWYpMArA4sIyN2ezMGzlwV8p5AnMgpn9wgOzRoSsQh4Ker9z%2BcyxEZ%2F4mvmT7DP0CgU3qcakRk3IJkVaFf5CtE%2BFGjdUWaq0T4DW%2FT0Q8hNZgT8FO8HR1c0jDMBtK7PEH1hMkL4M8VSSeqnte3cSZTghYgpYP%2BBDPZsaSuMuDe2c49hJvz4BfAQx9sFjLuCfNt3G6gAmnfOUzB3It%2FpXBx8GLJkdrfsXbnoM6AI14VC%2BAF167H8lUGNCN0PF%2BgombnoioxjucSg0F5zk%2FtA2tLRaEIYKJvOByzFZUxW2SPm%2F1JTG3otJj8TVqUVCLEIY0p%2B%2BD2N6PUQ0DWPad4BukDWfTXXhqcfC3hnzpT%2B3YIp0f5LTEDFpW4Uv7%2B4oATuzwewxXYqjOBzAuaX9Na7Q5JU2%2F%2FHOfDz%2FcfpcnoYPfEMw%2B7rW9yE29N4EinLn4e5ZOGq5G%2BshNn7v1xIRunQpdbOV3QKPfJiV%2BROskNirIfwUC2pjYobdhr5Wrgv4AhajF8awIR1RjXweADtljtE1R0bpyLMbZR%2BACBx%2FtM%2BjlJo6IQecTXE9B5jffTo4%2FPxDy4XxWh3NQn89B5%2Bf9B2FgL40174dFjTCS7eS9BjqkARYwDBs2aIh%2FrFHMvOnCcUXhp%2Bhc5XnlEHbAmIT%2B9Z2xDDReSYSthFiAoJQk8fhFifFarWRXpaOCP7JSY1Rj3KZQ8wleLoHZ6tO99fDt70OEMwvYbZx8Rpq9avHRbAtuAzpLlZGjd5kyusf1h05EBuuK844hEw2s%2Fz5POl6CUnDYLeyK9MEPFxtxJPoQZ18xT386K7V7Kv98DccP5ckzvdQsp9gP&X-Amz-Signature=03a6949f94afab5d72fa8b23ca231b7f5366aa475380772ff0622b3657633808&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJ6HGMT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWf4sZJ0HNpWSX7Aozt1SZyN7N3q7KuPwhZcSgt598AIhAJHXti8CR8ck3ptd1Y3o0dqBnc%2BiHbOY5vB2d%2B4Rb7hCKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz135eCLp%2Bnlj%2BDP%2B8q3AN0NKfN1RHrxCFXpsOfJPd%2FfgNSyRKfWYpMArA4sIyN2ezMGzlwV8p5AnMgpn9wgOzRoSsQh4Ker9z%2BcyxEZ%2F4mvmT7DP0CgU3qcakRk3IJkVaFf5CtE%2BFGjdUWaq0T4DW%2FT0Q8hNZgT8FO8HR1c0jDMBtK7PEH1hMkL4M8VSSeqnte3cSZTghYgpYP%2BBDPZsaSuMuDe2c49hJvz4BfAQx9sFjLuCfNt3G6gAmnfOUzB3It%2FpXBx8GLJkdrfsXbnoM6AI14VC%2BAF167H8lUGNCN0PF%2BgombnoioxjucSg0F5zk%2FtA2tLRaEIYKJvOByzFZUxW2SPm%2F1JTG3otJj8TVqUVCLEIY0p%2B%2BD2N6PUQ0DWPad4BukDWfTXXhqcfC3hnzpT%2B3YIp0f5LTEDFpW4Uv7%2B4oATuzwewxXYqjOBzAuaX9Na7Q5JU2%2F%2FHOfDz%2FcfpcnoYPfEMw%2B7rW9yE29N4EinLn4e5ZOGq5G%2BshNn7v1xIRunQpdbOV3QKPfJiV%2BROskNirIfwUC2pjYobdhr5Wrgv4AhajF8awIR1RjXweADtljtE1R0bpyLMbZR%2BACBx%2FtM%2BjlJo6IQecTXE9B5jffTo4%2FPxDy4XxWh3NQn89B5%2Bf9B2FgL40174dFjTCS7eS9BjqkARYwDBs2aIh%2FrFHMvOnCcUXhp%2Bhc5XnlEHbAmIT%2B9Z2xDDReSYSthFiAoJQk8fhFifFarWRXpaOCP7JSY1Rj3KZQ8wleLoHZ6tO99fDt70OEMwvYbZx8Rpq9avHRbAtuAzpLlZGjd5kyusf1h05EBuuK844hEw2s%2Fz5POl6CUnDYLeyK9MEPFxtxJPoQZ18xT386K7V7Kv98DccP5ckzvdQsp9gP&X-Amz-Signature=ce7db41eb7689f9181cc32eef05a700f0f691062e27fd0b6556591520028bc4f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJ6HGMT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWf4sZJ0HNpWSX7Aozt1SZyN7N3q7KuPwhZcSgt598AIhAJHXti8CR8ck3ptd1Y3o0dqBnc%2BiHbOY5vB2d%2B4Rb7hCKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz135eCLp%2Bnlj%2BDP%2B8q3AN0NKfN1RHrxCFXpsOfJPd%2FfgNSyRKfWYpMArA4sIyN2ezMGzlwV8p5AnMgpn9wgOzRoSsQh4Ker9z%2BcyxEZ%2F4mvmT7DP0CgU3qcakRk3IJkVaFf5CtE%2BFGjdUWaq0T4DW%2FT0Q8hNZgT8FO8HR1c0jDMBtK7PEH1hMkL4M8VSSeqnte3cSZTghYgpYP%2BBDPZsaSuMuDe2c49hJvz4BfAQx9sFjLuCfNt3G6gAmnfOUzB3It%2FpXBx8GLJkdrfsXbnoM6AI14VC%2BAF167H8lUGNCN0PF%2BgombnoioxjucSg0F5zk%2FtA2tLRaEIYKJvOByzFZUxW2SPm%2F1JTG3otJj8TVqUVCLEIY0p%2B%2BD2N6PUQ0DWPad4BukDWfTXXhqcfC3hnzpT%2B3YIp0f5LTEDFpW4Uv7%2B4oATuzwewxXYqjOBzAuaX9Na7Q5JU2%2F%2FHOfDz%2FcfpcnoYPfEMw%2B7rW9yE29N4EinLn4e5ZOGq5G%2BshNn7v1xIRunQpdbOV3QKPfJiV%2BROskNirIfwUC2pjYobdhr5Wrgv4AhajF8awIR1RjXweADtljtE1R0bpyLMbZR%2BACBx%2FtM%2BjlJo6IQecTXE9B5jffTo4%2FPxDy4XxWh3NQn89B5%2Bf9B2FgL40174dFjTCS7eS9BjqkARYwDBs2aIh%2FrFHMvOnCcUXhp%2Bhc5XnlEHbAmIT%2B9Z2xDDReSYSthFiAoJQk8fhFifFarWRXpaOCP7JSY1Rj3KZQ8wleLoHZ6tO99fDt70OEMwvYbZx8Rpq9avHRbAtuAzpLlZGjd5kyusf1h05EBuuK844hEw2s%2Fz5POl6CUnDYLeyK9MEPFxtxJPoQZ18xT386K7V7Kv98DccP5ckzvdQsp9gP&X-Amz-Signature=4af33169b159b85345a8a33269bb6ecb98bd4c5c7bb02f56e770f62823e51371&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJ6HGMT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWf4sZJ0HNpWSX7Aozt1SZyN7N3q7KuPwhZcSgt598AIhAJHXti8CR8ck3ptd1Y3o0dqBnc%2BiHbOY5vB2d%2B4Rb7hCKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz135eCLp%2Bnlj%2BDP%2B8q3AN0NKfN1RHrxCFXpsOfJPd%2FfgNSyRKfWYpMArA4sIyN2ezMGzlwV8p5AnMgpn9wgOzRoSsQh4Ker9z%2BcyxEZ%2F4mvmT7DP0CgU3qcakRk3IJkVaFf5CtE%2BFGjdUWaq0T4DW%2FT0Q8hNZgT8FO8HR1c0jDMBtK7PEH1hMkL4M8VSSeqnte3cSZTghYgpYP%2BBDPZsaSuMuDe2c49hJvz4BfAQx9sFjLuCfNt3G6gAmnfOUzB3It%2FpXBx8GLJkdrfsXbnoM6AI14VC%2BAF167H8lUGNCN0PF%2BgombnoioxjucSg0F5zk%2FtA2tLRaEIYKJvOByzFZUxW2SPm%2F1JTG3otJj8TVqUVCLEIY0p%2B%2BD2N6PUQ0DWPad4BukDWfTXXhqcfC3hnzpT%2B3YIp0f5LTEDFpW4Uv7%2B4oATuzwewxXYqjOBzAuaX9Na7Q5JU2%2F%2FHOfDz%2FcfpcnoYPfEMw%2B7rW9yE29N4EinLn4e5ZOGq5G%2BshNn7v1xIRunQpdbOV3QKPfJiV%2BROskNirIfwUC2pjYobdhr5Wrgv4AhajF8awIR1RjXweADtljtE1R0bpyLMbZR%2BACBx%2FtM%2BjlJo6IQecTXE9B5jffTo4%2FPxDy4XxWh3NQn89B5%2Bf9B2FgL40174dFjTCS7eS9BjqkARYwDBs2aIh%2FrFHMvOnCcUXhp%2Bhc5XnlEHbAmIT%2B9Z2xDDReSYSthFiAoJQk8fhFifFarWRXpaOCP7JSY1Rj3KZQ8wleLoHZ6tO99fDt70OEMwvYbZx8Rpq9avHRbAtuAzpLlZGjd5kyusf1h05EBuuK844hEw2s%2Fz5POl6CUnDYLeyK9MEPFxtxJPoQZ18xT386K7V7Kv98DccP5ckzvdQsp9gP&X-Amz-Signature=903bdfbdf61a4386ff493a79bc1ffe98bb890f06e6b15b8c9ed2014190fc6a52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJ6HGMT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWf4sZJ0HNpWSX7Aozt1SZyN7N3q7KuPwhZcSgt598AIhAJHXti8CR8ck3ptd1Y3o0dqBnc%2BiHbOY5vB2d%2B4Rb7hCKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz135eCLp%2Bnlj%2BDP%2B8q3AN0NKfN1RHrxCFXpsOfJPd%2FfgNSyRKfWYpMArA4sIyN2ezMGzlwV8p5AnMgpn9wgOzRoSsQh4Ker9z%2BcyxEZ%2F4mvmT7DP0CgU3qcakRk3IJkVaFf5CtE%2BFGjdUWaq0T4DW%2FT0Q8hNZgT8FO8HR1c0jDMBtK7PEH1hMkL4M8VSSeqnte3cSZTghYgpYP%2BBDPZsaSuMuDe2c49hJvz4BfAQx9sFjLuCfNt3G6gAmnfOUzB3It%2FpXBx8GLJkdrfsXbnoM6AI14VC%2BAF167H8lUGNCN0PF%2BgombnoioxjucSg0F5zk%2FtA2tLRaEIYKJvOByzFZUxW2SPm%2F1JTG3otJj8TVqUVCLEIY0p%2B%2BD2N6PUQ0DWPad4BukDWfTXXhqcfC3hnzpT%2B3YIp0f5LTEDFpW4Uv7%2B4oATuzwewxXYqjOBzAuaX9Na7Q5JU2%2F%2FHOfDz%2FcfpcnoYPfEMw%2B7rW9yE29N4EinLn4e5ZOGq5G%2BshNn7v1xIRunQpdbOV3QKPfJiV%2BROskNirIfwUC2pjYobdhr5Wrgv4AhajF8awIR1RjXweADtljtE1R0bpyLMbZR%2BACBx%2FtM%2BjlJo6IQecTXE9B5jffTo4%2FPxDy4XxWh3NQn89B5%2Bf9B2FgL40174dFjTCS7eS9BjqkARYwDBs2aIh%2FrFHMvOnCcUXhp%2Bhc5XnlEHbAmIT%2B9Z2xDDReSYSthFiAoJQk8fhFifFarWRXpaOCP7JSY1Rj3KZQ8wleLoHZ6tO99fDt70OEMwvYbZx8Rpq9avHRbAtuAzpLlZGjd5kyusf1h05EBuuK844hEw2s%2Fz5POl6CUnDYLeyK9MEPFxtxJPoQZ18xT386K7V7Kv98DccP5ckzvdQsp9gP&X-Amz-Signature=33c01a33d8ea8ddae44e570430b07e3e07119d5975a99aaf42327cad64be43bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
