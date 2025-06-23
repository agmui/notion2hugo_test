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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72O35TQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHoc58WGUXQ8ss5R3cf0wJIBJoPnI%2B0eCa3Y%2FmZpeIkgAiEA2JSKdbedHK87WB2ec5qQCv70fs8IFwq3JL21NyYPnPUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD%2FHnZU7BSxycs72PircAxPoK7aX7Dpz4%2Bj9qn8Lm6TMfTP8LDDdxsXFN%2B7VV150t0pNhRsi46oFGtlzSlIGAuCzjtICYi0%2B45TRcn8hyEL0cu3ojLdszR1ynELXT45ynfSK9AdtiByYHcONcfIDsmOC%2FM9Jq8Q5%2BVsz7gTCbOQEsF3ZSGfKgh5Kuq9zjIsclC5Sq%2F4LWwLVPhUX4pxCYWuodMF9ndTqR4DKLeEcIeT77B2kiHopId%2FZyrwwlhYsXLLR%2BojA7J%2FOJCFJzSt1tCKdZ5qEww6UHAC3hPtiF1F5cVN7%2BBMRyiwbGp2OZqbRz2lFCYhWzIvZREs01ftRbmOXbGiCKL7DObi6MPXjsRdXH8UJpG6UTua6e7Ia8TAlyp04nHjMkn%2FQmoYzkvSXmhf6puWyPt8elVBzKAFbUYO5FCwKPXSnTyB1M9oXBPGP09nt4PkTPchNg3IkJIBl2H0YL4S9l9X5Cbn5ny%2FUvl1Nn93CRSUCEiZFtWc8%2BsLa81aSucbbOvxW2i1C%2Fa64b4W8TFuDAY3ETEZybtjAA%2FhOja9P%2FnCmKCHU6y0i%2B37fK4%2FNKVWL2dhNu0O%2FY9kXN%2BKB4csvFf%2F9OFwDQQOCLKJ5%2BeEy7zIevUCMsC6yPD5S3tcvuDk4cU2TQvqDMKDt5sIGOqUB4PUHu4TtcZz8c%2BRmiWfF3pGIaduoXahOl2cC5uPF5PAn8%2BhbxrhnMZFck6I9EznEpuxilN9%2BnqMUff2xxX%2FKuN88lxwApwcXe279JnUDlxsLnK1vruWbUI7Wul%2BdJQKozBx0cyubQ07fFzRXq4Klcn%2FZBot7U7N2KNY8og%2FlgXVKzH06KV0ODDW966iDChguZ9vDp2mZhW7oG%2BT7zXVXa%2BybyAi7&X-Amz-Signature=a08a0f3bcd7d4044d28e5c1482c95265afcbd4e40a6f6782ff86678ca5a205ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72O35TQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHoc58WGUXQ8ss5R3cf0wJIBJoPnI%2B0eCa3Y%2FmZpeIkgAiEA2JSKdbedHK87WB2ec5qQCv70fs8IFwq3JL21NyYPnPUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD%2FHnZU7BSxycs72PircAxPoK7aX7Dpz4%2Bj9qn8Lm6TMfTP8LDDdxsXFN%2B7VV150t0pNhRsi46oFGtlzSlIGAuCzjtICYi0%2B45TRcn8hyEL0cu3ojLdszR1ynELXT45ynfSK9AdtiByYHcONcfIDsmOC%2FM9Jq8Q5%2BVsz7gTCbOQEsF3ZSGfKgh5Kuq9zjIsclC5Sq%2F4LWwLVPhUX4pxCYWuodMF9ndTqR4DKLeEcIeT77B2kiHopId%2FZyrwwlhYsXLLR%2BojA7J%2FOJCFJzSt1tCKdZ5qEww6UHAC3hPtiF1F5cVN7%2BBMRyiwbGp2OZqbRz2lFCYhWzIvZREs01ftRbmOXbGiCKL7DObi6MPXjsRdXH8UJpG6UTua6e7Ia8TAlyp04nHjMkn%2FQmoYzkvSXmhf6puWyPt8elVBzKAFbUYO5FCwKPXSnTyB1M9oXBPGP09nt4PkTPchNg3IkJIBl2H0YL4S9l9X5Cbn5ny%2FUvl1Nn93CRSUCEiZFtWc8%2BsLa81aSucbbOvxW2i1C%2Fa64b4W8TFuDAY3ETEZybtjAA%2FhOja9P%2FnCmKCHU6y0i%2B37fK4%2FNKVWL2dhNu0O%2FY9kXN%2BKB4csvFf%2F9OFwDQQOCLKJ5%2BeEy7zIevUCMsC6yPD5S3tcvuDk4cU2TQvqDMKDt5sIGOqUB4PUHu4TtcZz8c%2BRmiWfF3pGIaduoXahOl2cC5uPF5PAn8%2BhbxrhnMZFck6I9EznEpuxilN9%2BnqMUff2xxX%2FKuN88lxwApwcXe279JnUDlxsLnK1vruWbUI7Wul%2BdJQKozBx0cyubQ07fFzRXq4Klcn%2FZBot7U7N2KNY8og%2FlgXVKzH06KV0ODDW966iDChguZ9vDp2mZhW7oG%2BT7zXVXa%2BybyAi7&X-Amz-Signature=f7a9532f2e24102c198e78b66c75ea2f8f07ea52f73fb3ef3d108d68fed36bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72O35TQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHoc58WGUXQ8ss5R3cf0wJIBJoPnI%2B0eCa3Y%2FmZpeIkgAiEA2JSKdbedHK87WB2ec5qQCv70fs8IFwq3JL21NyYPnPUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD%2FHnZU7BSxycs72PircAxPoK7aX7Dpz4%2Bj9qn8Lm6TMfTP8LDDdxsXFN%2B7VV150t0pNhRsi46oFGtlzSlIGAuCzjtICYi0%2B45TRcn8hyEL0cu3ojLdszR1ynELXT45ynfSK9AdtiByYHcONcfIDsmOC%2FM9Jq8Q5%2BVsz7gTCbOQEsF3ZSGfKgh5Kuq9zjIsclC5Sq%2F4LWwLVPhUX4pxCYWuodMF9ndTqR4DKLeEcIeT77B2kiHopId%2FZyrwwlhYsXLLR%2BojA7J%2FOJCFJzSt1tCKdZ5qEww6UHAC3hPtiF1F5cVN7%2BBMRyiwbGp2OZqbRz2lFCYhWzIvZREs01ftRbmOXbGiCKL7DObi6MPXjsRdXH8UJpG6UTua6e7Ia8TAlyp04nHjMkn%2FQmoYzkvSXmhf6puWyPt8elVBzKAFbUYO5FCwKPXSnTyB1M9oXBPGP09nt4PkTPchNg3IkJIBl2H0YL4S9l9X5Cbn5ny%2FUvl1Nn93CRSUCEiZFtWc8%2BsLa81aSucbbOvxW2i1C%2Fa64b4W8TFuDAY3ETEZybtjAA%2FhOja9P%2FnCmKCHU6y0i%2B37fK4%2FNKVWL2dhNu0O%2FY9kXN%2BKB4csvFf%2F9OFwDQQOCLKJ5%2BeEy7zIevUCMsC6yPD5S3tcvuDk4cU2TQvqDMKDt5sIGOqUB4PUHu4TtcZz8c%2BRmiWfF3pGIaduoXahOl2cC5uPF5PAn8%2BhbxrhnMZFck6I9EznEpuxilN9%2BnqMUff2xxX%2FKuN88lxwApwcXe279JnUDlxsLnK1vruWbUI7Wul%2BdJQKozBx0cyubQ07fFzRXq4Klcn%2FZBot7U7N2KNY8og%2FlgXVKzH06KV0ODDW966iDChguZ9vDp2mZhW7oG%2BT7zXVXa%2BybyAi7&X-Amz-Signature=e249bce794f0100df59a871e0839c2456202bef9f2fa477d06951d401cddd06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72O35TQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHoc58WGUXQ8ss5R3cf0wJIBJoPnI%2B0eCa3Y%2FmZpeIkgAiEA2JSKdbedHK87WB2ec5qQCv70fs8IFwq3JL21NyYPnPUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD%2FHnZU7BSxycs72PircAxPoK7aX7Dpz4%2Bj9qn8Lm6TMfTP8LDDdxsXFN%2B7VV150t0pNhRsi46oFGtlzSlIGAuCzjtICYi0%2B45TRcn8hyEL0cu3ojLdszR1ynELXT45ynfSK9AdtiByYHcONcfIDsmOC%2FM9Jq8Q5%2BVsz7gTCbOQEsF3ZSGfKgh5Kuq9zjIsclC5Sq%2F4LWwLVPhUX4pxCYWuodMF9ndTqR4DKLeEcIeT77B2kiHopId%2FZyrwwlhYsXLLR%2BojA7J%2FOJCFJzSt1tCKdZ5qEww6UHAC3hPtiF1F5cVN7%2BBMRyiwbGp2OZqbRz2lFCYhWzIvZREs01ftRbmOXbGiCKL7DObi6MPXjsRdXH8UJpG6UTua6e7Ia8TAlyp04nHjMkn%2FQmoYzkvSXmhf6puWyPt8elVBzKAFbUYO5FCwKPXSnTyB1M9oXBPGP09nt4PkTPchNg3IkJIBl2H0YL4S9l9X5Cbn5ny%2FUvl1Nn93CRSUCEiZFtWc8%2BsLa81aSucbbOvxW2i1C%2Fa64b4W8TFuDAY3ETEZybtjAA%2FhOja9P%2FnCmKCHU6y0i%2B37fK4%2FNKVWL2dhNu0O%2FY9kXN%2BKB4csvFf%2F9OFwDQQOCLKJ5%2BeEy7zIevUCMsC6yPD5S3tcvuDk4cU2TQvqDMKDt5sIGOqUB4PUHu4TtcZz8c%2BRmiWfF3pGIaduoXahOl2cC5uPF5PAn8%2BhbxrhnMZFck6I9EznEpuxilN9%2BnqMUff2xxX%2FKuN88lxwApwcXe279JnUDlxsLnK1vruWbUI7Wul%2BdJQKozBx0cyubQ07fFzRXq4Klcn%2FZBot7U7N2KNY8og%2FlgXVKzH06KV0ODDW966iDChguZ9vDp2mZhW7oG%2BT7zXVXa%2BybyAi7&X-Amz-Signature=532229be6bd42ee9e4e5a4fae5a65c598442d524e9669aaa793b9f579bbe6058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72O35TQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHoc58WGUXQ8ss5R3cf0wJIBJoPnI%2B0eCa3Y%2FmZpeIkgAiEA2JSKdbedHK87WB2ec5qQCv70fs8IFwq3JL21NyYPnPUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD%2FHnZU7BSxycs72PircAxPoK7aX7Dpz4%2Bj9qn8Lm6TMfTP8LDDdxsXFN%2B7VV150t0pNhRsi46oFGtlzSlIGAuCzjtICYi0%2B45TRcn8hyEL0cu3ojLdszR1ynELXT45ynfSK9AdtiByYHcONcfIDsmOC%2FM9Jq8Q5%2BVsz7gTCbOQEsF3ZSGfKgh5Kuq9zjIsclC5Sq%2F4LWwLVPhUX4pxCYWuodMF9ndTqR4DKLeEcIeT77B2kiHopId%2FZyrwwlhYsXLLR%2BojA7J%2FOJCFJzSt1tCKdZ5qEww6UHAC3hPtiF1F5cVN7%2BBMRyiwbGp2OZqbRz2lFCYhWzIvZREs01ftRbmOXbGiCKL7DObi6MPXjsRdXH8UJpG6UTua6e7Ia8TAlyp04nHjMkn%2FQmoYzkvSXmhf6puWyPt8elVBzKAFbUYO5FCwKPXSnTyB1M9oXBPGP09nt4PkTPchNg3IkJIBl2H0YL4S9l9X5Cbn5ny%2FUvl1Nn93CRSUCEiZFtWc8%2BsLa81aSucbbOvxW2i1C%2Fa64b4W8TFuDAY3ETEZybtjAA%2FhOja9P%2FnCmKCHU6y0i%2B37fK4%2FNKVWL2dhNu0O%2FY9kXN%2BKB4csvFf%2F9OFwDQQOCLKJ5%2BeEy7zIevUCMsC6yPD5S3tcvuDk4cU2TQvqDMKDt5sIGOqUB4PUHu4TtcZz8c%2BRmiWfF3pGIaduoXahOl2cC5uPF5PAn8%2BhbxrhnMZFck6I9EznEpuxilN9%2BnqMUff2xxX%2FKuN88lxwApwcXe279JnUDlxsLnK1vruWbUI7Wul%2BdJQKozBx0cyubQ07fFzRXq4Klcn%2FZBot7U7N2KNY8og%2FlgXVKzH06KV0ODDW966iDChguZ9vDp2mZhW7oG%2BT7zXVXa%2BybyAi7&X-Amz-Signature=361b317fd6800a4c79f5324cffebc9753edd7188c27ab05fc8ad1a3f150dba11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
