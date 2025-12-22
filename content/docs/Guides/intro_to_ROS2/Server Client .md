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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD6L6PB%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBzra0s%2FVXT9%2BPnn6yBeB6WzySK3c05v5o7VP5m5isJ%2BAiBssJ%2B%2BpSsaRiOqE1p8GeuUvVeAOM2IqyG5ks7kNT19LiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnRfWW8%2BKmQ66WpdLKtwDCChl2hFvPbXjWxTYRNqyKwO%2BC1gNI18Q8UXb7ID8NGPxrNmXWBNm98C4TC5EwW37nwRbe7kTQuOlCFsyUdw1Wa4hkQQGMMoFsvjXs20XndclVxYZQuhvbckV2PwSej98COeSEsCfR0JXYvSlBWRtXd8ZtfZCEKv3JqEffS%2Blq66a6vDkLivfMer5DsB75nXKf0man8BAV7Cx2Umk2noOVAKNWwQ7glJg2UoJvfBNgI%2FP3Q4R8xFnsFKINBFanqBBbrF4ey06LTsLxIpXrI5ZYGzVcP%2FjuksyaAnb2vyHgLAyEBDv%2BA5H1ngH1yj2K8Q5CaLGbo6GQtBqyOqvOSm0HIq4mdgT6ZYLeFtIJqcX%2BALLG98TsUAzFgw3gR%2B4W2CYxoIISvEoR09CbSZcmZnMw6yZZykyD5nci9vOfPK2g72fC98um9VJjFZfZyFJi2inEPAB2kxDOOcqSNSeZLlr%2B3ZdXo2m%2BpkEV7UdLdRk9bYaRnIPZsBAMvmAiYIcVCEA%2BPTgq1dqwAyTyzUDUygwAnQD%2FrhHJXRQJUfVZcElTAc8Q65sU6JxqSgFpFOBtOiSohMdkbJPB8sUlSxF%2BeaIN6Fg9omjpSzPGjuEAlQiWrwjWYUHq2VDa%2BZ4Ly0wgvqhygY6pgGo4p1JhsVx%2BXYqo7YopG0qm0y9FhhGXbKHcdfTfVb4WIJQKgysm0wJVZxQwUUOMPbvvF1y%2F7ZMVi5kUPEe6%2BwE0s5rSR4e192SzjktyINYRZ02GjBPAX7zN8w7taDLLi6DOaxc1Xb1LXFM2I6cSYHGH%2FuweUKl8pUTh28JGCCclJYuteWex4crYtZWYgedBneweKv5NfE9J7jpejYDuRF%2BLEZGUrCH&X-Amz-Signature=2788b60bf3f96191fc06579febd09dd3cbf88cd4aff5b19715942e227d637b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD6L6PB%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBzra0s%2FVXT9%2BPnn6yBeB6WzySK3c05v5o7VP5m5isJ%2BAiBssJ%2B%2BpSsaRiOqE1p8GeuUvVeAOM2IqyG5ks7kNT19LiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnRfWW8%2BKmQ66WpdLKtwDCChl2hFvPbXjWxTYRNqyKwO%2BC1gNI18Q8UXb7ID8NGPxrNmXWBNm98C4TC5EwW37nwRbe7kTQuOlCFsyUdw1Wa4hkQQGMMoFsvjXs20XndclVxYZQuhvbckV2PwSej98COeSEsCfR0JXYvSlBWRtXd8ZtfZCEKv3JqEffS%2Blq66a6vDkLivfMer5DsB75nXKf0man8BAV7Cx2Umk2noOVAKNWwQ7glJg2UoJvfBNgI%2FP3Q4R8xFnsFKINBFanqBBbrF4ey06LTsLxIpXrI5ZYGzVcP%2FjuksyaAnb2vyHgLAyEBDv%2BA5H1ngH1yj2K8Q5CaLGbo6GQtBqyOqvOSm0HIq4mdgT6ZYLeFtIJqcX%2BALLG98TsUAzFgw3gR%2B4W2CYxoIISvEoR09CbSZcmZnMw6yZZykyD5nci9vOfPK2g72fC98um9VJjFZfZyFJi2inEPAB2kxDOOcqSNSeZLlr%2B3ZdXo2m%2BpkEV7UdLdRk9bYaRnIPZsBAMvmAiYIcVCEA%2BPTgq1dqwAyTyzUDUygwAnQD%2FrhHJXRQJUfVZcElTAc8Q65sU6JxqSgFpFOBtOiSohMdkbJPB8sUlSxF%2BeaIN6Fg9omjpSzPGjuEAlQiWrwjWYUHq2VDa%2BZ4Ly0wgvqhygY6pgGo4p1JhsVx%2BXYqo7YopG0qm0y9FhhGXbKHcdfTfVb4WIJQKgysm0wJVZxQwUUOMPbvvF1y%2F7ZMVi5kUPEe6%2BwE0s5rSR4e192SzjktyINYRZ02GjBPAX7zN8w7taDLLi6DOaxc1Xb1LXFM2I6cSYHGH%2FuweUKl8pUTh28JGCCclJYuteWex4crYtZWYgedBneweKv5NfE9J7jpejYDuRF%2BLEZGUrCH&X-Amz-Signature=a4cbfeb42e0d3892b6c25df22d8913613e696a473755efd33add4cde98c7bf43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD6L6PB%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBzra0s%2FVXT9%2BPnn6yBeB6WzySK3c05v5o7VP5m5isJ%2BAiBssJ%2B%2BpSsaRiOqE1p8GeuUvVeAOM2IqyG5ks7kNT19LiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnRfWW8%2BKmQ66WpdLKtwDCChl2hFvPbXjWxTYRNqyKwO%2BC1gNI18Q8UXb7ID8NGPxrNmXWBNm98C4TC5EwW37nwRbe7kTQuOlCFsyUdw1Wa4hkQQGMMoFsvjXs20XndclVxYZQuhvbckV2PwSej98COeSEsCfR0JXYvSlBWRtXd8ZtfZCEKv3JqEffS%2Blq66a6vDkLivfMer5DsB75nXKf0man8BAV7Cx2Umk2noOVAKNWwQ7glJg2UoJvfBNgI%2FP3Q4R8xFnsFKINBFanqBBbrF4ey06LTsLxIpXrI5ZYGzVcP%2FjuksyaAnb2vyHgLAyEBDv%2BA5H1ngH1yj2K8Q5CaLGbo6GQtBqyOqvOSm0HIq4mdgT6ZYLeFtIJqcX%2BALLG98TsUAzFgw3gR%2B4W2CYxoIISvEoR09CbSZcmZnMw6yZZykyD5nci9vOfPK2g72fC98um9VJjFZfZyFJi2inEPAB2kxDOOcqSNSeZLlr%2B3ZdXo2m%2BpkEV7UdLdRk9bYaRnIPZsBAMvmAiYIcVCEA%2BPTgq1dqwAyTyzUDUygwAnQD%2FrhHJXRQJUfVZcElTAc8Q65sU6JxqSgFpFOBtOiSohMdkbJPB8sUlSxF%2BeaIN6Fg9omjpSzPGjuEAlQiWrwjWYUHq2VDa%2BZ4Ly0wgvqhygY6pgGo4p1JhsVx%2BXYqo7YopG0qm0y9FhhGXbKHcdfTfVb4WIJQKgysm0wJVZxQwUUOMPbvvF1y%2F7ZMVi5kUPEe6%2BwE0s5rSR4e192SzjktyINYRZ02GjBPAX7zN8w7taDLLi6DOaxc1Xb1LXFM2I6cSYHGH%2FuweUKl8pUTh28JGCCclJYuteWex4crYtZWYgedBneweKv5NfE9J7jpejYDuRF%2BLEZGUrCH&X-Amz-Signature=6199629d44d8836013ecbbf8490023840a12669af9631799e7633096f118c0d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD6L6PB%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBzra0s%2FVXT9%2BPnn6yBeB6WzySK3c05v5o7VP5m5isJ%2BAiBssJ%2B%2BpSsaRiOqE1p8GeuUvVeAOM2IqyG5ks7kNT19LiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnRfWW8%2BKmQ66WpdLKtwDCChl2hFvPbXjWxTYRNqyKwO%2BC1gNI18Q8UXb7ID8NGPxrNmXWBNm98C4TC5EwW37nwRbe7kTQuOlCFsyUdw1Wa4hkQQGMMoFsvjXs20XndclVxYZQuhvbckV2PwSej98COeSEsCfR0JXYvSlBWRtXd8ZtfZCEKv3JqEffS%2Blq66a6vDkLivfMer5DsB75nXKf0man8BAV7Cx2Umk2noOVAKNWwQ7glJg2UoJvfBNgI%2FP3Q4R8xFnsFKINBFanqBBbrF4ey06LTsLxIpXrI5ZYGzVcP%2FjuksyaAnb2vyHgLAyEBDv%2BA5H1ngH1yj2K8Q5CaLGbo6GQtBqyOqvOSm0HIq4mdgT6ZYLeFtIJqcX%2BALLG98TsUAzFgw3gR%2B4W2CYxoIISvEoR09CbSZcmZnMw6yZZykyD5nci9vOfPK2g72fC98um9VJjFZfZyFJi2inEPAB2kxDOOcqSNSeZLlr%2B3ZdXo2m%2BpkEV7UdLdRk9bYaRnIPZsBAMvmAiYIcVCEA%2BPTgq1dqwAyTyzUDUygwAnQD%2FrhHJXRQJUfVZcElTAc8Q65sU6JxqSgFpFOBtOiSohMdkbJPB8sUlSxF%2BeaIN6Fg9omjpSzPGjuEAlQiWrwjWYUHq2VDa%2BZ4Ly0wgvqhygY6pgGo4p1JhsVx%2BXYqo7YopG0qm0y9FhhGXbKHcdfTfVb4WIJQKgysm0wJVZxQwUUOMPbvvF1y%2F7ZMVi5kUPEe6%2BwE0s5rSR4e192SzjktyINYRZ02GjBPAX7zN8w7taDLLi6DOaxc1Xb1LXFM2I6cSYHGH%2FuweUKl8pUTh28JGCCclJYuteWex4crYtZWYgedBneweKv5NfE9J7jpejYDuRF%2BLEZGUrCH&X-Amz-Signature=69ecc37bc05204f55d568b2b5ba784a50baa1235259bb12eee757a5f7cdf22d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD6L6PB%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBzra0s%2FVXT9%2BPnn6yBeB6WzySK3c05v5o7VP5m5isJ%2BAiBssJ%2B%2BpSsaRiOqE1p8GeuUvVeAOM2IqyG5ks7kNT19LiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnRfWW8%2BKmQ66WpdLKtwDCChl2hFvPbXjWxTYRNqyKwO%2BC1gNI18Q8UXb7ID8NGPxrNmXWBNm98C4TC5EwW37nwRbe7kTQuOlCFsyUdw1Wa4hkQQGMMoFsvjXs20XndclVxYZQuhvbckV2PwSej98COeSEsCfR0JXYvSlBWRtXd8ZtfZCEKv3JqEffS%2Blq66a6vDkLivfMer5DsB75nXKf0man8BAV7Cx2Umk2noOVAKNWwQ7glJg2UoJvfBNgI%2FP3Q4R8xFnsFKINBFanqBBbrF4ey06LTsLxIpXrI5ZYGzVcP%2FjuksyaAnb2vyHgLAyEBDv%2BA5H1ngH1yj2K8Q5CaLGbo6GQtBqyOqvOSm0HIq4mdgT6ZYLeFtIJqcX%2BALLG98TsUAzFgw3gR%2B4W2CYxoIISvEoR09CbSZcmZnMw6yZZykyD5nci9vOfPK2g72fC98um9VJjFZfZyFJi2inEPAB2kxDOOcqSNSeZLlr%2B3ZdXo2m%2BpkEV7UdLdRk9bYaRnIPZsBAMvmAiYIcVCEA%2BPTgq1dqwAyTyzUDUygwAnQD%2FrhHJXRQJUfVZcElTAc8Q65sU6JxqSgFpFOBtOiSohMdkbJPB8sUlSxF%2BeaIN6Fg9omjpSzPGjuEAlQiWrwjWYUHq2VDa%2BZ4Ly0wgvqhygY6pgGo4p1JhsVx%2BXYqo7YopG0qm0y9FhhGXbKHcdfTfVb4WIJQKgysm0wJVZxQwUUOMPbvvF1y%2F7ZMVi5kUPEe6%2BwE0s5rSR4e192SzjktyINYRZ02GjBPAX7zN8w7taDLLi6DOaxc1Xb1LXFM2I6cSYHGH%2FuweUKl8pUTh28JGCCclJYuteWex4crYtZWYgedBneweKv5NfE9J7jpejYDuRF%2BLEZGUrCH&X-Amz-Signature=66af94c7d276c7861728b0dce4687755b2c0f1e711484e8011a77106ca4cc875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
