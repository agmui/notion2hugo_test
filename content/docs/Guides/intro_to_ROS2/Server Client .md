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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664INLO6FX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSQFJViKRv7zge6gBLPg71TZlg4hNmsAMe47oa%2Fl4wSAiA1%2BWZNS95ZoNXxJ9i7thwj91nLmX7YCNve0zSSWDWvICqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0VpUfc8ue4%2FK8d5KtwDYCeV2DlsMCB4nkkmt3CKZxHxVNTUdK5eOqgmKfbqdNFztNOx2RTf6nHCpz2XK7svReqsM0FoubY6vWDIVV%2BrQQMJd0O7ziRwmsLXKrJnoEyECvkJ83S9AIuE17ocs9XabiDTIUjoGR9BISLYtC6eNewRTmBOGCeP65UmVsjMw6JkgMBjcUHR1BBlFx%2B7cBFtWXBrWn7yQNWIFHv0XWb%2Fl9AX8FHULk2paI36Tg9bYC9ZioHWZv62A9p7uDPttZaWYl6Wi3qVkytzjyjCD%2B%2Bpc26O%2B2OhzQq3eCvMyaHZ454wdJmXdYUjrCH%2FxnnMQb64l0qU927mGgcLK1Un0t9qa2n1zjfJMpQU%2FSn9lgJz9LUccnQdZMi66%2BHKNUxML5BKu3OJ4%2FR6LKHMEd3gbSTDCwnyUsnkjAxBQ3UhQAcaWLiWvhxVRU9Ja7NsNIs2pyU7nFuuzGl0gkvfxH8xrukc045PSvWz43MHBwnsmQJpMrFGyBZufiha6Y5PifxOO82Q%2FjSYrsk7s0G%2F29WUE2Xb%2B%2BUlYfXbTuC8bKPcPrGls77ZWMlhyRJjDjE8jc7dErbIoztArKCTYqvKQyDxO28T0zZCzvqBijPtGSgFpYDUNrqSQjbccgSUmDnUiE8w%2Fd%2BFvwY6pgGjwwR%2FTtT85NEB2otOd2czabPb4Otc2%2BKOoZMCXK5rDAbv4zD1a0F0YSUAPkz3FexA6FordtF24NGslN2%2Bca1UjPcYX6yPSmoPEaIAMpNBUxEo3ddf%2Ft3TkOhkedpr6TDC2dBs5%2FgX6v13ZlyeIKoNIlWgsi0q%2BLYSRJw%2F0KuuvExa0OSkXEqXQHwW4zWXyEH%2Fhs8hHEU%2BQr6tJd9pc269%2FINpT4CH&X-Amz-Signature=7b2324f881dd18ddb59f74f46f6405f6248477705419d0cd012f5b7cb1095eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664INLO6FX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSQFJViKRv7zge6gBLPg71TZlg4hNmsAMe47oa%2Fl4wSAiA1%2BWZNS95ZoNXxJ9i7thwj91nLmX7YCNve0zSSWDWvICqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0VpUfc8ue4%2FK8d5KtwDYCeV2DlsMCB4nkkmt3CKZxHxVNTUdK5eOqgmKfbqdNFztNOx2RTf6nHCpz2XK7svReqsM0FoubY6vWDIVV%2BrQQMJd0O7ziRwmsLXKrJnoEyECvkJ83S9AIuE17ocs9XabiDTIUjoGR9BISLYtC6eNewRTmBOGCeP65UmVsjMw6JkgMBjcUHR1BBlFx%2B7cBFtWXBrWn7yQNWIFHv0XWb%2Fl9AX8FHULk2paI36Tg9bYC9ZioHWZv62A9p7uDPttZaWYl6Wi3qVkytzjyjCD%2B%2Bpc26O%2B2OhzQq3eCvMyaHZ454wdJmXdYUjrCH%2FxnnMQb64l0qU927mGgcLK1Un0t9qa2n1zjfJMpQU%2FSn9lgJz9LUccnQdZMi66%2BHKNUxML5BKu3OJ4%2FR6LKHMEd3gbSTDCwnyUsnkjAxBQ3UhQAcaWLiWvhxVRU9Ja7NsNIs2pyU7nFuuzGl0gkvfxH8xrukc045PSvWz43MHBwnsmQJpMrFGyBZufiha6Y5PifxOO82Q%2FjSYrsk7s0G%2F29WUE2Xb%2B%2BUlYfXbTuC8bKPcPrGls77ZWMlhyRJjDjE8jc7dErbIoztArKCTYqvKQyDxO28T0zZCzvqBijPtGSgFpYDUNrqSQjbccgSUmDnUiE8w%2Fd%2BFvwY6pgGjwwR%2FTtT85NEB2otOd2czabPb4Otc2%2BKOoZMCXK5rDAbv4zD1a0F0YSUAPkz3FexA6FordtF24NGslN2%2Bca1UjPcYX6yPSmoPEaIAMpNBUxEo3ddf%2Ft3TkOhkedpr6TDC2dBs5%2FgX6v13ZlyeIKoNIlWgsi0q%2BLYSRJw%2F0KuuvExa0OSkXEqXQHwW4zWXyEH%2Fhs8hHEU%2BQr6tJd9pc269%2FINpT4CH&X-Amz-Signature=9ea6ccb1eefbd18f89e8a18f69e334e0401cabf77e3573aac9faf1a465e21f83&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664INLO6FX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSQFJViKRv7zge6gBLPg71TZlg4hNmsAMe47oa%2Fl4wSAiA1%2BWZNS95ZoNXxJ9i7thwj91nLmX7YCNve0zSSWDWvICqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0VpUfc8ue4%2FK8d5KtwDYCeV2DlsMCB4nkkmt3CKZxHxVNTUdK5eOqgmKfbqdNFztNOx2RTf6nHCpz2XK7svReqsM0FoubY6vWDIVV%2BrQQMJd0O7ziRwmsLXKrJnoEyECvkJ83S9AIuE17ocs9XabiDTIUjoGR9BISLYtC6eNewRTmBOGCeP65UmVsjMw6JkgMBjcUHR1BBlFx%2B7cBFtWXBrWn7yQNWIFHv0XWb%2Fl9AX8FHULk2paI36Tg9bYC9ZioHWZv62A9p7uDPttZaWYl6Wi3qVkytzjyjCD%2B%2Bpc26O%2B2OhzQq3eCvMyaHZ454wdJmXdYUjrCH%2FxnnMQb64l0qU927mGgcLK1Un0t9qa2n1zjfJMpQU%2FSn9lgJz9LUccnQdZMi66%2BHKNUxML5BKu3OJ4%2FR6LKHMEd3gbSTDCwnyUsnkjAxBQ3UhQAcaWLiWvhxVRU9Ja7NsNIs2pyU7nFuuzGl0gkvfxH8xrukc045PSvWz43MHBwnsmQJpMrFGyBZufiha6Y5PifxOO82Q%2FjSYrsk7s0G%2F29WUE2Xb%2B%2BUlYfXbTuC8bKPcPrGls77ZWMlhyRJjDjE8jc7dErbIoztArKCTYqvKQyDxO28T0zZCzvqBijPtGSgFpYDUNrqSQjbccgSUmDnUiE8w%2Fd%2BFvwY6pgGjwwR%2FTtT85NEB2otOd2czabPb4Otc2%2BKOoZMCXK5rDAbv4zD1a0F0YSUAPkz3FexA6FordtF24NGslN2%2Bca1UjPcYX6yPSmoPEaIAMpNBUxEo3ddf%2Ft3TkOhkedpr6TDC2dBs5%2FgX6v13ZlyeIKoNIlWgsi0q%2BLYSRJw%2F0KuuvExa0OSkXEqXQHwW4zWXyEH%2Fhs8hHEU%2BQr6tJd9pc269%2FINpT4CH&X-Amz-Signature=0684c87ac76c42f3ed70d5bb249b6eab3e62b217af16b32a4a6ef98f818fc2fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664INLO6FX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSQFJViKRv7zge6gBLPg71TZlg4hNmsAMe47oa%2Fl4wSAiA1%2BWZNS95ZoNXxJ9i7thwj91nLmX7YCNve0zSSWDWvICqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0VpUfc8ue4%2FK8d5KtwDYCeV2DlsMCB4nkkmt3CKZxHxVNTUdK5eOqgmKfbqdNFztNOx2RTf6nHCpz2XK7svReqsM0FoubY6vWDIVV%2BrQQMJd0O7ziRwmsLXKrJnoEyECvkJ83S9AIuE17ocs9XabiDTIUjoGR9BISLYtC6eNewRTmBOGCeP65UmVsjMw6JkgMBjcUHR1BBlFx%2B7cBFtWXBrWn7yQNWIFHv0XWb%2Fl9AX8FHULk2paI36Tg9bYC9ZioHWZv62A9p7uDPttZaWYl6Wi3qVkytzjyjCD%2B%2Bpc26O%2B2OhzQq3eCvMyaHZ454wdJmXdYUjrCH%2FxnnMQb64l0qU927mGgcLK1Un0t9qa2n1zjfJMpQU%2FSn9lgJz9LUccnQdZMi66%2BHKNUxML5BKu3OJ4%2FR6LKHMEd3gbSTDCwnyUsnkjAxBQ3UhQAcaWLiWvhxVRU9Ja7NsNIs2pyU7nFuuzGl0gkvfxH8xrukc045PSvWz43MHBwnsmQJpMrFGyBZufiha6Y5PifxOO82Q%2FjSYrsk7s0G%2F29WUE2Xb%2B%2BUlYfXbTuC8bKPcPrGls77ZWMlhyRJjDjE8jc7dErbIoztArKCTYqvKQyDxO28T0zZCzvqBijPtGSgFpYDUNrqSQjbccgSUmDnUiE8w%2Fd%2BFvwY6pgGjwwR%2FTtT85NEB2otOd2czabPb4Otc2%2BKOoZMCXK5rDAbv4zD1a0F0YSUAPkz3FexA6FordtF24NGslN2%2Bca1UjPcYX6yPSmoPEaIAMpNBUxEo3ddf%2Ft3TkOhkedpr6TDC2dBs5%2FgX6v13ZlyeIKoNIlWgsi0q%2BLYSRJw%2F0KuuvExa0OSkXEqXQHwW4zWXyEH%2Fhs8hHEU%2BQr6tJd9pc269%2FINpT4CH&X-Amz-Signature=d9eb575b89e581a0f404bafe742b1b6587ddf1d62cfe2e28b2ee14d050688294&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664INLO6FX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSQFJViKRv7zge6gBLPg71TZlg4hNmsAMe47oa%2Fl4wSAiA1%2BWZNS95ZoNXxJ9i7thwj91nLmX7YCNve0zSSWDWvICqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0VpUfc8ue4%2FK8d5KtwDYCeV2DlsMCB4nkkmt3CKZxHxVNTUdK5eOqgmKfbqdNFztNOx2RTf6nHCpz2XK7svReqsM0FoubY6vWDIVV%2BrQQMJd0O7ziRwmsLXKrJnoEyECvkJ83S9AIuE17ocs9XabiDTIUjoGR9BISLYtC6eNewRTmBOGCeP65UmVsjMw6JkgMBjcUHR1BBlFx%2B7cBFtWXBrWn7yQNWIFHv0XWb%2Fl9AX8FHULk2paI36Tg9bYC9ZioHWZv62A9p7uDPttZaWYl6Wi3qVkytzjyjCD%2B%2Bpc26O%2B2OhzQq3eCvMyaHZ454wdJmXdYUjrCH%2FxnnMQb64l0qU927mGgcLK1Un0t9qa2n1zjfJMpQU%2FSn9lgJz9LUccnQdZMi66%2BHKNUxML5BKu3OJ4%2FR6LKHMEd3gbSTDCwnyUsnkjAxBQ3UhQAcaWLiWvhxVRU9Ja7NsNIs2pyU7nFuuzGl0gkvfxH8xrukc045PSvWz43MHBwnsmQJpMrFGyBZufiha6Y5PifxOO82Q%2FjSYrsk7s0G%2F29WUE2Xb%2B%2BUlYfXbTuC8bKPcPrGls77ZWMlhyRJjDjE8jc7dErbIoztArKCTYqvKQyDxO28T0zZCzvqBijPtGSgFpYDUNrqSQjbccgSUmDnUiE8w%2Fd%2BFvwY6pgGjwwR%2FTtT85NEB2otOd2czabPb4Otc2%2BKOoZMCXK5rDAbv4zD1a0F0YSUAPkz3FexA6FordtF24NGslN2%2Bca1UjPcYX6yPSmoPEaIAMpNBUxEo3ddf%2Ft3TkOhkedpr6TDC2dBs5%2FgX6v13ZlyeIKoNIlWgsi0q%2BLYSRJw%2F0KuuvExa0OSkXEqXQHwW4zWXyEH%2Fhs8hHEU%2BQr6tJd9pc269%2FINpT4CH&X-Amz-Signature=f8f162882af4716d6d26fa2899b07f37f5657d828ab0c79108498f7a996adc5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
