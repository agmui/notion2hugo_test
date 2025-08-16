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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPOKTCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCxxt6GqHeVN4wYwl1r9TtR1gt39o1kOUzq%2BROtTsYsOwIhAP7afGBF2AqWkJhDPgjXshT8idiVTn0%2FZ1ge%2F2ucxfooKv8DCHEQABoMNjM3NDIzMTgzODA1IgwHa3KZ94q8orpnEAwq3APFgGOkksbyFjWeSHtYsb2qhCW4akoL5LL0M%2FH0mydOW7T9nojL4172YvPT%2BvJL0%2BuHRuPbMukkj%2BL2AdcS4xcILbYCl0VxokXRfAOSxIHU8r1tTOpgk%2F4Jj3TKGsEPmQusZx3lnfg%2BEcOctGMsldKi%2BPBmTVp1TX6PAuqiqOwXiKApga98w4EMqMSE4Lfqn1gL0%2FYIi1Z2cEkTx4xVuwocQX34HZ7%2F%2FAHNXJiCpMhGmF7%2BC6ZwzcaRQuqO%2Fdzw6FhxjCijb3PO7ixL3C7R0Q7eWQ3%2B%2Bs5i5UQROQJBLwxB9QhgmcL0%2B5YiQHHspKyXAE6TEfHXAkY6%2B5sLV2yGci9TOcEOqj0nXFz6A2WqbSH6b4nqE2d427TpgGQJH2qEj4WVzL3mFcO43B3FjvGxfS4eCcyFMNmTw0GEMS3Un%2B0bYlTgHIeawszU1dpKczbDDQX087SBQvBd%2FVJNjiwOekeg0g4cNpvgmN%2B60%2B%2Fbb8JZDyp67DQw6pm3kwAkJUJPsADs76CyBkgJFxWYRLmPFavmUE47EijfxxbS%2BeEJ9yiNGrGDOSv3FsHXf8l6AO8UrJbpWC2AZXARnQ4wyv73o0UZUF2uI4qzcDf1r5pg4Hxb4rVRNo819sSQlxPw0DDh94DFBjqkAQtjbTf7M%2Fl%2B1EnJpOpXHNCG2V2D0ZiG2SvesMVV8vYMlNJTXLwKjKfdGXhvdHQNKw2a2TT5zr298rsXCVRUbNFkYLS%2BJTrnwtbqxOMPY%2Bo3E1Oo2Ad%2FvcHtTxaVi0MrMmVc87LM8IxFea%2FSsDc1gPiaNoECBt8MUfWW7Ji3vIr1cpdtFXdO6Tv5JfB3FAFI0hW%2FNiWadpBX1gTpvjiSIRmZwp7Z&X-Amz-Signature=357d6f881fd72308eb0b9aa677db080a6a6d4cd08f24917f27b63d72232c4744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPOKTCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCxxt6GqHeVN4wYwl1r9TtR1gt39o1kOUzq%2BROtTsYsOwIhAP7afGBF2AqWkJhDPgjXshT8idiVTn0%2FZ1ge%2F2ucxfooKv8DCHEQABoMNjM3NDIzMTgzODA1IgwHa3KZ94q8orpnEAwq3APFgGOkksbyFjWeSHtYsb2qhCW4akoL5LL0M%2FH0mydOW7T9nojL4172YvPT%2BvJL0%2BuHRuPbMukkj%2BL2AdcS4xcILbYCl0VxokXRfAOSxIHU8r1tTOpgk%2F4Jj3TKGsEPmQusZx3lnfg%2BEcOctGMsldKi%2BPBmTVp1TX6PAuqiqOwXiKApga98w4EMqMSE4Lfqn1gL0%2FYIi1Z2cEkTx4xVuwocQX34HZ7%2F%2FAHNXJiCpMhGmF7%2BC6ZwzcaRQuqO%2Fdzw6FhxjCijb3PO7ixL3C7R0Q7eWQ3%2B%2Bs5i5UQROQJBLwxB9QhgmcL0%2B5YiQHHspKyXAE6TEfHXAkY6%2B5sLV2yGci9TOcEOqj0nXFz6A2WqbSH6b4nqE2d427TpgGQJH2qEj4WVzL3mFcO43B3FjvGxfS4eCcyFMNmTw0GEMS3Un%2B0bYlTgHIeawszU1dpKczbDDQX087SBQvBd%2FVJNjiwOekeg0g4cNpvgmN%2B60%2B%2Fbb8JZDyp67DQw6pm3kwAkJUJPsADs76CyBkgJFxWYRLmPFavmUE47EijfxxbS%2BeEJ9yiNGrGDOSv3FsHXf8l6AO8UrJbpWC2AZXARnQ4wyv73o0UZUF2uI4qzcDf1r5pg4Hxb4rVRNo819sSQlxPw0DDh94DFBjqkAQtjbTf7M%2Fl%2B1EnJpOpXHNCG2V2D0ZiG2SvesMVV8vYMlNJTXLwKjKfdGXhvdHQNKw2a2TT5zr298rsXCVRUbNFkYLS%2BJTrnwtbqxOMPY%2Bo3E1Oo2Ad%2FvcHtTxaVi0MrMmVc87LM8IxFea%2FSsDc1gPiaNoECBt8MUfWW7Ji3vIr1cpdtFXdO6Tv5JfB3FAFI0hW%2FNiWadpBX1gTpvjiSIRmZwp7Z&X-Amz-Signature=785be130f5bd31a9f526ba92e0a4b072aa8845009c341bf89dae1e9608e4e494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPOKTCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCxxt6GqHeVN4wYwl1r9TtR1gt39o1kOUzq%2BROtTsYsOwIhAP7afGBF2AqWkJhDPgjXshT8idiVTn0%2FZ1ge%2F2ucxfooKv8DCHEQABoMNjM3NDIzMTgzODA1IgwHa3KZ94q8orpnEAwq3APFgGOkksbyFjWeSHtYsb2qhCW4akoL5LL0M%2FH0mydOW7T9nojL4172YvPT%2BvJL0%2BuHRuPbMukkj%2BL2AdcS4xcILbYCl0VxokXRfAOSxIHU8r1tTOpgk%2F4Jj3TKGsEPmQusZx3lnfg%2BEcOctGMsldKi%2BPBmTVp1TX6PAuqiqOwXiKApga98w4EMqMSE4Lfqn1gL0%2FYIi1Z2cEkTx4xVuwocQX34HZ7%2F%2FAHNXJiCpMhGmF7%2BC6ZwzcaRQuqO%2Fdzw6FhxjCijb3PO7ixL3C7R0Q7eWQ3%2B%2Bs5i5UQROQJBLwxB9QhgmcL0%2B5YiQHHspKyXAE6TEfHXAkY6%2B5sLV2yGci9TOcEOqj0nXFz6A2WqbSH6b4nqE2d427TpgGQJH2qEj4WVzL3mFcO43B3FjvGxfS4eCcyFMNmTw0GEMS3Un%2B0bYlTgHIeawszU1dpKczbDDQX087SBQvBd%2FVJNjiwOekeg0g4cNpvgmN%2B60%2B%2Fbb8JZDyp67DQw6pm3kwAkJUJPsADs76CyBkgJFxWYRLmPFavmUE47EijfxxbS%2BeEJ9yiNGrGDOSv3FsHXf8l6AO8UrJbpWC2AZXARnQ4wyv73o0UZUF2uI4qzcDf1r5pg4Hxb4rVRNo819sSQlxPw0DDh94DFBjqkAQtjbTf7M%2Fl%2B1EnJpOpXHNCG2V2D0ZiG2SvesMVV8vYMlNJTXLwKjKfdGXhvdHQNKw2a2TT5zr298rsXCVRUbNFkYLS%2BJTrnwtbqxOMPY%2Bo3E1Oo2Ad%2FvcHtTxaVi0MrMmVc87LM8IxFea%2FSsDc1gPiaNoECBt8MUfWW7Ji3vIr1cpdtFXdO6Tv5JfB3FAFI0hW%2FNiWadpBX1gTpvjiSIRmZwp7Z&X-Amz-Signature=67444b4eeda5e848de1359b0f98adbca1cb187541df0becfe2ebfa1fc131ab52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPOKTCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCxxt6GqHeVN4wYwl1r9TtR1gt39o1kOUzq%2BROtTsYsOwIhAP7afGBF2AqWkJhDPgjXshT8idiVTn0%2FZ1ge%2F2ucxfooKv8DCHEQABoMNjM3NDIzMTgzODA1IgwHa3KZ94q8orpnEAwq3APFgGOkksbyFjWeSHtYsb2qhCW4akoL5LL0M%2FH0mydOW7T9nojL4172YvPT%2BvJL0%2BuHRuPbMukkj%2BL2AdcS4xcILbYCl0VxokXRfAOSxIHU8r1tTOpgk%2F4Jj3TKGsEPmQusZx3lnfg%2BEcOctGMsldKi%2BPBmTVp1TX6PAuqiqOwXiKApga98w4EMqMSE4Lfqn1gL0%2FYIi1Z2cEkTx4xVuwocQX34HZ7%2F%2FAHNXJiCpMhGmF7%2BC6ZwzcaRQuqO%2Fdzw6FhxjCijb3PO7ixL3C7R0Q7eWQ3%2B%2Bs5i5UQROQJBLwxB9QhgmcL0%2B5YiQHHspKyXAE6TEfHXAkY6%2B5sLV2yGci9TOcEOqj0nXFz6A2WqbSH6b4nqE2d427TpgGQJH2qEj4WVzL3mFcO43B3FjvGxfS4eCcyFMNmTw0GEMS3Un%2B0bYlTgHIeawszU1dpKczbDDQX087SBQvBd%2FVJNjiwOekeg0g4cNpvgmN%2B60%2B%2Fbb8JZDyp67DQw6pm3kwAkJUJPsADs76CyBkgJFxWYRLmPFavmUE47EijfxxbS%2BeEJ9yiNGrGDOSv3FsHXf8l6AO8UrJbpWC2AZXARnQ4wyv73o0UZUF2uI4qzcDf1r5pg4Hxb4rVRNo819sSQlxPw0DDh94DFBjqkAQtjbTf7M%2Fl%2B1EnJpOpXHNCG2V2D0ZiG2SvesMVV8vYMlNJTXLwKjKfdGXhvdHQNKw2a2TT5zr298rsXCVRUbNFkYLS%2BJTrnwtbqxOMPY%2Bo3E1Oo2Ad%2FvcHtTxaVi0MrMmVc87LM8IxFea%2FSsDc1gPiaNoECBt8MUfWW7Ji3vIr1cpdtFXdO6Tv5JfB3FAFI0hW%2FNiWadpBX1gTpvjiSIRmZwp7Z&X-Amz-Signature=28b90cce47d4e82742665518e09313691348c28e09d4e8ade23ff540739336e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPOKTCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCxxt6GqHeVN4wYwl1r9TtR1gt39o1kOUzq%2BROtTsYsOwIhAP7afGBF2AqWkJhDPgjXshT8idiVTn0%2FZ1ge%2F2ucxfooKv8DCHEQABoMNjM3NDIzMTgzODA1IgwHa3KZ94q8orpnEAwq3APFgGOkksbyFjWeSHtYsb2qhCW4akoL5LL0M%2FH0mydOW7T9nojL4172YvPT%2BvJL0%2BuHRuPbMukkj%2BL2AdcS4xcILbYCl0VxokXRfAOSxIHU8r1tTOpgk%2F4Jj3TKGsEPmQusZx3lnfg%2BEcOctGMsldKi%2BPBmTVp1TX6PAuqiqOwXiKApga98w4EMqMSE4Lfqn1gL0%2FYIi1Z2cEkTx4xVuwocQX34HZ7%2F%2FAHNXJiCpMhGmF7%2BC6ZwzcaRQuqO%2Fdzw6FhxjCijb3PO7ixL3C7R0Q7eWQ3%2B%2Bs5i5UQROQJBLwxB9QhgmcL0%2B5YiQHHspKyXAE6TEfHXAkY6%2B5sLV2yGci9TOcEOqj0nXFz6A2WqbSH6b4nqE2d427TpgGQJH2qEj4WVzL3mFcO43B3FjvGxfS4eCcyFMNmTw0GEMS3Un%2B0bYlTgHIeawszU1dpKczbDDQX087SBQvBd%2FVJNjiwOekeg0g4cNpvgmN%2B60%2B%2Fbb8JZDyp67DQw6pm3kwAkJUJPsADs76CyBkgJFxWYRLmPFavmUE47EijfxxbS%2BeEJ9yiNGrGDOSv3FsHXf8l6AO8UrJbpWC2AZXARnQ4wyv73o0UZUF2uI4qzcDf1r5pg4Hxb4rVRNo819sSQlxPw0DDh94DFBjqkAQtjbTf7M%2Fl%2B1EnJpOpXHNCG2V2D0ZiG2SvesMVV8vYMlNJTXLwKjKfdGXhvdHQNKw2a2TT5zr298rsXCVRUbNFkYLS%2BJTrnwtbqxOMPY%2Bo3E1Oo2Ad%2FvcHtTxaVi0MrMmVc87LM8IxFea%2FSsDc1gPiaNoECBt8MUfWW7Ji3vIr1cpdtFXdO6Tv5JfB3FAFI0hW%2FNiWadpBX1gTpvjiSIRmZwp7Z&X-Amz-Signature=e8560b68a7ffde8b08bf12288c1a463933a078246b994cd3ba70393839645f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
