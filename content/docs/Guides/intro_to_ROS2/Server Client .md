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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2SRWAI%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDzXXFv0v0EjarCgFznuM%2FugjxaCXoDVZNJTUtMTaAAsAIgAvmjaMRPRgWY2KI3fl63JasG5n8Lkdf6aZeShkvqlgMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTZeQRo%2FaX35CzoSSrcA3TfP%2B6e%2Byfbvc%2FI2EA5BBqrAJH3dcywGxB9iSz1isEwoTgFbOnLnZoUFr10DSC0ZPTgCP41Z5yftNE22rwHq01cxnl1zLfodERUDE3MuumC2gM8lgQmPoDmGSdQ4ZB%2F%2B5x2GZMHgf8oJWr8YM6WQIU3HFE0CtoN%2B%2BtMZ%2B9%2BXlGUKCTcebhq7iw%2B4Ho9gjwjFLo%2FmGVrzmWFoht5Fj6wnafzuxuSlcxoEEGl0zoUYzCnxA2nFjCWu3naVs9PX3sQONvPrgTCdgbG1%2FSfMVNZFyCw0DwDRJWKA86cNiT3t5Cizzah5ZH6IT5js7EFbgdzpAsJvi35MI%2BifSnjol6%2F7oBoSDNGDdz5IxM7%2B%2FBA7qlPMlfC0dxufoT6hrFl0kshyeTkCHRWMsOrMtgrrBtMyy002EJaKalW9piXwem95qaCDQtlwG0FE79%2B6hSs%2BVqk%2FJb4d7H0EPscgV6BBwEom98s49AbgBEi5cRkiOG4mYJX84Ds8u5B19ifFDmJr9Kn5EJez8S2BEOwaun2%2BNYw43MBKxMxxPytesmmvrpT3xNI0guUaxTSZdL2eYwcqZIyF%2BL2HC%2BQwjLJWX6yVVibww7dbm7DltX%2B9CIm14Ab4hB5qEtFzYNFaNgLEDCtMIHaiMEGOqUBJHMkCW5Dcy2IEMyxcOvSlUHQTUAOPRM4dSzYbV8fLmkxNaASKEQwsfgnJKGXxUqsW%2FRUjZE30%2BqFjad01wsPZ5wNncJXhKSkvhG4WhpqQSFc3PRkmjeE5BV38j%2BPNOse5XX1w6aJeC3GoU8Mij4EiffvvetQfln0Xd6TvWta%2BWVWETyDS5wfevJ3j%2BzKkU9Am0JoYAVrz0r9iAA%2Bqr3HPbR6qPN9&X-Amz-Signature=8765fb6f130e2ffe87b71010c64689b122c6a6b2228812058b1a4f80ad30eca9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2SRWAI%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDzXXFv0v0EjarCgFznuM%2FugjxaCXoDVZNJTUtMTaAAsAIgAvmjaMRPRgWY2KI3fl63JasG5n8Lkdf6aZeShkvqlgMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTZeQRo%2FaX35CzoSSrcA3TfP%2B6e%2Byfbvc%2FI2EA5BBqrAJH3dcywGxB9iSz1isEwoTgFbOnLnZoUFr10DSC0ZPTgCP41Z5yftNE22rwHq01cxnl1zLfodERUDE3MuumC2gM8lgQmPoDmGSdQ4ZB%2F%2B5x2GZMHgf8oJWr8YM6WQIU3HFE0CtoN%2B%2BtMZ%2B9%2BXlGUKCTcebhq7iw%2B4Ho9gjwjFLo%2FmGVrzmWFoht5Fj6wnafzuxuSlcxoEEGl0zoUYzCnxA2nFjCWu3naVs9PX3sQONvPrgTCdgbG1%2FSfMVNZFyCw0DwDRJWKA86cNiT3t5Cizzah5ZH6IT5js7EFbgdzpAsJvi35MI%2BifSnjol6%2F7oBoSDNGDdz5IxM7%2B%2FBA7qlPMlfC0dxufoT6hrFl0kshyeTkCHRWMsOrMtgrrBtMyy002EJaKalW9piXwem95qaCDQtlwG0FE79%2B6hSs%2BVqk%2FJb4d7H0EPscgV6BBwEom98s49AbgBEi5cRkiOG4mYJX84Ds8u5B19ifFDmJr9Kn5EJez8S2BEOwaun2%2BNYw43MBKxMxxPytesmmvrpT3xNI0guUaxTSZdL2eYwcqZIyF%2BL2HC%2BQwjLJWX6yVVibww7dbm7DltX%2B9CIm14Ab4hB5qEtFzYNFaNgLEDCtMIHaiMEGOqUBJHMkCW5Dcy2IEMyxcOvSlUHQTUAOPRM4dSzYbV8fLmkxNaASKEQwsfgnJKGXxUqsW%2FRUjZE30%2BqFjad01wsPZ5wNncJXhKSkvhG4WhpqQSFc3PRkmjeE5BV38j%2BPNOse5XX1w6aJeC3GoU8Mij4EiffvvetQfln0Xd6TvWta%2BWVWETyDS5wfevJ3j%2BzKkU9Am0JoYAVrz0r9iAA%2Bqr3HPbR6qPN9&X-Amz-Signature=bdefebe424a6c58f1ae8fdb557749996fdc0cb81022664a1876d26522d04f002&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2SRWAI%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDzXXFv0v0EjarCgFznuM%2FugjxaCXoDVZNJTUtMTaAAsAIgAvmjaMRPRgWY2KI3fl63JasG5n8Lkdf6aZeShkvqlgMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTZeQRo%2FaX35CzoSSrcA3TfP%2B6e%2Byfbvc%2FI2EA5BBqrAJH3dcywGxB9iSz1isEwoTgFbOnLnZoUFr10DSC0ZPTgCP41Z5yftNE22rwHq01cxnl1zLfodERUDE3MuumC2gM8lgQmPoDmGSdQ4ZB%2F%2B5x2GZMHgf8oJWr8YM6WQIU3HFE0CtoN%2B%2BtMZ%2B9%2BXlGUKCTcebhq7iw%2B4Ho9gjwjFLo%2FmGVrzmWFoht5Fj6wnafzuxuSlcxoEEGl0zoUYzCnxA2nFjCWu3naVs9PX3sQONvPrgTCdgbG1%2FSfMVNZFyCw0DwDRJWKA86cNiT3t5Cizzah5ZH6IT5js7EFbgdzpAsJvi35MI%2BifSnjol6%2F7oBoSDNGDdz5IxM7%2B%2FBA7qlPMlfC0dxufoT6hrFl0kshyeTkCHRWMsOrMtgrrBtMyy002EJaKalW9piXwem95qaCDQtlwG0FE79%2B6hSs%2BVqk%2FJb4d7H0EPscgV6BBwEom98s49AbgBEi5cRkiOG4mYJX84Ds8u5B19ifFDmJr9Kn5EJez8S2BEOwaun2%2BNYw43MBKxMxxPytesmmvrpT3xNI0guUaxTSZdL2eYwcqZIyF%2BL2HC%2BQwjLJWX6yVVibww7dbm7DltX%2B9CIm14Ab4hB5qEtFzYNFaNgLEDCtMIHaiMEGOqUBJHMkCW5Dcy2IEMyxcOvSlUHQTUAOPRM4dSzYbV8fLmkxNaASKEQwsfgnJKGXxUqsW%2FRUjZE30%2BqFjad01wsPZ5wNncJXhKSkvhG4WhpqQSFc3PRkmjeE5BV38j%2BPNOse5XX1w6aJeC3GoU8Mij4EiffvvetQfln0Xd6TvWta%2BWVWETyDS5wfevJ3j%2BzKkU9Am0JoYAVrz0r9iAA%2Bqr3HPbR6qPN9&X-Amz-Signature=19085fdcbf29c0bcdef73a197244511c77143eb55d4ee36e0e100eb0290d7c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2SRWAI%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDzXXFv0v0EjarCgFznuM%2FugjxaCXoDVZNJTUtMTaAAsAIgAvmjaMRPRgWY2KI3fl63JasG5n8Lkdf6aZeShkvqlgMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTZeQRo%2FaX35CzoSSrcA3TfP%2B6e%2Byfbvc%2FI2EA5BBqrAJH3dcywGxB9iSz1isEwoTgFbOnLnZoUFr10DSC0ZPTgCP41Z5yftNE22rwHq01cxnl1zLfodERUDE3MuumC2gM8lgQmPoDmGSdQ4ZB%2F%2B5x2GZMHgf8oJWr8YM6WQIU3HFE0CtoN%2B%2BtMZ%2B9%2BXlGUKCTcebhq7iw%2B4Ho9gjwjFLo%2FmGVrzmWFoht5Fj6wnafzuxuSlcxoEEGl0zoUYzCnxA2nFjCWu3naVs9PX3sQONvPrgTCdgbG1%2FSfMVNZFyCw0DwDRJWKA86cNiT3t5Cizzah5ZH6IT5js7EFbgdzpAsJvi35MI%2BifSnjol6%2F7oBoSDNGDdz5IxM7%2B%2FBA7qlPMlfC0dxufoT6hrFl0kshyeTkCHRWMsOrMtgrrBtMyy002EJaKalW9piXwem95qaCDQtlwG0FE79%2B6hSs%2BVqk%2FJb4d7H0EPscgV6BBwEom98s49AbgBEi5cRkiOG4mYJX84Ds8u5B19ifFDmJr9Kn5EJez8S2BEOwaun2%2BNYw43MBKxMxxPytesmmvrpT3xNI0guUaxTSZdL2eYwcqZIyF%2BL2HC%2BQwjLJWX6yVVibww7dbm7DltX%2B9CIm14Ab4hB5qEtFzYNFaNgLEDCtMIHaiMEGOqUBJHMkCW5Dcy2IEMyxcOvSlUHQTUAOPRM4dSzYbV8fLmkxNaASKEQwsfgnJKGXxUqsW%2FRUjZE30%2BqFjad01wsPZ5wNncJXhKSkvhG4WhpqQSFc3PRkmjeE5BV38j%2BPNOse5XX1w6aJeC3GoU8Mij4EiffvvetQfln0Xd6TvWta%2BWVWETyDS5wfevJ3j%2BzKkU9Am0JoYAVrz0r9iAA%2Bqr3HPbR6qPN9&X-Amz-Signature=3321695deed0bf231ff2c9eecc934b7b3cb52e5dcb0e0a2474c54c144989e9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2SRWAI%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDzXXFv0v0EjarCgFznuM%2FugjxaCXoDVZNJTUtMTaAAsAIgAvmjaMRPRgWY2KI3fl63JasG5n8Lkdf6aZeShkvqlgMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTZeQRo%2FaX35CzoSSrcA3TfP%2B6e%2Byfbvc%2FI2EA5BBqrAJH3dcywGxB9iSz1isEwoTgFbOnLnZoUFr10DSC0ZPTgCP41Z5yftNE22rwHq01cxnl1zLfodERUDE3MuumC2gM8lgQmPoDmGSdQ4ZB%2F%2B5x2GZMHgf8oJWr8YM6WQIU3HFE0CtoN%2B%2BtMZ%2B9%2BXlGUKCTcebhq7iw%2B4Ho9gjwjFLo%2FmGVrzmWFoht5Fj6wnafzuxuSlcxoEEGl0zoUYzCnxA2nFjCWu3naVs9PX3sQONvPrgTCdgbG1%2FSfMVNZFyCw0DwDRJWKA86cNiT3t5Cizzah5ZH6IT5js7EFbgdzpAsJvi35MI%2BifSnjol6%2F7oBoSDNGDdz5IxM7%2B%2FBA7qlPMlfC0dxufoT6hrFl0kshyeTkCHRWMsOrMtgrrBtMyy002EJaKalW9piXwem95qaCDQtlwG0FE79%2B6hSs%2BVqk%2FJb4d7H0EPscgV6BBwEom98s49AbgBEi5cRkiOG4mYJX84Ds8u5B19ifFDmJr9Kn5EJez8S2BEOwaun2%2BNYw43MBKxMxxPytesmmvrpT3xNI0guUaxTSZdL2eYwcqZIyF%2BL2HC%2BQwjLJWX6yVVibww7dbm7DltX%2B9CIm14Ab4hB5qEtFzYNFaNgLEDCtMIHaiMEGOqUBJHMkCW5Dcy2IEMyxcOvSlUHQTUAOPRM4dSzYbV8fLmkxNaASKEQwsfgnJKGXxUqsW%2FRUjZE30%2BqFjad01wsPZ5wNncJXhKSkvhG4WhpqQSFc3PRkmjeE5BV38j%2BPNOse5XX1w6aJeC3GoU8Mij4EiffvvetQfln0Xd6TvWta%2BWVWETyDS5wfevJ3j%2BzKkU9Am0JoYAVrz0r9iAA%2Bqr3HPbR6qPN9&X-Amz-Signature=a3e4ad0d85a0b2c21323bc3a05241d0894e409e6949ebb35b88609cc6ce837dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
