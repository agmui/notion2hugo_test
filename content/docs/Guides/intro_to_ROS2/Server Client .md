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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBQIIFZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMgjybZAM6zN4V%2Fkw5FpeiycQXMDH5Wb5kLV%2BDaDVW4AIhAMmo6l%2BM9e%2B71JyUtaL4TX1Mo%2Fz%2BGDWgsLUkMj98K78qKv8DCBkQABoMNjM3NDIzMTgzODA1IgyTbLEVk1jQPiyHgvIq3AN3URnuwZVTfbujHtMkhAyokvp%2BdNbardCRay26Hdh7ZKsY5FI1YqPXpRu47kOV97elkAC1O5Qm%2B1w98eromacypdABGrlckeakUKZ4s%2BmLnqt82G984h1JGOnAd832CckPpB2epaMfrDWoLOdgyQWIzIvt8z7EFip7rGKcyRXmy%2Br0xvqh6hxRvGtilBeF0YfYC2dPqW%2BmD1OFf83ETuj5r1gjuIWM9mqP8WjmBaYKAfjz7UUQW9H6B4PyHHwk6OSbyUyzf35GIG%2B8zaPZdogBWbVNDlSLyBdqGMQkfZTkj%2FsuCzZzdyCY%2BsnxeE5D9NmVc2ieUWWv2%2BXfomjj1OU0rp06qExrVsuhEVtJIU6qQ1kHumT6LjwBFObAU2gNwiwDHbk6AKrxNCAgFfabt9%2FCrGyR3dVyy%2FMfi1TraEgts75fNv6BxKFlF9Q%2B%2F5Km28euF0RPmZP7OMesHHB5QVsHM51Ebq8WrzO8HjwJfmaN3sx%2FIdl4eTyVzmyHP0YVqHsaeoKQPKmUqpcCaheyEBwi8uXQP7ZcTW3ylyBFyidJGtw%2Bg3PyywORf1G070CkrZsHsYkQBz2eQ7JQAWwqOEsmynvSBNyyGR0MC8H32RhfADFny8CK%2BQvJQp4M4zC3o4u%2FBjqkAXNKbICQc5CLNjmBbyu%2BngW5jq4ELcKE3RPSOlO5Z6UISb3pEYYdDJzBw04hg31QXCoectBnPTFnh0Su4q9EwteE6dn%2BRgAvUQWj1T11LKxNd8uwGAf2KutFzEjwwxtKl2qfPLoDv1iFd6u%2B%2BAmuLEpwe%2BojLf2GlmgPMAWSwK3%2F4WV2ZSjkF7U8E7mFeevxTsr5FwHdL%2Bg88DA%2FwlUILuOhRYth&X-Amz-Signature=c9d6441bbf5a26be1abebe1f20c6d55dd8bc83ce6359e1aeee66e04be5eb9fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBQIIFZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMgjybZAM6zN4V%2Fkw5FpeiycQXMDH5Wb5kLV%2BDaDVW4AIhAMmo6l%2BM9e%2B71JyUtaL4TX1Mo%2Fz%2BGDWgsLUkMj98K78qKv8DCBkQABoMNjM3NDIzMTgzODA1IgyTbLEVk1jQPiyHgvIq3AN3URnuwZVTfbujHtMkhAyokvp%2BdNbardCRay26Hdh7ZKsY5FI1YqPXpRu47kOV97elkAC1O5Qm%2B1w98eromacypdABGrlckeakUKZ4s%2BmLnqt82G984h1JGOnAd832CckPpB2epaMfrDWoLOdgyQWIzIvt8z7EFip7rGKcyRXmy%2Br0xvqh6hxRvGtilBeF0YfYC2dPqW%2BmD1OFf83ETuj5r1gjuIWM9mqP8WjmBaYKAfjz7UUQW9H6B4PyHHwk6OSbyUyzf35GIG%2B8zaPZdogBWbVNDlSLyBdqGMQkfZTkj%2FsuCzZzdyCY%2BsnxeE5D9NmVc2ieUWWv2%2BXfomjj1OU0rp06qExrVsuhEVtJIU6qQ1kHumT6LjwBFObAU2gNwiwDHbk6AKrxNCAgFfabt9%2FCrGyR3dVyy%2FMfi1TraEgts75fNv6BxKFlF9Q%2B%2F5Km28euF0RPmZP7OMesHHB5QVsHM51Ebq8WrzO8HjwJfmaN3sx%2FIdl4eTyVzmyHP0YVqHsaeoKQPKmUqpcCaheyEBwi8uXQP7ZcTW3ylyBFyidJGtw%2Bg3PyywORf1G070CkrZsHsYkQBz2eQ7JQAWwqOEsmynvSBNyyGR0MC8H32RhfADFny8CK%2BQvJQp4M4zC3o4u%2FBjqkAXNKbICQc5CLNjmBbyu%2BngW5jq4ELcKE3RPSOlO5Z6UISb3pEYYdDJzBw04hg31QXCoectBnPTFnh0Su4q9EwteE6dn%2BRgAvUQWj1T11LKxNd8uwGAf2KutFzEjwwxtKl2qfPLoDv1iFd6u%2B%2BAmuLEpwe%2BojLf2GlmgPMAWSwK3%2F4WV2ZSjkF7U8E7mFeevxTsr5FwHdL%2Bg88DA%2FwlUILuOhRYth&X-Amz-Signature=2e7f51516049fa71434f47473ec0b8f7d06680b1dee129a5884c4673fa9ffea8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBQIIFZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMgjybZAM6zN4V%2Fkw5FpeiycQXMDH5Wb5kLV%2BDaDVW4AIhAMmo6l%2BM9e%2B71JyUtaL4TX1Mo%2Fz%2BGDWgsLUkMj98K78qKv8DCBkQABoMNjM3NDIzMTgzODA1IgyTbLEVk1jQPiyHgvIq3AN3URnuwZVTfbujHtMkhAyokvp%2BdNbardCRay26Hdh7ZKsY5FI1YqPXpRu47kOV97elkAC1O5Qm%2B1w98eromacypdABGrlckeakUKZ4s%2BmLnqt82G984h1JGOnAd832CckPpB2epaMfrDWoLOdgyQWIzIvt8z7EFip7rGKcyRXmy%2Br0xvqh6hxRvGtilBeF0YfYC2dPqW%2BmD1OFf83ETuj5r1gjuIWM9mqP8WjmBaYKAfjz7UUQW9H6B4PyHHwk6OSbyUyzf35GIG%2B8zaPZdogBWbVNDlSLyBdqGMQkfZTkj%2FsuCzZzdyCY%2BsnxeE5D9NmVc2ieUWWv2%2BXfomjj1OU0rp06qExrVsuhEVtJIU6qQ1kHumT6LjwBFObAU2gNwiwDHbk6AKrxNCAgFfabt9%2FCrGyR3dVyy%2FMfi1TraEgts75fNv6BxKFlF9Q%2B%2F5Km28euF0RPmZP7OMesHHB5QVsHM51Ebq8WrzO8HjwJfmaN3sx%2FIdl4eTyVzmyHP0YVqHsaeoKQPKmUqpcCaheyEBwi8uXQP7ZcTW3ylyBFyidJGtw%2Bg3PyywORf1G070CkrZsHsYkQBz2eQ7JQAWwqOEsmynvSBNyyGR0MC8H32RhfADFny8CK%2BQvJQp4M4zC3o4u%2FBjqkAXNKbICQc5CLNjmBbyu%2BngW5jq4ELcKE3RPSOlO5Z6UISb3pEYYdDJzBw04hg31QXCoectBnPTFnh0Su4q9EwteE6dn%2BRgAvUQWj1T11LKxNd8uwGAf2KutFzEjwwxtKl2qfPLoDv1iFd6u%2B%2BAmuLEpwe%2BojLf2GlmgPMAWSwK3%2F4WV2ZSjkF7U8E7mFeevxTsr5FwHdL%2Bg88DA%2FwlUILuOhRYth&X-Amz-Signature=899b52e8829bbe04d155cfdbdbf46e78d532870e2698d7a6083e13310d5ea2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBQIIFZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMgjybZAM6zN4V%2Fkw5FpeiycQXMDH5Wb5kLV%2BDaDVW4AIhAMmo6l%2BM9e%2B71JyUtaL4TX1Mo%2Fz%2BGDWgsLUkMj98K78qKv8DCBkQABoMNjM3NDIzMTgzODA1IgyTbLEVk1jQPiyHgvIq3AN3URnuwZVTfbujHtMkhAyokvp%2BdNbardCRay26Hdh7ZKsY5FI1YqPXpRu47kOV97elkAC1O5Qm%2B1w98eromacypdABGrlckeakUKZ4s%2BmLnqt82G984h1JGOnAd832CckPpB2epaMfrDWoLOdgyQWIzIvt8z7EFip7rGKcyRXmy%2Br0xvqh6hxRvGtilBeF0YfYC2dPqW%2BmD1OFf83ETuj5r1gjuIWM9mqP8WjmBaYKAfjz7UUQW9H6B4PyHHwk6OSbyUyzf35GIG%2B8zaPZdogBWbVNDlSLyBdqGMQkfZTkj%2FsuCzZzdyCY%2BsnxeE5D9NmVc2ieUWWv2%2BXfomjj1OU0rp06qExrVsuhEVtJIU6qQ1kHumT6LjwBFObAU2gNwiwDHbk6AKrxNCAgFfabt9%2FCrGyR3dVyy%2FMfi1TraEgts75fNv6BxKFlF9Q%2B%2F5Km28euF0RPmZP7OMesHHB5QVsHM51Ebq8WrzO8HjwJfmaN3sx%2FIdl4eTyVzmyHP0YVqHsaeoKQPKmUqpcCaheyEBwi8uXQP7ZcTW3ylyBFyidJGtw%2Bg3PyywORf1G070CkrZsHsYkQBz2eQ7JQAWwqOEsmynvSBNyyGR0MC8H32RhfADFny8CK%2BQvJQp4M4zC3o4u%2FBjqkAXNKbICQc5CLNjmBbyu%2BngW5jq4ELcKE3RPSOlO5Z6UISb3pEYYdDJzBw04hg31QXCoectBnPTFnh0Su4q9EwteE6dn%2BRgAvUQWj1T11LKxNd8uwGAf2KutFzEjwwxtKl2qfPLoDv1iFd6u%2B%2BAmuLEpwe%2BojLf2GlmgPMAWSwK3%2F4WV2ZSjkF7U8E7mFeevxTsr5FwHdL%2Bg88DA%2FwlUILuOhRYth&X-Amz-Signature=d1373989d835e3f3946c179040847105a3f261d6ee7b6a4482af0885f52d2d80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBQIIFZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMgjybZAM6zN4V%2Fkw5FpeiycQXMDH5Wb5kLV%2BDaDVW4AIhAMmo6l%2BM9e%2B71JyUtaL4TX1Mo%2Fz%2BGDWgsLUkMj98K78qKv8DCBkQABoMNjM3NDIzMTgzODA1IgyTbLEVk1jQPiyHgvIq3AN3URnuwZVTfbujHtMkhAyokvp%2BdNbardCRay26Hdh7ZKsY5FI1YqPXpRu47kOV97elkAC1O5Qm%2B1w98eromacypdABGrlckeakUKZ4s%2BmLnqt82G984h1JGOnAd832CckPpB2epaMfrDWoLOdgyQWIzIvt8z7EFip7rGKcyRXmy%2Br0xvqh6hxRvGtilBeF0YfYC2dPqW%2BmD1OFf83ETuj5r1gjuIWM9mqP8WjmBaYKAfjz7UUQW9H6B4PyHHwk6OSbyUyzf35GIG%2B8zaPZdogBWbVNDlSLyBdqGMQkfZTkj%2FsuCzZzdyCY%2BsnxeE5D9NmVc2ieUWWv2%2BXfomjj1OU0rp06qExrVsuhEVtJIU6qQ1kHumT6LjwBFObAU2gNwiwDHbk6AKrxNCAgFfabt9%2FCrGyR3dVyy%2FMfi1TraEgts75fNv6BxKFlF9Q%2B%2F5Km28euF0RPmZP7OMesHHB5QVsHM51Ebq8WrzO8HjwJfmaN3sx%2FIdl4eTyVzmyHP0YVqHsaeoKQPKmUqpcCaheyEBwi8uXQP7ZcTW3ylyBFyidJGtw%2Bg3PyywORf1G070CkrZsHsYkQBz2eQ7JQAWwqOEsmynvSBNyyGR0MC8H32RhfADFny8CK%2BQvJQp4M4zC3o4u%2FBjqkAXNKbICQc5CLNjmBbyu%2BngW5jq4ELcKE3RPSOlO5Z6UISb3pEYYdDJzBw04hg31QXCoectBnPTFnh0Su4q9EwteE6dn%2BRgAvUQWj1T11LKxNd8uwGAf2KutFzEjwwxtKl2qfPLoDv1iFd6u%2B%2BAmuLEpwe%2BojLf2GlmgPMAWSwK3%2F4WV2ZSjkF7U8E7mFeevxTsr5FwHdL%2Bg88DA%2FwlUILuOhRYth&X-Amz-Signature=70f51e8178912c32d83f69170d5a112bd3705c3f0de462272fc81c4edf127350&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
