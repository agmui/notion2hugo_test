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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RSCFGA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIClNW8hBDMCD1SxwoqNJ3DBeznxw3S9S9I9DOzIbRxOiAiEAtOrH2DV%2BrG3ZX3tUnGMDQV8kF5ULx4Pe7JN1hYPRgnAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjVObnnpMO2ySrhICrcA0NEKWDmZfiNwbQPazlPSptSaxx3vBQdIklYk173giBoscxtBsgQ3D6IqWauxU6Ba1V5yO8z%2FLmDRwJp3YmbFJkSAkir41W8cszaFsB5xj%2FiISL8yr6FX4Q8ip%2Fot02KwEAHMTCVy41Jai1a468tJjpsJ94czAFcmF0a5s60BwjwsIXFdZTa1%2BGDtPvx36XQDsf%2FiHoFD0C%2Bg%2FjN03mJPlRhbw%2Bb3Tsmv2PAs6Ff%2FeZmrveatdpyM4ppc8hfzSIGegAmEwMg%2F%2FCezG7lC0KBzNZeU4YkxjzRN6y%2BxJdBVm6AUA8r3782jKtOalRVhQv1Q6Awq%2FRfQDcHUDujmhR6LEH%2BG%2F%2Bq0bUF9l4YcdQMIWxNXxSqASoVkPq%2BiQ0qscyDlhNdvoeU2hIf33CDAPGEGM%2BxzpARtw4f0SNQ%2BGrQeJp4WVlKBU6OdbN%2BhqVm%2F48nNKS0wS4%2FiRP84HXdubnuDyKAioBMvYOwKgglXZxcC%2B0lONRzgOOXJGoyw5j%2BQ6yxYU3NRC%2FVVAWCApxWvoL93cbjcUe1tbpp8WYNgOH%2BAxT%2FBHnUU5chP2v3738otfiTc8SRjsrtU35ZGfTgEZZomBGBS6rBgtG%2FZ3w7pN0OPMfVoPkxiIE4SpTzQocmMLbe3L8GOqUBF%2FVfpwqqzrgN7TTPqeHwrRkxWgPp%2BuhCuwWcCarjeNKkosUcIw34WIPPEWmLk5jupztT8q1LJbR9sj%2FUD4ZsmJFDSmvrbwtUA2xiV%2FDdfoAjm1HLI1FAmuOsPvgFN8b8l2j7MoNYmTx821ITlp89fty4E0dLHKR%2FA0iNvTwH68VhPF8PPgJhOzn%2FRZq%2F9yJbqFZ%2BxpP1yINm%2Bft6htCndcbEIxqn&X-Amz-Signature=66096853a29157b6a770e9432903c497bfd63b03ea11fe0dc5d47260bb88a363&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RSCFGA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIClNW8hBDMCD1SxwoqNJ3DBeznxw3S9S9I9DOzIbRxOiAiEAtOrH2DV%2BrG3ZX3tUnGMDQV8kF5ULx4Pe7JN1hYPRgnAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjVObnnpMO2ySrhICrcA0NEKWDmZfiNwbQPazlPSptSaxx3vBQdIklYk173giBoscxtBsgQ3D6IqWauxU6Ba1V5yO8z%2FLmDRwJp3YmbFJkSAkir41W8cszaFsB5xj%2FiISL8yr6FX4Q8ip%2Fot02KwEAHMTCVy41Jai1a468tJjpsJ94czAFcmF0a5s60BwjwsIXFdZTa1%2BGDtPvx36XQDsf%2FiHoFD0C%2Bg%2FjN03mJPlRhbw%2Bb3Tsmv2PAs6Ff%2FeZmrveatdpyM4ppc8hfzSIGegAmEwMg%2F%2FCezG7lC0KBzNZeU4YkxjzRN6y%2BxJdBVm6AUA8r3782jKtOalRVhQv1Q6Awq%2FRfQDcHUDujmhR6LEH%2BG%2F%2Bq0bUF9l4YcdQMIWxNXxSqASoVkPq%2BiQ0qscyDlhNdvoeU2hIf33CDAPGEGM%2BxzpARtw4f0SNQ%2BGrQeJp4WVlKBU6OdbN%2BhqVm%2F48nNKS0wS4%2FiRP84HXdubnuDyKAioBMvYOwKgglXZxcC%2B0lONRzgOOXJGoyw5j%2BQ6yxYU3NRC%2FVVAWCApxWvoL93cbjcUe1tbpp8WYNgOH%2BAxT%2FBHnUU5chP2v3738otfiTc8SRjsrtU35ZGfTgEZZomBGBS6rBgtG%2FZ3w7pN0OPMfVoPkxiIE4SpTzQocmMLbe3L8GOqUBF%2FVfpwqqzrgN7TTPqeHwrRkxWgPp%2BuhCuwWcCarjeNKkosUcIw34WIPPEWmLk5jupztT8q1LJbR9sj%2FUD4ZsmJFDSmvrbwtUA2xiV%2FDdfoAjm1HLI1FAmuOsPvgFN8b8l2j7MoNYmTx821ITlp89fty4E0dLHKR%2FA0iNvTwH68VhPF8PPgJhOzn%2FRZq%2F9yJbqFZ%2BxpP1yINm%2Bft6htCndcbEIxqn&X-Amz-Signature=44c6997d10d0c91d7b2a0f8fe0ef0d89f0e32698b1ac0442eadb5facefc4a6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RSCFGA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIClNW8hBDMCD1SxwoqNJ3DBeznxw3S9S9I9DOzIbRxOiAiEAtOrH2DV%2BrG3ZX3tUnGMDQV8kF5ULx4Pe7JN1hYPRgnAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjVObnnpMO2ySrhICrcA0NEKWDmZfiNwbQPazlPSptSaxx3vBQdIklYk173giBoscxtBsgQ3D6IqWauxU6Ba1V5yO8z%2FLmDRwJp3YmbFJkSAkir41W8cszaFsB5xj%2FiISL8yr6FX4Q8ip%2Fot02KwEAHMTCVy41Jai1a468tJjpsJ94czAFcmF0a5s60BwjwsIXFdZTa1%2BGDtPvx36XQDsf%2FiHoFD0C%2Bg%2FjN03mJPlRhbw%2Bb3Tsmv2PAs6Ff%2FeZmrveatdpyM4ppc8hfzSIGegAmEwMg%2F%2FCezG7lC0KBzNZeU4YkxjzRN6y%2BxJdBVm6AUA8r3782jKtOalRVhQv1Q6Awq%2FRfQDcHUDujmhR6LEH%2BG%2F%2Bq0bUF9l4YcdQMIWxNXxSqASoVkPq%2BiQ0qscyDlhNdvoeU2hIf33CDAPGEGM%2BxzpARtw4f0SNQ%2BGrQeJp4WVlKBU6OdbN%2BhqVm%2F48nNKS0wS4%2FiRP84HXdubnuDyKAioBMvYOwKgglXZxcC%2B0lONRzgOOXJGoyw5j%2BQ6yxYU3NRC%2FVVAWCApxWvoL93cbjcUe1tbpp8WYNgOH%2BAxT%2FBHnUU5chP2v3738otfiTc8SRjsrtU35ZGfTgEZZomBGBS6rBgtG%2FZ3w7pN0OPMfVoPkxiIE4SpTzQocmMLbe3L8GOqUBF%2FVfpwqqzrgN7TTPqeHwrRkxWgPp%2BuhCuwWcCarjeNKkosUcIw34WIPPEWmLk5jupztT8q1LJbR9sj%2FUD4ZsmJFDSmvrbwtUA2xiV%2FDdfoAjm1HLI1FAmuOsPvgFN8b8l2j7MoNYmTx821ITlp89fty4E0dLHKR%2FA0iNvTwH68VhPF8PPgJhOzn%2FRZq%2F9yJbqFZ%2BxpP1yINm%2Bft6htCndcbEIxqn&X-Amz-Signature=c1f9d4dcf9b963d86f7aa2ae3ea0ce3780bf8c8a62fd47edd7f013854bbcd21e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RSCFGA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIClNW8hBDMCD1SxwoqNJ3DBeznxw3S9S9I9DOzIbRxOiAiEAtOrH2DV%2BrG3ZX3tUnGMDQV8kF5ULx4Pe7JN1hYPRgnAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjVObnnpMO2ySrhICrcA0NEKWDmZfiNwbQPazlPSptSaxx3vBQdIklYk173giBoscxtBsgQ3D6IqWauxU6Ba1V5yO8z%2FLmDRwJp3YmbFJkSAkir41W8cszaFsB5xj%2FiISL8yr6FX4Q8ip%2Fot02KwEAHMTCVy41Jai1a468tJjpsJ94czAFcmF0a5s60BwjwsIXFdZTa1%2BGDtPvx36XQDsf%2FiHoFD0C%2Bg%2FjN03mJPlRhbw%2Bb3Tsmv2PAs6Ff%2FeZmrveatdpyM4ppc8hfzSIGegAmEwMg%2F%2FCezG7lC0KBzNZeU4YkxjzRN6y%2BxJdBVm6AUA8r3782jKtOalRVhQv1Q6Awq%2FRfQDcHUDujmhR6LEH%2BG%2F%2Bq0bUF9l4YcdQMIWxNXxSqASoVkPq%2BiQ0qscyDlhNdvoeU2hIf33CDAPGEGM%2BxzpARtw4f0SNQ%2BGrQeJp4WVlKBU6OdbN%2BhqVm%2F48nNKS0wS4%2FiRP84HXdubnuDyKAioBMvYOwKgglXZxcC%2B0lONRzgOOXJGoyw5j%2BQ6yxYU3NRC%2FVVAWCApxWvoL93cbjcUe1tbpp8WYNgOH%2BAxT%2FBHnUU5chP2v3738otfiTc8SRjsrtU35ZGfTgEZZomBGBS6rBgtG%2FZ3w7pN0OPMfVoPkxiIE4SpTzQocmMLbe3L8GOqUBF%2FVfpwqqzrgN7TTPqeHwrRkxWgPp%2BuhCuwWcCarjeNKkosUcIw34WIPPEWmLk5jupztT8q1LJbR9sj%2FUD4ZsmJFDSmvrbwtUA2xiV%2FDdfoAjm1HLI1FAmuOsPvgFN8b8l2j7MoNYmTx821ITlp89fty4E0dLHKR%2FA0iNvTwH68VhPF8PPgJhOzn%2FRZq%2F9yJbqFZ%2BxpP1yINm%2Bft6htCndcbEIxqn&X-Amz-Signature=9f9820732c175b3bbb29e73afd27a1789e2907ff4350e8e36a728a5fe72f58f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RSCFGA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIClNW8hBDMCD1SxwoqNJ3DBeznxw3S9S9I9DOzIbRxOiAiEAtOrH2DV%2BrG3ZX3tUnGMDQV8kF5ULx4Pe7JN1hYPRgnAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjVObnnpMO2ySrhICrcA0NEKWDmZfiNwbQPazlPSptSaxx3vBQdIklYk173giBoscxtBsgQ3D6IqWauxU6Ba1V5yO8z%2FLmDRwJp3YmbFJkSAkir41W8cszaFsB5xj%2FiISL8yr6FX4Q8ip%2Fot02KwEAHMTCVy41Jai1a468tJjpsJ94czAFcmF0a5s60BwjwsIXFdZTa1%2BGDtPvx36XQDsf%2FiHoFD0C%2Bg%2FjN03mJPlRhbw%2Bb3Tsmv2PAs6Ff%2FeZmrveatdpyM4ppc8hfzSIGegAmEwMg%2F%2FCezG7lC0KBzNZeU4YkxjzRN6y%2BxJdBVm6AUA8r3782jKtOalRVhQv1Q6Awq%2FRfQDcHUDujmhR6LEH%2BG%2F%2Bq0bUF9l4YcdQMIWxNXxSqASoVkPq%2BiQ0qscyDlhNdvoeU2hIf33CDAPGEGM%2BxzpARtw4f0SNQ%2BGrQeJp4WVlKBU6OdbN%2BhqVm%2F48nNKS0wS4%2FiRP84HXdubnuDyKAioBMvYOwKgglXZxcC%2B0lONRzgOOXJGoyw5j%2BQ6yxYU3NRC%2FVVAWCApxWvoL93cbjcUe1tbpp8WYNgOH%2BAxT%2FBHnUU5chP2v3738otfiTc8SRjsrtU35ZGfTgEZZomBGBS6rBgtG%2FZ3w7pN0OPMfVoPkxiIE4SpTzQocmMLbe3L8GOqUBF%2FVfpwqqzrgN7TTPqeHwrRkxWgPp%2BuhCuwWcCarjeNKkosUcIw34WIPPEWmLk5jupztT8q1LJbR9sj%2FUD4ZsmJFDSmvrbwtUA2xiV%2FDdfoAjm1HLI1FAmuOsPvgFN8b8l2j7MoNYmTx821ITlp89fty4E0dLHKR%2FA0iNvTwH68VhPF8PPgJhOzn%2FRZq%2F9yJbqFZ%2BxpP1yINm%2Bft6htCndcbEIxqn&X-Amz-Signature=a041b5b98b7b86c38f8cd554359b09a39767c10894b4a410f1fbf6b76035360c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
