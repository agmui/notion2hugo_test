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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6WGDLG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnwP%2B2%2F%2Bl4m8R2EF3E4kAW8CvZXDvlc8%2Bh0vu%2BFaU52gIhAPgXYMIAkamDsR6eziCWImMkGbKf3Hg9moGL0dpmWSIpKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2FtPQOq3U3XCIrOUq3AODsgSSbhmDAl4AXIX4CYPCLtuGiIV%2F35nS5%2BaE9dcuu4zFFR4hMPktzXY27bf6uzfDcPS5TkImC8QrIubQoVF6BrgJmqf74Dt8N9HW92U8MUrJs2%2F0KkqGwmxRrzkzbHkd%2FvWwmrE7FsC85LFDCSgPb5KshiOVMEMB4ivd4Ea8FE3PCFx4t5gjvB8dqguaOzw%2Fdn0dYUI8lb1LzQ9tAPPmSQcEjFZioaQVMb4dByHHKPUScWQ8E%2FcND6%2BSdHla8usdQF9y7kmveyewF0%2BkwJnLK8Ken2C5LhUWnXheIl%2BlWRPKwzc%2FRvNol1AGGTPYZexX204UN1EfGxNqdt%2BFuhtNF3NupHIdk8%2FrHZ3vlaYLdwKBnq9gr83%2FYLeAMBgb7nHkW%2F8jS%2FnUF6hgx2fkBgHF70DVYbxRGe3%2FBk%2FffPOEjjOIn3QUnO%2FE%2BCwXDKwivT1GYSCGzP%2F9y5J2XSgR2DIIGfj86X0lM4DAqo94epZl4qLewaJ6MZCdfPIZcVP8hgJv2XxaPILsOw9xH4JC4I0YRlx4DURiu2ryRTA%2BpAp2A7GZNaR5Q%2FoBSfzmPUP5pkfS9zF6Y8VvW4Dxb%2BeLbLIyfeys%2FRXHK20gA5qdf9snp2EpsPZYv9K6bKtnkzDSg6PABjqkAbDWRE%2FfLio01dq9pW90jrcHG%2FZAiDpGgEyAFN3Ppjj6kIlQWAOlp3qzA7UNTo09qIxJw7LqYXU5U5THhaLqn7EYMcD6gut%2F8cs%2FojXrFuiCo3lGRilmI3LFbmOD6scBxgHtG1U%2BUZkJVHhoU7fhe7hjLYioulWfYkam8qtDAbfvf5eiTdDr0meMrS98GPHardsnNQ49loQi6faurZnQyZwA9q90&X-Amz-Signature=635493b064a4fc650fc07db0a727f032335a32c52c1b2d0b496b991c591e2822&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6WGDLG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnwP%2B2%2F%2Bl4m8R2EF3E4kAW8CvZXDvlc8%2Bh0vu%2BFaU52gIhAPgXYMIAkamDsR6eziCWImMkGbKf3Hg9moGL0dpmWSIpKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2FtPQOq3U3XCIrOUq3AODsgSSbhmDAl4AXIX4CYPCLtuGiIV%2F35nS5%2BaE9dcuu4zFFR4hMPktzXY27bf6uzfDcPS5TkImC8QrIubQoVF6BrgJmqf74Dt8N9HW92U8MUrJs2%2F0KkqGwmxRrzkzbHkd%2FvWwmrE7FsC85LFDCSgPb5KshiOVMEMB4ivd4Ea8FE3PCFx4t5gjvB8dqguaOzw%2Fdn0dYUI8lb1LzQ9tAPPmSQcEjFZioaQVMb4dByHHKPUScWQ8E%2FcND6%2BSdHla8usdQF9y7kmveyewF0%2BkwJnLK8Ken2C5LhUWnXheIl%2BlWRPKwzc%2FRvNol1AGGTPYZexX204UN1EfGxNqdt%2BFuhtNF3NupHIdk8%2FrHZ3vlaYLdwKBnq9gr83%2FYLeAMBgb7nHkW%2F8jS%2FnUF6hgx2fkBgHF70DVYbxRGe3%2FBk%2FffPOEjjOIn3QUnO%2FE%2BCwXDKwivT1GYSCGzP%2F9y5J2XSgR2DIIGfj86X0lM4DAqo94epZl4qLewaJ6MZCdfPIZcVP8hgJv2XxaPILsOw9xH4JC4I0YRlx4DURiu2ryRTA%2BpAp2A7GZNaR5Q%2FoBSfzmPUP5pkfS9zF6Y8VvW4Dxb%2BeLbLIyfeys%2FRXHK20gA5qdf9snp2EpsPZYv9K6bKtnkzDSg6PABjqkAbDWRE%2FfLio01dq9pW90jrcHG%2FZAiDpGgEyAFN3Ppjj6kIlQWAOlp3qzA7UNTo09qIxJw7LqYXU5U5THhaLqn7EYMcD6gut%2F8cs%2FojXrFuiCo3lGRilmI3LFbmOD6scBxgHtG1U%2BUZkJVHhoU7fhe7hjLYioulWfYkam8qtDAbfvf5eiTdDr0meMrS98GPHardsnNQ49loQi6faurZnQyZwA9q90&X-Amz-Signature=bf102b9bb522239b357a336e0a94dce7eb951074ef9c6bc9c44802d6a079b30d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6WGDLG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnwP%2B2%2F%2Bl4m8R2EF3E4kAW8CvZXDvlc8%2Bh0vu%2BFaU52gIhAPgXYMIAkamDsR6eziCWImMkGbKf3Hg9moGL0dpmWSIpKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2FtPQOq3U3XCIrOUq3AODsgSSbhmDAl4AXIX4CYPCLtuGiIV%2F35nS5%2BaE9dcuu4zFFR4hMPktzXY27bf6uzfDcPS5TkImC8QrIubQoVF6BrgJmqf74Dt8N9HW92U8MUrJs2%2F0KkqGwmxRrzkzbHkd%2FvWwmrE7FsC85LFDCSgPb5KshiOVMEMB4ivd4Ea8FE3PCFx4t5gjvB8dqguaOzw%2Fdn0dYUI8lb1LzQ9tAPPmSQcEjFZioaQVMb4dByHHKPUScWQ8E%2FcND6%2BSdHla8usdQF9y7kmveyewF0%2BkwJnLK8Ken2C5LhUWnXheIl%2BlWRPKwzc%2FRvNol1AGGTPYZexX204UN1EfGxNqdt%2BFuhtNF3NupHIdk8%2FrHZ3vlaYLdwKBnq9gr83%2FYLeAMBgb7nHkW%2F8jS%2FnUF6hgx2fkBgHF70DVYbxRGe3%2FBk%2FffPOEjjOIn3QUnO%2FE%2BCwXDKwivT1GYSCGzP%2F9y5J2XSgR2DIIGfj86X0lM4DAqo94epZl4qLewaJ6MZCdfPIZcVP8hgJv2XxaPILsOw9xH4JC4I0YRlx4DURiu2ryRTA%2BpAp2A7GZNaR5Q%2FoBSfzmPUP5pkfS9zF6Y8VvW4Dxb%2BeLbLIyfeys%2FRXHK20gA5qdf9snp2EpsPZYv9K6bKtnkzDSg6PABjqkAbDWRE%2FfLio01dq9pW90jrcHG%2FZAiDpGgEyAFN3Ppjj6kIlQWAOlp3qzA7UNTo09qIxJw7LqYXU5U5THhaLqn7EYMcD6gut%2F8cs%2FojXrFuiCo3lGRilmI3LFbmOD6scBxgHtG1U%2BUZkJVHhoU7fhe7hjLYioulWfYkam8qtDAbfvf5eiTdDr0meMrS98GPHardsnNQ49loQi6faurZnQyZwA9q90&X-Amz-Signature=c25137e48fe3a2abeedd8726cdbc1e49e8646d6cf91eb3c0914587f80ac9ec2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6WGDLG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnwP%2B2%2F%2Bl4m8R2EF3E4kAW8CvZXDvlc8%2Bh0vu%2BFaU52gIhAPgXYMIAkamDsR6eziCWImMkGbKf3Hg9moGL0dpmWSIpKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2FtPQOq3U3XCIrOUq3AODsgSSbhmDAl4AXIX4CYPCLtuGiIV%2F35nS5%2BaE9dcuu4zFFR4hMPktzXY27bf6uzfDcPS5TkImC8QrIubQoVF6BrgJmqf74Dt8N9HW92U8MUrJs2%2F0KkqGwmxRrzkzbHkd%2FvWwmrE7FsC85LFDCSgPb5KshiOVMEMB4ivd4Ea8FE3PCFx4t5gjvB8dqguaOzw%2Fdn0dYUI8lb1LzQ9tAPPmSQcEjFZioaQVMb4dByHHKPUScWQ8E%2FcND6%2BSdHla8usdQF9y7kmveyewF0%2BkwJnLK8Ken2C5LhUWnXheIl%2BlWRPKwzc%2FRvNol1AGGTPYZexX204UN1EfGxNqdt%2BFuhtNF3NupHIdk8%2FrHZ3vlaYLdwKBnq9gr83%2FYLeAMBgb7nHkW%2F8jS%2FnUF6hgx2fkBgHF70DVYbxRGe3%2FBk%2FffPOEjjOIn3QUnO%2FE%2BCwXDKwivT1GYSCGzP%2F9y5J2XSgR2DIIGfj86X0lM4DAqo94epZl4qLewaJ6MZCdfPIZcVP8hgJv2XxaPILsOw9xH4JC4I0YRlx4DURiu2ryRTA%2BpAp2A7GZNaR5Q%2FoBSfzmPUP5pkfS9zF6Y8VvW4Dxb%2BeLbLIyfeys%2FRXHK20gA5qdf9snp2EpsPZYv9K6bKtnkzDSg6PABjqkAbDWRE%2FfLio01dq9pW90jrcHG%2FZAiDpGgEyAFN3Ppjj6kIlQWAOlp3qzA7UNTo09qIxJw7LqYXU5U5THhaLqn7EYMcD6gut%2F8cs%2FojXrFuiCo3lGRilmI3LFbmOD6scBxgHtG1U%2BUZkJVHhoU7fhe7hjLYioulWfYkam8qtDAbfvf5eiTdDr0meMrS98GPHardsnNQ49loQi6faurZnQyZwA9q90&X-Amz-Signature=0dc012f729b36d8c8ca5c5ff796e1517311a04bd433ab6b489b96cd868a2e550&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6WGDLG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnwP%2B2%2F%2Bl4m8R2EF3E4kAW8CvZXDvlc8%2Bh0vu%2BFaU52gIhAPgXYMIAkamDsR6eziCWImMkGbKf3Hg9moGL0dpmWSIpKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2FtPQOq3U3XCIrOUq3AODsgSSbhmDAl4AXIX4CYPCLtuGiIV%2F35nS5%2BaE9dcuu4zFFR4hMPktzXY27bf6uzfDcPS5TkImC8QrIubQoVF6BrgJmqf74Dt8N9HW92U8MUrJs2%2F0KkqGwmxRrzkzbHkd%2FvWwmrE7FsC85LFDCSgPb5KshiOVMEMB4ivd4Ea8FE3PCFx4t5gjvB8dqguaOzw%2Fdn0dYUI8lb1LzQ9tAPPmSQcEjFZioaQVMb4dByHHKPUScWQ8E%2FcND6%2BSdHla8usdQF9y7kmveyewF0%2BkwJnLK8Ken2C5LhUWnXheIl%2BlWRPKwzc%2FRvNol1AGGTPYZexX204UN1EfGxNqdt%2BFuhtNF3NupHIdk8%2FrHZ3vlaYLdwKBnq9gr83%2FYLeAMBgb7nHkW%2F8jS%2FnUF6hgx2fkBgHF70DVYbxRGe3%2FBk%2FffPOEjjOIn3QUnO%2FE%2BCwXDKwivT1GYSCGzP%2F9y5J2XSgR2DIIGfj86X0lM4DAqo94epZl4qLewaJ6MZCdfPIZcVP8hgJv2XxaPILsOw9xH4JC4I0YRlx4DURiu2ryRTA%2BpAp2A7GZNaR5Q%2FoBSfzmPUP5pkfS9zF6Y8VvW4Dxb%2BeLbLIyfeys%2FRXHK20gA5qdf9snp2EpsPZYv9K6bKtnkzDSg6PABjqkAbDWRE%2FfLio01dq9pW90jrcHG%2FZAiDpGgEyAFN3Ppjj6kIlQWAOlp3qzA7UNTo09qIxJw7LqYXU5U5THhaLqn7EYMcD6gut%2F8cs%2FojXrFuiCo3lGRilmI3LFbmOD6scBxgHtG1U%2BUZkJVHhoU7fhe7hjLYioulWfYkam8qtDAbfvf5eiTdDr0meMrS98GPHardsnNQ49loQi6faurZnQyZwA9q90&X-Amz-Signature=e95ba47a7da0820e986638fdb1af5269d270d0871e04439d43bd0b6eb0be16a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
