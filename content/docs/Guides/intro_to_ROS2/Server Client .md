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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXWRCVN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDO7xzT%2BCnSWtroeIkUBxl3EwEWwoQpjjwYUdCTcfH8NAiA8T8jUAJS3Pq2kO1RZrTtSjXLCkh%2Bn3RjymslB4751SCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMU8tzSTFntheQkG28KtwDSDjl%2FTwdyDzxuvKNsR84i7ajJz6h2wQdKtGvHYPLbP6SGyVahfv0dEqK8lLm1RvlMnMOYEP0FhfyuArifwQX%2BI%2Bi6ArBN2kabOomiK6Vwh3tEqnIKTXfW2aG%2Bu6aVUe2BWfVPhooq7aOuY3dM0y7iTEznUeAUgqaDmvJq1Yp2icrR6Qc%2FZ%2FmdPIvhDNs8xw52CSSVhxZzbca0FRgpODHge93BHqf22Ff%2FytVf3eKm38BYdi1g0IW%2BBErkrKGew47Op00m%2B7QDhFPugpIikfYjJ9eaDaAfbXtylwkF2FyvtxEAb%2BwZ2v1%2Frp6Am7ierhFt1YyoAZ1ZlmE%2BQV48fSgWrYIceAWPZ7pDbt9LqiFUrYjQWSX0RaFXYUTLKFV6suKjh16lXVf4qRmq9wrm%2Fcum1rmgJNsz74AkaQ2CBsLUDh5CXAxbyDCbdlF5AOlUMe%2BkxDbE8T7C24wP70TKhage77EnqGTBTnWI8SJ9Rz6Mxkl0dm6BXlqhLnpcLEfei4zPn7v0jgBpIxtGUHQZVAZMANoqiP5kmwoceQ9gHDWFnokswiupaC5eepDIleIlyfkBWlWA8lap%2BjlnCogNYnORq4mMkv6VsW5jC%2BuYH4gB94Qgd3l08QLGB5pZmMwveDwwgY6pgErfw7j4J1yKcZffBz74r2OE%2BmQN%2FnPId5ACOjwB6PoBw3%2B7r9RDnHRr56nDtbmD23h5Qix47ae6cIzJFN6rDzZHed6jzIBFmKeADxr8kzL9AHmmxcI9Xq%2Bz4osAStnlJZN02bcc5YaEmhtwqT3KNVW0wgS0mryzvK5Eb%2BjML1xca3e1kg%2Fso%2BduGSumgMYjK62ltPN6JcvUonvUlsab5bAxW1N5ruR&X-Amz-Signature=3a937f8d878188bd213ed06c8aeee38397b09d5f5ad5496b6d2cf7db071fe764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXWRCVN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDO7xzT%2BCnSWtroeIkUBxl3EwEWwoQpjjwYUdCTcfH8NAiA8T8jUAJS3Pq2kO1RZrTtSjXLCkh%2Bn3RjymslB4751SCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMU8tzSTFntheQkG28KtwDSDjl%2FTwdyDzxuvKNsR84i7ajJz6h2wQdKtGvHYPLbP6SGyVahfv0dEqK8lLm1RvlMnMOYEP0FhfyuArifwQX%2BI%2Bi6ArBN2kabOomiK6Vwh3tEqnIKTXfW2aG%2Bu6aVUe2BWfVPhooq7aOuY3dM0y7iTEznUeAUgqaDmvJq1Yp2icrR6Qc%2FZ%2FmdPIvhDNs8xw52CSSVhxZzbca0FRgpODHge93BHqf22Ff%2FytVf3eKm38BYdi1g0IW%2BBErkrKGew47Op00m%2B7QDhFPugpIikfYjJ9eaDaAfbXtylwkF2FyvtxEAb%2BwZ2v1%2Frp6Am7ierhFt1YyoAZ1ZlmE%2BQV48fSgWrYIceAWPZ7pDbt9LqiFUrYjQWSX0RaFXYUTLKFV6suKjh16lXVf4qRmq9wrm%2Fcum1rmgJNsz74AkaQ2CBsLUDh5CXAxbyDCbdlF5AOlUMe%2BkxDbE8T7C24wP70TKhage77EnqGTBTnWI8SJ9Rz6Mxkl0dm6BXlqhLnpcLEfei4zPn7v0jgBpIxtGUHQZVAZMANoqiP5kmwoceQ9gHDWFnokswiupaC5eepDIleIlyfkBWlWA8lap%2BjlnCogNYnORq4mMkv6VsW5jC%2BuYH4gB94Qgd3l08QLGB5pZmMwveDwwgY6pgErfw7j4J1yKcZffBz74r2OE%2BmQN%2FnPId5ACOjwB6PoBw3%2B7r9RDnHRr56nDtbmD23h5Qix47ae6cIzJFN6rDzZHed6jzIBFmKeADxr8kzL9AHmmxcI9Xq%2Bz4osAStnlJZN02bcc5YaEmhtwqT3KNVW0wgS0mryzvK5Eb%2BjML1xca3e1kg%2Fso%2BduGSumgMYjK62ltPN6JcvUonvUlsab5bAxW1N5ruR&X-Amz-Signature=c88738a5977da3b86439c4ef93924e84ff74004fd3345e7c06c093705bd641e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXWRCVN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDO7xzT%2BCnSWtroeIkUBxl3EwEWwoQpjjwYUdCTcfH8NAiA8T8jUAJS3Pq2kO1RZrTtSjXLCkh%2Bn3RjymslB4751SCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMU8tzSTFntheQkG28KtwDSDjl%2FTwdyDzxuvKNsR84i7ajJz6h2wQdKtGvHYPLbP6SGyVahfv0dEqK8lLm1RvlMnMOYEP0FhfyuArifwQX%2BI%2Bi6ArBN2kabOomiK6Vwh3tEqnIKTXfW2aG%2Bu6aVUe2BWfVPhooq7aOuY3dM0y7iTEznUeAUgqaDmvJq1Yp2icrR6Qc%2FZ%2FmdPIvhDNs8xw52CSSVhxZzbca0FRgpODHge93BHqf22Ff%2FytVf3eKm38BYdi1g0IW%2BBErkrKGew47Op00m%2B7QDhFPugpIikfYjJ9eaDaAfbXtylwkF2FyvtxEAb%2BwZ2v1%2Frp6Am7ierhFt1YyoAZ1ZlmE%2BQV48fSgWrYIceAWPZ7pDbt9LqiFUrYjQWSX0RaFXYUTLKFV6suKjh16lXVf4qRmq9wrm%2Fcum1rmgJNsz74AkaQ2CBsLUDh5CXAxbyDCbdlF5AOlUMe%2BkxDbE8T7C24wP70TKhage77EnqGTBTnWI8SJ9Rz6Mxkl0dm6BXlqhLnpcLEfei4zPn7v0jgBpIxtGUHQZVAZMANoqiP5kmwoceQ9gHDWFnokswiupaC5eepDIleIlyfkBWlWA8lap%2BjlnCogNYnORq4mMkv6VsW5jC%2BuYH4gB94Qgd3l08QLGB5pZmMwveDwwgY6pgErfw7j4J1yKcZffBz74r2OE%2BmQN%2FnPId5ACOjwB6PoBw3%2B7r9RDnHRr56nDtbmD23h5Qix47ae6cIzJFN6rDzZHed6jzIBFmKeADxr8kzL9AHmmxcI9Xq%2Bz4osAStnlJZN02bcc5YaEmhtwqT3KNVW0wgS0mryzvK5Eb%2BjML1xca3e1kg%2Fso%2BduGSumgMYjK62ltPN6JcvUonvUlsab5bAxW1N5ruR&X-Amz-Signature=5b77751d5fee5de4af57d3ec5523b122e1c44322531991882ee148471881105d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXWRCVN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDO7xzT%2BCnSWtroeIkUBxl3EwEWwoQpjjwYUdCTcfH8NAiA8T8jUAJS3Pq2kO1RZrTtSjXLCkh%2Bn3RjymslB4751SCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMU8tzSTFntheQkG28KtwDSDjl%2FTwdyDzxuvKNsR84i7ajJz6h2wQdKtGvHYPLbP6SGyVahfv0dEqK8lLm1RvlMnMOYEP0FhfyuArifwQX%2BI%2Bi6ArBN2kabOomiK6Vwh3tEqnIKTXfW2aG%2Bu6aVUe2BWfVPhooq7aOuY3dM0y7iTEznUeAUgqaDmvJq1Yp2icrR6Qc%2FZ%2FmdPIvhDNs8xw52CSSVhxZzbca0FRgpODHge93BHqf22Ff%2FytVf3eKm38BYdi1g0IW%2BBErkrKGew47Op00m%2B7QDhFPugpIikfYjJ9eaDaAfbXtylwkF2FyvtxEAb%2BwZ2v1%2Frp6Am7ierhFt1YyoAZ1ZlmE%2BQV48fSgWrYIceAWPZ7pDbt9LqiFUrYjQWSX0RaFXYUTLKFV6suKjh16lXVf4qRmq9wrm%2Fcum1rmgJNsz74AkaQ2CBsLUDh5CXAxbyDCbdlF5AOlUMe%2BkxDbE8T7C24wP70TKhage77EnqGTBTnWI8SJ9Rz6Mxkl0dm6BXlqhLnpcLEfei4zPn7v0jgBpIxtGUHQZVAZMANoqiP5kmwoceQ9gHDWFnokswiupaC5eepDIleIlyfkBWlWA8lap%2BjlnCogNYnORq4mMkv6VsW5jC%2BuYH4gB94Qgd3l08QLGB5pZmMwveDwwgY6pgErfw7j4J1yKcZffBz74r2OE%2BmQN%2FnPId5ACOjwB6PoBw3%2B7r9RDnHRr56nDtbmD23h5Qix47ae6cIzJFN6rDzZHed6jzIBFmKeADxr8kzL9AHmmxcI9Xq%2Bz4osAStnlJZN02bcc5YaEmhtwqT3KNVW0wgS0mryzvK5Eb%2BjML1xca3e1kg%2Fso%2BduGSumgMYjK62ltPN6JcvUonvUlsab5bAxW1N5ruR&X-Amz-Signature=8327fd5939ad69510f5bcb41b0b91e0baccca29c1a6cda292eae2e9d62af111b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXWRCVN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDO7xzT%2BCnSWtroeIkUBxl3EwEWwoQpjjwYUdCTcfH8NAiA8T8jUAJS3Pq2kO1RZrTtSjXLCkh%2Bn3RjymslB4751SCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMU8tzSTFntheQkG28KtwDSDjl%2FTwdyDzxuvKNsR84i7ajJz6h2wQdKtGvHYPLbP6SGyVahfv0dEqK8lLm1RvlMnMOYEP0FhfyuArifwQX%2BI%2Bi6ArBN2kabOomiK6Vwh3tEqnIKTXfW2aG%2Bu6aVUe2BWfVPhooq7aOuY3dM0y7iTEznUeAUgqaDmvJq1Yp2icrR6Qc%2FZ%2FmdPIvhDNs8xw52CSSVhxZzbca0FRgpODHge93BHqf22Ff%2FytVf3eKm38BYdi1g0IW%2BBErkrKGew47Op00m%2B7QDhFPugpIikfYjJ9eaDaAfbXtylwkF2FyvtxEAb%2BwZ2v1%2Frp6Am7ierhFt1YyoAZ1ZlmE%2BQV48fSgWrYIceAWPZ7pDbt9LqiFUrYjQWSX0RaFXYUTLKFV6suKjh16lXVf4qRmq9wrm%2Fcum1rmgJNsz74AkaQ2CBsLUDh5CXAxbyDCbdlF5AOlUMe%2BkxDbE8T7C24wP70TKhage77EnqGTBTnWI8SJ9Rz6Mxkl0dm6BXlqhLnpcLEfei4zPn7v0jgBpIxtGUHQZVAZMANoqiP5kmwoceQ9gHDWFnokswiupaC5eepDIleIlyfkBWlWA8lap%2BjlnCogNYnORq4mMkv6VsW5jC%2BuYH4gB94Qgd3l08QLGB5pZmMwveDwwgY6pgErfw7j4J1yKcZffBz74r2OE%2BmQN%2FnPId5ACOjwB6PoBw3%2B7r9RDnHRr56nDtbmD23h5Qix47ae6cIzJFN6rDzZHed6jzIBFmKeADxr8kzL9AHmmxcI9Xq%2Bz4osAStnlJZN02bcc5YaEmhtwqT3KNVW0wgS0mryzvK5Eb%2BjML1xca3e1kg%2Fso%2BduGSumgMYjK62ltPN6JcvUonvUlsab5bAxW1N5ruR&X-Amz-Signature=e5c4fbd3416f149a41b52f64c032204b97c4520f5f3df40789f9e7c74fe418cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
