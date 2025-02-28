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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT7CFFQK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA2kAnqb1%2FFA3MvtpU3Vlhw5J1ml6C8GG0mZHJtVSdVWAiEAvjDpyD8147LlL5tQFXUDic2QEwug6gSgiD2WtE0Vs9UqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZvPufu5%2BEglp6RJircA8VRmPFwDQyIES2BZWQATdl%2Bn9rpE1rT%2BVJCnvavM3FlPW8chwqwcBT%2F%2FrMdDUCMsmbNU1ACu8uFd8os0ZP4AVJ76AbRiwP9nhsNbO6wZoUiuzz9ysARo1ZOiFDryi66KZqaLQAi6826SAN12l9s5pKZx%2B3Cp0zo%2BuSlzZVg6g%2Bq0qJP3uGTuQqLF53mijfqIGmKuwddzd7IpMfFPUYsMdLlF3bs1orldDurYZHgrmyvqLVhfpMnphJBVzHmF93PH5aEODOQE2R8BL3eytyBfN1cB9wzY0aOqf37EDNSHaWIsD3mdTlasdfsOb9lzEBzzqzPOE4N%2BHQiCInfOyhNBQ13vRBxrPuW77myBDGHky9PwZkKEbQuTuXqc%2Be14aV9s%2Bp32KxqVRjQgTnW27FITpJOdRSG39F7vuJqyBNMGEK9JWi8uOoIVx%2Fpqm68c4hn9G%2F1A%2Fx1y2Od17VWC6O5Nv%2FpINR41q64m3Z1UVTqbC5optzw55vtC4I1Idr%2BcCrY%2FGMHfoovNyNh80JGWNtDE%2FVp1CvK2sKuz7XXq8tDOjm%2BqoRFNqD4auZgizqY0uLikZJ1Sf%2FZ8rOC1UdeydmC24W0GlZCjlHJM2VWxUUL4Xe3kANX2CtJznWuDGknMMPvhr4GOqUB44S6p%2F8m2MZ4kKEmCs0Hye8PQ9wFu6tXd9T94iXL03wXnHeXjLMi6CbOmh%2FKgn4F0z4JVke1vODgqxeRaG%2Br031gPOsdUHDHq2ekgRfzmf7%2BUMtHJlAza6vcrWpKcmioVO2TVhaMIHUD5i1J5DzETv2pRADBRECbTco1p6tKcxoLSox6VSE%2BLZ4VNNrAzhoNqc9A1m1UG7l%2BnkCNtVCnzLYjdypB&X-Amz-Signature=ecd4f965d5061b880c1189af915a5df42ae93562aa6a7f5e3b3475a15331fb81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT7CFFQK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA2kAnqb1%2FFA3MvtpU3Vlhw5J1ml6C8GG0mZHJtVSdVWAiEAvjDpyD8147LlL5tQFXUDic2QEwug6gSgiD2WtE0Vs9UqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZvPufu5%2BEglp6RJircA8VRmPFwDQyIES2BZWQATdl%2Bn9rpE1rT%2BVJCnvavM3FlPW8chwqwcBT%2F%2FrMdDUCMsmbNU1ACu8uFd8os0ZP4AVJ76AbRiwP9nhsNbO6wZoUiuzz9ysARo1ZOiFDryi66KZqaLQAi6826SAN12l9s5pKZx%2B3Cp0zo%2BuSlzZVg6g%2Bq0qJP3uGTuQqLF53mijfqIGmKuwddzd7IpMfFPUYsMdLlF3bs1orldDurYZHgrmyvqLVhfpMnphJBVzHmF93PH5aEODOQE2R8BL3eytyBfN1cB9wzY0aOqf37EDNSHaWIsD3mdTlasdfsOb9lzEBzzqzPOE4N%2BHQiCInfOyhNBQ13vRBxrPuW77myBDGHky9PwZkKEbQuTuXqc%2Be14aV9s%2Bp32KxqVRjQgTnW27FITpJOdRSG39F7vuJqyBNMGEK9JWi8uOoIVx%2Fpqm68c4hn9G%2F1A%2Fx1y2Od17VWC6O5Nv%2FpINR41q64m3Z1UVTqbC5optzw55vtC4I1Idr%2BcCrY%2FGMHfoovNyNh80JGWNtDE%2FVp1CvK2sKuz7XXq8tDOjm%2BqoRFNqD4auZgizqY0uLikZJ1Sf%2FZ8rOC1UdeydmC24W0GlZCjlHJM2VWxUUL4Xe3kANX2CtJznWuDGknMMPvhr4GOqUB44S6p%2F8m2MZ4kKEmCs0Hye8PQ9wFu6tXd9T94iXL03wXnHeXjLMi6CbOmh%2FKgn4F0z4JVke1vODgqxeRaG%2Br031gPOsdUHDHq2ekgRfzmf7%2BUMtHJlAza6vcrWpKcmioVO2TVhaMIHUD5i1J5DzETv2pRADBRECbTco1p6tKcxoLSox6VSE%2BLZ4VNNrAzhoNqc9A1m1UG7l%2BnkCNtVCnzLYjdypB&X-Amz-Signature=d7d72456b1e7d03020a2dc42d3c5824ba8f609e977032baefbd3649bd143a290&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT7CFFQK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA2kAnqb1%2FFA3MvtpU3Vlhw5J1ml6C8GG0mZHJtVSdVWAiEAvjDpyD8147LlL5tQFXUDic2QEwug6gSgiD2WtE0Vs9UqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZvPufu5%2BEglp6RJircA8VRmPFwDQyIES2BZWQATdl%2Bn9rpE1rT%2BVJCnvavM3FlPW8chwqwcBT%2F%2FrMdDUCMsmbNU1ACu8uFd8os0ZP4AVJ76AbRiwP9nhsNbO6wZoUiuzz9ysARo1ZOiFDryi66KZqaLQAi6826SAN12l9s5pKZx%2B3Cp0zo%2BuSlzZVg6g%2Bq0qJP3uGTuQqLF53mijfqIGmKuwddzd7IpMfFPUYsMdLlF3bs1orldDurYZHgrmyvqLVhfpMnphJBVzHmF93PH5aEODOQE2R8BL3eytyBfN1cB9wzY0aOqf37EDNSHaWIsD3mdTlasdfsOb9lzEBzzqzPOE4N%2BHQiCInfOyhNBQ13vRBxrPuW77myBDGHky9PwZkKEbQuTuXqc%2Be14aV9s%2Bp32KxqVRjQgTnW27FITpJOdRSG39F7vuJqyBNMGEK9JWi8uOoIVx%2Fpqm68c4hn9G%2F1A%2Fx1y2Od17VWC6O5Nv%2FpINR41q64m3Z1UVTqbC5optzw55vtC4I1Idr%2BcCrY%2FGMHfoovNyNh80JGWNtDE%2FVp1CvK2sKuz7XXq8tDOjm%2BqoRFNqD4auZgizqY0uLikZJ1Sf%2FZ8rOC1UdeydmC24W0GlZCjlHJM2VWxUUL4Xe3kANX2CtJznWuDGknMMPvhr4GOqUB44S6p%2F8m2MZ4kKEmCs0Hye8PQ9wFu6tXd9T94iXL03wXnHeXjLMi6CbOmh%2FKgn4F0z4JVke1vODgqxeRaG%2Br031gPOsdUHDHq2ekgRfzmf7%2BUMtHJlAza6vcrWpKcmioVO2TVhaMIHUD5i1J5DzETv2pRADBRECbTco1p6tKcxoLSox6VSE%2BLZ4VNNrAzhoNqc9A1m1UG7l%2BnkCNtVCnzLYjdypB&X-Amz-Signature=32bf3c458994856c19f2f734272f7b1481fde08558cec03b1afa78a97b93ddde&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT7CFFQK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA2kAnqb1%2FFA3MvtpU3Vlhw5J1ml6C8GG0mZHJtVSdVWAiEAvjDpyD8147LlL5tQFXUDic2QEwug6gSgiD2WtE0Vs9UqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZvPufu5%2BEglp6RJircA8VRmPFwDQyIES2BZWQATdl%2Bn9rpE1rT%2BVJCnvavM3FlPW8chwqwcBT%2F%2FrMdDUCMsmbNU1ACu8uFd8os0ZP4AVJ76AbRiwP9nhsNbO6wZoUiuzz9ysARo1ZOiFDryi66KZqaLQAi6826SAN12l9s5pKZx%2B3Cp0zo%2BuSlzZVg6g%2Bq0qJP3uGTuQqLF53mijfqIGmKuwddzd7IpMfFPUYsMdLlF3bs1orldDurYZHgrmyvqLVhfpMnphJBVzHmF93PH5aEODOQE2R8BL3eytyBfN1cB9wzY0aOqf37EDNSHaWIsD3mdTlasdfsOb9lzEBzzqzPOE4N%2BHQiCInfOyhNBQ13vRBxrPuW77myBDGHky9PwZkKEbQuTuXqc%2Be14aV9s%2Bp32KxqVRjQgTnW27FITpJOdRSG39F7vuJqyBNMGEK9JWi8uOoIVx%2Fpqm68c4hn9G%2F1A%2Fx1y2Od17VWC6O5Nv%2FpINR41q64m3Z1UVTqbC5optzw55vtC4I1Idr%2BcCrY%2FGMHfoovNyNh80JGWNtDE%2FVp1CvK2sKuz7XXq8tDOjm%2BqoRFNqD4auZgizqY0uLikZJ1Sf%2FZ8rOC1UdeydmC24W0GlZCjlHJM2VWxUUL4Xe3kANX2CtJznWuDGknMMPvhr4GOqUB44S6p%2F8m2MZ4kKEmCs0Hye8PQ9wFu6tXd9T94iXL03wXnHeXjLMi6CbOmh%2FKgn4F0z4JVke1vODgqxeRaG%2Br031gPOsdUHDHq2ekgRfzmf7%2BUMtHJlAza6vcrWpKcmioVO2TVhaMIHUD5i1J5DzETv2pRADBRECbTco1p6tKcxoLSox6VSE%2BLZ4VNNrAzhoNqc9A1m1UG7l%2BnkCNtVCnzLYjdypB&X-Amz-Signature=268c553b1fba87ef0a35d76e122460f5ae0998dc64d74e643f115bdd572039d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT7CFFQK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA2kAnqb1%2FFA3MvtpU3Vlhw5J1ml6C8GG0mZHJtVSdVWAiEAvjDpyD8147LlL5tQFXUDic2QEwug6gSgiD2WtE0Vs9UqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZvPufu5%2BEglp6RJircA8VRmPFwDQyIES2BZWQATdl%2Bn9rpE1rT%2BVJCnvavM3FlPW8chwqwcBT%2F%2FrMdDUCMsmbNU1ACu8uFd8os0ZP4AVJ76AbRiwP9nhsNbO6wZoUiuzz9ysARo1ZOiFDryi66KZqaLQAi6826SAN12l9s5pKZx%2B3Cp0zo%2BuSlzZVg6g%2Bq0qJP3uGTuQqLF53mijfqIGmKuwddzd7IpMfFPUYsMdLlF3bs1orldDurYZHgrmyvqLVhfpMnphJBVzHmF93PH5aEODOQE2R8BL3eytyBfN1cB9wzY0aOqf37EDNSHaWIsD3mdTlasdfsOb9lzEBzzqzPOE4N%2BHQiCInfOyhNBQ13vRBxrPuW77myBDGHky9PwZkKEbQuTuXqc%2Be14aV9s%2Bp32KxqVRjQgTnW27FITpJOdRSG39F7vuJqyBNMGEK9JWi8uOoIVx%2Fpqm68c4hn9G%2F1A%2Fx1y2Od17VWC6O5Nv%2FpINR41q64m3Z1UVTqbC5optzw55vtC4I1Idr%2BcCrY%2FGMHfoovNyNh80JGWNtDE%2FVp1CvK2sKuz7XXq8tDOjm%2BqoRFNqD4auZgizqY0uLikZJ1Sf%2FZ8rOC1UdeydmC24W0GlZCjlHJM2VWxUUL4Xe3kANX2CtJznWuDGknMMPvhr4GOqUB44S6p%2F8m2MZ4kKEmCs0Hye8PQ9wFu6tXd9T94iXL03wXnHeXjLMi6CbOmh%2FKgn4F0z4JVke1vODgqxeRaG%2Br031gPOsdUHDHq2ekgRfzmf7%2BUMtHJlAza6vcrWpKcmioVO2TVhaMIHUD5i1J5DzETv2pRADBRECbTco1p6tKcxoLSox6VSE%2BLZ4VNNrAzhoNqc9A1m1UG7l%2BnkCNtVCnzLYjdypB&X-Amz-Signature=6efbba6366ce47a5172cf912ccc037274554b0c62e2daade893680075e5de63a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
