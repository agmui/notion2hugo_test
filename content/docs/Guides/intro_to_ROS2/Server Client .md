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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LE6CEJT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2Fa1%2B2mwrCTosos%2BpE51bbR5pAT%2FQr%2FH3Qox%2BHq7RuAiEAj%2BG%2BaDu1iWKW3BlzoWcmAT9InNrFytKzjvHfY%2FowDxsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCCfpCI36bob6ww9kCrcA0zCGUJyuvdySyw6HkMfAyvDbbBW2jlVtX68J7nl0N7oijB9aBEVk6UEq%2B2%2FB0p3f04Fm4uh8aH9%2FmnejR49k0i681Muz2IBN%2FDZLKBw1A9g2H5sCWlbixmekWkktLVE2zMe6P80rct5YWRpIcbrdSg%2FNOovnKJsBp73704%2FEBOyF0GjShFIDovjzU25DFbg%2F%2FQeZUp%2F1Svh7PQEpwval8VfUkn8fGY9AmYkGVlD%2Brau4Je4fSMEt%2FZ0Xned38MhLA%2BeSvOTWL4BLQgvNZ3md0NcJh4kdKM%2BW7hww4UUAxGYVLSD97KCEKGZvYJAzw3EL9MNh9arlERqftPxdvXxDQRiUR9dR69LcM2%2FYe%2FUyO2QxxuJdSAgMagb5tLdrQumUgQsFWoSQuzbNJgcwL9Z1nnJRpk3hnjE2ozYr0qOZXKktt6I6DNxHZb7wOvooQMc4YY2Er%2FhAzX9Dv%2F70VpKNuIrWgiMPEIre20jPIFe%2FKniUwLuW23qUacYgzlCyoQrimxZAcf%2FuUJcJPhn7FKF8hc42G3msBgqDUVOSFpkbZwBoPYRW3CK%2BqtUuyfD4jjxHOGG4KiYLRC1FpB6gqOIpJROIFPePXAhJn9Jq7yBAF%2F5jkVuEHCqBxm6Iu5GMMCZ9MAGOqUBDE7tVzRc2rNsBHP4GMiKOv1QRafWCs7enYoWYBxdryJgeAEmie5tO9qV7Z4%2FJr8k%2FhRJ%2FFFMDoeekf6%2FA5stwoYA2s94qdgymHOP8zLsEyytLn9JTE8wYXhZDeJsvn4i26z8wZ%2BaBpykXRWFj1P51rn8Z8w6m5ZxFuv%2BYPAUDnmkHOfsaVMjast6faU8NkC0ww83XI%2FMZ6bwurXe06X2Rv%2FCW4PD&X-Amz-Signature=4412491aa344596db6a9287a8db46cd2b8f54ef5bf6502d84e5e2173419e879c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LE6CEJT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2Fa1%2B2mwrCTosos%2BpE51bbR5pAT%2FQr%2FH3Qox%2BHq7RuAiEAj%2BG%2BaDu1iWKW3BlzoWcmAT9InNrFytKzjvHfY%2FowDxsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCCfpCI36bob6ww9kCrcA0zCGUJyuvdySyw6HkMfAyvDbbBW2jlVtX68J7nl0N7oijB9aBEVk6UEq%2B2%2FB0p3f04Fm4uh8aH9%2FmnejR49k0i681Muz2IBN%2FDZLKBw1A9g2H5sCWlbixmekWkktLVE2zMe6P80rct5YWRpIcbrdSg%2FNOovnKJsBp73704%2FEBOyF0GjShFIDovjzU25DFbg%2F%2FQeZUp%2F1Svh7PQEpwval8VfUkn8fGY9AmYkGVlD%2Brau4Je4fSMEt%2FZ0Xned38MhLA%2BeSvOTWL4BLQgvNZ3md0NcJh4kdKM%2BW7hww4UUAxGYVLSD97KCEKGZvYJAzw3EL9MNh9arlERqftPxdvXxDQRiUR9dR69LcM2%2FYe%2FUyO2QxxuJdSAgMagb5tLdrQumUgQsFWoSQuzbNJgcwL9Z1nnJRpk3hnjE2ozYr0qOZXKktt6I6DNxHZb7wOvooQMc4YY2Er%2FhAzX9Dv%2F70VpKNuIrWgiMPEIre20jPIFe%2FKniUwLuW23qUacYgzlCyoQrimxZAcf%2FuUJcJPhn7FKF8hc42G3msBgqDUVOSFpkbZwBoPYRW3CK%2BqtUuyfD4jjxHOGG4KiYLRC1FpB6gqOIpJROIFPePXAhJn9Jq7yBAF%2F5jkVuEHCqBxm6Iu5GMMCZ9MAGOqUBDE7tVzRc2rNsBHP4GMiKOv1QRafWCs7enYoWYBxdryJgeAEmie5tO9qV7Z4%2FJr8k%2FhRJ%2FFFMDoeekf6%2FA5stwoYA2s94qdgymHOP8zLsEyytLn9JTE8wYXhZDeJsvn4i26z8wZ%2BaBpykXRWFj1P51rn8Z8w6m5ZxFuv%2BYPAUDnmkHOfsaVMjast6faU8NkC0ww83XI%2FMZ6bwurXe06X2Rv%2FCW4PD&X-Amz-Signature=ea94ca1ef4ed0738dc23b7a6e98384fbaa0e394ea911f58723fc7e719aa4c486&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LE6CEJT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2Fa1%2B2mwrCTosos%2BpE51bbR5pAT%2FQr%2FH3Qox%2BHq7RuAiEAj%2BG%2BaDu1iWKW3BlzoWcmAT9InNrFytKzjvHfY%2FowDxsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCCfpCI36bob6ww9kCrcA0zCGUJyuvdySyw6HkMfAyvDbbBW2jlVtX68J7nl0N7oijB9aBEVk6UEq%2B2%2FB0p3f04Fm4uh8aH9%2FmnejR49k0i681Muz2IBN%2FDZLKBw1A9g2H5sCWlbixmekWkktLVE2zMe6P80rct5YWRpIcbrdSg%2FNOovnKJsBp73704%2FEBOyF0GjShFIDovjzU25DFbg%2F%2FQeZUp%2F1Svh7PQEpwval8VfUkn8fGY9AmYkGVlD%2Brau4Je4fSMEt%2FZ0Xned38MhLA%2BeSvOTWL4BLQgvNZ3md0NcJh4kdKM%2BW7hww4UUAxGYVLSD97KCEKGZvYJAzw3EL9MNh9arlERqftPxdvXxDQRiUR9dR69LcM2%2FYe%2FUyO2QxxuJdSAgMagb5tLdrQumUgQsFWoSQuzbNJgcwL9Z1nnJRpk3hnjE2ozYr0qOZXKktt6I6DNxHZb7wOvooQMc4YY2Er%2FhAzX9Dv%2F70VpKNuIrWgiMPEIre20jPIFe%2FKniUwLuW23qUacYgzlCyoQrimxZAcf%2FuUJcJPhn7FKF8hc42G3msBgqDUVOSFpkbZwBoPYRW3CK%2BqtUuyfD4jjxHOGG4KiYLRC1FpB6gqOIpJROIFPePXAhJn9Jq7yBAF%2F5jkVuEHCqBxm6Iu5GMMCZ9MAGOqUBDE7tVzRc2rNsBHP4GMiKOv1QRafWCs7enYoWYBxdryJgeAEmie5tO9qV7Z4%2FJr8k%2FhRJ%2FFFMDoeekf6%2FA5stwoYA2s94qdgymHOP8zLsEyytLn9JTE8wYXhZDeJsvn4i26z8wZ%2BaBpykXRWFj1P51rn8Z8w6m5ZxFuv%2BYPAUDnmkHOfsaVMjast6faU8NkC0ww83XI%2FMZ6bwurXe06X2Rv%2FCW4PD&X-Amz-Signature=3e98b56396f7e12015a4f54bfb6dc80732da8b5df97b1de8403f5f1bff51cff4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LE6CEJT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2Fa1%2B2mwrCTosos%2BpE51bbR5pAT%2FQr%2FH3Qox%2BHq7RuAiEAj%2BG%2BaDu1iWKW3BlzoWcmAT9InNrFytKzjvHfY%2FowDxsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCCfpCI36bob6ww9kCrcA0zCGUJyuvdySyw6HkMfAyvDbbBW2jlVtX68J7nl0N7oijB9aBEVk6UEq%2B2%2FB0p3f04Fm4uh8aH9%2FmnejR49k0i681Muz2IBN%2FDZLKBw1A9g2H5sCWlbixmekWkktLVE2zMe6P80rct5YWRpIcbrdSg%2FNOovnKJsBp73704%2FEBOyF0GjShFIDovjzU25DFbg%2F%2FQeZUp%2F1Svh7PQEpwval8VfUkn8fGY9AmYkGVlD%2Brau4Je4fSMEt%2FZ0Xned38MhLA%2BeSvOTWL4BLQgvNZ3md0NcJh4kdKM%2BW7hww4UUAxGYVLSD97KCEKGZvYJAzw3EL9MNh9arlERqftPxdvXxDQRiUR9dR69LcM2%2FYe%2FUyO2QxxuJdSAgMagb5tLdrQumUgQsFWoSQuzbNJgcwL9Z1nnJRpk3hnjE2ozYr0qOZXKktt6I6DNxHZb7wOvooQMc4YY2Er%2FhAzX9Dv%2F70VpKNuIrWgiMPEIre20jPIFe%2FKniUwLuW23qUacYgzlCyoQrimxZAcf%2FuUJcJPhn7FKF8hc42G3msBgqDUVOSFpkbZwBoPYRW3CK%2BqtUuyfD4jjxHOGG4KiYLRC1FpB6gqOIpJROIFPePXAhJn9Jq7yBAF%2F5jkVuEHCqBxm6Iu5GMMCZ9MAGOqUBDE7tVzRc2rNsBHP4GMiKOv1QRafWCs7enYoWYBxdryJgeAEmie5tO9qV7Z4%2FJr8k%2FhRJ%2FFFMDoeekf6%2FA5stwoYA2s94qdgymHOP8zLsEyytLn9JTE8wYXhZDeJsvn4i26z8wZ%2BaBpykXRWFj1P51rn8Z8w6m5ZxFuv%2BYPAUDnmkHOfsaVMjast6faU8NkC0ww83XI%2FMZ6bwurXe06X2Rv%2FCW4PD&X-Amz-Signature=7d2fb7a63225ce9fd956abe1a6d5b188e190f9430005505d9d121571b4a5fd48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LE6CEJT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2Fa1%2B2mwrCTosos%2BpE51bbR5pAT%2FQr%2FH3Qox%2BHq7RuAiEAj%2BG%2BaDu1iWKW3BlzoWcmAT9InNrFytKzjvHfY%2FowDxsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCCfpCI36bob6ww9kCrcA0zCGUJyuvdySyw6HkMfAyvDbbBW2jlVtX68J7nl0N7oijB9aBEVk6UEq%2B2%2FB0p3f04Fm4uh8aH9%2FmnejR49k0i681Muz2IBN%2FDZLKBw1A9g2H5sCWlbixmekWkktLVE2zMe6P80rct5YWRpIcbrdSg%2FNOovnKJsBp73704%2FEBOyF0GjShFIDovjzU25DFbg%2F%2FQeZUp%2F1Svh7PQEpwval8VfUkn8fGY9AmYkGVlD%2Brau4Je4fSMEt%2FZ0Xned38MhLA%2BeSvOTWL4BLQgvNZ3md0NcJh4kdKM%2BW7hww4UUAxGYVLSD97KCEKGZvYJAzw3EL9MNh9arlERqftPxdvXxDQRiUR9dR69LcM2%2FYe%2FUyO2QxxuJdSAgMagb5tLdrQumUgQsFWoSQuzbNJgcwL9Z1nnJRpk3hnjE2ozYr0qOZXKktt6I6DNxHZb7wOvooQMc4YY2Er%2FhAzX9Dv%2F70VpKNuIrWgiMPEIre20jPIFe%2FKniUwLuW23qUacYgzlCyoQrimxZAcf%2FuUJcJPhn7FKF8hc42G3msBgqDUVOSFpkbZwBoPYRW3CK%2BqtUuyfD4jjxHOGG4KiYLRC1FpB6gqOIpJROIFPePXAhJn9Jq7yBAF%2F5jkVuEHCqBxm6Iu5GMMCZ9MAGOqUBDE7tVzRc2rNsBHP4GMiKOv1QRafWCs7enYoWYBxdryJgeAEmie5tO9qV7Z4%2FJr8k%2FhRJ%2FFFMDoeekf6%2FA5stwoYA2s94qdgymHOP8zLsEyytLn9JTE8wYXhZDeJsvn4i26z8wZ%2BaBpykXRWFj1P51rn8Z8w6m5ZxFuv%2BYPAUDnmkHOfsaVMjast6faU8NkC0ww83XI%2FMZ6bwurXe06X2Rv%2FCW4PD&X-Amz-Signature=5a8475ddbe824d43d1513e6f2a2fda107fec98b64a80fd895906e6afb22a320e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
