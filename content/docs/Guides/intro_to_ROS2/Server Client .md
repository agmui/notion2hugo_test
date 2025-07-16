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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SNVCJD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC71Qbfb3Yxf%2BOuf7%2Fxvdtz7T5g1ad3cYYcMSXx5S%2FC%2BAiEAoW9s5W5yfS6VI5BDnYjnCnY0V0nUDr6ln31KcvHctksq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIs1sXJnZoDMVSzcVircA5%2FHkcOiU%2F6IEyUnys2nGyGfhUWCl%2FIBbPmmFdV8XR7%2Foa5fnxRK5hLsvM2OR4a9lCzCzzcoiATJm1qtn%2BY35I84AcSWUw5ZUC6uw51%2B7PIVZrmIB7KmR9Y93hqv47%2BoY7Mr9PlH3ea78LSZbkyWccmJ%2BKFrYPNTIAHzcqtb2aqFvlhNfklJpASR4LSsrmfGU9FIemcr%2F9FKrEelRgMabpIYtJM7upe3ZLOVdvMCy4OA%2BirtrETPGUDcGg3VYPri%2F%2FYIC0q9hZ3jL5VKiSQdXGaiol5QrwDaV1Iin89VPbIUw2uSZXgbdSyFt5Iq%2FKUkbTpiaTK3q9zFCk0nqH7onCXG%2BbQj%2FHlRg6gYhTAZyoMpx%2Fc4cAzlIZMii7hN7%2FPYElOCR4SWrh2elxrQT04CdU3%2FcmpI2bYL%2F3oYVyUDBLy5WQcEtbfGVkReERlTl2eqqdfvqUYotnq8HoI8vce43UQQd3ZxIswC10bLO33h8RCXlMSPo2sfkBTy5SOZl6bKq5KhbYH5%2FA8%2BeYn9eoKaVjR2bVwjtOsALvPWeOPQwm1oh%2Fg3UI6IzcSzd485CxnzDj49BOSP0eJI%2FkDsmpCi92Nz%2BnekoCyVuUiwo5XCqrH1bg5FWgED%2FeE1RTkBMLuT3sMGOqUBsKypjPGtqt5toUF%2FhMgnA47c7NQbaBU87bo4Byu%2Bcy%2F8VoTd21WsJRzjmIFwKmVwvhLs7kKfuCAKtVg7G%2FmjYfpsN2PAVk%2FD5BkvdAFRBFm2KOIJ96et8kTTBy5Z%2FWegJQ2Ax%2BhLl4LkcgB0u%2FUWcseZvCJYgE%2FOHjqYeE4i6jmA2%2FrufVkAfiJEPBSIVoOUIHmXAdDExrTwf5rIu0wOzJx7oS3Z&X-Amz-Signature=abeecddeff764d78911676a6ae1e76bba2e9ced92d39d6c9b7a6af20839c3cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SNVCJD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC71Qbfb3Yxf%2BOuf7%2Fxvdtz7T5g1ad3cYYcMSXx5S%2FC%2BAiEAoW9s5W5yfS6VI5BDnYjnCnY0V0nUDr6ln31KcvHctksq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIs1sXJnZoDMVSzcVircA5%2FHkcOiU%2F6IEyUnys2nGyGfhUWCl%2FIBbPmmFdV8XR7%2Foa5fnxRK5hLsvM2OR4a9lCzCzzcoiATJm1qtn%2BY35I84AcSWUw5ZUC6uw51%2B7PIVZrmIB7KmR9Y93hqv47%2BoY7Mr9PlH3ea78LSZbkyWccmJ%2BKFrYPNTIAHzcqtb2aqFvlhNfklJpASR4LSsrmfGU9FIemcr%2F9FKrEelRgMabpIYtJM7upe3ZLOVdvMCy4OA%2BirtrETPGUDcGg3VYPri%2F%2FYIC0q9hZ3jL5VKiSQdXGaiol5QrwDaV1Iin89VPbIUw2uSZXgbdSyFt5Iq%2FKUkbTpiaTK3q9zFCk0nqH7onCXG%2BbQj%2FHlRg6gYhTAZyoMpx%2Fc4cAzlIZMii7hN7%2FPYElOCR4SWrh2elxrQT04CdU3%2FcmpI2bYL%2F3oYVyUDBLy5WQcEtbfGVkReERlTl2eqqdfvqUYotnq8HoI8vce43UQQd3ZxIswC10bLO33h8RCXlMSPo2sfkBTy5SOZl6bKq5KhbYH5%2FA8%2BeYn9eoKaVjR2bVwjtOsALvPWeOPQwm1oh%2Fg3UI6IzcSzd485CxnzDj49BOSP0eJI%2FkDsmpCi92Nz%2BnekoCyVuUiwo5XCqrH1bg5FWgED%2FeE1RTkBMLuT3sMGOqUBsKypjPGtqt5toUF%2FhMgnA47c7NQbaBU87bo4Byu%2Bcy%2F8VoTd21WsJRzjmIFwKmVwvhLs7kKfuCAKtVg7G%2FmjYfpsN2PAVk%2FD5BkvdAFRBFm2KOIJ96et8kTTBy5Z%2FWegJQ2Ax%2BhLl4LkcgB0u%2FUWcseZvCJYgE%2FOHjqYeE4i6jmA2%2FrufVkAfiJEPBSIVoOUIHmXAdDExrTwf5rIu0wOzJx7oS3Z&X-Amz-Signature=aaa94973132c77f27ba674fcaa7e4f2da9b09097d7d460ab0332372264be30fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SNVCJD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC71Qbfb3Yxf%2BOuf7%2Fxvdtz7T5g1ad3cYYcMSXx5S%2FC%2BAiEAoW9s5W5yfS6VI5BDnYjnCnY0V0nUDr6ln31KcvHctksq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIs1sXJnZoDMVSzcVircA5%2FHkcOiU%2F6IEyUnys2nGyGfhUWCl%2FIBbPmmFdV8XR7%2Foa5fnxRK5hLsvM2OR4a9lCzCzzcoiATJm1qtn%2BY35I84AcSWUw5ZUC6uw51%2B7PIVZrmIB7KmR9Y93hqv47%2BoY7Mr9PlH3ea78LSZbkyWccmJ%2BKFrYPNTIAHzcqtb2aqFvlhNfklJpASR4LSsrmfGU9FIemcr%2F9FKrEelRgMabpIYtJM7upe3ZLOVdvMCy4OA%2BirtrETPGUDcGg3VYPri%2F%2FYIC0q9hZ3jL5VKiSQdXGaiol5QrwDaV1Iin89VPbIUw2uSZXgbdSyFt5Iq%2FKUkbTpiaTK3q9zFCk0nqH7onCXG%2BbQj%2FHlRg6gYhTAZyoMpx%2Fc4cAzlIZMii7hN7%2FPYElOCR4SWrh2elxrQT04CdU3%2FcmpI2bYL%2F3oYVyUDBLy5WQcEtbfGVkReERlTl2eqqdfvqUYotnq8HoI8vce43UQQd3ZxIswC10bLO33h8RCXlMSPo2sfkBTy5SOZl6bKq5KhbYH5%2FA8%2BeYn9eoKaVjR2bVwjtOsALvPWeOPQwm1oh%2Fg3UI6IzcSzd485CxnzDj49BOSP0eJI%2FkDsmpCi92Nz%2BnekoCyVuUiwo5XCqrH1bg5FWgED%2FeE1RTkBMLuT3sMGOqUBsKypjPGtqt5toUF%2FhMgnA47c7NQbaBU87bo4Byu%2Bcy%2F8VoTd21WsJRzjmIFwKmVwvhLs7kKfuCAKtVg7G%2FmjYfpsN2PAVk%2FD5BkvdAFRBFm2KOIJ96et8kTTBy5Z%2FWegJQ2Ax%2BhLl4LkcgB0u%2FUWcseZvCJYgE%2FOHjqYeE4i6jmA2%2FrufVkAfiJEPBSIVoOUIHmXAdDExrTwf5rIu0wOzJx7oS3Z&X-Amz-Signature=51be3cc5642fa50181246ef9abf90e0f3cb60364e2c5cd0b8c93f9ac3f1f0920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SNVCJD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC71Qbfb3Yxf%2BOuf7%2Fxvdtz7T5g1ad3cYYcMSXx5S%2FC%2BAiEAoW9s5W5yfS6VI5BDnYjnCnY0V0nUDr6ln31KcvHctksq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIs1sXJnZoDMVSzcVircA5%2FHkcOiU%2F6IEyUnys2nGyGfhUWCl%2FIBbPmmFdV8XR7%2Foa5fnxRK5hLsvM2OR4a9lCzCzzcoiATJm1qtn%2BY35I84AcSWUw5ZUC6uw51%2B7PIVZrmIB7KmR9Y93hqv47%2BoY7Mr9PlH3ea78LSZbkyWccmJ%2BKFrYPNTIAHzcqtb2aqFvlhNfklJpASR4LSsrmfGU9FIemcr%2F9FKrEelRgMabpIYtJM7upe3ZLOVdvMCy4OA%2BirtrETPGUDcGg3VYPri%2F%2FYIC0q9hZ3jL5VKiSQdXGaiol5QrwDaV1Iin89VPbIUw2uSZXgbdSyFt5Iq%2FKUkbTpiaTK3q9zFCk0nqH7onCXG%2BbQj%2FHlRg6gYhTAZyoMpx%2Fc4cAzlIZMii7hN7%2FPYElOCR4SWrh2elxrQT04CdU3%2FcmpI2bYL%2F3oYVyUDBLy5WQcEtbfGVkReERlTl2eqqdfvqUYotnq8HoI8vce43UQQd3ZxIswC10bLO33h8RCXlMSPo2sfkBTy5SOZl6bKq5KhbYH5%2FA8%2BeYn9eoKaVjR2bVwjtOsALvPWeOPQwm1oh%2Fg3UI6IzcSzd485CxnzDj49BOSP0eJI%2FkDsmpCi92Nz%2BnekoCyVuUiwo5XCqrH1bg5FWgED%2FeE1RTkBMLuT3sMGOqUBsKypjPGtqt5toUF%2FhMgnA47c7NQbaBU87bo4Byu%2Bcy%2F8VoTd21WsJRzjmIFwKmVwvhLs7kKfuCAKtVg7G%2FmjYfpsN2PAVk%2FD5BkvdAFRBFm2KOIJ96et8kTTBy5Z%2FWegJQ2Ax%2BhLl4LkcgB0u%2FUWcseZvCJYgE%2FOHjqYeE4i6jmA2%2FrufVkAfiJEPBSIVoOUIHmXAdDExrTwf5rIu0wOzJx7oS3Z&X-Amz-Signature=4132178e1e9054fd4375d7e22ffd7f8219308bd4c60e59f08496800631edaddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SNVCJD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC71Qbfb3Yxf%2BOuf7%2Fxvdtz7T5g1ad3cYYcMSXx5S%2FC%2BAiEAoW9s5W5yfS6VI5BDnYjnCnY0V0nUDr6ln31KcvHctksq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIs1sXJnZoDMVSzcVircA5%2FHkcOiU%2F6IEyUnys2nGyGfhUWCl%2FIBbPmmFdV8XR7%2Foa5fnxRK5hLsvM2OR4a9lCzCzzcoiATJm1qtn%2BY35I84AcSWUw5ZUC6uw51%2B7PIVZrmIB7KmR9Y93hqv47%2BoY7Mr9PlH3ea78LSZbkyWccmJ%2BKFrYPNTIAHzcqtb2aqFvlhNfklJpASR4LSsrmfGU9FIemcr%2F9FKrEelRgMabpIYtJM7upe3ZLOVdvMCy4OA%2BirtrETPGUDcGg3VYPri%2F%2FYIC0q9hZ3jL5VKiSQdXGaiol5QrwDaV1Iin89VPbIUw2uSZXgbdSyFt5Iq%2FKUkbTpiaTK3q9zFCk0nqH7onCXG%2BbQj%2FHlRg6gYhTAZyoMpx%2Fc4cAzlIZMii7hN7%2FPYElOCR4SWrh2elxrQT04CdU3%2FcmpI2bYL%2F3oYVyUDBLy5WQcEtbfGVkReERlTl2eqqdfvqUYotnq8HoI8vce43UQQd3ZxIswC10bLO33h8RCXlMSPo2sfkBTy5SOZl6bKq5KhbYH5%2FA8%2BeYn9eoKaVjR2bVwjtOsALvPWeOPQwm1oh%2Fg3UI6IzcSzd485CxnzDj49BOSP0eJI%2FkDsmpCi92Nz%2BnekoCyVuUiwo5XCqrH1bg5FWgED%2FeE1RTkBMLuT3sMGOqUBsKypjPGtqt5toUF%2FhMgnA47c7NQbaBU87bo4Byu%2Bcy%2F8VoTd21WsJRzjmIFwKmVwvhLs7kKfuCAKtVg7G%2FmjYfpsN2PAVk%2FD5BkvdAFRBFm2KOIJ96et8kTTBy5Z%2FWegJQ2Ax%2BhLl4LkcgB0u%2FUWcseZvCJYgE%2FOHjqYeE4i6jmA2%2FrufVkAfiJEPBSIVoOUIHmXAdDExrTwf5rIu0wOzJx7oS3Z&X-Amz-Signature=c784637b2780c96c0a68c05b299ad628e1c72b244aef62872fe4db5786791f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
