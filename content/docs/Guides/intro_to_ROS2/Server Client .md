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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGDS2WL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCw88UJrcg%2F7%2F3AfpH%2BqY1ZErFLDhWsmGl6SYxuOGYCtwIhAKZACpvqYBCRpHm74dpD5ZReRV6g4SSUudssyuCv3cDmKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziWKnsthXXDOHuKlYq3APOnNFxARzLSt%2BgFElsFc8x2D6x6g%2Be8chKlNwKZlPQIbuND8xB3DRnyYOEtouyo8sgkvaSpl1JcUQ%2B1O8U1mUPgUEPRWuMFRQ9mVZ9D6doFlXcc4lXFVB3b9%2BF%2BHpmsZobBnjIhBzLwnrVeKbOPMglWlxpm0DUOIqt9fFEDaGlyEwJxu6AwMNwXjOLPc5tDLswrQd7AmGI5MAAMl%2FB29jimqHOvhvXp1TlmQ7fyGo2PU%2Bjs4Ump4TwzJX1B%2FZ38M50%2BafIDlHBjTgHP5DKwmTFzU0%2FEy6FQ2yC83wwWhxo5qXcpIowLmxdKw%2BaKQvwxo76%2F74l4IUEmuAMu7gT3npj7bi%2BlfYhbvRNwIv7xA4ikyuVcD0va34k4bnSvxRc8bCVha%2FTqIjU%2BHndk3vgvaXdojZRqeP4KtFIjLQP%2FrlavmyAExHH0nxFmRVPsywA62wfYgQfYU8H9lQelgE2H%2FP2HA5KkD40U45cdD4M%2BIgl1PTLtv0RsDyZeUz2VCPkKvyenTRCxtX6rWeYNdfDZy860oHXs0PjkaVB4YOWVPbWsL1MPPTNE6kx%2FBF9C9lyFPJHqcIo%2BUDC%2BMQezRCCzaKGyvY90fy2t%2B6hCYqstQmMaJxLyYgrJ81syKnDpzDs%2F9TABjqkAV8GSmRLJ8HF4k4mer7azsyzqQFDK%2BsDelW26%2FsFtMp1mV5J00woi6zpwuhnlji6bZ4iIcfePhpPtMvm58Gtabn12S5j0ZGVncq2Rod2DraBVjbWeUFMTmhVLsIYStz0%2FJWFBGJyinw8Kxx8EZIejQVjAQalFRQp2tmdt1l6vYV%2B2hgh4S%2FvbBZGAO43r%2BCnmn3DqIrjCk69WFVyGeV85ZwjCzIS&X-Amz-Signature=fa6b89a1b59d803ec8f4defaf3bfef17202dd1d4a691878d61652224ee46e083&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGDS2WL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCw88UJrcg%2F7%2F3AfpH%2BqY1ZErFLDhWsmGl6SYxuOGYCtwIhAKZACpvqYBCRpHm74dpD5ZReRV6g4SSUudssyuCv3cDmKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziWKnsthXXDOHuKlYq3APOnNFxARzLSt%2BgFElsFc8x2D6x6g%2Be8chKlNwKZlPQIbuND8xB3DRnyYOEtouyo8sgkvaSpl1JcUQ%2B1O8U1mUPgUEPRWuMFRQ9mVZ9D6doFlXcc4lXFVB3b9%2BF%2BHpmsZobBnjIhBzLwnrVeKbOPMglWlxpm0DUOIqt9fFEDaGlyEwJxu6AwMNwXjOLPc5tDLswrQd7AmGI5MAAMl%2FB29jimqHOvhvXp1TlmQ7fyGo2PU%2Bjs4Ump4TwzJX1B%2FZ38M50%2BafIDlHBjTgHP5DKwmTFzU0%2FEy6FQ2yC83wwWhxo5qXcpIowLmxdKw%2BaKQvwxo76%2F74l4IUEmuAMu7gT3npj7bi%2BlfYhbvRNwIv7xA4ikyuVcD0va34k4bnSvxRc8bCVha%2FTqIjU%2BHndk3vgvaXdojZRqeP4KtFIjLQP%2FrlavmyAExHH0nxFmRVPsywA62wfYgQfYU8H9lQelgE2H%2FP2HA5KkD40U45cdD4M%2BIgl1PTLtv0RsDyZeUz2VCPkKvyenTRCxtX6rWeYNdfDZy860oHXs0PjkaVB4YOWVPbWsL1MPPTNE6kx%2FBF9C9lyFPJHqcIo%2BUDC%2BMQezRCCzaKGyvY90fy2t%2B6hCYqstQmMaJxLyYgrJ81syKnDpzDs%2F9TABjqkAV8GSmRLJ8HF4k4mer7azsyzqQFDK%2BsDelW26%2FsFtMp1mV5J00woi6zpwuhnlji6bZ4iIcfePhpPtMvm58Gtabn12S5j0ZGVncq2Rod2DraBVjbWeUFMTmhVLsIYStz0%2FJWFBGJyinw8Kxx8EZIejQVjAQalFRQp2tmdt1l6vYV%2B2hgh4S%2FvbBZGAO43r%2BCnmn3DqIrjCk69WFVyGeV85ZwjCzIS&X-Amz-Signature=f2ec5a84f205b8759438ec5a82793f6cc1f61a0034990dbead992c747be4a91f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGDS2WL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCw88UJrcg%2F7%2F3AfpH%2BqY1ZErFLDhWsmGl6SYxuOGYCtwIhAKZACpvqYBCRpHm74dpD5ZReRV6g4SSUudssyuCv3cDmKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziWKnsthXXDOHuKlYq3APOnNFxARzLSt%2BgFElsFc8x2D6x6g%2Be8chKlNwKZlPQIbuND8xB3DRnyYOEtouyo8sgkvaSpl1JcUQ%2B1O8U1mUPgUEPRWuMFRQ9mVZ9D6doFlXcc4lXFVB3b9%2BF%2BHpmsZobBnjIhBzLwnrVeKbOPMglWlxpm0DUOIqt9fFEDaGlyEwJxu6AwMNwXjOLPc5tDLswrQd7AmGI5MAAMl%2FB29jimqHOvhvXp1TlmQ7fyGo2PU%2Bjs4Ump4TwzJX1B%2FZ38M50%2BafIDlHBjTgHP5DKwmTFzU0%2FEy6FQ2yC83wwWhxo5qXcpIowLmxdKw%2BaKQvwxo76%2F74l4IUEmuAMu7gT3npj7bi%2BlfYhbvRNwIv7xA4ikyuVcD0va34k4bnSvxRc8bCVha%2FTqIjU%2BHndk3vgvaXdojZRqeP4KtFIjLQP%2FrlavmyAExHH0nxFmRVPsywA62wfYgQfYU8H9lQelgE2H%2FP2HA5KkD40U45cdD4M%2BIgl1PTLtv0RsDyZeUz2VCPkKvyenTRCxtX6rWeYNdfDZy860oHXs0PjkaVB4YOWVPbWsL1MPPTNE6kx%2FBF9C9lyFPJHqcIo%2BUDC%2BMQezRCCzaKGyvY90fy2t%2B6hCYqstQmMaJxLyYgrJ81syKnDpzDs%2F9TABjqkAV8GSmRLJ8HF4k4mer7azsyzqQFDK%2BsDelW26%2FsFtMp1mV5J00woi6zpwuhnlji6bZ4iIcfePhpPtMvm58Gtabn12S5j0ZGVncq2Rod2DraBVjbWeUFMTmhVLsIYStz0%2FJWFBGJyinw8Kxx8EZIejQVjAQalFRQp2tmdt1l6vYV%2B2hgh4S%2FvbBZGAO43r%2BCnmn3DqIrjCk69WFVyGeV85ZwjCzIS&X-Amz-Signature=03ae5dc6ea12ebf42673bfcad4e29abbebfdffd6fd739b348829e991413bffbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGDS2WL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCw88UJrcg%2F7%2F3AfpH%2BqY1ZErFLDhWsmGl6SYxuOGYCtwIhAKZACpvqYBCRpHm74dpD5ZReRV6g4SSUudssyuCv3cDmKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziWKnsthXXDOHuKlYq3APOnNFxARzLSt%2BgFElsFc8x2D6x6g%2Be8chKlNwKZlPQIbuND8xB3DRnyYOEtouyo8sgkvaSpl1JcUQ%2B1O8U1mUPgUEPRWuMFRQ9mVZ9D6doFlXcc4lXFVB3b9%2BF%2BHpmsZobBnjIhBzLwnrVeKbOPMglWlxpm0DUOIqt9fFEDaGlyEwJxu6AwMNwXjOLPc5tDLswrQd7AmGI5MAAMl%2FB29jimqHOvhvXp1TlmQ7fyGo2PU%2Bjs4Ump4TwzJX1B%2FZ38M50%2BafIDlHBjTgHP5DKwmTFzU0%2FEy6FQ2yC83wwWhxo5qXcpIowLmxdKw%2BaKQvwxo76%2F74l4IUEmuAMu7gT3npj7bi%2BlfYhbvRNwIv7xA4ikyuVcD0va34k4bnSvxRc8bCVha%2FTqIjU%2BHndk3vgvaXdojZRqeP4KtFIjLQP%2FrlavmyAExHH0nxFmRVPsywA62wfYgQfYU8H9lQelgE2H%2FP2HA5KkD40U45cdD4M%2BIgl1PTLtv0RsDyZeUz2VCPkKvyenTRCxtX6rWeYNdfDZy860oHXs0PjkaVB4YOWVPbWsL1MPPTNE6kx%2FBF9C9lyFPJHqcIo%2BUDC%2BMQezRCCzaKGyvY90fy2t%2B6hCYqstQmMaJxLyYgrJ81syKnDpzDs%2F9TABjqkAV8GSmRLJ8HF4k4mer7azsyzqQFDK%2BsDelW26%2FsFtMp1mV5J00woi6zpwuhnlji6bZ4iIcfePhpPtMvm58Gtabn12S5j0ZGVncq2Rod2DraBVjbWeUFMTmhVLsIYStz0%2FJWFBGJyinw8Kxx8EZIejQVjAQalFRQp2tmdt1l6vYV%2B2hgh4S%2FvbBZGAO43r%2BCnmn3DqIrjCk69WFVyGeV85ZwjCzIS&X-Amz-Signature=69619156af8e2050ab69eac0e1ac047de65ccefb6f8650d40ff9e17cc4ff54c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGDS2WL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCw88UJrcg%2F7%2F3AfpH%2BqY1ZErFLDhWsmGl6SYxuOGYCtwIhAKZACpvqYBCRpHm74dpD5ZReRV6g4SSUudssyuCv3cDmKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziWKnsthXXDOHuKlYq3APOnNFxARzLSt%2BgFElsFc8x2D6x6g%2Be8chKlNwKZlPQIbuND8xB3DRnyYOEtouyo8sgkvaSpl1JcUQ%2B1O8U1mUPgUEPRWuMFRQ9mVZ9D6doFlXcc4lXFVB3b9%2BF%2BHpmsZobBnjIhBzLwnrVeKbOPMglWlxpm0DUOIqt9fFEDaGlyEwJxu6AwMNwXjOLPc5tDLswrQd7AmGI5MAAMl%2FB29jimqHOvhvXp1TlmQ7fyGo2PU%2Bjs4Ump4TwzJX1B%2FZ38M50%2BafIDlHBjTgHP5DKwmTFzU0%2FEy6FQ2yC83wwWhxo5qXcpIowLmxdKw%2BaKQvwxo76%2F74l4IUEmuAMu7gT3npj7bi%2BlfYhbvRNwIv7xA4ikyuVcD0va34k4bnSvxRc8bCVha%2FTqIjU%2BHndk3vgvaXdojZRqeP4KtFIjLQP%2FrlavmyAExHH0nxFmRVPsywA62wfYgQfYU8H9lQelgE2H%2FP2HA5KkD40U45cdD4M%2BIgl1PTLtv0RsDyZeUz2VCPkKvyenTRCxtX6rWeYNdfDZy860oHXs0PjkaVB4YOWVPbWsL1MPPTNE6kx%2FBF9C9lyFPJHqcIo%2BUDC%2BMQezRCCzaKGyvY90fy2t%2B6hCYqstQmMaJxLyYgrJ81syKnDpzDs%2F9TABjqkAV8GSmRLJ8HF4k4mer7azsyzqQFDK%2BsDelW26%2FsFtMp1mV5J00woi6zpwuhnlji6bZ4iIcfePhpPtMvm58Gtabn12S5j0ZGVncq2Rod2DraBVjbWeUFMTmhVLsIYStz0%2FJWFBGJyinw8Kxx8EZIejQVjAQalFRQp2tmdt1l6vYV%2B2hgh4S%2FvbBZGAO43r%2BCnmn3DqIrjCk69WFVyGeV85ZwjCzIS&X-Amz-Signature=2d42ff8a9ce9089c4e260ed639dc5986e0940e26b5580ffa1f8ac73ffba609d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
