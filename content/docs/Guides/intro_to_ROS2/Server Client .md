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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ2NJHOA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCmb6%2BPli4R%2F8GSQVRteVjLorgo2Mv07HSFrqmAtnWY7wIgYV6pjpKJSEW%2BTAKCjUaVrfp63epGZx%2FgnYMG%2BGscDcwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCLi%2BXnuziX7tD%2FCTircA%2BprxuQm%2FqlC9rrXdMp0ZMGWkoAtfU9wPfCs8SocWxzn3NRZoC3e2qS99qoCxHSy70juRruZ07PHU2eWHS0mM0%2BL5SQ70REDgy9kn%2BwkOuznykLzUuk6ZVxI1%2FytrZkUioJHTdrwP%2BbOtHDYcQpbiEygGSFQcF%2BVvbQM8dHP%2B6Qf%2FKFsgcNfRfEGe3pvahEJXX8lo8xsLofiHrooFYm7OYRw%2FI%2FQXtronfz0J8cd3lfpKN5BHWeuGWXMYjulIPTYPFbEMmm%2FoyY7YBL74R0m5m5Zz1V7hsGXa4Z%2BdM4HJXpZ1IpKmEOt4SkxcfI5EzrJYW3MntSbegBNsmzwnzdCRanMYWhdsc6YgfGzCL45Hse5EAsgq4hGqOQ72iNPJZCUfcUW8PWvxzH9wfNYD3SXVmRyLCJoU1tynKGo28QR6CGZFlVqcQnoKB18O%2FpLsUnaTYTjob%2BsBMsUedKS9ifZBl3lO4Q0WZFQG2Jt%2FOwNxWUzJsXKm6GxOumit6i9AVUnwjU6sWSYH0sCzcoCEyc7MsE%2BZ9mLraePDlF7bHk5arS3GF5mPElDaFRPue6fVYT1ijLsqJJkZoxDoBobNv85hu7RjsnXlXRD6%2BevJT8J%2B8tVGqih8fM1Vhkf9DcsMKjVgsIGOqUBdXANCm7ccjwG1slbbVJFUfOHYCv898fyD%2B2obgzJg57TCMDAoS6smraGjBzFY3x8eDvPSlsfCtOJA3njPLMRuinCgWoQLn%2F35EUu4e%2BFNPxTWDGoyGo%2BHstZv0QL1e03IwKxdPNgZEtteQP2iMUNbEv7cjRwsghdcfOACZl0tgpJ8XxLPXPozgveEv52NNBakc5FBqvv3mvtlCY19RpThyGde7ve&X-Amz-Signature=cc26fbebb8e79a0a39d72a10e81e25c95eee3d15a0735ea1193b3ce8c8f0f8e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ2NJHOA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCmb6%2BPli4R%2F8GSQVRteVjLorgo2Mv07HSFrqmAtnWY7wIgYV6pjpKJSEW%2BTAKCjUaVrfp63epGZx%2FgnYMG%2BGscDcwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCLi%2BXnuziX7tD%2FCTircA%2BprxuQm%2FqlC9rrXdMp0ZMGWkoAtfU9wPfCs8SocWxzn3NRZoC3e2qS99qoCxHSy70juRruZ07PHU2eWHS0mM0%2BL5SQ70REDgy9kn%2BwkOuznykLzUuk6ZVxI1%2FytrZkUioJHTdrwP%2BbOtHDYcQpbiEygGSFQcF%2BVvbQM8dHP%2B6Qf%2FKFsgcNfRfEGe3pvahEJXX8lo8xsLofiHrooFYm7OYRw%2FI%2FQXtronfz0J8cd3lfpKN5BHWeuGWXMYjulIPTYPFbEMmm%2FoyY7YBL74R0m5m5Zz1V7hsGXa4Z%2BdM4HJXpZ1IpKmEOt4SkxcfI5EzrJYW3MntSbegBNsmzwnzdCRanMYWhdsc6YgfGzCL45Hse5EAsgq4hGqOQ72iNPJZCUfcUW8PWvxzH9wfNYD3SXVmRyLCJoU1tynKGo28QR6CGZFlVqcQnoKB18O%2FpLsUnaTYTjob%2BsBMsUedKS9ifZBl3lO4Q0WZFQG2Jt%2FOwNxWUzJsXKm6GxOumit6i9AVUnwjU6sWSYH0sCzcoCEyc7MsE%2BZ9mLraePDlF7bHk5arS3GF5mPElDaFRPue6fVYT1ijLsqJJkZoxDoBobNv85hu7RjsnXlXRD6%2BevJT8J%2B8tVGqih8fM1Vhkf9DcsMKjVgsIGOqUBdXANCm7ccjwG1slbbVJFUfOHYCv898fyD%2B2obgzJg57TCMDAoS6smraGjBzFY3x8eDvPSlsfCtOJA3njPLMRuinCgWoQLn%2F35EUu4e%2BFNPxTWDGoyGo%2BHstZv0QL1e03IwKxdPNgZEtteQP2iMUNbEv7cjRwsghdcfOACZl0tgpJ8XxLPXPozgveEv52NNBakc5FBqvv3mvtlCY19RpThyGde7ve&X-Amz-Signature=19ae23aa6cc7169d31ae2ad2be9ad35b7733895e9ccbc1d3a919ed0873344cda&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ2NJHOA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCmb6%2BPli4R%2F8GSQVRteVjLorgo2Mv07HSFrqmAtnWY7wIgYV6pjpKJSEW%2BTAKCjUaVrfp63epGZx%2FgnYMG%2BGscDcwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCLi%2BXnuziX7tD%2FCTircA%2BprxuQm%2FqlC9rrXdMp0ZMGWkoAtfU9wPfCs8SocWxzn3NRZoC3e2qS99qoCxHSy70juRruZ07PHU2eWHS0mM0%2BL5SQ70REDgy9kn%2BwkOuznykLzUuk6ZVxI1%2FytrZkUioJHTdrwP%2BbOtHDYcQpbiEygGSFQcF%2BVvbQM8dHP%2B6Qf%2FKFsgcNfRfEGe3pvahEJXX8lo8xsLofiHrooFYm7OYRw%2FI%2FQXtronfz0J8cd3lfpKN5BHWeuGWXMYjulIPTYPFbEMmm%2FoyY7YBL74R0m5m5Zz1V7hsGXa4Z%2BdM4HJXpZ1IpKmEOt4SkxcfI5EzrJYW3MntSbegBNsmzwnzdCRanMYWhdsc6YgfGzCL45Hse5EAsgq4hGqOQ72iNPJZCUfcUW8PWvxzH9wfNYD3SXVmRyLCJoU1tynKGo28QR6CGZFlVqcQnoKB18O%2FpLsUnaTYTjob%2BsBMsUedKS9ifZBl3lO4Q0WZFQG2Jt%2FOwNxWUzJsXKm6GxOumit6i9AVUnwjU6sWSYH0sCzcoCEyc7MsE%2BZ9mLraePDlF7bHk5arS3GF5mPElDaFRPue6fVYT1ijLsqJJkZoxDoBobNv85hu7RjsnXlXRD6%2BevJT8J%2B8tVGqih8fM1Vhkf9DcsMKjVgsIGOqUBdXANCm7ccjwG1slbbVJFUfOHYCv898fyD%2B2obgzJg57TCMDAoS6smraGjBzFY3x8eDvPSlsfCtOJA3njPLMRuinCgWoQLn%2F35EUu4e%2BFNPxTWDGoyGo%2BHstZv0QL1e03IwKxdPNgZEtteQP2iMUNbEv7cjRwsghdcfOACZl0tgpJ8XxLPXPozgveEv52NNBakc5FBqvv3mvtlCY19RpThyGde7ve&X-Amz-Signature=391b3af9774e49f7088439a6281e9ac742b601ec189c2f2412d812b8f5e8e107&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ2NJHOA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCmb6%2BPli4R%2F8GSQVRteVjLorgo2Mv07HSFrqmAtnWY7wIgYV6pjpKJSEW%2BTAKCjUaVrfp63epGZx%2FgnYMG%2BGscDcwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCLi%2BXnuziX7tD%2FCTircA%2BprxuQm%2FqlC9rrXdMp0ZMGWkoAtfU9wPfCs8SocWxzn3NRZoC3e2qS99qoCxHSy70juRruZ07PHU2eWHS0mM0%2BL5SQ70REDgy9kn%2BwkOuznykLzUuk6ZVxI1%2FytrZkUioJHTdrwP%2BbOtHDYcQpbiEygGSFQcF%2BVvbQM8dHP%2B6Qf%2FKFsgcNfRfEGe3pvahEJXX8lo8xsLofiHrooFYm7OYRw%2FI%2FQXtronfz0J8cd3lfpKN5BHWeuGWXMYjulIPTYPFbEMmm%2FoyY7YBL74R0m5m5Zz1V7hsGXa4Z%2BdM4HJXpZ1IpKmEOt4SkxcfI5EzrJYW3MntSbegBNsmzwnzdCRanMYWhdsc6YgfGzCL45Hse5EAsgq4hGqOQ72iNPJZCUfcUW8PWvxzH9wfNYD3SXVmRyLCJoU1tynKGo28QR6CGZFlVqcQnoKB18O%2FpLsUnaTYTjob%2BsBMsUedKS9ifZBl3lO4Q0WZFQG2Jt%2FOwNxWUzJsXKm6GxOumit6i9AVUnwjU6sWSYH0sCzcoCEyc7MsE%2BZ9mLraePDlF7bHk5arS3GF5mPElDaFRPue6fVYT1ijLsqJJkZoxDoBobNv85hu7RjsnXlXRD6%2BevJT8J%2B8tVGqih8fM1Vhkf9DcsMKjVgsIGOqUBdXANCm7ccjwG1slbbVJFUfOHYCv898fyD%2B2obgzJg57TCMDAoS6smraGjBzFY3x8eDvPSlsfCtOJA3njPLMRuinCgWoQLn%2F35EUu4e%2BFNPxTWDGoyGo%2BHstZv0QL1e03IwKxdPNgZEtteQP2iMUNbEv7cjRwsghdcfOACZl0tgpJ8XxLPXPozgveEv52NNBakc5FBqvv3mvtlCY19RpThyGde7ve&X-Amz-Signature=d4731933cf4a2390e9bb6b7f5a7af55cb11babfb75a05ce66e77a4c97098c024&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ2NJHOA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCmb6%2BPli4R%2F8GSQVRteVjLorgo2Mv07HSFrqmAtnWY7wIgYV6pjpKJSEW%2BTAKCjUaVrfp63epGZx%2FgnYMG%2BGscDcwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCLi%2BXnuziX7tD%2FCTircA%2BprxuQm%2FqlC9rrXdMp0ZMGWkoAtfU9wPfCs8SocWxzn3NRZoC3e2qS99qoCxHSy70juRruZ07PHU2eWHS0mM0%2BL5SQ70REDgy9kn%2BwkOuznykLzUuk6ZVxI1%2FytrZkUioJHTdrwP%2BbOtHDYcQpbiEygGSFQcF%2BVvbQM8dHP%2B6Qf%2FKFsgcNfRfEGe3pvahEJXX8lo8xsLofiHrooFYm7OYRw%2FI%2FQXtronfz0J8cd3lfpKN5BHWeuGWXMYjulIPTYPFbEMmm%2FoyY7YBL74R0m5m5Zz1V7hsGXa4Z%2BdM4HJXpZ1IpKmEOt4SkxcfI5EzrJYW3MntSbegBNsmzwnzdCRanMYWhdsc6YgfGzCL45Hse5EAsgq4hGqOQ72iNPJZCUfcUW8PWvxzH9wfNYD3SXVmRyLCJoU1tynKGo28QR6CGZFlVqcQnoKB18O%2FpLsUnaTYTjob%2BsBMsUedKS9ifZBl3lO4Q0WZFQG2Jt%2FOwNxWUzJsXKm6GxOumit6i9AVUnwjU6sWSYH0sCzcoCEyc7MsE%2BZ9mLraePDlF7bHk5arS3GF5mPElDaFRPue6fVYT1ijLsqJJkZoxDoBobNv85hu7RjsnXlXRD6%2BevJT8J%2B8tVGqih8fM1Vhkf9DcsMKjVgsIGOqUBdXANCm7ccjwG1slbbVJFUfOHYCv898fyD%2B2obgzJg57TCMDAoS6smraGjBzFY3x8eDvPSlsfCtOJA3njPLMRuinCgWoQLn%2F35EUu4e%2BFNPxTWDGoyGo%2BHstZv0QL1e03IwKxdPNgZEtteQP2iMUNbEv7cjRwsghdcfOACZl0tgpJ8XxLPXPozgveEv52NNBakc5FBqvv3mvtlCY19RpThyGde7ve&X-Amz-Signature=eebac9cb68752fce74aed89be63e76a07adc5d17291fedf06283a3abae036cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
