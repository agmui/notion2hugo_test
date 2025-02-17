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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBDQFNG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAQstF0CD8lVWx9VyODcxWvR9p5mEaSGAjy%2FxLKrEOVbAiEAxEFEWbSM%2B78gadpdLI4I0HHuRbMpdQuQEa1V6b%2BN63Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJQ8A6OsOj2SRnaOiCrcA6gvnZw60C4BTE0KbEtnofxR2zYzpqPYKATKAhvr6B4gebSS7lkrDnjoPm9PNrxbqPeeNWYe0m%2Fo5bkenE0ceRy1ayS5qMMpHpJ2%2FZJP86KKvEXIusImYnxY4345BKMJClLkxK0EBMXf%2FDTopl2KWFPcjtcCFYIad0PNuSy7VmsqhxVuAxag9Re%2Fw8msplqGA7Z6K%2FvPAiVyUKBiU8t9P7CnO7wHP%2B2de1IJg1pcsNyhN6BMbPbOI1N3eFKKFBE21XEZiMwAfy4SBoT3LinfF0d9lYjQmHsVElk76ky1OkPr1kuu9nh5pBVuUwELcjoSkUi9IIp%2BGEEgfDcRa6jdvbVGqlx%2Fn4jKspbtMI8zg4ZaRDNJPtzwqflyMHqC9t9nD0QdhHfiHvgdKEjNZ3hv5hDOOJ4U34qlnj9KwvxtApojmlzX8qPNFTrA0%2BNBoq2Q4GS8zwsrPuOweeFoiK6ZCF8gUXVS%2BjGhnsfINILogXPcZYQIlvrCTag%2FPY8%2BAcr5tbqUJMyoNYYXgfdcld%2BBryw1Jsl%2FXGcxwI5cLqPRTNdkzuCXVxcHNKSGiUO9bHn3XVjPkFAi8G1KD%2F%2Bq2LBq5X6mLbmcOh51k8ILsOG%2FoDOABUHxYAbq1%2FEhSnv0MIDKyr0GOqUBUZnuNsg6KM03cBIMEdXFX1fwiSfkdXhXWPUZdUt7RtrHJiQIg0XimdZLKi%2BHWKno40CwdtO6A1oJZmbyEPrXn0B9Sn%2BOzw5YgzeHJ8%2B9jMEiJ60hE0HCOZBH92JCsaZIIbs%2Fn6QdZahkpeCTasBzKE684%2Bt5%2BeB3kTJW8MPEe9n7q7zATbaTukYbA2vPnf4Ou8Dj%2B2eYPZ1%2FxPxx0XMNbbqRFjt3&X-Amz-Signature=728e6d01c437381b8b11edde76265286ca93e62c5045c47a23fbdc1206962116&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBDQFNG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAQstF0CD8lVWx9VyODcxWvR9p5mEaSGAjy%2FxLKrEOVbAiEAxEFEWbSM%2B78gadpdLI4I0HHuRbMpdQuQEa1V6b%2BN63Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJQ8A6OsOj2SRnaOiCrcA6gvnZw60C4BTE0KbEtnofxR2zYzpqPYKATKAhvr6B4gebSS7lkrDnjoPm9PNrxbqPeeNWYe0m%2Fo5bkenE0ceRy1ayS5qMMpHpJ2%2FZJP86KKvEXIusImYnxY4345BKMJClLkxK0EBMXf%2FDTopl2KWFPcjtcCFYIad0PNuSy7VmsqhxVuAxag9Re%2Fw8msplqGA7Z6K%2FvPAiVyUKBiU8t9P7CnO7wHP%2B2de1IJg1pcsNyhN6BMbPbOI1N3eFKKFBE21XEZiMwAfy4SBoT3LinfF0d9lYjQmHsVElk76ky1OkPr1kuu9nh5pBVuUwELcjoSkUi9IIp%2BGEEgfDcRa6jdvbVGqlx%2Fn4jKspbtMI8zg4ZaRDNJPtzwqflyMHqC9t9nD0QdhHfiHvgdKEjNZ3hv5hDOOJ4U34qlnj9KwvxtApojmlzX8qPNFTrA0%2BNBoq2Q4GS8zwsrPuOweeFoiK6ZCF8gUXVS%2BjGhnsfINILogXPcZYQIlvrCTag%2FPY8%2BAcr5tbqUJMyoNYYXgfdcld%2BBryw1Jsl%2FXGcxwI5cLqPRTNdkzuCXVxcHNKSGiUO9bHn3XVjPkFAi8G1KD%2F%2Bq2LBq5X6mLbmcOh51k8ILsOG%2FoDOABUHxYAbq1%2FEhSnv0MIDKyr0GOqUBUZnuNsg6KM03cBIMEdXFX1fwiSfkdXhXWPUZdUt7RtrHJiQIg0XimdZLKi%2BHWKno40CwdtO6A1oJZmbyEPrXn0B9Sn%2BOzw5YgzeHJ8%2B9jMEiJ60hE0HCOZBH92JCsaZIIbs%2Fn6QdZahkpeCTasBzKE684%2Bt5%2BeB3kTJW8MPEe9n7q7zATbaTukYbA2vPnf4Ou8Dj%2B2eYPZ1%2FxPxx0XMNbbqRFjt3&X-Amz-Signature=dc7307afb4b4e785688a8ab822bc3ea591dc21aee1ddcfc8fcc3df4a638673a0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBDQFNG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAQstF0CD8lVWx9VyODcxWvR9p5mEaSGAjy%2FxLKrEOVbAiEAxEFEWbSM%2B78gadpdLI4I0HHuRbMpdQuQEa1V6b%2BN63Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJQ8A6OsOj2SRnaOiCrcA6gvnZw60C4BTE0KbEtnofxR2zYzpqPYKATKAhvr6B4gebSS7lkrDnjoPm9PNrxbqPeeNWYe0m%2Fo5bkenE0ceRy1ayS5qMMpHpJ2%2FZJP86KKvEXIusImYnxY4345BKMJClLkxK0EBMXf%2FDTopl2KWFPcjtcCFYIad0PNuSy7VmsqhxVuAxag9Re%2Fw8msplqGA7Z6K%2FvPAiVyUKBiU8t9P7CnO7wHP%2B2de1IJg1pcsNyhN6BMbPbOI1N3eFKKFBE21XEZiMwAfy4SBoT3LinfF0d9lYjQmHsVElk76ky1OkPr1kuu9nh5pBVuUwELcjoSkUi9IIp%2BGEEgfDcRa6jdvbVGqlx%2Fn4jKspbtMI8zg4ZaRDNJPtzwqflyMHqC9t9nD0QdhHfiHvgdKEjNZ3hv5hDOOJ4U34qlnj9KwvxtApojmlzX8qPNFTrA0%2BNBoq2Q4GS8zwsrPuOweeFoiK6ZCF8gUXVS%2BjGhnsfINILogXPcZYQIlvrCTag%2FPY8%2BAcr5tbqUJMyoNYYXgfdcld%2BBryw1Jsl%2FXGcxwI5cLqPRTNdkzuCXVxcHNKSGiUO9bHn3XVjPkFAi8G1KD%2F%2Bq2LBq5X6mLbmcOh51k8ILsOG%2FoDOABUHxYAbq1%2FEhSnv0MIDKyr0GOqUBUZnuNsg6KM03cBIMEdXFX1fwiSfkdXhXWPUZdUt7RtrHJiQIg0XimdZLKi%2BHWKno40CwdtO6A1oJZmbyEPrXn0B9Sn%2BOzw5YgzeHJ8%2B9jMEiJ60hE0HCOZBH92JCsaZIIbs%2Fn6QdZahkpeCTasBzKE684%2Bt5%2BeB3kTJW8MPEe9n7q7zATbaTukYbA2vPnf4Ou8Dj%2B2eYPZ1%2FxPxx0XMNbbqRFjt3&X-Amz-Signature=4c92abbaafdd20853b0200cb8399a0d067be07eb51742e0164d5e8a7cf722452&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBDQFNG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAQstF0CD8lVWx9VyODcxWvR9p5mEaSGAjy%2FxLKrEOVbAiEAxEFEWbSM%2B78gadpdLI4I0HHuRbMpdQuQEa1V6b%2BN63Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJQ8A6OsOj2SRnaOiCrcA6gvnZw60C4BTE0KbEtnofxR2zYzpqPYKATKAhvr6B4gebSS7lkrDnjoPm9PNrxbqPeeNWYe0m%2Fo5bkenE0ceRy1ayS5qMMpHpJ2%2FZJP86KKvEXIusImYnxY4345BKMJClLkxK0EBMXf%2FDTopl2KWFPcjtcCFYIad0PNuSy7VmsqhxVuAxag9Re%2Fw8msplqGA7Z6K%2FvPAiVyUKBiU8t9P7CnO7wHP%2B2de1IJg1pcsNyhN6BMbPbOI1N3eFKKFBE21XEZiMwAfy4SBoT3LinfF0d9lYjQmHsVElk76ky1OkPr1kuu9nh5pBVuUwELcjoSkUi9IIp%2BGEEgfDcRa6jdvbVGqlx%2Fn4jKspbtMI8zg4ZaRDNJPtzwqflyMHqC9t9nD0QdhHfiHvgdKEjNZ3hv5hDOOJ4U34qlnj9KwvxtApojmlzX8qPNFTrA0%2BNBoq2Q4GS8zwsrPuOweeFoiK6ZCF8gUXVS%2BjGhnsfINILogXPcZYQIlvrCTag%2FPY8%2BAcr5tbqUJMyoNYYXgfdcld%2BBryw1Jsl%2FXGcxwI5cLqPRTNdkzuCXVxcHNKSGiUO9bHn3XVjPkFAi8G1KD%2F%2Bq2LBq5X6mLbmcOh51k8ILsOG%2FoDOABUHxYAbq1%2FEhSnv0MIDKyr0GOqUBUZnuNsg6KM03cBIMEdXFX1fwiSfkdXhXWPUZdUt7RtrHJiQIg0XimdZLKi%2BHWKno40CwdtO6A1oJZmbyEPrXn0B9Sn%2BOzw5YgzeHJ8%2B9jMEiJ60hE0HCOZBH92JCsaZIIbs%2Fn6QdZahkpeCTasBzKE684%2Bt5%2BeB3kTJW8MPEe9n7q7zATbaTukYbA2vPnf4Ou8Dj%2B2eYPZ1%2FxPxx0XMNbbqRFjt3&X-Amz-Signature=87c823c12afdb11d2fed6521fdf2d9ac25fc60d37e318667fb0c42efadc8f5aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBDQFNG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAQstF0CD8lVWx9VyODcxWvR9p5mEaSGAjy%2FxLKrEOVbAiEAxEFEWbSM%2B78gadpdLI4I0HHuRbMpdQuQEa1V6b%2BN63Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJQ8A6OsOj2SRnaOiCrcA6gvnZw60C4BTE0KbEtnofxR2zYzpqPYKATKAhvr6B4gebSS7lkrDnjoPm9PNrxbqPeeNWYe0m%2Fo5bkenE0ceRy1ayS5qMMpHpJ2%2FZJP86KKvEXIusImYnxY4345BKMJClLkxK0EBMXf%2FDTopl2KWFPcjtcCFYIad0PNuSy7VmsqhxVuAxag9Re%2Fw8msplqGA7Z6K%2FvPAiVyUKBiU8t9P7CnO7wHP%2B2de1IJg1pcsNyhN6BMbPbOI1N3eFKKFBE21XEZiMwAfy4SBoT3LinfF0d9lYjQmHsVElk76ky1OkPr1kuu9nh5pBVuUwELcjoSkUi9IIp%2BGEEgfDcRa6jdvbVGqlx%2Fn4jKspbtMI8zg4ZaRDNJPtzwqflyMHqC9t9nD0QdhHfiHvgdKEjNZ3hv5hDOOJ4U34qlnj9KwvxtApojmlzX8qPNFTrA0%2BNBoq2Q4GS8zwsrPuOweeFoiK6ZCF8gUXVS%2BjGhnsfINILogXPcZYQIlvrCTag%2FPY8%2BAcr5tbqUJMyoNYYXgfdcld%2BBryw1Jsl%2FXGcxwI5cLqPRTNdkzuCXVxcHNKSGiUO9bHn3XVjPkFAi8G1KD%2F%2Bq2LBq5X6mLbmcOh51k8ILsOG%2FoDOABUHxYAbq1%2FEhSnv0MIDKyr0GOqUBUZnuNsg6KM03cBIMEdXFX1fwiSfkdXhXWPUZdUt7RtrHJiQIg0XimdZLKi%2BHWKno40CwdtO6A1oJZmbyEPrXn0B9Sn%2BOzw5YgzeHJ8%2B9jMEiJ60hE0HCOZBH92JCsaZIIbs%2Fn6QdZahkpeCTasBzKE684%2Bt5%2BeB3kTJW8MPEe9n7q7zATbaTukYbA2vPnf4Ou8Dj%2B2eYPZ1%2FxPxx0XMNbbqRFjt3&X-Amz-Signature=151138eae1eb48ec38d79b775aada1d1431c07266305ed9a9bdbbf3be3b358f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
