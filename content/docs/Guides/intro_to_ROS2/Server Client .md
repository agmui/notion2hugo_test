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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43ES37R%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZeTKCAJuWdCt4EhdhpUp%2FUhSJzpTUQG94Gz%2FCjr3uJQIhAPZQub%2FcXGlSrryJxseuMGCmOVpcpB7JlZ%2FzL6EOKRcAKv8DCFoQABoMNjM3NDIzMTgzODA1IgzsPzqy%2BTunaEY98TYq3AMWEvlw05xXXTgozz4IY7ouka9odilR4eU465u%2BQTliX7Cc18jFBG7lSlkh8YAIIYhWta4LOS3E73MgjkkX9gpPc%2BEiGLITgMNibATk76CQhyPC51sxj6b1cHhhpLLEHRH06LmiDFJehIuTdmQu4xlXU%2BPoHchnTga2m7Y%2FmrdrAcpo0YCylCep3Ig2zxuntSKwaSNOtS5fugyqRuhzKIcNc590vqkxI2VTNNS5%2FwJ86Kc9zTjzHuwu7wJgbLjUVM3O2leaRXsGDSjHE6%2BoRU%2BIPacLz5G6yQridVRKE7tj1Sez0tVw4mBOHn%2BpyxDJb8OkaCNcp4k2X5FZCGITSEiPbIodppq9J2l9Es7SHYswdd%2BaEf6MRRdjr%2B1GV1Qb7vKL5Q2Q9zqxeOgo5zCCqAmZZ2b%2ByLpDy3yLp8TK7h95Z8jhXwsYXI8A8TzwwUKsf1gQZvm6iVfw9N6kec6kt6mUYDWqnJC5ZJBOkyewA4zc8Y1g44uVKSlIhYrXIv3bqqjkEOLgSXCkpEt34kcuH2up12Y%2B1sMfxM4KvvNOXFIrHSWO521hwVlamJhhItJktYO9WBQWRIktrEipTmw6sJEd%2BJmomzFImduw15BwQ7RbnTdtE1K%2BBytaUf8oHjDYgdbBBjqkAUkioqWKbEzAJcQjJMfpuvVzHLiAAnq6Z1h5FMProzxV9jL%2B2hoyurOLahEJhp79nrAGbwehlK3UKk2zTDzfUKJPeuDn373kbkxyMAhZOQYiVpqz86ydIGM0Pzfi9%2BcH6x%2Fn6EYE5ScnrgEeVFtj040Fs1VYzoKb6g7KvtGm9kq6qPQa6o%2FccBXVC9Ppwj1N%2Biz9b4ZWnia%2FXTfN5rVKyxfyqjAk&X-Amz-Signature=b6db1ce3f99e6f018f6c38eee3522d190de3ddca552b8281059fb2b599ef15bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43ES37R%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZeTKCAJuWdCt4EhdhpUp%2FUhSJzpTUQG94Gz%2FCjr3uJQIhAPZQub%2FcXGlSrryJxseuMGCmOVpcpB7JlZ%2FzL6EOKRcAKv8DCFoQABoMNjM3NDIzMTgzODA1IgzsPzqy%2BTunaEY98TYq3AMWEvlw05xXXTgozz4IY7ouka9odilR4eU465u%2BQTliX7Cc18jFBG7lSlkh8YAIIYhWta4LOS3E73MgjkkX9gpPc%2BEiGLITgMNibATk76CQhyPC51sxj6b1cHhhpLLEHRH06LmiDFJehIuTdmQu4xlXU%2BPoHchnTga2m7Y%2FmrdrAcpo0YCylCep3Ig2zxuntSKwaSNOtS5fugyqRuhzKIcNc590vqkxI2VTNNS5%2FwJ86Kc9zTjzHuwu7wJgbLjUVM3O2leaRXsGDSjHE6%2BoRU%2BIPacLz5G6yQridVRKE7tj1Sez0tVw4mBOHn%2BpyxDJb8OkaCNcp4k2X5FZCGITSEiPbIodppq9J2l9Es7SHYswdd%2BaEf6MRRdjr%2B1GV1Qb7vKL5Q2Q9zqxeOgo5zCCqAmZZ2b%2ByLpDy3yLp8TK7h95Z8jhXwsYXI8A8TzwwUKsf1gQZvm6iVfw9N6kec6kt6mUYDWqnJC5ZJBOkyewA4zc8Y1g44uVKSlIhYrXIv3bqqjkEOLgSXCkpEt34kcuH2up12Y%2B1sMfxM4KvvNOXFIrHSWO521hwVlamJhhItJktYO9WBQWRIktrEipTmw6sJEd%2BJmomzFImduw15BwQ7RbnTdtE1K%2BBytaUf8oHjDYgdbBBjqkAUkioqWKbEzAJcQjJMfpuvVzHLiAAnq6Z1h5FMProzxV9jL%2B2hoyurOLahEJhp79nrAGbwehlK3UKk2zTDzfUKJPeuDn373kbkxyMAhZOQYiVpqz86ydIGM0Pzfi9%2BcH6x%2Fn6EYE5ScnrgEeVFtj040Fs1VYzoKb6g7KvtGm9kq6qPQa6o%2FccBXVC9Ppwj1N%2Biz9b4ZWnia%2FXTfN5rVKyxfyqjAk&X-Amz-Signature=6bb747ae56634f854cf88bccabd4aa2746a27063091ba8dd4d85f4c6a55009a8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43ES37R%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZeTKCAJuWdCt4EhdhpUp%2FUhSJzpTUQG94Gz%2FCjr3uJQIhAPZQub%2FcXGlSrryJxseuMGCmOVpcpB7JlZ%2FzL6EOKRcAKv8DCFoQABoMNjM3NDIzMTgzODA1IgzsPzqy%2BTunaEY98TYq3AMWEvlw05xXXTgozz4IY7ouka9odilR4eU465u%2BQTliX7Cc18jFBG7lSlkh8YAIIYhWta4LOS3E73MgjkkX9gpPc%2BEiGLITgMNibATk76CQhyPC51sxj6b1cHhhpLLEHRH06LmiDFJehIuTdmQu4xlXU%2BPoHchnTga2m7Y%2FmrdrAcpo0YCylCep3Ig2zxuntSKwaSNOtS5fugyqRuhzKIcNc590vqkxI2VTNNS5%2FwJ86Kc9zTjzHuwu7wJgbLjUVM3O2leaRXsGDSjHE6%2BoRU%2BIPacLz5G6yQridVRKE7tj1Sez0tVw4mBOHn%2BpyxDJb8OkaCNcp4k2X5FZCGITSEiPbIodppq9J2l9Es7SHYswdd%2BaEf6MRRdjr%2B1GV1Qb7vKL5Q2Q9zqxeOgo5zCCqAmZZ2b%2ByLpDy3yLp8TK7h95Z8jhXwsYXI8A8TzwwUKsf1gQZvm6iVfw9N6kec6kt6mUYDWqnJC5ZJBOkyewA4zc8Y1g44uVKSlIhYrXIv3bqqjkEOLgSXCkpEt34kcuH2up12Y%2B1sMfxM4KvvNOXFIrHSWO521hwVlamJhhItJktYO9WBQWRIktrEipTmw6sJEd%2BJmomzFImduw15BwQ7RbnTdtE1K%2BBytaUf8oHjDYgdbBBjqkAUkioqWKbEzAJcQjJMfpuvVzHLiAAnq6Z1h5FMProzxV9jL%2B2hoyurOLahEJhp79nrAGbwehlK3UKk2zTDzfUKJPeuDn373kbkxyMAhZOQYiVpqz86ydIGM0Pzfi9%2BcH6x%2Fn6EYE5ScnrgEeVFtj040Fs1VYzoKb6g7KvtGm9kq6qPQa6o%2FccBXVC9Ppwj1N%2Biz9b4ZWnia%2FXTfN5rVKyxfyqjAk&X-Amz-Signature=0074ef28fd0c078a397c65747ca1d5262b38e94d59d49313f5449c2fcc4c2640&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43ES37R%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZeTKCAJuWdCt4EhdhpUp%2FUhSJzpTUQG94Gz%2FCjr3uJQIhAPZQub%2FcXGlSrryJxseuMGCmOVpcpB7JlZ%2FzL6EOKRcAKv8DCFoQABoMNjM3NDIzMTgzODA1IgzsPzqy%2BTunaEY98TYq3AMWEvlw05xXXTgozz4IY7ouka9odilR4eU465u%2BQTliX7Cc18jFBG7lSlkh8YAIIYhWta4LOS3E73MgjkkX9gpPc%2BEiGLITgMNibATk76CQhyPC51sxj6b1cHhhpLLEHRH06LmiDFJehIuTdmQu4xlXU%2BPoHchnTga2m7Y%2FmrdrAcpo0YCylCep3Ig2zxuntSKwaSNOtS5fugyqRuhzKIcNc590vqkxI2VTNNS5%2FwJ86Kc9zTjzHuwu7wJgbLjUVM3O2leaRXsGDSjHE6%2BoRU%2BIPacLz5G6yQridVRKE7tj1Sez0tVw4mBOHn%2BpyxDJb8OkaCNcp4k2X5FZCGITSEiPbIodppq9J2l9Es7SHYswdd%2BaEf6MRRdjr%2B1GV1Qb7vKL5Q2Q9zqxeOgo5zCCqAmZZ2b%2ByLpDy3yLp8TK7h95Z8jhXwsYXI8A8TzwwUKsf1gQZvm6iVfw9N6kec6kt6mUYDWqnJC5ZJBOkyewA4zc8Y1g44uVKSlIhYrXIv3bqqjkEOLgSXCkpEt34kcuH2up12Y%2B1sMfxM4KvvNOXFIrHSWO521hwVlamJhhItJktYO9WBQWRIktrEipTmw6sJEd%2BJmomzFImduw15BwQ7RbnTdtE1K%2BBytaUf8oHjDYgdbBBjqkAUkioqWKbEzAJcQjJMfpuvVzHLiAAnq6Z1h5FMProzxV9jL%2B2hoyurOLahEJhp79nrAGbwehlK3UKk2zTDzfUKJPeuDn373kbkxyMAhZOQYiVpqz86ydIGM0Pzfi9%2BcH6x%2Fn6EYE5ScnrgEeVFtj040Fs1VYzoKb6g7KvtGm9kq6qPQa6o%2FccBXVC9Ppwj1N%2Biz9b4ZWnia%2FXTfN5rVKyxfyqjAk&X-Amz-Signature=2a244850bf303cf59770548a7097ce70dd952f2dc4201d43bc45e557dfe55088&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43ES37R%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZeTKCAJuWdCt4EhdhpUp%2FUhSJzpTUQG94Gz%2FCjr3uJQIhAPZQub%2FcXGlSrryJxseuMGCmOVpcpB7JlZ%2FzL6EOKRcAKv8DCFoQABoMNjM3NDIzMTgzODA1IgzsPzqy%2BTunaEY98TYq3AMWEvlw05xXXTgozz4IY7ouka9odilR4eU465u%2BQTliX7Cc18jFBG7lSlkh8YAIIYhWta4LOS3E73MgjkkX9gpPc%2BEiGLITgMNibATk76CQhyPC51sxj6b1cHhhpLLEHRH06LmiDFJehIuTdmQu4xlXU%2BPoHchnTga2m7Y%2FmrdrAcpo0YCylCep3Ig2zxuntSKwaSNOtS5fugyqRuhzKIcNc590vqkxI2VTNNS5%2FwJ86Kc9zTjzHuwu7wJgbLjUVM3O2leaRXsGDSjHE6%2BoRU%2BIPacLz5G6yQridVRKE7tj1Sez0tVw4mBOHn%2BpyxDJb8OkaCNcp4k2X5FZCGITSEiPbIodppq9J2l9Es7SHYswdd%2BaEf6MRRdjr%2B1GV1Qb7vKL5Q2Q9zqxeOgo5zCCqAmZZ2b%2ByLpDy3yLp8TK7h95Z8jhXwsYXI8A8TzwwUKsf1gQZvm6iVfw9N6kec6kt6mUYDWqnJC5ZJBOkyewA4zc8Y1g44uVKSlIhYrXIv3bqqjkEOLgSXCkpEt34kcuH2up12Y%2B1sMfxM4KvvNOXFIrHSWO521hwVlamJhhItJktYO9WBQWRIktrEipTmw6sJEd%2BJmomzFImduw15BwQ7RbnTdtE1K%2BBytaUf8oHjDYgdbBBjqkAUkioqWKbEzAJcQjJMfpuvVzHLiAAnq6Z1h5FMProzxV9jL%2B2hoyurOLahEJhp79nrAGbwehlK3UKk2zTDzfUKJPeuDn373kbkxyMAhZOQYiVpqz86ydIGM0Pzfi9%2BcH6x%2Fn6EYE5ScnrgEeVFtj040Fs1VYzoKb6g7KvtGm9kq6qPQa6o%2FccBXVC9Ppwj1N%2Biz9b4ZWnia%2FXTfN5rVKyxfyqjAk&X-Amz-Signature=4d823ae1e906b4bb43093496253306df5a8e4c47c77a99b413acf2c79c3f0f12&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
