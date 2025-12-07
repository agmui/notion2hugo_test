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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHLW45G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjX6ZpbjpPP4LDPu2WKFTlrlxpuarCdBM%2F1w6Kdg1XXAiACvw0DecwiyuTEEmLSRsdQAfvja1JcJxpi7CIUbgHa3SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM32Sx55VE6Re8Cj5gKtwDvvihbMgwNf0901Zc6W7IUmtvFRb%2BskXQXvM1SbVMmsxr8LRYEjSpOFnyyTD8Txz7S9LyLSkZrxg0oxgyFtYUDFcgIRBv5Yc7rY7o%2FPNmnk7QehnW2tqovdHKBm6uTJi9Tc4qrlTPj8aCbeXZBLWwuLWx0YSzIogv92mlHzQLN88P0hzO%2B3ck7o1kdlEWE%2BFscMIbkuu9Gbj1C1O9DepRUQSV%2Flb%2BrHP5cDdrLHUymbkdeNrjbnFwilpnFntqcTUSBg47ByuvRJCJRfFBoomNeHIb0D314v2xz7jhUHRRy%2B%2B8rnewz2HfUbAWMrRG9hDTEkbbrl9EhIwFHRzFp7GMlWABJvOB7MTxZV6jIrtQtlwiuTbLwOms%2BDRdxQZugw81pehX0anscfOvUwpYVxodeoiy2yRiWOyInmiRtPMQED%2FR7TsJt1KQUEuBKOIsj%2FmIAvpwSSuQHUXFWf5RrNwSMHJeAOSdQklqskbbz1p0oVxhkmjsYOK55boLLH25Pc22xtocEoQRhga8MhF45Nz6Ihd3uN1hDtOjN4Er9Ax3YE4n7CgH%2BNAkD4MJpJteww0hm5E%2FXO5lKGc3ptEs54T5%2Bb725IJQBRIuocCKjDiQfzaN19izOmj0dmfEtgsw8v3SyQY6pgHgH7D591we7fYJmWPnAdE4%2Fn54a3h9GY%2BCYJRUJzGR3BAHWC8d7uRGywk0Bm0Xan7sDvfhN2g70%2BtHuEfUk%2B%2BBMd0b98Iu3Kr784F9LrR2nPum10vGKCdl5LQ3xiG%2BCRa645cfkAblNeEFJTw%2BHOtu1KCL7dJKlocBiAGI6%2Blb8cu4TiF5vQfEt3Uzimmd302gbqfpFc6lYFQ7oISmsCRbt1VlM9Ea&X-Amz-Signature=ee604a4b0cf82a62d6567ceadc1b8da733490a794db2637bde62834503b2e2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHLW45G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjX6ZpbjpPP4LDPu2WKFTlrlxpuarCdBM%2F1w6Kdg1XXAiACvw0DecwiyuTEEmLSRsdQAfvja1JcJxpi7CIUbgHa3SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM32Sx55VE6Re8Cj5gKtwDvvihbMgwNf0901Zc6W7IUmtvFRb%2BskXQXvM1SbVMmsxr8LRYEjSpOFnyyTD8Txz7S9LyLSkZrxg0oxgyFtYUDFcgIRBv5Yc7rY7o%2FPNmnk7QehnW2tqovdHKBm6uTJi9Tc4qrlTPj8aCbeXZBLWwuLWx0YSzIogv92mlHzQLN88P0hzO%2B3ck7o1kdlEWE%2BFscMIbkuu9Gbj1C1O9DepRUQSV%2Flb%2BrHP5cDdrLHUymbkdeNrjbnFwilpnFntqcTUSBg47ByuvRJCJRfFBoomNeHIb0D314v2xz7jhUHRRy%2B%2B8rnewz2HfUbAWMrRG9hDTEkbbrl9EhIwFHRzFp7GMlWABJvOB7MTxZV6jIrtQtlwiuTbLwOms%2BDRdxQZugw81pehX0anscfOvUwpYVxodeoiy2yRiWOyInmiRtPMQED%2FR7TsJt1KQUEuBKOIsj%2FmIAvpwSSuQHUXFWf5RrNwSMHJeAOSdQklqskbbz1p0oVxhkmjsYOK55boLLH25Pc22xtocEoQRhga8MhF45Nz6Ihd3uN1hDtOjN4Er9Ax3YE4n7CgH%2BNAkD4MJpJteww0hm5E%2FXO5lKGc3ptEs54T5%2Bb725IJQBRIuocCKjDiQfzaN19izOmj0dmfEtgsw8v3SyQY6pgHgH7D591we7fYJmWPnAdE4%2Fn54a3h9GY%2BCYJRUJzGR3BAHWC8d7uRGywk0Bm0Xan7sDvfhN2g70%2BtHuEfUk%2B%2BBMd0b98Iu3Kr784F9LrR2nPum10vGKCdl5LQ3xiG%2BCRa645cfkAblNeEFJTw%2BHOtu1KCL7dJKlocBiAGI6%2Blb8cu4TiF5vQfEt3Uzimmd302gbqfpFc6lYFQ7oISmsCRbt1VlM9Ea&X-Amz-Signature=24f4276c77ad9fa5ce63175653a75039977a2595a112f33acd2dfe182f097bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHLW45G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjX6ZpbjpPP4LDPu2WKFTlrlxpuarCdBM%2F1w6Kdg1XXAiACvw0DecwiyuTEEmLSRsdQAfvja1JcJxpi7CIUbgHa3SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM32Sx55VE6Re8Cj5gKtwDvvihbMgwNf0901Zc6W7IUmtvFRb%2BskXQXvM1SbVMmsxr8LRYEjSpOFnyyTD8Txz7S9LyLSkZrxg0oxgyFtYUDFcgIRBv5Yc7rY7o%2FPNmnk7QehnW2tqovdHKBm6uTJi9Tc4qrlTPj8aCbeXZBLWwuLWx0YSzIogv92mlHzQLN88P0hzO%2B3ck7o1kdlEWE%2BFscMIbkuu9Gbj1C1O9DepRUQSV%2Flb%2BrHP5cDdrLHUymbkdeNrjbnFwilpnFntqcTUSBg47ByuvRJCJRfFBoomNeHIb0D314v2xz7jhUHRRy%2B%2B8rnewz2HfUbAWMrRG9hDTEkbbrl9EhIwFHRzFp7GMlWABJvOB7MTxZV6jIrtQtlwiuTbLwOms%2BDRdxQZugw81pehX0anscfOvUwpYVxodeoiy2yRiWOyInmiRtPMQED%2FR7TsJt1KQUEuBKOIsj%2FmIAvpwSSuQHUXFWf5RrNwSMHJeAOSdQklqskbbz1p0oVxhkmjsYOK55boLLH25Pc22xtocEoQRhga8MhF45Nz6Ihd3uN1hDtOjN4Er9Ax3YE4n7CgH%2BNAkD4MJpJteww0hm5E%2FXO5lKGc3ptEs54T5%2Bb725IJQBRIuocCKjDiQfzaN19izOmj0dmfEtgsw8v3SyQY6pgHgH7D591we7fYJmWPnAdE4%2Fn54a3h9GY%2BCYJRUJzGR3BAHWC8d7uRGywk0Bm0Xan7sDvfhN2g70%2BtHuEfUk%2B%2BBMd0b98Iu3Kr784F9LrR2nPum10vGKCdl5LQ3xiG%2BCRa645cfkAblNeEFJTw%2BHOtu1KCL7dJKlocBiAGI6%2Blb8cu4TiF5vQfEt3Uzimmd302gbqfpFc6lYFQ7oISmsCRbt1VlM9Ea&X-Amz-Signature=23150410a591558ea9e41aa93c64dc7b8f5997ac1ee7331ff2dfb6f74e786f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHLW45G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjX6ZpbjpPP4LDPu2WKFTlrlxpuarCdBM%2F1w6Kdg1XXAiACvw0DecwiyuTEEmLSRsdQAfvja1JcJxpi7CIUbgHa3SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM32Sx55VE6Re8Cj5gKtwDvvihbMgwNf0901Zc6W7IUmtvFRb%2BskXQXvM1SbVMmsxr8LRYEjSpOFnyyTD8Txz7S9LyLSkZrxg0oxgyFtYUDFcgIRBv5Yc7rY7o%2FPNmnk7QehnW2tqovdHKBm6uTJi9Tc4qrlTPj8aCbeXZBLWwuLWx0YSzIogv92mlHzQLN88P0hzO%2B3ck7o1kdlEWE%2BFscMIbkuu9Gbj1C1O9DepRUQSV%2Flb%2BrHP5cDdrLHUymbkdeNrjbnFwilpnFntqcTUSBg47ByuvRJCJRfFBoomNeHIb0D314v2xz7jhUHRRy%2B%2B8rnewz2HfUbAWMrRG9hDTEkbbrl9EhIwFHRzFp7GMlWABJvOB7MTxZV6jIrtQtlwiuTbLwOms%2BDRdxQZugw81pehX0anscfOvUwpYVxodeoiy2yRiWOyInmiRtPMQED%2FR7TsJt1KQUEuBKOIsj%2FmIAvpwSSuQHUXFWf5RrNwSMHJeAOSdQklqskbbz1p0oVxhkmjsYOK55boLLH25Pc22xtocEoQRhga8MhF45Nz6Ihd3uN1hDtOjN4Er9Ax3YE4n7CgH%2BNAkD4MJpJteww0hm5E%2FXO5lKGc3ptEs54T5%2Bb725IJQBRIuocCKjDiQfzaN19izOmj0dmfEtgsw8v3SyQY6pgHgH7D591we7fYJmWPnAdE4%2Fn54a3h9GY%2BCYJRUJzGR3BAHWC8d7uRGywk0Bm0Xan7sDvfhN2g70%2BtHuEfUk%2B%2BBMd0b98Iu3Kr784F9LrR2nPum10vGKCdl5LQ3xiG%2BCRa645cfkAblNeEFJTw%2BHOtu1KCL7dJKlocBiAGI6%2Blb8cu4TiF5vQfEt3Uzimmd302gbqfpFc6lYFQ7oISmsCRbt1VlM9Ea&X-Amz-Signature=7aa20cbf661eba37fba7da7ae8162ab2784daa2e672769c6055101c053b53a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHLW45G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjX6ZpbjpPP4LDPu2WKFTlrlxpuarCdBM%2F1w6Kdg1XXAiACvw0DecwiyuTEEmLSRsdQAfvja1JcJxpi7CIUbgHa3SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM32Sx55VE6Re8Cj5gKtwDvvihbMgwNf0901Zc6W7IUmtvFRb%2BskXQXvM1SbVMmsxr8LRYEjSpOFnyyTD8Txz7S9LyLSkZrxg0oxgyFtYUDFcgIRBv5Yc7rY7o%2FPNmnk7QehnW2tqovdHKBm6uTJi9Tc4qrlTPj8aCbeXZBLWwuLWx0YSzIogv92mlHzQLN88P0hzO%2B3ck7o1kdlEWE%2BFscMIbkuu9Gbj1C1O9DepRUQSV%2Flb%2BrHP5cDdrLHUymbkdeNrjbnFwilpnFntqcTUSBg47ByuvRJCJRfFBoomNeHIb0D314v2xz7jhUHRRy%2B%2B8rnewz2HfUbAWMrRG9hDTEkbbrl9EhIwFHRzFp7GMlWABJvOB7MTxZV6jIrtQtlwiuTbLwOms%2BDRdxQZugw81pehX0anscfOvUwpYVxodeoiy2yRiWOyInmiRtPMQED%2FR7TsJt1KQUEuBKOIsj%2FmIAvpwSSuQHUXFWf5RrNwSMHJeAOSdQklqskbbz1p0oVxhkmjsYOK55boLLH25Pc22xtocEoQRhga8MhF45Nz6Ihd3uN1hDtOjN4Er9Ax3YE4n7CgH%2BNAkD4MJpJteww0hm5E%2FXO5lKGc3ptEs54T5%2Bb725IJQBRIuocCKjDiQfzaN19izOmj0dmfEtgsw8v3SyQY6pgHgH7D591we7fYJmWPnAdE4%2Fn54a3h9GY%2BCYJRUJzGR3BAHWC8d7uRGywk0Bm0Xan7sDvfhN2g70%2BtHuEfUk%2B%2BBMd0b98Iu3Kr784F9LrR2nPum10vGKCdl5LQ3xiG%2BCRa645cfkAblNeEFJTw%2BHOtu1KCL7dJKlocBiAGI6%2Blb8cu4TiF5vQfEt3Uzimmd302gbqfpFc6lYFQ7oISmsCRbt1VlM9Ea&X-Amz-Signature=a0398fb4f6db5b94bd8dc77c689c0ae754c36c6200cc1339970a4e9260c188ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
