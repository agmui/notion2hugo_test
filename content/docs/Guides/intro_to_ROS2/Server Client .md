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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IH76Z55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFrtYLGMOODxHfwdcKn48zgdwZLjBrtbso%2B%2BzL%2BiZG3VAiEAqMPSA6io5daw3zntD16LT%2BIpX38q%2BR5YnYiEnf1iW58qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW2sVkvvj5Zal5N9yrcA%2FoZjc2decNQVXwbuZ4iC3F6MRitwN36NLsQSLeyyj%2B6AnbC8WxSfl%2BCzDFnjExW999hqC5xV6dCFrwEnD00ycdjj%2BqpR%2FG6sit%2B5gmrxsgAyeUu%2Bi9P65L0G%2FDar7Tje0YHT2h49yAK2USnaxIO5VTZShzyFRcTQhbyJ6wNOGLqP9aOvfWAgSegM1pVNNdpXPM7KuSUg3ARaixJFNgvLDyuTRiKLGaX6VdL2%2FgmOsoXKM3pR7ngaYDQlE61BCAIT0E%2FtWaNpyDglhGwV9lZsyQFTPmfc%2F9uVQ1BRHt3bV%2Fo0qJdaYIFgjSywsPJG9x5OnFMutZb%2BTN4LQEc5xy9HUqQ69qr8glzXIgEigxKVvkaxycoUx6IDsnv%2FSmnUjyF3KfQB0zDdCIVIgeRcNH9sA3lkNUeFYU4gj%2BECn7ftdo2eibOJUlTLoeu7x%2BucPwWGe1L2USbjwWDLGg37hjFDoCUgz9wvHwUdshJ14xzNWYL1bt3OXG3Ts1iiD8d46U%2BTxy5hbOqC0yZ9hKy1tI%2FUcfxKUHN%2Boc%2FJK5jOSqhPujDuOxwI1W0UQKM4At0p0fNBbtdXhhYTXk4iNQBKtQgwM2rrXitRXBu07J6tJ9XRloTqqJyMH6by%2Fp04TWPMNSTm8QGOqUB0q%2FwPryfA1nG8hTtohldH4QKswU2Dy2wHvjI2gepaTrWWTqC5VWaWqK3Grg1ASNyMl5oll9Q8omcwa0f0BNtxT2urXjlpStFwXeRb76rJD3kTDcc2OHmOUhMro1vCm5eofavDbWNrjH3PPyKDQbSwAx13SIVXAK51uLKXKQuOBqIF%2BIZUKt1%2B6b7amM%2BdGP2xSciWo3kdPihZGLg%2BzbxhMuYZhUG&X-Amz-Signature=805cc77fcb5e875a793109f628e1605c71eae9978505e2ae6421d7602b5eb14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IH76Z55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFrtYLGMOODxHfwdcKn48zgdwZLjBrtbso%2B%2BzL%2BiZG3VAiEAqMPSA6io5daw3zntD16LT%2BIpX38q%2BR5YnYiEnf1iW58qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW2sVkvvj5Zal5N9yrcA%2FoZjc2decNQVXwbuZ4iC3F6MRitwN36NLsQSLeyyj%2B6AnbC8WxSfl%2BCzDFnjExW999hqC5xV6dCFrwEnD00ycdjj%2BqpR%2FG6sit%2B5gmrxsgAyeUu%2Bi9P65L0G%2FDar7Tje0YHT2h49yAK2USnaxIO5VTZShzyFRcTQhbyJ6wNOGLqP9aOvfWAgSegM1pVNNdpXPM7KuSUg3ARaixJFNgvLDyuTRiKLGaX6VdL2%2FgmOsoXKM3pR7ngaYDQlE61BCAIT0E%2FtWaNpyDglhGwV9lZsyQFTPmfc%2F9uVQ1BRHt3bV%2Fo0qJdaYIFgjSywsPJG9x5OnFMutZb%2BTN4LQEc5xy9HUqQ69qr8glzXIgEigxKVvkaxycoUx6IDsnv%2FSmnUjyF3KfQB0zDdCIVIgeRcNH9sA3lkNUeFYU4gj%2BECn7ftdo2eibOJUlTLoeu7x%2BucPwWGe1L2USbjwWDLGg37hjFDoCUgz9wvHwUdshJ14xzNWYL1bt3OXG3Ts1iiD8d46U%2BTxy5hbOqC0yZ9hKy1tI%2FUcfxKUHN%2Boc%2FJK5jOSqhPujDuOxwI1W0UQKM4At0p0fNBbtdXhhYTXk4iNQBKtQgwM2rrXitRXBu07J6tJ9XRloTqqJyMH6by%2Fp04TWPMNSTm8QGOqUB0q%2FwPryfA1nG8hTtohldH4QKswU2Dy2wHvjI2gepaTrWWTqC5VWaWqK3Grg1ASNyMl5oll9Q8omcwa0f0BNtxT2urXjlpStFwXeRb76rJD3kTDcc2OHmOUhMro1vCm5eofavDbWNrjH3PPyKDQbSwAx13SIVXAK51uLKXKQuOBqIF%2BIZUKt1%2B6b7amM%2BdGP2xSciWo3kdPihZGLg%2BzbxhMuYZhUG&X-Amz-Signature=23494e6f81e32fec47b7b757c3efe80a110436b7c56872a2fb58131a2b68b374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IH76Z55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFrtYLGMOODxHfwdcKn48zgdwZLjBrtbso%2B%2BzL%2BiZG3VAiEAqMPSA6io5daw3zntD16LT%2BIpX38q%2BR5YnYiEnf1iW58qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW2sVkvvj5Zal5N9yrcA%2FoZjc2decNQVXwbuZ4iC3F6MRitwN36NLsQSLeyyj%2B6AnbC8WxSfl%2BCzDFnjExW999hqC5xV6dCFrwEnD00ycdjj%2BqpR%2FG6sit%2B5gmrxsgAyeUu%2Bi9P65L0G%2FDar7Tje0YHT2h49yAK2USnaxIO5VTZShzyFRcTQhbyJ6wNOGLqP9aOvfWAgSegM1pVNNdpXPM7KuSUg3ARaixJFNgvLDyuTRiKLGaX6VdL2%2FgmOsoXKM3pR7ngaYDQlE61BCAIT0E%2FtWaNpyDglhGwV9lZsyQFTPmfc%2F9uVQ1BRHt3bV%2Fo0qJdaYIFgjSywsPJG9x5OnFMutZb%2BTN4LQEc5xy9HUqQ69qr8glzXIgEigxKVvkaxycoUx6IDsnv%2FSmnUjyF3KfQB0zDdCIVIgeRcNH9sA3lkNUeFYU4gj%2BECn7ftdo2eibOJUlTLoeu7x%2BucPwWGe1L2USbjwWDLGg37hjFDoCUgz9wvHwUdshJ14xzNWYL1bt3OXG3Ts1iiD8d46U%2BTxy5hbOqC0yZ9hKy1tI%2FUcfxKUHN%2Boc%2FJK5jOSqhPujDuOxwI1W0UQKM4At0p0fNBbtdXhhYTXk4iNQBKtQgwM2rrXitRXBu07J6tJ9XRloTqqJyMH6by%2Fp04TWPMNSTm8QGOqUB0q%2FwPryfA1nG8hTtohldH4QKswU2Dy2wHvjI2gepaTrWWTqC5VWaWqK3Grg1ASNyMl5oll9Q8omcwa0f0BNtxT2urXjlpStFwXeRb76rJD3kTDcc2OHmOUhMro1vCm5eofavDbWNrjH3PPyKDQbSwAx13SIVXAK51uLKXKQuOBqIF%2BIZUKt1%2B6b7amM%2BdGP2xSciWo3kdPihZGLg%2BzbxhMuYZhUG&X-Amz-Signature=3177270081f0c2234e57ed1d98c50dce1462797eef573a44db83ac4f11b59b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IH76Z55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFrtYLGMOODxHfwdcKn48zgdwZLjBrtbso%2B%2BzL%2BiZG3VAiEAqMPSA6io5daw3zntD16LT%2BIpX38q%2BR5YnYiEnf1iW58qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW2sVkvvj5Zal5N9yrcA%2FoZjc2decNQVXwbuZ4iC3F6MRitwN36NLsQSLeyyj%2B6AnbC8WxSfl%2BCzDFnjExW999hqC5xV6dCFrwEnD00ycdjj%2BqpR%2FG6sit%2B5gmrxsgAyeUu%2Bi9P65L0G%2FDar7Tje0YHT2h49yAK2USnaxIO5VTZShzyFRcTQhbyJ6wNOGLqP9aOvfWAgSegM1pVNNdpXPM7KuSUg3ARaixJFNgvLDyuTRiKLGaX6VdL2%2FgmOsoXKM3pR7ngaYDQlE61BCAIT0E%2FtWaNpyDglhGwV9lZsyQFTPmfc%2F9uVQ1BRHt3bV%2Fo0qJdaYIFgjSywsPJG9x5OnFMutZb%2BTN4LQEc5xy9HUqQ69qr8glzXIgEigxKVvkaxycoUx6IDsnv%2FSmnUjyF3KfQB0zDdCIVIgeRcNH9sA3lkNUeFYU4gj%2BECn7ftdo2eibOJUlTLoeu7x%2BucPwWGe1L2USbjwWDLGg37hjFDoCUgz9wvHwUdshJ14xzNWYL1bt3OXG3Ts1iiD8d46U%2BTxy5hbOqC0yZ9hKy1tI%2FUcfxKUHN%2Boc%2FJK5jOSqhPujDuOxwI1W0UQKM4At0p0fNBbtdXhhYTXk4iNQBKtQgwM2rrXitRXBu07J6tJ9XRloTqqJyMH6by%2Fp04TWPMNSTm8QGOqUB0q%2FwPryfA1nG8hTtohldH4QKswU2Dy2wHvjI2gepaTrWWTqC5VWaWqK3Grg1ASNyMl5oll9Q8omcwa0f0BNtxT2urXjlpStFwXeRb76rJD3kTDcc2OHmOUhMro1vCm5eofavDbWNrjH3PPyKDQbSwAx13SIVXAK51uLKXKQuOBqIF%2BIZUKt1%2B6b7amM%2BdGP2xSciWo3kdPihZGLg%2BzbxhMuYZhUG&X-Amz-Signature=e54c6a05d2c994518464c857ed075fb744f4e7326735d7015a58495e159d6eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IH76Z55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFrtYLGMOODxHfwdcKn48zgdwZLjBrtbso%2B%2BzL%2BiZG3VAiEAqMPSA6io5daw3zntD16LT%2BIpX38q%2BR5YnYiEnf1iW58qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW2sVkvvj5Zal5N9yrcA%2FoZjc2decNQVXwbuZ4iC3F6MRitwN36NLsQSLeyyj%2B6AnbC8WxSfl%2BCzDFnjExW999hqC5xV6dCFrwEnD00ycdjj%2BqpR%2FG6sit%2B5gmrxsgAyeUu%2Bi9P65L0G%2FDar7Tje0YHT2h49yAK2USnaxIO5VTZShzyFRcTQhbyJ6wNOGLqP9aOvfWAgSegM1pVNNdpXPM7KuSUg3ARaixJFNgvLDyuTRiKLGaX6VdL2%2FgmOsoXKM3pR7ngaYDQlE61BCAIT0E%2FtWaNpyDglhGwV9lZsyQFTPmfc%2F9uVQ1BRHt3bV%2Fo0qJdaYIFgjSywsPJG9x5OnFMutZb%2BTN4LQEc5xy9HUqQ69qr8glzXIgEigxKVvkaxycoUx6IDsnv%2FSmnUjyF3KfQB0zDdCIVIgeRcNH9sA3lkNUeFYU4gj%2BECn7ftdo2eibOJUlTLoeu7x%2BucPwWGe1L2USbjwWDLGg37hjFDoCUgz9wvHwUdshJ14xzNWYL1bt3OXG3Ts1iiD8d46U%2BTxy5hbOqC0yZ9hKy1tI%2FUcfxKUHN%2Boc%2FJK5jOSqhPujDuOxwI1W0UQKM4At0p0fNBbtdXhhYTXk4iNQBKtQgwM2rrXitRXBu07J6tJ9XRloTqqJyMH6by%2Fp04TWPMNSTm8QGOqUB0q%2FwPryfA1nG8hTtohldH4QKswU2Dy2wHvjI2gepaTrWWTqC5VWaWqK3Grg1ASNyMl5oll9Q8omcwa0f0BNtxT2urXjlpStFwXeRb76rJD3kTDcc2OHmOUhMro1vCm5eofavDbWNrjH3PPyKDQbSwAx13SIVXAK51uLKXKQuOBqIF%2BIZUKt1%2B6b7amM%2BdGP2xSciWo3kdPihZGLg%2BzbxhMuYZhUG&X-Amz-Signature=b895dda0c21fbf2d49082a35baca6345512e31f288ae8cac2cd2455e2e8d1120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
