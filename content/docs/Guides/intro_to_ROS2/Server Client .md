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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXAU5YYW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIEkupuc9Lnv%2FyvZCp7VrI3i0UenKG2WQZVpJJxtvTBAiAmjRgffkkdK3Np6iwP4edO6qY11%2B2S6AmQf7IOQWNZ7Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMrwjFKimiMSpOR%2BmeKtwDQLyOo%2FVt4vnQ%2F20fmecY%2B15n%2BNIJ%2BGTAW%2BrXVlyKaaIta7%2BoH6JA9pbDTCLmQLT3CkAZG0j1ZsH7OMM%2FF9MebYYUAP1ajZwbl31dX420Xx6ztAKIMJCRQAZJgYyWe8TQor0hKFNBguiWhYCf6AzQJ3ngsD2SZzcOAJBtQdmbpXA%2BWGJREhpMyK0BaFguK%2FDOxH6y87BZhgnDwr3%2Fg5ug3%2FwOg7SoubPIMQ%2BHDKUSgeXF%2BidaIqrfITvHxYyW2yfRuX3ZAxH59Z7pqGi15x1JoZKUlritH0f%2FrfQOVifw1zcj%2FOFxnThPDYJmFc1z1Nrl4mmaYFpI8Ps07%2FvitTLtBJymb%2BDNYRLKPd1PPbti3XETiRSn4t%2BHw8SA7Sr1zQaFTfQCVost4EOnnoEMZULUSaqtfwtj5wLllEdLCpbMyyCQ65qoQ6eK%2BlzEZN8TURKgbEIBusmf9nu9tA7XiRuVcf7BaHczDD58RFlXJTDU13v1ytTwhXZfO7oVjD%2FfMbw%2FuHVBC3dEpVKfyy3Qm6pl%2BL07ABXcyPy0A3S%2FVnQo5amTKfBkCvV5iKRbkWbto8srdrqnHyzdYeXOANND3ixa%2BvtfmCiu%2FcnZBDcCMBopQteazB5U5bfEHsAsix8wqI%2BHwAY6pgEXqJz6QvOlJn2G0wWijXnJ%2BftHKKSnnbW3rLaiDF%2BMWb2%2FsLTbqwdfS%2BdgPgJGDCWEH609Dn1AssWbJPHYG0AY3TuL4f1h2f7tvjnb6tEtXvaHDKjSPvmDC11Mdgmje9QRKCzfaLd2EBmOWv9KsstBZaX%2FNzOwitUqdiNyJm3dd%2B61FOLCUO0BeDf%2BWkNU5fwQWTyJYemV%2BS%2BSZqK4bbKjST3qsPX%2B&X-Amz-Signature=8f188ce3bc5673252283146c3e8dede1806dd815098f41b80ea331307b3c7300&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXAU5YYW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIEkupuc9Lnv%2FyvZCp7VrI3i0UenKG2WQZVpJJxtvTBAiAmjRgffkkdK3Np6iwP4edO6qY11%2B2S6AmQf7IOQWNZ7Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMrwjFKimiMSpOR%2BmeKtwDQLyOo%2FVt4vnQ%2F20fmecY%2B15n%2BNIJ%2BGTAW%2BrXVlyKaaIta7%2BoH6JA9pbDTCLmQLT3CkAZG0j1ZsH7OMM%2FF9MebYYUAP1ajZwbl31dX420Xx6ztAKIMJCRQAZJgYyWe8TQor0hKFNBguiWhYCf6AzQJ3ngsD2SZzcOAJBtQdmbpXA%2BWGJREhpMyK0BaFguK%2FDOxH6y87BZhgnDwr3%2Fg5ug3%2FwOg7SoubPIMQ%2BHDKUSgeXF%2BidaIqrfITvHxYyW2yfRuX3ZAxH59Z7pqGi15x1JoZKUlritH0f%2FrfQOVifw1zcj%2FOFxnThPDYJmFc1z1Nrl4mmaYFpI8Ps07%2FvitTLtBJymb%2BDNYRLKPd1PPbti3XETiRSn4t%2BHw8SA7Sr1zQaFTfQCVost4EOnnoEMZULUSaqtfwtj5wLllEdLCpbMyyCQ65qoQ6eK%2BlzEZN8TURKgbEIBusmf9nu9tA7XiRuVcf7BaHczDD58RFlXJTDU13v1ytTwhXZfO7oVjD%2FfMbw%2FuHVBC3dEpVKfyy3Qm6pl%2BL07ABXcyPy0A3S%2FVnQo5amTKfBkCvV5iKRbkWbto8srdrqnHyzdYeXOANND3ixa%2BvtfmCiu%2FcnZBDcCMBopQteazB5U5bfEHsAsix8wqI%2BHwAY6pgEXqJz6QvOlJn2G0wWijXnJ%2BftHKKSnnbW3rLaiDF%2BMWb2%2FsLTbqwdfS%2BdgPgJGDCWEH609Dn1AssWbJPHYG0AY3TuL4f1h2f7tvjnb6tEtXvaHDKjSPvmDC11Mdgmje9QRKCzfaLd2EBmOWv9KsstBZaX%2FNzOwitUqdiNyJm3dd%2B61FOLCUO0BeDf%2BWkNU5fwQWTyJYemV%2BS%2BSZqK4bbKjST3qsPX%2B&X-Amz-Signature=970dd461eaa1b07af14e84996bc98790aa5bd1d4686d565aba423a796b8c995d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXAU5YYW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIEkupuc9Lnv%2FyvZCp7VrI3i0UenKG2WQZVpJJxtvTBAiAmjRgffkkdK3Np6iwP4edO6qY11%2B2S6AmQf7IOQWNZ7Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMrwjFKimiMSpOR%2BmeKtwDQLyOo%2FVt4vnQ%2F20fmecY%2B15n%2BNIJ%2BGTAW%2BrXVlyKaaIta7%2BoH6JA9pbDTCLmQLT3CkAZG0j1ZsH7OMM%2FF9MebYYUAP1ajZwbl31dX420Xx6ztAKIMJCRQAZJgYyWe8TQor0hKFNBguiWhYCf6AzQJ3ngsD2SZzcOAJBtQdmbpXA%2BWGJREhpMyK0BaFguK%2FDOxH6y87BZhgnDwr3%2Fg5ug3%2FwOg7SoubPIMQ%2BHDKUSgeXF%2BidaIqrfITvHxYyW2yfRuX3ZAxH59Z7pqGi15x1JoZKUlritH0f%2FrfQOVifw1zcj%2FOFxnThPDYJmFc1z1Nrl4mmaYFpI8Ps07%2FvitTLtBJymb%2BDNYRLKPd1PPbti3XETiRSn4t%2BHw8SA7Sr1zQaFTfQCVost4EOnnoEMZULUSaqtfwtj5wLllEdLCpbMyyCQ65qoQ6eK%2BlzEZN8TURKgbEIBusmf9nu9tA7XiRuVcf7BaHczDD58RFlXJTDU13v1ytTwhXZfO7oVjD%2FfMbw%2FuHVBC3dEpVKfyy3Qm6pl%2BL07ABXcyPy0A3S%2FVnQo5amTKfBkCvV5iKRbkWbto8srdrqnHyzdYeXOANND3ixa%2BvtfmCiu%2FcnZBDcCMBopQteazB5U5bfEHsAsix8wqI%2BHwAY6pgEXqJz6QvOlJn2G0wWijXnJ%2BftHKKSnnbW3rLaiDF%2BMWb2%2FsLTbqwdfS%2BdgPgJGDCWEH609Dn1AssWbJPHYG0AY3TuL4f1h2f7tvjnb6tEtXvaHDKjSPvmDC11Mdgmje9QRKCzfaLd2EBmOWv9KsstBZaX%2FNzOwitUqdiNyJm3dd%2B61FOLCUO0BeDf%2BWkNU5fwQWTyJYemV%2BS%2BSZqK4bbKjST3qsPX%2B&X-Amz-Signature=aaad885296314fbfdb7f6112d6838981a3f565b4758b6670480aea08adc80707&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXAU5YYW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIEkupuc9Lnv%2FyvZCp7VrI3i0UenKG2WQZVpJJxtvTBAiAmjRgffkkdK3Np6iwP4edO6qY11%2B2S6AmQf7IOQWNZ7Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMrwjFKimiMSpOR%2BmeKtwDQLyOo%2FVt4vnQ%2F20fmecY%2B15n%2BNIJ%2BGTAW%2BrXVlyKaaIta7%2BoH6JA9pbDTCLmQLT3CkAZG0j1ZsH7OMM%2FF9MebYYUAP1ajZwbl31dX420Xx6ztAKIMJCRQAZJgYyWe8TQor0hKFNBguiWhYCf6AzQJ3ngsD2SZzcOAJBtQdmbpXA%2BWGJREhpMyK0BaFguK%2FDOxH6y87BZhgnDwr3%2Fg5ug3%2FwOg7SoubPIMQ%2BHDKUSgeXF%2BidaIqrfITvHxYyW2yfRuX3ZAxH59Z7pqGi15x1JoZKUlritH0f%2FrfQOVifw1zcj%2FOFxnThPDYJmFc1z1Nrl4mmaYFpI8Ps07%2FvitTLtBJymb%2BDNYRLKPd1PPbti3XETiRSn4t%2BHw8SA7Sr1zQaFTfQCVost4EOnnoEMZULUSaqtfwtj5wLllEdLCpbMyyCQ65qoQ6eK%2BlzEZN8TURKgbEIBusmf9nu9tA7XiRuVcf7BaHczDD58RFlXJTDU13v1ytTwhXZfO7oVjD%2FfMbw%2FuHVBC3dEpVKfyy3Qm6pl%2BL07ABXcyPy0A3S%2FVnQo5amTKfBkCvV5iKRbkWbto8srdrqnHyzdYeXOANND3ixa%2BvtfmCiu%2FcnZBDcCMBopQteazB5U5bfEHsAsix8wqI%2BHwAY6pgEXqJz6QvOlJn2G0wWijXnJ%2BftHKKSnnbW3rLaiDF%2BMWb2%2FsLTbqwdfS%2BdgPgJGDCWEH609Dn1AssWbJPHYG0AY3TuL4f1h2f7tvjnb6tEtXvaHDKjSPvmDC11Mdgmje9QRKCzfaLd2EBmOWv9KsstBZaX%2FNzOwitUqdiNyJm3dd%2B61FOLCUO0BeDf%2BWkNU5fwQWTyJYemV%2BS%2BSZqK4bbKjST3qsPX%2B&X-Amz-Signature=bee546578c3fe780f6efd2305cd892adcb62c5dd526b3f4e813690c44809a1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXAU5YYW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIEkupuc9Lnv%2FyvZCp7VrI3i0UenKG2WQZVpJJxtvTBAiAmjRgffkkdK3Np6iwP4edO6qY11%2B2S6AmQf7IOQWNZ7Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMrwjFKimiMSpOR%2BmeKtwDQLyOo%2FVt4vnQ%2F20fmecY%2B15n%2BNIJ%2BGTAW%2BrXVlyKaaIta7%2BoH6JA9pbDTCLmQLT3CkAZG0j1ZsH7OMM%2FF9MebYYUAP1ajZwbl31dX420Xx6ztAKIMJCRQAZJgYyWe8TQor0hKFNBguiWhYCf6AzQJ3ngsD2SZzcOAJBtQdmbpXA%2BWGJREhpMyK0BaFguK%2FDOxH6y87BZhgnDwr3%2Fg5ug3%2FwOg7SoubPIMQ%2BHDKUSgeXF%2BidaIqrfITvHxYyW2yfRuX3ZAxH59Z7pqGi15x1JoZKUlritH0f%2FrfQOVifw1zcj%2FOFxnThPDYJmFc1z1Nrl4mmaYFpI8Ps07%2FvitTLtBJymb%2BDNYRLKPd1PPbti3XETiRSn4t%2BHw8SA7Sr1zQaFTfQCVost4EOnnoEMZULUSaqtfwtj5wLllEdLCpbMyyCQ65qoQ6eK%2BlzEZN8TURKgbEIBusmf9nu9tA7XiRuVcf7BaHczDD58RFlXJTDU13v1ytTwhXZfO7oVjD%2FfMbw%2FuHVBC3dEpVKfyy3Qm6pl%2BL07ABXcyPy0A3S%2FVnQo5amTKfBkCvV5iKRbkWbto8srdrqnHyzdYeXOANND3ixa%2BvtfmCiu%2FcnZBDcCMBopQteazB5U5bfEHsAsix8wqI%2BHwAY6pgEXqJz6QvOlJn2G0wWijXnJ%2BftHKKSnnbW3rLaiDF%2BMWb2%2FsLTbqwdfS%2BdgPgJGDCWEH609Dn1AssWbJPHYG0AY3TuL4f1h2f7tvjnb6tEtXvaHDKjSPvmDC11Mdgmje9QRKCzfaLd2EBmOWv9KsstBZaX%2FNzOwitUqdiNyJm3dd%2B61FOLCUO0BeDf%2BWkNU5fwQWTyJYemV%2BS%2BSZqK4bbKjST3qsPX%2B&X-Amz-Signature=886b5128256bc3efaedb54961c135ea35b1fd40ed47f9f5545c8fffb817c0800&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
