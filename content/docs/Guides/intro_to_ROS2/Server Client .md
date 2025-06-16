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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QWF7LO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHYw0vJ26F386Y6wh7gS%2BODMEo%2B5fmJlP7MnAU5Z3EBNAiEAxUQBnSpNpEnGND%2FqUzunoJmZa8mbPJwxEaM%2Bsag%2BpC4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDH%2FyF1lCNGIYs7kkvSrcAyPMhLP5Q%2B1lpfWKpGolSWiwXzndkzNqab%2BoGnRx%2FnpPYdIpPa1Vjx5%2BMKPjwoVoz%2F9oxl26msVTN8QHUMxusWtRuq9Laws8CdcO6C9s6aWVNVQPhZwKDdpP7DXLOJ%2B6b%2FFdVTxvgC3FhHkBkNBuE5oNOcI3%2Bxh7B02huCYQOaTj%2FdIpbpW3SWjRkhI52H9YhH%2FvRlGXuiCbFiLYFMC44Oq3aD10YJjm7Qn22juLzlI2nkMvOTrC6JnK1aKJDgioieZldObkwNdoSXCC9pQF1mVVccyATM1RZoYn5rczvxGFtyQwAh4Cp6kg4bJdLb4%2BdGYLoMprbMOPV2gEVaRJ%2F2uc4iYZNGhmm2mnOHQXPpnO8ClCzRY64RC4RCeXWzxmLK4rkUiBUj5Nmyw2FAUbHmiflEP04ANnZYJY0xHX5e%2FAeCojX2E5HNqmli8PxBqeeL%2FfpkxmFjj57SIFC0boGj2Qx%2B7CJQk3sUbh%2FAbupFhrT6ygh0MN5HDWDKR0U04oOidOhzEWojpzM77QvKVlPvGlthjbuQihxPnK%2B2KgaQnmJq4MT6PGDxhudrxSww8mBkk%2BDid6IuZ3Gpo1xJ6aZLyUZ4GrjxG1%2FtdY1aUiAMHLvt7SiMVMt3du4yk8MKyvvcIGOqUBJiQQIrFb5nGCJ%2FSYiJZe6Kje%2B0Ze0YmmLtKXzJYUHotHCAeVR7RZ4qJNXxkaYsVh%2B49k2O8vP72ek8qSH1kOPyY7jQx1y2xYiSPbdXv3s2PEnmGnTVrk50%2Fvheiia2Rrzu%2B6IHj7xLjZ9ylae6txyWPmsIjLwBSMzhlboLsHWV%2FGiFiB1LI9d5NFCxvJ27hgrFyi%2FvTGu0RKnwUb8nyOXsGQuyra&X-Amz-Signature=02cdbc07b31896c1b31b9526fe11f67701cdd675c42a0880a8774bc708faa172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QWF7LO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHYw0vJ26F386Y6wh7gS%2BODMEo%2B5fmJlP7MnAU5Z3EBNAiEAxUQBnSpNpEnGND%2FqUzunoJmZa8mbPJwxEaM%2Bsag%2BpC4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDH%2FyF1lCNGIYs7kkvSrcAyPMhLP5Q%2B1lpfWKpGolSWiwXzndkzNqab%2BoGnRx%2FnpPYdIpPa1Vjx5%2BMKPjwoVoz%2F9oxl26msVTN8QHUMxusWtRuq9Laws8CdcO6C9s6aWVNVQPhZwKDdpP7DXLOJ%2B6b%2FFdVTxvgC3FhHkBkNBuE5oNOcI3%2Bxh7B02huCYQOaTj%2FdIpbpW3SWjRkhI52H9YhH%2FvRlGXuiCbFiLYFMC44Oq3aD10YJjm7Qn22juLzlI2nkMvOTrC6JnK1aKJDgioieZldObkwNdoSXCC9pQF1mVVccyATM1RZoYn5rczvxGFtyQwAh4Cp6kg4bJdLb4%2BdGYLoMprbMOPV2gEVaRJ%2F2uc4iYZNGhmm2mnOHQXPpnO8ClCzRY64RC4RCeXWzxmLK4rkUiBUj5Nmyw2FAUbHmiflEP04ANnZYJY0xHX5e%2FAeCojX2E5HNqmli8PxBqeeL%2FfpkxmFjj57SIFC0boGj2Qx%2B7CJQk3sUbh%2FAbupFhrT6ygh0MN5HDWDKR0U04oOidOhzEWojpzM77QvKVlPvGlthjbuQihxPnK%2B2KgaQnmJq4MT6PGDxhudrxSww8mBkk%2BDid6IuZ3Gpo1xJ6aZLyUZ4GrjxG1%2FtdY1aUiAMHLvt7SiMVMt3du4yk8MKyvvcIGOqUBJiQQIrFb5nGCJ%2FSYiJZe6Kje%2B0Ze0YmmLtKXzJYUHotHCAeVR7RZ4qJNXxkaYsVh%2B49k2O8vP72ek8qSH1kOPyY7jQx1y2xYiSPbdXv3s2PEnmGnTVrk50%2Fvheiia2Rrzu%2B6IHj7xLjZ9ylae6txyWPmsIjLwBSMzhlboLsHWV%2FGiFiB1LI9d5NFCxvJ27hgrFyi%2FvTGu0RKnwUb8nyOXsGQuyra&X-Amz-Signature=f4fa28d01e9558f87f71b8ebd61db83d88f077f63de5c674192fbf82c56d2c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QWF7LO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHYw0vJ26F386Y6wh7gS%2BODMEo%2B5fmJlP7MnAU5Z3EBNAiEAxUQBnSpNpEnGND%2FqUzunoJmZa8mbPJwxEaM%2Bsag%2BpC4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDH%2FyF1lCNGIYs7kkvSrcAyPMhLP5Q%2B1lpfWKpGolSWiwXzndkzNqab%2BoGnRx%2FnpPYdIpPa1Vjx5%2BMKPjwoVoz%2F9oxl26msVTN8QHUMxusWtRuq9Laws8CdcO6C9s6aWVNVQPhZwKDdpP7DXLOJ%2B6b%2FFdVTxvgC3FhHkBkNBuE5oNOcI3%2Bxh7B02huCYQOaTj%2FdIpbpW3SWjRkhI52H9YhH%2FvRlGXuiCbFiLYFMC44Oq3aD10YJjm7Qn22juLzlI2nkMvOTrC6JnK1aKJDgioieZldObkwNdoSXCC9pQF1mVVccyATM1RZoYn5rczvxGFtyQwAh4Cp6kg4bJdLb4%2BdGYLoMprbMOPV2gEVaRJ%2F2uc4iYZNGhmm2mnOHQXPpnO8ClCzRY64RC4RCeXWzxmLK4rkUiBUj5Nmyw2FAUbHmiflEP04ANnZYJY0xHX5e%2FAeCojX2E5HNqmli8PxBqeeL%2FfpkxmFjj57SIFC0boGj2Qx%2B7CJQk3sUbh%2FAbupFhrT6ygh0MN5HDWDKR0U04oOidOhzEWojpzM77QvKVlPvGlthjbuQihxPnK%2B2KgaQnmJq4MT6PGDxhudrxSww8mBkk%2BDid6IuZ3Gpo1xJ6aZLyUZ4GrjxG1%2FtdY1aUiAMHLvt7SiMVMt3du4yk8MKyvvcIGOqUBJiQQIrFb5nGCJ%2FSYiJZe6Kje%2B0Ze0YmmLtKXzJYUHotHCAeVR7RZ4qJNXxkaYsVh%2B49k2O8vP72ek8qSH1kOPyY7jQx1y2xYiSPbdXv3s2PEnmGnTVrk50%2Fvheiia2Rrzu%2B6IHj7xLjZ9ylae6txyWPmsIjLwBSMzhlboLsHWV%2FGiFiB1LI9d5NFCxvJ27hgrFyi%2FvTGu0RKnwUb8nyOXsGQuyra&X-Amz-Signature=16d19fd763e3c3005b788291f4883a91f61129381ef316a1ad2971a168217a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QWF7LO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHYw0vJ26F386Y6wh7gS%2BODMEo%2B5fmJlP7MnAU5Z3EBNAiEAxUQBnSpNpEnGND%2FqUzunoJmZa8mbPJwxEaM%2Bsag%2BpC4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDH%2FyF1lCNGIYs7kkvSrcAyPMhLP5Q%2B1lpfWKpGolSWiwXzndkzNqab%2BoGnRx%2FnpPYdIpPa1Vjx5%2BMKPjwoVoz%2F9oxl26msVTN8QHUMxusWtRuq9Laws8CdcO6C9s6aWVNVQPhZwKDdpP7DXLOJ%2B6b%2FFdVTxvgC3FhHkBkNBuE5oNOcI3%2Bxh7B02huCYQOaTj%2FdIpbpW3SWjRkhI52H9YhH%2FvRlGXuiCbFiLYFMC44Oq3aD10YJjm7Qn22juLzlI2nkMvOTrC6JnK1aKJDgioieZldObkwNdoSXCC9pQF1mVVccyATM1RZoYn5rczvxGFtyQwAh4Cp6kg4bJdLb4%2BdGYLoMprbMOPV2gEVaRJ%2F2uc4iYZNGhmm2mnOHQXPpnO8ClCzRY64RC4RCeXWzxmLK4rkUiBUj5Nmyw2FAUbHmiflEP04ANnZYJY0xHX5e%2FAeCojX2E5HNqmli8PxBqeeL%2FfpkxmFjj57SIFC0boGj2Qx%2B7CJQk3sUbh%2FAbupFhrT6ygh0MN5HDWDKR0U04oOidOhzEWojpzM77QvKVlPvGlthjbuQihxPnK%2B2KgaQnmJq4MT6PGDxhudrxSww8mBkk%2BDid6IuZ3Gpo1xJ6aZLyUZ4GrjxG1%2FtdY1aUiAMHLvt7SiMVMt3du4yk8MKyvvcIGOqUBJiQQIrFb5nGCJ%2FSYiJZe6Kje%2B0Ze0YmmLtKXzJYUHotHCAeVR7RZ4qJNXxkaYsVh%2B49k2O8vP72ek8qSH1kOPyY7jQx1y2xYiSPbdXv3s2PEnmGnTVrk50%2Fvheiia2Rrzu%2B6IHj7xLjZ9ylae6txyWPmsIjLwBSMzhlboLsHWV%2FGiFiB1LI9d5NFCxvJ27hgrFyi%2FvTGu0RKnwUb8nyOXsGQuyra&X-Amz-Signature=fa3fef05cc52c00243b24966c47b0f65226d577397594ba06293a517e0bb198c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QWF7LO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHYw0vJ26F386Y6wh7gS%2BODMEo%2B5fmJlP7MnAU5Z3EBNAiEAxUQBnSpNpEnGND%2FqUzunoJmZa8mbPJwxEaM%2Bsag%2BpC4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDH%2FyF1lCNGIYs7kkvSrcAyPMhLP5Q%2B1lpfWKpGolSWiwXzndkzNqab%2BoGnRx%2FnpPYdIpPa1Vjx5%2BMKPjwoVoz%2F9oxl26msVTN8QHUMxusWtRuq9Laws8CdcO6C9s6aWVNVQPhZwKDdpP7DXLOJ%2B6b%2FFdVTxvgC3FhHkBkNBuE5oNOcI3%2Bxh7B02huCYQOaTj%2FdIpbpW3SWjRkhI52H9YhH%2FvRlGXuiCbFiLYFMC44Oq3aD10YJjm7Qn22juLzlI2nkMvOTrC6JnK1aKJDgioieZldObkwNdoSXCC9pQF1mVVccyATM1RZoYn5rczvxGFtyQwAh4Cp6kg4bJdLb4%2BdGYLoMprbMOPV2gEVaRJ%2F2uc4iYZNGhmm2mnOHQXPpnO8ClCzRY64RC4RCeXWzxmLK4rkUiBUj5Nmyw2FAUbHmiflEP04ANnZYJY0xHX5e%2FAeCojX2E5HNqmli8PxBqeeL%2FfpkxmFjj57SIFC0boGj2Qx%2B7CJQk3sUbh%2FAbupFhrT6ygh0MN5HDWDKR0U04oOidOhzEWojpzM77QvKVlPvGlthjbuQihxPnK%2B2KgaQnmJq4MT6PGDxhudrxSww8mBkk%2BDid6IuZ3Gpo1xJ6aZLyUZ4GrjxG1%2FtdY1aUiAMHLvt7SiMVMt3du4yk8MKyvvcIGOqUBJiQQIrFb5nGCJ%2FSYiJZe6Kje%2B0Ze0YmmLtKXzJYUHotHCAeVR7RZ4qJNXxkaYsVh%2B49k2O8vP72ek8qSH1kOPyY7jQx1y2xYiSPbdXv3s2PEnmGnTVrk50%2Fvheiia2Rrzu%2B6IHj7xLjZ9ylae6txyWPmsIjLwBSMzhlboLsHWV%2FGiFiB1LI9d5NFCxvJ27hgrFyi%2FvTGu0RKnwUb8nyOXsGQuyra&X-Amz-Signature=253885cd2579a92c017be2db78a1b50ba89a9e32575c3527236656033a3ba5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
