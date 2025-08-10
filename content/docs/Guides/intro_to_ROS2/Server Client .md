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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZSRPEH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhWqTyfFCcy3S%2BlMT3gWyC3FXivd%2FzPkjSDgpM65Si8AiBGzH87J1fN337mrIGZ7ZDDTEgTVBQIeNdbIfLoVAHzLyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9CQsOQz6S1zxLnzJKtwDvzbbXGfZXM9wEUqg4SAv8djAf4TC0xyrcDVlTIQr8T4PDYXe4zCpoUOpRSNFdZNlx7LU68he6sRGQQy0Cr0%2BfSiIPYv1QuOojvIyGdwothlIEngFTrlHwfWOVdkPZQH5y3QHqeEr8HJtqnP1o3EUfCciKN6ieESL5itw9iPa2WKR0mDf9viBjG3PLIY0CqcOBxPxu4glftKF8VZDzOpAfLuvEXpDJfEpjHGeoEgqmo0Fh6bKXNkxq%2BmLJLUAMfbWrxFYDJA%2BNn6JFskNFGIp3rcZY8mPWoJm5CizqIK4euMGw3NMUDo2i7tUGopIAGKi8pXidmoG2zL8IKIF8Up5vSmkfROy01g9J9Yw%2BHSz4M74UImGkGnGE8XaIssCDoZGlfhfsNUuWqSKc%2B3vmGg3q2IVqKzBSJleH9Jdppl4QGzGrMlm9TptRJh5wNEu6LpSGArAy7QZMuONO%2F95Qmgolnog7BfR0fBXm%2BsexptAQ1I73xqtGVO2na%2FpUlqVYFCK%2FgzO59dp6AGkRqIdrdUInM5%2FNIj5xsrERgmmkmxhaE8vNtSOI12VNJV%2B5YEHfnv%2BP1Ruu4HXksjdCOO%2FSq4Hb24zpaH9z%2B46FyqmaxekAQCzuqaIlBCpn9wWkFEwp5jixAY6pgEdv%2BT5V14h%2FAlwDdLINT7x07c4Ba0iFb7wI7%2BW7Hs4gMjCTBzqkU%2FdCp%2Fq5%2FB0qWfs8MLhFAsZOkCO0Mi146ALkoEvVCo2gZkEgGh0NQzN6CqSKB5JWWzgpou6u3QP6VJaktjKOqYO2Vxt7M2C98%2B4jt%2BaT1%2Fb6Bfyke888LfOuJUvpY4KDkaB%2BzbwJ6QjIlfFphnr99Q19y%2BsYDU9CFCptcilz6ZJ&X-Amz-Signature=3ada21dbc8da053df837c9e34eac18639a62012f22bab87f16bf61139008613b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZSRPEH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhWqTyfFCcy3S%2BlMT3gWyC3FXivd%2FzPkjSDgpM65Si8AiBGzH87J1fN337mrIGZ7ZDDTEgTVBQIeNdbIfLoVAHzLyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9CQsOQz6S1zxLnzJKtwDvzbbXGfZXM9wEUqg4SAv8djAf4TC0xyrcDVlTIQr8T4PDYXe4zCpoUOpRSNFdZNlx7LU68he6sRGQQy0Cr0%2BfSiIPYv1QuOojvIyGdwothlIEngFTrlHwfWOVdkPZQH5y3QHqeEr8HJtqnP1o3EUfCciKN6ieESL5itw9iPa2WKR0mDf9viBjG3PLIY0CqcOBxPxu4glftKF8VZDzOpAfLuvEXpDJfEpjHGeoEgqmo0Fh6bKXNkxq%2BmLJLUAMfbWrxFYDJA%2BNn6JFskNFGIp3rcZY8mPWoJm5CizqIK4euMGw3NMUDo2i7tUGopIAGKi8pXidmoG2zL8IKIF8Up5vSmkfROy01g9J9Yw%2BHSz4M74UImGkGnGE8XaIssCDoZGlfhfsNUuWqSKc%2B3vmGg3q2IVqKzBSJleH9Jdppl4QGzGrMlm9TptRJh5wNEu6LpSGArAy7QZMuONO%2F95Qmgolnog7BfR0fBXm%2BsexptAQ1I73xqtGVO2na%2FpUlqVYFCK%2FgzO59dp6AGkRqIdrdUInM5%2FNIj5xsrERgmmkmxhaE8vNtSOI12VNJV%2B5YEHfnv%2BP1Ruu4HXksjdCOO%2FSq4Hb24zpaH9z%2B46FyqmaxekAQCzuqaIlBCpn9wWkFEwp5jixAY6pgEdv%2BT5V14h%2FAlwDdLINT7x07c4Ba0iFb7wI7%2BW7Hs4gMjCTBzqkU%2FdCp%2Fq5%2FB0qWfs8MLhFAsZOkCO0Mi146ALkoEvVCo2gZkEgGh0NQzN6CqSKB5JWWzgpou6u3QP6VJaktjKOqYO2Vxt7M2C98%2B4jt%2BaT1%2Fb6Bfyke888LfOuJUvpY4KDkaB%2BzbwJ6QjIlfFphnr99Q19y%2BsYDU9CFCptcilz6ZJ&X-Amz-Signature=f0755917ec74344d424bfd42c0fb343385d87b182a37247a668c8a75848aa89c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZSRPEH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhWqTyfFCcy3S%2BlMT3gWyC3FXivd%2FzPkjSDgpM65Si8AiBGzH87J1fN337mrIGZ7ZDDTEgTVBQIeNdbIfLoVAHzLyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9CQsOQz6S1zxLnzJKtwDvzbbXGfZXM9wEUqg4SAv8djAf4TC0xyrcDVlTIQr8T4PDYXe4zCpoUOpRSNFdZNlx7LU68he6sRGQQy0Cr0%2BfSiIPYv1QuOojvIyGdwothlIEngFTrlHwfWOVdkPZQH5y3QHqeEr8HJtqnP1o3EUfCciKN6ieESL5itw9iPa2WKR0mDf9viBjG3PLIY0CqcOBxPxu4glftKF8VZDzOpAfLuvEXpDJfEpjHGeoEgqmo0Fh6bKXNkxq%2BmLJLUAMfbWrxFYDJA%2BNn6JFskNFGIp3rcZY8mPWoJm5CizqIK4euMGw3NMUDo2i7tUGopIAGKi8pXidmoG2zL8IKIF8Up5vSmkfROy01g9J9Yw%2BHSz4M74UImGkGnGE8XaIssCDoZGlfhfsNUuWqSKc%2B3vmGg3q2IVqKzBSJleH9Jdppl4QGzGrMlm9TptRJh5wNEu6LpSGArAy7QZMuONO%2F95Qmgolnog7BfR0fBXm%2BsexptAQ1I73xqtGVO2na%2FpUlqVYFCK%2FgzO59dp6AGkRqIdrdUInM5%2FNIj5xsrERgmmkmxhaE8vNtSOI12VNJV%2B5YEHfnv%2BP1Ruu4HXksjdCOO%2FSq4Hb24zpaH9z%2B46FyqmaxekAQCzuqaIlBCpn9wWkFEwp5jixAY6pgEdv%2BT5V14h%2FAlwDdLINT7x07c4Ba0iFb7wI7%2BW7Hs4gMjCTBzqkU%2FdCp%2Fq5%2FB0qWfs8MLhFAsZOkCO0Mi146ALkoEvVCo2gZkEgGh0NQzN6CqSKB5JWWzgpou6u3QP6VJaktjKOqYO2Vxt7M2C98%2B4jt%2BaT1%2Fb6Bfyke888LfOuJUvpY4KDkaB%2BzbwJ6QjIlfFphnr99Q19y%2BsYDU9CFCptcilz6ZJ&X-Amz-Signature=7c10bd037e2f846af39ac91d2e8eddfbffa95c87dd94c044800830a3d85e30fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZSRPEH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhWqTyfFCcy3S%2BlMT3gWyC3FXivd%2FzPkjSDgpM65Si8AiBGzH87J1fN337mrIGZ7ZDDTEgTVBQIeNdbIfLoVAHzLyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9CQsOQz6S1zxLnzJKtwDvzbbXGfZXM9wEUqg4SAv8djAf4TC0xyrcDVlTIQr8T4PDYXe4zCpoUOpRSNFdZNlx7LU68he6sRGQQy0Cr0%2BfSiIPYv1QuOojvIyGdwothlIEngFTrlHwfWOVdkPZQH5y3QHqeEr8HJtqnP1o3EUfCciKN6ieESL5itw9iPa2WKR0mDf9viBjG3PLIY0CqcOBxPxu4glftKF8VZDzOpAfLuvEXpDJfEpjHGeoEgqmo0Fh6bKXNkxq%2BmLJLUAMfbWrxFYDJA%2BNn6JFskNFGIp3rcZY8mPWoJm5CizqIK4euMGw3NMUDo2i7tUGopIAGKi8pXidmoG2zL8IKIF8Up5vSmkfROy01g9J9Yw%2BHSz4M74UImGkGnGE8XaIssCDoZGlfhfsNUuWqSKc%2B3vmGg3q2IVqKzBSJleH9Jdppl4QGzGrMlm9TptRJh5wNEu6LpSGArAy7QZMuONO%2F95Qmgolnog7BfR0fBXm%2BsexptAQ1I73xqtGVO2na%2FpUlqVYFCK%2FgzO59dp6AGkRqIdrdUInM5%2FNIj5xsrERgmmkmxhaE8vNtSOI12VNJV%2B5YEHfnv%2BP1Ruu4HXksjdCOO%2FSq4Hb24zpaH9z%2B46FyqmaxekAQCzuqaIlBCpn9wWkFEwp5jixAY6pgEdv%2BT5V14h%2FAlwDdLINT7x07c4Ba0iFb7wI7%2BW7Hs4gMjCTBzqkU%2FdCp%2Fq5%2FB0qWfs8MLhFAsZOkCO0Mi146ALkoEvVCo2gZkEgGh0NQzN6CqSKB5JWWzgpou6u3QP6VJaktjKOqYO2Vxt7M2C98%2B4jt%2BaT1%2Fb6Bfyke888LfOuJUvpY4KDkaB%2BzbwJ6QjIlfFphnr99Q19y%2BsYDU9CFCptcilz6ZJ&X-Amz-Signature=f7e79daa7e7142a4967985ec286afe219a2ccf50825062dd41b0e85c80d5e72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZSRPEH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhWqTyfFCcy3S%2BlMT3gWyC3FXivd%2FzPkjSDgpM65Si8AiBGzH87J1fN337mrIGZ7ZDDTEgTVBQIeNdbIfLoVAHzLyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9CQsOQz6S1zxLnzJKtwDvzbbXGfZXM9wEUqg4SAv8djAf4TC0xyrcDVlTIQr8T4PDYXe4zCpoUOpRSNFdZNlx7LU68he6sRGQQy0Cr0%2BfSiIPYv1QuOojvIyGdwothlIEngFTrlHwfWOVdkPZQH5y3QHqeEr8HJtqnP1o3EUfCciKN6ieESL5itw9iPa2WKR0mDf9viBjG3PLIY0CqcOBxPxu4glftKF8VZDzOpAfLuvEXpDJfEpjHGeoEgqmo0Fh6bKXNkxq%2BmLJLUAMfbWrxFYDJA%2BNn6JFskNFGIp3rcZY8mPWoJm5CizqIK4euMGw3NMUDo2i7tUGopIAGKi8pXidmoG2zL8IKIF8Up5vSmkfROy01g9J9Yw%2BHSz4M74UImGkGnGE8XaIssCDoZGlfhfsNUuWqSKc%2B3vmGg3q2IVqKzBSJleH9Jdppl4QGzGrMlm9TptRJh5wNEu6LpSGArAy7QZMuONO%2F95Qmgolnog7BfR0fBXm%2BsexptAQ1I73xqtGVO2na%2FpUlqVYFCK%2FgzO59dp6AGkRqIdrdUInM5%2FNIj5xsrERgmmkmxhaE8vNtSOI12VNJV%2B5YEHfnv%2BP1Ruu4HXksjdCOO%2FSq4Hb24zpaH9z%2B46FyqmaxekAQCzuqaIlBCpn9wWkFEwp5jixAY6pgEdv%2BT5V14h%2FAlwDdLINT7x07c4Ba0iFb7wI7%2BW7Hs4gMjCTBzqkU%2FdCp%2Fq5%2FB0qWfs8MLhFAsZOkCO0Mi146ALkoEvVCo2gZkEgGh0NQzN6CqSKB5JWWzgpou6u3QP6VJaktjKOqYO2Vxt7M2C98%2B4jt%2BaT1%2Fb6Bfyke888LfOuJUvpY4KDkaB%2BzbwJ6QjIlfFphnr99Q19y%2BsYDU9CFCptcilz6ZJ&X-Amz-Signature=38e22ef2eecc5146eb5e18bf93ab5a1b8afa2d9fce5bd727f4bfedeca5bde8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
