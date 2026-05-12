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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUZ2OVIQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDaPVyxsL3VFDmSdoT%2B4qsBtc7jllOqO3BaqPgUEIJZFAIhAIwLNZBmKUnOZa43%2FaF1rVPpAY39tjMFj0I3Ujf00j2qKv8DCCQQABoMNjM3NDIzMTgzODA1IgwjlVR%2BW9LfDPDhXzUq3APQd6PMOVU59il84q0aM8G03HGyy2E%2FHhTZRrAZjvFCR7SIL9rvgvwqFNpU5Lyb3TJn8M8tIbCOwbvPnjVFJWVI97r6fLcURzbjqYxvHYfqLn64Dai9RqZrQMpnAVNLSk%2Fxj6ozI7woLxMNQyEjhvbNtE5mgaPMEdDTFDBO1RNuXdO%2BKoO9RISGpWyk%2BkbO2ZEhLLLBorm5ZqSwP6LyKALvaw5jJ3rZhGBuVCDQS6gdHqDI2oktt%2Fi42aAaISTTnI0gZRcJvedJI1aa8U6%2Bv3HhINpVA1FB82fLMuoQgr0Ga3T6WCr93H5anTFJpTV%2BixM3TrFe3FhHd6GvKC019Eg%2B6iQw79Vq123oFc%2F4Rtv2%2BcDF08ZJTvUWd84p%2BGhMBU%2F9VOkgOfrZ%2BpOYUjlUAANfasOkAWWdZaBm0J5OppvJeKfi7WcIs2FbTyirM6Dc4ar3OdPi3pIHTMN%2BW4ZXdNH52uvVOscebTxsQ2VRRWhZgZVytm%2BArRn3q1cgEIo8i9VxDzAgoGmCxf07aPZ6RtL8Xwq%2FT2VLnPQ4RvZGEOUj1aHUyAPIDGlrXmWO0nZWAeFfreVETNz%2BX3iQKvlyYY1Y4jMYHPJhI2SYxzpBvtntuuFA7m2%2BaP89fHFzFTCOpYrQBjqkAaU4%2Bvs1xhXRmoRikPdXKRgg%2BfpXbl%2F%2BAmiPPWsUjxotE8QIEl3BlgRk%2BD1ty6vT6lfFi%2BwAXRFZnZiufPsxy7VwF52cMVX4Y4w3VeGT2%2Bpp7DmfFW6XGhaysP2rY5hVOm2NuTtqmmWzmWhRJMKQO6cJjpk6FQWB5D%2FFH8rMmOnoYbyhDaJ5uF7M%2FRFt6%2FcSZ1%2Ba3Vt70xKk2M8CP0cRvR%2BJ75BU&X-Amz-Signature=2fa2a8e5323705463d1f1955411727e476158aa76ff0312e0b941cfacbc6c10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUZ2OVIQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDaPVyxsL3VFDmSdoT%2B4qsBtc7jllOqO3BaqPgUEIJZFAIhAIwLNZBmKUnOZa43%2FaF1rVPpAY39tjMFj0I3Ujf00j2qKv8DCCQQABoMNjM3NDIzMTgzODA1IgwjlVR%2BW9LfDPDhXzUq3APQd6PMOVU59il84q0aM8G03HGyy2E%2FHhTZRrAZjvFCR7SIL9rvgvwqFNpU5Lyb3TJn8M8tIbCOwbvPnjVFJWVI97r6fLcURzbjqYxvHYfqLn64Dai9RqZrQMpnAVNLSk%2Fxj6ozI7woLxMNQyEjhvbNtE5mgaPMEdDTFDBO1RNuXdO%2BKoO9RISGpWyk%2BkbO2ZEhLLLBorm5ZqSwP6LyKALvaw5jJ3rZhGBuVCDQS6gdHqDI2oktt%2Fi42aAaISTTnI0gZRcJvedJI1aa8U6%2Bv3HhINpVA1FB82fLMuoQgr0Ga3T6WCr93H5anTFJpTV%2BixM3TrFe3FhHd6GvKC019Eg%2B6iQw79Vq123oFc%2F4Rtv2%2BcDF08ZJTvUWd84p%2BGhMBU%2F9VOkgOfrZ%2BpOYUjlUAANfasOkAWWdZaBm0J5OppvJeKfi7WcIs2FbTyirM6Dc4ar3OdPi3pIHTMN%2BW4ZXdNH52uvVOscebTxsQ2VRRWhZgZVytm%2BArRn3q1cgEIo8i9VxDzAgoGmCxf07aPZ6RtL8Xwq%2FT2VLnPQ4RvZGEOUj1aHUyAPIDGlrXmWO0nZWAeFfreVETNz%2BX3iQKvlyYY1Y4jMYHPJhI2SYxzpBvtntuuFA7m2%2BaP89fHFzFTCOpYrQBjqkAaU4%2Bvs1xhXRmoRikPdXKRgg%2BfpXbl%2F%2BAmiPPWsUjxotE8QIEl3BlgRk%2BD1ty6vT6lfFi%2BwAXRFZnZiufPsxy7VwF52cMVX4Y4w3VeGT2%2Bpp7DmfFW6XGhaysP2rY5hVOm2NuTtqmmWzmWhRJMKQO6cJjpk6FQWB5D%2FFH8rMmOnoYbyhDaJ5uF7M%2FRFt6%2FcSZ1%2Ba3Vt70xKk2M8CP0cRvR%2BJ75BU&X-Amz-Signature=9f2379b40c735f3aa551cd05c4802586fbbc785ef6bd3278033409a80799b5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUZ2OVIQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDaPVyxsL3VFDmSdoT%2B4qsBtc7jllOqO3BaqPgUEIJZFAIhAIwLNZBmKUnOZa43%2FaF1rVPpAY39tjMFj0I3Ujf00j2qKv8DCCQQABoMNjM3NDIzMTgzODA1IgwjlVR%2BW9LfDPDhXzUq3APQd6PMOVU59il84q0aM8G03HGyy2E%2FHhTZRrAZjvFCR7SIL9rvgvwqFNpU5Lyb3TJn8M8tIbCOwbvPnjVFJWVI97r6fLcURzbjqYxvHYfqLn64Dai9RqZrQMpnAVNLSk%2Fxj6ozI7woLxMNQyEjhvbNtE5mgaPMEdDTFDBO1RNuXdO%2BKoO9RISGpWyk%2BkbO2ZEhLLLBorm5ZqSwP6LyKALvaw5jJ3rZhGBuVCDQS6gdHqDI2oktt%2Fi42aAaISTTnI0gZRcJvedJI1aa8U6%2Bv3HhINpVA1FB82fLMuoQgr0Ga3T6WCr93H5anTFJpTV%2BixM3TrFe3FhHd6GvKC019Eg%2B6iQw79Vq123oFc%2F4Rtv2%2BcDF08ZJTvUWd84p%2BGhMBU%2F9VOkgOfrZ%2BpOYUjlUAANfasOkAWWdZaBm0J5OppvJeKfi7WcIs2FbTyirM6Dc4ar3OdPi3pIHTMN%2BW4ZXdNH52uvVOscebTxsQ2VRRWhZgZVytm%2BArRn3q1cgEIo8i9VxDzAgoGmCxf07aPZ6RtL8Xwq%2FT2VLnPQ4RvZGEOUj1aHUyAPIDGlrXmWO0nZWAeFfreVETNz%2BX3iQKvlyYY1Y4jMYHPJhI2SYxzpBvtntuuFA7m2%2BaP89fHFzFTCOpYrQBjqkAaU4%2Bvs1xhXRmoRikPdXKRgg%2BfpXbl%2F%2BAmiPPWsUjxotE8QIEl3BlgRk%2BD1ty6vT6lfFi%2BwAXRFZnZiufPsxy7VwF52cMVX4Y4w3VeGT2%2Bpp7DmfFW6XGhaysP2rY5hVOm2NuTtqmmWzmWhRJMKQO6cJjpk6FQWB5D%2FFH8rMmOnoYbyhDaJ5uF7M%2FRFt6%2FcSZ1%2Ba3Vt70xKk2M8CP0cRvR%2BJ75BU&X-Amz-Signature=03212392423109174ed462ad7de0b3d726a3462897ff594542cdcc843e329094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUZ2OVIQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDaPVyxsL3VFDmSdoT%2B4qsBtc7jllOqO3BaqPgUEIJZFAIhAIwLNZBmKUnOZa43%2FaF1rVPpAY39tjMFj0I3Ujf00j2qKv8DCCQQABoMNjM3NDIzMTgzODA1IgwjlVR%2BW9LfDPDhXzUq3APQd6PMOVU59il84q0aM8G03HGyy2E%2FHhTZRrAZjvFCR7SIL9rvgvwqFNpU5Lyb3TJn8M8tIbCOwbvPnjVFJWVI97r6fLcURzbjqYxvHYfqLn64Dai9RqZrQMpnAVNLSk%2Fxj6ozI7woLxMNQyEjhvbNtE5mgaPMEdDTFDBO1RNuXdO%2BKoO9RISGpWyk%2BkbO2ZEhLLLBorm5ZqSwP6LyKALvaw5jJ3rZhGBuVCDQS6gdHqDI2oktt%2Fi42aAaISTTnI0gZRcJvedJI1aa8U6%2Bv3HhINpVA1FB82fLMuoQgr0Ga3T6WCr93H5anTFJpTV%2BixM3TrFe3FhHd6GvKC019Eg%2B6iQw79Vq123oFc%2F4Rtv2%2BcDF08ZJTvUWd84p%2BGhMBU%2F9VOkgOfrZ%2BpOYUjlUAANfasOkAWWdZaBm0J5OppvJeKfi7WcIs2FbTyirM6Dc4ar3OdPi3pIHTMN%2BW4ZXdNH52uvVOscebTxsQ2VRRWhZgZVytm%2BArRn3q1cgEIo8i9VxDzAgoGmCxf07aPZ6RtL8Xwq%2FT2VLnPQ4RvZGEOUj1aHUyAPIDGlrXmWO0nZWAeFfreVETNz%2BX3iQKvlyYY1Y4jMYHPJhI2SYxzpBvtntuuFA7m2%2BaP89fHFzFTCOpYrQBjqkAaU4%2Bvs1xhXRmoRikPdXKRgg%2BfpXbl%2F%2BAmiPPWsUjxotE8QIEl3BlgRk%2BD1ty6vT6lfFi%2BwAXRFZnZiufPsxy7VwF52cMVX4Y4w3VeGT2%2Bpp7DmfFW6XGhaysP2rY5hVOm2NuTtqmmWzmWhRJMKQO6cJjpk6FQWB5D%2FFH8rMmOnoYbyhDaJ5uF7M%2FRFt6%2FcSZ1%2Ba3Vt70xKk2M8CP0cRvR%2BJ75BU&X-Amz-Signature=443e1e77072be6738b1cf93e286c57f5de396edff7e55b3b6eb793edce98ab1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUZ2OVIQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDaPVyxsL3VFDmSdoT%2B4qsBtc7jllOqO3BaqPgUEIJZFAIhAIwLNZBmKUnOZa43%2FaF1rVPpAY39tjMFj0I3Ujf00j2qKv8DCCQQABoMNjM3NDIzMTgzODA1IgwjlVR%2BW9LfDPDhXzUq3APQd6PMOVU59il84q0aM8G03HGyy2E%2FHhTZRrAZjvFCR7SIL9rvgvwqFNpU5Lyb3TJn8M8tIbCOwbvPnjVFJWVI97r6fLcURzbjqYxvHYfqLn64Dai9RqZrQMpnAVNLSk%2Fxj6ozI7woLxMNQyEjhvbNtE5mgaPMEdDTFDBO1RNuXdO%2BKoO9RISGpWyk%2BkbO2ZEhLLLBorm5ZqSwP6LyKALvaw5jJ3rZhGBuVCDQS6gdHqDI2oktt%2Fi42aAaISTTnI0gZRcJvedJI1aa8U6%2Bv3HhINpVA1FB82fLMuoQgr0Ga3T6WCr93H5anTFJpTV%2BixM3TrFe3FhHd6GvKC019Eg%2B6iQw79Vq123oFc%2F4Rtv2%2BcDF08ZJTvUWd84p%2BGhMBU%2F9VOkgOfrZ%2BpOYUjlUAANfasOkAWWdZaBm0J5OppvJeKfi7WcIs2FbTyirM6Dc4ar3OdPi3pIHTMN%2BW4ZXdNH52uvVOscebTxsQ2VRRWhZgZVytm%2BArRn3q1cgEIo8i9VxDzAgoGmCxf07aPZ6RtL8Xwq%2FT2VLnPQ4RvZGEOUj1aHUyAPIDGlrXmWO0nZWAeFfreVETNz%2BX3iQKvlyYY1Y4jMYHPJhI2SYxzpBvtntuuFA7m2%2BaP89fHFzFTCOpYrQBjqkAaU4%2Bvs1xhXRmoRikPdXKRgg%2BfpXbl%2F%2BAmiPPWsUjxotE8QIEl3BlgRk%2BD1ty6vT6lfFi%2BwAXRFZnZiufPsxy7VwF52cMVX4Y4w3VeGT2%2Bpp7DmfFW6XGhaysP2rY5hVOm2NuTtqmmWzmWhRJMKQO6cJjpk6FQWB5D%2FFH8rMmOnoYbyhDaJ5uF7M%2FRFt6%2FcSZ1%2Ba3Vt70xKk2M8CP0cRvR%2BJ75BU&X-Amz-Signature=3ff507633545e2f1531f882ff0d8ae2fac6e5ece40eed19ccbd6e9c4b0b6addf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
