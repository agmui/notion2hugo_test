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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWBX76N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDPH%2BxPDUBmNbGJ7Yh5Cs73X9Ak9EsQDNQwN7Ry%2BXzYJwIhAKMit%2FM1ytfFr1ilFd9JRVM9UbfH19rkUEWKwlOi2awhKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVYjZDj5as4cyhVnsq3APd1hgx6Y1wczgNDO8hYnMixB47wJeVcY51vG4HNII%2FbHfW5P6s%2FlPhghcqJxw%2Bw4a65rVu8M9Ge%2BYUFWUBSwzlqfNADRw91BOcHGLUZhj4ov%2Bhf3db9ZcyGm22K%2F3Yq10VU9%2Bv1RUY3hKC9lrzzEOnrAicXZ64iRBAUT5rlnrZ4fPMw%2BuQfXVikTfu4gy72AJdMLIJM5X6DXtxzy%2BMVKdd%2FNGLMR%2FEUqNkpw5I3lQKLk6XBjLYCxtZm9WL%2B6H1qdtoE3poL6uoaZ4kpZnuQKnfRYyiMNe6pr23YfxY3NWO%2BKYSwaBxkV1KJX523c6Ao%2Br1PWY%2Fu55S2QE8lCsX8V6SzoTn4FjM%2B1RiLev1O2Fkx9%2F%2BntziQ3pGJF3uhd3FHoVFKDTXjPysw9Hxee4hAXbK1T%2BZ4oKolRoCZ55wBh8OmjQEHHv%2BM6ITXII2ajVtVgM9NGt5xGEAMDJLjbhpuFMWEHwuv6rWCnZBgQ6GmOxzY1Kfg6NmI8KNS4GqsilMvct0%2B78TIidSYScKixu%2BiUMrycQRcsM4tb5YviKcNUgo%2BPZZE9QcdjOH6Wi5jkPCP3%2BIbZaQBbTMRCb4jST7JpM%2BN2BWp4FvGIblnCT2HjUxA4LyImmgkzOeKtG3TjDrl%2Fy%2BBjqkASy6a8KapXPa8Vj7rDn6oV9AYvfjemTHwwGCVnskR7ZE%2F2srkDkZYMwnytXypSxJY18mHXEVXczOaHPll5EHjq2%2BGtxebxAPQqpZ4xS%2FitLyG0qxmGFDkiHPaBi0ADIUtEdDzMnbDKWoOi3eWTaitbRIFkFYsDYBxX0d0moNznaG%2B1t4hMIW9RXfe3RmCX4fP4bRYugSQD5DbnMDAXvJiPXcY1sz&X-Amz-Signature=fc525b2d868321417107daab360a0b91b34bfdae086255701f1b00e6d3f7ee9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWBX76N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDPH%2BxPDUBmNbGJ7Yh5Cs73X9Ak9EsQDNQwN7Ry%2BXzYJwIhAKMit%2FM1ytfFr1ilFd9JRVM9UbfH19rkUEWKwlOi2awhKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVYjZDj5as4cyhVnsq3APd1hgx6Y1wczgNDO8hYnMixB47wJeVcY51vG4HNII%2FbHfW5P6s%2FlPhghcqJxw%2Bw4a65rVu8M9Ge%2BYUFWUBSwzlqfNADRw91BOcHGLUZhj4ov%2Bhf3db9ZcyGm22K%2F3Yq10VU9%2Bv1RUY3hKC9lrzzEOnrAicXZ64iRBAUT5rlnrZ4fPMw%2BuQfXVikTfu4gy72AJdMLIJM5X6DXtxzy%2BMVKdd%2FNGLMR%2FEUqNkpw5I3lQKLk6XBjLYCxtZm9WL%2B6H1qdtoE3poL6uoaZ4kpZnuQKnfRYyiMNe6pr23YfxY3NWO%2BKYSwaBxkV1KJX523c6Ao%2Br1PWY%2Fu55S2QE8lCsX8V6SzoTn4FjM%2B1RiLev1O2Fkx9%2F%2BntziQ3pGJF3uhd3FHoVFKDTXjPysw9Hxee4hAXbK1T%2BZ4oKolRoCZ55wBh8OmjQEHHv%2BM6ITXII2ajVtVgM9NGt5xGEAMDJLjbhpuFMWEHwuv6rWCnZBgQ6GmOxzY1Kfg6NmI8KNS4GqsilMvct0%2B78TIidSYScKixu%2BiUMrycQRcsM4tb5YviKcNUgo%2BPZZE9QcdjOH6Wi5jkPCP3%2BIbZaQBbTMRCb4jST7JpM%2BN2BWp4FvGIblnCT2HjUxA4LyImmgkzOeKtG3TjDrl%2Fy%2BBjqkASy6a8KapXPa8Vj7rDn6oV9AYvfjemTHwwGCVnskR7ZE%2F2srkDkZYMwnytXypSxJY18mHXEVXczOaHPll5EHjq2%2BGtxebxAPQqpZ4xS%2FitLyG0qxmGFDkiHPaBi0ADIUtEdDzMnbDKWoOi3eWTaitbRIFkFYsDYBxX0d0moNznaG%2B1t4hMIW9RXfe3RmCX4fP4bRYugSQD5DbnMDAXvJiPXcY1sz&X-Amz-Signature=6324b5c60e8370b50d096ecc3c9e6eaa46b897739df1119fc25bc53c85bd0715&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWBX76N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDPH%2BxPDUBmNbGJ7Yh5Cs73X9Ak9EsQDNQwN7Ry%2BXzYJwIhAKMit%2FM1ytfFr1ilFd9JRVM9UbfH19rkUEWKwlOi2awhKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVYjZDj5as4cyhVnsq3APd1hgx6Y1wczgNDO8hYnMixB47wJeVcY51vG4HNII%2FbHfW5P6s%2FlPhghcqJxw%2Bw4a65rVu8M9Ge%2BYUFWUBSwzlqfNADRw91BOcHGLUZhj4ov%2Bhf3db9ZcyGm22K%2F3Yq10VU9%2Bv1RUY3hKC9lrzzEOnrAicXZ64iRBAUT5rlnrZ4fPMw%2BuQfXVikTfu4gy72AJdMLIJM5X6DXtxzy%2BMVKdd%2FNGLMR%2FEUqNkpw5I3lQKLk6XBjLYCxtZm9WL%2B6H1qdtoE3poL6uoaZ4kpZnuQKnfRYyiMNe6pr23YfxY3NWO%2BKYSwaBxkV1KJX523c6Ao%2Br1PWY%2Fu55S2QE8lCsX8V6SzoTn4FjM%2B1RiLev1O2Fkx9%2F%2BntziQ3pGJF3uhd3FHoVFKDTXjPysw9Hxee4hAXbK1T%2BZ4oKolRoCZ55wBh8OmjQEHHv%2BM6ITXII2ajVtVgM9NGt5xGEAMDJLjbhpuFMWEHwuv6rWCnZBgQ6GmOxzY1Kfg6NmI8KNS4GqsilMvct0%2B78TIidSYScKixu%2BiUMrycQRcsM4tb5YviKcNUgo%2BPZZE9QcdjOH6Wi5jkPCP3%2BIbZaQBbTMRCb4jST7JpM%2BN2BWp4FvGIblnCT2HjUxA4LyImmgkzOeKtG3TjDrl%2Fy%2BBjqkASy6a8KapXPa8Vj7rDn6oV9AYvfjemTHwwGCVnskR7ZE%2F2srkDkZYMwnytXypSxJY18mHXEVXczOaHPll5EHjq2%2BGtxebxAPQqpZ4xS%2FitLyG0qxmGFDkiHPaBi0ADIUtEdDzMnbDKWoOi3eWTaitbRIFkFYsDYBxX0d0moNznaG%2B1t4hMIW9RXfe3RmCX4fP4bRYugSQD5DbnMDAXvJiPXcY1sz&X-Amz-Signature=4d4bb4fe10eb5c16d3fd182433dce6f3aec143844a0c93b8b44448091b523054&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWBX76N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDPH%2BxPDUBmNbGJ7Yh5Cs73X9Ak9EsQDNQwN7Ry%2BXzYJwIhAKMit%2FM1ytfFr1ilFd9JRVM9UbfH19rkUEWKwlOi2awhKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVYjZDj5as4cyhVnsq3APd1hgx6Y1wczgNDO8hYnMixB47wJeVcY51vG4HNII%2FbHfW5P6s%2FlPhghcqJxw%2Bw4a65rVu8M9Ge%2BYUFWUBSwzlqfNADRw91BOcHGLUZhj4ov%2Bhf3db9ZcyGm22K%2F3Yq10VU9%2Bv1RUY3hKC9lrzzEOnrAicXZ64iRBAUT5rlnrZ4fPMw%2BuQfXVikTfu4gy72AJdMLIJM5X6DXtxzy%2BMVKdd%2FNGLMR%2FEUqNkpw5I3lQKLk6XBjLYCxtZm9WL%2B6H1qdtoE3poL6uoaZ4kpZnuQKnfRYyiMNe6pr23YfxY3NWO%2BKYSwaBxkV1KJX523c6Ao%2Br1PWY%2Fu55S2QE8lCsX8V6SzoTn4FjM%2B1RiLev1O2Fkx9%2F%2BntziQ3pGJF3uhd3FHoVFKDTXjPysw9Hxee4hAXbK1T%2BZ4oKolRoCZ55wBh8OmjQEHHv%2BM6ITXII2ajVtVgM9NGt5xGEAMDJLjbhpuFMWEHwuv6rWCnZBgQ6GmOxzY1Kfg6NmI8KNS4GqsilMvct0%2B78TIidSYScKixu%2BiUMrycQRcsM4tb5YviKcNUgo%2BPZZE9QcdjOH6Wi5jkPCP3%2BIbZaQBbTMRCb4jST7JpM%2BN2BWp4FvGIblnCT2HjUxA4LyImmgkzOeKtG3TjDrl%2Fy%2BBjqkASy6a8KapXPa8Vj7rDn6oV9AYvfjemTHwwGCVnskR7ZE%2F2srkDkZYMwnytXypSxJY18mHXEVXczOaHPll5EHjq2%2BGtxebxAPQqpZ4xS%2FitLyG0qxmGFDkiHPaBi0ADIUtEdDzMnbDKWoOi3eWTaitbRIFkFYsDYBxX0d0moNznaG%2B1t4hMIW9RXfe3RmCX4fP4bRYugSQD5DbnMDAXvJiPXcY1sz&X-Amz-Signature=87a0e4010dbff90ca4db8800337fa91e4bfd5805faa5ce23e41b87032658b64c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWBX76N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDPH%2BxPDUBmNbGJ7Yh5Cs73X9Ak9EsQDNQwN7Ry%2BXzYJwIhAKMit%2FM1ytfFr1ilFd9JRVM9UbfH19rkUEWKwlOi2awhKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVYjZDj5as4cyhVnsq3APd1hgx6Y1wczgNDO8hYnMixB47wJeVcY51vG4HNII%2FbHfW5P6s%2FlPhghcqJxw%2Bw4a65rVu8M9Ge%2BYUFWUBSwzlqfNADRw91BOcHGLUZhj4ov%2Bhf3db9ZcyGm22K%2F3Yq10VU9%2Bv1RUY3hKC9lrzzEOnrAicXZ64iRBAUT5rlnrZ4fPMw%2BuQfXVikTfu4gy72AJdMLIJM5X6DXtxzy%2BMVKdd%2FNGLMR%2FEUqNkpw5I3lQKLk6XBjLYCxtZm9WL%2B6H1qdtoE3poL6uoaZ4kpZnuQKnfRYyiMNe6pr23YfxY3NWO%2BKYSwaBxkV1KJX523c6Ao%2Br1PWY%2Fu55S2QE8lCsX8V6SzoTn4FjM%2B1RiLev1O2Fkx9%2F%2BntziQ3pGJF3uhd3FHoVFKDTXjPysw9Hxee4hAXbK1T%2BZ4oKolRoCZ55wBh8OmjQEHHv%2BM6ITXII2ajVtVgM9NGt5xGEAMDJLjbhpuFMWEHwuv6rWCnZBgQ6GmOxzY1Kfg6NmI8KNS4GqsilMvct0%2B78TIidSYScKixu%2BiUMrycQRcsM4tb5YviKcNUgo%2BPZZE9QcdjOH6Wi5jkPCP3%2BIbZaQBbTMRCb4jST7JpM%2BN2BWp4FvGIblnCT2HjUxA4LyImmgkzOeKtG3TjDrl%2Fy%2BBjqkASy6a8KapXPa8Vj7rDn6oV9AYvfjemTHwwGCVnskR7ZE%2F2srkDkZYMwnytXypSxJY18mHXEVXczOaHPll5EHjq2%2BGtxebxAPQqpZ4xS%2FitLyG0qxmGFDkiHPaBi0ADIUtEdDzMnbDKWoOi3eWTaitbRIFkFYsDYBxX0d0moNznaG%2B1t4hMIW9RXfe3RmCX4fP4bRYugSQD5DbnMDAXvJiPXcY1sz&X-Amz-Signature=4ed726d4c7ff2f3cdcd32cbc94a7f3082e735e90d77902b409cf8927de6abc41&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
