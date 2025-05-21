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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W47EVGL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDxrVHXcPMORKs1f3ecCGwVqf0SCBU0oC9MMGqVVVixSwIgLNgNdRVxr82SJwQs0XlBBM21kN2ft8%2FeYKvlD7y5q3oqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgQHtjEBz1pfBiNBSrcAyFxvtHE4w1VHi2M%2BKiaHbvzYWkChiwWFEGgviHH9rE0CPoZ3cLvXBDgJWLFSBpS3ZnXdfyYyzcwv6a1yD3svEJYfJt64p8l44CKeYmuxNiKJQxep4aHv9w1x0CFjthuB7OldIt8izrokthByYfQ1RaYD6cFY%2FdBh1gH0U1sLl%2FSy%2B1KGcR1ScZSVmUVgj%2BNh9us3%2BQB%2Bh0X9OKywbLbNPDhvjtRlm64KicZ4f%2BEZnOYaFVquUvPQtgkY0%2BFUjHLGJsZUwdBLyVLbWow%2FmlZylpLXlErXnEiIpH0OKDzyz6rqRpDNW%2FbMy9RlJDl4Ttc%2B%2B2tDNPxdWEcgld%2FzRkW5NtITxuidTIAdo17gLRADetOiqLhuBrZF%2F5Ab%2B6PuJHsyUxTTmNQcDUiSy%2FnLC1SBOFdomE0IWbWkrkXvBmpe5bJbO3P9H9lek8Ubm4JwWh067S3uJPu%2FAQ2RWZtVI8194aVzNfxm6WIDnSPTheJDmOoKwbJlcsYjJZPyIFF04%2FtKp7QUK6SOWcn6UTbYceESu9Wi%2FP5stIUI4yBVqOl3yzPvEg2ZSDHVFaLbrJ%2B4lLUssiR2ujIF%2FRB94b%2FzD60sGA56Kw8RbP7hzg0t%2BqN3HawcazFsyFEmfhhbsZPMOHyt8EGOqUBuKnq4k8u%2F0kqEwdaSfTT%2BvkiAFkXyh6yIj3tLQqXY31I%2FE1xIwUwMuT9Z3hrqFWzRD5Ay4HrnKskIh38lQbXc2pzz7NyuFJxL%2BZVjLK3Mo6aYhJdTU6xeGvqAFZVqj6KJpqMB9YGj%2F%2BDndnwBP4gZL9WCjeTNzEwDbkWu4rYZTMwECKg%2FBfS7e%2BoC7D%2FDSQ8WTA5oVX3KxdV4HEG2FB3CgsJkCYo&X-Amz-Signature=5f41d8436cdd74a56b3038f074db0c77393ea680025e5844cc6885c16ed15066&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W47EVGL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDxrVHXcPMORKs1f3ecCGwVqf0SCBU0oC9MMGqVVVixSwIgLNgNdRVxr82SJwQs0XlBBM21kN2ft8%2FeYKvlD7y5q3oqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgQHtjEBz1pfBiNBSrcAyFxvtHE4w1VHi2M%2BKiaHbvzYWkChiwWFEGgviHH9rE0CPoZ3cLvXBDgJWLFSBpS3ZnXdfyYyzcwv6a1yD3svEJYfJt64p8l44CKeYmuxNiKJQxep4aHv9w1x0CFjthuB7OldIt8izrokthByYfQ1RaYD6cFY%2FdBh1gH0U1sLl%2FSy%2B1KGcR1ScZSVmUVgj%2BNh9us3%2BQB%2Bh0X9OKywbLbNPDhvjtRlm64KicZ4f%2BEZnOYaFVquUvPQtgkY0%2BFUjHLGJsZUwdBLyVLbWow%2FmlZylpLXlErXnEiIpH0OKDzyz6rqRpDNW%2FbMy9RlJDl4Ttc%2B%2B2tDNPxdWEcgld%2FzRkW5NtITxuidTIAdo17gLRADetOiqLhuBrZF%2F5Ab%2B6PuJHsyUxTTmNQcDUiSy%2FnLC1SBOFdomE0IWbWkrkXvBmpe5bJbO3P9H9lek8Ubm4JwWh067S3uJPu%2FAQ2RWZtVI8194aVzNfxm6WIDnSPTheJDmOoKwbJlcsYjJZPyIFF04%2FtKp7QUK6SOWcn6UTbYceESu9Wi%2FP5stIUI4yBVqOl3yzPvEg2ZSDHVFaLbrJ%2B4lLUssiR2ujIF%2FRB94b%2FzD60sGA56Kw8RbP7hzg0t%2BqN3HawcazFsyFEmfhhbsZPMOHyt8EGOqUBuKnq4k8u%2F0kqEwdaSfTT%2BvkiAFkXyh6yIj3tLQqXY31I%2FE1xIwUwMuT9Z3hrqFWzRD5Ay4HrnKskIh38lQbXc2pzz7NyuFJxL%2BZVjLK3Mo6aYhJdTU6xeGvqAFZVqj6KJpqMB9YGj%2F%2BDndnwBP4gZL9WCjeTNzEwDbkWu4rYZTMwECKg%2FBfS7e%2BoC7D%2FDSQ8WTA5oVX3KxdV4HEG2FB3CgsJkCYo&X-Amz-Signature=5ef5084ad999a7ddfc0d2bb9ee236a2ce88e95608293341fca3d3b509bd63757&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W47EVGL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDxrVHXcPMORKs1f3ecCGwVqf0SCBU0oC9MMGqVVVixSwIgLNgNdRVxr82SJwQs0XlBBM21kN2ft8%2FeYKvlD7y5q3oqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgQHtjEBz1pfBiNBSrcAyFxvtHE4w1VHi2M%2BKiaHbvzYWkChiwWFEGgviHH9rE0CPoZ3cLvXBDgJWLFSBpS3ZnXdfyYyzcwv6a1yD3svEJYfJt64p8l44CKeYmuxNiKJQxep4aHv9w1x0CFjthuB7OldIt8izrokthByYfQ1RaYD6cFY%2FdBh1gH0U1sLl%2FSy%2B1KGcR1ScZSVmUVgj%2BNh9us3%2BQB%2Bh0X9OKywbLbNPDhvjtRlm64KicZ4f%2BEZnOYaFVquUvPQtgkY0%2BFUjHLGJsZUwdBLyVLbWow%2FmlZylpLXlErXnEiIpH0OKDzyz6rqRpDNW%2FbMy9RlJDl4Ttc%2B%2B2tDNPxdWEcgld%2FzRkW5NtITxuidTIAdo17gLRADetOiqLhuBrZF%2F5Ab%2B6PuJHsyUxTTmNQcDUiSy%2FnLC1SBOFdomE0IWbWkrkXvBmpe5bJbO3P9H9lek8Ubm4JwWh067S3uJPu%2FAQ2RWZtVI8194aVzNfxm6WIDnSPTheJDmOoKwbJlcsYjJZPyIFF04%2FtKp7QUK6SOWcn6UTbYceESu9Wi%2FP5stIUI4yBVqOl3yzPvEg2ZSDHVFaLbrJ%2B4lLUssiR2ujIF%2FRB94b%2FzD60sGA56Kw8RbP7hzg0t%2BqN3HawcazFsyFEmfhhbsZPMOHyt8EGOqUBuKnq4k8u%2F0kqEwdaSfTT%2BvkiAFkXyh6yIj3tLQqXY31I%2FE1xIwUwMuT9Z3hrqFWzRD5Ay4HrnKskIh38lQbXc2pzz7NyuFJxL%2BZVjLK3Mo6aYhJdTU6xeGvqAFZVqj6KJpqMB9YGj%2F%2BDndnwBP4gZL9WCjeTNzEwDbkWu4rYZTMwECKg%2FBfS7e%2BoC7D%2FDSQ8WTA5oVX3KxdV4HEG2FB3CgsJkCYo&X-Amz-Signature=0d22f5f6beae1ce828547cef9ac19567ad3b47ff72caef6ff7704aa149ec6f75&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W47EVGL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDxrVHXcPMORKs1f3ecCGwVqf0SCBU0oC9MMGqVVVixSwIgLNgNdRVxr82SJwQs0XlBBM21kN2ft8%2FeYKvlD7y5q3oqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgQHtjEBz1pfBiNBSrcAyFxvtHE4w1VHi2M%2BKiaHbvzYWkChiwWFEGgviHH9rE0CPoZ3cLvXBDgJWLFSBpS3ZnXdfyYyzcwv6a1yD3svEJYfJt64p8l44CKeYmuxNiKJQxep4aHv9w1x0CFjthuB7OldIt8izrokthByYfQ1RaYD6cFY%2FdBh1gH0U1sLl%2FSy%2B1KGcR1ScZSVmUVgj%2BNh9us3%2BQB%2Bh0X9OKywbLbNPDhvjtRlm64KicZ4f%2BEZnOYaFVquUvPQtgkY0%2BFUjHLGJsZUwdBLyVLbWow%2FmlZylpLXlErXnEiIpH0OKDzyz6rqRpDNW%2FbMy9RlJDl4Ttc%2B%2B2tDNPxdWEcgld%2FzRkW5NtITxuidTIAdo17gLRADetOiqLhuBrZF%2F5Ab%2B6PuJHsyUxTTmNQcDUiSy%2FnLC1SBOFdomE0IWbWkrkXvBmpe5bJbO3P9H9lek8Ubm4JwWh067S3uJPu%2FAQ2RWZtVI8194aVzNfxm6WIDnSPTheJDmOoKwbJlcsYjJZPyIFF04%2FtKp7QUK6SOWcn6UTbYceESu9Wi%2FP5stIUI4yBVqOl3yzPvEg2ZSDHVFaLbrJ%2B4lLUssiR2ujIF%2FRB94b%2FzD60sGA56Kw8RbP7hzg0t%2BqN3HawcazFsyFEmfhhbsZPMOHyt8EGOqUBuKnq4k8u%2F0kqEwdaSfTT%2BvkiAFkXyh6yIj3tLQqXY31I%2FE1xIwUwMuT9Z3hrqFWzRD5Ay4HrnKskIh38lQbXc2pzz7NyuFJxL%2BZVjLK3Mo6aYhJdTU6xeGvqAFZVqj6KJpqMB9YGj%2F%2BDndnwBP4gZL9WCjeTNzEwDbkWu4rYZTMwECKg%2FBfS7e%2BoC7D%2FDSQ8WTA5oVX3KxdV4HEG2FB3CgsJkCYo&X-Amz-Signature=df51cc86cb7a7238ce463d811f776a61c0259f810a8993d485247e17a9e1e28e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W47EVGL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDxrVHXcPMORKs1f3ecCGwVqf0SCBU0oC9MMGqVVVixSwIgLNgNdRVxr82SJwQs0XlBBM21kN2ft8%2FeYKvlD7y5q3oqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgQHtjEBz1pfBiNBSrcAyFxvtHE4w1VHi2M%2BKiaHbvzYWkChiwWFEGgviHH9rE0CPoZ3cLvXBDgJWLFSBpS3ZnXdfyYyzcwv6a1yD3svEJYfJt64p8l44CKeYmuxNiKJQxep4aHv9w1x0CFjthuB7OldIt8izrokthByYfQ1RaYD6cFY%2FdBh1gH0U1sLl%2FSy%2B1KGcR1ScZSVmUVgj%2BNh9us3%2BQB%2Bh0X9OKywbLbNPDhvjtRlm64KicZ4f%2BEZnOYaFVquUvPQtgkY0%2BFUjHLGJsZUwdBLyVLbWow%2FmlZylpLXlErXnEiIpH0OKDzyz6rqRpDNW%2FbMy9RlJDl4Ttc%2B%2B2tDNPxdWEcgld%2FzRkW5NtITxuidTIAdo17gLRADetOiqLhuBrZF%2F5Ab%2B6PuJHsyUxTTmNQcDUiSy%2FnLC1SBOFdomE0IWbWkrkXvBmpe5bJbO3P9H9lek8Ubm4JwWh067S3uJPu%2FAQ2RWZtVI8194aVzNfxm6WIDnSPTheJDmOoKwbJlcsYjJZPyIFF04%2FtKp7QUK6SOWcn6UTbYceESu9Wi%2FP5stIUI4yBVqOl3yzPvEg2ZSDHVFaLbrJ%2B4lLUssiR2ujIF%2FRB94b%2FzD60sGA56Kw8RbP7hzg0t%2BqN3HawcazFsyFEmfhhbsZPMOHyt8EGOqUBuKnq4k8u%2F0kqEwdaSfTT%2BvkiAFkXyh6yIj3tLQqXY31I%2FE1xIwUwMuT9Z3hrqFWzRD5Ay4HrnKskIh38lQbXc2pzz7NyuFJxL%2BZVjLK3Mo6aYhJdTU6xeGvqAFZVqj6KJpqMB9YGj%2F%2BDndnwBP4gZL9WCjeTNzEwDbkWu4rYZTMwECKg%2FBfS7e%2BoC7D%2FDSQ8WTA5oVX3KxdV4HEG2FB3CgsJkCYo&X-Amz-Signature=40f7710451792c6594872e167aa3f8fc879ea275da6e5de4d7aede6fa5e45234&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
