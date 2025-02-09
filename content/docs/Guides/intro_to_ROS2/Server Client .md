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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFFKCI6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQerxu1toW430KiwwO3OJkJnZFEItMj4ztSsGGk2pCNAiEA8XKD5jDOh6%2FRs5WqJk1ruGxq3nQFqKgr1%2BNXXmxipcoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEu2gN00koHGMYlOSrcA4Lns63aw05E%2BNIYbgV6kC80puTd%2BpASspIyj0pdGs4Crwg0BDXw5GEHx%2FAAq4NXoEM0D8diBsI0iTIBiswMwl6oBM5Banzy3ptIp2igtovtdhcISXhwuHhsWTFR%2BDFWMUtR0GtwE%2BmL5Mb8g%2Brc2ZsoVRiNp4BJnbvZV2HNFMl%2BJhpF00kOcATsAFj2WRtChZ3uHcu4Br9Iluz2v3mkt3JvPDdoSd%2Bj2PRkzjZSInsN7vkcIylzxzyFfGBzgntjrsOZutbnOyiUj0RXzFUOZviNLl%2FVMzzCsSwr8mL5W%2BEggydURTSNJdwoCLi2RVOBRLoTqrUOOXzUK4NzFXwkqRMyfzHvhkDfqq0xxdy%2F2Pgni%2F7KfSO53%2FlC1TLNgT3PbNQFaDGLOmW2i5oL4RaqLwGzj5EaD%2FpXc1jGt0UPvK%2FVLVM3qHn7QkjeoJZDDR%2FI2Jg%2BEkuF7v7lqn5al9pq%2BRZLa8TLCSOhjeJQloEtCNJC4mVtVEKizDU3vmxQKuJgaQaoBydhBCf0UGoCW%2FIPM0yzC9ufg2CxRQbimjK7nPM6yZB1QkPh5c6vwKrFv3y%2FdOItTsrYUD9rK8Kb8KynFNOP8EmAZlDAHK3soY%2B%2Bt9gXFCOP4HBkB2bS6kbyMPWEo70GOqUB9O%2F5yZaxjqT4HGYlfcxaM7oJzuzaEj7fPGacG9cG01pAbKLK4L%2F1%2BQgtkcpimotRLyHEZ4WL%2FChZyTyXVvbc72%2BCnSnaJsEPAY9oc63m2KnG%2BLGbDzVUqDlBHPKPgh5qnxd5SHQRzj15wdXlVfNf7vXR8wImk8nle2VYRng9EHI40dkKM%2BZh6I8tivFLtRKKD28gVltZ62531MUwv5Yr%2BxeKjOet&X-Amz-Signature=d867b27b7b59e52706da908f192a750fc8e5447819c21746e2d272131f05622b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFFKCI6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQerxu1toW430KiwwO3OJkJnZFEItMj4ztSsGGk2pCNAiEA8XKD5jDOh6%2FRs5WqJk1ruGxq3nQFqKgr1%2BNXXmxipcoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEu2gN00koHGMYlOSrcA4Lns63aw05E%2BNIYbgV6kC80puTd%2BpASspIyj0pdGs4Crwg0BDXw5GEHx%2FAAq4NXoEM0D8diBsI0iTIBiswMwl6oBM5Banzy3ptIp2igtovtdhcISXhwuHhsWTFR%2BDFWMUtR0GtwE%2BmL5Mb8g%2Brc2ZsoVRiNp4BJnbvZV2HNFMl%2BJhpF00kOcATsAFj2WRtChZ3uHcu4Br9Iluz2v3mkt3JvPDdoSd%2Bj2PRkzjZSInsN7vkcIylzxzyFfGBzgntjrsOZutbnOyiUj0RXzFUOZviNLl%2FVMzzCsSwr8mL5W%2BEggydURTSNJdwoCLi2RVOBRLoTqrUOOXzUK4NzFXwkqRMyfzHvhkDfqq0xxdy%2F2Pgni%2F7KfSO53%2FlC1TLNgT3PbNQFaDGLOmW2i5oL4RaqLwGzj5EaD%2FpXc1jGt0UPvK%2FVLVM3qHn7QkjeoJZDDR%2FI2Jg%2BEkuF7v7lqn5al9pq%2BRZLa8TLCSOhjeJQloEtCNJC4mVtVEKizDU3vmxQKuJgaQaoBydhBCf0UGoCW%2FIPM0yzC9ufg2CxRQbimjK7nPM6yZB1QkPh5c6vwKrFv3y%2FdOItTsrYUD9rK8Kb8KynFNOP8EmAZlDAHK3soY%2B%2Bt9gXFCOP4HBkB2bS6kbyMPWEo70GOqUB9O%2F5yZaxjqT4HGYlfcxaM7oJzuzaEj7fPGacG9cG01pAbKLK4L%2F1%2BQgtkcpimotRLyHEZ4WL%2FChZyTyXVvbc72%2BCnSnaJsEPAY9oc63m2KnG%2BLGbDzVUqDlBHPKPgh5qnxd5SHQRzj15wdXlVfNf7vXR8wImk8nle2VYRng9EHI40dkKM%2BZh6I8tivFLtRKKD28gVltZ62531MUwv5Yr%2BxeKjOet&X-Amz-Signature=0912ff16a0c6ac572806e8863af39ac2cbba749021e9e16b405b9407adae4730&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFFKCI6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQerxu1toW430KiwwO3OJkJnZFEItMj4ztSsGGk2pCNAiEA8XKD5jDOh6%2FRs5WqJk1ruGxq3nQFqKgr1%2BNXXmxipcoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEu2gN00koHGMYlOSrcA4Lns63aw05E%2BNIYbgV6kC80puTd%2BpASspIyj0pdGs4Crwg0BDXw5GEHx%2FAAq4NXoEM0D8diBsI0iTIBiswMwl6oBM5Banzy3ptIp2igtovtdhcISXhwuHhsWTFR%2BDFWMUtR0GtwE%2BmL5Mb8g%2Brc2ZsoVRiNp4BJnbvZV2HNFMl%2BJhpF00kOcATsAFj2WRtChZ3uHcu4Br9Iluz2v3mkt3JvPDdoSd%2Bj2PRkzjZSInsN7vkcIylzxzyFfGBzgntjrsOZutbnOyiUj0RXzFUOZviNLl%2FVMzzCsSwr8mL5W%2BEggydURTSNJdwoCLi2RVOBRLoTqrUOOXzUK4NzFXwkqRMyfzHvhkDfqq0xxdy%2F2Pgni%2F7KfSO53%2FlC1TLNgT3PbNQFaDGLOmW2i5oL4RaqLwGzj5EaD%2FpXc1jGt0UPvK%2FVLVM3qHn7QkjeoJZDDR%2FI2Jg%2BEkuF7v7lqn5al9pq%2BRZLa8TLCSOhjeJQloEtCNJC4mVtVEKizDU3vmxQKuJgaQaoBydhBCf0UGoCW%2FIPM0yzC9ufg2CxRQbimjK7nPM6yZB1QkPh5c6vwKrFv3y%2FdOItTsrYUD9rK8Kb8KynFNOP8EmAZlDAHK3soY%2B%2Bt9gXFCOP4HBkB2bS6kbyMPWEo70GOqUB9O%2F5yZaxjqT4HGYlfcxaM7oJzuzaEj7fPGacG9cG01pAbKLK4L%2F1%2BQgtkcpimotRLyHEZ4WL%2FChZyTyXVvbc72%2BCnSnaJsEPAY9oc63m2KnG%2BLGbDzVUqDlBHPKPgh5qnxd5SHQRzj15wdXlVfNf7vXR8wImk8nle2VYRng9EHI40dkKM%2BZh6I8tivFLtRKKD28gVltZ62531MUwv5Yr%2BxeKjOet&X-Amz-Signature=0b95878dc1df3426339297b001e564a112883eac086883c1fe487e013976ac02&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFFKCI6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQerxu1toW430KiwwO3OJkJnZFEItMj4ztSsGGk2pCNAiEA8XKD5jDOh6%2FRs5WqJk1ruGxq3nQFqKgr1%2BNXXmxipcoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEu2gN00koHGMYlOSrcA4Lns63aw05E%2BNIYbgV6kC80puTd%2BpASspIyj0pdGs4Crwg0BDXw5GEHx%2FAAq4NXoEM0D8diBsI0iTIBiswMwl6oBM5Banzy3ptIp2igtovtdhcISXhwuHhsWTFR%2BDFWMUtR0GtwE%2BmL5Mb8g%2Brc2ZsoVRiNp4BJnbvZV2HNFMl%2BJhpF00kOcATsAFj2WRtChZ3uHcu4Br9Iluz2v3mkt3JvPDdoSd%2Bj2PRkzjZSInsN7vkcIylzxzyFfGBzgntjrsOZutbnOyiUj0RXzFUOZviNLl%2FVMzzCsSwr8mL5W%2BEggydURTSNJdwoCLi2RVOBRLoTqrUOOXzUK4NzFXwkqRMyfzHvhkDfqq0xxdy%2F2Pgni%2F7KfSO53%2FlC1TLNgT3PbNQFaDGLOmW2i5oL4RaqLwGzj5EaD%2FpXc1jGt0UPvK%2FVLVM3qHn7QkjeoJZDDR%2FI2Jg%2BEkuF7v7lqn5al9pq%2BRZLa8TLCSOhjeJQloEtCNJC4mVtVEKizDU3vmxQKuJgaQaoBydhBCf0UGoCW%2FIPM0yzC9ufg2CxRQbimjK7nPM6yZB1QkPh5c6vwKrFv3y%2FdOItTsrYUD9rK8Kb8KynFNOP8EmAZlDAHK3soY%2B%2Bt9gXFCOP4HBkB2bS6kbyMPWEo70GOqUB9O%2F5yZaxjqT4HGYlfcxaM7oJzuzaEj7fPGacG9cG01pAbKLK4L%2F1%2BQgtkcpimotRLyHEZ4WL%2FChZyTyXVvbc72%2BCnSnaJsEPAY9oc63m2KnG%2BLGbDzVUqDlBHPKPgh5qnxd5SHQRzj15wdXlVfNf7vXR8wImk8nle2VYRng9EHI40dkKM%2BZh6I8tivFLtRKKD28gVltZ62531MUwv5Yr%2BxeKjOet&X-Amz-Signature=216c60c862b26204c40d114c30026a4565b43daa8aecc9c77cfc5da6af46c983&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFFKCI6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQerxu1toW430KiwwO3OJkJnZFEItMj4ztSsGGk2pCNAiEA8XKD5jDOh6%2FRs5WqJk1ruGxq3nQFqKgr1%2BNXXmxipcoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEu2gN00koHGMYlOSrcA4Lns63aw05E%2BNIYbgV6kC80puTd%2BpASspIyj0pdGs4Crwg0BDXw5GEHx%2FAAq4NXoEM0D8diBsI0iTIBiswMwl6oBM5Banzy3ptIp2igtovtdhcISXhwuHhsWTFR%2BDFWMUtR0GtwE%2BmL5Mb8g%2Brc2ZsoVRiNp4BJnbvZV2HNFMl%2BJhpF00kOcATsAFj2WRtChZ3uHcu4Br9Iluz2v3mkt3JvPDdoSd%2Bj2PRkzjZSInsN7vkcIylzxzyFfGBzgntjrsOZutbnOyiUj0RXzFUOZviNLl%2FVMzzCsSwr8mL5W%2BEggydURTSNJdwoCLi2RVOBRLoTqrUOOXzUK4NzFXwkqRMyfzHvhkDfqq0xxdy%2F2Pgni%2F7KfSO53%2FlC1TLNgT3PbNQFaDGLOmW2i5oL4RaqLwGzj5EaD%2FpXc1jGt0UPvK%2FVLVM3qHn7QkjeoJZDDR%2FI2Jg%2BEkuF7v7lqn5al9pq%2BRZLa8TLCSOhjeJQloEtCNJC4mVtVEKizDU3vmxQKuJgaQaoBydhBCf0UGoCW%2FIPM0yzC9ufg2CxRQbimjK7nPM6yZB1QkPh5c6vwKrFv3y%2FdOItTsrYUD9rK8Kb8KynFNOP8EmAZlDAHK3soY%2B%2Bt9gXFCOP4HBkB2bS6kbyMPWEo70GOqUB9O%2F5yZaxjqT4HGYlfcxaM7oJzuzaEj7fPGacG9cG01pAbKLK4L%2F1%2BQgtkcpimotRLyHEZ4WL%2FChZyTyXVvbc72%2BCnSnaJsEPAY9oc63m2KnG%2BLGbDzVUqDlBHPKPgh5qnxd5SHQRzj15wdXlVfNf7vXR8wImk8nle2VYRng9EHI40dkKM%2BZh6I8tivFLtRKKD28gVltZ62531MUwv5Yr%2BxeKjOet&X-Amz-Signature=01a0a45a8cea5689f398df1bee6118249090627ca6d3db9b8616a4f6c842b5aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
