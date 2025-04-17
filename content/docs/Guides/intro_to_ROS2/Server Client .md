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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5RLJNX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLZaY1g1nboq0b%2FIWIUH4vSPLJxVkeJj1c2WumtmRJTAiBcS22mRnJANh608Fjl6R4CBXEAKt3MWopbM8YNqCzTQyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM2QklMGz2xrsTSSE6KtwDknykKYMLqApCo2FjHCUeIG2Rtm9ePyhPDvMn7xIxDIXHvynea%2BLQ%2Fq88iLbLUNbP0Ppm2v1oXSfwzKg0mIHuuvhg5EuNrRhPhho4RRv4%2Ftr0fH2fODQeFg1OsJLg0okC7whMyRkit2tz7nK2f2yBrpM%2BrLb0UXgiMkK4CzAmLZgpdjaxaxij%2Fe2E3H6grckIeEYGtX1LVdvCeW%2FxynKUjUcBk%2FMkXSRM9SDeQRmtSpyZro%2F0hGxZzYwuJiQMKbVk0279aoHtmLyZugImvV3HZzgfX3hMDJhGnNG9XP0W3w9yVLZvLCSmKHzWv8Ye2yJuaBH1kU7y5ehEqkV35kZDCNtIqReK1hy8W5krLQNGUJhH7162C%2FXlcWNXLFmHNBn5Un02wWDTsKH9gqaRvJfEO1risdXh4DRaCCKIWZbsn835VoUx71atDVXT7MaLipON455hJM1%2FfgV9PRAfMKQUpclIk5rcU9Vj4L3wu%2FkxonIzfw3ABud4%2F2lCIDFuALggLFk53CGK7i0FRqIBFNiWd8JZrcDpcjwiRjp%2FLOYI6alu7LouchvuE%2FVMRQU%2BJx6pmy18wC%2FsaqAutmEbGu2yfhMUgJacufFX6llRKygNB9krFDNpehL%2FX701KSMw1JuFwAY6pgFWoNk07uI1Ot%2FKx3pdkNd4hSeWdjRRQOdNqhLKZKe7EMjcR%2FqMttgFWaioOpb5cJLSm9NQeswZD%2B46fwV18HCidN4xxZ4zaM4lvgA4Jn3GfQjh8CNiMbtxv1RqiTWXRezy34isClQxukli6Q2BlT3l4LksA7zbXjXcQ3nJ5DyMoNS8MYX1XLIGjpCV1PWNa5eOjrz0Nv%2BEGRiRZZGx5bxGSvCwh1p6&X-Amz-Signature=e4f721ad713f3b755db9bb5fd16893f31433926635222476958c1fd03f1f9e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5RLJNX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLZaY1g1nboq0b%2FIWIUH4vSPLJxVkeJj1c2WumtmRJTAiBcS22mRnJANh608Fjl6R4CBXEAKt3MWopbM8YNqCzTQyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM2QklMGz2xrsTSSE6KtwDknykKYMLqApCo2FjHCUeIG2Rtm9ePyhPDvMn7xIxDIXHvynea%2BLQ%2Fq88iLbLUNbP0Ppm2v1oXSfwzKg0mIHuuvhg5EuNrRhPhho4RRv4%2Ftr0fH2fODQeFg1OsJLg0okC7whMyRkit2tz7nK2f2yBrpM%2BrLb0UXgiMkK4CzAmLZgpdjaxaxij%2Fe2E3H6grckIeEYGtX1LVdvCeW%2FxynKUjUcBk%2FMkXSRM9SDeQRmtSpyZro%2F0hGxZzYwuJiQMKbVk0279aoHtmLyZugImvV3HZzgfX3hMDJhGnNG9XP0W3w9yVLZvLCSmKHzWv8Ye2yJuaBH1kU7y5ehEqkV35kZDCNtIqReK1hy8W5krLQNGUJhH7162C%2FXlcWNXLFmHNBn5Un02wWDTsKH9gqaRvJfEO1risdXh4DRaCCKIWZbsn835VoUx71atDVXT7MaLipON455hJM1%2FfgV9PRAfMKQUpclIk5rcU9Vj4L3wu%2FkxonIzfw3ABud4%2F2lCIDFuALggLFk53CGK7i0FRqIBFNiWd8JZrcDpcjwiRjp%2FLOYI6alu7LouchvuE%2FVMRQU%2BJx6pmy18wC%2FsaqAutmEbGu2yfhMUgJacufFX6llRKygNB9krFDNpehL%2FX701KSMw1JuFwAY6pgFWoNk07uI1Ot%2FKx3pdkNd4hSeWdjRRQOdNqhLKZKe7EMjcR%2FqMttgFWaioOpb5cJLSm9NQeswZD%2B46fwV18HCidN4xxZ4zaM4lvgA4Jn3GfQjh8CNiMbtxv1RqiTWXRezy34isClQxukli6Q2BlT3l4LksA7zbXjXcQ3nJ5DyMoNS8MYX1XLIGjpCV1PWNa5eOjrz0Nv%2BEGRiRZZGx5bxGSvCwh1p6&X-Amz-Signature=6a9a6e74081549f94236e99008615399ed5afce3bb9a10d88ec10830cc6a897f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5RLJNX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLZaY1g1nboq0b%2FIWIUH4vSPLJxVkeJj1c2WumtmRJTAiBcS22mRnJANh608Fjl6R4CBXEAKt3MWopbM8YNqCzTQyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM2QklMGz2xrsTSSE6KtwDknykKYMLqApCo2FjHCUeIG2Rtm9ePyhPDvMn7xIxDIXHvynea%2BLQ%2Fq88iLbLUNbP0Ppm2v1oXSfwzKg0mIHuuvhg5EuNrRhPhho4RRv4%2Ftr0fH2fODQeFg1OsJLg0okC7whMyRkit2tz7nK2f2yBrpM%2BrLb0UXgiMkK4CzAmLZgpdjaxaxij%2Fe2E3H6grckIeEYGtX1LVdvCeW%2FxynKUjUcBk%2FMkXSRM9SDeQRmtSpyZro%2F0hGxZzYwuJiQMKbVk0279aoHtmLyZugImvV3HZzgfX3hMDJhGnNG9XP0W3w9yVLZvLCSmKHzWv8Ye2yJuaBH1kU7y5ehEqkV35kZDCNtIqReK1hy8W5krLQNGUJhH7162C%2FXlcWNXLFmHNBn5Un02wWDTsKH9gqaRvJfEO1risdXh4DRaCCKIWZbsn835VoUx71atDVXT7MaLipON455hJM1%2FfgV9PRAfMKQUpclIk5rcU9Vj4L3wu%2FkxonIzfw3ABud4%2F2lCIDFuALggLFk53CGK7i0FRqIBFNiWd8JZrcDpcjwiRjp%2FLOYI6alu7LouchvuE%2FVMRQU%2BJx6pmy18wC%2FsaqAutmEbGu2yfhMUgJacufFX6llRKygNB9krFDNpehL%2FX701KSMw1JuFwAY6pgFWoNk07uI1Ot%2FKx3pdkNd4hSeWdjRRQOdNqhLKZKe7EMjcR%2FqMttgFWaioOpb5cJLSm9NQeswZD%2B46fwV18HCidN4xxZ4zaM4lvgA4Jn3GfQjh8CNiMbtxv1RqiTWXRezy34isClQxukli6Q2BlT3l4LksA7zbXjXcQ3nJ5DyMoNS8MYX1XLIGjpCV1PWNa5eOjrz0Nv%2BEGRiRZZGx5bxGSvCwh1p6&X-Amz-Signature=bef7266239d32e766361744ffcce2a0cba11462f4015942b31a9fd526ea99ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5RLJNX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLZaY1g1nboq0b%2FIWIUH4vSPLJxVkeJj1c2WumtmRJTAiBcS22mRnJANh608Fjl6R4CBXEAKt3MWopbM8YNqCzTQyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM2QklMGz2xrsTSSE6KtwDknykKYMLqApCo2FjHCUeIG2Rtm9ePyhPDvMn7xIxDIXHvynea%2BLQ%2Fq88iLbLUNbP0Ppm2v1oXSfwzKg0mIHuuvhg5EuNrRhPhho4RRv4%2Ftr0fH2fODQeFg1OsJLg0okC7whMyRkit2tz7nK2f2yBrpM%2BrLb0UXgiMkK4CzAmLZgpdjaxaxij%2Fe2E3H6grckIeEYGtX1LVdvCeW%2FxynKUjUcBk%2FMkXSRM9SDeQRmtSpyZro%2F0hGxZzYwuJiQMKbVk0279aoHtmLyZugImvV3HZzgfX3hMDJhGnNG9XP0W3w9yVLZvLCSmKHzWv8Ye2yJuaBH1kU7y5ehEqkV35kZDCNtIqReK1hy8W5krLQNGUJhH7162C%2FXlcWNXLFmHNBn5Un02wWDTsKH9gqaRvJfEO1risdXh4DRaCCKIWZbsn835VoUx71atDVXT7MaLipON455hJM1%2FfgV9PRAfMKQUpclIk5rcU9Vj4L3wu%2FkxonIzfw3ABud4%2F2lCIDFuALggLFk53CGK7i0FRqIBFNiWd8JZrcDpcjwiRjp%2FLOYI6alu7LouchvuE%2FVMRQU%2BJx6pmy18wC%2FsaqAutmEbGu2yfhMUgJacufFX6llRKygNB9krFDNpehL%2FX701KSMw1JuFwAY6pgFWoNk07uI1Ot%2FKx3pdkNd4hSeWdjRRQOdNqhLKZKe7EMjcR%2FqMttgFWaioOpb5cJLSm9NQeswZD%2B46fwV18HCidN4xxZ4zaM4lvgA4Jn3GfQjh8CNiMbtxv1RqiTWXRezy34isClQxukli6Q2BlT3l4LksA7zbXjXcQ3nJ5DyMoNS8MYX1XLIGjpCV1PWNa5eOjrz0Nv%2BEGRiRZZGx5bxGSvCwh1p6&X-Amz-Signature=aa39cc4f1ffd28874542df5fbeca5d63f028d199ec660358ad05ddda1d885a93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5RLJNX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLZaY1g1nboq0b%2FIWIUH4vSPLJxVkeJj1c2WumtmRJTAiBcS22mRnJANh608Fjl6R4CBXEAKt3MWopbM8YNqCzTQyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM2QklMGz2xrsTSSE6KtwDknykKYMLqApCo2FjHCUeIG2Rtm9ePyhPDvMn7xIxDIXHvynea%2BLQ%2Fq88iLbLUNbP0Ppm2v1oXSfwzKg0mIHuuvhg5EuNrRhPhho4RRv4%2Ftr0fH2fODQeFg1OsJLg0okC7whMyRkit2tz7nK2f2yBrpM%2BrLb0UXgiMkK4CzAmLZgpdjaxaxij%2Fe2E3H6grckIeEYGtX1LVdvCeW%2FxynKUjUcBk%2FMkXSRM9SDeQRmtSpyZro%2F0hGxZzYwuJiQMKbVk0279aoHtmLyZugImvV3HZzgfX3hMDJhGnNG9XP0W3w9yVLZvLCSmKHzWv8Ye2yJuaBH1kU7y5ehEqkV35kZDCNtIqReK1hy8W5krLQNGUJhH7162C%2FXlcWNXLFmHNBn5Un02wWDTsKH9gqaRvJfEO1risdXh4DRaCCKIWZbsn835VoUx71atDVXT7MaLipON455hJM1%2FfgV9PRAfMKQUpclIk5rcU9Vj4L3wu%2FkxonIzfw3ABud4%2F2lCIDFuALggLFk53CGK7i0FRqIBFNiWd8JZrcDpcjwiRjp%2FLOYI6alu7LouchvuE%2FVMRQU%2BJx6pmy18wC%2FsaqAutmEbGu2yfhMUgJacufFX6llRKygNB9krFDNpehL%2FX701KSMw1JuFwAY6pgFWoNk07uI1Ot%2FKx3pdkNd4hSeWdjRRQOdNqhLKZKe7EMjcR%2FqMttgFWaioOpb5cJLSm9NQeswZD%2B46fwV18HCidN4xxZ4zaM4lvgA4Jn3GfQjh8CNiMbtxv1RqiTWXRezy34isClQxukli6Q2BlT3l4LksA7zbXjXcQ3nJ5DyMoNS8MYX1XLIGjpCV1PWNa5eOjrz0Nv%2BEGRiRZZGx5bxGSvCwh1p6&X-Amz-Signature=dea0019cd16ebeaa411db1b2b76b9f8e0b8a078534585a237eb8df19d63e736c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
