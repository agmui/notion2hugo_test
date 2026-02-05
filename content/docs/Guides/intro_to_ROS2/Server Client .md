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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R74B7P4L%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCjXNbKR90NSX0jslBli%2BhAZ4UitfmrOgqeEcOrgxqpmgIhALb8oTaSpssm8%2BSofyHtGPbtt47wgiRfsUMBAh%2BGpcx1Kv8DCCIQABoMNjM3NDIzMTgzODA1Igz2OYGvXycelMkch4Eq3AMVI64vmsJ3Zy4M3R4vEoSu1B4m8kKFtK3T3dv%2BCWIuRC3OmYTc1y2U2iHzXuUfVoUw1Q%2FMWujbkYa%2F57Unr1L5yLrg0L%2BKNXON%2F%2BnuTFFG37onmc1QXSA5d4XnRczcnRas%2B86NonudmplU1D1nZWiv0zA%2ByiOg8bbbyg8YY19rqfXInKzWUZEpFnCF1MYCr4wH5hgI4IT37bZq3d%2BZArl9MoXWCYPtT9op4Q%2FlFoLAzIn%2F4ghwfzoXH4Q6PLoOppuRZPlEgB6WHnjRf3ISOeuGywmMwsnxzA5W2BdNI3bHQB1vGiN2B5hpaRz4cSb4%2FqnAkkd9O%2Fg57PQqrAVxcDsuSFnt2kl8fuGP%2F%2BRKHqd67k9xLmVTv98VmDk68wCjZgZ02Fz8sBz164FNMe4svRkyQGEftWdMJqVp9eAdZBZgO6BhnxjW3Gqf2feZGeftlAtO7609OadDxllLIslNHt1mfKe2uU0fsMtrzhKcQCVmZ8ylSqY%2FeOvPEqpvOuRHFEvgvJ%2B8JTqQFVewcQqTGAaq0YLkDIrpJIokW7SuTV0UZzN4Ra2rBN7aFJtdvwAJebSEX%2BcfZLhUAdqit%2F8EOlx7CXDJNbsWEEaKC%2Foovl0GtlTcIzCHfovGYdEELDD1zo%2FMBjqkAaGRlfF5BU2gJ8QAEAUg0PwlGswECdT9ZHnmzmfmzaG7s1RqkhMPzRIs%2FLZAYvmO33gdT436n%2F%2BfFZN9n453GysMJqf4K9Tza3a%2BzfCzL24TYb71kWNoZs5rjyY6gwi%2B9FlDuP2GjjHrrRzzFGnOVITXtlgig%2Blc0Qs78DYZxmD7B%2FQsCF94cchEzYzUvm0qs1umOowF7ZHqNi9SIjHVRPUabhl%2F&X-Amz-Signature=1a60b666a00c1893a6212f00a190311bb7729119c2fb8ef651bdadd53e2c9cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R74B7P4L%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCjXNbKR90NSX0jslBli%2BhAZ4UitfmrOgqeEcOrgxqpmgIhALb8oTaSpssm8%2BSofyHtGPbtt47wgiRfsUMBAh%2BGpcx1Kv8DCCIQABoMNjM3NDIzMTgzODA1Igz2OYGvXycelMkch4Eq3AMVI64vmsJ3Zy4M3R4vEoSu1B4m8kKFtK3T3dv%2BCWIuRC3OmYTc1y2U2iHzXuUfVoUw1Q%2FMWujbkYa%2F57Unr1L5yLrg0L%2BKNXON%2F%2BnuTFFG37onmc1QXSA5d4XnRczcnRas%2B86NonudmplU1D1nZWiv0zA%2ByiOg8bbbyg8YY19rqfXInKzWUZEpFnCF1MYCr4wH5hgI4IT37bZq3d%2BZArl9MoXWCYPtT9op4Q%2FlFoLAzIn%2F4ghwfzoXH4Q6PLoOppuRZPlEgB6WHnjRf3ISOeuGywmMwsnxzA5W2BdNI3bHQB1vGiN2B5hpaRz4cSb4%2FqnAkkd9O%2Fg57PQqrAVxcDsuSFnt2kl8fuGP%2F%2BRKHqd67k9xLmVTv98VmDk68wCjZgZ02Fz8sBz164FNMe4svRkyQGEftWdMJqVp9eAdZBZgO6BhnxjW3Gqf2feZGeftlAtO7609OadDxllLIslNHt1mfKe2uU0fsMtrzhKcQCVmZ8ylSqY%2FeOvPEqpvOuRHFEvgvJ%2B8JTqQFVewcQqTGAaq0YLkDIrpJIokW7SuTV0UZzN4Ra2rBN7aFJtdvwAJebSEX%2BcfZLhUAdqit%2F8EOlx7CXDJNbsWEEaKC%2Foovl0GtlTcIzCHfovGYdEELDD1zo%2FMBjqkAaGRlfF5BU2gJ8QAEAUg0PwlGswECdT9ZHnmzmfmzaG7s1RqkhMPzRIs%2FLZAYvmO33gdT436n%2F%2BfFZN9n453GysMJqf4K9Tza3a%2BzfCzL24TYb71kWNoZs5rjyY6gwi%2B9FlDuP2GjjHrrRzzFGnOVITXtlgig%2Blc0Qs78DYZxmD7B%2FQsCF94cchEzYzUvm0qs1umOowF7ZHqNi9SIjHVRPUabhl%2F&X-Amz-Signature=68c45152e4d19289271ab02c27ce338f3a0c0ea8461eb0f22eda6f9f4e9e079f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R74B7P4L%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCjXNbKR90NSX0jslBli%2BhAZ4UitfmrOgqeEcOrgxqpmgIhALb8oTaSpssm8%2BSofyHtGPbtt47wgiRfsUMBAh%2BGpcx1Kv8DCCIQABoMNjM3NDIzMTgzODA1Igz2OYGvXycelMkch4Eq3AMVI64vmsJ3Zy4M3R4vEoSu1B4m8kKFtK3T3dv%2BCWIuRC3OmYTc1y2U2iHzXuUfVoUw1Q%2FMWujbkYa%2F57Unr1L5yLrg0L%2BKNXON%2F%2BnuTFFG37onmc1QXSA5d4XnRczcnRas%2B86NonudmplU1D1nZWiv0zA%2ByiOg8bbbyg8YY19rqfXInKzWUZEpFnCF1MYCr4wH5hgI4IT37bZq3d%2BZArl9MoXWCYPtT9op4Q%2FlFoLAzIn%2F4ghwfzoXH4Q6PLoOppuRZPlEgB6WHnjRf3ISOeuGywmMwsnxzA5W2BdNI3bHQB1vGiN2B5hpaRz4cSb4%2FqnAkkd9O%2Fg57PQqrAVxcDsuSFnt2kl8fuGP%2F%2BRKHqd67k9xLmVTv98VmDk68wCjZgZ02Fz8sBz164FNMe4svRkyQGEftWdMJqVp9eAdZBZgO6BhnxjW3Gqf2feZGeftlAtO7609OadDxllLIslNHt1mfKe2uU0fsMtrzhKcQCVmZ8ylSqY%2FeOvPEqpvOuRHFEvgvJ%2B8JTqQFVewcQqTGAaq0YLkDIrpJIokW7SuTV0UZzN4Ra2rBN7aFJtdvwAJebSEX%2BcfZLhUAdqit%2F8EOlx7CXDJNbsWEEaKC%2Foovl0GtlTcIzCHfovGYdEELDD1zo%2FMBjqkAaGRlfF5BU2gJ8QAEAUg0PwlGswECdT9ZHnmzmfmzaG7s1RqkhMPzRIs%2FLZAYvmO33gdT436n%2F%2BfFZN9n453GysMJqf4K9Tza3a%2BzfCzL24TYb71kWNoZs5rjyY6gwi%2B9FlDuP2GjjHrrRzzFGnOVITXtlgig%2Blc0Qs78DYZxmD7B%2FQsCF94cchEzYzUvm0qs1umOowF7ZHqNi9SIjHVRPUabhl%2F&X-Amz-Signature=e0b240fdf07dba3d680742aa5b0e64288375db50e4a5b35442ca2e329501ec32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R74B7P4L%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCjXNbKR90NSX0jslBli%2BhAZ4UitfmrOgqeEcOrgxqpmgIhALb8oTaSpssm8%2BSofyHtGPbtt47wgiRfsUMBAh%2BGpcx1Kv8DCCIQABoMNjM3NDIzMTgzODA1Igz2OYGvXycelMkch4Eq3AMVI64vmsJ3Zy4M3R4vEoSu1B4m8kKFtK3T3dv%2BCWIuRC3OmYTc1y2U2iHzXuUfVoUw1Q%2FMWujbkYa%2F57Unr1L5yLrg0L%2BKNXON%2F%2BnuTFFG37onmc1QXSA5d4XnRczcnRas%2B86NonudmplU1D1nZWiv0zA%2ByiOg8bbbyg8YY19rqfXInKzWUZEpFnCF1MYCr4wH5hgI4IT37bZq3d%2BZArl9MoXWCYPtT9op4Q%2FlFoLAzIn%2F4ghwfzoXH4Q6PLoOppuRZPlEgB6WHnjRf3ISOeuGywmMwsnxzA5W2BdNI3bHQB1vGiN2B5hpaRz4cSb4%2FqnAkkd9O%2Fg57PQqrAVxcDsuSFnt2kl8fuGP%2F%2BRKHqd67k9xLmVTv98VmDk68wCjZgZ02Fz8sBz164FNMe4svRkyQGEftWdMJqVp9eAdZBZgO6BhnxjW3Gqf2feZGeftlAtO7609OadDxllLIslNHt1mfKe2uU0fsMtrzhKcQCVmZ8ylSqY%2FeOvPEqpvOuRHFEvgvJ%2B8JTqQFVewcQqTGAaq0YLkDIrpJIokW7SuTV0UZzN4Ra2rBN7aFJtdvwAJebSEX%2BcfZLhUAdqit%2F8EOlx7CXDJNbsWEEaKC%2Foovl0GtlTcIzCHfovGYdEELDD1zo%2FMBjqkAaGRlfF5BU2gJ8QAEAUg0PwlGswECdT9ZHnmzmfmzaG7s1RqkhMPzRIs%2FLZAYvmO33gdT436n%2F%2BfFZN9n453GysMJqf4K9Tza3a%2BzfCzL24TYb71kWNoZs5rjyY6gwi%2B9FlDuP2GjjHrrRzzFGnOVITXtlgig%2Blc0Qs78DYZxmD7B%2FQsCF94cchEzYzUvm0qs1umOowF7ZHqNi9SIjHVRPUabhl%2F&X-Amz-Signature=40ca3edba4b7239980e8991b0ebc85cc94ebac31d6f29b224f8d2e0e3a527c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R74B7P4L%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCjXNbKR90NSX0jslBli%2BhAZ4UitfmrOgqeEcOrgxqpmgIhALb8oTaSpssm8%2BSofyHtGPbtt47wgiRfsUMBAh%2BGpcx1Kv8DCCIQABoMNjM3NDIzMTgzODA1Igz2OYGvXycelMkch4Eq3AMVI64vmsJ3Zy4M3R4vEoSu1B4m8kKFtK3T3dv%2BCWIuRC3OmYTc1y2U2iHzXuUfVoUw1Q%2FMWujbkYa%2F57Unr1L5yLrg0L%2BKNXON%2F%2BnuTFFG37onmc1QXSA5d4XnRczcnRas%2B86NonudmplU1D1nZWiv0zA%2ByiOg8bbbyg8YY19rqfXInKzWUZEpFnCF1MYCr4wH5hgI4IT37bZq3d%2BZArl9MoXWCYPtT9op4Q%2FlFoLAzIn%2F4ghwfzoXH4Q6PLoOppuRZPlEgB6WHnjRf3ISOeuGywmMwsnxzA5W2BdNI3bHQB1vGiN2B5hpaRz4cSb4%2FqnAkkd9O%2Fg57PQqrAVxcDsuSFnt2kl8fuGP%2F%2BRKHqd67k9xLmVTv98VmDk68wCjZgZ02Fz8sBz164FNMe4svRkyQGEftWdMJqVp9eAdZBZgO6BhnxjW3Gqf2feZGeftlAtO7609OadDxllLIslNHt1mfKe2uU0fsMtrzhKcQCVmZ8ylSqY%2FeOvPEqpvOuRHFEvgvJ%2B8JTqQFVewcQqTGAaq0YLkDIrpJIokW7SuTV0UZzN4Ra2rBN7aFJtdvwAJebSEX%2BcfZLhUAdqit%2F8EOlx7CXDJNbsWEEaKC%2Foovl0GtlTcIzCHfovGYdEELDD1zo%2FMBjqkAaGRlfF5BU2gJ8QAEAUg0PwlGswECdT9ZHnmzmfmzaG7s1RqkhMPzRIs%2FLZAYvmO33gdT436n%2F%2BfFZN9n453GysMJqf4K9Tza3a%2BzfCzL24TYb71kWNoZs5rjyY6gwi%2B9FlDuP2GjjHrrRzzFGnOVITXtlgig%2Blc0Qs78DYZxmD7B%2FQsCF94cchEzYzUvm0qs1umOowF7ZHqNi9SIjHVRPUabhl%2F&X-Amz-Signature=476689e542df75d7412512df491fcfbe25c5dbeadd87f0532e16b6f825ee35cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
