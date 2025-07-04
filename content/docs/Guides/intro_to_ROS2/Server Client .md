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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2MEQ2UY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEo34LIQf3PnCwiwDchud7XbDXZRoNr0%2BsOpUmbi09Q6AiAUdccmDSzF2JoVwtM92a%2F90nNnSwTdhtkV6jcakRhyCyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSE%2B5uR8HHJMROM7wKtwDFSOUobj%2FaXWxTavEOrMfo1mrbowsKj1lm18S6Y2CkrXvWlj%2BDTAz5PvtNqREtdqs29J2iTANJj3dZT%2Fy7eLKUMsuiYJbmk0EruvIVsbbO2xd9xhrceuErm7P%2FO%2BWEAHysXMhj90sL06Z1Rji%2F4oe67G86Mq%2BHKrwnt%2Fm%2FrkOXb7rPIgIy88HoFMyJKMy3TJaPWl1qeTPoIfIfFoTgdsnJ3U118Ah58DxMycc0s7BrL0%2Bj2qpIdC291oGC3DxAfB6a4tyMAZ%2F7a608SE3YjcLSuTd3ZWLCLPBe7CjK0yv1cErOnb9hDNLCEpufAUwmF%2B1glCIkCZi20%2FzIw02aXjRN6bHlC5swAXNG7PKHBTZpH99AyLPfu%2BtyIz0haB3JYlbq5PQBFXV8NMEB920vM3MUYLTIvrZTlDeyqsAXZ5zOL%2BYUqEsYsG6on1duDYCEcziojkipuiAAd01e44xSvJn3G09qJS%2F9ojbWhB8IOxz9ZD7XXSgLOwTxjIRL1Ic6vDsowxZ1Q85V%2ByDKCpLicYHwuJCgjNJuRCO6lXpdDvu0WIy5ltFxJ6CqfZOd3eYakviJOPBxoSPd5Ym2c1wEm1MYh4bxrB2fr4lpbCpWlwVT%2B791X09lyj5OoLWs3cwgY6dwwY6pgHMplqvzt%2Bs20OZSrQjGjUs0VrM3WFzB2aUzaKMrTfrFPW3S6f2qv2lQl%2Bon0GZt0DJp9qOItYZ3tJQYSej55QJMacDu6qabN5Nr7vwSf%2BXnUNtO9DLod6uydiUH7Q5eH11yjAjejkTSHJ7zaJN%2FAQ7GpOZnDrqNT1On0h1L2lOyUvDsxV%2B4sbiIR1xWXPSyyPRFswJEBabQWc53%2BUnB%2BKMcsiOZDWv&X-Amz-Signature=fcc38aa2532cdb87cacf201bf062695a464df755d74abcbee24d312000ef5cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2MEQ2UY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEo34LIQf3PnCwiwDchud7XbDXZRoNr0%2BsOpUmbi09Q6AiAUdccmDSzF2JoVwtM92a%2F90nNnSwTdhtkV6jcakRhyCyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSE%2B5uR8HHJMROM7wKtwDFSOUobj%2FaXWxTavEOrMfo1mrbowsKj1lm18S6Y2CkrXvWlj%2BDTAz5PvtNqREtdqs29J2iTANJj3dZT%2Fy7eLKUMsuiYJbmk0EruvIVsbbO2xd9xhrceuErm7P%2FO%2BWEAHysXMhj90sL06Z1Rji%2F4oe67G86Mq%2BHKrwnt%2Fm%2FrkOXb7rPIgIy88HoFMyJKMy3TJaPWl1qeTPoIfIfFoTgdsnJ3U118Ah58DxMycc0s7BrL0%2Bj2qpIdC291oGC3DxAfB6a4tyMAZ%2F7a608SE3YjcLSuTd3ZWLCLPBe7CjK0yv1cErOnb9hDNLCEpufAUwmF%2B1glCIkCZi20%2FzIw02aXjRN6bHlC5swAXNG7PKHBTZpH99AyLPfu%2BtyIz0haB3JYlbq5PQBFXV8NMEB920vM3MUYLTIvrZTlDeyqsAXZ5zOL%2BYUqEsYsG6on1duDYCEcziojkipuiAAd01e44xSvJn3G09qJS%2F9ojbWhB8IOxz9ZD7XXSgLOwTxjIRL1Ic6vDsowxZ1Q85V%2ByDKCpLicYHwuJCgjNJuRCO6lXpdDvu0WIy5ltFxJ6CqfZOd3eYakviJOPBxoSPd5Ym2c1wEm1MYh4bxrB2fr4lpbCpWlwVT%2B791X09lyj5OoLWs3cwgY6dwwY6pgHMplqvzt%2Bs20OZSrQjGjUs0VrM3WFzB2aUzaKMrTfrFPW3S6f2qv2lQl%2Bon0GZt0DJp9qOItYZ3tJQYSej55QJMacDu6qabN5Nr7vwSf%2BXnUNtO9DLod6uydiUH7Q5eH11yjAjejkTSHJ7zaJN%2FAQ7GpOZnDrqNT1On0h1L2lOyUvDsxV%2B4sbiIR1xWXPSyyPRFswJEBabQWc53%2BUnB%2BKMcsiOZDWv&X-Amz-Signature=65c4a35d4a09255536b0c24d1067e1258cdff363b434b165e45e077de302d58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2MEQ2UY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEo34LIQf3PnCwiwDchud7XbDXZRoNr0%2BsOpUmbi09Q6AiAUdccmDSzF2JoVwtM92a%2F90nNnSwTdhtkV6jcakRhyCyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSE%2B5uR8HHJMROM7wKtwDFSOUobj%2FaXWxTavEOrMfo1mrbowsKj1lm18S6Y2CkrXvWlj%2BDTAz5PvtNqREtdqs29J2iTANJj3dZT%2Fy7eLKUMsuiYJbmk0EruvIVsbbO2xd9xhrceuErm7P%2FO%2BWEAHysXMhj90sL06Z1Rji%2F4oe67G86Mq%2BHKrwnt%2Fm%2FrkOXb7rPIgIy88HoFMyJKMy3TJaPWl1qeTPoIfIfFoTgdsnJ3U118Ah58DxMycc0s7BrL0%2Bj2qpIdC291oGC3DxAfB6a4tyMAZ%2F7a608SE3YjcLSuTd3ZWLCLPBe7CjK0yv1cErOnb9hDNLCEpufAUwmF%2B1glCIkCZi20%2FzIw02aXjRN6bHlC5swAXNG7PKHBTZpH99AyLPfu%2BtyIz0haB3JYlbq5PQBFXV8NMEB920vM3MUYLTIvrZTlDeyqsAXZ5zOL%2BYUqEsYsG6on1duDYCEcziojkipuiAAd01e44xSvJn3G09qJS%2F9ojbWhB8IOxz9ZD7XXSgLOwTxjIRL1Ic6vDsowxZ1Q85V%2ByDKCpLicYHwuJCgjNJuRCO6lXpdDvu0WIy5ltFxJ6CqfZOd3eYakviJOPBxoSPd5Ym2c1wEm1MYh4bxrB2fr4lpbCpWlwVT%2B791X09lyj5OoLWs3cwgY6dwwY6pgHMplqvzt%2Bs20OZSrQjGjUs0VrM3WFzB2aUzaKMrTfrFPW3S6f2qv2lQl%2Bon0GZt0DJp9qOItYZ3tJQYSej55QJMacDu6qabN5Nr7vwSf%2BXnUNtO9DLod6uydiUH7Q5eH11yjAjejkTSHJ7zaJN%2FAQ7GpOZnDrqNT1On0h1L2lOyUvDsxV%2B4sbiIR1xWXPSyyPRFswJEBabQWc53%2BUnB%2BKMcsiOZDWv&X-Amz-Signature=1ccf0b40618868f1eb4af2f6de760eef89967478b019d47b7af39fd1dfeb2392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2MEQ2UY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEo34LIQf3PnCwiwDchud7XbDXZRoNr0%2BsOpUmbi09Q6AiAUdccmDSzF2JoVwtM92a%2F90nNnSwTdhtkV6jcakRhyCyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSE%2B5uR8HHJMROM7wKtwDFSOUobj%2FaXWxTavEOrMfo1mrbowsKj1lm18S6Y2CkrXvWlj%2BDTAz5PvtNqREtdqs29J2iTANJj3dZT%2Fy7eLKUMsuiYJbmk0EruvIVsbbO2xd9xhrceuErm7P%2FO%2BWEAHysXMhj90sL06Z1Rji%2F4oe67G86Mq%2BHKrwnt%2Fm%2FrkOXb7rPIgIy88HoFMyJKMy3TJaPWl1qeTPoIfIfFoTgdsnJ3U118Ah58DxMycc0s7BrL0%2Bj2qpIdC291oGC3DxAfB6a4tyMAZ%2F7a608SE3YjcLSuTd3ZWLCLPBe7CjK0yv1cErOnb9hDNLCEpufAUwmF%2B1glCIkCZi20%2FzIw02aXjRN6bHlC5swAXNG7PKHBTZpH99AyLPfu%2BtyIz0haB3JYlbq5PQBFXV8NMEB920vM3MUYLTIvrZTlDeyqsAXZ5zOL%2BYUqEsYsG6on1duDYCEcziojkipuiAAd01e44xSvJn3G09qJS%2F9ojbWhB8IOxz9ZD7XXSgLOwTxjIRL1Ic6vDsowxZ1Q85V%2ByDKCpLicYHwuJCgjNJuRCO6lXpdDvu0WIy5ltFxJ6CqfZOd3eYakviJOPBxoSPd5Ym2c1wEm1MYh4bxrB2fr4lpbCpWlwVT%2B791X09lyj5OoLWs3cwgY6dwwY6pgHMplqvzt%2Bs20OZSrQjGjUs0VrM3WFzB2aUzaKMrTfrFPW3S6f2qv2lQl%2Bon0GZt0DJp9qOItYZ3tJQYSej55QJMacDu6qabN5Nr7vwSf%2BXnUNtO9DLod6uydiUH7Q5eH11yjAjejkTSHJ7zaJN%2FAQ7GpOZnDrqNT1On0h1L2lOyUvDsxV%2B4sbiIR1xWXPSyyPRFswJEBabQWc53%2BUnB%2BKMcsiOZDWv&X-Amz-Signature=5a4f926db32360360575147e662596ccfc5473c6efe8439718d40d3e691d0c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2MEQ2UY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEo34LIQf3PnCwiwDchud7XbDXZRoNr0%2BsOpUmbi09Q6AiAUdccmDSzF2JoVwtM92a%2F90nNnSwTdhtkV6jcakRhyCyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSE%2B5uR8HHJMROM7wKtwDFSOUobj%2FaXWxTavEOrMfo1mrbowsKj1lm18S6Y2CkrXvWlj%2BDTAz5PvtNqREtdqs29J2iTANJj3dZT%2Fy7eLKUMsuiYJbmk0EruvIVsbbO2xd9xhrceuErm7P%2FO%2BWEAHysXMhj90sL06Z1Rji%2F4oe67G86Mq%2BHKrwnt%2Fm%2FrkOXb7rPIgIy88HoFMyJKMy3TJaPWl1qeTPoIfIfFoTgdsnJ3U118Ah58DxMycc0s7BrL0%2Bj2qpIdC291oGC3DxAfB6a4tyMAZ%2F7a608SE3YjcLSuTd3ZWLCLPBe7CjK0yv1cErOnb9hDNLCEpufAUwmF%2B1glCIkCZi20%2FzIw02aXjRN6bHlC5swAXNG7PKHBTZpH99AyLPfu%2BtyIz0haB3JYlbq5PQBFXV8NMEB920vM3MUYLTIvrZTlDeyqsAXZ5zOL%2BYUqEsYsG6on1duDYCEcziojkipuiAAd01e44xSvJn3G09qJS%2F9ojbWhB8IOxz9ZD7XXSgLOwTxjIRL1Ic6vDsowxZ1Q85V%2ByDKCpLicYHwuJCgjNJuRCO6lXpdDvu0WIy5ltFxJ6CqfZOd3eYakviJOPBxoSPd5Ym2c1wEm1MYh4bxrB2fr4lpbCpWlwVT%2B791X09lyj5OoLWs3cwgY6dwwY6pgHMplqvzt%2Bs20OZSrQjGjUs0VrM3WFzB2aUzaKMrTfrFPW3S6f2qv2lQl%2Bon0GZt0DJp9qOItYZ3tJQYSej55QJMacDu6qabN5Nr7vwSf%2BXnUNtO9DLod6uydiUH7Q5eH11yjAjejkTSHJ7zaJN%2FAQ7GpOZnDrqNT1On0h1L2lOyUvDsxV%2B4sbiIR1xWXPSyyPRFswJEBabQWc53%2BUnB%2BKMcsiOZDWv&X-Amz-Signature=ee22f2ad0e5c8ae93d883c49c11e844b7e590d5f665e4cb926a2b08a35febf26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
