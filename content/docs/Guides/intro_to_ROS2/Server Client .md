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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YBHNST%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpKk5hjeZT6UQLvWNqZ3OVSJ0PIRtV4XBSWixheiHieAiBKxet%2FXKmC4T4dsJxT6YSa0WAJZksS%2BOHhiF%2FN%2B0tyQir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMk6DRupTqHZwAZ6B7KtwDqXvE40kO13T350rpCSop25ZF0JymAAFmcyyDhW37gQ%2Flx3N%2FJ8OYglyu2ww75jBK4fZzfWmfZGC%2B03EQP0iZq2zI8c9Xw%2FGrUYZ6NfRYh1C3606cswAgmANijahFTHym7dkRLpvX273%2FqVY%2FXOFheZmkcfGZE%2FIHGU%2BRG3caelILdNuhzFouYmJWYZJxVSJWI3vRZiulSW5XjI2QvckZaoN8MwM2LaqfGhbNLTbrW7qikz2fdSLEj1RfwEvqvsBiTxaINrSuuRDEl9XLdqPBvDPIMxcu8kNmSOGyGQpTluY1fRpFTKC0BBKLki1fbpWLG%2FZ07Q1%2BtwEsFNbBjm5nDgBZuXCyVbxbZEUBsYOo35zYOAevZA1BGqKvbjFBxFD3Rccextj9DisIDIwa5hkizhh5VJwur%2FRYHDSdKbb8wDgU%2F2UZtUuRWjR8uE8qs2IfO0FBwmhjLy%2BdR%2BYqzkIfISU%2F6QHi1S1cShOQoAwxBl6p%2Bv4aYP6ZeiBCLDWeaPbPN%2BTi6YkZPzR0y6me3VYgfGX1JdZvln6TTph0Si62%2FUBDl9YrUMjHRE61cz412K3UMkulf9oZ1u7O5cQolOFkuGxMKK4I0pRXjTYCWyLnd16%2BskJtvkUUARvE04owvqTZvgY6pgFUWpcUe6ahSZcFjmHDs7rxX4Ldx%2Fh2DDCSjNYzLIH8yfFycOP7gre5bDKtQ1pA03qsamEty8ZTHnWX1wcrQak01l7rytKnVA0FqHR4emFF9lmutWt8hdFvl0sc%2F7Ougo6G0QSWve%2FLCDrv0eb1R8Uz693dv5vjENeCc8DF9BVIPmv%2F6zKVrWXzKP9gx1pYfdcuk50BQ6R2PkPtCVaKZhC918o%2BNiMr&X-Amz-Signature=8e0f4397e0237c15d50cf497f61b6dc1f2322b7421a26b170fff1c761132c179&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YBHNST%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpKk5hjeZT6UQLvWNqZ3OVSJ0PIRtV4XBSWixheiHieAiBKxet%2FXKmC4T4dsJxT6YSa0WAJZksS%2BOHhiF%2FN%2B0tyQir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMk6DRupTqHZwAZ6B7KtwDqXvE40kO13T350rpCSop25ZF0JymAAFmcyyDhW37gQ%2Flx3N%2FJ8OYglyu2ww75jBK4fZzfWmfZGC%2B03EQP0iZq2zI8c9Xw%2FGrUYZ6NfRYh1C3606cswAgmANijahFTHym7dkRLpvX273%2FqVY%2FXOFheZmkcfGZE%2FIHGU%2BRG3caelILdNuhzFouYmJWYZJxVSJWI3vRZiulSW5XjI2QvckZaoN8MwM2LaqfGhbNLTbrW7qikz2fdSLEj1RfwEvqvsBiTxaINrSuuRDEl9XLdqPBvDPIMxcu8kNmSOGyGQpTluY1fRpFTKC0BBKLki1fbpWLG%2FZ07Q1%2BtwEsFNbBjm5nDgBZuXCyVbxbZEUBsYOo35zYOAevZA1BGqKvbjFBxFD3Rccextj9DisIDIwa5hkizhh5VJwur%2FRYHDSdKbb8wDgU%2F2UZtUuRWjR8uE8qs2IfO0FBwmhjLy%2BdR%2BYqzkIfISU%2F6QHi1S1cShOQoAwxBl6p%2Bv4aYP6ZeiBCLDWeaPbPN%2BTi6YkZPzR0y6me3VYgfGX1JdZvln6TTph0Si62%2FUBDl9YrUMjHRE61cz412K3UMkulf9oZ1u7O5cQolOFkuGxMKK4I0pRXjTYCWyLnd16%2BskJtvkUUARvE04owvqTZvgY6pgFUWpcUe6ahSZcFjmHDs7rxX4Ldx%2Fh2DDCSjNYzLIH8yfFycOP7gre5bDKtQ1pA03qsamEty8ZTHnWX1wcrQak01l7rytKnVA0FqHR4emFF9lmutWt8hdFvl0sc%2F7Ougo6G0QSWve%2FLCDrv0eb1R8Uz693dv5vjENeCc8DF9BVIPmv%2F6zKVrWXzKP9gx1pYfdcuk50BQ6R2PkPtCVaKZhC918o%2BNiMr&X-Amz-Signature=4c4263c785c7593f86e0ddbf16754843928a9897fa878e9e19f0b10597903f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YBHNST%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpKk5hjeZT6UQLvWNqZ3OVSJ0PIRtV4XBSWixheiHieAiBKxet%2FXKmC4T4dsJxT6YSa0WAJZksS%2BOHhiF%2FN%2B0tyQir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMk6DRupTqHZwAZ6B7KtwDqXvE40kO13T350rpCSop25ZF0JymAAFmcyyDhW37gQ%2Flx3N%2FJ8OYglyu2ww75jBK4fZzfWmfZGC%2B03EQP0iZq2zI8c9Xw%2FGrUYZ6NfRYh1C3606cswAgmANijahFTHym7dkRLpvX273%2FqVY%2FXOFheZmkcfGZE%2FIHGU%2BRG3caelILdNuhzFouYmJWYZJxVSJWI3vRZiulSW5XjI2QvckZaoN8MwM2LaqfGhbNLTbrW7qikz2fdSLEj1RfwEvqvsBiTxaINrSuuRDEl9XLdqPBvDPIMxcu8kNmSOGyGQpTluY1fRpFTKC0BBKLki1fbpWLG%2FZ07Q1%2BtwEsFNbBjm5nDgBZuXCyVbxbZEUBsYOo35zYOAevZA1BGqKvbjFBxFD3Rccextj9DisIDIwa5hkizhh5VJwur%2FRYHDSdKbb8wDgU%2F2UZtUuRWjR8uE8qs2IfO0FBwmhjLy%2BdR%2BYqzkIfISU%2F6QHi1S1cShOQoAwxBl6p%2Bv4aYP6ZeiBCLDWeaPbPN%2BTi6YkZPzR0y6me3VYgfGX1JdZvln6TTph0Si62%2FUBDl9YrUMjHRE61cz412K3UMkulf9oZ1u7O5cQolOFkuGxMKK4I0pRXjTYCWyLnd16%2BskJtvkUUARvE04owvqTZvgY6pgFUWpcUe6ahSZcFjmHDs7rxX4Ldx%2Fh2DDCSjNYzLIH8yfFycOP7gre5bDKtQ1pA03qsamEty8ZTHnWX1wcrQak01l7rytKnVA0FqHR4emFF9lmutWt8hdFvl0sc%2F7Ougo6G0QSWve%2FLCDrv0eb1R8Uz693dv5vjENeCc8DF9BVIPmv%2F6zKVrWXzKP9gx1pYfdcuk50BQ6R2PkPtCVaKZhC918o%2BNiMr&X-Amz-Signature=d30eb29acdcf0ca794c12081ff9ad6944865217980ecb4ff69f04ce29b8a1021&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YBHNST%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpKk5hjeZT6UQLvWNqZ3OVSJ0PIRtV4XBSWixheiHieAiBKxet%2FXKmC4T4dsJxT6YSa0WAJZksS%2BOHhiF%2FN%2B0tyQir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMk6DRupTqHZwAZ6B7KtwDqXvE40kO13T350rpCSop25ZF0JymAAFmcyyDhW37gQ%2Flx3N%2FJ8OYglyu2ww75jBK4fZzfWmfZGC%2B03EQP0iZq2zI8c9Xw%2FGrUYZ6NfRYh1C3606cswAgmANijahFTHym7dkRLpvX273%2FqVY%2FXOFheZmkcfGZE%2FIHGU%2BRG3caelILdNuhzFouYmJWYZJxVSJWI3vRZiulSW5XjI2QvckZaoN8MwM2LaqfGhbNLTbrW7qikz2fdSLEj1RfwEvqvsBiTxaINrSuuRDEl9XLdqPBvDPIMxcu8kNmSOGyGQpTluY1fRpFTKC0BBKLki1fbpWLG%2FZ07Q1%2BtwEsFNbBjm5nDgBZuXCyVbxbZEUBsYOo35zYOAevZA1BGqKvbjFBxFD3Rccextj9DisIDIwa5hkizhh5VJwur%2FRYHDSdKbb8wDgU%2F2UZtUuRWjR8uE8qs2IfO0FBwmhjLy%2BdR%2BYqzkIfISU%2F6QHi1S1cShOQoAwxBl6p%2Bv4aYP6ZeiBCLDWeaPbPN%2BTi6YkZPzR0y6me3VYgfGX1JdZvln6TTph0Si62%2FUBDl9YrUMjHRE61cz412K3UMkulf9oZ1u7O5cQolOFkuGxMKK4I0pRXjTYCWyLnd16%2BskJtvkUUARvE04owvqTZvgY6pgFUWpcUe6ahSZcFjmHDs7rxX4Ldx%2Fh2DDCSjNYzLIH8yfFycOP7gre5bDKtQ1pA03qsamEty8ZTHnWX1wcrQak01l7rytKnVA0FqHR4emFF9lmutWt8hdFvl0sc%2F7Ougo6G0QSWve%2FLCDrv0eb1R8Uz693dv5vjENeCc8DF9BVIPmv%2F6zKVrWXzKP9gx1pYfdcuk50BQ6R2PkPtCVaKZhC918o%2BNiMr&X-Amz-Signature=1f33670cea87306fd815e80ae56b5ef9c87cc860596bf6a130ba63a5aa8e8401&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YBHNST%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpKk5hjeZT6UQLvWNqZ3OVSJ0PIRtV4XBSWixheiHieAiBKxet%2FXKmC4T4dsJxT6YSa0WAJZksS%2BOHhiF%2FN%2B0tyQir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMk6DRupTqHZwAZ6B7KtwDqXvE40kO13T350rpCSop25ZF0JymAAFmcyyDhW37gQ%2Flx3N%2FJ8OYglyu2ww75jBK4fZzfWmfZGC%2B03EQP0iZq2zI8c9Xw%2FGrUYZ6NfRYh1C3606cswAgmANijahFTHym7dkRLpvX273%2FqVY%2FXOFheZmkcfGZE%2FIHGU%2BRG3caelILdNuhzFouYmJWYZJxVSJWI3vRZiulSW5XjI2QvckZaoN8MwM2LaqfGhbNLTbrW7qikz2fdSLEj1RfwEvqvsBiTxaINrSuuRDEl9XLdqPBvDPIMxcu8kNmSOGyGQpTluY1fRpFTKC0BBKLki1fbpWLG%2FZ07Q1%2BtwEsFNbBjm5nDgBZuXCyVbxbZEUBsYOo35zYOAevZA1BGqKvbjFBxFD3Rccextj9DisIDIwa5hkizhh5VJwur%2FRYHDSdKbb8wDgU%2F2UZtUuRWjR8uE8qs2IfO0FBwmhjLy%2BdR%2BYqzkIfISU%2F6QHi1S1cShOQoAwxBl6p%2Bv4aYP6ZeiBCLDWeaPbPN%2BTi6YkZPzR0y6me3VYgfGX1JdZvln6TTph0Si62%2FUBDl9YrUMjHRE61cz412K3UMkulf9oZ1u7O5cQolOFkuGxMKK4I0pRXjTYCWyLnd16%2BskJtvkUUARvE04owvqTZvgY6pgFUWpcUe6ahSZcFjmHDs7rxX4Ldx%2Fh2DDCSjNYzLIH8yfFycOP7gre5bDKtQ1pA03qsamEty8ZTHnWX1wcrQak01l7rytKnVA0FqHR4emFF9lmutWt8hdFvl0sc%2F7Ougo6G0QSWve%2FLCDrv0eb1R8Uz693dv5vjENeCc8DF9BVIPmv%2F6zKVrWXzKP9gx1pYfdcuk50BQ6R2PkPtCVaKZhC918o%2BNiMr&X-Amz-Signature=86e11fd86dd00ba836a28e9e8dfd2ae997ba990cc4e9621d82d583fcd6167e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
