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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNMSCE2E%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDuvWmciTNSNbpr0MZWCKSrzLsXTXCpOzkxbBfUgJCgLgIhAJGg1Yw05Vb5RtgPfgD99%2FUrpdw94kK8oqO4cvUuNGtzKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FcyTW%2FzRPfYGV8e4q3APPj6TnOgt6KZZvKfsa1naJb4IP6jcCAGIIT4l9Ve7GPINoxYxmFFmVesETNdU5EUWi1YNfli55q3T71IH4pG4CY8Fj5P%2BR8PvRnIFGypy9xxA45%2BzaSoHMpE73qyiAgVtk6JcnIiKQ3m3IMBLvt2JRgxzCx4xxcw9vt27GNnjnlJBj5y62vKG5XDjI6yMOTcIvAALpjmLiN3IaFla5Uc46gsLmvMtzgcrOOIOVHvDtxz3iWMpQFRDM7mVPDOCSiImmu5zn0FUBLUKYYc5dacAZuDzAFIDJ6SPbdtuwXFmZa9oeifVdGNrCBYDM59taYLu%2B8xQDuFH7yagNK46mcsHfh0O3MokHDxdXbSl5cF4n16ISWBU97wfk5xHNCOf1qov7S6aadIb4pE91GJvsDQ%2FXdtAjIclgIw75919fOiwNLQDNDXXFaBwNFwcCn9uII4jJCyieJGuVBGM9BsmEC0Hxe3JyBjxnpNxGSVANulkP01qxWNhFAaLDwboD084xoEl0Ex4HaYu2dXXdu2DTgEQ4hMFVSZyRodGOepDm9C1GZOmSxRzhJoAB47tSrI0fqU8Z1FlZS4qtdkaSsGK%2FBh3gORpR8qCCdz6ug9PcFxiPgJb%2Fq0kJ%2Fc1WkpS4wzC%2Fw4nBBjqkAfeoqgpkiCn0xcKfWfSBWZB4Lm5wmrEz%2F9bmuta%2BNI6klLENagezsoDZ67IBknW9XNCOyFHwLJcmzW%2BCJVWCBD6kO2mJKOi%2Bbhz6AAASDeh3bf91Lo7Xr6Gyr1K2t8nHKccdlnOTgvHNd7RcNwy56XnV%2FoGA%2BsF4TPNXPESZ5hswBF%2B9wy%2FOjWub%2BLdxveKYcvtTBUxb30iEGt8EjSByG5%2BH3BST&X-Amz-Signature=c1bdc700279d84d4d1d05d7d70cb327f09eb0eaf2cc975fa435985df358cd8fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNMSCE2E%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDuvWmciTNSNbpr0MZWCKSrzLsXTXCpOzkxbBfUgJCgLgIhAJGg1Yw05Vb5RtgPfgD99%2FUrpdw94kK8oqO4cvUuNGtzKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FcyTW%2FzRPfYGV8e4q3APPj6TnOgt6KZZvKfsa1naJb4IP6jcCAGIIT4l9Ve7GPINoxYxmFFmVesETNdU5EUWi1YNfli55q3T71IH4pG4CY8Fj5P%2BR8PvRnIFGypy9xxA45%2BzaSoHMpE73qyiAgVtk6JcnIiKQ3m3IMBLvt2JRgxzCx4xxcw9vt27GNnjnlJBj5y62vKG5XDjI6yMOTcIvAALpjmLiN3IaFla5Uc46gsLmvMtzgcrOOIOVHvDtxz3iWMpQFRDM7mVPDOCSiImmu5zn0FUBLUKYYc5dacAZuDzAFIDJ6SPbdtuwXFmZa9oeifVdGNrCBYDM59taYLu%2B8xQDuFH7yagNK46mcsHfh0O3MokHDxdXbSl5cF4n16ISWBU97wfk5xHNCOf1qov7S6aadIb4pE91GJvsDQ%2FXdtAjIclgIw75919fOiwNLQDNDXXFaBwNFwcCn9uII4jJCyieJGuVBGM9BsmEC0Hxe3JyBjxnpNxGSVANulkP01qxWNhFAaLDwboD084xoEl0Ex4HaYu2dXXdu2DTgEQ4hMFVSZyRodGOepDm9C1GZOmSxRzhJoAB47tSrI0fqU8Z1FlZS4qtdkaSsGK%2FBh3gORpR8qCCdz6ug9PcFxiPgJb%2Fq0kJ%2Fc1WkpS4wzC%2Fw4nBBjqkAfeoqgpkiCn0xcKfWfSBWZB4Lm5wmrEz%2F9bmuta%2BNI6klLENagezsoDZ67IBknW9XNCOyFHwLJcmzW%2BCJVWCBD6kO2mJKOi%2Bbhz6AAASDeh3bf91Lo7Xr6Gyr1K2t8nHKccdlnOTgvHNd7RcNwy56XnV%2FoGA%2BsF4TPNXPESZ5hswBF%2B9wy%2FOjWub%2BLdxveKYcvtTBUxb30iEGt8EjSByG5%2BH3BST&X-Amz-Signature=73cac351944315b12a2756dca50c87423fe03a14132f9928012991a43e51a232&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNMSCE2E%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDuvWmciTNSNbpr0MZWCKSrzLsXTXCpOzkxbBfUgJCgLgIhAJGg1Yw05Vb5RtgPfgD99%2FUrpdw94kK8oqO4cvUuNGtzKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FcyTW%2FzRPfYGV8e4q3APPj6TnOgt6KZZvKfsa1naJb4IP6jcCAGIIT4l9Ve7GPINoxYxmFFmVesETNdU5EUWi1YNfli55q3T71IH4pG4CY8Fj5P%2BR8PvRnIFGypy9xxA45%2BzaSoHMpE73qyiAgVtk6JcnIiKQ3m3IMBLvt2JRgxzCx4xxcw9vt27GNnjnlJBj5y62vKG5XDjI6yMOTcIvAALpjmLiN3IaFla5Uc46gsLmvMtzgcrOOIOVHvDtxz3iWMpQFRDM7mVPDOCSiImmu5zn0FUBLUKYYc5dacAZuDzAFIDJ6SPbdtuwXFmZa9oeifVdGNrCBYDM59taYLu%2B8xQDuFH7yagNK46mcsHfh0O3MokHDxdXbSl5cF4n16ISWBU97wfk5xHNCOf1qov7S6aadIb4pE91GJvsDQ%2FXdtAjIclgIw75919fOiwNLQDNDXXFaBwNFwcCn9uII4jJCyieJGuVBGM9BsmEC0Hxe3JyBjxnpNxGSVANulkP01qxWNhFAaLDwboD084xoEl0Ex4HaYu2dXXdu2DTgEQ4hMFVSZyRodGOepDm9C1GZOmSxRzhJoAB47tSrI0fqU8Z1FlZS4qtdkaSsGK%2FBh3gORpR8qCCdz6ug9PcFxiPgJb%2Fq0kJ%2Fc1WkpS4wzC%2Fw4nBBjqkAfeoqgpkiCn0xcKfWfSBWZB4Lm5wmrEz%2F9bmuta%2BNI6klLENagezsoDZ67IBknW9XNCOyFHwLJcmzW%2BCJVWCBD6kO2mJKOi%2Bbhz6AAASDeh3bf91Lo7Xr6Gyr1K2t8nHKccdlnOTgvHNd7RcNwy56XnV%2FoGA%2BsF4TPNXPESZ5hswBF%2B9wy%2FOjWub%2BLdxveKYcvtTBUxb30iEGt8EjSByG5%2BH3BST&X-Amz-Signature=2cefcf7db7873467e4b37d39f4520c66c94794366d7a70d8460a74ec1e0ea9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNMSCE2E%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDuvWmciTNSNbpr0MZWCKSrzLsXTXCpOzkxbBfUgJCgLgIhAJGg1Yw05Vb5RtgPfgD99%2FUrpdw94kK8oqO4cvUuNGtzKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FcyTW%2FzRPfYGV8e4q3APPj6TnOgt6KZZvKfsa1naJb4IP6jcCAGIIT4l9Ve7GPINoxYxmFFmVesETNdU5EUWi1YNfli55q3T71IH4pG4CY8Fj5P%2BR8PvRnIFGypy9xxA45%2BzaSoHMpE73qyiAgVtk6JcnIiKQ3m3IMBLvt2JRgxzCx4xxcw9vt27GNnjnlJBj5y62vKG5XDjI6yMOTcIvAALpjmLiN3IaFla5Uc46gsLmvMtzgcrOOIOVHvDtxz3iWMpQFRDM7mVPDOCSiImmu5zn0FUBLUKYYc5dacAZuDzAFIDJ6SPbdtuwXFmZa9oeifVdGNrCBYDM59taYLu%2B8xQDuFH7yagNK46mcsHfh0O3MokHDxdXbSl5cF4n16ISWBU97wfk5xHNCOf1qov7S6aadIb4pE91GJvsDQ%2FXdtAjIclgIw75919fOiwNLQDNDXXFaBwNFwcCn9uII4jJCyieJGuVBGM9BsmEC0Hxe3JyBjxnpNxGSVANulkP01qxWNhFAaLDwboD084xoEl0Ex4HaYu2dXXdu2DTgEQ4hMFVSZyRodGOepDm9C1GZOmSxRzhJoAB47tSrI0fqU8Z1FlZS4qtdkaSsGK%2FBh3gORpR8qCCdz6ug9PcFxiPgJb%2Fq0kJ%2Fc1WkpS4wzC%2Fw4nBBjqkAfeoqgpkiCn0xcKfWfSBWZB4Lm5wmrEz%2F9bmuta%2BNI6klLENagezsoDZ67IBknW9XNCOyFHwLJcmzW%2BCJVWCBD6kO2mJKOi%2Bbhz6AAASDeh3bf91Lo7Xr6Gyr1K2t8nHKccdlnOTgvHNd7RcNwy56XnV%2FoGA%2BsF4TPNXPESZ5hswBF%2B9wy%2FOjWub%2BLdxveKYcvtTBUxb30iEGt8EjSByG5%2BH3BST&X-Amz-Signature=e744a9e0a936e531d0c5b7682942c5749fb7c9d3d3470eaefb3a86a4c7c29b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNMSCE2E%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDuvWmciTNSNbpr0MZWCKSrzLsXTXCpOzkxbBfUgJCgLgIhAJGg1Yw05Vb5RtgPfgD99%2FUrpdw94kK8oqO4cvUuNGtzKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FcyTW%2FzRPfYGV8e4q3APPj6TnOgt6KZZvKfsa1naJb4IP6jcCAGIIT4l9Ve7GPINoxYxmFFmVesETNdU5EUWi1YNfli55q3T71IH4pG4CY8Fj5P%2BR8PvRnIFGypy9xxA45%2BzaSoHMpE73qyiAgVtk6JcnIiKQ3m3IMBLvt2JRgxzCx4xxcw9vt27GNnjnlJBj5y62vKG5XDjI6yMOTcIvAALpjmLiN3IaFla5Uc46gsLmvMtzgcrOOIOVHvDtxz3iWMpQFRDM7mVPDOCSiImmu5zn0FUBLUKYYc5dacAZuDzAFIDJ6SPbdtuwXFmZa9oeifVdGNrCBYDM59taYLu%2B8xQDuFH7yagNK46mcsHfh0O3MokHDxdXbSl5cF4n16ISWBU97wfk5xHNCOf1qov7S6aadIb4pE91GJvsDQ%2FXdtAjIclgIw75919fOiwNLQDNDXXFaBwNFwcCn9uII4jJCyieJGuVBGM9BsmEC0Hxe3JyBjxnpNxGSVANulkP01qxWNhFAaLDwboD084xoEl0Ex4HaYu2dXXdu2DTgEQ4hMFVSZyRodGOepDm9C1GZOmSxRzhJoAB47tSrI0fqU8Z1FlZS4qtdkaSsGK%2FBh3gORpR8qCCdz6ug9PcFxiPgJb%2Fq0kJ%2Fc1WkpS4wzC%2Fw4nBBjqkAfeoqgpkiCn0xcKfWfSBWZB4Lm5wmrEz%2F9bmuta%2BNI6klLENagezsoDZ67IBknW9XNCOyFHwLJcmzW%2BCJVWCBD6kO2mJKOi%2Bbhz6AAASDeh3bf91Lo7Xr6Gyr1K2t8nHKccdlnOTgvHNd7RcNwy56XnV%2FoGA%2BsF4TPNXPESZ5hswBF%2B9wy%2FOjWub%2BLdxveKYcvtTBUxb30iEGt8EjSByG5%2BH3BST&X-Amz-Signature=6fc03c71880d67f179eb7ab805213b9524d1a5b63445452ecdb17d904c7bc74e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
