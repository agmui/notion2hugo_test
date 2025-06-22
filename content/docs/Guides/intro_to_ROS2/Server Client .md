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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJCZR5V%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICTesV3gjVyxOT6vy%2BcpZDXqBMiNdzYwe41jXkLV%2FVIyAiEA9uJMSg%2BSbd%2BIIjuhd8%2FxLGYw7oLtU9D0VCpKSH7HiGYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs1D3fu%2BM1pgeo3zSrcA33cOPRrPrAw%2Bxf0u8NsVApIQwIXryRuKSQRSWmQh5NK9etgefkeIEkaPZah7QvBxeeltX3NI0VkUYQUTIImTmdXckwWZvrfaku7YEkYkrAK5%2FxUDwzCzhqd4VJh9e414lX1UvNbo6AWr%2F4h%2F6FjUSQEY8uFle34KyZA1GkcPP1cgAj3ZRTkeJd8RWc7J0R%2FgyDoRgyjz4czvlGi4qXiZOKLaRM5k8sNijdyASS7PR5LpdteR1LM3xxZMEqoVC8NpP9WNwZYDZo3vuaDRooKNKJct779kTD%2B5JjhvhZnDEeIqdzW8IK3brJlrgWC1D3c1zPtv2m2lMp28CDqACoUPRujmsBCRqD4HNQ60MtSsyP1PR7bGtIC6v5XGlZfM0s5kQTP3onDyaQlhkH2t7lS0pvz56hbL0ll6JGabrk%2BsguEefxzhHA1LNFUEsMEB9%2BbmJvdWlbbYQZbIMjWwQz%2BYk5KhA7PAn2QvLqFHlHqdVsjzebZJuf3XRxc5%2FJxQCsT8IX6P35%2FOSXlat6h0DwQPI3HWcsz%2FpC%2F%2FctSNZpVQQzVxC%2Bmg8HjkxIFKde93eSYEQi9i%2BVouAz0iuH01lBSoUf2pt%2BW2kgUIP4AI%2FkEDxo%2BTx1XMJDdLJiAKu38MJzB38IGOqUBUtOP8m%2BBUFo3Fg9NJi8cSFd5hMsyVhhH4RkE%2F8i6Ygp%2BKvr2fEJKsAE2EQKKzZvu33x4fzLLpho10ztgPGobQHt2oJb81obc7Hqvzu2gDrP5kIAnnPvS4cTS7aoFh7tPQbuzS8guWGObREPUVPcndAIAvimJDFFOCOc9pC3F0EnLgTgP4AvwE6Juzlwt%2FWCWagS6fmNH1TuXK3zMjAJcd6zXdaEs&X-Amz-Signature=8fdbc9cbaf21b6db7fc5f298ec582ef114eb0605722daa4c999027d8a4322ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJCZR5V%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICTesV3gjVyxOT6vy%2BcpZDXqBMiNdzYwe41jXkLV%2FVIyAiEA9uJMSg%2BSbd%2BIIjuhd8%2FxLGYw7oLtU9D0VCpKSH7HiGYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs1D3fu%2BM1pgeo3zSrcA33cOPRrPrAw%2Bxf0u8NsVApIQwIXryRuKSQRSWmQh5NK9etgefkeIEkaPZah7QvBxeeltX3NI0VkUYQUTIImTmdXckwWZvrfaku7YEkYkrAK5%2FxUDwzCzhqd4VJh9e414lX1UvNbo6AWr%2F4h%2F6FjUSQEY8uFle34KyZA1GkcPP1cgAj3ZRTkeJd8RWc7J0R%2FgyDoRgyjz4czvlGi4qXiZOKLaRM5k8sNijdyASS7PR5LpdteR1LM3xxZMEqoVC8NpP9WNwZYDZo3vuaDRooKNKJct779kTD%2B5JjhvhZnDEeIqdzW8IK3brJlrgWC1D3c1zPtv2m2lMp28CDqACoUPRujmsBCRqD4HNQ60MtSsyP1PR7bGtIC6v5XGlZfM0s5kQTP3onDyaQlhkH2t7lS0pvz56hbL0ll6JGabrk%2BsguEefxzhHA1LNFUEsMEB9%2BbmJvdWlbbYQZbIMjWwQz%2BYk5KhA7PAn2QvLqFHlHqdVsjzebZJuf3XRxc5%2FJxQCsT8IX6P35%2FOSXlat6h0DwQPI3HWcsz%2FpC%2F%2FctSNZpVQQzVxC%2Bmg8HjkxIFKde93eSYEQi9i%2BVouAz0iuH01lBSoUf2pt%2BW2kgUIP4AI%2FkEDxo%2BTx1XMJDdLJiAKu38MJzB38IGOqUBUtOP8m%2BBUFo3Fg9NJi8cSFd5hMsyVhhH4RkE%2F8i6Ygp%2BKvr2fEJKsAE2EQKKzZvu33x4fzLLpho10ztgPGobQHt2oJb81obc7Hqvzu2gDrP5kIAnnPvS4cTS7aoFh7tPQbuzS8guWGObREPUVPcndAIAvimJDFFOCOc9pC3F0EnLgTgP4AvwE6Juzlwt%2FWCWagS6fmNH1TuXK3zMjAJcd6zXdaEs&X-Amz-Signature=a790d9b4c3be1f3e646e17fc6639987b3ae1f152d83cd25b5668be52a37fa51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJCZR5V%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICTesV3gjVyxOT6vy%2BcpZDXqBMiNdzYwe41jXkLV%2FVIyAiEA9uJMSg%2BSbd%2BIIjuhd8%2FxLGYw7oLtU9D0VCpKSH7HiGYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs1D3fu%2BM1pgeo3zSrcA33cOPRrPrAw%2Bxf0u8NsVApIQwIXryRuKSQRSWmQh5NK9etgefkeIEkaPZah7QvBxeeltX3NI0VkUYQUTIImTmdXckwWZvrfaku7YEkYkrAK5%2FxUDwzCzhqd4VJh9e414lX1UvNbo6AWr%2F4h%2F6FjUSQEY8uFle34KyZA1GkcPP1cgAj3ZRTkeJd8RWc7J0R%2FgyDoRgyjz4czvlGi4qXiZOKLaRM5k8sNijdyASS7PR5LpdteR1LM3xxZMEqoVC8NpP9WNwZYDZo3vuaDRooKNKJct779kTD%2B5JjhvhZnDEeIqdzW8IK3brJlrgWC1D3c1zPtv2m2lMp28CDqACoUPRujmsBCRqD4HNQ60MtSsyP1PR7bGtIC6v5XGlZfM0s5kQTP3onDyaQlhkH2t7lS0pvz56hbL0ll6JGabrk%2BsguEefxzhHA1LNFUEsMEB9%2BbmJvdWlbbYQZbIMjWwQz%2BYk5KhA7PAn2QvLqFHlHqdVsjzebZJuf3XRxc5%2FJxQCsT8IX6P35%2FOSXlat6h0DwQPI3HWcsz%2FpC%2F%2FctSNZpVQQzVxC%2Bmg8HjkxIFKde93eSYEQi9i%2BVouAz0iuH01lBSoUf2pt%2BW2kgUIP4AI%2FkEDxo%2BTx1XMJDdLJiAKu38MJzB38IGOqUBUtOP8m%2BBUFo3Fg9NJi8cSFd5hMsyVhhH4RkE%2F8i6Ygp%2BKvr2fEJKsAE2EQKKzZvu33x4fzLLpho10ztgPGobQHt2oJb81obc7Hqvzu2gDrP5kIAnnPvS4cTS7aoFh7tPQbuzS8guWGObREPUVPcndAIAvimJDFFOCOc9pC3F0EnLgTgP4AvwE6Juzlwt%2FWCWagS6fmNH1TuXK3zMjAJcd6zXdaEs&X-Amz-Signature=aca74decab099eb2363ff3dc532ce6b83171ea4fd491e072a7d134b32d79cefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJCZR5V%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICTesV3gjVyxOT6vy%2BcpZDXqBMiNdzYwe41jXkLV%2FVIyAiEA9uJMSg%2BSbd%2BIIjuhd8%2FxLGYw7oLtU9D0VCpKSH7HiGYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs1D3fu%2BM1pgeo3zSrcA33cOPRrPrAw%2Bxf0u8NsVApIQwIXryRuKSQRSWmQh5NK9etgefkeIEkaPZah7QvBxeeltX3NI0VkUYQUTIImTmdXckwWZvrfaku7YEkYkrAK5%2FxUDwzCzhqd4VJh9e414lX1UvNbo6AWr%2F4h%2F6FjUSQEY8uFle34KyZA1GkcPP1cgAj3ZRTkeJd8RWc7J0R%2FgyDoRgyjz4czvlGi4qXiZOKLaRM5k8sNijdyASS7PR5LpdteR1LM3xxZMEqoVC8NpP9WNwZYDZo3vuaDRooKNKJct779kTD%2B5JjhvhZnDEeIqdzW8IK3brJlrgWC1D3c1zPtv2m2lMp28CDqACoUPRujmsBCRqD4HNQ60MtSsyP1PR7bGtIC6v5XGlZfM0s5kQTP3onDyaQlhkH2t7lS0pvz56hbL0ll6JGabrk%2BsguEefxzhHA1LNFUEsMEB9%2BbmJvdWlbbYQZbIMjWwQz%2BYk5KhA7PAn2QvLqFHlHqdVsjzebZJuf3XRxc5%2FJxQCsT8IX6P35%2FOSXlat6h0DwQPI3HWcsz%2FpC%2F%2FctSNZpVQQzVxC%2Bmg8HjkxIFKde93eSYEQi9i%2BVouAz0iuH01lBSoUf2pt%2BW2kgUIP4AI%2FkEDxo%2BTx1XMJDdLJiAKu38MJzB38IGOqUBUtOP8m%2BBUFo3Fg9NJi8cSFd5hMsyVhhH4RkE%2F8i6Ygp%2BKvr2fEJKsAE2EQKKzZvu33x4fzLLpho10ztgPGobQHt2oJb81obc7Hqvzu2gDrP5kIAnnPvS4cTS7aoFh7tPQbuzS8guWGObREPUVPcndAIAvimJDFFOCOc9pC3F0EnLgTgP4AvwE6Juzlwt%2FWCWagS6fmNH1TuXK3zMjAJcd6zXdaEs&X-Amz-Signature=78ea3ed3268846a2b64c09e7e4312484bb7b5933a51ef1ce1de79531d934f671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJCZR5V%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICTesV3gjVyxOT6vy%2BcpZDXqBMiNdzYwe41jXkLV%2FVIyAiEA9uJMSg%2BSbd%2BIIjuhd8%2FxLGYw7oLtU9D0VCpKSH7HiGYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs1D3fu%2BM1pgeo3zSrcA33cOPRrPrAw%2Bxf0u8NsVApIQwIXryRuKSQRSWmQh5NK9etgefkeIEkaPZah7QvBxeeltX3NI0VkUYQUTIImTmdXckwWZvrfaku7YEkYkrAK5%2FxUDwzCzhqd4VJh9e414lX1UvNbo6AWr%2F4h%2F6FjUSQEY8uFle34KyZA1GkcPP1cgAj3ZRTkeJd8RWc7J0R%2FgyDoRgyjz4czvlGi4qXiZOKLaRM5k8sNijdyASS7PR5LpdteR1LM3xxZMEqoVC8NpP9WNwZYDZo3vuaDRooKNKJct779kTD%2B5JjhvhZnDEeIqdzW8IK3brJlrgWC1D3c1zPtv2m2lMp28CDqACoUPRujmsBCRqD4HNQ60MtSsyP1PR7bGtIC6v5XGlZfM0s5kQTP3onDyaQlhkH2t7lS0pvz56hbL0ll6JGabrk%2BsguEefxzhHA1LNFUEsMEB9%2BbmJvdWlbbYQZbIMjWwQz%2BYk5KhA7PAn2QvLqFHlHqdVsjzebZJuf3XRxc5%2FJxQCsT8IX6P35%2FOSXlat6h0DwQPI3HWcsz%2FpC%2F%2FctSNZpVQQzVxC%2Bmg8HjkxIFKde93eSYEQi9i%2BVouAz0iuH01lBSoUf2pt%2BW2kgUIP4AI%2FkEDxo%2BTx1XMJDdLJiAKu38MJzB38IGOqUBUtOP8m%2BBUFo3Fg9NJi8cSFd5hMsyVhhH4RkE%2F8i6Ygp%2BKvr2fEJKsAE2EQKKzZvu33x4fzLLpho10ztgPGobQHt2oJb81obc7Hqvzu2gDrP5kIAnnPvS4cTS7aoFh7tPQbuzS8guWGObREPUVPcndAIAvimJDFFOCOc9pC3F0EnLgTgP4AvwE6Juzlwt%2FWCWagS6fmNH1TuXK3zMjAJcd6zXdaEs&X-Amz-Signature=ee7046ec0d07077e4624e6041dceda2022986570b4b4a7f7e30094a98ab76c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
