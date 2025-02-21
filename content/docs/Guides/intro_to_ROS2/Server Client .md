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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMC7QOK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuXpP3oM8UZB4DZVQJHQYh1cdLlxHoZmHMXcavD1F8kAiEAixDIKfy5t5kU3uztmKh4nxEPxJM4oi4nN936aSbX0AoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYOQ04M6A%2F1k1bcgircA3Jk6ZO61tTIUqyu9VQNyTygEZXIUdfIz%2B%2FO%2Fabl2jyS76h5i2%2B0exLV7Wl1%2BzRbUF5oG5KKQCMfk%2Fz6Tm3V%2FKV4xDuo%2FQjZNbquyxD7WzQvTjyVlb2DrAXcknYXtnqelh%2FTYS6G6jG3gB4AjNrX%2B1ucvplxQ7%2F4XUpISCmrNxrRDSVpo3qZGbaPgMtIWKr1sNUaQQqWBlWzLJ%2Fb6JEReZPIyuhtmLKGTmvMtsgqw7QS8fVWn0yjg269u4SpI8wvfHjN3pAYAYX7b1P5HB5AfU3Tg3IojUIXOJBqdhXaTw4DH%2F9t3aDIKXX%2FoHLZcDdxBdZ2qZZvsa9Bc%2F1QhQn6N%2BRRFrBvpUuHCE9JbnZROIACXVMpnvao%2FwD79bcQGOLHLZ%2BI0UOAWlN4gaEGQtTUP%2FzgDMiqBhjmu%2FWIN9DZ1hyRFtQDlXPf8v986KMJiwlt6aQGh8e78iTjFxAVL5VxnAic7IWbqn9nDCpueKR9MfWs16gb8EkGTLJIcZ59VxUhdc2mtzjudCg6uNAm5lF3%2BFXY1A%2FLCamSNMlcS2gPYJtoLVyU%2B4ljy93wKkw8M0bEZqoW%2F90w%2B0IrhnXu0MkY2MuEJfMuURelZk0hwS0ZqPJ5sPw4wb9NaZIGMjWOMJfl4b0GOqUBb%2FmNI%2FLwDKrJYC039j7Aq%2B8mAdSZvINmSmTlhUnS7%2BgUkFC%2FL8m5YchttxKKvISwUdvyj7nXeiozJqigiz99PwjoyiU6o2DeI28U2VAtrMLjLnSNLVWKUx4Qi%2BADVVz%2FRK6z43G%2Fbhe2ynaWWKk1rQ0ogdxNlnsZF8z4qeRPsEfr5XuaiMzIySNKRoimul%2BuQARlOaCjR8RtsZ1WR%2FtYkJ2YLapo&X-Amz-Signature=9f12ce4cbde48a4a1bd26a34a2b496943fd1146c7c04e6f1ba9ccaaa72d082c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMC7QOK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuXpP3oM8UZB4DZVQJHQYh1cdLlxHoZmHMXcavD1F8kAiEAixDIKfy5t5kU3uztmKh4nxEPxJM4oi4nN936aSbX0AoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYOQ04M6A%2F1k1bcgircA3Jk6ZO61tTIUqyu9VQNyTygEZXIUdfIz%2B%2FO%2Fabl2jyS76h5i2%2B0exLV7Wl1%2BzRbUF5oG5KKQCMfk%2Fz6Tm3V%2FKV4xDuo%2FQjZNbquyxD7WzQvTjyVlb2DrAXcknYXtnqelh%2FTYS6G6jG3gB4AjNrX%2B1ucvplxQ7%2F4XUpISCmrNxrRDSVpo3qZGbaPgMtIWKr1sNUaQQqWBlWzLJ%2Fb6JEReZPIyuhtmLKGTmvMtsgqw7QS8fVWn0yjg269u4SpI8wvfHjN3pAYAYX7b1P5HB5AfU3Tg3IojUIXOJBqdhXaTw4DH%2F9t3aDIKXX%2FoHLZcDdxBdZ2qZZvsa9Bc%2F1QhQn6N%2BRRFrBvpUuHCE9JbnZROIACXVMpnvao%2FwD79bcQGOLHLZ%2BI0UOAWlN4gaEGQtTUP%2FzgDMiqBhjmu%2FWIN9DZ1hyRFtQDlXPf8v986KMJiwlt6aQGh8e78iTjFxAVL5VxnAic7IWbqn9nDCpueKR9MfWs16gb8EkGTLJIcZ59VxUhdc2mtzjudCg6uNAm5lF3%2BFXY1A%2FLCamSNMlcS2gPYJtoLVyU%2B4ljy93wKkw8M0bEZqoW%2F90w%2B0IrhnXu0MkY2MuEJfMuURelZk0hwS0ZqPJ5sPw4wb9NaZIGMjWOMJfl4b0GOqUBb%2FmNI%2FLwDKrJYC039j7Aq%2B8mAdSZvINmSmTlhUnS7%2BgUkFC%2FL8m5YchttxKKvISwUdvyj7nXeiozJqigiz99PwjoyiU6o2DeI28U2VAtrMLjLnSNLVWKUx4Qi%2BADVVz%2FRK6z43G%2Fbhe2ynaWWKk1rQ0ogdxNlnsZF8z4qeRPsEfr5XuaiMzIySNKRoimul%2BuQARlOaCjR8RtsZ1WR%2FtYkJ2YLapo&X-Amz-Signature=61cff564f795ca4f8e9e88e9250152cdf18647016bea9f422d2f04d570854439&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMC7QOK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuXpP3oM8UZB4DZVQJHQYh1cdLlxHoZmHMXcavD1F8kAiEAixDIKfy5t5kU3uztmKh4nxEPxJM4oi4nN936aSbX0AoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYOQ04M6A%2F1k1bcgircA3Jk6ZO61tTIUqyu9VQNyTygEZXIUdfIz%2B%2FO%2Fabl2jyS76h5i2%2B0exLV7Wl1%2BzRbUF5oG5KKQCMfk%2Fz6Tm3V%2FKV4xDuo%2FQjZNbquyxD7WzQvTjyVlb2DrAXcknYXtnqelh%2FTYS6G6jG3gB4AjNrX%2B1ucvplxQ7%2F4XUpISCmrNxrRDSVpo3qZGbaPgMtIWKr1sNUaQQqWBlWzLJ%2Fb6JEReZPIyuhtmLKGTmvMtsgqw7QS8fVWn0yjg269u4SpI8wvfHjN3pAYAYX7b1P5HB5AfU3Tg3IojUIXOJBqdhXaTw4DH%2F9t3aDIKXX%2FoHLZcDdxBdZ2qZZvsa9Bc%2F1QhQn6N%2BRRFrBvpUuHCE9JbnZROIACXVMpnvao%2FwD79bcQGOLHLZ%2BI0UOAWlN4gaEGQtTUP%2FzgDMiqBhjmu%2FWIN9DZ1hyRFtQDlXPf8v986KMJiwlt6aQGh8e78iTjFxAVL5VxnAic7IWbqn9nDCpueKR9MfWs16gb8EkGTLJIcZ59VxUhdc2mtzjudCg6uNAm5lF3%2BFXY1A%2FLCamSNMlcS2gPYJtoLVyU%2B4ljy93wKkw8M0bEZqoW%2F90w%2B0IrhnXu0MkY2MuEJfMuURelZk0hwS0ZqPJ5sPw4wb9NaZIGMjWOMJfl4b0GOqUBb%2FmNI%2FLwDKrJYC039j7Aq%2B8mAdSZvINmSmTlhUnS7%2BgUkFC%2FL8m5YchttxKKvISwUdvyj7nXeiozJqigiz99PwjoyiU6o2DeI28U2VAtrMLjLnSNLVWKUx4Qi%2BADVVz%2FRK6z43G%2Fbhe2ynaWWKk1rQ0ogdxNlnsZF8z4qeRPsEfr5XuaiMzIySNKRoimul%2BuQARlOaCjR8RtsZ1WR%2FtYkJ2YLapo&X-Amz-Signature=adf55405734496db9f24e25a056e2983c136091fb13139e927d64d973be4f37c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMC7QOK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuXpP3oM8UZB4DZVQJHQYh1cdLlxHoZmHMXcavD1F8kAiEAixDIKfy5t5kU3uztmKh4nxEPxJM4oi4nN936aSbX0AoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYOQ04M6A%2F1k1bcgircA3Jk6ZO61tTIUqyu9VQNyTygEZXIUdfIz%2B%2FO%2Fabl2jyS76h5i2%2B0exLV7Wl1%2BzRbUF5oG5KKQCMfk%2Fz6Tm3V%2FKV4xDuo%2FQjZNbquyxD7WzQvTjyVlb2DrAXcknYXtnqelh%2FTYS6G6jG3gB4AjNrX%2B1ucvplxQ7%2F4XUpISCmrNxrRDSVpo3qZGbaPgMtIWKr1sNUaQQqWBlWzLJ%2Fb6JEReZPIyuhtmLKGTmvMtsgqw7QS8fVWn0yjg269u4SpI8wvfHjN3pAYAYX7b1P5HB5AfU3Tg3IojUIXOJBqdhXaTw4DH%2F9t3aDIKXX%2FoHLZcDdxBdZ2qZZvsa9Bc%2F1QhQn6N%2BRRFrBvpUuHCE9JbnZROIACXVMpnvao%2FwD79bcQGOLHLZ%2BI0UOAWlN4gaEGQtTUP%2FzgDMiqBhjmu%2FWIN9DZ1hyRFtQDlXPf8v986KMJiwlt6aQGh8e78iTjFxAVL5VxnAic7IWbqn9nDCpueKR9MfWs16gb8EkGTLJIcZ59VxUhdc2mtzjudCg6uNAm5lF3%2BFXY1A%2FLCamSNMlcS2gPYJtoLVyU%2B4ljy93wKkw8M0bEZqoW%2F90w%2B0IrhnXu0MkY2MuEJfMuURelZk0hwS0ZqPJ5sPw4wb9NaZIGMjWOMJfl4b0GOqUBb%2FmNI%2FLwDKrJYC039j7Aq%2B8mAdSZvINmSmTlhUnS7%2BgUkFC%2FL8m5YchttxKKvISwUdvyj7nXeiozJqigiz99PwjoyiU6o2DeI28U2VAtrMLjLnSNLVWKUx4Qi%2BADVVz%2FRK6z43G%2Fbhe2ynaWWKk1rQ0ogdxNlnsZF8z4qeRPsEfr5XuaiMzIySNKRoimul%2BuQARlOaCjR8RtsZ1WR%2FtYkJ2YLapo&X-Amz-Signature=ac57b02e20323c9b371dffc770ef5b534a1e7976a6f5a04b76408099e8c03728&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMC7QOK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuXpP3oM8UZB4DZVQJHQYh1cdLlxHoZmHMXcavD1F8kAiEAixDIKfy5t5kU3uztmKh4nxEPxJM4oi4nN936aSbX0AoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYOQ04M6A%2F1k1bcgircA3Jk6ZO61tTIUqyu9VQNyTygEZXIUdfIz%2B%2FO%2Fabl2jyS76h5i2%2B0exLV7Wl1%2BzRbUF5oG5KKQCMfk%2Fz6Tm3V%2FKV4xDuo%2FQjZNbquyxD7WzQvTjyVlb2DrAXcknYXtnqelh%2FTYS6G6jG3gB4AjNrX%2B1ucvplxQ7%2F4XUpISCmrNxrRDSVpo3qZGbaPgMtIWKr1sNUaQQqWBlWzLJ%2Fb6JEReZPIyuhtmLKGTmvMtsgqw7QS8fVWn0yjg269u4SpI8wvfHjN3pAYAYX7b1P5HB5AfU3Tg3IojUIXOJBqdhXaTw4DH%2F9t3aDIKXX%2FoHLZcDdxBdZ2qZZvsa9Bc%2F1QhQn6N%2BRRFrBvpUuHCE9JbnZROIACXVMpnvao%2FwD79bcQGOLHLZ%2BI0UOAWlN4gaEGQtTUP%2FzgDMiqBhjmu%2FWIN9DZ1hyRFtQDlXPf8v986KMJiwlt6aQGh8e78iTjFxAVL5VxnAic7IWbqn9nDCpueKR9MfWs16gb8EkGTLJIcZ59VxUhdc2mtzjudCg6uNAm5lF3%2BFXY1A%2FLCamSNMlcS2gPYJtoLVyU%2B4ljy93wKkw8M0bEZqoW%2F90w%2B0IrhnXu0MkY2MuEJfMuURelZk0hwS0ZqPJ5sPw4wb9NaZIGMjWOMJfl4b0GOqUBb%2FmNI%2FLwDKrJYC039j7Aq%2B8mAdSZvINmSmTlhUnS7%2BgUkFC%2FL8m5YchttxKKvISwUdvyj7nXeiozJqigiz99PwjoyiU6o2DeI28U2VAtrMLjLnSNLVWKUx4Qi%2BADVVz%2FRK6z43G%2Fbhe2ynaWWKk1rQ0ogdxNlnsZF8z4qeRPsEfr5XuaiMzIySNKRoimul%2BuQARlOaCjR8RtsZ1WR%2FtYkJ2YLapo&X-Amz-Signature=9c6ed337f5571b5c2672a6ba52dd1e200e33d22e7137ec0ecc86cc90c604db87&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
