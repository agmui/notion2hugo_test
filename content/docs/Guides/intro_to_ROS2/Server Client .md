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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4EA2SB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqPS0nqC1eKXFD6DRcvubRy3mzuPVF%2FEqIipY7jwfmTAiEAzmrvzsFD6JKicnGlwg2UjfNAM%2FQCYB%2Bk0sw%2FbbiyAWcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDA2QPmbdaP6edLlHXyrcA5NroqQA%2BslgQFFtxMI0zfNfDMmtcf4Kk%2FtkuXXuFIreNLxQFZTV6kqg5Jb8sNa%2FdxBbz7GwYW%2BY6rvnSkaOvueqN65yuiRwtqOCw5dvnhv5NjhgRyr7NRO%2FXHQwZgeG09VOBNwk7eOkf8coxmqwUA1CvEG5pkLfHibOQ0kRq0Pl%2BVW%2FGR1qP2XC6FlEvxeIRlRvAc9CMmIfaYxb6cy1PW7Vjze5bv9sL6g2IiUnvuZiPZPY7gFjYGeBomZl4Bxdn9FL%2F0o9OIKpPPmhtjXCnHk6fBYiQT2wtilLf9ZvosC92A60aahgmpQFygqwsS9feZdr8qx7uBVOLrUk5J0LIvmpv%2FxyH80mOJqspF%2FiMhqXEgOL1clEy3swz%2BnCH1nzH3Nk%2FsO4G7MI%2BNQ%2FKEij204Yx2aBUmgO9EDfnXRy0awyZTKoZeUxCQslpv6swbcmjOjc9ka1G1ygLLEimf7kiC4V3aX%2F3GCnJMQtRcHqwX8Xf1BpRtQyk6EUce05F3gjmot2v%2FAQWUZPjudz8dJF7i9ubiu7U%2FsYSRfAABhQ2gYhnvVPgeXU%2Be%2Fh52uzW5NbV%2BEmtZAtTCH4o%2BxITuNAooATaPnS6julDTa8l0V%2FT%2BZJv0NHe9oaAFbp3DAYMNDRmr8GOqUB2hFKY%2FPjnmc5HAwDc7djsc64TXA%2Ff899GS3fSD63uPBWOIeTUqieCTlNV3YHUHwn9XpvwXYqjiEDkIE5T5GlVs6ehhV%2Bau7UBcRlRG2jwwK6BIUxZ5xjk0kaD5D3k86IworNV3wRO7wSeN%2ByydxVvE6Ilt8WtPkC%2FrtGHBmyt%2BhJ7UhX87oAgqjnAfwLysMxJvBLcbgK4VX4XMVmIoSKHI7xaqKe&X-Amz-Signature=e59aa793c695daed206d5688624ce5b986d542941fe2615242a26938a1b3527c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4EA2SB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqPS0nqC1eKXFD6DRcvubRy3mzuPVF%2FEqIipY7jwfmTAiEAzmrvzsFD6JKicnGlwg2UjfNAM%2FQCYB%2Bk0sw%2FbbiyAWcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDA2QPmbdaP6edLlHXyrcA5NroqQA%2BslgQFFtxMI0zfNfDMmtcf4Kk%2FtkuXXuFIreNLxQFZTV6kqg5Jb8sNa%2FdxBbz7GwYW%2BY6rvnSkaOvueqN65yuiRwtqOCw5dvnhv5NjhgRyr7NRO%2FXHQwZgeG09VOBNwk7eOkf8coxmqwUA1CvEG5pkLfHibOQ0kRq0Pl%2BVW%2FGR1qP2XC6FlEvxeIRlRvAc9CMmIfaYxb6cy1PW7Vjze5bv9sL6g2IiUnvuZiPZPY7gFjYGeBomZl4Bxdn9FL%2F0o9OIKpPPmhtjXCnHk6fBYiQT2wtilLf9ZvosC92A60aahgmpQFygqwsS9feZdr8qx7uBVOLrUk5J0LIvmpv%2FxyH80mOJqspF%2FiMhqXEgOL1clEy3swz%2BnCH1nzH3Nk%2FsO4G7MI%2BNQ%2FKEij204Yx2aBUmgO9EDfnXRy0awyZTKoZeUxCQslpv6swbcmjOjc9ka1G1ygLLEimf7kiC4V3aX%2F3GCnJMQtRcHqwX8Xf1BpRtQyk6EUce05F3gjmot2v%2FAQWUZPjudz8dJF7i9ubiu7U%2FsYSRfAABhQ2gYhnvVPgeXU%2Be%2Fh52uzW5NbV%2BEmtZAtTCH4o%2BxITuNAooATaPnS6julDTa8l0V%2FT%2BZJv0NHe9oaAFbp3DAYMNDRmr8GOqUB2hFKY%2FPjnmc5HAwDc7djsc64TXA%2Ff899GS3fSD63uPBWOIeTUqieCTlNV3YHUHwn9XpvwXYqjiEDkIE5T5GlVs6ehhV%2Bau7UBcRlRG2jwwK6BIUxZ5xjk0kaD5D3k86IworNV3wRO7wSeN%2ByydxVvE6Ilt8WtPkC%2FrtGHBmyt%2BhJ7UhX87oAgqjnAfwLysMxJvBLcbgK4VX4XMVmIoSKHI7xaqKe&X-Amz-Signature=3e9053dd3bcb4f84a1d5b8fb9e633c7e03af095f05c0eb52b07c5eccc669ca6f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4EA2SB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqPS0nqC1eKXFD6DRcvubRy3mzuPVF%2FEqIipY7jwfmTAiEAzmrvzsFD6JKicnGlwg2UjfNAM%2FQCYB%2Bk0sw%2FbbiyAWcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDA2QPmbdaP6edLlHXyrcA5NroqQA%2BslgQFFtxMI0zfNfDMmtcf4Kk%2FtkuXXuFIreNLxQFZTV6kqg5Jb8sNa%2FdxBbz7GwYW%2BY6rvnSkaOvueqN65yuiRwtqOCw5dvnhv5NjhgRyr7NRO%2FXHQwZgeG09VOBNwk7eOkf8coxmqwUA1CvEG5pkLfHibOQ0kRq0Pl%2BVW%2FGR1qP2XC6FlEvxeIRlRvAc9CMmIfaYxb6cy1PW7Vjze5bv9sL6g2IiUnvuZiPZPY7gFjYGeBomZl4Bxdn9FL%2F0o9OIKpPPmhtjXCnHk6fBYiQT2wtilLf9ZvosC92A60aahgmpQFygqwsS9feZdr8qx7uBVOLrUk5J0LIvmpv%2FxyH80mOJqspF%2FiMhqXEgOL1clEy3swz%2BnCH1nzH3Nk%2FsO4G7MI%2BNQ%2FKEij204Yx2aBUmgO9EDfnXRy0awyZTKoZeUxCQslpv6swbcmjOjc9ka1G1ygLLEimf7kiC4V3aX%2F3GCnJMQtRcHqwX8Xf1BpRtQyk6EUce05F3gjmot2v%2FAQWUZPjudz8dJF7i9ubiu7U%2FsYSRfAABhQ2gYhnvVPgeXU%2Be%2Fh52uzW5NbV%2BEmtZAtTCH4o%2BxITuNAooATaPnS6julDTa8l0V%2FT%2BZJv0NHe9oaAFbp3DAYMNDRmr8GOqUB2hFKY%2FPjnmc5HAwDc7djsc64TXA%2Ff899GS3fSD63uPBWOIeTUqieCTlNV3YHUHwn9XpvwXYqjiEDkIE5T5GlVs6ehhV%2Bau7UBcRlRG2jwwK6BIUxZ5xjk0kaD5D3k86IworNV3wRO7wSeN%2ByydxVvE6Ilt8WtPkC%2FrtGHBmyt%2BhJ7UhX87oAgqjnAfwLysMxJvBLcbgK4VX4XMVmIoSKHI7xaqKe&X-Amz-Signature=615b6667a2a1591efbef8ebb8e621e493208e7bbf0b80b521ef65d487a565ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4EA2SB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqPS0nqC1eKXFD6DRcvubRy3mzuPVF%2FEqIipY7jwfmTAiEAzmrvzsFD6JKicnGlwg2UjfNAM%2FQCYB%2Bk0sw%2FbbiyAWcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDA2QPmbdaP6edLlHXyrcA5NroqQA%2BslgQFFtxMI0zfNfDMmtcf4Kk%2FtkuXXuFIreNLxQFZTV6kqg5Jb8sNa%2FdxBbz7GwYW%2BY6rvnSkaOvueqN65yuiRwtqOCw5dvnhv5NjhgRyr7NRO%2FXHQwZgeG09VOBNwk7eOkf8coxmqwUA1CvEG5pkLfHibOQ0kRq0Pl%2BVW%2FGR1qP2XC6FlEvxeIRlRvAc9CMmIfaYxb6cy1PW7Vjze5bv9sL6g2IiUnvuZiPZPY7gFjYGeBomZl4Bxdn9FL%2F0o9OIKpPPmhtjXCnHk6fBYiQT2wtilLf9ZvosC92A60aahgmpQFygqwsS9feZdr8qx7uBVOLrUk5J0LIvmpv%2FxyH80mOJqspF%2FiMhqXEgOL1clEy3swz%2BnCH1nzH3Nk%2FsO4G7MI%2BNQ%2FKEij204Yx2aBUmgO9EDfnXRy0awyZTKoZeUxCQslpv6swbcmjOjc9ka1G1ygLLEimf7kiC4V3aX%2F3GCnJMQtRcHqwX8Xf1BpRtQyk6EUce05F3gjmot2v%2FAQWUZPjudz8dJF7i9ubiu7U%2FsYSRfAABhQ2gYhnvVPgeXU%2Be%2Fh52uzW5NbV%2BEmtZAtTCH4o%2BxITuNAooATaPnS6julDTa8l0V%2FT%2BZJv0NHe9oaAFbp3DAYMNDRmr8GOqUB2hFKY%2FPjnmc5HAwDc7djsc64TXA%2Ff899GS3fSD63uPBWOIeTUqieCTlNV3YHUHwn9XpvwXYqjiEDkIE5T5GlVs6ehhV%2Bau7UBcRlRG2jwwK6BIUxZ5xjk0kaD5D3k86IworNV3wRO7wSeN%2ByydxVvE6Ilt8WtPkC%2FrtGHBmyt%2BhJ7UhX87oAgqjnAfwLysMxJvBLcbgK4VX4XMVmIoSKHI7xaqKe&X-Amz-Signature=494f7993cc87388057816ac64488019052a5bc8cca84edcc195f78eee499d26b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4EA2SB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqPS0nqC1eKXFD6DRcvubRy3mzuPVF%2FEqIipY7jwfmTAiEAzmrvzsFD6JKicnGlwg2UjfNAM%2FQCYB%2Bk0sw%2FbbiyAWcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDA2QPmbdaP6edLlHXyrcA5NroqQA%2BslgQFFtxMI0zfNfDMmtcf4Kk%2FtkuXXuFIreNLxQFZTV6kqg5Jb8sNa%2FdxBbz7GwYW%2BY6rvnSkaOvueqN65yuiRwtqOCw5dvnhv5NjhgRyr7NRO%2FXHQwZgeG09VOBNwk7eOkf8coxmqwUA1CvEG5pkLfHibOQ0kRq0Pl%2BVW%2FGR1qP2XC6FlEvxeIRlRvAc9CMmIfaYxb6cy1PW7Vjze5bv9sL6g2IiUnvuZiPZPY7gFjYGeBomZl4Bxdn9FL%2F0o9OIKpPPmhtjXCnHk6fBYiQT2wtilLf9ZvosC92A60aahgmpQFygqwsS9feZdr8qx7uBVOLrUk5J0LIvmpv%2FxyH80mOJqspF%2FiMhqXEgOL1clEy3swz%2BnCH1nzH3Nk%2FsO4G7MI%2BNQ%2FKEij204Yx2aBUmgO9EDfnXRy0awyZTKoZeUxCQslpv6swbcmjOjc9ka1G1ygLLEimf7kiC4V3aX%2F3GCnJMQtRcHqwX8Xf1BpRtQyk6EUce05F3gjmot2v%2FAQWUZPjudz8dJF7i9ubiu7U%2FsYSRfAABhQ2gYhnvVPgeXU%2Be%2Fh52uzW5NbV%2BEmtZAtTCH4o%2BxITuNAooATaPnS6julDTa8l0V%2FT%2BZJv0NHe9oaAFbp3DAYMNDRmr8GOqUB2hFKY%2FPjnmc5HAwDc7djsc64TXA%2Ff899GS3fSD63uPBWOIeTUqieCTlNV3YHUHwn9XpvwXYqjiEDkIE5T5GlVs6ehhV%2Bau7UBcRlRG2jwwK6BIUxZ5xjk0kaD5D3k86IworNV3wRO7wSeN%2ByydxVvE6Ilt8WtPkC%2FrtGHBmyt%2BhJ7UhX87oAgqjnAfwLysMxJvBLcbgK4VX4XMVmIoSKHI7xaqKe&X-Amz-Signature=de8a25d3f2a6af92fba6e2eca44da4fc4a42892c197332155ed970f30b0013ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
