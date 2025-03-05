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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQ2GWUT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9pwXMCZ3Ff2Akum8p6byr53DwAsaiEJHYsoTF1%2FFTKAiEAgSFWhPsRlfxvMseRX50W3o2sHC10%2F77LY2FSFHERagEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJNIcoR1O2XJy%2FXHNircA2%2FyXWCBEm05%2BDBJWBIhQGVxDpEDevJhIxHI7VhDMpjYmBfM1fcuaQH4u35wZBXZs7iW7bIPek4TZGf4IzKcnTwEShv99YpShyVX8WX7oJZoxg4P%2BmUbpM%2FEc1xjwCamAZlu22LwVOokvkY4EE4kuFm8cKDjww2Gkqo2H1KrATLErknz1QtPayoWqqCPvtxC1qY1EVQl9v6efGF2ygBM7S6B3plNLSw%2FhV%2FsbFfX842IKZT8ZRqNc8IA6MOz0PKVck2tLVd6%2B2wvcyBJc7gAho%2BbSg2Q8elmxlLYnSAxj5fr8PPgdui5BFyRLYDVnQ6fn%2Ff7%2FazpxHtGzCXT4xHt%2BWuf%2FRLf7MivkdGEBuc35AZ21Odjtq%2FGDM3QwHqMRz%2BUjX%2B%2FTnzROIY4ZoVUA4FcIo5oGcQYgGxM5me5bybLFdeih%2FfQbwZcllGtbMsdtvA92kC7jTy5Z8H3kaLMo3%2Btj%2B3R1pawlu4T09h4tCTsxlY081JIwOFmL2SrcAJJoTDaOZigVRLgrscXEVIjpCz3diFrWtg9hlxwVGtb4tmdTNnR6MSpMVLorbGrjdzoH4pDhzEPHEJmhdobeakH51AtdY4r%2FaKNZN0EMXu1a1yU0ZJuCsjjHQOBX9j5qKo4MMW4ob4GOqUBzkeqOX%2BU5LmA3UrZu9cZAdqbAXqoOq2UNSnTZaHGA087X43fh5w3fZwK%2FEa7MH3Jh29OKkxiG9HH0%2BnLlpFdT8c%2FdcNSTxvlEFmvnk7f8rBl%2FzxZxmd%2BcsLDLBkyZfrvYjR2Oyls7yeL3ZYLc0gujBi62GiJnF1pyinJDW2PPFO7G5fsM%2FiC85u4nyacGDg4uP0OvVNF7YYB4wLf2%2B%2BBT5p2QSOs&X-Amz-Signature=d4144105e372c34234e4c61d10ceeb4734b35d35d438186f04d331d7738c8b07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQ2GWUT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9pwXMCZ3Ff2Akum8p6byr53DwAsaiEJHYsoTF1%2FFTKAiEAgSFWhPsRlfxvMseRX50W3o2sHC10%2F77LY2FSFHERagEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJNIcoR1O2XJy%2FXHNircA2%2FyXWCBEm05%2BDBJWBIhQGVxDpEDevJhIxHI7VhDMpjYmBfM1fcuaQH4u35wZBXZs7iW7bIPek4TZGf4IzKcnTwEShv99YpShyVX8WX7oJZoxg4P%2BmUbpM%2FEc1xjwCamAZlu22LwVOokvkY4EE4kuFm8cKDjww2Gkqo2H1KrATLErknz1QtPayoWqqCPvtxC1qY1EVQl9v6efGF2ygBM7S6B3plNLSw%2FhV%2FsbFfX842IKZT8ZRqNc8IA6MOz0PKVck2tLVd6%2B2wvcyBJc7gAho%2BbSg2Q8elmxlLYnSAxj5fr8PPgdui5BFyRLYDVnQ6fn%2Ff7%2FazpxHtGzCXT4xHt%2BWuf%2FRLf7MivkdGEBuc35AZ21Odjtq%2FGDM3QwHqMRz%2BUjX%2B%2FTnzROIY4ZoVUA4FcIo5oGcQYgGxM5me5bybLFdeih%2FfQbwZcllGtbMsdtvA92kC7jTy5Z8H3kaLMo3%2Btj%2B3R1pawlu4T09h4tCTsxlY081JIwOFmL2SrcAJJoTDaOZigVRLgrscXEVIjpCz3diFrWtg9hlxwVGtb4tmdTNnR6MSpMVLorbGrjdzoH4pDhzEPHEJmhdobeakH51AtdY4r%2FaKNZN0EMXu1a1yU0ZJuCsjjHQOBX9j5qKo4MMW4ob4GOqUBzkeqOX%2BU5LmA3UrZu9cZAdqbAXqoOq2UNSnTZaHGA087X43fh5w3fZwK%2FEa7MH3Jh29OKkxiG9HH0%2BnLlpFdT8c%2FdcNSTxvlEFmvnk7f8rBl%2FzxZxmd%2BcsLDLBkyZfrvYjR2Oyls7yeL3ZYLc0gujBi62GiJnF1pyinJDW2PPFO7G5fsM%2FiC85u4nyacGDg4uP0OvVNF7YYB4wLf2%2B%2BBT5p2QSOs&X-Amz-Signature=0fef8e6cb56abd8071585e46df0d9b71c824b08860d0d5f28f7bdc609719e023&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQ2GWUT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9pwXMCZ3Ff2Akum8p6byr53DwAsaiEJHYsoTF1%2FFTKAiEAgSFWhPsRlfxvMseRX50W3o2sHC10%2F77LY2FSFHERagEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJNIcoR1O2XJy%2FXHNircA2%2FyXWCBEm05%2BDBJWBIhQGVxDpEDevJhIxHI7VhDMpjYmBfM1fcuaQH4u35wZBXZs7iW7bIPek4TZGf4IzKcnTwEShv99YpShyVX8WX7oJZoxg4P%2BmUbpM%2FEc1xjwCamAZlu22LwVOokvkY4EE4kuFm8cKDjww2Gkqo2H1KrATLErknz1QtPayoWqqCPvtxC1qY1EVQl9v6efGF2ygBM7S6B3plNLSw%2FhV%2FsbFfX842IKZT8ZRqNc8IA6MOz0PKVck2tLVd6%2B2wvcyBJc7gAho%2BbSg2Q8elmxlLYnSAxj5fr8PPgdui5BFyRLYDVnQ6fn%2Ff7%2FazpxHtGzCXT4xHt%2BWuf%2FRLf7MivkdGEBuc35AZ21Odjtq%2FGDM3QwHqMRz%2BUjX%2B%2FTnzROIY4ZoVUA4FcIo5oGcQYgGxM5me5bybLFdeih%2FfQbwZcllGtbMsdtvA92kC7jTy5Z8H3kaLMo3%2Btj%2B3R1pawlu4T09h4tCTsxlY081JIwOFmL2SrcAJJoTDaOZigVRLgrscXEVIjpCz3diFrWtg9hlxwVGtb4tmdTNnR6MSpMVLorbGrjdzoH4pDhzEPHEJmhdobeakH51AtdY4r%2FaKNZN0EMXu1a1yU0ZJuCsjjHQOBX9j5qKo4MMW4ob4GOqUBzkeqOX%2BU5LmA3UrZu9cZAdqbAXqoOq2UNSnTZaHGA087X43fh5w3fZwK%2FEa7MH3Jh29OKkxiG9HH0%2BnLlpFdT8c%2FdcNSTxvlEFmvnk7f8rBl%2FzxZxmd%2BcsLDLBkyZfrvYjR2Oyls7yeL3ZYLc0gujBi62GiJnF1pyinJDW2PPFO7G5fsM%2FiC85u4nyacGDg4uP0OvVNF7YYB4wLf2%2B%2BBT5p2QSOs&X-Amz-Signature=0995c201284bb681fe3a42efa64de98c49d9d8f8fe1cd4ecfbc087c20cce66be&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQ2GWUT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9pwXMCZ3Ff2Akum8p6byr53DwAsaiEJHYsoTF1%2FFTKAiEAgSFWhPsRlfxvMseRX50W3o2sHC10%2F77LY2FSFHERagEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJNIcoR1O2XJy%2FXHNircA2%2FyXWCBEm05%2BDBJWBIhQGVxDpEDevJhIxHI7VhDMpjYmBfM1fcuaQH4u35wZBXZs7iW7bIPek4TZGf4IzKcnTwEShv99YpShyVX8WX7oJZoxg4P%2BmUbpM%2FEc1xjwCamAZlu22LwVOokvkY4EE4kuFm8cKDjww2Gkqo2H1KrATLErknz1QtPayoWqqCPvtxC1qY1EVQl9v6efGF2ygBM7S6B3plNLSw%2FhV%2FsbFfX842IKZT8ZRqNc8IA6MOz0PKVck2tLVd6%2B2wvcyBJc7gAho%2BbSg2Q8elmxlLYnSAxj5fr8PPgdui5BFyRLYDVnQ6fn%2Ff7%2FazpxHtGzCXT4xHt%2BWuf%2FRLf7MivkdGEBuc35AZ21Odjtq%2FGDM3QwHqMRz%2BUjX%2B%2FTnzROIY4ZoVUA4FcIo5oGcQYgGxM5me5bybLFdeih%2FfQbwZcllGtbMsdtvA92kC7jTy5Z8H3kaLMo3%2Btj%2B3R1pawlu4T09h4tCTsxlY081JIwOFmL2SrcAJJoTDaOZigVRLgrscXEVIjpCz3diFrWtg9hlxwVGtb4tmdTNnR6MSpMVLorbGrjdzoH4pDhzEPHEJmhdobeakH51AtdY4r%2FaKNZN0EMXu1a1yU0ZJuCsjjHQOBX9j5qKo4MMW4ob4GOqUBzkeqOX%2BU5LmA3UrZu9cZAdqbAXqoOq2UNSnTZaHGA087X43fh5w3fZwK%2FEa7MH3Jh29OKkxiG9HH0%2BnLlpFdT8c%2FdcNSTxvlEFmvnk7f8rBl%2FzxZxmd%2BcsLDLBkyZfrvYjR2Oyls7yeL3ZYLc0gujBi62GiJnF1pyinJDW2PPFO7G5fsM%2FiC85u4nyacGDg4uP0OvVNF7YYB4wLf2%2B%2BBT5p2QSOs&X-Amz-Signature=93c1a6f260d0348a76d164a2a72e5e513e8cbd62e3caeded579d744cce2d8889&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQ2GWUT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9pwXMCZ3Ff2Akum8p6byr53DwAsaiEJHYsoTF1%2FFTKAiEAgSFWhPsRlfxvMseRX50W3o2sHC10%2F77LY2FSFHERagEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJNIcoR1O2XJy%2FXHNircA2%2FyXWCBEm05%2BDBJWBIhQGVxDpEDevJhIxHI7VhDMpjYmBfM1fcuaQH4u35wZBXZs7iW7bIPek4TZGf4IzKcnTwEShv99YpShyVX8WX7oJZoxg4P%2BmUbpM%2FEc1xjwCamAZlu22LwVOokvkY4EE4kuFm8cKDjww2Gkqo2H1KrATLErknz1QtPayoWqqCPvtxC1qY1EVQl9v6efGF2ygBM7S6B3plNLSw%2FhV%2FsbFfX842IKZT8ZRqNc8IA6MOz0PKVck2tLVd6%2B2wvcyBJc7gAho%2BbSg2Q8elmxlLYnSAxj5fr8PPgdui5BFyRLYDVnQ6fn%2Ff7%2FazpxHtGzCXT4xHt%2BWuf%2FRLf7MivkdGEBuc35AZ21Odjtq%2FGDM3QwHqMRz%2BUjX%2B%2FTnzROIY4ZoVUA4FcIo5oGcQYgGxM5me5bybLFdeih%2FfQbwZcllGtbMsdtvA92kC7jTy5Z8H3kaLMo3%2Btj%2B3R1pawlu4T09h4tCTsxlY081JIwOFmL2SrcAJJoTDaOZigVRLgrscXEVIjpCz3diFrWtg9hlxwVGtb4tmdTNnR6MSpMVLorbGrjdzoH4pDhzEPHEJmhdobeakH51AtdY4r%2FaKNZN0EMXu1a1yU0ZJuCsjjHQOBX9j5qKo4MMW4ob4GOqUBzkeqOX%2BU5LmA3UrZu9cZAdqbAXqoOq2UNSnTZaHGA087X43fh5w3fZwK%2FEa7MH3Jh29OKkxiG9HH0%2BnLlpFdT8c%2FdcNSTxvlEFmvnk7f8rBl%2FzxZxmd%2BcsLDLBkyZfrvYjR2Oyls7yeL3ZYLc0gujBi62GiJnF1pyinJDW2PPFO7G5fsM%2FiC85u4nyacGDg4uP0OvVNF7YYB4wLf2%2B%2BBT5p2QSOs&X-Amz-Signature=dd067f5af110139a77d5f16da13dd3f3cbed3697d37b54dbba8ee928c0147809&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
