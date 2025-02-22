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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYYBJXO%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb4TBu%2F1i1u%2BsV1Hujq6JeAcbyh%2BPv2mqlEPTUD43BgAiAvBEX%2B5HpvFliQIzskijv%2Bm2p727OuKwtKpkbVGOn7ZyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwS8%2FfLk1vXPfShc6KtwDaXM68xHsWA1TWUMXUtcDiPhg8bgdukXMVZLJuVdNHeKHiK0veYy4pIWRW8hlYNsAqcM0lFaRudTrscRAWo5ki%2Bdj3I%2BWmvvsO9iVTaJHQ0Mv8Pn4eR2ldzS8e6N3gV379KOVvTSn2saIPlN%2BxzsnG8WhzPtN%2B3%2BZNleXG8Vggmy6pjOrrwKSD%2BuxNMvMLWJcakoCLRXW6kSfpEclzKRbPuw15wVHL6iI8uJZW2cMhmUymEO4o6HZv7vlx90LGiqRNgl3HgJSaARkwtZEzoFepPiPKV%2BFn8EELv1bb6BoLEPC0f2g8hxoLzaxWfGAMbg%2BVl5te3fi0kV7%2Bg34EkYc7GQvl8D%2FKnZwtCfcswQoD4VpnnkjDm87KkO3rOX5poFfIAgYd6V5bSBeCZIsqYQxUiorLSc%2BPApyWrCEu2ax%2BpHgGCmD9FQ3ptGYPFIP6k9QcnX%2Bjiad5HQHfEbKb0kCIJNI1gQSQOg7w7Ft%2BSNEFY19HQjyLtgEyDpKTsFatRcK0A0CoIUfmHNfl6Y05KRWxwiz5%2Ffy%2BojgS%2FPB2u5XDt6QiaRh3qdgVD85nZ2dh6gWtUgw2ZEL2dZ2iSUPW02J6nm0%2F2eEGtiic2W4D73bWxAa8Amzo%2FD%2FhdFUCIowsKjpvQY6pgGS9elUeu3Efp5U7LkJeJv8JS%2B7RXJkJbIItt8OgHfueiI9i4MbngpXXWFdyq%2BKGLAF%2BycyKVVf6CPGsZiNkxdVvJ4gzjtJ3FwD7iWVxQP%2BgFX45dk5LtTMANFweeiop92mL%2FsqzTiybKLb3evoGgUGJXMqLNzX0spJRr6dKq3FxGhOo2Zl7KDUjQ%2FGZ%2F9uYpdsiW6LWBQla3epNcLr7j6vXtncF9wQ&X-Amz-Signature=9a1c81dbd8d004ad8d774400892413282fbeccdb87141dbfdeba5a4616dc9910&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYYBJXO%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb4TBu%2F1i1u%2BsV1Hujq6JeAcbyh%2BPv2mqlEPTUD43BgAiAvBEX%2B5HpvFliQIzskijv%2Bm2p727OuKwtKpkbVGOn7ZyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwS8%2FfLk1vXPfShc6KtwDaXM68xHsWA1TWUMXUtcDiPhg8bgdukXMVZLJuVdNHeKHiK0veYy4pIWRW8hlYNsAqcM0lFaRudTrscRAWo5ki%2Bdj3I%2BWmvvsO9iVTaJHQ0Mv8Pn4eR2ldzS8e6N3gV379KOVvTSn2saIPlN%2BxzsnG8WhzPtN%2B3%2BZNleXG8Vggmy6pjOrrwKSD%2BuxNMvMLWJcakoCLRXW6kSfpEclzKRbPuw15wVHL6iI8uJZW2cMhmUymEO4o6HZv7vlx90LGiqRNgl3HgJSaARkwtZEzoFepPiPKV%2BFn8EELv1bb6BoLEPC0f2g8hxoLzaxWfGAMbg%2BVl5te3fi0kV7%2Bg34EkYc7GQvl8D%2FKnZwtCfcswQoD4VpnnkjDm87KkO3rOX5poFfIAgYd6V5bSBeCZIsqYQxUiorLSc%2BPApyWrCEu2ax%2BpHgGCmD9FQ3ptGYPFIP6k9QcnX%2Bjiad5HQHfEbKb0kCIJNI1gQSQOg7w7Ft%2BSNEFY19HQjyLtgEyDpKTsFatRcK0A0CoIUfmHNfl6Y05KRWxwiz5%2Ffy%2BojgS%2FPB2u5XDt6QiaRh3qdgVD85nZ2dh6gWtUgw2ZEL2dZ2iSUPW02J6nm0%2F2eEGtiic2W4D73bWxAa8Amzo%2FD%2FhdFUCIowsKjpvQY6pgGS9elUeu3Efp5U7LkJeJv8JS%2B7RXJkJbIItt8OgHfueiI9i4MbngpXXWFdyq%2BKGLAF%2BycyKVVf6CPGsZiNkxdVvJ4gzjtJ3FwD7iWVxQP%2BgFX45dk5LtTMANFweeiop92mL%2FsqzTiybKLb3evoGgUGJXMqLNzX0spJRr6dKq3FxGhOo2Zl7KDUjQ%2FGZ%2F9uYpdsiW6LWBQla3epNcLr7j6vXtncF9wQ&X-Amz-Signature=5646cc64c1cd69b70919f1809e43c67bcec3d4b2d6de3deb3b1d6b728e48eafa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYYBJXO%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb4TBu%2F1i1u%2BsV1Hujq6JeAcbyh%2BPv2mqlEPTUD43BgAiAvBEX%2B5HpvFliQIzskijv%2Bm2p727OuKwtKpkbVGOn7ZyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwS8%2FfLk1vXPfShc6KtwDaXM68xHsWA1TWUMXUtcDiPhg8bgdukXMVZLJuVdNHeKHiK0veYy4pIWRW8hlYNsAqcM0lFaRudTrscRAWo5ki%2Bdj3I%2BWmvvsO9iVTaJHQ0Mv8Pn4eR2ldzS8e6N3gV379KOVvTSn2saIPlN%2BxzsnG8WhzPtN%2B3%2BZNleXG8Vggmy6pjOrrwKSD%2BuxNMvMLWJcakoCLRXW6kSfpEclzKRbPuw15wVHL6iI8uJZW2cMhmUymEO4o6HZv7vlx90LGiqRNgl3HgJSaARkwtZEzoFepPiPKV%2BFn8EELv1bb6BoLEPC0f2g8hxoLzaxWfGAMbg%2BVl5te3fi0kV7%2Bg34EkYc7GQvl8D%2FKnZwtCfcswQoD4VpnnkjDm87KkO3rOX5poFfIAgYd6V5bSBeCZIsqYQxUiorLSc%2BPApyWrCEu2ax%2BpHgGCmD9FQ3ptGYPFIP6k9QcnX%2Bjiad5HQHfEbKb0kCIJNI1gQSQOg7w7Ft%2BSNEFY19HQjyLtgEyDpKTsFatRcK0A0CoIUfmHNfl6Y05KRWxwiz5%2Ffy%2BojgS%2FPB2u5XDt6QiaRh3qdgVD85nZ2dh6gWtUgw2ZEL2dZ2iSUPW02J6nm0%2F2eEGtiic2W4D73bWxAa8Amzo%2FD%2FhdFUCIowsKjpvQY6pgGS9elUeu3Efp5U7LkJeJv8JS%2B7RXJkJbIItt8OgHfueiI9i4MbngpXXWFdyq%2BKGLAF%2BycyKVVf6CPGsZiNkxdVvJ4gzjtJ3FwD7iWVxQP%2BgFX45dk5LtTMANFweeiop92mL%2FsqzTiybKLb3evoGgUGJXMqLNzX0spJRr6dKq3FxGhOo2Zl7KDUjQ%2FGZ%2F9uYpdsiW6LWBQla3epNcLr7j6vXtncF9wQ&X-Amz-Signature=2b8f28889b426421052520e3902141d0a0f2e85a3c589a3734ecf9ef86f8597c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYYBJXO%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb4TBu%2F1i1u%2BsV1Hujq6JeAcbyh%2BPv2mqlEPTUD43BgAiAvBEX%2B5HpvFliQIzskijv%2Bm2p727OuKwtKpkbVGOn7ZyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwS8%2FfLk1vXPfShc6KtwDaXM68xHsWA1TWUMXUtcDiPhg8bgdukXMVZLJuVdNHeKHiK0veYy4pIWRW8hlYNsAqcM0lFaRudTrscRAWo5ki%2Bdj3I%2BWmvvsO9iVTaJHQ0Mv8Pn4eR2ldzS8e6N3gV379KOVvTSn2saIPlN%2BxzsnG8WhzPtN%2B3%2BZNleXG8Vggmy6pjOrrwKSD%2BuxNMvMLWJcakoCLRXW6kSfpEclzKRbPuw15wVHL6iI8uJZW2cMhmUymEO4o6HZv7vlx90LGiqRNgl3HgJSaARkwtZEzoFepPiPKV%2BFn8EELv1bb6BoLEPC0f2g8hxoLzaxWfGAMbg%2BVl5te3fi0kV7%2Bg34EkYc7GQvl8D%2FKnZwtCfcswQoD4VpnnkjDm87KkO3rOX5poFfIAgYd6V5bSBeCZIsqYQxUiorLSc%2BPApyWrCEu2ax%2BpHgGCmD9FQ3ptGYPFIP6k9QcnX%2Bjiad5HQHfEbKb0kCIJNI1gQSQOg7w7Ft%2BSNEFY19HQjyLtgEyDpKTsFatRcK0A0CoIUfmHNfl6Y05KRWxwiz5%2Ffy%2BojgS%2FPB2u5XDt6QiaRh3qdgVD85nZ2dh6gWtUgw2ZEL2dZ2iSUPW02J6nm0%2F2eEGtiic2W4D73bWxAa8Amzo%2FD%2FhdFUCIowsKjpvQY6pgGS9elUeu3Efp5U7LkJeJv8JS%2B7RXJkJbIItt8OgHfueiI9i4MbngpXXWFdyq%2BKGLAF%2BycyKVVf6CPGsZiNkxdVvJ4gzjtJ3FwD7iWVxQP%2BgFX45dk5LtTMANFweeiop92mL%2FsqzTiybKLb3evoGgUGJXMqLNzX0spJRr6dKq3FxGhOo2Zl7KDUjQ%2FGZ%2F9uYpdsiW6LWBQla3epNcLr7j6vXtncF9wQ&X-Amz-Signature=bded10604f0e9373a932f50e83edeac0c4458aefd15eb3c2a0caf5dfc0fa42c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYYBJXO%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb4TBu%2F1i1u%2BsV1Hujq6JeAcbyh%2BPv2mqlEPTUD43BgAiAvBEX%2B5HpvFliQIzskijv%2Bm2p727OuKwtKpkbVGOn7ZyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwS8%2FfLk1vXPfShc6KtwDaXM68xHsWA1TWUMXUtcDiPhg8bgdukXMVZLJuVdNHeKHiK0veYy4pIWRW8hlYNsAqcM0lFaRudTrscRAWo5ki%2Bdj3I%2BWmvvsO9iVTaJHQ0Mv8Pn4eR2ldzS8e6N3gV379KOVvTSn2saIPlN%2BxzsnG8WhzPtN%2B3%2BZNleXG8Vggmy6pjOrrwKSD%2BuxNMvMLWJcakoCLRXW6kSfpEclzKRbPuw15wVHL6iI8uJZW2cMhmUymEO4o6HZv7vlx90LGiqRNgl3HgJSaARkwtZEzoFepPiPKV%2BFn8EELv1bb6BoLEPC0f2g8hxoLzaxWfGAMbg%2BVl5te3fi0kV7%2Bg34EkYc7GQvl8D%2FKnZwtCfcswQoD4VpnnkjDm87KkO3rOX5poFfIAgYd6V5bSBeCZIsqYQxUiorLSc%2BPApyWrCEu2ax%2BpHgGCmD9FQ3ptGYPFIP6k9QcnX%2Bjiad5HQHfEbKb0kCIJNI1gQSQOg7w7Ft%2BSNEFY19HQjyLtgEyDpKTsFatRcK0A0CoIUfmHNfl6Y05KRWxwiz5%2Ffy%2BojgS%2FPB2u5XDt6QiaRh3qdgVD85nZ2dh6gWtUgw2ZEL2dZ2iSUPW02J6nm0%2F2eEGtiic2W4D73bWxAa8Amzo%2FD%2FhdFUCIowsKjpvQY6pgGS9elUeu3Efp5U7LkJeJv8JS%2B7RXJkJbIItt8OgHfueiI9i4MbngpXXWFdyq%2BKGLAF%2BycyKVVf6CPGsZiNkxdVvJ4gzjtJ3FwD7iWVxQP%2BgFX45dk5LtTMANFweeiop92mL%2FsqzTiybKLb3evoGgUGJXMqLNzX0spJRr6dKq3FxGhOo2Zl7KDUjQ%2FGZ%2F9uYpdsiW6LWBQla3epNcLr7j6vXtncF9wQ&X-Amz-Signature=801ce1a741e36b0eb292f3e9c40db8f6a3107ba1b04000e585a6f7a2896df658&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
