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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYKMPY7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW9kBWpOY3NbE%2BC7bJdCSyw1%2B46xnvPxKP17qBNTJVnAIgVoyqNZmNxkKUlUlACeCkQ3SjcGxZXOu3xK6S1KblCTgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRrCtdCnvwF44ekayrcA%2FEPFWvsHgj4ha2%2FcaZyrUXnW15XDn2q%2Fa4LgrHi%2FZ6Kwjdya3EfE%2BiXQsWMpGZwtfiVWHE31W1g%2BbXBz9pUk6zpFfx%2FhBa2Fx3ZGonxRzWsC27%2BSJAvw3ruaPKDqz8WNIEC4T9HS2AavAZL4LZqJkFxMpwkS%2FZIwwNBNQKtR7hdn5QrmJpPE%2F2DqpCY5utmhRoUIcgcsS9gX4ftA0cqAUyOSV3AnW4dR6TAjAF%2FnVtinDj5Novoe8X13TNToKvlls0p0cpfcDE6AKIPKbZH0MXyMgagIy88Ru2kEYoxn4CzAhPZ82xo8efEX%2F%2B1UlBx%2BFH%2FYaIgjr3Ac%2B4UANT45NTjPZaHw8lXYsdCw8exSFl6TFWV7lF37MfEBvjnMxzVGJlU2WEpxyGGiFErWJskWlSLKueiR9v6PNbGmlE5ngZ9vDArymxZuQRS6jsA3Mffq5h0MicfXKcgSGFkObHD6N36xZIvnq4Vgp4CEjNFp8%2FmlEdJ3GEm0IW9VtNBWObNQoYBlh4Is3fEsCenxF4zglRxoP9XpR7iehtcLFQerOkxsNiAo8O7dpZz2MvR8FJ5nnJ%2F%2BjPqK4UfEAwBaYTxxrzcV9yu7hJPUv%2FobwES2KM66evEgOzmeajQtRHbMMmusr0GOqUBMhAi2cO3zsGiJ2Z%2BBubLc6zcmAgf%2B6wtmjPjktI%2BCgUD466ZfZ6syFtCPE1cgkR7FPgkqAyWwIlVKBz%2BTxDJ1a85Q7HS0HDcV%2BQJD2R44%2BJohQrRSe6sMOUskoy7GiYuxYs4%2FjGe0xAnzwm7KGgIuP24zY2F4XnaFDmJcqEakFD8MdOV4VkQBVSc3UgciaYi4TsA7UQKmlxpje2RRYJY9p06imux&X-Amz-Signature=acc570dbd30b1c52ea4255309d60d9c6735f24bc3958493135c9d4670756bd15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYKMPY7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW9kBWpOY3NbE%2BC7bJdCSyw1%2B46xnvPxKP17qBNTJVnAIgVoyqNZmNxkKUlUlACeCkQ3SjcGxZXOu3xK6S1KblCTgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRrCtdCnvwF44ekayrcA%2FEPFWvsHgj4ha2%2FcaZyrUXnW15XDn2q%2Fa4LgrHi%2FZ6Kwjdya3EfE%2BiXQsWMpGZwtfiVWHE31W1g%2BbXBz9pUk6zpFfx%2FhBa2Fx3ZGonxRzWsC27%2BSJAvw3ruaPKDqz8WNIEC4T9HS2AavAZL4LZqJkFxMpwkS%2FZIwwNBNQKtR7hdn5QrmJpPE%2F2DqpCY5utmhRoUIcgcsS9gX4ftA0cqAUyOSV3AnW4dR6TAjAF%2FnVtinDj5Novoe8X13TNToKvlls0p0cpfcDE6AKIPKbZH0MXyMgagIy88Ru2kEYoxn4CzAhPZ82xo8efEX%2F%2B1UlBx%2BFH%2FYaIgjr3Ac%2B4UANT45NTjPZaHw8lXYsdCw8exSFl6TFWV7lF37MfEBvjnMxzVGJlU2WEpxyGGiFErWJskWlSLKueiR9v6PNbGmlE5ngZ9vDArymxZuQRS6jsA3Mffq5h0MicfXKcgSGFkObHD6N36xZIvnq4Vgp4CEjNFp8%2FmlEdJ3GEm0IW9VtNBWObNQoYBlh4Is3fEsCenxF4zglRxoP9XpR7iehtcLFQerOkxsNiAo8O7dpZz2MvR8FJ5nnJ%2F%2BjPqK4UfEAwBaYTxxrzcV9yu7hJPUv%2FobwES2KM66evEgOzmeajQtRHbMMmusr0GOqUBMhAi2cO3zsGiJ2Z%2BBubLc6zcmAgf%2B6wtmjPjktI%2BCgUD466ZfZ6syFtCPE1cgkR7FPgkqAyWwIlVKBz%2BTxDJ1a85Q7HS0HDcV%2BQJD2R44%2BJohQrRSe6sMOUskoy7GiYuxYs4%2FjGe0xAnzwm7KGgIuP24zY2F4XnaFDmJcqEakFD8MdOV4VkQBVSc3UgciaYi4TsA7UQKmlxpje2RRYJY9p06imux&X-Amz-Signature=bc62a6572441c31c81833cd0a07231ad167c157f24a78ff7670a730fd897b4ed&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYKMPY7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW9kBWpOY3NbE%2BC7bJdCSyw1%2B46xnvPxKP17qBNTJVnAIgVoyqNZmNxkKUlUlACeCkQ3SjcGxZXOu3xK6S1KblCTgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRrCtdCnvwF44ekayrcA%2FEPFWvsHgj4ha2%2FcaZyrUXnW15XDn2q%2Fa4LgrHi%2FZ6Kwjdya3EfE%2BiXQsWMpGZwtfiVWHE31W1g%2BbXBz9pUk6zpFfx%2FhBa2Fx3ZGonxRzWsC27%2BSJAvw3ruaPKDqz8WNIEC4T9HS2AavAZL4LZqJkFxMpwkS%2FZIwwNBNQKtR7hdn5QrmJpPE%2F2DqpCY5utmhRoUIcgcsS9gX4ftA0cqAUyOSV3AnW4dR6TAjAF%2FnVtinDj5Novoe8X13TNToKvlls0p0cpfcDE6AKIPKbZH0MXyMgagIy88Ru2kEYoxn4CzAhPZ82xo8efEX%2F%2B1UlBx%2BFH%2FYaIgjr3Ac%2B4UANT45NTjPZaHw8lXYsdCw8exSFl6TFWV7lF37MfEBvjnMxzVGJlU2WEpxyGGiFErWJskWlSLKueiR9v6PNbGmlE5ngZ9vDArymxZuQRS6jsA3Mffq5h0MicfXKcgSGFkObHD6N36xZIvnq4Vgp4CEjNFp8%2FmlEdJ3GEm0IW9VtNBWObNQoYBlh4Is3fEsCenxF4zglRxoP9XpR7iehtcLFQerOkxsNiAo8O7dpZz2MvR8FJ5nnJ%2F%2BjPqK4UfEAwBaYTxxrzcV9yu7hJPUv%2FobwES2KM66evEgOzmeajQtRHbMMmusr0GOqUBMhAi2cO3zsGiJ2Z%2BBubLc6zcmAgf%2B6wtmjPjktI%2BCgUD466ZfZ6syFtCPE1cgkR7FPgkqAyWwIlVKBz%2BTxDJ1a85Q7HS0HDcV%2BQJD2R44%2BJohQrRSe6sMOUskoy7GiYuxYs4%2FjGe0xAnzwm7KGgIuP24zY2F4XnaFDmJcqEakFD8MdOV4VkQBVSc3UgciaYi4TsA7UQKmlxpje2RRYJY9p06imux&X-Amz-Signature=ea3a171cb8d9937cb5becf2da51246f30ddd60d4b9489431700dc7d5bb71b6f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYKMPY7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW9kBWpOY3NbE%2BC7bJdCSyw1%2B46xnvPxKP17qBNTJVnAIgVoyqNZmNxkKUlUlACeCkQ3SjcGxZXOu3xK6S1KblCTgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRrCtdCnvwF44ekayrcA%2FEPFWvsHgj4ha2%2FcaZyrUXnW15XDn2q%2Fa4LgrHi%2FZ6Kwjdya3EfE%2BiXQsWMpGZwtfiVWHE31W1g%2BbXBz9pUk6zpFfx%2FhBa2Fx3ZGonxRzWsC27%2BSJAvw3ruaPKDqz8WNIEC4T9HS2AavAZL4LZqJkFxMpwkS%2FZIwwNBNQKtR7hdn5QrmJpPE%2F2DqpCY5utmhRoUIcgcsS9gX4ftA0cqAUyOSV3AnW4dR6TAjAF%2FnVtinDj5Novoe8X13TNToKvlls0p0cpfcDE6AKIPKbZH0MXyMgagIy88Ru2kEYoxn4CzAhPZ82xo8efEX%2F%2B1UlBx%2BFH%2FYaIgjr3Ac%2B4UANT45NTjPZaHw8lXYsdCw8exSFl6TFWV7lF37MfEBvjnMxzVGJlU2WEpxyGGiFErWJskWlSLKueiR9v6PNbGmlE5ngZ9vDArymxZuQRS6jsA3Mffq5h0MicfXKcgSGFkObHD6N36xZIvnq4Vgp4CEjNFp8%2FmlEdJ3GEm0IW9VtNBWObNQoYBlh4Is3fEsCenxF4zglRxoP9XpR7iehtcLFQerOkxsNiAo8O7dpZz2MvR8FJ5nnJ%2F%2BjPqK4UfEAwBaYTxxrzcV9yu7hJPUv%2FobwES2KM66evEgOzmeajQtRHbMMmusr0GOqUBMhAi2cO3zsGiJ2Z%2BBubLc6zcmAgf%2B6wtmjPjktI%2BCgUD466ZfZ6syFtCPE1cgkR7FPgkqAyWwIlVKBz%2BTxDJ1a85Q7HS0HDcV%2BQJD2R44%2BJohQrRSe6sMOUskoy7GiYuxYs4%2FjGe0xAnzwm7KGgIuP24zY2F4XnaFDmJcqEakFD8MdOV4VkQBVSc3UgciaYi4TsA7UQKmlxpje2RRYJY9p06imux&X-Amz-Signature=c1c8eb77d1dd2900e420a98e897760961bd37d57108a943724466e55222c0992&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYKMPY7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW9kBWpOY3NbE%2BC7bJdCSyw1%2B46xnvPxKP17qBNTJVnAIgVoyqNZmNxkKUlUlACeCkQ3SjcGxZXOu3xK6S1KblCTgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRrCtdCnvwF44ekayrcA%2FEPFWvsHgj4ha2%2FcaZyrUXnW15XDn2q%2Fa4LgrHi%2FZ6Kwjdya3EfE%2BiXQsWMpGZwtfiVWHE31W1g%2BbXBz9pUk6zpFfx%2FhBa2Fx3ZGonxRzWsC27%2BSJAvw3ruaPKDqz8WNIEC4T9HS2AavAZL4LZqJkFxMpwkS%2FZIwwNBNQKtR7hdn5QrmJpPE%2F2DqpCY5utmhRoUIcgcsS9gX4ftA0cqAUyOSV3AnW4dR6TAjAF%2FnVtinDj5Novoe8X13TNToKvlls0p0cpfcDE6AKIPKbZH0MXyMgagIy88Ru2kEYoxn4CzAhPZ82xo8efEX%2F%2B1UlBx%2BFH%2FYaIgjr3Ac%2B4UANT45NTjPZaHw8lXYsdCw8exSFl6TFWV7lF37MfEBvjnMxzVGJlU2WEpxyGGiFErWJskWlSLKueiR9v6PNbGmlE5ngZ9vDArymxZuQRS6jsA3Mffq5h0MicfXKcgSGFkObHD6N36xZIvnq4Vgp4CEjNFp8%2FmlEdJ3GEm0IW9VtNBWObNQoYBlh4Is3fEsCenxF4zglRxoP9XpR7iehtcLFQerOkxsNiAo8O7dpZz2MvR8FJ5nnJ%2F%2BjPqK4UfEAwBaYTxxrzcV9yu7hJPUv%2FobwES2KM66evEgOzmeajQtRHbMMmusr0GOqUBMhAi2cO3zsGiJ2Z%2BBubLc6zcmAgf%2B6wtmjPjktI%2BCgUD466ZfZ6syFtCPE1cgkR7FPgkqAyWwIlVKBz%2BTxDJ1a85Q7HS0HDcV%2BQJD2R44%2BJohQrRSe6sMOUskoy7GiYuxYs4%2FjGe0xAnzwm7KGgIuP24zY2F4XnaFDmJcqEakFD8MdOV4VkQBVSc3UgciaYi4TsA7UQKmlxpje2RRYJY9p06imux&X-Amz-Signature=39c872a29dc3c2ac55d590970d18750571317f7917d911cd4242dd58acbcd7be&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
