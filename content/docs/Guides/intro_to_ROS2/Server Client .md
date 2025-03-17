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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZJBOQ7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKvWdPFkwS5s0uBdIbqY%2FxhBuS2ja09WwF8ZriAoVm7AiEAzTdGvWC3JU9MQEfFdVZu7%2FWGicByrHzdq9LY6MPkPAkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIz0HxccxI7kGIIx3SrcA1Z3IWBb3vk8ZIKOCPm%2FEHoruVCCCwyKkb9Ust1jvBbsR%2BHHQ%2FPoCCKAV0hDpeJ%2BtplTHWKxJ9qIaI9%2Fq1dinrkPuHHS2WssJ4scoMxOdsXwyeN%2FszwKf8WlUO6xFkDQFv%2BLyNU%2Fq%2BZ7zRWTXT5wH9dPzDi9afdPH%2BwfL1%2BoOoSwOgX3JMIlO4Xt%2Fg8B%2BQbnKpQ11DiKSdBi4HJlWA09UUuZVRfn7OVy8OTbg4JFu7MfxREGLtWjLctu9t2DZXLd8kCD9czr4MO74bFg%2BRGSR2VEuXWCieWrFv8O2868v7FN94jia5hmcPPMiZr1mK9DA5HDEm66Oe6kTJe7CcLjsB5WIV%2Ba%2BiBYSlm8wuyDz8DVRxZvhpgkMqsbPMkjB5WiKerQuFhh7eN%2Fq5mKPUStWpAxi%2Fk%2B3VHXp76J0dBaaHxI0f9Z4%2BmEdfHZPDhjnr%2B4NvIkiIRsdqeltdQ%2FwvqmKPvuoO42aXcxevuvaZ8lyNJQo4GbtKis6r%2F%2FMEyxzyQaam8KEpK64rnv7vM%2BTHQg%2FzlrE2NArxjQBhOKZy25vNT2WKpSb1m8VftONBuLYgzJfcKosFv9f%2FnH6OnM%2F5LdagkKNUk1SP4d65L8ynA9AVtYWvP4X6wM9h0nUdabMMTl4b4GOqUBKMJP3GC4KF59bv%2BtkYKBk8CGJuj1krxdp69nEaIkwOEASwhk4s0li2xFbpmdzGg35ARosFiKWxfXFX4CWObNNiY4wMSVTtI5dmkWNGQVVEksikfQXXnwciXexNTf2UMZXPrAl2rNFDyiH3MPY2wjQmzXGPZSe2KRDvtO4zbDrgkysBOSi4NzipE6r0Zaz8x51lps7XKwVw8PkwFFGPM9%2B4o52oFT&X-Amz-Signature=798cf8b3cf79e784821265a4b9ce852fce780a510f51173fb82c838e262509e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZJBOQ7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKvWdPFkwS5s0uBdIbqY%2FxhBuS2ja09WwF8ZriAoVm7AiEAzTdGvWC3JU9MQEfFdVZu7%2FWGicByrHzdq9LY6MPkPAkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIz0HxccxI7kGIIx3SrcA1Z3IWBb3vk8ZIKOCPm%2FEHoruVCCCwyKkb9Ust1jvBbsR%2BHHQ%2FPoCCKAV0hDpeJ%2BtplTHWKxJ9qIaI9%2Fq1dinrkPuHHS2WssJ4scoMxOdsXwyeN%2FszwKf8WlUO6xFkDQFv%2BLyNU%2Fq%2BZ7zRWTXT5wH9dPzDi9afdPH%2BwfL1%2BoOoSwOgX3JMIlO4Xt%2Fg8B%2BQbnKpQ11DiKSdBi4HJlWA09UUuZVRfn7OVy8OTbg4JFu7MfxREGLtWjLctu9t2DZXLd8kCD9czr4MO74bFg%2BRGSR2VEuXWCieWrFv8O2868v7FN94jia5hmcPPMiZr1mK9DA5HDEm66Oe6kTJe7CcLjsB5WIV%2Ba%2BiBYSlm8wuyDz8DVRxZvhpgkMqsbPMkjB5WiKerQuFhh7eN%2Fq5mKPUStWpAxi%2Fk%2B3VHXp76J0dBaaHxI0f9Z4%2BmEdfHZPDhjnr%2B4NvIkiIRsdqeltdQ%2FwvqmKPvuoO42aXcxevuvaZ8lyNJQo4GbtKis6r%2F%2FMEyxzyQaam8KEpK64rnv7vM%2BTHQg%2FzlrE2NArxjQBhOKZy25vNT2WKpSb1m8VftONBuLYgzJfcKosFv9f%2FnH6OnM%2F5LdagkKNUk1SP4d65L8ynA9AVtYWvP4X6wM9h0nUdabMMTl4b4GOqUBKMJP3GC4KF59bv%2BtkYKBk8CGJuj1krxdp69nEaIkwOEASwhk4s0li2xFbpmdzGg35ARosFiKWxfXFX4CWObNNiY4wMSVTtI5dmkWNGQVVEksikfQXXnwciXexNTf2UMZXPrAl2rNFDyiH3MPY2wjQmzXGPZSe2KRDvtO4zbDrgkysBOSi4NzipE6r0Zaz8x51lps7XKwVw8PkwFFGPM9%2B4o52oFT&X-Amz-Signature=23a947972603a744de0dc982a9bfcb8e05254904cf4555d505fd857065e4f5ab&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZJBOQ7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKvWdPFkwS5s0uBdIbqY%2FxhBuS2ja09WwF8ZriAoVm7AiEAzTdGvWC3JU9MQEfFdVZu7%2FWGicByrHzdq9LY6MPkPAkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIz0HxccxI7kGIIx3SrcA1Z3IWBb3vk8ZIKOCPm%2FEHoruVCCCwyKkb9Ust1jvBbsR%2BHHQ%2FPoCCKAV0hDpeJ%2BtplTHWKxJ9qIaI9%2Fq1dinrkPuHHS2WssJ4scoMxOdsXwyeN%2FszwKf8WlUO6xFkDQFv%2BLyNU%2Fq%2BZ7zRWTXT5wH9dPzDi9afdPH%2BwfL1%2BoOoSwOgX3JMIlO4Xt%2Fg8B%2BQbnKpQ11DiKSdBi4HJlWA09UUuZVRfn7OVy8OTbg4JFu7MfxREGLtWjLctu9t2DZXLd8kCD9czr4MO74bFg%2BRGSR2VEuXWCieWrFv8O2868v7FN94jia5hmcPPMiZr1mK9DA5HDEm66Oe6kTJe7CcLjsB5WIV%2Ba%2BiBYSlm8wuyDz8DVRxZvhpgkMqsbPMkjB5WiKerQuFhh7eN%2Fq5mKPUStWpAxi%2Fk%2B3VHXp76J0dBaaHxI0f9Z4%2BmEdfHZPDhjnr%2B4NvIkiIRsdqeltdQ%2FwvqmKPvuoO42aXcxevuvaZ8lyNJQo4GbtKis6r%2F%2FMEyxzyQaam8KEpK64rnv7vM%2BTHQg%2FzlrE2NArxjQBhOKZy25vNT2WKpSb1m8VftONBuLYgzJfcKosFv9f%2FnH6OnM%2F5LdagkKNUk1SP4d65L8ynA9AVtYWvP4X6wM9h0nUdabMMTl4b4GOqUBKMJP3GC4KF59bv%2BtkYKBk8CGJuj1krxdp69nEaIkwOEASwhk4s0li2xFbpmdzGg35ARosFiKWxfXFX4CWObNNiY4wMSVTtI5dmkWNGQVVEksikfQXXnwciXexNTf2UMZXPrAl2rNFDyiH3MPY2wjQmzXGPZSe2KRDvtO4zbDrgkysBOSi4NzipE6r0Zaz8x51lps7XKwVw8PkwFFGPM9%2B4o52oFT&X-Amz-Signature=156af6e8e32bb4391f77484615bfdde209eafeff3a1f4243bb563a82cf0145be&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZJBOQ7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKvWdPFkwS5s0uBdIbqY%2FxhBuS2ja09WwF8ZriAoVm7AiEAzTdGvWC3JU9MQEfFdVZu7%2FWGicByrHzdq9LY6MPkPAkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIz0HxccxI7kGIIx3SrcA1Z3IWBb3vk8ZIKOCPm%2FEHoruVCCCwyKkb9Ust1jvBbsR%2BHHQ%2FPoCCKAV0hDpeJ%2BtplTHWKxJ9qIaI9%2Fq1dinrkPuHHS2WssJ4scoMxOdsXwyeN%2FszwKf8WlUO6xFkDQFv%2BLyNU%2Fq%2BZ7zRWTXT5wH9dPzDi9afdPH%2BwfL1%2BoOoSwOgX3JMIlO4Xt%2Fg8B%2BQbnKpQ11DiKSdBi4HJlWA09UUuZVRfn7OVy8OTbg4JFu7MfxREGLtWjLctu9t2DZXLd8kCD9czr4MO74bFg%2BRGSR2VEuXWCieWrFv8O2868v7FN94jia5hmcPPMiZr1mK9DA5HDEm66Oe6kTJe7CcLjsB5WIV%2Ba%2BiBYSlm8wuyDz8DVRxZvhpgkMqsbPMkjB5WiKerQuFhh7eN%2Fq5mKPUStWpAxi%2Fk%2B3VHXp76J0dBaaHxI0f9Z4%2BmEdfHZPDhjnr%2B4NvIkiIRsdqeltdQ%2FwvqmKPvuoO42aXcxevuvaZ8lyNJQo4GbtKis6r%2F%2FMEyxzyQaam8KEpK64rnv7vM%2BTHQg%2FzlrE2NArxjQBhOKZy25vNT2WKpSb1m8VftONBuLYgzJfcKosFv9f%2FnH6OnM%2F5LdagkKNUk1SP4d65L8ynA9AVtYWvP4X6wM9h0nUdabMMTl4b4GOqUBKMJP3GC4KF59bv%2BtkYKBk8CGJuj1krxdp69nEaIkwOEASwhk4s0li2xFbpmdzGg35ARosFiKWxfXFX4CWObNNiY4wMSVTtI5dmkWNGQVVEksikfQXXnwciXexNTf2UMZXPrAl2rNFDyiH3MPY2wjQmzXGPZSe2KRDvtO4zbDrgkysBOSi4NzipE6r0Zaz8x51lps7XKwVw8PkwFFGPM9%2B4o52oFT&X-Amz-Signature=2c967e9ae283df5771d300b1b474523008f8c5c5fc18c489a2985cd1f319e31e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZJBOQ7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKvWdPFkwS5s0uBdIbqY%2FxhBuS2ja09WwF8ZriAoVm7AiEAzTdGvWC3JU9MQEfFdVZu7%2FWGicByrHzdq9LY6MPkPAkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIz0HxccxI7kGIIx3SrcA1Z3IWBb3vk8ZIKOCPm%2FEHoruVCCCwyKkb9Ust1jvBbsR%2BHHQ%2FPoCCKAV0hDpeJ%2BtplTHWKxJ9qIaI9%2Fq1dinrkPuHHS2WssJ4scoMxOdsXwyeN%2FszwKf8WlUO6xFkDQFv%2BLyNU%2Fq%2BZ7zRWTXT5wH9dPzDi9afdPH%2BwfL1%2BoOoSwOgX3JMIlO4Xt%2Fg8B%2BQbnKpQ11DiKSdBi4HJlWA09UUuZVRfn7OVy8OTbg4JFu7MfxREGLtWjLctu9t2DZXLd8kCD9czr4MO74bFg%2BRGSR2VEuXWCieWrFv8O2868v7FN94jia5hmcPPMiZr1mK9DA5HDEm66Oe6kTJe7CcLjsB5WIV%2Ba%2BiBYSlm8wuyDz8DVRxZvhpgkMqsbPMkjB5WiKerQuFhh7eN%2Fq5mKPUStWpAxi%2Fk%2B3VHXp76J0dBaaHxI0f9Z4%2BmEdfHZPDhjnr%2B4NvIkiIRsdqeltdQ%2FwvqmKPvuoO42aXcxevuvaZ8lyNJQo4GbtKis6r%2F%2FMEyxzyQaam8KEpK64rnv7vM%2BTHQg%2FzlrE2NArxjQBhOKZy25vNT2WKpSb1m8VftONBuLYgzJfcKosFv9f%2FnH6OnM%2F5LdagkKNUk1SP4d65L8ynA9AVtYWvP4X6wM9h0nUdabMMTl4b4GOqUBKMJP3GC4KF59bv%2BtkYKBk8CGJuj1krxdp69nEaIkwOEASwhk4s0li2xFbpmdzGg35ARosFiKWxfXFX4CWObNNiY4wMSVTtI5dmkWNGQVVEksikfQXXnwciXexNTf2UMZXPrAl2rNFDyiH3MPY2wjQmzXGPZSe2KRDvtO4zbDrgkysBOSi4NzipE6r0Zaz8x51lps7XKwVw8PkwFFGPM9%2B4o52oFT&X-Amz-Signature=8203cabdfe1502b681c142dd0703d1e475f3d66d47c7574da452dd58a8d36ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
