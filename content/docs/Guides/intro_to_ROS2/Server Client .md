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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJK33KR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBre060jFgdvsfSpJJ1h4PNlfTS8Y23Xy3P3EGTSHLY7AiB023vCrw43MXsJXmmW2deSV7Csh4DRs3bafJ3SUxuBaSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMGoXxxBFq9ZBw0w%2F3KtwDTC%2FGmnm0vewagIXjHzLNB4eWa8uCr3ssjQ7xRbLD2sr0%2FA74C3OIBt%2B33CiyUQT2sPjSj2%2B5JdpDVP8NWmriLPc0dMCmvpCUUqWbvNagCZZy5h788S%2BUjuxY3zjR9BFOChaCy9irdxs6VoQ8jYhjrW5kcHYiuskShSbjElVGKUTJfR1V7pHxVF%2BYHXjI7S%2Bs5s9DBh1IpZsDlJMoow1IdPQkkLT0U%2B863aso%2F68juAfxV8z0H3PhmK8YnpeoqCGl9ymuXKaanoBrlqdrLhrDHXY45RhqIOTkBYd%2FzWOiwP9AnMx5TsUaSXKPB0Ji30T%2FJgLHAyOIezsvTXHYpIPLC0NevyyTbo3UIjQb5CPoO5Mb0azMgXLV33niU%2BWVXqFb9sOhBN618TtAFRtMMeFyF5OV3AqDDU2%2FrlcdpzIEHJyxOpOnTwTnEN0JCrq8xLS9E%2BInxzh%2BUBV8ZcAbtl4wYgiDbgCyHxwtV3%2Fivv%2FUkQCrkVBHPoyh5GUuFikhlPCRKilu9qesAuzv5G%2Fx99gHmSuEMAWhETAFj2ZhCnBPwW8MMEj%2B4tOTKxBVy9nq5uHJ29oXeDyu3XLcPUtTvKeFUn3T%2Fwep%2FH7Ra5P%2F0nnMR%2F2W9GDs%2Fom6CnVHLx4w49nYwwY6pgFjYUFBnSxb90%2FpemDMT9735VubA3xRzzlH0EP3N5y9ab%2Birk7SE1%2Fw0Y1rw%2BNoMgEzm66ig8tdJlFNxEJh1og2KT9nI%2FmOZJzIJIsNyUDRLpMunl45HxBZt7PlwkVW1cRzVK4dGw6nakPji06zmqUNm7uLfGbiu%2Fmucx3aLZkTkC%2B0mmzHVXWtHAMtpWuu%2BReM8Ul4NLkJ0by20I%2FwYajo2m8bqlzg&X-Amz-Signature=a78a85d2d5aabb6733de3abdf013f0b2c7e8253218c7ac2b9b75849d57f2ca0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJK33KR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBre060jFgdvsfSpJJ1h4PNlfTS8Y23Xy3P3EGTSHLY7AiB023vCrw43MXsJXmmW2deSV7Csh4DRs3bafJ3SUxuBaSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMGoXxxBFq9ZBw0w%2F3KtwDTC%2FGmnm0vewagIXjHzLNB4eWa8uCr3ssjQ7xRbLD2sr0%2FA74C3OIBt%2B33CiyUQT2sPjSj2%2B5JdpDVP8NWmriLPc0dMCmvpCUUqWbvNagCZZy5h788S%2BUjuxY3zjR9BFOChaCy9irdxs6VoQ8jYhjrW5kcHYiuskShSbjElVGKUTJfR1V7pHxVF%2BYHXjI7S%2Bs5s9DBh1IpZsDlJMoow1IdPQkkLT0U%2B863aso%2F68juAfxV8z0H3PhmK8YnpeoqCGl9ymuXKaanoBrlqdrLhrDHXY45RhqIOTkBYd%2FzWOiwP9AnMx5TsUaSXKPB0Ji30T%2FJgLHAyOIezsvTXHYpIPLC0NevyyTbo3UIjQb5CPoO5Mb0azMgXLV33niU%2BWVXqFb9sOhBN618TtAFRtMMeFyF5OV3AqDDU2%2FrlcdpzIEHJyxOpOnTwTnEN0JCrq8xLS9E%2BInxzh%2BUBV8ZcAbtl4wYgiDbgCyHxwtV3%2Fivv%2FUkQCrkVBHPoyh5GUuFikhlPCRKilu9qesAuzv5G%2Fx99gHmSuEMAWhETAFj2ZhCnBPwW8MMEj%2B4tOTKxBVy9nq5uHJ29oXeDyu3XLcPUtTvKeFUn3T%2Fwep%2FH7Ra5P%2F0nnMR%2F2W9GDs%2Fom6CnVHLx4w49nYwwY6pgFjYUFBnSxb90%2FpemDMT9735VubA3xRzzlH0EP3N5y9ab%2Birk7SE1%2Fw0Y1rw%2BNoMgEzm66ig8tdJlFNxEJh1og2KT9nI%2FmOZJzIJIsNyUDRLpMunl45HxBZt7PlwkVW1cRzVK4dGw6nakPji06zmqUNm7uLfGbiu%2Fmucx3aLZkTkC%2B0mmzHVXWtHAMtpWuu%2BReM8Ul4NLkJ0by20I%2FwYajo2m8bqlzg&X-Amz-Signature=27cae816e74fc31ed6b666aa6f78eebabe7cef87ccbe276e83c41d4d6a02e6f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJK33KR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBre060jFgdvsfSpJJ1h4PNlfTS8Y23Xy3P3EGTSHLY7AiB023vCrw43MXsJXmmW2deSV7Csh4DRs3bafJ3SUxuBaSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMGoXxxBFq9ZBw0w%2F3KtwDTC%2FGmnm0vewagIXjHzLNB4eWa8uCr3ssjQ7xRbLD2sr0%2FA74C3OIBt%2B33CiyUQT2sPjSj2%2B5JdpDVP8NWmriLPc0dMCmvpCUUqWbvNagCZZy5h788S%2BUjuxY3zjR9BFOChaCy9irdxs6VoQ8jYhjrW5kcHYiuskShSbjElVGKUTJfR1V7pHxVF%2BYHXjI7S%2Bs5s9DBh1IpZsDlJMoow1IdPQkkLT0U%2B863aso%2F68juAfxV8z0H3PhmK8YnpeoqCGl9ymuXKaanoBrlqdrLhrDHXY45RhqIOTkBYd%2FzWOiwP9AnMx5TsUaSXKPB0Ji30T%2FJgLHAyOIezsvTXHYpIPLC0NevyyTbo3UIjQb5CPoO5Mb0azMgXLV33niU%2BWVXqFb9sOhBN618TtAFRtMMeFyF5OV3AqDDU2%2FrlcdpzIEHJyxOpOnTwTnEN0JCrq8xLS9E%2BInxzh%2BUBV8ZcAbtl4wYgiDbgCyHxwtV3%2Fivv%2FUkQCrkVBHPoyh5GUuFikhlPCRKilu9qesAuzv5G%2Fx99gHmSuEMAWhETAFj2ZhCnBPwW8MMEj%2B4tOTKxBVy9nq5uHJ29oXeDyu3XLcPUtTvKeFUn3T%2Fwep%2FH7Ra5P%2F0nnMR%2F2W9GDs%2Fom6CnVHLx4w49nYwwY6pgFjYUFBnSxb90%2FpemDMT9735VubA3xRzzlH0EP3N5y9ab%2Birk7SE1%2Fw0Y1rw%2BNoMgEzm66ig8tdJlFNxEJh1og2KT9nI%2FmOZJzIJIsNyUDRLpMunl45HxBZt7PlwkVW1cRzVK4dGw6nakPji06zmqUNm7uLfGbiu%2Fmucx3aLZkTkC%2B0mmzHVXWtHAMtpWuu%2BReM8Ul4NLkJ0by20I%2FwYajo2m8bqlzg&X-Amz-Signature=503f593f206080b71ef9dba1217c8e57e4193b00e685b28bc46c47c0677ec18f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJK33KR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBre060jFgdvsfSpJJ1h4PNlfTS8Y23Xy3P3EGTSHLY7AiB023vCrw43MXsJXmmW2deSV7Csh4DRs3bafJ3SUxuBaSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMGoXxxBFq9ZBw0w%2F3KtwDTC%2FGmnm0vewagIXjHzLNB4eWa8uCr3ssjQ7xRbLD2sr0%2FA74C3OIBt%2B33CiyUQT2sPjSj2%2B5JdpDVP8NWmriLPc0dMCmvpCUUqWbvNagCZZy5h788S%2BUjuxY3zjR9BFOChaCy9irdxs6VoQ8jYhjrW5kcHYiuskShSbjElVGKUTJfR1V7pHxVF%2BYHXjI7S%2Bs5s9DBh1IpZsDlJMoow1IdPQkkLT0U%2B863aso%2F68juAfxV8z0H3PhmK8YnpeoqCGl9ymuXKaanoBrlqdrLhrDHXY45RhqIOTkBYd%2FzWOiwP9AnMx5TsUaSXKPB0Ji30T%2FJgLHAyOIezsvTXHYpIPLC0NevyyTbo3UIjQb5CPoO5Mb0azMgXLV33niU%2BWVXqFb9sOhBN618TtAFRtMMeFyF5OV3AqDDU2%2FrlcdpzIEHJyxOpOnTwTnEN0JCrq8xLS9E%2BInxzh%2BUBV8ZcAbtl4wYgiDbgCyHxwtV3%2Fivv%2FUkQCrkVBHPoyh5GUuFikhlPCRKilu9qesAuzv5G%2Fx99gHmSuEMAWhETAFj2ZhCnBPwW8MMEj%2B4tOTKxBVy9nq5uHJ29oXeDyu3XLcPUtTvKeFUn3T%2Fwep%2FH7Ra5P%2F0nnMR%2F2W9GDs%2Fom6CnVHLx4w49nYwwY6pgFjYUFBnSxb90%2FpemDMT9735VubA3xRzzlH0EP3N5y9ab%2Birk7SE1%2Fw0Y1rw%2BNoMgEzm66ig8tdJlFNxEJh1og2KT9nI%2FmOZJzIJIsNyUDRLpMunl45HxBZt7PlwkVW1cRzVK4dGw6nakPji06zmqUNm7uLfGbiu%2Fmucx3aLZkTkC%2B0mmzHVXWtHAMtpWuu%2BReM8Ul4NLkJ0by20I%2FwYajo2m8bqlzg&X-Amz-Signature=efb1a44b55c9a35c9293adbb39448d76c5a20904e2a5e1b3348c84a08d9eb28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJK33KR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBre060jFgdvsfSpJJ1h4PNlfTS8Y23Xy3P3EGTSHLY7AiB023vCrw43MXsJXmmW2deSV7Csh4DRs3bafJ3SUxuBaSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMGoXxxBFq9ZBw0w%2F3KtwDTC%2FGmnm0vewagIXjHzLNB4eWa8uCr3ssjQ7xRbLD2sr0%2FA74C3OIBt%2B33CiyUQT2sPjSj2%2B5JdpDVP8NWmriLPc0dMCmvpCUUqWbvNagCZZy5h788S%2BUjuxY3zjR9BFOChaCy9irdxs6VoQ8jYhjrW5kcHYiuskShSbjElVGKUTJfR1V7pHxVF%2BYHXjI7S%2Bs5s9DBh1IpZsDlJMoow1IdPQkkLT0U%2B863aso%2F68juAfxV8z0H3PhmK8YnpeoqCGl9ymuXKaanoBrlqdrLhrDHXY45RhqIOTkBYd%2FzWOiwP9AnMx5TsUaSXKPB0Ji30T%2FJgLHAyOIezsvTXHYpIPLC0NevyyTbo3UIjQb5CPoO5Mb0azMgXLV33niU%2BWVXqFb9sOhBN618TtAFRtMMeFyF5OV3AqDDU2%2FrlcdpzIEHJyxOpOnTwTnEN0JCrq8xLS9E%2BInxzh%2BUBV8ZcAbtl4wYgiDbgCyHxwtV3%2Fivv%2FUkQCrkVBHPoyh5GUuFikhlPCRKilu9qesAuzv5G%2Fx99gHmSuEMAWhETAFj2ZhCnBPwW8MMEj%2B4tOTKxBVy9nq5uHJ29oXeDyu3XLcPUtTvKeFUn3T%2Fwep%2FH7Ra5P%2F0nnMR%2F2W9GDs%2Fom6CnVHLx4w49nYwwY6pgFjYUFBnSxb90%2FpemDMT9735VubA3xRzzlH0EP3N5y9ab%2Birk7SE1%2Fw0Y1rw%2BNoMgEzm66ig8tdJlFNxEJh1og2KT9nI%2FmOZJzIJIsNyUDRLpMunl45HxBZt7PlwkVW1cRzVK4dGw6nakPji06zmqUNm7uLfGbiu%2Fmucx3aLZkTkC%2B0mmzHVXWtHAMtpWuu%2BReM8Ul4NLkJ0by20I%2FwYajo2m8bqlzg&X-Amz-Signature=744444c87d01e27770eccfe2b720402b7fadcac69cd928f34f529c79e41ec4bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
