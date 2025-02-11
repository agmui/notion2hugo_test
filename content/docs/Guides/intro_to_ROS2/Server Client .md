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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2DLSEM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIfPweQXug9P5NYeO3Mo159r2zZ3aSloC2bZkQEa%2FIhAiAxrRuZGJtWWKz3jEux2U%2Fx6T3lT8m8Fusye78O%2FSXrRSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzZrec0zHHVOafFadKtwD4IeypTGsF1je4Bb%2Bw740y%2B8ZFw1GdYAGoRxPSAzybOx3%2Bcf%2BJ0kX3GmM8vHcHkRZL1j0qMUg%2F7xNu3KbO%2B2TkT8XOml8sJiHkRu1H5aNj%2FeUkEyS0QwVo2Pc37VCr5u17JCL8dpl%2FZ7cdQIHVVNvETBXf94GVaYga6RPutYljNvTIC5P4o9dQB3KmUkA2w5AEMi8LObqi5AY%2FpChwYw5twfuZzBs3o5oYClvTpw5DXUHEB%2Bb3eL2Pevu5JEH6hxFmlx7PyL5zV7xtjNCaJu1g5ODOYX%2BpSYFWAx4dX%2B3I08NQuP2zJT9CVMVg9ZJ4j6NC%2FgreSluM%2FuGJ530M4ZZbHgixXos4lan1zpDGnQX7l3RUu%2BcBQ%2BFAq9MkXmVaGI%2FEA30EncHcCJ2ovvFOm0dhpFEYMRW3UlgY58JnD1N3OUl74rkNfu1UZjWKuMeVmK0q7rz0oIwE0RXR5pJDeyFncVsQSBou1R5bKausBtQpKthYSK8MzLFVbWIXWJd7Rgoo2aK3yNaFl58P8luBNWyvw0IeHcZvJYi0LWm288GXP5BlJT7nVnWKfINAbRVc%2F1OGagjJ49HfZM76kGQ76FgDkE4yGqns2Kl%2FReckNuVh2eEXJCOFZ2QTvfLKuUw2PetvQY6pgEZTp%2BncirDN8A7dKRk9lJ8jcJwSXZXf%2F3nboOOMuHtac3hRWzVHfWsyt7SosZiGpmBb%2F%2BtUOPbZSCp8Q%2Fchl%2BkGiT4RhX5%2Fl8qE3z0HofgDcnfvKPzLUIa4xeClsFqY6nnrWhQgK5KobfElkKZh1kXD682LqU6VJaSz7Ib%2BDOqWOcmBhDeY%2FMzXnNWP%2FbQREo8g6unFnIOYDDpXMzGtC9zTdxGlsdj&X-Amz-Signature=5869b44202a03634fdc2ba4ada550745c526c3b5c809789e605ee4525256ce67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2DLSEM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIfPweQXug9P5NYeO3Mo159r2zZ3aSloC2bZkQEa%2FIhAiAxrRuZGJtWWKz3jEux2U%2Fx6T3lT8m8Fusye78O%2FSXrRSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzZrec0zHHVOafFadKtwD4IeypTGsF1je4Bb%2Bw740y%2B8ZFw1GdYAGoRxPSAzybOx3%2Bcf%2BJ0kX3GmM8vHcHkRZL1j0qMUg%2F7xNu3KbO%2B2TkT8XOml8sJiHkRu1H5aNj%2FeUkEyS0QwVo2Pc37VCr5u17JCL8dpl%2FZ7cdQIHVVNvETBXf94GVaYga6RPutYljNvTIC5P4o9dQB3KmUkA2w5AEMi8LObqi5AY%2FpChwYw5twfuZzBs3o5oYClvTpw5DXUHEB%2Bb3eL2Pevu5JEH6hxFmlx7PyL5zV7xtjNCaJu1g5ODOYX%2BpSYFWAx4dX%2B3I08NQuP2zJT9CVMVg9ZJ4j6NC%2FgreSluM%2FuGJ530M4ZZbHgixXos4lan1zpDGnQX7l3RUu%2BcBQ%2BFAq9MkXmVaGI%2FEA30EncHcCJ2ovvFOm0dhpFEYMRW3UlgY58JnD1N3OUl74rkNfu1UZjWKuMeVmK0q7rz0oIwE0RXR5pJDeyFncVsQSBou1R5bKausBtQpKthYSK8MzLFVbWIXWJd7Rgoo2aK3yNaFl58P8luBNWyvw0IeHcZvJYi0LWm288GXP5BlJT7nVnWKfINAbRVc%2F1OGagjJ49HfZM76kGQ76FgDkE4yGqns2Kl%2FReckNuVh2eEXJCOFZ2QTvfLKuUw2PetvQY6pgEZTp%2BncirDN8A7dKRk9lJ8jcJwSXZXf%2F3nboOOMuHtac3hRWzVHfWsyt7SosZiGpmBb%2F%2BtUOPbZSCp8Q%2Fchl%2BkGiT4RhX5%2Fl8qE3z0HofgDcnfvKPzLUIa4xeClsFqY6nnrWhQgK5KobfElkKZh1kXD682LqU6VJaSz7Ib%2BDOqWOcmBhDeY%2FMzXnNWP%2FbQREo8g6unFnIOYDDpXMzGtC9zTdxGlsdj&X-Amz-Signature=80ea66c3bddf17c4ef3448c0f6694e62034f80fc8818eca897dfbfa5e58ddb25&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2DLSEM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIfPweQXug9P5NYeO3Mo159r2zZ3aSloC2bZkQEa%2FIhAiAxrRuZGJtWWKz3jEux2U%2Fx6T3lT8m8Fusye78O%2FSXrRSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzZrec0zHHVOafFadKtwD4IeypTGsF1je4Bb%2Bw740y%2B8ZFw1GdYAGoRxPSAzybOx3%2Bcf%2BJ0kX3GmM8vHcHkRZL1j0qMUg%2F7xNu3KbO%2B2TkT8XOml8sJiHkRu1H5aNj%2FeUkEyS0QwVo2Pc37VCr5u17JCL8dpl%2FZ7cdQIHVVNvETBXf94GVaYga6RPutYljNvTIC5P4o9dQB3KmUkA2w5AEMi8LObqi5AY%2FpChwYw5twfuZzBs3o5oYClvTpw5DXUHEB%2Bb3eL2Pevu5JEH6hxFmlx7PyL5zV7xtjNCaJu1g5ODOYX%2BpSYFWAx4dX%2B3I08NQuP2zJT9CVMVg9ZJ4j6NC%2FgreSluM%2FuGJ530M4ZZbHgixXos4lan1zpDGnQX7l3RUu%2BcBQ%2BFAq9MkXmVaGI%2FEA30EncHcCJ2ovvFOm0dhpFEYMRW3UlgY58JnD1N3OUl74rkNfu1UZjWKuMeVmK0q7rz0oIwE0RXR5pJDeyFncVsQSBou1R5bKausBtQpKthYSK8MzLFVbWIXWJd7Rgoo2aK3yNaFl58P8luBNWyvw0IeHcZvJYi0LWm288GXP5BlJT7nVnWKfINAbRVc%2F1OGagjJ49HfZM76kGQ76FgDkE4yGqns2Kl%2FReckNuVh2eEXJCOFZ2QTvfLKuUw2PetvQY6pgEZTp%2BncirDN8A7dKRk9lJ8jcJwSXZXf%2F3nboOOMuHtac3hRWzVHfWsyt7SosZiGpmBb%2F%2BtUOPbZSCp8Q%2Fchl%2BkGiT4RhX5%2Fl8qE3z0HofgDcnfvKPzLUIa4xeClsFqY6nnrWhQgK5KobfElkKZh1kXD682LqU6VJaSz7Ib%2BDOqWOcmBhDeY%2FMzXnNWP%2FbQREo8g6unFnIOYDDpXMzGtC9zTdxGlsdj&X-Amz-Signature=b920024eb923236f5e497a6aca7895d163620ce7c1ec12d974eb90d5136f5fce&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2DLSEM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIfPweQXug9P5NYeO3Mo159r2zZ3aSloC2bZkQEa%2FIhAiAxrRuZGJtWWKz3jEux2U%2Fx6T3lT8m8Fusye78O%2FSXrRSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzZrec0zHHVOafFadKtwD4IeypTGsF1je4Bb%2Bw740y%2B8ZFw1GdYAGoRxPSAzybOx3%2Bcf%2BJ0kX3GmM8vHcHkRZL1j0qMUg%2F7xNu3KbO%2B2TkT8XOml8sJiHkRu1H5aNj%2FeUkEyS0QwVo2Pc37VCr5u17JCL8dpl%2FZ7cdQIHVVNvETBXf94GVaYga6RPutYljNvTIC5P4o9dQB3KmUkA2w5AEMi8LObqi5AY%2FpChwYw5twfuZzBs3o5oYClvTpw5DXUHEB%2Bb3eL2Pevu5JEH6hxFmlx7PyL5zV7xtjNCaJu1g5ODOYX%2BpSYFWAx4dX%2B3I08NQuP2zJT9CVMVg9ZJ4j6NC%2FgreSluM%2FuGJ530M4ZZbHgixXos4lan1zpDGnQX7l3RUu%2BcBQ%2BFAq9MkXmVaGI%2FEA30EncHcCJ2ovvFOm0dhpFEYMRW3UlgY58JnD1N3OUl74rkNfu1UZjWKuMeVmK0q7rz0oIwE0RXR5pJDeyFncVsQSBou1R5bKausBtQpKthYSK8MzLFVbWIXWJd7Rgoo2aK3yNaFl58P8luBNWyvw0IeHcZvJYi0LWm288GXP5BlJT7nVnWKfINAbRVc%2F1OGagjJ49HfZM76kGQ76FgDkE4yGqns2Kl%2FReckNuVh2eEXJCOFZ2QTvfLKuUw2PetvQY6pgEZTp%2BncirDN8A7dKRk9lJ8jcJwSXZXf%2F3nboOOMuHtac3hRWzVHfWsyt7SosZiGpmBb%2F%2BtUOPbZSCp8Q%2Fchl%2BkGiT4RhX5%2Fl8qE3z0HofgDcnfvKPzLUIa4xeClsFqY6nnrWhQgK5KobfElkKZh1kXD682LqU6VJaSz7Ib%2BDOqWOcmBhDeY%2FMzXnNWP%2FbQREo8g6unFnIOYDDpXMzGtC9zTdxGlsdj&X-Amz-Signature=0be256cf89fc006e2b94cc3a87e35264f7729f0af4353a954179595c0f285b73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2DLSEM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIfPweQXug9P5NYeO3Mo159r2zZ3aSloC2bZkQEa%2FIhAiAxrRuZGJtWWKz3jEux2U%2Fx6T3lT8m8Fusye78O%2FSXrRSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzZrec0zHHVOafFadKtwD4IeypTGsF1je4Bb%2Bw740y%2B8ZFw1GdYAGoRxPSAzybOx3%2Bcf%2BJ0kX3GmM8vHcHkRZL1j0qMUg%2F7xNu3KbO%2B2TkT8XOml8sJiHkRu1H5aNj%2FeUkEyS0QwVo2Pc37VCr5u17JCL8dpl%2FZ7cdQIHVVNvETBXf94GVaYga6RPutYljNvTIC5P4o9dQB3KmUkA2w5AEMi8LObqi5AY%2FpChwYw5twfuZzBs3o5oYClvTpw5DXUHEB%2Bb3eL2Pevu5JEH6hxFmlx7PyL5zV7xtjNCaJu1g5ODOYX%2BpSYFWAx4dX%2B3I08NQuP2zJT9CVMVg9ZJ4j6NC%2FgreSluM%2FuGJ530M4ZZbHgixXos4lan1zpDGnQX7l3RUu%2BcBQ%2BFAq9MkXmVaGI%2FEA30EncHcCJ2ovvFOm0dhpFEYMRW3UlgY58JnD1N3OUl74rkNfu1UZjWKuMeVmK0q7rz0oIwE0RXR5pJDeyFncVsQSBou1R5bKausBtQpKthYSK8MzLFVbWIXWJd7Rgoo2aK3yNaFl58P8luBNWyvw0IeHcZvJYi0LWm288GXP5BlJT7nVnWKfINAbRVc%2F1OGagjJ49HfZM76kGQ76FgDkE4yGqns2Kl%2FReckNuVh2eEXJCOFZ2QTvfLKuUw2PetvQY6pgEZTp%2BncirDN8A7dKRk9lJ8jcJwSXZXf%2F3nboOOMuHtac3hRWzVHfWsyt7SosZiGpmBb%2F%2BtUOPbZSCp8Q%2Fchl%2BkGiT4RhX5%2Fl8qE3z0HofgDcnfvKPzLUIa4xeClsFqY6nnrWhQgK5KobfElkKZh1kXD682LqU6VJaSz7Ib%2BDOqWOcmBhDeY%2FMzXnNWP%2FbQREo8g6unFnIOYDDpXMzGtC9zTdxGlsdj&X-Amz-Signature=3d92e33c434bd23abecade9992444ff564bab4d1f06b8417c3a2383d8b77b001&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
