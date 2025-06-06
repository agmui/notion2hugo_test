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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7MGE75%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIETbnVU2%2Fh%2BevFAhCNdA%2BgZ5HmdRsK%2BkDQ5qcwpRCjD%2FAiEAhT6MHqfeVd7A5S30qoZhLzU0BdD8JHM71KGf9ohppMQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDB%2BuKpFjL5Ed%2B%2FiOJCrcA3Znzwn6ZGmpHmmoKTPLGD55EwVOPObhbzntQuLRBzInSwfa%2BOmEQmg0Lf1sw8PV6w6alzpdkwJ6BHDtRK9qpGTNf7ZfShP7gYVIlToV8wf8%2FZIDgsQs8Qs1WGD2fPW%2B2zhheCOxFjaqiE6FFMVRGAdjjaGG7kDAnGhYwcN%2Bp8HftncPWfQbwK2Br0V1e0f0c4xZPUD2HjbQUblKJ56Umpj0Nj%2FkfOJnxOTL404Amwvt1aQAIZNcUaCjeRZakAnBbua1dsz0y3%2B9jpwpuI7me0paSRVHZkr5SjHSa5qwhTGUvX8Fdk5jGIjeeET5CDF6OMQPS33WdDSN4liEete6PZrhcEq88NsMFW4OouJNyrXtwnpd7PbDcwkBzPW0XUeLkST1GFLEKDkvpHh%2B8GGs6cKSRXPduPy%2ByBDpvYgbAaMk3q%2BdALuNnKhN00azmQaAIFB%2FKQjnERb7eovyTmSU%2FoqcAjBMJPeu7FtHE%2Fw53fKZiy%2FcXzYrRsLOcE7YjyOOaS90GWLAanbCZRpdccgC1AUG5SMPihyF0D0DwI5NYQKQ2uwUjLpOgGKReYJM7H8q%2BfrME8yu8B74XH7GOgFNBF6cPVvbzc8glqfj1oRYxW2YliXCa%2FlRUjKSI5D%2FMJTziMIGOqUBLryWsfH3gcjTU1cP9ayjLwptBZMuga9laXrfjqixceTnzwfUVtzg%2FzvOZB3xriTM4HBaVAJlMZmS4FVLjl6ocXqw0YWhI04alTW%2FJwCpDPEOpZqaHdAFLm2IiVFTFiMQ0RyFJMj2uzddMBU8yxAr9t11QrYvX3F0%2FOEJfQddmmaRS9YIJkVqgAfp3k4fquFGVfDFMCeVaV3t1HZPShfammTfZWGB&X-Amz-Signature=6b89864b3c38ed0b5a8a267f7ff14ce813988b0aed6553513723da2992239c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7MGE75%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIETbnVU2%2Fh%2BevFAhCNdA%2BgZ5HmdRsK%2BkDQ5qcwpRCjD%2FAiEAhT6MHqfeVd7A5S30qoZhLzU0BdD8JHM71KGf9ohppMQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDB%2BuKpFjL5Ed%2B%2FiOJCrcA3Znzwn6ZGmpHmmoKTPLGD55EwVOPObhbzntQuLRBzInSwfa%2BOmEQmg0Lf1sw8PV6w6alzpdkwJ6BHDtRK9qpGTNf7ZfShP7gYVIlToV8wf8%2FZIDgsQs8Qs1WGD2fPW%2B2zhheCOxFjaqiE6FFMVRGAdjjaGG7kDAnGhYwcN%2Bp8HftncPWfQbwK2Br0V1e0f0c4xZPUD2HjbQUblKJ56Umpj0Nj%2FkfOJnxOTL404Amwvt1aQAIZNcUaCjeRZakAnBbua1dsz0y3%2B9jpwpuI7me0paSRVHZkr5SjHSa5qwhTGUvX8Fdk5jGIjeeET5CDF6OMQPS33WdDSN4liEete6PZrhcEq88NsMFW4OouJNyrXtwnpd7PbDcwkBzPW0XUeLkST1GFLEKDkvpHh%2B8GGs6cKSRXPduPy%2ByBDpvYgbAaMk3q%2BdALuNnKhN00azmQaAIFB%2FKQjnERb7eovyTmSU%2FoqcAjBMJPeu7FtHE%2Fw53fKZiy%2FcXzYrRsLOcE7YjyOOaS90GWLAanbCZRpdccgC1AUG5SMPihyF0D0DwI5NYQKQ2uwUjLpOgGKReYJM7H8q%2BfrME8yu8B74XH7GOgFNBF6cPVvbzc8glqfj1oRYxW2YliXCa%2FlRUjKSI5D%2FMJTziMIGOqUBLryWsfH3gcjTU1cP9ayjLwptBZMuga9laXrfjqixceTnzwfUVtzg%2FzvOZB3xriTM4HBaVAJlMZmS4FVLjl6ocXqw0YWhI04alTW%2FJwCpDPEOpZqaHdAFLm2IiVFTFiMQ0RyFJMj2uzddMBU8yxAr9t11QrYvX3F0%2FOEJfQddmmaRS9YIJkVqgAfp3k4fquFGVfDFMCeVaV3t1HZPShfammTfZWGB&X-Amz-Signature=2fcc61bea3fbbd7d636bbbe7a19204d51eb1d89dfa1f3b27fb342e80d6ff3647&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7MGE75%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIETbnVU2%2Fh%2BevFAhCNdA%2BgZ5HmdRsK%2BkDQ5qcwpRCjD%2FAiEAhT6MHqfeVd7A5S30qoZhLzU0BdD8JHM71KGf9ohppMQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDB%2BuKpFjL5Ed%2B%2FiOJCrcA3Znzwn6ZGmpHmmoKTPLGD55EwVOPObhbzntQuLRBzInSwfa%2BOmEQmg0Lf1sw8PV6w6alzpdkwJ6BHDtRK9qpGTNf7ZfShP7gYVIlToV8wf8%2FZIDgsQs8Qs1WGD2fPW%2B2zhheCOxFjaqiE6FFMVRGAdjjaGG7kDAnGhYwcN%2Bp8HftncPWfQbwK2Br0V1e0f0c4xZPUD2HjbQUblKJ56Umpj0Nj%2FkfOJnxOTL404Amwvt1aQAIZNcUaCjeRZakAnBbua1dsz0y3%2B9jpwpuI7me0paSRVHZkr5SjHSa5qwhTGUvX8Fdk5jGIjeeET5CDF6OMQPS33WdDSN4liEete6PZrhcEq88NsMFW4OouJNyrXtwnpd7PbDcwkBzPW0XUeLkST1GFLEKDkvpHh%2B8GGs6cKSRXPduPy%2ByBDpvYgbAaMk3q%2BdALuNnKhN00azmQaAIFB%2FKQjnERb7eovyTmSU%2FoqcAjBMJPeu7FtHE%2Fw53fKZiy%2FcXzYrRsLOcE7YjyOOaS90GWLAanbCZRpdccgC1AUG5SMPihyF0D0DwI5NYQKQ2uwUjLpOgGKReYJM7H8q%2BfrME8yu8B74XH7GOgFNBF6cPVvbzc8glqfj1oRYxW2YliXCa%2FlRUjKSI5D%2FMJTziMIGOqUBLryWsfH3gcjTU1cP9ayjLwptBZMuga9laXrfjqixceTnzwfUVtzg%2FzvOZB3xriTM4HBaVAJlMZmS4FVLjl6ocXqw0YWhI04alTW%2FJwCpDPEOpZqaHdAFLm2IiVFTFiMQ0RyFJMj2uzddMBU8yxAr9t11QrYvX3F0%2FOEJfQddmmaRS9YIJkVqgAfp3k4fquFGVfDFMCeVaV3t1HZPShfammTfZWGB&X-Amz-Signature=10418c67871e8939f32c3608c6bf60647ef45383fe7f23acccb8612e91c58950&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7MGE75%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIETbnVU2%2Fh%2BevFAhCNdA%2BgZ5HmdRsK%2BkDQ5qcwpRCjD%2FAiEAhT6MHqfeVd7A5S30qoZhLzU0BdD8JHM71KGf9ohppMQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDB%2BuKpFjL5Ed%2B%2FiOJCrcA3Znzwn6ZGmpHmmoKTPLGD55EwVOPObhbzntQuLRBzInSwfa%2BOmEQmg0Lf1sw8PV6w6alzpdkwJ6BHDtRK9qpGTNf7ZfShP7gYVIlToV8wf8%2FZIDgsQs8Qs1WGD2fPW%2B2zhheCOxFjaqiE6FFMVRGAdjjaGG7kDAnGhYwcN%2Bp8HftncPWfQbwK2Br0V1e0f0c4xZPUD2HjbQUblKJ56Umpj0Nj%2FkfOJnxOTL404Amwvt1aQAIZNcUaCjeRZakAnBbua1dsz0y3%2B9jpwpuI7me0paSRVHZkr5SjHSa5qwhTGUvX8Fdk5jGIjeeET5CDF6OMQPS33WdDSN4liEete6PZrhcEq88NsMFW4OouJNyrXtwnpd7PbDcwkBzPW0XUeLkST1GFLEKDkvpHh%2B8GGs6cKSRXPduPy%2ByBDpvYgbAaMk3q%2BdALuNnKhN00azmQaAIFB%2FKQjnERb7eovyTmSU%2FoqcAjBMJPeu7FtHE%2Fw53fKZiy%2FcXzYrRsLOcE7YjyOOaS90GWLAanbCZRpdccgC1AUG5SMPihyF0D0DwI5NYQKQ2uwUjLpOgGKReYJM7H8q%2BfrME8yu8B74XH7GOgFNBF6cPVvbzc8glqfj1oRYxW2YliXCa%2FlRUjKSI5D%2FMJTziMIGOqUBLryWsfH3gcjTU1cP9ayjLwptBZMuga9laXrfjqixceTnzwfUVtzg%2FzvOZB3xriTM4HBaVAJlMZmS4FVLjl6ocXqw0YWhI04alTW%2FJwCpDPEOpZqaHdAFLm2IiVFTFiMQ0RyFJMj2uzddMBU8yxAr9t11QrYvX3F0%2FOEJfQddmmaRS9YIJkVqgAfp3k4fquFGVfDFMCeVaV3t1HZPShfammTfZWGB&X-Amz-Signature=793d610c9a58563cacda662bcb679b5c83b75327a95941c38396cd39fabff944&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7MGE75%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIETbnVU2%2Fh%2BevFAhCNdA%2BgZ5HmdRsK%2BkDQ5qcwpRCjD%2FAiEAhT6MHqfeVd7A5S30qoZhLzU0BdD8JHM71KGf9ohppMQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDB%2BuKpFjL5Ed%2B%2FiOJCrcA3Znzwn6ZGmpHmmoKTPLGD55EwVOPObhbzntQuLRBzInSwfa%2BOmEQmg0Lf1sw8PV6w6alzpdkwJ6BHDtRK9qpGTNf7ZfShP7gYVIlToV8wf8%2FZIDgsQs8Qs1WGD2fPW%2B2zhheCOxFjaqiE6FFMVRGAdjjaGG7kDAnGhYwcN%2Bp8HftncPWfQbwK2Br0V1e0f0c4xZPUD2HjbQUblKJ56Umpj0Nj%2FkfOJnxOTL404Amwvt1aQAIZNcUaCjeRZakAnBbua1dsz0y3%2B9jpwpuI7me0paSRVHZkr5SjHSa5qwhTGUvX8Fdk5jGIjeeET5CDF6OMQPS33WdDSN4liEete6PZrhcEq88NsMFW4OouJNyrXtwnpd7PbDcwkBzPW0XUeLkST1GFLEKDkvpHh%2B8GGs6cKSRXPduPy%2ByBDpvYgbAaMk3q%2BdALuNnKhN00azmQaAIFB%2FKQjnERb7eovyTmSU%2FoqcAjBMJPeu7FtHE%2Fw53fKZiy%2FcXzYrRsLOcE7YjyOOaS90GWLAanbCZRpdccgC1AUG5SMPihyF0D0DwI5NYQKQ2uwUjLpOgGKReYJM7H8q%2BfrME8yu8B74XH7GOgFNBF6cPVvbzc8glqfj1oRYxW2YliXCa%2FlRUjKSI5D%2FMJTziMIGOqUBLryWsfH3gcjTU1cP9ayjLwptBZMuga9laXrfjqixceTnzwfUVtzg%2FzvOZB3xriTM4HBaVAJlMZmS4FVLjl6ocXqw0YWhI04alTW%2FJwCpDPEOpZqaHdAFLm2IiVFTFiMQ0RyFJMj2uzddMBU8yxAr9t11QrYvX3F0%2FOEJfQddmmaRS9YIJkVqgAfp3k4fquFGVfDFMCeVaV3t1HZPShfammTfZWGB&X-Amz-Signature=d4289491ec384bbe8cd63459a096ddbc4c9077d065bf990173e275b1caa803c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
