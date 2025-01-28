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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCKKD52%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGrB%2B1Ps6W1MM9M8UlZ0K6SuwSv0NLIbGjAuuUfZpXOdAiA%2BencAjHi2s8MsBIHEq2SdtrHGS9K3nl74zSHpbcx5BSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMq%2B3vlCO2kwtMhXL%2FKtwDyJt%2FsZaYToNGvyPMuNOjVTHpxICKvQOyzh%2BC1WL1JpfIlGbeLEdOZy9C6pTjSxGEwqhEj5OxsQf6b6OES23r8k3A94xJBXqp4gEx%2FmxLcvQykqUvLByUcExstJKpzLDeifObThcoMk4oq7aMI2IXs2EnidIGCAJBiD1Mx8ncZosLsXftpqX2JGaluit4S2%2FF%2Bp1AQvzY0U2l6XX%2FK%2B3CXU8gIPuSqWgKnRbqF93hSr9H6lDZMj3U77YM3I02uZ3Uhq2j%2FA0YEVBoLsMYrPyYUmDtgEeFMvUooLQgJZGt5LZzr4wi%2FbHyAMw5hCwG%2Be3%2Fi0qxLvqIrRGCKzQqlVuCGXsEs%2BI6GWAOUqSW9XSkYtMGRmpc7LMQ961e8ZufHV7q%2B5nfBiqMipIIt92YF2k0yFpCOFXgTN7slhlBjoM%2FU1MBpCBgke9wi6AhF3t%2BJmFFIG6pAzo6rmnsRJHIQPyjsfPjLKgh5i3HtR%2BQgLdETVSw0OZQRZpTnbdYFMz4TIHWan2l%2BLvoAt%2FXOTHbpxlTzvkDNH4U8v%2F5gBu2htRMgm0PxoHjIc9hzEYibshKGEj4U2l%2F5TNp8YaiHxkBai8Cr4wA4dsT%2F3M1sS2yLjKvCBOCGyK9vZJbCsSFW3AwwvzkvAY6pgGzpzzoxlfHWylMK845pdLDxGIWM7V3LAQclkG%2BCDfOA7xfMghWtnIJ9JfV6wtLqgLwp6fgauMuk%2FzXWIM82ia2Mx3m3o%2F7VUJyB9B88lSMxEKY1NttkZU8TB9RHy0TYnxJrhVAaHczR8hX9QMh4rwl0yoHyDbXQdkCELwnPFcpsbMpNeQa7OJmdyndRWg2Qkth%2Fppr%2FgDyUAnh0podptrwZpDbitCS&X-Amz-Signature=da67750a910427c08254fde8b434ad32f7a0bb11861ac64005427e19498ee47a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCKKD52%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGrB%2B1Ps6W1MM9M8UlZ0K6SuwSv0NLIbGjAuuUfZpXOdAiA%2BencAjHi2s8MsBIHEq2SdtrHGS9K3nl74zSHpbcx5BSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMq%2B3vlCO2kwtMhXL%2FKtwDyJt%2FsZaYToNGvyPMuNOjVTHpxICKvQOyzh%2BC1WL1JpfIlGbeLEdOZy9C6pTjSxGEwqhEj5OxsQf6b6OES23r8k3A94xJBXqp4gEx%2FmxLcvQykqUvLByUcExstJKpzLDeifObThcoMk4oq7aMI2IXs2EnidIGCAJBiD1Mx8ncZosLsXftpqX2JGaluit4S2%2FF%2Bp1AQvzY0U2l6XX%2FK%2B3CXU8gIPuSqWgKnRbqF93hSr9H6lDZMj3U77YM3I02uZ3Uhq2j%2FA0YEVBoLsMYrPyYUmDtgEeFMvUooLQgJZGt5LZzr4wi%2FbHyAMw5hCwG%2Be3%2Fi0qxLvqIrRGCKzQqlVuCGXsEs%2BI6GWAOUqSW9XSkYtMGRmpc7LMQ961e8ZufHV7q%2B5nfBiqMipIIt92YF2k0yFpCOFXgTN7slhlBjoM%2FU1MBpCBgke9wi6AhF3t%2BJmFFIG6pAzo6rmnsRJHIQPyjsfPjLKgh5i3HtR%2BQgLdETVSw0OZQRZpTnbdYFMz4TIHWan2l%2BLvoAt%2FXOTHbpxlTzvkDNH4U8v%2F5gBu2htRMgm0PxoHjIc9hzEYibshKGEj4U2l%2F5TNp8YaiHxkBai8Cr4wA4dsT%2F3M1sS2yLjKvCBOCGyK9vZJbCsSFW3AwwvzkvAY6pgGzpzzoxlfHWylMK845pdLDxGIWM7V3LAQclkG%2BCDfOA7xfMghWtnIJ9JfV6wtLqgLwp6fgauMuk%2FzXWIM82ia2Mx3m3o%2F7VUJyB9B88lSMxEKY1NttkZU8TB9RHy0TYnxJrhVAaHczR8hX9QMh4rwl0yoHyDbXQdkCELwnPFcpsbMpNeQa7OJmdyndRWg2Qkth%2Fppr%2FgDyUAnh0podptrwZpDbitCS&X-Amz-Signature=63241033c1ea6b5859011cc660265f5a31da5e42a28ad7fe16f77eca41495106&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCKKD52%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGrB%2B1Ps6W1MM9M8UlZ0K6SuwSv0NLIbGjAuuUfZpXOdAiA%2BencAjHi2s8MsBIHEq2SdtrHGS9K3nl74zSHpbcx5BSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMq%2B3vlCO2kwtMhXL%2FKtwDyJt%2FsZaYToNGvyPMuNOjVTHpxICKvQOyzh%2BC1WL1JpfIlGbeLEdOZy9C6pTjSxGEwqhEj5OxsQf6b6OES23r8k3A94xJBXqp4gEx%2FmxLcvQykqUvLByUcExstJKpzLDeifObThcoMk4oq7aMI2IXs2EnidIGCAJBiD1Mx8ncZosLsXftpqX2JGaluit4S2%2FF%2Bp1AQvzY0U2l6XX%2FK%2B3CXU8gIPuSqWgKnRbqF93hSr9H6lDZMj3U77YM3I02uZ3Uhq2j%2FA0YEVBoLsMYrPyYUmDtgEeFMvUooLQgJZGt5LZzr4wi%2FbHyAMw5hCwG%2Be3%2Fi0qxLvqIrRGCKzQqlVuCGXsEs%2BI6GWAOUqSW9XSkYtMGRmpc7LMQ961e8ZufHV7q%2B5nfBiqMipIIt92YF2k0yFpCOFXgTN7slhlBjoM%2FU1MBpCBgke9wi6AhF3t%2BJmFFIG6pAzo6rmnsRJHIQPyjsfPjLKgh5i3HtR%2BQgLdETVSw0OZQRZpTnbdYFMz4TIHWan2l%2BLvoAt%2FXOTHbpxlTzvkDNH4U8v%2F5gBu2htRMgm0PxoHjIc9hzEYibshKGEj4U2l%2F5TNp8YaiHxkBai8Cr4wA4dsT%2F3M1sS2yLjKvCBOCGyK9vZJbCsSFW3AwwvzkvAY6pgGzpzzoxlfHWylMK845pdLDxGIWM7V3LAQclkG%2BCDfOA7xfMghWtnIJ9JfV6wtLqgLwp6fgauMuk%2FzXWIM82ia2Mx3m3o%2F7VUJyB9B88lSMxEKY1NttkZU8TB9RHy0TYnxJrhVAaHczR8hX9QMh4rwl0yoHyDbXQdkCELwnPFcpsbMpNeQa7OJmdyndRWg2Qkth%2Fppr%2FgDyUAnh0podptrwZpDbitCS&X-Amz-Signature=16c1bb8e1ee5bf8df367cc141b5968d545589f40a5ca87cc5a5d1077a82afb5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCKKD52%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGrB%2B1Ps6W1MM9M8UlZ0K6SuwSv0NLIbGjAuuUfZpXOdAiA%2BencAjHi2s8MsBIHEq2SdtrHGS9K3nl74zSHpbcx5BSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMq%2B3vlCO2kwtMhXL%2FKtwDyJt%2FsZaYToNGvyPMuNOjVTHpxICKvQOyzh%2BC1WL1JpfIlGbeLEdOZy9C6pTjSxGEwqhEj5OxsQf6b6OES23r8k3A94xJBXqp4gEx%2FmxLcvQykqUvLByUcExstJKpzLDeifObThcoMk4oq7aMI2IXs2EnidIGCAJBiD1Mx8ncZosLsXftpqX2JGaluit4S2%2FF%2Bp1AQvzY0U2l6XX%2FK%2B3CXU8gIPuSqWgKnRbqF93hSr9H6lDZMj3U77YM3I02uZ3Uhq2j%2FA0YEVBoLsMYrPyYUmDtgEeFMvUooLQgJZGt5LZzr4wi%2FbHyAMw5hCwG%2Be3%2Fi0qxLvqIrRGCKzQqlVuCGXsEs%2BI6GWAOUqSW9XSkYtMGRmpc7LMQ961e8ZufHV7q%2B5nfBiqMipIIt92YF2k0yFpCOFXgTN7slhlBjoM%2FU1MBpCBgke9wi6AhF3t%2BJmFFIG6pAzo6rmnsRJHIQPyjsfPjLKgh5i3HtR%2BQgLdETVSw0OZQRZpTnbdYFMz4TIHWan2l%2BLvoAt%2FXOTHbpxlTzvkDNH4U8v%2F5gBu2htRMgm0PxoHjIc9hzEYibshKGEj4U2l%2F5TNp8YaiHxkBai8Cr4wA4dsT%2F3M1sS2yLjKvCBOCGyK9vZJbCsSFW3AwwvzkvAY6pgGzpzzoxlfHWylMK845pdLDxGIWM7V3LAQclkG%2BCDfOA7xfMghWtnIJ9JfV6wtLqgLwp6fgauMuk%2FzXWIM82ia2Mx3m3o%2F7VUJyB9B88lSMxEKY1NttkZU8TB9RHy0TYnxJrhVAaHczR8hX9QMh4rwl0yoHyDbXQdkCELwnPFcpsbMpNeQa7OJmdyndRWg2Qkth%2Fppr%2FgDyUAnh0podptrwZpDbitCS&X-Amz-Signature=06d2592fc690efee6e1f63029485d947aded31dbdd4bacf0174879945443de08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCKKD52%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGrB%2B1Ps6W1MM9M8UlZ0K6SuwSv0NLIbGjAuuUfZpXOdAiA%2BencAjHi2s8MsBIHEq2SdtrHGS9K3nl74zSHpbcx5BSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMq%2B3vlCO2kwtMhXL%2FKtwDyJt%2FsZaYToNGvyPMuNOjVTHpxICKvQOyzh%2BC1WL1JpfIlGbeLEdOZy9C6pTjSxGEwqhEj5OxsQf6b6OES23r8k3A94xJBXqp4gEx%2FmxLcvQykqUvLByUcExstJKpzLDeifObThcoMk4oq7aMI2IXs2EnidIGCAJBiD1Mx8ncZosLsXftpqX2JGaluit4S2%2FF%2Bp1AQvzY0U2l6XX%2FK%2B3CXU8gIPuSqWgKnRbqF93hSr9H6lDZMj3U77YM3I02uZ3Uhq2j%2FA0YEVBoLsMYrPyYUmDtgEeFMvUooLQgJZGt5LZzr4wi%2FbHyAMw5hCwG%2Be3%2Fi0qxLvqIrRGCKzQqlVuCGXsEs%2BI6GWAOUqSW9XSkYtMGRmpc7LMQ961e8ZufHV7q%2B5nfBiqMipIIt92YF2k0yFpCOFXgTN7slhlBjoM%2FU1MBpCBgke9wi6AhF3t%2BJmFFIG6pAzo6rmnsRJHIQPyjsfPjLKgh5i3HtR%2BQgLdETVSw0OZQRZpTnbdYFMz4TIHWan2l%2BLvoAt%2FXOTHbpxlTzvkDNH4U8v%2F5gBu2htRMgm0PxoHjIc9hzEYibshKGEj4U2l%2F5TNp8YaiHxkBai8Cr4wA4dsT%2F3M1sS2yLjKvCBOCGyK9vZJbCsSFW3AwwvzkvAY6pgGzpzzoxlfHWylMK845pdLDxGIWM7V3LAQclkG%2BCDfOA7xfMghWtnIJ9JfV6wtLqgLwp6fgauMuk%2FzXWIM82ia2Mx3m3o%2F7VUJyB9B88lSMxEKY1NttkZU8TB9RHy0TYnxJrhVAaHczR8hX9QMh4rwl0yoHyDbXQdkCELwnPFcpsbMpNeQa7OJmdyndRWg2Qkth%2Fppr%2FgDyUAnh0podptrwZpDbitCS&X-Amz-Signature=88f859b3675e9e4d2669923e2bf85431b6164fa96e246854b4b0b024564fe6a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
