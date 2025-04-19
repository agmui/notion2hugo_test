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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUEWIUHE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDJv97HDeRFSw0I0EAQ9oLA8nJw1DJgkz8nSP5l4MNWrgIhAI6FTKWGv4xIQ%2BorKW1qHwxl3iteIgXVY0IzEj1e28aeKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPR5RFfHDXx2w4kq3AMA99scAiavEaNlrkLsBk5w7MraQp8ovln0GtbfmyzEa9oNBQCziLr4ndAnUDEyb31UdCpcJ1gw11cLiqb9%2FR%2BjbcjJ8YYVFMUysMFI5TjVyhdW35Aos3KJutg5skICBoH4Rs0Pc3M%2FRbA1bYq7GPw8FWyTlBZQc4i%2Fw8KfIn3qi0rkkiMb6FqKECFEBD8gExvUDeJeWldg15Yu1EpxaaWqMfXQ9ij6MN9s9UBOcQ8Rqog%2FcMQpisfra8MfJPFN4IVaWTCpxqifqXXmfuTpw13RJ6s1R7YGWe%2FwmS1yREsPOdrUbwYBpLEam3JXiqDVPJqx7hHE9OZBI9LirDXgF7itABqwjsXYySTMGcpXmWZaqvdQRAZI4OdWIZWiJ66wOR4aG3ePFEJTuXF4ZVISqjyRBw1E%2FeXAGNAZDw1PFJcR4O3SR22UYyJ1Vf1QozB4YJXNPmLRlS8PaP6UVavx%2BsI8%2FUQvs%2FLtCHzbebLzxECNOH3r1HPFMxy2g6iGxOiYUWjWDYehVlGwNfSt58EpAfOVlTbMLEPWV7RaaYLyoDyUzgpIHNYZdJjXvfXGEIMTWALRPYe6Cwq1%2FJnJX3pbzJE4lkvUGI7t6H%2FvAa4kbOJUhUcIzAjrEciJTktBHzCOoI%2FABjqkAR4U7KJAuXPKI%2FhdpGugyY1NdzboXLA3LL5WKpvFVRxTIpLTppOGs2iSrlsqrTmQCtGv3FSWshIq0wT2MU73QVCkKsnCjdGVjSY2p5vJwo%2Fs%2BDDsnR1Q6o1ggNFUd5FEoCRnsvsVmMRSUI8n0a%2BUZ7njdQ5If9ovWdVUFKCcOh25E1Y5L%2FEsEDEwf7vS5X1GsN%2BJTdDxptRNr2wBOApt2348JRWp&X-Amz-Signature=e9f0506a98f4198f5f37ec74bbffe17c02ea4d66d3a96620061467d45e7015ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUEWIUHE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDJv97HDeRFSw0I0EAQ9oLA8nJw1DJgkz8nSP5l4MNWrgIhAI6FTKWGv4xIQ%2BorKW1qHwxl3iteIgXVY0IzEj1e28aeKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPR5RFfHDXx2w4kq3AMA99scAiavEaNlrkLsBk5w7MraQp8ovln0GtbfmyzEa9oNBQCziLr4ndAnUDEyb31UdCpcJ1gw11cLiqb9%2FR%2BjbcjJ8YYVFMUysMFI5TjVyhdW35Aos3KJutg5skICBoH4Rs0Pc3M%2FRbA1bYq7GPw8FWyTlBZQc4i%2Fw8KfIn3qi0rkkiMb6FqKECFEBD8gExvUDeJeWldg15Yu1EpxaaWqMfXQ9ij6MN9s9UBOcQ8Rqog%2FcMQpisfra8MfJPFN4IVaWTCpxqifqXXmfuTpw13RJ6s1R7YGWe%2FwmS1yREsPOdrUbwYBpLEam3JXiqDVPJqx7hHE9OZBI9LirDXgF7itABqwjsXYySTMGcpXmWZaqvdQRAZI4OdWIZWiJ66wOR4aG3ePFEJTuXF4ZVISqjyRBw1E%2FeXAGNAZDw1PFJcR4O3SR22UYyJ1Vf1QozB4YJXNPmLRlS8PaP6UVavx%2BsI8%2FUQvs%2FLtCHzbebLzxECNOH3r1HPFMxy2g6iGxOiYUWjWDYehVlGwNfSt58EpAfOVlTbMLEPWV7RaaYLyoDyUzgpIHNYZdJjXvfXGEIMTWALRPYe6Cwq1%2FJnJX3pbzJE4lkvUGI7t6H%2FvAa4kbOJUhUcIzAjrEciJTktBHzCOoI%2FABjqkAR4U7KJAuXPKI%2FhdpGugyY1NdzboXLA3LL5WKpvFVRxTIpLTppOGs2iSrlsqrTmQCtGv3FSWshIq0wT2MU73QVCkKsnCjdGVjSY2p5vJwo%2Fs%2BDDsnR1Q6o1ggNFUd5FEoCRnsvsVmMRSUI8n0a%2BUZ7njdQ5If9ovWdVUFKCcOh25E1Y5L%2FEsEDEwf7vS5X1GsN%2BJTdDxptRNr2wBOApt2348JRWp&X-Amz-Signature=589c97ba25ada4f273482fe18ce3aee57cad8a28655f8efc3adbe38531757fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUEWIUHE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDJv97HDeRFSw0I0EAQ9oLA8nJw1DJgkz8nSP5l4MNWrgIhAI6FTKWGv4xIQ%2BorKW1qHwxl3iteIgXVY0IzEj1e28aeKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPR5RFfHDXx2w4kq3AMA99scAiavEaNlrkLsBk5w7MraQp8ovln0GtbfmyzEa9oNBQCziLr4ndAnUDEyb31UdCpcJ1gw11cLiqb9%2FR%2BjbcjJ8YYVFMUysMFI5TjVyhdW35Aos3KJutg5skICBoH4Rs0Pc3M%2FRbA1bYq7GPw8FWyTlBZQc4i%2Fw8KfIn3qi0rkkiMb6FqKECFEBD8gExvUDeJeWldg15Yu1EpxaaWqMfXQ9ij6MN9s9UBOcQ8Rqog%2FcMQpisfra8MfJPFN4IVaWTCpxqifqXXmfuTpw13RJ6s1R7YGWe%2FwmS1yREsPOdrUbwYBpLEam3JXiqDVPJqx7hHE9OZBI9LirDXgF7itABqwjsXYySTMGcpXmWZaqvdQRAZI4OdWIZWiJ66wOR4aG3ePFEJTuXF4ZVISqjyRBw1E%2FeXAGNAZDw1PFJcR4O3SR22UYyJ1Vf1QozB4YJXNPmLRlS8PaP6UVavx%2BsI8%2FUQvs%2FLtCHzbebLzxECNOH3r1HPFMxy2g6iGxOiYUWjWDYehVlGwNfSt58EpAfOVlTbMLEPWV7RaaYLyoDyUzgpIHNYZdJjXvfXGEIMTWALRPYe6Cwq1%2FJnJX3pbzJE4lkvUGI7t6H%2FvAa4kbOJUhUcIzAjrEciJTktBHzCOoI%2FABjqkAR4U7KJAuXPKI%2FhdpGugyY1NdzboXLA3LL5WKpvFVRxTIpLTppOGs2iSrlsqrTmQCtGv3FSWshIq0wT2MU73QVCkKsnCjdGVjSY2p5vJwo%2Fs%2BDDsnR1Q6o1ggNFUd5FEoCRnsvsVmMRSUI8n0a%2BUZ7njdQ5If9ovWdVUFKCcOh25E1Y5L%2FEsEDEwf7vS5X1GsN%2BJTdDxptRNr2wBOApt2348JRWp&X-Amz-Signature=e7f0cb749559f70bd52899af3b89cee7a95b13f758220aa3898b1ca669cd3f79&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUEWIUHE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDJv97HDeRFSw0I0EAQ9oLA8nJw1DJgkz8nSP5l4MNWrgIhAI6FTKWGv4xIQ%2BorKW1qHwxl3iteIgXVY0IzEj1e28aeKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPR5RFfHDXx2w4kq3AMA99scAiavEaNlrkLsBk5w7MraQp8ovln0GtbfmyzEa9oNBQCziLr4ndAnUDEyb31UdCpcJ1gw11cLiqb9%2FR%2BjbcjJ8YYVFMUysMFI5TjVyhdW35Aos3KJutg5skICBoH4Rs0Pc3M%2FRbA1bYq7GPw8FWyTlBZQc4i%2Fw8KfIn3qi0rkkiMb6FqKECFEBD8gExvUDeJeWldg15Yu1EpxaaWqMfXQ9ij6MN9s9UBOcQ8Rqog%2FcMQpisfra8MfJPFN4IVaWTCpxqifqXXmfuTpw13RJ6s1R7YGWe%2FwmS1yREsPOdrUbwYBpLEam3JXiqDVPJqx7hHE9OZBI9LirDXgF7itABqwjsXYySTMGcpXmWZaqvdQRAZI4OdWIZWiJ66wOR4aG3ePFEJTuXF4ZVISqjyRBw1E%2FeXAGNAZDw1PFJcR4O3SR22UYyJ1Vf1QozB4YJXNPmLRlS8PaP6UVavx%2BsI8%2FUQvs%2FLtCHzbebLzxECNOH3r1HPFMxy2g6iGxOiYUWjWDYehVlGwNfSt58EpAfOVlTbMLEPWV7RaaYLyoDyUzgpIHNYZdJjXvfXGEIMTWALRPYe6Cwq1%2FJnJX3pbzJE4lkvUGI7t6H%2FvAa4kbOJUhUcIzAjrEciJTktBHzCOoI%2FABjqkAR4U7KJAuXPKI%2FhdpGugyY1NdzboXLA3LL5WKpvFVRxTIpLTppOGs2iSrlsqrTmQCtGv3FSWshIq0wT2MU73QVCkKsnCjdGVjSY2p5vJwo%2Fs%2BDDsnR1Q6o1ggNFUd5FEoCRnsvsVmMRSUI8n0a%2BUZ7njdQ5If9ovWdVUFKCcOh25E1Y5L%2FEsEDEwf7vS5X1GsN%2BJTdDxptRNr2wBOApt2348JRWp&X-Amz-Signature=b9de72b9cc3a81bf6779a963cffb5ee5d65224790de3b1d912e72957aa5226cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUEWIUHE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDJv97HDeRFSw0I0EAQ9oLA8nJw1DJgkz8nSP5l4MNWrgIhAI6FTKWGv4xIQ%2BorKW1qHwxl3iteIgXVY0IzEj1e28aeKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPR5RFfHDXx2w4kq3AMA99scAiavEaNlrkLsBk5w7MraQp8ovln0GtbfmyzEa9oNBQCziLr4ndAnUDEyb31UdCpcJ1gw11cLiqb9%2FR%2BjbcjJ8YYVFMUysMFI5TjVyhdW35Aos3KJutg5skICBoH4Rs0Pc3M%2FRbA1bYq7GPw8FWyTlBZQc4i%2Fw8KfIn3qi0rkkiMb6FqKECFEBD8gExvUDeJeWldg15Yu1EpxaaWqMfXQ9ij6MN9s9UBOcQ8Rqog%2FcMQpisfra8MfJPFN4IVaWTCpxqifqXXmfuTpw13RJ6s1R7YGWe%2FwmS1yREsPOdrUbwYBpLEam3JXiqDVPJqx7hHE9OZBI9LirDXgF7itABqwjsXYySTMGcpXmWZaqvdQRAZI4OdWIZWiJ66wOR4aG3ePFEJTuXF4ZVISqjyRBw1E%2FeXAGNAZDw1PFJcR4O3SR22UYyJ1Vf1QozB4YJXNPmLRlS8PaP6UVavx%2BsI8%2FUQvs%2FLtCHzbebLzxECNOH3r1HPFMxy2g6iGxOiYUWjWDYehVlGwNfSt58EpAfOVlTbMLEPWV7RaaYLyoDyUzgpIHNYZdJjXvfXGEIMTWALRPYe6Cwq1%2FJnJX3pbzJE4lkvUGI7t6H%2FvAa4kbOJUhUcIzAjrEciJTktBHzCOoI%2FABjqkAR4U7KJAuXPKI%2FhdpGugyY1NdzboXLA3LL5WKpvFVRxTIpLTppOGs2iSrlsqrTmQCtGv3FSWshIq0wT2MU73QVCkKsnCjdGVjSY2p5vJwo%2Fs%2BDDsnR1Q6o1ggNFUd5FEoCRnsvsVmMRSUI8n0a%2BUZ7njdQ5If9ovWdVUFKCcOh25E1Y5L%2FEsEDEwf7vS5X1GsN%2BJTdDxptRNr2wBOApt2348JRWp&X-Amz-Signature=232d3e52ed293cd40a37dfe5cc2adf11c8fc6ae71491da1c52706014f9bf2abc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
