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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6CTCSW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD%2BBCtA4y93BZbEDGRkdlu%2B7y9%2BKEh3vE4CW5CDzI%2FC3gIgZTqjImjrAZHGwbvwZXek52n%2BlSTC3IhsfaRhPQgIKnsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGLonY3Nr8PYAW9G0yrcAyUL7bf%2BiNehstoUCiMi%2BbIZbMdE6m7c45O5L%2BImQKGCz3FZcK%2FrG2xL2U2fksr7T3z9245nwu8jDAqhVlqcVEHNygaIg%2Bs0p8PDdd7p%2BOFkzA6JtMD2yiw8IcTTENQAtRFXVe3HCK68dycSR1Mp6pVEJNkV6o7iooh29fsMxEIWQG0vOGlFcuVBFkyVg60TRCA6IlHg1GXmq2jur87kx%2FrJMIIHjt4oIGElDVHcmmqDZTvlZfp8VdkmSNV9fpRcp5Q%2BmieDBcz%2BMKfrZML1iYWX78Q0tuFOeMLI9Ypzi7fVloPeim4MNaKscUoaMkyUqbAq0P4wUPHTeGAao6kYMJcBPeckaq4JtthsxhkcoiNrotI29haYrYGoW1W2t6n93onmEVYPdOJ%2BUjRrTlTFGAoJGDMq%2F2z2EtWPDSRI04vTuQEpXA%2BExQjDglhq7dZFj2G%2FsW95Kmclq7%2BPXbMQxaNLTi7JsV%2BIi9%2Flgbdu9UTyiTtTOotUe89z4rBGrWa578MT6CD17wPY0k3%2BJ21kNUB3JSPP8%2F8tO0bLJMjTpmBXeana%2BPMjsjvWJkmW8rnCKW7oMS8QluZSCgQiAmMxQr9J3ftLUkPr%2BNENCm6wyJWFGt%2Fk%2FD72CRIvM%2BFKMKv0xMQGOqUBj4jkhBEBdVMEKAq%2B0PFJzVk8jKUREbzC3cmD7B38Uwc8w9EtnHf3iV9P54W5nXiHmKGfEdrMWELW%2F3Aq4CUrJDKRAZ8l8tlQHSZXRnHWthi%2BQaMtZYLUrSNOWyoDXVgn74o0CSctLL10USRLCcS3qCDvVhSpThhb6K8sWn%2FfLbPaY9nXzwcJt%2FsY0xqW6ILGzz3pfCRq5ekcnebh%2Btj9BpmBwv66&X-Amz-Signature=ce69dfd6bf6524ff6fd7aeaff784e0f1c948e090bd57e38c9096995a938e7faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6CTCSW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD%2BBCtA4y93BZbEDGRkdlu%2B7y9%2BKEh3vE4CW5CDzI%2FC3gIgZTqjImjrAZHGwbvwZXek52n%2BlSTC3IhsfaRhPQgIKnsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGLonY3Nr8PYAW9G0yrcAyUL7bf%2BiNehstoUCiMi%2BbIZbMdE6m7c45O5L%2BImQKGCz3FZcK%2FrG2xL2U2fksr7T3z9245nwu8jDAqhVlqcVEHNygaIg%2Bs0p8PDdd7p%2BOFkzA6JtMD2yiw8IcTTENQAtRFXVe3HCK68dycSR1Mp6pVEJNkV6o7iooh29fsMxEIWQG0vOGlFcuVBFkyVg60TRCA6IlHg1GXmq2jur87kx%2FrJMIIHjt4oIGElDVHcmmqDZTvlZfp8VdkmSNV9fpRcp5Q%2BmieDBcz%2BMKfrZML1iYWX78Q0tuFOeMLI9Ypzi7fVloPeim4MNaKscUoaMkyUqbAq0P4wUPHTeGAao6kYMJcBPeckaq4JtthsxhkcoiNrotI29haYrYGoW1W2t6n93onmEVYPdOJ%2BUjRrTlTFGAoJGDMq%2F2z2EtWPDSRI04vTuQEpXA%2BExQjDglhq7dZFj2G%2FsW95Kmclq7%2BPXbMQxaNLTi7JsV%2BIi9%2Flgbdu9UTyiTtTOotUe89z4rBGrWa578MT6CD17wPY0k3%2BJ21kNUB3JSPP8%2F8tO0bLJMjTpmBXeana%2BPMjsjvWJkmW8rnCKW7oMS8QluZSCgQiAmMxQr9J3ftLUkPr%2BNENCm6wyJWFGt%2Fk%2FD72CRIvM%2BFKMKv0xMQGOqUBj4jkhBEBdVMEKAq%2B0PFJzVk8jKUREbzC3cmD7B38Uwc8w9EtnHf3iV9P54W5nXiHmKGfEdrMWELW%2F3Aq4CUrJDKRAZ8l8tlQHSZXRnHWthi%2BQaMtZYLUrSNOWyoDXVgn74o0CSctLL10USRLCcS3qCDvVhSpThhb6K8sWn%2FfLbPaY9nXzwcJt%2FsY0xqW6ILGzz3pfCRq5ekcnebh%2Btj9BpmBwv66&X-Amz-Signature=348b1043667c611af1ced8acdc30a8f367864dd08a0a28d1a9e4b43336bd90db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6CTCSW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD%2BBCtA4y93BZbEDGRkdlu%2B7y9%2BKEh3vE4CW5CDzI%2FC3gIgZTqjImjrAZHGwbvwZXek52n%2BlSTC3IhsfaRhPQgIKnsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGLonY3Nr8PYAW9G0yrcAyUL7bf%2BiNehstoUCiMi%2BbIZbMdE6m7c45O5L%2BImQKGCz3FZcK%2FrG2xL2U2fksr7T3z9245nwu8jDAqhVlqcVEHNygaIg%2Bs0p8PDdd7p%2BOFkzA6JtMD2yiw8IcTTENQAtRFXVe3HCK68dycSR1Mp6pVEJNkV6o7iooh29fsMxEIWQG0vOGlFcuVBFkyVg60TRCA6IlHg1GXmq2jur87kx%2FrJMIIHjt4oIGElDVHcmmqDZTvlZfp8VdkmSNV9fpRcp5Q%2BmieDBcz%2BMKfrZML1iYWX78Q0tuFOeMLI9Ypzi7fVloPeim4MNaKscUoaMkyUqbAq0P4wUPHTeGAao6kYMJcBPeckaq4JtthsxhkcoiNrotI29haYrYGoW1W2t6n93onmEVYPdOJ%2BUjRrTlTFGAoJGDMq%2F2z2EtWPDSRI04vTuQEpXA%2BExQjDglhq7dZFj2G%2FsW95Kmclq7%2BPXbMQxaNLTi7JsV%2BIi9%2Flgbdu9UTyiTtTOotUe89z4rBGrWa578MT6CD17wPY0k3%2BJ21kNUB3JSPP8%2F8tO0bLJMjTpmBXeana%2BPMjsjvWJkmW8rnCKW7oMS8QluZSCgQiAmMxQr9J3ftLUkPr%2BNENCm6wyJWFGt%2Fk%2FD72CRIvM%2BFKMKv0xMQGOqUBj4jkhBEBdVMEKAq%2B0PFJzVk8jKUREbzC3cmD7B38Uwc8w9EtnHf3iV9P54W5nXiHmKGfEdrMWELW%2F3Aq4CUrJDKRAZ8l8tlQHSZXRnHWthi%2BQaMtZYLUrSNOWyoDXVgn74o0CSctLL10USRLCcS3qCDvVhSpThhb6K8sWn%2FfLbPaY9nXzwcJt%2FsY0xqW6ILGzz3pfCRq5ekcnebh%2Btj9BpmBwv66&X-Amz-Signature=da7f206ba1abde7e59d1c0213b4858b664aa979338e384c89b649a0da4c739bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6CTCSW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD%2BBCtA4y93BZbEDGRkdlu%2B7y9%2BKEh3vE4CW5CDzI%2FC3gIgZTqjImjrAZHGwbvwZXek52n%2BlSTC3IhsfaRhPQgIKnsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGLonY3Nr8PYAW9G0yrcAyUL7bf%2BiNehstoUCiMi%2BbIZbMdE6m7c45O5L%2BImQKGCz3FZcK%2FrG2xL2U2fksr7T3z9245nwu8jDAqhVlqcVEHNygaIg%2Bs0p8PDdd7p%2BOFkzA6JtMD2yiw8IcTTENQAtRFXVe3HCK68dycSR1Mp6pVEJNkV6o7iooh29fsMxEIWQG0vOGlFcuVBFkyVg60TRCA6IlHg1GXmq2jur87kx%2FrJMIIHjt4oIGElDVHcmmqDZTvlZfp8VdkmSNV9fpRcp5Q%2BmieDBcz%2BMKfrZML1iYWX78Q0tuFOeMLI9Ypzi7fVloPeim4MNaKscUoaMkyUqbAq0P4wUPHTeGAao6kYMJcBPeckaq4JtthsxhkcoiNrotI29haYrYGoW1W2t6n93onmEVYPdOJ%2BUjRrTlTFGAoJGDMq%2F2z2EtWPDSRI04vTuQEpXA%2BExQjDglhq7dZFj2G%2FsW95Kmclq7%2BPXbMQxaNLTi7JsV%2BIi9%2Flgbdu9UTyiTtTOotUe89z4rBGrWa578MT6CD17wPY0k3%2BJ21kNUB3JSPP8%2F8tO0bLJMjTpmBXeana%2BPMjsjvWJkmW8rnCKW7oMS8QluZSCgQiAmMxQr9J3ftLUkPr%2BNENCm6wyJWFGt%2Fk%2FD72CRIvM%2BFKMKv0xMQGOqUBj4jkhBEBdVMEKAq%2B0PFJzVk8jKUREbzC3cmD7B38Uwc8w9EtnHf3iV9P54W5nXiHmKGfEdrMWELW%2F3Aq4CUrJDKRAZ8l8tlQHSZXRnHWthi%2BQaMtZYLUrSNOWyoDXVgn74o0CSctLL10USRLCcS3qCDvVhSpThhb6K8sWn%2FfLbPaY9nXzwcJt%2FsY0xqW6ILGzz3pfCRq5ekcnebh%2Btj9BpmBwv66&X-Amz-Signature=3861693ddfd61da9dd9580e1c635143bcdbc202e20860a09f2a177ba7cb364e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6CTCSW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD%2BBCtA4y93BZbEDGRkdlu%2B7y9%2BKEh3vE4CW5CDzI%2FC3gIgZTqjImjrAZHGwbvwZXek52n%2BlSTC3IhsfaRhPQgIKnsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGLonY3Nr8PYAW9G0yrcAyUL7bf%2BiNehstoUCiMi%2BbIZbMdE6m7c45O5L%2BImQKGCz3FZcK%2FrG2xL2U2fksr7T3z9245nwu8jDAqhVlqcVEHNygaIg%2Bs0p8PDdd7p%2BOFkzA6JtMD2yiw8IcTTENQAtRFXVe3HCK68dycSR1Mp6pVEJNkV6o7iooh29fsMxEIWQG0vOGlFcuVBFkyVg60TRCA6IlHg1GXmq2jur87kx%2FrJMIIHjt4oIGElDVHcmmqDZTvlZfp8VdkmSNV9fpRcp5Q%2BmieDBcz%2BMKfrZML1iYWX78Q0tuFOeMLI9Ypzi7fVloPeim4MNaKscUoaMkyUqbAq0P4wUPHTeGAao6kYMJcBPeckaq4JtthsxhkcoiNrotI29haYrYGoW1W2t6n93onmEVYPdOJ%2BUjRrTlTFGAoJGDMq%2F2z2EtWPDSRI04vTuQEpXA%2BExQjDglhq7dZFj2G%2FsW95Kmclq7%2BPXbMQxaNLTi7JsV%2BIi9%2Flgbdu9UTyiTtTOotUe89z4rBGrWa578MT6CD17wPY0k3%2BJ21kNUB3JSPP8%2F8tO0bLJMjTpmBXeana%2BPMjsjvWJkmW8rnCKW7oMS8QluZSCgQiAmMxQr9J3ftLUkPr%2BNENCm6wyJWFGt%2Fk%2FD72CRIvM%2BFKMKv0xMQGOqUBj4jkhBEBdVMEKAq%2B0PFJzVk8jKUREbzC3cmD7B38Uwc8w9EtnHf3iV9P54W5nXiHmKGfEdrMWELW%2F3Aq4CUrJDKRAZ8l8tlQHSZXRnHWthi%2BQaMtZYLUrSNOWyoDXVgn74o0CSctLL10USRLCcS3qCDvVhSpThhb6K8sWn%2FfLbPaY9nXzwcJt%2FsY0xqW6ILGzz3pfCRq5ekcnebh%2Btj9BpmBwv66&X-Amz-Signature=6585501303e35eb291da1704dc89a07444d4a862401e65eeebac4f0ed10ac2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
