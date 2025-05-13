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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYEJJ2I%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCJPHbr6n1BltPTxVYQvBWNmDvGPgpokRRHBOvuGelVnwIhAPcEzaWPfbWQS%2FJcoG6YntuCKuiK%2Bqlr8zshuSW4uMizKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN2ffTb4L7tI9PPBEq3AMYgV6TleA%2BfoFsyaK%2Bq2voTjG3drRbnlom7ptYowVaf%2Fc4nyz5cIQZihfuPPjU6cI%2Fetx1YI%2FzVVYcoU43whex07U8jIJ1LVUos%2BK%2FkKz4P93sLlv%2BhjCM7jYJq1J%2BRSpgxnoNvsaOjFwhUCs9Ak8cF946YHX70h9pv3M9Mmyha2ViGZgn4Y93FaXJ4uk6WTEKOYiKzUlWL4tQZ2RX2VLDCs4ZIs1cKr0qqV99%2Bpun1Lqtzohxnwmx%2BIlS3sCkRCd5touKPF4GnTehum7pOL2n2niTvPAVi%2Bd%2FHms6bXsIIN4TsTsyG44zkvBnZIGBo%2BReDsFtQqse9HpJMd64KOgXLo%2FxtYw2roISBqjKf8Y%2FRM7UZDPNgQETWw53MajnQp2x6S83nHGw9y0R5Gcu1ij5es4GrrCUozGKQpBAuPcN3%2BQ%2BxVW4Qnltb9rOYKEUEII%2FPHJdc8vmqoeR%2FU04wOgm%2FV2u6yshXjMvZod8Ir8n0t%2BY6ZRZXpW5rnQD4cF6HOtA%2Bd38ixqdlWMnrb%2FmhYKMIk8BQldO3pbNMIsjUr86qotpwaEkAYnB8AH5jbXBGB59kd067hJx%2FN1ZipK8J9jz1gGbreyHDyjLpG%2FCgqGPC3lYTA5crpYPaSR15zDopIzBBjqkAXFNTSsZWfTccfswvhGUrffyply4UIOaPJt6BZVdXV5551S2fluAU%2BVIUvPuY3AsGGP6DHQyrTOj3ZWCWvW9wcGoNGmRI2eY8%2FcvMgIU3IPR34JDkZ5xYPHntzjigJgHQsPVBCgpqeApRFz169vJu4PSqVKu5Yyyztn3PhvR3yUO45MJ4jTH5f2WOu4EfSJXK7EjGaHCI0UR%2FywBvMsRy2y%2BBSqe&X-Amz-Signature=7214aac36598ff07cc5db783fc0d79306a59d47e603041543f65d09f5b5187fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYEJJ2I%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCJPHbr6n1BltPTxVYQvBWNmDvGPgpokRRHBOvuGelVnwIhAPcEzaWPfbWQS%2FJcoG6YntuCKuiK%2Bqlr8zshuSW4uMizKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN2ffTb4L7tI9PPBEq3AMYgV6TleA%2BfoFsyaK%2Bq2voTjG3drRbnlom7ptYowVaf%2Fc4nyz5cIQZihfuPPjU6cI%2Fetx1YI%2FzVVYcoU43whex07U8jIJ1LVUos%2BK%2FkKz4P93sLlv%2BhjCM7jYJq1J%2BRSpgxnoNvsaOjFwhUCs9Ak8cF946YHX70h9pv3M9Mmyha2ViGZgn4Y93FaXJ4uk6WTEKOYiKzUlWL4tQZ2RX2VLDCs4ZIs1cKr0qqV99%2Bpun1Lqtzohxnwmx%2BIlS3sCkRCd5touKPF4GnTehum7pOL2n2niTvPAVi%2Bd%2FHms6bXsIIN4TsTsyG44zkvBnZIGBo%2BReDsFtQqse9HpJMd64KOgXLo%2FxtYw2roISBqjKf8Y%2FRM7UZDPNgQETWw53MajnQp2x6S83nHGw9y0R5Gcu1ij5es4GrrCUozGKQpBAuPcN3%2BQ%2BxVW4Qnltb9rOYKEUEII%2FPHJdc8vmqoeR%2FU04wOgm%2FV2u6yshXjMvZod8Ir8n0t%2BY6ZRZXpW5rnQD4cF6HOtA%2Bd38ixqdlWMnrb%2FmhYKMIk8BQldO3pbNMIsjUr86qotpwaEkAYnB8AH5jbXBGB59kd067hJx%2FN1ZipK8J9jz1gGbreyHDyjLpG%2FCgqGPC3lYTA5crpYPaSR15zDopIzBBjqkAXFNTSsZWfTccfswvhGUrffyply4UIOaPJt6BZVdXV5551S2fluAU%2BVIUvPuY3AsGGP6DHQyrTOj3ZWCWvW9wcGoNGmRI2eY8%2FcvMgIU3IPR34JDkZ5xYPHntzjigJgHQsPVBCgpqeApRFz169vJu4PSqVKu5Yyyztn3PhvR3yUO45MJ4jTH5f2WOu4EfSJXK7EjGaHCI0UR%2FywBvMsRy2y%2BBSqe&X-Amz-Signature=98274b053ef12f0e0a29c4a27dc70f0ad4dae130c39c547bf97b940a06f3696d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYEJJ2I%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCJPHbr6n1BltPTxVYQvBWNmDvGPgpokRRHBOvuGelVnwIhAPcEzaWPfbWQS%2FJcoG6YntuCKuiK%2Bqlr8zshuSW4uMizKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN2ffTb4L7tI9PPBEq3AMYgV6TleA%2BfoFsyaK%2Bq2voTjG3drRbnlom7ptYowVaf%2Fc4nyz5cIQZihfuPPjU6cI%2Fetx1YI%2FzVVYcoU43whex07U8jIJ1LVUos%2BK%2FkKz4P93sLlv%2BhjCM7jYJq1J%2BRSpgxnoNvsaOjFwhUCs9Ak8cF946YHX70h9pv3M9Mmyha2ViGZgn4Y93FaXJ4uk6WTEKOYiKzUlWL4tQZ2RX2VLDCs4ZIs1cKr0qqV99%2Bpun1Lqtzohxnwmx%2BIlS3sCkRCd5touKPF4GnTehum7pOL2n2niTvPAVi%2Bd%2FHms6bXsIIN4TsTsyG44zkvBnZIGBo%2BReDsFtQqse9HpJMd64KOgXLo%2FxtYw2roISBqjKf8Y%2FRM7UZDPNgQETWw53MajnQp2x6S83nHGw9y0R5Gcu1ij5es4GrrCUozGKQpBAuPcN3%2BQ%2BxVW4Qnltb9rOYKEUEII%2FPHJdc8vmqoeR%2FU04wOgm%2FV2u6yshXjMvZod8Ir8n0t%2BY6ZRZXpW5rnQD4cF6HOtA%2Bd38ixqdlWMnrb%2FmhYKMIk8BQldO3pbNMIsjUr86qotpwaEkAYnB8AH5jbXBGB59kd067hJx%2FN1ZipK8J9jz1gGbreyHDyjLpG%2FCgqGPC3lYTA5crpYPaSR15zDopIzBBjqkAXFNTSsZWfTccfswvhGUrffyply4UIOaPJt6BZVdXV5551S2fluAU%2BVIUvPuY3AsGGP6DHQyrTOj3ZWCWvW9wcGoNGmRI2eY8%2FcvMgIU3IPR34JDkZ5xYPHntzjigJgHQsPVBCgpqeApRFz169vJu4PSqVKu5Yyyztn3PhvR3yUO45MJ4jTH5f2WOu4EfSJXK7EjGaHCI0UR%2FywBvMsRy2y%2BBSqe&X-Amz-Signature=a8f8fda02c1d88144f34340b5431064ff881992b139ec220e6198029c56bcc15&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYEJJ2I%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCJPHbr6n1BltPTxVYQvBWNmDvGPgpokRRHBOvuGelVnwIhAPcEzaWPfbWQS%2FJcoG6YntuCKuiK%2Bqlr8zshuSW4uMizKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN2ffTb4L7tI9PPBEq3AMYgV6TleA%2BfoFsyaK%2Bq2voTjG3drRbnlom7ptYowVaf%2Fc4nyz5cIQZihfuPPjU6cI%2Fetx1YI%2FzVVYcoU43whex07U8jIJ1LVUos%2BK%2FkKz4P93sLlv%2BhjCM7jYJq1J%2BRSpgxnoNvsaOjFwhUCs9Ak8cF946YHX70h9pv3M9Mmyha2ViGZgn4Y93FaXJ4uk6WTEKOYiKzUlWL4tQZ2RX2VLDCs4ZIs1cKr0qqV99%2Bpun1Lqtzohxnwmx%2BIlS3sCkRCd5touKPF4GnTehum7pOL2n2niTvPAVi%2Bd%2FHms6bXsIIN4TsTsyG44zkvBnZIGBo%2BReDsFtQqse9HpJMd64KOgXLo%2FxtYw2roISBqjKf8Y%2FRM7UZDPNgQETWw53MajnQp2x6S83nHGw9y0R5Gcu1ij5es4GrrCUozGKQpBAuPcN3%2BQ%2BxVW4Qnltb9rOYKEUEII%2FPHJdc8vmqoeR%2FU04wOgm%2FV2u6yshXjMvZod8Ir8n0t%2BY6ZRZXpW5rnQD4cF6HOtA%2Bd38ixqdlWMnrb%2FmhYKMIk8BQldO3pbNMIsjUr86qotpwaEkAYnB8AH5jbXBGB59kd067hJx%2FN1ZipK8J9jz1gGbreyHDyjLpG%2FCgqGPC3lYTA5crpYPaSR15zDopIzBBjqkAXFNTSsZWfTccfswvhGUrffyply4UIOaPJt6BZVdXV5551S2fluAU%2BVIUvPuY3AsGGP6DHQyrTOj3ZWCWvW9wcGoNGmRI2eY8%2FcvMgIU3IPR34JDkZ5xYPHntzjigJgHQsPVBCgpqeApRFz169vJu4PSqVKu5Yyyztn3PhvR3yUO45MJ4jTH5f2WOu4EfSJXK7EjGaHCI0UR%2FywBvMsRy2y%2BBSqe&X-Amz-Signature=068b0b6731d5cae24fc714b939e1d7b5ebe424fd4084f7b917689c0d6b8b07fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYEJJ2I%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCJPHbr6n1BltPTxVYQvBWNmDvGPgpokRRHBOvuGelVnwIhAPcEzaWPfbWQS%2FJcoG6YntuCKuiK%2Bqlr8zshuSW4uMizKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN2ffTb4L7tI9PPBEq3AMYgV6TleA%2BfoFsyaK%2Bq2voTjG3drRbnlom7ptYowVaf%2Fc4nyz5cIQZihfuPPjU6cI%2Fetx1YI%2FzVVYcoU43whex07U8jIJ1LVUos%2BK%2FkKz4P93sLlv%2BhjCM7jYJq1J%2BRSpgxnoNvsaOjFwhUCs9Ak8cF946YHX70h9pv3M9Mmyha2ViGZgn4Y93FaXJ4uk6WTEKOYiKzUlWL4tQZ2RX2VLDCs4ZIs1cKr0qqV99%2Bpun1Lqtzohxnwmx%2BIlS3sCkRCd5touKPF4GnTehum7pOL2n2niTvPAVi%2Bd%2FHms6bXsIIN4TsTsyG44zkvBnZIGBo%2BReDsFtQqse9HpJMd64KOgXLo%2FxtYw2roISBqjKf8Y%2FRM7UZDPNgQETWw53MajnQp2x6S83nHGw9y0R5Gcu1ij5es4GrrCUozGKQpBAuPcN3%2BQ%2BxVW4Qnltb9rOYKEUEII%2FPHJdc8vmqoeR%2FU04wOgm%2FV2u6yshXjMvZod8Ir8n0t%2BY6ZRZXpW5rnQD4cF6HOtA%2Bd38ixqdlWMnrb%2FmhYKMIk8BQldO3pbNMIsjUr86qotpwaEkAYnB8AH5jbXBGB59kd067hJx%2FN1ZipK8J9jz1gGbreyHDyjLpG%2FCgqGPC3lYTA5crpYPaSR15zDopIzBBjqkAXFNTSsZWfTccfswvhGUrffyply4UIOaPJt6BZVdXV5551S2fluAU%2BVIUvPuY3AsGGP6DHQyrTOj3ZWCWvW9wcGoNGmRI2eY8%2FcvMgIU3IPR34JDkZ5xYPHntzjigJgHQsPVBCgpqeApRFz169vJu4PSqVKu5Yyyztn3PhvR3yUO45MJ4jTH5f2WOu4EfSJXK7EjGaHCI0UR%2FywBvMsRy2y%2BBSqe&X-Amz-Signature=025786e3c46dee996f67a03743ab05bde7e7620a260cafdf3e39c9dbb4e9b00f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
