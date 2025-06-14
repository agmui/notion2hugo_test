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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABPHKFN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIE6FlTxbX62HgDgoGpxjmXlknJp6mJOZ4PYkAFWLs3EcAiAyo8VEPvkK%2FH7byS%2B%2FSWZTxGdkzT5TLMi%2BG7CHd23T%2Fyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMVAGsplmjk9bnti3PKtwDcBbL5G1ZKHaJhn0z1TfeWRdto08%2Fs4lPeOoZxVTPWL3hkTX4aVHN0ERXJ4AZv1ID028xIS%2BCqfAaMXXi3Wc7ERy%2B8uT3RBc%2Bd3ZnHxM0Yb1nqhPKJUc7kDG1h4YnHc24JdWfXnSdu6wdEXgArqI4jrTDtxjNWAuKYzzsWWWtXpzFeXfwG0eNySGPwaXQE4BD%2BMphdb%2B%2FK9XMHs4e4YOctI7P21qK1lbTuDNRWqU18kkiKSbfhGDuzN23nWy1p5ghlYro9fNfp739RN83a%2BXVXshWc%2FQnAbkeAz%2BkNiRz2NBOW5tYe0rHsxl9th%2BulvMwLNDVUgEy9hWyA3PyGi8NO%2FTJt5euB5dq%2B3YumxJddo6CnR2V0Zf30rcLcXdV25NO3ZfFB5z4hJgLnqGdgxS0Kc1Lr2Z8KaRZ3c5IQq4lO1zY9L%2F2FKzeTcKRkXrdX%2BEI2l5WGm%2FI9BKcKXvX%2F%2FKHr9V4s797wkD7t%2BB4T17PLKB6HcH1%2Bn7XJ8Fgz9FrnuudyAMw0UsVNlb1CxBioNPiEnfnSd7l5ukXATKqyayoxvJBgZl%2FGPwLtjI9EPkudxogLDF7eFwrjMc0271ETPZX6A7fycRJxU6AH79jrt7vkL4v%2BbSF2FFrT%2F4OnhownaS3wgY6pgEzWqgnN1eKnCTy2wOroIrgU%2BW2aYYWpmBdy4Qeevh5s1mhtkDx9k1ISdp%2Fjy8nK9gZ6gVasa8iBJwHxpWjbDifAwfa1XYEQdSZH%2FZO8k4YH%2BiMKROpW9BGYYDlOI1tBtx6jFchezZpWaaEJSKhmuoZiSdSIm8v7rJKRHIGnMJ%2FLzV3X33H%2BoHREDAMkAVNMdz1tDaaTRKXXEkI5Lyxc%2FyrB%2FOyYQL3&X-Amz-Signature=c7635b6fcb3189a263b1eb8b58ac33249083403d57493fe198061488ee746e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABPHKFN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIE6FlTxbX62HgDgoGpxjmXlknJp6mJOZ4PYkAFWLs3EcAiAyo8VEPvkK%2FH7byS%2B%2FSWZTxGdkzT5TLMi%2BG7CHd23T%2Fyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMVAGsplmjk9bnti3PKtwDcBbL5G1ZKHaJhn0z1TfeWRdto08%2Fs4lPeOoZxVTPWL3hkTX4aVHN0ERXJ4AZv1ID028xIS%2BCqfAaMXXi3Wc7ERy%2B8uT3RBc%2Bd3ZnHxM0Yb1nqhPKJUc7kDG1h4YnHc24JdWfXnSdu6wdEXgArqI4jrTDtxjNWAuKYzzsWWWtXpzFeXfwG0eNySGPwaXQE4BD%2BMphdb%2B%2FK9XMHs4e4YOctI7P21qK1lbTuDNRWqU18kkiKSbfhGDuzN23nWy1p5ghlYro9fNfp739RN83a%2BXVXshWc%2FQnAbkeAz%2BkNiRz2NBOW5tYe0rHsxl9th%2BulvMwLNDVUgEy9hWyA3PyGi8NO%2FTJt5euB5dq%2B3YumxJddo6CnR2V0Zf30rcLcXdV25NO3ZfFB5z4hJgLnqGdgxS0Kc1Lr2Z8KaRZ3c5IQq4lO1zY9L%2F2FKzeTcKRkXrdX%2BEI2l5WGm%2FI9BKcKXvX%2F%2FKHr9V4s797wkD7t%2BB4T17PLKB6HcH1%2Bn7XJ8Fgz9FrnuudyAMw0UsVNlb1CxBioNPiEnfnSd7l5ukXATKqyayoxvJBgZl%2FGPwLtjI9EPkudxogLDF7eFwrjMc0271ETPZX6A7fycRJxU6AH79jrt7vkL4v%2BbSF2FFrT%2F4OnhownaS3wgY6pgEzWqgnN1eKnCTy2wOroIrgU%2BW2aYYWpmBdy4Qeevh5s1mhtkDx9k1ISdp%2Fjy8nK9gZ6gVasa8iBJwHxpWjbDifAwfa1XYEQdSZH%2FZO8k4YH%2BiMKROpW9BGYYDlOI1tBtx6jFchezZpWaaEJSKhmuoZiSdSIm8v7rJKRHIGnMJ%2FLzV3X33H%2BoHREDAMkAVNMdz1tDaaTRKXXEkI5Lyxc%2FyrB%2FOyYQL3&X-Amz-Signature=0fdde76751a347df0020b0d63da9a9f1051e8695735752d38cce27134d7a6072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABPHKFN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIE6FlTxbX62HgDgoGpxjmXlknJp6mJOZ4PYkAFWLs3EcAiAyo8VEPvkK%2FH7byS%2B%2FSWZTxGdkzT5TLMi%2BG7CHd23T%2Fyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMVAGsplmjk9bnti3PKtwDcBbL5G1ZKHaJhn0z1TfeWRdto08%2Fs4lPeOoZxVTPWL3hkTX4aVHN0ERXJ4AZv1ID028xIS%2BCqfAaMXXi3Wc7ERy%2B8uT3RBc%2Bd3ZnHxM0Yb1nqhPKJUc7kDG1h4YnHc24JdWfXnSdu6wdEXgArqI4jrTDtxjNWAuKYzzsWWWtXpzFeXfwG0eNySGPwaXQE4BD%2BMphdb%2B%2FK9XMHs4e4YOctI7P21qK1lbTuDNRWqU18kkiKSbfhGDuzN23nWy1p5ghlYro9fNfp739RN83a%2BXVXshWc%2FQnAbkeAz%2BkNiRz2NBOW5tYe0rHsxl9th%2BulvMwLNDVUgEy9hWyA3PyGi8NO%2FTJt5euB5dq%2B3YumxJddo6CnR2V0Zf30rcLcXdV25NO3ZfFB5z4hJgLnqGdgxS0Kc1Lr2Z8KaRZ3c5IQq4lO1zY9L%2F2FKzeTcKRkXrdX%2BEI2l5WGm%2FI9BKcKXvX%2F%2FKHr9V4s797wkD7t%2BB4T17PLKB6HcH1%2Bn7XJ8Fgz9FrnuudyAMw0UsVNlb1CxBioNPiEnfnSd7l5ukXATKqyayoxvJBgZl%2FGPwLtjI9EPkudxogLDF7eFwrjMc0271ETPZX6A7fycRJxU6AH79jrt7vkL4v%2BbSF2FFrT%2F4OnhownaS3wgY6pgEzWqgnN1eKnCTy2wOroIrgU%2BW2aYYWpmBdy4Qeevh5s1mhtkDx9k1ISdp%2Fjy8nK9gZ6gVasa8iBJwHxpWjbDifAwfa1XYEQdSZH%2FZO8k4YH%2BiMKROpW9BGYYDlOI1tBtx6jFchezZpWaaEJSKhmuoZiSdSIm8v7rJKRHIGnMJ%2FLzV3X33H%2BoHREDAMkAVNMdz1tDaaTRKXXEkI5Lyxc%2FyrB%2FOyYQL3&X-Amz-Signature=d393babe956dce7f20700a71d786487962fd633b205c9e48c1f0aa39730a1f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABPHKFN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIE6FlTxbX62HgDgoGpxjmXlknJp6mJOZ4PYkAFWLs3EcAiAyo8VEPvkK%2FH7byS%2B%2FSWZTxGdkzT5TLMi%2BG7CHd23T%2Fyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMVAGsplmjk9bnti3PKtwDcBbL5G1ZKHaJhn0z1TfeWRdto08%2Fs4lPeOoZxVTPWL3hkTX4aVHN0ERXJ4AZv1ID028xIS%2BCqfAaMXXi3Wc7ERy%2B8uT3RBc%2Bd3ZnHxM0Yb1nqhPKJUc7kDG1h4YnHc24JdWfXnSdu6wdEXgArqI4jrTDtxjNWAuKYzzsWWWtXpzFeXfwG0eNySGPwaXQE4BD%2BMphdb%2B%2FK9XMHs4e4YOctI7P21qK1lbTuDNRWqU18kkiKSbfhGDuzN23nWy1p5ghlYro9fNfp739RN83a%2BXVXshWc%2FQnAbkeAz%2BkNiRz2NBOW5tYe0rHsxl9th%2BulvMwLNDVUgEy9hWyA3PyGi8NO%2FTJt5euB5dq%2B3YumxJddo6CnR2V0Zf30rcLcXdV25NO3ZfFB5z4hJgLnqGdgxS0Kc1Lr2Z8KaRZ3c5IQq4lO1zY9L%2F2FKzeTcKRkXrdX%2BEI2l5WGm%2FI9BKcKXvX%2F%2FKHr9V4s797wkD7t%2BB4T17PLKB6HcH1%2Bn7XJ8Fgz9FrnuudyAMw0UsVNlb1CxBioNPiEnfnSd7l5ukXATKqyayoxvJBgZl%2FGPwLtjI9EPkudxogLDF7eFwrjMc0271ETPZX6A7fycRJxU6AH79jrt7vkL4v%2BbSF2FFrT%2F4OnhownaS3wgY6pgEzWqgnN1eKnCTy2wOroIrgU%2BW2aYYWpmBdy4Qeevh5s1mhtkDx9k1ISdp%2Fjy8nK9gZ6gVasa8iBJwHxpWjbDifAwfa1XYEQdSZH%2FZO8k4YH%2BiMKROpW9BGYYDlOI1tBtx6jFchezZpWaaEJSKhmuoZiSdSIm8v7rJKRHIGnMJ%2FLzV3X33H%2BoHREDAMkAVNMdz1tDaaTRKXXEkI5Lyxc%2FyrB%2FOyYQL3&X-Amz-Signature=8677b8ca298e3f4349ac48efdb70449b5913bb3b11f984b299f1f29443108d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABPHKFN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIE6FlTxbX62HgDgoGpxjmXlknJp6mJOZ4PYkAFWLs3EcAiAyo8VEPvkK%2FH7byS%2B%2FSWZTxGdkzT5TLMi%2BG7CHd23T%2Fyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMVAGsplmjk9bnti3PKtwDcBbL5G1ZKHaJhn0z1TfeWRdto08%2Fs4lPeOoZxVTPWL3hkTX4aVHN0ERXJ4AZv1ID028xIS%2BCqfAaMXXi3Wc7ERy%2B8uT3RBc%2Bd3ZnHxM0Yb1nqhPKJUc7kDG1h4YnHc24JdWfXnSdu6wdEXgArqI4jrTDtxjNWAuKYzzsWWWtXpzFeXfwG0eNySGPwaXQE4BD%2BMphdb%2B%2FK9XMHs4e4YOctI7P21qK1lbTuDNRWqU18kkiKSbfhGDuzN23nWy1p5ghlYro9fNfp739RN83a%2BXVXshWc%2FQnAbkeAz%2BkNiRz2NBOW5tYe0rHsxl9th%2BulvMwLNDVUgEy9hWyA3PyGi8NO%2FTJt5euB5dq%2B3YumxJddo6CnR2V0Zf30rcLcXdV25NO3ZfFB5z4hJgLnqGdgxS0Kc1Lr2Z8KaRZ3c5IQq4lO1zY9L%2F2FKzeTcKRkXrdX%2BEI2l5WGm%2FI9BKcKXvX%2F%2FKHr9V4s797wkD7t%2BB4T17PLKB6HcH1%2Bn7XJ8Fgz9FrnuudyAMw0UsVNlb1CxBioNPiEnfnSd7l5ukXATKqyayoxvJBgZl%2FGPwLtjI9EPkudxogLDF7eFwrjMc0271ETPZX6A7fycRJxU6AH79jrt7vkL4v%2BbSF2FFrT%2F4OnhownaS3wgY6pgEzWqgnN1eKnCTy2wOroIrgU%2BW2aYYWpmBdy4Qeevh5s1mhtkDx9k1ISdp%2Fjy8nK9gZ6gVasa8iBJwHxpWjbDifAwfa1XYEQdSZH%2FZO8k4YH%2BiMKROpW9BGYYDlOI1tBtx6jFchezZpWaaEJSKhmuoZiSdSIm8v7rJKRHIGnMJ%2FLzV3X33H%2BoHREDAMkAVNMdz1tDaaTRKXXEkI5Lyxc%2FyrB%2FOyYQL3&X-Amz-Signature=87d3cdf75f83af9b88e607713f1827a9a4debf5092cbe5d16e07e17253540828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
