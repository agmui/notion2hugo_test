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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWC2OTVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG517wX5N%2BVjrYNGqhAJpwrvEfmm%2FyRTMV185vW1m3oEAiBDxs1bKot%2Fn9rD2F7VRXzl2BCpnWQflzH2jDICTe06wSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BkbcerF2TcRwNUGKtwDgrVzf1wp3AQTK3Moc%2FoiJW9pSqeyDkBrNVfYJdx7LQe%2BERMQi1IPJ1XmxW5mYMABRXJWj%2FN7s4RNX4Oo7VFWxEVXdDv8vI6F4vxpRgwk%2BwIcMyvlnyOx1Mwd5DuLFoZl7bTseCibljnltdpX6ns9uRix3Trre4zDZqZW%2BSziNGKWbBwirKJE2EnHMZN9IEsSEIP3JT43aVZq3KRhPjh5lvwkG98q7Zpdas1reH6XrrM%2BvOLLCsFLh4bYL35hM6RvdBGb1HnMliUEIk1i7j1pkRV2cWZ4UZomX5PusofKMw3pHSAHTy2TJ1N49J%2Fj3AlbvGKg1h5Rx30l9v0O6DxsVpv2XVl2T0k6JpSuEph6ni54J6cf9Uy0FeO1MRwrSiOWzuTtVB13GW%2Fo6x08PVJ5%2FeH8nZqCg9VKq45m7xwT0aathJMTmTw2K%2F1vhqvKU1Lu6lunz1SRCs9nsXTUpHJryR9rk6J6aMkPl1670hD1wDpvZck5QneYIiF2A%2FjqfL%2Fst8JPThh1wvbNCoJ5bASKsC4Qa2tJbz23ahIa6OIebnfxl%2BC5VULuyw9ueJJ83%2FyGohTSgrgVqwmhIRdjz8kWERoIOlfvQdDUtycpxaaEye%2Ft1qbWLfOO0GskCO4wg9LgxAY6pgGCWMEDs7j9lbGGi2A8sQtIpQM3p4yy453V6ZDG9pY4GiRFRl8vmt4ns%2FVo3wukBbCUz%2BTOXzeS4AiDQtD7593ekWmA5%2BayfRpMaQSs6I5WG3CA068yFI4dCHW5bRCVhAyGGiimVCJ5uM%2BDEHtKF3UioAe%2FadR%2BkDS412Ro0SsZY%2Fe5gk3Wsbb%2FNCIcO%2FntGCLRzAmk3BuisoxKdxd3KyW%2FImmNuf5V&X-Amz-Signature=bd9049db0b2f376610ef028b7da4f3475d7ee430c0eb6ab465380887aa6bec56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWC2OTVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG517wX5N%2BVjrYNGqhAJpwrvEfmm%2FyRTMV185vW1m3oEAiBDxs1bKot%2Fn9rD2F7VRXzl2BCpnWQflzH2jDICTe06wSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BkbcerF2TcRwNUGKtwDgrVzf1wp3AQTK3Moc%2FoiJW9pSqeyDkBrNVfYJdx7LQe%2BERMQi1IPJ1XmxW5mYMABRXJWj%2FN7s4RNX4Oo7VFWxEVXdDv8vI6F4vxpRgwk%2BwIcMyvlnyOx1Mwd5DuLFoZl7bTseCibljnltdpX6ns9uRix3Trre4zDZqZW%2BSziNGKWbBwirKJE2EnHMZN9IEsSEIP3JT43aVZq3KRhPjh5lvwkG98q7Zpdas1reH6XrrM%2BvOLLCsFLh4bYL35hM6RvdBGb1HnMliUEIk1i7j1pkRV2cWZ4UZomX5PusofKMw3pHSAHTy2TJ1N49J%2Fj3AlbvGKg1h5Rx30l9v0O6DxsVpv2XVl2T0k6JpSuEph6ni54J6cf9Uy0FeO1MRwrSiOWzuTtVB13GW%2Fo6x08PVJ5%2FeH8nZqCg9VKq45m7xwT0aathJMTmTw2K%2F1vhqvKU1Lu6lunz1SRCs9nsXTUpHJryR9rk6J6aMkPl1670hD1wDpvZck5QneYIiF2A%2FjqfL%2Fst8JPThh1wvbNCoJ5bASKsC4Qa2tJbz23ahIa6OIebnfxl%2BC5VULuyw9ueJJ83%2FyGohTSgrgVqwmhIRdjz8kWERoIOlfvQdDUtycpxaaEye%2Ft1qbWLfOO0GskCO4wg9LgxAY6pgGCWMEDs7j9lbGGi2A8sQtIpQM3p4yy453V6ZDG9pY4GiRFRl8vmt4ns%2FVo3wukBbCUz%2BTOXzeS4AiDQtD7593ekWmA5%2BayfRpMaQSs6I5WG3CA068yFI4dCHW5bRCVhAyGGiimVCJ5uM%2BDEHtKF3UioAe%2FadR%2BkDS412Ro0SsZY%2Fe5gk3Wsbb%2FNCIcO%2FntGCLRzAmk3BuisoxKdxd3KyW%2FImmNuf5V&X-Amz-Signature=9ef2f35038e40ca603eb630de32649a524581dabdb65968b6c743471e17332ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWC2OTVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG517wX5N%2BVjrYNGqhAJpwrvEfmm%2FyRTMV185vW1m3oEAiBDxs1bKot%2Fn9rD2F7VRXzl2BCpnWQflzH2jDICTe06wSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BkbcerF2TcRwNUGKtwDgrVzf1wp3AQTK3Moc%2FoiJW9pSqeyDkBrNVfYJdx7LQe%2BERMQi1IPJ1XmxW5mYMABRXJWj%2FN7s4RNX4Oo7VFWxEVXdDv8vI6F4vxpRgwk%2BwIcMyvlnyOx1Mwd5DuLFoZl7bTseCibljnltdpX6ns9uRix3Trre4zDZqZW%2BSziNGKWbBwirKJE2EnHMZN9IEsSEIP3JT43aVZq3KRhPjh5lvwkG98q7Zpdas1reH6XrrM%2BvOLLCsFLh4bYL35hM6RvdBGb1HnMliUEIk1i7j1pkRV2cWZ4UZomX5PusofKMw3pHSAHTy2TJ1N49J%2Fj3AlbvGKg1h5Rx30l9v0O6DxsVpv2XVl2T0k6JpSuEph6ni54J6cf9Uy0FeO1MRwrSiOWzuTtVB13GW%2Fo6x08PVJ5%2FeH8nZqCg9VKq45m7xwT0aathJMTmTw2K%2F1vhqvKU1Lu6lunz1SRCs9nsXTUpHJryR9rk6J6aMkPl1670hD1wDpvZck5QneYIiF2A%2FjqfL%2Fst8JPThh1wvbNCoJ5bASKsC4Qa2tJbz23ahIa6OIebnfxl%2BC5VULuyw9ueJJ83%2FyGohTSgrgVqwmhIRdjz8kWERoIOlfvQdDUtycpxaaEye%2Ft1qbWLfOO0GskCO4wg9LgxAY6pgGCWMEDs7j9lbGGi2A8sQtIpQM3p4yy453V6ZDG9pY4GiRFRl8vmt4ns%2FVo3wukBbCUz%2BTOXzeS4AiDQtD7593ekWmA5%2BayfRpMaQSs6I5WG3CA068yFI4dCHW5bRCVhAyGGiimVCJ5uM%2BDEHtKF3UioAe%2FadR%2BkDS412Ro0SsZY%2Fe5gk3Wsbb%2FNCIcO%2FntGCLRzAmk3BuisoxKdxd3KyW%2FImmNuf5V&X-Amz-Signature=1e06c34b87a43e118245059c4d01ab76d3aeb917495577024a5e0a8daba2cabc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWC2OTVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG517wX5N%2BVjrYNGqhAJpwrvEfmm%2FyRTMV185vW1m3oEAiBDxs1bKot%2Fn9rD2F7VRXzl2BCpnWQflzH2jDICTe06wSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BkbcerF2TcRwNUGKtwDgrVzf1wp3AQTK3Moc%2FoiJW9pSqeyDkBrNVfYJdx7LQe%2BERMQi1IPJ1XmxW5mYMABRXJWj%2FN7s4RNX4Oo7VFWxEVXdDv8vI6F4vxpRgwk%2BwIcMyvlnyOx1Mwd5DuLFoZl7bTseCibljnltdpX6ns9uRix3Trre4zDZqZW%2BSziNGKWbBwirKJE2EnHMZN9IEsSEIP3JT43aVZq3KRhPjh5lvwkG98q7Zpdas1reH6XrrM%2BvOLLCsFLh4bYL35hM6RvdBGb1HnMliUEIk1i7j1pkRV2cWZ4UZomX5PusofKMw3pHSAHTy2TJ1N49J%2Fj3AlbvGKg1h5Rx30l9v0O6DxsVpv2XVl2T0k6JpSuEph6ni54J6cf9Uy0FeO1MRwrSiOWzuTtVB13GW%2Fo6x08PVJ5%2FeH8nZqCg9VKq45m7xwT0aathJMTmTw2K%2F1vhqvKU1Lu6lunz1SRCs9nsXTUpHJryR9rk6J6aMkPl1670hD1wDpvZck5QneYIiF2A%2FjqfL%2Fst8JPThh1wvbNCoJ5bASKsC4Qa2tJbz23ahIa6OIebnfxl%2BC5VULuyw9ueJJ83%2FyGohTSgrgVqwmhIRdjz8kWERoIOlfvQdDUtycpxaaEye%2Ft1qbWLfOO0GskCO4wg9LgxAY6pgGCWMEDs7j9lbGGi2A8sQtIpQM3p4yy453V6ZDG9pY4GiRFRl8vmt4ns%2FVo3wukBbCUz%2BTOXzeS4AiDQtD7593ekWmA5%2BayfRpMaQSs6I5WG3CA068yFI4dCHW5bRCVhAyGGiimVCJ5uM%2BDEHtKF3UioAe%2FadR%2BkDS412Ro0SsZY%2Fe5gk3Wsbb%2FNCIcO%2FntGCLRzAmk3BuisoxKdxd3KyW%2FImmNuf5V&X-Amz-Signature=6af3caa733d5065d770919a84a3ec0810ce0d96a7deac0248733b86cab0d54cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWC2OTVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG517wX5N%2BVjrYNGqhAJpwrvEfmm%2FyRTMV185vW1m3oEAiBDxs1bKot%2Fn9rD2F7VRXzl2BCpnWQflzH2jDICTe06wSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BkbcerF2TcRwNUGKtwDgrVzf1wp3AQTK3Moc%2FoiJW9pSqeyDkBrNVfYJdx7LQe%2BERMQi1IPJ1XmxW5mYMABRXJWj%2FN7s4RNX4Oo7VFWxEVXdDv8vI6F4vxpRgwk%2BwIcMyvlnyOx1Mwd5DuLFoZl7bTseCibljnltdpX6ns9uRix3Trre4zDZqZW%2BSziNGKWbBwirKJE2EnHMZN9IEsSEIP3JT43aVZq3KRhPjh5lvwkG98q7Zpdas1reH6XrrM%2BvOLLCsFLh4bYL35hM6RvdBGb1HnMliUEIk1i7j1pkRV2cWZ4UZomX5PusofKMw3pHSAHTy2TJ1N49J%2Fj3AlbvGKg1h5Rx30l9v0O6DxsVpv2XVl2T0k6JpSuEph6ni54J6cf9Uy0FeO1MRwrSiOWzuTtVB13GW%2Fo6x08PVJ5%2FeH8nZqCg9VKq45m7xwT0aathJMTmTw2K%2F1vhqvKU1Lu6lunz1SRCs9nsXTUpHJryR9rk6J6aMkPl1670hD1wDpvZck5QneYIiF2A%2FjqfL%2Fst8JPThh1wvbNCoJ5bASKsC4Qa2tJbz23ahIa6OIebnfxl%2BC5VULuyw9ueJJ83%2FyGohTSgrgVqwmhIRdjz8kWERoIOlfvQdDUtycpxaaEye%2Ft1qbWLfOO0GskCO4wg9LgxAY6pgGCWMEDs7j9lbGGi2A8sQtIpQM3p4yy453V6ZDG9pY4GiRFRl8vmt4ns%2FVo3wukBbCUz%2BTOXzeS4AiDQtD7593ekWmA5%2BayfRpMaQSs6I5WG3CA068yFI4dCHW5bRCVhAyGGiimVCJ5uM%2BDEHtKF3UioAe%2FadR%2BkDS412Ro0SsZY%2Fe5gk3Wsbb%2FNCIcO%2FntGCLRzAmk3BuisoxKdxd3KyW%2FImmNuf5V&X-Amz-Signature=6fb5b9e98b9827a17a8c5509b6fb8551c1ea8562a3507c4d0f289a7232e9b3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
