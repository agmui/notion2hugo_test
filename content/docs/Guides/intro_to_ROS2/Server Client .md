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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2GKXOH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDHw5tEnT2Ox9VpV3uWx01B5pDamEKySkO5dsURGMSE5wIgbRli2R1MQS1T%2FVjjc4mQQ9fjRydxFCGD3jrksssiYeYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmHEjEluIMKBAKQbyrcA1cvQkWWz262luzl3caK4bfirCtOhFsGKq168AIxxJwYyp%2BaPyK2TLPzlzld4hFUOb6EO3WqZ3%2FDXzNmMkq9LKYh1kjrj%2FSqjHSjELCSY%2BHqA%2BohdOBLaA3UdCNtp%2B%2F68yw2BPkQw7ur0OWRcdY3XFTHC0PT%2BOVpdgtOScynAJZ9OlINJwdbdl2fs6JDyAq%2FjAN9GhW59JYP%2FTiRvyI9Chs9OLZi%2FpF60z%2FNFWiishMsLUc%2BVrAw7LLwgc1p00B3JkchTlk38GGC65m9IX%2BfozV5A3cgJwsTZOyIGc%2FtLjMW7AZXodaguQjUVc7GZa32yvoWb4PLzYQU9KAh89uCsPRkhRMilDjt4s7b087GLRDaiL77dg5WA%2Fcg3lIDjRWRMtE0kJv8mrRrWLSvIW%2FF8EQauKmuuBjhyzjXwJiGM0jyWk7Mg4WZ8NlST7VKtLK4pgVxvC5qjcXhm%2BtwJHPDVp5yMwW%2FcBUv1hrtFKx2egEEOBxBup3IP4hzB7evHAJxZ5pE5S3KJmt2BYOP2hd0EHr9azVcQ71KpuopQ8mYwyXxRKg0O2bQGY7SApCtO6MDCyn%2FIFSm1iEtp9h6nCnXdPEXg8YE%2B98SMHLl0WGbY5Y9x6G3HokfuB59P4DoMISv%2Br4GOqUBkhx6v%2BMcb1OSk7n4H%2FrQA0yaydnP1NvwP0yanwmVlCiJDXAWYfuoklmmgJWyM4Es8PJXzJdtyCnAZViPJrsHR7taftNtqjZt1rKNacq07bHP2tXJ3mkvDGl1b0fR%2FwZ9JFIEnnf%2FT3w91ODpITcjpz4Zw08ACr1hm100cB5E0MPPEvui0tteebQoUSO8H0dwc1tIiDWiQ3tnwcixDPFg0ubrXBZc&X-Amz-Signature=aa2f4b515196074fa292f014ec2f2b5f78000d19a58f054bc85804f33de020d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2GKXOH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDHw5tEnT2Ox9VpV3uWx01B5pDamEKySkO5dsURGMSE5wIgbRli2R1MQS1T%2FVjjc4mQQ9fjRydxFCGD3jrksssiYeYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmHEjEluIMKBAKQbyrcA1cvQkWWz262luzl3caK4bfirCtOhFsGKq168AIxxJwYyp%2BaPyK2TLPzlzld4hFUOb6EO3WqZ3%2FDXzNmMkq9LKYh1kjrj%2FSqjHSjELCSY%2BHqA%2BohdOBLaA3UdCNtp%2B%2F68yw2BPkQw7ur0OWRcdY3XFTHC0PT%2BOVpdgtOScynAJZ9OlINJwdbdl2fs6JDyAq%2FjAN9GhW59JYP%2FTiRvyI9Chs9OLZi%2FpF60z%2FNFWiishMsLUc%2BVrAw7LLwgc1p00B3JkchTlk38GGC65m9IX%2BfozV5A3cgJwsTZOyIGc%2FtLjMW7AZXodaguQjUVc7GZa32yvoWb4PLzYQU9KAh89uCsPRkhRMilDjt4s7b087GLRDaiL77dg5WA%2Fcg3lIDjRWRMtE0kJv8mrRrWLSvIW%2FF8EQauKmuuBjhyzjXwJiGM0jyWk7Mg4WZ8NlST7VKtLK4pgVxvC5qjcXhm%2BtwJHPDVp5yMwW%2FcBUv1hrtFKx2egEEOBxBup3IP4hzB7evHAJxZ5pE5S3KJmt2BYOP2hd0EHr9azVcQ71KpuopQ8mYwyXxRKg0O2bQGY7SApCtO6MDCyn%2FIFSm1iEtp9h6nCnXdPEXg8YE%2B98SMHLl0WGbY5Y9x6G3HokfuB59P4DoMISv%2Br4GOqUBkhx6v%2BMcb1OSk7n4H%2FrQA0yaydnP1NvwP0yanwmVlCiJDXAWYfuoklmmgJWyM4Es8PJXzJdtyCnAZViPJrsHR7taftNtqjZt1rKNacq07bHP2tXJ3mkvDGl1b0fR%2FwZ9JFIEnnf%2FT3w91ODpITcjpz4Zw08ACr1hm100cB5E0MPPEvui0tteebQoUSO8H0dwc1tIiDWiQ3tnwcixDPFg0ubrXBZc&X-Amz-Signature=919c5aac962934b5d52998442ac98c38dbc13a6372d26ec1ffd5b4bc2882f60d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2GKXOH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDHw5tEnT2Ox9VpV3uWx01B5pDamEKySkO5dsURGMSE5wIgbRli2R1MQS1T%2FVjjc4mQQ9fjRydxFCGD3jrksssiYeYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmHEjEluIMKBAKQbyrcA1cvQkWWz262luzl3caK4bfirCtOhFsGKq168AIxxJwYyp%2BaPyK2TLPzlzld4hFUOb6EO3WqZ3%2FDXzNmMkq9LKYh1kjrj%2FSqjHSjELCSY%2BHqA%2BohdOBLaA3UdCNtp%2B%2F68yw2BPkQw7ur0OWRcdY3XFTHC0PT%2BOVpdgtOScynAJZ9OlINJwdbdl2fs6JDyAq%2FjAN9GhW59JYP%2FTiRvyI9Chs9OLZi%2FpF60z%2FNFWiishMsLUc%2BVrAw7LLwgc1p00B3JkchTlk38GGC65m9IX%2BfozV5A3cgJwsTZOyIGc%2FtLjMW7AZXodaguQjUVc7GZa32yvoWb4PLzYQU9KAh89uCsPRkhRMilDjt4s7b087GLRDaiL77dg5WA%2Fcg3lIDjRWRMtE0kJv8mrRrWLSvIW%2FF8EQauKmuuBjhyzjXwJiGM0jyWk7Mg4WZ8NlST7VKtLK4pgVxvC5qjcXhm%2BtwJHPDVp5yMwW%2FcBUv1hrtFKx2egEEOBxBup3IP4hzB7evHAJxZ5pE5S3KJmt2BYOP2hd0EHr9azVcQ71KpuopQ8mYwyXxRKg0O2bQGY7SApCtO6MDCyn%2FIFSm1iEtp9h6nCnXdPEXg8YE%2B98SMHLl0WGbY5Y9x6G3HokfuB59P4DoMISv%2Br4GOqUBkhx6v%2BMcb1OSk7n4H%2FrQA0yaydnP1NvwP0yanwmVlCiJDXAWYfuoklmmgJWyM4Es8PJXzJdtyCnAZViPJrsHR7taftNtqjZt1rKNacq07bHP2tXJ3mkvDGl1b0fR%2FwZ9JFIEnnf%2FT3w91ODpITcjpz4Zw08ACr1hm100cB5E0MPPEvui0tteebQoUSO8H0dwc1tIiDWiQ3tnwcixDPFg0ubrXBZc&X-Amz-Signature=1eb2b090948387462142352b474fd2678abe99bb82419f47e9b4fd949c709df4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2GKXOH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDHw5tEnT2Ox9VpV3uWx01B5pDamEKySkO5dsURGMSE5wIgbRli2R1MQS1T%2FVjjc4mQQ9fjRydxFCGD3jrksssiYeYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmHEjEluIMKBAKQbyrcA1cvQkWWz262luzl3caK4bfirCtOhFsGKq168AIxxJwYyp%2BaPyK2TLPzlzld4hFUOb6EO3WqZ3%2FDXzNmMkq9LKYh1kjrj%2FSqjHSjELCSY%2BHqA%2BohdOBLaA3UdCNtp%2B%2F68yw2BPkQw7ur0OWRcdY3XFTHC0PT%2BOVpdgtOScynAJZ9OlINJwdbdl2fs6JDyAq%2FjAN9GhW59JYP%2FTiRvyI9Chs9OLZi%2FpF60z%2FNFWiishMsLUc%2BVrAw7LLwgc1p00B3JkchTlk38GGC65m9IX%2BfozV5A3cgJwsTZOyIGc%2FtLjMW7AZXodaguQjUVc7GZa32yvoWb4PLzYQU9KAh89uCsPRkhRMilDjt4s7b087GLRDaiL77dg5WA%2Fcg3lIDjRWRMtE0kJv8mrRrWLSvIW%2FF8EQauKmuuBjhyzjXwJiGM0jyWk7Mg4WZ8NlST7VKtLK4pgVxvC5qjcXhm%2BtwJHPDVp5yMwW%2FcBUv1hrtFKx2egEEOBxBup3IP4hzB7evHAJxZ5pE5S3KJmt2BYOP2hd0EHr9azVcQ71KpuopQ8mYwyXxRKg0O2bQGY7SApCtO6MDCyn%2FIFSm1iEtp9h6nCnXdPEXg8YE%2B98SMHLl0WGbY5Y9x6G3HokfuB59P4DoMISv%2Br4GOqUBkhx6v%2BMcb1OSk7n4H%2FrQA0yaydnP1NvwP0yanwmVlCiJDXAWYfuoklmmgJWyM4Es8PJXzJdtyCnAZViPJrsHR7taftNtqjZt1rKNacq07bHP2tXJ3mkvDGl1b0fR%2FwZ9JFIEnnf%2FT3w91ODpITcjpz4Zw08ACr1hm100cB5E0MPPEvui0tteebQoUSO8H0dwc1tIiDWiQ3tnwcixDPFg0ubrXBZc&X-Amz-Signature=e6f6694a038935af6b4bef4a9136036f732c42c89146c49eb935b8c9e3b88615&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2GKXOH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDHw5tEnT2Ox9VpV3uWx01B5pDamEKySkO5dsURGMSE5wIgbRli2R1MQS1T%2FVjjc4mQQ9fjRydxFCGD3jrksssiYeYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmHEjEluIMKBAKQbyrcA1cvQkWWz262luzl3caK4bfirCtOhFsGKq168AIxxJwYyp%2BaPyK2TLPzlzld4hFUOb6EO3WqZ3%2FDXzNmMkq9LKYh1kjrj%2FSqjHSjELCSY%2BHqA%2BohdOBLaA3UdCNtp%2B%2F68yw2BPkQw7ur0OWRcdY3XFTHC0PT%2BOVpdgtOScynAJZ9OlINJwdbdl2fs6JDyAq%2FjAN9GhW59JYP%2FTiRvyI9Chs9OLZi%2FpF60z%2FNFWiishMsLUc%2BVrAw7LLwgc1p00B3JkchTlk38GGC65m9IX%2BfozV5A3cgJwsTZOyIGc%2FtLjMW7AZXodaguQjUVc7GZa32yvoWb4PLzYQU9KAh89uCsPRkhRMilDjt4s7b087GLRDaiL77dg5WA%2Fcg3lIDjRWRMtE0kJv8mrRrWLSvIW%2FF8EQauKmuuBjhyzjXwJiGM0jyWk7Mg4WZ8NlST7VKtLK4pgVxvC5qjcXhm%2BtwJHPDVp5yMwW%2FcBUv1hrtFKx2egEEOBxBup3IP4hzB7evHAJxZ5pE5S3KJmt2BYOP2hd0EHr9azVcQ71KpuopQ8mYwyXxRKg0O2bQGY7SApCtO6MDCyn%2FIFSm1iEtp9h6nCnXdPEXg8YE%2B98SMHLl0WGbY5Y9x6G3HokfuB59P4DoMISv%2Br4GOqUBkhx6v%2BMcb1OSk7n4H%2FrQA0yaydnP1NvwP0yanwmVlCiJDXAWYfuoklmmgJWyM4Es8PJXzJdtyCnAZViPJrsHR7taftNtqjZt1rKNacq07bHP2tXJ3mkvDGl1b0fR%2FwZ9JFIEnnf%2FT3w91ODpITcjpz4Zw08ACr1hm100cB5E0MPPEvui0tteebQoUSO8H0dwc1tIiDWiQ3tnwcixDPFg0ubrXBZc&X-Amz-Signature=113dfa1700ce2a9c569dea858c47485b2c747a48ab770a2ca9424269dcef9b84&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
