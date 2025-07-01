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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSVBVSYK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbLia95QlP7WJ0aFlnQxzSir0SojcTMu61NxZGXJNygIgPledQil3d0Ia%2BK%2FsX%2BSDlAvW38EmZqy0Tbfi7ocvkm4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlCgQ9bxlf4BOwxfyrcAxsc0n6yHGVAzuLP71pTiyy3PUmwFq7u41%2B85uMu6OFTXu3K8LOMsHXMWoE%2FRYhfoVtXz72uFRJtpSyd8uB2eDAII7lc3OLPGGayNer6WubWU%2BWuIbNIbF4sy6IuOCTmWrFtuXXYxbOAhJEgz1NhMo1QzVWux06kaTA546%2Bgn1zCC8wEpQPpKZY%2BicozTwCltZb46rY4Nh96cbR0x0SA59nYnX15%2FJJ3Aba611cpJ2ssq%2BOUHeN%2F4JrfLVvCbnJt4W2eUCi%2FWEHpCkjHS0DC5JqjY3cquLZFmL%2Br%2BNjwy%2FVRnC0Yfpcf8S1TqyhTkFBkbXnRsWaO726O6WFKMjTki9m5QtULNBaZm%2Feza8UBbauO3ImbdKjVrhyjI1UbBIMyJF9jA6HdciYkvwLjkLm6TFr5y8uZsAxCCOaVO1pZWKGWnGsah7%2Bt4quew0gsX%2FaL%2BJoLiz3yp8iLs4Hzo%2BdNrBFcMTja41yzUhf%2FWA7wTpWZWEIwkFUEcJIeOJYTlzaIDRVnUmbtfsx9q%2Feg%2BK3UvtucAwCL1ASlFpOdWs7zNFHuS%2BboGvPxeWpBFA%2B3K20P5y%2F1k8FdseiTHCoC38Hj%2B42ldsax%2Bs7t6ZjFqylQSh7ZkVb3Fl6uEtVKGj%2FWMPHIkcMGOqUBuCv7sKM87H4mKcM3Keeo1RTW5zuz17nnTBq3Sv7Ixd8BQNYNFyvjPmXuKmch9sURHWqzo9vydyCM6ymcoECFT932Zd22hRexWCTnMoWJ%2FoJD%2FLPJ8rj7f6YphTILAox%2Fhjwa2NN5HaNKaXCwux64%2FuE94gRlqoxUH8Iab4L4iuf%2BaVoXPLS0ULP0v6Op9izrxK7%2BnG5Jre7y%2BQNHv8SN2wyH4fcf&X-Amz-Signature=63e310bdcfa07a53173b64ab7f9eb57ca62d58ad392de2e246df16a56e2914b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSVBVSYK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbLia95QlP7WJ0aFlnQxzSir0SojcTMu61NxZGXJNygIgPledQil3d0Ia%2BK%2FsX%2BSDlAvW38EmZqy0Tbfi7ocvkm4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlCgQ9bxlf4BOwxfyrcAxsc0n6yHGVAzuLP71pTiyy3PUmwFq7u41%2B85uMu6OFTXu3K8LOMsHXMWoE%2FRYhfoVtXz72uFRJtpSyd8uB2eDAII7lc3OLPGGayNer6WubWU%2BWuIbNIbF4sy6IuOCTmWrFtuXXYxbOAhJEgz1NhMo1QzVWux06kaTA546%2Bgn1zCC8wEpQPpKZY%2BicozTwCltZb46rY4Nh96cbR0x0SA59nYnX15%2FJJ3Aba611cpJ2ssq%2BOUHeN%2F4JrfLVvCbnJt4W2eUCi%2FWEHpCkjHS0DC5JqjY3cquLZFmL%2Br%2BNjwy%2FVRnC0Yfpcf8S1TqyhTkFBkbXnRsWaO726O6WFKMjTki9m5QtULNBaZm%2Feza8UBbauO3ImbdKjVrhyjI1UbBIMyJF9jA6HdciYkvwLjkLm6TFr5y8uZsAxCCOaVO1pZWKGWnGsah7%2Bt4quew0gsX%2FaL%2BJoLiz3yp8iLs4Hzo%2BdNrBFcMTja41yzUhf%2FWA7wTpWZWEIwkFUEcJIeOJYTlzaIDRVnUmbtfsx9q%2Feg%2BK3UvtucAwCL1ASlFpOdWs7zNFHuS%2BboGvPxeWpBFA%2B3K20P5y%2F1k8FdseiTHCoC38Hj%2B42ldsax%2Bs7t6ZjFqylQSh7ZkVb3Fl6uEtVKGj%2FWMPHIkcMGOqUBuCv7sKM87H4mKcM3Keeo1RTW5zuz17nnTBq3Sv7Ixd8BQNYNFyvjPmXuKmch9sURHWqzo9vydyCM6ymcoECFT932Zd22hRexWCTnMoWJ%2FoJD%2FLPJ8rj7f6YphTILAox%2Fhjwa2NN5HaNKaXCwux64%2FuE94gRlqoxUH8Iab4L4iuf%2BaVoXPLS0ULP0v6Op9izrxK7%2BnG5Jre7y%2BQNHv8SN2wyH4fcf&X-Amz-Signature=05e821294db716dc64c7315e24877b64791716c70753ca1e4da7cabb1672abff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSVBVSYK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbLia95QlP7WJ0aFlnQxzSir0SojcTMu61NxZGXJNygIgPledQil3d0Ia%2BK%2FsX%2BSDlAvW38EmZqy0Tbfi7ocvkm4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlCgQ9bxlf4BOwxfyrcAxsc0n6yHGVAzuLP71pTiyy3PUmwFq7u41%2B85uMu6OFTXu3K8LOMsHXMWoE%2FRYhfoVtXz72uFRJtpSyd8uB2eDAII7lc3OLPGGayNer6WubWU%2BWuIbNIbF4sy6IuOCTmWrFtuXXYxbOAhJEgz1NhMo1QzVWux06kaTA546%2Bgn1zCC8wEpQPpKZY%2BicozTwCltZb46rY4Nh96cbR0x0SA59nYnX15%2FJJ3Aba611cpJ2ssq%2BOUHeN%2F4JrfLVvCbnJt4W2eUCi%2FWEHpCkjHS0DC5JqjY3cquLZFmL%2Br%2BNjwy%2FVRnC0Yfpcf8S1TqyhTkFBkbXnRsWaO726O6WFKMjTki9m5QtULNBaZm%2Feza8UBbauO3ImbdKjVrhyjI1UbBIMyJF9jA6HdciYkvwLjkLm6TFr5y8uZsAxCCOaVO1pZWKGWnGsah7%2Bt4quew0gsX%2FaL%2BJoLiz3yp8iLs4Hzo%2BdNrBFcMTja41yzUhf%2FWA7wTpWZWEIwkFUEcJIeOJYTlzaIDRVnUmbtfsx9q%2Feg%2BK3UvtucAwCL1ASlFpOdWs7zNFHuS%2BboGvPxeWpBFA%2B3K20P5y%2F1k8FdseiTHCoC38Hj%2B42ldsax%2Bs7t6ZjFqylQSh7ZkVb3Fl6uEtVKGj%2FWMPHIkcMGOqUBuCv7sKM87H4mKcM3Keeo1RTW5zuz17nnTBq3Sv7Ixd8BQNYNFyvjPmXuKmch9sURHWqzo9vydyCM6ymcoECFT932Zd22hRexWCTnMoWJ%2FoJD%2FLPJ8rj7f6YphTILAox%2Fhjwa2NN5HaNKaXCwux64%2FuE94gRlqoxUH8Iab4L4iuf%2BaVoXPLS0ULP0v6Op9izrxK7%2BnG5Jre7y%2BQNHv8SN2wyH4fcf&X-Amz-Signature=37ca3ca6f5142888a351a463bd871153231e7035b51233f273f8e185211d1b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSVBVSYK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbLia95QlP7WJ0aFlnQxzSir0SojcTMu61NxZGXJNygIgPledQil3d0Ia%2BK%2FsX%2BSDlAvW38EmZqy0Tbfi7ocvkm4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlCgQ9bxlf4BOwxfyrcAxsc0n6yHGVAzuLP71pTiyy3PUmwFq7u41%2B85uMu6OFTXu3K8LOMsHXMWoE%2FRYhfoVtXz72uFRJtpSyd8uB2eDAII7lc3OLPGGayNer6WubWU%2BWuIbNIbF4sy6IuOCTmWrFtuXXYxbOAhJEgz1NhMo1QzVWux06kaTA546%2Bgn1zCC8wEpQPpKZY%2BicozTwCltZb46rY4Nh96cbR0x0SA59nYnX15%2FJJ3Aba611cpJ2ssq%2BOUHeN%2F4JrfLVvCbnJt4W2eUCi%2FWEHpCkjHS0DC5JqjY3cquLZFmL%2Br%2BNjwy%2FVRnC0Yfpcf8S1TqyhTkFBkbXnRsWaO726O6WFKMjTki9m5QtULNBaZm%2Feza8UBbauO3ImbdKjVrhyjI1UbBIMyJF9jA6HdciYkvwLjkLm6TFr5y8uZsAxCCOaVO1pZWKGWnGsah7%2Bt4quew0gsX%2FaL%2BJoLiz3yp8iLs4Hzo%2BdNrBFcMTja41yzUhf%2FWA7wTpWZWEIwkFUEcJIeOJYTlzaIDRVnUmbtfsx9q%2Feg%2BK3UvtucAwCL1ASlFpOdWs7zNFHuS%2BboGvPxeWpBFA%2B3K20P5y%2F1k8FdseiTHCoC38Hj%2B42ldsax%2Bs7t6ZjFqylQSh7ZkVb3Fl6uEtVKGj%2FWMPHIkcMGOqUBuCv7sKM87H4mKcM3Keeo1RTW5zuz17nnTBq3Sv7Ixd8BQNYNFyvjPmXuKmch9sURHWqzo9vydyCM6ymcoECFT932Zd22hRexWCTnMoWJ%2FoJD%2FLPJ8rj7f6YphTILAox%2Fhjwa2NN5HaNKaXCwux64%2FuE94gRlqoxUH8Iab4L4iuf%2BaVoXPLS0ULP0v6Op9izrxK7%2BnG5Jre7y%2BQNHv8SN2wyH4fcf&X-Amz-Signature=59bb9e9ae3d643aca841c4f4a09c2a2872450b1d9e0333903e993c64989da473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSVBVSYK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbLia95QlP7WJ0aFlnQxzSir0SojcTMu61NxZGXJNygIgPledQil3d0Ia%2BK%2FsX%2BSDlAvW38EmZqy0Tbfi7ocvkm4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlCgQ9bxlf4BOwxfyrcAxsc0n6yHGVAzuLP71pTiyy3PUmwFq7u41%2B85uMu6OFTXu3K8LOMsHXMWoE%2FRYhfoVtXz72uFRJtpSyd8uB2eDAII7lc3OLPGGayNer6WubWU%2BWuIbNIbF4sy6IuOCTmWrFtuXXYxbOAhJEgz1NhMo1QzVWux06kaTA546%2Bgn1zCC8wEpQPpKZY%2BicozTwCltZb46rY4Nh96cbR0x0SA59nYnX15%2FJJ3Aba611cpJ2ssq%2BOUHeN%2F4JrfLVvCbnJt4W2eUCi%2FWEHpCkjHS0DC5JqjY3cquLZFmL%2Br%2BNjwy%2FVRnC0Yfpcf8S1TqyhTkFBkbXnRsWaO726O6WFKMjTki9m5QtULNBaZm%2Feza8UBbauO3ImbdKjVrhyjI1UbBIMyJF9jA6HdciYkvwLjkLm6TFr5y8uZsAxCCOaVO1pZWKGWnGsah7%2Bt4quew0gsX%2FaL%2BJoLiz3yp8iLs4Hzo%2BdNrBFcMTja41yzUhf%2FWA7wTpWZWEIwkFUEcJIeOJYTlzaIDRVnUmbtfsx9q%2Feg%2BK3UvtucAwCL1ASlFpOdWs7zNFHuS%2BboGvPxeWpBFA%2B3K20P5y%2F1k8FdseiTHCoC38Hj%2B42ldsax%2Bs7t6ZjFqylQSh7ZkVb3Fl6uEtVKGj%2FWMPHIkcMGOqUBuCv7sKM87H4mKcM3Keeo1RTW5zuz17nnTBq3Sv7Ixd8BQNYNFyvjPmXuKmch9sURHWqzo9vydyCM6ymcoECFT932Zd22hRexWCTnMoWJ%2FoJD%2FLPJ8rj7f6YphTILAox%2Fhjwa2NN5HaNKaXCwux64%2FuE94gRlqoxUH8Iab4L4iuf%2BaVoXPLS0ULP0v6Op9izrxK7%2BnG5Jre7y%2BQNHv8SN2wyH4fcf&X-Amz-Signature=c7f272a2b7aae1d19bf80b24b9c6f4b1899171cde5c7955d6e2ca6878f250fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
