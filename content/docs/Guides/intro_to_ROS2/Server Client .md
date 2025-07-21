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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7SXQAP7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuu%2FWtDctURQ9jgQVfogStGP%2Fiti%2BzgLPkTz03SRdowIgSStkMc1vKgqgnmQIedB4iejHQzaQ%2BO6xg2HtUafyjoQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFCpJgNJa8mm3tB1SrcAz932sRtbIiLPChAgnsnxZd65SohSOCvRaaQjv%2F%2BDeDpnKmH9N6P1pQ%2B3WuD%2F0x0O1YhF7W9jwYG3suBxLzQ0FsTJzs8CRQiQmNyuTkkAQsJ8kbbMrIyVIfjpvDIs6bspZeP7UGTPjHme0zttBwIppF8l2FeIBe4YLvkGUtWyrYCcttOgH5MMn6uIV6n7publf9NI3JhlKML7OlGUbsEArw9KoBvy1OBMjzxEHOPNDYo%2FF3tLn%2B6Dvp9wCQcsdXUOM9BWdLHCyN7kNVk2QJQYZIXvy0QRqCrARk4Z8N22Mlvrw%2F3eyPnrEwGuGtd6ShCZBKQt5a8iCVZXGNd5tGJN%2B6vXZ%2BicELGCfkE8m41%2FKydYFbv6UYUKCjYIYol04dX82EwayAMoqmDk48FACvPR%2B9vTxUtyTZvaXKE3Ei1YLAayFL42ZoU7cUKrWxVV05Ep0lXnduCGEJ5M84gqj7jbKQ%2FPu2ZZQAAykhpbCgTsc6PMUY6oL6XdLWQPod151rVH6pfd7e0IOBzBFyXdLvx%2BoMrZ%2B8DDojgwPcxBaoIOdXm56cgeJ17B9NsL%2F6L%2Bj7EjYkvAs0XEkJ3gfzhxQlIwQu2Mv6Bu3y4OnrIBPct6c60BlurGUVwmQ4stDXXMPfW%2BsMGOqUBI%2F1TR3ZIYsgD%2BPHBByyzaQD7eoeshfyqyXbWTP6QIMSjAuKiooGa%2FnJRhGB2%2BOHIWO6Ta%2BX2ZkPODiknC%2FekcAfX%2BcNQn7Ib0p7Wsfc%2BT6gkuYfNEapLKbYc8%2FeI49FI86cu%2Fk8FLnLEVMpAclK3uEdQGpIEoy%2FrdB%2BD0DthDUQF2k147V3aJMyb7Fq11l1%2F10L2OJivlOFh%2BYlkbz7dW2Pn%2BYfW&X-Amz-Signature=7aceea6b7ab560094251b5ad21307fbf7e81870984d3aff1335dcfd91b98a4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7SXQAP7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuu%2FWtDctURQ9jgQVfogStGP%2Fiti%2BzgLPkTz03SRdowIgSStkMc1vKgqgnmQIedB4iejHQzaQ%2BO6xg2HtUafyjoQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFCpJgNJa8mm3tB1SrcAz932sRtbIiLPChAgnsnxZd65SohSOCvRaaQjv%2F%2BDeDpnKmH9N6P1pQ%2B3WuD%2F0x0O1YhF7W9jwYG3suBxLzQ0FsTJzs8CRQiQmNyuTkkAQsJ8kbbMrIyVIfjpvDIs6bspZeP7UGTPjHme0zttBwIppF8l2FeIBe4YLvkGUtWyrYCcttOgH5MMn6uIV6n7publf9NI3JhlKML7OlGUbsEArw9KoBvy1OBMjzxEHOPNDYo%2FF3tLn%2B6Dvp9wCQcsdXUOM9BWdLHCyN7kNVk2QJQYZIXvy0QRqCrARk4Z8N22Mlvrw%2F3eyPnrEwGuGtd6ShCZBKQt5a8iCVZXGNd5tGJN%2B6vXZ%2BicELGCfkE8m41%2FKydYFbv6UYUKCjYIYol04dX82EwayAMoqmDk48FACvPR%2B9vTxUtyTZvaXKE3Ei1YLAayFL42ZoU7cUKrWxVV05Ep0lXnduCGEJ5M84gqj7jbKQ%2FPu2ZZQAAykhpbCgTsc6PMUY6oL6XdLWQPod151rVH6pfd7e0IOBzBFyXdLvx%2BoMrZ%2B8DDojgwPcxBaoIOdXm56cgeJ17B9NsL%2F6L%2Bj7EjYkvAs0XEkJ3gfzhxQlIwQu2Mv6Bu3y4OnrIBPct6c60BlurGUVwmQ4stDXXMPfW%2BsMGOqUBI%2F1TR3ZIYsgD%2BPHBByyzaQD7eoeshfyqyXbWTP6QIMSjAuKiooGa%2FnJRhGB2%2BOHIWO6Ta%2BX2ZkPODiknC%2FekcAfX%2BcNQn7Ib0p7Wsfc%2BT6gkuYfNEapLKbYc8%2FeI49FI86cu%2Fk8FLnLEVMpAclK3uEdQGpIEoy%2FrdB%2BD0DthDUQF2k147V3aJMyb7Fq11l1%2F10L2OJivlOFh%2BYlkbz7dW2Pn%2BYfW&X-Amz-Signature=93b00b110410427084a0cf668e5bbdccf127ffbd8738af5ac38d45cf151c313f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7SXQAP7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuu%2FWtDctURQ9jgQVfogStGP%2Fiti%2BzgLPkTz03SRdowIgSStkMc1vKgqgnmQIedB4iejHQzaQ%2BO6xg2HtUafyjoQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFCpJgNJa8mm3tB1SrcAz932sRtbIiLPChAgnsnxZd65SohSOCvRaaQjv%2F%2BDeDpnKmH9N6P1pQ%2B3WuD%2F0x0O1YhF7W9jwYG3suBxLzQ0FsTJzs8CRQiQmNyuTkkAQsJ8kbbMrIyVIfjpvDIs6bspZeP7UGTPjHme0zttBwIppF8l2FeIBe4YLvkGUtWyrYCcttOgH5MMn6uIV6n7publf9NI3JhlKML7OlGUbsEArw9KoBvy1OBMjzxEHOPNDYo%2FF3tLn%2B6Dvp9wCQcsdXUOM9BWdLHCyN7kNVk2QJQYZIXvy0QRqCrARk4Z8N22Mlvrw%2F3eyPnrEwGuGtd6ShCZBKQt5a8iCVZXGNd5tGJN%2B6vXZ%2BicELGCfkE8m41%2FKydYFbv6UYUKCjYIYol04dX82EwayAMoqmDk48FACvPR%2B9vTxUtyTZvaXKE3Ei1YLAayFL42ZoU7cUKrWxVV05Ep0lXnduCGEJ5M84gqj7jbKQ%2FPu2ZZQAAykhpbCgTsc6PMUY6oL6XdLWQPod151rVH6pfd7e0IOBzBFyXdLvx%2BoMrZ%2B8DDojgwPcxBaoIOdXm56cgeJ17B9NsL%2F6L%2Bj7EjYkvAs0XEkJ3gfzhxQlIwQu2Mv6Bu3y4OnrIBPct6c60BlurGUVwmQ4stDXXMPfW%2BsMGOqUBI%2F1TR3ZIYsgD%2BPHBByyzaQD7eoeshfyqyXbWTP6QIMSjAuKiooGa%2FnJRhGB2%2BOHIWO6Ta%2BX2ZkPODiknC%2FekcAfX%2BcNQn7Ib0p7Wsfc%2BT6gkuYfNEapLKbYc8%2FeI49FI86cu%2Fk8FLnLEVMpAclK3uEdQGpIEoy%2FrdB%2BD0DthDUQF2k147V3aJMyb7Fq11l1%2F10L2OJivlOFh%2BYlkbz7dW2Pn%2BYfW&X-Amz-Signature=7c4501897b223392bd670eabbde00db0b501e80b10d0bdea1d68574e00321f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7SXQAP7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuu%2FWtDctURQ9jgQVfogStGP%2Fiti%2BzgLPkTz03SRdowIgSStkMc1vKgqgnmQIedB4iejHQzaQ%2BO6xg2HtUafyjoQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFCpJgNJa8mm3tB1SrcAz932sRtbIiLPChAgnsnxZd65SohSOCvRaaQjv%2F%2BDeDpnKmH9N6P1pQ%2B3WuD%2F0x0O1YhF7W9jwYG3suBxLzQ0FsTJzs8CRQiQmNyuTkkAQsJ8kbbMrIyVIfjpvDIs6bspZeP7UGTPjHme0zttBwIppF8l2FeIBe4YLvkGUtWyrYCcttOgH5MMn6uIV6n7publf9NI3JhlKML7OlGUbsEArw9KoBvy1OBMjzxEHOPNDYo%2FF3tLn%2B6Dvp9wCQcsdXUOM9BWdLHCyN7kNVk2QJQYZIXvy0QRqCrARk4Z8N22Mlvrw%2F3eyPnrEwGuGtd6ShCZBKQt5a8iCVZXGNd5tGJN%2B6vXZ%2BicELGCfkE8m41%2FKydYFbv6UYUKCjYIYol04dX82EwayAMoqmDk48FACvPR%2B9vTxUtyTZvaXKE3Ei1YLAayFL42ZoU7cUKrWxVV05Ep0lXnduCGEJ5M84gqj7jbKQ%2FPu2ZZQAAykhpbCgTsc6PMUY6oL6XdLWQPod151rVH6pfd7e0IOBzBFyXdLvx%2BoMrZ%2B8DDojgwPcxBaoIOdXm56cgeJ17B9NsL%2F6L%2Bj7EjYkvAs0XEkJ3gfzhxQlIwQu2Mv6Bu3y4OnrIBPct6c60BlurGUVwmQ4stDXXMPfW%2BsMGOqUBI%2F1TR3ZIYsgD%2BPHBByyzaQD7eoeshfyqyXbWTP6QIMSjAuKiooGa%2FnJRhGB2%2BOHIWO6Ta%2BX2ZkPODiknC%2FekcAfX%2BcNQn7Ib0p7Wsfc%2BT6gkuYfNEapLKbYc8%2FeI49FI86cu%2Fk8FLnLEVMpAclK3uEdQGpIEoy%2FrdB%2BD0DthDUQF2k147V3aJMyb7Fq11l1%2F10L2OJivlOFh%2BYlkbz7dW2Pn%2BYfW&X-Amz-Signature=ac32e8688d8ff715a94d6c3a605291565011ee505de24a934f766ef8e9503599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7SXQAP7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuu%2FWtDctURQ9jgQVfogStGP%2Fiti%2BzgLPkTz03SRdowIgSStkMc1vKgqgnmQIedB4iejHQzaQ%2BO6xg2HtUafyjoQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFCpJgNJa8mm3tB1SrcAz932sRtbIiLPChAgnsnxZd65SohSOCvRaaQjv%2F%2BDeDpnKmH9N6P1pQ%2B3WuD%2F0x0O1YhF7W9jwYG3suBxLzQ0FsTJzs8CRQiQmNyuTkkAQsJ8kbbMrIyVIfjpvDIs6bspZeP7UGTPjHme0zttBwIppF8l2FeIBe4YLvkGUtWyrYCcttOgH5MMn6uIV6n7publf9NI3JhlKML7OlGUbsEArw9KoBvy1OBMjzxEHOPNDYo%2FF3tLn%2B6Dvp9wCQcsdXUOM9BWdLHCyN7kNVk2QJQYZIXvy0QRqCrARk4Z8N22Mlvrw%2F3eyPnrEwGuGtd6ShCZBKQt5a8iCVZXGNd5tGJN%2B6vXZ%2BicELGCfkE8m41%2FKydYFbv6UYUKCjYIYol04dX82EwayAMoqmDk48FACvPR%2B9vTxUtyTZvaXKE3Ei1YLAayFL42ZoU7cUKrWxVV05Ep0lXnduCGEJ5M84gqj7jbKQ%2FPu2ZZQAAykhpbCgTsc6PMUY6oL6XdLWQPod151rVH6pfd7e0IOBzBFyXdLvx%2BoMrZ%2B8DDojgwPcxBaoIOdXm56cgeJ17B9NsL%2F6L%2Bj7EjYkvAs0XEkJ3gfzhxQlIwQu2Mv6Bu3y4OnrIBPct6c60BlurGUVwmQ4stDXXMPfW%2BsMGOqUBI%2F1TR3ZIYsgD%2BPHBByyzaQD7eoeshfyqyXbWTP6QIMSjAuKiooGa%2FnJRhGB2%2BOHIWO6Ta%2BX2ZkPODiknC%2FekcAfX%2BcNQn7Ib0p7Wsfc%2BT6gkuYfNEapLKbYc8%2FeI49FI86cu%2Fk8FLnLEVMpAclK3uEdQGpIEoy%2FrdB%2BD0DthDUQF2k147V3aJMyb7Fq11l1%2F10L2OJivlOFh%2BYlkbz7dW2Pn%2BYfW&X-Amz-Signature=23c7a4746c9f3dd5f62fd94d1697c8200ada89ec790d19b27004979cb0216ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
