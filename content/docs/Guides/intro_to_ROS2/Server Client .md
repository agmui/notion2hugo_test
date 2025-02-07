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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6QHXP3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDe770Pr6HZX6WY7kq8yc6vq%2FAC8eosba0FxRHf0mDCOgIgH3uFfwGw0zYgFQ6NopxQNrhBkJvG7FUT9uU9bl96C%2Boq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOPeCSmfnZsFOeVb%2BircA2p0SGtxY4tE3Qk41V%2Fl7dNDIV0VhfvJnFhwVU%2F1RFhBtMDXgI5jiHyM6rsbTdhQi9GQPcC20nwHAiqHPNM6W8fz1oZ3i2DKthAGM1LkhwshpyMuYhA6iCHInO0spKootc6Bn3Wb4X3mdrC7lF7EsRMmmmMoE3OHFUoaHi5hNp3kjWrX6yft71qNaZfGD07Nfq%2B1TZnlQnq1Bal%2FHNua2TRh5wDTSO0VUflQ8KIa%2F1iOmr2Eq%2FolGCy%2BV%2FuX0kaZfiKSfAU52GzKAoe%2BbCLXmDsENtnHL4vB3KaytXnQ%2FZSZJslndq%2BETQAxXPtHAOk0kwYtDl31rC8XGyk4eEAKMrRTNeCZhyl9%2BT0mYj97lO%2FjacjpjKQkW1j1uQjowthUk3Uz8CCzvDHxRn1DJ3meeS3UQI68g%2FAjcbevKjorFv7agqyv27N2VEPLVqagdNsF1A8Hz%2BTkq%2BCXLKsUbrWhniMhQW%2FL%2BRN2qeY0KUrZ9ksasxp7oWUvCUi7Qk%2BcjrBwvD6IDUlbliehEShQPnxm5%2FjoCxnQ5eyeEuVc1EGvSH8wo8gGGsMowqxlzrwo310x06mdncwGWlYJgFMsPSC99i7mwY2nySq1ciKMY6vJRFJ1F4H7phuD4slJyLLIMOb6lr0GOqUBroy%2Bp02to81xuQJtZ%2FUl6m3uBDUi3Bk%2Fnzro%2FfSRSsanJ2BEkIFIT11HETZvSo3qqxBSFMc9qbbo2UKldzuz4gKh17DKes%2BsDegDgS3L4fFbOedGX6lnJHJE5IF7xBSPDA6ZCzbl0uylmlm%2F%2FPQB7V5AvFe6CK0feEiXkJnWvXqIWVXJi%2BVwOdxO%2F3L%2FslvIYpXswaqHIDhfN%2F%2BCCjYGjVUFYLUv&X-Amz-Signature=562906b20a937ac5634011c2c33e236a4184b98c2ad26873fdfc75a37ba8ff9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6QHXP3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDe770Pr6HZX6WY7kq8yc6vq%2FAC8eosba0FxRHf0mDCOgIgH3uFfwGw0zYgFQ6NopxQNrhBkJvG7FUT9uU9bl96C%2Boq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOPeCSmfnZsFOeVb%2BircA2p0SGtxY4tE3Qk41V%2Fl7dNDIV0VhfvJnFhwVU%2F1RFhBtMDXgI5jiHyM6rsbTdhQi9GQPcC20nwHAiqHPNM6W8fz1oZ3i2DKthAGM1LkhwshpyMuYhA6iCHInO0spKootc6Bn3Wb4X3mdrC7lF7EsRMmmmMoE3OHFUoaHi5hNp3kjWrX6yft71qNaZfGD07Nfq%2B1TZnlQnq1Bal%2FHNua2TRh5wDTSO0VUflQ8KIa%2F1iOmr2Eq%2FolGCy%2BV%2FuX0kaZfiKSfAU52GzKAoe%2BbCLXmDsENtnHL4vB3KaytXnQ%2FZSZJslndq%2BETQAxXPtHAOk0kwYtDl31rC8XGyk4eEAKMrRTNeCZhyl9%2BT0mYj97lO%2FjacjpjKQkW1j1uQjowthUk3Uz8CCzvDHxRn1DJ3meeS3UQI68g%2FAjcbevKjorFv7agqyv27N2VEPLVqagdNsF1A8Hz%2BTkq%2BCXLKsUbrWhniMhQW%2FL%2BRN2qeY0KUrZ9ksasxp7oWUvCUi7Qk%2BcjrBwvD6IDUlbliehEShQPnxm5%2FjoCxnQ5eyeEuVc1EGvSH8wo8gGGsMowqxlzrwo310x06mdncwGWlYJgFMsPSC99i7mwY2nySq1ciKMY6vJRFJ1F4H7phuD4slJyLLIMOb6lr0GOqUBroy%2Bp02to81xuQJtZ%2FUl6m3uBDUi3Bk%2Fnzro%2FfSRSsanJ2BEkIFIT11HETZvSo3qqxBSFMc9qbbo2UKldzuz4gKh17DKes%2BsDegDgS3L4fFbOedGX6lnJHJE5IF7xBSPDA6ZCzbl0uylmlm%2F%2FPQB7V5AvFe6CK0feEiXkJnWvXqIWVXJi%2BVwOdxO%2F3L%2FslvIYpXswaqHIDhfN%2F%2BCCjYGjVUFYLUv&X-Amz-Signature=6cededf1c21fe760b4e09d286923dbbb4a3e4afe2ed98c963a2b6db38e020f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6QHXP3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDe770Pr6HZX6WY7kq8yc6vq%2FAC8eosba0FxRHf0mDCOgIgH3uFfwGw0zYgFQ6NopxQNrhBkJvG7FUT9uU9bl96C%2Boq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOPeCSmfnZsFOeVb%2BircA2p0SGtxY4tE3Qk41V%2Fl7dNDIV0VhfvJnFhwVU%2F1RFhBtMDXgI5jiHyM6rsbTdhQi9GQPcC20nwHAiqHPNM6W8fz1oZ3i2DKthAGM1LkhwshpyMuYhA6iCHInO0spKootc6Bn3Wb4X3mdrC7lF7EsRMmmmMoE3OHFUoaHi5hNp3kjWrX6yft71qNaZfGD07Nfq%2B1TZnlQnq1Bal%2FHNua2TRh5wDTSO0VUflQ8KIa%2F1iOmr2Eq%2FolGCy%2BV%2FuX0kaZfiKSfAU52GzKAoe%2BbCLXmDsENtnHL4vB3KaytXnQ%2FZSZJslndq%2BETQAxXPtHAOk0kwYtDl31rC8XGyk4eEAKMrRTNeCZhyl9%2BT0mYj97lO%2FjacjpjKQkW1j1uQjowthUk3Uz8CCzvDHxRn1DJ3meeS3UQI68g%2FAjcbevKjorFv7agqyv27N2VEPLVqagdNsF1A8Hz%2BTkq%2BCXLKsUbrWhniMhQW%2FL%2BRN2qeY0KUrZ9ksasxp7oWUvCUi7Qk%2BcjrBwvD6IDUlbliehEShQPnxm5%2FjoCxnQ5eyeEuVc1EGvSH8wo8gGGsMowqxlzrwo310x06mdncwGWlYJgFMsPSC99i7mwY2nySq1ciKMY6vJRFJ1F4H7phuD4slJyLLIMOb6lr0GOqUBroy%2Bp02to81xuQJtZ%2FUl6m3uBDUi3Bk%2Fnzro%2FfSRSsanJ2BEkIFIT11HETZvSo3qqxBSFMc9qbbo2UKldzuz4gKh17DKes%2BsDegDgS3L4fFbOedGX6lnJHJE5IF7xBSPDA6ZCzbl0uylmlm%2F%2FPQB7V5AvFe6CK0feEiXkJnWvXqIWVXJi%2BVwOdxO%2F3L%2FslvIYpXswaqHIDhfN%2F%2BCCjYGjVUFYLUv&X-Amz-Signature=19c7b53a426132c1ff843d609cf57ea617efd95340028aeb3cdef4f39d3fa4ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6QHXP3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDe770Pr6HZX6WY7kq8yc6vq%2FAC8eosba0FxRHf0mDCOgIgH3uFfwGw0zYgFQ6NopxQNrhBkJvG7FUT9uU9bl96C%2Boq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOPeCSmfnZsFOeVb%2BircA2p0SGtxY4tE3Qk41V%2Fl7dNDIV0VhfvJnFhwVU%2F1RFhBtMDXgI5jiHyM6rsbTdhQi9GQPcC20nwHAiqHPNM6W8fz1oZ3i2DKthAGM1LkhwshpyMuYhA6iCHInO0spKootc6Bn3Wb4X3mdrC7lF7EsRMmmmMoE3OHFUoaHi5hNp3kjWrX6yft71qNaZfGD07Nfq%2B1TZnlQnq1Bal%2FHNua2TRh5wDTSO0VUflQ8KIa%2F1iOmr2Eq%2FolGCy%2BV%2FuX0kaZfiKSfAU52GzKAoe%2BbCLXmDsENtnHL4vB3KaytXnQ%2FZSZJslndq%2BETQAxXPtHAOk0kwYtDl31rC8XGyk4eEAKMrRTNeCZhyl9%2BT0mYj97lO%2FjacjpjKQkW1j1uQjowthUk3Uz8CCzvDHxRn1DJ3meeS3UQI68g%2FAjcbevKjorFv7agqyv27N2VEPLVqagdNsF1A8Hz%2BTkq%2BCXLKsUbrWhniMhQW%2FL%2BRN2qeY0KUrZ9ksasxp7oWUvCUi7Qk%2BcjrBwvD6IDUlbliehEShQPnxm5%2FjoCxnQ5eyeEuVc1EGvSH8wo8gGGsMowqxlzrwo310x06mdncwGWlYJgFMsPSC99i7mwY2nySq1ciKMY6vJRFJ1F4H7phuD4slJyLLIMOb6lr0GOqUBroy%2Bp02to81xuQJtZ%2FUl6m3uBDUi3Bk%2Fnzro%2FfSRSsanJ2BEkIFIT11HETZvSo3qqxBSFMc9qbbo2UKldzuz4gKh17DKes%2BsDegDgS3L4fFbOedGX6lnJHJE5IF7xBSPDA6ZCzbl0uylmlm%2F%2FPQB7V5AvFe6CK0feEiXkJnWvXqIWVXJi%2BVwOdxO%2F3L%2FslvIYpXswaqHIDhfN%2F%2BCCjYGjVUFYLUv&X-Amz-Signature=70b2fafd17e9dece051db5a23732461b2764de525ab0f78b45ae4f5e71058b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6QHXP3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDe770Pr6HZX6WY7kq8yc6vq%2FAC8eosba0FxRHf0mDCOgIgH3uFfwGw0zYgFQ6NopxQNrhBkJvG7FUT9uU9bl96C%2Boq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOPeCSmfnZsFOeVb%2BircA2p0SGtxY4tE3Qk41V%2Fl7dNDIV0VhfvJnFhwVU%2F1RFhBtMDXgI5jiHyM6rsbTdhQi9GQPcC20nwHAiqHPNM6W8fz1oZ3i2DKthAGM1LkhwshpyMuYhA6iCHInO0spKootc6Bn3Wb4X3mdrC7lF7EsRMmmmMoE3OHFUoaHi5hNp3kjWrX6yft71qNaZfGD07Nfq%2B1TZnlQnq1Bal%2FHNua2TRh5wDTSO0VUflQ8KIa%2F1iOmr2Eq%2FolGCy%2BV%2FuX0kaZfiKSfAU52GzKAoe%2BbCLXmDsENtnHL4vB3KaytXnQ%2FZSZJslndq%2BETQAxXPtHAOk0kwYtDl31rC8XGyk4eEAKMrRTNeCZhyl9%2BT0mYj97lO%2FjacjpjKQkW1j1uQjowthUk3Uz8CCzvDHxRn1DJ3meeS3UQI68g%2FAjcbevKjorFv7agqyv27N2VEPLVqagdNsF1A8Hz%2BTkq%2BCXLKsUbrWhniMhQW%2FL%2BRN2qeY0KUrZ9ksasxp7oWUvCUi7Qk%2BcjrBwvD6IDUlbliehEShQPnxm5%2FjoCxnQ5eyeEuVc1EGvSH8wo8gGGsMowqxlzrwo310x06mdncwGWlYJgFMsPSC99i7mwY2nySq1ciKMY6vJRFJ1F4H7phuD4slJyLLIMOb6lr0GOqUBroy%2Bp02to81xuQJtZ%2FUl6m3uBDUi3Bk%2Fnzro%2FfSRSsanJ2BEkIFIT11HETZvSo3qqxBSFMc9qbbo2UKldzuz4gKh17DKes%2BsDegDgS3L4fFbOedGX6lnJHJE5IF7xBSPDA6ZCzbl0uylmlm%2F%2FPQB7V5AvFe6CK0feEiXkJnWvXqIWVXJi%2BVwOdxO%2F3L%2FslvIYpXswaqHIDhfN%2F%2BCCjYGjVUFYLUv&X-Amz-Signature=166b7641eb7b03bad8973eaa87620b155b98af978c00a642ec2961b1526afead&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
