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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHLTTPG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa24l%2FPPyrkYUDpLYepC7BmenL9o8qfsDAOjh96stX%2FAIhALqAjN2fqCHS2XL4qdjwawqqFeooeqEjY32AXHbIP0AxKv8DCDYQABoMNjM3NDIzMTgzODA1IgziE1YEGhUofVkFibcq3AOglgXq0w6dy%2FVmZ5yS3UG1AFuz48YSWW5MMoB3IfIdip3X9y5Hs8RsQuuvjjKwOIxQzaV3jofQiWIguTj2U%2BUgyEmzIgyCfnnG4NQatXEvd4knVl2rWrGI%2Bya1GR3w8D4E4pNZkbBPvqxFQrk7bn0PPe3GG%2B4GZVXQOqLV5ziPYZCWn7DSgvt%2BXbXbEHTBuVqzFi%2BDZGujr5TFv8HLmgddTqzp%2BEMDyAZ%2B5ZQskcfiKMfLg7NsaKltqug6IfP899aNVWSPOrr3btcALkUJOihtrxwubl8BqTdKE4f0PhgwKN09NhFrTXzCILNpgM6MSztBcZ%2Bb%2BWpQre45oq5ATrda5YtpYDRnUtLOg2wqD7w%2Bz7JK7R2KGQ53n4Dr2WxeNd8YGx3OiyfuXmFEptpuBiuMggD7Cl35qS10CA7ztjFtGka03b0TV94FV%2BbN5rI7gS7WbO%2FVbtQGxxa948s5v2WfQW%2FI%2BSMd%2FDZOfi6nan4nRrdiB%2FsKcS5pG0t8Ao9v21El%2FO%2B432kmwDrMBOwKdChWoC8nKwwgtMRNdmkg%2B5Vc821IC7Fgc0YhGJC3f5z0ngZAIw1wX1y1KT899uwGxl%2F6hdvOhTqBR51YIRcHcmbnNTA5EAOIWv3RRhbSvjDy%2Fdy%2BBjqkAcdqoJq874gmcyEcuTaI0vZg0kxR%2BdsrI4q0bouO1owarYiNEv1RtRrgEWBuebKg1RUCC%2FMfwo1qo6dReseaoYvHzMugaWTQV%2FH5bL6lNPXox7Rtq8rIu%2FV2oriJOeAWjjQPnPs45U3kgZLVWlqT3VkPZzeIHtRgW4wE99353pOvGmz8OdHXhdxXSt41sMx%2Ba2O5U%2BslmXh7gRb%2FCPRKlt%2BPAflI&X-Amz-Signature=bba918d14e74885af15eee5f4611ca4efe105390224a0a0260e21e3e3585d019&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHLTTPG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa24l%2FPPyrkYUDpLYepC7BmenL9o8qfsDAOjh96stX%2FAIhALqAjN2fqCHS2XL4qdjwawqqFeooeqEjY32AXHbIP0AxKv8DCDYQABoMNjM3NDIzMTgzODA1IgziE1YEGhUofVkFibcq3AOglgXq0w6dy%2FVmZ5yS3UG1AFuz48YSWW5MMoB3IfIdip3X9y5Hs8RsQuuvjjKwOIxQzaV3jofQiWIguTj2U%2BUgyEmzIgyCfnnG4NQatXEvd4knVl2rWrGI%2Bya1GR3w8D4E4pNZkbBPvqxFQrk7bn0PPe3GG%2B4GZVXQOqLV5ziPYZCWn7DSgvt%2BXbXbEHTBuVqzFi%2BDZGujr5TFv8HLmgddTqzp%2BEMDyAZ%2B5ZQskcfiKMfLg7NsaKltqug6IfP899aNVWSPOrr3btcALkUJOihtrxwubl8BqTdKE4f0PhgwKN09NhFrTXzCILNpgM6MSztBcZ%2Bb%2BWpQre45oq5ATrda5YtpYDRnUtLOg2wqD7w%2Bz7JK7R2KGQ53n4Dr2WxeNd8YGx3OiyfuXmFEptpuBiuMggD7Cl35qS10CA7ztjFtGka03b0TV94FV%2BbN5rI7gS7WbO%2FVbtQGxxa948s5v2WfQW%2FI%2BSMd%2FDZOfi6nan4nRrdiB%2FsKcS5pG0t8Ao9v21El%2FO%2B432kmwDrMBOwKdChWoC8nKwwgtMRNdmkg%2B5Vc821IC7Fgc0YhGJC3f5z0ngZAIw1wX1y1KT899uwGxl%2F6hdvOhTqBR51YIRcHcmbnNTA5EAOIWv3RRhbSvjDy%2Fdy%2BBjqkAcdqoJq874gmcyEcuTaI0vZg0kxR%2BdsrI4q0bouO1owarYiNEv1RtRrgEWBuebKg1RUCC%2FMfwo1qo6dReseaoYvHzMugaWTQV%2FH5bL6lNPXox7Rtq8rIu%2FV2oriJOeAWjjQPnPs45U3kgZLVWlqT3VkPZzeIHtRgW4wE99353pOvGmz8OdHXhdxXSt41sMx%2Ba2O5U%2BslmXh7gRb%2FCPRKlt%2BPAflI&X-Amz-Signature=11e2d4cf5b63e8ec614a3146e2c16611d4902b03f807ae1bc0cfdf5e5d1e5644&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHLTTPG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa24l%2FPPyrkYUDpLYepC7BmenL9o8qfsDAOjh96stX%2FAIhALqAjN2fqCHS2XL4qdjwawqqFeooeqEjY32AXHbIP0AxKv8DCDYQABoMNjM3NDIzMTgzODA1IgziE1YEGhUofVkFibcq3AOglgXq0w6dy%2FVmZ5yS3UG1AFuz48YSWW5MMoB3IfIdip3X9y5Hs8RsQuuvjjKwOIxQzaV3jofQiWIguTj2U%2BUgyEmzIgyCfnnG4NQatXEvd4knVl2rWrGI%2Bya1GR3w8D4E4pNZkbBPvqxFQrk7bn0PPe3GG%2B4GZVXQOqLV5ziPYZCWn7DSgvt%2BXbXbEHTBuVqzFi%2BDZGujr5TFv8HLmgddTqzp%2BEMDyAZ%2B5ZQskcfiKMfLg7NsaKltqug6IfP899aNVWSPOrr3btcALkUJOihtrxwubl8BqTdKE4f0PhgwKN09NhFrTXzCILNpgM6MSztBcZ%2Bb%2BWpQre45oq5ATrda5YtpYDRnUtLOg2wqD7w%2Bz7JK7R2KGQ53n4Dr2WxeNd8YGx3OiyfuXmFEptpuBiuMggD7Cl35qS10CA7ztjFtGka03b0TV94FV%2BbN5rI7gS7WbO%2FVbtQGxxa948s5v2WfQW%2FI%2BSMd%2FDZOfi6nan4nRrdiB%2FsKcS5pG0t8Ao9v21El%2FO%2B432kmwDrMBOwKdChWoC8nKwwgtMRNdmkg%2B5Vc821IC7Fgc0YhGJC3f5z0ngZAIw1wX1y1KT899uwGxl%2F6hdvOhTqBR51YIRcHcmbnNTA5EAOIWv3RRhbSvjDy%2Fdy%2BBjqkAcdqoJq874gmcyEcuTaI0vZg0kxR%2BdsrI4q0bouO1owarYiNEv1RtRrgEWBuebKg1RUCC%2FMfwo1qo6dReseaoYvHzMugaWTQV%2FH5bL6lNPXox7Rtq8rIu%2FV2oriJOeAWjjQPnPs45U3kgZLVWlqT3VkPZzeIHtRgW4wE99353pOvGmz8OdHXhdxXSt41sMx%2Ba2O5U%2BslmXh7gRb%2FCPRKlt%2BPAflI&X-Amz-Signature=2501cd27cc66c7ec4c1452e709d69661635dd059efe27d8da3e8914cc3fa13cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHLTTPG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa24l%2FPPyrkYUDpLYepC7BmenL9o8qfsDAOjh96stX%2FAIhALqAjN2fqCHS2XL4qdjwawqqFeooeqEjY32AXHbIP0AxKv8DCDYQABoMNjM3NDIzMTgzODA1IgziE1YEGhUofVkFibcq3AOglgXq0w6dy%2FVmZ5yS3UG1AFuz48YSWW5MMoB3IfIdip3X9y5Hs8RsQuuvjjKwOIxQzaV3jofQiWIguTj2U%2BUgyEmzIgyCfnnG4NQatXEvd4knVl2rWrGI%2Bya1GR3w8D4E4pNZkbBPvqxFQrk7bn0PPe3GG%2B4GZVXQOqLV5ziPYZCWn7DSgvt%2BXbXbEHTBuVqzFi%2BDZGujr5TFv8HLmgddTqzp%2BEMDyAZ%2B5ZQskcfiKMfLg7NsaKltqug6IfP899aNVWSPOrr3btcALkUJOihtrxwubl8BqTdKE4f0PhgwKN09NhFrTXzCILNpgM6MSztBcZ%2Bb%2BWpQre45oq5ATrda5YtpYDRnUtLOg2wqD7w%2Bz7JK7R2KGQ53n4Dr2WxeNd8YGx3OiyfuXmFEptpuBiuMggD7Cl35qS10CA7ztjFtGka03b0TV94FV%2BbN5rI7gS7WbO%2FVbtQGxxa948s5v2WfQW%2FI%2BSMd%2FDZOfi6nan4nRrdiB%2FsKcS5pG0t8Ao9v21El%2FO%2B432kmwDrMBOwKdChWoC8nKwwgtMRNdmkg%2B5Vc821IC7Fgc0YhGJC3f5z0ngZAIw1wX1y1KT899uwGxl%2F6hdvOhTqBR51YIRcHcmbnNTA5EAOIWv3RRhbSvjDy%2Fdy%2BBjqkAcdqoJq874gmcyEcuTaI0vZg0kxR%2BdsrI4q0bouO1owarYiNEv1RtRrgEWBuebKg1RUCC%2FMfwo1qo6dReseaoYvHzMugaWTQV%2FH5bL6lNPXox7Rtq8rIu%2FV2oriJOeAWjjQPnPs45U3kgZLVWlqT3VkPZzeIHtRgW4wE99353pOvGmz8OdHXhdxXSt41sMx%2Ba2O5U%2BslmXh7gRb%2FCPRKlt%2BPAflI&X-Amz-Signature=dfe382c615936d6a66c5b1845faa551c77a4f64107ff3e4e979db51e89356d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHLTTPG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa24l%2FPPyrkYUDpLYepC7BmenL9o8qfsDAOjh96stX%2FAIhALqAjN2fqCHS2XL4qdjwawqqFeooeqEjY32AXHbIP0AxKv8DCDYQABoMNjM3NDIzMTgzODA1IgziE1YEGhUofVkFibcq3AOglgXq0w6dy%2FVmZ5yS3UG1AFuz48YSWW5MMoB3IfIdip3X9y5Hs8RsQuuvjjKwOIxQzaV3jofQiWIguTj2U%2BUgyEmzIgyCfnnG4NQatXEvd4knVl2rWrGI%2Bya1GR3w8D4E4pNZkbBPvqxFQrk7bn0PPe3GG%2B4GZVXQOqLV5ziPYZCWn7DSgvt%2BXbXbEHTBuVqzFi%2BDZGujr5TFv8HLmgddTqzp%2BEMDyAZ%2B5ZQskcfiKMfLg7NsaKltqug6IfP899aNVWSPOrr3btcALkUJOihtrxwubl8BqTdKE4f0PhgwKN09NhFrTXzCILNpgM6MSztBcZ%2Bb%2BWpQre45oq5ATrda5YtpYDRnUtLOg2wqD7w%2Bz7JK7R2KGQ53n4Dr2WxeNd8YGx3OiyfuXmFEptpuBiuMggD7Cl35qS10CA7ztjFtGka03b0TV94FV%2BbN5rI7gS7WbO%2FVbtQGxxa948s5v2WfQW%2FI%2BSMd%2FDZOfi6nan4nRrdiB%2FsKcS5pG0t8Ao9v21El%2FO%2B432kmwDrMBOwKdChWoC8nKwwgtMRNdmkg%2B5Vc821IC7Fgc0YhGJC3f5z0ngZAIw1wX1y1KT899uwGxl%2F6hdvOhTqBR51YIRcHcmbnNTA5EAOIWv3RRhbSvjDy%2Fdy%2BBjqkAcdqoJq874gmcyEcuTaI0vZg0kxR%2BdsrI4q0bouO1owarYiNEv1RtRrgEWBuebKg1RUCC%2FMfwo1qo6dReseaoYvHzMugaWTQV%2FH5bL6lNPXox7Rtq8rIu%2FV2oriJOeAWjjQPnPs45U3kgZLVWlqT3VkPZzeIHtRgW4wE99353pOvGmz8OdHXhdxXSt41sMx%2Ba2O5U%2BslmXh7gRb%2FCPRKlt%2BPAflI&X-Amz-Signature=700710d354ab2ec3f8ed5bb681217f4cd9b212779a0ff140fffefafa5e188ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
