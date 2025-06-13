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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBIDEDLH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIGbE5MFXsbvJR7QAtDsS3OKylfeWKG%2FNhZPK5O9GmcMfAiAK1xOjdlpwRHu5aspWAbCj0I1NX%2BlC3sBLFVsQ18fVWCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMOLZ0ngc8xJ%2Be8mUUKtwDFrO7qjXHQwbYdu3j%2FCPDcE1Yet0WE%2B%2F2afspBeBoJuN83wW72p%2Ff5hKe2d2e7si4%2FdTfJ9PZEzuM9VAaPVX4DBpa09hRcGjyigM2ZcHy6BT4jKW6tDV1F%2FFfCXWhy4GpXzmzqPQ%2BvSBfT93o2gY1w5J4nAq7zj6%2Bp4F7IBdmVJ3OHIy5i6mFQVmZ%2FoC8DgaQ%2B436YvSWKjKg9xuwjajsv5KAlAkyKq8DYnvSIfCh4otSjTgM%2BwM136a%2FvxWPL945Ois06X%2FEo%2BGswnBxb3Uy4cmvJA2F0hVQzXT31kh4SQuRIbFVsHTFpMqWNVbR%2FAglYXOW%2BxQT0di94%2FwlQsHSg8BA9mxv4cYY4jsVYCVhV2lKP0d3iOl5NyhNU%2Bivg3BXglfrgK3Lvewzm%2FbvyxbDnlMtxi%2FaFRcYDqEy%2FWEzgkdQ1FXz%2FMISrs19g1haSv5YQdchyaLiWU0eZ8p%2BoAZ8%2FDBbpUJVcAQhYWRNl5wIEbBTRL6Vjp94OQZo%2BLiujBwuX9s6vPN3IGkLYt6t54KC5mrPBxKjPVheqa8Pl2x%2FV52bgerqosG%2Bzf1mGRIOklPvo3oeOKQlRGwqB0i6kXQcti1zRbwrd7VQcGDJg6Ids1tIwX32vtPYOJklltwwyPWvwgY6pgHjpaYthMpLGxcMSTF06pcDU4DrCvAwNnlpx9Y3%2B6qG6%2FAWiJWCHVdpwoUxsAOLb4iDmRlE5eWgeUMrt3J0fRT2a4ghbw%2FAtSRVBSyRTAoBjytTK0evtvnPwFg8cVAO98OGxBHIQ%2F7%2FmFNg7R08v53BGB5Qe0CqXuVJoH7JjqdHyxDJtdLdOFVNrurDvy%2FOroZ3WuoJRhQOhDD2N47q4wMTcQV2hyKZ&X-Amz-Signature=ad4a7603da0f5065494f43a75aa69cd828a91ef65abe66d5e3168c9ddc938466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBIDEDLH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIGbE5MFXsbvJR7QAtDsS3OKylfeWKG%2FNhZPK5O9GmcMfAiAK1xOjdlpwRHu5aspWAbCj0I1NX%2BlC3sBLFVsQ18fVWCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMOLZ0ngc8xJ%2Be8mUUKtwDFrO7qjXHQwbYdu3j%2FCPDcE1Yet0WE%2B%2F2afspBeBoJuN83wW72p%2Ff5hKe2d2e7si4%2FdTfJ9PZEzuM9VAaPVX4DBpa09hRcGjyigM2ZcHy6BT4jKW6tDV1F%2FFfCXWhy4GpXzmzqPQ%2BvSBfT93o2gY1w5J4nAq7zj6%2Bp4F7IBdmVJ3OHIy5i6mFQVmZ%2FoC8DgaQ%2B436YvSWKjKg9xuwjajsv5KAlAkyKq8DYnvSIfCh4otSjTgM%2BwM136a%2FvxWPL945Ois06X%2FEo%2BGswnBxb3Uy4cmvJA2F0hVQzXT31kh4SQuRIbFVsHTFpMqWNVbR%2FAglYXOW%2BxQT0di94%2FwlQsHSg8BA9mxv4cYY4jsVYCVhV2lKP0d3iOl5NyhNU%2Bivg3BXglfrgK3Lvewzm%2FbvyxbDnlMtxi%2FaFRcYDqEy%2FWEzgkdQ1FXz%2FMISrs19g1haSv5YQdchyaLiWU0eZ8p%2BoAZ8%2FDBbpUJVcAQhYWRNl5wIEbBTRL6Vjp94OQZo%2BLiujBwuX9s6vPN3IGkLYt6t54KC5mrPBxKjPVheqa8Pl2x%2FV52bgerqosG%2Bzf1mGRIOklPvo3oeOKQlRGwqB0i6kXQcti1zRbwrd7VQcGDJg6Ids1tIwX32vtPYOJklltwwyPWvwgY6pgHjpaYthMpLGxcMSTF06pcDU4DrCvAwNnlpx9Y3%2B6qG6%2FAWiJWCHVdpwoUxsAOLb4iDmRlE5eWgeUMrt3J0fRT2a4ghbw%2FAtSRVBSyRTAoBjytTK0evtvnPwFg8cVAO98OGxBHIQ%2F7%2FmFNg7R08v53BGB5Qe0CqXuVJoH7JjqdHyxDJtdLdOFVNrurDvy%2FOroZ3WuoJRhQOhDD2N47q4wMTcQV2hyKZ&X-Amz-Signature=8b055e074bc9bf3c9b6c9f0cc19fd6f451582451ba4b3f998a25676ed839b111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBIDEDLH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIGbE5MFXsbvJR7QAtDsS3OKylfeWKG%2FNhZPK5O9GmcMfAiAK1xOjdlpwRHu5aspWAbCj0I1NX%2BlC3sBLFVsQ18fVWCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMOLZ0ngc8xJ%2Be8mUUKtwDFrO7qjXHQwbYdu3j%2FCPDcE1Yet0WE%2B%2F2afspBeBoJuN83wW72p%2Ff5hKe2d2e7si4%2FdTfJ9PZEzuM9VAaPVX4DBpa09hRcGjyigM2ZcHy6BT4jKW6tDV1F%2FFfCXWhy4GpXzmzqPQ%2BvSBfT93o2gY1w5J4nAq7zj6%2Bp4F7IBdmVJ3OHIy5i6mFQVmZ%2FoC8DgaQ%2B436YvSWKjKg9xuwjajsv5KAlAkyKq8DYnvSIfCh4otSjTgM%2BwM136a%2FvxWPL945Ois06X%2FEo%2BGswnBxb3Uy4cmvJA2F0hVQzXT31kh4SQuRIbFVsHTFpMqWNVbR%2FAglYXOW%2BxQT0di94%2FwlQsHSg8BA9mxv4cYY4jsVYCVhV2lKP0d3iOl5NyhNU%2Bivg3BXglfrgK3Lvewzm%2FbvyxbDnlMtxi%2FaFRcYDqEy%2FWEzgkdQ1FXz%2FMISrs19g1haSv5YQdchyaLiWU0eZ8p%2BoAZ8%2FDBbpUJVcAQhYWRNl5wIEbBTRL6Vjp94OQZo%2BLiujBwuX9s6vPN3IGkLYt6t54KC5mrPBxKjPVheqa8Pl2x%2FV52bgerqosG%2Bzf1mGRIOklPvo3oeOKQlRGwqB0i6kXQcti1zRbwrd7VQcGDJg6Ids1tIwX32vtPYOJklltwwyPWvwgY6pgHjpaYthMpLGxcMSTF06pcDU4DrCvAwNnlpx9Y3%2B6qG6%2FAWiJWCHVdpwoUxsAOLb4iDmRlE5eWgeUMrt3J0fRT2a4ghbw%2FAtSRVBSyRTAoBjytTK0evtvnPwFg8cVAO98OGxBHIQ%2F7%2FmFNg7R08v53BGB5Qe0CqXuVJoH7JjqdHyxDJtdLdOFVNrurDvy%2FOroZ3WuoJRhQOhDD2N47q4wMTcQV2hyKZ&X-Amz-Signature=c8681c8d09fe7567261ca47086bf71df6c3f54164c82656eb6fbc8172e6c0e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBIDEDLH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIGbE5MFXsbvJR7QAtDsS3OKylfeWKG%2FNhZPK5O9GmcMfAiAK1xOjdlpwRHu5aspWAbCj0I1NX%2BlC3sBLFVsQ18fVWCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMOLZ0ngc8xJ%2Be8mUUKtwDFrO7qjXHQwbYdu3j%2FCPDcE1Yet0WE%2B%2F2afspBeBoJuN83wW72p%2Ff5hKe2d2e7si4%2FdTfJ9PZEzuM9VAaPVX4DBpa09hRcGjyigM2ZcHy6BT4jKW6tDV1F%2FFfCXWhy4GpXzmzqPQ%2BvSBfT93o2gY1w5J4nAq7zj6%2Bp4F7IBdmVJ3OHIy5i6mFQVmZ%2FoC8DgaQ%2B436YvSWKjKg9xuwjajsv5KAlAkyKq8DYnvSIfCh4otSjTgM%2BwM136a%2FvxWPL945Ois06X%2FEo%2BGswnBxb3Uy4cmvJA2F0hVQzXT31kh4SQuRIbFVsHTFpMqWNVbR%2FAglYXOW%2BxQT0di94%2FwlQsHSg8BA9mxv4cYY4jsVYCVhV2lKP0d3iOl5NyhNU%2Bivg3BXglfrgK3Lvewzm%2FbvyxbDnlMtxi%2FaFRcYDqEy%2FWEzgkdQ1FXz%2FMISrs19g1haSv5YQdchyaLiWU0eZ8p%2BoAZ8%2FDBbpUJVcAQhYWRNl5wIEbBTRL6Vjp94OQZo%2BLiujBwuX9s6vPN3IGkLYt6t54KC5mrPBxKjPVheqa8Pl2x%2FV52bgerqosG%2Bzf1mGRIOklPvo3oeOKQlRGwqB0i6kXQcti1zRbwrd7VQcGDJg6Ids1tIwX32vtPYOJklltwwyPWvwgY6pgHjpaYthMpLGxcMSTF06pcDU4DrCvAwNnlpx9Y3%2B6qG6%2FAWiJWCHVdpwoUxsAOLb4iDmRlE5eWgeUMrt3J0fRT2a4ghbw%2FAtSRVBSyRTAoBjytTK0evtvnPwFg8cVAO98OGxBHIQ%2F7%2FmFNg7R08v53BGB5Qe0CqXuVJoH7JjqdHyxDJtdLdOFVNrurDvy%2FOroZ3WuoJRhQOhDD2N47q4wMTcQV2hyKZ&X-Amz-Signature=645a7055bb0d8e30a684aeb7b2e2fac6fc513b959d05456497d2b834c2c06226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBIDEDLH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIGbE5MFXsbvJR7QAtDsS3OKylfeWKG%2FNhZPK5O9GmcMfAiAK1xOjdlpwRHu5aspWAbCj0I1NX%2BlC3sBLFVsQ18fVWCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMOLZ0ngc8xJ%2Be8mUUKtwDFrO7qjXHQwbYdu3j%2FCPDcE1Yet0WE%2B%2F2afspBeBoJuN83wW72p%2Ff5hKe2d2e7si4%2FdTfJ9PZEzuM9VAaPVX4DBpa09hRcGjyigM2ZcHy6BT4jKW6tDV1F%2FFfCXWhy4GpXzmzqPQ%2BvSBfT93o2gY1w5J4nAq7zj6%2Bp4F7IBdmVJ3OHIy5i6mFQVmZ%2FoC8DgaQ%2B436YvSWKjKg9xuwjajsv5KAlAkyKq8DYnvSIfCh4otSjTgM%2BwM136a%2FvxWPL945Ois06X%2FEo%2BGswnBxb3Uy4cmvJA2F0hVQzXT31kh4SQuRIbFVsHTFpMqWNVbR%2FAglYXOW%2BxQT0di94%2FwlQsHSg8BA9mxv4cYY4jsVYCVhV2lKP0d3iOl5NyhNU%2Bivg3BXglfrgK3Lvewzm%2FbvyxbDnlMtxi%2FaFRcYDqEy%2FWEzgkdQ1FXz%2FMISrs19g1haSv5YQdchyaLiWU0eZ8p%2BoAZ8%2FDBbpUJVcAQhYWRNl5wIEbBTRL6Vjp94OQZo%2BLiujBwuX9s6vPN3IGkLYt6t54KC5mrPBxKjPVheqa8Pl2x%2FV52bgerqosG%2Bzf1mGRIOklPvo3oeOKQlRGwqB0i6kXQcti1zRbwrd7VQcGDJg6Ids1tIwX32vtPYOJklltwwyPWvwgY6pgHjpaYthMpLGxcMSTF06pcDU4DrCvAwNnlpx9Y3%2B6qG6%2FAWiJWCHVdpwoUxsAOLb4iDmRlE5eWgeUMrt3J0fRT2a4ghbw%2FAtSRVBSyRTAoBjytTK0evtvnPwFg8cVAO98OGxBHIQ%2F7%2FmFNg7R08v53BGB5Qe0CqXuVJoH7JjqdHyxDJtdLdOFVNrurDvy%2FOroZ3WuoJRhQOhDD2N47q4wMTcQV2hyKZ&X-Amz-Signature=d60ff8d0cda9afaf61cb780854f2fe6ab976eadcf0648d75929b80eb9c1569b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
